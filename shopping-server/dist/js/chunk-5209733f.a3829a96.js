(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5209733f"],{1276:function(e,t,r){"use strict";var a=r("d784"),o=r("44e7"),n=r("825a"),s=r("1d80"),i=r("4840"),l=r("8aa5"),c=r("50c4"),d=r("14c3"),u=r("9263"),p=r("d039"),g=[].push,m=Math.min,f=4294967295,h=!p((function(){return!RegExp(f,"y")}));a("split",2,(function(e,t,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var a=String(s(this)),n=void 0===r?f:r>>>0;if(0===n)return[];if(void 0===e)return[a];if(!o(e))return t.call(a,e,n);var i,l,c,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,h=new RegExp(e.source,p+"g");while(i=u.call(h,a)){if(l=h.lastIndex,l>m&&(d.push(a.slice(m,i.index)),i.length>1&&i.index<a.length&&g.apply(d,i.slice(1)),c=i[0].length,m=l,d.length>=n))break;h.lastIndex===i.index&&h.lastIndex++}return m===a.length?!c&&h.test("")||d.push(""):d.push(a.slice(m)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var o=s(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,o,r):a.call(String(o),t,r)},function(e,o){var s=r(a,e,this,o,a!==t);if(s.done)return s.value;var u=n(e),p=String(this),g=i(u,RegExp),v=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),x=new g(h?u:"^(?:"+u.source+")",b),_=void 0===o?f:o>>>0;if(0===_)return[];if(0===p.length)return null===d(x,p)?[p]:[];var w=0,y=0,G=[];while(y<p.length){x.lastIndex=h?y:0;var R,E=d(x,h?p:p.slice(y));if(null===E||(R=m(c(x.lastIndex+(h?0:y)),p.length))===w)y=l(p,y,v);else{if(G.push(p.slice(w,y)),G.length===_)return G;for(var F=1;F<=E.length-1;F++)if(G.push(E[F]),G.length===_)return G;y=w=R}}return G.push(p.slice(w)),G}]}),!h)},"14c3":function(e,t,r){var a=r("c6b6"),o=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var n=r.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"44e7":function(e,t,r){var a=r("861d"),o=r("c6b6"),n=r("b622"),s=n("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==o(e))}},"6a90":function(e,t,r){},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9001:function(e,t,r){"use strict";var a=r("6a90"),o=r.n(a);o.a},9263:function(e,t,r){"use strict";var a=r("ad6d"),o=r("9f7f"),n=RegExp.prototype.exec,s=String.prototype.replace,i=n,l=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=o.UNSUPPORTED_Y||o.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=l||d||c;u&&(i=function(e){var t,r,o,i,u=this,p=c&&u.sticky,g=a.call(u),m=u.source,f=0,h=e;return p&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),h=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(m="(?: "+m+")",h=" "+h,f++),r=new RegExp("^(?:"+m+")",g)),d&&(r=new RegExp("^"+m+"$(?!\\s)",g)),l&&(t=u.lastIndex),o=n.call(p?r:u,h),p?o?(o.input=o.input.slice(f),o[0]=o[0].slice(f),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:l&&o&&(u.lastIndex=u.global?o.index+o[0].length:t),d&&o&&o.length>1&&s.call(o[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),e.exports=i},"9f7f":function(e,t,r){"use strict";var a=r("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,r){"use strict";var a=r("23e7"),o=r("23cb"),n=r("a691"),s=r("50c4"),i=r("7b0b"),l=r("65f0"),c=r("8418"),d=r("1dde"),u=r("ae40"),p=d("splice"),g=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!g},{splice:function(e,t){var r,a,d,u,p,g,b=i(this),x=s(b.length),_=o(e,x),w=arguments.length;if(0===w?r=a=0:1===w?(r=0,a=x-_):(r=w-2,a=f(m(n(t),0),x-_)),x+r-a>h)throw TypeError(v);for(d=l(b,a),u=0;u<a;u++)p=_+u,p in b&&c(d,u,b[p]);if(d.length=a,r<a){for(u=_;u<x-a;u++)p=u+a,g=u+r,p in b?b[g]=b[p]:delete b[g];for(u=x;u>x-a+r;u--)delete b[u-1]}else if(r>a)for(u=x-a;u>_;u--)p=u+a-1,g=u+r-1,p in b?b[g]=b[p]:delete b[g];for(u=0;u<r;u++)b[u+_]=arguments[u+2];return b.length=x-a+r,d}})},a870:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",[e._v("添加商品")])],1),r("el-card",{staticClass:"box-card"},[r("el-row",[r("el-col",[r("el-alert",{attrs:{title:"添加商品信息",center:"",closable:!1,type:"info","show-icon":""}})],1)],1),r("el-steps",{staticClass:"progress",attrs:{"align-center":"",space:200,active:e.selectedActive-0,"finish-status":"success"}},[r("el-step",{attrs:{title:"基本信息"}}),r("el-step",{attrs:{title:"商品参数"}}),r("el-step",{attrs:{title:"商品属性"}}),r("el-step",{attrs:{title:"商品图片"}}),r("el-step",{attrs:{title:"商品内容"}}),r("el-step",{attrs:{title:"完成"}})],1),r("el-form",{ref:"addGoodsFormRef",attrs:{"label-position":"top",model:e.addGoodsForm,rules:e.addGoodsFormRules}},[r("el-tabs",{attrs:{type:"border-card","tab-position":"left","before-leave":e.beforeLeaveTabs},on:{"tab-click":e.changeTabs},model:{value:e.selectedActive,callback:function(t){e.selectedActive=t},expression:"selectedActive"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{model:{value:e.addGoodsForm.goods_name,callback:function(t){e.$set(e.addGoodsForm,"goods_name",t)},expression:"addGoodsForm.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[r("el-input",{model:{value:e.addGoodsForm.goods_price,callback:function(t){e.$set(e.addGoodsForm,"goods_price",t)},expression:"addGoodsForm.goods_price"}})],1),r("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[r("el-input",{model:{value:e.addGoodsForm.goods_weight,callback:function(t){e.$set(e.addGoodsForm,"goods_weight",t)},expression:"addGoodsForm.goods_weight"}})],1),r("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[r("el-input",{model:{value:e.addGoodsForm.goods_number,callback:function(t){e.$set(e.addGoodsForm,"goods_number",t)},expression:"addGoodsForm.goods_number"}})],1),r("el-form-item",{attrs:{label:"商品分类",prop:"cat_name"}},[r("el-cascader",{attrs:{options:e.goodsCatOptions,props:e.goodsCatProps,clearable:""},on:{change:e.goodsCatChange},model:{value:e.addGoodsForm.goods_cat,callback:function(t){e.$set(e.addGoodsForm,"goods_cat",t)},expression:"addGoodsForm.goods_cat"}})],1)],1),r("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyParamsList,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-checkbox-group",{attrs:{size:"small"},model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return r("el-checkbox",{key:t,staticClass:"params",attrs:{label:e,border:""}})})),1)],1)})),1),r("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyParamsList,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-input",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}})],1)})),1),r("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[r("el-form-item",[r("el-upload",{staticClass:"upload-demo",staticStyle:{width:"400px"},attrs:{action:e.uploadURL,"on-preview":e.handlePreview,"on-remove":e.handleRemove,headers:e.headerObj,"list-type":"picture","on-success":e.handleSuccess}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),r("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[r("quill-editor",{staticClass:"ql-editor",model:{value:e.addGoodsForm.goods_introduce,callback:function(t){e.$set(e.addGoodsForm,"goods_introduce",t)},expression:"addGoodsForm.goods_introduce"}}),r("el-button",{staticStyle:{margin:"15px"},attrs:{type:"primary"},on:{click:e.addGoods}},[e._v("添加商品")])],1)],1)],1)],1),r("el-dialog",{attrs:{title:"图片预览",visible:e.isPreviewVisible,width:"50%"},on:{"update:visible":function(t){e.isPreviewVisible=t}}},[r("el-image",{staticStyle:{width:"100%"},attrs:{src:e.previewPath}})],1)],1)},o=[],n=(r("c740"),r("4160"),r("a15b"),r("a434"),r("ac1f"),r("1276"),r("159b"),r("96cf"),r("1da1")),s=r("60bb"),i=r.n(s),l={data:function(){return{addGoodsForm:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addGoodsFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}]},goodsCatOptions:[],goodsCatProps:{expandTrigger:"hover",label:"cat_name",value:"cat_id",children:"children"},selectedActive:"0",manyParamsList:[],onlyParamsList:[],goodsParamsValsList:[],selectedParamsList:[],uploadURL:"http://127.0.0.1:8888/api/private/v1/upload",headerObj:{Authorization:window.sessionStorage.getItem("token")},isPreviewVisible:!1,previewPath:""}},methods:{getGoodsCatList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取数据失败"));case 6:e.goodsCatOptions=a.data;case 7:case"end":return t.stop()}}),t)})))()},goodsCatChange:function(){3!==this.addGoodsForm.goods_cat.length&&(this.addGoodsForm.goods_cat=[])},beforeLeaveTabs:function(e,t){if("0"===t&&3!==this.addGoodsForm.goods_cat.length)return this.$message.error("请先选择商品分类！"),!1},getManyGoodsInfo:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories/".concat(e.goodsCateId,"/attributes"),{params:{sel:"many"}});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取商品参数失败"));case 6:a.data.forEach((function(e){e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(" ")})),e.manyParamsList=a.data;case 8:case"end":return t.stop()}}),t)})))()},getOnlyGoodsInfo:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories/".concat(e.goodsCateId,"/attributes"),{params:{sel:"only"}});case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取商品参数失败"));case 6:e.onlyParamsList=a.data;case 7:case"end":return t.stop()}}),t)})))()},changeTabs:function(){"1"===this.selectedActive?this.getManyGoodsInfo():"2"===this.selectedActive&&this.getOnlyGoodsInfo()},handleRemove:function(e){var t=e.response.data.tmp_path,r=this.addGoodsForm.pics.findIndex((function(e){return e.pic===t}));this.addGoodsForm.pics.splice(r,1)},handlePreview:function(e){this.previewPath=e.response.data.url,this.isPreviewVisible=!0},handleSuccess:function(e,t,r){var a={pic:e.data.tmp_path};this.addGoodsForm.pics.push(a)},addGoods:function(){var e=this;this.$refs.addGoodsFormRef.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请填写必要的信息"));case 2:return a=i.a.cloneDeep(e.addGoodsForm),a.goods_cat=a.goods_cat.join(","),e.manyParamsList.forEach((function(t){var r={attr_id:t.attr_id,attr_vals:t.attr_vals};e.addGoodsForm.attrs.push(r)})),e.onlyParamsList.forEach((function(t){var r={attr_id:t.attr_id,attr_vals:t.attr_vals};e.addGoodsForm.attrs.push(r)})),a.attrs=e.addGoodsForm.attrs,t.next=9,e.$http.post("goods",a);case 9:if(o=t.sent,n=o.data,201===n.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error("添加商品失败"));case 13:e.$message.success("添加商品成功"),e.$router.push("/goods");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},created:function(){this.getGoodsCatList()},computed:{goodsCateId:function(){return 3===this.addGoodsForm.goods_cat.length?this.addGoodsForm.goods_cat[2]:null}}},c=l,d=(r("9001"),r("2877")),u=Object(d["a"])(c,a,o,!1,null,null,null);t["default"]=u.exports},ac1f:function(e,t,r){"use strict";var a=r("23e7"),o=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},c740:function(e,t,r){"use strict";var a=r("23e7"),o=r("b727").findIndex,n=r("44d2"),s=r("ae40"),i="findIndex",l=!0,c=s(i);i in[]&&Array(1)[i]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!c},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(i)},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),o=r("d039"),n=r("b622"),s=r("9263"),i=r("9112"),l=n("species"),c=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=n("replace"),p=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),g=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,u){var m=n(e),f=!o((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),h=f&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return t=!0,null},r[m](""),!t}));if(!f||!h||"replace"===e&&(!c||!d||p)||"split"===e&&!g){var v=/./[m],b=r(m,""[e],(function(e,t,r,a,o){return t.exec===s?f&&!o?{done:!0,value:v.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=b[0],_=b[1];a(String.prototype,e,x),a(RegExp.prototype,m,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}u&&i(RegExp.prototype[m],"sham",!0)}}}]);
//# sourceMappingURL=chunk-5209733f.a3829a96.js.map