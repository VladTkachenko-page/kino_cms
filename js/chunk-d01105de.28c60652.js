(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d01105de"],{"0312":function(t,e,a){},"0f79":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("p",[t._v("Loading...")])])}],i=(a("48a9"),a("2877")),r={},o=Object(i["a"])(r,s,n,!1,null,"24d282e2",null);e["a"]=o.exports},"132b":function(t,e,a){"use strict";a("4deb")},"48a9":function(t,e,a){"use strict";a("0312")},"4deb":function(t,e,a){},"5dae":function(t,e,a){},"9d07":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.sending?a("div",{staticClass:"toasts-top-right fixed",attrs:{id:"toastsContainerTopRight"}},[a("div",{staticClass:"toast bg-success fade show",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[a("div",{staticClass:"toast-body"},[t._v(t._s(this.text))])])]):t._e()},n=[],i={props:["sending","text"]},r=i,o=a("2877"),l=Object(o["a"])(r,s,n,!1,null,null,null);e["a"]=l.exports},a434:function(t,e,a){"use strict";var s=a("23e7"),n=a("23cb"),i=a("a691"),r=a("50c4"),o=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),u=d("splice"),g=Math.max,p=Math.min,h=9007199254740991,f="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var a,s,d,u,b,v,m=o(this),_=r(m.length),w=n(t,_),C=arguments.length;if(0===C?a=s=0:1===C?(a=0,s=_-w):(a=C-2,s=p(g(i(e),0),_-w)),_+a-s>h)throw TypeError(f);for(d=l(m,s),u=0;u<s;u++)b=w+u,b in m&&c(d,u,m[b]);if(d.length=s,a<s){for(u=w;u<_-s;u++)b=u+s,v=u+a,b in m?m[v]=m[b]:delete m[v];for(u=_;u>_-s+a;u--)delete m[u-1]}else if(a>s)for(u=_-s;u>w;u--)b=u+s-1,v=u+a-1,b in m?m[v]=m[b]:delete m[v];for(u=0;u<a;u++)m[u+w]=arguments[u+2];return m.length=_-s+a,d}})},b18a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"modal-template"}},[a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" Удаление")]}))],2),a("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v("Вы уверены что хотите удалить элемент?")]}))],2),a("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[a("button",{staticClass:"modal-default-button btn-danger",on:{click:function(e){return t.$emit("close")}}},[t._v(" Отмена ")]),a("button",{staticClass:"modal-default-button btn-success",on:{click:function(e){return t.$emit("delete",t.obj)}}},[t._v(" Ок ")])]}))],2)])])])])],1)},n=[],i={props:["obj"]},r=i,o=(a("132b"),a("2877")),l=Object(o["a"])(r,s,n,!1,null,"45b9ad64",null);e["a"]=l.exports},d52e:function(t,e,a){"use strict";a("5dae")},ee3e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"main__title text-center news__header-title"},[t._v("Список страниц")]),a("div",{staticClass:"pages__header-btn"},[a("router-link",{staticClass:"btn-success",attrs:{tag:"button",to:{name:"editPageRu",params:{id:(new Date).getTime(),lang:"ru"}}}},[t._v(" Создать новую ")])],1),t.loading?a("Loader"):a("div",{staticClass:"news__wrap"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover text-nowrap"},[a("thead",[a("tr",[a("th",[t._v("Название")]),a("th",[t._v("Дата создания")]),a("th",[t._v("Статус")])])]),a("tbody",t._l(this.allPages,(function(e){return a("pageTable",{key:e.id,attrs:{page:e},on:{showModal:t.showModalDelete}})})),1)])])]),t.showModal?a("modal",{attrs:{obj:this.pageDelete},on:{close:function(e){t.showModal=!1},delete:t.deletePage}},[a("h3",{attrs:{slot:"header"},slot:"header"},[t._v("Удаление "+t._s(this.pageDelete.name))]),a("p",{attrs:{slot:"body"},slot:"body"},[t._v(" Вы уверены что хотите удалить страницу "+t._s(this.pageDelete.name)+"? ")])]):t._e(),a("Toast",{attrs:{sending:this.sending,text:"Страница успешно удалена"}})],1)},n=[],i=a("1da1"),r=a("5530"),o=(a("96cf"),a("4de4"),a("c740"),a("a434"),a("9d07")),l=a("0f79"),c=a("b18a"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v(t._s(this.page.name))]),a("td",[t._v(t._s(this.page.date))]),this.page.status?a("td",[t._v("ВКЛ")]):a("td",[t._v("ВЫКЛ")]),"Главная страница"===this.page.name?a("td",[a("router-link",{staticClass:"page-btn btn-success",attrs:{tag:"button",to:{name:"mainPagesRu",params:{id:this.page.id,lang:"ru"}}}},[t._v(" Ред ")])],1):"Контакты"===this.page.name?a("td",[a("router-link",{staticClass:"page-btn btn-success",attrs:{tag:"button",to:{name:"editContactRu",params:{id:this.page.id,lang:"ru"}}}},[t._v(" Ред ")])],1):a("td",[a("router-link",{staticClass:"page-btn btn-success",attrs:{tag:"button",to:{name:"editPageRu",params:{id:this.page.id,lang:"ru"}}}},[t._v(" Ред ")])],1),this.page.delete?a("td",[a("button",{staticClass:"btn-danger",on:{click:function(e){return e.preventDefault(),t.$emit("showModal",t.page)}}},[t._v(" Удал ")])]):t._e()])},u=[],g={props:["page"]},p=g,h=a("2877"),f=Object(h["a"])(p,d,u,!1,null,null,null),b=f.exports,v=a("2f62"),m={data:function(){return{loading:!0,showModal:!1,sending:!1,pageDelete:{}}},components:{Loader:l["a"],Toast:o["a"],modal:c["a"],pageTable:b},methods:Object(r["a"])(Object(r["a"])({},Object(v["c"])(["removePage"])),{},{showModalDelete:function(t){this.showModal=!0,this.pageDelete=t},deletePage:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.allPages.filter((function(e){return t.id!==e.id})),a.next=3,e.removePage({pages:s,page:t});case 3:e.sending=!0,setTimeout((function(){e.sending=!1}),4e3),e.showModal=!1,n=e.allPages.findIndex((function(e){return t.id===e.id})),e.allPages.splice(n,1);case 8:case"end":return a.stop()}}),a)})))()}}),computed:Object(v["b"])(["allPages"]),mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchPages",t.allPages);case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()}},_=m,w=(a("d52e"),Object(h["a"])(_,s,n,!1,null,"6c039b93",null));e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-d01105de.28c60652.js.map