'use strict';!function(require,directRequire){const a=require('react'),b=require('./3c55dff3626a3ee184d599f076158345.js'),c=require('./72410b6d4968336cd8b2fc1d41f52cdf.js'),d=require('./common/locales/index.js'),e=require('./a8c87029da0fa06e986298d447ab0fe2.js'),f=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),g=require('./fc137838572a83604db39acff8e909e0.js'),h=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),i=require('./25d0beb4120ce2acafb4e03b95444fda.js'),j=require('./d3ce001ab1e75959382f6a7e0156dd17.js'),k=require('./0794878a22a26634e42df858bbaca543.js'),l=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),m=require('./eadce02c750c875a10680bcfedadec88.js'),n=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),o=require('moment'),{connect:p}=require('react-redux'),{QCLOUD_SVR_NO_FOUND_ERR:q,QCLOUD_SVR_POLL_TIMEOUT:r,QCLOUD_SVR_POLL_DOING:s}=require('./949d8235c744ced2a80121e4dba34c28.js');class t extends a.Component{constructor(a){super(a),this.state={QCloudLeft:a.left,QCloudTop:a.top},this.QCloudConstants=[{name:d.config.CLOUD_ACTION_UPLOAD,value:c.CLOUD_ACTION_UPLOAD},{name:d.config.CLOUD_ACTION_DEBUG,value:c.CLOUD_ACTION_DEBUG},{name:d.config.CLOUD_ACTION_INSTALL_DEPENDENCE,value:c.CLOUD_ACTION_INSTALL_DEPENDENCE},{name:d.config.CLOUD_ACTION_RESTART_SERVICE,value:c.CLOUD_ACTION_RESTART_SERVICE},{name:d.config.CLOUD_ACTION_STOP_SERVICE,value:c.CLOUD_ACTION_STOP_SERVICE},{name:d.config.CLOUD_ACTION_RESET_SERVICE,value:c.CLOUD_ACTION_RESET_SERVICE},{name:d.config.CLOUD_ACTION_UPLOAD_IDC,value:c.CLOUD_ACTION_UPLOAD_IDC},{name:d.config.CLOUD_ACTION_GOTO_MANAGE_PAGE,value:c.CLOUD_ACTION_GOTO_MANAGE_PAGE}],o.locale(navigator.language)}componentWillReceiveProps(a){a.deployDev!=this.props.deployDev&&this.autoDeployDev(),(a.left!=this.props.left||a.top!=this.props.top)&&this.setState({QCloudLeft:a.left,QCloudTop:a.top})}showErr(a,b='\u9519\u8BEF',c=()=>{}){this.props.infoActions.setConfirmInfo({show:!0,showCancel:!1,title:b,content:a,callback:async()=>{c()}})}showQcloudErr(a,b){let c=this.QCloudConstants.find((b)=>{return b.value===a});c=c&&c.name||'';let d,e=b.code;d=e===q?'\u672A\u627E\u5230\u817E\u8BAF\u673A\u5668':e===r?`${c} 请求超时`:e===s?`请等待上次 ${c} 结果`:JSON.stringify(b),this.showErr(d,`${c} 错误`),this.props.windowActions.setQCloud({uploading:{show:!1}})}notify(a,b){j({priority:1,title:a,message:b})}async onQCloudSelect(a){let b=this.QCloudConstants[a];switch(b.value){case c.CLOUD_ACTION_UPLOAD:{this.props.qcloud&&this.props.qcloud.uploadStatus===n.STATUS.LOADING?this.showErr('\u4E0A\u6B21\u4E0A\u4F20\u5C1A\u672A\u5B8C\u6210\uFF0C\u8BF7\u7B49\u5F85\u4E0A\u4F20\u7ED3\u679C\u901A\u77E5','\u6B63\u5728\u4E0A\u4F20\u4E2D\uFF0C\u8BF7\u7B49\u5F85\u4E0A\u6B21\u4E0A\u4F20\u7ED3\u675F'):this.props.windowActions.setQCloud({uploadShow:!0});break}case c.CLOUD_ACTION_UPLOAD_IDC:{this.props.qcloud&&this.props.qcloud.uploadStatus===n.STATUS.LOADING?this.showErr('\u4E0A\u6B21\u4E0A\u4F20\u5C1A\u672A\u5B8C\u6210\uFF0C\u8BF7\u7B49\u5F85\u4E0A\u4F20\u7ED3\u679C\u901A\u77E5','\u6B63\u5728\u4E0A\u4F20\u4E2D\uFF0C\u8BF7\u7B49\u5F85\u4E0A\u6B21\u4E0A\u4F20\u7ED3\u675F'):this.props.windowActions.setQCloud({uploadIDCShow:!0});break}case c.CLOUD_ACTION_DEPLOY_DEV:{this.deployDev();break}case c.CLOUD_ACTION_DEBUG:{this.qcloudDebug();break}case c.CLOUD_ACTION_INSTALL_DEPENDENCE:{this.qcloudInstallDep();break}case c.CLOUD_ACTION_RESTART_SERVICE:{this.qcloudRestartService();break}case c.CLOUD_ACTION_STOP_SERVICE:{this.qcloudStopService();break}case c.CLOUD_ACTION_RESET_SERVICE:{this.qcloudResetService();break}case c.CLOUD_ACTION_DEPLOY_PRODUCT:{this.qcloudDeployProduct();break}case c.CLOUD_ACTION_GOTO_MANAGE_PAGE:{i.jumpQCloudPage('https://www.qcloud.com/login/laAccessCallback');break}}this.props.toolbarActions.toggleClickKey(m.QCLOUD)}async qcloudDebug(){try{this.props.setProjectQCloud({currentOperation:c.CLOUD_ACTION_DEBUG});let a=await k.operatecvm({action:c.CLOUD_ACTION_DEBUG,beforePoll:()=>{this.props.infoActions.showSuccessTip(d.config.QCLOUD_DEBUG_BEGIN_CONTENT)}});nw.Window.open(k.forMatDebugURL(a.ip,a.tunnelUrl),{width:799,height:799}),this.props.setProjectQCloud({currentOperation:''})}catch(a){this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(c.CLOUD_ACTION_DEBUG,a)}}async autoDeployDev(){setTimeout(async()=>{let a=await this.deployDev();a&&(this.props.deployDev.options&&this.props.deployDev.options.installDependence&&(a=await this.qcloudInstallDep(!0)),a&&(a=await this.qcloudRestartService(!0),a&&this.props.windowActions.setQCloud({uploading:{show:!0,status:n.QCLOUD_STATUS.DONE,text:`已完成`}})))})}async deployDev(){if(!this.props.qcloud||!this.props.qcloud.data||!this.props.qcloud.data.fileName)return this.showErr(d.config.QCLOUD_DEPLOY_DEV_NEED_UPLOAD,d.config.QCLOUD_DEPLOY_DEV_FAIL_TITLE,()=>{this.props.setProjectQCloud({uploadShow:!0})}),!1;try{this.props.setProjectQCloud({currentOperation:c.CLOUD_ACTION_DEPLOY_DEV});await k.operatecvm({action:c.CLOUD_ACTION_DEPLOY_DEV,fileName:this.props.qcloud.data.fileName,beforePoll:()=>{this.props.windowActions.setQCloud({uploading:{show:!0,status:n.QCLOUD_STATUS.DEPLOYING,text:d.config.QCLOUD_WATING_TIP_DEPLOYING}}),k.addToNotificationCenter(d.config.QCLOUD_DEPLOY_DEV_BEGIN_CONTENT,d.config.QCLOUD_DEPLOY_DEV_BEGIN_TITLE)}});return this.props.windowActions.setQCloud({uploading:{show:!0,status:n.QCLOUD_STATUS.DEPLOY_SUCCESS,text:d.config.QCLOUD_DEPLOY_DEV_SUCCESS_TITLE,descList:this.props.descList.concat([d.config.QCLOUD_SUCCESS_TIP_DEPLOY.format(o(new Date).calendar())])}}),k.addToNotificationCenter(d.config.QCLOUD_DEPLOY_DEV_SUCCESS_CONTENT,d.config.QCLOUD_DEPLOY_DEV_SUCCESS_TITLE),this.props.setProjectQCloud({currentOperation:''}),!0}catch(a){return this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(c.CLOUD_ACTION_DEPLOY_DEV,a),!1}}async qcloudResetService(){try{this.props.setProjectQCloud({currentOperation:c.CLOUD_ACTION_RESET_SERVICE});await k.operatecvm({action:c.CLOUD_ACTION_RESET_SERVICE,beforePoll:()=>{this.props.infoActions.showSuccessTip(d.config.QCLOUD_RESET_SERVICE_BEGIN_CONTENT),k.addToNotificationCenter(d.config.QCLOUD_RESET_SERVICE_BEGIN_CONTENT,d.config.QCLOUD_RESET_SERVICE_BEGIN_TITLE)}});k.addToNotificationCenter(d.config.QCLOUD_RESET_SERVICE_SUCCESS_CONTENT,d.config.QCLOUD_RESET_SERVICE_SUCCESS_TITLE),this.props.infoActions.showSuccessTip(d.config.QCLOUD_RESET_SERVICE_SUCCESS_CONTENT),this.props.setProjectQCloud({currentOperation:''})}catch(a){this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(c.CLOUD_ACTION_RESET_SERVICE,a)}}async qcloudDeployProduct(){try{this.props.setProjectQCloud({currentOperation:c.CLOUD_ACTION_DEPLOY_PRODUCT});await k.operatecvm({action:c.CLOUD_ACTION_DEPLOY_PRODUCT,fileName:this.props.qcloud.data.fileName,beforePoll:()=>{k.addToNotificationCenter(d.config.QCLOUD_DEPLOY_PRODUCT_BEGIN_CONTENT,d.config.QCLOUD_DEPLOY_PRODUCT_BEGIN_TITLE)}});k.addToNotificationCenter(d.config.QCLOUD_DEPLOY_PRODUCT_SUCCESS_CONTENT,d.config.QCLOUD_DEPLOY_PRODUCT_SUCCESS_TITLE),this.props.infoActions.showSuccessTip(d.config.QCLOUD_DEPLOY_PRODUCT_SUCCESS_CONTENT),this.props.setProjectQCloud({currentOperation:''})}catch(a){this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(c.CLOUD_ACTION_DEPLOY_PRODUCT,a)}}async qcloudInstallDep(a){try{this.props.setProjectQCloud({currentOperation:c.CLOUD_ACTION_INSTALL_DEPENDENCE});await k.operatecvm({action:c.CLOUD_ACTION_INSTALL_DEPENDENCE,beforePoll:()=>{this.props.windowActions.setQCloud({uploading:{show:!0,status:n.QCLOUD_STATUS.INSTALLING,text:d.config.QCLOUD_WATING_TIP_INSTALLINIG}}),k.addToNotificationCenter(d.config.QCLOUD_INSTALL_DEP_BEGIN_CONTENT,d.config.QCLOUD_INSTALL_DEP_BEGIN_TITLE)}});let b=[d.config.QCLOUD_SUCCESS_TIP_INSTALL.format(o(new Date).calendar())];return a&&(b=this.props.descList.concat(b)),this.props.windowActions.setQCloud({uploading:{show:!0,status:n.QCLOUD_STATUS.DEPLOY_SUCCESS,text:d.config.QCLOUD_INSTALL_DEP_SUCCESS_CONTENT,descList:b}}),k.addToNotificationCenter(d.config.QCLOUD_INSTALL_DEP_SUCCESS_CONTENT,d.config.QCLOUD_INSTALL_DEP_SUCCESS_TITLE),this.props.setProjectQCloud({currentOperation:''}),!0}catch(a){return this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(c.CLOUD_ACTION_INSTALL_DEPENDENCE,a),!1}}async qcloudRestartService(a){try{this.props.setProjectQCloud({currentOperation:c.CLOUD_ACTION_RESTART_SERVICE});let b=await k.operatecvm({action:c.CLOUD_ACTION_RESTART_SERVICE,beforePoll:()=>{this.props.windowActions.setQCloud({uploading:{show:!0,status:n.QCLOUD_STATUS.RESTARTING,text:d.config.QCLOUD_WATING_TIP_RESTARTING}}),k.addToNotificationCenter(d.config.QCLOUD_RESTART_SERVICE_BEGIN_CONTENT,d.config.QCLOUD_RESTART_SERVICE_BEGIN_TITLE)}}),e=[d.config.QCLOUD_SUCCESS_TIP_RESTART.format(o(new Date).calendar())];return a&&(e=this.props.descList.concat(e)),this.props.windowActions.setQCloud({uploading:{show:!0,status:n.QCLOUD_STATUS.DEPLOY_SUCCESS,text:d.config.QCLOUD_RESTART_SERVICE_SUCCESS_TITLE,descList:e}}),k.addToNotificationCenter(d.config.QCLOUD_RESTART_SERVICE_SUCCESS_CONTENT,d.config.QCLOUD_RESTART_SERVICE_SUCCESS_TITLE),this.props.setProjectQCloud({currentOperation:''}),!0}catch(a){return this.showQcloudErr(c.CLOUD_ACTION_RESTART_SERVICE,a),this.props.setProjectQCloud({currentOperation:''}),!1}}async qcloudStopService(){try{this.props.setProjectQCloud({currentOperation:c.CLOUD_ACTION_STOP_SERVICE});await k.operatecvm({action:c.CLOUD_ACTION_STOP_SERVICE,beforePoll:()=>{this.props.infoActions.showSuccessTip(d.config.QCLOUD_STOP_SERVICE_BEGIN_CONTENT),k.addToNotificationCenter(d.config.QCLOUD_STOP_SERVICE_BEGIN_CONTENT,d.config.QCLOUD_STOP_SERVICE_BEGIN_TITLE)}});k.addToNotificationCenter(d.config.QCLOUD_STOP_SERVICE_SUCCESS_CONTENT,d.config.QCLOUD_STOP_SERVICE_SUCCESS_TITLE,!1),this.props.infoActions.showSuccessTip(d.config.QCLOUD_STOP_SERVICE_SUCCESS_CONTENT),this.props.setProjectQCloud({currentOperation:''})}catch(a){this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(c.CLOUD_ACTION_STOP_SERVICE,a)}}render(){const c=this.props;let d=this.QCloudConstants.map((a)=>{return a.name});return a.createElement(b,{width:152,left:this.props.left,right:this.props.right,top:this.props.top,show:c.clickkey==m.QCLOUD,list:d,divider:[d.length-2,d.length-3],onSelectClick:this.onQCloudSelect.bind(this)})}}module.exports=p((a)=>{let b=a.project.current||{},c=b.attr&&b.attr.userbanded,e=b.isTourist||!c,f='';e&&(f=b.isTourist?d.config.ALERT_TOURIST_FORBIDDEN_CONTENT:c?'':d.config.CGI_ERR_NOT_BAND);let g=a.window.qcloud.actionType||{},h=a.window.qcloud.uploading&&a.window.qcloud.uploading.descList||[];return{qcloud:b&&b.qcloud,clickkey:a.toolbar.clickKey,deployDev:g.deployDev,installDependence:g.installDependence,restartService:g.restartService,project:b,actionBtnDisabled:e,disabledTips:f,descList:h}},(a)=>{return{toolbarActions:l.bindActionCreators(g,a),windowActions:l.bindActionCreators(e,a),infoActions:l.bindActionCreators(f,a),setProjectQCloud:l.bindActionCreators(h.setProjectQCloud,a)}})(t)}(require('lazyload'),require);