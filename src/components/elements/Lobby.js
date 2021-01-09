import React from 'react';
import {Link, Redirect} from "react-router-dom";
import Popup from './Popup';
import RoomCreate from './RoomCreate';
import RoomDetails from './RoomDetails';
import {ReactComponent as SvgIconInfo} from '../../static/img/information-fill.svg'
import styles from '../../static/css/lobby.module.css'
import {InputTextSubmit, Button} from './FormElements'


class Lobby extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lobbyList: [],
            privateRoomId: '',
        }
        this.emitter = props.emitter
    }

    componentWillMount() {
        const ws = new WebSocket("ws://localhost:8082")
        ws.onopen = () => {
            ws.send(JSON.stringify({type: 'list', data: {gameId: this.props.match.params.gameId, token: localStorage.getItem('token')}}))
            this.props.emitter.emit('displayGlobalChat', true)
        }
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
                    this.props.setWindow(
                        <Popup setWindow={this.props.setWindow}>
                            <RoomDetails ws={this.ws} data={data.roomInfo} disabled={true} /> 
                        </Popup>
                    )
                    break
                case 'join': 
                    this.props.setWindow(null)
                    this.setState({roomId: data})
                    break
                default: break
            }
        }
        ws.onerror = (e) => {
            this.props.emitter.emit('global', 'Ошибка соединения (Глобальный чат): ' + e)
        }
        this.ws=ws
    }

    componentWillUnmount() {
        this.ws.close()
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.gameId!==nextProps.match.params.gameId) this.ws.send(JSON.stringify({type: 'list', data: {gameId: ""+nextProps.match.params.gameId}}))
    }
    createNewRoom = () => this.props.setWindow(
        <Popup setWindow={this.props.setWindow}>
            <RoomCreate ws={this.ws} gameId={this.props.match.params.gameId} disabled={false}/> 
        </Popup>
        )
    connectById = (e) => {
        e.preventDefault()
        this.ws.send(JSON.stringify({type: 'connectbyroomid', data: e.target['connect-by-room-id'].value}))
    }

    
    render() {
        return (
        <>      
            <div className={styles.lobby}>
                <div className={styles.header}>
                    <InputTextSubmit name="search-input" placeholder="Поиск" autoComplete={false} />
                    <InputTextSubmit name="connect-by-room-id" placeholder="Подключиться по id" autoComplete={false} onSubmit={this.connectById}/>
                    <Button onClick={this.createNewRoom}>Создать комнату</Button>
                </div>
                <div className={styles.body}>
                    {this.state.lobbyList.map(room => <DisplayRoom data={room} ws={this.ws} emitter={this.props.emitter} setWindow={this.props.setWindow} />)}
                </div>
                {this.props.children}
            </div>
            {this.state.roomId!==undefined&&this.state.roomId!==false?<Redirect to={`/g/${this.props.match.params.gameId}/${this.state.roomId}`}></Redirect>:null}
        </>
        )
    }
}

class DisplayRoom extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            connected: props.data.users.some(user => user.userId=== +localStorage.userId&&user.leave===false?true:false),
        }
    }
    players = () => this.props.data.users.map((user) => <span><span>{user.userId}#</span><span>{user.userName}</span></span>)
    
    tags = () => {
        let result = []
        switch (this.props.data.gameId) {
            case "tictactoe": result.push('Tic tac toe')
                break
            default: break
        }
        if (this.props.data.usePw) result.push('password')
        result.push('public')
        if (this.props.data.autostart) result.push('autostart')
        return result.map((tag) => <div>{tag}</div>)
    }

    moreDetails = () => this.props.setWindow(
        <Popup setWindow={this.props.setWindow}>
            <RoomDetails ws={this.props.ws} data={this.props.data} disabled={true}  /> 
        </Popup>
    )

    leave = () => {
        this.props.ws.send(JSON.stringify({type: 'leave', data: this.props.data.roomId}))
        this.setState({connected: false})
        this.props.emitter.emit('private', 'Вы вышли из комнаты #'+this.props.data.roomId)
    }

    render() {
        return (
            <div className={styles.item}>
                {this.state.connected?
                <div className={styles.connected}>
                    <div>Вы уже присоединились к данной комнате!</div>
                    <div onClick={this.reconnect}>
                        <Link to={`/g/${this.props.data.gameId}/${this.props.data.roomId}`}>Вернуться</Link>
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
                            <span>{this.players()}</span>
                        </div>
                        <div>{this.tags()}</div>
                    </div>
                    {this.state.connected?null:
                    <div>
                        <Button onClick={this.moreDetails}>
                            <span>Подробнее</span>
                            <SvgIconInfo />
                        </Button>
                    </div>
                    }
                </div>
            </div>
        )
    }
}
export default Lobby;