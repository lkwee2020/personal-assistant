(this["webpackJsonppersonal-assistant"]=this["webpackJsonppersonal-assistant"]||[]).push([[0],{28:function(n,e,t){n.exports=t(40)},40:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(20),c=t.n(o),u=t(12),i=t(1),l=t(2),f=t(21);t.n(f).a.load({google:{families:["Open Sans Condensed:300,700","sans-serif"]}});var d={colors:{background:"#ffffff",second:"#e1e5f2",third:"#bfdbf7",accent:"#1f7a8c",darkAccent:"#022b3a"},font:{head:{family:"Open Sans Condensed",weight:700},body:{family:"Open Sans Condensed",weight:400}}},s=t(3);function m(){var n=Object(s.a)(["\n    display: inline;\n"]);return m=function(){return n},n}function h(){var n=Object(s.a)(["\n    float: left;\n    width: 100px;\n    color: ",";\n    text-decoration: none;\n    font-weight: 450;\n\n    &:hover {\n        color: ",";\n    }\n"]);return h=function(){return n},n}function p(){var n=Object(s.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width:100%;\n    padding: 10px;\n    font-family: ",";\n    color: ",";\n    background-color: ",";\n"]);return p=function(){return n},n}var b=l.b.div(p(),(function(n){return n.theme.font.body.family}),(function(n){return n.theme.colors.third}),(function(n){return n.theme.colors.accent})),v=Object(l.b)(u.b)(h(),(function(n){return n.theme.colors.third}),(function(n){return n.theme.colors.darkAccent})),y=l.b.li(m()),g=function(){return a.a.createElement(b,null,a.a.createElement("ul",null,a.a.createElement(y,null,a.a.createElement(v,{to:"/"},"Home")),a.a.createElement(y,null,a.a.createElement(v,{to:"/Tasks"},"Tasks"))))},x=t(18),E=t.n(x),j=t(25),k=t(8);function w(){var n=Object(s.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 400px;\n    margin: auto;\n    padding: 10px;\n    font-family: ",";\n    color: ",";\n    background-color: ",";\n"]);return w=function(){return n},n}var O=l.b.h3(w(),(function(n){return n.theme.font.body.family}),(function(n){return n.theme.colors.darkAccent}),(function(n){return n.theme.colors.third})),T=function(){var n=Object(r.useState)(""),e=Object(k.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){(function(){var n=Object(j.a)(E.a.mark((function n(){var e,t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,o(t.weather[0].description);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),a.a.createElement(O,null,"Today's weather: ",t)};function C(){var n=Object(s.a)(["    \n    display: table;    \n    margin:20px auto;\n    text-align: center;    \n    color:black;\n    background-color: ",";\n    font-family: ",";\n    color: ",";\n    padding: 5px 30px;\n    "]);return C=function(){return n},n}var S=l.b.h2(C(),(function(n){return n.theme.colors.third}),(function(n){return n.theme.font.body.family}),(function(n){return n.theme.colors.darkAccent}));function A(n){var e=(new Date).getDate(),t=n.phase[e].dayWeek,r="".concat("<div><b>").concat(n.nameDay[t],"</b>")+"<div>".concat(e," <b>").concat(n.monthName,"</b> ").concat(n.year,"</div>")+"<div shadow>".concat(n.phase[e].svg,"</div>")+"<div>".concat(n.phase[e].phaseName," ")+"".concat(n.phase[e].isPhaseLimit?"":"".concat(Math.round(n.phase[e].lighting),"%"),"</div>")+"</div>";document.getElementById("ex1").innerHTML=r}var D={lang:"en",month:(new Date).getMonth()+1,year:(new Date).getFullYear(),size:150,lightColor:"rgb(255,255,210)",shadeColor:d.colors.darkAccent,texturize:!1},L=function(){return Object(r.useMemo)((function(){return function(n,e){var t=[];for(var r in n)t.push("".concat(r,"=").concat(encodeURIComponent(n[r])));t.push("LDZ=".concat(new Date(n.year,n.month-1,1)/1e3));var o=new XMLHttpRequest,c="https://www.icalendar37.net/lunar/api/?".concat(t.join("&"));return o.onreadystatechange=function(){4==o.readyState&&200==o.status&&e(JSON.parse(o.responseText))},o.open("GET",c,!0),o.send(),a.a.createElement(S,{id:"ex1"})}(D,A)}))};function M(){var n=Object(s.a)(["\n    height:100%\n"]);return M=function(){return n},n}function H(){var n=Object(s.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    position: absolute;\n    padding: 10px;\n    width: 100%;\n    font-family: ",";\n    color: ",";\n    background-color: ",";\n"]);return H=function(){return n},n}var I=l.b.div(H(),(function(n){return n.theme.font.body.family}),(function(n){return n.theme.colors.darkAccent}),(function(n){return n.theme.colors.third})),J=(l.b.div(M()),function(){return a.a.createElement(I,null,a.a.createElement("h1",null,"Welcome!"),a.a.createElement(L,null),a.a.createElement(T,null))});function N(){var n=Object(s.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 400px;\n    text-align: center;\n    margin: auto;\n    padding: 10px;\n    font-family: ",";\n    color: ",";\n    background-color: ",";\n"]);return N=function(){return n},n}var q=l.b.div(N(),(function(n){return n.theme.font.body.family}),(function(n){return n.theme.colors.darkAccent}),(function(n){return n.theme.colors.third}));function z(){var n=Object(s.a)(["\n  background: ",";\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  font-family: ",";\n  font-weight: bold;\n  &:hover {\n    color: ",";\n  }\n"]);return z=function(){return n},n}var B=l.b.button(z(),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.font.body.family}),(function(n){return n.theme.colors.third})),F=function(n){var e=n.buttonText,t=n.action;return a.a.createElement(B,{onClick:t},e)};function R(){var n=Object(s.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 400px;\n    margin: auto;\n    padding: 0.02%;\n    font-family: ",";\n    color: ",";\n    background-color: ",";\n"]);return R=function(){return n},n}var W=l.b.div(R(),(function(n){return n.theme.font.body.family}),(function(n){return n.theme.colors.darkAccent}),(function(n){return n.theme.colors.third})),G=function(n){var e=n.detail;return a.a.createElement(W,null,"Task: ",e)};function P(){var n=Object(s.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 400px;\n    margin: auto;\n    padding: 10px;\n    font-family: ",";\n    color: ",";\n    background-color: ",";\n"]);return P=function(){return n},n}var U=l.b.div(P(),(function(n){return n.theme.font.body.family}),(function(n){return n.theme.colors.darkAccent}),(function(n){return n.theme.colors.third})),X=function(n){var e=n.allTask,t=Object(r.useState)(""),o=Object(k.a)(t,2),c=o[0],u=o[1],i=e.filter((function(n){return n.includes(c)}));return a.a.createElement(U,null,a.a.createElement("input",{maxLength:"100",placeholder:"Search your tasks",value:c,onChange:function(n){return u(n.target.value)}}),i.map((function(n){return a.a.createElement(G,{detail:n})})))},Y=function(n){var e=n.label,t=Object(r.useState)(""),o=Object(k.a)(t,2),c=o[0],u=o[1],i=Object(r.useState)([]),l=Object(k.a)(i,2),f=l[0],d=l[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,null,a.a.createElement("h1",null,e),a.a.createElement("input",{maxLength:"100",placeholder:"learn javascript...",value:c,onChange:function(n){return u(n.target.value)}}),a.a.createElement(F,{buttonText:"Enter",action:function(){d(f.concat([c])),u("")}}),f.map((function(n){return a.a.createElement(G,{detail:n})})),a.a.createElement(F,{buttonText:"Complete Task!",action:function(){d(f.slice(1,f.length)),f.map((function(n){return a.a.createElement(G,{detail:n})}))}})),a.a.createElement(q,null,a.a.createElement(X,{allTask:f})))},Z=function(){return a.a.createElement(Y,{label:"Todo:"})},K=function(){return a.a.createElement(u.a,null,a.a.createElement(l.a,{theme:d},a.a.createElement(g,null),a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/Tasks",component:Z}),a.a.createElement(i.a,{path:"/",component:J}))))};c.a.render(a.a.createElement(K,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2e1d71eb.chunk.js.map