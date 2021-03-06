import React from "react";
import styles from '../../static/css/manual.module.css'

export default function ManualSeabattle(props) {
  return(
      <article className={styles.manual}>
        <h1 className={styles.header1}>Руководство по игре Морской бой</h1>
        <h2 className={styles.header2}>Описание</h2>
        <p>«Морской бой» — игра для двух участников, в которой игроки по очереди называют координаты на неизвестной им карте соперника. Если у соперника по этим координатам имеется корабль (координаты заняты), то корабль или его часть «топится», а попавший получает право сделать ещё один ход. Цель игрока — первым потопить все корабли противника.</p>
        <h2 className={styles.header2}>Правила игры</h2>
        <p>
        Игровое поле — обычно квадрат 10×10 у каждого игрока, на котором размещается флот кораблей. Вертикали обычно нумеруются сверху вниз, а горизонтали помечаются буквами слева направо. При этом используются буквы русского алфавита от «а» до «к» (буквы «ё» и «й» обычно пропускаются) либо от «а» до «и» (с использованием буквы «ё»), либо буквы латинского алфавита от «a» до «j». Иногда используется слово «республика» или «снегурочка», так как в этих 10-буквенных словах ни одна буква не повторяется. Поскольку существуют различные варианты задания системы координат, то об этом лучше заранее договориться.
        </p>
        <p>Размещаются:</p>
        <ul>
          <li>1 корабль — ряд из 4 клеток («четырёхпалубный»; линкор)</li>
          <li>2 корабля — ряд из 3 клеток («трёхпалубные»; крейсера)</li>
          <li>3 корабля — ряд из 2 клеток («двухпалубные»; эсминцы)</li>
          <li>4 корабля — 1 клетка («однопалубные»; торпедные катера)</li>
        </ul>
        <p>
        Другой вариант названия кораблей: «…-трубные» (напр. двухтрубные).
        При размещении корабли не могут касаться друг друга сторонами и углами. Встречаются, однако, варианты, когда касание углами не запрещается. Встречаются также варианты игры, когда корабли могут размещаться буквой «Г» («трех-» и «четырехпалубные»), квадратом или зигзагом («четырехпалубные»). Кроме того, есть варианты с другим набором кораблей (напр., один пятипалубный, два четырёхпалубных и т. д.) и/или другой формой поля (15×15 для пятипалубных (авианосец)).
        Рядом со «своим» полем чертится «чужое» такого же размера, только пустое. Это участок моря, где плавают корабли противника.
        При попадании в корабль противника — на чужом поле ставится крестик, при холостом выстреле — точка. Попавший стреляет ещё раз.
        Самыми уязвимыми являются линкор и торпедный катер: первый из-за крупных размеров, в связи с чем его сравнительно легко найти, а второй из-за того, что топится с одного удара, хотя его найти достаточно сложно.
        </p>
        <p>
          Можно рассматривать игру, в которой победителем считается игрок, первым построивший {'n>=3'} одинаковых знаков на достаточно большом для этого прямоугольном поле. При этом можно ограничить поле каким-нибудь размером, либо вовсе не ограничивать (в этом случае говорят о «бесконечном» поле)
          Игра до 4 одинаковых знаков на бесконечном поле неинтересна, ибо начинающий довольно быстро строит «вилку» и выигрывает. Игра при{'n>=6'} также неинтересна из-за «ничейной смерти». Существуют стратегии, не дающие противнику построить нужную линию никогда. Однако при n=5 игра становится намного содержательнее. Такой вариант имеет специальное название — гомоку. Изначально в гомоку играли на доске размером 19×19, позже она была уменьшена до размера в 15×15 клеток.
          Основной победной тактикой при игре на бесконечном поле считается построение пересечений («вилок»), которые не дают противнику возможности блокировать все возможные пути построения пятёрки. Чтобы не проиграть, необходимо своевременно прерывать линии противника длиной в три фигуры и больше.
          Практика показала, что при равных правилах для игроков тот, кто делает первый ход, имеет преимущество, позволяющее при достаточно квалифицированной игре одержать победу, что впоследствии было доказано строго. Для сохранения интереса к игре предлагались различные варианты модификации правил игры.
          Так, с введением фолов (запрещённых ходов) для игрока, начинающего первым — ему запрещено строить вилки 3×3, 4×4, а также выстраивать «длинный ряд» из своих фигур — получилась новая игра под названием рэндзю, с большим разнообразием стратегий игры и равными шансами игроков.
        </p>
      </article>
  )
}
