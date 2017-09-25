'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('mkdir-p'),d=require('glob'),e=require('lodash'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./f171257bbcaef547a3cf27266ccb0db2.js'),h=require('./15ba1827c7f6564a45df6bd44da3a977.js'),i=require('./72653d4b93cdd7443296229431a7aa9a.js'),j=require('./3bfffbe88b3d923921f851c0697974fe.js'),k=require('./d28a711224425b00101635efe1034c99.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),m=require('./a8c87029da0fa06e986298d447ab0fe2.js'),n=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),o=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),p=require('./da7c31daaf542cf1796023d8e344b98a.js'),q=require('./common/locales/index.js'),{default_weapp_header:r}=require('./5498e660c05c574f739a28bd5d202cfa.js'),s=(a)=>(b,c)=>{const d=c();if(!a){if(a=d.project.current,a.accessTime=+new Date,!a)return;n.updateProject(a.projectid,a),b({type:f.PROJECT_UPDATE_LIST,list:_extends({},d.project.list,{[a.projectid]:a})})}else a.accessTime=+new Date,n.updateProject(a.projectid,a),b({type:f.PROJECT_UPDATE_LIST,list:_extends({},d.project.list,{[a.projectid]:a})})},t=()=>(a)=>{n.lastSelect=null,a({type:f.PROJECT_CLOSE_PROJECT})},u=(a)=>{const b=k.getVendorConfig();return{projectid:`${a.appid}_${a.projectName}`,condiction:{weapp:{current:-1,list:[]},search:{current:-1,list:[]},conversation:{current:-1,list:[]}},setting:{urlCheck:!0,es6:!0,postcss:!1,minified:!0},compileType:'weapp',libVersion:b.currentLibVersion,createTime:+new Date,accessTime:+new Date}};module.exports={selectDevType:(a)=>(b,c)=>{if(b({type:f.SELECT_DEV_TYPE,devType:a}),a!==l.DEV_TYPE.MP_WEB)try{const a=c().project.list;0<Object.keys(a).length?b(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT)):b(m.setMainWindow(l.MAIN_WINDOW_TYPE.CREATE_PROJECT))}catch(a){b(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT))}else b(m.setMainWindow(l.MAIN_WINDOW_TYPE.WEB_DEBUGGER)),n.lastSelect=l.MAIN_WINDOW_TYPE.WEB_DEBUGGER,p('url_open')},selectProjectRequest:()=>{return{type:f.PROJECT_SELECT_PROJECT_REQUEST}},selectProjectCancel:()=>{return{type:f.PROJECT_SELECT_PROJECT_CANCEL}},selectProjectOpen:()=>{return{type:f.PROJECT_SELECT_PROJECT_OPEN}},selectProjectClose:()=>{return{type:f.PROJECT_SELECT_PROJECT_CLOSE}},createProjectRequest:()=>{return{type:f.PROJECT_CREATE_PROJECT_REQUEST}},createProjectSuccess:(g,h=!1)=>(j)=>{const k=e.merge(u(g),g);if(h){let e=g.projectpath,f=global.appConfig.isDev?b.join(__dirname,'../../vendor/quickstart'):b.join(__dirname,'./vendor/quickstart');try{let g=d.sync(`./**/**`,{cwd:f});g.forEach((d)=>{let g=b.join(f,d),h=b.join(e,d),i=a.lstatSync(g);if(i.isDirectory())c.sync(h);else{let b=a.readFileSync(g);a.writeFileSync(h,b)}})}catch(a){i.error(`project.actions.js initProject error ${a.toString()}`)}}j({type:f.PROJECT_CREATE_PROJECT_SUCCESS,project:k}),j(s(k))},createProjectFail:(a)=>{return{type:f.PROJECT_CREATE_PROJECT_FAIL,err:a}},createProjectCancel:()=>(a,b)=>{b();try{const c=b().project.list;0<Object.keys(c).length?a(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT)):a(m.setMainWindow(l.MAIN_WINDOW_TYPE.ENTRANCE))}catch(b){a(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT))}},createProjectOpen:()=>{return{type:f.PROJECT_CREATE_PROJECT_OPEN}},createProjectClose:()=>{return{type:f.PROJECT_CREATE_PROJECT_CLOSE}},removeProject:(a)=>(b,c)=>{n.removeProject(a);const d=c();d.project.current&&d.project.current.projectid===a&&b(t()),b({type:f.PROJECT_REMOVE_PROJECT,id:a})},openProject:(a)=>(b)=>new Promise(async(c,d)=>{try{const d=n.projectList;d[a]||i.error(`open project with unknown projectid ${a}`);const e=d[a];e&&(e.storage={}),b({type:f.PROJECT_OPEN_PROJECT,projectid:a}),c(),b(s()),n.lastSelect=a,p('project_open',e.appid)}catch(a){d(a)}}),closeProject:t,requestProjectAttr:()=>(a)=>new Promise((b)=>{let c=j.getCurrent();c&&c.isTourist||h({url:`${g.getWeappAttrURL}`,body:JSON.stringify({appid_list:[j.getProjectAppID(c&&c.projectid)]}),method:'post',needToken:1,needAppID:1}).then(({resp:d,body:e})=>{let g=e.attr_list[0],h=g.jsapi_list,j={};if(h&&0<h.length)for(let a,b=0;b<h.length;b++)a=h[b],j[a.name]=a;let i=!!g.is_platform,k={permission:j,appName:g.appname,appImageUrl:g.appicon_url?`${g.appicon_url}/0`:r,setting:g.Setting,network:g.Network,appid:g.appid,share_info:g.share_info,searchWidget:!!g.open_search_widget,userbanded:!0};if(i&&(k.platform=i,k.platformNickname=g.platform_nickname),g.qcloud_attr_json){let a=JSON.parse(g.qcloud_attr_json);k.qcloud=a}a({type:f.PROJECT_UPDATE_ATTR,data:k}),a({type:f.SIMULATOR_SET_GROUP_INFO,data:{list:g.share_info}}),a(s(c)),b()}).catch((b)=>{i.error(`requestProjectAttr catch error ${b}`),b===q.config.CGI_ERR_NOT_BAND?a({type:f.PROJECT_UPDATE_ATTR,data:{userbanded:!1},project:c}):(b===q.config.CGI_ERR_PLATFORM_INVALID_EXT_APPID||b===q.config.CGI_ERR_PLATFORM_EXT_APPID_NOT_AUTH)&&a({type:f.PROJECT_SET_EXT_INFO,data:{errMsg:b}})})}),setCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_SET_COMPILE_CONDICTION,data:a}),b(s())},removeCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_REMOVE_COMPILE_CONDICTION,data:a}),b(s())},setProjectSetting:(c)=>(d)=>{const e=j.getCurrent();d({type:f.PROJECT_SET_SETTING,data:c});try{let d=b.join(e.projectpath,'project.config.json');if(a.existsSync(d)){let b=JSON.parse(a.readFileSync(d));b.setting=_extends({},b.setting,c),a.writeFileSync(d,JSON.stringify(b,null,'\t'))}}catch(a){}d(s())},selectCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_SELECT_COMPILE_CONDICTION,current:a}),b(s())},setProjectLibVersion:(a)=>(b)=>{k.setVersion(a),b({type:f.PROJECT_SET_LIBVERSION,data:a}),b(s())},checkUploadStatus:()=>{let a=j.getCurrent();return(b)=>{h({url:`${g.uploadQrCodeURL}?appid=${a.appid}`,method:'get',needToken:1}).then(({resp:a,body:c})=>{let d=1===c.is_experience?'\u4E0A\u6B21\u63D0\u4EA4\u5DF2\u88AB\u9009\u4E3A\u4F53\u9A8C\u7248\uFF0C\u672C\u6B21\u4E0A\u4F20\u5C06\u4F1A\u8986\u76D6\u4F53\u9A8C\u7248\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F':'\u4E0A\u4F20\u6210\u529F\u540E\uFF0C\u9700\u8981\u8054\u7CFB\u7BA1\u7406\u5458\u5728\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0\u5C06\u672C\u6B21\u4E0A\u4F20\u8BBE\u7F6E\u4E3A\u4F53\u9A8C\u7248\u672C\u3002';b({type:f.INFO_SET_UPLOAD,data:{status:1,wording:d}})}).catch((a)=>{b({type:f.INFO_SET_UPLOAD,data:{show:!1}}),b({type:f.INFO_SHOW_ERROR,data:{message:a.toString()}})})}},setProjectCompileType:(a)=>{return(b)=>{b({type:f.PROJECT_SET_COMPILE_TYPE,data:a}),b(s())}},setProjectQCloud:(a)=>{return{type:f.PROJECT_SET_QCLOUD,data:a}},setPkgSize:(a)=>(b)=>{b({type:f.PROJECT_SET_PKG_SIZE,data:a}),b(s())},setProjectConfig:(a)=>(b)=>{b({type:f.PROJECT_SET_PROJECT_CONFIG,data:a}),b(s())},setProjectExtInfo:(a)=>{return{type:f.PROJECT_SET_EXT_INFO,data:a}},saveUploadInfo:(a)=>(b)=>{b({type:f.PROJECT_SET_UPLOAD_INFO,data:a}),b(s())}}}(require('lazyload'),require);