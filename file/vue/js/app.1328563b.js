(function(e){function t(t){for(var a,r,c=t[0],i=t[1],l=t[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello",staticStyle:{"padding-top":"10px"}},[n("a-row",{attrs:{type:"flex",justify:"center"}},[n("a-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[e._v("总控制")]),n("a-col",{attrs:{span:12}},[n("a-input",{on:{change:e.totalControl},model:{value:e.totalValue,callback:function(t){e.totalValue=t},expression:"totalValue"}})],1),n("a-col",{attrs:{span:2,push:1}},[n("a-button",{attrs:{loading:e.loading},on:{click:e.start}},[e._v("开始")])],1),n("a-col",{staticStyle:{"margin-left":"5px"},attrs:{span:1,push:1}},[n("a-button",{on:{click:e.openFile}},[e._v("增加文件")])],1)],1),n("div",{staticStyle:{"max-height":"80vh","overflow-y":"auto"}},[n("a-table",{staticStyle:{"padding-top":"10px"},attrs:{columns:e.columns,dataSource:e.files,pagination:!1},scopedSlots:e._u([{key:"code",fn:function(t,a){return n("span",{},[n("a-input",{model:{value:a.code,callback:function(t){e.$set(a,"code",t)},expression:"record.code"}})],1)}},{key:"mode",fn:function(t,a){return n("span",{},[n("a-radio-group",{attrs:{name:"radioGroup",defaultValue:t},model:{value:a.mode,callback:function(t){e.$set(a,"mode",t)},expression:"record.mode"}},[n("a-radio",{attrs:{value:"encode"}},[e._v("加密")]),n("a-radio",{attrs:{value:"decode"}},[e._v("解密")])],1)],1)}}])})],1),n("div",{staticStyle:{position:"absolute","user-select":"none",bottom:"0","line-height":"60px",left:"50%",transform:"translateX(-50%)",cursor:"pointer"},on:{click:e.help}},[e._v("请开发者喝咖啡")])],1)},c=[],i=(n("c740"),n("caad"),n("d81d"),n("b0c0"),n("2532"),n("2909")),l=(n("d3b7"),n("25f0"),"xiaou-file-");function d(){}function u(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=utools.db.get("".concat(l).concat(e));return console.log(n),!!n&&(t?n.data:n)}function f(e,t){var n,a=u(e,!1);n=utools.db.put({_id:"".concat(l).concat(e),data:t,_rev:a._rev}),console.log("update"+n.toString())}d.playPromptTone=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Audio;if(n.loop=!1,t){n.play();var a=!0;n.addEventListener("ended",(function(){a&&(n.src="https://xiaou520.gitee.io/sound/".concat(e),n.play(),a=!1)}),!1)}else n.src="https://xiaou520.gitee.io/sound/".concat(e),n.play()},d.isNewVersion=function(){var e=window.pluginInfo;return console.log(e),u("version")!==e.version?(d.playPromptTone("update.wav"),f("version",e.version),window.createUpdateWindow(),!0):(console.log("false"),!1)};var j=d,b=[{title:"文件名",dataIndex:"name",key:"name"},{title:"密码",dataIndex:"code",key:"code",scopedSlots:{customRender:"code"}},{title:"模式",dataIndex:"mode",key:"mode",scopedSlots:{customRender:"mode"}},{title:"状态",dataIndex:"status",key:"status"}],p={name:"HelloWorld",data:function(){return{columns:b,files:[],totalValue:"",loading:!1}},created:function(){var e=this;utools.onPluginReady((function(){j.isNewVersion()})),utools.onPluginEnter((function(t){var n=t.code,a=(t.type,t.payload);console.log("11111111111111"),e.files=[],"file"===n&&e.filePathHandler(a)}))},methods:{filePathHandler:function(e){var t;(t=this.files).push.apply(t,Object(i["a"])(e.map((function(e){var t={key:"t".concat(Date.now()),name:e.name,path:e.path,code:"",status:"未完成"};return t.mode=e.name.includes(".xu")?"decode":"encode",t}))))},openFile:function(){var e=window.openFile();e?this.filePathHandler(e):this.$message.warning("未选择文件")},start:function(){var e=this;-1===this.files.findIndex((function(e){return""===e.code}))?this.files.map((function(t,n){if("encode"===t.mode){var a=t.code.MD5(16);window.xencode("aes-128-cbc",t.path,a,t.code.MD5(),(function(t){e.files[n].status=t})).then((function(t){e.files[n].status=t}))}else{var s=t.code.MD5(16);window.xdecode("aes-128-cbc",t.path,s,t.code.MD5(),(function(t){e.files[n].status=t})).then((function(t){e.files[n].status=t}))}})):this.$message.warning("有密码没有输入请检查")},help:function(){window.openUrl("https://yuanliao.info/d/1364/21")},totalControl:function(){var e=this;this.files.map((function(t){t.code=e.totalValue}))}}},h=p,m=n("2877"),v=Object(m["a"])(h,r,c,!1,null,"613ab56e",null),y=v.exports,g={name:"App",components:{HelloWorld:y}},k=g,w=Object(m["a"])(k,s,o,!1,null,null,null),x=w.exports,z=(n("7bff"),n("202f"),n("f23d"));a["a"].config.productionTip=!1,a["a"].use(z["a"]),new a["a"]({render:function(e){return e(x)}}).$mount("#app")},"7bff":function(e,t,n){n("d3b7"),n("25f0"),String.prototype.MD5=function(e){var t=this;function n(e,t){return e<<t|e>>>32-t}function a(e,t){var n,a,s,o,r;return s=2147483648&e,o=2147483648&t,n=1073741824&e,a=1073741824&t,r=(1073741823&e)+(1073741823&t),n&a?2147483648^r^s^o:n|a?1073741824&r?3221225472^r^s^o:1073741824^r^s^o:r^s^o}function s(e,t,n){return e&t|~e&n}function o(e,t,n){return e&n|t&~n}function r(e,t,n){return e^t^n}function c(e,t,n){return t^(e|~n)}function i(e,t,o,r,c,i,l){return e=a(e,a(a(s(t,o,r),c),l)),a(n(e,i),t)}function l(e,t,s,r,c,i,l){return e=a(e,a(a(o(t,s,r),c),l)),a(n(e,i),t)}function d(e,t,s,o,c,i,l){return e=a(e,a(a(r(t,s,o),c),l)),a(n(e,i),t)}function u(e,t,s,o,r,i,l){return e=a(e,a(a(c(t,s,o),r),l)),a(n(e,i),t)}function f(e){var t,n=e.length,a=n+8,s=(a-a%64)/64,o=16*(s+1),r=Array(o-1),c=0,i=0;while(i<n)t=(i-i%4)/4,c=i%4*8,r[t]=r[t]|e.charCodeAt(i)<<c,i++;return t=(i-i%4)/4,c=i%4*8,r[t]=r[t]|128<<c,r[o-2]=n<<3,r[o-1]=n>>>29,r}function j(e){var t,n,a="",s="";for(n=0;n<=3;n++)t=e>>>8*n&255,s="0"+t.toString(16),a+=s.substr(s.length-2,2);return a}var b,p,h,m,v,y,g,k,w,x=Array(),z=7,_=12,S=17,O=22,P=5,M=9,D=14,V=20,$=4,E=11,H=16,I=23,T=6,A=10,C=15,F=21;for(x=f(t),y=1732584193,g=4023233417,k=2562383102,w=271733878,b=0;b<x.length;b+=16)p=y,h=g,m=k,v=w,y=i(y,g,k,w,x[b+0],z,3614090360),w=i(w,y,g,k,x[b+1],_,3905402710),k=i(k,w,y,g,x[b+2],S,606105819),g=i(g,k,w,y,x[b+3],O,3250441966),y=i(y,g,k,w,x[b+4],z,4118548399),w=i(w,y,g,k,x[b+5],_,1200080426),k=i(k,w,y,g,x[b+6],S,2821735955),g=i(g,k,w,y,x[b+7],O,4249261313),y=i(y,g,k,w,x[b+8],z,1770035416),w=i(w,y,g,k,x[b+9],_,2336552879),k=i(k,w,y,g,x[b+10],S,4294925233),g=i(g,k,w,y,x[b+11],O,2304563134),y=i(y,g,k,w,x[b+12],z,1804603682),w=i(w,y,g,k,x[b+13],_,4254626195),k=i(k,w,y,g,x[b+14],S,2792965006),g=i(g,k,w,y,x[b+15],O,1236535329),y=l(y,g,k,w,x[b+1],P,4129170786),w=l(w,y,g,k,x[b+6],M,3225465664),k=l(k,w,y,g,x[b+11],D,643717713),g=l(g,k,w,y,x[b+0],V,3921069994),y=l(y,g,k,w,x[b+5],P,3593408605),w=l(w,y,g,k,x[b+10],M,38016083),k=l(k,w,y,g,x[b+15],D,3634488961),g=l(g,k,w,y,x[b+4],V,3889429448),y=l(y,g,k,w,x[b+9],P,568446438),w=l(w,y,g,k,x[b+14],M,3275163606),k=l(k,w,y,g,x[b+3],D,4107603335),g=l(g,k,w,y,x[b+8],V,1163531501),y=l(y,g,k,w,x[b+13],P,2850285829),w=l(w,y,g,k,x[b+2],M,4243563512),k=l(k,w,y,g,x[b+7],D,1735328473),g=l(g,k,w,y,x[b+12],V,2368359562),y=d(y,g,k,w,x[b+5],$,4294588738),w=d(w,y,g,k,x[b+8],E,2272392833),k=d(k,w,y,g,x[b+11],H,1839030562),g=d(g,k,w,y,x[b+14],I,4259657740),y=d(y,g,k,w,x[b+1],$,2763975236),w=d(w,y,g,k,x[b+4],E,1272893353),k=d(k,w,y,g,x[b+7],H,4139469664),g=d(g,k,w,y,x[b+10],I,3200236656),y=d(y,g,k,w,x[b+13],$,681279174),w=d(w,y,g,k,x[b+0],E,3936430074),k=d(k,w,y,g,x[b+3],H,3572445317),g=d(g,k,w,y,x[b+6],I,76029189),y=d(y,g,k,w,x[b+9],$,3654602809),w=d(w,y,g,k,x[b+12],E,3873151461),k=d(k,w,y,g,x[b+15],H,530742520),g=d(g,k,w,y,x[b+2],I,3299628645),y=u(y,g,k,w,x[b+0],T,4096336452),w=u(w,y,g,k,x[b+7],A,1126891415),k=u(k,w,y,g,x[b+14],C,2878612391),g=u(g,k,w,y,x[b+5],F,4237533241),y=u(y,g,k,w,x[b+12],T,1700485571),w=u(w,y,g,k,x[b+3],A,2399980690),k=u(k,w,y,g,x[b+10],C,4293915773),g=u(g,k,w,y,x[b+1],F,2240044497),y=u(y,g,k,w,x[b+8],T,1873313359),w=u(w,y,g,k,x[b+15],A,4264355552),k=u(k,w,y,g,x[b+6],C,2734768916),g=u(g,k,w,y,x[b+13],F,1309151649),y=u(y,g,k,w,x[b+4],T,4149444226),w=u(w,y,g,k,x[b+11],A,3174756917),k=u(k,w,y,g,x[b+2],C,718787259),g=u(g,k,w,y,x[b+9],F,3951481745),y=a(y,p),g=a(g,h),k=a(k,m),w=a(w,v);return 32==e?j(y)+j(g)+j(k)+j(w):j(g)+j(k)}}});