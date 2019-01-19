/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

;/*!
  * Bootstrap v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("popper.js"),require("jquery")):"function"==typeof define&&define.amd?define(["exports","popper.js","jquery"],e):e(t.bootstrap={},t.Popper,t.jQuery)}(this,function(t,u,g){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}u=u&&u.hasOwnProperty("default")?u.default:u,g=g&&g.hasOwnProperty("default")?g.default:g;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}return e&&document.querySelector(e)?e:null},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",E="bs.button",y="."+E,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+y+C,FOCUS_BLUR_DATA_API:"focus"+y+C+" blur"+y+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.2.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",U=g.fn[L],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},x={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},F="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",X="carousel-item-right",z="carousel-item-left",G="carousel-item-next",J="carousel-item-prev",Z="pointer-event",$=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(F)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?F:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),_.typeCheckConfig(L,t,x),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(Z)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===F,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===F?(n=z,i=G,M):(n=X,i=J,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},W,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return W}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=U,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",Et="collapsed",yt="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Et).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(Et).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(yt)?yt:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(Et,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",Ut="dropdown-menu-right",Wt="position-static",xt='[data-toggle="dropdown"]',Ft=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",Xt="right-start",zt="left-start",Gt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Jt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Zt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Wt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(Ut)&&(e=Bt)):t.hasClass(Ht)?e=Xt:t.hasClass(Rt)?e=zt:g(this._menu).hasClass(Ut)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(xt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(xt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return Gt}},{key:"DefaultType",get:function(){return Jt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,xt,Zt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Zt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Zt._clearMenus).on(kt.CLICK_DATA_API,xt,function(t){t.preventDefault(),t.stopPropagation(),Zt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Ft,function(t){t.stopPropagation()}),g.fn[It]=Zt._jQueryInterface,g.fn[It].Constructor=Zt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Zt._jQueryInterface};var $t="modal",te="bs.modal",ee="."+te,ne=g.fn[$t],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,de,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(he),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig($t,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(he);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(ce)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(le)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,fe,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});me._jQueryInterface.call(g(e),o,this)}),g.fn[$t]=me._jQueryInterface,g.fn[$t].Constructor=me,g.fn[$t].noConflict=function(){return g.fn[$t]=ne,me._jQueryInterface};var pe="tooltip",ve="bs.tooltip",Ee="."+ve,ye=g.fn[pe],Ce="bs-tooltip",Te=new RegExp("(^|\\s)"+Ce+"\\S+","g"),Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},be={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Ie={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},De="show",we="out",Ae={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:"show"+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Ne="fade",Oe="show",ke=".tooltip-inner",Pe=".arrow",Le="hover",je="focus",He="click",Re="manual",Ue=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Oe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(Ne);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Pe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Oe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(g(this.tip).hasClass(Ne)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Oe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[He]=!1,this._activeTrigger[je]=!1,this._activeTrigger[Le]=!1,g(this.tip).hasClass(Ne)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ce+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(ke)),this.getTitle()),g(t).removeClass(Ne+" "+Oe)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return be[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Re){var e=t===Le?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Le?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?je:Le]=!0),g(e.getTipElement()).hasClass(Oe)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?je:Le]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,g(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(pe,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Te);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(Ne),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(ve),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(ve,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return Ie}},{key:"NAME",get:function(){return pe}},{key:"DATA_KEY",get:function(){return ve}},{key:"Event",get:function(){return Ae}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}();g.fn[pe]=Ue._jQueryInterface,g.fn[pe].Constructor=Ue,g.fn[pe].noConflict=function(){return g.fn[pe]=ye,Ue._jQueryInterface};var We="popover",xe="bs.popover",Fe="."+xe,qe=g.fn[We],Me="bs-popover",Ke=new RegExp("(^|\\s)"+Me+"\\S+","g"),Qe=l({},Ue.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Be=l({},Ue.DefaultType,{content:"(string|element|function)"}),Ve="fade",Ye="show",Xe=".popover-header",ze=".popover-body",Ge={HIDE:"hide"+Fe,HIDDEN:"hidden"+Fe,SHOW:"show"+Fe,SHOWN:"shown"+Fe,INSERTED:"inserted"+Fe,CLICK:"click"+Fe,FOCUSIN:"focusin"+Fe,FOCUSOUT:"focusout"+Fe,MOUSEENTER:"mouseenter"+Fe,MOUSELEAVE:"mouseleave"+Fe},Je=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Me+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(Xe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ze),e),t.removeClass(Ve+" "+Ye)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ke);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(xe),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(xe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return Qe}},{key:"NAME",get:function(){return We}},{key:"DATA_KEY",get:function(){return xe}},{key:"Event",get:function(){return Ge}},{key:"EVENT_KEY",get:function(){return Fe}},{key:"DefaultType",get:function(){return Be}}]),i}(Ue);g.fn[We]=Je._jQueryInterface,g.fn[We].Constructor=Je,g.fn[We].noConflict=function(){return g.fn[We]=qe,Je._jQueryInterface};var Ze="scrollspy",$e="bs.scrollspy",tn="."+$e,en=g.fn[Ze],nn={offset:10,method:"auto",target:""},on={offset:"number",method:"string",target:"(string|element)"},rn={ACTIVATE:"activate"+tn,SCROLL:"scroll"+tn,LOAD_DATA_API:"load"+tn+".data-api"},sn="dropdown-item",an="active",ln='[data-spy="scroll"]',cn=".nav, .list-group",hn=".nav-link",un=".nav-item",fn=".list-group-item",dn=".dropdown",gn=".dropdown-item",_n=".dropdown-toggle",mn="offset",pn="position",vn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+hn+","+this._config.target+" "+fn+","+this._config.target+" "+gn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(rn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?mn:pn,o="auto"===this._config.method?t:this._config.method,r=o===pn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,$e),g(this._scrollElement).off(tn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},nn,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(Ze),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(Ze,t,on),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(sn)?(n.closest(dn).find(_n).addClass(an),n.addClass(an)):(n.addClass(an),n.parents(cn).prev(hn+", "+fn).addClass(an),n.parents(cn).prev(un).children(hn).addClass(an)),g(this._scrollElement).trigger(rn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(an)}).forEach(function(t){return t.classList.remove(an)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data($e);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data($e,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return nn}}]),n}();g(window).on(rn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ln)),e=t.length;e--;){var n=g(t[e]);vn._jQueryInterface.call(n,n.data())}}),g.fn[Ze]=vn._jQueryInterface,g.fn[Ze].Constructor=vn,g.fn[Ze].noConflict=function(){return g.fn[Ze]=en,vn._jQueryInterface};var En="bs.tab",yn="."+En,Cn=g.fn.tab,Tn={HIDE:"hide"+yn,HIDDEN:"hidden"+yn,SHOW:"show"+yn,SHOWN:"shown"+yn,CLICK_DATA_API:"click"+yn+".data-api"},Sn="dropdown-menu",bn="active",In="disabled",Dn="fade",wn="show",An=".dropdown",Nn=".nav, .list-group",On=".active",kn="> li > .active",Pn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ln=".dropdown-toggle",jn="> .dropdown-menu .active",Hn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(bn)||g(this._element).hasClass(In))){var t,i,e=g(this._element).closest(Nn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?kn:On;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(Tn.HIDE,{relatedTarget:this._element}),a=g.Event(Tn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(Tn.HIDDEN,{relatedTarget:n._element}),e=g.Event(Tn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,En),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(On):g(e).find(kn))[0],r=n&&o&&g(o).hasClass(Dn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(wn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(bn);var i=g(e.parentNode).find(jn)[0];i&&g(i).removeClass(bn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(bn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),g(t).addClass(wn),t.parentNode&&g(t.parentNode).hasClass(Sn)){var o=g(t).closest(An)[0];if(o){var r=[].slice.call(o.querySelectorAll(Ln));g(r).addClass(bn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(En);if(e||(e=new i(this),t.data(En,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}}]),i}();g(document).on(Tn.CLICK_DATA_API,Pn,function(t){t.preventDefault(),Hn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Hn._jQueryInterface,g.fn.tab.Constructor=Hn,g.fn.tab.noConflict=function(){return g.fn.tab=Cn,Hn._jQueryInterface};var Rn="toast",Un="bs.toast",Wn="."+Un,xn=g.fn[Rn],Fn={CLICK_DISMISS:"click.dismiss"+Wn,HIDE:"hide"+Wn,HIDDEN:"hidden"+Wn,SHOW:"show"+Wn,SHOWN:"shown"+Wn},qn="fade",Mn="hide",Kn="show",Qn="showing",Bn={animation:"boolean",autohide:"boolean",delay:"number"},Vn={animation:!0,autohide:!0,delay:500},Yn='[data-dismiss="toast"]',Xn=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(Fn.SHOW),this._config.animation&&this._element.classList.add(qn);var e=function(){t._element.classList.remove(Qn),t._element.classList.add(Kn),g(t._element).trigger(Fn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove(Mn),this._element.classList.add(Qn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Kn)&&(g(this._element).trigger(Fn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Kn)&&this._element.classList.remove(Kn),g(this._element).off(Fn.CLICK_DISMISS),g.removeData(this._element,Un),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},Vn,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Rn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Fn.CLICK_DISMISS,Yn,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add(Mn),g(t._element).trigger(Fn.HIDDEN)};if(this._element.classList.remove(Kn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Un);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Un,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"DefaultType",get:function(){return Bn}}]),i}();g.fn[Rn]=Xn._jQueryInterface,g.fn[Rn].Constructor=Xn,g.fn[Rn].noConflict=function(){return g.fn[Rn]=xn,Xn._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Zt,t.Modal=me,t.Popover=Je,t.Scrollspy=vn,t.Tab=Hn,t.Toast=Xn,t.Tooltip=Ue,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;(function(w) {
  if (w.fastXDM) return;

  var handlers  = {};
  var onEnvLoad = [];
  var env       = {};

  // Key generation
  function genKey() {
    var key = '';
    for (var i = 0; i < 5; i++) {
      key += Math.ceil(Math.random() * 15).toString(16);
    }
    return key;
  }

  function waitFor(obj, prop, func, self,  count) {
    if (obj[prop]) {
      func.apply(self);
    } else {
      count = count || 0;
      if (count < 1000) {
        setTimeout(function() {
          waitFor(obj, prop, func, self, count + 1);
        }, 0);
      }
    }
  }

  function attachScript(url) {
    setTimeout(function() {
      var newScript  = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src  = url || w.fastXDM.helperUrl;
      waitFor(document, 'body', function() {
        document.getElementsByTagName('HEAD')[0].appendChild(newScript);
      });
    }, 0);
  }

  function walkVar(value, clean) {
    var newValue;

    switch (typeof value) {
      case 'string':
        if (clean) {
          newValue = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        } else {
          newValue = value.replace(/&#039;/g, '\'').replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
        }
        break;
      case 'object':
        if (Object.prototype.toString.apply(value) === '[object Array]') {
          newValue = [];
          for (var i = 0, len = value.length; i < len; i++) {
            newValue[i] = walkVar(value[i], clean);
          }
        } else {
          newValue = {};
          for (var k in value) {
            if (Object.hasOwnProperty.call(value, k)) {
              newValue[k] = walkVar(value[k], clean);
            }
          }
        }
        break;
      default:
        newValue = value;
        break;
    }

    return newValue;
  }

  // Env functions
  function getEnv(callback, self) {
    if (env.loaded) {
      callback.apply(self, [env]);
    } else {
      onEnvLoad.push([self, callback]);
    }
  }

  function envLoaded() {
    env.loaded = true;

    for (var i = 0, len = onEnvLoad.length; i < len; i++) {
      onEnvLoad[i][1].apply(onEnvLoad[i][0], [env]);
    }
  }

  function applyMethod(strData, self) {
    getEnv(function(env) {
      var data = env.json.parse(strData);
      if (data[0]) {
        if (!data[1]) data[1] = [];

        for (var i = 0, len = data[1].length; i < len; i++) {
          if (data[1][i] && data[1][i]._func) {
            var funcNum = data[1][i]._func;
            data[1][i] = function() {
              var args = Array.prototype.slice.call(arguments);
              args.unshift('_func' + funcNum);
              self.callMethod.apply(self, args);
            }
          } else if (self.options.safe) {
            data[1][i] = walkVar(data[1][i], true);
          }
        }

        setTimeout(function() {
          if (!self.methods[data[0]]) {
            throw Error('fastXDM: Method ' + data[0] + ' is undefined');
          }
          self.methods[data[0]].apply(self, data[1]);
        }, 0);
      }
    });
  }

  function extend(obj1, obj2) {
    for (var i in obj2) {
      if (obj1[i] && typeof(obj1[i]) === 'object') {
        extend(obj1[i], obj2[i])
      } else {
        obj1[i] = obj2[i];
      }
    }
  }

  // XDM object
  w.fastXDM = {
    _id: 0,
    helperUrl: 'https://vk.com/js/api/xdmHelper.js',

    Server: function(methods, filter, options) {
      this.methods   = methods || {};
      this.filter    = filter;
      this.options   = options || {};
      this.id        = w.fastXDM._id++;
      this.key       = genKey();
      this.frameName = 'fXD' + this.key;
      this.server    = true;

      this.methods['%init%'] = this.methods.__fxdm_i = function() {
        w.fastXDM.run(this.id);
        if (this.methods.onInit) {
          this.methods.onInit();
        }
      };

      handlers[this.key] = [applyMethod, this];
    },

    Client: function(methods, options) {
      this.methods = methods || {};
      this.options = options || {};
      this.id      = w.fastXDM._id++;
      this.client  = true;

      w.fastXDM.run(this.id);

      if (window.name.indexOf('fXD') === 0) {
        this.key = window.name.substr(3);
      } else {
        throw Error('Wrong window.name property.');
      }

      this.caller = window.parent;

      handlers[this.key] = [applyMethod, this];

      w.fastXDM.on('helper', function() {
        w.fastXDM.onClientStart(this);
      }, this);

      getEnv(function(env) {
        env.send(this, env.json.stringify(['%init%']));

        var methods = this.methods;
        setTimeout(function() {
          if (methods.onInit) {
            methods.onInit();
          }
        }, 0);
      }, this);
    },

    onMessage: function(e) {
      var data = e.data;
      if (!data) {
        return false;
      }
      if (typeof data !== 'string' && !(data instanceof String)) {
        return false;
      }

      var key = data.substr(0, 5);
      if (handlers[key]) {
        var self = handlers[key][1];
        if (self && (!self.filter || self.filter(e.origin))) {
          handlers[key][0](data.substr(6), self);
        }
      }
    },

    setJSON: function(json) {
      env.json = json;
    },

    getJSON: function(callback) {
      if (!callback) {
        return env.json;
      }

      getEnv(function(env) {
        callback(env.json);
      });
    },

    setEnv: function(exEnv) {
      for (var i in exEnv) {
        env[i] = exEnv[i];
      }

      envLoaded();
    },

    _q: {},

    on: function(key, act, self) {
      if (!this._q[key]) this._q[key] = [];

      if (this._q[key] == -1) {
        act.apply(self);
      } else {
        this._q[key].push([act, self]);
      }
    },

    run: function(key) {
      var len = (this._q[key] || []).length;
      for (var i = 0; i < len; i++) {
        this._q[key][i][0].apply(this._q[key][i][1]);
      }

      this._q[key] = -1;
    },

    waitFor: waitFor
  }

  w.fastXDM.Server.prototype.start = function(obj, count) {
    if (obj.contentWindow) {
      this.caller = obj.contentWindow;
      this.frame  = obj;

      w.fastXDM.on('helper', function() {
        w.fastXDM.onServerStart(this);
      }, this);
    } else { // Opera old versions
      var self = this;
      count = count || 0;
      if (count < 50) {
        setTimeout(function() {
          self.start.apply(self, [obj, count + 1]);
        }, 100);
      }
    }
  }

  w.fastXDM.Server.prototype.destroy = function() {
    delete handlers[this.key];
  }

  w.fastXDM.Server.prototype.append = function(obj, options, attrs) {
    var div       = document.createElement('DIV');
    div.innerHTML = '<iframe name="' + this.frameName + '" ' + (attrs || '') + '></iframe>';
    var frame     = div.firstChild;
    var self      = this;

    setTimeout(function() {
      frame.frameBorder = '0';
      if (options) extend(frame, options);
      obj.insertBefore(frame, obj.firstChild);
      self.start(frame);
    }, 0);

    return frame;
  }

  w.fastXDM.Client.prototype.callMethod = w.fastXDM.Server.prototype.callMethod = function() {
    var args   = Array.prototype.slice.call(arguments);
    var method = args.shift();

    for (var i = 0, len = args.length; i < len; i++) {
      if (typeof(args[i]) === 'function') {
        this.funcsCount = (this.funcsCount || 0) + 1;
        var func        = args[i];
        var funcName    = '_func' + this.funcsCount;

        this.methods[funcName] = function() {
          func.apply(this, arguments);
          delete this.methods[funcName];
        }

        args[i] = {_func: this.funcsCount};
      } else if (this.options.safe) {
        args[i] = walkVar(args[i], false);
      }
    }

    waitFor(this, 'caller', function() {
      w.fastXDM.on(this.id, function() {
        getEnv(function(env) {
          env.send(this, env.json.stringify([method, args]));
        }, this);
      }, this);
    }, this);
  }

  if (w.JSON && typeof(w.JSON) === 'object' && w.JSON.parse && w.JSON.stringify && w.JSON.stringify({a:[1,2,3]}).replace(/ /g, '') === '{"a":[1,2,3]}') {
    env.json = {parse: w.JSON.parse, stringify: w.JSON.stringify};
  } else {
    w.fastXDM._needJSON = true;
  }

  // PostMessage cover
  if (w.postMessage) {
    env.protocol = 'p';
    env.send = function(xdm, strData) {
      var win = (xdm.frame ? xdm.frame.contentWindow : xdm.caller);
      if (win) {
        try {
          win.postMessage(xdm.key + ':' + strData, "*");
        } catch(e) {
          window.postMessage.call(win, xdm.key + ':' + strData, "*");
        }
      }
    }

    if (w.addEventListener) {
      w.addEventListener("message", w.fastXDM.onMessage, false);
    } else {
      w.attachEvent("onmessage", w.fastXDM.onMessage);
    }

    if (w.fastXDM._needJSON) {
      w.fastXDM._onlyJSON = true;
      attachScript();
    } else {
      envLoaded();
    }
  } else {
    attachScript();
  }
})(window);

if (!window.VK) window.VK = {};

/*
 * Based on JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 */
