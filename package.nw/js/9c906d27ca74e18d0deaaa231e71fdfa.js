'use strict';!function(require,directRequire){const a=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),b=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),c=require('./89ba85d67a88f7636d657c22b5d3e038.js'),d=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),e=require('./a8c87029da0fa06e986298d447ab0fe2.js'),f=require('./cc2c2970ff81ae4a83123e81ee123da2.js');module.exports={login:function(a){return(d,e)=>new Promise(async(f,g)=>{const h=e(),i=h.window.mainWindow;d({type:b.USER_LOGIN_REQUEST});try{const e=await c.requestLogin(a);f(e),d({type:b.USER_LOGIN_SUCCESS,userInfo:e})}catch(a){g(a),d({type:b.USER_LOGIN_FAIL,errMsg:a})}})},loginRequest:function(){return{type:b.USER_LOGIN_REQUEST}},loginPending:function(){return{type:b.USER_LOGIN_PENDING}},loginSuccess:function(a){return{type:b.USER_LOGIN_SUCCESS,user:a}},loginFail:function(a){return{type:b.USER_LOGIN_FAIL,err:a}},loginCancel:function(){return{type:b.USER_LOGIN_CANCAL}},loginExpired:function(a=null){return(c)=>{d.userInfo={},c({type:b.USER_LOGIN_EXPIRED,openid:a})}},removeUserInfo:function(a=null){return{type:b.USER_REMOVE_INFO,openid:a}}}}(require('lazyload'),require);