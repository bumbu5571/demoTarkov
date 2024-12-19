(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var ih={exports:{}},oa={},rh={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function C0(){if(Am)return pt;Am=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,ne,Ie){this.props=N,this.context=ne,this.refs=T,this.updater=Ie||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function I(N,ne,Ie){this.props=N,this.context=ne,this.refs=T,this.updater=Ie||x}var L=I.prototype=new y;L.constructor=I,M(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Y(N,ne,Ie){var Z,ce={},Me=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)G.call(ne,Z)&&!U.hasOwnProperty(Z)&&(ce[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)ce.children=Ie;else if(1<Te){for(var Ne=Array(Te),Ze=0;Ze<Te;Ze++)Ne[Ze]=arguments[Ze+2];ce.children=Ne}if(N&&N.defaultProps)for(Z in Te=N.defaultProps,Te)ce[Z]===void 0&&(ce[Z]=Te[Z]);return{$$typeof:o,type:N,key:Me,ref:ve,props:ce,_owner:O.current}}function b(N,ne){return{$$typeof:o,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function z(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ie){return ne[Ie]})}var oe=/\/+/g;function ee(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):ne.toString(36)}function he(N,ne,Ie,Z,ce){var Me=typeof N;(Me==="undefined"||Me==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case o:case e:ve=!0}}if(ve)return ve=N,ce=ce(ve),N=Z===""?"."+ee(ve,0):Z,C(ce)?(Ie="",N!=null&&(Ie=N.replace(oe,"$&/")+"/"),he(ce,ne,Ie,"",function(Ze){return Ze})):ce!=null&&(R(ce)&&(ce=b(ce,Ie+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(oe,"$&/")+"/")+N)),ne.push(ce)),1;if(ve=0,Z=Z===""?".":Z+":",C(N))for(var Te=0;Te<N.length;Te++){Me=N[Te];var Ne=Z+ee(Me,Te);ve+=he(Me,ne,Ie,Ne,ce)}else if(Ne=_(N),typeof Ne=="function")for(N=Ne.call(N),Te=0;!(Me=N.next()).done;)Me=Me.value,Ne=Z+ee(Me,Te++),ve+=he(Me,ne,Ie,Ne,ce);else if(Me==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function de(N,ne,Ie){if(N==null)return N;var Z=[],ce=0;return he(N,Z,"","",function(Me){return ne.call(Ie,Me,ce++)}),Z}function se(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ie)},function(Ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ie)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:de,forEach:function(N,ne,Ie){de(N,function(){ne.apply(this,arguments)},Ie)},count:function(N){var ne=0;return de(N,function(){ne++}),ne},toArray:function(N){return de(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pt.Component=S,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=I,pt.StrictMode=i,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,pt.act=re,pt.cloneElement=function(N,ne,Ie){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Z=M({},N.props),ce=N.key,Me=N.ref,ve=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=O.current),ne.key!==void 0&&(ce=""+ne.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(Ne in ne)G.call(ne,Ne)&&!U.hasOwnProperty(Ne)&&(Z[Ne]=ne[Ne]===void 0&&Te!==void 0?Te[Ne]:ne[Ne])}var Ne=arguments.length-2;if(Ne===1)Z.children=Ie;else if(1<Ne){Te=Array(Ne);for(var Ze=0;Ze<Ne;Ze++)Te[Ze]=arguments[Ze+2];Z.children=Te}return{$$typeof:o,type:N.type,key:ce,ref:Me,props:Z,_owner:ve}},pt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},pt.createElement=Y,pt.createFactory=function(N){var ne=Y.bind(null,N);return ne.type=N,ne},pt.createRef=function(){return{current:null}},pt.forwardRef=function(N){return{$$typeof:u,render:N}},pt.isValidElement=R,pt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:se}},pt.memo=function(N,ne){return{$$typeof:d,type:N,compare:ne===void 0?null:ne}},pt.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},pt.unstable_act=re,pt.useCallback=function(N,ne){return le.current.useCallback(N,ne)},pt.useContext=function(N){return le.current.useContext(N)},pt.useDebugValue=function(){},pt.useDeferredValue=function(N){return le.current.useDeferredValue(N)},pt.useEffect=function(N,ne){return le.current.useEffect(N,ne)},pt.useId=function(){return le.current.useId()},pt.useImperativeHandle=function(N,ne,Ie){return le.current.useImperativeHandle(N,ne,Ie)},pt.useInsertionEffect=function(N,ne){return le.current.useInsertionEffect(N,ne)},pt.useLayoutEffect=function(N,ne){return le.current.useLayoutEffect(N,ne)},pt.useMemo=function(N,ne){return le.current.useMemo(N,ne)},pt.useReducer=function(N,ne,Ie){return le.current.useReducer(N,ne,Ie)},pt.useRef=function(N){return le.current.useRef(N)},pt.useState=function(N){return le.current.useState(N)},pt.useSyncExternalStore=function(N,ne,Ie){return le.current.useSyncExternalStore(N,ne,Ie)},pt.useTransition=function(){return le.current.useTransition()},pt.version="18.3.1",pt}var wm;function Ff(){return wm||(wm=1,rh.exports=C0()),rh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function b0(){if(Rm)return oa;Rm=1;var o=Ff(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,d){var m,g={},_=null,x=null;d!==void 0&&(_=""+d),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(x=f.ref);for(m in f)i.call(f,m)&&!a.hasOwnProperty(m)&&(g[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:u,key:_,ref:x,props:g,_owner:s.current}}return oa.Fragment=t,oa.jsx=c,oa.jsxs=c,oa}var Cm;function P0(){return Cm||(Cm=1,ih.exports=b0()),ih.exports}var Vn=P0(),Fl={},sh={exports:{}},zn={},oh={exports:{}},ah={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function L0(){return bm||(bm=1,function(o){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=B[N];if(0<s(ne,ae))B[N]=ae,B[re]=ne,re=N;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var N=0,ne=B.length,Ie=ne>>>1;N<Ie;){var Z=2*(N+1)-1,ce=B[Z],Me=Z+1,ve=B[Me];if(0>s(ce,re))Me<ne&&0>s(ve,ce)?(B[N]=ve,B[Me]=re,N=Me):(B[N]=ce,B[Z]=re,N=Z);else if(Me<ne&&0>s(ve,re))B[N]=ve,B[Me]=re,N=Me;else break e}}return ae}function s(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],d=[],m=1,g=null,_=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ae=t(d);ae!==null;){if(ae.callback===null)i(d);else if(ae.startTime<=B)i(d),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(d)}}function C(B){if(T=!1,L(B),!M)if(t(f)!==null)M=!0,se(G);else{var ae=t(d);ae!==null&&le(C,ae.startTime-B)}}function G(B,ae){M=!1,T&&(T=!1,y(Y),Y=-1),x=!0;var re=_;try{for(L(ae),g=t(f);g!==null&&(!(g.expirationTime>ae)||B&&!z());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var ne=N(g.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(f)&&i(f),L(ae)}else i(f);g=t(f)}if(g!==null)var Ie=!0;else{var Z=t(d);Z!==null&&le(C,Z.startTime-ae),Ie=!1}return Ie}finally{g=null,_=re,x=!1}}var O=!1,U=null,Y=-1,b=5,R=-1;function z(){return!(o.unstable_now()-R<b)}function oe(){if(U!==null){var B=o.unstable_now();R=B;var ae=!0;try{ae=U(!0,B)}finally{ae?ee():(O=!1,U=null)}}else O=!1}var ee;if(typeof I=="function")ee=function(){I(oe)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,de=he.port2;he.port1.onmessage=oe,ee=function(){de.postMessage(null)}}else ee=function(){S(oe,0)};function se(B){U=B,O||(O=!0,ee())}function le(B,ae){Y=S(function(){B(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,se(G))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return B()}finally{_=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=_;_=B;try{return ae()}finally{_=re}},o.unstable_scheduleCallback=function(B,ae,re){var N=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:m++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(B.sortIndex=re,e(d,B),t(f)===null&&B===t(d)&&(T?(y(Y),Y=-1):T=!0,le(C,re-N))):(B.sortIndex=ne,e(f,B),M||x||(M=!0,se(G))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var ae=_;return function(){var re=_;_=ae;try{return B.apply(this,arguments)}finally{_=re}}}}(ah)),ah}var Pm;function D0(){return Pm||(Pm=1,oh.exports=L0()),oh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function I0(){if(Lm)return zn;Lm=1;var o=Ff(),e=D0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:d.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||x(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,l,h,p,v,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,I);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,I);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,I);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,h){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,h)&&(l=null),h||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,h=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Ie=!1;function Z(n,r){if(!n||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Q){var h=Q}Reflect.construct(n,[],r)}else{try{r.call()}catch(Q){h=Q}n.call(r.prototype)}else{try{throw Error()}catch(Q){h=Q}n()}}catch(Q){if(Q&&h&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),v=h.stack.split(`
`),E=p.length-1,D=v.length-1;1<=E&&0<=D&&p[E]!==v[D];)D--;for(;1<=E&&0<=D;E--,D--)if(p[E]!==v[D]){if(E!==1||D!==1)do if(E--,D--,0>D||p[E]!==v[D]){var F=`
`+p[E].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=E&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function ce(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case O:return"Portal";case b:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case he:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=Ne(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,v.call(this,E)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Dt(n){n._valueTracker||(n._valueTracker=Ze(n))}function vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=Ne(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Mn(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Te(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function ft(n,r){mt(n,r);var l=Te(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?bt(n,r.type,l):r.hasOwnProperty("defaultValue")&&bt(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function je(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function bt(n,r,l){(r!=="number"||Ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var We=Array.isArray;function P(n,r,l,h){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,h&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(We(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Te(l)}}function pe(n,r){var l=Te(r.value),h=Te(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Ue=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ut(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Se[r]=Se[n]})});function qe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Se.hasOwnProperty(n)&&Se[n]?(""+r).trim():r+"px"}function Qe(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=qe(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,p):n[l]=p}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function it(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,ie=null,fe=null;function Pe(n){if(n=Xo(n)){if(typeof we!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Za(r),we(n.stateNode,n.type,r))}}function be(n){ie?fe?fe.push(n):fe=[n]:ie=n}function rt(){if(ie){var n=ie,r=fe;if(fe=ie=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function kt(n,r){return n(r)}function Qt(){}var Mt=!1;function Nn(n,r,l){if(Mt)return n(r,l);Mt=!0;try{return kt(n,r,l)}finally{Mt=!1,(ie!==null||fe!==null)&&(Qt(),rt())}}function En(n,r){var l=n.stateNode;if(l===null)return null;var h=Za(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var ys=!1;if(u)try{var or={};Object.defineProperty(or,"passive",{get:function(){ys=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{ys=!1}function Ui(n,r,l,h,p,v,E,D,F){var Q=Array.prototype.slice.call(arguments,3);try{r.apply(l,Q)}catch(_e){this.onError(_e)}}var Fi=!1,Vr=null,Gr=!1,ar=null,Pa={onError:function(n){Fi=!0,Vr=n}};function xs(n,r,l,h,p,v,E,D,F){Fi=!1,Vr=null,Ui.apply(Pa,arguments)}function La(n,r,l,h,p,v,E,D,F){if(xs.apply(this,arguments),Fi){if(Fi){var Q=Vr;Fi=!1,Vr=null}else throw Error(t(198));Gr||(Gr=!0,ar=Q)}}function Si(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Da(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ia(n){if(Si(n)!==n)throw Error(t(188))}function wc(n){var r=n.alternate;if(!r){if(r=Si(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Ia(p),n;if(v===h)return Ia(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=v;else{for(var E=!1,D=p.child;D;){if(D===l){E=!0,l=p,h=v;break}if(D===h){E=!0,h=p,l=v;break}D=D.sibling}if(!E){for(D=v.child;D;){if(D===l){E=!0,l=v,h=p;break}if(D===h){E=!0,h=v,l=p;break}D=D.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Na(n){return n=wc(n),n!==null?Ua(n):null}function Ua(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ua(n);if(r!==null)return r;n=n.sibling}return null}var w=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,J=e.unstable_shouldYield,te=e.unstable_requestPaint,H=e.unstable_now,xe=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,Xe=null,st=null;function Tt(n){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Xe,n,void 0,(n.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:Ye,Ht=Math.log,xt=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(Ht(n)/xt|0)|0}var jt=64,yt=4194304;function un(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ai(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,v=n.pingedLanes,E=l&268435455;if(E!==0){var D=E&~p;D!==0?h=un(D):(v&=E,v!==0&&(h=un(v)))}else E=l&~p,E!==0?h=un(E):v!==0&&(h=un(v));if(h===0)return 0;if(r!==0&&r!==h&&!(r&p)&&(p=h&-h,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if(h&4&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-At(r),p=1<<l,h|=n[l],r&=~p;return h}function Tn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wr(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-At(v),D=1<<E,F=p[E];F===-1?(!(D&l)||D&h)&&(p[E]=Tn(D,r)):F<=r&&(n.expiredLanes|=D),v&=~D}}function It(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=jt;return jt<<=1,!(jt&4194240)&&(jt=64),n}function pn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function qt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-At(r),n[r]=l}function mn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-At(l),v=1<<p;r[p]=0,h[p]=-1,n[p]=-1,l&=~v}}function Xr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-At(l),p=1<<h;p&r|n[h]&r&&(n[h]|=r),l&=~p}}var gt=0;function id(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var rd,Rc,sd,od,ad,Cc=!1,Fa=[],lr=null,cr=null,ur=null,bo=new Map,Po=new Map,hr=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ld(n,r){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":bo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(r.pointerId)}}function Lo(n,r,l,h,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},r!==null&&(r=Xo(r),r!==null&&Rc(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Z_(n,r,l,h,p){switch(r){case"focusin":return lr=Lo(lr,n,r,l,h,p),!0;case"dragenter":return cr=Lo(cr,n,r,l,h,p),!0;case"mouseover":return ur=Lo(ur,n,r,l,h,p),!0;case"pointerover":var v=p.pointerId;return bo.set(v,Lo(bo.get(v)||null,n,r,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,Po.set(v,Lo(Po.get(v)||null,n,r,l,h,p)),!0}return!1}function cd(n){var r=jr(n.target);if(r!==null){var l=Si(r);if(l!==null){if(r=l.tag,r===13){if(r=Da(l),r!==null){n.blockedOn=r,ad(n.priority,function(){sd(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Oa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Pc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);Ct=h,l.target.dispatchEvent(h),Ct=null}else return r=Xo(l),r!==null&&Rc(r),n.blockedOn=l,!1;r.shift()}return!0}function ud(n,r,l){Oa(n)&&l.delete(r)}function Q_(){Cc=!1,lr!==null&&Oa(lr)&&(lr=null),cr!==null&&Oa(cr)&&(cr=null),ur!==null&&Oa(ur)&&(ur=null),bo.forEach(ud),Po.forEach(ud)}function Do(n,r){n.blockedOn===r&&(n.blockedOn=null,Cc||(Cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Q_)))}function Io(n){function r(p){return Do(p,n)}if(0<Fa.length){Do(Fa[0],n);for(var l=1;l<Fa.length;l++){var h=Fa[l];h.blockedOn===n&&(h.blockedOn=null)}}for(lr!==null&&Do(lr,n),cr!==null&&Do(cr,n),ur!==null&&Do(ur,n),bo.forEach(r),Po.forEach(r),l=0;l<hr.length;l++)h=hr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<hr.length&&(l=hr[0],l.blockedOn===null);)cd(l),l.blockedOn===null&&hr.shift()}var Ss=C.ReactCurrentBatchConfig,ka=!0;function J_(n,r,l,h){var p=gt,v=Ss.transition;Ss.transition=null;try{gt=1,bc(n,r,l,h)}finally{gt=p,Ss.transition=v}}function ev(n,r,l,h){var p=gt,v=Ss.transition;Ss.transition=null;try{gt=4,bc(n,r,l,h)}finally{gt=p,Ss.transition=v}}function bc(n,r,l,h){if(ka){var p=Pc(n,r,l,h);if(p===null)Yc(n,r,h,Ba,l),ld(n,h);else if(Z_(p,n,r,l,h))h.stopPropagation();else if(ld(n,h),r&4&&-1<$_.indexOf(n)){for(;p!==null;){var v=Xo(p);if(v!==null&&rd(v),v=Pc(n,r,l,h),v===null&&Yc(n,r,h,Ba,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else Yc(n,r,h,null,l)}}var Ba=null;function Pc(n,r,l,h){if(Ba=null,n=W(h),n=jr(n),n!==null)if(r=Si(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Da(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ba=n,null}function hd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xe()){case Re:return 1;case De:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var fr=null,Lc=null,za=null;function fd(){if(za)return za;var n,r=Lc,l=r.length,h,p="value"in fr?fr.value:fr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var E=l-n;for(h=1;h<=E&&r[l-h]===p[v-h];h++);return za=p.slice(n,1<h?1-h:void 0)}function Ha(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Va(){return!0}function dd(){return!1}function Wn(n){function r(l,h,p,v,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Va:dd,this.isPropagationStopped=dd,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),r}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=Wn(Ms),No=re({},Ms,{view:0,detail:0}),tv=Wn(No),Ic,Nc,Uo,Ga=re({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Uo&&(Uo&&n.type==="mousemove"?(Ic=n.screenX-Uo.screenX,Nc=n.screenY-Uo.screenY):Nc=Ic=0,Uo=n),Ic)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),pd=Wn(Ga),nv=re({},Ga,{dataTransfer:0}),iv=Wn(nv),rv=re({},No,{relatedTarget:0}),Uc=Wn(rv),sv=re({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Wn(sv),av=re({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lv=Wn(av),cv=re({},Ms,{data:0}),md=Wn(cv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=fv[n])?!!r[n]:!1}function Fc(){return dv}var pv=re({},No,{key:function(n){if(n.key){var r=uv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ha(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(n){return n.type==="keypress"?Ha(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ha(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mv=Wn(pv),gv=re({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=Wn(gv),_v=re({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),vv=Wn(_v),yv=re({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),xv=Wn(yv),Sv=re({},Ga,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=Wn(Sv),Ev=[9,13,27,32],Oc=u&&"CompositionEvent"in window,Fo=null;u&&"documentMode"in document&&(Fo=document.documentMode);var Tv=u&&"TextEvent"in window&&!Fo,_d=u&&(!Oc||Fo&&8<Fo&&11>=Fo),vd=" ",yd=!1;function xd(n,r){switch(n){case"keyup":return Ev.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function Av(n,r){switch(n){case"compositionend":return Sd(r);case"keypress":return r.which!==32?null:(yd=!0,vd);case"textInput":return n=r.data,n===vd&&yd?null:n;default:return null}}function wv(n,r){if(Es)return n==="compositionend"||!Oc&&xd(n,r)?(n=fd(),za=Lc=fr=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _d&&r.locale!=="ko"?null:r.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Rv[n.type]:r==="textarea"}function Ed(n,r,l,h){be(h),r=qa(r,"onChange"),0<r.length&&(l=new Dc("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var Oo=null,ko=null;function Cv(n){Hd(n,0)}function Wa(n){var r=Cs(n);if(vt(r))return n}function bv(n,r){if(n==="change")return r}var Td=!1;if(u){var kc;if(u){var Bc="oninput"in document;if(!Bc){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Bc=typeof Ad.oninput=="function"}kc=Bc}else kc=!1;Td=kc&&(!document.documentMode||9<document.documentMode)}function wd(){Oo&&(Oo.detachEvent("onpropertychange",Rd),ko=Oo=null)}function Rd(n){if(n.propertyName==="value"&&Wa(ko)){var r=[];Ed(r,ko,n,W(n)),Nn(Cv,r)}}function Pv(n,r,l){n==="focusin"?(wd(),Oo=r,ko=l,Oo.attachEvent("onpropertychange",Rd)):n==="focusout"&&wd()}function Lv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wa(ko)}function Dv(n,r){if(n==="click")return Wa(r)}function Iv(n,r){if(n==="input"||n==="change")return Wa(r)}function Nv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var li=typeof Object.is=="function"?Object.is:Nv;function Bo(n,r){if(li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(r,p)||!li(n[p],r[p]))return!1}return!0}function Cd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bd(n,r){var l=Cd(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Cd(l)}}function Pd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Pd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ld(){for(var n=window,r=Ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ft(n.document)}return r}function zc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Uv(n){var r=Ld(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Pd(l.ownerDocument.documentElement,l)){if(h!==null&&zc(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!n.extend&&v>h&&(p=h,h=v,v=p),p=bd(l,v);var E=bd(l,h);p&&E&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fv=u&&"documentMode"in document&&11>=document.documentMode,Ts=null,Hc=null,zo=null,Vc=!1;function Dd(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vc||Ts==null||Ts!==Ft(h)||(h=Ts,"selectionStart"in h&&zc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),zo&&Bo(zo,h)||(zo=h,h=qa(Hc,"onSelect"),0<h.length&&(r=new Dc("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=Ts)))}function Xa(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var As={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},Gc={},Id={};u&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function ja(n){if(Gc[n])return Gc[n];if(!As[n])return n;var r=As[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Id)return Gc[n]=r[l];return n}var Nd=ja("animationend"),Ud=ja("animationiteration"),Fd=ja("animationstart"),Od=ja("transitionend"),kd=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,r){kd.set(n,r),a(r,[n])}for(var Wc=0;Wc<Bd.length;Wc++){var Xc=Bd[Wc],Ov=Xc.toLowerCase(),kv=Xc[0].toUpperCase()+Xc.slice(1);dr(Ov,"on"+kv)}dr(Nd,"onAnimationEnd"),dr(Ud,"onAnimationIteration"),dr(Fd,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(Od,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function zd(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,La(h,r,void 0,n),n.currentTarget=null}function Hd(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],p=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var E=h.length-1;0<=E;E--){var D=h[E],F=D.instance,Q=D.currentTarget;if(D=D.listener,F!==v&&p.isPropagationStopped())break e;zd(p,D,Q),v=F}else for(E=0;E<h.length;E++){if(D=h[E],F=D.instance,Q=D.currentTarget,D=D.listener,F!==v&&p.isPropagationStopped())break e;zd(p,D,Q),v=F}}}if(Gr)throw n=ar,Gr=!1,ar=null,n}function Bt(n,r){var l=r[Jc];l===void 0&&(l=r[Jc]=new Set);var h=n+"__bubble";l.has(h)||(Vd(r,n,2,!1),l.add(h))}function jc(n,r,l){var h=0;r&&(h|=4),Vd(l,n,h,r)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Vo(n){if(!n[Ya]){n[Ya]=!0,i.forEach(function(l){l!=="selectionchange"&&(Bv.has(l)||jc(l,!1,n),jc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ya]||(r[Ya]=!0,jc("selectionchange",!1,r))}}function Vd(n,r,l,h){switch(hd(r)){case 1:var p=J_;break;case 4:p=ev;break;default:p=bc}l=p.bind(null,r,l,n),p=void 0,!ys||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Yc(n,r,l,h,p){var v=h;if(!(r&1)&&!(r&2)&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var D=h.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===p||F.nodeType===8&&F.parentNode===p))return;E=E.return}for(;D!==null;){if(E=jr(D),E===null)return;if(F=E.tag,F===5||F===6){h=v=E;continue e}D=D.parentNode}}h=h.return}Nn(function(){var Q=v,_e=W(l),ye=[];e:{var me=kd.get(n);if(me!==void 0){var Le=Dc,ze=n;switch(n){case"keypress":if(Ha(l)===0)break e;case"keydown":case"keyup":Le=mv;break;case"focusin":ze="focus",Le=Uc;break;case"focusout":ze="blur",Le=Uc;break;case"beforeblur":case"afterblur":Le=Uc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=vv;break;case Nd:case Ud:case Fd:Le=ov;break;case Od:Le=xv;break;case"scroll":Le=tv;break;case"wheel":Le=Mv;break;case"copy":case"cut":case"paste":Le=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=gd}var He=(r&4)!==0,Kt=!He&&n==="scroll",q=He?me!==null?me+"Capture":null:me;He=[];for(var V=Q,K;V!==null;){K=V;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,q!==null&&(Ee=En(V,q),Ee!=null&&He.push(Go(V,Ee,K)))),Kt)break;V=V.return}0<He.length&&(me=new Le(me,ze,null,l,_e),ye.push({event:me,listeners:He}))}}if(!(r&7)){e:{if(me=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",me&&l!==Ct&&(ze=l.relatedTarget||l.fromElement)&&(jr(ze)||ze[Oi]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ze=l.relatedTarget||l.toElement,Le=Q,ze=ze?jr(ze):null,ze!==null&&(Kt=Si(ze),ze!==Kt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Le=null,ze=Q),Le!==ze)){if(He=pd,Ee="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(He=gd,Ee="onPointerLeave",q="onPointerEnter",V="pointer"),Kt=Le==null?me:Cs(Le),K=ze==null?me:Cs(ze),me=new He(Ee,V+"leave",Le,l,_e),me.target=Kt,me.relatedTarget=K,Ee=null,jr(_e)===Q&&(He=new He(q,V+"enter",ze,l,_e),He.target=K,He.relatedTarget=Kt,Ee=He),Kt=Ee,Le&&ze)t:{for(He=Le,q=ze,V=0,K=He;K;K=ws(K))V++;for(K=0,Ee=q;Ee;Ee=ws(Ee))K++;for(;0<V-K;)He=ws(He),V--;for(;0<K-V;)q=ws(q),K--;for(;V--;){if(He===q||q!==null&&He===q.alternate)break t;He=ws(He),q=ws(q)}He=null}else He=null;Le!==null&&Gd(ye,me,Le,He,!1),ze!==null&&Kt!==null&&Gd(ye,Kt,ze,He,!0)}}e:{if(me=Q?Cs(Q):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var Ge=bv;else if(Md(me))if(Td)Ge=Iv;else{Ge=Lv;var Ke=Pv}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=Dv);if(Ge&&(Ge=Ge(n,Q))){Ed(ye,Ge,l,_e);break e}Ke&&Ke(n,me,Q),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&bt(me,"number",me.value)}switch(Ke=Q?Cs(Q):window,n){case"focusin":(Md(Ke)||Ke.contentEditable==="true")&&(Ts=Ke,Hc=Q,zo=null);break;case"focusout":zo=Hc=Ts=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Dd(ye,l,_e);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":Dd(ye,l,_e)}var $e;if(Oc)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Es?xd(n,l)&&(tt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(tt="onCompositionStart");tt&&(_d&&l.locale!=="ko"&&(Es||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Es&&($e=fd()):(fr=_e,Lc="value"in fr?fr.value:fr.textContent,Es=!0)),Ke=qa(Q,tt),0<Ke.length&&(tt=new md(tt,n,null,l,_e),ye.push({event:tt,listeners:Ke}),$e?tt.data=$e:($e=Sd(l),$e!==null&&(tt.data=$e)))),($e=Tv?Av(n,l):wv(n,l))&&(Q=qa(Q,"onBeforeInput"),0<Q.length&&(_e=new md("onBeforeInput","beforeinput",null,l,_e),ye.push({event:_e,listeners:Q}),_e.data=$e))}Hd(ye,r)})}function Go(n,r,l){return{instance:n,listener:r,currentTarget:l}}function qa(n,r){for(var l=r+"Capture",h=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=En(n,l),v!=null&&h.unshift(Go(n,v,p)),v=En(n,r),v!=null&&h.push(Go(n,v,p))),n=n.return}return h}function ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gd(n,r,l,h,p){for(var v=r._reactName,E=[];l!==null&&l!==h;){var D=l,F=D.alternate,Q=D.stateNode;if(F!==null&&F===h)break;D.tag===5&&Q!==null&&(D=Q,p?(F=En(l,v),F!=null&&E.unshift(Go(l,F,D))):p||(F=En(l,v),F!=null&&E.push(Go(l,F,D)))),l=l.return}E.length!==0&&n.push({event:r,listeners:E})}var zv=/\r\n?/g,Hv=/\u0000|\uFFFD/g;function Wd(n){return(typeof n=="string"?n:""+n).replace(zv,`
`).replace(Hv,"")}function Ka(n,r,l){if(r=Wd(r),Wd(n)!==r&&l)throw Error(t(425))}function $a(){}var qc=null,Kc=null;function $c(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,Vv=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,Gv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(n){return Xd.resolve(null).then(n).catch(Wv)}:Zc;function Wv(n){setTimeout(function(){throw n})}function Qc(n,r){var l=r,h=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){n.removeChild(p),Io(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Io(r)}function pr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function jd(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Rs,Wo="__reactProps$"+Rs,Oi="__reactContainer$"+Rs,Jc="__reactEvents$"+Rs,Xv="__reactListeners$"+Rs,jv="__reactHandles$"+Rs;function jr(n){var r=n[Mi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Oi]||l[Mi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=jd(n);n!==null;){if(l=n[Mi])return l;n=jd(n)}return r}n=l,l=n.parentNode}return null}function Xo(n){return n=n[Mi]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Za(n){return n[Wo]||null}var eu=[],bs=-1;function mr(n){return{current:n}}function zt(n){0>bs||(n.current=eu[bs],eu[bs]=null,bs--)}function Ot(n,r){bs++,eu[bs]=n.current,n.current=r}var gr={},gn=mr(gr),Un=mr(!1),Yr=gr;function Ps(n,r){var l=n.type.contextTypes;if(!l)return gr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Fn(n){return n=n.childContextTypes,n!=null}function Qa(){zt(Un),zt(gn)}function Yd(n,r,l){if(gn.current!==gr)throw Error(t(168));Ot(gn,r),Ot(Un,l)}function qd(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return re({},l,h)}function Ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Yr=gn.current,Ot(gn,n),Ot(Un,Un.current),!0}function Kd(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=qd(n,r,Yr),h.__reactInternalMemoizedMergedChildContext=n,zt(Un),zt(gn),Ot(gn,n)):zt(Un),Ot(Un,l)}var ki=null,el=!1,tu=!1;function $d(n){ki===null?ki=[n]:ki.push(n)}function Yv(n){el=!0,$d(n)}function _r(){if(!tu&&ki!==null){tu=!0;var n=0,r=gt;try{var l=ki;for(gt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}ki=null,el=!1}catch(p){throw ki!==null&&(ki=ki.slice(n+1)),w(Re,_r),p}finally{gt=r,tu=!1}}return null}var Ls=[],Ds=0,tl=null,nl=0,Qn=[],Jn=0,qr=null,Bi=1,zi="";function Kr(n,r){Ls[Ds++]=nl,Ls[Ds++]=tl,tl=n,nl=r}function Zd(n,r,l){Qn[Jn++]=Bi,Qn[Jn++]=zi,Qn[Jn++]=qr,qr=n;var h=Bi;n=zi;var p=32-At(h)-1;h&=~(1<<p),l+=1;var v=32-At(r)+p;if(30<v){var E=p-p%5;v=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Bi=1<<32-At(r)+p|l<<p|h,zi=v+n}else Bi=1<<v|l<<p|h,zi=n}function nu(n){n.return!==null&&(Kr(n,1),Zd(n,1,0))}function iu(n){for(;n===tl;)tl=Ls[--Ds],Ls[Ds]=null,nl=Ls[--Ds],Ls[Ds]=null;for(;n===qr;)qr=Qn[--Jn],Qn[Jn]=null,zi=Qn[--Jn],Qn[Jn]=null,Bi=Qn[--Jn],Qn[Jn]=null}var Xn=null,jn=null,Vt=!1,ci=null;function Qd(n,r){var l=ii(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Jd(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Xn=n,jn=pr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Xn=n,jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=qr!==null?{id:Bi,overflow:zi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ii(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Xn=n,jn=null,!0):!1;default:return!1}}function ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function su(n){if(Vt){var r=jn;if(r){var l=r;if(!Jd(n,r)){if(ru(n))throw Error(t(418));r=pr(l.nextSibling);var h=Xn;r&&Jd(n,r)?Qd(h,l):(n.flags=n.flags&-4097|2,Vt=!1,Xn=n)}}else{if(ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Xn=n}}}function ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function il(n){if(n!==Xn)return!1;if(!Vt)return ep(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$c(n.type,n.memoizedProps)),r&&(r=jn)){if(ru(n))throw tp(),Error(t(418));for(;r;)Qd(n,r),r=pr(r.nextSibling)}if(ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){jn=pr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}jn=null}}else jn=Xn?pr(n.stateNode.nextSibling):null;return!0}function tp(){for(var n=jn;n;)n=pr(n.nextSibling)}function Is(){jn=Xn=null,Vt=!1}function ou(n){ci===null?ci=[n]:ci.push(n)}var qv=C.ReactCurrentBatchConfig;function jo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var p=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(E){var D=p.refs;E===null?delete D[v]:D[v]=E},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function rl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function np(n){var r=n._init;return r(n._payload)}function ip(n){function r(q,V){if(n){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function l(q,V){if(!n)return null;for(;V!==null;)r(q,V),V=V.sibling;return null}function h(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function p(q,V){return q=Ar(q,V),q.index=0,q.sibling=null,q}function v(q,V,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function D(q,V,K,Ee){return V===null||V.tag!==6?(V=Zu(K,q.mode,Ee),V.return=q,V):(V=p(V,K),V.return=q,V)}function F(q,V,K,Ee){var Ge=K.type;return Ge===U?_e(q,V,K.props.children,Ee,K.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&np(Ge)===V.type)?(Ee=p(V,K.props),Ee.ref=jo(q,V,K),Ee.return=q,Ee):(Ee=Cl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=jo(q,V,K),Ee.return=q,Ee)}function Q(q,V,K,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Qu(K,q.mode,Ee),V.return=q,V):(V=p(V,K.children||[]),V.return=q,V)}function _e(q,V,K,Ee,Ge){return V===null||V.tag!==7?(V=is(K,q.mode,Ee,Ge),V.return=q,V):(V=p(V,K),V.return=q,V)}function ye(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Zu(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return K=Cl(V.type,V.key,V.props,null,q.mode,K),K.ref=jo(q,null,V),K.return=q,K;case O:return V=Qu(V,q.mode,K),V.return=q,V;case se:var Ee=V._init;return ye(q,Ee(V._payload),K)}if(We(V)||ae(V))return V=is(V,q.mode,K,null),V.return=q,V;rl(q,V)}return null}function me(q,V,K,Ee){var Ge=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ge!==null?null:D(q,V,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===Ge?F(q,V,K,Ee):null;case O:return K.key===Ge?Q(q,V,K,Ee):null;case se:return Ge=K._init,me(q,V,Ge(K._payload),Ee)}if(We(K)||ae(K))return Ge!==null?null:_e(q,V,K,Ee,null);rl(q,K)}return null}function Le(q,V,K,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(K)||null,D(V,q,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case G:return q=q.get(Ee.key===null?K:Ee.key)||null,F(V,q,Ee,Ge);case O:return q=q.get(Ee.key===null?K:Ee.key)||null,Q(V,q,Ee,Ge);case se:var Ke=Ee._init;return Le(q,V,K,Ke(Ee._payload),Ge)}if(We(Ee)||ae(Ee))return q=q.get(K)||null,_e(V,q,Ee,Ge,null);rl(V,Ee)}return null}function ze(q,V,K,Ee){for(var Ge=null,Ke=null,$e=V,tt=V=0,an=null;$e!==null&&tt<K.length;tt++){$e.index>tt?(an=$e,$e=null):an=$e.sibling;var wt=me(q,$e,K[tt],Ee);if(wt===null){$e===null&&($e=an);break}n&&$e&&wt.alternate===null&&r(q,$e),V=v(wt,V,tt),Ke===null?Ge=wt:Ke.sibling=wt,Ke=wt,$e=an}if(tt===K.length)return l(q,$e),Vt&&Kr(q,tt),Ge;if($e===null){for(;tt<K.length;tt++)$e=ye(q,K[tt],Ee),$e!==null&&(V=v($e,V,tt),Ke===null?Ge=$e:Ke.sibling=$e,Ke=$e);return Vt&&Kr(q,tt),Ge}for($e=h(q,$e);tt<K.length;tt++)an=Le($e,q,tt,K[tt],Ee),an!==null&&(n&&an.alternate!==null&&$e.delete(an.key===null?tt:an.key),V=v(an,V,tt),Ke===null?Ge=an:Ke.sibling=an,Ke=an);return n&&$e.forEach(function(wr){return r(q,wr)}),Vt&&Kr(q,tt),Ge}function He(q,V,K,Ee){var Ge=ae(K);if(typeof Ge!="function")throw Error(t(150));if(K=Ge.call(K),K==null)throw Error(t(151));for(var Ke=Ge=null,$e=V,tt=V=0,an=null,wt=K.next();$e!==null&&!wt.done;tt++,wt=K.next()){$e.index>tt?(an=$e,$e=null):an=$e.sibling;var wr=me(q,$e,wt.value,Ee);if(wr===null){$e===null&&($e=an);break}n&&$e&&wr.alternate===null&&r(q,$e),V=v(wr,V,tt),Ke===null?Ge=wr:Ke.sibling=wr,Ke=wr,$e=an}if(wt.done)return l(q,$e),Vt&&Kr(q,tt),Ge;if($e===null){for(;!wt.done;tt++,wt=K.next())wt=ye(q,wt.value,Ee),wt!==null&&(V=v(wt,V,tt),Ke===null?Ge=wt:Ke.sibling=wt,Ke=wt);return Vt&&Kr(q,tt),Ge}for($e=h(q,$e);!wt.done;tt++,wt=K.next())wt=Le($e,q,tt,wt.value,Ee),wt!==null&&(n&&wt.alternate!==null&&$e.delete(wt.key===null?tt:wt.key),V=v(wt,V,tt),Ke===null?Ge=wt:Ke.sibling=wt,Ke=wt);return n&&$e.forEach(function(R0){return r(q,R0)}),Vt&&Kr(q,tt),Ge}function Kt(q,V,K,Ee){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var Ge=K.key,Ke=V;Ke!==null;){if(Ke.key===Ge){if(Ge=K.type,Ge===U){if(Ke.tag===7){l(q,Ke.sibling),V=p(Ke,K.props.children),V.return=q,q=V;break e}}else if(Ke.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&np(Ge)===Ke.type){l(q,Ke.sibling),V=p(Ke,K.props),V.ref=jo(q,Ke,K),V.return=q,q=V;break e}l(q,Ke);break}else r(q,Ke);Ke=Ke.sibling}K.type===U?(V=is(K.props.children,q.mode,Ee,K.key),V.return=q,q=V):(Ee=Cl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=jo(q,V,K),Ee.return=q,q=Ee)}return E(q);case O:e:{for(Ke=K.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){l(q,V.sibling),V=p(V,K.children||[]),V.return=q,q=V;break e}else{l(q,V);break}else r(q,V);V=V.sibling}V=Qu(K,q.mode,Ee),V.return=q,q=V}return E(q);case se:return Ke=K._init,Kt(q,V,Ke(K._payload),Ee)}if(We(K))return ze(q,V,K,Ee);if(ae(K))return He(q,V,K,Ee);rl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(l(q,V.sibling),V=p(V,K),V.return=q,q=V):(l(q,V),V=Zu(K,q.mode,Ee),V.return=q,q=V),E(q)):l(q,V)}return Kt}var Ns=ip(!0),rp=ip(!1),sl=mr(null),ol=null,Us=null,au=null;function lu(){au=Us=ol=null}function cu(n){var r=sl.current;zt(sl),n._currentValue=r}function uu(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Fs(n,r){ol=n,au=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(On=!0),n.firstContext=null)}function ei(n){var r=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:r,next:null},Us===null){if(ol===null)throw Error(t(308));Us=n,ol.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return r}var $r=null;function hu(n){$r===null?$r=[n]:$r.push(n)}function sp(n,r,l,h){var p=r.interleaved;return p===null?(l.next=l,hu(r)):(l.next=p.next,p.next=l),r.interleaved=l,Hi(n,h)}function Hi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var vr=!1;function fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function yr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,Et&2){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,Hi(n,l)}return p=h.interleaved,p===null?(r.next=r,hu(h)):(r.next=p.next,p.next=r),h.interleaved=r,Hi(n,l)}function al(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Xr(n,l)}}function ap(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=E:v=v.next=E,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function ll(n,r,l,h){var p=n.updateQueue;vr=!1;var v=p.firstBaseUpdate,E=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var F=D,Q=F.next;F.next=null,E===null?v=Q:E.next=Q,E=F;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==E&&(D===null?_e.firstBaseUpdate=Q:D.next=Q,_e.lastBaseUpdate=F))}if(v!==null){var ye=p.baseState;E=0,_e=Q=F=null,D=v;do{var me=D.lane,Le=D.eventTime;if((h&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=n,He=D;switch(me=r,Le=l,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(Le,ye,me);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,me=typeof ze=="function"?ze.call(Le,ye,me):ze,me==null)break e;ye=re({},ye,me);break e;case 2:vr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[D]:me.push(D))}else Le={eventTime:Le,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(Q=_e=Le,F=ye):_e=_e.next=Le,E|=me;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;me=D,D=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(F=ye),p.baseState=F,p.firstBaseUpdate=Q,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do E|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);Jr|=E,n.lanes=E,n.memoizedState=ye}}function lp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Yo={},Ei=mr(Yo),qo=mr(Yo),Ko=mr(Yo);function Zr(n){if(n===Yo)throw Error(t(174));return n}function du(n,r){switch(Ot(Ko,r),Ot(qo,n),Ot(Ei,Yo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ve(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ve(r,n)}zt(Ei),Ot(Ei,r)}function Os(){zt(Ei),zt(qo),zt(Ko)}function cp(n){Zr(Ko.current);var r=Zr(Ei.current),l=Ve(r,n.type);r!==l&&(Ot(qo,n),Ot(Ei,l))}function pu(n){qo.current===n&&(zt(Ei),zt(qo))}var Wt=mr(0);function cl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var mu=[];function gu(){for(var n=0;n<mu.length;n++)mu[n]._workInProgressVersionPrimary=null;mu.length=0}var ul=C.ReactCurrentDispatcher,_u=C.ReactCurrentBatchConfig,Qr=0,Xt=null,Jt=null,sn=null,hl=!1,$o=!1,Zo=0,Kv=0;function _n(){throw Error(t(321))}function vu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!li(n[l],r[l]))return!1;return!0}function yu(n,r,l,h,p,v){if(Qr=v,Xt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ul.current=n===null||n.memoizedState===null?Jv:e0,n=l(h,p),$o){v=0;do{if($o=!1,Zo=0,25<=v)throw Error(t(301));v+=1,sn=Jt=null,r.updateQueue=null,ul.current=t0,n=l(h,p)}while($o)}if(ul.current=pl,r=Jt!==null&&Jt.next!==null,Qr=0,sn=Jt=Xt=null,hl=!1,r)throw Error(t(300));return n}function xu(){var n=Zo!==0;return Zo=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Xt.memoizedState=sn=n:sn=sn.next=n,sn}function ti(){if(Jt===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var r=sn===null?Xt.memoizedState:sn.next;if(r!==null)sn=r,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?Xt.memoizedState=sn=n:sn=sn.next=n}return sn}function Qo(n,r){return typeof r=="function"?r(n):r}function Su(n){var r=ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=Jt,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var E=p.next;p.next=v.next,v.next=E}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var D=E=null,F=null,Q=v;do{var _e=Q.lane;if((Qr&_e)===_e)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),h=Q.hasEagerState?Q.eagerState:n(h,Q.action);else{var ye={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(D=F=ye,E=h):F=F.next=ye,Xt.lanes|=_e,Jr|=_e}Q=Q.next}while(Q!==null&&Q!==v);F===null?E=h:F.next=D,li(h,r.memoizedState)||(On=!0),r.memoizedState=h,r.baseState=E,r.baseQueue=F,l.lastRenderedState=h}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Xt.lanes|=v,Jr|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Mu(n){var r=ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do v=n(v,E.action),E=E.next;while(E!==p);li(v,r.memoizedState)||(On=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function up(){}function hp(n,r){var l=Xt,h=ti(),p=r(),v=!li(h.memoizedState,p);if(v&&(h.memoizedState=p,On=!0),h=h.queue,Eu(pp.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||sn!==null&&sn.memoizedState.tag&1){if(l.flags|=2048,Jo(9,dp.bind(null,l,h,p,r),void 0,null),on===null)throw Error(t(349));Qr&30||fp(l,r,p)}return p}function fp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Xt.updateQueue,r===null?(r={lastEffect:null,stores:null},Xt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function dp(n,r,l,h){r.value=l,r.getSnapshot=h,mp(r)&&gp(n)}function pp(n,r,l){return l(function(){mp(r)&&gp(n)})}function mp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!li(n,l)}catch{return!0}}function gp(n){var r=Hi(n,1);r!==null&&di(r,n,1,-1)}function _p(n){var r=Ti();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:n},r.queue=n,n=n.dispatch=Qv.bind(null,Xt,n),[r.memoizedState,n]}function Jo(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Xt.updateQueue,r===null?(r={lastEffect:null,stores:null},Xt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function vp(){return ti().memoizedState}function fl(n,r,l,h){var p=Ti();Xt.flags|=n,p.memoizedState=Jo(1|r,l,void 0,h===void 0?null:h)}function dl(n,r,l,h){var p=ti();h=h===void 0?null:h;var v=void 0;if(Jt!==null){var E=Jt.memoizedState;if(v=E.destroy,h!==null&&vu(h,E.deps)){p.memoizedState=Jo(r,l,v,h);return}}Xt.flags|=n,p.memoizedState=Jo(1|r,l,v,h)}function yp(n,r){return fl(8390656,8,n,r)}function Eu(n,r){return dl(2048,8,n,r)}function xp(n,r){return dl(4,2,n,r)}function Sp(n,r){return dl(4,4,n,r)}function Mp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ep(n,r,l){return l=l!=null?l.concat([n]):null,dl(4,4,Mp.bind(null,r,n),l)}function Tu(){}function Tp(n,r){var l=ti();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&vu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function Ap(n,r){var l=ti();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&vu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function wp(n,r,l){return Qr&21?(li(l,r)||(l=An(),Xt.lanes|=l,Jr|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=l)}function $v(n,r){var l=gt;gt=l!==0&&4>l?l:4,n(!0);var h=_u.transition;_u.transition={};try{n(!1),r()}finally{gt=l,_u.transition=h}}function Rp(){return ti().memoizedState}function Zv(n,r,l){var h=Er(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Cp(n))bp(r,l);else if(l=sp(n,r,l,h),l!==null){var p=Rn();di(l,n,h,p),Pp(l,r,h)}}function Qv(n,r,l){var h=Er(n),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Cp(n))bp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var E=r.lastRenderedState,D=v(E,l);if(p.hasEagerState=!0,p.eagerState=D,li(D,E)){var F=r.interleaved;F===null?(p.next=p,hu(r)):(p.next=F.next,F.next=p),r.interleaved=p;return}}catch{}finally{}l=sp(n,r,p,h),l!==null&&(p=Rn(),di(l,n,h,p),Pp(l,r,h))}}function Cp(n){var r=n.alternate;return n===Xt||r!==null&&r===Xt}function bp(n,r){$o=hl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Pp(n,r,l){if(l&4194240){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Xr(n,l)}}var pl={readContext:ei,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Jv={readContext:ei,useCallback:function(n,r){return Ti().memoizedState=[n,r===void 0?null:r],n},useContext:ei,useEffect:yp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,fl(4194308,4,Mp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return fl(4,2,n,r)},useMemo:function(n,r){var l=Ti();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ti();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=Zv.bind(null,Xt,n),[h.memoizedState,n]},useRef:function(n){var r=Ti();return n={current:n},r.memoizedState=n},useState:_p,useDebugValue:Tu,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=_p(!1),r=n[0];return n=$v.bind(null,n[1]),Ti().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Xt,p=Ti();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),on===null)throw Error(t(349));Qr&30||fp(h,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,yp(pp.bind(null,h,v,n),[n]),h.flags|=2048,Jo(9,dp.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Ti(),r=on.identifierPrefix;if(Vt){var l=zi,h=Bi;l=(h&~(1<<32-At(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=Zo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Kv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},e0={readContext:ei,useCallback:Tp,useContext:ei,useEffect:Eu,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:Sp,useMemo:Ap,useReducer:Su,useRef:vp,useState:function(){return Su(Qo)},useDebugValue:Tu,useDeferredValue:function(n){var r=ti();return wp(r,Jt.memoizedState,n)},useTransition:function(){var n=Su(Qo)[0],r=ti().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:hp,useId:Rp,unstable_isNewReconciler:!1},t0={readContext:ei,useCallback:Tp,useContext:ei,useEffect:Eu,useImperativeHandle:Ep,useInsertionEffect:xp,useLayoutEffect:Sp,useMemo:Ap,useReducer:Mu,useRef:vp,useState:function(){return Mu(Qo)},useDebugValue:Tu,useDeferredValue:function(n){var r=ti();return Jt===null?r.memoizedState=n:wp(r,Jt.memoizedState,n)},useTransition:function(){var n=Mu(Qo)[0],r=ti().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:hp,useId:Rp,unstable_isNewReconciler:!1};function ui(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Au(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var ml={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Rn(),p=Er(n),v=Vi(h,p);v.payload=r,l!=null&&(v.callback=l),r=yr(n,v,p),r!==null&&(di(r,n,p,h),al(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Rn(),p=Er(n),v=Vi(h,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=yr(n,v,p),r!==null&&(di(r,n,p,h),al(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Rn(),h=Er(n),p=Vi(l,h);p.tag=2,r!=null&&(p.callback=r),r=yr(n,p,h),r!==null&&(di(r,n,h,l),al(r,n,h))}};function Lp(n,r,l,h,p,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,E):r.prototype&&r.prototype.isPureReactComponent?!Bo(l,h)||!Bo(p,v):!0}function Dp(n,r,l){var h=!1,p=gr,v=r.contextType;return typeof v=="object"&&v!==null?v=ei(v):(p=Fn(r)?Yr:gn.current,h=r.contextTypes,v=(h=h!=null)?Ps(n,p):gr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ml,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Ip(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&ml.enqueueReplaceState(r,r.state,null)}function wu(n,r,l,h){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},fu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=ei(v):(v=Fn(r)?Yr:gn.current,p.context=Ps(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Au(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&ml.enqueueReplaceState(p,p.state,null),ll(n,l,p,h),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ks(n,r){try{var l="",h=r;do l+=ce(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Ru(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Cu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function Np(n,r,l){l=Vi(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){Ml||(Ml=!0,Gu=h),Cu(n,r)},l}function Up(n,r,l){l=Vi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var p=r.value;l.payload=function(){return h(p)},l.callback=function(){Cu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Cu(n,r),typeof h!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),l}function Fp(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new n0;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(p.add(l),n=g0.bind(null,n,r,l),r.then(n,n))}function Op(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function kp(n,r,l,h,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Vi(-1,1),r.tag=2,yr(l,r,1))),l.lanes|=1),n)}var i0=C.ReactCurrentOwner,On=!1;function wn(n,r,l,h){r.child=n===null?rp(r,null,l,h):Ns(r,n.child,l,h)}function Bp(n,r,l,h,p){l=l.render;var v=r.ref;return Fs(r,p),h=yu(n,r,l,h,v,p),l=xu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Gi(n,r,p)):(Vt&&l&&nu(r),r.flags|=1,wn(n,r,h,p),r.child)}function zp(n,r,l,h,p){if(n===null){var v=l.type;return typeof v=="function"&&!$u(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Hp(n,r,v,h,p)):(n=Cl(l.type,null,h,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,!(n.lanes&p)){var E=v.memoizedProps;if(l=l.compare,l=l!==null?l:Bo,l(E,h)&&n.ref===r.ref)return Gi(n,r,p)}return r.flags|=1,n=Ar(v,h),n.ref=r.ref,n.return=r,r.child=n}function Hp(n,r,l,h,p){if(n!==null){var v=n.memoizedProps;if(Bo(v,h)&&n.ref===r.ref)if(On=!1,r.pendingProps=h=v,(n.lanes&p)!==0)n.flags&131072&&(On=!0);else return r.lanes=n.lanes,Gi(n,r,p)}return bu(n,r,l,h,p)}function Vp(n,r,l){var h=r.pendingProps,p=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(zs,Yn),Yn|=l;else{if(!(l&1073741824))return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ot(zs,Yn),Yn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,Ot(zs,Yn),Yn|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,Ot(zs,Yn),Yn|=h;return wn(n,r,p,l),r.child}function Gp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function bu(n,r,l,h,p){var v=Fn(l)?Yr:gn.current;return v=Ps(r,v),Fs(r,p),l=yu(n,r,l,h,v,p),h=xu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Gi(n,r,p)):(Vt&&h&&nu(r),r.flags|=1,wn(n,r,l,p),r.child)}function Wp(n,r,l,h,p){if(Fn(l)){var v=!0;Ja(r)}else v=!1;if(Fs(r,p),r.stateNode===null)_l(n,r),Dp(r,l,h),wu(r,l,h,p),h=!0;else if(n===null){var E=r.stateNode,D=r.memoizedProps;E.props=D;var F=E.context,Q=l.contextType;typeof Q=="object"&&Q!==null?Q=ei(Q):(Q=Fn(l)?Yr:gn.current,Q=Ps(r,Q));var _e=l.getDerivedStateFromProps,ye=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==h||F!==Q)&&Ip(r,E,h,Q),vr=!1;var me=r.memoizedState;E.state=me,ll(r,h,E,p),F=r.memoizedState,D!==h||me!==F||Un.current||vr?(typeof _e=="function"&&(Au(r,l,_e,h),F=r.memoizedState),(D=vr||Lp(r,l,D,h,me,F,Q))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=F),E.props=h,E.state=F,E.context=Q,h=D):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{E=r.stateNode,op(n,r),D=r.memoizedProps,Q=r.type===r.elementType?D:ui(r.type,D),E.props=Q,ye=r.pendingProps,me=E.context,F=l.contextType,typeof F=="object"&&F!==null?F=ei(F):(F=Fn(l)?Yr:gn.current,F=Ps(r,F));var Le=l.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ye||me!==F)&&Ip(r,E,h,F),vr=!1,me=r.memoizedState,E.state=me,ll(r,h,E,p);var ze=r.memoizedState;D!==ye||me!==ze||Un.current||vr?(typeof Le=="function"&&(Au(r,l,Le,h),ze=r.memoizedState),(Q=vr||Lp(r,l,Q,h,me,ze,F)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,ze,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,ze,F)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=ze),E.props=h,E.state=ze,E.context=F,h=Q):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),h=!1)}return Pu(n,r,l,h,v,p)}function Pu(n,r,l,h,p,v){Gp(n,r);var E=(r.flags&128)!==0;if(!h&&!E)return p&&Kd(r,l,!1),Gi(n,r,v);h=r.stateNode,i0.current=r;var D=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&E?(r.child=Ns(r,n.child,null,v),r.child=Ns(r,null,D,v)):wn(n,r,D,v),r.memoizedState=h.state,p&&Kd(r,l,!0),r.child}function Xp(n){var r=n.stateNode;r.pendingContext?Yd(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Yd(n,r.context,!1),du(n,r.containerInfo)}function jp(n,r,l,h,p){return Is(),ou(p),r.flags|=256,wn(n,r,l,h),r.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Du(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yp(n,r,l){var h=r.pendingProps,p=Wt.current,v=!1,E=(r.flags&128)!==0,D;if((D=E)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ot(Wt,p&1),n===null)return su(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(E=h.children,n=h.fallback,v?(h=r.mode,v=r.child,E={mode:"hidden",children:E},!(h&1)&&v!==null?(v.childLanes=0,v.pendingProps=E):v=bl(E,h,0,null),n=is(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Du(l),r.memoizedState=Lu,n):Iu(r,E));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return r0(n,r,E,h,D,p,l);if(v){v=h.fallback,E=r.mode,p=n.child,D=p.sibling;var F={mode:"hidden",children:h.children};return!(E&1)&&r.child!==p?(h=r.child,h.childLanes=0,h.pendingProps=F,r.deletions=null):(h=Ar(p,F),h.subtreeFlags=p.subtreeFlags&14680064),D!==null?v=Ar(D,v):(v=is(v,E,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,E=n.child.memoizedState,E=E===null?Du(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~l,r.memoizedState=Lu,h}return v=n.child,n=v.sibling,h=Ar(v,{mode:"visible",children:h.children}),!(r.mode&1)&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Iu(n,r){return r=bl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function gl(n,r,l,h){return h!==null&&ou(h),Ns(r,n.child,null,l),n=Iu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function r0(n,r,l,h,p,v,E){if(l)return r.flags&256?(r.flags&=-257,h=Ru(Error(t(422))),gl(n,r,E,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,p=r.mode,h=bl({mode:"visible",children:h.children},p,0,null),v=is(v,p,E,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,r.mode&1&&Ns(r,n.child,null,E),r.child.memoizedState=Du(E),r.memoizedState=Lu,v);if(!(r.mode&1))return gl(n,r,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var D=h.dgst;return h=D,v=Error(t(419)),h=Ru(v,h,void 0),gl(n,r,E,h)}if(D=(E&n.childLanes)!==0,On||D){if(h=on,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|E)?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Hi(n,p),di(h,n,p,-1))}return Ku(),h=Ru(Error(t(421))),gl(n,r,E,h)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=_0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,jn=pr(p.nextSibling),Xn=r,Vt=!0,ci=null,n!==null&&(Qn[Jn++]=Bi,Qn[Jn++]=zi,Qn[Jn++]=qr,Bi=n.id,zi=n.overflow,qr=r),r=Iu(r,h.children),r.flags|=4096,r)}function qp(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),uu(n.return,r,l)}function Nu(n,r,l,h,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function Kp(n,r,l){var h=r.pendingProps,p=h.revealOrder,v=h.tail;if(wn(n,r,h.children,l),h=Wt.current,h&2)h=h&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qp(n,l,r);else if(n.tag===19)qp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Ot(Wt,h),!(r.mode&1))r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&cl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Nu(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&cl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Nu(r,!0,l,null,v);break;case"together":Nu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function _l(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Gi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Jr|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Ar(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Ar(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function s0(n,r,l){switch(r.tag){case 3:Xp(r),Is();break;case 5:cp(r);break;case 1:Fn(r.type)&&Ja(r);break;case 4:du(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,p=r.memoizedProps.value;Ot(sl,h._currentValue),h._currentValue=p;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Ot(Wt,Wt.current&1),r.flags|=128,null):l&r.child.childLanes?Yp(n,r,l):(Ot(Wt,Wt.current&1),n=Gi(n,r,l),n!==null?n.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,n.flags&128){if(h)return Kp(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot(Wt,Wt.current),h)break;return null;case 22:case 23:return r.lanes=0,Vp(n,r,l)}return Gi(n,r,l)}var $p,Uu,Zp,Qp;$p=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Uu=function(){},Zp=function(n,r,l,h){var p=n.memoizedProps;if(p!==h){n=r.stateNode,Zr(Ei.current);var v=null;switch(l){case"input":p=k(n,p),h=k(n,h),v=[];break;case"select":p=re({},p,{value:void 0}),h=re({},h,{value:void 0}),v=[];break;case"textarea":p=A(n,p),h=A(n,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=$a)}dt(l,h);var E;l=null;for(Q in p)if(!h.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var D=p[Q];for(E in D)D.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(s.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in h){var F=h[Q];if(D=p!=null?p[Q]:void 0,h.hasOwnProperty(Q)&&F!==D&&(F!=null||D!=null))if(Q==="style")if(D){for(E in D)!D.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in F)F.hasOwnProperty(E)&&D[E]!==F[E]&&(l||(l={}),l[E]=F[E])}else l||(v||(v=[]),v.push(Q,l)),l=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(v=v||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(v=v||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(s.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&Bt("scroll",n),v||D===F||(v=[])):(v=v||[]).push(Q,F))}l&&(v=v||[]).push("style",l);var Q=v;(r.updateQueue=Q)&&(r.flags|=4)}},Qp=function(n,r,l,h){l!==h&&(r.flags|=4)};function ea(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function vn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function o0(n,r,l){var h=r.pendingProps;switch(iu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(r),null;case 1:return Fn(r.type)&&Qa(),vn(r),null;case 3:return h=r.stateNode,Os(),zt(Un),zt(gn),gu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(il(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ci!==null&&(ju(ci),ci=null))),Uu(n,r),vn(r),null;case 5:pu(r);var p=Zr(Ko.current);if(l=r.type,n!==null&&r.stateNode!=null)Zp(n,r,l,h,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return vn(r),null}if(n=Zr(Ei.current),il(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[Mi]=r,h[Wo]=v,n=(r.mode&1)!==0,l){case"dialog":Bt("cancel",h),Bt("close",h);break;case"iframe":case"object":case"embed":Bt("load",h);break;case"video":case"audio":for(p=0;p<Ho.length;p++)Bt(Ho[p],h);break;case"source":Bt("error",h);break;case"img":case"image":case"link":Bt("error",h),Bt("load",h);break;case"details":Bt("toggle",h);break;case"input":Mn(h,v),Bt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},Bt("invalid",h);break;case"textarea":$(h,v),Bt("invalid",h)}dt(l,v),p=null;for(var E in v)if(v.hasOwnProperty(E)){var D=v[E];E==="children"?typeof D=="string"?h.textContent!==D&&(v.suppressHydrationWarning!==!0&&Ka(h.textContent,D,n),p=["children",D]):typeof D=="number"&&h.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&Ka(h.textContent,D,n),p=["children",""+D]):s.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Bt("scroll",h)}switch(l){case"input":Dt(h),je(h,v,!0);break;case"textarea":Dt(h),ge(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=$a)}h=p,r.updateQueue=h,h!==null&&(r.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=E.createElement(l,{is:h.is}):(n=E.createElement(l),l==="select"&&(E=n,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):n=E.createElementNS(n,l),n[Mi]=r,n[Wo]=h,$p(n,r,!1,!1),r.stateNode=n;e:{switch(E=it(l,h),l){case"dialog":Bt("cancel",n),Bt("close",n),p=h;break;case"iframe":case"object":case"embed":Bt("load",n),p=h;break;case"video":case"audio":for(p=0;p<Ho.length;p++)Bt(Ho[p],n);p=h;break;case"source":Bt("error",n),p=h;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),p=h;break;case"details":Bt("toggle",n),p=h;break;case"input":Mn(n,h),p=k(n,h),Bt("invalid",n);break;case"option":p=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},p=re({},h,{value:void 0}),Bt("invalid",n);break;case"textarea":$(n,h),p=A(n,h),Bt("invalid",n);break;default:p=h}dt(l,p),D=p;for(v in D)if(D.hasOwnProperty(v)){var F=D[v];v==="style"?Qe(n,F):v==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ue(n,F)):v==="children"?typeof F=="string"?(l!=="textarea"||F!=="")&&ut(n,F):typeof F=="number"&&ut(n,""+F):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?F!=null&&v==="onScroll"&&Bt("scroll",n):F!=null&&L(n,v,F,E))}switch(l){case"input":Dt(n),je(n,h,!1);break;case"textarea":Dt(n),ge(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Te(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?P(n,!!h.multiple,v,!1):h.defaultValue!=null&&P(n,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=$a)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return vn(r),null;case 6:if(n&&r.stateNode!=null)Qp(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=Zr(Ko.current),Zr(Ei.current),il(r)){if(h=r.stateNode,l=r.memoizedProps,h[Mi]=r,(v=h.nodeValue!==l)&&(n=Xn,n!==null))switch(n.tag){case 3:Ka(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ka(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Mi]=r,r.stateNode=h}return vn(r),null;case 13:if(zt(Wt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&jn!==null&&r.mode&1&&!(r.flags&128))tp(),Is(),r.flags|=98560,v=!1;else if(v=il(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Mi]=r}else Is(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;vn(r),v=!1}else ci!==null&&(ju(ci),ci=null),v=!0;if(!v)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,r.mode&1&&(n===null||Wt.current&1?en===0&&(en=3):Ku())),r.updateQueue!==null&&(r.flags|=4),vn(r),null);case 4:return Os(),Uu(n,r),n===null&&Vo(r.stateNode.containerInfo),vn(r),null;case 10:return cu(r.type._context),vn(r),null;case 17:return Fn(r.type)&&Qa(),vn(r),null;case 19:if(zt(Wt),v=r.memoizedState,v===null)return vn(r),null;if(h=(r.flags&128)!==0,E=v.rendering,E===null)if(h)ea(v,!1);else{if(en!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(E=cl(n),E!==null){for(r.flags|=128,ea(v,!1),h=E.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ot(Wt,Wt.current&1|2),r.child}n=n.sibling}v.tail!==null&&H()>Hs&&(r.flags|=128,h=!0,ea(v,!1),r.lanes=4194304)}else{if(!h)if(n=cl(E),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ea(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!Vt)return vn(r),null}else 2*H()-v.renderingStartTime>Hs&&l!==1073741824&&(r.flags|=128,h=!0,ea(v,!1),r.lanes=4194304);v.isBackwards?(E.sibling=r.child,r.child=E):(l=v.last,l!==null?l.sibling=E:r.child=E,v.last=E)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=H(),r.sibling=null,l=Wt.current,Ot(Wt,h?l&1|2:l&1),r):(vn(r),null);case 22:case 23:return qu(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&r.mode&1?Yn&1073741824&&(vn(r),r.subtreeFlags&6&&(r.flags|=8192)):vn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function a0(n,r){switch(iu(r),r.tag){case 1:return Fn(r.type)&&Qa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Os(),zt(Un),zt(gn),gu(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return pu(r),null;case 13:if(zt(Wt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Is()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return zt(Wt),null;case 4:return Os(),null;case 10:return cu(r.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var vl=!1,yn=!1,l0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Bs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Yt(n,r,h)}else l.current=null}function Fu(n,r,l){try{l()}catch(h){Yt(n,r,h)}}var Jp=!1;function c0(n,r){if(qc=ka,n=Ld(),zc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var E=0,D=-1,F=-1,Q=0,_e=0,ye=n,me=null;t:for(;;){for(var Le;ye!==l||p!==0&&ye.nodeType!==3||(D=E+p),ye!==v||h!==0&&ye.nodeType!==3||(F=E+h),ye.nodeType===3&&(E+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)me=ye,ye=Le;for(;;){if(ye===n)break t;if(me===l&&++Q===p&&(D=E),me===v&&++_e===h&&(F=E),(Le=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Le}l=D===-1||F===-1?null:{start:D,end:F}}else l=null}l=l||{start:0,end:0}}else l=null;for(Kc={focusedElem:n,selectionRange:l},ka=!1,Oe=r;Oe!==null;)if(r=Oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Oe=n;else for(;Oe!==null;){r=Oe;try{var ze=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Kt=ze.memoizedState,q=r.stateNode,V=q.getSnapshotBeforeUpdate(r.elementType===r.type?He:ui(r.type,He),Kt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=r.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Oe=n;break}Oe=r.return}return ze=Jp,Jp=!1,ze}function ta(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Fu(r,l,v)}p=p.next}while(p!==h)}}function yl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function Ou(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function em(n){var r=n.alternate;r!==null&&(n.alternate=null,em(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Mi],delete r[Wo],delete r[Jc],delete r[Xv],delete r[jv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tm(n){return n.tag===5||n.tag===3||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ku(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=$a));else if(h!==4&&(n=n.child,n!==null))for(ku(n,r,l),n=n.sibling;n!==null;)ku(n,r,l),n=n.sibling}function Bu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(Bu(n,r,l),n=n.sibling;n!==null;)Bu(n,r,l),n=n.sibling}var hn=null,hi=!1;function xr(n,r,l){for(l=l.child;l!==null;)im(n,r,l),l=l.sibling}function im(n,r,l){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Xe,l)}catch{}switch(l.tag){case 5:yn||Bs(l,r);case 6:var h=hn,p=hi;hn=null,xr(n,r,l),hn=h,hi=p,hn!==null&&(hi?(n=hn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):hn.removeChild(l.stateNode));break;case 18:hn!==null&&(hi?(n=hn,l=l.stateNode,n.nodeType===8?Qc(n.parentNode,l):n.nodeType===1&&Qc(n,l),Io(n)):Qc(hn,l.stateNode));break;case 4:h=hn,p=hi,hn=l.stateNode.containerInfo,hi=!0,xr(n,r,l),hn=h,hi=p;break;case 0:case 11:case 14:case 15:if(!yn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,E=v.destroy;v=v.tag,E!==void 0&&(v&2||v&4)&&Fu(l,r,E),p=p.next}while(p!==h)}xr(n,r,l);break;case 1:if(!yn&&(Bs(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(D){Yt(l,r,D)}xr(n,r,l);break;case 21:xr(n,r,l);break;case 22:l.mode&1?(yn=(h=yn)||l.memoizedState!==null,xr(n,r,l),yn=h):xr(n,r,l);break;default:xr(n,r,l)}}function rm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new l0),r.forEach(function(h){var p=v0.bind(null,n,h);l.has(h)||(l.add(h),h.then(p,p))})}}function fi(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=n,E=r,D=E;e:for(;D!==null;){switch(D.tag){case 5:hn=D.stateNode,hi=!1;break e;case 3:hn=D.stateNode.containerInfo,hi=!0;break e;case 4:hn=D.stateNode.containerInfo,hi=!0;break e}D=D.return}if(hn===null)throw Error(t(160));im(v,E,p),hn=null,hi=!1;var F=p.alternate;F!==null&&(F.return=null),p.return=null}catch(Q){Yt(p,r,Q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)sm(r,n),r=r.sibling}function sm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(r,n),Ai(n),h&4){try{ta(3,n,n.return),yl(3,n)}catch(He){Yt(n,n.return,He)}try{ta(5,n,n.return)}catch(He){Yt(n,n.return,He)}}break;case 1:fi(r,n),Ai(n),h&512&&l!==null&&Bs(l,l.return);break;case 5:if(fi(r,n),Ai(n),h&512&&l!==null&&Bs(l,l.return),n.flags&32){var p=n.stateNode;try{ut(p,"")}catch(He){Yt(n,n.return,He)}}if(h&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,E=l!==null?l.memoizedProps:v,D=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&mt(p,v),it(D,E);var Q=it(D,v);for(E=0;E<F.length;E+=2){var _e=F[E],ye=F[E+1];_e==="style"?Qe(p,ye):_e==="dangerouslySetInnerHTML"?Ue(p,ye):_e==="children"?ut(p,ye):L(p,_e,ye,Q)}switch(D){case"input":ft(p,v);break;case"textarea":pe(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?P(p,!!v.multiple,Le,!1):me!==!!v.multiple&&(v.defaultValue!=null?P(p,!!v.multiple,v.defaultValue,!0):P(p,!!v.multiple,v.multiple?[]:"",!1))}p[Wo]=v}catch(He){Yt(n,n.return,He)}}break;case 6:if(fi(r,n),Ai(n),h&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(He){Yt(n,n.return,He)}}break;case 3:if(fi(r,n),Ai(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Io(r.containerInfo)}catch(He){Yt(n,n.return,He)}break;case 4:fi(r,n),Ai(n);break;case 13:fi(r,n),Ai(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Vu=H())),h&4&&rm(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(yn=(Q=yn)||_e,fi(r,n),yn=Q):fi(r,n),Ai(n),h&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!_e&&n.mode&1)for(Oe=n,_e=n.child;_e!==null;){for(ye=Oe=_e;Oe!==null;){switch(me=Oe,Le=me.child,me.tag){case 0:case 11:case 14:case 15:ta(4,me,me.return);break;case 1:Bs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){h=me,l=me.return;try{r=h,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(He){Yt(h,l,He)}}break;case 5:Bs(me,me.return);break;case 22:if(me.memoizedState!==null){lm(ye);continue}}Le!==null?(Le.return=me,Oe=Le):lm(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{p=ye.stateNode,Q?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=ye.stateNode,F=ye.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=qe("display",E))}catch(He){Yt(n,n.return,He)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(He){Yt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:fi(r,n),Ai(n),h&4&&rm(n);break;case 21:break;default:fi(r,n),Ai(n)}}function Ai(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(tm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ut(p,""),h.flags&=-33);var v=nm(n);Bu(n,v,p);break;case 3:case 4:var E=h.stateNode.containerInfo,D=nm(n);ku(n,D,E);break;default:throw Error(t(161))}}catch(F){Yt(n,n.return,F)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function u0(n,r,l){Oe=n,om(n)}function om(n,r,l){for(var h=(n.mode&1)!==0;Oe!==null;){var p=Oe,v=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||vl;if(!E){var D=p.alternate,F=D!==null&&D.memoizedState!==null||yn;D=vl;var Q=yn;if(vl=E,(yn=F)&&!Q)for(Oe=p;Oe!==null;)E=Oe,F=E.child,E.tag===22&&E.memoizedState!==null?cm(p):F!==null?(F.return=E,Oe=F):cm(p);for(;v!==null;)Oe=v,om(v),v=v.sibling;Oe=p,vl=D,yn=Q}am(n)}else p.subtreeFlags&8772&&v!==null?(v.return=p,Oe=v):am(n)}}function am(n){for(;Oe!==null;){var r=Oe;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:yn||yl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!yn)if(l===null)h.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:ui(r.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&lp(r,v,h);break;case 3:var E=r.updateQueue;if(E!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}lp(r,E,l)}break;case 5:var D=r.stateNode;if(l===null&&r.flags&4){l=D;var F=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&l.focus();break;case"img":F.src&&(l.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Q=r.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Io(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||r.flags&512&&Ou(r)}catch(me){Yt(r,r.return,me)}}if(r===n){Oe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function lm(n){for(;Oe!==null;){var r=Oe;if(r===n){Oe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function cm(n){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{yl(4,r)}catch(F){Yt(r,l,F)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var p=r.return;try{h.componentDidMount()}catch(F){Yt(r,p,F)}}var v=r.return;try{Ou(r)}catch(F){Yt(r,v,F)}break;case 5:var E=r.return;try{Ou(r)}catch(F){Yt(r,E,F)}}}catch(F){Yt(r,r.return,F)}if(r===n){Oe=null;break}var D=r.sibling;if(D!==null){D.return=r.return,Oe=D;break}Oe=r.return}}var h0=Math.ceil,xl=C.ReactCurrentDispatcher,zu=C.ReactCurrentOwner,ni=C.ReactCurrentBatchConfig,Et=0,on=null,$t=null,fn=0,Yn=0,zs=mr(0),en=0,na=null,Jr=0,Sl=0,Hu=0,ia=null,kn=null,Vu=0,Hs=1/0,Wi=null,Ml=!1,Gu=null,Sr=null,El=!1,Mr=null,Tl=0,ra=0,Wu=null,Al=-1,wl=0;function Rn(){return Et&6?H():Al!==-1?Al:Al=H()}function Er(n){return n.mode&1?Et&2&&fn!==0?fn&-fn:qv.transition!==null?(wl===0&&(wl=An()),wl):(n=gt,n!==0||(n=window.event,n=n===void 0?16:hd(n.type)),n):1}function di(n,r,l,h){if(50<ra)throw ra=0,Wu=null,Error(t(185));qt(n,l,h),(!(Et&2)||n!==on)&&(n===on&&(!(Et&2)&&(Sl|=l),en===4&&Tr(n,fn)),Bn(n,h),l===1&&Et===0&&!(r.mode&1)&&(Hs=H()+500,el&&_r()))}function Bn(n,r){var l=n.callbackNode;Wr(n,r);var h=ai(n,n===on?fn:0);if(h===0)l!==null&&j(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&j(l),r===1)n.tag===0?Yv(hm.bind(null,n)):$d(hm.bind(null,n)),Gv(function(){!(Et&6)&&_r()}),l=null;else{switch(id(h)){case 1:l=Re;break;case 4:l=De;break;case 16:l=Fe;break;case 536870912:l=et;break;default:l=Fe}l=ym(l,um.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function um(n,r){if(Al=-1,wl=0,Et&6)throw Error(t(327));var l=n.callbackNode;if(Vs()&&n.callbackNode!==l)return null;var h=ai(n,n===on?fn:0);if(h===0)return null;if(h&30||h&n.expiredLanes||r)r=Rl(n,h);else{r=h;var p=Et;Et|=2;var v=dm();(on!==n||fn!==r)&&(Wi=null,Hs=H()+500,ts(n,r));do try{p0();break}catch(D){fm(n,D)}while(!0);lu(),xl.current=v,Et=p,$t!==null?r=0:(on=null,fn=0,r=en)}if(r!==0){if(r===2&&(p=It(n),p!==0&&(h=p,r=Xu(n,p))),r===1)throw l=na,ts(n,0),Tr(n,h),Bn(n,H()),l;if(r===6)Tr(n,h);else{if(p=n.current.alternate,!(h&30)&&!f0(p)&&(r=Rl(n,h),r===2&&(v=It(n),v!==0&&(h=v,r=Xu(n,v))),r===1))throw l=na,ts(n,0),Tr(n,h),Bn(n,H()),l;switch(n.finishedWork=p,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:ns(n,kn,Wi);break;case 3:if(Tr(n,h),(h&130023424)===h&&(r=Vu+500-H(),10<r)){if(ai(n,0)!==0)break;if(p=n.suspendedLanes,(p&h)!==h){Rn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Zc(ns.bind(null,n,kn,Wi),r);break}ns(n,kn,Wi);break;case 4:if(Tr(n,h),(h&4194240)===h)break;for(r=n.eventTimes,p=-1;0<h;){var E=31-At(h);v=1<<E,E=r[E],E>p&&(p=E),h&=~v}if(h=p,h=H()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*h0(h/1960))-h,10<h){n.timeoutHandle=Zc(ns.bind(null,n,kn,Wi),h);break}ns(n,kn,Wi);break;case 5:ns(n,kn,Wi);break;default:throw Error(t(329))}}}return Bn(n,H()),n.callbackNode===l?um.bind(null,n):null}function Xu(n,r){var l=ia;return n.current.memoizedState.isDehydrated&&(ts(n,r).flags|=256),n=Rl(n,r),n!==2&&(r=kn,kn=l,r!==null&&ju(r)),n}function ju(n){kn===null?kn=n:kn.push.apply(kn,n)}function f0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!li(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Tr(n,r){for(r&=~Hu,r&=~Sl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-At(r),h=1<<l;n[l]=-1,r&=~h}}function hm(n){if(Et&6)throw Error(t(327));Vs();var r=ai(n,0);if(!(r&1))return Bn(n,H()),null;var l=Rl(n,r);if(n.tag!==0&&l===2){var h=It(n);h!==0&&(r=h,l=Xu(n,h))}if(l===1)throw l=na,ts(n,0),Tr(n,r),Bn(n,H()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ns(n,kn,Wi),Bn(n,H()),null}function Yu(n,r){var l=Et;Et|=1;try{return n(r)}finally{Et=l,Et===0&&(Hs=H()+500,el&&_r())}}function es(n){Mr!==null&&Mr.tag===0&&!(Et&6)&&Vs();var r=Et;Et|=1;var l=ni.transition,h=gt;try{if(ni.transition=null,gt=1,n)return n()}finally{gt=h,ni.transition=l,Et=r,!(Et&6)&&_r()}}function qu(){Yn=zs.current,zt(zs)}function ts(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Vv(l)),$t!==null)for(l=$t.return;l!==null;){var h=l;switch(iu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Qa();break;case 3:Os(),zt(Un),zt(gn),gu();break;case 5:pu(h);break;case 4:Os();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:cu(h.type._context);break;case 22:case 23:qu()}l=l.return}if(on=n,$t=n=Ar(n.current,null),fn=Yn=r,en=0,na=null,Hu=Sl=Jr=0,kn=ia=null,$r!==null){for(r=0;r<$r.length;r++)if(l=$r[r],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var E=v.next;v.next=p,h.next=E}l.pending=h}$r=null}return n}function fm(n,r){do{var l=$t;try{if(lu(),ul.current=pl,hl){for(var h=Xt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}hl=!1}if(Qr=0,sn=Jt=Xt=null,$o=!1,Zo=0,zu.current=null,l===null||l.return===null){en=1,na=r,$t=null;break}e:{var v=n,E=l.return,D=l,F=r;if(r=fn,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,_e=D,ye=_e.tag;if(!(_e.mode&1)&&(ye===0||ye===11||ye===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Op(E);if(Le!==null){Le.flags&=-257,kp(Le,E,D,v,r),Le.mode&1&&Fp(v,Q,r),r=Le,F=Q;var ze=r.updateQueue;if(ze===null){var He=new Set;He.add(F),r.updateQueue=He}else ze.add(F);break e}else{if(!(r&1)){Fp(v,Q,r),Ku();break e}F=Error(t(426))}}else if(Vt&&D.mode&1){var Kt=Op(E);if(Kt!==null){!(Kt.flags&65536)&&(Kt.flags|=256),kp(Kt,E,D,v,r),ou(ks(F,D));break e}}v=F=ks(F,D),en!==4&&(en=2),ia===null?ia=[v]:ia.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var q=Np(v,F,r);ap(v,q);break e;case 1:D=F;var V=v.type,K=v.stateNode;if(!(v.flags&128)&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Sr===null||!Sr.has(K)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=Up(v,D,r);ap(v,Ee);break e}}v=v.return}while(v!==null)}mm(l)}catch(Ge){r=Ge,$t===l&&l!==null&&($t=l=l.return);continue}break}while(!0)}function dm(){var n=xl.current;return xl.current=pl,n===null?pl:n}function Ku(){(en===0||en===3||en===2)&&(en=4),on===null||!(Jr&268435455)&&!(Sl&268435455)||Tr(on,fn)}function Rl(n,r){var l=Et;Et|=2;var h=dm();(on!==n||fn!==r)&&(Wi=null,ts(n,r));do try{d0();break}catch(p){fm(n,p)}while(!0);if(lu(),Et=l,xl.current=h,$t!==null)throw Error(t(261));return on=null,fn=0,en}function d0(){for(;$t!==null;)pm($t)}function p0(){for(;$t!==null&&!J();)pm($t)}function pm(n){var r=vm(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,r===null?mm(n):$t=r,zu.current=null}function mm(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=a0(l,r),l!==null){l.flags&=32767,$t=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,$t=null;return}}else if(l=o0(l,r,Yn),l!==null){$t=l;return}if(r=r.sibling,r!==null){$t=r;return}$t=r=n}while(r!==null);en===0&&(en=5)}function ns(n,r,l){var h=gt,p=ni.transition;try{ni.transition=null,gt=1,m0(n,r,l,h)}finally{ni.transition=p,gt=h}return null}function m0(n,r,l,h){do Vs();while(Mr!==null);if(Et&6)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(mn(n,v),n===on&&($t=on=null,fn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||El||(El=!0,ym(Fe,function(){return Vs(),null})),v=(l.flags&15990)!==0,l.subtreeFlags&15990||v){v=ni.transition,ni.transition=null;var E=gt;gt=1;var D=Et;Et|=4,zu.current=null,c0(n,l),sm(l,n),Uv(Kc),ka=!!qc,Kc=qc=null,n.current=l,u0(l),te(),Et=D,gt=E,ni.transition=v}else n.current=l;if(El&&(El=!1,Mr=n,Tl=p),v=n.pendingLanes,v===0&&(Sr=null),Tt(l.stateNode),Bn(n,H()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Ml)throw Ml=!1,n=Gu,Gu=null,n;return Tl&1&&n.tag!==0&&Vs(),v=n.pendingLanes,v&1?n===Wu?ra++:(ra=0,Wu=n):ra=0,_r(),null}function Vs(){if(Mr!==null){var n=id(Tl),r=ni.transition,l=gt;try{if(ni.transition=null,gt=16>n?16:n,Mr===null)var h=!1;else{if(n=Mr,Mr=null,Tl=0,Et&6)throw Error(t(331));var p=Et;for(Et|=4,Oe=n.current;Oe!==null;){var v=Oe,E=v.child;if(Oe.flags&16){var D=v.deletions;if(D!==null){for(var F=0;F<D.length;F++){var Q=D[F];for(Oe=Q;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:ta(8,_e,v)}var ye=_e.child;if(ye!==null)ye.return=_e,Oe=ye;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,Le=_e.return;if(em(_e),_e===Q){Oe=null;break}if(me!==null){me.return=Le,Oe=me;break}Oe=Le}}}var ze=v.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Kt=He.sibling;He.sibling=null,He=Kt}while(He!==null)}}Oe=v}}if(v.subtreeFlags&2064&&E!==null)E.return=v,Oe=E;else e:for(;Oe!==null;){if(v=Oe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:ta(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,Oe=q;break e}Oe=v.return}}var V=n.current;for(Oe=V;Oe!==null;){E=Oe;var K=E.child;if(E.subtreeFlags&2064&&K!==null)K.return=E,Oe=K;else e:for(E=V;Oe!==null;){if(D=Oe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:yl(9,D)}}catch(Ge){Yt(D,D.return,Ge)}if(D===E){Oe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Oe=Ee;break e}Oe=D.return}}if(Et=p,_r(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Xe,n)}catch{}h=!0}return h}finally{gt=l,ni.transition=r}}return!1}function gm(n,r,l){r=ks(l,r),r=Np(n,r,1),n=yr(n,r,1),r=Rn(),n!==null&&(qt(n,1,r),Bn(n,r))}function Yt(n,r,l){if(n.tag===3)gm(n,n,l);else for(;r!==null;){if(r.tag===3){gm(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Sr===null||!Sr.has(h))){n=ks(l,n),n=Up(r,n,1),r=yr(r,n,1),n=Rn(),r!==null&&(qt(r,1,n),Bn(r,n));break}}r=r.return}}function g0(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Rn(),n.pingedLanes|=n.suspendedLanes&l,on===n&&(fn&l)===l&&(en===4||en===3&&(fn&130023424)===fn&&500>H()-Vu?ts(n,0):Hu|=l),Bn(n,r)}function _m(n,r){r===0&&(n.mode&1?(r=yt,yt<<=1,!(yt&130023424)&&(yt=4194304)):r=1);var l=Rn();n=Hi(n,r),n!==null&&(qt(n,r,l),Bn(n,l))}function _0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),_m(n,l)}function v0(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),_m(n,l)}var vm;vm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Un.current)On=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return On=!1,s0(n,r,l);On=!!(n.flags&131072)}else On=!1,Vt&&r.flags&1048576&&Zd(r,nl,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;_l(n,r),n=r.pendingProps;var p=Ps(r,gn.current);Fs(r,l),p=yu(null,r,h,n,p,l);var v=xu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Fn(h)?(v=!0,Ja(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,fu(r),p.updater=ml,r.stateNode=p,p._reactInternals=r,wu(r,h,n,l),r=Pu(null,r,h,!0,v,l)):(r.tag=0,Vt&&v&&nu(r),wn(null,r,p,l),r=r.child),r;case 16:h=r.elementType;e:{switch(_l(n,r),n=r.pendingProps,p=h._init,h=p(h._payload),r.type=h,p=r.tag=x0(h),n=ui(h,n),p){case 0:r=bu(null,r,h,n,l);break e;case 1:r=Wp(null,r,h,n,l);break e;case 11:r=Bp(null,r,h,n,l);break e;case 14:r=zp(null,r,h,ui(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:ui(h,p),bu(n,r,h,p,l);case 1:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:ui(h,p),Wp(n,r,h,p,l);case 3:e:{if(Xp(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,p=v.element,op(n,r),ll(r,h,null,l);var E=r.memoizedState;if(h=E.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=ks(Error(t(423)),r),r=jp(n,r,h,l,p);break e}else if(h!==p){p=ks(Error(t(424)),r),r=jp(n,r,h,l,p);break e}else for(jn=pr(r.stateNode.containerInfo.firstChild),Xn=r,Vt=!0,ci=null,l=rp(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Is(),h===p){r=Gi(n,r,l);break e}wn(n,r,h,l)}r=r.child}return r;case 5:return cp(r),n===null&&su(r),h=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,E=p.children,$c(h,p)?E=null:v!==null&&$c(h,v)&&(r.flags|=32),Gp(n,r),wn(n,r,E,l),r.child;case 6:return n===null&&su(r),null;case 13:return Yp(n,r,l);case 4:return du(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Ns(r,null,h,l):wn(n,r,h,l),r.child;case 11:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:ui(h,p),Bp(n,r,h,p,l);case 7:return wn(n,r,r.pendingProps,l),r.child;case 8:return wn(n,r,r.pendingProps.children,l),r.child;case 12:return wn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,p=r.pendingProps,v=r.memoizedProps,E=p.value,Ot(sl,h._currentValue),h._currentValue=E,v!==null)if(li(v.value,E)){if(v.children===p.children&&!Un.current){r=Gi(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var D=v.dependencies;if(D!==null){E=v.child;for(var F=D.firstContext;F!==null;){if(F.context===h){if(v.tag===1){F=Vi(-1,l&-l),F.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),Q.pending=F}}v.lanes|=l,F=v.alternate,F!==null&&(F.lanes|=l),uu(v.return,l,r),D.lanes|=l;break}F=F.next}}else if(v.tag===10)E=v.type===r.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=l,D=E.alternate,D!==null&&(D.lanes|=l),uu(E,l,r),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===r){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}wn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,h=r.pendingProps.children,Fs(r,l),p=ei(p),h=h(p),r.flags|=1,wn(n,r,h,l),r.child;case 14:return h=r.type,p=ui(h,r.pendingProps),p=ui(h.type,p),zp(n,r,h,p,l);case 15:return Hp(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:ui(h,p),_l(n,r),r.tag=1,Fn(h)?(n=!0,Ja(r)):n=!1,Fs(r,l),Dp(r,h,p),wu(r,h,p,l),Pu(null,r,h,!0,n,l);case 19:return Kp(n,r,l);case 22:return Vp(n,r,l)}throw Error(t(156,r.tag))};function ym(n,r){return w(n,r)}function y0(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,r,l,h){return new y0(n,r,l,h)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function x0(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===de)return 14}return 2}function Ar(n,r){var l=n.alternate;return l===null?(l=ii(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Cl(n,r,l,h,p,v){var E=2;if(h=n,typeof n=="function")$u(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return is(l.children,p,v,r);case Y:E=8,p|=8;break;case b:return n=ii(12,l,r,p|2),n.elementType=b,n.lanes=v,n;case ee:return n=ii(13,l,r,p),n.elementType=ee,n.lanes=v,n;case he:return n=ii(19,l,r,p),n.elementType=he,n.lanes=v,n;case le:return bl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case oe:E=11;break e;case de:E=14;break e;case se:E=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ii(E,l,r,p),r.elementType=n,r.type=h,r.lanes=v,r}function is(n,r,l,h){return n=ii(7,n,h,r),n.lanes=l,n}function bl(n,r,l,h){return n=ii(22,n,h,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function Zu(n,r,l){return n=ii(6,n,null,r),n.lanes=l,n}function Qu(n,r,l){return r=ii(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function S0(n,r,l,h,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ju(n,r,l,h,p,v,E,D,F){return n=new S0(n,r,l,D,F),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ii(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(v),n}function M0(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function xm(n){if(!n)return gr;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Fn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Fn(l))return qd(n,l,r)}return r}function Sm(n,r,l,h,p,v,E,D,F){return n=Ju(l,h,!0,n,p,v,E,D,F),n.context=xm(null),l=n.current,h=Rn(),p=Er(l),v=Vi(h,p),v.callback=r??null,yr(l,v,p),n.current.lanes=p,qt(n,p,h),Bn(n,h),n}function Pl(n,r,l,h){var p=r.current,v=Rn(),E=Er(p);return l=xm(l),r.context===null?r.context=l:r.pendingContext=l,r=Vi(v,E),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=yr(p,r,E),n!==null&&(di(n,p,E,v),al(n,p,E)),E}function Ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Mm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function eh(n,r){Mm(n,r),(n=n.alternate)&&Mm(n,r)}function E0(){return null}var Em=typeof reportError=="function"?reportError:function(n){console.error(n)};function th(n){this._internalRoot=n}Dl.prototype.render=th.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Pl(n,r,null,null)},Dl.prototype.unmount=th.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;es(function(){Pl(null,n,null,null)}),r[Oi]=null}};function Dl(n){this._internalRoot=n}Dl.prototype.unstable_scheduleHydration=function(n){if(n){var r=od();n={blockedOn:null,target:n,priority:r};for(var l=0;l<hr.length&&r!==0&&r<hr[l].priority;l++);hr.splice(l,0,n),l===0&&cd(n)}};function nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function T0(n,r,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var Q=Ll(E);v.call(Q)}}var E=Sm(r,h,n,0,null,!1,!1,"",Tm);return n._reactRootContainer=E,n[Oi]=E.current,Vo(n.nodeType===8?n.parentNode:n),es(),E}for(;p=n.lastChild;)n.removeChild(p);if(typeof h=="function"){var D=h;h=function(){var Q=Ll(F);D.call(Q)}}var F=Ju(n,0,!1,null,null,!1,!1,"",Tm);return n._reactRootContainer=F,n[Oi]=F.current,Vo(n.nodeType===8?n.parentNode:n),es(function(){Pl(r,F,l,h)}),F}function Nl(n,r,l,h,p){var v=l._reactRootContainer;if(v){var E=v;if(typeof p=="function"){var D=p;p=function(){var F=Ll(E);D.call(F)}}Pl(r,E,n,p)}else E=T0(l,r,n,p,h);return Ll(E)}rd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=un(r.pendingLanes);l!==0&&(Xr(r,l|1),Bn(r,H()),!(Et&6)&&(Hs=H()+500,_r()))}break;case 13:es(function(){var h=Hi(n,1);if(h!==null){var p=Rn();di(h,n,1,p)}}),eh(n,1)}},Rc=function(n){if(n.tag===13){var r=Hi(n,134217728);if(r!==null){var l=Rn();di(r,n,134217728,l)}eh(n,134217728)}},sd=function(n){if(n.tag===13){var r=Er(n),l=Hi(n,r);if(l!==null){var h=Rn();di(l,n,r,h)}eh(n,r)}},od=function(){return gt},ad=function(n,r){var l=gt;try{return gt=n,r()}finally{gt=l}},we=function(n,r,l){switch(r){case"input":if(ft(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var p=Za(h);if(!p)throw Error(t(90));vt(h),ft(h,p)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&P(n,!!l.multiple,r,!1)}},kt=Yu,Qt=es;var A0={usingClientEntryPoint:!1,Events:[Xo,Cs,Za,be,rt,Yu]},sa={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w0={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Na(n),n===null?null:n.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||E0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{Xe=Ul.inject(w0),st=Ul}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0,zn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(r))throw Error(t(200));return M0(n,r,null,l)},zn.createRoot=function(n,r){if(!nh(n))throw Error(t(299));var l=!1,h="",p=Em;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ju(n,1,!1,null,null,l,!1,h,p),n[Oi]=r.current,Vo(n.nodeType===8?n.parentNode:n),new th(r)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Na(r),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return es(n)},zn.hydrate=function(n,r,l){if(!Il(r))throw Error(t(200));return Nl(null,n,r,!0,l)},zn.hydrateRoot=function(n,r,l){if(!nh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",E=Em;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),r=Sm(r,null,n,1,l??null,p,!1,v,E),n[Oi]=r.current,Vo(n),h)for(n=0;n<h.length;n++)l=h[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Dl(r)},zn.render=function(n,r,l){if(!Il(r))throw Error(t(200));return Nl(null,n,r,!1,l)},zn.unmountComponentAtNode=function(n){if(!Il(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},zn.unstable_batchedUpdates=Yu,zn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Il(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,r,l,!1,h)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var Dm;function N0(){if(Dm)return sh.exports;Dm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sh.exports=I0(),sh.exports}var Im;function U0(){if(Im)return Fl;Im=1;var o=N0();return Fl.createRoot=o.createRoot,Fl.hydrateRoot=o.hydrateRoot,Fl}var F0=U0(),Nr=Ff();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="171",lo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},O0=0,Nm=1,k0=2,a_=1,B0=2,Zi=3,ir=0,Gn=1,Ri=2,Br=0,co=1,Um=2,Fm=3,Om=4,z0=5,fs=100,H0=101,V0=102,G0=103,W0=104,X0=200,j0=201,Y0=202,q0=203,Xh=204,jh=205,K0=206,$0=207,Z0=208,Q0=209,J0=210,ey=211,ty=212,ny=213,iy=214,Yh=0,qh=1,Kh=2,po=3,$h=4,Zh=5,Qh=6,Jh=7,l_=0,ry=1,sy=2,zr=0,oy=1,ay=2,ly=3,cy=4,uy=5,hy=6,fy=7,km="attached",dy="detached",c_=300,mo=301,go=302,ef=303,tf=304,Ec=306,_o=1e3,Or=1001,vc=1002,Ln=1003,u_=1004,ga=1005,$n=1006,hc=1007,Ji=1008,rr=1009,h_=1010,f_=1011,Sa=1012,kf=1013,gs=1014,yi=1015,Aa=1016,Bf=1017,zf=1018,vo=1020,d_=35902,p_=1021,m_=1022,oi=1023,g_=1024,__=1025,uo=1026,yo=1027,Hf=1028,Vf=1029,v_=1030,Gf=1031,Wf=1033,fc=33776,dc=33777,pc=33778,mc=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,cf=37496,uf=37808,hf=37809,ff=37810,df=37811,pf=37812,mf=37813,gf=37814,_f=37815,vf=37816,yf=37817,xf=37818,Sf=37819,Mf=37820,Ef=37821,gc=36492,Tf=36494,Af=36495,y_=36283,wf=36284,Rf=36285,Cf=36286,Ma=2300,Ea=2301,lh=2302,Bm=2400,zm=2401,Hm=2402,py=2500,my=0,x_=1,bf=2,gy=3200,_y=3201,S_=0,vy=1,Fr="",dn="srgb",In="srgb-linear",yc="linear",Nt="srgb",Gs=7680,Vm=519,yy=512,xy=513,Sy=514,M_=515,My=516,Ey=517,Ty=518,Ay=519,Pf=35044,Gm="300 es",er=2e3,xc=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wm=1234567;const va=Math.PI/180,xo=180/Math.PI;function xi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[o&255]+xn[o>>8&255]+xn[o>>16&255]+xn[o>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function ht(o,e,t){return Math.max(e,Math.min(t,o))}function Xf(o,e){return(o%e+e)%e}function wy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Ry(o,e,t){return o!==e?(t-o)/(e-o):0}function ya(o,e,t){return(1-t)*o+t*e}function Cy(o,e,t,i){return ya(o,e,1-Math.exp(-t*i))}function by(o,e=1){return e-Math.abs(Xf(o,e*2)-e)}function Py(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Ly(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Dy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Iy(o,e){return o+Math.random()*(e-o)}function Ny(o){return o*(.5-Math.random())}function Uy(o){o!==void 0&&(Wm=o);let e=Wm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fy(o){return o*va}function Oy(o){return o*xo}function ky(o){return(o&o-1)===0&&o!==0}function By(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zy(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Hy(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),d=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*m,f*g,f*_,u*d);break;case"YZY":o.set(f*_,u*m,f*g,u*d);break;case"ZXZ":o.set(f*g,f*_,u*m,u*d);break;case"XZX":o.set(u*m,f*M,f*x,u*d);break;case"YXY":o.set(f*x,u*m,f*M,u*d);break;case"ZYZ":o.set(f*M,f*x,u*m,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:va,RAD2DEG:xo,generateUUID:xi,clamp:ht,euclideanModulo:Xf,mapLinear:wy,inverseLerp:Ry,lerp:ya,damp:Cy,pingpong:by,smoothstep:Py,smootherstep:Ly,randInt:Dy,randFloat:Iy,randFloatSpread:Ny,seededRandom:Uy,degToRad:Fy,radToDeg:Oy,isPowerOfTwo:ky,ceilPowerOfTwo:By,floorPowerOfTwo:zy,setQuaternionFromProperEuler:Hy,normalize:Pt,denormalize:_i};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,s,a,c,u,f,d){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,d)}set(e,t,i,s,a,c,u,f,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=f,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],m=i[4],g=i[7],_=i[2],x=i[5],M=i[8],T=s[0],S=s[3],y=s[6],I=s[1],L=s[4],C=s[7],G=s[2],O=s[5],U=s[8];return a[0]=c*T+u*I+f*G,a[3]=c*S+u*L+f*O,a[6]=c*y+u*C+f*U,a[1]=d*T+m*I+g*G,a[4]=d*S+m*L+g*O,a[7]=d*y+m*C+g*U,a[2]=_*T+x*I+M*G,a[5]=_*S+x*L+M*O,a[8]=_*y+x*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],m=e[8];return t*c*m-t*u*d-i*a*m+i*u*f+s*a*d-s*c*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],m=e[8],g=m*c-u*d,_=u*f-m*a,x=d*a-c*f,M=t*g+i*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(s*d-m*i)*T,e[2]=(u*i-s*c)*T,e[3]=_*T,e[4]=(m*t-s*f)*T,e[5]=(s*a-u*t)*T,e[6]=x*T,e[7]=(i*f-d*t)*T,e[8]=(c*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*c+d*u)+c+e,-s*d,s*f,-s*(-d*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ch.makeScale(e,t)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new at;function T_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ta(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Vy(){const o=Ta("canvas");return o.style.display="block",o}const Xm={};function ro(o){o in Xm||(Xm[o]=!0,console.warn(o))}function Gy(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Wy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jy(){const o={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Nt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(s.r=ho(s.r),s.g=ho(s.g),s.b=ho(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fr?yc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[In]:{primaries:e,whitePoint:i,transfer:yc,toXYZ:jm,fromXYZ:Ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:jm,fromXYZ:Ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),o}const St=jy();function tr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ws;class Yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=Ta("canvas")),Ws.width=e.width,Ws.height=e.height;const i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=tr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qy=0;class A_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(uh(s[c].image)):a.push(uh(s[c]))}else a=uh(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function uh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Yy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ky=0;class cn extends vs{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Or,s=Or,a=$n,c=Ji,u=oi,f=rr,d=cn.DEFAULT_ANISOTROPY,m=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=xi(),this.name="",this.source=new A_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=c_;cn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,d=f[0],m=f[4],g=f[8],_=f[1],x=f[5],M=f[9],T=f[2],S=f[6],y=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(d+1)/2,C=(x+1)/2,G=(y+1)/2,O=(m+_)/4,U=(g+T)/4,Y=(M+S)/4;return L>C&&L>G?L<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(L),s=O/i,a=U/i):C>G?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=O/s,a=Y/s):G<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(G),i=U/a,s=Y/a),this.set(i,s,a,t),this}let I=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(_-m)*(_-m));return Math.abs(I)<.001&&(I=1),this.x=(S-M)/I,this.y=(g-T)/I,this.z=(_-m)/I,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends vs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new A_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends $y{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class w_ extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zy extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let f=i[s+0],d=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],x=a[c+1],M=a[c+2],T=a[c+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=T;return}if(g!==T||f!==_||d!==x||m!==M){let S=1-u;const y=f*_+d*x+m*M+g*T,I=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const G=Math.sqrt(L),O=Math.atan2(G,y*I);S=Math.sin(S*O)/G,u=Math.sin(u*O)/G}const C=u*I;if(f=f*S+_*C,d=d*S+x*C,m=m*S+M*C,g=g*S+T*C,S===1-u){const G=1/Math.sqrt(f*f+d*d+m*m+g*g);f*=G,d*=G,m*=G,g*=G}}e[t]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],f=i[s+1],d=i[s+2],m=i[s+3],g=a[c],_=a[c+1],x=a[c+2],M=a[c+3];return e[t]=u*M+m*g+f*x-d*_,e[t+1]=f*M+m*_+d*g-u*x,e[t+2]=d*M+m*x+u*_-f*g,e[t+3]=m*M-u*g-f*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,d=u(i/2),m=u(s/2),g=u(a/2),_=f(i/2),x=f(s/2),M=f(a/2);switch(c){case"XYZ":this._x=_*m*g+d*x*M,this._y=d*x*g-_*m*M,this._z=d*m*M+_*x*g,this._w=d*m*g-_*x*M;break;case"YXZ":this._x=_*m*g+d*x*M,this._y=d*x*g-_*m*M,this._z=d*m*M-_*x*g,this._w=d*m*g+_*x*M;break;case"ZXY":this._x=_*m*g-d*x*M,this._y=d*x*g+_*m*M,this._z=d*m*M+_*x*g,this._w=d*m*g-_*x*M;break;case"ZYX":this._x=_*m*g-d*x*M,this._y=d*x*g+_*m*M,this._z=d*m*M-_*x*g,this._w=d*m*g+_*x*M;break;case"YZX":this._x=_*m*g+d*x*M,this._y=d*x*g+_*m*M,this._z=d*m*M-_*x*g,this._w=d*m*g-_*x*M;break;case"XZY":this._x=_*m*g-d*x*M,this._y=d*x*g-_*m*M,this._z=d*m*M+_*x*g,this._w=d*m*g+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],d=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-f)*x,this._y=(a-d)*x,this._z=(c-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(m-f)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+d)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(a-d)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(f+m)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(c-s)/x,this._x=(a+d)/x,this._y=(f+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,d=t._z,m=t._w;return this._x=i*m+c*u+s*d-a*f,this._y=s*m+c*f+a*u-i*d,this._z=a*m+c*d+i*f-s*u,this._w=c*m-i*u-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,u),g=Math.sin((1-t)*m)/d,_=Math.sin(t*m)/d;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,d=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+f*d+c*g-u*m,this.y=i+f*m+u*d-a*g,this.z=s+f*g+a*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-i*f,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new X,qm=new bi;class sr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,pi):pi.fromBufferAttribute(a,c),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),kl.subVectors(this.max,aa),Xs.subVectors(e.a,aa),js.subVectors(e.b,aa),Ys.subVectors(e.c,aa),Rr.subVectors(js,Xs),Cr.subVectors(Ys,js),rs.subVectors(Xs,Ys);let t=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-rs.z,rs.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,rs.z,0,-rs.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-rs.y,rs.x,0];return!fh(t,Xs,js,Ys,kl)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,Xs,js,Ys,kl))?!1:(Bl.crossVectors(Rr,Cr),t=[Bl.x,Bl.y,Bl.z],fh(t,Xs,js,Ys,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new X,new X,new X,new X,new X,new X,new X,new X],pi=new X,Ol=new sr,Xs=new X,js=new X,Ys=new X,Rr=new X,Cr=new X,rs=new X,aa=new X,kl=new X,Bl=new X,ss=new X;function fh(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){ss.fromArray(o,a);const u=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),f=e.dot(ss),d=t.dot(ss),m=i.dot(ss);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>u)return!1}return!0}const Qy=new sr,la=new X,dh=new X;class Li{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(la,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(dh)),this.expandByPoint(la.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new X,ph=new X,zl=new X,br=new X,mh=new X,Hl=new X,gh=new X;class wa{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ph.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),br.copy(this.origin).sub(ph);const a=e.distanceTo(t)*.5,c=-this.direction.dot(zl),u=br.dot(this.direction),f=-br.dot(zl),d=br.lengthSq(),m=Math.abs(1-c*c);let g,_,x,M;if(m>0)if(g=c*f-u,_=c*u-f,M=a*m,g>=0)if(_>=-M)if(_<=M){const T=1/m;g*=T,_*=T,x=g*(g+c*_+2*u)+_*(c*g+_+2*f)+d}else _=a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*f)+d;else _=-a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*f)+d;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-f),a),x=-g*g+_*(_+2*f)+d):_<=M?(g=0,_=Math.min(Math.max(-a,-f),a),x=_*(_+2*f)+d):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-f),a),x=-g*g+_*(_+2*f)+d);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(ph).addScaledVector(zl,_),x}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const i=ji.dot(this.direction),s=ji.dot(ji)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,f;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,i,s,a){mh.subVectors(t,e),Hl.subVectors(i,e),gh.crossVectors(mh,Hl);let c=this.direction.dot(gh),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;br.subVectors(this.origin,e);const f=u*this.direction.dot(Hl.crossVectors(br,Hl));if(f<0)return null;const d=u*this.direction.dot(mh.cross(br));if(d<0||f+d>c)return null;const m=-u*br.dot(gh);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,a,c,u,f,d,m,g,_,x,M,T,S){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,d,m,g,_,x,M,T,S)}set(e,t,i,s,a,c,u,f,d,m,g,_,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=a,y[5]=c,y[9]=u,y[13]=f,y[2]=d,y[6]=m,y[10]=g,y[14]=_,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),a=1/qs.setFromMatrixColumn(e,1).length(),c=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,x=c*g,M=u*m,T=u*g;t[0]=f*m,t[4]=-f*g,t[8]=d,t[1]=x+M*d,t[5]=_-T*d,t[9]=-u*f,t[2]=T-_*d,t[6]=M+x*d,t[10]=c*f}else if(e.order==="YXZ"){const _=f*m,x=f*g,M=d*m,T=d*g;t[0]=_+T*u,t[4]=M*u-x,t[8]=c*d,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=x*u-M,t[6]=T+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*m,x=f*g,M=d*m,T=d*g;t[0]=_-T*u,t[4]=-c*g,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*m,t[9]=T-_*u,t[2]=-c*d,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*m,x=c*g,M=u*m,T=u*g;t[0]=f*m,t[4]=M*d-x,t[8]=_*d+T,t[1]=f*g,t[5]=T*d+_,t[9]=x*d-M,t[2]=-d,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,x=c*d,M=u*f,T=u*d;t[0]=f*m,t[4]=T-_*g,t[8]=M*g+x,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-d*m,t[6]=x*g+M,t[10]=_-T*g}else if(e.order==="XZY"){const _=c*f,x=c*d,M=u*f,T=u*d;t[0]=f*m,t[4]=-g,t[8]=d*m,t[1]=_*g+T,t[5]=c*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=u*m,t[10]=T*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,ex)}lookAt(e,t,i){const s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Pr.crossVectors(i,qn),Pr.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Pr.crossVectors(i,qn)),Pr.normalize(),Vl.crossVectors(qn,Pr),s[0]=Pr.x,s[4]=Vl.x,s[8]=qn.x,s[1]=Pr.y,s[5]=Vl.y,s[9]=qn.y,s[2]=Pr.z,s[6]=Vl.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],m=i[1],g=i[5],_=i[9],x=i[13],M=i[2],T=i[6],S=i[10],y=i[14],I=i[3],L=i[7],C=i[11],G=i[15],O=s[0],U=s[4],Y=s[8],b=s[12],R=s[1],z=s[5],oe=s[9],ee=s[13],he=s[2],de=s[6],se=s[10],le=s[14],B=s[3],ae=s[7],re=s[11],N=s[15];return a[0]=c*O+u*R+f*he+d*B,a[4]=c*U+u*z+f*de+d*ae,a[8]=c*Y+u*oe+f*se+d*re,a[12]=c*b+u*ee+f*le+d*N,a[1]=m*O+g*R+_*he+x*B,a[5]=m*U+g*z+_*de+x*ae,a[9]=m*Y+g*oe+_*se+x*re,a[13]=m*b+g*ee+_*le+x*N,a[2]=M*O+T*R+S*he+y*B,a[6]=M*U+T*z+S*de+y*ae,a[10]=M*Y+T*oe+S*se+y*re,a[14]=M*b+T*ee+S*le+y*N,a[3]=I*O+L*R+C*he+G*B,a[7]=I*U+L*z+C*de+G*ae,a[11]=I*Y+L*oe+C*se+G*re,a[15]=I*b+L*ee+C*le+G*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],d=e[13],m=e[2],g=e[6],_=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+a*f*g-s*d*g-a*u*_+i*d*_+s*u*x-i*f*x)+T*(+t*f*x-t*d*_+a*c*_-s*c*x+s*d*m-a*f*m)+S*(+t*d*g-t*u*x-a*c*g+i*c*x+a*u*m-i*d*m)+y*(-s*u*m-t*f*g+t*u*_+s*c*g-i*c*_+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],m=e[8],g=e[9],_=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],I=g*S*d-T*_*d+T*f*x-u*S*x-g*f*y+u*_*y,L=M*_*d-m*S*d-M*f*x+c*S*x+m*f*y-c*_*y,C=m*T*d-M*g*d+M*u*x-c*T*x-m*u*y+c*g*y,G=M*g*f-m*T*f-M*u*_+c*T*_+m*u*S-c*g*S,O=t*I+i*L+s*C+a*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=I*U,e[1]=(T*_*a-g*S*a-T*s*x+i*S*x+g*s*y-i*_*y)*U,e[2]=(u*S*a-T*f*a+T*s*d-i*S*d-u*s*y+i*f*y)*U,e[3]=(g*f*a-u*_*a-g*s*d+i*_*d+u*s*x-i*f*x)*U,e[4]=L*U,e[5]=(m*S*a-M*_*a+M*s*x-t*S*x-m*s*y+t*_*y)*U,e[6]=(M*f*a-c*S*a-M*s*d+t*S*d+c*s*y-t*f*y)*U,e[7]=(c*_*a-m*f*a+m*s*d-t*_*d-c*s*x+t*f*x)*U,e[8]=C*U,e[9]=(M*g*a-m*T*a-M*i*x+t*T*x+m*i*y-t*g*y)*U,e[10]=(c*T*a-M*u*a+M*i*d-t*T*d-c*i*y+t*u*y)*U,e[11]=(m*u*a-c*g*a-m*i*d+t*g*d+c*i*x-t*u*x)*U,e[12]=G*U,e[13]=(m*T*s-M*g*s+M*i*_-t*T*_-m*i*S+t*g*S)*U,e[14]=(M*u*s-c*T*s-M*i*f+t*T*f+c*i*S-t*u*S)*U,e[15]=(c*g*s-m*u*s+m*i*f-t*g*f-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,d=a*c,m=a*u;return this.set(d*c+i,d*u-s*f,d*f+s*u,0,d*u+s*f,m*u+i,m*f-s*c,0,d*f-s*u,m*f+s*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,d=a+a,m=c+c,g=u+u,_=a*d,x=a*m,M=a*g,T=c*m,S=c*g,y=u*g,I=f*d,L=f*m,C=f*g,G=i.x,O=i.y,U=i.z;return s[0]=(1-(T+y))*G,s[1]=(x+C)*G,s[2]=(M-L)*G,s[3]=0,s[4]=(x-C)*O,s[5]=(1-(_+y))*O,s[6]=(S+I)*O,s[7]=0,s[8]=(M+L)*U,s[9]=(S-I)*U,s[10]=(1-(_+T))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=qs.set(s[0],s[1],s[2]).length();const c=qs.set(s[4],s[5],s[6]).length(),u=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const d=1/a,m=1/c,g=1/u;return mi.elements[0]*=d,mi.elements[1]*=d,mi.elements[2]*=d,mi.elements[4]*=m,mi.elements[5]*=m,mi.elements[6]*=m,mi.elements[8]*=g,mi.elements[9]*=g,mi.elements[10]*=g,t.setFromRotationMatrix(mi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=er){const f=this.elements,d=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let x,M;if(u===er)x=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===xc)x=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=er){const f=this.elements,d=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*d,x=(i+s)*m;let M,T;if(u===er)M=(c+a)*g,T=-2*g;else if(u===xc)M=a*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=T,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qs=new X,mi=new lt,Jy=new X(0,0,0),ex=new X(1,1,1),Pr=new X,Vl=new X,qn=new X,Km=new lt,$m=new bi;class Pi{constructor(e=0,t=0,i=0,s=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],d=s[5],m=s[9],g=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(ht(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-ht(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class R_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tx=0;const Zm=new X,Ks=new bi,Yi=new lt,Gl=new X,ca=new X,nx=new X,ix=new bi,Qm=new X(1,0,0),Jm=new X(0,1,0),eg=new X(0,0,1),tg={type:"added"},rx={type:"removed"},$s={type:"childadded",child:null},_h={type:"childremoved",child:null};class Gt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new X,t=new Pi,i=new bi,s=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new at}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gl.copy(e):Gl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(ca,Gl,this.up):Yi.lookAt(Gl,ca,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Yi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rx),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,nx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const g=f[d];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),d=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new X(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new X,qi=new X,vh=new X,Ki=new X,Zs=new X,Qs=new X,ng=new X,yh=new X,xh=new X,Sh=new X,Mh=new Rt,Eh=new Rt,Th=new Rt;class vi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gi.subVectors(e,t),s.cross(gi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){gi.subVectors(s,t),qi.subVectors(i,t),vh.subVectors(e,t);const c=gi.dot(gi),u=gi.dot(qi),f=gi.dot(vh),d=qi.dot(qi),m=qi.dot(vh),g=c*d-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,x=(d*f-u*m)*_,M=(c*m-u*f)*_;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,i,s,a,c,u,f){return this.getBarycoord(e,t,i,s,Ki)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ki.x),f.addScaledVector(c,Ki.y),f.addScaledVector(u,Ki.z),f)}static getInterpolatedAttribute(e,t,i,s,a,c){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,i),Th.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Mh,a.x),c.addScaledVector(Eh,a.y),c.addScaledVector(Th,a.z),c}static isFrontFacing(e,t,i,s){return gi.subVectors(i,t),qi.subVectors(e,t),gi.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),gi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Zs.subVectors(s,i),Qs.subVectors(a,i),yh.subVectors(e,i);const f=Zs.dot(yh),d=Qs.dot(yh);if(f<=0&&d<=0)return t.copy(i);xh.subVectors(e,s);const m=Zs.dot(xh),g=Qs.dot(xh);if(m>=0&&g<=m)return t.copy(s);const _=f*g-m*d;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(i).addScaledVector(Zs,c);Sh.subVectors(e,a);const x=Zs.dot(Sh),M=Qs.dot(Sh);if(M>=0&&x<=M)return t.copy(a);const T=x*d-f*M;if(T<=0&&d>=0&&M<=0)return u=d/(d-M),t.copy(i).addScaledVector(Qs,u);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return ng.subVectors(a,s),u=(g-m)/(g-m+(x-M)),t.copy(s).addScaledVector(ng,u);const y=1/(S+T+_);return c=T*y,u=_*y,t.copy(i).addScaledVector(Zs,c).addScaledVector(Qs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Ah(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=Xf(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Ah(c,a,e+1/3),this.g=Ah(c,a,e),this.b=Ah(c,a,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=dn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=C_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return St.fromWorkingColorSpace(Sn.copy(this),e),Math.round(ht(Sn.r*255,0,255))*65536+Math.round(ht(Sn.g*255,0,255))*256+Math.round(ht(Sn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Sn.copy(this),t);const i=Sn.r,s=Sn.g,a=Sn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let f,d;const m=(u+c)/2;if(u===c)f=0,d=0;else{const g=c-u;switch(d=m<=.5?g/(c+u):g/(2-c-u),c){case i:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-i)/g+2;break;case a:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=dn){St.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,i=Sn.g,s=Sn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Wl);const i=ya(Lr.h,Wl.h,t),s=ya(Lr.s,Wl.s,t),a=ya(Lr.l,Wl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new ot;ot.NAMES=C_;let sx=0;class Ci extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=co,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=jh,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xh&&(i.blendSrc=this.blendSrc),this.blendDst!==jh&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ps extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=l_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new X,Xl=new nt;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pf,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pf&&(e.usage=this.usage),e}}class b_ extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class P_ extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nr extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ox=0;const ri=new lt,wh=new Gt,Js=new X,Kn=new sr,ua=new sr,ln=new X;class Di extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T_(e)?P_:b_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new at().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new nr(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Kn.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ua.setFromBufferAttribute(u),this.morphTargetsRelative?(ln.addVectors(Kn.min,ua.min),Kn.expandByPoint(ln),ln.addVectors(Kn.max,ua.max),Kn.expandByPoint(ln)):(Kn.expandByPoint(ua.min),Kn.expandByPoint(ua.max))}Kn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)ln.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,m=u.count;d<m;d++)ln.fromBufferAttribute(u,d),f&&(Js.fromBufferAttribute(e,d),ln.add(Js)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let Y=0;Y<i.count;Y++)u[Y]=new X,f[Y]=new X;const d=new X,m=new X,g=new X,_=new nt,x=new nt,M=new nt,T=new X,S=new X;function y(Y,b,R){d.fromBufferAttribute(i,Y),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,R),_.fromBufferAttribute(a,Y),x.fromBufferAttribute(a,b),M.fromBufferAttribute(a,R),m.sub(d),g.sub(d),x.sub(_),M.sub(_);const z=1/(x.x*M.y-M.x*x.y);isFinite(z)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(z),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(z),u[Y].add(T),u[b].add(T),u[R].add(T),f[Y].add(S),f[b].add(S),f[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Y=0,b=I.length;Y<b;++Y){const R=I[Y],z=R.start,oe=R.count;for(let ee=z,he=z+oe;ee<he;ee+=3)y(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new X,C=new X,G=new X,O=new X;function U(Y){G.fromBufferAttribute(s,Y),O.copy(G);const b=u[Y];L.copy(b),L.sub(G.multiplyScalar(G.dot(b))).normalize(),C.crossVectors(O,b);const z=C.dot(f[Y])<0?-1:1;c.setXYZW(Y,L.x,L.y,L.z,z)}for(let Y=0,b=I.length;Y<b;++Y){const R=I[Y],z=R.start,oe=R.count;for(let ee=z,he=z+oe;ee<he;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new X,a=new X,c=new X,u=new X,f=new X,d=new X,m=new X,g=new X;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),u.add(m),f.add(m),d.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(u,f){const d=u.array,m=u.itemSize,g=u.normalized,_=new d.constructor(f.length*m);let x=0,M=0;for(let T=0,S=f.length;T<S;T++){u.isInterleavedBufferAttribute?x=f[T]*u.data.stride+u.offset:x=f[T]*m;for(let y=0;y<m;y++)_[M++]=d[x++]}return new Dn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let m=0,g=d.length;m<g;m++){const _=d[m],x=e(_,i);f.push(x)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let g=0,_=d.length;g<_;g++){const x=d[g];m.push(x.toJSON(e.data))}m.length>0&&(s[f]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],g=a[d];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new lt,os=new wa,jl=new Li,rg=new X,Yl=new X,ql=new X,Kl=new X,Rh=new X,$l=new X,sg=new X,Zl=new X;class Zn extends Gt{constructor(e=new Di,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){$l.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const m=u[f],g=a[f];m!==0&&(Rh.fromBufferAttribute(g,e),c?$l.addScaledVector(Rh,m):$l.addScaledVector(Rh.sub(t),m))}t.add($l)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(a),os.copy(e.ray).recast(e.near),!(jl.containsPoint(os.origin)===!1&&(os.intersectSphere(jl,rg)===null||os.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(a).invert(),os.copy(e.ray).applyMatrix4(ig),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=c[S.materialIndex],I=Math.max(S.start,x.start),L=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let C=I,G=L;C<G;C+=3){const O=u.getX(C),U=u.getX(C+1),Y=u.getX(C+2);s=Ql(this,y,e,i,d,m,g,O,U,Y),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const I=u.getX(S),L=u.getX(S+1),C=u.getX(S+2);s=Ql(this,c,e,i,d,m,g,I,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=_.length;M<T;M++){const S=_[M],y=c[S.materialIndex],I=Math.max(S.start,x.start),L=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=I,G=L;C<G;C+=3){const O=C,U=C+1,Y=C+2;s=Ql(this,y,e,i,d,m,g,O,U,Y),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const I=S,L=S+1,C=S+2;s=Ql(this,c,e,i,d,m,g,I,L,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function ax(o,e,t,i,s,a,c,u){let f;if(e.side===Gn?f=i.intersectTriangle(c,a,s,!0,u):f=i.intersectTriangle(s,a,c,e.side===ir,u),f===null)return null;Zl.copy(u),Zl.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Zl);return d<t.near||d>t.far?null:{distance:d,point:Zl.clone(),object:o}}function Ql(o,e,t,i,s,a,c,u,f,d){o.getVertexPosition(u,Yl),o.getVertexPosition(f,ql),o.getVertexPosition(d,Kl);const m=ax(o,e,t,i,Yl,ql,Kl,sg);if(m){const g=new X;vi.getBarycoord(sg,Yl,ql,Kl,g),s&&(m.uv=vi.getInterpolatedAttribute(s,u,f,d,g,new nt)),a&&(m.uv1=vi.getInterpolatedAttribute(a,u,f,d,g,new nt)),c&&(m.normal=vi.getInterpolatedAttribute(c,u,f,d,g,new X),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:f,c:d,normal:new X,materialIndex:0};vi.getNormal(Yl,ql,Kl,_.normal),m.face=_,m.barycoord=g}return m}class Ra extends Di{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],m=[],g=[];let _=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new nr(d,3)),this.setAttribute("normal",new nr(m,3)),this.setAttribute("uv",new nr(g,2));function M(T,S,y,I,L,C,G,O,U,Y,b){const R=C/U,z=G/Y,oe=C/2,ee=G/2,he=O/2,de=U+1,se=Y+1;let le=0,B=0;const ae=new X;for(let re=0;re<se;re++){const N=re*z-ee;for(let ne=0;ne<de;ne++){const Ie=ne*R-oe;ae[T]=Ie*I,ae[S]=N*L,ae[y]=he,d.push(ae.x,ae.y,ae.z),ae[T]=0,ae[S]=0,ae[y]=O>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ne/U),g.push(1-re/Y),le+=1}}for(let re=0;re<Y;re++)for(let N=0;N<U;N++){const ne=_+N+de*re,Ie=_+N+de*(re+1),Z=_+(N+1)+de*(re+1),ce=_+(N+1)+de*re;f.push(ne,Ie,ce),f.push(Ie,Z,ce),B+=6}u.addGroup(x,B,b),x+=B,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function bn(o){const e={};for(let t=0;t<o.length;t++){const i=So(o[t]);for(const s in i)e[s]=i[s]}return e}function lx(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function L_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const cx={clone:So,merge:bn};var ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ux,this.fragmentShader=hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class D_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new X,og=new nt,ag=new nt;class Pn extends D_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,og,ag),t.subVectors(ag,og)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class fx extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(eo,to,e,t);s.layers=this.layers,this.add(s);const a=new Pn(eo,to,e,t);a.layers=this.layers,this.add(a);const c=new Pn(eo,to,e,t);c.layers=this.layers,this.add(c);const u=new Pn(eo,to,e,t);u.layers=this.layers,this.add(u);const f=new Pn(eo,to,e,t);f.layers=this.layers,this.add(f);const d=new Pn(eo,to,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,f]=t;for(const d of t)this.remove(d);if(e===er)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,d,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class I_ extends cn{constructor(e,t,i,s,a,c,u,f,d,m){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,i,s,a,c,u,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dx extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new I_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ra(5,5,5),a=new Hr({name:"CubemapFromEquirect",uniforms:So(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:Br});a.uniforms.tEquirect.value=t;const c=new Zn(s,a),u=t.minFilter;return t.minFilter===Ji&&(t.minFilter=$n),new fx(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class px extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pf,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new X;class jf{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),a=Pt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lg=new X,cg=new Rt,ug=new Rt,gx=new X,hg=new lt,Jl=new X,Ch=new Li,fg=new lt,bh=new wa;class _x extends Zn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=km,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingBox.expandByPoint(Jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingSphere.expandByPoint(Jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ch.copy(this.boundingSphere),Ch.applyMatrix4(s),e.ray.intersectsSphere(Ch)!==!1&&(fg.copy(s).invert(),bh.copy(e.ray).applyMatrix4(fg),!(this.boundingBox!==null&&bh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===km?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;cg.fromBufferAttribute(s.attributes.skinIndex,e),ug.fromBufferAttribute(s.attributes.skinWeight,e),lg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=ug.getComponent(a);if(c!==0){const u=cg.getComponent(a);hg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(gx.copy(lg).applyMatrix4(hg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class N_ extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class U_ extends cn{constructor(e=null,t=1,i=1,s,a,c,u,f,d=Ln,m=Ln,g,_){super(null,c,u,f,d,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dg=new lt,vx=new lt;class Yf{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:vx;dg.multiplyMatrices(u,t[a]),dg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Yf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new U_(t,e,e,oi,yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new N_),this.bones.push(c),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class Lf extends Dn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const no=new lt,pg=new lt,ec=[],mg=new sr,yx=new lt,ha=new Zn,fa=new Li;class xx extends Zn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,no),mg.copy(e.boundingBox).applyMatrix4(no),this.boundingBox.union(mg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,no),fa.copy(e.boundingSphere).applyMatrix4(no),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,no),pg.multiplyMatrices(i,no),ha.matrixWorld=pg,ha.raycast(e,ec);for(let c=0,u=ec.length;c<u;c++){const f=ec[c];f.instanceId=a,f.object=this,t.push(f)}ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new U_(new Float32Array(s*this.count),s,this.count,Hf,yi));const a=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,f=s*e;a[f]=u,a.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Ph=new X,Sx=new X,Mx=new at;class Ur{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ph.subVectors(i,t).cross(Sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ph),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mx.getNormalMatrix(e),s=this.coplanarPoint(Ph).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Li,tc=new X;class qf{constructor(e=new Ur,t=new Ur,i=new Ur,s=new Ur,a=new Ur,c=new Ur){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=er){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],f=s[3],d=s[4],m=s[5],g=s[6],_=s[7],x=s[8],M=s[9],T=s[10],S=s[11],y=s[12],I=s[13],L=s[14],C=s[15];if(i[0].setComponents(f-a,_-d,S-x,C-y).normalize(),i[1].setComponents(f+a,_+d,S+x,C+y).normalize(),i[2].setComponents(f+c,_+m,S+M,C+I).normalize(),i[3].setComponents(f-c,_-m,S-M,C-I).normalize(),i[4].setComponents(f-u,_-g,S-T,C-L).normalize(),t===er)i[5].setComponents(f+u,_+g,S+T,C+L).normalize();else if(t===xc)i[5].setComponents(u,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(tc.x=s.normal.x>0?e.max.x:e.min.x,tc.y=s.normal.y>0?e.max.y:e.min.y,tc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class F_ extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new X,Mc=new X,gg=new lt,da=new wa,nc=new Li,Lh=new X,_g=new X;class Kf extends Gt{constructor(e=new Di,t=new F_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Sc.fromBufferAttribute(t,s-1),Mc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new nr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),nc.radius+=a,e.ray.intersectsSphere(nc)===!1)return;gg.copy(s).invert(),da.copy(e.ray).applyMatrix4(gg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let T=x,S=M-1;T<S;T+=d){const y=m.getX(T),I=m.getX(T+1),L=ic(this,e,da,f,y,I);L&&t.push(L)}if(this.isLineLoop){const T=m.getX(M-1),S=m.getX(x),y=ic(this,e,da,f,T,S);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let T=x,S=M-1;T<S;T+=d){const y=ic(this,e,da,f,T,T+1);y&&t.push(y)}if(this.isLineLoop){const T=ic(this,e,da,f,M-1,x);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function ic(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(Sc.fromBufferAttribute(c,s),Mc.fromBufferAttribute(c,a),t.distanceSqToSegment(Sc,Mc,Lh,_g)>i)return;Lh.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(Lh);if(!(f<e.near||f>e.far))return{distance:f,point:_g.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const vg=new X,yg=new X;class Ex extends Kf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)vg.fromBufferAttribute(t,s),yg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vg.distanceTo(yg);e.setAttribute("lineDistance",new nr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tx extends Kf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class O_ extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xg=new lt,Df=new wa,rc=new Li,sc=new X;class Ax extends Gt{constructor(e=new Di,t=new O_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),rc.radius+=a,e.ray.intersectsSphere(rc)===!1)return;xg.copy(s).invert(),Df.copy(e.ray).applyMatrix4(xg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=i.index,g=i.attributes.position;if(d!==null){const _=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let M=_,T=x;M<T;M++){const S=d.getX(M);sc.fromBufferAttribute(g,S),Sg(sc,S,f,s,e,t,this)}}else{const _=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let M=_,T=x;M<T;M++)sc.fromBufferAttribute(g,M),Sg(sc,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Sg(o,e,t,i,s,a,c){const u=Df.distanceSqToPoint(o);if(u<t){const f=new X;Df.closestPointToPoint(o,f),f.applyMatrix4(i);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class ms extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class k_ extends cn{constructor(e,t,i,s,a,c,u,f,d,m=uo){if(m!==uo&&m!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===uo&&(i=gs),i===void 0&&m===yo&&(i=vo),super(null,s,a,c,u,f,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Ln,this.minFilter=f!==void 0?f:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tc extends Di{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(s),d=u+1,m=f+1,g=e/u,_=t/f,x=[],M=[],T=[],S=[];for(let y=0;y<m;y++){const I=y*_-c;for(let L=0;L<d;L++){const C=L*g-a;M.push(C,-I,0),T.push(0,0,1),S.push(L/u),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let I=0;I<u;I++){const L=I+d*y,C=I+d*(y+1),G=I+1+d*(y+1),O=I+1+d*y;x.push(L,C,O),x.push(C,G,O)}this.setIndex(x),this.setAttribute("position",new nr(M,3)),this.setAttribute("normal",new nr(T,3)),this.setAttribute("uv",new nr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $f extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S_,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ii extends $f{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wx extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rx extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function oc(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Cx(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function bx(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Mg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)s[c++]=o[u+f]}return s}function B_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Ca{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Px extends Ca{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bm,endingEnd:Bm}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case zm:a=e,u=2*t-i;break;case Hm:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case zm:c=e,f=2*i-t;break;case Hm:c=1,f=i+s[1]-s[0];break;default:c=e-1,f=t}const d=(i-t)*.5,m=this.valueSize;this._weightPrev=d/(t-u),this._weightNext=d/(f-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),T=M*M,S=T*M,y=-_*S+2*_*T-_*M,I=(1+_)*S+(-1.5-2*_)*T+(-.5+_)*M+1,L=(-1-x)*S+(1.5+x)*T+.5*M,C=x*S-x*T;for(let G=0;G!==u;++G)a[G]=y*c[m+G]+I*c[d+G]+L*c[f+G]+C*c[g+G];return a}}class Lx extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[d+_]*g+c[f+_]*m;return a}}class Dx extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ni{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oc(t,this.TimeBufferType),this.values=oc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oc(e.times,Array),values:oc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Dx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Px(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case Ea:t=this.InterpolantFactoryMethodLinear;break;case lh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(s!==void 0&&Cx(s))for(let u=0,f=s.length;u!==f;++u){const d=s[u];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lh,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const d=e[u],m=e[u+1];if(d!==m&&(u!==1||d!==e[0]))if(s)f=!0;else{const g=u*i,_=g-i,x=g+i;for(let M=0;M!==i;++M){const T=t[g+M];if(T!==t[_+M]||T!==t[x+M]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const g=u*i,_=c*i;for(let x=0;x!==i;++x)t[_+x]=t[g+x]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,d=0;d!==i;++d)t[f+d]=t[u+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=Ea;class Ao extends Ni{constructor(e,t,i){super(e,t,i)}}Ao.prototype.ValueTypeName="bool";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=Ma;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class z_ extends Ni{}z_.prototype.ValueTypeName="color";class Mo extends Ni{}Mo.prototype.ValueTypeName="number";class Ix extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(s-t);let d=e*u;for(let m=d+u;d!==m;d+=4)bi.slerpFlat(a,0,c,d-u,c,d,f);return a}}class Eo extends Ni{InterpolantFactoryMethodLinear(e){return new Ix(this.times,this.values,this.getValueSize(),e)}}Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends Ni{constructor(e,t,i){super(e,t,i)}}wo.prototype.ValueTypeName="string";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=Ma;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Ni{}To.prototype.ValueTypeName="vector";class Nx{constructor(e="",t=-1,i=[],s=py){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Fx(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Ni.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],d=[];f.push((u+a-1)%a,u,(u+1)%a),d.push(0,1,0);const m=bx(f);f=Mg(f,1,m),d=Mg(d,1,m),!s&&f[0]===0&&(f.push(a),d.push(d[0])),c.push(new Mo(".morphTargetInfluences["+t[u].name+"]",f,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const d=e[u],m=d.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(d)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,x,M,T){if(x.length!==0){const S=[],y=[];B_(x,S,y,M),S.length!==0&&T.push(new g(_,S,y))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const _=d[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let T=0;T<_[M].morphTargets.length;T++)x[_[M].morphTargets[T]]=-1;for(const T in x){const S=[],y=[];for(let I=0;I!==_[M].morphTargets.length;++I){const L=_[M];S.push(L.time),y.push(L.morphTarget===T?1:0)}s.push(new Mo(".morphTargetInfluence["+T+"]",S,y))}f=x.length*c}else{const x=".bones["+t[g].name+"]";i(To,x+".position",_,"pos",s),i(Eo,x+".quaternion",_,"rot",s),i(To,x+".scale",_,"scl",s)}}return s.length===0?null:new this(a,f,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ux(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return To;case"color":return z_;case"quaternion":return Eo;case"bool":case"boolean":return Ao;case"string":return wo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Fx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ux(o.type);if(o.times===void 0){const t=[],i=[];B_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const kr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ox{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return d.push(m,g),this},this.removeHandler=function(m){const g=d.indexOf(m);return g!==-1&&d.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=d.length;g<_;g+=2){const x=d[g],M=d[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null}}}const kx=new Ox;class Ro{constructor(e){this.manager=e!==void 0?e:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class Bx extends Error{constructor(e,t){super(e),this.response=t}}class H_ extends Ro{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=kr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:i,onError:s});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const m=$i[e],g=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let T=0;const S=new ReadableStream({start(y){I();function I(){g.read().then(({done:L,value:C})=>{if(L)y.close();else{T+=C.byteLength;const G=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:x});for(let O=0,U=m.length;O<U;O++){const Y=m[O];Y.onProgress&&Y.onProgress(G)}y.enqueue(C),I()}},L=>{y.error(L)})}}});return new Response(S)}else throw new Bx(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return d.json();default:if(u===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{kr.add(e,d);const m=$i[e];delete $i[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onLoad&&x.onLoad(d)}}).catch(d=>{const m=$i[e];if(m===void 0)throw this.manager.itemError(e),d;delete $i[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zx extends Ro{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=kr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Ta("img");function f(){m(),kr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",f,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class Hx extends Ro{constructor(e){super(e)}load(e,t,i,s){const a=new cn,c=new zx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class ba extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Vx extends ba{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Dh=new lt,Eg=new X,Tg=new X;class Zf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eg),Tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tg),t.updateMatrixWorld(),Dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gx extends Zf{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=xo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wx extends ba{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Gx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ag=new lt,pa=new X,Ih=new X;class Xx extends Zf{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),i.position.copy(pa),Ih.copy(i.position),Ih.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ih),i.updateMatrixWorld(),s.makeTranslation(-pa.x,-pa.y,-pa.z),Ag.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ag)}}class jx extends ba{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qf extends D_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yx extends Zf{constructor(){super(new Qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class so extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Yx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qx extends ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kx extends Ro{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=kr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),a.manager.itemEnd(e)}).catch(d=>{s&&s(d)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return kr.add(e,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){s&&s(d),kr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});kr.add(e,f),a.manager.itemStart(e)}}class $x extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Jf="\\[\\]\\.:\\/",Zx=new RegExp("["+Jf+"]","g"),ed="[^"+Jf+"]",Qx="[^"+Jf.replace("\\.","")+"]",Jx=/((?:WC+[\/:])*)/.source.replace("WC",ed),eS=/(WCOD+)?/.source.replace("WCOD",Qx),tS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),nS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),iS=new RegExp("^"+Jx+eS+tS+nS+"$"),rS=["material","materials","bones","map"];class sS{constructor(e,t,i){const s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Lt{constructor(e,t,i){this.path=t,this.parsedPath=i||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,i):new Lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zx,"")}static parseTrackName(e){const t=iS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);rS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===d){d=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[s];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=sS;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class oS extends vs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Rg(o,e,t,i){const s=aS(i);switch(t){case p_:return o*e;case g_:return o*e;case __:return o*e*2;case Hf:return o*e/s.components*s.byteLength;case Vf:return o*e/s.components*s.byteLength;case v_:return o*e*2/s.components*s.byteLength;case Gf:return o*e*2/s.components*s.byteLength;case m_:return o*e*3/s.components*s.byteLength;case oi:return o*e*4/s.components*s.byteLength;case Wf:return o*e*4/s.components*s.byteLength;case fc:case dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(o,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(o,8)*Math.max(e,8)/2;case af:case lf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ff:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case df:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case _f:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case vf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case yf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case xf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gc:case Tf:case Af:return Math.ceil(o/4)*Math.ceil(e/4)*16;case y_:case wf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Rf:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aS(o){switch(o){case rr:case h_:return{byteLength:1,components:1};case Sa:case f_:case Aa:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case gs:case kf:case yi:return{byteLength:4,components:1};case d_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function lS(o){const e=new WeakMap;function t(u,f){const d=u.array,m=u.usage,g=d.byteLength,_=o.createBuffer();o.bindBuffer(f,_),o.bufferData(f,d,m),u.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,f,d){const m=f.array,g=f.updateRanges;if(o.bindBuffer(d,u),g.length===0)o.bufferSubData(d,0,m);else{g.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<g.length;x++){const M=g[_],T=g[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,g[_]=T)}g.length=_+1;for(let x=0,M=g.length;x<M;x++){const T=g[x];o.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(o.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:a,update:c}}var cS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_S=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ES=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",zS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$S=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_E=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:cS,alphahash_pars_fragment:uS,alphamap_fragment:hS,alphamap_pars_fragment:fS,alphatest_fragment:dS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:_S,batching_vertex:vS,begin_vertex:yS,beginnormal_vertex:xS,bsdfs:SS,iridescence_fragment:MS,bumpmap_pars_fragment:ES,clipping_planes_fragment:TS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:RS,color_fragment:CS,color_pars_fragment:bS,color_pars_vertex:PS,color_vertex:LS,common:DS,cube_uv_reflection_fragment:IS,defaultnormal_vertex:NS,displacementmap_pars_vertex:US,displacementmap_vertex:FS,emissivemap_fragment:OS,emissivemap_pars_fragment:kS,colorspace_fragment:BS,colorspace_pars_fragment:zS,envmap_fragment:HS,envmap_common_pars_fragment:VS,envmap_pars_fragment:GS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:tM,envmap_vertex:XS,fog_vertex:jS,fog_pars_vertex:YS,fog_fragment:qS,fog_pars_fragment:KS,gradientmap_pars_fragment:$S,lightmap_pars_fragment:ZS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:JS,lights_pars_begin:eM,lights_toon_fragment:nM,lights_toon_pars_fragment:iM,lights_phong_fragment:rM,lights_phong_pars_fragment:sM,lights_physical_fragment:oM,lights_physical_pars_fragment:aM,lights_fragment_begin:lM,lights_fragment_maps:cM,lights_fragment_end:uM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:pM,map_fragment:mM,map_pars_fragment:gM,map_particle_fragment:_M,map_particle_pars_fragment:vM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:xM,morphinstance_vertex:SM,morphcolor_vertex:MM,morphnormal_vertex:EM,morphtarget_pars_vertex:TM,morphtarget_vertex:AM,normal_fragment_begin:wM,normal_fragment_maps:RM,normal_pars_fragment:CM,normal_pars_vertex:bM,normal_vertex:PM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:IM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:UM,opaque_fragment:FM,packing:OM,premultiplied_alpha_fragment:kM,project_vertex:BM,dithering_fragment:zM,dithering_pars_fragment:HM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:GM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:XM,shadowmap_vertex:jM,shadowmask_pars_fragment:YM,skinbase_vertex:qM,skinning_pars_vertex:KM,skinning_vertex:$M,skinnormal_vertex:ZM,specularmap_fragment:QM,specularmap_pars_fragment:JM,tonemapping_fragment:eE,tonemapping_pars_fragment:tE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:rE,uv_pars_vertex:sE,uv_vertex:oE,worldpos_vertex:aE,background_vert:lE,background_frag:cE,backgroundCube_vert:uE,backgroundCube_frag:hE,cube_vert:fE,cube_frag:dE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:gE,distanceRGBA_frag:_E,equirect_vert:vE,equirect_frag:yE,linedashed_vert:xE,linedashed_frag:SE,meshbasic_vert:ME,meshbasic_frag:EE,meshlambert_vert:TE,meshlambert_frag:AE,meshmatcap_vert:wE,meshmatcap_frag:RE,meshnormal_vert:CE,meshnormal_frag:bE,meshphong_vert:PE,meshphong_frag:LE,meshphysical_vert:DE,meshphysical_frag:IE,meshtoon_vert:NE,meshtoon_frag:UE,points_vert:FE,points_frag:OE,shadow_vert:kE,shadow_frag:BE,sprite_vert:zE,sprite_frag:HE},Ce={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},wi={basic:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:bn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:bn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:bn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:bn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:bn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:bn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:bn([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:bn([Ce.lights,Ce.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};wi.physical={uniforms:bn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const ac={r:0,b:0,g:0},ls=new Pi,VE=new lt;function GE(o,e,t,i,s,a,c){const u=new ot(0);let f=a===!0?0:1,d,m,g=null,_=0,x=null;function M(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function T(L){let C=!1;const G=M(L);G===null?y(u,f):G&&G.isColor&&(y(G,1),C=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const G=M(C);G&&(G.isCubeTexture||G.mapping===Ec)?(m===void 0&&(m=new Zn(new Ra(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:So(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,U,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ls.copy(C.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.material.uniforms.envMap.value=G,m.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(ls)),m.material.toneMapped=St.getTransfer(G.colorSpace)!==Nt,(g!==G||_!==G.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=G,_=G.version,x=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):G&&G.isTexture&&(d===void 0&&(d=new Zn(new Tc(2,2),new Hr({name:"BackgroundMaterial",uniforms:So(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=G,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=St.getTransfer(G.colorSpace)!==Nt,G.matrixAutoUpdate===!0&&G.updateMatrix(),d.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||_!==G.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,g=G,_=G.version,x=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function y(L,C){L.getRGB(ac,L_(o)),i.buffers.color.setClear(ac.r,ac.g,ac.b,C,c)}function I(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(L,C=1){u.set(L),f=C,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,y(u,f)},render:T,addToRenderList:S,dispose:I}}function WE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(R,z,oe,ee,he){let de=!1;const se=g(ee,oe,z);a!==se&&(a=se,d(a.object)),de=x(R,ee,oe,he),de&&M(R,ee,oe,he),he!==null&&e.update(he,o.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,C(R,z,oe,ee),he!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function f(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function g(R,z,oe){const ee=oe.wireframe===!0;let he=i[R.id];he===void 0&&(he={},i[R.id]=he);let de=he[z.id];de===void 0&&(de={},he[z.id]=de);let se=de[ee];return se===void 0&&(se=_(f()),de[ee]=se),se}function _(R){const z=[],oe=[],ee=[];for(let he=0;he<t;he++)z[he]=0,oe[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:ee,object:R,attributes:{},index:null}}function x(R,z,oe,ee){const he=a.attributes,de=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const re=he[B];let N=de[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;se++}return a.attributesNum!==se||a.index!==ee}function M(R,z,oe,ee){const he={},de=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let re=de[B];re===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),he[B]=N,se++}a.attributes=he,a.attributesNum=se,a.index=ee}function T(){const R=a.newAttributes;for(let z=0,oe=R.length;z<oe;z++)R[z]=0}function S(R){y(R,0)}function y(R,z){const oe=a.newAttributes,ee=a.enabledAttributes,he=a.attributeDivisors;oe[R]=1,ee[R]===0&&(o.enableVertexAttribArray(R),ee[R]=1),he[R]!==z&&(o.vertexAttribDivisor(R,z),he[R]=z)}function I(){const R=a.newAttributes,z=a.enabledAttributes;for(let oe=0,ee=z.length;oe<ee;oe++)z[oe]!==R[oe]&&(o.disableVertexAttribArray(oe),z[oe]=0)}function L(R,z,oe,ee,he,de,se){se===!0?o.vertexAttribIPointer(R,z,oe,he,de):o.vertexAttribPointer(R,z,oe,ee,he,de)}function C(R,z,oe,ee){T();const he=ee.attributes,de=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in de){const B=de[le];if(B.location>=0){let ae=he[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Z=ne.type,ce=ne.bytesPerElement,Me=Z===o.INT||Z===o.UNSIGNED_INT||ae.gpuType===kf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ne=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<B.locationSize;Ze++)L(B.location+Ze,N/B.locationSize,Z,re,Te*ce,(Ne+N/B.locationSize*Ze)*ce,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ve=0;ve<B.locationSize;ve++)L(B.location+ve,N/B.locationSize,Z,re,N*ce,N/B.locationSize*ve*ce,Me)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(B.location,re);break;case 3:o.vertexAttrib3fv(B.location,re);break;case 4:o.vertexAttrib4fv(B.location,re);break;default:o.vertexAttrib1fv(B.location,re)}}}}I()}function G(){Y();for(const R in i){const z=i[R];for(const oe in z){const ee=z[oe];for(const he in ee)m(ee[he].object),delete ee[he];delete z[oe]}delete i[R]}}function O(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const oe in z){const ee=z[oe];for(const he in ee)m(ee[he].object),delete ee[he];delete z[oe]}delete i[R.id]}function U(R){for(const z in i){const oe=i[z];if(oe[R.id]===void 0)continue;const ee=oe[R.id];for(const he in ee)m(ee[he].object),delete ee[he];delete oe[R.id]}}function Y(){b(),c=!0,a!==s&&(a=s,d(a.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:I}}function XE(o,e,t){let i;function s(d){i=d}function a(d,m){o.drawArrays(i,d,m),t.update(m,i,1)}function c(d,m,g){g!==0&&(o.drawArraysInstanced(i,d,m,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,i,1)}function f(d,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)c(d[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,m,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=m[T]*_[T];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function jE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==oi&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const Y=U===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==rr&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==yi&&!Y)}function f(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=f(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:G,maxSamples:O}}function YE(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Ur,u=new at,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,x){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):d();else{const I=a?0:i,L=I*4;let C=y.clippingState||null;f.value=C,C=m(M,_,L,x);for(let G=0;G!==L;++G)C[G]=t[G];y.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,x,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=f.value,M!==!0||S===null){const y=x+T*4,I=_.matrixWorldInverse;u.getNormalMatrix(I),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,C=x;L!==T;++L,C+=4)c.copy(g[L]).applyMatrix4(I,u),c.normal.toArray(S,C),S[C+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function qE(o){let e=new WeakMap;function t(c,u){return u===ef?c.mapping=mo:u===tf&&(c.mapping=go),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===ef||u===tf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new dx(f.height);return d.fromEquirectangularTexture(o,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ao=4,Cg=[.125,.215,.35,.446,.526,.582],ds=20,Nh=new Qf,bg=new ot;let Uh=null,Fh=0,Oh=0,kh=!1;const hs=(1+Math.sqrt(5))/2,io=1/hs,Pg=[new X(-hs,io,0),new X(hs,io,0),new X(-io,0,hs),new X(io,0,hs),new X(0,hs,-io),new X(0,hs,io),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Fh,Oh),this._renderer.xr.enabled=kh,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Aa,format:oi,colorSpace:In,depthBuffer:!1},s=Dg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KE(a)),this._blurMaterial=$E(a,e,t)}return s}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,Nh)}_sceneToCubeUV(e,t,i,s){const u=new Pn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(bg),m.toneMapping=zr,m.autoClear=!1;const x=new ps({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),M=new Zn(new Ra,x);let T=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,T=!0):(x.color.copy(bg),T=!0);for(let y=0;y<6;y++){const I=y%3;I===0?(u.up.set(0,f[y],0),u.lookAt(d[y],0,0)):I===1?(u.up.set(0,0,f[y]),u.lookAt(0,d[y],0)):(u.up.set(0,f[y],0),u.lookAt(0,0,d[y]));const L=this._cubeSize;lc(s,I*L,y>2?L:0,L,L),m.setRenderTarget(s),T&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===mo||e.mapping===go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Zn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;lc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Nh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Pg[(s-a-1)%Pg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Zn(this._lodPlanes[s],d),_=d.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*ds-1),T=a/M,S=isFinite(a)?1+Math.floor(m*T):ds;S>ds&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ds}`);const y=[];let I=0;for(let U=0;U<ds;++U){const Y=U/T,b=Math.exp(-Y*Y/2);y.push(b),U===0?I+=b:U<S&&(I+=2*b)}for(let U=0;U<y.length;U++)y[U]=y[U]/I;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-i;const C=this._sizeLods[s],G=3*C*(s>L-ao?s-L+ao:0),O=4*(this._cubeSize-C);lc(t,G,O,3*C,2*C),f.setRenderTarget(t),f.render(g,Nh)}}function KE(o){const e=[],t=[],i=[];let s=o;const a=o-ao+1+Cg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let f=1/u;c>o-ao?f=Cg[c-o+ao-1]:c===0&&(f=0),i.push(f);const d=1/(u-2),m=-d,g=1+d,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,T=3,S=2,y=1,I=new Float32Array(T*M*x),L=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let O=0;O<x;O++){const U=O%3*2/3-1,Y=O>2?0:-1,b=[U,Y,0,U+2/3,Y,0,U+2/3,Y+1,0,U,Y,0,U+2/3,Y+1,0,U,Y+1,0];I.set(b,T*M*O),L.set(_,S*M*O);const R=[O,O,O,O,O,O];C.set(R,y*M*O)}const G=new Di;G.setAttribute("position",new Dn(I,T)),G.setAttribute("uv",new Dn(L,S)),G.setAttribute("faceIndex",new Dn(C,y)),e.push(G),s>ao&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dg(o,e,t){const i=new _s(o,e,t);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function $E(o,e,t){const i=new Float32Array(ds),s=new X(0,1,0);return new Hr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Ig(){return new Hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Ng(){return new Hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZE(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===ef||f===tf,m=f===mo||f===go;if(d||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new Lg(o)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return d&&x&&x.height>0||m&&x&&s(x)?(t===null&&(t=new Lg(o)),g=d?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let f=0;const d=6;for(let m=0;m<d;m++)u[m]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function QE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function JE(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete s[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const x in _)e.update(_[x],o.ARRAY_BUFFER)}function d(g){const _=[],x=g.index,M=g.attributes.position;let T=0;if(x!==null){const I=x.array;T=x.version;for(let L=0,C=I.length;L<C;L+=3){const G=I[L+0],O=I[L+1],U=I[L+2];_.push(G,O,O,U,U,G)}}else if(M!==void 0){const I=M.array;T=M.version;for(let L=0,C=I.length/3-1;L<C;L+=3){const G=L+0,O=L+1,U=L+2;_.push(G,O,O,U,U,G)}}else return;const S=new(T_(_)?P_:b_)(_,1);S.version=T;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const _=a.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&d(g)}else d(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:m}}function eT(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function f(_,x){o.drawElements(i,x,a,_*c),t.update(x,i,1)}function d(_,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,_*c,M),t.update(x,i,M))}function m(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function g(_,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/c,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,_,0,T,0,M);let y=0;for(let I=0;I<M;I++)y+=x[I]*T[I];t.update(y,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function tT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function nT(o,e,t){const i=new WeakMap,s=new Rt;function a(c,u,f){const d=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let R=function(){Y.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var x=R;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let G=u.attributes.position.count*C,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const U=new Float32Array(G*O*4*g),Y=new w_(U,G,O,g);Y.type=yi,Y.needsUpdate=!0;const b=C*4;for(let z=0;z<g;z++){const oe=y[z],ee=I[z],he=L[z],de=G*O*4*z;for(let se=0;se<oe.count;se++){const le=se*b;M===!0&&(s.fromBufferAttribute(oe,se),U[de+le+0]=s.x,U[de+le+1]=s.y,U[de+le+2]=s.z,U[de+le+3]=0),T===!0&&(s.fromBufferAttribute(ee,se),U[de+le+4]=s.x,U[de+le+5]=s.y,U[de+le+6]=s.z,U[de+le+7]=0),S===!0&&(s.fromBufferAttribute(he,se),U[de+le+8]=s.x,U[de+le+9]=s.y,U[de+le+10]=s.z,U[de+le+11]=he.itemSize===4?s.w:1)}}_={count:g,texture:Y,size:new nt(G,O)},i.set(u,_),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const T=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",T),f.getUniforms().setValue(o,"morphTargetInfluences",d)}f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function iT(o,e,t,i){let s=new WeakMap;function a(f){const d=i.render.frame,m=f.geometry,g=e.get(f,m);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return g}function c(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const G_=new cn,Ug=new k_(1,1),W_=new w_,X_=new Zy,j_=new I_,Fg=[],Og=[],kg=new Float32Array(16),Bg=new Float32Array(9),zg=new Float32Array(4);function Co(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Fg[s];if(a===void 0&&(a=new Float32Array(s),Fg[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function nn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function rn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Ac(o,e){let t=Og[e];t===void 0&&(t=new Int32Array(e),Og[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function rT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function sT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;o.uniform2fv(this.addr,e),rn(t,e)}}function oT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;o.uniform3fv(this.addr,e),rn(t,e)}}function aT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;o.uniform4fv(this.addr,e),rn(t,e)}}function lT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;zg.set(i),o.uniformMatrix2fv(this.addr,!1,zg),rn(t,i)}}function cT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Bg.set(i),o.uniformMatrix3fv(this.addr,!1,Bg),rn(t,i)}}function uT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;kg.set(i),o.uniformMatrix4fv(this.addr,!1,kg),rn(t,i)}}function hT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function fT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;o.uniform2iv(this.addr,e),rn(t,e)}}function dT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;o.uniform3iv(this.addr,e),rn(t,e)}}function pT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;o.uniform4iv(this.addr,e),rn(t,e)}}function mT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function gT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;o.uniform2uiv(this.addr,e),rn(t,e)}}function _T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;o.uniform3uiv(this.addr,e),rn(t,e)}}function vT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;o.uniform4uiv(this.addr,e),rn(t,e)}}function yT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Ug.compareFunction=M_,a=Ug):a=G_,t.setTexture2D(e||a,s)}function xT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||X_,s)}function ST(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||j_,s)}function MT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||W_,s)}function ET(o){switch(o){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return hT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return _T;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function TT(o,e){o.uniform1fv(this.addr,e)}function AT(o,e){const t=Co(e,this.size,2);o.uniform2fv(this.addr,t)}function wT(o,e){const t=Co(e,this.size,3);o.uniform3fv(this.addr,t)}function RT(o,e){const t=Co(e,this.size,4);o.uniform4fv(this.addr,t)}function CT(o,e){const t=Co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function bT(o,e){const t=Co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function PT(o,e){const t=Co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function LT(o,e){o.uniform1iv(this.addr,e)}function DT(o,e){o.uniform2iv(this.addr,e)}function IT(o,e){o.uniform3iv(this.addr,e)}function NT(o,e){o.uniform4iv(this.addr,e)}function UT(o,e){o.uniform1uiv(this.addr,e)}function FT(o,e){o.uniform2uiv(this.addr,e)}function OT(o,e){o.uniform3uiv(this.addr,e)}function kT(o,e){o.uniform4uiv(this.addr,e)}function BT(o,e,t){const i=this.cache,s=e.length,a=Ac(t,s);nn(i,a)||(o.uniform1iv(this.addr,a),rn(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||G_,a[c])}function zT(o,e,t){const i=this.cache,s=e.length,a=Ac(t,s);nn(i,a)||(o.uniform1iv(this.addr,a),rn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||X_,a[c])}function HT(o,e,t){const i=this.cache,s=e.length,a=Ac(t,s);nn(i,a)||(o.uniform1iv(this.addr,a),rn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||j_,a[c])}function VT(o,e,t){const i=this.cache,s=e.length,a=Ac(t,s);nn(i,a)||(o.uniform1iv(this.addr,a),rn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||W_,a[c])}function GT(o){switch(o){case 5126:return TT;case 35664:return AT;case 35665:return wT;case 35666:return RT;case 35674:return CT;case 35675:return bT;case 35676:return PT;case 5124:case 35670:return LT;case 35667:case 35671:return DT;case 35668:case 35672:return IT;case 35669:case 35673:return NT;case 5125:return UT;case 36294:return FT;case 36295:return OT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return VT}}class WT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ET(t.type)}}class XT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GT(t.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function Hg(o,e){o.seq.push(e),o.map[e.id]=e}function YT(o,e,t){const i=o.name,s=i.length;for(Bh.lastIndex=0;;){const a=Bh.exec(i),c=Bh.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===s){Hg(t,d===void 0?new WT(u,o,e):new XT(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new jT(u),Hg(t,g)),t=g}}}class _c{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);YT(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Vg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const qT=37297;let KT=0;function $T(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Gg=new at;function ZT(o){St._getMatrix(Gg,St.workingColorSpace,o);const e=`mat3( ${Gg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(o)){case yc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Wg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+$T(o.getShaderSource(e),c)}else return s}function QT(o,e){const t=ZT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JT(o,e){let t;switch(e){case oy:t="Linear";break;case ay:t="Reinhard";break;case ly:t="Cineon";break;case cy:t="ACESFilmic";break;case hy:t="AgX";break;case fy:t="Neutral";break;case uy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cc=new X;function eA(){St.getLuminanceCoefficients(cc);const o=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function nA(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iA(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function _a(o){return o!==""}function Xg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(o){return o.replace(rA,oA)}const sA=new Map;function oA(o,e){let t=ct[e];if(t===void 0){const i=sA.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return If(t)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(o){return o.replace(aA,lA)}function lA(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function qg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function uA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function fA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case l_:e="ENVMAP_BLENDING_MULTIPLY";break;case ry:e="ENVMAP_BLENDING_MIX";break;case sy:e="ENVMAP_BLENDING_ADD";break}return e}function dA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pA(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=cA(t),d=uA(t),m=hA(t),g=fA(t),_=dA(t),x=tA(t),M=nA(a),T=s.createProgram();let S,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(_a).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(_a).join(`
`),y.length>0&&(y+=`
`)):(S=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),y=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?ct.tonemapping_pars_fragment:"",t.toneMapping!==zr?JT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,QT("linearToOutputTexel",t.outputColorSpace),eA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),c=If(c),c=Xg(c,t),c=jg(c,t),u=If(u),u=Xg(u,t),u=jg(u,t),c=Yg(c),u=Yg(u),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=I+S+c,C=I+y+u,G=Vg(s,s.VERTEX_SHADER,L),O=Vg(s,s.FRAGMENT_SHADER,C);s.attachShader(T,G),s.attachShader(T,O),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function U(z){if(o.debug.checkShaderErrors){const oe=s.getProgramInfoLog(T).trim(),ee=s.getShaderInfoLog(G).trim(),he=s.getShaderInfoLog(O).trim();let de=!0,se=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,T,G,O);else{const le=Wg(s,G,"vertex"),B=Wg(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||he==="")&&(se=!1);se&&(z.diagnostics={runnable:de,programLog:oe,vertexShader:{log:ee,prefix:S},fragmentShader:{log:he,prefix:y}})}s.deleteShader(G),s.deleteShader(O),Y=new _c(s,T),b=iA(s,T)}let Y;this.getUniforms=function(){return Y===void 0&&U(this),Y};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,qT)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=O,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _A(e),t.set(e,i)),i}}class _A{constructor(e){this.id=mA++,this.code=e,this.usedTimes=0}}function vA(o,e,t,i,s,a,c){const u=new R_,f=new gA,d=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return d.add(b),b===0?"uv":`uv${b}`}function S(b,R,z,oe,ee){const he=oe.fog,de=ee.geometry,se=b.isMeshStandardMaterial?oe.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),B=le&&le.mapping===Ec?le.image.height:null,ae=M[b.type];b.precision!==null&&(x=s.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const re=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let Ie,Z,ce,Me;if(ae){const Mt=wi[ae];Ie=Mt.vertexShader,Z=Mt.fragmentShader}else Ie=b.vertexShader,Z=b.fragmentShader,f.update(b),ce=f.getVertexShaderID(b),Me=f.getFragmentShaderID(b);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ne=ee.isInstancedMesh===!0,Ze=ee.isBatchedMesh===!0,Dt=!!b.map,vt=!!b.matcap,Ft=!!le,k=!!b.aoMap,Mn=!!b.lightMap,mt=!!b.bumpMap,ft=!!b.normalMap,je=!!b.displacementMap,bt=!!b.emissiveMap,We=!!b.metalnessMap,P=!!b.roughnessMap,A=b.anisotropy>0,$=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,ue=b.sheen>0,Ve=b.transmission>0,Ae=A&&!!b.anisotropyMap,Ue=$&&!!b.clearcoatMap,ut=$&&!!b.clearcoatNormalMap,Se=$&&!!b.clearcoatRoughnessMap,ke=ge&&!!b.iridescenceMap,qe=ge&&!!b.iridescenceThicknessMap,Qe=ue&&!!b.sheenColorMap,Be=ue&&!!b.sheenRoughnessMap,dt=!!b.specularMap,it=!!b.specularColorMap,Ct=!!b.specularIntensityMap,W=Ve&&!!b.transmissionMap,we=Ve&&!!b.thicknessMap,ie=!!b.gradientMap,fe=!!b.alphaMap,Pe=b.alphaTest>0,be=!!b.alphaHash,rt=!!b.extensions;let kt=zr;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(kt=o.toneMapping);const Qt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Z,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&ee._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&ee.instanceColor!==null,instancingMorph:Ne&&ee.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:In,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:vt,envMap:Ft,envMapMode:Ft&&le.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:Mn,bumpMap:mt,normalMap:ft,displacementMap:_&&je,emissiveMap:bt,normalMapObjectSpace:ft&&b.normalMapType===vy,normalMapTangentSpace:ft&&b.normalMapType===S_,metalnessMap:We,roughnessMap:P,anisotropy:A,anisotropyMap:Ae,clearcoat:$,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:dt,specularColorMap:it,specularIntensityMap:Ct,transmission:Ve,transmissionMap:W,thicknessMap:we,gradientMap:ie,opaque:b.transparent===!1&&b.blending===co&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Pe,alphaHash:be,combine:b.combine,mapUv:Dt&&T(b.map.channel),aoMapUv:k&&T(b.aoMap.channel),lightMapUv:Mn&&T(b.lightMap.channel),bumpMapUv:mt&&T(b.bumpMap.channel),normalMapUv:ft&&T(b.normalMap.channel),displacementMapUv:je&&T(b.displacementMap.channel),emissiveMapUv:bt&&T(b.emissiveMap.channel),metalnessMapUv:We&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Ae&&T(b.anisotropyMap.channel),clearcoatMapUv:Ue&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(b.sheenRoughnessMap.channel),specularMapUv:dt&&T(b.specularMap.channel),specularColorMapUv:it&&T(b.specularColorMap.channel),specularIntensityMapUv:Ct&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:we&&T(b.thicknessMap.channel),alphaMapUv:fe&&T(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ft||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!de.attributes.uv&&(Dt||fe),fog:!!he,useFog:b.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:kt,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===Nt,decodeVideoTextureEmissive:bt&&b.emissiveMap.isVideoTexture===!0&&St.getTransfer(b.emissiveMap.colorSpace)===Nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ri,flipSided:b.side===Gn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:rt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&b.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Qt.vertexUv1s=d.has(1),Qt.vertexUv2s=d.has(2),Qt.vertexUv3s=d.has(3),d.clear(),Qt}function y(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(I(R,b),L(R,b),R.push(o.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function I(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),b.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),b.push(u.mask)}function C(b){const R=M[b.type];let z;if(R){const oe=wi[R];z=cx.clone(oe.uniforms)}else z=b.uniforms;return z}function G(b,R){let z;for(let oe=0,ee=m.length;oe<ee;oe++){const he=m[oe];if(he.cacheKey===R){z=he,++z.usedTimes;break}}return z===void 0&&(z=new pA(o,R,b,a),m.push(z)),z}function O(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function U(b){f.remove(b)}function Y(){f.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:G,releaseProgram:O,releaseShaderCache:U,programs:m,dispose:Y}}function yA(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,f){o.get(c)[u]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function xA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Kg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $g(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,x,M,T,S){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:x,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},o[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=T,y.group=S),e++,y}function u(g,_,x,M,T,S){const y=c(g,_,x,M,T,S);x.transmission>0?i.push(y):x.transparent===!0?s.push(y):t.push(y)}function f(g,_,x,M,T,S){const y=c(g,_,x,M,T,S);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function d(g,_){t.length>1&&t.sort(g||xA),i.length>1&&i.sort(_||Kg),s.length>1&&s.sort(_||Kg)}function m(){for(let g=e,_=o.length;g<_;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:m,sort:d}}function SA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new $g,o.set(i,[c])):s>=a.length?(c=new $g,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function MA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ot};break;case"SpotLight":t={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return o[e.id]=t,t}}}function EA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let TA=0;function AA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function wA(o){const e=new MA,t=EA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new X);const s=new X,a=new lt,c=new lt;function u(d){let m=0,g=0,_=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,I=0,L=0,C=0,G=0,O=0,U=0;d.sort(AA);for(let b=0,R=d.length;b<R;b++){const z=d[b],oe=z.color,ee=z.intensity,he=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=oe.r*ee,g+=oe.g*ee,_+=oe.b*ee;else if(z.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(z.sh.coefficients[se],ee);U++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.directionalShadow[x]=B,i.directionalShadowMap[x]=de,i.directionalShadowMatrix[x]=z.shadow.matrix,I++}i.directional[x]=se,x++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=he,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,i.spot[T]=se;const le=z.shadow;if(z.map&&(i.spotLightMap[G]=z.map,G++,le.updateMatrices(z),z.castShadow&&O++),i.spotLightMatrix[T]=le.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,i.spotShadow[T]=B,i.spotShadowMap[T]=de,C++}T++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=se,S++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,B=t.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,i.pointShadow[M]=B,i.pointShadowMap[M]=de,i.pointShadowMatrix[M]=z.shadow.matrix,L++}i.point[M]=se,M++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(ee),se.groundColor.copy(z.groundColor).multiplyScalar(ee),i.hemi[y]=se,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const Y=i.hash;(Y.directionalLength!==x||Y.pointLength!==M||Y.spotLength!==T||Y.rectAreaLength!==S||Y.hemiLength!==y||Y.numDirectionalShadows!==I||Y.numPointShadows!==L||Y.numSpotShadows!==C||Y.numSpotMaps!==G||Y.numLightProbes!==U)&&(i.directional.length=x,i.spot.length=T,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+G-O,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=U,Y.directionalLength=x,Y.pointLength=M,Y.spotLength=T,Y.rectAreaLength=S,Y.hemiLength=y,Y.numDirectionalShadows=I,Y.numPointShadows=L,Y.numSpotShadows=C,Y.numSpotMaps=G,Y.numLightProbes=U,i.version=TA++)}function f(d,m){let g=0,_=0,x=0,M=0,T=0;const S=m.matrixWorldInverse;for(let y=0,I=d.length;y<I;y++){const L=d[y];if(L.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(L.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),c.identity(),a.copy(L.matrixWorld),a.premultiply(S),c.extractRotation(a),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),_++}else if(L.isHemisphereLight){const C=i.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:u,setupView:f,state:i}}function Zg(o){const e=new wA(o),t=[],i=[];function s(m){d.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function RA(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new Zg(o),e.set(s,[u])):a>=c.length?(u=new Zg(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PA(o,e,t){let i=new qf;const s=new nt,a=new nt,c=new Rt,u=new wx({depthPacking:_y}),f=new Rx,d={},m=t.maxTextureSize,g={[ir]:Gn,[Gn]:ir,[Ri]:Ri},_=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:CA,fragmentShader:bA}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new Di;M.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Zn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let y=this.type;this.render=function(O,U,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const b=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(Br),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=y!==Zi&&this.type===Zi,he=y===Zi&&this.type!==Zi;for(let de=0,se=O.length;de<se;de++){const le=O[de],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ae=B.getFrameExtents();if(s.multiply(ae),a.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ae.x),s.x=a.x*ae.x,B.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ae.y),s.y=a.y*ae.y,B.mapSize.y=a.y)),B.map===null||ee===!0||he===!0){const N=this.type!==Zi?{minFilter:Ln,magFilter:Ln}:{};B.map!==null&&B.map.dispose(),B.map=new _s(s.x,s.y,N),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const re=B.getViewportCount();for(let N=0;N<re;N++){const ne=B.getViewport(N);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),oe.viewport(c),B.updateMatrices(le,N),i=B.getFrustum(),C(U,Y,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Zi&&I(B,Y),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(b,R,z)};function I(O,U){const Y=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new _s(s.x,s.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(U,null,Y,_,T,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(U,null,Y,x,T,null)}function L(O,U,Y,b){let R=null;const z=Y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)R=z;else if(R=Y.isPointLight===!0?f:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=R.uuid,ee=U.uuid;let he=d[oe];he===void 0&&(he={},d[oe]=he);let de=he[ee];de===void 0&&(de=R.clone(),he[ee]=de,U.addEventListener("dispose",G)),R=de}if(R.visible=U.visible,R.wireframe=U.wireframe,b===Zi?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=o.properties.get(R);oe.light=Y}return R}function C(O,U,Y,b,R){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Zi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),he=O.material;if(Array.isArray(he)){const de=ee.groups;for(let se=0,le=de.length;se<le;se++){const B=de[se],ae=he[B.materialIndex];if(ae&&ae.visible){const re=L(O,ae,b,R);O.onBeforeShadow(o,O,U,Y,ee,re,B),o.renderBufferDirect(Y,null,ee,re,O,B),O.onAfterShadow(o,O,U,Y,ee,re,B)}}}else if(he.visible){const de=L(O,he,b,R);O.onBeforeShadow(o,O,U,Y,ee,de,null),o.renderBufferDirect(Y,null,ee,de,O,null),O.onAfterShadow(o,O,U,Y,ee,de,null)}}const oe=O.children;for(let ee=0,he=oe.length;ee<he;ee++)C(oe[ee],U,Y,b,R)}function G(O){O.target.removeEventListener("dispose",G);for(const Y in d){const b=d[Y],R=O.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const LA={[Yh]:qh,[Kh]:Qh,[$h]:Jh,[po]:Zh,[qh]:Yh,[Qh]:Kh,[Jh]:$h,[Zh]:po};function DA(o,e){function t(){let W=!1;const we=new Rt;let ie=null;const fe=new Rt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!W&&(o.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,be,rt,kt,Qt){Qt===!0&&(Pe*=kt,be*=kt,rt*=kt),we.set(Pe,be,rt,kt),fe.equals(we)===!1&&(o.clearColor(Pe,be,rt,kt),fe.copy(we))},reset:function(){W=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let W=!1,we=!1,ie=null,fe=null,Pe=null;return{setReversed:function(be){if(we!==be){const rt=e.get("EXT_clip_control");we?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const kt=Pe;Pe=null,this.setClear(kt)}we=be},getReversed:function(){return we},setTest:function(be){be?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(be){ie!==be&&!W&&(o.depthMask(be),ie=be)},setFunc:function(be){if(we&&(be=LA[be]),fe!==be){switch(be){case Yh:o.depthFunc(o.NEVER);break;case qh:o.depthFunc(o.ALWAYS);break;case Kh:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case $h:o.depthFunc(o.EQUAL);break;case Zh:o.depthFunc(o.GEQUAL);break;case Qh:o.depthFunc(o.GREATER);break;case Jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=be}},setLocked:function(be){W=be},setClear:function(be){Pe!==be&&(we&&(be=1-be),o.clearDepth(be),Pe=be)},reset:function(){W=!1,ie=null,fe=null,Pe=null,we=!1}}}function s(){let W=!1,we=null,ie=null,fe=null,Pe=null,be=null,rt=null,kt=null,Qt=null;return{setTest:function(Mt){W||(Mt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Mt){we!==Mt&&!W&&(o.stencilMask(Mt),we=Mt)},setFunc:function(Mt,Nn,En){(ie!==Mt||fe!==Nn||Pe!==En)&&(o.stencilFunc(Mt,Nn,En),ie=Mt,fe=Nn,Pe=En)},setOp:function(Mt,Nn,En){(be!==Mt||rt!==Nn||kt!==En)&&(o.stencilOp(Mt,Nn,En),be=Mt,rt=Nn,kt=En)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Qt!==Mt&&(o.clearStencil(Mt),Qt=Mt)},reset:function(){W=!1,we=null,ie=null,fe=null,Pe=null,be=null,rt=null,kt=null,Qt=null}}}const a=new t,c=new i,u=new s,f=new WeakMap,d=new WeakMap;let m={},g={},_=new WeakMap,x=[],M=null,T=!1,S=null,y=null,I=null,L=null,C=null,G=null,O=null,U=new ot(0,0,0),Y=0,b=!1,R=null,z=null,oe=null,ee=null,he=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=le>=2);let ae=null,re={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ie=new Rt().fromArray(N),Z=new Rt().fromArray(ne);function ce(W,we,ie,fe){const Pe=new Uint8Array(4),be=o.createTexture();o.bindTexture(W,be),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<ie;rt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(we+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return be}const Me={};Me[o.TEXTURE_2D]=ce(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=ce(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=ce(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=ce(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(o.DEPTH_TEST),c.setFunc(po),mt(!1),ft(Nm),ve(o.CULL_FACE),k(Br);function ve(W){m[W]!==!0&&(o.enable(W),m[W]=!0)}function Te(W){m[W]!==!1&&(o.disable(W),m[W]=!1)}function Ne(W,we){return g[W]!==we?(o.bindFramebuffer(W,we),g[W]=we,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Ze(W,we){let ie=x,fe=!1;if(W){ie=_.get(we),ie===void 0&&(ie=[],_.set(we,ie));const Pe=W.textures;if(ie.length!==Pe.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let be=0,rt=Pe.length;be<rt;be++)ie[be]=o.COLOR_ATTACHMENT0+be;ie.length=Pe.length,fe=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ie)}function Dt(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const vt={[fs]:o.FUNC_ADD,[H0]:o.FUNC_SUBTRACT,[V0]:o.FUNC_REVERSE_SUBTRACT};vt[G0]=o.MIN,vt[W0]=o.MAX;const Ft={[X0]:o.ZERO,[j0]:o.ONE,[Y0]:o.SRC_COLOR,[Xh]:o.SRC_ALPHA,[J0]:o.SRC_ALPHA_SATURATE,[Z0]:o.DST_COLOR,[K0]:o.DST_ALPHA,[q0]:o.ONE_MINUS_SRC_COLOR,[jh]:o.ONE_MINUS_SRC_ALPHA,[Q0]:o.ONE_MINUS_DST_COLOR,[$0]:o.ONE_MINUS_DST_ALPHA,[ey]:o.CONSTANT_COLOR,[ty]:o.ONE_MINUS_CONSTANT_COLOR,[ny]:o.CONSTANT_ALPHA,[iy]:o.ONE_MINUS_CONSTANT_ALPHA};function k(W,we,ie,fe,Pe,be,rt,kt,Qt,Mt){if(W===Br){T===!0&&(Te(o.BLEND),T=!1);return}if(T===!1&&(ve(o.BLEND),T=!0),W!==z0){if(W!==S||Mt!==b){if((y!==fs||C!==fs)&&(o.blendEquation(o.FUNC_ADD),y=fs,C=fs),Mt)switch(W){case co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Um:o.blendFunc(o.ONE,o.ONE);break;case Fm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Om:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Um:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Fm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Om:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,L=null,G=null,O=null,U.set(0,0,0),Y=0,S=W,b=Mt}return}Pe=Pe||we,be=be||ie,rt=rt||fe,(we!==y||Pe!==C)&&(o.blendEquationSeparate(vt[we],vt[Pe]),y=we,C=Pe),(ie!==I||fe!==L||be!==G||rt!==O)&&(o.blendFuncSeparate(Ft[ie],Ft[fe],Ft[be],Ft[rt]),I=ie,L=fe,G=be,O=rt),(kt.equals(U)===!1||Qt!==Y)&&(o.blendColor(kt.r,kt.g,kt.b,Qt),U.copy(kt),Y=Qt),S=W,b=!1}function Mn(W,we){W.side===Ri?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=W.side===Gn;we&&(ie=!ie),mt(ie),W.blending===co&&W.transparent===!1?k(Br):k(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const fe=W.stencilWrite;u.setTest(fe),fe&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),bt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){R!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),R=W)}function ft(W){W!==O0?(ve(o.CULL_FACE),W!==z&&(W===Nm?o.cullFace(o.BACK):W===k0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=W}function je(W){W!==oe&&(se&&o.lineWidth(W),oe=W)}function bt(W,we,ie){W?(ve(o.POLYGON_OFFSET_FILL),(ee!==we||he!==ie)&&(o.polygonOffset(we,ie),ee=we,he=ie)):Te(o.POLYGON_OFFSET_FILL)}function We(W){W?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function P(W){W===void 0&&(W=o.TEXTURE0+de-1),ae!==W&&(o.activeTexture(W),ae=W)}function A(W,we,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+de-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==W||fe.texture!==we)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(W,we||Me[W]),fe.type=W,fe.texture=we)}function $(){const W=re[ae];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(W){Ie.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Ie.copy(W))}function Be(W){Z.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function dt(W,we){let ie=d.get(we);ie===void 0&&(ie=new WeakMap,d.set(we,ie));let fe=ie.get(W);fe===void 0&&(fe=o.getUniformBlockIndex(we,W.name),ie.set(W,fe))}function it(W,we){const fe=d.get(we).get(W);f.get(we)!==fe&&(o.uniformBlockBinding(we,fe,W.__bindingPointIndex),f.set(we,fe))}function Ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ae=null,re={},g={},_=new WeakMap,x=[],M=null,T=!1,S=null,y=null,I=null,L=null,C=null,G=null,O=null,U=new ot(0,0,0),Y=0,b=!1,R=null,z=null,oe=null,ee=null,he=null,Ie.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ve,disable:Te,bindFramebuffer:Ne,drawBuffers:Ze,useProgram:Dt,setBlending:k,setMaterial:Mn,setFlipSided:mt,setCullFace:ft,setLineWidth:je,setPolygonOffset:bt,setScissorTest:We,activeTexture:P,bindTexture:A,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:qe,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Se,texSubImage2D:ue,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:Qe,viewport:Be,reset:Ct}}function IA(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new nt,m=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return x?new OffscreenCanvas(P,A):Ta("canvas")}function T(P,A,$){let pe=1;const ge=We(P);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);g===void 0&&(g=M(ue,Ve));const Ae=A?M(ue,Ve):g;return Ae.width=ue,Ae.height=Ve,Ae.getContext("2d").drawImage(P,0,0,ue,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+Ve+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){o.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(P,A,$,pe,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=A;if(A===o.RED&&($===o.FLOAT&&(ue=o.R32F),$===o.HALF_FLOAT&&(ue=o.R16F),$===o.UNSIGNED_BYTE&&(ue=o.R8)),A===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.R8UI),$===o.UNSIGNED_SHORT&&(ue=o.R16UI),$===o.UNSIGNED_INT&&(ue=o.R32UI),$===o.BYTE&&(ue=o.R8I),$===o.SHORT&&(ue=o.R16I),$===o.INT&&(ue=o.R32I)),A===o.RG&&($===o.FLOAT&&(ue=o.RG32F),$===o.HALF_FLOAT&&(ue=o.RG16F),$===o.UNSIGNED_BYTE&&(ue=o.RG8)),A===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RG8UI),$===o.UNSIGNED_SHORT&&(ue=o.RG16UI),$===o.UNSIGNED_INT&&(ue=o.RG32UI),$===o.BYTE&&(ue=o.RG8I),$===o.SHORT&&(ue=o.RG16I),$===o.INT&&(ue=o.RG32I)),A===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),$===o.UNSIGNED_INT&&(ue=o.RGB32UI),$===o.BYTE&&(ue=o.RGB8I),$===o.SHORT&&(ue=o.RGB16I),$===o.INT&&(ue=o.RGB32I)),A===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),$===o.UNSIGNED_INT&&(ue=o.RGBA32UI),$===o.BYTE&&(ue=o.RGBA8I),$===o.SHORT&&(ue=o.RGBA16I),$===o.INT&&(ue=o.RGBA32I)),A===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),A===o.RGBA){const Ve=ge?yc:St.getTransfer(pe);$===o.FLOAT&&(ue=o.RGBA32F),$===o.HALF_FLOAT&&(ue=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ue=Ve===Nt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(P,A){let $;return P?A===null||A===gs||A===vo?$=o.DEPTH24_STENCIL8:A===yi?$=o.DEPTH32F_STENCIL8:A===Sa&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===gs||A===vo?$=o.DEPTH_COMPONENT24:A===yi?$=o.DEPTH_COMPONENT32F:A===Sa&&($=o.DEPTH_COMPONENT16),$}function G(P,A){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==$n?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function O(P){const A=P.target;A.removeEventListener("dispose",O),Y(A),A.isVideoTexture&&m.delete(A)}function U(P){const A=P.target;A.removeEventListener("dispose",U),R(A)}function Y(P){const A=i.get(P);if(A.__webglInit===void 0)return;const $=P.source,pe=_.get($);if(pe){const ge=pe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(P),Object.keys(pe).length===0&&_.delete($)}i.remove(P)}function b(P){const A=i.get(P);o.deleteTexture(A.__webglTexture);const $=P.source,pe=_.get($);delete pe[A.__cacheKey],c.memory.textures--}function R(P){const A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ge=0;ge<A.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(A.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)o.deleteFramebuffer(A.__webglFramebuffer[pe]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=P.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ue=i.get($[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove($[pe])}i.remove(P)}let z=0;function oe(){z=0}function ee(){const P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function he(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function de(P,A){const $=i.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,P,A);return}}t.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+A)}function se(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Z($,P,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+A)}function le(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Z($,P,A);return}t.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+A)}function B(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){ce($,P,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+A)}const ae={[_o]:o.REPEAT,[Or]:o.CLAMP_TO_EDGE,[vc]:o.MIRRORED_REPEAT},re={[Ln]:o.NEAREST,[u_]:o.NEAREST_MIPMAP_NEAREST,[ga]:o.NEAREST_MIPMAP_LINEAR,[$n]:o.LINEAR,[hc]:o.LINEAR_MIPMAP_NEAREST,[Ji]:o.LINEAR_MIPMAP_LINEAR},N={[yy]:o.NEVER,[Ay]:o.ALWAYS,[xy]:o.LESS,[M_]:o.LEQUAL,[Sy]:o.EQUAL,[Ty]:o.GEQUAL,[My]:o.GREATER,[Ey]:o.NOTEQUAL};function ne(P,A){if(A.type===yi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===$n||A.magFilter===hc||A.magFilter===ga||A.magFilter===Ji||A.minFilter===$n||A.minFilter===hc||A.minFilter===ga||A.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ae[A.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ae[A.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ae[A.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,re[A.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ln||A.minFilter!==ga&&A.minFilter!==Ji||A.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ie(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",O));const pe=A.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ue=he(A);if(ue!==P.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[ue].usedTimes++;const Ve=ge[P.__cacheKey];Ve!==void 0&&(ge[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&b(A)),P.__cacheKey=ue,P.__webglTexture=ge[ue].texture}return $}function Z(P,A,$){let pe=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ie(P,A),ue=A.source;t.bindTexture(pe,P.__webglTexture,o.TEXTURE0+$);const Ve=i.get(ue);if(ue.version!==Ve.__version||ge===!0){t.activeTexture(o.TEXTURE0+$);const Ae=St.getPrimaries(St.workingColorSpace),Ue=A.colorSpace===Fr?null:St.getPrimaries(A.colorSpace),ut=A.colorSpace===Fr||Ae===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Se=T(A.image,!1,s.maxTextureSize);Se=bt(A,Se);const ke=a.convert(A.format,A.colorSpace),qe=a.convert(A.type);let Qe=L(A.internalFormat,ke,qe,A.colorSpace,A.isVideoTexture);ne(pe,A);let Be;const dt=A.mipmaps,it=A.isVideoTexture!==!0,Ct=Ve.__version===void 0||ge===!0,W=ue.dataReady,we=G(A,Se);if(A.isDepthTexture)Qe=C(A.format===yo,A.type),Ct&&(it?t.texStorage2D(o.TEXTURE_2D,1,Qe,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,qe,null));else if(A.isDataTexture)if(dt.length>0){it&&Ct&&t.texStorage2D(o.TEXTURE_2D,we,Qe,dt[0].width,dt[0].height);for(let ie=0,fe=dt.length;ie<fe;ie++)Be=dt[ie],it?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,ke,qe,Be.data);A.generateMipmaps=!1}else it?(Ct&&t.texStorage2D(o.TEXTURE_2D,we,Qe,Se.width,Se.height),W&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,qe,Se.data)):t.texImage2D(o.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,qe,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&Ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Qe,dt[0].width,dt[0].height,Se.depth);for(let ie=0,fe=dt.length;ie<fe;ie++)if(Be=dt[ie],A.format!==oi)if(ke!==null)if(it){if(W)if(A.layerUpdates.size>0){const Pe=Rg(Be.width,Be.height,A.format,A.type);for(const be of A.layerUpdates){const rt=Be.data.subarray(be*Pe/Be.data.BYTES_PER_ELEMENT,(be+1)*Pe/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,be,Be.width,Be.height,1,ke,rt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Se.depth,ke,Be.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Qe,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Se.depth,ke,qe,Be.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ie,Qe,Be.width,Be.height,Se.depth,0,ke,qe,Be.data)}else{it&&Ct&&t.texStorage2D(o.TEXTURE_2D,we,Qe,dt[0].width,dt[0].height);for(let ie=0,fe=dt.length;ie<fe;ie++)Be=dt[ie],A.format!==oi?ke!==null?it?W&&t.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,ke,qe,Be.data)}else if(A.isDataArrayTexture)if(it){if(Ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Qe,Se.width,Se.height,Se.depth),W)if(A.layerUpdates.size>0){const ie=Rg(Se.width,Se.height,A.format,A.type);for(const fe of A.layerUpdates){const Pe=Se.data.subarray(fe*ie/Se.data.BYTES_PER_ELEMENT,(fe+1)*ie/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Se.width,Se.height,1,ke,qe,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,qe,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Qe,Se.width,Se.height,Se.depth,0,ke,qe,Se.data);else if(A.isData3DTexture)it?(Ct&&t.texStorage3D(o.TEXTURE_3D,we,Qe,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,qe,Se.data)):t.texImage3D(o.TEXTURE_3D,0,Qe,Se.width,Se.height,Se.depth,0,ke,qe,Se.data);else if(A.isFramebufferTexture){if(Ct)if(it)t.texStorage2D(o.TEXTURE_2D,we,Qe,Se.width,Se.height);else{let ie=Se.width,fe=Se.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,Qe,ie,fe,0,ke,qe,null),ie>>=1,fe>>=1}}else if(dt.length>0){if(it&&Ct){const ie=We(dt[0]);t.texStorage2D(o.TEXTURE_2D,we,Qe,ie.width,ie.height)}for(let ie=0,fe=dt.length;ie<fe;ie++)Be=dt[ie],it?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke,qe,Be):t.texImage2D(o.TEXTURE_2D,ie,Qe,ke,qe,Be);A.generateMipmaps=!1}else if(it){if(Ct){const ie=We(Se);t.texStorage2D(o.TEXTURE_2D,we,Qe,ie.width,ie.height)}W&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ke,qe,Se)}else t.texImage2D(o.TEXTURE_2D,0,Qe,ke,qe,Se);S(A)&&y(pe),Ve.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ce(P,A,$){if(A.image.length!==6)return;const pe=Ie(P,A),ge=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+$);const ue=i.get(ge);if(ge.version!==ue.__version||pe===!0){t.activeTexture(o.TEXTURE0+$);const Ve=St.getPrimaries(St.workingColorSpace),Ae=A.colorSpace===Fr?null:St.getPrimaries(A.colorSpace),Ue=A.colorSpace===Fr||Ve===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Se=A.image[0]&&A.image[0].isDataTexture,ke=[];for(let fe=0;fe<6;fe++)!ut&&!Se?ke[fe]=T(A.image[fe],!0,s.maxCubemapSize):ke[fe]=Se?A.image[fe].image:A.image[fe],ke[fe]=bt(A,ke[fe]);const qe=ke[0],Qe=a.convert(A.format,A.colorSpace),Be=a.convert(A.type),dt=L(A.internalFormat,Qe,Be,A.colorSpace),it=A.isVideoTexture!==!0,Ct=ue.__version===void 0||pe===!0,W=ge.dataReady;let we=G(A,qe);ne(o.TEXTURE_CUBE_MAP,A);let ie;if(ut){it&&Ct&&t.texStorage2D(o.TEXTURE_CUBE_MAP,we,dt,qe.width,qe.height);for(let fe=0;fe<6;fe++){ie=ke[fe].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const be=ie[Pe];A.format!==oi?Qe!==null?it?W&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,0,0,be.width,be.height,Qe,be.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,dt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,0,0,be.width,be.height,Qe,Be,be.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe,dt,be.width,be.height,0,Qe,Be,be.data)}}}else{if(ie=A.mipmaps,it&&Ct){ie.length>0&&we++;const fe=We(ke[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,we,dt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Se){it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke[fe].width,ke[fe].height,Qe,Be,ke[fe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,ke[fe].width,ke[fe].height,0,Qe,Be,ke[fe].data);for(let Pe=0;Pe<ie.length;Pe++){const rt=ie[Pe].image[fe].image;it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,0,0,rt.width,rt.height,Qe,Be,rt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,dt,rt.width,rt.height,0,Qe,Be,rt.data)}}else{it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Qe,Be,ke[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,Qe,Be,ke[fe]);for(let Pe=0;Pe<ie.length;Pe++){const be=ie[Pe];it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,0,0,Qe,Be,be.image[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe+1,dt,Qe,Be,be.image[fe])}}}S(A)&&y(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Me(P,A,$,pe,ge,ue){const Ve=a.convert($.format,$.colorSpace),Ae=a.convert($.type),Ue=L($.internalFormat,Ve,Ae,$.colorSpace),ut=i.get(A),Se=i.get($);if(Se.__renderTarget=A,!ut.__hasExternalTextures){const ke=Math.max(1,A.width>>ue),qe=Math.max(1,A.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,Ue,ke,qe,A.depth,0,Ve,Ae,null):t.texImage2D(ge,ue,Ue,ke,qe,0,Ve,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),ft(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,mt(A)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Se.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(P,A,$){if(o.bindRenderbuffer(o.RENDERBUFFER,P),A.depthBuffer){const pe=A.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=C(A.stencilBuffer,ge),Ve=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=mt(A);ft(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,ue,A.width,A.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ue,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,P)}else{const pe=A.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],Ve=a.convert(ue.format,ue.colorSpace),Ae=a.convert(ue.type),Ue=L(ue.internalFormat,Ve,Ae,ue.colorSpace),ut=mt(A);$&&ft(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Ue,A.width,A.height):ft(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de(A.depthTexture,0);const ge=pe.__webglTexture,ue=mt(A);if(A.depthTexture.format===uo)ft(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(A.depthTexture.format===yo)ft(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const A=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=pe}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(A.__webglFramebuffer,P)}else if($){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(A.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ve(A.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(P,A,$){const pe=i.get(P);A!==void 0&&Me(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Ne(P)}function Dt(P){const A=P.texture,$=i.get(P),pe=i.get(A);P.addEventListener("dispose",U);const ge=P.textures,ue=P.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=A.version,c.memory.textures++),ue){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)$.__webglFramebuffer[Ae][Ue]=o.createFramebuffer()}else $.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=i.get(ge[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),c.memory.textures++)}if(P.samples>0&&ft(P)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ue=ge[Ae];$.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const ut=a.convert(Ue.format,Ue.colorSpace),Se=a.convert(Ue.type),ke=L(Ue.internalFormat,ut,Se,Ue.colorSpace,P.isXRRenderTarget===!0),qe=mt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,ke,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),ve($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Me($.__webglFramebuffer[Ae][Ue],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Me($.__webglFramebuffer[Ae],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(A)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=ge[Ae],Se=i.get(ut);t.bindTexture(o.TEXTURE_2D,Se.__webglTexture),ne(o.TEXTURE_2D,ut),Me($.__webglFramebuffer,P,ut,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),S(ut)&&y(o.TEXTURE_2D)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ne(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Me($.__webglFramebuffer[Ue],P,A,o.COLOR_ATTACHMENT0,Ae,Ue);else Me($.__webglFramebuffer,P,A,o.COLOR_ATTACHMENT0,Ae,0);S(A)&&y(Ae),t.unbindTexture()}P.depthBuffer&&Ne(P)}function vt(P){const A=P.textures;for(let $=0,pe=A.length;$<pe;$++){const ge=A[$];if(S(ge)){const ue=I(P),Ve=i.get(ge).__webglTexture;t.bindTexture(ue,Ve),y(ue),t.unbindTexture()}}}const Ft=[],k=[];function Mn(P){if(P.samples>0){if(ft(P)===!1){const A=P.textures,$=P.width,pe=P.height;let ge=o.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=i.get(P),Ae=A.length>1;if(Ae)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ut=i.get(A[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ut,0)}o.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,o.NEAREST),f===!0&&(Ft.length=0,k.length=0,Ft.push(o.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ft.push(ue),k.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ut=i.get(A[Ue]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,ut,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const A=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function mt(P){return Math.min(s.maxSamples,P.samples)}function ft(P){const A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(P){const A=c.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function bt(P,A){const $=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==In&&$!==Fr&&(St.getTransfer($)===Nt?(pe!==oi||ge!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=de,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ft}function NA(o,e){function t(i,s=Fr){let a;const c=St.getTransfer(s);if(i===rr)return o.UNSIGNED_BYTE;if(i===Bf)return o.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return o.UNSIGNED_SHORT_5_5_5_1;if(i===d_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===h_)return o.BYTE;if(i===f_)return o.SHORT;if(i===Sa)return o.UNSIGNED_SHORT;if(i===kf)return o.INT;if(i===gs)return o.UNSIGNED_INT;if(i===yi)return o.FLOAT;if(i===Aa)return o.HALF_FLOAT;if(i===p_)return o.ALPHA;if(i===m_)return o.RGB;if(i===oi)return o.RGBA;if(i===g_)return o.LUMINANCE;if(i===__)return o.LUMINANCE_ALPHA;if(i===uo)return o.DEPTH_COMPONENT;if(i===yo)return o.DEPTH_STENCIL;if(i===Hf)return o.RED;if(i===Vf)return o.RED_INTEGER;if(i===v_)return o.RG;if(i===Gf)return o.RG_INTEGER;if(i===Wf)return o.RGBA_INTEGER;if(i===fc||i===dc||i===pc||i===mc)if(c===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nf||i===rf||i===sf||i===of)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===nf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===of)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===af||i===lf||i===cf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===af||i===lf)return c===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===cf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===_f||i===vf||i===yf||i===xf||i===Sf||i===Mf||i===Ef)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===uf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ff)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===df)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_f)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mf)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ef)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gc||i===Tf||i===Af)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===gc)return c===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Af)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===y_||i===wf||i===Rf||i===Cf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===gc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===wf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const UA={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),y=this._getHandJoint(d,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,M=.005;d.inputState.pinching&&_>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(UA)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new cn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hr({vertexShader:FA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new Tc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends vs{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",f=1,d=null,m=null,g=null,_=null,x=null,M=null;const T=new kA,S=t.getContextAttributes();let y=null,I=null;const L=[],C=[],G=new nt;let O=null;const U=new Pn;U.viewport=new Rt;const Y=new Pn;Y.viewport=new Rt;const b=[U,Y],R=new $x;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=L[Z];return ce===void 0&&(ce=new zh,L[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=L[Z];return ce===void 0&&(ce=new zh,L[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=L[Z];return ce===void 0&&(ce=new zh,L[Z]=ce),ce.getHandSpace()};function ee(Z){const ce=C.indexOf(Z.inputSource);if(ce===-1)return;const Me=L[ce];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,d||c),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function he(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",de);for(let Z=0;Z<L.length;Z++){const ce=C[Z];ce!==null&&(C[Z]=null,L[Z].disconnect(ce))}z=null,oe=null,T.reset(),e.setRenderTarget(y),x=null,_=null,g=null,s=null,I=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",he),s.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),s.renderState.layers===void 0){const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new _s(x.framebufferWidth,x.framebufferHeight,{format:oi,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ce=null,Me=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?yo:uo,Me=S.stencil?vo:gs);const Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Te),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new _s(_.textureWidth,_.textureHeight,{format:oi,type:rr,depthTexture:new k_(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(u),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de(Z){for(let ce=0;ce<Z.removed.length;ce++){const Me=Z.removed[ce],ve=C.indexOf(Me);ve>=0&&(C[ve]=null,L[ve].disconnect(Me))}for(let ce=0;ce<Z.added.length;ce++){const Me=Z.added[ce];let ve=C.indexOf(Me);if(ve===-1){for(let Ne=0;Ne<L.length;Ne++)if(Ne>=C.length){C.push(Me),ve=Ne;break}else if(C[Ne]===null){C[Ne]=Me,ve=Ne;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Me)}}const se=new X,le=new X;function B(Z,ce,Me){se.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=se.distanceTo(le),Te=ce.projectionMatrix.elements,Ne=Me.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Dt=Te[14]/(Te[10]+1),vt=(Te[9]+1)/Te[5],Ft=(Te[9]-1)/Te[5],k=(Te[8]-1)/Te[0],Mn=(Ne[8]+1)/Ne[0],mt=Ze*k,ft=Ze*Mn,je=ve/(-k+Mn),bt=je*-k;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(bt),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const We=Ze+je,P=Dt+je,A=mt-bt,$=ft+(ve-bt),pe=vt*Dt/P*We,ge=Ft*Dt/P*We;Z.projectionMatrix.makePerspective(A,$,pe,ge,We,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ce=Z.near,Me=Z.far;T.texture!==null&&(T.depthNear>0&&(ce=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),R.near=Y.near=U.near=ce,R.far=Y.far=U.far=Me,(z!==R.near||oe!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,oe=R.far),U.layers.mask=Z.layers.mask|2,Y.layers.mask=Z.layers.mask|4,R.layers.mask=U.layers.mask|Y.layers.mask;const ve=Z.parent,Te=R.cameras;ae(R,ve);for(let Ne=0;Ne<Te.length;Ne++)ae(Te[Ne],ve);Te.length===2?B(R,U,Y):R.projectionMatrix.copy(U.projectionMatrix),re(Z,R,ve)};function re(Z,ce,Me){Me===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&x===null))return f},this.setFoveation=function(Z){f=Z,_!==null&&(_.fixedFoveation=Z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let N=null;function ne(Z,ce){if(m=ce.getViewerPose(d||c),M=ce,m!==null){const Me=m.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let ve=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ne=0;Ne<Me.length;Ne++){const Ze=Me[Ne];let Dt=null;if(x!==null)Dt=x.getViewport(Ze);else{const Ft=g.getViewSubImage(_,Ze);Dt=Ft.viewport,Ne===0&&(e.setRenderTargetTextures(I,Ft.colorTexture,_.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(I))}let vt=b[Ne];vt===void 0&&(vt=new Pn,vt.layers.enable(Ne),vt.viewport=new Rt,b[Ne]=vt),vt.matrix.fromArray(Ze.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Ze.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ne===0&&(R.matrix.copy(vt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(vt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ne=g.getDepthInformation(Me[0]);Ne&&Ne.isValid&&Ne.texture&&T.init(e,Ne,s.renderState)}}for(let Me=0;Me<L.length;Me++){const ve=C[Me],Te=L[Me];ve!==null&&Te!==void 0&&Te.update(ve,ce,d||c)}N&&N(Z,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),M=null}const Ie=new V_;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const cs=new Pi,zA=new lt;function HA(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,L_(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,I,L,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),T(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?f(S,y,I,L):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Gn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Gn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const I=e.get(y),L=I.envMap,C=I.envMapRotation;L&&(S.envMap.value=L,cs.copy(C),cs.x*=-1,cs.y*=-1,cs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),S.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(cs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,I,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*I,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,I){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Gn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const I=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VA(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(I,L){const C=L.program;i.uniformBlockBinding(I,C)}function d(I,L){let C=s[I.id];C===void 0&&(M(I),C=m(I),s[I.id]=C,I.addEventListener("dispose",S));const G=L.program;i.updateUBOMapping(I,G);const O=e.render.frame;a[I.id]!==O&&(_(I),a[I.id]=O)}function m(I){const L=g();I.__bindingPointIndex=L;const C=o.createBuffer(),G=I.__size,O=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,G,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function g(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const L=s[I.id],C=I.uniforms,G=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,U=C.length;O<U;O++){const Y=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,R=Y.length;b<R;b++){const z=Y[b];if(x(z,O,b,G)===!0){const oe=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let he=0;for(let de=0;de<ee.length;de++){const se=ee[de],le=T(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+he,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,he),he+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(I,L,C,G){const O=I.value,U=L+"_"+C;if(G[U]===void 0)return typeof O=="number"||typeof O=="boolean"?G[U]=O:G[U]=O.clone(),!0;{const Y=G[U];if(typeof O=="number"||typeof O=="boolean"){if(Y!==O)return G[U]=O,!0}else if(Y.equals(O)===!1)return Y.copy(O),!0}return!1}function M(I){const L=I.uniforms;let C=0;const G=16;for(let U=0,Y=L.length;U<Y;U++){const b=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,z=b.length;R<z;R++){const oe=b[R],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let he=0,de=ee.length;he<de;he++){const se=ee[he],le=T(se),B=C%G,ae=B%le.boundary,re=B+ae;C+=ae,re!==0&&G-re<le.storage&&(C+=G-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const O=C%G;return O>0&&(C+=G-O),I.__size=C,I.__cache={},this}function T(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function y(){for(const I in s)o.deleteBuffer(s[I]);c=[],s={},a={}}return{bind:f,update:d,dispose:y}}class GA{constructor(e={}){const{canvas:t=Vy(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=zr,this.toneMappingExposure=1;const C=this;let G=!1,O=0,U=0,Y=null,b=-1,R=null;const z=new Rt,oe=new Rt;let ee=null;const he=new ot(0);let de=0,se=t.width,le=t.height,B=1,ae=null,re=null;const N=new Rt(0,0,se,le),ne=new Rt(0,0,se,le);let Ie=!1;const Z=new qf;let ce=!1,Me=!1;const ve=new lt,Te=new lt,Ne=new X,Ze=new Rt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Ft(){return Y===null?B:1}let k=i;function Mn(w,j){return t.getContext(w,j)}try{const w={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Of}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),k===null){const j="webgl2";if(k=Mn(j,w),k===null)throw Mn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,ft,je,bt,We,P,A,$,pe,ge,ue,Ve,Ae,Ue,ut,Se,ke,qe,Qe,Be,dt,it,Ct,W;function we(){mt=new QE(k),mt.init(),it=new NA(k,mt),ft=new jE(k,mt,e,it),je=new DA(k,mt),ft.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),bt=new tT(k),We=new yA,P=new IA(k,mt,je,We,ft,it,bt),A=new qE(C),$=new ZE(C),pe=new lS(k),Ct=new WE(k,pe),ge=new JE(k,pe,bt,Ct),ue=new iT(k,ge,pe,bt),Qe=new nT(k,ft,P),Se=new YE(We),Ve=new vA(C,A,$,mt,ft,Ct,Se),Ae=new HA(C,We),Ue=new SA,ut=new RA(mt),qe=new GE(C,A,$,je,ue,x,f),ke=new PA(C,ue,ft),W=new VA(k,bt,ft,je),Be=new XE(k,mt,bt),dt=new eT(k,mt,bt),bt.programs=Ve.programs,C.capabilities=ft,C.extensions=mt,C.properties=We,C.renderLists=Ue,C.shadowMap=ke,C.state=je,C.info=bt}we();const ie=new BA(C,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(se,le,!1))},this.getSize=function(w){return w.set(se,le)},this.setSize=function(w,j,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,le=j,t.width=Math.floor(w*B),t.height=Math.floor(j*B),J===!0&&(t.style.width=w+"px",t.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(se*B,le*B).floor()},this.setDrawingBufferSize=function(w,j,J){se=w,le=j,B=J,t.width=Math.floor(w*J),t.height=Math.floor(j*J),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,j,J,te){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,j,J,te),je.viewport(z.copy(N).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,j,J,te){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,j,J,te),je.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){je.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,j=!0,J=!0){let te=0;if(w){let H=!1;if(Y!==null){const xe=Y.texture.format;H=xe===Wf||xe===Gf||xe===Vf}if(H){const xe=Y.texture.type,Re=xe===rr||xe===gs||xe===Sa||xe===vo||xe===Bf||xe===zf,De=qe.getClearColor(),Fe=qe.getClearAlpha(),Je=De.r,et=De.g,Xe=De.b;Re?(M[0]=Je,M[1]=et,M[2]=Xe,M[3]=Fe,k.clearBufferuiv(k.COLOR,0,M)):(T[0]=Je,T[1]=et,T[2]=Xe,T[3]=Fe,k.clearBufferiv(k.COLOR,0,T))}else te|=k.COLOR_BUFFER_BIT}j&&(te|=k.DEPTH_BUFFER_BIT),J&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),qe.dispose(),Ue.dispose(),ut.dispose(),We.dispose(),A.dispose(),$.dispose(),ue.dispose(),Ct.dispose(),W.dispose(),Ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ys),ie.removeEventListener("sessionend",or),Ui.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const w=bt.autoReset,j=ke.enabled,J=ke.autoUpdate,te=ke.needsUpdate,H=ke.type;we(),bt.autoReset=w,ke.enabled=j,ke.autoUpdate=J,ke.needsUpdate=te,ke.type=H}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const j=w.target;j.removeEventListener("dispose",rt),kt(j)}function kt(w){Qt(w),We.remove(w)}function Qt(w){const j=We.get(w).programs;j!==void 0&&(j.forEach(function(J){Ve.releaseProgram(J)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,J,te,H,xe){j===null&&(j=Dt);const Re=H.isMesh&&H.matrixWorld.determinant()<0,De=Da(w,j,J,te,H);je.setMaterial(te,Re);let Fe=J.index,Je=1;if(te.wireframe===!0){if(Fe=ge.getWireframeAttribute(J),Fe===void 0)return;Je=2}const et=J.drawRange,Xe=J.attributes.position;let st=et.start*Je,Tt=(et.start+et.count)*Je;xe!==null&&(st=Math.max(st,xe.start*Je),Tt=Math.min(Tt,(xe.start+xe.count)*Je)),Fe!==null?(st=Math.max(st,0),Tt=Math.min(Tt,Fe.count)):Xe!=null&&(st=Math.max(st,0),Tt=Math.min(Tt,Xe.count));const At=Tt-st;if(At<0||At===1/0)return;Ct.setup(H,te,De,J,Fe);let Ht,xt=Be;if(Fe!==null&&(Ht=pe.get(Fe),xt=dt,xt.setIndex(Ht)),H.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*Ft()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(H.isLine){let Ye=te.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Ft()),H.isLineSegments?xt.setMode(k.LINES):H.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else H.isPoints?xt.setMode(k.POINTS):H.isSprite&&xt.setMode(k.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)xt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ye=H._multiDrawStarts,jt=H._multiDrawCounts,yt=H._multiDrawCount,un=Fe?pe.get(Fe).bytesPerElement:1,ai=We.get(te).currentProgram.getUniforms();for(let Tn=0;Tn<yt;Tn++)ai.setValue(k,"_gl_DrawID",Tn),xt.render(Ye[Tn]/un,jt[Tn])}else if(H.isInstancedMesh)xt.renderInstances(st,At,H.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,jt=Math.min(J.instanceCount,Ye);xt.renderInstances(st,At,jt)}else xt.render(st,At)};function Mt(w,j,J){w.transparent===!0&&w.side===Ri&&w.forceSinglePass===!1?(w.side=Gn,w.needsUpdate=!0,xs(w,j,J),w.side=ir,w.needsUpdate=!0,xs(w,j,J),w.side=Ri):xs(w,j,J)}this.compile=function(w,j,J=null){J===null&&(J=w),y=ut.get(J),y.init(j),L.push(y),J.traverseVisible(function(H){H.isLight&&H.layers.test(j.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),w!==J&&w.traverseVisible(function(H){H.isLight&&H.layers.test(j.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),y.setupLights();const te=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const De=xe[Re];Mt(De,J,H),te.add(De)}else Mt(xe,J,H),te.add(xe)}),L.pop(),y=null,te},this.compileAsync=function(w,j,J=null){const te=this.compile(w,j,J);return new Promise(H=>{function xe(){if(te.forEach(function(Re){We.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){H(w);return}setTimeout(xe,10)}mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Nn=null;function En(w){Nn&&Nn(w)}function ys(){Ui.stop()}function or(){Ui.start()}const Ui=new V_;Ui.setAnimationLoop(En),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(w){Nn=w,ie.setAnimationLoop(w),w===null?Ui.stop():Ui.start()},ie.addEventListener("sessionstart",ys),ie.addEventListener("sessionend",or),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(j),j=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,j,Y),y=ut.get(w,L.length),y.init(j),L.push(y),Te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,ce=Se.init(this.clippingPlanes,Me),S=Ue.get(w,I.length),S.init(),I.push(S),ie.enabled===!0&&ie.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&Fi(xe,j,-1/0,C.sortObjects)}Fi(w,j,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),vt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,vt&&qe.addToRenderList(S,w),this.info.render.frame++,ce===!0&&Se.beginShadows();const J=y.state.shadowsArray;ke.render(J,w,j),ce===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,H=S.transmissive;if(y.setupLights(),j.isArrayCamera){const xe=j.cameras;if(H.length>0)for(let Re=0,De=xe.length;Re<De;Re++){const Fe=xe[Re];Gr(te,H,w,Fe)}vt&&qe.render(w);for(let Re=0,De=xe.length;Re<De;Re++){const Fe=xe[Re];Vr(S,w,Fe,Fe.viewport)}}else H.length>0&&Gr(te,H,w,j),vt&&qe.render(w),Vr(S,w,j);Y!==null&&(P.updateMultisampleRenderTarget(Y),P.updateRenderTargetMipmap(Y)),w.isScene===!0&&w.onAfterRender(C,w,j),Ct.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(y=L[L.length-1],ce===!0&&Se.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Fi(w,j,J,te){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){te&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Re=ue.update(w),De=w.material;De.visible&&S.push(w,Re,De,J,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const Re=ue.update(w),De=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Fe=Re.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const Xe=Fe[Je],st=De[Xe.materialIndex];st&&st.visible&&S.push(w,Re,st,J,Ze.z,Xe)}}else De.visible&&S.push(w,Re,De,J,Ze.z,null)}}const xe=w.children;for(let Re=0,De=xe.length;Re<De;Re++)Fi(xe[Re],j,J,te)}function Vr(w,j,J,te){const H=w.opaque,xe=w.transmissive,Re=w.transparent;y.setupLightsView(J),ce===!0&&Se.setGlobalState(C.clippingPlanes,J),te&&je.viewport(z.copy(te)),H.length>0&&ar(H,j,J),xe.length>0&&ar(xe,j,J),Re.length>0&&ar(Re,j,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Gr(w,j,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[te.id]===void 0&&(y.state.transmissionRenderTarget[te.id]=new _s(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Aa:rr,minFilter:Ji,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const xe=y.state.transmissionRenderTarget[te.id],Re=te.viewport||z;xe.setSize(Re.z,Re.w);const De=C.getRenderTarget();C.setRenderTarget(xe),C.getClearColor(he),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),vt&&qe.render(J);const Fe=C.toneMapping;C.toneMapping=zr;const Je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),y.setupLightsView(te),ce===!0&&Se.setGlobalState(C.clippingPlanes,te),ar(w,J,te),P.updateMultisampleRenderTarget(xe),P.updateRenderTargetMipmap(xe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,st=j.length;Xe<st;Xe++){const Tt=j[Xe],At=Tt.object,Ht=Tt.geometry,xt=Tt.material,Ye=Tt.group;if(xt.side===Ri&&At.layers.test(te.layers)){const jt=xt.side;xt.side=Gn,xt.needsUpdate=!0,Pa(At,J,te,Ht,xt,Ye),xt.side=jt,xt.needsUpdate=!0,et=!0}}et===!0&&(P.updateMultisampleRenderTarget(xe),P.updateRenderTargetMipmap(xe))}C.setRenderTarget(De),C.setClearColor(he,de),Je!==void 0&&(te.viewport=Je),C.toneMapping=Fe}function ar(w,j,J){const te=j.isScene===!0?j.overrideMaterial:null;for(let H=0,xe=w.length;H<xe;H++){const Re=w[H],De=Re.object,Fe=Re.geometry,Je=te===null?Re.material:te,et=Re.group;De.layers.test(J.layers)&&Pa(De,j,J,Fe,Je,et)}}function Pa(w,j,J,te,H,xe){w.onBeforeRender(C,j,J,te,H,xe),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(C,j,J,te,w,xe),H.transparent===!0&&H.side===Ri&&H.forceSinglePass===!1?(H.side=Gn,H.needsUpdate=!0,C.renderBufferDirect(J,j,te,H,w,xe),H.side=ir,H.needsUpdate=!0,C.renderBufferDirect(J,j,te,H,w,xe),H.side=Ri):C.renderBufferDirect(J,j,te,H,w,xe),w.onAfterRender(C,j,J,te,H,xe)}function xs(w,j,J){j.isScene!==!0&&(j=Dt);const te=We.get(w),H=y.state.lights,xe=y.state.shadowsArray,Re=H.state.version,De=Ve.getParameters(w,H.state,xe,j,J),Fe=Ve.getProgramCacheKey(De);let Je=te.programs;te.environment=w.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(w.isMeshStandardMaterial?$:A).get(w.envMap||te.environment),te.envMapRotation=te.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",rt),Je=new Map,te.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(te.currentProgram===et&&te.lightsStateVersion===Re)return Si(w,De),et}else De.uniforms=Ve.getUniforms(w),w.onBeforeCompile(De,C),et=Ve.acquireProgram(De,Fe),Je.set(Fe,et),te.uniforms=De.uniforms;const Xe=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),Si(w,De),te.needsLights=wc(w),te.lightsStateVersion=Re,te.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),te.currentProgram=et,te.uniformsList=null,et}function La(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=_c.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Si(w,j){const J=We.get(w);J.outputColorSpace=j.outputColorSpace,J.batching=j.batching,J.batchingColor=j.batchingColor,J.instancing=j.instancing,J.instancingColor=j.instancingColor,J.instancingMorph=j.instancingMorph,J.skinning=j.skinning,J.morphTargets=j.morphTargets,J.morphNormals=j.morphNormals,J.morphColors=j.morphColors,J.morphTargetsCount=j.morphTargetsCount,J.numClippingPlanes=j.numClippingPlanes,J.numIntersection=j.numClipIntersection,J.vertexAlphas=j.vertexAlphas,J.vertexTangents=j.vertexTangents,J.toneMapping=j.toneMapping}function Da(w,j,J,te,H){j.isScene!==!0&&(j=Dt),P.resetTextureUnits();const xe=j.fog,Re=te.isMeshStandardMaterial?j.environment:null,De=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:In,Fe=(te.isMeshStandardMaterial?$:A).get(te.envMap||Re),Je=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Xe=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,Tt=!!J.morphAttributes.color;let At=zr;te.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(At=C.toneMapping);const Ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Ht!==void 0?Ht.length:0,Ye=We.get(te),jt=y.state.lights;if(ce===!0&&(Me===!0||w!==R)){const qt=w===R&&te.id===b;Se.setState(te,w,qt)}let yt=!1;te.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==jt.state.version||Ye.outputColorSpace!==De||H.isBatchedMesh&&Ye.batching===!1||!H.isBatchedMesh&&Ye.batching===!0||H.isBatchedMesh&&Ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ye.instancing===!1||!H.isInstancedMesh&&Ye.instancing===!0||H.isSkinnedMesh&&Ye.skinning===!1||!H.isSkinnedMesh&&Ye.skinning===!0||H.isInstancedMesh&&Ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ye.instancingMorph===!1&&H.morphTexture!==null||Ye.envMap!==Fe||te.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==et||Ye.morphTargets!==Xe||Ye.morphNormals!==st||Ye.morphColors!==Tt||Ye.toneMapping!==At||Ye.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,Ye.__version=te.version);let un=Ye.currentProgram;yt===!0&&(un=xs(te,j,H));let ai=!1,Tn=!1,Wr=!1;const It=un.getUniforms(),An=Ye.uniforms;if(je.useProgram(un.program)&&(ai=!0,Tn=!0,Wr=!0),te.id!==b&&(b=te.id,Tn=!0),ai||R!==w){je.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),Wy(ve),Xy(ve),It.setValue(k,"projectionMatrix",ve)):It.setValue(k,"projectionMatrix",w.projectionMatrix),It.setValue(k,"viewMatrix",w.matrixWorldInverse);const mn=It.map.cameraPosition;mn!==void 0&&mn.setValue(k,Ne.setFromMatrixPosition(w.matrixWorld)),ft.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&It.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Tn=!0,Wr=!0)}if(H.isSkinnedMesh){It.setOptional(k,H,"bindMatrix"),It.setOptional(k,H,"bindMatrixInverse");const qt=H.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),It.setValue(k,"boneTexture",qt.boneTexture,P))}H.isBatchedMesh&&(It.setOptional(k,H,"batchingTexture"),It.setValue(k,"batchingTexture",H._matricesTexture,P),It.setOptional(k,H,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",H._indirectTexture,P),It.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",H._colorsTexture,P));const pn=J.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Qe.update(H,J,un),(Tn||Ye.receiveShadow!==H.receiveShadow)&&(Ye.receiveShadow=H.receiveShadow,It.setValue(k,"receiveShadow",H.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(An.envMap.value=Fe,An.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(An.envMapIntensity.value=j.environmentIntensity),Tn&&(It.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Ia(An,Wr),xe&&te.fog===!0&&Ae.refreshFogUniforms(An,xe),Ae.refreshMaterialUniforms(An,te,B,le,y.state.transmissionRenderTarget[w.id]),_c.upload(k,La(Ye),An,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(_c.upload(k,La(Ye),An,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&It.setValue(k,"center",H.center),It.setValue(k,"modelViewMatrix",H.modelViewMatrix),It.setValue(k,"normalMatrix",H.normalMatrix),It.setValue(k,"modelMatrix",H.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const qt=te.uniformsGroups;for(let mn=0,Xr=qt.length;mn<Xr;mn++){const gt=qt[mn];W.update(gt,un),W.bind(gt,un)}}return un}function Ia(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function wc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,j,J){We.get(w.texture).__webglTexture=j,We.get(w.depthTexture).__webglTexture=J;const te=We.get(w);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,j){const J=We.get(w);J.__webglFramebuffer=j,J.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,J=0){Y=w,O=j,U=J;let te=!0,H=null,xe=!1,Re=!1;if(w){const Fe=We.get(w);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(k.FRAMEBUFFER,null),te=!1;else if(Fe.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Fe.__hasExternalTextures)P.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&We.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Re=!0);const et=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[j])?H=et[j][J]:H=et[j],xe=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?H=We.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?H=et[J]:H=et,z.copy(w.viewport),oe.copy(w.scissor),ee=w.scissorTest}else z.copy(N).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),ee=Ie;if(je.bindFramebuffer(k.FRAMEBUFFER,H)&&te&&je.drawBuffers(w,H),je.viewport(z),je.scissor(oe),je.setScissorTest(ee),xe){const Fe=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,J)}else if(Re){const Fe=We.get(w.texture),Je=j||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.__webglTexture,J||0,Je)}b=-1},this.readRenderTargetPixels=function(w,j,J,te,H,xe,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){je.bindFramebuffer(k.FRAMEBUFFER,De);try{const Fe=w.texture,Je=Fe.format,et=Fe.type;if(!ft.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-te&&J>=0&&J<=w.height-H&&k.readPixels(j,J,te,H,it.convert(Je),it.convert(et),xe)}finally{const Fe=Y!==null?We.get(Y).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,j,J,te,H,xe,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Fe=w.texture,Je=Fe.format,et=Fe.type;if(!ft.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=w.width-te&&J>=0&&J<=w.height-H){je.bindFramebuffer(k.FRAMEBUFFER,De);const Xe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Xe),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(j,J,te,H,it.convert(Je),it.convert(et),0);const st=Y!==null?We.get(Y).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,st);const Tt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Gy(k,Tt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Xe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.deleteBuffer(Xe),k.deleteSync(Tt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,j=null,J=0){w.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1]);const te=Math.pow(2,-J),H=Math.floor(w.image.width*te),xe=Math.floor(w.image.height*te),Re=j!==null?j.x:0,De=j!==null?j.y:0;P.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Re,De,H,xe),je.unbindTexture()};const Na=k.createFramebuffer(),Ua=k.createFramebuffer();this.copyTextureToTexture=function(w,j,J=null,te=null,H=0,xe=null){w.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,w=arguments[1],j=arguments[2],xe=arguments[3]||0,J=null),xe===null&&(H!==0?(ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=H,H=0):xe=0);let Re,De,Fe,Je,et,Xe,st,Tt,At;const Ht=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(J!==null)Re=J.max.x-J.min.x,De=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,Je=J.min.x,et=J.min.y,Xe=J.isBox3?J.min.z:0;else{const pn=Math.pow(2,-H);Re=Math.floor(Ht.width*pn),De=Math.floor(Ht.height*pn),w.isDataArrayTexture?Fe=Ht.depth:w.isData3DTexture?Fe=Math.floor(Ht.depth*pn):Fe=1,Je=0,et=0,Xe=0}te!==null?(st=te.x,Tt=te.y,At=te.z):(st=0,Tt=0,At=0);const xt=it.convert(j.format),Ye=it.convert(j.type);let jt;j.isData3DTexture?(P.setTexture3D(j,0),jt=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),jt=k.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),jt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=k.getParameter(k.UNPACK_ROW_LENGTH),un=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ai=k.getParameter(k.UNPACK_SKIP_PIXELS),Tn=k.getParameter(k.UNPACK_SKIP_ROWS),Wr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Je),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xe);const It=w.isDataArrayTexture||w.isData3DTexture,An=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const pn=We.get(w),qt=We.get(j),mn=We.get(pn.__renderTarget),Xr=We.get(qt.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,mn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let gt=0;gt<Fe;gt++)It&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(w).__webglTexture,H,Xe+gt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(j).__webglTexture,xe,At+gt)),k.blitFramebuffer(Je,et,Re,De,st,Tt,Re,De,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||We.has(w)){const pn=We.get(w),qt=We.get(j);je.bindFramebuffer(k.READ_FRAMEBUFFER,Na),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ua);for(let mn=0;mn<Fe;mn++)It?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,H,Xe+mn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,H),An?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.__webglTexture,xe,At+mn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qt.__webglTexture,xe),H!==0?k.blitFramebuffer(Je,et,Re,De,st,Tt,Re,De,k.COLOR_BUFFER_BIT,k.NEAREST):An?k.copyTexSubImage3D(jt,xe,st,Tt,At+mn,Je,et,Re,De):k.copyTexSubImage2D(jt,xe,st,Tt,Je,et,Re,De);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else An?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(jt,xe,st,Tt,At,Re,De,Fe,xt,Ye,Ht.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(jt,xe,st,Tt,At,Re,De,Fe,xt,Ht.data):k.texSubImage3D(jt,xe,st,Tt,At,Re,De,Fe,xt,Ye,Ht):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,st,Tt,Re,De,xt,Ye,Ht.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,st,Tt,Ht.width,Ht.height,xt,Ht.data):k.texSubImage2D(k.TEXTURE_2D,xe,st,Tt,Re,De,xt,Ye,Ht);k.pixelStorei(k.UNPACK_ROW_LENGTH,yt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,un),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ai),k.pixelStorei(k.UNPACK_SKIP_ROWS,Tn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Wr),xe===0&&j.generateMipmaps&&k.generateMipmap(jt),je.unbindTexture()},this.copyTextureToTexture3D=function(w,j,J=null,te=null,H=0){return w.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,w=arguments[2],j=arguments[3],H=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,j,J,te,H)},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){O=0,U=0,Y=null,je.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}function Qg(o,e){if(e===my)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===bf||e===x_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===bf)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Jg extends Ro{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new rw(t)}),this.register(function(t){return new sw(t)}),this.register(function(t){return new ow(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new ew(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new tw(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new iw(t)}),this.register(function(t){return new nw(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new aw(t)}),this.register(function(t){return new lw(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=xa.extractUrlBase(e);c=xa.resolveURL(d,this.path)}else c=xa.extractUrlBase(e);this.manager.itemStart(e);const u=function(d){s?s(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},f=new H_(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{a.parse(d,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===Y_){try{c[_t.KHR_BINARY_GLTF]=new cw(e)}catch(g){s&&s(g);return}a=JSON.parse(c[_t.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new Mw(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](d);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case _t.KHR_MATERIALS_UNLIT:c[g]=new jA;break;case _t.KHR_DRACO_MESH_COMPRESSION:c[g]=new uw(a,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:c[g]=new hw;break;case _t.KHR_MESH_QUANTIZATION:c[g]=new fw;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}d.setExtensions(c),d.setPlugins(u),d.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function WA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XA{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const m=new ot(16777215);f.color!==void 0&&m.setRGB(f.color[0],f.color[1],f.color[2],In);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new so(m),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new jx(m),d.distance=g;break;case"spot":d=new Wx(m),d.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),d.decay=2,Qi(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(d),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class jA{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return ps}extendParams(e,t,i){const s=[];e.color=new ot(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],In),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,dn))}return Promise.all(s)}}class YA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class qA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(u,u)}return Promise.all(a)}}class KA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class $A{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class ZA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ot(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],In)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,dn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class QA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class JA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ot().setRGB(u[0],u[1],u[2],In),Promise.all(a)}}class ew{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class tw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ot().setRGB(u[0],u[1],u[2],In),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,dn)),Promise.all(a)}}class nw{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class iw{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class rw{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class sw{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ow{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aw{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=s.byteOffset||0,d=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,f,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(x),m,g,_,s.mode,s.filter),x})})}else return null}}class lw{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const d of s.primitives)if(d.mode!==si.TRIANGLES&&d.mode!==si.TRIANGLE_STRIP&&d.mode!==si.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const d in c)u.push(this.parser.getDependency("accessor",c[d]).then(m=>(f[d]=m,f[d])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(d=>{const m=d.pop(),g=m.isGroup?m.children:[m],_=d[0].count,x=[];for(const M of g){const T=new lt,S=new X,y=new bi,I=new X(1,1,1),L=new xx(M.geometry,M.material,_);for(let C=0;C<_;C++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,C),f.ROTATION&&y.fromBufferAttribute(f.ROTATION,C),f.SCALE&&I.fromBufferAttribute(f.SCALE,C),L.setMatrixAt(C,T.compose(S,y,I));for(const C in f)if(C==="_COLOR_0"){const G=f[C];L.instanceColor=new Lf(G.array,G.itemSize,G.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,f[C]);Gt.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),x.push(L)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const Y_="glTF",ma=12,e_={JSON:1313821514,BIN:5130562};class cw{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ma),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Y_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ma,a=new DataView(e,ma);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===e_.JSON){const d=new Uint8Array(e,ma+c,u);this.content=i.decode(d)}else if(f===e_.BIN){const d=ma+c;this.body=e.slice(d,d+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},d={};for(const m in c){const g=Nf[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=Nf[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],x=fo[_.componentType];d[g]=x.name,f[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(x){for(const M in x.attributes){const T=x.attributes[M],S=f[M];S!==void 0&&(T.normalized=S)}g(x)},u,d,In,_)})})}}class hw{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fw{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class q_ extends Ca{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,d=u*3,m=s-t,g=(i-t)/m,_=g*g,x=_*g,M=e*d,T=M-d,S=-2*x+3*_,y=x-_,I=1-S,L=y-_+g;for(let C=0;C!==u;C++){const G=c[T+C+u],O=c[T+C+f]*m,U=c[M+C+u],Y=c[M+C]*m;a[C]=I*G+L*O+S*U+y*Y}return a}}const dw=new bi;class pw extends q_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return dw.fromArray(a).normalize().toArray(a),a}}const si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},t_={9728:Ln,9729:$n,9984:u_,9985:hc,9986:ga,9987:Ji},n_={33071:Or,33648:vc,10497:_o},Hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ir={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mw={CUBICSPLINE:void 0,LINEAR:Ea,STEP:Ma},Vh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new $f({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ir})),o.DefaultMaterial}function us(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Qi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _w(o,e,t){let i=!1,s=!1,a=!1;for(let d=0,m=e.length;d<m;d++){const g=e[d];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],f=[];for(let d=0,m=e.length;d<m;d++){const g=e[d];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(d){const m=d[0],g=d[1],_=d[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function vw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yw(o){let e;const t=o.extensions&&o.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gh(t.attributes):e=o.indices+":"+Gh(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+Gh(o.targets[i]);return e}function Gh(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Uf(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Sw=new lt;class Mw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);s=i&&f?parseInt(f[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new Hx(this.options.manager):this.textureLoader=new Kx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new H_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return us(a,u,s),Qi(u,s),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[d,m]of c.children.entries())a(m,u.children[d])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(xa.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=Hh[s.type],u=fo[s.componentType],f=s.normalized===!0,d=new u(s.count*c);return Promise.resolve(new Dn(d,c,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=Hh[s.type],d=fo[s.componentType],m=d.BYTES_PER_ELEMENT,g=m*f,_=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let T,S;if(x&&x!==g){const y=Math.floor(_/x),I="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let L=t.cache.get(I);L||(T=new d(u,y*x,s.count*x/m),L=new mx(T,x/m),t.cache.add(I,L)),S=new jf(L,f,_%x/m,M)}else u===null?T=new d(s.count*f):T=new d(u,_,s.count*f),S=new Dn(T,f,M);if(s.sparse!==void 0){const y=Hh.SCALAR,I=fo[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,G=new I(c[1],L,s.sparse.count*y),O=new d(c[2],C,s.sparse.count*f);u!==null&&(S=new Dn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,Y=G.length;U<Y;U++){const b=G[U];if(S.setX(b,O[U*f]),f>=2&&S.setY(b,O[U*f+1]),f>=3&&S.setZ(b,O[U*f+2]),f>=4&&S.setW(b,O[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=t_[_.magFilter]||$n,m.minFilter=t_[_.minFilter]||Ji,m.wrapS=n_[_.wrapS]||_o,m.wrapT=n_[_.wrapT]||_o,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Ln&&m.minFilter!==$n,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",d=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(g){d=!0;const _=new Blob([g],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(g){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(T){const S=new cn(T);S.needsUpdate=!0,_(S)}),t.load(xa.resolveURL(g,a.path),M,void 0,x)})}).then(function(g){return d===!0&&u.revokeObjectURL(f),Qi(g,c),g.userData.mimeType=c.mimeType||xw(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[_t.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new O_,Ci.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new F_,Ci.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return $f}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},d=[];if(f[_t.KHR_MATERIALS_UNLIT]){const g=s[_t.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),d.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new ot(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],In),u.opacity=_[3]}g.baseColorTexture!==void 0&&d.push(t.assignTexture(u,"map",g.baseColorTexture,dn)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),d.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Ri);const m=a.alphaMode||Vh.OPAQUE;if(m===Vh.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===Vh.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==ps&&(d.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new nt(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==ps&&(d.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==ps){const g=a.emissiveFactor;u.emissive=new ot().setRGB(g[0],g[1],g[2],In)}return a.emissiveTexture!==void 0&&c!==ps&&d.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,dn)),Promise.all(d).then(function(){const g=new c(u);return a.name&&(g.name=a.name),Qi(g,a),t.associations.set(g,{materials:e}),a.extensions&&us(s,g,a),g})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return i_(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const d=e[u],m=yw(d),g=s[m];if(g)c.push(g.promise);else{let _;d.extensions&&d.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?_=a(d):_=i_(new Di,d,t),s[m]={primitive:d,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f].material===void 0?gw(this.cache):this.getDependency("material",c[f].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const d=f.slice(0,f.length-1),m=f[f.length-1],g=[];for(let x=0,M=m.length;x<M;x++){const T=m[x],S=c[x];let y;const I=d[x];if(S.mode===si.TRIANGLES||S.mode===si.TRIANGLE_STRIP||S.mode===si.TRIANGLE_FAN||S.mode===void 0)y=a.isSkinnedMesh===!0?new _x(T,I):new Zn(T,I),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===si.TRIANGLE_STRIP?y.geometry=Qg(y.geometry,x_):S.mode===si.TRIANGLE_FAN&&(y.geometry=Qg(y.geometry,bf));else if(S.mode===si.LINES)y=new Ex(T,I);else if(S.mode===si.LINE_STRIP)y=new Kf(T,I);else if(S.mode===si.LINE_LOOP)y=new Tx(T,I);else if(S.mode===si.POINTS)y=new Ax(T,I);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&vw(y,a),y.name=t.createUniqueName(a.name||"mesh_"+e),Qi(y,a),S.extensions&&us(s,y,S),t.assignFinalMaterial(y),g.push(y)}for(let x=0,M=g.length;x<M;x++)t.associations.set(g[x],{meshes:e,primitives:x});if(g.length===1)return a.extensions&&us(s,g[0],a),g[0];const _=new ms;a.extensions&&us(s,_,a),t.associations.set(_,{meshes:e});for(let x=0,M=g.length;x<M;x++)_.add(g[x]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Pn(E_.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Qf(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Qi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],f=[];for(let d=0,m=c.length;d<m;d++){const g=c[d];if(g){u.push(g);const _=new lt;a!==null&&_.fromArray(a.array,d*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Yf(u,f)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],f=[],d=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const x=s.channels[g],M=s.samplers[x.sampler],T=x.target,S=T.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,I=s.parameters!==void 0?s.parameters[M.output]:M.output;T.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",y)),f.push(this.getDependency("accessor",I)),d.push(M),m.push(T))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(m)]).then(function(g){const _=g[0],x=g[1],M=g[2],T=g[3],S=g[4],y=[];for(let I=0,L=_.length;I<L;I++){const C=_[I],G=x[I],O=M[I],U=T[I],Y=S[I];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const b=i._createAnimationTracks(C,G,O,U,Y);if(b)for(let R=0;R<b.length;R++)y.push(b[R])}return new Nx(a,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,d=s.weights.length;f<d;f++)u.morphTargetInfluences[f]=s.weights[f]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let d=0,m=u.length;d<m;d++)c.push(i.getDependency("node",u[d]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),f]).then(function(d){const m=d[0],g=d[1],_=d[2];_!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(_,Sw)});for(let x=0,M=g.length;x<M;x++)m.add(g[x]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],f=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(d){return s._getNodeRef(s.cameraCache,a.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){u.push(d)}),this.nodeCache[e]=Promise.all(u).then(function(d){let m;if(a.isBone===!0?m=new N_:d.length>1?m=new ms:d.length===1?m=d[0]:m=new Gt,m!==d[0])for(let g=0,_=d.length;g<_;g++)m.add(d[g]);if(a.name&&(m.userData.name=a.name,m.name=c),Qi(m,a),a.extensions&&us(i,m,a),a.matrix!==void 0){const g=new lt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new ms;i.name&&(a.name=s.createUniqueName(i.name)),Qi(a,i),i.extensions&&us(t,a,i);const c=i.nodes||[],u=[];for(let f=0,d=c.length;f<d;f++)u.push(s.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let m=0,g=f.length;m<g;m++)a.add(f[m]);const d=m=>{const g=new Map;for(const[_,x]of s.associations)(_ instanceof Ci||_ instanceof cn)&&g.set(_,x);return m.traverse(_=>{const x=s.associations.get(_);x!=null&&g.set(_,x)}),g};return s.associations=d(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,f=[];Ir[a.path]===Ir.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let d;switch(Ir[a.path]){case Ir.weights:d=Mo;break;case Ir.rotation:d=Eo;break;case Ir.position:case Ir.scale:d=To;break;default:switch(i.itemSize){case 1:d=Mo;break;case 2:case 3:default:d=To;break}break}const m=s.interpolation!==void 0?mw[s.interpolation]:Ea,g=this._getArrayFromAccessor(i);for(let _=0,x=f.length;_<x;_++){const M=new d(f[_]+"."+Ir[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Uf(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Eo?pw:q_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ew(o,e,t){const i=e.attributes,s=new sr;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,d=u.max;if(f!==void 0&&d!==void 0){if(s.set(new X(f[0],f[1],f[2]),new X(d[0],d[1],d[2])),u.normalized){const m=Uf(fo[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new X,f=new X;for(let d=0,m=a.length;d<m;d++){const g=a[d];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const T=Uf(fo[_.componentType]);f.multiplyScalar(T)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Li;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function i_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){o.setAttribute(u,f)})}for(const c in i){const u=Nf[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return St.workingColorSpace!==In&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),Qi(o,e),Ew(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_w(o,e.targets,t):o})}const r_={type:"change"},nd={type:"start"},K_={type:"end"},uc=new wa,s_=new Ur,Tw=Math.cos(70*E_.DEG2RAD),tn=new X,Hn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wh=1e-6;class Aw extends oS{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lo.ROTATE,MIDDLE:lo.DOLLY,RIGHT:lo.PAN},this.touches={ONE:oo.ROTATE,TWO:oo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new bi,this._lastTargetPosition=new X,this._quat=new bi().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wg,this._sphericalDelta=new wg,this._scale=1,this._panOffset=new X,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new X,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rw.bind(this),this._onPointerDown=ww.bind(this),this._onPointerUp=Cw.bind(this),this._onContextMenu=Uw.bind(this),this._onMouseWheel=Lw.bind(this),this._onKeyDown=Dw.bind(this),this._onTouchStart=Iw.bind(this),this._onTouchMove=Nw.bind(this),this._onMouseDown=bw.bind(this),this._onMouseMove=Pw.bind(this),this._interceptControlDown=Fw.bind(this),this._interceptControlUp=Ow.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(r_),this.update(),this.state=Ut.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=tn.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const u=new X(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(uc.origin.copy(this.object.position),uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uc.direction))<Tw?this.object.lookAt(this.target):(s_.setFromNormalAndCoplanarPoint(this.object.up,this.target),uc.intersectPlane(s_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wh||this._lastTargetPosition.distanceToSquared(this.target)>Wh?(this.dispatchEvent(r_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;tn.copy(s).sub(this.target);let a=tn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ww(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function Rw(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function Cw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(K_),this.state=Ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bw(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case lo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ut.DOLLY;break;case lo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ut.ROTATE}break;case lo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(nd)}function Pw(o){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Lw(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(o.preventDefault(),this.dispatchEvent(nd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(K_))}function Dw(o){this.enabled!==!1&&this._handleKeyDown(o)}function Iw(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case oo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ut.TOUCH_ROTATE;break;case oo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case oo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ut.TOUCH_DOLLY_PAN;break;case oo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(nd)}function Nw(o){switch(this._trackPointer(o),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ut.NONE}}function Uw(o){this.enabled!==!1&&o.preventDefault()}function Fw(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ow(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kw="_wrapper_1ikc2_1",Bw="_model_1ikc2_35",o_={wrapper:kw,model:Bw};function zw(){const[o,e]=Nr.useState("./low-poly_mk-47_mutant.glb"),t=Nr.useRef(null),i=Nr.useRef(null),s=Nr.useRef(null),a=Nr.useRef(null);Nr.useLayoutEffect(()=>{var I,L;const u=new GA({canvas:t.current,antialias:!0,alpha:!0}),f=new Pn(45,1920/1080,.1,100);f.position.set(1,0,0);const d=new px;s.current=d;const m=new so(16316671,.9);m.castShadow=!0,m.position.set(3,1.5,-2),d.add(m);const g=new so(16316671,.9);g.castShadow=!0,g.position.set(3,1.5,-5),d.add(g);const _=new so(16316671,.9);_.castShadow=!0,_.position.set(3,1.5,1),d.add(_);const x=new so(16316671,.9);x.castShadow=!0,x.position.set(-3,1.5,5),d.add(x);const M=new so(16316671,.9);M.castShadow=!0,M.position.set(-3,1.5,-1),d.add(M);const T=new Vx(16316671,16316671,1);d.add(T);const S=new qx(16316671,.9);d.add(S),new Jg().load(o,C=>{a.current=C.scene,C.scene.rotateY(.3),d.add(C.scene)},C=>{console.log(C.loaded/C.total*100+"% loaded")},C=>{console.log(C)}),u.setSize(((I=i.current)==null?void 0:I.offsetWidth)||window.innerWidth,((L=i.current)==null?void 0:L.offsetHeight)||window.innerHeight),u.setAnimationLoop(()=>{a.current&&a.current.rotateY(.0015),u.render(d,f)}),new Aw(f,u.domElement)},[]),Nr.useEffect(()=>{if(!i.current)return;const u=t.current,f=new ResizeObserver(()=>{var d,m,g,_,x,M;((d=i.current)==null?void 0:d.offsetWidth)!==((m=t.current)==null?void 0:m.offsetWidth)&&(u.style.width=`${(g=i.current)==null?void 0:g.offsetWidth}px`),((_=i.current)==null?void 0:_.offsetHeight)!==((x=t.current)==null?void 0:x.offsetHeight)&&(u.style.height=`${(M=i.current)==null?void 0:M.offsetHeight}px`)});return f.observe(i.current),()=>{f.disconnect()}},[]);const c=u=>{const f=u.target;if(e(f.value),s.current){const m=a.current;s.current.remove(m)}new Jg().load(f.value,m=>{a.current=m.scene,s.current&&s.current.add(m.scene)},m=>{console.log(m.loaded/m.total*100+"% loaded")},m=>{console.log(m)})};return Vn.jsxs("div",{className:o_.wrapper,ref:i,children:[Vn.jsxs("select",{name:"typeWeapon",onChange:c,children:[Vn.jsx("option",{value:"./low-poly_mk-47_mutant.glb",children:"MK-47"}),Vn.jsx("option",{value:"./low-poly_altyn_helmet.glb",children:"Altyn helmet"}),Vn.jsx("option",{value:"./low-poly_python_revolver.glb",children:"Revolver"}),Vn.jsx("option",{value:"./low-poly_remington_870_shotgun.glb",children:"Remington 870"}),Vn.jsx("option",{value:"./low-poly_zastava_m70ab2.glb",children:"Zastava M70AB"})]}),Vn.jsx("canvas",{className:o_.model,ref:t})]})}function Hw(){return Nr.useEffect(()=>{window.scrollTo({top:46,behavior:"smooth"})},[]),Vn.jsxs(Vn.Fragment,{children:[Vn.jsx("header",{}),Vn.jsx(zw,{}),Vn.jsx("footer",{})]})}F0.createRoot(document.getElementById("root")).render(Vn.jsx(Hw,{}));
