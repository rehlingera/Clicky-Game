(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"images/cat1.png",clicked:!1},{id:2,image:"images/cat2.png",clicked:!1},{id:3,image:"images/cat3.png",clicked:!1},{id:4,image:"images/cat4.png",clicked:!1},{id:5,image:"images/cat5.png",clicked:!1},{id:6,image:"images/cat6.png",clicked:!1},{id:7,image:"images/cat7.png",clicked:!1},{id:8,image:"images/cat8.png",clicked:!1},{id:9,image:"images/cat9.png",clicked:!1},{id:10,image:"images/cat10.png",clicked:!1},{id:11,image:"images/cat11.png",clicked:!1},{id:12,image:"images/cat12.png",clicked:!1}]},function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(4),r=n(6),i=n(5),o=n(7),l=n(0),s=n.n(l),d=(n(18),n(10)),u=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.default,null))}}]),t}(l.Component);t.default=u},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=(n(17),n(2)),l=n(15);i.a.render(c.a.createElement(o.default,null),document.getElementById("root")),l.unregister()},function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(4),r=n(6),i=n(5),o=n(7),l=n(0),s=n.n(l),d=n(11),u=n(12),m=n(14),p=n(13),g=n(1),f=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e};f(g);var v={divStyle:{display:"inline-block",width:"25%"}},h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={currentScore:0,topScore:0,clicked:!1,output:"Console the scared cats! But be careful not to pet the same cat twice! Stressed out cats bite people!"},n.handleClickChange=function(e){console.log(e);var t=g.filter(function(t){return t.id===e});t[0].clicked?(n.setState({currentScore:0}),console.log("loss"),n.handleIncorrect(),n.handleReset()):(t[0].clicked=!0,n.setState({currentScore:n.currentScore+1}),console.log("good"),n.handleIncrease(),n.handleCorrect(),f(g))},n.handleIncrease=function(){n.state.topScore===n.state.currentScore?(n.setState({currentScore:n.state.currentScore+1}),n.setState({topScore:n.state.topScore+1})):n.setState({currentScore:n.state.currentScore+1})},n.handleReset=function(){for(var e=0;e<g.length;e++)g[e].clicked=!1},n.handleCorrect=function(){n.setState({output:"Good kitty!"})},n.handleIncorrect=function(){n.setState({output:"Oh no! Kitty bit you!"})},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-info"},s.a.createElement("a",{className:"navbar-brand",href:"#"},"Cat Consoler"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{className:"nav-link",href:"https://github.com/rehlingera/Clicky-Game"},"See the Code"))),s.a.createElement("span",{className:"navbar-text"},s.a.createElement(u.default,null,this.state.currentScore)," | ",s.a.createElement(m.default,null,this.state.topScore)))),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(p.default,null,this.state.output))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-2"}),s.a.createElement("div",{className:"col-8"},g.map(function(t){return s.a.createElement("div",{style:v.divStyle,key:t.id},s.a.createElement(d.default,{src:t.image,alt:t.id,id:t.id,handleClickChange:e.handleClickChange,handleIncrease:e.handleIncrease,handleReset:e.handleReset,clicked:t.clicked}))})),s.a.createElement("div",{className:"col=2"}))))}}]),t}(l.Component);t.default=h},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r={imgStyle:{width:"100%"}};t.default=function(e,t){return c.a.createElement("img",{src:n(28)("./"+e.src),style:r.imgStyle,className:"clickImage",alt:e.alt,id:e.id,clicked:e.clicked,onClick:function(){return e.handleClickChange(e.id)}})}},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r={textStyle:{textAlign:"right"},divStyle:{display:"inline-block",padding:"0px 10px 0px 10px",margin:"8px 0px 8px 0px"}};t.default=function(e){return c.a.createElement("div",{className:"currentScoreDiv",style:r.divStyle},c.a.createElement("span",{style:r.textStyle,className:"currentScore"},"Current Score: ",e.children))}},function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(4),r=n(6),i=n(5),o=n(7),l=n(0),s=n.n(l),d={textStyle:{textAlign:"center",height:"100px"}},u=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={output:""},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("h2",{style:d.textStyle},this.props.children)}}]),t}(l.Component);t.default=u},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r={textStyle:{textAlign:"right"},divStyle:{display:"inline-block",padding:"0px 10px 0px 10px",margin:"8px 0px 8px 0px"}};t.default=function(e){return c.a.createElement("div",{className:"topScoreDiv",style:r.divStyle},c.a.createElement("span",{style:r.textStyle,className:"topScore"},"Top Score: ",e.children))}},function(e,t,n){"use strict";n.r(t),n.d(t,"register",function(){return c}),n.d(t,"unregister",function(){return i});var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e){if("serviceWorker"in navigator){if(new URL("/Clicky-Game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Clicky-Game","/service-worker.js");a?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):r(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):r(t,e)})}}function r(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function i(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=n(2);it("renders without crashing",function(){var e=document.createElement("div");i.a.render(c.a.createElement(o.default,null),e),i.a.unmountComponentAtNode(e)})},function(e,t,n){e.exports=n(9)},,,,,,,,function(e,t,n){var a={"./":9,"./App":2,"./App.css":18,"./App.js":2,"./App.test":19,"./App.test.js":19,"./cats":1,"./cats.json":1,"./components/ClickItem":11,"./components/ClickItem.js":11,"./components/CurrentScore":12,"./components/CurrentScore.js":12,"./components/Feedback":13,"./components/Feedback.js":13,"./components/Game":10,"./components/Game.js":10,"./components/TopScore":14,"./components/TopScore.js":14,"./index":9,"./index.css":17,"./index.js":9,"./logo.svg":29,"./serviceWorker":15,"./serviceWorker.js":15};function c(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=28},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}],[[20,2,1]]]);
//# sourceMappingURL=main.4f3cb4ab.chunk.js.map