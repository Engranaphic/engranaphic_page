import{_ as x,u as k,r as e,w as I,b,o as p,c as m,d as a,g as B,m as E,n as N,T as S,p as w,i as C,a as j}from"./index.d22be600.js";const O="/engranaphic_page/assets/isologo.f06b54e2.png";const T=s=>(w("data-v-ddfa9c1f"),s=s(),C(),s),V={id:"navbar",class:"fixed"},G={class:"navbar flex"},A={key:0,src:O,alt:"logo"},R=T(()=>a("div",{class:"button-link cursor-pointer flex align-items-center justify-content-center"},"CONTACTO",-1)),$={__name:"NavBar",props:["position"],emits:["logout"],setup(s,{emit:_}){const r=s,t=k();e(!1);const o=e(!1),n=e(),i=()=>{t.push({name:"home"})},l=()=>{t.push({name:"services"})},c=()=>{t.push({name:"works"})},d=()=>{t.push({name:"about"})};return I(()=>r.position,()=>{r.position>600?(o.value=!0,n.value.style.background="#ffffff"):(o.value=!1,n.value.style.background="#ffffff00")}),b(()=>{n.value=document.getElementById("navbar")}),(u,g)=>(p(),m("div",V,[a("div",G,[a("div",{class:"flex flex-1 justify-content-end"},[a("div",{onClick:l,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"SERVICIOS"),a("div",{onClick:c,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"TRABAJOS")]),a("div",{onClick:i,class:"button-logo flex flex-none align-items-center justify-content-center cursor-pointer"},[B(S,{name:"follow"},{default:E(()=>[o.value?(p(),m("img",A)):N("",!0)]),_:1})]),a("div",{class:"flex flex-1 justify-content-start"},[a("div",{onClick:d,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"QUI\xC9NES SOMOS"),R])])]))}},L=x($,[["__scopeId","data-v-ddfa9c1f"]]);const y="/engranaphic_page/assets/gear.791b008a.png",h="/engranaphic_page/assets/gear_y.b099a070.png";const M=j('<div id="gear-1" data-v-d116eaed><img src="'+y+'" alt="gear" data-v-d116eaed></div><div id="gear-2" data-v-d116eaed><img src="'+h+'" alt="gear" data-v-d116eaed></div><div id="gear-3" data-v-d116eaed><img src="'+y+'" alt="gear" data-v-d116eaed></div><div id="gear-4" data-v-d116eaed><img src="'+h+'" alt="gear" data-v-d116eaed></div>',4),F={__name:"Gears",props:["position"],setup(s){const _=s,r=e(0),t=e(),o=e(),n=e(),i=e(),l=e(0),c=e(0),d=e(0),u=e(0);b(()=>{window.addEventListener("scroll",g),r.value=_.position,t.value=document.getElementById("gear-1"),o.value=document.getElementById("gear-2"),n.value=document.getElementById("gear-3"),i.value=document.getElementById("gear-4")});const g=f=>{let v=f.srcElement.scrollingElement.scrollTop;r.value<v?(l.value-=1,t.value.style.transform="rotate("+l.value+"deg)",c.value+=1,o.value.style.transform="rotate("+c.value+"deg)",d.value+=1,n.value.style.transform="rotate("+d.value+"deg)",u.value-=1,i.value.style.transform="rotate("+u.value+"deg)"):(l.value+=1,t.value.style.transform="rotate("+l.value+"deg)",c.value-=1,o.value.style.transform="rotate("+c.value+"deg)",d.value-=1,n.value.style.transform="rotate("+d.value+"deg)",u.value+=1,i.value.style.transform="rotate("+u.value+"deg)"),r.value=v};return(f,v)=>M}},Q=x(F,[["__scopeId","data-v-d116eaed"]]);export{Q as G,L as N};
