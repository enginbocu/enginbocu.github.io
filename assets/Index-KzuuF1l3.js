import{k as C,z as M,o as t,c as a,A as T,d as X,r as c,f as $,B as V,g as B,b as v,j,m as E,a as n,F as m,h as w,x as F,y as I,i as L,t as h,p as S}from"./index-CaiRRUwe.js";const q="/assets/img/example-film-poster.jpg",g=async _=>new Promise((l,r)=>{C.get("/movie/",_,!0).then(e=>{(e==null?void 0:e.status)===200&&l(e==null?void 0:e.data)}).catch(e=>{r(e)})}),R={},U={class:"loader loader--style8",title:"7"},z={id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"86px",height:"42px",viewBox:"0 0 24 30",style:{"enable-background":"new 0 0 50 50"},"xml:space":"preserve"},A=T('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2" data-v-56fa43f0><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2" data-v-56fa43f0><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2" data-v-56fa43f0><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" data-v-56fa43f0></animate></rect>',3),D=[A];function H(_,l){return t(),a("div",U,[(t(),a("svg",z,D))])}const k=M(R,[["render",H],["__scopeId","data-v-56fa43f0"]]),P={key:0,class:"d-flex justify-content-center"},G={class:"discover-films-page-container"},J={class:"card-discover-films"},K={class:"title"},O={class:"sub-title"},Q={class:"img-container"},W=["src"],Y={key:1,src:q,alt:""},Z=n("div",{class:"img-overlay"},null,-1),ee={class:"rank-star"},te={class:"rank-number"},ae={key:0,class:"d-flex justify-content-center w-100 py-20"},se=X({__name:"Index",setup(_){const l=I(),r=c(7),e=c({count:0,next:null,prev:null,results:[]}),y=c(null),d=c(!1),p=c(!0),b=async()=>{if(d.value)return;if(y.value.getBoundingClientRect().bottom<window.innerHeight&&e.value.next!==null){d.value=!0;let s=parseInt(e==null?void 0:e.value.next.split("=")[1]);console.log(s),await g({page:s}).then(o=>{console.log("new: ",o,e.value),e.value.next=o.next,e.value.previous=o.previous,e.value.results=[...e.value.results,...o.results],d.value=!1})}};return $(async()=>{await g(l.query).then(u=>{p.value=!1,e.value=u}),window.addEventListener("scroll",b)}),V(()=>l.query,async u=>{e.value.results=[],p.value=!0,await g(u).then(s=>{p.value=!1,e.value=s})}),B(()=>{window.removeEventListener("scroll",b)}),(u,s)=>{var x;const o=L("el-rate"),N=L("router-link");return t(),a(m,null,[p.value?(t(),a("div",P,[v(k)])):(t(),j(E,{key:1,title:"Filmler",count:(x=e.value)==null?void 0:x.count},null,8,["count"])),n("div",G,[(t(!0),a(m,null,w(e.value.results,i=>(t(),a("div",J,[n("span",K,h(i.title),1),n("span",O,[(t(!0),a(m,null,w(i.genres,f=>(t(),a(m,null,[S(h(`#${f.name} `),1)],64))),256))]),n("div",Q,[i!=null&&i.poster_path?(t(),a("img",{key:0,src:`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${i.poster_path}`,alt:""},null,8,W)):(t(),a("img",Y)),Z]),n("span",ee,[v(o,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=f=>r.value=f),max:10},null,8,["modelValue"])]),n("span",te,h(r.value)+" / 10",1),v(N,{to:`/film-detail/${i.slug}`,class:"main"},null,8,["to"])]))),256)),d.value?(t(),a("div",ae,[v(k)])):F("",!0),n("div",{class:"limit",ref_key:"postListLimit",ref:y},null,512)])],64)}}});export{se as default};
