(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[3],{100:function(e,t,n){e.exports=n(160)},105:function(e,t,n){},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(14),o=n.n(r);o.a.init({appId:"M6NC0v2HhEmMwE9wvP2OIlE7-gzGzoHsz",appKey:"CsPMFIrzhMQixmaeneju54G3",serverURL:"https://m6nc0v2h.lc-cn-n1-shared.com"});var a={register:function(e,t){var n=new r.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(t)}),(function(e){return t(e)}))}))},login:function(e,t){return new Promise((function(n,r){o.a.User.logIn(e,t).then((function(e){return n(e)}),(function(e){return r(e)}))}))},logout:function(){r.User.logOut()},getCurrentUser:function(){return r.User.current()}},i={add:function(e,t){var n=new o.a.Object("Image"),r=new o.a.File(t,e);return n.set("filename",t),n.set("owner",o.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){return e(t)}),(function(e){return t(e)}))}))},find:function(e){var t=e.page,n=void 0===t?0:t,r=e.limit,a=void 0===r?10:r,i=new o.a.Query("Image");return i.include("owner"),i.limit(a),i.skip(n*a),i.descending("createdAt"),i.equalTo("owner",o.a.User.current()),new Promise((function(e,t){i.find().then((function(t){return e(t)})).catch((function(e){return t(e)}))}))}};window.Uploader=i},160:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),i=n.n(a),c=(n(105),n(17)),u=n(91),l=n.n(u),s=n(29),p=n(3),f=n(18),b=n(161),m=n(64),y=n(68);function h(){var e=Object(c.a)(["\n  margin-left: 10px;\n"]);return h=function(){return e},e}function g(){var e=Object(c.a)(["\n  margin-left: auto;\n"]);return g=function(){return e},e}function O(){var e=Object(c.a)(["\n  color: #fff;\n  margin-left: 30px;\n  \n  &.active {\n    border-bottom: 1px solid #fff;\n  }\n"]);return O=function(){return e},e}function d(){var e=Object(c.a)(["\n  height: 30px;\n"]);return d=function(){return e},e}function j(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding: 10px 100px;\n  background-color: #343a40;\n  color: #fff;\n"]);return j=function(){return e},e}var v=f.a.header(j()),w=f.a.img(d()),U=Object(f.a)(s.b)(O()),E=f.a.div(g()),P=Object(f.a)(b.a)(h()),k=Object(y.a)((function(){var e=Object(m.a)(),t=e.UserStore,n=e.AuthStore,r=Object(p.f)();return o.a.createElement(v,null,o.a.createElement(w,{src:l.a,alt:""}),o.a.createElement("nav",null,o.a.createElement(U,{to:"/",activeClassName:"active",exact:!0},"\u9996\u9875"),o.a.createElement(U,{to:"/history",activeClassName:"active"},"\u4e0a\u4f20\u5386\u53f2"),o.a.createElement(U,{to:"/about",activeClassName:"active"},"\u5173\u4e8e")),o.a.createElement(E,null,t.currentUser?o.a.createElement(o.a.Fragment,null," ",t.currentUser.attributes.username," ",o.a.createElement(P,{type:"primary",onClick:function(){n.logout()}},"\u6ce8\u9500")," "):o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{type:"primary",onClick:function(){console.log("\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762"),r.push("./login")}},"\u767b\u5f55"),o.a.createElement(P,{type:"primary",onClick:function(){console.log("\u8df3\u8f6c\u5230\u6ce8\u518c\u9875\u9762"),r.push("./register")}},"\u6ce8\u518c"))))}));function z(){var e=Object(c.a)(["\n  padding: 10px 100px;\n  text-align: center;\n  font-size: 12px;\n  color: #aaa;\n"]);return z=function(){return e},e}var x=f.a.footer(z());var F=function(){return o.a.createElement(x,null,o.a.createElement("p",null,"Footer"))},D=function(){return o.a.createElement("div",null,"Loading...")},C=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(7),n.e(10)]).then(n.bind(null,341))})),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(6),n.e(9)]).then(n.bind(null,342))})),I=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,333))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,334))})),L=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,335))}));var A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null),o.a.createElement("main",null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(D,null)},o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/",exact:!0,component:C}),o.a.createElement(p.a,{path:"/history",component:S}),o.a.createElement(p.a,{path:"/about",component:I}),o.a.createElement(p.a,{path:"/login",component:M}),o.a.createElement(p.a,{path:"/register",component:L})))),o.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(159),n(12);i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r,o,a,i,c,u,l,s,p,f,b,m,y,h,g=n(0),O=n(8),d=n(19),j=n(20),v=n(2),w=(n(41),n(1)),U=n(12),E=new(r=function(){function e(){Object(d.a)(this,e),Object(O.a)(this,"currentUser",o,this)}return Object(j.a)(e,[{key:"pullUser",value:function(){this.currentUser=U.a.getCurrentUser()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),o=Object(v.a)(r.prototype,"currentUser",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(v.a)(r.prototype,"pullUser",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"pullUser"),r.prototype),Object(v.a)(r.prototype,"resetUser",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"resetUser"),r.prototype),r),P=n(162),k=new(a=function(){function e(){Object(d.a)(this,e),Object(O.a)(this,"list",i,this),Object(O.a)(this,"isLoading",c,this),Object(O.a)(this,"hasMore",u,this),Object(O.a)(this,"page",l,this),this.limit=10}return Object(j.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,U.b.find({page:this.page,limit:this.limit}).then((function(t){e.append(t),e.page++,t.length<e.limit&&(e.hasMore=!1)})).catch((function(e){P.a.error("\u52a0\u8f7d\u6570\u636e\u5931\u8d25")})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),i=Object(v.a)(a.prototype,"list",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=Object(v.a)(a.prototype,"isLoading",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u=Object(v.a)(a.prototype,"hasMore",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),l=Object(v.a)(a.prototype,"page",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(v.a)(a.prototype,"append",[w.f],Object.getOwnPropertyDescriptor(a.prototype,"append"),a.prototype),Object(v.a)(a.prototype,"find",[w.f],Object.getOwnPropertyDescriptor(a.prototype,"find"),a.prototype),Object(v.a)(a.prototype,"reset",[w.f],Object.getOwnPropertyDescriptor(a.prototype,"reset"),a.prototype),a),z=new(s=function(){function e(){Object(d.a)(this,e),Object(O.a)(this,"filename",p,this),Object(O.a)(this,"file",f,this),Object(O.a)(this,"isUploading",b,this),Object(O.a)(this,"serverFile",m,this)}return Object(j.a)(e,[{key:"setFilename",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"upload",value:function(){var e=this;return this.isUploading=!0,this.serverFile=null,new Promise((function(t,n){U.b.add(e.file,e.filename).then((function(n){e.serverFile=n,t(n)})).catch((function(e){P.a.error("\u4e0a\u4f20\u5931\u8d25"),n(e)})).finally((function(){e.isUploading=!1}))}))}},{key:"reset",value:function(){this.isUploading=!1,this.serverFile=null}}]),e}(),p=Object(v.a)(s.prototype,"filename",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=Object(v.a)(s.prototype,"file",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=Object(v.a)(s.prototype,"isUploading",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),m=Object(v.a)(s.prototype,"serverFile",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(v.a)(s.prototype,"setFilename",[w.f],Object.getOwnPropertyDescriptor(s.prototype,"setFilename"),s.prototype),Object(v.a)(s.prototype,"setFile",[w.f],Object.getOwnPropertyDescriptor(s.prototype,"setFile"),s.prototype),Object(v.a)(s.prototype,"upload",[w.f],Object.getOwnPropertyDescriptor(s.prototype,"upload"),s.prototype),Object(v.a)(s.prototype,"reset",[w.f],Object.getOwnPropertyDescriptor(s.prototype,"reset"),s.prototype),s),x=new(y=function(){function e(){Object(d.a)(this,e),Object(O.a)(this,"values",h,this)}return Object(j.a)(e,[{key:"setUsername",value:function(e){this.values.username=e}},{key:"setPassword",value:function(e){this.values.password=e}},{key:"login",value:function(){var e=this;return new Promise((function(t,n){U.a.login(e.values.username,e.values.password).then((function(e){E.pullUser(),t(e)})).catch((function(e){E.resetUser(),P.a.error("\u767b\u5f55\u5931\u8d25"),n(e)}))}))}},{key:"register",value:function(){var e=this;return new Promise((function(t,n){U.a.register(e.values.username,e.values.password).then((function(e){E.pullUser(),t(e)})).catch((function(e){E.resetUser(),P.a.error("\u6ce8\u518c\u5931\u8d25"),n(e)}))}))}},{key:"logout",value:function(){U.a.logout(),E.resetUser(),k.reset(),z.reset()}}]),e}(),h=Object(v.a)(y.prototype,"values",[w.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{username:"",password:""}}}),Object(v.a)(y.prototype,"setUsername",[w.f],Object.getOwnPropertyDescriptor(y.prototype,"setUsername"),y.prototype),Object(v.a)(y.prototype,"setPassword",[w.f],Object.getOwnPropertyDescriptor(y.prototype,"setPassword"),y.prototype),Object(v.a)(y.prototype,"login",[w.f],Object.getOwnPropertyDescriptor(y.prototype,"login"),y.prototype),Object(v.a)(y.prototype,"register",[w.f],Object.getOwnPropertyDescriptor(y.prototype,"register"),y.prototype),Object(v.a)(y.prototype,"logout",[w.f],Object.getOwnPropertyDescriptor(y.prototype,"logout"),y.prototype),y),F=Object(g.createContext)({AuthStore:x,UserStore:E,ImageStore:z,HistoryStore:k});window.stores={AuthStore:x,UserStore:E,ImageStore:z,HistoryStore:k};var D=function(){return Object(g.useContext)(F)}},91:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[100,4,5]]]);
//# sourceMappingURL=main.8b36642b.chunk.js.map