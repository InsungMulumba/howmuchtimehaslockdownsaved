!function(e){function t(t){for(var n,s,c=t[0],l=t[1],u=t[2],m=0,f=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(i&&i(t);f.length;)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={2:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var i=l;o.push([61,0]),a()}({18:function(e,t,a){},51:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a(389),c=a(390),l=a(391),u=a(392),i=a(393),m=a(394),f=(a(18),a(51),function(e){var t=e.totalTimeSaved,a="www.timesavedinlockdown.com",n="I have saved ".concat(t," by working remotely since lockdown started, click here to find out how much you've saved");return r.a.createElement("div",{className:"social-buttons-container"},r.a.createElement(s.a,{url:a,quote:"I have saved ".concat(t," by working remotely since lockdown started, click here to find out how much you've saved"),className:"social-button"},r.a.createElement(c.a,{size:30,round:!0})),r.a.createElement(l.a,{url:a,title:n,separator:": ",className:"social-button"},r.a.createElement(u.a,{size:30,round:!0})),r.a.createElement(i.a,{url:a,title:n,className:"social-button"},r.a.createElement(m.a,{size:30,round:!0})))}),d=function(e,t,a,n){return e+t+a-n},p=function(e,t,a){for(var n,r,o=t.getTime(),s=e.getTime(),c=Math.ceil((o-s)/864e5+1),l=0,u=0;l<=c;){var i=new Date(s+864e5*l),m=i.toLocaleString("en-gb",{weekday:"long"}),f=(n=i.getDate(),(4===(r=i.getMonth())&&(8===n||25===n)||3===r&&(13===n||10===n))&&a.includes("Bank Holidays"));(a.includes(m)||f)&&(u+=1),l+=1}return c-u},v=function(e){var t=e/60,a=Math.floor(t),n=60*(t-a),r=Math.round(n);return"".concat(Math.abs(a)," hour(s) and ").concat(r," minute(s)")};t.default=function(e){var t=e.departCommuteDuration,a=e.returnCommuteDuration,n=e.prepareMinutes,s=e.wPrepareMinutes,c=e.lockdownStartDate,l=e.selectedDays,u=d(t,a,n,s),i=new Date,m=Object(o.keys)(Object(o.omitBy)(l)),h=v(p(c,i,m)*u),y=u>=0?r.a.createElement("span",{className:"statement-prefix"},"You save"):r.a.createElement("span",{className:"statement-prefix"},"You lose"),b=u>=0?r.a.createElement("span",{className:"statement-prefix"}," You have saved "):r.a.createElement("span",{className:"statement-prefix"}," You have lost "),w=r.a.createElement("div",{className:"result-statement",id:"Result"},y,r.a.createElement("span",{className:"result-statistic"}," ",Math.abs(u)," minutes"),r.a.createElement("span",{className:"statement-suffix"},"every working day")),g=r.a.createElement("div",{className:"result-statement"},b," ",r.a.createElement("span",{className:"result-statistic"}," ",h," ")," ",r.a.createElement("span",{className:"statement-suffix"}," since start of lockdown"));return r.a.createElement("div",{className:"result main-section"},r.a.createElement(f,{totalTimeSaved:h}),w,g)}}});