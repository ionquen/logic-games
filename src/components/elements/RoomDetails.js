import React from "react";
import RoomInfo from './RoomInfo';
import {InputButtonSubmit} from './FormElements';

export default class RoomDetails extends React.Component {
  
  joinRoom = (e) => {
    e.preventDefault()
    this.props.ws.send(JSON.stringify({
      type: 'join', 
      data: {
        roomId: this.props.data.roomId, 
        pw: e.target.usePw.checked?e.target.pw.value:undefined,
        userName: localStorage.getItem('userName')
      }
    }))
  }

  render() {
    return(
        <RoomInfo {...this.props.data} disabled={this.props.disabled} onSubmit={this.joinRoom} >
          <InputButtonSubmit disabled={this.props.data.started}>Подключиться</InputButtonSubmit>
        </RoomInfo>
    )
  }
}