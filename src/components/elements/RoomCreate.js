import React from "react";
import RoomInfo from './RoomInfo';
import {InputButtonSubmit} from './FormElements';

export default class CreateNewRoom extends React.Component {

  createRoom = (e) => {
    e.preventDefault()
    const settings = {
      name: e.target.name.value,
      gameId: e.target.gameId.value,
      usePw: e.target.usePw.checked,
      private: e.target.private.checked,
      autostart: e.target.autostart.checked,
      max: e.target.max.value,
      pw: e.target.usePw.value?e.target.pw.value||'':undefined,
      userName: localStorage.getItem("userName"),
      gameProps: this.getPropsByGameId(e.target.gameId.value, e)
    }
    if (settings.name.length<3||settings.name.length>20) return 
    this.props.ws.send(JSON.stringify({type: 'create', data: settings}))
  }
  getPropsByGameId(gameId, e) {
    switch (gameId) {
      case "tictactoe": return {
        timeTurn: +e.target.timeTurn.value*1000,
        roundsForWin: +e.target.roundsForWin.value,
        boardSize: +e.target.boardSize.value,
        cellsForWin: +e.target.cellsForWin.value,
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