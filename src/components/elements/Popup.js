import React from "react";
import styles from '../../static/css/popup.module.css'
import {Link} from "react-router-dom";

export default function Popup(props) {
  const popupType = props.setWindow?true:false//Не Отображаем в поисковой строке?
  const boxNonClick = 
        <div onClick={e => e.stopPropagation()}>
          {props.children}
        </div>
  return(props.setWindow?
      <div className={styles.popup} onClick={popupType?() => props.setWindow(null):props.goBack } >{boxNonClick}</div>:
      <Link className={styles.popup} to={{path: props.pathname}}>{boxNonClick}</Link>
  )
}