(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/logo.2d57c362.svg"},function(e,t,a){e.exports=a.p+"static/media/1.beb651e2.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.270eaa97.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.01a233d2.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.95e7e13b.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.52b40d7f.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.a8cd8f0d.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.7efbf464.jpg"},function(e,t,a){e.exports=a.p+"static/media/8.9dad0d00.jpg"},function(e,t,a){e.exports=a.p+"static/media/9.5509f38f.jpg"},function(e,t,a){e.exports=a.p+"static/media/practica.7f839fb5.jpg"},,function(e,t,a){e.exports=a(40)},,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(28),i=a(0),r=a.n(i),c=a(14),o=a.n(c),l=(a(13),a(2)),s=a(3),m=a(6),p=a(4),u=a(7),g=a(5);var d=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"Portada",className:"Portada"},r.a.createElement("header",{id:"header",className:"header contenedor"},r.a.createElement("figure",{className:"logotipo"},r.a.createElement("img",{src:this.props.logo,alt:"logotipo de Bachatealo"})),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",null,this.props.menu.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.href},e.title))})))))}}]),t}(i.Component),f=Object(g.b)(function(e){return{logo:e.logoPortada,menu:e.menu}})(d);var h=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("hola"),r.a.createElement("section",{id:"hero",className:"Hero"},r.a.createElement("div",{className:"hero-container"},r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen1,alt:"1"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen2,alt:"2"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen3,alt:"3"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen4,alt:"4"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen5,alt:"5"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen6,alt:"6"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen7,alt:"7"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen8,alt:"8"})),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.imagen9,alt:"9"}))))}}]),t}(i.Component),E=Object(g.b)(function(e){return{imagen1:e.imagen1,imagen2:e.imagen2,imagen3:e.imagen3,imagen4:e.imagen4,imagen5:e.imagen5,imagen6:e.imagen6,imagen7:e.imagen7,imagen8:e.imagen8,imagen9:e.imagen9,practica:e.practica}})(h);var b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"History"},r.a.createElement("div",{className:"history-container"},r.a.createElement("p",null,"Esto es un parrafo"),r.a.createElement("div",null,r.a.createElement("img",{className:"history-img",src:this.props.src,alt:"imagen de practica"}))))}}]),t}(i.Component),j=Object(g.b)(function(e){return{src:e.practica}})(b),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Bachatealo"},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro",rel:"stylesheet"}),r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement(j,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(17),y=a.n(O),w=a(8),x=a(18),k=a.n(x),N=a(19),P=a.n(N),B=a(20),C=a.n(B),S=a(21),F=a.n(S),H=a(22),J=a.n(H),W=a(23),A=a.n(W),D=a(24),I=a.n(D),R=a(25),T=a.n(R),U=a(26),V=a.n(U),$=a(27),_=a.n($),q={menu:[{href:"#fotos",title:"Fotos",id:"1"},{href:"#videos",title:"Videos",id:"2"},{href:"#eventos",title:"Eventos",id:"3"}],logoPortada:y.a,imagen1:I.a,imagen2:C.a,imagen3:V.a,imagen4:J.a,imagen5:k.a,imagen6:A.a,imagen7:P.a,imagen8:T.a,imagen9:F.a,practica:_.a};var z=Object(w.b)(function(e,t){switch(t.type){case"UPDATE_PROPS":var a=t.payload.props;return Object(n.a)({},e,a);default:return e}},q);o.a.render(r.a.createElement(g.a,{store:z},r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[29,2,1]]]);
//# sourceMappingURL=main.2e639158.chunk.js.map