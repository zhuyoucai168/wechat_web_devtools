"use strict";!function(require,directRequire){const a=function(){return new Promise((a,b)=>{setTimeout(()=>{b(3)},3e3)})};(async function(){return await a()})().then((a)=>{console.log(a)}).catch((a)=>{console.log("error",a)})}(require("lazyload"),require);