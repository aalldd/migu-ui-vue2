(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{485:function(t,e,n){},486:function(t,e,n){},492:function(t,e,n){"use strict";n(485)},493:function(t,e,n){"use strict";n(486)},494:function(t,e,n){"use strict";n(147),n(55),n(265),n(264),n(79),n(56);var r=n(33),s=function(t){var e=Object.keys(t),n=!0;return e.forEach((function(t){["span","offset"].includes(t)||(n=!1)})),n},a={name:"MiguCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:s},narrowPc:{type:Object,validator:s},pc:{type:Object,validator:s},widePc:{type:Object,validator:s}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(e).concat(t.span)),t.offset&&n.push("offset-".concat(e).concat(t.offset)),n}},computed:{colClass:function(){var t=this.span,e=this.offset,n=this.ipad,s=this.narrowPc,a=this.pc,i=this.widePc,c=this.createClasses;return[].concat(Object(r.a)(c({span:t,offset:e})),Object(r.a)(c(n,"ipad-")),Object(r.a)(c(s,"narrow-pc-")),Object(r.a)(c(a,"pc-")),Object(r.a)(c(i,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},i=(n(492),n(6)),c=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"253d8902",null);e.a=c.exports},495:function(t,e,n){"use strict";n(55),n(54),n(264),n(56);var r={props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))},computed:{rolStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}}},s=(n(493),n(6)),a=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rolStyle},[this._t("default")],2)}),[],!1,null,"b06a2d38",null);e.a=a.exports},555:function(t,e,n){},628:function(t,e,n){"use strict";n(555)},667:function(t,e,n){"use strict";n.r(e);var r=n(494),s=n(495),a={components:{"migu-col":r.a,"migu-row":s.a}},i=(n(628),n(6)),c=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gutter-wrapper"},[n("migu-row",{attrs:{align:"left"}},[n("migu-col",{attrs:{span:"8"}},[t._v("left")]),t._v(" "),n("migu-col",{attrs:{span:"8"}},[t._v("left")])],1),t._v(" "),n("migu-row",{attrs:{align:"center"}},[n("migu-col",{attrs:{span:"8"}},[t._v("center")]),t._v(" "),n("migu-col",{attrs:{span:"8"}},[t._v("center")])],1),t._v(" "),n("migu-row",{attrs:{align:"right"}},[n("migu-col",{attrs:{span:"8"}},[t._v("right")]),t._v(" "),n("migu-col",{attrs:{span:"8"}},[t._v("right")])],1)],1)}),[],!1,null,"145616fb",null);e.default=c.exports}}]);