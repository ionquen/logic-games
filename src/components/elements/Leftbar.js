import React from 'react';
import {Link} from "react-router-dom";
import styles from '../../static/css/leftbar.module.css'
import {ReactComponent as SvgIconBtnDisplayLeftbar} from '../../static/img/list-check.svg'


class Left extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftbarDisplay: false
        }
    }
    render() {
        return (
            <>
                <div className={`${styles.leftbar}  ${this.state.leftbarDisplay?styles.leftbarDisplay:''}`}>
                    <div className={styles.games}>
                        <div>
                            <Link to="/g/tictactoe">
                                <div>Крестики-нолики</div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/g/sapper">
                                <div>Сапёр</div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/g/reversi">
                                <div>Реверси</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.leftbarStateBtn} onClick={() => this.setState(prevState => ({leftbarDisplay: prevState.leftbarDisplay?false:true}))}>
                    <SvgIconBtnDisplayLeftbar />
                </div>
            </>
        )
    }
}

export default Left;