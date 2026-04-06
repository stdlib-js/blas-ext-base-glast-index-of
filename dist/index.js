"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(I,d){
var q=require('@stdlib/blas-ext-base-gindex-of/dist').ndarray;function c(r,e,t,a,i){var n;return r<=0?-1:(i+=(r-1)*a,a*=-1,n=q(r,e,t,a,i),n<0||(n=r-1-n),n)}d.exports=c
});var v=s(function(m,f){
var o=require('@stdlib/strided-base-stride2offset/dist'),y=u();function O(r,e,t,a){return y(r,e,t,a,o(r,a))}f.exports=O
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=v(),l=u();g(x,"ndarray",l);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
