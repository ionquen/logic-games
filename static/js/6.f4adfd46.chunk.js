(this["webpackJsonplogic-games"]=this["webpackJsonplogic-games"]||[]).push([[6],{42:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(22),n=r(7),s=r(8),o=r(10),i=r(9),l=r(1),c=r(0),u=r.n(c),p=r(43),m=r.n(p),d=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).getPlayersList=function(){var e=[];if(void 0!==s.props.queue){var t,r=Object(a.a)(s.props.queue);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(s.props.players[n])}}catch(o){r.e(o)}finally{r.f()}}else Array.prototype.push.apply(e,s.props.players);return e.map((function(e,t){return Object(l.jsxs)("div",{style:{color:e.connected?s.props.playerNumber===t?"rgb(255,165,0)":"#000":"rgb(150,150,150)"},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:t+1}),Object(l.jsxs)("div",{children:["#",e.userId]}),Object(l.jsx)("div",{children:e.userName})]}),s.props.score[t].map((function(e){return Object(l.jsx)("div",{children:e})}))]})}))},s.state={timeleft:~~((e.timeTurn+e.lasttime-Date.now())/1e3)},s.playerTurnTimer=void 0,s}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.props.displayCurrentPlayer&&(this.playerTurnTimer=setInterval((function(){return e.paused?null:e.setState({timeleft:~~((e.props.timeTurn+e.props.lasttime-Date.now())/1e3)})}),1e3))}},{key:"componentWillUnmount",value:function(){this.props.displayCurrentPlayer&&clearInterval(this.playerTurnTimer)}},{key:"render",value:function(){var e="rgb(".concat(255-this.state.timeleft/(this.props.timeTurn/1e3)*255,", ").concat(this.state.timeleft/(this.props.timeTurn/1e3)*200,", 0)");return Object(l.jsxs)("div",{className:m.a.score,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"\u0418\u0433\u0440\u043e\u043a\u0438"}),this.props.scoreItemNames.map((function(e){return Object(l.jsx)("div",{children:e})}))]}),this.props.displayCurrentPlayer?Object(l.jsxs)("div",{className:m.a.scoreCurrentPlayer,style:{color:e,top:25+42*this.props.currentPlayerTurn+"px",backgroundColor:e},children:[Object(l.jsx)("div",{children:this.state.timeleft}),Object(l.jsx)("div",{style:{"border-color":e}}),Object(l.jsx)("div",{style:{"border-color":e}})]}):Object(l.jsx)("div",{}),this.getPlayersList()]})}}]),r}(u.a.Component)},43:function(e,t,r){e.exports={score:"score_score__1Slqo",scoreCurrentPlayer:"score_scoreCurrentPlayer__36TAD"}},44:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(7),n=r(8),s=r(10),o=r(9),i=r(1),l=r(0),c=r.n(l),u=r(45),p=r.n(u),m=function(e){Object(s.a)(r,e);var t=Object(o.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).shouldComponentUpdate=function(){return n.alertDisplay=!0,void 0!==n.alertTimeoutDestroy&&clearTimeout(n.alertTimeoutDestroy),n.alertTimeoutDestroy=setTimeout((function(){n.alertDisplay=!1,n.alertTimeoutDestroy=void 0,n.forceUpdate()}),3e3),!0},n.alertHide=function(){clearTimeout(n.alertTimeoutDestroy),n.alertDisplay=!1,n.alertTimeoutDestroy=void 0,n.forceUpdate()},n.alertDisplay=!1,n.alertTimeoutDestroy=void 0,n}return Object(n.a)(r,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"".concat(p.a.alert," ").concat(this.alertDisplay?p.a.alertDisplay:""),children:Object(i.jsx)("div",{onClick:this.alertHide,children:this.props.value})})}}]),r}(c.a.Component)},45:function(e,t,r){e.exports={alert:"alert_alert__285A5",alertDisplay:"alert_alertDisplay__3muLT"}},46:function(e,t,r){e.exports={canvas:"canvas_canvas__1xjwk"}},97:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var a=r(3),n=r(7),s=r(8),o=r(10),i=r(9),l=r(1),c=r(0),u=r.n(c),p=r(42),m=r(44);function d(e,t){var r=null;window.requestAnimationFrame((function a(n){r||(r=n);var s=n-r;e(s),s<t&&window.requestAnimationFrame(a)}))}var y=r(46),f=r.n(y),h=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).displayPoint=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=a.canvas.current.getContext("2d");if(s.lineCap="round",s.lineWidth=3,a.currentBoard[a.props.gameInfo.boardSize*r+t]=e,!0===n)switch(e){case 0:d((function(e){s.clearRect(30*t+1,30*r+1,28,28),s.fillStyle="rgba(200,200,255, ".concat(e<1e3?e/1e3:e>2e3?1-(e-2e3)/1e3:1,")"),s.fillRect(30*t+1,30*r+1,28,28),s.fill(),s.strokeStyle="blue",s.beginPath();var a=Math.floor((e<300?e:300)/16);if(s.moveTo(30*t+6,30*r+6),s.lineTo(30*t+6+a,30*r+6+a),e>300){var n=Math.floor((e<600?e-300:300)/16);s.moveTo(30*t+24,30*r+6),s.lineTo(30*t+24-n,30*r+6+n)}s.stroke()}),3e3);break;case 1:d((function(e){s.clearRect(30*t+1,30*r+1,28,28),s.fillStyle="rgba(255,200,200, ".concat(e<1e3?e/1e3:e>2e3?1-(e-2e3)/1e3:1,")"),s.fillRect(30*t+1,30*r+1,28,28),s.fill(),s.strokeStyle="red",s.beginPath(),s.arc(30*t+15,30*r+15,9,0,-Math.PI*(e<600?e/300:2),!0),s.stroke()}),3e3);break;case 2:d((function(e){s.clearRect(30*t+1,30*r+1,28,28),s.fillStyle="rgba(200,255,200, ".concat(e<1e3?e/1e3:e>2e3?1-(e-2e3)/1e3:1,")"),s.fillRect(30*t+1,30*r+1,28,28),s.fill(),s.fillStyle="green",s.beginPath(),s.arc(30*t+15,30*r+15,e<600?e/85:7,0,2*Math.PI,!0),s.fill()}),3e3)}else switch(e){case 0:s.strokeStyle="blue",s.beginPath(),s.moveTo(30*t+6,30*r+6),s.lineTo(30*t+24,30*r+24),s.moveTo(30*t+24,30*r+6),s.lineTo(30*t+6,30*r+24),s.stroke();break;case 1:s.strokeStyle="red",s.beginPath(),s.arc(30*t+15,30*r+15,9,0,2*Math.PI,!0),s.stroke();break;case 2:s.fillStyle="green",s.beginPath(),s.arc(30*t+15,30*r+15,7,0,2*Math.PI,!0),s.fill()}},a.clear=function(){var e=a.canvas.current.getContext("2d");e.clearRect(0,0,30*(a.props.gameInfo.boardSize+1),30*(a.props.gameInfo.boardSize+1)),e.strokeStyle="#000",e.lineWidth=1,e.beginPath();for(var t=0;t<=a.props.gameInfo.boardSize;t++)e.moveTo(30*t,0),e.lineTo(30*t,30*a.props.gameInfo.boardSize);for(var r=0;r<=a.props.gameInfo.boardSize;r++)e.moveTo(0,30*r),e.lineTo(30*a.props.gameInfo.boardSize,30*r);e.stroke()},a.actionTurn=function(e){if(a.paused||a.playerNumber!==a.state.currentPlayerTurn)return a.setState({alertValue:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430"});var t=a.canvas.current.getBoundingClientRect(),r=~~((e.clientX-t.left)/30),n=~~((e.clientY-t.top)/30);a.currentBoard.hasOwnProperty(n*+a.props.gameInfo.boardSize+r)?a.setState({alertValue:"\u042f\u0447\u0435\u0439\u043a\u0430 \u0437\u0430\u043d\u044f\u0442\u0430"}):a.props.emitter.emit("action",{x:r,y:n})},a.state={currentPlayerTurn:e.gameInfo.currentPlayerTurn,score:e.gameInfo.score,alertValue:"",lasttime:e.gameInfo.lasttime},a.currentBoard=e.gameInfo.currentBoard,a.paused=e.gameInfo.paused,e.players.every((function(t,r){return t.userId!==+localStorage.getItem("userId")||e.gameInfo.queue.every((function(e,t){return e!==r||(a.playerNumber=t,!1)}))})),a.canvas=u.a.createRef(),a}return Object(s.a)(r,[{key:"componentWillMount",value:function(){var e=this;this.emitterUnsubGame=this.props.emitter.sub("game",(function(t){switch(t.type){case"roundStarted":e.setState({currentPlayerTurn:t.currentPlayerTurn,lasttime:t.lasttime,alertValue:"\u0420\u0430\u0443\u043d\u0434 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f c \u0445\u043e\u0434\u0430 ".concat(e.props.players[e.props.gameInfo.queue[t.currentPlayerTurn]].userName,"!")}),e.paused=!1,e.currentBoard={},e.clear();break;case"roundFinished":e.paused=!0,e.displayPoint(t.cell,t.x,t.y,!0);var r=e.state.score[t.cell][0]++;e.setState((function(n){return{currentPlayerTurn:t.nextPlayer,score:Object(a.a)(Object(a.a)({},n.score),r),lasttime:t.lasttime,alertValue:"\u0420\u0430\u0443\u043d\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d! \u041f\u043e\u0431\u0435\u0434\u0438\u043b ".concat(e.props.players[e.props.gameInfo.queue[t.cell]].userName)}}));break;case"turn":e.setState({currentPlayerTurn:t.nextPlayer,lasttime:t.lasttime,alertValue:"\u0425\u043e\u0434 \u0438\u0433\u0440\u043e\u043a\u0430 ".concat(e.props.players[e.props.gameInfo.queue[t.nextPlayer]].userName)}),e.displayPoint(t.cell,t.x,t.y,!0);break;case"error":e.displayPoint(t.cell,t.x,t.y),e.setState({alertValue:"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430 \u0437\u0430\u043d\u044f\u0442\u0430"});break;case"matchFinished":e.setState({alertValue:"\u041c\u0430\u0442\u0447 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d. \u041f\u043e\u0431\u0435\u0434\u0438\u043b ".concat(e.props.players[e.props.gameInfo.queue[t.currentPlayerTurn]].userName)});break;case"nextPlayer":e.state.currentPlayerTurn===e.playerNumber?e.setState({alertValue:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u0445\u043e\u0434"}):e.setState({alertValue:"\u041e\u043f\u043f\u043e\u043d\u0435\u043d\u0442 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b \u0445\u043e\u0434"}),e.setState({currentPlayerTurn:t.nextPlayer,lasttime:t.lasttime})}}))}},{key:"componentDidMount",value:function(){for(var e in this.clear(),this.currentBoard)this.displayPoint(this.currentBoard[e],e%this.props.gameInfo.boardSize,~~(e/this.props.gameInfo.boardSize))}},{key:"componentWillUnmount",value:function(){this.emitterUnsubGame()}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.a,{displayCurrentPlayer:!0,paused:this.paused,queue:this.props.gameInfo.queue,players:this.props.players,currentPlayerTurn:this.state.currentPlayerTurn,playerNumber:this.playerNumber,timeTurn:this.props.gameInfo.timeTurn,lasttime:this.state.lasttime,score:this.state.score,scoreItemNames:["\u0421\u0447\u0451\u0442"]}),Object(l.jsx)(m.a,{value:this.state.alertValue}),Object(l.jsx)("div",{className:f.a.canvas,children:Object(l.jsx)("canvas",{ref:this.canvas,onClick:this.actionTurn,width:30*+this.props.gameInfo.boardSize+1,height:30*+this.props.gameInfo.boardSize+1})})]})}}]),r}(u.a.Component)}}]);
//# sourceMappingURL=6.f4adfd46.chunk.js.map