import React from 'react';
import Scoreboard from './parts/Scoreboard';
import Alert from './parts/Alert';
import {animate} from './parts/CanvasTools';

import styles from '../../static/css/canvas.module.css'

export default class Tictactoe extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
			currentPlayerTurn: props.gameInfo.currentPlayerTurn,
      score: props.gameInfo.score,
      alertValue: "", 
      lasttime: props.gameInfo.lasttime
    }
    this.currentBoard = props.gameInfo.currentBoard
    this.paused = props.gameInfo.paused
    props.players.every((player, index) => player.userId!== +localStorage.getItem('userId')?true:props.gameInfo.queue.every((queuePlayer, queueIndex) => {
        if (queuePlayer===index) {
        this.playerNumber = queueIndex
        return false
      } else return true
    }))
    this.canvas = React.createRef()
  }
  componentWillMount() {
    this.emitterUnsubGame = this.props.emitter.sub('game', data => {
      switch(data.type) {
        case 'roundStarted': 
          this.setState({
            currentPlayerTurn: data.currentPlayerTurn,
            lasttime: data.lasttime,
            alertValue: `Раунд начинается c хода ${this.props.players[this.props.gameInfo.queue[data.currentPlayerTurn]].userName}!`
          })
          this.paused = false
          this.currentBoard = {}
          this.clear()
          break
        case 'roundFinished': 
          this.paused = true
          this.displayPoint(data.cell, data.x, data.y, true)
          const newScoreState = this.state.score[data.cell][0]++
          this.setState((prevState) => {
            const newObject = Object.assign(prevState)
            newObject[data.cell][0] = newScoreState
            return {
              currentPlayerTurn: data.nextPlayer, 
              score: newObject, 
              lasttime: data.lasttime, 
              alertValue: `Раунд завершён! Победил ${this.props.players[this.props.gameInfo.queue[data.cell]].userName}`}})
          break
        case 'turn': 
          this.setState({currentPlayerTurn: data.nextPlayer, lasttime: data.lasttime, alertValue: `Ход игрока ${this.props.players[this.props.gameInfo.queue[data.nextPlayer]].userName}`})
          this.displayPoint(data.cell, data.x, data.y, true)
          break
        case 'error': 
          this.displayPoint(data.cell, data.x, data.y)
          this.setState({alertValue: 'Выбранная ячейка занята'})
          break
        case 'matchFinished': 
          this.setState({alertValue: `Матч завершён. Победил ${this.props.players[this.props.gameInfo.queue[data.currentPlayerTurn]].userName}`})
          break
        case 'nextPlayer': 
          if (this.state.currentPlayerTurn===this.playerNumber) this.setState({alertValue: 'Вы пропустили ход'})
          else this.setState({alertValue: 'Оппонент пропустил ход'})
          this.setState({currentPlayerTurn: data.nextPlayer, lasttime: data.lasttime})
          break
        default: break
      }
    })
  }
  componentDidMount() {
      this.clear()
      for (let cellNumber in this.currentBoard) {
        this.displayPoint(this.currentBoard[cellNumber], cellNumber%this.props.gameInfo.boardSize, ~~(cellNumber/this.props.gameInfo.boardSize))
      }
  }
  componentWillUnmount() {
    this.emitterUnsubGame()
  }

  displayPoint = (value, x, y, animation=false) => {
    const ctx = this.canvas.current.getContext('2d')
    ctx.lineCap = "round"
    ctx.lineWidth = 3
    this.currentBoard[this.props.gameInfo.boardSize*y + x] = value
    if (animation===true) {
      switch (value) {
        case 0: 
          animate(timestamp => {
            ctx.clearRect(x*30+1, y*30+1, 28, 28)
            ctx.fillStyle = `rgba(200,200,255, ${timestamp<1000?timestamp/1000:timestamp>2000?1-(timestamp-2000)/1000:1})`
            ctx.fillRect(x*30+1, y*30+1, 28, 28)
            ctx.fill()
            ctx.strokeStyle = "blue"
            ctx.beginPath()
            const coordFirstLine = Math.floor((timestamp<300?timestamp:300)/16)
            ctx.moveTo(x*30+6, y*30+6)
            ctx.lineTo(x*30+6+coordFirstLine, y*30+6+coordFirstLine)
            if (timestamp>300) {
              const coordSecondLine = Math.floor((timestamp<600?timestamp-300:300)/16)
              ctx.moveTo(x*30+24, y*30+6)
              ctx.lineTo(x*30+24-coordSecondLine, y*30+6+coordSecondLine)
            }
            ctx.stroke()
          }, 3000)
        break
        case 1: 
          animate(timestamp => {
            ctx.clearRect(x*30+1, y*30+1, 28, 28)
            ctx.fillStyle = `rgba(255,200,200, ${timestamp<1000?timestamp/1000:timestamp>2000?1-(timestamp-2000)/1000:1})`
            ctx.fillRect(x*30+1, y*30+1, 28, 28)
            ctx.fill()
            ctx.strokeStyle = "red"
            ctx.beginPath()
            ctx.arc(x*30+15, y*30+15, 9, 0,-Math.PI*(timestamp<600?timestamp/300:2), true)
            ctx.stroke()
          }, 3000)
        break
        case 2: 
          animate(timestamp => {
            ctx.clearRect(x*30+1, y*30+1, 28, 28)
            ctx.fillStyle = `rgba(200,255,200, ${timestamp<1000?timestamp/1000:timestamp>2000?1-(timestamp-2000)/1000:1})`
            ctx.fillRect(x*30+1, y*30+1, 28, 28)
            ctx.fill()
            ctx.fillStyle = "green"
            ctx.beginPath()
            ctx.arc(x*30+15, y*30+15, timestamp<600?timestamp/85:7, 0, Math.PI*2, true)
            ctx.fill()
          }, 3000)
        break
        default: break
      }
    } else {
      switch (value) {
        case 0: 
          ctx.strokeStyle = "blue"
          ctx.beginPath()
          ctx.moveTo(x*30+6, y*30+6)
          ctx.lineTo(x*30+24, y*30+24)
          ctx.moveTo(x*30+24, y*30+6)
          ctx.lineTo(x*30+6, y*30+24)
          ctx.stroke()
        break
        case 1: 
          ctx.strokeStyle = "red"
          ctx.beginPath()
          ctx.arc(x*30+15, y*30+15, 9, 0, Math.PI * 2, true)
          ctx.stroke()
        break
        case 2: 
          ctx.fillStyle = "green"
          ctx.beginPath()
          ctx.arc(x*30+15, y*30+15, 7, 0, Math.PI * 2, true)
          ctx.fill()
        break
        default: break
      }
    }
  }
  clear = () => {
    const ctx = this.canvas.current.getContext('2d')
    ctx.clearRect(0,0,(this.props.gameInfo.boardSize+1)*30, (this.props.gameInfo.boardSize+1)*30)
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 1
    ctx.beginPath();
    for(let i = 0; i <= this.props.gameInfo.boardSize; i++) {
      ctx.moveTo(i*30, 0)
      ctx.lineTo(i*30, this.props.gameInfo.boardSize*30)
    }
    for(let i = 0; i <= this.props.gameInfo.boardSize; i++) {
      ctx.moveTo(0, i*30)
      ctx.lineTo(this.props.gameInfo.boardSize*30, i*30)
    }
    ctx.stroke()

  }
  actionTurn = (e) => {
    if (this.paused||this.playerNumber!==this.state.currentPlayerTurn) return this.setState({alertValue: 'Сейчас очередь оппонента'})
    const rect = this.canvas.current.getBoundingClientRect();
    const x = ~~((e.clientX - rect.left)/30);
    const y = ~~((e.clientY - rect.top)/30);
    if (!this.currentBoard.hasOwnProperty(y*+this.props.gameInfo.boardSize+x)) {
      this.props.emitter.emit('action', {x: x, y: y})
    } else this.setState({alertValue: 'Ячейка занята'})
  }
  render() {
      return (
            <>
              <Scoreboard displayCurrentPlayer={true}
                paused={this.paused}
                queue={this.props.gameInfo.queue} 
                players={this.props.players} 
                currentPlayerTurn={this.state.currentPlayerTurn} 
                playerNumber={this.playerNumber}
                timeTurn={this.props.gameInfo.timeTurn} 
                lasttime={this.state.lasttime}
                score={this.state.score}
                scoreItemNames={['Счёт']} />

              <Alert value={this.state.alertValue} />
              
              <div className={styles.canvas}>
                <canvas ref={this.canvas} onClick={this.actionTurn} width={(+this.props.gameInfo.boardSize)*30+1} height={(+this.props.gameInfo.boardSize)*30+1}></canvas> 
              </div>
            </>
      )
  }
}
