(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bf(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function _f(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Je(r)?m1(r):_f(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Je(t))return t;if(Pe(t))return t}}const h1=/;(?![^(]*\))/g,d1=/:([^]+)/,f1=/\/\*.*?\*\//gs;function m1(t){const e={};return t.replace(f1,"").split(h1).forEach(n=>{if(n){const r=n.split(d1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function If(t){let e="";if(Je(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=If(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",g1=bf(p1);function Aw(t){return!!t||t===""}const _$=t=>Je(t)?t:t==null?"":re(t)||Pe(t)&&(t.toString===Nw||!ue(t.toString))?JSON.stringify(t,Cw,2):String(t),Cw=(t,e)=>e&&e.__v_isRef?Cw(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:xw(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!re(e)&&!Pw(e)?String(e):e,Ce={},Ss=[],gn=()=>{},y1=()=>!1,v1=/^on[^a-z]/,il=t=>v1.test(t),Ef=t=>t.startsWith("onUpdate:"),vt=Object.assign,Tf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},w1=Object.prototype.hasOwnProperty,pe=(t,e)=>w1.call(t,e),re=Array.isArray,ks=t=>sl(t)==="[object Map]",xw=t=>sl(t)==="[object Set]",ue=t=>typeof t=="function",Je=t=>typeof t=="string",Sf=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Rw=t=>Pe(t)&&ue(t.then)&&ue(t.catch),Nw=Object.prototype.toString,sl=t=>Nw.call(t),b1=t=>sl(t).slice(8,-1),Pw=t=>sl(t)==="[object Object]",kf=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,iu=bf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ol=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_1=/-(\w)/g,Bn=ol(t=>t.replace(_1,(e,n)=>n?n.toUpperCase():"")),I1=/\B([A-Z])/g,ro=ol(t=>t.replace(I1,"-$1").toLowerCase()),al=ol(t=>t.charAt(0).toUpperCase()+t.slice(1)),vh=ol(t=>t?`on${al(t)}`:""),da=(t,e)=>!Object.is(t,e),su=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jp;const E1=()=>Jp||(Jp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let En;class T1{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=En,!e&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}run(e){if(this.active){const n=En;try{return En=this,e()}finally{En=n}}}on(){En=this}off(){En=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function S1(t,e=En){e&&e.active&&e.effects.push(t)}const Af=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Dw=t=>(t.w&Or)>0,Ow=t=>(t.n&Or)>0,k1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Or},A1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Dw(i)&&!Ow(i)?i.delete(t):e[n++]=i,i.w&=~Or,i.n&=~Or}e.length=n}},rd=new WeakMap;let Uo=0,Or=1;const id=30;let hn;const Ni=Symbol(""),sd=Symbol("");class Cf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,S1(this,r)}run(){if(!this.active)return this.fn();let e=hn,n=Rr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hn,hn=this,Rr=!0,Or=1<<++Uo,Uo<=id?k1(this):Zp(this),this.fn()}finally{Uo<=id&&A1(this),Or=1<<--Uo,hn=this.parent,Rr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(Zp(this),this.onStop&&this.onStop(),this.active=!1)}}function Zp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rr=!0;const Lw=[];function io(){Lw.push(Rr),Rr=!1}function so(){const t=Lw.pop();Rr=t===void 0?!0:t}function Yt(t,e,n){if(Rr&&hn){let r=rd.get(t);r||rd.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Af()),Mw(i)}}function Mw(t,e){let n=!1;Uo<=id?Ow(t)||(t.n|=Or,n=!Dw(t)):n=!t.has(hn),n&&(t.add(hn),hn.deps.push(t))}function Zn(t,e,n,r,i,s){const o=rd.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const c=fa(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?kf(n)&&a.push(o.get("length")):(a.push(o.get(Ni)),ks(t)&&a.push(o.get(sd)));break;case"delete":re(t)||(a.push(o.get(Ni)),ks(t)&&a.push(o.get(sd)));break;case"set":ks(t)&&a.push(o.get(Ni));break}if(a.length===1)a[0]&&od(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);od(Af(c))}}function od(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&eg(r);for(const r of n)r.computed||eg(r)}function eg(t,e){(t!==hn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const C1=bf("__proto__,__v_isRef,__isVue"),Fw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sf)),x1=xf(),R1=xf(!1,!0),N1=xf(!0),tg=P1();function P1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=we(this);for(let s=0,o=this.length;s<o;s++)Yt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){io();const r=we(this)[e].apply(this,n);return so(),r}}),t}function xf(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?G1:qw:e?$w:Bw).get(r))return r;const o=re(r);if(!t&&o&&pe(tg,i))return Reflect.get(tg,i,s);const a=Reflect.get(r,i,s);return(Sf(i)?Fw.has(i):C1(i))||(t||Yt(r,"get",i),e)?a:It(a)?o&&kf(i)?a:a.value:Pe(a)?t?jw(a):Ja(a):a}}const D1=Uw(),O1=Uw(!0);function Uw(t=!1){return function(n,r,i,s){let o=n[r];if(Us(o)&&It(o)&&!It(i))return!1;if(!t&&(!_u(i)&&!Us(i)&&(o=we(o),i=we(i)),!re(n)&&It(o)&&!It(i)))return o.value=i,!0;const a=re(n)&&kf(r)?Number(r)<n.length:pe(n,r),c=Reflect.set(n,r,i,s);return n===we(s)&&(a?da(i,o)&&Zn(n,"set",r,i):Zn(n,"add",r,i)),c}}function L1(t,e){const n=pe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Zn(t,"delete",e,void 0),r}function M1(t,e){const n=Reflect.has(t,e);return(!Sf(e)||!Fw.has(e))&&Yt(t,"has",e),n}function F1(t){return Yt(t,"iterate",re(t)?"length":Ni),Reflect.ownKeys(t)}const Vw={get:x1,set:D1,deleteProperty:L1,has:M1,ownKeys:F1},U1={get:N1,set(t,e){return!0},deleteProperty(t,e){return!0}},V1=vt({},Vw,{get:R1,set:O1}),Rf=t=>t,cl=t=>Reflect.getPrototypeOf(t);function Rc(t,e,n=!1,r=!1){t=t.__v_raw;const i=we(t),s=we(e);n||(e!==s&&Yt(i,"get",e),Yt(i,"get",s));const{has:o}=cl(i),a=r?Rf:n?Df:ma;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Nc(t,e=!1){const n=this.__v_raw,r=we(n),i=we(t);return e||(t!==i&&Yt(r,"has",t),Yt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Pc(t,e=!1){return t=t.__v_raw,!e&&Yt(we(t),"iterate",Ni),Reflect.get(t,"size",t)}function ng(t){t=we(t);const e=we(this);return cl(e).has.call(e,t)||(e.add(t),Zn(e,"add",t,t)),this}function rg(t,e){e=we(e);const n=we(this),{has:r,get:i}=cl(n);let s=r.call(n,t);s||(t=we(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?da(e,o)&&Zn(n,"set",t,e):Zn(n,"add",t,e),this}function ig(t){const e=we(this),{has:n,get:r}=cl(e);let i=n.call(e,t);i||(t=we(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Zn(e,"delete",t,void 0),s}function sg(){const t=we(this),e=t.size!==0,n=t.clear();return e&&Zn(t,"clear",void 0,void 0),n}function Dc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=we(o),c=e?Rf:t?Df:ma;return!t&&Yt(a,"iterate",Ni),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Oc(t,e,n){return function(...r){const i=this.__v_raw,s=we(i),o=ks(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?Rf:e?Df:ma;return!e&&Yt(s,"iterate",c?sd:Ni),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function gr(t){return function(...e){return t==="delete"?!1:this}}function B1(){const t={get(s){return Rc(this,s)},get size(){return Pc(this)},has:Nc,add:ng,set:rg,delete:ig,clear:sg,forEach:Dc(!1,!1)},e={get(s){return Rc(this,s,!1,!0)},get size(){return Pc(this)},has:Nc,add:ng,set:rg,delete:ig,clear:sg,forEach:Dc(!1,!0)},n={get(s){return Rc(this,s,!0)},get size(){return Pc(this,!0)},has(s){return Nc.call(this,s,!0)},add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear"),forEach:Dc(!0,!1)},r={get(s){return Rc(this,s,!0,!0)},get size(){return Pc(this,!0)},has(s){return Nc.call(this,s,!0)},add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear"),forEach:Dc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Oc(s,!1,!1),n[s]=Oc(s,!0,!1),e[s]=Oc(s,!1,!0),r[s]=Oc(s,!0,!0)}),[t,n,e,r]}const[$1,q1,j1,z1]=B1();function Nf(t,e){const n=e?t?z1:j1:t?q1:$1;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(pe(n,i)&&i in r?n:r,i,s)}const H1={get:Nf(!1,!1)},K1={get:Nf(!1,!0)},W1={get:Nf(!0,!1)},Bw=new WeakMap,$w=new WeakMap,qw=new WeakMap,G1=new WeakMap;function Y1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Q1(t){return t.__v_skip||!Object.isExtensible(t)?0:Y1(b1(t))}function Ja(t){return Us(t)?t:Pf(t,!1,Vw,H1,Bw)}function X1(t){return Pf(t,!1,V1,K1,$w)}function jw(t){return Pf(t,!0,U1,W1,qw)}function Pf(t,e,n,r,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Q1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function As(t){return Us(t)?As(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function _u(t){return!!(t&&t.__v_isShallow)}function zw(t){return As(t)||Us(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Hw(t){return bu(t,"__v_skip",!0),t}const ma=t=>Pe(t)?Ja(t):t,Df=t=>Pe(t)?jw(t):t;function Kw(t){Rr&&hn&&(t=we(t),Mw(t.dep||(t.dep=Af())))}function Ww(t,e){t=we(t),t.dep&&od(t.dep)}function It(t){return!!(t&&t.__v_isRef===!0)}function J1(t){return Gw(t,!1)}function Z1(t){return Gw(t,!0)}function Gw(t,e){return It(t)?t:new eS(t,e)}class eS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:ma(e)}get value(){return Kw(this),this._value}set value(e){const n=this.__v_isShallow||_u(e)||Us(e);e=n?e:we(e),da(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ma(e),Ww(this))}}function Cs(t){return It(t)?t.value:t}const tS={get:(t,e,n)=>Cs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return It(i)&&!It(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Yw(t){return As(t)?t:new Proxy(t,tS)}var Qw;class nS{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qw]=!1,this._dirty=!0,this.effect=new Cf(e,()=>{this._dirty||(this._dirty=!0,Ww(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=we(this);return Kw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qw="__v_isReadonly";function rS(t,e,n=!1){let r,i;const s=ue(t);return s?(r=t,i=gn):(r=t.get,i=t.set),new nS(r,i,s||!i,n)}function Nr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ul(s,e,n)}return i}function nn(t,e,n,r){if(ue(t)){const s=Nr(t,e,n,r);return s&&Rw(s)&&s.catch(o=>{ul(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(nn(t[s],e,n,r));return i}function ul(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Nr(c,null,10,[t,o,a]);return}}iS(t,n,i,r)}function iS(t,e,n,r=!0){console.error(t)}let pa=!1,ad=!1;const _t=[];let Sn=0;const xs=[];let Hn=null,pi=0;const Xw=Promise.resolve();let Of=null;function Jw(t){const e=Of||Xw;return t?e.then(this?t.bind(this):t):e}function sS(t){let e=Sn+1,n=_t.length;for(;e<n;){const r=e+n>>>1;ga(_t[r])<t?e=r+1:n=r}return e}function Lf(t){(!_t.length||!_t.includes(t,pa&&t.allowRecurse?Sn+1:Sn))&&(t.id==null?_t.push(t):_t.splice(sS(t.id),0,t),Zw())}function Zw(){!pa&&!ad&&(ad=!0,Of=Xw.then(tb))}function oS(t){const e=_t.indexOf(t);e>Sn&&_t.splice(e,1)}function aS(t){re(t)?xs.push(...t):(!Hn||!Hn.includes(t,t.allowRecurse?pi+1:pi))&&xs.push(t),Zw()}function og(t,e=pa?Sn+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function eb(t){if(xs.length){const e=[...new Set(xs)];if(xs.length=0,Hn){Hn.push(...e);return}for(Hn=e,Hn.sort((n,r)=>ga(n)-ga(r)),pi=0;pi<Hn.length;pi++)Hn[pi]();Hn=null,pi=0}}const ga=t=>t.id==null?1/0:t.id,cS=(t,e)=>{const n=ga(t)-ga(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tb(t){ad=!1,pa=!0,_t.sort(cS);const e=gn;try{for(Sn=0;Sn<_t.length;Sn++){const n=_t[Sn];n&&n.active!==!1&&Nr(n,null,14)}}finally{Sn=0,_t.length=0,eb(),pa=!1,Of=null,(_t.length||xs.length)&&tb()}}function uS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Ce;d&&(i=n.map(f=>Je(f)?f.trim():f)),h&&(i=n.map(fa))}let a,c=r[a=vh(e)]||r[a=vh(Bn(e))];!c&&s&&(c=r[a=vh(ro(e))]),c&&nn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nn(u,t,6,i)}}function nb(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ue(t)){const c=u=>{const l=nb(u,e,!0);l&&(a=!0,vt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Pe(t)&&r.set(t,null),null):(re(s)?s.forEach(c=>o[c]=null):vt(o,s),Pe(t)&&r.set(t,o),o)}function ll(t,e){return!t||!il(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,ro(e))||pe(t,e))}let Kt=null,hl=null;function Iu(t){const e=Kt;return Kt=t,hl=t&&t.type.__scopeId||null,e}function I$(t){hl=t}function E$(){hl=null}function lS(t,e=Kt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&gg(-1);const s=Iu(e);let o;try{o=t(...i)}finally{Iu(s),r._d&&gg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:y}=t;let b,v;const _=Iu(t);try{if(n.shapeFlag&4){const R=i||r;b=Tn(l.call(R,R,h,s,f,d,p)),v=c}else{const R=e;b=Tn(R.length>1?R(s,{attrs:c,slots:a,emit:u}):R(s,null)),v=e.props?c:hS(c)}}catch(R){Yo.length=0,ul(R,t,1),b=Bt(yn)}let E=b;if(v&&y!==!1){const R=Object.keys(v),{shapeFlag:F}=E;R.length&&F&7&&(o&&R.some(Ef)&&(v=dS(v,o)),E=Lr(E,v))}return n.dirs&&(E=Lr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,Iu(_),b}const hS=t=>{let e;for(const n in t)(n==="class"||n==="style"||il(n))&&((e||(e={}))[n]=t[n]);return e},dS=(t,e)=>{const n={};for(const r in t)(!Ef(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fS(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ag(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!ll(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ag(r,o,u):!0:!!o;return!1}function ag(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ll(n,s))return!0}return!1}function mS({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pS=t=>t.__isSuspense;function gS(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):aS(t)}function ou(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Mn(t,e,n=!1){const r=it||Kt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ue(e)?e.call(r.proxy):e}}function yS(t,e){return Mf(t,null,{flush:"post"})}const Lc={};function Ko(t,e,n){return Mf(t,e,n)}function Mf(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ce){const a=it;let c,u=!1,l=!1;if(It(t)?(c=()=>t.value,u=_u(t)):As(t)?(c=()=>t,r=!0):re(t)?(l=!0,u=t.some(E=>As(E)||_u(E)),c=()=>t.map(E=>{if(It(E))return E.value;if(As(E))return Ei(E);if(ue(E))return Nr(E,a,2)})):ue(t)?e?c=()=>Nr(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),nn(t,a,3,[d])}:c=gn,e&&r){const E=c;c=()=>Ei(E())}let h,d=E=>{h=v.onStop=()=>{Nr(E,a,4)}},f;if(va)if(d=gn,e?n&&nn(e,a,3,[c(),l?[]:void 0,d]):c(),i==="sync"){const E=dk();f=E.__watcherHandles||(E.__watcherHandles=[])}else return gn;let p=l?new Array(t.length).fill(Lc):Lc;const y=()=>{if(!!v.active)if(e){const E=v.run();(r||u||(l?E.some((R,F)=>da(R,p[F])):da(E,p)))&&(h&&h(),nn(e,a,3,[E,p===Lc?void 0:l&&p[0]===Lc?[]:p,d]),p=E)}else v.run()};y.allowRecurse=!!e;let b;i==="sync"?b=y:i==="post"?b=()=>Ft(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>Lf(y));const v=new Cf(c,b);e?n?y():p=v.run():i==="post"?Ft(v.run.bind(v),a&&a.suspense):v.run();const _=()=>{v.stop(),a&&a.scope&&Tf(a.scope.effects,v)};return f&&f.push(_),_}function vS(t,e,n){const r=this.proxy,i=Je(t)?t.includes(".")?rb(r,t):()=>r[t]:t.bind(r,r);let s;ue(e)?s=e:(s=e.handler,n=e);const o=it;Vs(this);const a=Mf(i,s.bind(r),n);return o?Vs(o):Pi(),a}function rb(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ei(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),It(t))Ei(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)Ei(t[n],e);else if(xw(t)||ks(t))t.forEach(n=>{Ei(n,e)});else if(Pw(t))for(const n in t)Ei(t[n],e);return t}function wS(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ff(()=>{t.isMounted=!0}),cb(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],bS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},setup(t,{slots:e}){const n=Eb(),r=wS();let i;return()=>{const s=e.default&&ob(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==yn){o=y;break}}const a=we(t),{mode:c}=a;if(r.isLeaving)return bh(o);const u=cg(o);if(!u)return bh(o);const l=cd(u,a,r,n);ud(u,l);const h=n.subTree,d=h&&cg(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const y=p();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==yn&&(!gi(u,d)||f)){const y=cd(d,a,r,n);if(ud(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},bh(o);c==="in-out"&&u.type!==yn&&(y.delayLeave=(b,v,_)=>{const E=sb(r,d);E[String(d.key)]=d,b._leaveCb=()=>{v(),b._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=_})}return o}}},ib=bS;function sb(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function cd(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:y,onAppear:b,onAfterAppear:v,onAppearCancelled:_}=e,E=String(t.key),R=sb(n,t),F=(Q,oe)=>{Q&&nn(Q,r,9,oe)},z=(Q,oe)=>{const ve=oe[1];F(Q,oe),re(Q)?Q.every(Qe=>Qe.length<=1)&&ve():Q.length<=1&&ve()},ee={mode:s,persisted:o,beforeEnter(Q){let oe=a;if(!n.isMounted)if(i)oe=y||a;else return;Q._leaveCb&&Q._leaveCb(!0);const ve=R[E];ve&&gi(t,ve)&&ve.el._leaveCb&&ve.el._leaveCb(),F(oe,[Q])},enter(Q){let oe=c,ve=u,Qe=l;if(!n.isMounted)if(i)oe=b||c,ve=v||u,Qe=_||l;else return;let K=!1;const Ae=Q._enterCb=dt=>{K||(K=!0,dt?F(Qe,[Q]):F(ve,[Q]),ee.delayedLeave&&ee.delayedLeave(),Q._enterCb=void 0)};oe?z(oe,[Q,Ae]):Ae()},leave(Q,oe){const ve=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return oe();F(h,[Q]);let Qe=!1;const K=Q._leaveCb=Ae=>{Qe||(Qe=!0,oe(),Ae?F(p,[Q]):F(f,[Q]),Q._leaveCb=void 0,R[ve]===t&&delete R[ve])};R[ve]=t,d?z(d,[Q,K]):K()},clone(Q){return cd(Q,e,n,r)}};return ee}function bh(t){if(dl(t))return t=Lr(t),t.children=null,t}function cg(t){return dl(t)?t.children?t.children[0]:void 0:t}function ud(t,e){t.shapeFlag&6&&t.component?ud(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ob(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ln?(o.patchFlag&128&&i++,r=r.concat(ob(o.children,e,a))):(e||o.type!==yn)&&r.push(a!=null?Lr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Za(t){return ue(t)?{setup:t,name:t.name}:t}const au=t=>!!t.type.__asyncLoader,dl=t=>t.type.__isKeepAlive;function _S(t,e){ab(t,"a",e)}function IS(t,e){ab(t,"da",e)}function ab(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)dl(i.parent.vnode)&&ES(r,e,n,i),i=i.parent}}function ES(t,e,n,r){const i=fl(e,t,r,!0);Uf(()=>{Tf(r[e],i)},n)}function fl(t,e,n=it,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;io(),Vs(n);const a=nn(e,n,t,o);return Pi(),so(),a});return r?i.unshift(s):i.push(s),s}}const ar=t=>(e,n=it)=>(!va||t==="sp")&&fl(t,(...r)=>e(...r),n),TS=ar("bm"),Ff=ar("m"),SS=ar("bu"),kS=ar("u"),cb=ar("bum"),Uf=ar("um"),AS=ar("sp"),CS=ar("rtg"),xS=ar("rtc");function RS(t,e=it){fl("ec",t,e)}function T$(t,e){const n=Kt;if(n===null)return t;const r=gl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Ce]=e[s];o&&(ue(o)&&(o={mounted:o,updated:o}),o.deep&&Ei(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function si(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(io(),nn(c,n,8,[t.el,a,t,e]),so())}}const ub="components";function NS(t,e){return DS(ub,t,!0,e)||t}const PS=Symbol();function DS(t,e,n=!0,r=!1){const i=Kt||it;if(i){const s=i.type;if(t===ub){const a=uk(s,!1);if(a&&(a===e||a===Bn(e)||a===al(Bn(e))))return s}const o=ug(i[t]||s[t],e)||ug(i.appContext[t],e);return!o&&r?s:o}}function ug(t,e){return t&&(t[e]||t[Bn(e)]||t[al(Bn(e))])}function S$(t,e,n,r){let i;const s=n&&n[r];if(re(t)||Je(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const ld=t=>t?Tb(t)?gl(t)||t.proxy:ld(t.parent):null,Wo=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ld(t.parent),$root:t=>ld(t.root),$emit:t=>t.emit,$options:t=>Vf(t),$forceUpdate:t=>t.f||(t.f=()=>Lf(t.update)),$nextTick:t=>t.n||(t.n=Jw.bind(t.proxy)),$watch:t=>vS.bind(t)}),_h=(t,e)=>t!==Ce&&!t.__isScriptSetup&&pe(t,e),OS={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(_h(r,e))return o[e]=1,r[e];if(i!==Ce&&pe(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&pe(u,e))return o[e]=3,s[e];if(n!==Ce&&pe(n,e))return o[e]=4,n[e];hd&&(o[e]=0)}}const l=Wo[e];let h,d;if(l)return e==="$attrs"&&Yt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&pe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,pe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return _h(i,e)?(i[e]=n,!0):r!==Ce&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ce&&pe(t,o)||_h(e,o)||(a=s[0])&&pe(a,o)||pe(r,o)||pe(Wo,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let hd=!0;function LS(t){const e=Vf(t),n=t.proxy,r=t.ctx;hd=!1,e.beforeCreate&&lg(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:y,deactivated:b,beforeDestroy:v,beforeUnmount:_,destroyed:E,unmounted:R,render:F,renderTracked:z,renderTriggered:ee,errorCaptured:Q,serverPrefetch:oe,expose:ve,inheritAttrs:Qe,components:K,directives:Ae,filters:dt}=e;if(u&&MS(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const _e=o[Te];ue(_e)&&(r[Te]=_e.bind(n))}if(i){const Te=i.call(n,n);Pe(Te)&&(t.data=Ja(Te))}if(hd=!0,s)for(const Te in s){const _e=s[Te],an=ue(_e)?_e.bind(n,n):ue(_e.get)?_e.get.bind(n,n):gn,ii=!ue(_e)&&ue(_e.set)?_e.set.bind(n):gn,cn=Ue({get:an,set:ii});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Lt=>cn.value=Lt})}if(a)for(const Te in a)lb(a[Te],r,n,Te);if(c){const Te=ue(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(_e=>{ou(_e,Te[_e])})}l&&lg(l,t,"c");function Me(Te,_e){re(_e)?_e.forEach(an=>Te(an.bind(n))):_e&&Te(_e.bind(n))}if(Me(TS,h),Me(Ff,d),Me(SS,f),Me(kS,p),Me(_S,y),Me(IS,b),Me(RS,Q),Me(xS,z),Me(CS,ee),Me(cb,_),Me(Uf,R),Me(AS,oe),re(ve))if(ve.length){const Te=t.exposed||(t.exposed={});ve.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>n[_e],set:an=>n[_e]=an})})}else t.exposed||(t.exposed={});F&&t.render===gn&&(t.render=F),Qe!=null&&(t.inheritAttrs=Qe),K&&(t.components=K),Ae&&(t.directives=Ae)}function MS(t,e,n=gn,r=!1){re(t)&&(t=dd(t));for(const i in t){const s=t[i];let o;Pe(s)?"default"in s?o=Mn(s.from||i,s.default,!0):o=Mn(s.from||i):o=Mn(s),It(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function lg(t,e,n){nn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lb(t,e,n,r){const i=r.includes(".")?rb(n,r):()=>n[r];if(Je(t)){const s=e[t];ue(s)&&Ko(i,s)}else if(ue(t))Ko(i,t.bind(n));else if(Pe(t))if(re(t))t.forEach(s=>lb(s,e,n,r));else{const s=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(s)&&Ko(i,s,t)}}function Vf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Eu(c,u,o,!0)),Eu(c,e,o)),Pe(e)&&s.set(e,c),c}function Eu(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Eu(t,s,n,!0),i&&i.forEach(o=>Eu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=FS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const FS={data:hg,props:di,emits:di,methods:di,computed:di,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:di,directives:di,watch:VS,provide:hg,inject:US};function hg(t,e){return e?t?function(){return vt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function US(t,e){return di(dd(t),dd(e))}function dd(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?vt(vt(Object.create(null),t),e):e}function VS(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const r in e)n[r]=xt(t[r],e[r]);return n}function BS(t,e,n,r=!1){const i={},s={};bu(s,pl,1),t.propsDefaults=Object.create(null),hb(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:X1(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function $S(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=we(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(ll(t.emitsOptions,d))continue;const f=e[d];if(c)if(pe(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const p=Bn(d);i[p]=fd(c,a,p,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{hb(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!pe(e,h)&&((l=ro(h))===h||!pe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=fd(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!pe(e,h)&&!0)&&(delete s[h],u=!0)}u&&Zn(t,"set","$attrs")}function hb(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(iu(c))continue;const u=e[c];let l;i&&pe(i,l=Bn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:ll(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=we(n),u=a||Ce;for(let l=0;l<s.length;l++){const h=s[l];n[h]=fd(i,c,h,u[h],t,!pe(u,h))}}return o}function fd(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ue(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(Vs(i),r=u[n]=c.call(null,e),Pi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ro(n))&&(r=!0))}return r}function db(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ue(t)){const l=h=>{c=!0;const[d,f]=db(h,e,!0);vt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Pe(t)&&r.set(t,Ss),Ss;if(re(s))for(let l=0;l<s.length;l++){const h=Bn(s[l]);dg(h)&&(o[h]=Ce)}else if(s)for(const l in s){const h=Bn(l);if(dg(h)){const d=s[l],f=o[h]=re(d)||ue(d)?{type:d}:Object.assign({},d);if(f){const p=pg(Boolean,f.type),y=pg(String,f.type);f[0]=p>-1,f[1]=y<0||p<y,(p>-1||pe(f,"default"))&&a.push(h)}}}const u=[o,a];return Pe(t)&&r.set(t,u),u}function dg(t){return t[0]!=="$"}function fg(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function mg(t,e){return fg(t)===fg(e)}function pg(t,e){return re(e)?e.findIndex(n=>mg(n,t)):ue(e)&&mg(e,t)?0:-1}const fb=t=>t[0]==="_"||t==="$stable",Bf=t=>re(t)?t.map(Tn):[Tn(t)],qS=(t,e,n)=>{if(e._n)return e;const r=lS((...i)=>Bf(e(...i)),n);return r._c=!1,r},mb=(t,e,n)=>{const r=t._ctx;for(const i in t){if(fb(i))continue;const s=t[i];if(ue(s))e[i]=qS(i,s,r);else if(s!=null){const o=Bf(s);e[i]=()=>o}}},pb=(t,e)=>{const n=Bf(e);t.slots.default=()=>n},jS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),bu(e,"_",n)):mb(e,t.slots={})}else t.slots={},e&&pb(t,e);bu(t.slots,pl,1)},zS=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(vt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,mb(e,i)),o=e}else e&&(pb(t,e),o={default:1});if(s)for(const a in i)!fb(a)&&!(a in o)&&delete i[a]};function gb(){return{app:null,config:{isNativeTag:y1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let HS=0;function KS(t,e){return function(r,i=null){ue(r)||(r=Object.assign({},r)),i!=null&&!Pe(i)&&(i=null);const s=gb(),o=new Set;let a=!1;const c=s.app={_uid:HS++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:fk,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&ue(u.install)?(o.add(u),u.install(c,...l)):ue(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=Bt(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,gl(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c}};return c}}function md(t,e,n,r,i=!1){if(re(t)){t.forEach((d,f)=>md(d,e&&(re(e)?e[f]:e),n,r,i));return}if(au(r)&&!i)return;const s=r.shapeFlag&4?gl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Je(u)?(l[u]=null,pe(h,u)&&(h[u]=null)):It(u)&&(u.value=null)),ue(c))Nr(c,a,12,[o,l]);else{const d=Je(c),f=It(c);if(d||f){const p=()=>{if(t.f){const y=d?pe(h,c)?h[c]:l[c]:c.value;i?re(y)&&Tf(y,s):re(y)?y.includes(s)||y.push(s):d?(l[c]=[s],pe(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,pe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(p.id=-1,Ft(p,n)):p()}}}const Ft=gS;function WS(t){return GS(t)}function GS(t,e){const n=E1();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=gn,insertStaticContent:p}=t,y=(m,g,T,S=null,A=null,O=null,B=!1,D=null,M=!!g.dynamicChildren)=>{if(m===g)return;m&&!gi(m,g)&&(S=V(m),Lt(m,A,O,!0),m=null),g.patchFlag===-2&&(M=!1,g.dynamicChildren=null);const{type:N,ref:J,shapeFlag:W}=g;switch(N){case ml:b(m,g,T,S);break;case yn:v(m,g,T,S);break;case Go:m==null&&_(g,T,S,B);break;case ln:K(m,g,T,S,A,O,B,D,M);break;default:W&1?F(m,g,T,S,A,O,B,D,M):W&6?Ae(m,g,T,S,A,O,B,D,M):(W&64||W&128)&&N.process(m,g,T,S,A,O,B,D,M,me)}J!=null&&A&&md(J,m&&m.ref,O,g||m,!g)},b=(m,g,T,S)=>{if(m==null)r(g.el=a(g.children),T,S);else{const A=g.el=m.el;g.children!==m.children&&u(A,g.children)}},v=(m,g,T,S)=>{m==null?r(g.el=c(g.children||""),T,S):g.el=m.el},_=(m,g,T,S)=>{[m.el,m.anchor]=p(m.children,g,T,S,m.el,m.anchor)},E=({el:m,anchor:g},T,S)=>{let A;for(;m&&m!==g;)A=d(m),r(m,T,S),m=A;r(g,T,S)},R=({el:m,anchor:g})=>{let T;for(;m&&m!==g;)T=d(m),i(m),m=T;i(g)},F=(m,g,T,S,A,O,B,D,M)=>{B=B||g.type==="svg",m==null?z(g,T,S,A,O,B,D,M):oe(m,g,A,O,B,D,M)},z=(m,g,T,S,A,O,B,D)=>{let M,N;const{type:J,props:W,shapeFlag:Z,transition:se,dirs:he}=m;if(M=m.el=o(m.type,O,W&&W.is,W),Z&8?l(M,m.children):Z&16&&Q(m.children,M,null,S,A,O&&J!=="foreignObject",B,D),he&&si(m,null,S,"created"),W){for(const Ie in W)Ie!=="value"&&!iu(Ie)&&s(M,Ie,null,W[Ie],O,m.children,S,A,$);"value"in W&&s(M,"value",null,W.value),(N=W.onVnodeBeforeMount)&&In(N,S,m)}ee(M,m,m.scopeId,B,S),he&&si(m,null,S,"beforeMount");const Se=(!A||A&&!A.pendingBranch)&&se&&!se.persisted;Se&&se.beforeEnter(M),r(M,g,T),((N=W&&W.onVnodeMounted)||Se||he)&&Ft(()=>{N&&In(N,S,m),Se&&se.enter(M),he&&si(m,null,S,"mounted")},A)},ee=(m,g,T,S,A)=>{if(T&&f(m,T),S)for(let O=0;O<S.length;O++)f(m,S[O]);if(A){let O=A.subTree;if(g===O){const B=A.vnode;ee(m,B,B.scopeId,B.slotScopeIds,A.parent)}}},Q=(m,g,T,S,A,O,B,D,M=0)=>{for(let N=M;N<m.length;N++){const J=m[N]=D?Tr(m[N]):Tn(m[N]);y(null,J,g,T,S,A,O,B,D)}},oe=(m,g,T,S,A,O,B)=>{const D=g.el=m.el;let{patchFlag:M,dynamicChildren:N,dirs:J}=g;M|=m.patchFlag&16;const W=m.props||Ce,Z=g.props||Ce;let se;T&&oi(T,!1),(se=Z.onVnodeBeforeUpdate)&&In(se,T,g,m),J&&si(g,m,T,"beforeUpdate"),T&&oi(T,!0);const he=A&&g.type!=="foreignObject";if(N?ve(m.dynamicChildren,N,D,T,S,he,O):B||_e(m,g,D,null,T,S,he,O,!1),M>0){if(M&16)Qe(D,g,W,Z,T,S,A);else if(M&2&&W.class!==Z.class&&s(D,"class",null,Z.class,A),M&4&&s(D,"style",W.style,Z.style,A),M&8){const Se=g.dynamicProps;for(let Ie=0;Ie<Se.length;Ie++){const Ge=Se[Ie],un=W[Ge],ls=Z[Ge];(ls!==un||Ge==="value")&&s(D,Ge,un,ls,A,m.children,T,S,$)}}M&1&&m.children!==g.children&&l(D,g.children)}else!B&&N==null&&Qe(D,g,W,Z,T,S,A);((se=Z.onVnodeUpdated)||J)&&Ft(()=>{se&&In(se,T,g,m),J&&si(g,m,T,"updated")},S)},ve=(m,g,T,S,A,O,B)=>{for(let D=0;D<g.length;D++){const M=m[D],N=g[D],J=M.el&&(M.type===ln||!gi(M,N)||M.shapeFlag&70)?h(M.el):T;y(M,N,J,null,S,A,O,B,!0)}},Qe=(m,g,T,S,A,O,B)=>{if(T!==S){if(T!==Ce)for(const D in T)!iu(D)&&!(D in S)&&s(m,D,T[D],null,B,g.children,A,O,$);for(const D in S){if(iu(D))continue;const M=S[D],N=T[D];M!==N&&D!=="value"&&s(m,D,N,M,B,g.children,A,O,$)}"value"in S&&s(m,"value",T.value,S.value)}},K=(m,g,T,S,A,O,B,D,M)=>{const N=g.el=m?m.el:a(""),J=g.anchor=m?m.anchor:a("");let{patchFlag:W,dynamicChildren:Z,slotScopeIds:se}=g;se&&(D=D?D.concat(se):se),m==null?(r(N,T,S),r(J,T,S),Q(g.children,T,J,A,O,B,D,M)):W>0&&W&64&&Z&&m.dynamicChildren?(ve(m.dynamicChildren,Z,T,A,O,B,D),(g.key!=null||A&&g===A.subTree)&&yb(m,g,!0)):_e(m,g,T,J,A,O,B,D,M)},Ae=(m,g,T,S,A,O,B,D,M)=>{g.slotScopeIds=D,m==null?g.shapeFlag&512?A.ctx.activate(g,T,S,B,M):dt(g,T,S,A,O,B,M):pr(m,g,M)},dt=(m,g,T,S,A,O,B)=>{const D=m.component=ik(m,S,A);if(dl(m)&&(D.ctx.renderer=me),sk(D),D.asyncDep){if(A&&A.registerDep(D,Me),!m.el){const M=D.subTree=Bt(yn);v(null,M,g,T)}return}Me(D,m,g,T,A,O,B)},pr=(m,g,T)=>{const S=g.component=m.component;if(fS(m,g,T))if(S.asyncDep&&!S.asyncResolved){Te(S,g,T);return}else S.next=g,oS(S.update),S.update();else g.el=m.el,S.vnode=g},Me=(m,g,T,S,A,O,B)=>{const D=()=>{if(m.isMounted){let{next:J,bu:W,u:Z,parent:se,vnode:he}=m,Se=J,Ie;oi(m,!1),J?(J.el=he.el,Te(m,J,B)):J=he,W&&su(W),(Ie=J.props&&J.props.onVnodeBeforeUpdate)&&In(Ie,se,J,he),oi(m,!0);const Ge=wh(m),un=m.subTree;m.subTree=Ge,y(un,Ge,h(un.el),V(un),m,A,O),J.el=Ge.el,Se===null&&mS(m,Ge.el),Z&&Ft(Z,A),(Ie=J.props&&J.props.onVnodeUpdated)&&Ft(()=>In(Ie,se,J,he),A)}else{let J;const{el:W,props:Z}=g,{bm:se,m:he,parent:Se}=m,Ie=au(g);if(oi(m,!1),se&&su(se),!Ie&&(J=Z&&Z.onVnodeBeforeMount)&&In(J,Se,g),oi(m,!0),W&&le){const Ge=()=>{m.subTree=wh(m),le(W,m.subTree,m,A,null)};Ie?g.type.__asyncLoader().then(()=>!m.isUnmounted&&Ge()):Ge()}else{const Ge=m.subTree=wh(m);y(null,Ge,T,S,m,A,O),g.el=Ge.el}if(he&&Ft(he,A),!Ie&&(J=Z&&Z.onVnodeMounted)){const Ge=g;Ft(()=>In(J,Se,Ge),A)}(g.shapeFlag&256||Se&&au(Se.vnode)&&Se.vnode.shapeFlag&256)&&m.a&&Ft(m.a,A),m.isMounted=!0,g=T=S=null}},M=m.effect=new Cf(D,()=>Lf(N),m.scope),N=m.update=()=>M.run();N.id=m.uid,oi(m,!0),N()},Te=(m,g,T)=>{g.component=m;const S=m.vnode.props;m.vnode=g,m.next=null,$S(m,g.props,S,T),zS(m,g.children,T),io(),og(),so()},_e=(m,g,T,S,A,O,B,D,M=!1)=>{const N=m&&m.children,J=m?m.shapeFlag:0,W=g.children,{patchFlag:Z,shapeFlag:se}=g;if(Z>0){if(Z&128){ii(N,W,T,S,A,O,B,D,M);return}else if(Z&256){an(N,W,T,S,A,O,B,D,M);return}}se&8?(J&16&&$(N,A,O),W!==N&&l(T,W)):J&16?se&16?ii(N,W,T,S,A,O,B,D,M):$(N,A,O,!0):(J&8&&l(T,""),se&16&&Q(W,T,S,A,O,B,D,M))},an=(m,g,T,S,A,O,B,D,M)=>{m=m||Ss,g=g||Ss;const N=m.length,J=g.length,W=Math.min(N,J);let Z;for(Z=0;Z<W;Z++){const se=g[Z]=M?Tr(g[Z]):Tn(g[Z]);y(m[Z],se,T,null,A,O,B,D,M)}N>J?$(m,A,O,!0,!1,W):Q(g,T,S,A,O,B,D,M,W)},ii=(m,g,T,S,A,O,B,D,M)=>{let N=0;const J=g.length;let W=m.length-1,Z=J-1;for(;N<=W&&N<=Z;){const se=m[N],he=g[N]=M?Tr(g[N]):Tn(g[N]);if(gi(se,he))y(se,he,T,null,A,O,B,D,M);else break;N++}for(;N<=W&&N<=Z;){const se=m[W],he=g[Z]=M?Tr(g[Z]):Tn(g[Z]);if(gi(se,he))y(se,he,T,null,A,O,B,D,M);else break;W--,Z--}if(N>W){if(N<=Z){const se=Z+1,he=se<J?g[se].el:S;for(;N<=Z;)y(null,g[N]=M?Tr(g[N]):Tn(g[N]),T,he,A,O,B,D,M),N++}}else if(N>Z)for(;N<=W;)Lt(m[N],A,O,!0),N++;else{const se=N,he=N,Se=new Map;for(N=he;N<=Z;N++){const zt=g[N]=M?Tr(g[N]):Tn(g[N]);zt.key!=null&&Se.set(zt.key,N)}let Ie,Ge=0;const un=Z-he+1;let ls=!1,Yp=0;const To=new Array(un);for(N=0;N<un;N++)To[N]=0;for(N=se;N<=W;N++){const zt=m[N];if(Ge>=un){Lt(zt,A,O,!0);continue}let _n;if(zt.key!=null)_n=Se.get(zt.key);else for(Ie=he;Ie<=Z;Ie++)if(To[Ie-he]===0&&gi(zt,g[Ie])){_n=Ie;break}_n===void 0?Lt(zt,A,O,!0):(To[_n-he]=N+1,_n>=Yp?Yp=_n:ls=!0,y(zt,g[_n],T,null,A,O,B,D,M),Ge++)}const Qp=ls?YS(To):Ss;for(Ie=Qp.length-1,N=un-1;N>=0;N--){const zt=he+N,_n=g[zt],Xp=zt+1<J?g[zt+1].el:S;To[N]===0?y(null,_n,T,Xp,A,O,B,D,M):ls&&(Ie<0||N!==Qp[Ie]?cn(_n,T,Xp,2):Ie--)}}},cn=(m,g,T,S,A=null)=>{const{el:O,type:B,transition:D,children:M,shapeFlag:N}=m;if(N&6){cn(m.component.subTree,g,T,S);return}if(N&128){m.suspense.move(g,T,S);return}if(N&64){B.move(m,g,T,me);return}if(B===ln){r(O,g,T);for(let W=0;W<M.length;W++)cn(M[W],g,T,S);r(m.anchor,g,T);return}if(B===Go){E(m,g,T);return}if(S!==2&&N&1&&D)if(S===0)D.beforeEnter(O),r(O,g,T),Ft(()=>D.enter(O),A);else{const{leave:W,delayLeave:Z,afterLeave:se}=D,he=()=>r(O,g,T),Se=()=>{W(O,()=>{he(),se&&se()})};Z?Z(O,he,Se):Se()}else r(O,g,T)},Lt=(m,g,T,S=!1,A=!1)=>{const{type:O,props:B,ref:D,children:M,dynamicChildren:N,shapeFlag:J,patchFlag:W,dirs:Z}=m;if(D!=null&&md(D,null,T,m,!0),J&256){g.ctx.deactivate(m);return}const se=J&1&&Z,he=!au(m);let Se;if(he&&(Se=B&&B.onVnodeBeforeUnmount)&&In(Se,g,m),J&6)k(m.component,T,S);else{if(J&128){m.suspense.unmount(T,S);return}se&&si(m,null,g,"beforeUnmount"),J&64?m.type.remove(m,g,T,A,me,S):N&&(O!==ln||W>0&&W&64)?$(N,g,T,!1,!0):(O===ln&&W&384||!A&&J&16)&&$(M,g,T),S&&us(m)}(he&&(Se=B&&B.onVnodeUnmounted)||se)&&Ft(()=>{Se&&In(Se,g,m),se&&si(m,null,g,"unmounted")},T)},us=m=>{const{type:g,el:T,anchor:S,transition:A}=m;if(g===ln){xc(T,S);return}if(g===Go){R(m);return}const O=()=>{i(T),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(m.shapeFlag&1&&A&&!A.persisted){const{leave:B,delayLeave:D}=A,M=()=>B(T,O);D?D(m.el,O,M):M()}else O()},xc=(m,g)=>{let T;for(;m!==g;)T=d(m),i(m),m=T;i(g)},k=(m,g,T)=>{const{bum:S,scope:A,update:O,subTree:B,um:D}=m;S&&su(S),A.stop(),O&&(O.active=!1,Lt(B,m,g,T)),D&&Ft(D,g),Ft(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},$=(m,g,T,S=!1,A=!1,O=0)=>{for(let B=O;B<m.length;B++)Lt(m[B],g,T,S,A)},V=m=>m.shapeFlag&6?V(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),X=(m,g,T)=>{m==null?g._vnode&&Lt(g._vnode,null,null,!0):y(g._vnode||null,m,g,null,null,null,T),og(),eb(),g._vnode=m},me={p:y,um:Lt,m:cn,r:us,mt:dt,mc:Q,pc:_e,pbc:ve,n:V,o:t};let Fe,le;return e&&([Fe,le]=e(me)),{render:X,hydrate:Fe,createApp:KS(X,Fe)}}function oi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yb(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Tr(i[s]),a.el=o.el),n||yb(o,a)),a.type===ml&&(a.el=o.el)}}function YS(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const QS=t=>t.__isTeleport,ln=Symbol(void 0),ml=Symbol(void 0),yn=Symbol(void 0),Go=Symbol(void 0),Yo=[];let fn=null;function vb(t=!1){Yo.push(fn=t?null:[])}function XS(){Yo.pop(),fn=Yo[Yo.length-1]||null}let ya=1;function gg(t){ya+=t}function wb(t){return t.dynamicChildren=ya>0?fn||Ss:null,XS(),ya>0&&fn&&fn.push(t),t}function k$(t,e,n,r,i,s){return wb(Ib(t,e,n,r,i,s,!0))}function bb(t,e,n,r,i){return wb(Bt(t,e,n,r,i,!0))}function pd(t){return t?t.__v_isVNode===!0:!1}function gi(t,e){return t.type===e.type&&t.key===e.key}const pl="__vInternal",_b=({key:t})=>t!=null?t:null,cu=({ref:t,ref_key:e,ref_for:n})=>t!=null?Je(t)||It(t)||ue(t)?{i:Kt,r:t,k:e,f:!!n}:t:null;function Ib(t,e=null,n=null,r=0,i=null,s=t===ln?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_b(e),ref:e&&cu(e),scopeId:hl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Kt};return a?($f(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),ya>0&&!o&&fn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&fn.push(c),c}const Bt=JS;function JS(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===PS)&&(t=yn),pd(t)){const a=Lr(t,e,!0);return n&&$f(a,n),ya>0&&!s&&fn&&(a.shapeFlag&6?fn[fn.indexOf(t)]=a:fn.push(a)),a.patchFlag|=-2,a}if(lk(t)&&(t=t.__vccOpts),e){e=ZS(e);let{class:a,style:c}=e;a&&!Je(a)&&(e.class=If(a)),Pe(c)&&(zw(c)&&!re(c)&&(c=vt({},c)),e.style=_f(c))}const o=Je(t)?1:pS(t)?128:QS(t)?64:Pe(t)?4:ue(t)?2:0;return Ib(t,e,n,r,i,o,s,!0)}function ZS(t){return t?zw(t)||pl in t?vt({},t):t:null}function Lr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?tk(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_b(a),ref:e&&e.ref?n&&i?re(i)?i.concat(cu(e)):[i,cu(e)]:cu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ln?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lr(t.ssContent),ssFallback:t.ssFallback&&Lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ek(t=" ",e=0){return Bt(ml,null,t,e)}function A$(t,e){const n=Bt(Go,null,t);return n.staticCount=e,n}function C$(t="",e=!1){return e?(vb(),bb(yn,null,t)):Bt(yn,null,t)}function Tn(t){return t==null||typeof t=="boolean"?Bt(yn):re(t)?Bt(ln,null,t.slice()):typeof t=="object"?Tr(t):Bt(ml,null,String(t))}function Tr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lr(t)}function $f(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),$f(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(pl in e)?e._ctx=Kt:i===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Kt},n=32):(e=String(e),r&64?(n=16,e=[ek(e)]):n=8);t.children=e,t.shapeFlag|=n}function tk(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=If([e.class,r.class]));else if(i==="style")e.style=_f([e.style,r.style]);else if(il(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function In(t,e,n,r=null){nn(t,e,7,[n,r])}const nk=gb();let rk=0;function ik(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||nk,s={uid:rk++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new T1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:db(r,i),emitsOptions:nb(r,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=uS.bind(null,s),t.ce&&t.ce(s),s}let it=null;const Eb=()=>it||Kt,Vs=t=>{it=t,t.scope.on()},Pi=()=>{it&&it.scope.off(),it=null};function Tb(t){return t.vnode.shapeFlag&4}let va=!1;function sk(t,e=!1){va=e;const{props:n,children:r}=t.vnode,i=Tb(t);BS(t,n,i,e),jS(t,r);const s=i?ok(t,e):void 0;return va=!1,s}function ok(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hw(new Proxy(t.ctx,OS));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?ck(t):null;Vs(t),io();const s=Nr(r,t,0,[t.props,i]);if(so(),Pi(),Rw(s)){if(s.then(Pi,Pi),e)return s.then(o=>{yg(t,o,e)}).catch(o=>{ul(o,t,0)});t.asyncDep=s}else yg(t,s,e)}else Sb(t,e)}function yg(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Yw(e)),Sb(t,n)}let vg;function Sb(t,e,n){const r=t.type;if(!t.render){if(!e&&vg&&!r.render){const i=r.template||Vf(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=vt(vt({isCustomElement:s,delimiters:a},o),c);r.render=vg(i,u)}}t.render=r.render||gn}Vs(t),io(),LS(t),so(),Pi()}function ak(t){return new Proxy(t.attrs,{get(e,n){return Yt(t,"get","$attrs"),e[n]}})}function ck(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ak(t))},slots:t.slots,emit:t.emit,expose:e}}function gl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yw(Hw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wo)return Wo[n](t)},has(e,n){return n in e||n in Wo}}))}function uk(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function lk(t){return ue(t)&&"__vccOpts"in t}const Ue=(t,e)=>rS(t,e,va);function ec(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!re(e)?pd(e)?Bt(t,null,[e]):Bt(t,e):Bt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pd(n)&&(n=[n]),Bt(t,e,n))}const hk=Symbol(""),dk=()=>Mn(hk),fk="3.2.45",mk="http://www.w3.org/2000/svg",yi=typeof document<"u"?document:null,wg=yi&&yi.createElement("template"),pk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?yi.createElementNS(mk,t):yi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>yi.createTextNode(t),createComment:t=>yi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{wg.innerHTML=r?`<svg>${t}</svg>`:t;const a=wg.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function gk(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function yk(t,e,n){const r=t.style,i=Je(n);if(n&&!i){for(const s in n)gd(r,s,n[s]);if(e&&!Je(e))for(const s in e)n[s]==null&&gd(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const bg=/\s*!important$/;function gd(t,e,n){if(re(n))n.forEach(r=>gd(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vk(t,e);bg.test(n)?t.setProperty(ro(r),n.replace(bg,""),"important"):t[r]=n}}const _g=["Webkit","Moz","ms"],Ih={};function vk(t,e){const n=Ih[e];if(n)return n;let r=Bn(e);if(r!=="filter"&&r in t)return Ih[e]=r;r=al(r);for(let i=0;i<_g.length;i++){const s=_g[i]+r;if(s in t)return Ih[e]=s}return e}const Ig="http://www.w3.org/1999/xlink";function wk(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ig,e.slice(6,e.length)):t.setAttributeNS(Ig,e,n);else{const s=g1(e);n==null||s&&!Aw(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function bk(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Aw(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ys(t,e,n,r){t.addEventListener(e,n,r)}function _k(t,e,n,r){t.removeEventListener(e,n,r)}function Ik(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=Ek(e);if(r){const u=s[e]=kk(r,i);ys(t,a,u,c)}else o&&(_k(t,a,o,c),s[e]=void 0)}}const Eg=/(?:Once|Passive|Capture)$/;function Ek(t){let e;if(Eg.test(t)){e={};let r;for(;r=t.match(Eg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ro(t.slice(2)),e]}let Eh=0;const Tk=Promise.resolve(),Sk=()=>Eh||(Tk.then(()=>Eh=0),Eh=Date.now());function kk(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn(Ak(r,n.value),e,5,[r])};return n.value=t,n.attached=Sk(),n}function Ak(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Tg=/^on[a-z]/,Ck=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?gk(t,r,i):e==="style"?yk(t,n,r):il(e)?Ef(e)||Ik(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xk(t,e,r,i))?bk(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wk(t,e,r,i))};function xk(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Tg.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tg.test(e)&&Je(n)?!1:e in t}function x$(t){const e=Eb();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>vd(s,i))},r=()=>{const i=t(e.proxy);yd(e.subTree,i),n(i)};yS(r),Ff(()=>{const i=new MutationObserver(r);i.observe(e.subTree.el.parentNode,{childList:!0}),Uf(()=>i.disconnect())})}function yd(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{yd(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)vd(t.el,e);else if(t.type===ln)t.children.forEach(n=>yd(n,e));else if(t.type===Go){let{el:n,anchor:r}=t;for(;n&&(vd(n,e),n!==r);)n=n.nextSibling}}function vd(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const yr="transition",So="animation",kb=(t,{slots:e})=>ec(ib,Rk(t),e);kb.displayName="Transition";const Ab={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};kb.props=vt({},ib.props,Ab);const ai=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sg=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function Rk(t){const e={};for(const K in t)K in Ab||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=Nk(i),y=p&&p[0],b=p&&p[1],{onBeforeEnter:v,onEnter:_,onEnterCancelled:E,onLeave:R,onLeaveCancelled:F,onBeforeAppear:z=v,onAppear:ee=_,onAppearCancelled:Q=E}=e,oe=(K,Ae,dt)=>{ci(K,Ae?l:a),ci(K,Ae?u:o),dt&&dt()},ve=(K,Ae)=>{K._isLeaving=!1,ci(K,h),ci(K,f),ci(K,d),Ae&&Ae()},Qe=K=>(Ae,dt)=>{const pr=K?ee:_,Me=()=>oe(Ae,K,dt);ai(pr,[Ae,Me]),kg(()=>{ci(Ae,K?c:s),vr(Ae,K?l:a),Sg(pr)||Ag(Ae,r,y,Me)})};return vt(e,{onBeforeEnter(K){ai(v,[K]),vr(K,s),vr(K,o)},onBeforeAppear(K){ai(z,[K]),vr(K,c),vr(K,u)},onEnter:Qe(!1),onAppear:Qe(!0),onLeave(K,Ae){K._isLeaving=!0;const dt=()=>ve(K,Ae);vr(K,h),Ok(),vr(K,d),kg(()=>{!K._isLeaving||(ci(K,h),vr(K,f),Sg(R)||Ag(K,r,b,dt))}),ai(R,[K,dt])},onEnterCancelled(K){oe(K,!1),ai(E,[K])},onAppearCancelled(K){oe(K,!0),ai(Q,[K])},onLeaveCancelled(K){ve(K),ai(F,[K])}})}function Nk(t){if(t==null)return null;if(Pe(t))return[Th(t.enter),Th(t.leave)];{const e=Th(t);return[e,e]}}function Th(t){return fa(t)}function vr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ci(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function kg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Pk=0;function Ag(t,e,n,r){const i=t._endId=++Pk,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Dk(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function Dk(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${yr}Delay`),s=r(`${yr}Duration`),o=Cg(i,s),a=r(`${So}Delay`),c=r(`${So}Duration`),u=Cg(a,c);let l=null,h=0,d=0;e===yr?o>0&&(l=yr,h=o,d=s.length):e===So?u>0&&(l=So,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?yr:So:null,d=l?l===yr?s.length:c.length:0);const f=l===yr&&/\b(transform|all)(,|$)/.test(r(`${yr}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function Cg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>xg(n)+xg(t[r])))}function xg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ok(){return document.body.offsetHeight}const Rg=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>su(e,n):e};function Lk(t){t.target.composing=!0}function Ng(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const R$={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Rg(i);const s=r||i.props&&i.props.type==="number";ys(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=fa(a)),t._assign(a)}),n&&ys(t,"change",()=>{t.value=t.value.trim()}),e||(ys(t,"compositionstart",Lk),ys(t,"compositionend",Ng),ys(t,"change",Ng))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Rg(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&fa(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Mk=vt({patchProp:Ck},pk);let Pg;function Fk(){return Pg||(Pg=WS(Mk))}const Uk=(...t)=>{const e=Fk().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Vk(r);if(!i)return;const s=e._component;!ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Vk(t){return Je(t)?document.querySelector(t):t}const Bk=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},$k={};function qk(t,e){const n=NS("router-view");return vb(),bb(n)}const jk=Bk($k,[["render",qk]]),zk="modulepreload",Hk=function(t){return"/"+t},Dg={},ui=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Hk(s),s in Dg)return;Dg[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":zk,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const vs=typeof window<"u";function Kk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Sh(t,e){const n={};for(const r in e){const i=e[r];n[r]=wn(i)?i.map(t):t(i)}return n}const Qo=()=>{},wn=Array.isArray,Wk=/\/$/,Gk=t=>t.replace(Wk,"");function kh(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Jk(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Yk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Og(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Qk(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Bs(e.matched[r],n.matched[i])&&Cb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xk(t[n],e[n]))return!1;return!0}function Xk(t,e){return wn(t)?Lg(t,e):wn(e)?Lg(e,t):t===e}function Lg(t,e){return wn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Jk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var wa;(function(t){t.pop="pop",t.push="push"})(wa||(wa={}));var Xo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xo||(Xo={}));function Zk(t){if(!t)if(vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gk(t)}const eA=/^[^#]+#/;function tA(t,e){return t.replace(eA,"#")+e}function nA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const yl=()=>({left:window.pageXOffset,top:window.pageYOffset});function rA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=nA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mg(t,e){return(history.state?history.state.position-e:-1)+t}const wd=new Map;function iA(t,e){wd.set(t,e)}function sA(t){const e=wd.get(t);return wd.delete(t),e}let oA=()=>location.protocol+"//"+location.host;function xb(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Og(c,"")}return Og(n,t)+r+i}function aA(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=xb(t,location),p=n.value,y=e.value;let b=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}b=y?d.position-y.position:0}else r(f);i.forEach(v=>{v(n.value,p,{delta:b,type:wa.pop,direction:b?b>0?Xo.forward:Xo.back:Xo.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(be({},d.state,{scroll:yl()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Fg(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?yl():null}}function cA(t){const{history:e,location:n}=window,r={value:xb(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:oA()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=be({},e.state,Fg(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=be({},i.value,e.state,{forward:c,scroll:yl()});s(l.current,l,!0);const h=be({},Fg(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function uA(t){t=Zk(t);const e=cA(t),n=aA(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=be({location:"",base:t,go:r,createHref:tA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function lA(t){return typeof t=="string"||t&&typeof t=="object"}function Rb(t){return typeof t=="string"||typeof t=="symbol"}const wr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nb=Symbol("");var Ug;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ug||(Ug={}));function $s(t,e){return be(new Error,{type:t,[Nb]:!0},e)}function zn(t,e){return t instanceof Error&&Nb in t&&(e==null||!!(t.type&e))}const Vg="[^/]+?",hA={sensitive:!1,strict:!1,start:!0,end:!0},dA=/[.+*?^${}()[\]/\\]/g;function fA(t,e){const n=be({},hA,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(dA,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:y,optional:b,regexp:v}=d;s.push({name:p,repeatable:y,optional:b});const _=v||Vg;if(_!==Vg){f+=10;try{new RegExp(`(${_})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${p}" (${_}): `+R.message)}}let E=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(E=b&&u.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),i+=E,f+=20,b&&(f+=-8),y&&(f+=-20),_===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:p,repeatable:y,optional:b}=f,v=p in u?u[p]:"";if(wn(v)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const _=wn(v)?v.join("/"):v;if(!_)if(b)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);l+=_}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function mA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pA(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=mA(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Bg(r))return 1;if(Bg(i))return-1}return i.length-r.length}function Bg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gA={type:0,value:""},yA=/[a-zA-Z0-9_]/;function vA(t){if(!t)return[[]];if(t==="/")return[[gA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:yA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function wA(t,e,n){const r=fA(vA(t.path),n),i=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function bA(t,e){const n=[],r=new Map;e=jg({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,p=_A(l);p.aliasOf=d&&d.record;const y=jg(e,l),b=[p];if("alias"in l){const E=typeof l.alias=="string"?[l.alias]:l.alias;for(const R of E)b.push(be({},p,{components:d?d.record.components:p.components,path:R,aliasOf:d?d.record:p}))}let v,_;for(const E of b){const{path:R}=E;if(h&&R[0]!=="/"){const F=h.record.path,z=F[F.length-1]==="/"?"":"/";E.path=h.record.path+(R&&z+R)}if(v=wA(E,h,y),d?d.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),f&&l.name&&!qg(v)&&o(l.name)),p.children){const F=p.children;for(let z=0;z<F.length;z++)s(F[z],v,d&&d.children[z])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return _?()=>{o(_)}:Qo}function o(l){if(Rb(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&pA(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Pb(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!qg(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},p,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw $s(1,{location:l});y=d.record.name,f=be($g(h.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),l.params&&$g(l.params,d.keys.map(_=>_.name))),p=d.stringify(f)}else if("path"in l)p=l.path,d=n.find(_=>_.re.test(p)),d&&(f=d.parse(p),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw $s(1,{location:l,currentLocation:h});y=d.record.name,f=be({},h.params,l.params),p=d.stringify(f)}const b=[];let v=d;for(;v;)b.unshift(v.record),v=v.parent;return{name:y,path:p,params:f,matched:b,meta:EA(b)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function $g(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _A(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:IA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function IA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function qg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function EA(t){return t.reduce((e,n)=>be(e,n.meta),{})}function jg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Pb(t,e){return e.children.some(n=>n===t||Pb(t,n))}const Db=/#/g,TA=/&/g,SA=/\//g,kA=/=/g,AA=/\?/g,Ob=/\+/g,CA=/%5B/g,xA=/%5D/g,Lb=/%5E/g,RA=/%60/g,Mb=/%7B/g,NA=/%7C/g,Fb=/%7D/g,PA=/%20/g;function qf(t){return encodeURI(""+t).replace(NA,"|").replace(CA,"[").replace(xA,"]")}function DA(t){return qf(t).replace(Mb,"{").replace(Fb,"}").replace(Lb,"^")}function bd(t){return qf(t).replace(Ob,"%2B").replace(PA,"+").replace(Db,"%23").replace(TA,"%26").replace(RA,"`").replace(Mb,"{").replace(Fb,"}").replace(Lb,"^")}function OA(t){return bd(t).replace(kA,"%3D")}function LA(t){return qf(t).replace(Db,"%23").replace(AA,"%3F")}function MA(t){return t==null?"":LA(t).replace(SA,"%2F")}function Tu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function FA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Ob," "),o=s.indexOf("="),a=Tu(o<0?s:s.slice(0,o)),c=o<0?null:Tu(s.slice(o+1));if(a in e){let u=e[a];wn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function zg(t){let e="";for(let n in t){const r=t[n];if(n=OA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(r)?r.map(s=>s&&bd(s)):[r&&bd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function UA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=wn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const VA=Symbol(""),Hg=Symbol(""),vl=Symbol(""),Ub=Symbol(""),_d=Symbol("");function ko(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Sr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($s(4,{from:n,to:e})):h instanceof Error?a(h):lA(h)?a($s(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ah(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(BA(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Sr(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=Kk(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Sr(d,n,r,s,o)()}))}}return i}function BA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kg(t){const e=Mn(vl),n=Mn(Ub),r=Ue(()=>e.resolve(Cs(t.to))),i=Ue(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Bs.bind(null,l));if(d>-1)return d;const f=Wg(c[u-2]);return u>1&&Wg(l)===f&&h[h.length-1].path!==f?h.findIndex(Bs.bind(null,c[u-2])):d}),s=Ue(()=>i.value>-1&&zA(n.params,r.value.params)),o=Ue(()=>i.value>-1&&i.value===n.matched.length-1&&Cb(n.params,r.value.params));function a(c={}){return jA(c)?e[Cs(t.replace)?"replace":"push"](Cs(t.to)).catch(Qo):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const $A=Za({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kg,setup(t,{slots:e}){const n=Ja(Kg(t)),{options:r}=Mn(vl),i=Ue(()=>({[Gg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ec("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),qA=$A;function jA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zA(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!wn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Wg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gg=(t,e,n)=>t!=null?t:e!=null?e:n,HA=Za({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Mn(_d),i=Ue(()=>t.route||r.value),s=Mn(Hg,0),o=Ue(()=>{let u=Cs(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Ue(()=>i.value.matched[o.value]);ou(Hg,Ue(()=>o.value+1)),ou(VA,a),ou(_d,i);const c=J1();return Ko(()=>[c.value,a.value,t.name],([u,l,h],[d,f,p])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Bs(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Yg(n.default,{Component:d,route:u});const f=h.props[l],p=f?f===!0?u.params:typeof f=="function"?f(u):f:null,b=ec(d,be({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Yg(n.default,{Component:b,route:u})||b}}});function Yg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KA=HA;function WA(t){const e=bA(t.routes,t),n=t.parseQuery||FA,r=t.stringifyQuery||zg,i=t.history,s=ko(),o=ko(),a=ko(),c=Z1(wr);let u=wr;vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Sh.bind(null,k=>""+k),h=Sh.bind(null,MA),d=Sh.bind(null,Tu);function f(k,$){let V,X;return Rb(k)?(V=e.getRecordMatcher(k),X=$):X=k,e.addRoute(X,V)}function p(k){const $=e.getRecordMatcher(k);$&&e.removeRoute($)}function y(){return e.getRoutes().map(k=>k.record)}function b(k){return!!e.getRecordMatcher(k)}function v(k,$){if($=be({},$||c.value),typeof k=="string"){const m=kh(n,k,$.path),g=e.resolve({path:m.path},$),T=i.createHref(m.fullPath);return be(m,g,{params:d(g.params),hash:Tu(m.hash),redirectedFrom:void 0,href:T})}let V;if("path"in k)V=be({},k,{path:kh(n,k.path,$.path).path});else{const m=be({},k.params);for(const g in m)m[g]==null&&delete m[g];V=be({},k,{params:h(k.params)}),$.params=h($.params)}const X=e.resolve(V,$),me=k.hash||"";X.params=l(d(X.params));const Fe=Yk(r,be({},k,{hash:DA(me),path:X.path})),le=i.createHref(Fe);return be({fullPath:Fe,hash:me,query:r===zg?UA(k.query):k.query||{}},X,{redirectedFrom:void 0,href:le})}function _(k){return typeof k=="string"?kh(n,k,c.value.path):be({},k)}function E(k,$){if(u!==k)return $s(8,{from:$,to:k})}function R(k){return ee(k)}function F(k){return R(be(_(k),{replace:!0}))}function z(k){const $=k.matched[k.matched.length-1];if($&&$.redirect){const{redirect:V}=$;let X=typeof V=="function"?V(k):V;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=_(X):{path:X},X.params={}),be({query:k.query,hash:k.hash,params:"path"in X?{}:k.params},X)}}function ee(k,$){const V=u=v(k),X=c.value,me=k.state,Fe=k.force,le=k.replace===!0,m=z(V);if(m)return ee(be(_(m),{state:typeof m=="object"?be({},me,m.state):me,force:Fe,replace:le}),$||V);const g=V;g.redirectedFrom=$;let T;return!Fe&&Qk(r,X,V)&&(T=$s(16,{to:g,from:X}),ii(X,X,!0,!1)),(T?Promise.resolve(T):oe(g,X)).catch(S=>zn(S)?zn(S,2)?S:an(S):Te(S,g,X)).then(S=>{if(S){if(zn(S,2))return ee(be({replace:le},_(S.to),{state:typeof S.to=="object"?be({},me,S.to.state):me,force:Fe}),$||g)}else S=Qe(g,X,!0,le,me);return ve(g,X,S),S})}function Q(k,$){const V=E(k,$);return V?Promise.reject(V):Promise.resolve()}function oe(k,$){let V;const[X,me,Fe]=GA(k,$);V=Ah(X.reverse(),"beforeRouteLeave",k,$);for(const m of X)m.leaveGuards.forEach(g=>{V.push(Sr(g,k,$))});const le=Q.bind(null,k,$);return V.push(le),hs(V).then(()=>{V=[];for(const m of s.list())V.push(Sr(m,k,$));return V.push(le),hs(V)}).then(()=>{V=Ah(me,"beforeRouteUpdate",k,$);for(const m of me)m.updateGuards.forEach(g=>{V.push(Sr(g,k,$))});return V.push(le),hs(V)}).then(()=>{V=[];for(const m of k.matched)if(m.beforeEnter&&!$.matched.includes(m))if(wn(m.beforeEnter))for(const g of m.beforeEnter)V.push(Sr(g,k,$));else V.push(Sr(m.beforeEnter,k,$));return V.push(le),hs(V)}).then(()=>(k.matched.forEach(m=>m.enterCallbacks={}),V=Ah(Fe,"beforeRouteEnter",k,$),V.push(le),hs(V))).then(()=>{V=[];for(const m of o.list())V.push(Sr(m,k,$));return V.push(le),hs(V)}).catch(m=>zn(m,8)?m:Promise.reject(m))}function ve(k,$,V){for(const X of a.list())X(k,$,V)}function Qe(k,$,V,X,me){const Fe=E(k,$);if(Fe)return Fe;const le=$===wr,m=vs?history.state:{};V&&(X||le?i.replace(k.fullPath,be({scroll:le&&m&&m.scroll},me)):i.push(k.fullPath,me)),c.value=k,ii(k,$,V,le),an()}let K;function Ae(){K||(K=i.listen((k,$,V)=>{if(!xc.listening)return;const X=v(k),me=z(X);if(me){ee(be(me,{replace:!0}),X).catch(Qo);return}u=X;const Fe=c.value;vs&&iA(Mg(Fe.fullPath,V.delta),yl()),oe(X,Fe).catch(le=>zn(le,12)?le:zn(le,2)?(ee(le.to,X).then(m=>{zn(m,20)&&!V.delta&&V.type===wa.pop&&i.go(-1,!1)}).catch(Qo),Promise.reject()):(V.delta&&i.go(-V.delta,!1),Te(le,X,Fe))).then(le=>{le=le||Qe(X,Fe,!1),le&&(V.delta&&!zn(le,8)?i.go(-V.delta,!1):V.type===wa.pop&&zn(le,20)&&i.go(-1,!1)),ve(X,Fe,le)}).catch(Qo)}))}let dt=ko(),pr=ko(),Me;function Te(k,$,V){an(k);const X=pr.list();return X.length?X.forEach(me=>me(k,$,V)):console.error(k),Promise.reject(k)}function _e(){return Me&&c.value!==wr?Promise.resolve():new Promise((k,$)=>{dt.add([k,$])})}function an(k){return Me||(Me=!k,Ae(),dt.list().forEach(([$,V])=>k?V(k):$()),dt.reset()),k}function ii(k,$,V,X){const{scrollBehavior:me}=t;if(!vs||!me)return Promise.resolve();const Fe=!V&&sA(Mg(k.fullPath,0))||(X||!V)&&history.state&&history.state.scroll||null;return Jw().then(()=>me(k,$,Fe)).then(le=>le&&rA(le)).catch(le=>Te(le,k,$))}const cn=k=>i.go(k);let Lt;const us=new Set,xc={currentRoute:c,listening:!0,addRoute:f,removeRoute:p,hasRoute:b,getRoutes:y,resolve:v,options:t,push:R,replace:F,go:cn,back:()=>cn(-1),forward:()=>cn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:pr.add,isReady:_e,install(k){const $=this;k.component("RouterLink",qA),k.component("RouterView",KA),k.config.globalProperties.$router=$,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Cs(c)}),vs&&!Lt&&c.value===wr&&(Lt=!0,R(i.location).catch(me=>{}));const V={};for(const me in wr)V[me]=Ue(()=>c.value[me]);k.provide(vl,$),k.provide(Ub,Ja(V)),k.provide(_d,c);const X=k.unmount;us.add(k),k.unmount=function(){us.delete(k),us.size<1&&(u=wr,K&&K(),K=null,c.value=wr,Lt=!1,Me=!1),X()}}};return xc}function hs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function GA(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Bs(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Bs(u,c))||i.push(c))}return[n,r,i]}function N$(){return Mn(vl)}/**
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
 */const Vb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},QA=function(t){const e=Vb(t);return Bb.encodeByteArray(e,!0)},Su=function(t){return QA(t).replace(/\./g,"")},$b=function(t){try{return Bb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ku(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XA(n)||(t[n]=ku(t[n],e[n]));return t}function XA(t){return t!=="__proto__"}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function wl(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZA(){return typeof self=="object"&&self.self===self}function qb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jb(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eC(){return!wl()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ba(){return typeof indexedDB=="object"}function tC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function nC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rC=()=>nC().__FIREBASE_DEFAULTS__,iC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$b(t[1]);return e&&JSON.parse(e)},zb=()=>{try{return rC()||iC()||sC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oC=()=>{var t;return(t=zb())===null||t===void 0?void 0:t.config},aC=t=>{var e;return(e=zb())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Hb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Su(JSON.stringify(n)),Su(JSON.stringify(o)),a].join(".")}/**
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
 */const uC="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uC,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,a,r)}}function lC(t,e){return t.replace(hC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hC=/\{\$([^}]+)}/g;/**
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
 */function Qg(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function dC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Id(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xg(s)&&Xg(o)){if(!Id(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xg(t){return t!==null&&typeof t=="object"}/**
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
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kb(t,e){const n=new fC(t,e);return n.subscribe.bind(n)}class fC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ch),i.error===void 0&&(i.error=Ch),i.complete===void 0&&(i.complete=Ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ch(){}/**
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
 */const fi="[DEFAULT]";/**
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
 */class pC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yC(e))try{this.getOrInitializeService({instanceIdentifier:fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fi){return this.instances.has(e)}getOptions(e=fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fi){return this.component?this.component.multipleInstances?e:fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gC(t){return t===fi?void 0:t}function yC(t){return t.instantiationMode==="EAGER"}/**
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
 */class vC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const zf=[];var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Wb={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},wC=ge.INFO,bC={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},_C=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=wC,this._logHandler=_C,this._userLogHandler=null,zf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}function IC(t){zf.forEach(e=>{e.setLogLevel(t)})}function EC(t,e){for(const n of zf){let r=null;e&&e.level&&(r=Wb[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ge[s].toLowerCase(),message:a,args:o,type:i.name})}}}const TC=(t,e)=>e.some(n=>t instanceof n);let Jg,Zg;function SC(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kC(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gb=new WeakMap,Ed=new WeakMap,Yb=new WeakMap,xh=new WeakMap,Hf=new WeakMap;function AC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gb.set(n,t)}).catch(()=>{}),Hf.set(e,t),e}function CC(t){if(Ed.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ed.set(t,e)}let Td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xC(t){Td=t(Td)}function RC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rh(this),e,...n);return Yb.set(r,e.sort?e.sort():[e]),Pr(r)}:kC().includes(t)?function(...e){return t.apply(Rh(this),e),Pr(Gb.get(this))}:function(...e){return Pr(t.apply(Rh(this),e))}}function NC(t){return typeof t=="function"?RC(t):(t instanceof IDBTransaction&&CC(t),TC(t,SC())?new Proxy(t,Td):t)}function Pr(t){if(t instanceof IDBRequest)return AC(t);if(xh.has(t))return xh.get(t);const e=NC(t);return e!==t&&(xh.set(t,e),Hf.set(e,t)),e}const Rh=t=>Hf.get(t);function PC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pr(o.result),c.oldVersion,c.newVersion,Pr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const DC=["get","getKey","getAll","getAllKeys","count"],OC=["put","add","delete","clear"],Nh=new Map;function ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nh.get(e))return Nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DC.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Nh.set(e,s),s}xC(t=>({...t,get:(e,n,r)=>ey(e,n)||t.get(e,n,r),has:(e,n)=>!!ey(e,n)||t.has(e,n)}));/**
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
 */class LC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sd="@firebase/app",ty="0.8.4";/**
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
 */const Ui=new bl("@firebase/app"),FC="@firebase/app-compat",UC="@firebase/analytics-compat",VC="@firebase/analytics",BC="@firebase/app-check-compat",$C="@firebase/app-check",qC="@firebase/auth",jC="@firebase/auth-compat",zC="@firebase/database",HC="@firebase/database-compat",KC="@firebase/functions",WC="@firebase/functions-compat",GC="@firebase/installations",YC="@firebase/installations-compat",QC="@firebase/messaging",XC="@firebase/messaging-compat",JC="@firebase/performance",ZC="@firebase/performance-compat",ex="@firebase/remote-config",tx="@firebase/remote-config-compat",nx="@firebase/storage",rx="@firebase/storage-compat",ix="@firebase/firestore",sx="@firebase/firestore-compat",ox="firebase",ax="9.14.0";/**
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
 */const Mr="[DEFAULT]",cx={[Sd]:"fire-core",[FC]:"fire-core-compat",[VC]:"fire-analytics",[UC]:"fire-analytics-compat",[$C]:"fire-app-check",[BC]:"fire-app-check-compat",[qC]:"fire-auth",[jC]:"fire-auth-compat",[zC]:"fire-rtdb",[HC]:"fire-rtdb-compat",[KC]:"fire-fn",[WC]:"fire-fn-compat",[GC]:"fire-iid",[YC]:"fire-iid-compat",[QC]:"fire-fcm",[XC]:"fire-fcm-compat",[JC]:"fire-perf",[ZC]:"fire-perf-compat",[ex]:"fire-rc",[tx]:"fire-rc-compat",[nx]:"fire-gcs",[rx]:"fire-gcs-compat",[ix]:"fire-fst",[sx]:"fire-fst-compat","fire-js":"fire-js",[ox]:"fire-js-all"};/**
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
 */const Fr=new Map,_a=new Map;function Au(t,e){try{t.container.addComponent(e)}catch(n){Ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qb(t,e){t.container.addOrOverwriteComponent(e)}function er(t){const e=t.name;if(_a.has(e))return Ui.debug(`There were multiple attempts to register component ${e}.`),!1;_a.set(e,t);for(const n of Fr.values())Au(n,t);return!0}function Xb(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ux(t,e,n=Mr){Xb(t,e).clearInstance(n)}function lx(){_a.clear()}/**
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
 */const hx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new es("app","Firebase",hx);/**
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
 */class dx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Yr=ax;function Kf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=oC()),!n)throw Qn.create("no-options");const s=Fr.get(i);if(s){if(Id(n,s.options)&&Id(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new vC(i);for(const c of _a.values())o.addComponent(c);const a=new dx(n,r,o);return Fr.set(i,a),a}function fx(t=Mr){const e=Fr.get(t);if(!e&&t===Mr)return Kf();if(!e)throw Qn.create("no-app",{appName:t});return e}function mx(){return Array.from(Fr.values())}async function Jb(t){const e=t.name;Fr.has(e)&&(Fr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function rn(t,e,n){var r;let i=(r=cx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ui.warn(a.join(" "));return}er(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Zb(t,e){if(t!==null&&typeof t!="function")throw Qn.create("invalid-log-argument");EC(t,e)}function e_(t){IC(t)}/**
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
 */const px="firebase-heartbeat-database",gx=1,Ia="firebase-heartbeat-store";let Ph=null;function t_(){return Ph||(Ph=PC(px,gx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ia)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Ph}async function yx(t){var e;try{return(await t_()).transaction(Ia).objectStore(Ia).get(n_(t))}catch(n){if(n instanceof Tt)Ui.warn(n.message);else{const r=Qn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ui.warn(r.message)}}}async function ny(t,e){var n;try{const i=(await t_()).transaction(Ia,"readwrite");return await i.objectStore(Ia).put(e,n_(t)),i.done}catch(r){if(r instanceof Tt)Ui.warn(r.message);else{const i=Qn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ui.warn(i.message)}}}function n_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vx=1024,wx=30*24*60*60*1e3;class bx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ix(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ry();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ry(),{heartbeatsToSend:n,unsentEntries:r}=_x(this._heartbeatsCache.heartbeats),i=Su(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ry(){return new Date().toISOString().substring(0,10)}function _x(t,e=vx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ix{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ba()?tC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iy(t){return Su(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ex(t){er(new sn("platform-logger",e=>new LC(e),"PRIVATE")),er(new sn("heartbeat",e=>new bx(e),"PRIVATE")),rn(Sd,ty,t),rn(Sd,ty,"esm2017"),rn("fire-js","")}Ex("");const Tx=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Yr,_DEFAULT_ENTRY_NAME:Mr,_addComponent:Au,_addOrOverwriteComponent:Qb,_apps:Fr,_clearComponents:lx,_components:_a,_getProvider:Xb,_registerComponent:er,_removeServiceInstance:ux,deleteApp:Jb,getApp:fx,getApps:mx,initializeApp:Kf,onLog:Zb,registerVersion:rn,setLogLevel:e_,FirebaseError:Tt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Sx{constructor(e,n){this._delegate=e,this.firebase=n,Au(e,new sn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Jb(this._delegate)))}_getService(e,n=Mr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Mr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Au(this._delegate,e)}_addOrOverwriteComponent(e){Qb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const kx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},sy=new es("app-compat","Firebase",kx);/**
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
 */function Ax(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:rn,setLogLevel:e_,onLog:Zb,apps:null,SDK_VERSION:Yr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Tx}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Mr,!Qg(e,u))throw sy.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=Kf(u,l);if(Qg(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(er(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw sy.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&ku(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
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
 */function r_(){const t=Ax(Sx);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:r_,extendNamespace:e,createSubscribe:Kb,ErrorFactory:es,deepExtend:ku});function e(n){ku(t,n)}return t}const Cx=r_();/**
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
 */const oy=new bl("@firebase/app-compat"),xx="@firebase/app-compat",Rx="0.1.39";/**
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
 */function Nx(t){rn(xx,Rx,t)}/**
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
 */if(ZA()&&self.firebase!==void 0){oy.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&oy.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ts=Cx;Nx();var Px="firebase",Dx="9.14.0";/**
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
 */ts.registerVersion(Px,Dx,"app-compat");function Wf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ao={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ds={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Ox(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function i_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lx=Ox,Mx=i_,s_=new es("auth","Firebase",i_());/**
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
 */const ay=new bl("@firebase/auth");function uu(t,...e){ay.logLevel<=ge.ERROR&&ay.error(`Auth (${Yr}): ${t}`,...e)}/**
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
 */function wt(t,...e){throw Gf(t,...e)}function gt(t,...e){return Gf(t,...e)}function o_(t,e,n){const r=Object.assign(Object.assign({},Mx()),{[e]:n});return new es("auth","Firebase",r).create(e,{appName:t.name})}function ao(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(t,"argument-error"),o_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return s_.create(t,...e)}function P(t,e,...n){if(!t)throw Gf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uu(e),new Error(e)}function bn(t,e){t||Pn(e)}/**
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
 */const cy=new Map;function Wt(t){bn(t instanceof Function,"Expected a class definition");let e=cy.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cy.set(t,e),e)}function Fx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yf(){return uy()==="http:"||uy()==="https:"}function uy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ux(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yf()||qb()||"connection"in navigator)?navigator.onLine:!0}function Vx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class tc{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=JA()||jf()}get(){return Ux()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qf(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class a_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const $x=new tc(3e4,6e4);function tt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,n,r,i={}){return c_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),a_.fetch()(u_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function c_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bx),e);try{const i=new qx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bo(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw o_(t,l,u);wt(t,l)}}catch(i){if(i instanceof Tt)throw i;wt(t,"network-request-failed")}}async function cr(t,e,n,r,i={}){const s=await ut(t,e,n,r,i);return"mfaPendingCredential"in s&&wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function u_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Qf(t.config,i):`${t.config.apiScheme}://${i}`}class qx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),$x.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function jx(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function zx(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function Hx(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kx(t,e=!1){const n=H(t),r=await n.getIdToken(e),i=_l(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jo(Dh(i.auth_time)),issuedAtTime:Jo(Dh(i.iat)),expirationTime:Jo(Dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dh(t){return Number(t)*1e3}function _l(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return uu("JWT malformed, contained fewer than 3 sections"),null;try{const s=$b(r);return s?JSON.parse(s):(uu("Failed to decode base64 JWT payload"),null)}catch(s){return uu("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Wx(t){const e=_l(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&Gx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Yx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class l_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ta(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tr(t,Hx(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Jx(s.providerUserInfo):[],a=Xx(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new l_(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Qx(t){const e=H(t);await Ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Jx(t){return t.map(e=>{var{providerId:n}=e,r=Wf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Zx(t,e){const n=await c_(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=u_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",a_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Zx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Sa;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sa,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function br(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Di{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new l_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kx(this,e)}reload(){return Qx(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Di(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tr(this,jx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:E,emailVerified:R,isAnonymous:F,providerData:z,stsTokenManager:ee}=n;P(E&&ee,e,"internal-error");const Q=Sa.fromJSON(this.name,ee);P(typeof E=="string",e,"internal-error"),br(h,e.name),br(d,e.name),P(typeof R=="boolean",e,"internal-error"),P(typeof F=="boolean",e,"internal-error"),br(f,e.name),br(p,e.name),br(y,e.name),br(b,e.name),br(v,e.name),br(_,e.name);const oe=new Di({uid:E,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:F,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:Q,createdAt:v,lastLoginAt:_});return z&&Array.isArray(z)&&(oe.providerData=z.map(ve=>Object.assign({},ve))),b&&(oe._redirectEventId=b),oe}static async _fromIdTokenResponse(e,n,r=!1){const i=new Sa;i.updateFromServerResponse(n);const s=new Di({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ta(s),s}}/**
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
 */class h_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}h_.type="NONE";const qs=h_;/**
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
 */function Oi(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Di._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Wt(qs),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wt(qs);const o=Oi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Di._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Rs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Rs(s,e,r))}}/**
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
 */function ly(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(d_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p_(e))return"Blackberry";if(g_(e))return"Webos";if(Xf(e))return"Safari";if((e.includes("chrome/")||f_(e))&&!e.includes("edge/"))return"Chrome";if(nc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function d_(t=Ve()){return/firefox\//i.test(t)}function Xf(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function f_(t=Ve()){return/crios\//i.test(t)}function m_(t=Ve()){return/iemobile/i.test(t)}function nc(t=Ve()){return/android/i.test(t)}function p_(t=Ve()){return/blackberry/i.test(t)}function g_(t=Ve()){return/webos/i.test(t)}function co(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eR(t=Ve()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function tR(t=Ve()){var e;return co(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nR(){return jb()&&document.documentMode===10}function y_(t=Ve()){return co(t)||nc(t)||g_(t)||p_(t)||/windows phone/i.test(t)||m_(t)}function rR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function v_(t,e=[]){let n;switch(t){case"Browser":n=ly(Ve());break;case"Worker":n=`${ly(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
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
 */class iR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class sR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hy(this),this.idTokenSubscription=new hy(this),this.beforeStateQueue=new iR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ta(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?H(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new es("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function at(t){return H(t)}class hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kb(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function oR(t,e,n){const r=at(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=w_(e),{host:o,port:a}=aR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cR()}function w_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aR(t){const e=w_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dy(o)}}}function dy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
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
 */async function b_(t,e){return ut(t,"POST","/v1/accounts:resetPassword",tt(t,e))}async function __(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function uR(t,e){return ut(t,"POST","/v1/accounts:update",tt(t,e))}/**
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
 */async function lR(t,e){return cr(t,"POST","/v1/accounts:signInWithPassword",tt(t,e))}async function Il(t,e){return ut(t,"POST","/v1/accounts:sendOobCode",tt(t,e))}async function hR(t,e){return Il(t,e)}async function dR(t,e){return Il(t,e)}async function fR(t,e){return Il(t,e)}async function mR(t,e){return Il(t,e)}/**
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
 */async function pR(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",tt(t,e))}async function gR(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",tt(t,e))}/**
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
 */class ka extends uo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return lR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pR(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return __(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gR(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const yR="http://localhost";class $n extends uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}buildRequest(){const e={requestUri:yR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
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
 */async function vR(t,e){return ut(t,"POST","/v1/accounts:sendVerificationCode",tt(t,e))}async function wR(t,e){return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",tt(t,e))}async function bR(t,e){const n=await cr(t,"POST","/v1/accounts:signInWithPhoneNumber",tt(t,e));if(n.temporaryProof)throw Bo(t,"account-exists-with-different-credential",n);return n}const _R={USER_NOT_FOUND:"user-not-found"};async function IR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",tt(t,n),_R)}/**
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
 */class Li extends uo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Li({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Li({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return wR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return bR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return IR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Li({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function ER(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TR(t){const e=bs(Vo(t)).link,n=e?bs(Vo(e)).deep_link_id:null,r=bs(Vo(t)).deep_link_id;return(r?bs(Vo(r)).link:null)||r||n||e||t}class El{constructor(e){var n,r,i,s,o,a;const c=bs(Vo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ER((i=c.mode)!==null&&i!==void 0?i:null);P(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TR(e);try{return new El(n)}catch{return null}}}/**
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
 */class Qr{constructor(){this.providerId=Qr.PROVIDER_ID}static credential(e,n){return ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=El.parseLink(n);return P(r,"argument-error"),ka._fromEmailAndCode(e,r.code,r.tenantId)}}Qr.PROVIDER_ID="password";Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lo extends ur{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ns extends lo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),$n._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),$n._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ns.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ns.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ns(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class kn extends lo{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class An extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class Cn extends lo{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
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
 */const SR="http://localhost";class js extends uo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new js(r,s)}static _create(e,n){return new js(e,n)}buildRequest(){return{requestUri:SR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const kR="saml.";class Cu extends ur{constructor(e){P(e.startsWith(kR),"argument-error"),super(e)}static credentialFromResult(e){return Cu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Cu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=js.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return js._create(r,n)}catch{return null}}}/**
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
 */class xn extends lo{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
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
 */async function I_(t,e){return cr(t,"POST","/v1/accounts:signUp",tt(t,e))}/**
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
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Di._fromIdTokenResponse(e,r,i),o=fy(r);return new on({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fy(r);return new on({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function AR(t){var e;const n=at(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new on({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await I_(n,{returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class xu extends Tt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xu(e,n,r,i)}}function E_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xu._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function T_(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function CR(t,e){const n=H(t);await Tl(!0,n,e);const{providerUserInfo:r}=await zx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=T_(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Jf(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}async function Tl(t,e,n){await Ta(e);const r=T_(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
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
 */async function S_(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await tr(t,E_(i,s,e,t),n);P(o.idToken,i,"internal-error");const a=_l(o.idToken);P(a,i,"internal-error");const{sub:c}=a;return P(t.uid===c,i,"user-mismatch"),on._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&wt(i,"user-mismatch"),o}}/**
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
 */async function k_(t,e,n=!1){const r="signIn",i=await E_(t,r,e),s=await on._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Sl(t,e){return k_(at(t),e)}async function A_(t,e){const n=H(t);return await Tl(!1,n,e.providerId),Jf(n,e)}async function C_(t,e){return S_(H(t),e)}/**
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
 */async function xR(t,e){return cr(t,"POST","/v1/accounts:signInWithCustomToken",tt(t,e))}/**
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
 */async function RR(t,e){const n=at(t),r=await xR(n,{token:e,returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class kl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Zf._fromServerResponse(e,n):wt(e,"internal-error")}}class Zf extends kl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Zf(n)}}/**
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
 */async function NR(t,e,n){const r=H(t),i={requestType:"PASSWORD_RESET",email:e};n&&Al(r,i,n),await dR(r,i)}async function PR(t,e,n){await b_(H(t),{oobCode:e,newPassword:n})}async function DR(t,e){await uR(H(t),{oobCode:e})}async function x_(t,e){const n=H(t),r=await b_(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=kl._fromServerResponse(at(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function OR(t,e){const{data:n}=await x_(H(t),e);return n.email}async function LR(t,e,n){const r=at(t),i=await I_(r,{returnSecureToken:!0,email:e,password:n}),s=await on._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function MR(t,e,n){return Sl(H(t),Qr.credential(e,n))}/**
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
 */async function FR(t,e,n){const r=H(t),i={requestType:"EMAIL_SIGNIN",email:e};P(n.handleCodeInApp,r,"argument-error"),n&&Al(r,i,n),await fR(r,i)}function UR(t,e){const n=El.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function VR(t,e,n){const r=H(t),i=Qr.credentialWithLink(e,n||Ea());return P(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Sl(r,i)}/**
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
 */async function BR(t,e){return ut(t,"POST","/v1/accounts:createAuthUri",tt(t,e))}/**
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
 */async function $R(t,e){const n=Yf()?Ea():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await BR(H(t),r);return i||[]}async function qR(t,e){const n=H(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Al(n.auth,i,e);const{email:s}=await hR(n.auth,i);s!==t.email&&await t.reload()}async function jR(t,e,n){const r=H(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Al(r.auth,s,n);const{email:o}=await mR(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function zR(t,e){return ut(t,"POST","/v1/accounts:update",e)}/**
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
 */async function HR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=H(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await tr(r,zR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KR(t,e){return R_(H(t),e,null)}function WR(t,e){return R_(H(t),null,e)}async function R_(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await tr(t,__(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function GR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=_l(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ps(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new YR(s,i);case"github.com":return new QR(s,i);case"google.com":return new XR(s,i);case"twitter.com":return new JR(s,i,t.screenName||null);case"custom":case"anonymous":return new Ps(s,null);default:return new Ps(s,r,i)}}class Ps{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class N_ extends Ps{constructor(e,n,r,i){super(e,n,r),this.username=i}}class YR extends Ps{constructor(e,n){super(e,"facebook.com",n)}}class QR extends N_{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class XR extends Ps{constructor(e,n){super(e,"google.com",n)}}class JR extends N_{constructor(e,n,r){super(e,"twitter.com",n,r)}}function ZR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:GR(n)}class Ti{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Ti("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ti("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ti._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ti._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class em{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=at(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>kl._fromServerResponse(r,a));P(i.mfaPendingCredential,r,"internal-error");const o=Ti._fromMfaPendingCredential(i.mfaPendingCredential);return new em(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await on._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return P(n.user,r,"internal-error"),on._forOperation(n.user,n.operationType,u);default:wt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function eN(t,e){var n;const r=H(t),i=e;return P(e.customData.operationType,r,"argument-error"),P((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),em._fromError(r,i)}/**
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
 */function tN(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:start",tt(t,e))}function nN(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:finalize",tt(t,e))}function rN(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:withdraw",tt(t,e))}class tm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>kl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new tm(e)}async getSession(){return Ti._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await tr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var n;const r=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),s=await tr(this.user,rN(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==r),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const Oh=new WeakMap;function iN(t){const e=H(t);return Oh.has(e)||Oh.set(e,tm._fromUser(e)),Oh.get(e)}const Ru="__sak";/**
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
 */class P_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sN(){const t=Ve();return Xf(t)||co(t)}const oN=1e3,aN=10;class D_ extends P_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sN()&&rR(),this.fallbackToPolling=y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D_.type="LOCAL";const nm=D_;/**
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
 */class O_ extends P_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O_.type="SESSION";const Vi=O_;/**
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
 */function cN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await cN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
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
 */function rc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=rc("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xe(){return window}function lN(t){Xe().location.href=t}/**
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
 */function rm(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function hN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fN(){return rm()?self:null}/**
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
 */const L_="firebaseLocalStorageDb",mN=1,Nu="firebaseLocalStorage",M_="fbase_key";class ic{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([Nu],e?"readwrite":"readonly").objectStore(Nu)}function pN(){const t=indexedDB.deleteDatabase(L_);return new ic(t).toPromise()}function kd(){const t=indexedDB.open(L_,mN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nu,{keyPath:M_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nu)?e(r):(r.close(),await pN(),e(await kd()))})})}async function my(t,e,n){const r=xl(t,!0).put({[M_]:e,value:n});return new ic(r).toPromise()}async function gN(t,e){const n=xl(t,!1).get(e),r=await new ic(n).toPromise();return r===void 0?null:r.value}function py(t,e){const n=xl(t,!0).delete(e);return new ic(n).toPromise()}const yN=800,vN=3;class F_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(fN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hN(),!this.activeServiceWorker)return;this.sender=new uN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await my(e,Ru,"1"),await py(e,Ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>my(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>py(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new ic(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F_.type="LOCAL";const Aa=F_;/**
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
 */function wN(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:start",tt(t,e))}function bN(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:finalize",tt(t,e))}/**
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
 */async function _N(t){return(await ut(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function IN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function U_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IN().appendChild(r)})}function V_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const EN=500,TN=6e4,Mc=1e12;class SN{constructor(e){this.auth=e,this.counter=Mc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new kN(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Mc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Mc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Mc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class kN{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;P(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=AN(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},TN)},EN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function AN(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Lh=V_("rcb"),CN=new tc(3e4,6e4),xN="https://www.google.com/recaptcha/api.js?";class RN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(NN(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Xe().grecaptcha):new Promise((r,i)=>{const s=Xe().setTimeout(()=>{i(gt(e,"network-request-failed"))},CN.get());Xe()[Lh]=()=>{Xe().clearTimeout(s),delete Xe()[Lh];const a=Xe().grecaptcha;if(!a){i(gt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${xN}?${oo({onload:Lh,render:"explicit",hl:n})}`;U_(o).catch(()=>{clearTimeout(s),i(gt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function NN(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class PN{async load(e){return new SN(e)}clearedOneInstance(){}}/**
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
 */const B_="recaptcha",DN={theme:"light",type:"image"};class ON{constructor(e,n=Object.assign({},DN),r){this.parameters=n,this.type=B_,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=at(r),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;P(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new PN:new RN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(Yf()&&!rm(),this.auth,"internal-error"),await LN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await _N(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function LN(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class im{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Li._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function MN(t,e,n){const r=at(t),i=await Rl(r,e,H(n));return new im(i,s=>Sl(r,s))}async function FN(t,e,n){const r=H(t);await Tl(!1,r,"phone");const i=await Rl(r.auth,e,H(n));return new im(i,s=>A_(r,s))}async function UN(t,e,n){const r=H(t),i=await Rl(r.auth,e,H(n));return new im(i,s=>C_(r,s))}async function Rl(t,e,n){var r;const i=await n.verify();try{P(typeof i=="string",t,"argument-error"),P(n.type===B_,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return P(o.type==="enroll",t,"internal-error"),(await tN(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(a,t,"missing-multi-factor-info"),(await wN(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await vR(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function VN(t,e){await Jf(H(t),e)}/**
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
 */class vn{constructor(e){this.providerId=vn.PROVIDER_ID,this.auth=at(e)}verifyPhoneNumber(e,n){return Rl(this.auth,e,H(n))}static credential(e,n){return Li._fromVerification(e,n)}static credentialFromResult(e){const n=e;return vn.credentialFromTaggedObject(n)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Li._fromTokenResponse(n,r):null}}vn.PROVIDER_ID="phone";vn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ns(t,e){return e?Wt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sm extends uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BN(t){return k_(t.auth,new sm(t),t.bypassAuthState)}function $N(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),S_(n,new sm(t),t.bypassAuthState)}async function qN(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Jf(n,new sm(t),t.bypassAuthState)}/**
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
 */class $_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BN;case"linkViaPopup":case"linkViaRedirect":return qN;case"reauthViaPopup":case"reauthViaRedirect":return $N;default:wt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jN=new tc(2e3,1e4);async function zN(t,e,n){const r=at(t);ao(t,e,ur);const i=ns(r,n);return new Wn(r,"signInViaPopup",e,i).executeNotNull()}async function HN(t,e,n){const r=H(t);ao(r.auth,e,ur);const i=ns(r.auth,n);return new Wn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function KN(t,e,n){const r=H(t);ao(r.auth,e,ur);const i=ns(r.auth,n);return new Wn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Wn extends $_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jN.get())};e()}}Wn.currentPopupAction=null;/**
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
 */const WN="pendingRedirect",Zo=new Map;class GN extends $_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const r=await YN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YN(t,e){const n=j_(e),r=q_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function om(t,e){return q_(t)._set(j_(e),"true")}function QN(){Zo.clear()}function am(t,e){Zo.set(t._key(),e)}function q_(t){return Wt(t._redirectPersistence)}function j_(t){return Oi(WN,t.config.apiKey,t.name)}/**
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
 */function XN(t,e,n){return JN(t,e,n)}async function JN(t,e,n){const r=at(t);ao(t,e,ur);const i=ns(r,n);return await om(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ZN(t,e,n){return eP(t,e,n)}async function eP(t,e,n){const r=H(t);ao(r.auth,e,ur);const i=ns(r.auth,n);await om(i,r.auth);const s=await z_(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function tP(t,e,n){return nP(t,e,n)}async function nP(t,e,n){const r=H(t);ao(r.auth,e,ur);const i=ns(r.auth,n);await Tl(!1,r,e.providerId),await om(i,r.auth);const s=await z_(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function rP(t,e){return await at(t)._initializationPromise,Nl(t,e,!1)}async function Nl(t,e,n=!1){const r=at(t),i=ns(r,e),o=await new GN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function z_(t){const e=rc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const iP=10*60*1e3;class H_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!K_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iP&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}}function gy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function K_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K_(t);default:return!1}}/**
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
 */async function W_(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
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
 */const oP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aP=/^https?/;async function cP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await W_(t);for(const n of e)try{if(uP(n))return}catch{}wt(t,"unauthorized-domain")}function uP(t){const e=Ea(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aP.test(n))return!1;if(oP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lP=new tc(3e4,6e4);function yy(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hP(t){return new Promise((e,n)=>{var r,i,s;function o(){yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yy(),n(gt(t,"network-request-failed"))},timeout:lP.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)o();else{const a=V_("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},U_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw lu=null,e})}let lu=null;function dP(t){return lu=lu||hP(t),lu}/**
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
 */const fP=new tc(5e3,15e3),mP="__/auth/iframe",pP="emulator/auth/iframe",gP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vP(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qf(e,pP):`https://${t.config.authDomain}/${mP}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},i=yP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oo(r).slice(1)}`}async function wP(t){const e=await dP(t),n=Xe().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:vP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},fP.get());function c(){Xe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const bP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_P=500,IP=600,EP="_blank",TP="http://localhost";class vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SP(t,e,n,r=_P,i=IP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=f_(u)?EP:n),d_(u)&&(e=e||TP,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(tR(u)&&a!=="_self")return kP(e||"",a),new vy(null);const h=window.open(e||"",a,l);P(h,t,"popup-blocked");try{h.focus()}catch{}return new vy(h)}function kP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AP="__/auth/handler",CP="emulator/auth/handler";function Ad(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:i};if(e instanceof ur){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof lo){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${xP(t)}?${oo(a).slice(1)}`}function xP({config:t}){return t.emulator?Qf(t,CP):`https://${t.authDomain}/${AP}`}/**
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
 */const Mh="webStorageSupport";class RP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vi,this._completeRedirectFn=Nl,this._overrideRedirectResult=am}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ad(e,n,r,Ea(),i);return SP(e,o,rc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),lN(Ad(e,n,r,Ea(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wP(e),r=new H_(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mh,{type:Mh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mh];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return y_()||Xf()||co()}}const NP=RP;class PP{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Pn("unexpected MultiFactorSessionType")}}}class cm extends PP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cm(e)}_finalizeEnroll(e,n,r){return nN(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return bN(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class G_{constructor(){}static assertion(e){return cm._fromCredential(e)}}G_.FACTOR_ID="phone";var wy="@firebase/auth",by="0.20.11";/**
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
 */class DP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LP(t){er(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{P(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),P(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v_(t)},l=new sR(a,c,u);return Fx(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),er(new sn("auth-internal",e=>{const n=at(e.getProvider("auth").getImmediate());return(r=>new DP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(wy,by,OP(t)),rn(wy,by,"esm2017")}/**
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
 */const MP=5*60;aC("authIdTokenMaxAge");LP("Browser");/**
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
 */function Bi(){return window}/**
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
 */const FP=2e3;async function UP(t,e,n){var r;const{BuildInfo:i}=Bi();bn(e.sessionId,"AuthEvent did not contain a session ID");const s=await jP(e.sessionId),o={};return co()?o.ibi=i.packageName:nc()?o.apn=i.packageName:wt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ad(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function VP(t){const{BuildInfo:e}=Bi(),n={};co()?n.iosBundleId=e.packageName:nc()?n.androidPackageName=e.packageName:wt(t,"operation-not-supported-in-this-environment"),await W_(t,n)}function BP(t){const{cordova:e}=Bi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,eR()?"_blank":"_system","location=yes"),n(i)})})}async function $P(t,e,n){const{cordova:r}=Bi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(gt(t,"redirect-cancelled-by-user"))},FP))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),nc()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function qP(t){var e,n,r,i,s,o,a,c,u,l;const h=Bi();P(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function jP(t){const e=zP(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function zP(t){if(bn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const HP=20;class KP extends H_{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function WP(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:QP(),postBody:null,tenantId:t.tenantId,error:gt(t,"no-auth-event")}}function GP(t,e){return Cd()._set(xd(t),e)}async function _y(t){const e=await Cd()._get(xd(t));return e&&await Cd()._remove(xd(t)),e}function YP(t,e){var n,r;const i=JP(e);if(i.includes("/__/auth/callback")){const s=hu(i),o=s.firebaseError?XP(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?gt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function QP(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<HP;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Cd(){return Wt(nm)}function xd(t){return Oi("authEvent",t.config.apiKey,t.name)}function XP(t){try{return JSON.parse(t)}catch{return null}}function JP(t){const e=hu(t),n=e.link?decodeURIComponent(e.link):void 0,r=hu(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return hu(i).link||i||r||n||t}function hu(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return bs(n.join("?"))}/**
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
 */const ZP=500;class eD{constructor(){this._redirectPersistence=Vi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Nl,this._overrideRedirectResult=am}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new KP(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){wt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){qP(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),QN(),await this._originValidation(e);const o=WP(e,r,i);await GP(e,o);const a=await UP(e,o,n),c=await BP(a);return $P(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VP(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Bi(),o=setTimeout(async()=>{await _y(e),n.onEvent(Iy())},ZP),a=async l=>{clearTimeout(o);const h=await _y(e);let d=null;h&&(l==null?void 0:l.url)&&(d=YP(h,l.url)),n.onEvent(d||Iy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Bi().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const tD=eD;function Iy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:gt("no-auth-event")}}/**
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
 */function nD(t,e){at(t)._logFramework(e)}var rD="@firebase/auth-compat",iD="0.2.24";/**
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
 */const sD=1e3;function ea(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function oD(){return ea()==="http:"||ea()==="https:"}function Y_(t=Ve()){return!!((ea()==="file:"||ea()==="ionic:"||ea()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function aD(){return jf()||wl()}function cD(){return jb()&&(document==null?void 0:document.documentMode)===11}function uD(t=Ve()){return/Edge\/\d+/.test(t)}function lD(t=Ve()){return cD()||uD(t)}function Q_(){try{const t=self.localStorage,e=rc();if(t)return t.setItem(e,"1"),t.removeItem(e),lD()?ba():!0}catch{return um()&&ba()}return!1}function um(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Fh(){return(oD()||qb()||Y_())&&!aD()&&Q_()&&!um()}function X_(){return Y_()&&typeof document<"u"}async function hD(){return X_()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},sD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function dD(){return typeof window<"u"?window:null}/**
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
 */const Ht={LOCAL:"local",NONE:"none",SESSION:"session"},Co=P,J_="persistence";function fD(t,e){if(Co(Object.values(Ht).includes(e),t,"invalid-persistence-type"),jf()){Co(e!==Ht.SESSION,t,"unsupported-persistence-type");return}if(wl()){Co(e===Ht.NONE,t,"unsupported-persistence-type");return}if(um()){Co(e===Ht.NONE||e===Ht.LOCAL&&ba(),t,"unsupported-persistence-type");return}Co(e===Ht.NONE||Q_(),t,"unsupported-persistence-type")}async function Rd(t){await t._initializationPromise;const e=Z_(),n=Oi(J_,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function mD(t,e){const n=Z_();if(!n)return[];const r=Oi(J_,t,e);switch(n.getItem(r)){case Ht.NONE:return[qs];case Ht.LOCAL:return[Aa,Vi];case Ht.SESSION:return[Vi];default:return[]}}function Z_(){var t;try{return((t=dD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const pD=P;class Cr{constructor(){this.browserResolver=Wt(NP),this.cordovaResolver=Wt(tD),this.underlyingResolver=null,this._redirectPersistence=Vi,this._completeRedirectFn=Nl,this._overrideRedirectResult=am}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return X_()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return pD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await hD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function eI(t){return t.unwrap()}function gD(t){return t.wrapped()}/**
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
 */function yD(t){return tI(t)}function vD(t,e){var n,r;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=e)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new wD(t,eN(t,e))}else if(i){const s=tI(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function tI(t){const{_tokenResponse:e}=t instanceof Tt?t.customData:t;if(!e)return null;if(!(t instanceof Tt)&&"temporaryProof"in e&&"phoneNumber"in e)return vn.credentialFromResult(t);const n=e.providerId;if(!n||n===Ao.PASSWORD)return null;let r;switch(n){case Ao.GOOGLE:r=An;break;case Ao.FACEBOOK:r=kn;break;case Ao.GITHUB:r=Cn;break;case Ao.TWITTER:r=xn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?js._create(n,a):$n._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ns(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Tt?r.credentialFromError(t):r.credentialFromResult(t)}function Ut(t,e){return e.catch(n=>{throw n instanceof Tt&&vD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:yD(n),additionalUserInfo:ZR(n),user:Gn.getOrCreate(i)}})}async function Nd(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ut(t,n.confirm(r))}}class wD{constructor(e,n){this.resolver=n,this.auth=gD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ut(eI(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Gn{constructor(e){this._delegate=e,this.multiFactor=iN(e)}static getOrCreate(e){return Gn.USER_MAP.has(e)||Gn.USER_MAP.set(e,new Gn(e)),Gn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ut(this.auth,A_(this._delegate,e))}async linkWithPhoneNumber(e,n){return Nd(this.auth,FN(this._delegate,e,n))}async linkWithPopup(e){return Ut(this.auth,KN(this._delegate,e,Cr))}async linkWithRedirect(e){return await Rd(at(this.auth)),tP(this._delegate,e,Cr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ut(this.auth,C_(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Nd(this.auth,UN(this._delegate,e,n))}reauthenticateWithPopup(e){return Ut(this.auth,HN(this._delegate,e,Cr))}async reauthenticateWithRedirect(e){return await Rd(at(this.auth)),ZN(this._delegate,e,Cr)}sendEmailVerification(e){return qR(this._delegate,e)}async unlink(e){return await CR(this._delegate,e),this}updateEmail(e){return KR(this._delegate,e)}updatePassword(e){return WR(this._delegate,e)}updatePhoneNumber(e){return VN(this._delegate,e)}updateProfile(e){return HR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return jR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Gn.USER_MAP=new WeakMap;/**
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
 */const xo=P;class Pd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;xo(r,"invalid-api-key",{appName:e.name}),xo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Cr:void 0;this._delegate=n.initialize({options:{persistence:bD(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Lx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Gn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){oR(this._delegate,e,n)}applyActionCode(e){return DR(this._delegate,e)}checkActionCode(e){return x_(this._delegate,e)}confirmPasswordReset(e,n){return PR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ut(this._delegate,LR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return $R(this._delegate,e)}isSignInWithEmailLink(e){return UR(this._delegate,e)}async getRedirectResult(){xo(Fh(),this._delegate,"operation-not-supported-in-this-environment");const e=await rP(this._delegate,Cr);return e?Ut(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){nD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Ey(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Ey(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return FR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return NR(this._delegate,e,n||void 0)}async setPersistence(e){fD(this._delegate,e);let n;switch(e){case Ht.SESSION:n=Vi;break;case Ht.LOCAL:n=await Wt(Aa)._isAvailable()?Aa:nm;break;case Ht.NONE:n=qs;break;default:return wt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ut(this._delegate,AR(this._delegate))}signInWithCredential(e){return Ut(this._delegate,Sl(this._delegate,e))}signInWithCustomToken(e){return Ut(this._delegate,RR(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ut(this._delegate,MR(this._delegate,e,n))}signInWithEmailLink(e,n){return Ut(this._delegate,VR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Nd(this._delegate,MN(this._delegate,e,n))}async signInWithPopup(e){return xo(Fh(),this._delegate,"operation-not-supported-in-this-environment"),Ut(this._delegate,zN(this._delegate,e,Cr))}async signInWithRedirect(e){return xo(Fh(),this._delegate,"operation-not-supported-in-this-environment"),await Rd(this._delegate),XN(this._delegate,e,Cr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return OR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Pd.Persistence=Ht;function Ey(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Gn.getOrCreate(o)),error:e,complete:n}}function bD(t,e){const n=mD(t,e);if(typeof self<"u"&&!n.includes(Aa)&&n.push(Aa),typeof window<"u")for(const r of[nm,Vi])n.includes(r)||n.push(r);return n.includes(qs)||n.push(qs),n}/**
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
 */class lm{constructor(){this.providerId="phone",this._delegate=new vn(eI(ts.auth()))}static credential(e,n){return vn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}lm.PHONE_SIGN_IN_METHOD=vn.PHONE_SIGN_IN_METHOD;lm.PROVIDER_ID=vn.PROVIDER_ID;/**
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
 */const _D=P;class ID{constructor(e,n,r=ts.app()){var i;_D((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ON(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const ED="auth-compat";function TD(t){t.INTERNAL.registerComponent(new sn(ED,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Pd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ds.EMAIL_SIGNIN,PASSWORD_RESET:ds.PASSWORD_RESET,RECOVER_EMAIL:ds.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ds.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ds.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ds.VERIFY_EMAIL}},EmailAuthProvider:Qr,FacebookAuthProvider:kn,GithubAuthProvider:Cn,GoogleAuthProvider:An,OAuthProvider:Ns,SAMLAuthProvider:Cu,PhoneAuthProvider:lm,PhoneMultiFactorGenerator:G_,RecaptchaVerifier:ID,TwitterAuthProvider:xn,Auth:Pd,AuthCredential:uo,Error:Tt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(rD,iD)}TD(ts);var SD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y,hm=hm||{},ie=SD||self;function Pu(){}function Pl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function sc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function kD(t){return Object.prototype.hasOwnProperty.call(t,Uh)&&t[Uh]||(t[Uh]=++AD)}var Uh="closure_uid_"+(1e9*Math.random()>>>0),AD=0;function CD(t,e,n){return t.call.apply(t.bind,arguments)}function xD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=CD:St=xD,St.apply(null,arguments)}function Fc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function bt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xr(){this.s=this.s,this.o=this.o}var RD=0;Xr.prototype.s=!1;Xr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),RD!=0)&&kD(this)};Xr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ty(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var ND=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",Pu,e),ie.removeEventListener("test",Pu,e)}catch{}return t}();function Du(t){return/^[\s\xa0]*$/.test(t)}var Sy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Vh(t,e){return t<e?-1:t>e?1:0}function Dl(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Dl().indexOf(t)!=-1}function fm(t){return fm[" "](t),t}fm[" "]=Pu;function PD(t){var e=LD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var DD=Rn("Opera"),zs=Rn("Trident")||Rn("MSIE"),rI=Rn("Edge"),Dd=rI||zs,iI=Rn("Gecko")&&!(Dl().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),OD=Dl().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function sI(){var t=ie.document;return t?t.documentMode:void 0}var Ou;e:{var Bh="",$h=function(){var t=Dl();if(iI)return/rv:([^\);]+)(\)|;)/.exec(t);if(rI)return/Edge\/([\d\.]+)/.exec(t);if(zs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OD)return/WebKit\/(\S+)/.exec(t);if(DD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($h&&(Bh=$h?$h[1]:""),zs){var qh=sI();if(qh!=null&&qh>parseFloat(Bh)){Ou=String(qh);break e}}Ou=Bh}var LD={};function MD(){return PD(function(){let t=0;const e=Sy(String(Ou)).split("."),n=Sy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Vh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Vh(i[2].length==0,s[2].length==0)||Vh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Od;if(ie.document&&zs){var ky=sI();Od=ky||parseInt(Ou,10)||void 0}else Od=void 0;var FD=Od;function Ca(t,e){if(kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(iI){e:{try{fm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ca.X.h.call(this)}}bt(Ca,kt);var UD={2:"touch",3:"pen",4:"mouse"};Ca.prototype.h=function(){Ca.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var oc="closure_listenable_"+(1e6*Math.random()|0),VD=0;function BD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++VD,this.ba=this.ea=!1}function Ol(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function mm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function oI(t){const e={};for(const n in t)e[n]=t[n];return e}const Ay="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function aI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ay.length;s++)n=Ay[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ll(t){this.src=t,this.g={},this.h=0}Ll.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Md(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new BD(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Ld(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=nI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ol(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Md(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var pm="closure_lm_"+(1e6*Math.random()|0),jh={};function cI(t,e,n,r,i){if(r&&r.once)return lI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)cI(t,e[s],n,r,i);return null}return n=vm(n),t&&t[oc]?t.N(e,n,sc(r)?!!r.capture:!!r,i):uI(t,e,n,!1,r,i)}function uI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=sc(i)?!!i.capture:!!i,a=ym(t);if(a||(t[pm]=a=new Ll(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=$D(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ND||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(dI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $D(){function t(n){return e.call(t.src,t.listener,n)}const e=qD;return t}function lI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)lI(t,e[s],n,r,i);return null}return n=vm(n),t&&t[oc]?t.O(e,n,sc(r)?!!r.capture:!!r,i):uI(t,e,n,!0,r,i)}function hI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)hI(t,e[s],n,r,i);else r=sc(r)?!!r.capture:!!r,n=vm(n),t&&t[oc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Md(s,n,r,i),-1<n&&(Ol(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ym(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Md(e,n,r,i)),(n=-1<t?e[t]:null)&&gm(n))}function gm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[oc])Ld(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(dI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ym(e))?(Ld(n,t),n.h==0&&(n.src=null,e[pm]=null)):Ol(t)}}}function dI(t){return t in jh?jh[t]:jh[t]="on"+t}function qD(t,e){if(t.ba)t=!0;else{e=new Ca(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gm(t),t=n.call(r,e)}return t}function ym(t){return t=t[pm],t instanceof Ll?t:null}var zh="__closure_events_fn_"+(1e9*Math.random()>>>0);function vm(t){return typeof t=="function"?t:(t[zh]||(t[zh]=function(e){return t.handleEvent(e)}),t[zh])}function ct(){Xr.call(this),this.i=new Ll(this),this.P=this,this.I=null}bt(ct,Xr);ct.prototype[oc]=!0;ct.prototype.removeEventListener=function(t,e,n,r){hI(this,t,e,n,r)};function yt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new kt(e,t);else if(e instanceof kt)e.target=e.target||t;else{var i=e;e=new kt(r,t),aI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Uc(o,r,!0,e)&&i}if(o=e.g=t,i=Uc(o,r,!0,e)&&i,i=Uc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Uc(o,r,!1,e)&&i}ct.prototype.M=function(){if(ct.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ol(n[r]);delete t.g[e],t.h--}}this.I=null};ct.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Uc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ld(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var wm=ie.JSON.stringify;function jD(){var t=pI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zD{constructor(){this.h=this.g=null}add(e,n){const r=fI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var fI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new HD,t=>t.reset());class HD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KD(t){ie.setTimeout(()=>{throw t},0)}function mI(t,e){Fd||WD(),Ud||(Fd(),Ud=!0),pI.add(t,e)}var Fd;function WD(){var t=ie.Promise.resolve(void 0);Fd=function(){t.then(GD)}}var Ud=!1,pI=new zD;function GD(){for(var t;t=jD();){try{t.h.call(t.g)}catch(n){KD(n)}var e=fI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ud=!1}function Ml(t,e){ct.call(this),this.h=t||1,this.g=e||ie,this.j=St(this.lb,this),this.l=Date.now()}bt(Ml,ct);Y=Ml.prototype;Y.ca=!1;Y.R=null;Y.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),yt(this,"tick"),this.ca&&(bm(this),this.start()))}};Y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Y.M=function(){Ml.X.M.call(this),bm(this),delete this.g};function _m(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function gI(t){t.g=_m(()=>{t.g=null,t.i&&(t.i=!1,gI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YD extends Xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gI(this)}M(){super.M(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xa(t){Xr.call(this),this.h=t,this.g={}}bt(xa,Xr);var Cy=[];function yI(t,e,n,r){Array.isArray(n)||(n&&(Cy[0]=n.toString()),n=Cy);for(var i=0;i<n.length;i++){var s=cI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function vI(t){mm(t.g,function(e,n){this.g.hasOwnProperty(n)&&gm(e)},t),t.g={}}xa.prototype.M=function(){xa.X.M.call(this),vI(this)};xa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fl(){this.g=!0}Fl.prototype.Aa=function(){this.g=!1};function QD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function XD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function _s(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZD(t,n)+(r?" "+r:"")})}function JD(t,e){t.info(function(){return"TIMEOUT: "+e})}Fl.prototype.info=function(){};function ZD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wm(n)}catch{return e}}var rs={},xy=null;function Ul(){return xy=xy||new ct}rs.Pa="serverreachability";function wI(t){kt.call(this,rs.Pa,t)}bt(wI,kt);function Ra(t){const e=Ul();yt(e,new wI(e))}rs.STAT_EVENT="statevent";function bI(t,e){kt.call(this,rs.STAT_EVENT,t),this.stat=e}bt(bI,kt);function Dt(t){const e=Ul();yt(e,new bI(e,t))}rs.Qa="timingevent";function _I(t,e){kt.call(this,rs.Qa,t),this.size=e}bt(_I,kt);function ac(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Vl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},II={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Im(){}Im.prototype.h=null;function Ry(t){return t.h||(t.h=t.i())}function EI(){}var cc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Em(){kt.call(this,"d")}bt(Em,kt);function Tm(){kt.call(this,"c")}bt(Tm,kt);var Vd;function Bl(){}bt(Bl,Im);Bl.prototype.g=function(){return new XMLHttpRequest};Bl.prototype.i=function(){return{}};Vd=new Bl;function uc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new xa(this),this.O=eO,t=Dd?125:void 0,this.T=new Ml(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new TI}function TI(){this.i=null,this.g="",this.h=!1}var eO=45e3,Bd={},Lu={};Y=uc.prototype;Y.setTimeout=function(t){this.O=t};function $d(t,e,n){t.K=1,t.v=ql(nr(e)),t.s=n,t.P=!0,SI(t,null)}function SI(t,e){t.F=Date.now(),lc(t),t.A=nr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),DI(n.i,"t",r),t.C=0,n=t.l.H,t.h=new TI,t.g=e0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new YD(St(t.La,t,t.g),t.N)),yI(t.S,t.g,"readystatechange",t.ib),e=t.H?oI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ra(),QD(t.j,t.u,t.A,t.m,t.U,t.s)}Y.ib=function(t){t=t.target;const e=this.L;e&&Yn(t)==3?e.l():this.La(t)};Y.La=function(t){try{if(t==this.g)e:{const l=Yn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Dd||this.g&&(this.h.h||this.g.fa()||Oy(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ra(3):Ra(2)),$l(this);var n=this.g.aa();this.Y=n;t:if(kI(this)){var r=Oy(this.g);t="";var i=r.length,s=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Si(this),ta(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,XD(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Du(a)){var u=a;break t}}u=null}if(n=u)_s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qd(this,n);else{this.i=!1,this.o=3,Dt(12),Si(this),ta(this);break e}}this.P?(AI(this,l,o),Dd&&this.i&&l==3&&(yI(this.S,this.T,"tick",this.hb),this.T.start())):(_s(this.j,this.m,o,null),qd(this,o)),l==4&&Si(this),this.i&&!this.I&&(l==4?QI(this.l,this):(this.i=!1,lc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),Si(this),ta(this)}}}catch{}finally{}};function kI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function AI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=tO(t,n),i==Lu){e==4&&(t.o=4,Dt(14),r=!1),_s(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Bd){t.o=4,Dt(15),_s(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _s(t.j,t.m,i,null),qd(t,i);kI(t)&&i!=Lu&&i!=Bd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nm(e),e.K=!0,Dt(11))):(_s(t.j,t.m,n,"[Invalid Chunked Response]"),Si(t),ta(t))}Y.hb=function(){if(this.g){var t=Yn(this.g),e=this.g.fa();this.C<e.length&&($l(this),AI(this,t,e),this.i&&t!=4&&lc(this))}};function tO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Lu:(n=Number(e.substring(n,r)),isNaN(n)?Bd:(r+=1,r+n>e.length?Lu:(e=e.substr(r,n),t.C=r+n,e)))}Y.cancel=function(){this.I=!0,Si(this)};function lc(t){t.V=Date.now()+t.O,CI(t,t.O)}function CI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ac(St(t.gb,t),e)}function $l(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}Y.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(JD(this.j,this.A),this.K!=2&&(Ra(),Dt(17)),Si(this),this.o=2,ta(this)):CI(this,this.V-t)};function ta(t){t.l.G==0||t.I||QI(t.l,t)}function Si(t){$l(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,bm(t.T),vI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function qd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jd(n.h,t))){if(!t.J&&jd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Uu(n),Hl(n);else break e;Rm(n),Dt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ac(St(n.cb,n),6e3));if(1>=MI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ki(n,11)}else if((t.J||n.g==t)&&Uu(n),!Du(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sm(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,De(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=ZI(r,r.H?r.ka:null,r.V),o.J){FI(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&($l(a),lc(a)),r.g=o}else GI(r);0<n.i.length&&Kl(n)}else u[0]!="stop"&&u[0]!="close"||ki(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ki(n,7):xm(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ra(4)}catch{}}function nO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Pl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Pl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rO(t),r=nO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var RI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Mi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Mi){this.h=e!==void 0?e:t.h,Mu(this,t.j),this.s=t.s,this.g=t.g,Fu(this,t.m),this.l=t.l,e=t.i;var n=new Na;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ny(this,n),this.o=t.o}else t&&(n=String(t).match(RI))?(this.h=!!e,Mu(this,n[1]||"",!0),this.s=$o(n[2]||""),this.g=$o(n[3]||"",!0),Fu(this,n[4]),this.l=$o(n[5]||"",!0),Ny(this,n[6]||"",!0),this.o=$o(n[7]||"")):(this.h=!!e,this.i=new Na(null,this.h))}Mi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qo(e,Py,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qo(e,Py,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qo(n,n.charAt(0)=="/"?aO:oO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qo(n,uO)),t.join("")};function nr(t){return new Mi(t)}function Mu(t,e,n){t.j=n?$o(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ny(t,e,n){e instanceof Na?(t.i=e,lO(t.i,t.h)):(n||(e=qo(e,cO)),t.i=new Na(e,t.h))}function De(t,e,n){t.i.set(e,n)}function ql(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $o(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Py=/[#\/\?@]/g,oO=/[#\?:]/g,aO=/[#\?]/g,cO=/[#\?@]/g,uO=/#/g;function Na(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jr(t){t.g||(t.g=new Map,t.h=0,t.i&&iO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Y=Na.prototype;Y.add=function(t,e){Jr(this),this.i=null,t=ho(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function NI(t,e){Jr(t),e=ho(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function PI(t,e){return Jr(t),e=ho(t,e),t.g.has(e)}Y.forEach=function(t,e){Jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};Y.oa=function(){Jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};Y.W=function(t){Jr(this);let e=[];if(typeof t=="string")PI(this,t)&&(e=e.concat(this.g.get(ho(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Y.set=function(t,e){return Jr(this),this.i=null,t=ho(this,t),PI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function DI(t,e,n){NI(t,e),0<n.length&&(t.i=null,t.g.set(ho(t,e),dm(n)),t.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ho(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lO(t,e){e&&!t.j&&(Jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(NI(this,r),DI(this,i,n))},t)),t.j=e}var hO=class{constructor(t,e){this.h=t,this.g=e}};function OI(t){this.l=t||dO,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ga&&ie.g.Ga()&&ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dO=10;function LI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function MI(t){return t.h?1:t.g?t.g.size:0}function jd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sm(t,e){t.g?t.g.add(e):t.h=e}function FI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}OI.prototype.cancel=function(){if(this.i=UI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function UI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dm(t.i)}function km(){}km.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};km.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function fO(){this.g=new km}function mO(t,e,n){const r=n||"";try{xI(t,function(i,s){let o=i;sc(i)&&(o=wm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pO(t,e){const n=new Fl;if(ie.Image){const r=new Image;r.onload=Fc(Vc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fc(Vc,n,r,"TestLoadImage: error",!1,e),r.onabort=Fc(Vc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fc(Vc,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Vc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function hc(t){this.l=t.ac||null,this.j=t.jb||!1}bt(hc,Im);hc.prototype.g=function(){return new jl(this.l,this.j)};hc.prototype.i=function(t){return function(){return t}}({});function jl(t,e){ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Am,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(jl,ct);var Am=0;Y=jl.prototype;Y.open=function(t,e){if(this.readyState!=Am)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pa(this)};Y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dc(this)),this.readyState=Am};Y.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pa(this)),this.g&&(this.readyState=3,Pa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;VI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function VI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Y.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?dc(this):Pa(this),this.readyState==3&&VI(this)}};Y.Va=function(t){this.g&&(this.response=this.responseText=t,dc(this))};Y.Ua=function(t){this.g&&(this.response=t,dc(this))};Y.ga=function(){this.g&&dc(this)};function dc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pa(t)}Y.setRequestHeader=function(t,e){this.v.append(t,e)};Y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gO=ie.JSON.parse;function je(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=BI,this.K=this.L=!1}bt(je,ct);var BI="",yO=/^https?$/i,vO=["POST","PUT"];Y=je.prototype;Y.Ka=function(t){this.L=t};Y.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vd.g(),this.C=this.u?Ry(this.u):Ry(Vd),this.g.onreadystatechange=St(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Dy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=nI(vO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jI(this),0<this.B&&((this.K=wO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.qa,this)):this.A=_m(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Dy(this,s)}};function wO(t){return zs&&MD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Y.qa=function(){typeof hm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,yt(this,"timeout"),this.abort(8))};function Dy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$I(t),zl(t)}function $I(t){t.D||(t.D=!0,yt(t,"complete"),yt(t,"error"))}Y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,yt(this,"complete"),yt(this,"abort"),zl(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zl(this,!0)),je.X.M.call(this)};Y.Ha=function(){this.s||(this.F||this.v||this.l?qI(this):this.fb())};Y.fb=function(){qI(this)};function qI(t){if(t.h&&typeof hm<"u"&&(!t.C[1]||Yn(t)!=4||t.aa()!=2)){if(t.v&&Yn(t)==4)_m(t.Ha,0,t);else if(yt(t,"readystatechange"),Yn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(RI)[1]||null;if(!i&&ie.self&&ie.self.location){var s=ie.self.location.protocol;i=s.substr(0,s.length-1)}r=!yO.test(i?i.toLowerCase():"")}n=r}if(n)yt(t,"complete"),yt(t,"success");else{t.m=6;try{var o=2<Yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",$I(t)}}finally{zl(t)}}}}function zl(t,e){if(t.g){jI(t);const n=t.g,r=t.C[0]?Pu:null;t.g=null,t.C=null,e||yt(t,"ready");try{n.onreadystatechange=r}catch{}}}function jI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}Y.aa=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}};Y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gO(e)}};function Oy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case BI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Ea=function(){return this.m};Y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zI(t){let e="";return mm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Cm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=zI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function Ro(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function HI(t){this.Ca=0,this.i=[],this.j=new Fl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ro("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ro("baseRetryDelayMs",5e3,t),this.bb=Ro("retryDelaySeedMs",1e4,t),this.$a=Ro("forwardChannelMaxRetries",2,t),this.ta=Ro("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new OI(t&&t.concurrentRequestLimit),this.Fa=new fO,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Y=HI.prototype;Y.ma=8;Y.G=1;function xm(t){if(KI(t),t.G==3){var e=t.U++,n=nr(t.F);De(n,"SID",t.I),De(n,"RID",e),De(n,"TYPE","terminate"),fc(t,n),e=new uc(t,t.j,e,void 0),e.K=2,e.v=ql(nr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=e0(e.l,null),e.g.da(e.v)),e.F=Date.now(),lc(e)}JI(t)}function Hl(t){t.g&&(Nm(t),t.g.cancel(),t.g=null)}function KI(t){Hl(t),t.u&&(ie.clearTimeout(t.u),t.u=null),Uu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Kl(t){LI(t.h)||t.m||(t.m=!0,mI(t.Ja,t),t.C=0)}function bO(t,e){return MI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ac(St(t.Ja,t,e),XI(t,t.C)),t.C++,!0)}Y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new uc(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=oI(s),aI(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=WI(this,i,e),n=nr(this.F),De(n,"RID",t),De(n,"CVER",22),this.D&&De(n,"X-HTTP-Session-Id",this.D),fc(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(zI(s)))+"&"+e:this.o&&Cm(n,this.o,s)),Sm(this.h,i),this.Ya&&De(n,"TYPE","init"),this.O?(De(n,"$req",e),De(n,"SID","null"),i.Z=!0,$d(i,n,null)):$d(i,n,e),this.G=2}}else this.G==3&&(t?Ly(this,t):this.i.length==0||LI(this.h)||Ly(this))};function Ly(t,e){var n;e?n=e.m:n=t.U++;const r=nr(t.F);De(r,"SID",t.I),De(r,"RID",n),De(r,"AID",t.T),fc(t,r),t.o&&t.s&&Cm(r,t.o,t.s),n=new uc(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=WI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Sm(t.h,n),$d(n,r,e)}function fc(t,e){t.ia&&mm(t.ia,function(n,r){De(e,r,n)}),t.l&&xI({},function(n,r){De(e,r,n)})}function WI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?St(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{mO(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function GI(t){t.g||t.u||(t.Z=1,mI(t.Ia,t),t.A=0)}function Rm(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ac(St(t.Ia,t),XI(t,t.A)),t.A++,!0)}Y.Ia=function(){if(this.u=null,YI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ac(St(this.eb,this),t)}};Y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Dt(10),Hl(this),YI(this))};function Nm(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function YI(t){t.g=new uc(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=nr(t.sa);De(e,"RID","rpc"),De(e,"SID",t.I),De(e,"CI",t.L?"0":"1"),De(e,"AID",t.T),De(e,"TYPE","xmlhttp"),fc(t,e),t.o&&t.s&&Cm(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ql(nr(e)),n.s=null,n.P=!0,SI(n,t)}Y.cb=function(){this.v!=null&&(this.v=null,Hl(this),Rm(this),Dt(19))};function Uu(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function QI(t,e){var n=null;if(t.g==e){Uu(t),Nm(t),t.g=null;var r=2}else if(jd(t.h,e))n=e.D,FI(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ul(),yt(r,new _I(r,n)),Kl(t)}else GI(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&bO(t,e)||r==2&&Rm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ki(t,5);break;case 4:ki(t,10);break;case 3:ki(t,6);break;default:ki(t,2)}}}function XI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ki(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=St(t.kb,t);n||(n=new Mi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||Mu(n,"https"),ql(n)),pO(n.toString(),r)}else Dt(2);t.G=0,t.l&&t.l.va(e),JI(t),KI(t)}Y.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function JI(t){if(t.G=0,t.la=[],t.l){const e=UI(t.h);(e.length!=0||t.i.length!=0)&&(Ty(t.la,e),Ty(t.la,t.i),t.h.i.length=0,dm(t.i),t.i.length=0),t.l.ua()}}function ZI(t,e,n){var r=n instanceof Mi?nr(n):new Mi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Fu(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Mi(null,void 0);r&&Mu(s,r),e&&(s.g=e),i&&Fu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&De(r,n,e),De(r,"VER",t.ma),fc(t,r),r}function e0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new hc({jb:!0})):new je(t.ra),e.Ka(t.H),e}function t0(){}Y=t0.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Ra=function(){};function Vu(){if(zs&&!(10<=Number(FD)))throw Error("Environmental error: no available transport.")}Vu.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){ct.call(this),this.g=new HI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Du(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Du(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fo(this)}bt(Qt,ct);Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Dt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ZI(t,null,t.V),Kl(t)};Qt.prototype.close=function(){xm(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wm(t),t=n);e.i.push(new hO(e.ab++,t)),e.G==3&&Kl(e)};Qt.prototype.M=function(){this.g.l=null,delete this.j,xm(this.g),delete this.g,Qt.X.M.call(this)};function n0(t){Em.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}bt(n0,Em);function r0(){Tm.call(this),this.status=1}bt(r0,Tm);function fo(t){this.g=t}bt(fo,t0);fo.prototype.xa=function(){yt(this.g,"a")};fo.prototype.wa=function(t){yt(this.g,new n0(t))};fo.prototype.va=function(t){yt(this.g,new r0)};fo.prototype.ua=function(){yt(this.g,"b")};Vu.prototype.createWebChannel=Vu.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;Vl.NO_ERROR=0;Vl.TIMEOUT=8;Vl.HTTP_ERROR=6;II.COMPLETE="complete";EI.EventType=cc;cc.OPEN="a";cc.CLOSE="b";cc.ERROR="c";cc.MESSAGE="d";ct.prototype.listen=ct.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var _O=function(){return new Vu},IO=function(){return Ul()},Hh=Vl,EO=II,TO=rs,My={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},SO=hc,Bc=EI,kO=je;const Fy="@firebase/firestore";/**
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
 */let mo="9.14.0";/**
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
 */const Ur=new bl("@firebase/firestore");function zd(){return Ur.logLevel}function AO(t){Ur.setLogLevel(t)}function x(t,...e){if(Ur.logLevel<=ge.DEBUG){const n=e.map(Pm);Ur.debug(`Firestore (${mo}): ${t}`,...n)}}function Ke(t,...e){if(Ur.logLevel<=ge.ERROR){const n=e.map(Pm);Ur.error(`Firestore (${mo}): ${t}`,...n)}}function Hs(t,...e){if(Ur.logLevel<=ge.WARN){const n=e.map(Pm);Ur.warn(`Firestore (${mo}): ${t}`,...n)}}function Pm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function ne(t,e){t||j()}function CO(t,e){t||j()}function U(t,e){return t}/**
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
 */class i0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class RO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NO{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new i0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new rt(e)}}class PO{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class DO{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new PO(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LO{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ne(typeof n.token=="string"),this.A=n.token,new OO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function MO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class s0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=MO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Ks(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function o0(t){return t+"\0"}/**
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
 */class Da{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Da.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Da?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Da{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const FO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Da{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return FO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class a0{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Hd(t){return t.fields.find(e=>e.kind===2)}function mi(t){return t.fields.filter(e=>e.kind!==2)}a0.UNKNOWN_ID=-1;class UO{constructor(e,n){this.fieldPath=e,this.kind=n}}class Bu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Bu(0,Xt.min())}}function c0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Xt(i,L.empty(),e)}function u0(t){return new Xt(t.readTime,t.key,-1)}class Xt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xt(te.min(),L.empty(),-1)}static max(){return new Xt(te.max(),L.empty(),-1)}}function Dm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const l0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class h0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==l0)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Wl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new st,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new na(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Om(r.target.error);this.P.reject(new na(e,i))}}static open(e,n,r,i){try{return new Wl(n,e.transaction(i,r))}catch(s){throw new na(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new BO(n)}}class mn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,mn.D(Ve())===12.2&&Ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),vi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!ba())return!1;if(mn.N())return!0;const e=Ve(),n=mn.D(e),r=0<n&&n<10,i=mn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new na(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new na(e,o))},i.onupgradeneeded=s=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Wl.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class VO{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return vi(this.U.delete())}}class na extends C{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ei(t){return t.name==="IndexedDbTransactionError"}class BO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(x("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),vi(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),vi(this.store.add(e))}get(e){return vi(this.store.get(e)).next(n=>(n===void 0&&(n=null),x("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),vi(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),vi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=Om(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new VO(a),u=n(a.primaryKey,a.value,c);if(u instanceof w){const l=u.catch(h=>(c.done(),w.reject(h)));r.push(l)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function vi(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Om(r.target.error);n(i)}})}let Uy=!1;function Om(t){const e=mn.D(Ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Uy||(Uy=!0,setTimeout(()=>{throw r},0)),r}}return t}class $O{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){x("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){ei(n)?x("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Zr(n)}await this.nt(6e4)})}}class qO{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(x("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=u0(s);Dm(o,r)>0&&(r=o)}),new Xt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */function Vy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */$t.at=-1;class ze{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $c(this.root,e,this.comparator,!1)}getReverseIterator(){return new $c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $c(this.root,e,this.comparator,!0)}}class $c{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ft.RED,this.left=i!=null?i:ft.EMPTY,this.right=s!=null?s:ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new By(this.data.getIterator())}getIteratorFrom(e){return new By(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class By{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function fs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new Ee(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */function jO(){return typeof atob<"u"}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ze(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const zO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(ne(!!t),typeof t=="string"){let e=0;const n=zO.exec(t);if(ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $i(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function Lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function f0(t){const e=t.mapValue.fields.__previous_value__;return Lm(e)?f0(e):e}function Oa(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class HO{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Br{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}function mc(t){return t==null}function La(t){return t===0&&1/t==-1/0}function m0(t){return typeof t=="number"&&Number.isInteger(t)&&!La(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},du={nullValue:"NULL_VALUE"};function qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lm(t)?4:p0(t)?9007199254740991:10:j()}function qn(t,e){if(t===e)return!0;const n=qi(t);if(n!==qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oa(t).isEqual(Oa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Vr(r.timestampValue),o=Vr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return $i(r.bytesValue).isEqual($i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=$e(r.doubleValue),o=$e(i.doubleValue);return s===o?La(s)===La(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Vy(s)!==Vy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!qn(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function Ma(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function $r(t,e){if(t===e)return 0;const n=qi(t),r=qi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=$e(i.integerValue||i.doubleValue),a=$e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $y(t.timestampValue,e.timestampValue);case 4:return $y(Oa(t),Oa(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(i,s){const o=$i(i),a=$i(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ae(o[c],a[c]);if(u!==0)return u}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ae($e(i.latitude),$e(s.latitude));return o!==0?o:ae($e(i.longitude),$e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=$r(o[c],a[c]);if(u)return u}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===xr.mapValue&&s===xr.mapValue)return 0;if(i===xr.mapValue)return 1;if(s===xr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ae(a[l],u[l]);if(h!==0)return h;const d=$r(o[a[l]],c[u[l]]);if(d!==0)return d}return ae(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function $y(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Vr(t),r=Vr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Ds(t){return Kd(t)}function Kd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Vr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Kd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Kd(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function ji(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wd(t){return!!t&&"integerValue"in t}function Fa(t){return!!t&&"arrayValue"in t}function qy(t){return!!t&&"nullValue"in t}function jy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fu(t){return!!t&&"mapValue"in t}function ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function p0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function KO(t){return"nullValue"in t?du:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ji(Br.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:j()}function WO(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ji(Br.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?xr:j()}function zy(t,e){const n=$r(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Hy(t,e){const n=$r(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ra(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ra(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){is(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(ra(this.value))}}function g0(t){const e=[];return is(t.fields,(n,r)=>{const i=new We([n]);if(fu(r)){const s=g0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class GO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Ky(t,e=null,n=[],r=[],i=null,s=null,o=null){return new GO(t,e,n,r,i,s,o)}function zi(t){const e=U(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ds(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.ht=n}return e.ht}function YO(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ds(r.value)}`;var r}).join(", ")}]`),mc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ds(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ds(n)).join(",")),`Target(${e})`}function pc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!rL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!qn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qy(t.startAt,e.startAt)&&Qy(t.endAt,e.endAt)}function $u(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function qu(t,e){return t.filters.filter(n=>n instanceof pt&&n.field.isEqual(e))}function Wy(t,e,n){let r=du,i=!0;for(const s of qu(t,e)){let o=du,a=!0;switch(s.op){case"<":case"<=":o=KO(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=du}zy({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];zy({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Gy(t,e,n){let r=xr,i=!0;for(const s of qu(t,e)){let o=xr,a=!0;switch(s.op){case">=":case">":o=WO(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=xr}Hy({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Hy({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}class pt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new QO(e,n,r):n==="array-contains"?new ZO(e,r):n==="in"?new eL(e,r):n==="not-in"?new tL(e,r):n==="array-contains-any"?new nL(e,r):new pt(e,n,r)}static lt(e,n,r){return n==="in"?new XO(e,r):new JO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft($r(n,this.value)):n!==null&&qi(this.value)===qi(n)&&this.ft($r(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class QO extends pt{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.ft(n)}}class XO extends pt{constructor(e,n){super(e,"in",n),this.keys=y0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JO extends pt{constructor(e,n){super(e,"not-in",n),this.keys=y0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function y0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class ZO extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fa(n)&&Ma(n.arrayValue,this.value)}}class eL extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ma(this.value.arrayValue,n)}}class tL extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ma(this.value.arrayValue,n)}}class nL extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ma(this.value.arrayValue,r))}}class qr{constructor(e,n){this.position=e,this.inclusive=n}}class Os{constructor(e,n="asc"){this.field=e,this.dir=n}}function rL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Yy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=$r(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function v0(t,e,n,r,i,s,o,a){return new lr(t,e,n,r,i,s,o,a)}function po(t){return new lr(t)}function Xy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fm(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Um(t){return t.collectionGroup!==null}function Ws(t){const e=U(t);if(e._t===null){e._t=[];const n=Fm(e),r=Mm(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Os(n)),e._t.push(new Os(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Os(We.keyField(),s))}}}return e._t}function jt(t){const e=U(t);if(!e.wt)if(e.limitType==="F")e.wt=Ky(e.path,e.collectionGroup,Ws(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ws(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Os(s.field,o))}const r=e.endAt?new qr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new qr(e.startAt.position,e.startAt.inclusive):null;e.wt=Ky(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function ju(t,e,n){return new lr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gc(t,e){return pc(jt(t),jt(e))&&t.limitType===e.limitType}function w0(t){return`${zi(jt(t))}|lt:${t.limitType}`}function Gd(t){return`Query(target=${YO(jt(t))}; limitType=${t.limitType})`}function Vm(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Yy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ws(n),r)||n.endAt&&!function(i,s,o){const a=Yy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ws(n),r))}(t,e)}function b0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _0(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=iL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iL(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?$r(a,c):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */function I0(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:La(e)?"-0":e}}function E0(t){return{integerValue:""+t}}function T0(t,e){return m0(e)?E0(e):I0(t,e)}/**
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
 */class Gl{constructor(){this._=void 0}}function sL(t,e,n){return t instanceof Gs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Hi?k0(t,e):t instanceof Ki?A0(t,e):function(r,i){const s=S0(r,i),o=Jy(s)+Jy(r.yt);return Wd(s)&&Wd(r.yt)?E0(o):I0(r.It,o)}(t,e)}function oL(t,e,n){return t instanceof Hi?k0(t,e):t instanceof Ki?A0(t,e):n}function S0(t,e){return t instanceof Ys?Wd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Gs extends Gl{}class Hi extends Gl{constructor(e){super(),this.elements=e}}function k0(t,e){const n=C0(e);for(const r of t.elements)n.some(i=>qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ki extends Gl{constructor(e){super(),this.elements=e}}function A0(t,e){let n=C0(e);for(const r of t.elements)n=n.filter(i=>!qn(i,r));return{arrayValue:{values:n}}}class Ys extends Gl{constructor(e,n){super(),this.It=e,this.yt=n}}function Jy(t){return $e(t.integerValue||t.doubleValue)}function C0(t){return Fa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class yc{constructor(e,n){this.field=e,this.transform=n}}function aL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Hi&&r instanceof Hi||n instanceof Ki&&r instanceof Ki?Ks(n.elements,r.elements,qn):n instanceof Ys&&r instanceof Ys?qn(n.yt,r.yt):n instanceof Gs&&r instanceof Gs}(t.transform,e.transform)}class cL{constructor(e,n){this.version=e,this.transformResults=n}}class Oe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yl{}function x0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yo(t.key,Oe.none()):new go(t.key,t.data,Oe.none());{const n=t.data,r=mt.empty();let i=new Ee(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hr(t.key,r,new Gt(i.toArray()),Oe.none())}}function uL(t,e,n){t instanceof go?function(r,i,s){const o=r.value.clone(),a=ev(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(r,i,s){if(!mu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ev(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(R0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ia(t,e,n,r){return t instanceof go?function(i,s,o,a){if(!mu(i.precondition,s))return o;const c=i.value.clone(),u=tv(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(i,s,o,a){if(!mu(i.precondition,s))return o;const c=tv(i.fieldTransforms,a,s),u=s.data;return u.setAll(R0(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,o){return mu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function lL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=S0(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Zy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ks(n,r,(i,s)=>aL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends Yl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hr extends Yl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function R0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ev(t,e,n){const r=new Map;ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,oL(o,a,n[i]))}return r}function tv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sL(s,o,e))}return r}class yo extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bm extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hL{constructor(e){this.count=e}}/**
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
 */var Ye,de;function N0(t){switch(t){default:return j();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function P0(t){if(t===void 0)return Ke("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ye.OK:return I.OK;case Ye.CANCELLED:return I.CANCELLED;case Ye.UNKNOWN:return I.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return I.INTERNAL;case Ye.UNAVAILABLE:return I.UNAVAILABLE;case Ye.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ye.NOT_FOUND:return I.NOT_FOUND;case Ye.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ye.ABORTED:return I.ABORTED;case Ye.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ye.DATA_LOSS:return I.DATA_LOSS;default:return j()}}(de=Ye||(Ye={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return d0(this.inner)}size(){return this.innerSize}}/**
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
 */const dL=new ze(L.comparator);function qt(){return dL}const D0=new ze(L.comparator);function jo(...t){let e=D0;for(const n of t)e=e.insert(n.key,n);return e}function O0(t){let e=D0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dn(){return sa()}function L0(){return sa()}function sa(){return new ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const fL=new ze(L.comparator),mL=new Ee(L.comparator);function ce(...t){let e=mL;for(const n of t)e=e.add(n);return e}const pL=new Ee(ae);function Ql(){return pL}/**
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
 */class vc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vc(te.min(),i,Ql(),qt(),ce())}}class wc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wc(r,n,ce(),ce(),ce())}}/**
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
 */class pu{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class M0{constructor(e,n){this.targetId=e,this.At=n}}class F0{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nv{constructor(){this.Rt=0,this.bt=iv(),this.Pt=Ze.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ce(),n=ce(),r=ce();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new wc(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=iv()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class gL{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=qt(),this.qt=rv(),this.Kt=new Ee(ae)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if($u(s))if(r===0){const o=new L(s.path);this.jt(n,o,ke.newNoDocument(o,te.min()))}else ne(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&$u(a.target)){const c=new L(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,ke.newNoDocument(c,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ce();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new vc(e,n,this.Kt,this.Ut,r);return this.Ut=qt(),this.qt=rv(),this.Kt=new Ee(ae),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new nv,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ee(ae),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new nv),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function rv(){return new ze(L.comparator)}function iv(){return new ze(L.comparator)}/**
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
 */const yL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class wL{constructor(e,n){this.databaseId=e,this.gt=n}}function Ua(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U0(t,e){return t.gt?e.toBase64():e.toUint8Array()}function bL(t,e){return Ua(t,e.toTimestamp())}function ot(t){return ne(!!t),te.fromTimestamp(function(e){const n=Vr(e);return new Le(n.seconds,n.nanos)}(t))}function $m(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function V0(t){const e=fe.fromString(t);return ne(W0(e)),e}function Va(t,e){return $m(t.databaseId,e.path)}function Fn(t,e){const n=V0(e);if(n.get(1)!==t.databaseId.projectId)throw new C(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L($0(n))}function Yd(t,e){return $m(t.databaseId,e)}function B0(t){const e=V0(t);return e.length===4?fe.emptyPath():$0(e)}function Ba(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $0(t){return ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sv(t,e,n){return{name:Va(t,e),fields:n.value.mapValue.fields}}function q0(t,e,n){const r=Fn(t,e.name),i=ot(e.updateTime),s=new mt({mapValue:{fields:e.fields}}),o=ke.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function _L(t,e){return"found"in e?function(n,r){ne(!!r.found),r.found.name,r.found.updateTime;const i=Fn(n,r.found.name),s=ot(r.found.updateTime),o=new mt({mapValue:{fields:r.found.fields}});return ke.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){ne(!!r.missing),ne(!!r.readTime);const i=Fn(n,r.missing),s=ot(r.readTime);return ke.newNoDocument(i,s)}(t,e):j()}function IL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.gt?(ne(u===void 0||typeof u=="string"),Ze.fromBase64String(u||"")):(ne(u===void 0||u instanceof Uint8Array),Ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:P0(c.code);return new C(u,c.message||"")}(o);n=new F0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fn(t,r.document.name),s=ot(r.document.updateTime),o=new mt({mapValue:{fields:r.document.fields}}),a=ke.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new pu(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fn(t,r.document),s=r.readTime?ot(r.readTime):te.min(),o=ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fn(t,r.document),s=r.removedTargetIds||[];n=new pu([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new hL(i),o=r.targetId;n=new M0(o,s)}}return n}function $a(t,e){let n;if(e instanceof go)n={update:sv(t,e.key,e.value)};else if(e instanceof yo)n={delete:Va(t,e.key)};else if(e instanceof hr)n={update:sv(t,e.key,e.data),updateMask:xL(e.fieldMask)};else{if(!(e instanceof Bm))return j();n={verify:Va(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Gs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Hi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ki)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:bL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function Qd(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Oe.updateTime(ot(i.updateTime)):i.exists!==void 0?Oe.exists(i.exists):Oe.none()}(e.currentDocument):Oe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)ne(o.setToServerValue==="REQUEST_TIME"),a=new Gs;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Hi(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ki(u)}else"increment"in o?a=new Ys(s,o.increment):j();const c=We.fromServerFormat(o.fieldPath);return new yc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Fn(t,e.update.name),s=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Gt(c.map(u=>We.fromServerFormat(u)))}(e.updateMask);return new hr(i,s,o,n,r)}return new go(i,s,n,r)}if(e.delete){const i=Fn(t,e.delete);return new yo(i,n)}if(e.verify){const i=Fn(t,e.verify);return new Bm(i,n)}return j()}function EL(t,e){return t&&t.length>0?(ne(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?ot(r.updateTime):ot(i);return s.isEqual(te.min())&&(s=ot(i)),new cL(s,r.transformResults||[])}(n,e))):[]}function j0(t,e){return{documents:[Yd(t,e.path)]}}function z0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Yd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(jy(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NAN"}};if(qy(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(jy(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NOT_NAN"}};if(qy(h.value))return{unaryFilter:{field:ms(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(h.field),op:kL(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ms(l.field),direction:SL(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,u){return c.gt||mc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function H0(t){let e=B0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ne(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=K0(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Os(Is(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,mc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new qr(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new qr(d,h)}(n.endAt)),v0(e,i,o,s,a,"F",c,u)}function TL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function K0(t){return t?t.unaryFilter!==void 0?[CL(t)]:t.fieldFilter!==void 0?[AL(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>K0(e)).reduce((e,n)=>e.concat(n)):j():[]}function SL(t){return yL[t]}function kL(t){return vL[t]}function ms(t){return{fieldPath:t.canonicalString()}}function Is(t){return We.fromServerFormat(t.fieldPath)}function AL(t){return pt.create(Is(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function CL(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Is(t.unaryFilter.field);return pt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Is(t.unaryFilter.field);return pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Is(t.unaryFilter.field);return pt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Is(t.unaryFilter.field);return pt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function xL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function W0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Ot(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ov(e)),e=RL(t.get(n),e);return ov(e)}function RL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function ov(t){return t+""}function On(t){const e=t.length;if(ne(e>=2),e===2)return ne(t.charAt(0)===""&&t.charAt(1)===""),fe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&j(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:j()}s=o+2}return new fe(r)}/**
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
 */const av=["userId","batchId"];/**
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
 */function gu(t,e){return[t,Ot(e)]}function G0(t,e,n){return[t,Ot(e),n]}const NL={},PL=["prefixPath","collectionGroup","readTime","documentId"],DL=["prefixPath","collectionGroup","documentId"],OL=["collectionGroup","readTime","prefixPath","documentId"],LL=["canonicalId","targetId"],ML=["targetId","path"],FL=["path","targetId"],UL=["collectionId","parent"],VL=["indexId","uid"],BL=["uid","sequenceNumber"],$L=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],qL=["indexId","uid","orderedDocumentKey"],jL=["userId","collectionPath","documentId"],zL=["userId","collectionPath","largestBatchId"],HL=["userId","collectionGroup","largestBatchId"],Y0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],KL=[...Y0,"documentOverlays"],Q0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],X0=Q0,WL=[...X0,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Xd extends h0{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function lt(t,e){const n=U(t);return mn.M(n.ie,e)}/**
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
 */class qm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&uL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=L0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=x0(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>Zy(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>Zy(n,r))}}class jm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ne(e.mutations.length===r.length);let i=fL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jm(e,n,r,i)}}/**
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
 */class zm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class J0{constructor(e){this.re=e}}function GL(t,e){let n;if(e.document)n=q0(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=Gi(e.noDocument.readTime);n=ke.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return j();{const r=L.fromSegments(e.unknownDocument.path),i=Gi(e.unknownDocument.version);n=ke.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Le(r[0],r[1]);return te.fromTimestamp(i)}(e.readTime)),n}function cv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:zu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Va(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Ua(i,s.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Wi(e.version)};else{if(!e.isUnknownDocument())return j();r.unknownDocument={path:n.path.toArray(),version:Wi(e.version)}}return r}function zu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Wi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Gi(t){const e=new Le(t.seconds,t.nanoseconds);return te.fromTimestamp(e)}function wi(t,e){const n=(e.baseMutations||[]).map(s=>Qd(t.re,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Qd(t.re,s)),i=Le.fromMillis(e.localWriteTimeMs);return new qm(e.batchId,i,n,r)}function zo(t){const e=Gi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Gi(t.lastLimboFreeSnapshotVersion):te.min();let r;var i;return t.query.documents!==void 0?(ne((i=t.query).documents.length===1),r=jt(po(B0(i.documents[0])))):r=function(s){return jt(H0(s))}(t.query),new Dr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Ze.fromBase64String(t.resumeToken))}function Z0(t,e){const n=Wi(e.snapshotVersion),r=Wi(e.lastLimboFreeSnapshotVersion);let i;i=$u(e.target)?j0(t.re,e.target):z0(t.re,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:zi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Hm(t){const e=H0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ju(e,e.limit,"L"):e}function Kh(t,e){return new zm(e.largestBatchId,Qd(t.re,e.overlayMutation))}function uv(t,e){const n=e.path.lastSegment();return[t,Ot(e.path.popLast()),n]}function lv(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Wi(r.readTime),documentKey:Ot(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class YL{getBundleMetadata(e,n){return hv(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Gi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return hv(e).put({bundleId:(r=n).id,createTime:Wi(ot(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return dv(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Hm(i.bundledQuery),readTime:Gi(i.readTime)};var i})}saveNamedQuery(e,n){return dv(e).put(function(r){return{name:r.name,readTime:Wi(ot(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function hv(t){return lt(t,"bundles")}function dv(t){return lt(t,"namedQueries")}/**
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
 */class Xl{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const r=n.uid||"";return new Xl(e,r)}getOverlay(e,n){return No(e).get(uv(this.userId,n)).next(r=>r?Kh(this.It,r):null)}getOverlays(e,n){const r=Dn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new zm(n,o);i.push(this.ue(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ot(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(No(e).Y("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Dn(),s=Ot(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return No(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Kh(this.It,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Dn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return No(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Kh(this.It,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ue(e,n){return No(e).put(function(r,i,s){const[o,a,c]=uv(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:$a(r.re,s.mutation)}}(this.It,this.userId,n))}}function No(t){return lt(t,"documentOverlays")}/**
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
 */class bi{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe($e(e.integerValue));else if("doubleValue"in e){const r=$e(e.doubleValue);isNaN(r)?this.le(n,13):(this.le(n,15),La(r)?n.fe(0):n.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(n,20),typeof r=="string"?n.de(r):(n.de(`${r.seconds||""}`),n.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me($i(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(n,45),n.fe(r.latitude||0),n.fe(r.longitude||0)}else"mapValue"in e?p0(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):j()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const r=e.fields||{};this.le(n,55);for(const i of Object.keys(r))this._e(i,n),this.ae(r[i],n)}pe(e,n){const r=e.values||[];this.le(n,50);for(const i of r)this.ae(i,n)}ge(e,n){this.le(n,37),L.fromName(e).path.forEach(r=>{this.le(n,60),this.Ie(r,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}bi.Te=new bi;function QL(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function fv(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=QL(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class XL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.ve()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=n.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=n.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const n=this.Ce(e),r=fv(n);this.xe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ne(e){const n=this.Ce(e),r=fv(n);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ae(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class JL{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class ZL{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class Po{constructor(){this.Be=new XL,this.Le=new JL(this.Be),this.Ue=new ZL(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class _i{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new _i(this.indexId,this.documentKey,this.arrayValue,r)}}function li(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=mv(t.arrayValue,e.arrayValue),n!==0?n:(n=mv(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function mv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class eM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const r=n;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const n=Hd(e);if(n!==void 0&&!this.ze(n))return!1;const r=mi(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.je!==void 0){const o=r[i];if(!this.He(this.je,o)||!this.Je(this.Ge[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */class tM{constructor(){this.Ye=new Km}addToCollectionParentIndex(e,n){return this.Ye.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Xt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Km{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ee(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(fe.comparator)).toArray()}}/**
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
 */const qc=new Uint8Array(0);class nM{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new Km,this.Ze=new ti(r=>zi(r),(r,i)=>pc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:Ot(i)};return pv(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[o0(n),""],!1,!0);return pv(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(On(o.parent))}return r})}addFieldIndex(e,n){const r=jc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Oo(e);return s.next(a=>{o.put(lv(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=jc(e),i=Oo(e),s=Do(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Do(e);let i=!0;const s=new Map;return w.forEach(this.tn(n),o=>this.en(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ce();const a=[];return w.forEach(s,(c,u)=>{var l;x("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`} to execute ${zi(n)}`);const h=function(E,R){const F=Hd(R);if(F===void 0)return null;for(const z of qu(E,F.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(u,c),d=function(E,R){const F=new Map;for(const z of mi(R))for(const ee of qu(E,z.fieldPath))switch(ee.op){case"==":case"in":F.set(z.fieldPath.canonicalString(),ee.value);break;case"not-in":case"!=":return F.set(z.fieldPath.canonicalString(),ee.value),Array.from(F.values())}return null}(u,c),f=function(E,R){const F=[];let z=!0;for(const ee of mi(R)){const Q=ee.kind===0?Wy(E,ee.fieldPath,E.startAt):Gy(E,ee.fieldPath,E.startAt);F.push(Q.value),z&&(z=Q.inclusive)}return new qr(F,z)}(u,c),p=function(E,R){const F=[];let z=!0;for(const ee of mi(R)){const Q=ee.kind===0?Gy(E,ee.fieldPath,E.endAt):Wy(E,ee.fieldPath,E.endAt);F.push(Q.value),z&&(z=Q.inclusive)}return new qr(F,z)}(u,c),y=this.nn(c,u,f),b=this.nn(c,u,p),v=this.sn(c,u,d),_=this.rn(c.indexId,h,y,f.inclusive,b,p.inclusive,v);return w.forEach(_,E=>r.J(E,n.limit).next(R=>{R.forEach(F=>{const z=L.fromSegments(F.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return w.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.on(n[h/u]):qc,f=this.un(e,d,r[h%u],i),p=this.cn(e,d,s[h%u],o),y=a.map(b=>this.un(e,d,b,!0));l.push(...this.createRange(f,p,y))}return l}un(e,n,r,i){const s=new _i(e,L.empty(),n,r);return i?s:s.Ke()}cn(e,n,r,i){const s=new _i(e,L.empty(),n,r);return i?s.Ke():s}en(e,n){const r=new eM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return w.forEach(this.tn(n),i=>this.en(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new Ee(We.comparator),c=!1;for(const u of o.filters){const l=u;l.field.isKeyField()||(l.op==="array-contains"||l.op==="array-contains-any"?c=!0:a=a.add(l.field))}for(const u of o.orderBy)u.field.isKeyField()||(a=a.add(u.field));return a.size+(c?1:0)}(i)&&(r=1):r=0})).next(()=>r)}an(e,n){const r=new Po;for(const i of mi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);bi.Te.ce(s,o)}return r.$e()}on(e){const n=new Po;return bi.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const r=new Po;return bi.Te.ce(ji(this.databaseId,n),r.qe(function(i){const s=mi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}sn(e,n,r){if(r===null)return[];let i=[];i.push(new Po);let s=0;for(const o of mi(e)){const a=r[s++];for(const c of i)if(this.ln(n,o.fieldPath)&&Fa(a))i=this.fn(i,o,a);else{const u=c.qe(o.kind);bi.Te.ce(a,u)}}return this.dn(i)}nn(e,n,r){return this.sn(e,n,r.position)}dn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Po;c.seed(a.$e()),bi.Te.ce(o,c.qe(n.kind)),s.push(c)}return s}ln(e,n){return!!e.filters.find(r=>r instanceof pt&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=jc(e),i=Oo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Bu(l.sequenceNumber,new Xt(Gi(l.readTime),new L(On(l.documentKey)),l.largestBatchId)):Bu.empty(),d=u.fields.map(([f,p])=>new UO(We.fromServerFormat(f),p));return new a0(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ae(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=jc(e),s=Oo(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,c=>s.put(lv(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,c=>this.wn(e,i,c).next(u=>{const l=this.mn(s,c);return u.isEqual(l)?w.resolve():this.gn(e,s,c,u,l)}))))})}yn(e,n,r,i){return Do(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(r,n.key),documentKey:n.key.path.toArray()})}pn(e,n,r,i){return Do(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Do(e);let s=new Ee(li);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,n)])},(o,a)=>{s=s.add(new _i(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}mn(e,n){let r=new Ee(li);const i=this.an(n,e);if(i==null)return r;const s=Hd(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Fa(o))for(const a of o.arrayValue.values||[])r=r.add(new _i(n.indexId,e.key,this.on(a),i))}else r=r.add(new _i(n.indexId,e.key,qc,i));return r}gn(e,n,r,i,s){x("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let p=fs(d),y=fs(f);for(;p||y;){let b=!1,v=!1;if(p&&y){const _=u(p,y);_<0?v=!0:_>0&&(b=!0)}else p!=null?v=!0:b=!0;b?(l(y),y=fs(f)):v?(h(p),p=fs(d)):(p=fs(d),y=fs(f))}}(i,s,li,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.pn(e,n,r,a))}),w.waitFor(o)}_n(e){let n=1;return Oo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>li(o,a)).filter((o,a,c)=>!a||li(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=li(o,e),c=li(o,n);if(a===0)i[0]=e.Ke();else if(a>0&&c<0)i.push(o),i.push(o.Ke());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,qc,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,qc,[]]));return s}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(gv)}getMinOffset(e,n){return w.mapArray(this.tn(n),r=>this.en(e,r).next(i=>i||j())).next(gv)}}function pv(t){return lt(t,"collectionParents")}function Do(t){return lt(t,"indexEntries")}function jc(t){return lt(t,"indexConfiguration")}function Oo(t){return lt(t,"indexState")}function gv(t){ne(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Dm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Xt(e.readTime,e.documentKey,n)}/**
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
 */const yv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Vt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function eE(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{ne(a===1)}));const u=[];for(const l of n.mutations){const h=G0(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return w.waitFor(s).next(()=>u)}function Hu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw j();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(41943040,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);class Jl{constructor(e,n,r,i){this.userId=e,this.It=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static oe(e,n,r,i){ne(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Jl(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return _r(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ws(e),o=_r(e);return o.add({}).next(a=>{ne(typeof a=="number");const c=new qm(a,n,r,i),u=function(d,f,p){const y=p.baseMutations.map(v=>$a(d.re,v)),b=p.mutations.map(v=>$a(d.re,v));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:y,mutations:b}}(this.It,this.userId,c),l=[];let h=new Ee((d,f)=>ae(d.canonicalString(),f.canonicalString()));for(const d of i){const f=G0(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,NL))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),w.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return _r(e).get(n).next(r=>r?(ne(r.userId===this.userId),wi(this.It,r)):null)}Tn(e,n){return this.In[n]?w.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return _r(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(ne(a.batchId>=r),s=wi(this.It,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return _r(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return _r(e).W("userMutationsIndex",n).next(r=>r.map(i=>wi(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=gu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ws(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=On(l);if(u===this.userId&&n.path.isEqual(d))return _r(e).get(h).next(f=>{if(!f)throw j();ne(f.userId===this.userId),s.push(wi(this.It,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(ae);const i=[];return n.forEach(s=>{const o=gu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=ws(e).Z({range:a},(u,l,h)=>{const[d,f,p]=u,y=On(f);d===this.userId&&s.path.isEqual(y)?r=r.add(p):h.done()});i.push(c)}),w.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=gu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ee(ae);return ws(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,p=On(d);h===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):l.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(_r(e).get(s).next(o=>{if(o===null)throw j();ne(o.userId===this.userId),r.push(wi(this.It,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return eE(e.ie,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return ws(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=On(s[1]);i.push(c)}else a.done()}).next(()=>{ne(i.length===0)})})}containsKey(e,n){return tE(e,this.userId,n)}Rn(e){return nE(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function tE(t,e,n){const r=gu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ws(t).Z({range:s,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function _r(t){return lt(t,"mutations")}function ws(t){return lt(t,"documentMutations")}function nE(t){return lt(t,"mutationQueues")}/**
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
 */class Yi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Yi(0)}static vn(){return new Yi(-1)}}/**
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
 */class rM{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Yi(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>te.fromTimestamp(new Le(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ps(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(ne(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ps(e).Z((o,a)=>{const c=zo(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ps(e).Z((r,i)=>{const s=zo(i);n(s)})}Vn(e){return vv(e).get("targetGlobalKey").next(n=>(ne(n!==null),n))}Sn(e,n){return vv(e).put("targetGlobalKey",n)}Dn(e,n){return ps(e).put(Z0(this.It,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=zi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ps(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=zo(a);pc(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=kr(e);return n.forEach(o=>{const a=Ot(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=kr(e);return w.forEach(n,s=>{const o=Ot(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=kr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=kr(e);let s=ce();return i.Z({range:r,X:!0},(o,a,c)=>{const u=On(o[1]),l=new L(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=Ot(n.path),i=IDBKeyRange.bound([r],[o0(r)],!1,!0);let s=0;return kr(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}se(e,n){return ps(e).get(n).next(r=>r?zo(r):null)}}function ps(t){return lt(t,"targets")}function vv(t){return lt(t,"targetGlobal")}function kr(t){return lt(t,"targetDocuments")}/**
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
 */function wv([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class iM{constructor(e){this.xn=e,this.buffer=new Ee(wv),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();wv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ei(n)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Zr(n)}await this.Fn(3e5)})}}class oM{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve($t.at);const r=new iM(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(yv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yv):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),zd()<=ge.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
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
 */class aM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new oM(r,i)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return zc(e,r)}removeReference(e,n,r){return zc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return zc(e,n)}Gn(e,n){return function(r,i){let s=!1;return nE(r).tt(o=>tE(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),kr(e).delete([0,Ot(o.path)])))});i.push(c)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return zc(e,n)}Kn(e,n){const r=kr(e);let i,s=$t.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==$t.at&&n(new L(On(i)),s),s=u,i=c):s=$t.at}).next(()=>{s!==$t.at&&n(new L(On(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function zc(t,e){return kr(t).put(function(n,r){return{targetId:0,path:Ot(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class rE{constructor(){this.changes=new ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cM{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return hi(e).put(r)}removeEntry(e,n,r){return hi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],zu(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=ke.newInvalidDocument(n);return hi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Lo(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:ke.newInvalidDocument(n)};return hi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Lo(n))},(i,s)=>{r={document:this.jn(n,s),size:Hu(s)}}).next(()=>r)}getEntries(e,n){let r=qt();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=qt(),i=new ze(L.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,Hu(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return w.resolve();let i=new Ee(Iv);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Lo(i.first()),Lo(i.last())),o=i.getIterator();let a=o.getNext();return hi(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Iv(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(Lo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),zu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hi(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=qt();for(const c of o){const u=this.jn(L.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=qt();const o=_v(n,r),a=_v(n,Xt.max());return hi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new uM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return bv(e).get("remoteDocumentGlobalKey").next(n=>(ne(!!n),n))}Qn(e,n){return bv(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=GL(this.It,n);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return ke.newInvalidDocument(e)}}function iE(t){return new cM(t)}class uM extends rE{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new ti(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ee((s,o)=>ae(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=cv(this.Yn.It,o);i=i.add(s.path.popLast());const u=Hu(c);r+=u-a.size,n.push(this.Yn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=cv(this.Yn.It,o.convertToNoDocument(te.min()));n.push(this.Yn.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function bv(t){return lt(t,"remoteDocumentGlobal")}function hi(t){return lt(t,"remoteDocumentsV14")}function Lo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function _v(t,e){const n=e.documentKey.path.toArray();return[t,zu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Iv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ae(n[s],r[s]),i)return i;return i=ae(n.length,r.length),i||(i=ae(n[n.length-2],r[r.length-2]),i||ae(n[n.length-1],r[r.length-1]))}/**
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
 */class lM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class sE{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ia(r.mutation,i,Gt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Dn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=jo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qt();const o=sa(),a=sa();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof hr)?s=s.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),ia(l.mutation,u,l.mutation.getFieldMask(),Le.now()))}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new lM(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=sa();let i=new ze((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Gt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||ce()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=L0();l.forEach(d=>{if(!s.has(d)){const f=x0(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Um(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Dn());let a=-1,c=s;return o.next(u=>w.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?w.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ce())).next(l=>({batchId:a,changes:O0(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=jo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=jo();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const c=function(u,l){return new lr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ke.newInvalidDocument(u)))});let o=jo();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&ia(u.mutation,c,Gt.empty(),Le.now()),Vm(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):w.resolve(ke.newInvalidDocument(n))}}/**
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
 */class hM{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:ot(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Hm(r.bundledQuery),readTime:ot(r.readTime)}}(n)),w.resolve()}}/**
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
 */class dM{constructor(){this.overlays=new ze(L.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Dn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ze((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Dn(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Dn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return w.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zm(n,r));let s=this.es.get(n);s===void 0&&(s=ce(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Wm{constructor(){this.ns=new Ee(nt.ss),this.rs=new Ee(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new nt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new nt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new fe([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new fe([])),r=new nt(n,e),i=new nt(n,e+1);let s=ce();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||ae(e._s,n._s)}static os(e,n){return ae(e._s,n._s)||L.comparator(e.key,n.key)}}/**
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
 */class fM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ee(nt.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(ae);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),w.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new nt(new L(s),0);let a=new Ee(ae);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return w.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new nt(n,0),i=this.gs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mM{constructor(e){this.Es=e,this.docs=new ze(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let r=qt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ke.newInvalidDocument(i))}),w.resolve(r)}getAllFromCollection(e,n,r){let i=qt();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Dm(u0(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,i){j()}As(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pM(this)}getSize(e){return w.resolve(this.size)}}class pM extends rE{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class gM{constructor(e){this.persistence=e,this.Rs=new ti(n=>zi(n),pc),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wm,this.targetCount=0,this.vs=Yi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
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
 */class oE{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new $t(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new gM(this),this.indexManager=new tM,this.remoteDocumentCache=function(r){return new mM(r)}(r=>this.referenceDelegate.xs(r)),this.It=new J0(n),this.Ns=new hM(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new fM(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new yM(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return w.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class yM extends h0{constructor(e){super(),this.currentSequenceNumber=e}}class Zl{constructor(e){this.persistence=e,this.Fs=new Wm,this.$s=null}static Bs(e){return new Zl(e)}get Ls(){if(this.$s)return this.$s;throw j()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class vM{constructor(e){this.It=e}$(e,n,r,i){const s=new Wl("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",av,{unique:!0}),a.createObjectStore("documentMutations")}(e),Ev(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Ev(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",av,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:jL});c.createIndex("collectionPathOverlayIndex",zL,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",HL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:PL});c.createIndex("documentKeyIndex",DL),c.createIndex("collectionGroupIndex",OL)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:VL}).createIndex("sequenceNumberIndex",BL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:$L}).createIndex("documentKeyIndex",qL,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Hu(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,c=>{ne(c.userId===s.userId);const u=wi(this.It,c);return eE(e,s.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new fe(o),u=function(l){return[0,Ot(l)]}(c);s.push(n.get(u).next(l=>l?w.resolve():(h=>n.put({targetId:0,path:Ot(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:UL});const r=n.store("collectionParents"),i=new Km,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ot(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new fe(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=On(a);return s(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=zo(i),o=Z0(this.It,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new L(fe.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):j()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>w.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=iE(this.It),s=new oE(Zl.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ce();wi(this.It,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),w.forEach(a,(c,u)=>{const l=new rt(u),h=Xl.oe(this.It,l),d=s.getIndexManager(l),f=Jl.oe(l,this.It,d,s.referenceDelegate);return new sE(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Xd(n,$t.at),c).next()})})}}function Ev(t){t.createObjectStore("targetDocuments",{keyPath:ML}).createIndex("documentTargetsIndex",FL,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",LL,{unique:!0}),t.createObjectStore("targetGlobal")}const Wh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Gm{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Gm.C())throw new C(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new aM(this,i),this.ii=n+"main",this.It=new J0(c),this.ri=new mn(this.ii,this.Xs,new vM(this.It)),this.Cs=new rM(this.referenceDelegate,this.It),this.remoteDocumentCache=iE(this.It),this.Ns=new YL,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&Ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(I.FAILED_PRECONDITION,Wh);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new $t(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Hc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(ei(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Mo(e).get("owner").next(n=>w.resolve(this.mi(n)))}gi(e){return Hc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=lt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?w.resolve(!0):Mo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new C(I.FAILED_PRECONDITION,Wh);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hc(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&x("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Xd(e,$t.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Hc(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Jl.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new nM(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Xl.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){x("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?WL:o===14?X0:o===13?Q0:o===12?KL:o===11?Y0:void j();var o;let a;return this.ri.runTransaction(e,i,s,c=>(a=new Xd(c,this.Ss?this.Ss.next():$t.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw Ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new C(I.FAILED_PRECONDITION,l0);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Mo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(I.FAILED_PRECONDITION,Wh)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Mo(e).put("owner",n)}static C(){return mn.C()}_i(e){const n=Mo(e);return n.get("owner").next(r=>this.mi(r)?(x("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),eC()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ke("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Mo(t){return lt(t,"owner")}function Hc(t){return lt(t,"clientMetadata")}function Ym(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Qm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qm(e,n.fromCache,r,i)}}/**
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
 */class aE{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Xy(n))return w.resolve(null);let r=jt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ju(n,null,"F"),r=jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,ju(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,r,i){return Xy(n)||i.isEqual(te.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(zd()<=ge.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gd(n)),this.Bi(e,o,n,c0(i,-1)))})}Fi(e,n){let r=new Ee(_0(e));return n.forEach((i,s)=>{Vm(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return zd()<=ge.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Gd(n)),this.Ni.getDocumentsMatchingQuery(e,n,Xt.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class wM{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ze(ae),this.qi=new ti(s=>zi(s),pc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sE(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function cE(t,e,n,r){return new wM(t,e,n,r)}async function uE(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ce();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function bM(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=w.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const y=c.docVersions.get(f);ne(y!==null),p.version.compareTo(y)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lE(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function _M(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ze.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(p,y,b){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(n.Cs.updateTargetData(s,f))});let c=qt(),u=ce();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(hE(s,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(te.min())){const l=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ui=i,s))}function hE(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qt();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function IM(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qs(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Dr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Xs(t,e,n){const r=U(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ei(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Ku(t,e,n){const r=U(t);let i=te.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=U(a),h=l.qi.get(u);return h!==void 0?w.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(r,o,jt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:ce())).next(a=>(mE(r,b0(e),a),{documents:a,Hi:s})))}function dE(t,e){const n=U(t),r=U(n.Cs),i=n.Ui.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.se(s,e).next(o=>o?o.target:null))}function fE(t,e){const n=U(t),r=n.Ki.get(e)||te.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,c0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(mE(n,e,i),i))}function mE(t,e,n){let r=t.Ki.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function EM(t,e,n,r){const i=U(t);let s=ce(),o=qt();for(const u of n){const l=e.Ji(u.metadata.name);u.document&&(s=s.add(l));const h=e.Yi(u);h.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await Qs(i,function(u){return jt(po(fe.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>hE(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Cs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function TM(t,e,n=ce()){const r=await Qs(t,jt(Hm(e.bundledQuery))),i=U(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ot(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(Ze.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function Tv(t,e){return`firestore_clients_${t}_${e}`}function Sv(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Gh(t,e){return`firestore_targets_${t}_${e}`}class Wu{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new Wu(e,n,i.state,s):(Ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oa{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new oa(e,r.state,i):(Ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Gu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ql();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=m0(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Gu(e,s):(Ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Xm{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Xm(n.clientId,n.onlineState):(Ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Jd{constructor(){this.activeTargetIds=Ql()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yh{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new ze(ae),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=Tv(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Jd),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(Tv(this.persistenceKey,r));if(i){const s=Gu.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Gh(this.persistenceKey,e));if(r){const i=oa.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Gh(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return x("SharedClientState","READ",e,n),n}setItem(e,n){x("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(x("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=$t.at;if(i!=null)try{const o=JSON.parse(i);ne(typeof o=="number"),s=o}catch(o){Ke("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==$t.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new Wu(this.currentUser,e,n,r),s=Sv(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=Sv(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=Gh(this.persistenceKey,e),s=new oa(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return Gu.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Wu.Zi(new rt(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return oa.Zi(i,n)}yr(e){return Xm.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=Ql();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class pE{constructor(){this.Lr=new Jd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Jd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SM{qr(e){}shutdown(){}}/**
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
 */class kv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const kM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class AM{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class CM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);x("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(c=>(x("RestConnection","Received: ",c),c),c=>{throw Hs("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+mo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=kM[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new kO;a.setWithCredentials(!0),a.listenOnce(EO.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Hh.NO_ERROR:const l=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Hh.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new C(I.DEADLINE_EXCEEDED,"Request time out"));break;case Hh.HTTP_ERROR:const h=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=(u=d)===null||u===void 0?void 0:u.error;if(f&&f.status&&f.message){const p=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(b)>=0?b:I.UNKNOWN}(f.status);o(new C(p,f.message))}else o(new C(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(I.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=_O(),o=IO(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new SO({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=i.join("");x("Connection","Creating WebChannel: "+c,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new AM({Hr:p=>{h?x("Connection","Not sending because WebChannel is closed:",p):(l||(x("Connection","Opening WebChannel transport."),u.open(),l=!0),x("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),f=(p,y,b)=>{p.listen(y,v=>{try{b(v)}catch(_){setTimeout(()=>{throw _},0)}})};return f(u,Bc.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),f(u,Bc.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),d.io())}),f(u,Bc.EventType.ERROR,p=>{h||(h=!0,Hs("Connection","WebChannel transport errored:",p),d.io(new C(I.UNAVAILABLE,"The operation could not be completed")))}),f(u,Bc.EventType.MESSAGE,p=>{var y;if(!h){const b=p.data[0];ne(!!b);const v=b,_=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(_){x("Connection","WebChannel received error:",_);const E=_.status;let R=function(z){const ee=Ye[z];if(ee!==void 0)return P0(ee)}(E),F=_.message;R===void 0&&(R=I.INTERNAL,F="Unknown error status: "+E+" with message "+_.message),h=!0,d.io(new C(R,F)),u.close()}else x("Connection","WebChannel received:",b),d.ro(b)}}),f(o,TO.STAT_EVENT,p=>{p.stat===My.PROXY?x("Connection","Detected buffering proxy"):p.stat===My.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function gE(){return typeof window<"u"?window:null}function yu(){return typeof document<"u"?document:null}/**
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
 */function bc(t){return new wL(t,!0)}class Jm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class yE{constructor(e,n,r,i,s,o,a,c){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Jm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new C(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xM extends yE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=IL(this.It,e),r=function(i){if(!("targetChange"in i))return te.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?ot(s.readTime):te.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Ba(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=$u(a)?{documents:j0(i,a)}:{query:z0(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=U0(i,s.resumeToken):s.snapshotVersion.compareTo(te.min())>0&&(o.readTime=Ua(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=TL(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Ba(this.It),n.removeTarget=e,this.Bo(n)}}class RM extends yE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=EL(e.writeResults,e.commitTime),r=ot(e.commitTime);return this.listener.Zo(r,n)}return ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ba(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$a(this.It,r))};this.Bo(n)}}/**
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
 */class NM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new C(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(I.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(I.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class PM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class DM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{ni(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=U(a);c._u.add(4),await vo(c),c.gu.set("Unknown"),c._u.delete(4),await _c(c)}(this))})}),this.gu=new PM(r,i)}}async function _c(t){if(ni(t))for(const e of t.wu)await e(!0)}async function vo(t){for(const e of t.wu)await e(!1)}function eh(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),tp(n)?ep(n):bo(n).ko()&&Zm(n,e))}function qa(t,e){const n=U(t),r=bo(n);n.du.delete(e),r.ko()&&vE(n,e),n.du.size===0&&(r.ko()?r.Fo():ni(n)&&n.gu.set("Unknown"))}function Zm(t,e){t.yu.Mt(e.targetId),bo(t).zo(e)}function vE(t,e){t.yu.Mt(e),bo(t).Ho(e)}function ep(t){t.yu=new gL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),bo(t).start(),t.gu.uu()}function tp(t){return ni(t)&&!bo(t).No()&&t.du.size>0}function ni(t){return U(t)._u.size===0}function wE(t){t.yu=void 0}async function OM(t){t.du.forEach((e,n)=>{Zm(t,e)})}async function LM(t,e){wE(t),tp(t)?(t.gu.hu(e),ep(t)):t.gu.set("Unknown")}async function MM(t,e,n){if(t.gu.set("Online"),e instanceof F0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yu(t,r)}else if(e instanceof pu?t.yu.Gt(e):e instanceof M0?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(te.min()))try{const r=await lE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(Ze.EMPTY_BYTE_STRING,c.snapshotVersion)),vE(i,a);const u=new Dr(c.target,a,1,c.sequenceNumber);Zm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Yu(t,r)}}async function Yu(t,e,n){if(!ei(e))throw e;t._u.add(1),await vo(t),t.gu.set("Offline"),n||(n=()=>lE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await _c(t)})}function bE(t,e){return e().catch(n=>Yu(t,n,e))}async function wo(t){const e=U(t),n=jr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;FM(e);)try{const i=await IM(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,UM(e,i)}catch(i){await Yu(e,i)}_E(e)&&IE(e)}function FM(t){return ni(t)&&t.fu.length<10}function UM(t,e){t.fu.push(e);const n=jr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function _E(t){return ni(t)&&!jr(t).No()&&t.fu.length>0}function IE(t){jr(t).start()}async function VM(t){jr(t).eu()}async function BM(t){const e=jr(t);for(const n of t.fu)e.Xo(n.mutations)}async function $M(t,e,n){const r=t.fu.shift(),i=jm.from(r,e,n);await bE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wo(t)}async function qM(t,e){e&&jr(t).Yo&&await async function(n,r){if(i=r.code,N0(i)&&i!==I.ABORTED){const s=n.fu.shift();jr(n).Mo(),await bE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await wo(n)}var i}(t,e),_E(t)&&IE(t)}async function Av(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=ni(n);n._u.add(3),await vo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await _c(n)}async function Zd(t,e){const n=U(t);e?(n._u.delete(2),await _c(n)):e||(n._u.add(2),await vo(n),n.gu.set("Unknown"))}function bo(t){return t.pu||(t.pu=function(e,n,r){const i=U(e);return i.su(),new xM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:OM.bind(null,t),Zr:LM.bind(null,t),Wo:MM.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),tp(t)?ep(t):t.gu.set("Unknown")):(await t.pu.stop(),wE(t))})),t.pu}function jr(t){return t.Iu||(t.Iu=function(e,n,r){const i=U(e);return i.su(),new RM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:VM.bind(null,t),Zr:qM.bind(null,t),tu:BM.bind(null,t),Zo:$M.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await wo(t)):(await t.Iu.stop(),t.fu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class np{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new np(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _o(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),ei(t))return new C(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=jo(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Cv{constructor(){this.Tu=new ze(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):j():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Js(e,n,Ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jM{constructor(){this.Au=void 0,this.listeners=[]}}class zM{constructor(){this.queries=new ti(e=>w0(e),gc),this.onlineState="Unknown",this.Ru=new Set}}async function rp(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jM),i)try{s.Au=await n.onListen(r)}catch(o){const a=_o(o,`Initialization of query '${Gd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&sp(n)}async function ip(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function HM(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&sp(n)}function KM(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function sp(t){t.Ru.forEach(e=>{e.next()})}class op{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class WM{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
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
 */class xv{constructor(e){this.It=e}Ji(e){return Fn(this.It,e)}Yi(e){return e.metadata.exists?q0(this.It,e.document,!1):ke.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return ot(e)}}class GM{constructor(e,n,r){this.Mu=e,this.localStore=n,this.It=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=EE(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=fe.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new xv(this.It);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await EM(this.localStore,new xv(this.It),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await TM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function EE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class TE{constructor(e){this.key=e}}class SE{constructor(e){this.key=e}}class kE{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ce(),this.mutatedKeys=ce(),this.Gu=_0(e),this.Qu=new Ls(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Cv,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Vm(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(r.track({type:3,doc:f}),b=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),b=!0,(c&&this.Gu(f,c)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),b=!0):d&&!f&&(r.track({type:1,doc:d}),b=!0,(c||u)&&(a=!0)),b&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,l)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return f(h)-f(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new Js(this.query,e.Qu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Cv,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ce(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new SE(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new TE(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Js.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class YM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QM{constructor(e){this.key=e,this.nc=!1}}class XM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ti(a=>w0(a),gc),this.rc=new Map,this.oc=new Set,this.uc=new ze(L.comparator),this.cc=new Map,this.ac=new Wm,this.hc={},this.lc=new Map,this.fc=Yi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function JM(t,e){const n=hp(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await Qs(n.localStore,jt(e));n.isPrimaryClient&&eh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ap(n,e,r,a==="current",o.resumeToken)}return i}async function ap(t,e,n,r,i){t._c=(h,d,f)=>async function(p,y,b,v){let _=y.view.Wu(b);_.$i&&(_=await Ku(p.localStore,y.query,!1).then(({documents:F})=>y.view.Wu(F,_)));const E=v&&v.targetChanges.get(y.targetId),R=y.view.applyChanges(_,p.isPrimaryClient,E);return ef(p,y.targetId,R.Xu),R.snapshot}(t,h,d,f);const s=await Ku(t.localStore,e,!0),o=new kE(e,s.Hi),a=o.Wu(s.documents),c=wc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);ef(t,n,u.Xu);const l=new YM(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function ZM(t,e){const n=U(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!gc(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qa(n.remoteStore,r.targetId),Zs(n,r.targetId)}).catch(Zr)):(Zs(n,r.targetId),await Xs(n.localStore,r.targetId,!0))}async function e2(t,e,n){const r=dp(t);try{const i=await function(s,o){const a=U(s),c=Le.now(),u=o.reduce((d,f)=>d.add(f.key),ce());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=qt(),p=ce();return a.Gi.getEntries(d,u).next(y=>{f=y,f.forEach((b,v)=>{v.isValidDocument()||(p=p.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{l=y;const b=[];for(const v of o){const _=lL(v,l.get(v.key).overlayedDocument);_!=null&&b.push(new hr(v.key,_,g0(_.value.mapValue),Oe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:O0(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.hc[s.currentUser.toKey()];c||(c=new ze(ae)),c=c.insert(o,a),s.hc[s.currentUser.toKey()]=c}(r,i.batchId,n),await dr(r,i.changes),await wo(r.remoteStore)}catch(i){const s=_o(i,"Failed to persist write");n.reject(s)}}async function AE(t,e){const n=U(t);try{const r=await _M(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ne(o.nc):i.removedDocuments.size>0&&(ne(o.nc),o.nc=!1))}),await dr(n,r,e)}catch(r){await Zr(r)}}function Rv(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&sp(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function t2(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new ze(L.comparator);o=o.insert(s,ke.newNoDocument(s,te.min()));const a=ce().add(s),c=new vc(te.min(),new Map,new Ee(ae),o,a);await AE(r,c),r.uc=r.uc.remove(s),r.cc.delete(e),lp(r)}else await Xs(r.localStore,e,!1).then(()=>Zs(r,e,n)).catch(Zr)}async function n2(t,e){const n=U(t),r=e.batch.batchId;try{const i=await bM(n.localStore,e);up(n,r,null),cp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await dr(n,i)}catch(i){await Zr(i)}}async function r2(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ne(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);up(r,e,n),cp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await dr(r,i)}catch(i){await Zr(i)}}async function i2(t,e){const n=U(t);ni(n.remoteStore)||x("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=U(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=_o(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function cp(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function up(t,e,n){const r=U(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Zs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||CE(t,r)})}function CE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(qa(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),lp(t))}function ef(t,e,n){for(const r of n)r instanceof TE?(t.ac.addReference(r.key,e),s2(t,r)):r instanceof SE?(x("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||CE(t,r.key)):j()}function s2(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.oc.add(r),lp(t))}function lp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new L(fe.fromString(e)),r=t.fc.next();t.cc.set(r,new QM(n)),t.uc=t.uc.insert(n,r),eh(t.remoteStore,new Dr(jt(po(n.path)),r,2,$t.at))}}async function dr(t,e,n){const r=U(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Qm.Ci(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,c){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>w.forEach(c,h=>w.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>w.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ei(l))throw l;x("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ui.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,p)}}}(r.localStore,s))}async function o2(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await uE(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(I.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dr(n,r.ji)}}function a2(t,e){const n=U(t),r=n.cc.get(e);if(r&&r.nc)return ce().add(r.key);{let i=ce();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function c2(t,e){const n=U(t),r=await Ku(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&ef(n,e.targetId,i.Xu),i}async function u2(t,e){const n=U(t);return fE(n.localStore,e).then(r=>dr(n,r))}async function l2(t,e,n,r){const i=U(t),s=await function(o,a){const c=U(o),u=U(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await wo(i.remoteStore):n==="acknowledged"||n==="rejected"?(up(i,e,r||null),cp(i,e),function(o,a){U(U(o).mutationQueue).An(a)}(i.localStore,e)):j(),await dr(i,s)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function h2(t,e){const n=U(t);if(hp(n),dp(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Nv(n,r.toArray());n.dc=!0,await Zd(n.remoteStore,!0);for(const s of i)eh(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Zs(n,o),Xs(n.localStore,o,!0))),qa(n.remoteStore,o)}),await i,await Nv(n,r),function(s){const o=U(s);o.cc.forEach((a,c)=>{qa(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new ze(L.comparator)}(n),n.dc=!1,await Zd(n.remoteStore,!1)}}async function Nv(t,e,n){const r=U(t),i=[],s=[];for(const o of e){let a;const c=r.rc.get(o);if(c&&c.length!==0){a=await Qs(r.localStore,jt(c[0]));for(const u of c){const l=r.ic.get(u),h=await c2(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await dE(r.localStore,o);a=await Qs(r.localStore,u),await ap(r,xE(u),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function xE(t){return v0(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function d2(t){const e=U(t);return U(U(e.localStore).persistence).vi()}async function f2(t,e,n,r){const i=U(t);if(i.dc)return void x("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await fE(i.localStore,b0(s[0])),a=vc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ze.EMPTY_BYTE_STRING);await dr(i,o,a);break}case"rejected":await Xs(i.localStore,e,!0),Zs(i,e,r);break;default:j()}}async function m2(t,e,n){const r=hp(t);if(r.dc){for(const i of e){if(r.rc.has(i)){x("SyncEngine","Adding an already active target "+i);continue}const s=await dE(r.localStore,i),o=await Qs(r.localStore,s);await ap(r,xE(s),o.targetId,!1,o.resumeToken),eh(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await Xs(r.localStore,i,!1).then(()=>{qa(r.remoteStore,i),Zs(r,i)}).catch(Zr)}}function hp(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=a2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=t2.bind(null,e),e.sc.Wo=HM.bind(null,e.eventManager),e.sc.wc=KM.bind(null,e.eventManager),e}function dp(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=n2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r2.bind(null,e),e}function p2(t,e,n){const r=U(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=U(h),p=ot(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.Ns.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(EE(a));const c=new GM(a,i.localStore,s.It);let u=await s.mc();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await s.mc()}const l=await c.complete();return await dr(i,l.Lu,void 0),await function(h,d){const f=U(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ns.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return Hs("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class RE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=bc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return cE(this.persistence,new aE,e.initialUser,this.It)}yc(e){return new oE(Zl.Bs,this.It)}gc(e){return new pE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NE extends RE{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await dp(this.Ac.syncEngine),await wo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return cE(this.persistence,new aE,e.initialUser,this.It)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new sM(r,e.asyncQueue,n)}Ec(e,n){const r=new qO(n,this.persistence);return new $O(e.asyncQueue,r)}yc(e){const n=Ym(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Gm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,gE(),yu(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new pE}}class g2 extends NE{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof Yh&&(this.sharedClientState.syncEngine={Fr:l2.bind(null,n),$r:f2.bind(null,n),Br:m2.bind(null,n),vi:d2.bind(null,n),Mr:u2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await h2(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=gE();if(!Yh.C(n))throw new C(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Ym(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Yh(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class fp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=o2.bind(null,this.syncEngine),await Zd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new zM}createDatastore(e){const n=bc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new CM(i));var i;return function(s,o,a,c){return new NM(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Rv(this.syncEngine,a,0),o=kv.C()?new kv:new SM,new DM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,u){const l=new XM(r,i,s,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);x("RemoteStore","RemoteStore shutting down."),n._u.add(5),await vo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function mp(t,e,n){if(!n)throw new C(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PE(t,e,n,r){if(e===!0&&r===!0)throw new C(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pv(t){if(!L.isDocumentKey(t))throw new C(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dv(t){if(L.isDocumentKey(t))throw new C(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function th(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function ye(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=th(t);throw new C(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function DE(t,e){if(e<=0)throw new C(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Ov=new Map;class Lv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,PE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ic{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xO;switch(n.type){case"gapi":const r=n.client;return new DO(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ov.get(e);n&&(x("ComponentProvider","Removing Datastore"),Ov.delete(e),n.terminate())}(this),Promise.resolve()}}function y2(t,e,n,r={}){var i;const s=(t=ye(t,Ic))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Hs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=rt.MOCK_USER;else{o=Hb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new C(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rt(c)}t._authCredentials=new RO(new i0(o,a))}}/**
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
 */class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class At{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new At(this.firestore,e,this._query)}}class Un extends At{constructor(e,n,r){super(e,n,po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new L(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function OE(t,e,...n){if(t=H(t),mp("collection","path",e),t instanceof Ic){const r=fe.fromString(e,...n);return Dv(r),new Un(t,null,r)}{if(!(t instanceof Ne||t instanceof Un))throw new C(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Dv(r),new Un(t.firestore,null,r)}}function v2(t,e){if(t=ye(t,Ic),mp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(t,null,function(n){return new lr(fe.emptyPath(),n)}(e))}function Qu(t,e,...n){if(t=H(t),arguments.length===1&&(e=s0.R()),mp("doc","path",e),t instanceof Ic){const r=fe.fromString(e,...n);return Pv(r),new Ne(t,null,new L(r))}{if(!(t instanceof Ne||t instanceof Un))throw new C(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Pv(r),new Ne(t.firestore,t instanceof Un?t.converter:null,new L(r))}}function LE(t,e){return t=H(t),e=H(e),(t instanceof Ne||t instanceof Un)&&(e instanceof Ne||e instanceof Un)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function ME(t,e){return t=H(t),e=H(e),t instanceof At&&e instanceof At&&t.firestore===e.firestore&&gc(t._query,e._query)&&t.converter===e.converter}/**
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
 */function Mv(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class w2{constructor(e,n){this.Pc=e,this.It=n,this.metadata=new st,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new WM(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class b2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=U(r),o=Ba(s.It)+"/documents",a={documents:i.map(h=>Va(s.It,h))},c=await s._o("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=_L(s.It,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());ne(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new yo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new Bm(i,this.precondition(i)))}),await async function(n,r){const i=U(n),s=Ba(i.It)+"/documents",o={writes:r.map(a=>$a(i.It,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw j();n=te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(te.min())?Oe.exists(!1):Oe.updateTime(n):Oe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(te.min()))throw new C(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Oe.updateTime(n)}return Oe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class _2{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new Jm(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new b2(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!mc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!N0(n)}return!1}}/**
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
 */class I2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=s0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_o(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function FE(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function UE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pp(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Av(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Av(e.remoteStore,s)),t.onlineComponents=e}async function pp(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await FE(t,new RE)),t.offlineComponents}async function rh(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await UE(t,new fp)),t.onlineComponents}function VE(t){return pp(t).then(e=>e.persistence)}function gp(t){return pp(t).then(e=>e.localStore)}function BE(t){return rh(t).then(e=>e.remoteStore)}function yp(t){return rh(t).then(e=>e.syncEngine)}function E2(t){return rh(t).then(e=>e.datastore)}async function eo(t){const e=await rh(t),n=e.eventManager;return n.onListen=JM.bind(null,e.syncEngine),n.onUnlisten=ZM.bind(null,e.syncEngine),n}function T2(t){return t.asyncQueue.enqueue(async()=>{const e=await VE(t),n=await BE(t);return e.setNetworkEnabled(!0),function(r){const i=U(r);return i._u.delete(0),_c(i)}(n)})}function S2(t){return t.asyncQueue.enqueue(async()=>{const e=await VE(t),n=await BE(t);return e.setNetworkEnabled(!1),async function(r){const i=U(r);i._u.add(0),await vo(i),i.gu.set("Offline")}(n)})}function k2(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=U(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=_o(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await gp(t),e,n)),n.promise}function $E(t,e,n={}){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new nh({next:h=>{s.enqueueAndForget(()=>ip(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new C(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new C(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new op(po(o.path),u,{includeMetadataChanges:!0,Nu:!0});return rp(i,l)}(await eo(t),t.asyncQueue,e,n,r)),r.promise}function A2(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Ku(r,i,!0),a=new kE(i,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=_o(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await gp(t),e,n)),n.promise}function qE(t,e,n={}){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new nh({next:h=>{s.enqueueAndForget(()=>ip(i,l)),h.fromCache&&a.source==="server"?c.reject(new C(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new op(o,u,{includeMetadataChanges:!0,Nu:!0});return rp(i,l)}(await eo(t),t.asyncQueue,e,n,r)),r.promise}function C2(t,e){const n=new nh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Ru.add(i),i.next()}(await eo(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Ru.delete(i)}(await eo(t),n))}}function x2(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new w2(c,u)}(function(c,u){if(c instanceof Uint8Array)return Mv(c,u);if(c instanceof ArrayBuffer)return Mv(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,bc(e));t.asyncQueue.enqueueAndForget(async()=>{p2(await yp(t),i,r)})}function R2(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=U(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await gp(t),e))}class N2{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Jm(this,"async_queue_retry"),this.Wc=()=>{const n=yu();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=yu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=yu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new st;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ei(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=np.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&j()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function tf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class P2{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const D2=-1;class He extends Ic{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new N2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jE(this),this._firestoreClient.terminate()}}function ht(t){return t._firestoreClient||jE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new HO(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new I2(t._authCredentials,t._appCheckCredentials,t._queue,r)}function O2(t,e){HE(t=ye(t,He));const n=ht(t),r=t._freezeSettings(),i=new fp;return zE(n,i,new NE(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function L2(t){HE(t=ye(t,He));const e=ht(t),n=t._freezeSettings(),r=new fp;return zE(e,r,new g2(r,n.cacheSizeBytes))}function zE(t,e,n){const r=new st;return t.asyncQueue.enqueue(async()=>{try{await FE(t,n),await UE(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===I.FAILED_PRECONDITION||o.code===I.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;Hs("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function M2(t){if(t._initialized&&!t._terminated)throw new C(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new st;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!mn.C())return Promise.resolve();const r=n+"main";await mn.delete(r)}(Ym(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function F2(t){return function(e){const n=new st;return e.asyncQueue.enqueueAndForget(async()=>i2(await yp(e),n)),n.promise}(ht(t=ye(t,He)))}function U2(t){return T2(ht(t=ye(t,He)))}function V2(t){return S2(ht(t=ye(t,He)))}function B2(t,e){const n=ht(t=ye(t,He)),r=new P2;return x2(n,t._databaseId,e,r),r}function $2(t,e){return R2(ht(t=ye(t,He)),e).then(n=>n?new At(t,null,n.query):null)}function HE(t){if(t._initialized||t._terminated)throw new C(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class ss{constructor(e){this._methodName=e}}/**
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
 */const q2=/^__.*__$/;class j2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}class KE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function WE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class sh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new sh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Xu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(WE(this.sa)&&q2.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class z2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||bc(e)}da(e,n,r,i=!1){return new sh({sa:e,methodName:n,fa:r,path:We.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function os(t){const e=t._freezeSettings(),n=bc(t._databaseId);return new z2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oh(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);_p("Data must be an object, but it was:",o,r);const a=QE(r,o);let c,u;if(s.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=nf(e,h,n);if(!o.contains(d))throw new C(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);JE(l,d)||l.push(d)}c=new Gt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new j2(new mt(a),c,u)}class Ec extends ss{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ec}}function GE(t,e,n){return new sh({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class vp extends ss{_toFieldTransform(e){return new yc(e.path,new Gs)}isEqual(e){return e instanceof vp}}class H2 extends ss{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=GE(this,e,!0),r=this._a.map(s=>as(s,n)),i=new Hi(r);return new yc(e.path,i)}isEqual(e){return this===e}}class K2 extends ss{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=GE(this,e,!0),r=this._a.map(s=>as(s,n)),i=new Ki(r);return new yc(e.path,i)}isEqual(e){return this===e}}class W2 extends ss{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new Ys(e.It,T0(e.It,this.wa));return new yc(e.path,n)}isEqual(e){return this===e}}function wp(t,e,n,r){const i=t.da(1,e,n);_p("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();is(r,(c,u)=>{const l=Ip(e,c,n);u=H(u);const h=i.ca(l);if(u instanceof Ec)s.push(l);else{const d=as(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Gt(s);return new KE(o,a,i.fieldTransforms)}function bp(t,e,n,r,i,s){const o=t.da(1,e,n),a=[nf(e,r,n)],c=[i];if(s.length%2!=0)throw new C(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(nf(e,s[d])),c.push(s[d+1]);const u=[],l=mt.empty();for(let d=a.length-1;d>=0;--d)if(!JE(u,a[d])){const f=a[d];let p=c[d];p=H(p);const y=o.ca(f);if(p instanceof Ec)u.push(f);else{const b=as(p,y);b!=null&&(u.push(f),l.set(f,b))}}const h=new Gt(u);return new KE(l,h,o.fieldTransforms)}function YE(t,e,n,r=!1){return as(n,t.da(r?4:3,e))}function as(t,e){if(XE(t=H(t)))return _p("Unsupported field value:",e,t),QE(t,e);if(t instanceof ss)return function(n,r){if(!WE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=as(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=H(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return T0(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Le.fromDate(n);return{timestampValue:Ua(r.It,i)}}if(n instanceof Le){const i=new Le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ua(r.It,i)}}if(n instanceof ih)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jn)return{bytesValue:U0(r.It,n._byteString)};if(n instanceof Ne){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$m(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${th(n)}`)}(t,e)}function QE(t,e){const n={};return d0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,(r,i)=>{const s=as(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function XE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof ih||t instanceof jn||t instanceof Ne||t instanceof ss)}function _p(t,e,n){if(!XE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=th(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function nf(t,e,n){if((e=H(e))instanceof zr)return e._internalPath;if(typeof e=="string")return Ip(t,e);throw Xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const G2=new RegExp("[~\\*/\\[\\]]");function Ip(t,e,n){if(e.search(G2)>=0)throw Xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zr(...e.split("."))._internalPath}catch{throw Xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new C(I.INVALID_ARGUMENT,a+t+c)}function JE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ja{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ah("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Y2 extends ja{data(){return super.data()}}function ah(t,e){return typeof e=="string"?Ip(t,e):e instanceof zr?e._internalPath:e._delegate._internalPath}/**
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
 */function ZE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tc{}function Ir(t,...e){for(const n of e)t=n._apply(t);return t}class Q2 extends Tc{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=os(e.firestore),r=function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Uv(l,u);const f=[];for(const p of l)f.push(Fv(a,i,p));h={arrayValue:{values:f}}}else h=Fv(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Uv(l,u),h=YE(o,s,l,u==="in"||u==="not-in");const d=pt.create(c,u,h);return function(f,p){if(p.dt()){const b=Fm(f);if(b!==null&&!b.isEqual(p.field))throw new C(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${b.toString()}' and '${p.field.toString()}'`);const v=Mm(f);v!==null&&iT(f,p.field,v)}const y=function(b,v){for(const _ of b.filters)if(v.indexOf(_.op)>=0)return _.op;return null}(f,function(b){switch(b){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(y!==null)throw y===p.op?new C(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new C(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${y.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new At(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new lr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function X2(t,e,n){const r=e,i=ah("where",t);return new Q2(i,r,n)}class J2 extends Tc{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Os(i,s);return function(a,c){if(Mm(a)===null){const u=Fm(a);u!==null&&iT(a,u,c.field)}}(r,o),o}(e._query,this.ma,this.pa);return new At(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new lr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Z2(t,e="asc"){const n=e,r=ah("orderBy",t);return new J2(r,n)}class eT extends Tc{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new At(e.firestore,e.converter,ju(e._query,this.Ia,this.Ta))}}function eF(t){return DE("limit",t),new eT("limit",t,"F")}function tF(t){return DE("limitToLast",t),new eT("limitToLast",t,"L")}class tT extends Tc{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=rT(e,this.type,this.Ea,this.Aa);return new At(e.firestore,e.converter,function(r,i){return new lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function nF(...t){return new tT("startAt",t,!0)}function rF(...t){return new tT("startAfter",t,!1)}class nT extends Tc{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=rT(e,this.type,this.Ea,this.Aa);return new At(e.firestore,e.converter,function(r,i){return new lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function iF(...t){return new nT("endBefore",t,!1)}function sF(...t){return new nT("endAt",t,!0)}function rT(t,e,n,r){if(n[0]=H(n[0]),n[0]instanceof ja)return function(i,s,o,a,c){if(!a)throw new C(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Ws(i))if(l.field.isKeyField())u.push(ji(s,a.key));else{const h=a.data.field(l.field);if(Lm(h))throw new C(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new C(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new qr(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=os(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new C(I.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const p=u[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new C(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Um(s)&&p.indexOf("/")!==-1)throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const y=s.path.child(fe.fromString(p));if(!L.isDocumentKey(y))throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const b=new L(y);d.push(ji(o,b))}else{const y=YE(a,c,p);d.push(y)}}return new qr(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Fv(t,e,n){if(typeof(n=H(n))=="string"){if(n==="")throw new C(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Um(e)&&n.indexOf("/")!==-1)throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!L.isDocumentKey(r))throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ji(t,new L(r))}if(n instanceof Ne)return ji(t,n._key);throw new C(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${th(n)}.`)}function Uv(t,e){if(!Array.isArray(t)||t.length===0)throw new C(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function iT(t,e,n){if(!n.isEqual(e))throw new C(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class Ep{convertValue(e,n="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const r={};return is(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ih($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=f0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ne(W0(r));const i=new Br(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ch(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class oF extends Ep{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
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
 */class Ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rr extends ja{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ah("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aa extends rr{data(e={}){return super.data(e)}}class Hr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ai(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new aa(this._firestore,this._userDataWriter,r.key,r,new Ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new aa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ai(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new aa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ai(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:aF(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}function sT(t,e){return t instanceof rr&&e instanceof rr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Hr&&e instanceof Hr&&t._firestore===e._firestore&&ME(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function cF(t){t=ye(t,Ne);const e=ye(t.firestore,He);return $E(ht(e),t._key).then(n=>Tp(e,t,n))}class cs extends Ep{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function uF(t){t=ye(t,Ne);const e=ye(t.firestore,He),n=ht(e),r=new cs(e);return k2(n,t._key).then(i=>new rr(e,r,t._key,i,new Ai(i!==null&&i.hasLocalMutations,!0),t.converter))}function lF(t){t=ye(t,Ne);const e=ye(t.firestore,He);return $E(ht(e),t._key,{source:"server"}).then(n=>Tp(e,t,n))}function hF(t){t=ye(t,At);const e=ye(t.firestore,He),n=ht(e),r=new cs(e);return ZE(t._query),qE(n,t._query).then(i=>new Hr(e,r,t,i))}function dF(t){t=ye(t,At);const e=ye(t.firestore,He),n=ht(e),r=new cs(e);return A2(n,t._query).then(i=>new Hr(e,r,t,i))}function fF(t){t=ye(t,At);const e=ye(t.firestore,He),n=ht(e),r=new cs(e);return qE(n,t._query,{source:"server"}).then(i=>new Hr(e,r,t,i))}function Vv(t,e,n){t=ye(t,Ne);const r=ye(t.firestore,He),i=ch(t.converter,e,n);return Sc(r,[oh(os(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Oe.none())])}function Bv(t,e,n,...r){t=ye(t,Ne);const i=ye(t.firestore,He),s=os(i);let o;return o=typeof(e=H(e))=="string"||e instanceof zr?bp(s,"updateDoc",t._key,e,n,r):wp(s,"updateDoc",t._key,e),Sc(i,[o.toMutation(t._key,Oe.exists(!0))])}function mF(t){return Sc(ye(t.firestore,He),[new yo(t._key,Oe.none())])}function pF(t,e){const n=ye(t.firestore,He),r=Qu(t),i=ch(t.converter,e);return Sc(n,[oh(os(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function oT(t,...e){var n,r,i;t=H(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||tf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(tf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Ne)u=ye(t.firestore,He),l=po(t._key.path),c={next:h=>{e[o]&&e[o](Tp(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ye(t,At);u=ye(h.firestore,He),l=h._query;const d=new cs(u);c={next:f=>{e[o]&&e[o](new Hr(u,d,h,f))},error:e[o+1],complete:e[o+2]},ZE(t._query)}return function(h,d,f,p){const y=new nh(p),b=new op(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>rp(await eo(h),b)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>ip(await eo(h),b))}}(ht(u),l,a,c)}function gF(t,e){return C2(ht(t=ye(t,He)),tf(e)?e:{next:e})}function Sc(t,e){return function(n,r){const i=new st;return n.asyncQueue.enqueueAndForget(async()=>e2(await yp(n),r,i)),i.promise}(ht(t),e)}function Tp(t,e,n){const r=n.docs.get(e._key),i=new cs(t);return new rr(t,i,e._key,r,new Ai(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const yF={maxAttempts:5};/**
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
 */class vF{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=os(e)}set(e,n,r){this._verifyNotCommitted();const i=Ar(e,this._firestore),s=ch(i.converter,n,r),o=oh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Oe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ar(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof zr?bp(this._dataReader,"WriteBatch.update",s._key,n,r,i):wp(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Oe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ar(e,this._firestore);return this._mutations=this._mutations.concat(new yo(n._key,Oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ar(t,e){if((t=H(t)).firestore!==e)throw new C(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class wF extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=os(e)}get(e){const n=Ar(e,this._firestore),r=new oF(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return j();const s=i[0];if(s.isFoundDocument())return new ja(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new ja(this._firestore,r,n._key,null,n.converter);throw j()})}set(e,n,r){const i=Ar(e,this._firestore),s=ch(i.converter,n,r),o=oh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Ar(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof zr?bp(this._dataReader,"Transaction.update",s._key,n,r,i):wp(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Ar(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ar(e,this._firestore),r=new cs(this._firestore);return super.get(e).then(i=>new rr(this._firestore,r,n._key,i._document,new Ai(!1,!1),n.converter))}}function bF(t,e,n){t=ye(t,He);const r=Object.assign(Object.assign({},yF),n);return function(i){if(i.maxAttempts<1)throw new C(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new st;return i.asyncQueue.enqueueAndForget(async()=>{const c=await E2(i);new _2(i.asyncQueue,c,o,s,a).run()}),a.promise}(ht(t),i=>e(new wF(t,i)),r)}/**
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
 */function _F(){return new Ec("deleteField")}function IF(){return new vp("serverTimestamp")}function EF(...t){return new H2("arrayUnion",t)}function TF(...t){return new K2("arrayRemove",t)}function SF(t){return new W2("increment",t)}(function(t,e=!0){(function(n){mo=n})(Yr),er(new sn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new He(new NO(n.getProvider("auth-internal")),new LO(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),rn(Fy,"3.7.3",t),rn(Fy,"3.7.3","esm2017")})();const kF="@firebase/firestore-compat",AF="0.2.3";/**
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
 */function Sp(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function $v(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function qv(){if(!jO())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class za{constructor(e){this._delegate=e}static fromBase64String(e){return qv(),new za(jn.fromBase64String(e))}static fromUint8Array(e){return $v(),new za(jn.fromUint8Array(e))}toBase64(){return qv(),this._delegate.toBase64()}toUint8Array(){return $v(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function rf(t){return CF(t,["next","error","complete"])}function CF(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class xF{enableIndexedDbPersistence(e,n){return O2(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return L2(e._delegate)}clearIndexedDbPersistence(e){return M2(e._delegate)}}class aT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Br||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Hs("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){y2(this._delegate,e,n,r)}enableNetwork(){return U2(this._delegate)}disableNetwork(){return V2(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,PE("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return F2(this._delegate)}onSnapshotsInSync(e){return gF(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new to(this,OE(this._delegate,e))}catch(n){throw Nt(n,"collection()","Firestore.collection()")}}doc(e){try{return new en(this,Qu(this._delegate,e))}catch(n){throw Nt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Rt(this,v2(this._delegate,e))}catch(n){throw Nt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return bF(this._delegate,n=>e(new cT(this,n)))}batch(){return ht(this._delegate),new uT(new vF(this._delegate,e=>Sc(this._delegate,e)))}loadBundle(e){return B2(this._delegate,e)}namedQuery(e){return $2(this._delegate,e).then(n=>n?new Rt(this,n):null)}}class uh extends Ep{constructor(e){super(),this.firestore=e}convertBytes(e){return new za(new jn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return en.forKey(n,this.firestore,null)}}function RF(t){AO(t)}class cT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new uh(e)}get(e){const n=Ci(e);return this._delegate.get(n).then(r=>new Ha(this._firestore,new rr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ci(e);return r?(Sp("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ci(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ci(e);return this._delegate.delete(n),this}}class uT{constructor(e){this._delegate=e}set(e,n,r){const i=Ci(e);return r?(Sp("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ci(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ci(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Qi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new aa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ka(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Qi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Qi(e,new uh(e),n),i.set(n,s)),s}}Qi.INSTANCES=new WeakMap;class en{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new uh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new en(n,new Ne(n._delegate,r,new L(e)))}static forKey(e,n,r){return new en(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new to(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new to(this.firestore,OE(this._delegate,e))}catch(n){throw Nt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=H(e),e instanceof Ne?LE(this._delegate,e):!1}set(e,n){n=Sp("DocumentReference.set",n);try{return n?Vv(this._delegate,e,n):Vv(this._delegate,e)}catch(r){throw Nt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?Bv(this._delegate,e):Bv(this._delegate,e,n,...r)}catch(i){throw Nt(i,"updateDoc()","DocumentReference.update()")}}delete(){return mF(this._delegate)}onSnapshot(...e){const n=lT(e),r=hT(e,i=>new Ha(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return oT(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=uF(this._delegate):(e==null?void 0:e.source)==="server"?n=lF(this._delegate):n=cF(this._delegate),n.then(r=>new Ha(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new en(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Nt(t,e,n){return t.message=t.message.replace(e,n),t}function lT(t){for(const e of t)if(typeof e=="object"&&!rf(e))return e;return{}}function hT(t,e){var n,r;let i;return rf(t[0])?i=t[0]:rf(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ha{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new en(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return sT(this._delegate,e._delegate)}}class Ka extends Ha{data(e){const n=this._delegate.data(e);return CO(n!==void 0),n}}class Rt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new uh(e)}where(e,n,r){try{return new Rt(this.firestore,Ir(this._delegate,X2(e,n,r)))}catch(i){throw Nt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Rt(this.firestore,Ir(this._delegate,Z2(e,n)))}catch(r){throw Nt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Rt(this.firestore,Ir(this._delegate,eF(e)))}catch(n){throw Nt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Rt(this.firestore,Ir(this._delegate,tF(e)))}catch(n){throw Nt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Rt(this.firestore,Ir(this._delegate,nF(...e)))}catch(n){throw Nt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Rt(this.firestore,Ir(this._delegate,rF(...e)))}catch(n){throw Nt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Rt(this.firestore,Ir(this._delegate,iF(...e)))}catch(n){throw Nt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Rt(this.firestore,Ir(this._delegate,sF(...e)))}catch(n){throw Nt(n,"endAt()","Query.endAt()")}}isEqual(e){return ME(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=dF(this._delegate):(e==null?void 0:e.source)==="server"?n=fF(this._delegate):n=hF(this._delegate),n.then(r=>new sf(this.firestore,new Hr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=lT(e),r=hT(e,i=>new sf(this.firestore,new Hr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return oT(this._delegate,n,r)}withConverter(e){return new Rt(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class NF{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ka(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class sf{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Rt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ka(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new NF(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ka(this._firestore,r))})}isEqual(e){return sT(this._delegate,e._delegate)}}class to extends Rt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new en(this.firestore,e):null}doc(e){try{return e===void 0?new en(this.firestore,Qu(this._delegate)):new en(this.firestore,Qu(this._delegate,e))}catch(n){throw Nt(n,"doc()","CollectionReference.doc()")}}add(e){return pF(this._delegate,e).then(n=>new en(this.firestore,n))}isEqual(e){return LE(this._delegate,e._delegate)}withConverter(e){return new to(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ci(t){return ye(t,Ne)}/**
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
 */class kp{constructor(...e){this._delegate=new zr(...e)}static documentId(){return new kp(We.keyField().canonicalString())}isEqual(e){return e=H(e),e instanceof zr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Ii{constructor(e){this._delegate=e}static serverTimestamp(){const e=IF();return e._methodName="FieldValue.serverTimestamp",new Ii(e)}static delete(){const e=_F();return e._methodName="FieldValue.delete",new Ii(e)}static arrayUnion(...e){const n=EF(...e);return n._methodName="FieldValue.arrayUnion",new Ii(n)}static arrayRemove(...e){const n=TF(...e);return n._methodName="FieldValue.arrayRemove",new Ii(n)}static increment(e){const n=SF(e);return n._methodName="FieldValue.increment",new Ii(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const PF={Firestore:aT,GeoPoint:ih,Timestamp:Le,Blob:za,Transaction:cT,WriteBatch:uT,DocumentReference:en,DocumentSnapshot:Ha,Query:Rt,QueryDocumentSnapshot:Ka,QuerySnapshot:sf,CollectionReference:to,FieldPath:kp,FieldValue:Ii,setLogLevel:RF,CACHE_SIZE_UNLIMITED:D2};function DF(t,e){t.INTERNAL.registerComponent(new sn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},PF)))}/**
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
 */function OF(t){DF(t,(e,n)=>new aT(e,n,new xF)),t.registerVersion(kF,AF)}OF(ts);/**
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
 */const dT="firebasestorage.googleapis.com",fT="storageBucket",LF=2*60*1e3,MF=10*60*1e3,FF=1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Qh(t){return"storage/"+t}function Ap(){const t="An unknown error occurred, please check the error payload for server response.";return new Be("unknown",t)}function UF(t){return new Be("object-not-found","Object '"+t+"' does not exist.")}function VF(t){return new Be("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function BF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be("unauthenticated",t)}function $F(){return new Be("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function qF(t){return new Be("unauthorized","User does not have permission to access '"+t+"'.")}function mT(){return new Be("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function pT(){return new Be("canceled","User canceled the upload/download.")}function jF(t){return new Be("invalid-url","Invalid URL '"+t+"'.")}function zF(t){return new Be("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function HF(){return new Be("no-default-bucket","No default bucket found. Did you set the '"+fT+"' property when initializing the app?")}function gT(){return new Be("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function KF(){return new Be("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function WF(){return new Be("no-download-url","The given file does not have any download URLs.")}function GF(t){return new Be("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ms(t){return new Be("invalid-argument",t)}function yT(){return new Be("app-deleted","The Firebase app was deleted.")}function vT(t){return new Be("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ca(t,e){return new Be("invalid-format","String does not match format '"+t+"': "+e)}function Fo(t){throw new Be("internal-error","Internal error: "+t)}/**
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
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw zF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},y=n===dT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",v=new RegExp(`^https?://${y}/${i}/${b}`,"i"),E=[{regex:a,indices:c,postModify:s},{regex:f,indices:p,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<E.length;R++){const F=E[R],z=F.regex.exec(e);if(z){const ee=z[F.indices.bucket];let Q=z[F.indices.path];Q||(Q=""),r=new Et(ee,Q),F.postModify(r);break}}if(r==null)throw jF(e);return r}}class YF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function QF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(f,c())},b)}function d(){s&&clearTimeout(s)}function f(b,...v){if(u){d();return}if(b){d(),l.call(null,b,...v);return}if(c()||o){d(),l.call(null,b,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function y(b){p||(p=!0,d(),!u&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function XF(t){t(!1)}/**
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
 */function JF(t){return t!==void 0}function ZF(t){return typeof t=="function"}function eU(t){return typeof t=="object"&&!Array.isArray(t)}function lh(t){return typeof t=="string"||t instanceof String}function jv(t){return Cp()&&t instanceof Blob}function Cp(){return typeof Blob<"u"&&!wl()}function of(t,e,n,r){if(r<e)throw Ms(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ms(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ri(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function wT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Fi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fi||(Fi={}));/**
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
 */function bT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class tU{constructor(e,n,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Kc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Fi.NO_ERROR,c=s.getStatus();if((!a||bT(c,this.additionalRetryCodes_))&&this.retry){const l=s.getErrorCode()===Fi.ABORT;r(!1,new Kc(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Kc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());JF(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Ap();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?yT():pT();o(c)}else{const c=mT();o(c)}};this.canceled_?n(!1,new Kc(!1,null,!0)):this.backoffId_=QF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function iU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function oU(t,e,n,r,i,s,o=!0){const a=wT(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return iU(u,e),nU(u,n),rU(u,s),sU(u,r),new tU(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function aU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cU(...t){const e=aU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Cp())return new Blob(t);throw new Be("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function uU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function lU(t){if(typeof atob>"u")throw GF("base-64");return atob(t)}/**
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
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xh{constructor(e,n){this.data=e,this.contentType=n||null}}function _T(t,e){switch(t){case tn.RAW:return new Xh(IT(e));case tn.BASE64:case tn.BASE64URL:return new Xh(ET(t,e));case tn.DATA_URL:return new Xh(dU(e),fU(e))}throw Ap()}function IT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function hU(t){let e;try{e=decodeURIComponent(t)}catch{throw ca(tn.DATA_URL,"Malformed data URL.")}return IT(e)}function ET(t,e){switch(t){case tn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ca(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ca(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lU(e)}catch(i){throw i.message.includes("polyfill")?i:ca(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class TT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ca(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=mU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function dU(t){const e=new TT(t);return e.base64?ET(tn.BASE64,e.rest):hU(e.rest)}function fU(t){return new TT(t).contentType}function mU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Kn{constructor(e,n){let r=0,i="";jv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(jv(this.data_)){const r=this.data_,i=uU(r,e,n);return i===null?null:new Kn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Kn(r,!0)}}static getBlob(...e){if(Cp()){const n=e.map(r=>r instanceof Kn?r.data_:r);return new Kn(cU.apply(null,n))}else{const n=e.map(o=>lh(o)?_T(tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Kn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function xp(t){let e;try{e=JSON.parse(t)}catch{return null}return eU(e)?e:null}/**
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
 */function pU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ST(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function yU(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||yU}}let Wc=null;function vU(t){return!lh(t)||t.length<2?t:ST(t)}function hh(){if(Wc)return Wc;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return vU(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),Wc=t,Wc}function wU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Et(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function bU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return wU(r,t),r}function kT(t,e,n){const r=xp(e);return r===null?null:bU(t,r,n)}function _U(t,e,n,r){const i=xp(e);if(i===null||!lh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=ri(d,n,r),p=wT({alt:"media",token:u});return f+p})[0]}function Rp(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const zv="prefixes",Hv="items";function IU(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[zv])for(const i of n[zv]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Et(e,s));r.prefixes.push(o)}if(n[Hv])for(const i of n[Hv]){const s=t._makeStorageReference(new Et(e,i.name));r.items.push(s)}return r}function EU(t,e,n){const r=xp(n);return r===null?null:IU(t,e,r)}class fr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Vn(t){if(!t)throw Ap()}function dh(t,e){function n(r,i){const s=kT(t,i,e);return Vn(s!==null),s}return n}function TU(t,e){function n(r,i){const s=EU(t,e,i);return Vn(s!==null),s}return n}function SU(t,e){function n(r,i){const s=kT(t,i,e);return Vn(s!==null),_U(s,i,t.host,t._protocol)}return n}function Io(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=$F():i=BF():n.getStatus()===402?i=VF(t.bucket):n.getStatus()===403?i=qF(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function fh(t){const e=Io(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=UF(t.path)),s.serverResponse=i.serverResponse,s}return n}function AT(t,e,n){const r=e.fullServerUrl(),i=ri(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fr(i,s,dh(t,n),o);return a.errorHandler=fh(e),a}function kU(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ri(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new fr(a,c,TU(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Io(e),l}function AU(t,e,n){const r=e.fullServerUrl(),i=ri(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fr(i,s,SU(t,n),o);return a.errorHandler=fh(e),a}function CU(t,e,n,r){const i=e.fullServerUrl(),s=ri(i,t.host,t._protocol),o="PATCH",a=Rp(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new fr(s,o,dh(t,r),u);return l.headers=c,l.body=a,l.errorHandler=fh(e),l}function xU(t,e){const n=e.fullServerUrl(),r=ri(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new fr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=fh(e),a}function RU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function CT(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RU(null,e)),r}function NU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let R=0;R<2;R++)E=E+Math.random().toString().slice(2);return E}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=CT(e,r,i),l=Rp(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Kn.getBlob(h,r,d);if(f===null)throw gT();const p={name:u.fullPath},y=ri(s,t.host,t._protocol),b="POST",v=t.maxUploadRetryTime,_=new fr(y,b,dh(t,n),v);return _.urlParams=p,_.headers=o,_.body=f.uploadData(),_.errorHandler=Io(e),_}class Ju{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Np(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Vn(!1)}return Vn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function PU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=CT(e,r,i),a={name:o.fullPath},c=ri(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Rp(o,n),d=t.maxUploadRetryTime;function f(y){Np(y);let b;try{b=y.getResponseHeader("X-Goog-Upload-URL")}catch{Vn(!1)}return Vn(lh(b)),b}const p=new fr(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Io(e),p}function DU(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=Np(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Vn(!1)}h||Vn(!1);const d=Number(h);return Vn(!isNaN(d)),new Ju(d,r.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new fr(n,o,s,a);return c.headers=i,c.errorHandler=Io(e),c}const Kv=256*1024;function OU(t,e,n,r,i,s,o,a){const c=new Ju(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw KF();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,d);if(y===null)throw gT();function b(R,F){const z=Np(R,["active","final"]),ee=c.current+l,Q=r.size();let oe;return z==="final"?oe=dh(e,s)(R,F):oe=null,new Ju(ee,Q,z==="final",oe)}const v="POST",_=e.maxUploadRetryTime,E=new fr(n,v,b,_);return E.headers=p,E.body=y.uploadData(),E.progressCallback=a||null,E.errorHandler=Io(t),E}/**
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
 */const LU={STATE_CHANGED:"state_changed"},Pt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Jh(t){switch(t){case"running":case"pausing":case"canceling":return Pt.RUNNING;case"paused":return Pt.PAUSED;case"success":return Pt.SUCCESS;case"canceled":return Pt.CANCELED;case"error":return Pt.ERROR;default:return Pt.ERROR}}/**
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
 */class MU{constructor(e,n,r){if(ZF(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function gs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class FU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Fo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class UU extends FU{initXhr(){this.xhr_.responseType="text"}}function Nn(){return new UU}/**
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
 */class xT{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=hh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(bT(i.status,[]))if(s)i=mT();else{this.sleepTime=Math.max(this.sleepTime*2,FF),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=PU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Nn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=DU(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Nn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Kv*this._chunkMultiplier,n=new Ju(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=OU(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Nn,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Kv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=AT(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Nn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=NU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Nn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=pT(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Jh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new MU(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Jh(this._state)){case Pt.SUCCESS:gs(this._resolve.bind(null,this.snapshot))();break;case Pt.CANCELED:case Pt.ERROR:const n=this._reject;gs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Jh(this._state)){case Pt.RUNNING:case Pt.PAUSED:e.next&&gs(e.next.bind(e,this.snapshot))();break;case Pt.SUCCESS:e.complete&&gs(e.complete.bind(e))();break;case Pt.CANCELED:case Pt.ERROR:e.error&&gs(e.error.bind(e,this._error))();break;default:e.error&&gs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Xi{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xi(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ST(this._location.path)}get storage(){return this._service}get parent(){const e=pU(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new Xi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vT(e)}}function VU(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new xT(t,new Kn(e),n)}function BU(t){const e={prefixes:[],items:[]};return RT(t,e).then(()=>e)}async function RT(t,e,n){const i=await NT(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await RT(t,e,i.nextPageToken)}function NT(t,e){e!=null&&typeof e.maxResults=="number"&&of("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=kU(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Nn)}function $U(t){t._throwIfRoot("getMetadata");const e=AT(t.storage,t._location,hh());return t.storage.makeRequestWithTokens(e,Nn)}function qU(t,e){t._throwIfRoot("updateMetadata");const n=CU(t.storage,t._location,e,hh());return t.storage.makeRequestWithTokens(n,Nn)}function jU(t){t._throwIfRoot("getDownloadURL");const e=AU(t.storage,t._location,hh());return t.storage.makeRequestWithTokens(e,Nn).then(n=>{if(n===null)throw WF();return n})}function zU(t){t._throwIfRoot("deleteObject");const e=xU(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Nn)}function PT(t,e){const n=gU(t._location.path,e),r=new Et(t._location.bucket,n);return new Xi(t.storage,r)}/**
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
 */function HU(t){return/^[A-Za-z]+:\/\//.test(t)}function KU(t,e){return new Xi(t,e)}function DT(t,e){if(t instanceof Pp){const n=t;if(n._bucket==null)throw HF();const r=new Xi(n,n._bucket);return e!=null?DT(r,e):r}else return e!==void 0?PT(t,e):t}function WU(t,e){if(e&&HU(e)){if(t instanceof Pp)return KU(t,e);throw Ms("To use ref(service, url), the first argument must be a Storage instance.")}else return DT(t,e)}function Wv(t,e){const n=e==null?void 0:e[fT];return n==null?null:Et.makeFromBucketSpec(n,t)}function GU(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Hb(i,t.app.options.projectId))}class Pp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=dT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LF,this._maxUploadRetryTime=MF,this._requests=new Set,i!=null?this._bucket=Et.makeFromBucketSpec(i,this._host):this._bucket=Wv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=Wv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){of("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){of("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new YF(yT());{const o=oU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Gv="@firebase/storage",Yv="0.9.14";/**
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
 */const YU="storage";function QU(t,e,n){return t=H(t),VU(t,e,n)}function XU(t){return t=H(t),$U(t)}function JU(t,e){return t=H(t),qU(t,e)}function ZU(t,e){return t=H(t),NT(t,e)}function eV(t){return t=H(t),BU(t)}function tV(t){return t=H(t),jU(t)}function nV(t){return t=H(t),zU(t)}function Qv(t,e){return t=H(t),WU(t,e)}function rV(t,e){return PT(t,e)}function iV(t,e,n,r={}){GU(t,e,n,r)}function sV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Pp(n,r,i,e,Yr)}function oV(){er(new sn(YU,sV,"PUBLIC").setMultipleInstances(!0)),rn(Gv,Yv,""),rn(Gv,Yv,"esm2017")}oV();/**
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
 */class Gc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class Xv{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Gc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Gc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Gc(o,this,this._ref)):s={next:n.next?o=>n.next(new Gc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class Jv{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Jn(e,this._service))}get items(){return this._delegate.items.map(e=>new Jn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class Jn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=rV(this._delegate,e);return new Jn(n,this.storage)}get root(){return new Jn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Jn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Xv(QU(this._delegate,e,n),this)}putString(e,n=tn.RAW,r){this._throwIfRoot("putString");const i=_T(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Xv(new xT(this._delegate,new Kn(i.data,!0),s),this)}listAll(){return eV(this._delegate).then(e=>new Jv(e,this.storage))}list(e){return ZU(this._delegate,e||void 0).then(n=>new Jv(n,this.storage))}getMetadata(){return XU(this._delegate)}updateMetadata(e){return JU(this._delegate,e)}getDownloadURL(){return tV(this._delegate)}delete(){return this._throwIfRoot("delete"),nV(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw vT(e)}}/**
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
 */class OT{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Zv(e))throw Ms("ref() expected a child path but got a URL, use refFromURL instead.");return new Jn(Qv(this._delegate,e),this)}refFromURL(e){if(!Zv(e))throw Ms("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Et.makeFromUrl(e,this._delegate.host)}catch{throw Ms("refFromUrl() expected a valid full URL but got an invalid one.")}return new Jn(Qv(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){iV(this._delegate,e,n,r)}}function Zv(t){return/^[A-Za-z]+:\/\//.test(t)}const aV="@firebase/storage-compat",cV="0.1.22";/**
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
 */const uV="storage-compat";function lV(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new OT(n,r)}function hV(t){const e={TaskState:Pt,TaskEvent:LU,StringFormat:tn,Storage:OT,Reference:Jn};t.INTERNAL.registerComponent(new sn(uV,lV,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(aV,cV)}hV(ts);const Dp=ts.initializeApp({apiKey:"AIzaSyAQ4qXhhppVXojxdxbCd2-9WGB6MKoKb5Q",authDomain:"web-siac-automatizacion.firebaseapp.com",projectId:"web-siac-automatizacion",storageBucket:"web-siac-automatizacion.appspot.com",messagingSenderId:"763456327866",appId:"1:763456327866:web:06f82ffd775da3d18f7283"}),P$=Dp.firestore(),dV=Dp.auth(),D$=Dp.storage().ref(),fV=()=>(t,e,n)=>{dV.onAuthStateChanged(function(r){if(!r)return n({path:"/admin_login?returnPath=sa_admin"});n()})},mV=WA({history:uA("/"),routes:[{path:"/building",name:"Door",component:()=>ui(()=>import("./Building.f5fd5cdd.js"),["assets/Building.f5fd5cdd.js","assets/Building.04c4aae6.css"])},{path:"/",name:"home",component:()=>ui(()=>import("./Home.3753c8b5.js"),["assets/Home.3753c8b5.js","assets/Gears.3031ada5.js","assets/Gears.337ed3e4.css","assets/Home.3795743f.css"])},{path:"/works",name:"works",component:()=>ui(()=>import("./Works.180b3d50.js"),["assets/Works.180b3d50.js","assets/Gears.3031ada5.js","assets/Gears.337ed3e4.css","assets/Works.08cc6f70.css"])},{path:"/services",name:"services",component:()=>ui(()=>import("./Services.e1850815.js"),["assets/Services.e1850815.js","assets/Gears.3031ada5.js","assets/Gears.337ed3e4.css","assets/Services.7d291843.css"])},{path:"/about",name:"about",component:()=>ui(()=>import("./About.8be6f15d.js"),["assets/About.8be6f15d.js","assets/Gears.3031ada5.js","assets/Gears.337ed3e4.css","assets/About.fda0ca50.css"])},{path:"/admin_login",name:"login",component:()=>ui(()=>import("./Login.a777684e.js"),["assets/Login.a777684e.js","assets/Login.e1620305.css"])},{path:"/sa_admin",name:"admin",component:()=>ui(()=>import("./Admin.172b4209.js"),["assets/Admin.172b4209.js","assets/Admin.aee69300.css"]),beforeEnter:fV()}]});function ew(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ew(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ew(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zu(t){return Zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zu(t)}function pV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function gV(t,e,n){return e&&tw(t.prototype,e),n&&tw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Op(t,e){return vV(t)||bV(t,e)||LT(t,e)||IV()}function kc(t){return yV(t)||wV(t)||LT(t)||_V()}function yV(t){if(Array.isArray(t))return af(t)}function vV(t){if(Array.isArray(t))return t}function wV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bV(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function LT(t,e){if(!!t){if(typeof t=="string")return af(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return af(t,e)}}function af(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nw=function(){},Lp={},MT={},FT=null,UT={mark:nw,measure:nw};try{typeof window<"u"&&(Lp=window),typeof document<"u"&&(MT=document),typeof MutationObserver<"u"&&(FT=MutationObserver),typeof performance<"u"&&(UT=performance)}catch{}var EV=Lp.navigator||{},rw=EV.userAgent,iw=rw===void 0?"":rw,Kr=Lp,Re=MT,sw=FT,Yc=UT;Kr.document;var mr=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",VT=~iw.indexOf("MSIE")||~iw.indexOf("Trident/"),Qc,Xc,Jc,Zc,eu,ir="___FONT_AWESOME___",cf=16,BT="fa",$T="svg-inline--fa",Ji="data-fa-i2svg",uf="data-fa-pseudo-element",TV="data-fa-pseudo-element-pending",Mp="data-prefix",Fp="data-icon",ow="fontawesome-i2svg",SV="async",kV=["HTML","HEAD","STYLE","SCRIPT"],qT=function(){try{return!0}catch{return!1}}(),xe="classic",qe="sharp",Up=[xe,qe];function Ac(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[xe]}})}var Wa=Ac((Qc={},et(Qc,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),et(Qc,qe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Qc)),Ga=Ac((Xc={},et(Xc,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),et(Xc,qe,{solid:"fass"}),Xc)),Ya=Ac((Jc={},et(Jc,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),et(Jc,qe,{fass:"fa-solid"}),Jc)),AV=Ac((Zc={},et(Zc,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),et(Zc,qe,{"fa-solid":"fass"}),Zc)),CV=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,jT="fa-layers-text",xV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,RV=Ac((eu={},et(eu,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),et(eu,qe,{900:"fass"}),eu)),zT=[1,2,3,4,5,6,7,8,9,10],NV=zT.concat([11,12,13,14,15,16,17,18,19,20]),PV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qa=new Set;Object.keys(Ga[xe]).map(Qa.add.bind(Qa));Object.keys(Ga[qe]).map(Qa.add.bind(Qa));var DV=[].concat(Up,kc(Qa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xi.GROUP,xi.SWAP_OPACITY,xi.PRIMARY,xi.SECONDARY]).concat(zT.map(function(t){return"".concat(t,"x")})).concat(NV.map(function(t){return"w-".concat(t)})),ua=Kr.FontAwesomeConfig||{};function OV(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function LV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Re&&typeof Re.querySelector=="function"){var MV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];MV.forEach(function(t){var e=Op(t,2),n=e[0],r=e[1],i=LV(OV(n));i!=null&&(ua[r]=i)})}var HT={styleDefault:"solid",familyDefault:"classic",cssPrefix:BT,replacementClass:$T,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ua.familyPrefix&&(ua.cssPrefix=ua.familyPrefix);var no=q(q({},HT),ua);no.autoReplaceSvg||(no.observeMutations=!1);var G={};Object.keys(HT).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){no[t]=n,la.forEach(function(r){return r(G)})},get:function(){return no[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){no.cssPrefix=e,la.forEach(function(n){return n(G)})},get:function(){return no.cssPrefix}});Kr.FontAwesomeConfig=G;var la=[];function FV(t){return la.push(t),function(){la.splice(la.indexOf(t),1)}}var Er=cf,Ln={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function UV(t){if(!(!t||!mr)){var e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Re.head.insertBefore(e,r),t}}var VV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xa(){for(var t=12,e="";t-- >0;)e+=VV[Math.random()*62|0];return e}function Eo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vp(t){return t.classList?Eo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function KT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function BV(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(KT(t[n]),'" ')},"").trim()}function mh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Bp(t){return t.size!==Ln.size||t.x!==Ln.x||t.y!==Ln.y||t.rotate!==Ln.rotate||t.flipX||t.flipY}function $V(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function qV(t){var e=t.transform,n=t.width,r=n===void 0?cf:n,i=t.height,s=i===void 0?cf:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&VT?c+="translate(".concat(e.x/Er-r/2,"em, ").concat(e.y/Er-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Er,"em), calc(-50% + ").concat(e.y/Er,"em)) "):c+="translate(".concat(e.x/Er,"em, ").concat(e.y/Er,"em) "),c+="scale(".concat(e.size/Er*(e.flipX?-1:1),", ").concat(e.size/Er*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var jV=`:root, :host {
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
}`;function WT(){var t=BT,e=$T,n=G.cssPrefix,r=G.replacementClass,i=jV;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var aw=!1;function Zh(){G.autoAddCss&&!aw&&(UV(WT()),aw=!0)}var zV={mixout:function(){return{dom:{css:WT,insertCss:Zh}}},hooks:function(){return{beforeDOMElementCreation:function(){Zh()},beforeI2svg:function(){Zh()}}}},sr=Kr||{};sr[ir]||(sr[ir]={});sr[ir].styles||(sr[ir].styles={});sr[ir].hooks||(sr[ir].hooks={});sr[ir].shims||(sr[ir].shims=[]);var pn=sr[ir],GT=[],HV=function t(){Re.removeEventListener("DOMContentLoaded",t),el=1,GT.map(function(e){return e()})},el=!1;mr&&(el=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),el||Re.addEventListener("DOMContentLoaded",HV));function KV(t){!mr||(el?setTimeout(t,0):GT.push(t))}function Cc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?KT(t):"<".concat(e," ").concat(BV(r),">").concat(s.map(Cc).join(""),"</").concat(e,">")}function cw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var WV=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ed=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?WV(n,i):n,c,u,l;for(r===void 0?(c=1,l=e[s[0]]):(c=0,l=r);c<o;c++)u=s[c],l=a(l,e[u],u,e);return l};function GV(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function lf(t){var e=GV(t);return e.length===1?e[0].toString(16):null}function YV(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function uw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function hf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=uw(e);typeof pn.hooks.addPack=="function"&&!i?pn.hooks.addPack(t,uw(e)):pn.styles[t]=q(q({},pn.styles[t]||{}),s),t==="fas"&&hf("fa",e)}var tu,nu,ru,Es=pn.styles,QV=pn.shims,XV=(tu={},et(tu,xe,Object.values(Ya[xe])),et(tu,qe,Object.values(Ya[qe])),tu),$p=null,YT={},QT={},XT={},JT={},ZT={},JV=(nu={},et(nu,xe,Object.keys(Wa[xe])),et(nu,qe,Object.keys(Wa[qe])),nu);function ZV(t){return~DV.indexOf(t)}function eB(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!ZV(i)?i:null}var e1=function(){var e=function(s){return ed(Es,function(o,a,c){return o[c]=ed(a,s,{}),o},{})};YT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),QT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),ZT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Es||G.autoFetchSvg,r=ed(QV,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});XT=r.names,JT=r.unicodes,$p=ph(G.styleDefault,{family:G.familyDefault})};FV(function(t){$p=ph(t.styleDefault,{family:G.familyDefault})});e1();function qp(t,e){return(YT[t]||{})[e]}function tB(t,e){return(QT[t]||{})[e]}function Ri(t,e){return(ZT[t]||{})[e]}function t1(t){return XT[t]||{prefix:null,iconName:null}}function nB(t){var e=JT[t],n=qp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return $p}var jp=function(){return{prefix:null,iconName:null,rest:[]}};function ph(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?xe:n,i=Wa[r][t],s=Ga[r][t]||Ga[r][i],o=t in pn.styles?t:null;return s||o||null}var lw=(ru={},et(ru,xe,Object.keys(Ya[xe])),et(ru,qe,Object.keys(Ya[qe])),ru);function gh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},et(e,xe,"".concat(G.cssPrefix,"-").concat(xe)),et(e,qe,"".concat(G.cssPrefix,"-").concat(qe)),e),o=null,a=xe;(t.includes(s[xe])||t.some(function(u){return lw[xe].includes(u)}))&&(a=xe),(t.includes(s[qe])||t.some(function(u){return lw[qe].includes(u)}))&&(a=qe);var c=t.reduce(function(u,l){var h=eB(G.cssPrefix,l);if(Es[l]?(l=XV[a].includes(l)?AV[a][l]:l,o=l,u.prefix=l):JV[a].indexOf(l)>-1?(o=l,u.prefix=ph(l,{family:a})):h?u.iconName=h:l!==G.replacementClass&&l!==s[xe]&&l!==s[qe]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var d=o==="fa"?t1(u.iconName):{},f=Ri(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||f||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Es.far&&Es.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},jp());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===qe&&(Es.fass||G.autoFetchSvg)&&(c.prefix="fass",c.iconName=Ri(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Wr()||"fas"),c}var rB=function(){function t(){pV(this,t),this.definitions={}}return gV(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=q(q({},n.definitions[a]||{}),o[a]),hf(a,o[a]);var c=Ya[xe][a];c&&hf(c,o[a]),e1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,u=o.icon,l=u[2];n[a]||(n[a]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}]),t}(),hw=[],Ts={},Fs={},iB=Object.keys(Fs);function sB(t,e){var n=e.mixoutsTo;return hw=t,Ts={},Object.keys(Fs).forEach(function(r){iB.indexOf(r)===-1&&delete Fs[r]}),hw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ts[o]||(Ts[o]=[]),Ts[o].push(s[o])})}r.provides&&r.provides(Fs)}),n}function df(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ts[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Zi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ts[t]||[];i.forEach(function(s){s.apply(null,n)})}function or(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Fs[t]?Fs[t].apply(null,e):void 0}function ff(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wr();if(!!e)return e=Ri(n,e)||e,cw(n1.definitions,n,e)||cw(pn.styles,n,e)}var n1=new rB,oB=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Zi("noAuto")},aB={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(Zi("beforeI2svg",e),or("pseudoElements2svg",e),or("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,KV(function(){uB({autoReplaceSvgRoot:n}),Zi("watch",e)})}},cB={icon:function(e){if(e===null)return null;if(Zu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ri(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ph(e[0]);return{prefix:r,iconName:Ri(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(CV))){var i=gh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Wr(),iconName:Ri(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Wr();return{prefix:s,iconName:Ri(s,e)||e}}}},Jt={noAuto:oB,config:G,dom:aB,parse:cB,library:n1,findIconDefinition:ff,toHtml:Cc},uB=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Re:n;(Object.keys(pn.styles).length>0||G.autoFetchSvg)&&mr&&G.autoReplaceSvg&&Jt.dom.i2svg({node:r})};function yh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Cc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!mr){var r=Re.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function lB(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Bp(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};i.style=mh(q(q({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function hB(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},i),{},{id:o}),children:r}]}]}function zp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,u=t.maskId,l=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,p=r.found?r:n,y=p.width,b=p.height,v=i==="fak",_=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(oe){return h.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(h.classes).join(" "),E={children:[],attributes:q(q({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},R=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};f&&(E.attributes[Ji]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(l||Xa())},children:[c]}),delete E.attributes.title);var F=q(q({},E),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:q(q({},R),h.styles)}),z=r.found&&n.found?or("generateAbstractMask",F)||{children:[],attributes:{}}:or("generateAbstractIcon",F)||{children:[],attributes:{}},ee=z.children,Q=z.attributes;return F.children=ee,F.attributes=Q,a?hB(F):lB(F)}function dw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,u=q(q(q({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[Ji]="");var l=q({},o.styles);Bp(i)&&(l.transform=qV({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var h=mh(l);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function dB(t){var e=t.content,n=t.title,r=t.extra,i=q(q(q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=mh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var td=pn.styles;function mf(t){var e=t[0],n=t[1],r=t.slice(4),i=Op(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(xi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(xi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(xi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var fB={found:!1,width:512,height:512};function mB(t,e){!qT&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function pf(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Wr()),new Promise(function(r,i){if(or("missingIconAbstract"),n==="fa"){var s=t1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&td[e]&&td[e][t]){var o=td[e][t];return r(mf(o))}mB(t,e),r(q(q({},fB),{},{icon:G.showMissingIcons&&t?or("missingIconAbstract")||{}:{}}))})}var fw=function(){},gf=G.measurePerformance&&Yc&&Yc.mark&&Yc.measure?Yc:{mark:fw,measure:fw},Ho='FA "6.2.1"',pB=function(e){return gf.mark("".concat(Ho," ").concat(e," begins")),function(){return r1(e)}},r1=function(e){gf.mark("".concat(Ho," ").concat(e," ends")),gf.measure("".concat(Ho," ").concat(e),"".concat(Ho," ").concat(e," begins"),"".concat(Ho," ").concat(e," ends"))},Hp={begin:pB,end:r1},vu=function(){};function mw(t){var e=t.getAttribute?t.getAttribute(Ji):null;return typeof e=="string"}function gB(t){var e=t.getAttribute?t.getAttribute(Mp):null,n=t.getAttribute?t.getAttribute(Fp):null;return e&&n}function yB(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function vB(){if(G.autoReplaceSvg===!0)return wu.replace;var t=wu[G.autoReplaceSvg];return t||wu.replace}function wB(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function bB(t){return Re.createElement(t)}function i1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?wB:bB:n;if(typeof t=="string")return Re.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(i1(o,{ceFn:r}))}),i}function _B(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var wu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(i1(i),n)}),n.getAttribute(Ji)===null&&G.keepOriginalSource){var r=Re.createComment(_B(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Vp(n).indexOf(G.replacementClass))return wu.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===G.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Cc(a)}).join(`
`);n.setAttribute(Ji,""),n.innerHTML=o}};function pw(t){t()}function s1(t,e){var n=typeof e=="function"?e:vu;if(t.length===0)n();else{var r=pw;G.mutateApproach===SV&&(r=Kr.requestAnimationFrame||pw),r(function(){var i=vB(),s=Hp.begin("mutate");t.map(i),s(),n()})}}var Kp=!1;function o1(){Kp=!0}function yf(){Kp=!1}var tl=null;function gw(t){if(!!sw&&!!G.observeMutations){var e=t.treeCallback,n=e===void 0?vu:e,r=t.nodeCallback,i=r===void 0?vu:r,s=t.pseudoElementsCallback,o=s===void 0?vu:s,a=t.observeMutationsRoot,c=a===void 0?Re:a;tl=new sw(function(u){if(!Kp){var l=Wr();Eo(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!mw(h.addedNodes[0])&&(G.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&G.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&mw(h.target)&&~PV.indexOf(h.attributeName))if(h.attributeName==="class"&&gB(h.target)){var d=gh(Vp(h.target)),f=d.prefix,p=d.iconName;h.target.setAttribute(Mp,f||l),p&&h.target.setAttribute(Fp,p)}else yB(h.target)&&i(h.target)})}}),mr&&tl.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function IB(){!tl||tl.disconnect()}function EB(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function TB(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=gh(Vp(t));return i.prefix||(i.prefix=Wr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=tB(i.prefix,t.innerText)||qp(i.prefix,lf(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function SB(t){var e=Eo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||Xa()):(e["aria-hidden"]="true",e.focusable="false")),e}function kB(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ln,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=TB(t),r=n.iconName,i=n.prefix,s=n.rest,o=SB(t),a=df("parseNodeAttributes",{},t),c=e.styleParser?EB(t):[];return q({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ln,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var AB=pn.styles;function a1(t){var e=G.autoReplaceSvg==="nest"?yw(t,{styleParser:!1}):yw(t);return~e.extra.classes.indexOf(jT)?or("generateLayersText",t,e):or("generateSvgReplacementMutation",t,e)}var Gr=new Set;Up.map(function(t){Gr.add("fa-".concat(t))});Object.keys(Wa[xe]).map(Gr.add.bind(Gr));Object.keys(Wa[qe]).map(Gr.add.bind(Gr));Gr=kc(Gr);function vw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();var n=Re.documentElement.classList,r=function(h){return n.add("".concat(ow,"-").concat(h))},i=function(h){return n.remove("".concat(ow,"-").concat(h))},s=G.autoFetchSvg?Gr:Up.map(function(l){return"fa-".concat(l)}).concat(Object.keys(AB));s.includes("fa")||s.push("fa");var o=[".".concat(jT,":not([").concat(Ji,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(Ji,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Eo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Hp.begin("onTree"),u=a.reduce(function(l,h){try{var d=a1(h);d&&l.push(d)}catch(f){qT||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise(function(l,h){Promise.all(u).then(function(d){s1(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(d){c(),h(d)})})}function CB(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;a1(t).then(function(n){n&&s1([n],e)})}function xB(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ff(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ff(i||{})),t(r,q(q({},n),{},{mask:i}))}}var RB=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ln:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,u=n.maskId,l=u===void 0?null:u,h=n.title,d=h===void 0?null:h,f=n.titleId,p=f===void 0?null:f,y=n.classes,b=y===void 0?[]:y,v=n.attributes,_=v===void 0?{}:v,E=n.styles,R=E===void 0?{}:E;if(!!e){var F=e.prefix,z=e.iconName,ee=e.icon;return yh(q({type:"icon"},e),function(){return Zi("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(d?_["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(p||Xa()):(_["aria-hidden"]="true",_.focusable="false")),zp({icons:{main:mf(ee),mask:c?mf(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:z,transform:q(q({},Ln),i),symbol:o,title:d,maskId:l,titleId:p,extra:{attributes:_,styles:R,classes:b}})})}},NB={mixout:function(){return{icon:xB(RB)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vw,n.nodeCallback=CB,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Re:r,s=n.callback,o=s===void 0?function(){}:s;return vw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,u=r.symbol,l=r.mask,h=r.maskId,d=r.extra;return new Promise(function(f,p){Promise.all([pf(i,a),l.iconName?pf(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=Op(y,2),v=b[0],_=b[1];f([n,zp({icons:{main:v,mask:_},prefix:a,iconName:i,transform:c,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=mh(a);c.length>0&&(i.style=c);var u;return Bp(o)&&(u=or("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},PB={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return yh({type:"layer"},function(){Zi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(kc(s)).join(" ")},children:o}]})}}}},DB={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,l=r.styles,h=l===void 0?{}:l;return yh({type:"counter",content:n},function(){return Zi("beforeDOMElementCreation",{content:n,params:r}),dB({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(kc(a))}})})}}}},OB={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ln:i,o=r.title,a=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,l=r.attributes,h=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return yh({type:"text",content:n},function(){return Zi("beforeDOMElementCreation",{content:n,params:r}),dw({content:n,transform:q(q({},Ln),s),title:a,extra:{attributes:h,styles:f,classes:["".concat(G.cssPrefix,"-layers-text")].concat(kc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(VT){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/u,c=l.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,dw({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},LB=new RegExp('"',"ug"),ww=[1105920,1112319];function MB(t){var e=t.replace(LB,""),n=YV(e,0),r=n>=ww[0]&&n<=ww[1],i=e.length===2?e[0]===e[1]:!1;return{value:lf(i?e[0]:e),isSecondary:r||i}}function bw(t,e){var n="".concat(TV).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Eo(t.children),o=s.filter(function(ee){return ee.getAttribute(uf)===e})[0],a=Kr.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(xV),u=a.getPropertyValue("font-weight"),l=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&l!=="none"&&l!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?qe:xe,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ga[d][c[2].toLowerCase()]:RV[d][u],p=MB(h),y=p.value,b=p.isSecondary,v=c[0].startsWith("FontAwesome"),_=qp(f,y),E=_;if(v){var R=nB(y);R.iconName&&R.prefix&&(_=R.iconName,f=R.prefix)}if(_&&!b&&(!o||o.getAttribute(Mp)!==f||o.getAttribute(Fp)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var F=kB(),z=F.extra;z.attributes[uf]=e,pf(_,f).then(function(ee){var Q=zp(q(q({},F),{},{icons:{main:ee,mask:jp()},prefix:f,iconName:E,extra:z,watchable:!0})),oe=Re.createElement("svg");e==="::before"?t.insertBefore(oe,t.firstChild):t.appendChild(oe),oe.outerHTML=Q.map(function(ve){return Cc(ve)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function FB(t){return Promise.all([bw(t,"::before"),bw(t,"::after")])}function UB(t){return t.parentNode!==document.head&&!~kV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(uf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _w(t){if(!!mr)return new Promise(function(e,n){var r=Eo(t.querySelectorAll("*")).filter(UB).map(FB),i=Hp.begin("searchPseudoElements");o1(),Promise.all(r).then(function(){i(),yf(),e()}).catch(function(){i(),yf(),n()})})}var VB={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_w,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Re:r;G.searchPseudoElements&&_w(i)}}},Iw=!1,BB={mixout:function(){return{dom:{unwatch:function(){o1(),Iw=!0}}}},hooks:function(){return{bootstrap:function(){gw(df("mutationObserverCallbacks",{}))},noAuto:function(){IB()},watch:function(n){var r=n.observeMutationsRoot;Iw?yf():gw(df("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ew=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},$B={mixout:function(){return{parse:{transform:function(n){return Ew(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ew(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:q({},f.outer),children:[{tag:"g",attributes:q({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:q(q({},r.icon.attributes),f.path)}]}]}}}},nd={x:0,y:0,width:"100%",height:"100%"};function Tw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qB(t){return t.tag==="g"?t.children:[t]}var jB={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?gh(i.split(" ").map(function(o){return o.trim()})):jp();return s.prefix||(s.prefix=Wr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,u=s.width,l=s.icon,h=o.width,d=o.icon,f=$V({transform:c,containerWidth:h,iconWidth:u}),p={tag:"rect",attributes:q(q({},nd),{},{fill:"white"})},y=l.children?{children:l.children.map(Tw)}:{},b={tag:"g",attributes:q({},f.inner),children:[Tw(q({tag:l.tag,attributes:q(q({},l.attributes),f.path)},y))]},v={tag:"g",attributes:q({},f.outer),children:[b]},_="mask-".concat(a||Xa()),E="clip-".concat(a||Xa()),R={tag:"mask",attributes:q(q({},nd),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:qB(d)},R]};return r.push(F,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(_,")")},nd)}),{children:r,attributes:i}}}},zB={provides:function(e){var n=!1;Kr.matchMedia&&(n=Kr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:q(q({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=q(q({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:q(q({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:q(q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:q(q({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:q(q({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},HB={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},KB=[zV,NB,PB,DB,OB,VB,BB,$B,jB,zB,HB];sB(KB,{mixoutsTo:Jt});Jt.noAuto;var c1=Jt.config,WB=Jt.library;Jt.dom;var nl=Jt.parse;Jt.findIconDefinition;Jt.toHtml;var GB=Jt.icon;Jt.layer;var YB=Jt.text;Jt.counter;function Sw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sw(Object(n),!0).forEach(function(r){Mt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rl(t){return rl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rl(t)}function Mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function XB(t,e){if(t==null)return{};var n=QB(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function vf(t){return JB(t)||ZB(t)||e$(t)||t$()}function JB(t){if(Array.isArray(t))return wf(t)}function ZB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function e$(t,e){if(!!t){if(typeof t=="string")return wf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wf(t,e)}}function wf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function t$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u1={exports:{}};(function(t){(function(e){var n=function(v,_,E){if(!u(_)||h(_)||d(_)||f(_)||c(_))return _;var R,F=0,z=0;if(l(_))for(R=[],z=_.length;F<z;F++)R.push(n(v,_[F],E));else{R={};for(var ee in _)Object.prototype.hasOwnProperty.call(_,ee)&&(R[v(ee,E)]=n(v,_[ee],E))}return R},r=function(v,_){_=_||{};var E=_.separator||"_",R=_.split||/(?=[A-Z])/;return v.split(R).join(E)},i=function(v){return p(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,E){return E?E.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var _=i(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},l=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},f=function(v){return a.call(v)=="[object Boolean]"},p=function(v){return v=v-0,v===v},y=function(v,_){var E=_&&"process"in _?_.process:_;return typeof E!="function"?v:function(R,F){return E(R,v,F)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,_){return n(y(i,_),v)},decamelizeKeys:function(v,_){return n(y(o,_),v,_)},pascalizeKeys:function(v,_){return n(y(s,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(n$)})(u1);var r$=u1.exports,i$=["class","style"];function s$(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=r$.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function o$(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Wp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Wp(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,u){var l=t.attributes[u];switch(u){case"class":c.class=o$(l);break;case"style":c.style=s$(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=XB(n,i$);return ec(t.tag,dn(dn(dn({},e),{},{class:i.class,style:dn(dn({},i.style),o)},i.attrs),a),r)}var l1=!1;try{l1=!0}catch{}function a$(){if(!l1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ha(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Mt({},t,e):{}}function c$(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Mt(e,"fa-".concat(t.size),t.size!==null),Mt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Mt(e,"fa-pull-".concat(t.pull),t.pull!==null),Mt(e,"fa-swap-opacity",t.swapOpacity),Mt(e,"fa-bounce",t.bounce),Mt(e,"fa-shake",t.shake),Mt(e,"fa-beat",t.beat),Mt(e,"fa-fade",t.fade),Mt(e,"fa-beat-fade",t.beatFade),Mt(e,"fa-flash",t.flash),Mt(e,"fa-spin-pulse",t.spinPulse),Mt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function kw(t){if(t&&rl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(nl.icon)return nl.icon(t);if(t===null)return null;if(rl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var u$=Za({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Ue(function(){return kw(e.icon)}),s=Ue(function(){return ha("classes",c$(e))}),o=Ue(function(){return ha("transform",typeof e.transform=="string"?nl.transform(e.transform):e.transform)}),a=Ue(function(){return ha("mask",kw(e.mask))}),c=Ue(function(){return GB(i.value,dn(dn(dn(dn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Ko(c,function(l){if(!l)return a$("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=Ue(function(){return c.value?Wp(c.value.abstract[0],{},r):null});return function(){return u.value}}});Za({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=c1.familyPrefix,s=Ue(function(){return["".concat(i,"-layers")].concat(vf(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return ec("div",{class:s.value},r.default?r.default():[])}}});Za({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=c1.familyPrefix,s=Ue(function(){return ha("classes",[].concat(vf(e.counter?["".concat(i,"-layers-counter")]:[]),vf(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=Ue(function(){return ha("transform",typeof e.transform=="string"?nl.transform(e.transform):e.transform)}),a=Ue(function(){var u=YB(e.value.toString(),dn(dn({},o.value),s.value)),l=u.abstract;return e.counter&&(l[0].attributes.class=l[0].attributes.class.replace("fa-layers-text","")),l[0]}),c=Ue(function(){return Wp(a.value,{},r)});return function(){return c.value}}});var l$={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},h$={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},d$={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},f$={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"]},m$={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},p$={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},g$={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},y$={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},v$={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},w$={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},b$={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};WB.add(p$,g$,l$,h$,y$,d$,f$,w$,v$,b$,m$);const Gp=Uk(jk);Gp.use(mV);Gp.component("font-awesome-icon",u$);Gp.mount("#app");export{pF as A,mF as B,Qu as C,Bv as D,_f as E,ln as F,oT as I,kb as T,Bk as _,Ib as a,Bt as b,k$ as c,A$ as d,bb as e,C$ as f,ek as g,E$ as h,J1 as i,Ff as j,S$ as k,lS as l,N$ as m,If as n,vb as o,I$ as p,T$ as q,NS as r,dV as s,_$ as t,x$ as u,R$ as v,Ko as w,OE as x,P$ as y,D$ as z};
