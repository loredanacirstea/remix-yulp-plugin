(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/remix-yulp-plugin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0175":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("3b8d"));a("a481");var i=a("2f62"),s=n(a("dd30")),o={components:{DeployedContract:s.default},data:function(){return{contractSelect:null,deployArgs:"",deployAddress:null,txGasLimit:4e6,txValue:0,deployedContracts:[],currentError:null}},computed:(0,i.mapState)({compiled:function(t){return t.compiled},shortFileName:function(t){return t.fileName.replace("browser/","")}}),watch:{shortFileName:function(){this.contractSelect!==this.shortFileName&&(this.contractSelect=this.shortFileName,this.reset())},compiled:function(){this.reset()}},methods:{reset:function(){this.deployAddress=null,this.deployedContracts=[],this.currentError=null},deploy:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,a,n,r,i,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.compiled,a=this.deployArgs,n=this.$store.state.remixclient,t.next=4,n.udapp.getAccounts().catch(console.log);case 4:return r=t.sent,i=a&&"0x"===a.slice(0,2)?a.slice(2):a,s="0x".concat(e.evm.bytecode.object).concat(i),o={from:r[0],data:s,gasLimit:4e6,value:"0",useCall:!1},console.log("transaction",o),t.next=11,n.udapp.sendTransaction(o);case 11:c=t.sent,console.log("receipt",c),c.error?(this.currentError=c.error,this.deployedContracts=[{receipt:c,abi:[]}]):(this.currentError=null,this.deployedContracts=[{receipt:c,abi:e.abi}]);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=o},1286:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["compiled"]};e.default=n},"13d0":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("ContractFunction",{attrs:{abi:t.calldataAbi,address:t.address,txGasLimit:t.txGasLimit,txValue:t.txValue}}),t._l(t.abi,(function(e,n){return a("v-layout",{key:n},["function"===e.type?a("v-flex",{attrs:{xs12:""}},[a("ContractFunction",{attrs:{abi:e,address:t.address,txGasLimit:t.txGasLimit,txValue:t.txValue}})],1):t._e()],1)}))],2)},r=[]},2194:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getSignatureString=r,e.getSignature=i,e.getTransaction=s,a("7f7f");var n=a("e7ea");function r(t){var e=(t.inputs||[]).map((function(t){return t.type}));return"".concat(t.name||"","(").concat(e.join(","),")")}function i(t){return n.ethers.utils.id(t).slice(0,10)}function s(t,e){var a=n.ethers.utils.defaultAbiCoder,s=i(r(t)),o=e.length>0?a.encode(t.inputs.map((function(t){return t.type})),e):"";return"".concat(s).concat(o.slice(2))}},"23be":function(t,e,a){"use strict";a.r(e);var n=a("ef3c"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"24dc":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{wrap:""}},[a("v-layout",{staticStyle:{"padding-left":"20px","padding-top":"20px"},attrs:{row:"",wrap:"","align-baseline":""}},[a("v-flex",{attrs:{xs2:""}},[a("span",{staticClass:"caption text-xs-center"},[t._v("Gas limit")])]),a("v-flex",{attrs:{xs6:"","offset-xs1":""}},[a("v-text-field",{staticClass:"body-1",attrs:{solo:"",placeholder:"0"},model:{value:t.txGasLimit,callback:function(e){t.txGasLimit=e},expression:"txGasLimit"}})],1),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs2:""}},[a("span",{staticClass:"caption text-xs-center"},[t._v("Value")])]),a("v-flex",{attrs:{xs6:"","offset-xs1":""}},[a("v-text-field",{staticClass:"body-1",attrs:{solo:"",placeholder:"0"},model:{value:t.txValue,callback:function(e){t.txValue=e},expression:"txValue"}})],1),a("v-flex",{attrs:{xs2:""}})],1),t.compiled?a("v-layout",{staticStyle:{"padding-left":"10px","padding-top":"10px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:""}},[a("v-select",{staticClass:"body-1",attrs:{items:[t.shortFileName],solo:""},model:{value:t.contractSelect,callback:function(e){t.contractSelect=e},expression:"contractSelect"}})],1),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs3:""}},[a("v-btn",{staticStyle:{"margin-left":"0"},attrs:{dark:"",color:"#E89F3C"},on:{click:t.deploy}},[t._v("Deploy")])],1),a("v-flex",{attrs:{xs5:"","offset-xs1":""}},[a("v-text-field",{staticClass:"body-1",attrs:{solo:"",placeholder:"0x"},model:{value:t.deployArgs,callback:function(e){t.deployArgs=e},expression:"deployArgs"}})],1)],1):t._e(),a("v-divider"),t.compiled?a("v-layout",{staticStyle:{"padding-left":"20px","padding-top":"20px"},attrs:{row:"",wrap:""}},[t.currentError?a("v-flex",{attrs:{xs10:""}},[a("h4",[t._v("Errors")]),t._v("\n      "+t._s(t.currentError.error)+". "+t._s(t.currentError.errorType)+"\n    ")]):t._e(),0===t.deployedContracts.length?a("v-flex",{attrs:{xs9:""}},[a("p",{staticClass:"subheading"},[t._v("Activate the Deploy & Run Transactions plugin.")]),a("p",{staticClass:"caption"},[t._v("Currently you have no contract instances to interact with.")])]):t._l(t.deployedContracts,(function(e,n){return a("v-flex",{key:n,attrs:{xs12:""}},[a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Address: "+t._s(e.receipt.createdAddress))]),a("p",[t._v("TxHash: "+t._s(e.receipt.transactionHash))])]),a("DeployedContract",{key:"contract_"+n,attrs:{abi:e.abi,address:e.receipt.createdAddress,txGasLimit:t.txGasLimit,txValue:t.txValue}}),a("v-divider")],1)}))],2):t._e(),t.compiled?t._e():a("v-layout",{staticStyle:{"padding-left":"20px","padding-top":"20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("\n        No contracts compiled\n      ")])])],1)],1)},r=[]},"282c":function(t,e,a){"use strict";a.r(e);var n=a("8a95"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"2c07":function(t,e,a){"use strict";a.r(e);var n=a("1286"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},3114:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{staticStyle:{"padding-left":"20px"},attrs:{xs12:""}},[t.compiled.errors?a("v-flex",{attrs:{xs10:""}},[a("h3",[t._v("Errors")]),t._v("\n    "+t._s(t.compiled.errors.map((function(t){return t.formattedMessage||t.message})))+"\n  ")]):t._e(),t.compiled.yul?a("v-flex",{attrs:{xs10:""}},[a("h3",[t._v("Yul Code")]),a("div",[a("v-textarea",{staticStyle:{width:"100%","font-size":"12px"},attrs:{rows:"25"},model:{value:t.compiled.yul,callback:function(e){t.$set(t.compiled,"yul",e)},expression:"compiled.yul"}})],1)]):t._e(),t.compiled.evm?a("v-flex",{attrs:{xs10:""}},[a("h3",[t._v("("),a("small",[t._v(t._s(Math.round(t.compiled.evm.bytecode.object.length/2))+" bytes")]),t._v(")")]),a("v-textarea",{staticStyle:{"margin-top":"10px",border:"0px","font-size":"12px"},attrs:{rows:"5"},model:{value:t.compiled.evm.bytecode.object,callback:function(e){t.$set(t.compiled.evm.bytecode,"object",e)},expression:"compiled.evm.bytecode.object"}}),a("v-textarea",{staticStyle:{"margin-top":"20px",border:"0px","margin-bottom":"40px","font-size":"12px"},attrs:{rows:"5"},model:{value:t.compiled.evm.bytecode.opcodes,callback:function(e){t.$set(t.compiled.evm.bytecode,"opcodes",e)},expression:"compiled.evm.bytecode.opcodes"}})],1):t._e()],1)},r=[]},3521:function(t,e,a){"use strict";a.r(e);var n=a("f862"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"38cd":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("662f")),i={components:{ContractFunction:r.default},props:["abi","address","txGasLimit","txValue"],data:function(){return{calldataAbi:{name:"Calldata",stateMutability:"payable",calldata:!0,inputs:[{name:"calldata",type:"bytes"}],outputs:[{name:"response",type:"bytes"}]}}}};e.default=i},"3dfd":function(t,e,a){"use strict";a.r(e);var n=a("7ce6"),r=a("23be");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var s=a("2877"),o=a("6544"),c=a.n(o),l=a("7496"),u=a("549c"),f=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=f.exports,c()(f,{VApp:l["a"],VContent:u["a"]})},"402c":function(t,e,a){"use strict";var n=a("4ea4"),r=n(a("2b0e")),i=n(a("bb71"));a("da64"),r.default.use(i.default,{iconfont:"fa"})},4380:function(t,e,a){"use strict";a.r(e);var n=a("3114"),r=a("2c07");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var s=a("2877"),o=a("6544"),c=a.n(o),l=a("0e8f"),u=a("a844"),f=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=f.exports,c()(f,{VFlex:l["a"],VTextarea:u["a"]})},"522c":function(t,e,a){"use strict";var n=a("b3e0"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";var n=a("4ea4");a("cadf"),a("551c"),a("f751"),a("097d");var r=n(a("2b0e")),i=n(a("bc3a")),s=n(a("a7fe"));a("402c");var o=n(a("3dfd")),c=n(a("c0d6"));a("d5e8"),a("15f5"),r.default.config.productionTip=!1,r.default.use(s.default,i.default),new r.default({store:c.default,render:function(t){return t(o.default)}}).$mount("#app")},"5c4b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("FileSelect")],1),a("v-flex",{attrs:{xs10:""}},[a("v-btn",{staticClass:"body-2 font-weight-medium",attrs:{block:"",dark:"",color:"#2F3E4E"},on:{click:function(e){return t.$emit("onCompile")}}},[a("v-icon",{attrs:{small:"",left:"",dark:""}},[t._v("fa-sync")]),a("span",{staticClass:"text-capitalize"},[t._v("Compile")]),a("span",{staticClass:"text-none",staticStyle:{"padding-left":"6px"}},[t._v(t._s(t.shortFileName))])],1)],1),t.compiled?a("v-flex",{attrs:{xs11:""}},[a("CompilationDetails",{attrs:{compiled:t.compiled}})],1):t._e()],1)],1)},r=[]},"615c":function(t,e,a){"use strict";a.r(e);var n=a("93dc"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"662f":function(t,e,a){"use strict";a.r(e);var n=a("f485"),r=a("282c");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var s=a("2877"),o=a("6544"),c=a.n(o),l=a("8336"),u=a("ac7c"),f=a("0e8f"),d=a("a722"),p=a("2677"),v=a("a844"),m=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=m.exports,c()(m,{VBtn:l["a"],VCheckbox:u["a"],VFlex:f["a"],VLayout:d["a"],VTextField:p["a"],VTextarea:v["a"]})},7727:function(t,e,a){"use strict";var n=a("9d0e"),r=a.n(n);r.a},"79aaf":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticStyle:{"margin-left":"35px"},attrs:{xs9:""}},[a("v-select",{staticClass:"body-1",attrs:{items:t.examples,solo:"","item-value":"id","item-text":"name",placeholder:"Load example contract"},on:{change:t.onSelect},model:{value:t.contractSelect,callback:function(e){t.contractSelect=e},expression:"contractSelect"}})],1)],1)},r=[]},"7ce6":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("PluginRoot")],1)],1)},r=[]},"8a95":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("6762"),a("2fdb"),a("96cf");var r=n(a("3b8d"));a("7f7f");var i=a("2194"),s={props:["abi","address","txGasLimit","txValue"],data:function(){return{functionArgs:"",errorMessages:[],output:null,colorMap:{payable:"#E74C3C",view:"#3498DB",pure:"#3498DB",nonpayable:"#E89F3C"},calldataStateMutability:"payable"}},methods:{inputsStr:function(t){return t.map((function(t){return"".concat(t.type," ").concat(t.name)})).join(", ")},argsValueCheck:function(t){var e=null;try{e=JSON.parse(t)}catch(a){}if(!e)try{e=JSON.parse("[".concat(t,"]"))}catch(a){}if(!e)try{e=JSON.parse('["'.concat(t,'"]'))}catch(a){}return e?(e instanceof Array||(e=[e]),this.errorMessages=[],e):(this.errorMessages=["Input invalid"],[])},runFunction:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,a,n,r,s,o,c,l,u,f,d,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.remixclient,a=this.abi,n=this.address,r=this.functionArgs,s=this.txGasLimit,o=this.txValue,c=this.calldataStateMutability,t.next=4,e.udapp.getAccounts().catch(console.log);case 4:return l=t.sent,u=!(a.calldata?c:a.stateMutability).includes("payable"),f=a.calldata?r:(0,i.getTransaction)(a,this.argsValueCheck(r)),d={from:l[0],to:n,data:f,gasLimit:s,value:o,useCall:u},console.log("transaction",d),t.next=11,e.udapp.sendTransaction(d);case 11:p=t.sent,console.log("receipt",p),this.output=JSON.stringify(p);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s},"914b":function(t,e,a){"use strict";a.r(e);var n=a("79aaf"),r=a("3521");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var s=a("2877"),o=a("6544"),c=a.n(o),l=a("0e8f"),u=a("a722"),f=a("b56d"),d=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=d.exports,c()(d,{VFlex:l["a"],VLayout:u["a"],VSelect:f["a"]})},"93dc":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a481");var r=a("2f62"),i=n(a("4380")),s=n(a("914b")),o={components:{CompilationDetails:i.default,FileSelect:s.default},computed:(0,r.mapState)({compiled:function(t){return t.compiled},shortFileName:function(t){return t.fileName.replace("browser/","")}}),watch:{shortFileName:function(){this.$emit("onCompile")}}};e.default=o},"9a4a":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[a("swiper-slide",{staticClass:"no-swipe"},[a("v-container",{staticClass:"nopadd"},[a("v-layout",{staticClass:"nomarg",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-left",attrs:{xs7:""}},[a("v-btn",{staticClass:"body-2",attrs:{icon:""},on:{click:t.onGitHub}},[a("v-icon",{attrs:{small:""}},[t._v("fa-info")])],1)],1),a("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[a("v-btn",{staticClass:"nav next body-2",attrs:{slot:"button-next",flat:""},on:{click:t.onSwiperNext},slot:"button-next"},[a("v-icon",{attrs:{small:""}},[t._v("fa-chevron-right")]),a("span",{staticClass:"text-none",staticStyle:{"padding-left":"6px"}},[t._v("Deploy")])],1)],1),a("v-flex",{attrs:{xs12:""}},[a("Compile",{on:{onCompile:t.onCompile}})],1)],1)],1)],1),a("swiper-slide",{staticClass:"no-swipe",staticStyle:{"margin-left":"25px"}},[a("v-container",{staticClass:"nopadd"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-left",attrs:{xs6:""}},[a("v-btn",{staticClass:"nav prev body-2",attrs:{slot:"button-prev",flat:""},on:{click:t.onSwiperPrev},slot:"button-prev"},[a("v-icon",{attrs:{small:""}},[t._v("fa-chevron-left")]),a("span",{staticClass:"text-none",staticStyle:{"padding-left":"6px"}},[t._v("Compile")])],1)],1),a("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[a("v-btn",{staticClass:"nav next body-2",attrs:{flat:""},on:{click:t.onCompile}},[a("v-icon",{attrs:{small:""}},[t._v("fa-sync")]),a("span",{staticClass:"text-none",staticStyle:{"padding-left":"6px"}},[t._v("Recompile")])],1)],1),a("v-flex",{attrs:{xs12:""}},[a("Deploy")],1)],1)],1)],1)],1)},r=[]},"9b2d":function(t,e,a){"use strict";a.r(e);var n=a("9a4a"),r=a("f30b");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("522c");var s=a("2877"),o=a("6544"),c=a.n(o),l=a("8336"),u=a("a523"),f=a("0e8f"),d=a("132d"),p=a("a722"),v=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=v.exports,c()(v,{VBtn:l["a"],VContainer:u["a"],VFlex:f["a"],VIcon:d["a"],VLayout:p["a"]})},"9d0e":function(t,e,a){},a5c5:function(t,e,a){"use strict";a.r(e);var n=a("24dc"),r=a("fd3d");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var s=a("2877"),o=a("6544"),c=a.n(o),l=a("8336"),u=a("ce7e"),f=a("0e8f"),d=a("a722"),p=a("b56d"),v=a("2677"),m=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=m.exports,c()(m,{VBtn:l["a"],VDivider:u["a"],VFlex:f["a"],VLayout:d["a"],VSelect:p["a"],VTextField:v["a"]})},aab3:function(t,e,a){"use strict";a.r(e);var n=a("38cd"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},b3e0:function(t,e,a){},c0d6:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7f7f"),a("96cf");var r=n(a("3b8d")),i=n(a("2b0e")),s=n(a("2f62")),o=a("db5e");i.default.use(s.default);var c=new s.default.Store({state:{remixclient:(0,o.createIframeClient)(),fileName:"",source:"",compiled:{}},mutations:{setState:function(t,e){var a=e.field,n=e.data;t[a]=n}},actions:{setCompiled:function(t,e){var a=t.commit;a("setState",{field:"compiled",data:e})},listenCurrentFile:function(t){var e=t.state,a=t.dispatch,n=e.remixclient;n.fileManager.on("currentFileChanged",(function(t){a("setCurrentFile",t)}))},setCurrentFile:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e,a){var n,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,r=e.commit,i=n.remixclient,a){t.next=6;break}return t.next=5,i.fileManager.getCurrentFile().catch(console.log);case 5:a=t.sent;case 6:if(a){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,i.fileManager.getFile(a).catch(console.log);case 10:s=t.sent,r("setState",{field:"fileName",data:a}),r("setState",{field:"source",data:s});case 13:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),compileFile:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e,a){var n,r,i,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=a.name,i=a.source,s=n.remixclient,o=n.fileName,c={},c[r||o]={content:i},t.abrupt("return",s.call("solidity","compileWithParameters",c,{evmVersion:null,optimize:!0,language:"Yul",version:"0.5.7+commit.6da8b019"}));case 6:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()}});e.default=c},d47c:function(t,e,a){"use strict";a.r(e);var n=a("5c4b"),r=a("615c");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("7727");var s=a("2877"),o=a("6544"),c=a.n(o),l=a("8336"),u=a("0e8f"),f=a("132d"),d=a("a722"),p=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=p.exports,c()(p,{VBtn:l["a"],VFlex:u["a"],VIcon:f["a"],VLayout:d["a"]})},db49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.repoLink=void 0;var n="https://github.com/loredanacirstea/remix-yulp-plugin";e.repoLink=n},dd30:function(t,e,a){"use strict";a.r(e);var n=a("13d0"),r=a("aab3");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var s=a("2877"),o=a("6544"),c=a.n(o),l=a("0e8f"),u=a("a722"),f=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=f.exports,c()(f,{VFlex:l["a"],VLayout:u["a"]})},e1b2:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.abiExtractYulp=e.abiBuildSigsTopics=e.getMatches=void 0,a("4917");var r=n(a("768b"));a("28a5");var i=/case sig"(function )?(.*)\((.*)\)\s(.*)?"/gi,s=/sig"(function )?(.*)\((.*)\)\s(.*)?"/,o=/sig"(function )?(.*)\((.*)\)"/,c=/pure|view|payable/,l=/\((.*)\)/,u=/topic"(event )?(.*)\((.*)\)"/gi,f=/topic"(event )?(.*)\((.*)\)"/,d=function(t,e){var a,n=[];while(null!==(a=e.exec(t)))n.push(a);return n};e.getMatches=d;var p=function(t){return t?t.split(",").map((function(t){return t.trim().split(" ")})).map((function(t){var e={type:t[0]};return"indexed"===t[1]?(e.indexed=!0,e.name=t[2]||""):e.name=t[1]||"",e})):[]},v=function(t){return t||"nonpayable"},m=function(t,e,a,n){return{name:t,type:"function",stateMutability:v(a),inputs:p(e),outputs:p(n)}},x=function(t,e){return{name:t,type:"event",inputs:p(e)}},b=function(t,e){if(!(t instanceof Array))return[];var a=t.map((function(t){var e=(0,r.default)(t,5),a=e[2],n=e[3],i=e[4],s=null,o=null;return i&&(s=i.match(c),s=s?s[0]:null,o=i.match(l),o=o?o[1]:null),m(a,n,s,o)})),n=e.map((function(t){var e=(0,r.default)(t,4),a=e[2],n=e[3];return x(a,n)}));return a.concat(n)},h=function(t,e){var a=t.map((function(t){var e=t.abi.match(s);return e||(e=t.abi.match(o)),e})),n=e.map((function(t){return t.abi.match(f)}));return b(a,n)};e.abiBuildSigsTopics=h;var y=function(t){var e=d(t,i),a=d(t,u);return b(e,a)};e.abiExtractYulp=y},ef3c:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("9b2d")),i={name:"App",components:{PluginRoot:r.default},data:function(){return{}}};e.default=i},f272:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac6a"),a("8615"),a("a481"),a("96cf");var r=n(a("3b8d")),i=n(a("2b0e")),s=a("2f62"),o=n(a("917b")),c=n(a("7212"));a("dfa4");var l=n(a("d47c")),u=n(a("a5c5")),f=a("db49"),d=a("e1b2");i.default.use(c.default);var p={components:{Compile:l.default,Deploy:u.default},data:function(){return{swiperOptions:{noSwiping:!0,noSwipingClass:"no-swipe",loop:!1,slidesPerView:"auto",initialSlide:0},currentSlide:0,github:f.repoLink}},computed:(0,s.mapState)({swiper:function(){return this.$refs.mySwiper.swiper},compiled:function(t){return t.compiled},source:function(t){return t.source}}),mounted:function(){this.setData()},methods:{setData:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.state.remixclient.onload();case 2:this.setRemixFile();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setRemixFile:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("listenCurrentFile"),this.$store.dispatch("setCurrentFile");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSwiperPrev:function(){this.swiper.slidePrev(),this.currentSlide--},onSwiperNext:function(){this.swiper.slideNext(),this.currentSlide++},onGitHub:function(){window.open(this.github,"_blank")},onReload:function(){window.location.reload()},onCompile:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e,a,n,r,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("setCurrentFile");case 2:e=this.source,a=this.fileName,n=null,r=null,i=null,s={errors:[]};try{n=o.default.compile(e),r=o.default.print(n.results)}catch(l){i=[l],s.errors=i}if(i){t.next=20;break}return r=r.replace(/\./g,"_"),t.next=12,this.$store.dispatch("compileFile",{name:a,source:r});case 12:c=t.sent,c=c?c.data:{errors:[{message:"Could not compile."}]},c.contracts&&(s=Object.values(c.contracts)[0],s=Object.values(s)[0]),s.yul=r,s.signatures=n.signatures,s.topics=n.topics,s.abi=(0,d.abiBuildSigsTopics)(n.signatures,n.topics),s.errors=c.errors;case 20:this.$store.dispatch("setCompiled",s);case 21:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=p},f30b:function(t,e,a){"use strict";a.r(e);var n=a("f272"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},f485:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-btn",{staticClass:"text-none",staticStyle:{"text-transform":"none!important","margin-left":"5px"},attrs:{dark:"",color:t.abi.calldata?t.colorMap[t.calldataStateMutability]:t.colorMap[t.abi.stateMutability]},on:{click:t.runFunction}},[t._v("\n      "+t._s(t.abi.name)+"\n    ")])],1),a("v-flex",{attrs:{xs1:""}},[t.abi.calldata?a("v-checkbox",{staticStyle:{"margin-top":"7px","margin-left":"10px"},attrs:{label:"",value:t.calldataStateMutability,color:t.colorMap[t.calldataStateMutability]},on:{change:function(e){t.calldataStateMutability="payable"===t.calldataStateMutability?"view":"payable"}}}):t._e()],1),a("v-flex",{attrs:{xs5:""}},[t.abi.inputs.length>0?a("v-text-field",{staticClass:"body-1",attrs:{solo:"",type:"text",placeholder:t.inputsStr(t.abi.inputs),label:t.inputsStr(t.abi.inputs),hint:t.inputsStr(t.abi.inputs),error:t.errorMessages.length>0,"error-messages":t.errorMessages},on:{input:t.argsValueCheck},model:{value:t.functionArgs,callback:function(e){t.functionArgs=e},expression:"functionArgs"}}):t._e()],1),a("v-flex",{staticStyle:{"margin-left":"20px"},attrs:{xs9:""}},[t.output?a("v-textarea",{staticStyle:{"font-size":"12px"},attrs:{rows:"3"},model:{value:t.output,callback:function(e){t.output=e},expression:"output"}}):t._e()],1)],1)},r=[]},f862:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7f7f"),a("96cf");var r=n(a("3b8d")),i={data:function(){return{contractSelect:null,examples:[{id:0,name:"EmptyContract",url:"https://raw.githubusercontent.com/FuelLabs/yulp/master/examples/EmptyContract.yulp"},{id:1,name:"SimpleStore",url:"https://raw.githubusercontent.com/loredanacirstea/remix-yulp-plugin/master/client/public/examples/SimpleStore.yulp"},{id:2,name:"ERC20",url:"https://raw.githubusercontent.com/loredanacirstea/remix-yulp-plugin/master/client/public/examples/ERC20.yulp"}]}},methods:{onSelect:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var a,n,r,i,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=this.$store.state.remixclient,n=this.examples[e],r=n.name,i=n.url,t.next=4,fetch(i).catch(console.log);case 4:return s=t.sent,t.next=7,s.text().catch(console.log);case 7:if(o=t.sent,o){t.next=10;break}return t.abrupt("return");case 10:return c="browser/".concat(r,"_yulp.sol"),t.next=13,a.fileManager.setFile(c,o);case 13:return t.next=15,a.fileManager.switchFile(c);case 15:return t.next=17,this.$store.dispatch("setCurrentFile",c);case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=i},fd3d:function(t,e,a){"use strict";a.r(e);var n=a("0175"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a}});
//# sourceMappingURL=app.c54e4a84.js.map