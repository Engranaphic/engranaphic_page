import{_ as C,r as q,o as m,c as w,e as X,n as se,f as I,g as D,t as L,p as E,h as O,a as t,i as a,j as z,b as _,w as S,T as U,F as P,k as G,u as N,l as ne,m as ie,q as j,s as J,v as K,x as le,y as ce,z as re}from"./index.e26873a6.js";import{N as de}from"./NavBar.014adf8a.js";import{N as ue,P as pe,S as _e,C as me}from"./carousel.es.42810099.js";const H=e=>(E("data-v-cd0914ec"),e=e(),O(),e),fe={class:"contact-button cursor-pointer flex align-items-center justify-content-center"},ve=H(()=>t("span",null,null,-1)),ge=H(()=>t("span",null,null,-1)),he=H(()=>t("span",null,null,-1)),we=H(()=>t("span",null,null,-1)),be={__name:"ButtonNeon",props:["btn_icon","btn_text"],setup(e){const i=e;return(o,s)=>{const n=q("font-awesome-icon");return m(),w("div",fe,[ve,ge,he,we,i.btn_icon?(m(),X(n,{key:0,class:se(["icon-mail",i.btn_text?"mr-3":""]),icon:i.btn_icon},null,8,["class","icon"])):I("",!0),D(" "+L(i.btn_text),1)])}}},ye=C(be,[["__scopeId","data-v-cd0914ec"]]);const xe={id:"formulario",class:"flex justify-content-end"},ke={key:0,class:"formulario shadow-5"},$e={class:"title flex align-items-center justify-content-center"},Re={class:"imagen-example flex align-items-center justify-content-center"},Ae=["src"],Te={class:"form-text"},Ie={class:"flex justify-content-end"},Ce=["href"],Se={__name:"Clients",props:["client_data"],emits:["close_tab"],setup(e,{emit:i}){a(""),a(""),a(""),a(""),a(""),a(""),a("");const o=a(!1);z(()=>{o.value=!0});const s=()=>{o.value=!1,setTimeout(()=>{i("close_tab",null)},500)};return(n,l)=>(m(),w("div",xe,[t("div",{class:"bg-close",onClick:s}),_(U,{name:"right"},{default:S(()=>[o.value?(m(),w("div",ke,[t("button",{class:"boton-close select-none cursor-pointer mr-3",type:"button",onClick:s},"X"),t("div",$e,L(e.client_data.client),1),t("div",Re,[t("img",{src:e.client_data.image,alt:"logo"},null,8,Ae)]),t("div",Te,L(e.client_data.Description),1),t("div",Ie,[e.client_data.url_page?(m(),w("a",{key:0,class:"boton-mail select-none cursor-pointer",type:"button",href:e.client_data.url_page,target:"_blank"},"Ver Sitio",8,Ce)):I("",!0)])])):I("",!0)]),_:1})]))}},Le=C(Se,[["__scopeId","data-v-c3452a69"]]);const De={class:"container-slider"},Ee={id:"slider"},Oe={class:"slider_text"},ze={__name:"CarouselText",props:["content"],setup(e){const i=e,o=a(),s=a();z(()=>{s.value=setInterval(n,2e3),o.value=document.getElementById("slider"),o.value.style.width=""+i.content.length+"00%"});const n=()=>{let l=document.querySelectorAll(".slider_section")[0];if(!l){clearInterval(s.value);return}o.value.style.marginLeft="-100%",o.value.style.transition="all 1s ease",setTimeout(function(){o.value.style.transition="none",o.value.insertAdjacentElement("beforeend",l),o.value.style.marginLeft="-0%"},1e3)};return(l,d)=>(m(),w("div",De,[t("div",Ee,[(m(!0),w(P,null,G(i.content,(f,v)=>(m(),w("div",{key:v,class:"slider_section"},[t("span",Oe,L(f),1)]))),128))])]))}},Ne=C(ze,[["__scopeId","data-v-8d93e001"]]);function Ue(e){return ne()?(ie(e),!0):!1}function Q(e){return typeof e=="function"?e():N(e)}const M=typeof window<"u",We=()=>{};function Z(e){var i;const o=Q(e);return(i=o==null?void 0:o.$el)!=null?i:o}const F=M?window:void 0;M&&window.document;M&&window.navigator;M&&window.location;function B(...e){let i,o,s,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,s,n]=e,i=F):[i,o,s,n]=e,!i)return We;Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]);const l=[],d=()=>{l.forEach(r=>r()),l.length=0},f=(r,g,y,p)=>(r.addEventListener(g,y,p),()=>r.removeEventListener(g,y,p)),v=j(()=>[Z(i),Q(n)],([r,g])=>{d(),r&&l.push(...o.flatMap(y=>s.map(p=>f(r,y,p,g))))},{immediate:!0,flush:"post"}),u=()=>{v(),d()};return Ue(u),u}const Be={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function Xe(e={}){const{type:i="page",touch:o=!0,resetOnTouchEnds:s=!1,initialValue:n={x:0,y:0},window:l=F,target:d=l,eventFilter:f}=e,v=a(n.x),u=a(n.y),r=a(null),g=typeof i=="function"?i:Be[i],y=c=>{const b=g(c);b&&([v.value,u.value]=b,r.value="mouse")},p=c=>{if(c.touches.length>0){const b=g(c.touches[0]);b&&([v.value,u.value]=b,r.value="touch")}},R=()=>{v.value=n.x,u.value=n.y},A=f?c=>f(()=>y(c),{}):c=>y(c),h=f?c=>f(()=>p(c),{}):c=>p(c);if(d){const c={passive:!0};B(d,["mousemove","dragover"],A,c),o&&i!=="movement"&&(B(d,["touchstart","touchmove"],h,c),s&&B(d,"touchend",R,c))}return{x:v,y:u,sourceType:r}}function ee(e,i={}){const{handleOutside:o=!0,window:s=F}=i,{x:n,y:l,sourceType:d}=Xe(i),f=a(e!=null?e:s==null?void 0:s.document.body),v=a(0),u=a(0),r=a(0),g=a(0),y=a(0),p=a(0),R=a(!0);let A=()=>{};return s&&(A=j([f,n,l],()=>{const h=Z(f);if(!h)return;const{left:c,top:b,width:x,height:k}=h.getBoundingClientRect();r.value=c+s.pageXOffset,g.value=b+s.pageYOffset,y.value=k,p.value=x;const $=n.value-r.value,T=l.value-g.value;R.value=x===0||k===0||$<0||T<0||$>x||T>k,(o||!R.value)&&(v.value=$,u.value=T)},{immediate:!0}),B(document,"mouseleave",()=>{R.value=!0})),{x:n,y:l,sourceType:d,elementX:v,elementY:u,elementPositionX:r,elementPositionY:g,elementHeight:y,elementWidth:p,isOutside:R,stop:A}}const V=e=>(E("data-v-d0499a54"),e=e(),O(),e),je={id:"home"},He={id:"video_home",class:"banner",autoplay:"",loop:"",muted:""},Me=["src"],Ye=["src"],Pe=V(()=>t("div",{class:"gradient"},null,-1)),Fe={class:"content"},Ve=V(()=>t("div",{class:"title-banner flex flex-column align-items-center justify-content-center"},[t("h5",null,"ENGRANAPHIC"),t("span",{class:"flex align-items-end"},[t("h4",null,"Agencia de")]),t("h2",null,"Dise\xF1o y Desarrollo")],-1)),qe={class:"listado flex flex-column"},Ge=V(()=>t("div",{class:"text-banner flex flex-column align-items-center justify-content-center mt-5"},[t("p",null,[D(" Elaboraci\xF3n de proyectos de identidad de marca, "),t("br"),D("desde las fundaciones hasta los altos est\xE1ndares ")])],-1)),Je={__name:"Home",props:["position","dark"],emits:["form-pop"],setup(e,{emit:i}){const o=e,s=a(null),{elementX:n,elementY:l,isOutside:d,elementHeight:f,elementWidth:v}=ee(s),u=a(["Dise\xF1o Gr\xE1fico","Dise\xF1o y Desarrollo Web","Desarrollo de Aplicaciones","Social Media","Marketing Digital"]),r=a(0),g=a(60),y=a(),p=a(!1),R=a(),A=a(),h=a(),c=a({desktop:new URL("/assets/banner_desktop.dbaa2e46.mp4",self.location).href,mobile:new URL("/assets/banner_mobile.106e56cb.mp4",self.location).href});z(()=>{window.addEventListener("scroll",x),r.value=o.position,y.value=document.getElementById("home"),window.innerWidth<=990?p.value=!0:window.innerWidth>990&&(p.value=!1),window.onresize=()=>{windowWidth.value=window.innerWidth,window.innerWidth<=990&&!p.value?p.value=!0:window.innerWidth>990&&p.value&&(p.value=!1)}});const b=J(()=>{const $=(7.5-l.value/f.value*15).toFixed(2),T=(n.value/v.value*15-15/2).toFixed(2);return"rotateX("+-$+"deg) rotateY("+-T+"deg)"}),x=k=>{let $=k.srcElement.scrollingElement.scrollTop;$<200&&(g.value=50),r.value<$?g.value>10&&(g.value-=1):g.value<50&&(g.value+=1),r.value=$};return j(()=>o.dark,()=>{o.dark?(R.value=new URL("/assets/logoB1.03a14bf7.png",self.location).href,A.value="#ffffff",h.value="url("+new URL("/assets/lengueta_dark.153abe6e.png",self.location).href+")"):(R.value=new URL("/assets/logoA1.5cb83374.png",self.location).href,A.value="#242424",h.value="url("+new URL("/assets/lengueta_color.87e5b9b0.png",self.location).href+")")}),(k,$)=>(m(),w("div",je,[t("video",He,[t("source",{src:p.value?c.value.mobile:c.value.desktop,type:"video/webm"},null,8,Me),t("source",{src:p.value?c.value.mobile:c.value.desktop,type:"video/mp4"},null,8,Ye)]),Pe,t("div",Fe,[t("div",{class:"flex flex-column align-items-center justify-content-center",id:"div-rotable",ref_key:"target",ref:s,style:K({transform:b.value,transition:"transform 0.25s ease-out",transformStyle:"preserve-3d"})},[Ve,t("div",qe,[_(Ne,{class:"text-home",content:u.value},null,8,["content"])]),Ge],4)])]))}},Ke=C(Je,[["__scopeId","data-v-d0499a54"]]),Qe="/assets/gear_serv.f47fc3d1.svg",Ze="/assets/mano.92a368b7.svg";const te=e=>(E("data-v-a8b985e2"),e=e(),O(),e),et={class:"image"},tt=["src"],at={class:"text-serv select-none"},ot={class:"text-info select-none"},st=te(()=>t("br",null,null,-1)),nt=te(()=>t("br",null,null,-1)),it={__name:"Card3DPerspective",props:["image","title","texttop","textbottom"],setup(e){const i=a(null),{elementX:o,elementY:s,isOutside:n,elementHeight:l,elementWidth:d}=ee(i),f=J(()=>{if(n.value)return;const u=(10/2-s.value/l.value*10).toFixed(2),r=(o.value/d.value*10-10/2).toFixed(2);return console.log("rotacion X: "+u),console.log("rotacion Y: "+r),"perspective("+d.value+"px) rotateX("+u+"deg) rotateY("+r+"deg)"});return(v,u)=>(m(),w("div",{class:"contenido",ref_key:"card",ref:i,style:K({transform:f.value,transition:"transform 0.25s ease-out"})},[t("div",et,[t("img",{src:e.image,alt:"service"},null,8,tt)]),t("div",at,L(e.title),1),t("div",ot,[D(L(e.texttop),1),st,nt,D(L(e.textbottom),1)])],4))}},W=C(it,[["__scopeId","data-v-a8b985e2"]]);const Y=e=>(E("data-v-864382f3"),e=e(),O(),e),lt={id:"service"},ct=Y(()=>t("div",{id:"service_orange_back"},null,-1)),rt=Y(()=>t("div",{id:"service_orange"},null,-1)),dt={class:"box_container"},ut={key:0,class:"flex"},pt=Y(()=>t("div",{class:"about-title"},"SERVICIOS",-1)),_t=Y(()=>t("div",{class:"serv_icon flex flex-column align-items-center"},[t("img",{src:Qe,alt:"gear"}),t("img",{src:Ze,alt:"hand"})],-1)),mt=[pt,_t],ft={key:0,class:"flex w-full flex-wrap lg:flex-nowrap justify-content-center"},vt={__name:"Service",props:["active","dark"],emits:["blur_toggle"],setup(e,{emit:i}){const o=e;le(u=>({26538534:n.value}));const s=a();a(!1),a(0);const n=a(),l=a(new URL("/assets/dise\xF1o.54bc75d7.webp",self.location).href),d=a(new URL("/assets/desarrollo.9c3edff0.webp",self.location).href),f=a(new URL("/assets/social.f8d5ae5a.webp",self.location).href),v=a(new URL("/assets/marketing.bcaa4ebe.webp",self.location).href);return z(()=>{s.value=document.getElementById("service_orange_back"),o.dark?(s.value.style.background="#777777",n.value="drop-shadow( -5px 5px 10px rgba(0,0,0,0.5)) invert(1)"):(s.value.style.background="#f6bc68",n.value="drop-shadow( -5px 5px 10px rgba(0,0,0,0.5)) invert(0)")}),j(()=>o.dark,()=>{o.dark?(s.value.style.background="#777777",n.value="drop-shadow( -5px 5px 10px rgba(0,0,0,0.5)) invert(1)"):(s.value.style.background="#f6bc68",n.value="drop-shadow( -5px 5px 10px rgba(0,0,0,0.5)) invert(0)")}),(u,r)=>(m(),w("div",lt,[ct,rt,t("div",dt,[_(U,{name:"LEFT"},{default:S(()=>[o.active?(m(),w("div",ut,mt)):I("",!0)]),_:1}),_(U,{name:"DOWN"},{default:S(()=>[o.active?(m(),w("div",ft,[_(W,{image:l.value,target:{dise:null},dict:"dise",title:"Dise\xF1o Gr\xE1fico",texttop:"Servicio orientado al marketing digital, especializado en imagen corporativa.",textbottom:"Dise\xF1amos desde el logotipo hasta la papeler\xEDa y elementos institucionales de tu marca, adem\xE1s de dise\xF1o de interfaces y experiencias de usuario para Web y aplicaciones"},null,8,["image"]),_(W,{image:d.value,target:{desa:null},dict:"desa",title:"Desarrollo Inform\xE1tico",texttop:"Servicio orientado al desarrollo de sitios Web o aplicaciones de escritorio o m\xF3viles.",textbottom:"Incluye programaci\xF3n en c\xF3digo limpio y \xF3ptimo, hecho a medida de forma modular para lograr la mejor calidad para el cliente."},null,8,["image"]),_(W,{image:f.value,target:{soc:null},dict:"soc",title:"Social Media",texttop:"Trabajo con puesta en marcha inicial o continuando una campa\xF1a previa, gestionando RRSS de manera org\xE1nica y/o campa\xF1as ADS. con entrega de resultados mensuales.",textbottom:"El servicio cuenta con una flexibilidad de 3 planes b\xE1sico, medio y avanzado."},null,8,["image"]),_(W,{image:v.value,target:{mark:null},dict:"mark",title:"Marketing Digital",texttop:"Orientamos tu proyecto y damos forma a tu empresa, ya sea reci\xE9n formada o con una trayectoria, adem\xE1s de materializar tus necesidades de publicidad.",textbottom:""},null,8,["image"])])):I("",!0)]),_:1})])]))}},gt=C(vt,[["__scopeId","data-v-864382f3"]]),ht="/assets/mano.dca98758.svg";const ae=e=>(E("data-v-d70c7c36"),e=e(),O(),e),wt={id:"works"},bt={key:0,class:"flex align-items-center justify-content-center"},yt=ae(()=>t("img",{class:"icon_works",src:ht,alt:"mano"},null,-1)),xt=ae(()=>t("div",{class:"title-text"},"NUESTROS CLIENTES",-1)),kt=[yt,xt],$t={class:"mt-5 carr-box"},Rt={class:"tip-container"},At={class:"slider_img"},Tt=["src","alt"],It=["onClick"],Ct={__name:"Works",props:["active","client_pos"],emits:["client_work"],setup(e,{emit:i}){const o=e;ce();const s=a([{logo:new URL("/assets/fullacceso.e9b923d0.webp",self.location).href,image:new URL("/assets/fullacceso.9dc4f18e.webp",self.location).href,client:"FullAcceso",Description:"Realizaci\xF3n de trabajos sobre altura con un alto nivel de profesionalidad, equipamiento y seguridad. Nuestros equipos hacen instalaciones avanzadas para clientes con altas exigencias de seguridad y calidad, con capacidad para levantar hasta 200 kg sin asistencia de gr\xFAa. Adem\xE1s de la realizaci\xF3n de mantenimiento de edificios, con serivicios de limpieza, reparaci\xF3n, diagn\xF3stico y reemplazo.",url_page:"https://www.fullacceso.cl/web_view",work:!0},{logo:new URL("/assets/rimac.dc423f0e.webp",self.location).href,image:new URL("/assets/rimac.b08cbce3.webp",self.location).href,client:"Rimac",Description:"Somos expertos en instalaci\xF3n, reparaci\xF3n y mantenimiento de circuitos el\xE9ctricos en la IX Regi\xF3n de la Araucan\xEDa. Ofrecemos servicios de seguridad, como sistemas de vigilancia y control de acceso, adem\xE1s de proyectos de iluminaci\xF3n y soportes electr\xF3nicos personalizados. Conf\xEDa en nuestra experiencia y calidad en servicios el\xE9ctricos. Cont\xE1ctanos ahora para obtener soluciones confiables y eficientes en la Araucan\xEDa y sus alrededores.",url_page:"https://www.mcrimac.com",work:!0},{logo:new URL("/assets/siac.3bf3ca0f.webp",self.location).href,image:new URL("/assets/siac.deb0bb29.webp",self.location).href,client:"Siac Automatizaciones",Description:"SIAC Automatizaci\xF3n es una empresa de ingenier\xEDa y automatizaci\xF3n de procesos industriales con m\xE1s de 4 a\xF1os de experiencia brindando soluciones de excelencia a nuestros clientes. Nuestros servicios abarcan una amplia gama de prestaciones desde la gesti\xF3n de proyectos, dise\xF1o, fabricaci\xF3n, instalaci\xF3n, implementaci\xF3n, puesta en marcha y mantenimiento de sistemas de automatizaci\xF3n. Adem\xE1s de nuestros servicios de ingenier\xEDa, tambi\xE9n ofrecemos servicios de asesoramiento para ayudar a nuestros clientes a optimizar sus procesos industriales y ofrecer soluciones a medida. Nuestro objetivo es ayudar a nuestros clientes a maximizar su eficiencia y productividad a trav\xE9s del uso de la tecnolog\xEDa y la automatizaci\xF3n.",url_page:"https://www.siacautomatizacion.cl",work:!0},{logo:new URL("/assets/indecar.e439c5cd.webp",self.location).href,image:new URL("/assets/indecar.5c202934.webp",self.location).href,client:"Indecar",Description:"Descubre Indecar: Tu socio confiable en servicios integrales de limpieza en la Regi\xF3n de la Araucan\xEDa y sus alrededores. Ofrecemos soluciones de limpieza para corporativos, hogares, obras menores y servicios publicitarios. \xA1Conf\xEDa en nuestro equipo profesional para mantener tu entorno impecable y brillante! Cont\xE1ctanos hoy mismo.",url_page:"https://www.indecar.cl",work:!0},{logo:new URL("/assets/juanespinoza.6ff44e3c.webp",self.location).href,image:new URL("/assets/jae.be7b715e.webp",self.location).href,client:"Juan Antonio Espinoza",Description:"Captura los mejores momentos de tu vida y revive esos recuerdos de una manera \xFAnica con Juan Antonio Espinoza. Con nuestra plataforma de 360\xB0, cada evento se convertir\xE1 en una experiencia inolvidable. Contacta a Juan Antonio Espinoza para capturar los momentos m\xE1s especiales de tu vida y crear recuerdos que perdurar\xE1n para siempre.",url_page:"https://www.jaeproducciones.cl",work:!0},{logo:new URL("/assets/rucan.6896cc7a.webp",self.location).href,image:new URL("/assets/rucan.cf01fa5a.webp",self.location).href,client:"Decomuebles Rucan",Description:"\xBFNecesitas remodelar, recuperar o crear un mueble nuevo? En Decomuebles Rucan te ofrecemos un servicio excepcional para dise\xF1ar y fabricar muebles a medida seg\xFAn tus deseos. Adem\xE1s, descubrir\xE1s una amplia selecci\xF3n de muebles de calidad con una est\xE9tica hermosa para embellecer tu hogar. No dudes m\xE1s y visita Decomuebles Rucan, tu mejor opci\xF3n en muebles personalizados y decoraci\xF3n de interiores.",url_page:"https://www.decomueblesrucan.cl",work:!0},{logo:new URL("/assets/dms.afa6be30.webp",self.location).href,image:new URL("/assets/dms.d949e61e.webp",self.location).href,client:"DMS",Description:"Tienda de construcci\xF3n DMS, tu distribuidora de confianza en La Araucan\xEDa, Chile. Ofrecemos una amplia variedad de materiales de construcci\xF3n de alta calidad a precios competitivos. Colaboramos estrechamente con contratistas, arquitectos y la comunidad local para brindar soluciones personalizadas y un servicio excepcional. Nuestra dedicaci\xF3n a la calidad y al valor nos convierte en un socio confiable en la industria de la construcci\xF3n. \xA1Descubre c\xF3mo DMS puede hacer realidad tus proyectos de construcci\xF3n!",url_page:"https://www.tiendadms.cl",work:!0},{logo:new URL("/assets/cafe_haya.51f086e8.webp",self.location).href,image:null,client:"Cafe la Haya",Description:null,url_page:null,work:!1},{logo:new URL("/assets/casa_sumpall.03244499.webp",self.location).href,image:null,client:"Cafe la Haya",Description:null,url_page:null,work:!1},{logo:new URL("/assets/clinica_dental_pitrufquen.306220ba.webp",self.location).href,image:null,client:"Cafe la Haya",Description:null,url_page:null,work:!1},{logo:new URL("/assets/decar.de56c44a.webp",self.location).href,image:null,client:"Cafe la Haya",Description:null,url_page:null,work:!1},{logo:new URL("/assets/novenainspira.8eaf9455.webp",self.location).href,image:null,client:"Cafe la Haya",Description:null,url_page:null,work:!1},{logo:new URL("/assets/pikaro.4875f85a.webp",self.location).href,image:null,client:"Cafe la Haya",Description:null,url_page:null,work:!1},{logo:new URL("/assets/vivedanza.c55e6f95.webp",self.location).href,image:null,client:"Cafe la Haya",Description:null,url_page:null,work:!1}]);a(0),a(1),a(!1),a(0);const n=a(window.innerWidth),l=a(!1),d=a({itemsToShow:3,snapAlign:"start"});return z(()=>{window.innerWidth<=760?d.value={itemsToShow:1,snapAlign:"start"}:window.innerWidth>760&&(d.value={itemsToShow:3,snapAlign:"start"}),window.innerWidth<=990?l.value=!0:window.innerWidth>990&&(l.value=!1),window.onresize=()=>{n.value=window.innerWidth,window.innerWidth<=760&&!l.value?d.value={itemsToShow:1,snapAlign:"start"}:window.innerWidth>760&&l.value&&(d.value={itemsToShow:3,snapAlign:"start"}),window.innerWidth<=990&&!l.value?l.value=!0:window.innerWidth>990&&l.value&&(l.value=!1)}}),(f,v)=>(m(),w("div",wt,[_(U,{name:"UP"},{default:S(()=>[o.active?(m(),w("div",bt,kt)):I("",!0)]),_:1}),t("div",$t,[_(N(me),re(d.value,{"wrap-around":!0,autoplay:2e3}),{addons:S(()=>[_(N(ue)),_(N(pe))]),default:S(()=>[(m(!0),w(P,null,G(s.value,(u,r)=>(m(),X(N(_e),{key:r},{default:S(()=>[t("div",Rt,[t("div",At,[t("img",{src:u.logo,alt:"Cliente-"+r},null,8,Tt)]),u.work?(m(),w("div",{key:0,onClick:g=>i("client_work",u),class:"btn-works select-none cursor-pointer"},"Ver Trabajos",8,It)):I("",!0)])]),_:2},1024))),128))]),_:1},16)])]))}},St=C(Ct,[["__scopeId","data-v-d70c7c36"]]);const oe=e=>(E("data-v-03eca9ed"),e=e(),O(),e),Lt={id:"contact"},Dt={class:"footer-content grid"},Et=oe(()=>t("div",{class:"col-12 md:col-4 flex flex-column align-items-center justify-content-center"},[t("a",{href:"mailto:contacto@engranaphic.cl",target:"_blank",class:"text-subtitle mb-3 select-none cursor-pointer"},"Lunes a Viernes"),t("a",{href:"https://api.whatsapp.com/send/?phone=56926248072&text&type=phone_number&app_absent=0",target:"_blank",class:"text-subtitle select-none"},"10:00 a 19:00 hrs")],-1)),Ot={class:"col-12 md:col-4"},zt={href:"mailto:contacto@engranaphic.cl",target:"_blank",class:"text-subtitle mb-3 select-none cursor-pointer"},Nt={href:"https://api.whatsapp.com/send/?phone=56926248072&text&type=phone_number&app_absent=0",target:"_blank",class:"text-subtitle select-none"},Ut={class:"col-12 md:col-4 flex align-items-center justify-content-center md:justify-content-start"},Wt={href:"https://web.facebook.com/engranaphic",target:"_blank",class:"face select-none cursor-pointer"},Bt={href:"https://www.instagram.com/engranaphic/",target:"_blank",class:"inst select-none cursor-pointer"},Xt=oe(()=>t("div",{class:"foot-wave"},[t("div",{class:"flex justify-content-center align-items-end h-full"}," P\xE1gina creada por Engranaphic SpA. ")],-1)),jt={__name:"Contact",props:["active","dark"],emits:["form-pop"],setup(e,{emit:i}){return a(),(o,s)=>{const n=q("font-awesome-icon");return m(),w("div",Lt,[t("div",Dt,[Et,t("div",Ot,[t("a",zt,[_(n,{class:"icon",icon:"fa-solid fa-envelope"}),D(" contacto@engranaphic.cl")]),t("a",Nt,[_(n,{class:"icon",icon:"fa-brands fa-whatsapp"}),D(" +56 9 2624 8072")])]),t("div",Ut,[t("a",Wt,[_(n,{icon:"fa-brands fa-facebook"})]),t("a",Bt,[_(n,{icon:"fa-brands fa-instagram"})])])]),Xt])}}},Ht=C(jt,[["__scopeId","data-v-03eca9ed"]]);const Mt={__name:"Home",setup(e){const i=a(0),o=a(!1),s=a(),n=a(!1),l=a(!1),d=a(!1),f=a(!1),v=a(!1);z(()=>{window.addEventListener("scroll",y)});const u=h=>{let c=document.getElementById(h);if(c){const x=c.getBoundingClientRect().top+window.scrollY+-60;window.scrollTo({top:x,behavior:"smooth"})}},r=()=>{window.scrollTo(0,0)},g=()=>{admin.value=!1},y=h=>{let b=h.srcElement.scrollingElement.scrollTop;i.value=b;let x=document.getElementById("service"),k=document.getElementById("works"),$=document.getElementById("contact"),T=window.innerHeight*90/100+b;T>=x.offsetTop?(n.value=!0,d.value=!0):n.value=!1,T>=k.offsetTop&&(f.value=!0),T>=$.offsetTop&&(v.value=!0)},p=h=>{s.value=h,o.value=!o.value},R=()=>{l.value=!l.value},A=h=>{admin.value&&document.getElementById("navbar");let c=document.getElementById("home"),b=document.getElementById("service"),x=document.getElementById("works"),k=document.getElementById("contact");h?(admin.value&&(nav.style.filter="blur(6px)"),c.style.filter="blur(6px)",b.style.filter="blur(6px)",x.style.filter="blur(6px)",k.style.filter="blur(6px)"):(admin.value&&(nav.style.filter="blur(0px)"),c.style.filter="blur(0px)",b.style.filter="blur(0px)",x.style.filter="blur(0px)",k.style.filter="blur(0px)")};return(h,c)=>(m(),w(P,null,[_(de,{onLogout:g,onNavigation:u,position:i.value,dark:l.value,onDark_mode:R},null,8,["position","dark"]),o.value?(m(),X(Le,{key:0,client_data:s.value,onClose_tab:p},null,8,["client_data"])):I("",!0),_(Ke,{onFormPop:h.form_dialog_pop,position:i.value,dark:l.value},null,8,["onFormPop","position","dark"]),_(gt,{onBlur_toggle:A,dark:l.value,active:d.value},null,8,["dark","active"]),_(St,{onClient_work:p,active:f.value},null,8,["active"]),_(Ht,{dark:l.value,onFormPop:h.form_dialog_pop,active:v.value},null,8,["dark","onFormPop","active"]),_(U,{name:"upbutton"},{default:S(()=>[n.value?(m(),X(ye,{key:0,onClick:r,btn_icon:"fa-solid fa-arrow-up",class:"up_button_container"})):I("",!0)]),_:1})],64))}},Vt=C(Mt,[["__scopeId","data-v-5d75e059"]]);export{Vt as default};