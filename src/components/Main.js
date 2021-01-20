import React from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as Mainsvg} from '../static/img/main-img.svg'
import {ReactComponent as ArrowRight} from '../static/img/arrow-right-s-line.svg'
import {ReactComponent as ArrowLeft} from '../static/img/arrow-left-s-line.svg'
import {ReactComponent as AnimateTTT} from '../static/img/ttt.svg'
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
                        <Mainsvg alt="" />
                    </div>
                    <nav className={styles.catalog}>
                        <ArrowLeft className={styles.arrowLeft} onClick={() => this.scrollLeft(-218)}/>
                        <ArrowRight className={styles.arrowRight} onClick={() => this.scrollLeft(+218)} />
                        <div ref={this.catalogList} onWheel={(e) => this.scrollLeft(e.deltaY)}>
                            <div>
                                <Link to="/g/tictactoe" alt="Tic tac toe game" >
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                                <Link to="/g/minesweeper" alt="Minesweeper game" >
                                    <div>Сапёр</div>
                                    <AnimateTTT />
                                </Link>
                                <Link to="/g/reversi" alt="Reversi game" >
                                    <div>Реверси</div>
                                    <AnimateTTT />
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