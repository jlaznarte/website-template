
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - plone.app.jquery.js - */
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});


/* - jquery-migrate.js - */
// http://www.eea.europa.eu/portal_javascripts/jquery-migrate.js?original=1
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);

/* - collective.js.jqueryui.custom.min.js - */

/* collective.js.jqueryui: jquery.ui.core.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.widget.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.mouse.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.position.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,m=_.height,g=_.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+_+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:b,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);

/* collective.js.jqueryui: jquery.ui.draggable.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),i.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i,s=this,n=!1,a=!1;for(e.ui.ddmanager&&!this.options.dropBehaviour&&(a=e.ui.ddmanager.drop(this,t)),this.dropped&&(a=this.dropped,this.dropped=!1),i=this.element[0];i&&(i=i.parentNode);)i===document&&(n=!0);return n||"original"!==this.options.helper?("invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,a)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;if("parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=["document"===n.containment?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"===n.containment?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"===n.containment?0:e(window).scrollLeft())+e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"===n.containment?0:e(window).scrollTop())+(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||n.containment.constructor===Array)n.containment.constructor===Array&&(this.containment=n.containment);else{if(i=e(n.containment),s=i[0],!s)return;t="hidden"!==e(s).css("overflow"),this.containment=[(parseInt(e(s).css("borderLeftWidth"),10)||0)+(parseInt(e(s).css("paddingLeft"),10)||0),(parseInt(e(s).css("borderTopWidth"),10)||0)+(parseInt(e(s).css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(e(s).css("borderRightWidth"),10)||0)-(parseInt(e(s).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(e(s).css("borderBottomWidth"),10)||0)-(parseInt(e(s).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i}},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName),l=t.pageX,u=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,g>r-m&&h+m>g&&y>l-m&&u+m>y||g>r-m&&h+m>g&&b>l-m&&u+m>b||v>r-m&&h+m>v&&y>l-m&&u+m>y||v>r-m&&h+m>v&&b>l-m&&u+m>b?("inner"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d):(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.droppable.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===s.options.scope&&t.accept.call(t.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,s){if(!i.offset)return!1;var n,a,o=(e.positionAbs||e.position.absolute).left,r=o+e.helperProportions.width,h=(e.positionAbs||e.position.absolute).top,l=h+e.helperProportions.height,u=i.offset.left,c=u+i.proportions.width,d=i.offset.top,p=d+i.proportions.height;switch(s){case"fit":return o>=u&&c>=r&&h>=d&&p>=l;case"intersect":return o+e.helperProportions.width/2>u&&c>r-e.helperProportions.width/2&&h+e.helperProportions.height/2>d&&p>l-e.helperProportions.height/2;case"pointer":return n=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,a=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(a,d,i.proportions.height)&&t(n,u,i.proportions.width);case"touch":return(h>=d&&p>=h||l>=d&&p>=l||d>h&&l>p)&&(o>=u&&c>=o||r>=u&&c>=r||u>o&&r>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions.height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions={width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight})}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===n}),a.length&&(s=e.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);

/* collective.js.jqueryui: jquery.ui.resizable.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.selectable.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.sortable.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,a.widgetName+"-item")===a?(s=t(this),!1):undefined}),t.data(e.target,a.widgetName+"-item")===a&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-t(document).scrollTop()<o.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<o.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+o.scrollSpeed)),e.pageX-t(document).scrollLeft()<o.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<o.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+o.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u=s+l>r&&h>s+l&&e+c>a&&o>e+c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?u:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"===o||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&s||"left"===a&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,n,a,o=[],r=[],h=this._connectWith();if(h&&e)for(i=h.length-1;i>=0;i--)for(n=t(h[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&r.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(r.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=r.length-1;i>=0;i--)r[i][0].each(function(){o.push(this)});return t(o)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(u.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a));for(i=u.length-1;i>=0;i--)for(o=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",o),c.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t(e.document[0].createElement(s)).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?n.append("<td colspan='99'>&#160;</td>"):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,a,o,r,h,l,c,u,d,p,f=null,m=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],m=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(o=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],a=this.items.length-1;a>=0;a--)t.contains(this.containers[m].element[0],this.items[a].item[0])&&this.items[a].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[a].top,this.items[a].height))&&(u=this.items[a].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[a][l]-c)&&(d=!0,u+=this.items[a][l]),o>Math.abs(u-c)&&(o=Math.abs(u-c),r=this.items[a],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,a=e.pageX,o=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.accordion.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),a=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(t(e.target).attr("tabIndex",-1),t(a).attr("tabIndex",0),a.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),(e.active===!1&&e.collapsible===!0||!this.headers.length)&&(e.active=!1,this.active=t()),e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,a=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),a=n.attr("id");s||(s=o+"-header-"+e,i.attr("id",s)),a||(a=o+"-panel-"+e,n.attr("id",a)),i.attr("aria-controls",a),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=a.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?t():n,newPanel:r};e.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-expanded":"false","aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(t,e,n){var a,o,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(o=d),o=o||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(a=t.show().outerHeight(),e.animate(i,{duration:r,easing:o,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:o,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(a-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,o,p):t.animate(s,r,o,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.autocomplete.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=0;e.widget("ui.autocomplete",{version:"1.10.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,undefined;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,s.preventDefault(),undefined;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:e(),role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:s})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,i=++t;return function(s){i===t&&e.__response(s),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.button.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e,i,s,n,a="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this).find(":ui-button");setTimeout(function(){e.button("refresh")},1)},l=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var o=this,r=this.options,c="checkbox"===this.type||"radio"===this.type,u=c?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||t(this).removeClass(u)}).bind("click"+this.eventNamespace,function(t){r.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(d)}),c&&(this.element.bind("change"+this.eventNamespace,function(){n||o.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){r.disabled||(n=!1,i=t.pageX,s=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){r.disabled||(i!==t.pageX||s!==t.pageY)&&(n=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||n?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||n)return!1;t(this).addClass("ui-state-active"),o.buttonElement.attr("aria-pressed","true");var e=o.element[0];l(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(t(this).addClass("ui-state-active"),e=this,o.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return r.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(a+" "+o+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?l(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(r),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.datepicker.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(a.inline?e.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.2"}});var a,r="datepicker",o=(new Date).getTime();t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,r,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=t("<span class='"+this._appendClass+"'>"+r+"</span>"),e[o?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[o?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),r=this._get(t,"dateFormat");r.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,r.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,a,o){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],r,p)),n(p.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,r);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,r),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,a){var r,o,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(r=s||{},"string"==typeof s&&(r={},r[s]=a),c&&(this._curInst===c&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,r),null!==h&&r.dateFormat!==e&&r.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&r.dateFormat!==e&&r.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,o),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),r=!0,o=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),r=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),r=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),r=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?1:-1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),r=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?-1:1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),r=e.ctrlKey||e.metaKey;break;default:r=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):r=!1;r&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,a=t.datepicker._getInst(i.target);return t.datepicker._get(a,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(a,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,a,r,o,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),a=s?s.apply(e,[e,i]):{},a!==!1&&(n(i.settings,a),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),o={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),o=t.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),i.input.is(":visible")&&!i.input.is(":disabled")&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,a=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],r=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",r*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!==document.activeElement&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_getBorders:function(t){var e=function(t){return{thin:1,medium:2,thick:3}[t]||t};return[parseFloat(e(t.css("border-left-width"))),parseFloat(e(t.css("border-top-width")))]},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-r:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+o?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+o):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,r=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(a=this._getInst(r[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var a,r,o,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,m=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,v=-1,_=-1,b=-1,y=!1,w=function(t){var e=i.length>a+1&&i.charAt(a+1)===t;return e&&a++,e},k=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),a=s.substring(l).match(n);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},x=function(i,n,a){var r=-1,o=t.map(w(i)?a:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(r=i[0],l+=n.length,!1):e}),-1!==r)return r+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(a))throw"Unexpected literal at position "+l;l++};for(a=0;i.length>a;a++)if(y)"'"!==i.charAt(a)||w("'")?D():y=!1;else switch(i.charAt(a)){case"d":_=k("d");break;case"D":x("D",d,p);break;case"o":b=k("o");break;case"m":v=k("m");break;case"M":v=x("M",f,m);break;case"y":g=k("y");break;case"@":h=new Date(k("@")),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":w("'")?D():y=!0;break;default:D()}if(s.length>l&&(o=s.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=g?0:-100)),b>-1)for(v=1,_=b;;){if(r=this._getDaysInMonth(g,v-1),r>=_)break;v++,_-=r}if(h=this._daylightSavingAdjust(new Date(g,v-1,_)),h.getFullYear()!==g||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,a);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),r,o);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,r=this._getFormatConfig(t);try{a=this.parseDate(i,s,r)||n}catch(o){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),r=n.getMonth(),o=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r));break;case"y":case"Y":a+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r))}l=h.exec(i)}return new Date(a,r,o)},r=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?s:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,r=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=r.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=r.getMonth(),t.drawYear=t.selectedYear=t.currentYear=r.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+o].datepicker._adjustDate(s,-i,"M")},next:function(){window["DP_jQuery_"+o].datepicker._adjustDate(s,+i,"M")},hide:function(){window["DP_jQuery_"+o].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+o].datepicker._gotoToday(s)},selectDay:function(){return window["DP_jQuery_"+o].datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+o].datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+o].datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,r,o,h,l,c,u,d,p,f,m,g,v,_,b,y,w,k,x,D,T,C,S,M,N,I,P,A,z,H,E,F,O,W,j,R=new Date,L=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),J=this._get(t,"hideIfNoPrevNext"),Q=this._get(t,"navigationAsDateFormat"),K=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),U=this._get(t,"stepMonths"),q=1!==K[0]||1!==K[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),$=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),$)for(e=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=Q?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-U,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=Q?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+U,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",r=this._get(t,"currentText"),o=this._get(t,"gotoCurrent")&&t.currentDay?X:L,r=Q?this.formatDate(r,o,this._getFormatConfig(t)):r,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;K[0]>k;k++){for(x="",this.maxRows=4,D=0;K[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),C=" ui-corner-all",S="",q){if(S+="<div class='ui-datepicker-group",K[1]>1)switch(D){case 0:S+=" ui-datepicker-group-first",C=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:S+=" ui-datepicker-group-last",C=" ui-corner-"+(Y?"left":"right");break;default:S+=" ui-datepicker-group-middle",C=""}S+="'>"}for(S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===k?Y?a:s:"")+(/all|right/.test(C)&&0===k?Y?s:a:"")+this._generateMonthYearHeader(t,Z,te,G,$,k>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)N=(w+c)%7,M+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[N]+"'>"+p[N]+"</span></th>";for(S+=M+"</tr></thead><tbody>",I=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),P=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((P+I)/7),z=q?this.maxRows>A?this.maxRows:A:A,this.maxRows=z,H=this._daylightSavingAdjust(new Date(te,Z,1-P)),E=0;z>E;E++){for(S+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",w=0;7>w;w++)O=g?g.apply(t.input?t.input[0]:null,[H]):[!0,""],W=H.getMonth()!==Z,j=W&&!_||!O[0]||G&&G>H||$&&H>$,F+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(W?" ui-datepicker-other-month":"")+(H.getTime()===T.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(j?" "+this._unselectableClass+" ui-state-disabled":"")+(W&&!v?"":" "+O[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===L.getTime()?" ui-datepicker-today":""))+"'"+(W&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(j?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(W&&!v?"&#xa0;":j?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===L.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(W?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);S+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),S+="</tbody></table>"+(q?"</div>"+(K[0]>0&&D===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=S}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,r,o){var h,l,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+r[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+o[c]+"</option>");
y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),m=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),r=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),r=null,o=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=s),i[1].match(/[+\-].*/)&&(o+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!r||e.getFullYear()>=r)&&(!o||o>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.2",window["DP_jQuery_"+o]=t})(jQuery);

/* collective.js.jqueryui: jquery-ui-i18n.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Includes: jquery.ui.datepicker-af.js, jquery.ui.datepicker-ar-DZ.js, jquery.ui.datepicker-ar.js, jquery.ui.datepicker-az.js, jquery.ui.datepicker-be.js, jquery.ui.datepicker-bg.js, jquery.ui.datepicker-bs.js, jquery.ui.datepicker-ca.js, jquery.ui.datepicker-cs.js, jquery.ui.datepicker-cy-GB.js, jquery.ui.datepicker-da.js, jquery.ui.datepicker-de.js, jquery.ui.datepicker-el.js, jquery.ui.datepicker-en-AU.js, jquery.ui.datepicker-en-GB.js, jquery.ui.datepicker-en-NZ.js, jquery.ui.datepicker-eo.js, jquery.ui.datepicker-es.js, jquery.ui.datepicker-et.js, jquery.ui.datepicker-eu.js, jquery.ui.datepicker-fa.js, jquery.ui.datepicker-fi.js, jquery.ui.datepicker-fo.js, jquery.ui.datepicker-fr-CA.js, jquery.ui.datepicker-fr-CH.js, jquery.ui.datepicker-fr.js, jquery.ui.datepicker-gl.js, jquery.ui.datepicker-he.js, jquery.ui.datepicker-hi.js, jquery.ui.datepicker-hr.js, jquery.ui.datepicker-hu.js, jquery.ui.datepicker-hy.js, jquery.ui.datepicker-id.js, jquery.ui.datepicker-is.js, jquery.ui.datepicker-it.js, jquery.ui.datepicker-ja.js, jquery.ui.datepicker-ka.js, jquery.ui.datepicker-kk.js, jquery.ui.datepicker-km.js, jquery.ui.datepicker-ko.js, jquery.ui.datepicker-ky.js, jquery.ui.datepicker-lb.js, jquery.ui.datepicker-lt.js, jquery.ui.datepicker-lv.js, jquery.ui.datepicker-mk.js, jquery.ui.datepicker-ml.js, jquery.ui.datepicker-ms.js, jquery.ui.datepicker-nb.js, jquery.ui.datepicker-nl-BE.js, jquery.ui.datepicker-nl.js, jquery.ui.datepicker-nn.js, jquery.ui.datepicker-no.js, jquery.ui.datepicker-pl.js, jquery.ui.datepicker-pt-BR.js, jquery.ui.datepicker-pt.js, jquery.ui.datepicker-rm.js, jquery.ui.datepicker-ro.js, jquery.ui.datepicker-ru.js, jquery.ui.datepicker-sk.js, jquery.ui.datepicker-sl.js, jquery.ui.datepicker-sq.js, jquery.ui.datepicker-sr-SR.js, jquery.ui.datepicker-sr.js, jquery.ui.datepicker-sv.js, jquery.ui.datepicker-ta.js, jquery.ui.datepicker-th.js, jquery.ui.datepicker-tj.js, jquery.ui.datepicker-tr.js, jquery.ui.datepicker-uk.js, jquery.ui.datepicker-vi.js, jquery.ui.datepicker-zh-CN.js, jquery.ui.datepicker-zh-HK.js, jquery.ui.datepicker-zh-TW.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
jQuery(function(e){e.datepicker.regional.af={closeText:"Selekteer",prevText:"Vorige",nextText:"Volgende",currentText:"Vandag",monthNames:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],monthNamesShort:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],dayNames:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],dayNamesShort:["Son","Maa","Din","Woe","Don","Vry","Sat"],dayNamesMin:["So","Ma","Di","Wo","Do","Vr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.af)}),jQuery(function(e){e.datepicker.regional["ar-DZ"]={closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:6,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["ar-DZ"])}),jQuery(function(e){e.datepicker.regional.ar={closeText:"إغلاق",prevText:"&#x3C;السابق",nextText:"التالي&#x3E;",currentText:"اليوم",monthNames:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesShort:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["ح","ن","ث","ر","خ","ج","س"],weekHeader:"أسبوع",dateFormat:"dd/mm/yy",firstDay:6,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ar)}),jQuery(function(e){e.datepicker.regional.az={closeText:"Bağla",prevText:"&#x3C;Geri",nextText:"İrəli&#x3E;",currentText:"Bugün",monthNames:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],monthNamesShort:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],dayNames:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],dayNamesShort:["B","Be","Ça","Ç","Ca","C","Ş"],dayNamesMin:["B","B","Ç","С","Ç","C","Ş"],weekHeader:"Hf",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.az)}),jQuery(function(e){e.datepicker.regional.be={closeText:"Зачыніць",prevText:"&larr;Папяр.",nextText:"Наст.&rarr;",currentText:"Сёньня",monthNames:["Студзень","Люты","Сакавік","Красавік","Травень","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Сьнежань"],monthNamesShort:["Сту","Лют","Сак","Кра","Тра","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сьн"],dayNames:["нядзеля","панядзелак","аўторак","серада","чацьвер","пятніца","субота"],dayNamesShort:["ндз","пнд","аўт","срд","чцв","птн","сбт"],dayNamesMin:["Нд","Пн","Аў","Ср","Чц","Пт","Сб"],weekHeader:"Тд",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.be)}),jQuery(function(e){e.datepicker.regional.bg={closeText:"затвори",prevText:"&#x3C;назад",nextText:"напред&#x3E;",nextBigText:"&#x3E;&#x3E;",currentText:"днес",monthNames:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],monthNamesShort:["Яну","Фев","Мар","Апр","Май","Юни","Юли","Авг","Сеп","Окт","Нов","Дек"],dayNames:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],dayNamesShort:["Нед","Пон","Вто","Сря","Чет","Пет","Съб"],dayNamesMin:["Не","По","Вт","Ср","Че","Пе","Съ"],weekHeader:"Wk",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.bg)}),jQuery(function(e){e.datepicker.regional.bs={closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Januar","Februar","Mart","April","Maj","Juni","Juli","August","Septembar","Oktobar","Novembar","Decembar"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:["Nedelja","Ponedeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Wk",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.bs)}),jQuery(function(e){e.datepicker.regional.ca={closeText:"Tanca",prevText:"Anterior",nextText:"Següent",currentText:"Avui",monthNames:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],monthNamesShort:["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des"],dayNames:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],dayNamesShort:["dg","dl","dt","dc","dj","dv","ds"],dayNamesMin:["dg","dl","dt","dc","dj","dv","ds"],weekHeader:"Set",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ca)}),jQuery(function(e){e.datepicker.regional.cs={closeText:"Zavřít",prevText:"&#x3C;Dříve",nextText:"Později&#x3E;",currentText:"Nyní",monthNames:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],monthNamesShort:["led","úno","bře","dub","kvě","čer","čvc","srp","zář","říj","lis","pro"],dayNames:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],dayNamesShort:["ne","po","út","st","čt","pá","so"],dayNamesMin:["ne","po","út","st","čt","pá","so"],weekHeader:"Týd",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.cs)}),jQuery(function(e){e.datepicker.regional["cy-GB"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"],monthNamesShort:["Ion","Chw","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tac","Rha"],dayNames:["Dydd Sul","Dydd Llun","Dydd Mawrth","Dydd Mercher","Dydd Iau","Dydd Gwener","Dydd Sadwrn"],dayNamesShort:["Sul","Llu","Maw","Mer","Iau","Gwe","Sad"],dayNamesMin:["Su","Ll","Ma","Me","Ia","Gw","Sa"],weekHeader:"Wy",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["cy-GB"])}),jQuery(function(e){e.datepicker.regional.da={closeText:"Luk",prevText:"&#x3C;Forrige",nextText:"Næste&#x3E;",currentText:"Idag",monthNames:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],dayNamesShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayNamesMin:["Sø","Ma","Ti","On","To","Fr","Lø"],weekHeader:"Uge",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.da)}),jQuery(function(e){e.datepicker.regional.de={closeText:"Schließen",prevText:"&#x3C;Zurück",nextText:"Vor&#x3E;",currentText:"Heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.de)}),jQuery(function(e){e.datepicker.regional.el={closeText:"Κλείσιμο",prevText:"Προηγούμενος",nextText:"Επόμενος",currentText:"Τρέχων Μήνας",monthNames:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],monthNamesShort:["Ιαν","Φεβ","Μαρ","Απρ","Μαι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],dayNames:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],dayNamesShort:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dayNamesMin:["Κυ","Δε","Τρ","Τε","Πε","Πα","Σα"],weekHeader:"Εβδ",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.el)}),jQuery(function(e){e.datepicker.regional["en-AU"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["en-AU"])}),jQuery(function(e){e.datepicker.regional["en-GB"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["en-GB"])}),jQuery(function(e){e.datepicker.regional["en-NZ"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["en-NZ"])}),jQuery(function(e){e.datepicker.regional.eo={closeText:"Fermi",prevText:"&#x3C;Anta",nextText:"Sekv&#x3E;",currentText:"Nuna",monthNames:["Januaro","Februaro","Marto","Aprilo","Majo","Junio","Julio","Aŭgusto","Septembro","Oktobro","Novembro","Decembro"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aŭg","Sep","Okt","Nov","Dec"],dayNames:["Dimanĉo","Lundo","Mardo","Merkredo","Ĵaŭdo","Vendredo","Sabato"],dayNamesShort:["Dim","Lun","Mar","Mer","Ĵaŭ","Ven","Sab"],dayNamesMin:["Di","Lu","Ma","Me","Ĵa","Ve","Sa"],weekHeader:"Sb",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.eo)}),jQuery(function(e){e.datepicker.regional.es={closeText:"Cerrar",prevText:"&#x3C;Ant",nextText:"Sig&#x3E;",currentText:"Hoy",monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],dayNamesShort:["Dom","Lun","Mar","Mié","Juv","Vie","Sáb"],dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","Sá"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.es)}),jQuery(function(e){e.datepicker.regional.et={closeText:"Sulge",prevText:"Eelnev",nextText:"Järgnev",currentText:"Täna",monthNames:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],monthNamesShort:["Jaan","Veebr","Märts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"],dayNames:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],dayNamesShort:["Pühap","Esmasp","Teisip","Kolmap","Neljap","Reede","Laup"],dayNamesMin:["P","E","T","K","N","R","L"],weekHeader:"näd",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.et)}),jQuery(function(e){e.datepicker.regional.eu={closeText:"Egina",prevText:"&#x3C;Aur",nextText:"Hur&#x3E;",currentText:"Gaur",monthNames:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"],monthNamesShort:["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe."],dayNames:["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"],dayNamesShort:["ig.","al.","ar.","az.","og.","ol.","lr."],dayNamesMin:["ig","al","ar","az","og","ol","lr"],weekHeader:"As",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.eu)}),jQuery(function(e){e.datepicker.regional.fa={closeText:"بستن",prevText:"&#x3C;قبلی",nextText:"بعدی&#x3E;",currentText:"امروز",monthNames:["فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دی","بهمن","اسفند"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["يکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],dayNamesShort:["ی","د","س","چ","پ","ج","ش"],dayNamesMin:["ی","د","س","چ","پ","ج","ش"],weekHeader:"هف",dateFormat:"yy/mm/dd",firstDay:6,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.fa)}),jQuery(function(e){e.datepicker.regional.fi={closeText:"Sulje",prevText:"&#xAB;Edellinen",nextText:"Seuraava&#xBB;",currentText:"Tänään",monthNames:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],monthNamesShort:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],dayNamesShort:["Su","Ma","Ti","Ke","To","Pe","La"],dayNames:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],dayNamesMin:["Su","Ma","Ti","Ke","To","Pe","La"],weekHeader:"Vk",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.fi)}),jQuery(function(e){e.datepicker.regional.fo={closeText:"Lat aftur",prevText:"&#x3C;Fyrra",nextText:"Næsta&#x3E;",currentText:"Í dag",monthNames:["Januar","Februar","Mars","Apríl","Mei","Juni","Juli","August","September","Oktober","November","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],dayNames:["Sunnudagur","Mánadagur","Týsdagur","Mikudagur","Hósdagur","Fríggjadagur","Leyardagur"],dayNamesShort:["Sun","Mán","Týs","Mik","Hós","Frí","Ley"],dayNamesMin:["Su","Má","Tý","Mi","Hó","Fr","Le"],weekHeader:"Vk",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.fo)}),jQuery(function(e){e.datepicker.regional["fr-CA"]={closeText:"Fermer",prevText:"Précédent",nextText:"Suivant",currentText:"Aujourd'hui",monthNames:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthNamesShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dayNames:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],dayNamesShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sem.",dateFormat:"yy-mm-dd",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["fr-CA"])}),jQuery(function(e){e.datepicker.regional["fr-CH"]={closeText:"Fermer",prevText:"&#x3C;Préc",nextText:"Suiv&#x3E;",currentText:"Courant",monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],dayNamesMin:["Di","Lu","Ma","Me","Je","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["fr-CH"])}),jQuery(function(e){e.datepicker.regional.fr={closeText:"Fermer",prevText:"Précédent",nextText:"Suivant",currentText:"Aujourd'hui",monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Janv.","Févr.","Mars","Avril","Mai","Juin","Juil.","Août","Sept.","Oct.","Nov.","Déc."],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim.","Lun.","Mar.","Mer.","Jeu.","Ven.","Sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sem.",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.fr)}),jQuery(function(e){e.datepicker.regional.gl={closeText:"Pechar",prevText:"&#x3C;Ant",nextText:"Seg&#x3E;",currentText:"Hoxe",monthNames:["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"],monthNamesShort:["Xan","Feb","Mar","Abr","Mai","Xuñ","Xul","Ago","Set","Out","Nov","Dec"],dayNames:["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"],dayNamesShort:["Dom","Lun","Mar","Mér","Xov","Ven","Sáb"],dayNamesMin:["Do","Lu","Ma","Mé","Xo","Ve","Sá"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.gl)}),jQuery(function(e){e.datepicker.regional.he={closeText:"סגור",prevText:"&#x3C;הקודם",nextText:"הבא&#x3E;",currentText:"היום",monthNames:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],monthNamesShort:["ינו","פבר","מרץ","אפר","מאי","יוני","יולי","אוג","ספט","אוק","נוב","דצמ"],dayNames:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],dayNamesShort:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],dayNamesMin:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!0,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.he)}),jQuery(function(e){e.datepicker.regional.hi={closeText:"बंद",prevText:"पिछला",nextText:"अगला",currentText:"आज",monthNames:["जनवरी ","फरवरी","मार्च","अप्रेल","मई","जून","जूलाई","अगस्त ","सितम्बर","अक्टूबर","नवम्बर","दिसम्बर"],monthNamesShort:["जन","फर","मार्च","अप्रेल","मई","जून","जूलाई","अग","सित","अक्ट","नव","दि"],dayNames:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],dayNamesShort:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],dayNamesMin:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],weekHeader:"हफ्ता",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.hi)}),jQuery(function(e){e.datepicker.regional.hr={closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],monthNamesShort:["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],dayNames:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Tje",dateFormat:"dd.mm.yy.",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.hr)}),jQuery(function(e){e.datepicker.regional.hu={closeText:"bezár",prevText:"vissza",nextText:"előre",currentText:"ma",monthNames:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],monthNamesShort:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],dayNames:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],dayNamesShort:["Vas","Hét","Ked","Sze","Csü","Pén","Szo"],dayNamesMin:["V","H","K","Sze","Cs","P","Szo"],weekHeader:"Hét",dateFormat:"yy.mm.dd.",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.hu)}),jQuery(function(e){e.datepicker.regional.hy={closeText:"Փակել",prevText:"&#x3C;Նախ.",nextText:"Հաջ.&#x3E;",currentText:"Այսօր",monthNames:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],monthNamesShort:["Հունվ","Փետր","Մարտ","Ապր","Մայիս","Հունիս","Հուլ","Օգս","Սեպ","Հոկ","Նոյ","Դեկ"],dayNames:["կիրակի","եկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"],dayNamesShort:["կիր","երկ","երք","չրք","հնգ","ուրբ","շբթ"],dayNamesMin:["կիր","երկ","երք","չրք","հնգ","ուրբ","շբթ"],weekHeader:"ՇԲՏ",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.hy)}),jQuery(function(e){e.datepicker.regional.id={closeText:"Tutup",prevText:"&#x3C;mundur",nextText:"maju&#x3E;",currentText:"hari ini",monthNames:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agus","Sep","Okt","Nop","Des"],dayNames:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],dayNamesShort:["Min","Sen","Sel","Rab","kam","Jum","Sab"],dayNamesMin:["Mg","Sn","Sl","Rb","Km","jm","Sb"],weekHeader:"Mg",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.id)}),jQuery(function(e){e.datepicker.regional.is={closeText:"Loka",prevText:"&#x3C; Fyrri",nextText:"Næsti &#x3E;",currentText:"Í dag",monthNames:["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],dayNames:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"],dayNamesShort:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"],dayNamesMin:["Su","Má","Þr","Mi","Fi","Fö","La"],weekHeader:"Vika",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.is)}),jQuery(function(e){e.datepicker.regional.it={closeText:"Chiudi",prevText:"&#x3C;Prec",nextText:"Succ&#x3E;",currentText:"Oggi",monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayNamesMin:["Do","Lu","Ma","Me","Gi","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.it)}),jQuery(function(e){e.datepicker.regional.ja={closeText:"閉じる",prevText:"&#x3C;前",nextText:"次&#x3E;",currentText:"今日",monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthNamesShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayNames:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],dayNamesShort:["日","月","火","水","木","金","土"],dayNamesMin:["日","月","火","水","木","金","土"],weekHeader:"週",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},e.datepicker.setDefaults(e.datepicker.regional.ja)}),jQuery(function(e){e.datepicker.regional.ka={closeText:"დახურვა",prevText:"&#x3c; წინა",nextText:"შემდეგი &#x3e;",currentText:"დღეს",monthNames:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],monthNamesShort:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],dayNames:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],dayNamesShort:["კვ","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],dayNamesMin:["კვ","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],weekHeader:"კვირა",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ka)}),jQuery(function(e){e.datepicker.regional.kk={closeText:"Жабу",prevText:"&#x3C;Алдыңғы",nextText:"Келесі&#x3E;",currentText:"Бүгін",monthNames:["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],monthNamesShort:["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел"],dayNames:["Жексенбі","Дүйсенбі","Сейсенбі","Сәрсенбі","Бейсенбі","Жұма","Сенбі"],dayNamesShort:["жкс","дсн","ссн","срс","бсн","жма","снб"],dayNamesMin:["Жк","Дс","Сс","Ср","Бс","Жм","Сн"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.kk)}),jQuery(function(e){e.datepicker.regional.km={closeText:"ធ្វើ​រួច",prevText:"មុន",nextText:"បន្ទាប់",currentText:"ថ្ងៃ​នេះ",monthNames:["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],monthNamesShort:["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],dayNames:["អាទិត្យ","ចន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"],dayNamesShort:["អា","ច","អ","ពុ","ព្រហ","សុ","សៅ"],dayNamesMin:["អា","ច","អ","ពុ","ព្រហ","សុ","សៅ"],weekHeader:"សប្ដាហ៍",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.km)}),jQuery(function(e){e.datepicker.regional.ko={closeText:"닫기",prevText:"이전달",nextText:"다음달",currentText:"오늘",monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayNames:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],dayNamesShort:["일","월","화","수","목","금","토"],dayNamesMin:["일","월","화","수","목","금","토"],weekHeader:"Wk",dateFormat:"yy-mm-dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"년"},e.datepicker.setDefaults(e.datepicker.regional.ko)}),jQuery(function(e){e.datepicker.regional.ky={closeText:"Жабуу",prevText:"&#x3c;Мур",nextText:"Кий&#x3e;",currentText:"Бүгүн",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["жекшемби","дүйшөмбү","шейшемби","шаршемби","бейшемби","жума","ишемби"],dayNamesShort:["жек","дүй","шей","шар","бей","жум","ише"],dayNamesMin:["Жк","Дш","Шш","Шр","Бш","Жм","Иш"],weekHeader:"Жум",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ky)}),jQuery(function(e){e.datepicker.regional.lb={closeText:"Fäerdeg",prevText:"Zréck",nextText:"Weider",currentText:"Haut",monthNames:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],dayNamesShort:["Son","Méi","Dën","Mët","Don","Fre","Sam"],dayNamesMin:["So","Mé","Dë","Më","Do","Fr","Sa"],weekHeader:"W",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.lb)}),jQuery(function(e){e.datepicker.regional.lt={closeText:"Uždaryti",prevText:"&#x3C;Atgal",nextText:"Pirmyn&#x3E;",currentText:"Šiandien",monthNames:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],monthNamesShort:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rugp","Rugs","Spa","Lap","Gru"],dayNames:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],dayNamesShort:["sek","pir","ant","tre","ket","pen","šeš"],dayNamesMin:["Se","Pr","An","Tr","Ke","Pe","Še"],weekHeader:"Wk",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.lt)}),jQuery(function(e){e.datepicker.regional.lv={closeText:"Aizvērt",prevText:"Iepr",nextText:"Nāka",currentText:"Šodien",monthNames:["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],monthNamesShort:["Jan","Feb","Mar","Apr","Mai","Jūn","Jūl","Aug","Sep","Okt","Nov","Dec"],dayNames:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],dayNamesShort:["svt","prm","otr","tre","ctr","pkt","sst"],dayNamesMin:["Sv","Pr","Ot","Tr","Ct","Pk","Ss"],weekHeader:"Nav",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.lv)}),jQuery(function(e){e.datepicker.regional.mk={closeText:"Затвори",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Денес",monthNames:["Јануари","Февруари","Март","Април","Мај","Јуни","Јули","Август","Септември","Октомври","Ноември","Декември"],monthNamesShort:["Јан","Фев","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Ное","Дек"],dayNames:["Недела","Понеделник","Вторник","Среда","Четврток","Петок","Сабота"],dayNamesShort:["Нед","Пон","Вто","Сре","Чет","Пет","Саб"],dayNamesMin:["Не","По","Вт","Ср","Че","Пе","Са"],weekHeader:"Сед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.mk)}),jQuery(function(e){e.datepicker.regional.ml={closeText:"ശരി",prevText:"മുന്നത്തെ",nextText:"അടുത്തത് ",currentText:"ഇന്ന്",monthNames:["ജനുവരി","ഫെബ്രുവരി","മാര്‍ച്ച്","ഏപ്രില്‍","മേയ്","ജൂണ്‍","ജൂലൈ","ആഗസ്റ്റ്","സെപ്റ്റംബര്‍","ഒക്ടോബര്‍","നവംബര്‍","ഡിസംബര്‍"],monthNamesShort:["ജനു","ഫെബ്","മാര്‍","ഏപ്രി","മേയ്","ജൂണ്‍","ജൂലാ","ആഗ","സെപ്","ഒക്ടോ","നവം","ഡിസ"],dayNames:["ഞായര്‍","തിങ്കള്‍","ചൊവ്വ","ബുധന്‍","വ്യാഴം","വെള്ളി","ശനി"],dayNamesShort:["ഞായ","തിങ്ക","ചൊവ്വ","ബുധ","വ്യാഴം","വെള്ളി","ശനി"],dayNamesMin:["ഞാ","തി","ചൊ","ബു","വ്യാ","വെ","ശ"],weekHeader:"ആ",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ml)}),jQuery(function(e){e.datepicker.regional.ms={closeText:"Tutup",prevText:"&#x3C;Sebelum",nextText:"Selepas&#x3E;",currentText:"hari ini",monthNames:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],monthNamesShort:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],dayNames:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],dayNamesShort:["Aha","Isn","Sel","Rab","kha","Jum","Sab"],dayNamesMin:["Ah","Is","Se","Ra","Kh","Ju","Sa"],weekHeader:"Mg",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ms)}),jQuery(function(e){e.datepicker.regional.nb={closeText:"Lukk",prevText:"&#xAB;Forrige",nextText:"Neste&#xBB;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["søn","man","tir","ons","tor","fre","lør"],dayNames:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],dayNamesMin:["sø","ma","ti","on","to","fr","lø"],weekHeader:"Uke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.nb)
}),jQuery(function(e){e.datepicker.regional["nl-BE"]={closeText:"Sluiten",prevText:"←",nextText:"→",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["nl-BE"])}),jQuery(function(e){e.datepicker.regional.nl={closeText:"Sluiten",prevText:"←",nextText:"→",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.nl)}),jQuery(function(e){e.datepicker.regional.nn={closeText:"Lukk",prevText:"&#xAB;Førre",nextText:"Neste&#xBB;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["sun","mån","tys","ons","tor","fre","lau"],dayNames:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],dayNamesMin:["su","må","ty","on","to","fr","la"],weekHeader:"Veke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.nn)}),jQuery(function(e){e.datepicker.regional.no={closeText:"Lukk",prevText:"&#xAB;Forrige",nextText:"Neste&#xBB;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["søn","man","tir","ons","tor","fre","lør"],dayNames:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],dayNamesMin:["sø","ma","ti","on","to","fr","lø"],weekHeader:"Uke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.no)}),jQuery(function(e){e.datepicker.regional.pl={closeText:"Zamknij",prevText:"&#x3C;Poprzedni",nextText:"Następny&#x3E;",currentText:"Dziś",monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthNamesShort:["Sty","Lu","Mar","Kw","Maj","Cze","Lip","Sie","Wrz","Pa","Lis","Gru"],dayNames:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesShort:["Nie","Pn","Wt","Śr","Czw","Pt","So"],dayNamesMin:["N","Pn","Wt","Śr","Cz","Pt","So"],weekHeader:"Tydz",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.pl)}),jQuery(function(e){e.datepicker.regional["pt-BR"]={closeText:"Fechar",prevText:"&#x3C;Anterior",nextText:"Próximo&#x3E;",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["pt-BR"])}),jQuery(function(e){e.datepicker.regional.pt={closeText:"Fechar",prevText:"&#x3C;Anterior",nextText:"Seguinte",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],weekHeader:"Sem",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.pt)}),jQuery(function(e){e.datepicker.regional.rm={closeText:"Serrar",prevText:"&#x3C;Suandant",nextText:"Precedent&#x3E;",currentText:"Actual",monthNames:["Schaner","Favrer","Mars","Avrigl","Matg","Zercladur","Fanadur","Avust","Settember","October","November","December"],monthNamesShort:["Scha","Fev","Mar","Avr","Matg","Zer","Fan","Avu","Sett","Oct","Nov","Dec"],dayNames:["Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda"],dayNamesShort:["Dum","Gli","Mar","Mes","Gie","Ven","Som"],dayNamesMin:["Du","Gl","Ma","Me","Gi","Ve","So"],weekHeader:"emna",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.rm)}),jQuery(function(e){e.datepicker.regional.ro={closeText:"Închide",prevText:"&#xAB; Luna precedentă",nextText:"Luna următoare &#xBB;",currentText:"Azi",monthNames:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],monthNamesShort:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],dayNamesShort:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],dayNamesMin:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"],weekHeader:"Săpt",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ro)}),jQuery(function(e){e.datepicker.regional.ru={closeText:"Закрыть",prevText:"&#x3C;Пред",nextText:"След&#x3E;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Нед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ru)}),jQuery(function(e){e.datepicker.regional.sk={closeText:"Zavrieť",prevText:"&#x3C;Predchádzajúci",nextText:"Nasledujúci&#x3E;",currentText:"Dnes",monthNames:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],monthNamesShort:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],dayNames:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],dayNamesShort:["Ned","Pon","Uto","Str","Štv","Pia","Sob"],dayNamesMin:["Ne","Po","Ut","St","Št","Pia","So"],weekHeader:"Ty",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.sk)}),jQuery(function(e){e.datepicker.regional.sl={closeText:"Zapri",prevText:"&#x3C;Prejšnji",nextText:"Naslednji&#x3E;",currentText:"Trenutni",monthNames:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],dayNames:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"],dayNamesShort:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],dayNamesMin:["Ne","Po","To","Sr","Če","Pe","So"],weekHeader:"Teden",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.sl)}),jQuery(function(e){e.datepicker.regional.sq={closeText:"mbylle",prevText:"&#x3C;mbrapa",nextText:"Përpara&#x3E;",currentText:"sot",monthNames:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],monthNamesShort:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],dayNames:["E Diel","E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtune"],dayNamesShort:["Di","Hë","Ma","Më","En","Pr","Sh"],dayNamesMin:["Di","Hë","Ma","Më","En","Pr","Sh"],weekHeader:"Ja",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.sq)}),jQuery(function(e){e.datepicker.regional["sr-SR"]={closeText:"Zatvori",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Danas",monthNames:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],dayNames:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],dayNamesShort:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],dayNamesMin:["Ne","Po","Ut","Sr","Če","Pe","Su"],weekHeader:"Sed",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional["sr-SR"])}),jQuery(function(e){e.datepicker.regional.sr={closeText:"Затвори",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Данас",monthNames:["Јануар","Фебруар","Март","Април","Мај","Јун","Јул","Август","Септембар","Октобар","Новембар","Децембар"],monthNamesShort:["Јан","Феб","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Нов","Дец"],dayNames:["Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота"],dayNamesShort:["Нед","Пон","Уто","Сре","Чет","Пет","Суб"],dayNamesMin:["Не","По","Ут","Ср","Че","Пе","Су"],weekHeader:"Сед",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.sr)}),jQuery(function(e){e.datepicker.regional.sv={closeText:"Stäng",prevText:"&#xAB;Förra",nextText:"Nästa&#xBB;",currentText:"Idag",monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNamesShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],dayNames:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],dayNamesMin:["Sö","Må","Ti","On","To","Fr","Lö"],weekHeader:"Ve",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.sv)}),jQuery(function(e){e.datepicker.regional.ta={closeText:"மூடு",prevText:"முன்னையது",nextText:"அடுத்தது",currentText:"இன்று",monthNames:["தை","மாசி","பங்குனி","சித்திரை","வைகாசி","ஆனி","ஆடி","ஆவணி","புரட்டாசி","ஐப்பசி","கார்த்திகை","மார்கழி"],monthNamesShort:["தை","மாசி","பங்","சித்","வைகா","ஆனி","ஆடி","ஆவ","புர","ஐப்","கார்","மார்"],dayNames:["ஞாயிற்றுக்கிழமை","திங்கட்கிழமை","செவ்வாய்க்கிழமை","புதன்கிழமை","வியாழக்கிழமை","வெள்ளிக்கிழமை","சனிக்கிழமை"],dayNamesShort:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"],dayNamesMin:["ஞா","தி","செ","பு","வி","வெ","ச"],weekHeader:"Не",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.ta)}),jQuery(function(e){e.datepicker.regional.th={closeText:"ปิด",prevText:"&#xAB;&#xA0;ย้อน",nextText:"ถัดไป&#xA0;&#xBB;",currentText:"วันนี้",monthNames:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],monthNamesShort:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dayNames:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],dayNamesShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayNamesMin:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.th)}),jQuery(function(e){e.datepicker.regional.tj={closeText:"Идома",prevText:"&#x3c;Қафо",nextText:"Пеш&#x3e;",currentText:"Имрӯз",monthNames:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["якшанбе","душанбе","сешанбе","чоршанбе","панҷшанбе","ҷумъа","шанбе"],dayNamesShort:["якш","душ","сеш","чор","пан","ҷум","шан"],dayNamesMin:["Як","Дш","Сш","Чш","Пш","Ҷм","Шн"],weekHeader:"Хф",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.tj)}),jQuery(function(e){e.datepicker.regional.tr={closeText:"kapat",prevText:"&#x3C;geri",nextText:"ileri&#x3e",currentText:"bugün",monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],monthNamesShort:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],dayNames:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],dayNamesShort:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],dayNamesMin:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],weekHeader:"Hf",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.tr)}),jQuery(function(e){e.datepicker.regional.uk={closeText:"Закрити",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Сьогодні",monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],monthNamesShort:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],dayNames:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],dayNamesShort:["нед","пнд","вів","срд","чтв","птн","сбт"],dayNamesMin:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Тиж",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.uk)}),jQuery(function(e){e.datepicker.regional.vi={closeText:"Đóng",prevText:"&#x3C;Trước",nextText:"Tiếp&#x3E;",currentText:"Hôm nay",monthNames:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"],monthNamesShort:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayNames:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],dayNamesShort:["CN","T2","T3","T4","T5","T6","T7"],dayNamesMin:["CN","T2","T3","T4","T5","T6","T7"],weekHeader:"Tu",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.datepicker.setDefaults(e.datepicker.regional.vi)}),jQuery(function(e){e.datepicker.regional["zh-CN"]={closeText:"关闭",prevText:"&#x3C;上月",nextText:"下月&#x3E;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},e.datepicker.setDefaults(e.datepicker.regional["zh-CN"])}),jQuery(function(e){e.datepicker.regional["zh-HK"]={closeText:"關閉",prevText:"&#x3C;上月",nextText:"下月&#x3E;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"dd-mm-yy",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},e.datepicker.setDefaults(e.datepicker.regional["zh-HK"])}),jQuery(function(e){e.datepicker.regional["zh-TW"]={closeText:"關閉",prevText:"&#x3C;上月",nextText:"下月&#x3E;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"yy/mm/dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},e.datepicker.setDefaults(e.datepicker.regional["zh-TW"])});

/* collective.js.jqueryui: jquery.ui.dialog.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||t(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,a;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(a).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,a){s.position=[a.position.left-i.document.scrollLeft(),a.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(a))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,a){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(a))}}).css("position",a)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,a=!1,o={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(a=!0),t in i&&(o[t]=s)}),a&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.menu.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.widget("ui.menu",{version:"1.10.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(e),i.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.progressbar.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){t.widget("ui.progressbar",{version:"1.10.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.slider.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.2",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-blind.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var a,o,r,h=t(this),l=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(h,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",m=i.test(u),g={},v="show"===c;h.parent().is(".ui-effects-wrapper")?t.effects.save(h.parent(),l):t.effects.save(h,l),h.show(),a=t.effects.createWrapper(h).css({overflow:"hidden"}),o=a[p](),r=parseFloat(a.css(f))||0,g[p]=v?o:0,m||(h.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[f]=v?r:o+r),v&&(a.css(p,0),m||a.css(f,r+o)),a.animate(g,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&h.hide(),t.effects.restore(h,l),t.effects.removeWrapper(h),n()}})}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-bounce.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.bounce=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(o,e.mode||"effect"),l="hide"===h,c="show"===h,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),m=e.duration/f,g=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=o.queue(),y=b.length;for((c||l)&&r.push("opacity"),t.effects.save(o,r),o.show(),t.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,_?2*-d:2*d).animate(a,m,g)),l&&(d/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,o.animate(n,m,g).animate(a,m,g),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),o.dequeue()}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-clip.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.clip=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(o,e.mode||"hide"),l="show"===h,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(o,r),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[d](),l&&(n.css(d,0),n.css(p,a/2)),f[d]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}})}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-drop.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","opacity","height","width"],o=t.effects.setMode(n,e.mode||"hide"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,a),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===c?-s:s),u[l]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-explode.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),m||p.hide(),i()}var a,o,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(a=0;u>a;a++)for(h=g.top+a*_,c=a-(u-1)/2,o=0;d>o;o++)r=g.left+o*v,l=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(m?l*v:0),top:h+(m?c*_:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:c*_),opacity:m?1:0},e.duration||500,e.easing,s)}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-fade.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-fold.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.fold=function(e,i){var s,n,a=t(this),o=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(a,e.mode||"hide"),h="show"===r,l="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],m=e.duration/2,g={},v={};t.effects.save(a,o),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),g[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(g,m,e.easing).animate(v,m,e.easing,function(){l&&a.hide(),t.effects.restore(a,o),t.effects.removeWrapper(a),i()})}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-highlight.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],a=t.effects.setMode(s,e.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&s.hide(),t.effects.restore(s,n),i()}})}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-pulsate.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),a=t.effects.setMode(n,e.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;l>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-scale.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),a="hide"===n,o=parseInt(e.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),a=t.effects.setMode(s,e.mode||"effect"),o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===a?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(o,e.mode||"effect"),f=e.restore||"effect"!==p,m=e.scale||"both",g=e.origin||["middle","center"],v=o.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===e.mode&&"show"===p?(o.from=e.to||b,o.to=e.from||s):(o.from=e.from||("show"===p?b:s),o.to=e.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(_=_.concat(u),o.from=t.effects.setTransition(o,u,a.from.y,o.from),o.to=t.effects.setTransition(o,u,a.to.y,o.to)),a.from.x!==a.to.x&&(_=_.concat(d),o.from=t.effects.setTransition(o,d,a.from.x,o.from),o.to=t.effects.setTransition(o,d,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(_=_.concat(c).concat(l),o.from=t.effects.setTransition(o,c,a.from.y,o.from),o.to=t.effects.setTransition(o,c,a.to.y,o.to)),t.effects.save(o,_),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=t.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),l=r.concat(u).concat(d),o.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=t.effects.setTransition(i,u,a.from.y,i.from),i.to=t.effects.setTransition(i,u,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=t.effects.setTransition(i,d,a.from.x,i.from),i.to=t.effects.setTransition(i,d,a.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),t.effects.restore(o,_),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,i){var s=parseInt(i,10),n=t?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(o),i()}})}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-shake.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),_=v.length;for(t.effects.save(n,a),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,m[d]=(p?"+=":"-=")+2*h,g[d]=(p?"-=":"+=")+2*h,n.animate(f,u,e.easing),s=1;l>s;s++)n.animate(m,u,e.easing).animate(g,u,e.easing);n.animate(m,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-slide.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);

/* collective.js.jqueryui: jquery.ui.effect-transfer.min.js */

/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),a="fixed"===n.css("position"),o=t("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}})(jQuery);


/* - event-registration.js - */
// http://www.eea.europa.eu/portal_javascripts/event-registration.js?original=1
function addDOMLoadEvent(listener){jQuery(listener)}


/* - register_function.js - */
// http://www.eea.europa.eu/portal_javascripts/register_function.js?original=1
var bugRiddenCrashPronePieceOfJunk=(navigator.userAgent.indexOf('MSIE 5')!==-1&&navigator.userAgent.indexOf('Mac')!==-1);var W3CDOM=(!bugRiddenCrashPronePieceOfJunk&&typeof document.getElementsByTagName!=='undefined'&&typeof document.createElement!=='undefined');var registerEventListener=function(elem,event,func){jQuery(elem).bind(event,func)};var unRegisterEventListener=function(elem,event,func){jQuery(elem).unbind(event,func)};var registerPloneFunction=jQuery;
function getContentArea(){var node=jQuery('#region-content,#content');return node.length?node[0]:null}


/* - plone_javascript_variables.js - */
// http://www.eea.europa.eu/portal_javascripts/plone_javascript_variables.js?original=1
var portal_url='http://www.eea.europa.eu';var form_modified_message='Your form has not been saved. All changes you have made will be lost.';var form_resubmit_message='You already clicked the submit button. Do you really want to submit this form again?';var external_links_open_new_window='false';var mark_special_links='True';var ajax_noresponse_message='No response from server. Please try again later.';

/* - ++resource++plone.app.jquerytools.js - */
!function($){function Overlay(trigger,conf){var closers,overlay,opened,self=this,fire=trigger.add(self),w=$(window),maskConf=$.tools.expose&&(conf.mask||conf.expose),uid=Math.random().toString().slice(10);maskConf&&("string"==typeof maskConf&&(maskConf={color:maskConf}),maskConf.closeOnClick=maskConf.closeOnEsc=!1);var jq=conf.target||trigger.attr("rel");if(overlay=jq?$(jq):null||trigger,!overlay.length)throw"Could not find Overlay: "+jq;trigger&&-1==trigger.index(overlay)&&trigger.click(function(e){return self.load(e),e.preventDefault()}),$.extend(self,{load:function(e){if(self.isOpened())return self;var eff=effects[conf.effect];if(!eff)throw'Overlay: cannot find effect : "'+conf.effect+'"';if(conf.oneInstance&&$.each(instances,function(){this.close(e)}),e=e||$.Event(),e.type="onBeforeLoad",fire.trigger(e),e.isDefaultPrevented())return self;opened=!0,maskConf&&$(overlay).expose(maskConf);var top=conf.top,left=conf.left,oWidth=overlay.outerWidth(!0),oHeight=overlay.outerHeight(!0);return"string"==typeof top&&(top="center"==top?Math.max((w.height()-oHeight)/2,0):parseInt(top,10)/100*w.height()),"center"==left&&(left=Math.max((w.width()-oWidth)/2,0)),eff[0].call(self,{top:top,left:left},function(){opened&&(e.type="onLoad",fire.trigger(e))}),maskConf&&conf.closeOnClick&&$.mask.getMask().one("click",self.close),conf.closeOnClick&&$(document).on("click."+uid,function(e){$(e.target).parents(overlay).length||self.close(e)}),conf.closeOnEsc&&$(document).on("keydown."+uid,function(e){27==e.keyCode&&self.close(e)}),self},close:function(e){return self.isOpened()?(e=e||$.Event(),e.type="onBeforeClose",fire.trigger(e),e.isDefaultPrevented()?void 0:(opened=!1,effects[conf.effect][1].call(self,function(){e.type="onClose",fire.trigger(e)}),$(document).off("click."+uid+" keydown."+uid),maskConf&&$.mask.close(),self)):self},getOverlay:function(){return overlay},getTrigger:function(){return trigger},getClosers:function(){return closers},isOpened:function(){return opened},getConf:function(){return conf}}),$.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),closers=overlay.find(conf.close||".close"),closers.length||conf.close||(closers=$('<a class="close"></a>'),overlay.prepend(closers)),closers.click(function(e){self.close(e)}),conf.load&&self.load()}$.tools=$.tools||{version:"@VERSION"},$.tools.overlay={addEffect:function(name,loadFn,closeFn){effects[name]=[loadFn,closeFn]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!/msie/.test(navigator.userAgent.toLowerCase())||navigator.appVersion>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var instances=[],effects={};$.tools.overlay.addEffect("default",function(pos,onLoad){var conf=this.getConf(),w=$(window);conf.fixed||(pos.top+=w.scrollTop(),pos.left+=w.scrollLeft()),pos.position=conf.fixed?"fixed":"absolute",this.getOverlay().css(pos).fadeIn(conf.speed,onLoad)},function(onClose){this.getOverlay().fadeOut(this.getConf().closeSpeed,onClose)}),$.fn.overlay=function(conf){var el=this.data("overlay");return el?el:($.isFunction(conf)&&(conf={onBeforeLoad:conf}),conf=$.extend(!0,{},$.tools.overlay.conf,conf),this.each(function(){el=new Overlay($(this),conf),instances.push(el),$(this).data("overlay",el)}),conf.api?el:this)}}(jQuery),function($){function find(root,query){var el=$(query);return el.length<2?el:root.parent().find(query)}function Scrollable(root,conf){var self=this,fire=root.add(self),itemWrap=root.children(),index=0,vertical=conf.vertical;if(current||(current=self),itemWrap.length>1&&(itemWrap=$(conf.items,root)),conf.size>1&&(conf.circular=!1),$.extend(self,{getConf:function(){return conf},getIndex:function(){return index},getSize:function(){return self.getItems().size()},getNaviButtons:function(){return prev.add(next)},getRoot:function(){return root},getItemWrap:function(){return itemWrap},getItems:function(){return itemWrap.find(conf.item).not("."+conf.clonedClass)},move:function(offset,time){return self.seekTo(index+offset,time)},next:function(time){return self.move(conf.size,time)},prev:function(time){return self.move(-conf.size,time)},begin:function(time){return self.seekTo(0,time)},end:function(time){return self.seekTo(self.getSize()-1,time)},focus:function(){return current=self,self},addItem:function(item){return item=$(item),conf.circular?(itemWrap.children().last().before(item),itemWrap.children().first().replaceWith(item.clone().addClass(conf.clonedClass))):(itemWrap.append(item),next.removeClass("disabled")),fire.trigger("onAddItem",[item]),self},seekTo:function(i,time,fn){if(i.jquery||(i*=1),conf.circular&&0===i&&-1==index&&0!==time)return self;if(!conf.circular&&0>i||i>self.getSize()||-1>i)return self;var item=i;i.jquery?i=self.getItems().index(i):item=self.getItems().eq(i);var e=$.Event("onBeforeSeek");if(!fn&&(fire.trigger(e,[i,time]),e.isDefaultPrevented()||!item.length))return self;var props=vertical?{top:-item.position().top}:{left:-item.position().left};return index=i,current=self,void 0===time&&(time=conf.speed),itemWrap.animate(props,time,conf.easing,fn||function(){fire.trigger("onSeek",[i])}),self}}),$.each(["onBeforeSeek","onSeek","onAddItem"],function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.circular){var cloned1=self.getItems().slice(-1).clone().prependTo(itemWrap),cloned2=self.getItems().eq(1).clone().appendTo(itemWrap);cloned1.add(cloned2).addClass(conf.clonedClass),self.onBeforeSeek(function(e,i,time){return e.isDefaultPrevented()?void 0:-1==i?(self.seekTo(cloned1,time,function(){self.end(0)}),e.preventDefault()):void(i==self.getSize()&&self.seekTo(cloned2,time,function(){self.begin(0)}))});var hidden_parents=root.parents().add(root).filter(function(){return"none"===$(this).css("display")?!0:void 0});hidden_parents.length?(hidden_parents.show(),self.seekTo(0,0,function(){}),hidden_parents.hide()):self.seekTo(0,0,function(){})}var prev=find(root,conf.prev).click(function(e){e.stopPropagation(),self.prev()}),next=find(root,conf.next).click(function(e){e.stopPropagation(),self.next()});if(conf.circular||(self.onBeforeSeek(function(e,i){setTimeout(function(){e.isDefaultPrevented()||(prev.toggleClass(conf.disabledClass,0>=i),next.toggleClass(conf.disabledClass,i>=self.getSize()-1))},1)}),conf.initialIndex||prev.addClass(conf.disabledClass)),self.getSize()<2&&prev.add(next).addClass(conf.disabledClass),conf.mousewheel&&$.fn.mousewheel&&root.mousewheel(function(e,delta){return conf.mousewheel?(self.move(0>delta?1:-1,conf.wheelSpeed||50),!1):void 0}),conf.touch){var touch={};itemWrap[0].ontouchstart=function(e){var t=e.touches[0];touch.x=t.clientX,touch.y=t.clientY},itemWrap[0].ontouchmove=function(e){if(1==e.touches.length&&!itemWrap.is(":animated")){var t=e.touches[0],deltaX=touch.x-t.clientX,deltaY=touch.y-t.clientY;self[vertical&&deltaY>0||!vertical&&deltaX>0?"next":"prev"](),e.preventDefault()}}}conf.keyboard&&$(document).on("keydown.scrollable",function(evt){if(!(!conf.keyboard||evt.altKey||evt.ctrlKey||evt.metaKey||$(evt.target).is(":input")||"static"!=conf.keyboard&&current!=self)){var key=evt.keyCode;return!vertical||38!=key&&40!=key?vertical||37!=key&&39!=key?void 0:(self.move(37==key?-1:1),evt.preventDefault()):(self.move(38==key?-1:1),evt.preventDefault())}}),conf.initialIndex&&self.seekTo(conf.initialIndex,0,function(){})}$.tools=$.tools||{version:"@VERSION"},$.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};var current;$.fn.scrollable=function(conf){var el=this.data("scrollable");return el?el:(conf=$.extend({},$.tools.scrollable.conf,conf),this.each(function(){el=new Scrollable($(this),conf),$(this).data("scrollable",el)}),conf.api?el:this)}}(jQuery),function($){function Tabs(root,paneSelector,conf){var current,self=this,trigger=root.add(this),tabs=root.find(conf.tabs),panes=paneSelector.jquery?paneSelector:root.children(paneSelector);tabs.length||(tabs=root.children()),panes.length||(panes=root.parent().find(paneSelector)),panes.length||(panes=$(paneSelector)),$.extend(this,{click:function(i,e){var tab=tabs.eq(i),firstRender=!root.data("tabs");if("string"==typeof i&&i.replace("#","")&&(tab=tabs.filter('[href*="'+i.replace("#","")+'"]'),i=Math.max(tabs.index(tab),0)),conf.rotate){var last=tabs.length-1;if(0>i)return self.click(last,e);if(i>last)return self.click(0,e)}if(!tab.length){if(current>=0)return self;i=conf.initialIndex,tab=tabs.eq(i)}if(i===current)return self;if(e=e||$.Event(),e.type="onBeforeClick",trigger.trigger(e,[i]),!e.isDefaultPrevented()){var effect=firstRender?conf.initialEffect&&conf.effect||"default":conf.effect;return effects[effect].call(self,i,function(){current=i,e.type="onClick",trigger.trigger(e,[i])}),tabs.removeClass(conf.current),tab.addClass(conf.current),self}},getConf:function(){return conf},getTabs:function(){return tabs},getPanes:function(){return panes},getCurrentPane:function(){return panes.eq(current)},getCurrentTab:function(){return tabs.eq(current)},getIndex:function(){return current},next:function(){return self.click(current+1)},prev:function(){return self.click(current-1)},destroy:function(){return tabs.off(conf.event).removeClass(conf.current),panes.find('a[href^="#"]').off("click.T"),self}}),$.each("onBeforeClick,onClick".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.history&&$.fn.history&&($.tools.history.init(tabs),conf.event="history"),tabs.each(function(i){$(this).on(conf.event,function(e){return self.click(i,e),e.preventDefault()})}),panes.find('a[href^="#"]').on("click.T",function(e){self.click($(this).attr("href"),e)}),location.hash&&"a"==conf.tabs&&root.find('[href="'+location.hash+'"]').length?self.click(location.hash):(0===conf.initialIndex||conf.initialIndex>0)&&self.click(conf.initialIndex)}$.tools=$.tools||{version:"@VERSION"},$.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(name,fn){effects[name]=fn}};var animating,w,effects={"default":function(i,done){this.getPanes().hide().eq(i).show(),done.call()},fade:function(i,done){var conf=this.getConf(),speed=conf.fadeOutSpeed,panes=this.getPanes();speed?panes.fadeOut(speed):panes.hide(),panes.eq(i).fadeIn(conf.fadeInSpeed,done)},slide:function(i,done){var conf=this.getConf();this.getPanes().slideUp(conf.slideUpSpeed),this.getPanes().eq(i).slideDown(conf.slideDownSpeed,done)},ajax:function(i,done){this.getPanes().eq(0).load(this.getTabs().eq(i).attr("href"),done)}};$.tools.tabs.addEffect("horizontal",function(i,done){if(!animating){var nextPane=this.getPanes().eq(i),currentPane=this.getCurrentPane();w||(w=this.getPanes().eq(0).width()),animating=!0,nextPane.show(),currentPane.animate({width:0},{step:function(now){nextPane.css("width",w-now)},complete:function(){$(this).hide(),done.call(),animating=!1}}),currentPane.length||(done.call(),animating=!1)}}),$.fn.tabs=function(paneSelector,conf){var el=this.data("tabs");return el&&(el.destroy(),this.removeData("tabs")),$.isFunction(conf)&&(conf={onBeforeClick:conf}),conf=$.extend({},$.tools.tabs.conf,conf),this.each(function(){el=new Tabs($(this),paneSelector,conf),$(this).data("tabs",el)}),conf.api?el:this}}(jQuery),function($){function setIframeLocation(h){if(h){var doc=iframe.contentWindow.document;doc.open().close(),doc.location.hash=h}}var hash,iframe,links,inited;$.tools=$.tools||{version:"@VERSION"},$.tools.history={init:function(els){inited||($.browser.msie&&$.browser.version<"8"?iframe||(iframe=$("<iframe/>").attr("src","javascript:false;").hide().get(0),$("body").append(iframe),setInterval(function(){var idoc=iframe.contentWindow.document,h=idoc.location.hash;hash!==h&&$(window).trigger("hash",h)},100),setIframeLocation(location.hash||"#")):setInterval(function(){var h=location.hash;h!==hash&&$(window).trigger("hash",h)},100),links=links?links.add(els):els,els.click(function(e){var href=$(this).attr("href");return iframe&&setIframeLocation(href),"#"!=href.slice(0,1)?(location.href="#"+href,e.preventDefault()):void 0}),inited=!0)}},$(window).on("hash",function(e,h){h?links.filter(function(){var href=$(this).attr("href");return href==h||href==h.replace("#","")}).trigger("history",[h]):links.eq(0).trigger("history",[h]),hash=h}),$.fn.history=function(fn){return $.tools.history.init(this),this.on("history",fn)}}(jQuery),function($){function viewport(){if(/msie/.test(navigator.userAgent.toLowerCase())){var d=$(document).height(),w=$(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,20>d-w?w:d]}return[$(document).width(),$(document).height()]}function call(fn){return fn?fn.call($.mask):void 0}$.tools=$.tools||{version:"@VERSION"};var tool;tool=$.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};var mask,exposed,loaded,config,overlayIndex;$.mask={load:function(conf,els){if(loaded)return this;"string"==typeof conf&&(conf={color:conf}),conf=conf||config,config=conf=$.extend($.extend({},tool.conf),conf),mask=$("#"+conf.maskId),mask.length||(mask=$("<div/>").attr("id",conf.maskId),$("body").append(mask));var size=viewport();return mask.css({position:"absolute",top:0,left:0,width:size[0],height:size[1],display:"none",opacity:conf.startOpacity,zIndex:conf.zIndex}),conf.color&&mask.css("backgroundColor",conf.color),call(conf.onBeforeLoad)===!1?this:(conf.closeOnEsc&&$(document).on("keydown.mask",function(e){27==e.keyCode&&$.mask.close(e)}),conf.closeOnClick&&mask.on("click.mask",function(e){$.mask.close(e)}),$(window).on("resize.mask",function(){$.mask.fit()}),els&&els.length&&(overlayIndex=els.eq(0).css("zIndex"),$.each(els,function(){var el=$(this);/relative|absolute|fixed/i.test(el.css("position"))||el.css("position","relative")}),exposed=els.css({zIndex:Math.max(conf.zIndex+1,"auto"==overlayIndex?0:overlayIndex)})),mask.css({display:"block"}).fadeTo(conf.loadSpeed,conf.opacity,function(){$.mask.fit(),call(conf.onLoad),loaded="full"}),loaded=!0,this)},close:function(){if(loaded){if(call(config.onBeforeClose)===!1)return this;mask.fadeOut(config.closeSpeed,function(){exposed&&exposed.css({zIndex:overlayIndex}),loaded=!1,call(config.onClose)}),$(document).off("keydown.mask"),mask.off("click.mask"),$(window).off("resize.mask")}return this},fit:function(){if(loaded){var size=viewport();mask.css({width:size[0],height:size[1]})}},getMask:function(){return mask},isLoaded:function(fully){return fully?"full"==loaded:loaded},getConf:function(){return config},getExposed:function(){return exposed}},$.fn.mask=function(conf){return $.mask.load(conf),this},$.fn.expose=function(conf){return $.mask.load(conf,this),this}}(jQuery);

/* - ++resource++plone.app.jquerytools.form.js - */
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}


/* - ++resource++plone.app.jquerytools.overlayhelpers.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++plone.app.jquerytools.overlayhelpers.js?original=1
var pb={spinner:{},overlay_counter:1};jQuery.tools.overlay.conf.oneInstance=false;(function($){jQuery.tools.overlay.addEffect('default',
function(pos,onLoad){var conf=this.getConf(),w=$(window),ovl=this.getOverlay(),op=ovl.parent().offsetParent().offset();if(!conf.fixed){pos.top+=w.scrollTop()-op.top;pos.left+=w.scrollLeft()-op.left}
pos.position=conf.fixed?'fixed':'absolute';ovl.css(pos).fadeIn(conf.speed,onLoad)}, function(onClose){this.getOverlay().fadeOut(this.getConf().closeSpeed,onClose)});pb.spinner.show=function(){$('body').css('cursor','wait')};pb.spinner.hide=function(){$('body').css('cursor','')}}(jQuery));jQuery(function($){$.fn.prepOverlay=function(pba){return this.each(function(){var o,pbo,config,onBeforeLoad,onLoad,src,parts;o=$(this);pbo=$.extend(true,{'width':'60%'},pba);config=pbo.config||{};onBeforeLoad=pb[pbo.subtype];if(onBeforeLoad){config.onBeforeLoad=onBeforeLoad}
onLoad=config.onLoad;config.onLoad=function(){if(onLoad){onLoad.apply(this,arguments)}
pb.fi_focus(this.getOverlay())};src=o.attr('href')||o.attr('src')||o.attr('action');if(pbo.urlmatch){src=src.replace(new RegExp(pbo.urlmatch),pbo.urlreplace)}
if(pbo.subtype==='inline'){src=src.replace(/^.+#/,'#');$("[id='"+src.replace('#','')+"']").addClass('overlay');o.removeAttr('href').attr('rel',src);o.overlay()} else{pbo.nt='pb_'+pb.overlay_counter;pb.overlay_counter+=1;pbo.selector=pbo.filter||pbo.selector;if(!pbo.selector){parts=src.split(' ');src=parts.shift();pbo.selector=parts.join(' ')}
pbo.src=src;pbo.config=config;pbo.source=o;pb.remove_overlay(o);o.data('pbo',pbo);o.attr('rel','#'+pbo.nt);o.addClass('link-overlay');switch(pbo.subtype){case 'image':o.click(pb.image_click);break;case 'ajax':o.click(pb.ajax_click);break;case 'iframe':pb.create_content_div(pbo);o.overlay(config);break;default:throw "Unsupported overlay type"}
o.css('cursor','pointer')}})};pb.remove_overlay=function(o){var old_data=o.data('pbo');if(old_data){switch(old_data.subtype){case 'image':o.unbind('click',pb.image_click);break;case 'ajax':o.unbind('click',pb.ajax_click);break;default:o.unbind('click');break}
if(old_data.nt){$('#'+old_data.nt).remove()}}};pb.create_content_div=function(pbo,trigger){var content,close_message,pbw=pbo.width;if(typeof close_box_message==='undefined'){close_message='Close this box.'} else{close_message=close_box_message}
content=$('<div id="'+pbo.nt+'" class="overlay overlay-'+pbo.subtype+' '+(pbo.cssclass||'')+'"><div class="close"><a href="#" class="hiddenStructure" title="Close this box">'+close_message+'</a></div></div>');content.data('pbo',pbo);if(pbw){if(pbw.indexOf('%')>0){content.width(parseInt(pbw,10)/100 * $(window).width())} else{content.width(pbw)}}
content.appendTo($("body"));return content};pb.image_click=function(event){var ethis,content,api,img,el,pbo;ethis=$(this);pbo=ethis.data('pbo');content=$(ethis.attr('rel'));if(!content.length){content=pb.create_content_div(pbo);content.overlay(pbo.config)}
api=content.overlay();if(content.find('img').length===0){if(pbo.src){pb.spinner.show();img=new Image();img.src=pbo.src;el=$(img);content.append(el.addClass('pb-image'));el.load(function(){pb.spinner.hide();api.load()})}} else{api.load()}
return false};pb.fi_focus=function(jqo){if(!jqo.find("form div.error :input:first").focus().length){jqo.find("form :input:visible:first").focus()}};pb.ajax_error_recover=function(responseText,selector){var tcontent=$('<div/>').append(responseText.replace(/<script(.|\s)*?\/script>/gi,""));return selector?tcontent.find(selector):tcontent};pb.add_ajax_load=function(form){if(form.find('input[name=ajax_load]').length===0){form.prepend($('<input type="hidden" name="ajax_load" value="'+(new Date().getTime())+'" />'))}};pb.prep_ajax_form=function(form){var ajax_parent=form.closest('.pb-ajax'),data_parent=ajax_parent.closest('.overlay-ajax'),pbo=data_parent.data('pbo'),formtarget=pbo.formselector,closeselector=pbo.closeselector,beforepost=pbo.beforepost,afterpost=pbo.afterpost,noform=pbo.noform,api=data_parent.overlay(),selector=pbo.selector,options={};options.beforeSerialize=function(){pb.spinner.show()};if(beforepost){options.beforeSubmit=function(arr,form,options){return beforepost(form,arr,options)}}
options.success=function(responseText,statusText,xhr,form){$(document).trigger('formOverlayStart',[this,responseText,statusText,xhr,form]);var el,myform,success,target,scripts=[],filteredResponseText;success=statusText==="success"||statusText==="notmodified";if(!success){responseText=responseText.responseText}
filteredResponseText=responseText.replace(/<script(.|\s)*?\/script>/gi,"");el=$('<div />').append(selector?$('<div />').append(filteredResponseText).find(selector):filteredResponseText);if(success&&afterpost){afterpost(el,data_parent)}
myform=el.find(formtarget);if(success&&myform.length){ajax_parent.empty().append(el);try{$.buildFragment([responseText],[document],scripts)} catch(e){$.buildFragment([responseText],document,scripts)}
if(scripts.length){$.each(scripts, function(){$.globalEval(this.text||this.textContent||this.innerHTML||"")})}
if($.fn.ploneTabInit){el.ploneTabInit()}
pb.fi_focus(ajax_parent);pb.add_ajax_load(myform);myform.ajaxForm(options);if(closeselector){el.find(closeselector).click(function(event){api.close();return false})}
$(document).trigger('formOverlayLoadSuccess',[this,myform,api,pb,ajax_parent])} else{if(success){if(typeof noform==="function"){noform=noform(el,pbo)}} else{noform=statusText}
switch(noform){case 'close':api.close();break;case 'reload':api.close();pb.spinner.show();location.replace(location.href);break;case 'redirect':api.close();pb.spinner.show();target=pbo.redirect;if(typeof target==="function"){target=target(el,responseText,pbo)}
location.replace(target);break;default:if(el.children()){ajax_parent.empty().append(el)} else{api.close()}
break}
$(document).trigger('formOverlayLoadFailure',[this,myform,api,pb,ajax_parent,noform])}
pb.spinner.hide()};options.error=options.success;pb.add_ajax_load(form);form.ajaxForm(options)};pb.ajax_click=function(event){var ethis=$(this),pbo,content,api,src,el,selector,formtarget,closeselector,sep,scripts=[],e;e=$.Event();e.type="beforeAjaxClickHandled";$(document).trigger(e,[this,event]);if(e.isDefaultPrevented()){return false}
pbo=ethis.data('pbo');content=pb.create_content_div(pbo,ethis);content.overlay(pbo.config,ethis);api=content.overlay();src=pbo.src;selector=pbo.selector;formtarget=pbo.formselector;closeselector=pbo.closeselector;pb.spinner.show();$(this).find("input.submitting").removeClass('submitting');el=$('div.pb-ajax',content);if(el.length===0){el=$('<div class="pb-ajax" />');content.append(el)}
if(api.getConf().fixed){el.css('max-height',Math.floor($(window).height() * 0.75))}
sep=(src.indexOf('?')>=0)?'&':'?';src+=sep+"ajax_load="+(new Date().getTime());if(selector){src+=' '+selector}
el[0].handle_load_inside_overlay=function(responseText,errorText){var ele,target;ele=$(this);if(errorText==='error'){ele.append(pb.ajax_error_recover(responseText,selector))} else if(!responseText.length){ele.append(ajax_noresponse_message||'No response from server.')}
ele.wrapInner('<div />');if(formtarget){target=ele.find(formtarget);if(target.length>0){pb.prep_ajax_form(target)}}
if(closeselector){ele.find(closeselector).click(function(event){api.close();return false})}
try{$.buildFragment([responseText],[document],scripts)} catch(e){$.buildFragment([responseText],document,scripts)}
if(scripts.length){$.each(scripts, function(){$.globalEval(this.text||this.textContent||this.innerHTML||"")})}
if($.fn.ploneTabInit){ele.ploneTabInit()}
api.onClose=function(){content.remove()};$(document).trigger('loadInsideOverlay',[this,responseText,errorText,api])};el.load(src,null, function(responseText,errorText){el[0].handle_load_inside_overlay.apply(this,[responseText,errorText]);pb.spinner.hide();api.load();return true});return false};pb.iframe=function(){var content,pbo;pb.spinner.show();content=this.getOverlay();pbo=this.getTrigger().data('pbo');if(content.find('iframe').length===0&&pbo.src){content.append('<iframe src="'+pbo.src+'" width="'+content.width()+'" height="'+content.height()+'" onload="pb.spinner.hide()"/>')} else{pb.spinner.hide()}
return true}});

/* - ++resource++plone.app.jquerytools.tooltip.js - */
!function($){function getPosition(trigger,tip,conf){var top=conf.relative?trigger.position().top:trigger.offset().top,left=conf.relative?trigger.position().left:trigger.offset().left,pos=conf.position[0];top-=tip.outerHeight()-conf.offset[0],left+=trigger.outerWidth()+conf.offset[1],/iPad/i.test(navigator.userAgent)&&(top-=$(window).scrollTop());var height=tip.outerHeight()+trigger.outerHeight();"center"==pos&&(top+=height/2),"bottom"==pos&&(top+=height),pos=conf.position[1];var width=tip.outerWidth()+trigger.outerWidth();return"center"==pos&&(left-=width/2),"left"==pos&&(left-=width),{top:top,left:left}}function Tooltip(trigger,conf){var tip,shown,self=this,fire=trigger.add(self),timer=0,pretimer=0,title=trigger.attr("title"),tipAttr=trigger.attr("data-tooltip"),effect=effects[conf.effect],isInput=trigger.is(":input"),isWidget=isInput&&trigger.is(":checkbox, :radio, select, :button, :submit"),type=trigger.attr("type"),evt=conf.events[type]||conf.events[isInput?isWidget?"widget":"input":"def"];if(!effect)throw'Nonexistent effect "'+conf.effect+'"';if(evt=evt.split(/,\s*/),2!=evt.length)throw"Tooltip: bad events configuration for "+type;trigger.on(evt[0],function(e){clearTimeout(timer),conf.predelay?pretimer=setTimeout(function(){self.show(e)},conf.predelay):self.show(e)}).on(evt[1],function(e){clearTimeout(pretimer),conf.delay?timer=setTimeout(function(){self.hide(e)},conf.delay):self.hide(e)}),title&&conf.cancelDefault&&(trigger.removeAttr("title"),trigger.data("title",title)),$.extend(self,{show:function(e){if(!tip&&(tipAttr?tip=$(tipAttr):conf.tip?tip=$(conf.tip).eq(0):title?tip=$(conf.layout).addClass(conf.tipClass).appendTo(document.body).hide().append(title):(tip=trigger.find("."+conf.tipClass),tip.length||(tip=trigger.next()),tip.length||(tip=trigger.parent().next())),!tip.length))throw"Cannot find tooltip for "+trigger;if(self.isShown())return self;tip.stop(!0,!0);var pos=getPosition(trigger,tip,conf);if(conf.tip&&tip.html(trigger.data("title")),e=$.Event(),e.type="onBeforeShow",fire.trigger(e,[pos]),e.isDefaultPrevented())return self;pos=getPosition(trigger,tip,conf),tip.css({position:"absolute",top:pos.top,left:pos.left}),shown=!0,effect[0].call(self,function(){e.type="onShow",shown="full",fire.trigger(e)});var event=conf.events.tooltip.split(/,\s*/);return tip.data("__set")||(tip.off(event[0]).on(event[0],function(){clearTimeout(timer),clearTimeout(pretimer)}),event[1]&&!trigger.is("input:not(:checkbox, :radio), textarea")&&tip.off(event[1]).on(event[1],function(e){e.relatedTarget!=trigger[0]&&trigger.trigger(evt[1].split(" ")[0])}),conf.tip||tip.data("__set",!0)),self},hide:function(e){return tip&&self.isShown()?(e=$.Event(),e.type="onBeforeHide",fire.trigger(e),e.isDefaultPrevented()?void 0:(shown=!1,effects[conf.effect][1].call(self,function(){e.type="onHide",fire.trigger(e)}),self)):self},isShown:function(fully){return fully?"full"==shown:shown},getConf:function(){return conf},getTip:function(){return tip},getTrigger:function(){return trigger}}),$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}})}$.tools=$.tools||{version:"@VERSION"},$.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(name,loadFn,hideFn){effects[name]=[loadFn,hideFn]}};var effects={toggle:[function(done){var conf=this.getConf(),tip=this.getTip(),o=conf.opacity;1>o&&tip.css({opacity:o}),tip.show(),done.call()},function(done){this.getTip().hide(),done.call()}],fade:[function(done){var conf=this.getConf();!/msie/.test(navigator.userAgent.toLowerCase())||conf.fadeIE?this.getTip().fadeTo(conf.fadeInSpeed,conf.opacity,done):(this.getTip().show(),done())},function(done){var conf=this.getConf();!/msie/.test(navigator.userAgent.toLowerCase())||conf.fadeIE?this.getTip().fadeOut(conf.fadeOutSpeed,done):(this.getTip().hide(),done())}]};$.fn.tooltip=function(conf){var api=this.data("tooltip");return api?api:(conf=$.extend(!0,{},$.tools.tooltip.conf,conf),"string"==typeof conf.position&&(conf.position=conf.position.split(/,?\s/)),this.each(function(){api=new Tooltip($(this),conf),$(this).data("tooltip",api)}),conf.api?api:this)}}(jQuery);

/* - modernizr.js - */
// http://www.eea.europa.eu/portal_javascripts/modernizr.js?original=1
;window.Modernizr=function(a,b,c){function H(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b){return!!~(""+a).indexOf(b)}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="2.0.4",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x,y={}.hasOwnProperty,z;!C(y,c)&&!C(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)};var G=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'"}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return w("dragstart")&&w("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius")},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var I in r)z(r,I)&&(x=I.toLowerCase(),e[x]=r[I](),u.push((e[x]?"":"no-")+x));e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},A(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.hasEvent=w,e.testProp=function(a){return E([a])},e.testAllProps=F,e.testStyles=v,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css",!a.e&&(w||r)?function a(b){m(function(){if(!d)try{b.sheet.cssRules.length?(d=1,j()):a(b)}catch(c){c.code==1e3||c.message=="security"||c.message=="denied"?(d=1,m(function(){j()},0)):a(b)}},0)}(c):(c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload()),m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return typeof a=="object"},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* - nodeutilities.js - */
// http://www.eea.europa.eu/portal_javascripts/nodeutilities.js?original=1
function wrapNode(node,wrappertype,wrapperclass){jQuery(node).wrap('<'+wrappertype+'>').parent().addClass(wrapperclass)}
function nodeContained(innernode,outernode){return jQuery(innernode).parents().filter(function(){return this===outernode}).length>0}
function findContainer(node,func){var p=jQuery(node).parents().filter(func);return p.length?p.get(0):false}
function hasClassName(node,class_name){return jQuery(node).hasClass(class_name)}
function addClassName(node,class_name){jQuery(node).addClass(class_name)}
function removeClassName(node,class_name){jQuery(node).removeClass(class_name)}
function replaceClassName(node,old_class,new_class,ignore_missing){if(ignore_missing||jQuery(node).hasClass(old_class)){jQuery(node).removeClass(old_class).addClass(new_class)}}
function walkTextNodes(node,func,data){jQuery(node).find('*').andSelf().contents().each(function(){if(this.nodeType===3){func(this,data)}})}
function getInnerTextCompatible(node){return jQuery(node).text()}
function getInnerTextFast(node){return jQuery(node).text()}
function sortNodes(nodes,fetch_func,cmp_func){var SortNodeWrapper,items;SortNodeWrapper=function(node){this.value=fetch_func(node);this.cloned_node=node.cloneNode(true)};SortNodeWrapper.prototype.toString=function(){return this.value.toString?this.value.toString():this.value};items=jQuery(nodes).map(function(){return new SortNodeWrapper(this)});if(cmp_func){items.sort(cmp_func)} else{items.sort()}
jQuery.each(items, function(i){jQuery(nodes[i]).replace(this.cloned_node)})}
function copyChildNodes(srcNode,dstNode){jQuery(srcNode).children().clone().appendTo(jQuery(dstNode))}


/* - cookie_functions.js - */
// http://www.eea.europa.eu/portal_javascripts/cookie_functions.js?original=1
function createCookie(name,value,days){var date,expires;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString()} else{expires=""}
document.cookie=name+"="+escape(value)+expires+"; path=/;"}
function readCookie(name){var nameEQ=name+"=",ca=document.cookie.split(';'),i,c;for(i=0;i<ca.length;i=i+1){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)===0){return unescape(c.substring(nameEQ.length,c.length))}}
return null}


/* - select_all.js - */
// http://www.eea.europa.eu/portal_javascripts/select_all.js?original=1
function toggleSelect(selectbutton,id,initialState,formName){if (/MSIE [5-8]\./.test(navigator.userAgent)&&event.type==="change"&&/toggleSelect\(/.test(selectbutton.onchange.toString())){return}
var fid,state,base;fid=id||'ids:list';state=selectbutton.isSelected;if(state===undefined){state=Boolean(initialState)}
selectbutton.isSelected=!state;jQuery(selectbutton).attr('src',portal_url+'/select_'+(state?'all':'none')+'_icon.png');base=formName?jQuery(document.forms[formName]):jQuery(document);base.find('input[name="'+fid+'"]:checkbox').attr('checked',!state)}


/* - attachevent.js - */
// http://www.eea.europa.eu/portal_javascripts/attachevent.js?original=1
function MyAttachEvent(obj,evt,fnc){if(!obj.myEvents){obj.myEvents={}}
if(!obj.myEvents[evt]){obj.myEvents[evt]=[]}
var evts=obj.myEvents[evt];evts[evts.length]=fnc}
function MyFireEvent(obj,evt){var i=0;if(!obj||!obj.myEvents||!obj.myEvents[evt]){return}
var evts=obj.myEvents[evt];for(len=evts.length;i<len;i++){evts[i]()}}
function AttachEvent(obj,evt,fnc,useCapture){if(!useCapture){useCapture=false}
if(obj.addEventListener){obj.addEventListener(evt,fnc,useCapture);return true} else if(obj.attachEvent){return obj.attachEvent("on"+evt,fnc)}
else{MyAttachEvent(obj,evt,fnc);obj['on'+evt]=function(){MyFireEvent(obj,evt)}}}


/* - drop.js - */
// http://www.eea.europa.eu/portal_javascripts/drop.js?original=1
var oDiv=null;var timer=null;var delayTime=500;
function objRef(mitid){if(document.getElementById){return document.getElementById(mitid)}
else if(document.all){return document.all[mitid]}}
function showMenu(menuDiv){objRef(menuDiv).style.display="block";if(timer){clearTimeout(timer)}
if(menuDiv!==oDiv){if(oDiv){objRef(oDiv).style.display="none"}
oDiv=menuDiv}}
function hideMenu(navn){n_navn=navn;timer=setTimeout(objRef(n_navn).style.display="none",delayTime)}


/* - hideemail.js - */
// http://www.eea.europa.eu/portal_javascripts/hideemail.js?original=1
function create_contact_info_local(theuser,thedomain,linktext){var thecontact=(theuser+'@'+thedomain);thecontact='<A href="mailto:'+thecontact+'">'+linktext+'</a>';return thecontact}
jQuery(function($){$(".protectEmail").each(function(){var text=this.innerHTML.split(',');this.href='mailto:'+text[0]+'@'+text[1];this.innerHTML=text[2];this.className=this.className.replace("hiddenStructure",'')})});

/* - resize.js - */
// http://www.eea.europa.eu/portal_javascripts/resize.js?original=1
function resizeDiv(){var myWidth=0,myHeight=0;if(typeof(window.innerWidth)=='number'){myWidth=window.innerWidth;myHeight=window.innerHeight} else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight} else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight}
var newHeight=myHeight * 0.8;ct=document.getElementById("region-content");if(ct!==null){ct.style.height='100%'}
ct=document.getElementById("content");if(ct!==null){ct.style.height='100%'}
return newHeight}
window.onresize=resizeDiv;AttachEvent(window,'load',resizeDiv,false);

/* - sub_cookies.js - */
// http://www.eea.europa.eu/portal_javascripts/sub_cookies.js?original=1
var SubCookieUtil={get: function(name,subName){var subCookies=this.getAll(name);if(subCookies){return subCookies[subName]} else{return null}},getAll: function(name){var cookieName=encodeURIComponent(name)+"=",cookieStart=document.cookie.indexOf(cookieName),cookieValue=null,result={};if(cookieStart>-1){var cookieEnd=document.cookie.indexOf(";",cookieStart);if(cookieEnd===-1){cookieEnd=document.cookie.length}
cookieValue=document.cookie.substring(cookieStart+cookieName.length,cookieEnd);if(cookieValue.length>0){var subCookies=cookieValue.split("&");for(var i=0,len=subCookies.length;i<len;i++){var parts=subCookies[i].split("=");result[decodeURIComponent(parts[0])]=decodeURIComponent(parts[1])}
return result}}
return null},set: function(name,subName,value,expires,path,domain,secure){var subcookies=this.getAll(name)||{};subcookies[subName]=value;this.setAll(name,subcookies,expires,path,domain,secure)},setAll: function(name,subcookies,expires,path,domain,secure){var cookieText=encodeURIComponent(name)+"=";var subcookieParts=[];for(var subName in subcookies){if(subName.length>0&&subcookies.hasOwnProperty(subName)){subcookieParts.push(encodeURIComponent(subName)+"="+encodeURIComponent(subcookies[subName]))}}
if(subcookieParts.length>0){cookieText+=subcookieParts.join("&");if(expires instanceof Date){cookieText+="; expires="+expires.toGMTString()}
if(path){cookieText+="; path="+path}
if(domain){cookieText+="; domain="+domain}
if(secure){cookieText+="; secure"}} else{cookieText+="; expires="+(new Date(0)).toGMTString()}
document.cookie=cookieText},unset: function(name,subName,path,domain,secure){var subcookies=this.getAll(name);if(subcookies){delete subcookies[subName];this.setAll(name,subcookies,null,path,domain,secure)}},unsetAll: function(name,path,domain,secure){this.setAll(name,null,new Date(0),path,domain,secure)}};

/* - swfobject.js - */
// http://www.eea.europa.eu/portal_javascripts/swfobject.js?original=1
if(typeof deconcept=="undefined"){var deconcept={}}
if(typeof deconcept.util=="undefined"){deconcept.util={}}
if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil={}}
deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a,_b){if(!document.getElementById){return}
this.DETECT_KEY=_b?_b:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];if(_1){this.setAttribute("swf",_1)}
if(id){this.setAttribute("id",id)}
if(w){this.setAttribute("width",w)}
if(h){this.setAttribute("height",h)}
if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")))}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(c){this.addParam("bgcolor",c)}
var q=_8?_8:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",_7);this.setAttribute("doExpressInstall",false);var _d=(_9)?_9:window.location;this.setAttribute("xiRedirectUrl",_d);this.setAttribute("redirectUrl","");if(_a){this.setAttribute("redirectUrl",_a)}};deconcept.SWFObject.prototype={setAttribute:function(_e,_f){this.attributes[_e]=_f},getAttribute:function(_10){return this.attributes[_10]},addParam:function(_11,_12){this.params[_11]=_12},getParams:function(){return this.params},addVariable:function(_13,_14){this.variables[_13]=_14},getVariable:function(_15){return this.variables[_15]},getVariables:function(){return this.variables},getVariablePairs:function(){var _16=[];var key;var _18=this.getVariables();for(key in _18){_16.push(key+"="+_18[key])}
return _16},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn")}
_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+window.location.search+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=key+"=\""+_1a[key]+"\" "}
var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\""}
_19+="/>"}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX")}
_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+window.location.search+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />"}
var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />"}
_19+="</object>"}
return _19},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title)}}
if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true}else{if(this.getAttribute("redirectUrl")!==""){document.location.replace(this.getAttribute("redirectUrl"))}}
return false}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."))}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}
catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always"}
catch(e){if(_23.major==6){return _23}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}
catch(e){}}
if(axo!==null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","))}}
return _23};deconcept.PlayerVersion=function(_27){this.major=_27[0]!==null?parseInt(_27[0],10):0;this.minor=_27[1]!==null?parseInt(_27[1],10):0;this.rev=_27[2]!==null?parseInt(_27[2],10):0};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false}
if(this.major>fv.major){return true}
if(this.minor<fv.minor){return false}
if(this.minor>fv.minor){return true}
if(this.rev<fv.rev){return false}
return true};deconcept.util={getRequestParameter:function(_29){var q=document.location.search||document.location.hash;if(q){var _2b=q.substring(1).split("&");for(var i=0;i<_2b.length;i++){if(_2b[i].substring(0,_2b[i].indexOf("="))==_29){return _2b[i].substring((_2b[i].indexOf("=")+1))}}}
return ""}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2d=document.getElementsByTagName("OBJECT");for(var i=0;i<_2d.length;i++){_2d[i].style.display="none";for(var x in _2d[i]){if(typeof _2d[i][x]=="function"){_2d[i][x]=null}}}};if(typeof window.onunload=="function"){var oldunload=window.onunload;window.onunload=function(){deconcept.SWFObjectUtil.cleanupSWFs();oldunload()}}else{window.onunload=deconcept.SWFObjectUtil.cleanupSWFs}
if(Array.prototype.push==null){Array.prototype.push=function(_30){this[this.length]=_30;return this.length}}
var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;

/* - ++resource++jquery.tagcloud.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.tagcloud.js?original=1
;(function($){var oSettings;var oUlCss={};var oLiCss={};var fGAng=2.399963;$.tagcloud={id:"TagCloud",version:"0.5.0",defaults:{height:null,type:"cloud",sizemax:20,sizemin:10,colormax:"00F",colormin:"B4D2FF",seed:null,power:.5}};$.fn.extend({tagcloud: function(_settings){oSettings=$.extend({},$.tagcloud.defaults,_settings);if(oSettings.seed===null) oSettings.seed=Math.ceil(Math.random()*45309714203);switch(oSettings.type){case "sphere":case "cloud":oUlCss={position:"relative"};oLiCss={position:"absolute",display:"block"};break;case "list":oUlCss={height:"auto"};oLiCss={position:"static",display:"inline"};break}
Rng.setSeed(oSettings.seed+123456);return this.each(function(i,o){var mUl=$(o);var aLi=mUl.find(">li");var iNumLi=aLi.length;var iUlW=mUl.width();var iUlH=oSettings.height===null?(.004*iUlW*iNumLi):oSettings.height;mUl.css({width:iUlW,height:iUlH,listStyle:"none",margin:0,padding:0});mUl.css(oUlCss);var iValMx=-2147483647;var iValMn=2147483648;var iLastVal=-1;for(var j=0;j<iNumLi;j++){var mLi=$(aLi[j]);var iVal=mLi.attr("value")==-1?iLastVal++:mLi.attr("value");if(iVal>iValMx) iValMx=iVal;if(iVal<iValMn) iValMn=iVal;iLastVal=iVal}
var iValRn=iValMx-iValMn;var aLine=new Array();for(var j=0;j<iNumLi;j++) aLine[j]=j;for(var j,x,k=aLine.length;k;j=parseInt(Rng.rand(0,1000)/1000 * k),x=aLine[--k],aLine[k]=aLine[j],aLine[j]=x);iLastVal=-1;for(var j=0;j<iNumLi;j++){var mLi=$(aLi[j]);var iVal=mLi.attr("value")==-1?iLastVal++:mLi.attr("value");iLastVal=iVal;var fPrt=((iNumLi-j-1)/(iNumLi-1));var fPrt=(iVal-iValMn)/iValRn;var iSzFnt=oSettings.sizemin+fPrt*(oSettings.sizemax-oSettings.sizemin);var sColor=colorRng(oSettings.colormin,oSettings.colormax,fPrt);mLi.css({"fontSize":iSzFnt,position:"absolute",color:"#"+sColor,margin:0,padding:0}).children().css({color:"#"+sColor});var iLiW=mLi.width();var iLiH=mLi.height()
var oCss={};if(oSettings.type!="list"){if(oSettings.type=="cloud"){var iXps=Rng.rand(0,iUlW-iLiW);var iYps=aLine[j]*(iUlH/iNumLi)-iLiH/2} else{var fRds=Math.pow(j/iNumLi,oSettings.power);var fRad=(j+Math.PI/2)*fGAng;var iXps=iUlW/2-iLiW/2+.5*iUlW*fRds*Math.sin(fRad);var iYps=iUlH/2-iLiH/2+.5*iUlH*fRds*Math.cos(fRad)}
oCss.left=iXps;oCss.top=iYps}
for(var prop in oLiCss) oCss[prop]=oLiCss[prop];mLi.css(oCss)}})}});var Rng=new function(){this.seed=23145678901;this.A=48271;this.M=2147483647;this.Q=this.M/this.A;this.R=this.M%this.A;this.oneOverM=1.0/this.M}
Rng.setSeed=function(seed){this.seed=seed}
Rng.next=function(){var hi=this.seed/this.Q;var lo=this.seed%this.Q;var test=this.A*lo-this.R*hi;this.seed=test+(test>0?0:this.M);return(this.seed*this.oneOverM)}
Rng.rand=function(lrn,urn){return Math.floor((urn-lrn+1) * this.next()+lrn)}
function d2h(d){return d.toString(16)}
function h2d(h){return parseInt(h,16)}
function getRGB(s){var b3=s.length==3;var aClr=[];for(var i=0;i<3;i++){var sClr=s.substring(i*(b3?1:2),(i+1)*(b3?1:2));aClr.push(h2d(b3?sClr+sClr:sClr))}
return aClr}
function getHex(a){var s="";for(var i=0;i<3;i++){var c=d2h(a[i]);if(c.length==1) c="0"+c;s+=c}
return s}
function colorRng(mn,mx,prt){var aMin=getRGB(mn);var aMax=getRGB(mx);var aRtr=[];for(var i=0;i<3;i++) aRtr.push(aMin[i]+Math.floor(prt*(aMax[i]-aMin[i])));return getHex(aRtr)}
function trace(o){if(window.console&&window.console.log){if(typeof(o)=="string") window.console.log(o);else for(var prop in o) window.console.log(prop+": "+o[prop])}};$.fn.TagCloud=$.fn.Tagcloud=$.fn.tagcloud})(jQuery);

/* - ++resource++jquery.select2uislider.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.select2uislider.js?original=1
jQuery.fn.selectToUISlider=function(settings){var selects=jQuery(this);var options=jQuery.extend({labels:3,tooltip:true,tooltipSrc:'text',labelSrc:'value',sliderOptions:null},settings);var handleIds=(function(){var tempArr=[];selects.each(function(){tempArr.push('handle_'+jQuery(this).attr('id'))});return tempArr})();var selectOptions=(function(){var opts=[];selects.eq(0).find('option').each(function(){opts.push({value:jQuery(this).attr('value'),text:jQuery(this).text()})});return opts})();var groups=(function(){if(selects.eq(0).find('optgroup').size()>0){var groupedData=[];selects.eq(0).find('optgroup').each(function(i){groupedData[i]={};groupedData[i].label=jQuery(this).attr('label');groupedData[i].options=[];jQuery(this).find('option').each(function(){groupedData[i].options.push({text:jQuery(this).text(),value:jQuery(this).attr('value')})})});return groupedData}
else{return null}})();
function isArray(obj){return obj.constructor==Array}
function ttText(optIndex){return(options.tooltipSrc=='text')?selectOptions[optIndex].text:selectOptions[optIndex].value}
var sliderOptions={step:1,min:0,orientation:'horizontal',max:selectOptions.length-1,range:selects.length>1,slide: function(e,ui){var thisHandle=jQuery(ui.handle);var textval=ttText(ui.value);thisHandle.attr('aria-valuetext',textval).attr('aria-valuenow',ui.value).find('.ui-slider-tooltip .ttContent').text(textval);var currSelect=jQuery('#'+thisHandle.attr('id').split('handle_')[1]);currSelect.find('option').eq(ui.value).attr('selected','selected')},values:(function(){var values=[];selects.each(function(){values.push(jQuery(this).get(0).selectedIndex)});return values})()};options.sliderOptions=(settings)?jQuery.extend(sliderOptions,settings.sliderOptions):sliderOptions;selects.bind('change keyup click', function(){var thisIndex=jQuery(this).get(0).selectedIndex;var thisHandle=jQuery('#handle_'+jQuery(this).attr('id'));var handleIndex=thisHandle.data('handleNum');thisHandle.parents('.ui-slider:eq(0)').slider("values",handleIndex,thisIndex)});var sliderComponent=jQuery('<div></div>');selects.each(function(i){var hidett='';var thisLabel=jQuery('label[for='+jQuery(this).attr('id')+']');var labelText=(thisLabel.size()>0)?'Slider control for '+thisLabel.text()+'':'';var thisLabelId=thisLabel.attr('id')||thisLabel.attr('id','label_'+handleIds[i]).attr('id');if(options.tooltip===false){hidett=' style="display: none;"'}
jQuery('<a '+'href="#" tabindex="0" '+'id="'+handleIds[i]+'" '+'class="ui-slider-handle" '+'role="slider" '+'aria-labelledby="'+thisLabelId+'" '+'aria-valuemin="'+options.sliderOptions.min+'" '+'aria-valuemax="'+options.sliderOptions.max+'" '+'aria-valuenow="'+options.sliderOptions.values[i]+'" '+'aria-valuetext="'+ttText(options.sliderOptions.values[i])+'" '+'><span class="screenReaderContext">'+labelText+'</span>'+'<span class="ui-slider-tooltip ui-widget-content ui-corner-all"'+hidett+'><span class="ttContent"></span>'+'<span class="ui-tooltip-pointer-down ui-widget-content"><span class="ui-tooltip-pointer-down-inner"></span></span>'+'</span></a>').data('handleNum',i).appendTo(sliderComponent)});if(groups){var inc=0;var scale=sliderComponent.append('<dl class="ui-slider-scale ui-helper-reset" role="presentation"></dl>').find('.ui-slider-scale:eq(0)');jQuery(groups).each(function(h){scale.append('<dt style="width: '+(100/groups.length).toFixed(2)+'%'+'; left:'+(h/(groups.length-1) * 100).toFixed(2)+'%'+'"><span>'+this.label+'</span></dt>');var groupOpts=this.options;jQuery(this.options).each(function(i){var style=(inc==selectOptions.length-1||inc===0)?'style="display: none;"':'' ;var labelText=(options.labelSrc=='text')?groupOpts[i].text:groupOpts[i].value;scale.append('<dd style="left:'+leftVal(inc)+'"><span class="ui-slider-label">'+labelText+'</span><span class="ui-slider-tic ui-widget-content"'+style+'></span></dd>');inc++})})}
else{var scale=sliderComponent.append('<ol class="ui-slider-scale ui-helper-reset" role="presentation"></ol>').find('.ui-slider-scale:eq(0)');jQuery(selectOptions).each(function(i){var style=(i==selectOptions.length-1||i===0)?'style="display: none;"':'' ;var labelText=(options.labelSrc=='text')?this.text:this.value;scale.append('<li style="left:'+leftVal(i)+'"><span class="ui-slider-label">'+labelText+'</span><span class="ui-slider-tic ui-widget-content"'+style+'></span></li>')})}
function leftVal(i){return(i/(selectOptions.length-1) * 100).toFixed(2)+'%'}
if(options.labels>1){sliderComponent.find('.ui-slider-scale li:last span.ui-slider-label, .ui-slider-scale dd:last span.ui-slider-label').addClass('ui-slider-label-show')}
var increm=Math.max(1,Math.round(selectOptions.length/options.labels));for(var j=0;j<selectOptions.length;j+=increm){if((selectOptions.length-j)>increm){sliderComponent.find('.ui-slider-scale li:eq('+j+') span.ui-slider-label, .ui-slider-scale dd:eq('+j+') span.ui-slider-label').addClass('ui-slider-label-show')}}
sliderComponent.find('.ui-slider-scale dt').each(function(i){jQuery(this).css({'left':((100/(groups.length))*i).toFixed(2)+'%'})});sliderComponent.insertAfter(jQuery(this).eq(this.length-1)).slider(options.sliderOptions).attr('role','application').find('.ui-slider-label').each(function(){jQuery(this).css('marginLeft',-jQuery(this).width()/2)});sliderComponent.find('.ui-tooltip-pointer-down-inner').each(function(){var bWidth=jQuery('.ui-tooltip-pointer-down-inner').css('borderTopWidth');var bColor=jQuery(this).parents('.ui-slider-tooltip').css('backgroundColor');jQuery(this).css('border-top',bWidth+' solid '+bColor)});var values=sliderComponent.slider('values');if(isArray(values)){jQuery(values).each(function(i){sliderComponent.find('.ui-slider-tooltip .ttContent').eq(i).text(ttText(this))})}
else{sliderComponent.find('.ui-slider-tooltip .ttContent').eq(0).text(ttText(values))}
return this};

/* - ++resource++jquery.jstree.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.jstree.js?original=1
(function($){$.tree={datastores:{},plugins:{},defaults:{data:{async:false,type:"html",opts:{method:"GET",url:false}},selected:false,opened:[],languages:[],ui:{dots:true,animation:0,scroll_spd:4,theme_path:false,theme_name:"default",selected_parent_close:"select_parent",selected_delete:"select_previous"},types:{"default":{clickable:true,renameable:true,deletable:true,creatable:true,draggable:true,max_children:-1,max_depth:-1,valid_children:"all",icon:{image:false,position:false}}},rules:{multiple:false,multitree:"none",type_attr:"rel",createat:"bottom",drag_copy:"ctrl",drag_button:"left",use_max_children:true,use_max_depth:true,max_children:-1,max_depth:-1,valid_children:"all"},lang:{new_node:"New folder",loading:"Loading ..."},callback:{beforechange: function(NODE,TREE_OBJ){return true},beforeopen: function(NODE,TREE_OBJ){return true},beforeclose: function(NODE,TREE_OBJ){return true},beforemove: function(NODE,REF_NODE,TYPE,TREE_OBJ){return true},beforecreate: function(NODE,REF_NODE,TYPE,TREE_OBJ){return true},beforerename: function(NODE,LANG,TREE_OBJ){return true},beforedelete: function(NODE,TREE_OBJ){return true},beforedata: function(NODE,TREE_OBJ){return{id:$(NODE).attr("id")||0}},ondata: function(DATA,TREE_OBJ){return DATA},onparse: function(STR,TREE_OBJ){return STR},onhover: function(NODE,TREE_OBJ){},onselect: function(NODE,TREE_OBJ){},ondeselect: function(NODE,TREE_OBJ){},onchange: function(NODE,TREE_OBJ){},onrename: function(NODE,TREE_OBJ,RB){},onmove: function(NODE,REF_NODE,TYPE,TREE_OBJ,RB){},oncopy: function(NODE,REF_NODE,TYPE,TREE_OBJ,RB){},oncreate: function(NODE,REF_NODE,TYPE,TREE_OBJ,RB){},ondelete: function(NODE,TREE_OBJ,RB){},onopen: function(NODE,TREE_OBJ){},onopen_all: function(TREE_OBJ){},onclose_all: function(TREE_OBJ){},onclose: function(NODE,TREE_OBJ){},error: function(TEXT,TREE_OBJ){},ondblclk: function(NODE,TREE_OBJ){TREE_OBJ.toggle_branch.call(TREE_OBJ,NODE);TREE_OBJ.select_branch.call(TREE_OBJ,NODE)},onrgtclk: function(NODE,TREE_OBJ,EV){},onload: function(TREE_OBJ){},oninit: function(TREE_OBJ){},onfocus: function(TREE_OBJ){},ondestroy: function(TREE_OBJ){},onsearch: function(NODES,TREE_OBJ){NODES.addClass("search")},ondrop: function(NODE,REF_NODE,TYPE,TREE_OBJ){},check: function(RULE,NODE,VALUE,TREE_OBJ){return VALUE},check_move: function(NODE,REF_NODE,TYPE,TREE_OBJ){return true}},plugins:{}},create: function(){return new tree_component()},focused: function(){return tree_component.inst[tree_component.focused]},reference: function(obj){var o=$(obj);if(!o.size()) o=$("#"+obj);if(!o.size()) return null;o=(o.is(".tree"))?o.attr("id"):o.parents(".tree:eq(0)").attr("id");return tree_component.inst[o]||null},rollback: function(data){for(var i in data){if(!data.hasOwnProperty(i)) continue;var tmp=tree_component.inst[i];var lock=!tmp.locked;if(lock) tmp.lock(true);tmp.inp=false;tmp.container.html(data[i].html).find(".dragged").removeClass("dragged").end().find(".hover").removeClass("hover");if(data[i].selected){tmp.selected=$("#"+data[i].selected);tmp.selected_arr=[];tmp.container.find("a.clicked").each( function(){tmp.selected_arr.push(tmp.get_node(this))})}
if(lock) tmp.lock(false);delete lock;delete tmp}},drop_mode: function(opts){opts=$.extend(opts,{show:false,type:"default",str:"Foreign node"});tree_component.drag_drop.foreign=true;tree_component.drag_drop.isdown=true;tree_component.drag_drop.moving=true;tree_component.drag_drop.appended=false;tree_component.drag_drop.f_type=opts.type;tree_component.drag_drop.f_data=opts;if(!opts.show){tree_component.drag_drop.drag_help=false;tree_component.drag_drop.drag_node=false}
else{tree_component.drag_drop.drag_help=$("<div id='jstree-dragged' class='tree tree-default'><ul><li class='last dragged foreign'><a href='#'><ins>&nbsp;</ins>"+opts.str+"</a></li></ul></div>");tree_component.drag_drop.drag_node=tree_component.drag_drop.drag_help.find("li:eq(0)")}
if($.tree.drag_start!==false) $.tree.drag_start.call(null,false)},drag_start:false,drag:false,drag_end:false};$.fn.tree=function(opts){return this.each(function(){var conf=$.extend({},opts);if(tree_component.inst&&tree_component.inst[$(this).attr('id')]) tree_component.inst[$(this).attr('id')].destroy();if(conf!==false) new tree_component().init(this,conf)})};
function tree_component(){return{cntr:++tree_component.cntr,settings:$.extend({},$.tree.defaults),init: function(elem,conf){var _this=this;this.container=$(elem);if(this.container.size==0) return false;tree_component.inst[this.cntr]=this;if(!this.container.attr("id")) this.container.attr("id","jstree_"+this.cntr);tree_component.inst[this.container.attr("id")]=tree_component.inst[this.cntr];tree_component.focused=this.cntr;this.settings=$.extend(true,{},this.settings,conf);if(this.settings.languages&&this.settings.languages.length){this.current_lang=this.settings.languages[0];var st=false;var id="#"+this.container.attr("id");for(var ln=0;ln<this.settings.languages.length;ln++){st=tree_component.add_css(id+" ."+this.settings.languages[ln]);if(st!==false) st.style.display=(this.settings.languages[ln]==this.current_lang)?"":"none"}}
else this.current_lang=false;this.container.addClass("tree");if(this.settings.ui.theme_name!==false){if(this.settings.ui.theme_path===false){$("script").each(function(){if(this.src.toString().match(/jquery\.tree.*?js$/)) { _this.settings.ui.theme_path = this.src.toString().replace(/jquery\.tree.*?js$/,"")+"themes/"+_this.settings.ui.theme_name+"/style.css";return false}})}
if(this.settings.ui.theme_path!=""&&$.inArray(this.settings.ui.theme_path,tree_component.themes)==-1){tree_component.add_sheet({url:this.settings.ui.theme_path});tree_component.themes.push(this.settings.ui.theme_path)}
this.container.addClass("tree-"+this.settings.ui.theme_name)}
var type_icons="";for(var t in this.settings.types){if(!this.settings.types.hasOwnProperty(t)) continue;if(!this.settings.types[t].icon) continue;if(this.settings.types[t].icon.image||this.settings.types[t].icon.position){if(t=="default") type_icons+="#"+this.container.attr("id")+" li > a ins { ";else type_icons+="#"+this.container.attr("id")+" li[rel="+t+"] > a ins { ";if(this.settings.types[t].icon.image) type_icons+=" background-image:url("+this.settings.types[t].icon.image+"); ";if(this.settings.types[t].icon.position) type_icons+=" background-position:"+this.settings.types[t].icon.position+"; ";type_icons+="} "}}
if(type_icons!="") tree_component.add_sheet({str:type_icons});if(this.settings.rules.multiple) this.selected_arr=[];this.offset=false;this.hovered=false;this.locked=false;if(tree_component.drag_drop.marker===false) tree_component.drag_drop.marker=$("<div>").attr({id:"jstree-marker"}).hide().appendTo("body");this.callback("oninit",[this]);this.refresh();this.attach_events();this.focus()},refresh: function(obj){if(this.locked) return this.error("LOCKED");var _this=this;if(obj&&!this.settings.data.async) obj=false;this.is_partial_refresh=obj?true:false;this.opened=Array();if(this.settings.opened!=false){$.each(this.settings.opened, function(i,item){if(this.replace(/^#/,"").length > 0) { _this.opened.push("#" + this.replace(/^#/,""))}});this.settings.opened=false}
else{this.container.find("li.open").each(function(i){if(this.id){_this.opened.push("#"+this.id)}})}
if(this.selected){this.settings.selected=Array();if(obj){$(obj).find("li:has(a.clicked)").each(function(){if(this.id) _this.settings.selected.push("#"+this.id)})}
else{if(this.selected_arr){$.each(this.selected_arr, function(){if(this.attr("id")) _this.settings.selected.push("#"+this.attr("id"))})}
else{if(this.selected.attr("id")) this.settings.selected.push("#"+this.selected.attr("id"))}}}
else if(this.settings.selected!==false){var tmp=Array();if((typeof this.settings.selected).toLowerCase()=="object"){$.each(this.settings.selected, function(){if(this.replace(/^#/,"").length > 0) tmp.push("#" + this.replace(/^#/,""))})}
else{if(this.settings.selected.replace(/^#/,"").length > 0) tmp.push("#" + this.settings.selected.replace(/^#/,""))}
this.settings.selected=tmp}
if(obj&&this.settings.data.async){this.opened=Array();obj=this.get_node(obj);obj.find("li.open").each(function(i){_this.opened.push("#"+this.id)});if(obj.hasClass("open")) obj.removeClass("open").addClass("closed");if(obj.hasClass("leaf")) obj.removeClass("leaf");obj.children("ul:eq(0)").html("");return this.open_branch(obj,true, function(){_this.reselect.apply(_this)})}
var _this=this;var _datastore=new $.tree.datastores[this.settings.data.type]();if(this.container.children("ul").size()==0){this.container.html("<ul class='ltr' style='direction:ltr;'><li class='last'><a class='loading' href='#'><ins>&nbsp;</ins>"+(this.settings.lang.loading||"Loading ...")+"</a></li></ul>")}
_datastore.load(this.callback("beforedata",[false,this]),this,this.settings.data.opts,function(data){data=_this.callback("ondata",[data,_this]);_datastore.parse(data,_this,_this.settings.data.opts,function(str){str=_this.callback("onparse",[str,_this]);_this.container.empty().append($("<ul class='ltr'>").html(str));_this.container.find("li:last-child").addClass("last").end().find("li:has(ul)").not(".open").addClass("closed");_this.container.find("li").not(".open").not(".closed").addClass("leaf");_this.reselect()})})},reselect: function(is_callback){var _this=this;if(!is_callback) this.cl_count=0;else this.cl_count--;if(this.opened&&this.opened.length){var opn=false;for(var j=0;this.opened&&j<this.opened.length;j++){if(this.settings.data.async){var tmp=this.get_node(this.opened[j]);if(tmp.size()&&tmp.hasClass("closed")>0){opn=true;var tmp=this.opened[j].toString().replace('/','\\/');delete this.opened[j];this.open_branch(tmp,true, function(){_this.reselect.apply(_this,[true])});this.cl_count++}}
else this.open_branch(this.opened[j],true)}
if(this.settings.data.async&&opn) return;if(this.cl_count>0) return;delete this.opened}
if(this.cl_count>0) return;this.container.css("direction","ltr").children("ul:eq(0)").addClass("ltr");if(this.settings.ui.dots==false) this.container.children("ul:eq(0)").addClass("no_dots");if(this.scrtop){this.container.scrollTop(_this.scrtop);delete this.scrtop}
if(this.settings.selected!==false){$.each(this.settings.selected, function(i){if(_this.is_partial_refresh) _this.select_branch($(_this.settings.selected[i].toString().replace('/','\\/'),_this.container),(_this.settings.rules.multiple!==false));else _this.select_branch($(_this.settings.selected[i].toString().replace('/','\\/'),_this.container),(_this.settings.rules.multiple!==false&&i>0))});this.settings.selected=false}
this.callback("onload",[_this])},get: function(obj,format,opts){if(!format) format=this.settings.data.type;if(!opts) opts=this.settings.data.opts;return new $.tree.datastores[format]().get(obj,this,opts)},attach_events: function(){var _this=this;this.container.bind("mousedown.jstree", function(event){if(tree_component.drag_drop.isdown){tree_component.drag_drop.move_type=false;event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();return false}}).bind("mouseup.jstree", function(event){setTimeout( function(){_this.focus.apply(_this)},5)}).bind("click.jstree", function(event){return true});$("#"+this.container.attr("id")+" li").live("click", function(event){if(event.target.tagName!="LI") return true;_this.off_height();if(event.pageY-$(event.target).offset().top>_this.li_height) return true;_this.toggle_branch.apply(_this,[event.target]);event.stopPropagation();return false});$("#"+this.container.attr("id")+" li a").live("click.jstree", function(event){if(event.which&&event.which==3) return true;if(_this.locked){event.preventDefault();event.target.blur();return _this.error("LOCKED")}
_this.select_branch.apply(_this,[event.target,event.ctrlKey||_this.settings.rules.multiple=="on"]);if(_this.inp){_this.inp.blur()}
event.preventDefault();event.target.blur();return false}).live("dblclick.jstree", function(event){if(_this.locked){event.preventDefault();event.stopPropagation();event.target.blur();return _this.error("LOCKED")}
_this.callback("ondblclk",[_this.get_node(event.target).get(0),_this]);event.preventDefault();event.stopPropagation();event.target.blur()}).live("contextmenu.jstree", function(event){if(_this.locked){event.target.blur();return _this.error("LOCKED")}
return _this.callback("onrgtclk",[_this.get_node(event.target).get(0),_this,event])}).live("mouseover.jstree", function(event){if(_this.locked){event.preventDefault();event.stopPropagation();return _this.error("LOCKED")}
if(_this.hovered!==false&&(event.target.tagName=="A"||event.target.tagName=="INS")){_this.hovered.children("a").removeClass("hover");_this.hovered=false}
_this.callback("onhover",[_this.get_node(event.target).get(0),_this])}).live("mousedown.jstree", function(event){if(_this.settings.rules.drag_button=="left"&&event.which&&event.which!=1) return true;if(_this.settings.rules.drag_button=="right"&&event.which&&event.which!=3) return true;_this.focus.apply(_this);if(_this.locked) return _this.error("LOCKED");var obj=_this.get_node(event.target);if(_this.settings.rules.multiple!=false&&_this.selected_arr.length>1&&obj.children("a:eq(0)").hasClass("clicked")){var counter=0;for(var i in _this.selected_arr){if(!_this.selected_arr.hasOwnProperty(i)) continue;if(_this.check("draggable",_this.selected_arr[i])){_this.selected_arr[i].addClass("dragged");tree_component.drag_drop.origin_tree=_this;counter++}}
if(counter>0){if(_this.check("draggable",obj)) tree_component.drag_drop.drag_node=obj;else tree_component.drag_drop.drag_node=_this.container.find("li.dragged:eq(0)");tree_component.drag_drop.isdown=true;tree_component.drag_drop.drag_help=$("<div id='jstree-dragged' class='tree "+(_this.settings.ui.theme_name!=""?" tree-"+_this.settings.ui.theme_name:"")+"' />").append("<ul class='"+_this.container.children("ul:eq(0)").get(0).className+"' />");var tmp=tree_component.drag_drop.drag_node.clone();if(_this.settings.languages.length>0) tmp.find("a").not("."+_this.current_lang).hide();tree_component.drag_drop.drag_help.children("ul:eq(0)").append(tmp);tree_component.drag_drop.drag_help.find("li:eq(0)").removeClass("last").addClass("last").children("a").html("<ins>&nbsp;</ins>Multiple selection").end().children("ul").remove();tree_component.drag_drop.dragged=_this.container.find("li.dragged")}}
else{if(_this.check("draggable",obj)){tree_component.drag_drop.drag_node=obj;tree_component.drag_drop.drag_help=$("<div id='jstree-dragged' class='tree "+(_this.settings.ui.theme_name!=""?" tree-"+_this.settings.ui.theme_name:"")+"' />").append("<ul class='"+_this.container.children("ul:eq(0)").get(0).className+"' />");var tmp=obj.clone();if(_this.settings.languages.length>0) tmp.find("a").not("."+_this.current_lang).hide();tree_component.drag_drop.drag_help.children("ul:eq(0)").append(tmp);tree_component.drag_drop.drag_help.find("li:eq(0)").removeClass("last").addClass("last");tree_component.drag_drop.isdown=true;tree_component.drag_drop.foreign=false;tree_component.drag_drop.origin_tree=_this;obj.addClass("dragged");tree_component.drag_drop.dragged=_this.container.find("li.dragged")}}
tree_component.drag_drop.init_x=event.pageX;tree_component.drag_drop.init_y=event.pageY;obj.blur();event.preventDefault();event.stopPropagation();return false})},focus: function(){if(this.locked) return false;if(tree_component.focused!=this.cntr){tree_component.focused=this.cntr;this.callback("onfocus",[this])}},off_height: function(){if(this.offset===false){this.container.css({position:"relative"});this.offset=this.container.offset();var tmp=0;tmp=parseInt($.curCSS(this.container.get(0),"paddingTop",true),10);if(tmp) this.offset.top+=tmp;tmp=parseInt($.curCSS(this.container.get(0),"borderTopWidth",true),10);if(tmp) this.offset.top+=tmp;this.container.css({position:""})}
if(!this.li_height){var tmp=this.container.find("ul li.closed, ul li.leaf").eq(0);this.li_height=tmp.height();if(tmp.children("ul:eq(0)").size()) this.li_height-=tmp.children("ul:eq(0)").height();if(!this.li_height) this.li_height=18}},scroll_check: function(x,y){var _this=this;var cnt=_this.container;var off=_this.container.offset();var st=cnt.scrollTop();var sl=cnt.scrollLeft();var h_cor=(cnt.get(0).scrollWidth>cnt.width())?40:20;if(y-off.top<20) cnt.scrollTop(Math.max((st-_this.settings.ui.scroll_spd),0));if(cnt.height()-(y-off.top)<h_cor) cnt.scrollTop(st+_this.settings.ui.scroll_spd);if(x-off.left<20) cnt.scrollLeft(Math.max((sl-_this.settings.ui.scroll_spd),0));if(cnt.width()-(x-off.left)<40) cnt.scrollLeft(sl+_this.settings.ui.scroll_spd);if(cnt.scrollLeft()!=sl||cnt.scrollTop()!=st){tree_component.drag_drop.move_type=false;tree_component.drag_drop.ref_node=false;tree_component.drag_drop.marker.hide()}
tree_component.drag_drop.scroll_time=setTimeout( function(){_this.scroll_check(x,y)},50)},scroll_into_view: function(obj){obj=obj?this.get_node(obj):this.selected;if(!obj) return false;var off_t=obj.offset().top;var beg_t=this.container.offset().top;var end_t=beg_t+this.container.height();var h_cor=(this.container.get(0).scrollWidth>this.container.width())?40:20;if(off_t+5<beg_t) this.container.scrollTop(this.container.scrollTop()-(beg_t-off_t+5));if(off_t+h_cor>end_t) this.container.scrollTop(this.container.scrollTop()+(off_t+h_cor-end_t))},get_node: function(obj){return $(obj).closest("li")},get_type: function(obj){obj=!obj?this.selected:this.get_node(obj);if(!obj) return;var tmp=obj.attr(this.settings.rules.type_attr);return tmp||"default"},set_type: function(str,obj){obj=!obj?this.selected:this.get_node(obj);if(!obj||!str) return;obj.attr(this.settings.rules.type_attr,str)},get_text: function(obj,lang){obj=this.get_node(obj);if(!obj||obj.size()==0) return "";if(this.settings.languages&&this.settings.languages.length){lang=lang?lang:this.current_lang;obj=obj.children("a."+lang)}
else obj=obj.children("a:visible");var val="";obj.contents().each(function(){if(this.nodeType==3){val=this.data;return false}});return val},check: function(rule,obj){if(this.locked) return false;var v=false;if(obj===-1){if(typeof this.settings.rules[rule]!="undefined") v=this.settings.rules[rule]}
else{obj=!obj?this.selected:this.get_node(obj);if(!obj) return;var t=this.get_type(obj);if(typeof this.settings.types[t]!="undefined"&&typeof this.settings.types[t][rule]!="undefined") v=this.settings.types[t][rule];else if(typeof this.settings.types["default"]!="undefined"&&typeof this.settings.types["default"][rule]!="undefined") v=this.settings.types["default"][rule]}
if(typeof v=="function") v=v.call(null,obj,this);v=this.callback("check",[rule,obj,v,this]);return v},check_move: function(nod,ref_node,how){if(this.locked) return false;if($(ref_node).closest("li.dragged").size()) return false;var tree1=nod.parents(".tree:eq(0)").get(0);var tree2=ref_node.parents(".tree:eq(0)").get(0);if(tree1&&tree1!=tree2){var m=$.tree.reference(tree2.id).settings.rules.multitree;if(m=="none"||($.isArray(m)&&$.inArray(tree1.id,m)==-1)) return false}
var p=(how!="inside")?this.parent(ref_node):this.get_node(ref_node);nod=this.get_node(nod);if(p==false) return false;var r={max_depth:this.settings.rules.use_max_depth?this.check("max_depth",p):-1,max_children:this.settings.rules.use_max_children?this.check("max_children",p):-1,valid_children:this.check("valid_children",p)};var nod_type=(typeof nod=="string")?nod:this.get_type(nod);if(typeof r.valid_children!="undefined"&&(r.valid_children=="none"||(typeof r.valid_children=="object"&&$.inArray(nod_type,$.makeArray(r.valid_children))==-1))) return false;if(this.settings.rules.use_max_children){if(typeof r.max_children!="undefined"&&r.max_children!=-1){if(r.max_children==0) return false;var c_count=1;if(tree_component.drag_drop.moving==true&&tree_component.drag_drop.foreign==false){c_count=tree_component.drag_drop.dragged.size();c_count=c_count-p.find('> ul > li.dragged').size()}
if(r.max_children<p.find('> ul > li').size()+c_count) return false}}
if(this.settings.rules.use_max_depth){if(typeof r.max_depth!="undefined"&&r.max_depth===0) return this.error("MOVE: MAX-DEPTH REACHED");var mx=(r.max_depth>0)?r.max_depth:false;var i=0;var t=p;while(t!==-1){t=this.parent(t);i++;var m=this.check("max_depth",t);if(m>=0){mx=(mx===false)?(m-i):Math.min(mx,m-i)}
if(mx!==false&&mx<=0) return this.error("MOVE: MAX-DEPTH REACHED")}
if(mx!==false&&mx<=0) return this.error("MOVE: MAX-DEPTH REACHED");if(mx!==false){var incr=1;if(typeof nod!="string"){var t=nod;while(t.size()>0){if(mx-incr<0) return this.error("MOVE: MAX-DEPTH REACHED");t=t.children("ul").children("li");incr++}}}}
if(this.callback("check_move",[nod,ref_node,how,this])==false) return false;return true},hover_branch: function(obj){if(this.locked) return this.error("LOCKED");var _this=this;var obj=_this.get_node(obj);if(!obj.size()) return this.error("HOVER: NOT A VALID NODE");if(!_this.check("clickable",obj)) return this.error("SELECT: NODE NOT SELECTABLE");if(this.hovered) this.hovered.children("A").removeClass("hover");this.hovered=obj;this.hovered.children("a").addClass("hover");this.scroll_into_view(this.hovered)},select_branch: function(obj,multiple){if(this.locked) return this.error("LOCKED");if(!obj&&this.hovered!==false) obj=this.hovered;var _this=this;obj=_this.get_node(obj);if(!obj.size()) return this.error("SELECT: NOT A VALID NODE");obj.children("a").removeClass("hover");if(!_this.check("clickable",obj)) return this.error("SELECT: NODE NOT SELECTABLE");if(_this.callback("beforechange",[obj.get(0),_this])===false) return this.error("SELECT: STOPPED BY USER");if(this.settings.rules.multiple!=false&&multiple&&obj.children("a.clicked").size()>0){return this.deselect_branch(obj)}
if(this.settings.rules.multiple!=false&&multiple){this.selected_arr.push(obj)}
if(this.settings.rules.multiple!=false&&!multiple){for(var i in this.selected_arr){if(!this.selected_arr.hasOwnProperty(i)) continue;this.selected_arr[i].children("A").removeClass("clicked");this.callback("ondeselect",[this.selected_arr[i].get(0),_this])}
this.selected_arr=[];this.selected_arr.push(obj);if(this.selected&&this.selected.children("A").hasClass("clicked")){this.selected.children("A").removeClass("clicked");this.callback("ondeselect",[this.selected.get(0),_this])}}
if(!this.settings.rules.multiple){if(this.selected){this.selected.children("A").removeClass("clicked");this.callback("ondeselect",[this.selected.get(0),_this])}}
this.selected=obj;if(this.hovered!==false){this.hovered.children("A").removeClass("hover");this.hovered=obj}
this.selected.children("a").addClass("clicked").end().parents("li.closed").each( function(){_this.open_branch(this,true)});this.scroll_into_view(this.selected);this.callback("onselect",[this.selected.get(0),_this]);this.callback("onchange",[this.selected.get(0),_this])},deselect_branch: function(obj){if(this.locked) return this.error("LOCKED");var _this=this;var obj=this.get_node(obj);if(obj.children("a.clicked").size()==0) return this.error("DESELECT: NODE NOT SELECTED");obj.children("a").removeClass("clicked");this.callback("ondeselect",[obj.get(0),_this]);if(this.settings.rules.multiple!=false&&this.selected_arr.length>1){this.selected_arr=[];this.container.find("a.clicked").filter(":first-child").parent().each(function(){_this.selected_arr.push($(this))});if(obj.get(0)==this.selected.get(0)){this.selected=this.selected_arr[0]}}
else{if(this.settings.rules.multiple!=false) this.selected_arr=[];this.selected=false}
this.callback("onchange",[obj.get(0),_this])},toggle_branch: function(obj){if(this.locked) return this.error("LOCKED");var obj=this.get_node(obj);if(obj.hasClass("closed")) return this.open_branch(obj);if(obj.hasClass("open")) return this.close_branch(obj)},open_branch: function(obj,disable_animation,callback){var _this=this;if(this.locked) return this.error("LOCKED");var obj=this.get_node(obj);if(!obj.size()) return this.error("OPEN: NO SUCH NODE");if(obj.hasClass("leaf")) return this.error("OPEN: OPENING LEAF NODE");if(this.settings.data.async&&obj.find("li").size()==0){if(this.callback("beforeopen",[obj.get(0),this])===false) return this.error("OPEN: STOPPED BY USER");obj.children("ul:eq(0)").remove().end().append("<ul><li class='last'><a class='loading' href='#'><ins>&nbsp;</ins>"+(_this.settings.lang.loading||"Loading ...")+"</a></li></ul>");obj.removeClass("closed").addClass("open");var _datastore=new $.tree.datastores[this.settings.data.type]();_datastore.load(this.callback("beforedata",[obj,this]),this,this.settings.data.opts,function(data){data=_this.callback("ondata",[data,_this]);if(!data||data.length==0){obj.removeClass("closed").removeClass("open").addClass("leaf").children("ul").remove();if(callback) callback.call();return}
_datastore.parse(data,_this,_this.settings.data.opts,function(str){str=_this.callback("onparse",[str,_this]);obj.children("ul:eq(0)").replaceWith($("<ul>").html(str));obj.find("li:last-child").addClass("last").end().find("li:has(ul)").not(".open").addClass("closed");obj.find("li").not(".open").not(".closed").addClass("leaf");_this.open_branch.apply(_this,[obj]);if(callback) callback.call()})});return true}
else{if(!this.settings.data.async){if(this.callback("beforeopen",[obj.get(0),this])===false) return this.error("OPEN: STOPPED BY USER")}
if(parseInt(this.settings.ui.animation)>0&&!disable_animation){obj.children("ul:eq(0)").css("display","none");obj.removeClass("closed").addClass("open");obj.children("ul:eq(0)").slideDown(parseInt(this.settings.ui.animation), function(){$(this).css("display","");if(callback) callback.call()})} else{obj.removeClass("closed").addClass("open");if(callback) callback.call()}
this.callback("onopen",[obj.get(0),this]);return true}},close_branch: function(obj,disable_animation){if(this.locked) return this.error("LOCKED");var _this=this;var obj=this.get_node(obj);if(!obj.size()) return this.error("CLOSE: NO SUCH NODE");if(_this.callback("beforeclose",[obj.get(0),_this])===false) return this.error("CLOSE: STOPPED BY USER");if(parseInt(this.settings.ui.animation)>0&&!disable_animation&&obj.children("ul:eq(0)").size()==1){obj.children("ul:eq(0)").slideUp(parseInt(this.settings.ui.animation), function(){if(obj.hasClass("open")) obj.removeClass("open").addClass("closed");$(this).css("display","")})}
else{if(obj.hasClass("open")) obj.removeClass("open").addClass("closed")}
if(this.selected&&this.settings.ui.selected_parent_close!==false&&obj.children("ul:eq(0)").find("a.clicked").size()>0){obj.find("li:has(a.clicked)").each(function(){_this.deselect_branch(this)});if(this.settings.ui.selected_parent_close=="select_parent"&&obj.children("a.clicked").size()==0) this.select_branch(obj,(this.settings.rules.multiple!=false&&this.selected_arr.length>0))}
this.callback("onclose",[obj.get(0),this])},open_all: function(obj,callback){if(this.locked) return this.error("LOCKED");var _this=this;obj=obj?this.get_node(obj):this.container;var s=obj.find("li.closed").size();if(!callback) this.cl_count=0;else this.cl_count--;if(s>0){this.cl_count+=s;obj.find("li.closed").each( function(){var __this=this;_this.open_branch.apply(_this,[this,true, function(){_this.open_all.apply(_this,[__this,true])}])})}
else if(this.cl_count==0) this.callback("onopen_all",[this])},close_all: function(obj){if(this.locked) return this.error("LOCKED");var _this=this;obj=obj?this.get_node(obj):this.container;obj.find("li.open").each( function(){_this.close_branch(this,true)});this.callback("onclose_all",[this])},set_lang: function(i){if(!$.isArray(this.settings.languages)||this.settings.languages.length==0) return false;if(this.locked) return this.error("LOCKED");if(!$.inArray(i,this.settings.languages)&&typeof this.settings.languages[i]!="undefined") i=this.settings.languages[i];if(typeof i=="undefined") return false;if(i==this.current_lang) return true;var st=false;var id="#"+this.container.attr("id");st=tree_component.get_css(id+" ."+this.current_lang);if(st!==false) st.style.display="none";st=tree_component.get_css(id+" ."+i);if(st!==false) st.style.display="";this.current_lang=i;return true},get_lang: function(){if(!$.isArray(this.settings.languages)||this.settings.languages.length==0) return false;return this.current_lang},create: function(obj,ref_node,position){if(this.locked) return this.error("LOCKED");var root=false;if(ref_node==-1){root=true;ref_node=this.container}
else ref_node=ref_node?this.get_node(ref_node):this.selected;if(!root&&(!ref_node||!ref_node.size())) return this.error("CREATE: NO NODE SELECTED");var pos=position;var tmp=ref_node;if(position=="before"){position=ref_node.parent().children().index(ref_node);ref_node=ref_node.parents("li:eq(0)")}
if(position=="after"){position=ref_node.parent().children().index(ref_node)+1;ref_node=ref_node.parents("li:eq(0)")}
if(!root&&ref_node.size()==0){root=true;ref_node=this.container}
if(!root){if(!this.check("creatable",ref_node)) return this.error("CREATE: CANNOT CREATE IN NODE");if(ref_node.hasClass("closed")){if(this.settings.data.async&&ref_node.children("ul").size()==0){var _this=this;return this.open_branch(ref_node,true, function(){_this.create.apply(_this,[obj,ref_node,position])})}
else this.open_branch(ref_node,true)}}
var torename=false;if(!obj) obj={};else obj=$.extend(true,{},obj);if(!obj.attributes) obj.attributes={};if(!obj.attributes[this.settings.rules.type_attr]) obj.attributes[this.settings.rules.type_attr]=this.get_type(tmp)||"default";if(this.settings.languages.length){if(!obj.data){obj.data={};torename=true}
for(var i=0;i<this.settings.languages.length;i++){if(!obj.data[this.settings.languages[i]]) obj.data[this.settings.languages[i]]=((typeof this.settings.lang.new_node).toLowerCase()!="string"&&this.settings.lang.new_node[i])?this.settings.lang.new_node[i]:this.settings.lang.new_node}}
else{if(!obj.data){obj.data=this.settings.lang.new_node;torename=true}}
obj=this.callback("ondata",[obj,this]);var obj_s=$.tree.datastores.json().parse(obj,this);obj_s=this.callback("onparse",[obj_s,this]);var $li=$(obj_s);if($li.children("ul").size()){if(!$li.is(".open")) $li.addClass("closed")}
else $li.addClass("leaf");$li.find("li:last-child").addClass("last").end().find("li:has(ul)").not(".open").addClass("closed");$li.find("li").not(".open").not(".closed").addClass("leaf");var r={max_depth:this.settings.rules.use_max_depth?this.check("max_depth",(root?-1:ref_node)):-1,max_children:this.settings.rules.use_max_children?this.check("max_children",(root?-1:ref_node)):-1,valid_children:this.check("valid_children",(root?-1:ref_node))};var nod_type=this.get_type($li);if(typeof r.valid_children!="undefined"&&(r.valid_children=="none"||($.isArray(r.valid_children)&&$.inArray(nod_type,r.valid_children)==-1))) return this.error("CREATE: NODE NOT A VALID CHILD");if(this.settings.rules.use_max_children){if(typeof r.max_children!="undefined"&&r.max_children!=-1&&r.max_children>=this.children(ref_node).size()) return this.error("CREATE: MAX_CHILDREN REACHED")}
if(this.settings.rules.use_max_depth){if(typeof r.max_depth!="undefined"&&r.max_depth===0) return this.error("CREATE: MAX-DEPTH REACHED");var mx=(r.max_depth>0)?r.max_depth:false;var i=0;var t=ref_node;while(t!==-1&&!root){t=this.parent(t);i++;var m=this.check("max_depth",t);if(m>=0){mx=(mx===false)?(m-i):Math.min(mx,m-i)}
if(mx!==false&&mx<=0) return this.error("CREATE: MAX-DEPTH REACHED")}
if(mx!==false&&mx<=0) return this.error("CREATE: MAX-DEPTH REACHED");if(mx!==false){var incr=1;var t=$li;while(t.size()>0){if(mx-incr<0) return this.error("CREATE: MAX-DEPTH REACHED");t=t.children("ul").children("li");incr++}}}
if((typeof position).toLowerCase()=="undefined"||position=="inside")
position=(this.settings.rules.createat=="top")?0:ref_node.children("ul:eq(0)").children("li").size();if(ref_node.children("ul").size()==0||(root==true&&ref_node.children("ul").children("li").size()==0)){if(!root) var a=this.moved($li,ref_node.children("a:eq(0)"),"inside",true);else var a=this.moved($li,this.container.children("ul:eq(0)"),"inside",true)}
else if(pos=="before"&&ref_node.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").size())
var a=this.moved($li,ref_node.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").children("a:eq(0)"),"before",true);else if(pos=="after"&&ref_node.children("ul:eq(0)").children("li:nth-child("+(position)+")").size())
var a=this.moved($li,ref_node.children("ul:eq(0)").children("li:nth-child("+(position)+")").children("a:eq(0)"),"after",true);else if(ref_node.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").size())
var a=this.moved($li,ref_node.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").children("a:eq(0)"),"before",true);else
var a=this.moved($li,ref_node.children("ul:eq(0)").children("li:last").children("a:eq(0)"),"after",true);if(a===false) return this.error("CREATE: ABORTED");if(torename){this.select_branch($li.children("a:eq(0)"));this.rename()}
return $li},rename: function(obj,new_name){if(this.locked) return this.error("LOCKED");obj=obj?this.get_node(obj):this.selected;var _this=this;if(!obj||!obj.size()) return this.error("RENAME: NO NODE SELECTED");if(!this.check("renameable",obj)) return this.error("RENAME: NODE NOT RENAMABLE");if(!this.callback("beforerename",[obj.get(0),_this.current_lang,_this])) return this.error("RENAME: STOPPED BY USER");obj.parents("li.closed").each(function(){_this.open_branch(this)});if(this.current_lang) obj=obj.find("a."+this.current_lang);else obj=obj.find("a:first");var rb={};rb[this.container.attr("id")]=this.get_rollback();var icn=obj.children("ins").clone();if((typeof new_name).toLowerCase()=="string"){obj.text(new_name).prepend(icn);_this.callback("onrename",[_this.get_node(obj).get(0),_this,rb])}
else{var last_value="";obj.contents().each(function(){if(this.nodeType==3){last_value=this.data;return false}});_this.inp=$("<input type='text' autocomplete='off' />");_this.inp.val(last_value.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<")).bind("mousedown", function(event){event.stopPropagation()}).bind("mouseup", function(event){event.stopPropagation()}).bind("click", function(event){event.stopPropagation()}).bind("keyup", function(event){var key=event.keyCode||event.which;if(key==27){this.value=last_value;this.blur();return}
if(key==13){this.blur();return}});_this.inp.blur(function(event){if(this.value=="") this.value=last_value;obj.text(this.value).prepend(icn);obj.get(0).style.display="";obj.prevAll("span").remove();_this.inp=false;_this.callback("onrename",[_this.get_node(obj).get(0),_this,rb])});var spn=$("<span />").addClass(obj.attr("class")).append(icn).append(_this.inp);obj.get(0).style.display="none";obj.parent().prepend(spn);_this.inp.get(0).focus();_this.inp.get(0).select()}},remove: function(obj){if(this.locked) return this.error("LOCKED");var _this=this;var rb={};rb[this.container.attr("id")]=this.get_rollback();if(obj&&(!this.selected||this.get_node(obj).get(0)!=this.selected.get(0))){obj=this.get_node(obj);if(obj.size()){if(!this.check("deletable",obj)) return this.error("DELETE: NODE NOT DELETABLE");if(!this.callback("beforedelete",[obj.get(0),_this])) return this.error("DELETE: STOPPED BY USER");$parent=obj.parent();if(obj.find("a.clicked").size()){var reset_selected=false;_this.selected_arr=[];this.container.find("a.clicked").filter(":first-child").parent().each(function(){if(!reset_selected&&this==_this.selected.get(0)) reset_selected=true;if($(this).parents().index(obj)!=-1) return true;_this.selected_arr.push($(this))});if(reset_selected) this.selected=this.selected_arr[0]||false}
obj=obj.remove();$parent.children("li:last").addClass("last");if($parent.children("li").size()==0){$li=$parent.parents("li:eq(0)");$li.removeClass("open").removeClass("closed").addClass("leaf").children("ul").remove()}
this.callback("ondelete",[obj.get(0),this,rb])}}
else if(this.selected){if(!this.check("deletable",this.selected)) return this.error("DELETE: NODE NOT DELETABLE");if(!this.callback("beforedelete",[this.selected.get(0),_this])) return this.error("DELETE: STOPPED BY USER");$parent=this.selected.parent();var obj=this.selected;if(this.settings.rules.multiple==false||this.selected_arr.length==1){var stop=true;var tmp=this.settings.ui.selected_delete=="select_previous"?this.prev(this.selected):false}
obj=obj.remove();$parent.children("li:last").addClass("last");if($parent.children("li").size()==0){$li=$parent.parents("li:eq(0)");$li.removeClass("open").removeClass("closed").addClass("leaf").children("ul").remove()}
if(!stop&&this.settings.rules.multiple!=false){var _this=this;this.selected_arr=[];this.container.find("a.clicked").filter(":first-child").parent().each(function(){_this.selected_arr.push($(this))});if(this.selected_arr.length>0){this.selected=this.selected_arr[0];this.remove()}}
if(stop&&tmp) this.select_branch(tmp);this.callback("ondelete",[obj.get(0),this,rb])}
else return this.error("DELETE: NO NODE SELECTED")},next: function(obj,strict){obj=this.get_node(obj);if(!obj.size()) return false;if(strict) return(obj.nextAll("li").size()>0)?obj.nextAll("li:eq(0)"):false;if(obj.hasClass("open")) return obj.find("li:eq(0)");else if(obj.nextAll("li").size()>0) return obj.nextAll("li:eq(0)");else return obj.parents("li").next("li").eq(0)},prev: function(obj,strict){obj=this.get_node(obj);if(!obj.size()) return false;if(strict) return(obj.prevAll("li").size()>0)?obj.prevAll("li:eq(0)"):false;if(obj.prev("li").size()){var obj=obj.prev("li").eq(0);while(obj.hasClass("open")) obj=obj.children("ul:eq(0)").children("li:last");return obj}
else return obj.parents("li:eq(0)").size()?obj.parents("li:eq(0)"):false},parent: function(obj){obj=this.get_node(obj);if(!obj.size()) return false;return obj.parents("li:eq(0)").size()?obj.parents("li:eq(0)"):-1},children: function(obj){if(obj===-1) return this.container.children("ul:eq(0)").children("li");obj=this.get_node(obj);if(!obj.size()) return false;return obj.children("ul:eq(0)").children("li")},toggle_dots: function(){if(this.settings.ui.dots){this.settings.ui.dots=false;this.container.children("ul:eq(0)").addClass("no_dots")}
else{this.settings.ui.dots=true;this.container.children("ul:eq(0)").removeClass("no_dots")}},callback: function(cb,args){var p=false;var r=null;for(var i in this.settings.plugins){if(typeof $.tree.plugins[i]!="object") continue;p=$.tree.plugins[i];if(p.callbacks&&typeof p.callbacks[cb]=="function") r=p.callbacks[cb].apply(this,args);if(typeof r!=="undefined"&&r!==null){if(cb=="ondata"||cb=="onparse") args[0]=r;else return r}}
p=this.settings.callback[cb];if(typeof p=="function") return p.apply(null,args)},get_rollback: function(){var rb={};rb.html=this.container.html();rb.selected=this.selected?this.selected.attr("id"):false;return rb},moved: function(what,where,how,is_new,is_copy,rb){var what=$(what);var $parent=$(what).parents("ul:eq(0)");var $where=$(where);if($where.is("ins")) $where=$where.parent();if(!rb){var rb={};rb[this.container.attr("id")]=this.get_rollback();if(!is_new){var tmp=what.size()>1?what.eq(0).parents(".tree:eq(0)"):what.parents(".tree:eq(0)");if(tmp.get(0)!=this.container.get(0)){tmp=tree_component.inst[tmp.attr("id")];rb[tmp.container.attr("id")]=tmp.get_rollback()}
delete tmp}}
if(how=="inside"&&this.settings.data.async){var _this=this;if(this.get_node($where).hasClass("closed")){return this.open_branch(this.get_node($where),true, function(){_this.moved.apply(_this,[what,where,how,is_new,is_copy,rb])})}
if(this.get_node($where).find("> ul > li > a.loading").size()==1){setTimeout(function(){_this.moved.apply(_this,[what,where,how,is_new,is_copy])},200);return}}
if(what.size()>1){var _this=this;var tmp=this.moved(what.eq(0),where,how,false,is_copy,rb);what.each(function(i){if(i==0) return;if(tmp){tmp=_this.moved(this,tmp.children("a:eq(0)"),"after",false,is_copy,rb)}});return what}
if(is_copy){_what=what.clone();_what.each(function(i){this.id=this.id+"_copy";$(this).find("li").each(function(){this.id=this.id+"_copy"});$(this).removeClass("dragged").find("a.clicked").removeClass("clicked").end().find("li.dragged").removeClass("dragged")})}
else _what=what;if(is_new){if(!this.callback("beforecreate",[this.get_node(what).get(0),this.get_node(where).get(0),how,this])) return false}
else{if(!this.callback("beforemove",[this.get_node(what).get(0),this.get_node(where).get(0),how,this])) return false}
if(!is_new){var tmp=what.parents(".tree:eq(0)");if(tmp.get(0)!=this.container.get(0)){tmp=tree_component.inst[tmp.attr("id")];if(tmp.settings.languages.length){var res=[];if(this.settings.languages.length==0) res.push("."+tmp.current_lang);else{for(var i in this.settings.languages){if(!this.settings.languages.hasOwnProperty(i)) continue;for(var j in tmp.settings.languages){if(!tmp.settings.languages.hasOwnProperty(j)) continue;if(this.settings.languages[i]==tmp.settings.languages[j]) res.push("."+this.settings.languages[i])}}}
if(res.length==0) return this.error("MOVE: NO COMMON LANGUAGES");_what.find("a").not(res.join(",")).remove()}
_what.find("a.clicked").removeClass("clicked")}}
what=_what;switch(how){case "before":$where.parents("ul:eq(0)").children("li.last").removeClass("last");$where.parent().before(what.removeClass("last"));$where.parents("ul:eq(0)").children("li:last").addClass("last");break;case "after":$where.parents("ul:eq(0)").children("li.last").removeClass("last");$where.parent().after(what.removeClass("last"));$where.parents("ul:eq(0)").children("li:last").addClass("last");break;case "inside":if($where.parent().children("ul:first").size()){if(this.settings.rules.createat=="top"){$where.parent().children("ul:first").prepend(what.removeClass("last")).children("li:last").addClass("last");var tmp_node=$where.parent().children("ul:first").children("li:first");if(tmp_node.size()){how="before";where=tmp_node}}
else{var tmp_node=$where.parent().children("ul:first").children(".last");if(tmp_node.size()){how="after";where=tmp_node}
$where.parent().children("ul:first").children(".last").removeClass("last").end().append(what.removeClass("last")).children("li:last").addClass("last")}}
else{what.addClass("last");$where.parent().removeClass("leaf").append("<ul/>");if(!$where.parent().hasClass("open")) $where.parent().addClass("closed");$where.parent().children("ul:first").prepend(what)}
if($where.parent().hasClass("closed")){this.open_branch($where)}
break;default:break}
if($parent.find("li").size()==0){var $li=$parent.parent();$li.removeClass("open").removeClass("closed").addClass("leaf");if(!$li.is(".tree")) $li.children("ul").remove();$li.parents("ul:eq(0)").children("li.last").removeClass("last").end().children("li:last").addClass("last")}
else{$parent.children("li.last").removeClass("last");$parent.children("li:last").addClass("last")}
if(is_copy) this.callback("oncopy",[this.get_node(what).get(0),this.get_node(where).get(0),how,this,rb]);else if(is_new) this.callback("oncreate",[this.get_node(what).get(0),($where.is("ul")?-1:this.get_node(where).get(0)),how,this,rb]);else this.callback("onmove",[this.get_node(what).get(0),this.get_node(where).get(0),how,this,rb]);return what},error: function(code){this.callback("error",[code,this]);return false},lock: function(state){this.locked=state;if(this.locked) this.container.children("ul:eq(0)").addClass("locked");else this.container.children("ul:eq(0)").removeClass("locked")},cut: function(obj){if(this.locked) return this.error("LOCKED");obj=obj?this.get_node(obj):this.container.find("a.clicked").filter(":first-child").parent();if(!obj||!obj.size()) return this.error("CUT: NO NODE SELECTED");tree_component.cut_copy.copy_nodes=false;tree_component.cut_copy.cut_nodes=obj},copy: function(obj){if(this.locked) return this.error("LOCKED");obj=obj?this.get_node(obj):this.container.find("a.clicked").filter(":first-child").parent();if(!obj||!obj.size()) return this.error("COPY: NO NODE SELECTED");tree_component.cut_copy.copy_nodes=obj;tree_component.cut_copy.cut_nodes=false},paste: function(obj,position){if(this.locked) return this.error("LOCKED");var root=false;if(obj==-1){root=true;obj=this.container}
else obj=obj?this.get_node(obj):this.selected;if(!root&&(!obj||!obj.size())) return this.error("PASTE: NO NODE SELECTED");if(!tree_component.cut_copy.copy_nodes&&!tree_component.cut_copy.cut_nodes) return this.error("PASTE: NOTHING TO DO");var _this=this;var pos=position;if(position=="before"){position=obj.parent().children().index(obj);obj=obj.parents("li:eq(0)")}
else if(position=="after"){position=obj.parent().children().index(obj)+1;obj=obj.parents("li:eq(0)")}
else if((typeof position).toLowerCase()=="undefined"||position=="inside"){position=(this.settings.rules.createat=="top")?0:obj.children("ul:eq(0)").children("li").size()}
if(!root&&obj.size()==0){root=true;obj=this.container}
if(tree_component.cut_copy.copy_nodes&&tree_component.cut_copy.copy_nodes.size()){var ok=true;if(!root&&!this.check_move(tree_component.cut_copy.copy_nodes,obj.children("a:eq(0)"),"inside")) return false;if(obj.children("ul").size()==0||(root==true&&obj.children("ul").children("li").size()==0)){if(!root) var a=this.moved(tree_component.cut_copy.copy_nodes,obj.children("a:eq(0)"),"inside",false,true);else var a=this.moved(tree_component.cut_copy.copy_nodes,this.container.children("ul:eq(0)"),"inside",false,true)}
else if(pos=="before"&&obj.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").size())
var a=this.moved(tree_component.cut_copy.copy_nodes,obj.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").children("a:eq(0)"),"before",false,true);else if(pos=="after"&&obj.children("ul:eq(0)").children("li:nth-child("+(position)+")").size())
var a=this.moved(tree_component.cut_copy.copy_nodes,obj.children("ul:eq(0)").children("li:nth-child("+(position)+")").children("a:eq(0)"),"after",false,true);else if(obj.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").size())
var a=this.moved(tree_component.cut_copy.copy_nodes,obj.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").children("a:eq(0)"),"before",false,true);else
var a=this.moved(tree_component.cut_copy.copy_nodes,obj.children("ul:eq(0)").children("li:last").children("a:eq(0)"),"after",false,true);tree_component.cut_copy.copy_nodes=false}
if(tree_component.cut_copy.cut_nodes&&tree_component.cut_copy.cut_nodes.size()){var ok=true;obj.parents().andSelf().each(function(){if(tree_component.cut_copy.cut_nodes.index(this)!=-1){ok=false;return false}});if(!ok) return this.error("Invalid paste");if(!root&&!this.check_move(tree_component.cut_copy.cut_nodes,obj.children("a:eq(0)"),"inside")) return false;if(obj.children("ul").size()==0||(root==true&&obj.children("ul").children("li").size()==0)){if(!root) var a=this.moved(tree_component.cut_copy.cut_nodes,obj.children("a:eq(0)"),"inside");else var a=this.moved(tree_component.cut_copy.cut_nodes,this.container.children("ul:eq(0)"),"inside")}
else if(pos=="before"&&obj.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").size())
var a=this.moved(tree_component.cut_copy.cut_nodes,obj.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").children("a:eq(0)"),"before");else if(pos=="after"&&obj.children("ul:eq(0)").children("li:nth-child("+(position)+")").size())
var a=this.moved(tree_component.cut_copy.cut_nodes,obj.children("ul:eq(0)").children("li:nth-child("+(position)+")").children("a:eq(0)"),"after");else if(obj.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").size())
var a=this.moved(tree_component.cut_copy.cut_nodes,obj.children("ul:eq(0)").children("li:nth-child("+(position+1)+")").children("a:eq(0)"),"before");else
var a=this.moved(tree_component.cut_copy.cut_nodes,obj.children("ul:eq(0)").children("li:last").children("a:eq(0)"),"after");tree_component.cut_copy.cut_nodes=false}},search: function(str,func){var _this=this;if(!str||(this.srch&&str!=this.srch)){this.srch="";this.srch_opn=false;this.container.find("a.search").removeClass("search")}
this.srch=str;if(!str) return;if(!func) func="contains";if(this.settings.data.async){if(!this.srch_opn){var dd=$.extend({"search":str},this.callback("beforedata",[false,this]));$.ajax({type:this.settings.data.opts.method,url:this.settings.data.opts.url,data:dd,dataType:"text",success: function(data){_this.srch_opn=$.unique(data.split(","));_this.search.apply(_this,[str,func])}})}
else if(this.srch_opn.length){if(this.srch_opn&&this.srch_opn.length){var opn=false;for(var j=0;j<this.srch_opn.length;j++){if(this.get_node("#"+this.srch_opn[j]).size()>0){opn=true;var tmp="#"+this.srch_opn[j];delete this.srch_opn[j];this.open_branch(tmp,true, function(){_this.search.apply(_this,[str,func])})}}
if(!opn){this.srch_opn=[];_this.search.apply(_this,[str,func])}}}
else{this.srch_opn=false;var selector="a";if(this.settings.languages.length) selector+="."+this.current_lang;this.callback("onsearch",[this.container.find(selector+":"+func+"('"+str+"')"),this])}}
else{var selector="a";if(this.settings.languages.length) selector+="."+this.current_lang;var nn=this.container.find(selector+":"+func+"('"+str+"')");nn.parents("li.closed").each( function(){_this.open_branch(this,true)});this.callback("onsearch",[nn,this])}},add_sheet:tree_component.add_sheet,destroy: function(){this.callback("ondestroy",[this]);this.container.unbind(".jstree");$("#"+this.container.attr("id")).die("click.jstree").die("dblclick.jstree").die("mouseover.jstree").die("mouseout.jstree").die("mousedown.jstree");this.container.removeClass("tree ui-widget ui-widget-content tree-default tree-"+this.settings.ui.theme_name).children("ul").removeClass("no_dots ltr locked").find("li").removeClass("leaf").removeClass("open").removeClass("closed").removeClass("last").children("a").removeClass("clicked hover search");if(this.cntr==tree_component.focused){for(var i in tree_component.inst){if(i!=this.cntr&&i!=this.container.attr("id")){tree_component.inst[i].focus();break}}}
tree_component.inst[this.cntr]=false;tree_component.inst[this.container.attr("id")]=false;delete tree_component.inst[this.cntr];delete tree_component.inst[this.container.attr("id")];tree_component.cntr--}}};tree_component.cntr=0;tree_component.inst={};tree_component.themes=[];tree_component.drag_drop={isdown:false,drag_node:false,drag_help:false,dragged:false,init_x:false,init_y:false,moving:false,origin_tree:false,marker:false,move_type:false,ref_node:false,appended:false,foreign:false,droppable:[],open_time:false,scroll_time:false};tree_component.mouseup=function(event){var tmp=tree_component.drag_drop;if(tmp.open_time) clearTimeout(tmp.open_time);if(tmp.scroll_time) clearTimeout(tmp.scroll_time);if(tmp.moving&&$.tree.drag_end!==false) $.tree.drag_end.call(null,event,tmp);if(tmp.foreign===false&&tmp.drag_node&&tmp.drag_node.size()){tmp.drag_help.remove();if(tmp.move_type){var tree1=tree_component.inst[tmp.ref_node.parents(".tree:eq(0)").attr("id")];if(tree1) tree1.moved(tmp.dragged,tmp.ref_node,tmp.move_type,false,(tmp.origin_tree.settings.rules.drag_copy=="on"||(tmp.origin_tree.settings.rules.drag_copy=="ctrl"&&event.ctrlKey)))}
tmp.move_type=false;tmp.ref_node=false}
if(tmp.foreign!==false){if(tmp.drag_help) tmp.drag_help.remove();if(tmp.move_type){var tree1=tree_component.inst[tmp.ref_node.parents(".tree:eq(0)").attr("id")];if(tree1) tree1.callback("ondrop",[tmp.f_data,tree1.get_node(tmp.ref_node).get(0),tmp.move_type,tree1])}
tmp.foreign=false;tmp.move_type=false;tmp.ref_node=false}
if(tree_component.drag_drop.marker) tree_component.drag_drop.marker.hide();if(tmp.dragged&&tmp.dragged.size()) tmp.dragged.removeClass("dragged");tmp.dragged=false;tmp.drag_help=false;tmp.drag_node=false;tmp.f_type=false;tmp.f_data=false;tmp.init_x=false;tmp.init_y=false;tmp.moving=false;tmp.appended=false;tmp.origin_tree=false;if(tmp.isdown){tmp.isdown=false;event.preventDefault();event.stopPropagation();return false}};tree_component.mousemove=function(event){var tmp=tree_component.drag_drop;var is_start=false;if(tmp.isdown){if(!tmp.moving&&Math.abs(tmp.init_x-event.pageX)<5&&Math.abs(tmp.init_y-event.pageY)<5){event.preventDefault();event.stopPropagation();return false}
else{if(!tmp.moving){tree_component.drag_drop.moving=true;is_start=true}}
if(tmp.open_time) clearTimeout(tmp.open_time);if(tmp.drag_help!==false){if(!tmp.appended){if(tmp.foreign!==false) tmp.origin_tree=$.tree.focused();$("body").append(tmp.drag_help);tmp.w=tmp.drag_help.width();tmp.appended=true}
tmp.drag_help.css({"left":(event.pageX+5),"top":(event.pageY+15)})}
if(is_start&&$.tree.drag_start!==false) $.tree.drag_start.call(null,event,tmp);if($.tree.drag!==false) $.tree.drag.call(null,event,tmp);if(event.target.tagName=="DIV"&&event.target.id=="jstree-marker") return false;var et=$(event.target);if(et.is("ins")) et=et.parent();var cnt=et.is(".tree")?et:et.parents(".tree:eq(0)");if(cnt.size()==0||!tree_component.inst[cnt.attr("id")]){if(tmp.scroll_time) clearTimeout(tmp.scroll_time);if(tmp.drag_help!==false) tmp.drag_help.find("li:eq(0) ins").addClass("forbidden");tmp.move_type=false;tmp.ref_node=false;tree_component.drag_drop.marker.hide();return false}
var tree2=tree_component.inst[cnt.attr("id")];tree2.off_height();if(tmp.scroll_time) clearTimeout(tmp.scroll_time);tmp.scroll_time=setTimeout( function(){tree2.scroll_check(event.pageX,event.pageY)},50);var mov=false;var st=cnt.scrollTop();if(event.target.tagName=="A"||event.target.tagName=="INS"){if(et.is("#jstree-dragged")) return false;if(tree2.get_node(event.target).hasClass("closed")){tmp.open_time=setTimeout( function(){tree2.open_branch(et)},500)}
var et_off=et.offset();var goTo={x:(et_off.left-1),y:(event.pageY-et_off.top)};var arr=[];if(goTo.y<tree2.li_height/3+1) arr=["before","inside","after"];else if(goTo.y>tree2.li_height*2/3-1) arr=["after","inside","before"];else{if(goTo.y<tree2.li_height/2) arr=["inside","before","after"];else arr=["inside","after","before"]}
var ok=false;var nn=(tmp.foreign==false)?tmp.origin_tree.container.find("li.dragged"):tmp.f_type;$.each(arr, function(i,val){if(tree2.check_move(nn,et,val)){mov=val;ok=true;return false}});if(ok){switch(mov){case "before":goTo.y=et_off.top-2;tree_component.drag_drop.marker.attr("class","marker");break;case "after":goTo.y=et_off.top-2+tree2.li_height;tree_component.drag_drop.marker.attr("class","marker");break;case "inside":goTo.x-=2;goTo.y=et_off.top-2+tree2.li_height/2;tree_component.drag_drop.marker.attr("class","marker_plus");break}
tmp.move_type=mov;tmp.ref_node=$(event.target);if(tmp.drag_help!==false) tmp.drag_help.find(".forbidden").removeClass("forbidden");tree_component.drag_drop.marker.css({"left":goTo.x,"top":goTo.y}).show()}}
if((et.is(".tree")||et.is("ul"))&&et.find("li:eq(0)").size()==0){var et_off=et.offset();tmp.move_type="inside";tmp.ref_node=cnt.children("ul:eq(0)");if(tmp.drag_help!==false) tmp.drag_help.find(".forbidden").removeClass("forbidden");tree_component.drag_drop.marker.attr("class","marker_plus");tree_component.drag_drop.marker.css({"left":(et_off.left+10),"top":et_off.top+15}).show()}
else if((event.target.tagName!="A"&&event.target.tagName!="INS")||!ok){if(tmp.drag_help!==false) tmp.drag_help.find("li:eq(0) ins").addClass("forbidden");tmp.move_type=false;tmp.ref_node=false;tree_component.drag_drop.marker.hide()}
event.preventDefault();event.stopPropagation();return false}
return true};$(function(){$(document).bind("mousemove.jstree",tree_component.mousemove);$(document).bind("mouseup.jstree",tree_component.mouseup)});tree_component.cut_copy={copy_nodes:false,cut_nodes:false};tree_component.css=false;tree_component.get_css=function(rule_name,delete_flag){rule_name=rule_name.toLowerCase();var css_rules=tree_component.css.cssRules||tree_component.css.rules;var j=0;do{if(css_rules.length&&j>css_rules.length+5) return false;if(css_rules[j].selectorText&&css_rules[j].selectorText.toLowerCase()==rule_name){if(delete_flag==true){if(tree_component.css.removeRule) document.styleSheets[i].removeRule(j);if(tree_component.css.deleteRule) document.styleSheets[i].deleteRule(j);return true}
else return css_rules[j]}}
while(css_rules[++j]);return false};tree_component.add_css=function(rule_name){if(tree_component.get_css(rule_name)) return false;(tree_component.css.insertRule)?tree_component.css.insertRule(rule_name+' { }',0):tree_component.css.addRule(rule_name,null,0);return tree_component.get_css(rule_name)};tree_component.remove_css=function(rule_name){return tree_component.get_css(rule_name,true)};tree_component.add_sheet=function(opts){if(opts.str){var tmp=document.createElement("style");tmp.type="text/css";if(tmp.styleSheet) tmp.styleSheet.cssText=opts.str;else tmp.appendChild(document.createTextNode(opts.str));document.getElementsByTagName("head")[0].appendChild(tmp);return tmp.sheet}
if(opts.url){if(document.createStyleSheet){try{document.createStyleSheet(opts.url)} catch(e){}}
else{var newSS=document.createElement('link');newSS.rel='stylesheet';newSS.type='text/css';newSS.media="all";newSS.href=opts.url;document.getElementsByTagName("head")[0].appendChild(newSS);return newSS.styleSheet}}};$(function(){var u=navigator.userAgent.toLowerCase();var v=(u.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,'0'])[1];var css='/* TREE LAYOUT */ .tree ul { margin:0 0 0 5px; padding:0 0 0 0; list-style-type:none; } .tree li { display:block; min-height:18px; line-height:18px; padding:0 0 0 15px; margin:0 0 0 0; /* Background fix */ clear:both; } .tree li ul { display:none; } .tree li a, .tree li span { display:inline-block;line-height:16px;height:16px;color:black;white-space:nowrap;text-decoration:none;padding:1px 4px 1px 4px;margin:0; } .tree li a:focus { outline: none; } .tree li a input, .tree li span input { margin:0;padding:0 0;display:inline-block;height:12px !important;border:1px solid white;background:white;font-size:10px;font-family:Verdana; } .tree li a input:not([class="xxx"]), .tree li span input:not([class="xxx"]) { padding:1px 0; } /* FOR DOTS */ .tree .ltr li.last { float:left; } .tree > ul li.last { overflow:visible; } /* OPEN OR CLOSE */ .tree li.open ul { display:block; } .tree li.closed ul { display:none !important; } /* FOR DRAGGING */ #jstree-dragged { position:absolute; top:-10px; left:-10px; margin:0; padding:0; } #jstree-dragged ul ul ul { display:none; } #jstree-marker { padding:0; margin:0; line-height:5px; font-size:1px; overflow:hidden; height:5px; position:absolute; left:-45px; top:-30px; z-index:1000; background-color:transparent; background-repeat:no-repeat; display:none; } #jstree-marker.marker { width:45px; background-position:-32px top; } #jstree-marker.marker_plus { width:5px; background-position:right top; } /* BACKGROUND DOTS */ .tree li li { overflow:hidden; } .tree > .ltr > li { display:table; } /* ICONS */ .tree ul ins { display:inline-block; text-decoration:none; width:16px; height:16px; } .tree .ltr ins { margin:0 4px 0 0px; } ';if(/msie/.test(u) && !/opera/.test(u)){if(parseInt(v)==6) css+='.tree li { height:18px; zoom:1; } .tree li li { overflow:visible; } .tree .ltr li.last { margin-top: expression( (this.previousSibling && /open/.test(this.previousSibling.className) ) ? "-2px" : "0"); } .marker { width:45px; background-position:-32px top; } .marker_plus { width:5px; background-position:right top; }';if(parseInt(v)==7) css+='.tree li li { overflow:visible; } .tree .ltr li.last { margin-top: expression( (this.previousSibling && /open/.test(this.previousSibling.className) ) ? "-2px" : "0"); }'}
if(/opera/.test(u)) css+='.tree > ul > li.last:after { content:"."; display: block; height:1px; clear:both; visibility:hidden; }';if(/mozilla/.test(u) && !/(compatible|webkit)/.test(u)&&v.indexOf("1.8")==0) css+='.tree .ltr li a { display:inline; float:left; } .tree li ul { clear:both; }';tree_component.css=tree_component.add_sheet({str:css})})})(jQuery);(function($){$.extend($.tree.datastores,{"html": function(){return{get: function(obj,tree,opts){return obj&&$(obj).size()?$('<div>').append(tree.get_node(obj).clone()).html():tree.container.children("ul:eq(0)").html()},parse: function(data,tree,opts,callback){if(callback) callback.call(null,data);return data},load: function(data,tree,opts,callback){if(opts.url){$.ajax({'type':opts.method,'url':opts.url,'data':data,'dataType':"html",'success': function(d,textStatus){callback.call(null,d)},'error': function(xhttp,textStatus,errorThrown){callback.call(null,false);tree.error(errorThrown+" "+textStatus)}})}
else{callback.call(null,opts.static||tree.container.children("ul:eq(0)").html())}}}},"json": function(){return{get: function(obj,tree,opts){var _this=this;if(!obj||$(obj).size()==0) obj=tree.container.children("ul").children("li");else obj=$(obj);if(!opts) opts={};if(!opts.outer_attrib) opts.outer_attrib=["id","rel","class"];if(!opts.inner_attrib) opts.inner_attrib=[];if(obj.size()>1){var arr=[];obj.each(function(){arr.push(_this.get(this,tree,opts))});return arr}
if(obj.size()==0) return [];var json={attributes:{},data:{}};if(obj.hasClass("open")) json.data.state="open";if(obj.hasClass("closed")) json.data.state="closed";for(var i in opts.outer_attrib){if(!opts.outer_attrib.hasOwnProperty(i)) continue;var val=(opts.outer_attrib[i]=="class")?obj.attr(opts.outer_attrib[i]).replace(/(^| )last( |$)/ig," ").replace(/(^| )(leaf|closed|open)( |$)/ig," "):obj.attr(opts.outer_attrib[i]);if(typeof val!="undefined"&&val.toString().replace(" ","").length>0) json.attributes[opts.outer_attrib[i]]=val;delete val}
if(tree.settings.languages.length){for(var i in tree.settings.languages){if(!tree.settings.languages.hasOwnProperty(i)) continue;var a=obj.children("a."+tree.settings.languages[i]);if(opts.force||opts.inner_attrib.length||a.children("ins").get(0).style.backgroundImage.toString().length||a.children("ins").get(0).className.length){json.data[tree.settings.languages[i]]={};json.data[tree.settings.languages[i]].title=tree.get_text(obj,tree.settings.languages[i]);if(a.children("ins").get(0).style.className.length){json.data[tree.settings.languages[i]].icon=a.children("ins").get(0).style.className}
if(a.children("ins").get(0).style.backgroundImage.length){json.data[tree.settings.languages[i]].icon=a.children("ins").get(0).style.backgroundImage.replace("url(","").replace(")","")}
if(opts.inner_attrib.length){json.data[tree.settings.languages[i]].attributes={};for(var j in opts.inner_attrib){if(!opts.inner_attrib.hasOwnProperty(j)) continue;var val=a.attr(opts.inner_attrib[j]);if(typeof val!="undefined"&&val.toString().replace(" ","").length>0) json.data[tree.settings.languages[i]].attributes[opts.inner_attrib[j]]=val;delete val}}}
else{json.data[tree.settings.languages[i]]=tree.get_text(obj,tree.settings.languages[i])}}}
else{var a=obj.children("a");json.data.title=tree.get_text(obj);if(a.children("ins").size()&&a.children("ins").get(0).className.length){json.data.icon=a.children("ins").get(0).className}
if(a.children("ins").size()&&a.children("ins").get(0).style.backgroundImage.length){json.data.icon=a.children("ins").get(0).style.backgroundImage.replace("url(","").replace(")","")}
if(opts.inner_attrib.length){json.data.attributes={};for(var j in opts.inner_attrib){if(!opts.inner_attrib.hasOwnProperty(j)) continue;var val=a.attr(opts.inner_attrib[j]);if(typeof val!="undefined"&&val.toString().replace(" ","").length>0) json.data.attributes[opts.inner_attrib[j]]=val;delete val}}}
if(obj.children("ul").size()>0){json.children=[];obj.children("ul").children("li").each(function(){json.children.push(_this.get(this,tree,opts))})}
return json},parse: function(data,tree,opts,callback){if(Object.prototype.toString.apply(data)==="[object Array]"){var str='';for(var i=0;i<data.length;i++){if(typeof data[i]=="function") continue;str+=this.parse(data[i],tree,opts)}
if(callback) callback.call(null,str);return str}
if(!data||!data.data){if(callback) callback.call(null,false);return ""}
var str='';str+="<li ";var cls=false;if(data.attributes){for(var i in data.attributes){if(!data.attributes.hasOwnProperty(i)) continue;if(i=="class"){str+=" class='"+data.attributes[i]+" ";if(data.state=="closed"||data.state=="open") str+=" "+data.state+" ";str+="' ";cls=true}
else str+=" "+i+"='"+data.attributes[i]+"' "}}
if(!cls&&(data.state=="closed"||data.state=="open")) str+=" class='"+data.state+"' ";str+=">";if(tree.settings.languages.length){for(var i=0;i<tree.settings.languages.length;i++){var attr={};attr["href"]="";attr["style"]="";attr["class"]=tree.settings.languages[i];if(data.data[tree.settings.languages[i]]&&(typeof data.data[tree.settings.languages[i]].attributes).toLowerCase()!="undefined"){for(var j in data.data[tree.settings.languages[i]].attributes){if(!data.data[tree.settings.languages[i]].attributes.hasOwnProperty(j)) continue;if(j=="style"||j=="class") attr[j]+=" "+data.data[tree.settings.languages[i]].attributes[j];else attr[j]=data.data[tree.settings.languages[i]].attributes[j]}}
str+="<a";for(var j in attr){if(!attr.hasOwnProperty(j)) continue;str+=' '+j+'="'+attr[j]+'" '}
str+=">";if(data.data[tree.settings.languages[i]]&&data.data[tree.settings.languages[i]].icon){str+="<ins "+(data.data[tree.settings.languages[i]].icon.indexOf("/")==-1?" class='"+data.data[tree.settings.languages[i]].icon+"' ":" style='background-image:url(\""+data.data[tree.settings.languages[i]].icon+"\");' ")+">&nbsp;</ins>"}
else str+="<ins>&nbsp;</ins>";str+=((typeof data.data[tree.settings.languages[i]].title).toLowerCase()!="undefined"?data.data[tree.settings.languages[i]].title:data.data[tree.settings.languages[i]])+"</a>"}}
else{var attr={};attr["href"]="";attr["style"]="";attr["class"]="";if((typeof data.data.attributes).toLowerCase()!="undefined"){for(var i in data.data.attributes){if(!data.data.attributes.hasOwnProperty(i)) continue;if(i=="style"||i=="class") attr[i]+=" "+data.data.attributes[i];else attr[i]=data.data.attributes[i]}}
str+="<a";for(var i in attr){if(!attr.hasOwnProperty(i)) continue;str+=' '+i+'="'+attr[i]+'" '}
str+=">";if(data.data.icon){str+="<ins "+(data.data.icon.indexOf("/")==-1?" class='"+data.data.icon+"' ":" style='background-image:url(\""+data.data.icon+"\");' ")+">&nbsp;</ins>"}
else str+="<ins>&nbsp;</ins>";str+=((typeof data.data.title).toLowerCase()!="undefined"?data.data.title:data.data)+"</a>"}
if(data.children&&data.children.length){str+='<ul>';for(var i=0;i<data.children.length;i++){str+=this.parse(data.children[i],tree,opts)}
str+='</ul>'}
str+="</li>";if(callback) callback.call(null,str);return str},load: function(data,tree,opts,callback){if(opts.static){callback.call(null,opts.static)}
else{$.ajax({'type':opts.method,'url':opts.url,'data':data,'dataType':"json",'success': function(d,textStatus){callback.call(null,d)},'error': function(xhttp,textStatus,errorThrown){callback.call(null,false);tree.error(errorThrown+" "+textStatus)}})}}}}})})(jQuery);

/* - ++resource++jquery.cookie.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.cookie.js?original=1
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/* - ++resource++jquery.bbq.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.bbq.js?original=1
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);

/* - ++resource++jquery.ajaxfileupload.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.ajaxfileupload.js?original=1
(function(){var d=document,w=window;
function get(element){if(typeof element=="string")
element=d.getElementById(element);return element}
function addEvent(el,type,fn){if(w.addEventListener){el.addEventListener(type,fn,false)} else if(w.attachEvent){var f=function(){fn.call(el,w.event)};el.attachEvent('on'+type,f)}}
var toElement=function(){var div=d.createElement('div');return function(html){div.innerHTML=html;var el=div.childNodes[0];div.removeChild(el);return el}}();
function hasClass(ele,cls){return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'))}
function addClass(ele,cls){if(!hasClass(ele,cls)) ele.className+=" "+cls}
function removeClass(ele,cls){var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');ele.className=ele.className.replace(reg,' ')}
if(document.documentElement["getBoundingClientRect"]){var getOffset=function(el){var box=el.getBoundingClientRect(),doc=el.ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,zoom=1;if(body.getBoundingClientRect){var bound=body.getBoundingClientRect();zoom=(bound.right-bound.left)/body.clientWidth}
if(zoom>1){clientTop=0;clientLeft=0}
var top=box.top/zoom+(window.pageYOffset||docElem&&docElem.scrollTop/zoom||body.scrollTop/zoom)-clientTop,left=box.left/zoom+(window.pageXOffset||docElem&&docElem.scrollLeft/zoom||body.scrollLeft/zoom)-clientLeft;return{top:top,left:left}}} else{var getOffset=function(el){if(w.jQuery){return jQuery(el).offset()}
var top=0,left=0;do{top+=el.offsetTop||0;left+=el.offsetLeft||0}
while(el=el.offsetParent);return{left:left,top:top}}}
function getBox(el){var left,right,top,bottom;var offset=getOffset(el);left=offset.left;top=offset.top;right=left+el.offsetWidth;bottom=top+el.offsetHeight;return{left:left,right:right,top:top,bottom:bottom}}
function getMouseCoords(e){if(!e.pageX&&e.clientX){var zoom=1;var body=document.body;if(body.getBoundingClientRect){var bound=body.getBoundingClientRect();zoom=(bound.right-bound.left)/body.clientWidth}
return{x:e.clientX/zoom+d.body.scrollLeft+d.documentElement.scrollLeft,y:e.clientY/zoom+d.body.scrollTop+d.documentElement.scrollTop}}
return{x:e.pageX,y:e.pageY}}
var getUID=function(){var id=0;return function(){return 'ValumsAjaxUpload'+id++}}();
function fileFromPath(file){return file.replace(/.*(\/|\\)/,"")}
function getExt(file){return (/[.]/.exec(file))?/[^.]+$/.exec(file.toLowerCase()):''}
Ajax_upload=AjaxUpload=function(button,options){if(button.jquery){button=button[0]} else if(typeof button=="string"&&/^#.*/.test(button)){button=button.slice(1)}
button=get(button);this._input=null;this._button=button;this._disabled=false;this._submitting=false;this._justClicked=false;this._parentDialog=d.body;if(window.jQuery&&jQuery.ui&&jQuery.ui.dialog){var parentDialog=jQuery(self._button).parents('.ui-dialog-content');if(parentDialog.length){this._parentDialog=parentDialog[0]}}
this._settings={action:'upload.php',name:'userfile',data:{},autoSubmit:true,responseType:false,onChange: function(file,extension){},onSubmit: function(file,extension){},onComplete: function(file,response){}};for(var i in options){this._settings[i]=options[i]}
this._createInput();this._rerouteClicks()}
AjaxUpload.prototype={setData: function(data){this._settings.data=data},disable: function(){this._disabled=true},enable: function(){this._disabled=false},destroy: function(){if(this._input){if(this._input.parentNode){this._input.parentNode.removeChild(this._input)}
this._input=null}},_createInput: function(){var self=this;var input=d.createElement("input");input.setAttribute('type','file');input.setAttribute('name',this._settings.name);var styles={'position':'absolute','margin':'-5px 0 0 -175px','padding':0,'width':'220px','height':'30px','fontSize':'14px','opacity':0,'cursor':'pointer','display':'none','zIndex':2147483583};for(var i in styles){input.style[i]=styles[i]}
if(!(input.style.opacity==="0")){input.style.filter="alpha(opacity=0)"}
this._parentDialog.appendChild(input);addEvent(input,'change', function(){var file=fileFromPath(this.value);if(self._settings.onChange.call(self,file,getExt(file))==false){return}
if(self._settings.autoSubmit){self.submit()}});addEvent(input,'click', function(){self.justClicked=true;setTimeout(function(){self.justClicked=false},3000)});this._input=input},_rerouteClicks: function(){var self=this;var box,dialogOffset={top:0,left:0},over=false;addEvent(self._button,'mouseover', function(e){if(!self._input||over) return;over=true;box=getBox(self._button);if(self._parentDialog!=d.body){dialogOffset=getOffset(self._parentDialog)}});addEvent(document,'mousemove', function(e){var input=self._input;if(!input||!over) return;if(self._disabled){removeClass(self._button,'hover');input.style.display='none';return}
var c=getMouseCoords(e);if((c.x>=box.left)&&(c.x<=box.right)&&(c.y>=box.top)&&(c.y<=box.bottom)){input.style.top=c.y-dialogOffset.top+'px';input.style.left=c.x-dialogOffset.left+'px';input.style.display='block';addClass(self._button,'hover')} else{over=false;if(!self.justClicked){input.style.display='none'}
removeClass(self._button,'hover')}})},_createIframe: function(){var id=getUID();var iframe=toElement('<iframe src="javascript:false;" name="'+id+'" />');iframe.id=id;iframe.style.display='none';d.body.appendChild(iframe);return iframe},submit: function(){var self=this,settings=this._settings;if(this._input.value===''){return}
var file=fileFromPath(this._input.value);if(!(settings.onSubmit.call(this,file,getExt(file))==false)){var iframe=this._createIframe();var form=this._createForm(iframe);form.appendChild(this._input);form.submit();d.body.removeChild(form);form=null;this._input=null;this._createInput();var toDeleteFlag=false;addEvent(iframe,'load', function(e){if(iframe.src=="about:blank"){if(toDeleteFlag){setTimeout( function(){d.body.removeChild(iframe)},0)}
return}
var doc=iframe.contentDocument?iframe.contentDocument:frames[iframe.id].document;if(doc.readyState&&doc.readyState!='complete'){return}
if(doc.body&&doc.body.innerHTML=="false"){return}
var response;if(doc.XMLDocument){response=doc.XMLDocument} else if(doc.body){response=doc.body.innerHTML;if(settings.responseType=='json'){response=window["eval"]("("+response+")")}} else{var response=doc}
settings.onComplete.call(self,file,response);toDeleteFlag=true;iframe.src="about:blank"})} else{d.body.removeChild(this._input);this._input=null;this._createInput()}},_createForm: function(iframe){var settings=this._settings;var form=toElement('<form method="post" enctype="multipart/form-data"></form>');form.style.display='none';form.action=settings.action;form.target=iframe.name;d.body.appendChild(form);for(var prop in settings.data){var el=d.createElement("input");el.type='hidden';el.name=prop;el.value=settings.data[prop];form.appendChild(el)}
return form}}})();

/* - jquery-integration.js - */
// http://www.eea.europa.eu/portal_javascripts/jquery-integration.js?original=1
var jq=jQuery;if(typeof cssQuery==='undefined'){var cssQuery=function(s,f){return jQuery.makeArray(jQuery(s,f))}}


/* - ++resource++jquery.tokeninput.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.tokeninput.js?original=1
(function($){var DEFAULT_SETTINGS={method:"GET",queryParam:"q",searchDelay:300,minChars:1,propertyToSearch:"name",jsonContainer:null,contentType:"json",prePopulate:null,processPrePopulate:false,hintText:"Type in a search term",noResultsText:"No results",searchingText:"Searching...",deleteText:"&times;",animateDropdown:true,theme:null,classes:null,resultsFormatter: function(item){return "<li>"+item[this.propertyToSearch]+"</li>"},tokenFormatter: function(item){return "<li><p>"+item[this.propertyToSearch]+"</p></li>"},tokenValidator: function(token){return true},addOnBlur:false,clearOnBlur:true,tokenLimit:null,tokenDelimiter:",",preventDuplicates:false,tokenValue:"id",allowNewTokens:false,onResult:null,onAdd:null,onDelete:null,onReady:null,tokenEquals: function(existentToken,newToken){if(this.allowNewTokens&&(!newToken.id||!existentToken.id)){if(existentToken[this.propertyToSearch]===newToken[this.propertyToSearch]){return true}} else if(existentToken.id===newToken.id){return true}
return false},idPrefix:"token-input-",initialResize:true};var DEFAULT_CLASSES={tokenList:"token-input-list",token:"token-input-token",tokenDelete:"token-input-delete-token",selectedToken:"token-input-selected-token",highlightedToken:"token-input-highlighted-token",dropdown:"token-input-dropdown",dropdownItem:"token-input-dropdown-item",dropdownItem2:"token-input-dropdown-item2",selectedDropdownItem:"token-input-selected-dropdown-item",inputToken:"token-input-input-token"};var POSITION={BEFORE:0,AFTER:1,END:2};var KEY={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,NUMPAD_ENTER:108,COMMA:188};var methods={init: function(url_or_data_or_function,options){var settings=$.extend({},DEFAULT_SETTINGS,options||{});return this.each(function(){$(this).data("tokenInputObject",new $.TokenList(this,url_or_data_or_function,settings))})},clear: function(){this.data("tokenInputObject").clear();return this},add: function(item){this.data("tokenInputObject").add(item);return this},remove: function(item){this.data("tokenInputObject").remove(item);return this},get: function(){return this.data("tokenInputObject").getTokens()}}
$.fn.tokenInput=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))} else{return methods.init.apply(this,arguments)}};$.TokenList=function(input,url_or_data,settings){if($.type(url_or_data)==="string"||$.type(url_or_data)==="function"){settings.url=url_or_data;var url=computeURL();if(settings.crossDomain===undefined){if(url.indexOf("://")===-1){settings.crossDomain=false} else{settings.crossDomain=(location.href.split(/\/+/g)[1] !== url.split(/\/+/g)[1])}}} else if(typeof(url_or_data)==="object"){settings.local_data=url_or_data}
if(settings.classes){settings.classes=$.extend({},DEFAULT_CLASSES,settings.classes)} else if(settings.theme){settings.classes={};$.each(DEFAULT_CLASSES, function(key,value){settings.classes[key]=value+"-"+settings.theme})} else{settings.classes=DEFAULT_CLASSES}
validateSettings(settings);var saved_tokens=[];var token_count=0;var cache=new $.TokenList.Cache();var timeout;var input_val;var input_box=$("<input type=\"text\" autocomplete=\"off\">").css({outline:"none"}).attr("id",settings.idPrefix+input.id).focus(function(){if(settings.tokenLimit===null||settings.tokenLimit!==token_count){show_dropdown_hint()}}).blur(function(){if(settings.allowNewTokens&&settings.addOnBlur){var token_label=$(this).val();if(token_label.length){add_new_token(token_label)}}
hide_dropdown();if(settings.clearOnBlur){$(this).val("")}}).bind("keyup keydown blur update",resize_input).keydown(function(event){var previous_token;var next_token;switch(event.keyCode){case KEY.LEFT:case KEY.RIGHT:case KEY.UP:case KEY.DOWN:if(!$(this).val()){previous_token=input_token.prev();next_token=input_token.next();if((previous_token.length&&previous_token.get(0)===selected_token)||(next_token.length&&next_token.get(0)===selected_token)){if(event.keyCode===KEY.LEFT||event.keyCode===KEY.UP){deselect_token($(selected_token),POSITION.BEFORE)} else{deselect_token($(selected_token),POSITION.AFTER)}} else if((event.keyCode===KEY.LEFT||event.keyCode===KEY.UP)&&previous_token.length){select_token($(previous_token.get(0)))} else if((event.keyCode===KEY.RIGHT||event.keyCode===KEY.DOWN)&&next_token.length){select_token($(next_token.get(0)))}} else{var dropdown_item=null;if(selected_dropdown_item){if(event.keyCode===KEY.DOWN||event.keyCode===KEY.RIGHT){dropdown_item=$(selected_dropdown_item).next()} else{dropdown_item=$(selected_dropdown_item).prev()}} else if(event.keyCode==KEY.DOWN){dropdown_item=$("li:first-child",dropdown)}
if(dropdown_item&&dropdown_item.length){select_dropdown_item(dropdown_item)} else if(selected_dropdown_item&&(event.keyCode==KEY.UP)){deselect_dropdown_item($(selected_dropdown_item))}
return false}
break;case KEY.BACKSPACE:previous_token=input_token.prev();if(!$(this).val().length){if(selected_token){delete_token($(selected_token));hidden_input.change()} else if(previous_token.length){select_token($(previous_token.get(0)))}
return false} else if($(this).val().length===1){hide_dropdown()} else{setTimeout(function(){do_search()},5)}
break;case KEY.TAB:case KEY.ENTER:case KEY.NUMPAD_ENTER:case KEY.COMMA:if(selected_dropdown_item){add_token($(selected_dropdown_item).data("tokeninput"));hidden_input.change();return false} else if(settings.allowNewTokens){var newTokenText=$(event.target).val();if(newTokenText){add_new_token(newTokenText);hidden_input.change();return false}}
break;case KEY.ESCAPE:hide_dropdown();return true;default:if(String.fromCharCode(event.which)){if((settings.tokenLimit===null)||(settings.tokenLimit!==token_count)){setTimeout(function(){do_search()},5)}}
break}});var hidden_input=$(input).hide().val("").focus(function(){input_box.focus()}).blur(function(){input_box.blur()});var selected_token=null;var selected_token_index=0;var selected_dropdown_item=null;var token_list=$("<ul />").addClass(settings.classes.tokenList).click(function(event){var li=$(event.target).closest("li");if(li&&li.get(0)&&$.data(li.get(0),"tokeninput")){toggle_select_token(li)} else{if(selected_token){deselect_token($(selected_token),POSITION.END)}
input_box.focus()}}).mouseover(function(event){var li=$(event.target).closest("li");if(li&&selected_token!==this){li.addClass(settings.classes.highlightedToken)}}).mouseout(function(event){var li=$(event.target).closest("li");if(li&&selected_token!==this){li.removeClass(settings.classes.highlightedToken)}}).insertBefore(hidden_input);var input_token=$("<li />").addClass(settings.classes.inputToken).appendTo(token_list).append(input_box);var dropdown=$("<div>").addClass(settings.classes.dropdown).appendTo("body").hide();var input_resizer=$("<tester/>").insertAfter(input_box).css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:input_box.css("fontSize"),fontFamily:input_box.css("fontFamily"),fontWeight:input_box.css("fontWeight"),letterSpacing:input_box.css("letterSpacing"),whiteSpace:"nowrap"});hidden_input.val("");var li_data=settings.prePopulate||hidden_input.data("pre");if(settings.processPrePopulate&&$.isFunction(settings.onResult)){li_data=settings.onResult.call(hidden_input,li_data)}
if(li_data&&li_data.length){$.each(li_data, function(index,value){insert_token(value);checkTokenLimit()})}
this.clear=function(){token_list.children("li").each(function(){if($(this).children("input").length===0){delete_token($(this))}})}
this.add=function(item){add_token(item)}
this.remove=function(item){token_list.children("li").each(function(){if($(this).children("input").length===0){var currToken=$(this).data("tokeninput");var match=true;for(var prop in item){if(item[prop]!==currToken[prop]){match=false;break}}
if(match){delete_token($(this))}}})}
this.getTokens=function(){return saved_tokens}
function validateSettings(){if(settings.allowNewTokens&&(settings.tokenValue=="id")){throw Error("Value of setting 'tokenValue' cannot be 'id' because new tokens have no id.")}}
function checkTokenLimit(){if(settings.tokenLimit!==null&&token_count>=settings.tokenLimit){input_box.hide();hide_dropdown();return}}
function resize_input(){if(input_val===(input_val=input_box.val())){return}
var escaped=input_val.replace(/&/g, '&amp;').replace(/\s/g,' ').replace(/</g, '&lt;').replace(/>/g,'&gt;');input_resizer.html(escaped);input_box.width(input_resizer.width()+30)}
function is_printable_character(keycode){return((keycode>=48&&keycode<=90)||(keycode>=96&&keycode<=111)||(keycode>=186&&keycode<=192)||(keycode>=219&&keycode<=222))}
function insert_token(item){var this_token=settings.tokenFormatter(item);this_token=$(this_token).addClass(settings.classes.token).insertBefore(input_token);$("<span>"+settings.deleteText+"</span>").addClass(settings.classes.tokenDelete).appendTo(this_token).click(function(){delete_token($(this).parent());hidden_input.change();return false});var token_data={"id":item.id};token_data[settings.propertyToSearch]=item[settings.propertyToSearch];$.data(this_token.get(0),"tokeninput",item);saved_tokens=saved_tokens.slice(0,selected_token_index).concat([token_data]).concat(saved_tokens.slice(selected_token_index));selected_token_index++;update_hidden_input(saved_tokens,hidden_input);token_count+=1;if(settings.tokenLimit!==null&&token_count>=settings.tokenLimit){input_box.hide();hide_dropdown()}
return this_token}
function add_new_token(text){var token_data={"id":null};token_data[settings.propertyToSearch]=text;add_token(token_data)}
function add_token(item){var token_label=item[settings.propertyToSearch];if(token_label.indexOf(settings.tokenDelimiter)!=-1){$.each(token_label.split(settings.tokenDelimiter), function(i,v){add_new_token(v)});return}
var callback=settings.onAdd;if(!settings.tokenValidator(token_label)){return}
if(token_count>0&&settings.preventDuplicates){var found_existing_token=null;token_list.children().each(function(){var existing_token=$(this);var existing_data=$.data(existing_token.get(0),"tokeninput");if(existing_data&&settings.tokenEquals(existing_data,item)){found_existing_token=existing_token;return false}});if(found_existing_token){select_token(found_existing_token);input_token.insertAfter(found_existing_token);input_box.focus();return}}
if(settings.tokenLimit==null||token_count<settings.tokenLimit){insert_token(item);checkTokenLimit()}
input_box.val("");hide_dropdown();if($.isFunction(callback)){callback.call(hidden_input,item)}}
function select_token(token){token.addClass(settings.classes.selectedToken);selected_token=token.get(0);input_box.val("");hide_dropdown()}
function deselect_token(token,position){token.removeClass(settings.classes.selectedToken);selected_token=null;if(position===POSITION.BEFORE){input_token.insertBefore(token);selected_token_index--} else if(position===POSITION.AFTER){input_token.insertAfter(token);selected_token_index++} else{input_token.appendTo(token_list);selected_token_index=token_count}
input_box.focus()}
function toggle_select_token(token){var previous_selected_token=selected_token;if(selected_token){deselect_token($(selected_token),POSITION.END)}
if(previous_selected_token===token.get(0)){deselect_token(token,POSITION.END)} else{select_token(token)}}
function delete_token(token){var token_data=$.data(token.get(0),"tokeninput");var callback=settings.onDelete;var index=token.prevAll().length;if(index>selected_token_index) index--;token.remove();selected_token=null;input_box.focus();saved_tokens=saved_tokens.slice(0,index).concat(saved_tokens.slice(index+1));if(index<selected_token_index) selected_token_index--;update_hidden_input(saved_tokens,hidden_input);token_count-=1;if(settings.tokenLimit!==null){input_box.show().val("").focus()}
if($.isFunction(callback)){callback.call(hidden_input,token_data)}}
function update_hidden_input(saved_tokens,hidden_input){var token_values=$.map(saved_tokens, function(el){return el[settings.tokenValue]});hidden_input.val(token_values.join(settings.tokenDelimiter))}
function hide_dropdown(){dropdown.hide().empty();selected_dropdown_item=null}
function show_dropdown(){dropdown.css({position:"absolute",top:$(token_list).offset().top+$(token_list).outerHeight(),left:$(token_list).offset().left,zindex:999}).show()}
function show_dropdown_searching(){if(settings.searchingText){dropdown.html("<p>"+settings.searchingText+"</p>");show_dropdown()}}
function show_dropdown_hint(){if(settings.hintText){dropdown.html("<p>"+settings.hintText+"</p>");show_dropdown()}}
function highlight_term(value,term){return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+term+")(?![^<>]*>)(?![^&;]+;)","gi"),"<b>$1</b>")}
function find_value_and_highlight_term(template,value,term){return template.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+value+")(?![^<>]*>)(?![^&;]+;)","g"),highlight_term(value,term))}
function populate_dropdown(query,results){if(results&&results.length){dropdown.empty();var dropdown_ul=$("<ul>").appendTo(dropdown).mouseover(function(event){select_dropdown_item($(event.target).closest("li"))}).mousedown(function(event){add_token($(event.target).closest("li").data("tokeninput"));hidden_input.change();return false}).hide();$.each(results, function(index,value){var this_li=settings.resultsFormatter(value);this_li=find_value_and_highlight_term(this_li,value[settings.propertyToSearch],query);this_li=$(this_li).appendTo(dropdown_ul);if(index%2){this_li.addClass(settings.classes.dropdownItem)} else{this_li.addClass(settings.classes.dropdownItem2)}
if(!settings.allowNewTokens&&(index===0)){select_dropdown_item(this_li)}
$.data(this_li.get(0),"tokeninput",value)});show_dropdown();if(settings.animateDropdown){dropdown_ul.slideDown("fast")} else{dropdown_ul.show()}} else{if(settings.noResultsText){dropdown.html("<p>"+settings.noResultsText+"</p>");show_dropdown()}}}
function select_dropdown_item(item){if(item){if(selected_dropdown_item){deselect_dropdown_item($(selected_dropdown_item))}
item.addClass(settings.classes.selectedDropdownItem);selected_dropdown_item=item.get(0)}}
function deselect_dropdown_item(item){item.removeClass(settings.classes.selectedDropdownItem);selected_dropdown_item=null}
function do_search(){var query=input_box.val().toLowerCase();if(query&&query.length){if(selected_token){deselect_token($(selected_token),POSITION.AFTER)}
if(query.length>=settings.minChars&&settings.tokenValidator(query)){setTimeout(function(){var check=input_box.val().toLowerCase();if(check&&check.length&&(check==query)){show_dropdown_searching();clearTimeout(timeout);run_search(query)}},settings.searchDelay)} else{hide_dropdown()}}}
function run_search(query){var cache_key=query+computeURL();var cached_results=cache.get(cache_key);if(cached_results){populate_dropdown(query,cached_results)} else{if(settings.url){var url=computeURL();var ajax_params={};ajax_params.data={};if(url.indexOf("?")>-1){var parts=url.split("?");ajax_params.url=parts[0];var param_array=parts[1].split("&");$.each(param_array, function(index,value){var kv=value.split("=");ajax_params.data[kv[0]]=kv[1]})} else{ajax_params.url=url}
ajax_params.data[settings.queryParam]=query;ajax_params.type=settings.method;ajax_params.dataType=settings.contentType;if(settings.crossDomain){ajax_params.dataType="jsonp"}
ajax_params.success=function(results){if($.isFunction(settings.onResult)){results=settings.onResult.call(hidden_input,results)}
cache.add(cache_key,settings.jsonContainer?results[settings.jsonContainer]:results);if(input_box.val().toLowerCase()===query){populate_dropdown(query,settings.jsonContainer?results[settings.jsonContainer]:results)}};$.ajax(ajax_params)} else if(settings.local_data){var results=$.grep(settings.local_data, function(row){return row[settings.propertyToSearch].toLowerCase().indexOf(query.toLowerCase())>-1});if($.isFunction(settings.onResult)){results=settings.onResult.call(hidden_input,results)}
cache.add(cache_key,results);populate_dropdown(query,results)}}}
function computeURL(){var url=settings.url;if(typeof settings.url=='function'){url=settings.url.call()}
return url}
if(settings.initialResize){resize_input()}
if($.isFunction(settings.onReady)){settings.onReady.call()}};$.TokenList.Cache=function(options){var settings=$.extend({max_size:500},options);var data={};var size=0;var flush=function(){data={};size=0};this.add=function(query,results){if(size>settings.max_size){flush()}
if(!data[query]){size+=1}
data[query]=results};this.get=function(query){return data[query]}}}(jQuery));

/* - ++resource++jquery.splitter.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.splitter.js?original=1
;(function($){$.fn.splitter=function(args){args=args||{};return this.each(function(){var zombie;
function startSplitMouse(evt){if(opts.outline)
zombie=zombie||bar.clone(false).insertAfter(A);panes.css("-webkit-user-select","none");bar.addClass(opts.activeClass);A._posSplit=A[0][opts.pxSplit]-evt[opts.eventPos];$(document).bind("mousemove",doSplitMouse).bind("mouseup",endSplitMouse)}
function doSplitMouse(evt){var newPos=A._posSplit+evt[opts.eventPos];if(opts.outline){newPos=Math.max(0,Math.min(newPos,splitter._DA-bar._DA));bar.css(opts.origin,newPos)} else
resplit(newPos)}
function endSplitMouse(evt){bar.removeClass(opts.activeClass);var newPos=A._posSplit+evt[opts.eventPos];if(opts.outline){zombie.remove();zombie=null;resplit(newPos)}
panes.css("-webkit-user-select","text");$(document).unbind("mousemove",doSplitMouse).unbind("mouseup",endSplitMouse)}
function resplit(newPos){newPos=Math.max(A._min,splitter._DA-B._max,Math.min(newPos,A._max,splitter._DA-bar._DA-B._min));bar._DA=bar[0][opts.pxSplit];bar.css(opts.origin,newPos).css(opts.fixed,splitter._DF);A.css(opts.origin,0).css(opts.split,newPos).css(opts.fixed,splitter._DF);B.css(opts.origin,newPos+bar._DA).css(opts.split,splitter._DA-bar._DA-newPos).css(opts.fixed,splitter._DF);if(!$.browser.msie)
panes.trigger("resize")}
function dimSum(jq,dims){var sum=0;for(var i=1;i<arguments.length;i++)
sum+=Math.max(parseInt(jq.css(arguments[i]))||0,0);return sum}
var vh=(args.splitHorizontal?'h':args.splitVertical?'v':args.type)||'v';var opts=$.extend({activeClass:'active',pxPerKey:8,tabIndex:0,accessKey:''},{v:{keyLeft:39,keyRight:37,cursor:"e-resize",splitbarClass:"vsplitbar",outlineClass:"voutline",type:'v',eventPos:"pageX",origin:"left",split:"width",pxSplit:"offsetWidth",side1:"Left",side2:"Right",fixed:"height",pxFixed:"offsetHeight",side3:"Top",side4:"Bottom"},h:{keyTop:40,keyBottom:38,cursor:"n-resize",splitbarClass:"hsplitbar",outlineClass:"houtline",type:'h',eventPos:"pageY",origin:"top",split:"height",pxSplit:"offsetHeight",side1:"Top",side2:"Bottom",fixed:"width",pxFixed:"offsetWidth",side3:"Left",side4:"Right"}}[vh],args);var splitter=$(this).css({position:"relative"});var panes=$(">*",splitter[0]).css({position:"absolute","z-index":"1","-moz-outline-style":"none"});var A=$(panes[0]);var B=$(panes[1]);var focuser=$('<a href="javascript:void(0)"></a>').attr({accessKey:opts.accessKey,tabIndex:opts.tabIndex,title:opts.splitbarClass}).bind($.browser.opera?"click":"focus", function(){this.focus();bar.addClass(opts.activeClass)}).bind("keydown", function(e){var key=e.which||e.keyCode;var dir=key==opts["key"+opts.side1]?1:key==opts["key"+opts.side2]?-1:0;if(dir)
resplit(A[0][opts.pxSplit]+dir*opts.pxPerKey,false)}).bind("blur", function(){bar.removeClass(opts.activeClass)});var bar=$(panes[2]||'<div></div>').insertAfter(A).css("z-index","100").append(focuser).attr({"class":opts.splitbarClass,unselectable:"on"}).css({position:"absolute","user-select":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none"}).bind("mousedown",startSplitMouse);if(/^(auto|default|)$/.test(bar.css("cursor")))
bar.css("cursor",opts.cursor);bar._DA=bar[0][opts.pxSplit];splitter._PBF=$.boxModel?dimSum(splitter,"border"+opts.side3+"Width","border"+opts.side4+"Width"):0;splitter._PBA=$.boxModel?dimSum(splitter,"border"+opts.side1+"Width","border"+opts.side2+"Width"):0;A._pane=opts.side1;B._pane=opts.side2;$.each([A,B], function(){this._min=opts["min"+this._pane]||dimSum(this,"min-"+opts.split);this._max=opts["max"+this._pane]||dimSum(this,"max-"+opts.split)||9999;this._init=opts["size"+this._pane]===true?parseInt($.curCSS(this[0],opts.split)):opts["size"+this._pane]});var initPos=A._init;if(!isNaN(B._init))
initPos=splitter[0][opts.pxSplit]-splitter._PBA-B._init-bar._DA;if(opts.cookie){if(!$.cookie)
alert('jQuery.splitter(): jQuery cookie plugin required');var ckpos=parseInt($.cookie(opts.cookie));if(!isNaN(ckpos))
initPos=ckpos;$(window).bind("unload", function(){var state=String(bar.css(opts.origin));$.cookie(opts.cookie,state,{expires:opts.cookieExpires||365,path:opts.cookiePath||document.location.pathname})})}
if(isNaN(initPos))
initPos=Math.round((splitter[0][opts.pxSplit]-splitter._PBA-bar._DA)/2);if(opts.anchorToWindow){splitter._hadjust=dimSum(splitter,"borderTopWidth","borderBottomWidth","marginBottom");splitter._hmin=Math.max(dimSum(splitter,"minHeight"),20);$(window).bind("resize", function(){var top=splitter.offset().top;var wh=$(window).height();splitter.css("height",Math.max(wh-top-splitter._hadjust,splitter._hmin)+"px");if(!$.browser.msie) splitter.trigger("resize")}).trigger("resize")}
else if(opts.resizeToWidth&&!$.browser.msie)
$(window).bind("resize", function(){splitter.trigger("resize")});splitter.bind("resize", function(e,size){if(e.target!=this) return;splitter._DF=splitter[0][opts.pxFixed]-splitter._PBF;splitter._DA=splitter[0][opts.pxSplit]-splitter._PBA;if(splitter._DF<=0||splitter._DA<=0) return;resplit(!isNaN(size)?size:(!(opts.sizeRight||opts.sizeBottom)?A[0][opts.pxSplit]:splitter._DA-B[0][opts.pxSplit]-bar._DA))}).trigger("resize",[initPos])})}})(jQuery);

/* - ++resource++jquery.reflect.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.reflect.js?original=1
(function($){$.fn.extend({reflect: function(options){options=$.extend({height:0.33,opacity:0.5},options);return this.unreflect().each(function(){var img=this;if (/^img$/i.test(img.tagName)){
function doReflect(){var reflection,reflectionHeight=Math.floor(img.height * options.height),wrapper,context,gradient;if($.browser.msie){reflection=$("<img />").attr("src",img.src).css({width:img.width,height:img.height,marginBottom:-img.height+reflectionHeight,filter:"flipv progid:DXImageTransform.Microsoft.Alpha(opacity="+(options.opacity * 100)+", style=1, finishOpacity=0, startx=0, starty=0, finishx=0, finishy="+(options.height * 100)+")"})[0]} else{reflection=$("<canvas />")[0];if(!reflection.getContext) return;context=reflection.getContext("2d");try{$(reflection).attr({width:img.width,height:reflectionHeight});context.save();context.translate(0,img.height-1);context.scale(1,-1);context.drawImage(img,0,0,img.width,img.height);context.restore();context.globalCompositeOperation="destination-out";gradient=context.createLinearGradient(0,0,0,reflectionHeight);gradient.addColorStop(0,"rgba(255, 255, 255, "+(1-options.opacity)+")");gradient.addColorStop(1,"rgba(255, 255, 255, 1.0)");context.fillStyle=gradient;context.rect(0,0,img.width,reflectionHeight);context.fill()} catch(e){return}}
$(reflection).css({display:"block",border:0});wrapper=$(/^a$/i.test(img.parentNode.tagName)?"<span />":"<div />").insertAfter(img).append([img,reflection])[0];wrapper.className=img.className;$.data(img,"reflected",wrapper.style.cssText=img.style.cssText);$(wrapper).css({width:img.width,height:img.height+reflectionHeight,overflow:"hidden"});img.style.cssText="display: block; border: 0px";img.className="reflected"}
if(img.complete) doReflect();else $(img).load(doReflect)}})},unreflect: function(){return this.unbind("load").each(function(){var img=this,reflected=$.data(this,"reflected"),wrapper;if(reflected!==undefined){wrapper=img.parentNode;img.className=wrapper.className;img.style.cssText=reflected;$.removeData(img,"reflected");wrapper.parentNode.replaceChild(img,wrapper)}})}})})(jQuery);

/* - ++resource++jquery.jqzoom.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.jqzoom.js?original=1
var JQEvent={};JQEvent.ACTIVATE='JQ-ACTIVATE';JQEvent.DEACTIVATE='JQ-DEACTIVATE';(function($){$.fn.jqzoom=function(options){var settings={zoomType:'standard',zoomWidth:200,zoomHeight:200,xOffset:10,yOffset:0,position:"right",lens:true,lensReset:false,imageOpacity:0.2,title:true,alwaysOn:false,startOpened:false,showEffect:'show',hideEffect:'hide',fadeinSpeed:'fast',fadeoutSpeed:'slow',preloadImages:true,showPreload:true,preloadText:'Loading zoom',preloadPosition:'center'};options=options||{};$.extend(settings,options);return this.each(function(){var a=$(this);var aTitle=a.attr('title');$(a).removeAttr('title');$(a).css('outline-style','none');var img=$("img",this);var imageTitle=img.attr('title');img.removeAttr('title');var smallimage=new Smallimage(img);var smallimagedata={};var btop=0;var bleft=0;var loader=null;loader=new Loader();var ZoomTitle=(trim(aTitle).length>0)?aTitle:(trim(imageTitle).length>0)?imageTitle:null;var ZoomTitleObj=new zoomTitle();var largeimage=new Largeimage(a[0].href);var lens=new Lens();var lensdata={};var largeimageloaded=false;var scale={};var stage=null;var running=false;var mousepos={};var firstime=0;var preloadshow=false;var isMouseDown=false;var dragstatus=false
smallimage.loadimage();$(this).click(function(){return false});$(this).hover(function(e){mousepos.x=e.pageX;mousepos.y=e.pageY;activate()},function(){deactivate()});if(settings.alwaysOn){setTimeout(function(){activate()},150)}
jQuery(document).bind(JQEvent.ACTIVATE, function(){activate()});jQuery(document).bind(JQEvent.DEACTIVATE, function(){deactivate()});if(settings.startOpened){var jq_timeout=setTimeout(function(){clearTimeout(jq_timeout);activate()},150)}
function activate(){if(!running){smallimage.findborder();running=true;imageTitle=img.attr('title');img.removeAttr('title');aTitle=a.attr('title');$(a).removeAttr('title');if(!largeimage||$.browser.safari){largeimage=new Largeimage(a[0].href)}
if(!largeimageloaded||$.browser.safari){largeimage.loadimage()}else{if(settings.zoomType!='innerzoom'){stage=new Stage();stage.activate()}
lens=new Lens;lens.activate()}
a[0].blur();return false}}
function deactivate(){if(settings.zoomType=='reverse'&&!settings.alwaysOn){img.css({'opacity':1})}
if(!settings.alwaysOn){running=false;largeimageloaded=false;$(lens.node).unbind('mousemove');lens.remove();if($('div.jqZoomWindow').length>0){stage.remove()}
if($('div.jqZoomTitle').length>0){ZoomTitleObj.remove()}
img.attr('title',imageTitle);a.attr('title',aTitle);$().unbind();a.unbind('mousemove');firstime=0;if(jQuery('.zoom_ieframe').length>0){jQuery('.zoom_ieframe').remove()}}else{if(settings.lensReset){switch(settings.zoomType){case 'innerzoom':largeimage.setcenter();break;default:lens.center();break}}}
if(settings.alwaysOn){activate()}};
function Smallimage(image){this.node=image[0];this.loadimage=function(){this.node.src=image[0].src};this.findborder=function(){var bordertop='';bordertop=$(img).css('border-top-width');btop='';var borderleft='';borderleft=$(img).css('border-left-width');bleft='';if(bordertop){for(i=0;i<3;i++){var x=[];x=bordertop.substr(i,1);if(isNaN(x)==false){btop=btop+''+bordertop.substr(i,1)}else{break}}}
if(borderleft){for(i=0;i<3;i++){if(!isNaN(borderleft.substr(i,1))){bleft=bleft+borderleft.substr(i,1)}else{break}}}
btop=(btop.length>0)?eval(btop):0;bleft=(bleft.length>0)?eval(bleft):0}
this.node.onload=function(){a.css({'cursor':'crosshair','display':'block'});if(a.css('position')!='absolute'&&a.parent().css('position')){a.css({'cursor':'crosshair','position':'relative','display':'block'})}
if(a.parent().css('position')!='absolute'){a.parent().css('position','relative')}
else{}
if($.browser.safari||$.browser.opera){$(img).css({position:'absolute',top:'0px',left:'0px'})}
smallimagedata.w=$(this).width();smallimagedata.h=$(this).height();smallimagedata.h=$(this).height();smallimagedata.pos=$(this).offset();smallimagedata.pos.l=$(this).offset().left;smallimagedata.pos.t=$(this).offset().top;smallimagedata.pos.r=smallimagedata.w+smallimagedata.pos.l;smallimagedata.pos.b=smallimagedata.h+smallimagedata.pos.t;a.height(smallimagedata.h);a.width(smallimagedata.w);if(settings.preloadImages){largeimage.loadimage()}};return this};
function Lens(){this.node=document.createElement("div");$(this.node).addClass('jqZoomPup');this.node.onerror=function(){$(lens.node).remove();lens=new Lens();lens.activate() };this.loadlens=function(){switch(settings.zoomType){case 'reverse':this.image=new Image();this.image.src=smallimage.node.src;this.node.appendChild(this.image);$(this.node).css({'opacity':1});break;case 'innerzoom':this.image=new Image();this.image.src=largeimage.node.src;this.node.appendChild(this.image);$(this.node).css({'opacity':1});break
default:break}
switch(settings.zoomType){case 'innerzoom':lensdata.w=smallimagedata.w;lensdata.h=smallimagedata.h;break;default:lensdata.w=(settings.zoomWidth)/scale.x;lensdata.h=(settings.zoomHeight)/scale.y;break}
$(this.node).css({width:lensdata.w+'px',height:lensdata.h+'px',position:'absolute',display:'none',borderWidth:1+'px'});a.append(this.node)}
return this};Lens.prototype.activate=function(){this.loadlens();switch(settings.zoomType){case 'reverse':img.css({'opacity':settings.imageOpacity});(settings.alwaysOn)?lens.center():lens.setposition(null);a.bind('mousemove', function(e){mousepos.x=e.pageX;mousepos.y=e.pageY;lens.setposition(e)});break;case 'innerzoom':$(this.node).css({top:0,left:0});if(settings.title){ZoomTitleObj.loadtitle()}
largeimage.setcenter();a.bind('mousemove', function(e){mousepos.x=e.pageX;mousepos.y=e.pageY;largeimage.setinner(e)});break;default:(settings.alwaysOn)?lens.center():lens.setposition(null);$(a).bind('mousemove', function(e){mousepos.x=e.pageX;mousepos.y=e.pageY;lens.setposition(e)});break}
return this};Lens.prototype.setposition=function(e){if(e){mousepos.x=e.pageX;mousepos.y=e.pageY}
if(firstime==0){var lensleft=(smallimagedata.w)/2-(lensdata.w)/2 ;var lenstop=(smallimagedata.h)/2-(lensdata.h)/2 ;$('div.jqZoomPup').show()
if(settings.lens){this.node.style.visibility='visible'}
else{this.node.style.visibility='hidden';$('div.jqZoomPup').hide()}
firstime=1}else{var lensleft=mousepos.x-smallimagedata.pos.l-(lensdata.w)/2 ;var lenstop=mousepos.y-smallimagedata.pos.t-(lensdata.h)/2 }
if(overleft()){lensleft=0+bleft}else
if(overright()){if($.browser.msie){lensleft=smallimagedata.w-lensdata.w+bleft+1 }else{lensleft=smallimagedata.w-lensdata.w+bleft-1 }}
if(overtop()){lenstop=0+btop }else
if(overbottom()){if($.browser.msie){lenstop=smallimagedata.h-lensdata.h+btop+1 }else{lenstop=smallimagedata.h-lensdata.h-1+btop }}
lensleft=parseInt(lensleft);lenstop=parseInt(lenstop);$('div.jqZoomPup',a).css({top:lenstop,left:lensleft});if(settings.zoomType=='reverse'){$('div.jqZoomPup img',a).css({'position':'absolute','top':-(lenstop-btop+1),'left':-(lensleft-bleft+1)})}
this.node.style.left=lensleft+'px';this.node.style.top=lenstop+'px';largeimage.setposition();
function overleft(){return mousepos.x-(lensdata.w+2*1)/2-bleft<smallimagedata.pos.l}
function overright(){return mousepos.x+(lensdata.w+2* 1)/2>smallimagedata.pos.r+bleft }
function overtop(){return mousepos.y-(lensdata.h+2* 1)/2-btop<smallimagedata.pos.t}
function overbottom(){return mousepos.y+(lensdata.h+2* 1)/2>smallimagedata.pos.b+btop}
return this};Lens.prototype.center=function(){$('div.jqZoomPup',a).css('display','none');var lensleft=(smallimagedata.w)/2-(lensdata.w)/2 ;var lenstop=(smallimagedata.h)/2-(lensdata.h)/2;this.node.style.left=lensleft+'px';this.node.style.top=lenstop+'px';$('div.jqZoomPup',a).css({top:lenstop,left:lensleft});if(settings.zoomType=='reverse'){$('div.jqZoomPup img',a).css({'position':'absolute','top':-(lenstop-btop+1),'left':-(lensleft-bleft+1)})}
largeimage.setposition();if($.browser.msie){$('div.jqZoomPup',a).show()}else{setTimeout(function(){$('div.jqZoomPup').fadeIn('fast')},10)}};Lens.prototype.getoffset=function(){var o={};o.left=parseInt(this.node.style.left) ;o.top=parseInt(this.node.style.top) ;return o};Lens.prototype.remove=function(){if(settings.zoomType=='innerzoom'){$('div.jqZoomPup',a).fadeOut('fast',function(){$(this).remove()})}else{$('div.jqZoomPup',a).remove()}};Lens.prototype.findborder=function(){var bordertop='';bordertop=$('div.jqZoomPup').css('borderTop');lensbtop='';var borderleft='';borderleft=$('div.jqZoomPup').css('borderLeft');lensbleft='';if($.browser.msie){var temp=bordertop.split(' ');bordertop=temp[1];var temp=borderleft.split(' ');borderleft=temp[1]}
if(bordertop){for(i=0;i<3;i++){var x=[];x=bordertop.substr(i,1);if(isNaN(x)==false){lensbtop=lensbtop+''+bordertop.substr(i,1)}else{break}}}
if(borderleft){for(i=0;i<3;i++){if(!isNaN(borderleft.substr(i,1))){lensbleft=lensbleft+borderleft.substr(i,1)}else{break}}}
lensbtop=(lensbtop.length>0)?eval(lensbtop):0;lensbleft=(lensbleft.length>0)?eval(lensbleft):0}
function Largeimage(url){this.url=url;this.node=new Image();this.loadimage=function(){if(!this.node)
this.node=new Image();this.node.style.position='absolute';this.node.style.display='none';this.node.style.left='-5000px';this.node.style.top='10px';loader=new Loader();if(settings.showPreload&&!preloadshow){loader.show();preloadshow=true}
document.body.appendChild(this.node);this.node.src=this.url}
this.node.onload=function(){this.style.display='block';var w=Math.round($(this).width());var h=Math.round($(this).height());this.style.display='none';scale.x=(w/smallimagedata.w);scale.y=(h/smallimagedata.h);if($('div.preload').length>0){$('div.preload').remove()}
largeimageloaded=true;if(settings.zoomType!='innerzoom'&&running){stage=new Stage();stage.activate()}
if(running){lens=new Lens();lens.activate() }
if($('div.preload').length>0){$('div.preload').remove()}}
return this}
Largeimage.prototype.setposition=function(){this.node.style.left=Math.ceil(-scale.x * parseInt(lens.getoffset().left)+bleft)+'px';this.node.style.top=Math.ceil(-scale.y * parseInt(lens.getoffset().top)+btop)+'px'};Largeimage.prototype.setinner=function(e){this.node.style.left=Math.ceil(-scale.x * Math.abs(e.pageX-smallimagedata.pos.l))+'px';this.node.style.top=Math.ceil(-scale.y * Math.abs(e.pageY-smallimagedata.pos.t))+'px';$('div.jqZoomPup img',a).css({'position':'absolute','top':this.node.style.top,'left':this.node.style.left})};Largeimage.prototype.setcenter=function(){this.node.style.left=Math.ceil(-scale.x * Math.abs((smallimagedata.w)/2))+'px';this.node.style.top=Math.ceil(-scale.y * Math.abs((smallimagedata.h)/2))+'px';$('div.jqZoomPup img',a).css({'position':'absolute','top':this.node.style.top,'left':this.node.style.left})};
function Stage(){var leftpos=smallimagedata.pos.l;var toppos=smallimagedata.pos.t;this.node=document.createElement("div");$(this.node).addClass('jqZoomWindow');$(this.node).css({position:'absolute',width:Math.round(settings.zoomWidth)+'px',height:Math.round(settings.zoomHeight)+'px',display:'none',zIndex:10000,overflow:'hidden'});switch(settings.position){case "right":leftpos=(smallimagedata.pos.r+Math.abs(settings.xOffset)+settings.zoomWidth<screen.width)?(smallimagedata.pos.l+smallimagedata.w+Math.abs(settings.xOffset)):(smallimagedata.pos.l-settings.zoomWidth-Math.abs(settings.xOffset));topwindow=smallimagedata.pos.t+settings.yOffset+settings.zoomHeight;toppos=(topwindow<screen.height&&topwindow>0)?smallimagedata.pos.t+settings.yOffset:smallimagedata.pos.t;break;case "left":leftpos=(smallimagedata.pos.l-Math.abs(settings.xOffset)-settings.zoomWidth>0)?(smallimagedata.pos.l-Math.abs(settings.xOffset)-settings.zoomWidth):(smallimagedata.pos.l+smallimagedata.w+Math.abs(settings.xOffset));topwindow=smallimagedata.pos.t+settings.yOffset+settings.zoomHeight;toppos=(topwindow<screen.height&&topwindow>0)?smallimagedata.pos.t+settings.yOffset:smallimagedata.pos.t;break;case "top":toppos=(smallimagedata.pos.t-Math.abs(settings.yOffset)-settings.zoomHeight>0)?(smallimagedata.pos.t-Math.abs(settings.yOffset)-settings.zoomHeight):(smallimagedata.pos.t+smallimagedata.h+Math.abs(settings.yOffset));leftwindow=smallimagedata.pos.l+settings.xOffset+settings.zoomWidth;leftpos=(leftwindow<screen.width&&leftwindow>0)?smallimagedata.pos.l+settings.xOffset:smallimagedata.pos.l;break;case "bottom":toppos=(smallimagedata.pos.b+Math.abs(settings.yOffset)+settings.zoomHeight<$('body').height())?(smallimagedata.pos.b+Math.abs(settings.yOffset)):(smallimagedata.pos.t-settings.zoomHeight-Math.abs(settings.yOffset));leftwindow=smallimagedata.pos.l+settings.xOffset+settings.zoomWidth;leftpos=(leftwindow<screen.width&&leftwindow>0)?smallimagedata.pos.l+settings.xOffset:smallimagedata.pos.l;break;default:leftpos=(smallimagedata.pos.l+smallimagedata.w+settings.xOffset+settings.zoomWidth<screen.width)?(smallimagedata.pos.l+smallimagedata.w+Math.abs(settings.xOffset)):(smallimagedata.pos.l-settings.zoomWidth-Math.abs(settings.xOffset));toppos=(smallimagedata.pos.b+Math.abs(settings.yOffset)+settings.zoomHeight<screen.height)?(smallimagedata.pos.b+Math.abs(settings.yOffset)):(smallimagedata.pos.t-settings.zoomHeight-Math.abs(settings.yOffset));break}
this.node.style.left=leftpos+'px';this.node.style.top=toppos+'px';return this}
Stage.prototype.activate=function(){if(!this.node.firstChild)
this.node.appendChild(largeimage.node);if(settings.title){ZoomTitleObj.loadtitle()}
document.body.appendChild(this.node);switch(settings.showEffect){case 'show':$(this.node).show();break;case 'fadein':$(this.node).fadeIn(settings.fadeinSpeed);break;default:$(this.node).show();break}
$(this.node).show();if($.browser.msie&&$.browser.version<7){this.ieframe=$('<iframe class="zoom_ieframe" frameborder="0" src="#"></iframe>').css({position:"absolute",left:this.node.style.left,top:this.node.style.top,zIndex:99,width:settings.zoomWidth,height:settings.zoomHeight}).insertBefore(this.node)};largeimage.node.style.display='block'}
Stage.prototype.remove=function(){switch(settings.hideEffect){case 'hide':$('.jqZoomWindow').remove();break;case 'fadeout':$('.jqZoomWindow').fadeOut(settings.fadeoutSpeed);break;default:$('.jqZoomWindow').remove();break}}
function zoomTitle(){this.node=jQuery('<div />').addClass('jqZoomTitle').html(''+ZoomTitle+'');this.loadtitle=function(){if(settings.zoomType=='innerzoom'){$(this.node).css({position:'absolute',top:smallimagedata.pos.b+3,left:(smallimagedata.pos.l+1),width:smallimagedata.w}).appendTo('body')}else{$(this.node).appendTo(stage.node)}}}
zoomTitle.prototype.remove=function(){$('.jqZoomTitle').remove()}
function Loader(){this.node=document.createElement("div");$(this.node).addClass('preload');$(this.node).html(settings.preloadText);$(this.node).appendTo("body").css('visibility','hidden');this.show=function(){if(!smallimagedata.pos){return this}
switch(settings.preloadPosition){case 'center':loadertop=smallimagedata.pos.t+(smallimagedata.h-$(this.node).height())/2;loaderleft=smallimagedata.pos.l+(smallimagedata.w-$(this.node).width())/2;break;default:var loaderoffset=this.getoffset();loadertop=!isNaN(loaderoffset.top)?smallimagedata.pos.t+loaderoffset.top:smallimagedata.pos.t+0;loaderleft=!isNaN(loaderoffset.left)?smallimagedata.pos.l+loaderoffset.left:smallimagedata.pos.l+0;break}
$(this.node).css({top:loadertop,left:loaderleft,position:'absolute',visibility:'visible'})}
return this}
Loader.prototype.getoffset=function(){var o=null;o=$('div.preload').offset();return o}})}})(jQuery);
function trim(stringa){while(stringa.substring(0,1)==' '){stringa=stringa.substring(1,stringa.length)}
while(stringa.substring(stringa.length-1,stringa.length)==' '){stringa=stringa.substring(0,stringa.length-1)}
return stringa}

/* - ++resource++jquery.timers.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.timers.js?original=1
﻿
jQuery.fn.extend({everyTime: function(interval,label,fn,times,belay){return this.each(function(){jQuery.timer.add(this,interval,label,fn,times,belay)})},oneTime: function(interval,label,fn){return this.each(function(){jQuery.timer.add(this,interval,label,fn,1)})},stopTime: function(label,fn){return this.each(function(){jQuery.timer.remove(this,label,fn)})}});jQuery.event.special
jQuery.extend({timer:{global:[],guid:1,dataKey:"jQuery.timer",regex:/^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,powers:{'ms':1,'cs':10,'ds':100,'s':1000,'das':10000,'hs':100000,'ks':1000000},timeParse: function(value){if(value==undefined||value==null)
return null;var result=this.regex.exec(jQuery.trim(value.toString()));if(result[2]){var num=parseFloat(result[1]);var mult=this.powers[result[2]]||1;return num * mult} else{return value}},add: function(element,interval,label,fn,times,belay){var counter=0;if(jQuery.isFunction(label)){if(!times)
times=fn;fn=label;label=interval}
interval=jQuery.timer.timeParse(interval);if(typeof interval!='number'||isNaN(interval)||interval<=0)
return;if(times&&times.constructor!=Number){belay=!!times;times=0}
times=times||0;belay=belay||false;var timers=jQuery.data(element,this.dataKey)||jQuery.data(element,this.dataKey,{});if(!timers[label])
timers[label]={};fn.timerID=fn.timerID||this.guid++;var handler=function(){if(belay&&this.inProgress)
return;this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false)
jQuery.timer.remove(element,label,fn);this.inProgress=false};handler.timerID=fn.timerID;if(!timers[label][fn.timerID])
timers[label][fn.timerID]=window.setInterval(handler,interval);this.global.push(element)},remove: function(element,label,fn){var timers=jQuery.data(element,this.dataKey),ret;if(timers){if(!label){for(label in timers)
this.remove(element,label,fn)} else if(timers[label]){if(fn){if(fn.timerID){window.clearInterval(timers[label][fn.timerID]);delete timers[label][fn.timerID]}} else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn]}}
for(ret in timers[label]) break;if(!ret){ret=null;delete timers[label]}}
for(ret in timers) break;if(!ret)
jQuery.removeData(element,this.dataKey)}}}});jQuery(window).bind("unload", function(){jQuery.each(jQuery.timer.global, function(index,item){jQuery.timer.remove(item)})});

/* - ++resource++jquery.galleryview.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.galleryview.js?original=1
var window_loaded=false;(function($){$.fn.galleryView=function(options){var opts=$.extend($.fn.galleryView.defaults,options);var id;var iterator=0;var item_count=0;var slide_method;var paused=false;var gallery_width;var gallery_height;var pointer_height;var pointer_width;var strip_width;var strip_height;var wrapper_width;var f_frame_width;var f_frame_height;var frame_caption_size=20;var gallery_padding;var filmstrip_margin;var filmstrip_orientation;var frame_img_scale=new Object();var panel_img_scale=new Object();var img_h=new Object();var img_w=new Object();var scale_panel_images=true;var panel_nav_displayed=false;var j_gallery;var j_filmstrip;var j_frames;var j_frame_img_wrappers;var j_panels;var j_pointer;
function showItem(i){if(opts.hover_nav_buttons_images){$('.nav-next-overlay',j_gallery).unbind('click');$('.nav-prev-overlay',j_gallery).unbind('click')}
$('.nav-next',j_gallery).unbind('click');$('.nav-prev',j_gallery).unbind('click');j_frames.unbind('click');if(opts.show_filmstrip){j_frames.removeClass('current').find('img').stop().animate({'opacity':opts.frame_opacity},opts.transition_speed);j_frames.eq(i).addClass('current').find('img').stop().animate({'opacity':1.0},opts.transition_speed)}
if(opts.show_panels&&opts.fade_panels){j_panels.fadeOut(opts.transition_speed).eq(i%item_count).fadeIn(opts.transition_speed,function(){if(!opts.show_filmstrip){if(opts.hover_nav_buttons_images){$('.nav-prev-overlay',j_gallery).click(showPrevItem);$('.nav-next-overlay',j_gallery).click(showNextItem)}
$('.nav-prev',j_gallery).click(showPrevItem);$('.nav-next',j_gallery).click(showNextItem)}})}
if(opts.show_filmstrip){if(slide_method=='strip'){j_filmstrip.stop();if(filmstrip_orientation=='horizontal'){var distance=getPos(j_frames[i]).left-(getPos(j_pointer[0]).left+(pointer_width/2)-(f_frame_width/2));var diststr=(distance>=0?'-=':'+=')+Math.abs(distance)+'px';j_filmstrip.animate({'left':diststr},opts.transition_speed,opts.easing,function(){var old_i=i;if(i>item_count){i=i%item_count;iterator=i;j_filmstrip.css('left','-'+((f_frame_width+opts.frame_gap)*i)+'px')} else if(i<=(item_count-strip_size)){i=(i%item_count)+item_count;iterator=i;j_filmstrip.css('left','-'+((f_frame_width+opts.frame_gap)*i)+'px')}
if(old_i!=i){j_frames.eq(old_i).removeClass('current').find('img').css({'opacity':opts.frame_opacity});j_frames.eq(i).addClass('current').find('img').css({'opacity':1.0})}
if(!opts.fade_panels){j_panels.hide().eq(i%item_count).show()}
if(opts.hover_nav_buttons_images){$('.nav-prev-overlay',j_gallery).click(showPrevItem);$('.nav-next-overlay',j_gallery).click(showNextItem)}
$('.nav-prev',j_gallery).click(showPrevItem);$('.nav-next',j_gallery).click(showNextItem);enableFrameClicking()})} else{var distance=getPos(j_frames[i]).top-(getPos(j_pointer[0]).top+(pointer_height)-(f_frame_height/2));var diststr=(distance>=0?'-=':'+=')+Math.abs(distance)+'px';j_filmstrip.animate({'top':diststr},opts.transition_speed,opts.easing,function(){var old_i=i;if(i>item_count){i=i%item_count;iterator=i;j_filmstrip.css('top','-'+((f_frame_height+opts.frame_gap)*i)+'px')} else if(i<=(item_count-strip_size)){i=(i%item_count)+item_count;iterator=i;j_filmstrip.css('top','-'+((f_frame_height+opts.frame_gap)*i)+'px')}
if(old_i!=i){j_frames.eq(old_i).removeClass('current').find('img').css({'opacity':opts.frame_opacity});j_frames.eq(i).addClass('current').find('img').css({'opacity':1.0})}
if(!opts.fade_panels){j_panels.hide().eq(i%item_count).show()}
if(opts.hover_nav_buttons_images){$('.nav-prev-overlay',j_gallery).click(showPrevItem);$('.nav-next-overlay',j_gallery).click(showNextItem)}
$('.nav-prev',j_gallery).click(showPrevItem);$('.nav-next',j_gallery).click(showNextItem);enableFrameClicking()})}} else if(slide_method=='pointer'){j_pointer.stop();var pos=getPos(j_frames[i]);if(filmstrip_orientation=='horizontal'){j_pointer.animate({'left':(pos.left+(f_frame_width/2)-(pointer_width/2)+'px')},opts.transition_speed,opts.easing,function(){if(!opts.fade_panels){j_panels.hide().eq(i%item_count).show()}
if(opts.hover_nav_buttons_images){$('.nav-prev-overlay',j_gallery).click(showPrevItem);$('.nav-next-overlay',j_gallery).click(showNextItem)}
$('.nav-prev',j_gallery).click(showPrevItem);$('.nav-next',j_gallery).click(showNextItem);enableFrameClicking()})} else{j_pointer.animate({'top':(pos.top+(f_frame_height/2)-(pointer_height)+'px')},opts.transition_speed,opts.easing,function(){if(!opts.fade_panels){j_panels.hide().eq(i%item_count).show()}
if(opts.hover_nav_buttons_images){$('.nav-prev-overlay',j_gallery).click(showPrevItem);$('.nav-next-overlay',j_gallery).click(showNextItem)}
$('.nav-prev',j_gallery).click(showPrevItem);$('.nav-next',j_gallery).click(showNextItem);enableFrameClicking()})}}}};
function extraWidth(el){if(!el) return 0;if(el.length==0) return 0;el=el.eq(0);var ew=0;ew+=getInt(el.css('paddingLeft'));ew+=getInt(el.css('paddingRight'));ew+=getInt(el.css('borderLeftWidth'));ew+=getInt(el.css('borderRightWidth'));return ew}
function extraHeight(el){if(!el) return 0;if(el.length==0) return 0;el=el.eq(0);var eh=0;eh+=getInt(el.css('paddingTop'));eh+=getInt(el.css('paddingBottom'));eh+=getInt(el.css('borderTopWidth'));eh+=getInt(el.css('borderBottomWidth'));return eh}
function showNextItem(){$(document).stopTime("transition");if(++iterator==j_frames.length){iterator=0}
showItem(iterator);if(!paused){$(document).everyTime(opts.transition_interval,"transition",function(){showNextItem()})}};
function showPrevItem(){$(document).stopTime("transition");if(--iterator<0){iterator=item_count-1}
showItem(iterator);if(!paused){$(document).everyTime(opts.transition_interval,"transition",function(){showNextItem()})}};
function getPos(el){var left=0,top=0;var el_id=el.id;if(el.offsetParent){do{left+=el.offsetLeft;top+=el.offsetTop} while(el=el.offsetParent)}
if(el_id==id){return{'left':left,'top':top}}
else{var gPos=getPos(j_gallery[0]);var gLeft=gPos.left;var gTop=gPos.top;return{'left':left-gLeft,'top':top-gTop}}}
function enableFrameClicking(){j_frames.each(function(i){if($('a',this).length==0){$(this).click(function(){if(iterator!=i){$(document).stopTime("transition");showItem(i);iterator=i;if(!paused){$(document).everyTime(opts.transition_interval,"transition",function(){showNextItem()})}}})}})}
function buildPanels(){j_panels.each(function(i){if($('.panel-overlay',this).length>0){$(this).append('<div class="overlay-background"></div>')}});if(!opts.show_filmstrip){$('<img />').addClass('nav-next').attr('src',opts.theme_path+opts.nav_theme+'/next.gif').appendTo(j_gallery).css({'top':((opts.panel_height-22)/2)+gallery_padding+'px','display':'none'}).click(showNextItem);$('<img />').addClass('nav-prev').attr('src',opts.theme_path+opts.nav_theme+'/prev.gif').appendTo(j_gallery).css({'top':((opts.panel_height-22)/2)+gallery_padding+'px','display':'none'}).click(showPrevItem);if(opts.hover_nav_buttons_images){$('<img />').addClass('nav-next-overlay').attr('src',opts.theme_path+opts.nav_theme+'/panel-nav-next.gif').appendTo(j_gallery).css({'top':((opts.panel_height-22)/2)+gallery_padding-10+'px','display':'none'}).click(showNextItem);$('<img />').addClass('nav-prev-overlay').attr('src',opts.theme_path+opts.nav_theme+'/panel-nav-prev.gif').appendTo(j_gallery).css({'top':((opts.panel_height-22)/2)+gallery_padding-10+'px','display':'none'}).click(showPrevItem)}}
j_panels.each(function(i){$(this).css({'width':(opts.panel_width-extraWidth(j_panels))+'px','height':(opts.panel_height-extraHeight(j_panels))+'px','position':'absolute','overflow':'hidden','display':'none'});switch(opts.filmstrip_position){case 'top':$(this).css({'top':strip_height+Math.max(gallery_padding,filmstrip_margin)+'px','left':gallery_padding+'px'});break;case 'left':$(this).css({'top':gallery_padding+'px','left':strip_width+Math.max(gallery_padding,filmstrip_margin)+'px'});break;default:$(this).css({'top':gallery_padding+'px','left':gallery_padding+'px'});break}});$('.panel-overlay',j_panels).css({'position':'absolute','zIndex':opts.zIndex,'width':(opts.panel_width-extraWidth($('.panel-overlay',j_panels)))+'px','left':'0'});$('.overlay-background',j_panels).css({'position':'absolute','zIndex':opts.zIndex-1,'width':opts.panel_width+'px','left':'0','opacity':opts.overlay_opacity});if(opts.overlay_position=='top'){$('.panel-overlay',j_panels).css('top',0);$('.overlay-background',j_panels).css('top',0)} else{$('.panel-overlay',j_panels).css('bottom',0);$('.overlay-background',j_panels).css('bottom',0)}
$('.panel iframe',j_panels).css({'width':opts.panel_width+'px','height':opts.panel_height+'px','border':'0'});if(scale_panel_images){$('img',j_panels).each(function(i){$(this).css({'height':panel_img_scale[i%item_count]*img_h[i%item_count],'width':panel_img_scale[i%item_count]*img_w[i%item_count],'position':'relative','top':(opts.panel_height-(panel_img_scale[i%item_count]*img_h[i%item_count]))/2+'px','left':(opts.panel_width-(panel_img_scale[i%item_count]*img_w[i%item_count]))/2+'px'})})}}
function buildFilmstrip(){j_filmstrip.wrap('<div class="strip_wrapper"></div>');if(slide_method=='strip'){j_frames.clone().appendTo(j_filmstrip);j_frames.clone().appendTo(j_filmstrip);j_frames=$('li',j_filmstrip)}
if(opts.show_captions){j_frames.append('<div class="caption"></div>').each(function(i){$(this).find('.caption').html($(this).find('img').attr('title'))})}
j_filmstrip.css({'listStyle':'none','margin':'0','padding':'0','width':strip_width+'px','position':'absolute','zIndex':opts.zIndex,'top':(filmstrip_orientation=='vertical'&&slide_method=='strip'?-((f_frame_height+opts.frame_gap)*iterator):0)+'px','left':(filmstrip_orientation=='horizontal'&&slide_method=='strip'?-((f_frame_width+opts.frame_gap)*iterator):0)+'px','height':strip_height+'px'});j_frames.css({'float':'left','position':'relative','height':f_frame_height+(opts.show_captions?frame_caption_size:0)+'px','width':f_frame_width+'px','zIndex':opts.zIndex+1,'padding':'0','cursor':'pointer'});switch(opts.filmstrip_position){case 'top':j_frames.css({'marginBottom':filmstrip_margin+'px','marginRight':opts.frame_gap+'px'});break;case 'bottom':j_frames.css({'marginTop':filmstrip_margin+'px','marginRight':opts.frame_gap+'px'});break;case 'left':j_frames.css({'marginRight':filmstrip_margin+'px','marginBottom':opts.frame_gap+'px'});break;case 'right':j_frames.css({'marginLeft':filmstrip_margin+'px','marginBottom':opts.frame_gap+'px'});break}
$('.img_wrap',j_frames).each(function(i){$(this).css({'height':Math.min(opts.frame_height,img_h[i%item_count]*frame_img_scale[i%item_count])+'px','width':Math.min(opts.frame_width,img_w[i%item_count]*frame_img_scale[i%item_count])+'px','position':'relative','top':(opts.show_captions&&opts.filmstrip_position=='top'?frame_caption_size:0)+Math.max(0,(opts.frame_height-(frame_img_scale[i%item_count]*img_h[i%item_count]))/2)+'px','left':Math.max(0,(opts.frame_width-(frame_img_scale[i%item_count]*img_w[i%item_count]))/2)+'px','overflow':'hidden'})});$('img',j_frames).each(function(i){$(this).css({'opacity':opts.frame_opacity,'height':img_h[i%item_count]*frame_img_scale[i%item_count]+'px','width':img_w[i%item_count]*frame_img_scale[i%item_count]+'px','position':'relative','top':Math.min(0,(opts.frame_height-(frame_img_scale[i%item_count]*img_h[i%item_count]))/2)+'px','left':Math.min(0,(opts.frame_width-(frame_img_scale[i%item_count]*img_w[i%item_count]))/2)+'px'}).mouseover(function(){$(this).stop().animate({'opacity':1.0},300)}).mouseout(function(){if(!$(this).parent().parent().hasClass('current')) $(this).stop().animate({'opacity':opts.frame_opacity},300)})});$('.strip_wrapper',j_gallery).css({'position':'absolute','overflow':'hidden'});if(filmstrip_orientation=='horizontal'){$('.strip_wrapper',j_gallery).css({'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin)+'px':opts.panel_height+gallery_padding+'px'),'left':((gallery_width-wrapper_width)/2)+gallery_padding+'px','width':wrapper_width+'px','height':strip_height+'px'})} else{$('.strip_wrapper',j_gallery).css({'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin)+'px':opts.panel_width+gallery_padding+'px'),'top':Math.max(gallery_padding,opts.frame_gap)+'px','width':strip_width+'px','height':wrapper_height+'px'})}
$('.caption',j_gallery).css({'position':'absolute','top':(opts.filmstrip_position=='bottom'?f_frame_height:0)+'px','left':'0','margin':'0','width':f_frame_width+'px','padding':'0','height':frame_caption_size+'px','overflow':'hidden','lineHeight':frame_caption_size+'px'});var pointer=$('<div></div>');pointer.addClass('pointer').appendTo(j_gallery).css({'position':'absolute','zIndex':opts.zIndex+1,'width':'0px','fontSize':'0px','lineHeight':'0%','borderTopWidth':pointer_height+'px','borderRightWidth':(pointer_width/2)+'px','borderBottomWidth':pointer_height+'px','borderLeftWidth':(pointer_width/2)+'px','borderStyle':'solid'});var transColor=$.browser.msie&&$.browser.version.substr(0,1)=='6'?'pink':'transparent'
if(!opts.show_panels){pointer.css('borderColor',transColor)}
switch(opts.filmstrip_position){case 'top':pointer.css({'bottom':(opts.panel_height-(pointer_height*2)+gallery_padding+filmstrip_margin)+'px','left':((gallery_width-wrapper_width)/2)+(slide_method=='strip'?0:((f_frame_width+opts.frame_gap)*iterator))+((f_frame_width/2)-(pointer_width/2))+gallery_padding+'px','borderBottomColor':transColor,'borderRightColor':transColor,'borderLeftColor':transColor});break;case 'bottom':pointer.css({'top':(opts.panel_height-(pointer_height*2)+gallery_padding+filmstrip_margin)+'px','left':((gallery_width-wrapper_width)/2)+(slide_method=='strip'?0:((f_frame_width+opts.frame_gap)*iterator))+((f_frame_width/2)-(pointer_width/2))+gallery_padding+'px','borderTopColor':transColor,'borderRightColor':transColor,'borderLeftColor':transColor});break;case 'left':pointer.css({'right':(opts.panel_width-pointer_width+gallery_padding+filmstrip_margin)+'px','top':(f_frame_height/2)-(pointer_height)+(slide_method=='strip'?0:((f_frame_height+opts.frame_gap)*iterator))+gallery_padding+'px','borderBottomColor':transColor,'borderRightColor':transColor,'borderTopColor':transColor});break;case 'right':pointer.css({'left':(opts.panel_width-pointer_width+gallery_padding+filmstrip_margin)+'px','top':(f_frame_height/2)-(pointer_height)+(slide_method=='strip'?0:((f_frame_height+opts.frame_gap)*iterator))+gallery_padding+'px','borderBottomColor':transColor,'borderLeftColor':transColor,'borderTopColor':transColor});break}
j_pointer=$('.pointer',j_gallery);var navNext=$('<img />');navNext.addClass('nav-next').attr('src',opts.theme_path+opts.nav_theme+'/next.gif').appendTo(j_gallery).css({'position':'absolute','cursor':'pointer'}).click(showNextItem);var navPrev=$('<img />');navPrev.addClass('nav-prev').attr('src',opts.theme_path+opts.nav_theme+'/prev.gif').appendTo(j_gallery).css({'position':'absolute','cursor':'pointer'}).click(showPrevItem);if(filmstrip_orientation=='horizontal'){navNext.css({'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin):opts.panel_height+filmstrip_margin+gallery_padding)+((f_frame_height-22)/2)+'px','right':((gallery_width+(gallery_padding*2))/2)-(wrapper_width/2)-opts.frame_gap-22+'px'});navPrev.css({'top':(opts.filmstrip_position=='top'?Math.max(gallery_padding,filmstrip_margin):opts.panel_height+filmstrip_margin+gallery_padding)+((f_frame_height-22)/2)+'px','left':((gallery_width+(gallery_padding*2))/2)-(wrapper_width/2)-opts.frame_gap-22+'px'})} else{navNext.css({'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin):opts.panel_width+filmstrip_margin+gallery_padding)+((f_frame_width-22)/2)+13+'px','top':wrapper_height+(Math.max(gallery_padding,opts.frame_gap)*2)+'px'});navPrev.css({'left':(opts.filmstrip_position=='left'?Math.max(gallery_padding,filmstrip_margin):opts.panel_width+filmstrip_margin+gallery_padding)+((f_frame_width-22)/2)-13+'px','top':wrapper_height+(Math.max(gallery_padding,opts.frame_gap)*2)+'px'})}}
function mouseIsOverGallery(x,y){var pos=getPos(j_gallery[0]);var top=pos.top;var left=pos.left;return x>left&&x<left+gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))&&y>top&&y<top+gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))}
function getInt(i){i=parseInt(i,10);if(isNaN(i)){i=0}
return i}
function buildGallery(){var gallery_images=opts.show_filmstrip?$('img',j_frames):$('img',j_panels);gallery_images.each(function(i){img_h[i]=this.height;img_w[i]=this.width;if(opts.frame_scale=='nocrop'){frame_img_scale[i]=Math.min(opts.frame_height/img_h[i],opts.frame_width/img_w[i])} else{frame_img_scale[i]=Math.max(opts.frame_height/img_h[i],opts.frame_width/img_w[i])}
if(opts.panel_scale=='nocrop'){panel_img_scale[i]=Math.min(opts.panel_height/img_h[i],opts.panel_width/img_w[i])} else{panel_img_scale[i]=Math.max(opts.panel_height/img_h[i],opts.panel_width/img_w[i])}});j_gallery.css({'position':'relative','width':gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px','height':gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px'});if(opts.show_filmstrip){buildFilmstrip();enableFrameClicking()}
if(opts.show_panels){buildPanels()}
if(opts.show_panels&&!opts.show_filmstrip&&opts.keep_nav_buttons_visible){if(opts.hover_nav_buttons_images){$('.nav-next-overlay').fadeIn('fast');$('.nav-prev-overlay').fadeIn('fast')}
$('.nav-next',j_gallery).fadeIn('fast');$('.nav-prev',j_gallery).fadeIn('fast')}
if(opts.pause_on_hover||(opts.show_panels&&!opts.show_filmstrip)){$(j_gallery).parent().mousemove(function(e){if(mouseIsOverGallery(e.pageX,e.pageY)){if(opts.pause_on_hover){if(!paused){$(document).oneTime(500,"animation_pause",function(){$(document).stopTime("transition");paused=true})}}
if(opts.show_panels&&!opts.show_filmstrip&&!panel_nav_displayed){if(!opts.keep_nav_buttons_visible){if(opts.hover_nav_buttons_images){$('.nav-next-overlay').fadeIn('fast');$('.nav-prev-overlay').fadeIn('fast')}
$('.nav-next',j_gallery).fadeIn('fast');$('.nav-prev',j_gallery).fadeIn('fast')}
panel_nav_displayed=true}} else{if(opts.pause_on_hover){$(document).stopTime("animation_pause");if(paused){$(document).everyTime(opts.transition_interval,"transition",function(){showNextItem()});paused=false}}
if(opts.show_panels&&!opts.show_filmstrip&&panel_nav_displayed){if(!opts.keep_nav_buttons_visible){if(opts.hover_nav_buttons_images){$('.nav-next-overlay').fadeOut('fast');$('.nav-prev-overlay').fadeOut('fast')}
$('.nav-next',j_gallery).fadeOut('fast');$('.nav-prev',j_gallery).fadeOut('fast')}
panel_nav_displayed=false}}})}
j_filmstrip.css('visibility','visible');j_gallery.css('visibility','visible');$('.loader',j_gallery).fadeOut('1000',function(){showItem(iterator);if(item_count>1){$(document).everyTime(opts.transition_interval,"transition",function(){showNextItem()})}})}
return this.each(function(){$(this).css('visibility','hidden');$(this).wrap("<div></div>");j_gallery=$(this).parent();j_gallery.css('visibility','hidden').attr('id',$(this).attr('id')).addClass('gallery');$(this).removeAttr('id').addClass('filmstrip');$(document).stopTime("transition");$(document).stopTime("animation_pause");id=j_gallery.attr('id');scale_panel_images=$('.panel-content',j_gallery).length==0;pointer_height=opts.pointer_size;pointer_width=opts.pointer_size*2;filmstrip_orientation=(opts.filmstrip_position=='top'||opts.filmstrip_position=='bottom'?'horizontal':'vertical');if(filmstrip_orientation=='vertical') opts.show_captions=false;j_filmstrip=$('.filmstrip',j_gallery);j_frames=$('li',j_filmstrip);j_frames.addClass('frame');if(opts.show_panels){for(i=j_frames.length-1;i>=0;i--){if(j_frames.eq(i).find('.panel-content').length>0){j_frames.eq(i).find('.panel-content').remove().prependTo(j_gallery).addClass('panel')} else{p=$('<div>');p.addClass('panel');im=$('<img />');im.attr('src',j_frames.eq(i).find('img').eq(0).attr('src')).appendTo(p);p.prependTo(j_gallery);j_frames.eq(i).find('.panel-overlay').remove().appendTo(p)}}} else{$('.panel-overlay',j_frames).remove();$('.panel-content',j_frames).remove()}
if(!opts.show_filmstrip){j_filmstrip.remove()}
else{j_frames.each(function(i){if($(this).find('a').length>0){$(this).find('a').wrap('<div class="img_wrap"></div>')} else{$(this).find('img').wrap('<div class="img_wrap"></div>')}});j_frame_img_wrappers=$('.img_wrap',j_frames)}
j_panels=$('.panel',j_gallery);if(!opts.show_panels){opts.panel_height=0;opts.panel_width=0}
f_frame_width=opts.frame_width+extraWidth(j_frame_img_wrappers);f_frame_height=opts.frame_height+extraHeight(j_frame_img_wrappers);item_count=opts.show_panels?j_panels.length:j_frames.length;if(filmstrip_orientation=='horizontal'){strip_size=opts.show_panels?Math.floor((opts.panel_width-((opts.frame_gap+22)*2))/(f_frame_width+opts.frame_gap)):Math.min(item_count,opts.filmstrip_size)} else{strip_size=opts.show_panels?Math.floor((opts.panel_height-(opts.frame_gap+22))/(f_frame_height+opts.frame_gap)):Math.min(item_count,opts.filmstrip_size)}
if(strip_size>=item_count){slide_method='pointer';strip_size=item_count}
else{slide_method='strip'}
iterator=(strip_size<item_count?item_count:0)+opts.start_frame-1;filmstrip_margin=(opts.show_panels?getInt(j_filmstrip.css('marginTop')):0);j_filmstrip.css('margin','0px');if(filmstrip_orientation=='horizontal'){gallery_width=opts.show_panels?opts.panel_width:(strip_size*(f_frame_width+opts.frame_gap))+44+opts.frame_gap;gallery_height=(opts.show_panels?opts.panel_height:0)+(opts.show_filmstrip?f_frame_height+filmstrip_margin+(opts.show_captions?frame_caption_size:0):0)} else{gallery_height=opts.show_panels?opts.panel_height:(strip_size*(f_frame_height+opts.frame_gap))+22;gallery_width=(opts.show_panels?opts.panel_width:0)+(opts.show_filmstrip?f_frame_width+filmstrip_margin:0)}
if(filmstrip_orientation=='horizontal'){if(slide_method=='pointer'){strip_width=(f_frame_width*item_count)+(opts.frame_gap*(item_count))}
else{strip_width=(f_frame_width*item_count*3)+(opts.frame_gap*(item_count*3))}} else{strip_width=(f_frame_width+filmstrip_margin)}
if(filmstrip_orientation=='horizontal'){strip_height=(f_frame_height+filmstrip_margin+(opts.show_captions?frame_caption_size:0))} else{if(slide_method=='pointer'){strip_height=(f_frame_height*item_count+opts.frame_gap*(item_count))}
else{strip_height=(f_frame_height*item_count*3)+(opts.frame_gap*(item_count*3))}}
wrapper_width=((strip_size*f_frame_width)+((strip_size-1)*opts.frame_gap));wrapper_height=((strip_size*f_frame_height)+((strip_size-1)*opts.frame_gap));gallery_padding=getInt(j_gallery.css('paddingTop'));j_gallery.css('padding','0px');galleryPos=getPos(j_gallery[0]);$('<div>').addClass('loader').css({'position':'absolute','zIndex':'1200','opacity':1,'top':'0px','left':'0px','width':gallery_width+(filmstrip_orientation=='horizontal'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px','height':gallery_height+(filmstrip_orientation=='vertical'?(gallery_padding*2):gallery_padding+Math.max(gallery_padding,filmstrip_margin))+'px'}).appendTo(j_gallery);if(!window_loaded){$(window).load(function(){window_loaded=true;buildGallery()})} else{buildGallery()}})};$.fn.galleryView.defaults={show_panels:true,show_filmstrip:true,panel_width:600,panel_height:400,frame_width:60,frame_height:40,start_frame:1,filmstrip_size:3,transition_speed:800,transition_interval:4000,overlay_opacity:0.7,frame_opacity:0.3,pointer_size:8,nav_theme:'dark',easing:'swing',filmstrip_position:'bottom',overlay_position:'bottom',panel_scale:'nocrop',frame_scale:'crop',frame_gap:5,show_captions:false,fade_panels:true,pause_on_hover:false,hover_nav_buttons_images:true,keep_nav_buttons_visible:false,theme_path:"../../++resource++galleryview/themes/",zIndex:999}})(jQuery);

/* - ++resource++jquery.flashembed.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.flashembed.js?original=1
function flashembed(root,userParams,flashvars){
function getHTML(){var html="";if(typeof flashvars=='function'){flashvars=flashvars()}
if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){html='<embed type="application/x-shockwave-flash" ';if(params.id){extend(params,{name:params.id})}
for(var key in params){if(params[key]!==null){html+=[key]+'="'+params[key]+'"\n\t'}}
if(flashvars){html+='flashvars=\''+concatVars(flashvars)+'\''}
html+='/>'} else{html='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';html+='width="'+params.width+'" height="'+params.height+'"';if(!params.id&&document.all){params.id="_"+(""+Math.random()).substring(5)}
if(params.id){html+=' id="'+params.id+'"'}
html+='>';html+='\n\t<param name="movie" value="'+params.src+'" />';params.id=params.src=params.width=params.height=null;for(var k in params){if(params[k]!==null){html+='\n\t<param name="'+k+'" value="'+params[k]+'" />'}}
if(flashvars){html+='\n\t<param name="flashvars" value=\''+concatVars(flashvars)+'\' />'}
html+="</object>";if(debug){alert(html)}}
return html}
function init(name){var timer=setInterval(function(){var doc=document;var el=doc.getElementById(name);if(el){flashembed(el,userParams,flashvars);clearInterval(timer)} else if(doc&&doc.getElementsByTagName&&doc.getElementById&&doc.body){clearInterval(timer)}},13);return true}
function extend(to,from){if(from){for(key in from){if(from.hasOwnProperty(key)){to[key]=from[key]}}}}
var params={src:'#',width:'100%',height:'100%',version:null,onFail:null,expressInstall:null,debug:false,bgcolor:'#ffffff',allowfullscreen:true,allowscriptaccess:'always',quality:'high',type:'application/x-shockwave-flash',pluginspage:'http://www.adobe.com/go/getflashplayer'};if(typeof userParams=='string'){userParams={src:userParams}}
extend(params,userParams);var version=flashembed.getVersion();var required=params.version;var express=params.expressInstall;var debug=params.debug;if(typeof root=='string'){var el=document.getElementById(root);if(el){root=el} else{return init(root)}}
if(!root){return}
if(!required||flashembed.isSupported(required)){params.onFail=params.version=params.expressInstall=params.debug=null;root.innerHTML=getHTML();return root.firstChild} else if(params.onFail){var ret=params.onFail.call(params,flashembed.getVersion(),flashvars);if(ret){root.innerHTML=ret}} else if(required&&express&&flashembed.isSupported([6,65])){extend(params,{src:express});flashvars={MMredirectURL:location.href,MMplayerType:'PlugIn',MMdoctitle:document.title};root.innerHTML=getHTML()} else{if(root.innerHTML.replace(/\s/g,'')!==''){} else{root.innerHTML="<h2>Flash version "+required+" or greater is required</h2>"+"<h3>"+(version[0]>0?"Your version is "+version:"You have no flash plugin installed")+"</h3>"+"<p>Download latest version from <a href='"+params.pluginspage+"'>here</a></p>"}}
function concatVars(vars){var out="";for(var key in vars){if(vars[key]){out+=[key]+'='+asString(vars[key])+'&'}}
return out.substring(0,out.length-1)}
function asString(obj){switch(typeOf(obj)){case 'string':return '"'+obj.replace(new RegExp('(["\\\\])','g'),'\\$1')+'"';case 'array':return '['+map(obj, function(el){return asString(el)}).join(',')+']';case 'function':return '"function()"';case 'object':var str=[];for(var prop in obj){if(obj.hasOwnProperty(prop)){str.push('"'+prop+'":'+asString(obj[prop]))}}
return '{'+str.join(',')+'}'}
return String(obj).replace(/\s/g, " ").replace(/\'/g,"\"")}
function typeOf(obj){if(obj===null||obj===undefined){return false}
var type=typeof obj;return(type=='object'&&obj.push)?'array':type}
if(window.attachEvent){window.attachEvent("onbeforeunload", function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}
function map(arr,func){var newArr=[];for(var i in arr){if(arr.hasOwnProperty(i)){newArr[i]=func(arr[i])}}
return newArr}
return root}
if(typeof jQuery=='function'){(function($){$.fn.extend({flashembed: function(params,flashvars){return this.each(function(){flashembed(this,params,flashvars)})}})})(jQuery)}
flashembed=flashembed||{};flashembed.getVersion=function(){var version=[0,0];if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){var _d=navigator.plugins["Shockwave Flash"].description;if(typeof _d!="undefined"){_d=_d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var _m=parseInt(_d.replace(/^(.*)\..*$/,"$1"),10);var _r=/r/.test(_d)?parseInt(_d.replace(/^.*r(.*)$/,"$1"),10):0;version=[_m,_r]}} else if(window.ActiveXObject){try{var _a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")} catch(e){try{_a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");version=[6,0];_a.AllowScriptAccess="always"} catch(ee){if(version[0]==6){return}}
try{_a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")} catch(eee){}}
if(typeof _a=="object"){_d=_a.GetVariable("$version");if(typeof _d!="undefined"){_d=_d.replace(/^\S+\s+(.*)$/,"$1").split(",");version=[parseInt(_d[0],10),parseInt(_d[2],10)]}}}
return version};flashembed.isSupported=function(version){var now=flashembed.getVersion();var ret=(now[0]>version[0])||(now[0]==version[0]&&now[1]>=version[1]);return ret};

/* - eea-responsive.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-responsive.js?original=1
jQuery(document).ready(function($){if(!window.EEA){window.EEA={}}
window.EEA.isPrintPdf=$("body").hasClass("body-print");var doc=document.documentElement;var $secondary_portaltabs=$("<ul id='secondary-portaltabs'></ul>"),global_nav=$("#portal-globalnav"),$global_nav_children=global_nav.children();if($global_nav_children.length===7){$global_nav_children.slice($global_nav_children.length-3).wrapAll($secondary_portaltabs)}
var $tabbed_menu;var tabbed_menu_found=false;var $eea_tabs_with_arrows=$(".eea-tabs-arrows"),eea_tabs_with_arrows_found=$eea_tabs_with_arrows.length;
function escapeRegExp(string){return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}
function replaceAll(string,find,replace){return string.replace(new RegExp(escapeRegExp(find),"g"),replace)}
function make_tabs_into_accordions($tab,$tabs_panel){if(!$tabs_panel.length){return}
var css=$tabs_panel.attr("class");if(css){css=replaceAll(css,"eea-tabs-panels","eea-accordion-panels");css=tabbed_menu_found?replaceAll(css,"tabbedmenu-panel","eea-accordion-panels tabbed-accordion-menu"):css;$tabs_panel.attr("class",css)}
$tabs_panel.addClass("collapsed-by-default eea-tabs-transformed");var $tabs_panels=$tabs_panel.find(".eea-tabs-panel");var $tabs_tabs=$tab.find("li");$tabs_tabs.each(function(idx,el){var $panel=$tabs_panels.eq(idx);var $el=$(el);var link=$el.find("a")[0];$panel.attr("class","eea-accordion-panel");if(!$panel.find(".pane").length){$panel.wrapInner("<div class='pane' />")}
$panel.show();var $accordion_title=$panel.find(".eea-accordion-title");var link_is_current=link.className.indexOf("current")!==-1;if($accordion_title.length){if(link_is_current&&!$accordion_title.hasClass('current')){$tabs_panels.find('.pane').hide();$accordion_title.click()}
return}
var $result=$("<h2 />",{"class":(link&&link.className.indexOf("current")!==-1)?"eea-accordion-title current":"eea-accordion-title",id:link?link.id:'',html:link.innerHTML||el.innerHTML});$result.append('<span class="eea-icon eea-icon-right"></span>');$result.prependTo($panel)});$tab.addClass("js-eea-tabs-to-hide hidden");if(window.EEA&&window.EEA.eea_accordion){window.EEA.eea_accordion($tabs_panel)}}
function make_accordions_into_tabs(){var $tabs_accordion=$(".eea-tabs-transformed");if(!$tabs_accordion.length){return}
$tabs_accordion.each(function(idx,item){var $item=$(item);var css=$item.attr("class");if(css){css=tabbed_menu_found?replaceAll(css,"eea-accordion-panels tabbed-accordion-menu","tabbedmenu-panel"):css;css=replaceAll(css,"eea-accordion-panels","eea-tabs-panels");$item.attr("class",css)}
$item.removeClass("collapsed-by-default eea-tabs-transformed");var $tabs_accordions=$item.find(".eea-accordion-panel");$tabs_accordions.each(function(idx,panel){var $panel=$(panel);var $parent=$panel.closest(".eea-tabs-panels");var $tabs=$parent.hasClass("eea-tabs-panels-soer")?$(".eea-tabs-soer"):$panel.parent().prev() ;$panel.attr("class","eea-tabs-panel");if($("h2.current",$panel).length){$tabs.find('a').removeClass('current').eq(idx).addClass("current").click();$panel.show()} else{$panel.hide()}})});$(".js-eea-tabs-to-hide").removeClass("hidden")}
var $buttonnavbar=$("button.navbar-toggle");var $soer_tabs=$(".eea-tabs-soer"),$soer_tabs_found=$soer_tabs.length;var $notransform=$(".eea-tabs-panels-arrows, .eea-tabs-panels-soer, #whatsnew-gallery");$(window).resize(_.debounce(function(){if($buttonnavbar.css("display")!=="none"){var $tabs_panel=$(".eea-tabs-panels").not($notransform);if($tabs_panel.length){$tabs_panel.each(function(idx,tab_panel){var $tab_panel=$(tab_panel);make_tabs_into_accordions($tab_panel.prev(".eea-tabs"),$tab_panel)})}
if(tabbed_menu_found){make_tabs_into_accordions($tabbed_menu.find("ul"),$(".tabbedmenu-panel"))}
if(eea_tabs_with_arrows_found){make_tabs_into_accordions($eea_tabs_with_arrows,$(".eea-tabs-panels-arrows"))}
if($soer_tabs_found){make_tabs_into_accordions($soer_tabs,$(".eea-tabs-panels-soer"))}}
else{make_accordions_into_tabs()}},500));$(window).trigger("resize");var $navbar_header=$(".navbar-header");var $portal_logo_link=$("#portal-logo-link");if(!$navbar_header.children("#portal-logo-link-header").length){$portal_logo_link.clone().attr("id","portal-logo-link-header").prependTo($navbar_header)}
var $faceted_left_column=$("#faceted-left-column").addClass("eea-accordion-panels collapsed-by-default non-exclusive");var $faceted_right_column=$("#faceted-right-column").addClass("eea-accordion-panels collapsed-by-default non-exclusive");$faceted_left_column.find(".faceted-widget").addClass("widget-fieldset").appendTo($faceted_right_column);$faceted_right_column.find(".faceted-widget").addClass("widget-fieldset").each(function(idx,el){var $el=$(el);$el.addClass("eea-accordion-panel");var $children=$el.wrapInner("<div class='pane' />");var $legend=$children.find("legend");var $h2=$("<h2 />",{"html":$legend.text(),"class":"eea-accordion-title eea-icon-right-container"});$h2.prependTo($el)});window.setTimeout(function(){$(".eea-right-section-slider").find(".eea-icon").removeClass("animated")},5000);var $right_area=$("#right-area").addClass("eea-section eea-right-section");$("<a href='#' class='pull-right eea-faceted-filter'>Filter »</a>").appendTo(".faceted-text-widget");$(".eea-faceted-filter").click(function(e){e.preventDefault();$right_area.prev().click()});var mobile_desktop=false;var window_height=window.outerHeight||window.innerHeight;if(window.innerWidth<768&&window_height>768||window.innerWidth>768&&window_height<601){mobile_desktop=true}
window.mobile_desktop_browser_resolution=mobile_desktop;if(window_height>=600&&window.innerWidth>767&&!mobile_desktop){return}
var $nav_collapse=$("#bs-example-navbar-collapse-1");var client_height=doc.clientHeight;
function setMaxHeight(client_height){$nav_collapse.css("max-height",client_height-60)}
setMaxHeight(client_height);
function height(){if(window.navigator.userAgent.indexOf("iPhone")!==-1){return doc.clientHeight}
else{return window.outerHeight}}
var mqOrientation=window.matchMedia&&window.matchMedia("(orientation: portrait)");if(!mqOrientation){return}
mqOrientation.addListener(function(){setMaxHeight(height())});var $holder=$("<div class='eea-accordion-panels collapsed-by-default non-exclusive' />");
function turn_cross_panels_into_accordions($el){var lists=$el.find("li");lists.each(function(idx,el){var $acordion_panel=$("<div  />",{id:el.id,"class":"eea-accordion-panel"});var $el=$(el);var $old_panel=$("#tip-"+el.id);var $panel=$("<div />",{"class":"pane",html:$old_panel.find(".panel-content").html()});var $result=$("<h2 />",{"class":"eea-icon-right-container",html:$el.find("a").text()});$result.appendTo($acordion_panel);$panel.appendTo($acordion_panel);$acordion_panel.appendTo($holder)})}
var $secondary_portaltabs_modified=$("#secondary-portaltabs");if(!$secondary_portaltabs_modified.find(".eea-accordion-panels").length){$holder.prependTo($secondary_portaltabs_modified);(function(){var $cross_site_top_panels=$("#portal-externalsites, #portal-siteactions");$cross_site_top_panels.each(function(idx,el){var $el=$(el);turn_cross_panels_into_accordions($el)})})()}
var lastScrollTop=0;var $header_holder=$("#header-holder");var $navbar=$header_holder.find(".navbar");$navbar.addClass("eea-scrolling-toggle-visibility");var navbar_content=$header_holder.find(".navbar-collapse")[0];
function navScroll(){var faceted=document.querySelectorAll(".faceted-results")[0];if(faceted&&faceted.style.opacity){return}
if($buttonnavbar.css("display")==="none"){return}
var $keep_visible=$(".eea-scrolling-keep-visible");var $items=$(".eea-scrolling-toggle-visibility");var st=$(this).scrollTop();if(st>lastScrollTop){$items.each(function(idx,el){if(el.className.indexOf("is-eea-hidden")===-1&&navbar_content.className.indexOf("in")===-1){if(!$keep_visible.length){el.className+=" is-eea-hidden"}}})} else{$items.each(function(idx,el){if(el.className.indexOf("is-eea-hidden")!==-1){el.className=el.className.substr(0,el.className.length-14)}})}
lastScrollTop=st}
var lazyNavScroll=_.throttle(navScroll,10);$(window).scroll(lazyNavScroll)});

/* - ++resource++jquery.fancybox.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++jquery.fancybox.js?original=1
;(function($){var tmp,loading,overlay,wrap,outer,content,close,title,nav_left,nav_right,selectedIndex=0,selectedOpts={},selectedArray=[],currentIndex=0,currentOpts={},currentArray=[],ajaxLoader=null,imgPreloader=new Image(),imgRegExp=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,swfRegExp=/[^\.]\.(swf)\s*$/i,loadingTimer,loadingFrame=1,titleHeight=0,titleStr='',start_pos,final_pos,busy=false,fx=$.extend($('<div/>')[0],{prop:0}),isIE6=$.browser.msie&&$.browser.version<7&&!window.XMLHttpRequest,_abort=function(){loading.hide();imgPreloader.onerror=imgPreloader.onload=null;if(ajaxLoader){ajaxLoader.abort()}
tmp.empty()},_error=function(){if(false===selectedOpts.onError(selectedArray,selectedIndex,selectedOpts)){loading.hide();busy=false;return}
selectedOpts.titleShow=false;selectedOpts.width='auto';selectedOpts.height='auto';tmp.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');_process_inline()},_start=function(){var obj=selectedArray[selectedIndex],href,type,title,str,emb,ret;_abort();selectedOpts=$.extend({},$.fn.fancybox.defaults,(typeof $(obj).data('fancybox')=='undefined'?selectedOpts:$(obj).data('fancybox')));ret=selectedOpts.onStart(selectedArray,selectedIndex,selectedOpts);if(ret===false){busy=false;return} else if(typeof ret=='object'){selectedOpts=$.extend(selectedOpts,ret)}
title=selectedOpts.title||(obj.nodeName?$(obj).attr('title'):obj.title)||'';if(obj.nodeName&&!selectedOpts.orig){selectedOpts.orig=$(obj).children("img:first").length?$(obj).children("img:first"):$(obj)}
if(title===''&&selectedOpts.orig&&selectedOpts.titleFromAlt){title=selectedOpts.orig.attr('alt')}
href=selectedOpts.href||(obj.nodeName?$(obj).attr('href'):obj.href)||null;if((/^(?:javascript)/i).test(href)||href=='#'){href=null}
if(selectedOpts.type){type=selectedOpts.type;if(!href){href=selectedOpts.content}} else if(selectedOpts.content){type='html'} else if(href){if(href.match(imgRegExp)){type='image'} else if(href.match(swfRegExp)){type='swf'} else if($(obj).hasClass("iframe")){type='iframe'} else if(href.indexOf("#")===0){type='inline'} else{type='ajax'}}
if(!type){_error();return}
if(type=='inline'){obj=href.substr(href.indexOf("#"));type=$(obj).length>0?'inline':'ajax'}
selectedOpts.type=type;selectedOpts.href=href;selectedOpts.title=title;if(selectedOpts.autoDimensions){if(selectedOpts.type=='html'||selectedOpts.type=='inline'||selectedOpts.type=='ajax'){selectedOpts.width='auto';selectedOpts.height='auto'} else{selectedOpts.autoDimensions=false}}
if(selectedOpts.modal){selectedOpts.overlayShow=true;selectedOpts.hideOnOverlayClick=false;selectedOpts.hideOnContentClick=false;selectedOpts.enableEscapeButton=false;selectedOpts.showCloseButton=false}
selectedOpts.padding=parseInt(selectedOpts.padding,10);selectedOpts.margin=parseInt(selectedOpts.margin,10);tmp.css('padding',(selectedOpts.padding+selectedOpts.margin));$('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function(){$(this).replaceWith(content.children())});switch(type){case 'html':tmp.html(selectedOpts.content);_process_inline();break;case 'inline':if($(obj).parent().is('#fancybox-content')===true){busy=false;return}
$('<div class="fancybox-inline-tmp" />').hide().insertBefore($(obj)).bind('fancybox-cleanup', function(){$(this).replaceWith(content.children())}).bind('fancybox-cancel', function(){$(this).replaceWith(tmp.children())});$(obj).appendTo(tmp);_process_inline();break;case 'image':busy=false;$.fancybox.showActivity();imgPreloader=new Image();imgPreloader.onerror=function(){_error()};imgPreloader.onload=function(){busy=true;imgPreloader.onerror=imgPreloader.onload=null;_process_image()};imgPreloader.src=href;break;case 'swf':selectedOpts.scrolling='no';str='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+selectedOpts.width+'" height="'+selectedOpts.height+'"><param name="movie" value="'+href+'"></param>';emb='';$.each(selectedOpts.swf, function(name,val){str+='<param name="'+name+'" value="'+val+'"></param>';emb+=' '+name+'="'+val+'"'});str+='<embed src="'+href+'" type="application/x-shockwave-flash" width="'+selectedOpts.width+'" height="'+selectedOpts.height+'"'+emb+'></embed></object>';tmp.html(str);_process_inline();break;case 'ajax':busy=false;$.fancybox.showActivity();selectedOpts.ajax.win=selectedOpts.ajax.success;ajaxLoader=$.ajax($.extend({},selectedOpts.ajax,{url:href,data:selectedOpts.ajax.data||{},error: function(XMLHttpRequest,textStatus,errorThrown){if(XMLHttpRequest.status>0){_error()}},success: function(data,textStatus,XMLHttpRequest){var o=typeof XMLHttpRequest=='object'?XMLHttpRequest:ajaxLoader;if(o.status==200){if(typeof selectedOpts.ajax.win=='function'){ret=selectedOpts.ajax.win(href,data,textStatus,XMLHttpRequest);if(ret===false){loading.hide();return} else if(typeof ret=='string'||typeof ret=='object'){data=ret}}
tmp.html(data);_process_inline()}}}));break;case 'iframe':_show();break}},_process_inline=function(){var
w=selectedOpts.width,h=selectedOpts.height;if(w.toString().indexOf('%')>-1){w=parseInt(($(window).width()-(selectedOpts.margin * 2)) * parseFloat(w)/100,10)+'px'} else{w=w=='auto'?'auto':w+'px'}
if(h.toString().indexOf('%')>-1){h=parseInt(($(window).height()-(selectedOpts.margin * 2)) * parseFloat(h)/100,10)+'px'} else{h=h=='auto'?'auto':h+'px'}
tmp.wrapInner('<div style="width:'+w+';height:'+h+';overflow: '+(selectedOpts.scrolling=='auto'?'auto':(selectedOpts.scrolling=='yes'?'scroll':'hidden'))+';position:relative;"></div>');selectedOpts.width=tmp.width();selectedOpts.height=tmp.height();_show()},_process_image=function(){selectedOpts.width=imgPreloader.width;selectedOpts.height=imgPreloader.height;$("<img />").attr({'id':'fancybox-img','src':imgPreloader.src,'alt':selectedOpts.title}).appendTo(tmp);_show()},_show=function(){var pos,equal;loading.hide();if(wrap.is(":visible")&&false===currentOpts.onCleanup(currentArray,currentIndex,currentOpts)){$.event.trigger('fancybox-cancel');busy=false;return}
busy=true;$(content.add(overlay)).unbind();$(window).unbind("resize.fb scroll.fb");$(document).unbind('keydown.fb');if(wrap.is(":visible")&&currentOpts.titlePosition!=='outside'){wrap.css('height',wrap.height())}
currentArray=selectedArray;currentIndex=selectedIndex;currentOpts=selectedOpts;if(currentOpts.overlayShow){overlay.css({'background-color':currentOpts.overlayColor,'opacity':currentOpts.overlayOpacity,'cursor':currentOpts.hideOnOverlayClick?'pointer':'auto','height':$(document).height()});if(!overlay.is(':visible')){if(isIE6){$('select:not(#fancybox-tmp select)').filter(function(){return this.style.visibility!=='hidden'}).css({'visibility':'hidden'}).one('fancybox-cleanup', function(){this.style.visibility='inherit'})}
overlay.show()}} else{overlay.hide()}
final_pos=_get_zoom_to();_process_title();if(wrap.is(":visible")){$(close.add(nav_left).add(nav_right)).hide();pos=wrap.position(),start_pos={top:pos.top,left:pos.left,width:wrap.width(),height:wrap.height()};equal=(start_pos.width==final_pos.width&&start_pos.height==final_pos.height);content.fadeTo(currentOpts.changeFade,0.3, function(){var finish_resizing=function(){content.html(tmp.contents()).fadeTo(currentOpts.changeFade,1,_finish)};$.event.trigger('fancybox-change');content.empty().removeAttr('filter').css({'border-width':currentOpts.padding,'width':final_pos.width-currentOpts.padding * 2,'height':selectedOpts.autoDimensions?'auto':final_pos.height-titleHeight-currentOpts.padding * 2});if(equal){finish_resizing()} else{fx.prop=0;$(fx).animate({prop:1},{duration:currentOpts.changeSpeed,easing:currentOpts.easingChange,step:_draw,complete:finish_resizing})}});return}
wrap.removeAttr("style");content.css('border-width',currentOpts.padding);if(currentOpts.transitionIn=='elastic'){start_pos=_get_zoom_from();content.html(tmp.contents());wrap.show();if(currentOpts.opacity){final_pos.opacity=0}
fx.prop=0;$(fx).animate({prop:1},{duration:currentOpts.speedIn,easing:currentOpts.easingIn,step:_draw,complete:_finish});return}
if(currentOpts.titlePosition=='inside'&&titleHeight>0){title.show()}
content.css({'width':final_pos.width-currentOpts.padding * 2,'height':selectedOpts.autoDimensions?'auto':final_pos.height-titleHeight-currentOpts.padding * 2}).html(tmp.contents());wrap.css(final_pos).fadeIn(currentOpts.transitionIn=='none'?0:currentOpts.speedIn,_finish)},_format_title=function(title){if(title&&title.length){if(currentOpts.titlePosition=='float'){return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+title+'</td><td id="fancybox-title-float-right"></td></tr></table>'}
return '<div id="fancybox-title-'+currentOpts.titlePosition+'">'+title+'</div>'}
return false},_process_title=function(){titleStr=currentOpts.title||'';titleHeight=0;title.empty().removeAttr('style').removeClass();if(currentOpts.titleShow===false){title.hide();return}
titleStr=$.isFunction(currentOpts.titleFormat)?currentOpts.titleFormat(titleStr,currentArray,currentIndex,currentOpts):_format_title(titleStr);if(!titleStr||titleStr===''){title.hide();return}
title.addClass('fancybox-title-'+currentOpts.titlePosition).html(titleStr).appendTo('body').show();switch(currentOpts.titlePosition){case 'inside':title.css({'width':final_pos.width-(currentOpts.padding * 2),'marginLeft':currentOpts.padding,'marginRight':currentOpts.padding});titleHeight=title.outerHeight(true);title.appendTo(outer);final_pos.height+=titleHeight;break;case 'over':title.css({'marginLeft':currentOpts.padding,'width':final_pos.width-(currentOpts.padding * 2),'bottom':currentOpts.padding}).appendTo(outer);break;case 'float':title.css('left',parseInt((title.width()-final_pos.width-40)/2,10) *-1).appendTo(wrap);break;default:title.css({'width':final_pos.width-(currentOpts.padding * 2),'paddingLeft':currentOpts.padding,'paddingRight':currentOpts.padding}).appendTo(wrap);break}
title.hide()},_set_navigation=function(){if(currentOpts.enableEscapeButton||currentOpts.enableKeyboardNav){$(document).bind('keydown.fb', function(e){if(e.keyCode==27&&currentOpts.enableEscapeButton){e.preventDefault();$.fancybox.close()} else if((e.keyCode==37||e.keyCode==39)&&currentOpts.enableKeyboardNav&&e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'&&e.target.tagName!=='SELECT'){e.preventDefault();$.fancybox[e.keyCode==37?'prev':'next']()}})}
if(!currentOpts.showNavArrows){nav_left.hide();nav_right.hide();return}
if((currentOpts.cyclic&&currentArray.length>1)||currentIndex!==0){nav_left.show()}
if((currentOpts.cyclic&&currentArray.length>1)||currentIndex!=(currentArray.length-1)){nav_right.show()}},_finish=function(){if(!$.support.opacity){content.get(0).style.removeAttribute('filter');wrap.get(0).style.removeAttribute('filter')}
if(selectedOpts.autoDimensions){content.css('height','auto')}
wrap.css('height','auto');if(titleStr&&titleStr.length){title.show()}
if(currentOpts.showCloseButton){close.show()}
_set_navigation();if(currentOpts.hideOnContentClick){content.bind('click',$.fancybox.close)}
if(currentOpts.hideOnOverlayClick){overlay.bind('click',$.fancybox.close)}
$(window).bind("resize.fb",$.fancybox.resize);if(currentOpts.centerOnScroll){$(window).bind("scroll.fb",$.fancybox.center)}
if(currentOpts.type=='iframe'){$('<iframe id="fancybox-frame" name="fancybox-frame'+new Date().getTime()+'" frameborder="0" hspace="0" '+($.browser.msie?'allowtransparency="true""':'')+' scrolling="'+selectedOpts.scrolling+'" src="'+currentOpts.href+'"></iframe>').appendTo(content)}
wrap.show();busy=false;$.fancybox.center();currentOpts.onComplete(currentArray,currentIndex,currentOpts);_preload_images()},_preload_images=function(){var href,objNext;if((currentArray.length-1)>currentIndex){href=currentArray[currentIndex+1].href;if(typeof href!=='undefined'&&href.match(imgRegExp)){objNext=new Image();objNext.src=href}}
if(currentIndex>0){href=currentArray[currentIndex-1].href;if(typeof href!=='undefined'&&href.match(imgRegExp)){objNext=new Image();objNext.src=href}}},_draw=function(pos){var dim={width:parseInt(start_pos.width+(final_pos.width-start_pos.width) * pos,10),height:parseInt(start_pos.height+(final_pos.height-start_pos.height) * pos,10),top:parseInt(start_pos.top+(final_pos.top-start_pos.top) * pos,10),left:parseInt(start_pos.left+(final_pos.left-start_pos.left) * pos,10)};if(typeof final_pos.opacity!=='undefined'){dim.opacity=pos<0.5?0.5:pos}
wrap.css(dim);content.css({'width':dim.width-currentOpts.padding * 2,'height':dim.height-(titleHeight * pos)-currentOpts.padding * 2})},_get_viewport=function(){return [$(window).width()-(currentOpts.margin * 2),$(window).height()-(currentOpts.margin * 2),$(document).scrollLeft()+currentOpts.margin,$(document).scrollTop()+currentOpts.margin]},_get_zoom_to=function(){var view=_get_viewport(),to={},resize=currentOpts.autoScale,double_padding=currentOpts.padding * 2,ratio;if(currentOpts.width.toString().indexOf('%')>-1){to.width=parseInt((view[0] * parseFloat(currentOpts.width))/100,10)} else{to.width=currentOpts.width+double_padding}
if(currentOpts.height.toString().indexOf('%')>-1){to.height=parseInt((view[1] * parseFloat(currentOpts.height))/100,10)} else{to.height=currentOpts.height+double_padding}
if(resize&&(to.width>view[0]||to.height>view[1])){if(selectedOpts.type=='image'||selectedOpts.type=='swf'){ratio=(currentOpts.width)/(currentOpts.height);if((to.width)>view[0]){to.width=view[0];to.height=parseInt(((to.width-double_padding)/ratio)+double_padding,10)}
if((to.height)>view[1]){to.height=view[1];to.width=parseInt(((to.height-double_padding) * ratio)+double_padding,10)}} else{to.width=Math.min(to.width,view[0]);to.height=Math.min(to.height,view[1])}}
to.top=parseInt(Math.max(view[3]-20,view[3]+((view[1]-to.height-40) * 0.5)),10);to.left=parseInt(Math.max(view[2]-20,view[2]+((view[0]-to.width-40) * 0.5)),10);return to},_get_obj_pos=function(obj){var pos=obj.offset();pos.top+=parseInt(obj.css('paddingTop'),10)||0;pos.left+=parseInt(obj.css('paddingLeft'),10)||0;pos.top+=parseInt(obj.css('border-top-width'),10)||0;pos.left+=parseInt(obj.css('border-left-width'),10)||0;pos.width=obj.width();pos.height=obj.height();return pos},_get_zoom_from=function(){var orig=selectedOpts.orig?$(selectedOpts.orig):false,from={},pos,view;if(orig&&orig.length){pos=_get_obj_pos(orig);from={width:pos.width+(currentOpts.padding * 2),height:pos.height+(currentOpts.padding * 2),top:pos.top-currentOpts.padding-20,left:pos.left-currentOpts.padding-20}} else{view=_get_viewport();from={width:currentOpts.padding * 2,height:currentOpts.padding * 2,top:parseInt(view[3]+view[1] * 0.5,10),left:parseInt(view[2]+view[0] * 0.5,10)}}
return from},_animate_loading=function(){if(!loading.is(':visible')){clearInterval(loadingTimer);return}
$('div',loading).css('top',(loadingFrame *-40)+'px');loadingFrame=(loadingFrame+1)%12};$.fn.fancybox=function(options){if(!$(this).length){return this}
$(this).data('fancybox',$.extend({},options,($.metadata?$(this).metadata():{}))).unbind('click.fb').bind('click.fb', function(e){e.preventDefault();if(busy){return}
busy=true;$(this).blur();selectedArray=[];selectedIndex=0;var rel=$(this).attr('rel')||'';if(!rel||rel==''||rel==='nofollow'){selectedArray.push(this)} else{selectedArray=$("a[rel="+rel+"], area[rel="+rel+"]");selectedIndex=selectedArray.index(this)}
_start();return});return this};$.fancybox=function(obj){var opts;if(busy){return}
busy=true;opts=typeof arguments[1]!=='undefined'?arguments[1]:{};selectedArray=[];selectedIndex=parseInt(opts.index,10)||0;if($.isArray(obj)){for(var i=0,j=obj.length;i<j;i++){if(typeof obj[i]=='object'){$(obj[i]).data('fancybox',$.extend({},opts,obj[i]))} else{obj[i]=$({}).data('fancybox',$.extend({content:obj[i]},opts))}}
selectedArray=jQuery.merge(selectedArray,obj)} else{if(typeof obj=='object'){$(obj).data('fancybox',$.extend({},opts,obj))} else{obj=$({}).data('fancybox',$.extend({content:obj},opts))}
selectedArray.push(obj)}
if(selectedIndex>selectedArray.length||selectedIndex<0){selectedIndex=0}
_start()};$.fancybox.showActivity=function(){clearInterval(loadingTimer);loading.show();loadingTimer=setInterval(_animate_loading,66)};$.fancybox.hideActivity=function(){loading.hide()};$.fancybox.next=function(){return $.fancybox.pos(currentIndex+1)};$.fancybox.prev=function(){return $.fancybox.pos(currentIndex-1)};$.fancybox.pos=function(pos){if(busy){return}
pos=parseInt(pos);selectedArray=currentArray;if(pos>-1&&pos<currentArray.length){selectedIndex=pos;_start()} else if(currentOpts.cyclic&&currentArray.length>1){selectedIndex=pos>=currentArray.length?0:currentArray.length-1;_start()}
return};$.fancybox.cancel=function(){if(busy){return}
busy=true;$.event.trigger('fancybox-cancel');_abort();selectedOpts.onCancel(selectedArray,selectedIndex,selectedOpts);busy=false};$.fancybox.close=function(){if(busy||wrap.is(':hidden')){return}
busy=true;if(currentOpts&&false===currentOpts.onCleanup(currentArray,currentIndex,currentOpts)){busy=false;return}
_abort();$(close.add(nav_left).add(nav_right)).hide();$(content.add(overlay)).unbind();$(window).unbind("resize.fb scroll.fb");$(document).unbind('keydown.fb');content.find('iframe').attr('src',isIE6&&/^https/i.test(window.location.href||'')?'javascript:void(false)':'about:blank');if(currentOpts.titlePosition!=='inside'){title.empty()}
wrap.stop();
function _cleanup(){overlay.fadeOut('fast');title.empty().hide();wrap.hide();$.event.trigger('fancybox-cleanup');content.empty();currentOpts.onClosed(currentArray,currentIndex,currentOpts);currentArray=selectedOpts=[];currentIndex=selectedIndex=0;currentOpts=selectedOpts={};busy=false}
if(currentOpts.transitionOut=='elastic'){start_pos=_get_zoom_from();var pos=wrap.position();final_pos={top:pos.top,left:pos.left,width:wrap.width(),height:wrap.height()};if(currentOpts.opacity){final_pos.opacity=1}
title.empty().hide();fx.prop=1;$(fx).animate({prop:0},{duration:currentOpts.speedOut,easing:currentOpts.easingOut,step:_draw,complete:_cleanup})} else{wrap.fadeOut(currentOpts.transitionOut=='none'?0:currentOpts.speedOut,_cleanup)}};$.fancybox.resize=function(){if(overlay.is(':visible')){overlay.css('height',$(document).height())}
$.fancybox.center(true)};$.fancybox.center=function(){var view,align;if(busy){return}
align=arguments[0]===true?1:0;view=_get_viewport();if(!align&&(wrap.width()>view[0]||wrap.height()>view[1])){return}
wrap.stop().animate({'top':parseInt(Math.max(view[3]-20,view[3]+((view[1]-content.height()-40) * 0.5)-currentOpts.padding)),'left':parseInt(Math.max(view[2]-20,view[2]+((view[0]-content.width()-40) * 0.5)-currentOpts.padding))},typeof arguments[0]=='number'?arguments[0]:200)};$.fancybox.init=function(){if($("#fancybox-wrap").length){return}
$('body').append(tmp=$('<div id="fancybox-tmp"></div>'),loading=$('<div id="fancybox-loading"><div></div></div>'),overlay=$('<div id="fancybox-overlay"></div>'),wrap=$('<div id="fancybox-wrap"></div>'));outer=$('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(wrap);outer.append(content=$('<div id="fancybox-content"></div>'),close=$('<a id="fancybox-close"></a>'),title=$('<div id="fancybox-title"></div>'),nav_left=$('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),nav_right=$('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));close.click($.fancybox.close);loading.click($.fancybox.cancel);nav_left.click(function(e){e.preventDefault();$.fancybox.prev()});nav_right.click(function(e){e.preventDefault();$.fancybox.next()});if($.fn.mousewheel){wrap.bind('mousewheel.fb', function(e,delta){if(busy){e.preventDefault()} else if($(e.target).get(0).clientHeight==0||$(e.target).get(0).scrollHeight===$(e.target).get(0).clientHeight){e.preventDefault();$.fancybox[delta>0?'prev':'next']()}})}
if(!$.support.opacity){wrap.addClass('fancybox-ie')}
if(isIE6){loading.addClass('fancybox-ie6');wrap.addClass('fancybox-ie6');$('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||'')?'javascript:void(false)':'about:blank')+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer)}};$.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:'auto',width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:'transparent'},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:'#777',titleShow:true,titlePosition:'float',titleFormat:null,titleFromAlt:false,transitionIn:'fade',transitionOut:'fade',speedIn:300,speedOut:300,changeSpeed:300,changeFade:'fast',easingIn:'swing',easingOut:'swing',showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart: function(){},onCancel: function(){},onComplete: function(){},onCleanup: function(){},onClosed: function(){},onError: function(){}};$(document).ready(function(){$.fancybox.init()})})(jQuery);

/* - eeareferencebrowser.js - */
// http://www.eea.europa.eu/portal_javascripts/eeareferencebrowser.js?original=1
var EEAReferenceBrowser={version:'4.0'};EEAReferenceBrowser.debug=false;var AssertException=function(message){this.message=message};AssertException.prototype.toString=function(){return 'AssertException: '+this.message};var assert=function(exp,message){if(!exp&&EEAReferenceBrowser.debug){throw new AssertException(message)}};EEAReferenceBrowser.Events=function(){this.BASKET_ADD='EEA-REFERENCEBROWSER-BASKET-ADD';this.BASKET_DELETE='EEA-REFERENCEBROWSER-BASKET-DELETE';this.AJAX_START='EEA-REFERENCEBROWSER-AJAX-START';this.AJAX_STOP='EEA-REFERENCEBROWSER-AJAX-STOP';this.SAVE='EEA-REFERENCEBROWSER-SAVE';this.CANCEL='EEA-REFERENCEBROWSER-CANCEL';this.CLOSE='EEA-REFERENCEBROWSER-CLOSE';this.SAVED='EEA-REFERENCEBROWSER-SAVED';this.FINISHEDUPDATE='EEA-REFERENCEBROWSER-FINISHEDUPDATE'};EEAReferenceBrowser.Events.prototype={};EEAReferenceBrowser.Tab=function(context,parent){this.parent=parent;this.context=context;this.panel=context.getPanes().eq(0);this.tab=context.getCurrentTab();this.name=this.tab.attr('id');this.url=jQuery('.tab-url',this.tab).text();this.panel.height(parent.height-145);this.panel.css('overflow','auto');var self=this;Faceted.Load(0,this.url+'/');jQuery(Faceted.Events).bind(Faceted.Events.AJAX_QUERY_SUCCESS, function(){self.setup_links()})};EEAReferenceBrowser.Tab.prototype={get_icon: function(){return jQuery('<div>').addClass('ui-icon').addClass('ui-icon-extlink').addClass('ui-icon-custom-add')},setup_links: function(){var results=jQuery('#faceted-results',this.panel);this.folder_summary_view(results);this.tabular_view(results);this.album_view(results);this.folder_listing(results);var tab=this.tab.parent();jQuery(".eea-refwidget-popup .loading").remove()},folder_summary_view: function(context){var items=jQuery('.tileItem',context);jQuery('a',items).click(function(){return false});items.addClass('refbrowser-faceted-addable-item');items.attr('title','Click to add it to current relations');items.prepend(this.get_icon());var js_context=this;items.click(function(){var self=jQuery(this);var divname='#'+js_context.parent.name+'-popup-selected-items';assert(jQuery(divname).length===1,"The popup for selected elements could not be found");self.effect('transfer',{to:divname},'slow', function(){jQuery(js_context.parent.events).trigger(js_context.parent.events.BASKET_ADD,{url:jQuery('.tileHeadline a',self).attr('href')})})})},tabular_view: function(context){var js_context=this;var table=jQuery('table',context);jQuery('a',table).click(function(){return false});table.css('width','100%');var th=jQuery('thead tr',table);th.append(jQuery('<th>').width(20));var rows=jQuery('tbody tr',table);rows.each(function(){var self=jQuery(this);self.attr('title','Click to add it to current relations');var td=jQuery('<td>');td.append(js_context.get_icon());self.append(td);self.click(function(){self.effect('transfer',{to:'#'+js_context.parent.name+'-popup-selected-items'},'slow', function(){jQuery(js_context.parent.events).trigger(js_context.parent.events.BASKET_ADD,{url:jQuery('a',self).attr('href')})})})});jQuery('tr',context).addClass('refbrowser-faceted-addable-item')},album_view: function(context){var js_context=this;var items=jQuery('.photoAlbumEntry',context);jQuery('a',items).click(function(){return false});items.addClass('refbrowser-faceted-addable-item');items.attr('title','Click on the plus icon to add it to current relations');var icon=this.get_icon().removeClass('ui-icon-extlink').addClass('ui-icon-plus').addClass('ui-icon-album-add').appendTo(items);items.click(function(){var self=jQuery(this);self.effect('transfer',{to:'#'+js_context.parent.name+'-popup-selected-items'},'slow', function(){jQuery(js_context.parent.events).trigger(js_context.parent.events.BASKET_ADD,{url:jQuery('a',self).attr('href')})})})},folder_listing: function(context){var js_context=this;var items=jQuery('dt',context);jQuery('a',items).click(function(){return false});items.addClass('refbrowser-faceted-addable-item');items.attr('title','Click to add it to current relations');items.prepend(this.get_icon());items.click(function(){var self=jQuery(this);self.effect('transfer',{to:'#'+js_context.parent.name+'-popup-selected-items'},'slow', function(){jQuery(js_context.parent.events).trigger(js_context.parent.events.BASKET_ADD,{url:jQuery('a',self).attr('href')})})})}};EEAReferenceBrowser.Basket=function(context,parent){this.context=context;this.parent=parent;this.multiple=this.parent.storageedit.attr('multiple')?true:false;this.context.height(this.parent.height-115);this.context.css('overflow','auto');jQuery('.tileItem',this.context).attr('title','Click and drag to change order');this.context.sortable({items:'.tileItem',placeholder:'ui-state-highlight'});this.initialize();var self=this;jQuery(self.parent.events).bind(self.parent.events.BASKET_ADD,
function(evt,data){self.basket_add_clicked(data)});jQuery(self.parent.events).bind(self.parent.events.AJAX_START,
function(evt,data){jQuery('h4',self.context).addClass('ui-state-working')});jQuery(self.parent.events).bind(self.parent.events.AJAX_STOP,
function(evt,data){jQuery('h4',self.context).removeClass('ui-state-working')});jQuery(self.parent.events).bind(self.parent.events.SAVE,
function(evt,data){self.save()});jQuery(self.parent.events).bind(self.parent.events.CANCEL,
function(evt,data){self.cancel()});jQuery(self.parent.events).bind(self.parent.events.CLOSE,
function(evt,data){self.close()})};EEAReferenceBrowser.Basket.prototype={initialize: function(){jQuery('.tileItem',this.context).prepend(this.trash_icon());jQuery('.ui-icon-basket-trash',this.context).click(function(){var self=jQuery(this);self.parent().slideUp(function(){jQuery(this).remove()})})},trash_icon: function(){return jQuery('<div>').addClass('ui-icon').addClass('ui-icon-trash').addClass('ui-icon-basket-trash').text('X')},get_url: function(url){var last_slash=url.lastIndexOf('/');var view=url.slice(last_slash+1,url.length);url=url.slice(0,last_slash);if(!view){return url}
if(view==='view'){return url}
if(view.indexOf('@@')===0){return url}
if(view.indexOf('index_html')!==-1){return url}
if(view.indexOf('index.html')!==-1){return url}
if(view.indexOf('_view')!==-1){return url}
return url+'/'+view},basket_add_clicked: function(data){var url=this.get_url(data.url);var query={};query.mode='edit';query.field=this.parent.name;query.nocache=new Date().getTime();var self=this;jQuery(self.parent.events).trigger(self.parent.events.AJAX_START);jQuery.get(url+'/@@eeareferencebrowser-popup-selecteditem.html',query, function(data){self.basket_add(data);jQuery(self.parent.events).trigger(self.parent.events.AJAX_STOP)})},basket_add: function(data){var data_dom=jQuery(data);var uid=jQuery('input[type=checkbox]',data_dom).val();var exists=jQuery('input[value='+uid+']',this.context);if(exists.length){var parent=exists.parent();parent.addClass('ui-pulsate-item');parent.effect('pulsate',{},200, function(){jQuery(this).removeClass('ui-pulsate-item')})}else{var basket=jQuery('.eea-ref-selecteditems',this.context);if(!this.multiple){basket.empty()}
data_dom.prepend(this.trash_icon());jQuery('.ui-icon-basket-trash',data_dom).click(function(){var self=jQuery(this);self.parent().slideUp(function(){jQuery(this).remove()})});basket.prepend(data_dom);data_dom.addClass('ui-pulsate-item');data_dom.effect('pulsate',{},200, function(){jQuery(this).removeClass('ui-pulsate-item')})}},save: function(){var self=this;var storage=self.parent.storageedit;var values=jQuery('input[type=checkbox]',this.context);storage.empty();if(!this.multiple&&!values.length){var option=jQuery('<option>').attr('selected','selected');option.val('');option.text('<No relation set>');storage.append(option)}
values.each(function(){var input=jQuery(this);var val=input.val();var option=jQuery('<option>').attr('selected','selected');option.text(val);option.val(val);option.data(input.data());storage.append(option)});jQuery(self.parent.events).trigger(self.parent.events.SAVED,{msg:values})},cancel: function(){return},close: function(){var self=this;var url=self.parent.skip_portal_factory('@@eeareferencebrowser-popup-selecteditems.html');var query={};query.mode='edit';query.field=this.parent.name;query.uids=this.parent.storageedit.val();query.nocache=new Date().getTime();jQuery.get(url,query, function(data){jQuery('.eea-ref-selecteditems',self.context).html(data);self.initialize()})}};EEAReferenceBrowser.Widget=function(name,options){this.name=name;this.options=options||{};this.fieldname=this.options.fieldname||name;this.context=jQuery('#'+name+"-widget");this.popup=jQuery('#'+name+'-popup',this.context);this.tips=jQuery('.popup-tips',this.popup);this.workspace=jQuery('.popup-tabs',this.popup);this.storageedit=jQuery('#'+name,this.context);this.storageview=jQuery('.eea-ref-selecteditems-box',this.context);this.basket=null;this.button=jQuery('.eea-ref-popup-button',this.context);this.current_tab=null;this.position=0;assert(this.context.length===1,"The following important element of the widget could not be found: context");assert(this.popup.length===1,"The following important element of the widget could not be found: popup");assert(this.storageedit.length===1,"The following important element of the widget could not be found: storageedit");this.events=new EEAReferenceBrowser.Events();this.width=jQuery(window).width() * 0.85;this.height=jQuery(window).height() * 0.95;var js_context=this;this.popup.dialog({bgiframe:true,modal:true,closeOnEscape:false,autoOpen:false,width:js_context.width,height:js_context.height,resize:false,dialogClass:'eea-refwidget-popup',buttons:{'Done': function(){jQuery(js_context.events).trigger(js_context.events.SAVE)},'Cancel': function(){jQuery(js_context.events).trigger(js_context.events.CANCEL);jQuery(this).dialog('close')}},close: function(){jQuery(js_context.events).trigger(js_context.events.CLOSE);Faceted.Cleanup();jQuery('.popup-tabs #faceted-form').remove();jQuery('ul',js_context.workspace).data('tabs').destroy();jQuery(window).scrollTop(js_context.position)}});var basket=jQuery('.popup-selected-items',this.popup);this.basket=new EEAReferenceBrowser.Basket(basket,this);this.button.click(function(){js_context.popup_open()});if(this.storageview.length){this.storageview.click(function(){js_context.popup_open()})}
jQuery(this.events).bind(this.events.SAVED, function(evt,data){js_context.saved(data)});this.tips.click(function(){jQuery(this).hide('blind')});jQuery(Faceted.Events).bind(Faceted.Events.WINDOW_WIDTH_CHANGED, function(evt,data){if(data){js_context.width=data.width * 0.85;js_context.popup.dialog("option","width",js_context.width);js_context.popup.dialog("option","position",'center')}})};EEAReferenceBrowser.Widget.prototype={popup_open: function(){this.position=jQuery(window).scrollTop();jQuery(window).scrollTop(0);var js_context=this;var index=this.default_tab();jQuery('ul',this.workspace).tabs('div.panes > div',{effect:'ajax',initialIndex:index,onBeforeClick: function(evt,idx){Faceted.Cleanup();jQuery('.popup-tabs #faceted-form').remove()},onClick: function(evt,idx){var self=this;var panel=this.getPanes();if(!panel.find('#faceted-form').length){panel.load(this.getCurrentTab().attr('href'), function(){js_context.tab_selected(self);panel.show()})}
else{js_context.tab_selected(self);panel.show()}}});this.popup.dialog('open');jQuery(Faceted.Events).trigger(Faceted.Events.WINDOW_WIDTH_CHANGED);this.tips.show()},default_tab: function(){var tabs=this.options.tabs;if(!this.options.tabs){if(window._selected_tab){tabs={'selected':window._selected_tab}} else{return 0}}
var name=tabs.selected;if(!name){return 0}
if(name.indexOf(this.name)!==0){name=this.name+'-'+name}
var index=jQuery('#'+name,this.popup);if(!index){return 0}
var lis=jQuery('.formTabs li.formTab',this.workspace);var idx=0;lis.each(function(i){if(jQuery('#'+name,jQuery(this)).length){idx=i;return false}});return idx},tab_selected: function(ui){this.current_tab=new EEAReferenceBrowser.Tab(ui,this)},skip_portal_factory: function(url){if(window.location.pathname.indexOf('portal_factory')===-1){return url}
var base_url=window.location.pathname.split('portal_factory')[0];return base_url+url},saved: function(data){var area=this.storageview;if(area.length){area.empty();area.append(jQuery('<img src="../eeareferencebrowser-loading.gif" />'));var self=this;var url=self.skip_portal_factory('@@eeareferencebrowser-popup-selecteditems.html');var query={};var event=this.events.FINISHEDUPDATE;query.mode='view';query.field=self.fieldname;query.uids=this.storageedit.val();query.nocache=new Date().getTime();jQuery.get(url,query, function(data){area.html(data);jQuery(document).trigger(event,data)})}
this.popup.dialog('close')}};

/* - faceted_view.js - */
// http://www.eea.europa.eu/portal_javascripts/faceted_view.js?original=1
var Faceted={version:'2.0'};Faceted.Events={};Faceted.Events.INITIALIZE='FACETED-INITIALIZE';Faceted.Events.AJAX_QUERY_START='FACETED-AJAX-QUERY-START';Faceted.Events.AJAX_QUERY_SUCCESS='FACETED-AJAX-QUERY-SUCCESS';Faceted.Events.QUERY_INITIALIZED='FACETED-QUERY-INITIALIZED';Faceted.Events.QUERY_CHANGED='FACETED-QUERY-CHANGED';Faceted.Events.RESET='FACETED-RESET';Faceted.Events.FORM_DO_QUERY='FACETED-FORM-DO-QUERY';Faceted.Events.WINDOW_WIDTH_CHANGED='FACETED-WINDOW-WIDTH-CHANGED';Faceted.Events.WINDOW_HEIGHT_CHANGED='FACETED-WINDOW-HEIGHT-CHANGED';Faceted.Events.AJAX_START='FACETED-AJAX-START';Faceted.Events.AJAX_STOP='FACETED-AJAX-STOP';Faceted.Events.AJAX_ERROR='FACETED-AJAX-ERROR';Faceted.Events.REDRAW='FACETED-REDRAW';Faceted.Events.HASHCHANGE='hashchange.FACETED-HASHCHANGE';Faceted.Events.cleanup=function(){jQuery(Faceted.Events).unbind(Faceted.Events.AJAX_QUERY_START);jQuery(Faceted.Events).unbind(Faceted.Events.AJAX_QUERY_SUCCESS);jQuery(Faceted.Events).unbind(Faceted.Events.QUERY_INITIALIZED);jQuery(Faceted.Events).unbind(Faceted.Events.QUERY_CHANGED);jQuery(Faceted.Events).unbind(Faceted.Events.RESET);jQuery(Faceted.Events).unbind(Faceted.Events.FORM_DO_QUERY);jQuery(Faceted.Events).unbind(Faceted.Events.WINDOW_WIDTH_CHANGED);jQuery(Faceted.Events).unbind(Faceted.Events.WINDOW_HEIGHT_CHANGED);jQuery(Faceted.Events).unbind(Faceted.Events.AJAX_START);jQuery(Faceted.Events).unbind(Faceted.Events.AJAX_STOP);jQuery(Faceted.Events).unbind(Faceted.Events.AJAX_ERROR);jQuery(Faceted.Events).unbind(Faceted.Events.REDRAW);jQuery(window).unbind(Faceted.Events.HASHCHANGE)};Faceted.Widgets={};Faceted.Query={};Faceted.BASEURL='';Faceted.Options={};Faceted.Options.SHOW_SPINNER=true;Faceted.Options.FADE_SPEED='slow';Faceted.SortedQuery=function(query){if(!query){query=Faceted.Query}
var keys=[];jQuery.each(query, function(key){if(!this||this=='all'){return}
keys.push(key)});keys.sort();var res={};jQuery.each(keys, function(index){res[this]=query[this]});return res};Faceted.Window={initialize: function(){this.width=jQuery(window).width();this.height=jQuery(window).height();var js_window=this;jQuery(window).resize(function(){js_window.width_change();js_window.height_change()});var fullscreen=jQuery('a:has(img#icon-full_screen)');if(fullscreen.length){js_window.toggle_fullscreen(fullscreen)}},width_change: function(){var width=jQuery(window).width();if(width!=this.width){this.width=width;jQuery(Faceted.Events).trigger(Faceted.Events.WINDOW_WIDTH_CHANGED,{width:width})}},height_change: function(){var height=jQuery(window).height();if(height!=this.height){this.height=height;jQuery(Faceted.Events).trigger(Faceted.Events.WINDOW_HEIGHT_CHANGED,{height:height})}},toggle_fullscreen: function(button){button.attr('href','#');button.click(function(evt){var toggleFullScreenMode=window.toggleFullScreenMode;if(toggleFullScreenMode){toggleFullScreenMode();jQuery(Faceted.Events).trigger(Faceted.Events.WINDOW_WIDTH_CHANGED)}
return false})}};Faceted.Form={initialize: function(){this.form=jQuery('#faceted-form');this.area=jQuery('#faceted-results');this.mode=this.form.attr('data-mode')||'view';this.version='';var version=jQuery('#faceted-version',this.form);if(version){this.version=version.text()}
this.area.ajaxError(function(event,request,settings){jQuery(this).html(''+'<h3>This site encountered an error trying to fulfill your request</h3>'+'<p>'+'If the error persists please contact the site maintainer. '+'Thank you for your patience.'+'</p>');jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_ERROR)});var hashquery=Faceted.URLHandler.get();var has_hash=!jQuery.isEmptyObject(hashquery);if(has_hash){Faceted.Query=hashquery}
if(Faceted.Query.b_start===undefined){Faceted.Query.b_start=0}
if(this.mode==='search'&&!has_hash){return}
jQuery(Faceted.Events).trigger(Faceted.Events.QUERY_INITIALIZED);if(!has_hash){Faceted.URLHandler.set()}else{Faceted.URLHandler.hash_changed()}},initialize_paginator: function(){var context=this;Faceted.b_start_changed=false;jQuery('.listingBar a').each(function(i){jQuery(this).click(function(){var href=jQuery(this).attr('href');var regex=new RegExp('b_start\\:int=(\\d+)');var b_start=regex.exec(href)[1];Faceted.b_start_changed=true;context.do_query('b_start',b_start);return false})})},reset: function(evt){Faceted.Query={}},do_query: function(wid,value){if(wid!='b_start'&&!Faceted.b_start_changed){Faceted.Query.b_start=0}
if(!value){value=[]}
if(wid){Faceted.Query[wid]=value}
jQuery(Faceted.Events).trigger(Faceted.Events.FORM_DO_QUERY,{wid:wid});Faceted.URLHandler.set()},do_form_query: function(){var context=this;if(Faceted.Query.b_start===undefined){Faceted.Query.b_start=0}
jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_QUERY_START);context.area.fadeOut('fast', function(){if(Faceted.Options.SHOW_SPINNER){var loading='<div class="faceted_loading"><img src="'+Faceted.BASEURL+'++resource++faceted_images/ajax-loader.gif" /></div>';context.area.html(loading);context.area.fadeIn(Faceted.Options.FADE_SPEED)}
var query=Faceted.SortedQuery();if(context.version){query.version=context.version}
jQuery.get(Faceted.BASEURL+'@@faceted_query',query, function(data){context.area.fadeOut('fast', function(){context.area.html(data);context.area.fadeIn(Faceted.Options.FADE_SPEED);jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_QUERY_SUCCESS)})})})},highlight: function(elements,css_class,remove){for(var i=0;i<elements.length;i++){var element=jQuery('#'+elements[i]);if(remove){jQuery(element).removeClass(css_class)}else{jQuery(element).addClass(css_class)}}},raise_error: function(msg,error_area,highlights){var area=jQuery('#'+error_area);msg='<div class="portalMessage">'+msg+'</div>';area.html(msg);this.highlight(highlights,'error')},clear_errors: function(error_area,highlights){var area=jQuery('#'+error_area);area.html('');this.highlight(highlights,'error',true)}};Faceted.URLHandler={initialize: function(){},hash_changed: function(){Faceted.Query=this.get();jQuery(Faceted.Events).trigger(Faceted.Events.QUERY_CHANGED);Faceted.Form.do_form_query()},document_hash: function(){var r=window.location.href;var i=r.indexOf("#");return(i>=0?r.substr(i+1):'')},get: function(){var hash=jQuery.bbq.getState();var query={};var types=["number","boolean","string"];jQuery.each(hash, function(key,value){var value_type=typeof(value);if(jQuery.inArray(value_type,types)!==-1){value=[value]}
query[key]=value});return query},set: function(query){if(!query){query=Faceted.Query}
query=jQuery.param(query,traditional=true);jQuery.bbq.pushState(query,2)}};Faceted.Sections={initialize: function(){var self=this;self.form=jQuery('.faceted-form');self.advanced=jQuery('.faceted-advanced-widgets',self.form).hide();if(!self.advanced.length){return}
self.buttons=jQuery('.faceted-sections-buttons',self.form);self.more=jQuery('.faceted-sections-buttons-more',self.form).show();self.less=jQuery('.faceted-sections-buttons-less',self.form).hide();jQuery('a',self.buttons).click(function(evt){self.toggle(jQuery(this),evt);return false})},toggle: function(element,evt){this.more.toggle();this.less.toggle();this.advanced.toggle('blind');var tags=jQuery('.faceted-tagscloud-widget:visible',this.form);if(tags.length){jQuery(Faceted.Events).trigger(Faceted.Events.WINDOW_WIDTH_CHANGED)}}};Faceted.AjaxLook={initialize: function(){this.slaves=[];this.locked=false;var js_object=this;jQuery(Faceted.Events).bind(Faceted.Events.AJAX_START, function(evt,data){js_object.add(data.wid)});jQuery(Faceted.Events).bind(Faceted.Events.AJAX_STOP, function(evt,data){js_object.remove(data.wid)});jQuery(Faceted.Events).bind(Faceted.Events.AJAX_QUERY_START, function(evt){js_object.add('faceted-results')});jQuery(Faceted.Events).bind(Faceted.Events.AJAX_QUERY_SUCCESS, function(evt){js_object.remove('faceted-results')});jQuery(Faceted.Events).bind(Faceted.Events.AJAX_ERROR, function(evt){jQuery(this.slaves).each(function(index){js_object.remove(js_object.slaves[index])})})},add: function(wid){this.lock();this.slaves.push(wid);var widget=jQuery('#'+wid+'_widget');if(widget.length){widget.addClass('faceted-widget-loading');if(jQuery.browser.msie){widget.addClass('faceted-widget-loading-msie')}}},remove: function(wid){if(this.slaves.length){this.slaves=jQuery.map(this.slaves, function(slave,index){if(slave==wid){return null}
return slave})}
var widget=jQuery('#'+wid+'_widget');if(widget.length){widget.removeClass('faceted-widget-loading');widget.removeClass('faceted-widget-loading-msie')}
this.unlock()},lock: function(){if(this.locked){return}
this.locked=true;jQuery.each(Faceted.Widgets, function(key){this.widget.addClass('faceted-widget-locked')});var overlay=jQuery('<div>');overlay.addClass('faceted-lock-overlay');overlay.addClass('ui-widget-overlay');overlay.css('z-index',1001);jQuery('#faceted-form').append(overlay)},unlock: function(){if(this.slaves.length){return}
this.locked=false;jQuery.each(Faceted.Widgets, function(key){this.widget.removeClass('faceted-widget-locked')});jQuery('.faceted-lock-overlay').remove()}};Faceted.Load=function(evt,baseurl){if(baseurl){Faceted.BASEURL=baseurl}
jQuery('.faceted-widget:has(div.faceted-widget-error)').remove();jQuery(Faceted.Events).bind(Faceted.Events.REDRAW, function(){if(jQuery('#faceted-left-column:has(div.faceted-widget)').length){jQuery('#center-content-area').addClass('left-area-js')}else{jQuery('#center-content-area').removeClass('left-area-js')}
if(jQuery('#faceted-right-column:has(div.faceted-widget)').length){jQuery('#center-content-area').addClass('right-area-js')}else{jQuery('#center-content-area').removeClass('right-area-js')}});jQuery(Faceted.Events).trigger(Faceted.Events.REDRAW);jQuery(Faceted.Events).trigger(Faceted.Events.INITIALIZE);jQuery(window).bind(Faceted.Events.HASHCHANGE, function(evt){Faceted.URLHandler.hash_changed()});jQuery(Faceted.Events).bind(Faceted.Events.AJAX_QUERY_SUCCESS, function(evt){Faceted.Form.initialize_paginator()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){Faceted.Form.reset()});Faceted.Window.initialize();Faceted.Sections.initialize();Faceted.AjaxLook.initialize();Faceted.Form.initialize();if(window.Calendar){Calendar.prototype.callCloseHandler=function(){if(this.onClose){this.onClose(this)}
this.hideShowCovered();var wid=this.params.inputField.id;wid=wid.split('_')[2];if(!wid){return false}
var widget=Faceted.Widgets[wid];widget.do_query();return false}}};Faceted.Unload=function(){};Faceted.Cleanup=function(){Faceted.Events.cleanup();Faceted.Widgets={};Faceted.Query={};Faceted.URLHandler.set()};(function(jQuery){jQuery.fn.collapsible=function(settings){var self=this;self.colapsed=false;var options={maxitems:0,elements:'li',events:{refresh:'widget-refresh',expand:'widget-expand',colapse:'widget-colapse'},handle_refresh: function(evt,data){jQuery(options.elements,self).show();self.button.hide();if(!options.maxitems){return}
var elements=jQuery(options.elements,self);if(elements.length<options.maxitems){return}
if(self.colapsed){jQuery('a',self.button).text('More')}else{jQuery('a',self.button).text('Less')}
self.button.show();if(!self.colapsed){return}
elements.each(function(index){if(index<options.maxitems){jQuery(this).show()}else{jQuery(this).hide()}})},handle_expand: function(evt,data){self.colapsed=false;self.trigger(options.events.refresh)},handle_colapse: function(evt,data){self.colapsed=true;self.trigger(options.events.refresh)},initialize: function(){self.bind(options.events.refresh, function(evt,data){options.handle_refresh(evt,data)});self.bind(options.events.expand, function(evt,data){options.handle_expand(evt,data)});self.bind(options.events.colapse, function(evt,data){options.handle_colapse(evt,data)});var link=jQuery('<a>').attr('href','#').text('More');self.button=jQuery('<div>').addClass('faceted-checkbox-more').append(link).hide();self.append(self.button);link.click(function(){if(self.colapsed){self.trigger(options.events.expand)}else{self.trigger(options.events.colapse)}
return false});if(options.maxitems){link.click()}}};if(settings){jQuery.extend(options,settings)}
options.initialize();return this}})(jQuery);jQuery(document).ready(function(){jQuery('form.faceted-external-search').submit(function(evt){evt.preventDefault();var form=jQuery(this);var action=form.attr('action');var query=form.serialize();window.location.href=action+'#'+query})});Faceted.CheckboxesWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.fieldset=jQuery('.widget-fieldset',this.widget);this.title=jQuery('legend',this.widget).html();this.elements=jQuery('form input[type=checkbox]',this.widget);this.maxitems=parseInt(jQuery('span',this.widget).text(),10);this.operatorElem=this.widget.find('.faceted-operator a');this.operatorVisible=this.operatorElem.length?true:false;if(this.operatorVisible){this.operator=this.operatorElem.data('value');this.operatorElem.click(function(evt){evt.preventDefault();self.operator_click(this,evt)});this.operatorElem.text(this.operatorElem.data(this.operator))}else{this.operator=this.widget.data('operator')}
this.selected=[];this.version='';var version=jQuery('#faceted-version');if(version){this.version=version.text()}
jQuery('form',this.widget).submit(function(){return false});var self=this;this.elements.click(function(evt){self.checkbox_click(this,evt)});var selected=this.widget.find('form input[type=checkbox]:checked');if(selected.length){this.selected=selected;Faceted.Query[this.wid]=[];selected.each(function(){Faceted.Query[self.wid].push(jQuery(this).val())})}
if(this.operatorVisible){Faceted.Query[self.wid+'-operator']=self.operator}
if(this.maxitems){this.fieldset.collapsible({maxitems:this.maxitems,elements:'li:not(.faceted-checkbox-item-zerocount)'})}
jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){self.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){self.reset()});if(this.widget.hasClass('faceted-count')){var sortcountable=this.widget.hasClass('faceted-sortcountable');jQuery(Faceted.Events).bind(Faceted.Events.QUERY_INITIALIZED, function(evt){self.count(sortcountable)});jQuery(Faceted.Events).bind(Faceted.Events.FORM_DO_QUERY, function(evt,data){if(self.operator!='and'&&(data.wid==self.wid||data.wid=='b_start')){return}
self.count(sortcountable)})}};Faceted.CheckboxesWidget.prototype={checkbox_click: function(element,evt){this.do_query(element)},operator_click: function(element,evt){var self=this;if(self.operator==='or'){self.operator='and';self.operatorElem.text(self.operatorElem.data('and'))}else{self.operator='or';self.operatorElem.text(self.operatorElem.data('or'))}
Faceted.Form.do_query(this.wid+'-operator',self.operator)},operator_label: function(){if(!this.operatorVisible){return ''}
var label=this.widget.find('.faceted-operator label');label=label.length?label.text():'';label+=' '+this.operatorElem.data(this.operator);return '('+label+')'},do_query: function(element){this.selected=jQuery('form input[type=checkbox]:checked',this.widget);var value=[];this.selected.each(function(i){value.push(jQuery(this).val())});Faceted.Form.do_query(this.wid,value)},reset: function(){this.selected=[];jQuery(this.elements).attr('checked',false)},synchronize: function(){this.elements.attr('checked',false);var checked=Faceted.Query[this.wid];if(checked){jQuery('form input[type=checkbox]',this.widget).val(checked);this.selected=jQuery('form input[type=checkbox]:checked',this.widget)}
var operator=Faceted.Query[this.wid+'-operator'];if(this.operatorVisible&&operator){operator=operator[0];this.operator=operator;this.operatorElem.data('value',operator);this.operatorElem.text(this.operatorElem.data(this.operator))}},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+' '+this.operator_label()+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var widget=this;var html=jQuery('<dd>');html.attr('id','criteria_'+this.wid+'_entries');widget.selected.each(function(i){var span=jQuery('<span class="faceted-checkbox-criterion">');var element=jQuery(this);var id=element.attr('id');var value=element.val();var label=jQuery('label[for='+id+']',widget.widget);var title=label.attr('title');label=label.text();var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+id);link.attr('title','Remove '+title+' filter');link.click(function(evt){widget.criteria_remove(value,element);return false});span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span)});return html},criteria_remove: function(value,element){if(!value){this.elements.attr('checked',false);this.do_query()}else{element.attr('checked',false);this.do_query()}},count: function(sortcountable){var query=Faceted.SortedQuery();query.cid=this.wid;if(this.version){query.version=this.version}
if(this.operator&&!query[this.wid+'-operator']){query[this.wid+'-operator']=this.operator}
var context=this;jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_START,{wid:context.wid});jQuery.getJSON(Faceted.BASEURL+'@@faceted_counter',query, function(data){context.count_update(data,sortcountable);jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_STOP,{wid:context.wid})})},count_update: function(data,sortcountable){var context=this;var lis=jQuery('li',context.widget);jQuery(lis).each(function(){var li=jQuery(this);li.removeClass('faceted-checkbox-item-disabled');li.removeClass('faceted-checkbox-item-zerocount');var input=jQuery('input',li);input.unbind();var key=input.val();var span=jQuery('span',li);if(!span.length){var label=jQuery('label',li);label.append(' ');label.append(jQuery('<span>'));span=jQuery('span',li)}
var value=data[key];value=value?value:0;span.text('('+data[key]+')');if(sortcountable){li.data('count',value)}
if(!value){li.addClass('faceted-checkbox-item-disabled');if(context.widget.hasClass('faceted-zero-count-hidden')){li.addClass('faceted-checkbox-item-zerocount')}
input.attr('disabled','disabled')}else{input.attr('disabled',false);input.click(function(evt){context.checkbox_click(this,evt)})}});if(sortcountable){lis.detach().sort(function(x,y){var a=jQuery(x).data('count');var b=jQuery(y).data('count');return b-a})}
jQuery('ul',context.widget).append(lis);context.fieldset.trigger('widget-refresh')}};Faceted.initializeCheckboxesWidget=function(evt){jQuery('div.faceted-checkboxes-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.CheckboxesWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeCheckboxesWidget)});Faceted.TextWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.selected=[];this.button=jQuery('input[type=submit]',this.widget);var js_widget=this;jQuery('form',this.widget).submit(function(){js_widget.text_change(js_widget.button);return false});var input=jQuery('#'+this.wid);var value=input.val();if(value){this.selected=input;Faceted.Query[this.wid]=[value]}
jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset()})};Faceted.TextWidget.prototype={text_change: function(element,evt){this.do_query(element);jQuery(element).removeClass("submitting")},do_query: function(element){var input=jQuery('#'+this.wid);var value=input.val();value=value?[value]:[];if(!element){this.selected=[];return Faceted.Form.do_query(this.wid,[])}
this.selected=[input];var where=jQuery('input[type=radio]:checked',this.widget);where=where.length==1?where.val():'all';if(where=='all'){return Faceted.Form.do_query(this.wid,value)}
var current=Faceted.Query[this.wid];current=current?current:[];if(value.length&&!(value[0] in current)){current.push(value[0])}
return Faceted.Form.do_query(this.wid,current)},reset: function(){this.selected=[];jQuery('#'+this.wid).val('')},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset();return}
var input=jQuery('#'+this.wid);input.attr('value',value);this.selected=[input]},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var widget=this;var html=jQuery('<dd>');var elements=Faceted.Query[this.wid];elements=elements?elements:[];jQuery.each(elements, function(){var label=this.toString();if(label.length>0){var span=jQuery('<span class="faceted-text-criterion">');var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+widget.wid+'_'+label);link.attr('title','Remove '+label+' filter');link.click(function(evt){widget.criteria_remove(label);return false});span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span)}});return html},criteria_remove: function(value){jQuery('#'+this.wid).val('');if(!value){this.selected=[];this.do_query();return}
jQuery('#'+this.wid+'_place_current',this.widget).attr('checked',true);var element=jQuery('input[type=text]',this.widget);var current=Faceted.Query[this.wid];var index=jQuery.inArray(value,current);if(index==-1){return}
current.splice(index,1);Faceted.Query[this.wid]=current;this.do_query(element)}};Faceted.initializeTextWidget=function(evt){jQuery('div.faceted-text-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.TextWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeTextWidget)});Faceted.DateRangeWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.start=jQuery('input[name=start]',this.widget);this.yearRange=jQuery('input[name=calYearRange]',this.widget).val();this.end=jQuery('input[name=end]',this.widget);this.selected=[];var start=this.start.val();var end=this.end.val();if(start&&end){this.selected=[this.start,this.end];Faceted.Query[this.wid]=[start,end]}
var js_widget=this;this.start.datepicker({changeMonth:true,changeYear:true,dateFormat:'yy-mm-dd',yearRange:this.yearRange,onSelect: function(date,cal){js_widget.select_change(js_widget.start)}});this.end.datepicker({changeMonth:true,changeYear:true,yearRange:this.yearRange,dateFormat:'yy-mm-dd',onSelect: function(date,cal){js_widget.select_change(js_widget.end)}});this.start.change(function(){var start=js_widget.start.val();var end=js_widget.end.val();if(!start&&!end){js_widget.reset();Faceted.Form.do_query(js_widget.wid,[])}});this.end.change(function(){var start=js_widget.start.val();var end=js_widget.end.val();if(!start&&!end){js_widget.reset();Faceted.Form.do_query(js_widget.wid,[])}});jQuery('form',this.widget).submit(function(){return false});jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset()})};Faceted.DateRangeErrorMsg='Invalid date range';Faceted.DateRangeWidget.prototype={select_change: function(element){this.do_query(element)},do_query: function(element){var start=this.start.val();var end=this.end.val();if(!start&&!end){this.reset();Faceted.Form.do_query(this.wid,[])}
if(!start||!end){this.selected=[];return false}
var value=[start,end];var start_date=new Date(start.replace(/-/g,'/'));var end_date=new Date(end.replace(/-/g,'/'));if(end_date<start_date){Faceted.Form.raise_error(Faceted.DateRangeErrorMsg,this.wid+'_errors',[])}else{this.selected=[this.start,this.end];Faceted.Form.clear_errors(this.wid+'_errors',[]);Faceted.Form.do_query(this.wid,value)}},reset: function(){this.selected=[];this.start.val('');this.end.val('')},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset();return false}
if(!value.length){this.reset();return false}
if(value.length<2){this.reset();return false}
var start=value[0];var end=value[1];var start_date=new Date(start.replace(/-/g,'/'));var end_date=new Date(end.replace(/-/g,'/'));if(!start_date.getFullYear()){this.reset();return false}
if(!end_date.getFullYear()){this.reset();return false}
this.start.val(start);this.end.val(end);this.selected=[this.start,this.end]},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var widget=this;var html=jQuery('<dd>');html.attr('id','criteria_'+this.wid+'_entries');var start=this.start.val();var end=this.end.val();var start_date=new Date(start.replace(/-/g,'/'));var end_date=new Date(end.replace(/-/g,'/'));var label=this.criteria_label(start_date,end_date);var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid+'_');link.attr('title','Remove '+label+' filter');link.click(function(evt){widget.criteria_remove();return false});var span=jQuery('<span class="faceted-daterange-criterion">');span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);return html},criteria_label: function(start_date,end_date){return start_date.toDateString()+' - '+end_date.toDateString()},criteria_remove: function(){this.reset();return Faceted.Form.do_query(this.wid,[])}};Faceted.initializeDateRangeWidget=function(evt){jQuery('div.faceted-daterange-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.DateRangeWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeDateRangeWidget)});Faceted.RadioWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.fieldset=jQuery('.widget-fieldset',this.widget);this.title=jQuery('legend',this.widget).html();this.elements=jQuery('input[type=radio]',this.widget);this.maxitems=parseInt(jQuery('span',this.widget).text(),10);this.selected=[];this.version='';var version=jQuery('#faceted-version');if(version){this.version=version.text()}
jQuery('form',this.widget).submit(function(){return false});var js_widget=this;this.elements.click(function(evt){js_widget.radio_click(this,evt)});var selected=jQuery('input[type=radio]:checked',this.widget);if(selected.length){this.selected=selected;Faceted.Query[this.wid]=[this.selected.val()]}
jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(){js_widget.reset()});if(this.widget.hasClass('faceted-count')){var sortcountable=this.widget.hasClass('faceted-sortcountable');jQuery(Faceted.Events).bind(Faceted.Events.QUERY_INITIALIZED, function(evt){js_widget.count(sortcountable)});jQuery(Faceted.Events).bind(Faceted.Events.FORM_DO_QUERY, function(evt,data){if(data.wid==js_widget.wid||data.wid=='b_start'){return}
js_widget.count(sortcountable)})}
if(this.maxitems){this.fieldset.collapsible({maxitems:this.maxitems,elements:'li:not(.faceted-radio-item-zerocount)'})}};Faceted.RadioWidget.prototype={radio_click: function(element,evt){if(!jQuery(element).val()){element=null}
this.do_query(element)},do_query: function(element){if(!element){this.selected=[];return Faceted.Form.do_query(this.wid,[])}else{this.selected=[element];var value=jQuery(this.selected[0]).val();return Faceted.Form.do_query(this.wid,value)}},reset: function(){jQuery(this.elements[0]).attr('checked',true);this.selected=[]},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset();return}
var context=this;if(typeof value!='object'){value=[value]}
jQuery.each(value, function(){var radio=jQuery('#'+context.wid+'_widget input[type=radio][value="'+this+'"]');if(!radio.length){context.reset()}else{context.selected=radio;context.selected.attr('checked',true)}})},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var widget=this;var html=jQuery('<dd>');html.attr('id','criteria_'+this.wid+'_entries');var element=jQuery(this.selected);var id=element.attr('id');var label=jQuery('label[for='+id+']');var title=label.attr('title');label=label.html();var link=jQuery('<a href="#">[X]</a>');var span=jQuery('<span class="facted-radio-criterion">');link.attr('id','criteria_'+id);link.attr('title','Remove '+title+' filter');link.click(function(evt){widget.criteria_remove();return false});span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);return html},criteria_remove: function(){var element=jQuery(this.elements[0]);element.attr('checked',true);this.do_query()},count: function(sortcountable){var query=Faceted.SortedQuery();query.cid=this.wid;if(this.version){query.version=this.version}
var context=this;jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_START,{wid:context.wid});jQuery.getJSON(Faceted.BASEURL+'@@faceted_counter',query, function(data){context.count_update(data,sortcountable);jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_STOP,{wid:context.wid})})},count_update: function(data,sortcountable){var context=this;var lis=jQuery('li',context.widget);jQuery(lis).each(function(){var li=jQuery(this);li.removeClass('faceted-radio-item-disabled');li.removeClass('faceted-radio-item-zerocount');var input=jQuery('input',li);input.unbind();var key=input.val();var span=jQuery('span',li);if(!span.length){var label=jQuery('label',li);label.append(' ');label.append(jQuery('<span>'));span=jQuery('span',li)}
var value=data[key];value=value?value:0;span.text('('+value+')');if(sortcountable){li.data('count',value)}
if(!value){li.addClass('faceted-radio-item-disabled');if(context.widget.hasClass('faceted-zero-count-hidden')){li.addClass('faceted-radio-item-zerocount')}
input.attr('disabled','disabled')}else{input.attr('disabled',false);input.click(function(evt){context.radio_click(this,evt)})}});if(sortcountable){lis.detach().sort(function(x,y){var a=jQuery(x).data('count');var b=jQuery(y).data('count');return b-a})}
jQuery('ul',context.widget).append(lis);context.fieldset.trigger('widget-refresh')}};Faceted.initializeRadioWidget=function(evt){jQuery('div.faceted-radio-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.RadioWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeRadioWidget)});Faceted.SortingWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+this.wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.reverse=jQuery('#'+this.wid+'_reversed');this.elements=jQuery('option',this.widget);this.selected=[];this.select=jQuery('#'+this.wid);var error=jQuery('.faceted-widget:has(div.faceted-sorting-errors)');if(error.length){error.remove();jQuery(Faceted.Events).trigger(Faceted.Events.REDRAW);return}
jQuery('form',this.widget).submit(function(){return false});var js_widget=this;this.select.change(function(evt){js_widget.select_change(this,evt)});this.reverse.click(function(evt){js_widget.reverse_change(this,evt)});var value=this.select.val();if(value){this.selected=jQuery('option[value='+value+']',this.widget);Faceted.Query[this.wid]=[value];var reverse=this.reverse.attr('checked');if(reverse){Faceted.Query.reversed='on'}}
jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(){js_widget.reset()})};Faceted.SortingWidget.prototype={select_change: function(element,evt){this.do_query(element)},reverse_change: function(element,evt){this.do_query(element)},do_query: function(element){if(!element){this.selected=[];Faceted.Form.do_query(this.wid,[]);return}
var value=null;if(jQuery(element).attr('type')=='checkbox'){value=jQuery(element).attr('checked')?'on':[];if(!this.selected.length){Faceted.Query.reversed=value;return}
Faceted.Form.do_query('reversed',value);return}else{value=jQuery(element).val();if(!value){this.selected=[];value=[]}else{this.selected=jQuery('option[value='+value+']',this.widget)}
Faceted.Form.do_query(this.wid,value);return}},reset: function(reversed){reversed=reversed?true:false;this.select.val("");this.reverse.attr('checked',reversed);this.selected=[]},synchronize: function(){var value=Faceted.Query[this.wid];var reversed_value=Faceted.Query.reversed;if(!reversed_value){reversed_value=false}
else if(reversed_value.length==1&&!reversed_value[0]){reversed_value=false}
else{reversed_value=true}
if(!value){this.reset(reversed_value);return}
var context=this;jQuery.each(value, function(){var selected=jQuery('option[value='+value+']',this.widget);if(!selected.length){context.reset(reversed_value)}else{context.selected=selected;context.select.val(value);context.reverse.attr('checked',reversed_value)}})},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var widget=this;var html=jQuery('<dd>');var span=jQuery('<span class="faceted-sorting-criterion">');html.attr('id','criteria_'+this.wid+'_entries');var element=jQuery(this.selected);var value=element.val();var label=element.html();var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid+'_'+value);link.attr('title','Remove '+label+' filter');link.click(function(evt){widget.criteria_remove();return false});span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);if(this.reverse.attr('checked')){var rid=this.reverse.attr('id');var rlabel=jQuery('label[for='+rid+']').html();html.append('<span>('+rlabel+')</span>')}
return html},criteria_remove: function(){this.select.val('');this.reverse.attr('checked',false);this.do_query()}};Faceted.initializeSortingWidget=function(evt){jQuery('div.faceted-sorting-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.SortingWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeSortingWidget)});Faceted.TagsCloudWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.tags=jQuery('li',this.widget);this.faceted_count=this.widget.hasClass('faceted-count');this.selected=[];this.version='';var version=jQuery('#faceted-version');if(version){this.version=version.text()}
this.config={};this.initialize();var selected=jQuery('.faceted-tag-selected',this.widget);if(selected.length){var value=selected.attr('id').replace(this.wid,'');value=value.replace(/_-_/g,' ');Faceted.Query[this.wid]=[value];this.synchronize()}
var js_widget=this;this.tags.click(function(evt){js_widget.tag_click(this,evt)});jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset()});jQuery(Faceted.Events).bind(Faceted.Events.QUERY_INITIALIZED, function(evt){js_widget.count()});jQuery(Faceted.Events).bind(Faceted.Events.FORM_DO_QUERY, function(evt,data){if(data.wid==js_widget.wid||data.wid=='b_start'){return}
js_widget.count()});jQuery(Faceted.Events).bind(Faceted.Events.WINDOW_WIDTH_CHANGED, function(evt,data){var width=js_widget.widget.width();jQuery('ul',js_widget.widget).width(width-30);js_widget.update()})};Faceted.TagsCloudWidget.prototype={initialize: function(){var cloud=jQuery('#'+this.wid+'-cloud',this.widget).text();cloud=cloud?cloud:'list';var sizemin=jQuery('#'+this.wid+'-sizemin',this.widget).text();sizemin=parseInt(sizemin,10);sizemin=sizemin?sizemin:10;var sizemax=jQuery('#'+this.wid+'-sizemax',this.widget).text();sizemax=parseInt(sizemax,10);sizemax=sizemax?sizemax:20;var colormin=jQuery('#'+this.wid+'-colormin',this.widget).text();var colormax=jQuery('#'+this.wid+'-colormax',this.widget).text();var height=jQuery('#'+this.wid+'-height',this.widget).text();height=parseInt(height,10);height=height?height:200;height=(cloud=='list')?'auto':height;this.config={type:cloud,sizemin:sizemin,sizemax:sizemax,height:height,colormin:colormin,colormax:colormax};this.update()},update: function(){jQuery('#'+this.wid,this.widget).tagcloud(this.config)},tag_click: function(tag,evt){this.do_query(tag)},unselect: function(tag){jQuery(tag).removeClass('faceted-tag-selected');this.selected=[]},select: function(tag){this.unselect(this.tags);jQuery(tag).addClass('faceted-tag-selected');if(jQuery(tag).attr('id').replace(this.wid,'')!='all'){this.selected=[tag]}},do_query: function(tag){var value=jQuery(tag).attr('id').replace(this.wid,'');value=value.replace(/_-_/g,' ');var selected_value='';if(this.selected.length){selected_value=jQuery(this.selected[0]).attr('id').replace(this.wid,'');selected_value=selected_value.replace(/_-_/g,' ')}
if(value==selected_value){this.select(jQuery('#'+this.wid+'all',this.widget));value=[]}else{this.select(tag)}
Faceted.Form.do_query(this.wid,value)},reset: function(){this.select(jQuery('#'+this.wid+'all',this.widget))},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset()}else{value=value[0].replace(/ /g,'_-_');var tag=jQuery('#'+this.wid+value,this.widget);if(tag.length){this.select(tag[0])}}},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove(this,evt);return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var tag_id=jQuery(this.selected[0]).attr('id');var label=jQuery(this.selected[0]).attr('title');var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+tag_id);link.attr('title','Remove '+label+' filter');var widget=this;link.click(function(evt){widget.criteria_remove(this,evt);return false});var html=jQuery('<dd>');var span=jQuery('<span class="faceted-tagscloud-criterion">');html.attr('id','criteria_'+this.wid+'_entries');span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);return html},criteria_remove: function(tag,evt){this.do_query(this.selected[0])},count: function(){var query=Faceted.SortedQuery();query.cid=this.wid;if(this.version){query.version=this.version}
var context=this;jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_START,{wid:context.wid});jQuery.get(Faceted.BASEURL+'@@tagscloud_counter',query, function(data){context.count_update(data);jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_STOP,{wid:context.wid})})},count_update: function(data){var js_widget=this;var all_id=js_widget.wid+'all';var fieldset=jQuery('fieldset',jQuery(data));js_widget.widget.html(fieldset);var min=10000;jQuery('li',js_widget.widget).each(function(){var tag=jQuery(this);var val=tag.attr('value');val=parseInt(val,10);if(val<min&&val>0){min=val}});var all_tag=jQuery('#'+all_id,js_widget.widget);var all=all_tag.attr('value');all_tag.attr('value',min);js_widget.tags=jQuery('li',this.widget);js_widget.tags.click(function(evt){js_widget.tag_click(this,evt)});if(!js_widget.faceted_count){js_widget.update();return}
js_widget.tags.each(function(){var tag=jQuery(this);var html=tag.text();var value=parseInt(tag.attr('value'),10);if(tag.attr('id')==all_id){value=all}else{value-=1}
html=html.replace(/\s\(\d+\)/,'');html+=' ('+value+')';tag.html(html);tag.unbind();if((tag.attr('value')===1)&&(tag.attr('id')!=all_id)){tag.addClass('faceted-tag-disabled')}else{tag.removeClass('faceted-tag-disabled');tag.click(function(evt){js_widget.tag_click(this,evt)})}});js_widget.update()}};Faceted.initializeTagsCloudWidget=function(evt){jQuery('div.faceted-tagscloud-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.TagsCloudWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeTagsCloudWidget)});Faceted.SelectWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+this.wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.elements=jQuery('option',this.widget);this.select=jQuery('#'+this.wid);this.selected=[];this.version='';var version=jQuery('#faceted-version');if(version){this.version=version.text()}
jQuery('form',this.widget).submit(function(){return false});var js_widget=this;this.select.change(function(evt){js_widget.select_change(this,evt)});var value=this.select.val();if(value){this.selected=jQuery("option[value='"+value+"']",js_widget.widget);Faceted.Query[this.wid]=[value]}
jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset()});if(this.widget.hasClass('faceted-count')){var sortcountable=this.widget.hasClass('faceted-sortcountable');jQuery(Faceted.Events).bind(Faceted.Events.QUERY_INITIALIZED, function(evt){js_widget.count(sortcountable)});jQuery(Faceted.Events).bind(Faceted.Events.FORM_DO_QUERY, function(evt,data){if(data.wid==js_widget.wid||data.wid=='b_start'){return}
js_widget.count(sortcountable)})}};Faceted.SelectWidget.prototype={select_change: function(element,evt){if(!jQuery(element).val()){element=null}
this.do_query(element)},do_query: function(element){if(!element){this.selected=[];return Faceted.Form.do_query(this.wid,[])}else{var value=jQuery(element).val();this.selected=jQuery("#"+this.wid+"_widget option[value='"+value+"']");return Faceted.Form.do_query(this.wid,value)}},reset: function(){this.select.val("");this.selected=[]},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset();return}
var context=this;jQuery.each(value, function(){var selected=jQuery("option[value='"+value+"']",context.widget);if(!selected.length){context.reset()}else{context.selected=selected;context.select.val(value)}})},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var widget=this;var html=jQuery('<dd>');var span=jQuery('<span class="facted-select-criterion">');html.attr('id','criteria_'+this.wid+'_entries');var element=jQuery(this.selected);var value=element.val();var label=element.attr('title');var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid+'_'+value);link.attr('title','Remove '+label+' filter');link.click(function(evt){widget.criteria_remove();return false});span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);return html},criteria_remove: function(){this.select.val('');this.do_query()},count: function(sortcountable){var query=Faceted.SortedQuery();query.cid=this.wid;if(this.version){query.version=this.version}
var context=this;jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_START,{wid:context.wid});jQuery.getJSON(Faceted.BASEURL+'@@faceted_counter',query, function(data){context.count_update(data,sortcountable);jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_STOP,{wid:context.wid})})},count_update: function(data,sortcountable){var context=this;var select=jQuery('select',context.widget);var options=jQuery('option',context.widget);var current_val=select.val();jQuery(options).each(function(){var option=jQuery(this);option.removeClass('faceted-select-item-disabled');option.attr('disabled',false);var key=option.val();var value=data[key];value=value?value:0;var option_txt=option.attr('title');option_txt+=' ('+value+')';option.html(option_txt);if(sortcountable){option.data('count',value)}
if(!value){option.attr('disabled','disabled');option.addClass('faceted-select-item-disabled')}});if(sortcountable){options.detach().sort(function(x,y){var a=jQuery(x).data('count');var b=jQuery(y).data('count');return b-a});select.append(options);select.val(current_val)}}};Faceted.initializeSelectWidget=function(evt){jQuery('div.faceted-select-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.SelectWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeSelectWidget)});Faceted.AlphabeticalWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.letters=jQuery('#'+wid+' span');this.selected=[];this.version='';var version=jQuery('#faceted-version');if(version){this.version=version.text()}
var selected=jQuery('.faceted_letter_selected');if(selected.length){Faceted.Query[this.wid]=[selected.attr('id').split('-')[1]];this.synchronize()}
var js_widget=this;this.letters.click(function(evt){js_widget.letter_click(this,evt)});jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset()});if(this.widget.hasClass('faceted-count')){var sortcountable=this.widget.hasClass('faceted-sortcountable');jQuery(Faceted.Events).bind(Faceted.Events.QUERY_INITIALIZED, function(evt){js_widget.count(sortcountable)});jQuery(Faceted.Events).bind(Faceted.Events.FORM_DO_QUERY, function(evt,data){if(data.wid==js_widget.wid||data.wid=='b_start'){return}
js_widget.count(sortcountable)})}};Faceted.AlphabeticalWidget.prototype={letter_click: function(letter,evt){this.do_query(letter)},letter_unselect: function(letter){jQuery(letter).removeClass('faceted_letter_selected');this.selected=[]},letter_select: function(letter){this.letter_unselect(this.letters);jQuery(letter).addClass('faceted_letter_selected');if(jQuery(letter).attr('id').split('-')[1]!='all'){this.selected=[letter]}},do_query: function(letter){var value=jQuery(letter).attr('id').split('-')[1];var selected_value='';if(this.selected.length){selected_value=jQuery(this.selected[0]).attr('id').split('-')[1]}
if(value==selected_value){this.letter_select(jQuery('#'+this.wid+'-all'),this.widget);value=[]}else{this.letter_select(letter)}
Faceted.Form.do_query(this.wid,value)},reset: function(){this.letter_select(jQuery('#'+this.wid+'-all',this.widget))},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset()}else{var letter=jQuery('#'+this.wid+'-'+value[0]);if(letter.length){this.letter_select(letter[0])}else{this.reset()}}},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove(this,evt);return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var label=jQuery(this.selected[0]).attr('id').split('-')[1];var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid+'_'+label);link.attr('title','Remove '+label+' filter');var widget=this;link.click(function(evt){widget.criteria_remove(this,evt);return false});var html=jQuery('<dd>');html.attr('id','criteria_'+this.wid+'_entries');var span=jQuery('<span class="faceted-alphabetic-criterion">');span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);return html},criteria_remove: function(element,evt){this.do_query(this.selected[0])},count: function(sortcountable){var query=Faceted.SortedQuery();query.cid=this.wid;if(this.version){query.version=this.version}
var context=this;jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_START,{wid:context.wid});jQuery.getJSON(Faceted.BASEURL+'@@faceted_counter',query, function(data){context.count_update(data,sortcountable);jQuery(Faceted.Events).trigger(Faceted.Events.AJAX_STOP,{wid:context.wid})})},count_update: function(data,sortcountable){var context=this;context.letters.each(function(){var letter=jQuery(this);letter.removeClass('faceted-alphabetic-letter-disabled');letter.unbind();var key=letter.attr('id').split('-')[1];var value=data[key];value=value?value:0;letter.attr('title',value);if(sortcountable){letter.data('count',value)}
if(!value){letter.addClass('faceted-alphabetic-letter-disabled')}else{letter.click(function(evt){context.letter_click(this,evt)})}});if(sortcountable){context.letters.detach().sort(function(x,y){var a=jQuery(x).data('count');var b=jQuery(y).data('count');return b-a})}
jQuery('#'+context.wid,context.widget).append(context.letters)}};Faceted.initializeAlphabeticalWidget=function(evt){jQuery('div.faceted-alphabetic-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.AlphabeticalWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeAlphabeticalWidget)});Faceted.PortletWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();jQuery('legend',this.widget).hide();jQuery('fieldset',this.widget).css('border','none');jQuery('form',this.widget).submit(function(){return true})};Faceted.initializePortletWidget=function(evt){jQuery('div.faceted-portlet-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];var widget=new Faceted.PortletWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializePortletWidget)});Faceted.CriteriaWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.title=jQuery('legend',this.widget).html();this.area=jQuery('#'+wid);this.reset_button=jQuery('#'+wid+'_reset');this.toggle_button=jQuery('.faceted-criteria-hide-show',this.widget);this.toggle_button_count=jQuery('.faceted-criteria-count',this.toggle_button);var js_widget=this;this.reset_button.click(function(evt){js_widget.reset_click(this,evt);return false});var toggle_buttons=jQuery('a',this.toggle_button);toggle_buttons.click(function(evt){js_widget.toggle_button_click(this,evt);return false});js_widget.initialize_syndication();jQuery(Faceted.Events).bind(Faceted.Events.AJAX_QUERY_START, function(evt){return js_widget.update()});jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){return js_widget.update_syndication()})};Faceted.CriteriaWidget.prototype={reset_click: function(element,evt){jQuery(Faceted.Events).trigger(Faceted.Events.RESET);this.do_query()},toggle_button_click: function(element,evt){this.area.toggle('blind');jQuery('a',this.toggle_button).toggle();this.toggle_button_count.toggle()},do_query: function(wid,value){Faceted.Form.do_query(wid,value)},update: function(){var context=this;var empty=true;context.widget.fadeOut('fast', function(){context.area.empty();jQuery.each(Faceted.Query, function(key){var widget=Faceted.Widgets[key];if(!widget){return}
var criteria=widget.criteria();jQuery.each(criteria, function(){context.area.append(this);empty=false})});var count=jQuery('dd span',context.area).length;context.toggle_button_count.text('('+count+')');if(!empty){context.widget.fadeIn('fast')}})},criteria: function(){return []},initialize_syndication: function(){this.rss=null;this.rss_href='';this.skos=null;this.skos_href='';var icon=null;var rss=jQuery('#document-action-rss, #document-action-rss2').find('a');if(rss.length){rss=jQuery(rss[0]).clone();icon=jQuery('img',rss);icon.attr('id',icon.attr('id')+'-'+this.wid);rss.addClass('faceted-criteria-syndication-rss');rss.attr('id',this.wid+'syndication-rss');jQuery('.faceted-criteria-reset',this.widget).prepend(rss);this.rss=jQuery('#'+this.wid+'syndication-rss',this.widget);this.rss_href=rss.attr('href')}
var skos=jQuery('#document-action-skos').find('a');if(skos.length){skos=jQuery(skos[0]).clone();icon=jQuery('img',skos);icon.attr('id',icon.attr('id')+'-'+this.wid);skos.addClass('faceted-criteria-syndication-skos');skos.attr('id',this.wid+'syndication-skos');jQuery('.faceted-criteria-reset',this.widget).prepend(skos);this.skos=jQuery('#'+this.wid+'syndication-skos',this.widget);this.skos_href=this.skos.attr('href')}},update_syndication: function(){var hash='ajax=True&';hash+=Faceted.URLHandler.document_hash();if(this.rss){this.rss.attr('href',this.rss_href+'?'+hash)}
if(this.skos){this.skos.attr('href',this.skos_href+'?'+hash)}}};Faceted.initializeCriteriaWidget=function(evt){jQuery('div.faceted-criteria-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.CriteriaWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeCriteriaWidget)});Faceted.DateWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.select_from=jQuery('select[name=from]',this.widget);this.select_to=jQuery('select[name=to]',this.widget);this.select_from.hide();this.select_to.hide();var js_widget=this;this.slider=jQuery('select',this.widget).selectToUISlider({labels:2,labelSrc:'text',sliderOptions:{change: function(){js_widget.change()}}});jQuery('span.ui-slider-label',this.widget).each(function(i){if(i!==11){return}
var span=jQuery(this);span.addClass('ui-slider-label-show')});this.selected=[];var from=this.select_from.val();var to=this.select_to.val();if((from!=='now-past')||(to!=='now_future')){this.selected=[this.select_from,this.select_to];Faceted.Query[this.wid]=[from,to]}
jQuery('form',this.widget).submit(function(){return false});jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset_ui()})};Faceted.DateWidget.prototype={change: function(){var from=this.select_from.val();var to=this.select_to.val();if(from==='now-past'&&to==='now_future'){this.reset();Faceted.Form.do_query(this.wid,[])}else{this.do_query()}},do_query: function(){var value=[this.select_from.val(),this.select_to.val()];this.selected=[this.select_from,this.select_to];Faceted.Form.do_query(this.wid,value)},reset: function(){this.selected=[];this.select_from.val('now-past');this.select_to.val('now_future')},reset_ui: function(){this.reset();this.select_from.trigger('change');this.select_to.trigger('change')},synchronize: function(){var q_value=Faceted.Query[this.wid];if(!q_value){this.reset_ui();return}
if(!q_value.length){this.reset_ui();return}
if(q_value.length<2){this.reset_ui();return}
this.select_from.val(q_value[0]).trigger('change');this.select_to.val(q_value[1]).trigger('change')},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var from=jQuery('option:selected',this.select_from).text();var to=jQuery('option:selected',this.select_to).text();var label=from+' - '+to;var widget=this;var html=jQuery('<dd>');html.attr('id','criteria_'+this.wid+'_entries');var span=jQuery('<span class="faceted-date-criterion">');var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid+'_');link.attr('title','Remove '+label+' filter');link.click(function(evt){widget.criteria_remove();return false});span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);return html},criteria_remove: function(){this.reset_ui();return Faceted.Form.do_query(this.wid,[])}};Faceted.initializeDateWidget=function(evt){jQuery('div.faceted-date-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.DateWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeDateWidget)});var FacetedTree={version:'2.0'};FacetedTree.Events={};FacetedTree.Events.CHANGED='FACETEDTREE-CHANGED';FacetedTree.Events.AJAX_START='FACETEDTREE-AJAX-START';FacetedTree.Events.AJAX_STOP='FACETEDTREE-AJAX-STOP';FacetedTree.JsTree=function(wid,container,mode){this.BASEURL='';if(window.FacetedEdit){this.BASEURL=FacetedEdit.BASEURL}else if(window.Faceted){this.BASEURL=Faceted.BASEURL}
this.wid=wid;this.mode=mode||'view';this.input=jQuery('#'+wid,container);this.input.attr('readonly','readonly');this.theme=jQuery('#'+wid+'-theme',container);this.area=jQuery('<div>');this.area.addClass('tree');this.area.text('Loading...');this.area.hide();this.area.width(this.input.width());this.input.after(this.area);var js_tree=this;this.input.click(function(evt){js_tree.show()});jQuery(document).click(function(e){var target=jQuery(e.target);if(target.is('#'+js_tree.input.attr('id'))){return}
var parent=target.parents('#'+js_tree.area.attr('id'));if(parent.length){return}
js_tree.hide()});jQuery(document).keydown(function(e){if(e.keyCode==27){js_tree.hide()}});var query={};query.cid=this.wid;query.mode=this.mode;jQuery(FacetedTree.Events).trigger(FacetedTree.Events.AJAX_START,{msg:'Loading ...'});jQuery.getJSON(js_tree.BASEURL+'@@faceted.path.tree.json',query, function(data){if(data.length){js_tree.initialize(data)}else{if(mode=='edit'){jQuery('form',container).hide();jQuery('div.faceted-path-errors',container).show()}else{jQuery('.faceted-widget:has(div.faceted-path-errors)').remove();jQuery(Faceted.Events).trigger(Faceted.Events.REDRAW)}}
jQuery(FacetedTree.Events).trigger(FacetedTree.Events.AJAX_STOP,{msg:data})})};FacetedTree.JsTree.prototype={initialize: function(static_tree){var js_tree=this;js_tree.area.tree({ui:{theme_name:js_tree.theme.attr('title'),theme_path:js_tree.theme.text()},types:{"default":{clickable:true,renameable:false,deletable:false,creatable:false,draggable:false}},data:{type:'json',async:true,opts:{method:'POST',url:js_tree.BASEURL+'@@faceted.path.tree.json'}},callback:{beforedata: function(node,tree){if(node===false){tree.settings.data.opts['static']=static_tree;return}
tree.settings.data.opts['static']=false;var data={cid:js_tree.wid};data.mode=js_tree.mode;if(node){data.path=node.attr('path')}
return data},onselect: function(node,tree){js_tree.change(node,tree)}}})},show: function(){this.area.show()},hide: function(){this.area.hide()},change: function(node,tree){this.hide();node=jQuery(node);var value=node.attr('path');if(this.input.val()==value){value=''}
this.input.val(value);jQuery(FacetedTree.Events).trigger(FacetedTree.Events.CHANGED,{path:value})}};Faceted.PathWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.input=jQuery('input',this.widget);this.breadcrumbs=jQuery('<dd>');this.selected=[];var value=this.input.val();if(value){this.selected=this.input;Faceted.Query[this.wid]=[value]}
var tree=new FacetedTree.JsTree(this.wid,this.widget);var js_widget=this;jQuery('form',this.widget).submit(function(){return false});jQuery(FacetedTree.Events).bind(FacetedTree.Events.CHANGED, function(data){js_widget.text_change(js_widget.input)});jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset()})};Faceted.PathWidget.prototype={text_change: function(element,evt){this.do_query(element)},do_query: function(element){var value=this.input.val();value=value?[value]:[];if(!element){this.selected=[];return Faceted.Form.do_query(this.wid,[])}
this.selected=[this.input];return Faceted.Form.do_query(this.wid,value)},reset: function(){this.selected=[];this.input.val('')},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset();return}
this.selected=[this.input]},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var js_widget=this;js_widget.breadcrumbs.text('Loading...');var query={};query.path=js_widget.input.val();query.cid=js_widget.wid;jQuery.getJSON(Faceted.BASEURL+'@@faceted.path.breadcrumbs.json',query, function(data){js_widget.breadcrumbs.empty();jQuery.each(data, function(){js_widget.breadcrumbs.append(jQuery('<span>').html('&raquo;'));var a=jQuery('<a>');a.attr('href',this.url);a.attr('title',this.title);a.text(this.title);a.click(function(){var path=jQuery(this).attr('href');js_widget.input.val(path);jQuery(FacetedTree.Events).trigger(FacetedTree.Events.CHANGED,{path:path});return false});js_widget.breadcrumbs.append(a)})});return js_widget.breadcrumbs},criteria_remove: function(){this.selected=[];this.input.val('');this.do_query()}};Faceted.initializePathWidget=function(evt){jQuery('div.faceted-path-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.PathWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializePathWidget)});Faceted.RangeWidget=function(wid){var js_widget=this;this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.start=jQuery('input[name=start]',this.widget);this.end=jQuery('input[name=end]',this.widget);this.selected=[];var start=this.start.val();var end=this.end.val();if(start&&end){this.selected=[this.start,this.end];Faceted.Query[this.wid]=[start,end]}
jQuery('form',this.widget).submit(function(){return false});var handle=function(evt){js_widget.select_change(this,evt)};this.start.change(handle);this.end.change(handle);jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset()})};Faceted.RangeWidget.prototype={select_change: function(element){this.do_query(element)},do_query: function(element){var start=this.start.val();var end=this.end.val();if(!start||!end){this.selected=[];return false}
var value=[start,end];if(end<start){var msg='Invalid range';Faceted.Form.raise_error(msg,this.wid+'_errors',[])}else{this.selected=[this.start,this.end];Faceted.Form.clear_errors(this.wid+'_errors',[]);Faceted.Form.do_query(this.wid,value)}},reset: function(){this.selected=[];this.start.val('');this.end.val('')},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset();return false}
if(!value.length){this.reset();return false}
if(value.length<2){this.reset();return false}
var start=value[0];var end=value[1];this.start.val(start);this.end.val(end);this.selected=[this.start,this.end]},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var widget=this;var html=jQuery('<dd>');var span=jQuery('<span class="faceted-range-criterion">');var start=this.start.val();var end=this.end.val();var label=start+' - '+end;var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid+'_');link.attr('title','Remove '+label+' filter');link.click(function(evt){widget.criteria_remove();return false});span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);return html},criteria_remove: function(){this.reset();return Faceted.Form.do_query(this.wid,[])}};Faceted.initializeRangeWidget=function(evt){jQuery('div.faceted-range-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.RangeWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeRangeWidget)});Faceted.ResultsPerPageWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+this.wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.elements=jQuery('option',this.widget);this.select=jQuery('#'+this.wid);this.selected=[];jQuery('form',this.widget).submit(function(){return false});var js_widget=this;this.select.change(function(evt){js_widget.select_change(this,evt)});var value=this.select.val();if(value){this.selected=jQuery('option[value='+value+']',this.widget);Faceted.Query[this.wid]=[value]}
jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()});jQuery(Faceted.Events).bind(Faceted.Events.RESET, function(evt){js_widget.reset()})};Faceted.ResultsPerPageWidget.prototype={select_change: function(element,evt){if(!jQuery(element).val()){element=null}
this.do_query(element)},do_query: function(element){if(!element){this.selected=[];return Faceted.Form.do_query(this.wid,[])} else{var value=jQuery(element).val();this.selected=jQuery('#'+this.wid+'_widget option[value='+value+']');return Faceted.Form.do_query(this.wid,value)}},reset: function(){this.select.val("");this.selected=[]},synchronize: function(){var value=Faceted.Query[this.wid];if(!value){this.reset();return}
var context=this;jQuery.each(value, function(){var selected=jQuery('#'+context.wid+'_widget option[value='+value+']');if(!selected.length){context.reset()} else{context.selected=selected;context.select.val(value)}})},criteria: function(){var html=[];var title=this.criteria_title();var body=this.criteria_body();if(title){html.push(title)}
if(body){html.push(body)}
return html},criteria_title: function(){if(!this.selected.length){return ''}
var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid);link.attr('title','Remove '+this.title+' filters');var widget=this;link.click(function(evt){widget.criteria_remove();return false});var html=jQuery('<dt>');html.attr('id','criteria_'+this.wid+'_label');html.append(link);html.append('<span>'+this.title+'</span>');return html},criteria_body: function(){if(!this.selected.length){return ''}
var widget=this;var html=jQuery('<dd>');var span=jQuery('<span class="faceted-resultsperpage-criterion">');html.attr('id','criteria_'+this.wid+'_entries');var element=jQuery(this.selected);var value=element.val();var label=element.html();var link=jQuery('<a href="#">[X]</a>');link.attr('id','criteria_'+this.wid+'_'+value);link.attr('title','Remove '+label+' filter');link.click(function(evt){widget.criteria_remove();return false});span.append(link);jQuery('<span>').text(label).appendTo(span);html.append(span);return html},criteria_remove: function(){this.select.val('');this.do_query()}};Faceted.initializeResultsPerPageWidget=function(evt){jQuery('div.faceted-resultsperpage-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.ResultsPerPageWidget(wid)})};jQuery(document).ready(
function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeResultsPerPageWidget)});Faceted.DebugWidget=function(wid){this.wid=wid;this.widget=jQuery('#'+wid+'_widget');this.widget.show();this.title=jQuery('legend',this.widget).html();this.query_area=jQuery('dd.debug-query pre',this.widget);this.after_area=jQuery('dd.debug-after pre',this.widget);this.config_area=jQuery('dd.debug-config pre',this.widget);this.count_area=jQuery('dd.debug-count pre',this.widget);jQuery('dd',this.widget).hide();jQuery('dt',this.widget).each(function(){var dt=jQuery(this);var css=dt.attr('class');var parent=dt.parent('dl');var minmax=jQuery('<span>').addClass('ui-icon ui-icon-plus').css('float','left');minmax.click(function(){var button=jQuery(this);jQuery('dd.'+css,parent).toggle();if(button.hasClass('ui-icon-minus')){button.removeClass('ui-icon-minus');button.addClass('ui-icon-plus')}else{button.removeClass('ui-icon-plus');button.addClass('ui-icon-minus')}});dt.prepend(minmax)});var js_widget=this;jQuery(Faceted.Events).bind(Faceted.Events.QUERY_CHANGED, function(evt){js_widget.synchronize()})};Faceted.DebugWidget.prototype={synchronize: function(){var context=this;var query=jQuery.extend({},Faceted.Query);query['debugger']=this.wid;jQuery.get(Faceted.BASEURL+'@@faceted.widget.debug.query',query, function(data){if(data=="[]"){jQuery('.debug-query',context.widget).hide()}else{jQuery('dt.debug-query',context.widget).show()}
context.query_area.text(data)});jQuery.get(Faceted.BASEURL+'@@faceted.widget.debug.after',query, function(data){if(data=="[]"){jQuery('.debug-after',context.widget).hide()}else{jQuery('dt.debug-after',context.widget).show()}
context.after_area.text(data)});jQuery.get(Faceted.BASEURL+'@@faceted.widget.debug.criteria',query, function(data){if(data=="[]"){jQuery('.debug-config',context.widget).hide()}else{jQuery('dt.debug-config',context.widget).show()}
context.config_area.text(data)});jQuery.get(Faceted.BASEURL+'@@faceted.widget.debug.counters',query, function(data){if(data=="[]"){jQuery('.debug-count',context.widget).hide()}else{jQuery('dt.debug-count',context.widget).show()}
context.count_area.text(data)})},criteria: function(){return []}};Faceted.initializeDebugWidget=function(evt){jQuery('div.faceted-debug-widget').each(function(){var wid=jQuery(this).attr('id');wid=wid.split('_')[0];Faceted.Widgets[wid]=new Faceted.DebugWidget(wid)})};jQuery(document).ready(function(){jQuery(Faceted.Events).bind(Faceted.Events.INITIALIZE,Faceted.initializeDebugWidget)});

/* - readiness.js - */
// http://www.eea.europa.eu/portal_javascripts/readiness.js?original=1
function set_readiness_accordion(){(function($){$(".readiness_accordion").accordion({autoHeight:false})})(jQuery)}
jQuery(document).ready(set_readiness_accordion);

/* - eea-accordion.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-accordion.js?original=1
jQuery(document).ready(function($){var portlet=jQuery('.portletNavigationTree');if(portlet.length){var tabs=jQuery('.portletItem',portlet);var index=0;tabs.each(function(idx,obj){var here=jQuery(this);if(jQuery('.navTreeCurrentNode',here).length>0){index=idx;return false}});portlet.tabs(".portletNavigationTree .portletItem",{tabs:".portletSubMenuHeader",effect:"slide",initialIndex:index});portlet.delegate('.current, .collapsed','click', function(){var tabs=portlet.data('tabs');var $this=$(this);if(index===tabs.getIndex()){if(tabs.getCurrentTab().hasClass('current')){tabs.getCurrentPane().dequeue().stop().slideUp();tabs.getCurrentTab().removeClass('current').addClass('collapsed')}
else{$this.addClass('current').removeClass('collapsed').next().slideDown()}}
index=tabs.getIndex()})}
$.tools.tabs.addEffect("collapsed", function(i,done){});var eea_accordion=function($folder_panels){if(!$folder_panels){$folder_panels=$('.eea-accordion-panels')}
if($folder_panels.length){$folder_panels.each(function(idx,el){var $el=$(el);if($el.hasClass("eea-accordion-initialized")){return}
var effect='slide';var current_class="current";var initial_index=0;var initial_indexes=[];var $pane=$el.find('.pane');$el.find('.eea-accordion-title, .eea-accordion-title-manual-icons, h2').each(function(idx){var $title=$(this);if($title.hasClass('current')){$title.removeClass('current');initial_index=idx;initial_indexes.push(idx);$el.removeClass('collapsed-by-default')}});if($el.hasClass('collapsed-by-default')){effect='slide';initial_index=null;$pane.hide()}
if($el.hasClass('non-exclusive')){if(!$el.hasClass('collapsed-by-default')){$pane.not(':nth-child('+(initial_index+1)+')').hide();$pane.eq(initial_index).prev().addClass('current')}
effect='collapsed';current_class="default";$el.find('.eea-accordion-title, .eea-accordion-title-manual-icons, h2').click(function(ev){var $el=$(this);if(!$el.hasClass('current')){$el.addClass('current').next().slideDown()}
else{$el.removeClass('current').next().slideUp()}})}
$el.tabs($pane,{tabs:'.eea-accordion-title, .eea-accordion-title-manual-icons, h2',effect:effect,initialIndex:initial_index,current:current_class,onBeforeClick: function(ev,idx){$(ev.target).trigger("onBeforeClick",{event:ev,index:idx})},onClick: function(ev,idx){$(ev.target).trigger("eea-accordion-on-click",{event:ev,index:idx})}});if(initial_indexes.length&&$el.hasClass('non-exclusive')){$el.find('.eea-accordion-title, .eea-accordion-title-manual-icons, h2').each(function(idx){var $title=$(this);if($title.hasClass('current')){return}
if(initial_indexes.indexOf(idx)===-1){return}
$title.click()})}
$el.addClass("eea-accordion-initialized")})}};eea_accordion();window.EEA=window.EEA||{};window.EEA.eea_accordion=eea_accordion});

/* - form_tabbing.js - */
// http://www.eea.europa.eu/portal_javascripts/form_tabbing.js?original=1
var ploneFormTabbing={jqtConfig:{current:'selected'},max_tabs:6};(function($){ploneFormTabbing._buildTabs=function(container,legends){var threshold=legends.length>ploneFormTabbing.max_tabs;var panel_ids,tab_ids=[],tabs='';for(var i=0;i<legends.length;i++){var className,tab,legend=legends[i],lid=legend.id;tab_ids[i]='#'+lid;switch(i){case(0):className='class="formTab firstFormTab"';break;case(legends.length-1):className='class="formTab lastFormTab"';break;default:className='class="formTab"';break}
if(threshold){tab='<option '+className+' id="'+lid+'" value="'+lid+'">';tab+=$(legend).text()+'</option>'} else{tab='<li '+className+'><a id="'+lid+'" href="#'+lid+'"><span>';tab+=$(legend).text()+'</span></a></li>'}
tabs+=tab;$(legend).css({'visibility':'hidden','font-size':'0','padding':'0','height':'0','width':'0','line-height':'0'})}
tab_ids=tab_ids.join(',');panel_ids=tab_ids.replace(/#fieldsetlegend-/g,"#fieldset-");if(threshold){tabs=$('<select class="formTabs">'+tabs+'</select>');tabs.change(function(){var selected=$(this).attr('value');$(this).parent().find('option#'+selected).click()})} else{tabs=$('<ul class="formTabs">'+tabs+'</ul>')}
return tabs};ploneFormTabbing.initializeDL=function(){var ftabs=$(ploneFormTabbing._buildTabs(this,$(this).children('dt')));var targets=$(this).children('dd');$(this).before(ftabs);targets.addClass('formPanel');ftabs.tabs(targets,ploneFormTabbing.jqtConfig)};ploneFormTabbing.initializeForm=function(){var jqForm=$(this);var fieldsets=jqForm.children('fieldset');if(!fieldsets.length){return}
var ftabs=ploneFormTabbing._buildTabs(this,fieldsets.children('legend'));$(this).prepend(ftabs);fieldsets.addClass("formPanel");$(this).find('input[name="fieldset"]').addClass('noUnloadProtection');$(this).find('.formPanel:has(div.field span.required)').each(function(){var id=this.id.replace(/^fieldset-/,"#fieldsetlegend-");$(id).addClass('required')});var initialIndex=0;var count=0;var found=false;$(this).find('.formPanel').each(function(){if(!found&&$(this).find('div.field.error').length!=0){initialIndex=count;found=true}
count+=1});var tabSelector='ul.formTabs';if($(ftabs).is('select.formTabs')){tabSelector='select.formTabs'}
var tabsConfig=$.extend({},ploneFormTabbing.jqtConfig,{'initialIndex':initialIndex});jqForm.children(tabSelector).tabs(jqForm.children('fieldset.formPanel'),tabsConfig);jqForm.submit(function(){var selected;if(ftabs.find('a.selected').length>=1){selected=ftabs.find('a.selected').attr('href').replace(/^#fieldsetlegend-/,"#fieldset-")}
else{selected=ftabs.attr('value').replace(/^fieldsetlegend-/,'#fieldset-')}
var fsInput=jqForm.find('input[name="fieldset"]');if(selected&&fsInput){fsInput.val(selected)}});$("#archetypes-schemata-links").addClass('hiddenStructure');$("div.formControls input[name='form.button.previous'],"+"div.formControls input[name='form.button.next']").remove()};$.fn.ploneTabInit=function(pbo){return this.each(function(){var item=$(this);item.find("form.enableFormTabbing,div.enableFormTabbing").each(ploneFormTabbing.initializeForm);item.find("dl.enableFormTabbing").each(ploneFormTabbing.initializeDL);var targetPane=item.find('.enableFormTabbing input[name="fieldset"]').val()||window.location.hash;if(targetPane){item.find('.enableFormTabbing .formTabs [id="'+targetPane.replace('#','').replace('"','').replace(/^fieldset-/,"fieldsetlegend-")+'"]').click()}})};ploneFormTabbing.initialize=function(){$('body').ploneTabInit()}})(jQuery);jQuery(function(){ploneFormTabbing.initialize()});

/* - jquery.highlightsearchterms.js - */
// http://www.eea.europa.eu/portal_javascripts/jquery.highlightsearchterms.js?original=1
(function($){var Highlighter,makeSearchKey,makeAddress,defaults;Highlighter=function(options){$.extend(this,options);this.terms=this.cleanTerms(this.terms.length?this.terms:this.getSearchTerms())};Highlighter.prototype={highlight: function(startnode){if(!this.terms.length||!startnode.length){return}
var self=this;$.each(this.terms, function(i,term){startnode.find('*:not(textarea)').andSelf().contents().each(function(){if(this.nodeType===3){self.highlightTermInNode(this,term)}})})},highlightTermInNode: function(node,word){var c=node.nodeValue,self=this,highlight,ci,index,next;if($(node).parent().hasClass(self.highlightClass)){return}
highlight=function(content){return $('<span class="'+self.highlightClass+'">&nbsp;</span>').text(content)};ci=self.caseInsensitive;while(c&&(index=(ci?c.toLowerCase():c).indexOf(word))>-1){$(node).before(document.createTextNode(c.substr(0,index))).before(highlight(c.substr(index,word.length))).before(document.createTextNode(c.substr(index+word.length)));next=node.previousSibling;$(node).remove();node=next;c=node.nodeValue}},queryStringValue: function(uri,regexp){var match,pair;if(uri.indexOf('?')<0){return ''}
uri=uri.substr(uri.indexOf('?')+1);while(uri.indexOf('=')>=0){uri=uri.replace(/^\&*/,'');pair=uri.split('&',1)[0];uri=uri.substr(pair.length);match=pair.match(regexp);if(match){return decodeURIComponent(match[match.length-1].replace(/\+/g,' '))}}
return ''},termsFromReferrer: function(){var ref,i,se;ref=$.fn.highlightSearchTerms._test_referrer!==null?$.fn.highlightSearchTerms._test_referrer:document.referrer;if(!ref){return ''}
for(i=0;i<this.referrers.length;i+=1){se=this.referrers[i];if(ref.match(se.address)){return this.queryStringValue(ref,se.key)}}
return ''},cleanTerms: function(terms){var self=this;return $.unique($.map(terms, function(term){term=$.trim(self.caseInsensitive?term.toLowerCase():term);return(!term||self.filterTerms.test(term))?null:term}))},getSearchTerms: function(){var terms=[],uri=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.href;if(this.useReferrer){$.merge(terms,this.termsFromReferrer().split(/\s+/))}
if(this.useLocation){$.merge(terms,this.queryStringValue(uri,this.searchKey).split(/\s+/))}
return terms}};makeSearchKey=function(key){return(typeof key==='string')?new RegExp('^'+key+'=(.*)$','i'):key};makeAddress=function(addr){return(typeof addr==='string')?new RegExp('^https?://(www\\.)?'+addr,'i'):addr};$.fn.highlightSearchTerms=function(options){options=$.extend({},defaults,options);options=$.extend(options,{searchKey:makeSearchKey(options.searchKey),referrers:$.map(options.referrers, function(se){return{address:makeAddress(se.address),key:makeSearchKey(se.key)}})});if(options.includeOwnDomain){var hostname=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.hostname;options.referrers.push({address:makeAddress(hostname.replace(/\./g,'\\.')),key:options.searchKey})}
new Highlighter(options).highlight(this);return this};$.fn.highlightSearchTerms.referrers=[{address:'google\\.',key:'q'},{address:'search\\.yahoo\\.',key:'p'},{address:'search\\.msn\\.',key:'q'},{address:'search\\.live\\.',key:'query'},{address:'search\\.aol\\.',key:'userQuery'},{address:'ask\\.com',key:'q'},{address:'altavista\\.',key:'q'},{address:'feedster\\.',key:'q'}];defaults={terms:[],useLocation:true,searchKey:'(searchterm|SearchableText)',useReferrer:true,referrers:$.fn.highlightSearchTerms.referrers,includeOwnDomain:true,caseInsensitive:true,filterTerms:/(not|and|or)/i,highlightClass:'highlightedSearchTerm'};$.fn.highlightSearchTerms._test_location=null;$.fn.highlightSearchTerms._test_referrer=null;$.fn.highlightSearchTerms._highlighter=Highlighter}(jQuery));jQuery(function($){$('#region-content,#content').highlightSearchTerms({includeOwnDomain:$('dl.searchResults').length===0})});

/* - createversion.js - */
// http://www.eea.europa.eu/portal_javascripts/createversion.js?original=1
var latestVersionUrl="";
function checkLatestVersion(repeat){var timeout_count=0,timeout_step=5000,timeout_max=timeout_step * 24;jQuery.ajax({url:context_url+"/@@getLatestVersionUrl",success: function(data){var msg='<div style="text-align:center;width:250px;">';if(data===latestVersionUrl){timeout_count+=timeout_step;if(repeat){jQuery.fancybox(msg+'<strong>The operation will take some time.</strong><br/><br/>'+'<span>The new version will be created shortly. Please refresh '+'this page after a few minutes and check for the new version '+'notification message.</span><br/><br/></div>',{'modal':false})}
else if(timeout_count===timeout_max){setTimeout(function(){return checkLatestVersion(false)},timeout_step)} else{setTimeout(function(){return checkLatestVersion(true)},timeout_step)}} else{jQuery.fancybox(msg+'<span>The new version was created, you can see '+'it by clicking on the following link:</span><br/><br/>'+'<a href="'+data+'">'+data+'</a></div>',{'modal':false})}}})}
function showFancyboxError(){jQuery.fancybox('<div style="text-align:center;width:250px;">'+'<span>An internal error occured, please contact the administrator'+'</span></div>',{'modal':false})}
function startCreationOfNewVersion(){var timeout_codes=[502,503,504];jQuery.ajax({url:context_url+"/@@getLatestVersionUrl"}).done(function(data){latestVersionUrl=data;var versionChecks=Math.floor((Math.random() * 100)+1);jQuery.ajax({type:"POST",url:context_url+"/@@ajaxVersion?check="+versionChecks}).done(function(data){if(data==="NO VERSION IN PROGRESS"){jQuery.ajax({type:"POST",url:context_url+"/@@ajaxVersion?startVersioning=True"}).done(function(){jQuery.fancybox('<div style="text-align:center;width:250px;"><span>'+'Please wait, a new version is being created.</span><br/><br/><img '+'src="++resource++jqzoom/zoomloader.gif"/></div>',{'modal':true});jQuery.ajax({url:context_url+"/@@createVersionAjax",type:"POST"}).done(function(data){if(data.indexOf("SEEURL")===0){var url=data.replace("SEEURL:","");window.location.href=url} else{checkLatestVersion(true)}}).fail(function(xhr,ajaxOptions,thrownError){if(jQuery.inArray(xhr.status,timeout_codes)!==-1){checkLatestVersion(true)}
else{showFancyboxError()}})}).fail(function(){showFancyboxError()})}
if(data==="IN PROGRESS"){window.setTimeout(function(){jQuery.fancybox('<div style="text-align:center;width:250px;">'+'<strong>A new version creation is already in progress.</strong><br/><br/>'+'<span>Please refresh '+'this page after a few minutes and check for the new version '+'notification message.</span><br/><br/></div>',{'modal':false})},2000)}}).fail(function(){showFancyboxError()})})}
jQuery(document).ready(function($){var $show_older_versions=$(".showOlderVersions"),$previous_versions=$("#previous-versions");$previous_versions.css('display','none');$show_older_versions.click(function(e){$previous_versions.slideToggle();e.preventDefault()})});

/* - ++resource++eea.dataservice.view.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++eea.dataservice.view.js?original=1
var Figures={version:'1.0.0'};Figures.fancybox=null;Figures.PhotoAlbum=function(context){this.context=context;this.photos=jQuery('.photoAlbumEntry',this.context);this.photos.removeClass('photoAlbumFolder');var js_context=this;this.photos.each(function(){var photo=jQuery(this);var link=jQuery('a',photo);if(!link.length||link[0].href.indexOf("data-and-maps/figures")===-1){return}
var href=link.attr('href')+'/fancybox.html';link.attr({'href':href,'rel':'fancybox'});link.fancybox({type:'ajax',hideOnContentClick:false,width:870,height:680,autoDimensions:false,padding:0,margin:0,centerOnScroll:false,onComplete:js_context.init_zoom,onClosed:js_context.close})})};Figures.PhotoAlbum.prototype={init_zoom: function(){jQuery(document).trigger('JQ-DEACTIVATE')},close: function(){jQuery(document).trigger('JQ-DEACTIVATE')}};Figures.Load=function(){var context=jQuery('#region-content');Figures.fancybox=new Figures.PhotoAlbum(context)};jQuery(function($){var tempCoverage=$("#tempCoverage"),temporalDynamicText=$("#temporal_dynamic").text(),tempCoverageText=tempCoverage.text();if(tempCoverage&&tempCoverageText==="-1"){tempCoverage.text(temporalDynamicText)}});

/* - ++resource++eea.dataservice.survey.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++eea.dataservice.survey.js?original=1
var DataService={'version':'1.0.0'};DataService.Survey={initialize: function(context){this.context=context?jQuery('#'+context):jQuery('#region-content');this.links=jQuery('a.feedback-survey',this.context);this.selected=null;this.cookie=null;this.survey_next={};if(!this.links.length){return}
var js_context=this;this.links.each(function(){var link=jQuery(this);js_context.survey_next[link.attr('id')]=link.attr('href');link.attr('href','');var cookie_id=jQuery('span.google-analytics-path',link).text();cookie_id=cookie_id.split('/');cookie_id=cookie_id[cookie_id.length-1];link.click(function(evt){js_context.selected=link;js_context.cookie=cookie_id;return js_context.open_survey(this)})});this.init_survey()},init_survey: function(){var js_context=this;js_context.survey=jQuery('<div>');js_context.survey.attr('title','Usage feedback');jQuery.get('@@survey.html',{}, function(data){js_context.survey.html(data);js_context.init_form();js_context.survey.dialog({modal:true,autoOpen:false,width:800,buttons:js_context.buttons()})})},init_form: function(){var js_context=this;var sectors=jQuery('#sectors-widget',js_context.survey);var domains=jQuery('#domains-widget',js_context.survey);var environment=false;var domains_clicked=false;var form=jQuery('form',js_context.survey);form.submit(function(){return false});jQuery('input#environment',sectors).click(function(){var input=jQuery(this);var label=jQuery('label',input.parent());if(input.attr('checked')){environment=true;domains.show();label.css('font-weight','bold')}else{environment=false;domains.hide();label.css('font-weight','normal');jQuery('input',domains).attr('checked',false);domains_clicked=false}});jQuery('input',sectors).click(function(){var checked=jQuery('input:checked',sectors);if(checked.length){if(environment&&!domains_clicked){js_context.survey.dialog('option','buttons',js_context.buttons(false))}else{js_context.survey.dialog('option','buttons',js_context.buttons(true,form))}}else{js_context.survey.dialog('option','buttons',js_context.buttons(false))}});jQuery('input',domains).click(function(){var checked=jQuery('input:checked',domains);if(checked.length){domains_clicked=true;js_context.survey.dialog('option','buttons',js_context.buttons(true,form))}else{domains_clicked=false;js_context.survey.dialog('option','buttons',js_context.buttons(false))}})},buttons: function(download,form){var js_context=this;var res={};if(download){res['Download data']=function(){js_context.download(form.serialize());jQuery(this).dialog('close')}}
res.Cancel=function(){jQuery(this).dialog('close')};res.Skip=function(){js_context.download('skipped=1');jQuery(this).dialog('close')};return res},open_survey: function(link){link=jQuery(link);var cookie=jQuery.cookie(this.cookie);if(!cookie){this.survey.dialog('open');return false}else{return this.download(cookie)}},download: function(query){if(!jQuery.cookie(this.cookie)){if(query!='skipped=1'){jQuery.cookie(this.cookie,query,{expires:1,path:'/'})}}
var next_id=this.selected.attr('id');var next=this.survey_next[next_id];return DataService.Google.track(this.selected,query,next)}};DataService.Google={initialize: function(context){this.context=context?jQuery('#'+context):jQuery('#region-content');this.links=jQuery('a.google-analytics',this.context);if(!this.links.length){return}
var js_context=this;this.links.each(function(){var link=jQuery(this);if(!link.hasClass('feedback-survey')){link.click(function(){return js_context.track(this,'',link.attr('href'))})}})},track: function(link,query,next){link=jQuery(link);var path=jQuery('span.google-analytics-path',link);path=path.text();if(query){path=path+'?'+query}
if(window.pageTracker){pageTracker._trackPageview(path)}
window.location=next;return false}};DataService.Load=function(){DataService.Survey.initialize();DataService.Google.initialize()};

/* - dataset_view.js - */
// http://www.eea.europa.eu/portal_javascripts/dataset_view.js?original=1
function showDefinition(context){if(jQuery(context).html()==='[+]'){jQuery(context).parent().next().slideDown();jQuery(context).html('[x]')}
else{jQuery(context).parent().next().slideUp();jQuery(context).html('[+]')}}
function setTableDefShow(){jQuery('.table-definition-show').click(function(){showDefinition(this)})}
jQuery(document).ready(function(){setTableDefShow();if(window.DataService){window.DataService.Load()}});

/* - promotion_gallery.js - */
/**
 * @version		2.0
 * @package		jquery
 * @subpackage	lofslidernews
 * @copyright	Copyright (C) JAN 2010 LandOfCoder.com <@emai:landofcoder@gmail.com>. All rights reserved.
 * @website     http://landofcoder.com
 * @license		This plugin is dual-licensed under the GNU General Public License and the MIT License

 * @version		2.1 cleanup by ichim-david
 */

(function($) {
    $.fn.lofJSlider = function(settings) {
        return this.each(function() {
            return new $.lofSlider(this, settings);
        });
    };
    $.lofSlider = function(obj, settings) {
        this.settings = {
            direction: '',
            mainItemSelector: 'li',
            navInnerSelector: 'ul',
            navSelector: 'li',
            navigatorEvent: 'click', /* click|mouseenter */
            wrapperSelector: '.sliders-wrap-inner',
            wrapperOuter: '.gallery-slider-wrapper',
            interval: 5000,
            auto: false, // whether to automatic play the slideshow
            maxItemDisplay: 3,
            startItem: 0,
            navPosition: 'vertical', /* values: horizontal|vertical*/
            navigatorHeight: 100,
            navigatorWidth: 310,
            duration: 600,
            navItemsSelector: '.navigator-wrap-inner li',
            navOuterSelector: '.navigator-wrapper',
            isPreloaded: true,
            easing: 'easeInOutQuad',
            pauseOnHover: false,
            galleryControls: "#play-pause",
            galleryPlay: "promo-gallery-play",
            galleryPause: "promo-gallery-pause",
            buttons: null,
            onPlaySlider: function(obj, slider) { obj.wrapper.trigger('promo-gallery:onPlaySlider', { obj: obj, slider: slider }); },
            onComplete: function(slider, index) { slider.trigger('promo-gallery:onComplete', { slider: slider, index: index }); }
        };
        $.extend(this.settings, settings || {});
        this.nextNo = null;
        this.previousNo = null;
        this.maxWidth = this.settings.mainWidth || "100%";

        this.wrapper = $(obj).find(this.settings.wrapperSelector);
        var wrapOuter = $('<div class="gallery-slider-wrapper"></div>').width(this.maxWidth);
        this.wrapper.wrap(wrapOuter);

        this.slides = this.wrapper.find(this.settings.mainItemSelector);
        if (!this.wrapper.length || !this.slides.length) { return; }
        // set width of wrapper
        if (this.settings.maxItemDisplay > this.slides.length) {
            this.settings.maxItemDisplay = this.slides.length;
        }
        this.currentNo = isNaN(this.settings.startItem) || this.settings.startItem > this.slides.length ? 0 : this.settings.startItem;
        this.navigatorOuter = $(obj).find(this.settings.navOuterSelector);
        this.navigatorItems = $(obj).find(this.settings.navItemsSelector);
        this.navigatorInner = this.navigatorOuter.find(this.settings.navInnerSelector);
        // use automatic calculate width of navigator

        if (this.settings.navigatorHeight === null || this.settings.navigatorWidth === null) {
            this.settings.navigatorHeight = this.navigatorItems.eq(0).outerWidth(true);
            this.settings.navigatorWidth = this.navigatorItems.eq(0).outerHeight(true);

        }
        if (this.settings.navPosition === 'horizontal') {
            this.navigatorInner.width(this.slides.length * this.settings.navigatorWidth);
            this.navigatorOuter.width(this.settings.maxItemDisplay * this.settings.navigatorWidth);
            this.navigatorOuter.height(this.settings.navigatorHeight);

        } else {
            this.navigatorInner.height(this.slides.length * this.settings.navigatorHeight);

            this.navigatorOuter.height(this.settings.maxItemDisplay * this.settings.navigatorHeight);
            this.navigatorOuter.width(this.settings.navigatorWidth);
        }
        this.slides.width(this.settings.mainWidth);
        this.navigratorStep = this.__getPositionMode(this.settings.navPosition);
        this.directionMode = this.__getDirectionMode();

        if (this.settings.direction === 'opacity') {
            this.wrapper.addClass('lof-opacity');
            $(this.slides).css({
                'opacity': 0,
                'z-index': 1
            }).eq(this.currentNo).css({
                    'opacity': 1,
                    'z-index': 3
                });
        } else {
            this.wrapper.css({
                'left': '-' + this.currentNo * this.maxSize + 'px',
                'width': (this.maxWidth) * this.slides.length
            });
        }

        if (this.settings.isPreloaded) {
            this.preLoadImage(this.onComplete);
        } else {
            this.onComplete();
        }

        var $buttonControl = $(this.settings.galleryControls, obj);
        if (this.settings.auto) {
            $buttonControl.addClass(this.settings.galleryPause);
        } else {
            $buttonControl.addClass(this.settings.galleryPlay);
        }
        var self = this;

        if (this.settings.pauseOnHover) {
            $(obj).hover(function() {
                self.stop();
            }, function() {
                if (self.settings.auto) {
                    self.play(1, 'next', true);
                }
            });

        }

        $buttonControl.click(function(e) {
            if ($buttonControl.hasClass(self.settings.galleryPlay)) {
                self.settings.auto = true;
                self.play(1, 'next', true);
                $buttonControl.removeClass(self.settings.galleryPlay).addClass(self.settings.galleryPause);
            } else {
                self.settings.auto = false;
                self.stop();
                $buttonControl.addClass(self.settings.galleryPlay).removeClass(self.settings.galleryPause);
            }
            e.preventDefault();
        });
    };
    $.lofSlider.fn = $.lofSlider.prototype;
    $.lofSlider.fn.extend = $.lofSlider.extend = $.extend;

    $.lofSlider.fn.extend({

        startUp: function(obj, wrapper) {
            var self = this;

            this.navigatorItems.each(function(index, item) {
                $(item).bind(self.settings.navigatorEvent, function() {
                    self.jumping(index, true);
                    self.setNavActive(index, item);
                });
                $(item).css({
                    'height': self.settings.navigatorHeight,
                    'width': self.settings.navigatorWidth
                });
            });
            this.setNavActive(this.currentNo);
            this.settings.onComplete(this.slides.eq(this.currentNo), this.currentNo);
            if (this.settings.buttons && typeof(this.settings.buttons) === "object") {
                this.registerButtonsControl('click', this.settings.buttons, this);

            }
            if (this.settings.auto) { this.play(this.settings.interval, 'next', true); }

            return this;
        },
        onComplete: function() {
            setTimeout(function() {
                $('.preload').fadeOut(900, function() {
                    $('.preload').remove();
                });
            }, 400);
            this.startUp();
        },
        preLoadImage: function(callback) {
            var self = this;
            var images = this.wrapper.find('img');

            var count = 0;
            images.each(function(index, image) {
                if (!image.complete) {
                    image.onload = function() {
                        count++;
                        if (count >= images.length) {
                            self.onComplete();
                        }
                    };
                    image.onerror = function() {
                        count++;
                        if (count >= images.length) {
                            self.onComplete();
                        }
                    };
                } else {
                    count++;
                    if (count >= images.length) {
                        self.onComplete();
                    }
                }
            });
        },
        navigationAnimate: function(currentIndex) {
            if (currentIndex <= this.settings.startItem || currentIndex - this.settings.startItem >= this.settings.maxItemDisplay - 1) {
                this.settings.startItem = currentIndex - this.settings.maxItemDisplay + 2;
                if (this.settings.startItem < 0) { this.settings.startItem = 0; }
                if (this.settings.startItem > this.slides.length - this.settings.maxItemDisplay) {
                    this.settings.startItem = this.slides.length - this.settings.maxItemDisplay;
                }
            }

            this.navigatorInner.stop().animate((0,eval)('({' + this.navigratorStep[0] + ':-' + this.settings.startItem * this.navigratorStep[1] + '})'), {
                duration: 500,
                easing: 'easeInOutQuad'
            });
        },
        setNavActive: function(index, item) {
            if ((this.navigatorItems)) {
                this.navigatorItems.removeClass('active');
                $(this.navigatorItems.get(index)).addClass('active');
                this.navigationAnimate(this.currentNo);
            }
        },
        __getPositionMode: function(position) {
            if (position === 'horizontal') {
                return ['left', this.settings.navigatorWidth];
            }
            return ['top', this.settings.navigatorHeight];
        },
        __getDirectionMode: function() {
            switch (this.settings.direction) {
                case 'opacity':
                    this.maxSize = 0;
                    return ['opacity', 'opacity'];
                default:
                    this.maxSize = this.maxWidth;
                    return ['left', 'width'];
            }
        },
        registerButtonsControl: function(eventHandler, objects, self) {
            function next(e) {
                self.next(true);
                e.preventDefault();
            }
            function previous(e) {
                self.previous(true);
                e.preventDefault();
            }
            for (var action in objects) {
                if (objects.hasOwnProperty(action)) {
                    switch (action.toString()) {
                        case 'next':
                            objects[action].click(next);
                            break;
                        case 'previous':
                            objects[action].click(previous);
                            break;
                    }
                }
            }
            return this;
        },
        onProcessing: function(manual, start, end) {
            this.previousNo = this.currentNo + (this.currentNo > 0 ? -1 : this.slides.length - 1);
            this.nextNo = this.currentNo + (this.currentNo < this.slides.length - 1 ? 1 : 1 - this.slides.length);
            return this;
        },
        finishFx: function(manual) {
            if (manual) { this.stop(); }
            if (manual && this.settings.auto) {
                this.play(this.settings.interval, 'next', true);
            }
            this.setNavActive(this.currentNo);
            this.settings.onPlaySlider(this, $(this.slides).eq(this.currentNo));
        },
        getObjectDirection: function(start, end) {
            return (0,eval)("({'" + this.directionMode[0] + "':-" + (this.currentNo * start) + "})");
        },
        fxStart: function(index, obj, currentObj) {
            var s = this;
            if (this.settings.direction === 'opacity') {

                $(this.slides).stop().animate({
                    opacity: 0
                }, {
                    duration: this.settings.duration,
                    easing: this.settings.easing,
                    complete: function() {
                        s.slides.css("z-index", "1");
                        s.slides.eq(index).css("z-index", "3");
                    }
                });
                $(this.slides).eq(index).stop().animate({
                    opacity: 1
                }, {
                    duration: this.settings.duration,
                    easing: this.settings.easing,
                    complete: function() {
                        s.settings.onComplete($(s.slides).eq(index), index);
                    }
                });
            } else {
                this.wrapper.stop().animate(obj, {
                    duration: this.settings.duration,
                    easing: this.settings.easing,
                    complete: function() {
                        s.settings.onComplete($(s.slides).eq(index), index);
                    }
                });
            }
            return this;
        },
        jumping: function(no, manual) {
            this.stop();
            if (this.currentNo === no) { return; }
            var obj = (0,eval)("({'" + this.directionMode[0] + "':-" + (this.maxSize * no) + "})");
            this.onProcessing(null, manual, 0, this.maxSize)
                .fxStart(no, obj, this)
                .finishFx(manual);
            this.currentNo = no;
        },
        next: function(manual, item) {

            this.currentNo += (this.currentNo < this.slides.length - 1) ? 1 : (1 - this.slides.length);
            this.onProcessing(item, manual, 0, this.maxSize)
                .fxStart(this.currentNo, this.getObjectDirection(this.maxSize), this)
                .finishFx(manual);
        },
        previous: function(manual, item) {
            this.currentNo += this.currentNo > 0 ? -1 : this.slides.length - 1;
            this.onProcessing(item, manual)
                .fxStart(this.currentNo, this.getObjectDirection(this.maxSize), this)
                .finishFx(manual);
        },
        play: function(delay, direction, wait) {
            this.stop();
            if (!wait) {
                this[direction](false);
            }
            var self = this;
            this.isRun = setTimeout(function() {
                self[direction](true);
            }, delay);
        },
        stop: function() {
            if (this.isRun === null) { return; }
            clearTimeout(this.isRun);
            this.isRun = null;
        }
    });
})(jQuery);


/* - promo_gallery.js - */
// http://www.eea.europa.eu/portal_javascripts/promo_gallery.js?original=1
(function($){$(function(){var buttons={previous:$('#prev-promo'),next:$('#next-promo')};var small_navigator=$("#promo-navigator-sm"),site_address=small_navigator.length?true:undefined,nav_height=site_address?50:80,nav_width=site_address?65:170,nav_items_selector=site_address?"#promo-navigator-sm li":"#promo-navigator li",wrapper_selector=site_address?"#promo-gallery-content-sm":"#promo-gallery-content",max_item_display=site_address?5:3,nav_position=site_address?'horizontal':'vertical',nav_outer_selector=site_address?"#navigator-outer-sm":"#navigator-outer";var settings={interval:10000,direction:'opacity',duration:1500,wrapperSelector:wrapper_selector,navItemsSelector:nav_items_selector,navOuterSelector:nav_outer_selector,isPreloaded:false,maxItemDisplay:max_item_display,navigatorHeight:nav_height,navigatorWidth:nav_width,navPosition:nav_position,auto:true,caption:'.promo-item-desc',opacityClass:'lof-opacity',buttons:buttons};$('#promo-gallery-wrapper').lofJSlider(settings);var $content=$("#promo-gallery-content");var $items=$content.find('li');if($items.length===1){$items.css('position','relative')}})}(jQuery));

/* - whatsnew_gallery.js - */
// http://www.eea.europa.eu/portal_javascripts/whatsnew_gallery.js?original=1
jQuery(document).ready(function($){window.whatsnew={};var eea_gal=window.whatsnew;(function(){eea_gal.site_address=$("base").attr('href')+'/';eea_gal.gallery=$("#whatsnew-gallery");eea_gal.gallery_page=eea_gal.gallery.attr("data-page")}());eea_gal.gallery_load=function(el,address,params,layout_selection){el.load(address,params, function(html){var album=el.find('.gallery-album');var listing=el.find('.gallery-listing');var layout=layout_selection||el.parent().find('.gallery-layout-selection li a')[0];if(html.length>1){if(layout&&layout.className==="list-layout active-list"){el.find('.gallery-album').addClass('hiddenStructure');listing.hide().fadeIn('slow')}
else{el.find('.gallery-listing').addClass('hiddenStructure');album.hide().fadeIn('slow')}}
if(el.find('.js-other-languages').length){$(window).trigger('eea.whatsnew.getResultsInAllLanguages',el)}})};eea_gal.whatsnew_func=function(cur_tab_val,sel_text,sel_value,index,tag_title){var address=eea_gal.site_address+cur_tab_val+"_gallery_macro";eea_gal.current_tab_addr=address;var gal=eea_gal.gallery.find(".eea-tabs-panel");var news=index?gal[index]:gal.filter(function(){return this.style.display!=='none'});news=index===0?gal.first():news;news=news[0]!==undefined?news[0]:news;var gallery_ajax=$(".gallery-ajax",news);var layout_selection=$('.gallery-layout-selection li a',news)[0];var params=sel_value?'topic'+'='+sel_value:undefined;params=tag_title?'tags'+'='+sel_value:params;eea_gal.gallery_load(gallery_ajax,address,params,layout_selection)};$(window).bind('eea.whatsnew.getResultsInAllLanguages', function(ev,data){var $data=$(data);$data.find('a').click(function(ev){var params='Language='+ev.target.innerHTML;eea_gal.gallery_load($data,eea_gal.current_tab_addr,params);ev.preventDefault()})});$("#whatsnew-gallery .eea-tabs, #multimedia-tabs").tabs("> .eea-tabs-panel", function(event,index){var cur_tab=this.getTabs()[index],cur_tab_val=cur_tab.id.substr(4);cur_tab.theme=cur_tab.theme||"none";var opt_item,sel_value,sel_text,tag_title;var highlight=$("#"+cur_tab_val+"-highlights");var gallery_ajax=highlight.find('.gallery-ajax');var ajax_loader_img='<div style="text-align: center;"><img src="++resource++faceted_images/ajax-loader.gif" /></div>';var tag_cloud=$("#bottomright-widgets").find('#tag-cloud-content');if(cur_tab_val.indexOf('green')===-1||cur_tab_val.indexOf('video')===-1){tag_cloud.find("#c1_widget").fadeOut().empty().end().find('#c3_widget').empty().fadeOut()}
if(tag_cloud.length){var address,topic_params,tags_params;var tabs=function(address,topic_params,tags_params){address=address||eea_gal.site_address+'all/@@tagscloud_counter';topic_params=topic_params||"cid=c1&c2=Products.EEAContentTypes.content.interfaces.IFlashAnimation&c3=all&c8=Animation+(swf)&c4=published&b_start=0";tags_params=tags_params||"cid=c3&c2=Products.EEAContentTypes.content.interfaces.IFlashAnimation&c3=all&c8=Animation+(swf)&c4=published&b_start=0";tag_cloud.load(address,topic_params, function(){tag_cloud.find("#c1_widget").fadeIn();var themes=$("#c1");themes.tagcloud({type:'list',height:280,sizemin:12});var themes_li=themes.find('li');var theme_vals;theme_vals=themes_li.filter(function(){return this.value===1});theme_vals.remove();$.get(address,tags_params, function(data){tag_cloud.append(data);$("#c3_widget").fadeIn();var tags=$("#c3");tags.tagcloud({type:'list',height:280,sizemin:12});var vals=tags.find('li').filter(function(){return this.value===1});vals.remove();$("#faceted-tabs").tabs("#tag-cloud-content > div.faceted-widget");$('#c1all').addClass('selected');$('#c3all').addClass('selected')})})};switch(cur_tab_val){case "greentips":address=eea_gal.site_address+'all/@@tagscloud_counter';topic_params="cid=c1&c2=Products.EEAContentTypes.content.interfaces.IFlashAnimation&c3=all&c8=Animation+(swf)&c4=published&b_start=0";tags_params="cid=c3&c2=Products.EEAContentTypes.content.interfaces.IFlashAnimation&c3=all&c8=Animation+(swf)&c4=published&b_start=0";gallery_ajax.html(ajax_loader_img);tabs(address,topic_params,tags_params);break;case "videoclips":address=eea_gal.site_address+'all/@@tagscloud_counter';topic_params="cid=c1&c2=eea.mediacentre.interfaces.IVideo&c3=all&c8=&c4=published&b_start=0";tags_params="cid=c3&c2=eea.mediacentre.interfaces.IVideo&c3=all&c8=&c4=published&b_start=0";gallery_ajax.html(ajax_loader_img);tabs(address,topic_params,tags_params);break}}
opt_item=$("#topic-selector").find(":selected");if(opt_item.length){sel_value=opt_item.val();sel_text=opt_item.text()}
else{$(".filter-topic").hide()}
var album=highlight.find('.gallery-album');var album_length=album.length!==0?album.children().length:0;var notopics=highlight.find('.portalMessage'),notopics_length=notopics.length!==0?1:0;if(cur_tab.theme===sel_value&&notopics_length!==0){return}
if(sel_text&&sel_text.indexOf("All")!==-1||album_length===0&&!highlight.find('.portalMessage').length){album.html(ajax_loader_img);eea_gal.whatsnew_func(cur_tab_val,sel_text,sel_value,index,tag_title)}
if(sel_value){if(cur_tab.theme!==sel_value){album.html(ajax_loader_img);cur_tab.theme=sel_value;eea_gal.whatsnew_func(cur_tab_val,sel_text,sel_value,index,tag_title)}}});var $topic_selector=$("#topic-selector");$topic_selector.find('[value="default"]').remove();$topic_selector.change(
function displayResult(){$topic_selector[0][0].className="hiddenStructure";var x=this.selectedIndex,y=this.options;var topic_value=y[x].value,topic_text=y[x].innerHTML;var tab_val=$("#whatsnew-gallery .eea-tabs a.current, #multimedia-tabs a.current")[0].id.substr(4);eea_gal.whatsnew_func(tab_val,topic_text,topic_value)});var layout_links=$(".gallery-layout-selection li a");layout_links.click(function(e){var $this=$(this);var $parent=$this.parent();var $ajax=$this.closest('ul').next();var $hidden_gallery=$ajax.find(".hiddenStructure");var listing=$ajax.find('.gallery-listing');var album=$ajax.find('.gallery-album');var next=$parent.siblings().find('a');var link_class=$this[0].className;var highlight=$this.closest('div')[0].id;if(link_class==="list-layout active-list"||link_class==="album-layout active-album"){e.preventDefault();return}
var cookie_expires=new Date();cookie_expires.setMonth(cookie_expires.getMonth()+1);if(link_class.indexOf("list-layout")!==-1){album.slideUp('slow');listing.slideDown('slow');$hidden_gallery.removeClass("hiddenStructure");$this.toggleClass("active-list");next.toggleClass("active-album");SubCookieUtil.set(eea_gal.gallery_page,highlight,"active-list",cookie_expires)}
else{listing.slideUp('slow');album.slideDown('slow');$hidden_gallery.removeClass("hiddenStructure");$this.toggleClass("active-album");next.toggleClass("active-list");SubCookieUtil.set(eea_gal.gallery_page,highlight,"active-album",cookie_expires)}
e.preventDefault()});if(eea_gal.gallery.length>0){var gallery_cookies=SubCookieUtil.getAll(eea_gal.gallery_page);if(gallery_cookies!==null){eea_gal.gallery.find('.eea-tabs-panel').each(function(){var $this=$(this);var layouts=$this.find(".gallery-layout-selection li a");var $hidden_gallery=$this.find(".hiddenStructure");var link_listing=layouts.first();var link_album=layouts.last();var listing=$this.find('.gallery-listing');var album=$this.find('.gallery-album');var gallery_cookie=gallery_cookies[this.id];if(gallery_cookie!==null){if(gallery_cookie==="active-album"){listing.hide();album.show();$hidden_gallery.removeClass("hiddenStructure");link_listing.removeClass("active-list");link_album.addClass("active-album")}
else if(gallery_cookie==="active-list"){listing.show();album.hide();$hidden_gallery.removeClass("hiddenStructure");link_listing.addClass("active-list");link_album.removeClass("active-album")}}})}}});

/* - print_warning.js - */
// http://www.eea.europa.eu/portal_javascripts/print_warning.js?original=1
var warning_displayed=false;window.onbeforeprint=function(){var warning_text=jQuery.trim(jQuery("#print-warning p").html());if(warning_displayed===false){alert(warning_text)}};jQuery(document).ready(function($){$('#icon-print').parent().attr('href','#').click(function(){var warning_text=$.trim($("#print-warning p").html());if(confirm(warning_text)){warning_displayed=true;window.print()}})});

/* - eea.geotags.js - */
/*global window, jQuery, google*/

(function() {

  jQuery.geoevents = {
    select_point: 'geo-event-select-point',
    select_marker: 'geo-event-select-marker',
    map_loaded: 'geo-events-map-loaded',
    basket_loaded: 'geo-events-basket-loaded',
    basket_delete: 'geo-events-basket-delete',
    basket_save: 'geo-events-basket-save',
    basket_update: 'geo-events-basket-update',
    basket_cancel: 'geo-events-basket-cancel',
    ajax_start: 'geo-events-ajax-start',
    ajax_stop: 'geo-events-ajax-stop'
  };

// Convert google geocoder to geojson
  jQuery.google2geojson = function(googlejson) {
    var feature = {
      type: 'Feature',
      bbox: [],
      geometry: {
        type: 'Point',
        coordinates: []
      },
      properties: {
        name: '',
        title: '',
        description: '',
        tags: '',
        center: [],
        other: googlejson
      }
    };
    feature.properties.title = googlejson.address_components[0].long_name;
    feature.properties.description = googlejson.formatted_address;
    feature.properties.tags = googlejson.types;

    // Geometry
    feature.properties.center = [
      googlejson.geometry.location.lat(),
      googlejson.geometry.location.lng()
    ];

    var bounds = googlejson.geometry.bounds;
    var type = 'Point';
    if (bounds) {
      type = 'Polygon';
    } else {
      bounds = googlejson.geometry.viewport;
    }
    feature.geometry.type = type;

    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();
    if (type === 'Polygon') {
      feature.geometry.coordinates = [
        [sw.lat(), sw.lng()],
        [sw.lat(), ne.lng()],
        [ne.lat(), ne.lng()],
        [ne.lat(), sw.lng()]
      ];
    } else {
      feature.geometry.type = 'Point';
      feature.geometry.coordinates = [
        googlejson.geometry.location.lat(),
        googlejson.geometry.location.lng()
      ];
    }

    feature.bbox = [sw.lat(), sw.lng(), ne.lat(), ne.lng()];
    return feature;
  };

  /* Geolocator dialog jQuery plugin */
  jQuery.fn.geodialog = function(settings) {
    var self = this;
    self.initialized = false;
    self.events = {
      initialize: 'geo-dialog-initialize',
      save: 'geo-dialog-save',
      cancel: 'geo-dialog-cancel'
    };

    self.options = {
      template: '',
      width: jQuery(window).width() * 0.85,
      height: jQuery(window).height() * 0.95,

      sidebar: {
        json: '',
        template: '',
        suggestions: '',
        fieldName: self.attr('id'),
        tabs: {
          search: {},
          advanced: {}
        }
      },

      map: {
        json: '',
        fieldName: self.attr('id')
      },

      basket: {
        json: '',
        template: '',
        fieldName: self.attr('id'),
        geojson: {
          type: 'FeatureCollection',
          features: []
        }
      },

      // Handlers
      handle_leftbutton_dblclick: function(button, area) {
        var width = self.leftarea.width();
        var max_width = 300;
        var min_width = 0;
        if (width < 20) {
          area.trigger('resize', [max_width]);
          jQuery('a', self.leftbutton).html('&laquo;');
        } else {
          area.trigger('resize', [min_width]);
          jQuery('a', self.leftbutton).html('&raquo;');
        }
      },

      handle_rightbutton_dblclick: function(button, area) {
        var width = self.rightarea.width();
        var min_width = area.width();
        var max_width = parseInt(3 * area.width() / 4, 10);

        if (width < 20) {
          area.trigger('resize', [max_width]);
          jQuery('a', self.rightbutton).html('&raquo;');
        } else {
          area.trigger('resize', [min_width]);
          jQuery('a', self.rightbutton).html('&laquo;');
        }
      },

      handle_initialize: function() {
        if (self.initialized) {
          // Already initialized
          return;
        }

        // Splitter
        jQuery.get(self.options.template, function(data) {
          var $data = jQuery(data);
          self.empty();
          self.append($data);

          // Left splitter
          var left = jQuery('.geo-leftside', self);
          left.splitter({
            type: 'v',
            outline: true,
            accessKey: "L"
          });

          self.leftarea = jQuery('.geo-left', left);
          self.leftbutton = jQuery('.vsplitbar', left);
          jQuery('a', self.leftbutton).html('&raquo;');

          jQuery('a', self.leftbutton).click(function() {
            self.options.handle_leftbutton_dblclick(self.leftbutton, left);
          });

          self.leftbutton.dblclick(function() {
            self.options.handle_leftbutton_dblclick(self.leftbutton, left);
          });

          // Right splitter
          var right = jQuery('.geo-splitter', self);
          right.splitter({
            type: 'v',
            outline: true,
            sizeRight: 0,
            accessKey: "R"
          });

          self.rightarea = jQuery('.geo-right', right);
          self.rightbutton = jQuery(jQuery('.vsplitbar', right)[1]);
          jQuery('a', self.rightbutton).html('&laquo;');

          jQuery('a', self.rightbutton).click(function() {
            self.options.handle_rightbutton_dblclick(self.rightbutton, right);
          });

          self.rightbutton.dblclick(function() {
            self.options.handle_rightbutton_dblclick(self.rightbutton, right);
          });

          // Sidebar
          self.sidebar = jQuery('.geo-sidebar', self);
          self.sidebar.geosidebar(self.options.sidebar);

          // Map
          self.mapcanvas = jQuery('.geo-map', self);
          self.mapcanvas.geomap(self.options.map);

          // Basket
          self.basket = jQuery('.geo-basket', self);
          self.options.basket.origJSON = jQuery.extend({}, self.options.basket.geojson);
          self.basket.geobasket(self.options.basket);

        });

        // Plugin initialized
        self.initialized = true;
      },

      handle_map_loaded: function() {
        jQuery('a', self.leftbutton).click();
        jQuery('a', self.rightbutton).click();
      },

      handle_save: function() {
        var fieldName = self.attr('id');
        var json = self.basket.options.geojson;
        // sort the geotags by name before sending it to object annotation
        json.features = json.features.sort(function(a, b) {
          var aName = a.properties.title.toLowerCase();
          var bName = b.properties.title.toLowerCase();
          return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
        });

        self.trigger(jQuery.geoevents.basket_save, {json: json});
        self.trigger(jQuery.geoevents.basket_update, {json: json});
        json = JSON.stringify(json);
        jQuery('[name=' + fieldName + ']').text(json);
      },

      initialize: function() {
        self.dialog({
          bgiframe: true,
          modal: true,
          closeOnEscape: false,
          autoOpen: false,
          width: self.options.width,
          height: self.options.height,
          resize: true,
          dialogClass: 'eea-geotags-popup',
          buttons: {
            'Save geotags': function() {
              self.dialog('close');
              self.trigger(self.events.save);
            },
            'Cancel': function() {
              self.dialog('close');
              self.trigger(self.events.cancel);
            }
          },
          close: function(e) {
            if (e.currentTarget) {
              self.trigger(self.events.cancel);
            }
          },
          open: function() {
            self.trigger(self.events.initialize);
          }
        });

        // Bind events
        self.bind(self.events.initialize, function(evt, data) {
          self.options.handle_initialize(data);
        });

        self.bind(self.events.save, function(evt, data) {
          self.options.handle_save(data);
        });

        self.bind(self.events.cancel, function() {
          jQuery(self).trigger(jQuery.geoevents.basket_cancel);
        });

        jQuery(self).bind(jQuery.geoevents.map_loaded, function(data) {
          self.options.handle_map_loaded(data);
        });
      }
    };

    // Update settings
    if (settings) {
      jQuery.extend(self.options, settings);
    }

    self.options.initialize();
    return this;
  };

  /* Geo Map Canvas jQuery plugin */
  jQuery.fn.geomap = function(settings) {
    var self = this;

    self.options = {
      json: '',
      fieldName: '',
      map_options: {
        latitude: 55,
        longitude: 35,
        center: null,
        zoom: 4,
        navigationControl: true,
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.ZOOM_PAN,
          position: google.maps.ControlPosition.RIGHT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT,
          style: google.maps.MapTypeControlStyle.DEFAULT
        },
        mapTypeId: google.maps.MapTypeId.TERRAIN
      },

      // Handlers
      handle_select: function(data, autoclick) {
        if (!data) {
          return;
        }

        if (data.bbox.length) {
          var lat = data.bbox[0];
          var lng = data.bbox[1];
          var sw = new google.maps.LatLng(lat, lng);

          lat = data.bbox[2];
          lng = data.bbox[3];
          var ne = new google.maps.LatLng(lat, lng);

          var viewport = new google.maps.LatLngBounds(sw, ne);
          self.Map.fitBounds(viewport);
        } else {
          self.Map.setZoom(4);
        }

        // Marker
        jQuery.geomarker({
          fieldName: self.options.fieldName,
          map: self.Map,
          points: [data],
          center: data.properties.center,
          autoclick: autoclick
        });
      },

      handle_rightclick: function(data, center) {
        // Markers
        jQuery.geomarker({
          fieldName: self.options.fieldName,
          map: self.Map,
          points: data.features,
          center: center
        });
      },

      initialize: function() {
        self.initialized = false;
        self.addClass('geo-mapcanvas');
        var options = self.options.map_options;
        if (!options.latlng) {
          options.center = new google.maps.LatLng(
            options.latitude,
            options.longitude
          );
        }

        self.Map = new google.maps.Map(self[0], options);

        self.Geocoder = new google.maps.Geocoder();

        // Handle events
        var context = jQuery('#' + self.options.fieldName);
        jQuery(context).bind(jQuery.geoevents.select_point, function(evt, data) {
          data.target.effect('transfer', {to: self}, 'slow', function() {
            self.options.handle_select(data.point, data.autoclick);
          });
        });

        // Map initialized
        google.maps.event.addListener(self.Map, 'tilesloaded', function() {
          if (self.initialized) {
            return;
          }
          self.initialized = true;
          jQuery(context).trigger(jQuery.geoevents.map_loaded);
        });

        // Right click
        google.maps.event.addListener(self.Map, 'rightclick', function(data) {
          var latlng = data.latLng;
          var center = [latlng.lat(), latlng.lng()];

          // Empty marker to clear map
          jQuery.geomarker({
            fieldName: self.options.fieldName,
            map: self.Map,
            center: center,
            points: []
          });

          jQuery(context).trigger(jQuery.geoevents.ajax_start);
          self.Geocoder.geocode({location: latlng}, function(results) {
            var features = [];
            jQuery.each(results, function() {
              features.push(jQuery.google2geojson(this));
            });

            var results_obj = {
              type: 'FeatureCollection',
              features: features
            };

            self.options.handle_rightclick(results_obj, center);
            jQuery(context).trigger(jQuery.geoevents.ajax_stop);
          });
        });
      }
    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    // Return
    self.options.initialize();
    return this;
  };

  jQuery.geomarker = function(settings) {
    var self = this;

    self.options = {
      fieldName: '',
      template: '<div class="geo-marker">' +
        '<h3 class="title"></h3>' +
        '<h4 class="subtitle"></h4>' +
        '<h5 class="tags"></h5>' +
        '</div>',
      map: null,
      points: [],
      center: [0, 0],
      autoclick: false,

      initialize: function() {
        self.options.clear();
        self.mappoints = {};

        // Marker
        var center = self.options.center;
        var latlng = new google.maps.LatLng(center[0], center[1]);
        self.marker = new google.maps.Marker({
          position: latlng
        });
        self.marker.setMap(self.options.map);

        // InfoWindow
        var template = jQuery('<div>');
        jQuery.each(self.options.points, function() {
          var point = this;
          var uid = point.properties.center[0] + '-' + point.properties.center[1];
          self.mappoints[uid] = point;

          var title = this.properties.title;
          var subtitle = this.properties.description;
          var tags = '';
          if (typeof(this.properties.tags) === 'string') {
            tags = this.properties.tags;
          } else {
            jQuery.each(this.properties.tags, function() {
              tags += this + ', ';
            });
          }

          var itemplate = jQuery(self.options.template);
          itemplate.attr('id', uid).attr('title', 'Add');
          var icon = jQuery('<div>')
            .addClass('ui-icon')
            .addClass('ui-icon-extlink')
            .text('+');
          itemplate.prepend(icon);
          jQuery('.title', itemplate).text(title);
          jQuery('.subtitle', itemplate).text(subtitle);
          jQuery('.tags', itemplate).text(tags);

          template.append(itemplate);
        });

        var context = jQuery('#' + self.options.fieldName);
        if (self.options.points.length) {
          // Add info window
          self.info = new google.maps.InfoWindow({
            content: template.html()
          });

          self.info.open(self.options.map, self.marker);
          google.maps.event.addListener(self.info, 'domready', function() {
            var $geo_marker = jQuery('.geo-marker');
            $geo_marker.click(function() {
              var _self = jQuery(this);
              jQuery(context).trigger(jQuery.geoevents.select_marker, {
                point: self.mappoints[_self.attr('id')],
                button: _self
              });
            });

            // Autoclick
            if (self.options.autoclick) {
              $geo_marker.click();
            }
          });

          // Google event handlers
          google.maps.event.addListener(self.marker, 'click', function() {
            self.info.open(self.options.map, self.marker);
          });
        }
      },

      clear: function() {
        if (self.marker) {
          self.marker.setMap(null);
        }
        if (self.info) {
          self.info.close();
        }
      }
    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    self.options.initialize();
    return this;
  };

  /* Geo basket jQuery plugin */
  jQuery.fn.geobasket = function(settings) {
    var self = this;

    self.options = {
      json: '',
      template: '',
      fieldName: '',
      multiline: 1,
      geojson: {
        type: 'FeatureCollection',
        features: []
      },

      initialize: function() {
        var query = {};
        query.fieldName = self.options.fieldName;
        jQuery.get(self.options.template, query, function(data) {
          self.html(data);
          self.options.redraw(false);
          jQuery(context).trigger(jQuery.geoevents.basket_loaded, self);

        });

        var context = jQuery('#' + self.options.fieldName);
        jQuery(context).bind(jQuery.geoevents.select_marker, function(evt, data) {
          data.button.effect('transfer', {to: self}, 'slow', function() {
            self.options.handle_select(data.point);
          });
        });

        jQuery(context).bind(jQuery.geoevents.basket_loaded, function(evt) {
          self.options.handle_loaded(evt);
        });

        jQuery(context).bind(jQuery.geoevents.basket_cancel, function(evt) {
          self.options.handle_cancel(evt);
        });

        jQuery(context).bind(jQuery.geoevents.basket_update, function(evt, data) {
          self.options.handle_update(data);
        });

        jQuery(context).bind(jQuery.geoevents.basket_delete, function(evt, data) {
          data.element.slideUp(function() {
            jQuery(this).remove();
            self.options.handle_delete(data.point);
          });
        });
      },

      handle_loaded: function() {
        var geobasket_clear = jQuery('.geo-basket-clear', self);
        geobasket_clear.find('.ui-icon-trash').click(function() {
          var items = jQuery('.geo-basket-items', self);
          items.find('.ui-icon-trash').click();
        });
      },

      handle_delete: function(point) {
        var pcenter = point.properties.center;
        pcenter = pcenter[0] + '-' + pcenter[1];
        self.options.geojson.features = jQuery.map(self.options.geojson.features,
          function(feature) {
            var center = feature.properties.center;
            center = center[0] + '-' + center[1];
            if (pcenter !== center) {
              return feature;
            }
          });
      },

      handle_cancel: function() {
        if (self.options.origJSON.features) {
          self.options.geojson = jQuery.extend({}, self.options.origJSON);
          self.options.redraw();
        }
        else {
          self.options.geojson.features = [];
          self.options.redraw();
        }
      },

      handle_update: function(data) {
        self.options.origJSON = jQuery.extend({}, data.json);
      },

      handle_select: function(point) {
        var i, eea_geotags = window.EEAGeotags,
          initialData = eea_geotags.initialCountryData,
          initialData_length, names, features_length;
        if (!self.options.multiline) {
          self.options.geojson.features = [];
        } else {
          self.options.handle_delete(point);
        }

        if (point.properties.countries && eea_geotags.shouldExpandCountryGroups) {
          names = [];
          // add also the individual countries that are part of this country group
          initialData_length = initialData.features.length;

          features_length = self.options.geojson.features.length;
          // collect the names so that we can have a property to check upon for
          // points that are already added
          for (i = 0; i < features_length; i += 1) {
            names.push(self.options.geojson.features[i].properties.name);
          }
          for (i = 0; i < initialData_length; i += 1) {
            // add only the countries that are not already in the list by checking
            // their geotags name
            if (jQuery.inArray(initialData.features[i].properties.name, names) === -1) {
              self.options.geojson.features.unshift(initialData.features[i]);
            }
          }
        }
        else {
          self.options.geojson.features.unshift(point);
        }
        self.options.redraw(true);
      },

      redraw: function(highlight) {
        var items = jQuery('.geo-basket-items', self);
        items.empty();

        jQuery.each(self.options.geojson.features, function() {
          var div = jQuery('<div>');
          items.append(div);
          div.geobasketitem({
            fieldName: self.options.fieldName,
            point: this
          });
        });

        if (highlight) {
          var first = jQuery('.geo-point-view:first', items);
          first.addClass('ui-pulsate-item');
          first.effect('pulsate', {}, 200, function() {
            first.removeClass('ui-pulsate-item');
          });
        }
      }
    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    // Return
    self.options.initialize();
    return this;
  };

  /* Geo basket item */
  jQuery.fn.geobasketitem = function(settings) {
    var self = this;
    self.options = {
      fieldName: '',
      template: '<div>' +
        '<h3 class="title"></h3>' +
        '<h4 class="subtitle"></h4>' +
        '<h5 class="tags"></h5>' +
        '</div>',
      point: {},

      // Methods
      initialize: function() {
        self.addClass('geo-point-view');
        self.delbutton = jQuery('<div>')
          .addClass('ui-icon')
          .addClass(' ui-icon-trash')
          .text('X')
          .attr('title', 'Delete');
        self.prepend(self.delbutton);

        var context = jQuery('#' + self.options.fieldName);
        self.delbutton.click(function() {
          jQuery(context).trigger(jQuery.geoevents.basket_delete, {
            point: self.options.point,
            element: self
          });
        });

        var title = self.options.point.properties.title;
        var subtitle = self.options.point.properties.description;
        var tags = '';
        if (typeof(self.options.point.properties.tags) === 'string') {
          tags = self.options.point.properties.tags;
        } else {
          jQuery.each(self.options.point.properties.tags, function() {
            tags += this + ', ';
          });
        }

        var template = jQuery(self.options.template);
        jQuery('.title', template).text(title);
        jQuery('.subtitle', template).text(subtitle);
        jQuery('.tags', template).text(tags);

        self.append(template);
      }
    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    self.options.initialize();
    return this;
  };

  /* Geo Side bar jQuery plugin */
  jQuery.fn.geosidebar = function(settings) {
    var self = this;
    self.options = {
      json: '',
      template: '',
      suggestions: '',
      fieldName: '',
      tabs: {
        search: {},
        advanced: {}
      },

      // Methods
      initialize: function() {
        var query = {};
        query.fieldName = self.options.fieldName;
        jQuery.get(self.options.template, query, function(data) {
          self.sidebararea = jQuery(data);

          self.loading = jQuery('<div>');
          self.sidebararea.append(self.loading);
          self.loading.geoloader({
            fieldName: self.options.fieldName
          });

          self.append(self.sidebararea);

          var options = self.options.tabs;
          options.json = self.options.json;
          options.fieldName = self.options.fieldName;
          options.suggestions = self.options.suggestions;
          self.sidebararea.geotabs(options);
        });
      }

    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    self.options.initialize();
    return this;
  };

  jQuery.fn.geoloader = function(settings) {
    var self = this;
    self.working = 0;

    self.options = {
      fieldName: '',

      initialize: function() {
        self.addClass('geo-loading');
        self.hide();

        var context = jQuery('#' + self.options.fieldName);
        self.ajaxStart(function() {
          jQuery(context).trigger(jQuery.geoevents.ajax_start);
        });

        self.ajaxStop(function() {
          jQuery(context).trigger(jQuery.geoevents.ajax_stop);

        });

        jQuery(context).bind(jQuery.geoevents.ajax_start, function() {
          self.show();
        });

        jQuery(context).bind(jQuery.geoevents.ajax_stop, function() {
          self.hide();
        });
      },

      show: function() {
        self.working += 1;
        if (self.working > 0) {
          self.show();
        }
      },

      hide: function() {
        self.working -= 1;
        if (!self.working) {
          self.hide();
        }
      }
    };


    if (settings) {
      jQuery.extend(self.options, settings);
    }

    self.options.initialize();
    return this;
  };

  /* Geo tabs jQuery plugin */
  jQuery.fn.geotabs = function(settings) {
    var self = this;

    self.options = {
      json: '',
      fieldName: '',
      suggestions: '',
      search: {},
      advanced: {},

      // Methods
      initialize: function() {
        var $geo_panes, $icons;
        if (window.EEA) {
          if (window.EEA.eea_accordion) {
            window.EEA.eea_accordion(jQuery('.eea-accordion-panels', self));
          }
        }
        else {
          $geo_panes = jQuery('.geo-panes', self);
          $icons = $geo_panes.find('.eea-icon').addClass('ui-icon ui-icon-carat-1-e');
          $icons.eq(0).removeClass('ui-icon-carat-1-e')
            .addClass('ui-icon-carat-1-s');
          $geo_panes.find('h2').click(function() {
            var $this = $(this);
            $icons.removeClass('ui-icon-carat-1-s ui-icon-carat-1-e')
              .addClass('ui-icon-carat-1-e');
            $this.find('.eea-icon')
              .removeClass('ui-icon-carat-1-e')
              .addClass('ui-icon-carat-1-s');
          });
          $geo_panes.tabs('.geo-pane', {tabs: 'h2', effect: 'slide'});
        }
        var options = self.options.search;
        options.json = self.options.json;
        options.fieldName = self.options.fieldName;
        options.suggestions = self.options.suggestions;
        jQuery('.geo-results', self).geosearchtab(options);

        options = self.options.advanced;
        options.json = self.options.json;
        options.fieldName = self.options.fieldName;
        jQuery('.geo-advanced', self).geoadvancedtab(options);

      }
    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    self.options.initialize();
    return this;
  };

  /* Geo search tab jQuery plugin */
  jQuery.fn.geosearchtab = function(settings) {
    var self = this;

    // Default settings
    self.options = {
      // Settings
      fieldName: '',
      json: '',
      suggestions: '',
      query: {
        address: '',
        q: '',
        country: '',
        featureClass: '',
        continentCode: '',
        maxRows: 10
      },

      handle_suggestions: function(data) {
        var suggestions = data.suggestions;

        if (!suggestions.length) {
          return;
        }

        var htitle = jQuery('<h5>').text('Suggestions').addClass('geo-suggestions');
        self.resultsarea.append(htitle);

        var context = jQuery('#' + self.options.fieldName);

        jQuery.each(suggestions, function() {
          self.options.query.address = this.text;
          jQuery(context).trigger(jQuery.geoevents.ajax_start);
          var xquery = {'address': this.text};
          self.Geocoder.geocode(xquery, function(data) {
            var features = [];
            jQuery.each(data, function() {
              features.push(jQuery.google2geojson(this));
            });

            var geojson = {
              type: 'FeatureCollection',
              features: features
            };

            self.options.handle_query(geojson, false);
            jQuery(context).trigger(jQuery.geoevents.ajax_stop);
          });
        });
      },

      // Handlers
      handle_submit: function() {
        self.searchbutton.removeClass('submitting');

        var value = self.searchtext.val();
        if (!value) {
          return;
        }
        self.options.query.address = value;
        self.options.query.q = value;
        self.options.query.country = self.search_country.val();
        self.options.query.featureClass = self.search_feature_class.val();
        self.options.query.continentCode = self.search_continent_code.val();
        var query = self.options.query;

        var context = jQuery('#' + self.options.fieldName);
        jQuery(context).trigger(jQuery.geoevents.ajax_start);

        // Search with geonames.org
        jQuery.getJSON(self.options.json, query, function(data) {
          if (data.features.length) {
            self.options.handle_query(data, true);
            jQuery(context).trigger(jQuery.geoevents.ajax_stop);
            jQuery(".missing-geonames-results").addClass('visualHidden');
          } else {
            // Search with Google
            var xquery = {address: query.address};
            self.Geocoder.geocode(xquery, function(data) {
              var features = [];
              jQuery.each(data, function() {
                features.push(jQuery.google2geojson(this));
              });

              var data_obj = {
                type: 'FeatureCollection',
                features: features
              };

              self.options.handle_query(data_obj, true);
              jQuery(context).trigger(jQuery.geoevents.ajax_stop);
              jQuery(".missing-geonames-results").removeClass('visualHidden');
            });
          }
        });
      },

      handle_query: function(data, reset) {
        self.results = data;
        self.fclasses = [
          ['All', 'all feature classes']
        ];
        if (reset) {
          self.resultsarea.empty();
          self.filters_ctl.empty();

          if (!self.results.features.length) {
            var div = jQuery('<div>').addClass('geo-hints');
            div.text('We could not find a match for this location anywhere. ' +
              'Please check your spelling or try looking for a different location.');
            self.resultsarea.append(div);
            return;
          }
        }

        jQuery.each(self.results.features, function() {
          var div = jQuery('<div>', {'data-fclass': this.properties.other.fcl});
          div.geopointview({
            fieldName: self.options.fieldName,
            point: this
          });
          self.resultsarea.append(div);

          var fcl = this.properties.other.fcl;
          var fclName = this.properties.other.fclName;
          var filter = [fcl, fclName];
          var unique = true;

          for (var i = 0; i < self.fclasses.length; i++) {
            if (self.fclasses[i].toString() === filter.toString()) {
              unique = false;
            }
          }

          // the results are from google and we don't have any fcl or fclName property
          if (!fcl || !fclName) {
            unique = false;
          }

          if (unique === true) {
            self.fclasses.push(filter);
          }
        });

        self.resultsarea.geo_points_divs = self.resultsarea.find(".geo-point-view");
        jQuery.each(self.fclasses, function() {
          self.options.addFilters(this);
        });
        self.options.toggle_filters_area_visibility();
      },

      toggle_filters_area_visibility: function() {

        self.fcl_filters.toggle(function() {
          self.filters_ctl.slideDown('fast');
          self.slide_ui_icons("down");
        }, function() {
          self.filters_ctl.slideUp('fast');
          self.slide_ui_icons("up");
        });
        self.fcl_filters.show();
      },

      // Add filter checkbox
      addFilters: function(filter) {
        var parent_container = self.filters_ctl;
        var container = jQuery('<p></p>');
        var checkbox = jQuery('<input />', {
          type: 'radio', id: 'fcl-' + filter[0],
          value: filter[1],
          name: 'feature-class',
          checked: 'checked' ? filter[0] === 'All' : ''
        }).appendTo(container);
        jQuery('<label />', {'for': 'fcl-' + filter[0], text: filter[1]}).appendTo(container);
        container.appendTo(parent_container);

        checkbox.on('change', function() {
          self.resultsarea.geo_points_divs.hide();

          var fcl_id = this.id;
          var fcl = fcl_id.substr(4);
          if (fcl === 'All') {
            self.resultsarea.geo_points_divs.show();
          } else {
            self.resultsarea.geo_points_divs.filter(function() {
              return this.getAttribute('data-fclass') === fcl;
            }).show();
          }

        });
      },

      init_ui_icons: function(context) {
        var icon_right, icon_down;
        var slide_icon = $(context).find('.eea-icon');

        if (window.EEA) {
          icon_right = 'eea-icon eea-icon-chevron-right';
          icon_down = 'eea-icon eea-icon-chevron-down';
        }
        else {
          icon_right = 'ui-icon ui-icon-carat-1-e';
          icon_down = 'ui-icon ui-icon-carat-1-s';
          slide_icon.addClass(icon_right);
        }

        return function(direction) {
          if (direction === "down") {
            slide_icon.removeClass(icon_right).addClass(icon_down);
          }
          else {
            slide_icon.removeClass(icon_down).addClass(icon_right);
          }
        };
      },
      // Initialize
      initialize: function() {
        self.searchform = jQuery('form', self);
        self.searchbutton = jQuery('input[type=submit]', self.searchform);
        self.searchtext = jQuery('input[type=text]', self.searchform);
        self.search_country = jQuery('[name="country"]', self.searchform);
        self.search_feature_class = jQuery('[name="featureClass"]', self.searchform);
        self.search_continent_code = jQuery('[name="continentCode"]', self.searchform);
        self.resultsarea = jQuery('.geo-results-area', self);
        self.filters_area = jQuery('.filters-area', self);
        self.filters_ctl = self.filters_area.find('.filters-ctl');
        self.fcl_filters = self.filters_area.find('#toggle-fcl-filters');
        self.slide_ui_icons = self.options.init_ui_icons(self.filters_area);
        self.Geocoder = new google.maps.Geocoder();

        // Handle suggestions
        if (self.options.suggestions.length) {
          jQuery.getJSON(self.options.suggestions, {}, function(data) {
            self.options.handle_suggestions(data);
          });
        }

        self.searchform.submit(function(ev) {
          self.options.handle_submit();
          ev.preventDefault();
        });

      }
    };

    // Update settings
    if (settings) {
      jQuery.extend(self.options, settings);
    }

    self.options.initialize();
    return this;
  };

  /* Geo point view jQuery plugin */
  jQuery.fn.geopointview = function(settings) {
    var self = this;
    self.options = {
      fieldName: '',
      template: '<div>' +
        '<h3 class="title"></h3>' +
        '<h4 class="subtitle"></h4>' +
        '<h5 class="tags"></h5>' +
        '</div>',
      point: {},

      // Methods
      initialize: function() {
        self.addClass('geo-point-view').attr('title', 'See on map');
        var icon = jQuery('<div>')
          .addClass('ui-icon')
          .addClass('ui-icon-extlink')
          .text('+');
        self.prepend(icon);

        var title = self.options.point.properties.title;
        var subtitle = self.options.point.properties.description;
        var tags = '';
        if (typeof(self.options.point.properties.tags) === 'string') {
          tags = self.options.point.properties.tags;
        } else {
          jQuery.each(self.options.point.properties.tags, function() {
            tags += this + ', ';
          });
        }

        var template = jQuery(self.options.template);
        jQuery('.title', template).text(title);
        jQuery('.subtitle', template).text(subtitle);
        jQuery('.tags', template).text(tags);

        self.append(template);

        var context = jQuery('#' + self.options.fieldName);
        self.click(function() {
          jQuery(context).trigger(jQuery.geoevents.select_point, {
            point: self.options.point,
            target: self,
            autoclick: true
          });
        });
      }

    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    // Return
    self.options.initialize();
    return this;
  };

  /* Geo advanced tab jQuery plugin */
  jQuery.fn.geoadvancedtab = function(settings) {
    var self = this;
    self.options = {
      fieldName: '',
      json: '',

      // Methods
      handle_biogroups_change: function() {
        var value = self.biogroups.val();

        if (!value) {
          return;
        }

        var value_json = {};
        jQuery.each(self.biogroups.geojson.features, function() {
          if (this.properties.name === value) {
            value_json = this;
            return false;
          }
          return true;
        });

        var context = jQuery('#' + self.options.fieldName);
        jQuery(context).trigger(jQuery.geoevents.select_point, {
          point: value_json,
          target: self.biogroups
        });
      },

      handle_groups_change_reset: function() {
        self.countries.empty().parent().hide();
        self.nuts.empty().parent().hide();
        self.cities.empty().parent().hide();
        self.naturalfeatures.empty().parent().hide();
      },

      handle_groups_change: function() {
        self.options.handle_groups_change_reset();

        var value = self.groups.val();
        if (!value) {
          return;
        }

        var value_json = {};
        jQuery.each(self.data.features, function() {
          if (this.properties.name === value) {
            value_json = this;
            return false;
          }
          return true;
        });

        var context = jQuery('#' + self.options.fieldName);

        // Get countries
        jQuery.getJSON(self.options.json, {
          type: 'countries', group: value}, function(data) {
          // save initial country data to be used when adding country groups
          window.EEAGeotags.initialCountryData = data;

          self.countries.empty();
          var option = jQuery('<option>').val('').text('');
          self.countries.append(option);

          jQuery.each(data.features, function(index) {
            // Center map on second country in group
            if (index === 1) {
              value_json.properties.center = this.properties.center;
              jQuery(context).trigger(jQuery.geoevents.select_point, {
                point: value_json,
                target: self.groups
              });
            }
            // Add countries to datamodel
            if (value_json.properties.countries === undefined) {
              value_json.properties.countries = [];
            }
            value_json.properties.countries.push(this.properties.title);

            option = jQuery('<option>')
              .val(this.properties.name)
              .text(this.properties.title)
              .data('geojson', this);
            self.countries.append(option);
          });

          self.countries.parent().show();
        });
      },

      handle_countries_change_reset: function() {
        self.nuts.empty().parent().hide();
        self.cities.empty().parent().hide();
        self.naturalfeatures.empty().parent().hide();
      },

      handle_countries_change: function() {
        self.options.handle_countries_change_reset();

        var country = jQuery('option:selected', self.countries);

        if (!country.length) {
          return;
        }

        // Center map
        var query = {
          address: country.data('geojson').properties.title,
          region: country.data('geojson').properties.country
        };

        var context = jQuery('#' + self.options.fieldName);
        self.Geocoder.geocode(query, function(data) {
          if (!data.length) {
            return;
          }

          var data_point = jQuery.google2geojson(data[0]);
          jQuery(context).trigger(jQuery.geoevents.select_point, {
            point: data_point,
            target: self.countries
          });
        });
        // Get nut regions
        jQuery.getJSON(self.options.json, {
          type: 'nuts', country: query.region}, function(data) {
          self.nuts.empty();
          var option = jQuery('<option>').val('').text('');
          self.nuts.append(option);
          jQuery.each(data.features, function() {
            option = jQuery('<option>')
              .val(this.properties.name)
              .text(this.properties.title)
              .data('geojson', this);
            self.nuts.append(option);
          });
          self.nuts.parent().show();
        });

        // Get natural features
        jQuery.getJSON(self.options.json, {
          type: 'natural', country: query.region}, function(data) {
          self.naturalfeatures.empty();
          var option = jQuery('<option>').val('').text('');
          self.naturalfeatures.append(option);
          jQuery.each(data.features, function() {
            option = jQuery('<option>')
              .val(this.properties.name)
              .text(this.properties.title)
              .data('geojson', this);
            self.naturalfeatures.append(option);
          });
          self.naturalfeatures.parent().show();
        });

      },

      handle_nuts_change_reset: function() {
        self.cities.empty().parent().hide();
      },

      handle_nuts_change: function() {
        self.options.handle_nuts_change_reset();

        var nut = jQuery('option:selected', self.nuts);
        if (!nut.length) {
          return;
        }
        var geoinfo = nut.data('geojson').properties;
        var query = {
          address: geoinfo.adminName1,
          region: geoinfo.country,
          // #19495 we need to set a component restriction
          // to the country of the point otherwise google
          // maps will select Capital Region from Canada
          // when we had Denmark selected
          componentRestrictions: {
            country: geoinfo.country
          }
        };

        var context = jQuery('#' + self.options.fieldName);
        // Center map
        self.Geocoder.geocode(query, function(data) {
          if (!data.length) {
            return;
          }

          var data_point = jQuery.google2geojson(data[0]);
          jQuery(context).trigger(jQuery.geoevents.select_point, {
            point: data_point,
            target: self.nuts
          });
        });

        // Get cities
        var req = {
          type: 'cities',
          country: query.region,
          adminCode1: nut.data('geojson').properties.adminCode1
        };

        jQuery.getJSON(self.options.json, req, function(data) {
          self.cities.empty();
          var option = jQuery('<option>').val('').text('');
          self.cities.append(option);
          jQuery.each(data.features, function() {
            option = jQuery('<option>')
              .val(this.properties.name)
              .text(this.properties.title)
              .data('geojson', this);
            self.cities.append(option);
          });
          self.cities.parent().show();
        });

        //. Get natural features
        var req_natural = {
          type: 'natural',
          country: req.country,
          adminCode1: req.adminCode1
        };

        jQuery.getJSON(self.options.json, req_natural, function(data) {
          self.naturalfeatures.empty();
          var option = jQuery('<option>').val('').text('');
          self.naturalfeatures.append(option);
          jQuery.each(data.features, function() {
            option = jQuery('<option>')
              .val(this.properties.name)
              .text(this.properties.title)
              .data('geojson', this);
            self.naturalfeatures.append(option);
          });
          self.naturalfeatures.parent().show();
        });

      },

      handle_cities_change: function() {
        var city = jQuery('option:selected', self.cities);
        if (!city.length) {
          return;
        }

        // Center map
        var query = {
          address: city.data('geojson').properties.title + ', ' +
            city.data('geojson').properties.adminName1,
          region: city.data('geojson').properties.country
        };

        var context = jQuery('#' + self.options.fieldName);
        self.Geocoder.geocode(query, function(data) {
          if (!data.length) {
            return;
          }

          var data_point = jQuery.google2geojson(data[0]);
          jQuery(context).trigger(jQuery.geoevents.select_point, {
            point: data_point,
            target: self.cities
          });
        });
      },

      handle_naturalfeatures_change: function() {
        var natural = jQuery('option:selected', self.naturalfeatures);
        if (!natural.length) {
          return;
        }

        // Center map
        var query = {
          address: natural.data('geojson').properties.title + ', ' +
            natural.data('geojson').properties.adminName1,
          region: natural.data('geojson').properties.country
        };

        var context = jQuery('#' + self.options.fieldName);
        self.Geocoder.geocode(query, function(data) {
          if (!data.length) {
            return;
          }

          var data_point = jQuery.google2geojson(data[0]);
          jQuery(context).trigger(jQuery.geoevents.select_point, {
            point: data_point,
            target: self.naturalfeatures
          });
        });
      },

      // Initialize
      initialize: function() {
        self.biogroups = jQuery('select[name=biogroups]', self);
        self.groups = jQuery('select[name=groups]', self);
        self.countries_expand = jQuery('#expand_countries', self);
        // by default expand country checkbox is selected so we set
        // the expand property to true by default
        window.EEAGeotags.shouldExpandCountryGroups = true;
        self.countries = jQuery('select[name=countries]', self);
        self.nuts = jQuery('select[name=nuts]', self);
        self.cities = jQuery('select[name=cities]', self);
        self.naturalfeatures = jQuery('select[name=naturalfeature]', self);
        self.data = {};

        self.Geocoder = new google.maps.Geocoder();

        // Hide
        self.countries.parent().hide();
        self.nuts.parent().hide();
        self.cities.parent().hide();
        self.naturalfeatures.parent().hide();

        // Fill biogeographical regions
        jQuery.getJSON(self.options.json, {type: 'biogroups'}, function(data) {
          self.biogroups.empty();
          var option = jQuery('<option>').val('').text('');
          self.biogroups.append(option);
          jQuery.each(data.features, function() {
            self.biogroups.geojson = data;
            option = jQuery('<option>')
              .val(this.properties.name)
              .text(this.properties.title);
            self.biogroups.append(option);
          });
        });

        // Fill groups
        jQuery.getJSON(self.options.json, {type: 'groups'}, function(data) {
          self.data = data;
          self.groups.empty();
          var option = jQuery('<option>').val('').text('');
          self.groups.append(option);
          jQuery.each(self.data.features, function() {
            option = jQuery('<option>')
              .val(this.properties.name)
              .text(this.properties.title);
            self.groups.append(option);
          });
        });

        // Events
        self.biogroups.change(function() {
          self.options.handle_biogroups_change();
        });

        self.groups.change(function() {
          self.options.handle_groups_change();
        });

        self.countries.change(function() {
          self.options.handle_countries_change();
        });
        self.countries_expand.change(function() {
          window.EEAGeotags.shouldExpandCountryGroups = $(this).is(':checked') ? true : false;
        });


        self.nuts.change(function() {
          self.options.handle_nuts_change();
        });

        self.cities.change(function() {
          self.options.handle_cities_change();
        });

        self.naturalfeatures.change(function() {
          self.options.handle_naturalfeatures_change();
        });
      }
    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    // Return
    self.options.initialize();
    return this;
  };

  jQuery.fn.geopreview = function(settings) {
    var self = this;
    self.options = {
      json: {},
      fieldName: '',
      template: '<div><div class="geo-preview-marker">' +
        '<h3 class="title"></h3>' +
        '<h4 class="subtitle"></h4>' +
        '<h5 class="tags"></h5>' +
        '</div></div>',
      map_options: {
        latitude: 0,
        longitude: 0,
        center: null,
        zoom: 3,
        navigationControl: true,
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.ZOOM_PAN
//        position: google.maps.ControlPosition.RIGHT // this generated a javascript error in IE
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT,
          style: google.maps.MapTypeControlStyle.DEFAULT
        },
        mapTypeId: google.maps.MapTypeId.TERRAIN
      },

      handle_points: function(json) {
        self.options.handle_cleanup();
        if (!json.features) {
          return;
        }

        jQuery.each(json.features, function() {
          var center = this.properties.center;
          var latlng = new google.maps.LatLng(center[0], center[1]);
          var marker = new google.maps.Marker({
            position: latlng
          });
          marker.setMap(self.Map);
          self.markers.push(marker);

          var title = this.properties.title;
          var subtitle = this.properties.description;
          var tags = '';
          if (typeof(this.properties.tags) === 'string') {
            tags = this.properties.tags;
          } else {
            jQuery.each(this.properties.tags, function() {
              tags += this + ', ';
            });
          }

          var itemplate = jQuery(self.options.template);
          jQuery('.title', itemplate).text(title);
          jQuery('.subtitle', itemplate).text(subtitle);
          jQuery('.tags', itemplate).text(tags);

          // Google event handlers
          google.maps.event.addListener(marker, 'click', function() {
            self.info.setContent(itemplate.html());
            self.info.open(self.Map, marker);
          });
        });
      },

      handle_cleanup: function() {
        jQuery.each(self.markers, function() {
          this.setMap(null);
        });
        self.markers.length = 0;

        if (self.info) {
          self.info.close();
        }
      },

      set_map_bounds: function(markers) {
        if (!markers.length) {
          return;
        }
        var latlngbounds = new google.maps.LatLngBounds();
        var markers_length = markers.length;
        for (var i = 0, length = markers_length; i < length; i++) {
          latlngbounds.extend(markers[i].position);
        }
        self.options.map_options.center = latlngbounds.getCenter();
        return latlngbounds;
      },

      fit_map_bounds: function(map_bounds) {
        // fit bounds if we have markers otherwise center map on Europe
        if (map_bounds && self.markers.length > 1) {
          self.Map.fitBounds(map_bounds);
        }
        else {
          self.Map.setCenter(self.options.map_options.center);
        }

      },
      initialize: function() {
        self.markers = [];
        self.info = new google.maps.InfoWindow({
          content: ''
        });

        self.addClass('geo-preview-mapcanvas');
        var options = self.options.map_options;
        if (!options.latlng) {
          options.center = new google.maps.LatLng(
            options.latitude,
            options.longitude
          );
        }

        self.Map = new google.maps.Map(self[0], options);
        self.Geocoder = new google.maps.Geocoder();

        self.options.handle_points(self.options.json);
        var context = jQuery('#' + self.options.fieldName);
        var latlngbounds;
        var markers_length = self.markers.length;

        if (markers_length > 1) {
          latlngbounds = self.options.set_map_bounds(self.markers);
        }
        else {
          latlngbounds = null;
          options.center = new google.maps.LatLng(55, 35);
        }
        options.latlngbounds = latlngbounds;

        context.bind(jQuery.geoevents.basket_save, function(evt, data) {
          var options = self.options;
          var map_options =  options.map_options;

          options.handle_points(data.json);

          map_options.latlngbounds = self.options.set_map_bounds(self.markers);
          options.fit_map_bounds(map_options.latlngbounds);
        });

        // Fix preview map
        jQuery('form[name=edit_form] .formTab, .wizard-left, .wizard-right').click(function() {
          // #5339 fix preview map also when using eea.forms
          if (jQuery(this).closest('form').find('.formPanel:visible').find('#location-geopreview').length) {
            google.maps.event.trigger(self.Map, 'resize');
            self.options.fit_map_bounds(options.latlngbounds);
          }
        });
      }
    };

    if (settings) {
      jQuery.extend(self.options, settings);
    }

    // Return
    self.options.initialize();
    return this;
  };

// End namespace
}());


if (window.EEAGeotags === undefined) {
  window.EEAGeotags = {'version': '1.0'};
}



/* - eea-fancybox.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-fancybox.js?original=1
jQuery(document).ready(function($){if($.fn.fancybox!==undefined){$('.fancybox').fancybox();$('.gallery-fancybox').each(function(){var href=$(this).attr('href')+"/gallery_fancybox_view";$(this).attr('href',href);$(this).fancybox({type:'iframe',padding:0,margin:0,width:650,height:500,scrolling:'no',autoScale:false,autoDimensions:false})})}});

/* - eea-mediacentre.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-mediacentre.js?original=1
(function($){$(document).ready(function(){if(window.innerHeight<800&&window.innerWidth<680){return}
var $region_content=$("#region-content"),$objmeta=$region_content.find('#objmetadata_pbwidgets_wrapper');if($objmeta.length){$region_content.find("dd:contains('video')").closest('dl').hide()}
window.EEA=window.EEA||{};var EEA=window.EEA;var playVideo=function(link){var $link=$(link);if(!$link.data('multimedia')){var coverflow=$("#multimedia-coverflow"),video_page=coverflow.length>0?1:0;var parent=link;var href=link.href;var isInsidePopUp=$('body').hasClass('video_popup_view');var options={type:'iframe',padding:0,margin:0,width:640,height:564,scrolling:'no',autoScale:false,autoDimensions:false,centerOnScroll:false,titleShow:false};if(video_page===0){if(href.indexOf('video_popup_view')===-1){link.href=href.replace(/view$/,'video_popup_view')}}
if(video_page){if(href.indexOf('multimedia_popup_view')===-1){var regex=/view$|video_popup_view|multimedia_popup_view/;var clean_href=href.replace(regex,'');if(href.indexOf('youtube')===-1&&href.indexOf('vimeo')===-1){link.href=clean_href+"multimedia_popup_view";$("#fancybox-title").remove()}
else{options.titlePosition='inside';options.titleShow=true}}
var mult=coverflow.offset(),bg=window.whatsnew.multimedia.bg,bg2=window.whatsnew.multimedia.bg2,$parent=$(parent),src=$parent.find('img');var thumb_url=src.length!==0?src[0].src:$parent.closest('div').prev().children()[0].src;options.height=387;options.overlayShow=false;options.onStart=function(){var media_player=$("#media-player");if(media_player.is(":visible")){media_player.fadeOut('fast',function(){$("#contentFlow").fadeIn('slow')});$("#media-flowplayer").children().remove()}
$.fancybox.center=function(){return false};$('html, body').animate({scrollTop:0},200,'linear');$("#fancybox-wrap").hide().css({position:'absolute'}).animate({left:mult.left-20,top:mult.top-20},200);window.setTimeout(function(){if(href.indexOf('youtube')!==-1||href.indexOf('vimeo')!==-1){$("#fancybox-title").remove().prependTo('#fancybox-content')}},200)};var info_area=function(iframe,iframe_src,$parent){var frame,tab_desc,video_title,iframe_eea=iframe_src.indexOf('eea');if(iframe_eea!==-1){frame=iframe.contents();tab_desc=frame.find("#tab-desc");video_title=frame.find("#video-title").text()}
if(!tab_desc){tab_desc=$($parent).find('p').html()}
video_title=video_title||$("#fancybox-title").text();var featured_item=$("#featured-items");var featured_item_title=featured_item.find("h3");featured_item_title.text(video_title);var featured_description=featured_item.find(".featured-description");$("#featured-films").fadeOut();tab_desc=tab_desc||$('.photoAlbumEntryDescription',$parent).text();featured_description.html(tab_desc).end().fadeIn();var title_height=featured_item_title.height();var desc_height;if(title_height===21){desc_height="184px"}
else if(title_height===42){desc_height="163px"}
else{desc_height="142px"}
featured_description.css({height:desc_height});var orig_href=iframe_eea!==-1?href.replace(/multimedia_popup_view/,'view'):href.replace('embed/','watch?v=');featured_item.find(".bookmark-link").attr("href",orig_href)};options.onComplete=function($parent){var iframe=$("#fancybox-frame"),iframe_src=iframe.attr('src');if(iframe_src.indexOf('youtube')!==-1||iframe_src.indexOf('vimeo')!==-1){iframe.attr({width:640,height:360}).css('height','360px')}
else{iframe.attr({width:640,height:387})}
iframe.one("load",function(){info_area(iframe,iframe_src,$parent)})};options.href=link.href}
if(!isInsidePopUp){$(link).fancybox(options)}
$link.data('multimedia',true);$link.click()}};EEA.playVideo=playVideo;
function prepareVideoLinkURLs(){var isInsidePopUp=$('body').hasClass('video_popup_view');$('.video-fancybox').each(function(){var regex=/(\/$|\/view\/?$|\/video_popup_view\/?$)/;var href=$(this).attr('href');href=href.replace(regex,'');href=href+"/video_popup_view";this.href=href});$("body").delegate(".video-fancybox","click", function(evt){playVideo(this);if(!isInsidePopUp){evt.preventDefault()}})}
prepareVideoLinkURLs();if($.fn.fancybox===undefined){return}
if(window.Faceted){jQuery(window.Faceted.Events).bind(window.Faceted.Events.AJAX_QUERY_SUCCESS, function(evt){prepareVideoLinkURLs()})}})}(jQuery));

/* - eea-autoscroll.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-autoscroll.js?original=1
jQuery(document).ready(function($){if($('.autoscroll-to-here').length){var top=$('.autoscroll-to-here').offset().top;$('html,body').animate({scrollTop:top},1000)}});

/* - eea-tooltips.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-tooltips.js?original=1
jQuery(document).ready(function($){if($.fn.tooltip!==undefined){$(".eea-tooltip-top").each(function(i){var title=$(this).attr("title");$(this).tooltip({effect:'fade',tipClass:'eea-tooltip-markup-top'})});$(".eea-tooltip-bottom").each(function(i){var title=$(this).attr("title");$(this).tooltip({effect:'fade',position:'bottom center',tipClass:'eea-tooltip-markup-bottom'})});$(".eea-tooltip-left").each(function(i){var title=$(this).attr("title");$(this).tooltip({effect:'fade',position:'center left',tipClass:'eea-tooltip-markup-left'})});$(".eea-tooltip-right").each(function(i){var title=$(this).attr("title");$(this).tooltip({effect:'fade',position:'center right',tipClass:'eea-tooltip-markup-right'})});var removeExtraText=function(){this.getTip()[0].lastChild.nodeValue=''};$(".eea-flexible-tooltip-right").each(function(i){var title=$(this).attr("title");var container=$('<div>').addClass('eea-tooltip-markup');var bottomright=$('<div>').addClass('tooltip-box-br');var topleft=$('<div>').addClass('tooltip-box-tl');var content=$('<div>').addClass('tooltip-box-rcontent');content.text(title);topleft.append(content);bottomright.append(topleft);container.append(bottomright);$(this).tooltip({effect:'fade',position:'center right',offset:[20,20],tipClass:'eea-tooltip-markup',layout:container,onBeforeShow:removeExtraText})});$(".eea-flexible-tooltip-left").each(function(i){var title=$(this).attr("title");var container=$('<div>').addClass('eea-tooltip-markup');var bottomright=$('<div>').addClass('tooltip-box-br');var topleft=$('<div>').addClass('tooltip-box-tl');var content=$('<div>').addClass('tooltip-box-lcontent');content.text(title);topleft.append(content);bottomright.append(topleft);container.append(bottomright);$(this).tooltip({effect:'fade',position:'center left',offset:[20,-10],tipClass:'eea-tooltip-markup',layout:container,onBeforeShow:removeExtraText})});$(".eea-flexible-tooltip-top").each(function(i){var title=$(this).attr("title");var container=$('<div>').addClass('eea-tooltip-markup');var bottomright=$('<div>').addClass('tooltip-box-br');var topleft=$('<div>').addClass('tooltip-box-tl');var content=$('<div>').addClass('tooltip-box-tcontent');content.text(title);topleft.append(content);bottomright.append(topleft);container.append(bottomright);$(this).tooltip({effect:'fade',position:'top center',offset:[10,0],tipClass:'eea-tooltip-markup',layout:container,onBeforeShow:removeExtraText})});$(".eea-flexible-tooltip-bottom").each(function(i){var title=$(this).attr("title");var container=$('<div>').addClass('eea-tooltip-markup');var bottomright=$('<div>').addClass('tooltip-box-br');var topleft=$('<div>').addClass('tooltip-box-tl');var content=$('<div>').addClass('tooltip-box-bcontent');content.text(title);topleft.append(content);bottomright.append(topleft);container.append(bottomright);$(this).tooltip({effect:'fade',position:'bottom center',offset:[30,0],tipClass:'eea-tooltip-markup',layout:container,onBeforeShow:removeExtraText})})}});

/* - eea-galleryview.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-galleryview.js?original=1
(function($){$(document).ready(function(){if($.fn.galleryView!==undefined){$.fn.eeaGalleryView=function(opts){return this.each(function(){if($.data(this,'visited')){return}
var $this=$(this);var $gallery_parent=$this.parent(),$gallery_class=$gallery_parent[0].className,parent_width,parent_height,gallery_width,gallery_height;parent_width=$gallery_parent.width()-10;parent_height=Math.round((parent_width/4)*3);gallery_width=$gallery_class==='gallery_fancybox_view'?640:parent_width;gallery_height=$gallery_class==='gallery_fancybox_view'?433:parent_height;var defaults={panel_width:gallery_width,panel_height:gallery_height,frame_width:50,frame_height:50,transition_speed:350,transition_interval:10000};var options=$.extend(defaults,opts);$this.galleryView(options);$.data(this,'visited','true')})};$("#galleryView, .galleryView").eeaGalleryView()}})}(jQuery));

/* - eea-toc.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-toc.js?original=1
function build_toc(toc){var tocID=toc.attr('id');if(!toc.hasClass('collapsable-portlet')){toc.addClass('collapsable-portlet')}
var currentList=toc.find('.portletItem');var hLevel=null;var lists={'root':currentList};lists.root.detach();var queryString=$('#queryString').html();queryString=queryString||"h2, h3, h4";$('#content').find(queryString).each(function(i,el){var newLevel=parseInt(el.tagName.charAt(1),10);hLevel=hLevel||newLevel;if(el.className.indexOf("notoc")!==-1){return}
if(newLevel>hLevel){hLevel=newLevel;var newList=$('<ol></ol>');lists[newLevel]=newList;currentList.append(newList);currentList=newList} else if(newLevel<hLevel){hLevel=newLevel;currentList=lists[newLevel]||lists.root}
var h=$(el);var hText=$.trim(h.find('a').text())||h.text();var li=$('<li><a>'+hText+'</a></li>');var hId=h.attr('id')||'toc-'+i;var urlWithoutHash=location.protocol+'//'+location.host+location.pathname;li.find('a').attr('href',urlWithoutHash+'#'+hId);currentList.append(li);h.attr('id',hId)});var $toc_children=lists.root.children();var $first_child=$toc_children.eq(0);if($first_child.is('ol')&&!$first_child.children().length){$toc_children=$toc_children.slice(1,$toc_children.length);$toc_children.appendTo($first_child);lists.root.empty();$first_child.appendTo(lists.root)}
if(!$first_child.is('ol')){$toc_children.wrapAll('<ol />')}
lists.root.appendTo(toc);toc.show()}
jQuery(document).ready(function($){var $document_toc=$('#document-toc');if($document_toc.length){build_toc($document_toc);var $portlet_header=$document_toc.find('.portletHeader');$portlet_header.click(function(){$document_toc.toggleClass('collapsed')})}});

/* - eea-fullscreen.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-fullscreen.js?original=1
jQuery(document).ready(function($){});

/* - eea-tabs.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-tabs.js?original=1
jQuery(document).ready(function($){$(window).bind('eea.tags.loaded', function(evt,tab){var $tab=$(tab);$tab.find('a').bind('click', function(ev){window.location.hash=this.id;ev.preventDefault()})});var eea_tabs=function(){if($("#whatsnew-gallery").length){return}
var $eea_tabs=$(".eea-tabs"),eea_tabs_length=$eea_tabs.length,$eea_tabs_panels=$(".eea-tabs-panels"),i=0;var $eea_tab,$eea_tab_parent,$eea_tabs_panel,$eea_panels,$eea_tab_children;if(eea_tabs_length){for(i;i<eea_tabs_length;i+=1){$eea_tab=$eea_tabs.eq(i);$eea_tab_parent=$eea_tab.parent();if($eea_tab.data('tabs')){$(window).trigger('eea.tags.loaded',$eea_tab);continue}
$eea_tab.hide();$eea_tabs_panel=$eea_tabs_panels.eq(i);$eea_panels=$eea_tabs_panel.children();$eea_panels.find('.eea-tabs-title').detach().appendTo($eea_tab);$eea_tab_children=$eea_tab.children();var j=0,tabs_length=$eea_tab_children.length,$tab_title,tab_title_text,tab_title_id,tab_id;for(j;j<tabs_length;j+=1){$tab_title=$($eea_tab_children[j]);if($tab_title[0].tagName==="P"){$tab_title.replaceWith("<li>"+$tab_title.html()+"</li>")}
if(!$tab_title.find('a').length){tab_title_text=$tab_title.text();tab_title_id=tab_title_text.toLowerCase().replace(/\s/g,'-');$tab_title.text("");if($('#tab-'+tab_title_id).length){tab_id='tab-'+tab_title_id+'-'+1}
else{tab_id='tab-'+tab_title_id}
$('<a />').attr({'href':'#tab-'+tab_title_id,'id':tab_id}).html(tab_title_text).appendTo($tab_title)}}
$eea_tab_children=$eea_tab.children();if($eea_tab.hasClass('eea-tabs-ajax')){$eea_tab.tabs($eea_panels,{effect:'ajax',history:true})}
else{$eea_tab.tabs($eea_panels)}
$eea_tab.show();$(window).trigger('eea.tags.loaded',$eea_tab)}}};window.EEA=window.EEA||{};window.EEA.eea_tabs=eea_tabs;eea_tabs();$(window).bind('hashchange', function(evt){var $tab_target;if(window.location.hash.indexOf('tab')!==-1){try{$tab_target=$("#content").find(window.location.hash);if($tab_target.length&&!$tab_target.hasClass("current")){$tab_target.click()}} catch(e){}}});$(window).trigger('eea.tags.loaded',$('#whatsnew-gallery').find('.eea-tabs'));$(window).trigger('eea.tags.loaded',$('#multimedia-tabs'));if(window.location.hash){$(window).trigger('hashchange')}});

/* - pagination.js - */
// http://www.eea.europa.eu/portal_javascripts/pagination.js?original=1
(function($){$.PaginationCalculator=function(maxentries,opts){this.maxentries=maxentries;this.opts=opts};$.extend($.PaginationCalculator.prototype,{numPages:function(){return Math.ceil(this.maxentries/this.opts.items_per_page)},getInterval:function(current_page){var ne_half=Math.floor(this.opts.num_display_entries/2);var np=this.numPages();var upper_limit=np-this.opts.num_display_entries;var start=current_page>ne_half?Math.max(Math.min(current_page-ne_half,upper_limit),0):0;var end=current_page>ne_half?Math.min(current_page+ne_half+(this.opts.num_display_entries%2),np):Math.min(this.opts.num_display_entries,np);return{start:start,end:end}}});$.PaginationRenderers={};$.PaginationRenderers.defaultRenderer=function(maxentries,opts){this.maxentries=maxentries;this.opts=opts;this.pc=new $.PaginationCalculator(maxentries,opts)};$.extend($.PaginationRenderers.defaultRenderer.prototype,{createLink:function(page_id,current_page,appendopts){var lnk,np=this.pc.numPages();page_id=page_id<0?0:(page_id<np?page_id:np-1);appendopts=$.extend({text:page_id+1,classes:""},appendopts||{});if(page_id==current_page){lnk=$("<span class='current'>"+appendopts.text+"</span>")}
else{lnk=$("<a>"+appendopts.text+"</a>").attr('href',this.opts.link_to.replace(/__id__/,page_id))}
if(appendopts.classes){lnk.addClass(appendopts.classes)}
lnk.data('page_id',page_id);return lnk},appendRange:function(container,current_page,start,end,opts){var i;for(i=start;i<end;i++){this.createLink(i,current_page,opts).appendTo(container)}},getLinks:function(current_page,eventHandler){var begin,end,interval=this.pc.getInterval(current_page),np=this.pc.numPages(),fragment=$("<div class='pagination'></div>");if(this.opts.prev_text&&(current_page>0||this.opts.prev_show_always)){fragment.append(this.createLink(current_page-1,current_page,{text:"&laquo; "+this.opts.prev_text+" "+this.opts.items_per_page+" "+this.opts.items_text,classes:"listingPrevious"}))}
if(interval.start>0&&this.opts.num_edge_entries>0){end=Math.min(this.opts.num_edge_entries,interval.start);this.appendRange(fragment,current_page,0,end,{classes:'sp'});if(this.opts.num_edge_entries<interval.start&&this.opts.ellipse_text){$("<span>"+this.opts.ellipse_text+"</span>").appendTo(fragment)}}
this.appendRange(fragment,current_page,interval.start,interval.end);if(interval.end<np&&this.opts.num_edge_entries>0){if(np-this.opts.num_edge_entries>interval.end&&this.opts.ellipse_text){$("<span>"+this.opts.ellipse_text+"</span>").appendTo(fragment)}
begin=Math.max(np-this.opts.num_edge_entries,interval.end);this.appendRange(fragment,current_page,begin,np,{classes:'ep'})}
if(this.opts.next_text&&(current_page<np-1||this.opts.next_show_always)){fragment.append(this.createLink(current_page+1,current_page,{text:this.opts.next_text+" "+this.opts.items_per_page+" "+this.opts.items_text+" &raquo;",classes:"next"}))}
$('a',fragment).click(eventHandler);return fragment}});$.fn.pagination=function(maxentries,opts){opts=$.extend({items_per_page:10,num_display_entries:4,current_page:0,num_edge_entries:1,link_to:"#",prev_text:'previous',next_text:'next',items_text:'items',ellipse_text:"...",prev_show_always:false,next_show_always:false,renderer:"defaultRenderer",show_if_single_page:false,load_first_page:true,callback:function(){return false}},opts||{});var containers=this,renderer,links,current_page;
function paginationClickHandler(evt){var new_current_page=$(evt.target).data('page_id'),continuePropagation=selectPage(new_current_page);if(!continuePropagation){evt.stopPropagation()}
return continuePropagation}
function selectPage(new_current_page){containers.data('current_page',new_current_page);links=renderer.getLinks(new_current_page,paginationClickHandler);containers.empty();links.appendTo(containers);return opts.callback(new_current_page,containers)}
current_page=parseInt(opts.current_page,10);containers.data('current_page',current_page);maxentries=(!maxentries||maxentries<0)?1:maxentries;opts.items_per_page=(!opts.items_per_page||opts.items_per_page<0)?1:opts.items_per_page;if(!$.PaginationRenderers[opts.renderer]){throw new ReferenceError("Pagination renderer '"+opts.renderer+"' was not found in jQuery.PaginationRenderers object.")}
renderer=new $.PaginationRenderers[opts.renderer](maxentries,opts);var pc=new $.PaginationCalculator(maxentries,opts);var np=pc.numPages();containers.bind('setPage',{numPages:np}, function(evt,page_id){if(page_id>=0&&page_id<evt.data.numPages){selectPage(page_id)}
return false});containers.bind('prevPage', function(){var current_page=$(this).data('current_page');if(current_page>0){selectPage(current_page-1)}
return false});containers.bind('nextPage',{numPages:np}, function(evt){var current_page=$(this).data('current_page');if(current_page<evt.data.numPages-1){selectPage(current_page+1)}
return false});links=renderer.getLinks(current_page,paginationClickHandler);containers.empty();if(np>1||opts.show_if_single_page){links.appendTo(containers)}
if(opts.load_first_page){opts.callback(current_page,containers)}}}(jQuery));

/* - eea-pagination.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-pagination.js?original=1
jQuery(document).ready(function($){if(window.EEA.isPrintPdf){return}
var $related_items=$("#relatedItems"),has_related_items=$related_items.length&&$related_items[0].tagName!=='SELECT',$eea_tabs=$("#eea-tabs"),$paginate=$(".paginate"),$eea_tabs_panels=$("#eea-tabs-panels"),pagination_count=12;$.merge($paginate,$related_items.find('.visualNoMarker')).each(function(){var $self=$(this),$children=$self.children(),count=0,isPaginate=$self.hasClass('paginate');pagination_count=window.parseInt($self.attr('data-paginate-count'),10)||pagination_count;$children=isPaginate&&$children[0].tagName!=="H3"?$self:$children;$children.each(function(){var items;var orig_entries;var num_entries;var $childes;var $this=$(this);var keepData=true;var scripts=$this.find('script');if(this.tagName==="H3"){$eea_tabs=!$eea_tabs.length?$("<ul class='eea-tabs two-rows' />").insertBefore($self):$eea_tabs;$eea_tabs_panels=!$eea_tabs_panels.length?$("<div class='eea-tabs-panels' />").insertAfter($eea_tabs):$eea_tabs_panels;var tab_id=this.innerHTML.toLowerCase().replace(/\s/g,'-'),tab_href="#tab-"+tab_id;$('<li />').append($('<a />').attr({'href':tab_href,'id':'tab-'+tab_id}).html($this.detach().html())).appendTo($eea_tabs)}
else{$this.data($self.data());if(scripts.length){scripts.remove(undefined,keepData)}
$childes=$this.children();num_entries=$childes.length;orig_entries=num_entries;while(num_entries>0){count+=1;items=$childes.slice(0,num_entries>pagination_count?pagination_count:num_entries);$('<div />',{'class':"page",'data-count':num_entries>pagination_count?pagination_count:num_entries}).append(items).appendTo($this);$childes=$childes.not(items);num_entries=$childes.length}
$this.addClass('eea-tabs-panel').appendTo($eea_tabs_panels);if(orig_entries>pagination_count){$("<div class='paginator listingBar' />").prependTo($this).pagination(orig_entries,{items_per_page:pagination_count,next_text:$("#eeaPaginationNext").text(),prev_text:$("#eeaPaginationPrev").text(),item_text:$("#eeaPaginationItems").text(),callback: function(idx,el){var $parent=el.parent(),$page=$parent.find('.page').hide().eq(idx),page_count=$page.next().data('count'),next_item=$parent.find('.next')[0],$pagination=el.find('.pagination'),$pagination_children=$pagination.children();if($pagination_children[0].tagName==='SPAN'){$('<a href="#" class="listingPrevious"> </a>').prependTo($pagination)}
if($pagination_children[$pagination_children.length-1].tagName==='SPAN'){$('<a href="#" class="next"> </a>').appendTo($pagination)}
if(next_item){next_item.innerHTML=next_item.innerHTML.replace(pagination_count,page_count)}
$page.show();return false}})}}});if(isPaginate){$eea_tabs="";$eea_tabs_panels=""}});if(has_related_items||$paginate.length){window.EEA.eea_tabs()}});

/* - eea-fitcontainer.js - */
// http://www.eea.europa.eu/portal_javascripts/eea-fitcontainer.js?original=1
(function($){$.fn.fitContainer=function($container,options){this.$container=$container;var settings=$.extend({'method':'grow','incrementBy':5,'affectSingleWords':false,'maxWidth':250},options),self=this;return this.each( function(){if(!settings.affectSingleWords&&this.innerHTML.split(/\s/).length===1){return}
var $this=$(this),$container=self.$container||$this.parent(),initial_container_height=$container.height(),initial_width=$this.width();switch(settings.method){case 'grow':while(initial_container_height<$this.height()){initial_width+=settings.incrementBy;$this.css('max-width',initial_width);if(this.offsetWidth>settings.maxWidth||initial_width>settings.maxWidth){break}}
break;case 'shrink':while(initial_container_height<$this.height()){initial_width-=settings.incrementBy;$this.css('max-width',initial_width);if(this.offsetWidth>settings.maxWidth||initial_width>settings.maxWidth){break}}
break}})};$(function(){var $eea_tabs=$('.eea-tabs');if($eea_tabs.length){$eea_tabs.find('a').fitContainer($eea_tabs)}})}(jQuery));

/* - slide.js - */
// http://www.eea.europa.eu/portal_javascripts/slide.js?original=1
(function($){var langregex1=new RegExp("(http://[a-z0-9.:]*)/(aa|ab|af|am|ar|as|ay|az|ba|be|bg|bh|bi|bn|bo|bs|br|ca|ch|co|cs|cy|da|de|dz|el|en|eo|es|et|eu|fa|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|gv|ha|he|hi|hr|hu|hy|ia|id|ie|ik|is|it|iu|ja|jbo|jw|ka|kk|kl|km|kn|ko|ks|ku|kw|ky|la|lb|li|ln|lo|lt|lv|mg|mi|mk|ml|mn|mo|mr|ms|mt|my|na|ne|nl|no|nn|oc|om|or|pa|pl|ps|pt|qu|rm|rn|ro|ru|rw|sa|sd|se|sg|sh|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tl|tn|to|tr|ts|tt|tw|ug|uk|ur|uz|vi|vo|wa|wo|xh|yi|yo|za|zh|zu)/.*");var langregex2=new RegExp("(http://[a-z0-9.:]*/)(aa|ab|af|am|ar|as|ay|az|ba|be|bg|bh|bi|bn|bo|bs|br|ca|ch|co|cs|cy|da|de|dz|el|en|eo|es|et|eu|fa|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|gv|ha|he|hi|hr|hu|hy|ia|id|ie|ik|is|it|iu|ja|jbo|jw|ka|kk|kl|km|kn|ko|ks|ku|kw|ky|la|lb|li|ln|lo|lt|lv|mg|mi|mk|ml|mn|mo|mr|ms|mt|my|na|ne|nl|no|nn|oc|om|or|pa|pl|ps|pt|qu|rm|rn|ro|ru|rw|sa|sd|se|sg|sh|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tl|tn|to|tr|ts|tt|tw|ug|uk|ur|uz|vi|vo|wa|wo|xh|yi|yo|za|zh|zu)$");
function isCurrentPageTranslated(){var link=document.location.href.toLowerCase();return langregex1.test(link)||langregex2.test(link)}
$(document).ready(function(){if(window.innerWidth<768&&!window.mobile_desktop_browser_resolution){return}
function panel(){var a=$(this);var buttonID=a.parent().attr('id');var tooltip=$('#tip-'+buttonID);if(buttonID==="siteaction-contactus"&&isCurrentPageTranslated()){return}
var article_lang=buttonID==="article-language";var networks_panel=buttonID==="externalsites-networks";var fordef;if(tooltip.length>0){a.attr("title","").attr("href","#");fordef='click, blur';a.tooltip({tip:tooltip[0],position:'bottom center',offset:[0,0],delay:10000000,events:{def:fordef}});a.click(function(ev){ev.preventDefault();var parents=$('#cross-site-top, #content'),panels=parents.find('.panel');panels.each(function(){var $this=$(this);var $id=$this.attr('id');if($id!==""&&$id!==tooltip.attr('id')){$this.fadeOut('fast')}});if(article_lang){$("#tip-article-language").css({position:'absolute',top:'48px',display:'block',right:'0px',left:''})}
if(networks_panel){$("#tip-externalsites-networks").css('margin-left','2em')}
tooltip.fadeIn('fast')})}}
var parents=$('#cross-site-top, #content'),panels=parents.find('.panel').filter(function(){return this.id!==""});$(document).click(function(e){var target=$(e.target);if(!target.is('#cross-site-top a,  #cross-site-top .panel, #article-language a')&&!target.parents('.panel').length){panels.fadeOut('fast')}});$("#portal-siteactions").find("a").each(panel);$("#portal-externalsites").find("a").each(panel);$("#article-language").find('a').each(panel);$("#tip-externalsites-networks").find(".externalsites a").each(panel)})}(jQuery));

/* - soer_frontpage.js - */
// http://www.eea.europa.eu/portal_javascripts/soer_frontpage.js?original=1
(function($){$(document).ready(function(){var slide_portlet=$('.slidePortlet');if(slide_portlet.length===0){return}
var body=$('body'),body_class=body.attr('class').match(/\bsoer/);slide_portlet.each(function(){var portlet=$(this);var b1=$('<span class="slideButton next"></span>');var b2=$('<span class="slideButton prev"></span>');portlet.append(b1);portlet.append(b2);var play=$('<div class="slideButton play"></div>');portlet.append(play);var items=portlet.find('.portletItem');var items_length=items.length;if(items_length<2){$(".slideButton").css('display','none')}
var randomnumber=Math.floor(Math.random()*items_length);var elem=items[randomnumber];$(elem).addClass('selected');$(elem).css('left',0);b1.click(function(){var current=portlet.find('.portletItem.selected');var next=current.next('.portletItem');var currentIndex=portlet.find('.portletItem').index(current);if(currentIndex+1===portlet.find('.portletItem').length){return}
current.removeClass('selected');next.addClass('selected');current.animate({'left':-(portlet.width()+300)});next.animate({'left':0})});b2.click(function(){var current=portlet.find('.portletItem.selected');var next=current.prev('.portletItem');var currentIndex=portlet.find('.portletItem').index(current);if(currentIndex===0){return}
current.removeClass('selected');next.addClass('selected');var p=portlet.width()+300;current.animate({'left':p});next.animate({'left':0})});var playID;play.click( function(){var $this=$(this);if($this.hasClass('pause')){$this.removeClass('pause');window.clearInterval(playID)}
else{$this.toggleClass('pause');b1.click();playID=window.setInterval(function(){b1.click()},10000)}});if(body_class){play.addClass('pause');playID=window.setInterval(function(){b1.click()},10000)}})})})(jQuery);

/* - ++resource++search.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++search.js?original=1
jQuery(function($){var query,pushState,popped,initialURL,$default_res_container=$('#search-results'),$search_filter=$('#search-filter'),$search_field=$('#search-field'),$search_gadget=$('#searchGadget'),$form_search_page=$("form.searchPage"),navigation_root_url=$('link[rel="home"]').attr('href')||window.navigation_root_url||window.portal_url;$.fn.pullSearchResults=function(query){return this.each(function(){var $container=$(this);$.get('@@updated_search',query,
function(data){$container.hide();var $ajax_search_res=$('<div id="ajax-search-res"></div>').html(data),$search_term=$('#search-term');var $data_res=$ajax_search_res.find('#search-results').children(),data_search_term=$ajax_search_res.find('#updated-search-term').text(),data_res_number=$ajax_search_res.find('#updated-search-results-number').text(),data_sorting_opt=$ajax_search_res.find('#updated-sorting-options').html();$container.html($data_res);$container.fadeIn();if(!$search_term.length){$search_term=$('<strong id="search-term" />').appendTo('h1.documentFirstHeading')}
$search_term.text(data_search_term);$('#search-results-number').text(data_res_number);$('#search-results-bar').find('#sorting-options').html(data_sorting_opt);$('#rss-subscription').find('a.link-feed').attr('href', function(){return navigation_root_url+'/search_rss?'+query})})})};pushState=function(query){if(Modernizr.history){var url=navigation_root_url+'/@@search?'+query;history.pushState(null,null,url)}};popped=(window.history&&'state' in window.history);initialURL=location.href;$(window).bind('popstate', function(event){var initialPop,str;initialPop=!popped&&location.href===initialURL;popped=true;if(initialPop){return}
if(!location.search){return}
query=location.search.split('?')[1];var results=query.match(/SearchableText=[^&]*/);if(results){str=results[0];str=decodeURIComponent(str.replace(/\+/g, ' ')); // we remove '+' used between words
$.merge($search_field.find('input[name="SearchableText"]'),$search_gadget).val(str.substr(15,str.length));$default_res_container.pullSearchResults(query)}});$search_filter.find('input.searchPage[type="submit"]').hide();$search_field.find('input.searchButton').click(function(e){var st,queryString=location.search.substring(1),re=/([^&=]+)=([^&]*)/g,m,queryParameters=[],key;st=$search_field.find('input[name="SearchableText"]').val();queryParameters.push({"name":"SearchableText","value":st});while(m=re.exec(queryString)){key=decodeURIComponent(m[1]);if(key!=='SearchableText'){queryParameters.push({"name":key,"value":decodeURIComponent(m[2].replace(/\+/g,' '))})}}
queryString=$.param(queryParameters);$default_res_container.pullSearchResults(queryString);pushState(queryString);e.preventDefault()});$form_search_page.submit(function(e){query=$(this).serialize();$default_res_container.pullSearchResults(query);pushState(query);e.preventDefault()});$search_field.find('input[name="SearchableText"]').keyup(function(){$search_gadget.val($(this).val())});$('#search-results-bar').find('dl.actionMenu > dd.actionMenuContent').click(function(e){e.stopImmediatePropagation()});$search_filter.delegate('input, select','change',
function(e){query='';if($search_filter.find('input:checked').length>1){query=$form_search_page.serialize()}
$default_res_container.pullSearchResults(query);pushState(query)});$('#sorting-options').delegate('a','click', function(e){if($(this).attr('data-sort')){$form_search_page.find("input[name='sort_on']").val($(this).attr('data-sort'))}
else{$form_search_page.find("input[name='sort_on']").val('')}
query=this.search.split('?')[1];$default_res_container.pullSearchResults(query);pushState(query);e.preventDefault()});$default_res_container.delegate('.listingBar a','click', function(e){query=this.search.split('?')[1];$default_res_container.pullSearchResults(query);pushState(query);e.preventDefault()})});

/* - ++resource++eea.pdf.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++eea.pdf.js?original=1
if(window.EEA===undefined){var EEA={who:'eea.pdf',version:'1.1'}}
EEA.Pdf=function(context,options){var self=this;self.context=context;self.settings={};if(options){jQuery.extend(self.settings,options)}
self.initialize()};EEA.Pdf.prototype={initialize: function(){var self=this;self.async=self.context.data('async');if(self.async){self.init_async()}},init_async: function(){var self=this;self.links=jQuery('body').find('a[href$="download.pdf"]');self.links.prepOverlay({subtype:'ajax',formselector:'form',filter:'.eea-pdf-download',cssclass:'eea-pdf-overlay'})}};jQuery.fn.EEAPdf=function(options){return this.each(function(){var context=jQuery(this);var adapter=new EEA.Pdf(context,options);context.data('EEAPdf',adapter)})};jQuery(document).ready(function($){var items=jQuery('.eea-pdf-viewlet');var $pdf_download_links,$body;if(!items.length){$body=$('body');$pdf_download_links=$body.find('a[href$="download.pdf"]');if($pdf_download_links.length){$body.data("async","true");items=$body}}
items.EEAPdf()});

/* - orderablereference.js - */
function oref_top(obj) { /*updated from version 1.2*/
	obj = (typeof obj == "string") ? document.getElementById(obj) : obj;
	if (obj.tagName.toLowerCase() != "select" && obj.length < 2)
		return false;
	var elements = new Array();
	for (var i=0; i<obj.length; i++) {
		if (obj[i].selected) {
			elements[elements.length] = new Array((document.body.innerHTML ? obj[i].innerHTML : obj[i].text), obj[i].value, obj[i].style.color, obj[i].style.backgroundColor, obj[i].className, obj[i].id, obj[i].selected);
		}
	}
	for (i=0; i<obj.length; i++) {
		if (!obj[i].selected) {
			elements[elements.length] = new Array((document.body.innerHTML ? obj[i].innerHTML : obj[i].text), obj[i].value, obj[i].style.color, obj[i].style.backgroundColor, obj[i].className, obj[i].id, obj[i].selected);
		}
	}
	for (i=0; i<obj.length; i++) {
		if (document.body.innerHTML) obj[i].innerHTML = elements[i][0];
		else obj[i].text = elements[i][0];
		obj[i].value = elements[i][1];
		obj[i].style.color = elements[i][2];
		obj[i].style.backgroundColor = elements[i][3];
		obj[i].className = elements[i][4];
		obj[i].id = elements[i][5];
		obj[i].selected = elements[i][6];
	}
}

function oref_bottom(obj) { /*updated from version 1.2*/
	obj = (typeof obj == "string") ? document.getElementById(obj) : obj;
	if (obj.tagName.toLowerCase() != "select" && obj.length < 2)
		return false;
	var elements = new Array();
	for (var i=0; i<obj.length; i++) {
		if (!obj[i].selected) {
			elements[elements.length] = new Array((document.body.innerHTML ? obj[i].innerHTML : obj[i].text), obj[i].value, obj[i].style.color, obj[i].style.backgroundColor, obj[i].className, obj[i].id, obj[i].selected);
		}
	}
	for (i=0; i<obj.length; i++) {
		if (obj[i].selected) {
			elements[elements.length] = new Array((document.body.innerHTML ? obj[i].innerHTML : obj[i].text), obj[i].value, obj[i].style.color, obj[i].style.backgroundColor, obj[i].className, obj[i].id, obj[i].selected);
		}
	}
	for (i=obj.length-1; i>-1; i--) {
		if (document.body.innerHTML) obj[i].innerHTML = elements[i][0];
		else obj[i].text = elements[i][0];
		obj[i].value = elements[i][1];
		obj[i].style.color = elements[i][2];
		obj[i].style.backgroundColor = elements[i][3];
		obj[i].className = elements[i][4];
		obj[i].id = elements[i][5];
		obj[i].selected = elements[i][6];
	}
}

function oref_up(obj) { /*updated from version 1.2*/
	var obj_string = obj;
	obj = (typeof obj == "string") ? document.getElementById(obj) : obj;
	if (obj.tagName.toLowerCase() != "select" && obj.length < 2)
		return false;
	var sel = new Array();
	for (var i=0; i<obj.length; i++) {
		if (obj[i].selected == true) {
			sel[sel.length] = i;
		}
	}
	for (i in sel) {
	    if (sel[i] != 0) {
			if (obj[sel[i]-1]) {
				if (!obj[sel[i]-1].selected) {
				var tmp = new Array((document.body.innerHTML ? obj[sel[i]-1].innerHTML : obj[sel[i]-1].text), obj[sel[i]-1].value, obj[sel[i]-1].style.color, obj[sel[i]-1].style.backgroundColor, obj[sel[i]-1].className, obj[sel[i]-1].id);
				if (document.body.innerHTML) obj[sel[i]-1].innerHTML = obj[sel[i]].innerHTML;
				else obj[sel[i]-1].text = obj[sel[i]].text;
				obj[sel[i]-1].value = obj[sel[i]].value;
				obj[sel[i]-1].style.color = obj[sel[i]].style.color;
				obj[sel[i]-1].style.backgroundColor = obj[sel[i]].style.backgroundColor;
				obj[sel[i]-1].className = obj[sel[i]].className;
				obj[sel[i]-1].id = obj[sel[i]].id;
				if (document.body.innerHTML) obj[sel[i]].innerHTML = tmp[0];
				else obj[sel[i]].text = tmp[0];
				obj[sel[i]].value = tmp[1];
				obj[sel[i]].style.color = tmp[2];
				obj[sel[i]].style.backgroundColor = tmp[3];
				obj[sel[i]].className = tmp[4];
				obj[sel[i]].id = tmp[5];
				obj[sel[i]-1].selected = true;
				obj[sel[i]].selected = false;
				}
			}
		}
	}
	inout_selectAllWords(obj_string);
}

function oref_down(obj) {
	var obj_string = obj;
	obj = (typeof obj == "string") ? document.getElementById(obj) : obj;
	if (obj.tagName.toLowerCase() != "select" && obj.length < 2)
		return false;
	var sel = new Array();
	for (var i=obj.length-1; i>-1; i--) {
		if (obj[i].selected == true) {
			sel[sel.length] = i;
		}
	}
	for (i in sel) {
		if (sel[i] != obj.length-1) {
			if (obj[sel[i]+1]) {
				if (!obj[sel[i]+1].selected) {
					var tmp = new Array((document.body.innerHTML ? obj[sel[i]+1].innerHTML : obj[sel[i]+1].text), obj[sel[i]+1].value, obj[sel[i]+1].style.color, obj[sel[i]+1].style.backgroundColor, obj[sel[i]+1].className, obj[sel[i]+1].id);
					if (document.body.innerHTML) obj[sel[i]+1].innerHTML = obj[sel[i]].innerHTML;
					else obj[sel[i]+1].text = obj[sel[i]].text;
					obj[sel[i]+1].value = obj[sel[i]].value;
					obj[sel[i]+1].style.color = obj[sel[i]].style.color;
					obj[sel[i]+1].style.backgroundColor = obj[sel[i]].style.backgroundColor;
					obj[sel[i]+1].className = obj[sel[i]].className;
					obj[sel[i]+1].id = obj[sel[i]].id;
					if (document.body.innerHTML) obj[sel[i]].innerHTML = tmp[0];
					else obj[sel[i]].text = tmp[0];
					obj[sel[i]].value = tmp[1];
					obj[sel[i]].style.color = tmp[2];
					obj[sel[i]].style.backgroundColor = tmp[3];
					obj[sel[i]].className = tmp[4];
					obj[sel[i]].id = tmp[5];
					obj[sel[i]+1].selected = true;
					obj[sel[i]].selected = false;
				}
			}
		}
	}
	inout_selectAllWords(obj_string);
}


/* from in and out */
function inout_selectAllWords(theList) {
  myList = document.getElementById(theList);
  for (var x=0; x < myList.length; x++) {
    myList[x].selected="selected";
  }
}

function inout_addNewKeyword(toList, newText, newValue) {
  theToList=document.getElementById(toList);
  for (var x=0; x < theToList.length; x++) {
    if (theToList[x].text == newText) {
      return false;
    }
  }
  theLength = theToList.length;
  theToList[theLength] = new Option(newText);
  theToList[theLength].value = newValue;
}

function inout_moveKeywords(fromList,toList,selectThese) {
  theFromList=document.getElementById(fromList);
  for (var x=0; x < theFromList.length; x++) {
    if (theFromList[x].selected) {
      inout_addNewKeyword(toList, theFromList[x].text, theFromList[x].value);
    }
  }
  theToList=document.getElementById(fromList);
  for (var x=theToList.length-1; x >= 0 ; x--) {
    if (theToList[x].selected) {
      theToList[x] = null;
    }
  }
  inout_selectAllWords(selectThese);
}




/* - table_sorter.js - */
// http://www.eea.europa.eu/portal_javascripts/table_sorter.js?original=1
(function($){
function sortabledataclass(cell){var re,matches;re=new RegExp("sortabledata-([^ ]*)","g");matches=re.exec(cell.attr('class'));if(matches){return matches[1]}
else{return null}}
function sortable(cell){var text=sortabledataclass(cell);if(text===null){text=cell.text()}
if(text.charAt(4)!=='-'&&text.charAt(7)!=='-'&&!isNaN(parseFloat(text))){return parseFloat(text)}
return text.toLowerCase()}
function sort(){var th,colnum,table,tbody,reverse,index,data,usenumbers,tsorted;th=$(this).closest('th');colnum=$('th',$(this).closest('thead')).index(th);table=$(this).parents('table:first');tbody=table.find('tbody:first');tsorted=parseInt(table.attr('sorted')||'-1',10);reverse=tsorted===colnum;$(this).parent().find('th:not(.nosort) .sortdirection').html('&#x2003;');$(this).children('.sortdirection').html(reverse?'&#x25b2;':'&#x25bc;');index=$(this).parent().children('th').index(this),data=[],usenumbers=true;tbody.find('tr').each(function(){var cells,sortableitem;cells=$(this).children('td');sortableitem=sortable(cells.slice(index,index+1));if(isNaN(sortableitem)){usenumbers=false}
data.push([sortableitem,sortable(cells.slice(1,2)),sortable(cells.slice(0,1)),this])});if(data.length){if(usenumbers){data.sort(function(a,b){return a[0]-b[0]})} else{data.sort()}
if(reverse){data.reverse()}
table.attr('sorted',reverse?'':colnum);tbody.append($.map(data, function(a){return a[3]}));tbody.each(setoddeven)}}
function setoddeven(){var tbody=$(this);tbody.find('tr').removeClass('odd').removeClass('even').filter(':odd').addClass('even').end().filter(':even').addClass('odd')}
$(function(){var blankarrow=$('<span>&#x2003;</span>').addClass('sortdirection');$('table.listing:not(.nosort) thead th:not(.nosort)').append(blankarrow.clone()).css('cursor','pointer').click(sort);$('table.listing:not(.nosort) tbody').each(setoddeven)})})(jQuery);

/* - resolveuid.js - */
// http://www.eea.europa.eu/portal_javascripts/resolveuid.js?original=1
(function($){
function set_resolveuids(){$(".reviewHistory span:contains('uid:')").each(function(){var text=$(this).text();var uid_start=text.lastIndexOf("(uid:");var uid_end=text.lastIndexOf(")");var uid=text.slice(uid_start+5,uid_end);var msg=text.slice(0,uid_start);var base=$("base").attr('href')||document.baseURI||window.location.href.split("?")[0];var node=$("<a>").attr('href',base+'/resolveuid/'+uid).text("original");var div=$("<span>").text(msg);div.append(node);$(this).html(div)})}
$(document).ready(set_resolveuids)})(jQuery);

/* - accessibility.js - */
// http://www.eea.europa.eu/portal_javascripts/accessibility.js?original=1
function setBaseFontSize($fontsize,$reset){var $body=jQuery('body');if($reset){$body.removeClass('smallText').removeClass('largeText');createCookie("fontsize",$fontsize,365)}
$body.addClass($fontsize)}
jQuery(function($){var $fontsize=readCookie("fontsize");if($fontsize){setBaseFontSize($fontsize,0)}});

/* - ga.js - */
// http://www.eea.europa.eu/portal_javascripts/ga.js?original=1
var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-184389-1']);_gaq.push(['_setDomainName',"eea.europa.eu"]);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s)})();

/* - collapsibleformfields.js - */
/* This code collapses fields in forms
 * It is used in plone_forms/search_form.pt
 *
 * Creates a jQuery function to install a click handler that will
 * collapse/expand form fields.
 * On page load, runs it for $('.field.collapsible').
 *
 * It uses the following markup:
 *
 * <div class="collapsible'>
 *   <label class="collapser"> label of the field </label>
 *   <div class="collapse"> block to collapse </div>
 *  </div>
 *
 */


(function($) {

$.fn.do_search_collapse = function() {

    function check_used(element) {
        var e = $(element);

        // is there a number of checkboxs with a toggle box
        if (e.find('input[id$=_toggle]:checkbox').length > 0) {
            // and the toggle checkbox is not checked.
            if (e.find('input[id$=_toggle]:checkbox:checked').length === 0) {
                return true;
            }
        }

        // is there a normal text input fields that is not empty (=has a value)
        if(e.find(':text[value]').length > 0) {
            return true;
        }

        // drop downs
        // we have an option marked as the default option
        if(e.find('select .default_option').length > 0) {
            // and this default option isn't selected
            if(e.find('select .default_option:selected').length === 0) {
                return true;
            }
        }
        return false;
    }

    return this.each( function() {
        var indicator =  $(this).find('.collapser:first'),
            collapse = $(this).find('.collapse:first');

        // install click handler
        indicator.click(function() {
                var container = $(this).parent(),
                    target = container.find('.collapse:first');

                target.slideToggle('normal');
                $(this).toggleClass('expanded');
                $(this).toggleClass('collapsed');
            });

        if (check_used(this)) {
            indicator.addClass('expanded');
        } else {
            collapse.hide();
            indicator.addClass('collapsed');
        }
    });
};

jQuery(function($){$('.field.collapsible').do_search_collapse();});


}(jQuery));


/* - ++resource++plone.app.discussion.javascripts/comments.js - */
// http://www.eea.europa.eu/portal_javascripts/++resource++plone.app.discussion.javascripts/comments.js?original=1
(function($){$.createReplyForm=function(comment_div){var comment_id=comment_div.attr("id");var reply_button=comment_div.find(".reply-to-comment-button");var reply_div=$("#commenting").clone(true);reply_div.find("#formfield-form-widgets-captcha").find("script").remove();reply_div.appendTo(comment_div).css("display","none");reply_div.removeAttr("id");$(reply_button).css("display","none");var reply_form=reply_div.find("form");reply_form.find("input[name='form.widgets.in_reply_to']").val(comment_id);var cancel_reply_button=reply_div.find(".cancelreplytocomment");cancel_reply_button.attr("id",comment_id);reply_form.find("input[name='form.buttons.cancel']").css("display","inline");reply_div.slideDown("slow");cancel_reply_button.css("display","inline")};$.clearForm=function(form_div){form_div.find(".error").removeClass("error");form_div.find(".fieldErrorBox").remove();form_div.find("input[type='text']").attr("value","");form_div.find("textarea").attr("value","")};$(window).load(function(){var post_comment_div=$("#commenting");var in_reply_to_field=post_comment_div.find("input[name='form.widgets.in_reply_to']");if(in_reply_to_field.val()!==""){var current_reply_id="#"+in_reply_to_field.val();var current_reply_to_div=$(".discussion").find(current_reply_id);$.createReplyForm(current_reply_to_div);$.clearForm(post_comment_div)}
$(".reply-to-comment-button").bind("click", function(e){var comment_div=$(this).parents().filter(".comment");$.createReplyForm(comment_div);$.clearForm(comment_div)});$("#commenting #form-buttons-cancel").bind("click", function(e){e.preventDefault();var reply_to_comment_button=$(this).
parents().
filter(".comment").
find(".reply-to-comment-button");$.reply_to_comment_form=$(this).parents().filter(".reply");$.reply_to_comment_form.slideUp("slow", function(){$(this).remove()});reply_to_comment_button.css("display","inline")});$("input[name='form.button.PublishComment']").on('click', function(){var trigger=this;var form=$(this).parents("form");var data=$(form).serialize();var form_url=$(form).attr("action");$.ajax({type:"GET",url:form_url,data:data,context:trigger,success: function(msg){form.find("input[name='form.button.PublishComment']").remove();form.parents(".state-pending").toggleClass('state-pending').toggleClass('state-published')},error: function(msg){return true}});return false});$("input[name='form.button.DeleteComment']").on('click', function(){var trigger=this;var form=$(this).parents("form");var data=$(form).serialize();var form_url=$(form).attr("action");$.ajax({type:'POST',url:form_url,data:data,context:$(trigger).parents(".comment"),success: function(data){var comment=$(this);var clss=comment.attr('class');var treelevel=parseInt(clss[clss.indexOf('replyTreeLevel')+'replyTreeLevel'.length],10);var selector=".replyTreeLevel"+treelevel;for(var i=0;i<treelevel;i++){selector+=", .replyTreeLevel"+i}
comment.nextUntil(selector).each(function(){$(this).fadeOut('fast', function(){$(this).remove()})});$(this).fadeOut('fast', function(){$(this).remove()})},error: function(req,error){return true}});return false});$(".reply").find("input[name='form.buttons.reply']").css("display","none");$(".reply").find("input[name='form.buttons.cancel']").css("display","none");$(".reply-to-comment-button").css("display","inline")})}(jQuery));

/* - global_searchbox.js - */
// http://www.eea.europa.eu/portal_javascripts/global_searchbox.js?original=1
(function($){$(function(){var search_forms=$("#portal-searchbox, #visual-column-wrapper").find(".searchforms");var text_inputs=search_forms.find("input:text");text_inputs.each( function(){var search_label=this.title+"...";this.onfocus=function(){if(this.value==search_label){this.value=""}};this.onblur=function(){if(this.value===""){this.value=search_label}};this.value=search_label})})})(jQuery);

/* - popupforms.js - */
// http://www.eea.europa.eu/portal_javascripts/popupforms.js?original=1
var common_content_filter='#content>*:not(div.configlet),dl.portalMessage.error,dl.portalMessage.info';jQuery.extend(jQuery.tools.overlay.conf,{fixed:false,speed:'fast',mask:{color:'#fff',opacity:0.4,loadSpeed:0,closeSpeed:0}});(function($){$.plonepopups=$.plonepopups||{};$.extend($.plonepopups,{noformerrorshow: function noformerrorshow(el,noform){var o=$(el),emsg=o.find('dl.portalMessage.error');if(emsg.length){o.children().replaceWith(emsg);return false} else{return noform}},redirectbasehref: function redirectbasehref(el,responseText){var mo=responseText.match(/<base href="(\S+?)"/i);if(mo.length===2){return mo[1]}
return location}})})(jQuery);jQuery(function($){if(jQuery.browser.msie&&parseInt(jQuery.browser.version,10)<7){return}
$('#portal-personaltools a[href$="/login"], #portal-personaltools a[href$="/login_form"], .discussion a[href$="/login"], .discussion a[href$="/login_form"]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form#login_form',cssclass:'overlay-login',noform: function(){if(location.href.search(/pwreset_finish$/)>=0){return 'redirect'} else{return 'reload'}},redirect: function(){var href=location.href;if(href.search(/pwreset_finish$/)>=0){return href.slice(0,href.length-14)+'logged_in'} else{return href}}});$('#siteaction-contact a').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-contact',formselector:'form[name="feedback_form"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'close')}});$('#contextSetDefaultPage, #folderChangeDefaultPage').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-default_view',formselector:'form[name="default_page_form"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'reload')},closeselector:'[name="form.button.Cancel"]',width:'40%'});$('dl#plone-contentmenu-actions a#plone-contentmenu-actions-delete').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'#delete_confirmation',cssclass:'overlay-delete',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect:$.plonepopups.redirectbasehref,closeselector:'[name="form.button.Cancel"]',width:'50%'});$('dl#plone-contentmenu-actions a#plone-contentmenu-actions-rename').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-rename',closeselector:'[name="form.button.Cancel"]',width:'40%'});$('dl#plone-contentmenu-factories a#plone-contentmenu-add-to-default-page').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-folder-factories',closeselector:'[name="form.button.Cancel"]',width:'40%'});$('#portal-personaltools a[href$="/@@register"]').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-register',formselector:'form.kssattr-formname-register'});$('form[name="users_add"], form[name="groups_add"]').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-users',formselector:'form.kssattr-formname-new-user, form[name="groups"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect: function(){return location.href}});$('form[name="users_add"], form[name="groups_add"]').width($('input.add').outerWidth());$('form[name="users_add"] input.add, form[name="groups_add"] input.add').css('cursor','pointer');$('#content-history a').prepOverlay({subtype:'ajax',filter:'h2, #content-history',cssclass:'overlay-history',urlmatch:'@@historyview',urlreplace:'@@contenthistorypopup'})});

/* - design.js - */
// http://www.eea.europa.eu/portal_javascripts/design.js?original=1
jQuery(document).ready(function($){'use strict';var url_path_name=window.location.pathname;var $body=$("body");var ie;if($.browser){ie=$.browser.msie&&parseInt($.browser.version,10)} else{var nav=navigator.userAgent;ie=nav.indexOf('MSIE');ie<0?ie=false:ie=parseInt(nav.substring(ie+5,ie+7))}
$(".policy_question").each(function(idx,el){var $el=$(el);var $next_el=$el.next();if($next_el.hasClass('indicator-figure-plus-container')){$el.addClass("page-break-before");$next_el.find('.figure-title').addClass('no-page-break-before')}});var $video_iframe=$("iframe").filter('[src*="video"]'),$video_iframe_src;if($video_iframe){$video_iframe_src=$video_iframe.attr('src');$("<a />",{'class':'video_iframe_for_print visible-print',href:$video_iframe_src,html:"Video link: ["+$video_iframe_src+"]"}).insertBefore($video_iframe)}
$('.eea-tabs').find('li:last-child').addClass('last-child');var $popup_login=$("#popup_login_form");$("#anon-personalbar, #siteaction-login").click(function(e){$popup_login.slideToggle();e.preventDefault()});var $navigation_submenus=$(".portletSubMenuHeader");if($navigation_submenus&&$navigation_submenus.length<2){$navigation_submenus.hide()}
$('.js-adoptHeight').each(function(){var $el=$(arguments[1]);var $target_el=$($el.data('target-element'));$el.css('height',$target_el.outerHeight())});$(".attention, .caution, .danger, .error, .hint, .important, .note, .tip, .warning").addClass('eea-icon');$(document).ajaxComplete(function(event,xhr,settings){var url=settings.url.split('/');var method=url[url.length-1];var reset_methods=['@@googlechart.googledashboard.edit','@@googlechart.googledashboards.edit','@@googlechart.savepngchart','@@googlechart.setthumb','@@daviz.properties.edit'];if(reset_methods.indexOf(method)>-1){$.timeoutDialog.reset()}});try{$.timeoutDialog({delay:900000})}
catch(err){}
$(".required:contains('■')").addClass('no-bg');if($("#portlet-prefs").length){$("#portal-column-two").remove();$("#portal-column-content").removeClass('width-3:4').addClass('width-full')}
var r=/data-and-maps\/(figures|data)\/?$/;if(r.test(url_path_name)){$body.addClass('fullscreen');$('#icon-full_screen').parent().remove()}
var edit_bar=$("#edit-bar");var edit_translate=function(){var translating=$("#content").find('form').find('.hiddenStructure').text().indexOf('Translating');if(translating!==-1){edit_bar.closest('#portal-column-content')[0].className="cell width-full position-0"}};if(edit_bar){edit_translate()}
var $auto_related=$("#auto-related"),$prev=$auto_related.prev(),$dls=$auto_related.find('dl');if($dls.length){$auto_related.detach();$dls.each(function(idx,item){var $item=$(item),$dt=$item.find('dt');$item.find('.portletItem').each(function(idx,item){if(item.className.indexOf('embedded')===-1){$(item).insertAfter($dt)}})});$auto_related.insertAfter($prev)}
function themePromotionPortlets(top_news){var top_news_width=top_news.width();var margin=top_news_width * 0.012,w=Math.floor((top_news_width-5 * margin)/5);var promotions=top_news.find('.portlet-promotions');promotions.width(w);var last=promotions.last();promotions.not(last).css('marginRight',(Math.floor(margin)+3)+'px');last.css({'marginRight':'0px'})}
var top_news=$('#top-news-area');if(top_news.length){themePromotionPortlets(top_news)}
jQuery.fn.avoidMultipleClicks=function(options){var settings={timeout:3000,linkSelector:'a',linkCSS:'downloading',lockCSS:'downloading-lock'};if(options){jQuery.extend(settings,options)}
var self=this;return this.each(function(){self.find(settings.linkSelector).click(function(){var context=$(this);var oldCSS=context.attr('class');context.removeClass();context.addClass(settings.linkCSS);self.addClass(settings.lockCSS);setTimeout(function(){self.removeClass(settings.lockCSS);context.removeClass(settings.linkCSS);context.addClass(oldCSS)},settings.timeout)})})};$('.documentActions .action-items').avoidMultipleClicks();$('.documentExportActions').avoidMultipleClicks({linkSelector:'.eea-icon',linkCSS:'eea-icon eea-icon-3x eea-icon-download eea-icon-anim-burst animated'});var file_types=['pdf','gif','tif','png','zip','xls','eps','csv','tsv','exhibit','txt','doc','docx','xlsx','table'];
function check_file_type(tokens){var tokens_length=tokens.length;var rought_ext=tokens[tokens_length-1];var guess=rought_ext.split('/')[0];return file_types.indexOf(guess)===-1?'file':guess}
function extract_file_type(url,txt_contents){var url_tokens=url.split('.');var txt_tokens=txt_contents.trim().toLowerCase().split('.');var txt_tokes_outcome=check_file_type(txt_tokens);if(txt_tokes_outcome==='file'){return check_file_type(url_tokens)}
return txt_tokes_outcome}
var links=document.getElementsByTagName('a');
function match_download_links(links){var list=[];var links_length=links.length;var link,link_href;for(var i=0;i<links_length;i++){link=links[i];link_href=link.href;if(!link_href.match('eea.europa')){continue}
if(link_href.match("/download[.a-zA-Z]*")||link_href.match("at_download")||link_href.match("/download$")||link_href.match("ftp.eea.europa")){list.push(link)}}
return list}
var downloads_list=match_download_links(links);
function add_downloads_tracking_code(idx,el){el.onclick=function(){var text=el.textContent||el.innerText;var ftype=extract_file_type(el.href,text);var _gaq=window._gaq||[];var link=el.href;_gaq.push(['_trackEvent','Downloads',link,ftype])};return el}
$.each(downloads_list,add_downloads_tracking_code);if(window.readCookie&&!window.readCookie('survey_message')){window.createCookie('survey_message','never',365)}
var $right_section_container=$(".eea-right-section");if($right_section_container.length){(function insert_section(){$right_section_container.each(function(idx,el){var $el=$(el),$right_section_slider=$el.prev();if(!$right_section_slider.hasClass('eea-right-section-slider')){$right_section_slider=$('<div class="eea-section eea-right-section-slider eea-scrolling-toggle-visibility"><span class="eea-icon eea-icon-4x eea-icon-caret-left eea-icon-anim-horizontal animated"></span></div>');$right_section_slider.insertBefore($el)}
$right_section_slider.click(function(){$(this).toggleClass("eea-right-section-slider-active").next().toggleClass("eea-right-section-active eea-scrolling-keep-visible")})})})()}});

/* - promotions.js - */
// http://www.eea.europa.eu/portal_javascripts/promotions.js?original=1
var btn_ready=true;
function getRandom(range){return Math.floor(Math.random()*range)}
function updateCounter(portlet_id){var sel_index=jQuery('#'+portlet_id+' DD').index(jQuery('#'+portlet_id+' DD.active-promo')[0])+1;var max_items=jQuery('#'+portlet_id+' DD').length;jQuery("#count-"+portlet_id).html(sel_index+'/'+max_items)}
function getPortletId(context){return context.id.substring(5,context.id.length)+'-portlet'}
function promoMoveSlide(context,direction,speed){if(btn_ready===true){var portlet_id=getPortletId(context);var sel_promo=jQuery('#'+portlet_id+' .active-promo');var next_promo;if(direction=='next'){next_promo=sel_promo.next()}
else{next_promo=sel_promo.prev()}
if(next_promo.length>0&&next_promo[0].tagName=='DD'){var sel_promo_id=sel_promo[0].id;var next_promo_id=next_promo[0].id;jQuery("#"+sel_promo_id).slideToggle(speed);jQuery("#"+next_promo_id).slideToggle(speed);jQuery("#"+sel_promo_id).removeClass('active-promo');jQuery("#"+sel_promo_id).addClass('hide-promo');jQuery("#"+next_promo_id).removeClass('hide-promo');jQuery("#"+next_promo_id).addClass('active-promo')}
updateCounter(portlet_id)}}
function rssBehavior(element){var tabs=element.parentNode.getElementsByTagName('span');var feeds=[];var current_feed=document.getElementById('container-rss-'+element.id);var i;for(i=0;i<tabs.length;i++){feeds[i]=document.getElementById('container-rss-'+tabs[i].id)}
for(i=0;i<tabs.length;i++){tabs[i].className='portletTabHead'}
element.className='portletTabHead_current';for(i=0;i<feeds.length;i++){feeds[i].style.display='none'}
current_feed.style.display='block';return false}
function setPromo(){var animation_speed=800;var promo_portlets=jQuery('.promo-nav-portlet');jQuery.each(promo_portlets, function(){var promos=jQuery('dd',this);if(promos.length>0){var sel_promo_id=promos[getRandom(promos.length)].id;jQuery("#"+sel_promo_id).toggle(animation_speed);jQuery('#'+sel_promo_id).addClass('active-promo');jQuery('#'+sel_promo_id).removeClass('hide-promo');updateCounter(this.id)}});jQuery(".promo-next").click(function(){promoMoveSlide(this,'next',animation_speed)});jQuery(".promo-prev").click(function(){promoMoveSlide(this,'prev',animation_speed)});jQuery("span.portletTabHead").click(function(){rssBehavior(this)});jQuery("span.portletTabHead_current").click(function(){rssBehavior(this)})}
function showImage(promo_id){var promo=jQuery('#'+promo_id);var image_ob=promo.find('img')[0];var image_src=promo.find('a').last()[0].href;image_ob.src=image_src}
jQuery(document).ready(function(){if(jQuery('#top-news-area').length>0){jQuery('#top-news-area .portlet-promotions .promo-nav-portlet dd').removeClass('hide-promo')}
else{setPromo()}});
