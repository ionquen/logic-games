import React from 'react'
import {Link} from "react-router-dom"
import Settings from './Settings.js'

import {ReactComponent as IconMenu} from '../../static/img/icons/menu-line.svg'
import {ReactComponent as IconSettings} from '../../static/img/icons/sound-module-line.svg'
import styles from '../../static/css/topbar.module.css'
import {gameById} from '../../lang/Lang.js'


class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    }
  }
  render() {
    return (
        <header className={`${styles.topbar} ${this.state.displayMenu?styles.displayMenu:null}`}>
          <nav>
              <div onClick={()=>this.setState(prevState => ({displayMenu: prevState.displayMenu?false:true}))}>
                <IconMenu />
              </div>
              <div onClick={() => this.setState({displayMenu: false})}>
                <Link to="/">Главная</Link>
                <Link to={{search: "popup=rules"}}>Правила</Link>
                <Link to={{search: "popup=support"}}>Помощь</Link>
              </div>
          </nav>
          <Link to={{search: `popup=${this.props.match.params.gameId}`}}>
            <span>Руководство: </span><span>{gameById(this.props.match.params.gameId)}</span>
          </Link>
          <div onClick={() => this.props.setPopupUntracked(<Settings setPopupUntracked={this.props.setPopupUntracked} />)} >
            <div>#{localStorage.getItem('userId')}</div>
            <div>{localStorage.getItem('userName')}</div>
            <div>
              <IconSettings />
            </div>
          </div>
        </header>
    )
  }
}


export default Topbar;