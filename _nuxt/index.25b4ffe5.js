import{u as d}from"./useAlunni.cba1ec48.js";import{_ as f,r as u,c as m,l as p,m as i,t as _,E as a,L as v,k as h}from"./entry.79dca144.js";import"./data.a9db71e0.js";function x(n){const l=Math.floor(Math.random()*n.length);return n[l]}const g={class:"ml-3 text-h1"},k={class:"ml-3 text-h3 text-teal-accent-4"},S={__name:"index",setup(n){let l=d(),t=u("Pronti?"),s=m(()=>l.value.filter(e=>e.active)),o=u(!1);function c(){let e=0;const r=setInterval(function(){t.value=s.value[e++%s.value.length]},100);o.value=!0,setTimeout(function(){clearInterval(r),o.value=!1,t.value=x(s.value)},5e3)}return document.addEventListener("keydown",e=>{e.code==="Space"&&c()}),(e,r)=>(h(),p("div",{class:"text-center",onClick:c},[i("h1",g,_(a(t).cognome||a(t)),1),i("h3",k,_(a(t).nome),1),i("p",{class:v(["text-disabled font-weight-thin",{isShuffling:a(o)}])}," Primi la barra spaziatrice ",2)]))}},A=f(S,[["__scopeId","data-v-35028eb5"]]);export{A as default};