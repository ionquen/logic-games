import React from 'react'
import {Link} from "react-router-dom"
import Popup from './Popup'
import RoomCreate from './RoomCreate'
import RoomDetails from './RoomDetails'
import styles from '../../static/css/lobby.module.css'
import {InputTextSubmit, Button} from './FormElements'
import {gameById} from '../../lang/Lang.js'
import {ReactComponent as IconInfo} from '../../static/img/icons/information-fill.svg'

/*
    Принимаемые события
     token: установить новый token, userId
     list: список комнат
     connectbyroomid: информация о комнате с заданным roomId
     join: пользователь подключен к комнате
    Отправляемые события
     list: получить список комнат (+отправить token)
     connectbyroomid: получить информацию о комнате по roomId
     join: подключиться к комнате
     leave: покинуть комнату
 */

class Lobby extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lobbyList: [],
            roomId: undefined,
        }
        this.emitter = props.emitter
    }

    componentWillMount() {
        this.wsReconnect()
    }
    wsReconnect = () => { 
        const ws = new WebSocket("wss://games-ws.ionquen.ru:8082")
        console.log('Попытка подключения к серверу')
        ws.onopen = () => {
            ws.send(JSON.stringify({type: 'list', data: {gameId: this.props.match.params.gameId, token: localStorage.getItem('token')}}))
            this.props.emitter.emit('chatStateChange', true)
            ws.onmessage = (e) => {
                const messageParsed = JSON.parse(e.data)
                const data = messageParsed.data
                switch (messageParsed.type) {
                    case 'token': 
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('userId', data.userId)
                    localStorage.setItem('userName', `Гость${data.userId}`)
                    break
                    case 'list': 
                        this.setState({lobbyList: data})
                        break
                    case 'connectbyroomid': 
                        if (data===false) {
                            alert('Комната не найдена')
                            return
                        }
                        this.props.setPopupUntracked(
                            <Popup setPopupUntracked={this.props.setPopupUntracked}>
                                <RoomDetails ws={this.ws} data={data.roomInfo} disabled={true} /> 
                            </Popup>
                        )
                        break
                    case 'join': 
                        this.props.setPopupUntracked(null)
                        this.props.history.push(`/game/${this.props.match.params.gameId}/${data}`)
                        break
                    default: break
                }
            }
            this.ws=ws
        }
        ws.onerror = e => ws.close()
        ws.onclose = e => {if(e!==1000) this.reconnectTimeout = setTimeout(this.wsReconnect, 3000)}
        
    }
    componentWillUnmount() {
        clearTimeout(this.reconnectTimeout)
        if(this.ws!==undefined&&this.ws.readyState===WebSocket.OPEN) this.ws.close(1000)
    }
    componentWillReceiveProps(nextProps) {
        //Меняем содержимое лобби при смене лобби игры
        if(this.props.match.params.gameId!==nextProps.match.params.gameId) this.ws.send(JSON.stringify({type: 'list', data: {gameId: ""+nextProps.match.params.gameId}}))
    }
    createNewRoom = () => this.props.setPopupUntracked(
        <Popup setPopupUntracked={this.props.setPopupUntracked}>
            <RoomCreate ws={this.ws} gameId={this.props.match.params.gameId} disabled={false}/> 
        </Popup>
        )
    connectById = (e) => {
        e.preventDefault()
        this.ws.send(JSON.stringify({type: 'connectbyroomid', data: e.target['connect-by-room-id'].value}))
    }

    
    render() {
        return ( 
            <div className={styles.lobby}>
                <div>
                    <InputTextSubmit name="search-input" placeholder="Поиск" autoComplete={false} />
                    <InputTextSubmit name="connect-by-room-id" placeholder="Подключиться по id" autoComplete={false} onSubmit={this.connectById}/>
                    <Button onClick={this.createNewRoom}>Создать комнату</Button>
                </div>
                <div>
                    {this.state.lobbyList.map(room => <DisplayRoom data={room} ws={this.ws} emitter={this.props.emitter} setPopupUntracked={this.props.setPopupUntracked} />)}
                </div>
            </div>
        )
    }
}

class DisplayRoom extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            connected: props.data.users.some(user => user.userId===localStorage.getItem("userId")&&user.leave===false?true:false),
        }
    }
    getPlayers = () => this.props.data.users.map((user) => <span><span>{user.userId}#</span><span>{user.userName}</span></span>)
    
    getTags = () => {
        let result = []
        result.push(gameById(this.props.data.gameId))
        if (this.props.data.usePw) result.push('password')
        result.push('public')
        if (this.props.data.autostart) result.push('autostart')
        if (this.props.data.started) result.push('started')
        return result.map((tag) => <div>{tag}</div>)
    }

    popupDetails = () => this.props.setPopupUntracked(
        <Popup setPopupUntracked={this.props.setPopupUntracked}>
            <RoomDetails ws={this.props.ws} data={this.props.data} disabled={true}  /> 
        </Popup>
    )

    leave = () => {
        this.props.ws.send(JSON.stringify({type: 'leave', data: this.props.data.roomId}))
        this.setState({connected: false})
        this.props.emitter.emit('private', 'Вы покинули комнату #'+this.props.data.roomId)
    }

    render() {
        return (
            <div className={styles.item}>
                {this.state.connected?
                <div className={styles.connected}>
                    <div>Вы уже присоединились к данной комнате!</div>
                    <div onClick={this.reconnect}>
                        <Link to={`/game/${this.props.data.gameId}/${this.props.data.roomId}`}>Вернуться</Link>
                    </div>
                    <div onClick={this.leave}>Покинуть</div>
                </div>:null}
                <div>
                    <div>
                        <div>
                            <span>#{this.props.data.roomId}</span>
                            <span>{this.props.data.name}</span>
                        </div>
                        <div>
                            <span>{this.props.data.users.length||0} / {this.props.data.max} : </span>
                            <span>{this.getPlayers()}</span>
                        </div>
                        <div>{this.getTags()}</div>
                    </div>
                    {this.state.connected?null:
                    <div>
                        <Button onClick={this.popupDetails}>
                            <span>Подробнее</span>
                            <IconInfo />
                        </Button>
                    </div>
                    }
                </div>
            </div>
        )
    }
}
export default Lobby;