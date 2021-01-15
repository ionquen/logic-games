import React from "react";
import styles from '../../static/css/manual.module.css'

export default function ManualTictactoe(props) {
  return(
    <article className={styles.manual}>
      <h1 className={styles.header1}>Помощь</h1>
      <h2>Контактная информация</h2>
      <p>По вопросам, связанным с работоспособностью сайта, можете связаться по электронной почте</p>
      <p>Почта: ionqwen@gmail.com</p>
    </article>
  )
}