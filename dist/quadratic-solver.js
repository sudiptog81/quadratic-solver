var qs=function(t){var r={};function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports;}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o});},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(o,n,function(r){return t[r];}.bind(null,n));return o;},e.n=function(t){var r=t&&t.__esModule?function(){return t.default;}:function(){return t;};return e.d(r,"a",r),r;},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r);},e.p="",e(e.s=1);}([function(t){t.exports={a:"0.2.1"};},function(t,r,e){"use strict";e.r(r);var o=e(0);var n=()=>`quadratic-solver v${o.a}`;var a=(t,r,e)=>Math.pow(r,2)-4*t*e<0?["No Real Roots","No Real Roots"]:Math.pow(r,2)-4*t*e==0?[(-1*r+Math.sqrt(Math.pow(r,2)-4*t*e))/(2*t),"Only One Root"]:[(-1*r+Math.sqrt(Math.pow(r,2)-4*t*e))/(2*t),(-1*r-Math.sqrt(Math.pow(r,2)-4*t*e))/(2*t)];var u=(t,r,e)=>(r/=t,e/=t,[Math.sqrt(Math.pow(r/2,2)-e)-r/2,-1*Math.sqrt(Math.pow(r/2,2)-e)-r/2]);class i{constructor(t=2,r=5,e=-3){this.a=t,this.b=r,this.c=e;}solve(){return a(this.a,this.b,this.c);}completeSquare(){return u(this.a,this.b,this.c);}versionMethod(){return n();}}var s=(t,r,e)=>Math.pow(r,2)-4*t*e<0?["No Real Roots","No Real Roots"]:Math.pow(r,2)-4*t*e==0?[(-1*r+Math.sqrt(Math.pow(r,2)-4*t*e))/(2*t),"Only One Root"]:[2*e/(-1*r-Math.sqrt(Math.pow(r,2)-4*t*e)),2*e/(-1*r+Math.sqrt(Math.pow(r,2)-4*t*e))];e.d(r,"Solver",function(){return i;}),e.d(r,"GetVersion",function(){return n;}),e.d(r,"QuadSolver",function(){return a;}),e.d(r,"QuadSolverCitardauq",function(){return s;}),e.d(r,"CompleteSquare",function(){return u;});}]);