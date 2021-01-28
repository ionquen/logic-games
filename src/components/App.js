import React from 'react';
import {Switch, Route} from "react-router-dom";

import Lobby from './elements/Lobby';
import Room from './elements/Room';
import Leftbar from './elements/Leftbar';

import Chat from './elements/Chat';
import Topbar from './elements/Topbar';
//import Alert from './elements/Alert' 
import styles from '../static/css/app.module.css'
import Granim from 'granim'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popupElement: null,
        }
    }
    componentWillMount() {
        //Для взаимодействия с чатом на глобальном уровне
        if (this.emitter===undefined) this.emitter = new Emitter()
    }
    componentDidMount() {
        this.backGradient = new Granim({
            element: '#grad-backg',
            direction: 'left-right',
            states : {
                "default-state": {
                    gradients: [
                        ['#EF8D5B', '#EFB75B'],
                        ['#EFC55B', '#EFDA5B'],
                        ['#E8ED5A', '#EF815B'],
                    ],
                    transitionSpeed: 20000
                }
            }
        });
    }
    componentWillUnmount() {
        this.backGradient.destroy()
    }
    setPopupUntracked = (popupElement) => {
        this.setState({popupElement: popupElement})
    }
    render() {
        return (
            <div className={styles.fullpage}>  
                <Route path="/g/:gameId" component={props=><Topbar {...props} setPopupUntracked={this.setPopupUntracked}/>} />
                <div className={styles.page}>
                    <Switch>
                        <Route path="/g/:gameId/:roomId" render={props=>
                            <Room {...props} emitter={this.emitter} >
                            </Room>
                            } />
                        <Route path="/g/:gameId" render={props => 
                            <>
                                <Leftbar {...props} />
                                <Lobby {...props} emitter={this.emitter} setPopupUntracked={this.setPopupUntracked} >
                                </Lobby>
                            </>
                        } />
                            
                    </Switch>
                    <Chat emitter={this.emitter}/>
                    
                </div>
                <canvas id="grad-backg"/>
                {this.state.popupElement}
            </div>
        )
    }
}

class Emitter {
    constructor() {
        this.events = []                    
    }
    sub(eventName, fun) {
        if (!Array.isArray(this.events[eventName])) this.events[eventName]=[]
        this.events[eventName].push(fun)
        return () => {
            this.events[eventName] = this.events[eventName].filter(eventFn => fun !== eventFn);
        }
    }
    emit(eventName, ...data) {
         this.events[eventName].forEach(fun => fun.call(null, ...data))
    }
}
export default App;