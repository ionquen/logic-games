import React from "react";
import styles from '../../static/css/manual.module.css'
import {ReactComponent as Img} from '../../static/img/main-page/games_tictactoe.svg'

export default function ManualTictactoe(props) {
  return(
      <article className={styles.manual}>
        <h1>Руководство по игре Крестики-нолики</h1>
        <section>
          <h2>Описание</h2>
          <p>
            <Img className={styles.imgFloat} alt="крестики нолики" />
            <span className={styles.select}>Крестики-нолики</span> — логическая игра между двумя оппонентами, проходящая на игровом поле размером 3 на 3 клетки. Один игрок играет за <span className={styles.select}>крестики</span>, другой играет за  <span className={styles.select}>нолики</span>. Побеждает тот, кто первый соберёд ряд из <span className={styles.select}>3</span> своих фигур на игровом поле. 
            <p>
              На нашем сайте вы можете играть в крестики-нолики с другими игроками по сети.
            </p>
          </p>
        </section>
        <section>
          <h2>Правила игры</h2>
          <p>
            Каждый игрок получает своё знаковое обозначение (<span className={styles.select}>крестик</span> или <span className={styles.select}>нолик</span>). 
          </p>
          <p>
            Игроки по очереди располагают свой знак в свободной клетке на игровом поле. Первый, выстроивший в ряд определённой длины (<span className={styles.select}>3 клетки</span>) свои фигуры по горизонтали, вертикали или диагонали, выигрывает. 
          </p>
          <p>
            Первый ход делает игрок, обладающий знаком <span className={styles.select}>крестик</span>.
          </p>
        </section>
        <section>
          <h2>Разновидности игры</h2>
          <p>
            Крестики-нолики - популярная игра, вариаций которой создано немало. 
          </p>
          <p>
            Одной из таковых является игра <span className={styles.select}>Gomoku</span> или <span className={styles.select}>Гомоку</span>, которая также имеет различные вариации. 
          </p>
          <p>
            Гомоку, предположительно, была изобретена в Китает несколько тысяч лет назад. Современное название образовано от япоского слова  <span className={styles.select}>Гомокунаробэ</span>, что переводится как  <span className={styles.select}>Пять камней в ряд</span>. В неё играют фигурами чёрного и белого цвета. Правила игры идентичны крестикам-ноликам, однако для победы необходимо собрать ряд уже из <span className={styles.select}>5</span> фигур. 
          </p>
          <p>
            Также может различаться размер игрового поля:
          </p>
          <ul>
            <li> <span className={styles.select}>Традиционный вариант</span> предполагает поле <span className={styles.select}>19 на 19</span> ячеек</li>
            <li> <span className={styles.select}>Современный вариант</span> предполагает поле <span className={styles.select}>15 на 15</span> ячеек</li>
          </ul>
        </section>
        <section>
          <h2>Вариации на сайте</h2>
          <p>На нашем сайте вы можете самостоятельно настроить различные параметры игры, например:</p>
          <ul>
            <li> <span className={styles.select}>Размер поля</span> </li>
            <li> <span className={styles.select}>Количество игроков</span>, то есть крестики-нолики на большее количество игроков. В таком случае, дополнительные игроки также получают свой знак (закрашенный кружок)</li>
            <li> Максимальная <span className={styles.select}>длина ряда</span>, то есть количество забранных ячеек необходимых для победы.</li>
          </ul>
          <p>Для внеигровых настроек доступны:</p>
          <ul>
            <li> <span className={styles.select}>Количество побед</span> в раундах для завершения матча</li>
            <li> <span className={styles.select}>Время</span> на совершение <span className={styles.select}>хода</span>. Если игрок не успевает за отведённое время совершить ход, он пропускает его.</li>
          </ul>
        </section>
      </article>
  )
}
