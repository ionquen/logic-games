import React, { Suspense, lazy } from 'react';
import RoomInfo from './RoomInfo';
import {Link, Redirect} from "react-router-dom";
import {ReactComponent as SvgIconBtnToLobby} from '../../static/img/list-check.svg'
import styles from '../../static/css/room.module.css'
import {Button} from './FormElements'

const Tictactoe = lazy(() => import('../games/Tictactoe'))
const Sapper = lazy(() => import('../games/Sapper'))

class Room extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      roomInfo: undefined,
    }
  }

  componentWillMount = () => {
    const ws = new WebSocket("ws://localhost:8083")
    ws.onopen = () => {
      this.emitterUnsubPrivateChat = this.props.emitter.sub('privateChatSend', data => ws.send(JSON.stringify({type: 'chat', data: data})))
      ws.send(JSON.stringify({type: 'connect', data: {roomId: this.props.match.params.roomId, token: localStorage.getItem('token')}}))
      this.props.emitter.emit('displayGlobalChat', false)
      this.emitterUnsubAction = this.props.emitter.sub('action', data => ws.send(JSON.stringify({type: 'game', data: data})))   
    }
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
    ws.onerror = (e) => {
        this.props.emitter.emit('global', 'Соединение с комнатой потеряно')
    }
    ws.onclose = (e) => {
      this.emitterUnsubAction()
    }
    this.ws=ws
  }
  componentWillUnmount() {
    try {
      this.emitterUnsubPrivateChat()
      this.emitterUnsubAction()
      this.ws.close()
    } catch {}
    this.props.emitter.emit('private', 'Выполнено отключение от комнаты')
  }
  componentWillReceiveProps(nextProps) {
      //Reconnect to next room by RoomId
      if(this.props.match.params.roomId!==nextProps.match.params.roomId) this.ws.send(JSON.stringify({type: 'connect', data: {roomId: nextProps.match.params.roomId, token: localStorage.getItem('token')}}))
  }

  startTheGame = (e) => {
    e.preventDefault()
    this.ws.send(JSON.stringify({type: 'start'}))
  }
  getGameComponent() {
    if(!this.state.roomInfo.started||this.state.gameInfo===undefined) return
    switch (this.state.roomInfo.gameId) {
      case "tictactoe": return <Tictactoe gameInfo={this.state.gameInfo} players={this.state.roomInfo.users} emitter={this.props.emitter} />
      case "sapper": return <Sapper gameInfo={this.state.gameInfo} players={this.state.roomInfo.users} emitter={this.props.emitter} gameId={this.state.roomInfo.gameId} />
      default: break
    }
  }
  render() {
      return (
          <>
            <div className={styles.room}>
              {this.state.roomInfo===undefined?<Button onClick={()=>this.setState({redirectToLobby:true})}>В лобби</Button>
              :
                <>
                  <div className={styles.match}>
                    <Suspense>
                      {this.getGameComponent()}
                    </Suspense>
                  </div>
                  {this.state.roomInfo.started?
                    <Link to={`/g/${this.props.match.params.gameId}`} className={styles.btnToLobby}>
                      <SvgIconBtnToLobby />
                      <span>В лобби</span>
                    </Link>:
                    <RoomInfo {...this.state.roomInfo} disabled={true}>
                      {this.state.roomInfo.creator!== +localStorage.userId?null:
                      <Button onClick={this.startTheGame}>Начать игру</Button>
                      }
                      <Button onClick={()=>this.setState({redirectToLobby:true})}>В лобби</Button>
                    </RoomInfo>
                  }
                </>
                }
            </div>
            {this.state.redirectToLobby?<Redirect to={`/g/${this.props.match.params.gameId}`}></Redirect>:null}
          </>
      )
  }
}
export default Room;