import React from 'react'
import Scoreboard from './parts/Scoreboard'
import Alert from './parts/Alert'

import styles from '../../static/css/canvas.module.css'
import sapperStyle from '../../static/css/sapper.module.css'

export default class Tictactoe extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      score: props.gameInfo.score,
      alertValue: "", 
      lasttime: props.gameInfo.lasttime,
      actionTypeDefuse: true
    }
    this.canvas = React.createRef()
  }
  componentWillMount() {
    this.paused = this.props.gameInfo.paused
    this.board = {}
    this.props.players.forEach((player, index) => player.userId=== +localStorage.getItem('userId')?this.playerNumber = index:null)
    
    this.emitterUnsubGame = this.props.emitter.sub('game', data => {
      switch(data.type) {
        case 'roundStarted': 
          this.setState(prevState=>{
            const newScore = Object.assign(prevState.score)
            for(let index in prevState.score) {
              newScore[index][1]=0
            }
            return {
              roundStarted: data.roundStarted,
              score: newScore,
              alertValue: `Раунд начинается!`
            }
          })
          this.paused = false
          this.board = {}
          this.clear()
          break
        case 'roundFinished': {
            this.paused = true
            const updateScore = this.state.score[data.currentPlayer][0]++
            this.setState(prevState => ({
                score: {...prevState.score, ...updateScore},
                alertValue: `Раунд завершён! Победил ${this.props.players[data.currentPlayer].userName}`
            }))
          break
        }
        case 'openedCells': {
          for (let cell in data.cells) {
            this.displayPoint(cell%this.props.gameInfo.boardSizeX, ~~(cell/this.props.gameInfo.boardSizeX), data.cells[cell])
          }
          const conterCells = this.state.score[this.playerNumber][1]+Object.keys(data.cells).length
          this.setState(prevState => {
            const newScore = Object.assign(prevState.score)
            newScore[this.playerNumber][1]=conterCells
            return {score: newScore}
          })
          break
        }
        case 'explode': 
          this.displayPoint(data.x, data.y, -2)
          this.setState({alertValue: `${this.props.players[data.currentPlayer].userName} взорвался`})
          break
        case 'progress': {
        const conterCells = this.state.score[data.currentPlayer][1]+data.countCells
        this.setState(prevState =>  {
          const newScore = Object.assign(prevState.score)
          newScore[data.currentPlayer][1]=conterCells
          return {score: newScore}})
          break 
        }
        case 'error': 
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
    const savedData = localStorage.getItem('sapperData')
    if (!savedData=="") {
      const parsedSavedData = JSON.parse(savedData)
      let scoreSum = 0
      for (let item in this.state.score) {
        scoreSum+=this.state.score[item][0]
      }
      if (parsedSavedData.scoreSum===scoreSum) {
        for (let cell in parsedSavedData.board) {
          this.displayPoint(cell%this.props.gameInfo.boardSizeX, ~~(cell/this.props.gameInfo.boardSizeX), parsedSavedData.board[cell])
          
        }
      } else {}
    }
  }
  componentWillUnmount() {
    let scoreSum = 0 //Идентификатор текущего раунда на случай вылета
    for (let item in this.state.score) {
      scoreSum+=this.state.score[item][0]
    }
    const savedData = {scoreSum, board: this.board}
    localStorage.setItem('sapperData', JSON.stringify(savedData))
    this.emitterUnsubGame()
  }

  displayPoint = (x, y, value) => {
    const ctx = this.canvas.current.getContext('2d')
    ctx.font = "24px serif"
    if (value!==undefined) this.board[this.props.gameInfo.boardSizeX*y + x] = value
    switch (value) {
      case -2: { //explosion
        ctx.fillStyle="red"
        ctx.fillRect(x*25, y*25, 25, 25)
        break}
      case -1: { //highlight a bomb
        ctx.fillStyle="green"
        ctx.fillRect(x*25, y*25, 25, 25)
        break}
      case undefined: { //clear a cell
        ctx.fillStyle="gray"
        ctx.fillRect(x*25, y*25, 25, 25)
        delete this.board[this.props.gameInfo.boardSizeX*y + x]
        break}
      case 0: ctx.fillStyle="white"; break
      case 1: ctx.fillStyle="blue"; break
      case 2: ctx.fillStyle="green"; break
      case 3: ctx.fillStyle="red"; break
      case 4: ctx.fillStyle="blue"; break
      case 5: ctx.fillStyle="brown"; break
      case 6: ctx.fillStyle="aqua"; break
      case 7: ctx.fillStyle="yellow"; break
      case 8: ctx.fillStyle="brown"; break
      default: ;break
    }
    if (value>0) ctx.fillText(value, x*25+7, y*25+20)
    if (value===0) ctx.fillRect(x*25, y*25, 25, 25)
  }
  clear = () => {
    const ctx = this.canvas.current.getContext('2d')
    ctx.clearRect(0,0,(this.props.gameInfo.boardSizeX+1)*25, (this.props.gameInfo.boardSizeY+1)*25)
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 1
    ctx.beginPath();
    for(let i = 0; i <= this.props.gameInfo.boardSizeX; i++) {
      ctx.moveTo(i*25, 0)
      ctx.lineTo(i*25, this.props.gameInfo.boardSizeY*25)
    }
    for(let i = 0; i <= this.props.gameInfo.boardSizeY; i++) {
      ctx.moveTo(0, i*25)
      ctx.lineTo(this.props.gameInfo.boardSizeX*25, i*25)
    }
    ctx.stroke()

  }
  action = (e, typeClick) => {
    e.preventDefault()
    if (this.paused) return
    const rect = this.canvas.current.getBoundingClientRect()
    const x = ~~((e.clientX - rect.left)/25)
    const y = ~~((e.clientY - rect.top)/25)
    const coord = y*this.props.gameInfo.boardSizeX+x
    if (this.state.actionTypeDefuse&&typeClick==="left") {
      if (!this.board.hasOwnProperty(coord)) {
        this.props.emitter.emit('action', {x: x, y: y})
      }
    } else {//Пометить ячейку как заминированную
      if (this.board[coord]===undefined||this.board[coord]===-1) this.displayPoint(x, y, this.board[coord]===-1?undefined: -1)
    }
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
              <button className={`${sapperStyle.button} ${this.state.actionTypeDefuse?"":sapperStyle.highlite}`} 
                onClick={() => this.setState({actionTypeDefuse: this.state.actionTypeDefuse?false:true})} >
              </button>
              <div className={styles.canvas}>
                <canvas ref={this.canvas} 
                  onClick={(e) => this.action(e, "left")} 
                  onContextMenu={(e) => this.action(e, "right")} 
                  width={(+this.props.gameInfo.boardSizeX)*25+1} 
                  height={(+this.props.gameInfo.boardSizeY)*25+1}>
                </canvas> 
              </div>
            </>
      )
  }
}