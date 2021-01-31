import React from "react";
import styles from '../../static/css/manual.module.css'

export default function ManualTictactoe(props) {
  return(
    <article className={styles.manual}>
      <h1>Помощь</h1>
      <section>
        <h2>Контактная информация</h2>
          <p>По вопросам, связанным с работоспособностью сайта, со мной можно связаться по <span className={styles.select}>электронной почте</span>.</p>
          <p>Почта: <span className={styles.select}>ionquen@pm.me</span></p>
          <p>
            Идеи и предложения также принимаются)
          </p>
      </section>
    </article>
  )
}