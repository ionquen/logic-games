import React from "react";
import styles from '../../static/css/manual.module.css'

export default function ManualTictactoe(props) {
  return(
    <article className={styles.manual}>
      <h1>Правила</h1>
      <section>
        <h2>Общее положение</h2>
        <p>Уважаемые посетители ресурса! Наш сайт предоставляет возможность <span className={styles.select}>бесплатно</span> и <span className={styles.select}>без ограничений</span> играть в логические онлайн игры. Такая возможность лишает нас контроля над текущим состоянием ресурса, в том числе модерации сообщений в чатах и контроля выделяемых ресурсов для каждого пользователя. Мы не можем нести ответственность за контент, <span className={styles.select}>размещаемый нашими посетителями</span>, а также <span className={styles.select}>бесперебойную работу ресурса</span>.</p>
        <p>Поэтому, мы <span className={styles.select}>просим наших посетителей</span> придерживаться следующих правил:</p>
        <ul>
          <li>В глобальном чате не использовать <span className={styles.select}>нецензурную лексику</span> и <span className={styles.select}>не оскорблять</span> кого бы то ни было </li>
          <li>Не совершать DOS и DDOS атаки. Наш сервер работает только благодаря энтузиазму разработчика. Роняя его вы лишаете других пользователей ресурса, созданного не ради каких-либо корыстных целей </li>
        </ul>
      </section>
    </article>
  )
}