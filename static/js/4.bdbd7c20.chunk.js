(this["webpackJsonplogic-games"]=this["webpackJsonplogic-games"]||[]).push([[4],{80:function(e){e.exports=JSON.parse('{"tictactoe":"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438","minesweeper":"\u0421\u0430\u043f\u0451\u0440","reversi":"\u0420\u0435\u0432\u0435\u0440\u0441\u0438"}')},81:function(e,t,r){e.exports={lobby:"lobby_lobby__g4Omn",item:"lobby_item__3xs5D",connected:"lobby_connected__-Ig30"}},82:function(e,t,r){e.exports={room:"room_room__2rs_b",match:"room_match__2zuUt",btnToLobby:"room_btnToLobby__KkDG2"}},83:function(e,t,r){e.exports={leftbar:"leftbar_leftbar__K-yD4",leftbarDisplay:"leftbar_leftbarDisplay__2V4rz",leftbarStateBtn:"leftbar_leftbarStateBtn__Q5aZH",games:"leftbar_games__1Y0MG"}},84:function(e,t,r){e.exports={chat:"chat_chat__2N-A0",global:"chat_global__2uImr",selected:"chat_selected__2tg7k",system:"chat_system__2tgLF",chatDisplay:"chat_chatDisplay__1Lkwg",chatStateBtn:"chat_chatStateBtn__1Murg"}},85:function(e,t,r){e.exports={topbar:"topbar_topbar__2f6mz",displayMenu:"topbar_displayMenu__3LvLZ"}},86:function(e,t,r){e.exports={page:"app_page__10lvp"}},93:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(7),s=r(8),i=r(10),o=r(9),c=r(1),l=r(0),u=r.n(l),d=r(2),p=r(13),b=r(23),h=r(14),m=r(26),j=r.n(m),f=r(80);function v(e){return f[e]}var O=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).renderSettings=function(){switch(a.state.gameId){case"tictactoe":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.e,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432",name:"players",disabled:a.props.disabled,value:2,min:2,max:3}),Object(c.jsx)(h.e,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0443\u043d\u0434\u043e\u0432 \u0434\u043b\u044f \u043f\u043e\u0431\u0435\u0434\u044b",disabled:a.props.disabled,name:"roundsForWin",value:10,min:3,max:20}),Object(c.jsx)(h.e,{label:"\u0412\u0440\u0435\u043c\u044f \u043d\u0430 \u0445\u043e\u0434",disabled:a.props.disabled,name:"timeTurn",value:20,min:5,max:60}),Object(c.jsx)(h.e,{label:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u043e\u043b\u044f",disabled:a.props.disabled,name:"boardSize",value:30,min:3,max:40}),Object(c.jsx)(h.e,{label:"\u0414\u043b\u0438\u043d\u0430 \u0440\u044f\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u0431\u0435\u0434\u044b",disabled:a.props.disabled,name:"cellsForWin",value:5,min:3,max:10})]});case"minesweeper":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.e,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432",disabled:a.props.disabled,name:"players",value:2,min:2,max:4}),Object(c.jsx)(h.e,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0443\u043d\u0434\u043e\u0432 \u0434\u043b\u044f \u043f\u043e\u0431\u0435\u0434\u044b",disabled:a.props.disabled,name:"roundsForWin",value:10,min:3,max:20}),Object(c.jsx)(h.e,{label:"\u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e\u043b\u044f",disabled:a.props.disabled,name:"boardSizeX",value:15,min:10,max:30}),Object(c.jsx)(h.e,{label:"\u0412\u044b\u0441\u043e\u0442\u0430 \u043f\u043e\u043b\u044f",disabled:a.props.disabled,name:"boardSizeY",value:20,min:10,max:40}),Object(c.jsx)(h.e,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d (\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c)",disabled:a.props.disabled,name:"minesCount",value:30,min:5,max:40})]});default:return}},a.state={gameId:e.gameId},a}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:j.a.roomInfo,children:[Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:void 0===this.props.roomId?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043d\u0430\u0442\u044b":"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 #"+this.props.roomId})}),Object(c.jsxs)("form",{onSubmit:this.props.onSubmit,children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u041e\u0431\u0449\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(c.jsx)(h.c,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043d\u0430\u0442\u044b",name:"name",value:this.props.name,disabled:void 0!==this.props.name}),Object(c.jsx)(h.g,{disabled:this.props.disabled,name:"gameId",data:function(){var e=[],t=f;for(var r in t)e.push({name:r,value:t[r]});return e}(),selected:this.state.gameId,onClick:function(t){return e.setState({gameId:t.target.name})}}),Object(c.jsx)(h.b,{label:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c?",name:"usePw",disabled:this.props.disabled,value:this.props.usePw||!1,onClick:function(t){return e.setState({usePw:t.target.checked})}}),Object(c.jsx)(h.c,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"pw",disabled:!this.state.usePw&&!0!==this.props.usePw}),Object(c.jsx)(h.b,{label:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0439?",name:"private",disabled:this.props.disabled,value:this.props.private||!1}),Object(c.jsx)(h.b,{label:"\u0410\u0432\u0442\u043e\u0441\u0442\u0430\u0440\u0442",name:"autostart",disabled:this.props.disabled,value:this.props.autostart||!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0433\u0440\u044b"}),void 0===this.state.gameId?null:this.renderSettings()]}),Object(c.jsx)("div",{children:void 0===this.props.roomId?Object(c.jsx)(c.Fragment,{children:"\u0412\u044b \u0441\u0442\u0430\u043d\u0438\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u043c \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u043c \u044d\u0442\u043e\u0439 \u043a\u043e\u043c\u043d\u0430\u0442\u044b!"}):Object(c.jsxs)(c.Fragment,{children:["\u0418\u0433\u0440\u043e\u043a\u0438 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043a\u043e\u043c\u043d\u0430\u0442\u0435",this.props.users.map((function(e){return Object(c.jsxs)("div",{className:e.connected?null:j.a.disconnected,children:[Object(c.jsx)("div",{children:e.userId}),Object(c.jsxs)("div",{children:[" ",e.userName]})]})}))]})})]}),Object(c.jsx)("div",{children:this.props.children})]})]})})}}]),r}(u.a.Component),g=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).createRoom=function(t){t.preventDefault();var r={name:t.target.name.value,gameId:t.target.gameId.value,usePw:t.target.usePw.checked,private:t.target.private.checked,autostart:t.target.autostart.checked,pw:t.target.usePw.value?t.target.pw.value||"":void 0,userName:localStorage.getItem("userName"),gameProps:e.getPropsByGameId(t.target.gameId.value,t)};r.name.length<3||r.name.length>20||e.props.ws.send(JSON.stringify({type:"create",data:r}))},e}return Object(s.a)(r,[{key:"getPropsByGameId",value:function(e,t){switch(e){case"tictactoe":return{players:t.target.players.value,roundsForWin:+t.target.roundsForWin.value,boardSize:+t.target.boardSize.value,timeTurn:1e3*+t.target.timeTurn.value,cellsForWin:+t.target.cellsForWin.value};case"minesweeper":return{players:t.target.players.value,roundsForWin:+t.target.roundsForWin.value,boardSizeX:+t.target.boardSizeX.value,boardSizeY:+t.target.boardSizeY.value,minesCount:+t.target.minesCount.value};default:return{}}}},{key:"render",value:function(){return Object(c.jsx)(O,{gameId:this.props.gameId,onSubmit:this.createRoom,children:Object(c.jsx)(h.d,{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043d\u0430\u0442\u0443"})})}}]),r}(u.a.Component),y=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).joinRoom=function(t){t.preventDefault(),e.props.ws.send(JSON.stringify({type:"join",data:{roomId:e.props.data.roomId,pw:t.target.usePw.checked?t.target.pw.value:void 0,userName:localStorage.getItem("userName")}}))},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(c.jsx)(O,Object(a.a)(Object(a.a)({},this.props.data),{},{disabled:this.props.disabled,onSubmit:this.joinRoom,children:Object(c.jsx)(h.d,{disabled:this.props.data.started,children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f"})}))}}]),r}(u.a.Component);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var w=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),S=l.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"#000"});function k(e,t){var r=e.title,a=e.titleId,n=I(e,["title","titleId"]);return l.createElement("svg",x({viewBox:"0 0 24 24",width:24,height:24,ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,w,S)}var P=l.forwardRef(k),C=(r.p,r(81)),_=r.n(C),E=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).createNewRoom=function(){return a.props.setPopupUntracked(Object(c.jsx)(b.a,{setPopupUntracked:a.props.setPopupUntracked,children:Object(c.jsx)(g,{ws:a.ws,gameId:a.props.match.params.gameId,disabled:!1})}))},a.connectById=function(e){e.preventDefault(),a.ws.send(JSON.stringify({type:"connectbyroomid",data:e.target["connect-by-room-id"].value}))},a.state={lobbyList:[],privateRoomId:""},a.emitter=e.emitter,a}return Object(s.a)(r,[{key:"componentWillMount",value:function(){var e=this,t=new WebSocket("wss://games-ws.ionquen.ru:8082");t.onopen=function(){t.send(JSON.stringify({type:"list",data:{gameId:e.props.match.params.gameId,token:localStorage.getItem("token")}})),e.props.emitter.emit("displayGlobalChat",!0)},t.onmessage=function(t){var r=JSON.parse(t.data),a=r.data;switch(r.type){case"token":localStorage.setItem("token",a.token),localStorage.setItem("userId",a.userId),localStorage.setItem("userName","\u0413\u043e\u0441\u0442\u044c".concat(a.userId));break;case"list":e.setState({lobbyList:a});break;case"connectbyroomid":if(!1===a)return void alert("\u041a\u043e\u043c\u043d\u0430\u0442\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430");e.props.setPopupUntracked(Object(c.jsx)(b.a,{setPopupUntracked:e.props.setPopupUntracked,children:Object(c.jsx)(y,{ws:e.ws,data:a.roomInfo,disabled:!0})}));break;case"join":e.props.setPopupUntracked(null),e.setState({roomId:a})}},t.onerror=function(t){e.props.emitter.emit("global","\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u043b\u043e\u0431\u0431\u0438")},this.ws=t}},{key:"componentWillUnmount",value:function(){this.ws.close()}},{key:"componentWillReceiveProps",value:function(e){this.props.match.params.gameId!==e.match.params.gameId&&this.ws.send(JSON.stringify({type:"list",data:{gameId:""+e.match.params.gameId}}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:_.a.lobby,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(h.f,{name:"search-input",placeholder:"\u041f\u043e\u0438\u0441\u043a",autoComplete:!1}),Object(c.jsx)(h.f,{name:"connect-by-room-id",placeholder:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u043e id",autoComplete:!1,onSubmit:this.connectById}),Object(c.jsx)(h.a,{onClick:this.createNewRoom,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043d\u0430\u0442\u0443"})]}),Object(c.jsx)("div",{children:this.state.lobbyList.map((function(t){return Object(c.jsx)(N,{data:t,ws:e.ws,emitter:e.props.emitter,setPopupUntracked:e.props.setPopupUntracked})}))})]}),void 0!==this.state.roomId&&!1!==this.state.roomId?Object(c.jsx)(d.a,{to:"/g/".concat(this.props.match.params.gameId,"/").concat(this.state.roomId)}):null]})}}]),r}(u.a.Component),N=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).players=function(){return a.props.data.users.map((function(e){return Object(c.jsxs)("span",{children:[Object(c.jsxs)("span",{children:[e.userId,"#"]}),Object(c.jsx)("span",{children:e.userName})]})}))},a.tags=function(){var e=[];return e.push(v(a.props.data.gameId)),a.props.data.usePw&&e.push("password"),e.push("public"),a.props.data.autostart&&e.push("autostart"),e.map((function(e){return Object(c.jsx)("div",{children:e})}))},a.moreDetails=function(){return a.props.setPopupUntracked(Object(c.jsx)(b.a,{setPopupUntracked:a.props.setPopupUntracked,children:Object(c.jsx)(y,{ws:a.props.ws,data:a.props.data,disabled:!0})}))},a.leave=function(){a.props.ws.send(JSON.stringify({type:"leave",data:a.props.data.roomId})),a.setState({connected:!1}),a.props.emitter.emit("private","\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u043a\u043e\u043c\u043d\u0430\u0442\u044b #"+a.props.data.roomId)},a.state={connected:e.data.users.some((function(e){return e.userId===+localStorage.userId&&!1===e.leave}))},a}return Object(s.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:_.a.item,children:[this.state.connected?Object(c.jsxs)("div",{className:_.a.connected,children:[Object(c.jsx)("div",{children:"\u0412\u044b \u0443\u0436\u0435 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0438\u0441\u044c \u043a \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u043e\u043c\u043d\u0430\u0442\u0435!"}),Object(c.jsx)("div",{onClick:this.reconnect,children:Object(c.jsx)(p.b,{to:"/g/".concat(this.props.data.gameId,"/").concat(this.props.data.roomId),children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"})}),Object(c.jsx)("div",{onClick:this.leave,children:"\u041f\u043e\u043a\u0438\u043d\u0443\u0442\u044c"})]}):null,Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:["#",this.props.data.roomId]}),Object(c.jsx)("span",{children:this.props.data.name})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[this.props.data.users.length||0," / ",this.props.data.max," : "]}),Object(c.jsx)("span",{children:this.players()})]}),Object(c.jsx)("div",{children:this.tags()})]}),this.state.connected?null:Object(c.jsx)("div",{children:Object(c.jsxs)(h.a,{onClick:this.moreDetails,children:[Object(c.jsx)("span",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(c.jsx)(P,{})]})})]})]})}}]),r}(u.a.Component),z=E,M=r(17);var U=r(25);function H(e){return function(e){if(Array.isArray(e))return Object(M.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(U.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var B=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),L=l.createElement("path",{d:"M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z",fill:"#000"});function G(e,t){var r=e.title,a=e.titleId,n=F(e,["title","titleId"]);return l.createElement("svg",D({viewBox:"0 0 24 24",width:24,height:24,ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,B,L)}var W=l.forwardRef(G),J=(r.p,r(82)),R=r.n(J),A=Object(l.lazy)((function(){return r.e(6).then(r.bind(null,97))})),T=Object(l.lazy)((function(){return r.e(5).then(r.bind(null,95))})),V=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).componentWillMount=function(){var e=new WebSocket("wss://games-ws.ionquen.ru:8083");e.onopen=function(){s.emitterUnsubPrivateChat=s.props.emitter.sub("privateChatSend",(function(t){return e.send(JSON.stringify({type:"chat",data:t}))})),e.send(JSON.stringify({type:"connect",data:{roomId:s.props.match.params.roomId,token:localStorage.getItem("token")}})),s.props.emitter.emit("displayGlobalChat",!1),s.emitterUnsubAction=s.props.emitter.sub("action",(function(t){return e.send(JSON.stringify({type:"game",data:t}))}))},e.onmessage=function(e){var t=JSON.parse(e.data),r=t.data;switch(t.type){case"connect":s.setState({roomInfo:r.roomInfo}),void 0!==r.gameInfo&&s.setState({gameInfo:r.gameInfo}),s.props.emitter.emit("private","\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043a\u043e\u043c\u043d\u0430\u0442\u0435 #"+s.state.roomInfo.roomId),s.props.emitter.emit("privateChatHistory",r.chat);break;case"chat":s.props.emitter.emit("private",r);break;case"userJoin":s.setState((function(e){return{roomInfo:Object(a.a)(Object(a.a)({},e.roomInfo),{},{users:[].concat(H(e.roomInfo.users),[r])})}}));break;case"userLeave":var n=[];s.state.roomInfo.started?s.state.roomInfo.users.forEach((function(e){return e.userId!==r?n.push(e):n.push(Object(a.a)(Object(a.a)({},e),{},{leave:!0}))})):s.state.roomInfo.users.forEach((function(e){return e.userId!==r?n.push(e):null})),s.setState((function(e){return{roomInfo:Object(a.a)(Object(a.a)({},e.roomInfo),{},{users:n})}}));break;case"userDisconnected":var i=[];s.state.roomInfo.users.forEach((function(e){return e.userId!==r?i.push(e):i.push(Object(a.a)(Object(a.a)({},e),{},{connected:!1}))})),s.setState((function(e){return{roomInfo:Object(a.a)(Object(a.a)({},e.roomInfo),{},{users:i})}}));break;case"userConnected":var o=[];s.state.roomInfo.users.forEach((function(e){return e.userId!==r?o.push(e):o.push(Object(a.a)(Object(a.a)({},e),{},{connected:!0}))})),s.setState((function(e){return{roomInfo:Object(a.a)(Object(a.a)({},e.roomInfo),{},{users:o})}}));break;case"start":s.setState((function(e){return{roomInfo:Object(a.a)(Object(a.a)({},e.roomInfo),{},{started:!0}),gameInfo:r}}));break;case"finished":s.props.emitter.emit("private","\u041c\u0430\u0442\u0447 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d"),s.setState((function(e){return{roomInfo:Object(a.a)(Object(a.a)({},e.roomInfo),{},{started:!1})}}));break;case"game":s.props.emitter.emit("game",r)}},e.onerror=function(e){s.props.emitter.emit("global","\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u043a\u043e\u043c\u043d\u0430\u0442\u043e\u0439 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u043e")},e.onclose=function(e){s.emitterUnsubAction()},s.ws=e},s.startTheGame=function(e){e.preventDefault(),s.ws.send(JSON.stringify({type:"start"}))},s.state={roomInfo:void 0},s}return Object(s.a)(r,[{key:"componentWillUnmount",value:function(){try{this.emitterUnsubPrivateChat(),this.emitterUnsubAction(),this.ws.close()}catch(e){}this.props.emitter.emit("private","\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 \u043a\u043e\u043c\u043d\u0430\u0442\u044b")}},{key:"componentWillReceiveProps",value:function(e){this.props.match.params.roomId!==e.match.params.roomId&&this.ws.send(JSON.stringify({type:"connect",data:{roomId:e.match.params.roomId,token:localStorage.getItem("token")}}))}},{key:"getGameComponent",value:function(){if(this.state.roomInfo.started&&void 0!==this.state.gameInfo)switch(this.state.roomInfo.gameId){case"tictactoe":return Object(c.jsx)(A,{gameInfo:this.state.gameInfo,players:this.state.roomInfo.users,emitter:this.props.emitter});case"minesweeper":return Object(c.jsx)(T,{gameInfo:this.state.gameInfo,players:this.state.roomInfo.users,emitter:this.props.emitter})}}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:R.a.room,children:void 0===this.state.roomInfo?Object(c.jsx)(h.a,{onClick:function(){return e.setState({redirectToLobby:!0})},children:"\u0412 \u043b\u043e\u0431\u0431\u0438"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:R.a.match,children:Object(c.jsx)(l.Suspense,{children:this.getGameComponent()})}),this.state.roomInfo.started?Object(c.jsxs)(p.b,{to:"/g/".concat(this.props.match.params.gameId),className:R.a.btnToLobby,children:[Object(c.jsx)(W,{}),Object(c.jsx)("span",{children:"\u0412 \u043b\u043e\u0431\u0431\u0438"})]}):Object(c.jsxs)(O,Object(a.a)(Object(a.a)({},this.state.roomInfo),{},{disabled:!0,children:[this.state.roomInfo.creator!==+localStorage.userId?null:Object(c.jsx)(h.a,{onClick:this.startTheGame,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"}),Object(c.jsx)(h.a,{onClick:function(){return e.setState({redirectToLobby:!0})},children:"\u0412 \u043b\u043e\u0431\u0431\u0438"})]}))]})}),this.state.redirectToLobby?Object(c.jsx)(d.a,{to:"/g/".concat(this.props.match.params.gameId)}):null]})}}]),r}(u.a.Component),Y=r(83),q=r.n(Y),X=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={leftbarDisplay:!1},a}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("aside",{className:"".concat(q.a.leftbar,"  ").concat(this.state.leftbarDisplay?q.a.leftbarDisplay:""),children:Object(c.jsxs)("div",{className:q.a.games,children:[Object(c.jsx)("div",{children:Object(c.jsx)(p.b,{to:"/g/tictactoe",children:Object(c.jsx)("div",{children:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"})})}),Object(c.jsx)("div",{children:Object(c.jsx)(p.b,{to:"/g/minesweeper",children:Object(c.jsx)("div",{children:"\u0421\u0430\u043f\u0451\u0440"})})}),Object(c.jsx)("div",{children:Object(c.jsx)(p.b,{to:"/g/reversi",children:Object(c.jsx)("div",{children:"\u0420\u0435\u0432\u0435\u0440\u0441\u0438"})})})]})}),Object(c.jsx)("div",{className:q.a.leftbarStateBtn,onClick:function(){return e.setState((function(e){return{leftbarDisplay:!e.leftbarDisplay}}))},children:Object(c.jsx)(W,{})})]})}}]),r}(u.a.Component),K=r(22);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var $=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),ee=l.createElement("path",{d:"M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z",fill:"#000"});function te(e,t){var r=e.title,a=e.titleId,n=Q(e,["title","titleId"]);return l.createElement("svg",Z({viewBox:"0 0 24 24",width:24,height:24,ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,$,ee)}var re=l.forwardRef(te);r.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var se=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),ie=l.createElement("path",{d:"M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z",fill:"#000"});function oe(e,t){var r=e.title,a=e.titleId,n=ne(e,["title","titleId"]);return l.createElement("svg",ae({viewBox:"0 0 24 24",width:24,height:24,ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,se,ie)}var ce=l.forwardRef(oe);r.p;function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var de=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),pe=l.createElement("path",{d:"M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z",fill:"#000"});function be(e,t){var r=e.title,a=e.titleId,n=ue(e,["title","titleId"]);return l.createElement("svg",le({viewBox:"0 0 24 24",width:24,height:24,ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,de,pe)}var he=l.forwardRef(be);r.p;function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var fe=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),ve=l.createElement("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"});function Oe(e,t){var r=e.title,a=e.titleId,n=je(e,["title","titleId"]);return l.createElement("svg",me({viewBox:"0 0 24 24",width:24,height:24,ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,fe,ve)}var ge=l.forwardRef(Oe),ye=(r.p,r(84)),xe=r.n(ye),Ie=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).componentWillUnmount=function(){a.emitterUnsubGlobal(),a.emitterUnsubDisplayGlobalChat(),a.emitterUnsubPrivate(),a.emitterUnsubPrivateChatHistory(),a.ws.close()},a.send=function(e){e.preventDefault();var t=e.target.inputMessage.value;if(""!==t){var r={token:localStorage.getItem("token"),text:t,userName:localStorage.getItem("userName")},n={text:r.text,userName:r.userName,date:Date.now(),userId:localStorage.getItem("userId")};if(a.state.globalChat)a.ws.send(JSON.stringify({type:"chat",data:r})),a.globalMessage(n);else try{a.props.emitter.emit("privateChatSend",r),a.privateMessage(n)}catch(s){return console.log("\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043a\u043e\u043c\u043d\u0430\u0442\u0435")}a.setState({prints:""})}},a.globalMessage=function(e){return a.setState((function(t){return{msgsG:[].concat(H(t.msgsG),[e])}}))},a.privateMessage=function(e){return a.setState((function(t){return{msgsP:[].concat(H(t.msgsP),[e])}}))},a.displayChat=function(){return a.setState({hidden:!a.state.hidden})},a.state={msgsG:[],msgsP:[],globalChat:!0,hidden:!0,prints:""},a}return Object(s.a)(r,[{key:"componentWillMount",value:function(){var e=this,t=new WebSocket("wss://games-ws.ionquen.ru:8081");void 0===localStorage.userName&&localStorage.setItem("userName","\u0413\u043e\u0441\u0442\u044c228"),t.onopen=function(){},t.onmessage=function(t){var r=JSON.parse(t.data),a=r.data;switch(r.type){case"chat":e.globalMessage(a);break;case"history":e.setState((function(e){return{msgsG:e.msgsG.concat(a)}})),e.globalMessage("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0430\u0442!");break;default:return}},t.onerror=function(t){e.globalMessage("\u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u043e")},this.ws=t}},{key:"componentDidMount",value:function(){var e=this;this.emitterUnsubGlobal=this.props.emitter.sub("global",(function(t){return e.globalMessage(t)})),this.emitterUnsubPrivate=this.props.emitter.sub("private",(function(t){return e.privateMessage(t)})),this.emitterUnsubDisplayGlobalChat=this.props.emitter.sub("displayGlobalChat",(function(t){return e.setState({globalChat:t})})),this.emitterUnsubPrivateChatHistory=this.props.emitter.sub("privateChatHistory",(function(t){var r,a=[],n=Object(K.a)(t);try{var s=function(){var t=r.value;if(e.state.msgsP.some((function(e){return e.date===t.date})))return"break";a.push(t)};for(n.s();!(r=n.n()).done;){if("break"===s())break}}catch(i){n.e(i)}finally{n.f()}e.setState((function(e){return{msgsP:e.msgsP.concat(a)}})),e.privateMessage("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0430\u0442!")}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("aside",{className:"".concat(xe.a.chat," ").concat(this.state.hidden?"":xe.a.chatDisplay),children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("div",{onClick:function(){return e.setState({globalChat:!e.state.globalChat})},children:Object(c.jsx)(he,{className:this.state.globalChat?null:xe.a.global})})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:this.state.globalChat?xe.a.selected:null,children:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0447\u0430\u0442"}),Object(c.jsx)("div",{className:this.state.globalChat?null:xe.a.selected,children:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u0447\u0430\u0442"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{onClick:this.displayChat,children:Object(c.jsx)(ge,{})})})]}),Object(c.jsx)("div",{children:Object(c.jsx)(we,{msgs:this.state.globalChat?this.state.msgsG:this.state.msgsP})}),Object(c.jsx)("div",{children:Object(c.jsx)(h.f,{name:"inputMessage",value:this.state.prints,onChange:function(t){return e.setState({prints:t.value})},autoComplete:!1,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",onSubmit:this.send,children:Object(c.jsx)(re,{})})})]}),Object(c.jsx)("div",{className:xe.a.chatStateBtn,onClick:this.displayChat,children:Object(c.jsx)(ce,{})})]})}}]),r}(u.a.Component),we=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return this.props.msgs.map((function(e){return void 0!==e.userName?Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[new Date(e.date).toLocaleString("ru",{minute:"numeric",hour:"numeric"}),"  "]}),Object(c.jsx)("span",{children:e.userName}),Object(c.jsxs)("span",{children:[": ",e.text]})]}):Object(c.jsx)("div",{className:xe.a.system,children:Object(c.jsx)("span",{children:e})})}))}}]),r}(u.a.Component),Se=Ie;function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function Pe(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Ce=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),_e=l.createElement("path",{d:"M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z",fill:"#000"});function Ee(e,t){var r=e.title,a=e.titleId,n=Pe(e,["title","titleId"]);return l.createElement("svg",ke({viewBox:"0 0 24 24",width:24,height:24,ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,Ce,_e)}var Ne=l.forwardRef(Ee);r.p;function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function Me(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Ue=l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),He=l.createElement("path",{d:"M21 18v3h-2v-3h-2v-2h6v2h-2zM5 18v3H3v-3H1v-2h6v2H5zm6-12V3h2v3h2v2H9V6h2zm0 4h2v11h-2V10zm-8 4V3h2v11H3zm16 0V3h2v11h-2z",fill:"#000"});function De(e,t){var r=e.title,a=e.titleId,n=Me(e,["title","titleId"]);return l.createElement("svg",ze({viewBox:"0 0 24 24",width:24,height:24,ref:t,"aria-labelledby":a},n),r?l.createElement("title",{id:a},r):null,Ue,He)}var Fe=l.forwardRef(De),Be=(r.p,r(85)),Le=r.n(Be),Ge=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={displayMenu:!1},a}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("header",{className:"".concat(Le.a.topbar," ").concat(this.state.displayMenu?Le.a.displayMenu:null),children:[Object(c.jsxs)("nav",{children:[Object(c.jsx)("div",{onClick:function(){return e.setState((function(e){return{displayMenu:!e.displayMenu}}))},children:Object(c.jsx)(Ne,{})}),Object(c.jsxs)("div",{onClick:function(){return e.setState({displayMenu:!1})},children:[Object(c.jsx)(p.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(c.jsx)(p.b,{to:{search:"popup=rules"},children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"}),Object(c.jsx)(p.b,{to:{search:"popup=support"},children:"\u041f\u043e\u043c\u043e\u0449\u044c"})]})]}),Object(c.jsxs)(p.b,{to:{search:"popup=".concat(this.props.match.params.gameId)},children:[Object(c.jsx)("span",{children:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e: "}),Object(c.jsx)("span",{children:v(this.props.match.params.gameId)})]}),Object(c.jsxs)(p.b,{to:{search:"popup=settings"},children:[Object(c.jsxs)("div",{children:["#",localStorage.getItem("userId")]}),Object(c.jsx)("div",{children:localStorage.getItem("userName")}),Object(c.jsx)("div",{children:Object(c.jsx)(Fe,{})})]})]})}}]),r}(u.a.Component),We=r(86),Je=r.n(We),Re=r(47),Ae=r.n(Re),Te=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).setPopupUntracked=function(e){a.setState({popupElement:e})},a.state={popupElement:null},a}return Object(s.a)(r,[{key:"componentWillMount",value:function(){void 0===this.emitter&&(this.emitter=new Ve)}},{key:"componentDidMount",value:function(){this.backGradient=new Ae.a({element:"#grad-backg",direction:"left-right",states:{"default-state":{gradients:[["#EF8D5B","#EFB75B"],["#EFC55B","#EFDA5B"],["#E8ED5A","#EF815B"]],transitionSpeed:2e4}}})}},{key:"componentWillUnmount",value:function(){this.backGradient.destroy()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.b,{path:"/g/:gameId",component:function(e){return Object(c.jsx)(Ge,Object(a.a)({},e))}}),Object(c.jsxs)("div",{className:Je.a.page,children:[Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:"/g/:gameId/:roomId",render:function(t){return Object(c.jsx)(V,Object(a.a)(Object(a.a)({},t),{},{emitter:e.emitter}))}}),Object(c.jsx)(d.b,{path:"/g/:gameId",render:function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(X,Object(a.a)({},t)),Object(c.jsx)(z,Object(a.a)(Object(a.a)({},t),{},{emitter:e.emitter,setPopupUntracked:e.setPopupUntracked}))]})}})]}),Object(c.jsx)(Se,{emitter:this.emitter})]}),Object(c.jsx)("canvas",{id:"grad-backg"}),Object(c.jsx)(l.Suspense,{children:this.state.popupElement})]})}}]),r}(u.a.Component),Ve=function(){function e(){Object(n.a)(this,e),this.events=[]}return Object(s.a)(e,[{key:"sub",value:function(e,t){var r=this;return Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t),function(){r.events[e]=r.events[e].filter((function(e){return t!==e}))}}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];this.events[e].forEach((function(e){return e.call.apply(e,[null].concat(r))}))}}]),e}();t.default=Te}}]);
//# sourceMappingURL=4.bdbd7c20.chunk.js.map