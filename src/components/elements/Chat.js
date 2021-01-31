import React from 'react'

import {ReactComponent as IconChatSend} from '../../static/img/icons/send-plane-line.svg'
import {ReactComponent as IconChatDisplay} from '../../static/img/icons/chat-4-line.svg'
import {ReactComponent as IconChatChange} from '../../static/img/icons/arrow-up-down-line.svg'
import {ReactComponent as IconCross} from '../../static/img/icons/close-fill.svg'
import {InputTextSubmit} from './FormElements'

import styles from '../../static/css/chat.module.css'

/*
  Принимаемые события
   chat: новое сообщение в глобальном чате
   history: массив, содержащий последние сообщения глобального чата 
  Отправляемые события
   chat: отправить новое сообщение в глобальный чат
 */
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgsG: [],
      msgsP: [],
      isGlobalChat: true,
      visible: false,
      inputMsgValue: '',
    }
  }
  componentWillMount() {
    this.wsReconnect()
  }

  wsReconnect = () => {
    //WS only global chat
    const ws = new WebSocket("wss://games-ws.ionquen.ru:8081")
    console.log('Попытка подключения к серверу')
    ws.onopen = () => {
      console.log('Подключение установлено')
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
      this.ws=ws
    }
    ws.onerror = e => ws.close()
    ws.onclose = e => {
      if (e.code!==1000) this.reconnectTimeout = setTimeout(this.wsReconnect, 3000)
    }
    
  }
  componentWillUnmount = () => {
    this.emitterUnsubGlobal()
    this.emitterUnsubChatStateChange()
    this.emitterUnsubPrivate()
    this.emitterUnsubPrivateChatHistory()
    clearTimeout(this.reconnectTimeout)
    if(this.ws!==undefined&&this.ws.readyState===WebSocket.OPEN) this.ws.close(1000)
  }
  componentDidMount() {
    this.emitterUnsubGlobal = this.props.emitter.sub('global', (msgData) => this.globalMessageDisplay(msgData))
    this.emitterUnsubPrivate = this.props.emitter.sub('private', (msgData) => this.privateMessageDisplay(msgData))
    this.emitterUnsubChatStateChange = this.props.emitter.sub('chatStateChange', boolen => this.setState({isGlobalChat: boolen}))
    this.emitterUnsubPrivateChatHistory = this.props.emitter.sub('privateChatHistory', (data) => {
    let newPrivateHistory = []
    for (let msg of data) {
      if(this.state.msgsP.some(elementOfMsgsP => elementOfMsgsP.date===msg.date?true:false)) {
        break;
      } else newPrivateHistory.push(msg)
    }
    this.setState((state) => ({msgsP: state.msgsP.concat(newPrivateHistory)}))
    this.privateMessageDisplay('Добро пожаловать в чат!')
  })
  }

  send = (e) => {
    e.preventDefault();
    const msgValue = e.target.inputMessage.value
    if(msgValue==='') return
    const msgObject = {
      token: localStorage.getItem('token'),
      text: msgValue,
      userName: localStorage.getItem('userName'),
    }
    if (this.state.isGlobalChat) {
      try{
      this.ws.send(JSON.stringify({type: 'chat', data: msgObject}))
      } catch {
        this.globalMessageDisplay("Не получается отправить сообщение. Пожалуйста, обновите страницу")
      }
    } else {
      try {
        this.props.emitter.emit('privateChatSend', msgObject)
      } catch {
        this.privateMessageDisplay('Отсутствует подключение к комнате')
      }
    }
    this.setState({inputMsgValue: ''})
  }

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
                <div onClick={() => this.setState({isGlobalChat: this.state.isGlobalChat?false:true})}>
                  <IconChatChange className={!this.state.isGlobalChat?styles.global:null}/>
                </div>
              </div>
              <div>
                <div className={this.state.isGlobalChat?styles.selected:null}>Глобальный чат</div>
                <div className={!this.state.isGlobalChat?styles.selected:null}>Приватный чат</div>
              </div>
              <div>
                <div onClick={this.chatVisibleStateChange}>
                  <IconCross />
                </div>
              </div>
            </div>
            <div>
              <Messages msgs={this.state.isGlobalChat?this.state.msgsG:this.state.msgsP} />
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

/**
 * Массив сообщений, отображаемый в компоненте Chat
 */
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