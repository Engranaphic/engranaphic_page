import{_ as D,r as Oe,o as p,c as m,e as he,n as Ye,f as L,g as E,t as Me,p as K,h as Q,a as n,i,F as Y,j as oe,k as Ne,l as H,w as G,b as f,u as Ue,m as I,T as j,q as we,s as w,v as U,x,y as R,z as qe,A as Je,B as Re,C as je,D as ae,E as Ke}from"./index.0999d800.js";import{N as Qe}from"./Formulario.vue_vue_type_style_index_0_scoped_552f8714_lang.e5936fad.js";const le=t=>(K("data-v-cd0914ec"),t=t(),Q(),t),Ze={class:"contact-button cursor-pointer flex align-items-center justify-content-center"},et=le(()=>n("span",null,null,-1)),tt=le(()=>n("span",null,null,-1)),nt=le(()=>n("span",null,null,-1)),at=le(()=>n("span",null,null,-1)),ot={__name:"ButtonNeon",props:["btn_icon","btn_text"],setup(t){const a=t;return(e,l)=>{const o=Oe("font-awesome-icon");return p(),m("div",Ze,[et,tt,nt,at,a.btn_icon?(p(),he(o,{key:0,class:Ye(["icon-mail",a.btn_text?"mr-3":""]),icon:a.btn_icon},null,8,["class","icon"])):L("",!0),E(" "+Me(a.btn_text),1)])}}},st=D(ot,[["__scopeId","data-v-cd0914ec"]]);const lt={class:"contenedor"},it={class:"bubbles"},rt={class:"bubbles"},ct={__name:"BackgroundBubble",props:["dark"],setup(t){i();const a=()=>(Math.random()*5.12+2.02).toFixed(2);return(e,l)=>(p(),m("div",lt,[n("div",it,[(p(),m(Y,null,oe(50,o=>n("span",{class:"bub1",style:Ne("--i:"+a()),key:o},null,4)),64))]),n("div",rt,[(p(),m(Y,null,oe(50,o=>n("span",{class:"bub2",style:Ne("--i:"+a()),key:o},null,4)),64))])]))}},ut=D(ct,[["__scopeId","data-v-43bb5a8b"]]);const dt={class:"container-slider"},_t={id:"slider"},vt={class:"slider_text"},ft={__name:"CarouselText",props:["content"],setup(t){const a=t,e=i(),l=i();H(()=>{l.value=setInterval(o,2e3),e.value=document.getElementById("slider"),e.value.style.width=""+a.content.length+"00%"});const o=()=>{let s=document.querySelectorAll(".slider_section")[0];if(!s){clearInterval(l.value);return}e.value.style.marginLeft="-100%",e.value.style.transition="all 1s ease",setTimeout(function(){e.value.style.transition="none",e.value.insertAdjacentElement("beforeend",s),e.value.style.marginLeft="-0%"},1e3)};return(s,d)=>(p(),m("div",dt,[n("div",_t,[(p(!0),m(Y,null,oe(a.content,(u,_)=>(p(),m("div",{key:_,class:"slider_section"},[n("span",vt,Me(u),1)]))),128))])]))}},pt=D(ft,[["__scopeId","data-v-8d93e001"]]);const We=t=>(K("data-v-8e2ec4b3"),t=t(),Q(),t),mt={id:"home"},gt={class:"gradient"},bt={class:"flex flex-column align-items-center justify-content-center"},ht=We(()=>n("div",{class:"title-banner flex flex-column align-items-center justify-content-center"},[n("h5",null,"ENGRANAPHIC"),n("span",{class:"flex align-items-end"},[n("h4",null,"Agencia"),E(),n("h3",null,"de")]),n("h2",null,"Dise\xF1o y Desarrollo")],-1)),wt={class:"listado flex flex-column"},yt=We(()=>n("div",{class:"text-banner flex flex-column align-items-center justify-content-center mt-5"},[n("p",null,[E(" Elaboraci\xF3n de proyectos de identidad de marca, "),n("br"),E("desde las fundaciones hasta los altos est\xE1ndares ")])],-1)),xt={__name:"Home",props:["position","dark"],emits:["form-pop"],setup(t,{emit:a}){const e=t,l=i(["Dise\xF1o Gr\xE1fico","Dise\xF1o y Desarrollo Web","Desarrollo de Aplicaciones","Social Media","Marketing Digital"]),o=i(0),s=i(60),d=i(),u=i(),_=i(),c=i();H(()=>{window.addEventListener("scroll",g),o.value=e.position,d.value=document.getElementById("home"),e.dark?(u.value=new URL("/assets/logoB1.03a14bf7.png",self.location).href,_.value="#ffffff"):(u.value=new URL("/assets/logoA1.5cb83374.png",self.location).href,_.value="#242424")});const g=k=>{let v=k.srcElement.scrollingElement.scrollTop;v<200&&(s.value=50),o.value<v?s.value>10&&(s.value-=1):s.value<50&&(s.value+=1),o.value=v};return G(()=>e.dark,()=>{e.dark?(u.value=new URL("/assets/logoB1.03a14bf7.png",self.location).href,_.value="#ffffff",c.value="url("+new URL("/assets/lengueta_dark.153abe6e.png",self.location).href+")"):(u.value=new URL("/assets/logoA1.5cb83374.png",self.location).href,_.value="#242424",c.value="url("+new URL("/assets/lengueta_color.87e5b9b0.png",self.location).href+")")}),(k,v)=>(p(),m("div",mt,[f(ut,{dark:e.dark},null,8,["dark"]),n("div",gt,[n("div",bt,[ht,n("div",wt,[f(pt,{class:"text-home",content:l.value},null,8,["content"])]),yt])])]))}},kt=D(xt,[["__scopeId","data-v-8e2ec4b3"]]),St="/assets/gear_serv.f47fc3d1.svg",Tt="/assets/mano.92a368b7.svg",$t="/assets/dise\xF1o.54bc75d7.webp",At="/assets/desarrollo.9c3edff0.webp",It="/assets/social.f8d5ae5a.webp",Et="/assets/marketing.bcaa4ebe.webp";const W=t=>(K("data-v-b8bb3b19"),t=t(),Q(),t),Ct={id:"service"},Lt=W(()=>n("div",{id:"service_orange_back"},null,-1)),Bt=W(()=>n("div",{id:"service_orange"},null,-1)),Nt={class:"box_container"},Rt={key:0,class:"flex"},jt=W(()=>n("div",{class:"about-title"},"SERVICIOS",-1)),Dt=W(()=>n("div",{class:"serv_icon flex flex-column align-items-center"},[n("img",{src:St,alt:"gear"}),n("img",{src:Tt,alt:"hand"})],-1)),Ot=[jt,Dt],Mt={key:0,class:"flex w-full flex-wrap lg:flex-nowrap justify-content-center"},Ut=W(()=>n("div",{class:"contenido"},[n("div",{class:"image"},[n("img",{src:$t,alt:"service"})]),n("div",{class:"text-serv"},"Dise\xF1o Gr\xE1fico"),n("div",{class:"text-info"},[E("Servicio orientado al marketing digital, especializado en imagen corporativa."),n("br"),n("br"),E(" Dise\xF1amos desde el logotipo hasta la papeler\xEDa y elementos institucionales de tu marca, adem\xE1s de dise\xF1o de interfaces y experiencias de usuario para Web y aplicaciones")])],-1)),Wt=W(()=>n("div",{class:"contenido"},[n("div",{class:"image"},[n("img",{src:At,alt:"service"})]),n("div",{class:"text-serv"},"Desarrollo Inform\xE1tico"),n("div",{class:"text-info"},[E("Servicio orientado al desarrollo de sitios Web o aplicaciones de escritorio o m\xF3viles."),n("br"),n("br"),E("Incluye programaci\xF3n en c\xF3digo limpio y \xF3ptimo, hecho a medida de forma modular para lograr la mejor calidad para el cliente.")])],-1)),Pt=W(()=>n("div",{class:"contenido"},[n("div",{class:"image"},[n("img",{src:It,alt:"service"})]),n("div",{class:"text-serv"},"Social Media"),n("div",{class:"text-info"},[E("Trabajo con puesta en marcha inicial o continuando una campa\xF1a previa, gestionando RRSS de manera org\xE1nica y/o campa\xF1as ADS. con entrega de resultados mensuales."),n("br"),n("br"),E("El servicio cuenta con una flexibilidad de 3 planes b\xE1sico, medio y avanzado.")])],-1)),zt=W(()=>n("div",{class:"contenido"},[n("div",{class:"image"},[n("img",{src:Et,alt:"service"})]),n("div",{class:"text-serv"},"Marketing Digital"),n("div",{class:"text-info"},"Orientamos tu proyecto y damos forma a tu empresa, ya sea reci\xE9n formada o con una trayectoria, adem\xE1s de materializar tus necesidades de publicidad.")],-1)),Vt=[Ut,Wt,Pt,zt],Ht={__name:"Service",props:["active","dark"],emits:["blur_toggle"],setup(t,{emit:a}){const e=t;Ue(s=>({"290dd7fd":o.value}));const l=i();i(!1),i(0);const o=i();return H(()=>{l.value=document.getElementById("service_orange_back"),e.dark?(l.value.style.background="#777777",o.value="drop-shadow( -5px 5px 10px rgba(0,0,0,0.5)) invert(1)"):(l.value.style.background="#f6bc68",o.value="drop-shadow( -5px 5px 10px rgba(0,0,0,0.5)) invert(0)")}),G(()=>e.dark,()=>{e.dark?(l.value.style.background="#777777",o.value="drop-shadow( -5px 5px 10px rgba(0,0,0,0.5)) invert(1)"):(l.value.style.background="#f6bc68",o.value="drop-shadow( -5px 5px 10px rgba(0,0,0,0.5)) invert(0)")}),(s,d)=>(p(),m("div",Ct,[Lt,Bt,n("div",Nt,[f(j,{name:"LEFT"},{default:I(()=>[e.active?(p(),m("div",Rt,Ot)):L("",!0)]),_:1}),f(j,{name:"DOWN"},{default:I(()=>[e.active?(p(),m("div",Mt,Vt)):L("",!0)]),_:1})])]))}},Xt=D(Ht,[["__scopeId","data-v-b8bb3b19"]]),Ft="/assets/mano.dca98758.svg";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const b={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},De={itemsToShow:{default:b.itemsToShow,type:Number},itemsToScroll:{default:b.itemsToScroll,type:Number},wrapAround:{default:b.wrapAround,type:Boolean},throttle:{default:b.throttle,type:Number},snapAlign:{default:b.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:b.transition,type:Number},breakpoints:{default:b.breakpoints,type:Object},autoplay:{default:b.autoplay,type:Number},pauseAutoplayOnHover:{default:b.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:b.mouseDrag,type:Boolean},touchDrag:{default:b.touchDrag,type:Boolean},dir:{default:b.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:b.i18n,type:Object},settings:{default(){return{}},type:Object}};function Gt({config:t,slidesCount:a}){const{snapAlign:e,wrapAround:l,itemsToShow:o=1}=t;if(l)return Math.max(a-1,0);let s;switch(e){case"start":s=a-o;break;case"end":s=a-1;break;case"center":case"center-odd":s=a-Math.ceil((o-.5)/2);break;case"center-even":s=a-Math.ceil(o/2);break;default:s=0;break}return Math.max(s,0)}function Yt({config:t,slidesCount:a}){const{wrapAround:e,snapAlign:l,itemsToShow:o=1}=t;let s=0;if(e||o>a)return s;switch(l){case"start":s=0;break;case"end":s=o-1;break;case"center":case"center-odd":s=Math.floor((o-1)/2);break;case"center-even":s=Math.floor((o-2)/2);break;default:s=0;break}return s}function me({val:t,max:a,min:e}){return a<e?t:Math.min(Math.max(t,e),a)}function qt({config:t,currentSlide:a,slidesCount:e}){const{snapAlign:l,wrapAround:o,itemsToShow:s=1}=t;let d=a;switch(l){case"center":case"center-odd":d-=(s-1)/2;break;case"center-even":d-=(s-2)/2;break;case"end":d-=s-1;break}return o?d:me({val:d,max:e-s,min:0})}function Pe(t){return t?t.reduce((a,e)=>{var l;return e.type===Y?[...a,...Pe(e.children)]:((l=e.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?[...a,e]:a},[]):[]}function se({val:t,max:a,min:e=0}){return t>a?se({val:t-(a+1),max:a,min:e}):t<e?se({val:t+(a+1),max:a,min:e}):t}function Jt(t,a){let e;return a?function(...l){const o=this;e||(t.apply(o,l),e=!0,setTimeout(()=>e=!1,a))}:t}function Kt(t,a){let e;return function(...l){e&&clearTimeout(e),e=setTimeout(()=>{t(...l),e=null},a)}}function ze(t="",a={}){return Object.entries(a).reduce((e,[l,o])=>e.replace(`{${l}}`,String(o)),t)}var Qt=we({name:"ARIA",setup(){const t=w("config",U(Object.assign({},b))),a=w("currentSlide",i(0)),e=w("slidesCount",i(0));return()=>x("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},ze(t.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:e.value}))}}),Zt=we({name:"Carousel",props:De,setup(t,{slots:a,emit:e,expose:l}){var o;const s=i(null),d=i([]),u=i(0),_=i(0),c=U(Object.assign({},b));let g=Object.assign({},b),k;const v=i((o=t.modelValue)!==null&&o!==void 0?o:0),O=i(0),B=i(0),S=i(0),T=i(0);let $,C;R("config",c),R("slidesCount",_),R("currentSlide",v),R("maxSlide",S),R("minSlide",T),R("slideWidth",u);function M(){k=Object.assign({},t.breakpoints),g=Object.assign(Object.assign(Object.assign({},g),t),{i18n:Object.assign(Object.assign({},g.i18n),t.i18n),breakpoints:void 0}),F(g)}function X(){if(!k||!Object.keys(k).length)return;const r=Object.keys(k).map(h=>Number(h)).sort((h,N)=>+N-+h);let y=Object.assign({},g);r.some(h=>{const N=window.matchMedia(`(min-width: ${h}px)`).matches;return N&&(y=Object.assign(Object.assign({},y),k[h])),N}),F(y)}function F(r){Object.entries(r).forEach(([y,h])=>c[y]=h)}const xe=Kt(()=>{X(),q()},16);function q(){if(!s.value)return;const r=s.value.getBoundingClientRect();u.value=r.width/c.itemsToShow}function ie(){_.value<=0||(B.value=Math.ceil((_.value-1)/2),S.value=Gt({config:c,slidesCount:_.value}),T.value=Yt({config:c,slidesCount:_.value}),c.wrapAround||(v.value=me({val:v.value,max:S.value,min:T.value})))}H(()=>{qe(()=>q()),setTimeout(()=>q(),1e3),X(),$e(),window.addEventListener("resize",xe,{passive:!0}),e("init")}),Je(()=>{C&&clearTimeout(C),$&&clearInterval($),window.removeEventListener("resize",xe,{passive:!0})});let A=!1;const Z={x:0,y:0},ee={x:0,y:0},P=U({x:0,y:0}),te=i(!1),re=i(!1),Xe=()=>{te.value=!0},Fe=()=>{te.value=!1};function ke(r){["INPUT","TEXTAREA","SELECT"].includes(r.target.tagName)||(A=r.type==="touchstart",A||r.preventDefault(),!(!A&&r.button!==0||z.value)&&(Z.x=A?r.touches[0].clientX:r.clientX,Z.y=A?r.touches[0].clientY:r.clientY,document.addEventListener(A?"touchmove":"mousemove",Se,!0),document.addEventListener(A?"touchend":"mouseup",Te,!0)))}const Se=Jt(r=>{re.value=!0,ee.x=A?r.touches[0].clientX:r.clientX,ee.y=A?r.touches[0].clientY:r.clientY;const y=ee.x-Z.x,h=ee.y-Z.y;P.y=h,P.x=y},c.throttle);function Te(){const r=c.dir==="rtl"?-1:1,y=Math.sign(P.x)*.4,h=Math.round(P.x/u.value+y)*r;if(h&&!A){const N=_e=>{_e.stopPropagation(),window.removeEventListener("click",N,!0)};window.addEventListener("click",N,!0)}V(v.value-h),P.x=0,P.y=0,re.value=!1,document.removeEventListener(A?"touchmove":"mousemove",Se,!0),document.removeEventListener(A?"touchend":"mouseup",Te,!0)}function $e(){!c.autoplay||c.autoplay<=0||($=setInterval(()=>{c.pauseAutoplayOnHover&&te.value||ne()},c.autoplay))}function Ae(){$&&(clearInterval($),$=null),$e()}const z=i(!1);function V(r){const y=c.wrapAround?r:me({val:r,max:S.value,min:T.value});v.value===y||z.value||(e("slide-start",{slidingToIndex:r,currentSlideIndex:v.value,prevSlideIndex:O.value,slidesCount:_.value}),z.value=!0,O.value=v.value,v.value=y,C=setTimeout(()=>{if(c.wrapAround){const h=se({val:y,max:S.value,min:0});h!==v.value&&(v.value=h,e("loop",{currentSlideIndex:v.value,slidingToIndex:r}))}e("update:modelValue",v.value),e("slide-end",{currentSlideIndex:v.value,prevSlideIndex:O.value,slidesCount:_.value}),z.value=!1,Ae()},c.transition))}function ne(){V(v.value+c.itemsToScroll)}function ce(){V(v.value-c.itemsToScroll)}const Ie={slideTo:V,next:ne,prev:ce};R("nav",Ie),R("isSliding",z);const Ee=Re(()=>qt({config:c,currentSlide:v.value,slidesCount:_.value}));R("slidesToScroll",Ee);const Ge=Re(()=>{const r=c.dir==="rtl"?-1:1,y=Ee.value*u.value*r;return{transform:`translateX(${P.x-y}px)`,transition:`${z.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${_.value*u.value}px`:"",width:"100%"}});function Ce(){M(),X(),ie(),q(),Ae()}Object.keys(De).forEach(r=>{["modelValue"].includes(r)||G(()=>t[r],Ce)}),G(()=>t.modelValue,r=>{r!==v.value&&V(Number(r))}),G(_,ie),e("before-init"),M();const Le={config:c,slidesCount:_,slideWidth:u,next:ne,prev:ce,slideTo:V,currentSlide:v,maxSlide:S,minSlide:T,middleSlide:B};l({updateBreakpointsConfigs:X,updateSlidesData:ie,updateSlideWidth:q,initDefaultConfigs:M,restartCarousel:Ce,slideTo:V,next:ne,prev:ce,nav:Ie,data:Le});const ue=a.default||a.slides,de=a.addons,Be=U(Le);return()=>{const r=Pe(ue==null?void 0:ue(Be)),y=(de==null?void 0:de(Be))||[];r.forEach((ve,fe)=>ve.props.index=fe);let h=r;if(c.wrapAround){const ve=r.map((pe,J)=>je(pe,{index:-r.length+J,isClone:!0,key:`clone-before-${J}`})),fe=r.map((pe,J)=>je(pe,{index:r.length+J,isClone:!0,key:`clone-after-${J}`}));h=[...ve,...r,...fe]}d.value=r,_.value=Math.max(r.length,1);const N=x("ol",{class:"carousel__track",style:Ge.value,onMousedownCapture:c.mouseDrag?ke:null,onTouchstartPassiveCapture:c.touchDrag?ke:null},h),_e=x("div",{class:"carousel__viewport"},N);return x("section",{ref:s,class:{carousel:!0,"is-sliding":z.value,"is-dragging":re.value,"is-hover":te.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:Xe,onMouseleave:Fe},[_e,y,x(Qt)])}}}),ge;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(ge||(ge={}));const en={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function tn(t){return t in ge}const be=t=>{const a=w("config",U(Object.assign({},b))),e=String(t.name),l=`icon${e.charAt(0).toUpperCase()+e.slice(1)}`;if(!e||typeof e!="string"||!tn(e))return;const o=en[e],s=x("path",{d:o}),d=a.i18n[l]||t.title||e,u=x("title",d);return x("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":d},[u,s])};be.props={name:String,title:String};const nn=(t,{slots:a,attrs:e})=>{const{next:l,prev:o}=a||{},s=w("config",U(Object.assign({},b))),d=w("maxSlide",i(1)),u=w("minSlide",i(1)),_=w("currentSlide",i(1)),c=w("nav",{}),{dir:g,wrapAround:k,i18n:v}=s,O=g==="rtl",B=x("button",{type:"button",class:["carousel__prev",!k&&_.value<=u.value&&"carousel__prev--disabled",e==null?void 0:e.class],"aria-label":v.ariaPreviousSlide,onClick:c.prev},(o==null?void 0:o())||x(be,{name:O?"arrowRight":"arrowLeft"})),S=x("button",{type:"button",class:["carousel__next",!k&&_.value>=d.value&&"carousel__next--disabled",e==null?void 0:e.class],"aria-label":v.ariaNextSlide,onClick:c.next},(l==null?void 0:l())||x(be,{name:O?"arrowLeft":"arrowRight"}));return[B,S]},an=()=>{const t=w("config",U(Object.assign({},b))),a=w("maxSlide",i(1)),e=w("minSlide",i(1)),l=w("currentSlide",i(1)),o=w("nav",{}),s=u=>se({val:l.value,max:a.value,min:0})===u,d=[];for(let u=e.value;u<a.value+1;u++){const _=x("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":s(u)},"aria-label":ze(t.i18n.ariaNavigateToSlide,{slideNumber:u+1}),onClick:()=>o.slideTo(u)}),c=x("li",{class:"carousel__pagination-item",key:u},_);d.push(c)}return x("ol",{class:"carousel__pagination"},d)};var on=we({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:a}){const e=w("config",U(Object.assign({},b))),l=w("currentSlide",i(0)),o=w("slidesToScroll",i(0)),s=w("isSliding",i(!1)),d=()=>t.index===l.value,u=()=>t.index===l.value-1,_=()=>t.index===l.value+1,c=()=>{const g=Math.floor(o.value),k=Math.ceil(o.value+e.itemsToShow-1);return t.index>=g&&t.index<=k};return()=>{var g;return x("li",{style:{width:`${100/e.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":c(),"carousel__slide--active":d(),"carousel__slide--prev":u(),"carousel__slide--next":_(),"carousel__slide--sliding":s.value},"aria-hidden":!c()},(g=a.default)===null||g===void 0?void 0:g.call(a))}}});const Ve=t=>(K("data-v-7ec24d3f"),t=t(),Q(),t),sn={id:"works"},ln={key:0,class:"flex flex-column align-items-center justify-content-center"},rn=Ve(()=>n("img",{class:"icon_works",src:Ft,alt:"mano"},null,-1)),cn=Ve(()=>n("div",{class:"title-text"},"NUESTROS CLIENTES",-1)),un=[rn,cn],dn={class:"mt-5"},_n={class:"tip-container"},vn={class:"slider_img"},fn=["src","alt"];const pn={__name:"Works",props:["active","client_pos"],emits:["blur_toggle"],setup(t,{emit:a}){const e=t,l=i([new URL("/assets/cafe_haya.f9e60f27.webp",self.location).href,new URL("/assets/casa_sumpall.c8346b14.webp",self.location).href,new URL("/assets/clinica_dental_pitrufquen.de7eb624.webp",self.location).href,new URL("/assets/decar.de56c44a.webp",self.location).href,new URL("/assets/fullacceso.f4ec2f29.webp",self.location).href,new URL("/assets/juanespinoza.54f3351d.webp",self.location).href,new URL("/assets/novenainspira.77d366fd.webp",self.location).href,new URL("/assets/pikaro.4875f85a.webp",self.location).href,new URL("/assets/rimac.dc423f0e.webp",self.location).href,new URL("/assets/rucan.6896cc7a.webp",self.location).href,new URL("/assets/siac.3bf3ca0f.webp",self.location).href,new URL("/assets/vivedanza.c55e6f95.webp",self.location).href]);i(0),i(1),i(!1),i(0);const o=i(window.innerWidth),s=i(!1),d=i({itemsToShow:3,snapAlign:"start"});return H(()=>{window.innerWidth<=760?d.value={itemsToShow:1,snapAlign:"start"}:window.innerWidth>760&&(d.value={itemsToShow:3,snapAlign:"start"}),window.innerWidth<=990?s.value=!0:window.innerWidth>990&&(s.value=!1),window.onresize=()=>{o.value=window.innerWidth,window.innerWidth<=760&&!s.value?d.value={itemsToShow:1,snapAlign:"start"}:window.innerWidth>760&&s.value&&(d.value={itemsToShow:3,snapAlign:"start"}),window.innerWidth<=990&&!s.value?s.value=!0:window.innerWidth>990&&s.value&&(s.value=!1)}}),(u,_)=>(p(),m("div",sn,[f(j,{name:"UP"},{default:I(()=>[e.active?(p(),m("div",ln,un)):L("",!0)]),_:1}),n("div",dn,[f(ae(Zt),Ke(d.value,{"wrap-around":!0,autoplay:2e3}),{addons:I(()=>[f(ae(nn)),f(ae(an))]),default:I(()=>[(p(!0),m(Y,null,oe(l.value,(c,g)=>(p(),he(ae(on),{key:g},{default:I(()=>[n("div",_n,[n("div",vn,[n("img",{src:c,alt:"Cliente-"+g},null,8,fn)])])]),_:2},1024))),128))]),_:1},16)]),f(j,{name:"DOWN"},{default:I(()=>[L("",!0)]),_:1})]))}},mn=D(pn,[["__scopeId","data-v-7ec24d3f"]]),He="/assets/gearW.021d0c52.svg";const gn={},bn={class:"waveA"};function hn(t,a){return p(),m("div",bn)}const wn=D(gn,[["render",hn],["__scopeId","data-v-25b8d5e6"]]);const ye=t=>(K("data-v-32bbb3ab"),t=t(),Q(),t),yn={id:"contact"},xn={class:"footer-content grid"},kn={key:0,class:"col-12 mb-5"},Sn=ye(()=>n("div",{class:"footer-title"},"Contacto",-1)),Tn=[Sn],$n={key:0,class:"col-12 md:col-7"},An={href:"mailto:contacto@engranaphic.cl",target:"_blank",class:"text-subtitle mb-3 select-none cursor-pointer"},In={href:"https://api.whatsapp.com/send/?phone=56926248072&text&type=phone_number&app_absent=0",target:"_blank",class:"text-subtitle select-none"},En={key:0,class:"col-12 md:col-5 flex align-items-center justify-content-center md:justify-content-start",style:{"border-left":"5px solid #ffffff"}},Cn={href:"https://web.facebook.com/engranaphic",target:"_blank",class:"face select-none cursor-pointer"},Ln={href:"https://www.instagram.com/engranaphic/",target:"_blank",class:"inst select-none cursor-pointer"},Bn={key:0,class:"foot-wave"},Nn=ye(()=>n("img",{src:He,alt:"gear"},null,-1)),Rn=ye(()=>n("img",{src:He,alt:"gear"},null,-1)),jn={__name:"Contact",props:["active","dark"],emits:["form-pop"],setup(t,{emit:a}){const e=t;Ue(s=>({"5ebe3c5c":o.value}));const l=i(),o=i();return H(()=>{l.value=document.getElementById("contact"),e.dark?(l.value.style.background="#3b3b3a",o.value="#3b3b3a"):(l.value.style.background="linear-gradient(180deg, rgba(160,74,13,1) 0%, rgba(246,168,0,1) 100%)",o.value="#d88704")}),G(()=>e.dark,()=>{e.dark?(l.value.style.background="#3b3b3a",o.value="#3b3b3a"):(l.value.style.background="linear-gradient(180deg, rgba(160,74,13,1) 0%, rgba(246,168,0,1) 100%)",o.value="#d88704")}),(s,d)=>{const u=Oe("font-awesome-icon");return p(),m("div",yn,[n("div",xn,[f(j,{name:"UP"},{default:I(()=>[e.active?(p(),m("div",kn,Tn)):L("",!0)]),_:1}),f(j,{name:"LEFT"},{default:I(()=>[e.active?(p(),m("div",$n,[n("a",An,[f(u,{class:"icon",icon:"fa-solid fa-envelope"}),E(" contacto@engranaphic.cl")]),n("a",In,[f(u,{class:"icon",icon:"fa-brands fa-whatsapp"}),E(" +56 9 2624 8072")])])):L("",!0)]),_:1}),f(j,{name:"RIGHT"},{default:I(()=>[e.active?(p(),m("div",En,[n("a",Cn,[f(u,{icon:"fa-brands fa-facebook"})]),n("a",Ln,[f(u,{icon:"fa-brands fa-instagram"})])])):L("",!0)]),_:1})]),f(j,{name:"GEAR"},{default:I(()=>[e.active?(p(),m("div",Bn,[Nn,Rn,f(wn)])):L("",!0)]),_:1})])}}},Dn=D(jn,[["__scopeId","data-v-32bbb3ab"]]);const On={__name:"Home",setup(t){const a=i(0),e=i(!1),l=i(!1),o=i(!1),s=i(!1),d=i(!1),u=i(!1);H(()=>{window.addEventListener("scroll",k)});const _=S=>{let T=document.getElementById(S);if(T){const C=T.getBoundingClientRect().top+window.scrollY+-60;window.scrollTo({top:C,behavior:"smooth"})}},c=()=>{window.scrollTo(0,0)},g=()=>{admin.value=!1},k=S=>{let $=S.srcElement.scrollingElement.scrollTop;a.value=$;let C=document.getElementById("service"),M=document.getElementById("works"),X=document.getElementById("contact"),F=window.innerHeight*90/100+$;F>=C.offsetTop?(l.value=!0,s.value=!0):l.value=!1,F>=M.offsetTop&&(d.value=!0),F>=X.offsetTop&&(u.value=!0)},v=()=>{e.value=!e.value,e.value?B(!0):B(!1)},O=()=>{o.value=!o.value},B=S=>{admin.value&&document.getElementById("navbar");let T=document.getElementById("home"),$=document.getElementById("service"),C=document.getElementById("works"),M=document.getElementById("contact");S?(admin.value&&(nav.style.filter="blur(6px)"),T.style.filter="blur(6px)",$.style.filter="blur(6px)",C.style.filter="blur(6px)",M.style.filter="blur(6px)"):(admin.value&&(nav.style.filter="blur(0px)"),T.style.filter="blur(0px)",$.style.filter="blur(0px)",C.style.filter="blur(0px)",M.style.filter="blur(0px)")};return(S,T)=>(p(),m(Y,null,[f(Qe,{onLogout:g,onNavigation:_,position:a.value,dark:o.value,onDark_mode:O},null,8,["position","dark"]),f(kt,{onFormPop:v,position:a.value,dark:o.value},null,8,["position","dark"]),f(Xt,{onBlur_toggle:B,dark:o.value,active:s.value},null,8,["dark","active"]),f(mn,{onBlur_toggle:B,active:d.value},null,8,["active"]),f(Dn,{dark:o.value,onFormPop:v,active:u.value},null,8,["dark","active"]),f(j,{name:"upbutton"},{default:I(()=>[l.value?(p(),he(st,{key:0,onClick:c,btn_icon:"fa-solid fa-arrow-up",class:"up_button_container"})):L("",!0)]),_:1})],64))}},Wn=D(On,[["__scopeId","data-v-62e5a970"]]);export{Wn as default};
