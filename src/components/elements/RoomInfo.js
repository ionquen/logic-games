import React from "react";
import {Input, InputNumber, Select, Checkbox} from '../elements/FormElements';
import styles from '../../static/css/roomInfo.module.css'

class RoomInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      gameId: props.gameId,
      usePw: props.usePw||false,
      private: props.private||false,
      autostart: props.autostart||true,
      max: props.max||2,
    }
  }
  renderSettings = () => {
    switch (this.state.gameId) {
      case "tictactoe":  
        return(
        <>
          <InputNumber label="Количество раундов для победы" 
            name="roundsForWin"
            value={this.state.roundsForWin}
            min={3} max={20}
            onChange={(e) => this.setState({roundsForWin: e.target.value>=3&&e.target.value<=20?e.target.value:5})}
            />
          <InputNumber label="Время на ход" 
            name="timeTurn"
            value={this.state.timeTurn}
            min={5} max={60}
            onChange={(e) => this.setState({timeTurn: e.target.value>=5&&e.target.value<=60?e.target.value:20})} 
            />
          <InputNumber label="Размер поля" 
            name="boardSize"
            value={this.state.boardSize}
            min={3} max={40}
            onChange={(e) => this.setState({boardSize: e.target.value>=3&&e.target.value<=40?e.target.value:19})} 
            />
          <InputNumber label="Длина ряда для победы" 
            name="cellsForWin"
            value={this.state.cellsForWin}
            min={3} max={this.state.boardSize}
            onChange={(e) => this.setState({cellsForWin: e.target.value>=3&&e.target.value<=this.state.boardSize?e.target.value:3})} 
            />  
        </>)
      default: return
    }
  }
  componentWillMount() {
    this.selectGame()
  }
  selectGame = (e) => {
    const gameId = e!==undefined?e.target.name:this.state.gameId
    let gameGeneral 
    switch(gameId) {
      case 'tictactoe': gameGeneral = {
        min: 2,
        max: 3,
      }
      this.setState({
        roundsForWin: 5,
        timeTurn: 20,
        boardSize: 19,
        cellsForWin: 5,
      })
      break
      case 'sapper': gameGeneral = {
        min: 2,
        max: 2,
      }
      break
      case 'reversi': gameGeneral = {
        min: 2,
        max: 2,
      }
      break
      default: break
    }
    this.setState({
      gameId: gameId,
      max: gameGeneral.min,
      gameGeneral: gameGeneral,
    })
  }
  
  render() {
    return(
      <>
      <div className={styles.roomInfo}>
        <div>
          <div>{this.props.roomId===undefined?"Создание комнаты": "Комната #"+this.props.roomId}</div>
        </div>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <div>
              <div>Общие настройки</div>
              <Input placeholder="Введите название комнаты" name="name"
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
                disabled={this.props.name===undefined?false:true} /> 
              <Select disabled={this.props.disabled} name="gameId" data={[
                  {name: "tictactoe", value:"Крестики-нолики"}, 
                  {name: "sapper", value:"Сапёр"}, 
                  {name: "reversi", value:"Реверси"}, 
                ]}
                selected={this.state.gameId}
                onClick={this.selectGame} />
              <InputNumber label="Количество игроков" name="max"
                disabled={this.props.disabled} 
                value={this.state.max} 
                min={this.state.gameGeneral.min} max={this.state.gameGeneral.max}
                onChange={(e) => {this.setState({max: e.target.value>=this.state.gameGeneral.min&&e.target.value<=this.state.gameGeneral.max?e.target.value:this.state.gameGeneral.min})}} 
                />
              <Checkbox label="Использовать пароль?" name="usePw"
                disabled={this.props.disabled} 
                checked={this.state.usePw} 
                onChange={(e) => this.setState({usePw: e.target.checked})}/>
              <Input placeholder="Введите пароль" name="pw"
                disabled={this.state.usePw||this.props.usePw===true?false:true} />
              <Checkbox label="Сделать приватной?" name="private"
                disabled={this.props.disabled} 
                checked={this.state.private}
                onChange={(e) => this.setState({private: e.target.checked})} />
              <Checkbox label="Автостарт" name="autostart"
                disabled={this.props.disabled}
                checked={this.state.autostart} 
                onChange={(e) => this.setState({autostart: e.target.checked})} />
            </div>
            <div>
              <div>Настройки игры</div>
              {this.state.gameId===undefined?null:this.renderSettings()}
            </div>
            <div>
              {this.props.roomId===undefined?<>Вы станите первым участником этой комнаты!</>:
                <>
                  Игроки в текущей комнате
                  {this.props.users.map(user => <div className={user.connected?null:styles.disconnected}><div>{user.userId}</div><div> {user.userName}</div></div>)}
                </>
              }
            </div>
          </div>
          <div>
            {this.props.children}
          </div>
        </form>
      </div>
      </>
    )
  }
}
export default RoomInfo;