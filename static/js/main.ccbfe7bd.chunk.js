(this.webpackJsonpjasakota=this.webpackJsonpjasakota||[]).push([[0],{21:function(e,a,t){e.exports=t(53)},32:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},34:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(4),r=t(5),o=(t(32),t(3)),s=(t(33),t(34),t(19)),m=t.n(s),i=Object(r.b)((function(e){return{dataCategory:e.category.dataCategory}}),(function(e){return{fetchCategory:function(){e((function(e){return e({type:"FETCH_CATEGORY_PENDING"}),m.a.get("https://cors-anywhere.herokuapp.com/http://api.devsoft.my.id/public/Api/categories").then((function(a){var t=a.data;e({type:"FETCH_CATEGORY_SUCCESS",payload:t})})).catch((function(e){throw e}))}))}}}))((function(e){return Object(n.useEffect)((function(){e.fetchCategory()}),[]),e=Object(o.a)({},e),c.a.createElement("div",null,c.a.createElement("div",{className:"navbar-light bg-light"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("nav",{className:"navbar navbar-expand-lg col-md-7"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"Jasakota"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},c.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("a",{className:"nav-link",href:"#"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},"Iklan saya")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},"Pasang Iklan")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},"Masuk"))),c.a.createElement("form",{className:"form-inline my-2 my-lg-0"},c.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search"}),c.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-7",style:{height:400,width:"100%",margin:30}},c.a.createElement("div",{style:{marginBottom:50}},c.a.createElement("img",{className:"card",src:"https://mdbootstrap.com/img/Photos/Others/gradient1.jpg",style:{width:"100%",hight:400}})),c.a.createElement("div",null,c.a.createElement("hr",{style:{marginBottom:50}})),c.a.createElement("div",{className:"row"},e.dataCategory.map((function(e,a){return c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card",style:{height:200,margin:20}}),c.a.createElement("div",{className:"text-align-center"},c.a.createElement("b",null,e.title)))}))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(52);var g=t(2),d=Object(g.c)({category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loadingCategory:!0,dataCategory:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_CATEGORY_PENDING":return Object(o.a)(Object(o.a)({},e),{},{loadingForumDetail:!0});case"FETCH_CATEGORY_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{dataCategory:a.payload,loadingCategory:!1});default:return e}}}),u=t(20),E=Object(g.d)(d,Object(g.a)(u.a));Object(l.render)(c.a.createElement(r.a,{store:E},c.a.createElement(i,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ccbfe7bd.chunk.js.map