if(!VK.MD5){VK.MD5=function(n){var j=function(o,r){var q=(o&65535)+(r&65535),p=(o>>16)+(r>>16)+(q>>16);return(p<<16)|(q&65535)},g=function(o,p){return(o<<p)|(o>>>(32-p))},k=function(w,r,p,o,v,u){return j(g(j(j(r,w),j(o,u)),v),p)},a=function(q,p,w,v,o,u,r){return k((p&w)|((~p)&v),q,p,o,u,r)},h=function(q,p,w,v,o,u,r){return k((p&v)|(w&(~v)),q,p,o,u,r)},c=function(q,p,w,v,o,u,r){return k(p^w^v,q,p,o,u,r)},m=function(q,p,w,v,o,u,r){return k(w^(p|(~v)),q,p,o,u,r)},b=function(A,u){var z=1732584193,y=-271733879,w=-1732584194,v=271733878,r,q,p,o;A[u>>5]|=128<<((u)%32);A[(((u+64)>>>9)<<4)+14]=u;for(var t=0,s=A.length;t<s;t+=16){r=z;q=y;p=w;o=v;z=a(z,y,w,v,A[t+0],7,-680876936);v=a(v,z,y,w,A[t+1],12,-389564586);w=a(w,v,z,y,A[t+2],17,606105819);y=a(y,w,v,z,A[t+3],22,-1044525330);z=a(z,y,w,v,A[t+4],7,-176418897);v=a(v,z,y,w,A[t+5],12,1200080426);w=a(w,v,z,y,A[t+6],17,-1473231341);y=a(y,w,v,z,A[t+7],22,-45705983);z=a(z,y,w,v,A[t+8],7,1770035416);v=a(v,z,y,w,A[t+9],12,-1958414417);w=a(w,v,z,y,A[t+10],17,-42063);y=a(y,w,v,z,A[t+11],22,-1990404162);z=a(z,y,w,v,A[t+12],7,1804603682);v=a(v,z,y,w,A[t+13],12,-40341101);w=a(w,v,z,y,A[t+14],17,-1502002290);y=a(y,w,v,z,A[t+15],22,1236535329);z=h(z,y,w,v,A[t+1],5,-165796510);v=h(v,z,y,w,A[t+6],9,-1069501632);w=h(w,v,z,y,A[t+11],14,643717713);y=h(y,w,v,z,A[t+0],20,-373897302);z=h(z,y,w,v,A[t+5],5,-701558691);v=h(v,z,y,w,A[t+10],9,38016083);w=h(w,v,z,y,A[t+15],14,-660478335);y=h(y,w,v,z,A[t+4],20,-405537848);z=h(z,y,w,v,A[t+9],5,568446438);v=h(v,z,y,w,A[t+14],9,-1019803690);w=h(w,v,z,y,A[t+3],14,-187363961);y=h(y,w,v,z,A[t+8],20,1163531501);z=h(z,y,w,v,A[t+13],5,-1444681467);v=h(v,z,y,w,A[t+2],9,-51403784);w=h(w,v,z,y,A[t+7],14,1735328473);y=h(y,w,v,z,A[t+12],20,-1926607734);z=c(z,y,w,v,A[t+5],4,-378558);v=c(v,z,y,w,A[t+8],11,-2022574463);w=c(w,v,z,y,A[t+11],16,1839030562);y=c(y,w,v,z,A[t+14],23,-35309556);z=c(z,y,w,v,A[t+1],4,-1530992060);v=c(v,z,y,w,A[t+4],11,1272893353);w=c(w,v,z,y,A[t+7],16,-155497632);y=c(y,w,v,z,A[t+10],23,-1094730640);z=c(z,y,w,v,A[t+13],4,681279174);v=c(v,z,y,w,A[t+0],11,-358537222);w=c(w,v,z,y,A[t+3],16,-722521979);y=c(y,w,v,z,A[t+6],23,76029189);z=c(z,y,w,v,A[t+9],4,-640364487);v=c(v,z,y,w,A[t+12],11,-421815835);w=c(w,v,z,y,A[t+15],16,530742520);y=c(y,w,v,z,A[t+2],23,-995338651);z=m(z,y,w,v,A[t+0],6,-198630844);v=m(v,z,y,w,A[t+7],10,1126891415);w=m(w,v,z,y,A[t+14],15,-1416354905);y=m(y,w,v,z,A[t+5],21,-57434055);z=m(z,y,w,v,A[t+12],6,1700485571);v=m(v,z,y,w,A[t+3],10,-1894986606);w=m(w,v,z,y,A[t+10],15,-1051523);y=m(y,w,v,z,A[t+1],21,-2054922799);z=m(z,y,w,v,A[t+8],6,1873313359);v=m(v,z,y,w,A[t+15],10,-30611744);w=m(w,v,z,y,A[t+6],15,-1560198380);y=m(y,w,v,z,A[t+13],21,1309151649);z=m(z,y,w,v,A[t+4],6,-145523070);v=m(v,z,y,w,A[t+11],10,-1120210379);w=m(w,v,z,y,A[t+2],15,718787259);y=m(y,w,v,z,A[t+9],21,-343485551);z=j(z,r);y=j(y,q);w=j(w,p);v=j(v,o)}return[z,y,w,v]},f=function(r){var q="",s=-1,p=r.length,o,t;while(++s<p){o=r.charCodeAt(s);t=s+1<p?r.charCodeAt(s+1):0;if(55296<=o&&o<=56319&&56320<=t&&t<=57343){o=65536+((o&1023)<<10)+(t&1023);s++}if(o<=127){q+=String.fromCharCode(o)}else{if(o<=2047){q+=String.fromCharCode(192|((o>>>6)&31),128|(o&63))}else{if(o<=65535){q+=String.fromCharCode(224|((o>>>12)&15),128|((o>>>6)&63),128|(o&63))}else{if(o<=2097151){q+=String.fromCharCode(240|((o>>>18)&7),128|((o>>>12)&63),128|((o>>>6)&63),128|(o&63))}}}}}return q},e=function(p){var o=Array(p.length>>2),r,q;for(r=0,q=o.length;r<q;r++){o[r]=0}for(r=0,q=p.length*8;r<q;r+=8){o[r>>5]|=(p.charCodeAt(r/8)&255)<<(r%32)}return o},l=function(p){var o="";for(var r=0,q=p.length*32;r<q;r+=8){o+=String.fromCharCode((p[r>>5]>>>(r%32))&255)}return o},d=function(o){return l(b(e(o),o.length*8))},i=function(q){var t="0123456789abcdef",p="",o;for(var s=0,r=q.length;s<r;s++){o=q.charCodeAt(s);p+=t.charAt((o>>>4)&15)+t.charAt(o&15)}return p};return i(d(f(n)))}}

/*
 * VKontakte Open API JavaScript library
 * http://vk.com/
 */

VK.extend = function(target, source, overwrite) {
  for (var key in source) {
    if (overwrite || typeof target[key] === 'undefined') {
      target[key] = source[key];
    }
  }
  return target;
};

VK._protocol = 'https:';
VK._base_domain = '';

