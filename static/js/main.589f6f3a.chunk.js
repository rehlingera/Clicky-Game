(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"url(%PUBLIC_URL%/images/cat1.png",clicked:!1},{id:2,image:"url(%PUBLIC_URL%/images/cat2.png",clicked:!1},{id:3,image:"url(%PUBLIC_URL%/images/cat3.png",clicked:!1},{id:4,image:"url(%PUBLIC_URL%/images/cat4.png",clicked:!1},{id:5,image:"url(%PUBLIC_URL%/images/cat5.png",clicked:!1},{id:6,image:"url(%PUBLIC_URL%/images/cat6.png",clicked:!1},{id:7,image:"url(%PUBLIC_URL%/images/cat7.png",clicked:!1},{id:8,image:"url(%PUBLIC_URL%/images/cat8.png",clicked:!1},{id:9,image:"url(%PUBLIC_URL%/images/cat9.png",clicked:!1},{id:10,image:"url(%PUBLIC_URL%/images/cat10.png",clicked:!1},{id:11,image:"url(%PUBLIC_URL%/images/cat11.png",clicked:!1},{id:12,image:"url(%PUBLIC_URL%/images/cat12.png",clicked:!1}]},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),i=(a(15),a(2)),o=a(3),s=a(5),d=a(4),u=a(6);a(17);var m=function(e,t){return c.a.createElement("div",{style:{backgroundImage:e.src,width:"100%"},className:"clickImage",alt:e.alt,id:e.id,clicked:e.clicked,onClick:function(){return e.handleClickChange(e.id)}})},g={textStyle:{textAlign:"right"},divStyle:{display:"inline-block",padding:"0px 10px 0px 10px",margin:"8px 0px 8px 0px"}};var p=function(e){return c.a.createElement("div",{className:"currentScoreDiv",style:g.divStyle},c.a.createElement("span",{style:g.textStyle,className:"currentScore"},"Current Score: ",e.children))},h={textStyle:{textAlign:"right"},divStyle:{display:"inline-block",padding:"0px 10px 0px 10px",margin:"8px 0px 8px 0px"}};var v=function(e){return c.a.createElement("div",{className:"topScoreDiv",style:h.divStyle},c.a.createElement("span",{style:h.textStyle,className:"topScore"},"Top Score: ",e.children))},b={textStyle:{textAlign:"center",height:"100px"}},S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={output:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("h2",{style:b.textStyle},this.props.children)}}]),t}(n.Component),k=a(1),f=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e};f(k);var x={divStyle:{display:"inline-block",width:"25%"}},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={currentScore:0,topScore:0,clicked:!1,output:"Console the scared cats! But be careful not to pet the same cat twice! Stressed out cats bite people!"},a.handleClickChange=function(e){console.log(e);var t=k.filter(function(t){return t.id===e});t[0].clicked?(a.setState({currentScore:0}),console.log("loss"),a.handleIncorrect(),a.handleReset()):(t[0].clicked=!0,a.setState({currentScore:a.currentScore+1}),console.log("good"),a.handleIncrease(),a.handleCorrect(),f(k))},a.handleIncrease=function(){a.state.topScore===a.state.currentScore?(a.setState({currentScore:a.state.currentScore+1}),a.setState({topScore:a.state.topScore+1})):a.setState({currentScore:a.state.currentScore+1})},a.handleReset=function(){for(var e=0;e<k.length;e++)k[e].clicked=!1},a.handleCorrect=function(){a.setState({output:"Good kitty!"})},a.handleIncorrect=function(){a.setState({output:"Oh no! Kitty bit you!"})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-info"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"Cat Consoler"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("a",{className:"nav-link",href:"https://github.com/rehlingera/Clicky-Game"},"See the Code"))),c.a.createElement("span",{className:"navbar-text"},c.a.createElement(p,null,this.state.currentScore)," | ",c.a.createElement(v,null,this.state.topScore)))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(S,null,this.state.output))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"}),c.a.createElement("div",{className:"col-8"},k.map(function(t){return c.a.createElement("div",{style:x.divStyle,key:t.id},c.a.createElement(m,{src:t.image,alt:t.id,id:t.id,handleClickChange:e.handleClickChange,handleIncrease:e.handleIncrease,handleReset:e.handleReset,clicked:t.clicked}))})),c.a.createElement("div",{className:"col=2"}))))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.589f6f3a.chunk.js.map