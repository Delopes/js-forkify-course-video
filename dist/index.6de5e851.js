function t(t){return t&&t.__esModule?t.default:t}var e,r,n,i,o,a,s=globalThis,c={},u={},l=s.parcelRequire3a11;null==l&&((l=function(t){if(t in c)return c[t].exports;if(t in u){var e=u[t];delete u[t];var r={id:t,exports:{}};return c[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){u[t]=e},s.parcelRequire3a11=l);var f=l.register;f("gKAGC",function(t,e){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r);// eslint-disable-line no-undef
}),f("8fjHJ",function(t,e){var r=l("7xGQO"),n=l("4VzOR");t.exports=l("eGV3v")?function(t,e,i){return r.f(t,e,n(1,i))}:function(t,e,r){return t[e]=r,t}}),f("7xGQO",function(t,e){Object.defineProperty(t.exports,"f",{get:()=>r,set:t=>r=t,enumerable:!0,configurable:!0});var r,n=l("hTqwZ"),i=l("gSPc8"),o=l("grSjT"),a=Object.defineProperty;r=l("eGV3v")?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}}),f("hTqwZ",function(t,e){var r=l("ePzhG");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}}),f("ePzhG",function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}}),f("gSPc8",function(t,e){t.exports=!l("eGV3v")&&!l("k19Az")(function(){return 7!=Object.defineProperty(l("32lI6")("div"),"a",{get:function(){return 7}}).a})}),f("eGV3v",function(t,e){// Thank's IE8 for his funny defineProperty
t.exports=!l("k19Az")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})}),f("k19Az",function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}}),f("32lI6",function(t,e){var r=l("ePzhG"),n=l("2RHPn").document,i=r(n)&&r(n.createElement);t.exports=function(t){return i?n.createElement(t):{}}}),f("2RHPn",function(t,e){// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r);// eslint-disable-line no-undef
}),f("grSjT",function(t,e){// 7.1.1 ToPrimitive(input [, PreferredType])
var r=l("ePzhG");// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(t,e){var n,i;if(!r(t))return t;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t))||"function"==typeof(n=t.valueOf)&&!r(i=n.call(t))||!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}}),f("4VzOR",function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}}),f("fmYHZ",function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}}),f("eg6n7",function(t,e){var r=l("2RHPn").document;t.exports=r&&r.documentElement}),f("9ug1p",function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}}),f("3nfMJ",function(t,e){var r=l("hy9AX"),n=l("aWzlH");// true  -> String#at
// false -> String#codePointAt
t.exports=function(t){return function(e,i){var o,a,s=String(n(e)),c=r(i),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):(o-55296<<10)+(a-56320)+65536}}}),f("hy9AX",function(t,e){// 7.1.4 ToInteger
var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}}),f("aWzlH",function(t,e){// 7.2.1 RequireObjectCoercible(argument)
t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}}),f("c6LP2",function(t,e){var r=l("69BGp"),n=l("9SIfx"),i=l("gmDU6"),o=l("8fjHJ"),a=l("7OGHC"),s=l("aDOty"),c=l("4vtkD"),u=l("1Sb1Y"),f=l("30isl")("iterator"),d=!([].keys&&"next"in[].keys()),h="values",p=function(){return this};t.exports=function(t,e,l,v,g,y,m){s(l,e,v);var _,b,w,x=function(t){return!d&&t in E?E[t]:function(){return new l(this,t)}},k=e+" Iterator",O=g==h,S=!1,E=t.prototype,P=E[f]||E["@@iterator"]||g&&E[g],A=P||x(g),j=g?O?x("entries"):A:void 0,F="Array"==e&&E.entries||P;if(F&&(w=u(F.call(new t)))!==Object.prototype&&w.next&&(// Set @@toStringTag to native iterators
c(w,k,!0),r||"function"==typeof w[f]||o(w,f,p)),O&&P&&P.name!==h&&(S=!0,A=function(){return P.call(this)}),(!r||m)&&(d||S||!E[f])&&o(E,f,A),// Plug for library
a[e]=A,a[k]=p,g){if(_={values:O?A:x(h),keys:y?A:x("keys"),entries:j},m)for(b in _)b in E||i(E,b,_[b]);else n(n.P+n.F*(d||S),e,_)}return _}}),f("69BGp",function(t,e){t.exports=!1}),f("9SIfx",function(t,e){var r=l("2RHPn"),n=l("gKAGC"),i=l("8fjHJ"),o=l("gmDU6"),a=l("1irPL"),s="prototype",c=function(t,e,u){var l,f,d,h,p=t&c.F,v=t&c.G,g=t&c.S,y=t&c.P,m=t&c.B,_=v?r:g?r[e]||(r[e]={}):(r[e]||{})[s],b=v?n:n[e]||(n[e]={}),w=b[s]||(b[s]={});for(l in v&&(u=e),u)// export native or passed
d=(// contains in native
(f=!p&&_&&void 0!==_[l])?_:u)[l],// bind timers to global for call from export context
h=m&&f?a(d,r):y&&"function"==typeof d?a(Function.call,d):d,_&&o(_,l,d,t&c.U),b[l]!=d&&i(b,l,h),y&&w[l]!=d&&(w[l]=d)};r.core=n,// type bitmap
c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c}),f("gmDU6",function(t,e){var r=l("2RHPn"),n=l("8fjHJ"),i=l("f9eqo"),o=l("fmYHZ")("src"),a="toString",s=Function[a],c=(""+s).split(a);l("gKAGC").inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,a,s){var u="function"==typeof a;u&&(i(a,"name")||n(a,"name",e)),t[e]!==a&&(u&&(i(a,o)||n(a,o,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=a:s?t[e]?t[e]=a:n(t,e,a):(delete t[e],n(t,e,a)));// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,a,function(){return"function"==typeof this&&this[o]||s.call(this)})}),f("f9eqo",function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}}),f("1irPL",function(t,e){// optional / simple context binding
var r=l("fvXNy");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}}),f("fvXNy",function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}}),f("7OGHC",function(t,e){t.exports={}}),f("aDOty",function(t,e){var r=l("7Qt87"),n=l("4VzOR"),i=l("4vtkD"),o={};// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
l("8fjHJ")(o,l("30isl")("iterator"),function(){return this}),t.exports=function(t,e,a){t.prototype=r(o,{next:n(1,a)}),i(t,e+" Iterator")}}),f("7Qt87",function(t,e){// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var r=l("hTqwZ"),n=l("hc43m"),i=l("cuwgL"),o=l("Ov4Oz")("IE_PROTO"),a=function(){},s="prototype",c=function(){// Thrash, waste and sodomy: IE GC bug
var t,e=l("32lI6")("iframe"),r=i.length;for(e.style.display="none",l("eg6n7").appendChild(e),e.src="javascript:",// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
(t=e.contentWindow.document).open(),t.write("<script>document.F=Object</script>"),t.close(),c=t.F;r--;)delete c[s][i[r]];return c()};t.exports=Object.create||function(t,e){var i;return null!==t?(a[s]=r(t),i=new a,a[s]=null,// add "__proto__" for Object.getPrototypeOf polyfill
i[o]=t):i=c(),void 0===e?i:n(i,e)}}),f("hc43m",function(t,e){var r=l("7xGQO"),n=l("hTqwZ"),i=l("hl6X9");t.exports=l("eGV3v")?Object.defineProperties:function(t,e){n(t);for(var o,a=i(e),s=a.length,c=0;s>c;)r.f(t,o=a[c++],e[o]);return t}}),f("hl6X9",function(t,e){// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var r=l("97BBJ"),n=l("cuwgL");t.exports=Object.keys||function(t){return r(t,n)}}),f("97BBJ",function(t,e){var r=l("f9eqo"),n=l("iuOlu"),i=l("jlk0e")(!1),o=l("Ov4Oz")("IE_PROTO");t.exports=function(t,e){var a,s=n(t),c=0,u=[];for(a in s)a!=o&&r(s,a)&&u.push(a);// Don't enum bug & hidden keys
for(;e.length>c;)r(s,a=e[c++])&&(~i(u,a)||u.push(a));return u}}),f("iuOlu",function(t,e){// to indexed object, toObject with fallback for non-array-like ES3 strings
var r=l("3rPrK"),n=l("aWzlH");t.exports=function(t){return r(n(t))}}),f("3rPrK",function(t,e){// fallback for non-array-like ES3 and non-enumerable old V8 strings
var r=l("9ug1p");// eslint-disable-next-line no-prototype-builtins
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}}),f("jlk0e",function(t,e){// false -> Array#indexOf
// true  -> Array#includes
var r=l("iuOlu"),n=l("fOGyJ"),i=l("h68zS");t.exports=function(t){return function(e,o,a){var s,c=r(e),u=n(c.length),l=i(a,u);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(t&&o!=o){for(;u>l;)// eslint-disable-next-line no-self-compare
if((s=c[l++])!=s)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;u>l;l++)if((t||l in c)&&c[l]===o)return t||l||0;return!t&&-1}}}),f("fOGyJ",function(t,e){// 7.1.15 ToLength
var r=l("hy9AX"),n=Math.min;t.exports=function(t){return t>0?n(r(t),9007199254740991):0;// pow(2, 53) - 1 == 9007199254740991
}}),f("h68zS",function(t,e){var r=l("hy9AX"),n=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?n(t+e,0):i(t,e)}}),f("Ov4Oz",function(t,e){var r=l("1hFxf")("keys"),n=l("fmYHZ");t.exports=function(t){return r[t]||(r[t]=n(t))}}),f("1hFxf",function(t,e){var r=l("gKAGC"),n=l("2RHPn"),i="__core-js_shared__",o=n[i]||(n[i]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:l("69BGp")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})}),f("cuwgL",function(t,e){// IE 8- don't enum bug keys
t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}),f("4vtkD",function(t,e){var r=l("7xGQO").f,n=l("f9eqo"),i=l("30isl")("toStringTag");t.exports=function(t,e,o){t&&!n(t=o?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}}),f("30isl",function(t,e){var r=l("1hFxf")("wks"),n=l("fmYHZ"),i=l("2RHPn").Symbol,o="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=o&&i[t]||(o?i:n)("Symbol."+t))}).store=r}),f("1Sb1Y",function(t,e){// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var r=l("f9eqo"),n=l("jlOKT"),i=l("Ov4Oz")("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return r(t=n(t),i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}}),f("jlOKT",function(t,e){// 7.1.13 ToObject(argument)
var r=l("aWzlH");t.exports=function(t){return Object(r(t))}}),f("fmyzQ",function(t,e){// 7.2.2 IsArray(argument)
var r=l("9ug1p");t.exports=Array.isArray||function(t){return"Array"==r(t)}}),f("bpMWu",function(t,e){var r=l("30isl")("iterator"),n=!1;try{var i=[7][r]();i.return=function(){n=!0},// eslint-disable-next-line no-throw-literal
Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var i=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:i=!0}},o[r]=function(){return a},t(o)}catch(t){}return i}}),f("gXTEd",function(t,e){var r=l("k19Az");t.exports=function(t,e){return!!t&&r(function(){// eslint-disable-next-line no-useless-call
e?t.call(null,function(){},1):t.call(null)})}}),f("amG7S",function(t,e){// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var r=l("1irPL"),n=l("3rPrK"),i=l("jlOKT"),o=l("fOGyJ"),a=l("l4spT");t.exports=function(t,e){var s=1==t,c=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f,h=e||a;return function(e,a,p){for(var v,g,y=i(e),m=n(y),_=r(a,p,3),b=o(m.length),w=0,x=s?h(e,b):c?h(e,0):void 0;b>w;w++)if((d||w in m)&&(g=_(v=m[w],w,y),t)){if(s)x[w]=g;// map
else if(g)switch(t){case 3:return!0;// some
case 5:return v;// find
case 6:return w;// findIndex
case 2:x.push(v);// filter
}else if(l)return!1;// every
}return f?-1:u||l?l:x}}}),f("l4spT",function(t,e){// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var r=l("aT5ki");t.exports=function(t,e){return new(r(t))(e)}}),f("aT5ki",function(t,e){var r=l("ePzhG"),n=l("fmyzQ"),i=l("30isl")("species");t.exports=function(t){var e;return n(t)&&("function"==typeof(e=t.constructor)&&(e===Array||n(e.prototype))&&(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}}),f("8MUI8",function(t,e){var r=l("jlOKT"),n=l("h68zS"),i=l("fOGyJ");t.exports=[].copyWithin||function(t/* = 0 */,e/* = 0, end = @length */){var o=r(this),a=i(o.length),s=n(t,a),c=n(e,a),u=arguments.length>2?arguments[2]:void 0,l=Math.min((void 0===u?a:n(u,a))-c,a-s),f=1;for(c<s&&s<c+l&&(f=-1,c+=l-1,s+=l-1);l-- >0;)c in o?o[s]=o[c]:delete o[s],s+=f,c+=f;return o}}),f("61xZ3",function(t,e){// 22.1.3.31 Array.prototype[@@unscopables]
var r=l("30isl")("unscopables"),n=Array.prototype;void 0==n[r]&&l("8fjHJ")(n,r,{}),t.exports=function(t){n[r][t]=!0}}),f("jOUOM",function(t,e){var r=l("jlOKT"),n=l("h68zS"),i=l("fOGyJ");t.exports=function(t/* , start = 0, end = @length */){for(var e=r(this),o=i(e.length),a=arguments.length,s=n(a>1?arguments[1]:void 0,o),c=a>2?arguments[2]:void 0,u=void 0===c?o:n(c,o);u>s;)e[s++]=t;return e}}),f("fgskV",function(t,e){var r=l("2RHPn"),n=l("7xGQO"),i=l("eGV3v"),o=l("30isl")("species");t.exports=function(t){var e=r[t];i&&e&&!e[o]&&n.f(e,o,{configurable:!0,get:function(){return this}})}});var d=l("9SIfx"),h={},p=l("1irPL"),v={};// fast apply, http://jsperf.lnkit.com/fast-apply/5
v=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)};var g=l("eg6n7"),y=l("32lI6"),m=l("2RHPn"),_=m.process,b=m.setImmediate,w=m.clearImmediate,x=m.MessageChannel,k=m.Dispatch,O=0,S={},E="onreadystatechange",P=function(){var t=+this;// eslint-disable-next-line no-prototype-builtins
if(S.hasOwnProperty(t)){var e=S[t];delete S[t],e()}},A=function(t){P.call(t.data)};b&&w||(b=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return S[++O]=function(){// eslint-disable-next-line no-new-func
v("function"==typeof t?t:Function(t),e)},n(O),O},w=function(t){delete S[t]},"process"==l("9ug1p")(_)?n=function(t){_.nextTick(p(P,t,1))}:k&&k.now?n=function(t){k.now(p(P,t,1))}:x?(o=(i=new x).port2,i.port1.onmessage=A,n=p(o.postMessage,o,1)):m.addEventListener&&"function"==typeof postMessage&&!m.importScripts?(n=function(t){m.postMessage(t+"","*")},m.addEventListener("message",A,!1)):n=E in y("script")?function(t){g.appendChild(y("script"))[E]=function(){g.removeChild(this),P.call(t)}}:function(t){setTimeout(p(P,t,1),0)}),h={set:b,clear:w},d(d.G+d.B,{setImmediate:h.set,clearImmediate:h.clear});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new P(o||[]),s=d,function(r,i){if(s===h)throw Error("Generator is already running");if(s===p){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var i=n.method,o=r.iterator[i];if(o===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===d)throw s=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=f(t,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?p:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",h="executing",p="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(A([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(_=w);var x=m.prototype=g.prototype=Object.create(_);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function k(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new e(function(r,a){!function r(i,o,a,s){var c=f(t[i],t,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,s)},function(t){r("throw",t,a,s)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=t,a(u)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw TypeError(typeof t+" is not iterable")}return y.prototype=m,i(x,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},k(O.prototype),u(O.prototype,s,function(){return this}),t.AsyncIterator=O,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new O(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
k(x),u(x,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(x,a,function(){return this}),u(x,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=A,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=t,a.arg=e,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),v}},t}({});try{regeneratorRuntime=j}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=j:Function("r","regeneratorRuntime = r")(j)}var F=l("3nfMJ")(!0);// 21.1.3.27 String.prototype[@@iterator]()
l("c6LP2")(String,"String",function(t){this._t=String(t),this._i=0;// 21.1.5.2.1 %StringIteratorPrototype%.next()
},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=F(e,r),this._i+=t.length,{value:t,done:!1})});// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var d=l("9SIfx");d(d.S,"Array",{isArray:l("fmyzQ")});var p=l("1irPL"),d=l("9SIfx"),T=l("jlOKT"),L={},M=l("hTqwZ");L=function(t,e,r,n){try{return n?e(M(r)[0],r[1]):e(r);// 7.4.6 IteratorClose(iterator, completion)
}catch(e){var i=t.return;throw void 0!==i&&M(i.call(t)),e}};var G={},$=l("7OGHC"),I=l("30isl")("iterator"),H=Array.prototype;G=function(t){return void 0!==t&&($.Array===t||H[I]===t)};var z=l("fOGyJ"),q={},R=l("7xGQO"),C=l("4VzOR");q=function(t,e,r){e in t?R.f(t,e,C(0,r)):t[e]=r};var N={},W={},X=l("9ug1p"),J=l("30isl")("toStringTag"),U="Arguments"==X(function(){return arguments}()),K=function(t,e){try{return t[e]}catch(t){}};W=function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=K(e=Object(t),J))?r:U?X(e):"Object"==(n=X(e))&&"function"==typeof e.callee?"Arguments":n};var D=l("30isl")("iterator"),$=l("7OGHC");N=l("gKAGC").getIteratorMethod=function(t){if(void 0!=t)return t[D]||t["@@iterator"]||$[W(t)]},d(d.S+!l("bpMWu")(function(t){Array.from(t)})*d.F,"Array",{// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(t/* , mapfn = undefined, thisArg = undefined */){var e,r,n,i,o=T(t),a="function"==typeof this?this:Array,s=arguments.length,c=s>1?arguments[1]:void 0,u=void 0!==c,l=0,f=N(o);// if object isn't iterable or it's array with default iterator - use simple case
if(u&&(c=p(c,s>2?arguments[2]:void 0,2)),void 0==f||a==Array&&G(f))for(r=new a(e=z(o.length));e>l;l++)q(r,l,u?c(o[l],l):o[l]);else for(i=f.call(o),r=new a;!(n=i.next()).done;l++)q(r,l,u?L(i,c,[n.value,l],!0):n.value);return r.length=l,r}});var d=l("9SIfx");// WebKit Array.of isn't generic
d(d.S+d.F*l("k19Az")(function(){function t(){}return!(Array.of.call(t) instanceof t)}),"Array",{// 22.1.2.3 Array.of( ...items)
of:function(){for(var t=0,e=arguments.length,r=new("function"==typeof this?this:Array)(e);e>t;)q(r,t,arguments[t++]);return r.length=e,r}});var d=l("9SIfx"),Z=l("iuOlu"),Q=[].join;// fallback for not array-like strings
d(d.P+d.F*(l("3rPrK")!=Object||!l("gXTEd")(Q)),"Array",{join:function(t){return Q.call(Z(this),void 0===t?",":t)}});var d=l("9SIfx"),g=l("eg6n7"),X=l("9ug1p"),V=l("h68zS"),z=l("fOGyJ"),B=[].slice;// fallback for not array-like ES3 strings and DOM objects
d(d.P+d.F*l("k19Az")(function(){g&&B.call(g)}),"Array",{slice:function(t,e){var r=z(this.length),n=X(this);if(e=void 0===e?r:e,"Array"==n)return B.call(this,t,e);for(var i=V(t,r),o=V(e,r),a=z(o-i),s=Array(a),c=0;c<a;c++)s[c]="String"==n?this.charAt(i+c):this[i+c];return s}});var d=l("9SIfx"),Y=l("fvXNy"),T=l("jlOKT"),tt=l("k19Az"),te=[].sort,tr=[1,2,3];d(d.P+d.F*(tt(function(){// IE8-
tr.sort(void 0)})||!tt(function(){// V8 bug
tr.sort(null);// Old WebKit
})||!l("gXTEd")(te)),"Array",{// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function(t){return void 0===t?te.call(T(this)):te.call(T(this),Y(t))}});var d=l("9SIfx"),tn=l("amG7S")(0),ti=l("gXTEd")([].forEach,!0);d(d.P+!ti*d.F,"Array",{// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function(t/* , thisArg */){return tn(this,t,arguments[1])}});var d=l("9SIfx"),to=l("amG7S")(1);d(d.P+!l("gXTEd")([].map,!0)*d.F,"Array",{// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(t/* , thisArg */){return to(this,t,arguments[1])}});var d=l("9SIfx"),ta=l("amG7S")(2);d(d.P+!l("gXTEd")([].filter,!0)*d.F,"Array",{// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function(t/* , thisArg */){return ta(this,t,arguments[1])}});var d=l("9SIfx"),ts=l("amG7S")(3);d(d.P+!l("gXTEd")([].some,!0)*d.F,"Array",{// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function(t/* , thisArg */){return ts(this,t,arguments[1])}});var d=l("9SIfx"),tc=l("amG7S")(4);d(d.P+!l("gXTEd")([].every,!0)*d.F,"Array",{// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function(t/* , thisArg */){return tc(this,t,arguments[1])}});var d=l("9SIfx"),tu={},Y=l("fvXNy"),T=l("jlOKT"),tl=l("3rPrK"),z=l("fOGyJ");tu=function(t,e,r,n,i){Y(e);var o=T(t),a=tl(o),s=z(o.length),c=i?s-1:0,u=i?-1:1;if(r<2)for(;;){if(c in a){n=a[c],c+=u;break}if(c+=u,i?c<0:s<=c)throw TypeError("Reduce of empty array with no initial value")}for(;i?c>=0:s>c;c+=u)c in a&&(n=e(n,a[c],c,o));return n},d(d.P+!l("gXTEd")([].reduce,!0)*d.F,"Array",{// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function(t/* , initialValue */){return tu(this,t,arguments.length,arguments[1],!1)}});var d=l("9SIfx");d(d.P+!l("gXTEd")([].reduceRight,!0)*d.F,"Array",{// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function(t/* , initialValue */){return tu(this,t,arguments.length,arguments[1],!0)}});var d=l("9SIfx"),tf=l("jlk0e")(!1),th=[].indexOf,tp=!!th&&1/[1].indexOf(1,-0)<0;d(d.P+d.F*(tp||!l("gXTEd")(th)),"Array",{// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function(t/* , fromIndex = 0 */){return tp?th.apply(this,arguments)||0:tf(this,t,arguments[1])}});var d=l("9SIfx"),Z=l("iuOlu"),tv=l("hy9AX"),z=l("fOGyJ"),tg=[].lastIndexOf,ty=!!tg&&1/[1].lastIndexOf(1,-0)<0;d(d.P+d.F*(ty||!l("gXTEd")(tg)),"Array",{// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function(t/* , fromIndex = @[*-1] */){// convert -0 to +0
if(ty)return tg.apply(this,arguments)||0;var e=Z(this),r=z(e.length),n=r-1;for(arguments.length>1&&(n=Math.min(n,tv(arguments[1]))),n<0&&(n=r+n);n>=0;n--)if(n in e&&e[n]===t)return n||0;return -1}});// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var d=l("9SIfx");d(d.P,"Array",{copyWithin:l("8MUI8")}),l("61xZ3")("copyWithin");// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var d=l("9SIfx");d(d.P,"Array",{fill:l("jOUOM")}),l("61xZ3")("fill");var d=l("9SIfx"),tm=l("amG7S")(5),t_="find",tb=!0;t_ in[]&&[,][t_](function(){tb=!1}),d(d.P+d.F*tb,"Array",{find:function(t/* , that = undefined */){return tm(this,t,arguments.length>1?arguments[1]:void 0)}}),l("61xZ3")(t_);var d=l("9SIfx"),tw=l("amG7S")(6),tx="findIndex",tk=!0;tx in[]&&[,][tx](function(){tk=!1}),d(d.P+d.F*tk,"Array",{findIndex:function(t/* , that = undefined */){return tw(this,t,arguments.length>1?arguments[1]:void 0)}}),l("61xZ3")(tx),l("fgskV")("Array");var tO=l("61xZ3"),tS={};tS=function(t,e){return{value:e,done:!!t}};var $=l("7OGHC"),Z=l("iuOlu");l("c6LP2")(Array,"Array",function(t,e){this._t=Z(t),this._i=0,this._k=e;// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,tS(1)):"keys"==e?tS(0,r):"values"==e?tS(0,t[r]):tS(0,[r,t[r]])},"values"),// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
$.Arguments=$.Array,tO("keys"),tO("values"),tO("entries"),l("gKAGC").Array;//all global variables
const tE="https://forkify-api.herokuapp.com/api/v2/recipes",tP="76aa98fb-7608-4750-97ab-1b7ee22d5ffa",tA=async function(t,e){try{let r=e?fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}):fetch(t),n=await Promise.race([r,new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 15 second"))},15e3)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(t){throw t}},tj={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},tF=function(t){let{recipe:e}=t.data;return{id:e.id,title:e.title,publisher:e.publisher,sourceURL:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,...e.key&&{key:e.key}}},tT=async function(t){try{let e=await tA(`${tE}/${t}?key=${tP}`);tj.recipe=tF(e),tj.bookmarks.some(e=>e.id===t)?tj.recipe.bookmarked=!0:tj.recipe.bookmarked=!1}catch(t){throw console.error(t),t}},tL=async function(t){try{tj.search.query=t;let e=await tA(`${tE}?search=${t}&key=${tP}`);tj.search.results=e.data.recipes.map(t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url,...t.key&&{key:t.key}})),tj.search.page=1}catch(t){throw console.error(t),t}},tM=function(t=tj.search.page){tj.search.page=t;let e=(t-1)*tj.search.resultsPerPage,r=t*tj.search.resultsPerPage;return tj.search.results.slice(e,r)},tG=function(t){tj.recipe.ingredients.forEach(e=>{e.quantity=e.quantity*t/tj.recipe.servings}),tj.recipe.servings=t},t$=function(){localStorage.setItem("bookmarks",JSON.stringify(tj.bookmarks))},tI=function(t){tj.bookmarks.push(t),t.id===tj.recipe.id&&(tj.recipe.bookmarked=!0),t$()},tH=function(t){let e=tj.bookmarks.findIndex(e=>e.id===t);tj.bookmarks.splice(e,1),t===tj.recipe.id&&(tj.recipe.bookmarked=!1),t$()};!function(){let t=localStorage.getItem("bookmarks");t&&(tj.bookmarks=JSON.parse(t))}(),localStorage.clear("bookmarks");const tz=async function(t){try{let e=Object.entries(t).filter(t=>t[0].startsWith("ingredient")&&""!==t[1]).map(t=>{let e=t[1].split(",").map(t=>t.trim());if(3!==e.length)throw Error("Wrong ingredient format! Please use the correct format");let[r,n,i]=e;return{quantity:r?+r:null,unit:n,description:i}}),r={title:t.title,source_url:t.sourceUrl,image_url:t.image,cooking_time:+t.cookingTime,servings:+t.servings,publisher:t.publisher,ingredients:e},n=await tA(`${tE}?key=${tP}`,r);tj.recipe=tF(n),tI(tj.recipe),console.log(n)}catch(t){throw t}};var tq={};tq=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(t,e){/* double argument invocation */if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));// fractions that are equal should have equal normalized forms
var e=this.clone().normalize(),t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(e=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},r=function(t,e){if(!e)return Math.round(t);var r=Math.pow(10,e);return Math.round(t*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(e(this.denominator)){var t=r(this.denominator,9),n=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),//this.numerator *= scaleup;
this.numerator*=n}if(e(this.numerator)){var t=r(this.numerator,9),n=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),//this.numerator *= scaleup;
this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(t,e){var r=[],n=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(t){var e=i.indexOf(t);e>=0&&(r.push(t),i.splice(e,1))}),0===r.length)?1:function(){var t,e=r[0];for(t=1;t<r.length;t++)e*=r[t];return e}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(t){for(var e=Math.abs(t),r=[],n=2;n*n<=e;)e%n==0?(r.push(n),e/=n):n++;// and increment
return 1!=e&&r.push(e),r;// Return the prime factors
},a=Fraction;class tR{_data;render(t,e=!0){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;let r=this._generateMarkup();if(!e)return r;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}update(t){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;let e=this._generateMarkup(),r=document.createRange().createContextualFragment(e),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentEl.querySelectorAll("*"));n.forEach((t,e)=>{let r=i[e];t.isEqualNode(r)||t.firstChild?.nodeValue.trim()===""||(r.textContent=t.textContent),t.isEqualNode(r)||Array.from(t.attributes).forEach(t=>r.setAttribute(t.name,t.value))})}_clear(){this._parentEl.innerHTML=""}renderSpinner(){let e=` <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/t(tq)}#icon-loader"></use>
        </svg>
      </div> `;this._parentEl.innerHTML="",this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=` <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/t(tq)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div> `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=` <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/t(tq)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div> `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}}class tC extends tR{_parentEl=document.querySelector(".recipe");_data;_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}addHandlerUpdateServings(t){this._parentEl.addEventListener("click",function(e){let r=e.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&t(+n)})}addHandlerAddBookmark(t){this._parentEl.addEventListener("click",function(e){let r=e.target.closest(".btn--bookmark");r&&t()})}_generateMarkup(){return`
  <figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/t(tq)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/t(tq)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${/*@__PURE__*/t(tq)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${/*@__PURE__*/t(tq)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
        <use href="${/*@__PURE__*/t(tq)}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${/*@__PURE__*/t(tq)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="src/img/icons.svg_icon-check"></use>
        </svg>
        <div class="recipe__quantity">0.5</div>
        <div class="recipe__description">
          <span class="recipe__unit">cup</span>
          ricotta cheese
        </div>
      </li>
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a class="btn--small recipe__btn"href="${this._data.sourceURL}" target="_blank" >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/t(tq)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}_generateMarkupIngredient(e){return`  <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/t(tq)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new a(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>`}}var tN=new tC;class tW{_parentEl=document.querySelector(".search");getQuery(){let t=this._parentEl.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentEl.addEventListener("submit",function(e){e.preventDefault(),t()})}}var tX=new tW,tJ=new class extends tR{_parentEl="";_generateMarkup(){let e=window.location.hash.slice(1);return`  <li class="preview">
                <a class="preview__link ${this._data.id===e?"preview__link--active":""} " href="#${this._data.id}">
                  <figure class="preview__fig">
                    <img src="${this._data.image}" alt="Test" />
                  </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${this._data.title}</h4>
                    <p class="preview__publisher">${this._data.publisher}</p>
                      <div class="preview__user-generated  ${this._data.key?"":"hidden"}">
                          <svg>
                            <use href="${/*@__PURE__*/t(tq)}#icon-user"</use>
                          </svg>
                      </div>
                </div>
                </a>
            </li>`}};class tU extends tR{_parentEl=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again :)";_message="";_generateMarkup(){return this._data.map(t=>tJ.render(t,!1)).join("")}}var tK=new tU;class tD extends tR{_parentEl=document.querySelector(".pagination");addHandlerClick(t){this._parentEl.addEventListener("click",function(e){let r=e.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;t(n)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===e&&r>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/t(tq)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===r&&r>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/t(tq)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<r?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/t(tq)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/t(tq)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:"")}}var tZ=new tD;class tQ extends tR{_parentEl=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(t){window.addEventListener("load",t)}_generateMarkup(){return this._data.map(t=>tJ.render(t,!1)).join("")}}var tV=new tQ;class tB extends tR{_parentEl=document.querySelector(".upload");_message="Recipe was successfully uploaded! :) ";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerUpload(t){this._parentEl.addEventListener("submit",function(e){e.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);t(n)})}}var tY=new tB;const t0=async function(){try{let t=window.location.hash.slice(1);if(!t)return;tN.renderSpinner(),tK.update(tM()),tV.update(tj.bookmarks),await tT(t),tN.render(tj.recipe)}catch(t){tN.renderError(),console.log(t)}},t1=async function(){try{tK.renderSpinner();let t=tX.getQuery();if(!t)return;await tL(t),tK.render(tM()),tZ.render(tj.search)}catch(t){console.log(t)}},t9=async function(t){try{tY.renderSpinner(),await tz(t),console.log(tj.recipe),tN.render(tj.recipe),tY.renderMessage(),tV.render(tj.bookmarks),window.history.pushState(null,"",`#${tj.recipe.id}`),setTimeout(function(){tY.toggleWindow()},2500)}catch(t){console.error(t),tY.renderError(t.message)}};tV.addHandlerRender(function(){tV.render(tj.bookmarks)}),tN.addHandlerRender(t0),tN.addHandlerUpdateServings(function(t){tG(t),tN.update(tj.recipe)}),tN.addHandlerAddBookmark(function(){tj.recipe.bookmarked?tH(tj.recipe.id):tI(tj.recipe),tN.update(tj.recipe),tV.render(tj.bookmarks)}),tX.addHandlerSearch(t1),tZ.addHandlerClick(function(t){tK.render(tM(t)),tZ.render(tj.search)}),tY._addHandlerUpload(t9);//# sourceMappingURL=index.6de5e851.js.map

//# sourceMappingURL=index.6de5e851.js.map
