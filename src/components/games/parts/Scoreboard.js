import React from 'react';
import styles from '../../../static/css/score.module.css'
/*
  displayCurrentPlayer - Выделить текущего игрока
  paused - Останавливает/Включает таймер
  queue - Последовательность игроков к которым применяется
  players - Массив игроков ex: [{"userId":"11", "userName": "eeee
  currentPlayerTurn - Текщий игрок
  playerNumber - Игрок (не ставить если гость)
  timeTurn - Время на совершение хода 
  lasttime - Время начала хода ()
  score - Счёт ex: [[0,0,0], [1,0,0]]
  scoreItemNames - Названия столбцов ex: ['Счёт', 'Осталось', 'Найдено']
*/
export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      timeleft: ~~((props.timeTurn + props.lasttime - Date.now())/1000),
    }
    this.playerTurnTimer = undefined
  }
  componentDidMount() {
    if (this.props.displayCurrentPlayer) this.playerTurnTimer = setInterval(() => this.paused?null:this.setState({timeleft: ~~((this.props.timeTurn + this.props.lasttime - Date.now())/1000)}), 1000)
  }
  componentWillUnmount() {
    if (this.props.displayCurrentPlayer) clearInterval(this.playerTurnTimer)
  }
  getPlayersList = () => {
    const sortedPlayersArray = []
    if (this.props.queue!==undefined){
      for (let numberInQueue of this.props.queue) {
        sortedPlayersArray.push(this.props.players[numberInQueue])
      }
    } else Array.prototype.push.apply(sortedPlayersArray,this.props.players)
    
    return sortedPlayersArray.map((player, index) => 
    <div style={{color: !player.connected?"rgb(150,150,150)":this.props.playerNumber===index?"rgb(255,165,0)":"#000"}}>
      <div>
        <div>{index+1}</div>
        <div>#{player.userId}</div>
        <div>{player.userName}</div>
      </div>
      {this.props.score[index].map(prop=>
      <div>{prop}</div>
      )}
    </div>
    )
  }
  render() {
    const scoreColor = `rgb(${255 - this.state.timeleft/(this.props.timeTurn/1000)*255}, ${this.state.timeleft/(this.props.timeTurn/1000)*200}, 0)`
      return (
              <div className={styles.score}>
                <div>
                  <div>Игроки</div>
                  {this.props.scoreItemNames.map(itemName=>
                    <div>{itemName}</div>
                    )}
                </div>
                {this.props.displayCurrentPlayer?
                <div className={styles.scoreCurrentPlayer} style={{color: scoreColor, top: 25 + this.props.currentPlayerTurn*42+'px', backgroundColor: scoreColor}}>
                  <div>{this.state.timeleft}</div>
                  <div style={{"border-color": scoreColor}}></div>
                  <div style={{"border-color": scoreColor}}></div>
                </div>
                :<div></div>
                }
                
                {this.getPlayersList()}
              </div>
      )
  }
}