'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(){let a=f.settings;const b=e.merge({},d.settings,a);return b.show=!1,b}const{REHYDRATE:b}=require('redux-persist/lib/constants'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./5498e660c05c574f739a28bd5d202cfa.js'),e=require('lodash'),f=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js');module.exports=function(b=a(),d){switch(d.type){case c.SETTINGS_OPEN_IDE_SETTINGS:return _extends({},b,{show:!0,currentCategory:d.category||'proxy'});case c.SETTINGS_CLOSE_IDE_SETTINGS:return _extends({},b,{show:!1});case c.SETTINGS_SAVE_IDE_SETTINGS:return e.merge(JSON.parse(JSON.stringify(b)),d.newSettings);case c.SETTINGS_PARTIAL_UPDATE_IDE_SETTINGS:return _extends({},b,{[d.section]:_extends({},b[d.section],{[d.option]:d.value})});case c.SETTINGS_SET_GEO:return _extends({},b,{geo:_extends({},b.geo,d.data)});case c.SETTINGS_SET_PROXY:return _extends({},b,{proxy:_extends({},b.proxy,d.data)});default:return b;}}}(require('lazyload'),require);