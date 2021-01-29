import React from "react"
import RoomInfo from './RoomInfo'
import {InputButtonSubmit} from './FormElements'

export default class CreateNewRoom extends React.Component {

  createRoom = (e) => {
    e.preventDefault()
    const settings = {
      name: e.target.name.value,
      gameId: e.target.gameId.value,
      usePw: e.target.usePw.checked,
      private: e.target.private.checked,
      autostart: e.target.autostart.checked,
      pw: e.target.usePw.value?e.target.pw.value||'':undefined,
      userName: localStorage.getItem("userName"),
      gameProps: this.getPropsByGameId(e.target.gameId.value, e)
    }
    if (settings.name.length<3||settings.name.length>20) return 
    try {
      this.props.ws.send(JSON.stringify({type: 'create', data: settings}))
    } catch {
      console.log("Отсутствует подключение к серверу")
    }
  }
  getPropsByGameId(gameId, e) {
    switch (gameId) {
      case "tictactoe": return {
        max: e.target.players.value,
        roundsForWin: +e.target.roundsForWin.value,
        boardSize: +e.target.boardSize.value,
        timeTurn: +e.target.timeTurn.value,
        cellsForWin: +e.target.cellsForWin.value,
      }
      case "minesweeper": return {
        max: e.target.players.value,
        roundsForWin: +e.target.roundsForWin.value,
        boardSizeX: +e.target.boardSizeX.value,
        boardSizeY: +e.target.boardSizeY.value,
        minesCount: +e.target.minesCount.value,
      }
      default: return {}
    }
  }
  render() {
    return(
        <RoomInfo gameId={this.props.gameId} onSubmit={this.createRoom}>
          <InputButtonSubmit>Создать комнату</InputButtonSubmit>
        </RoomInfo>
    )
  }
}