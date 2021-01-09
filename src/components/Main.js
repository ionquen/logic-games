import React from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as Mainsvg} from '../static/img/main-img.svg'
import {ReactComponent as ArrowRight} from '../static/img/arrow-right-s-line.svg'
import {ReactComponent as ArrowLeft} from '../static/img/arrow-left-s-line.svg'
import {ReactComponent as AnimateTTT} from '../static/img/ttt.svg'
import styles from '../static/css/main.module.css'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.catalogList = React.createRef();
    }
    scrollLeft = (length) => this.catalogList.current.scrollLeft += length
    render() {
        return (
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div>Погрузитесь в мир логических настольных игр вместе с друзьями!</div>
                        <div>Ничего не сможет остановить на пути к развлечению. Никакой регистрации, авторизации, рекламы на нашем ресурсе и при этом совершенно бесплатно!</div>
                    </div>
                    <div className={styles.img}>
                        <Mainsvg />
                    </div>
                    <div className={styles.catalog}>
                        <ArrowLeft className={styles.arrowLeft} onClick={(e) => this.scrollLeft(-218)}/>
                        <ArrowRight className={styles.arrowRight} onClick={(e) => this.scrollLeft(+218)} />
                        <div ref={this.catalogList} onWheel={(e) => this.scrollLeft(e.deltaY)}>
                            <div>
                                <Link to="/g/tictactoe">
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/tictactoe">
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/tictactoe">
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/tictactoe">
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/tictactoe">
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/tictactoe">
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                            </div>
                            <div>
                                <Link to="/g/tictactoe">
                                    <div>Крестики-нолики</div>
                                    <AnimateTTT />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class={styles.footer}>
                        <div>github.com/ionquen</div>
                        <div>ionqwen@gmail.com</div>
                        <div>2021</div>
                    </div>
                </div>
        )
    }
}
export default Main;