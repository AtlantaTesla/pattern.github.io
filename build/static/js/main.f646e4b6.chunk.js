(this["webpackJsonppattern.github.io"]=this["webpackJsonppattern.github.io"]||[]).push([[0],{48:function(t,e,n){t.exports=n(57)},53:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),i=(n(53),n(87)),l=n(91),u=n(92),s=function(t){var e=t.children;return a.a.createElement(i.a,{maxWidth:"md"},a.a.createElement(l.a,{container:!0,spacing:3},a.a.createElement(l.a,{item:!0,xs:6},a.a.createElement(u.a,{className:"my-paper"},e[0])),a.a.createElement(l.a,{item:!0,xs:6},a.a.createElement(u.a,{className:"my-paper"},e[1]))))},m=function(t){var e=t.children;return a.a.createElement("div",{className:"my-row",children:e})},p=function(t){var e=t.children,n=function(t,e){return a.a.createElement(m,{key:e},t)};return a.a.createElement(s,null,a.a.createElement("div",null,e[0].map(n)),a.a.createElement("div",null,e[1].map(n)))},h=n(18),d=n(32),f=n(31),E=n(21),v=n(93),b=n(94),F=function t(){var e=this;Object(E.a)(this,t),this.componentList=[],this.getResult=function(){return e.componentList},this.resetComponent=function(){return e.componentList=[],e}},g=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(E.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).addTitle=function(e){var n=e.titleForm;return t.componentList.push(a.a.createElement("h2",null,n)),Object(h.a)(t)},t.addTextField=function(e){var n=a.a.createElement(v.a,e);return t.componentList.push(n),Object(h.a)(t)},t}return n}(F),y=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(E.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).addTitle=function(e){var n=e.titleManual;return t.componentList.push(a.a.createElement("h2",null,n)),Object(h.a)(t)},t.addTextField=function(e){var n=a.a.createElement(b.a,{severity:"info"},e.helper);return t.componentList.push(n),Object(h.a)(t)},t}return n}(F),j=function t(){Object(E.a)(this,t),this.constructAuthorizationForm=function(t){t.resetComponent().addTitle({titleForm:"\u0424\u043e\u0440\u043c\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",titleManual:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f \u043a \u0444\u043e\u0440\u043c\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}).addTextField({label:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",helper:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435"}).addTextField({label:"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",helper:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 +7"})},this.constructEntryForm=function(t){t.resetComponent().addTitle({titleForm:"\u0410\u043d\u043a\u0435\u0442\u0430",titleManual:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f \u043a \u0410\u043d\u043a\u0435\u0442\u0435"})},this.constructAgreementForm=function(t){t.resetComponent().addTextField({label:"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",helper:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0432 \u043d\u0430\u043c \u0441\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440, \u0412\u044b \u0434\u0430\u0451\u0442\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0432\u0430\u0448\u0438\u0445 \u0441\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0438\u0439 \u0432 3-\u0445 \u043b\u0438\u0442\u0440\u043e\u0432\u043e\u043c \u0431\u0430\u043b\u043b\u043e\u043d\u0435 \u0444\u043e\u043d\u0434\u0443 \u0437\u0430\u0449\u0438\u0442\u044b \u043a\u043e\u0430\u043b"})}},O=function(){var t=[],e=new g,n=new y,r=new j;return r.constructAuthorizationForm(e),r.constructAuthorizationForm(n),t.push([e.getResult(),n.getResult()]),r.constructEntryForm(e),r.constructEntryForm(n),t.push([e.getResult(),n.getResult()]),r.constructAgreementForm(e),r.constructAgreementForm(n),t.push([e.getResult(),n.getResult()]),a.a.createElement("div",null,t.map((function(t,e){return a.a.createElement(p,{key:e},t)})))};var x=function(){return a.a.createElement(O,null)};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f646e4b6.chunk.js.map