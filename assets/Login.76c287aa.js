import{_ as p,i as d,y as m,o as v,c as f,a as e,J as c,K as r,L as h,p as g,h as x}from"./index.e26873a6.js";const t=s=>(g("data-v-18cdefac"),s=s(),x(),s),I={id:"login"},w={class:"login-form"},y=t(()=>e("div",{class:"title flex"}," Bienvenido administrador ",-1)),b=t(()=>e("div",{class:"form-text"}," Ingresa tu cuenta de administrador para poder ingresar. ",-1)),B={class:"field"},E=t(()=>e("label",{for:"name"},"Email",-1)),L={class:"field"},k=t(()=>e("label",{for:"password"},"Contrase\xF1a",-1)),C={__name:"Login",setup(s){const n=d(""),i=d(""),u=m(),_=()=>{h.signInWithEmailAndPassword(n.value,i.value).then(o=>{u.push({name:"admin"})}).catch(o=>{console.log(o.code),alert(o.message)})};return(o,a)=>(v(),f("div",I,[e("div",w,[y,b,e("div",B,[E,c(e("input",{id:"email",type:"text",class:"outline-none",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),required:"true",autofocus:""},null,512),[[r,n.value]])]),e("div",L,[k,c(e("input",{id:"password",type:"password",class:"outline-none",placeholder:"Contrase\xF1a","onUpdate:modelValue":a[1]||(a[1]=l=>i.value=l),required:"true",autofocus:""},null,512),[[r,i.value]])]),e("div",{class:"flex justify-content-end"},[e("button",{class:"boton-mail select-none cursor-pointer",onClick:_},"Ingresar")])])]))}},V=p(C,[["__scopeId","data-v-18cdefac"]]);export{V as default};