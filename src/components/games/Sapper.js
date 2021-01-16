import React from 'react';
import Scoreboard from './parts/Scoreboard';
import Alert from './parts/Alert';
import {animate} from './parts/CanvasTools';

import styles from '../../static/css/canvas.module.css'

export default class Tictactoe extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      score: props.gameInfo.score,
      alertValue: "", 
      lasttime: props.gameInfo.lasttime,
      actionTypeDefuse: true
    }
    this.paused = props.gameInfo.paused
    props.players.every((player, index) => player.userId!== +localStorage.getItem('userId')?true:() =>{
      this.playerNumber = index
      return false
    })
    this.canvas = React.createRef()
  }
  componentWillMount() {
    localStorage.setItem('sapperBoard', '')
    this.emitterUnsubGame = this.props.emitter.sub('game', data => {
      switch(data.type) {
        case 'roundStarted': 
          this.setState({
            roundStarted: data.roundStarted,
            alertValue: `Раунд начинается!`
          })
          this.paused = false
          this.currentBoard = {}
          this.clear()
          break
        case 'roundFinished': 
            this.paused = true
            this.setState((prevState) => ({
              score: {...prevState.score, ...prevState.score[data.currentPlayer][0]++},
              alertValue: `Раунд завершён! Победил ${this.props.players[data.currentPlayer].userName}`
            }))
          break
        case 'openedCells': 
          this.setState({currentPlayerTurn: data.nextPlayer, lasttime: data.lasttime, alertValue: `Ход игрока ${this.props.players[this.props.gameInfo.queue[data.nextPlayer]].userName}`})
          this.displayPoint(data.cell, data.x, data.y, true)
          break
        case 'explode': 
          this.setState({alertValue: `${this.props.players[this.props.gameInfo.queue[data.currentPlayerTurn]].userName} взорвался`})
          break
        case 'progress': 
        this.setState(prevState =>  ({score: {...prevState.score, ...prevState.score[data.currentPlayer][1]+data.countCells}}))
          break 
        case 'error': 
          this.displayPoint(data.cell, data.x, data.y)
          break
        case 'matchFinished': 
          this.setState({alertValue: `Матч завершён. Победил ${this.props.players[data.currentPlayer].userName}`})
          break
        default: break
      }
    })
  }
  componentDidMount() {
      this.clear()
      const boardString = localStorage.getItem('sapperBoard')
      if (boardString!=='') {
        this.board = JSON.stringify(boardString)
        for (let cell in this.board) {
          this.displayPoint(cell%this.props.gameInfo.boardSizeY, ~~(cell/this.props.gameInfo.boardSizeX, this.board[cell]))
        }
      }
      
  }
  componentWillUnmount() {
    localStorage.setItem('sapperBoard', JSON.stringify(this.board))
    this.emitterUnsubGame()
  }

  displayPoint = (x, y, value) => {
    const ctx = this.canvas.current.getContext('2d')
    ctx.lineCap = "round"
    ctx.lineWidth = 3
    this.currentBoard[this.props.gameInfo.boardSize*y + x] = value
    ctx.strokeStyle = "blue"
    ctx.beginPath()
    ctx.moveTo(x*30+6, y*30+6)
    ctx.lineTo(x*30+24, y*30+24)
    ctx.moveTo(x*30+24, y*30+6)
    ctx.lineTo(x*30+6, y*30+24)
    ctx.stroke()
  }
  clear = () => {
    const ctx = this.canvas.current.getContext('2d')
    ctx.clearRect(0,0,(this.props.gameInfo.boardSizeX+1)*30, (this.props.gameInfo.boardSizeY+1)*30)
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 1
    ctx.beginPath();
    for(let i = 0; i <= this.props.gameInfo.boardSize; i++) {
      ctx.moveTo(i*30, 0)
      ctx.lineTo(i*30, this.props.gameInfo.boardSizeY*30)
    }
    for(let i = 0; i <= this.props.gameInfo.boardSize; i++) {
      ctx.moveTo(0, i*30)
      ctx.lineTo(this.props.gameInfo.boardSizeX*30, i*30)
    }
    ctx.stroke()

  }
  defuseBomb = (e) => {
    if (this.paused) return
    const rect = this.canvas.current.getBoundingClientRect()
    const x = ~~((e.clientX - rect.left)/30)
    const y = ~~((e.clientY - rect.top)/30)
    if (!this.currentBoard.hasOwnProperty(y*+this.props.gameInfo.boardSize+x)) {
      this.props.emitter.emit('action', {x: x, y: y})
    }
  }
  markBomb = (e) => {

  }
  render() {
      return (
            <>
              <Scoreboard displayCurrentPlayer={false}
                paused={this.paused}
                players={this.props.players} 
                playerNumber={this.playerNumber} 
                score={this.state.score}
                scoreItemNames={['Счёт', 'Прогресс']}
              />

              <Alert value={this.state.alertValue} />
              <button></button>
              <div className={styles.canvas}>
                <canvas ref={this.canvas} 
                  onClick={(e) => this.state.actionTypeDefuse?this.defuseBomb(e):this.markBomb(e)} 
                  onContextMenu={this.markBomb} 
                  width={(+this.props.gameInfo.boardSizeX)*30+1} 
                  height={(+this.props.gameInfo.boardSizeY)*30+1}>
                </canvas> 
              </div>
            </>
      )
  }
}
