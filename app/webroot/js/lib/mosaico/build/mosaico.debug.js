(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Mosaico = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js":[function(require,module,exports){
(function (global){
function log(){}function info(){console.log.apply(console,arguments)}function warn(){console.log.apply(console,arguments)}function error(){console.warn.apply(console,arguments)}function time(o){times[o]=Date.now()}function timeEnd(o){var e=times[o];if(!e)throw new Error("No such label: "+o);var n=Date.now()-e;console.log(o+": "+n+"ms")}function trace(){var o=new Error;o.name="Trace",o.message=util.format.apply(null,arguments),console.error(o.stack)}function dir(o){console.log(util.inspect(o)+"\n")}function assert(o){if(!o){var e=slice.call(arguments,1);assert.ok(!1,util.format.apply(null,e))}}var util=require("util"),assert=require("assert"),slice=Array.prototype.slice,console,times={};console="undefined"!=typeof global&&global.console?global.console:"undefined"!=typeof window&&window.console?window.console:{};for(var functions=[[log,"log"],[info,"info"],[warn,"warn"],[error,"error"],[time,"time"],[timeEnd,"timeEnd"],[trace,"trace"],[dir,"dir"],[assert,"assert"]],i=0;i<functions.length;i++){var tuple=functions[i],f=tuple[0],name=tuple[1];console[name]||(console[name]=f)}module.exports=console;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"assert":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/assert/assert.js","util":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/util/util.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/evol-colorpicker/js/evol.colorpicker.min.js":[function(require,module,exports){
!function(t,e){var i=0,o=window.navigator.userAgent,s=o.indexOf("MSIE ")>0,f=s?"-ie":"",n=s?!1:/mozilla/.test(o.toLowerCase())&&!/webkit/.test(o.toLowerCase()),c=[],a=["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646"],r=["f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada","d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5","bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","92cddc","fac08f","a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","31859b","e36c09","7f7f7f","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","205867","974806"],l=["c00000","ff0000","ffc000","ffff00","92d050","00b050","00b0f0","0070c0","002060","7030a0"],h=[["003366","336699","3366cc","003399","000099","0000cc","000066"],["006666","006699","0099cc","0066cc","0033cc","0000ff","3333ff","333399"],["669999","009999","33cccc","00ccff","0099ff","0066ff","3366ff","3333cc","666699"],["339966","00cc99","00ffcc","00ffff","33ccff","3399ff","6699ff","6666ff","6600ff","6600cc"],["339933","00cc66","00ff99","66ffcc","66ffff","66ccff","99ccff","9999ff","9966ff","9933ff","9900ff"],["006600","00cc00","00ff00","66ff99","99ffcc","ccffff","ccccff","cc99ff","cc66ff","cc33ff","cc00ff","9900cc"],["003300","009933","33cc33","66ff66","99ff99","ccffcc","ffffff","ffccff","ff99ff","ff66ff","ff00ff","cc00cc","660066"],["333300","009900","66ff33","99ff66","ccff99","ffffcc","ffcccc","ff99cc","ff66cc","ff33cc","cc0099","993399"],["336600","669900","99ff33","ccff66","ffff99","ffcc99","ff9999","ff6699","ff3399","cc3399","990099"],["666633","99cc00","ccff33","ffff66","ffcc66","ff9966","ff6666","ff0066","d60094","993366"],["a58800","cccc00","ffff00","ffcc00","ff9933","ff6600","ff0033","cc0066","660033"],["996633","cc9900","ff9900","cc6600","ff3300","ff0000","cc0000","990033"],["663300","996600","cc3300","993300","990000","800000","993333"]],d="#0000ffff",p=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},v=function(t){return p(Number(t))},u=function(t){var e=p(t);return e+e+e},_=function(t){if(t.length>10){var e=1+t.indexOf("("),i=t.indexOf(")"),o=t.substring(e,i).split(",");return["#",v(o[0]),v(o[1]),v(o[2])].join("")}return t};t.widget("evol.colorpicker",{version:"3.2.1",options:{color:null,showOn:"both",hideButton:!1,displayIndicator:!0,transparentColor:!1,history:!0,defaultPalette:"theme",strings:"Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet."},_active:!1,_create:function(){var e=this;switch(this._paletteIdx="theme"==this.options.defaultPalette?1:2,this._id="evo-cp"+i++,this._enabled=!0,this.options.showOn=this.options.hideButton?"focus":this.options.showOn,this.element.get(0).tagName){case"INPUT":var o=this.options.color,c=this.element,a=("focus"===this.options.showOn?"":"evo-pointer ")+"evo-colorind"+(n?"-ff":f)+(this.options.hideButton?" evo-hidden-button":""),r="";if(this._isPopup=!0,this._palette=null,null!==o)c.val(o);else{var l=c.val();""!==l&&(o=this.options.color=l)}o===d?a+=" evo-transparent":r=null!==o?"background-color:"+o:"",c.addClass("colorPicker "+this._id).wrap('<div style="width:'+(this.options.hideButton?this.element.width():this.element.width()+32)+"px;"+(s?"margin-bottom:-21px;":"")+(n?"padding:1px 0;":"")+'"></div>').after('<div class="'+a+'" style="'+r+'"></div>').on("keyup onpaste",function(i){var o=t(this).val();o!=e.options.color&&e._setValue(o,!0)});var h=this.options.showOn;("both"===h||"focus"===h)&&c.on("focus",function(){e.showPalette()}),("both"===h||"button"===h)&&c.next().on("click",function(t){return t.stopPropagation(),e.showPalette(),!1});break;default:this._isPopup=!1,this._palette=this.element.html(this._paletteHTML()).attr("aria-haspopup","true"),this._bindColors()}if(this.options.history&&(o&&this._add2History(o),this.options.initialHistory)){var p=this.options.initialHistory;for(var v in p)this._add2History(p[v])}},_paletteHTML:function(){var t=this._paletteIdx=Math.abs(this._paletteIdx),e=this.options,i=e.strings.split(","),o='<div class="evo-pop'+f+' ui-widget ui-widget-content ui-corner-all"'+(this._isPopup?' style="position:absolute"':"")+"><span>"+this["_paletteHTML"+t]()+'</span><div class="evo-more"><a href="javascript:void(0)">'+i[1+t]+"</a>";return e.history&&(o+='<a href="javascript:void(0)" class="evo-hist">'+i[5]+"</a>"),o+="</div>",e.displayIndicator&&(o+=this._colorIndHTML(this.options.color)+this._colorIndHTML("")),o+="</div>"},_colorIndHTML:function(t){var e=s?"evo-colorbox-ie ":"",i="";return t?t===d?e+="evo-transparent":i="background-color:"+t:i="display:none",'<div class="evo-color" style="float:left"><div style="'+i+'" class="'+e+'"></div><span>'+(t?t:"")+"</span></div>"},_paletteHTML1:function(){for(var t=this.options,e=t.strings.split(","),i='<td style="background-color:#',o=s?'"><div style="width:2px;"></div></td>':'"><span/></td>',n='<tr><th colspan="10" class="ui-widget-content">',c='<table class="evo-palette'+f+'">'+n+e[0]+"</th></tr><tr>",h=0;10>h;h++)c+=i+a[h]+o;for(c+="</tr>",s||(c+='<tr><th colspan="10"></th></tr>'),c+='<tr class="top">',h=0;10>h;h++)c+=i+r[h]+o;for(var d=1;4>d;d++)for(c+='</tr><tr class="in">',h=0;10>h;h++)c+=i+r[10*d+h]+o;for(c+='</tr><tr class="bottom">',h=40;50>h;h++)c+=i+r[h]+o;for(c+="</tr>"+n,t.transparentColor&&(c+='<div class="evo-transparent evo-tr-box"></div>'),c+=e[1]+"</th></tr><tr>",h=0;10>h;h++)c+=i+l[h]+o;return c+="</tr></table>"},_paletteHTML2:function(){for(var t,e,i='<td style="background-color:#',o=s?'"><div style="width:5px;"></div></td>':'"><span/></td>',n='<table class="evo-palette2'+f+'"><tr>',c="</tr></table>",a='<div class="evo-palcenter">',r=0,l=h.length;l>r;r++){a+=n;var d=h[r];for(t=0,e=d.length;e>t;t++)a+=i+d[t]+o;a+=c}a+='<div class="evo-sep"/>';var p="";for(a+=n,t=255;t>10;t-=10)a+=i+u(t)+o,t-=10,p+=i+u(t)+o;return a+=c+n+p+c+"</div>"},_switchPalette:function(e){if(this._enabled){var i,o,s,f=this.options.strings.split(",");if(t(e).hasClass("evo-hist")){var n=['<table class="evo-palette"><tr><th class="ui-widget-content">',f[5],"</th></tr></tr></table>",'<div class="evo-cHist">'];if(0===c.length)n.push("<p>&nbsp;",f[6],"</p>");else for(var a=c.length-1;a>-1;a--)9===c[a].length?n.push('<div class="evo-transparent"></div>'):n.push('<div style="background-color:',c[a],'"></div>');n.push("</div>"),i=-this._paletteIdx,o=n.join(""),s=f[4]}else this._paletteIdx<0?(i=-this._paletteIdx,this._palette.find(".evo-hist").show()):i=2==this._paletteIdx?1:2,o=this["_paletteHTML"+i](),s=f[i+1],this._paletteIdx=i;this._paletteIdx=i;var r=this._palette.find(".evo-more").prev().html(o).end().children().eq(0).html(s);0>i&&r.next().hide()}},_downOrUpPositioning:function(){for(var t=this.element,e=0;null!==t&&100>e;){if("visible"!=t.css("overflow")){var i=this._palette.offset().top+this._palette.height(),o=t.offset().top+t.height(),s=this._palette.offset().top-this._palette.height()-this.element.outerHeight(),f=t.offset().top,n=i>o&&s>f;n?this._palette.css({bottom:this.element.outerHeight()+"px"}):this._palette.css({bottom:"auto"});break}if("HTML"==t[0].tagName)break;t=t.offsetParent(),e++}},showPalette:function(){if(this._enabled&&(this._active=!0,t(".colorPicker").not("."+this._id).colorpicker("hidePalette"),null===this._palette)){this._palette=this.element.next().after(this._paletteHTML()).next().on("click",function(t){return t.stopPropagation(),!1}),this._bindColors();var e=this;this._isPopup&&(this._downOrUpPositioning(),t(document.body).on("click."+e._id,function(t){t.target!=e.element.get(0)&&e.hidePalette()}).on("keyup."+e._id,function(t){27===t.keyCode&&e.hidePalette()}))}return this},hidePalette:function(){if(this._isPopup&&this._palette){t(document.body).off("click."+this._id);var e=this;this._palette.off("mouseover click","td,.evo-transparent").fadeOut(function(){e._palette.remove(),e._palette=e._cTxt=null}).find(".evo-more a").off("click")}return this},_bindColors:function(){var e=this,i=this.options,o=this._palette.find("div.evo-color"),s=i.history?"td,.evo-cHist>div":"td";i.transparentColor&&(s+=",.evo-transparent"),this._cTxt1=o.eq(0).children().eq(0),this._cTxt2=o.eq(1).children().eq(0),this._palette.on("click",s,function(i){if(e._enabled){var o=t(this);e._setValue(o.hasClass("evo-transparent")?d:_(o.attr("style").substring(17))),e._active=!1}}).on("mouseover",s,function(i){if(e._enabled){var o=t(this),s=o.hasClass("evo-transparent")?d:_(o.attr("style").substring(17));e.options.displayIndicator&&e._setColorInd(s,2),e._active&&e.element.trigger("mouseover.color",s)}}).find(".evo-more a").on("click",function(){e._switchPalette(this)})},val:function(t){return"undefined"==typeof t?this.options.color:(this._setValue(t),this)},_setValue:function(t,e){t=t.replace(/ /g,""),this.options.color=t,this._isPopup?(e||this.hidePalette(),this._setBoxColor(this.element.val(t).next(),t)):this._setColorInd(t,1),this.options.history&&this._paletteIdx>0&&this._add2History(t),this.element.trigger("change.color",t)},_setColorInd:function(t,e){var i=this["_cTxt"+e];this._setBoxColor(i,t),i.next().html(t)},_setBoxColor:function(t,e){e===d?t.addClass("evo-transparent").removeAttr("style"):t.removeClass("evo-transparent").attr("style","background-color:"+e)},_setOption:function(t,e){"color"==t?this._setValue(e,!0):this.options[t]=e},_add2History:function(t){for(var e=c.length,i=0;e>i;i++)if(t==c[i])return;e>27&&c.shift(),c.push(t)},clear:function(){this.hidePalette().val("")},enable:function(){var t=this.element;return this._isPopup?t.removeAttr("disabled"):t.css({opacity:"1","pointer-events":"auto"}),"focus"!==this.options.showOn&&this.element.next().addClass("evo-pointer"),t.removeAttr("aria-disabled"),this._enabled=!0,this},disable:function(){var t=this.element;return this._isPopup?t.attr("disabled","disabled"):(this.hidePalette(),t.css({opacity:"0.3","pointer-events":"none"})),"focus"!==this.options.showOn&&this.element.next().removeClass("evo-pointer"),t.attr("aria-disabled","true"),this._enabled=!1,this},isDisabled:function(){return!this._enabled},destroy:function(){t(document.body).off("click."+this._id),this._palette&&(this._palette.off("mouseover click","td,.evo-cHist>div,.evo-transparent").find(".evo-more a").off("click"),this._isPopup&&this._palette.remove(),this._palette=this._cTxt=null),this._isPopup&&this.element.next().off("click").remove().end().off("focus").unwrap(),this.element.removeClass("colorPicker "+this.id).empty(),t.Widget.prototype.destroy.call(this)}})}(jQuery);

},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/jsep/src/jsep.js":[function(require,module,exports){
!function(e){"use strict";var r="Compound",t="Identifier",n="MemberExpression",o="Literal",u="ThisExpression",i="CallExpression",a="UnaryExpression",s="BinaryExpression",p="LogicalExpression",c="ConditionalExpression",f="ArrayExpression",l=46,d=44,v=39,h=34,x=40,y=41,b=91,E=93,m=63,g=59,w=58,U=function(e,r){var t=new Error(e+" at character "+r);throw t.index=r,t.description=e,t},O=!0,k={"-":O,"!":O,"~":O,"+":O},j={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},P=function(e){var r,t=0;for(var n in e)(r=n.length)>t&&e.hasOwnProperty(n)&&(t=r);return t},C=P(k),B=P(j),A={"true":!0,"false":!1,"null":null},S="this",q=function(e){return j[e]||0},J=function(e,r,t){var n="||"===e||"&&"===e?p:s;return{type:n,operator:e,left:r,right:t}},L=function(e){return e>=48&&57>=e},M=function(e){return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e},F=function(e){return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e||e>=48&&57>=e},I=function(e){for(var s,p,O=0,P=e.charAt,I=e.charCodeAt,T=function(r){return P.call(e,r)},V=function(r){return I.call(e,r)},z=e.length,D=function(){for(var e=V(O);32===e||9===e;)e=V(++O)},G=function(){var e,r,t=K();return D(),V(O)!==m?t:(O++,e=G(),e||U("Expected expression",O),D(),V(O)===w?(O++,r=G(),r||U("Expected expression",O),{type:c,test:t,consequent:e,alternate:r}):void U("Expected :",O))},H=function(){D();for(var r=e.substr(O,B),t=r.length;t>0;){if(j.hasOwnProperty(r))return O+=t,r;r=r.substr(0,--t)}return!1},K=function(){var e,r,t,n,o,u,i,a;if(u=N(),r=H(),!r)return u;for(o={value:r,prec:q(r)},i=N(),i||U("Expected expression after "+r,O),n=[u,o,i];(r=H())&&(t=q(r),0!==t);){for(o={value:r,prec:t};n.length>2&&t<=n[n.length-2].prec;)i=n.pop(),r=n.pop().value,u=n.pop(),e=J(r,u,i),n.push(e);e=N(),e||U("Expected expression after "+r,O),n.push(o,e)}for(a=n.length-1,e=n[a];a>1;)e=J(n[a-1].value,n[a-2],e),a-=2;return e},N=function(){var r,t,n;if(D(),r=V(O),L(r)||r===l)return Q();if(r===v||r===h)return R();if(M(r)||r===x)return Y();if(r===b)return $();for(t=e.substr(O,C),n=t.length;n>0;){if(k.hasOwnProperty(t))return O+=n,{type:a,operator:t,argument:N(),prefix:!0};t=t.substr(0,--n)}return!1},Q=function(){for(var e,r,t="";L(V(O));)t+=T(O++);if(V(O)===l)for(t+=T(O++);L(V(O));)t+=T(O++);if(e=T(O),"e"===e||"E"===e){for(t+=T(O++),e=T(O),"+"!==e&&"-"!==e||(t+=T(O++));L(V(O));)t+=T(O++);L(V(O-1))||U("Expected exponent ("+t+T(O)+")",O)}return r=V(O),M(r)?U("Variable names cannot start with a number ("+t+T(O)+")",O):r===l&&U("Unexpected period",O),{type:o,value:parseFloat(t),raw:t}},R=function(){for(var e,r="",t=T(O++),n=!1;z>O;){if(e=T(O++),e===t){n=!0;break}if("\\"===e)switch(e=T(O++)){case"n":r+="\n";break;case"r":r+="\r";break;case"t":r+="	";break;case"b":r+="\b";break;case"f":r+="\f";break;case"v":r+="\x0B"}else r+=e}return n||U('Unclosed quote after "'+r+'"',O),{type:o,value:r,raw:t+r+t}},W=function(){var r,n=V(O),i=O;for(M(n)?O++:U("Unexpected "+T(O),O);z>O&&(n=V(O),F(n));)O++;return r=e.slice(i,O),A.hasOwnProperty(r)?{type:o,value:A[r],raw:r}:r===S?{type:u}:{type:t,name:r}},X=function(e){for(var t,n,o=[];z>O;){if(D(),t=V(O),t===e){O++;break}t===d?O++:(n=G(),n&&n.type!==r||U("Expected comma",O),o.push(n))}return o},Y=function(){var e,r;for(e=V(O),r=e===x?Z():W(),D(),e=V(O);e===l||e===b||e===x;)O++,e===l?(D(),r={type:n,computed:!1,object:r,property:W()}):e===b?(r={type:n,computed:!0,object:r,property:G()},D(),e=V(O),e!==E&&U("Unclosed [",O),O++):e===x&&(r={type:i,arguments:X(y),callee:r}),D(),e=V(O);return r},Z=function(){O++;var e=G();return D(),V(O)===y?(O++,e):void U("Unclosed (",O)},$=function(){return O++,{type:f,elements:X(E)}},_=[];z>O;)s=V(O),s===g||s===d?O++:(p=G())?_.push(p):z>O&&U('Unexpected "'+T(O)+'"',O);return 1===_.length?_[0]:{type:r,body:_}};if(I.version="<%= version %>",I.toString=function(){return"JavaScript Expression Parser (JSEP) v"+I.version},I.addUnaryOp=function(e){return k[e]=O,this},I.addBinaryOp=function(e,r){return B=Math.max(e.length,B),j[e]=r,this},I.removeUnaryOp=function(e){return delete k[e],e.length===C&&(C=P(k)),this},I.removeBinaryOp=function(e){return delete j[e],e.length===B&&(B=P(j)),this},"undefined"==typeof exports){var T=e.jsep;e.jsep=I,I.noConflict=function(){return e.jsep===I&&(e.jsep=T),I}}else"undefined"!=typeof module&&module.exports?exports=module.exports=I:exports.parse=I}(this);

},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-sortable/build/knockout-sortable.min.js":[function(require,module,exports){
(function (global){
!function(e){if("function"==typeof define&&define.amd)define(["knockout","jquery","jquery-ui/sortable","jquery-ui/draggable"],e);else if("function"==typeof require&&"object"==typeof exports&&"object"==typeof module){var n=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),t=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),e(n,t)}else e(window.ko,window.jQuery)}(function(e,n){var t="ko_sortItem",o="ko_sourceIndex",a="ko_sortList",r="ko_parentList",i="ko_dragItem",s=e.utils.unwrapObservable,d=e.utils.domData.get,l=e.utils.domData.set,c=n.ui&&n.ui.version,u=c&&c.indexOf("1.6.")&&c.indexOf("1.7.")&&(c.indexOf("1.8.")||"1.8.24"===c),p=function(n,o){e.utils.arrayForEach(n,function(e){1===e.nodeType&&(l(e,t,o),l(e,r,d(e.parentNode,a)))})},f=function(n,t){var o,a={},r=s(n())||{};return r.data?(a[t]=r.data,a.name=r.template):a[t]=n(),e.utils.arrayForEach(["afterAdd","afterRender","as","beforeRemove","includeDestroyed","templateEngine","templateOptions","nodes"],function(n){r.hasOwnProperty(n)?a[n]=r[n]:e.bindingHandlers.sortable.hasOwnProperty(n)&&(a[n]=e.bindingHandlers.sortable[n])}),"foreach"===t&&(a.afterRender?(o=a.afterRender,a.afterRender=function(e,n){p.call(n,e,n),o.call(n,e,n)}):a.afterRender=p),a},b=function(e,n){var t=s(n);if(t)for(var o=0;e>o;o++)t[o]&&s(t[o]._destroy)&&e++;return e},g=function(t,o){var a,r;o?(r=document.getElementById(o),r&&(a=new e.templateSources.domElement(r),a.text(n.trim(a.text())))):n(t).contents().each(function(){this&&1!==this.nodeType&&t.removeChild(this)})};e.bindingHandlers.sortable={init:function(c,p,m,v,h){var y,D,C=n(c),x=s(p())||{},k=f(p,"foreach"),w={};g(c,k.name),n.extend(!0,w,e.bindingHandlers.sortable),x.options&&w.options&&(e.utils.extend(w.options,x.options),delete x.options),e.utils.extend(w,x),w.connectClass&&(e.isObservable(w.allowDrop)||"function"==typeof w.allowDrop)?e.computed({read:function(){var n=s(w.allowDrop),t="function"==typeof n?n.call(this,k.foreach):n;e.utils.toggleDomNodeCssClass(c,w.connectClass,t)},disposeWhenNodeIsRemoved:c},this):e.utils.toggleDomNodeCssClass(c,w.connectClass,w.allowDrop),e.bindingHandlers.template.init(c,function(){return k},m,v,h),y=w.options.start,D=w.options.update;var H=setTimeout(function(){var p;C.sortable(e.utils.extend(w.options,{start:function(n,t){var a=t.item[0];l(a,o,e.utils.arrayIndexOf(t.item.parent().children(),a)),t.item.find("input:focus").change(),y&&y.apply(this,arguments)},receive:function(e,n){p=d(n.item[0],i),p&&(p.clone&&(p=p.clone()),w.dragged&&(p=w.dragged.call(this,p,e,n)||p))},update:function(i,s){var c,f,g,m,v,h=s.item[0],y=s.item.parent()[0],C=d(h,t)||p;if(p=null,C&&this===y||!u&&n.contains(this,y)){if(c=d(h,r),g=d(h,o),f=d(h.parentNode,a),m=e.utils.arrayIndexOf(s.item.parent().children(),h),k.includeDestroyed||(g=b(g,c),m=b(m,f)),(w.beforeMove||w.afterMove)&&(v={item:C,sourceParent:c,sourceParentNode:c&&s.sender||h.parentNode,sourceIndex:g,targetParent:f,targetIndex:m,cancelDrop:!1},w.beforeMove&&w.beforeMove.call(this,v,i,s)),c?n(c===f?this:s.sender||this).sortable("cancel"):n(h).remove(),v&&v.cancelDrop)return;m>=0&&(c&&(c.splice(g,1),e.processAllDeferredBindingUpdates&&e.processAllDeferredBindingUpdates()),f.splice(m,0,C)),l(h,t,null),e.processAllDeferredBindingUpdates&&e.processAllDeferredBindingUpdates(),w.afterMove&&w.afterMove.call(this,v,i,s)}D&&D.apply(this,arguments)},connectWith:w.connectClass?"."+w.connectClass:!1})),void 0!==w.isEnabled&&e.computed({read:function(){C.sortable(s(w.isEnabled)?"enable":"disable")},disposeWhenNodeIsRemoved:c})},0);return e.utils.domNodeDisposal.addDisposeCallback(c,function(){(C.data("ui-sortable")||C.data("sortable"))&&C.sortable("destroy"),e.utils.toggleDomNodeCssClass(c,w.connectClass,!1),clearTimeout(H)}),{controlsDescendantBindings:!0}},update:function(n,t,o,r,i){var s=f(t,"foreach");l(n,a,s.foreach),e.bindingHandlers.template.update(n,function(){return s},o,r,i)},connectClass:"ko_container",allowDrop:!0,afterMove:null,beforeMove:null,options:{}},e.bindingHandlers.draggable={init:function(t,o,a,r,d){var c=s(o())||{},u=c.options||{},p=e.utils.extend({},e.bindingHandlers.draggable.options),b=f(o,"data"),g=c.connectClass||e.bindingHandlers.draggable.connectClass,m=void 0!==c.isEnabled?c.isEnabled:e.bindingHandlers.draggable.isEnabled;return c="data"in c?c.data:c,l(t,i,c),e.utils.extend(p,u),p.connectToSortable=g?"."+g:!1,n(t).draggable(p),void 0!==m&&e.computed({read:function(){n(t).draggable(s(m)?"enable":"disable")},disposeWhenNodeIsRemoved:t}),e.utils.domNodeDisposal.addDisposeCallback(t,function(){n(t).draggable("destroy")}),e.bindingHandlers.template.init(t,function(){return b},a,r,d)},update:function(n,t,o,a,r){var i=f(t,"data");return e.bindingHandlers.template.update(n,function(){return i},o,a,r)},connectClass:e.bindingHandlers.sortable.connectClass,options:{helper:"clone"}}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-undomanager/knockout-undomanager.js":[function(require,module,exports){
(function (global){
!function(e){"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=e((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),require("./../knockoutjs-reactor/dist/ko-reactor.min.js")):"function"==typeof define&&define.amd?define(["knockout","knockoutjs-reactor","exports"],e):e(ko,ko.watch)}(function(e,n){var t=function(t,o){var i,d=e.observableArray(),r=e.observableArray(),u=0,l=1,c=2,f=u,a=0,s=1,m=2,p=3,g=a,b={levels:100,undoLabel:"undo (#COUNT#)",redoLabel:"redo (#COUNT#)"};o="object"==typeof o?e.utils.extend(b,o):b;var v=function(e){f==l?y(e,r):f==c?y(e,d):f==u&&(y(e,d),r.removeAll())},h=function(e,n){return"undefined"!=typeof e.mergedAction?e.mergedAction(n):null},y=function(e,n){if(n().length>0){var t=h(n()[n().length-1],e);if(null!==t)return void(n()[n().length-1]=t)}n().length>=o.levels&&n.shift(),i=n,n.push(e)},A=function(n,t,o){return{name:e.computed(function(){return e.utils.unwrapObservable(n).replace(/#COUNT#/,o().length)}),enabled:e.computed(function(){return 0!==o().length}),execute:function(){var e=o.pop();if(e){var n=f;f=t;var d=g;g=p,e(),k(i),g=d,f=n}return!0}}},k=function(e){if("undefined"==typeof e)throw"Unexpected operation: stack cleaner called with undefined stack";e().length>0&&"undefined"!=typeof e()[e().length-1].mergedAction&&delete e()[e().length-1].mergedAction},M=function(e,n){var t=function(e,n){e(),n()}.bind(void 0,e,n);return"undefined"!=typeof e.mergedAction&&(t.mergedAction=e.mergedAction),t},x=function(e,n,t){if("undefined"!=typeof n)e(n);else{if(!t)throw"Unexpected condition: no item and no child.oldValues!";if("deleted"==t.status)e.splice(t.index,0,t.value);else{if("added"!=t.status)throw"Unsupproted item.status: "+t.status;e.splice(t.index,1)}}},U=function(e,n,t,o,i){return e.bind(void 0,t,o,i)},j=U,w=function(e,n,t){var o="undefined"!=typeof n.oldValues?n.oldValues[0]:void 0,i=j(x,e,n,o,t);g!=s&&(g==p?"undefined"!=typeof i&&(i.mergedAction=function(e){return"undefined"!=typeof e.mergeMe&&e.mergeMe?M(e,this):null},i.mergeMe=!0):"undefined"!=typeof i&&(n.oldValues&&g==m&&(i.mergedAction=function(e,n,t){return"object"==typeof t.mergeableAction&&e==t.mergeableAction.child?this:null}.bind(i,n,t),i.mergeableAction={child:n,item:t}),t&&"deleted"==t.status&&(i.mergedAction=function(e,n,t){return"object"==typeof t.mergeableMove&&n.value==t.mergeableMove.item.value?M(t,this):(console.log("UR","not mergeable",typeof t.mergeableMove),null)}.bind(i,n,t)),t&&"added"==t.status&&(i.mergeableMove={child:n,item:t})),"undefined"!=typeof i&&v(i))},C={depth:-1,oldValues:1,mutable:!0,tagFields:!0},O={},V="function"==typeof n?n:e.watch,L=V(t,C,w,O);return{push:v,undoCommand:A(o.undoLabel,l,d),redoCommand:A(o.redoLabel,c,r),reset:function(){d.removeAll(),r.removeAll()},setModeOnce:function(){g=m,k(d)},setModeMerge:function(){g=p,k(d)},setModeNormal:function(){g=a,k(d)},setModeIgnore:function(){g=s,k(d)},setUndoActionMaker:function(e){j=e},dispose:function(){L.dispose()}}};return t});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../knockoutjs-reactor/dist/ko-reactor.min.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockoutjs-reactor/dist/ko-reactor.min.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout.wrap/knockout.wrap.js":[function(require,module,exports){
(function (global){
!function(r){"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?r((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),exports):"function"==typeof define&&define.amd?define(["knockout","exports"],r):r(ko,ko.wrap={})}(function(r,t){function n(r){var t=typeof r;return"object"===t&&(r?r.constructor==Date?t="date":"[object Array]"==Object.prototype.toString.call(r)&&(t="array"):t="null"),t}function e(t){var n={};for(var e in t){var o=t[e];r.isComputed(o)||(n[e]=u(o))}return n}function o(r){var t=[];if(!r||0==r.length)return t;for(var n=0,e=r.length;e>n;++n)t.push(u(r[n]));return t}function u(t){var a=r.isObservable(t);if(a){var f=t();return u(f)}return"array"==n(t)?o(t):"object"==n(t)?e(t):t}function a(){v=[{obj:null,wrapped:null,lvl:""}]}function f(t,n,e){for(var o=0;o<v.length;++o)if(v[o].obj===t)return v[o].wrapped;var u={};for(var a in t){var f=t[a];v.push({obj:t,wrapped:u,lvl:c()+"/"+a}),u[a]=l(f,n,e),v.pop()}return n&&n[c()]&&(u=n[c()](u)),p()&&r.track(u),e?r.observable(u):u}function i(t,n,e){var o=r.observableArray();if(!t||0==t.length)return o;for(var u=0,a=t.length;a>u;++u)o.push(l(t[u],n,e));return o}function c(){return v[v.length-1].lvl}function l(t,e,o){if("array"==n(t))return i(t,e,o);if("object"==n(t))return f(t,e,o);if(p()||"function"==typeof t)return t;var u=r.observable();return u(t),u}function p(){return null!=r.track}t.fromJS=function(r,t,n){return a(),l(r,t,n)},t.updateFromJS=function(t,n,e,o){return a(),t(r.utils.unwrapObservable(l(n,e,o)))},t.fromJSON=function(n,e,o){var u=r.utils.parseJson(n);return arguments[0]=u,t.fromJS.apply(this,e,o)},t.toJS=function(r){return u(r)},t.toJSON=function(n){var e=t.toJS(n);return r.utils.stringifyJson(e)};var v});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockoutjs-reactor/dist/ko-reactor.min.js":[function(require,module,exports){
ko.subscribable.fn.watch=function(e,a,t,o){var r=typeof e;return"boolean"===r||"undefined"===r?ko.watch(this,{enabled:e!==!1}):"function"!==r||ko.isSubscribable(e)?ko.watch(e,a,t,o||this):ko.watch(this,a||{},e,o||this),this},ko.watch=function(e,a,t,o){function r(l,c,f,u,s,b){if(l&&0!==a.depth&&(-1===a.depth||f.length<(a.depth||1))){if(a.watchedOnly&&!l.watchable&&l!=e)return;if((a.enabled===!1||a.enabled===!0)&&(l.watchable=a.enabled),l.watchable===!1)return;a.seal===!0&&(l.watchable=!1);var h=typeof l;if("object"===h||"function"===h){if(l._watcher===o)return;if(a.hide&&ko.utils.arrayIndexOf(a.hide,l)>-1)return;var d=[].concat(f,c&&c!==e?c:[]);if("function"!==h){if("[object Object]"===Object.prototype.toString.call(l))ko.utils.objectForEach(l,function(e,t){if(t=a.getter?a.getter.call(o,d,l,e):t){if(a.wrap){var n=Object.prototype.toString.call(t);"[object Function]"!==n&&"[object Object]"!==n&&(a.beforeWrap&&a.beforeWrap.call(o,d,l,t)===!1||(t=l[e]="[object Array]"===n?ko.observableArray(t):ko.observable(t)))}a.unloop&&(t._watcher=u?void 0:o);var i=r(t,s?null:l,d,u,null,e);a.tagFields&&void 0===t._fieldName&&(i||"parentsOnly"!==a.tagFields&&"function"==typeof t||"object"==typeof t)&&(t._fieldName=e)}});else if(a.hideArrays!==!0)for(var p=0;p<l.length;p++)r(l[p],s?null:l,d,u);return!0}if("function"==typeof l.notifySubscribers&&t){if(a.enabled===!0&&l.watchable===!1)return;if(u||!a.beforeWatch||a.beforeWatch.call(o,d,l,b)!==!1){var v="function"==typeof l.pop;if(u?n(l):i(l,v,d,s),v)return r(l(),s?null:l,d,u,!0),!0;if(a.hideWrappedValues!==!0)return r(l(),s?null:l,d,u,!0)}}}}}function n(e){var t=e[l];if(!t)throw"Subscriptions field (."+l+") not defined for observable child "+(e._fieldName||"");if(t.change)for(var r=t.change.length-1;r>=0;r--)t.change[r]._watcher===o&&t.change[r].dispose();if(t.beforeChange&&(a.mutable||a.oldValues>0))for(var r=t.beforeChange.length-1;r>=0;r--)t.beforeChange[r]._watcher===o&&t.beforeChange[r].dispose();if(t.arrayChange)for(var r=t.arrayChange.length-1;r>=0;r--)t.arrayChange[r]._watcher===o&&t.arrayChange[r].dispose()}function i(e,n,i,l){n?e.subscribe(function(a){ko.utils.arrayForEach(a,function(a){var n=t.call(o,i,e,a);void 0!==n&&o(n),a.moved||setTimeout(function(){r(a.value,l?null:e,i,"deleted"===a.status)},0)})},void 0,"arrayChange")._watcher=o:(e.subscribe(function(){if(e.watchable!==!1){var n=t.call(o,i,e);void 0!==n&&o(n),a.mutable&&"object"==typeof e()&&r(e(),l?null:e,i)}},null,"change")._watcher=o,(a.oldValues>0||a.mutable)&&(e.subscribe(function(t){if(a.oldValues>0){var o=e.oldValues?e.oldValues:e.oldValues=[];for(o.unshift(t);o.length>a.oldValues;)o.pop()}a.mutable&&"object"==typeof t&&r(t,l?null:e,i,!1,!0)},null,"beforeChange")._watcher=o))}"function"==typeof a&&(o=o||t,t=a,a={}),o=o||this;var l;switch(ko.DEBUG||ko.version){case!0:l="_subscriptions";break;case"3.0.0":l="F";break;case"3.1.0":l="H";break;case"3.2.0":l="M";break;case"3.3.0":l="G";case"3.4.0":l="K";break;default:throw"Unsupported Knockout version. Only v3.0.0 to v3.4.0 are supported when minified. Current version is "+ko.version}return"function"!=typeof e||ko.isSubscribable(e)?(r(e,null,[]),{dispose:function(){r(e,null,[],!0)}}):ko.computed(e,t,a)},window.foo="1.3.6";

},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/debug.js":[function(require,module,exports){
(function (process){
function debug(e){return _debug.bind(null,e)}function _debug(e){var n=[].slice.call(arguments,1);n.unshift("["+e+"]"),process.stderr.write(n.join(" ")+"\n")}exports=module.exports=debug;

}).call(this,require('_process'))

},{"_process":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/process/browser.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/lexer.js":[function(require,module,exports){
function lex(e){function a(){return i(),e[v]}function r(e){return e?y[y.length-1-e]:w}function s(a){var r=v+1;return a===e.slice(r,r+a.length)}function t(a){var r=e.slice(v).indexOf(a);return r>0?r:!1}function c(e){return e===n(1)}function n(a){return e[v+(a||1)]}function o(){var e=y.pop();return w=y[y.length-1],e}function l(e){return w=e,y.push(w),y.length}function u(e){var a=w;return y[y.length-1]=w=e,a}function i(a){if(1==(a||1))"\n"==e[v]?(h++,p=1):p++,v++;else{var r=e.slice(v,v+a).split("\n");r.length>1&&(h+=r.length-1,p=1),p+=r[r.length-1].length,v+=a}}function b(){x.end={line:h,col:p},DEBUG&&debug("addToken:",JSON.stringify(x,null,2)),E.push(x),k="",x={}}function m(e){x={type:e,start:{line:h,col:p}}}var f,g,k="",p=0,v=-1,d=0,h=1,w="before-selector",y=[w],x={},E=[],D=["media","keyframes",{name:"-webkit-keyframes",type:"keyframes",prefix:"-webkit-"},{name:"-moz-keyframes",type:"keyframes",prefix:"-moz-"},{name:"-ms-keyframes",type:"keyframes",prefix:"-ms-"},{name:"-o-keyframes",type:"keyframes",prefix:"-o-"},"font-face",{name:"import",state:"before-at-value"},{name:"charset",state:"before-at-value"},"supports","viewport",{name:"namespace",state:"before-at-value"},"document",{name:"-moz-document",type:"document",prefix:"-moz-"},"page"];for(TIMER&&(f=Date.now());g=a();)switch(DEBUG&&debug(g,r()),g){case" ":switch(r()){case"selector":case"value":case"value-paren":case"at-group":case"at-value":case"comment":case"double-string":case"single-string":k+=g}break;case"\n":case"	":case"\r":case"\f":switch(r()){case"value":case"value-paren":case"at-group":case"comment":case"single-string":case"double-string":case"selector":k+=g;break;case"at-value":"\n"===g&&(x.value=k.trim(),b(),o())}break;case":":switch(r()){case"name":x.name=k.trim(),k="",u("before-value");break;case"before-selector":k+=g,m("selector"),l("selector");break;default:k+=g}break;case";":switch(r()){case"name":case"before-value":case"value":k.trim().length>0&&(x.value=k.trim(),b()),u("before-name");break;case"value-paren":k+=g;break;case"at-value":x.value=k.trim(),b(),o();break;case"before-name":break;default:k+=g}break;case"{":switch(r()){case"selector":if("\\"===n(-1)){k+=g;break}x.text=k.trim(),b(),u("before-name"),d+=1;break;case"at-group":switch(x.name=k.trim(),x.type){case"font-face":case"viewport":case"page":l("before-name");break;default:l("before-selector")}b(),d+=1;break;case"name":case"at-rule":x.name=k.trim(),b(),l("before-name"),d+=1;break;case"comment":case"double-string":case"single-string":k+=g}break;case"}":switch(r()){case"before-name":case"name":case"before-value":case"value":k&&(x.value=k.trim()),x.name&&x.value&&b(),m("end"),b(),o(),"at-group"===r()&&(m("at-group-end"),b(),o()),d>0&&(d-=1);break;case"at-group":case"before-selector":case"selector":if("\\"===n(-1)){k+=g;break}d>0&&"at-group"===r(1)&&(m("at-group-end"),b()),d>1&&o(),d>0&&(d-=1);break;case"double-string":case"single-string":case"comment":k+=g}break;case'"':case"'":switch(r()){case"double-string":'"'===g&&"\\"!==n(-1)&&o();break;case"single-string":"'"===g&&"\\"!==n(-1)&&o();break;case"before-at-value":u("at-value"),l('"'===g?"double-string":"single-string");break;case"before-value":u("value"),l('"'===g?"double-string":"single-string");break;case"comment":break;default:"\\"!==n(-1)&&l('"'===g?"double-string":"single-string")}k+=g;break;case"/":switch(r()){case"comment":case"double-string":case"single-string":k+=g;break;case"before-value":case"selector":case"name":case"value":if(c("*")){var z=t("*/");z&&i(z+1)}else k+=g;break;default:c("*")?(m("comment"),l("comment"),i()):k+=g}break;case"*":switch(r()){case"comment":c("/")?(x.text=k,i(),b(),o()):k+=g;break;case"before-selector":k+=g,m("selector"),l("selector");break;default:k+=g}break;case"@":switch(r()){case"comment":case"double-string":case"single-string":k+=g;break;default:for(var T,B,G=!1,I=0,M=D.length;!G&&M>I;++I)B=D[I],T=B.name||B,s(T)&&(G=!0,m(T),l(B.state||"at-group"),i(T.length),B.prefix&&(x.prefix=B.prefix),B.type&&(x.type=B.type));G||(k+=g)}break;case"(":switch(r()){case"value":l("value-paren")}k+=g;break;case")":switch(r()){case"value-paren":o()}k+=g;break;default:switch(r()){case"before-selector":m("selector"),l("selector");break;case"before-name":m("property"),u("name");break;case"before-value":u("value");break;case"before-at-value":u("at-value")}k+=g}return TIMER&&debug("ran in",Date.now()-f+"ms"),E}var DEBUG=!1,TIMER=!1,debug=require("./debug")("lex");exports=module.exports=lex;

},{"./debug":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/debug.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/parser.js":[function(require,module,exports){
function parse(e,r){var t;r||(r={}),_comments=!!r.comments,_position=!!r.position,_depth=0,_tokens=Array.isArray(e)?e.slice():lex(e);var s,n,a=[];for(TIMER&&(t=Date.now());n=next();)s=parseToken(n),s&&a.push(s);return TIMER&&debug("ran in",Date.now()-t+"ms"),{type:"stylesheet",stylesheet:{rules:a}}}function astNode(e,r){r||(r={});for(var t,s=["type","name","value"],n={},a=0;a<s.length;++a)t=s[a],e[t]&&(n[t]=r[t]||e[t]);for(s=Object.keys(r),a=0;a<s.length;++a)t=s[a],n[t]||(n[t]=r[t]);return _position&&(n.position={start:e.start,end:e.end}),DEBUG&&debug("astNode:",JSON.stringify(n,null,2)),n}function next(){var e=_tokens.shift();return DEBUG&&debug("next:",JSON.stringify(e,null,2)),e}function parseAtGroup(e){_depth+=1;var r={};switch(e.type){case"font-face":case"viewport":r.declarations=parseDeclarations();break;case"page":r.prefix=e.prefix,r.declarations=parseDeclarations();break;default:r.prefix=e.prefix,r.rules=parseRules()}return astNode(e,r)}function parseAtImport(e){return astNode(e)}function parseCharset(e){return astNode(e)}function parseComment(e){return astNode(e,{text:e.text})}function parseNamespace(e){return astNode(e)}function parseProperty(e){return astNode(e)}function parseSelector(e){function r(e){return e.trim()}return astNode(e,{type:"rule",selectors:e.text.split(",").map(r),declarations:parseDeclarations(e)})}function parseToken(e){switch(e.type){case"property":return parseProperty(e);case"selector":return parseSelector(e);case"at-group-end":return void(_depth-=1);case"media":case"keyframes":return parseAtGroup(e);case"comment":if(_comments)return parseComment(e);break;case"charset":return parseCharset(e);case"import":return parseAtImport(e);case"namespace":return parseNamespace(e);case"font-face":case"supports":case"viewport":case"document":case"page":return parseAtGroup(e)}DEBUG&&debug("parseToken: unexpected token:",JSON.stringify(e))}function parseTokensWhile(e){for(var r,t,s=[];(t=next())&&e&&e(t);)r=parseToken(t),r&&s.push(r);return t&&"end"!==t.type&&_tokens.unshift(t),s}function parseDeclarations(){return parseTokensWhile(function(e){return"property"===e.type||"comment"===e.type})}function parseRules(){return parseTokensWhile(function(){return _depth})}var DEBUG=!1,TIMER=!1,debug=require("./debug")("parse"),lex=require("./lexer");exports=module.exports=parse;var _comments,_depth,_position,_tokens;

},{"./debug":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/debug.js","./lexer":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/lexer.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/tinycolor/tinycolor.js":[function(require,module,exports){
!function(){function t(r,n){if(r=r?r:"",n=n||{},r instanceof t)return r;if(!(this instanceof t))return new t(r,n);var a=e(r);this._originalInput=r,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=j(100*this._a)/100,this._format=n.format||a.format,this._gradientType=n.gradientType,this._r<1&&(this._r=j(this._r)),this._g<1&&(this._g=j(this._g)),this._b<1&&(this._b=j(this._b)),this._ok=a.ok,this._tc_id=I++}function e(t){var e={r:0,g:0,b:0},n=1,i=!1,o=!1;return"string"==typeof t&&(t=q(t)),"object"==typeof t&&(t.hasOwnProperty("r")&&t.hasOwnProperty("g")&&t.hasOwnProperty("b")?(e=r(t.r,t.g,t.b),i=!0,o="%"===String(t.r).substr(-1)?"prgb":"rgb"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("v")?(t.s=O(t.s),t.v=O(t.v),e=s(t.h,t.s,t.v),i=!0,o="hsv"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("l")&&(t.s=O(t.s),t.l=O(t.l),e=a(t.h,t.s,t.l),i=!0,o="hsl"),t.hasOwnProperty("a")&&(n=t.a)),n=k(n),{ok:i,format:t.format||o,r:T(255,$(e.r,0)),g:T(255,$(e.g,0)),b:T(255,$(e.b,0)),a:n}}function r(t,e,r){return{r:255*A(t,255),g:255*A(e,255),b:255*A(r,255)}}function n(t,e,r){t=A(t,255),e=A(e,255),r=A(r,255);var n,a,i=$(t,e,r),s=T(t,e,r),o=(i+s)/2;if(i==s)n=a=0;else{var f=i-s;switch(a=o>.5?f/(2-i-s):f/(i+s),i){case t:n=(e-r)/f+(r>e?6:0);break;case e:n=(r-t)/f+2;break;case r:n=(t-e)/f+4}n/=6}return{h:n,s:a,l:o}}function a(t,e,r){function n(t,e,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?t+6*(e-t)*r:.5>r?e:2/3>r?t+(e-t)*(2/3-r)*6:t}var a,i,s;if(t=A(t,360),e=A(e,100),r=A(r,100),0===e)a=i=s=r;else{var o=.5>r?r*(1+e):r+e-r*e,f=2*r-o;a=n(f,o,t+1/3),i=n(f,o,t),s=n(f,o,t-1/3)}return{r:255*a,g:255*i,b:255*s}}function i(t,e,r){t=A(t,255),e=A(e,255),r=A(r,255);var n,a,i=$(t,e,r),s=T(t,e,r),o=i,f=i-s;if(a=0===i?0:f/i,i==s)n=0;else{switch(i){case t:n=(e-r)/f+(r>e?6:0);break;case e:n=(r-t)/f+2;break;case r:n=(t-e)/f+4}n/=6}return{h:n,s:a,v:o}}function s(t,e,r){t=6*A(t,360),e=A(e,100),r=A(r,100);var n=N.floor(t),a=t-n,i=r*(1-e),s=r*(1-a*e),o=r*(1-(1-a)*e),f=n%6,h=[r,s,i,i,o,r][f],l=[o,r,r,s,i,i][f],u=[i,i,o,r,r,s][f];return{r:255*h,g:255*l,b:255*u}}function o(t,e,r,n){var a=[M(j(t).toString(16)),M(j(e).toString(16)),M(j(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(t,e,r,n){var a=[M(P(n)),M(j(t).toString(16)),M(j(e).toString(16)),M(j(r).toString(16))];return a.join("")}function h(e,r){r=0===r?0:r||10;var n=t(e).toHsl();return n.s-=r/100,n.s=H(n.s),t(n)}function l(e,r){r=0===r?0:r||10;var n=t(e).toHsl();return n.s+=r/100,n.s=H(n.s),t(n)}function u(e){return t(e).desaturate(100)}function c(e,r){r=0===r?0:r||10;var n=t(e).toHsl();return n.l+=r/100,n.l=H(n.l),t(n)}function g(e,r){r=0===r?0:r||10;var n=t(e).toRgb();return n.r=$(0,T(255,n.r-j(255*-(r/100)))),n.g=$(0,T(255,n.g-j(255*-(r/100)))),n.b=$(0,T(255,n.b-j(255*-(r/100)))),t(n)}function d(e,r){r=0===r?0:r||10;var n=t(e).toHsl();return n.l-=r/100,n.l=H(n.l),t(n)}function b(e,r){var n=t(e).toHsl(),a=(j(n.h)+r)%360;return n.h=0>a?360+a:a,t(n)}function p(e){var r=t(e).toHsl();return r.h=(r.h+180)%360,t(r)}function _(e){var r=t(e).toHsl(),n=r.h;return[t(e),t({h:(n+120)%360,s:r.s,l:r.l}),t({h:(n+240)%360,s:r.s,l:r.l})]}function m(e){var r=t(e).toHsl(),n=r.h;return[t(e),t({h:(n+90)%360,s:r.s,l:r.l}),t({h:(n+180)%360,s:r.s,l:r.l}),t({h:(n+270)%360,s:r.s,l:r.l})]}function v(e){var r=t(e).toHsl(),n=r.h;return[t(e),t({h:(n+72)%360,s:r.s,l:r.l}),t({h:(n+216)%360,s:r.s,l:r.l})]}function y(e,r,n){r=r||6,n=n||30;var a=t(e).toHsl(),i=360/n,s=[t(e)];for(a.h=(a.h-(i*r>>1)+720)%360;--r;)a.h=(a.h+i)%360,s.push(t(a));return s}function w(e,r){r=r||6;for(var n=t(e).toHsv(),a=n.h,i=n.s,s=n.v,o=[],f=1/r;r--;)o.push(t({h:a,s:i,v:s})),s=(s+f)%1;return o}function x(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}function k(t){return t=parseFloat(t),(isNaN(t)||0>t||t>1)&&(t=1),t}function A(t,e){R(t)&&(t="100%");var r=F(t);return t=T(e,$(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),N.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function H(t){return T(1,$(0,t))}function S(t){return parseInt(t,16)}function R(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)}function F(t){return"string"==typeof t&&-1!=t.indexOf("%")}function M(t){return 1==t.length?"0"+t:""+t}function O(t){return 1>=t&&(t=100*t+"%"),t}function P(t){return Math.round(255*parseFloat(t)).toString(16)}function C(t){return S(t)/255}function q(t){t=t.replace(z,"").replace(E,"").toLowerCase();var e=!1;if(B[t])t=B[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=U.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=U.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=U.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=U.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=U.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=U.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=U.hex8.exec(t))?{a:C(r[1]),r:S(r[2]),g:S(r[3]),b:S(r[4]),format:e?"name":"hex8"}:(r=U.hex6.exec(t))?{r:S(r[1]),g:S(r[2]),b:S(r[3]),format:e?"name":"hex"}:(r=U.hex3.exec(t))?{r:S(r[1]+""+r[1]),g:S(r[2]+""+r[2]),b:S(r[3]+""+r[3]),format:e?"name":"hex"}:!1}function L(t){var e,r;return t=t||{level:"AA",size:"small"},e=(t.level||"AA").toUpperCase(),r=(t.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA"),"small"!==r&&"large"!==r&&(r="small"),{level:e,size:r}}var z=/^[\s,#]+/,E=/\s+$/,I=0,N=Math,j=N.round,T=N.min,$=N.max,D=N.random;t.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,r,n,a,i,s=this.toRgb();return t=s.r/255,e=s.g/255,r=s.b/255,n=.03928>=t?t/12.92:Math.pow((t+.055)/1.055,2.4),a=.03928>=e?e/12.92:Math.pow((e+.055)/1.055,2.4),i=.03928>=r?r/12.92:Math.pow((r+.055)/1.055,2.4),.2126*n+.7152*a+.0722*i},setAlpha:function(t){return this._a=k(t),this._roundA=j(100*this._a)/100,this},toHsv:function(){var t=i(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=i(this._r,this._g,this._b),e=j(360*t.h),r=j(100*t.s),n=j(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=n(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=n(this._r,this._g,this._b),e=j(360*t.h),r=j(100*t.s),a=j(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+a+"%)":"hsla("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return o(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return f(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:j(this._r),g:j(this._g),b:j(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+j(this._r)+", "+j(this._g)+", "+j(this._b)+")":"rgba("+j(this._r)+", "+j(this._g)+", "+j(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:j(100*A(this._r,255))+"%",g:j(100*A(this._g,255))+"%",b:j(100*A(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+j(100*A(this._r,255))+"%, "+j(100*A(this._g,255))+"%, "+j(100*A(this._b,255))+"%)":"rgba("+j(100*A(this._r,255))+"%, "+j(100*A(this._g,255))+"%, "+j(100*A(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:G[o(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var r="#"+f(this._r,this._g,this._b,this._a),n=r,a=this._gradientType?"GradientType = 1, ":"";if(e){var i=t(e);n=i.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,a=!e&&n&&("hex"===t||"hex6"===t||"hex3"===t||"name"===t);return a?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(c,arguments)},brighten:function(){return this._applyModification(g,arguments)},darken:function(){return this._applyModification(d,arguments)},desaturate:function(){return this._applyModification(h,arguments)},saturate:function(){return this._applyModification(l,arguments)},greyscale:function(){return this._applyModification(u,arguments)},spin:function(){return this._applyModification(b,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(p,arguments)},monochromatic:function(){return this._applyCombination(w,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(_,arguments)},tetrad:function(){return this._applyCombination(m,arguments)}},t.fromRatio=function(e,r){if("object"==typeof e){var n={};for(var a in e)e.hasOwnProperty(a)&&("a"===a?n[a]=e[a]:n[a]=O(e[a]));e=n}return t(e,r)},t.equals=function(e,r){return e&&r?t(e).toRgbString()==t(r).toRgbString():!1},t.random=function(){return t.fromRatio({r:D(),g:D(),b:D()})},t.mix=function(e,r,n){n=0===n?0:n||50;var a,i=t(e).toRgb(),s=t(r).toRgb(),o=n/100,f=2*o-1,h=s.a-i.a;a=f*h==-1?f:(f+h)/(1+f*h),a=(a+1)/2;var l=1-a,u={r:s.r*a+i.r*l,g:s.g*a+i.g*l,b:s.b*a+i.b*l,a:s.a*o+i.a*(1-o)};return t(u)},t.readability=function(e,r){var n=t(e),a=t(r);return(Math.max(n.getLuminance(),a.getLuminance())+.05)/(Math.min(n.getLuminance(),a.getLuminance())+.05)},t.isReadable=function(e,r,n){var a,i,s=t.readability(e,r);switch(i=!1,a=L(n),a.level+a.size){case"AAsmall":case"AAAlarge":i=s>=4.5;break;case"AAlarge":i=s>=3;break;case"AAAsmall":i=s>=7}return i},t.mostReadable=function(e,r,n){var a,i,s,o,f=null,h=0;n=n||{},i=n.includeFallbackColors,s=n.level,o=n.size;for(var l=0;l<r.length;l++)a=t.readability(e,r[l]),a>h&&(h=a,f=t(r[l]));return t.isReadable(e,f,{level:s,size:o})||!i?f:(n.includeFallbackColors=!1,t.mostReadable(e,["#fff","#000"],n))};var B=t.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},G=t.hexNames=x(B),U=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",r="(?:"+e+")|(?:"+t+")",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",a="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+a),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):window.tinycolor=t}();

},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/toastr/toastr.js":[function(require,module,exports){
(function (global){
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=u(t)),v)}function i(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function o(e){w=e}function s(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var i=m();v||n(i),l(e,i,t)||d(i)}function c(t){var i=m();return v||n(i),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function d(t){for(var n=v.children(),i=n.length-1;i>=0;i--)l(e(n[i]),t)}function l(t,n,i){var o=i&&i.force?i.force:!1;return t&&(o||0===e(":focus",t).length)?(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0):!1}function u(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass).attr("aria-live","polite").attr("role","alert"),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function f(e){w&&w(e)}function g(t){function i(e){return null==e&&(e=""),new String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o(){r(),d(),l(),u(),p(),c()}function s(){y.hover(b,O),!x.onclick&&x.tapToDismiss&&y.click(w),x.closeButton&&k&&k.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),w(!0)}),x.onclick&&y.click(function(e){x.onclick(e),w()})}function a(){y.hide(),y[x.showMethod]({duration:x.showDuration,easing:x.showEasing,complete:x.onShown}),x.timeOut>0&&(H=setTimeout(w,x.timeOut),q.maxHideTime=parseFloat(x.timeOut),q.hideEta=(new Date).getTime()+q.maxHideTime,x.progressBar&&(q.intervalId=setInterval(D,10)))}function r(){t.iconClass&&y.addClass(x.toastClass).addClass(E)}function c(){x.newestOnTop?v.prepend(y):v.append(y)}function d(){t.title&&(I.append(x.escapeHtml?i(t.title):t.title).addClass(x.titleClass),y.append(I))}function l(){t.message&&(M.append(x.escapeHtml?i(t.message):t.message).addClass(x.messageClass),y.append(M))}function u(){x.closeButton&&(k.addClass("toast-close-button").attr("role","button"),y.prepend(k))}function p(){x.progressBar&&(B.addClass("toast-progress"),y.prepend(B))}function g(e,t){if(e.preventDuplicates){if(t.message===C)return!0;C=t.message}return!1}function w(t){var n=t&&x.closeMethod!==!1?x.closeMethod:x.hideMethod,i=t&&x.closeDuration!==!1?x.closeDuration:x.hideDuration,o=t&&x.closeEasing!==!1?x.closeEasing:x.hideEasing;return!e(":focus",y).length||t?(clearTimeout(q.intervalId),y[n]({duration:i,easing:o,complete:function(){h(y),x.onHidden&&"hidden"!==j.state&&x.onHidden(),j.state="hidden",j.endTime=new Date,f(j)}})):void 0}function O(){(x.timeOut>0||x.extendedTimeOut>0)&&(H=setTimeout(w,x.extendedTimeOut),q.maxHideTime=parseFloat(x.extendedTimeOut),q.hideEta=(new Date).getTime()+q.maxHideTime)}function b(){clearTimeout(H),q.hideEta=0,y.stop(!0,!0)[x.showMethod]({duration:x.showDuration,easing:x.showEasing})}function D(){var e=(q.hideEta-(new Date).getTime())/q.maxHideTime*100;B.width(e+"%")}var x=m(),E=t.iconClass||x.iconClass;if("undefined"!=typeof t.optionsOverride&&(x=e.extend(x,t.optionsOverride),E=t.optionsOverride.iconClass||E),!g(x,t)){T++,v=n(x,!0);var H=null,y=e("<div/>"),I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),k=e(x.closeHtml),q={intervalId:null,hideEta:null,maxHideTime:null},j={toastId:T,state:"visible",startTime:new Date,options:x,map:t};return o(),a(),s(),f(j),x.debug&&console&&console.log(j),y}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),C=void 0))}var v,w,C,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:i,options:{},subscribe:o,success:s,version:"2.1.2",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t((typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null)):window.toastr=t(window.jQuery)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/var/www/s/app/webroot/js/lib/mosaico/build/templates.js":[function(require,module,exports){
var templateSystem=require("../src/js/bindings/choose-template.js");document.addEventListener("DOMContentLoaded",function(t){templateSystem.addTemplate("array","<!-- ko foreach: $data --><!-- ko block: $data --><!-- /ko --><!-- /ko -->"),templateSystem.addTemplate("block-show","<!-- ko block: $data, scrollIntoView: $root.selectedBlock() === $data --><!-- /ko -->"),templateSystem.addTemplate("block-wysiwyg",'<div class="editable block" data-drop-content="Drop here" data-bind="attr: { \'data-drop-content\': $root.t(\'Drop here\') }, click: function(obj, evt) { $root.selectBlock(obj); return true }, clickBubble: false, css: { selected: $root.selectedBlock() === $data }, scrollIntoView: $root.selectedBlock() === $data">  <div class="mo-blockselectionhelper"></div>  <div class="tools" data-bind="tooltips: {}">    <!-- ko if: typeof $index != \'undefined\' -->    <div title="Drag this handle to move the block" data-bind="attr: { title: $root.t(\'Drag this handle to move the block\') }" class="tool handle"><i class="fa fa-fw fa-sort"></i></div>    <!-- ko if: $index() > 0 -->    <div title="Move this block upside" data-bind="attr: { title: $root.t(\'Move this block upside\') }" class="tool moveup"><i class="fa fa-fw fa-sort-asc" data-bind=\'click: $root.moveBlock.bind($element, $index, $parent, true)\'></i></div>    <!-- /ko -->    <!-- ko if: $index() < $parent.blocks().length -1 -->    <div title="Move this block downside" data-bind="attr: { title: $root.t(\'Move this block downside\') }" class="tool movedown"><i class="fa fa-fw fa-sort-desc" data-bind=\'click: $root.moveBlock.bind($element, $index, $parent, false)\'></i></div>    <!-- /ko -->    <div title="Delete block" class="tool delete" data-bind="attr: { title: $root.t(\'Delete block\') }, click: $root.removeBlock.bind($element, $rawData, $parent)"><i class="fa fa-fw fa-trash-o"></i></div>    <div title="Duplicate block" class="tool clone" data-bind="attr: { title: $root.t(\'Duplicate block\') }, click: $root.duplicateBlock.bind($element, $index, $parent)"><i class="fa fa-fw fa-files-o"></i></div>    <!-- /ko -->    <!-- ko if: typeof $data._nextVariant != \'undefined\' --><div title="Switch block variant" class="tool variant" data-bind="attr: { title: $root.t(\'Switch block variant\') }, click: $data._nextVariant"><i class="fa fa-fw fa-magic"></i></div><!-- /ko -->  </div>  <!-- ko block: $data --><!-- /ko --></div>'),templateSystem.addTemplate("blocks-show","<!-- ko template: { name: 'block-show', foreach: blocks } --><!-- /ko -->"),templateSystem.addTemplate("blocks-wysiwyg","<div class=\"sortable-blocks-edit\" data-drop-content=\"Drop here\" data-empty-content=\"Drop here blocks from the Blocks tab\" data-bind=\"attr: { 'data-drop-content': $root.t('Drop here'), 'data-empty-content': $root.t('Drop here blocks from the &quot;Blocks&quot; tab') }, css: { 'empty': ko.utils.unwrapObservable(blocks).length == 0 }, extsortable: { connectClass: 'sortable-blocks-edit', template: 'block-wysiwyg', data: blocks, dragging: $root.dragging, beforeMove: $root.startMultiple, afterMove: $root.stopMultiple, options: { handle: '.handle', placeholder: $root.placeholderHelper } }\"></div>"),templateSystem.addTemplate("customstyle",'<div class="customStyleHelp" data-bind="html: $root.t(\'Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class=&quot;customStyled&quot;><span>&quot;small cube&quot; </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul>\')">Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class="customStyled"><span>"small cube" </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul></div>'),templateSystem.addTemplate("empty",""),templateSystem.addTemplate("error",'[<div style="background-color: #fff0f0" data-bind="text: ko.toJS($data)"></div>]'),templateSystem.addTemplate("gallery-images",'<div data-bind="foreach: items.currentPageData">  <div class="draggable-item" data-bind="if: typeof thumbnailUrl != \'undefined\'">    <div class="draggable image" data-bind="click: $root.addImage, extdraggable: { data: $data, dropContainer: \'#main-wysiwyg-area\', dragging: $root.draggingImage, \'options\': { \'appendTo\': \'#page\' } }, style: { backgroundImage: \'url(\\\'\' + thumbnailUrl + \'\\\')\' }">      <img title="Trascina questa immagine sulla posizione in cui vuoi inserirla" style="display: block;" data-bind="tooltips: {}, attr: { src: thumbnailUrl }"/>    </div>  </div></div><!-- ko if: items.pageCount() > 1 --><div class="galleryPager" data-bind="buttonset: {}">  <a href="#" data-bind="click: items.moveFirst, button: { disabled: items.currentPage() == 1, icons: { primary: \'fa fa-fast-backward\' }, text: false }">First</a>  <a href="#" data-bind="click: items.movePrevious, button: { disabled: items.currentPage() == 1, icons: { primary: \'fa fa-backward\' }, text: false }">Previous</a>  <span data-bind="button: { disabled: true, text: true, label: \' \'+items.currentPage()+\' di \'+items.pageCount()+\' \' }"> X di Y </span>  <a href="#" data-bind="click: items.moveNext, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: \'fa fa-forward\' }, text: false }">Next</a>  <a href="#" data-bind="click: items.moveLast, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: \'fa fa-fast-forward\' }, text: false }">Last</a></div><!-- /ko -->'),templateSystem.addTemplate("img-wysiwyg",'<table tabfocus="0" cellspacing="0" cellpadding="0" data-drop-content="Drop here" data-bind="style: _stylebind, click: function(obj, evt) { $root.selectItem(_item, _data); return true; }, clickBubble: false, fudroppable: { activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }, droppable: { options: { accept: \'.image\', activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }, data: _src, dragged: $root.fileToImage }, css: { selecteditem: $root.isSelectedItem(_item) }, scrollIntoView: $root.isSelectedItem(_item), attr: { \'data-drop-content\': $root.t(\'Drop here\'), width: _width, height: _height, align: _align }"  class="img-wysiwyg selectable-img" style="display: table;"><tr><td class="uploadzone">  <div class="mo-imgselectionhelper"></div>  <div class="mo-uploadzone"></div>  <div class="img-size" data-bind="text: _size">size</div>  <div class="midtools" data-bind="tooltips: {}">    <!-- ko if: _src() != \'\' -->    <div title="Remove image" class="tool delete" data-bind="attr: { title: $root.t(\'Remove image\') }, click: _src.bind(_src, \'\'), clickBubble: false"><i class="fa fa-fw fa-trash-o"></i></div>    <!-- ko if: typeof $root.editImage !== \'undefined\' -->    <div title="Open the image editing tool" class="tool edit" data-bind="attr: { title: $root.t(\'Open the image editing tool\') }, click: $root.editImage.bind($element, _src), clickBubble: false"><i class="fa fa-fw fa-pencil"></i></div>    <!-- /ko -->    <!-- /ko -->    <!-- ko if: _src() == \'\' -->    <div title="Upload a new image" data-bind="attr: { title: $root.t(\'Upload a new image\') }" class="tool upload" style="position: relative; overflow: hidden;"><i class="fa fa-fw fa-upload"></i>      <input class="fileupload nofile" type="file" name="files[]" data-bind="fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.loadImage, canvasPreview: true }" style="z-index: 20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-size: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">    </div>    <!-- /ko -->  </div>  <!-- ko template: _template --><!-- /ko -->  <!-- ko if: _src() == \'\' -->    <!--    <img style="display: block;" class="imgplaceholder" width="200" src="" alt="Insert an image here" data-bind="wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }" />    -->    <span class="fileuploadtext" style="text-align: center; display: -ms-flexbox; display: flex; align-items: center; flex-align: center; justify-content: center; padding: 1em; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"><span class="textMiddle" style=" text-shadow: 1px 1px 0 #FFFFFF, 0 0 10px #FFFFFF; font-weight: bold;" data-bind="text: $root.t(\'Drop an image here\')">Drop an image here</span></span>  <!-- /ko -->  <!-- ko if: _src() != \'\' -->  <!--    <img style="display: block;" width="200" src="" data-bind="preloader: _src, wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }" />    -->  <!-- /ko -->  <!-- pulsante per la cancellazione -->  <div title="Drop an image here or click the upload button" data-bind="attr: { title: $root.t(\'Drop an image here or click the upload button\') }, tooltips: {}" class="workzone" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;">    <!-- ko if: _src.preloaded && _src() != _src.preloaded() -->PRELOADING....<!-- /ko -->    <!-- ko if: _src() != \'\' -->      <input class="fileupload withfile" type="file" name="files[]" data-bind="fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.galleryRecent.unshift.bind($root.galleryRecent), canvasPreview: true }" style="z-index: -20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">    <!-- /ko -->    <div class="progress" style="opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;">      <div class="progress-bar progress-bar-success" style="height: 20px; background-color: black; "></div>    </div>  </div></table>'),templateSystem.addTemplate("main",'<div id="page" style="display: none;" data-bind="visible: true, css: { withToolbox: $root.showToolbox, withPreviewFrame: showPreviewFrame }">  <div id="main-edit-area" data-bind="click: function(obj, evt) { $root.selectBlock(null); return true; }, clickBubble: false">    <!-- ko withProperties: { templateMode: \'wysiwyg\', templateModeFallback: \'show\' } -->    <div id="main-wysiwyg-area" data-bind="wysiwygScrollfix: true, scrollable: true, fudroppable: { active: draggingImage }, css: { isdragging: dragging, isdraggingimg: draggingImage }, block: content"></div>    <!-- /ko -->  </div>  <div id="toolbar" class="mo" data-bind="tooltips: {}">    <!-- ko if: typeof $root.undo != \'undefined\' -->    <span data-bind="buttonset: { }" class="leftButtons">    <a title="Undo last operation" href="#" data-bind="attr: { title: $root.t(\'Undo last operation\') }, click: $root.undo.execute, clickBubble: false, button: { disabled: !$root.undo.enabled(), icons: { primary: \'fa fa-reply\' }, label: $root.undo.name, text: true }">UNDO</a>    <a title="Redo last operation" href="#" data-bind="attr: { title: $root.t(\'Redo last operation\') }, click: $root.redo.execute, clickBubble: false, button: { disabled: !$root.redo.enabled(), icons: { primary: \'fa fa-share\' }, label: $root.redo.name, text: true }">REDO</a>    </span>    <!-- ko if: $root.debug -->    <a href="#" data-bind="click: $root.undoReset, clickBubble: false, button: { disabled: !$root.undo.enabled() && !$root.redo.enabled(), label: \'reset\', text: true }">RESET</a>    <!-- /ko -->    <!-- /ko -->    <span>    <input id="showGallery" type="checkbox" data-bind="checked: $root.showGallery, button: { refreshOn: $root.showGallery,     icons: { primary: \'fa fa-fw fa-picture-o\', secondary: null }, text: true, label: $root.t(\'Gallery\') }"><label title="Show image gallery" for="showGallery" data-bind="attr: { title: $root.t(\'Show image gallery\') }">show gallery</label></input>    </span>    <input id="previewFrameToggle" type="checkbox" data-bind="checked: $root.showPreviewFrame, button: { refreshOn: $root.showPreviewFrame, icons: { primary: \'fa fa-fw fa-tablet\', secondary: null }, text: false, label: $root.t(\'Preview\') }"><label title="Show live preview" for="previewFrameToggle" data-bind="attr: { title: $root.t(\'Show live preview\') }">PREVIEW</label></input>    <!-- ko if: $root.debug -->    <a href="#" data-bind="click: $root.export, clickBubble: false, button: { label: \'export\', text: true }">EXPORT</a>    <input type="checkbox" data-bind="checked: $root.debug" /> debug    <a href="#" data-bind="click: $root.loadDefaultBlocks, clickBubble: false, button: { icons: { primary: \'fa fa-fw fa-upload\' }, label: \'Default\', text: true }">LOAD BLOCKS</a>    [<a id="subscriptionsCount" href="javascript:viewModel.loopSubscriptionsCount()">subs</a>]    <!-- /ko -->    <span data-bind="visible: false">    <input type="checkbox" data-bind="checked: $root.showToolbox" /> toolbox    </span>    <div class="rightButtons">    <label for="templateTitle" style="color:#eee; font-weight:700; margin-right:5px;">TYTUŁ</label>    <input type="text" name="template_title" id="templateTitle" style="margin-right:20px; width:200px; height:26px;" />    <!-- ko if: typeof $root.save !== \'undefined\' -->    <a title="Save template" href="#" data-bind="attr: { title: $root.t(\'Save template\') }, click: $root.save.execute, clickBubble: false, button: { disabled: !$root.save.enabled(), icons: { primary: \'fa fa-fw fa-cloud-upload\' }, label: $root.t($root.save.name), text: true }">ZAPISZ</a>    <!-- /ko -->    <!-- ko if: typeof $root.test !== \'undefined\' -->    <a title="Show preview and send test" href="#" data-bind="attr: { title: $root.t(\'Show preview and send test\') }, click: $root.test.execute, clickBubble: false, button: { disabled: !$root.test.enabled(), icons: { primary: \'fa fa-fw fa-paper-plane\' }, label: $root.t($root.test.name), text: true }">TEST</a>    <!-- /ko -->    <!-- ko if: typeof $root.download !== \'undefined\' -->    <form id="downloadForm" action="#" method="POST">    <input type="hidden" name="action" value="download" />    <input type="hidden" name="filename" value="email.html" />    <input type="hidden" name="html" id="downloadHtmlTextarea" />    <a title="Download template" href="#" data-bind="attr: { title: $root.t(\'Download template\') }, click: $root.download.execute, clickBubble: false, button: { disabled: !$root.download.enabled(), icons: { primary: \'fa fa-fw fa-download\' }, label: $root.t($root.download.name), text: true }">ZAPISZ NA DYSK</a>    </form>    <!-- /ko -->    </div>  </div>  <!-- ko if: $root.showToolbox -->  <div id="main-toolbox" class="mo" data-bind="scrollable: true, withProperties: { templateMode: \'edit\' }">    <div data-bind="template: { name: \'toolbox\' }"></div>  </div>  <!-- /ko -->    <div id="main-preview" class="mo" data-bind="scrollable: true, if: $root.showPreviewFrame">    <div id="preview-toolbar">      <div data-bind="visible: $root.showPreviewFrame, buttonset: { }" style="display: inline-block">        <input id="previewLarge" type="radio" name="previewMode" value="large" data-bind="checked: $root.previewMode, button: { text: false, label: \'large\', icons: { primary: \'fa fa-fw fa-desktop\' } }" />        <label for="previewLarge" title="Large screen" data-bind="attr: { title: $root.t(\'Large screen\') }">Large screen</label>        <input id="previewDesktop" type="radio" name="previewMode" value="desktop" data-bind="checked: $root.previewMode, button: { text: false, label: \'desktop\', icons: { primary: \'fa fa-fw fa-tablet\' } }" />        <label for="previewDesktop" title="Tablet" data-bind="attr: { title: $root.t(\'Tablet\') }">Tablet</label>        <input id="previewMobile" type="radio" name="previewMode" value="mobile" data-bind="checked: $root.previewMode, button: { text: false, label: \'mobile\', icons: { primary: \'fa fa-fw fa-mobile\' } }" />        <label for="previewMobile" title="Smartphone" data-bind="attr: { title: $root.t(\'Smartphone\') }">Smartphone</label>      </div>    </div>    <div id="frame-container" data-bind="css: { desktop: $root.previewMode() == \'desktop\', mobile: $root.previewMode() == \'mobile\', large: $root.previewMode() == \'large\' }">      <iframe data-bind="bindIframe: $data"></iframe>    </div>  </div>  <div class="mo" id="mo-body"></div>  <!-- TODO REMOVE ME  <div id="incompatible-browser" title="Unsupported browser" style="display: none" data-bind="attr: { title: $root.t(\'Usupported browser\') }, html: \'<p>Your browser is not supported.</p><p>Use a different browser or try updaring your browser.</p><p>Supported browsers: <ul><li>Internet Explorer &gt;= 10</li><li>Google Chrome &gt;= 30</li><li>Apple Safari &gt;= 5</li><li>Mozilla Firefix &gt;= 20</li></ul></p>\'">    Unsupported browser  </div>  -->  <div id="incompatible-template" title="Saved model is obsolete" style="display: none" data-bind="attr: { title: $root.t(\'Saved model is obsolete\') }, html: $root.t(\'<p>The saved model has been created with a previous, non completely compatible version, of the template</p><p>Some content or style in the model <b>COULD BE LOST</b> if you will <b>save</b></p><p>Contact us for more informations!</p>\')">    Incompatible template  </div>  <div id="fake-image-editor" title="Fake image editor" style="display: none" data-bind="attr: { title: $root.t(\'Fake image editor\') }, html: $root.t(\'<p>Fake image editor</p>\')">    <p>Fake image editor</p>  </div></div><!-- ko if: $root.logoPath --><div id="loading" class="loading" style="display: block; width: 300px; text-align: center; height: 32px; position: absolute; top:0; bottom: 0; left: 0; right: 0;  margin: auto;" data-bind="attr: { style: \'position: absolute; top: 5px; left: 6px; z-index: 150;\'}, css: { loading: false }">  <a href="/" data-bind="attr: { href: $root.logoUrl, alt: $root.logoAlt }"><img data-bind="attr: { src: $root.logoPath }" width="32" height="32" alt="mosaico" border="0" /></a>  <div style="opacity: 0" data-bind="visible: false">Oppps... !!</div></div><!-- /ko -->'),templateSystem.addTemplate("toolbox",'<div id="tooltabs" class="tabs_horizontal button_color" data-bind="tabs: { active: $root.selectedTool }">  <ul>    <li data-bind="tooltips: {}"><a title="Blocks ready to be added to the template" data-local="true" href="#toolblocks" data-bind="attr: { title: $root.t(\'Blocks ready to be added to the template\') }"><i class="fa fa-fw fa-cubes"></i> <span data-bind="html: $root.t(\'Blocks\')">Blocks</span></a></li>    <li data-bind="tooltips: {}"><a title="Edit content options" href="#toolcontents" data-local="true" data-bind="attr: { title: $root.t(\'Edit content options\') }"><i class="fa fa-fw fa-pencil"></i> <span data-bind="html: $root.t(\'Content\')">Content</span></a></li>    <li data-bind="tooltips: {}"><a title="Edit style options" href="#toolstyles" data-local="true" data-bind="attr: { title: $root.t(\'Edit style options\') }"><i class="fa fa-fw fa-paint-brush"></i> <span data-bind="html: $root.t(\'Style\')">Style</span></a></li>  </ul>  <div id="toolblocks" data-bind="scrollable: true">    <div class="block-list" data-bind="foreach: blockDefs" style="text-align: center">      <div class="draggable-item" data-bind="withProperties: { templateMode: \'show\' }">        <div class="block" data-bind="extdraggable: { connectClass: \'sortable-blocks-edit\', data: $data, dropContainer: \'#main-wysiwyg-area\', dragging: $root.dragging, \'options\': { handle: \'.handle\', distance: 10, \'appendTo\': \'#page\' } }, click: $root.addBlock" style="position: relative;">          <div title="Click or drag to add this block to the template" class="handle" data-bind="attr: { title: $root.t(\'Click or drag to add this block to the template\') }, tooltips: {}"></div>          <img data-bind="attr: { alt: $root.t(\'Block __name__\', { name: ko.utils.unwrapObservable(type) }), src: $root.templatePath(\'edres/\'+ko.utils.unwrapObservable(type)+\'.png\') }" alt="Block __name__" />        </div>        <a href="#" class="addblockbutton" data-bind="click: $root.addBlock, button: { label: $root.t(\'Add\') }">Add</a>      </div>    </div>  </div>  <div id="toolcontents" data-bind="scrollable: true">    <!-- ko if: $root.selectedBlock() !== null -->    <div data-bind="block: $root.selectedBlock"></div>    <!-- /ko -->    <!-- ko if: $root.selectedBlock() == null -->    <div class="noSelectedBlock" data-bind="text: $root.t(\'By clicking on message parts you will select a block and content options, if any, will show here\')">By clicking on message parts you will select a block and content options, if any, will show here</div>    <!-- /ko -->    <!-- ko block: content --><!-- /ko -->  </div>    <div id="toolstyles" data-bind="scrollable: true, withProperties: { templateMode: \'styler\' }">    <!-- ko if: typeof $root.content().theme === \'undefined\' || typeof $root.content().theme().scheme === \'undefined\' || $root.content().theme().scheme() === \'custom\' -->      <!-- ko if: $root.selectedBlock() !== null -->      <div data-bind="block: $root.selectedBlock, css: { workLocal: $root.selectedBlock().customStyle, workGlobal: typeof $root.selectedBlock().customStyle === \'undefined\' || !$root.selectedBlock().customStyle() }"></div>      <!-- /ko -->      <!-- ko if: $root.selectedBlock() == null -->      <div class="noSelectedBlock" data-bind="text: $root.t(\'By clicking on message parts you will select a block and style options, if available, will show here\')">By clicking on message parts you will select a block and style options, if available, will show here</div>      <!-- /ko -->      <div class="workGlobalContent">      <!-- ko block: content --><!-- /ko -->      </div>    <!-- /ko -->  </div></div>        <div id="toolimages" class="slidebar" data-bind="scrollable: true, css: { hidden: $root.showGallery() === false }">  <div class="close" data-bind="click: $root.showGallery.bind($element, false);">X</div>  <span class="pane-title" data-bind="text: $root.t(\'Gallery:\')">Gallery:</span>  <div data-drop-content="Drop here" class="img-dropzone pane uploadzone" data-bind="attr: { \'data-drop-content\': $root.t(\'Drop here\') }, fudroppable: { activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }">  <div class="mo-uploadzone" style="position: relative; padding: 2em; border: 2px dotted #808080">     <input class="fileupload" type="file" multiple name="files[]" data-bind="fileupload: { onerror: $root.notifier.error, onfile: $root.loadImage }" style="z-index: 10; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">     <span data-bind="text: $root.t(\'Click or drag files here\')">Click or drag files here</span>     <div class="workzone" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;">       <div class="progress" style="opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;">         <div class="progress-bar progress-bar-success" style="height: 20px; background-color: black; "></div>       </div>     </div>  </div>  </div>  <!-- ko if: $root.showGallery() -->  <div id="toolimagestab" class="tabs_horizontal" data-bind="tabs: { active: $root.selectedImageTab }">    <ul>      <li data-bind="tooltips: {}"><a title="Session images" data-local="true" href="#toolimagesrecent" data-bind="attr: { title: $root.t(\'Session images\') }, text: $root.t(\'Recents\')">Recents</a></li>      <li data-bind="tooltips: {}"><a title="Remote gallery" data-local="true" href="#toolimagesgallery" data-bind="attr: { title: $root.t(\'Remote gallery\') }, text: $root.t(\'Gallery\')">Gallery</a></li>    </ul>    <div id="toolimagesrecent">      <!-- ko if: galleryRecent().length == 0 --><div class="galleryEmpty" data-bind="text: $root.t(\'No images uploaded, yet\')">No images uploaded, yet</div><!-- /ko -->      <!-- ko template: {name: \'gallery-images\', data: { items: galleryRecent } } --># recent gallery #<!-- /ko -->    </div>    <div id="toolimagesgallery" style="text-align: center">    <!-- ko if: $root.galleryLoaded() === false --><a class="loadbutton" title="Show images from the gallery" href="#" data-bind="attr: { title: $root.t(\'Show images from the gallery\') }, click: $root.loadGallery, button: { disabled: $root.galleryLoaded, icons: { primary: \'fa fa-fw fa-picture-o\' }, label: $root.galleryLoaded() == \'loading\' ? $root.t(\'Loading...\') : $root.t(\'Load gallery\'), text: true }"># load gally #</a><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === \'loading\' --><div class="galleryEmpty" data-bind="text: $root.t(\'Loading gallery...\')">Loading gallery...</div><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === 0 --><div class="galleryEmpty" data-bind="text: $root.t(\'The gallery is empty\')">The gallery is empty</div><!-- /ko -->    <!-- ko template: {name: \'gallery-images\', data: { items: galleryRemote } } --># remote gallery #<!-- /ko -->    </div>  </div>  <!-- /ko --></div><div id="tooldebug" class="slidebar" data-bind="css: { hidden: $root.debug() === false }">  <div class="close" data-bind="click: $root.debug.bind($element, false);">X</div>    <!-- ko if: $root.debug -->  Content:  <pre data-bind=\'text: ko.toJSON(content, null, 2)\' style="overflow: auto; height: 20%"></pre>  BlockDefs:  <pre data-bind=\'text: ko.toJSON(blockDefs, null, 2)\' style="overflow: auto; height: 20%"></pre>  <!-- /ko -->  <a href="#" data-bind="click: $root.exportHTMLtoTextarea.bind($element, \'#outputhtml\'); clickBubble: false, button: { text: true, label:\'Generate\' }">Output</a>  <a href="#" data-bind="click: $root.exportJSONtoTextarea.bind($element, \'#outputhtml\'); clickBubble: false, button: { text: true, label:\'Export\' }">Export</a>  <a href="#" data-bind="click: $root.importJSONfromTextarea.bind($element, \'#outputhtml\'); clickBubble: false, button: { text: true, label:\'Import\' }">Import</a>  <textarea id="outputhtml" rows="10" style="width: 100%;"></textarea></div><div id="tooltheme" class="ui-widget slidebar" data-bind="css: { hidden: $root.showTheme() === false }">  <div class="close" data-bind="click: $root.showTheme.bind($element, false);">X</div>    <!-- ko withProperties: { templateMode: \'styler\' } -->    <!-- ko if: $root.showTheme -->      <!-- ko block: $root.content().theme --><!-- /ko -->    <!-- /ko -->  <!-- /ko --></div>')});

},{"../src/js/bindings/choose-template.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/choose-template.js"}],"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/assert/assert.js":[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && !isFinite(value)) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) {
    return a === b;
  }
  var aIsArgs = isArguments(a),
      bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  var ka = objectKeys(a),
      kb = objectKeys(b),
      key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/util/util.js"}],"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/util/util.js":[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/util/support/isBufferBrowser.js","_process":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/process/browser.js","inherits":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/app.js":[function(require,module,exports){
(function (global){
"use strict";function _canonicalize(e){var i=global.document.createElement("div");return i.innerHTML="<a></a>",i.firstChild.href=e,i.innerHTML=i.innerHTML,i.firstChild.href}var templateLoader=require("./template-loader.js"),console=require("./../../bower_components/console-browserify/index.js"),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);require("./ko-bindings.js");var performanceAwareCaller=require("./timed-call.js").timedCall,addUndoStackExtensionMaker=require("./undomanager/undomain.js"),colorPlugin=require("./ext/color.js"),localStorageLoader=require("./ext/localstorage.js"),applyBindingOptions=function(e,i){i.bindingHandlers.wysiwygSrc.convertedUrl=function(i,t,n,o){var a=e.imgProcessorBackend?e.imgProcessorBackend:"./upload",r=a.match(/^(https?:\/\/[^\/]*\/).*$/),l=i.match(/^(https?:\/\/[^\/]*\/).*$/);return null===r||null!==l&&r[1]==l[1]?a+"?src="+encodeURIComponent(i)+"&method="+encodeURIComponent(t)+"&params="+encodeURIComponent(n+","+o):(console.log("Cannot apply backend image resizing to non-local resources ",i,t,n,o,r,l),i+"?method="+t+"&width="+n+(null!==o?"&height="+o:""))},i.bindingHandlers.wysiwygSrc.placeholderUrl=function(i,t,n){return e.imgProcessorBackend+"?method=placeholder&params="+i+encodeURIComponent(",")+t},e&&e.tinymceConfig&&(i.bindingHandlers.wysiwyg.standardOptions=e.tinymceConfig),e&&e.tinymceConfigFull&&(i.bindingHandlers.wysiwyg.fullOptions=e.tinymceConfigFull)},start=function(e,i,t,n,o){templateLoader.fixPageEvents();var a=function(i){var t={messages:{unknownError:i.t("Unknown error"),uploadedBytes:i.t("Uploaded bytes exceed file size"),maxNumberOfFiles:i.t("Maximum number of files exceeded"),acceptFileTypes:i.t("File type not allowed"),maxFileSize:i.t("File is too large"),minFileSize:i.t("File is too small"),post_max_size:i.t("The uploaded file exceeds the post_max_size directive in php.ini"),max_file_size:i.t("File is too big"),min_file_size:i.t("File is too small"),accept_file_types:i.t("Filetype not allowed"),max_number_of_files:i.t("Maximum number of files exceeded"),max_width:i.t("Image exceeds maximum width"),min_width:i.t("Image requires a minimum width"),max_height:i.t("Image exceeds maximum height"),min_height:i.t("Image requires a minimum height"),abort:i.t("File upload aborted"),image_resize:i.t("Failed to resize image"),generic:i.t("Unexpected upload error")}};e&&e.fileuploadConfig&&(t=$.extend(!0,t,e.fileuploadConfig)),ko.bindingHandlers.fileupload.extendOptions=t},r=function(i){e&&e.strings&&(i.t=function(t,n){var o=e.strings[t];return"undefined"==typeof o&&(console.warn("Missing translation string for",t,": using default string"),o=t),i.tt(o,n)})},l=[addUndoStackExtensionMaker(performanceAwareCaller),colorPlugin,r];if("undefined"!=typeof o)for(var d=0;d<o.length;d++)l.push(o[d]);l.push(a);var s=e.fileuploadConfig?e.fileuploadConfig.url:"/upload/";applyBindingOptions(e,ko),$("<!-- ko template: 'main' --><!-- /ko -->").appendTo(global.document.body),"undefined"==typeof i&&"undefined"!=typeof t&&(i=t.template),templateLoader.load(performanceAwareCaller,i,t,n,l,s)},initFromLocalStorage=function(e,i,t){try{var n=localStorageLoader(i,e.emailProcessorBackend),o="undefined"!=typeof t?t:[];o.push(n.extension);var a=_canonicalize(n.metadata.template);start(e,a,n.metadata,n.model,o)}catch(r){console.error("TODO not found ",i,r)}},init=function(e,i){var t=global.location.hash?global.location.href.split("#")[1]:void 0;if(e&&(e.template||e.data))if(e.data){var n=JSON.parse(e.data);start(e,void 0,n.metadata,n.content,i)}else start(e,e.template,void 0,void 0,i);else if(t&&7==t.length)initFromLocalStorage(e,t,i);else{if(!t)return!1;start(e,_canonicalize(t),void 0,void 0,i)}return!0};module.exports={isCompatible:templateLoader.isCompatible,init:init,start:start};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./ext/color.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/ext/color.js","./ext/localstorage.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/ext/localstorage.js","./ko-bindings.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/ko-bindings.js","./template-loader.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/template-loader.js","./timed-call.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/timed-call.js","./undomanager/undomain.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/undomanager/undomain.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/bind-iframe.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js"),addScriptTemplate=function(t,e,n){var o=t.createElement("script");return o.setAttribute("type","text/html"),o.setAttribute("id",e),o.text=n,t.body.appendChild(o),o};ko.bindingHandlers.bindIframe={tpl:'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body><div data-bind="block: content"></div></body>\r\n</html>\r\n',init:function(t,e){function n(n){try{var o=t.contentDocument;o.open(),o.write(ko.bindingHandlers.bindIframe.tpl),o.close();try{var r=o.body;if(r){for(var i=t.contentWindow.parent.document.getElementsByTagName("script"),a=0;a<i.length;a++)"text/html"==i[a].getAttribute("type")&&i[a].getAttribute("id")&&addScriptTemplate(o,i[a].getAttribute("id"),i[a].innerHTML);var d=o.getElementsByTagName("HTML");ko.utils.domNodeDisposal.addDisposeCallback(t,function(){ko.cleanNode(d[0]||r)}),ko.applyBindings(e(),d[0]||r)}else console.log("no iframedoc",n)}catch(l){throw console.log("error reading iframe.body",l,n),l}}catch(l){throw console.log("error reading iframe contentDocument",l,n),l}}n("first call")}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/blocks.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.withProperties={init:function(e,n,t,o,a){var l=a.createChildContext(a.$rawData,null,function(e){ko.utils.extend(e,n())});return ko.applyBindingsToDescendants(l,e),{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.withProperties=!0,ko.bindingHandlers.log={init:function(e,n,t,o,a){console.log("log",n())}},ko.bindingHandlers.block={templateExists:function(e){var n=global.document.getElementById(e);return!!n},_chooseTemplate:function(e,n,t,o){var a=n+"-"+t;if(ko.bindingHandlers.block.templateExists(a))return a;if("undefined"!=typeof o&&null!==o)return ko.bindingHandlers.block._chooseTemplate(e,n,o);var l=e?"array":"object-"+t;if(ko.bindingHandlers.block.templateExists(l))return l;throw"cannot find template for "+a+"/"+l},_displayMode:function(e,n){var t="undefined"!=typeof e.type?ko.utils.unwrapObservable(e.type):"notablock-"+typeof e,o="undefined"!=typeof e.splice,a=n.templateMode?n.templateMode:"show";return ko.bindingHandlers.block._chooseTemplate(o,t,a,n.templateModeFallback)},_makeTemplateValueAccessor:function(e,n){return function(){var t,o,a=e(),l=ko.utils.peekObservable(a);if(!l||"object"!=typeof l.data&&"function"!=typeof l.data)t=a;else if(t=l.data,"undefined"!=typeof l.template){var i=ko.utils.unwrapObservable(l.template),r=n.templateMode?n.templateMode:"show";o=ko.bindingHandlers.block._chooseTemplate(!1,i,r,n.templateModeFallback)}var d=ko.utils.unwrapObservable(t);if(ko.isObservable(d)&&console.log("doubleObservable",d),"undefined"==typeof o)if(void 0===t)o="empty";else try{o=ko.bindingHandlers.block._displayMode(d,n)}catch(s){throw console.log(s,d,n.$data,n.templateMode),s}return{name:o,data:t,templateEngine:ko.nativeTemplateEngine.instance}}},init:function(e,n,t,o,a){"undefined"==typeof n()&&console.log("found a null block: check ending commas in arrays defs in IE");var l=ko.bindingHandlers.block._makeTemplateValueAccessor(n,a);return ko.bindingHandlers.template.init(e,l)},update:function(e,n,t,o,a){var l=ko.bindingHandlers.block._makeTemplateValueAccessor(n,a);return ko.bindingHandlers.template.update(e,l,t,o,a)}},ko.expressionRewriting.bindingRewriteValidators.block=!1,ko.virtualElements.allowedBindings.block=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/choose-template.js":[function(require,module,exports){
"use strict";module.exports=require("./string-template.js");

},{"./string-template.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/string-template.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/colorpicker.js":[function(require,module,exports){
(function (global){
"use strict";require("./../../../bower_components/evol-colorpicker/js/evol.colorpicker.min.js");var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),ColorPicker=function(){kojqui.BindingHandler.call(this,"colorpicker")};ColorPicker.prototype=kojqui.utils.createObject(kojqui.BindingHandler.prototype),ColorPicker.prototype.constructor=ColorPicker,ColorPicker.prototype.init=function(o,r,e){var i=r(),n=i.color,t=ko.computed({read:n,write:n,disposeWhenNodeIsRemoved:o}),c=function(){return t};ko.bindingHandlers.value.init(o,c,e);var u=function(o,r){"undefined"!=typeof r&&t(r)};$(o).on("change.color",u),ko.computed({read:function(){var r={color:ko.utils.unwrapObservable(t),showOn:"button"};for(var e in i)"color"!==e&&i.hasOwnProperty(e)&&(r[e]=ko.utils.unwrapObservable(i[e]));$(o).colorpicker(r)},disposeWhenNodeIsRemoved:o}),ko.utils.domNodeDisposal.addDisposeCallback(o,function(){$(o).off("change.color",u),$(o).colorpicker("destroy")})},kojqui.utils.register(ColorPicker);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/evol-colorpicker/js/evol.colorpicker.min.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/evol-colorpicker/js/evol.colorpicker.min.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/csstext.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);ko.bindingHandlers.cssText={update:function(e,t,n){var r=ko.utils.unwrapObservable(t());try{e.innerText=r}catch(s){e.styleSheet||(e.innerHTML="a{}"),e.styleSheet.cssText=r}}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/droppable.js":[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);!function(e){e(ko,$)}(function(e,t){var o="ko_sortItem",n="ko_dragItem",a=(e.utils.unwrapObservable,e.utils.domData.get);e.utils.domData.set;e.bindingHandlers.droppable={init:function(d,i,l,r,s){var u,p=t(d),b=e.utils.unwrapObservable(i())||{},c={};t.extend(!0,c,e.bindingHandlers.droppable),b.data?(b.options&&c.options&&(e.utils.extend(c.options,b.options),delete b.options),e.utils.extend(c,b)):c.data=b,u=c.options.drop,p.droppable(e.utils.extend(c.options,{drop:function(e,t){var d=t.draggable[0],i=a(d,o)||a(d,n);i&&(i.clone&&(i=i.clone()),c.dragged&&(i=c.dragged.call(this,i,e,t)||i),c.data&&c.data(i)),u&&u.apply(this,arguments)}})),void 0!==c.isEnabled&&e.computed({read:function(){p.droppable(e.utils.unwrapObservable(c.isEnabled)?"enable":"disable")},disposeWhenNodeIsRemoved:d})},update:function(e,t,o,n,a){},targetIndex:null,afterMove:null,beforeMove:null,options:{}}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/eventable.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.focusable={focus:function(){},blur:function(){},init:function(o){ko.utils.domNodeDisposal.addDisposeCallback(o,function(){$(o).off("focusin",ko.bindingHandlers.focusable.focus),$(o).off("focusout",ko.bindingHandlers.focusable.blur)}),$(o).on("focusin",ko.bindingHandlers.focusable.focus),$(o).on("focusout",ko.bindingHandlers.focusable.blur)}},ko.bindingHandlers.scrollable={scroll:function(){},init:function(o){ko.utils.domNodeDisposal.addDisposeCallback(o,function(){$(o).off("scroll",ko.bindingHandlers.scrollable.scroll)}),$(o).on("scroll",ko.bindingHandlers.scrollable.scroll)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/extender-pagination.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);ko.extenders.paging=function(e,t){var n=ko.observable(t||10),r=ko.observable(1);return e.pageSize=ko.computed({read:n,write:function(e){n(e>0?e:10)}}),e.currentPage=ko.computed({read:r,write:function(t){r(t>e.pageCount()?e.pageCount():0>=t?1:t)}}),e.pageCount=ko.computed(function(){return Math.ceil(e().length/e.pageSize())||1}),e.currentPageData=ko.computed(function(){var t=n(),o=r(),u=t*(o-1),a=t*o;return e().slice(u,a)}),e.moveFirst=function(){e.currentPage(1)},e.movePrevious=function(){e.currentPage(e.currentPage()-1)},e.moveNext=function(){e.currentPage(e.currentPage()+1)},e.moveLast=function(){e.currentPage(e.pageCount())},e};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/extsortables.js":[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");require("./../../../bower_components/knockout-sortable/build/knockout-sortable.min.js");var isDraggingHelper=function(e,n){e()?n.type==e()+"stop"&&e(!1):"dragstart"!=n.type&&"sortstart"!=n.type||e(n.type.substring(0,4))},makeExtendedValueAccessor=function(e){return function(){var n=e();ko.utils.peekObservable(n);ko.utils.unwrapObservable(n),"undefined"==n.options&&(n.options={});var r=n.options.start;n.options.start=function(e,t){return"undefined"!=typeof n.dragging&&ko.isWritableObservable(n.dragging)&&isDraggingHelper(n.dragging,e),"undefined"!=typeof n.dropContainer&&(n.scrollInterval=global.setInterval(function(){var e=$(n.dropContainer).scrollTop();$(n.dropContainer).scrollTop(e+n.adding)},20)),"undefined"!=typeof r?r(e,t):void 0};var t=n.options.stop;n.options.stop=function(e,r){return"undefined"!=typeof n.dragging&&ko.isWritableObservable(n.dragging)&&isDraggingHelper(n.dragging,e),"undefined"!=typeof n.dropContainer&&global.clearInterval(n.scrollInterval),"undefined"!=typeof t?t(e,r):void 0};var o=n.options.drag;return n.options.drag=function(e,r){if("undefined"!=typeof n.dropContainer){var t=e.pageY-$(n.dropContainer).offset().top,i=t-$(n.dropContainer).height();-20>t?n.adding=-20:0>t?n.adding=-10:10>t?n.adding=-5:i>20?n.adding=20:i>0?n.adding=10:i>-10?n.adding=5:n.adding=0}return"undefined"!=typeof o?o(e,r):void 0},n}};ko.bindingHandlers.extsortable={init:function(e,n,r,t,o){return ko.bindingHandlers.sortable.init(e,makeExtendedValueAccessor(n),r,t,o)},update:function(e,n,r,t,o){return ko.bindingHandlers.sortable.update(e,makeExtendedValueAccessor(n),r,t,o)}},ko.bindingHandlers.extdraggable={init:function(e,n,r,t,o){return ko.bindingHandlers.draggable.init(e,makeExtendedValueAccessor(n),r,t,o)},update:function(e,n,r,t,o){return ko.bindingHandlers.draggable.update(e,makeExtendedValueAccessor(n),r,t,o)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/knockout-sortable/build/knockout-sortable.min.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-sortable/build/knockout-sortable.min.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/fileupload.js":[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.preloader={init:function(e,i){var o=i();if("undefined"==typeof o.preloaded){o.preloaded=ko.observable("");var r=function(e){if(e!=o.preloaded())if(""!==e){var i=new Image;i.onload=function(){o.preloaded(e)},i.onerror=function(){o.preloaded(e)},i.src=e}else o.preloaded(e)};o.subscribe(r),r(o())}}},ko.bindingHandlers.advattr={init:function(e,i,o,r,l){var a=ko.utils.unwrapObservable(i()||{});ko.utils.objectForEach(a,function(i,o){var r=e.getAttribute(i);if(ko.isWriteableObservable(o)){var l=o();l!=r&&(o(r),null!==l&&console.log("AdvAttr found a value different from the default",i,l,r))}})},update:function(e,i,o){var r=ko.utils.unwrapObservable(i())||{};ko.utils.objectForEach(r,function(i,o){o=ko.utils.unwrapObservable(o);var r=o===!1||null===o||void 0===o;r?e.removeAttribute(i):e.setAttribute(i,o.toString())})}},ko.bindingHandlers.advstyle={init:function(e,i,o,r,l){var a=ko.utils.unwrapObservable(i()||{});ko.utils.objectForEach(a,function(i,o){var r;if(i.match(/Px$/)?(i=i.substr(0,i.length-2),r=e.style[i],r.match(/px$/)?r=r.replace(/px$/,""):console.log("AdvStyle binding found an unexpected default value",i,r,e)):r=e.style[i],ko.isWriteableObservable(o)){var l=o();l!=r&&(o(r),null!==l&&console.log("AdvStyle found a value different from the default",i,l,r))}})},update:function(e,i){var o=ko.utils.unwrapObservable(i()||{});ko.utils.objectForEach(o,function(i,o){o=ko.utils.unwrapObservable(o),null!==o&&"undefined"!=typeof o&&o!==!1||(o=""),i.match(/Px$/)&&(i=i.substr(0,i.length-2),o+="px"),e.style[i]=o})}},ko.bindingHandlers.domlog={init:function(e,i){console.log("initialized",e),ko.utils.domNodeDisposal.addDisposeCallback(e,function(){console.log("disposed",e)})}},ko.bindingHandlers.fudroppable={init:function(e,i){var o=i()||{},r={},l=function(e,i,o,r,l,a){e[i]?global.clearTimeout(e[i]):("undefined"!=typeof r&&o.classList.add(r),ko.isWriteableObservable(l)&&!l()&&l(!0));var t=function(){e[i]=null,"undefined"!=typeof r&&o.classList.remove(r),ko.isWriteableObservable(l)&&l()&&l(!1)};"dragleave"==a.type?t():e[i]=global.setTimeout(t,500)};(o.active||o.activeClass)&&ko.utils.registerEventHandler(global,"dragover",l.bind(void 0,r,"activeTimeout",e,o.activeClass,o.active)),o.hoverClass&&ko.utils.registerEventHandler(e,"dragover dragenter dragleave",l.bind(void 0,r,"hoverTimeout",e,o.hoverClass,void 0))}},ko.bindingHandlers.fileupload={extendOptions:{},remoteFilePreprocessor:function(e){return e},init:function(e,i){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).fileupload("destroy")}),global.webkitURL?$(e).attr("title"," "):$(e).attr("title","")},update:function(e,i){var o=i()||{},r=$(e),l=r.parents(".uploadzone"),a=o.data;o.data=void 0;var t=o.canvasPreview;ko.utils.extend(o,{url:"/upload/",dataType:"json",dropZone:l.find(".mo-uploadzone")[0],autoUpload:!0,acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,maxFileSize:1048576,disableImageResize:/Android(?!.*Chrome)|Opera/.test(global.navigator.userAgent),previewMaxWidth:200,previewMaxHeight:200,previewCrop:!1,replaceFileInput:!1,messages:{unknownError:"Unknown error",uploadedBytes:"Uploaded bytes exceed file size",maxNumberOfFiles:"Maximum number of files exceeded",acceptFileTypes:"File type not allowed",maxFileSize:"File is too large",minFileSize:"File is too small",post_max_size:"The uploaded file exceeds the post_max_size directive in php.ini",max_file_size:"File is too big",min_file_size:"File is too small",accept_file_types:"Filetype not allowed",max_number_of_files:"Maximum number of files exceeded",max_width:"Image exceeds maximum width",min_width:"Image requires a minimum width",max_height:"Image exceeds maximum height",min_height:"Image requires a minimum height",abort:"File upload aborted",image_resize:"Failed to resize image",generic:"Unexpected upload error"}}),ko.utils.extend(o,ko.bindingHandlers.fileupload.extendOptions);var n=0,s="",d=function(){0===--n&&(a&&a(s),s="",t&&(l.find("img").show(),l.find("canvas").remove()),l.removeClass("uploading"),l.find(".progress-bar").css("width",0))},u=function(e){if("object"==typeof o.messages&&null!==o.messages){var i=e.match(/^([^ ]+)(.*)$/);if(i&&"undefined"!=typeof o.messages[i[1]])return o.messages[i[1]]+i[2]}return e};r.fileupload(o);for(var f=["fileuploadadd","fileuploadprocessalways","fileuploadprogressall","fileuploaddone","fileuploadfail"],p=function(e,i){if("fileuploadadd"==e.type&&n++,"fileuploadfail"==e.type&&(console.log("fileuploadfail",e,i),o.onerror&&(""===i.errorThrown&&"error"==i.textStatus?o.onerror(u("generic")):o.onerror(u("generic ("+i.errorThrown+")"))),d()),"fileuploaddone"==e.type)if("undefined"!=typeof i.result.files[0].url){if(o.onfile)for(var r=0;r<i.result.files.length;r++)i.result.files[r]=ko.bindingHandlers.fileupload.remoteFilePreprocessor(i.result.files[r]),o.onfile(i.result.files[r]);if(""===s&&(s=i.result.files[0].url),t){var a=new Image;a.onload=d,a.onerror=d,a.src=i.result.files[0].url}else d()}else"undefined"!=typeof i.result.files[0].error?(console.log("remote error",e,i),o.onerror&&o.onerror(u(i.result.files[0].error)),d()):(console.log("unexpected error",e,i),o.onerror&&o.onerror(u("generic (Unexpected Error retrieving uploaded file)")),d());if("fileuploadprocessalways"==e.type){var f=i.index,p=i.files[f];if(p.preview&&0===f&&0===l.find("canvas").length){if(t){var c=$(p.preview).css("width","100%");l.find("img").hide(),l.prepend(c)}l.addClass("uploading"),l.find(".progress-bar").css("width",0)}p.error&&(o.onerror&&o.onerror(u(p.error)),d())}if("fileuploadprogressall"==e.type){var v=parseInt(i.loaded/i.total*100,10);l.find(".progress-bar").css("width",v+"%")}},c=f.length-1;c>=0;c--){var v=f[c];r.on(v,p)}$.support.fileInput||r.prop("disabled",!0).parent().addClass("disabled")}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/if-subs.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.ifSubs={cloneNodes:function(e,o){for(var n=0,i=e.length,t=[];i>n;n++){var r=e[n].cloneNode(!0);t.push(o?ko.cleanNode(r):r)}return t},init:function(e,o,n,i,t){var r,s,u=o();return"undefined"==typeof u.data.subsCount&&ko.extenders.subscriptionsCount(u.data),ko.computed(function(){var n,i,d,p=ko.utils.unwrapObservable(o().data.subsCount),a=!s;d=-("undefined"!=typeof o().gutter?o().gutter:1),n=p+(r?d:0)>=ko.utils.unwrapObservable(u.threshold),"undefined"!=typeof o().not&&o().not&&(n=!n),i=a||n!==r,i&&(a&&ko.computedContext.getDependenciesCount()&&(s=ko.bindingHandlers.ifSubs.cloneNodes(ko.virtualElements.childNodes(e),!0)),n?(a||ko.virtualElements.setDomNodeChildren(e,ko.bindingHandlers.ifSubs.cloneNodes(s)),ko.applyBindingsToDescendants(t,e)):ko.virtualElements.emptyNode(e),r=n)},null,{disposeWhenNodeIsRemoved:e}),{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.ifSubs=!0;var beforeSubscriptionProp,afterSubscriptionProp;if("undefined"!=typeof ko.DEBUG&&"undefined"!=typeof ko.isWritableObservable)beforeSubscriptionProp="beforeSubscriptionAdd",afterSubscriptionProp="afterSubscriptionRemove";else if("3.2.0"==ko.version)beforeSubscriptionProp="va",afterSubscriptionProp="nb";else if("3.3.0"==ko.version)beforeSubscriptionProp="ja",afterSubscriptionProp="ua";else{if("3.4.0"!=ko.version)throw"Unsupported minimized Knockout version "+ko.version+" (supported DEBUG or minimized 3.2.0 ... 3.4.0)";beforeSubscriptionProp="sa",afterSubscriptionProp="Ia"}ko.extenders.subscriptionsCount=function(e,o,n){if("undefined"==typeof e.subsCount){e.subsCount=ko.observable(e.getSubscriptionsCount()).extend({notify:"always"});var i=e[beforeSubscriptionProp],t=e[afterSubscriptionProp];e[beforeSubscriptionProp]=function(t){i&&i.call(e,t);var r=e.getSubscriptionsCount()+1;"undefined"!=typeof o&&r!=o&&"undefined"!=typeof n&&r!=n||e.subsCount(r)},e[afterSubscriptionProp]=function(i){t&&t.call(e,i);var r=e.getSubscriptionsCount();"undefined"!=typeof o&&r!=o&&"undefined"!=typeof n&&r!=n||e.subsCount(r)}}else console.log("already applied subscriptionCount to observable");return null};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/jqueryui-spinner.js":[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js");$.widget("ui.spinner",$.ui.spinner,{_adjustValue:function(i){var e=(this._super(i),this.options);return i=parseFloat(i.toFixed(this._precision())),null!==e.max&&i>e.max?e.max:null!==e.min&&i<e.min?e.min:i}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/jqueryui-tabs.js":[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js");$.widget("ui.tabs",$.ui.tabs,{_isLocal:function(e){return"true"==e.getAttribute("data-local")?!0:this._superApply(arguments)}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/script-template.js":[function(require,module,exports){
(function (global){
"use strict";function pushTemplate(e,t){var n=global.document.createElement("script");n.setAttribute("type","text/html"),n.setAttribute("id",e),n.text=t,global.document.body.appendChild(n)}function removeTemplate(e){var t=global.document.getElementById(e);t&&t.parentNode.removeChild(t)}function init(){}function getTemplateContent(e){var t=global.document.getElementById(e);return t?t.innerHTML:void 0}module.exports={init:init,addTemplate:pushTemplate,removeTemplate:removeTemplate,getTemplateContent:getTemplateContent};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/scrollfix.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js"),tinymce=(typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null),timeout,render=function(){timeout=void 0,"undefined"!=typeof tinymce.activeEditor&&"undefined"!=typeof tinymce.activeEditor.theme&&"undefined"!=typeof tinymce.activeEditor.theme.panel&&"undefined"!=typeof tinymce.activeEditor.theme.panel.visible&&(("undefined"!=typeof tinymce.activeEditor.theme.panel._visible&&tinymce.activeEditor.theme.panel._visible&&tinymce.activeEditor.theme.panel._fixed||"undefined"!=typeof tinymce.activeEditor.theme.panel.state&&tinymce.activeEditor.theme.panel.state.get("visible")&&tinymce.activeEditor.theme.panel.state.get("fixed"))&&tinymce.activeEditor.theme.panel.fixed(!1),tinymce.activeEditor.nodeChanged(),tinymce.activeEditor.theme.panel.visible(!0),tinymce.activeEditor.theme.panel.layoutRect().y<=40&&tinymce.activeEditor.theme.panel.moveBy(0,40-tinymce.activeEditor.theme.panel.layoutRect().y))};ko.bindingHandlers.wysiwygScrollfix={scroll:function(e){timeout&&global.clearTimeout(timeout),timeout=global.setTimeout(render,50)},init:function(e){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).off("scroll",ko.bindingHandlers.wysiwygScrollfix.scroll)}),$(e).on("scroll",ko.bindingHandlers.wysiwygScrollfix.scroll)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/scrollintoview.js":[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js"),_scrollIntoView=function(o,e,l,n){var r=l.scrollTop(),t=r-n-(e?20:-20),i="undefined"!=typeof l[0].nodeType;if(i){var s={scrollTop:""+Math.round(t)+"px"},c=Math.round(Math.abs(t-r));l.stop().animate(s,c)}else l.scrollTop(t)};ko.bindingHandlers.scrollIntoView={update:function(o,e,l,n,r){var t=ko.utils.unwrapObservable(e());if(t)try{for(;8===o.nodeType;)o=o.nextSibling;if(8!==o.nodeType){var i,s=$(o).scrollParent(),c=!1;9==s[0].nodeType?(s=$(s[0].defaultView),i=0,c=!0):i=s.offset().top;var a=s.height(),p=s.scrollTop(),u=i+a,d=$(o),f=d.offset().top;c&&(f-=p);var w=d.height(),v=f+w;f>i&&u>f+w||(a>w?(i>f&&_scrollIntoView(o,!0,s,i-f),v>u&&_scrollIntoView(o,!1,s,u-v)):(i>f&&u>v&&_scrollIntoView(o,!1,s,u-v),f>i&&v>u&&_scrollIntoView(o,!0,s,i-f)))}}catch(T){console.log("TODO exception scrolling into view",T)}}},ko.virtualElements.allowedBindings.scrollIntoView=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/string-template.js":[function(require,module,exports){
(function (global){
"use strict";function createStringTemplateEngine(e){var t=e.makeTemplateSource;return e.makeTemplateSource=function(e){return"undefined"!=typeof templates[e]?new ko.templateSources.stringTemplate(e,templates[e]):t(e)},e}function pushTemplate(e,t){templates[e]=t}function removeTemplate(e){"undefined"!=typeof templates[e]?templates[e]=void 0:origTemplateSystem.removeTemplate(e)}function init(){ko.setTemplateEngine(createStringTemplateEngine(new ko.nativeTemplateEngine))}function getTemplateContent(e){return"undefined"!=typeof templates[e]?templates[e]:origTemplateSystem.getTemplateContent(e)}var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),origTemplateSystem=require("./script-template.js"),templates={};ko.templateSources.stringTemplate=function(e,t){this.templateName=e,this.template=t,this._data={}},ko.utils.extend(ko.templateSources.stringTemplate.prototype,{data:function(e,t){return 1===arguments.length?this._data[e]:void(this._data[e]=t)},text:function(e){return 0===arguments.length?this.template:void(this.template=e)}}),module.exports={init:init,addTemplate:pushTemplate,removeTemplate:removeTemplate,getTemplateContent:getTemplateContent};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./script-template.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/script-template.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/tooltips.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),console=require("./../../../bower_components/console-browserify/index.js"),extendValueAccessor=function(e,n){return function(){return ko.utils.extend(n,e()),n}},options={show:{delay:500},track:!0,items:'[title][title!=""][title!=" "]'};ko.bindingHandlers.tooltips={init:function(e,n,o,t,i){return"undefined"!=typeof $.fn.tooltip&&"undefined"!=typeof ko.bindingHandlers.tooltip?ko.bindingHandlers.tooltip.init(e,extendValueAccessor(n,options),o,t,i):void 0},update:function(e,n,o,t,i){return"undefined"!=typeof $.fn.tooltip&&"undefined"!=typeof ko.bindingHandlers.tooltip?ko.bindingHandlers.tooltip.update(e,extendValueAccessor(n,options),o,t,i):void 0}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/validated-value.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.validatedValue={init:function(e,i,n){var t=i;if("undefined"!=typeof e.pattern){var a=new RegExp("^(?:"+e.pattern+")$"),r=ko.computed({read:function(){var n=ko.utils.unwrapObservable(i()),t=null===n||""===n||a.test(n);return t?e.classList.remove("invalid"):e.classList.add("invalid"),n},write:ko.isWriteableObservable(i())&&function(e){i()(e)},disposeWhenNodeIsRemoved:e});t=function(){return r}}ko.bindingHandlers.value.init(e,t,n)}},ko.expressionRewriting._twoWayBindings.validatedValue=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/virtuals.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.uniqueId={currentIndex:0,init:function(e,n){var t=ko.utils.unwrapObservable(n())||{};if(""===t.id()){var i,l,r;r="ko_"+("undefined"!=typeof t.type?ko.utils.unwrapObservable(t.type):"block");do i=r+"_"+ ++ko.bindingHandlers.uniqueId.currentIndex,l=global.document.getElementById(i);while(l);t.id(i)}}},ko.virtualElements.allowedBindings.uniqueId=!0,ko.bindingHandlers.virtualAttr={update:function(e,n){8!==e.nodeType&&ko.bindingHandlers.attr.update(e,n)}},ko.virtualElements.allowedBindings.virtualAttr=!0,ko.bindingHandlers.virtualAttrStyle={update:function(e,n,t,i,l){if(8!==e.nodeType){var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode,d=["style"];r&&d.push("replacedstyle");for(var o=ko.utils.unwrapObservable(n()),a=0;a<d.length;a++){var u=d[a],s=o===!1||null===o||void 0===o;s?e.removeAttribute(u):e.setAttribute(u,o.toString())}}}},ko.virtualElements.allowedBindings.virtualAttrStyle=!0,ko.bindingHandlers.virtualStyle={update:function(e,n){8!==e.nodeType&&ko.bindingHandlers.style.update(e,n)}},ko.virtualElements.allowedBindings.virtualStyle=!0,ko.bindingHandlers.virtualHtml={init:ko.bindingHandlers.html.init,update:function(e,n){if(8===e.nodeType){var t=ko.utils.unwrapObservable(n());if(ko.virtualElements.emptyNode(e),null!==t&&void 0!==t){"string"!=typeof t&&(t=t.toString());var i=ko.utils.parseHtmlFragment(t);if(i)for(var l=e.nextSibling,r=0,d=i.length;d>r;r++)l.parentNode.insertBefore(i[r],l)}}else ko.bindingHandlers.html.update(e,n);return{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.virtualHtml=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/wysiwygs.js":[function(require,module,exports){
(function (global){
"use strict";var tinymce=(typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");require("./eventable.js"),ko.bindingHandlers.wysiwygOrHtml={init:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;return r?ko.bindingHandlers.virtualHtml.init():ko.bindingHandlers.wysiwyg.init(e,t,n,i,o)},update:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;return r?ko.bindingHandlers.virtualHtml.update(e,t,n,i,o):void 0}},ko.virtualElements.allowedBindings.wysiwygOrHtml=!0,ko.bindingHandlers.wysiwygHref={init:function(e,t,n,i,o){if(8!==e.nodeType){var r=(t(),"undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode);if(r)e.setAttribute("target","_new");else{var l=n();"undefined"!=typeof l.wysiwygOrHtml?e.setAttribute("href","javascript:void(0)"):(e.removeAttribute("href"),e.setAttribute("disabledhref","#"))}}},update:function(e,t,n,i,o){if(8!==e.nodeType){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode,l=ko.utils.unwrapObservable(t());r&&(l===!1||null===l||void 0===l?e.removeAttribute("href"):e.setAttribute("href",l.toString()))}}},ko.virtualElements.allowedBindings.wysiwygHref=!0,ko.bindingHandlers.wysiwygSrc={convertedUrl:function(e,t,n,i){var o=e+"?method="+t+"&width="+n+(null!==i?"&height="+i:"");return console.log("basic converterUrl",o),o},placeholderUrl:function(e,t,n){},update:function(e,t,n,i,o){var r=ko.utils.unwrapObservable(t()),l=ko.utils.unwrapObservable(r.src),a=ko.utils.unwrapObservable(r.placeholder),s=ko.utils.unwrapObservable(r.width),d=ko.utils.unwrapObservable(r.height);if(l===!1||null===l||void 0===l||""===l)"object"==typeof a&&null!==a?e.setAttribute("src",ko.bindingHandlers.wysiwygSrc.placeholderUrl(a.width,a.height,a.text)):e.removeAttribute("src");else{var u=ko.utils.unwrapObservable(r.method);u||(u=s>0&&d>0?"cover":"resize");var g=ko.bindingHandlers.wysiwygSrc.convertedUrl(l.toString(),u,s,d);e.setAttribute("src",g)}"undefined"!=typeof s&&null!==s?e.setAttribute("width",s):e.removeAttribute("width"),"undefined"!=typeof d&&null!==d?e.setAttribute("height",d):e.removeAttribute("height")}},ko.bindingHandlers.wysiwygId={init:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;r||e.setAttribute("id",ko.utils.unwrapObservable(t()))},update:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;r||e.setAttribute("id",ko.utils.unwrapObservable(t()))}},ko.virtualElements.allowedBindings.wysiwygId=!0,ko.bindingHandlers.wysiwygClick={init:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;r||ko.bindingHandlers.click.init(e,t,n,i,o)}},ko.virtualElements.allowedBindings.wysiwygClick=!0,ko.bindingHandlers.wysiwygCss={update:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;r||ko.bindingHandlers.css.update(e,t,n,i,o)}},ko.virtualElements.allowedBindings.wysiwygCss=!0,ko.bindingHandlers.wysiwygImg={makeTemplateValueAccessor:function(e,t){return function(){var n="undefined"!=typeof t.templateMode&&"wysiwyg"==t.templateMode,i=e(),o=ko.utils.peekObservable(i);return ko.utils.unwrapObservable(i),{name:n?o._editTemplate:o._template,templateEngine:ko.nativeTemplateEngine.instance}}},init:function(e,t,n,i,o){return ko.bindingHandlers.template.init(e,ko.bindingHandlers.wysiwygImg.makeTemplateValueAccessor(t,o))},update:function(e,t,n,i,o){return o=o.extend(t()),ko.bindingHandlers.template.update(e,ko.bindingHandlers.wysiwygImg.makeTemplateValueAccessor(t,o),n,i,o)}},ko.virtualElements.allowedBindings.wysiwygImg=!0,ko.bindingHandlers.wysiwyg={currentIndex:0,standardOptions:{},fullOptions:{toolbar1:"bold italic forecolor backcolor hr styleselect removeformat | link unlink | pastetext code",plugins:["link hr paste lists textcolor code"]},init:function(e,t,n,i,o){ko.bindingHandlers.focusable.init(e),ko.utils.domNodeDisposal.addDisposeCallback(e,function(){tinymce.remove("#"+e.getAttribute("id"))});var r=t();if(!ko.isObservable(r))throw"Wysiwyg binding called with non observable";if(8===e.nodeType)throw"Wysiwyg binding called on virtual node, ignoring...."+e.innerHTML;var l=e.getAttribute("id");l||(l="wysiwyg_"+ ++ko.bindingHandlers.wysiwyg.currentIndex,e.setAttribute("id",l));var a,s="DIV"==e.tagName||"TD"==e.tagName,d=!1,u=!1,g={selector:"#"+l,inline:!0,hidden_input:!1,plugins:["paste"],toolbar1:"bold italic",toolbar2:"",preview_styles:!1,paste_as_text:!0,language:"en",schema:"html5",extended_valid_elements:"strong/b,em/i,*[*]",menubar:!1,skin:"gray-flat",setup:function(e){e.on("change redo undo",function(){d||(u=!0,r(e.getContent({format:"raw"})),u=!1)}),e.on("focus",function(){e.nodeChanged(),e.getElement().click()}),e.on("BeforeSetContent",function(e){e.initial&&(e.format="raw")}),a=e}};return ko.utils.extend(g,ko.bindingHandlers.wysiwyg.standardOptions),s&&ko.utils.extend(g,ko.bindingHandlers.wysiwyg.fullOptions),global.setTimeout(function(){tinymce.init(g)}),ko.computed(function(){var n=ko.utils.unwrapObservable(t());if(!u){try{d=!0,"undefined"!=typeof a?a.setContent(n,{format:"raw"}):ko.utils.setHtml(e,n)}catch(i){console.log("TODO exception setting content to editable element",typeof a,i)}d=!1}},null,{disposeWhenNodeIsRemoved:e}),{controlsDescendantBindings:!0}}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./eventable.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/eventable.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/checkmodel.js":[function(require,module,exports){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),checkModel=function(e,o,t,n,l){var f,i,p,r=0;if("undefined"==typeof l&&(l=!1),"undefined"!=typeof o&&"function"==typeof o.splice)for(f={},i=0;i<o.length;i++)f[o[i].type]=o[i];else f=o;for(var a in e)if(e.hasOwnProperty(a))if(p="undefined"!=typeof n?n+"."+a:a,t.hasOwnProperty(a))if(typeof t[a]!=typeof e[a])null!==t[a]&&null!==e[a]&&("string"==typeof t[a]?String(e[a])!=e[a]&&(console.log("TODO Different type 1 ",p,typeof t[a],typeof e[a],t[a],e[a]),r=Math.max(r,2)):"number"==typeof t[a]?Number(e[a])!=e[a]&&(console.log("TODO Different type 2 ",p,typeof t[a],typeof e[a],t[a],e[a]),r=Math.max(r,2)):(console.log("TODO Different type 3 ",p,typeof t[a],typeof e[a],t[a],e[a]),r=Math.max(r,2)));else if("object"==typeof e[a])if(null!==e[a])if("undefined"!=typeof e[a].splice){if(e[a].length>0)if(t[a].length>0){var c=0;for(i=0;i<t[a].length;i++)if("string"==typeof t[a][i].type){for(;c<e[a].length&&e[a][c].type!==t[a][i].type;)console.log("ignoring ",p,e[a][c].type," block type in reference not found in model"),c++;if(c>=e[a].length){console.log("WARN cannot find ",p,t[a][i].type," block in reference"),r=Math.max(r,2);break}r=Math.max(r,checkModel(e[a][c],void 0,t[a][i],p+"["+i+"."+t[a][i].type+"]"))}}else for(i=0;i<e[a].length;i++)"string"!=typeof e[a][i].type?(console.log("TODO found an object with no type",p,e[a][i]),r=Math.max(r,2)):f.hasOwnProperty(e[a][i].type)?r=Math.max(r,checkModel(f[e[a][i].type],f,e[a][i],p+"["+i+"."+e[a][i].type+"]")):(console.warn("TODO the model uses a block type not defined by the template. REMOVING IT!!",p,e[a][i]),e[a].splice(i,1),i--,r=Math.max(r,2))}else null===t[a]?l?(console.log("WARN Null object in model ",p,"instead of",e[a],"deleting it"),r=Math.max(r,2),delete e[a]):(console.log("INFO Null object in model ",p,"instead of",e[a],"cloning it from the reference"),r=Math.max(r,1),t[a]=e[a]):r=Math.max(r,checkModel(e[a],f,t[a],p,l));else null!==t[a]&&(console.log("TODO Null in reference but not null in model",p,t[a]),r=Math.max(r,2));else"string"!=typeof e[a]&&"boolean"!=typeof e[a]&&"number"!=typeof e[a]&&(console.log("TODO unsupported type",p,typeof e[a]),r=Math.max(r,2));else l?(console.warn("WARN Property ",p,"found in model is not defined by template: removing it!"),r=Math.max(r,2),delete e[a]):(console.log("INFO Property ",p,"missing in model, cloning from reference!"),r=Math.max(r,1),t[a]=e[a]);return l||(r=Math.max(r,checkModel(t,o,e,"undefined"!=typeof n?n+"!R":"!R",!0))),r};module.exports=checkModel;

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/declarations.js":[function(require,module,exports){
"use strict";var converterUtils=require("./utils.js"),cssParse=require("./../../../bower_components/mensch/lib/parser.js"),console=require("./../../../bower_components/console-browserify/index.js"),domutils=require("./domutils.js"),_declarationValueLookup=function(e,t,r){for(var n=e.length-1;n>=0;n--)if("property"==e[n].type&&e[n].name==t)return _declarationValueUrlPrefixer(e[n].value,r);return null},_propToCamelCase=function(e){return e.replace(/-([a-z])/g,function(e,t,r,n){return t.toUpperCase()})},_declarationValueUrlPrefixer=function(e,t){if(e.match(/url\(.*\)/)){var r=e.replace(/(url\()([^\)]*)(\))/g,function(e,r,n,l){var i=n.trim(),o=n.trim().charAt(0);"'"==o||'"'==o?i=i.substr(1,i.length-2):o="";var a=t(i);return null!==a?r+o+a+o+l:e});return r}return e},elaborateDeclarations=function(e,t,r,n,l,i,o){var a="object"==typeof i&&null!==i?i:{},u=null,d=0;if("undefined"==typeof t){var f=cssParse("#{\n"+e+"}",{comments:!0,position:!0});t=f.stylesheet.rules[0].declarations,d=1}for(var s=t.length-1;s>=0;s--)if("property"==t[s].type)if(o===!0&&"display"==t[s].name&&"none"==t[s].value)null===u&&(u=e),u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,"");else{var v=t[s].name.match(/^-ko-(bind-|attr-)?([a-z0-9-]*?)(-if|-ifnot)?$/);if(null!==v){null===u&&"undefined"!=typeof e&&(u=e);var c,p,y,m="attr-"==v[1],h="bind-"==v[1],b=v[2],S="-if"==v[3]||"-ifnot"==v[3];if(S){c=t[s].name.substr(0,t[s].name.length-v[3].length);var g=_declarationValueLookup(t,c,r);if(null===g)throw"Unable to find declaration "+c+" for "+t[s].name}else{if((m||h)&&"undefined"==typeof l&&"undefined"!=typeof e)throw"Attributes and bind declarations are only allowed in inline styles!";var w,U=!0;if(m?(y=domutils.getAttribute(l,b),U=!1,w="virtualAttr"):h?(w=null,"text"==b?"undefined"!=typeof l?y=domutils.getInnerText(l):U=!1:"html"==b&&"undefined"!=typeof l?y=domutils.getInnerHtml(l):U=!1):(U="undefined"!=typeof e,U&&(y=_declarationValueLookup(t,b,r)),w="virtualStyle"),U&&null===y)throw console.error("Cannot find default value for",t[s].name,t),"Cannot find default value for "+t[s].name+": "+t[s].value+" in "+l+" ("+typeof e+"/"+b+")";var _=y,A=_propToCamelCase(b);try{p=converterUtils.expressionBinding(t[s].value,n,_)}catch(k){throw console.error("Model ensure path failed",k.stack,"name",t[s].name,"value",t[s].value,"default",y,"element",l),k}null!==w&&"undefined"==typeof a[w]&&(a[w]={}),"virtualAttr"==w&&"href"==A&&(w=null,A="wysiwygHref","undefined"!=typeof l&&null!==l&&domutils.removeAttribute(l,"href"));var x=_declarationValueLookup(t,t[s].name+"-if",r),C=!1;if(null===x)x=_declarationValueLookup(t,t[s].name+"-ifnot",r),C=!0;else if(null!==_declarationValueLookup(t,t[s].name+"-ifnot",r))throw"Unexpected error: cannot use both -if and -ifnot property conditions";if(null!==x)try{var V=converterUtils.conditionBinding(x,n);p=(C?"!":"")+"("+V+") ? "+p+" : null"}catch(k){throw console.error("Unable to deal with -ko style binding condition",x,t[s].name),k}null!==w?a[w][A]=p:a[A]=p}if(null!==u)try{if("undefined"!=typeof l&&null!==l)u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,"");else{var P="";S||(P=b+": <!-- ko text: "+p+" -->"+y+"<!-- /ko -->"),u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,P)}}catch(k){throw console.warn("Remove style failed",k,"name",t[s]),k}}else{var j=_declarationValueUrlPrefixer(t[s].value,r);if(j!=t[s].value&&(null===u&&"undefined"!=typeof e&&(u=e),null!==u))try{u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,t[s].name+": "+j)}catch(k){throw console.log("Remove style failed replacing url",k,"name",t[s]),k}var z=_propToCamelCase(t[s].name),L="virtualAttrStyle",q="undefined"!=typeof a.virtualStyle?a.virtualStyle[z]:void 0,T=" ";"undefined"==typeof a[L]&&(a[L]="''",T=""),"undefined"!=typeof q?(a[L]="'"+t[s].name+": '+("+q+")+';"+T+"'+"+a[L],delete a.virtualStyle[z]):a[L]="'"+t[s].name+": "+converterUtils.addSlashes(j)+";"+T+"'+"+a[L]}}if("undefined"!=typeof l&&null!==l){for(var O in a.virtualStyle)if(a.virtualStyle.hasOwnProperty(O))throw console.log("Unexpected virtualStyle binding after conversion to virtualAttr.style",O,a.virtualStyle[O],e),"Unexpected virtualStyle binding after conversion to virtualAttr.style for "+O;delete a.virtualStyle;var B=domutils.getAttribute(l,"data-bind"),D=(null!==B?B+", ":"")+_bindingSerializer(a);domutils.setAttribute(l,"data-bind",D)}if("undefined"==typeof e){var H=!1;for(var I in a.virtualStyle)if(a.virtualStyle.hasOwnProperty(I)){H=!0;break}if(H){if("undefined"!=typeof a.virtualAttrStyle){var R=a.virtualAttrStyle;delete a.virtualAttrStyle,a.virtualAttrStyle=R}}else delete a.virtualStyle;return _bindingSerializer(a)}return u},_bindingSerializer=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&("object"==typeof e[r]?t.push(r+": { "+_bindingSerializer(e[r])+" }"):t.push(r+": "+e[r]));return t.reverse().join(", ")};module.exports=elaborateDeclarations;

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/mensch/lib/parser.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/parser.js","./domutils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/domutils.js","./utils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/domutils.js":[function(require,module,exports){
(function (global){
"use strict";function _extend(e,t){if(t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),objExtend=function(e,t){return"function"==typeof $.extend?$.extend(!0,e,t):_extend(e,JSON.parse(JSON.stringify(t)))},getAttribute=function(e,t){var n=$(e).attr(t);return"undefined"==typeof n&&(n=null),n},setAttribute=function(e,t,n){$(e).attr(t,n)},removeAttribute=function(e,t){$(e).removeAttr(t)},getInnerText=function(e){return $(e).text()},getInnerHtml=function(e){return $(e).html()},getLowerTagName=function(e){return""===e.tagName&&"string"==typeof e.name?e.name.toLowerCase():""!==e.tagName?e.tagName.toLowerCase():$(e).prop("tagName").toLowerCase()},setContent=function(e,t){$(e).html(t)},replaceHtml=function(e,t){$(e).replaceWith(t)},removeElements=function(e,t){t&&"undefined"!=typeof e.detach&&e.detach(),e.remove()};module.exports={getAttribute:getAttribute,setAttribute:setAttribute,removeAttribute:removeAttribute,getInnerText:getInnerText,getInnerHtml:getInnerHtml,getLowerTagName:getLowerTagName,setContent:setContent,replaceHtml:replaceHtml,removeElements:removeElements,objExtend:objExtend};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/editor.js":[function(require,module,exports){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),elaborateDeclarations=require("./declarations.js"),utils=require("./utils.js"),modelDef=require("./model.js"),_getOptionsObject=function(e){for(var t=e.split("|"),o={},n=0;n<t.length;n++){var i=t[n].split("=");o[i[0]]=i.length>1?i[1]:i[0]}return o},_filterProps=function(e,t,o){var n=[];for(var i in e)if(!i.match(/^customStyle$/)&&!i.match(/^_/)&&e.hasOwnProperty(i)){var l=null!==e[i]&&"undefined"!=typeof e[i]._category&&"style"==e[i]._category;if("id"==i||"type"==i||i.match(/Blocks$/));else if("styler"==t)(l||o>0)&&n.push(i);else if("edit"==t){var a=null!==e[i]&&"undefined"!=typeof e[i]._category&&"content"==e[i]._category&&("undefined"==typeof e[i]._context||"block"!=e[i]._context);a&&n.push(i)}else"undefined"==typeof t&&n.push(i)}return n},_propInput=function(e,t,o,n,i){var l,a="";if(null!==e&&"undefined"!=typeof e._widget&&(l=e._widget),"undefined"==typeof l)throw"Unknown data type for "+t;var d="focusable: true";if("edit"==n&&(d+=", event: { focus: function(ui, event) { $($element).click(); } } "),a+='<label class="data-'+l+'"'+("boolean"==l?" data-bind=\"event: { mousedown: function(ui, evt) { if (evt.button == 0) { var input = $($element).find('input'); var ch = input.prop('checked'); setTimeout(function() { input.click(); input.prop('checked', !ch); input.trigger('change'); }, 0); } } }, click: function(ui, evt) { evt.preventDefault(); }, clickBubble: false\"":"")+">","undefined"!=typeof i&&"undefined"!=typeof i[l]){var s=i[l],p={};if("undefined"!=typeof s.parameters)for(var r in s.parameters)s.parameters.hasOwnProperty(r)&&"undefined"!=typeof e["_"+r]&&(p[r]=e["_"+r]);a+=s.html(o,d,p)}else if("boolean"==l)a+='<input type="checkbox" value="nothing" data-bind="checked: '+o+", "+d+'" />',a+='<span class="checkbox-replacer" ></span>';else if("color"==l)a+='<input size="7" type="text" data-bind="colorpicker: { color: '+o+", strings: $root.t('Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet.') }, , "+d+'" />';else if("select"==l){if("undefined"!=typeof e._options){var u=_getOptionsObject(e._options);a+='<select data-bind="value: '+o+", "+d+'">';for(var f in u)u.hasOwnProperty(f)&&(a+='<option value="'+f+"\" data-bind=\"text: $root.ut('template', '"+utils.addSlashes(u[f])+"')\">"+u[f]+"</option>");a+="</select>"}}else if("font"==l)a+='<select type="text" data-bind="value: '+o+", "+d+'">',a+='<optgroup label="Sans-Serif Fonts">',a+='<option value="Arial,Helvetica,sans-serif">Arial</option>',a+="<option value=\"'Comic Sans MS',cursive,sans-serif\">Comic Sans MS</option>",a+='<option value="Impact,Charcoal,sans-serif">Impact</option>',a+="<option value=\"'Trebuchet MS',Helvetica,sans-serif\">Trebuchet MS</option>",a+='<option value="Verdana,Geneva,sans-serif">Verdana</option>',a+="</optgroup>",a+='<optgroup label="Serif Fonts">',a+='<option value="Georgia,serif">Georgia</option>',a+="<option value=\"'Times New Roman',Times,serif\">Times New Roman</option>",a+="</optgroup>",a+='<optgroup label="Monospace Fonts">',a+="<option value=\"'Courier New',Courier,monospace\">Courier New</option>",a+="</optgroup>",a+="</select>";else if("url"==l)a+='<div class="ui-textbutton">',a+='<input class="ui-textbutton-input" size="7" type="url" pattern="(mailto:.+@.+|https?://.+\\..+|\\[.*\\].*)" value="nothing" data-bind="css: { withButton: typeof $root.linkDialog !== \'undefined\' }, validatedValue: '+o+", "+d+'" />',a+="<a class=\"ui-textbutton-button\" data-bind=\"visible: typeof $root.linkDialog !== 'undefined', click: typeof $root.linkDialog !== 'undefined' ? $root.linkDialog.bind($element.previousSibling) : false, button: { icons: { primary: 'fa fa-fw fa-ellipsis-h' }, label: 'Opzioni', text: false }\">Opzioni</a>",a+="</div>";else if("integer"==l){var c=0,v=1e3;null!==e&&"undefined"!=typeof e._max&&(v=e._max),null!==e&&"undefined"!=typeof e._min&&(c=e._min);var b=v-c>=100?10:1,y=5*b;a+='<input class="number-spinner" size="7" step="'+b+'" type="number" value="-1" data-bind="spinner: { min: '+c+", max: "+v+", page: "+y+", value: "+o+" }, valueUpdate: ['change', 'spin'], "+d+'" />'}else a+='<input size="7" type="text" value="nothing" data-bind="value: '+o+", "+d+'" />';return a+="</label>"},_getGlobalStyleProp=function(e,t,o,n){var i;return"object"==typeof t&&null!==t&&"undefined"==typeof t._widget||"undefined"!=typeof o&&"undefined"!=typeof n&&n.length>0&&"object"==typeof e&&"undefined"!=typeof e[n]&&(i=e[n]),i},_propEditor=function(e,t,o,n,i,l,a,d,s,p,r,u,f,c,v){if("undefined"==typeof s&&(s=0),"undefined"!=typeof a&&"object"==typeof n&&null!==n&&"undefined"==typeof n._usecount)return console.log("TODO EDITOR ignoring",l,"property because it is not used by the template","prop:",a,"type:",d,"level:",s,e._templateName),"";var b,y="undefined"!=typeof u?a+"._defaultComputed":a,h="",m=y,g=1,_=1;if("object"==typeof n&&null!==n&&"undefined"==typeof n._widget||"undefined"==typeof u&&(g+=1),"undefined"==typeof u&&"undefined"!=typeof p&&(_+=p),"undefined"!=typeof a&&f&&(h+="<!-- ko ifSubs: { data: "+m+", threshold: "+_+", gutter: "+g+" } -->"),"undefined"==typeof a||null!==n&&"undefined"!=typeof n._name||console.log("TODO WARN Missing label for property ",a),"undefined"==typeof a&&null!==n&&"undefined"==typeof n._name&&console.log("TODO WARN Missing label for object ",n.type),"object"==typeof n&&null!==n&&"undefined"==typeof n._widget){var k=_filterProps(n,d,s),S="styler"==d&&null!==n&&"undefined"!=typeof n.customStyle&&"undefined"!=typeof u,w="",$="";"undefined"!=typeof a&&"edit"==d&&(w=", click: function(obj, evt) { $root.selectItem("+a+", $data); return false }, clickBubble: false, css: { selecteditem: $root.isSelectedItem("+a+") }, scrollIntoView: $root.isSelectedItem("+a+"), ",$+=" selectable"),S&&($+=" supportsCustomStyles"),h+='<div class="objEdit level'+s+$+'" data-bind="tooltips: {}'+w+'">';var D=null!==n&&"undefined"!=typeof n._name?n._name:"undefined"!=typeof a?"["+a+"]":"";if(S){var j="Stile";"undefined"!=typeof i&&null!==i&&"undefined"!=typeof i._name?j=i._name:console.log("TODO missing label for theme section ",a,null!==n?n.type:"-"),D="<span class=\"blockSelectionMethod\" data-bind=\"text: customStyle() ? $root.ut('template', '"+utils.addSlashes(D)+"') : $root.ut('template', '"+utils.addSlashes(j)+"')\">Block</span>"}else D="<span data-bind=\"text: $root.ut('template', '"+utils.addSlashes(D)+"')\">"+D+"</span>";if(b=null!==n&&"undefined"!=typeof n._help?' title="'+utils.addSlashes(n._help)+"\" data-bind=\"attr: { title: $root.ut('template', '"+utils.addSlashes(n._help)+"') }\"":"",h+="<span"+b+' class="objLabel level'+s+'">'+D+"</span>","edit"==d&&"undefined"!=typeof n._blockDescription&&(h+="<div class=\"blockDescription\" data-bind=\"html: $root.ut('template', '"+utils.addSlashes(n._blockDescription)+"')\">"+n._blockDescription+"</div>"),S&&(h+='<label class="data-boolean blockCheck" data-bind="tooltips: { }">',h+='<input type="checkbox" value="nothing" data-bind="focusable: true, checked: customStyle" />',h+='<span title="Switch between global and block level styles editing" data-bind="attr: { title: $root.t(\'Switch between global and block level styles editing\') }" class="checkbox-replacer checkbox-replacer-onoff"></span>',h+="</label>",h+="<!-- ko template: { name: 'customstyle', if: customStyle } --><!-- /ko -->"),"undefined"!=typeof a&&(h+="<!-- ko with: "+a+" -->",1==s&&"undefined"!=typeof a&&"undefined"!=typeof n._previewBindings&&"undefined"!=typeof e)){"undefined"!=typeof c&&(h+='<!-- ko with: $root.content() --><div class="objPreview" data-bind="'+c+'"></div><!-- /ko -->'),"undefined"!=typeof v&&(h+='<!-- ko with: $parent --><div class="objPreview" data-bind="'+v+'"></div><!-- /ko -->');var x=elaborateDeclarations(void 0,n._previewBindings,o,e.bind(this,l+"."));h+='<div class="objPreview"><div class="objPreviewInner" data-bind="'+x+'"></div></div>'}var B;0===s&&"undefined"!=typeof n._previewBindings&&(B=elaborateDeclarations(void 0,n._previewBindings,o,e.bind(this,l.length>0?l+".":"")));var E,O,T,C,I=h.length;for(E=0;E<k.length;E++)O=l.length>0?l+"."+k[E]:k[E],"object"==typeof n[k[E]]&&null!==n[k[E]]&&"undefined"==typeof n[k[E]]._widget||(C=void 0,0===s&&"theme"==k[E]?h+=_propEditor(e,t,o,n[k[E]],T,O,k[E],d,0,p,void 0,void 0,f,c):(C=_getGlobalStyleProp(r,n[k[E]],k[E],O),h+=_propEditor(e,t,o,n[k[E]],T,O,k[E],d,s+1,p,r,C,f,c,B)));for(E=0;E<k.length;E++)O=l.length>0?l+"."+k[E]:k[E],"object"==typeof n[k[E]]&&null!==n[k[E]]&&"undefined"==typeof n[k[E]]._widget&&(C=void 0,0===s&&"theme"==k[E]?h+=_propEditor(e,t,o,n[k[E]],T,O,k[E],d,0,p,void 0,void 0,f,c):(C=_getGlobalStyleProp(r,n[k[E]],k[E],O),h+=_propEditor(e,t,o,n[k[E]],T,O,k[E],d,s+1,p,r,C,f,c,B)));var P=h.length-I;if(0===P){if("object"==typeof n&&null!==n&&"template"==n._context)return"";h+='<div class="objEmpty" data-bind="html: $root.t(\'Selected element has no editable properties\')">Selected element has no editable properties</div>'}"undefined"!=typeof a&&(h+="<!-- /ko -->"),h+="</div>"}else{var N=!0;if("undefined"==typeof r&&(N=!1),null===n||"object"!=typeof n||"undefined"!=typeof n._widget){var M=[];"undefined"!=typeof u&&M.push("css: { notnull: "+a+"() !== null }"),b=null!==n&&"undefined"!=typeof n._help?' title="'+utils.addSlashes(n._help)+"\" data-bind=\"attr: { title: $root.ut('template', '"+utils.addSlashes(n._help)+"') }\"":"",b.length>0&&M.push("tooltips: {}");var G=M.length>0?'data-bind="'+utils.addSlashes(M.join())+'"':"";h+='<div class="propEditor '+(N?"checkboxes":"")+'"'+G+">";var z=null!==n&&"undefined"!=typeof n._name?n._name:"undefined"!=typeof a?"["+a+"]":"";z="<span data-bind=\"text: $root.ut('template', '"+utils.addSlashes(z)+"')\">"+z+"</span>",h+="<span"+b+' class="propLabel">'+z+"</span>",h+='<div class="propInput '+("undefined"!=typeof r?"local":"")+'" data-bind="css: { default: '+a+'() === null }">',h+=_propInput(n,a,y,d,t),h+="</div>","undefined"!=typeof u&&(h+='<div class="propInput global" data-bind="css: { overridden: '+a+'() !== null }">',h+=_propInput(n,a,u,d,t),h+="</div>",N&&(h+='<div class="propCheck"><label data-bind="tooltips: {}"><input type="checkbox" data-bind="focusable: true, click: function(evt, obj) { $root.localGlobalSwitch('+a+", "+u+"); return true; }, checked: "+a+'() !== null">',h+='<span class="checkbox-replacer" data-bind="css: { checked: '+a+"() !== null }, attr: { title: $root.t('This style is specific for this block: click here to remove the custom style and revert to the theme value') }\"></span>",h+="</label></div>")),h+="</div>"}else h+=null===n||"object"!=typeof n?'<div class="propEditor unknown">[A|'+a+"|"+typeof n+"]</div>":'<div class="propEditor unknown">[B|'+a+"|"+typeof n+"]</div>"}return"undefined"!=typeof a&&f&&(h+="<!-- /ko -->",h+="<!-- ko ifSubs: { not: true, data: "+m+", threshold: "+_+", gutter: 0 } -->",h+='<span class="label notused">('+a+")</span>",h+="<!-- /ko -->"),h},createBlockEditor=function(e,t,o,n,i,l,a,d,s,p,r,u){"undefined"==typeof r&&(r=!0);var f,c=modelDef.getDef(e,l),v=modelDef.getDef(e,i);"undefined"!=typeof v._previewBindings&&"thaeme"!=l&&"styler"==a&&(f=elaborateDeclarations(void 0,v._previewBindings,n,modelDef.getBindValue.bind(void 0,e,o,i,i,"")));var b,y="undefined"!=typeof p&&p?e[l]._globalStyles:void 0,h="undefined"!=typeof p&&p?e[l]._globalStyle:void 0;if("undefined"!=typeof h){var m=modelDef.getDef(e,"theme");b=m[h.replace(/^(\$theme|_theme_)\./,"")]}var g=modelDef.getBindValue.bind(void 0,e,o,i,l);g._templateName=l;var _='<div class="editor">';_+='<div class="blockType'+("undefined"!=typeof y?" withdefaults":"")+'">'+c.type+"</div>";var k=_propEditor(g,t,n,c,b,"",void 0,a,u,s,y,h,r,f);k.length>0&&(_+=k),_+="</div>",d(_,l,a)},createBlockEditors=function(e,t,o,n,i,l,a,d){createBlockEditor(e,t,o,n,i,l,"edit",a,d),createBlockEditor(e,t,o,n,i,l,"styler",a,d,!0)},generateEditors=function(e,t,o,n,i){var l,a=e._defs,d=e.templateName,s=e._blocks,p=[];for(l=0;l<s.length;l++)"undefined"!=typeof s[l].container&&p.push(modelDef.generateModel(a,s[l].block)),createBlockEditors(a,t,void 0,o,s[l].root,s[l].block,n,i);return"undefined"!=typeof a.theme&&createBlockEditor(a,t,void 0,o,d,"theme","styler",n,void 0,!1,!1,-1),p};module.exports=generateEditors;

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./declarations.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/declarations.js","./model.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/model.js","./utils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/main.js":[function(require,module,exports){
"use strict";var modelDef=require("./model.js"),wrappedResultModel=function(e){var r=e._defs,t=e.templateName,l=modelDef.getDef(r,t),a=modelDef.generateResultModel(e),o=require("./wrapper.js"),d=o(a,l,r);return d},translateTemplate=function(){var e=require("./parser.js");return e.apply(e,arguments)},generateEditors=function(){var e=require("./editor.js");return e.apply(e,arguments)},checkModel=function(){var e=require("./checkmodel.js");return e.apply(e,arguments)};module.exports={translateTemplate:translateTemplate,wrappedResultModel:wrappedResultModel,generateResultModel:modelDef.generateResultModel,generateEditors:generateEditors,checkModel:checkModel};

},{"./checkmodel.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/checkmodel.js","./editor.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/editor.js","./model.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/model.js","./parser.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/parser.js","./wrapper.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/wrapper.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/model.js":[function(require,module,exports){
"use strict";var objExtend=require("./domutils.js").objExtend,console=require("./../../../bower_components/console-browserify/index.js"),_valueSet=function(e,t,n,o){var l=n.indexOf(".");if(-1==l)if("undefined"==typeof t[n])console.log("Undefined prop "+n+" while setting value "+o+" in model._valueSet");else if(null===t[n])"object"==typeof o&&null!==o&&"undefined"==typeof o.push&&console.log("nullpropobjectvalue",n,o),t[n]=o;else if("object"==typeof t[n]&&"function"==typeof t[n].push){var r;if("string"==typeof o){var f=o.match(/^\[(.*)\]$/);if(null===f)throw"Unexpected default value for array property "+n+": "+o;r=f[1].split(",")}else{if("object"!=typeof o||"undefined"==typeof o.push)throw"Unexpected default value for array property "+n+": "+o+" typeof "+typeof o;r=o}for(var d=[],i=0;i<r.length;i++)"@"==r[i].substr(0,1)?d.push(_generateModel(e,r[i].substr(1))):r[i].length>0&&d.push(r[i]);t[n]=d}else"string"==typeof t[n]||"boolean"==typeof t[n]?t[n]=o:"object"==typeof t[n]&&null!==t[n]&&"undefined"!=typeof t[n]._widget?("object"==typeof o&&null!==o&&console.log("objectvalue",n,t[n]._widget,o),t[n]=o):console.log("setting",typeof t[n],t[n],n,o);else{var a=n.substr(0,l);_valueSet(e,t[a],n.substr(l+1),o)}},_modelCreateOrUpdateBlockDef=function(e,t,n,o){if("undefined"!=typeof e[t]&&e[t]._initialized&&!e[t]._writeable)throw console.log("_modelCreateOrUpdateBlockDef",e,t,n,o),"Trying to alter non writeable model: "+t+" / "+n;if("undefined"==typeof e[t]&&(e[t]={_writeable:!0},"undefined"==typeof o&&(o={}),"undefined"==typeof o.category&&"undefined"==typeof e[t]._category&&(t.match(/(^t|.T)heme$/)||t.match(/(^s|.S)tyle$/)||t.match(/(^c|.C)olor$/)||t.match(/(^r|.R)adius$/)?o.category="style":o.category="content")),"undefined"!=typeof o){if("undefined"!=typeof o.name&&(e[t]._name=o.name),"undefined"!=typeof o.themeOverride&&(e[t]._themeOverride=o.themeOverride),"undefined"!=typeof o.globalStyle){e[t]._globalStyle=o.globalStyle;var l=o.globalStyle.replace(/^(\$theme|_theme_)\./,""),r=l.indexOf("."),f=-1!=r?l.substr(0,r):l;_modelCreateOrUpdateBlockDef(e,"theme",f),("undefined"==typeof e[t]._themeOverride||e[t]._themeOverride)&&_modelCreateOrUpdateBlockDef(e,t,"customStyle=false")}"undefined"!=typeof o.contextName&&(e[t]._context=o.contextName,"block"==o.contextName&&"undefined"==typeof e[t]._globalStyle&&(e[t]._globalStyle="_theme_.bodyTheme",_modelCreateOrUpdateBlockDef(e,"theme","bodyTheme"),("undefined"==typeof e[t]._themeOverride||e[t]._themeOverride)&&_modelCreateOrUpdateBlockDef(e,t,"customStyle=false"))),"undefined"!=typeof o.extend&&(e[t].type=o.extend)}for(var d in o)o.hasOwnProperty(d)&&"undefined"!=typeof o[d]&&-1==["name","extend","contextName","globalStyle","themeOverride"].indexOf(d)&&(e[t]["_"+d]=o[d]);"undefined"!=typeof n&&n.length>0&&(e[t]._props="undefined"!=typeof e[t]._props&&e[t]._props.length>0?e[t]._props+" "+n:n)},_removePrefix=function(e){var t=e.match(/^[^A-Z]+([A-Z])(.*)$/);return null!==t?t[1].toLowerCase()+t[2]:null},_generateModelFromDef=function(e,t){var n={};for(var o in e)if(!o.match(/^_.*/)&&e.hasOwnProperty(o)){var l=e[o];if("object"==typeof l&&null!==l&&"undefined"!=typeof l._complex&&l._complex)n[o]=_generateModelFromDef(l,t);else if("type"==o)n[o]=l;else{if("object"!=typeof l)throw console.error("Unexpected model def",o,l,e),"Unexpected model def ["+o+"]="+l;n[o]=null}}if("undefined"!=typeof e._defaultValues){var r=e._defaultValues;for(var f in r)r.hasOwnProperty(f)&&_valueSet(t,n,f,r[f])}return n},_generateModel=function(e,t){var n=_getModelDef(e,t,!1,!0);return _generateModelFromDef(n,e)},_getDef=function(e,t){return _getModelDef(e,t,!1,!0)},_getModelDef=function(e,t,n,o){if("undefined"==typeof e[t]){if(-1!=t.indexOf(" "))return null;var l=_removePrefix(t);return null!==l?_getModelDef(e,l,n,o):null}var r=e[t];if("object"!=typeof r)throw"Block definition must be an object: found "+r+" for "+t;if("undefined"==typeof r._initialized){if("undefined"==typeof r.type&&(-1==t.indexOf(" ")?r.type=t:r.type=t.substr(t.indexOf(" ")+1)),r.type!=t&&"undefined"==typeof r._widget){var f=_getModelDef(e,r.type,!0),d=objExtend(f,r);r=d,e[t]=r}else"undefined"==typeof r._widget&&"undefined"==typeof r._props&&"undefined"==typeof r._complex;r._writeable=!0,r._initialized=!0}if("undefined"!=typeof r._props){var i=r._props;if(i=i.split(" "),i.length>0&&"undefined"==typeof r._writeable)throw console.error("Altering a non writable object ",t,i,r),"Altering a non writable object: "+t+" def: "+i;"undefined"==typeof r._processedDefs&&(r._processedDefs={}),"undefined"==typeof r._globalStyles&&(r._globalStyles={}),"undefined"==typeof r._defaultValues&&(r._defaultValues={});for(var a=0;a<i.length;a++){var u=i[a];if(0!==u.length){var s=u,p=null,y=u.match(/^([^=\[\]]+)(\[\])?(=?)(.*)$/);if(null!==y&&(u=y[1],"[]"==y[2]&&("undefined"==typeof r[u]&&(r[u]=[]),p=[]),"="==y[3]&&(p=u.match(/(^v|V)isible$/)?"true"==String(y[4]).toLowerCase():u.match(/^customStyle$/)?"true"==String(y[4]).toLowerCase():y[4])),null!==p&&"undefined"==typeof r._defaultValues[u]&&(r._defaultValues[u]=p),"undefined"==typeof r[u]){var c=_getModelDef(e,t+" "+u,!0);null===c&&(c=_getModelDef(e,u,!0)),r[u]=c}r._processedDefs[u]=s,r._complex=!0}}delete r._props}if(n){r._writeable=!1;var _=objExtend({},r);return _}if(o)return r._writeable=!1,r;if("undefined"==typeof r._writeable||r._writeable===!1)throw"Retrieving non writeable object definition: "+t;return r},_increaseUseCount=function(e,t){if(e){if("undefined"==typeof t._usecount)throw console.error("ERROR trying to bind an unused property while readonly",t),"ERROR trying to bind an unused property"}else"undefined"==typeof t._usecount&&(t._usecount=0),t._usecount++},ensureGlobalStyle=function(e,t,n,o,l,r,f,d){var i=n(r,f,d);if("undefined"==typeof e[o]._globalStyles[l]){if(t)throw"Cannot find _globalStyle for "+l+" in "+o+"!";(-1!=l.indexOf(".")||"object"==typeof e[o][l]&&"undefined"!=typeof e[o][l]._widget)&&(e[o]._globalStyles[l]=i)}else if(e[o]._globalStyles[l]!=i)throw"Unexpected conflicting globalStyle [2] for "+o+"/"+l+": old="+e[o]._globalStyles[l]+" new="+i},modelEnsurePathAndGetBindValue=function(e,t,n,o,l,r,f,d,i,a){var u,s,p;if("$"==f.substr(0,1)){console.warn("DEPRECATED $ in bindingProvider: ",f,l);var y=f.indexOf(".");if(-1==y)throw"Unexpected fullPath: "+f+"/"+r+"/"+l+"/"+d+"/"+i;if(u=f.substr(1,y-1),p=f.substr(y+1),"theme"!=u)throw"Unexpected $ sequence: "+u+" in "+f;var c=p.indexOf(".");u=p.substr(0,c),p=p.substr(c+1),s="$root.content().theme()."+u+"()."+p.replace(new RegExp("\\.","g"),"().")}else if("#"==f.substr(0,1))console.warn("DEPRECATED # in bindingProvider: ",f,l),u=o,p=f.substr(1),s="$root.content()."+p.replace(new RegExp("\\.","g"),"().");else if("_theme_."==f.substr(0,8)){var _=f.indexOf(".",8);u=f.substr(8,_-8),p=f.substr(_+1),s="$root.content().theme()."+u+"()."+p.replace(new RegExp("\\.","g"),"().")}else"_root_."==f.substr(0,7)?(u=o,p=f.substr(7),s="$root.content()."+p.replace(new RegExp("\\.","g"),"().")):(u=l,p=r+f,s=f.replace(new RegExp("\\.","g"),"()."));if("undefined"==typeof t[u])throw"Cannot find model def for ["+u+"]";var g=p.indexOf("."),b=-1==g?p:p.substr(0,g);if(-1!=u.indexOf("-"))throw console.error("ERROR cannot use - for block names",u),"ERROR unexpected char in block name: "+u;if(-1!=b.indexOf("-"))throw console.error("ERROR cannot use - for property names",b),"ERROR unexpected char in property name: "+u;if(e)return"undefined"!=typeof t[u]._globalStyle&&"undefined"!=typeof t[u][b]&&"style"==t[u][b]._category&&(s+="._defaultComputed"),s;var h;if(e){if("undefined"!=typeof d)throw"Cannot use defaultValue in readonly mode!";if(i)throw"Cannot use overrideDefault in readonly mode for "+u+"/"+p+"/"+i+"!";if("undefined"!=typeof a)throw"Cannot set category for "+u+"/"+p+"/"+a+" in readonly mode!";h=_getModelDef(t,u,!1,!0)}else t[u]._writeable===!1&&console.log("TODO debug use cases for this condition",u,p),h=_getModelDef(t,u,t[u]._writeable===!1);if(null===h)throw"Unexpected model for ["+u+"]";if("undefined"==typeof h[b]){if(e)throw"Cannot find path "+b+" for "+u+"!";_modelCreateOrUpdateBlockDef(t,u,b),h=_getModelDef(t,u,!1)}"undefined"!=typeof t[u]._globalStyle&&"undefined"!=typeof t[u][b]&&null!==t[u][b]&&"style"==t[u][b]._category&&(s+="._defaultComputed");var m=h;try{if(_increaseUseCount(e,m),-1!=g){var w=p;do{var v=w.substr(0,g);if("undefined"==typeof m[v])throw"Found an unexpected prop "+v+" for model "+u+" for "+p;m=m[v],_increaseUseCount(e,m),w=w.substr(g+1),g=w.indexOf(".")}while(-1!=g);if("undefined"==typeof m[w]||null===m[w])throw"Found an unexpected path termination "+w+" for model "+u+" for "+p;m=m[w]}else m=m[p];if("undefined"==typeof m||null===m)throw"Unexpected null model for "+u+"/"+r+"/"+f;"undefined"!=typeof a&&(m._category=a),_increaseUseCount(e,m)}catch(x){throw console.error("TODO ERROR Property lookup exception",x,u,p,l,f,t),x}if("undefined"!=typeof t[u]._globalStyle&&"object"==typeof t[u][b]&&null!==t[u][b]&&"undefined"!=typeof t[u][b]._category&&"style"==t[u][b]._category){var O=modelEnsurePathAndGetBindValue.bind(void 0,e,t,n,o,l,""),D=-1!=p.indexOf(".")?p.substr(p.indexOf(".")):"";if(-1!=D.indexOf(".",1))throw"TODO unsupported object nesting! "+p;var S=t[u]._globalStyle+"."+b;"object"==typeof t[u][b]&&null!==t[u][b]&&"undefined"!=typeof t[u][b]._globalStyle&&(S=t[u][b]._globalStyle),ensureGlobalStyle(t,e,O,u,b,S,void 0,!1);var R=S+D;if("undefined"==typeof d&&null!==t[u]._defaultValues[p]&&(d=t[u]._defaultValues[p]),ensureGlobalStyle(t,e,O,u,p,R,d,i),"undefined"!=typeof d){if(e)throw console.error("Cannot set a new theme default value",R.substr(7),d,"while in readonly mode"),"Cannot set a new theme default value ("+d+") for "+R.substr(7)+" while in readonly mode!";n("default",R.substr(7),d)}d=null}if("undefined"!=typeof d)if("undefined"==typeof t[u]._defaultValues[p]||"undefined"!=typeof i&&i){if(e)throw"Cannot set new _defaultValues [1] for "+p+" in "+u+"!";t[u]._defaultValues[p]=d}else if(null===d){if(e&&null!==t[u]._defaultValues[p])throw"Cannot set new _defaultValues [2] for "+p+" in "+u+"!";t[u]._defaultValues[p]=null}else if(t[u]._defaultValues[p]!=d)throw console.error("TODO error!!! Trying to set a new default value for "+u+" "+p+" while it already exists (current: "+t[u]._defaultValues[p]+", new: "+d+")"),"Trying to set a new default value for "+u+" "+p+" while it already exists (current: "+t[u].defaultValues[p]+", new: "+d+")";return s},generateResultModel=function(e){var t=e._defs,n=e.templateName,o=_generateModel(t,n);return"undefined"!=typeof t.theme&&(o.theme=_generateModel(t,"theme")),o};module.exports={ensurePathAndGetBindValue:modelEnsurePathAndGetBindValue.bind(void 0,!1),getBindValue:modelEnsurePathAndGetBindValue.bind(void 0,!0),generateModel:_generateModel,generateResultModel:generateResultModel,getDef:_getDef,createOrUpdateBlockDef:_modelCreateOrUpdateBlockDef};

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./domutils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/domutils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/parser.js":[function(require,module,exports){
(function (global){
"use strict";function conditional_replace(t){return t.replace(/<!--\[if ([^\]]*)\]>([\s\S]*?)<!\[endif\]-->/g,function(t,e,o){var a="<!-- cc:start -->";a+=o.replace(/<(\/?)([A-Za-z]*)/g,"<$1cc$2").replace(/<\/([^>]*)>/g,"<!-- cc:before:$1 --></$1><!-- cc:after:$1 -->"),a+="<!-- cc:end -->";var i='<replacedcc condition="'+e+'" style="display: none">';return i+=$("<div>").append($(a)).html().replace(/<!-- cc:before:([^ ]*) --><\/\1><!-- cc:after:\1 -->/g,"</$1>").replace(/^<!-- cc:start -->/,"").replace(/<!-- cc:end -->$/,""),i+="</replacedcc>"})}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js"),converterUtils=require("./utils.js"),elaborateDeclarations=require("./declarations.js"),processStylesheetRules=require("./stylesheet.js"),modelDef=require("./model.js"),domutils=require("./domutils.js"),wrapElementWithCondition=function(t,e,o){var a=domutils.getAttribute(e,t);try{var i=converterUtils.conditionBinding(a,o);$(e).before("<!-- ko if: "+i+" -->"),$(e).after("<!-- /ko -->"),domutils.removeAttribute(e,t)}catch(r){throw console.warn("Model ensure path failed in if/variant",e,a,t),r}},replacedAttributes=function(t,e){domutils.setAttribute(t,e,domutils.getAttribute(t,"replaced"+e))},processStyle=function(t,e,o,a){var i,r=domutils.getAttribute(t,"replacedstyle"),l=null;a&&(i={uniqueId:"$data",attr:{id:"id"}});var d=null!==domutils.getAttribute(t,"data-ko-display");l=elaborateDeclarations(r,void 0,e,o,t,i,d),null===l?l=r:domutils.removeAttribute(t,"replacedstyle"),null!==l&&(l.trim().length>0?domutils.setAttribute(t,"style",l):domutils.removeAttribute(t,"style"))},_fixRelativePath=function(t,e,o,a){var i=domutils.getAttribute(a,t),r=e(i);null!==r&&domutils.setAttribute(a,t,r)},processBlock=function(t,e,o,a,i,r,l,d,s,n){try{var u;if("block"==r)u=domutils.getAttribute(t,"data-ko-block"),domutils.removeAttribute(t,"data-ko-block");else{if("template"!=r)throw"Unexpected context name while processing block: "+r;u=l}$("[data-ko-remove]",t).remove();for(var c=$("[data-ko-block]",t).replaceWith("<replacedblock>"),m=["href","src","data-ko-placeholder-src","background"],p=0;p<m.length;p++){var h=_fixRelativePath.bind(void 0,m[p],i);$("["+m[p]+"]",t).each(h)}var b=domutils.getAttribute(t,"data-ko-properties");null===b&&(b=""),$("[data-ko-properties]",t).each(function(t,e){b.length>0&&(b+=" "),b+=domutils.getAttribute(e,"data-ko-properties"),domutils.removeAttribute(e,"data-ko-properties")}),modelDef.createOrUpdateBlockDef(e,u,b,{contextName:r});var f=modelDef.ensurePathAndGetBindValue.bind(void 0,e,o,l,u,"");"block"==r&&f("id",""),$("style",t).each(function(t,a){var r=domutils.getInnerHtml(a),d=modelDef.createOrUpdateBlockDef.bind(void 0,e),s=modelDef.ensurePathAndGetBindValue.bind(void 0,e,o,l),c=processStylesheetRules(r,void 0,s,d,o,i,l,u);if(c!=r)if(""!==c.trim()){var m=n(c);domutils.setAttribute(a,"data-bind","template: { name: '"+m+"' }"),domutils.setContent(a,"")}else domutils.removeElements($(a))}),processStyle(t,i,f,s);for(var v=["data-ko-display","data-ko-editable","data-ko-wrap","href"],k=0;k<v.length;k++){var g=domutils.getAttribute(t,v[k]);if(g)throw console.warn("ERROR: Unsupported "+v[k]+" used together with data-ko-block",t),"ERROR: Unsupported "+v[k]+" used together with data-ko-block"}return $("[data-ko-link]",t).each(function(t,e){var o=domutils.getAttribute(e,"data-ko-link"),a=domutils.getAttribute(e,"replacedstyle");"undefined"!=typeof a&&null!==a||(a=""),a=""!==a?"-ko-attr-href: @"+o+"; "+a:"-ko-attr-href: @"+o,domutils.setAttribute(e,"replacedstyle",a),domutils.setAttribute(e,"data-ko-wrap",o),domutils.removeAttribute(e,"data-ko-link")}),$("[replacedstyle]",t).each(function(t,e){processStyle(e,i,f,!1)}),$("[replacedhttp-equiv]",t).each(function(t,e){replacedAttributes(e,"http-equiv")}),$("[data-ko-display]",t).each(function(t,e){wrapElementWithCondition("data-ko-display",e,f)}),$("[data-ko-editable]",t).each(function(t,e){var o,a,i,r,l,d,s=domutils.getAttribute(e,"data-ko-editable");if(s.lastIndexOf(".")>0){var u=s.substr(0,s.lastIndexOf("."));l=f(u)}else l=f(s);if(d="wysiwygClick: function(obj, evt) { $root.selectItem("+l+", $data); return false }, clickBubble: false, wysiwygCss: { selecteditem: $root.isSelectedItem("+l+") }, scrollIntoView: $root.isSelectedItem("+l+")","img"!=domutils.getLowerTagName(e)){a=domutils.getInnerHtml(e);var c=f(s,a,!0,"wysiwyg");if(o="",domutils.getAttribute(e,"id")||(o+="wysiwygId: id()+'_"+s.replace(".","_")+"', "),"undefined"!=typeof d&&(o+=d+", "),o+="wysiwygOrHtml: "+c,"td"==domutils.getLowerTagName(e)){var m=$('<div data-ko-wrap="false" style="width: 100%; height: 100%"></div>')[0];domutils.setAttribute(m,"data-bind",o);var p=domutils.getInnerHtml($("<div></div>").append(m));domutils.setContent(e,p)}else i=domutils.getAttribute(e,"data-bind"),r=(null!==i?i+", ":"")+o,domutils.setAttribute(e,"data-bind",r),domutils.setContent(e,"");domutils.removeAttribute(e,"data-ko-editable")}else{var h=domutils.getAttribute(e,"width");if(""===h&&(h=null),null===h)throw console.error("ERROR: data-ko-editable images must declare a WIDTH attribute!",e),"ERROR: data-ko-editable images must declare a WIDTH attribute!";var b=domutils.getAttribute(e,"height");""===b&&(b=null);var v=domutils.getAttribute(e,"align");i=domutils.getAttribute(e,"data-bind");var k=i&&i.match(/virtualAttr: {[^}]* height: ([^,}]*)[,}]/);k&&(b=k[1]);var g=i&&i.match(/virtualAttr: {[^}]* width: ([^,}]*)[,}]/);g&&(h=g[1]);var w;a=domutils.getAttribute(e,"data-ko-placeholder-src");var y="";a?y=domutils.getAttribute(e,"src"):a=domutils.getAttribute(e,"src");var A;h&&b?A=h+"+'x'+"+b:b?h||(A="'h'+"+b+"+''"):A="'w'+"+h+"+''";var _,D=b||domutils.getAttribute(e,"data-ko-placeholder-height"),R=h||domutils.getAttribute(e,"data-ko-placeholder-width");if(domutils.removeAttribute(e,"src"),domutils.removeAttribute(e,"data-ko-editable"),domutils.removeAttribute(e,"data-ko-placeholder-height"),domutils.removeAttribute(e,"data-ko-placeholder-width"),domutils.removeAttribute(e,"data-ko-placeholder-src"),a&&(_="{ width: "+R+", height: "+D+", text: "+A+"}"),!R||!D)throw console.error("IMG data-ko-editable must declare width and height attributes, or their placeholder counterparts data-ko-placeholder-width/data-ko-placeholder-height",e),"ERROR: IMG data-ko-editable MUST declare width and height attributes, or their placeholder counterparts data-ko-placeholder-width/data-ko-placeholder-height";var B=f(s,y,!1,"wysiwyg");o="wysiwygSrc: { width: "+h+", height: "+b+", src: "+B+", placeholder: "+_+" }",r=(null!==i?i+", ":"")+o,domutils.setAttribute(e,"data-bind",r);var I=n(e),O="{ width: "+h;"left"==v?O+=", float: 'left'":"right"==v?O+=", float: 'right'":"center"==v?console.log("non so cosa fa align=center su una img e quindi non so come simularne l'editing"):"top"==v?O+=", verticalAlign: 'top'":"middle"==v?O+=", verticalAlign: 'middle'":"bottom"==v&&(O+=", verticalAlign: 'bottom'"),O+="}",$(e).before("<!-- ko wysiwygImg: { _data: $data, _item: "+l+", _template: '"+I+"', _editTemplate: 'img-wysiwyg', _src: "+B+", _width: "+h+", _height: "+b+", _align: "+(null===v?void 0:"'"+v+"'")+", _size: "+A+", _method: "+w+", _placeholdersrc: "+_+", _stylebind: "+O+" } -->"),$(e).after("<!-- /ko -->")}}),$("[href]",t).each(function(t,e){var o=domutils.getAttribute(e,"href"),a="wysiwygHref: '"+converterUtils.addSlashes(o)+"'",i=domutils.getAttribute(e,"data-bind"),r=(null!==i?i+", ":"")+a;domutils.setAttribute(e,"data-bind",r)}),$("replacedblock",t).each(function(t,r){var s=c[t],m=processBlock(s,e,o,a,i,"block",u,d,!0,n),p=modelDef.ensurePathAndGetBindValue(e,o,l,u,"",m);$(r).before("<!-- ko block: { data: "+converterUtils.addSlashes(p)+", template: 'block' } -->"),$(r).after("<!-- /ko -->"),$(r).remove()}),$($("[data-ko-wrap]",t).get().reverse(),t).each(function(t,e){var o=domutils.getAttribute(e,"data-ko-wrap");if("undefined"==typeof o||""===o||"true"===o)throw"Unsupported empty value for data-ko-wrap: use false value if you want to always remove the tag";var a,i,r=converterUtils.conditionBinding(o,f),l=domutils.getAttribute(e,"data-bind");if(""!==l&&null!==l&&l.match(/(block|wysiwygOrHtml):/)){var d="<!-- ko "+l+" -->"+domutils.getInnerHtml(e)+"<!-- /ko -->";a=n(d),domutils.removeAttribute(e,"data-ko-wrap"),i=n(e),domutils.replaceHtml(e,"<!-- ko template: /* special */ (typeof templateMode != 'undefined' && templateMode == 'wysiwyg') || "+r+" ? '"+i+"' : '"+a+"' --><!-- /ko -->")}else a=n(domutils.getInnerHtml(e)),domutils.removeAttribute(e,"data-ko-wrap"),domutils.setContent(e,"<!-- ko template: '"+a+"' --><!-- /ko -->"),i=n(e),domutils.replaceHtml(e,"<!-- ko template: (typeof templateMode != 'undefined' && templateMode == 'wysiwyg') || "+r+" ? '"+i+"' : '"+a+"' --><!-- /ko -->")}),n(t,u,"show"),a(l,u,r,d),u}catch(w){throw console.error("Exception while parsing the template",w,t),w}},translateTemplate=function(t,e,o,a){var i={},r=conditional_replace(e.replace(/(<[^>]+\s)(style|http-equiv)(="[^"]*"[^>]*>)/gi,function(t,e,o,a){return e+"replaced"+o+a})),l=$(r),d=l[0],s=[],n=function(t,e,o,a){s.push({root:t,block:e,context:o,container:a})},u=function(t,e,o){if("undefined"==typeof i.themes&&(i.themes={}),"undefined"==typeof i.themes[t]&&(i.themes[t]={}),"undefined"==typeof i.themes[t][e]||null===i.themes[t][e])i.themes[t][e]=o;else if("undefined"!=typeof o&&null!==o){var a=i.themes[t][e];a!=o&&console.log("Error setting a new default for property "+e+" in theme "+t+". old:"+a+" new:"+o+"!")}},c=$("[data-ko-container]",l),m={};c.each(function(t,e){var o=domutils.getAttribute(e,"data-ko-container")+"Blocks";domutils.removeAttribute(e,"data-ko-container"),domutils.setAttribute(e,"data-bind","block: "+o);var a=$("> [data-ko-block]",e);domutils.removeElements(a,!0),m[o]=a}),modelDef.createOrUpdateBlockDef(i,"id"),modelDef.createOrUpdateBlockDef(i,"bodyTheme"),modelDef.createOrUpdateBlockDef(i,"blocks","blocks[]"),modelDef.createOrUpdateBlockDef(i,"text"),processBlock(d,i,u,n,o,"template",t,void 0,!1,a);var p=function(e,r,l){processBlock(l,i,u,n,o,"block",t,e,!0,a)};for(var h in m)if(m.hasOwnProperty(h)){var b=m[h],f=h;modelDef.ensurePathAndGetBindValue(i,u,t,t,"",f+".blocks","[]"),b.each(p.bind(void 0,f))}var v={_defs:i,templateName:t,_blocks:s};return"undefined"!=typeof i[t]._version&&(v.version=i[t]._version),v};module.exports=translateTemplate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./declarations.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/declarations.js","./domutils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/domutils.js","./model.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/model.js","./stylesheet.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/stylesheet.js","./utils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/stylesheet.js":[function(require,module,exports){
"use strict";var cssParse=require("./../../../bower_components/mensch/lib/parser.js"),console=require("./../../../bower_components/console-browserify/index.js"),converterUtils=require("./utils.js"),elaborateDeclarations=require("./declarations.js"),_processStyleSheetRules_processBlockDef=function(e,t){for(var o,s,r,l=0;l<t.length;l++)if("rule"==t[l].type){for(var n=t[l].selectors,a=!1,i=!1,c=0;c<n.length;c++)n[c].match(/:preview$/)?i=!0:a=!0;if(i&&a)throw console.log("cannot mix selectors type (:preview and declarations) in @supports -ko-blockdefs ",n),"Cannot mix selectors type (:preview and declarations) in @supports -ko-blockdefs";if(!i&&!a)throw console.log("cannot find known selectors in @supports -ko-blockdefs ",n),"Cannot find known selectors in @supports -ko-blockdefs";if(a){o="",s={},r=t[l].declarations;for(var p=0;p<r.length;p++)"property"==r[p].type&&("label"==r[p].name?s.name=r[p].value:"context"==r[p].name?s.contextName=r[p].value:"properties"==r[p].name?o=r[p].value:"theme"==r[p].name?s.globalStyle="_theme_."+r[p].value:"themeOverride"==r[p].name?s.themeOverride="true"==String(r[p].value).toLowerCase():s[r[p].name]=r[p].value);for(var u=0;u<n.length;u++)e(n[u],o,s)}if(i)for(var d=0;d<n.length;d++){var f=n[d].substr(0,n[d].indexOf(":")),v=t[l].declarations;e(f,void 0,{previewBindings:v})}}},processStylesheetRules=function(e,t,o,s,r,l,n,a){var i=e,c=null;if("undefined"==typeof t){var p=cssParse(e,{comments:!0,position:!0});if("stylesheet"!=p.type||"undefined"==typeof p.stylesheet)throw console.log("unable to process styleSheet",p),"Unable to parse stylesheet";t=p.stylesheet.rules}for(var u,d=t.length-1;d>=0;d--){if("supports"==t[d].type&&"-ko-blockdefs"==t[d].name)_processStyleSheetRules_processBlockDef(s,t[d].rules),i=converterUtils.removeStyle(i,t[d].position.start,c,0,0,0,"");else if("media"==t[d].type||"supports"==t[d].type)i=processStylesheetRules(i,t[d].rules,o,s,r,l,n,a);else if("comment"==t[d].type);else if("rule"==t[d].type){for(var f=t[d].selectors,v="",y=null,h=0;h<f.length;h++){v.length>0&&(v+=", ");var m=f[h].match(/\[data-ko-block=([^ ]*)\]/);if(null!==m){if(null!==y&&y!=m[1])throw"Found multiple block-match attribute selectors: cannot translate it ("+y+" vs "+m[1]+")";y=m[1]}v+="<!-- ko text: templateMode =='wysiwyg' ? '#main-wysiwyg-area ' : '' --><!-- /ko -->"+f[h]}if(y){var k="<!-- ko foreach: $root.findObjectsOfType($data, '"+y+"') -->",g="<!-- /ko -->",b=c,w=" ";t[d].declarations.length>0&&(t[d].declarations[0].position.start.line!=t[d].position.end.line&&(w="\n"+new Array(t[d].position.start.col).join(" ")),b=t[d].declarations[t[d].declarations.length-1].position.end),null===b?i+=w+g:i=b==c?converterUtils.removeStyle(i,b,c,0,0,0,w+g):converterUtils.removeStyle(i,b,c,0,0,0,w+"}"+w+g),v=k+w+v.replace(new RegExp("\\[data-ko-block="+y+"\\]","g"),"<!-- ko text: '#'+id() -->"+y+"<!-- /ko -->"),s(y,"",{contextName:"block"})}var S=y?y:a;u=o.bind(this,S,"");var x=elaborateDeclarations(i,t[d].declarations,l,u);null!==x&&(i=x),i=converterUtils.removeStyle(i,t[d].position.start,t[d].position.end,0,0,0,v)}else console.log("Unknown rule type",t[d].type,"while parsing <style> rules");c=t[d].position.start}return i};module.exports=processStylesheetRules;

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/mensch/lib/parser.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/parser.js","./declarations.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/declarations.js","./utils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js":[function(require,module,exports){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),jsep=require("./../../../bower_components/jsep/src/jsep.js");jsep.addBinaryOp("or",1),jsep.addBinaryOp("and",2),jsep.addBinaryOp("eq",6),jsep.addBinaryOp("neq",6),jsep.addBinaryOp("lt",7),jsep.addBinaryOp("lte",7),jsep.addBinaryOp("gt",7),jsep.addBinaryOp("gte",7);var addSlashes=function(e){return e.replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0")},removeStyle=function(e,r,n,t,o,a,i){for(var s=e.split("\n"),p=o,u=a,l=1+t;l<r.line;l++)p+=s[l-1-t].length+1;if(p+=r.col,null!==n){for(var d=1+t;d<n.line;d++)u+=s[d-1-t].length+1;u+=n.col}else u+=e.length+1;var c=e.substr(0,p-1)+i+e.substr(u-1);return c},expressionGenerator=function(e,r,n){function t(e){switch(e){case"or":return"||";case"and":return"&&";case"lt":return"<";case"lte":return"<=";case"gt":return">";case"gte":return">=";case"eq":return"==";case"neq":return"!=";default:return e}}function o(e,r,n,a){if("undefined"==typeof n&&(n=!0),"undefined"!=typeof a&&"Identifier"!==e.type&&"MemberExpression"!==e.type&&console.log("Cannot apply default value to variable when using expressions"),"BinaryExpression"===e.type||"LogicalExpression"===e.type)return"("+o(e.left,r,n)+" "+t(e.operator)+" "+o(e.right,r,n)+")";if("CallExpression"===e.type){var i=e.arguments.map(function(e){return o(e,r,n)});return o(e.callee,r,n)+"("+i.join(", ")+")"}if("UnaryExpression"===e.type)return e.operator+o(e.argument,r,n);if("MemberExpression"==e.type&&e.computed)throw"Unexpected computed member expression";if("MemberExpression"!=e.type||e.computed){if("Literal"===e.type)return e.raw;if("Identifier"===e.type){var s=e.name;return n?r(s,a)+"()":s}if("ConditionalExpression"===e.type)return"("+o(e.test,r,n)+" ? "+o(e.consequent,r,n)+" : "+o(e.alternate,r,n)+")";throw"Compound"===e.type?"Syntax error in expression: operator expected after "+o(e.body[0],r,!1):"Found an unsupported expression type: "+e.type}var p=o(e.object,r,!1)+"."+o(e.property,r,!1);return n&&"Math"!==e.object.name&&"Color"!==e.object.name?r(p,a)+"()":p}return o(e,r,void 0,n)},expressionBinding=function(e,r,n){var t;if("undefined"!=typeof n&&null!==n){var o=e.trim().replace(/@\[([^\]]+)\]|@([a-zA-Z0-9\._]+)\b/g,"###var###");if(o=o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),"###var###"==o)t=[null,n];else if(o="^"+o.replace(/###var###/g,"(.+)")+"$",t=n.trim().match(new RegExp(o)),!t)throw console.log("Cannot find matches",t,"for",n,e,o,e),"Cannot find default value for "+e+" in "+n}try{var a=0,i="'"+e.replace(/@\[([^\]]+)\]|@([a-zA-Z0-9\._]+)\b|(')/g,function(e,n,o,i){if(i)return"\\"+i;a++;var s,p=n||o;if(t&&("undefined"!=typeof t[a]?s=t[a].trim():console.log("ABZZZ Cannot find default value for",p,"in",t,"as",a)),n){var u=jsep(n),l=expressionGenerator(u,r,s);return"'+"+l+"+'"}return"'+"+r(p,s)+"()+'"})+"'";return i=i.replace(/(^|[^\\])''\+/g,"$1").replace(/\+''/g,""),0===a&&"false"!==i&&"true"!==i&&console.error("Unexpected expression with no valid @variable references",e),i}catch(s){throw"Exception parsing expression "+e+" "+s}},conditionBinding=function(e,r){var n=jsep(e),t=expressionGenerator(n,r);return t};module.exports={addSlashes:addSlashes,removeStyle:removeStyle,conditionBinding:conditionBinding,expressionBinding:expressionBinding};

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/jsep/src/jsep.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/jsep/src/jsep.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/wrapper.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kowrap=require("./../../../bower_components/knockout.wrap/knockout.wrap.js"),console=require("./../../../bower_components/console-browserify/index.js"),_getOptionsObject=function(e){for(var t=e.split("|"),n={},o=0;o<t.length;o++){var r=t[o].split("=");n[r[0]]=r.length>1?r[1]:r[0]}return n},_makeComputed=function(e,t,n,o,r,i){var a=ko.computed({read:function(){var n=e();if(null===n){var a=ko.utils.unwrapObservable(o);return"undefined"==typeof a||"custom"==a?ko.utils.unwrapObservable(t):i[a][r]}return n},write:function(a){var l,u=ko.utils.unwrapObservable(o);if(l="undefined"==typeof u||"custom"==u?ko.utils.peekObservable(t):i[u][r],n)e(a==l?null:a);else{var s=ko.utils.peekObservable(e);a==l&&null===s||e(a)}}});return a},_nextVariantFunction=function(e,t,n){for(var o,r=e.utils.unwrapObservable(t),i=0;i<n.length&&(o=e.utils.peekObservable(n[i]),o!=r);i++);i==n.length&&(console.warn("Didn't find a variant!",t,r,n),i=n.length-1);var a=i+1;a==n.length&&(a=0);var l=e.utils.peekObservable(n[a]);t(l)},_getVariants=function(e){var t,n=e._variant;if("object"!=typeof e[n]||"undefined"==typeof e[n]._widget||"string"!=typeof e[n]._options&&"boolean"!==e[n]._widget)throw console.error("Unexpected variant declaration",n,e[n]),"Unexpected variant declaration: cannot find property "+n+" or its _options string and it is not a boolean";return t="string"==typeof e[n]._options?Object.keys(_getOptionsObject(e[n]._options)):[!0,!1]},_makeComputedFunction=function(e,t,n,o,r,i,a){if("undefined"==typeof e){if("undefined"==typeof o.utils.unwrapObservable(a).type)throw console.log("TODO ERROR Found a non-typed def ",e,a),"Found a non-typed def "+e;var l=o.utils.unwrapObservable(o.utils.unwrapObservable(a).type);e=t[l],"object"!=typeof e&&console.log("TODO ERROR Found a non-object def ",e,"for",l)}"undefined"==typeof r&&"undefined"!=typeof i&&i&&(r=a);var u="$root.content().",s=e._globalStyles;if("undefined"!=typeof s)for(var p in s)if(s.hasOwnProperty(p)){var b,c,f,d="$root.content().theme().scheme";if(s[p].substr(0,u.length)!=u)throw"UNEXPECTED globalStyle path ("+s[p]+") outside selfPath ("+u+")";f=s[p].substr(u.length),c=r,d.substr(0,u.length)==u?b=d.substr(u.length):(console.log("IS THIS CORRECT?",d,u),b=d);for(var v=c,h=f.split("()."),_="",k=!0,g=0;g<h.length;g++)c=o.utils.unwrapObservable(c)[h[g]],k?"theme"==h[g]&&(k=!1):(_.length>0&&(_+="."),_+=h[g]);for(var m=b.split("()."),w=0;w<m.length;w++)v=o.utils.unwrapObservable(v)[m[w]];for(var O=!0,y=p.split("."),R=a,S=0;S<y.length;S++)R=o.utils.unwrapObservable(R)[y[S]];if(!o.isObservable(R))throw"Unexpected non observable target "+p+"/"+_;R._defaultComputed=_makeComputed(R,c,O,v,_,n)}if("undefined"!=typeof e._variant){for(var F=e._variant.split("."),C=a,x=o.utils.unwrapObservable(a),P=0;P<F.length;P++)C=o.utils.unwrapObservable(C)[F[P]];if("undefined"!=typeof C._defaultComputed&&(console.log("Found variant on a style property: beware variants should be only used on content properties because they don't match the theme fallback behaviour",e._variant),C=C._defaultComputed),"undefined"==typeof C)throw console.log("ERROR looking for variant target",e._variant,a),"ERROR looking for variant target "+e._variant;x._nextVariant=_nextVariantFunction.bind(C,o,C,_getVariants(e))}for(var j in e)if(e.hasOwnProperty(j)){var B=e[j];if("object"==typeof B&&null!==B&&"undefined"!=typeof B._context&&"block"==B._context){var E=r[j](),I=_makeComputedFunction(t[j],t,n,o,r,i,E);a[j](I)}else if("object"==typeof B&&null!==B&&"blocks"==B.type){for(var T,D,J,V=r[j](),A=V.blocks(),U=0;U<A.length;U++)T=o.utils.unwrapObservable(A[U]),D=o.utils.unwrapObservable(T.type),J=_makeComputedFunction(t[D],t,n,o,r,i,T),A[U](J);var W=V.blocks;_augmentBlocksObservable(W,_blockInstrumentFunction.bind(V,void 0,t,n,o,void 0,r,i)),r[j]._wrap=_makeBlocksWrap.bind(r[j],W._instrumentBlock),r[j]._unwrap=_unwrap.bind(r[j])}}return a},_augmentBlocksObservable=function(e,t){e._instrumentBlock=t,"undefined"==typeof e.origPush&&(e.origPush=e.push,e.push=_makePush.bind(e),e.origSplice=e.splice,e.splice=_makeSplice.bind(e))},_makeBlocksWrap=function(e,t){var n=ko.toJS(t),o=n.blocks;n.blocks=[];var r=kowrap.fromJS(n,void 0,!0)();_augmentBlocksObservable(r.blocks,e);for(var i=0;i<o.length;i++){var a=ko.toJS(o[i]);a.id="block_"+i,r.blocks.push(a)}this(r)},_makePush=function(){if(arguments.length>1)throw"Array push with multiple arguments not implemented";if(arguments.length>0&&ko.isObservable(arguments[0])&&("function"==typeof arguments[0]._unwrap?arguments[0]=arguments[0]._unwrap():console.log("WARN: pushing observable with no _unwrap function (TODO remove me, expected condition)")),ko.isObservable(arguments[0]))return this.origPush.apply(this,arguments);var e=this._instrumentBlock(arguments[0]);return this.origPush.apply(this,[e])},_makeSplice=function(){if(arguments.length>3)throw"Array splice with multiple objects not implemented";if(arguments.length>2&&ko.isObservable(arguments[2])&&("function"==typeof arguments[2]._unwrap?arguments[2]=arguments[2]._unwrap():console.log("WARN: splicing observable with no _unwrap function (TODO remove me, expected condition)")),arguments.length>2&&!ko.isObservable(arguments[2])){var e=this._instrumentBlock(arguments[2]);return this.origSplice.apply(this,[arguments[0],arguments[1],e])}return this.origSplice.apply(this,arguments)},_blockInstrumentFunction=function(e,t,n,o,r,i,a,l){"undefined"==typeof r&&(r=l);var u;u={"":_makeComputedFunction.bind(r,e,t,n,o,i,a)};var s=kowrap.fromJS(r,u,!0);return s._unwrap=_unwrap.bind(s),s},_wrap=function(e,t){var n=ko.utils.unwrapObservable(e(ko,t,void 0,!0));this(n)},_unwrap=function(){return ko.toJS(this)},_modelInstrument=function(e,t,n){var o=_blockInstrumentFunction.bind(void 0,t,n,n.themes),r=o(ko,e,void 0,!0);return r._wrap=_wrap.bind(r,o),r._unwrap=_unwrap.bind(r),r};module.exports=_modelInstrument;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/knockout.wrap/knockout.wrap.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout.wrap/knockout.wrap.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/ext/color.js":[function(require,module,exports){
(function (global){
function Color(t){this.getBrightness=function(n){return t(n).getBrightness()},this.isLight=function(n){return t(n).isLight()},this.isDark=function(n){return t(n).isDark()},this.getLuminance=function(n){return t(n).getLuminance()},this.lighten=function(n,i){return t(n).lighten(i).toHexString()},this.brighten=function(n,i){return t(n).brighten(i).toHexString()},this.darken=function(n,i){return t(n).darken(i).toHexString()},this.desaturate=function(n,i){return t(n).desaturate(i).toHexString()},this.saturate=function(n,i){return t(n).saturate(i).toHexString()},this.greyscale=function(n){return t(n).greyscale().toHexString()},this.spin=function(n,i){return t(n).spin(i).toHexString()},this.complement=function(n){return t(n).complement().toHexString()},this.mix=t.mix,this.readability=t.readability,this.isReadable=t.isReadable,this.mostReadable=t.mostReadable}var tinycolor=require("./../../../bower_components/tinycolor/tinycolor.js"),colorPlugin=function(t){global.Color=new Color(tinycolor)};module.exports=colorPlugin;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/tinycolor/tinycolor.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/tinycolor/tinycolor.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/ext/localstorage.js":[function(require,module,exports){
(function (global){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),lsLoader=function(e,t){var o=global.localStorage.getItem("metadata-"+e);if(null!==o){var l,a=global.localStorage.getItem("template-"+e);null!==a&&(l=JSON.parse(a));var n=JSON.parse(o);return{metadata:n,model:l,extension:lsCommandPluginFactory(n,t)}}throw"Cannot find stored data for "+e},lsCommandPluginFactory=function(e,t){var o=function(e,o,l){var a={name:"Save",enabled:ko.observable(!0)};a.execute=function(){a.enabled(!1);var e=t?t:"/dl/",o="templateTitle",n=global.document.getElementById(o),r=n.value;console.log("save template "+r+" "+e);var s=$.post(e,{action:"save",html:l.exportHTML(),title:r},null,"html");s.fail(function(){console.log("fail",arguments),l.notifier.error(l.t("Unexpected error talking to server: contact us!"))}),s.success(function(){console.log("success",arguments),l.notifier.success(l.t("Template saved..."))}),s.always(function(){a.enabled(!0)})};var n={name:"Test",enabled:ko.observable(!0)},r={name:"Download",enabled:ko.observable(!0)};n.execute=function(){n.enabled(!1);var a=global.localStorage.getItem("testemail");if(null!==a&&"null"!=a||(a=l.t("Insert here the recipient email address")),a=global.prompt(l.t("Test email address"),a),a.match(/@/)){global.localStorage.setItem("testemail",a),console.log("TODO testing...",a);var r=t?t:"/dl/",s=$.post(r,{action:"email",rcpt:a,subject:"[test] "+e+" - "+o,html:l.exportHTML()},null,"html");s.fail(function(){console.log("fail",arguments),l.notifier.error(l.t("Unexpected error talking to server: contact us!"))}),s.success(function(){console.log("success",arguments),l.notifier.success(l.t("Test email sent..."))}),s.always(function(){n.enabled(!0)})}else global.alert(l.t("Invalid email address")),n.enabled(!0)},r.execute=function(){r.enabled(!1),l.notifier.info(l.t("Downloading...")),l.exportHTMLtoTextarea("#downloadHtmlTextarea");var e=t?t:"/dl/";global.document.getElementById("downloadForm").setAttribute("action",e),global.document.getElementById("downloadForm").submit(),r.enabled(!0)},l.save=a,l.test=n,l.download=r}.bind(void 0,e.key,e.name);return o};module.exports=lsLoader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/ko-bindings.js":[function(require,module,exports){
"use strict";require("./../../bower_components/knockout-sortable/build/knockout-sortable.min.js"),require("./bindings/jqueryui-spinner.js"),require("./bindings/jqueryui-tabs.js"),require("./bindings/colorpicker.js"),require("./bindings/blocks.js"),require("./bindings/csstext.js"),require("./bindings/bind-iframe.js"),require("./bindings/droppable.js"),require("./bindings/fileupload.js"),require("./bindings/virtuals.js"),require("./bindings/wysiwygs.js"),require("./bindings/scrollfix.js"),require("./bindings/if-subs.js"),require("./bindings/extsortables.js"),require("./bindings/eventable.js"),require("./bindings/tooltips.js"),require("./bindings/extender-pagination.js"),require("./bindings/validated-value.js"),require("./bindings/scrollintoview.js");

},{"./../../bower_components/knockout-sortable/build/knockout-sortable.min.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-sortable/build/knockout-sortable.min.js","./bindings/bind-iframe.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/bind-iframe.js","./bindings/blocks.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/blocks.js","./bindings/colorpicker.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/colorpicker.js","./bindings/csstext.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/csstext.js","./bindings/droppable.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/droppable.js","./bindings/eventable.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/eventable.js","./bindings/extender-pagination.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/extender-pagination.js","./bindings/extsortables.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/extsortables.js","./bindings/fileupload.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/fileupload.js","./bindings/if-subs.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/if-subs.js","./bindings/jqueryui-spinner.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/jqueryui-spinner.js","./bindings/jqueryui-tabs.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/jqueryui-tabs.js","./bindings/scrollfix.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/scrollfix.js","./bindings/scrollintoview.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/scrollintoview.js","./bindings/tooltips.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/tooltips.js","./bindings/validated-value.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/validated-value.js","./bindings/virtuals.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/virtuals.js","./bindings/wysiwygs.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/wysiwygs.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/template-loader.js":[function(require,module,exports){
(function (global){
"use strict";function _viewModelPluginInstance(e){var t;return{viewModel:function(n){t=e(n)},init:function(){"undefined"!=typeof t&&"undefined"!=typeof t.init&&t.init()},dispose:function(){"undefined"!=typeof t&&"undefined"!=typeof t.dispose&&t.dispose()}}}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),templateConverter=require("./converter/main.js"),console=require("./../../bower_components/console-browserify/index.js"),initializeViewmodel=require("./viewmodel.js"),templateSystem=require("./bindings/choose-template.js"),pluginsCall=function(e,t,n,o){var a,i,r,l,d;d=[],"undefined"!=typeof o&&o?(a=e.length-1,i=0,r=-1):(a=0,i=e.length-1,r=1);for(var s=a;s!=i+r;s+=r)"undefined"!=typeof e[s][t]&&(l=e[s][t].apply(e[s],n),"undefined"!=typeof l&&d.push(l));return d},origDisposeCallback=ko.utils.domNodeDisposal.addDisposeCallback;ko.utils.domNodeDisposal.addDisposeCallback=function(e,t){var n=function(e){try{t(e)}catch(n){console.log("cought dispose callback exception",n)}};origDisposeCallback(e,n)};var bindingPluginMaker=function(e){return{viewModel:function(t){try{e("applyBindings",ko.applyBindings.bind(void 0,t))}catch(n){throw console.log(n,n.stack),n}},dispose:function(){try{e("unapplyBindings",ko.cleanNode.bind(this,global.document.body))}catch(t){throw console.log(t,t.stack),t}}}},templateCreator=function(e,t,n,o){var a=n;for("undefined"!=typeof n&&"undefined"!=typeof o&&("object"==typeof t&&"replacedhtml"==t.tagName.toLowerCase()||(a+="-"+o));"undefined"==typeof a||null===a||e.exists(a);)a="anonymous-"+Math.floor(1e5*Math.random()+1);if("object"==typeof t&&"replacedhtml"==t.tagName.toLowerCase()){var i=$(t),r=$("replacedhead",i),l=$("replacedbody",i);e.adder(a+"-head",r.html()||""),e.adder(a+"-show",l.html()||""),e.adder(a+"-preview",i.html()),e.adder(a+"-wysiwyg",i.html()),r.children().detach(),r.html("<!-- ko block: content --><!-- /ko -->"),r.before("<!-- ko withProperties: { templateMode: 'head' } -->"),r.after("<!-- /ko -->"),l.html("<!-- ko block: content --><!-- /ko -->"),e.adder(a+"-iframe",i[0].outerHTML)}else"object"==typeof t?e.adder(a,t.outerHTML):e.adder(a,t);return a},_templateUrlConverter=function(e,t){return t.match(/^[^\/]*:/)||t.match(/^\//)||t.match(/^\[/)||t.match(/^#?$/)?null:e+t},templateLoader=function(e,t,n,o,a,i){var r="string"==typeof t?t:n.template,l="./",d=r.lastIndexOf("/");-1!=d&&(l=r.substr(0,d+1));var s,u=_templateUrlConverter.bind(void 0,l);s="undefined"==typeof n?{template:r,name:"No name",created:Date.now()}:n,$.get(r,function(t){var n=templateCompiler(e,u,"template",t,o,s,a,i);n.init()})},templateCompiler=function(e,t,n,o,a,i,r,l){var d=o.match(/^([\S\s]*)([<]html[^>]*>[\S\s]*<\/html>)([\S\s]*)$/i);if(null===d)throw"Unable to find <html> opening and closing tags in the template";var s=d[1],u={"<html":0,"<head":0,"<body":0,"</html":0,"</body":0,"</head":0},c=d[2].replace(/(<\/?)(html|head|body)([^>]*>)/gi,function(e,t,n,o){return u[(t+n).toLowerCase()]+=1,t+"replaced"+n+o});for(var p in u)if(u.hasOwnProperty(p)&&1!=u[p]){if(0===u[p])throw"ERROR: missing mandatory element "+p+">";if(u[p]>1)throw"ERROR: multiple element "+p+"> occourences are not supported (found "+u[p]+" occourences)"}var f=d[3],m=[],g="+$root.contentListeners()",b=[];if("undefined"!=typeof r)for(var h=0;h<r.length;h++)"function"==typeof r[h]?b.push(_viewModelPluginInstance(r[h])):b.push(r[h]);var v=[],y={adder:function(e,t){if("string"!=typeof t)throw"Template system: cannot create new template "+e;var n=t.match(/(data)?-ko-[^ =:]*/g);n&&console.error("ERROR: found unexpected -ko- attribute in compiled template",e,", you probably mispelled it:",n),templateSystem.addTemplate(e,t),v.push(e)},exists:function(e){var t=templateSystem.getTemplateContent(e);return"undefined"!=typeof t},dispose:function(){for(var e=v.length-1;e>=0;e--)templateSystem.removeTemplate(v[e])}};ko.bindingHandlers.block.templateExists=y.exists;for(var k=templateCreator.bind(void 0,y),w=e("translateTemplate",templateConverter.translateTemplate.bind(void 0,n,c,t,k)),C=e("generateModel",templateConverter.wrappedResultModel.bind(void 0,w)),S={},M=pluginsCall(b,"widget",[$,ko,kojqui]),L=0;L<M.length;L++)S[M[L].widget]=M[L];m.push.apply(m,e("generateEditors",templateConverter.generateEditors.bind(void 0,w,S,t,k,g)));var E=!1;if("undefined"!=typeof a&&null!==a){var x;x="string"==typeof a?ko.utils.parseJson(a):a;var R=e("checkModel",templateConverter.checkModel.bind(void 0,C._unwrap(),m,x));2==R&&(console.error("Trying to compile an incompatible template version!",C._unwrap(),m,x),E=!0);try{C._wrap(x)}catch(q){console.error("Unable to inject model content!",q),E=!0}}var T=s+templateSystem.getTemplateContent(n+"-iframe").replace(/(<\/?)replaced(html|head|body)([^>]*>)/gi,function(e,t,n,o){return t+n+o})+f,D=ko.bindingHandlers.bindIframe.tpl;ko.bindingHandlers.bindIframe.tpl=T;var j={dispose:function(){ko.bindingHandlers.bindIframe.tpl=D}};b.push(j),b.push(y);var F=e("initializeViewmodel",initializeViewmodel.bind(this,C,m,t,l));F.metadata=i;var H="0.13.0";return"undefined"!=typeof F.metadata.editorversion&&F.metadata.editorversion!==H&&console.warn("The model being loaded has been created with an older editor version",F.metadata.editorversion,"vs",H),F.metadata.editorversion=H,"undefined"!=typeof w.version&&("undefined"!=typeof F.metadata.templateversion&&F.metadata.templateversion!==w.version&&console.error("The model being loaded has been created with a different template version",w.version,"vs",F.metadata.templateversion),F.metadata.templateversion=w.version),templateSystem.init(),b.push(bindingPluginMaker(e)),pluginsCall(b,"viewModel",[F]),E&&$("#incompatible-template").dialog({modal:!0,appendTo:"#mo-body",buttons:{Ok:function(){$(this).dialog("close")}}}),{model:F,init:function(){pluginsCall(b,"init",void 0,!0)},dispose:function(){pluginsCall(b,"dispose",void 0,!0)}}},checkFeature=function(e,t){if(!t())throw console.warn("Missing feature",e),"Missing feature "+e},isCompatible=function(){try{return checkFeature("matchMedia",function(){return"undefined"!=typeof global.matchMedia}),checkFeature("XMLHttpRequest 2",function(){return"XMLHttpRequest"in global&&"withCredentials"in new global.XMLHttpRequest}),checkFeature("ES5 strict",function(){return function(){return"undefined"==typeof this}()}),checkFeature("CSS borderRadius",function(){return"undefined"!=typeof global.document.body.style.borderRadius}),checkFeature("CSS boxShadow",function(){return"undefined"!=typeof global.document.body.style.boxShadow}),checkFeature("CSS boxSizing",function(){return"undefined"!=typeof global.document.body.style.boxSizing}),checkFeature("CSS backgroundSize",function(){return"undefined"!=typeof global.document.body.style.backgroundSize}),checkFeature("CSS backgroundOrigin",function(){return"undefined"!=typeof global.document.body.style.backgroundOrigin}),!0}catch(e){return!1}},fixPageEvents=function(){global.addEventListener&&(global.addEventListener("drag",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("dragstart",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("dragover",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("drop",function(e){e=e||global.event,e.preventDefault()},!1),global.document.body.addEventListener("drop",function(e){e.preventDefault()},!1)),global.document.ondragstart&&(global.document.ondragstart=function(){return!1})};module.exports={compile:templateCompiler,load:templateLoader,isCompatible:isCompatible,fixPageEvents:fixPageEvents};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./bindings/choose-template.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/choose-template.js","./converter/main.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/main.js","./viewmodel.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/viewmodel.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/timed-call.js":[function(require,module,exports){
"use strict";var console=require("./../../bower_components/console-browserify/index.js"),_call=function(e){return e()},logs=[],_timedCall=function(e,o){var l,t=(new Date).getTime();"object"==typeof console&&console.time&&console.time(e),l=_call(o),"object"==typeof console&&console.time&&console.timeEnd(e);var n=(new Date).getTime()-t;return"object"!=typeof console||console.time||console.log(e,"took",n,"ms"),logs.push({name:e,time:n}),logs.length>100&&logs.unshift(),l};module.exports={timedCall:_timedCall,logs:logs};

},{"./../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/undomanager/undomain.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),undoManager=require("./../../../bower_components/knockout-undomanager/knockout-undomanager.js"),undoserializer=require("./undoserializer.js"),addUndoStackExtensionMaker=function(e){return function(n){n.contentListeners(n.contentListeners()+2);var o=undoManager(n.content,{levels:100,undoLabel:ko.computed(function(){return n.t("Undo (#COUNT#)")}),redoLabel:ko.computed(function(){return n.t("Redo")})});return n.undo=o.undoCommand,n.undo.execute=e.bind(n,"undo",n.undo.execute),n.redo=o.redoCommand,n.redo.execute=e.bind(n,"redo",n.redo.execute),n.undoReset=e.bind(n,"undoReset",o.reset),n.setUndoModeMerge=o.setModeMerge,n.setUndoModeOnce=o.setModeOnce,o.setModeIgnore(),o.setUndoActionMaker(undoserializer.makeUndoAction.bind(void 0,n.content)),undoserializer.watchEnabled(!0),{pause:function(){o.setModeIgnore()},run:function(){o.setModeOnce()},init:function(){o.setModeOnce()},dispose:function(){n.contentListeners(n.contentListeners()-2),undoserializer.watchEnabled(!1),o.dispose()}}}};module.exports=addUndoStackExtensionMaker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/knockout-undomanager/knockout-undomanager.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-undomanager/knockout-undomanager.js","./undoserializer.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/undomanager/undoserializer.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/undomanager/undoserializer.js":[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js"),_reference=function(e,n){for(var t,r,o=0,a=e;o<n.length;)switch(n.charAt(o)){case"(":")"==n.charAt(o+1)&&(a=a()),o+=2;break;case"[":r=n.indexOf("]",o),a=a[n.substring(o+1,r)],o=r+1;break;case".":t=n.indexOf("(",o),-1==t&&(t=n.length),r=n.indexOf("[",o),-1==r&&(r=n.length),r=Math.min(t,r),a=a[n.substring(o+1,r)],o=r}return a},_getPath=function(e,n){for(var t,r="",o=0;o<=e.length;o++)if(t=o<e.length?e[o]:n,ko.isObservable(t)&&(r+="()"),"undefined"!=typeof t._fieldName)r+="."+t._fieldName;else{if(!(o>0&&"function"==typeof e[o-1].pop))throw console.error("Unexpected parent with no _fieldName and no parent array",o,e),"Unexpected parent with no _fieldName and no parent array";var a=ko.isObservable(e[o-1])?ko.utils.peekObservable(e[o-1]):e[o-1],i=ko.utils.arrayIndexOf(a,t);if(-1==i)throw console.error("Unexpected object not found in parent array",a,t,o,e.length,ko.toJS(a),ko.utils.unwrapObservable(t)),"Unexpected object not found in parent array";r+="["+i+"]"}return r},makeDereferencedUndoAction=function(e,n,t,r,o){var a=_reference(n,t);e(a,r,o)},listener,_setListener=function(e){listener=e},makeUndoActionDereferenced=function(e,n,t,r,o,a){try{var i=_getPath(t,r);if("object"!=typeof o&&"function"!=typeof o||(o=ko.toJS(o)),"undefined"!=typeof a&&("object"==typeof a.value||"function"==typeof a.value)){var c=ko.toJS(a);a=c}if("undefined"!=typeof listener)try{listener(i,r,o,a)}catch(f){console.log("Undoserializer ignoring exception in listener callback")}return makeDereferencedUndoAction.bind(void 0,n,e,i,o,a)}catch(f){console.error("Exception processing undo",f,t,r,a)}},watchEnabled,_watchEnabled=function(e){return"undefined"==typeof e?watchEnabled:void(watchEnabled=e)};module.exports={dereference:_getPath,reference:_reference,makeUndoAction:makeUndoActionDereferenced,setListener:_setListener,watchEnabled:_watchEnabled};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/viewmodel.js":[function(require,module,exports){
(function (global){
"use strict";function initializeEditor(e,o,t,r){function l(e){return e.replace(/<replacedcc[^>]* condition="([^"]*)"[^>]*>([\s\S]*?)<\/replacedcc>/g,function(e,o,t){var r="<!--[if "+o+"]>";return r+=t.replace(/<!-- cc:before:([^ ]*) --><!-- cc:after:\1 -->/g,"</$1>").replace(/^.*<!-- cc:start -->/,"").replace(/<!-- cc:end -->.*$/,"").replace(/<(\/?)cc([A-Za-z]*)/g,"<$1$2"),r+="<![endif]-->"})}var n={galleryRecent:ko.observableArray([]).extend({paging:16}),galleryRemote:ko.observableArray([]).extend({paging:16}),selectedBlock:ko.observable(null),selectedItem:ko.observable(null),selectedTool:ko.observable(0),selectedImageTab:ko.observable(0),dragging:ko.observable(!1),draggingImage:ko.observable(!1),galleryLoaded:ko.observable(!1),showPreviewFrame:ko.observable(!1),previewMode:ko.observable("mobile"),showToolbox:ko.observable(!0),showTheme:ko.observable(!1),showGallery:ko.observable(!1),debug:ko.observable(!1),contentListeners:ko.observable(0),logoPath:"dist/img/mosaico32.png",logoUrl:".",logoAlt:"mosaico"};return n.content=e,n.blockDefs=o,n.notifier=toastr,n.tt=function(e,o){if("undefined"!=typeof o)for(var t in o)o.hasOwnProperty(t)&&(e=e.replace(new RegExp("__"+t+"__","g"),o[t]));return e},n.t=n.tt,n.ut=function(e,o){return o},n.templatePath=t,n.remoteUrlProcessor=function(e){return e},n.remoteFileProcessor=function(e){return"undefined"!=typeof e.url&&(e.url=n.remoteUrlProcessor(e.url)),"undefined"!=typeof e.thumbnailUrl&&(e.thumbnailUrl=n.remoteUrlProcessor(e.thumbnailUrl)),e},n.loadGallery=function(){n.galleryLoaded("loading");var e=r?r:"/upload/";$.getJSON(e,function(e){for(var o=0;o<e.files.length;o++)e.files[o]=n.remoteFileProcessor(e.files[o]);n.galleryLoaded(e.files.length),n.galleryRemote(e.files.reverse())}).fail(function(){n.galleryLoaded(!1),n.notifier.error(n.t("Unexpected error listing files"))})},n.fileToImage=function(e,o,t){return e.url},n.removeBlock=function(e,o){ko.utils.unwrapObservable(n.selectedBlock)==ko.utils.unwrapObservable(e)&&n.selectBlock(null,!0);var t=o.blocks.remove(e);return n.notifier.info(n.t("Block removed: use undo button to restore it...")),t},n.duplicateBlock=function(e,o){var t=ko.utils.unwrapObservable(e),r=ko.toJS(ko.utils.unwrapObservable(o.blocks)[t]);"undefined"!=typeof r.id&&(r.id=""),o.blocks.splice(t+1,0,r)},n.moveBlock=function(e,o,t){var r=ko.utils.unwrapObservable(e),l=ko.utils.unwrapObservable(o.blocks);if(t&&r>0||!t&&r<l.length-1){var a=r+(t?-1:1),i=l[a];n.startMultiple(),o.blocks.splice(a,1),o.blocks.splice(r,0,i),n.stopMultiple()}},n.loadDefaultBlocks=function(){var e=ko.toJS(n.content().mainBlocks);e.blocks=[];for(var o=ko.utils.unwrapObservable(n.blockDefs),t=0;t<o.length;t++){var r=ko.toJS(o[t]);r.id="block_"+t,e.blocks.push(r)}performanceAwareCaller("setMainBlocks",n.content().mainBlocks._wrap.bind(n.content().mainBlocks,e))},n.addImage=function(e){var o=$("#main-wysiwyg-area .selectable-img.selecteditem");return 1==o.length&&"object"==typeof e&&"undefined"!=typeof e.url?(ko.contextFor(o[0])._src(e.url),!0):!1},n.addBlock=function(e,o){var t,r=n.selectedBlock();if(null!==r)for(var l=n.content().mainBlocks().blocks().length-1;l>=0;l--)if(n.content().mainBlocks().blocks()[l]()==r){t=l;break}var a;"undefined"!=typeof t?(a=t+1,n.content().mainBlocks().blocks.splice(a,0,e),n.notifier.info(n.t("New block added after the selected one (__pos__)",{pos:a}))):(n.content().mainBlocks().blocks.push(e),a=n.content().mainBlocks().blocks().length-1,n.notifier.info(n.t("New block added at the model bottom (__pos__)",{pos:a})));var i=n.content().mainBlocks().blocks()[a]();return n.selectBlock(i,!0),!1},n.findObjectsOfType=function(e,o){var t=[],r=ko.utils.unwrapObservable(e);for(var l in r)if(r.hasOwnProperty(l)){var n=ko.utils.unwrapObservable(r[l]);if(l.match(/Blocks$/))for(var a=ko.utils.unwrapObservable(n.blocks),i=0;i<a.length;i++){var s=ko.utils.unwrapObservable(a[i]);null!==o&&ko.utils.unwrapObservable(s.type)!=o||t.push(s)}else"object"==typeof n&&null!==n&&(null!==o&&ko.utils.unwrapObservable(n.type)!=o||t.push(n))}return t},n.placeholderHelper={element:function(e){return $(e[0].outerHTML).removeClass("ui-draggable").addClass("sortable-placeholder").css("display","block").css("position","relative").css("width","100%").css("height","auto").css("opacity",".8")[0]},update:function(e,o){}},n.startMultiple=function(){"undefined"!=typeof n.setUndoModeMerge&&n.setUndoModeMerge()},n.stopMultiple=function(){"undefined"!=typeof n.setUndoModeOnce&&n.setUndoModeOnce()},n.localGlobalSwitch=function(e,o){var t=e();return e(null===t?o():null),!1},n.selectItem=function(e,o,t){var r=ko.utils.peekObservable(e);return"undefined"!=typeof t&&n.selectBlock(t,!1,!0),r!=o&&(e(o),null!==o&&0===n.selectedTool()&&n.selectedTool(1)),!1}.bind(n,n.selectedItem),n.isSelectedItem=function(e){return n.selectedItem()==e},n.selectBlock=function(e,o,t,r){var l=ko.utils.peekObservable(e);r||n.selectItem(null),l!=o&&(e(o),n.showGallery(!1),null===o||t||0!==n.selectedTool()||n.selectedTool(1))}.bind(n,n.selectedBlock),n.countSubscriptions=function(e,o){var t=0;for(var r in e)if(e.hasOwnProperty(r)){var l=e[r];if(ko.isObservable(l)&&("undefined"!=typeof l._defaultComputed&&("undefined"!=typeof o&&console.log(o+"/"+r+"/_",l._defaultComputed.getSubscriptionsCount()),t+=l._defaultComputed.getSubscriptionsCount()),"undefined"!=typeof o&&console.log(o+"/"+r+"/-",l.getSubscriptionsCount()),t+=l.getSubscriptionsCount(),l=ko.utils.unwrapObservable(l)),"object"==typeof l&&null!==l){var a=n.countSubscriptions(l,"undefined"!=typeof o?o+"/"+r+"@":void 0);"undefined"!=typeof o&&console.log(o+"/"+r+"@",a),t+=a}}return t},n.loopSubscriptionsCount=function(){var e=n.countSubscriptions(n.content());global.document.getElementById("subscriptionsCount").innerHTML=e,global.setTimeout(n.loopSubscriptionsCount,1e3)},n["export"]=function(){var e=performanceAwareCaller("exportHTML",n.exportHTML);return e},n.exportHTML=function(){var e="exportframe";$("body").append('<iframe id="'+e+'" data-bind="bindIframe: $data"></iframe>');var o=global.document.getElementById(e);ko.applyBindings(n,o);var t=o.contentWindow.document.doctype,r="<!DOCTYPE "+t.name+(t.publicId?' PUBLIC "'+t.publicId+'"':"")+(!t.publicId&&t.systemId?" SYSTEM":"")+(t.systemId?' "'+t.systemId+'"':"")+">",a=r+"\n"+o.contentWindow.document.documentElement.outerHTML;ko.cleanNode(o),ko.removeNode(o),a=a.replace(/<script ([^>]* )?type="text\/html"[^>]*>[\s\S]*?<\/script>/gm,""),a=a.replace(/<!-- ko ((?!--).)*? -->/g,""),a=a.replace(/<!-- \/ko -->/g,""),a=a.replace(/ data-bind="[^"]*"/gm,""),a=a.replace(/ data-mce-(href|src)="[^"]*"/gm,""),a=a.replace(/ style="[^"]*"([^>]*) replaced(style="[^"]*")/gm,"$1 $2"),a=a.replace(/ replaced(style="[^"]*")([^>]*) style="[^"]*"/gm," $1$2"),a=a.replace(/ replaced(style="[^"]*")/gm," $1"),a=a.replace(/ http-equiv="[^"]*"([^>]*) replaced(http-equiv="[^"]*")/gm,"$1 $2"),a=a.replace(/ replaced(http-equiv="[^"]*")([^>]*) http-equiv="[^"]*"/gm," $1$2"),a=a.replace(/ replaced(http-equiv="[^"]*")/gm," $1"),a=l(a);var i=a.match(/ data-[^ =]+(="[^"]+")? /)||a.match(/ replaced([^= ]*=)/);return i&&console.warn("Output HTML contains unexpected data- attributes or replaced attributes",i),a},n.exportHTMLtoTextarea=function(e){$(e).val(n.exportHTML())},n.exportJSONtoTextarea=function(e){$(e).val(n.exportJSON())},n.importJSONfromTextarea=function(e){n.importJSON($(e).val())},n.exportMetadata=function(){var e=ko.toJSON(n.metadata);return e},n.exportJSON=function(){var e=ko.toJSON(n.content);return e},n.exportJS=function(){return ko.toJS(n.content)},n.importJSON=function(e){var o=ko.utils.parseJson(e);n.content._wrap(o)},n.exportTheme=function(){var e={},o=n.content().theme(),t=function(e,o,r){for(var l in r)if(r.hasOwnProperty(l)){var n=ko.utils.unwrapObservable(r[l]);null!==n&&"object"==typeof n?t(l+".",o,n):o[e+l]=n}};t("",e,o);var r="";for(var l in e)e.hasOwnProperty(l)&&"type"!=l&&(r+=l+": "+e[l]+";\n");return r},n.loadImage=function(e){n.galleryRecent.unshift(e),n.selectedImageTab(0)},n.dialog=function(e,o){$(e).dialog(o)},n.log=function(e,o){},n.selectedImageTab.subscribe(function(e){1==e&&n.galleryLoaded()===!1&&n.loadGallery()},n,"change"),n}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../bower_components/console-browserify/index.js"),performanceAwareCaller=require("./timed-call.js").timedCall,toastr=require("./../../bower_components/toastr/toastr.js");toastr.options={closeButton:!1,debug:!1,positionClass:"toast-bottom-full-width",target:"#mo-body",onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},module.exports=initializeEditor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../bower_components/toastr/toastr.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/toastr/toastr.js","./timed-call.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/timed-call.js"}]},{},["/var/www/s/app/webroot/js/lib/mosaico/src/js/app.js","/var/www/s/app/webroot/js/lib/mosaico/build/templates.js"])("/var/www/s/app/webroot/js/lib/mosaico/src/js/app.js")
});