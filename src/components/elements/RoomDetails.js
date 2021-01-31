import React from "react"
import RoomInfo from './RoomInfo'
import {InputButtonSubmit} from './FormElements'

export default function RoomDetails(props) {
  
  function joinRoom(e) {
    e.preventDefault()
    props.ws.send(JSON.stringify({
      type: 'join', 
      data: {
        roomId: props.data.roomId, 
        pw: e.target.usePw.checked?e.target.pw.value:undefined,
        userName: localStorage.getItem('userName')
      }
    }))
  }
  return(
      <RoomInfo {...props.data} disabled={props.disabled} onSubmit={joinRoom} >
        <InputButtonSubmit disabled={props.data.started}>Подключиться</InputButtonSubmit>
      </RoomInfo>
  )
}