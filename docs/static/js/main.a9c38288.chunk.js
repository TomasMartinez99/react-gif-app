(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>1&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{className:"buscador",type:"text",value:r,placeholder:"Busc\xe1 tu Gif",onChange:function(e){o(e.target.value)}})})},d=n(10),j=n(6),l=n.n(j),b=n(8),p=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=4&api_key=92Z04aDAwsPKOPtwpo2Qo1LJ62OFvUS7"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var f=function(e){var t=e.id,n=e.title,a=e.url;return console.log(t,n,a),Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInDown",children:[Object(u.jsx)("img",{src:a,alt:n}),Object(u.jsx)("p",{children:n})]})},O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return console.log(p),Object(a.useEffect)((function(){p(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),1e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"categoria",children:[" ",t," "]}),r&&Object(u.jsx)("p",{children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(f,Object(d.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["Boca Juniors"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"titulo",children:"Buscador de Gifs"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("p",{className:"p-titulo",children:"Resultados de t\xfa b\xfasqueda:"}),Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})};n(17);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a9c38288.chunk.js.map