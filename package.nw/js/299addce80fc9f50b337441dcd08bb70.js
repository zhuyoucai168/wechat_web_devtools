'use strict';!function(require,directRequire){const a=require('react'),{connect:b}=require('react-redux'),c=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),d=require('./a8c87029da0fa06e986298d447ab0fe2.js'),e=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),f=require('./25d0beb4120ce2acafb4e03b95444fda.js'),g=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),h=require('./d9315b916750758dab0e8d5a8ad99c68.js'),i=require('./56c390e04c10e91a4aa2a2c19d9a885d.js');module.exports=b((a)=>{return{currentProject:a.project.current,projects:a.project.list,user:a.user,mainWindow:a.window.mainWindow}},(a)=>{return{createProjectRequest:()=>a(c.createProjectRequest()),createProjectOpen:()=>a(c.createProjectOpen()),closeProject:()=>a(c.closeProject()),openProject:async(b)=>{try{await a(c.openProject(b))}catch(a){}},cancel:()=>a(c.selectProjectCancel()),close:()=>a(c.selectProjectClose()),logout:()=>a(e.loginExpired()),openBBS:()=>f.BBS(),openDoc:()=>f.Doc(),setConfirmInfo:(b)=>a(g.setConfirmInfo(b)),setProjectManagement:(b)=>a(d.setProjectManagement(b))}})(h)}(require('lazyload'),require);