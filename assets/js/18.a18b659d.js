(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{485:function(t,e,s){},486:function(t,e,s){},492:function(t,e,s){"use strict";s(485)},493:function(t,e,s){"use strict";s(486)},494:function(t,e,s){"use strict";s(147),s(55),s(265),s(264),s(79),s(56);var n=s(33),c=function(t){var e=Object.keys(t),s=!0;return e.forEach((function(t){["span","offset"].includes(t)||(s=!1)})),s},a={name:"MiguCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:c},narrowPc:{type:Object,validator:c},pc:{type:Object,validator:c},widePc:{type:Object,validator:c}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(e).concat(t.span)),t.offset&&s.push("offset-".concat(e).concat(t.offset)),s}},computed:{colClass:function(){var t=this.span,e=this.offset,s=this.ipad,c=this.narrowPc,a=this.pc,r=this.widePc,i=this.createClasses;return[].concat(Object(n.a)(i({span:t,offset:e})),Object(n.a)(i(s,"ipad-")),Object(n.a)(i(c,"narrow-pc-")),Object(n.a)(i(a,"pc-")),Object(n.a)(i(r,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},r=(s(492),s(6)),i=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"253d8902",null);e.a=i.exports},495:function(t,e,s){"use strict";s(55),s(54),s(264),s(56);var n={props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))},computed:{rolStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}}},c=(s(493),s(6)),a=Object(c.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rolStyle},[this._t("default")],2)}),[],!1,null,"b06a2d38",null);e.a=a.exports},556:function(t,e,s){},629:function(t,e,s){"use strict";s(556)},668:function(t,e,s){"use strict";s.r(e);var n=s(494),c=s(495),a={components:{"migu-col":n.a,"migu-row":c.a}},r=(s(629),s(6)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gutter-wrapper"},[s("migu-row",[s("migu-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),s("migu-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),s("migu-col",{attrs:{span:"4",offset:"4"}},[t._v("col-4;offset-4")])],1),t._v(" "),s("migu-row",[s("migu-col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),s("migu-col",{attrs:{span:"5",offset:"3"}},[t._v("col-5;offset-3")]),t._v(" "),s("migu-col",{attrs:{span:"4",offset:"4"}},[t._v("col-4;offset-4")])],1),t._v(" "),s("migu-row",[s("migu-col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),s("migu-col",{attrs:{span:"6",offset:"4"}},[t._v("col-6;offset-4")])],1)],1)}),[],!1,null,"661e8c72",null);e.default=i.exports}}]);