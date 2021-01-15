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
                    <div className={styles.header}>
                        <div>Погрузитесь в мир логических настольных игр вместе с друзьями!</div>
                        <div>Ничего не сможет остановить на пути к развлечению. Никакой регистрации, авторизации, рекламы на нашем ресурсе и при этом совершенно бесплатно!</div>
                    </div>
                    <div className={styles.img}>
                        <Mainsvg />
                    </div>
                    <div className={styles.catalog}>
                        <ArrowLeft className={styles.arrowLeft} onClick={() => this.scrollLeft(-218)}/>
                        <ArrowRight className={styles.arrowRight} onClick={() => this.scrollLeft(+218)} />
                        <div ref={this.catalogList} onWheel={(e) => this.scrollLeft(e.deltaY)}>
                            <div>
                                <Link to="/g/tictactoe">
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class={styles.footer}>
                        <div>games.ionquen.ru</div>
                        <div>github.com/ionquen</div>
                        <div>ionqwen@gmail.com</div>
                        <div>2021</div>
                    </div>
                </div>
        )
    }
}
export default Main;