!function(t){function e(o,r){if(n[o])return n[o].exports;var c={i:o,l:!1,exports:{}};return 0!=r&&(n[o]=c),t[o].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/static-dist/",e(e.s="09f42118a2578fd7b56e")}({"09f42118a2578fd7b56e":function(t,e,n){"use strict";window.ltc.loadCss(),window.ltc.load("jquery","scrollbar").then(function(){$("#text-activity").perfectScrollbar(),$("#text-activity").perfectScrollbar("update"),$("#text-activity").data("disableCopy")&&(document.oncontextmenu=document.onselectstart=function(){return!1},window.sidebar&&(document.onmousedown=document.onclick=document.oncut=document.oncopy=function(){return!1}),document.addEventListener("keydown",function(t){83===t.keyCode&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&(t.preventDefault(),t.stopPropagation())},!1))})}});