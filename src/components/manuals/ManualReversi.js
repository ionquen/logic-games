import React from "react";
import styles from '../../static/css/manual.module.css'
import {ReactComponent as Img} from '../../static/img/main-page/games_reversi.svg'

export default function ManualReversi(props) {
  return(
  <article className={styles.manual}>
    <h1>Руководство по игре Реверси</h1>
    <section>
      <h2>Описание</h2>
      <p>
        <Img className={styles.imgFloat} alt="реверси" />
        <span className={styles.select}>Реверси</span> — логическая настольная игра для двух человек, проходящая на доске размером <span className={styles.select}>8 на 8</span> клеток.
      </p>
    </section>
    <section>
      <h2>Правила игры</h2>
      <p>
        Для игры используется <span className={styles.select}>64</span> специальные фишки, которые с каждой стороны помечены определённым цветом (<span className={styles.select}>чёрным</span> и <span className={styles.select}>белым</span>).
        В начале игры в центр поля выставляются <span className={styles.select}>4 фишки</span> : 2 чёрные на d5 и e4, 2 белые на e4 и d5.
      </p>
      <ul>
        <li>
          Первый ход делают <span className={styles.select}>чёрные</span>. Далее игроки ходят по очереди.
        </li>
        <li>
          Делая ход, игрок должен поставить свою фишку на одну из клеток доски таким образом, чтобы между этой поставленной фишкой и одной из имеющихся уже на доске фишек его цвета находился <span className={styles.select}>непрерывный ряд фишек соперника</span>, горизонтальный, вертикальный или диагональный (другими словами, чтобы непрерывный ряд фишек соперника оказался «закрыт» фишками игрока с двух сторон). Все <span className={styles.select}>фишки соперника</span>, входящие в «закрытый» на этом ходу ряд, переворачиваются на другую сторону (<span className={styles.select}>меняют цвет</span>) и переходят к ходившему игроку.
        </li>
        <li>
          Если в результате одного хода «закрывается» одновременно более одного ряда фишек противника, то переворачиваются все фишки, оказавшиеся на всех «закрытых» рядах.
        </li>
        <li>
          Игрок вправе выбирать любой из возможных для него ходов. Если игрок имеет возможные ходы, он не может отказаться от хода. Если игрок не имеет допустимых ходов, то ход передаётся сопернику.
        </li>
        <li>
          Игра прекращается, когда на доску выставлены все фишки или когда ни один из игроков не может сделать хода. По окончании игры проводится подсчёт фишек каждого цвета, и игрок, <span className={styles.select}>чьих фишек</span> на доске выставлено <span className={styles.select}>больше</span>, объявляется <span className={styles.select}>победителем</span>. В случае равенства количества фишек засчитывается <span className={styles.select}>ничья</span>.
        </li>
      </ul>
    </section>
    <section>
      <h2>Вариации на сайте</h2>
      <p>На нашем сайте вы можете самостоятельно настроить различные параметры игры, например:</p>
      <ul>
        <li> <span className={styles.select}>Размер поля</span> </li>
        <li> <span className={styles.select}>Количество игроков</span>. В компьютерной версии возможно всё)</li>
      </ul>
      <p>Для внеигровых настроек доступны:</p>
      <ul>
        <li> <span className={styles.select}>Количество побед</span> в раундах для завершения матча</li>
      </ul>
    </section>
  </article>
  )
}