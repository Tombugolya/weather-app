(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{90:function(e,t,n){"use strict";n.r(t);var r,c=n(9),a=n.n(c),o=n(15);!function(e){e.TOGGLE="TOGGLE_DARK_THEME"}(r||(r={}));var i={dark:!!window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches};var s,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.TOGGLE:return Object(o.a)(Object(o.a)({},e),{},{dark:!e.dark});default:return e}},j=n(13),l=n.n(j),O=n(22),h=n(70),b=n(21),d=n(63),f=n(64),p=n(17),v=n(54),E=n(30);!function(e){e.AUTOCOMPLETE="locations/v1/cities/autocomplete",e.CURRENT_CONDITIONS="currentconditions/v1",e.FIVE_DAY_FORECAST="forecasts/v1/daily/5day",e.GEOPOSITION="locations/v1/cities/geoposition/search"}(s||(s={}));var x,y=Object(v.a)("url"),m=Object(v.a)("apiKey"),T=Object(v.a)("headers"),w=new(function(){function e(){Object(d.a)(this,e),Object.defineProperty(this,y,{writable:!0,value:"https://dataservice.accuweather.com"}),Object.defineProperty(this,m,{writable:!0,value:"".concat("wdN3ceNdTPwAkC9bwQ6UtKTuBHQ83KMT")}),Object.defineProperty(this,T,{writable:!0,value:{method:"GET"}})}return Object(f.a)(e,[{key:"autocompleteSearch",value:function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r,c,a,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({apikey:Object(p.a)(this,m)[m],q:t}).toString(),r=fetch("".concat(Object(p.a)(this,y)[y],"/").concat(s.AUTOCOMPLETE,"?").concat(n),Object(p.a)(this,T)[T]),e.next=4,Object(E.a)(r);case 4:return c=e.sent,a=Object(O.a)(c,2),o=a[0],i=a[1],o&&console.log(o),e.next=11,null===i||void 0===i?void 0:i.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"currentConditions",value:function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r,c,a,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({apikey:Object(p.a)(this,m)[m]}).toString(),r=fetch("".concat(Object(p.a)(this,y)[y],"/").concat(s.CURRENT_CONDITIONS,"/").concat(t,"?").concat(n),Object(p.a)(this,T)[T]),e.next=4,Object(E.a)(r);case 4:return c=e.sent,a=Object(O.a)(c,2),o=a[0],i=a[1],o&&console.log(o),e.next=11,null===i||void 0===i?void 0:i.json();case 11:return e.abrupt("return",e.sent[0]);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fiveDayForecast",value:function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r,c,a,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({apikey:Object(p.a)(this,m)[m]}).toString(),r=fetch("".concat(Object(p.a)(this,y)[y],"/").concat(s.FIVE_DAY_FORECAST,"/").concat(t,"?").concat(n),Object(p.a)(this,T)[T]),e.next=4,Object(E.a)(r);case 4:return c=e.sent,a=Object(O.a)(c,2),o=a[0],i=a[1],o&&console.log(o),e.next=11,null===i||void 0===i?void 0:i.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"geopositionSearch",value:function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r,c,a,o,i,u,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.latitude,r=t.longitude,c=new URLSearchParams({apikey:Object(p.a)(this,m)[m],q:"".concat(n,",").concat(r)}).toString(),a=fetch("".concat(Object(p.a)(this,y)[y],"/").concat(s.GEOPOSITION,"?").concat(c),Object(p.a)(this,T)[T]),e.next=5,Object(E.a)(a);case 5:return o=e.sent,i=Object(O.a)(o,2),u=i[0],j=i[1],u&&console.log(u),e.next=12,null===j||void 0===j?void 0:j.json();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}());!function(e){e.TOGGLE="TOGGLE_CELSIUS_FAHRENHEIT",e.ADD_FAVORITE="ADD_WEATHER_KEY_TO_FAVORITES",e.REMOVE_FAVORITE="REMOVE_WEATHER_KEY_FROM_FAVORITES",e.CHANGE_CURRENT="CHANGE_CURRENT_WEATHER_KEY",e.ADD_RESULTS="ADD_AUTOCOMPLETE_WEATHER_RESULTS"}(x||(x={}));var R={celsius:!0,favorites:[],current:"3383898",searchResults:[]};function _(){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(l.a.mark((function e(){var t,n,r,c,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator||!navigator.geolocation){e.next=15;break}return e.next=3,new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}));case 3:return t=e.sent,n={longitude:t.coords.longitude,latitude:t.coords.latitude},e.next=7,Object(E.a)(w.geopositionSearch(n));case 7:if(r=e.sent,c=Object(O.a)(r,2),a=c[0],o=c[1],console.log(o),!a){e.next=14;break}return e.abrupt("return",R.current);case 14:return e.abrupt("return",o.Key);case 15:return e.abrupt("return",R.current);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x.TOGGLE:return Object(o.a)(Object(o.a)({},t),{},{celsius:!t.celsius});case x.ADD_FAVORITE:return Object(o.a)(Object(o.a)({},t),{},{favorites:[].concat(Object(h.a)(t.favorites),[n.payload.key])});case x.REMOVE_FAVORITE:return Object(o.a)(Object(o.a)({},t),{},{favorites:t.favorites.filter((function(e){return e!==n.payload.key}))});case x.CHANGE_CURRENT:return Object(o.a)(Object(o.a)({},t),{},{current:n.payload.key});case x.ADD_RESULTS:return Object(o.a)(Object(o.a)({},t),{},{searchResults:null===(e=n.payload)||void 0===e?void 0:e.results});default:return t}},k=n(52),A=Object(k.a)({theme:u,weather:S}),C=n(41),D=n(4),I=Object(k.b)(A,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),L=function(e){var t=e.children;return Object(D.jsx)(C.a,{store:I,children:t})},N=function(){return Object(C.b)()},U=C.c,G=n(69),F=n(119),P=n(126),H=n(118);var V=function(e){var t,n=e.children,r=U((function(e){return e.theme.dark}));return Object(D.jsx)(H.a,{theme:(t=r,Object(G.a)({palette:{type:t?"dark":"light",primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}})),children:Object(D.jsx)(F.a,{children:Object(D.jsx)(P.a,{width:"100vw",height:"100vh",color:"primary.main",bgcolor:"background.paper",children:n})})})},M=n(0),K=n(124),W=n(127),Y=function(){var e=Object(M.useRef)(),t=N();return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(P.a,{display:"flex",width:"60vh",justifyContent:"space-around",children:[Object(D.jsx)(K.a,{fullWidth:!0,type:"search",label:"Search",inputRef:e}),Object(D.jsx)(W.a,{onClick:function(){""===e.current.value?t({type:x.ADD_RESULTS,payload:{results:[]}}):w.autocompleteSearch(e.current.value).then((function(e){t({type:x.ADD_RESULTS,payload:{results:e}})}))},children:"Search"})]})})},X=function(){return Object(D.jsx)("div",{style:{color:"white"},children:"THERE ARE RESULTS"})},q=n(51),z=n.n(q),B=function(){var e=U((function(e){return e.weather.current})),t=U((function(e){return e.weather.celsius})),n=Object(M.useState)(),r=Object(O.a)(n,2),c=r[0],a=r[1],o=Object(M.useState)(),i=Object(O.a)(o,2),s=i[0],u=i[1],j=Object(M.useState)(),h=Object(O.a)(j,2),d=h[0],f=h[1];return z()(Object(b.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.currentConditions(e);case 2:r=n.sent,a(r.WeatherText),u(r.WeatherIcon),f(r.Temperature[t?"Metric":"Imperial"].Value);case 6:case"end":return n.stop()}}),n)}))),[e]),Object(D.jsxs)("div",{style:{color:"white"},children:[c," ",s," ",d," ",t?"\xb0C":"\xb0F"]})},J=Object(M.memo)(B),Q=function(){var e=U((function(e){return e.weather.searchResults}));return Object(D.jsx)(P.a,{height:"75vh",width:"80vw",bgcolor:"primary.main",children:e.length?Object(D.jsx)(X,{}):Object(D.jsx)(J,{})})},Z=function(){var e=N();return z()(Object(b.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:n=t.sent,console.log("get current position",n),e({type:x.CHANGE_CURRENT,payload:{key:n}});case 5:case"end":return t.stop()}}),t)}))),[]),Object(D.jsxs)(P.a,{display:"flex",height:"90vh",alignItems:"center",justifyContent:"space-around",flexDirection:"column",children:[Object(D.jsx)(Y,{}),Object(D.jsx)(Q,{})]})},$=function(){return Object(D.jsx)("h1",{children:"Favorites Page"})},ee=n(122),te=n(123),ne=function(){var e=N(),t=U((function(e){return e.theme.dark}));return Object(D.jsx)("div",{children:Object(D.jsx)(W.a,{onClick:function(){return e({type:r.TOGGLE})},children:t?Object(D.jsx)(ee.a,{size:15}):Object(D.jsx)(te.a,{size:15})})})},re=n(33),ce=n(128),ae=function(){return Object(D.jsxs)(P.a,{display:"flex",justifyContent:"space-around",alignItems:"center",width:"20vw",color:"secondary.main",children:[Object(D.jsx)(ce.a,{color:"textPrimary",component:re.b,to:"/",children:"Home"}),Object(D.jsx)(ce.a,{color:"textPrimary",component:re.b,to:"/favorites",children:"Favorites"}),Object(D.jsx)(ne,{})]})},oe=Object(M.memo)(ae),ie=function(){return Object(D.jsxs)(P.a,{display:"flex",justifyContent:"space-between",width:"100vw",height:"10vh",bgcolor:"secondary.main",children:[Object(D.jsx)("h1",{style:{marginLeft:"2em"},children:"LOGO"}),Object(D.jsx)(oe,{})]})},se=Object(M.memo)(ie),ue=n(11),je=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(se,{}),Object(D.jsxs)(ue.c,{children:[Object(D.jsx)(ue.a,{path:"/",exact:!0,component:Z}),Object(D.jsx)(ue.a,{path:"/favorites",exact:!0,component:$})]})]})},le=function(){return Object(D.jsx)(L,{children:Object(D.jsx)(V,{children:Object(D.jsx)(re.a,{children:Object(D.jsx)(je,{})})})})};a.a.render(Object(D.jsx)(le,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.f3574338.chunk.js.map