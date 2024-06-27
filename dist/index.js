"use strict";var c=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var w=c(function(U,p){
var j=require('@stdlib/assert-is-plain-object/dist'),h=require('@stdlib/assert-has-own-property/dist'),C=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,b=require('@stdlib/error-tools-fmtprodmsg/dist');function N(i,r){return j(r)?(h(r,"thisArg")&&(i.thisArg=r.thisArg),h(r,"limit")&&(i.limit=r.limit,!C(i.limit))?new TypeError(b('null3P',"limit",i.limit)):null):new TypeError(b('null2V',r));}p.exports=N
});var A=c(function(W,x){
var R=require("debug"),v=R("parallel-async:limit");function z(i,r,t){var n,l,u,s,e,a,m,o;for(e=i.length,v("Number of functions: %d",e),m=new Array(e),e<r.limit?s=e:s=r.limit,v("Concurrency limit: %d",s),n=e-1,l=0,a=-1,o=0;o<s;o++)a<n&&q();function q(){var f;a+=1,f=a,i[a].call(r.thisArg,I);function I(d,V){if(!u){if(d)return u=!0,y(d);m[f]=V,y()}}}function y(f){if(f)return v("Encountered an error: %s",f.message),t(f);if(l+=1,v("Processed %d of %d functions.",l,e),a<n)return q();if(l===e)return v("Finished processing the functions."),t(null,m)}}x.exports=z
});var g=c(function(X,F){
var B=require('@stdlib/assert-is-function-array/dist'),D=require('@stdlib/assert-is-function/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),G=require('@stdlib/constants-float64-pinf/dist'),H=w(),J=A();function K(i,r){var t,n;if(!B(i))throw new TypeError(E('nullAl',i));if(t={limit:G},arguments.length>1&&(n=H(t,r),n))throw n;return l;function l(u){if(!D(u))throw new TypeError(E('null2b',u));return J(i,t,s);function s(e,a){if(e)return u(e);u(null,a)}}}F.exports=K
});var T=c(function(Y,P){
var O=g();function L(i,r,t){if(arguments.length<3)return O(i)(r);O(i,r)(t)}P.exports=L
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=T(),Q=g();M(k,"factory",Q);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
