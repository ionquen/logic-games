import React from 'react'
import Scoreboard from '../parts/Scoreboard'
import Alert from '../parts/Alert'
import Ruler from '../parts/Ruler'
import InfoBlock from '../parts/InfoBlock'

import styles from '../../static/css/canvas.module.css'
import sapperStyle from '../../static/css/minesweeper.module.css'

import IconClosed from '../../static/img/minesweeper/games_sapper-cell.png'
import IconOpened from '../../static/img/minesweeper/games_sapper-clear.png'
import IconFlag from '../../static/img/minesweeper/games_sapper-flag.png'
import IconBomb from '../../static/img/minesweeper/games_sapper-bomb.png'

export default class Tictactoe extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      score: props.gameInfo.score,
      alertValue: "", 
      actionTypeDefuse: true
    }
    this.canvas = React.createRef()
  }
  componentWillMount() {
    this.paused = this.props.gameInfo.paused
    this.board = this.props.gameInfo.currentBoardPlayer??{}
    this.props.players.forEach((player, index) => player.userId===localStorage.getItem('userId')?this.playerNumber = index:null)
    
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
            const updatedScore = this.state.score
            updatedScore[data.currentPlayer][0]++
            this.setState(prevState => ({
                score: {...prevState.score, ...updatedScore},
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
          if (this.playerNumber===Number(data.currentPlayer)) this.displayPoint(data.cell%this.props.gameInfo.boardSizeX, ~~(data.cell/this.props.gameInfo.boardSizeX), 9)
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
        case 'matchFinished': 
          this.setState({alertValue: `Матч завершён. Победил ${this.props.players[Number(data.currentPlayer)].userName}`})
          break
        default: break
      }
    })
  }
  componentDidMount() {
    this.clear()
    for (let cell in this.board) {
      this.displayPoint(cell%this.props.gameInfo.boardSizeX, ~~(cell/this.props.gameInfo.boardSizeX), this.board[cell])
    }
  }
  componentWillUnmount() {
    this.emitterUnsubGame()
  }

  displayPoint = (x, y, value) => {
    const ctx = this.canvas.current.getContext('2d')
    ctx.font = "800 24px inter"
    if (value!==undefined) this.board[this.props.gameInfo.boardSizeX*y + x] = value
    switch (value) {
      case -1: { //highlight the bomb
        const cellFlagIcon = new Image()
        cellFlagIcon.src = IconFlag
        cellFlagIcon.onload = () => {
          ctx.drawImage(cellFlagIcon, 1, 1, 30, 30,  x*25, y*25, 25, 25)
        }
        break}
      case undefined: { //clear a cell
        const cellClosedIcon = new Image()
        cellClosedIcon.src = IconClosed
        cellClosedIcon.onload = () => {
          ctx.drawImage(cellClosedIcon, 1, 1, 30, 30,  x*25, y*25, 25, 25)
          delete this.board[this.props.gameInfo.boardSizeX*y + x]
        }
        break}
      case 9: { 
        const cellBombIcon = new Image()
        cellBombIcon.src = IconBomb
        cellBombIcon.onload = () => {
          ctx.drawImage(cellBombIcon, 1, 1, 30, 30,  x*25, y*25, 25, 25)
        }
        break}
      default: break
    }
    if (value>=0&&value<9) {
      const cellOpenedIcon = new Image()
      cellOpenedIcon.src = IconOpened
      cellOpenedIcon.onload = () => {
        switch (value) {
          case 1: ctx.fillStyle="blue"; break
          case 2: ctx.fillStyle="green"; break
          case 3: ctx.fillStyle="red"; break
          case 4: ctx.fillStyle="blue"; break
          case 5: ctx.fillStyle="brown"; break
          case 6: ctx.fillStyle="aqua"; break
          case 7: ctx.fillStyle="yellow"; break
          case 8: ctx.fillStyle="brown"; break
          default: break
        }
        ctx.drawImage(cellOpenedIcon, 1, 1, 30, 30, x*25, y*25, 25, 25)
        if (value>0) ctx.fillText(value, x*25+5, y*25+22)
      }
    }
  }
  clear = () => {
    const cellClosedIcon = new Image()
    cellClosedIcon.src = IconClosed
    cellClosedIcon.onload = () => {
      const ctx = this.canvas.current.getContext('2d')
      ctx.clearRect(0,0,(this.props.gameInfo.boardSizeX+1)*25, (this.props.gameInfo.boardSizeY+1)*25)
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 1
      ctx.beginPath();
      for(let i = 0; i < this.props.gameInfo.boardSizeX; i++) {
        for (let j = 0; j <this.props.gameInfo.boardSizeY; j++) {
          ctx.drawImage(cellClosedIcon, 1, 1, 30,30, i*25, j*25, 25, 25)
        }
      }
    }
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
        this.props.emitter.emit('action', {cell: coord})
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
        
        <InfoBlock className={styles.info} 
          data={[
            ['Раундов', this.props.gameInfo.roundsForWin], 
            ['Высота поля', this.props.gameInfo.boardSizeX], 
            ['Ширина поля', this.props.gameInfo.boardSizeX], 
            ['Количество мин', this.props.gameInfo.minesCount], 
          ]}
        />
        <Alert value={this.state.alertValue} />
        <div className={`${sapperStyle.button} ${this.state.actionTypeDefuse?"":sapperStyle.highlite}`} 
          onClick={() => this.setState({actionTypeDefuse: this.state.actionTypeDefuse?false:true})} >
        </div>
        <div className={styles.canvas}>
          <canvas ref={this.canvas} 
            onClick={(e) => this.action(e, "left")} 
            onContextMenu={(e) => this.action(e, "right")} 
            width={(+this.props.gameInfo.boardSizeX)*25+1} 
            height={(+this.props.gameInfo.boardSizeY)*25+1}>
          </canvas> 
          <Ruler className={`${styles.ruler} ${styles.ruler24}`}  
            countX={this.props.gameInfo.boardSizeX} 
            countY={this.props.gameInfo.boardSizeY}
            />
        </div>
      </>
    )
  }
}
