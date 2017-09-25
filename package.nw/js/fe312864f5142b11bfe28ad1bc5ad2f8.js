'use strict';!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('./a8c87029da0fa06e986298d447ab0fe2.js'),d=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),e=require('./25d0beb4120ce2acafb4e03b95444fda.js'),f=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),g=require('./0794878a22a26634e42df858bbaca543.js'),h=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),i=require('./72410b6d4968336cd8b2fc1d41f52cdf.js'),j=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),k=require('moment'),l=require('./common/locales/index.js'),m=require('./875171e7b864aa58d026d4fa0999fbd1.js'),{connect:n}=require('react-redux');class o extends a.Component{constructor(a){super(a),this.state={cleverUpload:!0,moduleUpload:!1,tickSrc:!1,tickNodeModules:!1,tickPackageJSON:!1,autoInstallDependence:!1,show:a.show},k.locale(navigator.language)}componentWillReceiveProps(a){a.show!=this.props.show&&this.setState({show:a.show})}onClose(){this.setState({show:!1})}async onConfirm(){try{this.setState({show:!1}),this.props.setProjectQCloud({uploadStatus:h.STATUS.LOADING,currentOperation:i.CLOUD_ACTION_UPLOAD});let a='PROXY dev-proxy.oa.com:8080'===nw.App.getProxyForURL('https://gz.file.myqcloud.com');this.props.setQCloudWnd({show:!0,status:h.QCLOUD_STATUS.UPLOADING,text:l.config.QCLOUD_WATING_TIP_UPLOADING});const b=await g.uploadSvrCode(this.props.project,{cleverPack:this.state.cleverUpload,src:this.state.tickSrc,node_modules:this.state.tickNodeModules,packagejson:!0,onBeforeUpload:(b)=>{if(a){const a=b.pDataLength/1024,c=(a/40).toFixed(0);this.props.setQCloudWnd({show:!0,status:h.QCLOUD_STATUS.UPLOADING,text:l.config.QCLOUD_WATING_TIP_UPLOADING,descList:[`因开发网上传速度受限，预计需时 ${c}s，请等待上传完成通知`],estimateTime:c})}}});this.props.setProjectQCloud({data:b,uploadStatus:h.STATUS.SUCCESS,currentOperation:''}),this.props.setQCloudWnd({show:!0,status:h.QCLOUD_STATUS.UPLOAD_SUCCESS,text:l.config.QCLOUD_UPLOAD_SUCCESS_TITLE,descList:[l.config.QCLOUD_SUCCESS_TIP_UPLOAD.format(k(new Date).calendar())],estimateTime:void 0}),this.props.setQCloudActionType(h.QCLOUD_ACTION_TYPE.DEPLOY_DEV,{installDependence:this.state.autoInstallDependence})}catch(a){this.props.showUploading(h.QCLOUD_STATUS.UPLOAD_FAIL,a.toString()),this.props.setProjectQCloud({uploadStatus:h.STATUS.FAIL,currentOperation:''})}}onQuestionMarkClick(){nw.Shell.openExternal('https://github.com/tencentyun/wafer2-startup')}toggleCleverUpload(a){a.stopPropagation(),this.setState({cleverUpload:!0,moduleUpload:!1})}toggleModuleUpload(a){a.stopPropagation(),this.setState({cleverUpload:!1,moduleUpload:!0})}toggleSrcCheckbox(a){a.stopPropagation(),this.setState({tickSrc:!this.state.tickSrc})}toggleNodeModulesCheckbox(a){a.stopPropagation(),this.setState({tickNodeModules:!this.state.tickNodeModules})}togglePackageJSONCheckbox(a){a.stopPropagation(),this.setState({tickPackageJSON:!this.state.tickPackageJSON})}toggleAutoInstall(a){a.stopPropagation(),this.setState({autoInstallDependence:!this.state.autoInstallDependence})}onAnimationOut(){this.props.close()}render(){this.props;return a.createElement(m,{show:this.state.show,style:{width:420,marginLeft:-210},inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this)},a.createElement('div',{className:'ui-dialog-hd'},a.createElement('h3',{className:'ui-dialog-title'},'\u4E0A\u4F20\u817E\u8BAF\u4E91')),a.createElement('div',{className:'ui-dialog-bd'},a.createElement('p',{className:'ui-desc'},'\u9009\u62E9\u4E0A\u4F20\u6A21\u5F0F'),a.createElement('br',null),a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('div',{className:'ui-form-controls'},a.createElement('label',{className:'ui-radio ui-radio-vt',onClick:this.toggleCleverUpload.bind(this)},a.createElement('i',{className:this.state.cleverUpload?'ui-icon-radio-o':'ui-icon-radio'}),a.createElement('div',{className:'ui-radio-text'},a.createElement('p',null,'\u667A\u80FD\u4E0A\u4F20'),a.createElement('p',{className:'ui-desc'},'\u63A8\u8350\u4F7F\u7528\uFF0C\u4EC5\u5BF9\u53D8\u5316\u7684\u4EE3\u7801\u8FDB\u884C\u4E0A\u4F20'))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('div',{className:'ui-form-controls'},a.createElement('label',{className:'ui-radio ui-radio-vt',onClick:this.toggleModuleUpload.bind(this)},a.createElement('i',{className:this.state.moduleUpload?'ui-icon-radio-o':'ui-icon-radio'}),a.createElement('div',{className:'ui-radio-text'},a.createElement('p',null,'\u6A21\u5757\u4E0A\u4F20'),a.createElement('p',{className:'ui-desc'},'\u53EF\u5206\u522B\u4E0A\u4F20 node_modules \u53CA\u4EE5\u5916\u7684\u4EE3\u7801'),a.createElement('div',{style:this.state.moduleUpload?{}:j.displayNone},a.createElement('p',null,a.createElement('label',{className:'ui-checkbox',onClick:this.toggleSrcCheckbox.bind(this)},a.createElement('i',{className:this.state.tickSrc?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},'\u4E0A\u4F20 node_modules \u4EE5\u5916\u4EE3\u7801'))),a.createElement('p',null,a.createElement('label',{className:'ui-checkbox',onClick:this.toggleNodeModulesCheckbox.bind(this)},a.createElement('i',{className:this.state.tickNodeModules?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},'\u4E0A\u4F20 node_modules \u4EE3\u7801')))))))))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('label',{className:'ui-checkbox',onClick:this.toggleAutoInstall.bind(this)},a.createElement('i',{className:this.state.autoInstallDependence?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},'\u90E8\u7F72\u540E\u81EA\u52A8\u5B89\u88C5\u4F9D\u8D56'))),a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},'\u53D6\u6D88'),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},'\u786E\u5B9A'))))}}module.exports=n((a)=>{let b=a.window.qcloud.uploading&&a.window.qcloud.uploading.descList||[],c=a.project.current;return{qcloud:c&&c.qcloud,show:a.window.qcloud.uploadShow,project:c,descList:b}},(a)=>{return{setAutoInstallDependence:(b)=>{a(c.setQCloud({autoInstallDependence:b}))},setQCloudWnd:(b)=>{a(c.setQCloud({uploading:b}))},showUploading:(b=h.QCLOUD_UPLOADING_STATUS.UPLOADING,d='',e='')=>{a(c.setQCloud({uploading:{show:!0,status:b,text:d,estimateTime:e}}))},closeUploading:()=>{a(c.setQCloud({uploading:{show:!1,status:h.QCLOUD_UPLOADING_STATUS.UPLOADING,text:''}}))},close:()=>{a(c.setQCloud({uploadShow:!1}))},setProjectQCloud:(b)=>{a(d.setProjectQCloud(b))},setQCloudActionType:(b,d)=>{a(c.setQCloudActionType({actionType:b,options:d}))},notifyFail:(b)=>a(f.setConfirmInfo({show:!0,showCancel:!1,title:l.config.QCLOUD_UPLOAD_FAIL_TITLE,content:b,callback:async()=>{a(f.setConfirmInfo({show:!1}))}}))}})(o)}(require('lazyload'),require);