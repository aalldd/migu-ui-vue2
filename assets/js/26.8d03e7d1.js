(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{512:function(t,o,n){"use strict";var s=n(1),i=n(151).trim;s({target:"String",proto:!0,forced:n(513)("trim")},{trim:function(){return i(this)}})},513:function(t,o,n){var s=n(2),i=n(152);t.exports=function(t){return s((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},676:function(t,o,n){"use strict";n.r(o);n(512);var s=n(0),i=n(520),e=n(487),u=n(575);s.default.use(u.a);var a={name:"toast-demo",components:{"migu-toast":i.a,"migu-button":e.a},methods:{showToast1:function(){this.showToast("top")},showToast2:function(){this.showToast("middle")},showToast3:function(){this.showToast("bottom")},showToast:function(t){this.$toast("<strong>你的智商需要充值</strong>",{enableHtml:!0,closeButton:{text:"已充值",callback:function(){console.log("他说已经充值智商了")}},autoClose:2,position:t.trim()})}}},c=n(6),r=Object(c.a)(a,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("migu-button",{on:{click:t.showToast1}},[t._v("top")]),t._v(" "),n("migu-button",{on:{click:t.showToast2}},[t._v("middle")]),t._v(" "),n("migu-button",{on:{click:t.showToast3}},[t._v("bottom")])],1)}),[],!1,null,"064e1c3e",null);o.default=r.exports}}]);