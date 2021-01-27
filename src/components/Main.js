import React from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as ArrowRight} from '../static/img/icons/arrow-right-s-line.svg'
import {ReactComponent as ArrowLeft} from '../static/img/icons/arrow-left-s-line.svg'

import {ReactComponent as Mainsvg} from '../static/img/main-page/main-img.svg'
import {ReactComponent as MainTictactoe} from '../static/img/main-page/games_tictactoe.svg'
import {ReactComponent as MainMinesweeper} from '../static/img/main-page/games_minesweeper.svg'
import {ReactComponent as MainReversi} from '../static/img/main-page/games_reversi.svg'
import styles from '../static/css/main.module.css'
import Granim from 'granim'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.catalogList = React.createRef();
    }
    componentDidMount() {
        this.backGradient = new Granim({
            element: '#canvas-main-back',
            direction: 'left-right',
            states : {
                "default-state": {
                    gradients: [
                        ['rgb(0,0,0)', 'rgb(0,0,60)'],
                        ['rgb(0,0,60)', 'rgb(0,30,30)'],
                        ['rgb(0,30,30)', 'rgb(0,0,0)'],
                    ],
                    transitionSpeed: 20000
                }
            }
        });
    }
    componentWillUnmount() {
        this.backGradient.destroy()
    }
    scrollLeft = (length) => this.catalogList.current.scrollLeft += length
    render() {
        return (
                <div className={styles.main}>
                    <canvas id="canvas-main-back" />
                    <header className={styles.header}>
                        <div>Погрузитесь в мир логических настольных игр вместе с друзьями!</div>
                        <div>У нас лучшие логические совместные игры. Никакой регистрации, авторизации, рекламы на нашем ресурсе и при этом совершенно бесплатно!</div>
                    </header>
                    <div className={styles.img}>
                        <Mainsvg alt="Фоновое изображение. Корабль, игровое поле." />
                    </div>
                    <nav className={styles.catalog}>
                        <ArrowLeft className={styles.arrowLeft} onClick={() => this.scrollLeft(-218)}/>
                        <ArrowRight className={styles.arrowRight} onClick={() => this.scrollLeft(+218)} />
                        <div ref={this.catalogList} onWheel={(e) => this.scrollLeft(e.deltaY)}>
                            <div>
                                <Link to="/g/tictactoe" >
                                    <div>TicTacToe</div>
                                    <div><MainTictactoe  alt="Tic tac toe game"/></div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/minesweeper" >
                                    <div>Minesweeper</div>
                                    <div><MainMinesweeper alt="Minesweeper game" /></div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/reversi" >
                                    <div>Reversi</div>
                                    <div><MainReversi alt="Reversi game" /></div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/tictactoe" >
                                    <div>TicTacToe</div>
                                    <div><MainTictactoe  alt="Tic tac toe game"/></div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/minesweeper" >
                                    <div>Minesweeper</div>
                                    <div><MainMinesweeper alt="Minesweeper game" /></div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/reversi" >
                                    <div>Reversi</div>
                                    <div><MainReversi alt="Reversi game" /></div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/tictactoe" >
                                    <div>TicTacToe</div>
                                    <div><MainTictactoe  alt="Tic tac toe game"/></div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/minesweeper" >
                                    <div>Minesweeper</div>
                                    <div><MainMinesweeper alt="Minesweeper game" /></div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/reversi" >
                                    <div>Reversi</div>
                                    <div><MainReversi alt="Reversi game" /></div>
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <footer class={styles.footer}>
                        <div>games.ionquen.ru</div>
                        <div>github.com/ionquen</div>
                        <div>ionquen@pm.me</div>
                        <div>2021</div>
                    </footer>
                </div>
        )
    }
}
export default Main;