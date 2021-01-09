import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import './static/css/index.css'

const Main = lazy(() => import('./components/Main'))
const App = lazy(() => import('./components/App'))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback>
      <Switch>
        <Route exact path="/" component={Main } />
        <Route path={/^\/.+/} component={App } />
      </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
