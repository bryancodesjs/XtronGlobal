(this["webpackJsonptrx-mlm-smart-contract-20113748-react"]=this["webpackJsonptrx-mlm-smart-contract-20113748-react"]||[]).push([[10],{117:function(e,t,n){"use strict";t.a=n.p+"static/media/xtronlong.12848e6d.png"},122:function(e,t,n){"use strict";var a=n(103),c=n.n(a),r=n(115),s={tronWeb:!1,contract:!1,setTronWeb:function(e){var t=this;return Object(r.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.tronWeb=e,n.next=3,e.contract().at("TA4MuGPwQp6RUvD3uUsshZ4FNaYxWRKHbC");case 3:t.contract=n.sent;case 4:case"end":return n.stop()}}),n)})))()}};t.a=s},123:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(120));t.a=function(e){var t=e.autoClose,n=void 0===t?3e3:t;return Object(a.jsx)(c.a,{position:"top-center",autoClose:n,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0})}},156:function(e,t){},157:function(e,t){},158:function(e,t){},160:function(e,t){},481:function(e,t,n){"use strict";n.r(t);var a=n(103),c=n.n(a),r=n(115),s=n(17),i=n(1),o=n(0),l=n(117),d=n(2),u=n(13),b=n(15),m=n(112),h=n(120),j=n(123),f=n(134),w=n.n(f),O=n(122),g=n(264),p=n(143),x=n.n(p);n(144);x.a.init("70333a3349b80fceba9aecae1a0ee1ee");t.default=function(e){var t=e.location&&e.location.state,n=Object(d.g)(),a=Object(o.useContext)(b.a),f=Object(o.useState)(""),p=Object(s.a)(f,2),v=p[0],I=p[1],k=Object(o.useState)(!1),y=Object(s.a)(k,2),N=y[0],E=y[1],W=Object(o.useState)({installed:!1,loggedIn:!1}),L=Object(s.a)(W,2),D=(L[0],L[1]);Object(o.useEffect)(Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(t.installed)return D(t),e();var n=0,a=setInterval((function(){if(n>=10){var c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NETWORK;return window.tronWeb=new w.a(c,c,c),D({installed:!1,loggedIn:!1}),clearInterval(a),e()}if(t.installed=!!window.tronWeb,t.loggedIn=window.tronWeb&&window.tronWeb.ready,!t.installed)return n++;clearInterval(a),D(t),e()}),100)}));case 2:return e.next=4,O.a.setTronWeb(window.tronWeb);case 4:E(!0);case 5:case"end":return e.stop()}}),e)})))();case 1:case"end":return e.stop()}}),e)}))),[]);var T=function(){return Object(i.jsx)("p",{children:"English"===t?Object(i.jsx)("span",{children:"To access XTRON you must install TronLink."}):Object(i.jsx)("span",{children:"Para acceder a XTRON debe instalar TronLink."})})},S=function(){var e=Object(r.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===v){e.next=23;break}if(!N){e.next=20;break}return e.prev=2,e.next=5,O.a.contract.idToAddress(v).call();case 5:r=e.sent,a.userLogIn(!0,"Login"),localStorage.removeItem("backOfficeID"),localStorage.setItem("backOfficeID",w.a.address.fromHex(r)),n.push({pathname:"/back-office-main",state:{lang:t}});try{localStorage.getItem("backOfficeID")===window.tronWeb.defaultAddress.base58?(x.a.identify(window.tronWeb.defaultAddress.base58),x.a.track("LoginOwner",{backOfficeID:v,owner:!0,nickname:window.tronWeb.defaultAddress.name})):(x.a.identify(window.tronWeb.defaultAddress.base58),x.a.track("loginVisitor",{backOfficeID:v,owner:!1,nickname:window.tronWeb.defaultAddress.name}))}catch(c){}window.location.reload(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),h.b.error("Error"),console.log(e.t0);case 18:e.next=21;break;case 20:h.b.error(T);case 21:e.next=24;break;case 23:"English"===t?h.b.warn("Enter your ID"):h.b.warn("Introduzca su ID");case 24:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==v)if(N)if(v.length>33)try{try{a.userLogIn(!0,"Login"),localStorage.removeItem("backOfficeID"),localStorage.setItem("backOfficeID",v),n.push({pathname:"/back-office-main",state:{lang:t}}),g.a.event({category:"User",action:"Successful Login"});try{localStorage.getItem("backOfficeID")===window.tronWeb.defaultAddress.base58?(x.a.identify(window.tronWeb.defaultAddress.base58),x.a.track("LoginOwner",{auth:"wallet",wallet:v,owner:!0,nickname:window.tronWeb.defaultAddress.name})):(x.a.identify(window.tronWeb.defaultAddress.base58),x.a.track("loginVisitor",{auth:"wallet",wallet:v,owner:!1,nickname:window.tronWeb.defaultAddress.name}))}catch(c){}window.location.reload(!1)}catch(r){h.b.error("Error"),console.log(r)}}catch(r){alert.show("Wallet Error")}else h.b.error("Wallet invalida");else h.b.error(T);else"English"===t?h.b.warn("Enter your ID"):h.b.warn("Introduzca su ID");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"",id:"backofficewrap",children:[Object(i.jsx)(j.a,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"text-center logo-payment-wrap",children:Object(i.jsx)(u.b,{to:{pathname:"/",state:t},className:"logo-payment-link",children:Object(i.jsx)("img",{className:"logo-payment",src:l.a,alt:"logo xtron"})})}),Object(i.jsx)("div",{className:"row ",id:"",children:Object(i.jsx)("div",{className:"",style:{width:"100%"},children:Object(i.jsx)("div",{className:"xwrap",children:Object(i.jsxs)("div",{className:"text-center registration-items",children:["English"===t?Object(i.jsx)("h2",{children:"Login Area"}):Object(i.jsx)("h2",{children:"\xc1rea de inicio de sesi\xf3n"}),"English"===t?Object(i.jsx)("h4",{children:"Enter your ID/Wallet to access your backoffice"}):Object(i.jsx)("h4",{children:"Ingrese su ID/Wallet para acceder a su backoffice"}),Object(i.jsxs)("div",{className:"login-switch-wrap",children:[Object(i.jsx)("button",{id:"method1btn",className:"switchbtn switchbtn-active",onClick:function(){return document.getElementById("method1btn").classList.add("switchbtn-active"),document.getElementById("method2btn").classList.remove("switchbtn-active"),document.getElementById("method1wrap").classList.remove("hide"),void document.getElementById("method2wrap").classList.add("hide")},children:"ID"}),Object(i.jsx)("button",{id:"method2btn",className:"switchbtn",onClick:function(){return document.getElementById("method1btn").classList.remove("switchbtn-active"),document.getElementById("method2btn").classList.add("switchbtn-active"),document.getElementById("method1wrap").classList.add("hide"),void document.getElementById("method2wrap").classList.remove("hide")},children:" TRX Wallet"})]}),Object(i.jsxs)("div",{id:"method1wrap",className:"login-method-1",children:[Object(i.jsx)("div",{className:"registration-input",children:Object(i.jsx)("input",{id:"customInput",name:"customInputName",type:"text",value:v,className:"sponsor-input-box text-center",onChange:function(e){return I(e.target.value)}})}),Object(i.jsx)("div",{className:"registration-btn",children:Object(i.jsx)("button",{id:"btn-login-id",className:"btn btn-success custombtn",onClick:function(){return S()},children:"LOGIN"})})]}),Object(i.jsxs)("div",{id:"method2wrap",className:"login-method-2 hide",children:[Object(i.jsx)("div",{className:"registration-input",children:Object(i.jsx)("input",{id:"customInput",name:"customInputName",type:"text",value:v,className:"sponsor-input-box text-center",onChange:function(e){return I(e.target.value)}})}),Object(i.jsx)("div",{className:"registration-btn",children:Object(i.jsx)("button",{id:"btn-login-wallet",className:"btn btn-success custombtn",onClick:function(){return A()},children:"LOGIN"})})]}),Object(i.jsx)("div",{className:"h20"}),"English"===t?Object(i.jsx)("h4",{children:"Don't have an account yet?"}):Object(i.jsx)("h4",{children:"\xbfA\xfan no tienes una cuenta?"}),"English"===t?Object(i.jsx)(u.b,{to:{pathname:"/registration",state:t},children:Object(i.jsxs)("h4",{children:[Object(i.jsx)(m.k,{}),"  Register"]})}):Object(i.jsx)(u.b,{to:{pathname:"/registration",state:t},children:Object(i.jsxs)("h4",{children:[Object(i.jsx)(m.k,{}),"  REGISTRO"]})})]})})})})]})]})}}}]);
//# sourceMappingURL=10.d20acf05.chunk.js.map