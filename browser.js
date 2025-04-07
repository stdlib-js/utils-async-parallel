// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,b,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,f,l,s,p,g,d,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))u+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",f+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){var e,t;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var k,I=Object.prototype,V=I.toString,F=I.__defineGetter__,C=I.__defineSetter__,N=I.__lookupGetter__,$=I.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var R=k;function B(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Math.floor;function G(r){return M(r)===r}var L=4294967295,Z=/./;function U(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"",J=X()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[H],e=D(r,H);try{r[H]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[H]=t:delete r[H],n}:function(r){return z.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return U(r)||er(r)}B(tr,"isPrimitive",U),B(tr,"isObject",er);var nr="object"==typeof self?self:null,ir="object"==typeof window?window:null,or="object"==typeof globalThis?globalThis:null,ar=function(r){if(arguments.length){if(!U(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(nr)return nr;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,ur=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var lr=/^\s*function\s*([^(]*)/i;B(fr,"REGEXP",lr);var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function pr(r){return null!==r&&"object"==typeof r}function gr(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return pr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var dr="function"==typeof Z||"object"==typeof ur||"function"==typeof cr?function(r){return gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?gr(r).toLowerCase():e};function yr(r){return"function"===dr(r)}var hr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&G(r.length)&&r.length>=0&&r.length<=L}(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr);function br(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var vr,wr=Number.POSITIVE_INFINITY,mr=Object,jr=Object.getPrototypeOf;vr=yr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=vr,Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!sr(r)}(r)&&(e=function(r){return null==r?null:(r=mr(r),_r(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&yr(e.constructor)&&"[object Function]"===J(e.constructor)&&D(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}function Sr(r){return"number"==typeof r}var Tr=Number,xr=Tr.prototype.toString,Ar=X();function Pr(r){return"object"==typeof r&&(r instanceof Tr||(Ar?function(r){try{return xr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function kr(r){return Sr(r)||Pr(r)}B(kr,"isPrimitive",Sr),B(kr,"isObject",Pr);var Ir=Tr.NEGATIVE_INFINITY;function Vr(r){return r<wr&&r>Ir&&G(r)}function Fr(r){return Sr(r)&&Vr(r)}function Cr(r){return Pr(r)&&Vr(r.valueOf())}function Nr(r){return Fr(r)||Cr(r)}function $r(r){return Fr(r)&&r>0}function Rr(r){return Cr(r)&&r.valueOf()>0}function Br(r){return $r(r)||Rr(r)}function Mr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}B(Nr,"isPrimitive",Fr),B(Nr,"isObject",Cr),B(Br,"isPrimitive",$r),B(Br,"isObject",Rr);var Gr=Mr(Object.freeze({__proto__:null,default:()=>()=>{}}))("parallel-async:limit");function Lr(r,e){var t,n;if(!hr(r))throw new TypeError(br("nullAl",r));if(t={limit:wr},arguments.length>1&&(n=function(r,e){return Or(e)?(D(e,"thisArg")&&(r.thisArg=e.thisArg),D(e,"limit")&&(r.limit=e.limit,!$r(r.limit))?new TypeError(br("null3P","limit",r.limit)):null):new TypeError(br("null2V",e))}(t,e),n))throw n;return function(e){if(!yr(e))throw new TypeError(br("null2b",e));return function(r,e,t){var n,i,o,a,c,u,f,l;for(c=r.length,Gr("Number of functions: %d",c),f=new Array(c),a=c<e.limit?c:e.limit,Gr("Concurrency limit: %d",a),n=c-1,i=0,u=-1,l=0;l<a;l++)u<n&&s();function s(){var t;t=u+=1,r[u].call(e.thisArg,(function(r,e){if(!o)return r?(o=!0,p(r)):(f[t]=e,void p())}))}function p(r){return r?(Gr("Encountered an error: %s",r.message),t(r)):(Gr("Processed %d of %d functions.",i+=1,c),u<n?s():i===c?(Gr("Finished processing the functions."),t(null,f)):void 0)}}(r,t,(function(r,t){if(r)return e(r);e(null,t)}))}}function Zr(r,e,t){if(arguments.length<3)return Lr(r)(e);Lr(r,e)(t)}return B(Zr,"factory",Lr),Zr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).parallel=e();
//# sourceMappingURL=browser.js.map
