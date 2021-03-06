import React from "react";
import styles from '../../static/css/manual.module.css'
import {ReactComponent as Img} from '../../static/img/main-page/games_minesweeper.svg'

export default function ManualMinesweeper(props) {
  return(
    <article className={styles.manual}>
      <h1>Руководство по игре Сапёр</h1>
      <section>
        <h2>Описание</h2>
        <p>
          <Img className={styles.imgFloat} alt="сапёр" />
          <span className={styles.select}>Сапёр</span> или же <span className={styles.select}>Minesweeper</span> — логическая компьютерная игра головоломка, созданная компанией Microsoft, и входившая в стандартный пакет игр её операционной системы Windows.
            Наш сайт предоставляет возможность игрокам <span className={styles.select}>соревноваться</span> между собой по скорости прохождения сапёра. Тот, кто быстрее проходит - побеждает, ну а если игрок подорвался на мине, то раунд продолжится в случае, если осталось несколько игроков, иначе победа засчитается единственному выжившему. На нашем сайте генерация мин происходит перед началом раунда из-за сетевой состовляющей игры. 
        </p>
      </section>
      <section>
        <h2>Правила игры</h2>
        <p>
          Заранее генерируется поле определённого размера, состоящее из множества <span className={styles.select}>закрытых ячеек</span>. Под определёнными из них расположены мины. Открытие таких ячеек приводит к мгновенному поражению. 
        </p>
        <p>
          В случае, если была открыта ячейка, под которой мины не обнаружелось, то вокруг ячейки вокруг данной будут помечены <span className={styles.select}>числом, указывающее на количество мин вокруг</span> этой ячейки. 
        </p>
        <p>
          Благодаря этому, становится возможным последующее продвижение по полю, избегая мин. 
        </p>
        <p>
          Игрок побеждает тогда, когда все <span className={styles.select}>ячейки</span>, не содержащие мину, будут <span className={styles.select}>открыты</span>.
        </p>
      </section>
      <section>
        <h2>Разновидности реализации</h2>
        <p>
          Сапёр обычно делят на различные <span className={styles.select}>сложности</span>. Например:
        </p>
        <ul>
          <li> <span className={styles.select}>Лёгкая</span> </li>
          <li> <span className={styles.select}>Средняя</span></li>
          <li> <span className={styles.select}>Сложная</span></li>
          <li> <span className={styles.select}>Невозможная</span></li>
          <li> и так далее</li>
        </ul>
        <p>
          В нашей реализации такого деления нет. Вы можете сами выбрать размер поля и количество мин, расположенных на нём.
        </p>
        <p>
          Также многие реализуют игру с <span className={styles.select}>приёмом безопасного первого хода</span>, суть которого заключается в генерации поля только после совершения первого хода игроком. У нас такой приём не используется, так как это внесёт дисбаланс: только первый игрок совершит безопасный ход, другие этой возможности лишаются, так как поле уже сгенерировано после хода первого игрока.
        </p>
      </section>
      <section>
        <h2>Вариации на сайте</h2>
        <p>На нашем сайте вы можете самостоятельно настроить различные параметры игры, например:</p>
        <ul>
          <li> <span className={styles.select}>Размер поля</span> </li>
          <li> <span className={styles.select}>Количество мин</span> на всё игровое поле </li>
          <li> <span className={styles.select}>Количество игроков</span></li>
        </ul>
        <p>Для внеигровых настроек доступны:</p>
        <ul>
          <li> <span className={styles.select}>Количество побед</span> в раундах для завершения матча</li>
        </ul>
      </section>
    </article>
  )
}