if (!VK.xdConnectionCallbacks) {

  VK.extend(VK, {
    version: 1,
    _apiId: null,
    _session: null,
    _userStatus: 'unknown',
    _domain: {
      main: 'https://oauth.vk.com/',
      api: 'https://api.vk.com/'
    },
    _path: {
      login: 'authorize',
      proxy: 'fxdm_oauth_proxy.html'
    },
    _rootId: 'vk_api_transport',
    _nameTransportPath: '',
    xdReady: false,
    access: {
      FRIENDS:   0x2,
      PHOTOS:    0x4,
      AUDIO:     0x8,
      VIDEO:     0x10,
      MATCHES:   0x20,
      QUESTIONS: 0x40,
      WIKI:      0x80
    }
  });

  VK.init = function(options) {
    var body, root;

    VK._apiId = null;
    if (!options.apiId) {
      throw Error('VK.init() called without an apiId');
    }
    VK._apiId = options.apiId;

    if (options.onlyWidgets) return true;

    if (options.nameTransportPath && options.nameTransportPath !== '') {
      VK._nameTransportPath = options.nameTransportPath;
    }

    root = document.getElementById(VK._rootId);
    if (!root) {
      root = document.createElement('div');
      root.id = VK._rootId;
      body = document.getElementsByTagName('body')[0];
      body.insertBefore(root, body.childNodes[0]);
    }
    root.style.position = 'absolute';
    root.style.top = '-10000px';

    var session = VK.Cookie.load();
    if (session) {
      VK.Auth._loadState = 'loaded';
      VK.Auth.setSession(session, session ? 'connected' : 'unknown');
    }
  };

  if (!VK.Cookie) {
    VK.Cookie = {
      _domain: null,
      load: function() {
        var cookie = document.cookie.match('\\bvk_app_' + VK._apiId + '=([^;]*)\\b')
        var session;

        if (cookie) {
          session = this.decode(cookie[1]);
          if (session.secret != 'oauth') {
            return false;
          }
          session.expire = parseInt(session.expire, 10);
          VK.Cookie._domain = '.' + window.location.hostname;//session.base_domain;
        }

        return session;
      },
      setRaw: function(val, ts, domain, time) {
        var rawCookie;
        rawCookie = 'vk_app_' + VK._apiId + '=' + val + '';
        var exp = time ? (new Date().getTime() + time * 1000) : ts * 1000;
        rawCookie += (val && ts === 0 ? '' : '; expires=' + new Date(exp).toGMTString());
        rawCookie += '; path=/';
        rawCookie += (domain ? '; domain=.' + domain : '');
        document.cookie = rawCookie;

        this._domain = domain;
      },
      set: function(session, resp) {
        if (session) {
          this.setRaw(this.encode(session), session.expire, window.location.hostname, (resp || {}).time);
        } else {
          this.clear();
        }
      },
      clear: function() {
        this.setRaw('', 0, this._domain, 0);
      },
      encode: function(params) {
        var
            pairs = [],
            key;

        for (key in params) {
          if (key != 'user') pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
        }
        pairs.sort();

        return pairs.join('&');
      },
      decode: function(str) {
        var
            params = {},
            parts = str.split('&'),
            i,
            pair;

        for (i=0; i < parts.length; i++) {
          pair = parts[i].split('=', 2);
          if (pair && pair[0]) {
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
          }
        }

        return params;
      }
    };
  }

  function obj2qs(obj) {
    if (!obj) return '';
    var qs = [];
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        qs.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj[k].toString() || ''));
      }
    }
    return qs.length ? '?' + qs.join('&') : '';
  }

  if (!VK.Api) {
    VK.Api = {
      _headId: null,
      _callbacks: {},

      ie6_7: function() {
        if (!VK.Api.ieTested) {
          VK.Api.isIE6_7 = navigator.userAgent.match(/MSIE [6|7]/i);
          VK.Api.ieTested = true;
        }
        return VK.Api.isIE6_7;
      },

      supportCORS: function() {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
          return true;
        }

        if (typeof XDomainRequest != "undefined") {
          return true;
        }

        return false;
      },

      makeRequest: function(url, cb) {
        var xhr = VK.Api.createRequest('GET', url);
        if (!xhr) {
          return false;
        }

        xhr.onload = function() {
          var text = xhr.responseText;
          if (xhr.status === 200) {
            cb(text);
          } else {
            try {
              console.error('Open api access error', xhr.response);
            } catch(e) {
              //nop
            }
          }
        };

        xhr.onerror = function() {
          try {
            console.error('Open api access error');
          } catch(e) {
            //nop
          }
        };

        xhr.send();
        return true;
      },

      createRequest: function(method, url) {
        var xhr = new XMLHttpRequest();

        if ("withCredentials" in xhr) {
          // XHR for Chrome/Firefox/Opera/Safari.
          xhr.open(method, url, true);
          xhr.withCredentials = true;
        } else if (typeof XDomainRequest != "undefined") {
          // XDomainRequest for IE.
          xhr = new XDomainRequest();
          xhr.open(method, url);
          xhr.withCredentials = true;
        } else {
          // CORS not supported.
          xhr = null;
        }

        return xhr;
      },

      attachScript: function(url) {
        if (!VK.Api._headId) VK.Api._headId = document.getElementsByTagName("head")[0];
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.setAttribute('encoding', 'UTF-8');
        newScript.src = url;
        VK.Api._headId.appendChild(newScript);
      },

      checkMethod: function(method, params, cb, queryTry) {
        var m = method.toLowerCase();

        if (m === 'wall.post') {
          var validAttacheRegexp = /(^https?:\/\/)|(^(poll|album|photo|video|doc|audio|page|note)-?\d+_-?\d+)$/,
              validAttachments = [],
              methodAccess,
              queryParams,
              query,
              timer;

          if (!params.v) {
            params.v = '3.0';
          }

          params.attachments = params.attachments || params.attachment || [];
          if (typeof params.attachments === 'string') {
            params.attachments = params.attachments.split(',')
          }

          for (var i = 0; i < params.attachments.length; i++) {
            var attach = params.attachments[i].trim();
            if (validAttacheRegexp.test(attach)) {
              validAttachments.push(attach);
            }
          }

          params.attachments = validAttachments.length ? validAttachments : '';
          methodAccess = '_' + (Math.random()).toString(16).substr(2);
          queryParams = {
            act: 'wall_post_box',
            method: m,
            widget: 4,
            aid: parseInt(VK._apiId, 10),
            text: params.message || '',
            method_access: methodAccess
          };

          queryParams = VK.extend(queryParams, params);
          queryParams.owner_id = parseInt(params.owner_id || 0, 10);
          queryParams.publish_date = params.publish_date || '';
          query = VK._protocol + '//vk.com/al_apps.php';
          query += obj2qs(queryParams);

          VK.UI.popup({
            url: query,
            width: 560,
            height: 304
          });

          timer = setInterval(function() {
            if (VK.UI.active.closed) {
              clearInterval(timer);
              params.method_access = methodAccess;
              VK.Api.call(method, params, cb, queryTry);
            }
          }, 500);
          return false;
        }

        if (m == 'messages.allowmessagesfromgroup') {
          methodAccess = '_' + (Math.random()).toString(16).substr(2);
          query = VK._protocol + '//vk.com/widget_allow_messages_from_community.php?act=allow_box&group_id=' + parseInt(params.group_id, 10) + '&app_id=' + parseInt(VK._apiId, 10) + '&method_access=' + methodAccess;

          VK.UI.popup({
            url: query,
            width: 560,
            height: 304
          });

          timer = setInterval(function () {
            if (VK.UI.active.closed) {
              clearInterval(timer);
              params.method_access = methodAccess;
              VK.Api.call(method, params, cb, queryTry);
            }
          }, 500);

          return false;
        }

        return true;
      },

      call: function(method, params, cb, queryTry) {
        var
            query = params || {},
            qs,
            responseCb;

        if (typeof query != 'object' || typeof cb != 'function') {
          return false;
        }
        if (!params.method_access && !params.method_force && !VK.Api.checkMethod(method, params, cb, queryTry)) {
          return;
        }

        if (!queryTry) queryTry = 0;

        if (VK.Auth._loadState != 'loaded') {
          var authFunc = function(result) {
            if (result && result.session) {
              VK.Observer.unsubscribe('auth.loginStatus', authFunc);
              VK.Api.call(method, params, cb);
            }
          };
          VK.Observer.subscribe('auth.loginStatus', authFunc);
          VK.Auth.getLoginStatus();
          return;
        }

        if (VK.Api.queryLength(query) < 1500 && !VK.Api.ie6_7()) {
          var useXDM = false;
          var rnd = parseInt(Math.random() * 10000000, 10);
          while (VK.Api._callbacks[rnd]) {
            rnd = parseInt(Math.random() * 10000000, 10)
          }
          query.callback = 'VK.Api._callbacks['+rnd+']';
        } else {
          var useXDM = true;
        }

        if (VK._session && VK._session.sid) {
          query.access_token = VK._session.sid;
        }

        qs = VK.Cookie.encode(query);

        responseCb = function(response) {
          if (response.error && (response.error.error_code == 3 || response.error.error_code == 4 || response.error.error_code == 5)) {
            if (queryTry > 3) return false;
            var repeatCall = function(resp) {
              VK.Observer.unsubscribe('auth.sessionChange', repeatCall);
              delete params.access_token;
              if (resp.session) VK.Api.call(method, params, cb, queryTry + 1);
            }
            VK.Observer.subscribe('auth.sessionChange', repeatCall);
            VK.Auth.getLoginStatus();
          } else {
            cb(response);
          }
          if (!useXDM) delete VK.Api._callbacks[rnd];
        };

        if (useXDM) {
          if (VK.xdReady) {
            VK.XDM.remote.callMethod('apiCall', method, qs, responseCb);
          } else {
            VK.Observer.subscribe('xdm.init', function() {
              VK.XDM.remote.callMethod('apiCall', method, qs, responseCb);
            });
            VK.XDM.init();
          }
        } else {
          VK.Api._callbacks[rnd] = responseCb;
          VK.Api.attachScript(VK._domain.api + 'method/' + method +'?' + qs);
        }
      },

      queryLength: function(query) {
        var len = 100, i; // sid + sig
        for (i in query) {
          len += i.length + encodeURIComponent(query[i]).length + 1;
        }
        return len;
      }
    };

