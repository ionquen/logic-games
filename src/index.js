import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import './static/css/index.css'
import Popup from './components/elements/Popup.js'

const Main = lazy(() => import('./components/Main'))
const App = lazy(() => import('./components/App'))
const ManualTictactoe = lazy(() => import('./components/manuals/ManualTictactoe'))
const ManualMinesweeper = lazy(() => import('./components/manuals/ManualMinesweeper'))
const ManualReversi = lazy(() => import('./components/manuals/ManualReversi'))
const Support = lazy(() => import('./components/manuals/Support'))
const Rules = lazy(() => import('./components/manuals/Rules'))

function popupRouter(props) {
  const splitSearch = props.location.search.slice(1).split("&").map(item => item.split("="))
  let popupValue, result
  splitSearch.forEach(item => item[0]==="popup"?popupValue = item[1]:false)
  switch(popupValue) {
    case "tictactoe": result = <ManualTictactoe/>; break
    case "minesweeper": result = <ManualMinesweeper />; break
    case "reversi": result = <ManualReversi/>; break
    case "support": result = <Support/>; break
    case "rules": result = <Rules/>; break
    default: return null
  }
  if (popupValue) return <Popup pathname={props.location.pathname}>{result}</Popup>
}

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Suspense fallback>
        <Switch>
          <Route exact path="/" component={Main } />
          <Route path={/^\/.+/} component={App } />
        </Switch>
      </Suspense>
      <Suspense fallback>
        <Route path="/" component={popupRouter} />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
