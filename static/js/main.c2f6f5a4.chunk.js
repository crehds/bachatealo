(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e){e.exports={section:[{id:1,description:"Portada",imgPortada:"./images/paraPortada/logo.svg",menu:[{id:1,href:"#Portada",title:"Inicio"},{id:2,href:"#History",title:"\xbfQui\xe9nes somos?"},{id:3,href:"#Location",title:"Encu\xe9ntranos"},{id:4,href:"#Eventos",title:"Eventos"},{id:5,href:"#Fotos",title:"Fotos"},{id:6,href:"#Videos",title:"Videos"}]},{id:2,description:"Hero",imgPortada:[{foto:"./images/paraHero/7.webp",id:1},{foto:"./images/paraHero/3.webp",id:2},{foto:"./images/paraHero/9.webp",id:3},{foto:"./images/paraHero/5.webp",id:4},{foto:"./images/paraHero/1.webp",id:5},{foto:"./images/paraHero/6.webp",id:6},{foto:"./images/paraHero/2.webp",id:7},{foto:"./images/paraHero/8.webp",id:8},{foto:"./images/paraHero/4.webp",id:9}]},{id:3,description:"History",rotonda:"./images/paraHistory/rotonda.webp",alameda:"./images/paraHistory/alameda.webp"},{id:4,description:"Location",titleLocation:"Ubicaci\xf3n",googleMap:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.751916764291!2d-77.07334038561879!3d-11.991652494141654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce5bd20c7b79%3A0x8c32944c21a8f61e!2sPlaza+de+Armas+de+Los+Olivos%2C+Jr.C%C3%A9sar+Vallejo%2C+Los+Olivos+15301!5e0!3m2!1ses!2spe!4v1544216183284",direccion:"  Municipalidad de los olivos, Rotonda",referencia:"Cruce de Av. Carlos Izaguirre y Av. Ant\xfanez de Mayolo",Dias:"  Martes, Jueves, S\xe1bado",horario:"  8 pm a 12 pm",generos:" bachata, salsa",facebook:" bachatealo"},{id:5,description:"Eventos",titleEvent:"Chocolatada",imgEvento:"./images/paraEventos/eventos.webp",details:[{id:1,description:"left",linea1:"Fecha",linea2:"Lugar",linea3:"Hora de Inicio",linea4:"Donaciones al"},{id:2,description:"right",linea1:"21 de diciembre",linea2:"Municipalidad de los olivos",linea3:"7:00 pm",linea4:"993-382-261"}]},{id:6,description:"Fotos",titleFotos:"Momentos Destacados...",imgFotos:[{foto:"./images/paraHero/7.webp",id:1},{foto:"./images/paraHero/6.webp",id:2},{foto:"./images/paraHero/9.webp",id:3},{foto:"./images/paraHero/4.webp",id:4},{foto:"./images/paraHero/5.webp",id:5},{foto:"./images/paraHero/2.webp",id:6}]},{id:7,description:"Videos",titleVideo:"Recuerdos...",srcVideo:[{id:1,title:"video",src:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbachatealo%2Fvideos%2F303067066926144%2F&show_text=0&width=560"},{id:2,title:"video",src:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbachatealo%2Fvideos%2F225816234651228%2F&show_text=0&width=560"}]},{id:8,description:"Footer",titleFooter:"Programaci\xf3n y dise\xf1o",name:"Carlos Rodr\xedguez",numero:"960265942",correo:"carlos15erh@gmail.com",redesSociales:[{id:1,description:"icon1-facebook",href:"https://www.facebook.com/checa.rh"},{id:2,description:"icon1-twitter",href:"https://twitter.com/crehds1"},{id:3,description:"icon1-github",href:"https://github.com/crehds"},{id:4,description:"platzi",href:"https://platzi.com/@Crehds/"}]}]}},20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),o=a.n(i),c=(a(25),a(1)),s=a(2),l=a(5),d=a(3),m=a(6),p=a(4);var u=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.src,alt:""}),r.a.createElement("h1",{style:{color:"white"}},"Ha ocurrido un error"))};var h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={handleError:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({handleError:!0})}},{key:"render",value:function(){return this.state.handleError?(console.log(this.props.error),r.a.createElement(u,{src:this.props.error})):this.props.children}}]),t}(n.Component),f=Object(p.b)(function(e){return{error:e}})(h),v=a(8),E=a.n(v),b=a(10);var g=function(e){return r.a.createElement("nav",{className:"menu",ref:e.setRef},r.a.createElement("i",{className:"icon-menu burguer-button",id:"burguer-menu",onClick:e.handleAddClass}),r.a.createElement("ul",null,e.menu.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.href},e.title))})))};var w={addClass:function(e){return{type:"ADD_CLASS",payload:{classL:e}}}},O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleAddClass=function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.addClass(a.nav);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleIsActive=Object(b.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.matchMedia("screen and (min-width:769px)").matches){e.next=5;break}if(!a.nav.classList.contains("is-active")){e.next=5;break}return e.next=5,a.nav.classList.remove("is-active");case 5:case"end":return e.stop()}},e,this)})),a.setNavRef=function(e){return a.nav=e},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleIsActive)}},{key:"render",value:function(){return r.a.createElement("section",{className:"Portada",id:this.props.idPortada},r.a.createElement("header",{id:"header",className:"header container"},r.a.createElement("a",{href:"#Portada",className:"logotipo-link"},r.a.createElement("figure",{className:"logotipo"},r.a.createElement("img",{src:this.props.imgPortada,href:"#Portada",alt:"logotipo de Bachatealo"}))),r.a.createElement(g,{menu:this.props.menu,handleAddClass:this.handleAddClass,setRef:this.setNavRef})))}}]),t}(n.Component),j=Object(p.b)(function(e,t){return{idPortada:e.data.section[0].description,imgPortada:e.data.section[0].imgPortada,menu:e.data.section[0].menu}},w)(O);var y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Hero",id:this.props.idHero},r.a.createElement("div",{className:"hero-container"},this.props.fotosPortada.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:e.foto,alt:e.id}))})))}}]),t}(n.Component),N=Object(p.b)(function(e,t){return{idHero:e.data.section[1].description,fotosPortada:e.data.section[1].imgPortada}})(y);var k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"History",id:this.props.idHistory},r.a.createElement("div",{className:"history-container"},r.a.createElement("div",{className:"history-div"},r.a.createElement("div",{className:"history-title"},r.a.createElement("h1",null,"\xbfC\xf3mo empezamos?")),r.a.createElement("p",null,"A\xfan en desarrollo")),r.a.createElement("div",{className:"history-div"},r.a.createElement("img",{className:"history-img",src:this.props.alameda,alt:"imagen de practica"})),r.a.createElement("div",{className:"history-div"},r.a.createElement("div",{className:"history-title"},r.a.createElement("h1",null,"Actualidad")),r.a.createElement("p",null,"A\xfan en desarrollo")),r.a.createElement("div",{className:"history-div"},r.a.createElement("img",{className:"history-img",src:this.props.rotonda,alt:"imagen de practica"}))))}}]),t}(n.Component),F=Object(p.b)(function(e,t){return{idHistory:e.data.section[2].description,rotonda:e.data.section[2].rotonda,alameda:e.data.section[2].alameda}})(k);var C=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Location",id:this.props.idLocation},r.a.createElement("div",{className:"location-container"},r.a.createElement("div",{className:"location-container-map"},r.a.createElement("figure",{className:"location-map"},r.a.createElement("iframe",{className:"flexible-map",src:this.props.googleMap,title:this.props.titleLocation,width:"600",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:!0}))),r.a.createElement("div",{className:"location-description"},r.a.createElement("div",{className:"description-left"},r.a.createElement("p",null,this.props.titleLocation)),r.a.createElement("div",{className:"description-right"},r.a.createElement("p",null,":\xa0\xa0",this.props.direccion)),r.a.createElement("div",{className:"description-left"},r.a.createElement("p",null,"Referencia")),r.a.createElement("div",{className:"description-right"},r.a.createElement("p",null,":\xa0\xa0",this.props.referencia)),r.a.createElement("div",{className:"description-left"},r.a.createElement("p",null,"D\xedas")),r.a.createElement("div",{className:"description-right"},r.a.createElement("p",null,":\xa0\xa0",this.props.Dias)),r.a.createElement("div",{className:"description-left"},r.a.createElement("p",null,"Horario")),r.a.createElement("div",{className:"description-right"},r.a.createElement("p",null,":\xa0\xa0",this.props.horario)),r.a.createElement("div",{className:"description-left"},r.a.createElement("p",null,"G\xe9neros")),r.a.createElement("div",{className:"description-right"},r.a.createElement("p",null,":\xa0\xa0",this.props.generos)),r.a.createElement("div",{className:"description-left"},r.a.createElement("p",null,"Facebook")),r.a.createElement("div",{className:"description-right"},r.a.createElement("p",null,":\xa0\xa0",this.props.facebook)))))}}]),t}(n.Component),H=Object(p.b)(function(e,t){return{idLocation:e.data.section[3].description,googleMap:e.data.section[3].googleMap,titleLocation:e.data.section[3].titleLocation,direccion:e.data.section[3].direccion,referencia:e.data.section[3].referencia,Dias:e.data.section[3].Dias,horario:e.data.section[3].horario,generos:e.data.section[3].generos,facebook:e.data.section[3].facebook}})(C);var x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Event",id:this.props.idEvento},r.a.createElement("div",{className:"event-container"},r.a.createElement("div",{className:"event"},r.a.createElement("h1",null,this.props.titleEvent)),r.a.createElement("div",{className:"event"},this.props.details.map(function(e){return r.a.createElement("div",{className:"event-flexcontainer",key:e.id},r.a.createElement("p",null,e.linea1),r.a.createElement("p",null,e.linea2),r.a.createElement("p",null,e.linea3),r.a.createElement("p",null,e.linea4))})),r.a.createElement("div",{className:"event"},r.a.createElement("img",{className:"event-image",src:this.props.imgEvento,alt:"evento"}))))}}]),t}(n.Component),L=Object(p.b)(function(e,t){return{idEvento:e.data.section[4].description,titleEvent:e.data.section[4].titleEvent,imgEvento:e.data.section[4].imgEvento,details:e.data.section[4].details}})(x);var A=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Fotos",id:this.props.idFotos},r.a.createElement("div",{className:"fotos-title"},r.a.createElement("h1",null,this.props.titleFotos)),r.a.createElement("div",{className:"fotos container"},this.props.imgFotos.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("figure",null,r.a.createElement("img",{src:e.foto,alt:e.id})))})))}}]),t}(n.Component),P=Object(p.b)(function(e,t){return{idFotos:e.data.section[5].description,titleFotos:e.data.section[5].titleFotos,imgFotos:e.data.section[5].imgFotos}})(A);var D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Video",id:this.props.idVideo},r.a.createElement("div",{className:"video-title"},r.a.createElement("h1",null,this.props.titleVideo)),r.a.createElement("div",{className:"video container"},this.props.srcVideo.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("figure",null,r.a.createElement("div",null,r.a.createElement("iframe",{src:e.src,title:e.title,width:"560",height:"315",scrolling:"no",frameBorder:"0",allowtransparency:"true",allowFullScreen:!0},">"))))})))}}]),t}(n.Component),S=Object(p.b)(function(e,t){return{idVideo:e.data.section[6].description,titleVideo:e.data.section[6].titleVideo,srcVideo:e.data.section[6].srcVideo}})(D);var V=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Footer",id:this.props.idFooter},r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-details"},r.a.createElement("h1",null,this.props.titleFooter),r.a.createElement("p",null,this.props.name),r.a.createElement("p",null,this.props.numero),r.a.createElement("p",null,this.props.correo)),r.a.createElement("div",{className:"footer-icons"},this.props.redesSociales.map(function(e){return r.a.createElement("a",{key:e.id,href:e.href,className:e.description,target:"_blank",rel:"noopener noreferrer"})}))))}}]),t}(n.Component),_=Object(p.b)(function(e,t){return{idFooter:e.data.section[7].description,titleFooter:e.data.section[7].titleFooter,name:e.data.section[7].name,numero:e.data.section[7].numero,correo:e.data.section[7].correo,redesSociales:e.data.section[7].redesSociales}})(V),M=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(j,null),r.a.createElement(N,null),r.a.createElement(F,null),r.a.createElement(H,null),r.a.createElement(L,null),r.a.createElement(P,null),r.a.createElement(S,null),r.a.createElement(_,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(9),z=a(11),I=a(19),B=Object(z.a)({},I),J=function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.classList.contains("is-active")){e.next=5;break}return e.next=3,t.classList.remove("is-active");case 3:e.next=7;break;case 5:return e.next=7,t.classList.add("is-active");case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(E.a.mark(function e(t,a,n){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.matches){e.next=5;break}return e.next=3,a.addEventListener("click",J(n));case 3:e.next=7;break;case 5:return e.next=7,a.removeEventListener("click",J);case 7:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}();var X=Object(R.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(z.a)({},B),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CLASS":var a=document.querySelector("#burguer-menu"),n=window.matchMedia("screen and (max-width: 767px)");return T(n,a,t.payload.classL),Object(z.a)({},e);default:return Object(z.a)({},e)}}}),U=Object(R.c)(X,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(p.a,{store:U},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.c2f6f5a4.chunk.js.map