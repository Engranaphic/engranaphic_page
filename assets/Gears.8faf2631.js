import{_ as b,u as S,o as f,c as y,g as e,p as j,f as w,h as a,v as N,i as B,r as O,l as g,w as h,d as x,T as k,b as M,a as T}from"./index.771f0cdf.js";const $="/engranaphic_page/assets/isologo.f06b54e2.png";const A=t=>(j("data-v-431d58ec"),t=t(),w(),t),V={id:"menu"},R=A(()=>e("div",{class:"button-link cursor-pointer flex align-items-center justify-content-center"},"CONTACTO",-1)),G={__name:"MobileMenu",emits:["close_menu"],setup(t,{emit:i}){const s=S(),o=()=>{s.push({name:"services"}),i("close_menu")},l=()=>{s.push({name:"works"}),i("close_menu")},n=()=>{s.push({name:"about"}),i("close_menu")};return(c,r)=>(f(),y("div",V,[e("div",{class:"navbar flex flex-column justify-content-center"},[e("div",{onClick:o,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"SERVICIOS"),e("div",{onClick:l,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"TRABAJOS"),e("div",{onClick:n,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"QUI\xC9NES SOMOS"),R])]))}},J=b(G,[["__scopeId","data-v-431d58ec"]]);const Q=t=>(j("data-v-bcfc1639"),t=t(),w(),t),U={id:"navbar",class:"fixed"},F={class:"navbar flex"},L={key:0,src:$,alt:"logo"},q=Q(()=>e("div",{class:"button-link cursor-pointer flex align-items-center justify-content-center"},"CONTACTO",-1)),z={class:"button-bars flex lg:hidden justify-content-center align-items-center"},D={__name:"NavBar",props:["position"],emits:["logout"],setup(t,{emit:i}){const s=t,o=S(),l=a(!1),n=a(!1),c=a(),r=()=>{l.value=!l.value},u=()=>{o.push({name:"home"})},d=()=>{o.push({name:"services"})},_=()=>{o.push({name:"works"})},m=()=>{o.push({name:"about"})};return N(()=>s.position,()=>{s.position>600?(n.value=!0,c.value.style.background="#ffffff"):(n.value=!1,c.value.style.background="#ffffff00")}),B(()=>{c.value=document.getElementById("navbar"),s.position>600?(n.value=!0,c.value.style.background="#ffffff"):(n.value=!1,c.value.style.background="#ffffff00")}),(p,v)=>{const E=O("font-awesome-icon");return f(),y("div",U,[e("div",F,[e("div",{class:"hidden lg:flex flex-1 justify-content-end"},[e("div",{onClick:d,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"SERVICIOS"),e("div",{onClick:_,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"TRABAJOS")]),e("div",{onClick:u,class:"button-logo flex lg:flex-none align-items-center justify-content-center cursor-pointer"},[g(k,{name:"follow"},{default:h(()=>[n.value?(f(),y("img",L)):x("",!0)]),_:1})]),e("div",{class:"hidden lg:flex flex-1 justify-content-start"},[e("div",{onClick:m,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"QUI\xC9NES SOMOS"),q]),e("div",z,[e("div",{onClick:r,class:"button-link cursor-pointer flex align-items-center justify-content-center"},[g(E,{icon:"fa-solid fa-bars"})])])]),g(k,{name:"menu"},{default:h(()=>[l.value?(f(),M(J,{key:0,onClose_menu:r})):x("",!0)]),_:1})])}}},W=b(D,[["__scopeId","data-v-bcfc1639"]]);const C="/engranaphic_page/assets/gear.791b008a.png",I="/engranaphic_page/assets/gear_y.b099a070.png";const H=T('<div class="hidden lg:flex" id="gear-1" data-v-d0a6a4da><img src="'+C+'" alt="gear" data-v-d0a6a4da></div><div id="gear-2" data-v-d0a6a4da><img src="'+I+'" alt="gear" data-v-d0a6a4da></div><div id="gear-3" data-v-d0a6a4da><img src="'+C+'" alt="gear" data-v-d0a6a4da></div><div class="hidden lg:flex" id="gear-4" data-v-d0a6a4da><img src="'+I+'" alt="gear" data-v-d0a6a4da></div>',4),K={__name:"Gears",props:["position"],setup(t){const i=t,s=a(0),o=a(),l=a(),n=a(),c=a(),r=a(0),u=a(0),d=a(0),_=a(0);B(()=>{window.addEventListener("scroll",m),s.value=i.position,o.value=document.getElementById("gear-1"),l.value=document.getElementById("gear-2"),n.value=document.getElementById("gear-3"),c.value=document.getElementById("gear-4")});const m=p=>{let v=p.srcElement.scrollingElement.scrollTop;s.value<v?(r.value-=1,o.value.style.transform="rotate("+r.value+"deg)",u.value+=1,l.value.style.transform="rotate("+u.value+"deg)",d.value+=1,n.value.style.transform="rotate("+d.value+"deg)",_.value-=1,c.value.style.transform="rotate("+_.value+"deg)"):(r.value+=1,o.value.style.transform="rotate("+r.value+"deg)",u.value-=1,l.value.style.transform="rotate("+u.value+"deg)",d.value-=1,n.value.style.transform="rotate("+d.value+"deg)",_.value+=1,c.value.style.transform="rotate("+_.value+"deg)"),s.value=v};return(p,v)=>H}},X=b(K,[["__scopeId","data-v-d0a6a4da"]]);export{X as G,W as N};
