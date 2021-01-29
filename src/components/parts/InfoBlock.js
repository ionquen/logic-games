import React from 'react'
export default function InfoBlock(props) {
  return (
    <div className={props.className} >
      {props.data.map(prop => <div><span>{prop[0]}</span><span> {prop[1]}</span></div>) }
    </div>
  )
}