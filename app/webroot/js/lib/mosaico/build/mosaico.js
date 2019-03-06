(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Mosaico = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js":[function(require,module,exports){
(function (global){
/*global window, global*/
var util = require("util")
var assert = require("assert")

var slice = Array.prototype.slice
var console
var times = {}

if (typeof global !== "undefined" && global.console) {
    console = global.console
} else if (typeof window !== "undefined" && window.console) {
    console = window.console
} else {
    console = {}
}

var functions = [
    [log, "log"]
    , [info, "info"]
    , [warn, "warn"]
    , [error, "error"]
    , [time, "time"]
    , [timeEnd, "timeEnd"]
    , [trace, "trace"]
    , [dir, "dir"]
    , [assert, "assert"]
]

for (var i = 0; i < functions.length; i++) {
    var tuple = functions[i]
    var f = tuple[0]
    var name = tuple[1]

    if (!console[name]) {
        console[name] = f
    }
}

module.exports = console

function log() {}

function info() {
    console.log.apply(console, arguments)
}

function warn() {
    console.log.apply(console, arguments)
}

function error() {
    console.warn.apply(console, arguments)
}

function time(label) {
    times[label] = Date.now()
}

function timeEnd(label) {
    var time = times[label]
    if (!time) {
        throw new Error("No such label: " + label)
    }

    var duration = Date.now() - time
    console.log(label + ": " + duration + "ms")
}

function trace() {
    var err = new Error()
    err.name = "Trace"
    err.message = util.format.apply(null, arguments)
    console.error(err.stack)
}

function dir(object) {
    console.log(util.inspect(object) + "\n")
}

function assert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1)
        assert.ok(false, util.format.apply(null, arr))
    }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"assert":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/assert/assert.js","util":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/util/util.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/evol-colorpicker/js/evol.colorpicker.min.js":[function(require,module,exports){
/*
   evol.colorpicker 3.2.2
   (c) 2015 Olivier Giulieri
   http://evoluteur.github.io/colorpicker/
*/
!function(a,b){var c=0,d=window.navigator.userAgent,e=d.indexOf("MSIE ")>0,f=e?"-ie":"",g=e?!1:/mozilla/.test(d.toLowerCase())&&!/webkit/.test(d.toLowerCase()),h=[],i=["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646"],j=["f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada","d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5","bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","92cddc","fac08f","a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","31859b","e36c09","7f7f7f","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","205867","974806"],k=["c00000","ff0000","ffc000","ffff00","92d050","00b050","00b0f0","0070c0","002060","7030a0"],l=[["003366","336699","3366cc","003399","000099","0000cc","000066"],["006666","006699","0099cc","0066cc","0033cc","0000ff","3333ff","333399"],["669999","009999","33cccc","00ccff","0099ff","0066ff","3366ff","3333cc","666699"],["339966","00cc99","00ffcc","00ffff","33ccff","3399ff","6699ff","6666ff","6600ff","6600cc"],["339933","00cc66","00ff99","66ffcc","66ffff","66ccff","99ccff","9999ff","9966ff","9933ff","9900ff"],["006600","00cc00","00ff00","66ff99","99ffcc","ccffff","ccccff","cc99ff","cc66ff","cc33ff","cc00ff","9900cc"],["003300","009933","33cc33","66ff66","99ff99","ccffcc","ffffff","ffccff","ff99ff","ff66ff","ff00ff","cc00cc","660066"],["333300","009900","66ff33","99ff66","ccff99","ffffcc","ffcccc","ff99cc","ff66cc","ff33cc","cc0099","993399"],["336600","669900","99ff33","ccff66","ffff99","ffcc99","ff9999","ff6699","ff3399","cc3399","990099"],["666633","99cc00","ccff33","ffff66","ffcc66","ff9966","ff6666","ff0066","d60094","993366"],["a58800","cccc00","ffff00","ffcc00","ff9933","ff6600","ff0033","cc0066","660033"],["996633","cc9900","ff9900","cc6600","ff3300","ff0000","cc0000","990033"],["663300","996600","cc3300","993300","990000","800000","993333"]],m="#0000ffff",n=function(a){var b=a.toString(16);return 1==b.length&&(b="0"+b),b},o=function(a){return n(Number(a))},p=function(a){var b=n(a);return b+b+b},q=function(a){if(a.length>10){var b=1+a.indexOf("("),c=a.indexOf(")"),d=a.substring(b,c).split(",");return["#",o(d[0]),o(d[1]),o(d[2])].join("")}return a};a.widget("evol.colorpicker",{version:"3.2.1",options:{color:null,showOn:"both",hideButton:!1,displayIndicator:!0,transparentColor:!1,history:!0,defaultPalette:"theme",strings:"Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet."},_active:!1,_create:function(){var b=this;switch(this._paletteIdx="theme"==this.options.defaultPalette?1:2,this._id="evo-cp"+c++,this._enabled=!0,this.options.showOn=this.options.hideButton?"focus":this.options.showOn,this.element.get(0).tagName){case"INPUT":var d=this.options.color,h=this.element,i=("focus"===this.options.showOn?"":"evo-pointer ")+"evo-colorind"+(g?"-ff":f)+(this.options.hideButton?" evo-hidden-button":""),j="";if(this._isPopup=!0,this._palette=null,null!==d)h.val(d);else{var k=h.val();""!==k&&(d=this.options.color=k)}d===m?i+=" evo-transparent":j=null!==d?"background-color:"+d:"",h.addClass("colorPicker "+this._id).wrap('<div style="width:'+(this.options.hideButton?this.element.width():this.element.width()+32)+"px;"+(e?"margin-bottom:-21px;":"")+(g?"padding:1px 0;":"")+'"></div>').after('<div class="'+i+'" style="'+j+'"></div>').on("keyup onpaste",function(c){var d=a(this).val();d!=b.options.color&&b._setValue(d,!0)});var l=this.options.showOn;("both"===l||"focus"===l)&&h.on("focus",function(){b.showPalette()}),("both"===l||"button"===l)&&h.next().on("click",function(a){return a.stopPropagation(),b.showPalette(),!1});break;default:this._isPopup=!1,this._palette=this.element.html(this._paletteHTML()).attr("aria-haspopup","true"),this._bindColors()}if(this.options.history&&(d&&this._add2History(d),this.options.initialHistory)){var n=this.options.initialHistory;for(var o in n)this._add2History(n[o])}},_paletteHTML:function(){var a=this._paletteIdx=Math.abs(this._paletteIdx),b=this.options,c=b.strings.split(","),d='<div class="evo-pop'+f+' ui-widget ui-widget-content ui-corner-all"'+(this._isPopup?' style="position:absolute"':"")+"><span>"+this["_paletteHTML"+a]()+'</span><div class="evo-more"><a href="javascript:void(0)">'+c[1+a]+"</a>";return b.history&&(d+='<a href="javascript:void(0)" class="evo-hist">'+c[5]+"</a>"),d+="</div>",b.displayIndicator&&(d+=this._colorIndHTML(this.options.color)+this._colorIndHTML("")),d+="</div>"},_colorIndHTML:function(a){var b=e?"evo-colorbox-ie ":"",c="";return a?a===m?b+="evo-transparent":c="background-color:"+a:c="display:none",'<div class="evo-color" style="float:left"><div style="'+c+'" class="'+b+'"></div><span>'+(a?a:"")+"</span></div>"},_paletteHTML1:function(){for(var a=this.options,b=a.strings.split(","),c='<td style="background-color:#',d=e?'"><div style="width:2px;"></div></td>':'"><span/></td>',g='<tr><th colspan="10" class="ui-widget-content">',h='<table class="evo-palette'+f+'">'+g+b[0]+"</th></tr><tr>",l=0;10>l;l++)h+=c+i[l]+d;for(h+="</tr>",e||(h+='<tr><th colspan="10"></th></tr>'),h+='<tr class="top">',l=0;10>l;l++)h+=c+j[l]+d;for(var m=1;4>m;m++)for(h+='</tr><tr class="in">',l=0;10>l;l++)h+=c+j[10*m+l]+d;for(h+='</tr><tr class="bottom">',l=40;50>l;l++)h+=c+j[l]+d;for(h+="</tr>"+g,a.transparentColor&&(h+='<div class="evo-transparent evo-tr-box"></div>'),h+=b[1]+"</th></tr><tr>",l=0;10>l;l++)h+=c+k[l]+d;return h+="</tr></table>"},_paletteHTML2:function(){for(var a,b,c='<td style="background-color:#',d=e?'"><div style="width:5px;"></div></td>':'"><span/></td>',g='<table class="evo-palette2'+f+'"><tr>',h="</tr></table>",i='<div class="evo-palcenter">',j=0,k=l.length;k>j;j++){i+=g;var m=l[j];for(a=0,b=m.length;b>a;a++)i+=c+m[a]+d;i+=h}i+='<div class="evo-sep"/>';var n="";for(i+=g,a=255;a>10;a-=10)i+=c+p(a)+d,a-=10,n+=c+p(a)+d;return i+=h+g+n+h+"</div>"},_switchPalette:function(b){if(this._enabled){var c,d,e,f=this.options.strings.split(",");if(a(b).hasClass("evo-hist")){var g=['<table class="evo-palette"><tr><th class="ui-widget-content">',f[5],"</th></tr></tr></table>",'<div class="evo-cHist">'];if(0===h.length)g.push("<p>&nbsp;",f[6],"</p>");else for(var i=h.length-1;i>-1;i--)9===h[i].length?g.push('<div class="evo-transparent"></div>'):g.push('<div style="background-color:',h[i],'"></div>');g.push("</div>"),c=-this._paletteIdx,d=g.join(""),e=f[4]}else this._paletteIdx<0?(c=-this._paletteIdx,this._palette.find(".evo-hist").show()):c=2==this._paletteIdx?1:2,d=this["_paletteHTML"+c](),e=f[c+1],this._paletteIdx=c;this._paletteIdx=c;var j=this._palette.find(".evo-more").prev().html(d).end().children().eq(0).html(e);0>c&&j.next().hide()}},_downOrUpPositioning:function(){for(var a=this.element,b=0;null!==a&&100>b;){if("visible"!=a.css("overflow")){var c=this._palette.offset().top+this._palette.height(),d=a.offset().top+a.height(),e=this._palette.offset().top-this._palette.height()-this.element.outerHeight(),f=a.offset().top,g=c>d&&e>f;g?this._palette.css({bottom:this.element.outerHeight()+"px"}):this._palette.css({bottom:"auto"});break}if("HTML"==a[0].tagName)break;a=a.offsetParent(),b++}},showPalette:function(){if(this._enabled&&(this._active=!0,a(".colorPicker").not("."+this._id).colorpicker("hidePalette"),null===this._palette)){this._palette=this.element.next().after(this._paletteHTML()).next().on("click",function(a){return a.stopPropagation(),!1}),this._bindColors();var b=this;this._isPopup&&(this._downOrUpPositioning(),a(document.body).on("click."+b._id,function(a){a.target!=b.element.get(0)&&b.hidePalette()}).on("keyup."+b._id,function(a){27===a.keyCode&&b.hidePalette()}))}return this},hidePalette:function(){if(this._isPopup&&this._palette){a(document.body).off("click."+this._id);var b=this;this._palette.off("mouseover click","td,.evo-transparent").fadeOut(function(){b._palette.remove(),b._palette=b._cTxt=null}).find(".evo-more a").off("click")}return this},_bindColors:function(){var b=this,c=this.options,d=this._palette.find("div.evo-color"),e=c.history?"td,.evo-cHist>div":"td";c.transparentColor&&(e+=",.evo-transparent"),this._cTxt1=d.eq(0).children().eq(0),this._cTxt2=d.eq(1).children().eq(0),this._palette.on("click",e,function(c){if(b._enabled){var d=a(this);b._setValue(d.hasClass("evo-transparent")?m:q(d.attr("style").substring(17))),b._active=!1}}).on("mouseover",e,function(c){if(b._enabled){var d=a(this),e=d.hasClass("evo-transparent")?m:q(d.attr("style").substring(17));b.options.displayIndicator&&b._setColorInd(e,2),b._active&&b.element.trigger("mouseover.color",e)}}).find(".evo-more a").on("click",function(){b._switchPalette(this)})},val:function(a){return"undefined"==typeof a?this.options.color:(this._setValue(a),this)},_setValue:function(a,b){a=a.replace(/ /g,""),this.options.color=a,this._isPopup?(b||this.hidePalette(),this._setBoxColor(this.element.val(a).next(),a)):this._setColorInd(a,1),this.options.history&&this._paletteIdx>0&&this._add2History(a),this.element.trigger("change.color",a)},_setColorInd:function(a,b){var c=this["_cTxt"+b];this._setBoxColor(c,a),c.next().html(a)},_setBoxColor:function(a,b){b===m?a.addClass("evo-transparent").removeAttr("style"):a.removeClass("evo-transparent").attr("style","background-color:"+b)},_setOption:function(a,b){"color"==a?this._setValue(b,!0):this.options[a]=b},_add2History:function(a){for(var b=h.length,c=0;b>c;c++)if(a==h[c])return;b>27&&h.shift(),h.push(a)},clear:function(){this.hidePalette().val("")},enable:function(){var a=this.element;return this._isPopup?a.removeAttr("disabled"):a.css({opacity:"1","pointer-events":"auto"}),"focus"!==this.options.showOn&&this.element.next().addClass("evo-pointer"),a.removeAttr("aria-disabled"),this._enabled=!0,this},disable:function(){var a=this.element;return this._isPopup?a.attr("disabled","disabled"):(this.hidePalette(),a.css({opacity:"0.3","pointer-events":"none"})),"focus"!==this.options.showOn&&this.element.next().removeClass("evo-pointer"),a.attr("aria-disabled","true"),this._enabled=!1,this},isDisabled:function(){return!this._enabled},destroy:function(){a(document.body).off("click."+this._id),this._palette&&(this._palette.off("mouseover click","td,.evo-cHist>div,.evo-transparent").find(".evo-more a").off("click"),this._isPopup&&this._palette.remove(),this._palette=this._cTxt=null),this._isPopup&&this.element.next().off("click").remove().end().off("focus").unwrap(),this.element.removeClass("colorPicker "+this.id).empty(),a.Widget.prototype.destroy.call(this)}})}(jQuery);
},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/jsep/src/jsep.js":[function(require,module,exports){
//     JavaScript Expression Parser (JSEP) <%= version %>
//     JSEP may be freely distributed under the MIT License
//     http://jsep.from.so/

/*global module: true, exports: true, console: true */
(function (root) {
	'use strict';
	// Node Types
	// ----------
	
	// This is the full set of types that any JSEP node can be.
	// Store them here to save space when minified
	var COMPOUND = 'Compound',
		IDENTIFIER = 'Identifier',
		MEMBER_EXP = 'MemberExpression',
		LITERAL = 'Literal',
		THIS_EXP = 'ThisExpression',
		CALL_EXP = 'CallExpression',
		UNARY_EXP = 'UnaryExpression',
		BINARY_EXP = 'BinaryExpression',
		LOGICAL_EXP = 'LogicalExpression',
		CONDITIONAL_EXP = 'ConditionalExpression',
		ARRAY_EXP = 'ArrayExpression',

		PERIOD_CODE = 46, // '.'
		COMMA_CODE  = 44, // ','
		SQUOTE_CODE = 39, // single quote
		DQUOTE_CODE = 34, // double quotes
		OPAREN_CODE = 40, // (
		CPAREN_CODE = 41, // )
		OBRACK_CODE = 91, // [
		CBRACK_CODE = 93, // ]
		QUMARK_CODE = 63, // ?
		SEMCOL_CODE = 59, // ;
		COLON_CODE  = 58, // :

		throwError = function(message, index) {
			var error = new Error(message + ' at character ' + index);
			error.index = index;
			error.description = message;
			throw error;
		},

	// Operations
	// ----------
	
	// Set `t` to `true` to save space (when minified, not gzipped)
		t = true,
	// Use a quickly-accessible map to store all of the unary operators
	// Values are set to `true` (it really doesn't matter)
		unary_ops = {'-': t, '!': t, '~': t, '+': t},
	// Also use a map for the binary operations but set their values to their
	// binary precedence for quick reference:
	// see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
		binary_ops = {
			'||': 1, '&&': 2, '|': 3,  '^': 4,  '&': 5,
			'==': 6, '!=': 6, '===': 6, '!==': 6,
			'<': 7,  '>': 7,  '<=': 7,  '>=': 7, 
			'<<':8,  '>>': 8, '>>>': 8,
			'+': 9, '-': 9,
			'*': 10, '/': 10, '%': 10
		},
	// Get return the longest key length of any object
		getMaxKeyLen = function(obj) {
			var max_len = 0, len;
			for(var key in obj) {
				if((len = key.length) > max_len && obj.hasOwnProperty(key)) {
					max_len = len;
				}
			}
			return max_len;
		},
		max_unop_len = getMaxKeyLen(unary_ops),
		max_binop_len = getMaxKeyLen(binary_ops),
	// Literals
	// ----------
	// Store the values to return for the various literals we may encounter
		literals = {
			'true': true,
			'false': false,
			'null': null
		},
	// Except for `this`, which is special. This could be changed to something like `'self'` as well
		this_str = 'this',
	// Returns the precedence of a binary operator or `0` if it isn't a binary operator
		binaryPrecedence = function(op_val) {
			return binary_ops[op_val] || 0;
		},
	// Utility function (gets called from multiple places)
	// Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
		createBinaryExpression = function (operator, left, right) {
			var type = (operator === '||' || operator === '&&') ? LOGICAL_EXP : BINARY_EXP;
			return {
				type: type,
				operator: operator,
				left: left,
				right: right
			};
		},
		// `ch` is a character code in the next three functions
		isDecimalDigit = function(ch) {
			return (ch >= 48 && ch <= 57); // 0...9
		},
		isIdentifierStart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122); // a...z
		},
		isIdentifierPart = function(ch) {
			return (ch === 36) || (ch === 95) || // `$` and `_`
					(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
					(ch >= 48 && ch <= 57); // 0...9
		},

		// Parsing
		// -------
		// `expr` is a string with the passed in expression
		jsep = function(expr) {
			// `index` stores the character number we are currently at while `length` is a constant
			// All of the gobbles below will modify `index` as we move along
			var index = 0,
				charAtFunc = expr.charAt,
				charCodeAtFunc = expr.charCodeAt,
				exprI = function(i) { return charAtFunc.call(expr, i); },
				exprICode = function(i) { return charCodeAtFunc.call(expr, i); },
				length = expr.length,

				// Push `index` up to the next non-space character
				gobbleSpaces = function() {
					var ch = exprICode(index);
					// space or tab
					while(ch === 32 || ch === 9) {
						ch = exprICode(++index);
					}
				},
				
				// The main parsing function. Much of this code is dedicated to ternary expressions
				gobbleExpression = function() {
					var test = gobbleBinaryExpression(),
						consequent, alternate;
					gobbleSpaces();
					if(exprICode(index) === QUMARK_CODE) {
						// Ternary expression: test ? consequent : alternate
						index++;
						consequent = gobbleExpression();
						if(!consequent) {
							throwError('Expected expression', index);
						}
						gobbleSpaces();
						if(exprICode(index) === COLON_CODE) {
							index++;
							alternate = gobbleExpression();
							if(!alternate) {
								throwError('Expected expression', index);
							}
							return {
								type: CONDITIONAL_EXP,
								test: test,
								consequent: consequent,
								alternate: alternate
							};
						} else {
							throwError('Expected :', index);
						}
					} else {
						return test;
					}
				},

				// Search for the operation portion of the string (e.g. `+`, `===`)
				// Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
				// and move down from 3 to 2 to 1 character until a matching binary operation is found
				// then, return that binary operation
				gobbleBinaryOp = function() {
					gobbleSpaces();
					var biop, to_check = expr.substr(index, max_binop_len), tc_len = to_check.length;
					while(tc_len > 0) {
						if(binary_ops.hasOwnProperty(to_check)) {
							index += tc_len;
							return to_check;
						}
						to_check = to_check.substr(0, --tc_len);
					}
					return false;
				},

				// This function is responsible for gobbling an individual expression,
				// e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
				gobbleBinaryExpression = function() {
					var ch_i, node, biop, prec, stack, biop_info, left, right, i;

					// First, try to get the leftmost thing
					// Then, check to see if there's a binary operator operating on that leftmost thing
					left = gobbleToken();
					biop = gobbleBinaryOp();

					// If there wasn't a binary operator, just return the leftmost node
					if(!biop) {
						return left;
					}

					// Otherwise, we need to start a stack to properly place the binary operations in their
					// precedence structure
					biop_info = { value: biop, prec: binaryPrecedence(biop)};

					right = gobbleToken();
					if(!right) {
						throwError("Expected expression after " + biop, index);
					}
					stack = [left, biop_info, right];

					// Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
					while((biop = gobbleBinaryOp())) {
						prec = binaryPrecedence(biop);

						if(prec === 0) {
							break;
						}
						biop_info = { value: biop, prec: prec };

						// Reduce: make a binary expression from the three topmost entries.
						while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
							right = stack.pop();
							biop = stack.pop().value;
							left = stack.pop();
							node = createBinaryExpression(biop, left, right);
							stack.push(node);
						}

						node = gobbleToken();
						if(!node) {
							throwError("Expected expression after " + biop, index);
						}
						stack.push(biop_info, node);
					}

					i = stack.length - 1;
					node = stack[i];
					while(i > 1) {
						node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node); 
						i -= 2;
					}
					return node;
				},

				// An individual part of a binary expression:
				// e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
				gobbleToken = function() {
					var ch, to_check, tc_len;
					
					gobbleSpaces();
					ch = exprICode(index);

					if(isDecimalDigit(ch) || ch === PERIOD_CODE) {
						// Char code 46 is a dot `.` which can start off a numeric literal
						return gobbleNumericLiteral();
					} else if(ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
						// Single or double quotes
						return gobbleStringLiteral();
					} else if(isIdentifierStart(ch) || ch === OPAREN_CODE) { // open parenthesis
						// `foo`, `bar.baz`
						return gobbleVariable();
					} else if (ch === OBRACK_CODE) {
						return gobbleArray();
					} else {
						to_check = expr.substr(index, max_unop_len);
						tc_len = to_check.length;
						while(tc_len > 0) {
							if(unary_ops.hasOwnProperty(to_check)) {
								index += tc_len;
								return {
									type: UNARY_EXP,
									operator: to_check,
									argument: gobbleToken(),
									prefix: true
								};
							}
							to_check = to_check.substr(0, --tc_len);
						}
						
						return false;
					}
				},
				// Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
				// keep track of everything in the numeric literal and then calling `parseFloat` on that string
				gobbleNumericLiteral = function() {
					var number = '', ch, chCode;
					while(isDecimalDigit(exprICode(index))) {
						number += exprI(index++);
					}

					if(exprICode(index) === PERIOD_CODE) { // can start with a decimal marker
						number += exprI(index++);

						while(isDecimalDigit(exprICode(index))) {
							number += exprI(index++);
						}
					}
					
					ch = exprI(index);
					if(ch === 'e' || ch === 'E') { // exponent marker
						number += exprI(index++);
						ch = exprI(index);
						if(ch === '+' || ch === '-') { // exponent sign
							number += exprI(index++);
						}
						while(isDecimalDigit(exprICode(index))) { //exponent itself
							number += exprI(index++);
						}
						if(!isDecimalDigit(exprICode(index-1)) ) {
							throwError('Expected exponent (' + number + exprI(index) + ')', index);
						}
					}
					

					chCode = exprICode(index);
					// Check to make sure this isn't a variable name that start with a number (123abc)
					if(isIdentifierStart(chCode)) {
						throwError('Variable names cannot start with a number (' +
									number + exprI(index) + ')', index);
					} else if(chCode === PERIOD_CODE) {
						throwError('Unexpected period', index);
					}

					return {
						type: LITERAL,
						value: parseFloat(number),
						raw: number
					};
				},

				// Parses a string literal, staring with single or double quotes with basic support for escape codes
				// e.g. `"hello world"`, `'this is\nJSEP'`
				gobbleStringLiteral = function() {
					var str = '', quote = exprI(index++), closed = false, ch;

					while(index < length) {
						ch = exprI(index++);
						if(ch === quote) {
							closed = true;
							break;
						} else if(ch === '\\') {
							// Check for all of the common escape codes
							ch = exprI(index++);
							switch(ch) {
								case 'n': str += '\n'; break;
								case 'r': str += '\r'; break;
								case 't': str += '\t'; break;
								case 'b': str += '\b'; break;
								case 'f': str += '\f'; break;
								case 'v': str += '\x0B'; break;
							}
						} else {
							str += ch;
						}
					}

					if(!closed) {
						throwError('Unclosed quote after "'+str+'"', index);
					}

					return {
						type: LITERAL,
						value: str,
						raw: quote + str + quote
					};
				},
				
				// Gobbles only identifiers
				// e.g.: `foo`, `_value`, `$x1`
				// Also, this function checks if that identifier is a literal:
				// (e.g. `true`, `false`, `null`) or `this`
				gobbleIdentifier = function() {
					var ch = exprICode(index), start = index, identifier;

					if(isIdentifierStart(ch)) {
						index++;
					} else {
						throwError('Unexpected ' + exprI(index), index);
					}

					while(index < length) {
						ch = exprICode(index);
						if(isIdentifierPart(ch)) {
							index++;
						} else {
							break;
						}
					}
					identifier = expr.slice(start, index);

					if(literals.hasOwnProperty(identifier)) {
						return {
							type: LITERAL,
							value: literals[identifier],
							raw: identifier
						};
					} else if(identifier === this_str) {
						return { type: THIS_EXP };
					} else {
						return {
							type: IDENTIFIER,
							name: identifier
						};
					}
				},

				// Gobbles a list of arguments within the context of a function call
				// or array literal. This function also assumes that the opening character
				// `(` or `[` has already been gobbled, and gobbles expressions and commas
				// until the terminator character `)` or `]` is encountered.
				// e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
				gobbleArguments = function(termination) {
					var ch_i, args = [], node;
					while(index < length) {
						gobbleSpaces();
						ch_i = exprICode(index);
						if(ch_i === termination) { // done parsing
							index++;
							break;
						} else if (ch_i === COMMA_CODE) { // between expressions
							index++;
						} else {
							node = gobbleExpression();
							if(!node || node.type === COMPOUND) {
								throwError('Expected comma', index);
							}
							args.push(node);
						}
					}
					return args;
				},

				// Gobble a non-literal variable name. This variable name may include properties
				// e.g. `foo`, `bar.baz`, `foo['bar'].baz`
				// It also gobbles function calls:
				// e.g. `Math.acos(obj.angle)`
				gobbleVariable = function() {
					var ch_i, node;
					ch_i = exprICode(index);
						
					if(ch_i === OPAREN_CODE) {
						node = gobbleGroup();
					} else {
						node = gobbleIdentifier();
					}
					gobbleSpaces();
					ch_i = exprICode(index);
					while(ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
						index++;
						if(ch_i === PERIOD_CODE) {
							gobbleSpaces();
							node = {
								type: MEMBER_EXP,
								computed: false,
								object: node,
								property: gobbleIdentifier()
							};
						} else if(ch_i === OBRACK_CODE) {
							node = {
								type: MEMBER_EXP,
								computed: true,
								object: node,
								property: gobbleExpression()
							};
							gobbleSpaces();
							ch_i = exprICode(index);
							if(ch_i !== CBRACK_CODE) {
								throwError('Unclosed [', index);
							}
							index++;
						} else if(ch_i === OPAREN_CODE) {
							// A function call is being made; gobble all the arguments
							node = {
								type: CALL_EXP,
								'arguments': gobbleArguments(CPAREN_CODE),
								callee: node
							};
						}
						gobbleSpaces();
						ch_i = exprICode(index);
					}
					return node;
				},

				// Responsible for parsing a group of things within parentheses `()`
				// This function assumes that it needs to gobble the opening parenthesis
				// and then tries to gobble everything within that parenthesis, assuming
				// that the next thing it should see is the close parenthesis. If not,
				// then the expression probably doesn't have a `)`
				gobbleGroup = function() {
					index++;
					var node = gobbleExpression();
					gobbleSpaces();
					if(exprICode(index) === CPAREN_CODE) {
						index++;
						return node;
					} else {
						throwError('Unclosed (', index);
					}
				},

				// Responsible for parsing Array literals `[1, 2, 3]`
				// This function assumes that it needs to gobble the opening bracket
				// and then tries to gobble the expressions as arguments.
				gobbleArray = function() {
					index++;
					return {
						type: ARRAY_EXP,
						elements: gobbleArguments(CBRACK_CODE)
					};
				},

				nodes = [], ch_i, node;
				
			while(index < length) {
				ch_i = exprICode(index);

				// Expressions can be separated by semicolons, commas, or just inferred without any
				// separators
				if(ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
					index++; // ignore separators
				} else {
					// Try to gobble each expression individually
					if((node = gobbleExpression())) {
						nodes.push(node);
					// If we weren't able to find a binary expression and are out of room, then
					// the expression passed in probably has too much
					} else if(index < length) {
						throwError('Unexpected "' + exprI(index) + '"', index);
					}
				}
			}

			// If there's only one expression just try returning the expression
			if(nodes.length === 1) {
				return nodes[0];
			} else {
				return {
					type: COMPOUND,
					body: nodes
				};
			}
		};

	// To be filled in by the template
	jsep.version = '<%= version %>';
	jsep.toString = function() { return 'JavaScript Expression Parser (JSEP) v' + jsep.version; };

	/**
	 * @method jsep.addUnaryOp
	 * @param {string} op_name The name of the unary op to add
	 * @return jsep
	 */
	jsep.addUnaryOp = function(op_name) {
		unary_ops[op_name] = t; return this;
	};

	/**
	 * @method jsep.addBinaryOp
	 * @param {string} op_name The name of the binary op to add
	 * @param {number} precedence The precedence of the binary op (can be a float)
	 * @return jsep
	 */
	jsep.addBinaryOp = function(op_name, precedence) {
		max_binop_len = Math.max(op_name.length, max_binop_len);
		binary_ops[op_name] = precedence;
		return this;
	};

	/**
	 * @method jsep.removeUnaryOp
	 * @param {string} op_name The name of the unary op to remove
	 * @return jsep
	 */
	jsep.removeUnaryOp = function(op_name) {
		delete unary_ops[op_name];
		if(op_name.length === max_unop_len) {
			max_unop_len = getMaxKeyLen(unary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeBinaryOp
	 * @param {string} op_name The name of the binary op to remove
	 * @return jsep
	 */
	jsep.removeBinaryOp = function(op_name) {
		delete binary_ops[op_name];
		if(op_name.length === max_binop_len) {
			max_binop_len = getMaxKeyLen(binary_ops);
		}
		return this;
	};

	// In desktop environments, have a way to restore the old value for `jsep`
	if (typeof exports === 'undefined') {
		var old_jsep = root.jsep;
		// The star of the show! It's a function!
		root.jsep = jsep;
		// And a courteous function willing to move out of the way for other similarly-named objects!
		jsep.noConflict = function() {
			if(root.jsep === jsep) {
				root.jsep = old_jsep;
			}
			return jsep;
		};
	} else {
		// In Node.JS environments
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = jsep;
		} else {
			exports.parse = jsep;
		}
	}
}(this));

},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-sortable/build/knockout-sortable.min.js":[function(require,module,exports){
(function (global){
// knockout-sortable 0.11.0 | (c) 2015 Ryan Niemeyer |  http://www.opensource.org/licenses/mit-license
!function(a){if("function"==typeof define&&define.amd)define(["knockout","jquery","jquery-ui/sortable","jquery-ui/draggable"],a);else if("function"==typeof require&&"object"==typeof exports&&"object"==typeof module){var b=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),c=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),a(b,c)}else a(window.ko,window.jQuery)}(function(a,b){var c="ko_sortItem",d="ko_sourceIndex",e="ko_sortList",f="ko_parentList",g="ko_dragItem",h=a.utils.unwrapObservable,i=a.utils.domData.get,j=a.utils.domData.set,k=b.ui&&b.ui.version,l=k&&k.indexOf("1.6.")&&k.indexOf("1.7.")&&(k.indexOf("1.8.")||"1.8.24"===k),m=function(b,d){a.utils.arrayForEach(b,function(a){1===a.nodeType&&(j(a,c,d),j(a,f,i(a.parentNode,e)))})},n=function(b,c){var d,e={},f=h(b())||{};return f.data?(e[c]=f.data,e.name=f.template):e[c]=b(),a.utils.arrayForEach(["afterAdd","afterRender","as","beforeRemove","includeDestroyed","templateEngine","templateOptions","nodes"],function(b){f.hasOwnProperty(b)?e[b]=f[b]:a.bindingHandlers.sortable.hasOwnProperty(b)&&(e[b]=a.bindingHandlers.sortable[b])}),"foreach"===c&&(e.afterRender?(d=e.afterRender,e.afterRender=function(a,b){m.call(b,a,b),d.call(b,a,b)}):e.afterRender=m),e},o=function(a,b){var c=h(b);if(c)for(var d=0;a>d;d++)c[d]&&h(c[d]._destroy)&&a++;return a},p=function(c,d){var e,f;d?(f=document.getElementById(d),f&&(e=new a.templateSources.domElement(f),e.text(b.trim(e.text())))):b(c).contents().each(function(){this&&1!==this.nodeType&&c.removeChild(this)})};a.bindingHandlers.sortable={init:function(k,m,q,r,s){var t,u,v=b(k),w=h(m())||{},x=n(m,"foreach"),y={};p(k,x.name),b.extend(!0,y,a.bindingHandlers.sortable),w.options&&y.options&&(a.utils.extend(y.options,w.options),delete w.options),a.utils.extend(y,w),y.connectClass&&(a.isObservable(y.allowDrop)||"function"==typeof y.allowDrop)?a.computed({read:function(){var b=h(y.allowDrop),c="function"==typeof b?b.call(this,x.foreach):b;a.utils.toggleDomNodeCssClass(k,y.connectClass,c)},disposeWhenNodeIsRemoved:k},this):a.utils.toggleDomNodeCssClass(k,y.connectClass,y.allowDrop),a.bindingHandlers.template.init(k,function(){return x},q,r,s),t=y.options.start,u=y.options.update;var z=setTimeout(function(){var m;v.sortable(a.utils.extend(y.options,{start:function(b,c){var e=c.item[0];j(e,d,a.utils.arrayIndexOf(c.item.parent().children(),e)),c.item.find("input:focus").change(),t&&t.apply(this,arguments)},receive:function(a,b){m=i(b.item[0],g),m&&(m.clone&&(m=m.clone()),y.dragged&&(m=y.dragged.call(this,m,a,b)||m))},update:function(g,h){var k,n,p,q,r,s=h.item[0],t=h.item.parent()[0],v=i(s,c)||m;if(m=null,v&&this===t||!l&&b.contains(this,t)){if(k=i(s,f),p=i(s,d),n=i(s.parentNode,e),q=a.utils.arrayIndexOf(h.item.parent().children(),s),x.includeDestroyed||(p=o(p,k),q=o(q,n)),(y.beforeMove||y.afterMove)&&(r={item:v,sourceParent:k,sourceParentNode:k&&h.sender||s.parentNode,sourceIndex:p,targetParent:n,targetIndex:q,cancelDrop:!1},y.beforeMove&&y.beforeMove.call(this,r,g,h)),k?b(k===n?this:h.sender||this).sortable("cancel"):b(s).remove(),r&&r.cancelDrop)return;q>=0&&(k&&(k.splice(p,1),a.processAllDeferredBindingUpdates&&a.processAllDeferredBindingUpdates()),n.splice(q,0,v)),j(s,c,null),a.processAllDeferredBindingUpdates&&a.processAllDeferredBindingUpdates(),y.afterMove&&y.afterMove.call(this,r,g,h)}u&&u.apply(this,arguments)},connectWith:y.connectClass?"."+y.connectClass:!1})),void 0!==y.isEnabled&&a.computed({read:function(){v.sortable(h(y.isEnabled)?"enable":"disable")},disposeWhenNodeIsRemoved:k})},0);return a.utils.domNodeDisposal.addDisposeCallback(k,function(){(v.data("ui-sortable")||v.data("sortable"))&&v.sortable("destroy"),a.utils.toggleDomNodeCssClass(k,y.connectClass,!1),clearTimeout(z)}),{controlsDescendantBindings:!0}},update:function(b,c,d,f,g){var h=n(c,"foreach");j(b,e,h.foreach),a.bindingHandlers.template.update(b,function(){return h},d,f,g)},connectClass:"ko_container",allowDrop:!0,afterMove:null,beforeMove:null,options:{}},a.bindingHandlers.draggable={init:function(c,d,e,f,i){var k=h(d())||{},l=k.options||{},m=a.utils.extend({},a.bindingHandlers.draggable.options),o=n(d,"data"),p=k.connectClass||a.bindingHandlers.draggable.connectClass,q=void 0!==k.isEnabled?k.isEnabled:a.bindingHandlers.draggable.isEnabled;return k="data"in k?k.data:k,j(c,g,k),a.utils.extend(m,l),m.connectToSortable=p?"."+p:!1,b(c).draggable(m),void 0!==q&&a.computed({read:function(){b(c).draggable(h(q)?"enable":"disable")},disposeWhenNodeIsRemoved:c}),a.utils.domNodeDisposal.addDisposeCallback(c,function(){b(c).draggable("destroy")}),a.bindingHandlers.template.init(c,function(){return o},e,f,i)},update:function(b,c,d,e,f){var g=n(c,"data");return a.bindingHandlers.template.update(b,function(){return g},d,e,f)},connectClass:a.bindingHandlers.sortable.connectClass,options:{helper:"clone"}}});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-undomanager/knockout-undomanager.js":[function(require,module,exports){
(function (global){
// Knockout UndoManager v0.2 | (c) 2015 Stefano Bagnara
// License: MIT (http://www.opensource.org/licenses/mit-license) 
// requires "ko.watch" method from knockout.reactor
(function (factory) {
  // Module systems magic dance.
  if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    // CommonJS or Node: hard-coded dependency on "knockout"
    module.exports = factory((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null), require("./../knockoutjs-reactor/dist/ko-reactor.min.js"));
  } else if (typeof define === "function" && define["amd"]) {
    // AMD anonymous module with hard-coded dependency on "knockout"
    define(["knockout", "knockoutjs-reactor", "exports"], factory);
  } else {
    // <script> tag: use the global `ko` object
    factory(ko, ko.watch);
  }
}(function (ko, reactor) { 

  /// <summary>
  ///     Track last "levels" changes within the chained observable down to any given level and
  ///     supports undoing/redoing the changes.
  /// </summary>
  /// <param name="options" type="object">
  ///     { levels: 2 } -> Remember only last "levels" changes<br/>
  ///     { undoLabel: "Undo it (#COUNT)!" } -> Define a label for the undo command. "#COUNT#" sequence will be replaced with the stack length.<br/>
  ///     { redoLabel: "Redo it (#COUNT)!" } -> Define a label for the redo command. "#COUNT#" sequence will be replaced with the stack length.<br/>
  /// </param>
  var undoManager = function (model, options) {
    var undoStack = ko.observableArray();
    var redoStack = ko.observableArray();
    var lastPushedStack;
    var STATE_DOING = 0;
    var STATE_UNDOING = 1;
    var STATE_REDOING = 2;
    var state = STATE_DOING;

    var MODE_NORMAL = 0; // add to stack every change
    var MODE_IGNORE = 1; // do not add anything to the stack
    var MODE_ONCE = 2; // only one sequential change for each property is added to the stack
    var MODE_MERGE = 3; // merge next change with the last one
    var mode = MODE_NORMAL;

    var defaultOptions = {
      levels: 100,
      undoLabel: "undo (#COUNT#)",
      redoLabel: "redo (#COUNT#)"
    };
    
    if (typeof options == 'object') {
      options = ko.utils.extend(defaultOptions, options);
    } else {
      options = defaultOptions;
    }
  
    var _push = function (action) {
      // durante UNDO/REDO lavoriamo sempre in normale
      if (state == STATE_UNDOING) {
        _pushInt(action, redoStack);
      } else if (state == STATE_REDOING) {
        _pushInt(action, undoStack);
      } else if (state == STATE_DOING) {
        _pushInt(action, undoStack);
        redoStack.removeAll();
      }
    };
    
    var _tryMerge = function (prev, newAction) {
      if (typeof prev.mergedAction !== 'undefined') {
        return prev.mergedAction(newAction);
      } else return null;
    };

    var _pushInt = function (action, myStack) {
      /* gestione del merge di azioni: se l'ultima azione nello stack ha un metodo "mergedAction"
         proviamo ad invocarlo e se ci restituisce una funzione la usiamo al posto di entrambe */
      // console.log("UR", "_pushInt", myStack().length > 0 ? typeof myStack()[myStack().length - 1].mergedAction : "EMPTY");
      if (myStack().length > 0) {
        var merged = _tryMerge(myStack()[myStack().length - 1], action);
        // console.log("UR", "_pushInt.merged", merged, "MV", typeof action.mergeableMove, "MA", typeof action.mergeableAction, "MM", typeof action.mergeMe);
        if (merged !== null) {
          myStack()[myStack().length - 1] = merged;
          return;
        }
      }
      if (myStack().length >= options.levels) myStack.shift();
      lastPushedStack = myStack;
      myStack.push(action);
    };
    
    var _xdoCommand = function(label, workState, stack) {
      return {
        name: ko.computed(function() {
          return ko.utils.unwrapObservable(label).replace(/#COUNT#/, stack().length);
        }),
        enabled: ko.computed(function() {
          return stack().length !== 0;
        }),
        execute: function() {
          var action = stack.pop();
          if (action) {
            var prevState = state;
            state = workState;
            var oldMode = mode;
            mode = MODE_MERGE;
            // console.log("XDO", "before", label);
            action();
            // console.log("XDO", "after", label);
            _removeMergedAction(lastPushedStack);
            mode = oldMode;
            state = prevState;
          }
          return true;
        }
      };
    };

    var _removeMergedAction = function(myStack) {
      if (typeof myStack == 'undefined') throw "Unexpected operation: stack cleaner called with undefined stack";
      
      if (myStack().length > 0 && typeof myStack()[myStack().length - 1].mergedAction !== 'undefined') {
        // console.log("Removing mergedAction from stack");
        delete myStack()[myStack().length - 1].mergedAction;
      }
    };

    var _combinedFunction = function(first, second) {
      var res = (function(f1, f2) {
        f1();
        f2();
      }).bind(undefined, first, second);
      if (typeof first.mergedAction !== 'undefined') {
        res.mergedAction = first.mergedAction;
      }
      return res;
    };

    var executeUndoAction = function(child, value, item) {
      // console.log("executeUndoAction", child, value, item);
      if (typeof value !== 'undefined') {
        child(value);
      } else if (item) {
        if (item.status == 'deleted') {
          child.splice(item.index, 0, item.value);
        } else if (item.status == 'added') {
          child.splice(item.index, 1);
        } else {
          throw "Unsupproted item.status: "+item.status;
        }
      } else {
        throw "Unexpected condition: no item and no child.oldValues!";
      }
    };

    var makeUndoActionDefault = function(undoFunc, parents, child, oldVal, item) {
      return undoFunc.bind(undefined, child, oldVal, item);
    };

    var makeUndoAction = makeUndoActionDefault;

    var changePusher = function(parents, child, item) {
      var oldVal = typeof child.oldValues != 'undefined' ? child.oldValues[0] : undefined;
      var act = makeUndoAction(executeUndoAction, parents, child, oldVal, item);

      if (mode == MODE_IGNORE) return;

      if (mode == MODE_MERGE) {
        // console.log("UR", "mergemode");
        if (typeof act !== 'undefined') {
          act.mergedAction = function(newAction) {
            if (typeof newAction.mergeMe !== 'undefined' && newAction.mergeMe) {
              return _combinedFunction(newAction, this);
            } else return null;
          };
          act.mergeMe = true;
        }
      } else {
        if (typeof act !== 'undefined') {
          if (child.oldValues && mode == MODE_ONCE) {
            act.mergedAction = function(oldChild, oldItem, newAction) {
              if (typeof newAction.mergeableAction == 'object' && oldChild == newAction.mergeableAction.child) {
                // console.log("UR", "ignore update for property in MODE_ONCE");
                return this;
              } else return null;
            }.bind(act, child, item);
            act.mergeableAction = { child: child, item: item };
          }
          // console.log("UR", "item.status", item.status);
          // "item" is valued when an item is added/removed/reteined in an array
          // sometimes KO detect "moves" and add a "moved" property with the index but
          // this doesn't happen for example using knockout-sortable or when moving objects
          // between arrays.
          // So this ends up handling this with "mergeableMove" and "mergedAction": 
          if (item && item.status == 'deleted') {
            // TODO se sono in MODE = MERGE devo metteer una funzione di merge che accetta tutto.
            // altrimenti lascio questa.
            act.mergedAction = function(oldChild, oldItem, newAction) {
              // console.log("UR", "act.mergedAction", typeof newAction.mergeableMove);
              // a deleted action is able to merge with a added action if they apply to the same
              // object.
              if (typeof newAction.mergeableMove == 'object' && oldItem.value == newAction.mergeableMove.item.value) {
                // in this case I simply return a single action running both actions in sequence,
                // this way the "undo" will need to undo only once for a "move" operation.
                return _combinedFunction(newAction, this);
              } else {
                console.log("UR", "not mergeable", typeof newAction.mergeableMove);
              }

              return null;
            }.bind(act, child, item);
          }
          if (item && item.status == 'added') {
            // add a mergeableMove property that will be used by the next action "mergedAction" to see if this action
            // can be merged.
            act.mergeableMove = { child: child, item: item };
          }
        }
      }
      if (typeof act !== 'undefined') _push(act);
    };

    var reactorOptions = { depth: -1, oldValues: 1, mutable: true, /* tagParentsWithName: true */ tagFields: true };

    var context = {};
    var react = typeof reactor == 'function' ? reactor : ko.watch;
    var res = react(model, reactorOptions, changePusher, context);

    return {
      push: _push, 
      undoCommand: _xdoCommand(options.undoLabel, STATE_UNDOING, undoStack),
      redoCommand: _xdoCommand(options.redoLabel, STATE_REDOING, redoStack),
      reset: function() { undoStack.removeAll(); redoStack.removeAll(); },
      // setMode: function(newMode) { mode = newMode; _removeMergedAction(undoStack); },
      setModeOnce: function() { mode = MODE_ONCE; _removeMergedAction(undoStack); },
      setModeMerge: function() { mode = MODE_MERGE; _removeMergedAction(undoStack); },
      setModeNormal: function() { mode = MODE_NORMAL; _removeMergedAction(undoStack); },
      setModeIgnore: function() { mode = MODE_IGNORE; _removeMergedAction(undoStack); },
      setUndoActionMaker: function(maker) { makeUndoAction = maker; },
      dispose: function() { /* ko.unwatch(model, reactorOptions, changePusher); */ res.dispose(); }
    };
  };

  return undoManager;
  
}));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../knockoutjs-reactor/dist/ko-reactor.min.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockoutjs-reactor/dist/ko-reactor.min.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout.wrap/knockout.wrap.js":[function(require,module,exports){
(function (global){
// Knockout Fast Mapping v0.1
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function (factory) {
	// Module systems magic dance.

	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null), exports);
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout", "exports"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `wrap` property
		factory(ko, ko.wrap = {});
	}
}(function (ko, exports) {
    
    // this function mimics ko.mapping
    exports.fromJS = function(jsObject, computedFunctions, observableObjects)
    {
        reset();
	return wrap(jsObject, computedFunctions, observableObjects);
    }

    // this function unwraps the outer for assigning the result to an observable
    // see https://github.com/SteveSanderson/knockout/issues/517
    exports.updateFromJS = function(observable, jsObject, computedFunctions, observableObjects)
    {
        reset();
	return observable(ko.utils.unwrapObservable(wrap(jsObject, computedFunctions, observableObjects)));
    }

    exports.fromJSON = function (jsonString, computedFunctions, observableObjects) {
	var parsed = ko.utils.parseJson(jsonString);
	arguments[0] = parsed;
	return exports.fromJS.apply(this, computedFunctions, observableObjects);
    };
    
    exports.toJS = function (observable) {
	return unwrap(observable);
    }

    exports.toJSON = function (observable) {
	var plainJavaScriptObject = exports.toJS(observable);
	return ko.utils.stringifyJson(plainJavaScriptObject);
    };

    function typeOf(value) {
	var s = typeof value;
	if (s === 'object') {
            if (value) {
                if (value.constructor == Date)
                    s = 'date';
		else if (Object.prototype.toString.call(value) == '[object Array]')
                    s = 'array';
            } else {
		s = 'null';
            }
	}
	return s;
    }

    // unwrapping
    function unwrapObject(o)
    {
	var t = {};

	for (var k in o)
	{
	    var v = o[k];

	    if (ko.isComputed(v))
		continue;

	    t[k] = unwrap(v);
	}

	return t;
    }

    function unwrapArray(a)
    {
	var r = [];

	if (!a || a.length == 0)
	    return r;
	
	for (var i = 0, l = a.length; i < l; ++i)
	    r.push(unwrap(a[i]));

	return r;
    }

    function unwrap(v)
    {
	var isObservable = ko.isObservable(v);

	if (isObservable)
	{
	    var val = v();

	    return unwrap(val);
	}
	else
	{
	    if (typeOf(v) == "array")
	    {
		return unwrapArray(v);
	    }
	    else if (typeOf(v) == "object")
	    {
		return unwrapObject(v);
	    }
	    else
	    {
		return v;
	    }
	}
    }

    function reset()
    {
        parents = [{obj: null, wrapped: null, lvl: ""}];
    }    
    
    // wrapping

    function wrapObject(o, computedFunctions, observableObjects)
    {
        // check for infinite recursion
        for (var i = 0; i < parents.length; ++i) {
            if (parents[i].obj === o) {
                return parents[i].wrapped;
            }
        }

	var t = {};

	for (var k in o)
	{
	    var v = o[k];

            parents.push({obj: o, wrapped: t, lvl: currentLvl() + "/" + k});

	    t[k] = wrap(v, computedFunctions, observableObjects);

            parents.pop();
	}

	if (computedFunctions && computedFunctions[currentLvl()])
	    t = computedFunctions[currentLvl()](t);

        if (hasES5Plugin())
            ko.track(t);

	if (observableObjects) return ko.observable(t);
	return t;
    }

    function wrapArray(a, computedFunctions, observableObjects)
    {
	var r = ko.observableArray();

	if (!a || a.length == 0)
	    return r;

	for (var i = 0, l = a.length; i < l; ++i)
	    r.push(wrap(a[i], computedFunctions, observableObjects));

	return r;
    }

    // a stack, used for two purposes:
    //  - circular reference checking
    //  - computed functions
    var parents;

    function currentLvl()
    {
	return parents[parents.length-1].lvl;
    }

    function wrap(v, computedFunctions, observableObjects)
    {
	if (typeOf(v) == "array")
	{
	    return wrapArray(v, computedFunctions, observableObjects);
	}
	else if (typeOf(v) == "object")
	{
	    return wrapObject(v, computedFunctions, observableObjects);
	}
	else
	{
            if (!hasES5Plugin() && typeof v !== 'function')
            {
	        var t = ko.observable();
	        t(v);
	        return t;
            } else
                return v;
	}
    }

    function hasES5Plugin()
    {
        return ko.track != null;
    }
}));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockoutjs-reactor/dist/ko-reactor.min.js":[function(require,module,exports){
ko.subscribable.fn.watch=function(a,b,c,d){var e=typeof a;return"boolean"===e||"undefined"===e?ko.watch(this,{enabled:a!==!1}):"function"!==e||ko.isSubscribable(a)?ko.watch(a,b,c,d||this):ko.watch(this,b||{},a,d||this),this},ko.watch=function(a,b,c,d){function e(h,i,j,k,l,m){if(h&&0!==b.depth&&(-1===b.depth||j.length<(b.depth||1))){if(b.watchedOnly&&!h.watchable&&h!=a)return;if((b.enabled===!1||b.enabled===!0)&&(h.watchable=b.enabled),h.watchable===!1)return;b.seal===!0&&(h.watchable=!1);var n=typeof h;if("object"===n||"function"===n){if(h._watcher===d)return;if(b.hide&&ko.utils.arrayIndexOf(b.hide,h)>-1)return;var o=[].concat(j,i&&i!==a?i:[]);if("function"!==n){if("[object Object]"===Object.prototype.toString.call(h))ko.utils.objectForEach(h,function(a,c){if(c=b.getter?b.getter.call(d,o,h,a):c){if(b.wrap){var f=Object.prototype.toString.call(c);"[object Function]"!==f&&"[object Object]"!==f&&(b.beforeWrap&&b.beforeWrap.call(d,o,h,c)===!1||(c=h[a]="[object Array]"===f?ko.observableArray(c):ko.observable(c)))}b.unloop&&(c._watcher=k?void 0:d);var g=e(c,l?null:h,o,k,null,a);b.tagFields&&void 0===c._fieldName&&(g||"parentsOnly"!==b.tagFields&&"function"==typeof c||"object"==typeof c)&&(c._fieldName=a)}});else if(b.hideArrays!==!0)for(var p=0;p<h.length;p++)e(h[p],l?null:h,o,k);return!0}if("function"==typeof h.notifySubscribers&&c){if(b.enabled===!0&&h.watchable===!1)return;if(k||!b.beforeWatch||b.beforeWatch.call(d,o,h,m)!==!1){var q="function"==typeof h.pop;if(k?f(h):g(h,q,o,l),q)return e(h(),l?null:h,o,k,!0),!0;if(b.hideWrappedValues!==!0)return e(h(),l?null:h,o,k,!0)}}}}}function f(a){var c=a[h];if(!c)throw"Subscriptions field (."+h+") not defined for observable child "+(a._fieldName||"");if(c.change)for(var e=c.change.length-1;e>=0;e--)c.change[e]._watcher===d&&c.change[e].dispose();if(c.beforeChange&&(b.mutable||b.oldValues>0))for(var e=c.beforeChange.length-1;e>=0;e--)c.beforeChange[e]._watcher===d&&c.beforeChange[e].dispose();if(c.arrayChange)for(var e=c.arrayChange.length-1;e>=0;e--)c.arrayChange[e]._watcher===d&&c.arrayChange[e].dispose()}function g(a,f,g,h){f?a.subscribe(function(b){ko.utils.arrayForEach(b,function(b){var f=c.call(d,g,a,b);void 0!==f&&d(f),b.moved||setTimeout(function(){e(b.value,h?null:a,g,"deleted"===b.status)},0)})},void 0,"arrayChange")._watcher=d:(a.subscribe(function(){if(a.watchable!==!1){var f=c.call(d,g,a);void 0!==f&&d(f),b.mutable&&"object"==typeof a()&&e(a(),h?null:a,g)}},null,"change")._watcher=d,(b.oldValues>0||b.mutable)&&(a.subscribe(function(c){if(b.oldValues>0){var d=a.oldValues?a.oldValues:a.oldValues=[];for(d.unshift(c);d.length>b.oldValues;)d.pop()}b.mutable&&"object"==typeof c&&e(c,h?null:a,g,!1,!0)},null,"beforeChange")._watcher=d))}"function"==typeof b&&(d=d||c,c=b,b={}),d=d||this;var h;switch(ko.DEBUG||ko.version){case!0:h="_subscriptions";break;case"3.0.0":h="F";break;case"3.1.0":h="H";break;case"3.2.0":h="M";break;case"3.3.0":h="G";case"3.4.0":h="K";break;default:throw"Unsupported Knockout version. Only v3.0.0 to v3.4.0 are supported when minified. Current version is "+ko.version}return"function"!=typeof a||ko.isSubscribable(a)?(e(a,null,[]),{dispose:function(){e(a,null,[],!0)}}):ko.computed(a,c,b)};window.foo = "1.3.6";
},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/debug.js":[function(require,module,exports){
(function (process){
exports = module.exports = debug;

function debug(label) {
  return _debug.bind(null, label);
}

function _debug(label) {
  var args = [].slice.call(arguments, 1);
  args.unshift('[' + label + ']');
  process.stderr.write(args.join(' ') + '\n');
}
}).call(this,require('_process'))
},{"_process":"/var/www/s/app/webroot/js/lib/mosaico/node_modules/browserify/node_modules/process/browser.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/lexer.js":[function(require,module,exports){
var DEBUG = false; // `true` to print debugging info.
var TIMER = false; // `true` to time calls to `lex()` and print the results.

var debug = require('./debug')('lex');

exports = module.exports = lex;

/**
 * Convert a CSS string into an array of lexical tokens.
 *
 * @param {String} css CSS
 * @returns {Array} lexical tokens
 */
function lex(css) {
  var start; // Debug timer start.

  var buffer = '';      // Character accumulator
  var ch;               // Current character
  var column = 0;       // Current source column number
  var cursor = -1;      // Current source cursor position
  var depth = 0;        // Current nesting depth
  var line = 1;         // Current source line number
  var state = 'before-selector'; // Current state
  var stack = [state];  // State stack
  var token = {};       // Current token
  var tokens = [];      // Token accumulator

  // Supported @-rules, in roughly descending order of usage probability.
  var atRules = [
    'media',
    'keyframes',
    { name: '-webkit-keyframes', type: 'keyframes', prefix: '-webkit-' },
    { name: '-moz-keyframes', type: 'keyframes', prefix: '-moz-' },
    { name: '-ms-keyframes', type: 'keyframes', prefix: '-ms-' },
    { name: '-o-keyframes', type: 'keyframes', prefix: '-o-' },
    'font-face',
    { name: 'import', state: 'before-at-value' },
    { name: 'charset', state: 'before-at-value' },
    'supports',
    'viewport',
    { name: 'namespace', state: 'before-at-value' },
    'document',
    { name: '-moz-document', type: 'document', prefix: '-moz-' },
    'page'
  ];

  // -- Functions ------------------------------------------------------------

  /**
   * Advance the character cursor and return the next character.
   *
   * @returns {String} The next character.
   */
  function getCh() {
    skip();
    return css[cursor];
  }

  /**
   * Return the state at the given index in the stack.
   * The stack is LIFO so indexing is from the right.
   *
   * @param {Number} [index=0] Index to return.
   * @returns {String} state
   */
  function getState(index) {
    return index ? stack[stack.length - 1 - index] : state;
  }

  /**
   * Look ahead for a string beginning from the next position. The string
   * being looked for must start at the next position.
   *
   * @param {String} str The string to look for.
   * @returns {Boolean} Whether the string was found.
   */
  function isNextString(str) {
    var start = cursor + 1;
    return (str === css.slice(start, start + str.length));
  }

  /**
   * Find the start position of a substring beginning from the next
   * position. The string being looked for may begin anywhere.
   *
   * @param {String} str The substring to look for.
   * @returns {Number|false} The position, or `false` if not found.
   */
  function find(str) {
    var pos = css.slice(cursor).indexOf(str);

    return pos > 0 ? pos : false;
  }

  /**
   * Determine whether a character is next.
   *
   * @param {String} ch Character.
   * @returns {Boolean} Whether the character is next.
   */
  function isNextChar(ch) {
    return ch === peek(1);
  }

  /**
   * Return the character at the given cursor offset. The offset is relative
   * to the cursor, so negative values move backwards.
   *
   * @param {Number} [offset=1] Cursor offset.
   * @returns {String} Character.
   */
  function peek(offset) {
    return css[cursor + (offset || 1)];
  }

  /**
   * Remove the current state from the stack and set the new current state.
   *
   * @returns {String} The removed state.
   */
  function popState() {
    var removed = stack.pop();
    state = stack[stack.length - 1];

    return removed;
  }

  /**
   * Set the current state and add it to the stack.
   *
   * @param {String} newState The new state.
   * @returns {Number} The new stack length.
   */
  function pushState(newState) {
    state = newState;
    stack.push(state);

    return stack.length;
  }

  /**
   * Replace the current state with a new state.
   *
   * @param {String} newState The new state.
   * @returns {String} The replaced state.
   */
  function replaceState(newState) {
    var previousState = state;
    stack[stack.length - 1] = state = newState;

    return previousState;
  }

  /**
   * Move the character cursor. Positive numbers move the cursor forward.
   * Negative numbers are not supported!
   *
   * @param {Number} [n=1] Number of characters to skip.
   */
  function skip(n) {
    if ((n || 1) == 1) {
      if (css[cursor] == '\n') {
        line++;
        column = 1;
      } else {
        column++;
      }
      cursor++;
    } else {
      var skipStr = css.slice(cursor, cursor + n).split('\n');
      if (skipStr.length > 1) {
        line += skipStr.length - 1;
        column = 1;
      }
      column += skipStr[skipStr.length - 1].length;
      cursor = cursor + n;
    }
  }

  /**
   * Add the current token to the pile and reset the buffer.
   */
  function addToken() {
    token.end = {
      line: line,
      col: column
    };

    DEBUG && debug('addToken:', JSON.stringify(token, null, 2));

    tokens.push(token);

    buffer = '';
    token = {};
  }

  /**
   * Set the current token.
   *
   * @param {String} type Token type.
   */
  function initializeToken(type) {
    token = {
      type: type,
      start: {
        line: line,
        col : column
      }
    };
  }

  // -- Main Loop ------------------------------------------------------------

  /*
  The main loop is a state machine that reads in one character at a time,
  and determines what to do based on the current state and character.
  This is implemented as a series of nested `switch` statements and the
  case orders have been mildly optimized based on rough probabilities
  calculated by processing a small sample of real-world CSS.

  Further optimization (such as a dispatch table) shouldn't be necessary
  since the total number of cases is very low.
  */

  TIMER && (start = Date.now());

  while (ch = getCh()) {
    DEBUG && debug(ch, getState());

    // column += 1;

    switch (ch) {
    // Space
    case ' ':
      switch (getState()) {
      case 'selector':
      case 'value':
      case 'value-paren':
      case 'at-group':
      case 'at-value':
      case 'comment':
      case 'double-string':
      case 'single-string':
        buffer += ch;
        break;
      }
      break;

    // Newline or tab
    case '\n':
    case '\t':
    case '\r':
    case '\f':
      switch (getState()) {
      case 'value':
      case 'value-paren':
      case 'at-group':
      case 'comment':
      case 'single-string':
      case 'double-string':
      case 'selector':
        buffer += ch;
        break;

      case 'at-value':
        // Tokenize an @-rule if a semi-colon was omitted.
        if ('\n' === ch) {
          token.value = buffer.trim();
          addToken();
          popState();
        }
        break;
      }

      // if ('\n' === ch) {
      //   column = 0;
      //   line += 1;
      // }
      break;

    case ':':
      switch (getState()) {
      case 'name':
        token.name = buffer.trim();
        buffer = '';

        replaceState('before-value');
        break;

      case 'before-selector':
        buffer += ch;

        initializeToken('selector');
        pushState('selector');
        break;

      default:
        buffer += ch;
        break;
      }
      break;

    case ';':
      switch (getState()) {
      case 'name':
      case 'before-value':
      case 'value':
        // Tokenize a declaration
        // if value is empty skip the declaration
        if (buffer.trim().length > 0) {
          token.value = buffer.trim(),
          addToken();
        }
        replaceState('before-name');
        break;

      case 'value-paren':
        // Insignificant semi-colon
        buffer += ch;
        break;

      case 'at-value':
        // Tokenize an @-rule
        token.value = buffer.trim();
        addToken();
        popState();
        break;

      case 'before-name':
        // Extraneous semi-colon
        break;

      default:
        buffer += ch;
        break;
      }
      break;

    case '{':
      switch (getState()) {
      case 'selector':
        // If the sequence is `\{` then assume that the brace should be escaped.
        if (peek(-1) === '\\') {
            buffer += ch;
            break;
        }

        // Tokenize a selector
        token.text = buffer.trim();
        addToken();
        replaceState('before-name');
        depth = depth + 1;
        break;

      case 'at-group':
        // Tokenize an @-group
        token.name = buffer.trim();

        // XXX: @-rules are starting to get hairy
        switch (token.type) {
        case 'font-face':
        case 'viewport' :
        case 'page'     :
          pushState('before-name');
          break;

        default:
          pushState('before-selector');
        }

        addToken();
        depth = depth + 1;
        break;

      case 'name':
      case 'at-rule':
        // Tokenize a declaration or an @-rule
        token.name = buffer.trim();
        addToken();
        pushState('before-name');
        depth = depth + 1;
        break;

      case 'comment':
      case 'double-string':
      case 'single-string':
        // Ignore braces in comments and strings
        buffer += ch;
        break;
      }

      break;

    case '}':
      switch (getState()) {
      case 'before-name':
      case 'name':
      case 'before-value':
      case 'value':
        // If the buffer contains anything, it is a value
        if (buffer) {
          token.value = buffer.trim();
        }

        // If the current token has a name and a value it should be tokenized.
        if (token.name && token.value) {
          addToken();
        }

        // Leave the block
        initializeToken('end');
        addToken();
        popState();

        // We might need to leave again.
        // XXX: What about 3 levels deep?
        if ('at-group' === getState()) {
          initializeToken('at-group-end');
          addToken();
          popState();
        }
        
        if (depth > 0) {
          depth = depth - 1;
        }

        break;

      case 'at-group':
      case 'before-selector':
      case 'selector':
        // If the sequence is `\}` then assume that the brace should be escaped.
        if (peek(-1) === '\\') {
            buffer += ch;
            break;
        }

        if (depth > 0) {
          // Leave block if in an at-group
          if ('at-group' === getState(1)) {
            initializeToken('at-group-end');
            addToken();
          }
        }

        if (depth > 1) {
          popState();
        }

        if (depth > 0) {
          depth = depth - 1;
        }
        break;

      case 'double-string':
      case 'single-string':
      case 'comment':
        // Ignore braces in comments and strings.
        buffer += ch;
        break;
      }

      break;

    // Strings
    case '"':
    case "'":
      switch (getState()) {
      case 'double-string':
        if ('"' === ch && '\\' !== peek(-1)) {
          popState();
        }
        break;

      case 'single-string':
        if ("'" === ch && '\\' !== peek(-1)) {
          popState();
        }
        break;

      case 'before-at-value':
        replaceState('at-value');
        pushState('"' === ch ? 'double-string' : 'single-string');
        break;

      case 'before-value':
        replaceState('value');
        pushState('"' === ch ? 'double-string' : 'single-string');
        break;

      case 'comment':
        // Ignore strings within comments.
        break;

      default:
        if ('\\' !== peek(-1)) {
          pushState('"' === ch ? 'double-string' : 'single-string');
        }
      }

      buffer += ch;
      break;

    // Comments
    case '/':
      switch (getState()) {
      case 'comment':
      case 'double-string':
      case 'single-string':
        // Ignore
        buffer += ch;
        break;

      case 'before-value':
      case 'selector':
      case 'name':
      case 'value':
        if (isNextChar('*')) {
          // Ignore comments in selectors, properties and values. They are
          // difficult to represent in the AST.
          var pos = find('*/');

          if (pos) {
            skip(pos + 1);
          }
        } else {
          buffer += ch;
        }
        break;

      default:
        if (isNextChar('*')) {
          // Create a comment token
          initializeToken('comment');
          pushState('comment');
          skip();
        }
        else {
          buffer += ch;
        }
        break;
      }
      break;

    // Comment end or universal selector
    case '*':
      switch (getState()) {
      case 'comment':
        if (isNextChar('/')) {
          // Tokenize a comment
          token.text = buffer; // Don't trim()!
          skip();
          addToken();
          popState();
        }
        else {
          buffer += ch;
        }
        break;

      case 'before-selector':
        buffer += ch;
        initializeToken('selector');
        pushState('selector');
        break;

      default:
        buffer += ch;
      }
      break;

    // @-rules
    case '@':
      switch (getState()) {
      case 'comment':
      case 'double-string':
      case 'single-string':
        buffer += ch;
        break;

      default:
        // Iterate over the supported @-rules and attempt to tokenize one.
        var tokenized = false;
        var name;
        var rule;

        for (var j = 0, len = atRules.length; !tokenized && j < len; ++j) {
          rule = atRules[j];
          name = rule.name || rule;

          if (!isNextString(name)) { continue; }

          tokenized = true;

          initializeToken(name);
          pushState(rule.state || 'at-group');
          skip(name.length);

          if (rule.prefix) {
            token.prefix = rule.prefix;
          }

          if (rule.type) {
            token.type = rule.type;
          }
        }

        if (!tokenized) {
          // Keep on truckin' America!
          buffer += ch;
        }
        break;
      }
      break;

    // Parentheses are tracked to disambiguate semi-colons, such as within a
    // data URI.
    case '(':
      switch (getState()) {
      case 'value':
        pushState('value-paren');
        break;
      }

      buffer += ch;
      break;

    case ')':
      switch (getState()) {
      case 'value-paren':
        popState();
        break;
      }

      buffer += ch;
      break;

    default:
      switch (getState()) {
      case 'before-selector':
        initializeToken('selector');
        pushState('selector');
        break;

      case 'before-name':
        initializeToken('property');
        replaceState('name');
        break;

      case 'before-value':
        replaceState('value');
        break;

      case 'before-at-value':
        replaceState('at-value');
        break;
      }

      buffer += ch;
      break;
    }
  }

  TIMER && debug('ran in', (Date.now() - start) + 'ms');

  return tokens;
}

},{"./debug":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/debug.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/parser.js":[function(require,module,exports){
var DEBUG = false; // `true` to print debugging info.
var TIMER = false; // `true` to time calls to `parse()` and print the results.

var debug = require('./debug')('parse');
var lex = require('./lexer');

exports = module.exports = parse;

var _comments;   // Whether comments are allowed.
var _depth;      // Current block nesting depth.
var _position;   // Whether to include line/column position.
var _tokens;     // Array of lexical tokens.

/**
 * Convert a CSS string or array of lexical tokens into a `stringify`-able AST.
 *
 * @param {String} css CSS string or array of lexical token
 * @param {Object} [options]
 * @param {Boolean} [options.comments=false] allow comment nodes in the AST
 * @returns {Object} `stringify`-able AST
 */
function parse(css, options) {
  var start; // Debug timer start.

  options || (options = {});
  _comments = !!options.comments;
  _position = !!options.position;

  _depth = 0;

  // Operate on a copy of the given tokens, or the lex()'d CSS string.
  _tokens = Array.isArray(css) ? css.slice() : lex(css);

  var rule;
  var rules = [];
  var token;

  TIMER && (start = Date.now());

  while ((token = next())) {
    rule = parseToken(token);
    rule && rules.push(rule);
  }

  TIMER && debug('ran in', (Date.now() - start) + 'ms');

  return {
    type: "stylesheet",
    stylesheet: {
      rules: rules
    }
  };
}

// -- Functions --------------------------------------------------------------

/**
 * Build an AST node from a lexical token.
 *
 * @param {Object} token lexical token
 * @param {Object} [override] object hash of properties that override those
 *   already in the token, or that will be added to the token.
 * @returns {Object} AST node
 */
function astNode(token, override) {
  override || (override = {});

  var key;
  var keys = ['type', 'name', 'value'];
  var node = {};

  // Avoiding [].forEach for performance reasons.
  for (var i = 0; i < keys.length; ++i) {
    key = keys[i];

    if (token[key]) {
      node[key] = override[key] || token[key];
    }
  }

  keys = Object.keys(override);

  for (i = 0; i < keys.length; ++i) {
    key = keys[i];

    if (!node[key]) {
      node[key] = override[key];
    }
  }

  if (_position) {
    node.position = {
      start: token.start,
      end: token.end
    };
  }

  DEBUG && debug('astNode:', JSON.stringify(node, null, 2));

  return node;
}

/**
 * Remove a lexical token from the stack and return the removed token.
 *
 * @returns {Object} lexical token
 */
function next() {
  var token = _tokens.shift();
  DEBUG && debug('next:', JSON.stringify(token, null, 2));
  return token;
}

// -- Parse* Functions ---------------------------------------------------------

/**
 * Convert an @-group lexical token to an AST node.
 *
 * @param {Object} token @-group lexical token
 * @returns {Object} @-group AST node
 */
function parseAtGroup(token) {
  _depth = _depth + 1;

  // As the @-group token is assembled, relevant token values are captured here
  // temporarily. They will later be used as `tokenize()` overrides.
  var overrides = {};

  switch (token.type) {
  case 'font-face':
  case 'viewport' :
    overrides.declarations = parseDeclarations();
    break;

  case 'page':
    overrides.prefix = token.prefix;
    overrides.declarations = parseDeclarations();
    break;

  default:
    overrides.prefix = token.prefix;
    overrides.rules = parseRules();
  }

  return astNode(token, overrides);
}

/**
 * Convert an @import lexical token to an AST node.
 *
 * @param {Object} token @import lexical token
 * @returns {Object} @import AST node
 */
function parseAtImport(token) {
  return astNode(token);
}

/**
 * Convert an @charset token to an AST node.
 *
 * @param {Object} token @charset lexical token
 * @returns {Object} @charset node
 */
function parseCharset(token) {
  return astNode(token);
}

/**
 * Convert a comment token to an AST Node.
 *
 * @param {Object} token comment lexical token
 * @returns {Object} comment node
 */
function parseComment(token) {
  return astNode(token, {text: token.text});
}

function parseNamespace(token) {
  return astNode(token);
}

/**
 * Convert a property lexical token to a property AST node.
 *
 * @returns {Object} property node
 */
function parseProperty(token) {
  return astNode(token);
}

/**
 * Convert a selector lexical token to a selector AST node.
 *
 * @param {Object} token selector lexical token
 * @returns {Object} selector node
 */
function parseSelector(token) {
  function trim(str) {
    return str.trim();
  }

  return astNode(token, {
    type: 'rule',
    selectors: token.text.split(',').map(trim),
    declarations: parseDeclarations(token)
  });
}

/**
 * Convert a lexical token to an AST node.
 *
 * @returns {Object|undefined} AST node
 */
function parseToken(token) {
  switch (token.type) {
  // Cases are listed in roughly descending order of probability.
  case 'property': return parseProperty(token);

  case 'selector': return parseSelector(token);

  case 'at-group-end': _depth = _depth - 1; return;

  case 'media'     :
  case 'keyframes' :return parseAtGroup(token);

  case 'comment': if (_comments) { return parseComment(token); } break;

  case 'charset': return parseCharset(token);
  case 'import': return parseAtImport(token);

  case 'namespace': return parseNamespace(token);

  case 'font-face':
  case 'supports' :
  case 'viewport' :
  case 'document' :
  case 'page'     : return parseAtGroup(token);
  }

  DEBUG && debug('parseToken: unexpected token:', JSON.stringify(token));
}

// -- Parse Helper Functions ---------------------------------------------------

/**
 * Iteratively parses lexical tokens from the stack into AST nodes until a
 * conditional function returns `false`, at which point iteration terminates
 * and any AST nodes collected are returned.
 *
 * @param {Function} conditionFn
 *   @param {Object} token the lexical token being parsed
 *   @returns {Boolean} `true` if the token should be parsed, `false` otherwise
 * @return {Array} AST nodes
 */
function parseTokensWhile(conditionFn) {
  var node;
  var nodes = [];
  var token;

  while ((token = next()) && (conditionFn && conditionFn(token))) {
    node = parseToken(token);
    node && nodes.push(node);
  }

  // Place an unused non-`end` lexical token back onto the stack.
  if (token && token.type !== 'end') {
    _tokens.unshift(token);
  }

  return nodes;
}

/**
 * Convert a series of tokens into a sequence of declaration AST nodes.
 *
 * @returns {Array} declaration nodes
 */
function parseDeclarations() {
  return parseTokensWhile(function (token) {
    return (token.type === 'property' || token.type === 'comment');
  });
}

/**
 * Convert a series of tokens into a sequence of rule nodes.
 *
 * @returns {Array} rule nodes
 */
function parseRules() {
  return parseTokensWhile(function () { return _depth; });
}

},{"./debug":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/debug.js","./lexer":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/lexer.js"}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/tinycolor/tinycolor.js":[function(require,module,exports){
// TinyColor v1.2.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function() {

var trimLeft = /^[\s,#]+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,
    mathRandom = math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function() {
        return rgbaToHex(this._r, this._g, this._b, this._a);
    },
    toHex8String: function() {
        return '#' + this.toHex8();
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = s.toHex8String();
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
            color.s = convertToPercentage(color.s);
            color.v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, color.s, color.v);
            ok = true;
            format = "hsv";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
            color.s = convertToPercentage(color.s);
            color.l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, color.s, color.l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b and a are contained in the set [0, 255]
// Returns an 8 character hex
function rgbaToHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (mathRound(hsl.h) + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;
    var w = p * 2 - 1;
    var a = rgb2.a - rgb1.a;

    var w1;

    if (w * a == -1) {
        w1 = w;
    } else {
        w1 = (w + a) / (1 + w * a);
    }

    w1 = (w1 + 1) / 2;

    var w2 = 1 - w1;

    var rgba = {
        r: rgb2.r * w1 + rgb1.r * w2,
        g: rgb2.g * w1 + rgb1.g * w2,
        b: rgb2.b * w1 + rgb1.b * w2,
        a: rgb2.a * p  + rgb1.a * (1 - p)
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            a: convertHexToDecimal(match[1]),
            r: parseIntFromHex(match[2]),
            g: parseIntFromHex(match[3]),
            b: parseIntFromHex(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (typeof define === 'function' && define.amd) {
    define(function () {return tinycolor;});
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})();

},{}],"/var/www/s/app/webroot/js/lib/mosaico/bower_components/toastr/toastr.js":[function(require,module,exports){
(function (global){
/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
; (function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.2',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass)
                    .attr('aria-live', 'polite')
                    .attr('role', 'alert');

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null)
                        source = "";

                    return new String(source)
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setSequence();
                }

                function handleEvents() {
                    $toastElement.hover(stickAround, delayedHideToast);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        $titleElement.append(!options.escapeHtml ? map.title : escapeHtml(map.title)).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        $messageElement.append(!options.escapeHtml ? map.message : escapeHtml(map.message)).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass('toast-close-button').attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass('toast-progress');
                        $toastElement.prepend($progressElement);
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory((typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null));
    } else {
        window.toastr = factory(window.jQuery);
    }
}));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/var/www/s/app/webroot/js/lib/mosaico/build/templates.js":[function(require,module,exports){
var templateSystem = require('../src/js/bindings/choose-template.js');
document.addEventListener('DOMContentLoaded', function(event) {
templateSystem.addTemplate("array", "<!-- ko foreach: $data --><!-- ko block: $data --><!-- /ko --><!-- /ko -->");
templateSystem.addTemplate("block-show", "<!-- ko block: $data, scrollIntoView: $root.selectedBlock() === $data --><!-- /ko -->");
templateSystem.addTemplate("block-wysiwyg", "<div class=\x22editable block\x22 data-drop-content=\x22Drop here\x22 data-bind=\x22attr: { 'data-drop-content': $root.t('Drop here') }, click: function(obj, evt) { $root.selectBlock(obj); return true }, clickBubble: false, css: { selected: $root.selectedBlock() === $data }, scrollIntoView: $root.selectedBlock() === $data\x22>  <div class=\x22mo-blockselectionhelper\x22></div>  <div class=\x22tools\x22 data-bind=\x22tooltips: {}\x22>    <!-- ko if: typeof $index != 'undefined' -->    <div title=\x22Drag this handle to move the block\x22 data-bind=\x22attr: { title: $root.t('Drag this handle to move the block') }\x22 class=\x22tool handle\x22><i class=\x22fa fa-fw fa-sort\x22></i></div>    <!-- ko if: $index() > 0 -->    <div title=\x22Move this block upside\x22 data-bind=\x22attr: { title: $root.t('Move this block upside') }\x22 class=\x22tool moveup\x22><i class=\x22fa fa-fw fa-sort-asc\x22 data-bind='click: $root.moveBlock.bind($element, $index, $parent, true)'></i></div>    <!-- /ko -->    <!-- ko if: $index() < $parent.blocks().length -1 -->    <div title=\x22Move this block downside\x22 data-bind=\x22attr: { title: $root.t('Move this block downside') }\x22 class=\x22tool movedown\x22><i class=\x22fa fa-fw fa-sort-desc\x22 data-bind='click: $root.moveBlock.bind($element, $index, $parent, false)'></i></div>    <!-- /ko -->    <div title=\x22Delete block\x22 class=\x22tool delete\x22 data-bind=\x22attr: { title: $root.t('Delete block') }, click: $root.removeBlock.bind($element, $rawData, $parent)\x22><i class=\x22fa fa-fw fa-trash-o\x22></i></div>    <div title=\x22Duplicate block\x22 class=\x22tool clone\x22 data-bind=\x22attr: { title: $root.t('Duplicate block') }, click: $root.duplicateBlock.bind($element, $index, $parent)\x22><i class=\x22fa fa-fw fa-files-o\x22></i></div>    <!-- /ko -->    <!-- ko if: typeof $data._nextVariant != 'undefined' --><div title=\x22Switch block variant\x22 class=\x22tool variant\x22 data-bind=\x22attr: { title: $root.t('Switch block variant') }, click: $data._nextVariant\x22><i class=\x22fa fa-fw fa-magic\x22></i></div><!-- /ko -->  </div>  <!-- ko block: $data --><!-- /ko --></div>");
templateSystem.addTemplate("blocks-show", "<!-- ko template: { name: 'block-show', foreach: blocks } --><!-- /ko -->");
templateSystem.addTemplate("blocks-wysiwyg", "<div class=\x22sortable-blocks-edit\x22 data-drop-content=\x22Drop here\x22 data-empty-content=\x22Drop here blocks from the Blocks tab\x22 data-bind=\x22attr: { 'data-drop-content': $root.t('Drop here'), 'data-empty-content': $root.t('Drop here blocks from the &quot;Blocks&quot; tab') }, css: { 'empty': ko.utils.unwrapObservable(blocks).length == 0 }, extsortable: { connectClass: 'sortable-blocks-edit', template: 'block-wysiwyg', data: blocks, dragging: $root.dragging, beforeMove: $root.startMultiple, afterMove: $root.stopMultiple, options: { handle: '.handle', placeholder: $root.placeholderHelper } }\x22></div>");
templateSystem.addTemplate("customstyle", "<div class=\x22customStyleHelp\x22 data-bind=\x22html: $root.t('Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class=&quot;customStyled&quot;><span>&quot;small cube&quot; </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul>')\x22>Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class=\x22customStyled\x22><span>\x22small cube\x22 </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul></div>");
templateSystem.addTemplate("empty", "");
templateSystem.addTemplate("error", "[<div style=\x22background-color: #fff0f0\x22 data-bind=\x22text: ko.toJS($data)\x22></div>]");
templateSystem.addTemplate("gallery-images", "<div data-bind=\x22foreach: items.currentPageData\x22>  <div class=\x22draggable-item\x22 data-bind=\x22if: typeof thumbnailUrl != 'undefined'\x22>    <div class=\x22draggable image\x22 data-bind=\x22click: $root.addImage, extdraggable: { data: $data, dropContainer: '#main-wysiwyg-area', dragging: $root.draggingImage, 'options': { 'appendTo': '#page' } }, style: { backgroundImage: 'url(\\'' + thumbnailUrl + '\\')' }\x22>      <img title=\x22Trascina questa immagine sulla posizione in cui vuoi inserirla\x22 style=\x22display: block;\x22 data-bind=\x22tooltips: {}, attr: { src: thumbnailUrl }\x22/>    </div>  </div></div><!-- ko if: items.pageCount() > 1 --><div class=\x22galleryPager\x22 data-bind=\x22buttonset: {}\x22>  <a href=\x22#\x22 data-bind=\x22click: items.moveFirst, button: { disabled: items.currentPage() == 1, icons: { primary: 'fa fa-fast-backward' }, text: false }\x22>First</a>  <a href=\x22#\x22 data-bind=\x22click: items.movePrevious, button: { disabled: items.currentPage() == 1, icons: { primary: 'fa fa-backward' }, text: false }\x22>Previous</a>  <span data-bind=\x22button: { disabled: true, text: true, label: ' '+items.currentPage()+' di '+items.pageCount()+' ' }\x22> X di Y </span>  <a href=\x22#\x22 data-bind=\x22click: items.moveNext, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: 'fa fa-forward' }, text: false }\x22>Next</a>  <a href=\x22#\x22 data-bind=\x22click: items.moveLast, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: 'fa fa-fast-forward' }, text: false }\x22>Last</a></div><!-- /ko -->");
templateSystem.addTemplate("img-wysiwyg", "<table tabfocus=\x220\x22 cellspacing=\x220\x22 cellpadding=\x220\x22 data-drop-content=\x22Drop here\x22 data-bind=\x22style: _stylebind, click: function(obj, evt) { $root.selectItem(_item, _data); return true; }, clickBubble: false, fudroppable: { activeClass: 'ui-state-highlight', hoverClass: 'ui-state-draghover' }, droppable: { options: { accept: '.image', activeClass: 'ui-state-highlight', hoverClass: 'ui-state-draghover' }, data: _src, dragged: $root.fileToImage }, css: { selecteditem: $root.isSelectedItem(_item) }, scrollIntoView: $root.isSelectedItem(_item), attr: { 'data-drop-content': $root.t('Drop here'), width: _width, height: _height, align: _align }\x22  class=\x22img-wysiwyg selectable-img\x22 style=\x22display: table;\x22><tr><td class=\x22uploadzone\x22>  <div class=\x22mo-imgselectionhelper\x22></div>  <div class=\x22mo-uploadzone\x22></div>  <div class=\x22img-size\x22 data-bind=\x22text: _size\x22>size</div>  <div class=\x22midtools\x22 data-bind=\x22tooltips: {}\x22>    <!-- ko if: _src() != '' -->    <div title=\x22Remove image\x22 class=\x22tool delete\x22 data-bind=\x22attr: { title: $root.t('Remove image') }, click: _src.bind(_src, ''), clickBubble: false\x22><i class=\x22fa fa-fw fa-trash-o\x22></i></div>    <!-- ko if: typeof $root.editImage !== 'undefined' -->    <div title=\x22Open the image editing tool\x22 class=\x22tool edit\x22 data-bind=\x22attr: { title: $root.t('Open the image editing tool') }, click: $root.editImage.bind($element, _src), clickBubble: false\x22><i class=\x22fa fa-fw fa-pencil\x22></i></div>    <!-- /ko -->    <!-- /ko -->    <!-- ko if: _src() == '' -->    <div title=\x22Upload a new image\x22 data-bind=\x22attr: { title: $root.t('Upload a new image') }\x22 class=\x22tool upload\x22 style=\x22position: relative; overflow: hidden;\x22><i class=\x22fa fa-fw fa-upload\x22></i>      <input class=\x22fileupload nofile\x22 type=\x22file\x22 name=\x22files[]\x22 data-bind=\x22fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.loadImage, canvasPreview: true }\x22 style=\x22z-index: 20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-size: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block\x22>    </div>    <!-- /ko -->  </div>  <!-- ko template: _template --><!-- /ko -->  <!-- ko if: _src() == '' -->    <!--    <img style=\x22display: block;\x22 class=\x22imgplaceholder\x22 width=\x22200\x22 src=\x22\x22 alt=\x22Insert an image here\x22 data-bind=\x22wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }\x22 />    -->    <span class=\x22fileuploadtext\x22 style=\x22text-align: center; display: -ms-flexbox; display: flex; align-items: center; flex-align: center; justify-content: center; padding: 1em; position: absolute; top: 0; left: 0; right: 0; bottom: 0;\x22><span class=\x22textMiddle\x22 style=\x22 text-shadow: 1px 1px 0 #FFFFFF, 0 0 10px #FFFFFF; font-weight: bold;\x22 data-bind=\x22text: $root.t('Drop an image here')\x22>Drop an image here</span></span>  <!-- /ko -->  <!-- ko if: _src() != '' -->  <!--    <img style=\x22display: block;\x22 width=\x22200\x22 src=\x22\x22 data-bind=\x22preloader: _src, wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }\x22 />    -->  <!-- /ko -->  <!-- pulsante per la cancellazione -->  <div title=\x22Drop an image here or click the upload button\x22 data-bind=\x22attr: { title: $root.t('Drop an image here or click the upload button') }, tooltips: {}\x22 class=\x22workzone\x22 style=\x22position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;\x22>    <!-- ko if: _src.preloaded && _src() != _src.preloaded() -->PRELOADING....<!-- /ko -->    <!-- ko if: _src() != '' -->      <input class=\x22fileupload withfile\x22 type=\x22file\x22 name=\x22files[]\x22 data-bind=\x22fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.galleryRecent.unshift.bind($root.galleryRecent), canvasPreview: true }\x22 style=\x22z-index: -20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block\x22>    <!-- /ko -->    <div class=\x22progress\x22 style=\x22opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;\x22>      <div class=\x22progress-bar progress-bar-success\x22 style=\x22height: 20px; background-color: black; \x22></div>    </div>  </div></table>");
templateSystem.addTemplate("main", "<div id=\x22page\x22 style=\x22display: none;\x22 data-bind=\x22visible: true, css: { withToolbox: $root.showToolbox, withPreviewFrame: showPreviewFrame }\x22>  <div id=\x22main-edit-area\x22 data-bind=\x22click: function(obj, evt) { $root.selectBlock(null); return true; }, clickBubble: false\x22>    <!-- ko withProperties: { templateMode: 'wysiwyg', templateModeFallback: 'show' } -->    <div id=\x22main-wysiwyg-area\x22 data-bind=\x22wysiwygScrollfix: true, scrollable: true, fudroppable: { active: draggingImage }, css: { isdragging: dragging, isdraggingimg: draggingImage }, block: content\x22></div>    <!-- /ko -->  </div>  <div id=\x22toolbar\x22 class=\x22mo\x22 data-bind=\x22tooltips: {}\x22>    <!-- ko if: typeof $root.undo != 'undefined' -->    <span data-bind=\x22buttonset: { }\x22 class=\x22leftButtons\x22>    <a title=\x22Undo last operation\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Undo last operation') }, click: $root.undo.execute, clickBubble: false, button: { disabled: !$root.undo.enabled(), icons: { primary: 'fa fa-reply' }, label: $root.undo.name, text: true }\x22>UNDO</a>    <a title=\x22Redo last operation\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Redo last operation') }, click: $root.redo.execute, clickBubble: false, button: { disabled: !$root.redo.enabled(), icons: { primary: 'fa fa-share' }, label: $root.redo.name, text: true }\x22>REDO</a>    </span>    <!-- ko if: $root.debug -->    <a href=\x22#\x22 data-bind=\x22click: $root.undoReset, clickBubble: false, button: { disabled: !$root.undo.enabled() && !$root.redo.enabled(), label: 'reset', text: true }\x22>RESET</a>    <!-- /ko -->    <!-- /ko -->    <span>    <input id=\x22showGallery\x22 type=\x22checkbox\x22 data-bind=\x22checked: $root.showGallery, button: { refreshOn: $root.showGallery,     icons: { primary: 'fa fa-fw fa-picture-o', secondary: null }, text: true, label: $root.t('Gallery') }\x22><label title=\x22Show image gallery\x22 for=\x22showGallery\x22 data-bind=\x22attr: { title: $root.t('Show image gallery') }\x22>show gallery</label></input>    </span>    <input id=\x22previewFrameToggle\x22 type=\x22checkbox\x22 data-bind=\x22checked: $root.showPreviewFrame, button: { refreshOn: $root.showPreviewFrame, icons: { primary: 'fa fa-fw fa-tablet', secondary: null }, text: false, label: $root.t('Preview') }\x22><label title=\x22Show live preview\x22 for=\x22previewFrameToggle\x22 data-bind=\x22attr: { title: $root.t('Show live preview') }\x22>PREVIEW</label></input>    <!-- ko if: $root.debug -->    <a href=\x22#\x22 data-bind=\x22click: $root.export, clickBubble: false, button: { label: 'export', text: true }\x22>EXPORT</a>    <input type=\x22checkbox\x22 data-bind=\x22checked: $root.debug\x22 /> debug    <a href=\x22#\x22 data-bind=\x22click: $root.loadDefaultBlocks, clickBubble: false, button: { icons: { primary: 'fa fa-fw fa-upload' }, label: 'Default', text: true }\x22>LOAD BLOCKS</a>    [<a id=\x22subscriptionsCount\x22 href=\x22javascript:viewModel.loopSubscriptionsCount()\x22>subs</a>]    <!-- /ko -->    <span data-bind=\x22visible: false\x22>    <input type=\x22checkbox\x22 data-bind=\x22checked: $root.showToolbox\x22 /> toolbox    </span>    <div class=\x22rightButtons\x22>    <label for=\x22templateTitle\x22 style=\x22color:#eee; font-weight:700; margin-right:5px;\x22>TYTUŁ</label>    <input type=\x22text\x22 name=\x22template_title\x22 id=\x22templateTitle\x22 style=\x22margin-right:20px; width:200px; height:26px;\x22 />    <!-- ko if: typeof $root.save !== 'undefined' -->    <a title=\x22Save template\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Save template') }, click: $root.save.execute, clickBubble: false, button: { disabled: !$root.save.enabled(), icons: { primary: 'fa fa-fw fa-cloud-upload' }, label: $root.t($root.save.name), text: true }\x22>ZAPISZ</a>    <!-- /ko -->    <!-- ko if: typeof $root.test !== 'undefined' -->    <a title=\x22Show preview and send test\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Show preview and send test') }, click: $root.test.execute, clickBubble: false, button: { disabled: !$root.test.enabled(), icons: { primary: 'fa fa-fw fa-paper-plane' }, label: $root.t($root.test.name), text: true }\x22>TEST</a>    <!-- /ko -->    <!-- ko if: typeof $root.download !== 'undefined' -->    <form id=\x22downloadForm\x22 action=\x22#\x22 method=\x22POST\x22>    <input type=\x22hidden\x22 name=\x22action\x22 value=\x22download\x22 />    <input type=\x22hidden\x22 name=\x22filename\x22 value=\x22email.html\x22 />    <input type=\x22hidden\x22 name=\x22html\x22 id=\x22downloadHtmlTextarea\x22 />    <a title=\x22Download template\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Download template') }, click: $root.download.execute, clickBubble: false, button: { disabled: !$root.download.enabled(), icons: { primary: 'fa fa-fw fa-download' }, label: $root.t($root.download.name), text: true }\x22>ZAPISZ NA DYSK</a>    </form>    <!-- /ko -->    </div>  </div>  <!-- ko if: $root.showToolbox -->  <div id=\x22main-toolbox\x22 class=\x22mo\x22 data-bind=\x22scrollable: true, withProperties: { templateMode: 'edit' }\x22>    <div data-bind=\x22template: { name: 'toolbox' }\x22></div>  </div>  <!-- /ko -->    <div id=\x22main-preview\x22 class=\x22mo\x22 data-bind=\x22scrollable: true, if: $root.showPreviewFrame\x22>    <div id=\x22preview-toolbar\x22>      <div data-bind=\x22visible: $root.showPreviewFrame, buttonset: { }\x22 style=\x22display: inline-block\x22>        <input id=\x22previewLarge\x22 type=\x22radio\x22 name=\x22previewMode\x22 value=\x22large\x22 data-bind=\x22checked: $root.previewMode, button: { text: false, label: 'large', icons: { primary: 'fa fa-fw fa-desktop' } }\x22 />        <label for=\x22previewLarge\x22 title=\x22Large screen\x22 data-bind=\x22attr: { title: $root.t('Large screen') }\x22>Large screen</label>        <input id=\x22previewDesktop\x22 type=\x22radio\x22 name=\x22previewMode\x22 value=\x22desktop\x22 data-bind=\x22checked: $root.previewMode, button: { text: false, label: 'desktop', icons: { primary: 'fa fa-fw fa-tablet' } }\x22 />        <label for=\x22previewDesktop\x22 title=\x22Tablet\x22 data-bind=\x22attr: { title: $root.t('Tablet') }\x22>Tablet</label>        <input id=\x22previewMobile\x22 type=\x22radio\x22 name=\x22previewMode\x22 value=\x22mobile\x22 data-bind=\x22checked: $root.previewMode, button: { text: false, label: 'mobile', icons: { primary: 'fa fa-fw fa-mobile' } }\x22 />        <label for=\x22previewMobile\x22 title=\x22Smartphone\x22 data-bind=\x22attr: { title: $root.t('Smartphone') }\x22>Smartphone</label>      </div>    </div>    <div id=\x22frame-container\x22 data-bind=\x22css: { desktop: $root.previewMode() == 'desktop', mobile: $root.previewMode() == 'mobile', large: $root.previewMode() == 'large' }\x22>      <iframe data-bind=\x22bindIframe: $data\x22></iframe>    </div>  </div>  <div class=\x22mo\x22 id=\x22mo-body\x22></div>  <!-- TODO REMOVE ME  <div id=\x22incompatible-browser\x22 title=\x22Unsupported browser\x22 style=\x22display: none\x22 data-bind=\x22attr: { title: $root.t('Usupported browser') }, html: '<p>Your browser is not supported.</p><p>Use a different browser or try updaring your browser.</p><p>Supported browsers: <ul><li>Internet Explorer &gt;= 10</li><li>Google Chrome &gt;= 30</li><li>Apple Safari &gt;= 5</li><li>Mozilla Firefix &gt;= 20</li></ul></p>'\x22>    Unsupported browser  </div>  -->  <div id=\x22incompatible-template\x22 title=\x22Saved model is obsolete\x22 style=\x22display: none\x22 data-bind=\x22attr: { title: $root.t('Saved model is obsolete') }, html: $root.t('<p>The saved model has been created with a previous, non completely compatible version, of the template</p><p>Some content or style in the model <b>COULD BE LOST</b> if you will <b>save</b></p><p>Contact us for more informations!</p>')\x22>    Incompatible template  </div>  <div id=\x22fake-image-editor\x22 title=\x22Fake image editor\x22 style=\x22display: none\x22 data-bind=\x22attr: { title: $root.t('Fake image editor') }, html: $root.t('<p>Fake image editor</p>')\x22>    <p>Fake image editor</p>  </div></div><!-- ko if: $root.logoPath --><div id=\x22loading\x22 class=\x22loading\x22 style=\x22display: block; width: 300px; text-align: center; height: 32px; position: absolute; top:0; bottom: 0; left: 0; right: 0;  margin: auto;\x22 data-bind=\x22attr: { style: 'position: absolute; top: 5px; left: 6px; z-index: 150;'}, css: { loading: false }\x22>  <a href=\x22/\x22 data-bind=\x22attr: { href: $root.logoUrl, alt: $root.logoAlt }\x22><img data-bind=\x22attr: { src: $root.logoPath }\x22 width=\x2232\x22 height=\x2232\x22 alt=\x22mosaico\x22 border=\x220\x22 /></a>  <div style=\x22opacity: 0\x22 data-bind=\x22visible: false\x22>Oppps... !!</div></div><!-- /ko -->");
templateSystem.addTemplate("toolbox", "<div id=\x22tooltabs\x22 class=\x22tabs_horizontal button_color\x22 data-bind=\x22tabs: { active: $root.selectedTool }\x22>  <ul>    <li data-bind=\x22tooltips: {}\x22><a title=\x22Blocks ready to be added to the template\x22 data-local=\x22true\x22 href=\x22#toolblocks\x22 data-bind=\x22attr: { title: $root.t('Blocks ready to be added to the template') }\x22><i class=\x22fa fa-fw fa-cubes\x22></i> <span data-bind=\x22html: $root.t('Blocks')\x22>Blocks</span></a></li>    <li data-bind=\x22tooltips: {}\x22><a title=\x22Edit content options\x22 href=\x22#toolcontents\x22 data-local=\x22true\x22 data-bind=\x22attr: { title: $root.t('Edit content options') }\x22><i class=\x22fa fa-fw fa-pencil\x22></i> <span data-bind=\x22html: $root.t('Content')\x22>Content</span></a></li>    <li data-bind=\x22tooltips: {}\x22><a title=\x22Edit style options\x22 href=\x22#toolstyles\x22 data-local=\x22true\x22 data-bind=\x22attr: { title: $root.t('Edit style options') }\x22><i class=\x22fa fa-fw fa-paint-brush\x22></i> <span data-bind=\x22html: $root.t('Style')\x22>Style</span></a></li>  </ul>  <div id=\x22toolblocks\x22 data-bind=\x22scrollable: true\x22>    <div class=\x22block-list\x22 data-bind=\x22foreach: blockDefs\x22 style=\x22text-align: center\x22>      <div class=\x22draggable-item\x22 data-bind=\x22withProperties: { templateMode: 'show' }\x22>        <div class=\x22block\x22 data-bind=\x22extdraggable: { connectClass: 'sortable-blocks-edit', data: $data, dropContainer: '#main-wysiwyg-area', dragging: $root.dragging, 'options': { handle: '.handle', distance: 10, 'appendTo': '#page' } }, click: $root.addBlock\x22 style=\x22position: relative;\x22>          <div title=\x22Click or drag to add this block to the template\x22 class=\x22handle\x22 data-bind=\x22attr: { title: $root.t('Click or drag to add this block to the template') }, tooltips: {}\x22></div>          <img data-bind=\x22attr: { alt: $root.t('Block __name__', { name: ko.utils.unwrapObservable(type) }), src: $root.templatePath('edres/'+ko.utils.unwrapObservable(type)+'.png') }\x22 alt=\x22Block __name__\x22 />        </div>        <a href=\x22#\x22 class=\x22addblockbutton\x22 data-bind=\x22click: $root.addBlock, button: { label: $root.t('Add') }\x22>Add</a>      </div>    </div>  </div>  <div id=\x22toolcontents\x22 data-bind=\x22scrollable: true\x22>    <!-- ko if: $root.selectedBlock() !== null -->    <div data-bind=\x22block: $root.selectedBlock\x22></div>    <!-- /ko -->    <!-- ko if: $root.selectedBlock() == null -->    <div class=\x22noSelectedBlock\x22 data-bind=\x22text: $root.t('By clicking on message parts you will select a block and content options, if any, will show here')\x22>By clicking on message parts you will select a block and content options, if any, will show here</div>    <!-- /ko -->    <!-- ko block: content --><!-- /ko -->  </div>    <div id=\x22toolstyles\x22 data-bind=\x22scrollable: true, withProperties: { templateMode: 'styler' }\x22>    <!-- ko if: typeof $root.content().theme === 'undefined' || typeof $root.content().theme().scheme === 'undefined' || $root.content().theme().scheme() === 'custom' -->      <!-- ko if: $root.selectedBlock() !== null -->      <div data-bind=\x22block: $root.selectedBlock, css: { workLocal: $root.selectedBlock().customStyle, workGlobal: typeof $root.selectedBlock().customStyle === 'undefined' || !$root.selectedBlock().customStyle() }\x22></div>      <!-- /ko -->      <!-- ko if: $root.selectedBlock() == null -->      <div class=\x22noSelectedBlock\x22 data-bind=\x22text: $root.t('By clicking on message parts you will select a block and style options, if available, will show here')\x22>By clicking on message parts you will select a block and style options, if available, will show here</div>      <!-- /ko -->      <div class=\x22workGlobalContent\x22>      <!-- ko block: content --><!-- /ko -->      </div>    <!-- /ko -->  </div></div>        <div id=\x22toolimages\x22 class=\x22slidebar\x22 data-bind=\x22scrollable: true, css: { hidden: $root.showGallery() === false }\x22>  <div class=\x22close\x22 data-bind=\x22click: $root.showGallery.bind($element, false);\x22>X</div>  <span class=\x22pane-title\x22 data-bind=\x22text: $root.t('Gallery:')\x22>Gallery:</span>  <div data-drop-content=\x22Drop here\x22 class=\x22img-dropzone pane uploadzone\x22 data-bind=\x22attr: { 'data-drop-content': $root.t('Drop here') }, fudroppable: { activeClass: 'ui-state-highlight', hoverClass: 'ui-state-draghover' }\x22>  <div class=\x22mo-uploadzone\x22 style=\x22position: relative; padding: 2em; border: 2px dotted #808080\x22>     <input class=\x22fileupload\x22 type=\x22file\x22 multiple name=\x22files[]\x22 data-bind=\x22fileupload: { onerror: $root.notifier.error, onfile: $root.loadImage }\x22 style=\x22z-index: 10; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block\x22>     <span data-bind=\x22text: $root.t('Click or drag files here')\x22>Click or drag files here</span>     <div class=\x22workzone\x22 style=\x22position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;\x22>       <div class=\x22progress\x22 style=\x22opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;\x22>         <div class=\x22progress-bar progress-bar-success\x22 style=\x22height: 20px; background-color: black; \x22></div>       </div>     </div>  </div>  </div>  <!-- ko if: $root.showGallery() -->  <div id=\x22toolimagestab\x22 class=\x22tabs_horizontal\x22 data-bind=\x22tabs: { active: $root.selectedImageTab }\x22>    <ul>      <li data-bind=\x22tooltips: {}\x22><a title=\x22Session images\x22 data-local=\x22true\x22 href=\x22#toolimagesrecent\x22 data-bind=\x22attr: { title: $root.t('Session images') }, text: $root.t('Recents')\x22>Recents</a></li>      <li data-bind=\x22tooltips: {}\x22><a title=\x22Remote gallery\x22 data-local=\x22true\x22 href=\x22#toolimagesgallery\x22 data-bind=\x22attr: { title: $root.t('Remote gallery') }, text: $root.t('Gallery')\x22>Gallery</a></li>    </ul>    <div id=\x22toolimagesrecent\x22>      <!-- ko if: galleryRecent().length == 0 --><div class=\x22galleryEmpty\x22 data-bind=\x22text: $root.t('No images uploaded, yet')\x22>No images uploaded, yet</div><!-- /ko -->      <!-- ko template: {name: 'gallery-images', data: { items: galleryRecent } } --># recent gallery #<!-- /ko -->    </div>    <div id=\x22toolimagesgallery\x22 style=\x22text-align: center\x22>    <!-- ko if: $root.galleryLoaded() === false --><a class=\x22loadbutton\x22 title=\x22Show images from the gallery\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Show images from the gallery') }, click: $root.loadGallery, button: { disabled: $root.galleryLoaded, icons: { primary: 'fa fa-fw fa-picture-o' }, label: $root.galleryLoaded() == 'loading' ? $root.t('Loading...') : $root.t('Load gallery'), text: true }\x22># load gally #</a><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === 'loading' --><div class=\x22galleryEmpty\x22 data-bind=\x22text: $root.t('Loading gallery...')\x22>Loading gallery...</div><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === 0 --><div class=\x22galleryEmpty\x22 data-bind=\x22text: $root.t('The gallery is empty')\x22>The gallery is empty</div><!-- /ko -->    <!-- ko template: {name: 'gallery-images', data: { items: galleryRemote } } --># remote gallery #<!-- /ko -->    </div>  </div>  <!-- /ko --></div><div id=\x22tooldebug\x22 class=\x22slidebar\x22 data-bind=\x22css: { hidden: $root.debug() === false }\x22>  <div class=\x22close\x22 data-bind=\x22click: $root.debug.bind($element, false);\x22>X</div>    <!-- ko if: $root.debug -->  Content:  <pre data-bind='text: ko.toJSON(content, null, 2)' style=\x22overflow: auto; height: 20%\x22></pre>  BlockDefs:  <pre data-bind='text: ko.toJSON(blockDefs, null, 2)' style=\x22overflow: auto; height: 20%\x22></pre>  <!-- /ko -->  <a href=\x22#\x22 data-bind=\x22click: $root.exportHTMLtoTextarea.bind($element, '#outputhtml'); clickBubble: false, button: { text: true, label:'Generate' }\x22>Output</a>  <a href=\x22#\x22 data-bind=\x22click: $root.exportJSONtoTextarea.bind($element, '#outputhtml'); clickBubble: false, button: { text: true, label:'Export' }\x22>Export</a>  <a href=\x22#\x22 data-bind=\x22click: $root.importJSONfromTextarea.bind($element, '#outputhtml'); clickBubble: false, button: { text: true, label:'Import' }\x22>Import</a>  <textarea id=\x22outputhtml\x22 rows=\x2210\x22 style=\x22width: 100%;\x22></textarea></div><div id=\x22tooltheme\x22 class=\x22ui-widget slidebar\x22 data-bind=\x22css: { hidden: $root.showTheme() === false }\x22>  <div class=\x22close\x22 data-bind=\x22click: $root.showTheme.bind($element, false);\x22>X</div>    <!-- ko withProperties: { templateMode: 'styler' } -->    <!-- ko if: $root.showTheme -->      <!-- ko block: $root.content().theme --><!-- /ko -->    <!-- /ko -->  <!-- /ko --></div>");
});

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
"use strict";
/* global global: false */
/* global XMLHttpRequest: false */

var templateLoader = require('./template-loader.js');
var console = require("./../../bower_components/console-browserify/index.js");
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
require("./ko-bindings.js");
var performanceAwareCaller = require("./timed-call.js").timedCall;

var addUndoStackExtensionMaker = require("./undomanager/undomain.js");
var colorPlugin = require("./ext/color.js");

var localStorageLoader = require("./ext/localstorage.js");

function _canonicalize(url) {
  var div = global.document.createElement('div');
  div.innerHTML = "<a></a>";
  div.firstChild.href = url; // Ensures that the href is properly escaped
  div.innerHTML = div.innerHTML; // Run the current innerHTML back through the parser
  return div.firstChild.href;
}

var applyBindingOptions = function(options, ko) {
  // push "convertedUrl" method to the wysiwygSrc binding
  ko.bindingHandlers.wysiwygSrc.convertedUrl = function(src, method, width, height) {
    var imgProcessorBackend = options.imgProcessorBackend ? options.imgProcessorBackend : './upload';
    var backEndMatch = imgProcessorBackend.match(/^(https?:\/\/[^\/]*\/).*$/);
    var srcMatch = src.match(/^(https?:\/\/[^\/]*\/).*$/);
    if (backEndMatch === null || (srcMatch !== null && backEndMatch[1] == srcMatch[1])) {
      return imgProcessorBackend + "?src=" + encodeURIComponent(src) + "&method=" + encodeURIComponent(method) + "&params=" + encodeURIComponent(width + "," + height);
    } else {
      console.log("Cannot apply backend image resizing to non-local resources ", src, method, width, height, backEndMatch, srcMatch);
      return src + "?method=" + method + "&width=" + width + (height !== null ? "&height=" + height : '');
    }
  };

  ko.bindingHandlers.wysiwygSrc.placeholderUrl = function(width, height, text) {
    return options.imgProcessorBackend + "?method=" + 'placeholder' + "&params=" + width + encodeURIComponent(",") + height;
  };

  // pushes custom tinymce configurations from options to the binding
  if (options && options.tinymceConfig)
    ko.bindingHandlers.wysiwyg.standardOptions = options.tinymceConfig;
  if (options && options.tinymceConfigFull)
    ko.bindingHandlers.wysiwyg.fullOptions = options.tinymceConfigFull;
};

var start = function(options, templateFile, templateMetadata, jsorjson, customExtensions) {

  templateLoader.fixPageEvents();

  var fileUploadMessagesExtension = function(vm) {
    var fileuploadConfig = {
      messages: {
        unknownError: vm.t('Unknown error'),
        uploadedBytes: vm.t('Uploaded bytes exceed file size'),
        maxNumberOfFiles: vm.t('Maximum number of files exceeded'),
        acceptFileTypes: vm.t('File type not allowed'),
        maxFileSize: vm.t('File is too large'),
        minFileSize: vm.t('File is too small'),
        post_max_size: vm.t('The uploaded file exceeds the post_max_size directive in php.ini'),
        max_file_size: vm.t('File is too big'),
        min_file_size: vm.t('File is too small'),
        accept_file_types: vm.t('Filetype not allowed'),
        max_number_of_files: vm.t('Maximum number of files exceeded'),
        max_width: vm.t('Image exceeds maximum width'),
        min_width: vm.t('Image requires a minimum width'),
        max_height: vm.t('Image exceeds maximum height'),
        min_height: vm.t('Image requires a minimum height'),
        abort: vm.t('File upload aborted'),
        image_resize: vm.t('Failed to resize image'),
        generic: vm.t('Unexpected upload error')
      }
    };
    // fileUpload options.
    if (options && options.fileuploadConfig)
      fileuploadConfig = $.extend(true, fileuploadConfig, options.fileuploadConfig);

    ko.bindingHandlers['fileupload'].extendOptions = fileuploadConfig;

  };

  var simpleTranslationPlugin = function(vm) {
    if (options && options.strings) {
      vm.t = function(key, objParam) {
        var res = options.strings[key];
        if (typeof res == 'undefined') {
          console.warn("Missing translation string for",key,": using default string");
          res = key;
        }
        return vm.tt(res, objParam);
      };
    }
  };

  var extensions = [addUndoStackExtensionMaker(performanceAwareCaller), colorPlugin, simpleTranslationPlugin];
  if (typeof customExtensions !== 'undefined')
    for (var k = 0; k < customExtensions.length; k++) extensions.push(customExtensions[k]);
  extensions.push(fileUploadMessagesExtension);

  var galleryUrl = options.fileuploadConfig ? options.fileuploadConfig.url : '/upload/';
  applyBindingOptions(options, ko);

  // TODO what about appending to another element?
  $("<!-- ko template: 'main' --><!-- /ko -->").appendTo(global.document.body);

  // templateFile may override the template path in templateMetadata
  if (typeof templateFile == 'undefined' && typeof templateMetadata != 'undefined') {
    templateFile = templateMetadata.template;
  }
  // TODO canonicalize templateFile to absolute or relative depending on "relativeUrlsException" plugin

  templateLoader.load(performanceAwareCaller, templateFile, templateMetadata, jsorjson, extensions, galleryUrl);

};

var initFromLocalStorage = function(options, hash_key, customExtensions) {
  try {
    var lsData = localStorageLoader(hash_key, options.emailProcessorBackend);
    var extensions = typeof customExtensions !== 'undefined' ? customExtensions : [];
    extensions.push(lsData.extension);
    var template = _canonicalize(lsData.metadata.template);
    start(options, template, lsData.metadata, lsData.model, extensions);
  } catch (e) {
    console.error("TODO not found ", hash_key, e);
  }
};

var init = function(options, customExtensions) {

  var hash = global.location.hash ? global.location.href.split("#")[1] : undefined;

  // Loading from configured template or configured metadata
  if (options && (options.template || options.data)) {
    if (options.data) {
      var data = JSON.parse(options.data);
      start(options, undefined, data.metadata, data.content, customExtensions);
    } else {
      start(options, options.template, undefined, undefined, customExtensions);
    }
    // Loading from LocalStorage (if url hash has a 7chars key)
  } else if (hash && hash.length == 7) {
    initFromLocalStorage(options, hash, customExtensions);
    // Loading from template url as hash (if hash is not a valid localstorage key)
  } else if (hash) {
    start(options, _canonicalize(hash), undefined, undefined, customExtensions);
  } else {
    return false;
  }
  return true;
};

module.exports = {
  isCompatible: templateLoader.isCompatible,
  init: init,
  start: start
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./ext/color.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/ext/color.js","./ext/localstorage.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/ext/localstorage.js","./ko-bindings.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/ko-bindings.js","./template-loader.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/template-loader.js","./timed-call.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/timed-call.js","./undomanager/undomain.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/undomanager/undomain.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/bind-iframe.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");

// @see also script-template.js pushTemplate
var addScriptTemplate = function(doc, templateName, templateMarkup) {
  var scriptTag = doc.createElement('script');
  scriptTag.setAttribute('type', 'text/html');
  scriptTag.setAttribute('id', templateName);
  scriptTag.text = templateMarkup;
  doc.body.appendChild(scriptTag);
  return scriptTag;
  // $('<script type="text/html"></sc' + 'ript>').text(templateMarkup).attr('id', templateName).appendTo($('body'));
};

// used for live preview in iframe.
ko.bindingHandlers.bindIframe = {
  // tpl will be overriden with the structure parsed by the input template.
  tpl: "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body><div data-bind=\"block: content\"></div></body>\r\n</html>\r\n",
  init: function(element, valueAccessor) {
    function bindIframe(local) {
      try {
        var iframe = element.contentDocument;
        iframe.open();
        iframe.write(ko.bindingHandlers.bindIframe.tpl);
        iframe.close();

        try {
          var iframedoc = iframe.body;
          if (iframedoc) {
            // scripts have to be duplicated (maybe this is not needed anymore since using string-templates)
            var templates = element.contentWindow.parent.document.getElementsByTagName('script');
            for (var i = 0; i < templates.length; i++) {
              if (templates[i].getAttribute('type') == 'text/html' && templates[i].getAttribute('id')) {
                addScriptTemplate(iframe, templates[i].getAttribute('id'), templates[i].innerHTML);
              }
            }

            var html = iframe.getElementsByTagName("HTML");

            ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
              ko.cleanNode(html[0] || iframedoc);
            });

            ko.applyBindings(valueAccessor(), html[0] || iframedoc);
          } else {
            console.log("no iframedoc", local);
          }
        } catch (e) {
          console.log("error reading iframe.body", e, local);
          throw e;
        }
      } catch (e) {
        console.log("error reading iframe contentDocument", e, local);
        throw e;
        // ignored
      }
    }
    bindIframe("first call");
    // older browsers needed this
    // ko.utils.registerEventHandler(element, 'load', bindIframe);
  }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/blocks.js":[function(require,module,exports){
(function (global){
"use strict";
/* globals global:false */

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");


ko.bindingHandlers['withProperties'] = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    // Make a modified binding context, with a extra properties, and apply it to descendant elements
    var childBindingContext = bindingContext.createChildContext(
      bindingContext.$rawData,
      null, // Optionally, pass a string here as an alias for the data item in descendant contexts
      function(context) {
        ko.utils.extend(context, valueAccessor());
      }
    );
    ko.applyBindingsToDescendants(childBindingContext, element);

    // Also tell KO *not* to bind the descendants itself, otherwise they will be bound twice
    return {
      controlsDescendantBindings: true
    };
  }
};
ko.virtualElements.allowedBindings['withProperties'] = true;

ko.bindingHandlers['log'] = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    console.log("log", valueAccessor());
  }
};


ko.bindingHandlers['block'] = {

  templateExists: function(id) {
    var el = global.document.getElementById(id);
    if (el) return true;
    else return false;
  },

  _chooseTemplate: function(isArray, prefix, action, fallback) {
    var id = prefix + '-' + action;
    if (ko.bindingHandlers['block'].templateExists(id)) return id;
    if (typeof fallback != 'undefined' && fallback !== null) return ko.bindingHandlers['block']._chooseTemplate(isArray, prefix, fallback);
    else {
      var fallBackId = isArray ? 'array' : 'object-' + action;
      if (ko.bindingHandlers['block'].templateExists(fallBackId)) return fallBackId;
      else throw "cannot find template for " + id + "/" + fallBackId;
    }
  },

  // compute displayMode depending on templateMode set using "withProperties" binding.
  _displayMode: function(unwrapped, bindingContext) {
    var prefix = typeof unwrapped.type != 'undefined' ? ko.utils.unwrapObservable(unwrapped.type) : 'notablock-' + typeof(unwrapped);
    var isArray = typeof unwrapped.splice !== 'undefined';
    var templateMode = bindingContext.templateMode ? bindingContext.templateMode : 'show';
    return ko.bindingHandlers['block']._chooseTemplate(isArray, prefix, templateMode, bindingContext.templateModeFallback);
  },

  _makeTemplateValueAccessor: function(valueAccessor, bindingContext) {
    return function() {
      var value = valueAccessor(),
        unwrappedValue = ko.utils.peekObservable(value); // Unwrap without setting a dependency here

      // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
      var modelValue;
      var template;

      if ((!unwrappedValue) || (typeof unwrappedValue.data != 'object' && typeof unwrappedValue.data != 'function')) {
        modelValue = value;
      } else {
        modelValue = unwrappedValue.data;
        if (typeof unwrappedValue.template != 'undefined') {
          var templateParam = ko.utils.unwrapObservable(unwrappedValue.template);
          var templateMode = bindingContext.templateMode ? bindingContext.templateMode : 'show';
          template = ko.bindingHandlers['block']._chooseTemplate(false, templateParam, templateMode, bindingContext.templateModeFallback);
        }
      }

      var unwrappedModelValue = ko.utils.unwrapObservable(modelValue);
      if (ko.isObservable(unwrappedModelValue)) console.log("doubleObservable", unwrappedModelValue);

      if (typeof template == 'undefined') {
        // NOTE IE8 used to break here, but we don't support it anymore, so maybe this is not needed.
        if (modelValue === undefined) {
          template = 'empty';
        } else {
          try {
            template = ko.bindingHandlers['block']._displayMode(unwrappedModelValue, bindingContext);
          } catch (e) {
            console.log(e, unwrappedModelValue, bindingContext['$data'], bindingContext.templateMode);
            throw e;
          }
        }
      }

      return {
        'name': template,
        'data': modelValue,
        'templateEngine': ko.nativeTemplateEngine.instance
      };
    };
  },

  'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    if (typeof valueAccessor() === 'undefined') console.log("found a null block: check ending commas in arrays defs in IE");
    var newValueAccessor = ko.bindingHandlers['block']._makeTemplateValueAccessor(valueAccessor, bindingContext);
    return ko.bindingHandlers['template']['init'](element, newValueAccessor);
  },
  'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var newValueAccessor = ko.bindingHandlers['block']._makeTemplateValueAccessor(valueAccessor, bindingContext);
    return ko.bindingHandlers['template']['update'](element, newValueAccessor, allBindings, viewModel, bindingContext);
  }
};
ko.expressionRewriting.bindingRewriteValidators['block'] = false; // Can't rewrite control flow bindings
ko.virtualElements.allowedBindings['block'] = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/choose-template.js":[function(require,module,exports){
"use strict";

// script template is the one provided by KO and deals with tempaltes defined as <script type=text/html.
// string template defines them in memory and avoids polluting the HTML: seems to work better in Mosaico.

module.exports = require('./string-template.js');
// module.exports = require('./script-template.js');
},{"./string-template.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/string-template.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/colorpicker.js":[function(require,module,exports){
(function (global){
"use strict";
/* global global: false */

require("./../../../bower_components/evol-colorpicker/js/evol.colorpicker.min.js");

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var kojqui = (typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null);


var ColorPicker = function() {
  kojqui.BindingHandler.call(this, 'colorpicker');
};
ColorPicker.prototype = kojqui.utils.createObject(kojqui.BindingHandler.prototype);
ColorPicker.prototype.constructor = ColorPicker;

ColorPicker.prototype.init = function(element, valueAccessor, allBindings) {
  var va = valueAccessor();
  var value = va.color;

  // In order to have a correct dependency tracking in "ifSubs" we have to ensure we use a single computer for each editable
  // property. Given this binding needs 2 of them, we create a computed so to "proxy" the dependencies.
  var newDO = ko.computed({
    read: value,
    write: value,
    disposeWhenNodeIsRemoved: element
  });
  var newVA = function() {
    return newDO;
  };

  ko.bindingHandlers.value.init(element, newVA, allBindings);

  var changePropagator = function(event, color) {
    if (typeof color !== 'undefined') newDO(color);
  };
  $(element).on('change.color', changePropagator);

  ko.computed({
    read: function() {
      var opt = {
        color: ko.utils.unwrapObservable(newDO),
        showOn: 'button'
      };
      for (var prop in va)
        if (prop !== 'color' && va.hasOwnProperty(prop)) opt[prop] = ko.utils.unwrapObservable(va[prop]);
      $(element).colorpicker(opt);
    },
    disposeWhenNodeIsRemoved: element
  });

  ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
    $(element).off('change.color', changePropagator);
    $(element).colorpicker('destroy');
  });

};
kojqui.utils.register(ColorPicker);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/evol-colorpicker/js/evol.colorpicker.min.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/evol-colorpicker/js/evol.colorpicker.min.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/csstext.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

/* https://github.com/knockout/knockout/issues/1171 */
ko.bindingHandlers.cssText = {
  'update': function(node, valueAccessor, allBindings) {
    var text = ko.utils.unwrapObservable(valueAccessor());
    try {
      node.innerText = text;
    } catch (e) {
      if (!node.styleSheet) node.innerHTML = "a{}";
      node.styleSheet.cssText = text;
    }
  }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/droppable.js":[function(require,module,exports){
(function (global){
"use strict";

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

/* knockout droppable, with simplified UMD */
;(function(factory) {
  factory(ko, $);
})(function(ko, $) {
  var ITEMKEY = "ko_sortItem",
    INDEXKEY = "ko_sourceIndex",
    LISTKEY = "ko_sortList",
    PARENTKEY = "ko_parentList",
    DRAGKEY = "ko_dragItem",
    unwrap = ko.utils.unwrapObservable,
    dataGet = ko.utils.domData.get,
    dataSet = ko.utils.domData.set;

  ko.bindingHandlers.droppable = {
    init: function(element, valueAccessor, allBindingsAccessor, data, context) {
      var $element = $(element),
        value = ko.utils.unwrapObservable(valueAccessor()) || {},
        droppable = {},
        dropActual;

      $.extend(true, droppable, ko.bindingHandlers.droppable);
      if (value.data) {
        if (value.options && droppable.options) {
          ko.utils.extend(droppable.options, value.options);
          delete value.options;
        }
        ko.utils.extend(droppable, value);
      } else {
        droppable.data = value;
      }

      dropActual = droppable.options.drop;

      $element.droppable(ko.utils.extend(droppable.options, {
        drop: function(event, ui) {

          var el = ui.draggable[0],
            item = dataGet(el, ITEMKEY) || dataGet(el, DRAGKEY);

          if (item) {

            if (item.clone) {
              item = item.clone();
            }

            if (droppable.dragged) {
              item = droppable.dragged.call(this, item, event, ui) || item;
            }

            if (droppable.data) {
              droppable.data(item);
            }

          }

          if (dropActual) {
            dropActual.apply(this, arguments);
          }

        }
      }));

      //handle enabling/disabling
      if (droppable.isEnabled !== undefined) {
        ko.computed({
          read: function() {
            $element.droppable(ko.utils.unwrapObservable(droppable.isEnabled) ? "enable" : "disable");
          },
          disposeWhenNodeIsRemoved: element
        });
      }

    },
    update: function(element, valueAccessor, allBindingsAccessor, data, context) {

    },
    targetIndex: null,
    afterMove: null,
    beforeMove: null,
    options: {}
  };
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/eventable.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");

/* utility for togetherjs */
ko.bindingHandlers.focusable = {
  'focus': function() {},
  'blur': function() {},
  'init': function(element) {
    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      $(element).off("focusin", ko.bindingHandlers.focusable.focus);
      $(element).off("focusout", ko.bindingHandlers.focusable.blur);
    });

    $(element).on("focusin", ko.bindingHandlers.focusable.focus);
    $(element).on("focusout", ko.bindingHandlers.focusable.blur);

  }
};

ko.bindingHandlers.scrollable = {
  'scroll': function() {},
  'init': function(element) {
    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      $(element).off("scroll", ko.bindingHandlers.scrollable.scroll);
    });

    $(element).on("scroll", ko.bindingHandlers.scrollable.scroll);

  }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/extender-pagination.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

ko.extenders.paging = function(target, pageSize) {
  var _pageSize = ko.observable(pageSize || 10),
    // default pageSize to 10
    _currentPage = ko.observable(1); // default current page to 1
  target.pageSize = ko.computed({
    read: _pageSize,
    write: function(newValue) {
      if (newValue > 0) {
        _pageSize(newValue);
      } else {
        _pageSize(10);
      }
    }
  });

  target.currentPage = ko.computed({
    read: _currentPage,
    write: function(newValue) {
      if (newValue > target.pageCount()) {
        _currentPage(target.pageCount());
      } else if (newValue <= 0) {
        _currentPage(1);
      } else {
        _currentPage(newValue);
      }
    }
  });

  target.pageCount = ko.computed(function() {
    return Math.ceil(target().length / target.pageSize()) || 1;
  });

  target.currentPageData = ko.computed(function() {
    var pageSize = _pageSize(),
      pageIndex = _currentPage(),
      startIndex = pageSize * (pageIndex - 1),
      endIndex = pageSize * pageIndex;

    return target().slice(startIndex, endIndex);
  });

  target.moveFirst = function() {
    target.currentPage(1);
  };
  target.movePrevious = function() {
    target.currentPage(target.currentPage() - 1);
  };
  target.moveNext = function() {
    target.currentPage(target.currentPage() + 1);
  };
  target.moveLast = function() {
    target.currentPage(target.pageCount());
  };

  return target;
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/extsortables.js":[function(require,module,exports){
(function (global){
"use strict";
/* globals global: true */

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");
require("./../../../bower_components/knockout-sortable/build/knockout-sortable.min.js");

var isDraggingHelper = function(writable, e) {
  if (writable()) {
    if (e.type == writable() + 'stop') writable(false);
  } else {
    if (e.type == 'dragstart' || e.type == 'sortstart') writable(e.type.substring(0, 4));
  }
};

var makeExtendedValueAccessor = function(valueAccessor) {
  return function() {
    var modelValue = valueAccessor(),
      unwrappedValue = ko.utils.peekObservable(modelValue); // Unwrap without setting a dependency here

    ko.utils.unwrapObservable(modelValue);

    if (modelValue.options == 'undefined') {
      modelValue.options = {};
    }



    var origStart = modelValue.options.start;
    modelValue.options.start = function(e, ui) {
      if (typeof modelValue.dragging != 'undefined' && ko.isWritableObservable(modelValue.dragging)) isDraggingHelper(modelValue.dragging, e);
      if (typeof modelValue.dropContainer != 'undefined') {
        modelValue.scrollInterval = global.setInterval(function() {
          var foo = $(modelValue.dropContainer).scrollTop();
          $(modelValue.dropContainer).scrollTop(foo + modelValue.adding);
        }, 20);
      }
      if (typeof origStart != 'undefined') return origStart(e, ui);
    };
    var origStop = modelValue.options.stop;
    modelValue.options.stop = function(e, ui) {
      if (typeof modelValue.dragging != 'undefined' && ko.isWritableObservable(modelValue.dragging)) isDraggingHelper(modelValue.dragging, e);
      if (typeof modelValue.dropContainer != 'undefined') {
        global.clearInterval(modelValue.scrollInterval);
      }
      if (typeof origStop != 'undefined') return origStop(e, ui);
    };
    var origDrag = modelValue.options.drag;
    modelValue.options.drag = function(e, ui) {
      if (typeof modelValue.dropContainer != 'undefined') {
        var top = e.pageY - $(modelValue.dropContainer).offset().top;
        var bottom = top - $(modelValue.dropContainer).height();
        // Handle scrolling speed depending on distance from border.
        if (top < -20) {
          modelValue.adding = -20;
          // console.log("<<<");
        } else if (top < 0) {
          modelValue.adding = -10;
          // console.log("<<");
        } else if (top < 10) {
          modelValue.adding = -5;
          // console.log("<");
        } else if (bottom > 20) {
          modelValue.adding = 20;
          // console.log(">>>");
        } else if (bottom > 0) {
          modelValue.adding = 10;
          // console.log(">>");
        } else if (bottom > -10) {
          modelValue.adding = 5;
          // console.log(">");
        } else {
          modelValue.adding = 0;
        }
      }
      if (typeof origDrag != 'undefined') return origDrag(e, ui);
    };

    return modelValue;
  };
};

ko.bindingHandlers.extsortable = {
  init: function(element, valueAccessor, allBindingsAccessor, data, context) {
    return ko.bindingHandlers.sortable.init(element, makeExtendedValueAccessor(valueAccessor), allBindingsAccessor, data, context);
  },
  update: function(element, valueAccessor, allBindingsAccessor, data, context) {
    return ko.bindingHandlers.sortable.update(element, makeExtendedValueAccessor(valueAccessor), allBindingsAccessor, data, context);
  }
};

ko.bindingHandlers.extdraggable = {
  init: function(element, valueAccessor, allBindingsAccessor, data, context) {
    return ko.bindingHandlers.draggable.init(element, makeExtendedValueAccessor(valueAccessor), allBindingsAccessor, data, context);
  },
  update: function(element, valueAccessor, allBindingsAccessor, data, context) {
    return ko.bindingHandlers.draggable.update(element, makeExtendedValueAccessor(valueAccessor), allBindingsAccessor, data, context);
  }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/knockout-sortable/build/knockout-sortable.min.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-sortable/build/knockout-sortable.min.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/fileupload.js":[function(require,module,exports){
(function (global){
"use strict";
/* global global: false, Image: false */

// This module depends on those files, but it doesn't have a direct dependency, so we don't require them here.

//require("blueimp-canvas-to-blob");
//require("jquery-file-upload/js/jquery.iframe-transport.js");
//require("jquery-file-upload/js/jquery.fileupload.js");
//require("jquery-file-upload/js/jquery.fileupload-process.js");
//require("jquery-file-upload/js/jquery.fileupload-image.js");
//require("jquery-file-upload/js/jquery.fileupload-validate.js");

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");

// experimental image preloading.
ko.bindingHandlers['preloader'] = {
  init: function(element, valueAccessor) {
    var value = valueAccessor();
    if (typeof value.preloaded == 'undefined') {
      value.preloaded = ko.observable("");

      var preloader = function(newValue) {
        if (newValue != value.preloaded()) {
          if (newValue !== '') {
            var img = new Image();
            img.onload = function() {
              value.preloaded(newValue);
            };
            img.onerror = function() {
              value.preloaded(newValue);
            };
            img.src = newValue;
          } else {
            value.preloaded(newValue);
          }
        }
      };

      value.subscribe(preloader);
      preloader(value());
    }
  }
};

// TODO we don't use advattr and advstyle, maybe we should simply remove this code.
ko.bindingHandlers['advattr'] = {
  'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var value = ko.utils.unwrapObservable(valueAccessor() || {});
    ko.utils.objectForEach(value, function(attrName, attrValueAccessor) {
      var attrValue = element.getAttribute(attrName);

      if (ko.isWriteableObservable(attrValueAccessor)) {
        var oldValue = attrValueAccessor();
        if (oldValue != attrValue) {
          attrValueAccessor(attrValue);
          if (oldValue !== null) {
            console.log("AdvAttr found a value different from the default", attrName, oldValue, attrValue);
          }
        }
      }
    });
  },
  'update': function(element, valueAccessor, allBindings) {
    var value = ko.utils.unwrapObservable(valueAccessor()) || {};
    ko.utils.objectForEach(value, function(attrName, attrValue) {
      attrValue = ko.utils.unwrapObservable(attrValue);
      // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
      // when someProp is a "no value"-like value (strictly null, false, or undefined)
      // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
      var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
      if (toRemove) element.removeAttribute(attrName);
      else element.setAttribute(attrName, attrValue.toString());
    });
  }
};
ko.bindingHandlers['advstyle'] = {
  'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var value = ko.utils.unwrapObservable(valueAccessor() || {});
    ko.utils.objectForEach(value, function(styleName, styleValueAccessor) {
      var styleValue;
      if (styleName.match(/Px$/)) {
        styleName = styleName.substr(0, styleName.length - 2);
        styleValue = element.style[styleName];
        if (styleValue.match(/px$/)) {
          styleValue = styleValue.replace(/px$/, '');
        } else {
          console.log("AdvStyle binding found an unexpected default value", styleName, styleValue, element);
        }
      } else {
        styleValue = element.style[styleName];
      }

      if (ko.isWriteableObservable(styleValueAccessor)) {
        var oldValue = styleValueAccessor();
        if (oldValue != styleValue) {
          styleValueAccessor(styleValue);
          if (oldValue !== null) {
            console.log("AdvStyle found a value different from the default", styleName, oldValue, styleValue);
          }
        }
      }
    });
  },
  'update': function(element, valueAccessor) {
    var value = ko.utils.unwrapObservable(valueAccessor() || {});
    ko.utils.objectForEach(value, function(styleName, styleValue) {
      styleValue = ko.utils.unwrapObservable(styleValue);

      if (styleValue === null || typeof styleValue === 'undefined' || styleValue === false) {
        styleValue = "";
      }

      if (styleName.match(/Px$/)) {
        styleName = styleName.substr(0, styleName.length - 2);
        styleValue = styleValue + "px";
      }

      element.style[styleName] = styleValue;
    });
  }
};

// Utility to log inizialization and disposal of DOM elements.
ko.bindingHandlers['domlog'] = {
  init: function(element, valueAccessor) {
    console.log("initialized", element);
    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      console.log("disposed", element);
    });
  }
};

ko.bindingHandlers['fudroppable'] = {
  init: function(element, valueAccessor) {
    var opt = valueAccessor() || {};
    var timeoutsObj = {};

    var over = function(timeouts, dropZoneTimeout, element, className, observable, event) {

      if (!timeouts[dropZoneTimeout]) {
        if (typeof className !== 'undefined') {
          element.classList.add(className);
        }
        if (ko.isWriteableObservable(observable) && !observable()) {
          observable(true);
        }
      } else {
        global.clearTimeout(timeouts[dropZoneTimeout]);
      }

      var stop = function() {
        timeouts[dropZoneTimeout] = null;
        if (typeof className !== 'undefined') {
          element.classList.remove(className);
        }
        if (ko.isWriteableObservable(observable) && observable()) {
          observable(false);
        }
      };

      if (event.type == 'dragleave') stop();
      else {
        // Using 100 it doens't work fine on Linux (chome/firefox), using 200 still shows issues on slow Linux boxes
        timeouts[dropZoneTimeout] = global.setTimeout(stop, 500);
      }

    };

    if (opt.active || opt.activeClass) {
      ko.utils.registerEventHandler(global, 'dragover', over.bind(undefined, timeoutsObj, 'activeTimeout', element, opt.activeClass, opt.active));
    }
    if (opt.hoverClass) {
      // dragenter and dragleave are not required but they speedup feedback when used.
      ko.utils.registerEventHandler(element, 'dragover dragenter dragleave', over.bind(undefined, timeoutsObj, 'hoverTimeout', element, opt.hoverClass, undefined));
    }
  }
};

ko.bindingHandlers['fileupload'] = {
  extendOptions: {},
  remoteFilePreprocessor: function(url) { return url; },
  init: function(element, valueAccessor) {
    // TODO domnodedisposal doesn't work when the upload is done by "clicking"
    // Probably jquery-fileupload moves the DOM somewhere else so that KO doesn't 
    // detect the removal anymore.
    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      $(element).fileupload('destroy');
    });

    // if we leave the title the native control will show us a tooltip we don't want.
    // In WebKit the right way to remove it is leaving a "whitespace".
    // In Gecko we have to set it empty.
    if (global.webkitURL)
      $(element).attr('title', ' ');
    else
      $(element).attr('title', '');
  },

  update: function(element, valueAccessor) {
    var options = valueAccessor() || {};

    var $fu = $(element);
    var $parent = $fu.parents('.uploadzone');

    var dataValue = options.data;
    options.data = undefined;

    var canvasPreview = options.canvasPreview;

    // TODO remove hardcoded url
    ko.utils.extend(options, {
      url: '/upload/',
      dataType: 'json',
      dropZone: $parent.find('.mo-uploadzone')[0],
      autoUpload: true,
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
      maxFileSize: 1024 * 1024,
      // Enable image resizing, except for Android and Opera,
      // which actually support image resizing, but fail to
      // send Blob objects via XHR requests:
      disableImageResize: /Android(?!.*Chrome)|Opera/.test(global.navigator.userAgent),
      previewMaxWidth: 200,
      previewMaxHeight: 200,
      previewCrop: false,
      replaceFileInput: false, // replaceFileInput true breaks after uploading using "input" (using mouse clic instead of dropping)

      messages: {
        // client side
        unknownError: 'Unknown error',
        uploadedBytes: 'Uploaded bytes exceed file size',
        maxNumberOfFiles: 'Maximum number of files exceeded',
        acceptFileTypes: 'File type not allowed',
        maxFileSize: 'File is too large',
        minFileSize: 'File is too small',
        // server side
        post_max_size: 'The uploaded file exceeds the post_max_size directive in php.ini',
        max_file_size: 'File is too big',
        min_file_size: 'File is too small',
        accept_file_types: 'Filetype not allowed',
        max_number_of_files: 'Maximum number of files exceeded',
        max_width: 'Image exceeds maximum width',
        min_width: 'Image requires a minimum width',
        max_height: 'Image exceeds maximum height',
        min_height: 'Image requires a minimum height',
        abort: 'File upload aborted',
        image_resize: 'Failed to resize image',
        generic: 'Unexpected upload error'
      }
    });

    ko.utils.extend(options, ko.bindingHandlers['fileupload'].extendOptions);

    var working = 0;
    var firstWorked = '';

    var cleanup = function() {
      if (--working === 0) {
        if (dataValue) {
          dataValue(firstWorked);
        }
        firstWorked = '';
        if (canvasPreview) {
          $parent.find('img').show();
          $parent.find('canvas').remove();
        }
        $parent.removeClass("uploading");
        $parent.find('.progress-bar').css('width', 0);
      }
    };

    var translatedMessage = function(text) {
      if (typeof options.messages == 'object' && options.messages !== null) {
        var match = text.match(/^([^ ]+)(.*)$/);
        if (match) {
          if (typeof options.messages[match[1]] !== 'undefined') {
            return options.messages[match[1]] + match[2];
          }
        }
      }
      return text;
    };

    $fu.fileupload(options);

    var events = ['fileuploadadd', 'fileuploadprocessalways', 'fileuploadprogressall', 'fileuploaddone', 'fileuploadfail'];
    var eventHandler = function(e, data) {
      if (e.type == 'fileuploadadd') {
        working++;
      }
      if (e.type == 'fileuploadfail') {
        console.log("fileuploadfail", e, data);
        if (options.onerror) {
          if (data.errorThrown === '' && data.textStatus == 'error') {
            options.onerror(translatedMessage('generic'));
          } else {
            options.onerror(translatedMessage('generic (' + data.errorThrown + ')'));
          }
        }
        cleanup();
      }
      if (e.type == 'fileuploaddone') {
        if (typeof data.result.files[0].url !== 'undefined') {
          if (options.onfile) {
            for (var i = 0; i < data.result.files.length; i++) {
              data.result.files[i] = ko.bindingHandlers['fileupload'].remoteFilePreprocessor(data.result.files[i]);
              options.onfile(data.result.files[i]);
            }
          }

          if (firstWorked === '') firstWorked = data.result.files[0].url;

          if (canvasPreview) {
            var img = new Image();
            img.onload = cleanup;
            img.onerror = cleanup;
            img.src = data.result.files[0].url;
          } else {
            cleanup();
          }
        } else if (typeof data.result.files[0].error !== 'undefined') {
          console.log("remote error", e, data);
          if (options.onerror) {
            options.onerror(translatedMessage(data.result.files[0].error));
          }
          cleanup();
        } else {
          console.log("unexpected error", e, data);
          if (options.onerror) {
            options.onerror(translatedMessage('generic (Unexpected Error retrieving uploaded file)'));
          }
          cleanup();
        }
      }
      if (e.type == 'fileuploadprocessalways') {
        var index = data.index,
          file = data.files[index];
        if (file.preview && index === 0) {
          // if we have a canvas we had multiple uploaded files
          if ($parent.find('canvas').length === 0) {
            if (canvasPreview) {
              var el = $(file.preview).css('width', '100%'); // .css('position', 'absolute').css('left', '0');
              $parent.find('img').hide();
              $parent.prepend(el);
            }
            $parent.addClass("uploading");
            $parent.find('.progress-bar').css('width', 0);
          }
        }
        if (file.error) {
          // File type not allowed
          // File is too large
          if (options.onerror) {
            options.onerror(translatedMessage(file.error));
          }
          cleanup();
        }
      }
      if (e.type == 'fileuploadprogressall') {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $parent.find('.progress-bar').css('width', progress + '%');
      }
    };
    for (var i = events.length - 1; i >= 0; i--) {
      var eventName = events[i];
      $fu.on(eventName, eventHandler);
    }
    if (!$.support.fileInput) {
      $fu.prop('disabled', true).parent().addClass('disabled');
    }
  }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/if-subs.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");

ko.bindingHandlers['ifSubs'] = {
  // cloneNodes from ko.utils.cloneNodes (missing in minimized KO)
  cloneNodes: function(nodesArray, shouldCleanNodes) {
    for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
      var clonedNode = nodesArray[i].cloneNode(true);
      newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
    }
    return newNodesArray;
  },
  'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    var didDisplayOnLastUpdate,
      savedNodes,
      valueAcc = valueAccessor();
    if (typeof valueAcc.data.subsCount === 'undefined') {
      ko.extenders['subscriptionsCount'](valueAcc.data);
      // NOTE I can't simply listen on "thresholds" because multiple bindings to the same observable could use different thresholds.
    }
    ko.computed(function() {
      var dataValue = ko.utils.unwrapObservable(valueAccessor().data.subsCount),
        isFirstRender = !savedNodes,
        shouldDisplay, needsRefresh, gutter;

      gutter = -(typeof valueAccessor().gutter !== 'undefined' ? valueAccessor().gutter : 1);
      shouldDisplay = dataValue + (didDisplayOnLastUpdate ? gutter : 0) >= ko.utils.unwrapObservable(valueAcc.threshold);
      if (typeof valueAccessor().not !== 'undefined' && valueAccessor().not) {
        shouldDisplay = !shouldDisplay;
      }
      needsRefresh = isFirstRender || (shouldDisplay !== didDisplayOnLastUpdate);

      if (needsRefresh) {
        // Save a copy of the inner nodes on the initial update, but only if we have dependencies.
        if (isFirstRender && ko.computedContext.getDependenciesCount()) {
          savedNodes = ko.bindingHandlers['ifSubs'].cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */ );
        }

        if (shouldDisplay) {
          if (!isFirstRender) {
            ko.virtualElements.setDomNodeChildren(element, ko.bindingHandlers['ifSubs'].cloneNodes(savedNodes));
          }
          ko.applyBindingsToDescendants(bindingContext, element);
        } else {
          ko.virtualElements.emptyNode(element);
        }

        didDisplayOnLastUpdate = shouldDisplay;
      }
    }, null, {
      disposeWhenNodeIsRemoved: element
    });
    return {
      'controlsDescendantBindings': true
    };
  }
};
ko.virtualElements.allowedBindings['ifSubs'] = true;

// ko.isWritableObservable (without "e") has been introduced in 3.2.0, that is also our min requirement.
// minimized knockout "obfuscate" the beforeSubscriptionAdd and afterSubscriptionRemove methods that we hack here.
// so we have to explicitly know that.
var beforeSubscriptionProp;
var afterSubscriptionProp;
if (typeof ko.DEBUG !== 'undefined' && typeof ko.isWritableObservable !== 'undefined') {
  beforeSubscriptionProp = 'beforeSubscriptionAdd';
  afterSubscriptionProp = 'afterSubscriptionRemove';
} else if (ko.version == "3.2.0") {
  beforeSubscriptionProp = 'va';
  afterSubscriptionProp = 'nb';
} else if (ko.version == "3.3.0") {
  beforeSubscriptionProp = 'ja';
  afterSubscriptionProp = 'ua';
} else if (ko.version == "3.4.0") {
  beforeSubscriptionProp = 'sa';
  afterSubscriptionProp = 'Ia';
}
else throw "Unsupported minimized Knockout version " + ko.version + " (supported DEBUG or minimized 3.2.0 ... 3.4.0)";

// internally used by ifsubs binding.
// WARNING this break when used with pureComputed or deferredEvaluated
ko.extenders['subscriptionsCount'] = function(target, l1, l2) {
  if (typeof target.subsCount === 'undefined') {
    target.subsCount = ko.observable(target.getSubscriptionsCount()).extend({
      notify: 'always'
    });
    var underlyingBeforeSubscriptionAddFunction = target[beforeSubscriptionProp];
    var underlyingAfterSubscriptionRemoveFunction = target[afterSubscriptionProp];
    target[beforeSubscriptionProp] = function(event) {
      if (underlyingBeforeSubscriptionAddFunction) underlyingBeforeSubscriptionAddFunction.call(target, event);
      var c = target.getSubscriptionsCount() + 1;
      if (typeof l1 === 'undefined' || c == l1 || typeof l2 === 'undefined' || c == l2) target.subsCount(c);
    };
    target[afterSubscriptionProp] = function(event) {
      if (underlyingAfterSubscriptionRemoveFunction) underlyingAfterSubscriptionRemoveFunction.call(target, event);
      var c = target.getSubscriptionsCount();
      if (typeof l1 === 'undefined' || c == l1 || typeof l2 === 'undefined' || c == l2) target.subsCount(c);
    };
  } else {
    console.log("already applied subscriptionCount to observable");
  }
  return null;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/jqueryui-spinner.js":[function(require,module,exports){
(function (global){
"use strict";

// Overrides native jQuery spinner to avoid validation of the "step".
// We wants to use the step but also wants to leave the user the ability to select specific values.

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");
$.widget("ui.spinner", $.ui.spinner, {
  _adjustValue: function(value) {
    var adj = this._super(value);

    var options = this.options;

    // fix precision from bad JS floating point math
    value = parseFloat(value.toFixed(this._precision()));

    // clamp the value
    if (options.max !== null && value > options.max) {
      return options.max;
    }
    if (options.min !== null && value < options.min) {
      return options.min;
    }

    return value;
  }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/jqueryui-tabs.js":[function(require,module,exports){
(function (global){
"use strict";

// Overrides native jQuery tabs to make tabs working also when using a base tag
// in order to avoid conflicts you have to add a data-local="true" attribute to your tab links.

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");
$.widget("ui.tabs", $.ui.tabs, {
  _isLocal: function( anchor ) {
    if (anchor.getAttribute('data-local') == "true") return true;
    else return this._superApply( arguments );
  }
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/script-template.js":[function(require,module,exports){
(function (global){
"use strict";
/* globals global: false */

function pushTemplate(templateName, templateText) {
  var scriptTag = global.document.createElement('script');
  scriptTag.setAttribute('type', 'text/html');
  scriptTag.setAttribute('id', templateName);
  scriptTag.text = templateText;
  global.document.body.appendChild(scriptTag);
}

function removeTemplate(templateName) {
  var el = global.document.getElementById(templateName);
  if (el) el.parentNode.removeChild(el);
}

function init() {}

function getTemplateContent(id) {
  var el = global.document.getElementById(id);
  if (el) return el.innerHTML;
  else return undefined;
}

module.exports = {
  init: init,
  addTemplate: pushTemplate,
  removeTemplate: removeTemplate,
  getTemplateContent: getTemplateContent
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/scrollfix.js":[function(require,module,exports){
(function (global){
"use strict";
/* global global: false */

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");
var tinymce = (typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null);

var timeout;

var render = function() {

  timeout = undefined;

  if (typeof tinymce.activeEditor !== 'undefined' && typeof tinymce.activeEditor.theme !== 'undefined' && typeof tinymce.activeEditor.theme.panel !== 'undefined' && typeof tinymce.activeEditor.theme.panel.visible !== 'undefined') {
    // @see FloatPanel.js function repositionPanel(panel)
    // First condition group is for Tinymce 4.0/4.1
    // Second condition group is for Tinymce 4.2/4.3 where "._property" are now available as ".state.get('property')".
    if ((typeof tinymce.activeEditor.theme.panel._visible !== 'undefined' && tinymce.activeEditor.theme.panel._visible && tinymce.activeEditor.theme.panel._fixed) || 
        (typeof tinymce.activeEditor.theme.panel.state !== 'undefined' && tinymce.activeEditor.theme.panel.state.get('visible') && tinymce.activeEditor.theme.panel.state.get('fixed'))) {
      tinymce.activeEditor.theme.panel.fixed(false);
    }

    tinymce.activeEditor.nodeChanged();
    tinymce.activeEditor.theme.panel.visible(true);
    if (tinymce.activeEditor.theme.panel.layoutRect().y <= 40)
      tinymce.activeEditor.theme.panel.moveBy(0, 40 - tinymce.activeEditor.theme.panel.layoutRect().y);

  }
};

ko.bindingHandlers.wysiwygScrollfix = {
  'scroll': function(event) {
    if (timeout) global.clearTimeout(timeout);
    timeout = global.setTimeout(render, 50);
  },
  'init': function(element) {
    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      $(element).off("scroll", ko.bindingHandlers.wysiwygScrollfix.scroll);
    });

    $(element).on("scroll", ko.bindingHandlers.wysiwygScrollfix.scroll);

  }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/scrollintoview.js":[function(require,module,exports){
(function (global){
"use strict";

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");

var _scrollIntoView = function($element, alignTop, scrollParent, moveBy) {
  var currentScrollTop = scrollParent.scrollTop();
  var newScrollTop = currentScrollTop - moveBy - (alignTop ? 20 : -20);
  // iframe scrolls the window and animation is not supported
  var animate = typeof scrollParent[0].nodeType !== 'undefined';
  if (animate) {
    var action = {
      'scrollTop': "" + Math.round(newScrollTop) + "px"
    };
    var time = Math.round(Math.abs(newScrollTop - currentScrollTop));
    scrollParent.stop().animate(action, time);
  } else {
    scrollParent.scrollTop(newScrollTop);
  }
  // native scrollIntoView is not well supported and doesn't work fine.
  // element.scrollIntoView(alignTop);
};

ko.bindingHandlers.scrollIntoView = {
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var selected = ko.utils.unwrapObservable(valueAccessor());
    if (!selected) return;
    try {

      while (element.nodeType === 8) {
        // element is a comment, move to the next sibling...
        element = element.nextSibling;
      }
      if (element.nodeType !== 8) {
        var scrollParent = $(element).scrollParent();

        var parentTop;
        var relativeOffset = false;
        if (scrollParent[0].nodeType == 9) {
          // scrollparent is document, replacing with body...
          scrollParent = $(scrollParent[0].defaultView);
          parentTop = 0;
          relativeOffset = true;
        } else {
          parentTop = scrollParent.offset().top;
        }

        var parentHeight = scrollParent.height();
        var parentScroll = scrollParent.scrollTop();
        var parentBottom = parentTop + parentHeight;

        // scrollParent is the document.
        var $element = $(element);
        var elTop = $element.offset().top;
        // when we are in "iframe" with scrollbar everythijng changes.
        if (relativeOffset) elTop = elTop - parentScroll;
        var elHeight = $element.height();
        var elBottom = elTop + elHeight;
        if (elTop > parentTop && elTop + elHeight < parentBottom) {
          // both borders are visible => don't do anything.
        } else if (elHeight < parentHeight) {
          // if the block is smaller than the viewPort
          if (elTop < parentTop) _scrollIntoView(element, true, scrollParent, parentTop - elTop);
          // -> if the upper border is higher than the top, then I move it to the top.
          if (elBottom > parentBottom) _scrollIntoView(element, false, scrollParent, parentBottom - elBottom);
          // -> if the bottom border is lower than the bottom then I move it to the bottom.
        } else {
          // if the block is larger than the viewPort we do the opposite!
          // -> if the upper border is higher than the top and the lower is higher than the bottom I move the lower it to the bottom.
          if (elTop < parentTop && elBottom < parentBottom) _scrollIntoView(element, false, scrollParent, parentBottom - elBottom);
          // -> if the bottom border il lower than bottom and the upper is lower than the top I move the upper border to the viewport top
          if (elTop > parentTop && elBottom > parentBottom) _scrollIntoView(element, true, scrollParent, parentTop - elTop);
        }

        // element.scrollIntoView(true);
      }
    } catch (e) {
      console.log("TODO exception scrolling into view", e);
    }
  }
};
ko.virtualElements.allowedBindings['scrollIntoView'] = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/string-template.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var origTemplateSystem = require("./script-template.js");

var templates = {};

//define a template source that simply treats the template name as its content
ko.templateSources.stringTemplate = function(templateName, template) {
  this.templateName = templateName;
  this.template = template;
  this._data = {};
};

ko.utils.extend(ko.templateSources.stringTemplate.prototype, {
  data: function(key, value) {
    // console.log("data", key, value, this.templateName);
    if (arguments.length === 1) {
      return this._data[key];
    }

    this._data[key] = value;
  },
  text: function(value) {
    // console.log("text", value, this.templateName)
    if (arguments.length === 0) {
      return this.template;
    }
    this.template = value;
  }
});


//modify an existing templateEngine to work with string templates
function createStringTemplateEngine(templateEngine) {
  var orig = templateEngine.makeTemplateSource;
  templateEngine.makeTemplateSource = function(templateName) {
    if (typeof templates[templateName] !== 'undefined') {
      return new ko.templateSources.stringTemplate(templateName, templates[templateName]);
    } else {
      return orig(templateName);
    }
  };
  return templateEngine;
}

function pushTemplate(templateName, templateText) {
  templates[templateName] = templateText;
}

function removeTemplate(templateName) {
  if (typeof templates[templateName] !== 'undefined') {
    templates[templateName] = undefined;
  } else {
    origTemplateSystem.removeTemplate(templateName);
  }
}

function init() {
  ko.setTemplateEngine(createStringTemplateEngine(new ko.nativeTemplateEngine()));
}

function getTemplateContent(id) {
  if (typeof templates[id] !== 'undefined') {
    return templates[id];
  } else {
    return origTemplateSystem.getTemplateContent(id);
  }
}

module.exports = {
  init: init,
  addTemplate: pushTemplate,
  removeTemplate: removeTemplate,
  getTemplateContent: getTemplateContent
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./script-template.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/script-template.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/tooltips.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var kojqui = (typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");

var extendValueAccessor = function(valueAccessor, obj) {
  return function() {
    ko.utils.extend(obj, valueAccessor());
    return obj;
  };
};

var options = {
  show: {
    delay: 500
  },
  track: true,
  items: '[title][title!=""][title!=" "]'
};

ko.bindingHandlers.tooltips = {
  init: function(element, valueAccessor, allBindingsAccessor, data, context) {
    if (typeof $.fn.tooltip !== 'undefined' && typeof ko.bindingHandlers.tooltip !== 'undefined') {
      // position: { my: "left+15 top+15", at: "center+30 center+30" }
      // NOTE title with "" and " " is needed to avoid default tooltips in native file upload controls
      return ko.bindingHandlers.tooltip.init(element, extendValueAccessor(valueAccessor, options), allBindingsAccessor, data, context);
    }
  },
  update: function(element, valueAccessor, allBindingsAccessor, data, context) {
    if (typeof $.fn.tooltip !== 'undefined' && typeof ko.bindingHandlers.tooltip !== 'undefined') {
      return ko.bindingHandlers.tooltip.update(element, extendValueAccessor(valueAccessor, options), allBindingsAccessor, data, context);
    }
  },
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/validated-value.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");

// equals to "value" binding but apply "invalid" class if "pattern" attribute is defined and value matches the rule
ko.bindingHandlers['validatedValue'] = {
	init: function(element, valueAccessor, allBindings) {
		var newValueAccessor = valueAccessor;
		if (typeof element.pattern !== 'undefined') {
			var re = new RegExp('^(?:' + element.pattern + ')$');
			var computed = ko.computed({
				read: function() {
					var res = ko.utils.unwrapObservable(valueAccessor());
					// TODO support for element.required ?
					var valid = res === null || res === '' || re.test(res);
					// IE11 doesn't support classList.toggle('invalid', state)
					if (valid) {
						element.classList.remove('invalid');
					} else {
						element.classList.add('invalid');
					}
					return res;
				},
				write: ko.isWriteableObservable(valueAccessor()) && function(value) {
					valueAccessor()(value);
				},
				disposeWhenNodeIsRemoved: element
			});
			newValueAccessor = function() {
				return computed;
			};
		}
		ko.bindingHandlers['value'].init(element, newValueAccessor, allBindings);
	}
};
ko.expressionRewriting._twoWayBindings['validatedValue'] = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/virtuals.js":[function(require,module,exports){
(function (global){
"use strict";
/* globals global:false */

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");

ko.bindingHandlers['uniqueId'] = {
  currentIndex: 0,
  'init': function(element, valueAccessor) {
    var data = ko.utils.unwrapObservable(valueAccessor()) || {};
    if (data.id() === '') {
      var id, el, prefix;
      // TODO we need a better prefix
      prefix = 'ko_' + (typeof data.type !== 'undefined' ? ko.utils.unwrapObservable(data.type) : 'block');
      // when loading an exising model, IDs could be already assigned.
      do {
        id = prefix + '_' + (++ko.bindingHandlers['uniqueId'].currentIndex);
        el = global.document.getElementById(id);
        if (el) {
          // when loading an existing model my "currentIndex" is empty.
          // but we have existing blocks, so I must be sure I don't reuse their IDs.
          // We use different prefixes (per block type) so that a hidden block 
          // (for which we have no id in the page, e.g: preheader in versafix-1)
          // will break everthing once we reuse its name.
        }
      } while (el);
      data.id(id);
    }
  }
};
ko.virtualElements.allowedBindings['uniqueId'] = true;

ko.bindingHandlers['virtualAttr'] = {
  update: function(element, valueAccessor) {
    if (element.nodeType !== 8) {
      ko.bindingHandlers['attr'].update(element, valueAccessor);
    }
  }
};
ko.virtualElements.allowedBindings['virtualAttr'] = true;

ko.bindingHandlers['virtualAttrStyle'] = {
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    if (element.nodeType !== 8) {
      // In "preview" we also set "replacedstyle" so to have an attribute to be used by IE (IE breaks the STYLE) to do the export.
      var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');
      var attrs = ["style"];
      if (isNotWysiwygMode) attrs.push("replacedstyle");
      var attrValue = ko.utils.unwrapObservable(valueAccessor());
      for (var i = 0; i < attrs.length; i++) {
        var attrName = attrs[i];
        var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
        if (toRemove)
          element.removeAttribute(attrName);
        else
          element.setAttribute(attrName, attrValue.toString());
      }
    }
  }
};
ko.virtualElements.allowedBindings['virtualAttrStyle'] = true;

ko.bindingHandlers['virtualStyle'] = {
  update: function(element, valueAccessor) {
    if (element.nodeType !== 8) {
      ko.bindingHandlers['style'].update(element, valueAccessor);
    }
  }
};
ko.virtualElements.allowedBindings['virtualStyle'] = true;


ko.bindingHandlers['virtualHtml'] = {
  init: ko.bindingHandlers['html'].init,
  update: function(element, valueAccessor) {
    if (element.nodeType === 8) {
      var html = ko.utils.unwrapObservable(valueAccessor());

      ko.virtualElements.emptyNode(element);
      if ((html !== null) && (html !== undefined)) {
        if (typeof html !== 'string') {
          html = html.toString();
        }

        var parsedNodes = ko.utils.parseHtmlFragment(html);
        if (parsedNodes) {
          var endCommentNode = element.nextSibling;
          for (var i = 0, j = parsedNodes.length; i < j; i++)
            endCommentNode.parentNode.insertBefore(parsedNodes[i], endCommentNode);
        }
      }
    } else { // plain node
      ko.bindingHandlers['html'].update(element, valueAccessor);
    }

    // Content for virtualHTML must not be parsed by KO, it is simple content.
    return {
      controlsDescendantBindings: true
    };
  }
};
ko.virtualElements.allowedBindings['virtualHtml'] = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/wysiwygs.js":[function(require,module,exports){
(function (global){
"use strict";
/* global global: false */

var tinymce = (typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");
require("./eventable.js");

ko.bindingHandlers.wysiwygOrHtml = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');

    if (isNotWysiwygMode)
      return ko.bindingHandlers['virtualHtml'].init();
    else
      return ko.bindingHandlers.wysiwyg.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
  },
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');
    if (isNotWysiwygMode)
      return ko.bindingHandlers['virtualHtml'].update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    //else 
    //  return ko.bindingHandlers.wysiwyg.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
  }
};
ko.virtualElements.allowedBindings['wysiwygOrHtml'] = true;

ko.bindingHandlers.wysiwygHref = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    if (element.nodeType !== 8) {
      var v = valueAccessor();

      var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');
      // console.log("XXX", bindingContext.templateMode, isNotWysiwygMode, element.getAttribute("href"));
      if (isNotWysiwygMode) {
        element.setAttribute('target', '_new');
      } else {
        /*jshint scripturl:true*/
        // 20150226: removed href to work around FF issues with <a href=""><div contenteditable="true">..</div></a>
        // element.setAttribute('href', 'javascript:void(0)');
        // 20150309: on IE, an editable <a href="" data-editable=""> prevent tinymce toolbar to be shown.
        //           so I change behaviour based on the use of "wysiwygOrHtml"
        // @see: http://www.tinymce.com/develop/bugtracker_view.php?id=7432
        var allbindings = allBindingsAccessor();
        if (typeof allbindings.wysiwygOrHtml !== 'undefined') {
          element.setAttribute('href', 'javascript:void(0)');
        } else {
          element.removeAttribute('href');
          element.setAttribute('disabledhref', '#');
        }
      }
    }
  },
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    if (element.nodeType !== 8) {
      var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');
      // NOTE this unwrap is needed also in "wysiwyg" mode, otherwise dependency tracking dies.
      var attrValue = ko.utils.unwrapObservable(valueAccessor());
      if (isNotWysiwygMode) {
        if ((attrValue === false) || (attrValue === null) || (attrValue === undefined))
          element.removeAttribute('href');
        else
          element.setAttribute('href', attrValue.toString());
      }
    }
  }
};
ko.virtualElements.allowedBindings['wysiwygHref'] = true;

ko.bindingHandlers.wysiwygSrc = {
  convertedUrl: function(src, method, width, height) {
    var res = src + "?method=" + method + "&width=" + width + (height !== null ? "&height=" + height : '');
    console.log("basic converterUrl", res);
    return res;
  },
  placeholderUrl: function(plwidth, plheight, pltext) {
    var placeholdersrc = "'http://lorempixel.com/g/'+" + plwidth + "+'/'+" + plheight + "+'/abstract/'+encodeURIComponent(" + pltext + ")";
    // http://placehold.it/200x150.png/cccccc/333333&text=placehold.it#sthash.nA3r26vR.dpuf
    // placeholdersrc = "'http://placehold.it/'+"+width+"+'x'+"+height+"+'.png/cccccc/333333&text='+"+size;
    // placeholdersrc = "'"+converterUtils.addSlashes(defaultValue)+"'";
  },
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var value = ko.utils.unwrapObservable(valueAccessor());
    var attrValue = ko.utils.unwrapObservable(value.src);
    var placeholderValue = ko.utils.unwrapObservable(value.placeholder);
    var width = ko.utils.unwrapObservable(value.width);
    var height = ko.utils.unwrapObservable(value.height);
    if ((attrValue === false) || (attrValue === null) || (attrValue === undefined) || (attrValue === '')) {
      if (typeof placeholderValue == 'object' && placeholderValue !== null) element.setAttribute('src', ko.bindingHandlers.wysiwygSrc.placeholderUrl(placeholderValue.width, placeholderValue.height, placeholderValue.text));
      else element.removeAttribute('src');
    } else {
      var method = ko.utils.unwrapObservable(value.method);
      if (!method) method = width > 0 && height > 0 ? 'cover' : 'resize';
      var src = ko.bindingHandlers.wysiwygSrc.convertedUrl(attrValue.toString(), method, width, height);
      element.setAttribute('src', src);
    }
    if (typeof width !== 'undefined' && width !== null) element.setAttribute("width", width);
    else element.removeAttribute("width");
    if (typeof height !== 'undefined' && height !== null) element.setAttribute("height", height);
    else element.removeAttribute("height");
  }
};

ko.bindingHandlers.wysiwygId = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');
    if (!isNotWysiwygMode)
      element.setAttribute('id', ko.utils.unwrapObservable(valueAccessor()));
  },
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');
    if (!isNotWysiwygMode)
      element.setAttribute('id', ko.utils.unwrapObservable(valueAccessor()));
  }
};
ko.virtualElements.allowedBindings['wysiwygId'] = true;

// used on editable "item" so to bind clicks only in wysiwyg mode.
ko.bindingHandlers.wysiwygClick = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');
    if (!isNotWysiwygMode)
      ko.bindingHandlers.click.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
  }
};
ko.virtualElements.allowedBindings['wysiwygClick'] = true;

// used on editable "item" so to bind css only in wysiwyg mode.
ko.bindingHandlers.wysiwygCss = {
  update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var isNotWysiwygMode = (typeof bindingContext.templateMode == 'undefined' || bindingContext.templateMode != 'wysiwyg');
    if (!isNotWysiwygMode)
      ko.bindingHandlers.css.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
  }
};
ko.virtualElements.allowedBindings['wysiwygCss'] = true;

ko.bindingHandlers.wysiwygImg = {
  makeTemplateValueAccessor: function(valueAccessor, bindingContext) {
    return function() {
      var isWysiwygMode = (typeof bindingContext.templateMode != 'undefined' && bindingContext.templateMode == 'wysiwyg');

      var modelValue = valueAccessor(),
        unwrappedValue = ko.utils.peekObservable(modelValue); // Unwrap without setting a dependency here

      // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
      ko.utils.unwrapObservable(modelValue);

      return {
        'name': isWysiwygMode ? unwrappedValue['_editTemplate'] : unwrappedValue['_template'],
        'templateEngine': ko.nativeTemplateEngine.instance
      };
    };
  },
  'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['wysiwygImg'].makeTemplateValueAccessor(valueAccessor, bindingContext));
  },
  'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    bindingContext = bindingContext['extend'](valueAccessor());
    return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['wysiwygImg'].makeTemplateValueAccessor(valueAccessor, bindingContext), allBindings, viewModel, bindingContext);
  }
};
ko.virtualElements.allowedBindings['wysiwygImg'] = true;

// NOTE: there are issues with the "raw" format and trash left around by tinymce workarounds for contenteditable issues.
// setting "forced_root_block: false" disable the default behaviour of adding a wrapper <p> when needed and this seems to fix many issues in IE.
// also, maybe we should use the "raw" only for the "before SetContent" and instead read the "non-raw" content (the raw content sometimes have data- attributes and too many ending <br> in the code)
ko.bindingHandlers.wysiwyg = {
  currentIndex: 0,
  standardOptions: {},
  fullOptions: {
    toolbar1: 'bold italic forecolor backcolor hr styleselect removeformat | link unlink | pastetext code',
    //toolbar1: "bold italic | forecolor backcolor | link unlink | hr | pastetext code", // | newsletter_profile newsletter_optlink newsletter_unsubscribe newsletter_showlink";
    //toolbar2: "formatselect fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist",
    plugins: ["link hr paste lists textcolor code"],
    // valid_elements: 'strong/b,em/i,*[*]',
    // extended_valid_elements: 'strong/b,em/i,*[*]',
    // Removed: image fullscreen contextmenu 
    // download custom:
    // jquery version con legacyoutput, anchor, code, importcss, link, paste, textcolor, hr, lists
  },
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    // TODO ugly, but works...
    ko.bindingHandlers.focusable.init(element);

    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
      tinymce.remove('#' + element.getAttribute('id'));
    });

    var value = valueAccessor();

    if (!ko.isObservable(value)) throw "Wysiwyg binding called with non observable";
    if (element.nodeType === 8) throw "Wysiwyg binding called on virtual node, ignoring...." + element.innerHTML;

    var selectorId = element.getAttribute('id');
    if (!selectorId) {
      selectorId = 'wysiwyg_' + (++ko.bindingHandlers['wysiwyg'].currentIndex);
      element.setAttribute('id', selectorId);
    }

    var fullEditor = element.tagName == 'DIV' || element.tagName == 'TD';
    var isSubscriberChange = false;
    var thisEditor;
    var isEditorChange = false;

    var options = {
      selector: '#' + selectorId,
      inline: true,
      // maybe not needed, but won't hurt.
      hidden_input: false,
      plugins: ["paste"],
      toolbar1: "bold italic",
      toolbar2: "",
      // we have to disable preview_styles otherwise tinymce push inline every style he things will be applied and this makes the style menu to inherit color/font-family and more.
      preview_styles: false,
      paste_as_text: true,
      language: 'en',
      schema: "html5",
      extended_valid_elements: 'strong/b,em/i,*[*]',
      menubar: false,
      skin: 'gray-flat',
      setup: function(editor) {
        // TODO change sometimes doesn't trigger (we have to document when)
        // listening on keyup would increase correctness but we would need a rateLimit to avoid flooding.
        editor.on('change redo undo', function() {
          if (!isSubscriberChange) {
            isEditorChange = true;
            // we failed with other ways to do this:
            // value($(element).html());
            // value(element.innerHTML);
            value(editor.getContent({
              format: 'raw'
            }));
            isEditorChange = false;
          }
        });
        // Clicking on the element on focus change allow the "clic" code to be triggered and propagate the selection.
        // Not elegant, maybe we have better options.
        editor.on('focus', function() {
          // Used by scrollfix.js (maybe this is not needed by new scrollfix.js)
          editor.nodeChanged();
          editor.getElement().click();
        });

        // NOTE: this fixes issue with "leading spaces" in default content that were lost during initialization.
        editor.on('BeforeSetContent', function(args) {
          if (args.initial) args.format = 'raw';
        });

        /* NOTE: disabling "ENTER" in tiny editor, not a good thing but may be needed to work around contenteditable issues
        if (!fullEditor) {
          // se non abbiamo il "full Editor", disabilitiamo l'invio. (vari bug)
          editor.on('keydown', function(e) {
            if (e.keyCode == 13) { e.preventDefault(); }
          });
        }
        */

        thisEditor = editor;

      }
    };

    ko.utils.extend(options, ko.bindingHandlers.wysiwyg.standardOptions);
    if (fullEditor) ko.utils.extend(options, ko.bindingHandlers.wysiwyg.fullOptions);

    // we have to put initialization in a settimeout, otherwise switching from "1" to "2" columns blocks
    // will start the new editors before disposing the old ones and IDs get temporarily duplicated.
    // using setTimeout the dispose/create order is correct on every browser tested.
    global.setTimeout(function() {
      tinymce.init(options);
    });

    ko.computed(function() {
      var content = ko.utils.unwrapObservable(valueAccessor());
      if (!isEditorChange) {
        try {
          isSubscriberChange = true;
          // we failed setting contents in other ways...
          // $(element).html(content);
          if (typeof thisEditor !== 'undefined') {
            thisEditor.setContent(content, {
              format: 'raw'
            });
          } else {
            ko.utils.setHtml(element, content);
          }
        } catch (e) {
          console.log("TODO exception setting content to editable element", typeof thisEditor, e);
        }
        isSubscriberChange = false;
      }
    }, null, {
      disposeWhenNodeIsRemoved: element
    });

    // do not parse html content for KO bindings!!
    return {
      controlsDescendantBindings: true
    };

  }
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./eventable.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/eventable.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/checkmodel.js":[function(require,module,exports){
"use strict";
var console = require("./../../../bower_components/console-browserify/index.js");

// returns 0 if equal (0.0.x release), 1 with backward compatible additions (0.x.0 release), 2 on lost data or incompatible data (x.0.0 release)
var checkModel = function(reference, blockDefs, model, origPrefix, reverse) {
  var blockDefsObj, i, prefix;
  var valid = 0;
  if (typeof reverse == 'undefined') reverse = false;
  if (typeof blockDefs !== 'undefined' && typeof blockDefs.splice == 'function') {
    blockDefsObj = {};
    for (i = 0; i < blockDefs.length; i++) blockDefsObj[blockDefs[i].type] = blockDefs[i];
  } else {
    blockDefsObj = blockDefs;
  }
  for (var prop in reference)
    if (reference.hasOwnProperty(prop)) {
      prefix = typeof origPrefix !== 'undefined' ? origPrefix + "." + prop : prop;
      if (!model.hasOwnProperty(prop)) {
        if (reverse) {
          console.warn("WARN Property ", prefix, "found in model is not defined by template: removing it!");
          valid = Math.max(valid, 2);
          delete reference[prop];
        } else {
          console.log("INFO Property ", prefix, "missing in model, cloning from reference!");
          valid = Math.max(valid, 1);
          model[prop] = reference[prop];
        }
      } else if (typeof model[prop] != typeof reference[prop]) {
        // se sono di tipo diverso allora provo a vedere se l'altro, convertito di tipo mantiene un valore equivalente.
        if (model[prop] !== null && reference[prop] !== null) {
          if (typeof model[prop] == 'string') {
            if (String(reference[prop]) != reference[prop]) {
              console.log("TODO Different type 1 ", prefix, typeof model[prop], typeof reference[prop], model[prop], reference[prop]);
              valid = Math.max(valid, 2);
            }
          } else if (typeof model[prop] == 'number') {
            if (Number(reference[prop]) != reference[prop]) {
              console.log("TODO Different type 2 ", prefix, typeof model[prop], typeof reference[prop], model[prop], reference[prop]);
              valid = Math.max(valid, 2);
            }
          } else {
            console.log("TODO Different type 3 ", prefix, typeof model[prop], typeof reference[prop], model[prop], reference[prop]);
            valid = Math.max(valid, 2);
          }
        }
      } else if (typeof reference[prop] == 'object') {
        if (reference[prop] !== null) {
          if (typeof reference[prop].splice !== 'undefined') {
            if (reference[prop].length > 0) {
              if (model[prop].length > 0) {
                // TODO needs sorting?
                var j = 0;
                for (i = 0; i < model[prop].length; i++) {
                  if (typeof model[prop][i].type == 'string') {
                    while (j < reference[prop].length && reference[prop][j].type !== model[prop][i].type) {
                      console.log("ignoring ", prefix, reference[prop][j].type, " block type in reference not found in model");
                      j++;
                    }
                    if (j >= reference[prop].length) {
                      console.log("WARN cannot find ", prefix, model[prop][i].type, " block in reference");
                      valid = Math.max(valid, 2);
                      break;
                    }
                    // reverse condition so to skip "deep traversing" on error
                    valid = Math.max(valid, checkModel(reference[prop][j], undefined, model[prop][i], prefix + "[" + i + "." + model[prop][i].type + "]"));
                  }
                }
              } else {
                // in the case of different array we check blockDefs
                for (i = 0; i < reference[prop].length; i++) {
                  if (typeof reference[prop][i].type !== 'string') {
                    console.log("TODO found an object with no type", prefix, reference[prop][i]);
                    valid = Math.max(valid, 2);
                  } else if (!blockDefsObj.hasOwnProperty(reference[prop][i].type)) {
                    console.warn("TODO the model uses a block type not defined by the template. REMOVING IT!!", prefix, reference[prop][i]);
                    reference[prop].splice(i, 1);
                    i--;
                    valid = Math.max(valid, 2);
                  } else {
                    valid = Math.max(valid, checkModel(blockDefsObj[reference[prop][i].type], blockDefsObj, reference[prop][i], prefix + "[" + i + "." + reference[prop][i].type + "]"));
                  }
                }
              }
            }
          } else {
            if (model[prop] === null) {
              if (reverse) {
                console.log("WARN Null object in model ", prefix, "instead of", reference[prop], "deleting it");
                valid = Math.max(valid, 2);
                delete reference[prop];
              } else {
                console.log("INFO Null object in model ", prefix, "instead of", reference[prop], "cloning it from the reference");
                valid = Math.max(valid, 1);
                model[prop] = reference[prop];
              }
            } else {
              valid = Math.max(valid, checkModel(reference[prop], blockDefsObj, model[prop], prefix, reverse));
            }
          }
        } else if (model[prop] !== null) {
          console.log("TODO Null in reference but not null in model", prefix, model[prop]);
          valid = Math.max(valid, 2);
        }
      } else if (typeof reference[prop] !== 'string' && typeof reference[prop] !== 'boolean' && typeof reference[prop] !== 'number') {
        console.log("TODO unsupported type", prefix, typeof reference[prop]);
        valid = Math.max(valid, 2);
      }

    }
  if (!reverse) valid = Math.max(valid, checkModel(model, blockDefs, reference, typeof origPrefix !== 'undefined' ? origPrefix + "!R" : "!R", true));
  return valid;
};

module.exports = checkModel;
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/declarations.js":[function(require,module,exports){
"use strict";

// Parses CSS declarations and supports the property language (-ko-*) found between them.
// Create KO bindings but doesn't depend on KO.
// Needs a bindingProvider.

var converterUtils = require("./utils.js");
var cssParse = require("./../../../bower_components/mensch/lib/parser.js");
var console = require("./../../../bower_components/console-browserify/index.js");
var domutils = require("./domutils.js");

var _declarationValueLookup = function(declarations, propertyname, templateUrlConverter) {
  for (var i = declarations.length - 1; i >= 0; i--) {
    if (declarations[i].type == 'property' && declarations[i].name == propertyname) {
      return _declarationValueUrlPrefixer(declarations[i].value, templateUrlConverter);
    }
  }
  return null;
};

var _propToCamelCase = function(propName) {
  return propName.replace(/-([a-z])/g, function(match, contents, offset, s) {
    return contents.toUpperCase();
  });
};

var _declarationValueUrlPrefixer = function(value, templateUrlConverter) {
  if (value.match(/url\(.*\)/)) {
    var replaced = value.replace(/(url\()([^\)]*)(\))/g, function(matched, prefix, url, postfix) {
      var trimmed = url.trim();
      var apice = url.trim().charAt(0);
      if (apice == '\'' || apice == '"') {
        trimmed = trimmed.substr(1, trimmed.length - 2);
      } else {
        apice = '';
      }
      var newUrl = templateUrlConverter(trimmed);
      if (newUrl !== null) {
        return prefix + apice + newUrl + apice + postfix;
      } else {
        return matched;
      }
    });
    return replaced;
  } else {
    return value;
  }
};

var elaborateDeclarations = function(style, declarations, templateUrlConverter, bindingProvider, element, basicBindings, removeDisplayNone) {
  var newBindings = typeof basicBindings == 'object' && basicBindings !== null ? basicBindings : {};
  var newStyle = null;
  var skipLines = 0;
  if (typeof declarations == 'undefined') {
    var styleSheet = cssParse("#{\n" + style + "}", {
      comments: true,
      position: true
    });
    declarations = styleSheet.stylesheet.rules[0].declarations;
    skipLines = 1;
  }
  for (var i = declarations.length - 1; i >= 0; i--)
    if (declarations[i].type == 'property') {
      if (removeDisplayNone === true && declarations[i].name == 'display' && declarations[i].value == 'none') {
        if (newStyle === null) newStyle = style;
        newStyle = converterUtils.removeStyle(newStyle, declarations[i].position.start, declarations[i].position.end, skipLines, 0, 0, '');
      } else {
        var decl = declarations[i].name.match(/^-ko-(bind-|attr-)?([a-z0-9-]*?)(-if|-ifnot)?$/);
        if (decl !== null) {
          // rimozione dello stile -ko- dall'attributo style.
          if (newStyle === null && typeof style != 'undefined') newStyle = style;

          var isAttr = decl[1] == 'attr-';
          var isBind = decl[1] == 'bind-';
          var propName = decl[2];

          var isIf = decl[3] == '-if' || decl[3] == '-ifnot';
          var condDecl;
          var bindValue;
          var propDefaultValue;

          if (isIf) {
            condDecl = declarations[i].name.substr(0, declarations[i].name.length - decl[3].length);
            var conditionedDeclaration = _declarationValueLookup(declarations, condDecl, templateUrlConverter);
            if (conditionedDeclaration === null) throw "Unable to find declaration " + condDecl + " for " + declarations[i].name;
          } else {

            if ((isAttr || isBind) && (typeof element == 'undefined' && typeof style != 'undefined')) throw "Attributes and bind declarations are only allowed in inline styles!";

            var needDefaultValue = true;
            var bindType;
            if (isAttr) {
              propDefaultValue = domutils.getAttribute(element, propName);
              needDefaultValue = false;
              bindType = 'virtualAttr';
            } else if (!isBind) {
              needDefaultValue = typeof style !== 'undefined';
              if (needDefaultValue) propDefaultValue = _declarationValueLookup(declarations, propName, templateUrlConverter);
              bindType = 'virtualStyle';
            } else {
              bindType = null;
              if (propName == 'text') {
                if (typeof element !== 'undefined') {
                  propDefaultValue = domutils.getInnerText(element);
                } else {
                  needDefaultValue = false;
                }
              } else if (propName == 'html') {
                if (typeof element !== 'undefined') {
                  propDefaultValue = domutils.getInnerHtml(element);
                } else {
                  needDefaultValue = false;
                }
              } else {
                needDefaultValue = false;
              }
            }

            if (needDefaultValue && propDefaultValue === null) {
              console.error("Cannot find default value for", declarations[i].name, declarations);
              throw "Cannot find default value for " + declarations[i].name + ": " + declarations[i].value + " in " + element + " (" + typeof style + "/" + propName + ")";
            }
            var bindDefaultValue = propDefaultValue;

            var bindName = _propToCamelCase(propName);

            try {
              bindValue = converterUtils.expressionBinding(declarations[i].value, bindingProvider, bindDefaultValue);
            } catch (e) {
              console.error("Model ensure path failed", e.stack, "name", declarations[i].name, "value", declarations[i].value, "default", propDefaultValue, "element", element);
              throw e;
            }

            if (bindType !== null && typeof newBindings[bindType] == 'undefined') newBindings[bindType] = {};


            // Special handling for HREFs
            if (bindType == 'virtualAttr' && bindName == 'href') {
              bindType = null;
              bindName = 'wysiwygHref';
              // We have to remove it, otherwise we ends up with 2 rules writing it.
              if (typeof element != 'undefined' && element !== null) {
                domutils.removeAttribute(element, "href");
              }
            }

            // TODO evaluate the use of "-then" (and -else) postfixes to complete the -if instead of relaying
            // on the same basic sintax (or maybe it is better to support ternary operator COND ? THEN : ELSE).
            var declarationCondition = _declarationValueLookup(declarations, declarations[i].name + '-if', templateUrlConverter);
            var not = false;
            if (declarationCondition === null) {
              declarationCondition = _declarationValueLookup(declarations, declarations[i].name + '-ifnot', templateUrlConverter);
              not = true;
            } else {
              if (_declarationValueLookup(declarations, declarations[i].name + '-ifnot', templateUrlConverter) !== null) {
                throw "Unexpected error: cannot use both -if and -ifnot property conditions";
              }
            }
            if (declarationCondition !== null) {
              try {
                var bindingCond = converterUtils.conditionBinding(declarationCondition, bindingProvider);
                bindValue = (not ? '!' : '') + "(" + bindingCond + ") ? " + bindValue + " : null";
              } catch (e) {
                console.error("Unable to deal with -ko style binding condition", declarationCondition, declarations[i].name);
                throw e;
              }
            }

            if (bindType !== null) newBindings[bindType][bindName] = bindValue;
            else newBindings[bindName] = bindValue;
          }

          // parsing @supports :preview
          if (newStyle !== null) {

            try {
              // if "element" is defined then we are parsing an "inline" style and we want to remove it.
              if (typeof element != 'undefined' && element !== null) {
                newStyle = converterUtils.removeStyle(newStyle, declarations[i].position.start, declarations[i].position.end, skipLines, 0, 0, '');
              } else {
                // otherwise we are parsing a full stylesheet.. let's rewrite the full "prop: value" without caring about the original syntax.
                var replacedWith = '';
                // if it is an "if" we simply have to remove it, otherwise we replace the input code with "prop: value" generating expression.
                if (!isIf) replacedWith = propName + ': <!-- ko text: ' + bindValue + ' -->' + propDefaultValue + '<!-- /ko -->';
                newStyle = converterUtils.removeStyle(newStyle, declarations[i].position.start, declarations[i].position.end, skipLines, 0, 0, replacedWith);
              }
            } catch (e) {
              console.warn("Remove style failed", e, "name", declarations[i]);
              throw e;
            }

          }

        } else {
          // prefixing urls
          var replacedValue = _declarationValueUrlPrefixer(declarations[i].value, templateUrlConverter);
          if (replacedValue != declarations[i].value) {
            if (newStyle === null && typeof style !== 'undefined') newStyle = style;
            if (newStyle !== null) {
              try {
                newStyle = converterUtils.removeStyle(newStyle, declarations[i].position.start, declarations[i].position.end, skipLines, 0, 0, declarations[i].name + ": " + replacedValue);
              } catch (e) {
                console.log("Remove style failed replacing url", e, "name", declarations[i]);
                throw e;
              }
            }
          }

          // Style handling by concatenated "style attribute" (worse performance but more stable than direct style handling)
          var bindName2 = _propToCamelCase(declarations[i].name);
          var bind = 'virtualAttrStyle';
          var bindVal2 = typeof newBindings['virtualStyle'] !== 'undefined' ? newBindings['virtualStyle'][bindName2] : undefined;

          var dist = ' ';
          if (typeof newBindings[bind] == 'undefined') {
            newBindings[bind] = "''";
            dist = '';
          }

          if (typeof bindVal2 !== 'undefined') {
            newBindings[bind] = "'" + declarations[i].name + ": '+(" + bindVal2 + ")+';" + dist + "'+" + newBindings[bind];
            delete newBindings['virtualStyle'][bindName2];
          } else {
            newBindings[bind] = "'" + declarations[i].name + ": " + converterUtils.addSlashes(replacedValue) + ";" + dist + "'+" + newBindings[bind];
          }

        }
      }
    }

  if (typeof element != 'undefined' && element !== null) {
    for (var prop in newBindings['virtualStyle'])
      if (newBindings['virtualStyle'].hasOwnProperty(prop)) {
        console.log("Unexpected virtualStyle binding after conversion to virtualAttr.style", prop, newBindings['virtualStyle'][prop], style);
        throw "Unexpected virtualStyle binding after conversion to virtualAttr.style for " + prop;
      }
    delete newBindings['virtualStyle'];

    var currentBindings = domutils.getAttribute(element, 'data-bind');
    var dataBind = (currentBindings !== null ? currentBindings + ", " : "") + _bindingSerializer(newBindings);
    domutils.setAttribute(element, 'data-bind', dataBind);
  }

  // TODO a function whose return type depends on the input parameters is very ugly.. please FIX ME.
  if (typeof style == 'undefined') {
    // clean virtualStyle if empty
    var hasVirtualStyle = false;
    for (var prop1 in newBindings['virtualStyle'])
      if (newBindings['virtualStyle'].hasOwnProperty(prop1)) {
        hasVirtualStyle = true;
        break;
      }
    if (!hasVirtualStyle) delete newBindings['virtualStyle'];
    else {
      // remove and add back virtualAttrStyle so it gets appended BEFORE virtualAttrStyle (_bindingSerializer reverse them...)
      if (typeof newBindings['virtualAttrStyle'] !== 'undefined') {
        var vs = newBindings['virtualAttrStyle'];
        delete newBindings['virtualAttrStyle'];
        newBindings['virtualAttrStyle'] = vs;
      }
    }
    // returns new serialized bindings
    return _bindingSerializer(newBindings);
  }

  return newStyle;
};

var _bindingSerializer = function(val) {
  var res = [];
  for (var prop in val)
    if (val.hasOwnProperty(prop)) {
      if (typeof val[prop] == 'object') res.push(prop + ": " + "{ " + _bindingSerializer(val[prop]) + " }");
      else res.push(prop + ": " + val[prop]);
    }
  return res.reverse().join(', ');
};

module.exports = elaborateDeclarations;
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/mensch/lib/parser.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/parser.js","./domutils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/domutils.js","./utils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/domutils.js":[function(require,module,exports){
(function (global){
"use strict";

// This deals with Cheerio/jQuery issues.
// Most of this could be done without jQuery, too, but jQuery is easier to be mocked with Cheerio
// Otherwise we would need jsDom to run the compiler in the server (without a real browser)

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

function _extend(target, source) {
  if (source) {
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}

var objExtend = function(obj, extender) {
  if (typeof $.extend == 'function') {
    return $.extend(true, obj, extender);
  } else {
    return _extend(obj, JSON.parse(JSON.stringify(extender)));
  }
};

var getAttribute = function(element, attribute) {
  var res = $(element).attr(attribute);
  if (typeof res == 'undefined') res = null;
  return res;
  // return element.getAttribute(attribute);
};

var setAttribute = function(element, attribute, value) {
  $(element).attr(attribute, value);
  // element.setAttribute(attribute, value);
};

var removeAttribute = function(element, attribute) {
  $(element).removeAttr(attribute);
  // element.removeAttribute(attribute);
};

var getInnerText = function(element) {
  return $(element).text();
  // if (typeof element.innerText != 'undefined') return element.innerText;
  // else return element.textContent;
};

var getInnerHtml = function(element) {
  return $(element).html();
  // return element.innerHTML;
};

var getLowerTagName = function(element) {
  // sometimes cheerio doesn't have tagName but "name".
  // Browsers have "name" with empty string
  // Sometimes cheerio has tagName but no prop function.
  if (element.tagName === '' && typeof element.name == 'string') return element.name.toLowerCase();
  if (element.tagName !== '') return element.tagName.toLowerCase();
  return $(element).prop("tagName").toLowerCase();
  // return element.tagName.toLowerCase();
};

var setContent = function(element, content) {
  $(element).html(content);
  // element.innerHTML = content;
};

var replaceHtml = function(element, html) {
  $(element).replaceWith(html);
  // element.outerHTML = html;
};

var removeElements = function($elements, tryDetach) {
  if (tryDetach && typeof $elements.detach !== 'undefined') $elements.detach();
  // NOTE: we don't need an else, as detach is simply an optimization
  $elements.remove();
};

module.exports = {
  getAttribute: getAttribute,
  setAttribute: setAttribute,
  removeAttribute: removeAttribute,
  getInnerText: getInnerText,
  getInnerHtml: getInnerHtml,
  getLowerTagName: getLowerTagName,
  setContent: setContent,
  replaceHtml: replaceHtml,
  removeElements: removeElements,
  objExtend: objExtend
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/editor.js":[function(require,module,exports){
"use strict";

var console = require("./../../../bower_components/console-browserify/index.js");
var elaborateDeclarations = require("./declarations.js");
var utils = require('./utils.js');
var modelDef = require('./model.js');

var _getOptionsObject = function(options) {
  var optionsCouples = options.split('|');
  var opts = {};
  for (var i = 0; i < optionsCouples.length; i++) {
    var opt = optionsCouples[i].split('=');
    opts[opt[0]] = opt.length > 1 ? opt[1] : opt[0];
  }
  return opts;
};

// TODO this should not have hardcoded rules (we now have a way to declare them in the template definition)
// Category "style" is used by editType "styler"
// Cateogry "content" is used by editType "edit"
// TODO maybe we should use a common string here, and rely only on the original category.
var _filterProps = function(model, editType, level) {
  var res = [];
  for (var prop in model)
    if (!prop.match(/^customStyle$/) && !prop.match(/^_/) && model.hasOwnProperty(prop)) {
      var isStyleProp = model[prop] !== null && typeof model[prop]._category != 'undefined' && model[prop]._category == 'style';
      if (prop == 'id' || prop == 'type' || prop.match(/Blocks$/)) {} else if (editType == 'styler') {
        if (isStyleProp || level > 0) res.push(prop);
      } else if (editType == 'edit') {
        // Editing for properties in the "content" category but not defined in the context of a block
        var isContentProp = model[prop] !== null && typeof model[prop]._category != 'undefined' && model[prop]._category == 'content' &&
          (typeof model[prop]._context == 'undefined' || model[prop]._context != 'block');
        if (isContentProp) res.push(prop);
      } else if (typeof editType == 'undefined') {
        res.push(prop);
      }
    }
  return res;
};

var _propInput = function(model, prop, propAccessor, editType, widgets) {
  var html = "";
  var widget;
  if (model !== null && typeof model._widget != 'undefined') widget = model._widget;

  if (typeof widget == 'undefined') {
    throw "Unknown data type for " + prop;
  }

  // For content editors we deal with focusing (clicking is handled by the container DIV).
  var onfocusbinding = 'focusable: true';
  if (editType == 'edit') {
    onfocusbinding += ', event: { focus: function(ui, event) { $($element).click(); } } ';
  }

  html += '<label class="data-' + widget + '"' + (widget == 'boolean' ? ' data-bind="event: { mousedown: function(ui, evt) { if (evt.button == 0) { var input = $($element).find(\'input\'); var ch = input.prop(\'checked\'); setTimeout(function() { input.click(); input.prop(\'checked\', !ch); input.trigger(\'change\'); }, 0); } } }, click: function(ui, evt) { evt.preventDefault(); }, clickBubble: false"' : '') + '>';

  if (typeof widgets !== 'undefined' && typeof widgets[widget] !== 'undefined') {
    var w = widgets[widget];
    var parameters = {};
    if (typeof w.parameters !== 'undefined')
      for (var p in w.parameters)
        if (w.parameters.hasOwnProperty(p) && typeof model['_'+p] !== 'undefined')
          parameters[p] = model['_'+p];
    html += w.html(propAccessor, onfocusbinding, parameters);
  } else if (widget == 'boolean') {
    html += '<input type="checkbox" value="nothing" data-bind="checked: ' + propAccessor + ', ' + onfocusbinding + '" />';
    html += '<span class="checkbox-replacer" ></span>'; /* data-bind="css: { checked: '+propAccessor+' }" */
  } else if (widget == 'color') {
    html += '<input size="7" type="text" data-bind="colorpicker: { color: ' + propAccessor + ', strings: $root.t(\'Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet.\') }, ' + ', ' + onfocusbinding + '" />';
  } else if (widget == 'select') {
    if (typeof model._options != 'undefined') {
      var opts = _getOptionsObject(model._options);
      // var opts = model._options;
      html += '<select data-bind="value: ' + propAccessor + ', ' + onfocusbinding + '">';
      for (var opt in opts)
        if (opts.hasOwnProperty(opt)) {
          html += '<option value="' + opt + '" data-bind="text: $root.ut(\'template\', \'' + utils.addSlashes(opts[opt]) + '\')">' + opts[opt] + '</option>';
        }
      html += '</select>';
    }
  } else if (widget == 'font') {
    html += '<select type="text" data-bind="value: ' + propAccessor + ', ' + onfocusbinding + '">';
    html += '<optgroup label="Sans-Serif Fonts">';
    html += '<option value="Arial,Helvetica,sans-serif">Arial</option>';
    html += '<option value="\'Comic Sans MS\',cursive,sans-serif">Comic Sans MS</option>';
    html += '<option value="Impact,Charcoal,sans-serif">Impact</option>';
    html += '<option value="\'Trebuchet MS\',Helvetica,sans-serif">Trebuchet MS</option>';
    html += '<option value="Verdana,Geneva,sans-serif">Verdana</option>';
    html += '</optgroup>';
    html += '<optgroup label="Serif Fonts">';
    html += '<option value="Georgia,serif">Georgia</option>';
    html += '<option value="\'Times New Roman\',Times,serif">Times New Roman</option>';
    html += '</optgroup>';
    html += '<optgroup label="Monospace Fonts">';
    html += '<option value="\'Courier New\',Courier,monospace">Courier New</option>';
    html += '</optgroup>';
    html += '</select>';
  } else if (widget == 'url') {
    html += '<div class="ui-textbutton">';
    // <a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon fa fa-fw caret-down">▼</span></span></a>
    html += '<input class="ui-textbutton-input" size="7" type="url" pattern="(mailto:.+@.+|https?://.+\\..+|\\[.*\\].*)" value="nothing" data-bind="css: { withButton: typeof $root.linkDialog !== \'undefined\' }, validatedValue: ' + propAccessor + ', ' + onfocusbinding + '" />';
    html += '<a class="ui-textbutton-button" data-bind="visible: typeof $root.linkDialog !== \'undefined\', click: typeof $root.linkDialog !== \'undefined\' ? $root.linkDialog.bind($element.previousSibling) : false, button: { icons: { primary: \'fa fa-fw fa-ellipsis-h\' }, label: \'Opzioni\', text: false }">Opzioni</a>';
    html += '</div>';
  } else if (widget == 'integer') {
    // at this time the "step" depends on max being greater than 100.
    // maybe we should expose "step" as a configuration, too
    var min = 0;
    var max = 1000;
    if (model !== null && typeof model._max !== 'undefined') max = model._max;
    if (model !== null && typeof model._min !== 'undefined') min = model._min;
    var step = (max - min) >= 100 ? 10 : 1;
    var page = step * 5;
    html += '<input class="number-spinner" size="7" step="' + step + '" type="number" value="-1" data-bind="spinner: { min: ' + min + ', max: ' + max + ', page: ' + page + ', value: ' + propAccessor + ' }, valueUpdate: [\'change\', \'spin\']' + ', ' + onfocusbinding + '" />';
  } else {
    html += '<input size="7" type="text" value="nothing" data-bind="value: ' + propAccessor + ', ' + onfocusbinding + '" />';
  }

  html += '</label>';

  return html;
};

var _getGlobalStyleProp = function(globalStyles, model, prop, path) {
  var globalStyleProp;
  if (typeof model !== 'object' || model === null || typeof model._widget !== 'undefined') {
    if (typeof prop !== 'undefined' && typeof path !== 'undefined' && path.length > 0 && typeof globalStyles == 'object' && typeof globalStyles[path] != 'undefined') {
      globalStyleProp = globalStyles[path];
    }
  }
  return globalStyleProp;
};

var _propEditor = function(withBindingProvider, widgets, templateUrlConverter, model, themeModel, path, prop, editType, level, baseThreshold, globalStyles, globalStyleProp, trackUsage, rootPreviewBinding, previewBackground) {
  if (typeof level == 'undefined') level = 0;

  if (typeof prop !== 'undefined' && typeof model == 'object' && model !== null && typeof model._usecount === 'undefined') {
    console.log("TODO EDITOR ignoring", path, "property because it is not used by the template", "prop:", prop, "type:", editType, "level:", level, withBindingProvider._templateName);
    return "";
  }

  var propAccessor = typeof globalStyleProp != 'undefined' ? prop + '._defaultComputed' : prop;

  var html = "";
  var title;
  var ifSubsProp = propAccessor;
  var ifSubsGutter = 1;
  // typeof globalStyleProp != 'undefined' ? 1 : 2;
  var ifSubsThreshold = 1;

  // The visibility handling is a PITA
  // 
  // Here are some "edge cases" to test whenever we change something here:
  // LM social footer: removing shareVisibile must be reflected in the booleans sub-checks
  // FLUID social block: multiple clicks on the "wand" should not make the editor invisible
  // BIS heroMenu - By changing the menu visibility it should be reflected in style editors for the menu links
  // FLUID almost every block with a color variant sometimes keeps showing style editor for the hidden variant.
  if (typeof model == 'object' && model !== null && typeof model._widget == 'undefined') {
    // Do nothing here
  } else {
    if (typeof globalStyleProp == 'undefined') {
      ifSubsGutter += 1;
    }
  }

  // NOTE baseThreshold is added only when globalStyle is not defined because when we have globalStyle
  // we're going to bind the computed values and not the original and this way we don't add ourserf to the dependency 
  // tracking (subscriptionCount)
  // NOTE baseThreshold is an "expression" and not a fixed number, so this is a concatenation
  if (typeof globalStyleProp == 'undefined' && typeof baseThreshold !== 'undefined') ifSubsThreshold += baseThreshold;

  if (typeof prop != 'undefined' && !!trackUsage) {
    html += '<!-- ko ifSubs: { data: ' + ifSubsProp + ', threshold: ' + ifSubsThreshold + ', gutter: ' + ifSubsGutter + ' } -->';
  }

  if (typeof prop != 'undefined' && (model === null || typeof model._name == 'undefined')) {
    // TODO throw exception?
    console.log("TODO WARN Missing label for property ", prop);
  }
  if (typeof prop == 'undefined' && model !== null && typeof model._name == 'undefined') {
    console.log("TODO WARN Missing label for object ", model.type /*, model */ );
  }

  if (typeof model == 'object' && model !== null && typeof model._widget == 'undefined') {
    var props = _filterProps(model, editType, level);

    var hasCustomStyle = editType == 'styler' && model !== null && typeof model.customStyle !== 'undefined' && typeof globalStyleProp !== 'undefined';
    var selectedItemBinding = '';
    var additionalClasses = '';
    if (typeof prop !== 'undefined' && editType == 'edit') {
      selectedItemBinding = ', click: function(obj, evt) { $root.selectItem(' + prop + ', $data); return false }, clickBubble: false, css: { selecteditem: $root.isSelectedItem(' + prop + ') }, scrollIntoView: $root.isSelectedItem(' + prop + '), ';
      additionalClasses += ' selectable';
    }
    if (hasCustomStyle) {
      additionalClasses += ' supportsCustomStyles';
    }
    html += '<div class="objEdit level' + level + additionalClasses + '" data-bind="tooltips: {}' + selectedItemBinding + '">';
    var modelName = (model !== null && typeof model._name != 'undefined' ? model._name : (typeof prop !== 'undefined' ? '[' + prop + ']' : ''));
    if (hasCustomStyle) {
      var themeSectionName = 'Stile';
      if (typeof themeModel !== 'undefined' && themeModel !== null && typeof themeModel._name !== 'undefined') {
        themeSectionName = themeModel._name;
      } else {
        console.log("TODO missing label for theme section ", prop, model !== null ? model.type : '-');
      }

      modelName = '<span class="blockSelectionMethod" data-bind="text: customStyle() ? $root.ut(\'template\', \'' + utils.addSlashes(modelName) + '\') : $root.ut(\'template\', \'' + utils.addSlashes(themeSectionName) + '\')">Block</span>';
    } else {
      modelName = '<span data-bind="text: $root.ut(\'template\', \'' + utils.addSlashes(modelName) + '\')">' + modelName + '</span>';
    }
    title = model !== null && typeof model._help !== 'undefined' ? ' title="' + utils.addSlashes(model._help) + '" data-bind="attr: { title: $root.ut(\'template\', \'' + utils.addSlashes(model._help) + '\') }"' : '';
    html += '<span' + title + ' class="objLabel level' + level + '">' + modelName + '</span>';

    if (editType == 'edit' && typeof model._blockDescription !== 'undefined') {
      html += '<div class="blockDescription" data-bind="html: $root.ut(\'template\', \'' + utils.addSlashes(model._blockDescription) + '\')">' + model._blockDescription + '</div>';
    }

    /* CUSTOM STYLE */
    if (hasCustomStyle) {
      html += '<label class="data-boolean blockCheck" data-bind="tooltips: { }">';
      html += '<input type="checkbox" value="nothing" data-bind="focusable: true, checked: customStyle" />';
      html += '<span title="Switch between global and block level styles editing" data-bind="attr: { title: $root.t(\'Switch between global and block level styles editing\') }" class="checkbox-replacer checkbox-replacer-onoff"></span>'; //  data-bind="tooltip: { content: \'personalizza tutti\' }"
      html += '</label>';
      html += '<!-- ko template: { name: \'customstyle\', if: customStyle } --><!-- /ko -->';
    }

    if (typeof prop != 'undefined') {
      html += '<!-- ko with: ' + prop + ' -->';

      /* PREVIEW */
      if (level == 1 && typeof prop != 'undefined') {
        if (typeof model._previewBindings != 'undefined' && typeof withBindingProvider != 'undefined') {
          if (typeof rootPreviewBinding != 'undefined') html += '<!-- ko with: $root.content() --><div class="objPreview" data-bind="' + rootPreviewBinding + '"></div><!-- /ko -->';
          if (typeof previewBackground != 'undefined') html += '<!-- ko with: $parent --><div class="objPreview" data-bind="' + previewBackground + '"></div><!-- /ko -->';
          var previewBindings = elaborateDeclarations(undefined, model._previewBindings, templateUrlConverter, withBindingProvider.bind(this, path + '.'));
          html += '<div class="objPreview"><div class="objPreviewInner" data-bind="' + previewBindings + '"></div></div>';
        }
      }
    }

    /* PREVIEW */
    var previewBG;
    if (level === 0) {
      if (typeof model._previewBindings != 'undefined') {
        previewBG = elaborateDeclarations(undefined, model._previewBindings, templateUrlConverter, withBindingProvider.bind(this, path.length > 0 ? path + '.' : ''));
      }
    }

    var i, newPath;

    var before = html.length;

    var newThemeModel;
    var newGlobalStyleProp;

    for (i = 0; i < props.length; i++) {
      newPath = path.length > 0 ? path + "." + props[i] : props[i];
      if (typeof model[props[i]] != 'object' || model[props[i]] === null || typeof model[props[i]]._widget != 'undefined') {
        newGlobalStyleProp = undefined;
        if (level === 0 && props[i] == 'theme')
          html += _propEditor(withBindingProvider, widgets, templateUrlConverter, model[props[i]], newThemeModel, newPath, props[i], editType, 0, baseThreshold, undefined, undefined, trackUsage, rootPreviewBinding);
        else {
          newGlobalStyleProp = _getGlobalStyleProp(globalStyles, model[props[i]], props[i], newPath);
          html += _propEditor(withBindingProvider, widgets, templateUrlConverter, model[props[i]], newThemeModel, newPath, props[i], editType, level + 1, baseThreshold, globalStyles, newGlobalStyleProp, trackUsage, rootPreviewBinding, previewBG);
        }
      }
    }
    for (i = 0; i < props.length; i++) {
      newPath = path.length > 0 ? path + "." + props[i] : props[i];
      if (!(typeof model[props[i]] != 'object' || model[props[i]] === null || typeof model[props[i]]._widget != 'undefined')) {
        newGlobalStyleProp = undefined;
        if (level === 0 && props[i] == 'theme')
          html += _propEditor(withBindingProvider, widgets, templateUrlConverter, model[props[i]], newThemeModel, newPath, props[i], editType, 0, baseThreshold, undefined, undefined, trackUsage, rootPreviewBinding);
        else {
          newGlobalStyleProp = _getGlobalStyleProp(globalStyles, model[props[i]], props[i], newPath);
          html += _propEditor(withBindingProvider, widgets, templateUrlConverter, model[props[i]], newThemeModel, newPath, props[i], editType, level + 1, baseThreshold, globalStyles, newGlobalStyleProp, trackUsage, rootPreviewBinding, previewBG);
        }
      }
    }

    var added = html.length - before;
    if (added === 0) {
      // No editable content: if this is in context "template" we leave it empty, otherwise we show an help.
      if (typeof model == 'object' && model !== null && model._context == 'template') {
        return '';
      } else {
        // TODO move me to a tmpl?
        html += '<div class="objEmpty" data-bind="html: $root.t(\'Selected element has no editable properties\')">Selected element has no editable properties</div>';
      }
    }

    if (typeof prop != 'undefined') {
      html += '<!-- /ko -->';
    }
    html += '</div>';

  } else {
    var checkboxes = true;

    if (typeof globalStyles == 'undefined') checkboxes = false;

    if (model === null || typeof model != 'object' || typeof model._widget != 'undefined') {
      var bindings = [];

      if (typeof globalStyleProp != 'undefined') bindings.push('css: { notnull: ' + prop + '() !== null }');
      title = model !== null && typeof model._help !== 'undefined' ? ' title="' + utils.addSlashes(model._help) + '" data-bind="attr: { title: $root.ut(\'template\', \'' + utils.addSlashes(model._help) + '\') }"' : '';
      if (title.length > 0) bindings.push('tooltips: {}');
      var bind = bindings.length > 0 ? 'data-bind="' + utils.addSlashes(bindings.join()) + '"' : '';
      html += '<div class="propEditor ' + (checkboxes ? 'checkboxes' : '') + '"' + bind + '>';

      var modelName2 = (model !== null && typeof model._name != 'undefined' ? model._name : (typeof prop !== 'undefined' ? '[' + prop + ']' : ''));
      modelName2 = '<span data-bind="text: $root.ut(\'template\', \'' + utils.addSlashes(modelName2) + '\')">' + modelName2 + '</span>';
      html += '<span' + title + ' class="propLabel">' + modelName2 + '</span>';
      html += '<div class="propInput ' + (typeof globalStyles != 'undefined' ? 'local' : '') + '" data-bind="css: { default: ' + prop + '() === null }">';
      html += _propInput(model, prop, propAccessor, editType, widgets);
      html += '</div>';
      if (typeof globalStyleProp != 'undefined') {
        html += '<div class="propInput global" data-bind="css: { overridden: ' + prop + '() !== null }">';
        html += _propInput(model, prop, globalStyleProp, editType, widgets);
        html += '</div>';

        if (checkboxes) {
          html += '<div class="propCheck"><label data-bind="tooltips: {}"><input type="checkbox" data-bind="focusable: true, click: function(evt, obj) { $root.localGlobalSwitch(' + prop + ', ' + globalStyleProp + '); return true; }, checked: ' + prop + '() !== null">';
          html += '<span class="checkbox-replacer" data-bind="css: { checked: ' + prop + '() !== null }, attr: { title: $root.t(\'This style is specific for this block: click here to remove the custom style and revert to the theme value\') }"></span>';
          html += '</label></div>';
        }
      }
      html += '</div>';
    } else if (model === null || typeof model != 'object') {
      // TODO remove debug output
      html += '<div class="propEditor unknown">[A|' + prop + "|" + typeof model + ']</div>';
    } else {
      // TODO remove debug output
      html += '<div class="propEditor unknown">[B|' + prop + "|" + typeof model + ']</div>';
    }


  }

  if (typeof prop != 'undefined' && !!trackUsage) {
    html += '<!-- /ko -->';
    html += '<!-- ko ifSubs: { not: true, data: ' + ifSubsProp + ', threshold: ' + ifSubsThreshold + ', gutter: 0 } -->';
    html += '<span class="label notused">(' + prop + ')</span>';
    html += '<!-- /ko -->';
  }

  return html;
};


var createBlockEditor = function(defs, widgets, themeUpdater, templateUrlConverter, rootModelName, templateName, editType, templateCreator, baseThreshold, trackGlobalStyles, trackUsage, fromLevel) {
  if (typeof trackUsage == 'undefined') trackUsage = true;
  var model = modelDef.getDef(defs, templateName);

  var rootModel = modelDef.getDef(defs, rootModelName);
  var rootPreviewBindings;
  if (typeof rootModel._previewBindings != 'undefined' && templateName != 'thaeme' && editType == 'styler') {
    rootPreviewBindings = elaborateDeclarations(undefined, rootModel._previewBindings, templateUrlConverter, modelDef.getBindValue.bind(undefined, defs, themeUpdater, rootModelName, rootModelName, ''));
  }

  var globalStyles = typeof trackGlobalStyles != 'undefined' && trackGlobalStyles ? defs[templateName]._globalStyles : undefined;
  var globalStyleProp = typeof trackGlobalStyles != 'undefined' && trackGlobalStyles ? defs[templateName]._globalStyle : undefined;


  var themeModel;
  if (typeof globalStyleProp !== 'undefined') {
    var mm = modelDef.getDef(defs, 'theme');
    // TODO remove deprecated $theme
    themeModel = mm[globalStyleProp.replace(/^(\$theme|_theme_)\./, '')];
  }


  var withBindingProvider = modelDef.getBindValue.bind(undefined, defs, themeUpdater, rootModelName, templateName);
  withBindingProvider._templateName = templateName;

  var html = '<div class="editor">';
  html += "<div class=\"blockType" + (typeof globalStyles != 'undefined' ? " withdefaults" : "") + "\">" + model.type + "</div>";

  var editorContent = _propEditor(withBindingProvider, widgets, templateUrlConverter, model, themeModel, "", undefined, editType, fromLevel, baseThreshold, globalStyles, globalStyleProp, trackUsage, rootPreviewBindings);
  if (editorContent.length > 0) {
    html += editorContent;
  }

  html += '</div>';

  templateCreator(html, templateName, editType);
};

var createBlockEditors = function(defs, widgets, themeUpdater, templateUrlConverter, rootModelName, templateName, templateCreator, baseThreshold) {
  createBlockEditor(defs, widgets, themeUpdater, templateUrlConverter, rootModelName, templateName, 'edit', templateCreator, baseThreshold);
  createBlockEditor(defs, widgets, themeUpdater, templateUrlConverter, rootModelName, templateName, 'styler', templateCreator, baseThreshold, true);
};

var generateEditors = function(templateDef, widgets, templateUrlConverter, templateCreator, baseThreshold) {
  var defs = templateDef._defs;
  var templateName = templateDef.templateName;
  var blocks = templateDef._blocks;
  var idx;
  var blockDefs = [];
  for (idx = 0; idx < blocks.length; idx++) {
    if (typeof blocks[idx].container !== 'undefined') {
      blockDefs.push(modelDef.generateModel(defs, blocks[idx].block));
    }
    createBlockEditors(defs, widgets, undefined, templateUrlConverter, blocks[idx].root, blocks[idx].block, templateCreator, baseThreshold);
  }

  if (typeof defs['theme'] != 'undefined') createBlockEditor(defs, widgets, undefined, templateUrlConverter, templateName, 'theme', 'styler', templateCreator, undefined, false, false, -1);
  return blockDefs;
};

module.exports = generateEditors;

},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./declarations.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/declarations.js","./model.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/model.js","./utils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/main.js":[function(require,module,exports){
"use strict";
/* global global: false */

var modelDef = require("./model.js");

var wrappedResultModel = function(templateDef) {
  var defs = templateDef._defs;
  var templateName = templateDef.templateName;
  var finalModelContentDef = modelDef.getDef(defs, templateName);

  var finalModelContent = modelDef.generateResultModel(templateDef);

  var wrapper = require("./wrapper.js");
  var res = wrapper(finalModelContent, finalModelContentDef, defs);

  return res;
};

// requires only when imported
var translateTemplate = function() {
  var tt = require('./parser.js');
  return tt.apply(tt, arguments);
};

// requires only when imported
var generateEditors = function() {
  var ge = require('./editor.js');
  return ge.apply(ge, arguments);
};

var checkModel = function() {
  var cm = require('./checkmodel.js');
  return cm.apply(cm, arguments);
};

module.exports = {
  translateTemplate: translateTemplate,
  wrappedResultModel: wrappedResultModel,
  generateResultModel: modelDef.generateResultModel,
  generateEditors: generateEditors,
  checkModel: checkModel
};
},{"./checkmodel.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/checkmodel.js","./editor.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/editor.js","./model.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/model.js","./parser.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/parser.js","./wrapper.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/wrapper.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/model.js":[function(require,module,exports){
"use strict";

var objExtend = require("./domutils.js").objExtend;
var console = require("./../../../bower_components/console-browserify/index.js");

var _valueSet = function(defs, model, prop, value) {
  var dotPos = prop.indexOf('.');
  if (dotPos == -1) {
    if (typeof model[prop] == 'undefined') {
      console.log("Undefined prop " + prop + " while setting value " + value + " in model._valueSet");
    } else if (model[prop] === null) {
      if (typeof value == 'object' && value !== null && typeof value.push == 'undefined') console.log("nullpropobjectvalue", prop, value);
      model[prop] = value;
    } else if (typeof model[prop] == 'object' && typeof model[prop].push == 'function') {
      var values;
      if (typeof value === 'string') {
        var valuesString = value.match(/^\[(.*)\]$/);
        if (valuesString !== null) {
          values = valuesString[1].split(',');
        } else {
          throw "Unexpected default value for array property " + prop + ": " + value;
        }
      } else if (typeof value === 'object' && typeof value.push !== 'undefined') {
        values = value;
      } else {
        throw "Unexpected default value for array property " + prop + ": " + value + " typeof " + (typeof value);
      }
      var res = [];
      for (var i = 0; i < values.length; i++) {
        if (values[i].substr(0, 1) == '@') {
          // TODO remove this legacy support (@), so we can remove "defs" from this function, too.
          res.push(_generateModel(defs, values[i].substr(1)));
        } else if (values[i].length > 0) {
          res.push(values[i]);
        }
      }
      model[prop] = res;
    } else if (typeof model[prop] == 'string' || typeof model[prop] == 'boolean') {
      // TODO does this still happen? Debug/test me.
      model[prop] = value;
    } else if (typeof model[prop] == 'object' && model[prop] !== null && typeof model[prop]._widget != 'undefined') {
      if (typeof value == 'object' && value !== null) console.log("objectvalue", prop, model[prop]._widget, value);
      // _data is defined for primitive types
      model[prop] = value;
    } else {
      console.log("setting", typeof model[prop], model[prop], prop, value);
    }
  } else {
    var propName = prop.substr(0, dotPos);
    _valueSet(defs, model[propName], prop.substr(dotPos + 1), value);
  }
};

var _modelCreateOrUpdateBlockDef = function(defs, templateName, properties, namedProperties) {
  if (typeof defs[templateName] !== 'undefined' && defs[templateName]._initialized && !defs[templateName]._writeable) {
    console.log("_modelCreateOrUpdateBlockDef", defs, templateName, properties, namedProperties);
    throw "Trying to alter non writeable model: " + templateName + " / " + properties;
  }

  if (typeof defs[templateName] == 'undefined') {
    defs[templateName] = {
      _writeable: true
    };
    // Fallback computation of "category" depending on the property name
    // TODO remove me: this should be always defined in the template definition, no need to hardcode this stuff.
    if (typeof namedProperties == 'undefined') namedProperties = {};
    if (typeof namedProperties.category == 'undefined' && typeof defs[templateName]._category == 'undefined') {
      if (templateName.match(/(^t|.T)heme$/) || templateName.match(/(^s|.S)tyle$/) || templateName.match(/(^c|.C)olor$/) || templateName.match(/(^r|.R)adius$/)) {
        namedProperties.category = 'style';
      } else {
        namedProperties.category = 'content';
      }
    }
  }


  if (typeof namedProperties !== 'undefined') {
    // TODO check if this is needed before the ending namedProperty "loop" or not.
    if (typeof namedProperties.name != 'undefined') defs[templateName]._name = namedProperties.name;

    if (typeof namedProperties.themeOverride != 'undefined') {
      defs[templateName]._themeOverride = namedProperties.themeOverride;
    }
    if (typeof namedProperties.globalStyle != 'undefined') {
      defs[templateName]._globalStyle = namedProperties.globalStyle;
      // TODO remove deprecated $theme
      var globalStyleSub = namedProperties.globalStyle.replace(/^(\$theme|_theme_)\./, '');
      var p = globalStyleSub.indexOf('.');
      var gs = p != -1 ? globalStyleSub.substr(0, p) : globalStyleSub;
      _modelCreateOrUpdateBlockDef(defs, 'theme', gs);

      if (typeof defs[templateName]._themeOverride === 'undefined' || !!defs[templateName]._themeOverride) {
        _modelCreateOrUpdateBlockDef(defs, templateName, "customStyle=false");
      }
    }
    if (typeof namedProperties.contextName !== 'undefined') {
      defs[templateName]._context = namedProperties.contextName;
      // TODO is it correct to fallback to "bodyTheme" for blocks not declaring a default theme?
      // Maybe it would be better to simply declare it as mandatory but leave the default configutation
      // to the template definition.
      if (namedProperties.contextName == 'block' && typeof defs[templateName]._globalStyle == 'undefined') {
        defs[templateName]._globalStyle = '_theme_.bodyTheme';
        _modelCreateOrUpdateBlockDef(defs, 'theme', 'bodyTheme');

        if (typeof defs[templateName]._themeOverride == 'undefined' || defs[templateName]._themeOverride) {
          _modelCreateOrUpdateBlockDef(defs, templateName, "customStyle=false");
        }
      }
    }
    if (typeof namedProperties.extend != 'undefined') defs[templateName].type = namedProperties.extend;
  }

  for (var np in namedProperties) if (namedProperties.hasOwnProperty(np) && typeof namedProperties[np] !== 'undefined' && ['name', 'extend', 'contextName', 'globalStyle','themeOverride'].indexOf(np) == -1) {
    defs[templateName]['_'+np] = namedProperties[np];
  }

  if (typeof properties != 'undefined' && properties.length > 0) {
    defs[templateName]._props = typeof defs[templateName]._props != 'undefined' && defs[templateName]._props.length > 0 ? defs[templateName]._props + " " + properties : properties;
  }
};

// remove the first "sequence" in a camelcased word (e.g: myCamelCase => camelCase).
var _removePrefix = function(str) {
  var res = str.match(/^[^A-Z]+([A-Z])(.*)$/);
  return res !== null ? res[1].toLowerCase() + res[2] : null;
};

// TODO defs is needed only because _valueSet needs it.. we should remove it downstream.
var _generateModelFromDef = function(modelDef, defs) {
  var res = {};

  for (var prop in modelDef)
    if (!prop.match(/^_.*/) && modelDef.hasOwnProperty(prop)) {
      var value = modelDef[prop];
      if (typeof value == 'object' && value !== null && typeof value._complex != 'undefined' && value._complex) {
        res[prop] = _generateModelFromDef(value, defs);
      } else if (prop == 'type') {
        res[prop] = value;
      } else if (typeof value == 'object') {
        // most times this will be overwritten by _valueSet
        res[prop] = null;
        // for customStyle this is set to null.
      } else {
        console.error("Unexpected model def", prop, value, modelDef);
        throw "Unexpected model def [" + prop + "]=" + value;
      }
    }

  if (typeof modelDef._defaultValues != 'undefined') {
    var defaults = modelDef._defaultValues;
    for (var prop2 in defaults)
      if (defaults.hasOwnProperty(prop2)) {
        _valueSet(defs, res, prop2, defaults[prop2]);
      }
  }

  return res;
};

var _generateModel = function(defs, name) {
  var modelDef = _getModelDef(defs, name, false, true);
  return _generateModelFromDef(modelDef, defs);
};

var _getDef = function(defs, name) {
  return _getModelDef(defs, name, false, true);
};

var _getModelDef = function(defs, name, returnClone, readonly) {
  // lookup "name" in the template definition
  if (typeof defs[name] == 'undefined') {
    // if the name has a space then returns.
    if (name.indexOf(' ') != -1) return null;
    // otherwise try looking up using a deprefixed name.
    var res = _removePrefix(name);
    if (res !== null) {
      // TODO the deprefixing is powerful, but maybe not really needed.
      return _getModelDef(defs, res, returnClone, readonly);
    }
    // not a prefixed name
    // TODO should we raise an error?
    return null;
  } else {
    // when the name is already defined...
    var defObj = defs[name];
    if (typeof defObj != 'object') throw "Block definition must be an object: found " + defObj + " for " + name;

    if (typeof defObj._initialized == 'undefined') {
      // Populate "type" depending on name
      if (typeof defObj.type == 'undefined') {
        if (name.indexOf(' ') == -1) {
          defObj.type = name;
        } else {
          defObj.type = name.substr(name.indexOf(' ') + 1);
        }
      }

      // If it is not a "data" type then let's deal with inheritance
      if (defObj.type != name && typeof defObj._widget == 'undefined') {
        var typeDef = _getModelDef(defs, defObj.type, true);
        var extended = objExtend(typeDef, defObj);
        defObj = extended;
        defs[name] = defObj;
      } else if (typeof defObj._widget == 'undefined' && typeof defObj._props == 'undefined' && typeof defObj._complex == 'undefined') {
        // TODO here I tried to deal with inheritance for every object without a "type" by using a simple deprefix.
        // but this break on theme containing "pageTheme" that would inherit from is parent. (creating a loop)
        /*
        var superType = _removePrefix(defObj.type);
        if (superType !== null) {
          console.log("Extending", typeDef, name, superType, defObj.type);
          var typeDef = _getModelDef(defs, superType, true);
          
          var extended = jQuery.extend(true, typeDef, defObj);
          defObj = extended;
          defs[name] = defObj;
        }
        */
      }
      defObj._writeable = true;
      defObj._initialized = true;
    }

    if (typeof defObj._props != 'undefined') {
      var def = defObj._props;
      def = def.split(" ");

      if (def.length > 0 && typeof defObj._writeable == 'undefined') {
        console.error("Altering a non writable object ", name, def, defObj);
        throw "Altering a non writable object: " + name + " def: " + def;
      }

      if (typeof defObj._processedDefs == 'undefined') {
        defObj._processedDefs = {};
      }

      if (typeof defObj._globalStyles == 'undefined') {
        defObj._globalStyles = {};
      }

      if (typeof defObj._defaultValues == 'undefined') {
        defObj._defaultValues = {};
      }

      for (var i = 0; i < def.length; i++) {
        var prop = def[i];
        if (prop.length === 0) continue;
        var origProp = prop;
        var defValue = null;
        // parses  "prop" "prop=value" and "prop[]" declarations
        var propDef = prop.match(/^([^=\[\]]+)(\[\])?(=?)(.*)$/);
        if (propDef !== null) {
          prop = propDef[1];
          // TODO array definition should be done differently
          if (propDef[2] == '[]') {
            // TODO type should not be defined in this function
            if (typeof defObj[prop] == 'undefined') defObj[prop] = [];
            defValue = [];
          }
          if (propDef[3] == '=') {
            // TODO remove hardcoded "visible" matching (this should be defined in the template definition)
            if (prop.match(/(^v|V)isible$/)) defValue = String(propDef[4]).toLowerCase() == 'true';
            else if (prop.match(/^customStyle$/)) {
              defValue = String(propDef[4]).toLowerCase() == 'true';
            } else defValue = propDef[4];
          }
        }
        // default values found in "properties" are not being processed by "modelEnsureValue" and by consequence do not call "themeUpdater".
        // TODO document why this is needed, or remove.
        if (defValue !== null) {
          if (typeof defObj._defaultValues[prop] == 'undefined') {
            // if (prop.match(/^_/)) console.log("defValue for", prop, "in", name);
            defObj._defaultValues[prop] = defValue;
          }
        }

        if (typeof defObj[prop] == 'undefined') {
          var val = _getModelDef(defs, name + ' ' + prop, true);
          if (val === null) {
            val = _getModelDef(defs, prop, true);
          }
          defObj[prop] = val;
        }

        defObj._processedDefs[prop] = origProp;
        defObj._complex = true;
      }

      delete defObj._props;
    }

    if (returnClone) {
      defObj._writeable = false;
      var cloned = objExtend({}, defObj);
      return cloned;
    } else if (readonly) {
      defObj._writeable = false;
      return defObj;
    } else {
      if (typeof defObj._writeable == 'undefined' || defObj._writeable === false) throw "Retrieving non writeable object definition: " + name;
      return defObj;
    }
  }
};

var _increaseUseCount = function(readonly, model) {
  if (!readonly) {
    if (typeof model._usecount == 'undefined') model._usecount = 0;
    model._usecount++;
  } else if (typeof model._usecount == 'undefined') {
    console.error("ERROR trying to bind an unused property while readonly", model);
    throw "ERROR trying to bind an unused property";
  }
};

var ensureGlobalStyle = function(defs, readonly, gsBindingProvider, modelName, path, gsFullPath, defaultValue, overrideDefault) {

  var globalStyleBindingBindValue = gsBindingProvider(gsFullPath, defaultValue, overrideDefault);

  if (typeof defs[modelName]._globalStyles[path] == 'undefined') {
    if (readonly) throw "Cannot find _globalStyle for " + path + " in " + modelName + "!";
    if (path.indexOf('.') != -1 || (typeof defs[modelName][path] == 'object' && typeof defs[modelName][path]._widget !== 'undefined')) {
      defs[modelName]._globalStyles[path] = globalStyleBindingBindValue;
    }
  } else if (defs[modelName]._globalStyles[path] != globalStyleBindingBindValue) throw "Unexpected conflicting globalStyle [2] for " + modelName + "/" + path + ": old=" + defs[modelName]._globalStyles[path] + " new=" + globalStyleBindingBindValue;
};

// themeUpdater, defaultValue, overrideDefault, setcategory are only used in !readonly mode
var modelEnsurePathAndGetBindValue = function(readonly, defs, themeUpdater, rootModelName, templateName, within, fullPath, defaultValue, overrideDefault, setcategory) {
  var modelName;
  var res;
  var path;
  // TODO remove '$' and '#' handing
  if (fullPath.substr(0, 1) == '$') {
    console.warn("DEPRECATED $ in bindingProvider: ", fullPath, templateName);
    var p = fullPath.indexOf('.');
    if (p == -1) {
      throw "Unexpected fullPath: " + fullPath + "/" + within + "/" + templateName + "/" + defaultValue + "/" + overrideDefault;
    } else {
      modelName = fullPath.substr(1, p - 1);
      path = fullPath.substr(p + 1);
      // TODO refactor me please
      if (modelName == 'theme') {
        var p2 = path.indexOf('.');
        modelName = path.substr(0, p2);
        path = path.substr(p2 + 1);
      } else {
        throw "Unexpected $ sequence: " + modelName + " in " + fullPath;
      }
      res = "$root.content().theme()." + modelName + "()." + path.replace(new RegExp('\\.', 'g'), '().');
    }
  } else if (fullPath.substr(0, 1) == '#') {
    console.warn("DEPRECATED # in bindingProvider: ", fullPath, templateName);
    modelName = rootModelName;
    path = fullPath.substr(1);
    res = "$root.content()." + path.replace(new RegExp('\\.', 'g'), '().');
  } else if (fullPath.substr(0, 8) == '_theme_.') {
    var p3 = fullPath.indexOf('.', 8);
    modelName = fullPath.substr(8, p3 - 8);
    path = fullPath.substr(p3 + 1);
    res = "$root.content().theme()." + modelName + "()." + path.replace(new RegExp('\\.', 'g'), '().');
  } else if (fullPath.substr(0, 7) == '_root_.') {
    modelName = rootModelName;
    path = fullPath.substr(7);
    res = "$root.content()." + path.replace(new RegExp('\\.', 'g'), '().');
  } else {
    modelName = templateName;
    path = within + fullPath;
    res = fullPath.replace(new RegExp('\\.', 'g'), '().');
  }

  if (typeof defs[modelName] === 'undefined') throw "Cannot find model def for [" + modelName + "]";

  var propPos = path.indexOf('.');
  var propName = propPos == -1 ? path : path.substr(0, propPos);

  if (modelName.indexOf('-') != -1) {
    console.error("ERROR cannot use - for block names", modelName);
    throw "ERROR unexpected char in block name: " + modelName;
  }
  if (propName.indexOf('-') != -1) {
    console.error("ERROR cannot use - for property names", propName);
    throw "ERROR unexpected char in property name: " + modelName;
  }

  // Fastpath
  if (readonly) {
    if (typeof defs[modelName]._globalStyle !== 'undefined' && typeof defs[modelName][propName] !== 'undefined' && defs[modelName][propName]._category == 'style') {
      res += '._defaultComputed';
    }
    return res;
  }

  // gets the writable model when "!readonly" or the readonly model otherwise
  var model;
  if (readonly) {
    if (typeof defaultValue !== 'undefined') throw "Cannot use defaultValue in readonly mode!";
    if (overrideDefault) throw "Cannot use overrideDefault in readonly mode for " + modelName + "/" + path + "/" + overrideDefault + "!";
    if (typeof setcategory !== 'undefined') throw "Cannot set category for " + modelName + "/" + path + "/" + setcategory + " in readonly mode!";
    model = _getModelDef(defs, modelName, false, true);
  } else {
    if (defs[modelName]._writeable === false) console.log("TODO debug use cases for this condition", modelName, path);
    model = _getModelDef(defs, modelName, defs[modelName]._writeable === false);
  }

  if (model === null) throw "Unexpected model for [" + modelName + "]";

  // if the property does not exists we have to create it.
  if (typeof model[propName] == 'undefined') {
    // when in readonly mode this cannot be done!
    if (readonly) throw "Cannot find path " + propName + " for " + modelName + "!";
    _modelCreateOrUpdateBlockDef(defs, modelName, propName);
    model = _getModelDef(defs, modelName, false);
  }

  // Needs to do this again, because "_modelCreateOrUpdateBlockDef" could have been just created the property (e.g: backgroundColor buttonBlock not getting defaultComputed in template-lm)
  if (typeof defs[modelName]._globalStyle !== 'undefined' && typeof defs[modelName][propName] !== 'undefined' && defs[modelName][propName] !== null && defs[modelName][propName]._category == 'style') {
    res += '._defaultComputed';
  }

  var childModel = model;
  try {
    _increaseUseCount(readonly, childModel);
    if (propPos != -1) {
      var mypath = path;
      do {
        var prop = mypath.substr(0, propPos);
        if (typeof childModel[prop] == 'undefined') {
          throw "Found an unexpected prop " + prop + " for model " + modelName + " for " + path;
        }

        childModel = childModel[prop];
        _increaseUseCount(readonly, childModel);
        mypath = mypath.substr(propPos + 1);
        propPos = mypath.indexOf('.');
      } while (propPos != -1);

      if (typeof childModel[mypath] == 'undefined' || childModel[mypath] === null) {
        throw "Found an unexpected path termination " + mypath + " for model " + modelName + " for " + path;
      }
      childModel = childModel[mypath];
    } else {
      childModel = childModel[path];
    }

    if (typeof childModel === 'undefined' || childModel === null) throw "Unexpected null model for " + modelName + "/" + within + "/" + fullPath;

    if (typeof setcategory !== 'undefined') {
      childModel._category = setcategory;
    }

    _increaseUseCount(readonly, childModel);
  } catch (e) {
    console.error("TODO ERROR Property lookup exception", e, modelName, path, templateName, fullPath, defs);
    throw e;
  }

  if (typeof defs[modelName]._globalStyle !== 'undefined' && typeof defs[modelName][propName] == 'object' && defs[modelName][propName] !== null && typeof defs[modelName][propName]._category != 'undefined' && defs[modelName][propName]._category == 'style') {
    // TODO can I restrict this code to !readonly mode?
    var gsBindingProvider = modelEnsurePathAndGetBindValue.bind(undefined, readonly, defs, themeUpdater, rootModelName, templateName, '');

    var subPath = path.indexOf('.') != -1 ? path.substr(path.indexOf('.')) : '';

    // The next code supports only properties with one dot (object.property).
    if (subPath.indexOf('.', 1) != -1) throw "TODO unsupported object nesting! " + path;

    var gsPath = defs[modelName]._globalStyle + '.' + propName;
    if (typeof defs[modelName][propName] == 'object' && defs[modelName][propName] !== null && typeof defs[modelName][propName]._globalStyle != 'undefined') {
      gsPath = defs[modelName][propName]._globalStyle;
    }

    ensureGlobalStyle(defs, readonly, gsBindingProvider, modelName, propName, gsPath, undefined, false);

    var gsFullPath = gsPath + subPath;

    if (typeof defaultValue == 'undefined' && defs[modelName]._defaultValues[path] !== null) defaultValue = defs[modelName]._defaultValues[path];

    ensureGlobalStyle(defs, readonly, gsBindingProvider, modelName, path, gsFullPath, defaultValue, overrideDefault);

    if (typeof defaultValue !== 'undefined') {
      if (readonly) {
        console.error("Cannot set a new theme default value", gsFullPath.substr(7), defaultValue, "while in readonly mode");
        throw "Cannot set a new theme default value (" + defaultValue + ") for " + gsFullPath.substr(7) + " while in readonly mode!";
      }
      themeUpdater('default', gsFullPath.substr(7), defaultValue);
    }

    // TODO complex stuff. If the theme uses inheritance we enforce it using with the same value, but this is a limit.
    defaultValue = null;

  }

  if (typeof defaultValue != 'undefined') {
    if (typeof defs[modelName]._defaultValues[path] == 'undefined' || (typeof overrideDefault != 'undefined' && overrideDefault)) {
      if (readonly) throw "Cannot set new _defaultValues [1] for " + path + " in " + modelName + "!";
      defs[modelName]._defaultValues[path] = defaultValue;
    } else {
      if (defaultValue === null) {
        if (readonly && defs[modelName]._defaultValues[path] !== null) {
          throw "Cannot set new _defaultValues [2] for " + path + " in " + modelName + "!";
        }
        // This remove default value. Ugly. (Needs this for defaults in template-lm socialLinksIcon)
        defs[modelName]._defaultValues[path] = null;
      } else if (defs[modelName]._defaultValues[path] != defaultValue) {
        console.error("TODO error!!! Trying to set a new default value for " + modelName + " " + path + " while it already exists (current: " + defs[modelName]._defaultValues[path] + ", new: " + defaultValue + ")");
        throw "Trying to set a new default value for " + modelName + " " + path + " while it already exists (current: " + defs[modelName].defaultValues[path] + ", new: " + defaultValue + ")";
      }
    }
  }

  return res;
};

var generateResultModel = function(templateDef) {
  var defs = templateDef._defs;
  var templateName = templateDef.templateName;

  var finalModelContent = _generateModel(defs, templateName);

  // TODO ugly to add this manually
  if (typeof defs['theme'] !== 'undefined') {
    finalModelContent.theme = _generateModel(defs, 'theme');
  }

  return finalModelContent;
};

module.exports = {
  // used to compile the template
  ensurePathAndGetBindValue: modelEnsurePathAndGetBindValue.bind(undefined, false),
  // used in runtime the template
  getBindValue: modelEnsurePathAndGetBindValue.bind(undefined, true),
  generateModel: _generateModel,
  generateResultModel: generateResultModel,
  getDef: _getDef,
  createOrUpdateBlockDef: _modelCreateOrUpdateBlockDef
};
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./domutils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/domutils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/parser.js":[function(require,module,exports){
(function (global){
"use strict";
/* global global: false */

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");
var converterUtils = require("./utils.js");
var elaborateDeclarations = require("./declarations.js");
var processStylesheetRules = require("./stylesheet.js");
var modelDef = require("./model.js");
var domutils = require("./domutils.js");

var wrapElementWithCondition = function(attribute, element, bindingProvider) {
  var cond = domutils.getAttribute(element, attribute);

  try {
    var binding = converterUtils.conditionBinding(cond, bindingProvider);
    $(element).before('<!-- ko if: ' + binding + ' -->');
    $(element).after('<!-- /ko -->');
    domutils.removeAttribute(element, attribute);
  } catch (e) {
    console.warn("Model ensure path failed in if/variant", element, cond, attribute);
    throw e;
  }

};

var replacedAttributes = function(element, attributeName) {
  domutils.setAttribute(element, attributeName, domutils.getAttribute(element, "replaced" + attributeName));
};

var processStyle = function(element, templateUrlConverter, bindingProvider, addUniqueId) {
  var style = domutils.getAttribute(element, 'replacedstyle');
  var newStyle = null;
  var newBindings;
  if (addUniqueId) newBindings = {
    uniqueId: '$data',
    attr: {
      id: 'id'
    }
  };

  var removeDisplayNone = domutils.getAttribute(element, 'data-ko-display') !== null;

  newStyle = elaborateDeclarations(style, undefined, templateUrlConverter, bindingProvider, element, newBindings, removeDisplayNone);

  // only when using "replaced"
  if (newStyle === null) {
    newStyle = style;
  } else {
    // in case there are no bindings we keep replacedstyle to be used by IE during output
    // otherwise I remove it because it will be overwritten by virtualAttrStyle binding.
    // TODO maybe we better use different names for "replaced" used during template conversion
    // and the ones used to create the output.
    domutils.removeAttribute(element, 'replacedstyle');
  }

  if (newStyle !== null) {
    if (newStyle.trim().length > 0) {
      domutils.setAttribute(element, 'style', newStyle);
    } else domutils.removeAttribute(element, 'style');
  }
};


// TODO fixing URLs is also needed where styles uses path (e.g: background-image, @import)
var _fixRelativePath = function(attribute, templateUrlConverter, index, element) {
  var url = domutils.getAttribute(element, attribute);
  var newUrl = templateUrlConverter(url);
  if (newUrl !== null) {
    domutils.setAttribute(element, attribute, newUrl);
  }
};


var processBlock = function(element, defs, themeUpdater, blockPusher, templateUrlConverter, contextName, rootModelName, containerName, generateUniqueId, templateCreator) {

  try {

  var templateName;
  var variantName = '',
    variantDef = '';
  if (contextName == 'block') {
    templateName = domutils.getAttribute(element, 'data-ko-block');
    domutils.removeAttribute(element, 'data-ko-block');
  } else if (contextName == 'template') {
    templateName = rootModelName;
  } else {
    throw "Unexpected context name while processing block: " + contextName;
  }

  // console.log("processBlock", contextName, rootModelName, containerName, templateName);

  // Remove element
  $('[data-ko-remove]', element).remove();

  var fixedBlocks = $('[data-ko-block]', element).replaceWith('<replacedblock>');

  // Urls in these attributes needs "relativization"
  var urlattrs = ['href', 'src', 'data-ko-placeholder-src', 'background'];
  for (var i = 0; i < urlattrs.length; i++) {
    // faccio il bind per non definire funzioni in un loop (jshint)
    var func = _fixRelativePath.bind(undefined, urlattrs[i], templateUrlConverter);
    $('[' + urlattrs[i] + ']', element).each(func);
  }

  var dataDefs = domutils.getAttribute(element, 'data-ko-properties');
  if (dataDefs === null) dataDefs = "";
  $("[data-ko-properties]", element).each(function(index, element) {
    if (dataDefs.length > 0) dataDefs = dataDefs + " ";
    dataDefs = dataDefs + domutils.getAttribute(element, 'data-ko-properties');
    domutils.removeAttribute(element, 'data-ko-properties');
  });

  modelDef.createOrUpdateBlockDef(defs, templateName, dataDefs, { contextName: contextName });

  var bindingProvider = modelDef.ensurePathAndGetBindValue.bind(undefined, defs, themeUpdater, rootModelName, templateName, '');
  if (contextName == 'block') bindingProvider('id', '');

  $('style', element).each(function(index, element) {
    var style = domutils.getInnerHtml(element);

    var blockDefsUpdater = modelDef.createOrUpdateBlockDef.bind(undefined, defs);
    var localWithBindingProvider = modelDef.ensurePathAndGetBindValue.bind(undefined, defs, themeUpdater, rootModelName);
    var newStyle = processStylesheetRules(style, undefined, localWithBindingProvider, blockDefsUpdater, themeUpdater, templateUrlConverter, rootModelName, templateName);

    if (newStyle != style) {
      if (newStyle.trim() !== '') {
        var tmpName = templateCreator(newStyle);
        domutils.setAttribute(element, 'data-bind', 'template: { name: \'' + tmpName + '\' }');
        // ho creato il template quindi posso svuotare il sorgente.
        domutils.setContent(element, '');
      } else {
        // remove empty styles blocks
        domutils.removeElements($(element));
      }
    }
  });

  processStyle(element, templateUrlConverter, bindingProvider, generateUniqueId);

  // TODO href should be supported. data-ko-display and data-ko-wrap should never happen in here.
  var notsupported = ['data-ko-display', 'data-ko-editable', 'data-ko-wrap', 'href'];
  for (var j = 0; j < notsupported.length; j++) {
    var attr = domutils.getAttribute(element, notsupported[j]);
    if (attr) {
      console.warn("ERROR: Unsupported " + notsupported[j] + " used together with data-ko-block", element);
      throw "ERROR: Unsupported " + notsupported[j] + " used together with data-ko-block";
    }
  }

  // simply preprocessed as data-ko-wrap + -ko-attr-href
  $("[data-ko-link]", element).each(function(index, element) {
    var urlVar = domutils.getAttribute(element, 'data-ko-link');
    var repStyle = domutils.getAttribute(element, 'replacedstyle');
    if (typeof repStyle == 'undefined' || repStyle === null) repStyle = '';
    if (repStyle !== '') repStyle = '-ko-attr-href: @' + urlVar + "; " + repStyle;
    else repStyle = '-ko-attr-href: @' + urlVar;
    domutils.setAttribute(element, 'replacedstyle', repStyle);
    domutils.setAttribute(element, 'data-ko-wrap', urlVar);
    domutils.removeAttribute(element, 'data-ko-link');
  });

  $("[replacedstyle]", element).each(function(index, element) {
    processStyle(element, templateUrlConverter, bindingProvider, false);
  });

  $("[replacedhttp-equiv]", element).each(function(index, element) {
    replacedAttributes(element, "http-equiv");
  });

  $("[data-ko-display]", element).each(function(index, element) {
    wrapElementWithCondition('data-ko-display', element, bindingProvider);
  });

  $("[data-ko-editable]", element).each(function(index, element) {
    var newBinding, defaultValue, model, currentBindings, dataBind;


    var dataEditable = domutils.getAttribute(element, "data-ko-editable");

    // TODO add validation of the editable

    var itemBindValue;
    var selectBinding;
    if (dataEditable.lastIndexOf('.') > 0) {
      var subs = dataEditable.substr(0, dataEditable.lastIndexOf('.'));
      itemBindValue = bindingProvider(subs);
    } else {
      itemBindValue = bindingProvider(dataEditable);
    }
    selectBinding = "wysiwygClick: function(obj, evt) { $root.selectItem(" + itemBindValue + ", $data); return false }, clickBubble: false, wysiwygCss: { selecteditem: $root.isSelectedItem(" + itemBindValue + ") }, scrollIntoView: $root.isSelectedItem(" + itemBindValue + ")";

    if (domutils.getLowerTagName(element) != 'img') {


      defaultValue = domutils.getInnerHtml(element);
      var modelBindValue = bindingProvider(dataEditable, defaultValue, true, 'wysiwyg');
      newBinding = "";

      if (!domutils.getAttribute(element, "id")) {
        newBinding += "wysiwygId: id()+'_" + dataEditable.replace('.', '_') + "', ";
      }

      if (typeof selectBinding !== 'undefined') {
        newBinding += selectBinding + ", ";
      }

      newBinding += "wysiwygOrHtml: " + modelBindValue;

      if (domutils.getLowerTagName(element) == 'td') {
        var wrappingDiv = $('<div data-ko-wrap="false" style="width: 100%; height: 100%"></div>')[0];
        domutils.setAttribute(wrappingDiv, 'data-bind', newBinding);
        var newContent = domutils.getInnerHtml($('<div></div>').append(wrappingDiv));
        domutils.setContent(element, newContent);
      } else {
        currentBindings = domutils.getAttribute(element, 'data-bind');
        dataBind = (currentBindings !== null ? currentBindings + ", " : "") + newBinding;
        domutils.setAttribute(element, 'data-bind', dataBind);
        domutils.setContent(element, '');
      }
      domutils.removeAttribute(element, 'data-ko-editable');
    } else {
      var width = domutils.getAttribute(element, 'width');
      if (width === '') width = null;
      if (width === null) {
        console.error("ERROR: data-ko-editable images must declare a WIDTH attribute!", element);
        throw "ERROR: data-ko-editable images must declare a WIDTH attribute!";
      }
      var height = domutils.getAttribute(element, 'height');
      if (height === '') height = null;

      var align = domutils.getAttribute(element, 'align');

      currentBindings = domutils.getAttribute(element, 'data-bind');

      // TODO this is ugly... maybe a better strategy is to pass this around using "data-" attributes
      var dynHeight = currentBindings && currentBindings.match(/virtualAttr: {[^}]* height: ([^,}]*)[,}]/);
      if (dynHeight) height = dynHeight[1];
      var dynWidth = currentBindings && currentBindings.match(/virtualAttr: {[^}]* width: ([^,}]*)[,}]/);
      if (dynWidth) width = dynWidth[1];

      var method;

      defaultValue = domutils.getAttribute(element, 'data-ko-placeholder-src');
      // TODO make sure this default value is the same as the one checked by img-wysiwyg template.
      var value = '';
      if (defaultValue) {
        value = domutils.getAttribute(element, 'src');
      } else {
        defaultValue = domutils.getAttribute(element, 'src');
      }

      var size;
      if (width && height) {
        size = width + "+'x'+" + height;
      } else if (!height) {
        size = "'w'+" + width + "+''";
      } else if (!width) {
        size = "'h'+" + height + "+''";
      }
      var placeholdersrc;
      var plheight = height || domutils.getAttribute(element, 'data-ko-placeholder-height');
      var plwidth = width || domutils.getAttribute(element, 'data-ko-placeholder-width');

      domutils.removeAttribute(element, 'src');
      domutils.removeAttribute(element, 'data-ko-editable');
      domutils.removeAttribute(element, 'data-ko-placeholder-height');
      domutils.removeAttribute(element, 'data-ko-placeholder-width');
      domutils.removeAttribute(element, 'data-ko-placeholder-src');

      if (defaultValue) {
        placeholdersrc = "{ width: " + plwidth + ", height: " + plheight + ", text: " + size + "}";
      }

      if (!plwidth || !plheight) {
        // TODO raise an exception?
        console.error("IMG data-ko-editable must declare width and height attributes, or their placeholder counterparts data-ko-placeholder-width/data-ko-placeholder-height", element);
        throw "ERROR: IMG data-ko-editable MUST declare width and height attributes, or their placeholder counterparts data-ko-placeholder-width/data-ko-placeholder-height";
      }

      var bindingValue = bindingProvider(dataEditable, value, false, 'wysiwyg');
      newBinding = "wysiwygSrc: { width: " + width + ", height: " + height + ", src: " + bindingValue + ", placeholder: " + placeholdersrc + " }";
      dataBind = (currentBindings !== null ? currentBindings + ", " : "") + newBinding;
      domutils.setAttribute(element, 'data-bind', dataBind);

      var tmplName = templateCreator(element);

      var containerBind = '{ width: ' + width;
      if (align == 'left') containerBind += ', float: \'left\'';
      else if (align == 'right') containerBind += ', float: \'right\'';
      else if (align == 'center') console.log('non so cosa fa align=center su una img e quindi non so come simularne l\'editing');
      else if (align == 'top') containerBind += ', verticalAlign: \'top\'';
      else if (align == 'middle') containerBind += ', verticalAlign: \'middle\'';
      else if (align == 'bottom') containerBind += ', verticalAlign: \'bottom\'';
      containerBind += '}';

      $(element).before('<!-- ko wysiwygImg: { _data: $data, _item: ' + itemBindValue + ', _template: \'' + tmplName + '\', _editTemplate: \'img-wysiwyg\', _src: ' + bindingValue + ', _width: ' + width + ', _height: ' + height + ', _align: ' + (align === null ? undefined : '\'' + align + '\'') + ', _size: ' + size + ', _method: ' + method + ', _placeholdersrc: ' + placeholdersrc + ', _stylebind: ' + containerBind + ' } -->');
      $(element).after('<!-- /ko -->');
    }

  });

  // Applied after the data-editable so to avoid processing hrefs for editable content
  $("[href]", element).each(function(index, element) {
    var attrValue = domutils.getAttribute(element, 'href');
    var newBinding = 'wysiwygHref: \'' + converterUtils.addSlashes(attrValue) + '\'';
    var currentBindings = domutils.getAttribute(element, 'data-bind');
    var dataBind = (currentBindings !== null ? currentBindings + ", " : "") + newBinding;
    domutils.setAttribute(element, 'data-bind', dataBind);
  });

  $("replacedblock", element).each(function(index, element) {
    var blockElement = fixedBlocks[index];

    var blockName = processBlock(blockElement, defs, themeUpdater, blockPusher, templateUrlConverter, 'block', templateName, containerName, true, templateCreator);
    // replaced blocks are defined in the model root
    var modelBindValue = modelDef.ensurePathAndGetBindValue(defs, themeUpdater, rootModelName, templateName, '', blockName);

    // this way we call block-wysiwyg or block-show and not directly the right block
    $(element).before('<!-- ko block: { data: ' + converterUtils.addSlashes(modelBindValue) + ', template: \'block\' } -->');
    $(element).after('<!-- /ko -->');
    $(element).remove();
  });

  // TODO do we really need to loop in reverse order?
  // data-ko-wrap have to be processed at the end, expecially after "replaceblocks"
  // otherwise a data-ko-wrap wrapping a data-ko-block would break everything.
  $($("[data-ko-wrap]", element).get().reverse(), element).each(function(index, element) {
    var cond = domutils.getAttribute(element, 'data-ko-wrap');
    if (typeof cond === 'undefined' || cond === '' || cond === 'true') {
      throw "Unsupported empty value for data-ko-wrap: use false value if you want to always remove the tag";
    }

    var condBinding = converterUtils.conditionBinding(cond, bindingProvider);

    /*
          var condBinding = false;
          if (typeof cond === 'undefined' || cond === '') {
            throw "Unsupported empty value for data-ko-wrap: use false value if you want to always remove the tag";
          } else if (cond === 'false') {
            condBinding = false;
          } else if (cond === 'true') {
            throw "Unsupported true value for data-ko-wrap. This makes no sense: use false or a variable";
          } else {
            condBinding = bindingProvider(cond)+'()';
          }
    */

    var dataBind = domutils.getAttribute(element, 'data-bind');

    var innerTmplName, outerTmplName;
    // TODO ugly hardcoded handling: at the very least this should be invoked by the data-container caller.
    if (dataBind !== '' && dataBind !== null && dataBind.match(/(block|wysiwygOrHtml):/)) {
      // we can't put the content in a template because it will be overwritten by the binding
      var innerTmplContent = '<!-- ko ' + dataBind + ' -->' + domutils.getInnerHtml(element) + '<!-- /ko -->';
      innerTmplName = templateCreator(innerTmplContent);
      domutils.removeAttribute(element, 'data-ko-wrap');
      outerTmplName = templateCreator(element);
      domutils.replaceHtml(element, '<!-- ko template: /* special */ (typeof templateMode != \'undefined\' && templateMode == \'wysiwyg\') || ' + condBinding + ' ? \'' + outerTmplName + '\' : \'' + innerTmplName + '\' --><!-- /ko -->');
    } else {
      // we put the content in a template and the frame in another template including this one.
      innerTmplName = templateCreator(domutils.getInnerHtml(element));
      domutils.removeAttribute(element, 'data-ko-wrap');
      domutils.setContent(element, '<!-- ko template: \'' + innerTmplName + '\' --><!-- /ko -->');
      outerTmplName = templateCreator(element);
      domutils.replaceHtml(element, '<!-- ko template: (typeof templateMode != \'undefined\' && templateMode == \'wysiwyg\') || ' + condBinding + ' ? \'' + outerTmplName + '\' : \'' + innerTmplName + '\' --><!-- /ko -->');
    }

  });

  templateCreator(element, templateName, 'show');

  blockPusher(rootModelName, templateName, contextName, containerName);

  return templateName;

  } catch (e) {
    console.error("Exception while parsing the template", e, element);
    throw e;
  }

};

function conditional_replace(html) {
  return html.replace(/<!--\[if ([^\]]*)\]>([\s\S]*?)<!\[endif\]-->/g, function(match, condition, body) {
    var dd = '<!-- cc:start -->';
    dd += body.replace(/<(\/?)([A-Za-z]*)/g, '<$1cc$2').replace(/<\/([^>]*)>/g,'<!-- cc:before:$1 --></$1><!-- cc:after:$1 -->');
    dd += '<!-- cc:end -->';
    var output = '<replacedcc condition="'+condition+'" style="display: none">';
    output += $('<div>').append($(dd)).html().replace(/<!-- cc:before:([^ ]*) --><\/\1><!-- cc:after:\1 -->/g, '</$1>')
      .replace(/^<!-- cc:start -->/, '')
      .replace(/<!-- cc:end -->$/, '');
    output += '</replacedcc>';
    // console.log("Returning empty string instead of", output);
    // if (true) return '';
    return output;
  });
}


var translateTemplate = function(templateName, html, templateUrlConverter, templateCreator) {
  var defs = {};
  var replacedHtml = conditional_replace(html.replace(/(<[^>]+\s)(style|http-equiv)(="[^"]*"[^>]*>)/gi, function(match, p1, p2, p3) {
    return p1 + 'replaced' + p2 + p3;
  }));
  var content = $(replacedHtml);
  var element = content[0];

  var blocks = []; // {rootName, blockName, containerName}
  var _blockPusher = function(rootName, blockName, contextName, containerName) {
    blocks.push({
      root: rootName,
      block: blockName,
      context: contextName,
      container: containerName
    });
  };

  // TODO have to accept nulls as undefineds (because of model.js behaviour)
  var themeUpdater = function(name, key, val) {
    if (typeof defs['themes'] === 'undefined') defs['themes'] = {};
    if (typeof defs['themes'][name] === 'undefined') defs['themes'][name] = {};
    if (typeof defs['themes'][name][key] === 'undefined' || defs['themes'][name][key] === null) defs['themes'][name][key] = val;
    else if (typeof val !== 'undefined' && val !== null) {
      var precVal = defs['themes'][name][key];
      if (precVal != val) console.log("Error setting a new default for property " + key + " in theme " + name + ". old:" + precVal + " new:" + val + "!");
    }
  };

  var containers = $("[data-ko-container]", content);
  var containersDom = {};
  containers.each(function(index, element) {
    var containerName = domutils.getAttribute(element, 'data-ko-container') + "Blocks";

    domutils.removeAttribute(element, 'data-ko-container');
    domutils.setAttribute(element, 'data-bind', 'block: ' + containerName);

    var containerBlocks = $("> [data-ko-block]", element);
    domutils.removeElements(containerBlocks, true);

    containersDom[containerName] = containerBlocks;
  });

  // TODO remove hardcoded properties: we need them because without these loading a basic template fails.
  // Needed in order to use data-ko-block
  modelDef.createOrUpdateBlockDef(defs, 'id');
  // Needed always as it is the default theme section.
  modelDef.createOrUpdateBlockDef(defs, 'bodyTheme');
  // Needed for data-ko-container
  modelDef.createOrUpdateBlockDef(defs, 'blocks', 'blocks[]');

  // Needed if you want to use a text variable? TODO this should not be needed!
  modelDef.createOrUpdateBlockDef(defs, 'text');

  processBlock(element, defs, themeUpdater, _blockPusher, templateUrlConverter, 'template', templateName, undefined, false, templateCreator);

  var blockProcess = function(containerName, index, element) {
    processBlock(element, defs, themeUpdater, _blockPusher, templateUrlConverter, 'block', templateName, containerName, true, templateCreator);
  };

  for (var prop in containersDom)
    if (containersDom.hasOwnProperty(prop)) {
      var containerBlocks = containersDom[prop];
      var containerName = prop;

      modelDef.ensurePathAndGetBindValue(defs, themeUpdater, templateName, templateName, '', containerName + ".blocks", "[]");

      containerBlocks.each(blockProcess.bind(undefined, containerName));
    }

  var templateDef = {
    _defs: defs,
    templateName: templateName,
    _blocks: blocks
  };

  if (typeof defs[templateName]._version !== 'undefined') {
    templateDef.version = defs[templateName]._version;
  }

  return templateDef;
};


module.exports = translateTemplate;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./declarations.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/declarations.js","./domutils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/domutils.js","./model.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/model.js","./stylesheet.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/stylesheet.js","./utils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/stylesheet.js":[function(require,module,exports){
"use strict";

// Parses CSS/stylesheets declarations -ko-blockdefs/-ko-themes
// It returns KO bindings but doesn't depend on KO
// Needs a bindingProvider
// Also uses a blockDefsUpdater to update definitions while parsing the stylesheet.

var cssParse = require("./../../../bower_components/mensch/lib/parser.js");
var console = require("./../../../bower_components/console-browserify/index.js");
var converterUtils = require("./utils.js");
var elaborateDeclarations = require("./declarations.js");

/* Temporary experimental code not used
var _processStyleSheetRules_processThemes = function (bindingProvider, themeUpdater, rules) {
  var sels, decls, i, j, k;
  for( i = 0; i < rules.length; i++) {
    if (rules[i].type == 'rule') {
      sels = rules[i].selectors;
      decls = rules[i].declarations;
      for (j = 0; j < sels.length; j++) {
        for (k = 0; k < decls.length; k++) if (decls[k].type == 'property') {
          try {
            var bindVal = bindingProvider('$'+decls[k].name);
            themeUpdater(sels[j], decls[k].name, decls[k].value, bindVal);
          } catch (e) {
            console.log("Exception setting theme for", decls[k].name, decls[k].value, e);
          }
        }
      }
    }
  }
};
*/

var _processStyleSheetRules_processBlockDef = function(blockDefsUpdater, rules) {
  var properties, namedProps, decls;
  // name, contextName, globalStyle, themeOverride, extend, min, max, widget, options, category, variant, help, blockDescription, version, 
  for (var i = 0; i < rules.length; i++) {
    if (rules[i].type == 'rule') {
      var sels = rules[i].selectors;
      var hasDeclarations = false;
      var hasPreviews = false;
      for (var j = 0; j < sels.length; j++) {
        if (sels[j].match(/:preview$/)) {
          hasPreviews = true;
        } else {
          hasDeclarations = true;
        }
      }
      if (hasPreviews && hasDeclarations) {
        console.log("cannot mix selectors type (:preview and declarations) in @supports -ko-blockdefs ", sels);
        throw "Cannot mix selectors type (:preview and declarations) in @supports -ko-blockdefs";
      }
      if (!hasPreviews && !hasDeclarations) {
        console.log("cannot find known selectors in @supports -ko-blockdefs ", sels);
        throw "Cannot find known selectors in @supports -ko-blockdefs";
      }
      if (hasDeclarations) {
        properties = '';
        namedProps = {};

/*
        name = undefined;
        contextName = undefined;
        globalStyle = undefined;
        themeOverride = undefined;
        extend = undefined;
        max = undefined;
        min = undefined;
        widget = undefined;
        options = undefined;
        category = undefined;
        variant = undefined;
        help = undefined;
        blockDescription = undefined;
        version = undefined;
        */
        decls = rules[i].declarations;
        for (var k = 0; k < decls.length; k++) if (decls[k].type == 'property') {
          if (decls[k].name == 'label') namedProps.name = decls[k].value;
          else if (decls[k].name == 'context') namedProps.contextName = decls[k].value;
          else if (decls[k].name == 'properties') properties = decls[k].value;
          else if (decls[k].name == 'theme') namedProps.globalStyle = '_theme_.' + decls[k].value;
          else if (decls[k].name == 'themeOverride') namedProps.themeOverride = String(decls[k].value).toLowerCase() == 'true';
          // else if (decls[k].name == 'extend') extend = decls[k].value;

          // else if (decls[k].name == 'max') max = decls[k].value;
          // else if (decls[k].name == 'min') min = decls[k].value;
          // else if (decls[k].name == 'options') options = decls[k].value;

          // else if (decls[k].name == 'widget') widget = decls[k].value;
          // else if (decls[k].name == 'category') category = decls[k].value;
          // else if (decls[k].name == 'variant') variant = decls[k].value;
          // else if (decls[k].name == 'help') help = decls[k].value;
          // else if (decls[k].name == 'blockDescription') blockDescription = decls[k].value;
          // else if (decls[k].name == 'version') version = decls[k].value;
          else {
            namedProps[decls[k].name] = decls[k].value;
            // TODO in past we detected unsupported properties, while now we simple push every declaration in a namedProperty.
            // This make it harder to spot errors in declarations.
            // console.warn("Unknown property processing @supports -ko-blockdefs ", decls[k], sels);
          }
        }
        for (var l = 0; l < sels.length; l++) {
          blockDefsUpdater(sels[l], properties, namedProps);
        }
      }
      if (hasPreviews) {
        for (var m = 0; m < sels.length; m++) {
          var localBlockName = sels[m].substr(0, sels[m].indexOf(':'));
          var previewBindings = rules[i].declarations;
          blockDefsUpdater(localBlockName, undefined, { previewBindings: previewBindings });
        }
      }

    } else {
      // Ignoring comments or other content
    }
  }
};

var processStylesheetRules = function(style, rules, localWithBindingProvider, blockDefsUpdater, themeUpdater, templateUrlConverter, rootModelName, templateName) {
  var newStyle = style;
  var lastStart = null;

  if (typeof rules == 'undefined') {
    var styleSheet = cssParse(style, {
      comments: true,
      position: true
    });
    if (styleSheet.type != 'stylesheet' || typeof styleSheet.stylesheet == 'undefined') {
      console.log("unable to process styleSheet", styleSheet);
      throw "Unable to parse stylesheet";
    }
    rules = styleSheet.stylesheet.rules;
  }

  // WARN currenlty this parses rules in reverse order so that string replacements works using input "positions"
  // otherwise it should compute new offsets on every replacement.
  // But this create issues because of definitions being parsed in reverse order, so this is not a good idea.
  // Sometimes, to work around this issues, you need to create 2 different <style> blocks.
  var bindingProvider;

  for (var i = rules.length - 1; i >= 0; i--) {
    if (rules[i].type == 'supports' && rules[i].name == '-ko-blockdefs') {
      _processStyleSheetRules_processBlockDef(blockDefsUpdater, rules[i].rules);
      newStyle = converterUtils.removeStyle(newStyle, rules[i].position.start, lastStart, 0, 0, 0, '');
      /* temporary experimental code not used
      } else if (rules[i].type == 'supports' && rules[i].name == '-ko-themes') {
        bindingProvider = localWithBindingProvider.bind(this, 'theme', '');
        _processStyleSheetRules_processThemes(bindingProvider, themeUpdater, rules[i].rules);
        newStyle = converterUtils.removeStyle(newStyle, rules[i].position.start, lastStart, 0, 0, 0, '');
      */
    } else if (rules[i].type == 'media' || rules[i].type == 'supports') {
      newStyle = processStylesheetRules(newStyle, rules[i].rules, localWithBindingProvider, blockDefsUpdater, themeUpdater, templateUrlConverter, rootModelName, templateName);
    } else if (rules[i].type == 'comment') {
      // ignore comments
    } else if (rules[i].type == 'rule') {
      var sels = rules[i].selectors;
      var newSel = "";
      var foundBlockMatch = null;
      for (var j = 0; j < sels.length; j++) {
        if (newSel.length > 0) newSel += ", ";
        var match = sels[j].match(/\[data-ko-block=([^ ]*)\]/);
        if (match !== null) {
          if (foundBlockMatch !== null && foundBlockMatch != match[1]) throw "Found multiple block-match attribute selectors: cannot translate it (" + foundBlockMatch + " vs " + match[1] + ")";
          foundBlockMatch = match[1];
        }
        newSel += '<!-- ko text: templateMode ==\'wysiwyg\' ? \'#main-wysiwyg-area \' : \'\' --><!-- /ko -->' + sels[j];
      }
      if (foundBlockMatch) {
        var loopPrefix = '<!-- ko foreach: $root.findObjectsOfType($data, \'' + foundBlockMatch + '\') -->';
        var loopPostfix = '<!-- /ko -->';
        var end = lastStart;
        var spacing = " ";
        if (rules[i].declarations.length > 0) {
          if (rules[i].declarations[0].position.start.line != rules[i].position.end.line) {
            spacing = "\n" + (new Array(rules[i].position.start.col)).join(" ");
          }
          end = rules[i].declarations[rules[i].declarations.length - 1].position.end;
        }
        if (end === null) newStyle += spacing + loopPostfix;
        else if (end == lastStart) newStyle = converterUtils.removeStyle(newStyle, end, lastStart, 0, 0, 0, spacing + loopPostfix);
        else newStyle = converterUtils.removeStyle(newStyle, end, lastStart, 0, 0, 0, spacing + '}' + spacing + loopPostfix);
        newSel = loopPrefix + spacing + newSel.replace(new RegExp('\\[data-ko-block=' + foundBlockMatch + '\\]', 'g'), '<!-- ko text: \'#\'+id() -->' + foundBlockMatch + '<!-- /ko -->');

        blockDefsUpdater(foundBlockMatch, '', { contextName: 'block' });
      }
      // TODO mensch update (using original mensch library we needed this line, while the patched one doesn't need this code)
      // newSel += " {";
      var localBlockName = foundBlockMatch ? foundBlockMatch : templateName;
      bindingProvider = localWithBindingProvider.bind(this, localBlockName, '');
      var elaboratedStyle = elaborateDeclarations(newStyle, rules[i].declarations, templateUrlConverter, bindingProvider);
      if (elaboratedStyle !== null) newStyle = elaboratedStyle;

      newStyle = converterUtils.removeStyle(newStyle, rules[i].position.start, rules[i].position.end, 0, 0, 0, newSel);
    } else {
      console.log("Unknown rule type", rules[i].type, "while parsing <style> rules");
    }
    lastStart = rules[i].position.start;
  }
  return newStyle;
};

module.exports = processStylesheetRules;
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/mensch/lib/parser.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/mensch/lib/parser.js","./declarations.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/declarations.js","./utils.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/utils.js":[function(require,module,exports){
"use strict";
var console = require("./../../../bower_components/console-browserify/index.js");
var jsep = require("./../../../bower_components/jsep/src/jsep.js");

jsep.addBinaryOp("or", 1);
jsep.addBinaryOp("and", 2);
jsep.addBinaryOp("eq", 6);
jsep.addBinaryOp("neq", 6);
jsep.addBinaryOp("lt", 7);
jsep.addBinaryOp("lte", 7);
jsep.addBinaryOp("gt", 7);
jsep.addBinaryOp("gte", 7);

var addSlashes = function(str) {
  return str.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
};

var removeStyle = function(style, startPos, endPos, skipRows, startOffset, endOffset, insert) {
  var styleRows = style.split("\n");
  var start = startOffset;
  var end = endOffset;
  for (var r = 1 + skipRows; r < startPos.line; r++) start += styleRows[r - 1 - skipRows].length + 1;
  start += startPos.col;
  if (endPos !== null) {
    for (var r2 = 1 + skipRows; r2 < endPos.line; r2++) end += styleRows[r2 - 1 - skipRows].length + 1;
    end += endPos.col;
  } else end += style.length + 1;
  var newStyle = style.substr(0, start - 1) + insert + style.substr(end - 1);
  return newStyle;
};

var expressionGenerator = function(node, bindingProvider, defVal) {
  function mapOperator(op) {
    switch (op) {
      case 'or':
        return '||';
      case 'and':
        return '&&';
      case 'lt':
        return '<';
      case 'lte':
        return '<=';
      case 'gt':
        return '>';
      case 'gte':
        return '>=';
      case 'eq':
        return '==';
      case 'neq':
        return '!=';
      default:
        return op;
    }
  }

  function gen(node, bindingProvider, lookupmember, defVal) {
    if (typeof lookupmember == 'undefined') lookupmember = true;

    if (typeof defVal !== 'undefined' && node.type !== "Identifier" && node.type !== "MemberExpression") console.log("Cannot apply default value to variable when using expressions");

    if (node.type === "BinaryExpression" || node.type === "LogicalExpression") {
      return '(' + gen(node.left, bindingProvider, lookupmember) + ' ' + mapOperator(node.operator) + ' ' + gen(node.right, bindingProvider, lookupmember) + ')';
    } else if (node.type === 'CallExpression') {
      var args = node.arguments.map(function(n) {
        return gen(n, bindingProvider, lookupmember);
      });
      return gen(node.callee, bindingProvider, lookupmember) + '(' + args.join(', ') + ')';
    } else if (node.type === "UnaryExpression") {
      return node.operator + gen(node.argument, bindingProvider, lookupmember);
    } else if (node.type == 'MemberExpression' && node.computed) {
      throw "Unexpected computed member expression";
      // return gen(node.object) + '[' + gen(node.property) + ']';
    } else if (node.type == 'MemberExpression' && !node.computed) {
      var me = gen(node.object, bindingProvider, false) + '.' + gen(node.property, bindingProvider, false);
      if (lookupmember && node.object.name !== 'Math' && node.object.name !== 'Color') return bindingProvider(me, defVal) + '()';
      return me;
    } else if (node.type === "Literal") {
      return node.raw;
    } else if (node.type === 'Identifier') {
      var id = node.name;
      if (lookupmember) return bindingProvider(id, defVal) + '()';
      else return id;
    } else if (node.type === 'ConditionalExpression') {
      return '(' + gen(node.test, bindingProvider, lookupmember) + ' ? ' + gen(node.consequent, bindingProvider, lookupmember) + ' : ' + gen(node.alternate, bindingProvider, lookupmember) + ')';
    } else if (node.type === 'Compound') {
      throw "Syntax error in expression: operator expected after " + gen(node.body[0], bindingProvider, false);
    } else {
      throw "Found an unsupported expression type: " + node.type;
    }
  }

  return gen(node, bindingProvider, undefined, defVal);
};

var expressionBinding = function(expression, bindingProvider, defaultValue) {
  var matches;
  if (typeof defaultValue !== 'undefined' && defaultValue !== null) {
    var check = expression.trim().replace(/@\[([^\]]+)\]|@([a-zA-Z0-9\._]+)\b/g, '###var###');
    check = check.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    if (check == '###var###') matches = [null, defaultValue];
    else {
      check = '^' + check.replace(/###var###/g, '(.+)') + '$';
      matches = defaultValue.trim().match(new RegExp(check));
      if (!matches) {
        // TODO throw error?
        console.log("Cannot find matches", matches, "for", defaultValue, expression, check, expression);
        throw "Cannot find default value for " + expression + " in " + defaultValue;
      }
    }
  }
  try {
    var vars = 0;
    var result = "'" + expression.replace(/@\[([^\]]+)\]|@([a-zA-Z0-9\._]+)\b|(')/g, function(match, p1, p2, p3) {
      // escaping..
      if (p3) return "\\" + p3;
      vars++;
      var varName = p1 || p2;
      var defVal;
      if (matches) {
        if (typeof matches[vars] !== 'undefined') {
          defVal = matches[vars].trim();
        } else {
          console.log("ABZZZ Cannot find default value for", varName, "in", matches, "as", vars);
        }
      }
      // in case we found p1 we are in a @[sequence] so we start an expression parser
      if (p1) {
        var parsetree = jsep(p1);
        var gentree = expressionGenerator(parsetree, bindingProvider, defVal);
        return "'+" + gentree + "+'";
      }
      return "'+" + bindingProvider(varName, defVal) + "()+'";
    }) + "'";
    result = result.replace(/(^|[^\\])''\+/g, '$1').replace(/\+''/g, '');

    if (vars === 0 && result !== 'false' && result !== 'true') {
      console.error("Unexpected expression with no valid @variable references", expression);
    }
    return result;
  } catch (e) {
    throw "Exception parsing expression " + expression + " " + e;
  }
};

var conditionBinding = function(condition, bindingProvider) {
  var parsetree = jsep(condition);
  var gentree = expressionGenerator(parsetree, bindingProvider);
  return gentree;
};

module.exports = {
  addSlashes: addSlashes,
  removeStyle: removeStyle,
  conditionBinding: conditionBinding,
  expressionBinding: expressionBinding
};
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/jsep/src/jsep.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/jsep/src/jsep.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/wrapper.js":[function(require,module,exports){
(function (global){
"use strict";

// This is complex code to handle "live" model instrumentation and dependency tracking.
// This adds _wrap and _unwrap methods to the model and also instrument the block list so to automatically
// wrap/upwrap objects on simple array methods (push, splice)

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var kowrap = require("./../../../bower_components/knockout.wrap/knockout.wrap.js");
var console = require("./../../../bower_components/console-browserify/index.js");

var _getOptionsObject = function(options) {
  var optionsCouples = options.split('|');
  var opts = {};
  for (var i = 0; i < optionsCouples.length; i++) {
    var opt = optionsCouples[i].split('=');
    opts[opt[0]] = opt.length > 1 ? opt[1] : opt[0];
  }
  return opts;
};

// generate a computed variable handling the fallback to theme variable
var _makeComputed = function(target, def, nullIfEqual, schemeSelector, themePath, themes) {
  var res = ko.computed({
    'read': function() {
      var val = target();
      if (val === null) {
        var scheme = ko.utils.unwrapObservable(schemeSelector);
        if (typeof scheme == 'undefined' || scheme == 'custom') {
          return ko.utils.unwrapObservable(def);
        } else {
          return themes[scheme][themePath];
        }
      } else {
        return val;
      }
    },
    'write': function(value) {
      var scheme = ko.utils.unwrapObservable(schemeSelector);
      var defVal;
      if (typeof scheme == 'undefined' || scheme == 'custom') {
        defVal = ko.utils.peekObservable(def);
      } else {
        defVal = themes[scheme][themePath];
      }

      if (!!nullIfEqual) {
        if (value == defVal) target(null);
        else target(value);
      } else {
        var current = ko.utils.peekObservable(target);
        if (value != defVal || current !== null) target(value);
      }

    }
  });
  return res;
};

var _nextVariantFunction = function(ko, prop, variants) {
  var currentValue = ko.utils.unwrapObservable(prop);
  var variantValue;

  for (var i = 0; i < variants.length; i++) {
    variantValue = ko.utils.peekObservable(variants[i]);
    if (variantValue == currentValue) break;
  }

  if (i == variants.length) {
    console.warn("Didn't find a variant!", prop, currentValue, variants);
    i = variants.length - 1;
  }

  var nextVariant = i + 1;
  if (nextVariant == variants.length) nextVariant = 0;
  var nextValue = ko.utils.peekObservable(variants[nextVariant]);

  prop(nextValue);
};

var _getVariants = function(def) {
  var variantProp = def._variant;
  var variantOptions;
  if (typeof def[variantProp] !== 'object' || typeof def[variantProp]._widget === 'undefined' || (typeof def[variantProp]._options !== 'string' && def[variantProp]._widget !== 'boolean')) {
    console.error("Unexpected variant declaration", variantProp, def[variantProp]);
    throw "Unexpected variant declaration: cannot find property " + variantProp + " or its _options string and it is not a boolean";
  }
  // TODO I read the "keys" but this is not 100% correct because they are not garanteed to be sorted as in declaration
  if (typeof def[variantProp]._options == 'string') {
    variantOptions = Object.keys(_getOptionsObject(def[variantProp]._options));
  } else {
    variantOptions = [true, false];
  }
  return variantOptions;
};

var _makeComputedFunction = function(def, defs, thms, ko, contentModel, isContent, t) {
  if (typeof def == 'undefined') {
    if (typeof ko.utils.unwrapObservable(t).type === 'undefined') {
      console.log("TODO ERROR Found a non-typed def ", def, t);
      throw "Found a non-typed def " + def;
    }
    var type = ko.utils.unwrapObservable(ko.utils.unwrapObservable(t).type);
    def = defs[type];
    if (typeof def !== 'object') console.log("TODO ERROR Found a non-object def ", def, "for", type);
  }

  if (typeof contentModel == 'undefined' && typeof isContent != 'undefined' && isContent) {
    contentModel = t;
  }

  var selfPath = '$root.content().';

  var pp = def._globalStyles;
  if (typeof pp != 'undefined')
    for (var p in pp)
      if (pp.hasOwnProperty(p)) {
        var schemePathOrig = '$root.content().theme().scheme';
        var schemePath, vm, path;

        if (pp[p].substr(0, selfPath.length) == selfPath) {
          path = pp[p].substr(selfPath.length);
          vm = contentModel;
        } else {
          throw "UNEXPECTED globalStyle path (" + pp[p] + ") outside selfPath (" + selfPath + ")";
        }
        if (schemePathOrig.substr(0, selfPath.length) == selfPath) {
          schemePath = schemePathOrig.substr(selfPath.length);
        } else {
          console.log("IS THIS CORRECT?", schemePathOrig, selfPath);
          schemePath = schemePathOrig;
        }

        var schemeSelector = vm;

        var pathParts = path.split('().');
        var themePath = '';
        var skip = true;
        for (var i = 0; i < pathParts.length; i++) {
          vm = ko.utils.unwrapObservable(vm)[pathParts[i]];
          // ugly thing to find the path to the schema color property (sometimes we have theme.bodyTheme, some other we have content.theme.bodyTheme...)
          if (skip) {
            if (pathParts[i] == 'theme') skip = false;
          } else {
            if (themePath.length > 0) themePath += '.';
            themePath += pathParts[i];
          }
        }

        var schemeParts = schemePath.split('().');
        for (var i3 = 0; i3 < schemeParts.length; i3++) {
          schemeSelector = ko.utils.unwrapObservable(schemeSelector)[schemeParts[i3]];
        }

        var nullIfEqual = true;
        var tParts = p.split('.');
        var target = t;
        for (var i2 = 0; i2 < tParts.length; i2++) {
          target = ko.utils.unwrapObservable(target)[tParts[i2]];
        }

        if (!ko.isObservable(target)) throw "Unexpected non observable target " + p + "/" + themePath;

        target._defaultComputed = _makeComputed(target, vm, nullIfEqual, schemeSelector, themePath, thms);
      }

  if (typeof def._variant != 'undefined') {
    var pParts = def._variant.split('.');
    // looks in t and not contentModel because variants are declared on single blocks.
    var pTarget = t;
    var pParent = ko.utils.unwrapObservable(t);
    for (var i4 = 0; i4 < pParts.length; i4++) {
      pTarget = ko.utils.unwrapObservable(pTarget)[pParts[i4]];
    }
    if (typeof pTarget._defaultComputed != 'undefined') {
      console.log("Found variant on a style property: beware variants should be only used on content properties because they don't match the theme fallback behaviour", def._variant);
      pTarget = pTarget._defaultComputed;
    }
    if (typeof pTarget == 'undefined') {
      console.log("ERROR looking for variant target", def._variant, t);
      throw "ERROR looking for variant target " + def._variant;
    }
    pParent._nextVariant = _nextVariantFunction.bind(pTarget, ko, pTarget, _getVariants(def));
  }

  for (var prop2 in def)
    if (def.hasOwnProperty(prop2)) {
      var val = def[prop2];
      if (typeof val == 'object' && val !== null && typeof val._context != 'undefined' && val._context == 'block') {
        var propVm = contentModel[prop2]();
        var newVm = _makeComputedFunction(defs[prop2], defs, thms, ko, contentModel, isContent, propVm);
        t[prop2](newVm);
      } else if (typeof val == 'object' && val !== null && val.type == 'blocks') {
        var mainVm = contentModel[prop2]();
        var blocksVm = mainVm.blocks();
        var oldBlock, blockType, newBlock;
        for (var ib = 0; ib < blocksVm.length; ib++) {
          oldBlock = ko.utils.unwrapObservable(blocksVm[ib]);
          blockType = ko.utils.unwrapObservable(oldBlock.type);
          newBlock = _makeComputedFunction(defs[blockType], defs, thms, ko, contentModel, isContent, oldBlock);
          blocksVm[ib](newBlock);
        }

        var blocksObs = mainVm.blocks;

        _augmentBlocksObservable(blocksObs, _blockInstrumentFunction.bind(mainVm, undefined, defs, thms, ko, undefined, contentModel, isContent));

        contentModel[prop2]._wrap = _makeBlocksWrap.bind(contentModel[prop2], blocksObs._instrumentBlock);
        contentModel[prop2]._unwrap = _unwrap.bind(contentModel[prop2]);
      }
    }

  return t;
};

var _augmentBlocksObservable = function(blocksObs, instrument) {
  blocksObs._instrumentBlock = instrument;
  if (typeof blocksObs.origPush == 'undefined') {
    blocksObs.origPush = blocksObs.push;
    blocksObs.push = _makePush.bind(blocksObs);
    blocksObs.origSplice = blocksObs.splice;
    blocksObs.splice = _makeSplice.bind(blocksObs);
  }
};

var _makeBlocksWrap = function(instrument, inputModel) {
  var model = ko.toJS(inputModel);
  var input = model.blocks;
  model.blocks = [];
  var res = kowrap.fromJS(model, undefined, true)();
  _augmentBlocksObservable(res.blocks, instrument);
  for (var i = 0; i < input.length; i++) {
    var obj = ko.toJS(input[i]);
    // console.log("_makeBlocksWrap set blockId", obj.id, 'block_'+i);
    obj.id = 'block_' + i;
    res.blocks.push(obj);
  }
  this(res);
};

var _makePush = function() {
  if (arguments.length > 1) throw "Array push with multiple arguments not implemented";
  // unwrap observable blocks, otherwise visibility (dependency) handling breaks
  if (arguments.length > 0 && ko.isObservable(arguments[0])) {
    if (typeof arguments[0]._unwrap == 'function') {
      arguments[0] = arguments[0]._unwrap();
    } else {
      console.log("WARN: pushing observable with no _unwrap function (TODO remove me, expected condition)");
    }
  }
  if (!ko.isObservable(arguments[0])) {
    var instrumented = this._instrumentBlock(arguments[0]);
    return this.origPush.apply(this, [instrumented]);
  } else {
    return this.origPush.apply(this, arguments);
  }
};

var _makeSplice = function() {
  if (arguments.length > 3) throw "Array splice with multiple objects not implemented";
  if (arguments.length > 2 && ko.isObservable(arguments[2])) {
    if (typeof arguments[2]._unwrap == 'function') {
      arguments[2] = arguments[2]._unwrap();
    } else {
      console.log("WARN: splicing observable with no _unwrap function (TODO remove me, expected condition)");
    }
  }
  if (arguments.length > 2 && !ko.isObservable(arguments[2])) {
    var instrumented = this._instrumentBlock(arguments[2]);
    return this.origSplice.apply(this, [arguments[0], arguments[1], instrumented]);
  } else {
    return this.origSplice.apply(this, arguments);
  }
};

// def, defs and themes are bound in "_modelInstrument" while the next parameters are exposed by this module
var _blockInstrumentFunction = function(def, defs, themes, knockout, self, modelContent, isContent, self2) {
  // ugly: sometimes we have to bind content but not self, so we repeat self at the end as "self2"
  if (typeof self == 'undefined') self = self2;

  var computedFunctions;
  computedFunctions = {
    '': _makeComputedFunction.bind(self, def, defs, themes, knockout, modelContent, isContent)
  };

  var res = kowrap.fromJS(self, computedFunctions, true);
  res._unwrap = _unwrap.bind(res);
  return res;
};

var _wrap = function(instrument, unwrapped) {
  var newContent = ko.utils.unwrapObservable(instrument(ko, unwrapped, undefined, true));
  this(newContent);
};

var _unwrap = function() {
  return ko.toJS(this);
};

var _modelInstrument = function(model, modelDef, defs) {
  var _instrument = _blockInstrumentFunction.bind(undefined, modelDef, defs, defs['themes']);
  var res = _instrument(ko, model, undefined, true);
  // res._instrument = _instrument;
  res._wrap = _wrap.bind(res, _instrument);
  res._unwrap = _unwrap.bind(res);
  return res;
};

module.exports = _modelInstrument;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../../bower_components/knockout.wrap/knockout.wrap.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout.wrap/knockout.wrap.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/ext/color.js":[function(require,module,exports){
(function (global){
var tinycolor = require("./../../../bower_components/tinycolor/tinycolor.js");

function Color(tinycolor) {
  this.getBrightness = function(color) {
    return tinycolor(color).getBrightness();
  };
  this.isLight = function(color) {
    return tinycolor(color).isLight();
  };
  this.isDark = function(color) {
    return tinycolor(color).isDark();
  };
  this.getLuminance = function(color) {
    return tinycolor(color).getLuminance();
  };


  this.lighten = function(color, amount) {
    return tinycolor(color).lighten(amount).toHexString();
  };
  this.brighten = function(color, amount) {
    return tinycolor(color).brighten(amount).toHexString();
  };
  this.darken = function(color, amount) {
    return tinycolor(color).darken(amount).toHexString();
  };
  this.desaturate = function(color, amount) {
    return tinycolor(color).desaturate(amount).toHexString();
  };
  this.saturate = function(color, amount) {
    return tinycolor(color).saturate(amount).toHexString();
  };
  this.greyscale = function(color) {
    return tinycolor(color).greyscale().toHexString();
  };
  this.spin = function(color, amount) {
    return tinycolor(color).spin(amount).toHexString();
  };
  this.complement = function(color) {
    return tinycolor(color).complement().toHexString();
  };

  this.mix = tinycolor.mix;
  this.readability = tinycolor.readability;
  this.isReadable = tinycolor.isReadable;
  this.mostReadable = tinycolor.mostReadable;
}

var colorPlugin = function(vm) {
  global.Color = new Color(tinycolor);
};

module.exports = colorPlugin;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/tinycolor/tinycolor.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/tinycolor/tinycolor.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/ext/localstorage.js":[function(require,module,exports){
(function (global){
"use strict";
/* global global: false */
var console = require("./../../../bower_components/console-browserify/index.js");
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var lsLoader = function(hash_key, emailProcessorBackend) {
  var mdStr = global.localStorage.getItem("metadata-" + hash_key);
  if (mdStr !== null) {
    var model;
    var td = global.localStorage.getItem("template-" + hash_key);
    if (td !== null) model = JSON.parse(td);
    var md = JSON.parse(mdStr);
    return {
      metadata: md,
      model: model,
      extension: lsCommandPluginFactory(md, emailProcessorBackend)
    };
  } else {
    throw "Cannot find stored data for "+hash_key;
  }
};

var lsCommandPluginFactory = function(md, emailProcessorBackend) {
  var commandsPlugin = function(mdkey, mdname, viewModel) {

    // console.log("loading from metadata", md, model);
    var saveCmd = {
      name: 'Save', // l10n happens in the template
      enabled: ko.observable(true)
    };
    saveCmd.execute = function() {
        saveCmd.enabled(false);
        var postUrl = emailProcessorBackend ? emailProcessorBackend : '/dl/';
        var templateTitleInputId = 'templateTitle';
        var titleInputElement = global.document.getElementById(templateTitleInputId);
        var templateTitle = titleInputElement.value;
        console.log("save template " + templateTitle + " " + postUrl);
        var post = $.post(postUrl, {
            action: 'save',
            html: viewModel.exportHTML(),
            title: templateTitle
        }, null, 'html');
        post.fail(function() {
            console.log("fail", arguments);
            viewModel.notifier.error(viewModel.t('Unexpected error talking to server: contact us!'));
        });
        post.success(function() {
            console.log("success", arguments);
            viewModel.notifier.success(viewModel.t("Template saved..."));
        });
        post.always(function() {
            saveCmd.enabled(true);
        });
      /*
      saveCmd.enabled(false);
      viewModel.metadata.changed = Date.now();
      if (typeof viewModel.metadata.key == 'undefined') {
        console.warn("Unable to find ket in metadata object...", viewModel.metadata);
        viewModel.metadata.key = mdkey;
      }
      global.localStorage.setItem("metadata-" + mdkey, viewModel.exportMetadata());
      global.localStorage.setItem("template-" + mdkey, viewModel.exportJSON());
      saveCmd.enabled(true);
      */
    };
    var testCmd = {
      name: 'Test', // l10n happens in the template
      enabled: ko.observable(true)
    };
    var downloadCmd = {
      name: 'Download', // l10n happens in the template
      enabled: ko.observable(true)
    };
    testCmd.execute = function() {
      testCmd.enabled(false);
      var email = global.localStorage.getItem("testemail");
      if (email === null || email == 'null') email = viewModel.t('Insert here the recipient email address');
      email = global.prompt(viewModel.t("Test email address"), email);
      if (email.match(/@/)) {
        global.localStorage.setItem("testemail", email);
        console.log("TODO testing...", email);
        var postUrl = emailProcessorBackend ? emailProcessorBackend : '/dl/';
        var post = $.post(postUrl, {
          action: 'email',
          rcpt: email,
          subject: "[test] " + mdkey + " - " + mdname,
          html: viewModel.exportHTML()
        }, null, 'html');
        post.fail(function() {
          console.log("fail", arguments);
          viewModel.notifier.error(viewModel.t('Unexpected error talking to server: contact us!'));
        });
        post.success(function() {
          console.log("success", arguments);
          viewModel.notifier.success(viewModel.t("Test email sent..."));
        });
        post.always(function() {
          testCmd.enabled(true);
        });
      } else {
        global.alert(viewModel.t('Invalid email address'));
        testCmd.enabled(true);
      }
    };
    downloadCmd.execute = function() {
      downloadCmd.enabled(false);
      viewModel.notifier.info(viewModel.t("Downloading..."));
      viewModel.exportHTMLtoTextarea('#downloadHtmlTextarea');
      var postUrl = emailProcessorBackend ? emailProcessorBackend : '/dl/';
      global.document.getElementById('downloadForm').setAttribute("action", postUrl);
      global.document.getElementById('downloadForm').submit();
      downloadCmd.enabled(true);
    };

    viewModel.save = saveCmd;
    viewModel.test = testCmd;
    viewModel.download = downloadCmd;
  }.bind(undefined, md.key, md.name);

  return commandsPlugin;
};

module.exports = lsLoader;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/ko-bindings.js":[function(require,module,exports){
"use strict";

require("./../../bower_components/knockout-sortable/build/knockout-sortable.min.js");

require("./bindings/jqueryui-spinner.js");
require("./bindings/jqueryui-tabs.js");
require("./bindings/colorpicker.js");
require("./bindings/blocks.js");
require("./bindings/csstext.js");
require("./bindings/bind-iframe.js");
require("./bindings/droppable.js");
require("./bindings/fileupload.js");
require("./bindings/virtuals.js");
require("./bindings/wysiwygs.js");
require("./bindings/scrollfix.js");
require("./bindings/if-subs.js");
require("./bindings/extsortables.js");
require("./bindings/eventable.js");
require("./bindings/tooltips.js");
require("./bindings/extender-pagination.js");
require("./bindings/validated-value.js");
require("./bindings/scrollintoview.js");
},{"./../../bower_components/knockout-sortable/build/knockout-sortable.min.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-sortable/build/knockout-sortable.min.js","./bindings/bind-iframe.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/bind-iframe.js","./bindings/blocks.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/blocks.js","./bindings/colorpicker.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/colorpicker.js","./bindings/csstext.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/csstext.js","./bindings/droppable.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/droppable.js","./bindings/eventable.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/eventable.js","./bindings/extender-pagination.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/extender-pagination.js","./bindings/extsortables.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/extsortables.js","./bindings/fileupload.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/fileupload.js","./bindings/if-subs.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/if-subs.js","./bindings/jqueryui-spinner.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/jqueryui-spinner.js","./bindings/jqueryui-tabs.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/jqueryui-tabs.js","./bindings/scrollfix.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/scrollfix.js","./bindings/scrollintoview.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/scrollintoview.js","./bindings/tooltips.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/tooltips.js","./bindings/validated-value.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/validated-value.js","./bindings/virtuals.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/virtuals.js","./bindings/wysiwygs.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/wysiwygs.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/template-loader.js":[function(require,module,exports){
(function (global){
"use strict";
/* global global: false */

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var kojqui = (typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null); // just for the widget plugins
var templateConverter = require("./converter/main.js");
var console = require("./../../bower_components/console-browserify/index.js");
var initializeViewmodel = require("./viewmodel.js");
var templateSystem = require('./bindings/choose-template.js');

// call a given method on every plugin implementing it.
// supports a "reverse" parameter to call the methods from the last one to the first one.
var pluginsCall = function(plugins, methodName, args, reverse) {
  var start, end, diff, res, results;
  results = [];
  if (typeof reverse !== 'undefined' && reverse) {
    start = plugins.length - 1;
    end = 0;
    diff = -1;
  } else {
    start = 0;
    end = plugins.length - 1;
    diff = 1;
  }
  for (var i = start; i != end + diff; i += diff) {
    if (typeof plugins[i][methodName] !== 'undefined') {
      res = plugins[i][methodName].apply(plugins[i], args);
      if (typeof res !== 'undefined') results.push(res);
    }
  }
  return results;
};

// workaround for knockout-jqueryui's buttonset/button disposal:
// https://github.com/gvas/knockout-jqueryui/issues/25
var origDisposeCallback = ko.utils.domNodeDisposal.addDisposeCallback;
ko.utils.domNodeDisposal.addDisposeCallback = function(node, callback) {
  var newCallback = function(node) {
    try {
      callback(node);
    } catch (e) {
      console.log("cought dispose callback exception", e);
    }
  };
  origDisposeCallback(node, newCallback);
};

var bindingPluginMaker = function(performanceAwareCaller) {
  return {
    viewModel: function(viewModel) {
      try {
        performanceAwareCaller('applyBindings', ko.applyBindings.bind(undefined, viewModel));
      } catch (err) {
        console.log(err, err.stack);
        throw err;
      }
    },
    dispose: function() {
      try {
        performanceAwareCaller('unapplyBindings', ko.cleanNode.bind(this, global.document.body));
      } catch (err) {
        console.log(err, err.stack);
        throw err;
      }
    }
  };
};

var templateCreator = function(templatePlugin, htmlOrElement, optionalName, templateMode) {
  var tmpName = optionalName;
  if (typeof optionalName != 'undefined' && typeof templateMode != 'undefined') {
    if (typeof htmlOrElement != 'object' || htmlOrElement.tagName.toLowerCase() != 'replacedhtml') tmpName += '-' + templateMode;
  }

  while (typeof tmpName == 'undefined' || tmpName === null || templatePlugin.exists(tmpName)) {
    tmpName = 'anonymous-' + Math.floor((Math.random() * 100000) + 1);
  }

  if (typeof htmlOrElement == 'object' && htmlOrElement.tagName.toLowerCase() == 'replacedhtml') {
    var $el = $(htmlOrElement);
    var $head = $('replacedhead', $el);
    var $body = $('replacedbody', $el);
    templatePlugin.adder(tmpName + '-head', $head.html() || '');
    templatePlugin.adder(tmpName + '-show', $body.html() || '');
    templatePlugin.adder(tmpName + '-preview', $el.html());
    templatePlugin.adder(tmpName + '-wysiwyg', $el.html());

    // $head.attr('data-bind', 'block: content');
    $head.children().detach();
    $head.html("<!-- ko block: content --><!-- /ko -->");
    $head.before('<!-- ko withProperties: { templateMode: \'head\' } -->');
    $head.after('<!-- /ko -->');
    $body.html("<!-- ko block: content --><!-- /ko -->");

    templatePlugin.adder(tmpName + '-iframe', $el[0].outerHTML);

  } else if (typeof htmlOrElement == 'object') {
    templatePlugin.adder(tmpName, htmlOrElement.outerHTML);
  } else {
    templatePlugin.adder(tmpName, htmlOrElement);
  }

  return tmpName;
};

// Adapter to transform "viewModel plugins" into more generic plugins.
function _viewModelPluginInstance(pluginFunction) {
  var instance;
  return {
    viewModel: function(viewModel) {
      instance = pluginFunction(viewModel);
    },
    init: function() {
      if (typeof instance !== 'undefined' && typeof instance.init !== 'undefined') instance.init();
    },
    dispose: function() {
      if (typeof instance !== 'undefined' && typeof instance.dispose !== 'undefined') instance.dispose();
    }
  };
}

var _templateUrlConverter = function(basePath, url) {
  if (!url.match(/^[^\/]*:/) && !url.match(/^\//) && !url.match(/^\[/) && !url.match(/^#?$/)) {
    // TODO this could be smarter joining the urls...
    return basePath + url;
  } else {
    return null;
  }
};

var templateLoader = function(performanceAwareCaller, templateFileName, templateMetadata, jsorjson, extensions, galleryUrl) {
  var templateFile = typeof templateFileName == 'string' ? templateFileName : templateMetadata.template;
  var templatePath = "./";
  var p = templateFile.lastIndexOf('/');
  if (p != -1) {
    templatePath = templateFile.substr(0, p + 1);
  }

  var templateUrlConverter = _templateUrlConverter.bind(undefined, templatePath);

  var metadata;
  if (typeof templateMetadata == 'undefined') {
    metadata = {
      template: templateFile,
      // TODO l10n?
      name: 'No name',
      created: Date.now()
    };
  } else {
    metadata = templateMetadata;
  }

  $.get(templateFile, function(templatecode) {
    var res = templateCompiler(performanceAwareCaller, templateUrlConverter, "template", templatecode, jsorjson, metadata, extensions, galleryUrl);
    res.init();
  });
};

var templateCompiler = function(performanceAwareCaller, templateUrlConverter, templateName, templatecode, jsorjson, metadata, extensions, galleryUrl) {
  // we strip content before <html> tag and after </html> because jquery doesn't parse it.
  // we'll keep it "raw" and use it in the preview/output methods.
  var res = templatecode.match(/^([\S\s]*)([<]html[^>]*>[\S\s]*<\/html>)([\S\s]*)$/i);
  if (res === null) throw "Unable to find <html> opening and closing tags in the template";
  var prefix = res[1];
  // we parse the html content after replacing the tag name for html/head/body so to avoid jquery issues in parsing.
  var basicStructure = { '<html': 0, '<head': 0, '<body': 0, '</html': 0, '</body': 0, '</head': 0 };
  var html = res[2].replace(/(<\/?)(html|head|body)([^>]*>)/gi, function(match, p1, p2, p3) {
    basicStructure[(p1+p2).toLowerCase()] += 1;
    return p1 + 'replaced' + p2 + p3;
  });
  for (var ele in basicStructure) if (basicStructure.hasOwnProperty(ele)) if (basicStructure[ele] != 1) {
    if (basicStructure[ele] === 0) throw "ERROR: missing mandatory element "+ele+">";
    if (basicStructure[ele] > 1) throw "ERROR: multiple element "+ele+"> occourences are not supported (found "+basicStructure[ele]+" occourences)";
  }
  var postfix = res[3];
  var blockDefs = [];
  var enableUndo = true;
  var enableRecorder = true;
  var baseThreshold = '+$root.contentListeners()';

  var plugins = [];

  if (typeof extensions !== 'undefined') {
    for (var i = 0; i < extensions.length; i++) {
      if (typeof extensions[i] == 'function') {
        plugins.push(_viewModelPluginInstance(extensions[i]));
      } else {
        plugins.push(extensions[i]);
      }
    }
  }

  var createdTemplates = [];
  var templatesPlugin = {
    adder: function(id, html) {
      if (typeof html !== 'string') throw "Template system: cannot create new template " + id;
      var trash = html.match(/(data)?-ko-[^ =:]*/g);
      if (trash) {
        console.error("ERROR: found unexpected -ko- attribute in compiled template", id, ", you probably mispelled it:", trash);
      }
      templateSystem.addTemplate(id, html);
      createdTemplates.push(id);
    },
    exists: function(id) {
      var el = templateSystem.getTemplateContent(id);
      if (typeof el !== 'undefined') return true;
      else return false;
    },
    dispose: function() {
      for (var i = createdTemplates.length - 1; i >= 0; i--) {
        templateSystem.removeTemplate(createdTemplates[i]);
      }
    }
  };

  ko.bindingHandlers['block'].templateExists = templatesPlugin.exists;

  // templatecreator tracks created template (via templateAdder) so to be able to dispose them later
  var myTemplateCreator = templateCreator.bind(undefined, templatesPlugin);

  // first pass: we "compile" the template into a termplateDef object
  var templateDef = performanceAwareCaller('translateTemplate', templateConverter.translateTemplate.bind(undefined, templateName, html, templateUrlConverter, myTemplateCreator));

  // second pass: given the templateDef we create a base content model object for this template.
  var content = performanceAwareCaller('generateModel', templateConverter.wrappedResultModel.bind(undefined, templateDef));

  // third pass: we create "style/content editors" for every block
  var widgets = {};
  var widgetPlugins = pluginsCall(plugins, 'widget', [$, ko, kojqui]);
  for (var wi = 0; wi < widgetPlugins.length; wi++) {
    widgets[widgetPlugins[wi].widget] = widgetPlugins[wi];
  }
  blockDefs.push.apply(blockDefs, performanceAwareCaller('generateEditors', templateConverter.generateEditors.bind(undefined, templateDef, widgets, templateUrlConverter, myTemplateCreator, baseThreshold)));

  var incompatibleTemplate = false;
  if (typeof jsorjson !== 'undefined' && jsorjson !== null) {
    var unwrapped;
    if (typeof jsorjson == 'string') {
      unwrapped = ko.utils.parseJson(jsorjson);
    } else {
      unwrapped = jsorjson;
    }

    // we run a basic compatibility check between the content-model we expect and the initialization model
    var checkModelRes = performanceAwareCaller('checkModel', templateConverter.checkModel.bind(undefined, content._unwrap(), blockDefs, unwrapped));
    // if checkModelRes is 1 then the model is not fully compatible but we fixed it
    if (checkModelRes == 2) {
      console.error("Trying to compile an incompatible template version!", content._unwrap(), blockDefs, unwrapped);
      incompatibleTemplate = true;
    }

    try {
      content._wrap(unwrapped);
    } catch (ex) {
      console.error("Unable to inject model content!", ex);
      incompatibleTemplate = true;
    }
  }

  // This build the template for the preview/output, but concatenating prefix, template and content and stripping the "replaced" prefix added to "problematic" tag (html/head/body)
  var iframeTpl = prefix + templateSystem.getTemplateContent(templateName + '-iframe').replace(/(<\/?)replaced(html|head|body)([^>]*>)/gi, function(match, p1, p2, p3) {
    return p1 + p2 + p3;
  }) + postfix;

  // store this so to restore it on disposale
  var origiFrameTpl = ko.bindingHandlers.bindIframe.tpl;
  ko.bindingHandlers.bindIframe.tpl = iframeTpl;
  var iFramePlugin = {
    dispose: function() {
      ko.bindingHandlers.bindIframe.tpl = origiFrameTpl;
    }
  };

  plugins.push(iFramePlugin);
  plugins.push(templatesPlugin);

  // initialize the viewModel object based on the content model.
  var viewModel = performanceAwareCaller('initializeViewmodel', initializeViewmodel.bind(this, content, blockDefs, templateUrlConverter, galleryUrl));

  viewModel.metadata = metadata;
  // let's run some version check on template and editor used to build the model being loaded.
  var editver = '0.13.0';
  if (typeof viewModel.metadata.editorversion !== 'undefined' && viewModel.metadata.editorversion !== editver) {
    console.warn("The model being loaded has been created with an older editor version", viewModel.metadata.editorversion, "vs", editver);
  }
  viewModel.metadata.editorversion = editver;

  if (typeof templateDef.version !== 'undefined') {
    if (typeof viewModel.metadata.templateversion !== 'undefined' && viewModel.metadata.templateversion !== templateDef.version) {
      console.error("The model being loaded has been created with a different template version", templateDef.version, "vs", viewModel.metadata.templateversion);
    }
    viewModel.metadata.templateversion = templateDef.version;
  }

  templateSystem.init();

  // everything's ready, start knockout bindings.
  plugins.push(bindingPluginMaker(performanceAwareCaller));

  pluginsCall(plugins, 'viewModel', [viewModel]);

  if (incompatibleTemplate) {
    $('#incompatible-template').dialog({
      modal: true,
      appendTo: '#mo-body',
      buttons: {
        Ok: function() {
          $(this).dialog("close");
        }
      }
    });
  }

  return {
    model: viewModel,
    init: function() {
      pluginsCall(plugins, 'init', undefined, true);
    },
    dispose: function() {
      pluginsCall(plugins, 'dispose', undefined, true);
    }
  };

};


var checkFeature = function(feature, func) {
  if (!func()) {
    console.warn("Missing feature", feature);
    throw "Missing feature " + feature;
  }
};

var isCompatible = function() {
  try {
    // window.msMatchMedia would match also IE9
    // IE9 wouldn't be so hard to support, but it doesn't worth it. (preview iframe and automatic scroll are 2 things not working in IE9)
    checkFeature('matchMedia', function() {
      return typeof global.matchMedia != 'undefined';
    });
    checkFeature('XMLHttpRequest 2', function() {
      return 'XMLHttpRequest' in global && 'withCredentials' in new global.XMLHttpRequest();
    });
    checkFeature('ES5 strict', function() {
      return function() { /* "use strict";*/
        return typeof this == 'undefined';
      }();
    });
    checkFeature('CSS borderRadius', function() {
      return typeof global.document.body.style['borderRadius'] != 'undefined';
    });
    checkFeature('CSS boxShadow', function() {
      return typeof global.document.body.style['boxShadow'] != 'undefined';
    });
    checkFeature('CSS boxSizing', function() {
      return typeof global.document.body.style['boxSizing'] != 'undefined';
    });
    checkFeature('CSS backgroundSize', function() {
      return typeof global.document.body.style['backgroundSize'] != 'undefined';
    });
    checkFeature('CSS backgroundOrigin', function() {
      return typeof global.document.body.style['backgroundOrigin'] != 'undefined';
    });
    return true;
  } catch (exception) {
    return false;
  }
};


var fixPageEvents = function() {
  // This is global code to prevent dragging/dropping in the page where we don't deal with it.
  // IE8 doesn't have window.addEventListener, but doesn't support drag&drop too.
  if (global.addEventListener) {
    // prevent generic file droppping in the page
    global.addEventListener("drag", function(e) {
      // console.log("browser is using drag listener on window");
      e = e || global.event;
      e.preventDefault();
    }, false);
    global.addEventListener("dragstart", function(e) {
      // console.log("browser is using dragstart listener on window");
      e = e || global.event;
      e.preventDefault();
    }, false);
    global.addEventListener("dragover", function(e) {
      // this is called on mouse move on every supported browser.
      // console.log("browser is using dragover listener on window");
      e = e || global.event;
      e.preventDefault();
    }, false);
    global.addEventListener("drop", function(e) {
      // console.log("browser is using drop listener on window");
      e = e || global.event;
      e.preventDefault();
    }, false);
    global.document.body.addEventListener('drop', function(e) {
      // I browser supportati entrato tutti qui quando si droppa qualcosa sul body
      // console.log("browser is using drop listener on body tag");
      e.preventDefault();
    }, false);
  }
  if (global.document.ondragstart) {
    global.document.ondragstart = function() {
      // console.log("browser called ondragstart. return false!");
      return false;
    };
  }
};

module.exports = {
  compile: templateCompiler,
  load: templateLoader,
  isCompatible: isCompatible,
  fixPageEvents: fixPageEvents
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./bindings/choose-template.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/bindings/choose-template.js","./converter/main.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/converter/main.js","./viewmodel.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/viewmodel.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/timed-call.js":[function(require,module,exports){
"use strict";

var console = require("./../../bower_components/console-browserify/index.js");

var _call = function(whatToCall) {
  return whatToCall();
};

var logs = [];

var _timedCall = function(name, whatToCall) {
  var res;
  var start = new Date().getTime();
  if (typeof console == 'object' && console.time) console.time(name);
  res = _call(whatToCall);
  if (typeof console == 'object' && console.time) console.timeEnd(name);
  var diff = new Date().getTime() - start;
  if (typeof console == 'object' && !console.time) console.log(name, "took", diff, "ms");
  logs.push({
    name: name,
    time: diff
  });
  // max logs
  if (logs.length > 100) logs.unshift();
  return res;
};

module.exports = {
  timedCall: _timedCall,
  logs: logs
};
},{"./../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/undomanager/undomain.js":[function(require,module,exports){
(function (global){
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var undoManager = require("./../../../bower_components/knockout-undomanager/knockout-undomanager.js");
var undoserializer = require("./undoserializer.js");

var addUndoStackExtensionMaker = function(performanceAwareCaller) {
  return function(viewModel) {

    viewModel.contentListeners(viewModel.contentListeners() + 2);

    // TODO the labels should be computed observables (needs changes in undomanager projects)
    var undoRedoStack = undoManager(viewModel.content, {
      levels: 100,
      undoLabel: ko.computed(function() { return viewModel.t("Undo (#COUNT#)"); }),
      redoLabel: ko.computed(function() { return viewModel.t("Redo"); })
    });
    viewModel.undo = undoRedoStack.undoCommand;
    viewModel.undo.execute = performanceAwareCaller.bind(viewModel, 'undo', viewModel.undo.execute);
    viewModel.redo = undoRedoStack.redoCommand;
    viewModel.redo.execute = performanceAwareCaller.bind(viewModel, 'redo', viewModel.redo.execute);
    viewModel.undoReset = performanceAwareCaller.bind(viewModel, 'undoReset', undoRedoStack.reset);
    viewModel.setUndoModeMerge = undoRedoStack.setModeMerge;
    viewModel.setUndoModeOnce = undoRedoStack.setModeOnce;
    undoRedoStack.setModeIgnore();
    undoRedoStack.setUndoActionMaker(undoserializer.makeUndoAction.bind(undefined, viewModel.content));
    undoserializer.watchEnabled(true);

    return {
      pause: function() {
        undoRedoStack.setModeIgnore();
      },
      run: function() {
        undoRedoStack.setModeOnce();
      },
      init: function() {
        undoRedoStack.setModeOnce();
      },
      dispose: function() {
        viewModel.contentListeners(viewModel.contentListeners() - 2);
        undoserializer.watchEnabled(false);
        undoRedoStack.dispose();
      }
    };

  };
};

module.exports = addUndoStackExtensionMaker;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/knockout-undomanager/knockout-undomanager.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/knockout-undomanager/knockout-undomanager.js","./undoserializer.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/undomanager/undoserializer.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/undomanager/undoserializer.js":[function(require,module,exports){
(function (global){
"use strict";
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../../bower_components/console-browserify/index.js");
// This module deals with serialization/deserialization of a "tree-path" representing the path to reach the given leaf.
// In order to be correctly serialized we have to move from "reference" to "string" and viceversa.

var _reference = function(model, path) {
  var p = 0;
  var p1, p2;
  var m = model;
  while (p < path.length) {
    switch (path.charAt(p)) {
      case '(':
        if (path.charAt(p + 1) == ')') {
          m = m();
        } else {
          // TODO error
        }
        p += 2;
        break;
      case '[':
        p2 = path.indexOf(']', p);
        m = m[path.substring(p + 1, p2)];
        p = p2 + 1;
        break;
      case '.':
        p1 = path.indexOf('(', p);
        if (p1 == -1) p1 = path.length;
        p2 = path.indexOf('[', p);
        if (p2 == -1) p2 = path.length;
        p2 = Math.min(p1, p2);
        m = m[path.substring(p + 1, p2)];
        p = p2;
        break;
      default:
        // TODO error
    }
  }
  return m;
};

var _getPath = function(parents, child) {
  var path = "";
  var p;
  for (var k = 0; k <= parents.length; k++) {
    p = k < parents.length ? parents[k] : child;
    if (ko.isObservable(p)) path += '()';
    if (typeof p._fieldName !== 'undefined') {
      path += "." + p._fieldName;
    } else if (k > 0 && typeof parents[k - 1].pop == 'function') {
      var parentArray = ko.isObservable(parents[k - 1]) ? ko.utils.peekObservable(parents[k - 1]) : parents[k - 1];
      var pos = ko.utils.arrayIndexOf(parentArray, p);
      if (pos != -1) {
        path += "[" + pos + "]";
      } else {
        // NOTE this happen, sometimes when TinyMCE sends updates for objects already removed.
        console.error("Unexpected object not found in parent array", parentArray, p, k, parents.length, ko.toJS(parentArray), ko.utils.unwrapObservable(p));
        throw "Unexpected object not found in parent array";
      }
    } else {
      console.error("Unexpected parent with no _fieldName and no parent array", k, parents);
      throw "Unexpected parent with no _fieldName and no parent array";
    }
  }
  return path;
};

var makeDereferencedUndoAction = function(undoFunc, model, path, value, item) {
  var child = _reference(model, path);
  undoFunc(child, value, item);
};

var listener;

var _setListener = function(listenfunc) {
  listener = listenfunc;
};

/* dereferencing path and changing value with "toJS" */
var makeUndoActionDereferenced = function(model, undoFunc, parents, child, oldVal, item) {
  try {
    var path = _getPath(parents, child);

    // Transform actions in simple JS objects.
    if (typeof oldVal === 'object' || typeof oldVal === 'function') oldVal = ko.toJS(oldVal);
    if (typeof item !== 'undefined' && (typeof item.value === 'object' || typeof item.value === 'function')) {
      var newItem = ko.toJS(item);
      item = newItem;
    }

    if (typeof listener !== 'undefined') {
      try {
        listener(path, child, oldVal, item);
      } catch (e) {
        console.log("Undoserializer ignoring exception in listener callback");
      }
    }

    return makeDereferencedUndoAction.bind(undefined, undoFunc, model, path, oldVal, item);
  } catch (e) {
    // NOTE this happens, from time to time, when TinyMCE sends updates for deleted content.
    console.error("Exception processing undo", e, parents, child, item);
  }
};

var watchEnabled;
var _watchEnabled = function(newVal) {
  if (typeof newVal !== 'undefined')
    watchEnabled = newVal;
  else
    return watchEnabled;
};

module.exports = {
  dereference: _getPath,
  reference: _reference,
  makeUndoAction: makeUndoActionDereferenced,
  setListener: _setListener,
  watchEnabled: _watchEnabled
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js"}],"/var/www/s/app/webroot/js/lib/mosaico/src/js/viewmodel.js":[function(require,module,exports){
(function (global){
"use strict";
/* global global: false */

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);
var console = require("./../../bower_components/console-browserify/index.js");
var performanceAwareCaller = require("./timed-call.js").timedCall;

var toastr = require("./../../bower_components/toastr/toastr.js");
toastr.options = {
  "closeButton": false,
  "debug": false,
  "positionClass": "toast-bottom-full-width",
  "target": "#mo-body",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

/* NOTE: translations moved to "plugin"
var strings = {
  'show preview and send test': 'Visualizza una anteprima e fai un invio di test',
  // Strings for app.js
  'Download': 'Download',
  'Test': 'Test',
  'Save': 'Salva',
  'Downloading...': "Download in corso...",
  'Invalid email address': "Indirizzo email invalido",
  "Test email sent...": "Email di test inviata...",
  'Unexpected error talking to server: contact us!': 'Errore di comunicazione con il server: contattaci!',
  'Insert here the recipient email address': 'Inserisci qui l\'indirizzo email a cui spedire',
  "Test email address": "Indirizzo email di test",
  // viewModel
  'Block removed: use undo button to restore it...': 'Blocco eliminato: usa il pulsante annulla per recuperarlo...',
  'New block added after the selected one (__pos__)': 'Nuovo blocco aggiunto sotto a quello selezionato (__pos__)',
  'New block added at the model bottom (__pos__)': 'Nuovo blocco aggiunto in fondo al modello (__pos__)',
  // undomain.js
  'Undo (#COUNT#)': 'Annulla (#COUNT#)',
  'Redo': 'Ripristina',
  // editor.js
  'Selected element has no editable properties': 'L\'elemento selezionato non fornisce proprietà editabili',
  'This style is specific for this block: click here to remove the custom style and revert to the theme value': 'Questo stile è specifico di questo blocco: clicca qui per annullare lo stile personalizzato',
  'Switch between global and block level styles editing': 'Permette di specificare se si vuole modificare lo stile generale o solamente quello specifico del blocco selezionato',
  // main.tpl.html
  'Undo last operation': 'Annulla ultima operazione',
  'Redo last operation': 'Ripeti operazione annullata',
  'Show image gallery': 'Visualizza galleria immagini',
  'Gallery': 'Galleria',
  'Preview': 'Anteprima',
  'Show live preview': 'Mostra anteprima live',
  'Large screen': 'Schermo grande',
  'Tablet': 'Tablet',
  'Smartphone': 'Smartphone',
  'Show preview and send test': 'Visualizza una anteprima e fai un invio di test',
  'Download template': 'Scarica il template',
  'Save template': 'Salva il template',
  'Saved model is obsolete': 'Modello salvato obsoleto',
  '<p>The saved model has been created with a previous, non completely compatible version, of the template</p><p>Some content or style in the model <b>COULD BE LOST</b> if you will <b>save</b></p><p>Contact us for more informations!</p>': '<p>Il modello salvato è stato creato con una versione precedente del template non del tutto compatibile</p><p>Alcuni contenuti o stili del modello <b>POTREBBERO ESSERE PERSI</b> se procederai e deciderai di <b>salvare</b></p><p>Contattaci se hai dei dubbi!</p>',

  // TODO this cannot be done in knockout as with uncompatible browsers we don't initialize
  // 'Usupported browser': 'Browser non compatibile', 
  // '<p>Your browser is not supported.</p><p>Use a different browser or try updaring your browser.</p><p>Supported browsers: <ul><li>Internet Explorer &gt;= 10</li><li>Google Chrome &gt;= 30</li><li>Apple Safari &gt;= 5</li><li>Mozilla Firefix &gt;= 20</li></ul></p>': '<p>Il tuo browser non è supportato.</p><p>Accedi con un browser differente o prova ad aggiornare il tuo browser.</p><p>Browser supportati: <ul><li>Internet Explorer &gt;= 10</li><li>Google Chrome &gt;= 30</li><li>Apple Safari &gt;= 5</li><li>Mozilla Firefix &gt;= 20</li></ul></p>',

  // toolbox
  'Blocks': 'Blocchi',
  'Blocks ready to be added to the template': 'Elenco contenuti aggiungibili al messaggio',
  'Content': 'Contenuto',
  'Edit content options': 'Modifica opzioni contenuti',
  'Style': 'Stile',
  'Edit style options': 'Modifica opzioni grafiche',
  'Block __name__': 'Blocco __name__',
  'Click or drag to add this block to the template': 'Clicca o trascina per aggiungere al messaggio',
  'Add': 'Aggiungi',
  'By clicking on message parts you will select a block and content options, if any, will show here': 'Cliccando su alcune parti del messaggio selezionerai un blocco e le opzioni contenutistiche, se disponibili, compariranno qui',
  'By clicking on message parts you will select a block and style options, if available, will show here': 'Cliccando su alcune parti del messaggio selezionerai un blocco e le opzioni di stile, se disponibili, compariranno qui',
  'Click or drag files here': 'Clicca o trascina i file qui!',
  'No images uploaded, yet': 'Non hai ancora caricato immagini',
  'Show images from the gallery': 'Visualizza le immagini caricate nella tua area',
  'Loading...': 'Caricamento...',
  'Load gallery': 'Carica galleria',
  'Loading gallery...': 'Caricamento in corso...',
  'The gallery is empty': 'Nessuna immagine nella galleria',
  // img-wysiwyg.tmlp
  'Remove image': 'Rimuovi immagine',
  'Open the image editing tool': 'Avvia strumento modifica immagine',
  'Upload a new image': 'Carica una nuova immagine',
  'Drop an image here': 'Trascina una immagine qui',
  'Drop an image here or click the upload button': 'Trascina una immagine qui o clicca sul pulsante di caricamento',
  // gallery
  'Drag this image and drop it on any template image placeholder': 'Trascina questa immagine sulla posizione in cui vuoi inserirla',
  'Gallery:': 'Galleria:',
  'Session images': 'Immagini di sessione',
  'Recents': 'Recenti',
  'Remote gallery': 'Galleria remota',

  // customstyle
  'Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class="customStyled"><span>"small cube" </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul>': 'Blocco personalizzato.<ul><li>In questa modalità se cambi una proprietà verrà modificata solamente per questo specifico blocco (invece che per tutti i blocchi della stessa sezione).</li><li>Per segnalare la personalizzazione apparirà l\'icona <span class="customStyled"><span> del "cubetto"</span></span> a fianco delle proprietà. Cliccando questa icona tornerai al valore comune.</li></ul>',
  // blocks-wysiwyg
  'Drop here blocks from the "Blocks" tab': 'Trascina qui i blocchi dalla scheda \'Blocchi\'',
  // block-wysiwyg
  'Drag this handle to move the block': 'Trascina per spostare il blocco altrove',
  'Move this block upside': 'Sposta il blocco in su',
  'Move this block downside': 'Sposta il blocco in giu',
  'Delete block': 'Elimina blocco',
  'Duplicate block': 'Duplica blocco',
  'Switch block variant': 'Cambia variante blocco',
  // colorpicker
  'Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet.': 'Colori Tema,Colori Standard,Colori Web,Colori Tema,Torna alla tavolozza,Storico,storico colori vuoto',

  'Drop here': 'Rilascia qui',

};
*/

function initializeEditor(content, blockDefs, thumbPathConverter, galleryUrl) {

  var viewModel = {
    galleryRecent: ko.observableArray([]).extend({
      paging: 16
    }),
    galleryRemote: ko.observableArray([]).extend({
      paging: 16
    }),
    selectedBlock: ko.observable(null),
    selectedItem: ko.observable(null),
    selectedTool: ko.observable(0),
    selectedImageTab: ko.observable(0),
    dragging: ko.observable(false),
    draggingImage: ko.observable(false),
    galleryLoaded: ko.observable(false),
    showPreviewFrame: ko.observable(false),
    previewMode: ko.observable('mobile'),
    showToolbox: ko.observable(true),
    showTheme: ko.observable(false),
    showGallery: ko.observable(false),
    debug: ko.observable(false),
    contentListeners: ko.observable(0),
    
    logoPath: 'dist/img/mosaico32.png',
    logoUrl: '.',
    logoAlt: 'mosaico'
  };

  // viewModel.content = content._instrument(ko, content, undefined, true);
  viewModel.content = content;
  viewModel.blockDefs = blockDefs;

  viewModel.notifier = toastr;

  // Does token substitution in i18next style
  viewModel.tt = function(key, paramObj) {
    if (typeof paramObj !== 'undefined')
      for (var prop in paramObj)
        if (paramObj.hasOwnProperty(prop)) {
          key = key.replace(new RegExp('__' + prop + '__', 'g'), paramObj[prop]);
        }
    return key;
  };

  // Simply maps to tt: language plugins can override this method to define their own language
  // handling.
  // If this method invokes an observable (e.g: viewModel.lang()) then the UI language will automatically
  // update when the "lang" observable changes.
  viewModel.t = viewModel.tt;

  // currently called by editor.html to translate template-defined keys (label, help, descriptions)
  // the editor always uses the "template" category for that strings.
  // you can override this method as you like in order to provide translation or change the strings in any way.
  viewModel.ut = function(category, key) {
    return key;
  };

  viewModel.templatePath = thumbPathConverter;

  viewModel.remoteUrlProcessor = function(url) {
    return url;
  };

  viewModel.remoteFileProcessor = function(fileObj) {
    if (typeof fileObj.url !== 'undefined') fileObj.url = viewModel.remoteUrlProcessor(fileObj.url);
    if (typeof fileObj.thumbnailUrl !== 'undefined') fileObj.thumbnailUrl = viewModel.remoteUrlProcessor(fileObj.thumbnailUrl);
    // deleteUrl?
    return fileObj;
  };

  // toolbox.tmpl.html
  viewModel.loadGallery = function() {
    viewModel.galleryLoaded('loading');
    var url = galleryUrl ? galleryUrl : '/upload/';
    // retrieve the full list of remote files
    $.getJSON(url, function(data) {
      for (var i = 0; i < data.files.length; i++) data.files[i] = viewModel.remoteFileProcessor(data.files[i]);
      viewModel.galleryLoaded(data.files.length);
      // TODO do I want this call to return relative paths? Or just absolute paths?
      viewModel.galleryRemote(data.files.reverse());
    }).fail(function() {
      viewModel.galleryLoaded(false);
      viewModel.notifier.error(viewModel.t('Unexpected error listing files'));
    });
  };

  // img-wysiwyg.tmpl.html
  viewModel.fileToImage = function(obj, event, ui) {
    // console.log("fileToImage", obj);
    return obj.url;
  };

  // block-wysiwyg.tmpl.html
  viewModel.removeBlock = function(data, parent) {
    // let's unselect the block
    if (ko.utils.unwrapObservable(viewModel.selectedBlock) == ko.utils.unwrapObservable(data)) {
      viewModel.selectBlock(null, true);
    }
    var res = parent.blocks.remove(data);
    // TODO This message should be different depending on undo plugin presence.
    viewModel.notifier.info(viewModel.t('Block removed: use undo button to restore it...'));
    return res;
  };

  // block-wysiwyg.tmpl.html
  viewModel.duplicateBlock = function(index, parent) {
    var idx = ko.utils.unwrapObservable(index);
    // Deinstrument/deobserve the object
    var unwrapped = ko.toJS(ko.utils.unwrapObservable(parent.blocks)[idx]);
    // We need to remove the id so that a new one will be assigned to the clone
    if (typeof unwrapped.id !== 'undefined') unwrapped.id = '';
    // insert the cloned block
    parent.blocks.splice(idx + 1, 0, unwrapped);
  };

  // block-wysiwyg.tmpl.html
  viewModel.moveBlock = function(index, parent, up) {
    var idx = ko.utils.unwrapObservable(index);
    var parentBlocks = ko.utils.unwrapObservable(parent.blocks);
    if ((up && idx > 0) || (!up && idx < parentBlocks.length - 1)) {
      var destIndex = idx + (up ? -1 : 1);
      var destBlock = parentBlocks[destIndex];
      viewModel.startMultiple();
      parent.blocks.splice(destIndex, 1);
      parent.blocks.splice(idx, 0, destBlock);
      viewModel.stopMultiple();
    }
  };

  // test method, command line use only
  viewModel.loadDefaultBlocks = function() {
    // cloning the whole "mainBlocks" object so that undomanager will
    // see it as a single operation (maybe I could use "startMultiple"/"stopMultiple".
    var res = ko.toJS(viewModel.content().mainBlocks);
    res.blocks = [];
    var input = ko.utils.unwrapObservable(viewModel.blockDefs);
    for (var i = 0; i < input.length; i++) {
      var obj = ko.toJS(input[i]);
      // generating ids for blocks, maybe this would work also leaving it empty.
      obj.id = 'block_' + i;
      res.blocks.push(obj);
    }
    performanceAwareCaller('setMainBlocks', viewModel.content().mainBlocks._wrap.bind(viewModel.content().mainBlocks, res));
  };

  // gallery-images.tmpl.html
  viewModel.addImage = function(img) {
    var selectedImg = $('#main-wysiwyg-area .selectable-img.selecteditem');
    if (selectedImg.length == 1 && typeof img == 'object' && typeof img.url !== 'undefined') {
      ko.contextFor(selectedImg[0])._src(img.url);
      return true;
    } else {
      return false;
    }
  };

  // toolbox.tmpl.html
  viewModel.addBlock = function(obj, event) {
    // if there is a selected block we try to add the block just after the selected one.
    var selected = viewModel.selectedBlock();
    // search the selected block position.
    var found;
    if (selected !== null) {
      // TODO "mainBlocks" is an hardcoded thing.
      for (var i = viewModel.content().mainBlocks().blocks().length - 1; i >= 0; i--) {
        if (viewModel.content().mainBlocks().blocks()[i]() == selected) {
          found = i;
          break;
        }
      }
    }
    var pos;
    if (typeof found !== 'undefined') {
      pos = found + 1;
      viewModel.content().mainBlocks().blocks.splice(pos, 0, obj);
      viewModel.notifier.info(viewModel.t('New block added after the selected one (__pos__)', {
        pos: pos
      }));
    } else {
      viewModel.content().mainBlocks().blocks.push(obj);
      pos = viewModel.content().mainBlocks().blocks().length - 1;
      viewModel.notifier.info(viewModel.t('New block added at the model bottom (__pos__)', {
        pos: pos
      }));
    }
    // find the newly added block and select it!
    var added = viewModel.content().mainBlocks().blocks()[pos]();
    viewModel.selectBlock(added, true);
    // prevent click propagation (losing url hash - see #43)
    return false;
  };

  // Used by stylesheet.js to create multiple styles
  viewModel.findObjectsOfType = function(data, type) {
    var res = [];
    var obj = ko.utils.unwrapObservable(data);
    for (var prop in obj)
      if (obj.hasOwnProperty(prop)) {
        var val = ko.utils.unwrapObservable(obj[prop]);
        // TODO this is not the right way to deal with "block list" objects.
        if (prop.match(/Blocks$/)) {
          var contents = ko.utils.unwrapObservable(val.blocks);
          for (var i = 0; i < contents.length; i++) {
            var c = ko.utils.unwrapObservable(contents[i]);
            if (type === null || ko.utils.unwrapObservable(c.type) == type) res.push(c);
          }
          // TODO investigate which condition provide a null value.
        } else if (typeof val == 'object' && val !== null) {
          if (type === null || ko.utils.unwrapObservable(val.type) == type) res.push(val);
        }
      }
    return res;
  };

  /*
  viewModel.placeholderHelper = 'sortable-placeholder';
  if (false) {
    viewModel.placeholderHelper = {
      element: function(currentItem) {
        return $('<div />').removeClass('ui-draggable').addClass('sortable-placeholder').css('position', 'relative').css('width', '100%').css('height', currentItem.css('height')).css('opacity', '.8')[0];
      },
      update: function(container, p) {
       return;
      }
    };
  }
  */

  // Attempt to insert the block in the destination layout during dragging
  viewModel.placeholderHelper = {
    element: function(currentItem) {
      return $(currentItem[0].outerHTML).removeClass('ui-draggable').addClass('sortable-placeholder').css('display', 'block').css('position', 'relative').css('width', '100%').css('height', 'auto').css('opacity', '.8')[0];
    },
    update: function(container, p) {
      return;
    }
  };

  // TODO the undumanager should be pluggable.
  // Used by "moveBlock" and blocks-wysiwyg.tmpl.html to "merge" drag/drop operations into a single undo/redo op.
  viewModel.startMultiple = function() {
    if (typeof viewModel.setUndoModeMerge !== 'undefined') viewModel.setUndoModeMerge();
  };
  viewModel.stopMultiple = function() {
    if (typeof viewModel.setUndoModeOnce !== 'undefined') viewModel.setUndoModeOnce();
  };

  // Used by code generated by editor.js 
  viewModel.localGlobalSwitch = function(prop, globalProp) {
    var current = prop();
    if (current === null) prop(globalProp());
    else prop(null);
    return false;
  };

  // Used by editor and main "converter" to support item selection
  viewModel.selectItem = function(valueAccessor, item, block) {
    var val = ko.utils.peekObservable(valueAccessor);
    if (typeof block !== 'undefined') viewModel.selectBlock(block, false, true);
    if (val != item) {
      valueAccessor(item);
      // On selectItem if we were on "Blocks" toolbox tab we move to "Content" toolbox tab.
      if (item !== null && viewModel.selectedTool() === 0) viewModel.selectedTool(1);
    }
    return false;
  }.bind(viewModel, viewModel.selectedItem);

  viewModel.isSelectedItem = function(item) {
    return viewModel.selectedItem() == item;
  };

  viewModel.selectBlock = function(valueAccessor, item, doNotSelect, doNotUnselectItem) {
    var val = ko.utils.peekObservable(valueAccessor);
    if (!doNotUnselectItem) viewModel.selectItem(null);
    if (val != item) {
      valueAccessor(item);
      // hide gallery on block selection
      viewModel.showGallery(false);
      if (item !== null && !doNotSelect && viewModel.selectedTool() === 0) viewModel.selectedTool(1);
    }
  }.bind(viewModel, viewModel.selectedBlock);

  // DEBUG
  viewModel.countSubscriptions = function(model, debug) {
    var res = 0;
    for (var prop in model)
      if (model.hasOwnProperty(prop)) {
        var p = model[prop];
        if (ko.isObservable(p)) {
          if (typeof p._defaultComputed != 'undefined') {
            if (typeof debug != 'undefined') console.log(debug + "/" + prop + "/_", p._defaultComputed.getSubscriptionsCount());
            res += p._defaultComputed.getSubscriptionsCount();
          }
          if (typeof debug != 'undefined') console.log(debug + "/" + prop + "/-", p.getSubscriptionsCount());
          res += p.getSubscriptionsCount();
          p = ko.utils.unwrapObservable(p);
        }
        if (typeof p == 'object' && p !== null) {
          var tot = viewModel.countSubscriptions(p, typeof debug != 'undefined' ? debug + '/' + prop + "@" : undefined);
          if (typeof debug != 'undefined') console.log(debug + "/" + prop + "@", tot);
          res += tot;
        }
      }
    return res;
  };

  // DEBUG
  viewModel.loopSubscriptionsCount = function() {
    var count = viewModel.countSubscriptions(viewModel.content());
    global.document.getElementById('subscriptionsCount').innerHTML = count;
    global.setTimeout(viewModel.loopSubscriptionsCount, 1000);
  };

  viewModel.export = function() {
    var content = performanceAwareCaller("exportHTML", viewModel.exportHTML);
    return content;
  };

  function conditional_restore(html) {
    return html.replace(/<replacedcc[^>]* condition="([^"]*)"[^>]*>([\s\S]*?)<\/replacedcc>/g, function(match, condition, body) {
      var dd = '<!--[if '+condition+']>';
      dd += body.replace(/<!-- cc:before:([^ ]*) --><!-- cc:after:\1 -->/g, '</$1>')
            .replace(/^.*<!-- cc:start -->/,'')
            .replace(/<!-- cc:end -->.*$/,'')
            .replace(/<(\/?)cc([A-Za-z]*)/g, '<$1$2');
      dd += '<![endif]-->';
      return dd;
    });
  }

  viewModel.exportHTML = function() {
    var id = 'exportframe';
    $('body').append('<iframe id="' + id + '" data-bind="bindIframe: $data"></iframe>');
    var frameEl = global.document.getElementById(id);
    ko.applyBindings(viewModel, frameEl);
    // Obsolete method didn't work on IE11 when using "HTML5 doctype":
    // var docType = new XMLSerializer().serializeToString(global.document.doctype);
    var node = frameEl.contentWindow.document.doctype;
    var docType = "<!DOCTYPE " + node.name +
      (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') +
      (!node.publicId && node.systemId ? ' SYSTEM' : '') +
      (node.systemId ? ' "' + node.systemId + '"' : '') + '>';
    var content = docType + "\n" + frameEl.contentWindow.document.documentElement.outerHTML;
    ko.cleanNode(frameEl);
    ko.removeNode(frameEl);

    content = content.replace(/<script ([^>]* )?type="text\/html"[^>]*>[\s\S]*?<\/script>/gm, '');
    // content = content.replace(/<!-- ko .*? -->/g, ''); // sometimes we have expressions like (<!-- ko var > 2 -->)
    content = content.replace(/<!-- ko ((?!--).)*? -->/g, ''); // this replaces the above with a more formal (but slower) solution
    content = content.replace(/<!-- \/ko -->/g, '');
    // Remove data-bind/data-block attributes
    content = content.replace(/ data-bind="[^"]*"/gm, '');
    // Remove trash leftover by TinyMCE
    content = content.replace(/ data-mce-(href|src)="[^"]*"/gm, '');

    // Replace "replacedstyle" to "style" attributes (chrome puts replacedstyle after style)
    content = content.replace(/ style="[^"]*"([^>]*) replaced(style="[^"]*")/gm, '$1 $2');
    // Replace "replacedstyle" to "style" attributes (ie/ff have reverse order)
    content = content.replace(/ replaced(style="[^"]*")([^>]*) style="[^"]*"/gm, ' $1$2');
    content = content.replace(/ replaced(style="[^"]*")/gm, ' $1');

    // same as style, but for http-equiv (some browser break it if we don't replace, but then we find it duplicated)
    content = content.replace(/ http-equiv="[^"]*"([^>]*) replaced(http-equiv="[^"]*")/gm, '$1 $2');
    content = content.replace(/ replaced(http-equiv="[^"]*")([^>]*) http-equiv="[^"]*"/gm, ' $1$2');
    content = content.replace(/ replaced(http-equiv="[^"]*")/gm, ' $1');

    // We already replace style and http-equiv and we don't need this.
    // content = content.replace(/ replaced([^= ]*=)/gm, ' $1');
    // Restore conditional comments
    content = conditional_restore(content);
    var trash = content.match(/ data-[^ =]+(="[^"]+")? /) || content.match(/ replaced([^= ]*=)/);
    if (trash) {
      console.warn("Output HTML contains unexpected data- attributes or replaced attributes", trash);
    }

    return content;
  };

  viewModel.exportHTMLtoTextarea = function(textareaid) {
    $(textareaid).val(viewModel.exportHTML());
  };

  viewModel.exportJSONtoTextarea = function(textareaid) {
    $(textareaid).val(viewModel.exportJSON());
  };

  viewModel.importJSONfromTextarea = function(textareaid) {
    viewModel.importJSON($(textareaid).val());
  };

  viewModel.exportMetadata = function() {
    var json = ko.toJSON(viewModel.metadata);
    return json;
  };

  viewModel.exportJSON = function() {
    var json = ko.toJSON(viewModel.content);
    return json;
  };

  viewModel.exportJS = function() {
    return ko.toJS(viewModel.content);
  };

  viewModel.importJSON = function(json) {
    var unwrapped = ko.utils.parseJson(json);
    viewModel.content._wrap(unwrapped);
  };

  viewModel.exportTheme = function() {
    var flat = {};
    var mod = viewModel.content().theme();

    var _export = function(prefix, flat, mod) {
      for (var prop in mod)
        if (mod.hasOwnProperty(prop)) {
          var a = ko.utils.unwrapObservable(mod[prop]);
          if (a !== null && typeof a == 'object') {
            _export(prop + '.', flat, a);
          } else {
            flat[prefix + prop] = a;
          }
        }
    };

    _export('', flat, mod);

    var output = '';
    for (var prop in flat)
      if (flat.hasOwnProperty(prop) && prop != 'type') {
        output += prop + ": " + flat[prop] + ";" + "\n";
      }

    return output;
  };

  // moxiemanager (or file browser/imageeditor) extension points.
  // Just implement editImage or linkDialog methods
  // viewModel.editImage = function(src, done) {} : implement this method to enable image editing (src is a wirtableObservable).
  // viewModel.linkDialog = function() {}: implement this method using "this" to find the input element $(this).val is a writableObservable.

  viewModel.loadImage = function(img) {
    // push image at top of "recent" gallery
    viewModel.galleryRecent.unshift(img);
    // select recent gallery tab
    viewModel.selectedImageTab(0);
  };

  viewModel.dialog = function(selector, options) {
    $(selector).dialog(options);
  };

  // Dummy log method overridden by extensions
  viewModel.log = function(category, msg) {
    // console.log("viewModel.log", category, msg);
  };

  // automatically load the gallery when the gallery tab is selected
  viewModel.selectedImageTab.subscribe(function(newValue) {
    if (newValue == 1 && viewModel.galleryLoaded() === false) {
      viewModel.loadGallery();
    }
  }, viewModel, 'change');

  return viewModel;

}

module.exports = initializeEditor;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./../../bower_components/console-browserify/index.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/console-browserify/index.js","./../../bower_components/toastr/toastr.js":"/var/www/s/app/webroot/js/lib/mosaico/bower_components/toastr/toastr.js","./timed-call.js":"/var/www/s/app/webroot/js/lib/mosaico/src/js/timed-call.js"}]},{},["/var/www/s/app/webroot/js/lib/mosaico/src/js/app.js","/var/www/s/app/webroot/js/lib/mosaico/build/templates.js"])("/var/www/s/app/webroot/js/lib/mosaico/src/js/app.js")
});