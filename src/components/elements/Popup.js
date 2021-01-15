import React from "react";
import styles from '../../static/css/popup.module.css'
import {Link} from "react-router-dom";

export default function Popup(props) {
  return(
  <>
    {props.setWindow?
      <div className={styles.popup} onClick={props.setWindow(null)} ></div>:
      <Link className={styles.popup} to={{path: props.pathname}}></Link>}
      {props.children}
  </>
  )
}