"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var u=s(function(I,d){
var q=require('@stdlib/blas-ext-base-gindex-of/dist').ndarray;function c(r,e,n,a,i){var t;return r<=0?-1:(i+=(r-1)*a,a*=-1,t=q(r,e,n,a,i),t<0?t:r-1-t)}d.exports=c
});var v=s(function(m,f){
var o=require('@stdlib/strided-base-stride2offset/dist'),y=u();function O(r,e,n,a){return y(r,e,n,a,o(r,a))}f.exports=O
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=v(),l=u();g(x,"ndarray",l);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
