/*! For license information please see main.28548529.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),i=n(43),o=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(a(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),j=Symbol.for("react.lazy");Symbol.for("react.scope");var P=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var _=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var A=Symbol.iterator;function T(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=A&&e[A]||e["@@iterator"])?e:null}var R=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===R?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case P:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return N(e(t))}catch(n){}}return null}var L=Array.isArray,$=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},M=[],D=-1;function I(e){return{current:e}}function U(e){0>D||(e.current=M[D],M[D]=null,D--)}function F(e,t){D++,M[D]=e.current,e.current=t}var B=I(null),H=I(null),G=I(null),W=I(null);function Y(e,t){switch(F(G,t),F(H,e),F(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=od(t=id(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(B),F(B,e)}function q(){U(B),U(H),U(G)}function V(e){null!==e.memoizedState&&F(W,e);var t=B.current,n=od(t,e.type);t!==n&&(F(H,e),F(B,n))}function K(e){H.current===e&&(U(B),U(H)),W.current===e&&(U(W),Vd._currentValue=z)}var Q=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ie=r.unstable_UserBlockingPriority,oe=r.unstable_NormalPriority,ae=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function fe(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/me|0)|0},he=Math.log,me=Math.LN2;var ge=256,be=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~o)?i=ye(r):0!==(a&=s)?i=ye(a):n||0!==(n=s&~e)&&(i=ye(n)):0!==(s=r&~o)?i=ye(s):0!==a?i=ye(a):n||0!==(n=r&~e)&&(i=ye(n)),0===i?0:0!==t&&t!==i&&0===(t&o)&&((o=i&-i)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:i}function ve(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=be;return 0===(62914560&(be<<=1))&&(be=4194304),e}function Ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ce(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-pe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Pe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function _e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ae(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Te(){var e=O.p;return 0!==e?e:void 0===(e=window.event)?32:uf(e.type)}var Re=Math.random().toString(36).slice(2),Ne="__reactFiber$"+Re,Le="__reactProps$"+Re,$e="__reactContainer$"+Re,Oe="__reactEvents$"+Re,ze="__reactListeners$"+Re,Me="__reactHandles$"+Re,De="__reactResources$"+Re,Ie="__reactMarker$"+Re;function Ue(e){delete e[Ne],delete e[Le],delete e[Oe],delete e[ze],delete e[Me]}function Fe(e){var t=e[Ne];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$e]||n[Ne]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=xd(e);null!==e;){if(n=e[Ne])return n;e=xd(e)}return t}n=(e=n).parentNode}return null}function Be(e){if(e=e[Ne]||e[$e]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function Ge(e){var t=e[De];return t||(t=e[De]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Ie]=!0}var Ye=new Set,qe={};function Ve(e,t){Ke(e,t),Ke(e+"Capture",t)}function Ke(e,t){for(qe[e]=t,e=0;e<t.length;e++)Ye.add(t[e])}var Qe,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(i=t,Q.call(et,i)||!Q.call(Ze,i)&&(Je.test(i)?et[i]=!0:(Ze[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Qe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Qe+e+Xe}var ot=!1;function at(e,t){if(!e||ot)return"";ot=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),a=o[0],s=o[1];if(a&&s){var l=a.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{ot=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return it("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gt(e,t,n,r,i,o,a,s){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?yt(e,a,ct(t)):null!=n?yt(e,a,ct(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=o&&(e.defaultChecked=!!o),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function bt(e,t,n,r,i,o,a,s){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a)}function yt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function vt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(L(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Et(e,i,r)}else for(var o in t)t.hasOwnProperty(o)&&Et(e,o,t[o])}function jt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function At(e){return _t.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tt=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Nt=null,Lt=null;function $t(e){var t=Be(e);if(t&&(e=t.stateNode)){var n=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Le]||null;if(!i)throw Error(a(90));gt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":vt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&xt(e,!!n.multiple,t,!1)}}}var Ot=!1;function zt(e,t,n){if(Ot)return e(t,n);Ot=!0;try{return e(t)}finally{if(Ot=!1,(null!==Nt||null!==Lt)&&(Fc(),Nt&&(t=Nt,e=Lt,Lt=Nt=null,$t(t),e)))for(t=0;t<e.length;t++)$t(e[t])}}function Mt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Le]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Dt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),It=!1;if(Dt)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){It=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch($f){It=!1}var Ft=null,Bt=null,Ht=null;function Gt(){if(Ht)return Ht;var e,t,n=Bt,r=n.length,i="value"in Ft?Ft.value:Ft.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Ht=i.slice(e,1<t?1-t:void 0)}function Wt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function qt(){return!1}function Vt(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Yt:qt,this.isPropagationStopped=qt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Kt,Qt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Vt(Jt),en=f({},Jt,{view:0,detail:0}),tn=Vt(en),nn=f({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Kt=e.screenX-Xt.screenX,Qt=e.screenY-Xt.screenY):Qt=Kt=0,Xt=e),Kt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),rn=Vt(nn),on=Vt(f({},nn,{dataTransfer:0})),an=Vt(f({},en,{relatedTarget:0})),sn=Vt(f({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Vt(f({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Vt(f({},Jt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=fn[e])&&!!t[e]}function hn(){return pn}var mn=Vt(f({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Wt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?Wt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Wt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Vt(f({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),bn=Vt(f({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),yn=Vt(f({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),xn=Vt(f({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),vn=Vt(f({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=Dt&&"CompositionEvent"in window,kn=null;Dt&&"documentMode"in document&&(kn=document.documentMode);var En=Dt&&"TextEvent"in window&&!kn,Cn=Dt&&(!Sn||kn&&8<kn&&11>=kn),jn=String.fromCharCode(32),Pn=!1;function _n(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function An(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Tn=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function Ln(e,t,n,r){Nt?Lt?Lt.push(r):Lt=[r]:Nt=r,0<(t=Gu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,On=null;function zn(e){zu(e,0)}function Mn(e){if(ft(He(e)))return e}function Dn(e,t){if("change"===e)return t}var In=!1;if(Dt){var Un;if(Dt){var Fn="oninput"in document;if(!Fn){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),Fn="function"===typeof Bn.oninput}Un=Fn}else Un=!1;In=Un&&(!document.documentMode||9<document.documentMode)}function Hn(){$n&&($n.detachEvent("onpropertychange",Gn),On=$n=null)}function Gn(e){if("value"===e.propertyName&&Mn(On)){var t=[];Ln(t,On,e,Rt(e)),zt(zn,t)}}function Wn(e,t,n){"focusin"===e?(Hn(),On=n,($n=t).attachEvent("onpropertychange",Gn)):"focusout"===e&&Hn()}function Yn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Mn(On)}function qn(e,t){if("click"===e)return Mn(t)}function Vn(e,t){if("input"===e||"change"===e)return Mn(t)}var Kn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Qn(e,t){if(Kn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Q.call(t,i)||!Kn(e[i],t[i]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Dt&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,or=null,ar=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ar||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},or&&Qn(or,r)||(or=r,0<(r=Gu(ir,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function fr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Dt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var pr=fr("animationend"),hr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),br=fr("transitionstart"),yr=fr("transitioncancel"),xr=fr("transitionend"),vr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){vr.set(e,t),Ve(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function Er(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},kr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Cr=[],jr=0,Pr=0;function _r(){for(var e=jr,t=Pr=jr=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var i=Cr[t];Cr[t++]=null;var o=Cr[t];if(Cr[t++]=null,null!==r&&null!==i){var a=r.pending;null===a?i.next=i:(i.next=a.next,a.next=i),r.pending=i}0!==o&&Nr(n,i,o)}}function Ar(e,t,n,r){Cr[jr++]=e,Cr[jr++]=t,Cr[jr++]=n,Cr[jr++]=r,Pr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Tr(e,t,n,r){return Ar(e,t,n,r),Lr(e)}function Rr(e,t){return Ar(e,null,null,t),Lr(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(i=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,i&&null!==t&&(i=31-pe(n),null===(r=(e=o.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),o):null}function Lr(e){if(50<Nc)throw Nc=0,Lc=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var $r={};function Or(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zr(e,t,n,r){return new Or(e,t,n,r)}function Mr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dr(e,t){var n=e.alternate;return null===n?((n=zr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ir(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ur(e,t,n,r,i,o){var s=0;if(r=e,"function"===typeof e)Mr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case P:return(e=zr(31,n,t,i)).elementType=P,e.lanes=o,e;case g:return Fr(n.children,i,o,t);case b:s=8,i|=24;break;case y:return(e=zr(12,n,t,2|i)).elementType=y,e.lanes=o,e;case k:return(e=zr(13,n,t,i)).elementType=k,e.lanes=o,e;case E:return(e=zr(19,n,t,i)).elementType=E,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case x:case w:s=10;break e;case v:s=9;break e;case S:s=11;break e;case C:s=14;break e;case j:s=16,r=null;break e}s=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=zr(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Fr(e,t,n,r){return(e=zr(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=zr(6,e,null,t)).lanes=n,e}function Hr(e,t,n){return(t=zr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gr=[],Wr=0,Yr=null,qr=0,Vr=[],Kr=0,Qr=null,Xr=1,Jr="";function Zr(e,t){Gr[Wr++]=qr,Gr[Wr++]=Yr,Yr=e,qr=t}function ei(e,t,n){Vr[Kr++]=Xr,Vr[Kr++]=Jr,Vr[Kr++]=Qr,Qr=e;var r=Xr;e=Jr;var i=32-pe(r)-1;r&=~(1<<i),n+=1;var o=32-pe(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xr=1<<32-pe(t)+i|n<<i|r,Jr=o+e}else Xr=1<<o|n<<i|r,Jr=e}function ti(e){null!==e.return&&(Zr(e,1),ei(e,1,0))}function ni(e){for(;e===Yr;)Yr=Gr[--Wr],Gr[Wr]=null,qr=Gr[--Wr],Gr[Wr]=null;for(;e===Qr;)Qr=Vr[--Kr],Vr[Kr]=null,Jr=Vr[--Kr],Vr[Kr]=null,Xr=Vr[--Kr],Vr[Kr]=null}var ri=null,ii=null,oi=!1,ai=null,si=!1,li=Error(a(519));function ci(e){throw mi(Er(Error(a(418,"")),e)),li}function ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ne]=e,t[Le]=r,n){case"dialog":Mu("cancel",t),Mu("close",t);break;case"iframe":case"object":case"embed":Mu("load",t);break;case"video":case"audio":for(n=0;n<$u.length;n++)Mu($u[n],t);break;case"source":Mu("error",t);break;case"img":case"image":case"link":Mu("error",t),Mu("load",t);break;case"details":Mu("toggle",t);break;case"input":Mu("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Mu("invalid",t);break;case"textarea":Mu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Qu(t.textContent,n)?(null!=r.popover&&(Mu("beforetoggle",t),Mu("toggle",t)),null!=r.onScroll&&Mu("scroll",t),null!=r.onScrollEnd&&Mu("scrollend",t),null!=r.onClick&&(t.onclick=Xu),t=!0):t=!1,t||ci(e)}function di(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 13:return void(si=!1);case 27:case 3:return void(si=!0);default:ri=ri.return}}function fi(e){if(e!==ri)return!1;if(!oi)return di(e),oi=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||ad(e.type,e.memoizedProps)),t=!t),t&&ii&&ci(e),di(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ii=bd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ii=null}}else 27===n?(n=ii,pd(e.type)?(e=yd,yd=null,ii=e):ii=n):ii=ri?bd(e.stateNode.nextSibling):null;return!0}function pi(){ii=ri=null,oi=!1}function hi(){var e=ai;return null!==e&&(null===xc?xc=e:xc.push.apply(xc,e),ai=null),e}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=I(null),bi=null,yi=null;function xi(e,t,n){F(gi,t._currentValue),t._currentValue=n}function vi(e){e._currentValue=gi.current,U(gi)}function wi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Si(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var o=i.dependencies;if(null!==o){var s=i.child;o=o.firstContext;e:for(;null!==o;){var l=o;o=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),wi(o.return,n,e),r||(s=null);break e}o=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(a(341));s.lanes|=n,null!==(o=s.alternate)&&(o.lanes|=n),wi(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function ki(e,t,n,r){e=null;for(var i=t,o=!1;null!==i;){if(!o)if(0!==(524288&i.flags))o=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(a(387));if(null!==(s=s.memoizedProps)){var l=i.type;Kn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===W.current){if(null===(s=i.alternate))throw Error(a(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(Vd):e=[Vd])}i=i.return}null!==e&&Si(t,e,n,r),t.flags|=262144}function Ei(e){for(e=e.firstContext;null!==e;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ci(e){bi=e,yi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function ji(e){return _i(bi,e)}function Pi(e,t){return null===bi&&Ci(e),_i(e,t)}function _i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===yi){if(null===e)throw Error(a(308));yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yi=yi.next=t;return n}var Ai="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ti=r.unstable_scheduleCallback,Ri=r.unstable_NormalPriority,Ni={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Li(){return{controller:new Ai,data:new Map,refCount:0}}function $i(e){e.refCount--,0===e.refCount&&Ti(Ri,function(){e.controller.abort()})}var Oi=null,zi=0,Mi=0,Di=null;function Ii(){if(0===--zi&&null!==Oi){null!==Di&&(Di.status="fulfilled");var e=Oi;Oi=null,Mi=0,Di=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ui=$.S;$.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Oi){var n=Oi=[];zi=0,Mi=Au(),Di={status:"pending",value:void 0,then:function(e){n.push(e)}}}zi++,t.then(Ii,Ii)}(0,t),null!==Ui&&Ui(e,t)};var Fi=I(null);function Bi(){var e=Fi.current;return null!==e?e:rc.pooledCache}function Hi(e,t){F(Fi,null===t?Fi.current:t.pool)}function Gi(){var e=Bi();return null===e?null:{parent:Ni._currentValue,pool:e}}var Wi=Error(a(460)),Yi=Error(a(474)),qi=Error(a(542)),Vi={then:function(){}};function Ki(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Qi(){}function Xi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Qi,Qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Qi,Qi);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e}throw Ji=t,Wi}}var Ji=null;function Zi(){if(null===Ji)throw Error(a(459));var e=Ji;return Ji=null,e}function eo(e){if(e===Wi||e===qi)throw Error(a(483))}var to=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function io(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Lr(e),Nr(e,null,n),t}return Ar(e,r,t,n),Lr(e)}function ao(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}function so(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lo=!1;function co(){if(lo){if(null!==Di)throw Di}}function uo(e,t,n,r){lo=!1;var i=e.updateQueue;to=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var p=-536870913&s.lane,h=p!==s.lane;if(h?(oc&p)===p:(r&p)===p){0!==p&&p===Mi&&(lo=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;p=t;var b=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(b,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=g.payload)?m.call(b,d,p):m)||void 0===p)break e;d=f({},d,p);break e;case 2:to=!0}}null!==(p=s.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=i.callbacks)?i.callbacks=[p]:h.push(p))}else h={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===o&&(i.shared.lanes=0),pc|=a,e.lanes=a,e.memoizedState=d}}function fo(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function po(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)fo(n[e],t)}var ho=I(null),mo=I(0);function go(e,t){F(mo,e=dc),F(ho,t),dc=e|t.baseLanes}function bo(){F(mo,dc),F(ho,ho.current)}function yo(){dc=mo.current,U(ho),U(mo)}var xo=0,vo=null,wo=null,So=null,ko=!1,Eo=!1,Co=!1,jo=0,Po=0,_o=null,Ao=0;function To(){throw Error(a(321))}function Ro(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function No(e,t,n,r,i,o){return xo=o,vo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$.H=null===e||null===e.memoizedState?Ya:qa,Co=!1,o=n(r,i),Co=!1,Eo&&(o=$o(t,n,r,i)),Lo(e),o}function Lo(e){$.H=Wa;var t=null!==wo&&null!==wo.next;if(xo=0,So=wo=vo=null,ko=!1,Po=0,_o=null,t)throw Error(a(300));null===e||Ps||null!==(e=e.dependencies)&&Ei(e)&&(Ps=!0)}function $o(e,t,n,r){vo=e;var i=0;do{if(Eo&&(_o=null),Po=0,Eo=!1,25<=i)throw Error(a(301));if(i+=1,So=wo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}$.H=Va,o=t(n,r)}while(Eo);return o}function Oo(){var e=$.H,t=e.useState()[0];return t="function"===typeof t.then?Fo(t):t,e=e.useState()[0],(null!==wo?wo.memoizedState:null)!==e&&(vo.flags|=1024),t}function zo(){var e=0!==jo;return jo=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(ko){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ko=!1}xo=0,So=wo=vo=null,Eo=!1,Po=jo=0,_o=null}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===So?vo.memoizedState=So=e:So=So.next=e,So}function Uo(){if(null===wo){var e=vo.alternate;e=null!==e?e.memoizedState:null}else e=wo.next;var t=null===So?vo.memoizedState:So.next;if(null!==t)So=t,wo=e;else{if(null===e){if(null===vo.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(wo=e).memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},null===So?vo.memoizedState=So=e:So=So.next=e}return So}function Fo(e){var t=Po;return Po+=1,null===_o&&(_o=[]),e=Xi(_o,e,t),t=vo,null===(null===So?t.memoizedState:So.next)&&(t=t.alternate,$.H=null===t||null===t.memoizedState?Ya:qa),e}function Bo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Fo(e);if(e.$$typeof===w)return ji(e)}throw Error(a(438,String(e)))}function Ho(e){var t=null,n=vo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=vo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},vo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_;return t.index++,n}function Go(e,t){return"function"===typeof t?t(e):t}function Wo(e){return Yo(Uo(),wo,e)}function Yo(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,null===i)e.memoizedState=o;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(oc&f)===f:(xo&f)===f){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Mi&&(d=!0);else{if((xo&p)===p){u=u.next,p===Mi&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,s=o):c=c.next=f,vo.lanes|=p,pc|=p}f=u.action,Co&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=o):c=c.next=p,vo.lanes|=f,pc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?s=o:c.next=l,!Kn(o,e.memoizedState)&&(Ps=!0,d&&null!==(n=Di)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=c,r.lastRenderedState=o}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qo(e){var t=Uo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);Kn(o,t.memoizedState)||(Ps=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=vo,i=Uo(),o=oi;if(o){if(void 0===n)throw Error(a(407));n=n()}else n=t();var s=!Kn((wo||i).memoizedState,n);if(s&&(i.memoizedState=n,Ps=!0),i=i.queue,ba(2048,8,Xo.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==So&&1&So.memoizedState.tag){if(r.flags|=2048,ha(9,{destroy:void 0,resource:void 0},Qo.bind(null,r,i,n,t),null),null===rc)throw Error(a(349));o||0!==(124&xo)||Ko(r,t,n)}return n}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=vo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},vo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Qo(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Zo(e)}function Xo(e,t,n){return n(function(){Jo(t)&&Zo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch(r){return!0}}function Zo(e){var t=Rr(e,2);null!==t&&zc(t,e,2)}function ea(e){var t=Io();if("function"===typeof e){var n=e;if(e=n(),Co){fe(!0);try{n()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},t}function ta(e,t,n,r){return e.baseState=n,Yo(e,wo,"function"===typeof r?r:Go)}function na(e,t,n,r,i){if(Ba(e))throw Error(a(485));if(null!==(e=t.action)){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==$.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,ra(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ra(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var o=$.T,a={};$.T=a;try{var s=n(i,r),l=$.S;null!==l&&l(a,s),ia(e,t,s)}catch(c){aa(e,t,c)}finally{$.T=o}}else try{ia(e,t,o=n(i,r))}catch(u){aa(e,t,u)}}function ia(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){oa(e,t,n)},function(n){return aa(e,t,n)}):oa(e,t,n)}function oa(e,t,n){t.status="fulfilled",t.value=n,sa(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ra(e,n)))}function aa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,sa(t),t=t.next}while(t!==r)}e.action=null}function sa(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function la(e,t){return t}function ca(e,t){if(oi){var n=rc.formState;if(null!==n){e:{var r=vo;if(oi){if(ii){t:{for(var i=ii,o=si;8!==i.nodeType;){if(!o){i=null;break t}if(null===(i=bd(i.nextSibling))){i=null;break t}}i="F!"===(o=i.data)||"F"===o?i:null}if(i){ii=bd(i.nextSibling),r="F!"===i.data;break e}}ci(r)}r=!1}r&&(t=n[0])}}return(n=Io()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n.queue=r,n=Ia.bind(null,vo,r),r.dispatch=n,r=ea(!1),o=Fa.bind(null,vo,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Io()).queue=i,n=na.bind(null,vo,i,o,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ua(e){return da(Uo(),wo,e)}function da(e,t,n){if(t=Yo(e,t,la)[0],e=Wo(Go)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Fo(t)}catch(a){if(a===Wi)throw qi;throw a}else r=t;var i=(t=Uo()).queue,o=i.dispatch;return n!==t.memoizedState&&(vo.flags|=2048,ha(9,{destroy:void 0,resource:void 0},fa.bind(null,i,n),null)),[r,o,e]}function fa(e,t){e.action=t}function pa(e){var t=Uo(),n=wo;if(null!==n)return da(t,n,e);Uo(),t=t.memoizedState;var r=(n=Uo()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ha(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=vo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},vo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ma(){return Uo().memoizedState}function ga(e,t,n,r){var i=Io();r=void 0===r?null:r,vo.flags|=e,i.memoizedState=ha(1|t,{destroy:void 0,resource:void 0},n,r)}function ba(e,t,n,r){var i=Uo();r=void 0===r?null:r;var o=i.memoizedState.inst;null!==wo&&null!==r&&Ro(r,wo.memoizedState.deps)?i.memoizedState=ha(t,o,n,r):(vo.flags|=e,i.memoizedState=ha(1|t,o,n,r))}function ya(e,t){ga(8390656,8,e,t)}function xa(e,t){ba(2048,8,e,t)}function va(e,t){return ba(4,2,e,t)}function wa(e,t){return ba(4,4,e,t)}function Sa(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ka(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ba(4,4,Sa.bind(null,t,e),n)}function Ea(){}function Ca(e,t){var n=Uo();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Ro(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ja(e,t){var n=Uo();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Ro(t,r[1]))return r[0];if(r=e(),Co){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r}function Pa(e,t,n){return void 0===n||0!==(1073741824&xo)?e.memoizedState=t:(e.memoizedState=n,e=Oc(),vo.lanes|=e,pc|=e,n)}function _a(e,t,n,r){return Kn(n,t)?n:null!==ho.current?(e=Pa(e,n,r),Kn(e,t)||(Ps=!0),e):0===(42&xo)?(Ps=!0,e.memoizedState=n):(e=Oc(),vo.lanes|=e,pc|=e,t)}function Aa(e,t,n,r,i){var o=O.p;O.p=0!==o&&8>o?o:8;var a=$.T,s={};$.T=s,Fa(e,!1,t,n);try{var l=i(),c=$.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)Ua(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(l,r),$c());else Ua(e,t,r,$c())}catch(u){Ua(e,t,{then:function(){},status:"rejected",reason:u},$c())}finally{O.p=o,$.T=a}}function Ta(){}function Ra(e,t,n,r){if(5!==e.tag)throw Error(a(476));var i=Na(e).queue;Aa(e,i,t,z,null===n?Ta:function(){return La(e),n(r)})}function Na(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function La(e){Ua(e,Na(e).next.queue,{},$c())}function $a(){return ji(Vd)}function Oa(){return Uo().memoizedState}function za(){return Uo().memoizedState}function Ma(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=$c(),r=oo(t,e=io(n),n);return null!==r&&(zc(r,t,n),ao(r,t,n)),t={cache:Li()},void(e.payload=t)}t=t.return}}function Da(e,t,n){var r=$c();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ba(e)?Ha(t,n):null!==(n=Tr(e,t,n,r))&&(zc(n,e,r),Ga(n,t,r))}function Ia(e,t,n){Ua(e,t,n,$c())}function Ua(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ba(e))Ha(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Kn(s,a))return Ar(e,t,i,0),null===rc&&_r(),!1}catch(l){}if(null!==(n=Tr(e,t,i,r)))return zc(n,e,r),Ga(n,t,r),!0}return!1}function Fa(e,t,n,r){if(r={lane:2,revertLane:Au(),action:r,hasEagerState:!1,eagerState:null,next:null},Ba(e)){if(t)throw Error(a(479))}else null!==(t=Tr(e,n,r,2))&&zc(t,e,2)}function Ba(e){var t=e.alternate;return e===vo||null!==t&&t===vo}function Ha(e,t){Eo=ko=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ga(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}var Wa={readContext:ji,use:Bo,useCallback:To,useContext:To,useEffect:To,useImperativeHandle:To,useLayoutEffect:To,useInsertionEffect:To,useMemo:To,useReducer:To,useRef:To,useState:To,useDebugValue:To,useDeferredValue:To,useTransition:To,useSyncExternalStore:To,useId:To,useHostTransitionStatus:To,useFormState:To,useActionState:To,useOptimistic:To,useMemoCache:To,useCacheRefresh:To},Ya={readContext:ji,use:Bo,useCallback:function(e,t){return Io().memoizedState=[e,void 0===t?null:t],e},useContext:ji,useEffect:ya,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ga(4194308,4,Sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){ga(4,2,e,t)},useMemo:function(e,t){var n=Io();t=void 0===t?null:t;var r=e();if(Co){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Io();if(void 0!==n){var i=n(t);if(Co){fe(!0);try{n(t)}finally{fe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Da.bind(null,vo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Io().memoizedState=e},useState:function(e){var t=(e=ea(e)).queue,n=Ia.bind(null,vo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ea,useDeferredValue:function(e,t){return Pa(Io(),e,t)},useTransition:function(){var e=ea(!1);return e=Aa.bind(null,vo,e.queue,!0,!1),Io().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=vo,i=Io();if(oi){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===rc)throw Error(a(349));0!==(124&oc)||Ko(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ya(Xo.bind(null,r,o,e),[e]),r.flags|=2048,ha(9,{destroy:void 0,resource:void 0},Qo.bind(null,r,o,n,t),null),n},useId:function(){var e=Io(),t=rc.identifierPrefix;if(oi){var n=Jr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-pe(Xr)-1)).toString(32)+n),0<(n=jo++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Ao++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:$a,useFormState:ca,useActionState:ca,useOptimistic:function(e){var t=Io();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fa.bind(null,vo,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ho,useCacheRefresh:function(){return Io().memoizedState=Ma.bind(null,vo)}},qa={readContext:ji,use:Bo,useCallback:Ca,useContext:ji,useEffect:xa,useImperativeHandle:ka,useInsertionEffect:va,useLayoutEffect:wa,useMemo:ja,useReducer:Wo,useRef:ma,useState:function(){return Wo(Go)},useDebugValue:Ea,useDeferredValue:function(e,t){return _a(Uo(),wo.memoizedState,e,t)},useTransition:function(){var e=Wo(Go)[0],t=Uo().memoizedState;return["boolean"===typeof e?e:Fo(e),t]},useSyncExternalStore:Vo,useId:Oa,useHostTransitionStatus:$a,useFormState:ua,useActionState:ua,useOptimistic:function(e,t){return ta(Uo(),0,e,t)},useMemoCache:Ho,useCacheRefresh:za},Va={readContext:ji,use:Bo,useCallback:Ca,useContext:ji,useEffect:xa,useImperativeHandle:ka,useInsertionEffect:va,useLayoutEffect:wa,useMemo:ja,useReducer:qo,useRef:ma,useState:function(){return qo(Go)},useDebugValue:Ea,useDeferredValue:function(e,t){var n=Uo();return null===wo?Pa(n,e,t):_a(n,wo.memoizedState,e,t)},useTransition:function(){var e=qo(Go)[0],t=Uo().memoizedState;return["boolean"===typeof e?e:Fo(e),t]},useSyncExternalStore:Vo,useId:Oa,useHostTransitionStatus:$a,useFormState:pa,useActionState:pa,useOptimistic:function(e,t){var n=Uo();return null!==wo?ta(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ho,useCacheRefresh:za},Ka=null,Qa=0;function Xa(e){var t=Qa;return Qa+=1,null===Ka&&(Ka=[]),Xi(Ka,e,t)}function Ja(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Za(e,t){if(t.$$typeof===p)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Dr(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===j&&es(o)===t.type)?(Ja(t=i(t,n.props),n),t.return=e,t):(Ja(t=Ur(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hr(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Fr(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Ja(n=Ur(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Hr(t,e.mode,n)).return=e,t;case j:return f(e,t=(0,t._init)(t._payload),n)}if(L(t)||T(t))return(t=Fr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,Xa(t),n);if(t.$$typeof===w)return f(e,Pi(e,t),n);Za(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===i?c(e,t,n,r):null;case m:return n.key===i?u(e,t,n,r):null;case j:return p(e,t,n=(i=n._init)(n._payload),r)}if(L(n)||T(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,Xa(n),r);if(n.$$typeof===w)return p(e,t,Pi(e,n),r);Za(e,n)}return null}function b(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case j:return b(e,t,n,r=(0,r._init)(r._payload),i)}if(L(r)||T(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return b(e,t,n,Xa(r),i);if(r.$$typeof===w)return b(e,t,n,Pi(t,r),i);Za(t,r)}return null}function y(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var x=u.key;null!==c;){if(c.key===x){if((x=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===j&&es(x)===c.type){n(l,c.sibling),Ja(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Fr(u.props.children,l.mode,d,u.key)).return=l,l=d):(Ja(d=Ur(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case m:e:{for(x=u.key;null!==c;){if(c.key===x){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Hr(u,l.mode,d)).return=l,l=d}return s(l);case j:return y(l,c,u=(x=u._init)(u._payload),d)}if(L(u))return function(i,a,s,l){for(var c=null,u=null,d=a,h=a=0,m=null;null!==d&&h<s.length;h++){d.index>h?(m=d,d=null):m=d.sibling;var g=p(i,d,s[h],l);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(i,d),a=o(g,a,h),null===u?c=g:u.sibling=g,u=g,d=m}if(h===s.length)return n(i,d),oi&&Zr(i,h),c;if(null===d){for(;h<s.length;h++)null!==(d=f(i,s[h],l))&&(a=o(d,a,h),null===u?c=d:u.sibling=d,u=d);return oi&&Zr(i,h),c}for(d=r(d);h<s.length;h++)null!==(m=b(d,i,h,s[h],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?h:m.key),a=o(m,a,h),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach(function(e){return t(i,e)}),oi&&Zr(i,h),c}(l,c,u,d);if(T(u)){if("function"!==typeof(x=T(u)))throw Error(a(150));return function(i,s,l,c){if(null==l)throw Error(a(151));for(var u=null,d=null,h=s,m=s=0,g=null,y=l.next();null!==h&&!y.done;m++,y=l.next()){h.index>m?(g=h,h=null):g=h.sibling;var x=p(i,h,y.value,c);if(null===x){null===h&&(h=g);break}e&&h&&null===x.alternate&&t(i,h),s=o(x,s,m),null===d?u=x:d.sibling=x,d=x,h=g}if(y.done)return n(i,h),oi&&Zr(i,m),u;if(null===h){for(;!y.done;m++,y=l.next())null!==(y=f(i,y.value,c))&&(s=o(y,s,m),null===d?u=y:d.sibling=y,d=y);return oi&&Zr(i,m),u}for(h=r(h);!y.done;m++,y=l.next())null!==(y=b(h,i,m,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?m:y.key),s=o(y,s,m),null===d?u=y:d.sibling=y,d=y);return e&&h.forEach(function(e){return t(i,e)}),oi&&Zr(i,m),u}(l,c,u=x.call(u),d)}if("function"===typeof u.then)return y(l,c,Xa(u),d);if(u.$$typeof===w)return y(l,c,Pi(l,u),d);Za(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=Br(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{Qa=0;var i=y(e,t,n,r);return Ka=null,i}catch(a){if(a===Wi||a===qi)throw a;var o=zr(29,a,null,e.mode);return o.lanes=r,o.return=e,o}}}var ns=ts(!0),rs=ts(!1),is=I(null),os=null;function as(e){var t=e.alternate;F(us,1&us.current),F(is,e),null===os&&(null===t||null!==ho.current||null!==t.memoizedState)&&(os=e)}function ss(e){if(22===e.tag){if(F(us,us.current),F(is,e),null===os){var t=e.alternate;null!==t&&null!==t.memoizedState&&(os=e)}}else ls()}function ls(){F(us,us.current),F(is,is.current)}function cs(e){U(is),os===e&&(os=null),U(us)}var us=I(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ps={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$c(),i=io(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=oo(e,i,r))&&(zc(t,e,r),ao(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$c(),i=io(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=oo(e,i,r))&&(zc(t,e,r),ao(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$c(),r=io(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=oo(e,r,n))&&(zc(t,e,n),ao(t,e,n))}};function hs(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!Qn(n,r)||!Qn(i,o))}function ms(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var bs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function ys(e){bs(e)}function xs(e){console.error(e)}function vs(e){bs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ss(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ks(e,t,n){return(n=io(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Es(e){return(e=io(e)).tag=3,e}function Cs(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var o=r.value;e.payload=function(){return i(o)},e.callback=function(){Ss(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){Ss(t,n,r),"function"!==typeof i&&(null===Ec?Ec=new Set([this]):Ec.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var js=Error(a(461)),Ps=!1;function _s(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function As(e,t,n,r,i){n=n.render;var o=t.ref;if("ref"in r){var a={};for(var s in r)"ref"!==s&&(a[s]=r[s])}else a=r;return Ci(t),r=No(e,t,n,a,o,i),s=zo(),null===e||Ps?(oi&&s&&ti(t),t.flags|=1,_s(e,t,r,i),t.child):(Mo(e,t,i),Ks(e,t,i))}function Ts(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Mr(o)||void 0!==o.defaultProps||null!==n.compare?((e=Ur(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Rs(e,t,o,r,i))}if(o=e.child,!Qs(e,i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:Qn)(a,r)&&e.ref===t.ref)return Ks(e,t,i)}return t.flags|=1,(e=Dr(o,r)).ref=t.ref,e.return=t,t.child=e}function Rs(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(Qn(o,r)&&e.ref===t.ref){if(Ps=!1,t.pendingProps=r=o,!Qs(e,i))return t.lanes=e.lanes,Ks(e,t,i);0!==(131072&e.flags)&&(Ps=!0)}}return Os(e,t,n,r,i)}function Ns(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(i=t.child=e.child,o=0;null!==i;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return Ls(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ls(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Hi(0,null!==o?o.cachePool:null),null!==o?go(t,o):bo(),ss(t)}else null!==o?(Hi(0,o.cachePool),go(t,o),ls(),t.memoizedState=null):(null!==e&&Hi(0,null),bo(),ls());return _s(e,t,i,n),t.child}function Ls(e,t,n,r){var i=Bi();return i=null===i?null:{parent:Ni._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Hi(0,null),bo(),ss(t),null!==e&&ki(e,t,r,!0),null}function $s(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Os(e,t,n,r,i){return Ci(t),n=No(e,t,n,r,void 0,i),r=zo(),null===e||Ps?(oi&&r&&ti(t),t.flags|=1,_s(e,t,n,i),t.child):(Mo(e,t,i),Ks(e,t,i))}function zs(e,t,n,r,i,o){return Ci(t),t.updateQueue=null,n=$o(t,r,n,i),Lo(e),r=zo(),null===e||Ps?(oi&&r&&ti(t),t.flags|=1,_s(e,t,n,o),t.child):(Mo(e,t,o),Ks(e,t,o))}function Ms(e,t,n,r,i){if(Ci(t),null===t.stateNode){var o=$r,a=n.contextType;"object"===typeof a&&null!==a&&(o=ji(a)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=ps,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},no(t),a=n.contextType,o.context="object"===typeof a&&null!==a?ji(a):$r,o.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(fs(t,n,a,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(a=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),a!==o.state&&ps.enqueueReplaceState(o,o.state,null),uo(t,r,o,i),co(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var s=t.memoizedProps,l=gs(n,s);o.props=l;var c=o.context,u=n.contextType;a=$r,"object"===typeof u&&null!==u&&(a=ji(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s||c!==a)&&ms(t,o,r,a),to=!1;var f=t.memoizedState;o.state=f,uo(t,r,o,i),co(),c=t.memoizedState,s||f!==c||to?("function"===typeof d&&(fs(t,n,d,r),c=t.memoizedState),(l=to||hs(t,n,l,r,f,c,a))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=a,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ro(e,t),u=gs(n,a=t.memoizedProps),o.props=u,d=t.pendingProps,f=o.context,c=n.contextType,l=$r,"object"===typeof c&&null!==c&&(l=ji(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(a!==d||f!==l)&&ms(t,o,r,l),to=!1,f=t.memoizedState,o.state=f,uo(t,r,o,i),co();var p=t.memoizedState;a!==d||f!==p||to||null!==e&&null!==e.dependencies&&Ei(e.dependencies)?("function"===typeof s&&(fs(t,n,s,r),p=t.memoizedState),(u=to||hs(t,n,u,r,f,p,l)||null!==e&&null!==e.dependencies&&Ei(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!==typeof o.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,$s(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,i),t.child=ns(t,null,n,i)):_s(e,t,n,i),t.memoizedState=o.state,e=t.child):e=Ks(e,t,i),e}function Ds(e,t,n,r){return pi(),t.flags|=256,_s(e,t,n,r),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Us(e){return{baseLanes:e,cachePool:Gi()}}function Fs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Bs(e,t,n){var r,i=t.pendingProps,o=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(oi){if(o?as(t):ls(),oi){var l,c=ii;if(l=c){e:{for(l=c,c=si;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=bd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Qr?{id:Xr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(l=zr(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ri=t,ii=null,l=!0):l=!1}l||ci(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=i.children,i=i.fallback,o?(ls(),c=Gs({mode:"hidden",children:c},o=t.mode),i=Fr(i,o,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,(o=t.child).memoizedState=Us(n),o.childLanes=Fs(e,r,n),t.memoizedState=Is,i):(as(t),Hs(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(as(t),t.flags&=-257,t=Ws(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),o=i.fallback,c=t.mode,i=Gs({mode:"visible",children:i.children},c),(o=Fr(o,c,n,null)).flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ns(t,e.child,null,n),(i=t.child).memoizedState=Us(n),i.childLanes=Fs(e,r,n),t.memoizedState=Is,t=o);else if(as(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(a(419))).stack="",i.digest=r,mi({value:i,source:null,stack:null}),t=Ws(e,t,n)}else if(Ps||ki(e,t,n,!1),r=0!==(n&e.childLanes),Ps||r){if(null!==(r=rc)&&(0!==(i=0!==((i=0!==(42&(i=n&-n))?1:_e(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,Rr(e,i),zc(r,e,i),js;"$?"===c.data||qc(),t=Ws(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ii=bd(c.nextSibling),ri=t,oi=!0,ai=null,si=!1,null!==e&&(Vr[Kr++]=Xr,Vr[Kr++]=Jr,Vr[Kr++]=Qr,Xr=e.id,Jr=e.overflow,Qr=t),(t=Hs(t,i.children)).flags|=4096);return t}return o?(ls(),o=i.fallback,c=t.mode,u=(l=e.child).sibling,(i=Dr(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?o=Dr(u,o):(o=Fr(o,c,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,null===(c=e.child.memoizedState)?c=Us(n):(null!==(l=c.cachePool)?(u=Ni._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Gi(),c={baseLanes:c.baseLanes|n,cachePool:l}),o.memoizedState=c,o.childLanes=Fs(e,r,n),t.memoizedState=Is,i):(as(t),e=(n=e.child).sibling,(n=Dr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hs(e,t){return(t=Gs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Gs(e,t){return(e=zr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ws(e,t,n){return ns(t,e.child,null,n),(e=Hs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wi(e.return,t,n)}function qs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(_s(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ys(e,n,t);else if(19===e.tag)Ys(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(F(us,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ds(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qs(t,!0,n,null,o);break;case"together":qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ks(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),pc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ki(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Dr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Qs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ei(e))}function Xs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ps=!0;else{if(!Qs(e,n)&&0===(128&t.flags))return Ps=!1,function(e,t,n){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),xi(0,Ni,e.memoizedState.cache),pi();break;case 27:case 5:V(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:xi(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(as(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Bs(e,t,n):(as(t),null!==(e=Ks(e,t,n))?e.sibling:null);as(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ki(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return Vs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,Ns(e,t,n);case 24:xi(0,Ni,e.memoizedState.cache)}return Ks(e,t,n)}(e,t,n);Ps=0!==(131072&e.flags)}else Ps=!1,oi&&0!==(1048576&t.flags)&&ei(t,qr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===S){t.tag=11,t=As(null,t,r,e,n);break e}if(i===C){t.tag=14,t=Ts(null,t,r,e,n);break e}}throw t=N(r)||r,Error(a(306,t,""))}Mr(r)?(e=gs(r,e),t.tag=1,t=Ms(null,t,r,e,n)):(t.tag=0,t=Os(null,t,r,e,n))}return t;case 0:return Os(e,t,t.type,t.pendingProps,n);case 1:return Ms(e,t,r=t.type,i=gs(r,t.pendingProps),n);case 3:e:{if(Y(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,ro(e,t),uo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,xi(0,Ni,r),r!==o.cache&&Si(t,[Ni],n,!0),co(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ds(e,t,r,n);break e}if(r!==i){mi(i=Er(Error(a(424)),t)),t=Ds(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ii=bd(e.firstChild),ri=t,oi=!0,ai=null,si=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),r===i){t=Ks(e,t,n);break e}_s(e,t,r,n)}t=t.child}return t;case 26:return $s(e,t),null===e?(n=_d(t.type,null,t.pendingProps,null))?t.memoizedState=n:oi||(n=t.type,e=t.pendingProps,(r=rd(G.current).createElement(n))[Ne]=t,r[Le]=e,ed(r,n,e),We(r),t.stateNode=r):t.memoizedState=_d(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return V(t),null===e&&oi&&(r=t.stateNode=vd(t.type,t.pendingProps,G.current),ri=t,si=!0,i=ii,pd(t.type)?(yd=i,ii=bd(r.firstChild)):ii=i),_s(e,t,t.pendingProps.children,n),$s(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&oi&&((i=r=ii)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ie])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===o)return e}if(null===(e=bd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,si))?(t.stateNode=r,ri=t,ii=bd(r.firstChild),si=!1,i=!0):i=!1),i||ci(t)),V(t),i=t.type,o=t.pendingProps,s=null!==e?e.memoizedProps:null,r=o.children,ad(i,o)?r=null:null!==s&&ad(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=No(e,t,Oo,null,null,n),Vd._currentValue=i),$s(e,t),_s(e,t,r,n),t.child;case 6:return null===e&&oi&&((e=n=ii)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=bd(e.nextSibling)))return null}return e}(n,t.pendingProps,si))?(t.stateNode=n,ri=t,ii=null,e=!0):e=!1),e||ci(t)),null;case 13:return Bs(e,t,n);case 4:return Y(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):_s(e,t,r,n),t.child;case 11:return As(e,t,t.type,t.pendingProps,n);case 7:return _s(e,t,t.pendingProps,n),t.child;case 8:case 12:return _s(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,xi(0,t.type,r.value),_s(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ci(t),r=r(i=ji(i)),t.flags|=1,_s(e,t,r,n),t.child;case 14:return Ts(e,t,t.type,t.pendingProps,n);case 15:return Rs(e,t,t.type,t.pendingProps,n);case 19:return Vs(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Gs(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Dr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ns(e,t,n);case 24:return Ci(t),r=ji(Ni),null===e?(null===(i=Bi())&&(i=rc,o=Li(),i.pooledCache=o,o.refCount++,null!==o&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},no(t),xi(0,Ni,i)):(0!==(e.lanes&n)&&(ro(e,t),uo(t,null,null,n),co()),i=e.memoizedState,o=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),xi(0,Ni,r)):(r=o.cache,xi(0,Ni,r),r!==i.cache&&Si(t,[Ni],n,!0))),_s(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Fd(t)){if(null!==(t=is.current)&&((4194048&oc)===oc?null!==os:(62914560&oc)!==oc&&0===(536870912&oc)||t!==os))throw Ji=Vi,Yi;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,bc|=t)}function tl(e,t){if(!oi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),vi(Ni),q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fi(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,hi())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Js(t),nl(t),t.flags&=-16777217),null;case 27:K(t),n=G.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}e=B.current,fi(t)?ui(t):(e=vd(i,r,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(K(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}if(e=B.current,fi(t))ui(t);else{switch(i=rd(G.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Ne]=t,e[Le]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=G.current,fi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ri))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Ne]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Qu(e.nodeValue,n)))||ci(t)}else(e=rd(e).createTextNode(r))[Ne]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=fi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[Ne]=t}else pi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),i=!1}else i=hi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var o=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return q(),null===e&&Uu(t.stateNode.containerInfo),nl(t),null;case 10:return vi(t.type),nl(t),null;case 19:if(U(us),null===(i=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(o=i.rendering))if(r)tl(i,!1);else{if(0!==fc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=ds(e))){for(t.flags|=128,tl(i,!1),e=o.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ir(n,e),n=n.sibling;return F(us,1&us.current|2),t.child}e=e.sibling}null!==i.tail&&te()>Sc&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(o))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!o.alternate&&!oi)return nl(t),null}else 2*te()-i.renderingStartTime>Sc&&536870912!==n&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=i.last)?e.sibling=o:t.child=o,i.last=o)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,e=us.current,F(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),yo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&U(Fi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vi(Ni),nl(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function il(e,t){switch(ni(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return vi(Ni),q(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return K(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return U(us),null;case 4:return q(),null;case 10:return vi(t.type),null;case 22:case 23:return cs(t),yo(),null!==e&&U(Fi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return vi(Ni),null;default:return null}}function ol(e,t){switch(ni(t),t.tag){case 3:vi(Ni),q();break;case 26:case 27:case 5:K(t);break;case 4:q();break;case 13:cs(t);break;case 19:U(us);break;case 10:vi(t.type);break;case 22:case 23:cs(t),yo(),null!==e&&U(Fi);break;case 24:vi(Ni)}}function al(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var o=n.create,a=n.inst;r=o(),a.destroy=r}n=n.next}while(n!==i)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var o=i.next;r=o;do{if((r.tag&e)===e){var a=r.inst,s=a.destroy;if(void 0!==s){a.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){uu(i,l,u)}}}r=r.next}while(r!==o)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{po(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){uu(e,t,i)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){uu(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){uu(e,t,o)}else n.current=null}function fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){uu(e,e.return,i)}}function pl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,s=null,l=null,c=null,u=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":c=f;default:r.hasOwnProperty(h)||Ju(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":o=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":s=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(a(137,t));break;default:h!==f&&Ju(e,t,p,h,r,f)}}return void gt(e,s,l,c,u,d,o,i);case"select":for(o in h=s=l=p=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(o)||Ju(e,t,o,null,r,c)}for(i in r)if(o=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=o||null!=c))switch(i){case"value":p=o;break;case"defaultValue":l=o;break;case"multiple":s=o;default:o!==c&&Ju(e,t,i,o,r,c)}return t=l,n=s,r=h,void(null!=p?xt(e,!!n,p,!1):!!r!==!!n&&(null!=t?xt(e,!!n,t,!0):xt(e,!!n,n?[]:"",!1)));case"textarea":for(l in h=p=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Ju(e,t,l,null,r,i)}for(s in r)if(i=r[s],o=n[s],r.hasOwnProperty(s)&&(null!=i||null!=o))switch(s){case"value":p=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(a(91));break;default:i!==o&&Ju(e,t,s,i,r,o)}return void vt(e,p,h);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Ju(e,t,m,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Ju(e,t,c,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&Ju(e,t,g,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(a(137,t));break;default:Ju(e,t,u,p,r,h)}return;default:if(jt(t)){for(var b in n)p=n[b],n.hasOwnProperty(b)&&void 0!==p&&!r.hasOwnProperty(b)&&Zu(e,t,b,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Zu(e,t,d,p,r,h);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!r.hasOwnProperty(y)&&Ju(e,t,y,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||Ju(e,t,f,p,r,h)}(r,e.type,n,t),r[Le]=t}catch(i){uu(e,e.return,i)}}function hl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function ml(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xu));else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(bl(e,t,n),e=e.sibling;null!==e;)bl(e,t,n),e=e.sibling}function yl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ed(t,r,n),t[Ne]=e,t[Le]=n}catch(o){uu(e,e.return,o)}}var xl=!1,vl=!1,wl=!1,Sl="function"===typeof WeakSet?WeakSet:Set,kl=null;function El(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ml(e,n),4&r&&al(5,n);break;case 1:if(Ml(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){uu(n,n.return,a)}else{var i=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(Ml(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{po(e,t)}catch(a){uu(n,n.return,a)}}break;case 27:null===t&&4&r&&yl(n);case 26:case 5:Ml(e,n),null===t&&4&r&&fl(n),512&r&&ul(n,n.return);break;case 12:Ml(e,n);break;case 13:Ml(e,n),4&r&&Tl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||xl)){t=null!==t&&null!==t.memoizedState||vl,i=xl;var o=vl;xl=r,(vl=t)&&!o?Il(e,n,0!==(8772&n.subtreeFlags)):Ml(e,n),xl=i,vl=o}break;case 30:break;default:Ml(e,n)}}function Cl(e){var t=e.alternate;null!==t&&(e.alternate=null,Cl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ue(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var jl=null,Pl=!1;function _l(e,t,n){for(n=n.child;null!==n;)Al(e,t,n),n=n.sibling}function Al(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(o){}switch(n.tag){case 26:vl||dl(n,t),_l(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:vl||dl(n,t);var r=jl,i=Pl;pd(n.type)&&(jl=n.stateNode,Pl=!1),_l(e,t,n),wd(n.stateNode),jl=r,Pl=i;break;case 5:vl||dl(n,t);case 6:if(r=jl,i=Pl,jl=null,_l(e,t,n),Pl=i,null!==(jl=r))if(Pl)try{(9===jl.nodeType?jl.body:"HTML"===jl.nodeName?jl.ownerDocument.body:jl).removeChild(n.stateNode)}catch(a){uu(n,t,a)}else try{jl.removeChild(n.stateNode)}catch(a){uu(n,t,a)}break;case 18:null!==jl&&(Pl?(hd(9===(e=jl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),_f(e)):hd(jl,n.stateNode));break;case 4:r=jl,i=Pl,jl=n.stateNode.containerInfo,Pl=!0,_l(e,t,n),jl=r,Pl=i;break;case 0:case 11:case 14:case 15:vl||sl(2,n,t),vl||sl(4,n,t),_l(e,t,n);break;case 1:vl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),_l(e,t,n);break;case 21:_l(e,t,n);break;case 22:vl=(r=vl)||null!==n.memoizedState,_l(e,t,n),vl=r;break;default:_l(e,t,n)}}function Tl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{_f(e)}catch(n){uu(t,t.return,n)}}function Rl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Sl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Sl),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Nl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(pd(l.type)){jl=l.stateNode,Pl=!1;break e}break;case 5:jl=l.stateNode,Pl=!1;break e;case 3:case 4:jl=l.stateNode.containerInfo,Pl=!0;break e}l=l.return}if(null===jl)throw Error(a(160));Al(o,s,i),jl=null,Pl=!1,null!==(o=i.alternate)&&(o.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)$l(t,e),t=t.sibling}var Ll=null;function $l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nl(t,e),Ol(e),4&r&&(sl(3,e,e.return),al(3,e),sl(5,e,e.return));break;case 1:Nl(t,e),Ol(e),512&r&&(vl||null===n||dl(n,n.return)),64&r&&xl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Ll;if(Nl(t,e),Ol(e),512&r&&(vl||null===n||dl(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(o=i.getElementsByTagName("title")[0])||o[Ie]||o[Ne]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=i.createElement(r),i.head.insertBefore(o,i.querySelector("head > title"))),ed(o,r,n),o[Ne]=e,We(o),r=o;break e;case"link":var s=Id("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((o=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(o=i.createElement(r),r,n),i.head.appendChild(o);break;case"meta":if(s=Id("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((o=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(o=i.createElement(r),r,n),i.head.appendChild(o);break;default:throw Error(a(468,r))}o[Ne]=e,We(o),r=o}e.stateNode=r}else Ud(i,e.type,e.stateNode);else e.stateNode=$d(i,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?Ud(i,e.type,e.stateNode):$d(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&pl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Nl(t,e),Ol(e),512&r&&(vl||null===n||dl(n,n.return)),null!==n&&4&r&&pl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Nl(t,e),Ol(e),512&r&&(vl||null===n||dl(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(h){uu(e,e.return,h)}}4&r&&null!=e.stateNode&&pl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(wl=!0);break;case 6:if(Nl(t,e),Ol(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){uu(e,e.return,h)}}break;case 3:if(Dd=null,i=Ll,Ll=Ed(t.containerInfo),Nl(t,e),Ll=i,Ol(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{_f(t.containerInfo)}catch(h){uu(e,e.return,h)}wl&&(wl=!1,zl(e));break;case 4:r=Ll,Ll=Ed(e.stateNode.containerInfo),Nl(t,e),Ol(e),Ll=r;break;case 12:default:Nl(t,e),Ol(e);break;case 13:Nl(t,e),Ol(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Rl(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=xl,d=vl;if(xl=u||i,vl=d||c,Nl(t,e),vl=d,xl=u,Ol(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||xl||vl||Dl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(o=c.stateNode,i)"function"===typeof(s=o.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var f=c.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;l.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(h){uu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(h){uu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Rl(e,n))));break;case 19:Nl(t,e),Ol(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Rl(e,r)));case 30:case 21:}}function Ol(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hl(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var i=n.stateNode;bl(e,ml(e),i);break;case 5:var o=n.stateNode;32&n.flags&&(St(o,""),n.flags&=-33),bl(e,ml(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,ml(e),s);break;default:throw Error(a(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function zl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;zl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ml(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)El(e,t.alternate,t),t=t.sibling}function Dl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Dl(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Dl(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Dl(t);break;case 22:null===t.memoizedState&&Dl(t);break;default:Dl(t)}e=e.sibling}}function Il(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,o=t,a=o.flags;switch(o.tag){case 0:case 11:case 15:Il(i,o,n),al(4,o);break;case 1:if(Il(i,o,n),"function"===typeof(i=(r=o).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(i=(r=o).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)fo(l[i],s)}catch(c){uu(r,r.return,c)}}n&&64&a&&ll(o),ul(o,o.return);break;case 27:yl(o);case 26:case 5:Il(i,o,n),n&&null===r&&4&a&&fl(o),ul(o,o.return);break;case 12:Il(i,o,n);break;case 13:Il(i,o,n),n&&4&a&&Tl(i,o);break;case 22:null===o.memoizedState&&Il(i,o,n),ul(o,o.return);break;case 30:break;default:Il(i,o,n)}t=t.sibling}}function Ul(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&$i(n))}function Fl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&$i(e))}function Bl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hl(e,t,n,r),t=t.sibling}function Hl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Bl(e,t,n,r),2048&i&&al(9,t);break;case 1:case 13:default:Bl(e,t,n,r);break;case 3:Bl(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&$i(e)));break;case 12:if(2048&i){Bl(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,a=o.id,s=o.onPostCommit;"function"===typeof s&&s(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else Bl(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,a=t.alternate,null!==t.memoizedState?2&o._visibility?Bl(e,t,n,r):Wl(e,t):2&o._visibility?Bl(e,t,n,r):(o._visibility|=2,Gl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&Ul(a,t);break;case 24:Bl(e,t,n,r),2048&i&&Fl(t.alternate,t)}}function Gl(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,a=t,s=n,l=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:Gl(o,a,s,l,i),al(8,a);break;case 23:break;case 22:var u=a.stateNode;null!==a.memoizedState?2&u._visibility?Gl(o,a,s,l,i):Wl(o,a):(u._visibility|=2,Gl(o,a,s,l,i)),i&&2048&c&&Ul(a.alternate,a);break;case 24:Gl(o,a,s,l,i),i&&2048&c&&Fl(a.alternate,a);break;default:Gl(o,a,s,l,i)}t=t.sibling}}function Wl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Wl(n,r),2048&i&&Ul(r.alternate,r);break;case 24:Wl(n,r),2048&i&&Fl(r.alternate,r);break;default:Wl(n,r)}t=t.sibling}}var Yl=8192;function ql(e){if(e.subtreeFlags&Yl)for(e=e.child;null!==e;)Vl(e),e=e.sibling}function Vl(e){switch(e.tag){case 26:ql(e),e.flags&Yl&&null!==e.memoizedState&&function(e,t,n){if(null===Bd)throw Error(a(475));var r=Bd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=Ad(n.href),o=e.querySelector(Td(i));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Gd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,void We(o);o=e.ownerDocument||e,n=Rd(n),(i=Sd.get(i))&&zd(n,i),We(o=o.createElement("link"));var s=o;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ed(o,"link",n),t.instance=o}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Gd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ll,e.memoizedState,e.memoizedProps);break;case 5:default:ql(e);break;case 3:case 4:var t=Ll;Ll=Ed(e.stateNode.containerInfo),ql(e),Ll=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Yl,Yl=16777216,ql(e),Yl=t):ql(e))}}function Kl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ql(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Kl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xl(e),e=e.sibling}function Xl(e){switch(e.tag){case 0:case 11:case 15:Ql(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Ql(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):Ql(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Kl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==kl;){var n=kl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:$i(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,kl=r;else e:for(n=e;null!==kl;){var i=(r=kl).sibling,o=r.return;if(Cl(r),r===n){kl=null;break e}if(null!==i){i.return=o,kl=i;break e}kl=o}}}var ec={getCacheForType:function(e){var t=ji(Ni),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ic=null,oc=0,ac=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,fc=0,pc=0,hc=0,mc=0,gc=0,bc=0,yc=null,xc=null,vc=!1,wc=0,Sc=1/0,kc=null,Ec=null,Cc=0,jc=null,Pc=null,_c=0,Ac=0,Tc=null,Rc=null,Nc=0,Lc=null;function $c(){if(0!==(2&nc)&&0!==oc)return oc&-oc;if(null!==$.T){return 0!==Mi?Mi:Au()}return Te()}function Oc(){0===gc&&(gc=0===(536870912&oc)||oi?Se():536870912);var e=is.current;return null!==e&&(e.flags|=32),gc}function zc(e,t,n){(e!==rc||2!==ac&&9!==ac)&&null===e.cancelPendingCommit||(Hc(e,0),Uc(e,oc,gc,!1)),Ce(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(hc|=n),4===fc&&Uc(e,oc,gc,!1)),Su(e))}function Mc(e,t,n){if(0!==(6&nc))throw Error(a(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||ve(e,t),i=r?function(e,t){var n=nc;nc|=2;var r=Wc(),i=Yc();rc!==e||oc!==t?(kc=null,Sc=te()+500,Hc(e,t)):cc=ve(e,t);e:for(;;)try{if(0!==ac&&null!==ic){t=ic;var o=sc;t:switch(ac){case 1:ac=0,sc=null,Zc(e,t,o,1);break;case 2:case 9:if(Ki(o)){ac=0,sc=null,Jc(t);break}t=function(){2!==ac&&9!==ac||rc!==e||(ac=7),Su(e)},o.then(t,t);break e;case 3:ac=7;break e;case 4:ac=5;break e;case 7:Ki(o)?(ac=0,sc=null,Jc(t)):(ac=0,sc=null,Zc(e,t,o,7));break;case 5:var s=null;switch(ic.tag){case 26:s=ic.memoizedState;case 5:case 27:var l=ic;if(!s||Fd(s)){ac=0,sc=null;var c=l.sibling;if(null!==c)ic=c;else{var u=l.return;null!==u?(ic=u,eu(u)):ic=null}break t}}ac=0,sc=null,Zc(e,t,o,5);break;case 6:ac=0,sc=null,Zc(e,t,o,6);break;case 8:Bc(),fc=6;break e;default:throw Error(a(462))}}Qc();break}catch(d){Gc(e,d)}return yi=bi=null,$.H=r,$.A=i,nc=n,null!==ic?0:(rc=null,oc=0,_r(),fc)}(e,t):Vc(e,t,!0),o=r;;){if(0===i){cc&&!r&&Uc(e,t,0,!1);break}if(n=e.current.alternate,!o||Ic(n)){if(2===i){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=yc;var c=l.current.memoizedState.isDehydrated;if(c&&(Hc(l,s).flags|=256),2!==(s=Vc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=o,hc|=o,i=4;break e}o=xc,xc=i,null!==o&&(null===xc?xc=o:xc.push.apply(xc,o))}i=s}if(o=!1,2!==i)continue}}if(1===i){Hc(e,0),Uc(e,t,0,!0);break}e:{switch(r=e,o=i){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:Uc(r,t,gc,!lc);break e;case 2:xc=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(i=wc+300-te())){if(Uc(r,t,gc,!lc),0!==xe(r,0,!0))break e;r.timeoutHandle=ld(Dc.bind(null,r,n,xc,kc,vc,t,gc,hc,bc,lc,o,2,-0,0),i)}else Dc(r,n,xc,kc,vc,t,gc,hc,bc,lc,o,0,-0,0)}break}i=Vc(e,t,!1),o=!1}Su(e)}function Dc(e,t,n,r,i,o,s,l,c,u,d,f,p,h){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Bd={stylesheets:null,count:0,unsuspend:Hd},Vl(t),null!==(f=function(){if(null===Bd)throw Error(a(475));var e=Bd;return e.stylesheets&&0===e.count&&Yd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Yd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=f(nu.bind(null,e,t,o,n,r,i,s,l,c,d,1,p,h)),void Uc(e,o,s,!u);nu(e,t,o,n,r,i,s,l,c)}function Ic(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Kn(o(),i))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Uc(e,t,n,r){t&=~mc,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var o=31-pe(i),a=1<<o;r[o]=-1,i&=~a}0!==n&&je(e,n,t)}function Fc(){return 0!==(6&nc)||(ku(0,!1),!1)}function Bc(){if(null!==ic){if(0===ac)var e=ic.return;else yi=bi=null,Do(e=ic),Ka=null,Qa=0,e=ic;for(;null!==e;)ol(e.alternate,e),e=e.return;ic=null}}function Hc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Bc(),rc=e,ic=n=Dr(e.current,null),oc=t,ac=0,sc=null,lc=!1,cc=ve(e,t),uc=!1,bc=gc=mc=hc=pc=fc=0,xc=yc=null,vc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-pe(r),o=1<<i;t|=e[i],r&=~o}return dc=t,_r(),n}function Gc(e,t){vo=null,$.H=Wa,t===Wi||t===qi?(t=Zi(),ac=3):t===Yi?(t=Zi(),ac=4):ac=t===js?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===ic&&(fc=1,ws(e,Er(t,e.current)))}function Wc(){var e=$.H;return $.H=Wa,null===e?Wa:e}function Yc(){var e=$.A;return $.A=ec,e}function qc(){fc=4,lc||(4194048&oc)!==oc&&null!==is.current||(cc=!0),0===(134217727&pc)&&0===(134217727&hc)||null===rc||Uc(rc,oc,gc,!1)}function Vc(e,t,n){var r=nc;nc|=2;var i=Wc(),o=Yc();rc===e&&oc===t||(kc=null,Hc(e,t)),t=!1;var a=fc;e:for(;;)try{if(0!==ac&&null!==ic){var s=ic,l=sc;switch(ac){case 8:Bc(),a=6;break e;case 3:case 2:case 9:case 6:null===is.current&&(t=!0);var c=ac;if(ac=0,sc=null,Zc(e,s,l,c),n&&cc){a=0;break e}break;default:c=ac,ac=0,sc=null,Zc(e,s,l,c)}}Kc(),a=fc;break}catch(u){Gc(e,u)}return t&&e.shellSuspendCounter++,yi=bi=null,nc=r,$.H=i,$.A=o,null===ic&&(rc=null,oc=0,_r()),a}function Kc(){for(;null!==ic;)Xc(ic)}function Qc(){for(;null!==ic&&!Z();)Xc(ic)}function Xc(e){var t=Xs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zs(n,t,t.pendingProps,t.type,void 0,oc);break;case 11:t=zs(n,t,t.pendingProps,t.type.render,t.ref,oc);break;case 5:Do(t);default:ol(n,t),t=Xs(n,t=ic=Ir(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Zc(e,t,n,r){yi=bi=null,Do(t),Ka=null,Qa=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ki(t,n,i,!0),null!==(n=is.current)){switch(n.tag){case 13:return null===os?qc():null===n.alternate&&0===fc&&(fc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Vi?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,i)),!1;case 22:return n.flags|=65536,r===Vi?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,i)),!1}throw Error(a(435,n.tag))}return du(e,r,i),qc(),!1}if(oi)return null!==(t=is.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==li&&mi(Er(e=Error(a(422),{cause:r}),n))):(r!==li&&mi(Er(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Er(r,n),so(e,i=ks(e.stateNode,r,i)),4!==fc&&(fc=2)),!1;var o=Error(a(520),{cause:r});if(o=Er(o,n),null===yc?yc=[o]:yc.push(o),4!==fc&&(fc=2),null===t)return!0;r=Er(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,so(n,e=ks(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Ec||!Ec.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,Cs(i=Es(i),e,n,r),so(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,oc))return fc=1,ws(e,Er(n,e.current)),void(ic=null)}catch(o){if(null!==i)throw ic=i,o;return fc=1,ws(e,Er(n,e.current)),void(ic=null)}32768&t.flags?(oi||1===r?e=!0:cc||0!==(536870912&oc)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=is.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===fc&&(fc=5)}function tu(e,t){do{var n=il(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);fc=6,ic=null}function nu(e,t,n,r,i,o,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Cc);if(0!==(6&nc))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,i,o){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-pe(n),d=1<<u;s[u]=0,l[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&je(e,r,0),0!==o&&0===i&&0!==e.tag&&(e.suspendedLanes|=o&~(a&~t))}(e,n,o|=Pr,s,l,c),e===rc&&(ic=rc=null,oc=0),Pc=t,jc=e,_c=n,Ac=o,Tc=i,Rc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(oe,function(){return lu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=$.T,$.T=null,i=O.p,O.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=nf,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==i&&3!==f.nodeType||(l=s+i),f!==o||0!==r&&3!==f.nodeType||(c=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=s),p===o&&++d===r&&(c=s),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nf=!1,kl=t;null!==kl;)if(e=(t=kl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,kl=e;else for(;null!==kl;){switch(o=(t=kl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var m=gs(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(b){uu(n,n.return,b)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,kl=e;break}kl=t.return}}(e,t)}finally{nc=s,O.p=i,$.T=r}}Cc=1,ru(),iu(),ou()}}function ru(){if(1===Cc){Cc=0;var e=jc,t=Pc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=$.T,$.T=null;var r=O.p;O.p=2;var i=nc;nc|=4;try{$l(t,e);var o=nd,a=er(e.containerInfo),s=o.focusedElem,l=o.selectionRange;if(a!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),h=s.textContent.length,m=Math.min(l.start,h),g=void 0===l.end?m:Math.min(l.end,h);!p.extend&&m>g&&(a=g,g=m,m=a);var b=Jn(s,m),y=Jn(s,g);if(b&&y&&(1!==p.rangeCount||p.anchorNode!==b.node||p.anchorOffset!==b.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var x=d.createRange();x.setStart(b.node,b.offset),p.removeAllRanges(),m>g?(p.addRange(x),p.extend(y.node,y.offset)):(x.setEnd(y.node,y.offset),p.addRange(x))}}}}for(d=[],p=s;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var v=d[s];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}nf=!!td,nd=td=null}finally{nc=i,O.p=r,$.T=n}}e.current=t,Cc=2}}function iu(){if(2===Cc){Cc=0;var e=jc,t=Pc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=$.T,$.T=null;var r=O.p;O.p=2;var i=nc;nc|=4;try{El(e,t.alternate,t)}finally{nc=i,O.p=r,$.T=n}}Cc=3}}function ou(){if(4===Cc||3===Cc){Cc=0,ee();var e=jc,t=Pc,n=_c,r=Rc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Cc=5:(Cc=0,Pc=jc=null,au(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Ec=null),Ae(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=$.T,i=O.p,O.p=2,$.T=null;try{for(var o=e.onRecoverableError,a=0;a<r.length;a++){var s=r[a];o(s.value,{componentStack:s.stack})}}finally{$.T=t,O.p=i}}0!==(3&_c)&&su(),Su(e),i=e.pendingLanes,0!==(4194090&n)&&0!==(42&i)?e===Lc?Nc++:(Nc=0,Lc=e):Nc=0,ku(0,!1)}}function au(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,$i(t)))}function su(e){return ru(),iu(),ou(),lu()}function lu(){if(5!==Cc)return!1;var e=jc,t=Ac;Ac=0;var n=Ae(_c),r=$.T,i=O.p;try{O.p=32>n?32:n,$.T=null,n=Tc,Tc=null;var o=jc,s=_c;if(Cc=0,Pc=jc=null,_c=0,0!==(6&nc))throw Error(a(331));var l=nc;if(nc|=4,Xl(o.current),Hl(o,o.current,s,n),nc=l,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,o)}catch(c){}return!0}finally{O.p=i,$.T=r,au(e,t)}}function cu(e,t,n){t=Er(n,t),null!==(e=oo(e,t=ks(e.stateNode,t,2),2))&&(Ce(e,2),Su(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ec||!Ec.has(r))){e=Er(n,e),null!==(r=oo(t,n=Es(2),2))&&(Cs(n,r,t,e),Ce(r,2),Su(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(uc=!0,i.add(n),e=fu.bind(null,e,t,n),t.then(e,e))}function fu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(oc&n)===n&&(4===fc||3===fc&&(62914560&oc)===oc&&300>te()-wc?0===(2&nc)&&Hc(e,0):mc|=n,bc===oc&&(bc=0)),Su(e)}function pu(e,t){0===t&&(t=ke()),null!==(e=Rr(e,t))&&(Ce(e,t),Su(e))}function hu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),pu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),pu(e,n)}var gu=null,bu=null,yu=!1,xu=!1,vu=!1,wu=0;function Su(e){e!==bu&&null===e.next&&(null===bu?gu=bu=e:bu=bu.next=e),xu=!0,yu||(yu=!0,dd(function(){0!==(6&nc)?X(re,Eu):Cu()}))}function ku(e,t){if(!vu&&xu){vu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var o=0;else{var a=r.suspendedLanes,s=r.pingedLanes;o=(1<<31-pe(42|e)+1)-1,o=201326741&(o&=i&~(a&~s))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,_u(r,o))}else o=oc,0===(3&(o=xe(r,r===rc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||ve(r,o)||(n=!0,_u(r,o));r=r.next}}while(n);vu=!1}}function Eu(){Cu()}function Cu(){xu=yu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var i=r.next,o=ju(r,t);0===o?(r.next=null,null===n?gu=i:n.next=i,null===i&&(bu=n)):(n=r,(0!==e||0!==(3&o))&&(xu=!0)),r=i}ku(e,!1)}function ju(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var a=31-pe(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=we(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}if(n=oc,n=xe(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ac||9===ac)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||ve(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),Ae(n)){case 2:case 8:n=ie;break;case 32:default:n=oe;break;case 268435456:n=se}return r=Pu.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function Pu(e,t){if(0!==Cc&&5!==Cc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=oc;return 0===(r=xe(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Mc(e,r,t),ju(e,te()),null!=e.callbackNode&&e.callbackNode===n?Pu.bind(null,e):null)}function _u(e,t){if(su())return null;Mc(e,t,!0)}function Au(){return 0===wu&&(wu=Se()),wu}function Tu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:At(""+e)}function Ru(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Nu=0;Nu<wr.length;Nu++){var Lu=wr[Nu];Sr(Lu.toLowerCase(),"on"+(Lu[0].toUpperCase()+Lu.slice(1)))}Sr(pr,"onAnimationEnd"),Sr(hr,"onAnimationIteration"),Sr(mr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(gr,"onTransitionRun"),Sr(br,"onTransitionStart"),Sr(yr,"onTransitionCancel"),Sr(xr,"onTransitionEnd"),Ke("onMouseEnter",["mouseout","mouseover"]),Ke("onMouseLeave",["mouseout","mouseover"]),Ke("onPointerEnter",["pointerout","pointerover"]),Ke("onPointerLeave",["pointerout","pointerover"]),Ve("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ve("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ve("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ve("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ve("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ve("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $u="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ou=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($u));function zu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;o=s,i.currentTarget=c;try{o(i)}catch(u){bs(u)}i.currentTarget=null,o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;o=s,i.currentTarget=c;try{o(i)}catch(u){bs(u)}i.currentTarget=null,o=l}}}}function Mu(e,t){var n=t[Oe];void 0===n&&(n=t[Oe]=new Set);var r=e+"__bubble";n.has(r)||(Fu(t,e,2,!1),n.add(r))}function Du(e,t,n){var r=0;t&&(r|=4),Fu(n,e,r,t)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Uu(e){if(!e[Iu]){e[Iu]=!0,Ye.forEach(function(t){"selectionchange"!==t&&(Ou.has(t)||Du(t,!1,e),Du(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Iu]||(t[Iu]=!0,Du("selectionchange",!1,t))}}function Fu(e,t,n,r){switch(uf(t)){case 2:var i=rf;break;case 8:i=of;break;default:i=af}n=i.bind(null,t,n,e),i=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bu(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i)break;if(4===a)for(a=r.return;null!==a;){var c=a.tag;if((3===c||4===c)&&a.stateNode.containerInfo===i)return;a=a.return}for(;null!==s;){if(null===(a=Fe(s)))return;if(5===(c=a.tag)||6===c||26===c||27===c){r=o=a;continue e}s=s.parentNode}}r=r.return}zt(function(){var r=o,i=Rt(n),a=[];e:{var s=vr.get(e);if(void 0!==s){var c=Zt,u=e;switch(e){case"keypress":if(0===Wt(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=an;break;case"focusout":u="blur",c=an;break;case"beforeblur":case"afterblur":c=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=on;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=bn;break;case pr:case hr:case mr:c=sn;break;case xr:c=yn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=xn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=vn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==s?s+"Capture":null:s;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=Mt(m,p))&&d.push(Hu(m,g,h)),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),a.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Tt||!(u=n.relatedTarget||n.fromElement)||!Fe(u)&&!u[$e])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Fe(u):null)&&(f=l(u),d=u.tag,u!==f||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",p="onPointerEnter",m="pointer"),f=null==c?s:He(c),h=null==u?s:He(u),(s=new d(g,m+"leave",c,n,i)).target=f,s.relatedTarget=h,g=null,Fe(i)===r&&((d=new d(p,m+"enter",u,n,i)).target=h,d.relatedTarget=f,g=d),f=g,c&&u)e:{for(p=u,m=0,h=d=c;h;h=Wu(h))m++;for(h=0,g=p;g;g=Wu(g))h++;for(;0<m-h;)d=Wu(d),m--;for(;0<h-m;)p=Wu(p),h--;for(;m--;){if(d===p||null!==p&&d===p.alternate)break e;d=Wu(d),p=Wu(p)}d=null}else d=null;null!==c&&Yu(a,s,c,d,!1),null!==u&&null!==f&&Yu(a,f,u,d,!0)}if("select"===(c=(s=r?He(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var b=Dn;else if(Nn(s))if(In)b=Vn;else{b=Yn;var y=Wn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&jt(r.elementType)&&(b=Dn):b=qn;switch(b&&(b=b(e,r))?Ln(a,b,n,i):(y&&y(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),y=r?He(r):window,e){case"focusin":(Nn(y)||"true"===y.contentEditable)&&(rr=y,ir=r,or=null);break;case"focusout":or=ir=rr=null;break;case"mousedown":ar=!0;break;case"contextmenu":case"mouseup":case"dragend":ar=!1,sr(a,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(a,n,i)}var x;if(Sn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Tn?_n(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Cn&&"ko"!==n.locale&&(Tn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Tn&&(x=Gt()):(Bt="value"in(Ft=i)?Ft.value:Ft.textContent,Tn=!0)),0<(y=Gu(r,v)).length&&(v=new cn(v,e,null,n,i),a.push({event:v,listeners:y}),x?v.data=x:null!==(x=An(n))&&(v.data=x))),(x=En?function(e,t){switch(e){case"compositionend":return An(t);case"keypress":return 32!==t.which?null:(Pn=!0,jn);case"textInput":return(e=t.data)===jn&&Pn?null:e;default:return null}}(e,n):function(e,t){if(Tn)return"compositionend"===e||!Sn&&_n(e,t)?(e=Gt(),Ht=Bt=Ft=null,Tn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(v=Gu(r,"onBeforeInput")).length&&(y=new cn("onBeforeInput","beforeinput",null,n,i),a.push({event:y,listeners:v}),y.data=x)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var o=Tu((i[Le]||null).action),a=r.submitter;a&&null!==(t=(t=a[Le]||null)?Tu(t.formAction):a.getAttribute("formAction"))&&(o=t,a=null);var s=new Zt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=a?Ru(i,a):new FormData(i);Ra(n,{pending:!0,data:e,method:i.method,action:o},null,e)}}else"function"===typeof o&&(s.preventDefault(),e=a?Ru(i,a):new FormData(i),Ra(n,{pending:!0,data:e,method:i.method,action:o},o,e))},currentTarget:i}]})}}(a,e,r,n,i)}zu(a,t)})}function Hu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===o||(null!=(i=Mt(e,n))&&r.unshift(Hu(e,i,o)),null!=(i=Mt(e,t))&&r.push(Hu(e,i,o))),3===e.tag)return r;e=e.return}return[]}function Wu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Yu(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=Mt(n,o))&&a.unshift(Hu(n,c,l)):i||null!=(c=Mt(n,o))&&a.push(Hu(n,c,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var qu=/\r\n?/g,Vu=/\u0000|\uFFFD/g;function Ku(e){return("string"===typeof e?e:""+e).replace(qu,"\n").replace(Vu,"")}function Qu(e,t){return t=Ku(t),Ku(e)===t}function Xu(){}function Ju(e,t,n,r,i,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Ct(e,r,o);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=At(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&Ju(e,t,"name",i.name,i,null),Ju(e,t,"formEncType",i.formEncType,i,null),Ju(e,t,"formMethod",i.formMethod,i,null),Ju(e,t,"formTarget",i.formTarget,i,null)):(Ju(e,t,"encType",i.encType,i,null),Ju(e,t,"method",i.method,i,null),Ju(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=At(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"onScroll":null!=r&&Mu("scroll",e);break;case"onScrollEnd":null!=r&&Mu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=At(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Mu("beforetoggle",e),Mu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Pt.get(n)||n,r)}}function Zu(e,t,n,r,i,o){switch(n){case"style":Ct(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Mu("scroll",e);break;case"onScrollEnd":null!=r&&Mu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:qe.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(o=null!=(o=e[Le]||null)?o[n]:null)&&e.removeEventListener(t,o,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mu("error",e),Mu("load",e);var r,i=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Ju(e,t,r,s,n,null)}}return o&&Ju(e,t,"srcSet",n.srcSet,n,null),void(i&&Ju(e,t,"src",n.src,n,null));case"input":Mu("invalid",e);var l=r=s=o=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":o=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:Ju(e,t,i,d,n,null)}}return bt(e,r,l,c,u,s,o,!1),void dt(e);case"select":for(o in Mu("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(o)&&null!=(l=n[o]))switch(o){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Ju(e,t,o,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?xt(e,!!i,t,!1):null!=n&&xt(e,!!i,n,!0));case"textarea":for(s in Mu("invalid",e),r=o=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":o=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(a(91));break;default:Ju(e,t,s,l,n,null)}return wt(e,i,o,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Ju(e,t,c,i,n,null);return;case"dialog":Mu("beforetoggle",e),Mu("toggle",e),Mu("cancel",e),Mu("close",e);break;case"iframe":case"object":Mu("load",e);break;case"video":case"audio":for(i=0;i<$u.length;i++)Mu($u[i],e);break;case"image":Mu("error",e),Mu("load",e);break;case"details":Mu("toggle",e);break;case"embed":case"source":case"link":Mu("error",e),Mu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Ju(e,t,u,i,n,null)}return;default:if(jt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&Zu(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Ju(e,t,l,i,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function ad(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(fd)}:ld;function fd(e){setTimeout(function(){throw e})}function pd(e){return"head"===e}function hd(e,t){var n=t,r=0,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0<r&&8>r){n=r;var a=e.ownerDocument;if(1&n&&wd(a.documentElement),2&n&&wd(a.body),4&n)for(wd(n=a.head),a=n.firstChild;a;){var s=a.nextSibling,l=a.nodeName;a[Ie]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=s}}if(0===i)return e.removeChild(o),void _f(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=o}while(n);_f(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),Ue(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function bd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function xd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function vd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ue(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Cd=O.d;O.d={f:function(){var e=Cd.f(),t=Fc();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?La(t):Cd.r(e)},D:function(e){Cd.D(e),Pd("dns-prefetch",e,null)},C:function(e,t){Cd.C(e,t),Pd("preconnect",e,t)},L:function(e,t,n){Cd.L(e,t,n);var r=jd;if(r&&e&&t){var i='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+mt(n.imageSizes)+'"]')):i+='[href="'+mt(e)+'"]';var o=i;switch(t){case"style":o=Ad(e);break;case"script":o=Nd(e)}Sd.has(o)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(o,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Td(o))||"script"===t&&r.querySelector(Ld(o))||(ed(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}},m:function(e,t){Cd.m(e,t);var n=jd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',o=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Nd(e)}if(!Sd.has(o)&&(e=f({rel:"modulepreload",href:e},t),Sd.set(o,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ld(o)))return}ed(r=n.createElement("link"),"link",e),We(r),n.head.appendChild(r)}}},X:function(e,t){Cd.X(e,t);var n=jd;if(n&&e){var r=Ge(n).hoistableScripts,i=Nd(e),o=r.get(i);o||((o=n.querySelector(Ld(i)))||(e=f({src:e,async:!0},t),(t=Sd.get(i))&&Md(e,t),We(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}},S:function(e,t,n){Cd.S(e,t,n);var r=jd;if(r&&e){var i=Ge(r).hoistableStyles,o=Ad(e);t=t||"default";var a=i.get(o);if(!a){var s={loading:0,preload:null};if(a=r.querySelector(Td(o)))s.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(o))&&zd(e,n);var l=a=r.createElement("link");We(l),ed(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Od(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:s},i.set(o,a)}}},M:function(e,t){Cd.M(e,t);var n=jd;if(n&&e){var r=Ge(n).hoistableScripts,i=Nd(e),o=r.get(i);o||((o=n.querySelector(Ld(i)))||(e=f({src:e,async:!0,type:"module"},t),(t=Sd.get(i))&&Md(e,t),We(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}}};var jd="undefined"===typeof document?null:document;function Pd(e,t,n){var r=jd;if(r&&"string"===typeof t&&t){var i=mt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),kd.has(i)||(kd.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(ed(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}}function _d(e,t,n,r){var i,o,s,l,c=(c=G.current)?Ed(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Ad(n.href),(r=(n=Ge(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Ad(n.href);var u=Ge(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Td(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),u||(i=c,o=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+o+"]")?l.loading=1:(o=i.createElement("link"),l.preload=o,o.addEventListener("load",function(){return l.loading|=1}),o.addEventListener("error",function(){return l.loading|=2}),ed(o,"link",s),We(o),i.head.appendChild(o))))),t&&null===r)throw Error(a(528,""));return d}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Nd(n),(r=(n=Ge(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Ad(e){return'href="'+mt(e)+'"'}function Td(e){return'link[rel="stylesheet"]['+e+"]"}function Rd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nd(e){return'[src="'+mt(e)+'"]'}function Ld(e){return"script[async]"+e}function $d(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,We(r),r;var i=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return We(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",i),Od(r,n.precedence,e),t.instance=r;case"stylesheet":i=Ad(n.href);var o=e.querySelector(Td(i));if(o)return t.state.loading|=4,t.instance=o,We(o),o;r=Rd(n),(i=Sd.get(i))&&zd(r,i),We(o=(e.ownerDocument||e).createElement("link"));var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ed(o,"link",r),t.state.loading|=4,Od(o,n.precedence,e),t.instance=o;case"script":return o=Nd(n.src),(i=e.querySelector(Ld(o)))?(t.instance=i,We(i),i):(r=n,(i=Sd.get(o))&&Md(r=f({},n),i),We(i=(e=e.ownerDocument||e).createElement("script")),ed(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Od(r,n.precedence,e));return t.instance}function Od(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,o=i,a=0;a<r.length;a++){var s=r[a];if(s.dataset.precedence===t)o=s;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function zd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Md(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Dd=null;function Id(e,t,n){if(null===Dd){var r=new Map,i=Dd=new Map;i.set(n,r)}else(r=(i=Dd).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[Ie]||o[Ne]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var a=o.getAttribute(t)||"";a=e+a;var s=r.get(a);s?s.push(o):r.set(a,[o])}}return r}function Ud(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Fd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Hd(){}function Gd(){if(this.count--,0===this.count)if(this.stylesheets)Yd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Wd=null;function Yd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Wd=new Map,t.forEach(qd,e),Wd=null,Gd.call(e))}function qd(e,t){if(!(4&t.state.loading)){var n=Wd.get(e);if(n)var r=n.get(null);else{n=new Map,Wd.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var a=i[o];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(i=t.instance).getAttribute("data-precedence"),(o=n.get(a)||r)===r&&n.set(null,i),n.set(a,i),this.count++,r=Gd.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),o?o.parentNode.insertBefore(i,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var Vd={$$typeof:w,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Kd(e,t,n,r,i,o,a,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Qd(e,t,n,r,i,o,a,s,l,c,u,d){return e=new Kd(e,t,n,a,s,l,c,d),t=1,!0===o&&(t|=24),o=zr(3,null,null,t),e.current=o,o.stateNode=e,(t=Li()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},no(o),e}function Xd(e){return e?e=$r:$r}function Jd(e,t,n,r,i,o){i=Xd(i),null===r.context?r.context=i:r.pendingContext=i,(r=io(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=oo(e,r,t))&&(zc(n,0,t),ao(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=Rr(e,67108864);null!==t&&zc(t,0,67108864),ef(e,67108864)}}var nf=!0;function rf(e,t,n,r){var i=$.T;$.T=null;var o=O.p;try{O.p=2,af(e,t,n,r)}finally{O.p=o,$.T=i}}function of(e,t,n,r){var i=$.T;$.T=null;var o=O.p;try{O.p=8,af(e,t,n,r)}finally{O.p=o,$.T=i}}function af(e,t,n,r){if(nf){var i=sf(r);if(null===i)Bu(e,t,r,lf,n),xf(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return ff=vf(ff,e,t,n,r,i),!0;case"dragenter":return pf=vf(pf,e,t,n,r,i),!0;case"mouseover":return hf=vf(hf,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mf.set(o,vf(mf.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,gf.set(o,vf(gf.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(xf(e,r),4&t&&-1<yf.indexOf(e)){for(;null!==i;){var o=Be(i);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var a=ye(o.pendingLanes);if(0!==a){var s=o;for(s.pendingLanes|=2,s.entangledLanes|=2;a;){var l=1<<31-pe(a);s.entanglements[1]|=l,a&=~l}Su(o),0===(6&nc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(s=Rr(o,2))&&zc(s,0,2),Fc(),ef(o,2)}if(null===(o=sf(r))&&Bu(e,t,r,lf,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Bu(e,t,r,null,n)}}function sf(e){return cf(e=Rt(e))}var lf=null;function cf(e){if(lf=null,null!==(e=Fe(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lf=e,null}function uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ie:return 8;case oe:case ae:return 32;case se:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,pf=null,hf=null,mf=new Map,gf=new Map,bf=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":pf=null;break;case"mouseover":case"mouseout":hf=null;break;case"pointerover":case"pointerout":mf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gf.delete(t.pointerId)}}function vf(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=Be(t))&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function wf(e){var t=Fe(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}(e.priority,function(){if(13===n.tag){var e=$c();e=_e(e);var t=Rr(n,e);null!==t&&zc(t,0,e),ef(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Sf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=sf(e.nativeEvent);if(null!==n)return null!==(t=Be(n))&&tf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Tt=r,n.target.dispatchEvent(r),Tt=null,t.shift()}return!0}function kf(e,t,n){Sf(e)&&n.delete(t)}function Ef(){df=!1,null!==ff&&Sf(ff)&&(ff=null),null!==pf&&Sf(pf)&&(pf=null),null!==hf&&Sf(hf)&&(hf=null),mf.forEach(kf),gf.forEach(kf)}function Cf(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ef)))}var jf=null;function Pf(e){jf!==e&&(jf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){jf===e&&(jf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===cf(r||n))continue;break}var o=Be(n);null!==o&&(e.splice(t,3),t-=3,Ra(o,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function _f(e){function t(t){return Cf(t,e)}null!==ff&&Cf(ff,e),null!==pf&&Cf(pf,e),null!==hf&&Cf(hf,e),mf.forEach(t),gf.forEach(t);for(var n=0;n<bf.length;n++){var r=bf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<bf.length&&null===(n=bf[0]).blockedOn;)wf(n),null===n.blockedOn&&bf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],o=n[r+1],a=i[Le]||null;if("function"===typeof o)a||Pf(n);else if(a){var s=null;if(o&&o.hasAttribute("formAction")){if(i=o,a=o[Le]||null)s=a.formAction;else if(null!==cf(i))continue}else s=a.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Pf(n)}}}function Af(e){this._internalRoot=e}function Tf(e){this._internalRoot=e}Tf.prototype.render=Af.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Jd(t.current,$c(),e,t,null,null)},Tf.prototype.unmount=Af.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Fc(),t[$e]=null}},Tf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Te();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bf.length&&0!==t&&t<bf[n].priority;n++);bf.splice(n,0,e),0===n&&wf(e)}};var Rf=i.version;if("19.1.0"!==Rf)throw Error(a(527,Rf,"19.1.0"));O.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Nf={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lf.isDisabled&&Lf.supportsFiber)try{ue=Lf.inject(Nf),de=Lf}catch(Of){}}t.createRoot=function(e,t){if(!s(e))throw Error(a(299));var n=!1,r="",i=ys,o=xs,l=vs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Qd(e,1,!1,null,0,n,r,i,o,l,0,null),e[$e]=t.current,Uu(e),new Af(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(a(299));var r=!1,i="",o=ys,l=xs,c=vs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Qd(e,1,!0,t,0,r,i,o,l,c,0,u)).context=Xd(null),n=t.current,(i=io(r=_e(r=$c()))).callback=null,oo(n,i,r),n=r,t.current.lanes=n,Ce(t,n),Su(t),e[$e]=t.current,Uu(e),new Tf(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},173:(e,t,n)=>{e.exports=n(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=x.prototype=new y;v.constructor=x,m(v,b.prototype),v.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,r,i,o,a){return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function _(){}function A(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case f:return A((u=e._init)(e._payload),t,i,o,a)}}if(u)return a=a(e),u=""===o?"."+P(e,0):o,w(a)?(i="",null!=u&&(i=u.replace(j,"$&/")+"/"),A(a,t,i,"",function(e){return e})):null!=a&&(C(a)&&(l=a,c=i+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+u,a=E(l.type,c,void 0,0,0,l.props)),t.push(a)),1;u=0;var d,h=""===o?".":o+":";if(w(e))for(var m=0;m<e.length;m++)u+=A(o=e[m],t,i,s=h+P(o,m),a);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(o=e.next()).done;)u+=A(o=o.value,t,i,s=h+P(o,m++),a);else if("object"===s){if("function"===typeof e.then)return A(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(_,_):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,o,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function T(e,t,n){if(null==e)return e;var r=[],i=0;return A(e,r,"","",function(e){return t.call(n,e,i++)}),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function L(){}t.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!k.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var a=Array(o),s=0;s<o;s++)a[s]=arguments[s+2];r.children=a}return E(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return E(e,o,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(L,N)}catch(o){N(o)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},497:(e,t,n)=>{"use strict";var r=n(218);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,b=!1,y="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function S(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,E||(E=!0,k());else{var t=r(u);null!==t&&N(S,t.startTime-e)}}var k,E=!1,C=-1,j=5,P=-1;function _(){return!!b||!(t.unstable_now()-P<j)}function A(){if(b=!1,E){var e=t.unstable_now();P=e;var n=!0;try{e:{m=!1,g&&(g=!1,x(C),C=-1),h=!0;var o=p;try{t:{for(w(e),f=r(c);null!==f&&!(f.expirationTime>e&&_());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var s=a(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){f.callback=s,w(e),n=!0;break t}f===r(c)&&i(c),w(e)}else i(c);f=r(c)}if(null!==f)n=!0;else{var l=r(u);null!==l&&N(S,l.startTime-e),n=!1}}break e}finally{f=null,p=o,h=!1}n=void 0}}finally{n?k():E=!1}}}if("function"===typeof v)k=function(){v(A)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,R=T.port2;T.port1.onmessage=A,k=function(){R.postMessage(null)}}else k=function(){y(A,0)};function N(e,n){C=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){b=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(x(C),C=-1):g=!0,N(S,o-a))):(e.sortIndex=s,n(c,e),m||h||(m=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{Decoder:()=>Fs,Encoder:()=>Is,PacketType:()=>Ds,protocol:()=>Ms});var t=n(43),r=n(391),i=n(173);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e,n,r){var i=!!r,o=t.useRef(r);t.useEffect(function(){o.current=r},[r]),t.useEffect(function(){if(!i||!e)return function(){};var t=function(){o.current&&o.current.apply(o,arguments)};return e.on(n,t),function(){e.off(n,t)}},[i,n,e,o])},p=function(e){var n=t.useRef(e);return t.useEffect(function(){n.current=e},[e]),n.current},h=function(e){return null!==e&&"object"===s(e)},m="[object Object]",g=function e(t,n){if(!h(t)||!h(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var i=Object.prototype.toString.call(t)===m;if(i!==(Object.prototype.toString.call(n)===m))return!1;if(!i&&!r)return t===n;var o=Object.keys(t),a=Object.keys(n);if(o.length!==a.length)return!1;for(var s={},l=0;l<o.length;l+=1)s[o[l]]=!0;for(var c=0;c<a.length;c+=1)s[a[c]]=!0;var u=Object.keys(s);if(u.length!==o.length)return!1;var d=t,f=n;return u.every(function(t){return e(d[t],f[t])})},b=function(e,t,n){return h(e)?Object.keys(e).reduce(function(r,i){var o=!h(t)||!g(e[i],t[i]);return n.includes(i)?(o&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),r):o?a(a({},r||{}),{},l({},i,e[i])):r},null):null},y="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",x=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;if(null===e||h(t=e)&&"function"===typeof t.elements&&"function"===typeof t.createToken&&"function"===typeof t.createPaymentMethod&&"function"===typeof t.confirmCardPayment)return e;throw new Error(n)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;if(function(e){return h(e)&&"function"===typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(e){return x(e,t)})};var n=x(e,t);return null===n?{tag:"empty"}:{tag:"sync",stripe:n}},w=function(e){e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"4.0.2"}),e.registerAppInfo({name:"react-stripe-js",version:"4.0.2",url:"https://stripe.com/docs/stripe-js/react"}))},S=t.createContext(null);S.displayName="ElementsContext";var k=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},E=function(e){var n=e.stripe,r=e.options,i=e.children,o=t.useMemo(function(){return v(n)},[n]),a=u(t.useState(function(){return{stripe:"sync"===o.tag?o.stripe:null,elements:"sync"===o.tag?o.stripe.elements(r):null}}),2),s=a[0],l=a[1];t.useEffect(function(){var e=!0,t=function(e){l(function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}})};return"async"!==o.tag||s.stripe?"sync"!==o.tag||s.stripe||t(o.stripe):o.stripePromise.then(function(n){n&&e&&t(n)}),function(){e=!1}},[o,s,r]);var c=p(n);t.useEffect(function(){null!==c&&c!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[c,n]);var d=p(r);return t.useEffect(function(){if(s.elements){var e=b(r,d,["clientSecret","fonts"]);e&&s.elements.update(e)}},[r,d,s.elements]),t.useEffect(function(){w(s.stripe)},[s.stripe]),t.createElement(S.Provider,{value:s},i)};E.propTypes={stripe:i.any,options:i.object};i.func.isRequired;var C=t.createContext(null);C.displayName="CheckoutContext",i.any,i.shape({fetchClientSecret:i.func.isRequired,elementsOptions:i.object}).isRequired;var j=function(e){var n=t.useContext(C),r=t.useContext(S);if(n){if(r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return n}return k(r,e)},P=["mode"],_=function(e,n){var r,o="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),a=n?function(e){j("mounts <".concat(o,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r,i=n.id,a=n.className,s=n.options,l=void 0===s?{}:s,d=n.onBlur,h=n.onFocus,m=n.onReady,g=n.onChange,y=n.onEscape,x=n.onClick,v=n.onLoadError,w=n.onLoaderStart,S=n.onNetworksChange,k=n.onConfirm,E=n.onCancel,C=n.onShippingAddressChange,_=n.onShippingRateChange,A=n.onSavedPaymentMethodRemove,T=n.onSavedPaymentMethodUpdate,R=j("mounts <".concat(o,">")),N="elements"in R?R.elements:null,L="checkoutState"in R?R.checkoutState:null,$="success"===(null===L||void 0===L?void 0:L.type)?L.checkout:null,O=u(t.useState(null),2),z=O[0],M=O[1],D=t.useRef(null),I=t.useRef(null);f(z,"blur",d),f(z,"focus",h),f(z,"escape",y),f(z,"click",x),f(z,"loaderror",v),f(z,"loaderstart",w),f(z,"networkschange",S),f(z,"confirm",k),f(z,"cancel",E),f(z,"shippingaddresschange",C),f(z,"shippingratechange",_),f(z,"savedpaymentmethodremove",A),f(z,"savedpaymentmethodupdate",T),f(z,"change",g),m&&(r="expressCheckout"===e?m:function(){m(z)}),f(z,"ready",r),t.useLayoutEffect(function(){if(null===D.current&&null!==I.current&&(N||$)){var t=null;if($)switch(e){case"payment":t=$.createPaymentElement(l);break;case"address":if(!("mode"in l))throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");var n=l.mode,r=c(l,P);if("shipping"===n)t=$.createShippingAddressElement(r);else{if("billing"!==n)throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");t=$.createBillingAddressElement(r)}break;case"expressCheckout":t=$.createExpressCheckoutElement(l);break;case"currencySelector":t=$.createCurrencySelectorElement();break;case"taxId":t=$.createTaxIdElement(l);break;default:throw new Error("Invalid Element type ".concat(o,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else N&&(t=N.create(e,l));D.current=t,M(t),t&&t.mount(I.current)}},[N,$,l]);var U=p(l);return t.useEffect(function(){if(D.current){var e=b(l,U,["paymentRequest"]);e&&"update"in D.current&&D.current.update(e)}},[l,U]),t.useLayoutEffect(function(){return function(){if(D.current&&"function"===typeof D.current.destroy)try{D.current.destroy(),D.current=null}catch(e){}}},[]),t.createElement("div",{id:i,className:a,ref:I})};return a.propTypes={id:i.string,className:i.string,onChange:i.func,onBlur:i.func,onFocus:i.func,onReady:i.func,onEscape:i.func,onClick:i.func,onLoadError:i.func,onLoaderStart:i.func,onNetworksChange:i.func,onConfirm:i.func,onCancel:i.func,onShippingAddressChange:i.func,onShippingRateChange:i.func,onSavedPaymentMethodRemove:i.func,onSavedPaymentMethodUpdate:i.func,options:i.object},a.displayName=o,a.__elementType=e,a},A="undefined"===typeof window,T=t.createContext(null);T.displayName="EmbeddedCheckoutProviderContext";_("auBankAccount",A),_("card",A),_("cardNumber",A),_("cardExpiry",A),_("cardCvc",A),_("fpxBank",A),_("iban",A),_("idealBank",A),_("p24Bank",A),_("epsBank",A),_("payment",A),_("expressCheckout",A),_("paymentRequestButton",A),_("linkAuthentication",A),_("address",A),_("shippingAddress",A),_("paymentMethodMessaging",A),_("affirmMessage",A),_("afterpayClearpayMessage",A),_("taxId",A);var R,N="https://js.stripe.com/v3",L=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,$="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",O=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(N).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},z=null,M=null,D=null,I=function(e){return null!==z?z:(z=new Promise(function(t,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn($),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(N,'"]')),t=0;t<e.length;t++){var n=e[t];if(L.test(n.src))return n}return null}();if(r&&e)console.warn($);else if(r){if(r&&null!==D&&null!==M){var i;r.removeEventListener("load",D),r.removeEventListener("error",M),null===(i=r.parentNode)||void 0===i||i.removeChild(r),r=O(e)}}else r=O(e);D=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}}(t,n),M=function(e){return function(){e(new Error("Failed to load Stripe.js"))}}(n),r.addEventListener("load",D),r.addEventListener("error",M)}catch(o){return void n(o)}else t(null)})).catch(function(e){return z=null,Promise.reject(e)})},U=!1,F=function(){return R||(R=I(null).catch(function(e){return R=null,Promise.reject(e)}))};Promise.resolve().then(function(){return F()}).catch(function(e){U||console.warn(e)});var B=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];U=!0;var r=Date.now();return F().then(function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"4.6.0",startTime:t})}(r,n),r}(e,t,r)})},H="popstate";function G(){return X(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return V("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:K(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function W(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function Y(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function q(e,t){return{usr:e.state,key:e.key,idx:t}}function V(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?Q(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function K(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Q(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function X(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s="POP",l=null,c=u();function u(){return(a.state||{idx:null}).idx}function d(){s="POP";let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:p.location,delta:t})}function f(e){return J(e)}null==c&&(c=0,a.replaceState({...a.state,idx:c},""));let p={get action(){return s},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(H,d),l=e,()=>{i.removeEventListener(H,d),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s="PUSH";let r=V(p.location,e,t);n&&n(r,e),c=u()+1;let d=q(r,c),f=p.createHref(r);try{a.pushState(d,"",f)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;i.location.assign(f)}o&&l&&l({action:s,location:p.location,delta:1})},replace:function(e,t){s="REPLACE";let r=V(p.location,e,t);n&&n(r,e),c=u();let i=q(r,c),d=p.createHref(r);a.replaceState(i,"",d),o&&l&&l({action:s,location:p.location,delta:0})},go:e=>a.go(e)};return p}function J(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),W(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:K(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function Z(e,t){return ee(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function ee(e,t,n,r){let i=me(("string"===typeof t?Q(t):t).pathname||"/",n);if(null==i)return null;let o=te(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=he(i);a=de(o[s],e,r)}return a}function te(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(W(a.relativePath.startsWith(r),`Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(r.length));let s=ve([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(W(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),te(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:ue(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of ne(e.path))i(e,t,n);else i(e,t)}),t}function ne(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=ne(r.join("/")),s=[];return s.push(...a.map(e=>""===e?o:[o,e].join("/"))),i&&s.push(...a),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var re=/^:[\w-]+$/,ie=3,oe=2,ae=1,se=10,le=-2,ce=e=>"*"===e;function ue(e,t){let n=e.split("/"),r=n.length;return n.some(ce)&&(r+=le),t&&(r+=oe),n.filter(e=>!ce(e)).reduce((e,t)=>e+(re.test(t)?ie:""===t?ae:se),r)}function de(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=fe({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=fe({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:ve([o,u.pathname]),pathnameBase:we(ve([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=ve([o,u.pathnameBase]))}return a}function fe(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=pe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{});return{params:l,pathname:o,pathnameBase:a,pattern:e}}function pe(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Y("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function he(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return Y(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function me(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function ge(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function be(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function ye(e){let t=be(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function xe(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=Q(e):(r={...e},W(!r.pathname||!r.pathname.includes("?"),ge("?","pathname","search",r)),W(!r.pathname||!r.pathname.includes("#"),ge("#","pathname","hash",r)),W(!r.search||!r.search.includes("#"),ge("#","search","hash",r)));let o,a=""===e||""===r.pathname,s=a?"/":r.pathname;if(null==s)o=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?Q(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:Se(r),hash:ke(i)}}(r,o),c=s&&"/"!==s&&s.endsWith("/"),u=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}var ve=e=>e.join("/").replace(/\/\/+/g,"/"),we=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Se=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ke=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function Ee(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var Ce=["POST","PUT","PATCH","DELETE"],je=(new Set(Ce),["GET",...Ce]);new Set(je),Symbol("ResetLoaderData");var Pe=t.createContext(null);Pe.displayName="DataRouter";var _e=t.createContext(null);_e.displayName="DataRouterState";var Ae=t.createContext(!1);var Te=t.createContext({isTransitioning:!1});Te.displayName="ViewTransition";var Re=t.createContext(new Map);Re.displayName="Fetchers";var Ne=t.createContext(null);Ne.displayName="Await";var Le=t.createContext(null);Le.displayName="Navigation";var $e=t.createContext(null);$e.displayName="Location";var Oe=t.createContext({outlet:null,matches:[],isDataRoute:!1});Oe.displayName="Route";var ze=t.createContext(null);ze.displayName="RouteError";function Me(){return null!=t.useContext($e)}function De(){return W(Me(),"useLocation() may be used only in the context of a <Router> component."),t.useContext($e).location}var Ie="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ue(e){t.useContext(Le).static||t.useLayoutEffect(e)}function Fe(){let{isDataRoute:e}=t.useContext(Oe);return e?function(){let{router:e}=Qe("useNavigate"),n=Je("useNavigate"),r=t.useRef(!1);Ue(()=>{r.current=!0});let i=t.useCallback(async function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Y(r.current,Ie),r.current&&("number"===typeof t?e.navigate(t):await e.navigate(t,{fromRouteId:n,...i}))},[e,n]);return i}():function(){W(Me(),"useNavigate() may be used only in the context of a <Router> component.");let e=t.useContext(Pe),{basename:n,navigator:r}=t.useContext(Le),{matches:i}=t.useContext(Oe),{pathname:o}=De(),a=JSON.stringify(ye(i)),s=t.useRef(!1);Ue(()=>{s.current=!0});let l=t.useCallback(function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Y(s.current,Ie),!s.current)return;if("number"===typeof t)return void r.go(t);let l=xe(t,JSON.parse(a),o,"path"===i.relative);null==e&&"/"!==n&&(l.pathname="/"===l.pathname?n:ve([n,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)},[n,r,a,o,e]);return l}()}t.createContext(null);function Be(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=t.useContext(Oe),{pathname:i}=De(),o=JSON.stringify(ye(r));return t.useMemo(()=>xe(e,JSON.parse(o),i,"path"===n),[e,o,i,n])}function He(e,n,r,i){W(Me(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=t.useContext(Le),{matches:a}=t.useContext(Oe),s=a[a.length-1],l=s?s.params:{},c=s?s.pathname:"/",u=s?s.pathnameBase:"/",d=s&&s.route;{let e=d&&d.path||"";tt(c,!d||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let f,p=De();if(n){let e="string"===typeof n?Q(n):n;W("/"===u||e.pathname?.startsWith(u),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${e.pathname}" was given in the \`location\` prop.`),f=e}else f=p;let h=f.pathname||"/",m=h;if("/"!==u){let e=u.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=Z(e,{pathname:m});Y(d||null!=g,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Y(null==g||void 0!==g[g.length-1].route.element||void 0!==g[g.length-1].route.Component||void 0!==g[g.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=Ve(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:ve([u,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:ve([u,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,r,i);return n&&b?t.createElement($e.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},b):b}function Ge(){let e=Ze(),n=Ee(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=t.createElement(t.Fragment,null,t.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),t.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",t.createElement("code",{style:a},"ErrorBoundary")," or"," ",t.createElement("code",{style:a},"errorElement")," prop on your route.")),t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,s)}var We=t.createElement(Ge,null),Ye=class extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Oe.Provider,{value:this.props.routeContext},t.createElement(ze.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function qe(e){let{routeContext:n,match:r,children:i}=e,o=t.useContext(Pe);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Oe.Provider,{value:n},i)}function Ve(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let i=e,o=r?.errors;if(null!=o){let e=i.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);W(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let a=!1,s=-1;if(r)for(let t=0;t<i.length;t++){let e=i[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){a=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight((e,l,c)=>{let u,d=!1,f=null,p=null;r&&(u=o&&l.route.id?o[l.route.id]:void 0,f=l.route.errorElement||We,a&&(s<0&&0===c?(tt("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=l.route.hydrateFallbackElement||null)));let h=n.concat(i.slice(0,c+1)),m=()=>{let n;return n=u?f:d?p:l.route.Component?t.createElement(l.route.Component,null):l.route.element?l.route.element:e,t.createElement(qe,{match:l,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:n})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===c)?t.createElement(Ye,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}function Ke(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qe(e){let n=t.useContext(Pe);return W(n,Ke(e)),n}function Xe(e){let n=t.useContext(_e);return W(n,Ke(e)),n}function Je(e){let n=function(e){let n=t.useContext(Oe);return W(n,Ke(e)),n}(e),r=n.matches[n.matches.length-1];return W(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Ze(){let e=t.useContext(ze),n=Xe("useRouteError"),r=Je("useRouteError");return void 0!==e?e:n.errors?.[r]}var et={};function tt(e,t,n){t||et[e]||(et[e]=!0,Y(!1,n))}var nt={};function rt(e,t){e||nt[t]||(nt[t]=!0,console.warn(t))}t.memo(function(e){let{routes:t,future:n,state:r}=e;return He(t,void 0,r,n)});function it(e){W(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ot(e){let{basename:n="/",children:r=null,location:i,navigationType:o="POP",navigator:a,static:s=!1}=e;W(!Me(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),c=t.useMemo(()=>({basename:l,navigator:a,static:s,future:{}}),[l,a,s]);"string"===typeof i&&(i=Q(i));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:h="default"}=i,m=t.useMemo(()=>{let e=me(u,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:p,key:h},navigationType:o}},[l,u,d,f,p,h,o]);return Y(null!=m,`<Router basename="${l}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==m?null:t.createElement(Le.Provider,{value:c},t.createElement($e.Provider,{children:r,value:m}))}function at(e){let{children:t,location:n}=e;return He(st(t),n)}t.Component;function st(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return t.Children.forEach(e,(e,i)=>{if(!t.isValidElement(e))return;let o=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,st(e.props.children,o));W(e.type===it,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),W(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=st(e.props.children,o)),r.push(a)}),r}var lt="get",ct="application/x-www-form-urlencoded";function ut(e){return null!=e&&"string"===typeof e.tagName}var dt=null;var ft=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pt(e){return null==e||ft.has(e)?e:(Y(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ct}"`),null)}function ht(e,t){let n,r,i,o,a;if(ut(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?me(a,t):null,n=e.getAttribute("method")||lt,i=pt(e.getAttribute("enctype"))||ct,o=new FormData(e)}else if(function(e){return ut(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return ut(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?me(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||lt,i=pt(e.getAttribute("formenctype"))||pt(a.getAttribute("enctype"))||ct,o=new FormData(a,e),!function(){if(null===dt)try{new FormData(document.createElement("form"),0),dt=!1}catch(e){dt=!0}return dt}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(ut(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=lt,r=null,i=ct,a=e}var s;return o&&"text/plain"===i&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function mt(e){return{__html:e}}function gt(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function bt(e,t,n){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname=`_root.${n}`:t&&"/"===me(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function yt(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xt(e){return null!=e&&"string"===typeof e.page}function vt(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function wt(e,t,n,r,i,o){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>a(e,t)||s(e,t)):"data"===o?t.filter((t,o)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,o)||s(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function St(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function kt(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!xt(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(o)||(n.add(o),e.push({key:o,link:i})),e},[])}function Et(e,t){return"lazy"===e.mode&&!0===t}function Ct(){let e=t.useContext(Pe);return gt(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function jt(){let e=t.useContext(_e);return gt(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Pt=t.createContext(void 0);function _t(){let e=t.useContext(Pt);return gt(e,"You must render this element inside a <HydratedRouter> element"),e}function At(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Tt(e,t,n){if(n&&!$t)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}Pt.displayName="FrameworkContext";function Rt(e){let{page:n,...r}=e,{router:i}=Ct(),o=t.useMemo(()=>Z(i.routes,n,i.basename),[i.routes,n,i.basename]);return o?t.createElement(Lt,{page:n,matches:o,...r}):null}function Nt(e){let{manifest:n,routeModules:r}=_t(),[i,o]=t.useState([]);return t.useEffect(()=>{let t=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await yt(r,n);return e.links?e.links():[]}return[]}));return kt(r.flat(1).filter(vt).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,n,r).then(e=>{t||o(e)}),()=>{t=!0}},[e,n,r]),i}function Lt(e){let{page:n,matches:r,...i}=e,o=De(),{manifest:a,routeModules:s}=_t(),{basename:l}=Ct(),{loaderData:c,matches:u}=jt(),d=t.useMemo(()=>wt(n,r,u,a,o,"data"),[n,r,u,a,o]),f=t.useMemo(()=>wt(n,r,u,a,o,"assets"),[n,r,u,a,o]),p=t.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach(n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!d.some(e=>e.route.id===n.route.id)&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))}),0===e.size)return[];let i=bt(n,l,"data");return t&&e.size>0&&i.searchParams.set("_routes",r.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[i.pathname+i.search]},[l,c,o,a,d,r,n,s]),h=t.useMemo(()=>St(f,a),[f,a]),m=Nt(f);return t.createElement(t.Fragment,null,p.map(e=>t.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...i})),h.map(e=>t.createElement("link",{key:e,rel:"modulepreload",href:e,...i})),m.map(e=>{let{key:n,link:r}=e;return t.createElement("link",{key:n,nonce:i.nonce,...r})}))}var $t=!1;function Ot(e){let{manifest:n,serverHandoffString:r,isSpaMode:i,renderMeta:o,routeDiscovery:a,ssr:s}=_t(),{router:l,static:c,staticContext:u}=Ct(),{matches:d}=jt(),f=t.useContext(Ae),p=Et(a,s);o&&(o.didRenderScripts=!0);let h=Tt(d,null,i);t.useEffect(()=>{0},[]);let m=t.useMemo(()=>{if(f)return null;let i=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=c?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${p?"":`import ${JSON.stringify(n.url)}`};\n${h.map((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];gt(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,u=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${p?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map(e=>e.route.id)),o=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(o.pop();o.length>0;)a.push(`/${o.join("/")}`),o.pop();a.forEach(e=>{let n=Z(t.routes,e,t.basename);n&&n.forEach(e=>i.add(e.route.id))});let s=[...i].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:s,sri:!!n||void 0}}(n,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${h.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return t.createElement(t.Fragment,null,t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:mt(i),type:void 0}),t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:mt(o),type:"module",async:!0}))},[]),g=$t||f?[]:(n.entry.imports.concat(St(h,n,{includeHydrateFallback:!0})),[...new Set(b)]);var b;let y="object"===typeof n.sri?n.sri:{};return rt(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),$t||f?null:t.createElement(t.Fragment,null,"object"===typeof n.sri?t.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,p?null:t.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:e.crossOrigin,integrity:y[n.url],suppressHydrationWarning:!0}),t.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:e.crossOrigin,integrity:y[n.entry.module],suppressHydrationWarning:!0}),g.map(n=>t.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:e.crossOrigin,integrity:y[n],suppressHydrationWarning:!0})),m)}function zt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}t.Component;function Mt(e){let{error:n,isOutsideRemixApp:r}=e;console.error(n);let i,o=t.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(Ee(n))return t.createElement(Dt,{title:"Unhandled Thrown Response!"},t.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return t.createElement(Dt,{title:"Application Error!",isOutsideRemixApp:r},t.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),t.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),o)}function Dt(e){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:o}=e,{routeModules:a}=_t();return a.root?.Layout&&!i?o:t.createElement("html",{lang:"en"},t.createElement("head",null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),t.createElement("title",null,n)),t.createElement("body",null,t.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?t.createElement(Ot,null):null)))}var It="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{It&&(window.__reactRouterVersion="7.8.0")}catch(th){}function Ut(e){let{basename:n,children:r,window:i}=e,o=t.useRef();null==o.current&&(o.current=G({window:i,v5Compat:!0}));let a=o.current,[s,l]=t.useState({action:a.action,location:a.location}),c=t.useCallback(e=>{t.startTransition(()=>l(e))},[l]);return t.useLayoutEffect(()=>a.listen(c),[a,c]),t.createElement(ot,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:a})}var Ft=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bt=t.forwardRef(function(e,n){let r,{onClick:i,discover:o="render",prefetch:a="none",relative:s,reloadDocument:l,replace:c,state:u,target:d,to:f,preventScrollReset:p,viewTransition:h,...m}=e,{basename:g}=t.useContext(Le),b="string"===typeof f&&Ft.test(f),y=!1;if("string"===typeof f&&b&&(r=f,It))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=me(t.pathname,g);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:y=!0}catch(th){Y(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};W(Me(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=t.useContext(Le),{hash:o,pathname:a,search:s}=Be(e,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:ve([r,a])),i.createHref({pathname:l,search:s,hash:o})}(f,{relative:s}),[v,w,S]=function(e,n){let r=t.useContext(Pt),[i,o]=t.useState(!1),[a,s]=t.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=n,p=t.useRef(null);t.useEffect(()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),t.useEffect(()=>{if(i){let e=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(e)}}},[i]);let h=()=>{o(!0)},m=()=>{o(!1),s(!1)};return r?"intent"!==e?[a,p,{}]:[a,p,{onFocus:At(l,h),onBlur:At(c,m),onMouseEnter:At(u,h),onMouseLeave:At(d,m),onTouchStart:At(f,h)}]:[!1,p,{}]}(a,m),k=function(e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Fe(),c=De(),u=Be(e,{relative:a});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==r?r:K(c)===K(u);l(e,{replace:n,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[c,l,u,r,i,n,e,o,a,s])}(f,{replace:c,state:u,target:d,preventScrollReset:p,relative:s,viewTransition:h});let E=t.createElement("a",{...m,...S,href:r||x,onClick:y||l?i:function(e){i&&i(e),e.defaultPrevented||k(e)},ref:zt(n,w),target:d,"data-discover":b||"render"!==o?void 0:"true"});return v&&!b?t.createElement(t.Fragment,null,E,t.createElement(Rt,{page:x})):E});Bt.displayName="Link",t.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,viewTransition:c,children:u,...d}=e,f=Be(l,{relative:d.relative}),p=De(),h=t.useContext(_e),{navigator:m,basename:g}=t.useContext(Le),b=null!=h&&function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.useContext(Te);W(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Wt("useViewTransitionState"),o=Be(e,{relative:n});if(!r.isTransitioning)return!1;let a=me(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=me(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=fe(o.pathname,s)||null!=fe(o.pathname,a)}(f)&&!0===c,y=m.encodeLocation?m.encodeLocation(f).pathname:f.pathname,x=p.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;i||(x=x.toLowerCase(),v=v?v.toLowerCase():null,y=y.toLowerCase()),v&&g&&(v=me(v,g)||v);const w="/"!==y&&y.endsWith("/")?y.length-1:y.length;let S,k=x===y||!a&&x.startsWith(y)&&"/"===x.charAt(w),E=null!=v&&(v===y||!a&&v.startsWith(y)&&"/"===v.charAt(y.length)),C={isActive:k,isPending:E,isTransitioning:b},j=k?r:void 0;S="function"===typeof o?o(C):[o,k?"active":null,E?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let P="function"===typeof s?s(C):s;return t.createElement(Bt,{...d,"aria-current":j,className:S,ref:n,style:P,to:l,viewTransition:c},"function"===typeof u?u(C):u)}).displayName="NavLink";var Ht=t.forwardRef((e,n)=>{let{discover:r="render",fetcherKey:i,navigate:o,reloadDocument:a,replace:s,state:l,method:c=lt,action:u,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:h,...m}=e,g=Vt(),b=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=t.useContext(Le),i=t.useContext(Oe);W(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Be(e||".",{relative:n})},s=De();if(null==e){a.search=s.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:ve([r,a.pathname]));return K(a)}(u,{relative:f}),y="get"===c.toLowerCase()?"get":"post",x="string"===typeof u&&Ft.test(u);return t.createElement("form",{ref:n,method:y,action:b,onSubmit:a?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c;g(t||e.currentTarget,{fetcherKey:i,method:n,navigate:o,replace:s,state:l,relative:f,preventScrollReset:p,viewTransition:h})},...m,"data-discover":x||"render"!==r?void 0:"true"})});function Gt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wt(e){let n=t.useContext(Pe);return W(n,Gt(e)),n}Ht.displayName="Form";var Yt=0,qt=()=>`__${String(++Yt)}__`;function Vt(){let{router:e}=Wt("useSubmit"),{basename:n}=t.useContext(Le),r=Je("useRouteId");return t.useCallback(async function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:a,encType:s,formData:l,body:c}=ht(t,n);if(!1===i.navigate){let t=i.fetcherKey||qt();await e.fetch(t,r,i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||a,formEncType:i.encType||s,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||a,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,n,r])}class Kt{constructor(e){this.baseUrl=void 0,this.apiPath=void 0,this.currentUser=null,this.authToken=null,this.authorityLevel="DEMO",this.isAuthenticated=!1,this.eventListeners=new Map,this.instanceId=void 0,this.baseUrl=(null===e||void 0===e?void 0:e.baseUrl)||"https://ingeneur001.github.io/legal-retro-gaming-service",this.apiPath=(null===e||void 0===e?void 0:e.apiPath)||"/api/auth",this.instanceId=(null===e||void 0===e?void 0:e.instanceId)||`auth-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,console.log(`[AuthManager-${this.instanceId}] Created new instance`),this.initialize()}async initialize(){console.log(`[AuthManager-${this.instanceId}] Initializing...`),await this.checkExistingSession()}async checkExistingSession(){try{console.log(`[AuthManager-${this.instanceId}] Checking for existing session...`),console.log(`[AuthManager-${this.instanceId}] Full URL: ${this.baseUrl}${this.apiPath}/authority-info`);const e=await fetch(`${this.baseUrl}${this.apiPath}/authority-info`,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(console.log(`[AuthManager-${this.instanceId}] Response status: ${e.status}, OK: ${e.ok}`),e.ok){const t=await e.json();if(console.log(`[AuthManager-${this.instanceId}] Response data:`,t),t.success&&t.user)return console.log(`[AuthManager-${this.instanceId}] Existing session found:`,t.user.username),this.currentUser=this.normalizeUser(t.user),this.authToken=t.token||null,this.authorityLevel=t.authorityLevel||t.authority||"PRODUCTION",this.isAuthenticated=!0,this.emit("sessionRestored",{user:this.currentUser,authority:this.authorityLevel,isAdmin:this.isAdmin()}),!0}else if(404===e.status)return console.log(`[AuthManager-${this.instanceId}] Authority-info endpoint not found - Backend route missing`),!1}catch(e){console.error(`[AuthManager-${this.instanceId}] Session check failed:`,e)}return!1}async login(e){try{console.log(`[AuthManager-${this.instanceId}] Authority Login - ${e.username} ${e.adminPassword?"(mit Admin-PW)":"(normal)"}`);const t=await fetch(`${this.baseUrl}${this.apiPath}/authority-login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({username:e.username,password:e.password,adminPassword:e.adminPassword||void 0})}),n=await t.json();return n.success?(this.currentUser=this.normalizeUser(n.user),this.authToken=n.token||null,this.authorityLevel=n.authorityLevel||"PRODUCTION",this.isAuthenticated=!0,console.log(`[AuthManager-${this.instanceId}] Authority Login erfolgreich - ${e.username} -> ${this.authorityLevel}`),this.emit("loginSuccess",{user:this.currentUser,token:this.authToken,authority:this.authorityLevel,isAdmin:this.isAdmin()}),{success:!0,authorityLevel:this.authorityLevel,user:this.currentUser,isAdmin:this.isAdmin(),message:n.message||`Anmeldung erfolgreich - ${this.authorityLevel}`,token:this.authToken||void 0}):(console.error(`[AuthManager-${this.instanceId}] Login failed:`,n.message),this.emit("loginError",n.message||"Login failed"),{success:!1,authorityLevel:"DEMO",error:n.message||"Login failed"})}catch(t){return console.error(`[AuthManager-${this.instanceId}] Login error:`,t),this.emit("loginError","Connection error"),{success:!1,authorityLevel:"DEMO",error:"Connection error to server"}}}async register(e){try{console.log(`[AuthManager-${this.instanceId}] Creating user:`,e.username);const t=await fetch(`${this.baseUrl}${this.apiPath}/register`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({username:e.username,email:e.email,password:e.password,displayName:e.displayName||e.username,authorityLevel:e.authorityLevel||"PRODUCTION"})}),n=await t.json();return n.success?(console.log(`[AuthManager-${this.instanceId}] Registration successful`),this.emit("registerSuccess",n),{success:!0,message:"Registration successful"}):(console.error(`[AuthManager-${this.instanceId}] Registration failed:`,n.message),this.emit("registerError",n.message),{success:!1,error:n.message||"Registration failed"})}catch(t){return console.error(`[AuthManager-${this.instanceId}] Registration error:`,t),this.emit("registerError","Connection error"),{success:!1,error:"Connection error to server"}}}async logout(){try{console.log(`[AuthManager-${this.instanceId}] Logging out...`);(await fetch(`${this.baseUrl}${this.apiPath}/logout`,{method:"POST",credentials:"include"})).ok&&console.log(`[AuthManager-${this.instanceId}] Backend logout successful`)}catch(e){console.error(`[AuthManager-${this.instanceId}] Logout error:`,e)}finally{this.currentUser=null,this.authToken=null,this.authorityLevel="DEMO",this.isAuthenticated=!1,console.log(`[AuthManager-${this.instanceId}] Logged out - switched to DEMO mode`),this.emit("logoutSuccess",void 0)}}async authenticateUser(e,t){try{const n=await this.login({username:e,password:t});return n.success&&n.user?n.user:null}catch(n){return console.error(`[AuthManager-${this.instanceId}] Authentication error:`,n),null}}async getUser(e){try{const t=await fetch(`${this.baseUrl}${this.apiPath}/user/${encodeURIComponent(e)}`,{method:"GET",credentials:"include",headers:{Authorization:this.authToken?`Bearer ${this.authToken}`:""}});if(t.ok){const e=await t.json();if(e.success&&e.user)return this.normalizeUser(e.user)}return null}catch(t){return console.error(`[AuthManager-${this.instanceId}] Get user error:`,t),null}}normalizeUser(e){return{id:"string"===typeof e.id?parseInt(e.id):e.id,username:e.username,email:e.email,displayName:e.displayName||e.display_name,membershipTier:e.membershipTier||e.membership_tier||"basic",last_active:e.last_active,created_at:e.created_at}}getCurrentUser(){return this.currentUser}getAuthToken(){return this.authToken}getAuthorityLevel(){return this.authorityLevel}isLoggedIn(){return this.isAuthenticated&&null!==this.currentUser}isAdmin(){return"ADMIN"===this.authorityLevel}isProduction(){return"PRODUCTION"===this.authorityLevel}isDemo(){return"DEMO"===this.authorityLevel}getInstanceId(){return this.instanceId}on(e,t){this.eventListeners.has(e)||this.eventListeners.set(e,[]),this.eventListeners.get(e).push(t)}off(e,t){if(this.eventListeners.has(e)){const n=this.eventListeners.get(e),r=n.indexOf(t);r>-1&&n.splice(r,1)}}emit(e,t){this.eventListeners.has(e)&&this.eventListeners.get(e).forEach(n=>{try{n(t)}catch(r){console.error(`[AuthManager-${this.instanceId}] Error in event listener for ${e}:`,r)}})}getStatus(){var e,t,n;return{isAuthenticated:this.isAuthenticated,currentUser:(null===(e=this.currentUser)||void 0===e?void 0:e.username)||null,authorityLevel:this.authorityLevel,hasToken:!!this.authToken,baseUrl:this.baseUrl,userId:(null===(t=this.currentUser)||void 0===t?void 0:t.id)||null,membershipTier:(null===(n=this.currentUser)||void 0===n?void 0:n.membershipTier)||null,isAdmin:this.isAdmin()}}getDebugStatus(){return{instanceId:this.instanceId,authorityLevel:this.authorityLevel,isProduction:this.isProduction(),isAdmin:this.isAdmin(),isAuthenticated:this.isAuthenticated,hasUser:!!this.currentUser,backendUrl:this.baseUrl}}createGuestUser(){return this.currentUser={id:Math.floor(1e6*Math.random()),username:"Guest Player",email:"guest@retro.game",displayName:"Guest Player",membershipTier:"basic",created_at:(new Date).toISOString()},this.isAuthenticated=!0,this.authorityLevel="DEMO",console.log(`[AuthManager-${this.instanceId}] Guest user created`),this.emit("loginSuccess",{user:this.currentUser,authority:this.authorityLevel,isGuest:!0}),this.currentUser}async updateStats(e,t){return console.warn(`[AuthManager-${this.instanceId}] updateStats deprecated - use backend user stats`),!1}async updateHighScore(e,t){return console.warn(`[AuthManager-${this.instanceId}] updateHighScore deprecated - use backend user stats`),!1}}const Qt=()=>{const e=(0,t.useRef)(null),[n,r]=(0,t.useState)({currentUser:null,authToken:null,authorityLevel:"DEMO",isAuthenticated:!1,isLoading:!0,error:null,isGuest:!1});(0,t.useEffect)(()=>{var t;e.current||(e.current=new Kt(t));const n=e.current,i=e=>{console.log("[useAuth] Session restored:",e.user.username),r(t=>({...t,currentUser:e.user,authorityLevel:e.authority,isAuthenticated:!0,isLoading:!1,error:null}))},o=e=>{console.log("[useAuth] Login successful:",e.user.username),r(t=>({...t,currentUser:e.user,authToken:e.token||null,authorityLevel:e.authority,isAuthenticated:!0,isLoading:!1,error:null,isGuest:e.isGuest||!1}))},a=e=>{console.error("[useAuth] Login error:",e),r(t=>({...t,error:e,isLoading:!1,isAuthenticated:!1}))},s=()=>{console.log("[useAuth] Logout successful"),r(e=>({...e,currentUser:null,authToken:null,authorityLevel:"DEMO",isAuthenticated:!1,isLoading:!1,error:null,isGuest:!1}))},l=e=>{console.log("[useAuth] Registration successful"),r(e=>({...e,error:null,isLoading:!1}))},c=e=>{console.error("[useAuth] Registration error:",e),r(t=>({...t,error:e,isLoading:!1}))},u=e=>{console.log("[useAuth] Stats updated:",e),r(e=>({...e,currentUser:e.currentUser?{...e.currentUser}:null}))},d=e=>{console.log("[useAuth] High score updated:",e),r(e=>({...e,currentUser:e.currentUser?{...e.currentUser}:null}))};n.on("sessionRestored",i),n.on("loginSuccess",o),n.on("loginError",a),n.on("logoutSuccess",s),n.on("registerSuccess",l),n.on("registerError",c),n.on("statsUpdated",u),n.on("highScoreUpdated",d);const f={currentUser:n.getCurrentUser(),authToken:n.getAuthToken(),authorityLevel:n.getAuthorityLevel(),isAuthenticated:n.isLoggedIn(),isLoading:!1,error:null,isGuest:!1};return r(f),()=>{n.off("sessionRestored",i),n.off("loginSuccess",o),n.off("loginError",a),n.off("logoutSuccess",s),n.off("registerSuccess",l),n.off("registerError",c),n.off("statsUpdated",u),n.off("highScoreUpdated",d)}},[]);const i=async(t,r)=>{if(!n.isAuthenticated||!e.current)return console.warn("[useAuth] Not authenticated or AuthManager not initialized - stats not updated"),!1;try{return await e.current.updateStats(t,r)}catch(i){return console.error("[useAuth] Stats update error:",i),!1}},o=async(t,r)=>{if(!n.isAuthenticated||!e.current)return console.warn("[useAuth] Not authenticated or AuthManager not initialized - high score not updated"),!1;try{return await e.current.updateHighScore(t,r)}catch(i){return console.error("[useAuth] High score update error:",i),!1}},a="ADMIN"===n.authorityLevel,s="ADMIN"===n.authorityLevel;return{currentUser:n.currentUser,authToken:n.authToken,authorityLevel:n.authorityLevel,isAuthenticated:n.isAuthenticated,isLoading:n.isLoading,error:n.error,isGuest:n.isGuest,isLoggedIn:n.isAuthenticated,isAdmin:a,isDevelopment:s,login:async t=>{r(e=>({...e,isLoading:!0,error:null}));try{return await e.current.login(t)}catch(n){return console.error("[useAuth] Login error:",n),r(e=>({...e,isLoading:!1,error:"Login failed"})),{success:!1,error:"Login failed"}}},register:async t=>{r(e=>({...e,isLoading:!0,error:null}));try{return await e.current.register(t)}catch(n){return console.error("[useAuth] Registration error:",n),r(e=>({...e,isLoading:!1,error:"Registration failed"})),{success:!1,error:"Registration failed"}}},logout:async()=>{r(e=>({...e,isLoading:!0}));try{await e.current.logout()}catch(t){console.error("[useAuth] Logout error:",t)}},loginAsGuest:()=>{if(!e.current)return{success:!1,error:"AuthManager not initialized"};r(e=>({...e,isLoading:!0,error:null}));try{return{success:!0,user:e.current.createGuestUser()}}catch(t){return console.error("[useAuth] Guest login error:",t),r(e=>({...e,isLoading:!1,error:"Guest login failed"})),{success:!1,error:"Guest login failed"}}},checkSession:async()=>{if(!e.current)return console.error("[useAuth] AuthManager not initialized for session check"),!1;r(e=>({...e,isLoading:!0}));try{return await e.current.checkExistingSession()}catch(t){return console.error("[useAuth] Session check error:",t),r(e=>({...e,isLoading:!1,error:"Session check failed"})),!1}},clearError:()=>{r(e=>({...e,error:null}))},updateStats:i,updateHighScore:o,recordGameResult:async(e,t,r)=>{if(!n.isAuthenticated)return console.warn("[useAuth] Not authenticated - game result not recorded"),{newHighScore:!1};console.log(`[useAuth] Recording game result: ${e} = ${t}`);try{await i(e,t);const n=await o(e,t);return r&&console.log(`[useAuth] Additional game data for ${e}:`,r),{newHighScore:n}}catch(a){return console.error("[useAuth] Game result recording error:",a),{newHighScore:!1}}},getManagerStatus:()=>e.current?e.current.getStatus():{isAuthenticated:!1,currentUser:null,authorityLevel:"DEMO",hasToken:!1,baseUrl:"",userId:null,membershipTier:null,isAdmin:!1},user:n.currentUser,onlineUsers:0}},Xt=()=>{const{currentUser:e,isAuthenticated:t,recordGameResult:n}=Qt();return{currentUser:e,isLoggedIn:t,recordGameResult:n}};var Jt=n(579);const Zt="demo",en="premium",tn="admin",nn={demo:{requiresRegistration:!1,sessionLimitMonths:3,gameAccess:{singlePlayer:{basic:!0,extended:!1,premium:!1},multiPlayer:{selected:!1,all:!1},arcade:{enabled:!1}},paymentRequired:!1,membershipLevel:"GUEST",enableAllFeatures:!1,languages:["en"],maxUsers:50,showDebugInfo:!1,showUserManagement:!1,showAnalytics:!1,allowModeSwitch:!1,showDemoNotices:!0,showUpgradePrompts:!0},level01:{requiresRegistration:!0,gameAccess:{singlePlayer:{basic:!0,extended:!0,premium:!1},multiPlayer:{selected:!0,all:!1},arcade:{enabled:!1}},paymentRequired:!1,membershipLevel:"BASIC",enableAllFeatures:!1,languages:["en","de"],maxUsers:200,showDebugInfo:!1,showUserManagement:!1,showAnalytics:!1,allowModeSwitch:!1,showDemoNotices:!1,showUpgradePrompts:!0},level02:{requiresRegistration:!0,gameAccess:{singlePlayer:{basic:!0,extended:!0,premium:!1},multiPlayer:{selected:!0,all:!0},arcade:{enabled:!1}},paymentRequired:!1,membershipLevel:"STANDARD",enableAllFeatures:!0,languages:["en","de","fr"],maxUsers:500,showDebugInfo:!1,showUserManagement:!1,showAnalytics:!1,allowModeSwitch:!1,showDemoNotices:!1,showUpgradePrompts:!0},vip:{requiresRegistration:!0,gameAccess:{singlePlayer:{basic:!0,extended:!0,premium:!1},multiPlayer:{selected:!0,all:!0},arcade:{enabled:!1}},paymentRequired:!1,membershipLevel:"VIP",enableAllFeatures:!0,languages:["en","de","fr","es"],maxUsers:999,showDebugInfo:!1,showUserManagement:!1,showAnalytics:!1,allowModeSwitch:!1,showDemoNotices:!1,showUpgradePrompts:!0},premium:{requiresRegistration:!0,paymentRequired:!0,gameAccess:{singlePlayer:{basic:!0,extended:!0,premium:!0},multiPlayer:{selected:!0,all:!0},arcade:{enabled:!0}},membershipLevel:"PREMIUM",enableAllFeatures:!0,languages:["en","de","fr","es"],maxUsers:999,showDebugInfo:!1,showUserManagement:!1,showAnalytics:!1,allowModeSwitch:!1,showDemoNotices:!1,showUpgradePrompts:!1},admin:{requiresRegistration:!0,paymentRequired:!1,gameAccess:{singlePlayer:{basic:!0,extended:!0,premium:!0},multiPlayer:{selected:!0,all:!0},arcade:{enabled:!0}},membershipLevel:"ADMIN",enableAllFeatures:!0,languages:["en","de","fr","es"],maxUsers:999,showDebugInfo:!0,showUserManagement:!0,showAnalytics:!0,allowModeSwitch:!0,showDemoNotices:!1,showUpgradePrompts:!1}},rn=(0,t.createContext)(void 0),on=e=>{let{children:n}=e;const[r,i]=(0,t.useState)(Zt),[o,a]=(0,t.useState)(!0),{authorityLevel:s,isAuthenticated:l}=Qt();(0,t.useEffect)(()=>{let e=Zt;switch(s){case"ADMIN":e=tn;break;case"PRODUCTION":e=en;break;default:e=Zt}console.log(`\ud83d\udc64 Authority: ${s} \u2192 Mode: ${e.toUpperCase()}`),console.log("\ud83d\udd10 Registered: "+(l?"YES":"NO")),i(e),a(!1)},[s,l]);const c=nn[r],u=c.allowModeSwitch;(0,t.useEffect)(()=>{o||(console.log(`\ud83c\udfae RetroRetro Mode: ${r.toUpperCase()}`),console.log(`\ud83d\udc8e Membership: ${c.membershipLevel}`),console.log("\ud83c\udfaf Game Access:",c.gameAccess))},[r,c,o]);const d={mode:r,config:c,setMode:e=>{u?(console.log(`\ud83d\udd04 Mode Switch: ${r.toUpperCase()} \u2192 ${e.toUpperCase()}`),i(e)):console.warn(`\ud83d\udeab Mode switching disabled for ${c.membershipLevel}`)},canSwitchMode:u,gameAccess:c.gameAccess,membershipLevel:c.membershipLevel};return(0,Jt.jsx)(rn.Provider,{value:d,children:n})},an=()=>{const e=(0,t.useContext)(rn);if(void 0===e)throw new Error("useModeDetection must be used within a ModeProvider");return e};var sn=function(){return sn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},sn.apply(this,arguments)};Object.create;function ln(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var cn=n(324),un=n.n(cn),dn="-ms-",fn="-moz-",pn="-webkit-",hn="comm",mn="rule",gn="decl",bn="@keyframes",yn=Math.abs,xn=String.fromCharCode,vn=Object.assign;function wn(e){return e.trim()}function Sn(e,t){return(e=t.exec(e))?e[0]:e}function kn(e,t,n){return e.replace(t,n)}function En(e,t,n){return e.indexOf(t,n)}function Cn(e,t){return 0|e.charCodeAt(t)}function jn(e,t,n){return e.slice(t,n)}function Pn(e){return e.length}function _n(e){return e.length}function An(e,t){return t.push(e),e}function Tn(e,t){return e.filter(function(e){return!Sn(e,t)})}var Rn=1,Nn=1,Ln=0,$n=0,On=0,zn="";function Mn(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Rn,column:Nn,length:a,return:"",siblings:s}}function Dn(e,t){return vn(Mn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function In(e){for(;e.root;)e=Dn(e.root,{children:[e]});An(e,e.siblings)}function Un(){return On=$n>0?Cn(zn,--$n):0,Nn--,10===On&&(Nn=1,Rn--),On}function Fn(){return On=$n<Ln?Cn(zn,$n++):0,Nn++,10===On&&(Nn=1,Rn++),On}function Bn(){return Cn(zn,$n)}function Hn(){return $n}function Gn(e,t){return jn(zn,e,t)}function Wn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yn(e){return Rn=Nn=1,Ln=Pn(zn=e),$n=0,[]}function qn(e){return zn="",e}function Vn(e){return wn(Gn($n-1,Xn(91===e?e+2:40===e?e+1:e)))}function Kn(e){for(;(On=Bn())&&On<33;)Fn();return Wn(e)>2||Wn(On)>3?"":" "}function Qn(e,t){for(;--t&&Fn()&&!(On<48||On>102||On>57&&On<65||On>70&&On<97););return Gn(e,Hn()+(t<6&&32==Bn()&&32==Fn()))}function Xn(e){for(;Fn();)switch(On){case e:return $n;case 34:case 39:34!==e&&39!==e&&Xn(On);break;case 40:41===e&&Xn(e);break;case 92:Fn()}return $n}function Jn(e,t){for(;Fn()&&e+On!==57&&(e+On!==84||47!==Bn()););return"/*"+Gn(t,$n-1)+"*"+xn(47===e?e:Fn())}function Zn(e){for(;!Wn(Bn());)Fn();return Gn(e,$n)}function er(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function tr(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case gn:return e.return=e.return||e.value;case hn:return"";case bn:return e.return=e.value+"{"+er(e.children,r)+"}";case mn:if(!Pn(e.value=e.props.join(",")))return""}return Pn(n=er(e.children,r))?e.return=e.value+"{"+n+"}":""}function nr(e,t,n){switch(function(e,t){return 45^Cn(e,0)?(((t<<2^Cn(e,0))<<2^Cn(e,1))<<2^Cn(e,2))<<2^Cn(e,3):0}(e,t)){case 5103:return pn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pn+e+e;case 4789:return fn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pn+e+fn+e+dn+e+e;case 5936:switch(Cn(e,t+11)){case 114:return pn+e+dn+kn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pn+e+dn+kn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pn+e+dn+kn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return pn+e+dn+e+e;case 6165:return pn+e+dn+"flex-"+e+e;case 5187:return pn+e+kn(e,/(\w+).+(:[^]+)/,pn+"box-$1$2"+dn+"flex-$1$2")+e;case 5443:return pn+e+dn+"flex-item-"+kn(e,/flex-|-self/g,"")+(Sn(e,/flex-|baseline/)?"":dn+"grid-row-"+kn(e,/flex-|-self/g,""))+e;case 4675:return pn+e+dn+"flex-line-pack"+kn(e,/align-content|flex-|-self/g,"")+e;case 5548:return pn+e+dn+kn(e,"shrink","negative")+e;case 5292:return pn+e+dn+kn(e,"basis","preferred-size")+e;case 6060:return pn+"box-"+kn(e,"-grow","")+pn+e+dn+kn(e,"grow","positive")+e;case 4554:return pn+kn(e,/([^-])(transform)/g,"$1"+pn+"$2")+e;case 6187:return kn(kn(kn(e,/(zoom-|grab)/,pn+"$1"),/(image-set)/,pn+"$1"),e,"")+e;case 5495:case 3959:return kn(e,/(image-set\([^]*)/,pn+"$1$`$1");case 4968:return kn(kn(e,/(.+:)(flex-)?(.*)/,pn+"box-pack:$3"+dn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pn+e+e;case 4200:if(!Sn(e,/flex-|baseline/))return dn+"grid-column-align"+jn(e,t)+e;break;case 2592:case 3360:return dn+kn(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Sn(e.props,/grid-\w+-end/)})?~En(e+(n=n[t].value),"span",0)?e:dn+kn(e,"-start","")+e+dn+"grid-row-span:"+(~En(n,"span",0)?Sn(n,/\d+/):+Sn(n,/\d+/)-+Sn(e,/\d+/))+";":dn+kn(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Sn(e.props,/grid-\w+-start/)})?e:dn+kn(kn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return kn(e,/(.+)-inline(.+)/,pn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pn(e)-1-t>6)switch(Cn(e,t+1)){case 109:if(45!==Cn(e,t+4))break;case 102:return kn(e,/(.+:)(.+)-([^]+)/,"$1"+pn+"$2-$3$1"+fn+(108==Cn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~En(e,"stretch",0)?nr(kn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return kn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,a,s){return dn+n+":"+r+s+(i?dn+n+"-span:"+(o?a:+a-+r)+s:"")+e});case 4949:if(121===Cn(e,t+6))return kn(e,":",":"+pn)+e;break;case 6444:switch(Cn(e,45===Cn(e,14)?18:11)){case 120:return kn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pn+(45===Cn(e,14)?"inline-":"")+"box$3$1"+pn+"$2$3$1"+dn+"$2box$3")+e;case 100:return kn(e,":",":"+dn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return kn(e,"scroll-","scroll-snap-")+e}return e}function rr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case gn:return void(e.return=nr(e.value,e.length,n));case bn:return er([Dn(e,{value:kn(e.value,"@","@"+pn)})],r);case mn:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Sn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":In(Dn(e,{props:[kn(t,/:(read-\w+)/,":-moz-$1")]})),In(Dn(e,{props:[t]})),vn(e,{props:Tn(n,r)});break;case"::placeholder":In(Dn(e,{props:[kn(t,/:(plac\w+)/,":"+pn+"input-$1")]})),In(Dn(e,{props:[kn(t,/:(plac\w+)/,":-moz-$1")]})),In(Dn(e,{props:[kn(t,/:(plac\w+)/,dn+"input-$1")]})),In(Dn(e,{props:[t]})),vn(e,{props:Tn(n,r)})}return""})}}function ir(e){return qn(or("",null,null,null,[""],e=Yn(e),0,[0],e))}function or(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,f=0,p=0,h=0,m=1,g=1,b=1,y=0,x="",v=i,w=o,S=r,k=x;g;)switch(h=y,y=Fn()){case 40:if(108!=h&&58==Cn(k,d-1)){-1!=En(k+=kn(Vn(y),"&","&\f"),"&\f",yn(c?s[c-1]:0))&&(b=-1);break}case 34:case 39:case 91:k+=Vn(y);break;case 9:case 10:case 13:case 32:k+=Kn(h);break;case 92:k+=Qn(Hn()-1,7);continue;case 47:switch(Bn()){case 42:case 47:An(sr(Jn(Fn(),Hn()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[c++]=Pn(k)*b;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==b&&(k=kn(k,/\f/g,"")),p>0&&Pn(k)-d&&An(p>32?lr(k+";",r,n,d-1,l):lr(kn(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(An(S=ar(k,t,n,c,u,i,s,x,v=[],w=[],d,o),o),123===y)if(0===u)or(k,t,S,S,v,o,d,s,w);else switch(99===f&&110===Cn(k,3)?100:f){case 100:case 108:case 109:case 115:or(e,S,S,r&&An(ar(e,S,S,0,0,i,s,x,i,v=[],d,w),w),i,w,d,s,r?v:w);break;default:or(k,S,S,S,[""],w,0,s,w)}}c=u=p=0,m=b=1,x=k="",d=a;break;case 58:d=1+Pn(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Un())continue;switch(k+=xn(y),y*m){case 38:b=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(Pn(k)-1)*b,b=1;break;case 64:45===Bn()&&(k+=Vn(Fn())),f=Bn(),u=d=Pn(x=k+=Zn(Hn())),y++;break;case 45:45===h&&2==Pn(k)&&(m=0)}}return o}function ar(e,t,n,r,i,o,a,s,l,c,u,d){for(var f=i-1,p=0===i?o:[""],h=_n(p),m=0,g=0,b=0;m<r;++m)for(var y=0,x=jn(e,f+1,f=yn(g=a[m])),v=e;y<h;++y)(v=wn(g>0?p[y]+" "+x:kn(x,/&\f/g,p[y])))&&(l[b++]=v);return Mn(e,t,n,0===i?mn:s,l,c,u,d)}function sr(e,t,n,r){return Mn(e,t,n,hn,xn(On),jn(e,2,-2),0,r)}function lr(e,t,n,r,i){return Mn(e,t,n,gn,jn(e,0,r),jn(e,r+1,-1),r,i)}var cr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ur="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}&&({NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.SC_ATTR)||"data-styled",dr="active",fr="data-styled-version",pr="6.1.19",hr="/*!sc*/\n",mr="undefined"!=typeof window&&"undefined"!=typeof document,gr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_APP_NAME:"Legal Retro Gaming Service",REACT_APP_BACKEND_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_DEMO_MODE:"true",REACT_APP_ENVIRONMENT:"production",REACT_APP_GATEWAY_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_PAYMENT_CURRENCY:"EUR",REACT_APP_PAYMENT_ENABLED:"true",REACT_APP_PAYMENT_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_SOCKET_URL:"https://ingeneur001.github.io/legal-retro-gaming-service",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_demo_mock_publishable_key_for_testing_retro_gaming"}.SC_DISABLE_SPEEDY)),br={},yr=(new Set,Object.freeze([])),xr=Object.freeze({});function vr(e,t,n){return void 0===n&&(n=xr),e.theme!==n.theme&&e.theme||t||n.theme}var wr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Sr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kr=/(^-|-$)/g;function Er(e){return e.replace(Sr,"-").replace(kr,"")}var Cr=/(a)(d)/gi,jr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=jr(t%52)+n;return(jr(t%52)+n).replace(Cr,"$1-$2")}var _r,Ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tr=function(e){return Ar(5381,e)};function Rr(e){return Pr(Tr(e)>>>0)}function Nr(e){return e.displayName||e.name||"Component"}function Lr(e){return"string"==typeof e&&!0}var $r="function"==typeof Symbol&&Symbol.for,Or=$r?Symbol.for("react.memo"):60115,zr=$r?Symbol.for("react.forward_ref"):60112,Mr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ir={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ur=((_r={})[zr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_r[Or]=Ir,_r);function Fr(e){return("type"in(t=e)&&t.type.$$typeof)===Or?Ir:"$$typeof"in e?Ur[e.$$typeof]:Mr;var t}var Br=Object.defineProperty,Hr=Object.getOwnPropertyNames,Gr=Object.getOwnPropertySymbols,Wr=Object.getOwnPropertyDescriptor,Yr=Object.getPrototypeOf,qr=Object.prototype;function Vr(e,t,n){if("string"!=typeof t){if(qr){var r=Yr(t);r&&r!==qr&&Vr(e,r,n)}var i=Hr(t);Gr&&(i=i.concat(Gr(t)));for(var o=Fr(e),a=Fr(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Dr||n&&n[l]||a&&l in a||o&&l in o)){var c=Wr(t,l);try{Br(e,l,c)}catch(e){}}}}return e}function Kr(e){return"function"==typeof e}function Qr(e){return"object"==typeof e&&"styledComponentId"in e}function Xr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Zr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ei(e,t,n){if(void 0===n&&(n=!1),!n&&!Zr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ei(e[r],t[r]);else if(Zr(t))for(var r in t)e[r]=ei(e[r],t[r]);return e}function ti(e,t){Object.defineProperty(e,"toString",{value:t})}function ni(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ri=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw ni(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(hr);return t},e}(),ii=new Map,oi=new Map,ai=1,si=function(e){if(ii.has(e))return ii.get(e);for(;oi.has(ai);)ai++;var t=ai++;return ii.set(e,t),oi.set(t,e),t},li=function(e,t){ai=t+1,ii.set(e,t),oi.set(t,e)},ci="style[".concat(ur,"][").concat(fr,'="').concat(pr,'"]'),ui=new RegExp("^".concat(ur,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),di=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},fi=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(hr),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(ui);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(li(u,c),di(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},pi=function(e){for(var t=document.querySelectorAll(ci),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ur)!==dr&&(fi(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function hi(){return n.nc}var mi=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ur,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(ur,dr),r.setAttribute(fr,pr);var a=hi();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},gi=function(){function e(e){this.element=mi(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw ni(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),bi=function(){function e(e){this.element=mi(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yi=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xi=mr,vi={isServer:!mr,useCSSOMInjection:!gr},wi=function(){function e(e,t,n){void 0===e&&(e=xr),void 0===t&&(t={});var r=this;this.options=sn(sn({},vi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&mr&&xi&&(xi=!1,pi(this)),ti(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return oi.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(ur,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(hr)},o=0;o<n;o++)i(o);return r}(r)})}return e.registerId=function(e){return si(e)},e.prototype.rehydrate=function(){!this.server&&mr&&pi(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(sn(sn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new yi(n):t?new gi(n):new bi(n)}(this.options),new ri(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(si(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(si(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(si(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Si=/&/g,ki=/^\s*\/\/.*$/gm;function Ei(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ei(e.children,t)),e})}function Ci(e){var t,n,r,i=void 0===e?xr:e,o=i.options,a=void 0===o?xr:o,s=i.plugins,l=void 0===s?yr:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===mn&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Si,n).replace(r,c))}),a.prefix&&u.push(rr),u.push(tr);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(ki,""),c=ir(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Ei(c,a.namespace));var d,f=[];return er(c,function(e){var t=_n(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce(function(e,t){return t.name||ni(15),Ar(e,t.name)},5381).toString():"",d}var ji=new wi,Pi=Ci(),_i=t.createContext({shouldForwardProp:void 0,styleSheet:ji,stylis:Pi}),Ai=(_i.Consumer,t.createContext(void 0));function Ti(){return(0,t.useContext)(_i)}function Ri(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],o=Ti().styleSheet,a=(0,t.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,t.useMemo)(function(){return Ci({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){un()(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return t.createElement(_i.Provider,{value:l},t.createElement(Ai.Provider,{value:s},e.children))}var Ni=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Pi);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ti(this,function(){throw ni(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Pi),this.name+e.hash},e}(),Li=function(e){return e>="A"&&e<="Z"};function $i(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Li(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Oi=function(e){return null==e||!1===e||""===e},zi=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Oi(o)&&(Array.isArray(o)&&o.isCss||Kr(o)?r.push("".concat($i(i),":"),o,";"):Zr(o)?r.push.apply(r,ln(ln(["".concat(i," {")],zi(o),!1),["}"],!1)):r.push("".concat($i(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in cr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Mi(e,t,n,r){return Oi(e)?[]:Qr(e)?[".".concat(e.styledComponentId)]:Kr(e)?!Kr(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Mi(e(t),t,n,r):e instanceof Ni?n?(e.inject(n,r),[e.getName(r)]):[e]:Zr(e)?zi(e):Array.isArray(e)?Array.prototype.concat.apply(yr,e.map(function(e){return Mi(e,t,n,r)})):[e.toString()];var i}function Di(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kr(n)&&!Qr(n))return!1}return!0}var Ii=Tr(pr),Ui=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Di(e),this.componentId=t,this.baseHash=Ar(Ii,t),this.baseStyle=n,wi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Xr(r,this.staticRulesId);else{var i=Jr(Mi(this.rules,e,t,n)),o=Pr(Ar(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=Xr(r,o),this.staticRulesId=o}else{for(var s=Ar(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Jr(Mi(u,e,t,n));s=Ar(s,d+c),l+=d}}if(l){var f=Pr(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=Xr(r,f)}}return r},e}(),Fi=t.createContext(void 0);Fi.Consumer;function Bi(e){var n=t.useContext(Fi),r=(0,t.useMemo)(function(){return function(e,t){if(!e)throw ni(14);if(Kr(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw ni(8);return t?sn(sn({},t),e):e}(e.theme,n)},[e.theme,n]);return e.children?t.createElement(Fi.Provider,{value:r},e.children):null}var Hi={};new Set;function Gi(e,n,r){var i=Qr(e),o=e,a=!Lr(e),s=n.attrs,l=void 0===s?yr:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Er(e);Hi[n]=(Hi[n]||0)+1;var r="".concat(n,"-").concat(Rr(pr+n+Hi[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return Lr(e)?"styled.".concat(e):"Styled(".concat(Nr(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Er(n.displayName),"-").concat(n.componentId):n.componentId||u,h=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;m=function(e,t){return g(e,t)&&b(e,t)}}else m=g}var y=new Ui(r,p,i?o.componentStyle:void 0);function x(e,n){return function(e,n,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=t.useContext(Fi),d=Ti(),f=e.shouldForwardProp||d.shouldForwardProp,p=vr(n,u,a)||xr,h=function(e,t,n){for(var r,i=sn(sn({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=Kr(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?Xr(i[s],a[s]):"style"===s?sn(sn({},i[s]),a[s]):a[s]}return t.className&&(i.className=Xr(i.className,t.className)),i}(i,n,p),m=h.as||c,g={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===p||("forwardedAs"===b?g.as=h.forwardedAs:f&&!f(b,m)||(g[b]=h[b]));var y=function(e,t){var n=Ti();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),x=Xr(s,l);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),g[Lr(m)&&!wr.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,t.createElement)(m,g)}(v,e,n)}x.displayName=f;var v=t.forwardRef(x);return v.attrs=h,v.componentStyle=y,v.displayName=f,v.shouldForwardProp=m,v.foldedComponentIds=i?Xr(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=p,v.target=i?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)ei(e,i[r],!0);return e}({},o.defaultProps,e):e}}),ti(v,function(){return".".concat(v.styledComponentId)}),a&&Vr(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Wi(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yi=function(e){return Object.assign(e,{isCss:!0})};function qi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Kr(e)||Zr(e))return Yi(Mi(Wi(yr,ln([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Mi(r):Yi(Mi(Wi(r,t)))}function Vi(e,t,n){if(void 0===n&&(n=xr),!t)throw ni(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,qi.apply(void 0,ln([r],i,!1)))};return r.attrs=function(r){return Vi(e,t,sn(sn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Vi(e,t,sn(sn({},n),r))},r}var Ki=function(e){return Vi(Gi,e)},Qi=Ki;wr.forEach(function(e){Qi[e]=Ki(e)});var Xi=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Di(e),wi.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Jr(Mi(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&wi.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ji(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=qi.apply(void 0,ln([e],n,!1)),o="sc-global-".concat(Rr(JSON.stringify(i))),a=new Xi(i,o),s=function(e){var n=Ti(),r=t.useContext(Fi),i=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&l(i,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return l(i,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(i,n.styleSheet)}},[i,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,br,n,i);else{var o=sn(sn({},t),{theme:vr(t,r,s.defaultProps)});a.renderStyles(e,o,n,i)}}return t.memo(s)}function Zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Jr(qi.apply(void 0,ln([e],t,!1))),i=Rr(r);return new Ni(i,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=hi(),r=Jr([n&&'nonce="'.concat(n,'"'),"".concat(ur,'="true"'),"".concat(fr,'="').concat(pr,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ni(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw ni(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[ur]="",n[fr]=pr,n.dangerouslySetInnerHTML={__html:r},n),o=hi();return o&&(i.nonce=o),[t.createElement("style",sn({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new wi({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw ni(2);return t.createElement(Ri,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ni(3)}})(),"__sc-".concat(ur,"__");const eo=Zi`
  0% {
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00,
      0 0 30px #00ff00;
  }
  100% {
    text-shadow: 
      0 0 5px #00ff00,
      0 0 10px #00ff00,
      0 0 15px #00ff00;
  }
`,to=Zi`
  0% {
    text-shadow: 
      0 0 15px #00ffff,
      0 0 30px #00ffff,
      0 0 45px #00ffff,
      0 0 60px #00ffff;
  }
  100% {
    text-shadow: 
      0 0 8px #00ffff,
      0 0 15px #00ffff,
      0 0 25px #00ffff,
      0 0 35px #00ffff;
  }
`,no=Zi`
  0% {
    border-color: #00ffff;
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.8),
      0 0 40px rgba(0, 255, 255, 0.5);
  }
  25% {
    border-color: #00ff88;
    box-shadow: 
      0 0 20px rgba(0, 255, 136, 0.8),
      0 0 40px rgba(0, 255, 136, 0.5);
  }
  50% {
    border-color: #ff00ff;
    box-shadow: 
      0 0 20px rgba(255, 0, 255, 0.8),
      0 0 40px rgba(255, 0, 255, 0.5);
  }
  75% {
    border-color: #ffff00;
    box-shadow: 
      0 0 20px rgba(255, 255, 0, 0.8),
      0 0 40px rgba(255, 255, 0, 0.5);
  }
  100% {
    border-color: #00ffff;
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.8),
      0 0 40px rgba(0, 255, 255, 0.5);
  }
`,ro=Zi`
  0% {
    text-shadow: 
      0 0 5px #ffff00,
      0 0 10px #ffff00,
      0 0 15px #ffff00;
  }
  100% {
    text-shadow: 
      0 0 3px #ffff00,
      0 0 6px #ffff00,
      0 0 9px #ffff00;
  }
`,io=Zi`
  0% {
    text-shadow: 
      0 0 5px #ff8800,
      0 0 10px #ff8800,
      0 0 15px #ff8800;
    border-color: #ff8800;
    box-shadow: 
      0 0 8px rgba(255, 136, 0, 0.5),
      inset 0 0 8px rgba(255, 136, 0, 0.2);
  }
  100% {
    text-shadow: 
      0 0 8px #ff8800,
      0 0 15px #ff8800,
      0 0 25px #ff8800;
    border-color: #ff8800;
    box-shadow: 
      0 0 15px rgba(255, 136, 0, 0.8),
      inset 0 0 15px rgba(255, 136, 0, 0.3);
  }
`,oo=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`,ao=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,so=Qi.span`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 2px solid ${e=>{switch(e.authorityLevel){case"DEMO":return"#666666";case"ADMIN":return"#ff9500";default:return"#00ff00"}}};
  color: ${e=>{switch(e.authorityLevel){case"DEMO":return"#666666";case"ADMIN":return"#ff9500";default:return"#00ff00"}}};
  background: ${e=>{switch(e.authorityLevel){case"DEMO":return"rgba(102, 102, 102, 0.1)";case"ADMIN":return"rgba(255, 149, 0, 0.1)";default:return"rgba(0, 255, 0, 0.1)"}}};
  text-shadow: ${e=>{switch(e.authorityLevel){case"DEMO":return"none";case"ADMIN":return"0 0 10px #ff9500, 0 0 20px #ff9500";default:return"0 0 10px #00ff00, 0 0 20px #00ff00"}}};
  animation: ${e=>"DEMO"===e.authorityLevel?"none":qi`${eo} 2s infinite alternate`};
`,lo=Qi.div`
  text-align: center;
  margin: 3rem 0;

  h1 {
    font-size: 6rem;
    font-weight: bold;
    color: #00ffff;
    text-shadow: 
      0 0 15px #00ffff,
      0 0 30px #00ffff,
      0 0 45px #00ffff,
      0 0 60px #00ffff;
    letter-spacing: 0.3rem;
    animation: ${to} 2s infinite alternate;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }
`,co=Qi.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 3rem 0;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`,uo=Qi.button.withConfig({shouldForwardProp:e=>!["active","variant"].includes(e)})`
  background: ${e=>e.active?"rgba(0, 255, 255, 0.2)":"transparent"};
  border: 2px solid ${e=>"dashboard"===e.variant?"#ff8800":"#00ffff"};
  color: ${e=>"dashboard"===e.variant?"#ff8800":"#00ffff"};
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  min-width: 100px;
  text-shadow: ${e=>"dashboard"===e.variant?"0 0 5px #ff8800, 0 0 8px #ff8800":"0 0 5px #00ffff, 0 0 8px #00ffff"};
  box-shadow: ${e=>"dashboard"===e.variant?e.active?"0 0 20px rgba(255, 136, 0, 0.8), inset 0 0 20px rgba(255, 136, 0, 0.3)":"0 0 8px rgba(255, 136, 0, 0.3), inset 0 0 8px rgba(255, 136, 0, 0.1)":e.active?"0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 20px rgba(0, 255, 255, 0.3)":"0 0 8px rgba(0, 255, 255, 0.3), inset 0 0 8px rgba(0, 255, 255, 0.1)"};
  white-space: nowrap;
  animation: ${e=>"dashboard"===e.variant?qi`${io} 2s infinite alternate`:"none"};

  &:hover {
    background: ${e=>"dashboard"===e.variant?"rgba(255, 136, 0, 0.1)":"rgba(0, 255, 255, 0.1)"};
    text-shadow: ${e=>"dashboard"===e.variant?"0 0 8px #ff8800, 0 0 15px #ff8800, 0 0 25px #ff8800":"0 0 8px #00ffff, 0 0 15px #00ffff, 0 0 25px #00ffff"};
    box-shadow: ${e=>"dashboard"===e.variant?"0 0 15px rgba(255, 136, 0, 0.6), inset 0 0 15px rgba(255, 136, 0, 0.2)":"0 0 15px rgba(0, 255, 255, 0.6), inset 0 0 15px rgba(0, 255, 255, 0.2)"};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    min-width: 80px;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`,fo=Qi.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,po=Qi.div`
  background: rgba(0, 0, 0, 0.9);
  border: 4px solid #00ffff;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;                    
  max-width: 700px;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.5),
    0 0 40px rgba(0, 255, 255, 0.3);
  animation: ${no} 3s infinite;

  @media (max-width: 768px) {
    width: 90%;                   
    max-width: 500px;
  }
`,ho=Qi.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding: 0.5rem 0;
`,mo=Qi.span`
  color: #00ffff;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff;
  font-weight: bold;
`,go=Qi.span`
  font-weight: bold;
  text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
  
  color: ${e=>{if("players"===e.type&&e.authorityLevel)switch(e.authorityLevel){case"DEMO":return"#666666";case"ADMIN":return"#ff9500";default:return"#00ff00"}return"players"===e.type?"#ffff00":"uptime"===e.type||"version"===e.type?"#00ff00":"mode"===e.type?"#ff8800":"inherit"}};
  
  ${e=>"players"===e.type&&qi`
    animation: ${ro} 2s infinite alternate;
  `}
`,bo=Qi.button`
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  
  .p1 {
    color: #ff00ff;
    text-shadow: 
      0 0 10px #ff00ff,
      0 0 20px #ff00ff;
    animation: ${to} 1.2s infinite alternate;
  }
  
  .t1 {
    color: #00ff00;
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00;
    animation: ${to} 1.8s infinite alternate;
    animation-delay: 0.3s;
  }
  
  .t2 {
    color: #ffff00;
    text-shadow: 
      0 0 10px #ffff00,
      0 0 20px #ffff00;
    animation: ${to} 1.5s infinite alternate;
    animation-delay: 0.6s;
  }
  
  .p2 {
    color: #ff6600;
    text-shadow: 
      0 0 10px #ff6600,
      0 0 20px #ff6600;
    animation: ${to} 2s infinite alternate;
    animation-delay: 0.9s;
  }
`,yo=()=>{const e=Fe(),{mode:n}=an(),{authorityLevel:r,isAuthenticated:i,currentUser:o}=Qt(),a="PRODUCTION"===r,s="ADMIN"===r,[l,c]=(0,t.useState)("HOME"),[u,d]=(0,t.useState)({playersOnline:0,uptime:"--",version:"--"});(0,t.useEffect)(()=>{console.log("DEBUG Authority:",{authorityLevel:r,isProduction:a,isAdmin:s});const e=async()=>{try{const e=await fetch("http://localhost:3001/api/sessions/online");if(e.ok){const t=await e.json();d(e=>({...e,playersOnline:t.count||0}))}const t=await fetch("http://localhost:3001/health");if(t.ok){const e=await t.json();d(t=>({...t,uptime:e.uptime||"2h 15m",version:e.version||"1.0.0"}))}}catch(e){console.error("Failed to fetch server status:",e),d(e=>({...e,playersOnline:Math.floor(10*Math.random()),uptime:"2h 15m",version:"1.0.0"}))}};e();const t=setInterval(e,3e4);return()=>clearInterval(t)},[]);const f=t=>{switch(console.log(`RetroArcade Navigation: ${t}`),c(t),t){case"HOME":break;case"GAMES":e("/games");break;case"PROFILE":e("/profile");break;case"SCORES":e("/scores");break;case"DASHBOARD":e("/dashboard");break;default:console.log("Unknown navigation:",t)}};return(0,Jt.jsxs)(oo,{children:[(0,Jt.jsx)(ao,{children:(0,Jt.jsx)("div",{})}),(0,Jt.jsx)(lo,{children:(0,Jt.jsx)("h1",{children:"RETRO ARCADE"})}),(0,Jt.jsxs)(co,{children:[(0,Jt.jsx)(uo,{active:"HOME"===l,onClick:()=>f("HOME"),children:"HOME"}),(0,Jt.jsx)(uo,{active:"GAMES"===l,onClick:()=>f("GAMES"),children:"GAMES"}),(0,Jt.jsx)(uo,{active:"PROFILE"===l,onClick:()=>f("PROFILE"),children:"PROFILE"}),(a||s)&&(0,Jt.jsx)(uo,{active:"SCORES"===l,onClick:()=>f("SCORES"),children:"SCORES"}),s&&(0,Jt.jsx)(uo,{active:"DASHBOARD"===l,onClick:()=>f("DASHBOARD"),variant:"dashboard",children:"DASHBOARD"})]}),(0,Jt.jsx)(fo,{children:(0,Jt.jsxs)(po,{children:[(0,Jt.jsxs)(ho,{children:[(0,Jt.jsx)(mo,{children:"Player:"}),(0,Jt.jsx)(go,{type:"players",authorityLevel:r,children:i&&o?o.username:"Guest"})]}),(0,Jt.jsxs)(ho,{children:[(0,Jt.jsx)(mo,{children:"Mode:"}),(0,Jt.jsx)(so,{authorityLevel:r,children:"\u25cf ONLINE"})]}),(0,Jt.jsxs)(ho,{children:[(0,Jt.jsx)(mo,{}),(0,Jt.jsx)(go,{type:"version"})]}),(0,Jt.jsxs)(ho,{children:[(0,Jt.jsx)(mo,{}),(0,Jt.jsxs)(bo,{children:[(0,Jt.jsx)("span",{className:"p1",children:"p"}),(0,Jt.jsx)("span",{className:"t1",children:"t"}),(0,Jt.jsx)("span",{className:"t2",children:"t"}),(0,Jt.jsx)("span",{className:"p2",children:"p"})]})]})]})})]})},xo={spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},fonts:{primary:'"Inter", -apple-system, BlinkMacSystemFont, sans-serif',arcade:'"Press Start 2P", "Courier New", monospace',monospace:'"Fira Code", "Monaco", "Consolas", monospace',sizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",xxl:"1.5rem",title:"2rem",display:"3rem"},weights:{light:300,normal:400,medium:500,bold:"700"}},colors:{background:"#0a0a0f",backgroundSecondary:"#1a1a2e",surface:"#16213e",surfaceHover:"#1e2a4a",surfaceActive:"#233456",text:"#ffffff",textSecondary:"#e0e0e0",textMuted:"#a0a0a0",textInverse:"#000000",primary:"#ff006e",primaryHover:"#e6005e",secondary:"#8338ec",secondaryHover:"#7028dc",accent:"#3a86ff",success:"#06ffa5",warning:"#ffbe0b",error:"#ff006e",info:"#3a86ff",score:"#ffff00",scoreHighlight:"#ffd700",settings:"#00ffff",settingsActive:"#ff00ff",leaderboard:"#ff6b35",achievement:"#32cd32",neon:{pink:"#ff10f0",blue:"#10f0ff",green:"#39ff14",yellow:"#ffff10",orange:"#ff8c10",purple:"#bf00ff",cyan:"#00ffff"},border:"#333354",borderHover:"#404060",borderActive:"#505070",game:{player:"#39ff14",enemy:"#ff10f0",powerup:"#ffff10",ui:"#10f0ff",background:"#0f0f23"},payment:{success:"#06ffa5",pending:"#ffbe0b",failed:"#ff006e"}},breakpoints:{mobile:"480px",tablet:"768px",desktop:"1024px",wide:"1440px"},animations:{fast:"150ms ease-in-out",normal:"250ms ease-in-out",slow:"400ms ease-in-out"},effects:{neonGlow:"0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",buttonHover:"transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255, 16, 240, 0.3);",cardShadow:"0 8px 32px rgba(0, 0, 0, 0.3)",glow:"0 0 20px rgba(255, 16, 240, 0.5)",scoreGlow:"0 0 15px #ffff00, 0 0 25px #ffff00",settingsGlow:"0 0 15px #00ffff, 0 0 25px #00ffff"},borderRadius:{sm:"4px",md:"8px",lg:"12px",xl:"16px",full:"50%"},zIndex:{dropdown:100,modal:200,tooltip:300,overlay:400,notification:500}},vo=(Ji`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@300;400;500;700&family=Fira+Code:wght@400;500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${e=>e.theme.fonts.primary};
    background: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.background};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.primary};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.primaryHover};
  }
  
  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`,Ji`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${e=>{let{theme:t}=e;return t.fonts.primary}};
    background: ${e=>{let{theme:t}=e;return t.colors.background}};
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    overflow-x: hidden;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
  
  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${e=>{let{theme:t}=e;return t.colors.surface}};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${e=>{let{theme:t}=e;return t.colors.primary}};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #e55555;
  }
  
  /* Focus styles */
  *:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
    outline-offset: 2px;
  }
  
  /* Disable text selection on UI elements */
  button, .no-select {
    user-select: none;
  }
  
  /* Smooth animations */
  * {
    transition: background-color ${e=>{let{theme:t}=e;return t.animations.normal}},
                border-color ${e=>{let{theme:t}=e;return t.animations.normal}},
                color ${e=>{let{theme:t}=e;return t.animations.normal}};
  }
`),wo=e=>{let{children:t}=e;return(0,Jt.jsxs)(Bi,{theme:xo,children:["  ",(0,Jt.jsx)(vo,{}),t]})},So=Zi`
  0%, 100% {
    text-shadow: 
      0 0 8px #00ffff,
      0 0 15px #00ffff,
      0 0 25px #00ffff;
  }
  50% {
    text-shadow: 
      0 0 5px #00ffff,
      0 0 10px #00ffff,
      0 0 18px #00ffff;
  }
`,ko=Zi`
  0% {
    text-shadow: 
      0 0 15px #00ffff,
      0 0 30px #00ffff,
      0 0 45px #00ffff,
      0 0 60px #00ffff;
  }
  100% {
    text-shadow: 
      0 0 8px #00ffff,
      0 0 15px #00ffff,
      0 0 25px #00ffff,
      0 0 35px #00ffff;
  }
`,Eo=Zi`
  0% {
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.5),
      0 0 40px rgba(0, 255, 255, 0.3);
  }
  100% {
    box-shadow: 
      0 0 30px rgba(0, 255, 255, 0.8),
      0 0 60px rgba(0, 255, 255, 0.4);
  }
`,Co=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`,jo=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,Po=Qi.div`
  text-align: center;
  margin: 3rem 0;
`,_o=Qi.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 0.8rem;  // ← Von 0.3rem auf 0.8rem erhöht für mehr Sperrung
  margin: 0;
  text-align: center;
  text-shadow: 
    0 0 15px #00ffff,
    0 0 30px #00ffff,
    0 0 45px #00ffff,
    0 0 60px #00ffff;
  
  /* Sanfte Hauptanimation */
  animation: ${ko} 2s infinite alternate;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: 0.5rem;  // ← Auch mobile angepasst
  }
`,Ao=Qi.button`
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  /* Neon-Effekt in LOGIN-Farbe */
  text-shadow: 
    0 0 8px #00ffff,
    0 0 15px #00ffff;
  box-shadow: 
    0 0 10px rgba(0, 255, 255, 0.5),
    inset 0 0 10px rgba(0, 255, 255, 0.1);
  
  /* Animation in LOGIN-Farbe */
  animation: ${ko} 8s ease-in-out infinite;
  
  /* Zusätzlicher Glow-Effekt */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ffff, #00aaaa, #00ffff);
    border-radius: 8px;
    z-index: -1;
    opacity: 0.3;
    animation: ${So} 4s linear infinite;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #00aaaa;
    color: #00aaaa;
    text-shadow: 
      0 0 8px #00aaaa,
      0 0 15px #00aaaa,
      0 0 25px #00aaaa;
    box-shadow: 
      0 0 20px rgba(0, 170, 170, 0.8),
      inset 0 0 20px rgba(0, 170, 170, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,To=Qi.div`
  display: flex;
  justify-content: center;
  gap: 4.5rem;
  margin: 1.5rem 0 3rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,Ro=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,No=Qi.div`
  background: rgba(0, 0, 0, 0.9);
  border: 4px solid #00ffff;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.5),
    0 0 40px rgba(0, 255, 255, 0.3);
  animation: ${Eo} 3s infinite;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
  }
`,Lo=Qi.div`
  margin-bottom: 1.5rem;
`,$o=Qi.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #00ffff;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 0 5px #00ffff;
  letter-spacing: 0.1rem;
`,Oo=Qi.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #00ffff;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  box-sizing: border-box;
  text-shadow: 0 0 5px #ffffff;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #ffff00;
    box-shadow: 
      0 0 10px rgba(255, 255, 0, 0.5),
      inset 0 0 10px rgba(255, 255, 0, 0.1);
    text-shadow: 0 0 8px #ffffff;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,zo=Qi.button.withConfig({shouldForwardProp:e=>!["variant","loading"].includes(e)})`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: ${e=>"secondary"===e.variant?"rgba(0, 255, 255, 0.1)":"rgba(0, 255, 255, 0.2)"};
  border: 2px solid #00ffff;
  border-radius: 8px;
  color: #00ffff;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: ${e=>e.loading?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  text-shadow: 0 0 5px #00ffff;
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
  
  &:hover:not(:disabled) {
    background: rgba(0, 255, 255, 0.3);
    box-shadow: 
      0 0 15px rgba(0, 255, 255, 0.6),
      inset 0 0 15px rgba(0, 255, 255, 0.2);
    text-shadow: 0 0 8px #00ffff;
    transform: scale(1.02);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Mo=Qi.div.withConfig({shouldForwardProp:e=>"type"!==e})`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  border: 2px solid ${e=>"error"===e.type?"#ff0000":"#00ff00"};
  background: ${e=>"error"===e.type?"rgba(255, 0, 0, 0.1)":"rgba(0, 255, 0, 0.1)"};
  color: ${e=>"error"===e.type?"#ff0000":"#00ff00"};
  text-shadow: ${e=>"error"===e.type?"0 0 5px #ff0000":"0 0 5px #00ff00"};
  box-shadow: ${e=>"error"===e.type?"0 0 10px rgba(255, 0, 0, 0.3)":"0 0 10px rgba(0, 255, 0, 0.3)"};
`,Do=()=>{const[e,n]=(0,t.useState)({username:"",password:"",adminPassword:""}),[r,i]=(0,t.useState)(""),[o,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)([]),[c,u]=(0,t.useState)(0),[d,f]=(0,t.useState)(!1),p=Fe(),{login:h,isLoading:m,error:g}=Qt();(0,t.useEffect)(()=>{(async()=>{try{console.log("Loading admin usernames...");const e=await fetch("/retroarcade_admin.json");if(console.log("Response status:",e.status),e.ok){const t=await e.json();console.log("Admin data loaded:",t);let n=[];Array.isArray(t)?n=t:t.admins?n=t.admins:t.usernames?n=t.usernames:t.admin_users&&(n=t.admin_users),console.log("Extracted usernames:",n),l(n)}else console.error("Failed to load admin file:",e.status),l([])}catch(g){console.error("Failed to load admin usernames:",g),console.log("Using fallback admin usernames"),l(["User001","admin","administrator"])}})()},[]);const b=e=>{const{name:t,value:r}=e.target;if(n(e=>({...e,[t]:r})),"username"===t){console.log("Checking username:",r),console.log("Against admin list:",s);const e=s.includes(r)||s.includes(r.toLowerCase())||s.map(e=>e.toLowerCase()).includes(r.toLowerCase());console.log("Is admin user:",e),a(e),e||n(e=>({...e,adminPassword:""}))}};return(0,Jt.jsxs)(Co,{children:[(0,Jt.jsx)(jo,{children:(0,Jt.jsx)("div",{})}),(0,Jt.jsx)(Po,{children:(0,Jt.jsx)(_o,{children:"LOGIN"})}),(0,Jt.jsxs)(To,{children:[(0,Jt.jsx)(Ao,{onClick:()=>p("/profile"),children:"PROFILE"}),(0,Jt.jsx)(Ao,{onClick:()=>p("/games"),children:"GAMES"})]}),(0,Jt.jsx)(Ro,{children:(0,Jt.jsx)(No,{children:(0,Jt.jsxs)("form",{onSubmit:async t=>{if(t.preventDefault(),i(""),d){console.log("Force demo mode - logging in without admin password");try{const t=await h({username:e.username,password:e.password});var r;if(t.success)i(`Welcome ${null===(r=t.user)||void 0===r?void 0:r.username}! (Demo Mode - Admin access blocked)`),setTimeout(()=>p("/profile"),1500)}catch(g){console.error("Demo login error:",g)}}else if(!o||e.adminPassword&&e.adminPassword.trim())try{console.log("Starting AuthManager login..."),console.log("Username:",e.username),console.log("Has admin password:",!!e.adminPassword);const t=await h({username:e.username,password:e.password,adminPassword:e.adminPassword||void 0});if(console.log("AuthManager Login Result:",t),t.success){var s;console.log("Login successful via AuthManager"),console.log("Authority Level:",t.authorityLevel),u(0);let n=t.authorityLevel||"DEMO";(e.adminPassword&&"PRODUCTION"===t.authorityLevel||"ADMIN"===t.authorityLevel)&&(n="Admin"),i(`Welcome back, ${null===(s=t.user)||void 0===s?void 0:s.username}! (${n})`),setTimeout(()=>{"ADMIN"===t.authorityLevel||e.adminPassword&&"PRODUCTION"===t.authorityLevel?(console.log("Redirecting to dashboard..."),p("/dashboard")):(console.log("Redirecting to profile..."),p("/profile"))},1500)}else if(console.error("Login failed:",t.error),o&&e.adminPassword){const e=c+1;u(e),console.log(`Admin password attempt ${e}/3`),e>=3&&(console.log("Max admin attempts reached - switching to demo mode"),f(!0),a(!1),n(e=>({...e,adminPassword:""})),i("Admin access blocked after 3 attempts. Switched to Demo Mode."))}}catch(g){console.error("Login error:",g)}else console.error("Admin password required for admin user")},children:[(0,Jt.jsxs)(Lo,{children:[(0,Jt.jsx)($o,{htmlFor:"username",children:"Username"}),(0,Jt.jsx)(Oo,{type:"text",id:"username",name:"username",value:e.username,onChange:b,placeholder:"Enter your username",disabled:m,required:!0})]}),(0,Jt.jsxs)(Lo,{children:[(0,Jt.jsx)($o,{htmlFor:"password",children:"Password"}),(0,Jt.jsx)(Oo,{type:"password",id:"password",name:"password",value:e.password,onChange:b,placeholder:"Enter your password",disabled:m,required:!0})]}),o&&(0,Jt.jsxs)(Lo,{children:[(0,Jt.jsx)($o,{htmlFor:"adminPassword",children:"Admin Password"}),(0,Jt.jsx)(Oo,{type:"password",id:"adminPassword",name:"adminPassword",value:e.adminPassword,onChange:b,placeholder:"Enter admin password for admin access",disabled:m})]}),g&&(0,Jt.jsx)(Mo,{type:"error",children:g}),r&&(0,Jt.jsx)(Mo,{type:"success",children:r}),(0,Jt.jsx)(zo,{type:"submit",disabled:m,variant:"primary",children:m?"Authenticating...":"Login"})]})})})]})},Io=[{id:"snake",title:"Snake",icon:"\ud83d\udc0d",description:"Classic snake game - eat apples and grow longer!",path:"/singleplayer/snake",zone:"singleplayer",difficulty:"easy"},{id:"pong",title:"Pong",icon:"\ud83c\udfd3",description:"The original video game - bounce the ball!",path:"/singleplayer/pong",zone:"singleplayer",difficulty:"easy"},{id:"memory",title:"Memory",icon:"\ud83e\udde0",description:"Test your memory with this classic card game!",path:"/singleplayer/memory",zone:"singleplayer",difficulty:"medium"},{id:"tetris",title:"Tetris",icon:"\ud83e\udde9",description:"Stack falling blocks to clear lines!",path:"/singleplayer/tetris",zone:"singleplayer",difficulty:"medium",requirements:["level01"]}],Uo=[{id:"tic-tac-toe",title:"Tic Tac Toe",icon:"\u2b55",description:"Classic 3x3 grid strategy game!",path:"/multiplayer/tic-tac-toe",zone:"multiplayer",difficulty:"easy",requirements:["level01"]},{id:"chess",title:"Chess",icon:"\u265b",description:"The ultimate strategy game!",path:"/multiplayer/chess",zone:"multiplayer",difficulty:"hard",requirements:["level02"]}],Fo=[{id:"breakout",title:"Breakout",icon:"\ud83e\uddf1",description:"Break bricks with your paddle and ball!",path:"/arcade/breakout",zone:"arcade",difficulty:"medium"},{id:"pac-man",title:"Pac-Man",icon:"\ud83d\udfe1",description:"Chomp dots and avoid ghosts!",path:"/arcade/pac-man",zone:"arcade",difficulty:"medium",requirements:["premium"]}],Bo={singleplayer:{title:"SINGLEPLAYER",description:"Classic solo gaming experience",color:"#2ed573",icon:"\ud83c\udfae",path:"/singleplayer",games:Io},multiplayer:{title:"MULTIPLAYER",description:"Challenge friends and players worldwide",color:"#ff6b6b",icon:"\ud83d\udc65",path:"/multiplayer",games:Uo},arcade:{title:"ARCADE",description:"Retro arcade classics",color:"#ffa502",icon:"\ud83d\udd79\ufe0f",path:"/arcade",games:Fo}},Ho=Zi`
  0% {
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00,
      0 0 30px #00ff00;
  }
  100% {
    text-shadow: 
      0 0 5px #00ff00,
      0 0 10px #00ff00,
      0 0 15px #00ff00;
  }
`,Go=Zi`
  0% {
    text-shadow: 
      0 0 15px #00ff00,
      0 0 30px #00ff00,
      0 0 45px #00ff00,
      0 0 60px #00ff00;
  }
  100% {
    text-shadow: 
      0 0 8px #00ff00,
      0 0 15px #00ff00,
      0 0 25px #00ff00,
      0 0 35px #00ff00;
  }
`,Wo=Zi`
  0% {
    text-shadow: 
      0 0 5px #ffff00,
      0 0 10px #ffff00,
      0 0 15px #ffff00;
  }
  100% {
    text-shadow: 
      0 0 3px #ffff00,
      0 0 6px #ffff00,
      0 0 9px #ffff00;
  }
`,Yo=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
`,qo=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,Vo=Qi.span`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 2px solid ${e=>{switch(e.authorityLevel){case"DEMO":return"#666666";case"ADMIN":return"#ff9500";default:return"#00ff00"}}};
  color: ${e=>{switch(e.authorityLevel){case"DEMO":return"#666666";case"ADMIN":return"#ff9500";default:return"#00ff00"}}};
  background: ${e=>{switch(e.authorityLevel){case"DEMO":return"rgba(102, 102, 102, 0.1)";case"ADMIN":return"rgba(255, 149, 0, 0.1)";default:return"rgba(0, 255, 0, 0.1)"}}};
  text-shadow: ${e=>{switch(e.authorityLevel){case"DEMO":return"none";case"ADMIN":return"0 0 10px #ff9500, 0 0 20px #ff9500";default:return"0 0 10px #00ff00, 0 0 20px #00ff00"}}};
  animation: ${e=>"DEMO"===e.authorityLevel?"none":qi`${Ho} 2s infinite alternate`};
`,Ko=Qi.button`
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  
  .p1 {
    color: #ff00ff;
    text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  }
  
  .t1 {
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
  }
  
  .t2 {
    color: #ffff00;
    text-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00;
  }
  
  .p2 {
    color: #ff6600;
    text-shadow: 0 0 10px #ff6600, 0 0 20px #ff6600;
  }
`,Qo=Qi.div`
  text-align: center;
  margin: 3rem 0;

  h1 {
    font-size: 6rem;
    font-weight: bold;
    color: #00ff00;
    text-shadow: 
      0 0 15px #00ff00,
      0 0 30px #00ff00,
      0 0 45px #00ff00,
      0 0 60px #00ff00;
    letter-spacing: 0.3rem;
    animation: ${Go} 2s infinite alternate;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }
`,Xo=Qi.button.withConfig({shouldForwardProp:e=>!["active","variant","enabled"].includes(e)})`
  background: ${e=>e.active?"rgba(0, 255, 0, 0.2)":"transparent"};
  border: 2px solid #00ff00;
  color: ${e=>!1===e.enabled?"#666666":"#00ff00"};
  padding: ${e=>"zone"===e.variant?"0.5rem 1rem":"0.7rem 1.5rem"};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${e=>!1===e.enabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  text-transform: uppercase;
  min-width: ${e=>"zone"===e.variant?"140px":"100px"};
  opacity: ${e=>!1===e.enabled?.5:1};
  text-shadow: ${e=>!1===e.enabled?"none":"0 0 5px #00ff00, 0 0 8px #00ff00"};
  box-shadow: ${e=>!1===e.enabled?"none":e.active?"0 0 20px rgba(0, 255, 0, 0.8), inset 0 0 20px rgba(0, 255, 0, 0.3)":"0 0 8px rgba(0, 255, 0, 0.3), inset 0 0 8px rgba(0, 255, 0, 0.1)"};
  white-space: nowrap;

  &:hover {
    background: ${e=>!1===e.enabled?"transparent":"rgba(0, 255, 0, 0.1)"};
    text-shadow: ${e=>!1===e.enabled?"none":"0 0 8px #00ff00, 0 0 15px #00ff00, 0 0 25px #00ff00"};
    box-shadow: ${e=>!1===e.enabled?"none":"0 0 15px rgba(0, 255, 0, 0.6), inset 0 0 15px rgba(0, 255, 0, 0.2)"};
    transform: ${e=>!1===e.enabled?"none":"scale(1.05)"};
  }

  @media (max-width: 768px) {
    min-width: 120px;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`,Jo=Qi.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 1rem 0;
`,Zo=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 4rem 0 4rem 0; 
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,ea=Qi.button.withConfig({shouldForwardProp:e=>!["enabled","zoneColor"].includes(e)})`
  background: ${e=>e.enabled?"rgba(0, 20, 40, 0.8)":"linear-gradient(135deg, rgba(0, 20, 40, 0.3) 0%, rgba(40, 40, 60, 0.2) 50%, rgba(0, 20, 40, 0.3) 100%)"};
  border: ${e=>e.enabled?`3px solid ${e.zoneColor}`:"2px solid #444444"};
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  cursor: ${e=>e.enabled?"pointer":"default"};
  transition: all 0.3s ease;
  opacity: ${e=>e.enabled?1:.7};
  width: 200px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  .icon {
    font-size: 2.5rem;
    margin: 0;
    transition: all 0.3s ease;
    color: ${e=>e.enabled?e.zoneColor:"#888888"};
  }
  
  .title {
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.3s ease;
    color: ${e=>e.enabled?e.zoneColor:"#888888"};
    text-shadow: ${e=>e.enabled?`0 0 10px ${e.zoneColor}, 0 0 20px ${e.zoneColor}aa`:"none"};
  }

  ${e=>e.enabled&&`\n    &:hover {\n      transform: scale(1.05);\n      box-shadow: 0 0 25px ${e.zoneColor}aa;\n      \n      .title {\n        text-shadow: 0 0 15px ${e.zoneColor}, 0 0 25px ${e.zoneColor}aa;\n      }\n      \n      .icon {\n        filter: drop-shadow(0 0 12px ${e.zoneColor});\n      }\n    }\n  `}
`,ta=Qi.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,na=Qi.div`
  background: rgba(0, 0, 0, 0.9);
  border: 4px solid #00ffff;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;                    
  max-width: 700px;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.5),
    0 0 40px rgba(0, 255, 255, 0.3);

  @media (max-width: 768px) {
    width: 90%;                   
    max-width: 500px;
  }
`,ra=Qi.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding: 0.5rem 0;
`,ia=Qi.span`
  color: #00ffff;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff;
  font-weight: bold;
`,oa=Qi.span`
  font-weight: bold;
  text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
  
  color: ${e=>{if("players"===e.type&&e.authorityLevel)switch(e.authorityLevel){case"DEMO":return"#666666";case"ADMIN":return"#ff9500";default:return"#00ff00"}return"players"===e.type?"#ffff00":"uptime"===e.type||"version"===e.type?"#00ff00":"inherit"}};
  
  ${e=>"players"===e.type&&qi`
    animation: ${Wo} 2s infinite alternate;
  `}
`,aa=()=>{const e=Fe(),{authorityLevel:n,isAuthenticated:r,currentUser:i}=Qt(),o="ADMIN"===n,a={singleplayer:{enabled:!0},multiplayer:{enabled:o||"PRODUCTION"===n},arcade:{enabled:o||"PRODUCTION"===n}},[s]=(0,t.useState)({playersOnline:4,uptime:"2h 15m",version:"1.0.0"}),l=t=>{const r=Bo[t];a[t].enabled?(console.log("Navigating to zone:",r.path),e(r.path)):alert(`${r.title} is not available for ${n} users!\n\nLogin as PRODUCTION user or ADMIN to access this feature.`)};return(0,Jt.jsxs)(Yo,{children:[(0,Jt.jsx)(qo,{children:(0,Jt.jsx)("div",{})}),(0,Jt.jsx)(Qo,{children:(0,Jt.jsx)("h1",{children:"GAMES"})}),(0,Jt.jsx)(Jo,{children:(0,Jt.jsx)(Xo,{onClick:()=>{return t="/",console.log("Navigation button clicked:",t),void e(t);var t},children:"HOME"})}),(0,Jt.jsxs)(Zo,{children:[(0,Jt.jsxs)(ea,{enabled:a.singleplayer.enabled,zoneColor:Bo.singleplayer.color,onClick:()=>l("singleplayer"),children:[(0,Jt.jsx)("div",{className:"icon",children:Bo.singleplayer.icon}),(0,Jt.jsx)("div",{className:"title",children:"SINGLEPLAYER"})]}),(0,Jt.jsxs)(ea,{enabled:a.multiplayer.enabled,zoneColor:Bo.multiplayer.color,onClick:()=>l("multiplayer"),children:[(0,Jt.jsx)("div",{className:"icon",children:Bo.multiplayer.icon}),(0,Jt.jsx)("div",{className:"title",children:"MULTIPLAYER"})]}),(0,Jt.jsxs)(ea,{enabled:a.arcade.enabled,zoneColor:Bo.arcade.color,onClick:()=>l("arcade"),children:[(0,Jt.jsx)("div",{className:"icon",children:Bo.arcade.icon}),(0,Jt.jsx)("div",{className:"title",children:"ARCADE"})]})]}),(0,Jt.jsx)(ta,{children:(0,Jt.jsxs)(na,{children:[(0,Jt.jsxs)(ra,{children:[(0,Jt.jsx)(ia,{children:"Player:"}),(0,Jt.jsx)(oa,{type:"players",authorityLevel:n,children:r&&i?i.username:"Guest"})]}),(0,Jt.jsxs)(ra,{children:[(0,Jt.jsx)(ia,{children:"Mode:"}),(0,Jt.jsx)(Vo,{authorityLevel:n,children:"\u25cf ONLINE"})]}),(0,Jt.jsxs)(ra,{children:[(0,Jt.jsx)(ia,{}),(0,Jt.jsx)(oa,{type:"version"})]}),(0,Jt.jsxs)(ra,{children:[(0,Jt.jsx)(ia,{}),(0,Jt.jsxs)(Ko,{children:[(0,Jt.jsx)("span",{className:"p1",children:"p"}),(0,Jt.jsx)("span",{className:"t1",children:"t"}),(0,Jt.jsx)("span",{className:"t2",children:"t"}),(0,Jt.jsx)("span",{className:"p2",children:"p"})]})]})]})})]})},sa=Zi`
  0%, 100% { 
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
  }
  50% { 
    text-shadow: 0 0 10px currentColor, 0 0 15px currentColor;
  }
`,la=(Zi`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`,Zi`
  0% {
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00,
      0 0 30px #00ff00;
  }
  100% {
    text-shadow: 
      0 0 5px #00ff00,
      0 0 10px #00ff00,
      0 0 15px #00ff00;
  }
`,Zi`
  0% {
    text-shadow: 
      0 0 15px #00ffff,
      0 0 30px #00ffff,
      0 0 45px #00ffff,
      0 0 60px #00ffff;
  }
  100% {
    text-shadow: 
      0 0 8px #00ffff,
      0 0 15px #00ffff,
      0 0 25px #00ffff,
      0 0 35px #00ffff;
  }
`,Zi`
  0% {
    text-shadow: 
      0 0 5px #ffff00,
      0 0 10px #ffff00,
      0 0 15px #ffff00;
  }
  100% {
    text-shadow: 
      0 0 3px #ffff00,
      0 0 6px #ffff00,
      0 0 9px #ffff00;
  }
`,Zi`
  0% {
    text-shadow: 
      0 0 5px #ff8800,
      0 0 10px #ff8800,
      0 0 15px #ff8800;
    border-color: #ff8800;
    box-shadow: 
      0 0 8px rgba(255, 136, 0, 0.5),
      inset 0 0 8px rgba(255, 136, 0, 0.2);
  }
  100% {
    text-shadow: 
      0 0 8px #ff8800,
      0 0 15px #ff8800,
      0 0 25px #ff8800;
    border-color: #ff8800;
    box-shadow: 
      0 0 15px rgba(255, 136, 0, 0.8),
      inset 0 0 15px rgba(255, 136, 0, 0.3);
  }
`,Zi`
  0% {
    text-shadow: 
      0 0 5px #9d4edd,
      0 0 10px #9d4edd,
      0 0 15px #9d4edd;
  }
  100% {
    text-shadow: 
      0 0 8px #9d4edd,
      0 0 15px #9d4edd,
      0 0 25px #9d4edd;
  }
`,Zi`
  0% {
    text-shadow: 
      0 0 5px #ff6b6b,
      0 0 10px #ff6b6b,
      0 0 15px #ff6b6b;
  }
  100% {
    text-shadow: 
      0 0 8px #ff6b6b,
      0 0 15px #ff6b6b,
      0 0 25px #ff6b6b;
  }
`,Zi`
  0% {
    border-color: #00ffff;
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.8),
      0 0 40px rgba(0, 255, 255, 0.5);
  }
  25% {
    border-color: #00ff88;
    box-shadow: 
      0 0 20px rgba(0, 255, 136, 0.8),
      0 0 40px rgba(0, 255, 136, 0.5);
  }
  50% {
    border-color: #ff00ff;
    box-shadow: 
      0 0 20px rgba(255, 0, 255, 0.8),
      0 0 40px rgba(255, 0, 255, 0.5);
  }
  75% {
    border-color: #ffff00;
    box-shadow: 
      0 0 20px rgba(255, 255, 0, 0.8),
      0 0 40px rgba(255, 255, 0, 0.5);
  }
  100% {
    border-color: #00ffff;
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.8),
      0 0 40px rgba(0, 255, 255, 0.5);
  }
`,{colors:{primary:"#1a1a2e",secondary:"#16213e",tertiary:"#0f0f23",backgroundGradient:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",backgroundOverlay:"rgba(0, 0, 0, 0.9)",backgroundTransparent:"rgba(0, 0, 0, 0.7)",neonGreen:"#00ff00",neonCyan:"#00ffff",neonOrange:"#ffa500",neonOrangeBright:"#ff8800",neonRed:"#ff6b6b",neonPurple:"#9d4edd",neonYellow:"#ffff00",neonYellowOriginal:"#ffdd00",neonMagenta:"#ff00ff",neonBlue:"#0080ff",textPrimary:"#ffffff",textSecondary:"#b8b8b8",textDisabled:"#666666",easy:"#00ff00",medium:"#ffa500",hard:"#ff0000",status:{score:"#ffff00",lives:"#ff6b6b",time:"#00ffff",level:"#00ff00",players:"#ffff00",mode:"#ff8800",uptime:"#00ff00",version:"#00ff00"},button:{primary:"#00ffff",secondary:"#ffffff",success:"#00ff00",danger:"#ff6b6b",warning:"#ffff00",development:"#ff8800"}},fonts:{primary:"'Orbitron', 'Courier New', monospace",retro:"'Courier New', monospace",sizes:{xs:"0.7rem",sm:"0.8rem",md:"0.9rem",lg:"1.1rem",xl:"1.5rem",xxl:"2.5rem","3xl":"3.5rem","6xl":"6rem"}},spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem"},borderRadius:{sm:"8px",md:"12px",lg:"15px"},shadows:{glow:"0 0 5px currentColor",glowStrong:"0 0 10px currentColor",glowVeryStrong:"0 0 20px currentColor",text:{subtle:"0 0 5px currentColor, 0 0 8px currentColor",medium:"0 0 10px currentColor, 0 0 20px currentColor",strong:"0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor",intense:"0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor"},box:{subtle:"0 0 8px rgba(COLOR_PLACEHOLDER, 0.3), inset 0 0 8px rgba(COLOR_PLACEHOLDER, 0.1)",medium:"0 0 15px rgba(COLOR_PLACEHOLDER, 0.6), inset 0 0 15px rgba(COLOR_PLACEHOLDER, 0.2)",strong:"0 0 20px rgba(COLOR_PLACEHOLDER, 0.8), inset 0 0 20px rgba(COLOR_PLACEHOLDER, 0.3)",floating:"0 0 30px rgba(COLOR_PLACEHOLDER, 0.5), 0 0 60px rgba(COLOR_PLACEHOLDER, 0.3)"}},breakpoints:{mobile:"768px",tablet:"1024px",desktop:"1200px"},animations:{duration:{fast:"0.3s",medium:"0.6s",slow:"1s",pulse:"2s"},easing:{smooth:"ease",bounce:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}}}),ca=Qi.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${la.colors.primary} 0%, ${la.colors.secondary} 100%);
  color: ${la.colors.textPrimary};
  font-family: ${la.fonts.primary};
  padding: ${la.spacing.lg};
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }
`,ua=e=>{let{children:t,className:n}=e;return(0,Jt.jsx)(ca,{className:n,children:t})},da=(Qi.h1`
  font-size: ${la.fonts.sizes.xxl};
  font-weight: 900;
  color: ${e=>{switch(e.$color){case"cyan":return la.colors.neonCyan;case"orange":return la.colors.neonOrange;default:return la.colors.neonGreen}}};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 ${la.spacing.sm} 0;
  text-align: center;
  text-shadow: 
    0 0 10px currentColor,
    0 0 20px currentColor;
  animation: ${sa} 2s ease-in-out infinite alternate;

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 0.15em;
  }
`,Qi.button`
  background: ${la.colors.tertiary};
  border: 2px solid ${e=>{switch(e.$variant){case"secondary":return la.colors.neonOrange;case"success":return la.colors.neonGreen;case"danger":return la.colors.neonRed;default:return la.colors.neonCyan}}};
  color: ${e=>{switch(e.$variant){case"secondary":return la.colors.neonOrange;case"success":return la.colors.neonGreen;case"danger":return la.colors.neonRed;default:return la.colors.neonCyan}}};
  padding: ${e=>{switch(e.$size){case"sm":return"0.5rem 1rem";case"lg":return"1rem 2rem";default:return"0.75rem 1.5rem"}}};
  border-radius: ${la.borderRadius.sm};
  font-family: ${la.fonts.primary};
  font-size: ${e=>{switch(e.$size){case"sm":return la.fonts.sizes.xs;case"lg":return la.fonts.sizes.lg;default:return la.fonts.sizes.md}}};
  font-weight: 600;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: ${e=>e.disabled?.6:1};

  &:hover:not(:disabled) {
    background: ${e=>{switch(e.$variant){case"secondary":return"rgba(255, 165, 0, 0.1)";case"success":return"rgba(0, 255, 0, 0.1)";case"danger":return"rgba(255, 107, 107, 0.1)";default:return"rgba(0, 255, 255, 0.1)"}}};
    box-shadow: ${la.shadows.glowStrong};
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`),fa=e=>{let{children:t,onClick:n,variant:r="primary",size:i="md",disabled:o=!1,className:a}=e;return(0,Jt.jsx)(da,{$variant:r,$size:i,disabled:o,onClick:n,className:a,children:t})},pa=(Qi.div`
  background: ${la.colors.tertiary};
  border: 2px solid ${e=>{switch(e.$variant){case"premium":return la.colors.neonOrange;case"disabled":return la.colors.textDisabled;default:return la.colors.neonGreen}}};
  border-radius: ${la.borderRadius.sm};
  padding: ${la.spacing.md};
  text-align: center;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: ${e=>"disabled"===e.$variant?.7:1};
  box-shadow: ${la.shadows.glow};

  ${e=>e.$hoverable&&e.$clickable&&`\n    &:hover {\n      transform: translateY(-4px);\n      box-shadow: ${la.shadows.glowStrong};\n      \n      &::before {\n        opacity: 1;\n      }\n    }\n  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>{switch(e.$variant){case"premium":return"rgba(255, 165, 0, 0.1)";case"disabled":return"rgba(100, 100, 100, 0.1)";default:return"rgba(0, 255, 0, 0.1)"}}};
    border-radius: ${la.borderRadius.sm};
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
`,Qi.div`
  text-align: center;
  margin: 3rem 0 1rem 0;
`),ha=Zi`
  0%, 100% {
    text-shadow: 
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 20px #ff00ff,
      0 0 40px #ff00ff,
      0 0 80px #ff00ff;
  }
  50% {
    text-shadow: 
      0 0 2px #ff00ff,
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 20px #ff00ff,
      0 0 40px #ff00ff;
  }
`,ma=Zi`
  0% {
    text-shadow: 
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      0 0 30px #00ffff,
      0 0 40px #00ffff,
      0 0 70px #00ffff,
      0 0 80px #00ffff,
      0 0 100px #00ffff;
    color: #ffffff;
  }
  50% {
    text-shadow: 
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 15px #ff00ff,
      0 0 20px #ff00ff,
      0 0 35px #ff00ff,
      0 0 40px #ff00ff,
      0 0 50px #ff00ff;
    color: #ff00ff;
  }
  100% {
    text-shadow: 
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      0 0 30px #00ffff,
      0 0 40px #00ffff,
      0 0 70px #00ffff,
      0 0 80px #00ffff,
      0 0 100px #00ffff;
    color: #ffffff;
  }
`,ga=Qi.h1`
  font-size: 5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 2rem 0;
  text-align: center;
  position: relative;
  
  /* Hauptneon-Effekt */
  animation: ${ma} 6s ease-in-out infinite;
  
  /* Zusätzlicher Glow-Effekt */
  &::before {
    content: 'SINGLEPLAYER';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    text-shadow: 
      0 0 20px #00ffff,
      0 0 40px #ff00ff,
      0 0 60px #00ffff,
      0 0 80px #ff00ff;
    animation: ${ha} 4s linear infinite;
  }
  
  /* Border-Glow */
  filter: drop-shadow(0 0 20px #00ffff) drop-shadow(0 0 40px #ff00ff);

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 0.15em;
    
    &::before {
      content: 'SINGLEPLAYER';
    }
  }
`,ba=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 830px;
  margin: 4rem auto 4rem auto;
  flex-wrap: nowrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,ya=Qi.button`
  background: rgba(0, 20, 40, 0.8);
  border: 3px solid #00ff00;
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 200px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px #00ff00aa;
    
    .title {
      text-shadow: 0 0 15px #00ff00, 0 0 25px #00ff00aa;
    }
    
    .icon {
      filter: drop-shadow(0 0 12px #00ff00);
    }
  }
`,xa=Qi.div`
  font-size: 2.5rem;
  margin: 0;
  transition: all 0.3s ease;
`,va=Qi.h3`
  color: #00ff00;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00aa;
`,wa=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,Sa=Zi`
  0% {
    transform: translateX(-100%) translateY(-100%);
  }
  100% {
    transform: translateX(100%) translateY(100%);
  }
`,ka=Qi.button`
  background: linear-gradient(135deg, rgba(0, 20, 40, 0.3) 0%, rgba(40, 40, 60, 0.2) 50%, rgba(0, 20, 40, 0.3) 100%);
  border: 2px solid #444444;
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  cursor: pointer;
  opacity: 0.7;
  width: 200px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  .icon {
    font-size: 2.5rem;
    margin: 0;
    color: #888888;
    transition: all 0.3s ease;
    z-index: 2;
    position: relative;
  }
  
  .title {
    color: #888888;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.3s ease;
    z-index: 2;
    position: relative;
  }
  
  /* Diagonaler Sweep-Effekt */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 40%, 
      rgba(255, 215, 0, 0.3) 45%, 
      rgba(255, 215, 0, 0.6) 50%, 
      rgba(255, 215, 0, 0.3) 55%, 
      transparent 60%
    );
    transform: translateX(-100%) translateY(-100%);
    transition: transform 0.6s ease;
    z-index: 1;
  }
  
  &:hover {
    border-color: #ffd700;
    transform: scale(1.02);
    
    .icon {
      color: #ffd700;
      filter: drop-shadow(0 0 8px #ffd700);
    }
    
    .title {
      color: #ffd700;
      text-shadow: 0 0 8px #ffd700;
    }
    
    &::before {
      animation: ${Sa} 0.8s ease;
    }
  }
`,Ea=Qi.h2`
  color: #ffa500;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0 1.5rem 0;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 5px #ffa500;
`,Ca=Qi.button`
  background: transparent;
  border: 2px solid #00ffff;
  color: #ffffff;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  /* Neon-Effekt wie beim Titel */
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff,
    0 0 15px #00ffff;
  box-shadow: 
    0 0 10px rgba(0, 255, 255, 0.5),
    inset 0 0 10px rgba(0, 255, 255, 0.1);
  
  /* Sanfte Animation */
  animation: ${ma} 6s ease-in-out infinite;
  
  /* Zusätzlicher Glow-Effekt */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff);
    border-radius: 8px;
    z-index: -1;
    opacity: 0.3;
    animation: ${ha} 4s linear infinite;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #ff00ff;
    color: #ff00ff;
    text-shadow: 
      0 0 8px #ff00ff,
      0 0 15px #ff00ff,
      0 0 25px #ff00ff;
    box-shadow: 
      0 0 20px rgba(255, 0, 255, 0.8),
      inset 0 0 20px rgba(255, 0, 255, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,ja=()=>{const e=Fe(),t=[{id:"snake",title:"Snake",icon:"\ud83d\udc0d",route:"/singleplayer/snake",enabled:!0,description:"Eat and grow longer",difficulty:"easy"},{id:"pong",title:"Pong",icon:"\ud83c\udfd3",route:"/singleplayer/pong",enabled:!0,description:"Classic ping pong vs AI",difficulty:"easy"},{id:"memory",title:"Memory",icon:"\ud83e\udde0",route:"/singleplayer/memory",enabled:!0,description:"Match the pairs",difficulty:"easy"},{id:"tetris",title:"Tetris",icon:"\ud83e\udde9",route:"/singleplayer/tetris",enabled:!0,description:"Classic block puzzle game",difficulty:"medium"},{id:"breakout",title:"Breakout",icon:"\ud83e\uddf1",route:"/singleplayer/breakout",enabled:!1,requiresProduction:!0,description:"Break all the bricks",difficulty:"medium"},{id:"pacman",title:"Pac-Man",icon:"\ud83d\udc7b",route:"/singleplayer/pacman",enabled:!1,requiresProduction:!0,description:"Eat dots and avoid ghosts",difficulty:"hard"}],n=t.filter(e=>!e.requiresProduction),r=t.filter(e=>e.requiresProduction);return(0,Jt.jsxs)(ua,{children:[(0,Jt.jsxs)(pa,{children:[(0,Jt.jsx)(ga,{children:"Singleplayer"}),(0,Jt.jsx)(Ca,{onClick:()=>e("/"),children:"Games"})]}),(0,Jt.jsx)(ba,{children:n.map(t=>(0,Jt.jsxs)(ya,{onClick:()=>(t=>{t.enabled&&(console.log(`\ud83c\udfae Starting ${t.title}...`),e(t.route))})(t),children:[(0,Jt.jsx)(xa,{className:"icon",children:t.icon}),(0,Jt.jsx)(va,{className:"title",children:t.title})]},t.id))}),r.length>0&&(0,Jt.jsxs)(Jt.Fragment,{children:[(0,Jt.jsx)(Ea,{children:"\ud83d\udd12 Premium Games"}),(0,Jt.jsx)(wa,{children:r.map(e=>(0,Jt.jsxs)(ka,{children:[(0,Jt.jsx)("div",{className:"icon",children:e.icon}),(0,Jt.jsx)("div",{className:"title",children:e.title})]},e.id))})]})]})},Pa=Object.create(null);Pa.open="0",Pa.close="1",Pa.ping="2",Pa.pong="3",Pa.message="4",Pa.upgrade="5",Pa.noop="6";const _a=Object.create(null);Object.keys(Pa).forEach(e=>{_a[Pa[e]]=e});const Aa={type:"error",data:"parser error"},Ta="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),Ra="function"===typeof ArrayBuffer,Na=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,La=(e,t,n)=>{let{type:r,data:i}=e;return Ta&&i instanceof Blob?t?n(i):$a(i,n):Ra&&(i instanceof ArrayBuffer||Na(i))?t?n(i):$a(new Blob([i]),n):n(Pa[r]+(i||""))},$a=(e,t)=>{const n=new FileReader;return n.onload=function(){const e=n.result.split(",")[1];t("b"+(e||""))},n.readAsDataURL(e)};function Oa(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let za;const Ma="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Da="undefined"===typeof Uint8Array?[]:new Uint8Array(256);for(let n=0;n<64;n++)Da[Ma.charCodeAt(n)]=n;const Ia="function"===typeof ArrayBuffer,Ua=(e,t)=>{if("string"!==typeof e)return{type:"message",data:Ba(e,t)};const n=e.charAt(0);if("b"===n)return{type:"message",data:Fa(e.substring(1),t)};return _a[n]?e.length>1?{type:_a[n],data:e.substring(1)}:{type:_a[n]}:Aa},Fa=(e,t)=>{if(Ia){const n=(e=>{let t,n,r,i,o,a=.75*e.length,s=e.length,l=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);const c=new ArrayBuffer(a),u=new Uint8Array(c);for(t=0;t<s;t+=4)n=Da[e.charCodeAt(t)],r=Da[e.charCodeAt(t+1)],i=Da[e.charCodeAt(t+2)],o=Da[e.charCodeAt(t+3)],u[l++]=n<<2|r>>4,u[l++]=(15&r)<<4|i>>2,u[l++]=(3&i)<<6|63&o;return c})(e);return Ba(n,t)}return{base64:!0,data:e}},Ba=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,Ha=String.fromCharCode(30);function Ga(){return new TransformStream({transform(e,t){!function(e,t){Ta&&e.data instanceof Blob?e.data.arrayBuffer().then(Oa).then(t):Ra&&(e.data instanceof ArrayBuffer||Na(e.data))?t(Oa(e.data)):La(e,!1,e=>{za||(za=new TextEncoder),t(za.encode(e))})}(e,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const e=new DataView(i.buffer);e.setUint8(0,126),e.setUint16(1,r)}else{i=new Uint8Array(9);const e=new DataView(i.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(r))}e.data&&"string"!==typeof e.data&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}let Wa;function Ya(e){return e.reduce((e,t)=>e+t.length,0)}function qa(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function Va(e){if(e)return function(e){for(var t in Va.prototype)e[t]=Va.prototype[t];return e}(e)}Va.prototype.on=Va.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},Va.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},Va.prototype.off=Va.prototype.removeListener=Va.prototype.removeAllListeners=Va.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var i=0;i<r.length;i++)if((n=r[i])===t||n.fn===t){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},Va.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,t)}return this},Va.prototype.emitReserved=Va.prototype.emit,Va.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},Va.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Ka="function"===typeof Promise&&"function"===typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Qa="undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")();function Xa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t),{})}const Ja=Qa.setTimeout,Za=Qa.clearTimeout;function es(e,t){t.useNativeTimers?(e.setTimeoutFn=Ja.bind(Qa),e.clearTimeoutFn=Za.bind(Qa)):(e.setTimeoutFn=Qa.setTimeout.bind(Qa),e.clearTimeoutFn=Qa.clearTimeout.bind(Qa))}function ts(e){return"string"===typeof e?function(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}(e):Math.ceil(1.33*(e.byteLength||e.size))}function ns(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}class rs extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class is extends Va{constructor(e){super(),this.writable=!1,es(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new rs(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ua(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}(e);return t.length?"?"+t:""}}class os extends is{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",function(){--e||t()})),this.writable||(e++,this.once("drain",function(){--e||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const n=e.split(Ha),r=[];for(let i=0;i<n.length;i++){const e=Ua(n[i],t);if(r.push(e),"error"===e.type)break}return r})(e,this.socket.binaryType).forEach(e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)}),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((e,o)=>{La(e,!1,e=>{r[o]=e,++i===n&&t(r.join(Ha))})})})(e,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=ns()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}}let as=!1;try{as="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(nh){}const ss=as;function ls(){}class cs extends os{constructor(e){if(super(e),"undefined"!==typeof location){const t="https:"===location.protocol;let n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!==typeof location&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(e,t)=>{this.onError("xhr post error",e,t)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(e,t)=>{this.onError("xhr poll error",e,t)}),this.pollXhr=e}}class us extends Va{constructor(e,t,n){super(),this.createRequest=e,es(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=void 0!==n.data?n.data:null,this._create()}_create(){var e;const t=Xa(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&n.setRequestHeader(e,this._opts.extraHeaders[e])}}catch(th){}if("POST"===this._method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(th){}try{n.setRequestHeader("Accept","*/*")}catch(th){}null===(e=this._opts.cookieJar)||void 0===e||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var e;3===n.readyState&&(null===(e=this._opts.cookieJar)||void 0===e||e.parseCookies(n.getResponseHeader("set-cookie"))),4===n.readyState&&(200===n.status||1223===n.status?this._onLoad():this.setTimeoutFn(()=>{this._onError("number"===typeof n.status?n.status:0)},0))},n.send(this._data)}catch(th){return void this.setTimeoutFn(()=>{this._onError(th)},0)}"undefined"!==typeof document&&(this._index=us.requestsCount++,us.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if("undefined"!==typeof this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=ls,e)try{this._xhr.abort()}catch(th){}"undefined"!==typeof document&&delete us.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(us.requestsCount=0,us.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",ds);else if("function"===typeof addEventListener){addEventListener("onpagehide"in Qa?"pagehide":"unload",ds,!1)}function ds(){for(let e in us.requests)us.requests.hasOwnProperty(e)&&us.requests[e].abort()}const fs=function(){const e=ps({xdomain:!1});return e&&null!==e.responseType}();function ps(e){const t=e.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!t||ss))return new XMLHttpRequest}catch(th){}if(!t)try{return new(Qa[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(th){}}const hs="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class ms extends is{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=hs?{}:Xa(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(nh){return this.emitReserved("error",nh)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;La(n,this.supportsBinary,e=>{try{this.doWrite(n,e)}catch(th){}r&&Ka(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){"undefined"!==typeof this.ws&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=ns()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const gs=Qa.WebSocket||Qa.MozWebSocket;const bs={websocket:class extends ms{createSocket(e,t,n){return hs?new gs(e,t,n):t?new gs(e,t):new gs(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends is{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(nh){return this.emitReserved("error",nh)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=function(e,t){Wa||(Wa=new TextDecoder);const n=[];let r=0,i=-1,o=!1;return new TransformStream({transform(a,s){for(n.push(a);;){if(0===r){if(Ya(n)<1)break;const e=qa(n,1);o=128===(128&e[0]),i=127&e[0],r=i<126?3:126===i?1:2}else if(1===r){if(Ya(n)<2)break;const e=qa(n,2);i=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),r=3}else if(2===r){if(Ya(n)<8)break;const e=qa(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),o=t.getUint32(0);if(o>Math.pow(2,21)-1){s.enqueue(Aa);break}i=o*Math.pow(2,32)+t.getUint32(4),r=3}else{if(Ya(n)<i)break;const e=qa(n,i);s.enqueue(Ua(o?e:Wa.decode(e),t)),r=0}if(0===i||i>e){s.enqueue(Aa);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=Ga();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const i=()=>{n.read().then(e=>{let{done:t,value:n}=e;t||(this.onPacket(n),i())}).catch(e=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;this._writer.write(n).then(()=>{r&&Ka(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;null===(e=this._transport)||void 0===e||e.close()}},polling:class extends cs{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=fs&&!t}request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(e,{xd:this.xd},this.opts),new us(ps,this.uri(),e)}}},ys=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,xs=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function vs(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=ys.exec(e||""),o={},a=14;for(;a--;)o[xs[a]]=i[a]||"";return-1!=n&&-1!=r&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=function(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||r.splice(0,1);"/"==t.slice(-1)&&r.splice(r.length-1,1);return r}(0,o.path),o.queryKey=function(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,t,r){t&&(n[t]=r)}),n}(0,o.query),o}const ws="function"===typeof addEventListener&&"function"===typeof removeEventListener,Ss=[];ws&&addEventListener("offline",()=>{Ss.forEach(e=>e())},!1);class ks extends Va{constructor(e,t){if(super(),this.binaryType="arraybuffer",this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&"object"===typeof e&&(t=e,e=null),e){const n=vs(e);t.hostname=n.host,t.secure="https"===n.protocol||"wss"===n.protocol,t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=vs(t.host).host);es(this,t),this.secure=null!=t.secure?t.secure:"undefined"!==typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(e=>{const t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"===typeof this.opts.query&&(this.opts.query=function(e){let t={},n=e.split("&");for(let r=0,i=n.length;r<i;r++){let e=n[r].split("=");t[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}return t}(this.opts.query)),ws&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ss.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(0===this.transports.length)return void this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);const e=this.opts.rememberUpgrade&&ks.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",ks.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()}_onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let t=0;t<this.writeBuffer.length;t++){const n=this.writeBuffer[t].data;if(n&&(e+=ts(n)),t>0&&e>this._maxPayload)return this.writeBuffer.slice(0,t);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Ka(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,r){if("function"===typeof t&&(r=t,t=void 0),"function"===typeof n&&(r=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;(n=n||{}).compress=!1!==n.compress;const i={type:e,data:t,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(ks.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ws&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const e=Ss.indexOf(this._offlineEventListener);-1!==e&&Ss.splice(e,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}ks.protocol=4;class Es extends ks{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),"open"===this.readyState&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;ks.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",e=>{if(!n)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;ks.priorWebsocketSuccess="websocket"===t.name,this.transport.pause(()=>{n||"closed"!==this.readyState&&(c(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}}))};function i(){n||(n=!0,c(),t.close(),t=null)}const o=e=>{const n=new Error("probe error: "+e);n.transport=t.name,i(),this.emitReserved("upgradeError",n)};function a(){o("transport closed")}function s(){o("socket closed")}function l(e){t&&e.name!==t.name&&i()}const c=()=>{t.removeListener("open",r),t.removeListener("error",o),t.removeListener("close",a),this.off("close",s),this.off("upgrading",l)};t.once("open",r),t.once("error",o),t.once("close",a),this.once("close",s),this.once("upgrading",l),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}class Cs extends Es{constructor(e){const t="object"===typeof e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!t.transports||t.transports&&"string"===typeof t.transports[0])&&(t.transports=(t.transports||["polling","websocket","webtransport"]).map(e=>bs[e]).filter(e=>!!e)),super(e,t)}}const js="function"===typeof ArrayBuffer,Ps=Object.prototype.toString,_s="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Ps.call(Blob),As="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===Ps.call(File);function Ts(e){return js&&(e instanceof ArrayBuffer||(e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer)(e))||_s&&e instanceof Blob||As&&e instanceof File}function Rs(e,t){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(Rs(e[t]))return!0;return!1}if(Ts(e))return!0;if(e.toJSON&&"function"===typeof e.toJSON&&1===arguments.length)return Rs(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Rs(e[n]))return!0;return!1}function Ns(e){const t=[],n=e.data,r=e;return r.data=Ls(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Ls(e,t){if(!e)return e;if(Ts(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=Ls(e[r],t);return n}if("object"===typeof e&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=Ls(e[r],t));return n}return e}function $s(e,t){return e.data=Os(e.data,t),delete e.attachments,e}function Os(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"===typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=Os(e[n],t);else if("object"===typeof e)for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=Os(e[n],t));return e}const zs=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ms=5;var Ds;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(Ds||(Ds={}));class Is{constructor(e){this.replacer=e}encode(e){return e.type!==Ds.EVENT&&e.type!==Ds.ACK||!Rs(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===Ds.EVENT?Ds.BINARY_EVENT:Ds.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==Ds.BINARY_EVENT&&e.type!==Ds.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Ns(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}}function Us(e){return"[object Object]"===Object.prototype.toString.call(e)}class Fs extends Va{constructor(e){super(),this.reviver=e}add(e){let t;if("string"===typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Ds.BINARY_EVENT;n||t.type===Ds.BINARY_ACK?(t.type=n?Ds.EVENT:Ds.ACK,this.reconstructor=new Bs(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!Ts(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(void 0===Ds[n.type])throw new Error("unknown packet type "+n.type);if(n.type===Ds.BINARY_EVENT||n.type===Ds.BINARY_ACK){const r=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const i=e.substring(r,t);if(i!=Number(i)||"-"!==e.charAt(t))throw new Error("Illegal attachments");n.attachments=Number(i)}if("/"===e.charAt(t+1)){const r=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}n.nsp=e.substring(r,t)}else n.nsp="/";const r=e.charAt(t+1);if(""!==r&&Number(r)==r){const r=t+1;for(;++t;){const n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(!Fs.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(th){return!1}}static isPayloadValid(e,t){switch(e){case Ds.CONNECT:return Us(t);case Ds.DISCONNECT:return void 0===t;case Ds.CONNECT_ERROR:return"string"===typeof t||Us(t);case Ds.EVENT:case Ds.BINARY_EVENT:return Array.isArray(t)&&("number"===typeof t[0]||"string"===typeof t[0]&&-1===zs.indexOf(t[0]));case Ds.ACK:case Ds.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Bs{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=$s(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Hs(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const Gs=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ws extends Va{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Hs(e,"open",this.onopen.bind(this)),Hs(e,"packet",this.onpacket.bind(this)),Hs(e,"error",this.onerror.bind(this)),Hs(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.unshift("message"),this.emit.apply(this,t),this}emit(e){var t,n,r;if(Gs.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];if(o.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(o),this;const s={type:Ds.EVENT,data:o,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"===typeof o[o.length-1]){const e=this.ids++,t=o.pop();this._registerAckCallback(e,t),s.id=e}const l=null===(n=null===(t=this.io.engine)||void 0===t?void 0:t.transport)||void 0===n?void 0:n.writable,c=this.connected&&!(null===(r=this.io.engine)||void 0===r?void 0:r._hasPingExpired());return this.flags.volatile&&!l||(c?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var n,r=this;const i=null!==(n=this.flags.timeout)&&void 0!==n?n:this._opts.ackTimeout;if(void 0===i)return void(this.acks[e]=t);const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))},i),a=function(){r.io.clearTimeoutFn(o);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t.apply(r,n)};a.withError=!0,this.acks[e]=a}emitWithAck(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((t,r)=>{const i=(e,n)=>e?r(e):t(n);i.withError=!0,n.push(i),this.emit(e,...n)})}_addToQueue(e){var t=this;let n;"function"===typeof e[e.length-1]&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push(function(e){if(r!==t._queue[0])return;if(null!==e)r.tryCount>t._opts.retries&&(t._queue.shift(),n&&n(e));else if(t._queue.shift(),n){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];n(null,...o)}return r.pending=!1,t._drainQueue()}),this._queue.push(r),this._drainQueue()}_drainQueue(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ds.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(t=>String(t.id)===e)){const t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ds.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ds.EVENT:case Ds.BINARY_EVENT:this.onevent(e);break;case Ds.ACK:case Ds.BINARY_ACK:this.onack(e);break;case Ds.DISCONNECT:this.ondisconnect();break;case Ds.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"===typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];t.packet({type:Ds.ACK,id:e,data:i})}}}onack(e){const t=this.acks[e.id];"function"===typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ds.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Ys(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Ys.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},Ys.prototype.reset=function(){this.attempts=0},Ys.prototype.setMin=function(e){this.ms=e},Ys.prototype.setMax=function(e){this.max=e},Ys.prototype.setJitter=function(e){this.jitter=e};class qs extends Va{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&"object"===typeof t&&(n=t,t=void 0),(n=n||{}).path=n.path||"/socket.io",this.opts=n,es(this,n),this.reconnection(!1!==n.reconnection),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(r=n.randomizationFactor)&&void 0!==r?r:.5),this.backoff=new Ys({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==n.timeout?2e4:n.timeout),this._readyState="closed",this.uri=t;const i=n.parser||e;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=!1!==n.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Cs(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=Hs(t,"open",function(){n.onopen(),e&&e()}),i=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},o=Hs(t,"error",i);if(!1!==this._timeout){const e=this._timeout,n=this.setTimeoutFn(()=>{r(),i(new Error("timeout")),t.close()},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Hs(e,"ping",this.onping.bind(this)),Hs(e,"data",this.ondata.bind(this)),Hs(e,"error",this.onerror.bind(this)),Hs(e,"close",this.onclose.bind(this)),Hs(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(th){this.onclose("parse error",th)}}ondecoded(e){Ka(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ws(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t){if(this.nsps[n].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),null===(n=this.engine)||void 0===n||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open(t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Vs={};function Ks(e,t){"object"===typeof e&&(t=e,e=void 0);const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=e;n=n||"undefined"!==typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"===typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e="undefined"!==typeof n?n.protocol+"//"+e:"https://"+e),r=vs(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+t,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}(e,(t=t||{}).path||"/socket.io"),r=n.source,i=n.id,o=n.path,a=Vs[i]&&o in Vs[i].nsps;let s;return t.forceNew||t["force new connection"]||!1===t.multiplex||a?s=new qs(r,t):(Vs[i]||(Vs[i]=new qs(r,t)),s=Vs[i]),n.query&&!t.query&&(t.query=n.queryKey),s.socket(n.path,t)}Object.assign(Ks,{Manager:qs,Socket:Ws,io:Ks,connect:Ks});class Qs{constructor(){this.socket=null,this.authorityLevel="DEMO",this.currentUser="anonymous",this.isConnected=!1,this.reconnectAttempts=0,this.maxReconnectAttempts=5,this.connectionStates={DISCONNECTED:"disconnected",CONNECTING:"connecting",CONNECTED:"connected",AUTHENTICATED:"authenticated",ERROR:"error"},this.currentState=this.connectionStates.DISCONNECTED,this.eventListeners=new Map,this.serverUrl=void 0,this.socketConfig={transports:["websocket","polling"],timeout:2e4,forceNew:!0,reconnection:!0,reconnectionDelay:1e3,reconnectionAttempts:5},this.serverUrl="https://ingeneur001.github.io/legal-retro-gaming-service",console.log("\ud83c\udfae RETRORETRO Socket.IO Integration initializing...")}static getInstance(){return Qs.instance||(Qs.instance=new Qs),Qs.instance}async initializeAfterLogin(e){try{console.log("\ud83d\udd10 Initializing Socket.IO after successful login..."),e?(this.authorityLevel=e.level,this.currentUser=e.user,console.log(`\u2705 Authority from parameter: ${this.authorityLevel} (${this.currentUser})`)):(this.authorityLevel="DEMO",this.currentUser="anonymous",console.log("\u26a0\ufe0f No authority data provided, using DEMO/anonymous"));const t=await this.connect();if(!t.success)throw new Error(t.error||"Socket connection failed");return await this.sendAuthorityHandshake(),console.log("\ud83d\ude80 Socket.IO Integration completed successfully!"),{success:!0}}catch(t){return console.error("\u274c Socket.IO Integration failed:",t),{success:!1,error:"Connection failed"}}}async connect(){try{var e;return this.isConnected&&null!==(e=this.socket)&&void 0!==e&&e.connected?(console.log("[SocketManager] Already connected"),{success:!0}):this.currentState===this.connectionStates.CONNECTING?(console.log("[SocketManager] \u26a0\ufe0f Connection already in progress - waiting..."),new Promise(e=>{const t=setInterval(()=>{this.currentState===this.connectionStates.CONNECTED?(clearInterval(t),e({success:!0})):this.currentState===this.connectionStates.ERROR&&(clearInterval(t),e({success:!1,error:"Connection failed"}))},100)})):(console.log(`[SocketManager] Connecting to ${this.serverUrl}...`),this.currentState=this.connectionStates.CONNECTING,this.socket=Ks(this.serverUrl,this.socketConfig),this.setupSocketEventListeners(),new Promise((e,t)=>{const n=setTimeout(()=>{t(new Error("Connection timeout"))},this.socketConfig.timeout);this.socket.on("connect",()=>{clearTimeout(n),console.log("\u2705 Socket connected successfully"),this.isConnected=!0,this.currentState=this.connectionStates.CONNECTED,this.reconnectAttempts=0,this.emitToListeners("connect",{socketId:this.socket.id,timestamp:(new Date).toISOString()}),e({success:!0})}),this.socket.on("connect_error",e=>{clearTimeout(n),console.error("\u274c Socket connection failed:",e),this.currentState=this.connectionStates.ERROR,this.emitToListeners("connect_error",e),t(e)})}))}catch(t){return console.error("[SocketManager] Connection error:",t),this.currentState=this.connectionStates.ERROR,{success:!1,error:"Connection failed"}}}disconnect(){console.log("[SocketManager] Disconnecting socket..."),this.socket&&(this.socket.disconnect(),this.socket=null),this.isConnected=!1,this.currentState=this.connectionStates.DISCONNECTED,this.emitToListeners("disconnect",{timestamp:(new Date).toISOString()})}getSocket(){return this.socket}async sendAuthorityHandshake(){if(!this.socket||!this.isConnected)throw new Error("Socket not connected");console.log("[SocketManager] Sending authority handshake...");const e={authority:this.authorityLevel,user:this.currentUser,timestamp:(new Date).toISOString(),clientVersion:"1.0.0"};return this.socket.emit("authority-handshake",e),new Promise((e,t)=>{const n=setTimeout(()=>{t(new Error("Authority handshake timeout"))},1e4),r=t=>{clearTimeout(n),this.socket&&(this.socket.off("authority-confirmed",r),this.socket.off("authority-failed",i)),console.log("\u2705 Authority confirmed:",t),this.currentState=this.connectionStates.AUTHENTICATED,e()},i=e=>{clearTimeout(n),this.socket&&(this.socket.off("authority-confirmed",r),this.socket.off("authority-failed",i)),console.error("\u274c Authority failed:",e),t(new Error(`Authority verification failed: ${e.message}`))};this.socket?(this.socket.on("authority-confirmed",r),this.socket.on("authority-failed",i)):t(new Error("Socket not connected"))})}setAuthorityData(e,t){this.authorityLevel=e,this.currentUser=t,console.log(`[SocketManager] Authority updated: ${e} (${t})`)}on(e,t){this.eventListeners.has(e)||this.eventListeners.set(e,new Set),this.eventListeners.get(e).add(t),this.socket&&this.socket.on(e,t)}off(e,t){var n;t?(null===(n=this.eventListeners.get(e))||void 0===n||n.delete(t),this.socket&&this.socket.off(e,t)):(this.eventListeners.delete(e),this.socket&&this.socket.off(e))}emit(e,t){this.socket&&this.isConnected?this.socket.emit(e,t):console.warn(`[SocketManager] Cannot emit ${e}: Not connected`)}async connectSocket(e){console.log("[SocketManager] SessionManager compatibility: connectSocket()");try{const t=this.parseAuthToken(e);return await this.initializeAfterLogin(t)}catch(t){return console.error("[SocketManager] connectSocket failed:",t),this.emitToListeners("socketError",t instanceof Error?t.message:"Socket connection failed"),{success:!1,error:"Connection failed"}}}disconnectSocket(){console.log("[SocketManager] SessionManager compatibility: disconnectSocket()"),this.disconnect(),this.emitToListeners("socketDisconnected",void 0)}sendTestPing(){this.isConnected&&this.emit("ping",{timestamp:Date.now(),user:this.currentUser})}sendTestMessage(e){this.isConnected&&this.emit("test-message",{message:e,user:this.currentUser,timestamp:Date.now()})}requestServerInfo(){this.isConnected&&this.emit("get-server-info")}getIsConnected(){var e;return this.isConnected&&!0===(null===(e=this.socket)||void 0===e?void 0:e.connected)}isSocketReady(){return this.currentState===this.connectionStates.AUTHENTICATED}getCurrentState(){return this.currentState}getSocketId(){var e;return null===(e=this.socket)||void 0===e?void 0:e.id}getAuthorityStatus(){return{connected:this.isConnected,authority:this.authorityLevel,socketReady:this.isSocketReady(),user:this.currentUser,lastHeartbeat:(new Date).toISOString()}}getConnectionInfo(){return{connected:this.isConnected,authority:this.authorityLevel,socketReady:this.isSocketReady(),user:this.currentUser,lastHeartbeat:(new Date).toISOString(),state:this.currentState}}setupSocketEventListeners(){this.socket&&(console.log("[SocketManager] Setting up socket event listeners..."),this.socket.on("disconnect",e=>{console.log("[SocketManager] Disconnected:",e),this.isConnected=!1,this.currentState=this.connectionStates.DISCONNECTED,this.emitToListeners("disconnect",{reason:e}),this.emitToListeners("socketDisconnected",{reason:e}),"io server disconnect"===e&&this.reconnectAttempts<this.maxReconnectAttempts&&this.handleReconnect()}),this.socket.on("authority-confirmed",e=>{console.log("[SocketManager] Authority confirmed:",e),this.currentState=this.connectionStates.AUTHENTICATED,this.emitToListeners("authority-confirmed",e),this.emitToListeners("socketAuthenticated",e)}),this.socket.on("authority-failed",e=>{console.warn("[SocketManager] Authority verification failed:",e),this.emitToListeners("authority-failed",e)}),this.socket.on("playerCount",e=>{this.emitToListeners("playerCount",e)}),this.socket.on("userOnline",e=>{this.emitToListeners("userOnline",e)}),this.socket.on("userOffline",e=>{this.emitToListeners("userOffline",e)}),this.socket.on("userLoggedIn",e=>{this.emitToListeners("userLoggedIn",e)}),this.socket.on("userLoggedOut",e=>{this.emitToListeners("userLoggedOut",e)}),this.socket.on("testUserLogin",e=>{this.emitToListeners("testUserLogin",e)}),this.socket.on("testUserLogout",e=>{this.emitToListeners("testUserLogout",e)}),this.socket.on("error",e=>{console.error("[SocketManager] Socket error:",e),this.emitToListeners("error",e),this.emitToListeners("socketError",e)}),this.applyStoredListeners())}applyStoredListeners(){this.eventListeners.forEach((e,t)=>{e.forEach(e=>{this.socket&&!["connect","disconnect","error"].includes(t)&&this.socket.on(t,e)})})}emitToListeners(e,t){const n=this.eventListeners.get(e);n&&n.forEach(n=>{try{n(t)}catch(r){console.error(`[SocketManager] Error in event listener for ${e}:`,r)}})}handleReconnect(){this.reconnectAttempts++;const e=Math.min(1e3*Math.pow(2,this.reconnectAttempts),1e4);console.log(`[SocketManager] Reconnecting in ${e}ms (attempt ${this.reconnectAttempts})`),setTimeout(()=>{this.connect()},e)}parseAuthToken(e){try{const t=JSON.parse(atob(e.split(".")[1]||""));return{level:t.authority||"USER",user:t.username||"unknown"}}catch(t){return void console.warn("[SocketManager] Could not parse auth token:",t)}}destroy(){console.log("[SocketManager] Destroying instance..."),this.disconnect(),this.eventListeners.clear(),Qs.instance=null}}Qs.instance=null;const Xs=Qs.getInstance(),Js=Qi.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,Zs=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #333;
`,el=Qi.h1`
  color: #fff;
  font-size: 2rem;
  margin: 0;
`,tl=Qi.button`
  background: linear-gradient(45deg, #00ff88, #00cc6a);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,nl=Qi.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`,rl=Qi.button`
  background: ${e=>e.$selected?"#00ff88":"#333"};
  color: ${e=>e.$selected?"#000":"#fff"};
  border: 2px solid ${e=>e.$selected?"#00ff88":"#555"};
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: ${e=>e.$selected?"bold":"normal"};
  transition: all 0.2s ease;

  &:hover {
    border-color: #00ff88;
    background: ${e=>e.$selected?"#00ff88":"#444"};
  }
`,il=Qi.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,ol=Qi.div`
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00ff88;
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 255, 136, 0.15);
  }
`,al=Qi.div`
  margin-bottom: 15px;
`,sl=Qi.h3`
  color: #fff;
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`,ll=Qi.div`
  color: #00ff88;
  font-weight: bold;
  margin-bottom: 5px;
`,cl=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #aaa;
`,ul=Qi.div`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  padding: 60px 20px;
  background: #1a1a1a;
  border-radius: 12px;
  border: 2px dashed #333;
`,dl=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #00ff88;
  font-size: 1.1rem;
`,fl=[{slug:"tetris",title:"Tetris"},{slug:"snake",title:"Snake"},{slug:"pong",title:"Pong"},{slug:"memory",title:"Memory Game"}],pl=e=>{var n;let{socket:r,currentUser:i,onJoinSession:o}=e;const[a,s]=(0,t.useState)([]),[l,c]=(0,t.useState)("tetris"),[u,d]=(0,t.useState)(!1),[f,p]=(0,t.useState)(!1);(0,t.useEffect)(()=>{if(!r)return;const e=e=>{s(e),d(!1)},t=e=>{console.log("[GameLobby] session-created received:",e),console.log("[GameLobby] session.host.id:",e.host.id),console.log("[GameLobby] currentUser.id:",i.id),console.log("[GameLobby] Are they equal?",e.host.id===i.id),s(t=>[...t,e]),p(!1),e.host.id===i.id&&(console.log("[GameLobby] I am the host, navigating to game"),o(e.id,e.gameType))},n=e=>{s(t=>t.map(t=>t.id===e.id?e:t))},a=e=>{s(t=>t.filter(t=>t.id!==e))};return r.on("sessions-list",e),r.on("session-created",t),r.on("session-updated",n),r.on("session-removed",a),d(!0),r.emit("get-sessions"),()=>{r.off("sessions-list",e),r.off("session-created",t),r.off("session-updated",n),r.off("session-removed",a)}},[r]);const h=a.filter(e=>"waiting"===e.status&&e.players.length<e.maxPlayers);return(0,Jt.jsxs)(Js,{children:[(0,Jt.jsxs)(Zs,{children:[(0,Jt.jsx)(el,{children:"Game Lobby"}),(0,Jt.jsx)("div",{children:(0,Jt.jsxs)("span",{style:{color:"#666",marginRight:"10px"},children:["Welcome, ",i.displayName]})})]}),(0,Jt.jsxs)(nl,{children:[fl.map(e=>(0,Jt.jsx)(rl,{$selected:l===e.slug,onClick:()=>c(e.slug),children:e.title},e.slug)),(0,Jt.jsx)(tl,{onClick:()=>{r&&!f&&(console.log("[GameLobby] Creating session:",l),p(!0),r.emit("create-session",{gameType:l,maxPlayers:4,config:{difficulty:"normal"}}),console.log("[GameLobby] create-session event sent"))},disabled:f||!r,children:f?"Creating...":`Create ${null===(n=fl.find(e=>e.slug===l))||void 0===n?void 0:n.title} Game`})]}),u?(0,Jt.jsx)(dl,{children:"Loading available games..."}):0===h.length?(0,Jt.jsxs)(ul,{children:[(0,Jt.jsx)("h3",{children:"No games available"}),(0,Jt.jsx)("p",{children:"Be the first to create a game!"})]}):(0,Jt.jsx)(il,{children:h.map(e=>{var t;return(0,Jt.jsxs)(ol,{onClick:()=>{return t=e.id,n=e.gameType,void(r&&o(t,n));var t,n},children:[(0,Jt.jsxs)(al,{children:[(0,Jt.jsx)(sl,{children:(null===(t=fl.find(t=>t.slug===e.gameType))||void 0===t?void 0:t.title)||e.gameType}),(0,Jt.jsxs)(ll,{children:[e.players.length,"/",e.maxPlayers," players"]})]}),(0,Jt.jsxs)(cl,{children:[(0,Jt.jsxs)("span",{children:["Host: ",e.host.displayName]}),(0,Jt.jsx)("span",{children:"waiting"===e.status?"\u23f3 Waiting":"\ud83c\udfae Playing"})]})]},e.id)})})]})},hl=Qi.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #0a0a0a;
`,ml=Qi.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
`,gl=Qi.div`
  text-align: ${e=>e.$side};
  color: #fff;
`,bl=Qi.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`,yl=Qi.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #00ff88;
`,xl=Qi.div`
  position: relative;
  border: 3px solid #00ff88;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
`,vl=Qi.canvas`
  display: block;
  background: #000;
`,wl=Qi.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`,Sl=Qi.div`
  margin-top: 20px;
  color: #888;
  font-size: 0.9rem;
`,kl=Qi.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff4444;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #ff6666;
  }
`,El=Qi.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Cl=Qi.div`
  background: rgba(255, 50, 50, 0.9);
  color: white;
  padding: 30px 50px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 0 30px rgba(255, 50, 50, 0.5);
`,jl=e=>{var n,r;let{socket:i,sessionId:o,currentUser:a,onLeave:s}=e;const l=(0,t.useRef)(null),c=800,u=600,[d,f]=(0,t.useState)({ball:{x:400,y:300,radius:8},paddles:{left:{y:250,height:100},right:{y:250,height:100}},scores:{left:0,right:0},status:"waiting"}),[p,h]=(0,t.useState)(null),[m,g]=(0,t.useState)({}),[b,y]=(0,t.useState)(null),[x,v]=(0,t.useState)(null),[w,S]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{if(!i||!o)return;const e=e=>{console.log("\u26a0\ufe0f Player disconnected:",e.username),h(`${e.username} has disconnected. Returning to lobby...`),setTimeout(()=>{s()},3e3)};return i.on("player-disconnected",e),()=>{i.off("player-disconnected",e)}},[i,o,s]),(0,t.useEffect)(()=>{if(!i)return;const e=()=>{console.log("\ud83d\udd35 SESSION-JOINED received, emitting pong:join with sessionId:",o),i.emit("pong:join",o)},t=e=>{console.log("\ud83d\udd35 ROOM-JOINED received:",e),y(e.side),g(e.players)},n=e=>{f(e),"playing"===e.status&&S(!1)},r=e=>{v(e),0===e&&setTimeout(()=>v(null),500)},a=e=>{S(!0),f(e=>({...e,status:"finished"}))};return i.on("session-joined",e),i.on("pong:room-joined",t),i.on("pong:game-state",n),i.on("pong:countdown",r),i.on("pong:game-over",a),()=>{i.off("session-joined",e),i.off("pong:room-joined",t),i.off("pong:game-state",n),i.off("pong:countdown",r),i.off("pong:game-over",a)}},[i,o]),(0,t.useEffect)(()=>{if(!i||!o)return;const e=e=>{console.log("\u26a0\ufe0f Player disconnected:",e.username),alert(`${e.username} has disconnected. Returning to lobby...`),window.location.href="/lobby"};return i.on("player-disconnected",e),()=>{i.off("player-disconnected",e)}},[i,o]),(0,t.useEffect)(()=>{if(!i||!b)return;const e=e=>{if(!["w","W","s","S","ArrowUp","ArrowDown"].includes(e.key))return;if(e.preventDefault(),w)return;let t=d.paddles[b].y;"left"===b?("w"!==e.key&&"W"!==e.key||(t-=15),"s"!==e.key&&"S"!==e.key||(t+=15)):("ArrowUp"===e.key&&(t-=15),"ArrowDown"===e.key&&(t+=15)),t=Math.max(0,Math.min(t,u-d.paddles[b].height)),t!==d.paddles[b].y&&i.emit("pong:paddle-move",{y:t})};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[i,b,w,d.paddles,u]),(0,t.useEffect)(()=>{const e=l.current;if(!e)return;const t=e.getContext("2d");t&&(t.fillStyle="#000",t.fillRect(0,0,c,u),t.strokeStyle="#333",t.setLineDash([10,10]),t.beginPath(),t.moveTo(400,0),t.lineTo(400,u),t.stroke(),t.setLineDash([]),t.fillStyle="#00ff88",t.fillRect(20,d.paddles.left.y,10,d.paddles.left.height),t.fillRect(770,d.paddles.right.y,10,d.paddles.right.height),t.beginPath(),t.arc(d.ball.x,d.ball.y,d.ball.radius,0,2*Math.PI),t.fillStyle="#fff",t.fill())},[d]),(0,Jt.jsxs)(hl,{children:[(0,Jt.jsx)(kl,{onClick:s,children:"Leave Game"}),(0,Jt.jsxs)(ml,{children:[(0,Jt.jsxs)(gl,{$side:"left",children:[(0,Jt.jsx)(bl,{children:(null===(n=m.left)||void 0===n?void 0:n.displayName)||"Waiting..."}),(0,Jt.jsx)(yl,{children:d.scores.left})]}),(0,Jt.jsxs)(gl,{$side:"right",children:[(0,Jt.jsx)(bl,{children:(null===(r=m.right)||void 0===r?void 0:r.displayName)||"Waiting..."}),(0,Jt.jsx)(yl,{children:d.scores.right})]})]}),(0,Jt.jsxs)(xl,{children:[(0,Jt.jsx)(vl,{ref:l,width:c,height:u}),(w||null!==x)&&(0,Jt.jsx)(wl,{children:null!==x?0===x?"GO!":x:"Waiting for opponent..."}),p&&(0,Jt.jsx)(El,{children:(0,Jt.jsx)(Cl,{children:p})})]}),(0,Jt.jsxs)(Sl,{children:["left"===b&&"Controls: W (up) / S (down)","right"===b&&"Controls: Arrow Up / Arrow Down"]})]})},Pl=Qi.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f23, #1a1a2e);
`,_l=Qi.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`,Al=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #333;
`,Tl=Qi.h2`
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
`,Rl=Qi.button`
  background: #ff4444;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    background: #ff6666;
    transform: translateY(-1px);
  }
`,Nl=Qi.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`,Ll=Qi.div`
  background: ${e=>e.$isHost?"linear-gradient(45deg, #ffd700, #ffed4e)":"#333"};
  color: ${e=>e.$isHost?"#000":"#fff"};
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: ${e=>e.$isHost?"bold":"normal"};
  display: flex;
  align-items: center;
  gap: 5px;
`,$l=Qi.div`
  flex: 1;
  background: #1a1a1a;
  border-radius: 12px;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
`,Ol=Qi.div`
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
`,zl=Qi.div`
  width: 350px;
  background: #16213e;
  border-left: 2px solid #333;
  display: flex;
  flex-direction: column;
`,Ml=Qi.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`,Dl=Qi.h3`
  color: #fff;
  margin: 0 0 15px 0;
  font-size: 1.1rem;
`,Il=Qi.div`
  flex: 1;
  overflow-y: auto;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 15px;
  background: #0f0f23;
  margin-bottom: 15px;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 3px;
  }
`,Ul=Qi.div`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 6px;
  background: ${e=>e.$isSystem?"#2a2a4a":"transparent"};
  font-size: 0.9rem;
  color: ${e=>e.$isSystem?"#00ff88":"#fff"};
`,Fl=Qi.span`
  color: #00ff88;
  font-weight: bold;
  margin-right: 5px;
`,Bl=Qi.div`
  display: flex;
  gap: 10px;
`,Hl=Qi.input`
  flex: 1;
  background: #333;
  border: 1px solid #555;
  border-radius: 6px;
  padding: 10px;
  color: #fff;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #00ff88;
  }

  &::placeholder {
    color: #888;
  }
`,Gl=Qi.button`
  background: #00ff88;
  border: none;
  border-radius: 6px;
  padding: 10px 15px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #00cc6a;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Wl=Qi.button`
  background: linear-gradient(45deg, #00ff88, #00cc6a);
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Yl=[{slug:"tetris",title:"Tetris"},{slug:"snake",title:"Snake"},{slug:"pong",title:"Pong"},{slug:"memory",title:"Memory Game"}],ql=e=>{var n;let{socket:r,currentUser:i,sessionId:o,onLeaveRoom:a}=e;const[s,l]=(0,t.useState)(null),[c,u]=(0,t.useState)([]),[d,f]=(0,t.useState)([]),[p,h]=(0,t.useState)([]),[m,g]=(0,t.useState)(""),[b,y]=(0,t.useState)("waiting"),[x,v]=(0,t.useState)(!1),w=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!r)return;const e=e=>{var t;l(e),u(e.players),v(e.host.id===i.id);const n={id:Date.now().toString(),senderId:"system",senderName:"System",type:"system",message:`Welcome to ${(null===(t=Yl.find(t=>t.slug===e.gameType))||void 0===t?void 0:t.title)||e.gameType}!`,timestamp:new Date};h([n])},t=(e,t)=>{l(t),u(t.players);const n={id:Date.now().toString(),senderId:"system",senderName:"System",type:"system",message:`${e.displayName} joined the game`,timestamp:new Date};h(e=>[...e,n])},n=(e,t)=>{l(t),u(t.players);const n={id:Date.now().toString(),senderId:"system",senderName:"System",type:"system",message:"A player left the game",timestamp:new Date};h(e=>[...e,n])},a=e=>{h(t=>[...t,e])},s=e=>{y(e.status||"playing")},c=e=>{l(e),u(e.players),y(e.status)};return r.on("session-joined",e),r.on("player-joined",t),r.on("player-left",n),r.on("chat-message",a),r.on("game-state-update",s),r.on("session-updated",c),r.emit("join-session",o),()=>{r.off("session-joined",e),r.off("player-joined",t),r.off("player-left",n),r.off("chat-message",a),r.off("game-state-update",s),r.off("session-updated",c)}},[r,o,i.id]),(0,t.useEffect)(()=>{w.current&&(w.current.scrollTop=w.current.scrollHeight)},[p]);const S=()=>{if(!m.trim()||!r)return;Date.now().toString(),i.id,i.displayName,new Date;r.emit("send-chat-message",m),g("")},k=()=>{r&&r.emit("leave-session",o),a()};return s?"pong"===s.gameType?(0,Jt.jsx)(jl,{socket:r,sessionId:o,currentUser:i,onLeave:k}):(0,Jt.jsxs)(Pl,{children:[(0,Jt.jsxs)(_l,{children:[(0,Jt.jsxs)(Al,{children:[(0,Jt.jsx)(Tl,{children:(null===(n=Yl.find(e=>e.slug===s.gameType))||void 0===n?void 0:n.title)||s.gameType}),(0,Jt.jsx)(Rl,{onClick:k,children:"Leave Room"})]}),(0,Jt.jsxs)(Nl,{children:[c.map(e=>{var t,n;return(0,Jt.jsxs)(Ll,{$isHost:e.id===(null===s||void 0===s||null===(t=s.host)||void 0===t?void 0:t.id),children:[e.id===(null===s||void 0===s||null===(n=s.host)||void 0===n?void 0:n.id)&&"\ud83d\udc51 ",e.displayName]},e.id)}),d.length>0&&(0,Jt.jsxs)(Ll,{$isHost:!1,children:["\ud83d\udc41\ufe0f ",d.length," spectator(s)"]})]}),(0,Jt.jsx)($l,{children:"waiting"===b?(0,Jt.jsxs)("div",{children:[(0,Jt.jsxs)(Ol,{children:[(0,Jt.jsx)("div",{children:"Game starting soon..."}),(0,Jt.jsxs)("div",{style:{fontSize:"0.9rem",opacity:.7,marginTop:"10px"},children:["Waiting for ",c.length,"/",(null===s||void 0===s?void 0:s.maxPlayers)||2," players"]})]}),x&&c.length>=2&&(0,Jt.jsx)(Wl,{onClick:()=>{r&&x&&r.emit("start-game",o)},children:"Start Game"})]}):(0,Jt.jsx)(Ol,{children:"Game in progress..."})})]}),(0,Jt.jsx)(zl,{children:(0,Jt.jsxs)(Ml,{children:[(0,Jt.jsx)(Dl,{children:"Chat"}),(0,Jt.jsx)(Il,{ref:w,children:p.map(e=>(0,Jt.jsx)(Ul,{$isSystem:"system"===e.type,children:"system"===e.type?(0,Jt.jsx)("span",{children:e.message}):(0,Jt.jsxs)("span",{children:[(0,Jt.jsxs)(Fl,{children:[e.senderName,":"]})," ",e.message]})},e.id))}),(0,Jt.jsxs)(Bl,{children:[(0,Jt.jsx)(Hl,{type:"text",placeholder:"Type a message...",value:m,onChange:e=>g(e.target.value),onKeyPress:e=>{"Enter"===e.key&&S()},maxLength:200}),(0,Jt.jsx)(Gl,{onClick:S,disabled:!m.trim(),children:"Send"})]})]})})]}):(0,Jt.jsx)(Pl,{children:(0,Jt.jsx)(_l,{children:(0,Jt.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,Jt.jsx)("div",{style:{color:"#fff",fontSize:"1.2rem"},children:"Loading room..."})})})})},Vl=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
`,Kl=Qi.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 71, 87, 0.2);
  border: 2px solid #ff4757;
  color: #ff4757;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 71, 87, 0.3);
    transform: scale(1.05);
  }
`,Ql=Qi.div`
  color: #fff;
  text-align: center;
  margin-top: 4rem;
  
  h2 {
    color: #ff4757;
    margin-bottom: 1rem;
  }
  
  button {
    background: #ff4757;
    border: none;
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1rem;
    
    &:hover {
      background: #ff6b7a;
    }
  }
`,Xl=()=>{const e=Fe(),{isLoggedIn:n,currentUser:r}=Qt(),[i,o]=(0,t.useState)("lobby"),[a,s]=(0,t.useState)(null),[l,c]=(0,t.useState)(""),u=Xs.getSocket();if(!n||!r)return(0,Jt.jsx)(Vl,{children:(0,Jt.jsxs)(Ql,{children:[(0,Jt.jsx)("h2",{children:"Authentication Required"}),(0,Jt.jsx)("p",{children:"Please log in to access multiplayer games"}),(0,Jt.jsx)("button",{onClick:()=>e("/login"),children:"Go to Login"})]})});if(!u)return(0,Jt.jsx)(Vl,{children:(0,Jt.jsxs)(Ql,{children:[(0,Jt.jsx)("h2",{children:"Connecting to server..."}),(0,Jt.jsx)("p",{children:"Please wait while we establish connection"})]})});const d={id:r.username||"unknown",username:r.username||"Player",displayName:r.username||"Player",socketId:(null===u||void 0===u?void 0:u.id)||"",isOnline:!0};return(0,Jt.jsxs)(Vl,{children:[(0,Jt.jsx)(Kl,{onClick:()=>e("/games"),children:"\u2190 Back to Games"}),"lobby"===i?(0,Jt.jsx)(pl,{socket:u,currentUser:d,onJoinSession:(e,t)=>{console.log(`Joining session ${e} (${t})`),s(e),c(t),o("room")}}):(0,Jt.jsx)(ql,{socket:u,currentUser:d,sessionId:a,onLeaveRoom:()=>{console.log("Leaving room, returning to lobby"),s(null),c(""),o("lobby")}})]})},Jl=Zi`
  0% {
    transform: translateX(-100%) translateY(-100%);
  }
  100% {
    transform: translateX(100%) translateY(100%);
  }
`,Zl=Zi`
  0% {
    text-shadow: 
      0 0 15px #00ff88,
      0 0 30px #00ff88,
      0 0 45px #00ff88,
      0 0 60px #00ff88;
  }
  100% {
    text-shadow: 
      0 0 8px #00ff88,
      0 0 15px #00ff88,
      0 0 25px #00ff88,
      0 0 35px #00ff88;
  }
`,ec=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
`,tc=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,nc=Qi.div`
  text-align: center;
  margin: 3rem 0;

  h1 {
    font-size: 6rem;
    font-weight: bold;
    color: #00ff88;
    text-shadow: 
      0 0 15px #00ff88,
      0 0 30px #00ff88,
      0 0 45px #00ff88,
      0 0 60px #00ff88;
    letter-spacing: 0.3rem;
    animation: ${Zl} 2s infinite alternate;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }
`,rc=Qi.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 1rem 0;
`,ic=Qi.button.withConfig({shouldForwardProp:e=>!["active"].includes(e)})`
  background: ${e=>e.active?"rgba(0, 255, 136, 0.2)":"transparent"};
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  min-width: 100px;
  text-shadow: 0 0 5px #00ff88, 0 0 8px #00ff88;
  box-shadow: ${e=>e.active?"0 0 20px rgba(0, 255, 136, 0.8), inset 0 0 20px rgba(0, 255, 136, 0.3)":"0 0 8px rgba(0, 255, 136, 0.3), inset 0 0 8px rgba(0, 255, 136, 0.1)"};
  white-space: nowrap;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    text-shadow: 0 0 8px #00ff88, 0 0 15px #00ff88, 0 0 25px #00ff88;
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.6), inset 0 0 15px rgba(0, 255, 136, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    min-width: 80px;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`,oc=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 4rem 0 4rem 0; 
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,ac=Qi.div`
  background: linear-gradient(135deg, rgba(0, 20, 40, 0.3) 0%, rgba(40, 40, 60, 0.2) 50%, rgba(0, 20, 40, 0.3) 100%);
  border: 2px solid #444444;
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  width: 200px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  opacity: 0.7;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  .icon {
    font-size: 2.5rem;
    color: #888888;
    transition: all 0.3s ease;
    z-index: 2;
    position: relative;
  }
  
  .title {
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #888888;
    text-align: center;
    transition: all 0.3s ease;
    z-index: 2;
    position: relative;
  }

  /* Diagonaler Sweep-Effekt mit Arcade-Farbe */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 40%, 
      rgba(0, 255, 136, 0.3) 45%, 
      rgba(0, 255, 136, 0.6) 50%, 
      rgba(0, 255, 136, 0.3) 55%, 
      transparent 60%
    );
    transform: translateX(-100%) translateY(-100%);
    transition: transform 0.6s ease;
    z-index: 1;
  }
  
  &:hover {
    border-color: #00ff88;
    transform: scale(1.02);
    
    .icon {
      color: #00ff88;
      filter: drop-shadow(0 0 8px #00ff88);
    }
    
    .title {
      color: #00ff88;
      text-shadow: 0 0 8px #00ff88;
    }
    
    &::before {
      animation: ${Jl} 0.8s ease;
    }
  }
`,sc=Qi.div`
  margin-top: 2rem;
  text-align: center;
  
  h3 {
    color: #00ff88;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px #00ff88;
  }
  
  p {
    color: #88ffaa;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,lc=()=>{const e=Fe(),{authorityLevel:t,isAuthenticated:n,currentUser:r}=Qt();return(0,Jt.jsxs)(ec,{children:[(0,Jt.jsx)(tc,{children:(0,Jt.jsx)("div",{})}),(0,Jt.jsx)(nc,{children:(0,Jt.jsx)("h1",{children:"ARCADE"})}),(0,Jt.jsx)(rc,{children:(0,Jt.jsx)(ic,{onClick:()=>{return t="/games",console.log("Navigation button clicked:",t),void e(t);var t},children:"GAMES"})}),(0,Jt.jsxs)(sc,{children:[(0,Jt.jsx)("h3",{children:"\ud83d\udea7 Coming Soon"}),(0,Jt.jsx)("p",{children:"Classic arcade games are currently in development"})]}),(0,Jt.jsx)(oc,{children:[{id:"breakout",title:"Breakout",icon:"\ud83e\uddf1",path:"/games/arcade/breakout"},{id:"space-invaders",title:"Space Invaders",icon:"\ud83d\udc7e",path:"/games/arcade/space-invaders"},{id:"asteroids",title:"Asteroids",icon:"\u2604\ufe0f",path:"/games/arcade/asteroids"},{id:"pac-man",title:"Pac-Man",icon:"\ud83d\udfe1",path:"/games/arcade/pac-man"},{id:"frogger",title:"Frogger",icon:"\ud83d\udc38",path:"/games/arcade/frogger"},{id:"centipede",title:"Centipede",icon:"\ud83d\udc1b",path:"/games/arcade/centipede"},{id:"galaga",title:"Galaga",icon:"\ud83d\ude80",path:"/games/arcade/galaga"},{id:"donkey-kong",title:"Donkey Kong",icon:"\ud83e\udd8d",path:"/games/arcade/donkey-kong"}].map(e=>(0,Jt.jsxs)(ac,{onClick:()=>(e=>{console.log(`${e.title} is still in development`)})(e),children:[(0,Jt.jsx)("div",{className:"icon",children:e.icon}),(0,Jt.jsx)("div",{className:"title",children:e.title})]},e.id))})]})},cc=Zi`
  0%, 100% {
    text-shadow: 
      0 0 8px #4a9eff,
      0 0 15px #4a9eff,
      0 0 25px #4a9eff;
  }
  50% {
    text-shadow: 
      0 0 5px #4a9eff,
      0 0 10px #4a9eff,
      0 0 18px #4a9eff;
  }
`,uc=Zi`
  0% {
    text-shadow: 
      0 0 15px #4a9eff,
      0 0 30px #4a9eff,
      0 0 45px #4a9eff,
      0 0 60px #4a9eff;
  }
  100% {
    text-shadow: 
      0 0 8px #4a9eff,
      0 0 15px #4a9eff,
      0 0 25px #4a9eff,
      0 0 35px #4a9eff;
  }
`,dc=Zi`
  0% {
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.5),
      0 0 40px rgba(0, 255, 255, 0.3);
  }
  100% {
    box-shadow: 
      0 0 30px rgba(0, 255, 255, 0.8),
      0 0 60px rgba(0, 255, 255, 0.4);
  }
`,fc=Zi`
  0% {
    transform: translateX(-100%) translateY(-100%);
  }
  100% {
    transform: translateX(100%) translateY(100%);
  }
`,pc=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
  overflow: hidden;
`,hc=Qi.div`
  text-align: center;
  margin: 4rem 0 1rem 0;
`,mc=Qi.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #4a9eff;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin: 0;
  text-align: center;
  text-shadow: 
    0 0 15px #4a9eff,
    0 0 30px #4a9eff,
    0 0 45px #4a9eff,
    0 0 60px #4a9eff;
  
  /* Sanfte Hauptanimation */
  animation: ${uc} 2s infinite alternate;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`,gc=Qi.button`
  background: transparent;
  border: 2px solid #4a9eff;
  color: #ffffff;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  /* Neon-Effekt in PROFILE-Farben */
  text-shadow: 
    0 0 8px #4a9eff,
    0 0 15px #4a9eff;
  box-shadow: 
    0 0 10px rgba(74, 158, 255, 0.5),
    inset 0 0 10px rgba(74, 158, 255, 0.1);
  
  /* Animation wie beim PROFILE-Titel */
  animation: ${uc} 8s ease-in-out infinite;
  
  /* Zusätzlicher Glow-Effekt in PROFILE-Farben */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #4a9eff, #7bb3ff, #4a9eff);
    border-radius: 8px;
    z-index: -1;
    opacity: 0.3;
    animation: ${cc} 6s linear infinite;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #7bb3ff;
    color: #7bb3ff;
    text-shadow: 
      0 0 12px #7bb3ff,
      0 0 20px #7bb3ff;
    box-shadow: 
      0 0 20px rgba(123, 179, 255, 0.8),
      inset 0 0 20px rgba(123, 179, 255, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,bc=Qi.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 1rem 0;
  gap: 2.5rem; 
`,yc=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 830px;
  margin: 4rem auto 4rem auto;
  flex-wrap: nowrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,xc=Qi.button`
  background: rgba(0, 20, 40, 0.8);
  border: 3px solid ${e=>e.borderColor};
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 200px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px ${e=>e.borderColor}aa;
    
    .title {
      text-shadow: 0 0 15px ${e=>e.borderColor}, 0 0 25px ${e=>e.borderColor}aa;
    }
    
    .icon {
      filter: drop-shadow(0 0 12px ${e=>e.borderColor});
    }
  }

  .icon {
    font-size: 2.5rem;
    margin: 0;
    transition: all 0.3s ease;
    color: ${e=>e.borderColor};
  }
  
  .title {
    color: ${e=>e.borderColor};
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.3s ease;
    text-shadow: 0 0 10px ${e=>e.borderColor}, 0 0 20px ${e=>e.borderColor}aa;
    text-align: center;
    line-height: 1.2;
  }
`,vc=Qi.button`
  background: rgba(0, 20, 40, 0.8);
  border: 3px solid ${e=>e.enabled?"#ff4444":"#444444"};
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  cursor: ${e=>e.enabled?"pointer":"not-allowed"};
  transition: all 0.3s ease;
  width: 200px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  opacity: ${e=>e.enabled?1:.7};

  .icon {
    font-size: 2.5rem;
    margin: 0;
    transition: all 0.3s ease;
    color: ${e=>e.enabled?"#ff4444":"#888888"};
  }
  
  .title {
    color: ${e=>e.enabled?"#ff4444":"#888888"};
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.3s ease;
    text-shadow: ${e=>e.enabled?"0 0 10px #ff4444, 0 0 20px #ff4444aa":"none"};
    text-align: center;
    line-height: 1.2;
  }

  /* Hover nur für enabled Buttons */
  ${e=>e.enabled&&qi`
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px #ff4444aa;
      
      .title {
        text-shadow: 0 0 15px #ff4444, 0 0 25px #ff4444aa;
      }
      
      .icon {
        filter: drop-shadow(0 0 12px #ff4444);
      }
    }
  `}
`,wc=Qi.h2`
  color: #ffa500;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0 1.5rem 0;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 5px #ffa500;
`,Sc=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 430px;
  margin: 0 auto;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,kc=Qi.button`
  background: ${e=>e.enabled?"rgba(0, 20, 40, 0.8)":"linear-gradient(135deg, rgba(0, 20, 40, 0.3) 0%, rgba(40, 40, 60, 0.2) 50%, rgba(0, 20, 40, 0.3) 100%)"};
  border: ${e=>e.enabled?`3px solid ${e.borderColor}`:"2px solid #444444"};
  border-radius: 12px;
  padding: 1.5rem 1.8rem;
  cursor: ${e=>(e.enabled,"pointer")};
  transition: all 0.3s ease;
  opacity: ${e=>e.enabled?1:.7};
  width: 200px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  position: relative;
  overflow: hidden;

  .icon {
    font-size: 2.5rem;
    margin: 0;
    transition: all 0.3s ease;
    color: ${e=>e.enabled?e.borderColor:"#888888"};
    z-index: 2;
    position: relative;
  }
  
  .title {
    color: ${e=>e.enabled?e.borderColor:"#888888"};
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.3s ease;
    text-shadow: ${e=>e.enabled?`0 0 10px ${e.borderColor}, 0 0 20px ${e.borderColor}aa`:"none"};
    text-align: center;
    line-height: 1.2;
    z-index: 2;
    position: relative;
  }

  /* Hover für enabled Buttons */
  ${e=>e.enabled&&qi`
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px ${e.borderColor}aa;
      
      .title {
        text-shadow: 0 0 15px ${e.borderColor}, 0 0 25px ${e.borderColor}aa;
      }
      
      .icon {
        filter: drop-shadow(0 0 12px ${e.borderColor});
      }
    }
  `}

  /* Diagonaler Sweep für disabled */
  ${e=>!e.enabled&&qi`
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 40%, 
        rgba(255, 215, 0, 0.3) 45%, 
        rgba(255, 215, 0, 0.6) 50%, 
        rgba(255, 215, 0, 0.3) 55%, 
        transparent 60%
      );
      transform: translateX(-100%) translateY(-100%);
      transition: transform 0.6s ease;
      z-index: 1;
    }
    
    &:hover {
      border-color: #ffd700;
      transform: scale(1.02);
      
      .icon {
        color: #ffd700;
        filter: drop-shadow(0 0 8px #ffd700);
      }
      
      .title {
        color: #ffd700;
        text-shadow: 0 0 8px #ffd700;
      }
      
      &::before {
        animation: ${fc} 0.8s ease;
      }
    }
  `}
`,Ec=Qi.div`
  background: rgba(0, 0, 0, 0.9);
  border: 4px solid #00ff00;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  max-width: 700px;
  box-shadow: 
    0 0 20px rgba(0, 255, 0, 0.5),
    0 0 40px rgba(0, 255, 0, 0.3);
  animation: ${dc} 3s infinite;
  margin-top: 4rem;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 500px;
  }
`,Cc=Qi.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,jc=Qi.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding: 0.5rem 0;
`,Pc=Qi.span`
  color: #00ffff;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff;
  font-weight: bold;
`,_c=Qi.span`
  color: ${e=>e.color};
  font-weight: bold;
  text-shadow: 
    0 0 5px ${e=>e.color},
    0 0 10px ${e=>e.color};
`,Ac=()=>{const e=Fe(),{isAuthenticated:t,currentUser:n,authorityLevel:r}=Qt();n?console.log("ProfileZone currentUser:",JSON.stringify(n,null,2)):console.log("ProfileZone currentUser is null");const i=t=>{switch(console.log(`Navigation: ${t}`),console.log("=== PROFILE DEBUG ==="),console.log("currentUser:",n),console.log("created_at value:",null===n||void 0===n?void 0:n.created_at),console.log("===================="),t){case"login":e("/login");break;case"register":e("/register");break;case"settings":e("/settings");break;case"payment":e("/pricing");break;default:console.log(`Unknown zone: ${t}`)}};return(0,Jt.jsxs)(pc,{children:[(0,Jt.jsx)(hc,{children:(0,Jt.jsx)(mc,{children:"PROFILE"})}),(0,Jt.jsxs)(bc,{children:[(0,Jt.jsx)(gc,{onClick:()=>e("/"),children:"HOME"}),(0,Jt.jsx)(gc,{onClick:()=>e("/games"),children:"GAMES"})]}),(0,Jt.jsxs)(yc,{children:[(0,Jt.jsxs)(xc,{borderColor:"#00ffff",onClick:()=>i("login"),children:[(0,Jt.jsx)("div",{className:"icon",children:"\ud83d\udd11"}),(0,Jt.jsx)("div",{className:"title",children:"LOGIN"})]}),(0,Jt.jsxs)(vc,{enabled:t,onClick:t?async()=>{try{console.log("Logging out user:",null===n||void 0===n?void 0:n.username);const e=await fetch("http://localhost:3001/api/auth/logout",{method:"POST",credentials:"include"});if(e.ok){const t=await e.json();console.log("Logout successful, authority reset to:",t.authorityLevel),window.location.reload()}else console.error("Logout failed"),window.location.reload()}catch(e){console.error("Logout error:",e),window.location.reload()}}:()=>{},children:[(0,Jt.jsx)("div",{className:"icon",children:"\ud83d\udeaa"}),(0,Jt.jsx)("div",{className:"title",children:"LOGOUT"})]}),(0,Jt.jsxs)(xc,{borderColor:"#ff0099",onClick:()=>i("register"),children:[(0,Jt.jsx)("div",{className:"icon",children:"\ud83d\udcdd"}),(0,Jt.jsx)("div",{className:"title",children:"REGISTER"})]})]}),(0,Jt.jsx)(wc,{children:"\u2699\ufe0f Account Management"}),(0,Jt.jsxs)(Sc,{children:[(0,Jt.jsxs)(kc,{enabled:t,borderColor:"#ffff00",onClick:t?()=>i("settings"):()=>{},children:[(0,Jt.jsx)("div",{className:"icon",children:"\u2699\ufe0f"}),(0,Jt.jsx)("div",{className:"title",children:"SETTINGS"})]}),(0,Jt.jsxs)(kc,{enabled:t,borderColor:"#ff8800",onClick:t?()=>i("payment"):()=>{},children:[(0,Jt.jsx)("div",{className:"icon",children:"\ud83d\udcb0"}),(0,Jt.jsx)("div",{className:"title",children:"PAYMENT"})]})]}),(0,Jt.jsx)(Cc,{children:(0,Jt.jsxs)(Ec,{children:[(0,Jt.jsxs)(jc,{children:[(0,Jt.jsx)(Pc,{children:"Account Status:"}),(0,Jt.jsx)(_c,{color:t?"#00ff00":"#ffff00",children:t?"Active":"Guest"})]}),(0,Jt.jsxs)(jc,{children:[(0,Jt.jsx)(Pc,{children:"Security Level:"}),(0,Jt.jsx)(_c,{color:"#00ff00",children:r||"Basic"})]}),(0,Jt.jsxs)(jc,{children:[(0,Jt.jsx)(Pc,{children:"Credit Balance:"}),(0,Jt.jsx)(_c,{color:"#ff0099",children:t?"100":"0"})]}),t&&(0,Jt.jsxs)(Jt.Fragment,{children:[(0,Jt.jsxs)(jc,{children:[(0,Jt.jsx)(Pc,{children:"Username:"}),(0,Jt.jsx)(_c,{color:"#00ffff",children:null===n||void 0===n?void 0:n.username})]}),(0,Jt.jsxs)(jc,{children:[(0,Jt.jsx)(Pc,{children:"Member Since:"}),(0,Jt.jsx)(_c,{color:"#00ffff",children:null!==n&&void 0!==n&&n.created_at?new Date(n.created_at).toLocaleDateString("de-DE"):"N/A"})]})]})]})})]})},Tc=Zi`
  0% {
    text-shadow: 
      0 0 15px #ffff00,
      0 0 30px #ffff00,
      0 0 45px #ffff00;
  }
  100% {
    text-shadow: 
      0 0 8px #ffff00,
      0 0 15px #ffff00,
      0 0 25px #ffff00;
  }
`,Rc=Zi`
  0% {
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00,
      0 0 30px #00ff00;
  }
  100% {
    text-shadow: 
      0 0 5px #00ff00,
      0 0 10px #00ff00,
      0 0 15px #00ff00;
  }
`,Nc=Zi`
  0% {
    box-shadow: 
      0 0 20px rgba(255, 255, 0, 0.5),
      0 0 40px rgba(255, 255, 0, 0.3);
    border-color: #ffff00;
  }
  100% {
    box-shadow: 
      0 0 30px rgba(255, 255, 0, 0.8),
      0 0 60px rgba(255, 255, 0, 0.4);
    border-color: #ffff00;
  }
`,Lc=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
  padding: 2rem;
`,$c=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,Oc=Qi.button`
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-shadow: 0 0 5px #00ffff, 0 0 8px #00ffff;
  
  &:hover {
    background: rgba(0, 255, 255, 0.1);
    text-shadow: 0 0 8px #00ffff, 0 0 15px #00ffff, 0 0 25px #00ffff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
    transform: scale(1.05);
  }
`,zc=Qi.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ffff00;
  text-align: center;
  letter-spacing: 0.2rem;
  animation: ${Tc} 2s infinite alternate;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,Mc=Qi.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Dc=Qi.div`
  background: rgba(0, 0, 0, 0.9);
  border: 4px solid #ffff00;
  border-radius: 15px;
  padding: 2rem;
  animation: ${Nc} 3s infinite alternate;
`,Ic=Qi.h2`
  color: #ffff00;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-shadow: 0 0 5px #ffff00, 0 0 10px #ffff00;
`,Uc=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(0, 20, 40, 0.5);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,Fc=Qi.div`
  color: #ffffff;
  font-weight: bold;
  
  small {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    font-weight: normal;
    margin-top: 0.3rem;
  }
`,Bc=Qi.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,Hc=Qi.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${e=>e.checked?"#00ff00":"#666"};
    transition: 0.4s;
    border-radius: 34px;
    box-shadow: ${e=>e.checked?"0 0 10px rgba(0, 255, 0, 0.5)":"0 0 5px rgba(102, 102, 102, 0.5)"};
    
    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: ${e=>e.checked?"30px":"4px"};
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`,Gc=Qi.select`
  background: rgba(0, 20, 40, 0.8);
  border: 2px solid #ffff00;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: #00ff88;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
  }
  
  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`,Wc=Qi.input`
  background: rgba(0, 20, 40, 0.8);
  border: 2px solid #ffff00;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: #00ff88;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
  }
`,Yc=Qi.button`
  background: transparent;
  border: 2px solid #00ff00;
  color: #00ff00;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-shadow: 0 0 5px #00ff00, 0 0 8px #00ff00;
  animation: ${Rc} 2s infinite alternate;
  align-self: center;
  margin-top: 2rem;
  
  &:hover {
    background: rgba(0, 255, 0, 0.1);
    text-shadow: 0 0 8px #00ff00, 0 0 15px #00ff00, 0 0 25px #00ff00;
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.6);
    transform: scale(1.05);
  }
`,qc=Qi.div`
  color: #00ff00;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px #00ff00;
`,Vc=()=>{const e=Fe(),[n,r]=(0,t.useState)({notifications:!0,soundEffects:!0,backgroundMusic:!1,theme:"neon",language:"en",difficulty:"normal",displayName:"Guest Player",autoSave:!0}),[i,o]=(0,t.useState)(!1),a=e=>{r(t=>({...t,[e]:!t[e]}))},s=(e,t)=>{r(n=>({...n,[e]:t}))};return(0,Jt.jsxs)(Lc,{children:[(0,Jt.jsxs)($c,{children:[(0,Jt.jsx)(Oc,{onClick:()=>{console.log("\ud83d\udc64 Navigating back to profile"),e("/profile")},children:"\u2190 PROFILE"}),(0,Jt.jsx)(zc,{children:"SETTINGS"}),(0,Jt.jsx)("div",{style:{width:"120px"}})," "]}),i&&(0,Jt.jsx)(qc,{children:"Settings saved successfully!"}),(0,Jt.jsxs)(Mc,{children:[(0,Jt.jsxs)(Dc,{children:[(0,Jt.jsx)(Ic,{children:"\ud83c\udfae Game Settings"}),(0,Jt.jsxs)(Uc,{children:[(0,Jt.jsxs)(Fc,{children:["Sound Effects",(0,Jt.jsx)("small",{children:"Enable game sound effects"})]}),(0,Jt.jsx)(Bc,{children:(0,Jt.jsxs)(Hc,{checked:n.soundEffects,children:[(0,Jt.jsx)("input",{type:"checkbox",checked:n.soundEffects,onChange:()=>a("soundEffects")}),(0,Jt.jsx)("span",{})]})})]}),(0,Jt.jsxs)(Uc,{children:[(0,Jt.jsxs)(Fc,{children:["Background Music",(0,Jt.jsx)("small",{children:"Enable background music"})]}),(0,Jt.jsx)(Bc,{children:(0,Jt.jsxs)(Hc,{checked:n.backgroundMusic,children:[(0,Jt.jsx)("input",{type:"checkbox",checked:n.backgroundMusic,onChange:()=>a("backgroundMusic")}),(0,Jt.jsx)("span",{})]})})]}),(0,Jt.jsxs)(Uc,{children:[(0,Jt.jsxs)(Fc,{children:["Difficulty Level",(0,Jt.jsx)("small",{children:"Game difficulty setting"})]}),(0,Jt.jsx)(Bc,{children:(0,Jt.jsxs)(Gc,{value:n.difficulty,onChange:e=>s("difficulty",e.target.value),children:[(0,Jt.jsx)("option",{value:"easy",children:"Easy"}),(0,Jt.jsx)("option",{value:"normal",children:"Normal"}),(0,Jt.jsx)("option",{value:"hard",children:"Hard"}),(0,Jt.jsx)("option",{value:"expert",children:"Expert"})]})})]}),(0,Jt.jsxs)(Uc,{children:[(0,Jt.jsxs)(Fc,{children:["Auto Save",(0,Jt.jsx)("small",{children:"Automatically save game progress"})]}),(0,Jt.jsx)(Bc,{children:(0,Jt.jsxs)(Hc,{checked:n.autoSave,children:[(0,Jt.jsx)("input",{type:"checkbox",checked:n.autoSave,onChange:()=>a("autoSave")}),(0,Jt.jsx)("span",{})]})})]})]}),(0,Jt.jsxs)(Dc,{children:[(0,Jt.jsx)(Ic,{children:"\ud83c\udfa8 Display Settings"}),(0,Jt.jsxs)(Uc,{children:[(0,Jt.jsxs)(Fc,{children:["Theme",(0,Jt.jsx)("small",{children:"Visual theme for the interface"})]}),(0,Jt.jsx)(Bc,{children:(0,Jt.jsxs)(Gc,{value:n.theme,onChange:e=>s("theme",e.target.value),children:[(0,Jt.jsx)("option",{value:"neon",children:"Neon (Default)"}),(0,Jt.jsx)("option",{value:"classic",children:"Classic Arcade"}),(0,Jt.jsx)("option",{value:"dark",children:"Dark Mode"}),(0,Jt.jsx)("option",{value:"retro",children:"Retro Green"})]})})]}),(0,Jt.jsxs)(Uc,{children:[(0,Jt.jsxs)(Fc,{children:["Language",(0,Jt.jsx)("small",{children:"Interface language"})]}),(0,Jt.jsx)(Bc,{children:(0,Jt.jsxs)(Gc,{value:n.language,onChange:e=>s("language",e.target.value),children:[(0,Jt.jsx)("option",{value:"en",children:"English"}),(0,Jt.jsx)("option",{value:"de",children:"Deutsch"}),(0,Jt.jsx)("option",{value:"fr",children:"Fran\xe7ais"}),(0,Jt.jsx)("option",{value:"es",children:"Espa\xf1ol"})]})})]})]}),(0,Jt.jsxs)(Dc,{children:[(0,Jt.jsx)(Ic,{children:"\ud83d\udc64 Account Settings"}),(0,Jt.jsxs)(Uc,{children:[(0,Jt.jsxs)(Fc,{children:["Display Name",(0,Jt.jsx)("small",{children:"Your public display name"})]}),(0,Jt.jsx)(Bc,{children:(0,Jt.jsx)(Wc,{type:"text",value:n.displayName,onChange:e=>((e,t)=>{r(n=>({...n,[e]:t}))})("displayName",e.target.value),placeholder:"Enter display name"})})]}),(0,Jt.jsxs)(Uc,{children:[(0,Jt.jsxs)(Fc,{children:["Notifications",(0,Jt.jsx)("small",{children:"Receive game notifications"})]}),(0,Jt.jsx)(Bc,{children:(0,Jt.jsxs)(Hc,{checked:n.notifications,children:[(0,Jt.jsx)("input",{type:"checkbox",checked:n.notifications,onChange:()=>a("notifications")}),(0,Jt.jsx)("span",{})]})})]})]}),(0,Jt.jsx)(Yc,{onClick:()=>{console.log("\ud83d\udcbe Saving settings:",n),o(!0),setTimeout(()=>o(!1),3e3)},children:"\ud83d\udcbe SAVE SETTINGS"})]})]})},Kc=Zi`
  0% {
    text-shadow: 
      0 0 15px #ff00ff,
      0 0 30px #ff00ff,
      0 0 45px #ff00ff,
      0 0 60px #ff00ff;
  }
  100% {
    text-shadow: 
      0 0 8px #ff00ff,
      0 0 15px #ff00ff,
      0 0 25px #ff00ff,
      0 0 35px #ff00ff;
  }
`,Qc=Zi`
  0% {
    text-shadow: 
      0 0 10px #00ff00,
      0 0 20px #00ff00,
      0 0 30px #00ff00;
  }
  100% {
    text-shadow: 
      0 0 5px #00ff00,
      0 0 10px #00ff00,
      0 0 15px #00ff00;
  }
`,Xc=Zi`
  0% {
    box-shadow: 
      0 0 20px rgba(255, 0, 255, 0.5),
      0 0 40px rgba(255, 0, 255, 0.3);
    border-color: #ff00ff;
  }
  100% {
    box-shadow: 
      0 0 30px rgba(255, 0, 255, 0.8),
      0 0 60px rgba(255, 0, 255, 0.4);
    border-color: #ff00ff;
  }
`,Jc=Zi`
  0%, 100% {
    text-shadow: 
      0 0 8px #ff00ff,
      0 0 15px #ff00ff,
      0 0 25px #ff00ff;
  }
  50% {
    text-shadow: 
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 18px #ff00ff;
  }
`,Zc=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`,eu=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,tu=Qi.div`
  text-align: center;
  margin: 3rem 0;
`,nu=Qi.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #ff00ff;
  text-transform: uppercase;
  letter-spacing: 0.8rem;  // ← Gesperrt wie LOGIN Titel
  margin: 0;
  text-align: center;
  text-shadow: 
    0 0 15px #ff00ff,
    0 0 30px #ff00ff,
    0 0 45px #ff00ff,
    0 0 60px #ff00ff;
  animation: ${Kc} 2s infinite alternate;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: 0.5rem;
  }
`,ru=Qi.button`
  background: transparent;
  border: 2px solid #ff00ff;  // ← REGISTER Titel-Farbe
  color: #ff00ff;             // ← REGISTER Titel-Farbe
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  /* Neon-Effekt in REGISTER-Farbe */
  text-shadow: 
    0 0 8px #ff00ff,
    0 0 15px #ff00ff;
  box-shadow: 
    0 0 10px rgba(255, 0, 255, 0.5),
    inset 0 0 10px rgba(255, 0, 255, 0.1);
  
  /* Animation in REGISTER-Farbe */
  animation: ${Kc} 8s ease-in-out infinite;
  
  /* Zusätzlicher Glow-Effekt */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff00ff, #aa00aa, #ff00ff);
    border-radius: 8px;
    z-index: -1;
    opacity: 0.3;
    animation: ${Jc} 4s linear infinite;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #aa00aa;
    color: #aa00aa;
    text-shadow: 
      0 0 8px #aa00aa,
      0 0 15px #aa00aa,
      0 0 25px #aa00aa;
    box-shadow: 
      0 0 20px rgba(170, 0, 170, 0.8),
      inset 0 0 20px rgba(170, 0, 170, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,iu=Qi.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,ou=Qi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,au=Qi.div`
  background: rgba(0, 0, 0, 0.9);
  border: 4px solid #ff00ff;
  border-radius: 15px;
  padding: 3rem;
  width: 100%;
  max-width: 500px;
  animation: ${Xc} 3s infinite alternate;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
    padding: 2rem;
  }
`,su=Qi.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,lu=Qi.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,cu=Qi.label`
  color: #ff00ff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  text-shadow: 0 0 5px #ff00ff;
  letter-spacing: 0.1rem;
`,uu=Qi.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #ff00ff;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  box-sizing: border-box;
  text-shadow: 0 0 5px #ffffff;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #ffff00;
    box-shadow: 
      0 0 10px rgba(255, 255, 0, 0.5),
      inset 0 0 10px rgba(255, 255, 0, 0.1);
    text-shadow: 0 0 8px #ffffff;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,du=Qi.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background: rgba(0, 255, 0, 0.2);
  border: 2px solid #00ff00;
  border-radius: 8px;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px #00ff00;
  box-shadow: 0 0 8px rgba(0, 255, 0, 0.3);
  animation: ${Qc} 2s infinite alternate;
  
  &:hover:not(:disabled) {
    background: rgba(0, 255, 0, 0.3);
    box-shadow: 
      0 0 15px rgba(0, 255, 0, 0.6),
      inset 0 0 15px rgba(0, 255, 0, 0.2);
    text-shadow: 0 0 8px #00ff00;
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    animation: none;
  }
`,fu=Qi.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #ffffff;
  
  a {
    color: #ff00ff;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    text-shadow: 0 0 5px #ff00ff;
    
    &:hover {
      text-shadow: 0 0 8px #ff00ff, 0 0 15px #ff00ff;
    }
  }
`,pu=Qi.div`
  color: #ff0000;
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff0000;
  border-radius: 8px;
  padding: 0.8rem;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px #ff0000;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
`,hu=Qi.div`
  color: #00ff00;
  background: rgba(0, 255, 0, 0.1);
  border: 2px solid #00ff00;
  border-radius: 8px;
  padding: 0.8rem;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px #00ff00;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
`,mu=()=>{const e=Fe(),[n,r]=(0,t.useState)({username:"",email:"",password:"",confirmPassword:""}),[i,o]=(0,t.useState)(""),[a,s]=(0,t.useState)(""),[l,c]=(0,t.useState)(!1),u=e=>{const{name:t,value:n}=e.target;r(e=>({...e,[t]:n})),i&&o(""),a&&s("")};return(0,Jt.jsxs)(Zc,{children:[(0,Jt.jsx)(eu,{children:(0,Jt.jsx)("div",{})}),(0,Jt.jsx)(tu,{children:(0,Jt.jsx)(nu,{children:"REGISTER"})}),(0,Jt.jsxs)(iu,{children:[(0,Jt.jsx)(ru,{onClick:()=>{console.log("Navigating to profile"),e("/profile")},children:"PROFILE"}),(0,Jt.jsx)(ru,{onClick:()=>{console.log("Navigating to games"),e("/games")},children:"GAMES"})]}),(0,Jt.jsx)(ou,{children:(0,Jt.jsxs)(au,{children:[i&&(0,Jt.jsx)(pu,{children:i}),a&&(0,Jt.jsx)(hu,{children:a}),(0,Jt.jsxs)(su,{onSubmit:async t=>{t.preventDefault(),c(!0),o(""),s("");const r=n.username&&n.email&&n.password&&n.confirmPassword?n.username.length<3?"Username must be at least 3 characters!":n.password.length<6?"Password must be at least 6 characters!":n.password!==n.confirmPassword?"Passwords do not match!":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)?null:"Please enter a valid email address!":"All fields are required!";if(r)return o(r),void c(!1);try{console.log("Registration attempt:",{username:n.username,email:n.email}),await new Promise(e=>setTimeout(e,1500)),s("Registration successful! Redirecting to profile..."),console.log("Registration successful"),setTimeout(()=>{e("/profile")},2e3)}catch(nh){console.error("Registration failed:",nh),o("Registration failed! Please try again.")}finally{c(!1)}},children:[(0,Jt.jsxs)(lu,{children:[(0,Jt.jsx)(cu,{htmlFor:"username",children:"Username"}),(0,Jt.jsx)(uu,{type:"text",id:"username",name:"username",placeholder:"Choose a cool username",value:n.username,onChange:u,disabled:l})]}),(0,Jt.jsxs)(lu,{children:[(0,Jt.jsx)(cu,{htmlFor:"email",children:"Email Address"}),(0,Jt.jsx)(uu,{type:"email",id:"email",name:"email",placeholder:"player@retro.game",value:n.email,onChange:u,disabled:l})]}),(0,Jt.jsxs)(lu,{children:[(0,Jt.jsx)(cu,{htmlFor:"password",children:"Password"}),(0,Jt.jsx)(uu,{type:"password",id:"password",name:"password",placeholder:"Create a strong password",value:n.password,onChange:u,disabled:l})]}),(0,Jt.jsxs)(lu,{children:[(0,Jt.jsx)(cu,{htmlFor:"confirmPassword",children:"Confirm Password"}),(0,Jt.jsx)(uu,{type:"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm your password",value:n.confirmPassword,onChange:u,disabled:l})]}),(0,Jt.jsx)(du,{type:"submit",disabled:l,children:l?"CREATING ACCOUNT...":"REGISTER"})]}),(0,Jt.jsxs)(fu,{children:["Already have an account?"," ",(0,Jt.jsx)("a",{onClick:()=>{console.log("Navigating to login"),e("/login")},children:"Login here"})]})]})})]})},gu=Zi`
  0% {
    text-shadow: 
      0 0 15px #00ff88,
      0 0 30px #00ff88,
      0 0 45px #00ff88;
  }
  100% {
    text-shadow: 
      0 0 8px #00ff88,
      0 0 15px #00ff88,
      0 0 25px #00ff88;
  }
`,bu=Zi`
  0% {
    text-shadow: 
      0 0 10px #ffd700,
      0 0 20px #ffd700,
      0 0 30px #ffd700;
  }
  100% {
    text-shadow: 
      0 0 5px #ffd700,
      0 0 10px #ffd700,
      0 0 15px #ffd700;
  }
`,yu=Zi`
  0% {
    box-shadow: 
      0 0 20px rgba(0, 255, 136, 0.5),
      0 0 40px rgba(0, 255, 136, 0.3);
    border-color: #00ff88;
  }
  100% {
    box-shadow: 
      0 0 30px rgba(0, 255, 136, 0.8),
      0 0 60px rgba(0, 255, 136, 0.4);
    border-color: #00ff88;
  }
`,xu=Zi`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`,vu=Qi.div`
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  min-height: 100vh;
  margin: 0;
  padding: 2rem;
`,wu=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,Su=Qi.button`
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-shadow: 0 0 5px #00ffff, 0 0 8px #00ffff;
  
  &:hover {
    background: rgba(0, 255, 255, 0.1);
    text-shadow: 0 0 8px #00ffff, 0 0 15px #00ffff, 0 0 25px #00ffff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
    transform: scale(1.05);
  }
`,ku=Qi.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #00ff88;
  text-align: center;
  letter-spacing: 0.2rem;
  animation: ${gu} 2s infinite alternate;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,Eu=Qi.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Cu=Qi.div`
  background: rgba(0, 0, 0, 0.9);
  border: 4px solid #00ff88;
  border-radius: 15px;
  padding: 2rem;
  animation: ${yu} 3s infinite alternate;
`,ju=Qi.h2`
  color: #00ff88;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-shadow: 0 0 5px #00ff88, 0 0 10px #00ff88;
`,Pu=Qi.div`
  background: ${e=>e.featured?"linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1))":"rgba(0, 20, 40, 0.5)"};
  border: 2px solid ${e=>e.featured?"#ffd700":"#00ff88"};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px ${e=>e.featured?"rgba(255, 215, 0, 0.5)":"rgba(0, 255, 136, 0.5)"};
  }
  
  ${e=>e.featured&&'\n    &:before {\n      content: "\u2b50 BEST VALUE";\n      position: absolute;\n      top: -10px;\n      right: 10px;\n      background: #ffd700;\n      color: #000;\n      padding: 0.3rem 0.8rem;\n      border-radius: 15px;\n      font-size: 0.8rem;\n      font-weight: bold;\n    }\n  '}
`,_u=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Au=Qi.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${e=>e.featured?"#ffd700":"#00ff88"};
  animation: ${e=>e.featured?bu:"none"} 2s infinite alternate;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: "🪙";
    font-size: 1.5rem;
    animation: ${xu} 3s linear infinite;
  }
`,Tu=Qi.div`
  font-size: 1.5rem;
  color: ${e=>e.featured?"#ffd700":"#ffffff"};
  font-weight: bold;
`,Ru=Qi.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0;
  font-size: 0.9rem;
`,Nu=Qi.button`
  width: 100%;
  background: transparent;
  border: 2px solid ${e=>e.featured?"#ffd700":"#00ff88"};
  color: ${e=>e.featured?"#ffd700":"#00ff88"};
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  margin-top: 1rem;
  
  &:hover {
    background: ${e=>e.featured?"rgba(255, 215, 0, 0.1)":"rgba(0, 255, 136, 0.1)"};
    transform: scale(1.05);
    box-shadow: 0 0 15px ${e=>e.featured?"rgba(255, 215, 0, 0.6)":"rgba(0, 255, 136, 0.6)"};
  }
`,Lu=Qi.div`
  background: rgba(0, 30, 60, 0.8);
  border: 2px solid #00ffff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`,$u=Qi.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #00ffff;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:before {
    content: "🪙";
    font-size: 2rem;
    animation: ${xu} 3s linear infinite;
  }
`,Ou=Qi.div`
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 8px;
  padding: 1rem;
`,zu=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`,Mu=Qi.span`
  color: ${e=>"purchase"===e.type?"#00ff88":"#ff8888"};
  font-weight: bold;
`,Du=Qi.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,Iu=Qi.div`
  background: rgba(0, 20, 40, 0.8);
  border: 2px solid #00ff88;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ffff;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    transform: scale(1.05);
  }
`,Uu=()=>{const e=Fe(),[n]=(0,t.useState)(1250),[r]=(0,t.useState)([{id:1,type:"purchase",amount:500,description:"Credits Purchase",date:"2025-08-10"},{id:2,type:"spent",amount:-50,description:"Snake Game Premium",date:"2025-08-09"},{id:3,type:"purchase",amount:1e3,description:"Mega Pack",date:"2025-08-08"},{id:4,type:"spent",amount:-200,description:"Multiplayer Tournament",date:"2025-08-07"}]);return(0,Jt.jsxs)(vu,{children:[(0,Jt.jsxs)(wu,{children:[(0,Jt.jsx)(Su,{onClick:()=>{console.log("\ud83d\udc64 Navigating back to profile"),e("/profile")},children:"\u2190 PROFILE"}),(0,Jt.jsx)(ku,{children:"PAYMENT"}),(0,Jt.jsx)("div",{style:{width:"120px"}})]}),(0,Jt.jsxs)(Eu,{children:[(0,Jt.jsxs)(Cu,{children:[(0,Jt.jsx)(ju,{children:"\ud83d\udcb0 Buy Credits"}),(0,Jt.jsxs)(Lu,{children:[(0,Jt.jsx)("div",{style:{color:"#00ffff",fontWeight:"bold",marginBottom:"0.5rem"},children:"CURRENT BALANCE"}),(0,Jt.jsx)($u,{children:n}),(0,Jt.jsx)("div",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem"},children:"Available Credits"})]}),[{id:1,credits:100,price:"$1.99",description:"Perfect for casual gaming",featured:!1},{id:2,credits:500,price:"$7.99",description:"Great value for regular players",featured:!1},{id:3,credits:1e3,price:"$12.99",description:"Best value! Save 35%",featured:!0},{id:4,credits:2500,price:"$24.99",description:"Ultimate gaming package",featured:!1}].map(e=>(0,Jt.jsxs)(Pu,{featured:e.featured,children:[(0,Jt.jsxs)(_u,{children:[(0,Jt.jsx)(Au,{featured:e.featured,children:e.credits}),(0,Jt.jsx)(Tu,{featured:e.featured,children:e.price})]}),(0,Jt.jsx)(Ru,{children:e.description}),(0,Jt.jsx)(Nu,{featured:e.featured,onClick:()=>{return e.id,t=e.credits,n=e.price,console.log(`\ud83d\udcb3 Purchasing ${t} credits for ${n}`),void alert(`Purchase initiated: ${t} credits for ${n}`);var t,n},children:"Buy Now"})]},e.id)),(0,Jt.jsx)(ju,{style:{marginTop:"2rem"},children:"\ud83d\udcb3 Payment Methods"}),(0,Jt.jsxs)(Du,{children:[(0,Jt.jsxs)(Iu,{children:[(0,Jt.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:"\ud83d\udcb3"}),(0,Jt.jsx)("div",{style:{fontSize:"0.8rem"},children:"Credit Card"})]}),(0,Jt.jsxs)(Iu,{children:[(0,Jt.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:"\ud83c\udfe6"}),(0,Jt.jsx)("div",{style:{fontSize:"0.8rem"},children:"PayPal"})]}),(0,Jt.jsxs)(Iu,{children:[(0,Jt.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:"\u20bf"}),(0,Jt.jsx)("div",{style:{fontSize:"0.8rem"},children:"Crypto"})]}),(0,Jt.jsxs)(Iu,{children:[(0,Jt.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:"\ud83d\udcf1"}),(0,Jt.jsx)("div",{style:{fontSize:"0.8rem"},children:"Mobile"})]})]})]}),(0,Jt.jsxs)(Cu,{children:[(0,Jt.jsx)(ju,{children:"\ud83d\udcca Transaction History"}),(0,Jt.jsx)(Ou,{children:r.map(e=>(0,Jt.jsxs)(zu,{children:[(0,Jt.jsxs)("div",{children:[(0,Jt.jsx)("div",{style:{fontWeight:"bold",marginBottom:"0.2rem"},children:e.description}),(0,Jt.jsx)("div",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.6)"},children:e.date})]}),(0,Jt.jsxs)(Mu,{type:e.type,children:[e.amount>0?"+":"",e.amount," \ud83e\ude99"]})]},e.id))}),(0,Jt.jsxs)("div",{style:{marginTop:"2rem",padding:"1rem",backgroundColor:"rgba(0,255,136,0.1)",borderRadius:"8px",border:"1px solid rgba(0,255,136,0.3)"},children:[(0,Jt.jsx)("h3",{style:{color:"#00ff88",margin:"0 0 1rem 0"},children:"\ud83d\udca1 What are Credits?"}),(0,Jt.jsxs)("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"rgba(255,255,255,0.8)"},children:[(0,Jt.jsx)("li",{children:"Unlock premium game features"}),(0,Jt.jsx)("li",{children:"Access exclusive tournaments"}),(0,Jt.jsx)("li",{children:"Customize your gaming experience"}),(0,Jt.jsx)("li",{children:"Boost your scores and achievements"}),(0,Jt.jsx)("li",{children:"Never expire - use them anytime!"})]})]})]})]})]})},Fu=[{id:"starter",name:"Starter",description:"Perfect for casual gaming",price:0,currency:"EUR",interval_type:"month",isActive:!0,features:["3 classic games included","Global leaderboards","10 games per day","Basic profile features","Community access"]},{id:"gamer",name:"Gamer",description:"For dedicated retro enthusiasts",price:9.99,currency:"EUR",interval_type:"month",isActive:!0,popular:!0,features:["Access to all retro games","Multiplayer gaming","Global leaderboards","Game history & stats","Cloud save synchronization","Profile & game customization","Tournament participation","Unlimited daily games","Ad-free gaming experience"]},{id:"pro",name:"Pro",description:"Ultimate retro gaming experience",price:19.99,currency:"EUR",interval_type:"month",isActive:!0,originalPrice:29.99,savings:10,bestValue:!0,features:["Access to all retro games","Multiplayer gaming","Global leaderboards","Game history & stats","Priority customer support","Exclusive retro titles","Early access to new games","Cloud save synchronization","Profile & game customization","Tournament participation","Unlimited daily games","Ad-free gaming experience"]}],Bu=e=>{let{plan:n,user:r,onSuccess:i,onCancel:o}=e;const[a,s]=(0,t.useState)("card"),[l,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(""),[f,p]=(0,t.useState)(""),[h,m]=(0,t.useState)(""),[g,b]=(0,t.useState)(!1),y=e=>{let t=e.target.value.replace(/\s/g,"");t=t.replace(/(.{4})/g,"$1 ").trim(),t.length<=19&&(d(t),w(t,f,h))},x=e=>{let t=e.target.value.replace(/\D/g,"");t.length>=2&&(t=t.substring(0,2)+"/"+t.substring(2,4)),t.length<=5&&(p(t),w(u,t,h))},v=e=>{const t=e.target.value.replace(/\D/g,"");t.length<=3&&(m(t),w(u,f,t))},w=(e,t,n)=>{const r=e.replace(/\s/g,"").length>=16&&5===t.length&&n.length>=3;b(r)},S=()=>{switch(a){case"card":return g;case"paypal":case"crypto":return!0;default:return!1}};return(0,Jt.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.95)",padding:"2rem",borderRadius:"15px",border:"3px solid #00ffff",maxWidth:"600px",maxHeight:"90vh",overflowY:"auto",margin:"0 auto",backdropFilter:"blur(10px)",boxShadow:"0 0 30px rgba(0, 255, 255, 0.5)",fontFamily:"Courier New, monospace",color:"white"},children:[(0,Jt.jsxs)("div",{style:{background:"linear-gradient(90deg, #00ff88, #00ccff)",color:"#1a1a2e",padding:"1rem",borderRadius:"8px",marginBottom:"2rem",textAlign:"center",fontWeight:"bold"},children:[(0,Jt.jsx)("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.2rem"},children:"\ud83c\udfad Demo Mode Active"}),(0,Jt.jsx)("p",{style:{margin:"0",fontSize:"0.9rem",opacity:.9},children:"This is a fully functional demo - no real payments will be processed!"})]}),(0,Jt.jsxs)("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[(0,Jt.jsxs)("h2",{style:{color:"#00ff88",marginBottom:"0.5rem",fontSize:"1.8rem"},children:["Subscribe to ",n.name]}),(0,Jt.jsxs)("div",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#00ccff",marginBottom:"0.5rem"},children:["\u20ac",n.price.toFixed(2),n.originalPrice&&(0,Jt.jsxs)("span",{style:{fontSize:"1rem",textDecoration:"line-through",color:"#666",marginLeft:"0.5rem"},children:["\u20ac",n.originalPrice.toFixed(2)]})]}),(0,Jt.jsx)("div",{style:{color:"#aaa",fontSize:"1rem"},children:n.description}),n.savings&&(0,Jt.jsxs)("div",{style:{color:"#00ff88",fontWeight:"bold",marginTop:"0.5rem"},children:["Save \u20ac",n.savings.toFixed(2),"!"]})]}),(0,Jt.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,Jt.jsx)("h3",{style:{color:"#00ff88",marginBottom:"1rem",fontSize:"1.1rem"},children:"Choose Payment Method"}),(0,Jt.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",marginBottom:"1.5rem"},children:[{id:"card",name:"Credit Card",icon:"\ud83d\udcb3"},{id:"paypal",name:"PayPal",icon:"\ud83d\uded2"},{id:"crypto",name:"Crypto",icon:"\u20bf"}].map(e=>(0,Jt.jsxs)("div",{style:{border:"2px solid "+(a===e.id?"#00ccff":"#444"),borderRadius:"8px",padding:"1rem",textAlign:"center",cursor:"pointer",transition:"all 0.2s",background:a===e.id?"rgba(0, 204, 255, 0.1)":"rgba(0, 0, 0, 0.3)"},onClick:()=>s(e.id),onMouseOver:t=>{a!==e.id&&(t.currentTarget.style.borderColor="#00ccff")},onMouseOut:t=>{a!==e.id&&(t.currentTarget.style.borderColor="#444")},children:[(0,Jt.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:e.icon}),(0,Jt.jsx)("div",{style:{fontSize:"0.9rem",fontWeight:600},children:e.name})]},e.id))})]}),(()=>{switch(a){case"card":return(0,Jt.jsxs)("div",{style:{marginBottom:"1.5rem"},children:[(0,Jt.jsxs)("div",{style:{border:"2px solid "+(g?"#00ff88":"#444"),borderRadius:"8px",padding:"1rem",background:g?"rgba(0, 255, 136, 0.1)":"rgba(0, 0, 0, 0.3)",transition:"all 0.3s ease"},children:[(0,Jt.jsx)("input",{type:"text",placeholder:"Card number",value:u,onChange:y,style:{width:"100%",background:"transparent",border:"none",fontSize:"1.1rem",color:"white",marginBottom:"0.5rem",outline:"none"}}),(0,Jt.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,Jt.jsx)("input",{type:"text",placeholder:"MM/YY",value:f,onChange:x,style:{flex:1,background:"transparent",border:"none",color:"white",outline:"none"}}),(0,Jt.jsx)("input",{type:"text",placeholder:"CVC",value:h,onChange:v,style:{flex:1,background:"transparent",border:"none",color:"white",outline:"none"}})]})]}),(0,Jt.jsxs)("div",{style:{background:"rgba(0, 255, 136, 0.1)",border:"1px solid rgba(0, 255, 136, 0.3)",borderRadius:"8px",padding:"1rem",marginTop:"1rem",fontSize:"0.9rem"},children:[(0,Jt.jsx)("h4",{style:{color:"#00ff88",margin:"0 0 0.5rem 0"},children:"\ud83d\udcb3 Demo Test Cards:"}),(0,Jt.jsxs)("div",{style:{color:"rgba(255, 255, 255, 0.8)"},children:[(0,Jt.jsxs)("div",{children:[(0,Jt.jsx)("strong",{children:"Success:"})," 4242 4242 4242 4242"]}),(0,Jt.jsxs)("div",{children:[(0,Jt.jsx)("strong",{children:"Decline:"})," 4000 0000 0000 0002"]}),(0,Jt.jsx)("div",{children:(0,Jt.jsx)("strong",{children:"Any expiry date and CVC"})})]})]})]});case"paypal":return(0,Jt.jsxs)("div",{style:{border:"2px solid #ffc439",borderRadius:"8px",padding:"2rem",background:"rgba(255, 196, 57, 0.1)",textAlign:"center",margin:"1.5rem 0"},children:[(0,Jt.jsx)("div",{style:{fontSize:"2rem",color:"#0070ba",marginBottom:"1rem"},children:"PayPal"}),(0,Jt.jsx)("p",{style:{color:"#ddd",marginBottom:"0.5rem"},children:"You will be redirected to PayPal to complete your payment securely."}),(0,Jt.jsx)("p",{style:{fontSize:"0.8rem",color:"#aaa"},children:"\ud83c\udfad Demo: PayPal integration simulation"})]});case"crypto":return(0,Jt.jsxs)("div",{style:{border:"2px solid #f7931a",borderRadius:"8px",padding:"2rem",background:"rgba(247, 147, 26, 0.1)",textAlign:"center",margin:"1.5rem 0"},children:[(0,Jt.jsx)("div",{style:{fontSize:"2rem",color:"#f7931a",marginBottom:"1rem"},children:"\u20bf"}),(0,Jt.jsx)("p",{style:{fontWeight:"bold",marginBottom:"1rem",color:"white"},children:"Bitcoin Payment Address:"}),(0,Jt.jsx)("div",{style:{background:"rgba(0, 0, 0, 0.5)",padding:"0.5rem",borderRadius:"4px",fontFamily:"monospace",fontSize:"0.8rem",margin:"0.5rem 0",wordBreak:"break-all",color:"#f7931a"},children:"bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"}),(0,Jt.jsxs)("p",{style:{fontSize:"0.9rem",color:"#ddd"},children:["Amount: ",(0,Jt.jsxs)("strong",{children:[n.price," EUR"]})," \u2248 0.0023 BTC"]}),(0,Jt.jsx)("p",{style:{fontSize:"0.8rem",color:"#aaa",marginTop:"0.5rem"},children:"\ud83c\udfad Demo: Crypto payment simulation"})]});default:return null}})(),(0,Jt.jsx)("button",{onClick:async()=>{c(!0),await new Promise(e=>setTimeout(e,2e3)),c(!1),null===i||void 0===i||i({success:!0,method:a,plan:n.name,amount:n.price})},disabled:l||!S(),style:{width:"100%",padding:"1rem",background:l||!S()?"#666":"linear-gradient(90deg, #00ff88, #00cc66)",color:l||!S()?"#aaa":"#000",border:"none",borderRadius:"8px",fontSize:"1.1rem",fontWeight:"bold",cursor:l||!S()?"not-allowed":"pointer",transition:"all 0.3s ease",marginBottom:"1rem"},children:l?"Processing...":`Pay \u20ac${n.price.toFixed(2)} via ${a.toUpperCase()}`}),(0,Jt.jsx)("button",{onClick:o,style:{width:"100%",padding:"0.75rem",background:"transparent",border:"2px solid #666",color:"#ddd",borderRadius:"8px",cursor:"pointer",transition:"all 0.3s ease"},onMouseOver:e=>{e.currentTarget.style.borderColor="#00ccff",e.currentTarget.style.color="#00ccff"},onMouseOut:e=>{e.currentTarget.style.borderColor="#666",e.currentTarget.style.color="#ddd"},children:"Cancel"})]})},Hu=e=>{let{user:n,onSubscriptionSuccess:r}=e;const i=e=>{"/profile"===e||e.includes("profile")?window.history.back():console.log("Navigating to:",e)},[o]=(0,t.useState)(Fu),[a,s]=(0,t.useState)(null),[l]=(0,t.useState)(!0),c=n||{id:"1",name:"Retro Gamer",email:"gamer@retro.com"},u=e=>{if(0===e.price)return console.log("\ud83c\udd93 Free plan selected"),void(r?r(e):alert("\ud83c\udfae Welcome to Retro Gaming! Free plan activated!"));s(e)};return(0,Jt.jsxs)("div",{style:{fontFamily:"Courier New, monospace",background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",color:"#ffffff",minHeight:"100vh",padding:"2rem"},children:[(0,Jt.jsx)("style",{children:"\n        @keyframes neonPulse {\n          0% { text-shadow: 0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor; }\n          100% { text-shadow: 0 0 8px currentColor, 0 0 15px currentColor, 0 0 25px currentColor; }\n        }\n        @keyframes coinSpin {\n          0% { transform: rotateY(0deg); }\n          100% { transform: rotateY(360deg); }\n        }\n        @keyframes boxGlow {\n          0% { box-shadow: 0 0 20px var(--glow-color), 0 0 40px var(--glow-color); }\n          100% { box-shadow: 0 0 30px var(--glow-color), 0 0 60px var(--glow-color); }\n        }\n        .neon-text { animation: neonPulse 2s infinite alternate; }\n        .coin-spin { animation: coinSpin 3s linear infinite; }\n        .glow-box { animation: boxGlow 3s infinite alternate; }\n      "}),(0,Jt.jsxs)("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[(0,Jt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"3rem"},children:[(0,Jt.jsx)("button",{onClick:()=>{console.log("\ud83d\udc64 Navigating back to profile"),i("/profile")},style:{background:"transparent",border:"2px solid #00ffff",color:"#00ffff",padding:"0.7rem 1.5rem",borderRadius:"8px",fontSize:"1rem",fontWeight:"bold",cursor:"pointer",textTransform:"uppercase",textShadow:"0 0 5px #00ffff",transition:"all 0.3s ease"},onMouseOver:e=>{e.currentTarget.style.background="rgba(0, 255, 255, 0.1)",e.currentTarget.style.transform="scale(1.05)",e.currentTarget.style.boxShadow="0 0 15px rgba(0, 255, 255, 0.6)"},onMouseOut:e=>{e.currentTarget.style.background="transparent",e.currentTarget.style.transform="scale(1)",e.currentTarget.style.boxShadow="none"},children:"\u2190 PROFILE"}),(0,Jt.jsxs)("div",{style:{textAlign:"center"},children:[(0,Jt.jsx)("h1",{className:"neon-text",style:{fontSize:"4rem",fontWeight:"bold",color:"#00ff88",margin:"0",letterSpacing:"0.3rem",textTransform:"uppercase"},children:"PAYMENT"}),(0,Jt.jsx)("p",{style:{color:"#a0a0a0",fontSize:"1.2rem",maxWidth:"600px",margin:"1rem auto 0"},children:"Choose your subscription plan and unlock the ultimate retro gaming experience"})]}),(0,Jt.jsx)("div",{style:{width:"120px"}})]}),l&&(0,Jt.jsxs)("div",{style:{background:"linear-gradient(90deg, #00ff88, #00ccff)",color:"#1a1a2e",padding:"1rem 2rem",borderRadius:"10px",marginBottom:"2rem",textAlign:"center",fontWeight:"bold",boxShadow:"0 0 20px rgba(0, 255, 136, 0.3)"},children:[(0,Jt.jsx)("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"1.2rem"},children:"\ud83c\udfad DEVELOPMENT MODE"}),(0,Jt.jsx)("p",{style:{margin:"0",opacity:.8},children:"Payment system in development mode - demo transactions only"})]}),(0,Jt.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"2rem",marginTop:"3rem"},children:o.map(e=>{const t=(e=>{switch(e){case"starter":default:return{border:"#00ff88",glow:"rgba(0, 255, 136, 0.5)",button:"linear-gradient(90deg, #00ff88, #00cc66)",text:"#00ff88"};case"gamer":return{border:"#00ccff",glow:"rgba(0, 204, 255, 0.5)",button:"linear-gradient(90deg, #00ccff, #0099cc)",text:"#00ccff"};case"pro":return{border:"#ffd700",glow:"rgba(255, 215, 0, 0.5)",button:"linear-gradient(90deg, #ffd700, #ffaa00)",text:"#ffd700"}}})(e.id);return(0,Jt.jsxs)("div",{className:"glow-box",style:{"--glow-color":t.glow,background:"rgba(0, 0, 0, 0.9)",border:`4px solid ${t.border}`,borderRadius:"15px",padding:"2rem",cursor:"pointer",transition:"all 0.3s ease",position:"relative",backdropFilter:"blur(10px)",transform:e.popular?"scale(1.05)":"scale(1)"},onClick:()=>u(e),onMouseOver:t=>{t.currentTarget.style.transform=e.popular?"scale(1.1)":"scale(1.05)"},onMouseOut:t=>{t.currentTarget.style.transform=e.popular?"scale(1.05)":"scale(1)"},children:[(e.popular||e.bestValue)&&(0,Jt.jsx)("div",{style:{position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",background:"linear-gradient(90deg, #ffaa00, #ff6600)",color:"white",padding:"0.5rem 1.5rem",borderRadius:"25px",fontSize:"0.8rem",fontWeight:"bold",textTransform:"uppercase",boxShadow:"0 0 15px rgba(255, 170, 0, 0.5)"},children:e.bestValue?"Best Value":"Most Popular"}),(0,Jt.jsxs)("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[(0,Jt.jsx)("h3",{className:"neon-text",style:{fontSize:"2rem",color:t.text,marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"2px",fontWeight:"bold"},children:e.name}),(0,Jt.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,Jt.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginBottom:"0.5rem"},children:[(0,Jt.jsx)("span",{className:"coin-spin",style:{fontSize:"3rem",filter:`drop-shadow(0 0 10px ${t.border})`},children:"\ud83e\ude99"}),(0,Jt.jsxs)("span",{style:{fontSize:"3.5rem",fontWeight:"bold",background:`linear-gradient(90deg, ${t.text}, ${t.border})`,backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:["\u20ac",e.price.toFixed(2)]}),(0,Jt.jsxs)("span",{style:{fontSize:"1.2rem",color:"#888"},children:["/",e.interval_type]})]}),e.originalPrice&&(0,Jt.jsxs)("div",{style:{fontSize:"1.2rem",textDecoration:"line-through",color:"#666"},children:["\u20ac",e.originalPrice.toFixed(2)]})]}),(0,Jt.jsx)("div",{style:{color:"#a0a0a0",fontSize:"1rem",marginBottom:"1rem"},children:e.description}),e.savings&&(0,Jt.jsxs)("div",{style:{color:"#00ff88",fontWeight:"bold",fontSize:"1.1rem",textShadow:"0 0 10px rgba(0, 255, 136, 0.5)"},children:["Save \u20ac",e.savings.toFixed(2),"!"]})]}),(0,Jt.jsx)("ul",{style:{listStyle:"none",padding:0,margin:"2rem 0"},children:e.features.map((e,n)=>(0,Jt.jsxs)("li",{style:{padding:"0.75rem 0",color:"#ddd",display:"flex",alignItems:"center",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",fontSize:"0.95rem"},children:[(0,Jt.jsx)("span",{style:{color:t.text,fontWeight:"bold",marginRight:"1rem",fontSize:"1.2rem",textShadow:`0 0 10px ${t.glow}`},children:"\u2713"}),e]},n))}),(0,Jt.jsx)("button",{style:{width:"100%",padding:"1.2rem",background:t.button,color:"pro"===e.id?"#1a1a2e":"white",border:"none",borderRadius:"10px",fontSize:"1.1rem",fontWeight:"bold",cursor:"pointer",textTransform:"uppercase",letterSpacing:"1px",transition:"all 0.3s ease"},onClick:t=>{t.stopPropagation(),u(e)},onMouseOver:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow=`0 10px 25px ${t.glow}`},onMouseOut:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="none"},children:0===e.price?"Get Started Free":`Choose ${e.name}`})]},e.id)})}),a&&(0,Jt.jsx)("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:"1rem"},children:(0,Jt.jsx)(Bu,{plan:a,user:c,onSuccess:e=>{console.log("\ud83c\udf89 Payment successful!",e),s(null),r&&a?r(a):alert("\ud83c\udfae Welcome to Retro Gaming! Your subscription is now active!")},onCancel:()=>{s(null)}})})]})]})},Gu={free:{id:"free",name:"Free",description:"Basic gaming experience with ads",monthlyPrice:0,yearlyPrice:0,features:{maxSimultaneousGames:1,arcadeGamesIncluded:!1,premiumArcadeGames:!1,exclusiveGames:!1,maxGameRooms:2,privateRooms:!1,customRoomSettings:!1,tournamentAccess:!1,friendsList:!1,chatFeatures:!1,leaderboards:!0,achievements:!1,saveSlots:1,cloudSync:!1,offlineMode:!1,prioritySupport:!1,customThemes:!1,adFree:!1,earlyAccess:!1,betaFeatures:!1}},basic:{id:"basic",name:"Basic",description:"Ad-free gaming with arcade access",monthlyPrice:4.99,yearlyPrice:49.99,popular:!0,features:{maxSimultaneousGames:3,arcadeGamesIncluded:!0,premiumArcadeGames:!1,exclusiveGames:!1,maxGameRooms:10,privateRooms:!0,customRoomSettings:!1,tournamentAccess:!0,friendsList:!0,chatFeatures:!0,leaderboards:!0,achievements:!0,saveSlots:5,cloudSync:!0,offlineMode:!0,prioritySupport:!1,customThemes:!1,adFree:!0,earlyAccess:!1,betaFeatures:!1}},premium:{id:"premium",name:"Premium",description:"Full gaming experience with premium content",monthlyPrice:9.99,yearlyPrice:99.99,bestValue:!0,features:{maxSimultaneousGames:10,arcadeGamesIncluded:!0,premiumArcadeGames:!0,exclusiveGames:!0,maxGameRooms:50,privateRooms:!0,customRoomSettings:!0,tournamentAccess:!0,friendsList:!0,chatFeatures:!0,leaderboards:!0,achievements:!0,saveSlots:20,cloudSync:!0,offlineMode:!0,prioritySupport:!0,customThemes:!0,adFree:!0,earlyAccess:!0,betaFeatures:!1}},ultimate:{id:"ultimate",name:"Ultimate",description:"Unlimited access with beta features",monthlyPrice:19.99,yearlyPrice:199.99,features:{maxSimultaneousGames:999,arcadeGamesIncluded:!0,premiumArcadeGames:!0,exclusiveGames:!0,maxGameRooms:999,privateRooms:!0,customRoomSettings:!0,tournamentAccess:!0,friendsList:!0,chatFeatures:!0,leaderboards:!0,achievements:!0,saveSlots:999,cloudSync:!0,offlineMode:!0,prioritySupport:!0,customThemes:!0,adFree:!0,earlyAccess:!0,betaFeatures:!0}}};const Wu=class{constructor(e){if(this.userId=void 0,this.baseURL=void 0,this.apiPath=void 0,this.isDemoMode=void 0,this.eventListeners=new Map,this.cache=new Map,this.cacheTimeout=3e5,this.currentTier="free",!e)throw new Error("PaymentManager requires a valid userId");this.userId=e,this.baseURL="https://ingeneur001.github.io/legal-retro-gaming-service",this.apiPath="/api/payment",this.isDemoMode=!0,console.log(`[PaymentManager] Created instance for user: ${e}`)}async getCurrentTier(){const e=`tier_${this.userId}`,t=this.getFromCache(e);if(t)return t;try{var n;const t=await this.getUserBilling();if(t.success&&null!==(n=t.data)&&void 0!==n&&n.paymentTier){const n=t.data.paymentTier;return this.setCache(e,n),this.currentTier=n,n}}catch(r){console.error("[PaymentManager] Failed to get current tier:",r)}return"free"}getTierConfig(e){return Gu[e]}getAllTiers(){return Object.values(Gu)}canAccessFeature(e,t){var n;return Boolean(null===(n=Gu[e])||void 0===n?void 0:n.features[t])}async upgradeTier(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"monthly";try{const n=await this.getCurrentTier(),r=this.getTierConfig(e),i="yearly"===t?r.yearlyPrice:r.monthlyPrice;if(n===e)return{success:!1,error:"Already subscribed to this tier"};const o=await this.processPayment(i,`${e}_${t}`,e);return o.success&&(this.currentTier=e,this.setCache(`tier_${this.userId}`,e),this.emit("tierUpgraded",{userId:this.userId,fromTier:n,toTier:e,billingCycle:t})),{success:o.success,data:o,error:o.error}}catch(n){return console.error("[PaymentManager] Failed to upgrade tier:",n),{success:!1,error:n instanceof Error?n.message:"Failed to upgrade tier"}}}async downgradeTier(e){try{const t=await fetch(`${this.baseURL}${this.apiPath}/tier/downgrade`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({userId:this.userId,targetTier:e})});if(!t.ok)throw new Error(`HTTP ${t.status}: ${t.statusText}`);const n=await t.json();return n.success&&(this.currentTier=e,this.setCache(`tier_${this.userId}`,e),this.emit("tierDowngraded",{userId:this.userId,toTier:e})),n}catch(t){return console.error("[PaymentManager] Failed to downgrade tier:",t),{success:!1,error:t instanceof Error?t.message:"Failed to downgrade tier"}}}getUpgradeRecommendation(e){const t={free:"basic",basic:"premium",premium:"ultimate",ultimate:null}[e];if(!t)return null;const n=Gu[e],r=Gu[t];return{from:e,to:t,monthlySavings:r.monthlyPrice-n.monthlyPrice,yearlySavings:r.yearlyPrice-n.yearlyPrice,newFeatures:this.getNewFeatures(e,t)}}getNewFeatures(e,t){const n=Gu[e].features,r=Gu[t].features,i=[];return Object.entries(r).forEach(e=>{let[t,r]=e;const o=n[t];"boolean"===typeof r&&r&&!o?i.push(t.replace(/([A-Z])/g," $1").toLowerCase()):"number"===typeof r&&r>o&&i.push(`Increased ${t.replace(/([A-Z])/g," $1").toLowerCase()}`)}),i}async loadProducts(){const e="payment_products",t=this.getFromCache(e);if(t)return t;try{const t=await fetch(`${this.baseURL}${this.apiPath}/products`,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}: ${t.statusText}`);const n=await t.json();let r=n.products||n.data||[];return r=r.map(e=>{const t=this.mapProductToTier(e.id);if(t){const n=Gu[t];return{...e,tier:t,tierConfig:n,popular:n.popular,bestValue:n.bestValue}}return e}),this.setCache(e,r),r}catch(n){return console.error("[PaymentManager] Failed to load products:",n),this.emit("paymentError",`Failed to load products: ${n}`),[]}}mapProductToTier(e){return e.includes("basic")?"basic":e.includes("premium")?"premium":e.includes("ultimate")?"ultimate":null}async processPayment(e,t,n){try{if(console.log(`[PaymentManager] Processing payment: ${e} ${t} for user ${this.userId}`),this.isDemoMode)return await this.processTestPayment(e,t,n);const r=await this.createPaymentIntent(e,t,n);if(!r.success||!r.clientSecret)throw new Error(r.error||"Failed to create payment intent");const i=await this.confirmPayment(r.paymentIntentId,t);return this.emit("paymentSuccess",i),i}catch(r){console.error("[PaymentManager] Payment processing failed:",r);const e=r instanceof Error?r.message:"Payment processing failed";return this.emit("paymentError",e),{success:!1,error:e}}}async createPaymentIntent(e,t,n){try{const r=await fetch(`${this.baseURL}/payment/create-intent`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({amount:e,planType:t,userId:this.userId,planId:n,currency:"eur"})});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);return await r.json()}catch(r){return console.error("[PaymentManager] Failed to create payment intent:",r),{success:!1,error:r instanceof Error?r.message:"Failed to create payment intent"}}}async confirmPayment(e,t){try{const n=await fetch(`${this.baseURL}/payment/confirm`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({paymentIntentId:e,planType:t,userId:this.userId})});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);return await n.json()}catch(n){return console.error("[PaymentManager] Failed to confirm payment:",n),{success:!1,error:n instanceof Error?n.message:"Failed to confirm payment"}}}async processTestPayment(e,t,n){try{return{success:!0,payment:{id:`demo_${Date.now()}`,amount:e,currency:"eur",status:"succeeded",planType:t,planId:n,paidAt:(new Date).toISOString()},subscription:{plan:t,status:"active",paidAt:(new Date).toISOString()},message:"Demo payment processed successfully",demoMode:!0}}catch(r){return console.error("[PaymentManager] Test payment failed:",r),{success:!1,error:r instanceof Error?r.message:"Test payment failed"}}}async getUserBilling(){try{const e=await fetch(`${this.baseURL}/payment/billing/${this.userId}`,{method:"GET",credentials:"include"});if(!e.ok)throw new Error(`HTTP ${e.status}: ${e.statusText}`);return{success:!0,data:await e.json()}}catch(e){return console.error("[PaymentManager] Failed to get billing info:",e),{success:!1,error:e instanceof Error?e.message:"Failed to get billing info"}}}async getPaymentHistory(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;try{const n=await fetch(`${this.baseURL}/payment/history/${this.userId}?page=${e}&limit=${t}`,{method:"GET",credentials:"include"});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);return{success:!0,data:await n.json()}}catch(n){return console.error("[PaymentManager] Failed to get payment history:",n),{success:!1,error:n instanceof Error?n.message:"Failed to get payment history"}}}on(e,t){this.eventListeners.has(e)||this.eventListeners.set(e,[]),this.eventListeners.get(e).push(t)}off(e,t){if(this.eventListeners.has(e)){const n=this.eventListeners.get(e),r=n.indexOf(t);r>-1&&n.splice(r,1)}}emit(e,t){this.eventListeners.has(e)&&this.eventListeners.get(e).forEach(n=>{try{n(t)}catch(r){console.error(`[PaymentManager] Error in event listener for ${e}:`,r)}})}setCache(e,t,n){const r=Date.now()+(n||this.cacheTimeout);this.cache.set(e,{data:t,expiry:r})}getFromCache(e){const t=this.cache.get(e);return t?Date.now()>t.expiry?(this.cache.delete(e),null):t.data:null}clearCache(){this.cache.clear()}async healthCheck(){try{return(await fetch(`${this.baseURL}/health`,{method:"GET",credentials:"include"})).ok}catch(e){return console.error("[PaymentManager] Health check failed:",e),!1}}getConfig(){return{baseURL:this.baseURL,apiPath:this.apiPath,isDemoMode:this.isDemoMode,cacheTimeout:this.cacheTimeout,userId:this.userId}}isDemoModeEnabled(){return this.isDemoMode}getUserId(){return this.userId}},Yu=e=>{if(!e)throw new Error("usePayment requires a valid userId");const n=(0,t.useMemo)(()=>new Wu(e),[e]),[r,i]=(0,t.useState)({loading:!1,error:null,products:[],currentBilling:null,paymentHistory:[],currentTier:"free",availableTiers:n.getAllTiers()});(0,t.useEffect)(()=>{a(),o();const t=e=>{console.log("Payment successful:",e),i(e=>({...e,loading:!1})),o()},r=e=>{console.error("Payment error:",e),i(t=>({...t,error:e,loading:!1}))},s=t=>{t.userId===e&&(console.log("Tier upgraded to:",t.toTier),i(e=>({...e,currentTier:t.toTier})))},l=t=>{t.userId===e&&(console.log("Tier downgraded to:",t.toTier),i(e=>({...e,currentTier:t.toTier})))};return n.on("paymentSuccess",t),n.on("paymentError",r),n.on("tierUpgraded",s),n.on("tierDowngraded",l),()=>{n.off("paymentSuccess",t),n.off("paymentError",r),n.off("tierUpgraded",s),n.off("tierDowngraded",l)}},[e,n]);const o=(0,t.useCallback)(async()=>{try{const e=await n.getCurrentTier();i(t=>({...t,currentTier:e}))}catch(e){console.error("Failed to load current tier:",e)}},[n]),a=(0,t.useCallback)(async()=>{try{const e=await n.loadProducts();i(t=>({...t,products:e}))}catch(e){console.error("Failed to load products:",e),i(t=>({...t,error:e instanceof Error?e.message:"Failed to load products"}))}},[n]),s=(0,t.useCallback)(async(e,t,r)=>{i(e=>({...e,loading:!0,error:null}));try{const i=await n.processPayment(e,t,r);return i.success&&(await c(),await o()),i}catch(a){const e=a instanceof Error?a.message:"Payment processing failed";return i(t=>({...t,error:e})),{success:!1,error:e}}finally{i(e=>({...e,loading:!1}))}},[n,o]),l=(0,t.useCallback)(async e=>{if(!n.isDemoModeEnabled())return{success:!1,error:"Test payments only available in demo mode"};i(e=>({...e,loading:!0,error:null}));try{const t=r.products.find(t=>t.id===e);if(!t)throw new Error(`Product ${e} not found`);return await n.processPayment(t.price,e,e)}catch(t){const e=t instanceof Error?t.message:"Test payment failed";return i(t=>({...t,error:e})),{success:!1,error:e}}finally{i(e=>({...e,loading:!1}))}},[n,r.products]),c=(0,t.useCallback)(async()=>{try{const e=await n.getUserBilling();return e.success&&e.data&&i(t=>({...t,currentBilling:e.data,currentTier:e.data.paymentTier||t.currentTier})),e}catch(e){console.error("Error fetching billing info:",e);return{success:!1,error:e instanceof Error?e.message:"Failed to fetch billing info"}}},[n]),u=(0,t.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;try{const r=await n.getPaymentHistory(e,t);return r.success&&r.data&&i(e=>({...e,paymentHistory:r.data})),r}catch(r){console.error("Error fetching payment history:",r);return{success:!1,error:r instanceof Error?r.message:"Failed to fetch payment history",data:[]}}},[n]),d=(0,t.useCallback)(async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"monthly";i(e=>({...e,loading:!0,error:null}));try{const r=await n.upgradeTier(e,t);return r.success&&(i(t=>({...t,currentTier:e})),await c()),r}catch(r){const e=r instanceof Error?r.message:"Failed to upgrade tier";return i(t=>({...t,error:e})),{success:!1,error:e}}finally{i(e=>({...e,loading:!1}))}},[n,c]),f=(0,t.useCallback)(async e=>{i(e=>({...e,loading:!0,error:null}));try{const t=await n.downgradeTier(e);return t.success&&(i(t=>({...t,currentTier:e})),await c()),t}catch(t){const e=t instanceof Error?t.message:"Failed to downgrade tier";return i(t=>({...t,error:e})),{success:!1,error:e}}finally{i(e=>({...e,loading:!1}))}},[n,c]),p=(0,t.useCallback)(e=>n.canAccessFeature(r.currentTier,e),[n,r.currentTier]),h=(0,t.useCallback)(e=>n.getTierConfig(e),[n]),m=(0,t.useCallback)(()=>n.getUpgradeRecommendation(r.currentTier),[n,r.currentTier]),g=(0,t.useCallback)(()=>{i(e=>({...e,error:null}))},[]),b=(0,t.useCallback)(e=>r.products.find(t=>t.id===e),[r.products]),y=(0,t.useCallback)(()=>{var e,t;return"active"===(null===(e=r.currentBilling)||void 0===e||null===(t=e.subscription)||void 0===t?void 0:t.status)},[r.currentBilling]),x=(0,t.useCallback)(()=>{var e,t;return(null===(e=r.currentBilling)||void 0===e||null===(t=e.subscription)||void 0===t?void 0:t.plan)||"free"},[r.currentBilling]);return{processPayment:s,processTestPayment:l,fetchUserBilling:c,fetchPaymentHistory:u,currentTier:r.currentTier,availableTiers:r.availableTiers,upgradeTier:d,downgradeTier:f,canAccessFeature:p,getTierConfig:h,getUpgradeRecommendation:m,loading:r.loading,error:r.error,products:r.products,currentBilling:r.currentBilling,paymentHistory:r.paymentHistory,clearError:g,loadProducts:a,getProductById:b,isSubscriptionActive:y,getSubscriptionPlan:x,isDemoMode:n.isDemoModeEnabled(),userId:e}},qu=()=>{var e,n,r,i,o;const{user:a}=Qt(),{fetchUserBilling:s,fetchPaymentHistory:l,isDemoMode:c,currentBilling:u,paymentHistory:d,currentTier:f,availableTiers:p,upgradeTier:h,downgradeTier:m,canAccessFeature:g,loading:b,error:y,clearError:x}=Yu((null===a||void 0===a||null===(e=a.id)||void 0===e?void 0:e.toString())||""),[v,w]=(0,t.useState)(null),[S,k]=(0,t.useState)([]),[E,C]=(0,t.useState)("overview"),[j,P]=(0,t.useState)(!1);(0,t.useEffect)(()=>{if(null===a||void 0===a||!a.id)return;(async()=>{try{const e=await s();e.success&&e.data&&w(e.data);const t=await l(1,20);t.success&&t.data&&k(t.data)}catch(nh){console.error("Error loading billing data:",nh)}})()},[null===a||void 0===a?void 0:a.id,s,l]);const _=v||u,A=S.length>0?S:d,T=async e=>{try{if((await h(e,"monthly")).success){P(!1);const e=await s();e.success&&e.data&&w(e.data)}}catch(nh){console.error("Upgrade failed:",nh)}};return a?!b||v||_?(0,Jt.jsxs)("div",{className:"billing-dashboard",children:[(0,Jt.jsxs)("div",{className:"dashboard-header",children:[(0,Jt.jsx)("h1",{children:"Billing Dashboard"}),c&&(0,Jt.jsx)("div",{className:"demo-badge",children:"\ud83e\uddea Demo Mode"}),(0,Jt.jsx)("div",{className:"user-info",children:(0,Jt.jsxs)("span",{children:["Welcome, ",a.username||a.email]})})]}),y&&(0,Jt.jsxs)("div",{className:"error-banner",children:[(0,Jt.jsxs)("span",{children:["\u274c ",y]}),(0,Jt.jsx)("button",{onClick:x,className:"close-btn",children:"\xd7"})]}),(0,Jt.jsx)("div",{className:"tab-navigation",children:["overview","billing","history","settings"].map(e=>(0,Jt.jsx)("button",{className:"tab-btn "+(E===e?"active":""),onClick:()=>C(e),children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),(0,Jt.jsxs)("div",{className:"tab-content",children:["overview"===E&&(0,Jt.jsxs)("div",{className:"overview-tab",children:[(0,Jt.jsxs)("div",{className:"stats-grid",children:[(0,Jt.jsxs)("div",{className:"stat-card",children:[(0,Jt.jsx)("h3",{children:"Current Plan"}),(0,Jt.jsx)("div",{className:"stat-value",children:(null===_||void 0===_||null===(n=_.subscription)||void 0===n?void 0:n.plan)||f||"Free"}),(0,Jt.jsx)("div",{className:"stat-status",children:(null===_||void 0===_||null===(r=_.subscription)||void 0===r?void 0:r.status)||"Active"})]}),(0,Jt.jsxs)("div",{className:"stat-card",children:[(0,Jt.jsx)("h3",{children:"Next Billing"}),(0,Jt.jsx)("div",{className:"stat-value",children:null!==_&&void 0!==_&&null!==(i=_.subscription)&&void 0!==i&&i.currentPeriodEnd?new Date(_.subscription.currentPeriodEnd).toLocaleDateString():"N/A"})]}),(0,Jt.jsxs)("div",{className:"stat-card",children:[(0,Jt.jsx)("h3",{children:"Total Payments"}),(0,Jt.jsx)("div",{className:"stat-value",children:A.length})]}),(0,Jt.jsxs)("div",{className:"stat-card",children:[(0,Jt.jsx)("h3",{children:"Account Status"}),(0,Jt.jsx)("div",{className:"stat-value good",children:"active"===(null===_||void 0===_||null===(o=_.subscription)||void 0===o?void 0:o.status)?"Active":"Inactive"})]})]}),(0,Jt.jsxs)("div",{className:"quick-actions",children:[(0,Jt.jsx)("h3",{children:"Quick Actions"}),(0,Jt.jsxs)("div",{className:"action-buttons",children:[(0,Jt.jsx)("button",{className:"action-btn primary",onClick:()=>P(!0),children:"Upgrade Plan"}),(0,Jt.jsx)("button",{className:"action-btn secondary",onClick:()=>C("billing"),children:"View Billing"}),(0,Jt.jsx)("button",{className:"action-btn secondary",onClick:()=>C("history"),children:"Payment History"})]})]}),(0,Jt.jsxs)("div",{className:"feature-access",children:[(0,Jt.jsx)("h3",{children:"Your Plan Features"}),(0,Jt.jsx)("div",{className:"features-grid",children:[{key:"api_calls",name:"API Calls",icon:"\ud83d\udd0c"},{key:"storage",name:"Storage",icon:"\ud83d\udcbe"},{key:"support",name:"Priority Support",icon:"\ud83c\udfa7"},{key:"analytics",name:"Advanced Analytics",icon:"\ud83d\udcca"}].map(e=>(0,Jt.jsxs)("div",{className:"feature-item",children:[(0,Jt.jsx)("span",{className:"feature-icon",children:e.icon}),(0,Jt.jsx)("span",{className:"feature-name",children:e.name}),(0,Jt.jsx)("span",{className:"feature-status "+(g(e.key)?"enabled":"disabled"),children:g(e.key)?"\u2713":"\u2717"})]},e.key))})]})]}),"billing"===E&&(0,Jt.jsxs)("div",{className:"billing-tab",children:[(0,Jt.jsxs)("div",{className:"billing-section",children:[(0,Jt.jsx)("h3",{children:"Current Subscription"}),null!==_&&void 0!==_&&_.subscription?(0,Jt.jsxs)("div",{className:"subscription-card",children:[(0,Jt.jsxs)("div",{className:"subscription-header",children:[(0,Jt.jsx)("h4",{children:_.subscription.plan}),(0,Jt.jsx)("span",{className:`status-badge ${_.subscription.status}`,children:_.subscription.status})]}),(0,Jt.jsxs)("div",{className:"subscription-details",children:[(0,Jt.jsxs)("div",{className:"detail-row",children:[(0,Jt.jsx)("span",{children:"Plan:"}),(0,Jt.jsx)("span",{children:_.subscription.plan})]}),(0,Jt.jsxs)("div",{className:"detail-row",children:[(0,Jt.jsx)("span",{children:"Status:"}),(0,Jt.jsx)("span",{children:_.subscription.status})]}),_.subscription.currentPeriodEnd&&(0,Jt.jsxs)("div",{className:"detail-row",children:[(0,Jt.jsx)("span",{children:"Next Billing:"}),(0,Jt.jsx)("span",{children:new Date(_.subscription.currentPeriodEnd).toLocaleDateString()})]}),_.stripeCustomerId&&(0,Jt.jsxs)("div",{className:"detail-row",children:[(0,Jt.jsx)("span",{children:"Customer ID:"}),(0,Jt.jsx)("span",{children:_.stripeCustomerId})]})]})]}):(0,Jt.jsxs)("div",{className:"no-subscription",children:[(0,Jt.jsx)("p",{children:"No active subscription"}),(0,Jt.jsx)("button",{className:"upgrade-btn",onClick:()=>P(!0),children:"Choose a Plan"})]})]}),(0,Jt.jsxs)("div",{className:"plan-options",children:[(0,Jt.jsx)("h3",{children:"Available Plans"}),(0,Jt.jsx)("div",{className:"plans-grid",children:p.map(e=>(0,Jt.jsxs)("div",{className:"plan-card "+(f===e.name?"current":""),children:[(0,Jt.jsx)("h4",{children:e.name}),(0,Jt.jsxs)("div",{className:"price",children:["$",e.monthlyPrice,"/month"]}),(0,Jt.jsx)("ul",{className:"features-list",children:Object.entries(e.features).map(e=>{let[t,n]=e;return(0,Jt.jsxs)("li",{children:[t.replace("_"," "),": ",!0===n?"\u2713":n]},t)})}),f!==e.name&&(0,Jt.jsx)("button",{className:"select-plan-btn",onClick:()=>T(e.name),disabled:b,children:b?"Processing...":"Select Plan"}),f===e.name&&(0,Jt.jsx)("div",{className:"current-plan",children:"Current Plan"})]},e.name))})]})]}),"history"===E&&(0,Jt.jsxs)("div",{className:"history-tab",children:[(0,Jt.jsx)("h3",{children:"Payment History"}),A.length>0?(0,Jt.jsxs)("div",{className:"payment-table",children:[(0,Jt.jsxs)("div",{className:"table-header",children:[(0,Jt.jsx)("div",{className:"col",children:"Date"}),(0,Jt.jsx)("div",{className:"col",children:"Amount"}),(0,Jt.jsx)("div",{className:"col",children:"Plan"}),(0,Jt.jsx)("div",{className:"col",children:"Status"}),(0,Jt.jsx)("div",{className:"col",children:"Actions"})]}),A.map(e=>{var t;return(0,Jt.jsxs)("div",{className:"table-row",children:[(0,Jt.jsx)("div",{className:"col",children:new Date(e.paidAt||e.created_at).toLocaleDateString()}),(0,Jt.jsxs)("div",{className:"col",children:["$",e.amount," ",null===(t=e.currency)||void 0===t?void 0:t.toUpperCase()]}),(0,Jt.jsx)("div",{className:"col",children:e.planType}),(0,Jt.jsx)("div",{className:"col",children:(0,Jt.jsx)("span",{className:`status-badge ${e.status}`,children:e.status})}),(0,Jt.jsx)("div",{className:"col",children:(0,Jt.jsx)("button",{className:"action-link",children:"View Details"})})]},e.id)})]}):(0,Jt.jsxs)("div",{className:"no-payments",children:[(0,Jt.jsx)("p",{children:"No payment history available"}),(0,Jt.jsx)("p",{children:"Make your first payment to see it here!"})]})]}),"settings"===E&&(0,Jt.jsxs)("div",{className:"settings-tab",children:[(0,Jt.jsx)("h3",{children:"Billing Settings"}),(0,Jt.jsxs)("div",{className:"settings-section",children:[(0,Jt.jsx)("h4",{children:"Payment Methods"}),(0,Jt.jsx)("p",{children:"Manage your payment methods and billing preferences."}),(0,Jt.jsx)("button",{className:"settings-btn",children:"Add Payment Method"})]}),(0,Jt.jsxs)("div",{className:"settings-section",children:[(0,Jt.jsx)("h4",{children:"Billing Address"}),(0,Jt.jsx)("p",{children:"Update your billing address for invoices."}),(0,Jt.jsx)("button",{className:"settings-btn",children:"Update Address"})]}),(0,Jt.jsxs)("div",{className:"settings-section",children:[(0,Jt.jsx)("h4",{children:"Notifications"}),(0,Jt.jsx)("p",{children:"Configure billing and payment notifications."}),(0,Jt.jsx)("button",{className:"settings-btn",children:"Notification Settings"})]}),(0,Jt.jsxs)("div",{className:"settings-section danger",children:[(0,Jt.jsx)("h4",{children:"Cancel Subscription"}),(0,Jt.jsx)("p",{children:"Permanently cancel your subscription. This action cannot be undone."}),(0,Jt.jsx)("button",{className:"settings-btn danger",children:"Cancel Subscription"})]})]})]}),j&&(0,Jt.jsx)("div",{className:"modal-overlay",onClick:()=>P(!1),children:(0,Jt.jsxs)("div",{className:"modal",onClick:e=>e.stopPropagation(),children:[(0,Jt.jsxs)("div",{className:"modal-header",children:[(0,Jt.jsx)("h3",{children:"Upgrade Your Plan"}),(0,Jt.jsx)("button",{onClick:()=>P(!1),children:"\xd7"})]}),(0,Jt.jsxs)("div",{className:"modal-content",children:[(0,Jt.jsx)("p",{children:"Choose a plan that fits your needs:"}),(0,Jt.jsx)("div",{className:"modal-plans",children:p.filter(e=>e.name!==f).map(e=>(0,Jt.jsxs)("div",{className:"modal-plan",children:[(0,Jt.jsx)("h4",{children:e.name}),(0,Jt.jsxs)("div",{className:"price",children:["$",e.monthlyPrice,"/month"]}),(0,Jt.jsx)("button",{onClick:()=>T(e.name),disabled:b,className:"upgrade-btn",children:b?"Processing...":`Upgrade to ${e.name}`})]},e.name))})]})]})})]}):(0,Jt.jsx)("div",{className:"billing-dashboard",children:(0,Jt.jsxs)("div",{className:"loading-spinner",children:[(0,Jt.jsx)("div",{className:"spinner"}),(0,Jt.jsx)("p",{children:"Loading billing information..."})]})}):(0,Jt.jsx)("div",{className:"billing-dashboard",children:(0,Jt.jsxs)("div",{className:"auth-required",children:[(0,Jt.jsx)("h2",{children:"Authentication Required"}),(0,Jt.jsx)("p",{children:"Please log in to view your billing information."})]})})},Vu=Qi.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,Ku=Qi.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`,Qu=Qi.h1`
  color: #48bb78;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`,Xu=Qi.p`
  color: #4a5568;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`,Ju=Qi.button`
  background: #4299e1;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s;
  
  &:hover {
    background: #3182ce;
  }
  
  &.secondary {
    background: #718096;
    
    &:hover {
      background: #4a5568;
    }
  }
`,Zu=Qi.div`
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: left;
`,ed=Qi.div`
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  
  h4 {
    margin: 0 0 0.5rem 0;
    color: #234e52;
    font-size: 1rem;
  }
  
  p {
    margin: 0;
    color: #285e61;
    font-size: 0.9rem;
  }
`,td=Qi.div`
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: left;
  
  h4 {
    margin: 0 0 1rem 0;
    color: #2d3748;
  }
  
  ul {
    margin: 0;
    padding-left: 1.5rem;
    color: #4a5568;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`,nd=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(10);(0,t.useEffect)(()=>{n(!0);const e=setInterval(()=>{i(t=>t<=1?(clearInterval(e),o(),0):t-1)},1e3);return()=>clearInterval(e)},[]);const o=()=>{window.location.href="/games"};return(0,Jt.jsxs)(Vu,{children:[e&&(0,Jt.jsxs)(ed,{children:[(0,Jt.jsx)("h4",{children:"\ud83c\udfad Demo Payment Successful!"}),(0,Jt.jsx)("p",{children:"This was a demonstration payment. No real money was charged, but you can explore all the features as if you had a real subscription!"})]}),(0,Jt.jsx)(Ku,{children:"\ud83c\udf89"}),(0,Jt.jsx)(Qu,{children:e?"Demo Payment Successful!":"Payment Successful!"}),(0,Jt.jsx)(Xu,{children:e?"Thank you for trying our demo payment system! Your demo subscription is now active and you have access to all premium features in the demonstration environment.":"Thank you for your subscription! Your account has been upgraded and you now have access to all premium features. Start enjoying your enhanced gaming experience!"}),(0,Jt.jsxs)(Zu,{children:[(0,Jt.jsx)("h4",{style:{margin:"0 0 1rem 0",color:"#276749"},children:"\u2705 What You Now Have Access To:"}),(0,Jt.jsxs)("ul",{style:{margin:0,paddingLeft:"1.5rem",color:"#2d3748"},children:[(0,Jt.jsx)("li",{children:"All premium games and content"}),(0,Jt.jsx)("li",{children:"Multiplayer gaming with friends"}),(0,Jt.jsx)("li",{children:"Global leaderboards and rankings"}),(0,Jt.jsx)("li",{children:"Game history and progress tracking"}),(0,Jt.jsx)("li",{children:"Priority customer support"}),(0,Jt.jsx)("li",{children:"Ad-free gaming experience"}),e&&(0,Jt.jsx)("li",{style:{color:"#4299e1",fontWeight:"bold"},children:"\ud83c\udfad Full demo environment exploration"})]})]}),(0,Jt.jsxs)(td,{children:[(0,Jt.jsx)("h4",{children:"\ud83d\ude80 Next Steps:"}),(0,Jt.jsxs)("ul",{children:[(0,Jt.jsx)("li",{children:"Explore all available games in your new premium account"}),(0,Jt.jsx)("li",{children:"Set up your gaming profile and preferences"}),(0,Jt.jsx)("li",{children:"Invite friends to play multiplayer games"}),(0,Jt.jsx)("li",{children:"Check out exclusive premium content"}),e&&(0,Jt.jsxs)("li",{children:[(0,Jt.jsx)("strong",{children:"Demo Mode:"})," Feel free to test all features - everything is safe to explore!"]})]})]}),(0,Jt.jsxs)("div",{children:[(0,Jt.jsxs)(Ju,{onClick:o,children:["Start Gaming ",r>0&&`(${r}s)`]}),(0,Jt.jsx)(Ju,{onClick:()=>{window.location.href="/billing"},className:"secondary",children:"View Billing"}),e&&(0,Jt.jsx)(Ju,{onClick:()=>{window.location.href="/pricing"},className:"secondary",children:"Try Another Plan"})]}),r>0&&(0,Jt.jsxs)("p",{style:{marginTop:"2rem",color:"#718096",fontSize:"0.9rem"},children:["Automatically redirecting to games in ",r," seconds..."]}),e&&(0,Jt.jsxs)("div",{style:{marginTop:"2rem",padding:"1rem",background:"#f0fff4",borderRadius:"8px",fontSize:"0.9rem",color:"#276749"},children:[(0,Jt.jsx)("strong",{children:"\ud83d\udca1 Demo Tip:"})," This success page shows what real users would see after completing a payment. All premium features are now unlocked in the demo environment!"]})]})},rd=Qi.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 3rem 0;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`,id=Qi.button`
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  min-width: 100px;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 8px #00ffff;
  box-shadow: 
    0 0 8px rgba(0, 255, 255, 0.3), 
    inset 0 0 8px rgba(0, 255, 255, 0.1);
  white-space: nowrap;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    text-shadow: 
      0 0 8px #00ffff,
      0 0 15px #00ffff,
      0 0 25px #00ffff;
    box-shadow: 
      0 0 15px rgba(0, 255, 255, 0.6),
      inset 0 0 15px rgba(0, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    min-width: 80px;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`,od=Qi.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${e=>{switch(e.color){case"games":return"#00ff00";case"profile":return"#ff00ff";case"dashboard":return"#ffff00";default:return"#00ffff"}}};
  margin: 0;
  text-shadow: 0 0 10px currentColor;
`,ad=(Qi.div`
  min-height: 100vh;
  background: radial-gradient(circle at center, #001122 0%, #000511 100%);
  color: #00ffff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* Retro Grid Background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
  }

  /* Content above grid */
  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Qi.div`
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  
  /* Neon Border Effect */
  &::after {
    content: '';
    display: block;
    width: 200px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ffff, transparent);
    margin: 1rem auto;
    box-shadow: 0 0 10px #00ffff;
  }
`,e=>{let{backTo:t,backLabel:n,homeButton:r=!1,customButtons:i=[],className:o}=e;const a=Fe(),s=e=>{console.log(`\ud83e\udded ZoneNavigation: Navigating to ${e}`),a(e)};return(0,Jt.jsxs)(rd,{className:o,children:[t&&n&&(0,Jt.jsxs)(id,{onClick:()=>s(t),children:["\u2190 ",n]}),r&&(0,Jt.jsx)(id,{onClick:()=>s("/"),children:"\ud83c\udfe0 HOME"}),i.map((e,t)=>(0,Jt.jsxs)(id,{onClick:()=>s(e.route),children:[e.icon&&`${e.icon} `,e.label]},t))]})}),sd=()=>({homeButton:!0,customButtons:[{label:"GAMES",route:"/games",icon:"\ud83c\udfae"},{label:"PROFIL",route:"/profile",icon:"\ud83d\udc64"},{label:"HIGHSCORES",route:"/highscores",icon:"\ud83c\udfc6"},{label:"SETTINGS",route:"/settings",icon:"\u2699\ufe0f"}]}),ld=()=>({backTo:"/",backLabel:"HOME",customButtons:[{label:"GLOBAL",route:"/highscores/global",icon:"\ud83c\udf0d"},{label:"PERSONAL",route:"/highscores/personal",icon:"\ud83d\udc64"},{label:"WEEKLY",route:"/highscores/weekly",icon:"\ud83d\udcc5"}]});const cd=new class{constructor(){this.baseURL=void 0,this.apiPath=void 0,this.isInitialized=void 0,this.cache=void 0,this.cacheTimeout=void 0,this.baseURL="http://localhost:3001",this.apiPath="/api",this.isInitialized=!1,this.cache=new Map,this.cacheTimeout=3e5}initialize(){this.isInitialized?console.log("AchievementManager: Already initialized"):(this.isInitialized=!0,console.log("AchievementManager: Initialized successfully"))}async getUserAchievements(e){var t,n,r,i,o,a;if(!e)throw new Error("User ID is required");const s=`achievements_${e}`,l=this.getFromCache(s);if(l)return l;const c=await this.makeRequest("GET",`/api/achievements/user/${e}`);if(!c.success)throw new Error(c.error||"Failed to get user achievements");const u={achievements:(null===(t=c.data)||void 0===t?void 0:t.achievements)||[],unlocked_count:(null===(n=c.data)||void 0===n?void 0:n.unlocked_count)||0,total_count:(null===(r=c.data)||void 0===r?void 0:r.total_count)||0,recent_unlocks:(null===(i=c.data)||void 0===i?void 0:i.recent_unlocks)||[],completion_percentage:(null===(o=c.data)||void 0===o?void 0:o.completion_percentage)||0,last_updated:(null===(a=c.data)||void 0===a?void 0:a.last_updated)||(new Date).toISOString()};return this.setCache(s,u),u}async getUserProgress(e){var t,n,r,i,o,a,s,l,c,u,d,f;if(!e)throw new Error("User ID is required");const p=`progress_${e}`,h=this.getFromCache(p);if(h)return h;const m=await this.makeRequest("GET",`/user/progress?userId=${e}`);if(!m.success)throw new Error(m.error||"Failed to get user progress");const g={user_id:(null===(t=m.data)||void 0===t?void 0:t.user_id)||e,games_played:(null===(n=m.data)||void 0===n?void 0:n.games_played)||0,total_score:(null===(r=m.data)||void 0===r?void 0:r.total_score)||0,hours_played:(null===(i=m.data)||void 0===i?void 0:i.hours_played)||0,achievements_unlocked:(null===(o=m.data)||void 0===o?void 0:o.achievements_unlocked)||0,current_streak:(null===(a=m.data)||void 0===a?void 0:a.current_streak)||0,best_scores:(null===(s=m.data)||void 0===s?void 0:s.best_scores)||[],level:(null===(l=m.data)||void 0===l?void 0:l.level)||1,experience_points:(null===(c=m.data)||void 0===c?void 0:c.experience_points)||0,last_played:(null===(u=m.data)||void 0===u?void 0:u.last_played)||null,favorite_game:(null===(d=m.data)||void 0===d?void 0:d.favorite_game)||null,statistics:(null===(f=m.data)||void 0===f?void 0:f.statistics)||{}};return this.setCache(p,g),g}async getLeaderboard(){var e,t,n,r,i;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;const s=`leaderboard_${o||"global"}_${a}`,l=this.getFromCache(s);if(l)return l;let c=`/leaderboard?limit=${a}`;o&&(c+=`&gameId=${o}`);const u=await this.makeRequest("GET",c);if(!u.success)throw new Error(u.error||"Failed to get leaderboard");const d={entries:(null===(e=u.data)||void 0===e?void 0:e.entries)||[],total_players:(null===(t=u.data)||void 0===t?void 0:t.total_players)||0,game_filter:(null===(n=u.data)||void 0===n?void 0:n.game_filter)||null,last_updated:(null===(r=u.data)||void 0===r?void 0:r.last_updated)||(new Date).toISOString(),page_size:(null===(i=u.data)||void 0===i?void 0:i.page_size)||a};return this.setCache(s,d,12e4),d}async getUserStatistics(e){var t,n,r,i,o,a,s,l,c,u,d,f,p,h,m,g;if(!e)throw new Error("User ID is required");const b=`statistics_${e}`,y=this.getFromCache(b);if(y)return y;const x=await this.makeRequest("GET",`/user/statistics?userId=${e}`);if(!x.success)throw new Error(x.error||"Failed to get user statistics");const v={user_id:(null===(t=x.data)||void 0===t?void 0:t.user_id)||e,games_played:(null===(n=x.data)||void 0===n?void 0:n.games_played)||0,total_score:(null===(r=x.data)||void 0===r?void 0:r.total_score)||0,achievements_unlocked:(null===(i=x.data)||void 0===i?void 0:i.achievements_unlocked)||0,hours_played:(null===(o=x.data)||void 0===o?void 0:o.hours_played)||0,global_rank:(null===(a=x.data)||void 0===a?void 0:a.global_rank)||null,level:(null===(s=x.data)||void 0===s?void 0:s.level)||1,experience_points:(null===(l=x.data)||void 0===l?void 0:l.experience_points)||0,completion_percentage:(null===(c=x.data)||void 0===c?void 0:c.completion_percentage)||0,daily_stats:(null===(u=x.data)||void 0===u?void 0:u.daily_stats)||[],weekly_summary:(null===(d=x.data)||void 0===d?void 0:d.weekly_summary)||{},achievements_progress:(null===(f=x.data)||void 0===f?void 0:f.achievements_progress)||[],average_score:(null===(p=x.data)||void 0===p?void 0:p.average_score)||0,best_streak:(null===(h=x.data)||void 0===h?void 0:h.best_streak)||0,current_streak:(null===(m=x.data)||void 0===m?void 0:m.current_streak)||0,last_updated:(null===(g=x.data)||void 0===g?void 0:g.last_updated)||(new Date).toISOString()};return this.setCache(b,v),v}async unlockAchievement(e,t){var n,r,i;let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||!t)throw new Error("User ID and Achievement ID are required");const a=await this.makeRequest("POST","/achievements/unlock",{userId:e,achievementId:t,gameContext:o});if(!a.success)throw new Error(a.error||"Failed to unlock achievement");return this.clearUserCache(e),{success:(null===(n=a.data)||void 0===n?void 0:n.success)||!1,message:(null===(r=a.data)||void 0===r?void 0:r.message)||"",achievement:(null===(i=a.data)||void 0===i?void 0:i.achievement)||{}}}async getScoreViewData(e){try{const[t,n,r,i]=await Promise.all([this.getUserAchievements(e),this.getUserProgress(e),this.getLeaderboard(null,20),this.getUserStatistics(e)]);return{achievements:t.achievements.map(e=>({id:e.id,title:e.title,description:e.description,icon:e.icon,unlocked:e.unlocked,unlockedAt:e.unlocked_at})),leaderboard:r.entries.map(t=>({rank:t.rank,player:t.username,score:t.score,game:t.game_name,isCurrentUser:t.user_id===e})),userStats:{gamesPlayed:i.games_played,totalScore:i.total_score,achievementsUnlocked:i.achievements_unlocked,hoursPlayed:i.hours_played},metadata:{completionPercentage:t.completion_percentage,globalRank:i.global_rank,level:i.level,lastUpdated:(new Date).toISOString()}}}catch(t){return console.error("AchievementManager: Get ScoreView data failed:",t),{achievements:[],leaderboard:[],userStats:{gamesPlayed:0,totalScore:0,achievementsUnlocked:0,hoursPlayed:0},metadata:{completionPercentage:0,globalRank:null,level:1,lastUpdated:(new Date).toISOString(),error:t instanceof Error?t.message:"Unknown error"}}}}async makeRequest(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=`${this.baseURL}${this.apiPath}${t}`,i={method:e,headers:{"Content-Type":"application/json"}};n&&(i.body=JSON.stringify(n));const o=await fetch(r,i);if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);return await o.json()}setCache(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=Date.now()+(n||this.cacheTimeout);this.cache.set(e,{data:t,expiry:r})}getFromCache(e){const t=this.cache.get(e);return t?Date.now()>t.expiry?(this.cache.delete(e),null):t.data:null}clearCache(){this.cache.clear()}clearUserCache(e){Array.from(this.cache.keys()).forEach(t=>{t.includes(e)&&this.cache.delete(t)})}async healthCheck(){try{return(await this.makeRequest("GET","/health")).success}catch(e){return console.error("AchievementManager: Health check failed:",e),!1}}},ud=cd,dd=function(){var e;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const[r,i]=(0,t.useState)([]),[o,a]=(0,t.useState)([]),[s,l]=(0,t.useState)({gamesPlayed:0,totalScore:0,achievementsUnlocked:0,hoursPlayed:0}),[c,u]=(0,t.useState)(null),[d,f]=(0,t.useState)(!1),[p,h]=(0,t.useState)(null),[m,g]=(0,t.useState)(null);(0,t.useEffect)(()=>{ud.initialize()},[]);const b=(0,t.useCallback)(async()=>{if(n){f(!0),h(null);try{const e=await ud.getScoreViewData(n);i(e.achievements),a(e.leaderboard),l(e.userStats),g(e.metadata.lastUpdated),e.metadata.error&&h(`Data warning: ${e.metadata.error}`)}catch(nh){console.error("useAchievementManager: Load ScoreView data failed:",nh);const t=nh instanceof Error?nh.message:"Unknown error";h(t)}finally{f(!1)}}},[n]),y=(0,t.useCallback)(async()=>{if(!n)return[];try{const e=(await ud.getUserAchievements(n)).achievements.map(e=>({id:e.id,title:e.title,description:e.description,icon:e.icon,unlocked:e.unlocked,unlockedAt:e.unlocked_at}));return i(e),e}catch(nh){throw console.error("useAchievementManager: Load achievements failed:",nh),nh}},[n]),x=(0,t.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;try{const r=(await ud.getLeaderboard(e,t)).entries.map(e=>({rank:e.rank,player:e.username,score:e.score,game:e.game_name,isCurrentUser:e.user_id===n}));return a(r),r}catch(nh){throw console.error("useAchievementManager: Load leaderboard failed:",nh),nh}},[n]),v=(0,t.useCallback)(async()=>{if(!n){const e={gamesPlayed:0,totalScore:0,achievementsUnlocked:0,hoursPlayed:0};return l(e),e}try{const e=await ud.getUserStatistics(n),t={gamesPlayed:e.games_played,totalScore:e.total_score,achievementsUnlocked:e.achievements_unlocked,hoursPlayed:e.hours_played};return l(t),t}catch(nh){throw console.error("useAchievementManager: Load user statistics failed:",nh),nh}},[n]),w=(0,t.useCallback)(async()=>{if(!n)throw new Error("User ID required");try{const e=await ud.getUserProgress(n);return u(e),e}catch(nh){throw console.error("useAchievementManager: Load user progress failed:",nh),nh}},[n]),S=(0,t.useCallback)(async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!n)throw new Error("User ID is required to unlock achievement");try{const r=await ud.unlockAchievement(n,e,t);return r.success&&await b(),r}catch(nh){throw console.error("useAchievementManager: Unlock achievement failed:",nh),nh}},[n,b]),k=(0,t.useCallback)(async()=>{await b()},[b]),E=(0,t.useCallback)(async()=>{ud.clearCache(),await b()},[b]);(0,t.useEffect)(()=>{n&&b()},[n,b]);const C={completionPercentage:r.length>0?Math.round(r.filter(e=>e.unlocked).length/r.length*100):0,unlockedCount:r.filter(e=>e.unlocked).length,totalAchievements:r.length,userRank:(null===(e=o.find(e=>e.isCurrentUser))||void 0===e?void 0:e.rank)||null};return{achievements:r,leaderboard:o,userStats:s,userProgress:c,loading:d,error:p,lastUpdated:m,computedStats:C,loadScoreViewData:b,loadUserAchievements:y,loadLeaderboard:x,loadUserStatistics:v,loadUserProgress:w,unlockAchievement:S,refreshData:k,clearCacheAndReload:E,isHealthy:()=>ud.healthCheck(),clearError:()=>h(null),manager:ud}},fd=Qi.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 2rem;
  font-family: 'Orbitron', monospace;
`,pd=Qi.div`
  text-align: center;
  margin-bottom: 3rem;
`,hd=Qi.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
`,md=Qi.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,gd=Qi.div`
  background: rgba(0, 20, 40, 0.6);
  border: 2px solid rgba(255, 152, 0, 0.3);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(255, 152, 0, 0.1);
`,bd=Qi.h2`
  color: #ff9800;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 152, 0, 0.5);
`,yd=Qi.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`,xd=Qi.div`
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid ${e=>e.unlocked?"#ff9800":"#444"};
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  opacity: ${e=>e.unlocked?1:.5};
  
  &:hover {
    transform: ${e=>e.unlocked?"translateY(-5px)":"none"};
    box-shadow: ${e=>e.unlocked?"0 10px 20px rgba(255, 152, 0, 0.3)":"none"};
  }
`,vd=Qi.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  filter: ${e=>e.unlocked?"none":"grayscale(100%)"};
`,wd=Qi.h4`
  color: ${e=>e.unlocked?"#ff9800":"#666"};
  font-size: 0.9rem;
  margin: 0.5rem 0;
  text-transform: uppercase;
`,Sd=Qi.p`
  color: #aaa;
  font-size: 0.7rem;
  margin: 0;
  line-height: 1.3;
`,kd=Qi.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
`,Ed=Qi.div`
  background: rgba(255, 152, 0, 0.2);
  padding: 1rem;
  display: grid;
  grid-template-columns: 60px 1fr 100px 100px;
  gap: 1rem;
  font-weight: bold;
  color: #ff9800;
  font-size: 0.9rem;
`,Cd=Qi.div`
  padding: 0.8rem 1rem;
  display: grid;
  grid-template-columns: 60px 1fr 100px 100px;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 152, 0, 0.1);
  background: ${e=>e.isUser?"rgba(255, 152, 0, 0.1)":"transparent"};
  font-size: 0.8rem;
  
  &:hover {
    background: rgba(255, 152, 0, 0.05);
  }
`,jd=Qi.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  
  ${e=>1===e.rank&&"\n    background: linear-gradient(45deg, #ffd700, #ffed4e);\n    color: #000;\n    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);\n  "}
  
  ${e=>2===e.rank&&"\n    background: linear-gradient(45deg, #c0c0c0, #e8e8e8);\n    color: #000;\n    box-shadow: 0 0 15px rgba(192, 192, 192, 0.5);\n  "}
  
  ${e=>3===e.rank&&"\n    background: linear-gradient(45deg, #cd7f32, #d4a574);\n    color: #000;\n    box-shadow: 0 0 15px rgba(205, 127, 50, 0.5);\n  "}
  
  ${e=>e.rank>3&&"\n    background: rgba(255, 152, 0, 0.2);\n    border: 1px solid #ff9800;\n    color: #ff9800;\n  "}
`,Pd=Qi.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,_d=Qi.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 152, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`,Ad=Qi.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff9800;
  text-shadow: 0 0 10px rgba(255, 152, 0, 0.3);
`,Td=Qi.div`
  font-size: 0.8rem;
  color: #aaa;
  text-transform: uppercase;
  margin-top: 0.5rem;
`,Rd=Qi.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #ff9800;
  font-size: 1.2rem;
`,Nd=Qi.div`
  background: rgba(255, 71, 87, 0.1);
  border: 1px solid #ff4757;
  border-radius: 8px;
  padding: 1rem;
  color: #ff4757;
  text-align: center;
  margin-bottom: 2rem;
`,Ld=Qi.button`
  background: transparent;
  border: 1px solid #ff9800;
  color: #ff9800;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 152, 0, 0.1);
    box-shadow: 0 0 10px rgba(255, 152, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,$d=()=>{Fe();const{mode:e}=an(),[n]=(0,t.useState)("demo-user-123"),{achievements:r,leaderboard:i,userStats:o,loading:a,error:s,achievementsUnlockedCount:l,achievementsTotalCount:c,completionPercentage:u,refresh:d,unlockAchievement:f,isReady:p}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const{achievements:n,leaderboard:r,userStats:i,loading:o,error:a,computedStats:s,loadScoreViewData:l,unlockAchievement:c,refreshData:u}=dd(e);return(0,t.useEffect)(()=>{if(e){const e=setInterval(()=>{l()},3e5);return()=>clearInterval(e)}},[e,l]),{achievements:n,leaderboard:r,userStats:i,loading:o,error:a,achievementsUnlockedCount:s.unlockedCount,achievementsTotalCount:s.totalAchievements,completionPercentage:s.completionPercentage,refresh:u,unlockAchievement:c,isReady:!o&&!a&&n.length>0}}(n),[h,m]=(0,t.useState)(!1);(0,t.useEffect)(()=>{const e=setTimeout(()=>{(a||s)&&(console.log("ScoreView: Falling back to mock data"),m(!0))},1e4);return()=>clearTimeout(e)},[a,s]);const g=h?[{id:"first-win",title:"First Victory",description:"Win your first game",icon:"\ud83c\udfaf",unlocked:!0,unlockedAt:"2024-01-15"},{id:"speed-demon",title:"Speed Demon",description:"Complete Snake game in under 2 minutes",icon:"\u26a1",unlocked:!0,unlockedAt:"2024-01-20"},{id:"tetris-master",title:"Tetris Master",description:"Clear 10 lines in a single Tetris game",icon:"\ud83e\udde9",unlocked:!1}]:r,b=h?[{rank:1,player:"ProGamer2024",score:15420,game:"Snake",isCurrentUser:!1},{rank:2,player:"RetroMaster",score:12890,game:"Tetris",isCurrentUser:!1},{rank:3,player:"YouPlayer",score:9840,game:"Memory",isCurrentUser:!0}]:i,y=h?{gamesPlayed:47,totalScore:23680,achievementsUnlocked:3,hoursPlayed:12}:o,x=h?3:l,v=h?6:c,w=async()=>{try{await d(),m(!1)}catch(nh){console.error("Refresh failed:",nh)}};return(0,Jt.jsxs)(fd,{children:[(0,Jt.jsxs)(pd,{children:[(0,Jt.jsx)(od,{color:"sources",children:"SOURCES"}),(0,Jt.jsxs)(hd,{children:["Track your progress, unlock achievements, and compete on the leaderboards!",h&&(0,Jt.jsxs)("div",{style:{color:"#ff9800",fontSize:"0.9em",marginTop:"0.5rem"},children:["[Demo Mode - Backend nicht verf\xfcgbar]",(0,Jt.jsx)(Ld,{onClick:w,disabled:a,children:"Backend versuchen"})]}),p&&(0,Jt.jsxs)("div",{style:{color:"#2ed573",fontSize:"0.9em",marginTop:"0.5rem"},children:["[Live Data - Backend verbunden]",(0,Jt.jsx)(Ld,{onClick:w,disabled:a,children:"Aktualisieren"})]})]})]}),s&&!h&&(0,Jt.jsxs)(Nd,{children:[(0,Jt.jsx)("strong",{children:"Fehler:"})," ",s,(0,Jt.jsx)(Ld,{onClick:w,disabled:a,children:"Erneut versuchen"})]}),a&&!h&&(0,Jt.jsx)(Rd,{children:"Lade Daten vom Backend..."}),(0,Jt.jsxs)(md,{children:[(0,Jt.jsxs)(gd,{children:[(0,Jt.jsxs)(bd,{children:["\ud83c\udfc6 Achievements",!h&&` (${x}/${v})`]}),(0,Jt.jsx)(yd,{children:g.map(e=>(0,Jt.jsxs)(xd,{unlocked:e.unlocked,children:[(0,Jt.jsx)(vd,{unlocked:e.unlocked,children:e.icon}),(0,Jt.jsx)(wd,{unlocked:e.unlocked,children:e.title}),(0,Jt.jsx)(Sd,{children:e.description}),e.unlocked&&e.unlockedAt&&(0,Jt.jsxs)("div",{style:{fontSize:"0.6rem",color:"#ff9800",marginTop:"0.5rem"},children:["Unlocked: ",new Date(e.unlockedAt).toLocaleDateString()]})]},e.id))})]}),(0,Jt.jsxs)(gd,{children:[(0,Jt.jsx)(bd,{children:"\ud83d\udcca Global Leaderboard"}),(0,Jt.jsxs)(kd,{children:[(0,Jt.jsxs)(Ed,{children:[(0,Jt.jsx)("div",{children:"Rank"}),(0,Jt.jsx)("div",{children:"Player"}),(0,Jt.jsx)("div",{children:"Score"}),(0,Jt.jsx)("div",{children:"Game"})]}),b.map(e=>(0,Jt.jsxs)(Cd,{isUser:e.isCurrentUser,children:[(0,Jt.jsx)(jd,{rank:e.rank,children:e.rank<=3?1===e.rank?"\ud83e\udd47":2===e.rank?"\ud83e\udd48":"\ud83e\udd49":e.rank}),(0,Jt.jsxs)("div",{children:[e.player,e.isCurrentUser&&(0,Jt.jsx)("span",{style:{color:"#ff9800",marginLeft:"0.5rem"},children:"(Du)"})]}),(0,Jt.jsx)("div",{children:e.score.toLocaleString()}),(0,Jt.jsx)("div",{children:e.game})]},e.rank))]})]})]}),(0,Jt.jsxs)(Pd,{children:[(0,Jt.jsxs)(_d,{children:[(0,Jt.jsx)(Ad,{children:y.gamesPlayed}),(0,Jt.jsx)(Td,{children:"Games Played"})]}),(0,Jt.jsxs)(_d,{children:[(0,Jt.jsx)(Ad,{children:y.totalScore.toLocaleString()}),(0,Jt.jsx)(Td,{children:"Total Score"})]}),(0,Jt.jsxs)(_d,{children:[(0,Jt.jsxs)(Ad,{children:[y.achievementsUnlocked,"/",h?6:c]}),(0,Jt.jsx)(Td,{children:"Achievements"})]}),(0,Jt.jsxs)(_d,{children:[(0,Jt.jsxs)(Ad,{children:[y.hoursPlayed,"h"]}),(0,Jt.jsx)(Td,{children:"Hours Played"})]})]}),(0,Jt.jsx)(ad,{...ld()})]})},Od=Qi.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 2rem;
  font-family: 'Orbitron', monospace;
`,zd=Qi.div`
  text-align: center;
  margin-bottom: 3rem;
`,Md=Qi.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
`,Dd=Qi.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }
`,Id=Qi.div`
  background: rgba(20, 20, 40, 0.8);
  border: 3px solid ${e=>e.enabled?"#f1f2f6":"#666"};
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  cursor: ${e=>e.enabled?"pointer":"not-allowed"};
  transition: all 0.4s ease;
  opacity: ${e=>e.enabled?1:.6};
  position: relative;
  overflow: hidden;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 0 15px ${e=>e.enabled?"rgba(241, 242, 246, 0.2)":"rgba(102, 102, 102, 0.2)"};

  ${e=>e.enabled&&qi`
    &:hover {
      background: rgba(20, 20, 40, 0.95);
      transform: translateY(-8px) scale(1.02);
      border-color: #f1f2f6;
      box-shadow: 
        0 0 30px rgba(241, 242, 246, 0.8),
        0 0 60px rgba(241, 242, 246, 0.6),
        0 0 100px rgba(241, 242, 246, 0.4),
        0 15px 35px rgba(0, 0, 0, 0.3);
      
      &::before {
        opacity: 1;
      }
      
      &::after {
        opacity: 0.8;
      }
      
      ${Ud} {
        filter: drop-shadow(0 0 15px #f1f2f6) 
                drop-shadow(0 0 25px rgba(241, 242, 246, 0.8));
        transform: scale(1.1);
      }
      
      ${Fd} {
        color: #f1f2f6;
        text-shadow: 
          0 0 15px #f1f2f6,
          0 0 30px rgba(241, 242, 246, 0.8),
          0 0 45px rgba(241, 242, 246, 0.6);
        transform: scale(1.05);
      }
    }
  `}

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(241, 242, 246, 0.6), 
      transparent, 
      rgba(241, 242, 246, 0.6), 
      transparent, 
      rgba(241, 242, 246, 0.6)
    );
    border-radius: 15px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, 
      rgba(241, 242, 246, 0.15) 0%, 
      transparent 70%
    );
    border-radius: 15px;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
`,Ud=Qi.div`
  font-size: 4rem;
  margin: 0;
  filter: none;
  transition: all 0.4s ease;
`,Fd=Qi.h3`
  font-size: 1.8rem;
  margin: 0;
  color: ${e=>e.enabled?"#f1f2f6":"#666"};
  text-shadow: ${e=>e.enabled?"0 0 10px rgba(241, 242, 246, 0.4)":"none"};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.4s ease;
`,Bd=Qi.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  
  ${e=>"online"===e.status&&qi`
    background: #2ed573;
    box-shadow: 0 0 10px #2ed573;
  `}
  
  ${e=>"warning"===e.status&&qi`
    background: #ff9800;
    box-shadow: 0 0 10px #ff9800;
  `}
  
  ${e=>"error"===e.status&&qi`
    background: #ff4757;
    box-shadow: 0 0 10px #ff4757;
  `}
  
  ${e=>"maintenance"===e.status&&qi`
    background: #666;
    box-shadow: 0 0 10px #666;
  `}
`,Hd=Qi.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem auto;
  max-width: 1200px;
`,Gd=Qi.div`
  background: rgba(20, 20, 40, 0.6);
  border: 1px solid rgba(241, 242, 246, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(241, 242, 246, 0.6);
    box-shadow: 0 5px 15px rgba(241, 242, 246, 0.1);
  }
`,Wd=Qi.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px currentColor;
  
  ${e=>!e.status&&qi`
    color: #f1f2f6;
  `}
  
  ${e=>"good"===e.status&&qi`
    color: #2ed573;
  `}
  
  ${e=>"warning"===e.status&&qi`
    color: #ff9800;
  `}
  
  ${e=>"critical"===e.status&&qi`
    color: #ff4757;
  `}
`,Yd=Qi.div`
  color: #aaa;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`,qd=Qi.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(241, 242, 246, 0.2);
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 1.5rem;
`,Vd=Qi.h3`
  color: #f1f2f6;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(241, 242, 246, 0.3);
`,Kd=Qi.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  
  ${e=>"info"===e.type&&qi`
    background: rgba(69, 183, 209, 0.1);
    border-left: 3px solid #45b7d1;
    color: #45b7d1;
  `}
  
  ${e=>"warning"===e.type&&qi`
    background: rgba(255, 152, 0, 0.1);
    border-left: 3px solid #ff9800;
    color: #ff9800;
  `}
  
  ${e=>"error"===e.type&&qi`
    background: rgba(255, 71, 87, 0.1);
    border-left: 3px solid #ff4757;
    color: #ff4757;
  `}
  
  ${e=>"success"===e.type&&qi`
    background: rgba(46, 213, 115, 0.1);
    border-left: 3px solid #2ed573;
    color: #2ed573;
  `}
`,Qd=Qi.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #f1f2f6;
  font-size: 1.2rem;
`,Xd=Qi.div`
  background: rgba(255, 71, 87, 0.1);
  border: 1px solid #ff4757;
  border-radius: 8px;
  padding: 1rem;
  color: #ff4757;
  text-align: center;
  margin-bottom: 2rem;
`,Jd=Qi.button`
  background: transparent;
  border: 1px solid #f1f2f6;
  color: #f1f2f6;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(241, 242, 246, 0.1);
    box-shadow: 0 0 10px rgba(241, 242, 246, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Zd=()=>{const e=Fe(),{mode:n}=an(),{systemData:r,webSocketState:i,systemStats:o,activityLog:a,loading:s,error:l,refresh:c,runSystemTest:u,isReady:d}={systemData:{mode:"development",onlineUsers:12,lastUpdated:(new Date).toISOString()},webSocketState:{status:"disconnected",connectedUsers:0,connected:!1,connectionId:null},systemStats:[],activityLog:[],loading:!1,error:null,lastUpdated:(new Date).toISOString(),refresh:()=>Promise.resolve(),runSystemTest:e=>Promise.resolve(),isReady:!0,loadDashboardData:()=>Promise.resolve(),loadSystemHealth:()=>Promise.resolve({}),loadSystemStats:()=>Promise.resolve({}),loadActivityLog:()=>Promise.resolve([]),runDiagnostics:()=>Promise.resolve({}),refreshData:()=>Promise.resolve(),clearCacheAndReload:()=>Promise.resolve(),isHealthy:()=>!0,clearError:()=>{},manager:null},[f,p]=(0,t.useState)(!1);(0,t.useEffect)(()=>{const e=setTimeout(()=>{(s||l)&&(console.log("DashboardZone: Falling back to mock data"),p(!0))},1e4);return()=>clearTimeout(e)},[s,l]);const h={mode:n||"development",onlineUsers:12,lastUpdated:(new Date).toLocaleTimeString()},m=[{timestamp:(new Date).toLocaleTimeString(),type:"info",message:"Dashboard initialized - simplified authority system",source:"SystemManager"}],g=f?h:r,b=f?{connected:!1,connectionId:null,lastPing:null,onlineUsers:0}:i,y=f?[{label:"Mode",value:"DEVELOPMENT",status:"good"},{label:"CPU Usage",value:"23%",status:"good"},{label:"Memory Usage",value:"67%",status:"warning"},{label:"Active Users",value:"12",status:"good"},{label:"Response Time",value:"89ms",status:"good"},{label:"WebSocket",value:"Offline",status:"warning"}]:o,x=f?m:a,v=async()=>{try{await c(),p(!1)}catch(nh){console.error("Dashboard refresh failed:",nh)}},w=[{id:"system-tests",title:"System Tests",icon:"\ud83e\uddea",description:"Run system tests and diagnostics.",path:"/dashboard/tests",enabled:!0,status:d?"online":"warning"},{id:"user-statistics",title:"User Statistics",icon:"\ud83d\udc65",description:"View user statistics and activity.",path:"/dashboard/users",enabled:!0,status:"online"},{id:"websocket-tools",title:"WebSocket Tools",icon:"\ud83d\udd0c",description:"WebSocket connection testing.",path:"/dashboard/websocket",enabled:!0,status:b.connected?"online":"warning"},{id:"system-tools",title:"System Tools",icon:"\ud83d\udd27",description:"General system management tools.",path:"/dashboard/system",enabled:"development"===g.mode||"production"===g.mode,status:"online"},{id:"database-tools",title:"Database Tools",icon:"\ud83d\uddc4\ufe0f",description:"Database management and queries.",path:"/dashboard/database",enabled:"demo"!==g.mode,status:"online"}],S=t=>{t.enabled?(console.log(`Opening ${t.title}`),"system-tests"===t.id?async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"basic";try{await u(e)}catch(nh){console.error("System test failed:",nh)}}("basic"):"user-statistics"===t.id?v():"websocket-tools"===t.id?b.connected?console.log(`WebSocket active: ${b.connectionId}`):console.log("WebSocket offline - attempting connection..."):e(t.path)):(console.log(`${t.title} not available in ${g.mode} mode`),alert(`${t.title} is not available in ${g.mode} mode!`))};return(0,Jt.jsxs)(Od,{children:[(0,Jt.jsxs)(zd,{children:[(0,Jt.jsx)(od,{color:"dashboard",children:"DASHBOARD"}),(0,Jt.jsxs)(Md,{children:["System monitoring and management tools. Mode: ",(0,Jt.jsx)("strong",{children:g.mode.toUpperCase()}),"| WebSocket: ",(0,Jt.jsx)("strong",{children:b.connected?"Connected":"Offline"}),"| Users: ",(0,Jt.jsx)("strong",{children:g.onlineUsers}),"| Updated: ",g.lastUpdated,f&&(0,Jt.jsxs)("div",{style:{color:"#ff9800",fontSize:"0.9em",marginTop:"0.5rem"},children:["[Demo Mode - Backend nicht verf\xfcgbar]",(0,Jt.jsx)(Jd,{onClick:v,disabled:s,children:"Backend versuchen"})]}),d&&(0,Jt.jsxs)("div",{style:{color:"#2ed573",fontSize:"0.9em",marginTop:"0.5rem"},children:["[Live Data - Backend verbunden]",(0,Jt.jsx)(Jd,{onClick:v,disabled:s,children:"Aktualisieren"})]})]})]}),l&&!f&&(0,Jt.jsxs)(Xd,{children:[(0,Jt.jsx)("strong",{children:"Fehler:"})," ",l,(0,Jt.jsx)(Jd,{onClick:v,disabled:s,children:"Erneut versuchen"})]}),s&&!f&&(0,Jt.jsx)(Qd,{children:"Lade Dashboard-Daten vom Backend..."}),(0,Jt.jsx)(Hd,{children:y.map((e,t)=>(0,Jt.jsxs)(Gd,{children:[(0,Jt.jsx)(Wd,{status:e.status,children:e.value}),(0,Jt.jsx)(Yd,{children:e.label})]},t))}),(0,Jt.jsx)(Dd,{children:w.map(e=>(0,Jt.jsxs)(Id,{enabled:e.enabled,onClick:()=>S(e),children:[(0,Jt.jsx)(Bd,{status:e.status}),(0,Jt.jsx)(Ud,{children:e.icon}),(0,Jt.jsx)(Fd,{enabled:e.enabled,children:e.title})]},e.id))}),(0,Jt.jsxs)(qd,{children:[(0,Jt.jsxs)(Vd,{children:["System Activity Log",(0,Jt.jsxs)("div",{style:{fontSize:"0.8em",color:"#888",marginTop:"0.5rem"},children:["Auto-refresh: 30s | Mode: ",g.mode," | WebSocket: ",b.connected?"Connected":"Offline"," | Entries: ",x.length]})]}),x.slice(0,10).map((e,t)=>(0,Jt.jsxs)(Kd,{type:e.type,children:["[",new Date(e.timestamp).toLocaleTimeString(),"] ",e.message]},t)),0===x.length&&(0,Jt.jsx)(Kd,{type:"info",children:"No recent activity to display."})]}),(0,Jt.jsx)(ad,{...sd()})]})},ef={small:{width:640,height:480,label:"Small (640\xd7480)"},medium:{width:800,height:600,label:"Medium (800\xd7600)"},large:{width:960,height:720,label:"Large (960\xd7720)"},fullscreen:{width:1200,height:800,label:"Fullscreen (1200\xd7800)"},truefullscreen:{get width(){return window.innerWidth},get height(){return window.innerHeight},label:"\ud83d\ude80 True Fullscreen (Auto)"}},tf={slow:{multiplier:1.5,label:"Slow (Beginner)"},normal:{multiplier:1,label:"Normal"},fast:{multiplier:.7,label:"Fast (Expert)"}},nf=[{value:15,label:"Fine (15px)"},{value:20,label:"Normal (20px)"},{value:25,label:"Large (25px)"},{value:30,label:"Extra Large (30px)"}],rf={canvasSize:"large",gameSpeed:"normal",gridSize:20,debugMode:!1,hudPosition:"both"},of=Qi.div`
  min-height: ${e=>e.$fullscreen?"100vh":"calc(100vh - 4rem)"};
  background: ${la.colors.backgroundGradient};
  color: ${la.colors.textPrimary};
  font-family: ${la.fonts.retro};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,af=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 2px solid ${la.colors.neonCyan};
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  
  @media (max-width: ${la.breakpoints.mobile}) {
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`,sf=Qi.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: ${la.breakpoints.mobile}) {
    align-items: center;
    text-align: center;
  }
`,lf=Qi.h1`
  font-size: ${la.fonts.sizes.xxl};
  font-weight: bold;
  color: ${la.colors.neonCyan};
  text-shadow: ${la.shadows.text.strong};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0;
  
  @media (max-width: ${la.breakpoints.mobile}) {
    font-size: ${la.fonts.sizes.xl};
  }
`,cf=Qi.h2`
  font-size: ${la.fonts.sizes.md};
  color: ${la.colors.neonGreen};
  text-shadow: ${la.shadows.text.subtle};
  margin: 0.25rem 0 0 0;
  font-weight: normal;
  
  @media (max-width: ${la.breakpoints.mobile}) {
    font-size: ${la.fonts.sizes.sm};
  }
`,uf=(Qi.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: ${la.breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`,Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  border: ${e=>"top"===e.$position?"0 0 2px 0 solid "+la.colors.neonGreen:"2px 0 0 0 solid "+la.colors.neonGreen};
  box-shadow: ${e=>"top"===e.$position?"0 2px 20px rgba(0, 255, 0, 0.3)":"0 -2px 20px rgba(0, 255, 0, 0.3)"};
  
  @media (max-width: ${la.breakpoints.mobile}) {
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }
`),df=Qi.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: ${la.breakpoints.mobile}) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`,ff=Qi.div`
  flex: 1;
  display: flex;
  ${e=>e.$centered&&"\n    justify-content: center;\n    align-items: center;\n  "}
  padding: 1rem;
  position: relative;
  
  @media (max-width: ${la.breakpoints.mobile}) {
    padding: 0.5rem;
  }
`,pf=Qi.div`
  width: 100%;
  height: 100%;
  
  ${e=>e.$centered&&"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  "}
  
  ${e=>"truefullscreen"===e.$canvasSize&&"\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    z-index: 1 !important;\n    background: black !important;\n    \n    canvas {\n      width: 100vw !important;\n      height: 100vh !important;\n      max-width: 100vw !important;\n      max-height: 100vh !important;\n      object-fit: contain !important;\n      border: none !important;\n      border-radius: 0 !important;\n    }\n  "}
  
  ${e=>"fullscreen"===e.$canvasSize&&"\n    canvas {\n      max-width: 95vw;\n      max-height: 70vh;\n    }\n  "}
  
  canvas {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
  }
`,hf=Qi.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 15000;
  display: ${e=>e.$show?"flex":"none"};
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
`,mf=Qi.div`
  background: linear-gradient(135deg, rgba(0, 20, 40, 0.95), rgba(0, 40, 60, 0.95));
  border: 3px solid #00ffff;
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.5),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
  
  h3 {
    color: #00ffff;
    text-align: center;
    margin: 0 0 30px 0;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-shadow: 0 0 10px #00ffff;
  }
`,gf=Qi.div`
  display: ${e=>e.$show?"block":"none"};
  margin-bottom: 25px;
  
  h4 {
    color: #00ff00;
    margin: 0 0 15px 0;
    font-size: 1.2rem;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(0, 255, 0, 0.3);
    padding-bottom: 5px;
  }
`,bf=Qi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  
  label {
    color: #ffffff;
    font-weight: bold;
    font-size: 0.9rem;
    min-width: 120px;
  }
`,yf=Qi.div`
  flex: 1;
  margin-left: 20px;
  
  select {
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid #00ffff;
    border-radius: 8px;
    color: #ffffff;
    padding: 10px 15px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    cursor: pointer;
    
    &:focus {
      outline: none;
      border-color: #00ff00;
      box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
    }
    
    option {
      background: #000;
      color: #fff;
      padding: 10px;
    }
  }
`,xf=Qi.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin-left: 20px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.$checked?"#00ff00":"#333"};
    border: 2px solid ${e=>e.$checked?"#00ff00":"#666"};
    border-radius: 30px;
    transition: all 0.3s ease;
    
    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: ${e=>e.$checked?"32px":"2px"};
      bottom: 2px;
      background: white;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
  }
  
  &:hover span {
    box-shadow: 0 0 10px ${e=>e.$checked?"#00ff00":"#666"};
  }
`,vf=Qi.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 255, 255, 0.3);
`,wf=(Qi.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10001;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 200, 255, 0.3));
  border: 2px solid #00ffff;
  border-radius: 8px;
  color: #00ffff;
  padding: 12px 20px;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 255, 255, 0.4), rgba(0, 200, 255, 0.5));
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,Qi.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10001;
  display: flex;
  flex-direction: row; /* Von column zu row geändert */
  gap: 12px;
`),Sf=Qi.button`
  background: ${e=>{switch(e.$variant){case"danger":return"linear-gradient(135deg, rgba(255, 50, 50, 0.2), rgba(200, 0, 0, 0.3))";case"secondary":return"linear-gradient(135deg, rgba(100, 100, 100, 0.2), rgba(150, 150, 150, 0.3))";default:return"linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 200, 255, 0.3))"}}};
  border: 2px solid ${e=>{switch(e.$variant){case"danger":return"#ff3333";case"secondary":return"#888888";default:return"#00ffff"}}};
  border-radius: 8px;
  color: ${e=>{switch(e.$variant){case"danger":return"#ff3333";case"secondary":return"#cccccc";default:return"#00ffff"}}};
  padding: 12px 20px;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  min-width: 120px;
  text-align: center;
  
  &:hover {
    background: ${e=>{switch(e.$variant){case"danger":return"linear-gradient(135deg, rgba(255, 50, 50, 0.4), rgba(200, 0, 0, 0.5))";case"secondary":return"linear-gradient(135deg, rgba(100, 100, 100, 0.4), rgba(150, 150, 150, 0.5))";default:return"linear-gradient(135deg, rgba(0, 255, 255, 0.4), rgba(0, 200, 255, 0.5))"}}};
    box-shadow: 0 0 20px ${e=>{switch(e.$variant){case"danger":return"rgba(255, 51, 51, 0.6)";case"secondary":return"rgba(136, 136, 136, 0.6)";default:return"rgba(0, 255, 255, 0.6)"}}};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,kf=e=>{let{gameTitle:n,gameSubtitle:r,gameArea:i,hud:o,customHUD:a,showExitButton:s=!0,showPauseButton:l=!1,showRestartButton:c=!1,exitRoute:u,onPause:d,onRestart:f,onExit:p,fullscreen:h=!1,centered:m=!0,hudPosition:g,gameSettings:b=rf,enableSettingsPanel:y=!0,enableCanvasSettings:x=!0,enableSpeedSettings:v=!0,enableGridSettings:w=!0,enableDebugSettings:S=!0,enableHUDSettings:k=!0,onSettingsChange:E,onCanvasSizeChange:C,onGameSpeedChange:j,onGridSizeChange:P,onDebugModeChange:_,onHUDPositionChange:A,canvasElement:T,className:R,gameAreaClassName:N,onGameCleanup:L,gameLoopRef:$,isAdmin:O=!1,gameMode:z="singleplayer"}=e;const M=Fe(),D=v&&"multiplayer"!==z,I=S&&O,U=k&&"arcade"!==z,[F,B]=(0,t.useState)(b),[H,G]=(0,t.useState)(!1),[W,Y]=(0,t.useState)(!1),q=g||F.hudPosition;(0,t.useEffect)(()=>{B(b)},[b]),(0,t.useEffect)(()=>{if("truefullscreen"===F.canvasSize){const e=()=>{null!==T&&void 0!==T&&T.current&&(T.current.width=window.innerWidth,T.current.height=window.innerHeight)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[F.canvasSize,T]);const V=(e,t)=>{const n={...F,[e]:t};B(n),Y(!0)},K=()=>a||(o?(0,Jt.jsxs)(df,{children:[o.score&&!1!==o.score.visible&&(0,Jt.jsxs)("div",{style:{color:"#ffff00",fontWeight:"bold",textShadow:"0 0 10px #ffff00"},children:[o.score.label||"Score",": ",o.score.value.toLocaleString()]}),o.lives&&!1!==o.lives.visible&&(0,Jt.jsxs)("div",{style:{color:"#ff6b6b",fontWeight:"bold",textShadow:"0 0 10px #ff6b6b"},children:[o.lives.label||"Lives",": ",o.lives.value]}),o.level&&!1!==o.level.visible&&(0,Jt.jsxs)("div",{style:{color:"#00ff00",fontWeight:"bold",textShadow:"0 0 10px #00ff00"},children:[o.level.label||"Level",": ",o.level.value]}),o.time&&!1!==o.time.visible&&(0,Jt.jsxs)("div",{style:{color:"#00ffff",fontWeight:"bold",textShadow:"0 0 10px #00ffff"},children:[o.time.label||"Time",": ",o.time.value]}),o.custom&&o.custom.map((e,t)=>(0,Jt.jsxs)("div",{style:{color:e.customColor||"#00ffff",fontWeight:"bold",textShadow:"0 0 10px "+(e.customColor||"#00ffff")},children:[e.label,": ",e.value]},t))]}):null);return(0,Jt.jsxs)(of,{$fullscreen:h||"truefullscreen"===F.canvasSize,className:R,children:[(0,Jt.jsx)(af,{children:(0,Jt.jsxs)(sf,{children:[(0,Jt.jsx)(lf,{children:n}),r&&(0,Jt.jsx)(cf,{children:r})]})}),("top"===q||"both"===q)&&(o||a)&&(0,Jt.jsx)(uf,{$position:"top",children:K()}),y&&(0,Jt.jsxs)(Jt.Fragment,{children:[(0,Jt.jsxs)(wf,{children:[(0,Jt.jsxs)(Sf,{$variant:"primary",onClick:()=>G(!H),children:["\u2699\ufe0f Settings ",W&&"*"]}),l&&(0,Jt.jsx)(Sf,{$variant:"secondary",onClick:d,children:"\u23f8\ufe0f Pause"}),c&&(0,Jt.jsx)(Sf,{$variant:"secondary",onClick:f,children:"\ud83d\udd04 Restart"}),s&&(0,Jt.jsx)(Sf,{$variant:"danger",onClick:()=>{if(console.log("Exit button clicked - starting cleanup"),L&&(console.log("Executing game cleanup..."),L()),null!==$&&void 0!==$&&$.current&&(console.log("Stopping game loop..."),clearTimeout($.current),$.current=void 0),null!==T&&void 0!==T&&T.current){console.log("Cleaning canvas...");const e=T.current.getContext("2d");e&&e.clearRect(0,0,T.current.width,T.current.height)}setTimeout(()=>{console.log("Navigating to /singleplayer..."),M("/singleplayer")},100)},children:"\u274c Exit"})]}),(0,Jt.jsx)(hf,{$show:H,children:(0,Jt.jsxs)(mf,{children:[(0,Jt.jsx)("h3",{children:"\ud83c\udfae Game Settings"}),(0,Jt.jsxs)(gf,{$show:x,children:[(0,Jt.jsx)("h4",{children:"\ud83d\udda5\ufe0f Display"}),(0,Jt.jsxs)(bf,{children:[(0,Jt.jsx)("label",{children:"Canvas Size:"}),(0,Jt.jsx)(yf,{children:(0,Jt.jsx)("select",{value:F.canvasSize,onChange:e=>V("canvasSize",e.target.value),children:Object.entries(ef).map(e=>{let[t,n]=e;return(0,Jt.jsx)("option",{value:t,children:n.label},t)})})})]})]}),(0,Jt.jsxs)(gf,{$show:D,children:[(0,Jt.jsx)("h4",{children:"\u26a1 Performance"}),(0,Jt.jsxs)(bf,{children:[(0,Jt.jsx)("label",{children:"Game Speed:"}),(0,Jt.jsx)(yf,{children:(0,Jt.jsx)("select",{value:F.gameSpeed,onChange:e=>V("gameSpeed",e.target.value),children:Object.entries(tf).map(e=>{let[t,n]=e;return(0,Jt.jsx)("option",{value:t,children:n.label},t)})})})]})]}),(0,Jt.jsxs)(gf,{$show:w,children:[(0,Jt.jsx)("h4",{children:"\ud83d\udccf Grid"}),(0,Jt.jsxs)(bf,{children:[(0,Jt.jsx)("label",{children:"Grid Size:"}),(0,Jt.jsx)(yf,{children:(0,Jt.jsx)("select",{value:F.gridSize,onChange:e=>V("gridSize",parseInt(e.target.value)),children:nf.map(e=>(0,Jt.jsx)("option",{value:e.value,children:e.label},e.value))})})]})]}),(0,Jt.jsxs)(gf,{$show:U,children:[(0,Jt.jsx)("h4",{children:"\ud83d\udcca Interface"}),(0,Jt.jsxs)(bf,{children:[(0,Jt.jsx)("label",{children:"HUD Position:"}),(0,Jt.jsx)(yf,{children:(0,Jt.jsxs)("select",{value:F.hudPosition,onChange:e=>V("hudPosition",e.target.value),children:[(0,Jt.jsx)("option",{value:"top",children:"Top Only"}),(0,Jt.jsx)("option",{value:"bottom",children:"Bottom Only"}),(0,Jt.jsx)("option",{value:"both",children:"Top & Bottom"})]})})]})]}),(0,Jt.jsxs)(gf,{$show:I,children:[(0,Jt.jsx)("h4",{children:"\ud83d\udc1b Debug"}),(0,Jt.jsxs)(bf,{children:[(0,Jt.jsx)("label",{children:"Debug Mode:"}),(0,Jt.jsxs)(xf,{$checked:F.debugMode,children:[(0,Jt.jsx)("input",{type:"checkbox",checked:F.debugMode,onChange:e=>V("debugMode",e.target.checked)}),(0,Jt.jsx)("span",{})]})]})]}),(0,Jt.jsxs)(vf,{children:[(0,Jt.jsx)(fa,{variant:"success",onClick:()=>{null!==T&&void 0!==T&&T.current&&"truefullscreen"===F.canvasSize&&(T.current.width=window.innerWidth,T.current.height=window.innerHeight),E&&E(F),C&&C(F.canvasSize),j&&j(F.gameSpeed),P&&P(F.gridSize),_&&_(F.debugMode),A&&A(F.hudPosition),Y(!1),G(!1)},disabled:!W,children:"\u2705 APPLY"}),(0,Jt.jsx)(fa,{variant:"secondary",onClick:()=>{B(rf),Y(!0)},children:"\ud83d\udd04 RESET"}),(0,Jt.jsx)(fa,{variant:"danger",onClick:()=>{B(b),Y(!1),G(!1)},children:"\u274c CANCEL"})]})]})})]}),(0,Jt.jsx)(ff,{$centered:m,children:(0,Jt.jsx)(pf,{$centered:m,$canvasSize:F.canvasSize,className:N,children:i})}),("bottom"===q||"both"===q)&&(o||a)&&(0,Jt.jsx)(uf,{$position:"bottom",children:K()})]})},Ef=()=>{const[e,n]=t.useState(0),[r,i]=t.useState(3),[o,a]=t.useState(1),[s,l]=t.useState("00:00");return{hud:{score:{value:e,visible:!0},lives:{value:r,visible:!0},level:{value:o,visible:!0},time:{value:s,visible:!0}},score:e,setScore:n,lives:r,setLives:i,level:o,setLevel:a,time:s,setTime:l}},Cf=Zi`
  0%, 100% { color: #ff0000; text-shadow: 0 0 10px #ff0000; }
  50% { color: #ff6666; text-shadow: 0 0 20px #ff6666, 0 0 30px #ff6666; }
`,jf=Qi.canvas`
  background: #000;
  border: 2px solid #00ff00;
  border-radius: 8px;
  display: block;
  
  /* Grid overlay basierend auf aktueller gridSize */
  background-image: 
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: ${e=>e.$gridSize}px ${e=>e.$gridSize}px;
`,Pf=Qi.div`
  color: #00ffff;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {
    color: #ffff00;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }
  
  p {
    margin: 10px 0;
    line-height: 1.6;
  }
`,_f=Qi.div`
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff0000;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  animation: ${Cf} 2s infinite;
  color: #ff0000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {
    margin-bottom: 15px;
    font-size: 1.8rem;
    color: #ff0000;
  }
  
  p {
    color: #00ffff;
    margin: 10px 0;
    font-size: 1.2rem;
  }
  
  .high-score-notice {
    background: rgba(255, 215, 0, 0.2);
    border: 1px solid #ffd700;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    color: #ffd700;
    font-weight: bold;
  }
`,Af=Qi.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
`,Tf=Qi.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  border-radius: 5px;
  padding: 10px;
  color: #ff0000;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  display: ${e=>e.$show?"block":"none"};
  z-index: 10;
  max-width: 300px;
`,Rf={small:{width:640,height:480},medium:{width:800,height:600},large:{width:960,height:720},fullscreen:{width:1200,height:800},truefullscreen:{get width(){return window.innerWidth},get height(){return window.innerHeight},label:"\ud83d\ude80 True Fullscreen (Auto)"}},Nf={slow:1.5,normal:1,fast:.7},Lf="#000",$f="#00ff00",Of="#00ff88",zf="#ff0000",Mf=()=>{const e=Fe(),n=(e=>{const[n,r]=(0,t.useState)({...rf,...e});return{settings:n,setSettings:r,updateSetting:(e,t)=>{r(n=>({...n,[e]:t}))},canvasSize:n.canvasSize,gameSpeed:n.gameSpeed,gridSize:n.gridSize,debugMode:n.debugMode,hudPosition:n.hudPosition}})({canvasSize:"large",gameSpeed:"normal",gridSize:20,debugMode:!1,hudPosition:"both"}),{settings:r,updateSetting:i}=n,{hud:o,setScore:a,setLives:s}=Ef(),[l,c]=(0,t.useState)("idle"),[u,d]=(0,t.useState)(!1),[f,p]=(0,t.useState)([]),h=Rf[r.canvasSize].width,m=Rf[r.canvasSize].height,g=Math.floor(h/r.gridSize),b=Math.floor(m/r.gridSize),y=Math.round(150*Nf[r.gameSpeed]),[x,v]=(0,t.useState)({snake:[{x:10,y:10}],food:{x:15,y:15},direction:"RIGHT",score:0,gameRunning:!1,level:1,speed:y}),w=(0,t.useRef)(null),S=(0,t.useRef)(void 0),{recordGameResult:k,isLoggedIn:E,currentUser:C}=Xt(),j=(0,t.useCallback)(e=>{const t=Math.round(150*Nf[e.gameSpeed]);if(w.current){const t=Rf[e.canvasSize].width,n=Rf[e.canvasSize].height;w.current.width=t,w.current.height=n}v(e=>({...e,speed:t})),"idle"!==l&&$(),P(`Settings changed: ${e.canvasSize}, ${e.gameSpeed}, ${e.gridSize}px`)},[l]),P=(0,t.useCallback)(e=>{if(!r.debugMode)return;const t=(new Date).toLocaleTimeString();p(n=>[...n.slice(-4),`${t}: ${e}`]),console.log(`\ud83d\udc0d ${t}: ${e}`)},[r.debugMode]),_=(0,t.useCallback)(e=>{const t=t=>e.some(e=>e.x===t.x&&e.y===t.y);let n;do{n={x:Math.floor(Math.random()*g),y:Math.floor(Math.random()*b)}}while(t(n));return n},[g,b]),A=(0,t.useCallback)(()=>{"playing"===l?(c("paused"),v(e=>({...e,gameRunning:!1})),P("\u23f8\ufe0f Game paused")):"paused"===l&&(c("playing"),v(e=>({...e,gameRunning:!0})),P("\u25b6\ufe0f Game resumed"))},[l,P]),T=(0,t.useCallback)(async e=>{if(c("gameover"),E){const{newHighScore:t}=await k("snake",e);t&&(d(!0),P(`\ud83c\udfc6 NEW HIGH SCORE: ${e}!`))}},[E,k,P]),R=(0,t.useCallback)(()=>{x.gameRunning&&v(e=>{const t=[...e.snake],n={...t[0]};switch(e.direction){case"UP":n.y-=1;break;case"DOWN":n.y+=1;break;case"LEFT":n.x-=1;break;case"RIGHT":n.x+=1}if(n.x<0||n.x>=g||n.y<0||n.y>=b)return P("\ud83d\udca5 Wall collision - Game Over!"),T(e.score),{...e,gameRunning:!1};if(t.some(e=>e.x===n.x&&e.y===n.y))return P("\ud83d\udc0d Self collision - Game Over!"),T(e.score),{...e,gameRunning:!1};if(t.unshift(n),n.x===e.food.x&&n.y===e.food.y){const n=e.score+10,r=_(t),i=Math.floor(n/100)+1;return P(`\ud83c\udfaf Food eaten! Score: ${n}, Level: ${i}`),a(n),{...e,snake:t,food:r,score:n,level:i}}return t.pop(),{...e,snake:t}})},[x.gameRunning,_,T,P,a,g,b]),N=(0,t.useCallback)(()=>{const e=w.current;if(!e)return;const t=e.getContext("2d");t&&(t.fillStyle=Lf,t.fillRect(0,0,h,m),x.snake.forEach((e,n)=>{t.fillStyle=0===n?Of:$f,t.fillRect(e.x*r.gridSize+1,e.y*r.gridSize+1,r.gridSize-2,r.gridSize-2),0===n&&(t.fillStyle="rgba(255, 255, 255, 0.3)",t.fillRect(e.x*r.gridSize+1,e.y*r.gridSize+1,r.gridSize-2,4))}),t.fillStyle=zf,t.fillRect(x.food.x*r.gridSize+2,x.food.y*r.gridSize+2,r.gridSize-4,r.gridSize-4),t.fillStyle="rgba(255, 0, 0, 0.3)",t.fillRect(x.food.x*r.gridSize,x.food.y*r.gridSize,r.gridSize,r.gridSize))},[x,h,m,r.gridSize]);(0,t.useEffect)(()=>{const e=e=>{"Space"===e.code&&(e.preventDefault(),A());const t=e.key.toLowerCase();v(e=>{switch(t){case"arrowup":case"w":if("DOWN"!==e.direction)return P("\ud83d\udd3c Direction: UP"),{...e,direction:"UP"};break;case"arrowdown":case"s":if("UP"!==e.direction)return P("\ud83d\udd3d Direction: DOWN"),{...e,direction:"DOWN"};break;case"arrowleft":case"a":if("RIGHT"!==e.direction)return P("\u25c0\ufe0f Direction: LEFT"),{...e,direction:"LEFT"};break;case"arrowright":case"d":if("LEFT"!==e.direction)return P("\u25b6\ufe0f Direction: RIGHT"),{...e,direction:"RIGHT"}}return e})};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[l,A,P]),(0,t.useEffect)(()=>{if("playing"===l&&x.gameRunning){const e=()=>{R(),N(),S.current=setTimeout(e,x.speed)};return S.current=setTimeout(e,x.speed),()=>{S.current&&(clearTimeout(S.current),S.current=void 0)}}},[l,x.gameRunning,x.speed,R,N]),(0,t.useEffect)(()=>{w.current&&(w.current.width=h,w.current.height=m,N())},[h,m,N]),(0,t.useEffect)(()=>{v(e=>({...e,speed:y}))},[y]);const L=()=>{const e=_([{x:10,y:10}]);c("playing"),v({snake:[{x:10,y:10}],food:e,direction:"RIGHT",score:0,gameRunning:!0,level:1,speed:y}),d(!1),a(0),s(3),P("\ud83d\ude80 New Snake game started")},$=()=>{c("idle"),v({snake:[{x:10,y:10}],food:{x:15,y:15},direction:"RIGHT",score:0,gameRunning:!1,level:1,speed:y}),d(!1),a(0),S.current&&(clearTimeout(S.current),S.current=void 0),P("\ud83d\udd04 Game reset")},O={...o,score:{value:x.score,visible:!0},custom:[{type:"level",label:"Level",value:x.level,customColor:"#00ffff"},{type:"length",label:"Length",value:x.snake.length,customColor:"#00ff00"},{type:"speed",label:"Speed",value:r.gameSpeed.toUpperCase(),customColor:"#ffff00"}]};return(0,Jt.jsx)(kf,{gameTitle:"SNAKE",gameSubtitle:"\ud83c\udfae Retro Snake v3.0 \u2022 Central Settings \u2022 "+(E?`Player: ${null===C||void 0===C?void 0:C.username}`:"Guest Mode"),hud:O,showPauseButton:"playing"===l,showRestartButton:"gameover"===l,onPause:A,onRestart:L,onExit:()=>{$(),e("/games/singleplayer")},exitRoute:"/singleplayer",isAdmin:!1,gameMode:"singleplayer",gameSettings:r,enableSettingsPanel:!0,enableCanvasSettings:!0,enableSpeedSettings:!0,enableGridSettings:!0,enableDebugSettings:!0,enableHUDSettings:!0,onSettingsChange:j,canvasElement:w,gameArea:(0,Jt.jsxs)("div",{style:{position:"relative",width:"100%",height:"100%"},children:[r.debugMode&&(0,Jt.jsxs)(Tf,{$show:!0,children:[(0,Jt.jsx)("strong",{children:"\ud83d\udc1b DEBUG INFO:"}),(0,Jt.jsx)("br",{}),"Status: ",l,(0,Jt.jsx)("br",{}),"Direction: ",x.direction,(0,Jt.jsx)("br",{}),"Length: ",x.snake.length,(0,Jt.jsx)("br",{}),"Canvas: ",h,"x",m,(0,Jt.jsx)("br",{}),"Grid: ",r.gridSize,"px (",g,"x",b,")",(0,Jt.jsx)("br",{}),"Speed: ",r.gameSpeed," (",y,"ms)",(0,Jt.jsx)("br",{}),(0,Jt.jsx)("strong",{children:"Logs:"}),(0,Jt.jsx)("br",{}),f.map((e,t)=>(0,Jt.jsx)("div",{children:e},t))]}),"playing"===l?(0,Jt.jsx)(jf,{ref:w,width:h,height:m,$gridSize:r.gridSize}):"idle"===l?(0,Jt.jsxs)(Pf,{children:[(0,Jt.jsx)("h3",{children:"\ud83d\udc0d Snake Game"}),(0,Jt.jsx)("p",{children:"Classic snake with modern graphics!"}),(0,Jt.jsx)("p",{children:"\ud83c\udfaf Eat food to grow and increase score"}),(0,Jt.jsx)("p",{children:"\u26a1 Speed increases every 100 points"}),(0,Jt.jsx)("p",{children:"\ud83c\udfae Use WASD or Arrow Keys to control"}),(0,Jt.jsx)("p",{children:"Space: Pause/Resume"}),(0,Jt.jsx)(Af,{children:(0,Jt.jsx)(fa,{variant:"success",size:"lg",onClick:L,children:"\ud83d\ude80 START GAME"})}),(0,Jt.jsxs)("div",{style:{color:"#00ffff",fontSize:"0.8rem",marginTop:"20px",textAlign:"center"},children:[(0,Jt.jsx)("p",{children:"Use \u2699\ufe0f Settings (top right) to configure:"}),(0,Jt.jsxs)("p",{children:["Canvas: ",r.canvasSize," \u2022 Speed: ",r.gameSpeed," \u2022 Grid: ",r.gridSize,"px"]}),(0,Jt.jsxs)("p",{children:["Debug: ",r.debugMode?"ON":"OFF"," \u2022 HUD: ",r.hudPosition]})]})]}):"paused"===l?(0,Jt.jsxs)(Pf,{children:[(0,Jt.jsx)("h3",{children:"\u23f8\ufe0f GAME PAUSED"}),(0,Jt.jsxs)("p",{children:["Score: ",x.score]}),(0,Jt.jsxs)("p",{children:["Level: ",x.level]}),(0,Jt.jsxs)("p",{children:["Length: ",x.snake.length]}),(0,Jt.jsx)("p",{children:"Press SPACE to continue"})]}):"gameover"===l?(0,Jt.jsxs)(_f,{children:[(0,Jt.jsx)("h3",{children:"\ud83d\udc80 GAME OVER!"}),(0,Jt.jsxs)("p",{children:["Final Score: ",x.score]}),(0,Jt.jsxs)("p",{children:["Level Reached: ",x.level]}),(0,Jt.jsxs)("p",{children:["Snake Length: ",x.snake.length]}),u&&(0,Jt.jsx)("div",{className:"high-score-notice",children:"\ud83c\udfc6 NEW HIGH SCORE! \ud83c\udfc6"}),!E&&(0,Jt.jsx)("p",{style:{color:"#ff6b9d",fontSize:"0.9rem"},children:"\ud83d\udca1 Login to save your high scores!"}),(0,Jt.jsxs)(Af,{children:[(0,Jt.jsx)(fa,{variant:"success",onClick:L,children:"\ud83d\ude80 NEW GAME"}),(0,Jt.jsx)(fa,{variant:"secondary",onClick:$,children:"\ud83d\udd04 RESET"})]})]}):null]})})},Df={small:{width:8,height:16,cellSize:35},medium:{width:10,height:20,cellSize:30},large:{width:12,height:24,cellSize:25},fullscreen:{width:10,height:20,get cellSize(){const e=window.innerHeight-280;return Math.floor(e/20)}}},If={slow:{baseSpeed:1e3,speedIncrease:50},normal:{baseSpeed:800,speedIncrease:60},fast:{baseSpeed:600,speedIncrease:80},extreme:{baseSpeed:400,speedIncrease:100}},Uf={gridSize:"fullscreen",startLevel:1,gameSpeed:"normal",ghostPiece:!0,nextPiecePreview:!0,hudPosition:"both"};let Ff=10,Bf=20,Hf=Math.floor((window.innerHeight-250)/20),Gf=Ff*Hf+2,Wf=Bf*Hf+2;const Yf={I:{shape:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],color:"#00ffff"},O:{shape:[[1,1],[1,1]],color:"#ffff00"},T:{shape:[[0,1,0],[1,1,1],[0,0,0]],color:"#ff00ff"},S:{shape:[[0,1,1],[1,1,0],[0,0,0]],color:"#00ff00"},Z:{shape:[[1,1,0],[0,1,1],[0,0,0]],color:"#ff0000"},J:{shape:[[1,0,0],[1,1,1],[0,0,0]],color:"#0000ff"},L:{shape:[[0,0,1],[1,1,1],[0,0,0]],color:"#ffa500"}},qf=Qi.canvas`
  background: #000;
  border: 2px solid #00ffff;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  
  /* Grid overlay */
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: ${e=>Hf}px ${e=>Hf}px;
`,Vf=Qi.canvas`
  background: #000;
  border: 1px solid #ff6b9d;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
`,Kf=Qi.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,Qf=Qi.div`
  color: #00ffff;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {
    color: #ffff00;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }
  
  p {
    margin: 10px 0;
    line-height: 1.6;
  }
`,Xf=Qi.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
`,Jf=Qi.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  color: #ff0000;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  display: ${e=>e.$show?"block":"none"};
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  max-width: 300px;
`,Zf=Qi.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 20, 40, 0.95);
  border: 2px solid #00ffff;
  border-radius: 15px;
  padding: 30px;
  z-index: 20;
  display: ${e=>e.$show?"block":"none"};
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  
  h3 {
    color: #00ffff;
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`,ep=Qi.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    color: #00ff00;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  
  select, input {
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid #00ffff;
    border-radius: 8px;
    color: #ffffff;
    padding: 8px 12px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    
    &:focus {
      outline: none;
      border-color: #00ff00;
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    }
    
    option {
      background: #000;
      color: #fff;
    }
  }
  
  input[type="checkbox"] {
    width: auto;
    margin-right: 8px;
  }
`,tp=Qi.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`,np=Qi.div`
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff0000;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: #ff0000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {
    color: #ff0000;
    margin-bottom: 15px;
    font-size: 1.8rem;
  }
  
  p {
    color: #00ffff;
    margin: 10px 0;
    font-size: 1.2rem;
  }
  
  .high-score-notice {
    background: rgba(255, 215, 0, 0.2);
    border: 1px solid #ffd700;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    color: #ffd700;
    font-weight: bold;
  }
`,rp=Qi.div`
  text-align: center;
  
  h4 {
    color: #ff6b9d;
    margin-bottom: 10px;
    font-size: 1rem;
    text-transform: uppercase;
  }
`,ip=()=>{var e,n;const r=Fe(),{hud:i,setScore:o,setLives:a}=Ef(),[s,l]=(0,t.useState)("idle"),[c,u]=(0,t.useState)([]),[d,f]=(0,t.useState)({}),[p,h]=(0,t.useState)({}),[m,g]=(0,t.useState)(!1),[b,y]=(0,t.useState)(!1),[x,v]=(0,t.useState)(!1),[w,S]=(0,t.useState)(Uf),[k,E]=(0,t.useState)({grid:Array(Bf).fill(null).map(()=>Array(Ff).fill(null)),currentPiece:null,nextPiece:null,gameRunning:!1,stats:{score:0,level:1,lines:0,pieces:0},dropTime:1e3,lastDrop:0}),C=(0,t.useRef)(null),j=(0,t.useRef)(null),{recordGameResult:P,isLoggedIn:_,currentUser:A}=Xt(),T=e=>{const t=Df[e.gridSize];Ff=t.width,Bf=t.height,Hf=t.cellSize,Gf=Ff*Hf+2,Wf=Bf*Hf+2,console.log(`Tetris Fullscreen Debug: cellSize=${Hf}, canvas=${Gf}x${Wf}`),S(e),R(`Settings updated: ${e.gridSize}, Level: ${e.startLevel}, Speed: ${e.gameSpeed}`),setTimeout(()=>{C.current&&(C.current.width=Gf,C.current.height=Wf,F())},100),"idle"!==s&&G()};(0,t.useEffect)(()=>{C.current&&(C.current.width=Gf,C.current.height=Wf,F())},[w,Gf,Wf]);const R=e=>{const t=(new Date).toLocaleTimeString();u(n=>[...n.slice(-4),`${t}: ${e}`]),console.log(`\ud83e\udde9 ${t}: ${e}`)},N=(0,t.useCallback)(()=>{const e=Object.keys(Yf),t=e[Math.floor(Math.random()*e.length)],n=Yf[t];return{type:t,shape:n.shape,position:{x:Math.floor(Ff/2)-Math.floor(n.shape[0].length/2),y:0},color:n.color}},[]),L=(0,t.useCallback)(e=>{const t=e.length,n=e[0].length,r=Array(n).fill(null).map(()=>Array(t).fill(0));for(let i=0;i<t;i++)for(let o=0;o<n;o++)r[o][t-1-i]=e[i][o];return r},[]),$=(0,t.useCallback)(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=(arguments.length>4?arguments[4]:void 0)||e.shape,o=e.position.x+n,a=e.position.y+r;for(let s=0;s<i.length;s++)for(let e=0;e<i[s].length;e++)if(i[s][e]){const n=o+e,r=a+s;if(n<0||n>=Ff||r>=Bf)return!0;if(r>=0&&t[r][n])return!0}return!1},[]),O=(0,t.useCallback)((e,t)=>{const n=t.map(e=>[...e]);for(let r=0;r<e.shape.length;r++)for(let t=0;t<e.shape[r].length;t++)if(e.shape[r][t]){const i=e.position.x+t,o=e.position.y+r;o>=0&&(n[o][i]=e.color)}return n},[]),z=(0,t.useCallback)(e=>{const t=[];let n=0;for(let r=Bf-1;r>=0;r--){e[r].every(e=>null!==e)?n++:t.unshift(e[r])}for(;t.length<Bf;)t.unshift(Array(Ff).fill(null));return n>0&&R(`\ud83c\udf89 Cleared ${n} line(s)!`),{newGrid:t,linesCleared:n}},[]),M=(0,t.useCallback)((e,t)=>[0,100,300,500,800][e]*t,[]),D=(0,t.useCallback)(async()=>{if(l("gameover"),_){const e=k.stats.score,{newHighScore:t}=await P("tetris",e);t&&(g(!0),R(`\ud83c\udfc6 NEW HIGH SCORE: ${e}!`))}R("\ud83d\udc80 Game Over!")},[_,P,k.stats.score]),I=(0,t.useCallback)((e,t)=>{if(!w.ghostPiece)return e.position.y;let n=e.position.y;for(;!$(e,t,0,n-e.position.y+1);)n++;return n},[w.ghostPiece,$]),U=(0,t.useCallback)(()=>{if(!k.gameRunning||!k.currentPiece)return;const e=Date.now();E(t=>{let n={...t};if(d.arrowleft&&!$(t.currentPiece,t.grid,-1,0)&&(n.currentPiece={...t.currentPiece,position:{...t.currentPiece.position,x:t.currentPiece.position.x-1}}),d.arrowright&&!$(t.currentPiece,t.grid,1,0)&&(n.currentPiece={...t.currentPiece,position:{...t.currentPiece.position,x:t.currentPiece.position.x+1}}),d.arrowdown&&!$(t.currentPiece,t.grid,0,1)&&(n.currentPiece={...t.currentPiece,position:{...t.currentPiece.position,y:t.currentPiece.position.y+1}},n.stats={...t.stats,score:t.stats.score+1},o(n.stats.score)),e-t.lastDrop>=t.dropTime){if($(t.currentPiece,t.grid,0,1)){const e=O(t.currentPiece,t.grid),{newGrid:r,linesCleared:i}=z(e),a=M(i,t.stats.level),s=t.stats.lines+i,l=Math.floor(s/10)+w.startLevel,c=If[w.gameSpeed],u=Math.max(50,c.baseSpeed-(l-1)*c.speedIncrease),d=t.nextPiece||N(),f=N();if($(d,r))return setTimeout(()=>D(),100),{...t,gameRunning:!1};const p=t.stats.score+a;o(p),n={...n,grid:r,currentPiece:d,nextPiece:f,stats:{score:p,level:l,lines:s,pieces:t.stats.pieces+1},dropTime:u},i>0&&R(`\ud83d\udcc8 Score: +${a}, Level: ${l}`)}else n.currentPiece={...t.currentPiece,position:{...t.currentPiece.position,y:t.currentPiece.position.y+1}};n.lastDrop=e}return n})},[d,$,O,z,M,N,k.gameRunning,k.currentPiece,D,w.startLevel,w.gameSpeed,o]),F=(0,t.useCallback)(()=>{const e=C.current;if(!e)return;const t=e.getContext("2d");if(t){t.fillStyle="#000",t.fillRect(0,0,Gf,Wf),t.strokeStyle="#333",t.lineWidth=1;for(let e=0;e<=Ff;e++)t.beginPath(),t.moveTo(e*Hf+1,1),t.lineTo(e*Hf+1,Wf-1),t.stroke();for(let e=0;e<=Bf;e++)t.beginPath(),t.moveTo(1,e*Hf+1),t.lineTo(Gf-1,e*Hf+1),t.stroke();for(let e=0;e<Bf;e++)for(let n=0;n<Ff;n++){const r=k.grid[e][n];r&&(t.fillStyle=r,t.fillRect(n*Hf+2,e*Hf+2,Hf-2,Hf-2),t.fillStyle="rgba(255, 255, 255, 0.3)",t.fillRect(n*Hf+2,e*Hf+2,Hf-2,4))}if(k.currentPiece&&w.ghostPiece){const e=I(k.currentPiece,k.grid);if(e!==k.currentPiece.position.y){t.fillStyle="rgba(255, 255, 255, 0.2)";for(let n=0;n<k.currentPiece.shape.length;n++)for(let r=0;r<k.currentPiece.shape[n].length;r++)if(k.currentPiece.shape[n][r]){const i=k.currentPiece.position.x+r,o=e+n;o>=0&&(t.fillRect(i*Hf+2,o*Hf+2,Hf-2,Hf-2),t.strokeStyle="rgba(255, 255, 255, 0.5)",t.strokeRect(i*Hf+2,o*Hf+2,Hf-2,Hf-2))}}}if(k.currentPiece){t.fillStyle=k.currentPiece.color;for(let e=0;e<k.currentPiece.shape.length;e++)for(let n=0;n<k.currentPiece.shape[e].length;n++)if(k.currentPiece.shape[e][n]){const r=k.currentPiece.position.x+n,i=k.currentPiece.position.y+e;i>=0&&(t.fillRect(r*Hf+2,i*Hf+2,Hf-2,Hf-2),t.fillStyle="rgba(255, 255, 255, 0.5)",t.fillRect(r*Hf+2,i*Hf+2,Hf-2,4),t.fillStyle=k.currentPiece.color)}}}},[k.grid,k.currentPiece,w.ghostPiece,I]),B=(0,t.useCallback)(()=>{const e=j.current;if(!e||!k.nextPiece||!w.nextPiecePreview)return;const t=e.getContext("2d");if(!t)return;t.fillStyle="#000",t.fillRect(0,0,e.width,e.height);const n=k.nextPiece.shape,r=20*n[0].length,i=20*n.length,o=(e.width-r)/2,a=(e.height-i)/2;t.fillStyle=k.nextPiece.color;for(let s=0;s<n.length;s++)for(let e=0;e<n[s].length;e++)n[s][e]&&(t.fillRect(o+20*e,a+20*s,18,18),t.fillStyle="rgba(255, 255, 255, 0.3)",t.fillRect(o+20*e,a+20*s,18,3),t.fillStyle=k.nextPiece.color)},[k.nextPiece,w.nextPiecePreview]);(0,t.useEffect)(()=>{const e=e=>{const t=e.key.toLowerCase(),n=Date.now();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(t)&&e.preventDefault(),!(!["arrowup"," "].includes(t)&&p[t]&&n-p[t]<150)&&!(!["arrowup"," "].includes(t)&&p[t]&&n-p[t]<150)&&(f(e=>({...e,[t]:!0})),h(e=>({...e,[t]:n})),"playing"===s&&k.currentPiece))if("arrowup"===t){const e=L(k.currentPiece.shape);$(k.currentPiece,k.grid,0,0,e)||(E(t=>({...t,currentPiece:t.currentPiece?{...t.currentPiece,shape:e}:null})),R("\ud83d\udd04 Piece rotated"))}else if(" "===t){let e=0;for(;!$(k.currentPiece,k.grid,0,e+1);)e++;e>0&&(E(t=>({...t,currentPiece:t.currentPiece?{...t.currentPiece,position:{...t.currentPiece.position,y:t.currentPiece.position.y+e}}:null,stats:{...t.stats,score:t.stats.score+2*e}})),R("\u2b07\ufe0f Hard drop"))}},t=e=>{f(t=>({...t,[e.key.toLowerCase()]:!1}))};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}},[s,k.currentPiece,k.grid,p,L,$]),(0,t.useEffect)(()=>{if("playing"===s&&k.gameRunning){const e=setInterval(()=>{U()},50);return()=>clearInterval(e)}},[s,k.gameRunning,U]),(0,t.useEffect)(()=>{"idle"!==s&&(F(),B())},[k,s,F,B]);const H=()=>{const e=N(),t=N(),n=If[w.gameSpeed];l("playing"),E({grid:Array(Bf).fill(null).map(()=>Array(Ff).fill(null)),currentPiece:e,nextPiece:t,gameRunning:!0,stats:{score:0,level:w.startLevel,lines:0,pieces:0},dropTime:n.baseSpeed,lastDrop:Date.now()}),g(!1),o(0),a(3),R(`\ud83d\ude80 New Tetris game started (Level ${w.startLevel})`)},G=()=>{l("idle"),E({grid:Array(Bf).fill(null).map(()=>Array(Ff).fill(null)),currentPiece:null,nextPiece:null,gameRunning:!1,stats:{score:0,level:1,lines:0,pieces:0},dropTime:1e3,lastDrop:0}),g(!1),o(0),R("\ud83d\udd04 Game reset")},W=()=>`${(k.dropTime/1e3).toFixed(1)}s`,Y={...i,score:{value:k.stats.score,visible:!0},custom:[{type:"level",label:"Level",value:k.stats.level,customColor:"#00ffff"},{type:"lines",label:"Lines",value:k.stats.lines,customColor:"#00ff00"},{type:"pieces",label:"Pieces",value:k.stats.pieces,customColor:"#ffff00"},{type:"speed",label:"Speed",value:W(),customColor:"#ff6b6b"}]};return(0,Jt.jsx)(kf,{gameTitle:"TETRIS",gameSubtitle:`\ud83e\udde9 Classic Block Puzzle \u2022 ${w.gridSize.toUpperCase()} Grid \u2022 ${_?`Player: ${null===A||void 0===A?void 0:A.username}`:"Not logged in"}`,hud:Y,showPauseButton:"playing"===s,showRestartButton:"gameover"===s,onPause:()=>{"playing"===s?(l("paused"),E(e=>({...e,gameRunning:!1})),R("\u23f8\ufe0f Game paused")):"paused"===s&&(l("playing"),E(e=>({...e,gameRunning:!0,lastDrop:Date.now()})),R("\u25b6\ufe0f Game resumed"))},onRestart:H,onExit:()=>{G(),r("/games/singleplayer")},exitRoute:"/singleplayer",hudPosition:w.hudPosition,isAdmin:!1,gameMode:"singleplayer",gameArea:(0,Jt.jsxs)("div",{style:{position:"relative",width:"100%",height:"100%"},children:[(0,Jt.jsxs)(Zf,{$show:x,children:[(0,Jt.jsx)("h3",{children:"\u2699\ufe0f Tetris Settings"}),(0,Jt.jsxs)(ep,{children:[(0,Jt.jsx)("label",{children:"Grid Size:"}),(0,Jt.jsxs)("select",{value:w.gridSize,onChange:e=>S(t=>({...t,gridSize:e.target.value})),children:[(0,Jt.jsx)("option",{value:"small",children:"Small (8x16)"}),(0,Jt.jsx)("option",{value:"medium",children:"Medium (10x20)"}),(0,Jt.jsx)("option",{value:"large",children:"Large (12x24)"}),(0,Jt.jsx)("option",{value:"fullscreen",children:"Fullscreen (Auto)"})]})]}),(0,Jt.jsxs)(ep,{children:[(0,Jt.jsx)("label",{children:"Start Level:"}),(0,Jt.jsx)("select",{value:w.startLevel,onChange:e=>S(t=>({...t,startLevel:parseInt(e.target.value)})),children:[1,2,3,4,5,6,7,8,9,10].map(e=>(0,Jt.jsxs)("option",{value:e,children:["Level ",e]},e))})]}),(0,Jt.jsxs)(ep,{children:[(0,Jt.jsx)("label",{children:"Game Speed:"}),(0,Jt.jsxs)("select",{value:w.gameSpeed,onChange:e=>S(t=>({...t,gameSpeed:e.target.value})),children:[(0,Jt.jsx)("option",{value:"slow",children:"Slow (Beginner)"}),(0,Jt.jsx)("option",{value:"normal",children:"Normal"}),(0,Jt.jsx)("option",{value:"fast",children:"Fast"}),(0,Jt.jsx)("option",{value:"extreme",children:"Extreme"})]})]}),(0,Jt.jsx)(ep,{children:(0,Jt.jsxs)("label",{children:[(0,Jt.jsx)("input",{type:"checkbox",checked:w.ghostPiece,onChange:e=>S(t=>({...t,ghostPiece:e.target.checked}))}),"Ghost Piece"]})}),(0,Jt.jsx)(ep,{children:(0,Jt.jsxs)("label",{children:[(0,Jt.jsx)("input",{type:"checkbox",checked:w.nextPiecePreview,onChange:e=>S(t=>({...t,nextPiecePreview:e.target.checked}))}),"Next Piece Preview"]})}),(0,Jt.jsxs)(ep,{children:[(0,Jt.jsx)("label",{children:"HUD Position:"}),(0,Jt.jsxs)("select",{value:w.hudPosition,onChange:e=>S(t=>({...t,hudPosition:e.target.value})),children:[(0,Jt.jsx)("option",{value:"top",children:"Top Only"}),(0,Jt.jsx)("option",{value:"bottom",children:"Bottom Only"}),(0,Jt.jsx)("option",{value:"both",children:"Top & Bottom"})]})]}),(0,Jt.jsxs)(tp,{children:[(0,Jt.jsx)(fa,{variant:"success",onClick:()=>{console.log("\ud83d\udd27 applySettings called with:",w),T(w),v(!1),R("Settings applied successfully")},children:"\u2705 APPLY"}),(0,Jt.jsx)(fa,{variant:"secondary",onClick:()=>{T(Uf),R("Settings reset to defaults")},children:"\ud83d\udd04 DEFAULTS"}),(0,Jt.jsx)(fa,{variant:"danger",onClick:()=>v(!1),children:"\u274c CANCEL"})]})]}),(0,Jt.jsxs)(Jf,{$show:b,children:[(0,Jt.jsx)("strong",{children:"\ud83d\udc1b DEBUG INFO:"}),(0,Jt.jsx)("br",{}),"Game Status: ",s,(0,Jt.jsx)("br",{}),"Current Piece: ",(null===(e=k.currentPiece)||void 0===e?void 0:e.type)||"None",(0,Jt.jsx)("br",{}),"Next Piece: ",(null===(n=k.nextPiece)||void 0===n?void 0:n.type)||"None",(0,Jt.jsx)("br",{}),"Drop Time: ",W(),(0,Jt.jsx)("br",{}),"Grid: ",Ff,"x",Bf,(0,Jt.jsx)("br",{}),"Cell Size: ",Hf,"px",(0,Jt.jsx)("br",{}),"Keys: ",Object.entries(d).filter(e=>{let[t,n]=e;return n}).map(e=>{let[t]=e;return t}).join(", "),(0,Jt.jsx)("br",{}),"User: ",_?null===A||void 0===A?void 0:A.username:"Not logged in",(0,Jt.jsx)("br",{}),(0,Jt.jsx)("strong",{children:"Recent Logs:"}),(0,Jt.jsx)("br",{}),c.map((e,t)=>(0,Jt.jsx)("div",{children:e},t))]}),"playing"===s||"paused"===s?(0,Jt.jsxs)(Kf,{$settings:w,children:[(0,Jt.jsx)(qf,{ref:C,width:Gf,height:Wf,$settings:w}),w.nextPiecePreview&&(0,Jt.jsxs)(rp,{children:[(0,Jt.jsx)("h4",{children:"\ud83d\udd2e Next Piece"}),(0,Jt.jsx)(Vf,{ref:j,width:160,height:80})]})]}):(()=>{switch(s){case"idle":return(0,Jt.jsxs)(Qf,{children:[(0,Jt.jsx)("h3",{children:"\ud83e\udde9 Tetris Game"}),(0,Jt.jsx)("p",{style:{fontSize:"1rem",color:"#b8b8b8",marginBottom:"2rem"},children:"Classic block-stacking puzzle!"}),(0,Jt.jsxs)("div",{style:{textAlign:"left",maxWidth:"450px",margin:"0 auto 2rem",lineHeight:"2"},children:[(0,Jt.jsx)("p",{style:{color:"#ff6b9d"},children:"\ud83c\udfaf Clear lines by filling rows completely"}),(0,Jt.jsx)("p",{style:{color:"#ffaa00"},children:"\u26a1 Speed increases every 10 lines"}),(0,Jt.jsx)("p",{style:{color:"#00ffff"},children:"\ud83d\udd04 Rotate pieces to fit perfectly"}),(0,Jt.jsx)("p",{style:{color:"#00ff00"},children:"\u2b07\ufe0f Hard drop for instant placement"})]}),(0,Jt.jsxs)("div",{style:{fontSize:"0.9rem",color:"#9999ff",marginBottom:"2rem",background:"rgba(0, 255, 255, 0.05)",padding:"1rem",borderRadius:"8px",border:"1px solid rgba(0, 255, 255, 0.2)"},children:[(0,Jt.jsx)("p",{style:{margin:"0 0 0.5rem 0",fontWeight:"bold"},children:"\u2328\ufe0f Controls:"}),(0,Jt.jsx)("p",{style:{margin:"0.25rem 0"},children:"\u2190/\u2192: Move \u2022 \u2193: Soft Drop"}),(0,Jt.jsx)("p",{style:{margin:"0.25rem 0"},children:"\u2191: Rotate \u2022 Space: Hard Drop"})]}),(0,Jt.jsxs)(Xf,{children:[(0,Jt.jsx)(fa,{variant:"success",size:"lg",onClick:H,children:"\ud83d\ude80 START GAME"}),(0,Jt.jsx)(fa,{variant:"primary",size:"md",onClick:()=>v(!0),children:"\u2699\ufe0f SETTINGS"})]}),(0,Jt.jsxs)("div",{style:{color:"#00ffff",fontSize:"0.75rem",marginTop:"2.5rem",textAlign:"center",lineHeight:"1.8"},children:[(0,Jt.jsxs)("p",{style:{marginBottom:"0.5rem"},children:["Use \u2699\ufe0f ",(0,Jt.jsx)("strong",{children:"Settings"})," (top right) to configure:"]}),(0,Jt.jsxs)("p",{style:{color:"#888888"},children:["Grid: ",w.gridSize," (",Ff,"x",Bf,") \u2022 Start Level: ",w.startLevel," \u2022 Speed: ",w.gameSpeed]}),(0,Jt.jsxs)("p",{style:{color:"#888888"},children:["Ghost: ",w.ghostPiece?"ON":"OFF"," \u2022 Preview: ",w.nextPiecePreview?"ON":"OFF"," \u2022 HUD: ",w.hudPosition]})]})]});case"paused":return(0,Jt.jsxs)(Qf,{children:[(0,Jt.jsx)("h3",{children:"\u23f8\ufe0f GAME PAUSED"}),(0,Jt.jsxs)("p",{children:["Score: ",k.stats.score.toLocaleString()]}),(0,Jt.jsxs)("p",{children:["Level: ",k.stats.level]}),(0,Jt.jsxs)("p",{children:["Lines: ",k.stats.lines]}),(0,Jt.jsx)("p",{children:"Press RESUME to continue"})]});case"gameover":return(0,Jt.jsxs)(np,{children:[(0,Jt.jsx)("h3",{children:"\ud83c\udfae GAME OVER!"}),(0,Jt.jsxs)("p",{children:["Final Score: ",k.stats.score.toLocaleString()]}),(0,Jt.jsxs)("p",{children:["Level Reached: ",k.stats.level]}),(0,Jt.jsxs)("p",{children:["Lines Cleared: ",k.stats.lines]}),(0,Jt.jsxs)("p",{children:["Pieces Placed: ",k.stats.pieces]}),m&&(0,Jt.jsx)("div",{className:"high-score-notice",children:"\ud83c\udfc6 NEW HIGH SCORE! \ud83c\udfc6"}),!_&&(0,Jt.jsx)("p",{style:{color:"#ff6b9d",fontSize:"0.9rem"},children:"\ud83d\udca1 Login to save your high scores!"}),(0,Jt.jsxs)(Xf,{children:[(0,Jt.jsx)(fa,{variant:"success",onClick:H,children:"\ud83d\ude80 NEW GAME"}),(0,Jt.jsx)(fa,{variant:"secondary",onClick:G,children:"\ud83d\udd04 RESET"})]})]});default:return null}})(),"playing"===s&&(0,Jt.jsxs)("div",{style:{color:"#00ffff",fontSize:"0.8rem",position:"absolute",bottom:"10px",right:"10px",background:"rgba(0, 0, 0, 0.7)",padding:"10px",borderRadius:"5px",border:"1px solid #00ffff"},children:[(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\ud83c\udfae Controls:"})}),(0,Jt.jsx)("p",{children:"\u2190/\u2192: Move \u2022 \u2193: Soft Drop"}),(0,Jt.jsx)("p",{children:"\u2191: Rotate \u2022 Space: Hard Drop"}),(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\ud83c\udfaf Goal:"})}),(0,Jt.jsx)("p",{children:"Clear lines to score!"}),(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\u2699\ufe0f Settings:"})}),(0,Jt.jsxs)("p",{children:["Grid: ",w.gridSize]}),(0,Jt.jsxs)("p",{children:["Speed: ",w.gameSpeed]})]})]})})},op={easy:{pairs:6,cols:3,rows:4},medium:{pairs:8,cols:4,rows:4},hard:{pairs:12,cols:4,rows:6},expert:{pairs:18,cols:6,rows:6}},ap={small:{width:400,height:500},medium:{width:500,height:600},large:{width:600,height:700}},sp=["\ud83c\udfae","\ud83d\udd79\ufe0f","\ud83c\udfaf","\ud83c\udfb2","\ud83c\udccf","\ud83c\udfaa","\ud83c\udfa8","\ud83c\udfad","\ud83c\udfaa","\ud83c\udfba","\ud83c\udfb8","\ud83c\udfa4","\ud83c\udfa7","\ud83c\udfb7","\ud83e\udd41","\ud83c\udfbb","\ud83c\udfb9","\ud83c\udfac","\ud83c\udfa8","\u2b50"],lp=["\ud83d\udd34","\ud83d\udfe0","\ud83d\udfe1","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe3","\ud83d\udfe4","\u26ab","\u26aa","\ud83d\udd3a","\ud83d\udd38","\ud83d\udd39","\ud83d\udc8e","\ud83c\udf1f","\u2728","\ud83d\udcab","\u2b50","\ud83c\udf19","\u2600\ufe0f","\ud83c\udf08"],cp=["#ff6b9d","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#a55eea","#26de81","#fd79a8","#fdcb6e"],up=["/images/memory/paintings/painting-01.jpg","/images/memory/paintings/painting-02.jpg","/images/memory/paintings/painting-03.jpg","/images/memory/paintings/painting-04.jpg","/images/memory/paintings/painting-05.jpg","/images/memory/paintings/painting-06.jpg","/images/memory/paintings/painting-07.jpg","/images/memory/paintings/painting-08.jpg","/images/memory/paintings/painting-09.jpg","/images/memory/paintings/painting-10.jpg","/images/memory/paintings/painting-11.jpg","/images/memory/paintings/painting-12.jpg","/images/memory/paintings/painting-13.jpg","/images/memory/paintings/painting-14.jpg","/images/memory/paintings/painting-15.jpg","/images/memory/paintings/painting-16.jpg","/images/memory/paintings/painting-17.jpg","/images/memory/paintings/painting-18.jpg"],dp={slow:1500,normal:1e3,fast:600},fp={difficulty:"medium",canvasSize:"large",cardStyle:"symbols",animationSpeed:"normal",hudPosition:"both"};let pp=ap[fp.canvasSize].width,hp=ap[fp.canvasSize].height,mp=dp[fp.animationSpeed];const gp=Qi.canvas`
  background: #000;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  border: 2px solid #00ffff;
  cursor: pointer;
  
  /* Grid overlay */
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
`,bp=Qi.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${e=>ap[e.$settings.canvasSize].width+40}px;
  max-height: ${e=>ap[e.$settings.canvasSize].height+40}px;
  margin: 0 auto;
`,yp=Qi.div`
  color: #00ffff;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {
    color: #ffff00;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }
  
  p {
    margin: 10px 0;
    line-height: 1.6;
  }
`,xp=Qi.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
`,vp=Qi.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  color: #ff0000;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  display: ${e=>e.$show?"block":"none"};
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  max-width: 300px;
`,wp=Qi.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 20, 40, 0.95);
  border: 2px solid #00ffff;
  border-radius: 15px;
  padding: 30px;
  z-index: 20;
  display: ${e=>e.$show?"block":"none"};
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  
  h3 {
    color: #00ffff;
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`,Sp=Qi.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    color: #00ff00;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  
  select, input {
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid #00ffff;
    border-radius: 8px;
    color: #ffffff;
    padding: 8px 12px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    
    &:focus {
      outline: none;
      border-color: #00ff00;
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    }
    
    option {
      background: #000;
      color: #fff;
    }
  }
`,kp=Qi.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`,Ep=Qi.div`
  background: rgba(0, 255, 0, 0.1);
  border: 2px solid #00ff00;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: #00ff00;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {
    color: #00ff00;
    margin-bottom: 15px;
    font-size: 1.8rem;
  }
  
  p {
    color: #00ffff;
    margin: 10px 0;
    font-size: 1.2rem;
  }
  
  .high-score-notice {
    background: rgba(255, 215, 0, 0.2);
    border: 1px solid #ffd700;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    color: #ffd700;
    font-weight: bold;
  }
`,Cp=()=>{const e=Fe(),{hud:n,setScore:r}=Ef(),[i,o]=(0,t.useState)([]),[a,s]=(0,t.useState)(!1),[l,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(!1),[f,p]=(0,t.useState)(fp),[h,m]=(0,t.useState)([]),[g,b]=(0,t.useState)({gameStatus:"idle",cards:[],flippedCards:[],stats:{moves:0,matches:0,timeElapsed:0,score:0},gameStartTime:0,difficulty:fp.difficulty}),y=(0,t.useRef)(null),x=(0,t.useRef)(null),{recordGameResult:v,isLoggedIn:w,currentUser:S}=Xt(),k=e=>{pp=ap[e.canvasSize].width,hp=ap[e.canvasSize].height,mp=dp[e.animationSpeed],p(e),E(`Settings updated: ${e.canvasSize}, Difficulty: ${e.difficulty}, Style: ${e.cardStyle}`),setTimeout(()=>{y.current&&(y.current.width=pp,y.current.height=hp,_())},100),"idle"!==g.gameStatus&&T()};(0,t.useEffect)(()=>{y.current&&(y.current.width=pp,y.current.height=hp,_())},[f,pp,hp]);const E=e=>{const t=(new Date).toLocaleTimeString();o(n=>[...n.slice(-4),`${t}: ${e}`]),console.log(`\ud83e\udde0 ${t}: ${e}`)},C=(0,t.useCallback)(e=>{const{pairs:t,cols:n}=op[e];let r;switch(f.cardStyle){case"paintings":r=up.slice(0,t).map((e,t)=>({symbol:`P${t+1}`,imagePath:e,imageLoaded:h[t]}));break;case"colors":r=lp.slice(0,t).map(e=>({symbol:e}));break;case"mixed":r=[...sp,...lp].slice(0,t).map(e=>({symbol:e}));break;default:r=sp.slice(0,t).map(e=>({symbol:e}))}const i=[...r,...r];for(let l=i.length-1;l>0;l--){const e=Math.floor(Math.random()*(l+1));[i[l],i[e]]=[i[e],i[l]]}const o=Math.floor((pp-10*(n+1))/n),a=Math.floor(1.25*o),s=(hp-Math.ceil(2*t/n)*(a+10))/2;return i.map((e,t)=>({id:t,symbol:e.symbol,imagePath:e.imagePath,imageLoaded:e.imageLoaded,x:t%n*(o+10)+10,y:Math.floor(t/n)*(a+10)+s,width:o,height:a,flipped:!1,matched:!1,color:cp[Math.floor(Math.random()*cp.length)]}))},[f.cardStyle,h]),j=(0,t.useCallback)(e=>{b(t=>{if(t.flippedCards.length>=2||e.flipped||e.matched)return t;const n=t.cards.map(t=>t.id===e.id?{...t,flipped:!0}:t),r=[...t.flippedCards,e];return E(`\ud83c\udccf Flipped card with symbol: ${e.symbol}`),{...t,cards:n,flippedCards:r}})},[]),P=(0,t.useCallback)(e=>{if("playing"!==g.gameStatus||g.flippedCards.length>=2)return;const t=y.current;if(!t)return;const n=t.getBoundingClientRect(),r=t.width/n.width,i=t.height/n.height,o=(e.clientX-n.left)*r,a=(e.clientY-n.top)*i,s=g.cards.find(e=>o>=e.x&&o<=e.x+e.width&&a>=e.y&&a<=e.y+e.height&&!e.flipped&&!e.matched);s&&j(s)},[g.gameStatus,g.flippedCards,g.cards,j]);(0,t.useEffect)(()=>{if(2===g.flippedCards.length){const[e,t]=g.flippedCards;setTimeout(()=>{b(n=>{const r=e.symbol===t.symbol,i=n.cards.map(n=>n.id===e.id||n.id===t.id?r?{...n,matched:!0}:{...n,flipped:!1}:n),o={...n.stats,moves:n.stats.moves+1,matches:r?n.stats.matches+1:n.stats.matches};return E(r?`\u2705 Match found: ${e.symbol}`:`\u274c No match: ${e.symbol} \u2260 ${t.symbol}`),{...n,cards:i,flippedCards:[],stats:o}})},mp)}},[g.flippedCards]),(0,t.useEffect)(()=>{if("playing"===g.gameStatus&&g.cards.length>0){if(g.cards.every(e=>e.matched)){const e=Date.now()-g.gameStartTime,t={easy:1,medium:1.5,hard:2,expert:3}[g.difficulty],n=Math.max(0,12e4-e),i=Math.max(0,50*(2*op[g.difficulty].pairs-g.stats.moves)),o=Math.floor((1e3+n/100+i)*t);if(b(t=>({...t,gameStatus:"completed",stats:{...t.stats,timeElapsed:e,score:o}})),r(o),w){(async()=>{const{newHighScore:e}=await v("memory",o);e&&s(!0)})()}E(`\ud83c\udf89 Game completed! Score: ${o}`)}}},[g.cards,g.gameStatus,g.gameStartTime,g.stats.moves,g.difficulty,w,v,r]),(0,t.useEffect)(()=>{if("playing"===g.gameStatus)return x.current=window.setInterval(()=>{b(e=>({...e,stats:{...e.stats,timeElapsed:Date.now()-e.gameStartTime}}))},100),()=>{null!==x.current&&(clearInterval(x.current),x.current=null)}},[g.gameStatus,g.gameStartTime]);const _=(0,t.useCallback)(()=>{const e=y.current;if(!e)return;const t=e.getContext("2d");t&&(t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),g.cards.forEach(e=>{if(t.fillStyle=e.matched?"#4caf50":e.flipped?e.color:"#333",t.fillRect(e.x,e.y,e.width,e.height),t.strokeStyle=e.matched?"#00ff00":"#00ffff",t.lineWidth=2,t.strokeRect(e.x,e.y,e.width,e.height),e.flipped||e.matched)if(e.imageLoaded&&"paintings"===f.cardStyle){const n=5;t.drawImage(e.imageLoaded,e.x+n,e.y+n,e.width-2*n,e.height-2*n)}else t.fillStyle="#fff",t.font=`${Math.floor(e.width/3)}px Arial`,t.textAlign="center",t.textBaseline="middle",t.fillText(e.symbol,e.x+e.width/2,e.y+e.height/2);e.matched&&(t.fillStyle="rgba(255, 255, 255, 0.3)",t.fillRect(e.x,e.y,e.width,e.height))}))},[g.cards]);(0,t.useEffect)(()=>{"idle"!==g.gameStatus&&_()},[g,_]),(0,t.useEffect)(()=>{(async()=>{const e=await(t=up,Promise.all(t.map(e=>new Promise((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=()=>{console.warn(`Failed to load image: ${e}`),t(r)},r.src=e}))));var t;m(e),E(`Loaded ${e.length} painting images`)})()},[]);const A=()=>{const e=C(f.difficulty);b(t=>({...t,gameStatus:"playing",cards:e,flippedCards:[],stats:{moves:0,matches:0,timeElapsed:0,score:0},gameStartTime:Date.now(),difficulty:f.difficulty})),s(!1),r(0),E(`\ud83d\ude80 New Memory game started (${f.difficulty})`)},T=()=>{null!==x.current&&(clearInterval(x.current),x.current=null),b(e=>({...e,gameStatus:"idle",cards:[],flippedCards:[],stats:{moves:0,matches:0,timeElapsed:0,score:0},gameStartTime:0})),r(0),E("\ud83d\udd04 Game reset")},R=e=>{const t=Math.floor(e/1e3);return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`},N={...n,score:{value:g.stats.score,visible:!0},custom:[{type:"moves",label:"Moves",value:g.stats.moves,customColor:"#ff6b6b"},{type:"matches",label:"Matches",value:`${g.stats.matches}/${op[g.difficulty].pairs}`,customColor:"#00ff00"},{type:"time",label:"Time",value:R(g.stats.timeElapsed),customColor:"#ffff00"},{type:"difficulty",label:"Difficulty",value:g.difficulty.toUpperCase(),customColor:"#ff00ff"}]};return(0,Jt.jsx)(kf,{gameTitle:"MEMORY",gameSubtitle:`\ud83e\udde0 Card Matching Game \u2022 ${f.difficulty.toUpperCase()} Mode \u2022 ${w?`Player: ${null===S||void 0===S?void 0:S.username}`:"Not logged in"}`,hud:N,showRestartButton:"completed"===g.gameStatus,onRestart:A,onExit:()=>{T(),e("/games/singleplayer")},exitRoute:"/singleplayer",hudPosition:f.hudPosition,isAdmin:!1,gameMode:"singleplayer",gameArea:(0,Jt.jsxs)("div",{style:{position:"relative",width:"100%",height:"100%"},children:[(0,Jt.jsxs)(wp,{$show:u,children:[(0,Jt.jsx)("h3",{children:"\u2699\ufe0f Memory Settings"}),(0,Jt.jsxs)(Sp,{children:[(0,Jt.jsx)("label",{children:"Difficulty:"}),(0,Jt.jsxs)("select",{value:f.difficulty,onChange:e=>p(t=>({...t,difficulty:e.target.value})),children:[(0,Jt.jsx)("option",{value:"easy",children:"Easy (6 pairs)"}),(0,Jt.jsx)("option",{value:"medium",children:"Medium (8 pairs)"}),(0,Jt.jsx)("option",{value:"hard",children:"Hard (12 pairs)"}),(0,Jt.jsx)("option",{value:"expert",children:"Expert (18 pairs)"})]})]}),(0,Jt.jsxs)(Sp,{children:[(0,Jt.jsx)("label",{children:"Canvas Size:"}),(0,Jt.jsxs)("select",{value:f.canvasSize,onChange:e=>p(t=>({...t,canvasSize:e.target.value})),children:[(0,Jt.jsx)("option",{value:"small",children:"Small (400x500)"}),(0,Jt.jsx)("option",{value:"medium",children:"Medium (500x600)"}),(0,Jt.jsx)("option",{value:"large",children:"Large (600x700)"})]})]}),(0,Jt.jsxs)(Sp,{children:[(0,Jt.jsx)("label",{children:"Card Style:"}),(0,Jt.jsxs)("select",{value:f.cardStyle,onChange:e=>p(t=>({...t,cardStyle:e.target.value})),children:[(0,Jt.jsx)("option",{value:"symbols",children:"Symbols (\ud83c\udfae\ud83c\udfaf\ud83c\udfb2)"}),(0,Jt.jsx)("option",{value:"colors",children:"Colors (\ud83d\udd34\ud83d\udfe0\ud83d\udfe1)"}),(0,Jt.jsx)("option",{value:"mixed",children:"Mixed (Both)"})]})]}),(0,Jt.jsxs)(Sp,{children:[(0,Jt.jsx)("label",{children:"Animation Speed:"}),(0,Jt.jsxs)("select",{value:f.animationSpeed,onChange:e=>p(t=>({...t,animationSpeed:e.target.value})),children:[(0,Jt.jsx)("option",{value:"slow",children:"Slow (1.5s)"}),(0,Jt.jsx)("option",{value:"normal",children:"Normal (1s)"}),(0,Jt.jsx)("option",{value:"fast",children:"Fast (0.6s)"})]})]}),(0,Jt.jsxs)(Sp,{children:[(0,Jt.jsx)("label",{children:"HUD Position:"}),(0,Jt.jsxs)("select",{value:f.hudPosition,onChange:e=>p(t=>({...t,hudPosition:e.target.value})),children:[(0,Jt.jsx)("option",{value:"top",children:"Top Only"}),(0,Jt.jsx)("option",{value:"bottom",children:"Bottom Only"}),(0,Jt.jsx)("option",{value:"both",children:"Top & Bottom"})]})]}),(0,Jt.jsxs)(kp,{children:[(0,Jt.jsx)(fa,{variant:"success",onClick:()=>{k(f),d(!1),E("Settings applied successfully")},children:"\u2705 APPLY"}),(0,Jt.jsx)(fa,{variant:"secondary",onClick:()=>{k(fp),E("Settings reset to defaults")},children:"\ud83d\udd04 DEFAULTS"}),(0,Jt.jsx)(fa,{variant:"danger",onClick:()=>d(!1),children:"\u274c CANCEL"})]})]}),(0,Jt.jsxs)(vp,{$show:l,children:[(0,Jt.jsx)("strong",{children:"\ud83d\udc1b DEBUG INFO:"}),(0,Jt.jsx)("br",{}),"Game Status: ",g.gameStatus,(0,Jt.jsx)("br",{}),"Flipped Cards: ",g.flippedCards.length,(0,Jt.jsx)("br",{}),"Moves: ",g.stats.moves,(0,Jt.jsx)("br",{}),"Matches: ",g.stats.matches,"/",op[g.difficulty].pairs,(0,Jt.jsx)("br",{}),"Time: ",R(g.stats.timeElapsed),(0,Jt.jsx)("br",{}),"Canvas: ",pp,"x",hp,(0,Jt.jsx)("br",{}),"Flip Duration: ",mp,"ms",(0,Jt.jsx)("br",{}),"User: ",w?null===S||void 0===S?void 0:S.username:"Not logged in",(0,Jt.jsx)("br",{}),(0,Jt.jsx)("strong",{children:"Recent Logs:"}),(0,Jt.jsx)("br",{}),i.map((e,t)=>(0,Jt.jsx)("div",{children:e},t))]}),"playing"===g.gameStatus?(0,Jt.jsx)(bp,{$settings:f,children:(0,Jt.jsx)(gp,{ref:y,width:pp,height:hp,onClick:P,$settings:f})}):(()=>{switch(g.gameStatus){case"idle":return(0,Jt.jsxs)(yp,{children:[(0,Jt.jsx)("h3",{children:"\ud83e\udde0 Memory Game"}),(0,Jt.jsx)("p",{style:{fontSize:"1rem",color:"#b8b8b8",marginBottom:"2rem"},children:"Find matching pairs of cards!"}),(0,Jt.jsxs)("div",{style:{textAlign:"left",maxWidth:"450px",margin:"0 auto 2rem",lineHeight:"2"},children:[(0,Jt.jsx)("p",{style:{color:"#ff6b9d"},children:"\ud83c\udfaf Flip two cards to find matches"}),(0,Jt.jsx)("p",{style:{color:"#ffaa00"},children:"\ud83c\udfc6 Complete in fewer moves for higher score"}),(0,Jt.jsx)("p",{style:{color:"#00ffff"},children:"\u23f1\ufe0f Faster completion gives time bonus"}),(0,Jt.jsx)("p",{style:{color:"#00ff00"},children:"\ud83c\udfae Click cards to flip them over"})]}),(0,Jt.jsxs)("div",{style:{fontSize:"0.9rem",color:"#9999ff",marginBottom:"2rem",background:"rgba(0, 255, 255, 0.05)",padding:"1rem",borderRadius:"8px",border:"1px solid rgba(0, 255, 255, 0.2)"},children:[(0,Jt.jsx)("p",{style:{margin:"0 0 0.5rem 0",fontWeight:"bold"},children:"\ud83c\udfae Controls:"}),(0,Jt.jsx)("p",{style:{margin:"0.25rem 0"},children:"Mouse: Click cards to flip"})]}),(0,Jt.jsxs)(xp,{children:[(0,Jt.jsx)(fa,{variant:"success",size:"lg",onClick:A,children:"\ud83d\ude80 START GAME"}),(0,Jt.jsx)(fa,{variant:"primary",size:"md",onClick:()=>d(!0),children:"\u2699\ufe0f SETTINGS"})]}),(0,Jt.jsxs)("div",{style:{color:"#00ffff",fontSize:"0.75rem",marginTop:"2.5rem",textAlign:"center",lineHeight:"1.8"},children:[(0,Jt.jsxs)("p",{style:{marginBottom:"0.5rem"},children:["Use \u2699\ufe0f ",(0,Jt.jsx)("strong",{children:"Settings"})," (top right) to configure:"]}),(0,Jt.jsxs)("p",{style:{color:"#888888"},children:["Difficulty: ",f.difficulty," (",op[f.difficulty].pairs," pairs) \u2022 Canvas: ",f.canvasSize]}),(0,Jt.jsxs)("p",{style:{color:"#888888"},children:["Style: ",f.cardStyle," \u2022 Speed: ",f.animationSpeed," \u2022 HUD: ",f.hudPosition]})]})]});case"completed":return(0,Jt.jsxs)(Ep,{children:[(0,Jt.jsx)("h3",{children:"\ud83c\udf89 CONGRATULATIONS!"}),(0,Jt.jsxs)("p",{children:["Final Score: ",g.stats.score.toLocaleString()]}),(0,Jt.jsxs)("p",{children:["Moves: ",g.stats.moves]}),(0,Jt.jsxs)("p",{children:["Time: ",R(g.stats.timeElapsed)]}),(0,Jt.jsxs)("p",{children:["Difficulty: ",g.difficulty]}),a&&(0,Jt.jsx)("div",{className:"high-score-notice",children:"\ud83c\udfc6 NEW HIGH SCORE! \ud83c\udfc6"}),!w&&(0,Jt.jsx)("p",{style:{color:"#ff6b9d",fontSize:"0.9rem"},children:"\ud83d\udca1 Login to save your high scores!"}),(0,Jt.jsxs)(xp,{children:[(0,Jt.jsx)(fa,{variant:"success",onClick:A,children:"\ud83d\ude80 NEW GAME"}),(0,Jt.jsx)(fa,{variant:"secondary",onClick:T,children:"\ud83d\udd04 RESET"})]})]});default:return null}})(),"playing"===g.gameStatus&&(0,Jt.jsxs)("div",{style:{color:"#00ffff",fontSize:"0.8rem",position:"absolute",bottom:"10px",right:"10px",background:"rgba(0, 0, 0, 0.7)",padding:"10px",borderRadius:"5px",border:"1px solid #00ffff"},children:[(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\ud83c\udfae Controls:"})}),(0,Jt.jsx)("p",{children:"Click cards to flip"}),(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\ud83c\udfaf Goal:"})}),(0,Jt.jsx)("p",{children:"Find all matching pairs!"}),(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\u2699\ufe0f Settings:"})}),(0,Jt.jsxs)("p",{children:["Difficulty: ",f.difficulty]}),(0,Jt.jsxs)("p",{children:["Style: ",f.cardStyle]})]})]})})},jp=Zi`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,Pp=(Zi`
  0%, 100% { box-shadow: 0 0 10px #00ffff; }
  50% { box-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff; }
`,{small:{width:640,height:480},medium:{width:800,height:600},large:{width:960,height:720},fullscreen:{width:1200,height:800},truefullscreen:{get width(){return window.innerWidth},get height(){return window.innerHeight},label:"\ud83d\ude80 True Fullscreen (Auto)"}}),_p={slow:{ball:3,paddle:4,max:8},normal:{ball:4,paddle:6,max:12},fast:{ball:6,paddle:8,max:16}},Ap={easy:{speed:.4,prediction:10},normal:{speed:.6,prediction:20},hard:{speed:.8,prediction:30}},Tp={canvasSize:"large",ballSpeed:"normal",paddleSpeed:"normal",aiDifficulty:"normal",winningScore:11,hudPosition:"both"};let Rp=Pp[Tp.canvasSize].width,Np=Pp[Tp.canvasSize].height,Lp=80,$p=_p[Tp.paddleSpeed].paddle,Op=_p[Tp.ballSpeed].ball,zp=_p[Tp.ballSpeed].max,Mp=Tp.winningScore;const Dp=Qi.canvas`
  background: #000;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  border: 1px solid #00ffff;
  
  /* Grid overlay */
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
`,Ip=Qi.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${e=>Pp[e.$settings.canvasSize].width}px;
  max-height: ${e=>Pp[e.$settings.canvasSize].height}px;
  margin: 0 auto;
`,Up=Qi.div`
  color: #00ffff;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {
    color: #ffff00;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }
  
  p {
    margin: 10px 0;
    line-height: 1.6;
  }
`,Fp=Qi.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  
  label {
    color: #00ffff;
    cursor: pointer;
    padding: 8px 15px;
    border: 1px solid #00ffff;
    border-radius: 20px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    
    &:hover {
      background: rgba(0, 255, 255, 0.1);
    }
    
    input[type="radio"] {
      margin-right: 8px;
    }
    
    &:has(input:checked) {
      background: linear-gradient(45deg, #00ffff20, #ff00ff20);
      border-color: #ff6b9d;
    }
  }
`,Bp=Qi.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
`,Hp=Qi.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  color: #ff0000;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  display: ${e=>e.$show?"block":"none"};
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  max-width: 300px;
`,Gp=Qi.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 20, 40, 0.95);
  border: 2px solid #00ffff;
  border-radius: 15px;
  padding: 30px;
  z-index: 20;
  display: ${e=>e.$show?"block":"none"};
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  
  h3 {
    color: #00ffff;
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`,Wp=Qi.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    color: #00ff00;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  
  select, input {
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid #00ffff;
    border-radius: 8px;
    color: #ffffff;
    padding: 8px 12px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    
    &:focus {
      outline: none;
      border-color: #00ff00;
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    }
    
    option {
      background: #000;
      color: #fff;
    }
  }
`,Yp=Qi.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`,qp=Qi.div`
  background: rgba(255, 107, 157, 0.1);
  border: 2px solid #ff6b9d;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  animation: ${jp} 2s infinite;
  color: #ff6b9d;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {
    color: #ff6b9d;
    margin-bottom: 15px;
    font-size: 1.8rem;
  }
  
  p {
    color: #00ffff;
    margin: 10px 0;
    font-size: 1.2rem;
  }
  
  .high-score-notice {
    background: rgba(255, 215, 0, 0.2);
    border: 1px solid #ffd700;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    color: #ffd700;
    font-weight: bold;
  }
`,Vp=()=>{const e=Fe(),{hud:n,setScore:r,setLives:i}=Ef(),[o,a]=(0,t.useState)("single"),[s,l]=(0,t.useState)("idle"),[c,u]=(0,t.useState)([]),[d,f]=(0,t.useState)({}),[p,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),[b,y]=(0,t.useState)(!1),[x,v]=(0,t.useState)(Tp),[w,S]=(0,t.useState)({leftPaddle:{x:30,y:Np/2-40,width:15,height:Lp,speed:$p,score:0},rightPaddle:{x:Rp-30-15,y:Np/2-40,width:15,height:Lp,speed:$p,score:0},ball:{x:Rp/2,y:Np/2,radius:8,speedX:Op,speedY:Op,maxSpeed:zp},gameRunning:!1,level:1,gameMode:"single"}),k=(0,t.useRef)(null),E=(0,t.useRef)(void 0),{recordGameResult:C,isLoggedIn:j,currentUser:P}=Xt(),_=e=>{Rp=Pp[e.canvasSize].width,Np=Pp[e.canvasSize].height,$p=_p[e.paddleSpeed].paddle,Op=_p[e.ballSpeed].ball,zp=_p[e.ballSpeed].max,Mp=e.winningScore,v(e),A(`Settings updated: ${e.canvasSize}, Ball: ${e.ballSpeed}, AI: ${e.aiDifficulty}`),setTimeout(()=>{k.current&&(k.current.width=Rp,k.current.height=Np,$())},100),"idle"!==s&&z()};(0,t.useEffect)(()=>{k.current&&(k.current.width=Rp,k.current.height=Np,$())},[x,Rp,Np]);const A=e=>{const t=(new Date).toLocaleTimeString();u(n=>[...n.slice(-4),`${t}: ${e}`]),console.log(`\ud83c\udfd3 ${t}: ${e}`)},T=(0,t.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";S(t=>({...t,ball:{...t.ball,x:Rp/2,y:Np/2,speedX:"left"===e?-Op:Op,speedY:(Math.random()-.5)*Op}}))},[]),R=(0,t.useCallback)((e,t)=>{const n=t.y+t.height/2,r=e.y;let i=t.y;const o=Ap[x.aiDifficulty],a=$p*o.speed;if(e.x+e.speedX*o.prediction>Rp/2)r<n-10?i=Math.max(0,t.y-a):r>n+10&&(i=Math.min(Np-t.height,t.y+a));else{const e=Np/2-t.height/2;n<e-5?i=t.y+.5*a:n>e+5&&(i=t.y-.5*a)}return Math.max(0,Math.min(Np-t.height,i))},[x.aiDifficulty]),N=(0,t.useCallback)(e=>{const{ball:t,leftPaddle:n,rightPaddle:i}=e;let a={...e};(t.y-t.radius<=0||t.y+t.radius>=Np)&&(a.ball.speedY=-t.speedY,A("\ud83c\udfbe Ball hit wall"));const s=t.x-t.radius,c=t.x+t.radius,u=t.y-t.radius,d=t.y+t.radius;if(s<=n.x+n.width&&c>=n.x&&u<=n.y+n.height&&d>=n.y&&t.speedX<0){const e=(t.y-(n.y+n.height/2))/(n.height/2);a.ball.speedX=1.05*Math.abs(t.speedX),a.ball.speedY=e*t.maxSpeed*.7,a.ball.speedX=Math.min(a.ball.speedX,t.maxSpeed),A("\ud83c\udfbe Ball hit left paddle")}if(c>=i.x&&s<=i.x+i.width&&u<=i.y+i.height&&d>=i.y&&t.speedX>0){const e=(t.y-(i.y+i.height/2))/(i.height/2);a.ball.speedX=1.05*-Math.abs(t.speedX),a.ball.speedY=e*t.maxSpeed*.7,a.ball.speedX=Math.max(a.ball.speedX,-t.maxSpeed),A("\ud83c\udfbe Ball hit right paddle")}if(t.x<0?(a.rightPaddle.score++,A(`\ud83c\udfaf Right player scores! ${a.leftPaddle.score}-${a.rightPaddle.score}`),a.ball={x:Rp/2,y:Np/2,radius:8,speedX:Op,speedY:(Math.random()-.5)*Op,maxSpeed:zp}):t.x>Rp&&(a.leftPaddle.score++,r(a.leftPaddle.score),A(`\ud83c\udfaf Left player scores! ${a.leftPaddle.score}-${a.rightPaddle.score}`),a.ball={x:Rp/2,y:Np/2,radius:8,speedX:-Op,speedY:(Math.random()-.5)*Op,maxSpeed:zp}),a.leftPaddle.score>=x.winningScore||a.rightPaddle.score>=x.winningScore){if(a.gameRunning=!1,l("gameover"),j){if(a.leftPaddle.score>=x.winningScore){const e=a.leftPaddle.score;(async()=>{const{newHighScore:t}=await C("pong",e);t&&(h(!0),A(`\ud83c\udfc6 NEW HIGH SCORE: ${e}!`))})()}}const e=a.leftPaddle.score>=x.winningScore?"Player 1":"single"===o?"Computer":"Player 2";A(`\ud83c\udfc6 Game Over! Winner: ${e}`)}return a},[T,o,j,C,r,x]),L=(0,t.useCallback)(()=>{w.gameRunning&&S(e=>{let t={...e};return(d.w||d.arrowup)&&(t.leftPaddle.y=Math.max(0,e.leftPaddle.y-e.leftPaddle.speed)),(d.s||d.arrowdown)&&(t.leftPaddle.y=Math.min(Np-e.leftPaddle.height,e.leftPaddle.y+e.leftPaddle.speed)),"multi"===o?(d.arrowup&&(t.rightPaddle.y=Math.max(0,e.rightPaddle.y-e.rightPaddle.speed)),d.arrowdown&&(t.rightPaddle.y=Math.min(Np-e.rightPaddle.height,e.rightPaddle.y+e.rightPaddle.speed))):t.rightPaddle.y=R(e.ball,e.rightPaddle),t.ball.x+=e.ball.speedX,t.ball.y+=e.ball.speedY,t=N(t),t})},[d,o,R,N,w.gameRunning]),$=(0,t.useCallback)(()=>{const e=k.current;if(!e)return;const t=e.getContext("2d");if(t){t.fillStyle="#000",t.fillRect(0,0,Rp,Np),t.setLineDash([10,10]),t.strokeStyle="#00ffff",t.lineWidth=2,t.beginPath(),t.moveTo(Rp/2,0),t.lineTo(Rp/2,Np),t.stroke(),t.setLineDash([]),t.fillStyle="#00ffff",t.fillRect(w.leftPaddle.x,w.leftPaddle.y,w.leftPaddle.width,w.leftPaddle.height),t.fillRect(w.rightPaddle.x,w.rightPaddle.y,w.rightPaddle.width,w.rightPaddle.height),t.fillStyle="#ffffff",t.beginPath(),t.arc(w.ball.x,w.ball.y,w.ball.radius,0,2*Math.PI),t.fill(),t.fillStyle="rgba(255, 255, 255, 0.3)";for(let e=1;e<=3;e++){const n=w.ball.x-w.ball.speedX*e,r=w.ball.y-w.ball.speedY*e,i=w.ball.radius*(1-.2*e);t.beginPath(),t.arc(n,r,i,0,2*Math.PI),t.fill()}}},[w]);(0,t.useEffect)(()=>{const e=e=>{f(t=>({...t,[e.key.toLowerCase()]:!0}))},t=e=>{f(t=>({...t,[e.key.toLowerCase()]:!1}))};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}},[]),(0,t.useEffect)(()=>{if("playing"===s&&w.gameRunning){const e=()=>{L(),$(),E.current=requestAnimationFrame(e)};return E.current=requestAnimationFrame(e),()=>{E.current&&cancelAnimationFrame(E.current)}}},[s,w.gameRunning,L,$]),(0,t.useEffect)(()=>{"idle"!==s&&$()},[w,s,$]);const O=()=>{l("playing"),S(e=>({...e,leftPaddle:{...e.leftPaddle,score:0,y:Np/2-40},rightPaddle:{...e.rightPaddle,score:0,y:Np/2-40},ball:{x:Rp/2,y:Np/2,radius:8,speedX:Math.random()>.5?Op:-Op,speedY:(Math.random()-.5)*Op,maxSpeed:zp},gameRunning:!0,level:1,gameMode:o})),h(!1),r(0),i(3),A(`\ud83d\ude80 Started new ${o} player game`)},z=()=>{l("idle"),S(e=>({...e,leftPaddle:{...e.leftPaddle,score:0,y:Np/2-40},rightPaddle:{...e.rightPaddle,score:0,y:Np/2-40},ball:{x:Rp/2,y:Np/2,radius:8,speedX:Op,speedY:Op,maxSpeed:zp},gameRunning:!1,level:1})),h(!1),r(0),A("\ud83d\udd04 Game reset")},M={...n,score:{value:w.leftPaddle.score,visible:!0},custom:[{type:"opponent",label:"single"===o?"AI Score":"Player 2",value:w.rightPaddle.score,customColor:"#ff6b6b"},{type:"speed",label:"Ball Speed",value:`${Math.abs(w.ball.speedX).toFixed(1)}`,customColor:"#ffff00"},{type:"mode",label:"Mode",value:"single"===o?"vs AI":"2P",customColor:"#ff00ff"}]};return(0,Jt.jsx)(kf,{gameTitle:"PONG",gameSubtitle:`\ud83c\udfd3 Classic Arcade Tennis \u2022 ${x.canvasSize.toUpperCase()} Mode \u2022 ${j?`Player: ${null===P||void 0===P?void 0:P.username}`:"Not logged in"}`,hud:M,showPauseButton:"playing"===s,showRestartButton:"gameover"===s,onPause:()=>{"playing"===s?(l("paused"),S(e=>({...e,gameRunning:!1})),A("\u23f8\ufe0f Game paused")):"paused"===s&&(l("playing"),S(e=>({...e,gameRunning:!0})),A("\u25b6\ufe0f Game resumed"))},onRestart:O,onExit:()=>{z(),e("/games/singleplayer")},exitRoute:"/games/singleplayer",hudPosition:x.hudPosition,gameArea:(0,Jt.jsxs)("div",{style:{position:"relative",width:"100%",height:"100%"},children:[(0,Jt.jsxs)(Gp,{$show:b,children:[(0,Jt.jsx)("h3",{children:"\u2699\ufe0f Pong Settings"}),(0,Jt.jsxs)(Wp,{children:[(0,Jt.jsx)("label",{children:"Canvas Size:"}),(0,Jt.jsxs)("select",{value:x.canvasSize,onChange:e=>v(t=>({...t,canvasSize:e.target.value})),children:[(0,Jt.jsx)("option",{value:"small",children:"Small (640x480)"}),(0,Jt.jsx)("option",{value:"medium",children:"Medium (800x600)"}),(0,Jt.jsx)("option",{value:"large",children:"Large (960x720)"})]})]}),(0,Jt.jsxs)(Wp,{children:[(0,Jt.jsx)("label",{children:"Ball Speed:"}),(0,Jt.jsxs)("select",{value:x.ballSpeed,onChange:e=>v(t=>({...t,ballSpeed:e.target.value})),children:[(0,Jt.jsx)("option",{value:"slow",children:"Slow"}),(0,Jt.jsx)("option",{value:"normal",children:"Normal"}),(0,Jt.jsx)("option",{value:"fast",children:"Fast"})]})]}),(0,Jt.jsxs)(Wp,{children:[(0,Jt.jsx)("label",{children:"Paddle Speed:"}),(0,Jt.jsxs)("select",{value:x.paddleSpeed,onChange:e=>v(t=>({...t,paddleSpeed:e.target.value})),children:[(0,Jt.jsx)("option",{value:"slow",children:"Slow"}),(0,Jt.jsx)("option",{value:"normal",children:"Normal"}),(0,Jt.jsx)("option",{value:"fast",children:"Fast"})]})]}),(0,Jt.jsxs)(Wp,{children:[(0,Jt.jsx)("label",{children:"AI Difficulty:"}),(0,Jt.jsxs)("select",{value:x.aiDifficulty,onChange:e=>v(t=>({...t,aiDifficulty:e.target.value})),children:[(0,Jt.jsx)("option",{value:"easy",children:"Easy"}),(0,Jt.jsx)("option",{value:"normal",children:"Normal"}),(0,Jt.jsx)("option",{value:"hard",children:"Hard"})]})]}),(0,Jt.jsxs)(Wp,{children:[(0,Jt.jsx)("label",{children:"Winning Score:"}),(0,Jt.jsxs)("select",{value:x.winningScore,onChange:e=>v(t=>({...t,winningScore:parseInt(e.target.value)})),children:[(0,Jt.jsx)("option",{value:"5",children:"5 Points"}),(0,Jt.jsx)("option",{value:"11",children:"11 Points"}),(0,Jt.jsx)("option",{value:"15",children:"15 Points"}),(0,Jt.jsx)("option",{value:"21",children:"21 Points"})]})]}),(0,Jt.jsxs)(Wp,{children:[(0,Jt.jsx)("label",{children:"HUD Position:"}),(0,Jt.jsxs)("select",{value:x.hudPosition,onChange:e=>v(t=>({...t,hudPosition:e.target.value})),children:[(0,Jt.jsx)("option",{value:"top",children:"Top Only"}),(0,Jt.jsx)("option",{value:"bottom",children:"Bottom Only"}),(0,Jt.jsx)("option",{value:"both",children:"Top & Bottom"})]})]}),(0,Jt.jsxs)(Yp,{children:[(0,Jt.jsx)(fa,{variant:"success",onClick:()=>{_(x),y(!1),A("Settings applied successfully")},children:"\u2705 APPLY"}),(0,Jt.jsx)(fa,{variant:"secondary",onClick:()=>{_(Tp),A("Settings reset to defaults")},children:"\ud83d\udd04 DEFAULTS"}),(0,Jt.jsx)(fa,{variant:"danger",onClick:()=>y(!1),children:"\u274c CANCEL"})]})]}),(0,Jt.jsxs)(Hp,{$show:m,children:[(0,Jt.jsx)("strong",{children:"\ud83d\udc1b DEBUG INFO:"}),(0,Jt.jsx)("br",{}),"Game Status: ",s,(0,Jt.jsx)("br",{}),"Game Mode: ",o,(0,Jt.jsx)("br",{}),"Ball Speed: ",Math.abs(w.ball.speedX).toFixed(1),(0,Jt.jsx)("br",{}),"Canvas: ",Rp,"x",Np,(0,Jt.jsx)("br",{}),"AI Difficulty: ",x.aiDifficulty,(0,Jt.jsx)("br",{}),"Keys: ",Object.entries(d).filter(e=>{let[t,n]=e;return n}).map(e=>{let[t]=e;return t}).join(", "),(0,Jt.jsx)("br",{}),"User: ",j?null===P||void 0===P?void 0:P.username:"Not logged in",(0,Jt.jsx)("br",{}),(0,Jt.jsx)("strong",{children:"Recent Logs:"}),(0,Jt.jsx)("br",{}),c.map((e,t)=>(0,Jt.jsx)("div",{children:e},t))]}),"playing"===s||"paused"===s?(0,Jt.jsx)(Ip,{$settings:x,children:(0,Jt.jsx)(Dp,{ref:k,width:Rp,height:Np,$settings:x})}):(()=>{if("idle"===s)return(0,Jt.jsxs)(Up,{children:[(0,Jt.jsx)("h3",{children:"\ud83c\udfd3 Pong Game"}),(0,Jt.jsx)("p",{style:{fontSize:"1rem",color:"#b8b8b8",marginBottom:"2rem"},children:"Classic arcade tennis simulation!"}),(0,Jt.jsxs)("div",{style:{textAlign:"left",maxWidth:"450px",margin:"0 auto 2rem",lineHeight:"2"},children:[(0,Jt.jsxs)("p",{style:{color:"#ff6b9d"},children:["\ud83c\udfaf First to ",Mp," points wins"]}),(0,Jt.jsx)("p",{style:{color:"#ffaa00"},children:"\u26a1 Ball speed increases with each paddle hit"}),(0,Jt.jsx)("p",{style:{color:"#00ffff"},children:"\ud83c\udfae Use WASD or Arrow Keys to control paddle"}),(0,Jt.jsx)("p",{style:{color:"#00ff00"},children:"\ud83e\udd16 Challenge yourself against AI opponent"})]}),(0,Jt.jsxs)("div",{style:{fontSize:"0.9rem",color:"#9999ff",marginBottom:"2rem",background:"rgba(0, 255, 255, 0.05)",padding:"1rem",borderRadius:"8px",border:"1px solid rgba(0, 255, 255, 0.2)"},children:[(0,Jt.jsx)("p",{style:{margin:"0 0 0.5rem 0",fontWeight:"bold"},children:"\u2328\ufe0f Controls:"}),(0,Jt.jsx)("p",{style:{margin:"0.25rem 0"},children:"Paddle: W/S or \u2191/\u2193"}),(0,Jt.jsx)("p",{style:{margin:"0.25rem 0"},children:"Space: Pause/Resume"})]}),(0,Jt.jsxs)("div",{style:{margin:"2rem 0 1.5rem 0"},children:[(0,Jt.jsx)("label",{style:{display:"block",color:"#00ff00",fontWeight:"bold",marginBottom:"1rem",fontSize:"1rem"},children:"\ud83c\udfc6 Win Condition:"}),(0,Jt.jsxs)(Fp,{children:[(0,Jt.jsxs)("label",{children:[(0,Jt.jsx)("input",{type:"radio",name:"winningScore",value:"5",checked:5===x.winningScore,onChange:()=>{const e={...x,winningScore:5};_(e)}}),"First to 5"]}),(0,Jt.jsxs)("label",{children:[(0,Jt.jsx)("input",{type:"radio",name:"winningScore",value:"11",checked:11===x.winningScore,onChange:()=>{const e={...x,winningScore:11};_(e)}}),"First to 11"]}),(0,Jt.jsxs)("label",{children:[(0,Jt.jsx)("input",{type:"radio",name:"winningScore",value:"15",checked:15===x.winningScore,onChange:()=>{const e={...x,winningScore:15};_(e)}}),"First to 15"]})]})]}),(0,Jt.jsxs)(Bp,{children:[(0,Jt.jsx)(fa,{variant:"success",size:"lg",onClick:O,children:"\ud83d\ude80 START GAME"}),(0,Jt.jsx)(fa,{variant:"primary",size:"md",onClick:()=>y(!0),children:"\u2699\ufe0f SETTINGS"})]}),(0,Jt.jsxs)("div",{style:{color:"#00ffff",fontSize:"0.75rem",marginTop:"2.5rem",textAlign:"center",lineHeight:"1.8"},children:[(0,Jt.jsxs)("p",{style:{marginBottom:"0.5rem"},children:["Use \u2699\ufe0f ",(0,Jt.jsx)("strong",{children:"Settings"})," (top right) to configure:"]}),(0,Jt.jsxs)("p",{style:{color:"#888888"},children:["Canvas: ",x.canvasSize," \u2022 Ball Speed: ",x.ballSpeed," \u2022 AI: ",x.aiDifficulty]}),(0,Jt.jsxs)("p",{style:{color:"#888888"},children:["Debug: ",m?"ON":"OFF"," \u2022 HUD: ",x.hudPosition]})]})]});if("paused"===s)return(0,Jt.jsxs)(Up,{children:[(0,Jt.jsx)("h3",{children:"\u23f8\ufe0f GAME PAUSED"}),(0,Jt.jsxs)("p",{children:["Score: ",w.leftPaddle.score," - ",w.rightPaddle.score]}),(0,Jt.jsx)("p",{children:"Press SPACE or click RESUME to continue"})]});if("gameover"===s){const e=w.leftPaddle.score>=Mp;return(0,Jt.jsxs)(qp,{children:[(0,Jt.jsx)("h3",{children:"\ud83c\udfc6 GAME OVER!"}),(0,Jt.jsxs)("p",{children:["Winner: ",e?"You":"AI"]}),(0,Jt.jsxs)("p",{children:["Final Score: ",w.leftPaddle.score," - ",w.rightPaddle.score]}),p&&e&&(0,Jt.jsx)("div",{className:"high-score-notice",children:"\ud83c\udfc6 NEW HIGH SCORE! \ud83c\udfc6"}),!j&&(0,Jt.jsx)("p",{style:{color:"#ff6b9d",fontSize:"0.9rem"},children:"\ud83d\udca1 Login to save your high scores!"}),(0,Jt.jsxs)(Bp,{children:[(0,Jt.jsx)(fa,{variant:"success",onClick:O,children:"\ud83d\ude80 NEW GAME"}),(0,Jt.jsx)(fa,{variant:"secondary",onClick:z,children:"\ud83d\udd04 RESET"})]})]})}return null})(),"playing"===s&&(0,Jt.jsxs)("div",{style:{color:"#00ffff",fontSize:"0.8rem",position:"absolute",bottom:"10px",right:"10px",background:"rgba(0, 0, 0, 0.7)",padding:"10px",borderRadius:"5px",border:"1px solid #00ffff"},children:[(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\ud83c\udfae Controls:"})}),(0,Jt.jsx)("p",{children:"Player 1: W/S or \u2191/\u2193"}),"multi"===o&&(0,Jt.jsx)("p",{children:"Player 2: Arrow Keys"}),(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\ud83c\udfaf Goal:"})}),(0,Jt.jsxs)("p",{children:["First to ",Mp," wins!"]}),(0,Jt.jsx)("p",{children:(0,Jt.jsx)("strong",{children:"\u2699\ufe0f Settings:"})}),(0,Jt.jsxs)("p",{children:["Size: ",x.canvasSize]}),(0,Jt.jsxs)("p",{children:["AI: ",x.aiDifficulty]})]})]})})},Kp=()=>{try{return new URL("https://ingeneur001.github.io/legal-retro-gaming-service").pathname}catch{return"/legal-retro-gaming-service"}},Qp=B("pk_demo_mock_publishable_key_for_testing_retro_gaming"),Xp=window.location.hostname.includes("github.io"),Jp=!window.location.hostname.includes("localhost")&&(Xp||!0),Zp=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(Xs.getAuthorityStatus());(0,t.useEffect)(()=>{Jp&&(console.log("\ud83c\udfad Running in DEMO MODE (GitHub Pages)"),console.log("\ud83d\udcfa Backend connections are mocked"),console.log("\ud83c\udfae All UI features are visible for demonstration"))},[]),(0,t.useEffect)(()=>{},[]);const o=async e=>{if(Jp)return console.log("\ud83c\udfad Demo Mode: Socket initialization mocked"),n(!0),{success:!0,demo:!0};try{console.log("Initializing Socket.IO...");const t=await Xs.initializeAfterLogin({level:e.authority_level.toString().toUpperCase(),user:e.username});return t.success?(console.log("Socket.IO initialization successful"),n(!0),i(Xs.getAuthorityStatus())):console.error("Socket.IO initialization failed:",t.error),t}catch(t){return console.error("Socket.IO initialization error:",t),{success:!1,error:t}}};(0,t.useEffect)(()=>{if(Jp)return void console.log("\ud83c\udfad Demo Mode: Socket listeners disabled");console.log("Setting up background SocketManager listeners...");const e=()=>{i(Xs.getAuthorityStatus())},t=t=>{console.log("Authority confirmed:",t),e()},r=()=>{console.log("SocketManager connected"),e()},o=()=>{console.log("SocketManager disconnected"),n(!1),e()};Xs.on("authority-confirmed",t),Xs.on("connect",r),Xs.on("disconnect",o);const a=setInterval(e,3e4);return e(),()=>{Xs.off("authority-confirmed",t),Xs.off("connect",r),Xs.off("disconnect",o),clearInterval(a)}},[]),(0,t.useEffect)(()=>{if(Jp)return void console.log("\ud83c\udfad Demo Mode: Skipping auth check");(async()=>{try{const e=await fetch("http://localhost:3001/api/auth/authority-info",{credentials:"include"}),t=await e.json();t.isAuthenticated&&t.user&&(console.log("User already logged in, connecting socket..."),await o({authority_level:t.authority,username:t.user.username}))}catch(e){console.log("No existing session, socket will connect on login")}})()},[]);return(0,Jt.jsx)(on,{children:(0,Jt.jsx)(wo,{children:(0,Jt.jsx)(E,{stripe:Qp,children:(0,Jt.jsx)("div",{className:"App",children:(0,Jt.jsx)(Ut,{basename:Kp(),children:(0,Jt.jsxs)(at,{children:[(0,Jt.jsx)(it,{path:"/",element:(0,Jt.jsx)(yo,{})}),(0,Jt.jsx)(it,{path:"/login",element:(0,Jt.jsx)(Do,{})}),(0,Jt.jsx)(it,{path:"/register",element:(0,Jt.jsx)(mu,{})}),(0,Jt.jsx)(it,{path:"/games",element:(0,Jt.jsx)(aa,{})}),(0,Jt.jsx)(it,{path:"/singleplayer",element:(0,Jt.jsx)(ja,{})}),(0,Jt.jsx)(it,{path:"/multiplayer",element:(0,Jt.jsx)(Xl,{})}),(0,Jt.jsx)(it,{path:"/arcade",element:(0,Jt.jsx)(lc,{})}),(0,Jt.jsx)(it,{path:"/singleplayer/snake",element:(0,Jt.jsx)(Mf,{})}),(0,Jt.jsx)(it,{path:"/singleplayer/tetris",element:(0,Jt.jsx)(ip,{})}),(0,Jt.jsx)(it,{path:"/singleplayer/memory",element:(0,Jt.jsx)(Cp,{})}),(0,Jt.jsx)(it,{path:"/singleplayer/pong",element:(0,Jt.jsx)(Vp,{})}),(0,Jt.jsx)(it,{path:"/profile",element:(0,Jt.jsx)(Ac,{})}),(0,Jt.jsx)(it,{path:"/settings",element:(0,Jt.jsx)(Vc,{})}),(0,Jt.jsx)(it,{path:"/profile/payment",element:(0,Jt.jsx)(Uu,{})}),(0,Jt.jsx)(it,{path:"/pricing",element:(0,Jt.jsx)(Hu,{})}),(0,Jt.jsx)(it,{path:"/billing",element:(0,Jt.jsx)(qu,{})}),(0,Jt.jsx)(it,{path:"/payment-success",element:(0,Jt.jsx)(nd,{})}),(0,Jt.jsx)(it,{path:"/dashboard",element:(0,Jt.jsx)(Zd,{})}),(0,Jt.jsx)(it,{path:"/scores",element:(0,Jt.jsx)($d,{})})]})})})})})})},eh=B("pk_demo_mock_publishable_key_for_testing_retro_gaming");console.log("\ud83c\udfad Frontend starting in DEMO mode");r.createRoot(document.getElementById("root")).render((0,Jt.jsx)(t.StrictMode,{children:(0,Jt.jsx)(E,{stripe:eh,children:(0,Jt.jsx)(Zp,{})})})),console.log("\ud83c\udfad Demo Mode Features:"),console.log("   \u2705 Mock payment processing"),console.log("   \u2705 Test card numbers work"),console.log("   \u2705 No real charges"),console.log("   \u2705 Full UI testing"),console.log("   \ud83d\udcb3 Test Card: 4242 4242 4242 4242"),console.log("\ud83c\udfae Retro Gaming Service initialized successfully!")})()})();
//# sourceMappingURL=main.28548529.js.map