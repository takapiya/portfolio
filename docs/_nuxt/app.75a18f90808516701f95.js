webpackJsonp([8],{"/LxS":function(t,e,n){t.exports=n.p+"fonts/IBMPlexSans-Regular.2526ba2.ttf"},"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"3V1s":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},"4Atj":function(t,e,n){var r={"./redirect.js":"6hDt","./seekCurrentEntry.js":"UHGt"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="4Atj"},"6hDt":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=sessionStorage.getItem("redirect_path");if(delete sessionStorage.redirect_path,e&&e!=location.pathname)return t.redirect(e)}},"92H1":function(t,e,n){t.exports=n.p+"fonts/IBMPlexSans-Bold.55bab78.woff"},"F/ub":function(t,e,n){var r=n("3V1s");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("0973ed27",r,!1,{sourceMap:!1})},F88d:function(t,e,n){"use strict";var r=n("fNff"),o=n("P+aQ"),a=!1;var i=function(t){a||n("L1WU")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var l=u[f]||c,p={};r.forEach(function(t){void 0!==l[t]&&(p[t]=l[t])});var d={};o.forEach(function(t){"function"==typeof l[t]&&(d[t]=l[t].bind(s))});var h=d.beforeEnter;d.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:p,on:d},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("QA5y"),f=c.keys(),l={},p=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(p=t)}),p&&(l=_(p)),"function"!=typeof l){l.modules||(l.modules={});var d=!0,h=!1,m=void 0;try{for(var x,v=i()(f);!(d=(x=v.next()).done);d=!0){var y=x.value,b=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==b){var g=b.split(/\//);(t=k(l,g))[b=g.pop()]=_(y),t[b].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!d&&v.return&&v.return()}finally{if(h)throw m}}}var w=l instanceof Function?l:function(){return new u.default.Store(o()({strict:!1},l,{state:l.state instanceof Function?l.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function k(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},k(t.modules[n],e)}},L1WU:function(t,e,n){var r=n("zQzM");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("03b4295c",r,!1,{sourceMap:!1})},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},PXEN:function(t,e,n){var r=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"@font-face{font-family:IBMPlexSans;src:url("+r(n("nXnZ"))+') format("woff2"),url('+r(n("R7sm"))+') format("woff"),url('+r(n("/LxS"))+') format("truetype");font-style:normal;font-weight:300}@font-face{font-family:IBMPlexSans;src:url('+r(n("pGsF"))+') format("woff2"),url('+r(n("92H1"))+') format("woff"),url('+r(n("eLFv"))+') format("truetype");font-style:normal;font-weight:700}body{font-family:IBMPlexSans,"sans-serif"}',""])},QA5y:function(t,e,n){var r={"./index.js":"vdRI"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},R7sm:function(t,e,n){t.exports=n.p+"fonts/IBMPlexSans-Regular.0210e62.woff"},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),s=n.n(i),u=n("//Fk"),c=n.n(u),f=n("Xxa5"),l=n.n(f),p=n("mvHQ"),d=n.n(p),h=n("exGp"),m=n.n(h),x=n("fZjL"),v=n.n(x),y=n("woOf"),b=n.n(y),g=n("/5sW"),w=n("unZF"),_=n("qcny"),k=n("YLfZ"),C=(r=m()(l.a.mark(function t(e,n,r){var o,a,i=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!S.nuxt.err||n.path!==e.path,this._queryChanged=d()(e.query)!==d()(n.query),this._diffQuery=this._queryChanged?Object(k.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(k.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),$=(o=m()(l.a.mark(function t(e,n,r){var o,a,i,s,u,f,p,d,h=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];j=Object(k.e)(n,e).map(function(t,r){return Object(k.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(k.m)(S,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=S.nuxt.dateErr,this._hadError=!!S.nuxt.err,i=[],(s=Object(k.e)(e,i)).length){t.next=24;break}return t.next=13,B.call(this,s,S.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(S.context):_.a.layout);case 17:return u=t.sent,t.next=20,B.call(this,s,S.context,u);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return S.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(A(s,e,n)),t.prev=26,t.next=29,B.call(this,s,S.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!S.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=s[0].options.layout)&&(f=f(S.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,B.call(this,s,S.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!S.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(p=!0,s.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{},store:R}))}),p){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,n){if(t._path=Object(k.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==j[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=a&&s?30:45;if(a){var f=Object(k.j)(t.options.asyncData,S.context).then(function(e){Object(k.a)(t,e),h.$loading.increase&&h.$loading.increase(u)});o.push(f)}if(s){var l=t.options.fetch(S.context);l&&(l instanceof c.a||"function"==typeof l.then)||(l=c.a.resolve(l)),l.then(function(t){h.$loading.increase&&h.$loading.increase(u)}),o.push(l)}return c.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),j=s.map(function(t,n){return Object(k.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),j=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(d=_.a.layout)&&(d=d(S.context)),t.next=63,this.loadLayout(d);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),E=(a=m()(l.a.mark(function t(e){var n,r,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return S=e.app,O=e.router,R=e.store,t.next=5,c.a.all(F(O));case 5:if(n=t.sent,r=new g.default(S),o=function(){r.$mount("#__nuxt"),g.default.nextTick(function(){P(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(A(n,O.currentRoute)),j=O.currentRoute.matched.map(function(t){return Object(k.b)(t.path)(O.currentRoute.params)})),r.$loading={},T.error&&r.error(T.error),O.beforeEach(C.bind(r)),O.beforeEach($.bind(r)),O.afterEach(L),O.afterEach(I.bind(r)),!T.serverRendered){t.next=19;break}return o(),t.abrupt("return");case 19:$.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return L(O.currentRoute,O.currentRoute),N.call(r,O.currentRoute),void o();O.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 20:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),j=[],S=void 0,O=void 0,R=void 0,T=window.__NUXT__||{},M=g.default.config.errorHandler;function A(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=b()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);v()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function q(t,e){return T.serverRendered&&e&&Object(k.a)(t,e),t._Ctor=t,t}function F(t){var e,n=this,r=Object(k.d)(t.options.base,t.options.mode);return Object(k.c)(t.match(r),(e=m()(l.a.mark(function t(e,r,o,a,i){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=q(Object(k.l)(e),T.data?T.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function B(t,e,n){var r=this,o=["seekCurrentEntry"],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof w.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t])}),!a)return Object(k.i)(o,e)}function L(t,e){Object(k.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=g.default.extend(t))._Ctor=t,n.components[r]=t),t})}function N(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(S.context)),this.setLayout(e)}function I(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||g.default.nextTick(function(){Object(k.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&j[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)g.default.set(t.$data,r,n[r])}}),N.call(n,t)})}function P(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(e,n){g.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}g.default.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()};if(e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error&&"render function"!==n&&e.$root.$nuxt.error(r),"function"==typeof M)return M.apply(void 0,arguments);console.error(t.message||r.message)},Object(_.b)().then(E).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},UHGt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){t.store.dispatch("seekCurrent",t)}},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},XiXz:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}body,html{min-height:100%}body{background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#f9f9f9));background:linear-gradient(#fff,#f9f9f9)}a,body{color:#21282d}a{text-decoration:underline}img{max-width:100%}.hidden{display:none}",""])},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=g,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return $}),n.d(e,"m",function(){return E}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return p.a.resolve();return j(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=j,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l,p=i[f.name];if(null==p){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!e[c].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(l)+"`");a+=(0===d?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(p),!e[c].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');a+=f.prefix+l}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=S.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var l=t[a],p=n[2],d=n[3],h=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var y=null!=p&&null!=l&&l!==p,b="+"===x||"*"===x,g="?"===x||"*"===x,w=n[2]||s,_=h||m;r.push({name:d||o++,prefix:p||"",delimiter:w,optional:g,repeat:b,partial:y,asterisk:!!v,pattern:_?T(_):v?".*":"[^"+R(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),l=n("//Fk"),p=n.n(l),d=n("fZjL"),h=n.n(d),m=n("Dd8w"),x=n.n(m),v=n("/5sW"),y=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return p.a.all(w(t,(e=f()(u.a.mark(function t(e,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=b(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var k,C,$=(k=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",x()({},e,{meta:g(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return k.apply(this,arguments)}),E=(C=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={CTF_WORKS_TYPE_ID:"work",CTF_SPACE_ID:"nbf1on0d2j8x",CTF_CDA_ACCESS_TOKEN:"0cb7b4e80d68a4fe51f370fee1ee2a630a006dfb486cdee0cb204b295f631f64"},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/portfolio/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=M(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,$(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,$(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return C.apply(this,arguments)});function j(t,e){var n=void 0;return(n=2===t.length?new p.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof p.a||"function"==typeof n.then)||(n=p.a.resolve(n)),n}var S=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function M(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},Zzbq:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"@-webkit-keyframes text-track-in{0%{letter-spacing:1.5rem;opacity:0}60%{opacity:.5}to{opacity:1;letter-spacing:.5rem}}@keyframes text-track-in{0%{letter-spacing:1.5rem;opacity:0}60%{opacity:.5}to{opacity:1;letter-spacing:.5rem}}@-webkit-keyframes text-swing-in{0%{opacity:0}to{opacity:1}}@keyframes text-swing-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}40%{opacity:.5}to{opacity:1}}@keyframes fade-in{0%{opacity:0}40%{opacity:.5}to{opacity:1}}",""])},acog:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}button{background-color:transparent;border:none;cursor:pointer;outline:none;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}',""])},bPQO:function(t,e,n){var r=n("PXEN");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("c5fa74c8",r,!1,{sourceMap:!1})},ct3O:function(t,e,n){"use strict";var r=n("yiYi"),o=n("QhKw"),a=!1;var i=function(t){a||n("F/ub")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},eLFv:function(t,e,n){t.exports=n.p+"fonts/IBMPlexSans-Bold.adfad43.ttf"},fNff:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},fQ5t:function(t,e,n){"use strict";var r=n("c/SZ");e.a={createClient:function(){return r.createClient({space:"nbf1on0d2j8x",accessToken:"0cb7b4e80d68a4fe51f370fee1ee2a630a006dfb486cdee0cb204b295f631f64"})}}},kO3W:function(t,e,n){var r=n("XiXz");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("777a2ddc",r,!1,{sourceMap:!1})},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/portfolio/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nav__item--current",scrollBehavior:l,routes:[{path:"/works",component:s,name:"works"},{path:"/about",component:u,name:"about"},{path:"/works/:slug",component:c,name:"works-slug"},{path:"/",component:f,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var s=function(){return n.e(4).then(n.bind(null,"BVVt")).then(function(t){return t.default||t})},u=function(){return n.e(5).then(n.bind(null,"hSk2")).then(function(t){return t.default||t})},c=function(){return n.e(0).then(n.bind(null,"b5JV")).then(function(t){return t.default||t})},f=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var l=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},nXnZ:function(t,e,n){t.exports=n.p+"fonts/IBMPlexSans-Regular.0c541b3.woff2"},pGsF:function(t,e,n){t.exports=n.p+"fonts/IBMPlexSans-Bold.1294953.woff2"},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return S});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),l=n.n(f),p=n("exGp"),d=n.n(p),h=n("MU8w"),m=(n.n(h),n("/5sW")),x=n("p3jY"),v=n.n(x),y=n("mtxM"),b=n("0F0d"),g=n("HBB+"),w=n("WRRc"),_=n("ct3O"),k=n("Hot+"),C=n("yTq1"),$=n("YLfZ"),E=n("J2Ti");n.d(e,"a",function(){return _.a});var j,S=(j=d()(o.a.mark(function t(e){var n,r,a,i,u,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(E.a)(e)).$router=n,a=l()({router:n,store:r,nuxt:{defaultTransition:O,transitions:[O],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},O,{name:t}):c()({},O,t):O}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},C.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object($.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object($.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=15;break;case 15:return t.abrupt("return",{app:a,router:n,store:r});case 16:case"end":return t.stop()}},t,this)})),function(t){return j.apply(this,arguments)});m.default.component(b.a.name,b.a),m.default.component(g.a.name,g.a),m.default.component(w.a.name,w.a),m.default.component(k.a.name,k.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var O={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},tTmN:function(t,e,n){var r=n("acog");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("16b435a4",r,!1,{sourceMap:!1})},tdLJ:function(t,e,n){var r=n("Zzbq");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("5a26127c",r,!1,{sourceMap:!1})},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var u={},c=!0,f=!1,l=void 0;try{for(var p,d=o()(i);!(c=(p=d.next()).done);c=!0){var h=p.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){f=!0,l=t}finally{try{!c&&d.return&&d.return()}finally{if(f)throw l}}e.a=u},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),o=n.n(r),a=n("exGp"),i=n.n(a),s=n("NYxO"),u=n("fQ5t").a.createClient(),c={isMenuOpen:!1,isContactOpen:!1,isScrolled:!1,worksEntries:[],currentEntry:[]},f={toggleMenu:function(t,e){t.isMenuOpen=e},toggleContact:function(t,e){t.isContactOpen=e},isScrolled:function(t,e){t.isScrolled=e},setWorksEntries:function(t,e){t.worksEntries=e},setCurrentEntry:function(t,e){t.currentEntry=e}},l={nuxtServerInit:function(){var t=i()(o.a.mark(function t(e,n){var r=e.dispatch;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("fetchWorks",n);case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),toggleMenu:function(t,e){(0,t.commit)("toggleMenu",e)},toggleContact:function(t,e){(0,t.commit)("toggleContact",e)},isScrolled:function(t,e){(0,t.commit)("isScrolled",e)},seekCurrent:function(t,e){var n=t.commit,r=e.store.state.worksEntries.filter(function(t){return t.fields.slug===e.params.slug});r.length>0?n("setCurrentEntry",r[0]):n("setCurrentEntry",null)},fetchWorks:function(){var t=i()(o.a.mark(function t(e,n){var r,a,i=e.commit,s=e.dispatch;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.getEntries({content_type:"work"});case 2:r=t.sent,a=JSON.parse(r.stringifySafe()),i("setWorksEntries",a.items),s("seekCurrent",n);case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()};e.default=function(){return new s.default.Store({state:c,mutations:f,actions:l})}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s=n("tTmN"),u=(n.n(s),n("tdLJ")),c=(n.n(u),n("kO3W")),f=(n.n(c),n("bPQO")),l=(n.n(f),{_article:function(){return n.e(3).then(n.bind(null,"YisM")).then(function(t){return t.default||t})},_default:function(){return n.e(2).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})},_error_test:function(){return n.e(6).then(n.bind(null,"TSCw")).then(function(t){return t.default||t})}}),p={};e.a={head:{link:[{rel:"stylesheet",href:"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"}],meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,shrink-to-fit=no"},{hid:"description",name:"description",content:"Meta description"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&p["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=p[e],this.layout},loadLayout:function(t){var e=this;t&&(l["_"+t]||p["_"+t])||(t="default");var n="_"+t;return p[n]?o.a.resolve(p[n]):l[n]().then(function(t){return p[n]=t,delete l[n],p[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},yiYi:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},zQzM:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])}},["T23V"]);