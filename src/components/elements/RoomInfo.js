import React from "react"
import {Input, InputNumber, Select, Checkbox} from '../elements/FormElements'
import styles from '../../static/css/roomInfo.module.css'
import {allGames} from '../../lang/Lang.js'

export default class RoomInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      usePw: props.usePw??false,
      gameSettingsField: <div />,
    }
  }

  componentDidMount() {this.setGameId(this.props.gameId)}
  //Установить поле Settings для конкретной игры
  setGameId = gameId => this.setState({gameSettingsField: 
    <div key={gameId}>
      <div>Настройки игры</div>
      
      {this.getSettingsByGameId(gameId)}
    </div>
  })
  //Получить список настроек для конкретной игры
  getSettingsByGameId(gameId) {
    switch (gameId) {
      case "tictactoe":
        return(
        <>
          <InputNumber label="Количество игроков" 
            name="players"
            disabled={this.props.disabled} 
            value={this.props.max??2} 
            min={2} max={3}
          />
          <InputNumber label="Количество раундов для победы" 
            disabled={this.props.disabled} 
            name="roundsForWin"
            value={this.props.gameProps?.roundsForWin??10}
            min={5} max={30}
            />
          <InputNumber label="Время на ход" 
            disabled={this.props.disabled} 
            name="timeTurn"
            value={this.props.gameProps?.timeTurn??20}
            min={3} max={60}
            />
          <InputNumber label="Размер поля" 
            disabled={this.props.disabled} 
            name="boardSize"
            value={this.props.gameProps?.boardSize??20}
            min={3} max={30}
            />
          <InputNumber label="Длина ряда для победы" 
            disabled={this.props.disabled} 
            name="cellsForWin"
            value={this.props.gameProps?.cellsForWin??5}
            min={3} 
            max={30}
          />  
        </>)
      case "minesweeper":  
        return(
        <>
          <InputNumber label="Количество игроков" 
            disabled={this.props.disabled} 
            name="players"
            value={this.props.max??2} 
            min={2} max={5}
          />
          <InputNumber label="Количество раундов для победы" 
            disabled={this.props.disabled} 
            name="roundsForWin"
            value={this.props.gameProps?.roundsForWin??10}
            min={5} max={30}
            />
          <InputNumber label="Ширина поля" 
            disabled={this.props.disabled} 
            name="boardSizeX"
            value={this.props.gameProps?.boardSizeX??20}
            min={10} max={40}
            />
          <InputNumber label="Высота поля" 
            disabled={this.props.disabled} 
            name="boardSizeY"
            value={this.props.gameProps?.boardSizeY??25}
            min={10} max={60}
            />
          <InputNumber label="Количество мин (сложность)" 
            disabled={this.props.disabled} 
            name="minesCount"
            value={this.props.gameProps?.minesCount??50}
            min={5} max={200}
          />  
        </>)
      default: return <div></div>
    }
  }
  render() {
    return(
      <div className={`${styles.roomInfo}`}>
        <div>
          <div>{this.props.roomId===undefined?"Создание комнаты": "Комната #"+this.props.roomId}</div>
        </div>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <div>
              <div>Общие настройки</div>
              <Input placeholder="Введите название комнаты" name="name"
                value={this.props.name??'Новая комната'}
                disabled={this.props.name===undefined?false:true} /> 
              <Select disabled={this.props.disabled} name="gameId" data={(() => 
                {
                  let namesArray = []
                  const gamesName = allGames()
                  for (let game in gamesName) {
                    namesArray.push({value: game, text: gamesName[game]})
                  }
                  return namesArray
                })()}
                selected={this.props.gameId}
                onClick ={(e) => this.setGameId(e.target.value)}
              />
              <Checkbox label="Использовать пароль?" name="usePw"
                disabled={this.props.disabled} 
                value={this.state.usePw} 
                onClick={e => this.setState({usePw: e.target.checked})}
              />
              <Input placeholder="Введите пароль" name="pw"
                disabled={this.state.usePw} />
              <Checkbox label="Сделать приватной?" name="private"
                disabled={this.props.disabled} 
                value={this.props.private??false}
              />
              <Checkbox label="Автостарт" name="autostart"
                disabled={this.props.disabled}
                value={this.props.autostart??true} 
              />
            </div>
            {this.state.gameSettingsField}
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
    )
  }
}