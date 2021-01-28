import React from 'react'

import {ReactComponent as IconChatSend} from '../../static/img/icons/send-plane-line.svg'
import {ReactComponent as IconChatDisplay} from '../../static/img/icons/chat-4-line.svg'
import {ReactComponent as IconChatChange} from '../../static/img/icons/arrow-up-down-line.svg'
import {ReactComponent as IconCross} from '../../static/img/icons/close-fill.svg'
import {InputTextSubmit} from './FormElements'

import styles from '../../static/css/chat.module.css'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgsG: [],
      msgsP: [],
      globalChat: true,
      visible: false,
      inputMsgValue: '',
    }
  }
  componentWillMount() {
    const ws = new WebSocket("wss://games-ws.ionquen.ru:8081")

    ws.onopen = () => {
    }
    ws.onmessage = (e) => {
        const messageParsed = JSON.parse(e.data)
        const data = messageParsed.data
        switch (messageParsed.type) {
          case 'chat': this.globalMessageDisplay(data)
            break
          case 'history': 
            this.setState((state) => ({msgsG: state.msgsG.concat(data)}))
            this.globalMessageDisplay('Добро пожаловать в чат!')
            break
          default: return
        }
    }
    ws.onerror = (e) => {
        this.globalMessageDisplay('Ошибка. Подключение потеряно')
    }
    this.ws=ws
  }
  componentWillUnmount = () => {
    this.emitterUnsubGlobal()
    this.emitterUnsubDisplayGlobalChat()
    this.emitterUnsubPrivate()
    this.emitterUnsubPrivateChatHistory()
    this.ws.close()
  }
  componentDidMount() {
    this.emitterUnsubGlobal = this.props.emitter.sub('global', (msgData) => this.globalMessageDisplay(msgData))
    this.emitterUnsubPrivate = this.props.emitter.sub('private', (msgData) => this.globalMessageDisplay(msgData))
    this.emitterUnsubDisplayGlobalChat = this.props.emitter.sub('displayGlobalChat', boolen => this.setState({globalChat: boolen}))
    this.emitterUnsubPrivateChatHistory = this.props.emitter.sub('privateChatHistory', (data) => {
    let msgsNewRoomArray = []
    for (let msg of data) {
      if(this.state.msgsP.some(elementOfMsgsP => elementOfMsgsP.date===msg.date?true:false)) {
        break;
      } else msgsNewRoomArray.push(msg)
    }
    this.setState((state) => ({msgsP: state.msgsP.concat(msgsNewRoomArray)}))
    this.privateMessageDisplay('Добро пожаловать в чат!')
  })
  }

  send = (e) => {
    e.preventDefault();
    const messageValue = e.target.inputMessage.value
    if(messageValue==='') return
    const messageSendObject = {
      token: localStorage.getItem('token'),
      text: messageValue,
      userName: localStorage.getItem('userName'),
    }
    const messageDisplayObject = {
      text: messageSendObject.text,
      userName: messageSendObject.userName,
      date: Date.now(),
      userId: localStorage.getItem('userId'),
    }
    if (this.state.globalChat) {
      this.ws.send(JSON.stringify({type: 'chat', data: messageSendObject}))
      this.globalMessageDisplay(messageDisplayObject)
    } else {
      try {
        this.props.emitter.emit('privateChatSend', messageSendObject)
        this.privateMessageDisplay(messageDisplayObject)
      } catch {return console.log('Отсутствует подключение к комнате')}
    }
    this.setState({inputMsgValue: ''})
  }

  //display message in chat
  globalMessageDisplay = msg => this.setState(prevState => ({msgsG: [...prevState.msgsG,msg]}))
  privateMessageDisplay = msg => this.setState(prevState => ({msgsP: [...prevState.msgsP,msg]}))
  
  chatVisibleStateChange = () => this.setState({visible: this.state.visible?false:true})

  render() {
    return (
      <>
        <aside className={`${styles.chat} ${!this.state.visible?'':styles.chatDisplay}`}>
          <div>
            <div>
              <div>
                <div onClick={() => this.setState({globalChat: this.state.globalChat?false:true})}>
                  <IconChatChange className={!this.state.globalChat?styles.global:null}/>
                </div>
              </div>
              <div>
                <div className={this.state.globalChat?styles.selected:null}>Глобальный чат</div>
                <div className={!this.state.globalChat?styles.selected:null}>Приватный чат</div>
              </div>
              <div>
                <div onClick={this.chatVisibleStateChange}>
                  <IconCross />
                </div>
              </div>
            </div>
            <div>
              <Messages msgs={this.state.globalChat?this.state.msgsG:this.state.msgsP} />
            </div>
          </div>
          <div>
            <InputTextSubmit name="inputMessage" 
              value={this.state.inputMsgValue} 
              onChange={(e) => this.setState({inputMsgValue: e.value})} 
              autoComplete={false}
              placeholder="Напишите сообщение..." 
              onSubmit={this.send} >
              <IconChatSend />
            </InputTextSubmit>
          </div>
        </aside>
        <div className={styles.chatStateBtn} onClick={this.chatVisibleStateChange} >
          <IconChatDisplay />
        </div>
      </>
    )
  }

}

class Messages extends React.Component {
  render() {
    return(
      this.props.msgs.map((msg) =>
      msg.userName!==undefined? 
      <div>
        <span>{new Date(msg.date).toLocaleString("ru", {minute: 'numeric', hour: 'numeric'})}  </span>
        <span>{msg.userName}</span>
        <span>: {msg.text}</span>
      </div>:
      <div className={styles.system}>
        <span>
          {msg}
        </span>
      </div>
      )
    )
  }
}

export default Chat;