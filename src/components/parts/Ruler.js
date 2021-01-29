import React from 'react'
export default function Ruler(props) {
  function getListByLength(length) {
    let section = []
    for(let i = 0; i < length; i++) {
      section.push(<li></li>)
    }
    return section
  }
  return (
    <div className={props.className} >
        <ol>
          {getListByLength(props.countX)}
        </ol>
        <ol>
          {getListByLength(props.countY)}
        </ol>
        <div>
          <div></div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}