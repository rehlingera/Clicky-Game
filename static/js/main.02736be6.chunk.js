(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"cat1.png",clicked:!1},{id:2,image:"cat2.png",clicked:!1},{id:3,image:"cat3.png",clicked:!1},{id:4,image:"cat4.png",clicked:!1},{id:5,image:"cat5.png",clicked:!1},{id:6,image:"cat6.png",clicked:!1},{id:7,image:"cat7.png",clicked:!1},{id:8,image:"cat8.png",clicked:!1},{id:9,image:"cat9.png",clicked:!1},{id:10,image:"cat10.png",clicked:!1},{id:11,image:"cat11.png",clicked:!1},{id:12,image:"cat12.png",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){var n={"./Cat1.png":20,"./Cat10.png":21,"./Cat11.png":22,"./Cat12.png":23,"./Cat2.png":24,"./Cat3.png":25,"./Cat4.png":26,"./Cat5.png":27,"./Cat6.png":28,"./Cat7.png":29,"./Cat8.png":30,"./Cat9.png":31,"./cool-background.png":32};function c(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=19},function(e,t,a){e.exports=a.p+"static/media/Cat1.20c061c6.png"},function(e,t,a){e.exports=a.p+"static/media/Cat10.9cad9fda.png"},function(e,t,a){e.exports=a.p+"static/media/Cat11.1031d0d5.png"},function(e,t,a){e.exports=a.p+"static/media/Cat12.2d509a2f.png"},function(e,t,a){e.exports=a.p+"static/media/Cat2.8b597b9d.png"},function(e,t,a){e.exports=a.p+"static/media/Cat3.cd3bc743.png"},function(e,t,a){e.exports=a.p+"static/media/Cat4.1a2eac55.png"},function(e,t,a){e.exports=a.p+"static/media/Cat5.90ab26f6.png"},function(e,t,a){e.exports=a.p+"static/media/Cat6.1df7ba4d.png"},function(e,t,a){e.exports=a.p+"static/media/Cat7.8e4a1a25.png"},function(e,t,a){e.exports=a.p+"static/media/Cat8.2b906131.png"},function(e,t,a){e.exports=a.p+"static/media/Cat9.1ec996cc.png"},function(e,t,a){e.exports=a.p+"static/media/cool-background.f88e1317.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),l=(a(15),a(2)),o=a(3),s=a(5),d=a(4),p=a(6),u=(a(17),{imgStyle:{width:"100%"}});var m=function(e,t){return c.a.createElement("img",{src:a(19)("./"+e.src),style:u.imgStyle,className:"clickImage",alt:e.alt,id:e.id,clicked:e.clicked,onClick:function(){return e.handleClickChange(e.id)}})},g={textStyle:{textAlign:"right"},divStyle:{display:"inline-block",padding:"0px 10px 0px 10px",margin:"8px 0px 8px 0px"}};var h=function(e){return c.a.createElement("div",{className:"currentScoreDiv",style:g.divStyle},c.a.createElement("span",{style:g.textStyle,className:"currentScore"},"Current Score: ",e.children))},v={textStyle:{textAlign:"right"},divStyle:{display:"inline-block",padding:"0px 10px 0px 10px",margin:"8px 0px 8px 0px"}};var f=function(e){return c.a.createElement("div",{className:"topScoreDiv",style:v.divStyle},c.a.createElement("span",{style:v.textStyle,className:"topScore"},"Top Score: ",e.children))},b={textStyle:{textAlign:"center",height:"100px"}},x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={output:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("h2",{style:b.textStyle},this.props.children)}}]),t}(n.Component),C=a(1),k=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e};k(C);var S={divStyle:{display:"inline-block",width:"25%"}},y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={currentScore:0,topScore:0,clicked:!1,output:"Console the scared cats! But be careful not to pet the same cat twice! Stressed out cats bite people!"},a.handleClickChange=function(e){console.log(e);var t=C.filter(function(t){return t.id===e});t[0].clicked?(a.setState({currentScore:0}),console.log("loss"),a.handleIncorrect(),a.handleReset()):(t[0].clicked=!0,a.setState({currentScore:a.currentScore+1}),console.log("good"),a.handleIncrease(),a.handleCorrect(),k(C))},a.handleIncrease=function(){a.state.topScore===a.state.currentScore?(a.setState({currentScore:a.state.currentScore+1}),a.setState({topScore:a.state.topScore+1})):a.setState({currentScore:a.state.currentScore+1})},a.handleReset=function(){for(var e=0;e<C.length;e++)C[e].clicked=!1},a.handleCorrect=function(){a.setState({output:"Good kitty!"})},a.handleIncorrect=function(){a.setState({output:"Oh no! Kitty bit you!"})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-info"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"Cat Consoler"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("a",{className:"nav-link",href:"https://github.com/rehlingera/Clicky-Game"},"See the Code"))),c.a.createElement("span",{className:"navbar-text"},c.a.createElement(h,null,this.state.currentScore)," | ",c.a.createElement(f,null,this.state.topScore)))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(x,null,this.state.output))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"}),c.a.createElement("div",{className:"col-8"},C.map(function(t){return c.a.createElement("div",{style:S.divStyle,key:t.id},c.a.createElement(m,{src:t.image,alt:t.id,id:t.id,handleClickChange:e.handleClickChange,handleIncrease:e.handleIncrease,handleReset:e.handleReset,clicked:t.clicked}))})),c.a.createElement("div",{className:"col=2"}))))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.02736be6.chunk.js.map