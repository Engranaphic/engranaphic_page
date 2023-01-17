(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vf(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function wf(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Je(r)?h1(r):wf(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Je(t))return t;if(Pe(t))return t}}const c1=/;(?![^(]*\))/g,u1=/:([^]+)/,l1=/\/\*.*?\*\//gs;function h1(t){const e={};return t.replace(l1,"").split(c1).forEach(n=>{if(n){const r=n.split(u1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bf(t){let e="";if(Je(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=bf(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const d1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f1=vf(d1);function Iw(t){return!!t||t===""}const b$=t=>Je(t)?t:t==null?"":re(t)||Pe(t)&&(t.toString===kw||!ue(t.toString))?JSON.stringify(t,Ew,2):String(t),Ew=(t,e)=>e&&e.__v_isRef?Ew(t,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Tw(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!re(e)&&!Aw(e)?String(e):e,Ce={},Ts=[],pn=()=>{},m1=()=>!1,p1=/^on[^a-z]/,il=t=>p1.test(t),_f=t=>t.startsWith("onUpdate:"),vt=Object.assign,If=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},g1=Object.prototype.hasOwnProperty,pe=(t,e)=>g1.call(t,e),re=Array.isArray,Ss=t=>sl(t)==="[object Map]",Tw=t=>sl(t)==="[object Set]",ue=t=>typeof t=="function",Je=t=>typeof t=="string",Ef=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Sw=t=>Pe(t)&&ue(t.then)&&ue(t.catch),kw=Object.prototype.toString,sl=t=>kw.call(t),y1=t=>sl(t).slice(8,-1),Aw=t=>sl(t)==="[object Object]",Tf=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ru=vf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ol=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},v1=/-(\w)/g,Bn=ol(t=>t.replace(v1,(e,n)=>n?n.toUpperCase():"")),w1=/\B([A-Z])/g,no=ol(t=>t.replace(w1,"-$1").toLowerCase()),al=ol(t=>t.charAt(0).toUpperCase()+t.slice(1)),vh=ol(t=>t?`on${al(t)}`:""),la=(t,e)=>!Object.is(t,e),iu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wp;const b1=()=>Wp||(Wp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let In;class _1{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=In,!e&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}run(e){if(this.active){const n=In;try{return In=this,e()}finally{In=n}}}on(){In=this}off(){In=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function I1(t,e=In){e&&e.active&&e.effects.push(t)}const Sf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cw=t=>(t.w&Or)>0,xw=t=>(t.n&Or)>0,E1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Or},T1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Cw(i)&&!xw(i)?i.delete(t):e[n++]=i,i.w&=~Or,i.n&=~Or}e.length=n}},rd=new WeakMap;let Fo=0,Or=1;const id=30;let ln;const Ri=Symbol(""),sd=Symbol("");class kf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,I1(this,r)}run(){if(!this.active)return this.fn();let e=ln,n=Rr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ln,ln=this,Rr=!0,Or=1<<++Fo,Fo<=id?E1(this):Gp(this),this.fn()}finally{Fo<=id&&T1(this),Or=1<<--Fo,ln=this.parent,Rr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ln===this?this.deferStop=!0:this.active&&(Gp(this),this.onStop&&this.onStop(),this.active=!1)}}function Gp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rr=!0;const Rw=[];function ro(){Rw.push(Rr),Rr=!1}function io(){const t=Rw.pop();Rr=t===void 0?!0:t}function Yt(t,e,n){if(Rr&&ln){let r=rd.get(t);r||rd.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Sf()),Nw(i)}}function Nw(t,e){let n=!1;Fo<=id?xw(t)||(t.n|=Or,n=!Cw(t)):n=!t.has(ln),n&&(t.add(ln),ln.deps.push(t))}function Zn(t,e,n,r,i,s){const o=rd.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const c=ha(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?Tf(n)&&a.push(o.get("length")):(a.push(o.get(Ri)),Ss(t)&&a.push(o.get(sd)));break;case"delete":re(t)||(a.push(o.get(Ri)),Ss(t)&&a.push(o.get(sd)));break;case"set":Ss(t)&&a.push(o.get(Ri));break}if(a.length===1)a[0]&&od(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);od(Sf(c))}}function od(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&Yp(r);for(const r of n)r.computed||Yp(r)}function Yp(t,e){(t!==ln||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const S1=vf("__proto__,__v_isRef,__isVue"),Pw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ef)),k1=Af(),A1=Af(!1,!0),C1=Af(!0),Qp=x1();function x1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=we(this);for(let s=0,o=this.length;s<o;s++)Yt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ro();const r=we(this)[e].apply(this,n);return io(),r}}),t}function Af(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?H1:Fw:e?Mw:Lw).get(r))return r;const o=re(r);if(!t&&o&&pe(Qp,i))return Reflect.get(Qp,i,s);const a=Reflect.get(r,i,s);return(Ef(i)?Pw.has(i):S1(i))||(t||Yt(r,"get",i),e)?a:It(a)?o&&Tf(i)?a:a.value:Pe(a)?t?Uw(a):Qa(a):a}}const R1=Dw(),N1=Dw(!0);function Dw(t=!1){return function(n,r,i,s){let o=n[r];if(Fs(o)&&It(o)&&!It(i))return!1;if(!t&&(!_u(i)&&!Fs(i)&&(o=we(o),i=we(i)),!re(n)&&It(o)&&!It(i)))return o.value=i,!0;const a=re(n)&&Tf(r)?Number(r)<n.length:pe(n,r),c=Reflect.set(n,r,i,s);return n===we(s)&&(a?la(i,o)&&Zn(n,"set",r,i):Zn(n,"add",r,i)),c}}function P1(t,e){const n=pe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Zn(t,"delete",e,void 0),r}function D1(t,e){const n=Reflect.has(t,e);return(!Ef(e)||!Pw.has(e))&&Yt(t,"has",e),n}function O1(t){return Yt(t,"iterate",re(t)?"length":Ri),Reflect.ownKeys(t)}const Ow={get:k1,set:R1,deleteProperty:P1,has:D1,ownKeys:O1},L1={get:C1,set(t,e){return!0},deleteProperty(t,e){return!0}},M1=vt({},Ow,{get:A1,set:N1}),Cf=t=>t,cl=t=>Reflect.getPrototypeOf(t);function Cc(t,e,n=!1,r=!1){t=t.__v_raw;const i=we(t),s=we(e);n||(e!==s&&Yt(i,"get",e),Yt(i,"get",s));const{has:o}=cl(i),a=r?Cf:n?Nf:da;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function xc(t,e=!1){const n=this.__v_raw,r=we(n),i=we(t);return e||(t!==i&&Yt(r,"has",t),Yt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Rc(t,e=!1){return t=t.__v_raw,!e&&Yt(we(t),"iterate",Ri),Reflect.get(t,"size",t)}function Xp(t){t=we(t);const e=we(this);return cl(e).has.call(e,t)||(e.add(t),Zn(e,"add",t,t)),this}function Jp(t,e){e=we(e);const n=we(this),{has:r,get:i}=cl(n);let s=r.call(n,t);s||(t=we(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?la(e,o)&&Zn(n,"set",t,e):Zn(n,"add",t,e),this}function Zp(t){const e=we(this),{has:n,get:r}=cl(e);let i=n.call(e,t);i||(t=we(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Zn(e,"delete",t,void 0),s}function eg(){const t=we(this),e=t.size!==0,n=t.clear();return e&&Zn(t,"clear",void 0,void 0),n}function Nc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=we(o),c=e?Cf:t?Nf:da;return!t&&Yt(a,"iterate",Ri),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Pc(t,e,n){return function(...r){const i=this.__v_raw,s=we(i),o=Ss(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?Cf:e?Nf:da;return!e&&Yt(s,"iterate",c?sd:Ri),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function gr(t){return function(...e){return t==="delete"?!1:this}}function F1(){const t={get(s){return Cc(this,s)},get size(){return Rc(this)},has:xc,add:Xp,set:Jp,delete:Zp,clear:eg,forEach:Nc(!1,!1)},e={get(s){return Cc(this,s,!1,!0)},get size(){return Rc(this)},has:xc,add:Xp,set:Jp,delete:Zp,clear:eg,forEach:Nc(!1,!0)},n={get(s){return Cc(this,s,!0)},get size(){return Rc(this,!0)},has(s){return xc.call(this,s,!0)},add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear"),forEach:Nc(!0,!1)},r={get(s){return Cc(this,s,!0,!0)},get size(){return Rc(this,!0)},has(s){return xc.call(this,s,!0)},add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear"),forEach:Nc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Pc(s,!1,!1),n[s]=Pc(s,!0,!1),e[s]=Pc(s,!1,!0),r[s]=Pc(s,!0,!0)}),[t,n,e,r]}const[U1,V1,B1,$1]=F1();function xf(t,e){const n=e?t?$1:B1:t?V1:U1;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(pe(n,i)&&i in r?n:r,i,s)}const q1={get:xf(!1,!1)},j1={get:xf(!1,!0)},z1={get:xf(!0,!1)},Lw=new WeakMap,Mw=new WeakMap,Fw=new WeakMap,H1=new WeakMap;function K1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function W1(t){return t.__v_skip||!Object.isExtensible(t)?0:K1(y1(t))}function Qa(t){return Fs(t)?t:Rf(t,!1,Ow,q1,Lw)}function G1(t){return Rf(t,!1,M1,j1,Mw)}function Uw(t){return Rf(t,!0,L1,z1,Fw)}function Rf(t,e,n,r,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=W1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ks(t){return Fs(t)?ks(t.__v_raw):!!(t&&t.__v_isReactive)}function Fs(t){return!!(t&&t.__v_isReadonly)}function _u(t){return!!(t&&t.__v_isShallow)}function Vw(t){return ks(t)||Fs(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Bw(t){return bu(t,"__v_skip",!0),t}const da=t=>Pe(t)?Qa(t):t,Nf=t=>Pe(t)?Uw(t):t;function $w(t){Rr&&ln&&(t=we(t),Nw(t.dep||(t.dep=Sf())))}function qw(t,e){t=we(t),t.dep&&od(t.dep)}function It(t){return!!(t&&t.__v_isRef===!0)}function Y1(t){return jw(t,!1)}function Q1(t){return jw(t,!0)}function jw(t,e){return It(t)?t:new X1(t,e)}class X1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:da(e)}get value(){return $w(this),this._value}set value(e){const n=this.__v_isShallow||_u(e)||Fs(e);e=n?e:we(e),la(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:da(e),qw(this))}}function As(t){return It(t)?t.value:t}const J1={get:(t,e,n)=>As(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return It(i)&&!It(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function zw(t){return ks(t)?t:new Proxy(t,J1)}var Hw;class Z1{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Hw]=!1,this._dirty=!0,this.effect=new kf(e,()=>{this._dirty||(this._dirty=!0,qw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=we(this);return $w(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Hw="__v_isReadonly";function eS(t,e,n=!1){let r,i;const s=ue(t);return s?(r=t,i=pn):(r=t.get,i=t.set),new Z1(r,i,s||!i,n)}function Nr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ul(s,e,n)}return i}function nn(t,e,n,r){if(ue(t)){const s=Nr(t,e,n,r);return s&&Sw(s)&&s.catch(o=>{ul(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(nn(t[s],e,n,r));return i}function ul(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Nr(c,null,10,[t,o,a]);return}}tS(t,n,i,r)}function tS(t,e,n,r=!0){console.error(t)}let fa=!1,ad=!1;const _t=[];let Sn=0;const Cs=[];let Hn=null,mi=0;const Kw=Promise.resolve();let Pf=null;function Ww(t){const e=Pf||Kw;return t?e.then(this?t.bind(this):t):e}function nS(t){let e=Sn+1,n=_t.length;for(;e<n;){const r=e+n>>>1;ma(_t[r])<t?e=r+1:n=r}return e}function Df(t){(!_t.length||!_t.includes(t,fa&&t.allowRecurse?Sn+1:Sn))&&(t.id==null?_t.push(t):_t.splice(nS(t.id),0,t),Gw())}function Gw(){!fa&&!ad&&(ad=!0,Pf=Kw.then(Qw))}function rS(t){const e=_t.indexOf(t);e>Sn&&_t.splice(e,1)}function iS(t){re(t)?Cs.push(...t):(!Hn||!Hn.includes(t,t.allowRecurse?mi+1:mi))&&Cs.push(t),Gw()}function tg(t,e=fa?Sn+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function Yw(t){if(Cs.length){const e=[...new Set(Cs)];if(Cs.length=0,Hn){Hn.push(...e);return}for(Hn=e,Hn.sort((n,r)=>ma(n)-ma(r)),mi=0;mi<Hn.length;mi++)Hn[mi]();Hn=null,mi=0}}const ma=t=>t.id==null?1/0:t.id,sS=(t,e)=>{const n=ma(t)-ma(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qw(t){ad=!1,fa=!0,_t.sort(sS);const e=pn;try{for(Sn=0;Sn<_t.length;Sn++){const n=_t[Sn];n&&n.active!==!1&&Nr(n,null,14)}}finally{Sn=0,_t.length=0,Yw(),fa=!1,Pf=null,(_t.length||Cs.length)&&Qw()}}function oS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Ce;d&&(i=n.map(f=>Je(f)?f.trim():f)),h&&(i=n.map(ha))}let a,c=r[a=vh(e)]||r[a=vh(Bn(e))];!c&&s&&(c=r[a=vh(no(e))]),c&&nn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nn(u,t,6,i)}}function Xw(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ue(t)){const c=u=>{const l=Xw(u,e,!0);l&&(a=!0,vt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Pe(t)&&r.set(t,null),null):(re(s)?s.forEach(c=>o[c]=null):vt(o,s),Pe(t)&&r.set(t,o),o)}function ll(t,e){return!t||!il(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,no(e))||pe(t,e))}let Kt=null,hl=null;function Iu(t){const e=Kt;return Kt=t,hl=t&&t.type.__scopeId||null,e}function _$(t){hl=t}function I$(){hl=null}function aS(t,e=Kt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&hg(-1);const s=Iu(e);let o;try{o=t(...i)}finally{Iu(s),r._d&&hg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:y}=t;let b,v;const _=Iu(t);try{if(n.shapeFlag&4){const R=i||r;b=Tn(l.call(R,R,h,s,f,d,p)),v=c}else{const R=e;b=Tn(R.length>1?R(s,{attrs:c,slots:a,emit:u}):R(s,null)),v=e.props?c:cS(c)}}catch(R){Wo.length=0,ul(R,t,1),b=Bt(gn)}let E=b;if(v&&y!==!1){const R=Object.keys(v),{shapeFlag:F}=E;R.length&&F&7&&(o&&R.some(_f)&&(v=uS(v,o)),E=Lr(E,v))}return n.dirs&&(E=Lr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,Iu(_),b}const cS=t=>{let e;for(const n in t)(n==="class"||n==="style"||il(n))&&((e||(e={}))[n]=t[n]);return e},uS=(t,e)=>{const n={};for(const r in t)(!_f(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function lS(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ng(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!ll(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ng(r,o,u):!0:!!o;return!1}function ng(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ll(n,s))return!0}return!1}function hS({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dS=t=>t.__isSuspense;function fS(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):iS(t)}function su(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Mn(t,e,n=!1){const r=it||Kt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ue(e)?e.call(r.proxy):e}}const Dc={};function Ho(t,e,n){return Jw(t,e,n)}function Jw(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ce){const a=it;let c,u=!1,l=!1;if(It(t)?(c=()=>t.value,u=_u(t)):ks(t)?(c=()=>t,r=!0):re(t)?(l=!0,u=t.some(E=>ks(E)||_u(E)),c=()=>t.map(E=>{if(It(E))return E.value;if(ks(E))return Ii(E);if(ue(E))return Nr(E,a,2)})):ue(t)?e?c=()=>Nr(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),nn(t,a,3,[d])}:c=pn,e&&r){const E=c;c=()=>Ii(E())}let h,d=E=>{h=v.onStop=()=>{Nr(E,a,4)}},f;if(ga)if(d=pn,e?n&&nn(e,a,3,[c(),l?[]:void 0,d]):c(),i==="sync"){const E=uk();f=E.__watcherHandles||(E.__watcherHandles=[])}else return pn;let p=l?new Array(t.length).fill(Dc):Dc;const y=()=>{if(!!v.active)if(e){const E=v.run();(r||u||(l?E.some((R,F)=>la(R,p[F])):la(E,p)))&&(h&&h(),nn(e,a,3,[E,p===Dc?void 0:l&&p[0]===Dc?[]:p,d]),p=E)}else v.run()};y.allowRecurse=!!e;let b;i==="sync"?b=y:i==="post"?b=()=>Ft(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>Df(y));const v=new kf(c,b);e?n?y():p=v.run():i==="post"?Ft(v.run.bind(v),a&&a.suspense):v.run();const _=()=>{v.stop(),a&&a.scope&&If(a.scope.effects,v)};return f&&f.push(_),_}function mS(t,e,n){const r=this.proxy,i=Je(t)?t.includes(".")?Zw(r,t):()=>r[t]:t.bind(r,r);let s;ue(e)?s=e:(s=e.handler,n=e);const o=it;Us(this);const a=Jw(i,s.bind(r),n);return o?Us(o):Ni(),a}function Zw(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ii(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),It(t))Ii(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)Ii(t[n],e);else if(Tw(t)||Ss(t))t.forEach(n=>{Ii(n,e)});else if(Aw(t))for(const n in t)Ii(t[n],e);return t}function pS(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ib(()=>{t.isMounted=!0}),sb(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],gS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},setup(t,{slots:e}){const n=tk(),r=pS();let i;return()=>{const s=e.default&&nb(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==gn){o=y;break}}const a=we(t),{mode:c}=a;if(r.isLeaving)return bh(o);const u=rg(o);if(!u)return bh(o);const l=cd(u,a,r,n);ud(u,l);const h=n.subTree,d=h&&rg(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const y=p();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==gn&&(!pi(u,d)||f)){const y=cd(d,a,r,n);if(ud(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},bh(o);c==="in-out"&&u.type!==gn&&(y.delayLeave=(b,v,_)=>{const E=tb(r,d);E[String(d.key)]=d,b._leaveCb=()=>{v(),b._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=_})}return o}}},eb=gS;function tb(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function cd(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:y,onAppear:b,onAfterAppear:v,onAppearCancelled:_}=e,E=String(t.key),R=tb(n,t),F=(Q,oe)=>{Q&&nn(Q,r,9,oe)},z=(Q,oe)=>{const ve=oe[1];F(Q,oe),re(Q)?Q.every(Qe=>Qe.length<=1)&&ve():Q.length<=1&&ve()},ee={mode:s,persisted:o,beforeEnter(Q){let oe=a;if(!n.isMounted)if(i)oe=y||a;else return;Q._leaveCb&&Q._leaveCb(!0);const ve=R[E];ve&&pi(t,ve)&&ve.el._leaveCb&&ve.el._leaveCb(),F(oe,[Q])},enter(Q){let oe=c,ve=u,Qe=l;if(!n.isMounted)if(i)oe=b||c,ve=v||u,Qe=_||l;else return;let K=!1;const Ae=Q._enterCb=dt=>{K||(K=!0,dt?F(Qe,[Q]):F(ve,[Q]),ee.delayedLeave&&ee.delayedLeave(),Q._enterCb=void 0)};oe?z(oe,[Q,Ae]):Ae()},leave(Q,oe){const ve=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return oe();F(h,[Q]);let Qe=!1;const K=Q._leaveCb=Ae=>{Qe||(Qe=!0,oe(),Ae?F(p,[Q]):F(f,[Q]),Q._leaveCb=void 0,R[ve]===t&&delete R[ve])};R[ve]=t,d?z(d,[Q,K]):K()},clone(Q){return cd(Q,e,n,r)}};return ee}function bh(t){if(dl(t))return t=Lr(t),t.children=null,t}function rg(t){return dl(t)?t.children?t.children[0]:void 0:t}function ud(t,e){t.shapeFlag&6&&t.component?ud(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nb(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===En?(o.patchFlag&128&&i++,r=r.concat(nb(o.children,e,a))):(e||o.type!==gn)&&r.push(a!=null?Lr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Xa(t){return ue(t)?{setup:t,name:t.name}:t}const ou=t=>!!t.type.__asyncLoader,dl=t=>t.type.__isKeepAlive;function yS(t,e){rb(t,"a",e)}function vS(t,e){rb(t,"da",e)}function rb(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)dl(i.parent.vnode)&&wS(r,e,n,i),i=i.parent}}function wS(t,e,n,r){const i=fl(e,t,r,!0);ob(()=>{If(r[e],i)},n)}function fl(t,e,n=it,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ro(),Us(n);const a=nn(e,n,t,o);return Ni(),io(),a});return r?i.unshift(s):i.push(s),s}}const ar=t=>(e,n=it)=>(!ga||t==="sp")&&fl(t,(...r)=>e(...r),n),bS=ar("bm"),ib=ar("m"),_S=ar("bu"),IS=ar("u"),sb=ar("bum"),ob=ar("um"),ES=ar("sp"),TS=ar("rtg"),SS=ar("rtc");function kS(t,e=it){fl("ec",t,e)}function E$(t,e){const n=Kt;if(n===null)return t;const r=gl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Ce]=e[s];o&&(ue(o)&&(o={mounted:o,updated:o}),o.deep&&Ii(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function si(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ro(),nn(c,n,8,[t.el,a,t,e]),io())}}const ab="components";function AS(t,e){return xS(ab,t,!0,e)||t}const CS=Symbol();function xS(t,e,n=!0,r=!1){const i=Kt||it;if(i){const s=i.type;if(t===ab){const a=ok(s,!1);if(a&&(a===e||a===Bn(e)||a===al(Bn(e))))return s}const o=ig(i[t]||s[t],e)||ig(i.appContext[t],e);return!o&&r?s:o}}function ig(t,e){return t&&(t[e]||t[Bn(e)]||t[al(Bn(e))])}function T$(t,e,n,r){let i;const s=n&&n[r];if(re(t)||Je(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const ld=t=>t?_b(t)?gl(t)||t.proxy:ld(t.parent):null,Ko=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ld(t.parent),$root:t=>ld(t.root),$emit:t=>t.emit,$options:t=>Of(t),$forceUpdate:t=>t.f||(t.f=()=>Df(t.update)),$nextTick:t=>t.n||(t.n=Ww.bind(t.proxy)),$watch:t=>mS.bind(t)}),_h=(t,e)=>t!==Ce&&!t.__isScriptSetup&&pe(t,e),RS={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(_h(r,e))return o[e]=1,r[e];if(i!==Ce&&pe(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&pe(u,e))return o[e]=3,s[e];if(n!==Ce&&pe(n,e))return o[e]=4,n[e];hd&&(o[e]=0)}}const l=Ko[e];let h,d;if(l)return e==="$attrs"&&Yt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&pe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,pe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return _h(i,e)?(i[e]=n,!0):r!==Ce&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ce&&pe(t,o)||_h(e,o)||(a=s[0])&&pe(a,o)||pe(r,o)||pe(Ko,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let hd=!0;function NS(t){const e=Of(t),n=t.proxy,r=t.ctx;hd=!1,e.beforeCreate&&sg(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:y,deactivated:b,beforeDestroy:v,beforeUnmount:_,destroyed:E,unmounted:R,render:F,renderTracked:z,renderTriggered:ee,errorCaptured:Q,serverPrefetch:oe,expose:ve,inheritAttrs:Qe,components:K,directives:Ae,filters:dt}=e;if(u&&PS(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const _e=o[Te];ue(_e)&&(r[Te]=_e.bind(n))}if(i){const Te=i.call(n,n);Pe(Te)&&(t.data=Qa(Te))}if(hd=!0,s)for(const Te in s){const _e=s[Te],an=ue(_e)?_e.bind(n,n):ue(_e.get)?_e.get.bind(n,n):pn,ii=!ue(_e)&&ue(_e.set)?_e.set.bind(n):pn,cn=Ue({get:an,set:ii});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Lt=>cn.value=Lt})}if(a)for(const Te in a)cb(a[Te],r,n,Te);if(c){const Te=ue(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(_e=>{su(_e,Te[_e])})}l&&sg(l,t,"c");function Me(Te,_e){re(_e)?_e.forEach(an=>Te(an.bind(n))):_e&&Te(_e.bind(n))}if(Me(bS,h),Me(ib,d),Me(_S,f),Me(IS,p),Me(yS,y),Me(vS,b),Me(kS,Q),Me(SS,z),Me(TS,ee),Me(sb,_),Me(ob,R),Me(ES,oe),re(ve))if(ve.length){const Te=t.exposed||(t.exposed={});ve.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>n[_e],set:an=>n[_e]=an})})}else t.exposed||(t.exposed={});F&&t.render===pn&&(t.render=F),Qe!=null&&(t.inheritAttrs=Qe),K&&(t.components=K),Ae&&(t.directives=Ae)}function PS(t,e,n=pn,r=!1){re(t)&&(t=dd(t));for(const i in t){const s=t[i];let o;Pe(s)?"default"in s?o=Mn(s.from||i,s.default,!0):o=Mn(s.from||i):o=Mn(s),It(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function sg(t,e,n){nn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cb(t,e,n,r){const i=r.includes(".")?Zw(n,r):()=>n[r];if(Je(t)){const s=e[t];ue(s)&&Ho(i,s)}else if(ue(t))Ho(i,t.bind(n));else if(Pe(t))if(re(t))t.forEach(s=>cb(s,e,n,r));else{const s=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(s)&&Ho(i,s,t)}}function Of(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Eu(c,u,o,!0)),Eu(c,e,o)),Pe(e)&&s.set(e,c),c}function Eu(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Eu(t,s,n,!0),i&&i.forEach(o=>Eu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=DS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const DS={data:og,props:hi,emits:hi,methods:hi,computed:hi,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:hi,directives:hi,watch:LS,provide:og,inject:OS};function og(t,e){return e?t?function(){return vt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function OS(t,e){return hi(dd(t),dd(e))}function dd(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xt(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?vt(vt(Object.create(null),t),e):e}function LS(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const r in e)n[r]=xt(t[r],e[r]);return n}function MS(t,e,n,r=!1){const i={},s={};bu(s,pl,1),t.propsDefaults=Object.create(null),ub(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:G1(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function FS(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=we(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(ll(t.emitsOptions,d))continue;const f=e[d];if(c)if(pe(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const p=Bn(d);i[p]=fd(c,a,p,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{ub(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!pe(e,h)&&((l=no(h))===h||!pe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=fd(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!pe(e,h)&&!0)&&(delete s[h],u=!0)}u&&Zn(t,"set","$attrs")}function ub(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ru(c))continue;const u=e[c];let l;i&&pe(i,l=Bn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:ll(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=we(n),u=a||Ce;for(let l=0;l<s.length;l++){const h=s[l];n[h]=fd(i,c,h,u[h],t,!pe(u,h))}}return o}function fd(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ue(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(Us(i),r=u[n]=c.call(null,e),Ni())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===no(n))&&(r=!0))}return r}function lb(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ue(t)){const l=h=>{c=!0;const[d,f]=lb(h,e,!0);vt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Pe(t)&&r.set(t,Ts),Ts;if(re(s))for(let l=0;l<s.length;l++){const h=Bn(s[l]);ag(h)&&(o[h]=Ce)}else if(s)for(const l in s){const h=Bn(l);if(ag(h)){const d=s[l],f=o[h]=re(d)||ue(d)?{type:d}:Object.assign({},d);if(f){const p=lg(Boolean,f.type),y=lg(String,f.type);f[0]=p>-1,f[1]=y<0||p<y,(p>-1||pe(f,"default"))&&a.push(h)}}}const u=[o,a];return Pe(t)&&r.set(t,u),u}function ag(t){return t[0]!=="$"}function cg(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ug(t,e){return cg(t)===cg(e)}function lg(t,e){return re(e)?e.findIndex(n=>ug(n,t)):ue(e)&&ug(e,t)?0:-1}const hb=t=>t[0]==="_"||t==="$stable",Lf=t=>re(t)?t.map(Tn):[Tn(t)],US=(t,e,n)=>{if(e._n)return e;const r=aS((...i)=>Lf(e(...i)),n);return r._c=!1,r},db=(t,e,n)=>{const r=t._ctx;for(const i in t){if(hb(i))continue;const s=t[i];if(ue(s))e[i]=US(i,s,r);else if(s!=null){const o=Lf(s);e[i]=()=>o}}},fb=(t,e)=>{const n=Lf(e);t.slots.default=()=>n},VS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),bu(e,"_",n)):db(e,t.slots={})}else t.slots={},e&&fb(t,e);bu(t.slots,pl,1)},BS=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(vt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,db(e,i)),o=e}else e&&(fb(t,e),o={default:1});if(s)for(const a in i)!hb(a)&&!(a in o)&&delete i[a]};function mb(){return{app:null,config:{isNativeTag:m1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $S=0;function qS(t,e){return function(r,i=null){ue(r)||(r=Object.assign({},r)),i!=null&&!Pe(i)&&(i=null);const s=mb(),o=new Set;let a=!1;const c=s.app={_uid:$S++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:lk,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&ue(u.install)?(o.add(u),u.install(c,...l)):ue(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=Bt(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,gl(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c}};return c}}function md(t,e,n,r,i=!1){if(re(t)){t.forEach((d,f)=>md(d,e&&(re(e)?e[f]:e),n,r,i));return}if(ou(r)&&!i)return;const s=r.shapeFlag&4?gl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Je(u)?(l[u]=null,pe(h,u)&&(h[u]=null)):It(u)&&(u.value=null)),ue(c))Nr(c,a,12,[o,l]);else{const d=Je(c),f=It(c);if(d||f){const p=()=>{if(t.f){const y=d?pe(h,c)?h[c]:l[c]:c.value;i?re(y)&&If(y,s):re(y)?y.includes(s)||y.push(s):d?(l[c]=[s],pe(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,pe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(p.id=-1,Ft(p,n)):p()}}}const Ft=fS;function jS(t){return zS(t)}function zS(t,e){const n=b1();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=pn,insertStaticContent:p}=t,y=(m,g,T,S=null,A=null,O=null,B=!1,D=null,M=!!g.dynamicChildren)=>{if(m===g)return;m&&!pi(m,g)&&(S=V(m),Lt(m,A,O,!0),m=null),g.patchFlag===-2&&(M=!1,g.dynamicChildren=null);const{type:N,ref:J,shapeFlag:W}=g;switch(N){case ml:b(m,g,T,S);break;case gn:v(m,g,T,S);break;case au:m==null&&_(g,T,S,B);break;case En:K(m,g,T,S,A,O,B,D,M);break;default:W&1?F(m,g,T,S,A,O,B,D,M):W&6?Ae(m,g,T,S,A,O,B,D,M):(W&64||W&128)&&N.process(m,g,T,S,A,O,B,D,M,me)}J!=null&&A&&md(J,m&&m.ref,O,g||m,!g)},b=(m,g,T,S)=>{if(m==null)r(g.el=a(g.children),T,S);else{const A=g.el=m.el;g.children!==m.children&&u(A,g.children)}},v=(m,g,T,S)=>{m==null?r(g.el=c(g.children||""),T,S):g.el=m.el},_=(m,g,T,S)=>{[m.el,m.anchor]=p(m.children,g,T,S,m.el,m.anchor)},E=({el:m,anchor:g},T,S)=>{let A;for(;m&&m!==g;)A=d(m),r(m,T,S),m=A;r(g,T,S)},R=({el:m,anchor:g})=>{let T;for(;m&&m!==g;)T=d(m),i(m),m=T;i(g)},F=(m,g,T,S,A,O,B,D,M)=>{B=B||g.type==="svg",m==null?z(g,T,S,A,O,B,D,M):oe(m,g,A,O,B,D,M)},z=(m,g,T,S,A,O,B,D)=>{let M,N;const{type:J,props:W,shapeFlag:Z,transition:se,dirs:he}=m;if(M=m.el=o(m.type,O,W&&W.is,W),Z&8?l(M,m.children):Z&16&&Q(m.children,M,null,S,A,O&&J!=="foreignObject",B,D),he&&si(m,null,S,"created"),W){for(const Ie in W)Ie!=="value"&&!ru(Ie)&&s(M,Ie,null,W[Ie],O,m.children,S,A,$);"value"in W&&s(M,"value",null,W.value),(N=W.onVnodeBeforeMount)&&_n(N,S,m)}ee(M,m,m.scopeId,B,S),he&&si(m,null,S,"beforeMount");const Se=(!A||A&&!A.pendingBranch)&&se&&!se.persisted;Se&&se.beforeEnter(M),r(M,g,T),((N=W&&W.onVnodeMounted)||Se||he)&&Ft(()=>{N&&_n(N,S,m),Se&&se.enter(M),he&&si(m,null,S,"mounted")},A)},ee=(m,g,T,S,A)=>{if(T&&f(m,T),S)for(let O=0;O<S.length;O++)f(m,S[O]);if(A){let O=A.subTree;if(g===O){const B=A.vnode;ee(m,B,B.scopeId,B.slotScopeIds,A.parent)}}},Q=(m,g,T,S,A,O,B,D,M=0)=>{for(let N=M;N<m.length;N++){const J=m[N]=D?Tr(m[N]):Tn(m[N]);y(null,J,g,T,S,A,O,B,D)}},oe=(m,g,T,S,A,O,B)=>{const D=g.el=m.el;let{patchFlag:M,dynamicChildren:N,dirs:J}=g;M|=m.patchFlag&16;const W=m.props||Ce,Z=g.props||Ce;let se;T&&oi(T,!1),(se=Z.onVnodeBeforeUpdate)&&_n(se,T,g,m),J&&si(g,m,T,"beforeUpdate"),T&&oi(T,!0);const he=A&&g.type!=="foreignObject";if(N?ve(m.dynamicChildren,N,D,T,S,he,O):B||_e(m,g,D,null,T,S,he,O,!1),M>0){if(M&16)Qe(D,g,W,Z,T,S,A);else if(M&2&&W.class!==Z.class&&s(D,"class",null,Z.class,A),M&4&&s(D,"style",W.style,Z.style,A),M&8){const Se=g.dynamicProps;for(let Ie=0;Ie<Se.length;Ie++){const Ge=Se[Ie],un=W[Ge],us=Z[Ge];(us!==un||Ge==="value")&&s(D,Ge,un,us,A,m.children,T,S,$)}}M&1&&m.children!==g.children&&l(D,g.children)}else!B&&N==null&&Qe(D,g,W,Z,T,S,A);((se=Z.onVnodeUpdated)||J)&&Ft(()=>{se&&_n(se,T,g,m),J&&si(g,m,T,"updated")},S)},ve=(m,g,T,S,A,O,B)=>{for(let D=0;D<g.length;D++){const M=m[D],N=g[D],J=M.el&&(M.type===En||!pi(M,N)||M.shapeFlag&70)?h(M.el):T;y(M,N,J,null,S,A,O,B,!0)}},Qe=(m,g,T,S,A,O,B)=>{if(T!==S){if(T!==Ce)for(const D in T)!ru(D)&&!(D in S)&&s(m,D,T[D],null,B,g.children,A,O,$);for(const D in S){if(ru(D))continue;const M=S[D],N=T[D];M!==N&&D!=="value"&&s(m,D,N,M,B,g.children,A,O,$)}"value"in S&&s(m,"value",T.value,S.value)}},K=(m,g,T,S,A,O,B,D,M)=>{const N=g.el=m?m.el:a(""),J=g.anchor=m?m.anchor:a("");let{patchFlag:W,dynamicChildren:Z,slotScopeIds:se}=g;se&&(D=D?D.concat(se):se),m==null?(r(N,T,S),r(J,T,S),Q(g.children,T,J,A,O,B,D,M)):W>0&&W&64&&Z&&m.dynamicChildren?(ve(m.dynamicChildren,Z,T,A,O,B,D),(g.key!=null||A&&g===A.subTree)&&pb(m,g,!0)):_e(m,g,T,J,A,O,B,D,M)},Ae=(m,g,T,S,A,O,B,D,M)=>{g.slotScopeIds=D,m==null?g.shapeFlag&512?A.ctx.activate(g,T,S,B,M):dt(g,T,S,A,O,B,M):pr(m,g,M)},dt=(m,g,T,S,A,O,B)=>{const D=m.component=ek(m,S,A);if(dl(m)&&(D.ctx.renderer=me),nk(D),D.asyncDep){if(A&&A.registerDep(D,Me),!m.el){const M=D.subTree=Bt(gn);v(null,M,g,T)}return}Me(D,m,g,T,A,O,B)},pr=(m,g,T)=>{const S=g.component=m.component;if(lS(m,g,T))if(S.asyncDep&&!S.asyncResolved){Te(S,g,T);return}else S.next=g,rS(S.update),S.update();else g.el=m.el,S.vnode=g},Me=(m,g,T,S,A,O,B)=>{const D=()=>{if(m.isMounted){let{next:J,bu:W,u:Z,parent:se,vnode:he}=m,Se=J,Ie;oi(m,!1),J?(J.el=he.el,Te(m,J,B)):J=he,W&&iu(W),(Ie=J.props&&J.props.onVnodeBeforeUpdate)&&_n(Ie,se,J,he),oi(m,!0);const Ge=wh(m),un=m.subTree;m.subTree=Ge,y(un,Ge,h(un.el),V(un),m,A,O),J.el=Ge.el,Se===null&&hS(m,Ge.el),Z&&Ft(Z,A),(Ie=J.props&&J.props.onVnodeUpdated)&&Ft(()=>_n(Ie,se,J,he),A)}else{let J;const{el:W,props:Z}=g,{bm:se,m:he,parent:Se}=m,Ie=ou(g);if(oi(m,!1),se&&iu(se),!Ie&&(J=Z&&Z.onVnodeBeforeMount)&&_n(J,Se,g),oi(m,!0),W&&le){const Ge=()=>{m.subTree=wh(m),le(W,m.subTree,m,A,null)};Ie?g.type.__asyncLoader().then(()=>!m.isUnmounted&&Ge()):Ge()}else{const Ge=m.subTree=wh(m);y(null,Ge,T,S,m,A,O),g.el=Ge.el}if(he&&Ft(he,A),!Ie&&(J=Z&&Z.onVnodeMounted)){const Ge=g;Ft(()=>_n(J,Se,Ge),A)}(g.shapeFlag&256||Se&&ou(Se.vnode)&&Se.vnode.shapeFlag&256)&&m.a&&Ft(m.a,A),m.isMounted=!0,g=T=S=null}},M=m.effect=new kf(D,()=>Df(N),m.scope),N=m.update=()=>M.run();N.id=m.uid,oi(m,!0),N()},Te=(m,g,T)=>{g.component=m;const S=m.vnode.props;m.vnode=g,m.next=null,FS(m,g.props,S,T),BS(m,g.children,T),ro(),tg(),io()},_e=(m,g,T,S,A,O,B,D,M=!1)=>{const N=m&&m.children,J=m?m.shapeFlag:0,W=g.children,{patchFlag:Z,shapeFlag:se}=g;if(Z>0){if(Z&128){ii(N,W,T,S,A,O,B,D,M);return}else if(Z&256){an(N,W,T,S,A,O,B,D,M);return}}se&8?(J&16&&$(N,A,O),W!==N&&l(T,W)):J&16?se&16?ii(N,W,T,S,A,O,B,D,M):$(N,A,O,!0):(J&8&&l(T,""),se&16&&Q(W,T,S,A,O,B,D,M))},an=(m,g,T,S,A,O,B,D,M)=>{m=m||Ts,g=g||Ts;const N=m.length,J=g.length,W=Math.min(N,J);let Z;for(Z=0;Z<W;Z++){const se=g[Z]=M?Tr(g[Z]):Tn(g[Z]);y(m[Z],se,T,null,A,O,B,D,M)}N>J?$(m,A,O,!0,!1,W):Q(g,T,S,A,O,B,D,M,W)},ii=(m,g,T,S,A,O,B,D,M)=>{let N=0;const J=g.length;let W=m.length-1,Z=J-1;for(;N<=W&&N<=Z;){const se=m[N],he=g[N]=M?Tr(g[N]):Tn(g[N]);if(pi(se,he))y(se,he,T,null,A,O,B,D,M);else break;N++}for(;N<=W&&N<=Z;){const se=m[W],he=g[Z]=M?Tr(g[Z]):Tn(g[Z]);if(pi(se,he))y(se,he,T,null,A,O,B,D,M);else break;W--,Z--}if(N>W){if(N<=Z){const se=Z+1,he=se<J?g[se].el:S;for(;N<=Z;)y(null,g[N]=M?Tr(g[N]):Tn(g[N]),T,he,A,O,B,D,M),N++}}else if(N>Z)for(;N<=W;)Lt(m[N],A,O,!0),N++;else{const se=N,he=N,Se=new Map;for(N=he;N<=Z;N++){const zt=g[N]=M?Tr(g[N]):Tn(g[N]);zt.key!=null&&Se.set(zt.key,N)}let Ie,Ge=0;const un=Z-he+1;let us=!1,zp=0;const Eo=new Array(un);for(N=0;N<un;N++)Eo[N]=0;for(N=se;N<=W;N++){const zt=m[N];if(Ge>=un){Lt(zt,A,O,!0);continue}let bn;if(zt.key!=null)bn=Se.get(zt.key);else for(Ie=he;Ie<=Z;Ie++)if(Eo[Ie-he]===0&&pi(zt,g[Ie])){bn=Ie;break}bn===void 0?Lt(zt,A,O,!0):(Eo[bn-he]=N+1,bn>=zp?zp=bn:us=!0,y(zt,g[bn],T,null,A,O,B,D,M),Ge++)}const Hp=us?HS(Eo):Ts;for(Ie=Hp.length-1,N=un-1;N>=0;N--){const zt=he+N,bn=g[zt],Kp=zt+1<J?g[zt+1].el:S;Eo[N]===0?y(null,bn,T,Kp,A,O,B,D,M):us&&(Ie<0||N!==Hp[Ie]?cn(bn,T,Kp,2):Ie--)}}},cn=(m,g,T,S,A=null)=>{const{el:O,type:B,transition:D,children:M,shapeFlag:N}=m;if(N&6){cn(m.component.subTree,g,T,S);return}if(N&128){m.suspense.move(g,T,S);return}if(N&64){B.move(m,g,T,me);return}if(B===En){r(O,g,T);for(let W=0;W<M.length;W++)cn(M[W],g,T,S);r(m.anchor,g,T);return}if(B===au){E(m,g,T);return}if(S!==2&&N&1&&D)if(S===0)D.beforeEnter(O),r(O,g,T),Ft(()=>D.enter(O),A);else{const{leave:W,delayLeave:Z,afterLeave:se}=D,he=()=>r(O,g,T),Se=()=>{W(O,()=>{he(),se&&se()})};Z?Z(O,he,Se):Se()}else r(O,g,T)},Lt=(m,g,T,S=!1,A=!1)=>{const{type:O,props:B,ref:D,children:M,dynamicChildren:N,shapeFlag:J,patchFlag:W,dirs:Z}=m;if(D!=null&&md(D,null,T,m,!0),J&256){g.ctx.deactivate(m);return}const se=J&1&&Z,he=!ou(m);let Se;if(he&&(Se=B&&B.onVnodeBeforeUnmount)&&_n(Se,g,m),J&6)k(m.component,T,S);else{if(J&128){m.suspense.unmount(T,S);return}se&&si(m,null,g,"beforeUnmount"),J&64?m.type.remove(m,g,T,A,me,S):N&&(O!==En||W>0&&W&64)?$(N,g,T,!1,!0):(O===En&&W&384||!A&&J&16)&&$(M,g,T),S&&cs(m)}(he&&(Se=B&&B.onVnodeUnmounted)||se)&&Ft(()=>{Se&&_n(Se,g,m),se&&si(m,null,g,"unmounted")},T)},cs=m=>{const{type:g,el:T,anchor:S,transition:A}=m;if(g===En){Ac(T,S);return}if(g===au){R(m);return}const O=()=>{i(T),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(m.shapeFlag&1&&A&&!A.persisted){const{leave:B,delayLeave:D}=A,M=()=>B(T,O);D?D(m.el,O,M):M()}else O()},Ac=(m,g)=>{let T;for(;m!==g;)T=d(m),i(m),m=T;i(g)},k=(m,g,T)=>{const{bum:S,scope:A,update:O,subTree:B,um:D}=m;S&&iu(S),A.stop(),O&&(O.active=!1,Lt(B,m,g,T)),D&&Ft(D,g),Ft(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},$=(m,g,T,S=!1,A=!1,O=0)=>{for(let B=O;B<m.length;B++)Lt(m[B],g,T,S,A)},V=m=>m.shapeFlag&6?V(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),X=(m,g,T)=>{m==null?g._vnode&&Lt(g._vnode,null,null,!0):y(g._vnode||null,m,g,null,null,null,T),tg(),Yw(),g._vnode=m},me={p:y,um:Lt,m:cn,r:cs,mt:dt,mc:Q,pc:_e,pbc:ve,n:V,o:t};let Fe,le;return e&&([Fe,le]=e(me)),{render:X,hydrate:Fe,createApp:qS(X,Fe)}}function oi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pb(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Tr(i[s]),a.el=o.el),n||pb(o,a)),a.type===ml&&(a.el=o.el)}}function HS(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const KS=t=>t.__isTeleport,En=Symbol(void 0),ml=Symbol(void 0),gn=Symbol(void 0),au=Symbol(void 0),Wo=[];let dn=null;function gb(t=!1){Wo.push(dn=t?null:[])}function WS(){Wo.pop(),dn=Wo[Wo.length-1]||null}let pa=1;function hg(t){pa+=t}function yb(t){return t.dynamicChildren=pa>0?dn||Ts:null,WS(),pa>0&&dn&&dn.push(t),t}function S$(t,e,n,r,i,s){return yb(bb(t,e,n,r,i,s,!0))}function vb(t,e,n,r,i){return yb(Bt(t,e,n,r,i,!0))}function pd(t){return t?t.__v_isVNode===!0:!1}function pi(t,e){return t.type===e.type&&t.key===e.key}const pl="__vInternal",wb=({key:t})=>t!=null?t:null,cu=({ref:t,ref_key:e,ref_for:n})=>t!=null?Je(t)||It(t)||ue(t)?{i:Kt,r:t,k:e,f:!!n}:t:null;function bb(t,e=null,n=null,r=0,i=null,s=t===En?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wb(e),ref:e&&cu(e),scopeId:hl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Kt};return a?(Mf(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),pa>0&&!o&&dn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&dn.push(c),c}const Bt=GS;function GS(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===CS)&&(t=gn),pd(t)){const a=Lr(t,e,!0);return n&&Mf(a,n),pa>0&&!s&&dn&&(a.shapeFlag&6?dn[dn.indexOf(t)]=a:dn.push(a)),a.patchFlag|=-2,a}if(ak(t)&&(t=t.__vccOpts),e){e=YS(e);let{class:a,style:c}=e;a&&!Je(a)&&(e.class=bf(a)),Pe(c)&&(Vw(c)&&!re(c)&&(c=vt({},c)),e.style=wf(c))}const o=Je(t)?1:dS(t)?128:KS(t)?64:Pe(t)?4:ue(t)?2:0;return bb(t,e,n,r,i,o,s,!0)}function YS(t){return t?Vw(t)||pl in t?vt({},t):t:null}function Lr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?XS(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wb(a),ref:e&&e.ref?n&&i?re(i)?i.concat(cu(e)):[i,cu(e)]:cu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==En?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lr(t.ssContent),ssFallback:t.ssFallback&&Lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function QS(t=" ",e=0){return Bt(ml,null,t,e)}function k$(t,e){const n=Bt(au,null,t);return n.staticCount=e,n}function A$(t="",e=!1){return e?(gb(),vb(gn,null,t)):Bt(gn,null,t)}function Tn(t){return t==null||typeof t=="boolean"?Bt(gn):re(t)?Bt(En,null,t.slice()):typeof t=="object"?Tr(t):Bt(ml,null,String(t))}function Tr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lr(t)}function Mf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Mf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(pl in e)?e._ctx=Kt:i===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Kt},n=32):(e=String(e),r&64?(n=16,e=[QS(e)]):n=8);t.children=e,t.shapeFlag|=n}function XS(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=bf([e.class,r.class]));else if(i==="style")e.style=wf([e.style,r.style]);else if(il(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function _n(t,e,n,r=null){nn(t,e,7,[n,r])}const JS=mb();let ZS=0;function ek(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||JS,s={uid:ZS++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lb(r,i),emitsOptions:Xw(r,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=oS.bind(null,s),t.ce&&t.ce(s),s}let it=null;const tk=()=>it||Kt,Us=t=>{it=t,t.scope.on()},Ni=()=>{it&&it.scope.off(),it=null};function _b(t){return t.vnode.shapeFlag&4}let ga=!1;function nk(t,e=!1){ga=e;const{props:n,children:r}=t.vnode,i=_b(t);MS(t,n,i,e),VS(t,r);const s=i?rk(t,e):void 0;return ga=!1,s}function rk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bw(new Proxy(t.ctx,RS));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?sk(t):null;Us(t),ro();const s=Nr(r,t,0,[t.props,i]);if(io(),Ni(),Sw(s)){if(s.then(Ni,Ni),e)return s.then(o=>{dg(t,o,e)}).catch(o=>{ul(o,t,0)});t.asyncDep=s}else dg(t,s,e)}else Ib(t,e)}function dg(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=zw(e)),Ib(t,n)}let fg;function Ib(t,e,n){const r=t.type;if(!t.render){if(!e&&fg&&!r.render){const i=r.template||Of(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=vt(vt({isCustomElement:s,delimiters:a},o),c);r.render=fg(i,u)}}t.render=r.render||pn}Us(t),ro(),NS(t),io(),Ni()}function ik(t){return new Proxy(t.attrs,{get(e,n){return Yt(t,"get","$attrs"),e[n]}})}function sk(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ik(t))},slots:t.slots,emit:t.emit,expose:e}}function gl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zw(Bw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ko)return Ko[n](t)},has(e,n){return n in e||n in Ko}}))}function ok(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function ak(t){return ue(t)&&"__vccOpts"in t}const Ue=(t,e)=>eS(t,e,ga);function Ja(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!re(e)?pd(e)?Bt(t,null,[e]):Bt(t,e):Bt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pd(n)&&(n=[n]),Bt(t,e,n))}const ck=Symbol(""),uk=()=>Mn(ck),lk="3.2.45",hk="http://www.w3.org/2000/svg",gi=typeof document<"u"?document:null,mg=gi&&gi.createElement("template"),dk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?gi.createElementNS(hk,t):gi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>gi.createTextNode(t),createComment:t=>gi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{mg.innerHTML=r?`<svg>${t}</svg>`:t;const a=mg.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function fk(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mk(t,e,n){const r=t.style,i=Je(n);if(n&&!i){for(const s in n)gd(r,s,n[s]);if(e&&!Je(e))for(const s in e)n[s]==null&&gd(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const pg=/\s*!important$/;function gd(t,e,n){if(re(n))n.forEach(r=>gd(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pk(t,e);pg.test(n)?t.setProperty(no(r),n.replace(pg,""),"important"):t[r]=n}}const gg=["Webkit","Moz","ms"],Ih={};function pk(t,e){const n=Ih[e];if(n)return n;let r=Bn(e);if(r!=="filter"&&r in t)return Ih[e]=r;r=al(r);for(let i=0;i<gg.length;i++){const s=gg[i]+r;if(s in t)return Ih[e]=s}return e}const yg="http://www.w3.org/1999/xlink";function gk(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yg,e.slice(6,e.length)):t.setAttributeNS(yg,e,n);else{const s=f1(e);n==null||s&&!Iw(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function yk(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Iw(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function gs(t,e,n,r){t.addEventListener(e,n,r)}function vk(t,e,n,r){t.removeEventListener(e,n,r)}function wk(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=bk(e);if(r){const u=s[e]=Ek(r,i);gs(t,a,u,c)}else o&&(vk(t,a,o,c),s[e]=void 0)}}const vg=/(?:Once|Passive|Capture)$/;function bk(t){let e;if(vg.test(t)){e={};let r;for(;r=t.match(vg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):no(t.slice(2)),e]}let Eh=0;const _k=Promise.resolve(),Ik=()=>Eh||(_k.then(()=>Eh=0),Eh=Date.now());function Ek(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn(Tk(r,n.value),e,5,[r])};return n.value=t,n.attached=Ik(),n}function Tk(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const wg=/^on[a-z]/,Sk=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?fk(t,r,i):e==="style"?mk(t,n,r):il(e)?_f(e)||wk(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kk(t,e,r,i))?yk(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gk(t,e,r,i))};function kk(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wg.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wg.test(e)&&Je(n)?!1:e in t}const yr="transition",To="animation",Eb=(t,{slots:e})=>Ja(eb,Ak(t),e);Eb.displayName="Transition";const Tb={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Eb.props=vt({},eb.props,Tb);const ai=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},bg=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function Ak(t){const e={};for(const K in t)K in Tb||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=Ck(i),y=p&&p[0],b=p&&p[1],{onBeforeEnter:v,onEnter:_,onEnterCancelled:E,onLeave:R,onLeaveCancelled:F,onBeforeAppear:z=v,onAppear:ee=_,onAppearCancelled:Q=E}=e,oe=(K,Ae,dt)=>{ci(K,Ae?l:a),ci(K,Ae?u:o),dt&&dt()},ve=(K,Ae)=>{K._isLeaving=!1,ci(K,h),ci(K,f),ci(K,d),Ae&&Ae()},Qe=K=>(Ae,dt)=>{const pr=K?ee:_,Me=()=>oe(Ae,K,dt);ai(pr,[Ae,Me]),_g(()=>{ci(Ae,K?c:s),vr(Ae,K?l:a),bg(pr)||Ig(Ae,r,y,Me)})};return vt(e,{onBeforeEnter(K){ai(v,[K]),vr(K,s),vr(K,o)},onBeforeAppear(K){ai(z,[K]),vr(K,c),vr(K,u)},onEnter:Qe(!1),onAppear:Qe(!0),onLeave(K,Ae){K._isLeaving=!0;const dt=()=>ve(K,Ae);vr(K,h),Nk(),vr(K,d),_g(()=>{!K._isLeaving||(ci(K,h),vr(K,f),bg(R)||Ig(K,r,b,dt))}),ai(R,[K,dt])},onEnterCancelled(K){oe(K,!1),ai(E,[K])},onAppearCancelled(K){oe(K,!0),ai(Q,[K])},onLeaveCancelled(K){ve(K),ai(F,[K])}})}function Ck(t){if(t==null)return null;if(Pe(t))return[Th(t.enter),Th(t.leave)];{const e=Th(t);return[e,e]}}function Th(t){return ha(t)}function vr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ci(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function _g(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xk=0;function Ig(t,e,n,r){const i=t._endId=++xk,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Rk(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function Rk(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${yr}Delay`),s=r(`${yr}Duration`),o=Eg(i,s),a=r(`${To}Delay`),c=r(`${To}Duration`),u=Eg(a,c);let l=null,h=0,d=0;e===yr?o>0&&(l=yr,h=o,d=s.length):e===To?u>0&&(l=To,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?yr:To:null,d=l?l===yr?s.length:c.length:0);const f=l===yr&&/\b(transform|all)(,|$)/.test(r(`${yr}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function Eg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Tg(n)+Tg(t[r])))}function Tg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Nk(){return document.body.offsetHeight}const Sg=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>iu(e,n):e};function Pk(t){t.target.composing=!0}function kg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const C$={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Sg(i);const s=r||i.props&&i.props.type==="number";gs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=ha(a)),t._assign(a)}),n&&gs(t,"change",()=>{t.value=t.value.trim()}),e||(gs(t,"compositionstart",Pk),gs(t,"compositionend",kg),gs(t,"change",kg))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Sg(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&ha(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Dk=["ctrl","shift","alt","meta"],Ok={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Dk.some(n=>t[`${n}Key`]&&!e.includes(n))},x$=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Ok[e[i]];if(s&&s(n,e))return}return t(n,...r)},Lk=vt({patchProp:Sk},dk);let Ag;function Mk(){return Ag||(Ag=jS(Lk))}const Fk=(...t)=>{const e=Mk().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Uk(r);if(!i)return;const s=e._component;!ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Uk(t){return Je(t)?document.querySelector(t):t}const Vk=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Bk={};function $k(t,e){const n=AS("router-view");return gb(),vb(n)}const qk=Vk(Bk,[["render",$k]]),jk="modulepreload",zk=function(t){return"/engranaphic_page/"+t},Cg={},Oc=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=zk(s),s in Cg)return;Cg[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":jk,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof window<"u";function Hk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Sh(t,e){const n={};for(const r in e){const i=e[r];n[r]=vn(i)?i.map(t):t(i)}return n}const Go=()=>{},vn=Array.isArray,Kk=/\/$/,Wk=t=>t.replace(Kk,"");function kh(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Xk(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Gk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yk(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Vs(e.matched[r],n.matched[i])&&Sb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qk(t[n],e[n]))return!1;return!0}function Qk(t,e){return vn(t)?Rg(t,e):vn(e)?Rg(e,t):t===e}function Rg(t,e){return vn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Xk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var ya;(function(t){t.pop="pop",t.push="push"})(ya||(ya={}));var Yo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yo||(Yo={}));function Jk(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wk(t)}const Zk=/^[^#]+#/;function eA(t,e){return t.replace(Zk,"#")+e}function tA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const yl=()=>({left:window.pageXOffset,top:window.pageYOffset});function nA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=tA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ng(t,e){return(history.state?history.state.position-e:-1)+t}const yd=new Map;function rA(t,e){yd.set(t,e)}function iA(t){const e=yd.get(t);return yd.delete(t),e}let sA=()=>location.protocol+"//"+location.host;function kb(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),xg(c,"")}return xg(n,t)+r+i}function oA(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=kb(t,location),p=n.value,y=e.value;let b=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}b=y?d.position-y.position:0}else r(f);i.forEach(v=>{v(n.value,p,{delta:b,type:ya.pop,direction:b?b>0?Yo.forward:Yo.back:Yo.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(be({},d.state,{scroll:yl()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Pg(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?yl():null}}function aA(t){const{history:e,location:n}=window,r={value:kb(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:sA()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=be({},e.state,Pg(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=be({},i.value,e.state,{forward:c,scroll:yl()});s(l.current,l,!0);const h=be({},Pg(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function cA(t){t=Jk(t);const e=aA(t),n=oA(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=be({location:"",base:t,go:r,createHref:eA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function uA(t){return typeof t=="string"||t&&typeof t=="object"}function Ab(t){return typeof t=="string"||typeof t=="symbol"}const wr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cb=Symbol("");var Dg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dg||(Dg={}));function Bs(t,e){return be(new Error,{type:t,[Cb]:!0},e)}function zn(t,e){return t instanceof Error&&Cb in t&&(e==null||!!(t.type&e))}const Og="[^/]+?",lA={sensitive:!1,strict:!1,start:!0,end:!0},hA=/[.+*?^${}()[\]/\\]/g;function dA(t,e){const n=be({},lA,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(hA,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:y,optional:b,regexp:v}=d;s.push({name:p,repeatable:y,optional:b});const _=v||Og;if(_!==Og){f+=10;try{new RegExp(`(${_})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${p}" (${_}): `+R.message)}}let E=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(E=b&&u.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),i+=E,f+=20,b&&(f+=-8),y&&(f+=-20),_===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:p,repeatable:y,optional:b}=f,v=p in u?u[p]:"";if(vn(v)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const _=vn(v)?v.join("/"):v;if(!_)if(b)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);l+=_}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function fA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mA(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=fA(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Lg(r))return 1;if(Lg(i))return-1}return i.length-r.length}function Lg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pA={type:0,value:""},gA=/[a-zA-Z0-9_]/;function yA(t){if(!t)return[[]];if(t==="/")return[[pA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:gA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function vA(t,e,n){const r=dA(yA(t.path),n),i=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function wA(t,e){const n=[],r=new Map;e=Ug({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,p=bA(l);p.aliasOf=d&&d.record;const y=Ug(e,l),b=[p];if("alias"in l){const E=typeof l.alias=="string"?[l.alias]:l.alias;for(const R of E)b.push(be({},p,{components:d?d.record.components:p.components,path:R,aliasOf:d?d.record:p}))}let v,_;for(const E of b){const{path:R}=E;if(h&&R[0]!=="/"){const F=h.record.path,z=F[F.length-1]==="/"?"":"/";E.path=h.record.path+(R&&z+R)}if(v=vA(E,h,y),d?d.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),f&&l.name&&!Fg(v)&&o(l.name)),p.children){const F=p.children;for(let z=0;z<F.length;z++)s(F[z],v,d&&d.children[z])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return _?()=>{o(_)}:Go}function o(l){if(Ab(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&mA(l,n[h])>=0&&(l.record.path!==n[h].record.path||!xb(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Fg(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},p,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Bs(1,{location:l});y=d.record.name,f=be(Mg(h.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),l.params&&Mg(l.params,d.keys.map(_=>_.name))),p=d.stringify(f)}else if("path"in l)p=l.path,d=n.find(_=>_.re.test(p)),d&&(f=d.parse(p),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw Bs(1,{location:l,currentLocation:h});y=d.record.name,f=be({},h.params,l.params),p=d.stringify(f)}const b=[];let v=d;for(;v;)b.unshift(v.record),v=v.parent;return{name:y,path:p,params:f,matched:b,meta:IA(b)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Mg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_A(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _A(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Fg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function IA(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Ug(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xb(t,e){return e.children.some(n=>n===t||xb(t,n))}const Rb=/#/g,EA=/&/g,TA=/\//g,SA=/=/g,kA=/\?/g,Nb=/\+/g,AA=/%5B/g,CA=/%5D/g,Pb=/%5E/g,xA=/%60/g,Db=/%7B/g,RA=/%7C/g,Ob=/%7D/g,NA=/%20/g;function Ff(t){return encodeURI(""+t).replace(RA,"|").replace(AA,"[").replace(CA,"]")}function PA(t){return Ff(t).replace(Db,"{").replace(Ob,"}").replace(Pb,"^")}function vd(t){return Ff(t).replace(Nb,"%2B").replace(NA,"+").replace(Rb,"%23").replace(EA,"%26").replace(xA,"`").replace(Db,"{").replace(Ob,"}").replace(Pb,"^")}function DA(t){return vd(t).replace(SA,"%3D")}function OA(t){return Ff(t).replace(Rb,"%23").replace(kA,"%3F")}function LA(t){return t==null?"":OA(t).replace(TA,"%2F")}function Tu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function MA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Nb," "),o=s.indexOf("="),a=Tu(o<0?s:s.slice(0,o)),c=o<0?null:Tu(s.slice(o+1));if(a in e){let u=e[a];vn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Vg(t){let e="";for(let n in t){const r=t[n];if(n=DA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(r)?r.map(s=>s&&vd(s)):[r&&vd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function FA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=vn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const UA=Symbol(""),Bg=Symbol(""),vl=Symbol(""),Lb=Symbol(""),wd=Symbol("");function So(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Sr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Bs(4,{from:n,to:e})):h instanceof Error?a(h):uA(h)?a(Bs(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ah(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(VA(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Sr(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=Hk(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Sr(d,n,r,s,o)()}))}}return i}function VA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $g(t){const e=Mn(vl),n=Mn(Lb),r=Ue(()=>e.resolve(As(t.to))),i=Ue(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Vs.bind(null,l));if(d>-1)return d;const f=qg(c[u-2]);return u>1&&qg(l)===f&&h[h.length-1].path!==f?h.findIndex(Vs.bind(null,c[u-2])):d}),s=Ue(()=>i.value>-1&&jA(n.params,r.value.params)),o=Ue(()=>i.value>-1&&i.value===n.matched.length-1&&Sb(n.params,r.value.params));function a(c={}){return qA(c)?e[As(t.replace)?"replace":"push"](As(t.to)).catch(Go):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const BA=Xa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$g,setup(t,{slots:e}){const n=Qa($g(t)),{options:r}=Mn(vl),i=Ue(()=>({[jg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ja("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),$A=BA;function qA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jA(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!vn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function qg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jg=(t,e,n)=>t!=null?t:e!=null?e:n,zA=Xa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Mn(wd),i=Ue(()=>t.route||r.value),s=Mn(Bg,0),o=Ue(()=>{let u=As(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Ue(()=>i.value.matched[o.value]);su(Bg,Ue(()=>o.value+1)),su(UA,a),su(wd,i);const c=Y1();return Ho(()=>[c.value,a.value,t.name],([u,l,h],[d,f,p])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Vs(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return zg(n.default,{Component:d,route:u});const f=h.props[l],p=f?f===!0?u.params:typeof f=="function"?f(u):f:null,b=Ja(d,be({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return zg(n.default,{Component:b,route:u})||b}}});function zg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const HA=zA;function KA(t){const e=wA(t.routes,t),n=t.parseQuery||MA,r=t.stringifyQuery||Vg,i=t.history,s=So(),o=So(),a=So(),c=Q1(wr);let u=wr;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Sh.bind(null,k=>""+k),h=Sh.bind(null,LA),d=Sh.bind(null,Tu);function f(k,$){let V,X;return Ab(k)?(V=e.getRecordMatcher(k),X=$):X=k,e.addRoute(X,V)}function p(k){const $=e.getRecordMatcher(k);$&&e.removeRoute($)}function y(){return e.getRoutes().map(k=>k.record)}function b(k){return!!e.getRecordMatcher(k)}function v(k,$){if($=be({},$||c.value),typeof k=="string"){const m=kh(n,k,$.path),g=e.resolve({path:m.path},$),T=i.createHref(m.fullPath);return be(m,g,{params:d(g.params),hash:Tu(m.hash),redirectedFrom:void 0,href:T})}let V;if("path"in k)V=be({},k,{path:kh(n,k.path,$.path).path});else{const m=be({},k.params);for(const g in m)m[g]==null&&delete m[g];V=be({},k,{params:h(k.params)}),$.params=h($.params)}const X=e.resolve(V,$),me=k.hash||"";X.params=l(d(X.params));const Fe=Gk(r,be({},k,{hash:PA(me),path:X.path})),le=i.createHref(Fe);return be({fullPath:Fe,hash:me,query:r===Vg?FA(k.query):k.query||{}},X,{redirectedFrom:void 0,href:le})}function _(k){return typeof k=="string"?kh(n,k,c.value.path):be({},k)}function E(k,$){if(u!==k)return Bs(8,{from:$,to:k})}function R(k){return ee(k)}function F(k){return R(be(_(k),{replace:!0}))}function z(k){const $=k.matched[k.matched.length-1];if($&&$.redirect){const{redirect:V}=$;let X=typeof V=="function"?V(k):V;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=_(X):{path:X},X.params={}),be({query:k.query,hash:k.hash,params:"path"in X?{}:k.params},X)}}function ee(k,$){const V=u=v(k),X=c.value,me=k.state,Fe=k.force,le=k.replace===!0,m=z(V);if(m)return ee(be(_(m),{state:typeof m=="object"?be({},me,m.state):me,force:Fe,replace:le}),$||V);const g=V;g.redirectedFrom=$;let T;return!Fe&&Yk(r,X,V)&&(T=Bs(16,{to:g,from:X}),ii(X,X,!0,!1)),(T?Promise.resolve(T):oe(g,X)).catch(S=>zn(S)?zn(S,2)?S:an(S):Te(S,g,X)).then(S=>{if(S){if(zn(S,2))return ee(be({replace:le},_(S.to),{state:typeof S.to=="object"?be({},me,S.to.state):me,force:Fe}),$||g)}else S=Qe(g,X,!0,le,me);return ve(g,X,S),S})}function Q(k,$){const V=E(k,$);return V?Promise.reject(V):Promise.resolve()}function oe(k,$){let V;const[X,me,Fe]=WA(k,$);V=Ah(X.reverse(),"beforeRouteLeave",k,$);for(const m of X)m.leaveGuards.forEach(g=>{V.push(Sr(g,k,$))});const le=Q.bind(null,k,$);return V.push(le),ls(V).then(()=>{V=[];for(const m of s.list())V.push(Sr(m,k,$));return V.push(le),ls(V)}).then(()=>{V=Ah(me,"beforeRouteUpdate",k,$);for(const m of me)m.updateGuards.forEach(g=>{V.push(Sr(g,k,$))});return V.push(le),ls(V)}).then(()=>{V=[];for(const m of k.matched)if(m.beforeEnter&&!$.matched.includes(m))if(vn(m.beforeEnter))for(const g of m.beforeEnter)V.push(Sr(g,k,$));else V.push(Sr(m.beforeEnter,k,$));return V.push(le),ls(V)}).then(()=>(k.matched.forEach(m=>m.enterCallbacks={}),V=Ah(Fe,"beforeRouteEnter",k,$),V.push(le),ls(V))).then(()=>{V=[];for(const m of o.list())V.push(Sr(m,k,$));return V.push(le),ls(V)}).catch(m=>zn(m,8)?m:Promise.reject(m))}function ve(k,$,V){for(const X of a.list())X(k,$,V)}function Qe(k,$,V,X,me){const Fe=E(k,$);if(Fe)return Fe;const le=$===wr,m=ys?history.state:{};V&&(X||le?i.replace(k.fullPath,be({scroll:le&&m&&m.scroll},me)):i.push(k.fullPath,me)),c.value=k,ii(k,$,V,le),an()}let K;function Ae(){K||(K=i.listen((k,$,V)=>{if(!Ac.listening)return;const X=v(k),me=z(X);if(me){ee(be(me,{replace:!0}),X).catch(Go);return}u=X;const Fe=c.value;ys&&rA(Ng(Fe.fullPath,V.delta),yl()),oe(X,Fe).catch(le=>zn(le,12)?le:zn(le,2)?(ee(le.to,X).then(m=>{zn(m,20)&&!V.delta&&V.type===ya.pop&&i.go(-1,!1)}).catch(Go),Promise.reject()):(V.delta&&i.go(-V.delta,!1),Te(le,X,Fe))).then(le=>{le=le||Qe(X,Fe,!1),le&&(V.delta&&!zn(le,8)?i.go(-V.delta,!1):V.type===ya.pop&&zn(le,20)&&i.go(-1,!1)),ve(X,Fe,le)}).catch(Go)}))}let dt=So(),pr=So(),Me;function Te(k,$,V){an(k);const X=pr.list();return X.length?X.forEach(me=>me(k,$,V)):console.error(k),Promise.reject(k)}function _e(){return Me&&c.value!==wr?Promise.resolve():new Promise((k,$)=>{dt.add([k,$])})}function an(k){return Me||(Me=!k,Ae(),dt.list().forEach(([$,V])=>k?V(k):$()),dt.reset()),k}function ii(k,$,V,X){const{scrollBehavior:me}=t;if(!ys||!me)return Promise.resolve();const Fe=!V&&iA(Ng(k.fullPath,0))||(X||!V)&&history.state&&history.state.scroll||null;return Ww().then(()=>me(k,$,Fe)).then(le=>le&&nA(le)).catch(le=>Te(le,k,$))}const cn=k=>i.go(k);let Lt;const cs=new Set,Ac={currentRoute:c,listening:!0,addRoute:f,removeRoute:p,hasRoute:b,getRoutes:y,resolve:v,options:t,push:R,replace:F,go:cn,back:()=>cn(-1),forward:()=>cn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:pr.add,isReady:_e,install(k){const $=this;k.component("RouterLink",$A),k.component("RouterView",HA),k.config.globalProperties.$router=$,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>As(c)}),ys&&!Lt&&c.value===wr&&(Lt=!0,R(i.location).catch(me=>{}));const V={};for(const me in wr)V[me]=Ue(()=>c.value[me]);k.provide(vl,$),k.provide(Lb,Qa(V)),k.provide(wd,c);const X=k.unmount;cs.add(k),k.unmount=function(){cs.delete(k),cs.size<1&&(u=wr,K&&K(),K=null,c.value=wr,Lt=!1,Me=!1),X()}}};return Ac}function ls(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function WA(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Vs(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Vs(u,c))||i.push(c))}return[n,r,i]}function R$(){return Mn(vl)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},YA=function(t){const e=Mb(t);return Fb.encodeByteArray(e,!0)},Su=function(t){return YA(t).replace(/\./g,"")},Ub=function(t){try{return Fb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ku(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!QA(n)||(t[n]=ku(t[n],e[n]));return t}function QA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function wl(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JA(){return typeof self=="object"&&self.self===self}function Vb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bb(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZA(){return!wl()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function va(){return typeof indexedDB=="object"}function eC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function tC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=()=>tC().__FIREBASE_DEFAULTS__,rC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ub(t[1]);return e&&JSON.parse(e)},$b=()=>{try{return nC()||rC()||iC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sC=()=>{var t;return(t=$b())===null||t===void 0?void 0:t.config},oC=t=>{var e;return(e=$b())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Su(JSON.stringify(n)),Su(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cC,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,a,r)}}function uC(t,e){return t.replace(lC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kg(s)&&Kg(o)){if(!bd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Uo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jb(t,e){const n=new dC(t,e);return n.subscribe.bind(n)}class dC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ch),i.error===void 0&&(i.error=Ch),i.complete===void 0&&(i.complete=Ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ch(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gC(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pC(t){return t===di?void 0:t}function gC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=[];var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const zb={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},vC=ge.INFO,wC={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},bC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=vC,this._logHandler=bC,this._userLogHandler=null,Vf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}function _C(t){Vf.forEach(e=>{e.setLogLevel(t)})}function IC(t,e){for(const n of Vf){let r=null;e&&e.level&&(r=zb[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ge[s].toLowerCase(),message:a,args:o,type:i.name})}}}const EC=(t,e)=>e.some(n=>t instanceof n);let Wg,Gg;function TC(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SC(){return Gg||(Gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hb=new WeakMap,_d=new WeakMap,Kb=new WeakMap,xh=new WeakMap,Bf=new WeakMap;function kC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hb.set(n,t)}).catch(()=>{}),Bf.set(e,t),e}function AC(t){if(_d.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_d.set(t,e)}let Id={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CC(t){Id=t(Id)}function xC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rh(this),e,...n);return Kb.set(r,e.sort?e.sort():[e]),Pr(r)}:SC().includes(t)?function(...e){return t.apply(Rh(this),e),Pr(Hb.get(this))}:function(...e){return Pr(t.apply(Rh(this),e))}}function RC(t){return typeof t=="function"?xC(t):(t instanceof IDBTransaction&&AC(t),EC(t,TC())?new Proxy(t,Id):t)}function Pr(t){if(t instanceof IDBRequest)return kC(t);if(xh.has(t))return xh.get(t);const e=RC(t);return e!==t&&(xh.set(t,e),Bf.set(e,t)),e}const Rh=t=>Bf.get(t);function NC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pr(o.result),c.oldVersion,c.newVersion,Pr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const PC=["get","getKey","getAll","getAllKeys","count"],DC=["put","add","delete","clear"],Nh=new Map;function Yg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nh.get(e))return Nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PC.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Nh.set(e,s),s}CC(t=>({...t,get:(e,n,r)=>Yg(e,n)||t.get(e,n,r),has:(e,n)=>!!Yg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ed="@firebase/app",Qg="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new bl("@firebase/app"),MC="@firebase/app-compat",FC="@firebase/analytics-compat",UC="@firebase/analytics",VC="@firebase/app-check-compat",BC="@firebase/app-check",$C="@firebase/auth",qC="@firebase/auth-compat",jC="@firebase/database",zC="@firebase/database-compat",HC="@firebase/functions",KC="@firebase/functions-compat",WC="@firebase/installations",GC="@firebase/installations-compat",YC="@firebase/messaging",QC="@firebase/messaging-compat",XC="@firebase/performance",JC="@firebase/performance-compat",ZC="@firebase/remote-config",ex="@firebase/remote-config-compat",tx="@firebase/storage",nx="@firebase/storage-compat",rx="@firebase/firestore",ix="@firebase/firestore-compat",sx="firebase",ox="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]",ax={[Ed]:"fire-core",[MC]:"fire-core-compat",[UC]:"fire-analytics",[FC]:"fire-analytics-compat",[BC]:"fire-app-check",[VC]:"fire-app-check-compat",[$C]:"fire-auth",[qC]:"fire-auth-compat",[jC]:"fire-rtdb",[zC]:"fire-rtdb-compat",[HC]:"fire-fn",[KC]:"fire-fn-compat",[WC]:"fire-iid",[GC]:"fire-iid-compat",[YC]:"fire-fcm",[QC]:"fire-fcm-compat",[XC]:"fire-perf",[JC]:"fire-perf-compat",[ZC]:"fire-rc",[ex]:"fire-rc-compat",[tx]:"fire-gcs",[nx]:"fire-gcs-compat",[rx]:"fire-fst",[ix]:"fire-fst-compat","fire-js":"fire-js",[sx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map,wa=new Map;function Au(t,e){try{t.container.addComponent(e)}catch(n){Fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wb(t,e){t.container.addOrOverwriteComponent(e)}function er(t){const e=t.name;if(wa.has(e))return Fi.debug(`There were multiple attempts to register component ${e}.`),!1;wa.set(e,t);for(const n of Fr.values())Au(n,t);return!0}function Gb(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cx(t,e,n=Mr){Gb(t,e).clearInstance(n)}function ux(){wa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new Zi("app","Firebase",lx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=ox;function $f(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=sC()),!n)throw Qn.create("no-options");const s=Fr.get(i);if(s){if(bd(n,s.options)&&bd(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new yC(i);for(const c of wa.values())o.addComponent(c);const a=new hx(n,r,o);return Fr.set(i,a),a}function dx(t=Mr){const e=Fr.get(t);if(!e&&t===Mr)return $f();if(!e)throw Qn.create("no-app",{appName:t});return e}function fx(){return Array.from(Fr.values())}async function Yb(t){const e=t.name;Fr.has(e)&&(Fr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function rn(t,e,n){var r;let i=(r=ax[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fi.warn(a.join(" "));return}er(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Qb(t,e){if(t!==null&&typeof t!="function")throw Qn.create("invalid-log-argument");IC(t,e)}function Xb(t){_C(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="firebase-heartbeat-database",px=1,ba="firebase-heartbeat-store";let Ph=null;function Jb(){return Ph||(Ph=NC(mx,px,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ba)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Ph}async function gx(t){var e;try{return(await Jb()).transaction(ba).objectStore(ba).get(Zb(t))}catch(n){if(n instanceof Tt)Fi.warn(n.message);else{const r=Qn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Fi.warn(r.message)}}}async function Xg(t,e){var n;try{const i=(await Jb()).transaction(ba,"readwrite");return await i.objectStore(ba).put(e,Zb(t)),i.done}catch(r){if(r instanceof Tt)Fi.warn(r.message);else{const i=Qn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Fi.warn(i.message)}}}function Zb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=1024,vx=30*24*60*60*1e3;class wx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _x(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jg(),{heartbeatsToSend:n,unsentEntries:r}=bx(this._heartbeatsCache.heartbeats),i=Su(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jg(){return new Date().toISOString().substring(0,10)}function bx(t,e=yx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _x{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return va()?eC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zg(t){return Su(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){er(new sn("platform-logger",e=>new OC(e),"PRIVATE")),er(new sn("heartbeat",e=>new wx(e),"PRIVATE")),rn(Ed,Qg,t),rn(Ed,Qg,"esm2017"),rn("fire-js","")}Ix("");const Ex=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Yr,_DEFAULT_ENTRY_NAME:Mr,_addComponent:Au,_addOrOverwriteComponent:Wb,_apps:Fr,_clearComponents:ux,_components:wa,_getProvider:Gb,_registerComponent:er,_removeServiceInstance:cx,deleteApp:Yb,getApp:dx,getApps:fx,initializeApp:$f,onLog:Qb,registerVersion:rn,setLogLevel:Xb,FirebaseError:Tt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n){this._delegate=e,this.firebase=n,Au(e,new sn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Yb(this._delegate)))}_getService(e,n=Mr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Mr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Au(this._delegate,e)}_addOrOverwriteComponent(e){Wb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},ey=new Zi("app-compat","Firebase",Sx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:rn,setLogLevel:Xb,onLog:Qb,apps:null,SDK_VERSION:Yr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Ex}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Mr,!Hg(e,u))throw ey.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=$f(u,l);if(Hg(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(er(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw ey.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&ku(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(){const t=kx(Tx);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e_,extendNamespace:e,createSubscribe:jb,ErrorFactory:Zi,deepExtend:ku});function e(n){ku(t,n)}return t}const Ax=e_();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new bl("@firebase/app-compat"),Cx="@firebase/app-compat",xx="0.1.39";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){rn(Cx,xx,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(JA()&&self.firebase!==void 0){ty.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&ty.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const es=Ax;Rx();var Nx="firebase",Px="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */es.registerVersion(Nx,Px,"app-compat");function qf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ko={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},hs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function t_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ox=Dx,Lx=t_,n_=new Zi("auth","Firebase",t_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new bl("@firebase/auth");function uu(t,...e){ny.logLevel<=ge.ERROR&&ny.error(`Auth (${Yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw jf(t,...e)}function gt(t,...e){return jf(t,...e)}function r_(t,e,n){const r=Object.assign(Object.assign({},Lx()),{[e]:n});return new Zi("auth","Firebase",r).create(e,{appName:t.name})}function oo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(t,"argument-error"),r_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return n_.create(t,...e)}function P(t,e,...n){if(!t)throw jf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uu(e),new Error(e)}function wn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new Map;function Wt(t){wn(t instanceof Function,"Expected a class definition");let e=ry.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ry.set(t,e),e)}function Mx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zf(){return iy()==="http:"||iy()==="https:"}function iy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zf()||Vb()||"connection"in navigator)?navigator.onLine:!0}function Ux(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=XA()||Uf()}get(){return Fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=new Za(3e4,6e4);function tt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,n,r,i={}){return s_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=so(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),i_.fetch()(o_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function s_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vx),e);try{const i=new $x(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vo(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw r_(t,l,u);wt(t,l)}}catch(i){if(i instanceof Tt)throw i;wt(t,"network-request-failed")}}async function cr(t,e,n,r,i={}){const s=await ut(t,e,n,r,i);return"mfaPendingCredential"in s&&wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function o_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hf(t.config,i):`${t.config.apiScheme}://${i}`}class $x{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),Bx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function jx(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function zx(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hx(t,e=!1){const n=H(t),r=await n.getIdToken(e),i=_l(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qo(Dh(i.auth_time)),issuedAtTime:Qo(Dh(i.iat)),expirationTime:Qo(Dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dh(t){return Number(t)*1e3}function _l(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return uu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ub(r);return s?JSON.parse(s):(uu("Failed to decode base64 JWT payload"),null)}catch(s){return uu("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Kx(t){const e=_l(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&Wx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qo(this.lastLoginAt),this.creationTime=Qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tr(t,zx(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Xx(s.providerUserInfo):[],a=Qx(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new a_(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Yx(t){const e=H(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xx(t){return t.map(e=>{var{providerId:n}=e,r=qf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(t,e){const n=await s_(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=o_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",i_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Jx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ea;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ea,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new a_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hx(this,e)}reload(){return Yx(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tr(this,qx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:E,emailVerified:R,isAnonymous:F,providerData:z,stsTokenManager:ee}=n;P(E&&ee,e,"internal-error");const Q=Ea.fromJSON(this.name,ee);P(typeof E=="string",e,"internal-error"),br(h,e.name),br(d,e.name),P(typeof R=="boolean",e,"internal-error"),P(typeof F=="boolean",e,"internal-error"),br(f,e.name),br(p,e.name),br(y,e.name),br(b,e.name),br(v,e.name),br(_,e.name);const oe=new Pi({uid:E,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:F,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:Q,createdAt:v,lastLoginAt:_});return z&&Array.isArray(z)&&(oe.providerData=z.map(ve=>Object.assign({},ve))),b&&(oe._redirectEventId=b),oe}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ea;i.updateFromServerResponse(n);const s=new Pi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ia(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c_.type="NONE";const $s=c_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Di(this.userKey,i.apiKey,s),this.fullPersistenceKey=Di("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Wt($s),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wt($s);const o=Di(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Pi._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new xs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(f_(e))return"Webos";if(Kf(e))return"Safari";if((e.includes("chrome/")||l_(e))&&!e.includes("edge/"))return"Chrome";if(ec(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u_(t=Ve()){return/firefox\//i.test(t)}function Kf(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function l_(t=Ve()){return/crios\//i.test(t)}function h_(t=Ve()){return/iemobile/i.test(t)}function ec(t=Ve()){return/android/i.test(t)}function d_(t=Ve()){return/blackberry/i.test(t)}function f_(t=Ve()){return/webos/i.test(t)}function ao(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zx(t=Ve()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function eR(t=Ve()){var e;return ao(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tR(){return Bb()&&document.documentMode===10}function m_(t=Ve()){return ao(t)||ec(t)||f_(t)||d_(t)||/windows phone/i.test(t)||h_(t)}function nR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e=[]){let n;switch(t){case"Browser":n=sy(Ve());break;case"Worker":n=`${sy(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new rR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=n_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ia(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ux()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?H(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function at(t){return H(t)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=jb(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sR(t,e,n){const r=at(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=g_(e),{host:o,port:a}=oR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||aR()}function g_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oR(t){const e=g_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ay(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ay(o)}}}function ay(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(t,e){return ut(t,"POST","/v1/accounts:resetPassword",tt(t,e))}async function v_(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function cR(t,e){return ut(t,"POST","/v1/accounts:update",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e){return cr(t,"POST","/v1/accounts:signInWithPassword",tt(t,e))}async function Il(t,e){return ut(t,"POST","/v1/accounts:sendOobCode",tt(t,e))}async function lR(t,e){return Il(t,e)}async function hR(t,e){return Il(t,e)}async function dR(t,e){return Il(t,e)}async function fR(t,e){return Il(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",tt(t,e))}async function pR(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends co{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ta(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ta(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return uR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mR(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return v_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pR(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(t,e){return cr(t,"POST","/v1/accounts:signInWithIdp",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="http://localhost";class $n extends co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}buildRequest(){const e={requestUri:gR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e){return ut(t,"POST","/v1/accounts:sendVerificationCode",tt(t,e))}async function vR(t,e){return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",tt(t,e))}async function wR(t,e){const n=await cr(t,"POST","/v1/accounts:signInWithPhoneNumber",tt(t,e));if(n.temporaryProof)throw Vo(t,"account-exists-with-different-credential",n);return n}const bR={USER_NOT_FOUND:"user-not-found"};async function _R(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",tt(t,n),bR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends co{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Oi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Oi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return vR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return wR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _R(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Oi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ER(t){const e=ws(Uo(t)).link,n=e?ws(Uo(e)).deep_link_id:null,r=ws(Uo(t)).deep_link_id;return(r?ws(Uo(r)).link:null)||r||n||e||t}class El{constructor(e){var n,r,i,s,o,a;const c=ws(Uo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=IR((i=c.mode)!==null&&i!==void 0?i:null);P(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ER(e);try{return new El(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.providerId=Qr.PROVIDER_ID}static credential(e,n){return Ta._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=El.parseLink(n);return P(r,"argument-error"),Ta._fromEmailAndCode(e,r.code,r.tenantId)}}Qr.PROVIDER_ID="password";Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends ur{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Rs extends uo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),$n._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),$n._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Rs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Rs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Rs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends uo{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends uo{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="http://localhost";class qs extends co{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new qs(r,s)}static _create(e,n){return new qs(e,n)}buildRequest(){return{requestUri:TR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="saml.";class Cu extends ur{constructor(e){P(e.startsWith(SR),"argument-error"),super(e)}static credentialFromResult(e){return Cu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Cu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=qs.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return qs._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends uo{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t,e){return cr(t,"POST","/v1/accounts:signUp",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pi._fromIdTokenResponse(e,r,i),o=cy(r);return new on({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cy(r);return new on({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t){var e;const n=at(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new on({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await w_(n,{returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Tt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xu(e,n,r,i)}}function b_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e){const n=H(t);await Tl(!0,n,e);const{providerUserInfo:r}=await jx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=__(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Wf(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}async function Tl(t,e,n){await Ia(e);const r=__(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await tr(t,b_(i,s,e,t),n);P(o.idToken,i,"internal-error");const a=_l(o.idToken);P(a,i,"internal-error");const{sub:c}=a;return P(t.uid===c,i,"user-mismatch"),on._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&wt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(t,e,n=!1){const r="signIn",i=await b_(t,r,e),s=await on._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Sl(t,e){return E_(at(t),e)}async function T_(t,e){const n=H(t);return await Tl(!1,n,e.providerId),Wf(n,e)}async function S_(t,e){return I_(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(t,e){return cr(t,"POST","/v1/accounts:signInWithCustomToken",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e){const n=at(t),r=await CR(n,{token:e,returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Gf._fromServerResponse(e,n):wt(e,"internal-error")}}class Gf extends kl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Gf(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e,n){const r=H(t),i={requestType:"PASSWORD_RESET",email:e};n&&Al(r,i,n),await hR(r,i)}async function NR(t,e,n){await y_(H(t),{oobCode:e,newPassword:n})}async function PR(t,e){await cR(H(t),{oobCode:e})}async function k_(t,e){const n=H(t),r=await y_(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=kl._fromServerResponse(at(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function DR(t,e){const{data:n}=await k_(H(t),e);return n.email}async function OR(t,e,n){const r=at(t),i=await w_(r,{returnSecureToken:!0,email:e,password:n}),s=await on._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function LR(t,e,n){return Sl(H(t),Qr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(t,e,n){const r=H(t),i={requestType:"EMAIL_SIGNIN",email:e};P(n.handleCodeInApp,r,"argument-error"),n&&Al(r,i,n),await dR(r,i)}function FR(t,e){const n=El.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function UR(t,e,n){const r=H(t),i=Qr.credentialWithLink(e,n||_a());return P(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Sl(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(t,e){return ut(t,"POST","/v1/accounts:createAuthUri",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e){const n=zf()?_a():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await VR(H(t),r);return i||[]}async function $R(t,e){const n=H(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Al(n.auth,i,e);const{email:s}=await lR(n.auth,i);s!==t.email&&await t.reload()}async function qR(t,e,n){const r=H(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Al(r.auth,s,n);const{email:o}=await fR(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e){return ut(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=H(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await tr(r,jR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HR(t,e){return A_(H(t),e,null)}function KR(t,e){return A_(H(t),null,e)}async function A_(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await tr(t,v_(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=_l(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ns(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new GR(s,i);case"github.com":return new YR(s,i);case"google.com":return new QR(s,i);case"twitter.com":return new XR(s,i,t.screenName||null);case"custom":case"anonymous":return new Ns(s,null);default:return new Ns(s,r,i)}}class Ns{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class C_ extends Ns{constructor(e,n,r,i){super(e,n,r),this.username=i}}class GR extends Ns{constructor(e,n){super(e,"facebook.com",n)}}class YR extends C_{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class QR extends Ns{constructor(e,n){super(e,"google.com",n)}}class XR extends C_{constructor(e,n,r){super(e,"twitter.com",n,r)}}function JR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:WR(n)}class Ei{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Ei("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ei("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ei._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ei._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=at(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>kl._fromServerResponse(r,a));P(i.mfaPendingCredential,r,"internal-error");const o=Ei._fromMfaPendingCredential(i.mfaPendingCredential);return new Yf(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await on._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return P(n.user,r,"internal-error"),on._forOperation(n.user,n.operationType,u);default:wt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function ZR(t,e){var n;const r=H(t),i=e;return P(e.customData.operationType,r,"argument-error"),P((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Yf._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:start",tt(t,e))}function tN(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:finalize",tt(t,e))}function nN(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:withdraw",tt(t,e))}class Qf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>kl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Qf(e)}async getSession(){return Ei._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await tr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var n;const r=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),s=await tr(this.user,nN(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==r),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const Oh=new WeakMap;function rN(t){const e=H(t);return Oh.has(e)||Oh.set(e,Qf._fromUser(e)),Oh.get(e)}const Ru="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(){const t=Ve();return Kf(t)||ao(t)}const sN=1e3,oN=10;class R_ extends x_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iN()&&nR(),this.fallbackToPolling=m_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}R_.type="LOCAL";const Xf=R_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_ extends x_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N_.type="SESSION";const Ui=N_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await aN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=tc("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function uN(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function lN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dN(){return Jf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="firebaseLocalStorageDb",fN=1,Nu="firebaseLocalStorage",D_="fbase_key";class nc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([Nu],e?"readwrite":"readonly").objectStore(Nu)}function mN(){const t=indexedDB.deleteDatabase(P_);return new nc(t).toPromise()}function Td(){const t=indexedDB.open(P_,fN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nu,{keyPath:D_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nu)?e(r):(r.close(),await mN(),e(await Td()))})})}async function uy(t,e,n){const r=xl(t,!0).put({[D_]:e,value:n});return new nc(r).toPromise()}async function pN(t,e){const n=xl(t,!1).get(e),r=await new nc(n).toPromise();return r===void 0?null:r.value}function ly(t,e){const n=xl(t,!0).delete(e);return new nc(n).toPromise()}const gN=800,yN=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(dN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lN(),!this.activeServiceWorker)return;this.sender=new cN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await uy(e,Ru,"1"),await ly(e,Ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new nc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const Sa=O_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:start",tt(t,e))}function wN(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:finalize",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t){return(await ut(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function L_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_N().appendChild(r)})}function M_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=500,EN=6e4,Lc=1e12;class TN{constructor(e){this.auth=e,this.counter=Lc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new SN(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Lc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Lc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Lc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class SN{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;P(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=kN(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},EN)},IN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function kN(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=M_("rcb"),AN=new Za(3e4,6e4),CN="https://www.google.com/recaptcha/api.js?";class xN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(RN(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Xe().grecaptcha):new Promise((r,i)=>{const s=Xe().setTimeout(()=>{i(gt(e,"network-request-failed"))},AN.get());Xe()[Lh]=()=>{Xe().clearTimeout(s),delete Xe()[Lh];const a=Xe().grecaptcha;if(!a){i(gt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${CN}?${so({onload:Lh,render:"explicit",hl:n})}`;L_(o).catch(()=>{clearTimeout(s),i(gt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function RN(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class NN{async load(e){return new TN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="recaptcha",PN={theme:"light",type:"image"};class DN{constructor(e,n=Object.assign({},PN),r){this.parameters=n,this.type=F_,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=at(r),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;P(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new NN:new xN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(zf()&&!Jf(),this.auth,"internal-error"),await ON(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bN(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ON(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Oi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function LN(t,e,n){const r=at(t),i=await Rl(r,e,H(n));return new Zf(i,s=>Sl(r,s))}async function MN(t,e,n){const r=H(t);await Tl(!1,r,"phone");const i=await Rl(r.auth,e,H(n));return new Zf(i,s=>T_(r,s))}async function FN(t,e,n){const r=H(t),i=await Rl(r.auth,e,H(n));return new Zf(i,s=>S_(r,s))}async function Rl(t,e,n){var r;const i=await n.verify();try{P(typeof i=="string",t,"argument-error"),P(n.type===F_,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return P(o.type==="enroll",t,"internal-error"),(await eN(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(a,t,"missing-multi-factor-info"),(await vN(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await yR(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function UN(t,e){await Wf(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.providerId=yn.PROVIDER_ID,this.auth=at(e)}verifyPhoneNumber(e,n){return Rl(this.auth,e,H(n))}static credential(e,n){return Oi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return yn.credentialFromTaggedObject(n)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Oi._fromTokenResponse(n,r):null}}yn.PROVIDER_ID="phone";yn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,e){return e?Wt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em extends co{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VN(t){return E_(t.auth,new em(t),t.bypassAuthState)}function BN(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),I_(n,new em(t),t.bypassAuthState)}async function $N(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Wf(n,new em(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VN;case"linkViaPopup":case"linkViaRedirect":return $N;case"reauthViaPopup":case"reauthViaRedirect":return BN;default:wt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=new Za(2e3,1e4);async function jN(t,e,n){const r=at(t);oo(t,e,ur);const i=ts(r,n);return new Wn(r,"signInViaPopup",e,i).executeNotNull()}async function zN(t,e,n){const r=H(t);oo(r.auth,e,ur);const i=ts(r.auth,n);return new Wn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function HN(t,e,n){const r=H(t);oo(r.auth,e,ur);const i=ts(r.auth,n);return new Wn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Wn extends U_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qN.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="pendingRedirect",Xo=new Map;class WN extends U_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xo.get(this.auth._key());if(!e){try{const r=await GN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xo.set(this.auth._key(),e)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GN(t,e){const n=B_(e),r=V_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function tm(t,e){return V_(t)._set(B_(e),"true")}function YN(){Xo.clear()}function nm(t,e){Xo.set(t._key(),e)}function V_(t){return Wt(t._redirectPersistence)}function B_(t){return Di(KN,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t,e,n){return XN(t,e,n)}async function XN(t,e,n){const r=at(t);oo(t,e,ur);const i=ts(r,n);return await tm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function JN(t,e,n){return ZN(t,e,n)}async function ZN(t,e,n){const r=H(t);oo(r.auth,e,ur);const i=ts(r.auth,n);await tm(i,r.auth);const s=await $_(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function eP(t,e,n){return tP(t,e,n)}async function tP(t,e,n){const r=H(t);oo(r.auth,e,ur);const i=ts(r.auth,n);await Tl(!1,r,e.providerId),await tm(i,r.auth);const s=await $_(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function nP(t,e){return await at(t)._initializationPromise,Nl(t,e,!1)}async function Nl(t,e,n=!1){const r=at(t),i=ts(r,e),o=await new WN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function $_(t){const e=tc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=10*60*1e3;class q_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!j_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rP&&this.cachedEventUids.clear(),this.cachedEventUids.has(hy(e))}saveEventToCache(e){this.cachedEventUids.add(hy(e)),this.lastProcessedEventTime=Date.now()}}function hy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function j_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oP=/^https?/;async function aP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await z_(t);for(const n of e)try{if(cP(n))return}catch{}wt(t,"unauthorized-domain")}function cP(t){const e=_a(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oP.test(n))return!1;if(sP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Za(3e4,6e4);function dy(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lP(t){return new Promise((e,n)=>{var r,i,s;function o(){dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dy(),n(gt(t,"network-request-failed"))},timeout:uP.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)o();else{const a=M_("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},L_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw lu=null,e})}let lu=null;function hP(t){return lu=lu||lP(t),lu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new Za(5e3,15e3),fP="__/auth/iframe",mP="emulator/auth/iframe",pP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yP(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hf(e,mP):`https://${t.config.authDomain}/${fP}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},i=gP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${so(r).slice(1)}`}async function vP(t){const e=await hP(t),n=Xe().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:yP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},dP.get());function c(){Xe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bP=500,_P=600,IP="_blank",EP="http://localhost";class fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TP(t,e,n,r=bP,i=_P){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},wP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=l_(u)?IP:n),u_(u)&&(e=e||EP,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(eR(u)&&a!=="_self")return SP(e||"",a),new fy(null);const h=window.open(e||"",a,l);P(h,t,"popup-blocked");try{h.focus()}catch{}return new fy(h)}function SP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="__/auth/handler",AP="emulator/auth/handler";function Sd(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:i};if(e instanceof ur){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof uo){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${CP(t)}?${so(a).slice(1)}`}function CP({config:t}){return t.emulator?Hf(t,AP):`https://${t.authDomain}/${kP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="webStorageSupport";class xP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ui,this._completeRedirectFn=Nl,this._overrideRedirectResult=nm}async _openPopup(e,n,r,i){var s;wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Sd(e,n,r,_a(),i);return TP(e,o,tc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),uN(Sd(e,n,r,_a(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vP(e),r=new q_(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mh,{type:Mh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mh];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m_()||Kf()||ao()}}const RP=xP;class NP{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Pn("unexpected MultiFactorSessionType")}}}class rm extends NP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rm(e)}_finalizeEnroll(e,n,r){return tN(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return wN(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class H_{constructor(){}static assertion(e){return rm._fromCredential(e)}}H_.FACTOR_ID="phone";var my="@firebase/auth",py="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function OP(t){er(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{P(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),P(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p_(t)},l=new iR(a,c,u);return Mx(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),er(new sn("auth-internal",e=>{const n=at(e.getProvider("auth").getImmediate());return(r=>new PP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(my,py,DP(t)),rn(my,py,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=5*60;oC("authIdTokenMaxAge");OP("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=2e3;async function FP(t,e,n){var r;const{BuildInfo:i}=Vi();wn(e.sessionId,"AuthEvent did not contain a session ID");const s=await qP(e.sessionId),o={};return ao()?o.ibi=i.packageName:ec()?o.apn=i.packageName:wt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Sd(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function UP(t){const{BuildInfo:e}=Vi(),n={};ao()?n.iosBundleId=e.packageName:ec()?n.androidPackageName=e.packageName:wt(t,"operation-not-supported-in-this-environment"),await z_(t,n)}function VP(t){const{cordova:e}=Vi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,Zx()?"_blank":"_system","location=yes"),n(i)})})}async function BP(t,e,n){const{cordova:r}=Vi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(gt(t,"redirect-cancelled-by-user"))},MP))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),ec()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function $P(t){var e,n,r,i,s,o,a,c,u,l;const h=Vi();P(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function qP(t){const e=jP(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function jP(t){if(wn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=20;class HP extends q_{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function KP(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:YP(),postBody:null,tenantId:t.tenantId,error:gt(t,"no-auth-event")}}function WP(t,e){return kd()._set(Ad(t),e)}async function gy(t){const e=await kd()._get(Ad(t));return e&&await kd()._remove(Ad(t)),e}function GP(t,e){var n,r;const i=XP(e);if(i.includes("/__/auth/callback")){const s=hu(i),o=s.firebaseError?QP(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?gt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function YP(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<zP;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function kd(){return Wt(Xf)}function Ad(t){return Di("authEvent",t.config.apiKey,t.name)}function QP(t){try{return JSON.parse(t)}catch{return null}}function XP(t){const e=hu(t),n=e.link?decodeURIComponent(e.link):void 0,r=hu(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return hu(i).link||i||r||n||t}function hu(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ws(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=500;class ZP{constructor(){this._redirectPersistence=Ui,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Nl,this._overrideRedirectResult=nm}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new HP(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){wt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){$P(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),YN(),await this._originValidation(e);const o=KP(e,r,i);await WP(e,o);const a=await FP(e,o,n),c=await VP(a);return BP(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UP(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Vi(),o=setTimeout(async()=>{await gy(e),n.onEvent(yy())},JP),a=async l=>{clearTimeout(o);const h=await gy(e);let d=null;h&&(l==null?void 0:l.url)&&(d=GP(h,l.url)),n.onEvent(d||yy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Vi().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const eD=ZP;function yy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:gt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t,e){at(t)._logFramework(e)}var nD="@firebase/auth-compat",rD="0.2.24";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=1e3;function Jo(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function sD(){return Jo()==="http:"||Jo()==="https:"}function K_(t=Ve()){return!!((Jo()==="file:"||Jo()==="ionic:"||Jo()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function oD(){return Uf()||wl()}function aD(){return Bb()&&(document==null?void 0:document.documentMode)===11}function cD(t=Ve()){return/Edge\/\d+/.test(t)}function uD(t=Ve()){return aD()||cD(t)}function W_(){try{const t=self.localStorage,e=tc();if(t)return t.setItem(e,"1"),t.removeItem(e),uD()?va():!0}catch{return im()&&va()}return!1}function im(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Fh(){return(sD()||Vb()||K_())&&!oD()&&W_()&&!im()}function G_(){return K_()&&typeof document<"u"}async function lD(){return G_()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},iD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function hD(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={LOCAL:"local",NONE:"none",SESSION:"session"},Ao=P,Y_="persistence";function dD(t,e){if(Ao(Object.values(Ht).includes(e),t,"invalid-persistence-type"),Uf()){Ao(e!==Ht.SESSION,t,"unsupported-persistence-type");return}if(wl()){Ao(e===Ht.NONE,t,"unsupported-persistence-type");return}if(im()){Ao(e===Ht.NONE||e===Ht.LOCAL&&va(),t,"unsupported-persistence-type");return}Ao(e===Ht.NONE||W_(),t,"unsupported-persistence-type")}async function Cd(t){await t._initializationPromise;const e=Q_(),n=Di(Y_,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function fD(t,e){const n=Q_();if(!n)return[];const r=Di(Y_,t,e);switch(n.getItem(r)){case Ht.NONE:return[$s];case Ht.LOCAL:return[Sa,Ui];case Ht.SESSION:return[Ui];default:return[]}}function Q_(){var t;try{return((t=hD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=P;class Cr{constructor(){this.browserResolver=Wt(RP),this.cordovaResolver=Wt(eD),this.underlyingResolver=null,this._redirectPersistence=Ui,this._completeRedirectFn=Nl,this._overrideRedirectResult=nm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return G_()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return mD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await lD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){return t.unwrap()}function pD(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t){return J_(t)}function yD(t,e){var n,r;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=e)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new vD(t,ZR(t,e))}else if(i){const s=J_(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function J_(t){const{_tokenResponse:e}=t instanceof Tt?t.customData:t;if(!e)return null;if(!(t instanceof Tt)&&"temporaryProof"in e&&"phoneNumber"in e)return yn.credentialFromResult(t);const n=e.providerId;if(!n||n===ko.PASSWORD)return null;let r;switch(n){case ko.GOOGLE:r=An;break;case ko.FACEBOOK:r=kn;break;case ko.GITHUB:r=Cn;break;case ko.TWITTER:r=xn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?qs._create(n,a):$n._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Rs(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Tt?r.credentialFromError(t):r.credentialFromResult(t)}function Ut(t,e){return e.catch(n=>{throw n instanceof Tt&&yD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:gD(n),additionalUserInfo:JR(n),user:Gn.getOrCreate(i)}})}async function xd(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ut(t,n.confirm(r))}}class vD{constructor(e,n){this.resolver=n,this.auth=pD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ut(X_(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._delegate=e,this.multiFactor=rN(e)}static getOrCreate(e){return Gn.USER_MAP.has(e)||Gn.USER_MAP.set(e,new Gn(e)),Gn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ut(this.auth,T_(this._delegate,e))}async linkWithPhoneNumber(e,n){return xd(this.auth,MN(this._delegate,e,n))}async linkWithPopup(e){return Ut(this.auth,HN(this._delegate,e,Cr))}async linkWithRedirect(e){return await Cd(at(this.auth)),eP(this._delegate,e,Cr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ut(this.auth,S_(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return xd(this.auth,FN(this._delegate,e,n))}reauthenticateWithPopup(e){return Ut(this.auth,zN(this._delegate,e,Cr))}async reauthenticateWithRedirect(e){return await Cd(at(this.auth)),JN(this._delegate,e,Cr)}sendEmailVerification(e){return $R(this._delegate,e)}async unlink(e){return await AR(this._delegate,e),this}updateEmail(e){return HR(this._delegate,e)}updatePassword(e){return KR(this._delegate,e)}updatePhoneNumber(e){return UN(this._delegate,e)}updateProfile(e){return zR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return qR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Gn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=P;class Rd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Co(r,"invalid-api-key",{appName:e.name}),Co(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Cr:void 0;this._delegate=n.initialize({options:{persistence:wD(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Ox),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Gn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){sR(this._delegate,e,n)}applyActionCode(e){return PR(this._delegate,e)}checkActionCode(e){return k_(this._delegate,e)}confirmPasswordReset(e,n){return NR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ut(this._delegate,OR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return BR(this._delegate,e)}isSignInWithEmailLink(e){return FR(this._delegate,e)}async getRedirectResult(){Co(Fh(),this._delegate,"operation-not-supported-in-this-environment");const e=await nP(this._delegate,Cr);return e?Ut(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){tD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=vy(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=vy(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return MR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return RR(this._delegate,e,n||void 0)}async setPersistence(e){dD(this._delegate,e);let n;switch(e){case Ht.SESSION:n=Ui;break;case Ht.LOCAL:n=await Wt(Sa)._isAvailable()?Sa:Xf;break;case Ht.NONE:n=$s;break;default:return wt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ut(this._delegate,kR(this._delegate))}signInWithCredential(e){return Ut(this._delegate,Sl(this._delegate,e))}signInWithCustomToken(e){return Ut(this._delegate,xR(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ut(this._delegate,LR(this._delegate,e,n))}signInWithEmailLink(e,n){return Ut(this._delegate,UR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return xd(this._delegate,LN(this._delegate,e,n))}async signInWithPopup(e){return Co(Fh(),this._delegate,"operation-not-supported-in-this-environment"),Ut(this._delegate,jN(this._delegate,e,Cr))}async signInWithRedirect(e){return Co(Fh(),this._delegate,"operation-not-supported-in-this-environment"),await Cd(this._delegate),QN(this._delegate,e,Cr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return DR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Rd.Persistence=Ht;function vy(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Gn.getOrCreate(o)),error:e,complete:n}}function wD(t,e){const n=fD(t,e);if(typeof self<"u"&&!n.includes(Sa)&&n.push(Sa),typeof window<"u")for(const r of[Xf,Ui])n.includes(r)||n.push(r);return n.includes($s)||n.push($s),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.providerId="phone",this._delegate=new yn(X_(es.auth()))}static credential(e,n){return yn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}sm.PHONE_SIGN_IN_METHOD=yn.PHONE_SIGN_IN_METHOD;sm.PROVIDER_ID=yn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=P;class _D{constructor(e,n,r=es.app()){var i;bD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new DN(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID="auth-compat";function ED(t){t.INTERNAL.registerComponent(new sn(ID,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Rd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:hs.EMAIL_SIGNIN,PASSWORD_RESET:hs.PASSWORD_RESET,RECOVER_EMAIL:hs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:hs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:hs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:hs.VERIFY_EMAIL}},EmailAuthProvider:Qr,FacebookAuthProvider:kn,GithubAuthProvider:Cn,GoogleAuthProvider:An,OAuthProvider:Rs,SAMLAuthProvider:Cu,PhoneAuthProvider:sm,PhoneMultiFactorGenerator:H_,RecaptchaVerifier:_D,TwitterAuthProvider:xn,Auth:Rd,AuthCredential:co,Error:Tt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(nD,rD)}ED(es);var TD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y,om=om||{},ie=TD||self;function Pu(){}function Pl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function rc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SD(t){return Object.prototype.hasOwnProperty.call(t,Uh)&&t[Uh]||(t[Uh]=++kD)}var Uh="closure_uid_"+(1e9*Math.random()>>>0),kD=0;function AD(t,e,n){return t.call.apply(t.bind,arguments)}function CD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=AD:St=CD,St.apply(null,arguments)}function Mc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function bt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xr(){this.s=this.s,this.o=this.o}var xD=0;Xr.prototype.s=!1;Xr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),xD!=0)&&SD(this)};Xr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Z_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function am(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function wy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var RD=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",Pu,e),ie.removeEventListener("test",Pu,e)}catch{}return t}();function Du(t){return/^[\s\xa0]*$/.test(t)}var by=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Vh(t,e){return t<e?-1:t>e?1:0}function Dl(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Dl().indexOf(t)!=-1}function cm(t){return cm[" "](t),t}cm[" "]=Pu;function ND(t){var e=OD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var PD=Rn("Opera"),js=Rn("Trident")||Rn("MSIE"),eI=Rn("Edge"),Nd=eI||js,tI=Rn("Gecko")&&!(Dl().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),DD=Dl().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function nI(){var t=ie.document;return t?t.documentMode:void 0}var Ou;e:{var Bh="",$h=function(){var t=Dl();if(tI)return/rv:([^\);]+)(\)|;)/.exec(t);if(eI)return/Edge\/([\d\.]+)/.exec(t);if(js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(DD)return/WebKit\/(\S+)/.exec(t);if(PD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($h&&(Bh=$h?$h[1]:""),js){var qh=nI();if(qh!=null&&qh>parseFloat(Bh)){Ou=String(qh);break e}}Ou=Bh}var OD={};function LD(){return ND(function(){let t=0;const e=by(String(Ou)).split("."),n=by("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Vh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Vh(i[2].length==0,s[2].length==0)||Vh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Pd;if(ie.document&&js){var _y=nI();Pd=_y||parseInt(Ou,10)||void 0}else Pd=void 0;var MD=Pd;function ka(t,e){if(kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tI){e:{try{cm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ka.X.h.call(this)}}bt(ka,kt);var FD={2:"touch",3:"pen",4:"mouse"};ka.prototype.h=function(){ka.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ic="closure_listenable_"+(1e6*Math.random()|0),UD=0;function VD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++UD,this.ba=this.ea=!1}function Ol(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function um(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function rI(t){const e={};for(const n in t)e[n]=t[n];return e}const Iy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function iI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Iy.length;s++)n=Iy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ll(t){this.src=t,this.g={},this.h=0}Ll.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Od(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new VD(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Dd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Z_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ol(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Od(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var lm="closure_lm_"+(1e6*Math.random()|0),jh={};function sI(t,e,n,r,i){if(r&&r.once)return aI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)sI(t,e[s],n,r,i);return null}return n=fm(n),t&&t[ic]?t.N(e,n,rc(r)?!!r.capture:!!r,i):oI(t,e,n,!1,r,i)}function oI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=rc(i)?!!i.capture:!!i,a=dm(t);if(a||(t[lm]=a=new Ll(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=BD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(uI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BD(){function t(n){return e.call(t.src,t.listener,n)}const e=$D;return t}function aI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)aI(t,e[s],n,r,i);return null}return n=fm(n),t&&t[ic]?t.O(e,n,rc(r)?!!r.capture:!!r,i):oI(t,e,n,!0,r,i)}function cI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)cI(t,e[s],n,r,i);else r=rc(r)?!!r.capture:!!r,n=fm(n),t&&t[ic]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Od(s,n,r,i),-1<n&&(Ol(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=dm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Od(e,n,r,i)),(n=-1<t?e[t]:null)&&hm(n))}function hm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ic])Dd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(uI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dm(e))?(Dd(n,t),n.h==0&&(n.src=null,e[lm]=null)):Ol(t)}}}function uI(t){return t in jh?jh[t]:jh[t]="on"+t}function $D(t,e){if(t.ba)t=!0;else{e=new ka(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&hm(t),t=n.call(r,e)}return t}function dm(t){return t=t[lm],t instanceof Ll?t:null}var zh="__closure_events_fn_"+(1e9*Math.random()>>>0);function fm(t){return typeof t=="function"?t:(t[zh]||(t[zh]=function(e){return t.handleEvent(e)}),t[zh])}function ct(){Xr.call(this),this.i=new Ll(this),this.P=this,this.I=null}bt(ct,Xr);ct.prototype[ic]=!0;ct.prototype.removeEventListener=function(t,e,n,r){cI(this,t,e,n,r)};function yt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new kt(e,t);else if(e instanceof kt)e.target=e.target||t;else{var i=e;e=new kt(r,t),iI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Fc(o,r,!0,e)&&i}if(o=e.g=t,i=Fc(o,r,!0,e)&&i,i=Fc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Fc(o,r,!1,e)&&i}ct.prototype.M=function(){if(ct.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ol(n[r]);delete t.g[e],t.h--}}this.I=null};ct.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Dd(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var mm=ie.JSON.stringify;function qD(){var t=dI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jD{constructor(){this.h=this.g=null}add(e,n){const r=lI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new zD,t=>t.reset());class zD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HD(t){ie.setTimeout(()=>{throw t},0)}function hI(t,e){Ld||KD(),Md||(Ld(),Md=!0),dI.add(t,e)}var Ld;function KD(){var t=ie.Promise.resolve(void 0);Ld=function(){t.then(WD)}}var Md=!1,dI=new jD;function WD(){for(var t;t=qD();){try{t.h.call(t.g)}catch(n){HD(n)}var e=lI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Md=!1}function Ml(t,e){ct.call(this),this.h=t||1,this.g=e||ie,this.j=St(this.lb,this),this.l=Date.now()}bt(Ml,ct);Y=Ml.prototype;Y.ca=!1;Y.R=null;Y.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),yt(this,"tick"),this.ca&&(pm(this),this.start()))}};Y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Y.M=function(){Ml.X.M.call(this),pm(this),delete this.g};function gm(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function fI(t){t.g=gm(()=>{t.g=null,t.i&&(t.i=!1,fI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GD extends Xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fI(this)}M(){super.M(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Aa(t){Xr.call(this),this.h=t,this.g={}}bt(Aa,Xr);var Ey=[];function mI(t,e,n,r){Array.isArray(n)||(n&&(Ey[0]=n.toString()),n=Ey);for(var i=0;i<n.length;i++){var s=sI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function pI(t){um(t.g,function(e,n){this.g.hasOwnProperty(n)&&hm(e)},t),t.g={}}Aa.prototype.M=function(){Aa.X.M.call(this),pI(this)};Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fl(){this.g=!0}Fl.prototype.Aa=function(){this.g=!1};function YD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function bs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JD(t,n)+(r?" "+r:"")})}function XD(t,e){t.info(function(){return"TIMEOUT: "+e})}Fl.prototype.info=function(){};function JD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return mm(n)}catch{return e}}var ns={},Ty=null;function Ul(){return Ty=Ty||new ct}ns.Pa="serverreachability";function gI(t){kt.call(this,ns.Pa,t)}bt(gI,kt);function Ca(t){const e=Ul();yt(e,new gI(e))}ns.STAT_EVENT="statevent";function yI(t,e){kt.call(this,ns.STAT_EVENT,t),this.stat=e}bt(yI,kt);function Dt(t){const e=Ul();yt(e,new yI(e,t))}ns.Qa="timingevent";function vI(t,e){kt.call(this,ns.Qa,t),this.size=e}bt(vI,kt);function sc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Vl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},wI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ym(){}ym.prototype.h=null;function Sy(t){return t.h||(t.h=t.i())}function bI(){}var oc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vm(){kt.call(this,"d")}bt(vm,kt);function wm(){kt.call(this,"c")}bt(wm,kt);var Fd;function Bl(){}bt(Bl,ym);Bl.prototype.g=function(){return new XMLHttpRequest};Bl.prototype.i=function(){return{}};Fd=new Bl;function ac(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Aa(this),this.O=ZD,t=Nd?125:void 0,this.T=new Ml(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _I}function _I(){this.i=null,this.g="",this.h=!1}var ZD=45e3,Ud={},Lu={};Y=ac.prototype;Y.setTimeout=function(t){this.O=t};function Vd(t,e,n){t.K=1,t.v=ql(nr(e)),t.s=n,t.P=!0,II(t,null)}function II(t,e){t.F=Date.now(),cc(t),t.A=nr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),RI(n.i,"t",r),t.C=0,n=t.l.H,t.h=new _I,t.g=XI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new GD(St(t.La,t,t.g),t.N)),mI(t.S,t.g,"readystatechange",t.ib),e=t.H?rI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ca(),YD(t.j,t.u,t.A,t.m,t.U,t.s)}Y.ib=function(t){t=t.target;const e=this.L;e&&Yn(t)==3?e.l():this.La(t)};Y.La=function(t){try{if(t==this.g)e:{const l=Yn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Nd||this.g&&(this.h.h||this.g.fa()||xy(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ca(3):Ca(2)),$l(this);var n=this.g.aa();this.Y=n;t:if(EI(this)){var r=xy(this.g);t="";var i=r.length,s=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ti(this),Zo(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,QD(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Du(a)){var u=a;break t}}u=null}if(n=u)bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Bd(this,n);else{this.i=!1,this.o=3,Dt(12),Ti(this),Zo(this);break e}}this.P?(TI(this,l,o),Nd&&this.i&&l==3&&(mI(this.S,this.T,"tick",this.hb),this.T.start())):(bs(this.j,this.m,o,null),Bd(this,o)),l==4&&Ti(this),this.i&&!this.I&&(l==4?WI(this.l,this):(this.i=!1,cc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),Ti(this),Zo(this)}}}catch{}finally{}};function EI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function TI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=eO(t,n),i==Lu){e==4&&(t.o=4,Dt(14),r=!1),bs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ud){t.o=4,Dt(15),bs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else bs(t.j,t.m,i,null),Bd(t,i);EI(t)&&i!=Lu&&i!=Ud&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),km(e),e.K=!0,Dt(11))):(bs(t.j,t.m,n,"[Invalid Chunked Response]"),Ti(t),Zo(t))}Y.hb=function(){if(this.g){var t=Yn(this.g),e=this.g.fa();this.C<e.length&&($l(this),TI(this,t,e),this.i&&t!=4&&cc(this))}};function eO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Lu:(n=Number(e.substring(n,r)),isNaN(n)?Ud:(r+=1,r+n>e.length?Lu:(e=e.substr(r,n),t.C=r+n,e)))}Y.cancel=function(){this.I=!0,Ti(this)};function cc(t){t.V=Date.now()+t.O,SI(t,t.O)}function SI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=sc(St(t.gb,t),e)}function $l(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}Y.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(XD(this.j,this.A),this.K!=2&&(Ca(),Dt(17)),Ti(this),this.o=2,Zo(this)):SI(this,this.V-t)};function Zo(t){t.l.G==0||t.I||WI(t.l,t)}function Ti(t){$l(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,pm(t.T),pI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Bd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||$d(n.h,t))){if(!t.J&&$d(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Uu(n),Hl(n);else break e;Sm(n),Dt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=sc(St(n.cb,n),6e3));if(1>=DI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Si(n,11)}else if((t.J||n.g==t)&&Uu(n),!Du(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bm(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,De(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=QI(r,r.H?r.ka:null,r.V),o.J){OI(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&($l(a),cc(a)),r.g=o}else HI(r);0<n.i.length&&Kl(n)}else u[0]!="stop"&&u[0]!="close"||Si(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Si(n,7):Tm(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ca(4)}catch{}}function tO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Pl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Pl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function kI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nO(t),r=tO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var AI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Li(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Li){this.h=e!==void 0?e:t.h,Mu(this,t.j),this.s=t.s,this.g=t.g,Fu(this,t.m),this.l=t.l,e=t.i;var n=new xa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ky(this,n),this.o=t.o}else t&&(n=String(t).match(AI))?(this.h=!!e,Mu(this,n[1]||"",!0),this.s=Bo(n[2]||""),this.g=Bo(n[3]||"",!0),Fu(this,n[4]),this.l=Bo(n[5]||"",!0),ky(this,n[6]||"",!0),this.o=Bo(n[7]||"")):(this.h=!!e,this.i=new xa(null,this.h))}Li.prototype.toString=function(){var t=[],e=this.j;e&&t.push($o(e,Ay,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($o(e,Ay,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($o(n,n.charAt(0)=="/"?oO:sO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$o(n,cO)),t.join("")};function nr(t){return new Li(t)}function Mu(t,e,n){t.j=n?Bo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ky(t,e,n){e instanceof xa?(t.i=e,uO(t.i,t.h)):(n||(e=$o(e,aO)),t.i=new xa(e,t.h))}function De(t,e,n){t.i.set(e,n)}function ql(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $o(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ay=/[#\/\?@]/g,sO=/[#\?:]/g,oO=/[#\?]/g,aO=/[#\?@]/g,cO=/#/g;function xa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jr(t){t.g||(t.g=new Map,t.h=0,t.i&&rO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Y=xa.prototype;Y.add=function(t,e){Jr(this),this.i=null,t=lo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function CI(t,e){Jr(t),e=lo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xI(t,e){return Jr(t),e=lo(t,e),t.g.has(e)}Y.forEach=function(t,e){Jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};Y.oa=function(){Jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};Y.W=function(t){Jr(this);let e=[];if(typeof t=="string")xI(this,t)&&(e=e.concat(this.g.get(lo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Y.set=function(t,e){return Jr(this),this.i=null,t=lo(this,t),xI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function RI(t,e,n){CI(t,e),0<n.length&&(t.i=null,t.g.set(lo(t,e),am(n)),t.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function lo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uO(t,e){e&&!t.j&&(Jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(CI(this,r),RI(this,i,n))},t)),t.j=e}var lO=class{constructor(t,e){this.h=t,this.g=e}};function NI(t){this.l=t||hO,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ga&&ie.g.Ga()&&ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hO=10;function PI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function DI(t){return t.h?1:t.g?t.g.size:0}function $d(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bm(t,e){t.g?t.g.add(e):t.h=e}function OI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}NI.prototype.cancel=function(){if(this.i=LI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function LI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return am(t.i)}function _m(){}_m.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};_m.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function dO(){this.g=new _m}function fO(t,e,n){const r=n||"";try{kI(t,function(i,s){let o=i;rc(i)&&(o=mm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function mO(t,e){const n=new Fl;if(ie.Image){const r=new Image;r.onload=Mc(Uc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Mc(Uc,n,r,"TestLoadImage: error",!1,e),r.onabort=Mc(Uc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Mc(Uc,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Uc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function uc(t){this.l=t.ac||null,this.j=t.jb||!1}bt(uc,ym);uc.prototype.g=function(){return new jl(this.l,this.j)};uc.prototype.i=function(t){return function(){return t}}({});function jl(t,e){ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Im,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(jl,ct);var Im=0;Y=jl.prototype;Y.open=function(t,e){if(this.readyState!=Im)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ra(this)};Y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lc(this)),this.readyState=Im};Y.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ra(this)),this.g&&(this.readyState=3,Ra(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;MI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function MI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Y.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?lc(this):Ra(this),this.readyState==3&&MI(this)}};Y.Va=function(t){this.g&&(this.response=this.responseText=t,lc(this))};Y.Ua=function(t){this.g&&(this.response=t,lc(this))};Y.ga=function(){this.g&&lc(this)};function lc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ra(t)}Y.setRequestHeader=function(t,e){this.v.append(t,e)};Y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ra(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pO=ie.JSON.parse;function je(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=FI,this.K=this.L=!1}bt(je,ct);var FI="",gO=/^https?$/i,yO=["POST","PUT"];Y=je.prototype;Y.Ka=function(t){this.L=t};Y.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fd.g(),this.C=this.u?Sy(this.u):Sy(Fd),this.g.onreadystatechange=St(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Cy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=Z_(yO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{BI(this),0<this.B&&((this.K=vO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.qa,this)):this.A=gm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cy(this,s)}};function vO(t){return js&&LD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Y.qa=function(){typeof om<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,yt(this,"timeout"),this.abort(8))};function Cy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,UI(t),zl(t)}function UI(t){t.D||(t.D=!0,yt(t,"complete"),yt(t,"error"))}Y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,yt(this,"complete"),yt(this,"abort"),zl(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zl(this,!0)),je.X.M.call(this)};Y.Ha=function(){this.s||(this.F||this.v||this.l?VI(this):this.fb())};Y.fb=function(){VI(this)};function VI(t){if(t.h&&typeof om<"u"&&(!t.C[1]||Yn(t)!=4||t.aa()!=2)){if(t.v&&Yn(t)==4)gm(t.Ha,0,t);else if(yt(t,"readystatechange"),Yn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(AI)[1]||null;if(!i&&ie.self&&ie.self.location){var s=ie.self.location.protocol;i=s.substr(0,s.length-1)}r=!gO.test(i?i.toLowerCase():"")}n=r}if(n)yt(t,"complete"),yt(t,"success");else{t.m=6;try{var o=2<Yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",UI(t)}}finally{zl(t)}}}}function zl(t,e){if(t.g){BI(t);const n=t.g,r=t.C[0]?Pu:null;t.g=null,t.C=null,e||yt(t,"ready");try{n.onreadystatechange=r}catch{}}}function BI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}Y.aa=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}};Y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pO(e)}};function xy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case FI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Ea=function(){return this.m};Y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $I(t){let e="";return um(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Em(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$I(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function xo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qI(t){this.Ca=0,this.i=[],this.j=new Fl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xo("baseRetryDelayMs",5e3,t),this.bb=xo("retryDelaySeedMs",1e4,t),this.$a=xo("forwardChannelMaxRetries",2,t),this.ta=xo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new NI(t&&t.concurrentRequestLimit),this.Fa=new dO,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Y=qI.prototype;Y.ma=8;Y.G=1;function Tm(t){if(jI(t),t.G==3){var e=t.U++,n=nr(t.F);De(n,"SID",t.I),De(n,"RID",e),De(n,"TYPE","terminate"),hc(t,n),e=new ac(t,t.j,e,void 0),e.K=2,e.v=ql(nr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=XI(e.l,null),e.g.da(e.v)),e.F=Date.now(),cc(e)}YI(t)}function Hl(t){t.g&&(km(t),t.g.cancel(),t.g=null)}function jI(t){Hl(t),t.u&&(ie.clearTimeout(t.u),t.u=null),Uu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Kl(t){PI(t.h)||t.m||(t.m=!0,hI(t.Ja,t),t.C=0)}function wO(t,e){return DI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=sc(St(t.Ja,t,e),GI(t,t.C)),t.C++,!0)}Y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ac(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=rI(s),iI(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zI(this,i,e),n=nr(this.F),De(n,"RID",t),De(n,"CVER",22),this.D&&De(n,"X-HTTP-Session-Id",this.D),hc(this,n),s&&(this.N?e="headers="+encodeURIComponent(String($I(s)))+"&"+e:this.o&&Em(n,this.o,s)),bm(this.h,i),this.Ya&&De(n,"TYPE","init"),this.O?(De(n,"$req",e),De(n,"SID","null"),i.Z=!0,Vd(i,n,null)):Vd(i,n,e),this.G=2}}else this.G==3&&(t?Ry(this,t):this.i.length==0||PI(this.h)||Ry(this))};function Ry(t,e){var n;e?n=e.m:n=t.U++;const r=nr(t.F);De(r,"SID",t.I),De(r,"RID",n),De(r,"AID",t.T),hc(t,r),t.o&&t.s&&Em(r,t.o,t.s),n=new ac(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),bm(t.h,n),Vd(n,r,e)}function hc(t,e){t.ia&&um(t.ia,function(n,r){De(e,r,n)}),t.l&&kI({},function(n,r){De(e,r,n)})}function zI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?St(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{fO(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function HI(t){t.g||t.u||(t.Z=1,hI(t.Ia,t),t.A=0)}function Sm(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=sc(St(t.Ia,t),GI(t,t.A)),t.A++,!0)}Y.Ia=function(){if(this.u=null,KI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=sc(St(this.eb,this),t)}};Y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Dt(10),Hl(this),KI(this))};function km(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function KI(t){t.g=new ac(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=nr(t.sa);De(e,"RID","rpc"),De(e,"SID",t.I),De(e,"CI",t.L?"0":"1"),De(e,"AID",t.T),De(e,"TYPE","xmlhttp"),hc(t,e),t.o&&t.s&&Em(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ql(nr(e)),n.s=null,n.P=!0,II(n,t)}Y.cb=function(){this.v!=null&&(this.v=null,Hl(this),Sm(this),Dt(19))};function Uu(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function WI(t,e){var n=null;if(t.g==e){Uu(t),km(t),t.g=null;var r=2}else if($d(t.h,e))n=e.D,OI(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ul(),yt(r,new vI(r,n)),Kl(t)}else HI(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&wO(t,e)||r==2&&Sm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Si(t,5);break;case 4:Si(t,10);break;case 3:Si(t,6);break;default:Si(t,2)}}}function GI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Si(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=St(t.kb,t);n||(n=new Li("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||Mu(n,"https"),ql(n)),mO(n.toString(),r)}else Dt(2);t.G=0,t.l&&t.l.va(e),YI(t),jI(t)}Y.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function YI(t){if(t.G=0,t.la=[],t.l){const e=LI(t.h);(e.length!=0||t.i.length!=0)&&(wy(t.la,e),wy(t.la,t.i),t.h.i.length=0,am(t.i),t.i.length=0),t.l.ua()}}function QI(t,e,n){var r=n instanceof Li?nr(n):new Li(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Fu(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Li(null,void 0);r&&Mu(s,r),e&&(s.g=e),i&&Fu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&De(r,n,e),De(r,"VER",t.ma),hc(t,r),r}function XI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new uc({jb:!0})):new je(t.ra),e.Ka(t.H),e}function JI(){}Y=JI.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Ra=function(){};function Vu(){if(js&&!(10<=Number(MD)))throw Error("Environmental error: no available transport.")}Vu.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){ct.call(this),this.g=new qI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Du(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Du(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ho(this)}bt(Qt,ct);Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Dt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=QI(t,null,t.V),Kl(t)};Qt.prototype.close=function(){Tm(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=mm(t),t=n);e.i.push(new lO(e.ab++,t)),e.G==3&&Kl(e)};Qt.prototype.M=function(){this.g.l=null,delete this.j,Tm(this.g),delete this.g,Qt.X.M.call(this)};function ZI(t){vm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}bt(ZI,vm);function e0(){wm.call(this),this.status=1}bt(e0,wm);function ho(t){this.g=t}bt(ho,JI);ho.prototype.xa=function(){yt(this.g,"a")};ho.prototype.wa=function(t){yt(this.g,new ZI(t))};ho.prototype.va=function(t){yt(this.g,new e0)};ho.prototype.ua=function(){yt(this.g,"b")};Vu.prototype.createWebChannel=Vu.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;Vl.NO_ERROR=0;Vl.TIMEOUT=8;Vl.HTTP_ERROR=6;wI.COMPLETE="complete";bI.EventType=oc;oc.OPEN="a";oc.CLOSE="b";oc.ERROR="c";oc.MESSAGE="d";ct.prototype.listen=ct.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var bO=function(){return new Vu},_O=function(){return Ul()},Hh=Vl,IO=wI,EO=ns,Ny={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},TO=uc,Vc=bI,SO=je;const Py="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new bl("@firebase/firestore");function qd(){return Ur.logLevel}function kO(t){Ur.setLogLevel(t)}function x(t,...e){if(Ur.logLevel<=ge.DEBUG){const n=e.map(Am);Ur.debug(`Firestore (${fo}): ${t}`,...n)}}function Ke(t,...e){if(Ur.logLevel<=ge.ERROR){const n=e.map(Am);Ur.error(`Firestore (${fo}): ${t}`,...n)}}function zs(t,...e){if(Ur.logLevel<=ge.WARN){const n=e.map(Am);Ur.warn(`Firestore (${fo}): ${t}`,...n)}}function Am(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function ne(t,e){t||j()}function AO(t,e){t||j()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Tt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class xO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RO{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new t0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new rt(e)}}class NO{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class PO{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new NO(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OO{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ne(typeof n.token=="string"),this.A=n.token,new DO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=LO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function r0(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Le(0,0))}static max(){return new te(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Na?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Na{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const MO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Na{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return MO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(fe.fromString(e))}static fromName(e){return new L(fe.fromString(e).popFirst(5))}static empty(){return new L(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function jd(t){return t.fields.find(e=>e.kind===2)}function fi(t){return t.fields.filter(e=>e.kind!==2)}i0.UNKNOWN_ID=-1;class FO{constructor(e,n){this.fieldPath=e,this.kind=n}}class Bu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Bu(0,Xt.min())}}function s0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Xt(i,L.empty(),e)}function o0(t){return new Xt(t.readTime,t.key,-1)}class Xt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xt(te.min(),L.empty(),-1)}static max(){return new Xt(te.max(),L.empty(),-1)}}function Cm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class c0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==a0)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new st,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new ea(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=xm(r.target.error);this.P.reject(new ea(e,i))}}static open(e,n,r,i){try{return new Wl(n,e.transaction(i,r))}catch(s){throw new ea(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new VO(n)}}class fn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,fn.D(Ve())===12.2&&Ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),yi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!va())return!1;if(fn.N())return!0;const e=Ve(),n=fn.D(e),r=0<n&&n<10,i=fn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ea(e,o))},i.onupgradeneeded=s=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Wl.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class UO{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return yi(this.U.delete())}}class ea extends C{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ei(t){return t.name==="IndexedDbTransactionError"}class VO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(x("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),yi(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),yi(this.store.add(e))}get(e){return yi(this.store.get(e)).next(n=>(n===void 0&&(n=null),x("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),yi(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),yi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=xm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new UO(a),u=n(a.primaryKey,a.value,c);if(u instanceof w){const l=u.catch(h=>(c.done(),w.reject(h)));r.push(l)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function yi(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=xm(r.target.error);n(i)}})}let Dy=!1;function xm(t){const e=fn.D(Ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Dy||(Dy=!0,setTimeout(()=>{throw r},0)),r}}return t}class BO{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){x("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){ei(n)?x("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Zr(n)}await this.nt(6e4)})}}class $O{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(x("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=o0(s);Cm(o,r)>0&&(r=o)}),new Xt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function u0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.at=-1;class ze{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bc(this.root,e,this.comparator,!0)}}class Bc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ft.RED,this.left=i!=null?i:ft.EMPTY,this.right=s!=null?s:ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ds(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new Ee(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ze(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const jO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(ne(!!t),typeof t=="string"){let e=0;const n=jO.exec(t);if(ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function l0(t){const e=t.mapValue.fields.__previous_value__;return Rm(e)?l0(e):e}function Pa(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Br{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}function dc(t){return t==null}function Da(t){return t===0&&1/t==-1/0}function h0(t){return typeof t=="number"&&Number.isInteger(t)&&!Da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},du={nullValue:"NULL_VALUE"};function $i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rm(t)?4:d0(t)?9007199254740991:10:j()}function qn(t,e){if(t===e)return!0;const n=$i(t);if(n!==$i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pa(t).isEqual(Pa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Vr(r.timestampValue),o=Vr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Bi(r.bytesValue).isEqual(Bi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=$e(r.doubleValue),o=$e(i.doubleValue);return s===o?Da(s)===Da(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Oy(s)!==Oy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!qn(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function Oa(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function $r(t,e){if(t===e)return 0;const n=$i(t),r=$i(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=$e(i.integerValue||i.doubleValue),a=$e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return My(t.timestampValue,e.timestampValue);case 4:return My(Pa(t),Pa(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Bi(i),a=Bi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ae(o[c],a[c]);if(u!==0)return u}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ae($e(i.latitude),$e(s.latitude));return o!==0?o:ae($e(i.longitude),$e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=$r(o[c],a[c]);if(u)return u}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===xr.mapValue&&s===xr.mapValue)return 0;if(i===xr.mapValue)return 1;if(s===xr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ae(a[l],u[l]);if(h!==0)return h;const d=$r(o[a[l]],c[u[l]]);if(d!==0)return d}return ae(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function My(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Vr(t),r=Vr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Ps(t){return zd(t)}function zd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Vr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=zd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${zd(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function qi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hd(t){return!!t&&"integerValue"in t}function La(t){return!!t&&"arrayValue"in t}function Fy(t){return!!t&&"nullValue"in t}function Uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fu(t){return!!t&&"mapValue"in t}function ta(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ta(t.arrayValue.values[n]);return e}return Object.assign({},t)}function d0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function HO(t){return"nullValue"in t?du:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?qi(Br.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:j()}function KO(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?qi(Br.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?xr:j()}function Vy(t,e){const n=$r(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function By(t,e){const n=$r(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ta(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ta(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(ta(this.value))}}function f0(t){const e=[];return rs(t.fields,(n,r)=>{const i=new We([n]);if(fu(r)){const s=f0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ke(e,0,te.min(),te.min(),mt.empty(),0)}static newFoundDocument(e,n,r){return new ke(e,1,n,te.min(),r,0)}static newNoDocument(e,n){return new ke(e,2,n,te.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,te.min(),mt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function $y(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WO(t,e,n,r,i,s,o)}function ji(t){const e=U(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ps(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ps(r)).join(",")),e.ht=n}return e.ht}function GO(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ps(r.value)}`;var r}).join(", ")}]`),dc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ps(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ps(n)).join(",")),`Target(${e})`}function fc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!nL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!qn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hy(t.startAt,e.startAt)&&Hy(t.endAt,e.endAt)}function $u(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function qu(t,e){return t.filters.filter(n=>n instanceof pt&&n.field.isEqual(e))}function qy(t,e,n){let r=du,i=!0;for(const s of qu(t,e)){let o=du,a=!0;switch(s.op){case"<":case"<=":o=HO(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=du}Vy({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Vy({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function jy(t,e,n){let r=xr,i=!0;for(const s of qu(t,e)){let o=xr,a=!0;switch(s.op){case">=":case">":o=KO(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=xr}By({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];By({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}class pt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new YO(e,n,r):n==="array-contains"?new JO(e,r):n==="in"?new ZO(e,r):n==="not-in"?new eL(e,r):n==="array-contains-any"?new tL(e,r):new pt(e,n,r)}static lt(e,n,r){return n==="in"?new QO(e,r):new XO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft($r(n,this.value)):n!==null&&$i(this.value)===$i(n)&&this.ft($r(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class YO extends pt{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.ft(n)}}class QO extends pt{constructor(e,n){super(e,"in",n),this.keys=m0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XO extends pt{constructor(e,n){super(e,"not-in",n),this.keys=m0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function m0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class JO extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return La(n)&&Oa(n.arrayValue,this.value)}}class ZO extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oa(this.value.arrayValue,n)}}class eL extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oa(this.value.arrayValue,n)}}class tL extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!La(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oa(this.value.arrayValue,r))}}class qr{constructor(e,n){this.position=e,this.inclusive=n}}class Ds{constructor(e,n="asc"){this.field=e,this.dir=n}}function nL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function zy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=$r(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function p0(t,e,n,r,i,s,o,a){return new lr(t,e,n,r,i,s,o,a)}function mo(t){return new lr(t)}function Ky(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Nm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pm(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Dm(t){return t.collectionGroup!==null}function Ks(t){const e=U(t);if(e._t===null){e._t=[];const n=Pm(e),r=Nm(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ds(n)),e._t.push(new Ds(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ds(We.keyField(),s))}}}return e._t}function jt(t){const e=U(t);if(!e.wt)if(e.limitType==="F")e.wt=$y(e.path,e.collectionGroup,Ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ks(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ds(s.field,o))}const r=e.endAt?new qr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new qr(e.startAt.position,e.startAt.inclusive):null;e.wt=$y(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function ju(t,e,n){return new lr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mc(t,e){return fc(jt(t),jt(e))&&t.limitType===e.limitType}function g0(t){return`${ji(jt(t))}|lt:${t.limitType}`}function Kd(t){return`Query(target=${GO(jt(t))}; limitType=${t.limitType})`}function Om(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=zy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ks(n),r)||n.endAt&&!function(i,s,o){const a=zy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ks(n),r))}(t,e)}function y0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function v0(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=rL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rL(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?$r(a,c):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(e)?"-0":e}}function b0(t){return{integerValue:""+t}}function _0(t,e){return h0(e)?b0(e):w0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this._=void 0}}function iL(t,e,n){return t instanceof Ws?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof zi?E0(t,e):t instanceof Hi?T0(t,e):function(r,i){const s=I0(r,i),o=Wy(s)+Wy(r.yt);return Hd(s)&&Hd(r.yt)?b0(o):w0(r.It,o)}(t,e)}function sL(t,e,n){return t instanceof zi?E0(t,e):t instanceof Hi?T0(t,e):n}function I0(t,e){return t instanceof Gs?Hd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ws extends Gl{}class zi extends Gl{constructor(e){super(),this.elements=e}}function E0(t,e){const n=S0(e);for(const r of t.elements)n.some(i=>qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Hi extends Gl{constructor(e){super(),this.elements=e}}function T0(t,e){let n=S0(e);for(const r of t.elements)n=n.filter(i=>!qn(i,r));return{arrayValue:{values:n}}}class Gs extends Gl{constructor(e,n){super(),this.It=e,this.yt=n}}function Wy(t){return $e(t.integerValue||t.doubleValue)}function S0(t){return La(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.field=e,this.transform=n}}function oL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof zi&&r instanceof zi||n instanceof Hi&&r instanceof Hi?Hs(n.elements,r.elements,qn):n instanceof Gs&&r instanceof Gs?qn(n.yt,r.yt):n instanceof Ws&&r instanceof Ws}(t.transform,e.transform)}class aL{constructor(e,n){this.version=e,this.transformResults=n}}class Oe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yl{}function k0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new go(t.key,Oe.none()):new po(t.key,t.data,Oe.none());{const n=t.data,r=mt.empty();let i=new Ee(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hr(t.key,r,new Gt(i.toArray()),Oe.none())}}function cL(t,e,n){t instanceof po?function(r,i,s){const o=r.value.clone(),a=Yy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(r,i,s){if(!mu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Yy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(A0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function na(t,e,n,r){return t instanceof po?function(i,s,o,a){if(!mu(i.precondition,s))return o;const c=i.value.clone(),u=Qy(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(i,s,o,a){if(!mu(i.precondition,s))return o;const c=Qy(i.fieldTransforms,a,s),u=s.data;return u.setAll(A0(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,o){return mu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function uL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=I0(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Gy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Hs(n,r,(i,s)=>oL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends Yl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hr extends Yl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function A0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yy(t,e,n){const r=new Map;ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sL(o,a,n[i]))}return r}function Qy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iL(s,o,e))}return r}class go extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lm extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,de;function C0(t){switch(t){default:return j();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function x0(t){if(t===void 0)return Ke("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ye.OK:return I.OK;case Ye.CANCELLED:return I.CANCELLED;case Ye.UNKNOWN:return I.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return I.INTERNAL;case Ye.UNAVAILABLE:return I.UNAVAILABLE;case Ye.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ye.NOT_FOUND:return I.NOT_FOUND;case Ye.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ye.ABORTED:return I.ABORTED;case Ye.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ye.DATA_LOSS:return I.DATA_LOSS;default:return j()}}(de=Ye||(Ye={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return u0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=new ze(L.comparator);function qt(){return hL}const R0=new ze(L.comparator);function qo(...t){let e=R0;for(const n of t)e=e.insert(n.key,n);return e}function N0(t){let e=R0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dn(){return ra()}function P0(){return ra()}function ra(){return new ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const dL=new ze(L.comparator),fL=new Ee(L.comparator);function ce(...t){let e=fL;for(const n of t)e=e.add(n);return e}const mL=new Ee(ae);function Ql(){return mL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,yc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gc(te.min(),i,Ql(),qt(),ce())}}class yc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yc(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class D0{constructor(e,n){this.targetId=e,this.At=n}}class O0{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xy{constructor(){this.Rt=0,this.bt=Zy(),this.Pt=Ze.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ce(),n=ce(),r=ce();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new yc(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Zy()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class pL{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=qt(),this.qt=Jy(),this.Kt=new Ee(ae)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if($u(s))if(r===0){const o=new L(s.path);this.jt(n,o,ke.newNoDocument(o,te.min()))}else ne(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&$u(a.target)){const c=new L(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,ke.newNoDocument(c,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ce();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new gc(e,n,this.Kt,this.Ut,r);return this.Ut=qt(),this.qt=Jy(),this.Kt=new Ee(ae),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Xy,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ee(ae),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Xy),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Jy(){return new ze(L.comparator)}function Zy(){return new ze(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vL{constructor(e,n){this.databaseId=e,this.gt=n}}function Ma(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L0(t,e){return t.gt?e.toBase64():e.toUint8Array()}function wL(t,e){return Ma(t,e.toTimestamp())}function ot(t){return ne(!!t),te.fromTimestamp(function(e){const n=Vr(e);return new Le(n.seconds,n.nanos)}(t))}function Mm(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function M0(t){const e=fe.fromString(t);return ne(z0(e)),e}function Fa(t,e){return Mm(t.databaseId,e.path)}function Fn(t,e){const n=M0(e);if(n.get(1)!==t.databaseId.projectId)throw new C(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(U0(n))}function Wd(t,e){return Mm(t.databaseId,e)}function F0(t){const e=M0(t);return e.length===4?fe.emptyPath():U0(e)}function Ua(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function U0(t){return ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ev(t,e,n){return{name:Fa(t,e),fields:n.value.mapValue.fields}}function V0(t,e,n){const r=Fn(t,e.name),i=ot(e.updateTime),s=new mt({mapValue:{fields:e.fields}}),o=ke.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function bL(t,e){return"found"in e?function(n,r){ne(!!r.found),r.found.name,r.found.updateTime;const i=Fn(n,r.found.name),s=ot(r.found.updateTime),o=new mt({mapValue:{fields:r.found.fields}});return ke.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){ne(!!r.missing),ne(!!r.readTime);const i=Fn(n,r.missing),s=ot(r.readTime);return ke.newNoDocument(i,s)}(t,e):j()}function _L(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.gt?(ne(u===void 0||typeof u=="string"),Ze.fromBase64String(u||"")):(ne(u===void 0||u instanceof Uint8Array),Ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:x0(c.code);return new C(u,c.message||"")}(o);n=new O0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fn(t,r.document.name),s=ot(r.document.updateTime),o=new mt({mapValue:{fields:r.document.fields}}),a=ke.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new pu(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fn(t,r.document),s=r.readTime?ot(r.readTime):te.min(),o=ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fn(t,r.document),s=r.removedTargetIds||[];n=new pu([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new lL(i),o=r.targetId;n=new D0(o,s)}}return n}function Va(t,e){let n;if(e instanceof po)n={update:ev(t,e.key,e.value)};else if(e instanceof go)n={delete:Fa(t,e.key)};else if(e instanceof hr)n={update:ev(t,e.key,e.data),updateMask:CL(e.fieldMask)};else{if(!(e instanceof Lm))return j();n={verify:Fa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ws)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Hi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Gs)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:wL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function Gd(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Oe.updateTime(ot(i.updateTime)):i.exists!==void 0?Oe.exists(i.exists):Oe.none()}(e.currentDocument):Oe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)ne(o.setToServerValue==="REQUEST_TIME"),a=new Ws;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new zi(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Hi(u)}else"increment"in o?a=new Gs(s,o.increment):j();const c=We.fromServerFormat(o.fieldPath);return new pc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Fn(t,e.update.name),s=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Gt(c.map(u=>We.fromServerFormat(u)))}(e.updateMask);return new hr(i,s,o,n,r)}return new po(i,s,n,r)}if(e.delete){const i=Fn(t,e.delete);return new go(i,n)}if(e.verify){const i=Fn(t,e.verify);return new Lm(i,n)}return j()}function IL(t,e){return t&&t.length>0?(ne(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?ot(r.updateTime):ot(i);return s.isEqual(te.min())&&(s=ot(i)),new aL(s,r.transformResults||[])}(n,e))):[]}function B0(t,e){return{documents:[Wd(t,e.path)]}}function $0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Wd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Uy(h.value))return{unaryFilter:{field:fs(h.field),op:"IS_NAN"}};if(Fy(h.value))return{unaryFilter:{field:fs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Uy(h.value))return{unaryFilter:{field:fs(h.field),op:"IS_NOT_NAN"}};if(Fy(h.value))return{unaryFilter:{field:fs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(h.field),op:SL(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:fs(l.field),direction:TL(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,u){return c.gt||dc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function q0(t){let e=F0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ne(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=j0(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ds(_s(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,dc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new qr(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new qr(d,h)}(n.endAt)),p0(e,i,o,s,a,"F",c,u)}function EL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function j0(t){return t?t.unaryFilter!==void 0?[AL(t)]:t.fieldFilter!==void 0?[kL(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>j0(e)).reduce((e,n)=>e.concat(n)):j():[]}function TL(t){return gL[t]}function SL(t){return yL[t]}function fs(t){return{fieldPath:t.canonicalString()}}function _s(t){return We.fromServerFormat(t.fieldPath)}function kL(t){return pt.create(_s(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function AL(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_s(t.unaryFilter.field);return pt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_s(t.unaryFilter.field);return pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_s(t.unaryFilter.field);return pt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_s(t.unaryFilter.field);return pt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function CL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function z0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tv(e)),e=xL(t.get(n),e);return tv(e)}function xL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function tv(t){return t+""}function On(t){const e=t.length;if(ne(e>=2),e===2)return ne(t.charAt(0)===""&&t.charAt(1)===""),fe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&j(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:j()}s=o+2}return new fe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){return[t,Ot(e)]}function H0(t,e,n){return[t,Ot(e),n]}const RL={},NL=["prefixPath","collectionGroup","readTime","documentId"],PL=["prefixPath","collectionGroup","documentId"],DL=["collectionGroup","readTime","prefixPath","documentId"],OL=["canonicalId","targetId"],LL=["targetId","path"],ML=["path","targetId"],FL=["collectionId","parent"],UL=["indexId","uid"],VL=["uid","sequenceNumber"],BL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],$L=["indexId","uid","orderedDocumentKey"],qL=["userId","collectionPath","documentId"],jL=["userId","collectionPath","largestBatchId"],zL=["userId","collectionGroup","largestBatchId"],K0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],HL=[...K0,"documentOverlays"],W0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],G0=W0,KL=[...G0,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends c0{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function lt(t,e){const n=U(t);return fn.M(n.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=k0(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,r)=>Gy(n,r))&&Hs(this.baseMutations,e.baseMutations,(n,r)=>Gy(n,r))}}class Um{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ne(e.mutations.length===r.length);let i=dL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Um(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.re=e}}function WL(t,e){let n;if(e.document)n=V0(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=Wi(e.noDocument.readTime);n=ke.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return j();{const r=L.fromSegments(e.unknownDocument.path),i=Wi(e.unknownDocument.version);n=ke.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Le(r[0],r[1]);return te.fromTimestamp(i)}(e.readTime)),n}function rv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:zu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Fa(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Ma(i,s.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ki(e.version)};else{if(!e.isUnknownDocument())return j();r.unknownDocument={path:n.path.toArray(),version:Ki(e.version)}}return r}function zu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ki(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Wi(t){const e=new Le(t.seconds,t.nanoseconds);return te.fromTimestamp(e)}function vi(t,e){const n=(e.baseMutations||[]).map(s=>Gd(t.re,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Gd(t.re,s)),i=Le.fromMillis(e.localWriteTimeMs);return new Fm(e.batchId,i,n,r)}function jo(t){const e=Wi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Wi(t.lastLimboFreeSnapshotVersion):te.min();let r;var i;return t.query.documents!==void 0?(ne((i=t.query).documents.length===1),r=jt(mo(F0(i.documents[0])))):r=function(s){return jt(q0(s))}(t.query),new Dr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Ze.fromBase64String(t.resumeToken))}function Q0(t,e){const n=Ki(e.snapshotVersion),r=Ki(e.lastLimboFreeSnapshotVersion);let i;i=$u(e.target)?B0(t.re,e.target):$0(t.re,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ji(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Bm(t){const e=q0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ju(e,e.limit,"L"):e}function Kh(t,e){return new Vm(e.largestBatchId,Gd(t.re,e.overlayMutation))}function iv(t,e){const n=e.path.lastSegment();return[t,Ot(e.path.popLast()),n]}function sv(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ki(r.readTime),documentKey:Ot(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{getBundleMetadata(e,n){return ov(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Wi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return ov(e).put({bundleId:(r=n).id,createTime:Ki(ot(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return av(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Bm(i.bundledQuery),readTime:Wi(i.readTime)};var i})}saveNamedQuery(e,n){return av(e).put(function(r){return{name:r.name,readTime:Ki(ot(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function ov(t){return lt(t,"bundles")}function av(t){return lt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const r=n.uid||"";return new Xl(e,r)}getOverlay(e,n){return Ro(e).get(iv(this.userId,n)).next(r=>r?Kh(this.It,r):null)}getOverlays(e,n){const r=Dn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Vm(n,o);i.push(this.ue(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ot(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ro(e).Y("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Dn(),s=Ot(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ro(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Kh(this.It,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Dn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ro(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Kh(this.It,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ue(e,n){return Ro(e).put(function(r,i,s){const[o,a,c]=iv(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Va(r.re,s.mutation)}}(this.It,this.userId,n))}}function Ro(t){return lt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe($e(e.integerValue));else if("doubleValue"in e){const r=$e(e.doubleValue);isNaN(r)?this.le(n,13):(this.le(n,15),Da(r)?n.fe(0):n.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(n,20),typeof r=="string"?n.de(r):(n.de(`${r.seconds||""}`),n.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(Bi(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(n,45),n.fe(r.latitude||0),n.fe(r.longitude||0)}else"mapValue"in e?d0(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):j()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const r=e.fields||{};this.le(n,55);for(const i of Object.keys(r))this._e(i,n),this.ae(r[i],n)}pe(e,n){const r=e.values||[];this.le(n,50);for(const i of r)this.ae(i,n)}ge(e,n){this.le(n,37),L.fromName(e).path.forEach(r=>{this.le(n,60),this.Ie(r,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}wi.Te=new wi;function YL(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function cv(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=YL(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class QL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.ve()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=n.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=n.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const n=this.Ce(e),r=cv(n);this.xe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ne(e){const n=this.Ce(e),r=cv(n);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ae(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class XL{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class JL{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class No{constructor(){this.Be=new QL,this.Le=new XL(this.Be),this.Ue=new JL(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new bi(this.indexId,this.documentKey,this.arrayValue,r)}}function ui(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=uv(t.arrayValue,e.arrayValue),n!==0?n:(n=uv(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function uv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const r=n;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const n=jd(e);if(n!==void 0&&!this.ze(n))return!1;const r=fi(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.je!==void 0){const o=r[i];if(!this.He(this.je,o)||!this.Je(this.Ge[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(){this.Ye=new $m}addToCollectionParentIndex(e,n){return this.Ye.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Xt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class $m{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ee(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Uint8Array(0);class tM{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new $m,this.Ze=new ti(r=>ji(r),(r,i)=>fc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:Ot(i)};return lv(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[r0(n),""],!1,!0);return lv(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(On(o.parent))}return r})}addFieldIndex(e,n){const r=qc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Do(e);return s.next(a=>{o.put(sv(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=qc(e),i=Do(e),s=Po(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Po(e);let i=!0;const s=new Map;return w.forEach(this.tn(n),o=>this.en(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ce();const a=[];return w.forEach(s,(c,u)=>{var l;x("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`} to execute ${ji(n)}`);const h=function(E,R){const F=jd(R);if(F===void 0)return null;for(const z of qu(E,F.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(u,c),d=function(E,R){const F=new Map;for(const z of fi(R))for(const ee of qu(E,z.fieldPath))switch(ee.op){case"==":case"in":F.set(z.fieldPath.canonicalString(),ee.value);break;case"not-in":case"!=":return F.set(z.fieldPath.canonicalString(),ee.value),Array.from(F.values())}return null}(u,c),f=function(E,R){const F=[];let z=!0;for(const ee of fi(R)){const Q=ee.kind===0?qy(E,ee.fieldPath,E.startAt):jy(E,ee.fieldPath,E.startAt);F.push(Q.value),z&&(z=Q.inclusive)}return new qr(F,z)}(u,c),p=function(E,R){const F=[];let z=!0;for(const ee of fi(R)){const Q=ee.kind===0?jy(E,ee.fieldPath,E.endAt):qy(E,ee.fieldPath,E.endAt);F.push(Q.value),z&&(z=Q.inclusive)}return new qr(F,z)}(u,c),y=this.nn(c,u,f),b=this.nn(c,u,p),v=this.sn(c,u,d),_=this.rn(c.indexId,h,y,f.inclusive,b,p.inclusive,v);return w.forEach(_,E=>r.J(E,n.limit).next(R=>{R.forEach(F=>{const z=L.fromSegments(F.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return w.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.on(n[h/u]):$c,f=this.un(e,d,r[h%u],i),p=this.cn(e,d,s[h%u],o),y=a.map(b=>this.un(e,d,b,!0));l.push(...this.createRange(f,p,y))}return l}un(e,n,r,i){const s=new bi(e,L.empty(),n,r);return i?s:s.Ke()}cn(e,n,r,i){const s=new bi(e,L.empty(),n,r);return i?s.Ke():s}en(e,n){const r=new ZL(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return w.forEach(this.tn(n),i=>this.en(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new Ee(We.comparator),c=!1;for(const u of o.filters){const l=u;l.field.isKeyField()||(l.op==="array-contains"||l.op==="array-contains-any"?c=!0:a=a.add(l.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(c?1:0)}(i)&&(r=1):r=0})).next(()=>r)}an(e,n){const r=new No;for(const i of fi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);wi.Te.ce(s,o)}return r.$e()}on(e){const n=new No;return wi.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const r=new No;return wi.Te.ce(qi(this.databaseId,n),r.qe(function(i){const s=fi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}sn(e,n,r){if(r===null)return[];let i=[];i.push(new No);let s=0;for(const o of fi(e)){const a=r[s++];for(const c of i)if(this.ln(n,o.fieldPath)&&La(a))i=this.fn(i,o,a);else{const u=c.qe(o.kind);wi.Te.ce(a,u)}}return this.dn(i)}nn(e,n,r){return this.sn(e,n,r.position)}dn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new No;c.seed(a.$e()),wi.Te.ce(o,c.qe(n.kind)),s.push(c)}return s}ln(e,n){return!!e.filters.find(r=>r instanceof pt&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=qc(e),i=Do(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Bu(l.sequenceNumber,new Xt(Wi(l.readTime),new L(On(l.documentKey)),l.largestBatchId)):Bu.empty(),d=u.fields.map(([f,p])=>new FO(We.fromServerFormat(f),p));return new i0(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ae(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=qc(e),s=Do(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,c=>s.put(sv(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,c=>this.wn(e,i,c).next(u=>{const l=this.mn(s,c);return u.isEqual(l)?w.resolve():this.gn(e,s,c,u,l)}))))})}yn(e,n,r,i){return Po(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(r,n.key),documentKey:n.key.path.toArray()})}pn(e,n,r,i){return Po(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Po(e);let s=new Ee(ui);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,n)])},(o,a)=>{s=s.add(new bi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}mn(e,n){let r=new Ee(ui);const i=this.an(n,e);if(i==null)return r;const s=jd(n);if(s!=null){const o=e.data.field(s.fieldPath);if(La(o))for(const a of o.arrayValue.values||[])r=r.add(new bi(n.indexId,e.key,this.on(a),i))}else r=r.add(new bi(n.indexId,e.key,$c,i));return r}gn(e,n,r,i,s){x("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let p=ds(d),y=ds(f);for(;p||y;){let b=!1,v=!1;if(p&&y){const _=u(p,y);_<0?v=!0:_>0&&(b=!0)}else p!=null?v=!0:b=!0;b?(l(y),y=ds(f)):v?(h(p),p=ds(d)):(p=ds(d),y=ds(f))}}(i,s,ui,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.pn(e,n,r,a))}),w.waitFor(o)}_n(e){let n=1;return Do(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ui(o,a)).filter((o,a,c)=>!a||ui(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ui(o,e),c=ui(o,n);if(a===0)i[0]=e.Ke();else if(a>0&&c<0)i.push(o),i.push(o.Ke());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,$c,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,$c,[]]));return s}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(hv)}getMinOffset(e,n){return w.mapArray(this.tn(n),r=>this.en(e,r).next(i=>i||j())).next(hv)}}function lv(t){return lt(t,"collectionParents")}function Po(t){return lt(t,"indexEntries")}function qc(t){return lt(t,"indexConfiguration")}function Do(t){return lt(t,"indexState")}function hv(t){ne(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Cm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Xt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Vt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{ne(a===1)}));const u=[];for(const l of n.mutations){const h=H0(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return w.waitFor(s).next(()=>u)}function Hu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw j();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(41943040,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);class Jl{constructor(e,n,r,i){this.userId=e,this.It=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static oe(e,n,r,i){ne(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Jl(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return _r(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=vs(e),o=_r(e);return o.add({}).next(a=>{ne(typeof a=="number");const c=new Fm(a,n,r,i),u=function(d,f,p){const y=p.baseMutations.map(v=>Va(d.re,v)),b=p.mutations.map(v=>Va(d.re,v));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:y,mutations:b}}(this.It,this.userId,c),l=[];let h=new Ee((d,f)=>ae(d.canonicalString(),f.canonicalString()));for(const d of i){const f=H0(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,RL))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),w.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return _r(e).get(n).next(r=>r?(ne(r.userId===this.userId),vi(this.It,r)):null)}Tn(e,n){return this.In[n]?w.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return _r(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(ne(a.batchId>=r),s=vi(this.It,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return _r(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return _r(e).W("userMutationsIndex",n).next(r=>r.map(i=>vi(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=gu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return vs(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=On(l);if(u===this.userId&&n.path.isEqual(d))return _r(e).get(h).next(f=>{if(!f)throw j();ne(f.userId===this.userId),s.push(vi(this.It,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(ae);const i=[];return n.forEach(s=>{const o=gu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=vs(e).Z({range:a},(u,l,h)=>{const[d,f,p]=u,y=On(f);d===this.userId&&s.path.isEqual(y)?r=r.add(p):h.done()});i.push(c)}),w.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=gu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ee(ae);return vs(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,p=On(d);h===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):l.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(_r(e).get(s).next(o=>{if(o===null)throw j();ne(o.userId===this.userId),r.push(vi(this.It,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return X0(e.ie,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return vs(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=On(s[1]);i.push(c)}else a.done()}).next(()=>{ne(i.length===0)})})}containsKey(e,n){return J0(e,this.userId,n)}Rn(e){return Z0(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function J0(t,e,n){const r=gu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return vs(t).Z({range:s,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function _r(t){return lt(t,"mutations")}function vs(t){return lt(t,"documentMutations")}function Z0(t){return lt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Gi(0)}static vn(){return new Gi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Gi(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>te.fromTimestamp(new Le(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ms(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(ne(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ms(e).Z((o,a)=>{const c=jo(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ms(e).Z((r,i)=>{const s=jo(i);n(s)})}Vn(e){return fv(e).get("targetGlobalKey").next(n=>(ne(n!==null),n))}Sn(e,n){return fv(e).put("targetGlobalKey",n)}Dn(e,n){return ms(e).put(Q0(this.It,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ji(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ms(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=jo(a);fc(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=kr(e);return n.forEach(o=>{const a=Ot(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=kr(e);return w.forEach(n,s=>{const o=Ot(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=kr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=kr(e);let s=ce();return i.Z({range:r,X:!0},(o,a,c)=>{const u=On(o[1]),l=new L(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=Ot(n.path),i=IDBKeyRange.bound([r],[r0(r)],!1,!0);let s=0;return kr(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}se(e,n){return ms(e).get(n).next(r=>r?jo(r):null)}}function ms(t){return lt(t,"targets")}function fv(t){return lt(t,"targetGlobal")}function kr(t){return lt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class rM{constructor(e){this.xn=e,this.buffer=new Ee(mv),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();mv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class iM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ei(n)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Zr(n)}await this.Fn(3e5)})}}class sM{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve($t.at);const r=new rM(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(dv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dv):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),qd()<=ge.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new sM(r,i)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return jc(e,r)}removeReference(e,n,r){return jc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return jc(e,n)}Gn(e,n){return function(r,i){let s=!1;return Z0(r).tt(o=>J0(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),kr(e).delete([0,Ot(o.path)])))});i.push(c)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return jc(e,n)}Kn(e,n){const r=kr(e);let i,s=$t.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==$t.at&&n(new L(On(i)),s),s=u,i=c):s=$t.at}).next(()=>{s!==$t.at&&n(new L(On(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function jc(t,e){return kr(t).put(function(n,r){return{targetId:0,path:Ot(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.changes=new ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return li(e).put(r)}removeEntry(e,n,r){return li(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],zu(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=ke.newInvalidDocument(n);return li(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Oo(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:ke.newInvalidDocument(n)};return li(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Oo(n))},(i,s)=>{r={document:this.jn(n,s),size:Hu(s)}}).next(()=>r)}getEntries(e,n){let r=qt();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=qt(),i=new ze(L.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,Hu(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return w.resolve();let i=new Ee(yv);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Oo(i.first()),Oo(i.last())),o=i.getIterator();let a=o.getNext();return li(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&yv(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(Oo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),zu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return li(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=qt();for(const c of o){const u=this.jn(L.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=qt();const o=gv(n,r),a=gv(n,Xt.max());return li(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new cM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return pv(e).get("remoteDocumentGlobalKey").next(n=>(ne(!!n),n))}Qn(e,n){return pv(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=WL(this.It,n);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return ke.newInvalidDocument(e)}}function tE(t){return new aM(t)}class cM extends eE{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new ti(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ee((s,o)=>ae(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=rv(this.Yn.It,o);i=i.add(s.path.popLast());const u=Hu(c);r+=u-a.size,n.push(this.Yn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=rv(this.Yn.It,o.convertToNoDocument(te.min()));n.push(this.Yn.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function pv(t){return lt(t,"remoteDocumentGlobal")}function li(t){return lt(t,"remoteDocumentsV14")}function Oo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function gv(t,e){const n=e.documentKey.path.toArray();return[t,zu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function yv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ae(n[s],r[s]),i)return i;return i=ae(n.length,r.length),i||(i=ae(n[n.length-2],r[r.length-2]),i||ae(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&na(r.mutation,i,Gt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Dn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qt();const o=ra(),a=ra();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof hr)?s=s.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),na(l.mutation,u,l.mutation.getFieldMask(),Le.now()))}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new uM(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ra();let i=new ze((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Gt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||ce()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=P0();l.forEach(d=>{if(!s.has(d)){const f=k0(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Dn());let a=-1,c=s;return o.next(u=>w.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?w.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ce())).next(l=>({batchId:a,changes:N0(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=qo();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const c=function(u,l){return new lr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ke.newInvalidDocument(u)))});let o=qo();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&na(u.mutation,c,Gt.empty(),Le.now()),Om(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):w.resolve(ke.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:ot(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Bm(r.bundledQuery),readTime:ot(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(){this.overlays=new ze(L.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Dn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ze((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Dn(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Dn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return w.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vm(n,r));let s=this.es.get(n);s===void 0&&(s=ce(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.ns=new Ee(nt.ss),this.rs=new Ee(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new nt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new nt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new fe([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new fe([])),r=new nt(n,e),i=new nt(n,e+1);let s=ce();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||ae(e._s,n._s)}static os(e,n){return ae(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ee(nt.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(ae);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),w.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new nt(new L(s),0);let a=new Ee(ae);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return w.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new nt(n,0),i=this.gs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e){this.Es=e,this.docs=new ze(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let r=qt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ke.newInvalidDocument(i))}),w.resolve(r)}getAllFromCollection(e,n,r){let i=qt();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Cm(o0(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,i){j()}As(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mM(this)}getSize(e){return w.resolve(this.size)}}class mM extends eE{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e){this.persistence=e,this.Rs=new ti(n=>ji(n),fc),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.bs=0,this.Ps=new qm,this.targetCount=0,this.vs=Gi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new $t(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new pM(this),this.indexManager=new eM,this.remoteDocumentCache=function(r){return new fM(r)}(r=>this.referenceDelegate.xs(r)),this.It=new Y0(n),this.Ns=new lM(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new dM(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new gM(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return w.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class gM extends c0{constructor(e){super(),this.currentSequenceNumber=e}}class Zl{constructor(e){this.persistence=e,this.Fs=new qm,this.$s=null}static Bs(e){return new Zl(e)}get Ls(){if(this.$s)return this.$s;throw j()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e){this.It=e}$(e,n,r,i){const s=new Wl("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nv,{unique:!0}),a.createObjectStore("documentMutations")}(e),vv(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),vv(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nv,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:qL});c.createIndex("collectionPathOverlayIndex",jL,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",zL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:NL});c.createIndex("documentKeyIndex",PL),c.createIndex("collectionGroupIndex",DL)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:UL}).createIndex("sequenceNumberIndex",VL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:BL}).createIndex("documentKeyIndex",$L,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Hu(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,c=>{ne(c.userId===s.userId);const u=vi(this.It,c);return X0(e,s.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new fe(o),u=function(l){return[0,Ot(l)]}(c);s.push(n.get(u).next(l=>l?w.resolve():(h=>n.put({targetId:0,path:Ot(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:FL});const r=n.store("collectionParents"),i=new $m,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ot(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new fe(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=On(a);return s(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=jo(i),o=Q0(this.It,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new L(fe.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):j()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>w.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=tE(this.It),s=new rE(Zl.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ce();vi(this.It,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),w.forEach(a,(c,u)=>{const l=new rt(u),h=Xl.oe(this.It,l),d=s.getIndexManager(l),f=Jl.oe(l,this.It,d,s.referenceDelegate);return new nE(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Yd(n,$t.at),c).next()})})}}function vv(t){t.createObjectStore("targetDocuments",{keyPath:LL}).createIndex("documentTargetsIndex",ML,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",OL,{unique:!0}),t.createObjectStore("targetGlobal")}const Wh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class jm{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!jm.C())throw new C(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new oM(this,i),this.ii=n+"main",this.It=new Y0(c),this.ri=new fn(this.ii,this.Xs,new yM(this.It)),this.Cs=new nM(this.referenceDelegate,this.It),this.remoteDocumentCache=tE(this.It),this.Ns=new GL,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&Ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(I.FAILED_PRECONDITION,Wh);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new $t(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>zc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(ei(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Lo(e).get("owner").next(n=>w.resolve(this.mi(n)))}gi(e){return zc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=lt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?w.resolve(!0):Lo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new C(I.FAILED_PRECONDITION,Wh);return!1}}return!(!this.networkEnabled||!this.inForeground)||zc(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&x("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Yd(e,$t.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>zc(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Jl.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new tM(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Xl.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){x("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?KL:o===14?G0:o===13?W0:o===12?HL:o===11?K0:void j();var o;let a;return this.ri.runTransaction(e,i,s,c=>(a=new Yd(c,this.Ss?this.Ss.next():$t.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw Ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new C(I.FAILED_PRECONDITION,a0);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Lo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(I.FAILED_PRECONDITION,Wh)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Lo(e).put("owner",n)}static C(){return fn.C()}_i(e){const n=Lo(e);return n.get("owner").next(r=>this.mi(r)?(x("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),ZA()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ke("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lo(t){return lt(t,"owner")}function zc(t){return lt(t,"clientMetadata")}function zm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Ky(n))return w.resolve(null);let r=jt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ju(n,null,"F"),r=jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,ju(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,r,i){return Ky(n)||i.isEqual(te.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(qd()<=ge.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kd(n)),this.Bi(e,o,n,s0(i,-1)))})}Fi(e,n){let r=new Ee(v0(e));return n.forEach((i,s)=>{Om(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return qd()<=ge.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Kd(n)),this.Ni.getDocumentsMatchingQuery(e,n,Xt.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ze(ae),this.qi=new ti(s=>ji(s),fc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nE(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function sE(t,e,n,r){return new vM(t,e,n,r)}async function oE(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ce();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function wM(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=w.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const y=c.docVersions.get(f);ne(y!==null),p.version.compareTo(y)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function aE(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function bM(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ze.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(p,y,b){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(n.Cs.updateTargetData(s,f))});let c=qt(),u=ce();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(cE(s,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(te.min())){const l=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ui=i,s))}function cE(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qt();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function _M(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ys(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Dr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Qs(t,e,n){const r=U(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ei(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Ku(t,e,n){const r=U(t);let i=te.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=U(a),h=l.qi.get(u);return h!==void 0?w.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(r,o,jt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:ce())).next(a=>(hE(r,y0(e),a),{documents:a,Hi:s})))}function uE(t,e){const n=U(t),r=U(n.Cs),i=n.Ui.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.se(s,e).next(o=>o?o.target:null))}function lE(t,e){const n=U(t),r=n.Ki.get(e)||te.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,s0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(hE(n,e,i),i))}function hE(t,e,n){let r=t.Ki.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function IM(t,e,n,r){const i=U(t);let s=ce(),o=qt();for(const u of n){const l=e.Ji(u.metadata.name);u.document&&(s=s.add(l));const h=e.Yi(u);h.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await Ys(i,function(u){return jt(mo(fe.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>cE(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Cs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function EM(t,e,n=ce()){const r=await Ys(t,jt(Bm(e.bundledQuery))),i=U(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ot(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(Ze.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function wv(t,e){return`firestore_clients_${t}_${e}`}function bv(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Gh(t,e){return`firestore_targets_${t}_${e}`}class Wu{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new Wu(e,n,i.state,s):(Ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ia{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new ia(e,r.state,i):(Ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Gu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ql();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=h0(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Gu(e,s):(Ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Km{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Km(n.clientId,n.onlineState):(Ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Qd{constructor(){this.activeTargetIds=Ql()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yh{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new ze(ae),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=wv(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Qd),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(wv(this.persistenceKey,r));if(i){const s=Gu.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Gh(this.persistenceKey,e));if(r){const i=ia.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Gh(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return x("SharedClientState","READ",e,n),n}setItem(e,n){x("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(x("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=$t.at;if(i!=null)try{const o=JSON.parse(i);ne(typeof o=="number"),s=o}catch(o){Ke("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==$t.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new Wu(this.currentUser,e,n,r),s=bv(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=bv(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=Gh(this.persistenceKey,e),s=new ia(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return Gu.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Wu.Zi(new rt(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return ia.Zi(i,n)}yr(e){return Km.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=Ql();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class dE{constructor(){this.Lr=new Qd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Qd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);x("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(c=>(x("RestConnection","Received: ",c),c),c=>{throw zs("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+fo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=SM[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new SO;a.setWithCredentials(!0),a.listenOnce(IO.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Hh.NO_ERROR:const l=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Hh.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new C(I.DEADLINE_EXCEEDED,"Request time out"));break;case Hh.HTTP_ERROR:const h=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=(u=d)===null||u===void 0?void 0:u.error;if(f&&f.status&&f.message){const p=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(b)>=0?b:I.UNKNOWN}(f.status);o(new C(p,f.message))}else o(new C(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(I.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=bO(),o=_O(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new TO({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=i.join("");x("Connection","Creating WebChannel: "+c,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new kM({Hr:p=>{h?x("Connection","Not sending because WebChannel is closed:",p):(l||(x("Connection","Opening WebChannel transport."),u.open(),l=!0),x("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),f=(p,y,b)=>{p.listen(y,v=>{try{b(v)}catch(_){setTimeout(()=>{throw _},0)}})};return f(u,Vc.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),f(u,Vc.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),d.io())}),f(u,Vc.EventType.ERROR,p=>{h||(h=!0,zs("Connection","WebChannel transport errored:",p),d.io(new C(I.UNAVAILABLE,"The operation could not be completed")))}),f(u,Vc.EventType.MESSAGE,p=>{var y;if(!h){const b=p.data[0];ne(!!b);const v=b,_=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(_){x("Connection","WebChannel received error:",_);const E=_.status;let R=function(z){const ee=Ye[z];if(ee!==void 0)return x0(ee)}(E),F=_.message;R===void 0&&(R=I.INTERNAL,F="Unknown error status: "+E+" with message "+_.message),h=!0,d.io(new C(R,F)),u.close()}else x("Connection","WebChannel received:",b),d.ro(b)}}),f(o,EO.STAT_EVENT,p=>{p.stat===Ny.PROXY?x("Connection","Detected buffering proxy"):p.stat===Ny.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(){return typeof window<"u"?window:null}function yu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t){return new vL(t,!0)}class Wm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n,r,i,s,o,a,c){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Wm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new C(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CM extends mE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=_L(this.It,e),r=function(i){if(!("targetChange"in i))return te.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?ot(s.readTime):te.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Ua(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=$u(a)?{documents:B0(i,a)}:{query:$0(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=L0(i,s.resumeToken):s.snapshotVersion.compareTo(te.min())>0&&(o.readTime=Ma(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=EL(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Ua(this.It),n.removeTarget=e,this.Bo(n)}}class xM extends mE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=IL(e.writeResults,e.commitTime),r=ot(e.commitTime);return this.listener.Zo(r,n)}return ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ua(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Va(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new C(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(I.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(I.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class NM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ke(n),this.ou=!1):x("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{ni(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=U(a);c._u.add(4),await yo(c),c.gu.set("Unknown"),c._u.delete(4),await wc(c)}(this))})}),this.gu=new NM(r,i)}}async function wc(t){if(ni(t))for(const e of t.wu)await e(!0)}async function yo(t){for(const e of t.wu)await e(!1)}function eh(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Qm(n)?Ym(n):wo(n).ko()&&Gm(n,e))}function Ba(t,e){const n=U(t),r=wo(n);n.du.delete(e),r.ko()&&pE(n,e),n.du.size===0&&(r.ko()?r.Fo():ni(n)&&n.gu.set("Unknown"))}function Gm(t,e){t.yu.Mt(e.targetId),wo(t).zo(e)}function pE(t,e){t.yu.Mt(e),wo(t).Ho(e)}function Ym(t){t.yu=new pL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),wo(t).start(),t.gu.uu()}function Qm(t){return ni(t)&&!wo(t).No()&&t.du.size>0}function ni(t){return U(t)._u.size===0}function gE(t){t.yu=void 0}async function DM(t){t.du.forEach((e,n)=>{Gm(t,e)})}async function OM(t,e){gE(t),Qm(t)?(t.gu.hu(e),Ym(t)):t.gu.set("Unknown")}async function LM(t,e,n){if(t.gu.set("Online"),e instanceof O0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yu(t,r)}else if(e instanceof pu?t.yu.Gt(e):e instanceof D0?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(te.min()))try{const r=await aE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(Ze.EMPTY_BYTE_STRING,c.snapshotVersion)),pE(i,a);const u=new Dr(c.target,a,1,c.sequenceNumber);Gm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Yu(t,r)}}async function Yu(t,e,n){if(!ei(e))throw e;t._u.add(1),await yo(t),t.gu.set("Offline"),n||(n=()=>aE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await wc(t)})}function yE(t,e){return e().catch(n=>Yu(t,n,e))}async function vo(t){const e=U(t),n=jr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;MM(e);)try{const i=await _M(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,FM(e,i)}catch(i){await Yu(e,i)}vE(e)&&wE(e)}function MM(t){return ni(t)&&t.fu.length<10}function FM(t,e){t.fu.push(e);const n=jr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function vE(t){return ni(t)&&!jr(t).No()&&t.fu.length>0}function wE(t){jr(t).start()}async function UM(t){jr(t).eu()}async function VM(t){const e=jr(t);for(const n of t.fu)e.Xo(n.mutations)}async function BM(t,e,n){const r=t.fu.shift(),i=Um.from(r,e,n);await yE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vo(t)}async function $M(t,e){e&&jr(t).Yo&&await async function(n,r){if(i=r.code,C0(i)&&i!==I.ABORTED){const s=n.fu.shift();jr(n).Mo(),await yE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await vo(n)}var i}(t,e),vE(t)&&wE(t)}async function Iv(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=ni(n);n._u.add(3),await yo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await wc(n)}async function Xd(t,e){const n=U(t);e?(n._u.delete(2),await wc(n)):e||(n._u.add(2),await yo(n),n.gu.set("Unknown"))}function wo(t){return t.pu||(t.pu=function(e,n,r){const i=U(e);return i.su(),new CM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:DM.bind(null,t),Zr:OM.bind(null,t),Wo:LM.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Qm(t)?Ym(t):t.gu.set("Unknown")):(await t.pu.stop(),gE(t))})),t.pu}function jr(t){return t.Iu||(t.Iu=function(e,n,r){const i=U(e);return i.su(),new xM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:UM.bind(null,t),Zr:$M.bind(null,t),tu:VM.bind(null,t),Zo:BM.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await vo(t)):(await t.Iu.stop(),t.fu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Xm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bo(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),ei(t))return new C(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=qo(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.Tu=new ze(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):j():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xs(e,n,Os.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.Au=void 0,this.listeners=[]}}class jM{constructor(){this.queries=new ti(e=>g0(e),mc),this.onlineState="Unknown",this.Ru=new Set}}async function Jm(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qM),i)try{s.Au=await n.onListen(r)}catch(o){const a=bo(o,`Initialization of query '${Kd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&ep(n)}async function Zm(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zM(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&ep(n)}function HM(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ep(t){t.Ru.forEach(e=>{e.next()})}class tp{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.It=e}Ji(e){return Fn(this.It,e)}Yi(e){return e.metadata.exists?V0(this.It,e.document,!1):ke.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return ot(e)}}class WM{constructor(e,n,r){this.Mu=e,this.localStore=n,this.It=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=bE(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=fe.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new Tv(this.It);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await IM(this.localStore,new Tv(this.It),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await EM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function bE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.key=e}}class IE{constructor(e){this.key=e}}class EE{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ce(),this.mutatedKeys=ce(),this.Gu=v0(e),this.Qu=new Os(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Ev,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Om(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(r.track({type:3,doc:f}),b=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),b=!0,(c&&this.Gu(f,c)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),b=!0):d&&!f&&(r.track({type:1,doc:d}),b=!0,(c||u)&&(a=!0)),b&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,l)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return f(h)-f(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new Xs(this.query,e.Qu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ev,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ce(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new IE(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new _E(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Xs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class GM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YM{constructor(e){this.key=e,this.nc=!1}}class QM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ti(a=>g0(a),mc),this.rc=new Map,this.oc=new Set,this.uc=new ze(L.comparator),this.cc=new Map,this.ac=new qm,this.hc={},this.lc=new Map,this.fc=Gi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function XM(t,e){const n=op(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await Ys(n.localStore,jt(e));n.isPrimaryClient&&eh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await np(n,e,r,a==="current",o.resumeToken)}return i}async function np(t,e,n,r,i){t._c=(h,d,f)=>async function(p,y,b,v){let _=y.view.Wu(b);_.$i&&(_=await Ku(p.localStore,y.query,!1).then(({documents:F})=>y.view.Wu(F,_)));const E=v&&v.targetChanges.get(y.targetId),R=y.view.applyChanges(_,p.isPrimaryClient,E);return Jd(p,y.targetId,R.Xu),R.snapshot}(t,h,d,f);const s=await Ku(t.localStore,e,!0),o=new EE(e,s.Hi),a=o.Wu(s.documents),c=yc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);Jd(t,n,u.Xu);const l=new GM(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function JM(t,e){const n=U(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!mc(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ba(n.remoteStore,r.targetId),Js(n,r.targetId)}).catch(Zr)):(Js(n,r.targetId),await Qs(n.localStore,r.targetId,!0))}async function ZM(t,e,n){const r=ap(t);try{const i=await function(s,o){const a=U(s),c=Le.now(),u=o.reduce((d,f)=>d.add(f.key),ce());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=qt(),p=ce();return a.Gi.getEntries(d,u).next(y=>{f=y,f.forEach((b,v)=>{v.isValidDocument()||(p=p.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{l=y;const b=[];for(const v of o){const _=uL(v,l.get(v.key).overlayedDocument);_!=null&&b.push(new hr(v.key,_,f0(_.value.mapValue),Oe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:N0(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.hc[s.currentUser.toKey()];c||(c=new ze(ae)),c=c.insert(o,a),s.hc[s.currentUser.toKey()]=c}(r,i.batchId,n),await dr(r,i.changes),await vo(r.remoteStore)}catch(i){const s=bo(i,"Failed to persist write");n.reject(s)}}async function TE(t,e){const n=U(t);try{const r=await bM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ne(o.nc):i.removedDocuments.size>0&&(ne(o.nc),o.nc=!1))}),await dr(n,r,e)}catch(r){await Zr(r)}}function Sv(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&ep(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function e2(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new ze(L.comparator);o=o.insert(s,ke.newNoDocument(s,te.min()));const a=ce().add(s),c=new gc(te.min(),new Map,new Ee(ae),o,a);await TE(r,c),r.uc=r.uc.remove(s),r.cc.delete(e),sp(r)}else await Qs(r.localStore,e,!1).then(()=>Js(r,e,n)).catch(Zr)}async function t2(t,e){const n=U(t),r=e.batch.batchId;try{const i=await wM(n.localStore,e);ip(n,r,null),rp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await dr(n,i)}catch(i){await Zr(i)}}async function n2(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ne(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);ip(r,e,n),rp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await dr(r,i)}catch(i){await Zr(i)}}async function r2(t,e){const n=U(t);ni(n.remoteStore)||x("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=U(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=bo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function rp(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ip(t,e,n){const r=U(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Js(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||SE(t,r)})}function SE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Ba(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),sp(t))}function Jd(t,e,n){for(const r of n)r instanceof _E?(t.ac.addReference(r.key,e),i2(t,r)):r instanceof IE?(x("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||SE(t,r.key)):j()}function i2(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.oc.add(r),sp(t))}function sp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new L(fe.fromString(e)),r=t.fc.next();t.cc.set(r,new YM(n)),t.uc=t.uc.insert(n,r),eh(t.remoteStore,new Dr(jt(mo(n.path)),r,2,$t.at))}}async function dr(t,e,n){const r=U(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Hm.Ci(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,c){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>w.forEach(c,h=>w.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>w.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ei(l))throw l;x("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,p)}}}(r.localStore,s))}async function s2(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await oE(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(I.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dr(n,r.ji)}}function o2(t,e){const n=U(t),r=n.cc.get(e);if(r&&r.nc)return ce().add(r.key);{let i=ce();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function a2(t,e){const n=U(t),r=await Ku(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&Jd(n,e.targetId,i.Xu),i}async function c2(t,e){const n=U(t);return lE(n.localStore,e).then(r=>dr(n,r))}async function u2(t,e,n,r){const i=U(t),s=await function(o,a){const c=U(o),u=U(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await vo(i.remoteStore):n==="acknowledged"||n==="rejected"?(ip(i,e,r||null),rp(i,e),function(o,a){U(U(o).mutationQueue).An(a)}(i.localStore,e)):j(),await dr(i,s)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function l2(t,e){const n=U(t);if(op(n),ap(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await kv(n,r.toArray());n.dc=!0,await Xd(n.remoteStore,!0);for(const s of i)eh(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Js(n,o),Qs(n.localStore,o,!0))),Ba(n.remoteStore,o)}),await i,await kv(n,r),function(s){const o=U(s);o.cc.forEach((a,c)=>{Ba(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new ze(L.comparator)}(n),n.dc=!1,await Xd(n.remoteStore,!1)}}async function kv(t,e,n){const r=U(t),i=[],s=[];for(const o of e){let a;const c=r.rc.get(o);if(c&&c.length!==0){a=await Ys(r.localStore,jt(c[0]));for(const u of c){const l=r.ic.get(u),h=await a2(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await uE(r.localStore,o);a=await Ys(r.localStore,u),await np(r,kE(u),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function kE(t){return p0(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function h2(t){const e=U(t);return U(U(e.localStore).persistence).vi()}async function d2(t,e,n,r){const i=U(t);if(i.dc)return void x("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await lE(i.localStore,y0(s[0])),a=gc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ze.EMPTY_BYTE_STRING);await dr(i,o,a);break}case"rejected":await Qs(i.localStore,e,!0),Js(i,e,r);break;default:j()}}async function f2(t,e,n){const r=op(t);if(r.dc){for(const i of e){if(r.rc.has(i)){x("SyncEngine","Adding an already active target "+i);continue}const s=await uE(r.localStore,i),o=await Ys(r.localStore,s);await np(r,kE(s),o.targetId,!1,o.resumeToken),eh(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await Qs(r.localStore,i,!1).then(()=>{Ba(r.remoteStore,i),Js(r,i)}).catch(Zr)}}function op(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=e2.bind(null,e),e.sc.Wo=zM.bind(null,e.eventManager),e.sc.wc=HM.bind(null,e.eventManager),e}function ap(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=t2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=n2.bind(null,e),e}function m2(t,e,n){const r=U(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=U(h),p=ot(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.Ns.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(bE(a));const c=new WM(a,i.localStore,s.It);let u=await s.mc();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await s.mc()}const l=await c.complete();return await dr(i,l.Lu,void 0),await function(h,d){const f=U(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ns.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return zs("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class AE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=vc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return sE(this.persistence,new iE,e.initialUser,this.It)}yc(e){return new rE(Zl.Bs,this.It)}gc(e){return new dE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CE extends AE{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await ap(this.Ac.syncEngine),await vo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return sE(this.persistence,new iE,e.initialUser,this.It)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new iM(r,e.asyncQueue,n)}Ec(e,n){const r=new $O(n,this.persistence);return new BO(e.asyncQueue,r)}yc(e){const n=zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new jm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,fE(),yu(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new dE}}class p2 extends CE{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof Yh&&(this.sharedClientState.syncEngine={Fr:u2.bind(null,n),$r:d2.bind(null,n),Br:f2.bind(null,n),vi:h2.bind(null,n),Mr:c2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await l2(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=fE();if(!Yh.C(n))throw new C(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Yh(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class cp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=s2.bind(null,this.syncEngine),await Xd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jM}createDatastore(e){const n=vc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new AM(i));var i;return function(s,o,a,c){return new RM(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Sv(this.syncEngine,a,0),o=_v.C()?new _v:new TM,new PM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,u){const l=new QM(r,i,s,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);x("RemoteStore","RemoteStore shutting down."),n._u.add(5),await yo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e,n){if(!n)throw new C(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xE(t,e,n,r){if(e===!0&&r===!0)throw new C(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Av(t){if(!L.isDocumentKey(t))throw new C(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cv(t){if(L.isDocumentKey(t))throw new C(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function th(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function ye(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=th(t);throw new C(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function RE(t,e){if(e<=0)throw new C(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new Map;class Rv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,xE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CO;switch(n.type){case"gapi":const r=n.client;return new PO(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xv.get(e);n&&(x("ComponentProvider","Removing Datastore"),xv.delete(e),n.terminate())}(this),Promise.resolve()}}function g2(t,e,n,r={}){var i;const s=(t=ye(t,bc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&zs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=rt.MOCK_USER;else{o=qb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new C(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rt(c)}t._authCredentials=new xO(new t0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class At{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new At(this.firestore,e,this._query)}}class Un extends At{constructor(e,n,r){super(e,n,mo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new L(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function NE(t,e,...n){if(t=H(t),up("collection","path",e),t instanceof bc){const r=fe.fromString(e,...n);return Cv(r),new Un(t,null,r)}{if(!(t instanceof Ne||t instanceof Un))throw new C(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Cv(r),new Un(t.firestore,null,r)}}function y2(t,e){if(t=ye(t,bc),up("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(t,null,function(n){return new lr(fe.emptyPath(),n)}(e))}function Qu(t,e,...n){if(t=H(t),arguments.length===1&&(e=n0.R()),up("doc","path",e),t instanceof bc){const r=fe.fromString(e,...n);return Av(r),new Ne(t,null,new L(r))}{if(!(t instanceof Ne||t instanceof Un))throw new C(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Av(r),new Ne(t.firestore,t instanceof Un?t.converter:null,new L(r))}}function PE(t,e){return t=H(t),e=H(e),(t instanceof Ne||t instanceof Un)&&(e instanceof Ne||e instanceof Un)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function DE(t,e){return t=H(t),e=H(e),t instanceof At&&e instanceof At&&t.firestore===e.firestore&&mc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n){this.Pc=e,this.It=n,this.metadata=new st,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new KM(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=U(r),o=Ua(s.It)+"/documents",a={documents:i.map(h=>Fa(s.It,h))},c=await s._o("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=bL(s.It,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());ne(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new go(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new Lm(i,this.precondition(i)))}),await async function(n,r){const i=U(n),s=Ua(i.It)+"/documents",o={writes:r.map(a=>Va(i.It,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw j();n=te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(te.min())?Oe.exists(!1):Oe.updateTime(n):Oe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(te.min()))throw new C(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Oe.updateTime(n)}return Oe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new Wm(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new w2(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!dc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!C0(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=n0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function OE(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function LE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lp(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Iv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Iv(e.remoteStore,s)),t.onlineComponents=e}async function lp(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await OE(t,new AE)),t.offlineComponents}async function rh(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await LE(t,new cp)),t.onlineComponents}function ME(t){return lp(t).then(e=>e.persistence)}function hp(t){return lp(t).then(e=>e.localStore)}function FE(t){return rh(t).then(e=>e.remoteStore)}function dp(t){return rh(t).then(e=>e.syncEngine)}function I2(t){return rh(t).then(e=>e.datastore)}async function Zs(t){const e=await rh(t),n=e.eventManager;return n.onListen=XM.bind(null,e.syncEngine),n.onUnlisten=JM.bind(null,e.syncEngine),n}function E2(t){return t.asyncQueue.enqueue(async()=>{const e=await ME(t),n=await FE(t);return e.setNetworkEnabled(!0),function(r){const i=U(r);return i._u.delete(0),wc(i)}(n)})}function T2(t){return t.asyncQueue.enqueue(async()=>{const e=await ME(t),n=await FE(t);return e.setNetworkEnabled(!1),async function(r){const i=U(r);i._u.add(0),await yo(i),i.gu.set("Offline")}(n)})}function S2(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=U(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=bo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await hp(t),e,n)),n.promise}function UE(t,e,n={}){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new nh({next:h=>{s.enqueueAndForget(()=>Zm(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new C(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new C(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new tp(mo(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Jm(i,l)}(await Zs(t),t.asyncQueue,e,n,r)),r.promise}function k2(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Ku(r,i,!0),a=new EE(i,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=bo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await hp(t),e,n)),n.promise}function VE(t,e,n={}){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new nh({next:h=>{s.enqueueAndForget(()=>Zm(i,l)),h.fromCache&&a.source==="server"?c.reject(new C(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new tp(o,u,{includeMetadataChanges:!0,Nu:!0});return Jm(i,l)}(await Zs(t),t.asyncQueue,e,n,r)),r.promise}function A2(t,e){const n=new nh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Ru.add(i),i.next()}(await Zs(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Ru.delete(i)}(await Zs(t),n))}}function C2(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new v2(c,u)}(function(c,u){if(c instanceof Uint8Array)return Nv(c,u);if(c instanceof ArrayBuffer)return Nv(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,vc(e));t.asyncQueue.enqueueAndForget(async()=>{m2(await dp(t),i,r)})}function x2(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=U(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await hp(t),e))}class R2{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Wm(this,"async_queue_retry"),this.Wc=()=>{const n=yu();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=yu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=yu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new st;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ei(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Xm.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&j()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Zd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class N2{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=-1;class He extends bc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new R2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||BE(this),this._firestoreClient.terminate()}}function ht(t){return t._firestoreClient||BE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function BE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new zO(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _2(t._authCredentials,t._appCheckCredentials,t._queue,r)}function D2(t,e){qE(t=ye(t,He));const n=ht(t),r=t._freezeSettings(),i=new cp;return $E(n,i,new CE(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function O2(t){qE(t=ye(t,He));const e=ht(t),n=t._freezeSettings(),r=new cp;return $E(e,r,new p2(r,n.cacheSizeBytes))}function $E(t,e,n){const r=new st;return t.asyncQueue.enqueue(async()=>{try{await OE(t,n),await LE(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===I.FAILED_PRECONDITION||o.code===I.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;zs("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function L2(t){if(t._initialized&&!t._terminated)throw new C(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new st;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!fn.C())return Promise.resolve();const r=n+"main";await fn.delete(r)}(zm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function M2(t){return function(e){const n=new st;return e.asyncQueue.enqueueAndForget(async()=>r2(await dp(e),n)),n.promise}(ht(t=ye(t,He)))}function F2(t){return E2(ht(t=ye(t,He)))}function U2(t){return T2(ht(t=ye(t,He)))}function V2(t,e){const n=ht(t=ye(t,He)),r=new N2;return C2(n,t._databaseId,e,r),r}function B2(t,e){return x2(ht(t=ye(t,He)),e).then(n=>n?new At(t,null,n.query):null)}function qE(t){if(t._initialized||t._terminated)throw new C(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(Ze.fromBase64String(e))}catch(n){throw new C(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jn(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=/^__.*__$/;class q2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}class jE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class sh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new sh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Xu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(zE(this.sa)&&$2.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class j2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||vc(e)}da(e,n,r,i=!1){return new sh({sa:e,methodName:n,fa:r,path:We.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ss(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new j2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oh(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);gp("Data must be an object, but it was:",o,r);const a=WE(r,o);let c,u;if(s.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=ef(e,h,n);if(!o.contains(d))throw new C(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);YE(l,d)||l.push(d)}c=new Gt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new q2(new mt(a),c,u)}class _c extends is{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _c}}function HE(t,e,n){return new sh({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class fp extends is{_toFieldTransform(e){return new pc(e.path,new Ws)}isEqual(e){return e instanceof fp}}class z2 extends is{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=HE(this,e,!0),r=this._a.map(s=>os(s,n)),i=new zi(r);return new pc(e.path,i)}isEqual(e){return this===e}}class H2 extends is{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=HE(this,e,!0),r=this._a.map(s=>os(s,n)),i=new Hi(r);return new pc(e.path,i)}isEqual(e){return this===e}}class K2 extends is{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new Gs(e.It,_0(e.It,this.wa));return new pc(e.path,n)}isEqual(e){return this===e}}function mp(t,e,n,r){const i=t.da(1,e,n);gp("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();rs(r,(c,u)=>{const l=yp(e,c,n);u=H(u);const h=i.ca(l);if(u instanceof _c)s.push(l);else{const d=os(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Gt(s);return new jE(o,a,i.fieldTransforms)}function pp(t,e,n,r,i,s){const o=t.da(1,e,n),a=[ef(e,r,n)],c=[i];if(s.length%2!=0)throw new C(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ef(e,s[d])),c.push(s[d+1]);const u=[],l=mt.empty();for(let d=a.length-1;d>=0;--d)if(!YE(u,a[d])){const f=a[d];let p=c[d];p=H(p);const y=o.ca(f);if(p instanceof _c)u.push(f);else{const b=os(p,y);b!=null&&(u.push(f),l.set(f,b))}}const h=new Gt(u);return new jE(l,h,o.fieldTransforms)}function KE(t,e,n,r=!1){return os(n,t.da(r?4:3,e))}function os(t,e){if(GE(t=H(t)))return gp("Unsupported field value:",e,t),WE(t,e);if(t instanceof is)return function(n,r){if(!zE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=os(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=H(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _0(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Le.fromDate(n);return{timestampValue:Ma(r.It,i)}}if(n instanceof Le){const i=new Le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ma(r.It,i)}}if(n instanceof ih)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jn)return{bytesValue:L0(r.It,n._byteString)};if(n instanceof Ne){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${th(n)}`)}(t,e)}function WE(t,e){const n={};return u0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,i)=>{const s=os(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function GE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof ih||t instanceof jn||t instanceof Ne||t instanceof is)}function gp(t,e,n){if(!GE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=th(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function ef(t,e,n){if((e=H(e))instanceof zr)return e._internalPath;if(typeof e=="string")return yp(t,e);throw Xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const W2=new RegExp("[~\\*/\\[\\]]");function yp(t,e,n){if(e.search(W2)>=0)throw Xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zr(...e.split("."))._internalPath}catch{throw Xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new C(I.INVALID_ARGUMENT,a+t+c)}function YE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ah("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class G2 extends $a{data(){return super.data()}}function ah(t,e){return typeof e=="string"?yp(t,e):e instanceof zr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ic{}function Ir(t,...e){for(const n of e)t=n._apply(t);return t}class Y2 extends Ic{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=ss(e.firestore),r=function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Dv(l,u);const f=[];for(const p of l)f.push(Pv(a,i,p));h={arrayValue:{values:f}}}else h=Pv(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Dv(l,u),h=KE(o,s,l,u==="in"||u==="not-in");const d=pt.create(c,u,h);return function(f,p){if(p.dt()){const b=Pm(f);if(b!==null&&!b.isEqual(p.field))throw new C(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${b.toString()}' and '${p.field.toString()}'`);const v=Nm(f);v!==null&&tT(f,p.field,v)}const y=function(b,v){for(const _ of b.filters)if(v.indexOf(_.op)>=0)return _.op;return null}(f,function(b){switch(b){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(y!==null)throw y===p.op?new C(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new C(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${y.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new At(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new lr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function Q2(t,e,n){const r=e,i=ah("where",t);return new Y2(i,r,n)}class X2 extends Ic{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ds(i,s);return function(a,c){if(Nm(a)===null){const u=Pm(a);u!==null&&tT(a,u,c.field)}}(r,o),o}(e._query,this.ma,this.pa);return new At(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new lr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function J2(t,e="asc"){const n=e,r=ah("orderBy",t);return new X2(r,n)}class XE extends Ic{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new At(e.firestore,e.converter,ju(e._query,this.Ia,this.Ta))}}function Z2(t){return RE("limit",t),new XE("limit",t,"F")}function eF(t){return RE("limitToLast",t),new XE("limitToLast",t,"L")}class JE extends Ic{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=eT(e,this.type,this.Ea,this.Aa);return new At(e.firestore,e.converter,function(r,i){return new lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function tF(...t){return new JE("startAt",t,!0)}function nF(...t){return new JE("startAfter",t,!1)}class ZE extends Ic{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=eT(e,this.type,this.Ea,this.Aa);return new At(e.firestore,e.converter,function(r,i){return new lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function rF(...t){return new ZE("endBefore",t,!1)}function iF(...t){return new ZE("endAt",t,!0)}function eT(t,e,n,r){if(n[0]=H(n[0]),n[0]instanceof $a)return function(i,s,o,a,c){if(!a)throw new C(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Ks(i))if(l.field.isKeyField())u.push(qi(s,a.key));else{const h=a.data.field(l.field);if(Rm(h))throw new C(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new C(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new qr(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ss(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new C(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const p=u[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new C(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Dm(s)&&p.indexOf("/")!==-1)throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const y=s.path.child(fe.fromString(p));if(!L.isDocumentKey(y))throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const b=new L(y);d.push(qi(o,b))}else{const y=KE(a,c,p);d.push(y)}}return new qr(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Pv(t,e,n){if(typeof(n=H(n))=="string"){if(n==="")throw new C(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(e)&&n.indexOf("/")!==-1)throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!L.isDocumentKey(r))throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qi(t,new L(r))}if(n instanceof Ne)return qi(t,n._key);throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${th(n)}.`)}function Dv(t,e){if(!Array.isArray(t)||t.length===0)throw new C(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function tT(t,e,n){if(!n.isEqual(e))throw new C(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{convertValue(e,n="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const r={};return rs(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ih($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=l0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pa(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ne(z0(r));const i=new Br(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class sF extends vp{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rr extends $a{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ah("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sa extends rr{data(e={}){return super.data(e)}}class Hr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sa(this._firestore,this._userDataWriter,r.key,r,new ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new sa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ki(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new sa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ki(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:oF(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}function nT(t,e){return t instanceof rr&&e instanceof rr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Hr&&e instanceof Hr&&t._firestore===e._firestore&&DE(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aF(t){t=ye(t,Ne);const e=ye(t.firestore,He);return UE(ht(e),t._key).then(n=>wp(e,t,n))}class as extends vp{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function cF(t){t=ye(t,Ne);const e=ye(t.firestore,He),n=ht(e),r=new as(e);return S2(n,t._key).then(i=>new rr(e,r,t._key,i,new ki(i!==null&&i.hasLocalMutations,!0),t.converter))}function uF(t){t=ye(t,Ne);const e=ye(t.firestore,He);return UE(ht(e),t._key,{source:"server"}).then(n=>wp(e,t,n))}function lF(t){t=ye(t,At);const e=ye(t.firestore,He),n=ht(e),r=new as(e);return QE(t._query),VE(n,t._query).then(i=>new Hr(e,r,t,i))}function hF(t){t=ye(t,At);const e=ye(t.firestore,He),n=ht(e),r=new as(e);return k2(n,t._query).then(i=>new Hr(e,r,t,i))}function dF(t){t=ye(t,At);const e=ye(t.firestore,He),n=ht(e),r=new as(e);return VE(n,t._query,{source:"server"}).then(i=>new Hr(e,r,t,i))}function Ov(t,e,n){t=ye(t,Ne);const r=ye(t.firestore,He),i=ch(t.converter,e,n);return Ec(r,[oh(ss(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Oe.none())])}function Lv(t,e,n,...r){t=ye(t,Ne);const i=ye(t.firestore,He),s=ss(i);let o;return o=typeof(e=H(e))=="string"||e instanceof zr?pp(s,"updateDoc",t._key,e,n,r):mp(s,"updateDoc",t._key,e),Ec(i,[o.toMutation(t._key,Oe.exists(!0))])}function fF(t){return Ec(ye(t.firestore,He),[new go(t._key,Oe.none())])}function mF(t,e){const n=ye(t.firestore,He),r=Qu(t),i=ch(t.converter,e);return Ec(n,[oh(ss(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function rT(t,...e){var n,r,i;t=H(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Zd(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Zd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Ne)u=ye(t.firestore,He),l=mo(t._key.path),c={next:h=>{e[o]&&e[o](wp(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ye(t,At);u=ye(h.firestore,He),l=h._query;const d=new as(u);c={next:f=>{e[o]&&e[o](new Hr(u,d,h,f))},error:e[o+1],complete:e[o+2]},QE(t._query)}return function(h,d,f,p){const y=new nh(p),b=new tp(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>Jm(await Zs(h),b)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>Zm(await Zs(h),b))}}(ht(u),l,a,c)}function pF(t,e){return A2(ht(t=ye(t,He)),Zd(e)?e:{next:e})}function Ec(t,e){return function(n,r){const i=new st;return n.asyncQueue.enqueueAndForget(async()=>ZM(await dp(n),r,i)),i.promise}(ht(t),e)}function wp(t,e,n){const r=n.docs.get(e._key),i=new as(t);return new rr(t,i,e._key,r,new ki(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ss(e)}set(e,n,r){this._verifyNotCommitted();const i=Ar(e,this._firestore),s=ch(i.converter,n,r),o=oh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Oe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ar(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof zr?pp(this._dataReader,"WriteBatch.update",s._key,n,r,i):mp(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Oe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ar(e,this._firestore);return this._mutations=this._mutations.concat(new go(n._key,Oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ar(t,e){if((t=H(t)).firestore!==e)throw new C(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ss(e)}get(e){const n=Ar(e,this._firestore),r=new sF(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return j();const s=i[0];if(s.isFoundDocument())return new $a(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new $a(this._firestore,r,n._key,null,n.converter);throw j()})}set(e,n,r){const i=Ar(e,this._firestore),s=ch(i.converter,n,r),o=oh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Ar(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof zr?pp(this._dataReader,"Transaction.update",s._key,n,r,i):mp(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Ar(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ar(e,this._firestore),r=new as(this._firestore);return super.get(e).then(i=>new rr(this._firestore,r,n._key,i._document,new ki(!1,!1),n.converter))}}function wF(t,e,n){t=ye(t,He);const r=Object.assign(Object.assign({},gF),n);return function(i){if(i.maxAttempts<1)throw new C(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new st;return i.asyncQueue.enqueueAndForget(async()=>{const c=await I2(i);new b2(i.asyncQueue,c,o,s,a).run()}),a.promise}(ht(t),i=>e(new vF(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bF(){return new _c("deleteField")}function _F(){return new fp("serverTimestamp")}function IF(...t){return new z2("arrayUnion",t)}function EF(...t){return new H2("arrayRemove",t)}function TF(t){return new K2("increment",t)}(function(t,e=!0){(function(n){fo=n})(Yr),er(new sn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new He(new RO(n.getProvider("auth-internal")),new OO(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),rn(Py,"3.7.3",t),rn(Py,"3.7.3","esm2017")})();const SF="@firebase/firestore-compat",kF="0.2.3";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function Fv(){if(!qO())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class qa{constructor(e){this._delegate=e}static fromBase64String(e){return Fv(),new qa(jn.fromBase64String(e))}static fromUint8Array(e){return Mv(),new qa(jn.fromUint8Array(e))}toBase64(){return Fv(),this._delegate.toBase64()}toUint8Array(){return Mv(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){return AF(t,["next","error","complete"])}function AF(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{enableIndexedDbPersistence(e,n){return D2(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return O2(e._delegate)}clearIndexedDbPersistence(e){return L2(e._delegate)}}class iT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Br||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&zs("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){g2(this._delegate,e,n,r)}enableNetwork(){return F2(this._delegate)}disableNetwork(){return U2(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,xE("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return M2(this._delegate)}onSnapshotsInSync(e){return pF(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new eo(this,NE(this._delegate,e))}catch(n){throw Nt(n,"collection()","Firestore.collection()")}}doc(e){try{return new en(this,Qu(this._delegate,e))}catch(n){throw Nt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Rt(this,y2(this._delegate,e))}catch(n){throw Nt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return wF(this._delegate,n=>e(new sT(this,n)))}batch(){return ht(this._delegate),new oT(new yF(this._delegate,e=>Ec(this._delegate,e)))}loadBundle(e){return V2(this._delegate,e)}namedQuery(e){return B2(this._delegate,e).then(n=>n?new Rt(this,n):null)}}class uh extends vp{constructor(e){super(),this.firestore=e}convertBytes(e){return new qa(new jn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return en.forKey(n,this.firestore,null)}}function xF(t){kO(t)}class sT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new uh(e)}get(e){const n=Ai(e);return this._delegate.get(n).then(r=>new ja(this._firestore,new rr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ai(e);return r?(bp("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ai(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ai(e);return this._delegate.delete(n),this}}class oT{constructor(e){this._delegate=e}set(e,n,r){const i=Ai(e);return r?(bp("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ai(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ai(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Yi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new sa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new za(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Yi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Yi(e,new uh(e),n),i.set(n,s)),s}}Yi.INSTANCES=new WeakMap;class en{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new uh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new en(n,new Ne(n._delegate,r,new L(e)))}static forKey(e,n,r){return new en(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new eo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new eo(this.firestore,NE(this._delegate,e))}catch(n){throw Nt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=H(e),e instanceof Ne?PE(this._delegate,e):!1}set(e,n){n=bp("DocumentReference.set",n);try{return n?Ov(this._delegate,e,n):Ov(this._delegate,e)}catch(r){throw Nt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?Lv(this._delegate,e):Lv(this._delegate,e,n,...r)}catch(i){throw Nt(i,"updateDoc()","DocumentReference.update()")}}delete(){return fF(this._delegate)}onSnapshot(...e){const n=aT(e),r=cT(e,i=>new ja(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return rT(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=cF(this._delegate):(e==null?void 0:e.source)==="server"?n=uF(this._delegate):n=aF(this._delegate),n.then(r=>new ja(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new en(this.firestore,e?this._delegate.withConverter(Yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Nt(t,e,n){return t.message=t.message.replace(e,n),t}function aT(t){for(const e of t)if(typeof e=="object"&&!tf(e))return e;return{}}function cT(t,e){var n,r;let i;return tf(t[0])?i=t[0]:tf(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ja{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new en(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return nT(this._delegate,e._delegate)}}class za extends ja{data(e){const n=this._delegate.data(e);return AO(n!==void 0),n}}class Rt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new uh(e)}where(e,n,r){try{return new Rt(this.firestore,Ir(this._delegate,Q2(e,n,r)))}catch(i){throw Nt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Rt(this.firestore,Ir(this._delegate,J2(e,n)))}catch(r){throw Nt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Rt(this.firestore,Ir(this._delegate,Z2(e)))}catch(n){throw Nt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Rt(this.firestore,Ir(this._delegate,eF(e)))}catch(n){throw Nt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Rt(this.firestore,Ir(this._delegate,tF(...e)))}catch(n){throw Nt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Rt(this.firestore,Ir(this._delegate,nF(...e)))}catch(n){throw Nt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Rt(this.firestore,Ir(this._delegate,rF(...e)))}catch(n){throw Nt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Rt(this.firestore,Ir(this._delegate,iF(...e)))}catch(n){throw Nt(n,"endAt()","Query.endAt()")}}isEqual(e){return DE(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=hF(this._delegate):(e==null?void 0:e.source)==="server"?n=dF(this._delegate):n=lF(this._delegate),n.then(r=>new nf(this.firestore,new Hr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=aT(e),r=cT(e,i=>new nf(this.firestore,new Hr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return rT(this._delegate,n,r)}withConverter(e){return new Rt(this.firestore,e?this._delegate.withConverter(Yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class RF{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new za(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class nf{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Rt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new za(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new RF(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new za(this._firestore,r))})}isEqual(e){return nT(this._delegate,e._delegate)}}class eo extends Rt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new en(this.firestore,e):null}doc(e){try{return e===void 0?new en(this.firestore,Qu(this._delegate)):new en(this.firestore,Qu(this._delegate,e))}catch(n){throw Nt(n,"doc()","CollectionReference.doc()")}}add(e){return mF(this._delegate,e).then(n=>new en(this.firestore,n))}isEqual(e){return PE(this._delegate,e._delegate)}withConverter(e){return new eo(this.firestore,e?this._delegate.withConverter(Yi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ai(t){return ye(t,Ne)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(...e){this._delegate=new zr(...e)}static documentId(){return new _p(We.keyField().canonicalString())}isEqual(e){return e=H(e),e instanceof zr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this._delegate=e}static serverTimestamp(){const e=_F();return e._methodName="FieldValue.serverTimestamp",new _i(e)}static delete(){const e=bF();return e._methodName="FieldValue.delete",new _i(e)}static arrayUnion(...e){const n=IF(...e);return n._methodName="FieldValue.arrayUnion",new _i(n)}static arrayRemove(...e){const n=EF(...e);return n._methodName="FieldValue.arrayRemove",new _i(n)}static increment(e){const n=TF(e);return n._methodName="FieldValue.increment",new _i(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NF={Firestore:iT,GeoPoint:ih,Timestamp:Le,Blob:qa,Transaction:sT,WriteBatch:oT,DocumentReference:en,DocumentSnapshot:ja,Query:Rt,QueryDocumentSnapshot:za,QuerySnapshot:nf,CollectionReference:eo,FieldPath:_p,FieldValue:_i,setLogLevel:xF,CACHE_SIZE_UNLIMITED:P2};function PF(t,e){t.INTERNAL.registerComponent(new sn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},NF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(t){PF(t,(e,n)=>new iT(e,n,new CF)),t.registerVersion(SF,kF)}DF(es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="firebasestorage.googleapis.com",lT="storageBucket",OF=2*60*1e3,LF=10*60*1e3,MF=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Tt{constructor(e,n,r=0){super(Qh(e),`Firebase Storage: ${n} (${Qh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Qh(t){return"storage/"+t}function Ip(){const t="An unknown error occurred, please check the error payload for server response.";return new Be("unknown",t)}function FF(t){return new Be("object-not-found","Object '"+t+"' does not exist.")}function UF(t){return new Be("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function VF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be("unauthenticated",t)}function BF(){return new Be("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function $F(t){return new Be("unauthorized","User does not have permission to access '"+t+"'.")}function hT(){return new Be("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function dT(){return new Be("canceled","User canceled the upload/download.")}function qF(t){return new Be("invalid-url","Invalid URL '"+t+"'.")}function jF(t){return new Be("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function zF(){return new Be("no-default-bucket","No default bucket found. Did you set the '"+lT+"' property when initializing the app?")}function fT(){return new Be("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function HF(){return new Be("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function KF(){return new Be("no-download-url","The given file does not have any download URLs.")}function WF(t){return new Be("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ls(t){return new Be("invalid-argument",t)}function mT(){return new Be("app-deleted","The Firebase app was deleted.")}function pT(t){return new Be("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function oa(t,e){return new Be("invalid-format","String does not match format '"+t+"': "+e)}function Mo(t){throw new Be("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw jF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},y=n===uT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",v=new RegExp(`^https?://${y}/${i}/${b}`,"i"),E=[{regex:a,indices:c,postModify:s},{regex:f,indices:p,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<E.length;R++){const F=E[R],z=F.regex.exec(e);if(z){const ee=z[F.indices.bucket];let Q=z[F.indices.path];Q||(Q=""),r=new Et(ee,Q),F.postModify(r);break}}if(r==null)throw qF(e);return r}}class GF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(f,c())},b)}function d(){s&&clearTimeout(s)}function f(b,...v){if(u){d();return}if(b){d(),l.call(null,b,...v);return}if(c()||o){d(),l.call(null,b,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function y(b){p||(p=!0,d(),!u&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function QF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XF(t){return t!==void 0}function JF(t){return typeof t=="function"}function ZF(t){return typeof t=="object"&&!Array.isArray(t)}function lh(t){return typeof t=="string"||t instanceof String}function Uv(t){return Ep()&&t instanceof Blob}function Ep(){return typeof Blob<"u"&&!wl()}function rf(t,e,n,r){if(r<e)throw Ls(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ls(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function gT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mi||(Mi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e,n,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Hc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mi.NO_ERROR,c=s.getStatus();if((!a||yT(c,this.additionalRetryCodes_))&&this.retry){const l=s.getErrorCode()===Mi.ABORT;r(!1,new Hc(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Hc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());XF(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Ip();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?mT():dT();o(c)}else{const c=hT();o(c)}};this.canceled_?n(!1,new Hc(!1,null,!0)):this.backoffId_=YF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Hc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function tU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function rU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function iU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sU(t,e,n,r,i,s,o=!0){const a=gT(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return rU(u,e),tU(u,n),nU(u,s),iU(u,r),new eU(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function aU(...t){const e=oU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ep())return new Blob(t);throw new Be("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function cU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uU(t){if(typeof atob>"u")throw WF("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xh{constructor(e,n){this.data=e,this.contentType=n||null}}function vT(t,e){switch(t){case tn.RAW:return new Xh(wT(e));case tn.BASE64:case tn.BASE64URL:return new Xh(bT(t,e));case tn.DATA_URL:return new Xh(hU(e),dU(e))}throw Ip()}function wT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lU(t){let e;try{e=decodeURIComponent(t)}catch{throw oa(tn.DATA_URL,"Malformed data URL.")}return wT(e)}function bT(t,e){switch(t){case tn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw oa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw oa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=uU(e)}catch(i){throw i.message.includes("polyfill")?i:oa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class _T{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw oa(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hU(t){const e=new _T(t);return e.base64?bT(tn.BASE64,e.rest):lU(e.rest)}function dU(t){return new _T(t).contentType}function fU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){let r=0,i="";Uv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Uv(this.data_)){const r=this.data_,i=cU(r,e,n);return i===null?null:new Kn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Kn(r,!0)}}static getBlob(...e){if(Ep()){const n=e.map(r=>r instanceof Kn?r.data_:r);return new Kn(aU.apply(null,n))}else{const n=e.map(o=>lh(o)?vT(tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Kn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){let e;try{e=JSON.parse(t)}catch{return null}return ZF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function IT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gU(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||gU}}let Kc=null;function yU(t){return!lh(t)||t.length<2?t:IT(t)}function hh(){if(Kc)return Kc;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return yU(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),Kc=t,Kc}function vU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Et(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function wU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return vU(r,t),r}function ET(t,e,n){const r=Tp(e);return r===null?null:wU(t,r,n)}function bU(t,e,n,r){const i=Tp(e);if(i===null||!lh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=ri(d,n,r),p=gT({alt:"media",token:u});return f+p})[0]}function Sp(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="prefixes",Bv="items";function _U(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Vv])for(const i of n[Vv]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Et(e,s));r.prefixes.push(o)}if(n[Bv])for(const i of n[Bv]){const s=t._makeStorageReference(new Et(e,i.name));r.items.push(s)}return r}function IU(t,e,n){const r=Tp(n);return r===null?null:_U(t,e,r)}class fr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){if(!t)throw Ip()}function dh(t,e){function n(r,i){const s=ET(t,i,e);return Vn(s!==null),s}return n}function EU(t,e){function n(r,i){const s=IU(t,e,i);return Vn(s!==null),s}return n}function TU(t,e){function n(r,i){const s=ET(t,i,e);return Vn(s!==null),bU(s,i,t.host,t._protocol)}return n}function _o(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=BF():i=VF():n.getStatus()===402?i=UF(t.bucket):n.getStatus()===403?i=$F(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function fh(t){const e=_o(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=FF(t.path)),s.serverResponse=i.serverResponse,s}return n}function TT(t,e,n){const r=e.fullServerUrl(),i=ri(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fr(i,s,dh(t,n),o);return a.errorHandler=fh(e),a}function SU(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ri(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new fr(a,c,EU(t,e.bucket),u);return l.urlParams=s,l.errorHandler=_o(e),l}function kU(t,e,n){const r=e.fullServerUrl(),i=ri(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fr(i,s,TU(t,n),o);return a.errorHandler=fh(e),a}function AU(t,e,n,r){const i=e.fullServerUrl(),s=ri(i,t.host,t._protocol),o="PATCH",a=Sp(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new fr(s,o,dh(t,r),u);return l.headers=c,l.body=a,l.errorHandler=fh(e),l}function CU(t,e){const n=e.fullServerUrl(),r=ri(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new fr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=fh(e),a}function xU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ST(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=xU(null,e)),r}function RU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let R=0;R<2;R++)E=E+Math.random().toString().slice(2);return E}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ST(e,r,i),l=Sp(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Kn.getBlob(h,r,d);if(f===null)throw fT();const p={name:u.fullPath},y=ri(s,t.host,t._protocol),b="POST",v=t.maxUploadRetryTime,_=new fr(y,b,dh(t,n),v);return _.urlParams=p,_.headers=o,_.body=f.uploadData(),_.errorHandler=_o(e),_}class Ju{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function kp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Vn(!1)}return Vn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function NU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=ST(e,r,i),a={name:o.fullPath},c=ri(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Sp(o,n),d=t.maxUploadRetryTime;function f(y){kp(y);let b;try{b=y.getResponseHeader("X-Goog-Upload-URL")}catch{Vn(!1)}return Vn(lh(b)),b}const p=new fr(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=_o(e),p}function PU(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=kp(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Vn(!1)}h||Vn(!1);const d=Number(h);return Vn(!isNaN(d)),new Ju(d,r.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new fr(n,o,s,a);return c.headers=i,c.errorHandler=_o(e),c}const $v=256*1024;function DU(t,e,n,r,i,s,o,a){const c=new Ju(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw HF();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,d);if(y===null)throw fT();function b(R,F){const z=kp(R,["active","final"]),ee=c.current+l,Q=r.size();let oe;return z==="final"?oe=dh(e,s)(R,F):oe=null,new Ju(ee,Q,z==="final",oe)}const v="POST",_=e.maxUploadRetryTime,E=new fr(n,v,b,_);return E.headers=p,E.body=y.uploadData(),E.progressCallback=a||null,E.errorHandler=_o(t),E}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OU={STATE_CHANGED:"state_changed"},Pt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Jh(t){switch(t){case"running":case"pausing":case"canceling":return Pt.RUNNING;case"paused":return Pt.PAUSED;case"success":return Pt.SUCCESS;case"canceled":return Pt.CANCELED;case"error":return Pt.ERROR;default:return Pt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e,n,r){if(JF(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class MU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Mo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FU extends MU{initXhr(){this.xhr_.responseType="text"}}function Nn(){return new FU}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=hh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(yT(i.status,[]))if(s)i=hT();else{this.sleepTime=Math.max(this.sleepTime*2,MF),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=NU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Nn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=PU(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Nn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=$v*this._chunkMultiplier,n=new Ju(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=DU(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Nn,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){$v*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=TT(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Nn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=RU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Nn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=dT(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Jh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new LU(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Jh(this._state)){case Pt.SUCCESS:ps(this._resolve.bind(null,this.snapshot))();break;case Pt.CANCELED:case Pt.ERROR:const n=this._reject;ps(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Jh(this._state)){case Pt.RUNNING:case Pt.PAUSED:e.next&&ps(e.next.bind(e,this.snapshot))();break;case Pt.SUCCESS:e.complete&&ps(e.complete.bind(e))();break;case Pt.CANCELED:case Pt.ERROR:e.error&&ps(e.error.bind(e,this._error))();break;default:e.error&&ps(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qi(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IT(this._location.path)}get storage(){return this._service}get parent(){const e=mU(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new Qi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pT(e)}}function UU(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new kT(t,new Kn(e),n)}function VU(t){const e={prefixes:[],items:[]};return AT(t,e).then(()=>e)}async function AT(t,e,n){const i=await CT(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await AT(t,e,i.nextPageToken)}function CT(t,e){e!=null&&typeof e.maxResults=="number"&&rf("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=SU(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Nn)}function BU(t){t._throwIfRoot("getMetadata");const e=TT(t.storage,t._location,hh());return t.storage.makeRequestWithTokens(e,Nn)}function $U(t,e){t._throwIfRoot("updateMetadata");const n=AU(t.storage,t._location,e,hh());return t.storage.makeRequestWithTokens(n,Nn)}function qU(t){t._throwIfRoot("getDownloadURL");const e=kU(t.storage,t._location,hh());return t.storage.makeRequestWithTokens(e,Nn).then(n=>{if(n===null)throw KF();return n})}function jU(t){t._throwIfRoot("deleteObject");const e=CU(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Nn)}function xT(t,e){const n=pU(t._location.path,e),r=new Et(t._location.bucket,n);return new Qi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zU(t){return/^[A-Za-z]+:\/\//.test(t)}function HU(t,e){return new Qi(t,e)}function RT(t,e){if(t instanceof Ap){const n=t;if(n._bucket==null)throw zF();const r=new Qi(n,n._bucket);return e!=null?RT(r,e):r}else return e!==void 0?xT(t,e):t}function KU(t,e){if(e&&zU(e)){if(t instanceof Ap)return HU(t,e);throw Ls("To use ref(service, url), the first argument must be a Storage instance.")}else return RT(t,e)}function qv(t,e){const n=e==null?void 0:e[lT];return n==null?null:Et.makeFromBucketSpec(n,t)}function WU(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:qb(i,t.app.options.projectId))}class Ap{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=uT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OF,this._maxUploadRetryTime=LF,this._requests=new Set,i!=null?this._bucket=Et.makeFromBucketSpec(i,this._host):this._bucket=qv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=qv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new GF(mT());{const o=sU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const jv="@firebase/storage",zv="0.9.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU="storage";function YU(t,e,n){return t=H(t),UU(t,e,n)}function QU(t){return t=H(t),BU(t)}function XU(t,e){return t=H(t),$U(t,e)}function JU(t,e){return t=H(t),CT(t,e)}function ZU(t){return t=H(t),VU(t)}function eV(t){return t=H(t),qU(t)}function tV(t){return t=H(t),jU(t)}function Hv(t,e){return t=H(t),KU(t,e)}function nV(t,e){return xT(t,e)}function rV(t,e,n,r={}){WU(t,e,n,r)}function iV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ap(n,r,i,e,Yr)}function sV(){er(new sn(GU,iV,"PUBLIC").setMultipleInstances(!0)),rn(jv,zv,""),rn(jv,zv,"esm2017")}sV();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Wc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Wc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Wc(o,this,this._ref)):s={next:n.next?o=>n.next(new Wc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class Wv{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Jn(e,this._service))}get items(){return this._delegate.items.map(e=>new Jn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=nV(this._delegate,e);return new Jn(n,this.storage)}get root(){return new Jn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Jn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Kv(YU(this._delegate,e,n),this)}putString(e,n=tn.RAW,r){this._throwIfRoot("putString");const i=vT(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Kv(new kT(this._delegate,new Kn(i.data,!0),s),this)}listAll(){return ZU(this._delegate).then(e=>new Wv(e,this.storage))}list(e){return JU(this._delegate,e||void 0).then(n=>new Wv(n,this.storage))}getMetadata(){return QU(this._delegate)}updateMetadata(e){return XU(this._delegate,e)}getDownloadURL(){return eV(this._delegate)}delete(){return this._throwIfRoot("delete"),tV(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw pT(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Gv(e))throw Ls("ref() expected a child path but got a URL, use refFromURL instead.");return new Jn(Hv(this._delegate,e),this)}refFromURL(e){if(!Gv(e))throw Ls("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Et.makeFromUrl(e,this._delegate.host)}catch{throw Ls("refFromUrl() expected a valid full URL but got an invalid one.")}return new Jn(Hv(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){rV(this._delegate,e,n,r)}}function Gv(t){return/^[A-Za-z]+:\/\//.test(t)}const oV="@firebase/storage-compat",aV="0.1.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV="storage-compat";function uV(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new NT(n,r)}function lV(t){const e={TaskState:Pt,TaskEvent:OU,StringFormat:tn,Storage:NT,Reference:Jn};t.INTERNAL.registerComponent(new sn(cV,uV,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(oV,aV)}lV(es);const Cp=es.initializeApp({apiKey:"AIzaSyAQ4qXhhppVXojxdxbCd2-9WGB6MKoKb5Q",authDomain:"web-siac-automatizacion.firebaseapp.com",projectId:"web-siac-automatizacion",storageBucket:"web-siac-automatizacion.appspot.com",messagingSenderId:"763456327866",appId:"1:763456327866:web:06f82ffd775da3d18f7283"}),N$=Cp.firestore(),hV=Cp.auth(),P$=Cp.storage().ref(),dV=()=>(t,e,n)=>{hV.onAuthStateChanged(function(r){if(!r)return n({path:"/admin_login?returnPath=sa_admin"});n()})},fV=KA({history:cA("/engranaphic_page/"),routes:[{path:"/",name:"Door",component:()=>Oc(()=>import("./Building.47d53d66.js"),["assets/Building.47d53d66.js","assets/Building.0d456a7e.css"])},{path:"/web",name:"public",component:()=>Oc(()=>import("./Public.8183cc29.js"),["assets/Public.8183cc29.js","assets/Public.4b2f7b10.css"])},{path:"/admin_login",name:"login",component:()=>Oc(()=>import("./Login.edd32c2c.js"),["assets/Login.edd32c2c.js","assets/Login.e1620305.css"])},{path:"/sa_admin",name:"admin",component:()=>Oc(()=>import("./Admin.d777989f.js"),["assets/Admin.d777989f.js","assets/Admin.aee69300.css"]),beforeEnter:dV()}]});function Yv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yv(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zu(t){return Zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zu(t)}function mV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qv(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pV(t,e,n){return e&&Qv(t.prototype,e),n&&Qv(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xp(t,e){return yV(t)||wV(t,e)||PT(t,e)||_V()}function Tc(t){return gV(t)||vV(t)||PT(t)||bV()}function gV(t){if(Array.isArray(t))return sf(t)}function yV(t){if(Array.isArray(t))return t}function vV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wV(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function PT(t,e){if(!!t){if(typeof t=="string")return sf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sf(t,e)}}function sf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function bV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xv=function(){},Rp={},DT={},OT=null,LT={mark:Xv,measure:Xv};try{typeof window<"u"&&(Rp=window),typeof document<"u"&&(DT=document),typeof MutationObserver<"u"&&(OT=MutationObserver),typeof performance<"u"&&(LT=performance)}catch{}var IV=Rp.navigator||{},Jv=IV.userAgent,Zv=Jv===void 0?"":Jv,Kr=Rp,Re=DT,ew=OT,Gc=LT;Kr.document;var mr=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",MT=~Zv.indexOf("MSIE")||~Zv.indexOf("Trident/"),Yc,Qc,Xc,Jc,Zc,ir="___FONT_AWESOME___",of=16,FT="fa",UT="svg-inline--fa",Xi="data-fa-i2svg",af="data-fa-pseudo-element",EV="data-fa-pseudo-element-pending",Np="data-prefix",Pp="data-icon",tw="fontawesome-i2svg",TV="async",SV=["HTML","HEAD","STYLE","SCRIPT"],VT=function(){try{return!0}catch{return!1}}(),xe="classic",qe="sharp",Dp=[xe,qe];function Sc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[xe]}})}var Ha=Sc((Yc={},et(Yc,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),et(Yc,qe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Yc)),Ka=Sc((Qc={},et(Qc,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),et(Qc,qe,{solid:"fass"}),Qc)),Wa=Sc((Xc={},et(Xc,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),et(Xc,qe,{fass:"fa-solid"}),Xc)),kV=Sc((Jc={},et(Jc,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),et(Jc,qe,{"fa-solid":"fass"}),Jc)),AV=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,BT="fa-layers-text",CV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,xV=Sc((Zc={},et(Zc,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),et(Zc,qe,{900:"fass"}),Zc)),$T=[1,2,3,4,5,6,7,8,9,10],RV=$T.concat([11,12,13,14,15,16,17,18,19,20]),NV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ci={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ga=new Set;Object.keys(Ka[xe]).map(Ga.add.bind(Ga));Object.keys(Ka[qe]).map(Ga.add.bind(Ga));var PV=[].concat(Dp,Tc(Ga),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ci.GROUP,Ci.SWAP_OPACITY,Ci.PRIMARY,Ci.SECONDARY]).concat($T.map(function(t){return"".concat(t,"x")})).concat(RV.map(function(t){return"w-".concat(t)})),aa=Kr.FontAwesomeConfig||{};function DV(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function OV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Re&&typeof Re.querySelector=="function"){var LV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];LV.forEach(function(t){var e=xp(t,2),n=e[0],r=e[1],i=OV(DV(n));i!=null&&(aa[r]=i)})}var qT={styleDefault:"solid",familyDefault:"classic",cssPrefix:FT,replacementClass:UT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};aa.familyPrefix&&(aa.cssPrefix=aa.familyPrefix);var to=q(q({},qT),aa);to.autoReplaceSvg||(to.observeMutations=!1);var G={};Object.keys(qT).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){to[t]=n,ca.forEach(function(r){return r(G)})},get:function(){return to[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){to.cssPrefix=e,ca.forEach(function(n){return n(G)})},get:function(){return to.cssPrefix}});Kr.FontAwesomeConfig=G;var ca=[];function MV(t){return ca.push(t),function(){ca.splice(ca.indexOf(t),1)}}var Er=of,Ln={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function FV(t){if(!(!t||!mr)){var e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Re.head.insertBefore(e,r),t}}var UV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ya(){for(var t=12,e="";t-- >0;)e+=UV[Math.random()*62|0];return e}function Io(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Op(t){return t.classList?Io(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function jT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function VV(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(jT(t[n]),'" ')},"").trim()}function mh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Lp(t){return t.size!==Ln.size||t.x!==Ln.x||t.y!==Ln.y||t.rotate!==Ln.rotate||t.flipX||t.flipY}function BV(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function $V(t){var e=t.transform,n=t.width,r=n===void 0?of:n,i=t.height,s=i===void 0?of:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&MT?c+="translate(".concat(e.x/Er-r/2,"em, ").concat(e.y/Er-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Er,"em), calc(-50% + ").concat(e.y/Er,"em)) "):c+="translate(".concat(e.x/Er,"em, ").concat(e.y/Er,"em) "),c+="scale(".concat(e.size/Er*(e.flipX?-1:1),", ").concat(e.size/Er*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var qV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zT(){var t=FT,e=UT,n=G.cssPrefix,r=G.replacementClass,i=qV;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var nw=!1;function Zh(){G.autoAddCss&&!nw&&(FV(zT()),nw=!0)}var jV={mixout:function(){return{dom:{css:zT,insertCss:Zh}}},hooks:function(){return{beforeDOMElementCreation:function(){Zh()},beforeI2svg:function(){Zh()}}}},sr=Kr||{};sr[ir]||(sr[ir]={});sr[ir].styles||(sr[ir].styles={});sr[ir].hooks||(sr[ir].hooks={});sr[ir].shims||(sr[ir].shims=[]);var mn=sr[ir],HT=[],zV=function t(){Re.removeEventListener("DOMContentLoaded",t),el=1,HT.map(function(e){return e()})},el=!1;mr&&(el=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),el||Re.addEventListener("DOMContentLoaded",zV));function HV(t){!mr||(el?setTimeout(t,0):HT.push(t))}function kc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?jT(t):"<".concat(e," ").concat(VV(r),">").concat(s.map(kc).join(""),"</").concat(e,">")}function rw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var KV=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ed=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?KV(n,i):n,c,u,l;for(r===void 0?(c=1,l=e[s[0]]):(c=0,l=r);c<o;c++)u=s[c],l=a(l,e[u],u,e);return l};function WV(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function cf(t){var e=WV(t);return e.length===1?e[0].toString(16):null}function GV(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function iw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function uf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=iw(e);typeof mn.hooks.addPack=="function"&&!i?mn.hooks.addPack(t,iw(e)):mn.styles[t]=q(q({},mn.styles[t]||{}),s),t==="fas"&&uf("fa",e)}var eu,tu,nu,Is=mn.styles,YV=mn.shims,QV=(eu={},et(eu,xe,Object.values(Wa[xe])),et(eu,qe,Object.values(Wa[qe])),eu),Mp=null,KT={},WT={},GT={},YT={},QT={},XV=(tu={},et(tu,xe,Object.keys(Ha[xe])),et(tu,qe,Object.keys(Ha[qe])),tu);function JV(t){return~PV.indexOf(t)}function ZV(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!JV(i)?i:null}var XT=function(){var e=function(s){return ed(Is,function(o,a,c){return o[c]=ed(a,s,{}),o},{})};KT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),WT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),QT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Is||G.autoFetchSvg,r=ed(YV,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});GT=r.names,YT=r.unicodes,Mp=ph(G.styleDefault,{family:G.familyDefault})};MV(function(t){Mp=ph(t.styleDefault,{family:G.familyDefault})});XT();function Fp(t,e){return(KT[t]||{})[e]}function eB(t,e){return(WT[t]||{})[e]}function xi(t,e){return(QT[t]||{})[e]}function JT(t){return GT[t]||{prefix:null,iconName:null}}function tB(t){var e=YT[t],n=Fp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return Mp}var Up=function(){return{prefix:null,iconName:null,rest:[]}};function ph(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?xe:n,i=Ha[r][t],s=Ka[r][t]||Ka[r][i],o=t in mn.styles?t:null;return s||o||null}var sw=(nu={},et(nu,xe,Object.keys(Wa[xe])),et(nu,qe,Object.keys(Wa[qe])),nu);function gh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},et(e,xe,"".concat(G.cssPrefix,"-").concat(xe)),et(e,qe,"".concat(G.cssPrefix,"-").concat(qe)),e),o=null,a=xe;(t.includes(s[xe])||t.some(function(u){return sw[xe].includes(u)}))&&(a=xe),(t.includes(s[qe])||t.some(function(u){return sw[qe].includes(u)}))&&(a=qe);var c=t.reduce(function(u,l){var h=ZV(G.cssPrefix,l);if(Is[l]?(l=QV[a].includes(l)?kV[a][l]:l,o=l,u.prefix=l):XV[a].indexOf(l)>-1?(o=l,u.prefix=ph(l,{family:a})):h?u.iconName=h:l!==G.replacementClass&&l!==s[xe]&&l!==s[qe]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var d=o==="fa"?JT(u.iconName):{},f=xi(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||f||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Is.far&&Is.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},Up());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===qe&&(Is.fass||G.autoFetchSvg)&&(c.prefix="fass",c.iconName=xi(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Wr()||"fas"),c}var nB=function(){function t(){mV(this,t),this.definitions={}}return pV(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=q(q({},n.definitions[a]||{}),o[a]),uf(a,o[a]);var c=Wa[xe][a];c&&uf(c,o[a]),XT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,u=o.icon,l=u[2];n[a]||(n[a]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}]),t}(),ow=[],Es={},Ms={},rB=Object.keys(Ms);function iB(t,e){var n=e.mixoutsTo;return ow=t,Es={},Object.keys(Ms).forEach(function(r){rB.indexOf(r)===-1&&delete Ms[r]}),ow.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Es[o]||(Es[o]=[]),Es[o].push(s[o])})}r.provides&&r.provides(Ms)}),n}function lf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Es[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ji(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Es[t]||[];i.forEach(function(s){s.apply(null,n)})}function or(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ms[t]?Ms[t].apply(null,e):void 0}function hf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wr();if(!!e)return e=xi(n,e)||e,rw(ZT.definitions,n,e)||rw(mn.styles,n,e)}var ZT=new nB,sB=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Ji("noAuto")},oB={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(Ji("beforeI2svg",e),or("pseudoElements2svg",e),or("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,HV(function(){cB({autoReplaceSvgRoot:n}),Ji("watch",e)})}},aB={icon:function(e){if(e===null)return null;if(Zu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:xi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ph(e[0]);return{prefix:r,iconName:xi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(AV))){var i=gh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Wr(),iconName:xi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Wr();return{prefix:s,iconName:xi(s,e)||e}}}},Jt={noAuto:sB,config:G,dom:oB,parse:aB,library:ZT,findIconDefinition:hf,toHtml:kc},cB=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Re:n;(Object.keys(mn.styles).length>0||G.autoFetchSvg)&&mr&&G.autoReplaceSvg&&Jt.dom.i2svg({node:r})};function yh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return kc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!mr){var r=Re.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function uB(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Lp(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};i.style=mh(q(q({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function lB(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},i),{},{id:o}),children:r}]}]}function Vp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,u=t.maskId,l=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,p=r.found?r:n,y=p.width,b=p.height,v=i==="fak",_=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(oe){return h.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(h.classes).join(" "),E={children:[],attributes:q(q({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},R=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};f&&(E.attributes[Xi]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(l||Ya())},children:[c]}),delete E.attributes.title);var F=q(q({},E),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:q(q({},R),h.styles)}),z=r.found&&n.found?or("generateAbstractMask",F)||{children:[],attributes:{}}:or("generateAbstractIcon",F)||{children:[],attributes:{}},ee=z.children,Q=z.attributes;return F.children=ee,F.attributes=Q,a?lB(F):uB(F)}function aw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,u=q(q(q({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[Xi]="");var l=q({},o.styles);Lp(i)&&(l.transform=$V({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var h=mh(l);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function hB(t){var e=t.content,n=t.title,r=t.extra,i=q(q(q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=mh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var td=mn.styles;function df(t){var e=t[0],n=t[1],r=t.slice(4),i=xp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ci.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ci.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ci.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var dB={found:!1,width:512,height:512};function fB(t,e){!VT&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ff(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Wr()),new Promise(function(r,i){if(or("missingIconAbstract"),n==="fa"){var s=JT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&td[e]&&td[e][t]){var o=td[e][t];return r(df(o))}fB(t,e),r(q(q({},dB),{},{icon:G.showMissingIcons&&t?or("missingIconAbstract")||{}:{}}))})}var cw=function(){},mf=G.measurePerformance&&Gc&&Gc.mark&&Gc.measure?Gc:{mark:cw,measure:cw},zo='FA "6.2.1"',mB=function(e){return mf.mark("".concat(zo," ").concat(e," begins")),function(){return e1(e)}},e1=function(e){mf.mark("".concat(zo," ").concat(e," ends")),mf.measure("".concat(zo," ").concat(e),"".concat(zo," ").concat(e," begins"),"".concat(zo," ").concat(e," ends"))},Bp={begin:mB,end:e1},vu=function(){};function uw(t){var e=t.getAttribute?t.getAttribute(Xi):null;return typeof e=="string"}function pB(t){var e=t.getAttribute?t.getAttribute(Np):null,n=t.getAttribute?t.getAttribute(Pp):null;return e&&n}function gB(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function yB(){if(G.autoReplaceSvg===!0)return wu.replace;var t=wu[G.autoReplaceSvg];return t||wu.replace}function vB(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function wB(t){return Re.createElement(t)}function t1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?vB:wB:n;if(typeof t=="string")return Re.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(t1(o,{ceFn:r}))}),i}function bB(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var wu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(t1(i),n)}),n.getAttribute(Xi)===null&&G.keepOriginalSource){var r=Re.createComment(bB(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Op(n).indexOf(G.replacementClass))return wu.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===G.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return kc(a)}).join(`
`);n.setAttribute(Xi,""),n.innerHTML=o}};function lw(t){t()}function n1(t,e){var n=typeof e=="function"?e:vu;if(t.length===0)n();else{var r=lw;G.mutateApproach===TV&&(r=Kr.requestAnimationFrame||lw),r(function(){var i=yB(),s=Bp.begin("mutate");t.map(i),s(),n()})}}var $p=!1;function r1(){$p=!0}function pf(){$p=!1}var tl=null;function hw(t){if(!!ew&&!!G.observeMutations){var e=t.treeCallback,n=e===void 0?vu:e,r=t.nodeCallback,i=r===void 0?vu:r,s=t.pseudoElementsCallback,o=s===void 0?vu:s,a=t.observeMutationsRoot,c=a===void 0?Re:a;tl=new ew(function(u){if(!$p){var l=Wr();Io(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!uw(h.addedNodes[0])&&(G.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&G.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&uw(h.target)&&~NV.indexOf(h.attributeName))if(h.attributeName==="class"&&pB(h.target)){var d=gh(Op(h.target)),f=d.prefix,p=d.iconName;h.target.setAttribute(Np,f||l),p&&h.target.setAttribute(Pp,p)}else gB(h.target)&&i(h.target)})}}),mr&&tl.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _B(){!tl||tl.disconnect()}function IB(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function EB(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=gh(Op(t));return i.prefix||(i.prefix=Wr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=eB(i.prefix,t.innerText)||Fp(i.prefix,cf(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function TB(t){var e=Io(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||Ya()):(e["aria-hidden"]="true",e.focusable="false")),e}function SB(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ln,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=EB(t),r=n.iconName,i=n.prefix,s=n.rest,o=TB(t),a=lf("parseNodeAttributes",{},t),c=e.styleParser?IB(t):[];return q({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ln,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var kB=mn.styles;function i1(t){var e=G.autoReplaceSvg==="nest"?dw(t,{styleParser:!1}):dw(t);return~e.extra.classes.indexOf(BT)?or("generateLayersText",t,e):or("generateSvgReplacementMutation",t,e)}var Gr=new Set;Dp.map(function(t){Gr.add("fa-".concat(t))});Object.keys(Ha[xe]).map(Gr.add.bind(Gr));Object.keys(Ha[qe]).map(Gr.add.bind(Gr));Gr=Tc(Gr);function fw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();var n=Re.documentElement.classList,r=function(h){return n.add("".concat(tw,"-").concat(h))},i=function(h){return n.remove("".concat(tw,"-").concat(h))},s=G.autoFetchSvg?Gr:Dp.map(function(l){return"fa-".concat(l)}).concat(Object.keys(kB));s.includes("fa")||s.push("fa");var o=[".".concat(BT,":not([").concat(Xi,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(Xi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Io(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Bp.begin("onTree"),u=a.reduce(function(l,h){try{var d=i1(h);d&&l.push(d)}catch(f){VT||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise(function(l,h){Promise.all(u).then(function(d){n1(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(d){c(),h(d)})})}function AB(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;i1(t).then(function(n){n&&n1([n],e)})}function CB(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:hf(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:hf(i||{})),t(r,q(q({},n),{},{mask:i}))}}var xB=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ln:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,u=n.maskId,l=u===void 0?null:u,h=n.title,d=h===void 0?null:h,f=n.titleId,p=f===void 0?null:f,y=n.classes,b=y===void 0?[]:y,v=n.attributes,_=v===void 0?{}:v,E=n.styles,R=E===void 0?{}:E;if(!!e){var F=e.prefix,z=e.iconName,ee=e.icon;return yh(q({type:"icon"},e),function(){return Ji("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(d?_["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(p||Ya()):(_["aria-hidden"]="true",_.focusable="false")),Vp({icons:{main:df(ee),mask:c?df(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:z,transform:q(q({},Ln),i),symbol:o,title:d,maskId:l,titleId:p,extra:{attributes:_,styles:R,classes:b}})})}},RB={mixout:function(){return{icon:CB(xB)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=fw,n.nodeCallback=AB,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Re:r,s=n.callback,o=s===void 0?function(){}:s;return fw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,u=r.symbol,l=r.mask,h=r.maskId,d=r.extra;return new Promise(function(f,p){Promise.all([ff(i,a),l.iconName?ff(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=xp(y,2),v=b[0],_=b[1];f([n,Vp({icons:{main:v,mask:_},prefix:a,iconName:i,transform:c,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=mh(a);c.length>0&&(i.style=c);var u;return Lp(o)&&(u=or("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},NB={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return yh({type:"layer"},function(){Ji("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(Tc(s)).join(" ")},children:o}]})}}}},PB={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,l=r.styles,h=l===void 0?{}:l;return yh({type:"counter",content:n},function(){return Ji("beforeDOMElementCreation",{content:n,params:r}),hB({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(Tc(a))}})})}}}},DB={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ln:i,o=r.title,a=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,l=r.attributes,h=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return yh({type:"text",content:n},function(){return Ji("beforeDOMElementCreation",{content:n,params:r}),aw({content:n,transform:q(q({},Ln),s),title:a,extra:{attributes:h,styles:f,classes:["".concat(G.cssPrefix,"-layers-text")].concat(Tc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(MT){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/u,c=l.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,aw({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},OB=new RegExp('"',"ug"),mw=[1105920,1112319];function LB(t){var e=t.replace(OB,""),n=GV(e,0),r=n>=mw[0]&&n<=mw[1],i=e.length===2?e[0]===e[1]:!1;return{value:cf(i?e[0]:e),isSecondary:r||i}}function pw(t,e){var n="".concat(EV).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Io(t.children),o=s.filter(function(ee){return ee.getAttribute(af)===e})[0],a=Kr.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(CV),u=a.getPropertyValue("font-weight"),l=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&l!=="none"&&l!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?qe:xe,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ka[d][c[2].toLowerCase()]:xV[d][u],p=LB(h),y=p.value,b=p.isSecondary,v=c[0].startsWith("FontAwesome"),_=Fp(f,y),E=_;if(v){var R=tB(y);R.iconName&&R.prefix&&(_=R.iconName,f=R.prefix)}if(_&&!b&&(!o||o.getAttribute(Np)!==f||o.getAttribute(Pp)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var F=SB(),z=F.extra;z.attributes[af]=e,ff(_,f).then(function(ee){var Q=Vp(q(q({},F),{},{icons:{main:ee,mask:Up()},prefix:f,iconName:E,extra:z,watchable:!0})),oe=Re.createElement("svg");e==="::before"?t.insertBefore(oe,t.firstChild):t.appendChild(oe),oe.outerHTML=Q.map(function(ve){return kc(ve)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function MB(t){return Promise.all([pw(t,"::before"),pw(t,"::after")])}function FB(t){return t.parentNode!==document.head&&!~SV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(af)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function gw(t){if(!!mr)return new Promise(function(e,n){var r=Io(t.querySelectorAll("*")).filter(FB).map(MB),i=Bp.begin("searchPseudoElements");r1(),Promise.all(r).then(function(){i(),pf(),e()}).catch(function(){i(),pf(),n()})})}var UB={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Re:r;G.searchPseudoElements&&gw(i)}}},yw=!1,VB={mixout:function(){return{dom:{unwatch:function(){r1(),yw=!0}}}},hooks:function(){return{bootstrap:function(){hw(lf("mutationObserverCallbacks",{}))},noAuto:function(){_B()},watch:function(n){var r=n.observeMutationsRoot;yw?pf():hw(lf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},BB={mixout:function(){return{parse:{transform:function(n){return vw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:q({},f.outer),children:[{tag:"g",attributes:q({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:q(q({},r.icon.attributes),f.path)}]}]}}}},nd={x:0,y:0,width:"100%",height:"100%"};function ww(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $B(t){return t.tag==="g"?t.children:[t]}var qB={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?gh(i.split(" ").map(function(o){return o.trim()})):Up();return s.prefix||(s.prefix=Wr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,u=s.width,l=s.icon,h=o.width,d=o.icon,f=BV({transform:c,containerWidth:h,iconWidth:u}),p={tag:"rect",attributes:q(q({},nd),{},{fill:"white"})},y=l.children?{children:l.children.map(ww)}:{},b={tag:"g",attributes:q({},f.inner),children:[ww(q({tag:l.tag,attributes:q(q({},l.attributes),f.path)},y))]},v={tag:"g",attributes:q({},f.outer),children:[b]},_="mask-".concat(a||Ya()),E="clip-".concat(a||Ya()),R={tag:"mask",attributes:q(q({},nd),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:$B(d)},R]};return r.push(F,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(_,")")},nd)}),{children:r,attributes:i}}}},jB={provides:function(e){var n=!1;Kr.matchMedia&&(n=Kr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:q(q({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=q(q({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:q(q({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:q(q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:q(q({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:q(q({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},zB={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},HB=[jV,RB,NB,PB,DB,UB,VB,BB,qB,jB,zB];iB(HB,{mixoutsTo:Jt});Jt.noAuto;var s1=Jt.config,KB=Jt.library;Jt.dom;var nl=Jt.parse;Jt.findIconDefinition;Jt.toHtml;var WB=Jt.icon;Jt.layer;var GB=Jt.text;Jt.counter;function bw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function hn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bw(Object(n),!0).forEach(function(r){Mt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rl(t){return rl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rl(t)}function Mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function YB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function QB(t,e){if(t==null)return{};var n=YB(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function gf(t){return XB(t)||JB(t)||ZB(t)||e$()}function XB(t){if(Array.isArray(t))return yf(t)}function JB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ZB(t,e){if(!!t){if(typeof t=="string")return yf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yf(t,e)}}function yf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var t$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o1={exports:{}};(function(t){(function(e){var n=function(v,_,E){if(!u(_)||h(_)||d(_)||f(_)||c(_))return _;var R,F=0,z=0;if(l(_))for(R=[],z=_.length;F<z;F++)R.push(n(v,_[F],E));else{R={};for(var ee in _)Object.prototype.hasOwnProperty.call(_,ee)&&(R[v(ee,E)]=n(v,_[ee],E))}return R},r=function(v,_){_=_||{};var E=_.separator||"_",R=_.split||/(?=[A-Z])/;return v.split(R).join(E)},i=function(v){return p(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,E){return E?E.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var _=i(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},l=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},f=function(v){return a.call(v)=="[object Boolean]"},p=function(v){return v=v-0,v===v},y=function(v,_){var E=_&&"process"in _?_.process:_;return typeof E!="function"?v:function(R,F){return E(R,v,F)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,_){return n(y(i,_),v)},decamelizeKeys:function(v,_){return n(y(o,_),v,_)},pascalizeKeys:function(v,_){return n(y(s,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(t$)})(o1);var n$=o1.exports,r$=["class","style"];function i$(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=n$.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function s$(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return qp(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,u){var l=t.attributes[u];switch(u){case"class":c.class=s$(l);break;case"style":c.style=i$(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=QB(n,r$);return Ja(t.tag,hn(hn(hn({},e),{},{class:i.class,style:hn(hn({},i.style),o)},i.attrs),a),r)}var a1=!1;try{a1=!0}catch{}function o$(){if(!a1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ua(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Mt({},t,e):{}}function a$(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Mt(e,"fa-".concat(t.size),t.size!==null),Mt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Mt(e,"fa-pull-".concat(t.pull),t.pull!==null),Mt(e,"fa-swap-opacity",t.swapOpacity),Mt(e,"fa-bounce",t.bounce),Mt(e,"fa-shake",t.shake),Mt(e,"fa-beat",t.beat),Mt(e,"fa-fade",t.fade),Mt(e,"fa-beat-fade",t.beatFade),Mt(e,"fa-flash",t.flash),Mt(e,"fa-spin-pulse",t.spinPulse),Mt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function _w(t){if(t&&rl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(nl.icon)return nl.icon(t);if(t===null)return null;if(rl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var c$=Xa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Ue(function(){return _w(e.icon)}),s=Ue(function(){return ua("classes",a$(e))}),o=Ue(function(){return ua("transform",typeof e.transform=="string"?nl.transform(e.transform):e.transform)}),a=Ue(function(){return ua("mask",_w(e.mask))}),c=Ue(function(){return WB(i.value,hn(hn(hn(hn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Ho(c,function(l){if(!l)return o$("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=Ue(function(){return c.value?qp(c.value.abstract[0],{},r):null});return function(){return u.value}}});Xa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=s1.familyPrefix,s=Ue(function(){return["".concat(i,"-layers")].concat(gf(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Ja("div",{class:s.value},r.default?r.default():[])}}});Xa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=s1.familyPrefix,s=Ue(function(){return ua("classes",[].concat(gf(e.counter?["".concat(i,"-layers-counter")]:[]),gf(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=Ue(function(){return ua("transform",typeof e.transform=="string"?nl.transform(e.transform):e.transform)}),a=Ue(function(){var u=GB(e.value.toString(),hn(hn({},o.value),s.value)),l=u.abstract;return e.counter&&(l[0].attributes.class=l[0].attributes.class.replace("fa-layers-text","")),l[0]}),c=Ue(function(){return qp(a.value,{},r)});return function(){return c.value}}});var u$={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},l$={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},h$={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},d$={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"]},f$={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},m$={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},p$={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},g$={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},y$={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},v$={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},w$={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};KB.add(m$,p$,u$,l$,g$,h$,d$,v$,y$,w$,f$);const jp=Fk(qk);jp.use(fV);jp.component("font-awesome-icon",c$);jp.mount("#app");export{Qu as A,Lv as B,aS as C,En as F,rT as I,Eb as T,Vk as _,k$ as a,bb as b,S$ as c,hV as d,AS as e,Bt as f,E$ as g,I$ as h,QS as i,ib as j,NE as k,A$ as l,T$ as m,N$ as n,gb as o,_$ as p,wf as q,Y1 as r,vb as s,b$ as t,R$ as u,C$ as v,x$ as w,P$ as x,mF as y,fF as z};
