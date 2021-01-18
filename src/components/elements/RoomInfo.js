import React from "react"
import {Input, InputNumber, Select, Checkbox} from '../elements/FormElements'
import styles from '../../static/css/roomInfo.module.css'
import {allGames} from '../../lang/Lang.js'

export default class RoomInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gameId: props.gameId,
    }
  }
  renderSettings = () => {
    switch (this.state.gameId) {
      case "tictactoe":  
        return(
        <>
          <InputNumber label="Количество игроков" 
            name="players"
            disabled={this.props.disabled} 
            value={2} 
            min={2} max={3}
          />
          <InputNumber label="Количество раундов для победы" 
            disabled={this.props.disabled} 
            name="roundsForWin"
            value={10}
            min={3} max={20}
            />
          <InputNumber label="Время на ход" 
            disabled={this.props.disabled} 
            name="timeTurn"
            value={20}
            min={5} max={60}
            />
          <InputNumber label="Размер поля" 
            disabled={this.props.disabled} 
            name="boardSize"
            value={30}
            min={3} max={40}
            />
          <InputNumber label="Длина ряда для победы" 
            disabled={this.props.disabled} 
            name="cellsForWin"
            value={5}
            min={3} 
            max={10}
          />  
        </>)
      case "sinesweeper":  
        return(
        <>
          <InputNumber label="Количество игроков" 
            disabled={this.props.disabled} 
            name="players"
            value={2} 
            min={2} max={4}
          />
          <InputNumber label="Количество раундов для победы" 
            disabled={this.props.disabled} 
            name="roundsForWin"
            value={10}
            min={3} max={20}
            />
          <InputNumber label="Ширина поля" 
            disabled={this.props.disabled} 
            name="boardSizeX"
            value={15}
            min={10} max={30}
            />
          <InputNumber label="Высота поля" 
            disabled={this.props.disabled} 
            name="boardSizeY"
            value={20}
            min={10} max={40}
            />
          <InputNumber label="Количество мин (сложность)" 
            disabled={this.props.disabled} 
            name="minesCount"
            value={30}
            min={5} max={40}
          />  
        </>)
      default: return
    }
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
                value={this.props.name}
                disabled={this.props.name===undefined?false:true} /> 
              <Select disabled={this.props.disabled} name="gameId" data={(() => 
                {
                  let namesArray = []
                  const gamesName = allGames()
                  for (let game in gamesName) {
                    namesArray.push({name: game, value: gamesName[game]})
                  }
                  return namesArray
                })()}
                selected={this.state.gameId}
                onClick ={(e) => this.setState({gameId: e.target.name})}
              />
              <Checkbox label="Использовать пароль?" name="usePw"
                disabled={this.props.disabled} 
                value={this.props.usePw||false} 
                onClick={e => this.setState({usePw: e.target.checked})}
              />
              <Input placeholder="Введите пароль" name="pw"
                disabled={this.state.usePw||this.props.usePw===true?false:true} />
              <Checkbox label="Сделать приватной?" name="private"
                disabled={this.props.disabled} 
                value={this.props.private||false}
              />
              <Checkbox label="Автостарт" name="autostart"
                disabled={this.props.disabled}
                value={this.props.autostart||true} 
              />
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