// Alias
    VK.api = function(method, params, cb) {VK.Api.call(method, params, cb);}
  };

  if (!VK.Auth) {
    VK.Auth = {
      popup: null,
      lsCb: {},

      setSession: function(session, status, settings, resp) {
        var
            login = !VK._session && session,
            logout = VK._session && !session,
            both = VK._session && session && VK._session.mid != session.mid,
            sessionChange = login || logout || (VK._session && session && VK._session.sid != session.sid),
            statusChange = status != VK._userStatus,
            response = {
              'session': session,
              'status': status,
              'settings': settings
            };

        VK._session = session;

        VK._userStatus = status;

        VK.Cookie.set(session, resp);

        if (sessionChange || statusChange || both) {
          setTimeout(function() {
            if (statusChange) {
              VK.Observer.publish('auth.statusChange', response);
            }

            if (logout || both) {
              VK.Observer.publish('auth.logout', response);
            }

            if (login || both) {
              VK.Observer.publish('auth.login', response);
            }

            if (sessionChange) {
              VK.Observer.publish('auth.sessionChange', response);
            }
          }, 0);
        }

        return response;
      },

      // Public VK.Auth methods
      login: function(cb, settings) {
        if (!VK._apiId) {
          return false;
        }

        var url = VK._domain.main + VK._path.login + '?client_id='+VK._apiId+'&display=popup&redirect_uri=close.html&response_type=token';
        if (settings && parseInt(settings, 10) > 0) {
          url += '&scope=' + settings;
        }

        VK.Observer.unsubscribe('auth.onLogin');
        VK.Observer.subscribe('auth.onLogin', cb);

        VK.UI.popup({
          width: 665,
          height: 370,
          url: url
        });

        var authCallback = function() {
          VK.Auth.getLoginStatus(function(resp) {
            VK.Observer.publish('auth.onLogin', resp);
            VK.Observer.unsubscribe('auth.onLogin');
          }, true);
        }

        VK.UI.popupOpened = true;
        var popupCheck = function() {
          if (!VK.UI.popupOpened) {
            return false;
          }

          try {
            if (!VK.UI.active.top || VK.UI.active.closed) {
              VK.UI.popupOpened = false;
              authCallback();
              return true;
            }
          } catch(e) {
            VK.UI.popupOpened = false;
            authCallback();
            return true;
          }
          setTimeout(popupCheck, 100);
        };

        setTimeout(popupCheck, 100);
      },

      // Logout user from app, vk.com & login.vk.com
      logout: function(cb) {
        VK.Auth.revokeGrants(cb);
      },

      revokeGrants: function(cb) {
        var onLogout = function(resp) {
          VK.Observer.unsubscribe('auth.statusChange', onLogout);
          if (cb) {
            cb(resp);
          }
        }

        VK.Observer.subscribe('auth.statusChange', onLogout);
        if (VK._session && VK._session.sid) {
          var url = 'https://login.vk.com/?act=openapi&oauth=1&aid=' + parseInt(VK._apiId, 10) + '&location=' + encodeURIComponent(window.location.hostname) + '&do_logout=1&token=' + VK._session.sid;
          if (VK.Api.supportCORS()) {
            var logoutCallback = function() {
              VK.Auth.setSession(null, 'unknown');
            };

            VK.Api.makeRequest(url + '&new=1', logoutCallback);
          } else {
            VK.Api.attachScript(url);
          }
        }

        VK.Cookie.clear();
      },

      // Get current login status from session (sync) (not use on load time)
      getSession: function() {
        return VK._session;
      },

      // Get current login status from vk.com (async)
      getLoginStatus: function(cb, force) {
        if (!VK._apiId) {
          return;
        }

        if (cb) {
          if (!force && VK.Auth._loadState == 'loaded') {
            cb({status: VK._userStatus, session: VK._session});
            return;
          } else {
            VK.Observer.subscribe('auth.loginStatus', cb);
          }
        }

        if (!force && VK.Auth._loadState == 'loading') {
          return;
        }

        VK.Auth._loadState = 'loading';

        var url = 'https://login.vk.com/?act=openapi&oauth=1&aid=' + parseInt(VK._apiId, 10) + '&location=' + encodeURIComponent(window.location.hostname);
        if (VK.Api.supportCORS()) {
          var loginCallback = function(response) {
            if (!this.JSON) {
              this.JSON = {};
            }

            if (typeof JSON.parse !== 'function') {
              //IE6 and IE7
              response = eval(response);
            } else {
              response = JSON.parse(response);
            }

            VK.Auth._loadState = 'loaded';
            if (response && response.auth) {
              var session = {
                mid: response.user.id,
                sid: response.access_token,
                sig: response.sig,
                secret: response.secret,
                expire: response.expire
              };

              if (force) {
                session.user = response.user;
              }

              var status = 'connected';
            } else {
              var session = null;
              var status = response.user ? 'not_authorized' : 'unknown';
              VK.Cookie.clear();
            }

            VK.Auth.setSession(session, status, false, response);
            VK.Observer.publish('auth.loginStatus', {session: session, status: status});
            VK.Observer.unsubscribe('auth.loginStatus');
          };

          VK.Api.makeRequest(url + '&new=1', loginCallback);
        } else {
          var rnd = parseInt(Math.random() * 10000000, 10);
          while (VK.Auth.lsCb[rnd]) {
            rnd = parseInt(Math.random() * 10000000, 10);
          }

          VK.Auth.lsCb[rnd] = function(response) {
            delete VK.Auth.lsCb[rnd];
            VK.Auth._loadState = 'loaded';
            if (response && response.auth) {
              var session = {
                mid: response.user.id,
                sid: response.access_token,
                sig: response.sig,
                secret: response.secret,
                expire: response.expire
              };
              if (force) session.user = response.user;
              var status = 'connected';
            } else {
              var session = null;
              var status = response.user ? 'not_authorized' : 'unknown';
              VK.Cookie.clear();
            }
            VK.Auth.setSession(session, status, false, response);
            VK.Observer.publish('auth.loginStatus', {session: session, status: status});
            VK.Observer.unsubscribe('auth.loginStatus');
          };

            // AttachScript here
          VK.Api.attachScript(url+'&rnd='+rnd);
        }
      }
    };
  }

  if (!VK.App) {
    VK.App = {
      _appOpened: false,
      _addToGroupPopup: null,

      open: function (url, params) {
        if (VK.App._appOpened || !VK._apiId) {
          return;
        }

        if (!VK._session) {
          VK.Auth.login(function(resp) {
            if (resp && resp.session) {
              VK.App._openApp(url, params);
            }
          });
        } else {
          VK.App._openApp(url, params);
        }
      },

      _openApp: function (url, params) {
        var src, box, domain, request = [];
        params = params || {};

        if (!url || !VK._apiId || VK.App._appOpened) {
          return;

        }
        domain = VK._base_domain || 'vk.com';
        src = VK._protocol + '//' + domain + '/apps?act=open_external_app_openapi&aid=' + VK._apiId;
        params['aid'] = VK._apiId;

        for (var arg in params) {
          var val = '';
          if (!params.hasOwnProperty(arg)) {
            continue;
          }
          if (params[arg] !== undefined) {
            val = encodeURIComponent(params[arg]);
          }
          request.push(encodeURIComponent(arg) + '=' + val);
        }

        src += '&url=' + url;
        src += '&q=' + encodeURIComponent(request.join('&'));

        box = VK.Util.Box(src, {}, {
          closeExternalApp: function() {
            if (VK.App._result) {
              VK.Observer.publish('app.done', VK.App._result);
              VK.App._result = null;
            } else {
              VK.Observer.publish('app.closed');
            }
            box.hide();
            VK.App._appOpened = false;
          },
          externalAppDone: function (params, noCloseLayer) {
            if (noCloseLayer) {
              VK.App._result = params;
            } else {
              VK.Observer.publish('app.done', params);
              box.hide();
              VK.App._appOpened = false;
              VK.App._result = null;
            }
          }
        });
        box.show();
        VK.App._appOpened = true;
        VK.App._result = null;
      },

      addToGroup: function(appId) {
        if (this._addToGroupPopup && !this._addToGroupPopup.closed) {
          return;
        }
        var baseUrl = VK._protocol + '//vk.com';

        if (this._onAddToGroupDone) {
          VK.Util.removeEvent('message', this._onAddToGroupDone, window);
        }

        this._onAddToGroupDone = function(event) {
          if (event.origin === baseUrl && event.data.method === 'app.addToGroup') {
            VK.Observer.publish('app.addToGroupDone', {
              app_id: event.data.app_id,
              group_ids: event.data.group_ids
            });
            VK.Util.removeEvent('message', this._onAddToGroupDone, window);
            this._onAddToGroupDone = null;
          }
        }.bind(this);

        if (window.postMessage) {
          VK.Util.addEvent('message', this._onAddToGroupDone, window);
        }

        this._addToGroupPopup = VK.UI.popup({
          url: baseUrl + '/add_community_app.php?aid=' + appId,
          width: 560,
          height: 650
        });
      }
    }
  }

} else { // if VK.xdConnectionCallbacks
  setTimeout(function() {
    var callback;
    while (callback = VK.xdConnectionCallbacks.pop()) {
      callback();
    }
  }, 0);
  if (VK.Widgets && !VK.Widgets._constructor) {
    VK.Widgets = false;
  }
}

if (!VK.UI) {
  VK.UI = {
    active: null,
    _buttons: [],
    popup: function(options) {
      var
          screenX = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
          screenY = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
          outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
          outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
          width = options.width,
          height = options.height,
          left = parseInt(screenX + ((outerWidth - width) / 2), 10),
          top = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
          features;
      left = window.screen && window.screenX && screen.left && screen.left > 1000 ? 0 : left; // FF with 2 monitors fix
      features = (
          'width=' + width +
          ',height=' + height +
          ',left=' + left +
          ',top=' + top
      );
      this.active = window.open(options.url, 'vk_openapi', features);
      return this.active;
    },
    button: function(el, handler) {
      var html = '';

      if (typeof el == 'string') {
        el = document.getElementById(el);
      }


      this._buttons.push(el);
      index = this._buttons.length - 1;

      html = (
          '<table cellspacing="0" cellpadding="0" id="openapi_UI_' + index + '" onmouseover="VK.UI._change(1, ' + index + ');" onmouseout="VK.UI._change(0, ' + index + ');" onmousedown="VK.UI._change(2, ' + index + ');" onmouseup="VK.UI._change(1, ' + index + ');" style="cursor: pointer; border: 0px; font-family: tahoma, arial, verdana, sans-serif, Lucida Sans; font-size: 10px;"><tr style="vertical-align: middle">' +
          '<td><div style="border: 1px solid #3b6798;border-radius: 2px 0px 0px 2px;-moz-border-radius: 2px 0px 0px 2px;-webkit-border-radius: 2px 0px 0px 2px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 4px 0px 6px;line-height: 13px;">&#1042;&#1086;&#1081;&#1090;&#1080;</div></div></td>' +
          '<td><div style="background: url(' + VK._protocol + '//vk.com/images/btns.png) 0px -42px no-repeat; width: 21px; height: 21px"></div></td>' +
          '<td><div style="border: 1px solid #3b6798;border-radius: 0px 2px 2px 0px;-moz-border-radius: 0px 2px 2px 0px;-webkit-border-radius: 0px 2px 2px 0px;"><div style="border: 1px solid #5c82ab; border-top-color: #7e9cbc; background-color: #6D8DB1; color: #fff; text-shadow: 0px 1px #45688E; height: 15px; padding: 2px 6px 0px 4px;line-height: 13px;">&#1050;&#1086;&#1085;&#1090;&#1072;&#1082;&#1090;&#1077;</div></div></td>' +
          '</tr></table>'
      );
      el.innerHTML = html;
      el.style.width = el.childNodes[0].offsetWidth + 'px';
    },
    _change: function(state, index) {
      var row = document.getElementById('openapi_UI_' + index).rows[0];
      var elems = [row.cells[0].firstChild.firstChild, row.cells[2].firstChild.firstChild];
      for (var i = 0; i < 2; ++i) {
        var elem = elems[i];
        if (state === 0) {
          elem.style.backgroundColor = '#6D8DB1';
          elem.style.borderTopColor = '#7E9CBC';
          elem.style.borderLeftColor = elem.style.borderRightColor = elem.style.borderBottomColor = '#5C82AB';
        } else if (state == 1) {
          elem.style.backgroundColor = '#7693B6';
          elem.style.borderTopColor = '#88A4C4';
          elem.style.borderLeftColor = elem.style.borderRightColor = elem.style.borderBottomColor = '#6088B4';
        } else if (state == 2) {
          elem.style.backgroundColor = '#6688AD';
          elem.style.borderBottomColor = '#7495B8';
          elem.style.borderLeftColor = elem.style.borderRightColor = elem.style.borderTopColor = '#51779F';
        }
      }
      if (state === 0 || state == 2) {
        row.cells[2].firstChild.style.backgroundPosition = '0px -42px';
      } else if (state == 1) {
        row.cells[2].firstChild.style.backgroundPosition = '0px -63px';
      }
    }
  };
}

if (!VK.XDM) {
  VK.XDM = {
    remote: null,
    init: function() {
      if (this.remote) return false;
      var url = VK._domain.api + VK._path.proxy;
      this.remote = new fastXDM.Server({
        onInit: function() {
          VK.xdReady = true;
          VK.Observer.publish('xdm.init');
        }
      });

      this.remote.append(document.getElementById(VK._rootId), {
        src: url
      });
    },
    xdHandler: function(code) {
      try {
        eval('VK.' + code);
      } catch(e) {}
    }
  };
}

if (!VK.Observer) {
  VK.Observer = {
    _subscribers: function() {
      if (!this._subscribersMap) {
        this._subscribersMap = {};
      }
      return this._subscribersMap;
    },
    publish: function(eventName) {
      var
          args = Array.prototype.slice.call(arguments),
          eventName = args.shift(),
          subscribers = this._subscribers()[eventName],
          i, j;

      if (!subscribers) return;

      for (i = 0, j = subscribers.length; i < j; i++) {
        if (subscribers[i] != null) {
          subscribers[i].apply(this, args);
        }
      }
    },
    subscribe: function(eventName, handler) {
      var
          subscribers = this._subscribers();

      if (typeof handler != 'function') return false;

      if (!subscribers[eventName]) {
        subscribers[eventName] = [handler];
      } else {
        subscribers[eventName].push(handler);
      }
    },
    unsubscribe: function(eventName, handler) {
      var
          subscribers = this._subscribers()[eventName],
          i, j;

      if (!subscribers) return false;
      if (typeof handler == 'function') {
        for (i = 0, j = subscribers.length; i < j; i++) {
          if (subscribers[i] == handler) {
            subscribers[i] = null;
          }
        }
      } else {
        delete this._subscribers()[eventName];
      }
    }
  };
}

