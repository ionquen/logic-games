(this["webpackJsonplogic-games"]=this["webpackJsonplogic-games"]||[]).push([[1],{14:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return O})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return x})),n.d(t,"d",(function(){return v})),n.d(t,"a",(function(){return y}));var c=n(7),a=n(3),r=n(22),s=n(9),i=n(10),u=n(12),l=n(11),o=n(0),b=n(1),j=n.n(b),d=n(6),p=n.n(d),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).change=function(e){c.props.onClick(e),c.setState({displayList:!1,selected:e.target.name})},c.state={displayList:!1,selected:c.props.selected},c}return Object(i.a)(n,[{key:"getValueByName",value:function(){var e,t=Object(r.a)(this.props.data);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(n.name===this.state.selected)return n.value}}catch(c){t.e(c)}finally{t.f()}}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{className:p.a.select,onClick:this.props.disabled?void 0:function(){return e.setState({displayList:!e.state.displayList})},children:[Object(o.jsx)("div",{children:this.getValueByName()}),this.state.displayList?Object(o.jsx)("div",{children:this.props.data.map((function(t){return Object(o.jsx)("button",Object(a.a)(Object(a.a)({},t),{},{type:"button",onClick:e.change,children:t.value}))}))}):null,Object(o.jsx)("input",{name:this.props.name,value:this.state.selected})]})}}]),n}(j.a.Component);function O(e){var t=e.label,n=Object(c.a)(e,["label"]);return Object(o.jsx)("div",{className:p.a.number,children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",Object(a.a)(Object(a.a)({},n),{},{type:"number"})),Object(o.jsx)("div",{children:t})]})})}function m(e){var t=e.label,n=Object(c.a)(e,["label"]);return Object(o.jsx)("div",{className:p.a.checkbox,children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",Object(a.a)(Object(a.a)({},n),{},{type:"checkbox"})),Object(o.jsx)("div",{children:t})]})})}function f(e){return Object(o.jsx)("div",{className:p.a.input,children:Object(o.jsx)("input",Object(a.a)(Object(a.a)({},e),{},{type:"text"}))})}function x(e){var t=e.onSubmit,n=e.children,r=Object(c.a)(e,["onSubmit","children"]);return Object(o.jsxs)("form",{className:p.a.input,onSubmit:t,children:[Object(o.jsx)("input",Object(a.a)(Object(a.a)({},r),{},{type:"text"})),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"submit"}),n]})]})}function v(e){var t=e.children,n=Object(c.a)(e,["children"]);return Object(o.jsx)("input",Object(a.a)(Object(a.a)({className:p.a.button,type:"submit"},n),{},{value:t}))}function y(e){var t=e.children,n=Object(c.a)(e,["children"]);return Object(o.jsx)("button",Object(a.a)(Object(a.a)({className:p.a.button},n),{},{children:t}))}},18:function(e,t,n){e.exports={popup:"popup_popup__2rUWX"}},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(0),a=(n(1),n(18)),r=n.n(a),s=n(13);function i(e){return Object(c.jsxs)(c.Fragment,{children:[void 0!==e.setPopupUntracked?Object(c.jsx)("div",{className:r.a.popup,onClick:function(){return e.setPopupUntracked(null)}}):Object(c.jsx)(s.b,{className:r.a.popup,to:{path:e.pathname}}),e.children]})}},26:function(e,t,n){e.exports={roomInfo:"roomInfo_roomInfo__1mFgj",disconnected:"roomInfo_disconnected__24G-1"}},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(27),i=n.n(s),u=n(13),l=n(2),o=(n(34),n(23)),b=n(9),j=n(10),d=n(12),p=n(11),h=n(14),O=n(26),m=n.n(O),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).componentShouldUpdate=function(){return c.displayButton=!0},c.saveChanges=function(e){e.preventDefault(),e.target.userName.value.length<20&&localStorage.setItem("userName",e.target.userName.value)},c.state={displayButton:!1,userName:localStorage.getItem("userName")},c}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:m.a.roomInfo,children:[Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),Object(c.jsxs)("form",{onSubmit:this.saveChanges,children:[Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u041e\u0431\u0449\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c"}),Object(c.jsx)(h.c,{name:"userName",value:this.state.userName,onChange:function(t){return e.setState({userName:t.value,displayButton:!0})}})]})]})}),Object(c.jsx)("div",{children:this.state.displayButton?Object(c.jsx)(h.d,{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"}):null})]})]})}}]),n}(r.a.Component),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,91))})),v=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,90))})),y=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,85))})),_=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,86))})),g=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,87))})),k=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,88))})),N=Object(a.lazy)((function(){return n.e(12).then(n.bind(null,89))})),S=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,93))}));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u.a,{basename:"/",children:Object(c.jsxs)(a.Suspense,{fallback:!0,children:[Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/",component:x}),Object(c.jsx)(l.b,{path:/^\/.+/,component:v})]}),Object(c.jsx)(l.b,{path:"/",render:function(e){var t,n;switch(e.location.search.slice(1).split("&").map((function(e){return e.split("=")})).forEach((function(e){return"popup"===e[0]&&(t=e[1])})),t){case"settings":n=Object(c.jsx)(f,{});break;case"tictactoe":n=Object(c.jsx)(y,{});break;case"seabattle":n=Object(c.jsx)(_,{});break;case"sapper":n=Object(c.jsx)(g,{});break;case"reversi":n=Object(c.jsx)(k,{});break;case"support":n=Object(c.jsx)(N,{});break;case"rules":n=Object(c.jsx)(S,{})}if(t)return Object(c.jsx)(o.a,{pathname:e.location.pathname,children:n})}})]})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={input:"formElements_input__383-J",select:"formElements_select__3_H9M",number:"formElements_number__1eHwP",checkbox:"formElements_checkbox__1Ucvc",button:"formElements_button__2SfXx"}}},[[40,2,3]]]);
//# sourceMappingURL=main.c0e1dec2.chunk.js.map