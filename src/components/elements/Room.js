import React, { Suspense, lazy } from 'react'
import RoomInfo from './RoomInfo'
import {Button} from './FormElements'
import styles from '../../static/css/room.module.css'
import {ReactComponent as IconList} from '../../static/img/icons/list-check.svg'
/*
Принимаемые события
  connect: подключение к комнате
  chat: пришло сообщение в приватный чат текущей комнаты
  userJoin: присоединился новый игрок
  userLeave: игрок вышел из комнаты
  userConnected: игрок вернулся
  userDisconnected: игрок отключился
  start: игра была начата
  finished: Игра была завершена
  game: передать внутриигровую информацию в компонент игры
Отправляемые события
  chat: отправить сообщение в чат
  connect: присоединиться к комнате
  game: отправить внутриигровую информацию
  start: начать игру
*/
const Tictactoe = lazy(() => import('../games/Tictactoe'))
const Minesweeper = lazy(() => import('../games/Minesweeper'))

class Room extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      roomInfo: undefined,
    }
  }

  componentWillMount() {
    this.wsReconnect()
    this.emitterUnsubPrivateChat = this.props.emitter.sub('privateChatSend', data => this.ws.send(JSON.stringify({type: 'chat', data: data})))
    this.emitterUnsubAction = this.props.emitter.sub('action', data => this.ws.send(JSON.stringify({type: 'game', data: data})))
  }
  wsReconnect = () => { 
    const ws = new WebSocket("wss://games-ws.ionquen.ru:8083")
    console.log('Попытка подключения к серверу')
    ws.onopen = () => {
      ws.send(JSON.stringify({type: 'connect', data: {roomId: this.props.match.params.roomId, token: localStorage.getItem('token')}}))
      this.props.emitter.emit('chatStateChange', false)
      
      ws.onmessage = (e) => {
        const messageParsed = JSON.parse(e.data)
        const data = messageParsed.data
        switch (messageParsed.type) {
          case 'connect': 
            this.setState({roomInfo: data.roomInfo})
            if(data.gameInfo!==undefined) this.setState({gameInfo: data.gameInfo})
            this.props.emitter.emit('private', 'Подключение к комнате #'+this.state.roomInfo.roomId)
            this.props.emitter.emit('privateChatHistory', data.chat)
            break
          case 'chat': this.props.emitter.emit('private', data)
            break
          case 'userJoin': this.setState((prevState) =>({roomInfo: {...prevState.roomInfo, users: [...prevState.roomInfo.users, data]}}))
            break
          case 'userLeave': {
            let newArrayUsers = []
            if(this.state.roomInfo.started) {
              this.state.roomInfo.users.forEach(user => user.userId!==data?newArrayUsers.push(user):newArrayUsers.push({...user, leave: true}))
            } else this.state.roomInfo.users.forEach(user => user.userId!==data?newArrayUsers.push(user):null)
            this.setState((prevState) =>({roomInfo: {...prevState.roomInfo, users: newArrayUsers}}))
            break
          }
          case 'userDisconnected':{
            let newArrayUsers = []
            this.state.roomInfo.users.forEach(user => user.userId!==data?newArrayUsers.push(user):newArrayUsers.push({...user, connected: false}))
            this.setState((prevState) =>({roomInfo: {...prevState.roomInfo, users: newArrayUsers}}))
            break
          }
          case 'userConnected':{
            let newArrayUsers = []
            this.state.roomInfo.users.forEach(user => user.userId!==data?newArrayUsers.push(user):newArrayUsers.push({...user, connected: true}))
            this.setState((prevState) =>({roomInfo: {...prevState.roomInfo, users: newArrayUsers}}))
            break
          }
          case 'start': this.setState((prevState) => ({roomInfo: {...prevState.roomInfo, started: true}, gameInfo: data}))
            break
          case 'finished': 
            this.props.emitter.emit('private', 'Матч завершён')
            this.setState((prevState) => ({roomInfo: {...prevState.roomInfo, started: false}}))
            break
          case 'game': this.props.emitter.emit('game', data)
            break
          default:break
        }
      }   
      this.ws=ws
    }
    ws.onerror = (e) => ws.close()
    ws.onclose = (e) => e===1000?null:() => {this.reconnectTimeout = setTimeout(this.wsReconnect, 3000)}
  }
  componentWillUnmount() {
    clearTimeout(this.reconnectTimeout)
    if(this.ws.readyState===WebSocket.OPEN) this.ws.close(1000)
    this.emitterUnsubAction()
    this.emitterUnsubPrivateChat()
    this.props.emitter.emit('private', 'Выполнено отключение от комнаты')
  }

  startTheGame = (e) => {
    e.preventDefault()
    this.ws.send(JSON.stringify({type: 'start'}))
  }
  getGameComponent() {
    if(!this.state.roomInfo.started||this.state.gameInfo===undefined) return
    switch (this.state.roomInfo.gameId) {
      case "tictactoe": return <Tictactoe gameInfo={this.state.gameInfo} players={this.state.roomInfo.users} emitter={this.props.emitter} />
      case "minesweeper": return <Minesweeper gameInfo={this.state.gameInfo} players={this.state.roomInfo.users} emitter={this.props.emitter} />
      default: break
    }
  }
  redirectToLobby = () => this.props.history.push(`/game/${this.props.match.params.gameId}`)
  render() {
      return (
            <div className={styles.room}>
              {this.state.roomInfo===undefined?<Button onClick={this.redirectToLobby}>В лобби</Button>
              :
                <>
                  <div className={styles.match}>
                    <Suspense>
                      {this.getGameComponent()}
                    </Suspense>
                  </div>
                  {this.state.roomInfo.started?
                    <Button onClick={this.redirectToLobby} className={styles.btnToLobby}>
                      <IconList />
                      <span>В лобби</span>
                    </Button>:
                    <RoomInfo {...this.state.roomInfo} disabled={true} >
                      {this.state.roomInfo.creator!== +localStorage.userId?null:
                      <Button onClick={this.startTheGame}>Начать игру</Button>
                      }
                      <Button onClick={this.redirectToLobby}>В лобби</Button>
                    </RoomInfo>
                  }
                </>
                }
            </div>
      )
  }
}
export default Room;