if (!VK.Widgets) {
  VK.Widgets = {};

  VK.Widgets.count = 0;
  VK.Widgets.RPC = {};

  VK.Widgets.showBoxUrl = function(domain, url) {
    domain = (domain || VK._protocol + '//vk.com').replace(/\/?\s*$/, '');
    url = url.replace(/^\s*\/?/, '');
    return domain + '/' + url;
  };

  VK.Widgets.loading = function(obj, enabled) {
    obj.style.background = enabled ? 'url("' + VK._protocol + '//vk.com/images/upload.gif") center center no-repeat transparent' : 'none';
  };

  VK.Widgets.Comments = function(objId, options, page) {
    var pData = VK.Util.getPageData();
    if (!VK._apiId) throw Error('VK not initialized. Please use VK.init');
    options = options || {};

    var obj = document.getElementById(objId),
      params = {
        limit: options.limit || 10,
        height: options.height || 0,
        mini: options.mini === undefined ? 'auto' : options.mini,
        norealtime: options.norealtime ? 1 : 0
      }, mouseup = function() {
        rpc.callMethod('mouseUp');
        return false;
      }, move = function(event) {
        rpc.callMethod('mouseMove', {screenY: event.screenY});
      }, iframe, rpc;

    if (options.browse) { // browse all comments
      params.browse = 1;
      params.replies = options.replies || 0;
    } else { // page
      var url = options.pageUrl || pData.url;
      if (url.substr(0, 1) == '/') {
        url = (location.protocol + '//' + location.host) + url;
      }
      VK.extend(params, {
        page: page || 0,
        status_publish: options.autoPublish === undefined ? 0 : options.autoPublish,
        attach: options.attach === undefined ? '*' : (options.attach ? options.attach : ''),
        url: url,
        title: options.pageTitle || pData.title,
        description: options.pageDescription || pData.description,
        image: options.pageImage || pData.image
      });
    }
    if (options.onChange) { // DEPRECATED
      VK.Observer.subscribe('widgets.comments.new_comment', options.onChange);
      VK.Observer.subscribe('widgets.comments.delete_comment', options.onChange);
    }

    return VK.Widgets._constructor('widget_comments.php', objId, options, params, {
      showBox: function(url, props) {
        var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
          proxy: function() {
            rpc.callMethod.apply(rpc, arguments);
          }
        });
        box.show();
      },
      startDrag: function() {
        cursorBack = window.document.body.style.cursor;
        window.document.body.style.cursor = 'pointer';
        VK.Util.addEvent('mousemove', move);
        VK.Util.addEvent('mouseup', mouseup);
      },
      stopDrag: function() {
        window.document.body.style.cursor = cursorBack;
        VK.Util.removeEvent('mousemove', move);
        VK.Util.removeEvent('mouseup', mouseup);
      }
    }, {
      startHeight: 133,
      minWidth: 300
    }, function(o, i, r) {iframe = i; rpc = r;});
  };

  VK.Widgets.CommentsBrowse = function(objId, options) {
    options = options || {};
    options.browse = 1;
    return VK.Widgets.Comments(objId, options);
  };

  VK.Widgets.Recommended = function(objId, options) {
    var pData = VK.Util.getPageData();
    if (!VK._apiId) throw Error('VK not initialized. Please use VK.init');
    options = options || {};
    var params = {
      limit: options.limit || 5,
      max: options.max || 0,
      sort: options.sort || 'friend_likes',
      verb: options.verb || 0,
      period: options.period || 'week',
      target: options.target || 'parent'
    };
    return VK.Widgets._constructor('widget_recommended.php', objId, options, params, {}, {
      startHeight: (116 + params.limit * 47 - 15),
      minWidth: 150
    });
  };

  VK.Widgets.Post = function(objId, ownerId, postId, hash, options) {
    options = options || {};
    var obj = document.getElementById(objId),
      params = {
        owner_id: ownerId,
        post_id: postId,
        hash: hash || ''
      }, iframe, rpc, cursorBack;
    return VK.Widgets._constructor('widget_post.php', objId, options, params, {
      showBox: function(url, props) {
        var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
          proxy: function() {
            rpc.callMethod.apply(rpc, arguments);
          }
        });
        box.show();
      },
      startDrag: function() {
        cursorBack = window.document.body.style.cursor;
        window.document.body.style.cursor = 'pointer';
      },
      stopDrag: function() {
        window.document.body.style.cursor = cursorBack;
      }
    }, {
      startHeight: 90,
      minWidth: 250
    }, function(o, i, r) {iframe = i; rpc = r;});
  };

  VK.Widgets.Like = (function(Like) {
    if (Like) return Like;

    var instances = [];

    Like = function(objId, options, page) {
      var pData = VK.Util.getPageData();
      if (!VK._apiId) throw Error('VK not initialized. Please use VK.init');
      options = VK.extend(options || {}, {allowTransparency: true});
      var verticalBtnHeightWidth = {
            18: 43,
            20: 47,
            22: 51,
            24: 55,
            30: 67,
          },
          type = (options.type == 'full' || options.type == 'button' || options.type == 'vertical' || options.type == 'mini') ? options.type : 'full',
          autoWidth = options.width === 'auto' && (type == 'button' || type == 'mini'),
          btnHeight = parseInt(options.height, 10) || 22,
          size = btnHeight && verticalBtnHeightWidth[btnHeight] ? btnHeight : 22,
          width = autoWidth ? 153 : (type == 'full' ? Math.max(200, options.width || 350) : (type == 'button' ? 180 : (type == 'mini' ? 115 : verticalBtnHeightWidth[size]))),
          height = type == 'vertical' ? (2 * btnHeight + 7) : btnHeight,
          params = {
            page: page || 0,
            url: options.pageUrl || pData.url,
            type: type,
            verb: options.verb == 1 ? 1 : 0,
            color: options.color || '',
            title: options.pageTitle || pData.title,
            description: options.pageDescription || pData.description,
            image: options.pageImage || pData.image,
            text: (options.text || '').substr(0, 140),
            h: btnHeight
          },
          ttHere = options.ttHere || false,
          isOver = false,
          hideTimeout = null,
          obj, buttonIfr, buttonRpc, tooltipIfr, tooltipRpc, checkTO;
      if (type == 'vertical' || type == 'button' || type == 'mini') delete options.width;
      if (autoWidth) params.auto_width = 1;
      function showTooltip(force) {
        if ((!isOver && !force) || !tooltipRpc) return;
        if (!tooltipIfr || !tooltipRpc || tooltipIfr.style.display != 'none' && tooltipIfr.getAttribute('vkhidden') != 'yes') return;
        hideTimeout && clearTimeout(hideTimeout);
        checkTO && clearTimeout(checkTO);
        var scrollTop = options.getScrollTop ? options.getScrollTop() : (document.body.scrollTop || document.documentElement.scrollTop || 0);
        var objPos = VK.Util.getXY(obj, options.fixed);
        var startY = ttHere ? 0 : objPos[1];
        if (scrollTop > objPos[1] - 120 && options.tooltipPos != 'top' || type == 'vertical' || options.tooltipPos == 'bottom') {
          tooltipIfr.style.top = (startY + height + 2) + 'px';
          tooltipRpc.callMethod('show', false, type+'_'+size);
        } else {
          tooltipIfr.style.top = (startY - 128) + 'px';
          tooltipRpc.callMethod('show', true, type+'_'+size);
        }
        VK.Util.ss(tooltipIfr, {left: (ttHere ? 0 : objPos[0]) - (type == 'full' || type == 'button' ? 32 : 2) + 'px', display: 'block', opacity: 1, filter: 'none'});
        tooltipIfr.setAttribute('vkhidden', 'no');
        isOver = true;
      }

      function hideTooltip(force) {
        if ((isOver && !force) || !tooltipRpc) return;
        tooltipRpc.callMethod('hide');
        buttonRpc.callMethod('hide');
        hideTimeout = setTimeout(function() {
          tooltipIfr.style.display = 'none'
        }, 400);
      }

      var widgetId = VK.Widgets._constructor('widget_like.php', objId, options, params, {
        initTooltip: function(counter) {
          tooltipRpc = new fastXDM.Server({
            onInit: counter ? function() {
                showTooltip();
              } : function() {},
            proxy: function() {
              buttonRpc.callMethod.apply(buttonRpc, arguments);
            },
            showBox: function(url, props) {
              var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [props.width, props.height], {
                proxy: function() {
                  tooltipRpc.callMethod.apply(tooltipRpc, arguments);
                }
              });
              box.show();
            },
          }, false, {safe: true});
          tooltipIfr = tooltipRpc.append(ttHere ? obj : document.body, {
            src: buttonIfr.src + '&act=a_like_tooltip',
            scrolling: 'no',
            allowTransparency: true,
            id: buttonIfr.id + '_tt',
            style: {position: 'absolute', padding: 0, display: 'none', opacity: 0.01, filter: 'alpha(opacity=1)', border: '0', width: '274px', height: '130px', zIndex: 5000, overflow: 'hidden'}
          });
          tooltipIfr.setAttribute('vkhidden', 'yes');

          tooltipIfr.onmouseover = function() {
            clearTimeout(checkTO);
            isOver = true;
          };
          tooltipIfr.onmouseout = function() {
            clearTimeout(checkTO);
            isOver = false;
            checkTO = setTimeout(function() {hideTooltip(); }, 200);
          };
        },
        showTooltip: showTooltip,
        hideTooltip: hideTooltip,
        destroy: function() {
          buttonRpc.destroy();
          try {buttonIfr.src = 'about: blank;';} catch (e) {}
          buttonIfr.parentNode.removeChild(buttonIfr);
          if (tooltipIfr) {
            try {tooltipIfr.src = 'about: blank;';} catch (e) {}
            tooltipIfr.parentNode.removeChild(tooltipIfr);
          }
          tooltipRpc && tooltipRpc.destroy();
        },
        showBox: function(url, props) {
          var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
            proxy: function() {
              buttonRpc.callMethod.apply(buttonRpc, arguments);
            }
          });
          box.show();
        },
        proxy: function() {if (tooltipRpc) tooltipRpc.callMethod.apply(tooltipRpc, arguments);}
      }, {
        startHeight: height,
        minWidth: width
      }, function(o, i, r) {
        buttonRpc = r;
        VK.Util.ss(obj = o, {height: height + 'px', width: width + 'px', position: 'relative', clear: 'both'});
        VK.Util.ss(buttonIfr = i, {height: height + 'px', width: width + 'px', overflow: 'hidden', zIndex: 150});
        obj.onmouseover = function() {
          clearTimeout(checkTO);
          isOver = true;
        };
        obj.onmouseout = function() {
          clearTimeout(checkTO);
          isOver = false;
          checkTO = setTimeout(function() {hideTooltip(); }, 200);
        };
      });

      instances.push(widgetId);
      return widgetId;
    };

    Like.destroyAll = function() {
      var xdm = null;
      while (instances[0]) {
        xdm = VK.Widgets.RPC[instances.pop()];
        xdm && xdm.methods.destroy();
      }
    }

    return Like;
  })(VK.Widgets.Like);

  VK.Widgets.Poll = function(objId, options, pollId) {
    var pData = VK.Util.getPageData();
    if (!pollId) throw Error('No poll id passed');
    options = options || {};
    var params = {
      poll_id: pollId,
      url: options.pageUrl || pData.url || location.href,
      title: options.pageTitle || pData.title,
      description: options.pageDescription || pData.description
    };
    if (options.preview) {
      params.is_preview = 1;
      delete options['preview'];
    }
    if (options.share !== undefined) {
      params.share = options.share ? 1 : 0;
    }
    return VK.Widgets._constructor('al_widget_poll.php', objId, options, params, {
      showBox: function(url, props) {
        var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
          proxy: function() {
            rpc.callMethod.apply(rpc, arguments);
          }
        });
        box.show();
      }
    }, {
      startHeight: 144,
      minWidth: 300
    });
  };

  VK.Widgets.App = function(objId, app_id, options) {
    if (!app_id) throw Error('No app id passed');
    if (!options) options = {};
    var startHeight = void 0,
        height = void 0,
        minWidth = void 0,
        params = {
          aid: app_id,
          mode: parseInt(options.mode, 10) || 1,
        };
    switch (params.mode) {
      case 1:
        options.width = 144;
        startHeight = 251;
        break;
      case 2:
        options.width = options.width ? Math.max(200, Math.min(10000, parseInt(options.width, 10))) : 200;
        height = startHeight = 193;
        break;
      case 3:
        options.width = options.width ? Math.max(50, Math.min(10000, parseInt(options.width, 10))) : void 0;
        height = startHeight = options.height = ({18: 18, 20: 20, 22: 22, 24: 24, 30: 30})[parseInt(options.height, 10) || 30];
        break;
    }
    minWidth = options.width;
    return VK.Widgets._constructor('widget_app.php', objId, options, params, {}, {
      startHeight: startHeight,
      height: height,
      minWidth: minWidth
    });
  };

  VK.Widgets.Community = VK.Widgets.Group = function(objId, options, gid) {
    gid = parseInt(gid, 10);
    if (!gid) {
      throw Error('No group_id passed');
    }
    options.mode = parseInt(options.mode, 10).toString();
    var params = {
        gid: gid,
        mode: (options.mode) ? options.mode : '0'
      },
      startHeight = options.mode == 3 ? 185 : (options.mode == 1 ? 141 : options.height|0 || 290),
      rpc;
    if (options.wall) params.wall = options.wall;
    params.color1 = options.color1 || '';
    params.color2 = options.color2 || '';
    params.color3 = options.color3 || '';
    params.class_name = options.class_name || '';
    if (options.no_head) params.no_head = 1;
    if (options.no_cover) params.no_cover = 1;
    if (options.wide) {
      params.wide = 1;
      if (!options.width || options.width < 300) {
        options.width = 300;
      }
    }
    if (!options.width|0) options.width = 200;

    var cursorBack;

    function mouseup() {
      rpc.callMethod('mouseUp');
      return false;
    }

    function move(event) {
      rpc.callMethod('mouseMove', {screenY: event.screenY});
      return false;
    }

    return VK.Widgets._constructor('widget_community.php', objId, options, params, {
      showBox: function(url, props) {
        var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
          proxy: function() {
            rpc.callMethod.apply(rpc, arguments);
          }
        });
        box.show();
      },
      startDrag: function() {
        cursorBack = window.document.body.style.cursor;
        window.document.body.style.cursor = 'pointer';
        VK.Util.addEvent('mousemove', move);
        VK.Util.addEvent('mouseup', mouseup);
      },
      stopDrag: function() {
        window.document.body.style.cursor = cursorBack;
        VK.Util.removeEvent('mousemove', move);
        VK.Util.removeEvent('mouseup', mouseup);
      },
      auth: function() {
        VK.Auth.login(null, 1);
      }
    }, {
      minWidth: 120,
      startHeight: startHeight
    }, function(o, i, r) {
      rpc = r;
    });
  };

  VK.Widgets.Auth = function(objId, options) {
    var pData = VK.Util.getPageData();
    if (!VK._apiId) throw Error('VK not initialized. Please use VK.init');
    if (!options.width) {
      options.width = 200;
    }
    if (options.type) {
      type = 1;
    } else {
      type = 0;
    }
    return VK.Widgets._constructor('widget_auth.php', objId, options, {}, {makeAuth: function(data) {
      if (data.session) {
        VK.Auth._loadState = 'loaded';
        VK.Auth.setSession(data.session, 'connected');
        VK.Observer.publish('auth.loginStatus', {session: data.session, status: 'connected'});
        VK.Observer.unsubscribe('auth.loginStatus');
      }
      if (options.onAuth) {
        options.onAuth(data);
      } else {
        if (options.authUrl) {
          var href = options.authUrl;
        } else {
          var href = window.location.href;
        }
        if (href.indexOf('?') == -1) {
          href+='?';
        } else {
          href+='&';
        }
        var vars = [];

        for (var i in data) {
          if (i != 'session') vars.push(i+'='+decodeURIComponent(data[i]).replace(/&/g, '%26').replace(/\#/g, '%23').replace(/\?/, '%3F'));
        }
        window.location.href = href + vars.join('&');
      }
    }}, {
      startHeight: 134
    });
  };

  VK.Widgets.Subscribe = function(objId, options, oid) {
    oid = parseInt(oid, 10);
    if (!oid) {
      throw Error('No owner_id passed');
    }
    var params = {
      oid: oid
    }, rpc;
    if (options.mode) {
      params.mode = options.mode;
    }
    if (options.soft) {
      params.soft = options.soft;
    }

    return VK.Widgets._constructor('widget_subscribe.php', objId, options, params, {
      showBox: function(url, props) {
        var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
          proxy: function() {
            rpc.callMethod.apply(rpc, arguments);
          }
        });
        box.show();
      },
      auth: function() {
        VK.Auth.login(null, 1);
      }
    }, {
      minWidth: 220,
      startHeight: 22
    }, function(o, i, r) {
      rpc = r;
    });
  };

  VK.Widgets.ContactUs = function(objId, options, oid) {
    oid = parseInt(oid, 10);

    if (!options) options = {};
    if (!oid) throw Error('No group or user id passed');

    var params = {
      oid: oid,
      height: ({18: 18, 20: 20, 22: 22, 24: 24, 30: 30})[parseInt(options.height, 10) || 24],
      text: (options.text || '').substr(0, 140)
    }, rpc;

    return VK.Widgets._constructor('widget_contactus.php', objId, options, params, {}, {
      startHeight: params.height,
      height: params.height
    }, function(o, i, r) {
      rpc = r;
    });
  };

  VK.Widgets.Playlist = function(objId, ownerId, playlistId, hash, options) {
    var params = {
      oid: parseInt(ownerId, 10),
      pid: parseInt(playlistId, 10),
      hash: hash || ''
    }, rpc;

    if (!options) options = {};
    if (!params.oid) throw Error('No owner id passed');
    if (!params.pid) throw Error('No playlist id passed');

    return VK.Widgets._constructor('widget_playlist.php', objId, options, params, {
      showBox: function(url, props) {
        var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
          proxy: function() {
            rpc.callMethod.apply(rpc, arguments);
          }
        });
        box.show();
      }
    }, {
      minWidth: 200
    }, function(o, i, r) {
      rpc = r;
    });
  };

  VK.Widgets.Ads = function(objId, options, paramsExtra) {
    options = options || {};
    paramsExtra = paramsExtra || {};
    var params = {};
    var defaults = {};
    var funcs = {};
    var obj = document.getElementById(objId);
    var iframe;
    var rpc;

    var adsParams = {};
    var adsParamsLocal = {};
    var adsParamsDefault = {};
    for (var key in paramsExtra) {
      var keyFix = (inArray(key, ['hash']) ? key : 'ads_' + key);
      adsParams[keyFix] = paramsExtra[key];
    }

    if (obj && obj.getBoundingClientRect) {
      obj.style.width  = '100%';
      obj.style.height = '100%';
      var rect = obj.getBoundingClientRect();
      obj.style.width  = '';
      obj.style.height = '';
      adsParams.ads_ad_unit_width_auto  = Math.floor(rect.right - rect.left);
      adsParams.ads_ad_unit_height_auto = Math.floor(rect.bottom - rect.top);
    }

    adsParamsDefault.ads_ad_unit_width  = 100;
    adsParamsDefault.ads_ad_unit_height = 100;

    adsParamsLocal.ads_ad_unit_width  = (parseInt(adsParams.ads_ad_unit_width)  || adsParams.ads_ad_unit_width === 'auto'  && adsParams.ads_ad_unit_width_auto  || adsParamsDefault.ads_ad_unit_width);
    adsParamsLocal.ads_ad_unit_height = (parseInt(adsParams.ads_ad_unit_height) || adsParams.ads_ad_unit_height === 'auto' && adsParams.ads_ad_unit_height_auto || adsParamsDefault.ads_ad_unit_height);
    if (adsParams.ads_handler) {
      adsParamsLocal.ads_handler = adsParams.ads_handler;
    }
    if (adsParams.ads_handler_empty_html) {
      adsParamsLocal.ads_handler_empty_html = adsParams.ads_handler_empty_html;
    }

    delete adsParams.ads_handler;
    delete adsParams.ads_handler_empty_html;

    params.act = 'ads_web';
    params.url = location.href;
    VK.extend(params, adsParams);

    options.noDefaultParams   = true;
    options.width             = adsParamsLocal.ads_ad_unit_width;
    options.allowTransparency = true;
    defaults.startHeight = adsParamsLocal.ads_ad_unit_height;
    defaults.minWidth    = adsParamsLocal.ads_ad_unit_width;
    funcs.adsOnInitLoader = adsOnInitLoader;
    funcs.adsOnInit       = adsOnInit;

    return VK.Widgets._constructor('ads_rotate.php', objId, options, params, funcs, defaults, onDone);

    function adsOnInitLoader(adsScriptVersion) {
      VK.Widgets.loading(obj, true);
      adsAttachScript(adsScriptVersion);
    }
    function adsOnInit(errorCode, adsParamsExport) {
      VK.Widgets.loading(obj, false);
      adsProcessParams(adsParamsExport);
      if (options.onAdsReady) options.onAdsReady.apply(options.onAdsReady, Array.prototype.slice.call(arguments));
      adsProcessHandler(errorCode);
    }
    function adsAttachScript(adsScriptVersion) {
      if (!('vk__adsLight' in window)) {
        window.vk__adsLight = false;
        adsScriptVersion = parseInt(adsScriptVersion);
        var attachScriptFunc = (VK.Api && VK.Api.attachScript || VK.addScript);
        var base_domain = (options.base_domain || VK._protocol + '//vk.com');
        attachScriptFunc(base_domain + '/js/al/aes_light.js?' + adsScriptVersion);
      } else if (window.vk__adsLight && vk__adsLight.userHandlers && vk__adsLight.userHandlers.onInit) {
        vk__adsLight.userHandlers.onInit(false); // false - do not publish initial onInit
      }
    }
    function adsProcessParams(adsParamsExport) {
      if (!adsParamsExport) {
        return;
      }
      for (var paramName in adsParamsExport) {
        var paramValue = adsParamsExport[paramName];
        if (paramName === 'ads_ad_unit_width' || paramName === 'ads_ad_unit_height') {
          if (!(paramName in adsParams)) {
            adsParamsLocal[paramName] = (parseInt(paramValue) || paramValue === 'auto' && adsParams[paramName + '_auto'] || adsParamsDefault[paramName]);
          }
        } else {
          if (!(paramName in adsParamsLocal)) {
            adsParamsLocal[paramName] = paramValue;
          }
        }
      }
    }
    function adsProcessHandler(errorCode) {
      var handlerResult = adsEvalHandler(adsParamsLocal.ads_handler, errorCode);
      if (errorCode <= 0 && handlerResult !== true) {
        try { console.log('VK: ad_unit_id = ' + adsParams.ads_ad_unit_id, ', errorCode = ', errorCode); } catch (e) {}
        adsInsertHtmlHandler(adsParamsLocal.ads_handler_empty_html, adsParamsLocal.ads_ad_unit_width, adsParamsLocal.ads_ad_unit_height);
      }
    }
    function adsEvalHandler(handler) {
      var result = false;
      try {
        if (!handler) {
          return false;
        }
        var func = false;
        if (isFunction(handler)) {
          func = handler;
        } else if (isString(handler)) {
          var handlerFuncs = handler.split('.');
          func = window;
          for (var i = 0, len = handlerFuncs.length; i < len; i++) {
            func = func[handlerFuncs[i]];
            if (!func) {
              break;
            }
          }
          if (!func) {
            if (handler.substr(0, 8) === 'function') {
              handler = 'return ' + handler + ';';
            }
            var handlerResult = (new Function(handler))();
            if (isFunction(handlerResult)) {
              func = handlerResult;
            } else {
              result = handlerResult;
            }
          }
        }
        if (func) {
          var args = Array.prototype.slice.call(arguments, 1);
          result = func.apply(func, args);
        }
      } catch (e) {
        try {
          console.error(e);
        } catch (e2) {}
      }

      return result;

      function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
      }
      function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
      }
    }
    function adsInsertHtmlHandler(handlerHtml, width, height) {
      if (!handlerHtml) {
        return;
      }
      if (!obj) {
        return;
      }

      width  = (width  ? width  + 'px' : '');
      height = (height ? height + 'px' : '');

      var iframeHandlerHtml = '<html><head></head><body style="padding: 0; margin: 0;"><div>' + handlerHtml + '</div></body></html>';

      var iframeHandler = document.createElement('iframe');
      iframeHandler.onload            = fixIframeHeight;
      iframeHandler.id                = (iframe ? iframe.id : ('vkwidget-' + Math.round(Math.random() * 1000000))) + '_ads_html_handler';
      iframeHandler.src               = 'about:blank';
      iframeHandler.width             = '100%';
      iframeHandler.height            = '100%';
      iframeHandler.scrolling         = 'no';
      iframeHandler.frameBorder       = '0';
      iframeHandler.allowTransparency = true;
      iframeHandler.style.overflow    = 'hidden';
      iframeHandler.style.width       = width;
      iframeHandler.style.height      = height;

      obj.style.width                 = width;
      obj.style.height                = height;

      obj.appendChild(iframeHandler);

      iframeHandler.contentWindow.vk_ads_html_handler = iframeHandlerHtml;
      iframeHandler.src = 'javascript:window["vk_ads_html_handler"]';

      function fixIframeHeight() {
        if (height) {
          return;
        }
        try {
          var rect = iframeHandler.contentWindow.document.body.firstChild.getBoundingClientRect();
          var heightFix = Math.ceil(rect.bottom - rect.top);
          if (heightFix) {
            iframeHandler.style.height = heightFix;
            obj.style.height           = heightFix;
          }
        } catch (e) {}
      }
    }
    function indexOf(arr, value, from) {
      for (var i = from || 0, l = (arr || []).length; i < l; i++) {
        if (arr[i] == value) return i;
      }
      return -1;
    }
    function inArray(value, arr) {
      return indexOf(arr, value) != -1;
    }
    function onDone(o, i, r) {
      obj = o;
      iframe = i;
      rpc = r;
    }
  };

  VK.Widgets.AllowMessagesFromCommunity = function (objId, options, groupId) {
    groupId = parseInt(groupId, 10);

    if (!options) options = {};
    if (!groupId || groupId < 0) throw Error('No group id passed');

    var params = {
      height: ({22: 22, 24: 24, 30: 30})[parseInt(options.height, 10) || 24],
      key: options.key ? options.key.substr(0, 256) : '',
      group_id: groupId
    }, rpc;

    return VK.Widgets._constructor('widget_allow_messages_from_community.php', objId, options, params, {}, {
      startHeight: params.height,
      height: params.height
    }, function(o, i, r) {
      rpc = r;
    });
  };

  VK.Widgets.Article = function(id, url, options) {
    var params = {
      url: url
    };

    options = options || {};

    return VK.Widgets._constructor('widget_article.php', id, options, params, {
      showBox: function(url) {
        var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
          proxy: function() {
            rpc.callMethod.apply(rpc, arguments);
          }
        });
        box.show();
      },
    });
  };

  VK.Widgets.CommunityMessages = (function(CommunityMessages) {
    if (CommunityMessages) return CommunityMessages;

    var instances = {}, wCur = {};
    var BUTTONS_CONF = {
      no_button: {width: 0, height: 0},
      blue_circle: {
        width: 50,
        height: 50,
        margin: {
          bottom: 20
        }
      }
    }, DEFAULT_BUTTON_TYPE = 'blue_circle',
    BUTTON_POSITIONS = {
      left: {
        bottom: 0,
        left: 20
      },
      right: {
        bottom: 0,
        right: 20
      }
    }, DEFAULT_BUTTON_POSITION = 'right';

    /* options
      - welcomeScreen
      - expandTimeout
      - shown || expended
      - widgetPosition
      - buttonType
      - disableButtonTooltip
      - tooltipButtonText
      - disableNewMessagesSound
      - disableExpandChatSound
      - disableTitleChange
    */
    CommunityMessages = function(objId, gid, options) {
      options = options || {};

      options.width = 300;
      options.height = 399;

      if (!options.base_domain) {
        options.base_domain = options.base_domain || VK._protocol + '//vk.com';
      }

      options.expandTimeout = parseInt(options.expandTimeout) || 0;

      var params = {
        gid: gid
      };

      options.expanded = parseInt(options.expanded) || 0;

      if (!options.from_dev && lsGet('expanded') != null || options.expanded) {
        options.shown = 1;
      }

      if (options.shown) {
        params.shown = 1;
      }

      if (!options.welcomeScreen) {
        params.disable_welcome_screen = 1;
      }

      params.ref_source_info = options.ref_source_info;
      params.ref_source_link = location.href;

      var buttonType = options.buttonType;
      if (Object.keys(BUTTONS_CONF).indexOf(buttonType) == -1) {
        buttonType = DEFAULT_BUTTON_TYPE;
      }

      if (buttonType == 'no_button') {
        options.disableButtonTooltip = 1;
      }

      if (options.disableButtonTooltip) {
        params.disable_tooltip = 1;
      }
      if (options.tooltipButtonText) {
        params.tooltip_text = options.tooltipButtonText;
      }

      if (options.disableNewMessagesSound) {
        params.disable_new_messages_sound = 1;
      }

      if (instances[objId]) {
        CommunityMessages.destroy(objId);
      }

      params.domain = document.domain;

      options.no_loading = 1;

      var curBox = false, expanded = 0;
      var ttSize = [0, 0], widgetPosition;

      changeWidgetPosition(options.widgetPosition);
      params.button_position = options.widgetPosition;

      var chatRpc, chatIfr;
      var inited = 0, timers = {};
      instances[objId] = VK.Widgets._constructor('widget_community_messages.php', objId, options, params, {
        onStartLoading: function() {
          var obj = document.getElementById(objId);
          obj.style.position = 'fixed';
          obj.style['z-index'] = 10000;
          updateWidgetPosition();
        },
        onReady: function () {
          inited = 1;
          if (options.expandTimeout > 0 && !options.shown) {
            timers.showTimer = setTimeout(function () {
              expandChat({
                playSong: !options.disableExpandChatSound,
                noSaveState: 1
              });
            }, options.expandTimeout);
          }
        },
        showBox: function(url) {
          if (curBox) {
            try {
              curBox.hide();
              try {
                curBox.iframe.src = 'about: blank;';
              } catch (e) {}
              curBox.iframe.parentNode.removeChild(curBox.iframe);
            } catch(e) { }
          }
          curBox = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, url), [], {
            proxy: function() {
              rpc.callMethod.apply(rpc, arguments);
            }
          });
          curBox.show();
        },
        setTooltipSize: function (size) {
          ttSize = size;
          if (!expanded) {
            minimize();
          }
        },
        expand: function(opts) {
          opts = opts || {};
          expanded = 1;
          expand();

          if (!opts.noSaveState) {
            lsSet('expanded', 1);
          }
        },
        minimize: function() {
          setTimeout(function() {
            expanded = 0;
            minimize(objId);
            lsRemove('expanded');
          }, 120);
        },
        canNotWrite: function(type) {
          options.onCanNotWrite && options.onCanNotWrite(type);
        },
        destroy: function() {
          chatRpc.destroy();
          try {chatIfr.src = 'about: blank;';} catch (e) {}
          try {
            chatIfr.parentNode.removeChild(chatIfr);
          } catch(e) { }
        },
        fatalError: function(error_code, public_id) {

          var query = {
            code: error_code,
            widget: 2,
            public_id: public_id,
          };

          if (error_code == 1903) {
            query.referrer_domain = document.domain;
          }

          var query_str = [];
          for(var i in query) {
            query_str.push(i+'='+query[i]);
          }

          CommunityMessages.destroy(objId);
          var box = VK.Util.Box(VK.Widgets.showBoxUrl(options.base_domain, 'blank.php?'+query_str.join('&')));
          box.show();
        },
        setPageTitle: function (title) {
          if (options.disableTitleChange) {
            return;
          }
          stopTitleAnimation();
          wCur.oldTitle = document.title || null;
          wCur.title = title;
          wCur.changeTitleMode = 0;
          startTitleNotify(1);
        },
        resetPageTitle: function () {
          stopTitleAnimation();
        },
        newMessage: function () {
          if (document.hasFocus && !document.hasFocus() && !options.disableNewMessagesSound) {
            callRpcMethod('playNewMsgSong');
          }
        }
      }, {}, function(o, i, r) {
        chatRpc = r;
        chatIfr = i;
        if (!options.shown) {
          minimize();
        } else {
          expand();
        }
      });

      function startTitleNotify(fast) {
        clearTimeout(wCur.titleTimer);
        wCur.titleTimer = setTimeout(function () {
          if (wCur.changeTitleMode == 1) {
            document.title = wCur.oldTitle || '';
          } else {
            document.title = wCur.title;
          }
          wCur.changeTitleMode = wCur.changeTitleMode == 1 ? 0 : 1;
          startTitleNotify();
        }, fast ? 0 : 1500);
      }

      function stopTitleAnimation() {
        if (options.disableTitleChange) {
          return;
        }
        clearTimeout(wCur.titleTimer);
        if (wCur.oldTitle) {
          document.title = wCur.oldTitle;
        } else if (wCur.oldTitle === null) {
          document.title = '';
        }
        wCur.title = '';
      }

      function expand() {
        var obj = document.getElementById(objId), frame = obj.getElementsByTagName('iframe')[0];

        obj.style.width = frame.width = '372px';
        obj.style.height = frame.height = '399px';
        obj.style.margin = '0px 0px 0px 0px';
        //frame.style.boxShadow = '0 0 0 1px rgba(0, 20, 51, .12), 0 20px 40px 0 rgba(0, 0, 0, 0.3)';
        //frame.style.borderRadius = '6px';
      }

      function minimize() {
        var obj = document.getElementById(objId), frame = obj.getElementsByTagName('iframe')[0];

        var btnConf = BUTTONS_CONF[buttonType];

        var w = btnConf.width + ttSize[0];
        var h = Math.max(btnConf.height, ttSize[1]);

        obj.style.width = w + 'px';
        obj.style.height = h + 'px';
        frame.style.boxShadow = 'none';

        var margin = btnConf.margin ? btnConf.margin : {};
        obj.style.margin = '0px ' + (margin.right || 0) + 'px ' + (margin.bottom || 0) + 'px 0px';

        if (frame) {
          frame.width = w;
          frame.height = h;
        }
      }

      function changeWidgetPosition(position) {
        widgetPosition = position;
        if (Object.keys(BUTTON_POSITIONS).indexOf(widgetPosition) == -1) {
          widgetPosition = DEFAULT_BUTTON_POSITION;
        }
        updateWidgetPosition();
        callRpcMethod('changeButtonPosition', widgetPosition);
      }

      function updateWidgetPosition() {
        var obj = document.getElementById(objId);

        if (!obj) {
          return;
        }

        var props = ['left', 'right', 'top', 'bottom'];
        for(var i in props) {
          obj.style[props[i]] = '';
        }

        var conf = BUTTON_POSITIONS[widgetPosition];
        for(var i in conf) {
          obj.style[i] = conf[i] + 'px';
        }

        if (!inited) {
          return;
        }

        if (expanded) {
          expand();
        } else {
          minimize();
        }
      }

      function callRpcMethod() {
        chatRpc && chatRpc.callMethod.apply(chatRpc, arguments);
      }

      /* opts
        - welcomeScreen
      */
      function expandChat(opts) {
        if (!opts || Object.prototype.toString.call(opts) !== '[object Object]') {
          opts = {};
        }

        if (opts.welcomeScreen == undefined) {
          opts.welcomeScreen = options.welcomeScreen;
        }

        clearTimeout(timers.showTimer);
        callRpcMethod('expand', opts);
      }

      function minimizeChat() {
        callRpcMethod('minimize');
      }

      function setSourceData(data) {
        callRpcMethod('setSourceData', VK.extend({
          link: location.href,
        }, data));
      }

      VK.Util.addEvent('popstate', setSourceData.bind(this, {}), window);
      VK.Util.addEvent('hashchange', setSourceData.bind(this, {}), window);

      function destroyChat() {
        stopTitleAnimation();
        CommunityMessages.destroy(objId);
      }

      return {
        expand: expandChat,
        minimize: minimizeChat,
        destroy: destroyChat,
        setSourceData: setSourceData,
        changeButtonPosition: changeWidgetPosition,
        stopTitleAnimation: stopTitleAnimation,
      };
    };

    function lsGet(key) {
      if (!window.localStorage) {
        return null;
      }
      return localStorage.getItem('vk_community_widget_' + key);
    }

    function lsSet(key, value) {
      window.localStorage && localStorage.setItem('vk_community_widget_' + key, value);
    }

    function lsRemove(key) {
      window.localStorage && localStorage.removeItem('vk_community_widget_' + key);
    }

    CommunityMessages.destroy = function(objId) {
      if (!instances[objId]) {
        return;
      }

      var xdm = VK.Widgets.RPC[instances[objId]];
      xdm && xdm.methods.destroy();

      delete instances[objId];
    };

    CommunityMessages.expand = function (objId) {
      console.log(instances[objId]);
    };

    return CommunityMessages;
  })(VK.Widgets.CommunityMessages);

  VK.Widgets._constructor = function(widgetUrl, objId, options, params, funcs, defaults, onDone, widgetId, iter) {
    var obj = document.getElementById(objId);
    widgetId = widgetId || (++VK.Widgets.count);

    if (!obj) {
      iter = iter || 0;
      if (iter > 10) {
        throw Error('VK.Widgets: object #' + objId + ' not found.');
      }
      setTimeout(function() {
        VK.Widgets._constructor(widgetUrl, objId, options, params, funcs, defaults, onDone, widgetId, iter + 1);
      }, 500);
      return widgetId;
    }

    options = options || {};
    defaults = defaults || {};
    funcs = funcs || {};

    if (options.preview) {
      params.preview = 1;
      delete options['preview'];
    }

    var ifr, url, urlQueryString, encodedParam, rpc, iframe, i,
      base_domain = options.base_domain || VK._protocol + '//vk.com',
      width = options.width === 'auto' ? (obj.clientWidth || obj.offsetWidth || defaults.minWidth) | 0 : parseInt(options.width || 0, 10);
    width = width ? (Math.max(defaults.minWidth || 200, Math.min(defaults.maxWidth || 10000, width)) + 'px') : '100%';
    obj.style.width = width;

    if (options.height) {
      params.height = options.height;
      obj.style.height = options.height + 'px';
    } else {
      obj.style.height = (defaults.startHeight || 200) + 'px';
    }

    if (width === '100%') params.startWidth = (obj.clientWidth || obj.offsetWidth) | 0;
    if (!params.url) params.url = options.pageUrl || location.href.replace(/#.*$/, '');

    url = base_domain + '/' + widgetUrl;
    urlQueryString = '';
    if (!options.noDefaultParams) {
      urlQueryString += '&app=' + (VK._apiId || '0') + '&width=' + encodeURIComponent(width)
    }
    urlQueryString += '&_ver=' + VK.version
    if (VK._iframeAppWidget) {
      params.iframe_app = 1;
    }
    var pData = VK.Util.getPageData();
    params.url      = params.url     || pData.url || "";
    params.referrer = params.referrer || document.referrer || "";
    params.title    = params.title   || pData.title  || document.title || "";
    for (i in params) {
      if (i == 'title' && params[i].length > 80) params[i] = params[i].substr(0, 80)+'...';
      if (i == 'description' && params[i].length > 160) params[i] = params[i].substr(0, 160)+'...';
      if (typeof(params[i]) == 'number') {
        encodedParam = params[i];
      } else {
        try {
          encodedParam = encodeURIComponent(params[i]);
        } catch (e) {
          encodedParam = '';
        }
      }
      urlQueryString += '&' + i + '=' + encodedParam;
    }
    urlQueryString += '&' + (+new Date()).toString(16);
    url += '?' + urlQueryString.substr(1);

    funcs.onStartLoading && funcs.onStartLoading();
    if (!options.no_loading) {
      VK.Widgets.loading(obj, true);
    }

    funcs.showLoader = function(enable) {
      VK.Util.Loader(enable);
    };
    funcs.publish = function() {
      var args = Array.prototype.slice.call(arguments);
      args.push(widgetId);
      VK.Observer.publish.apply(VK.Observer, args);
    };
    funcs.onInit = function() {
      VK.Widgets.loading(obj, false);
      if (funcs.onReady) funcs.onReady();
      if (options.onReady) options.onReady();
    };
    funcs.resize = function(e, cb) {
      obj.style.height = e + 'px';
      var el = document.getElementById('vkwidget' + widgetId);
      if (el) {
        el.style.height = e + 'px';
      }
    };
    funcs.resizeWidget = function(newWidth, newHeight) {
      newWidth  = parseInt(newWidth);
      newHeight = parseInt(newHeight);
      var widgetElem = document.getElementById('vkwidget' + widgetId);
      if (isFinite(newWidth)) {
        obj.style.width = newWidth + 'px';
        if (widgetElem) {
          widgetElem.style.width = newWidth + 'px';
        }
      }
      if (isFinite(newHeight)) {
        obj.style.height = newHeight + 'px';
        if (widgetElem) {
          widgetElem.style.height = newHeight + 'px';
        }
      }
      if (options.onResizeWidget) options.onResizeWidget();
    };
    funcs.updateVersion = function(ver) {
      if (ver > 1) {
        VK.Api.attachScript('//vk.com/js/api/openapi_update.js?'+parseInt(ver));
      }
    };
    rpc = VK.Widgets.RPC[widgetId] = new fastXDM.Server(funcs, function(origin) {
      if (!origin) return true;
      origin = origin.toLowerCase();
      return (origin.match(/(\.|\/)vk\.com($|\/|\?)/));
    }, {safe: true});
    iframe = VK.Widgets.RPC[widgetId].append(obj, {
      src: url,
      width: (width.indexOf('%') != -1) ? width : (parseInt(width) || width),
      height: defaults.startHeight || '100%',
      scrolling: 'no',
      id: 'vkwidget' + widgetId,
      allowTransparency: options.allowTransparency || false,
      style: {
        overflow: 'hidden'
      }
    });
    onDone && setTimeout(function() {onDone(obj, iframe || obj.firstChild, rpc);}, 10);
    return widgetId;
  };
}

