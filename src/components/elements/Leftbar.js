import React from 'react'
import {Link} from "react-router-dom"
import styles from '../../static/css/leftbar.module.css'
import {ReactComponent as IconList} from '../../static/img/icons/list-check.svg'
import {allGames} from '../../lang/Lang.js'


class Left extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftbarDisplay: false
        }
    }
    getItems() { 
        return Object.entries(allGames()).map(game => 
            <div className={this.props.match.params.gameId===game[0]?styles.select:''}>
                <Link to={`/g/${game[0]}`}>
                    <div>{game[1]}</div>
                </Link>
            </div>
        )
    }
    render() {
        return (
            <>
                <aside className={`${styles.leftbar}  ${this.state.leftbarDisplay?styles.leftbarDisplay:''}`}>

                    <div>
                        {this.getItems()}
                    </div>
                </aside>
                <div className={styles.leftbarStateBtn} onClick={() => this.setState(prevState => ({leftbarDisplay: prevState.leftbarDisplay?false:true}))}>
                    <IconList />
                </div>
            </>
        )
    }
}

export default Left;