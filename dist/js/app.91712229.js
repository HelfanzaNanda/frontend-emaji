(function(e){function n(n){for(var r,a,c=n[0],i=n[1],l=n[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(h.length)h.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9d35":"e31c06d0","chunk-2d0e2170":"34ffdb20","chunk-a8d3c294":"a3945680","chunk-17e331e6":"89e6c3ba","chunk-254be426":"03319a55","chunk-2d2219cb":"923825bf","chunk-eee8734a":"048ab571"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var l=new Error;u=function(n){i.onerror=i.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,t[1](l)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view")],1)},u=[],a=t("2877"),c={},i=Object(a["a"])(c,o,u,!1,null,null,null),l=i.exports,d=(t("45fc"),t("d3b7"),t("8c4f"));r["a"].use(d["a"]);var f=[{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-a8d3c294"),t.e("chunk-254be426")]).then(t.bind(null,"cc1b"))},meta:{guestOnly:!0}},{path:"/",name:"admin",component:function(){return t.e("chunk-2d0b9d35").then(t.bind(null,"3530"))},meta:{authOnly:!0},children:[{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([t.e("chunk-a8d3c294"),t.e("chunk-17e331e6")]).then(t.bind(null,"dad8"))},meta:{authOnly:!0}},{path:"/tool",name:"tool",component:function(){return Promise.all([t.e("chunk-a8d3c294"),t.e("chunk-2d2219cb")]).then(t.bind(null,"caa8"))},meta:{authOnly:!0}},{path:"/user",name:"user",component:function(){return Promise.all([t.e("chunk-a8d3c294"),t.e("chunk-eee8734a")]).then(t.bind(null,"e088"))},meta:{authOnly:!0}},{path:"/profile",name:"profile",component:function(){return t.e("chunk-2d0e2170").then(t.bind(null,"7ce3"))},meta:{authOnly:!0}}]}],h=new d["a"]({mode:"history",base:"/",routes:f});function p(){return localStorage.getItem("token")}h.beforeEach((function(e,n,t){e.matched.some((function(e){return e.meta.authOnly}))?p()?t():t({path:"/login"}):e.matched.some((function(e){return e.meta.guestOnly}))&&p()?t({path:"/dashboard"}):t()}));var s=h,m=(t("b972"),t("a65d")),b=t.n(m);r["a"].config.productionTip=!1,r["a"].use(b.a),new r["a"]({router:s,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.91712229.js.map