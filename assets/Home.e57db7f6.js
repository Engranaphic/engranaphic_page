import{_ as f,r as z,o as u,c as p,b as A,n as W,d as T,e as y,t as O,p as w,f as $,g as a,h as i,i as g,F as E,j,k as R,l as v,I,m as S,q as B,a as L,s as q,w as V,T as D}from"./index.771f0cdf.js";import{G as F,N as H}from"./Gears.8faf2631.js";const x=s=>(w("data-v-cd0914ec"),s=s(),$(),s),P={class:"contact-button cursor-pointer flex align-items-center justify-content-center"},M=x(()=>a("span",null,null,-1)),G=x(()=>a("span",null,null,-1)),U=x(()=>a("span",null,null,-1)),Y=x(()=>a("span",null,null,-1)),J={__name:"ButtonNeon",props:["btn_icon","btn_text"],setup(s){const c=s;return(n,o)=>{const t=z("font-awesome-icon");return u(),p("div",P,[M,G,U,Y,c.btn_icon?(u(),A(t,{key:0,class:W(["icon-mail",c.btn_text?"mr-3":""]),icon:c.btn_icon},null,8,["class","icon"])):T("",!0),y(" "+O(c.btn_text),1)])}}},K=f(J,[["__scopeId","data-v-cd0914ec"]]),Q="/engranaphic_page/assets/logoA1.5cb83374.png";const X={class:"container-slider"},Z={id:"slider"},ee={class:"slider_text"},te={__name:"CarouselText",props:["content"],setup(s){const c=s,n=i(),o=i();g(()=>{o.value=setInterval(t,2e3),n.value=document.getElementById("slider"),n.value.style.width=""+c.content.length+"00%"});const t=()=>{let e=document.querySelectorAll(".slider_section")[0];if(!e){clearInterval(o.value);return}n.value.style.marginLeft="-100%",n.value.style.transition="all 1s ease",setTimeout(function(){n.value.style.transition="none",n.value.insertAdjacentElement("beforeend",e),n.value.style.marginLeft="-0%"},1e3)};return(e,r)=>(u(),p("div",X,[a("div",Z,[(u(!0),p(E,null,j(c.content,(l,_)=>(u(),p("div",{key:_,class:"slider_section"},[a("span",ee,O(l),1)]))),128))])]))}},ae=f(te,[["__scopeId","data-v-8d93e001"]]);const se={class:"contenedor flex justify-content-center"},oe={class:"bubbles"},ne={__name:"BackgroundBubble",setup(s){const c=()=>Math.floor(Math.random()*41)+10;return(n,o)=>(u(),p("div",se,[a("div",oe,[(u(),p(E,null,j(50,t=>a("span",{style:R("--i:"+c()),key:t},null,4)),64))])]))}},ie=f(ne,[["__scopeId","data-v-8f57267a"]]);const ce=s=>(w("data-v-19e4cddb"),s=s(),$(),s),le={id:"home"},de={class:"gradient"},re={class:"flex justify-content-center"},_e={class:"listado flex flex-column"},ue=ce(()=>a("img",{id:"main-logo",src:Q,alt:"logo"},null,-1)),ve={__name:"Home",props:["position"],emits:["form-pop"],setup(s,{emit:c}){const n=s,o=i(["DESARROLLO WEB","IMAGEN CORPORATIVA","ASESOR\xCDA DE PROYECTOS","INSUMOS REDES SOCIALES"]),t=i(0),e=i(60),r=i();g(()=>{window.addEventListener("scroll",l),t.value=n.position,r.value=document.getElementById("main-logo")});const l=_=>{let d=_.srcElement.scrollingElement.scrollTop;d<200&&(e.value=50),t.value<d?e.value>10&&(e.value-=1):e.value<50&&(e.value+=1),r.value.style.width=e.value+"%",t.value=d};return(_,d)=>(u(),p("div",le,[v(ie),a("div",de,[a("div",re,[a("div",_e,[ue,v(ae,{class:"text-home",content:o.value},null,8,["content"])])])])]))}},pe=f(ve,[["__scopeId","data-v-19e4cddb"]]);const me={id:"service"},fe=L('<div style="width:80%;margin:0 auto;" data-v-00a6e7ce><div class="about-title col-12" data-v-00a6e7ce>SERVICIOS</div><div class="grid" style="margin:0 !important;" data-v-00a6e7ce><div class="col-12 flex flex-wrap justify-content-center py-2" data-v-00a6e7ce><div class="contenido" data-v-00a6e7ce><div class="image" data-v-00a6e7ce></div><div class="text-info" data-v-00a6e7ce>En Full Acceso, nos preocupamos por la seguridad y contamos con material y equipo certificados de acuerdo a normativas europeas, adem\xE1s de un riguroso plan de evaluaci\xF3n de riesgos, planes de rescates espec\xEDficos para cada trabajo y un personal altamente capacitado.</div></div><div class="contenido" data-v-00a6e7ce><div class="image" data-v-00a6e7ce></div><div class="text-info" data-v-00a6e7ce>Ofrecemos el servicio de consultor\xEDa a empresas constructoras y estudios de dise\xF1o arquitectura. <br data-v-00a6e7ce><br data-v-00a6e7ce>Full Acceso puede ayudarte a dise\xF1ar cualquier tipo de proyecto de infraestructura para el trabajo en altura.</div></div><div class="contenido" data-v-00a6e7ce><div class="image" data-v-00a6e7ce></div><div class="text-info" data-v-00a6e7ce>Nuestros equipos hacen instalaciones avanzadas para clientes con altas exigencias de seguridad y calidad, con capacidad para levantar hasta 200 kg sin asistencia de gr\xFAa. Adem\xE1s de la realizaci\xF3n de mantenimiento de edificios, con serivicios de limpieza, reparaci\xF3n, diagn\xF3stico y reemplazo.</div></div><div class="contenido" data-v-00a6e7ce><div class="image" data-v-00a6e7ce></div><div class="text-info" data-v-00a6e7ce>Nuestros equipos hacen instalaciones avanzadas para clientes con altas exigencias de seguridad y calidad, con capacidad para levantar hasta 200 kg sin asistencia de gr\xFAa. Adem\xE1s de la realizaci\xF3n de mantenimiento de edificios, con serivicios de limpieza, reparaci\xF3n, diagn\xF3stico y reemplazo.</div></div></div><div class="col-12 pt-4" data-v-00a6e7ce><div class="about-title" data-v-00a6e7ce>OTROS</div><div class="content-button" data-v-00a6e7ce></div></div></div></div>',1),ge=[fe],he={__name:"Service",emits:["blur_toggle"],setup(s,{emit:c}){const n=i([]);return i(!1),i(0),g(()=>{I(S(B,"services"),o=>{let t=[];o.forEach(e=>{let r={id:e.id,title:e.data().title,name:e.data().name,description:e.data().description,url:e.data().url,created:e.data().created};t.push(r)}),n.value=t})}),(o,t)=>(u(),p("div",me,ge))}},ye=f(he,[["__scopeId","data-v-00a6e7ce"]]),be="/engranaphic_page/assets/fullacceso.679ab68d.png",xe="/engranaphic_page/assets/siacautomatizacion.edc87eb0.png";const we={id:"works"},$e=L('<div class="bg-clients" data-v-b0c9070f></div><div class="title-text" data-v-b0c9070f>NUESTROS CLIENTES</div><div class="image_container flex flex-wrap justify-content-center" data-v-b0c9070f><div class="logos flex align-items-center justify-content-center" data-v-b0c9070f><a href="https://www.fullacceso.cl" target="_blank" data-v-b0c9070f><img src="'+be+'" alt="fullacceso" data-v-b0c9070f></a></div><div class="logos flex align-items-center justify-content-center" data-v-b0c9070f><img src="'+xe+'" alt="siacautomatizacion" data-v-b0c9070f></div></div>',3),Ee=[$e],Ie={__name:"Works",props:["position","client_pos"],emits:["blur_toggle"],setup(s,{emit:c}){const n=i([]);i(0);const o=i(1);i(!1),i(0);const t=i(window.innerWidth),e=i(!1);return g(()=>{window.innerWidth<=990?e.value=!0:window.innerWidth>990&&(e.value=!1),window.onresize=()=>{t.value=window.innerWidth,window.innerWidth<=990&&!e.value?e.value=!0:window.innerWidth>990&&e.value&&(e.value=!1)},I(S(B,"gallery"),r=>{let l=[],_=[];r.forEach(d=>{let m={id:d.id,name:d.data().name,description:d.data().description,url:d.data().url,created:d.data().created};l.length>=6&&e.value==!1?(_.push(l),l=[]):l.length>=1&&e.value==!0&&(_.push(l),l=[]),l.push(m)}),l.length!=0&&(_.push(l),l=[]),o.value=_.length,n.value=_})}),(r,l)=>(u(),p("div",we,Ee))}},Se=f(Ie,[["__scopeId","data-v-b0c9070f"]]);const k=s=>(w("data-v-f03ea403"),s=s(),$(),s),Be={id:"contact"},ke={class:"footer bottom-0"},Ce=k(()=>a("div",{class:"texture"},null,-1)),Ne={class:"footer-content grid"},ze=k(()=>a("div",{class:"col-12 lg:col-3"},[a("div",{class:"text-subtitle"},[y("Dise\xF1o y programaci\xF3n para "),a("br"),y("sitios webs")])],-1)),Ae={class:"col-12 lg:col-6"},Te=k(()=>a("div",{class:"footer-title"},"Contacto",-1)),Oe={class:"button-text text-center select-none cursor-pointer"},je={class:"col-12 lg:col-3 flex justify-content-center lg:justify-content-start"},Le={__name:"Contact",props:["position","contact_pos"],emits:["form-pop","logo_home"],setup(s,{emit:c}){const n=i([]);return g(()=>{I(S(B,"clients"),o=>{let t=[];o.forEach(e=>{let r={id:e.id,name:e.data().name,url:e.data().url,created:e.data().created};t.push(r)}),n.value=t})}),(o,t)=>{const e=z("font-awesome-icon");return u(),p("div",Be,[a("div",ke,[Ce,a("div",Ne,[ze,a("div",Ae,[Te,a("div",Oe,[v(e,{icon:"fa-solid fa-location-dot"}),y(" Direcci\xF3n: .....")])]),a("div",je,[a("div",{onClick:t[0]||(t[0]=r=>o.$emit("form-pop")),class:"button-text select-none cursor-pointer"},[v(e,{icon:"fa-solid fa-envelope"}),y("engranaphic.digital@gmail.com")])])])])])}}},We=f(Le,[["__scopeId","data-v-f03ea403"]]);const Re={__name:"Home",setup(s){const c=i(0),n=i(!1),o=i(!1),t=i(!1);g(()=>{window.addEventListener("scroll",l),q.onAuthStateChanged(function(m){m?o.value=!0:o.value=!1})});const e=()=>{window.scrollTo(0,0)},r=()=>{o.value=!1},l=m=>{let h=m.srcElement.scrollingElement.scrollTop;c.value=h,h>600?t.value=!0:t.value=!1},_=()=>{n.value=!n.value,n.value?d(!0):d(!1)},d=m=>{o.value&&document.getElementById("navbar");let b=document.getElementById("home"),h=document.getElementById("service"),C=document.getElementById("works"),N=document.getElementById("contact");m?(o.value&&(nav.style.filter="blur(6px)"),b.style.filter="blur(6px)",h.style.filter="blur(6px)",C.style.filter="blur(6px)",N.style.filter="blur(6px)"):(o.value&&(nav.style.filter="blur(0px)"),b.style.filter="blur(0px)",h.style.filter="blur(0px)",C.style.filter="blur(0px)",N.style.filter="blur(0px)")};return(m,b)=>(u(),p(E,null,[v(F,{position:c.value},null,8,["position"]),v(H,{onLogout:r,position:c.value},null,8,["position"]),v(pe,{onFormPop:_,position:c.value},null,8,["position"]),v(ye,{onBlur_toggle:d}),v(Se,{onBlur_toggle:d}),v(We,{onLogo_home:e,onFormPop:_}),v(D,{name:"upbutton"},{default:V(()=>[t.value?(u(),A(K,{key:0,onClick:e,btn_icon:"fa-solid fa-arrow-up",class:"up_button_container"})):T("",!0)]),_:1})],64))}},De=f(Re,[["__scopeId","data-v-06ee8c6c"]]);export{De as default};
