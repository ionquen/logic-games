import React from "react";
import styles from '../../static/css/manual.module.css'
import rulesBloom from '../../static/img/rulesBloom.jpeg'

export default function ManualTictactoe(props) {
  return(
    <article className={styles.manual}>
      <h1>Правила пользования сервисом</h1>
      <img className={styles.imgFull} src={rulesBloom} alt="Very important rules" />
    </article>
  )
}