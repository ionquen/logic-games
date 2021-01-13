import React, { Suspense, lazy } from 'react'
import {Link} from "react-router-dom"

import Popup from './Popup.js'
import Settings from './Settings.js'

import {ReactComponent as SvgIconMenu} from '../../static/img/menu-line.svg'
import {ReactComponent as SvgIconSettings} from '../../static/img/sound-module-line.svg'
import styles from '../../static/css/topbar.module.css'

const ManualTictactoe = lazy(() => import('../manuals/ManualTictactoe'))
const ManualSeabattle = lazy(() => import('../manuals/ManualSeabattle'))
const ManualSapper = lazy(() => import('../manuals/ManualSapper'))
const ManualReversi = lazy(() => import('../manuals/ManualReversi'))
const Support = lazy(() => import('../manuals/Support'))
const Rules = lazy(() => import('../manuals/Rules'))

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    }
  }
  showManual = () => {
    let popupWindow = null
    switch (this.props.match.params.gameId) {
      case 'tictactoe': popupWindow = <ManualTictactoe />
        break
      case 'seabattle': popupWindow = <ManualSeabattle />
        break
      case 'reversi': popupWindow = <ManualReversi />
        break
      case 'sapper': popupWindow = <ManualSapper />
        break
      default: break
    }
    this.props.setWindow(
    <Suspense>
      <Popup setWindow={this.props.setWindow}>
        {popupWindow}
      </Popup>
    </Suspense>)
  }
  showSettings = () => this.props.setWindow(<Popup setWindow={this.props.setWindow}><Settings /></Popup>)
  showRules = () => this.props.setWindow(<Popup setWindow={this.props.setWindow}><Rules /></Popup>)
  showSupport = () => this.props.setWindow(<Popup setWindow={this.props.setWindow}><Support /></Popup>)
  displayGameName = ()=> {
    switch (this.props.match.params.gameId) {
      case 'tictactoe': return 'Крестики-нолики'
      case 'dots': return 'Точки'
      case 'seabattle': return 'Морской бой'
      case 'sapper': return 'Сапёр'
      case 'reversi': return 'Риверси'
      default: return
    }
  }
  render() {
    return (
      <>
        <div className={`${styles.topbar} ${this.state.displayMenu?styles.displayMenu:null}`}>
          <div>
              <div onClick={()=>this.setState(prevState => ({displayMenu: prevState.displayMenu?false:true}))}>
                <SvgIconMenu />
              </div>
              <div onClick={() => this.setState({displayMenu: false})}>
                <Link to="/">Главная</Link>
                <div onClick={this.showRules}>Правила</div>
                <div onClick={this.showSupport}>Помощь</div>
              </div>
          </div>
          <div onClick={this.showManual}>
            <span>Руководство: </span><span>{this.displayGameName()}</span>
          </div>
          <div onClick={this.showSettings}>
            <div>#{localStorage.getItem('userId')}</div>
            <div>{localStorage.getItem('userName')}</div>
            <div>
              <SvgIconSettings />
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default Topbar;