if (!VK.Util) {
  VK.Util = {
    getPageData: function() {
      if (!VK._pData) {
        var metas = document.getElementsByTagName('meta'), pData = {}, keys = ['description', 'title', 'url', 'image', 'app_id'], metaName;
        for (var i in metas) {
          if (!metas[i].getAttribute) continue;
          if (metas[i].getAttribute && ((metaName = metas[i].getAttribute('name')) || (metaName = metas[i].getAttribute('property')))) {
            for (var j in keys) {
              if (metaName == keys[j] || metaName == 'og:'+keys[j] || metaName == 'vk:'+keys[j]) {
                pData[keys[j]] = metas[i].content;
              }
            }
          }
        }
        if (pData.app_id && !VK._apiId) {
          VK._apiId = pData.app_id;
        }
        pData.title = pData.title || document.title || '';
        pData.description = pData.description || '';
        pData.image = pData.image || '';
        if (!pData.url && VK._iframeAppWidget && VK._apiId) {
          pData.url = '/app' + VK._apiId;
          if (VK._browserHash) {
            pData.url += VK._browserHash
          }
        }
        var loc = location.href.replace(/#.*$/, '');
        if (!pData.url || !pData.url.indexOf(loc)) {
          pData.url = loc;
        }
        VK._pData = pData;
      }
      return VK._pData;
    },
    getStyle: function(elem, name) {
      var ret, defaultView = document.defaultView || window;
      if (defaultView.getComputedStyle) {
        name = name.replace(/([A-Z])/g, '-$1').toLowerCase();
        var computedStyle = defaultView.getComputedStyle(elem, null);
        if (computedStyle) {
          ret = computedStyle.getPropertyValue(name);
        }
      } else if (elem.currentStyle) {
        var camelCase = name.replace(/\-(\w)/g, function(all, letter){
          return letter.toUpperCase();
        });
        ret = elem.currentStyle[name] || elem.currentStyle[camelCase];
      }

      return ret;
    },

    getXY: function(obj, fixed) {
      if (!obj || obj === undefined) return;

      var left = 0, top = 0;
      if (obj.getBoundingClientRect !== undefined) {
        var rect = obj.getBoundingClientRect();
        left = rect.left;
        top = rect.top;
        fixed = true;
      } else if (obj.offsetParent) {
        do {
          left += obj.offsetLeft;
          top += obj.offsetTop;
          if (fixed) {
            left -= obj.scrollLeft;
            top -= obj.scrollTop;
          }
        } while (obj = obj.offsetParent);
      }
      if (fixed) {
        top += window.pageYOffset || window.scrollNode && scrollNode.scrollTop || document.documentElement.scrollTop;
        left += window.pageXOffset || window.scrollNode && scrollNode.scrollLeft || document.documentElement.scrollLeft;
      }

      return [left, top];
    },

    Loader: function self(enable) {
      if (!self.loader) {
        self.loader = document.createElement('DIV');
        self.loader.innerHTML = '<style type="text/css">\
        @-webkit-keyframes VKWidgetsLoaderKeyframes {0%{opacity: 0.2;}30%{opacity: 1;}100%{opacity: 0.2;}}\
        @keyframes VKWidgetsLoaderKeyframes {0%{opacity: 0.2;}30%{opacity: 1;}100%{opacity: 0.2;}}\
        .VKWidgetsLoader div {width: 7px;height: 7px;-webkit-border-radius: 50%;-khtml-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;background: #fff;top: 21px;position: absolute;z-index: 2;-o-transition: opacity 350ms linear; transition: opacity 350ms linear;opacity: 0.2;-webkit-animation-duration: 750ms;-o-animation-duration: 750ms;animation-duration: 750ms;-webkit-animation-name: VKWidgetsLoaderKeyframes;-o-animation-name: VKWidgetsLoaderKeyframes;animation-name: VKWidgetsLoaderKeyframes;-webkit-animation-iteration-count: infinite;-o-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-transform: translateZ(0);transform: translateZ(0);}</style><div class="VKWidgetsLoader" style="position: fixed;left: 50%;top: 50%;margin: -25px -50px;z-index: 1002;height: 50px;width: 100px;"><div style="left: 36px;-webkit-animation-delay: 0ms;-o-animation-delay: 0ms;animation-delay: 0ms;"></div><div style="left: 47px;-webkit-animation-delay: 180ms;-o-animation-delay: 180ms;animation-delay: 180ms;"></div><div style="left: 58px;-webkit-animation-delay: 360ms;-o-animation-delay: 360ms;animation-delay: 360ms;"></div><span style="display: block;background-color: #000;-webkit-border-radius: 4px;-khtml-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);-moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);position: absolute;left: 0;top: 0;bottom: 0; right: 0;z-index: 1;opacity: 0.7;"></span></div>';
        document.body.insertBefore(self.loader, document.body.firstChild);
      }
      self.loader.style.display = enable ? 'block' : 'none';
    },

    Box: function(src, sizes, fnc, options) {
      fnc = fnc || {};
      var overflowB = document.body.style.overflow;
      VK.Util.Loader(true);
      var is_vk = /(^|\.)(vk\.com|vkontakte\.ru)$/.test(location.hostname);
      var rpc = new fastXDM.Server(VK.extend(fnc, {
            onInit: function() {
              iframe.style.background = 'transparent';
              iframe.style.visibility = 'visible';
              document.body.style.overflow = 'hidden';
              iframe.setAttribute('allowfullscreen', 1);
              if (is_vk) document.body.className += ' layers_shown';
              VK.Util.Loader();
            },
            hide: function() {
              iframe.style.display = 'none';
            },
            tempHide: function() {
              iframe.style.left = '-10000px';
              iframe.style.top = '-10000px';
              iframe.style.width = '10px';
              iframe.style.height = '10px';
              if (is_vk) document.body.className = document.body.className.replace(/\b\s*?layers_shown\s*\b/, ' ');
              document.body.style.overflow = overflowB;
            },
            destroy: function() {
              try {
                iframe.src = 'about: blank;';
              } catch (e) {}
              iframe.parentNode.removeChild(iframe);
              if (is_vk) document.body.className = document.body.className.replace(/\b\s*?layers_shown\s*\b/, ' ');
              document.body.style.overflow = overflowB;
            },
            resize: function(w, h) {
            }
          }, true), false, {safe: true}),
          iframe = rpc.append(document.body, {
            src: src.replace(/&amp;/g, '&'),
            scrolling: 'no',
            allowTransparency: true,
            style: {position: 'fixed', left: 0, top: 0, zIndex: 1002, background: VK._protocol + '//vk.com/images/upload.gif center center no-repeat transparent', padding: '0', border: '0', width: '100%', height: '100%', overflow: 'hidden', visibility: 'hidden'}
          });
      return {
        show: function(scrollTop, height) {
          iframe.style.display = 'block';
          document.body.style.overflow = 'hidden';
        },
        hide: function() {
          iframe.style.display = 'none';
          document.body.style.overflow = overflowB;
        },
        iframe: iframe,
        rpc: rpc
      }
    },

    addEvent: function(type, func, target) {
      target = target || window.document;
      if (target.addEventListener) {
        target.addEventListener(type, func, false);
      } else if (target.attachEvent) {
        target.attachEvent('on'+type, func);
      }
    },

    removeEvent: function(type, func, target) {
      target = target || window.document;
      if (target.removeEventListener) {
        target.removeEventListener(type, func, false);
      } else if (target.detachEvent) {
        target.detachEvent('on'+type, func);
      }
    },

    ss: function(el, styles) {VK.extend(el.style, styles, true);}
  };
}

if (!VK.Retargeting) {
  VK.Retargeting = {
    pixelCode: null,
    Init: function (pixelCode) {
      this.pixelCode = pixelCode;
      return this;
    },
    Event: function (event) {
      if (!this.pixelCode) {
        return;
      }

      (window.Image ? (new Image()) : document.createElement('img')).src = 'https://vk.com/rtrg?p=' + this.pixelCode + (event ? ('&event=' + encodeURIComponent(event)) : '');
    },
    Hit: function () {
      this.Event();
    },
    Add: function (audienceID) {
      if (!this.pixelCode || !audienceID) {
        return;
      }

      (window.Image ? (new Image()) : document.createElement('img')).src = 'https://vk.com/rtrg?p=' + this.pixelCode + '&audience=' + encodeURIComponent(audienceID);
    },
    ProductEvent: function (priceListID, event, params, opts) {
      if (!this.pixelCode || !event || !priceListID) {
        return;
      }

      opts = opts || {};

      var canShowErrors = true;
      if (typeof opts.show_errors !== 'undefined') {
        canShowErrors = opts.show_errors ? true : false;
      }
      var errorsIgnore = '0';
      if (typeof opts.errors_ignore !== 'undefined') {
        errorsIgnore = opts.errors_ignore ? '1' : '0';
      }

      var url = 'https://vk.com/rtrg';
      var productParams = params ? JSON.stringify(params) : '';
      var requestParams = {
        'p': this.pixelCode,
        'products_event': event,
        'price_list_id': priceListID,
        'e': '1',
        'i': errorsIgnore
      };
      if (productParams) {
        requestParams.products_params = productParams;
      }

      var query = Object.keys(requestParams).map(function(key) {
        var segment = encodeURIComponent(key) + '=' + encodeURIComponent(requestParams[key]);
        return segment;
      }).join('&');

      var requestUrl = url + '?' + query;

      VK.Api.makeRequest(requestUrl, this.onDone.bind(this, canShowErrors));
    },
    onDone: function(canShowErrors, response) {
      if (!response || !canShowErrors) {
        return;
      }

      var resp;
      try {
        resp = JSON.parse(response);
      } catch (e) {
        return;
      }

      if (!resp || !resp.errors) {
        return;
      }
      this.showErrors(resp.errors);
    },
    showErrors: function(errors) {
      if (!errors && !errors.length) {
        return;
      }

      var errorBegin = 'VK Pixel Error (' + this.pixelCode + '): ';

      if (typeof errors === 'string') {
        console.error(errorBegin + errors);
        return;
      }

      var errorsLength = errors.length;

      if (!errorsLength) {
        return;
      }

      for (var i = 0; i < errorsLength; i++) {
        console.error(errorBegin + errors[i]);
      }
    }
  };
}

if (!VK.Pixel) {
  VK.Pixel = function (pixelCode) {
    if (this.constructor != VK.Pixel) {
      throw Error('VK.Pixel was called without \'new\' operator');
    }

    VK.extend(this, VK.Retargeting);
    this.pixelCode = pixelCode;

    return this;
  };
}

// Init asynchronous library loading
window.vkAsyncInit && setTimeout(vkAsyncInit, 0);

if (window.vkAsyncInitCallbacks && vkAsyncInitCallbacks.length) {
  setTimeout(function() {
    var callback;
    while (callback = vkAsyncInitCallbacks.pop()) {
      try {
        callback();
      } catch(e) {
        try {
          console.error(e);
        } catch (e2) {}
      }
    }
  }, 0);
}

try{stManager.done('api/openapi.js');}catch(e){}
;
//# sourceMappingURL=scripts.js.map