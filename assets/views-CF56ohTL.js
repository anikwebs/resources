const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/decision-matrix-B0ZJYD4_.js","assets/kit-B_He1EBw.js","assets/data-CbaeBgJo.js","assets/priority-matrix-CdRHXEyY.js","assets/task-decomposition-KGHTdfK9.js","assets/risk-analyzer-BpwlP7iy.js","assets/opportunity-cost-BTLjPEqa.js","assets/goal-planner-D93Dw0i_.js","assets/habit-planner-DR0fgXhQ.js","assets/meeting-planner-Zn8FdVJe.js","assets/conversation-planner-C4VF4Zq-.js","assets/negotiation-planner-BWKQPGyy.js","assets/learning-planner-DKLi0Uot.js","assets/career-decision-YdQVwn5I.js","assets/personal-swot-C75iucII.js","assets/credibility-checker-D95BY_y_.js","assets/problem-canvas-BveAR0v1.js","assets/reflection-BDIAaERQ.js","assets/scenario-simulator-YT9cnYqC.js","assets/pre-mortem-C0xI_jhO.js","assets/time-audit-4hz4s73d.js","assets/email-pressure-test-Cmosf2i8.js","assets/money-triage-vFfya_Dy.js"])))=>i.map(i=>d[i]);
import{S as F,D as Y,a as ee,T as O,P as z,b as re,s as Se,p as Fe,c as pt,d as ue,e as He,f as Fa,g as Ha,h as ut,i as mt,L as vt,j as gt,k as Va,l as Ua,m as Ya,n as Gt,t as Zt,o as Jt,A as za,q as yt,M as ft,r as at,B as Z,u as Qt,E as Ka,v as Ze,w as Ga,x as st,y as Za,z as Xt,C as ea,F as Ja,G as Qa,H as Xa,I as es,V as ts,J as as,K as ss,N as ns,O as J,R as is,Q,U as Rt}from"./data-CbaeBgJo.js";const os="modulepreload",ls=function(e){return"/resources/"+e},Ot={},L=function(t,a,s){let n=Promise.resolve();if(a&&a.length>0){let d=function(p){return Promise.all(p.map(f=>Promise.resolve(f).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");n=d(a.map(p=>{if(p=ls(p),p in Ot)return;Ot[p]=!0;const f=p.endsWith(".css"),v=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":os,f||(u.as="script"),u.crossOrigin="",u.href=p,l&&u.setAttribute("nonce",l),document.head.appendChild(u),f)return new Promise((y,$)=>{u.addEventListener("load",y),u.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return n.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},Di=(e,t=document)=>t.querySelector(e),nt=(e,t=document)=>[...t.querySelectorAll(e)],r=(e="")=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),_=e=>Number(e||0).toLocaleString("en-US");function m(e=""){let t=r(e);return t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/(^|[\s(\[—–-])\*([^*\n]+)\*(?=$|[\s.,;:!?)\]—–-])/g,"$1<em>$2</em>"),t=t.replace(/(^|\s)_([^_\n]{2,})_(?=$|[\s.,;:!?)])/g,"$1<em>$2</em>"),t=t.replace(/\[\[(.+?)\]\]/g,"<strong>$1</strong>"),t}const H=(e="")=>String(e).replace(/[*_`]|\[\[|\]\]/g,"");function se(e="",t=160){const a=H(e).replace(/\s+/g," ").trim();return a.length<=t?a:a.slice(0,a.lastIndexOf(" ",t)||t).trimEnd()+"…"}const T=(e,t,a=t+"s")=>`${_(e)} ${e===1?t:a}`,he=e=>Math.max(1,Math.round((e||0)/200));function me(e,t=180){let a;return(...s)=>{clearTimeout(a),a=setTimeout(()=>e(...s),t)}}function Pt(e){const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild}function Bi(e,t,a,s,n){e.addEventListener(t,i=>{const o=i.target.closest(a);o&&e.contains(o)&&s(i,o)},n)}async function bt(e){try{return await navigator.clipboard.writeText(e),!0}catch{try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.appendChild(t),t.select();const a=document.execCommand("copy");return t.remove(),a}catch{return!1}}}let Ce;function U(e,t=""){Ce||(Ce=Pt('<div class="toasts" role="status" aria-live="polite"></div>'),document.body.appendChild(Ce));const s=Pt(`<div class="toast">${t==="ok"?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>':""}<span>${r(e)}</span></div>`);Ce.appendChild(s),setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),240)},2100)}let Le;function Fi(e=document){if(matchMedia("(prefers-reduced-motion: reduce)").matches){nt(".rise",e).forEach(t=>t.classList.add("in"));return}Le||(Le=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("in"),Le.unobserve(a.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.04})),nt(".rise",e).forEach((t,a)=>{t.style.transitionDelay=`${Math.min(a,6)*42}ms`,Le.observe(t)})}function Hi(e){const t='a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])',a=document.activeElement;function s(n){if(n.key!=="Tab")return;const i=nt(t,e).filter(d=>d.offsetParent!==null);if(!i.length)return;const o=i[0],l=i[i.length-1];n.shiftKey&&document.activeElement===o?(n.preventDefault(),l.focus()):!n.shiftKey&&document.activeElement===l&&(n.preventDefault(),o.focus())}return e.addEventListener("keydown",s),()=>{e.removeEventListener("keydown",s),a&&a.focus&&a.focus()}}const w=(e,t="")=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${t}>${e}</svg>`,c={search:w('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),menu:w('<path d="M3 6h18M3 12h18M3 18h18"/>'),close:w('<path d="M18 6 6 18M6 6l12 12"/>'),chev:w('<path d="m9 18 6-6-6-6"/>'),chevDown:w('<path d="m6 9 6 6 6-6"/>'),arrow:w('<path d="M5 12h14m-6-7 7 7-7 7"/>'),back:w('<path d="M19 12H5m6 7-7-7 7-7"/>'),up:w('<path d="m18 15-6-6-6 6"/>'),external:w('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),sun:w('<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.5 1.5m11.2 11.2 1.5 1.5m0-14.2-1.5 1.5M6.4 17.6l-1.5 1.5"/>'),moon:w('<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z"/>'),home:w('<path d="M3 10.5 12 3l9 7.5M5.5 9.4V20h13V9.4"/>'),compass:w('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8Z"/>'),pen:w('<path d="M12 20h9M16.4 3.6a2.1 2.1 0 0 1 3 3L7.5 18.5 3 20l1.5-4.5Z"/>'),globe:w('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>'),council:w('<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9.5" r="2.4"/><path d="M15 19.6a5 5 0 0 1 6.5-4.4"/>'),vault:w('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="10" cy="12" r="3.2"/><path d="M10 8.8v-1M10 16.2v1M6.8 12h-1M14.2 12h1M17 8.5h1.6M17 15.5h1.6"/>'),book:w('<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22Z"/><path d="M4 17.5h16"/>'),layers:w('<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>'),list:w('<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>'),grid:w('<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>'),check:w('<path d="M20 6 9 17l-5-5"/>',' stroke-width="2.6"'),circleCheck:w('<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-4.8"/>'),circle:w('<circle cx="12" cy="12" r="9"/>'),plus:w('<path d="M12 5v14M5 12h14"/>'),minus:w('<path d="M5 12h14"/>'),trash:w('<path d="M4 7h16M9 7V4.8A.8.8 0 0 1 9.8 4h4.4a.8.8 0 0 1 .8.8V7M6.5 7l.8 12.2a.9.9 0 0 0 .9.8h7.6a.9.9 0 0 0 .9-.8L17.5 7"/>'),copy:w('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'),star:w('<path d="m12 3.2 2.7 5.7 6.2.9-4.5 4.4 1.1 6.2-5.5-3-5.5 3 1.1-6.2L3.1 9.8l6.2-.9Z"/>'),starFill:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 3.2 2.7 5.7 6.2.9-4.5 4.4 1.1 6.2-5.5-3-5.5 3 1.1-6.2L3.1 9.8l6.2-.9Z"/></svg>',reset:w('<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1M3.2 4v4.3h4.3"/>'),download:w('<path d="M12 3v12m0 0 4.2-4.2M12 15l-4.2-4.2M4 19h16"/>'),filter:w('<path d="M3 6h18M6.5 12h11M10 18h4"/>'),shuffle:w('<path d="M17 3h4v4M21 3l-6.5 6.5M3 21l6.5-6.5M17 21h4v-4M3 3l7 7"/>'),play:w('<path d="M7 4.5 19 12 7 19.5Z"/>'),spark:w('<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.8 6.8l2.4 2.4M14.8 14.8l2.4 2.4M17.2 6.8l-2.4 2.4M9.2 14.8l-2.4 2.4"/>'),bolt:w('<path d="M13 2 4 14h6l-1 8 9-12h-6Z"/>'),tool:w('<path d="M14.5 6.5a3.5 3.5 0 0 0 4.6 4.6l-8 8a2.8 2.8 0 0 1-4-4l8-8a3.5 3.5 0 0 0-.6-.6Z"/><path d="m5 5 3 3"/>'),target:w('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>'),flag:w('<path d="M5 21V4m0 0h9l-1 3 1 3H5"/>'),chart:w('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),route:w('<circle cx="6" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.6 6h5.2a3.4 3.4 0 0 1 0 6.8H10a3.4 3.4 0 0 0 0 6.8h5.4"/>'),alert:w('<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5m0 3v.5"/>',' stroke-width="2"'),shield:w('<path d="M12 3 4.5 6v6c0 4.4 3.1 8 7.5 9 4.4-1 7.5-4.6 7.5-9V6Z"/><path d="m9 12 2.2 2.2L15.4 10"/>'),scale:w('<path d="M12 3v18M6 7h12M6 7 3 14h6ZM18 7l-3 7h6ZM8 21h8"/>'),brain:w('<path d="M9.5 4.5A3 3 0 0 0 6.6 8a3 3 0 0 0-1.1 5.3A3 3 0 0 0 8 18.5a2.5 2.5 0 0 0 4-2V5.5a1 1 0 0 0-1-1ZM14.5 4.5a3 3 0 0 1 2.9 3.5 3 3 0 0 1 1.1 5.3 3 3 0 0 1-2.5 5.2 2.5 2.5 0 0 1-4-2V5.5a1 1 0 0 1 1-1Z"/>'),chat:w('<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/>'),clock:w('<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.2 2"/>'),calendar:w('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8.5 3v4M15.5 3v4"/>'),money:w('<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/>'),heart:w('<path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.4a4.4 4.4 0 0 1 7.5 3c0 5-7.5 9.6-7.5 9.6Z"/>'),users:w('<circle cx="9" cy="8" r="3.4"/><path d="M2.6 20a6.4 6.4 0 0 1 12.8 0"/><path d="M17 5.5a3.2 3.2 0 0 1 0 6M18 20a6 6 0 0 0-2-4.4"/>'),key:w('<circle cx="8" cy="15" r="3.6"/><path d="m10.6 12.4 8-8 2.4 2.4-1.6 1.6 1.6 1.6-2.2 2.2-1.6-1.6-2 2"/>'),eye:w('<path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>'),cpu:w('<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/>'),inbox:w('<path d="M3.5 13 6 5h12l2.5 8v6.5h-17Z"/><path d="M3.5 13h5l1 2.2h5l1-2.2h5"/>'),file:w('<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7Z"/><path d="M14 3v4h4"/>'),bookmark:w('<path d="M6.5 3.5h11v17l-5.5-3.6L6.5 20.5Z"/>'),question:w('<circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.6 2.3c-.8.5-1.2 1-1.2 1.9M12 16.8h.01"/>'),sliders:w('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2.2"/><circle cx="10" cy="17" r="2.2"/>'),puzzle:w('<path d="M9.6 3.5a1.9 1.9 0 0 1 3.8 0V5h3.1a1 1 0 0 1 1 1v3.1h1.5a1.9 1.9 0 0 1 0 3.8H17.5V16a1 1 0 0 1-1 1h-3.1v1.5a1.9 1.9 0 0 1-3.8 0V17H6.5a1 1 0 0 1-1-1v-3.1H4a1.9 1.9 0 0 1 0-3.8h1.5V6a1 1 0 0 1 1-1h3.1Z"/>'),lightbulb:w('<path d="M9 17.5h6M10 21h4M12 3a6 6 0 0 0-3.4 10.9c.5.4.9 1 .9 1.6h5c0-.6.4-1.2.9-1.6A6 6 0 0 0 12 3Z"/>'),refresh:w('<path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1M20.8 4v4.3h-4.3"/>'),mic:w('<rect x="9" y="3" width="6" height="10" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7"/>')},$t=e=>c[e]||c.book,ta=[];let ae=null,ke=null,Je=!1,Qe=null;function Vi(e,t){const a=e.split("/").filter(Boolean);ta.push({pattern:e,parts:a,handler:t})}function Ui(e){ke=e}function aa(e=location.hash){let t=String(e).replace(/^#\/?/,""),a="";const s=t.indexOf("#");s>-1&&(a=t.slice(s+1),t=t.slice(0,s));let n={};const i=t.indexOf("?");i>-1&&(n=Object.fromEntries(new URLSearchParams(t.slice(i+1))),t=t.slice(0,i));const o=t.split("/").filter(Boolean).map(decodeURIComponent);return{parts:o,query:n,hash:a,path:o.join("/")}}function rs(e){for(const t of ta){if(t.parts.length!==e.length)continue;const a={};let s=!0;for(let n=0;n<t.parts.length;n++){const i=t.parts[n];if(i.startsWith(":"))a[i.slice(1)]=e[n];else if(i!==e[n]){s=!1;break}}if(s)return{route:t,params:a}}return null}const Yi=()=>ae;function h(e){return"#/"+String(e).replace(/^#?\/?/,"")}function de(e,{replace:t=!1}={}){const a=h(e);if(location.hash===a){Ee();return}t?history.replaceState(null,"",a):location.hash=a,t&&Ee()}function cs(e){const t=h(e);if(location.hash!==t&&(history.replaceState(null,"",t),ae)){const a=aa(t);ae={...ae,...a,params:ae.params}}}const sa=new Map;function ds(){ae&&sa.set(ae.path,window.scrollY)}async function Ee(){const e=aa();if(Je){Qe=!0;return}Je=!0;const t=rs(e.parts),a={...e,params:t?t.params:{}},s=ae;ae=a;try{const n=t?await t.route.handler(a):{title:"Not found",html:null,notFound:!0};ke&&await ke(n,a,s)}catch(n){console.error("[route]",n),ke&&await ke({error:n,title:"Something went wrong"},a,s)}finally{Je=!1,Qe&&(Qe=!1,Ee())}}function zi(){addEventListener("hashchange",()=>{ds(),Ee()}),Ee()}function Ki(e,t){if(e.hash){const i=document.getElementById(e.hash);if(i){i.scrollIntoView({block:"start",behavior:"auto"});return}}if(t&&t.path===e.path)return;const s=sa.get(e.path),n=typeof s=="number"&&!e.query.fresh;window.scrollTo({top:n?s:0,behavior:"auto"})}const Xe="rha:",S={get(e,t){try{const a=localStorage.getItem(Xe+e);return a==null?t:JSON.parse(a)}catch{return t}},set(e,t){try{return localStorage.setItem(Xe+e,JSON.stringify(t)),!0}catch{return!1}},del(e){try{localStorage.removeItem(Xe+e)}catch{}}},it=new Set,Gi=e=>(it.add(e),()=>it.delete(e)),R=e=>it.forEach(t=>{try{t(e)}catch{}}),b={done:new Set(S.get("done",[])),saved:S.get("saved",[]),recent:S.get("recent",[]),notes:S.get("notes",{}),tools:S.get("tools",{}),scenarios:S.get("scenarios",{}),trees:S.get("trees",{}),paths:S.get("paths",{}),battles:S.get("battles",{}),scale:S.get("scale",1),theme:S.get("theme",null),seen:S.get("seen",!1),version:1};function Zi(){const e=b.theme||"light";return document.documentElement.dataset.theme=e,na(e),e}function na(e){const t=document.querySelector("meta[name=theme-color]");t&&(t.content=e==="dark"?"#12110d":"#f4f1ea")}function Ji(){const e=document.documentElement.dataset.theme==="dark"?"light":"dark";return document.documentElement.dataset.theme=e,b.theme=e,S.set("theme",e),na(e),R("theme"),e}function hs(e){return b.scale=Math.min(1.35,Math.max(.85,Math.round(e*100)/100)),S.set("scale",b.scale),document.documentElement.style.setProperty("--reader-scale",b.scale),R("scale"),b.scale}const Qi=()=>document.documentElement.style.setProperty("--reader-scale",b.scale),N=e=>b.done.has(e);function Xi(e){return b.done.has(e)?b.done.delete(e):b.done.add(e),S.set("done",[...b.done]),R("done"),b.done.has(e)}function ps(e,t){t?b.done.add(e):b.done.delete(e),S.set("done",[...b.done]),R("done")}const V=e=>e.reduce((t,a)=>t+(b.done.has(a)?1:0),0),ye=e=>b.saved.some(t=>t.id===e);function eo(e){const t=b.saved.findIndex(a=>a.id===e.id);return t>-1?b.saved.splice(t,1):b.saved.unshift({...e,at:Date.now()}),b.saved=b.saved.slice(0,400),S.set("saved",b.saved),R("saved"),ye(e.id)}function to(e){!e||!e.id||(b.recent=[{...e,at:Date.now()},...b.recent.filter(t=>t.id!==e.id)].slice(0,40),S.set("recent",b.recent),R("recent"))}const wt=()=>b.recent.find(e=>e.kind==="lesson")||b.recent[0]||null;function ao(e,t){t&&t.trim()?b.notes[e]={text:t.trim(),at:Date.now()}:delete b.notes[e],S.set("notes",b.notes),R("notes")}const K=e=>(b.notes[e]||{}).text||"";function ia(e,t){b.tools[e]={data:t,at:Date.now()},S.set("tools",b.tools),R("tools")}const $e=(e,t=null)=>(b.tools[e]||{}).data??t;function oa(e){delete b.tools[e],S.set("tools",b.tools),R("tools")}const la=()=>Object.keys(b.tools).length;function ra(e,t){b.scenarios[e]={picked:t,at:Date.now()},S.set("scenarios",b.scenarios),R("scenarios")}const fe=e=>b.scenarios[e]||null,ca=()=>Object.keys(b.scenarios).length;function et(e,t){b.trees[e]={path:t,at:Date.now()},S.set("trees",b.trees),R("trees")}const Ae=e=>b.trees[e]||null;function us(e){b.paths[e]||(b.paths[e]={startedAt:Date.now()}),S.set("paths",b.paths),R("paths")}function ms(e){delete b.paths[e],S.set("paths",b.paths),R("paths")}const ot=e=>!!b.paths[e],kt=()=>Object.keys(b.paths);function vs(e,t,a){const s=b.battles[e];(!s||t>=s.score)&&(b.battles[e]={score:t,answers:a,at:Date.now()}),S.set("battles",b.battles),R("battles")}const Nt=()=>Object.keys(b.battles).length;function so(){b.seen=!0,S.set("seen",!0)}function gs(){return{app:"The Resources by Anik",exportedAt:new Date().toISOString(),version:b.version,done:[...b.done],saved:b.saved,recent:b.recent,notes:b.notes,tools:b.tools,scenarios:b.scenarios,trees:b.trees,paths:b.paths,battles:b.battles}}function ys(e){if(!e||typeof e!="object")throw new Error("Not a valid backup file.");Array.isArray(e.done)&&(b.done=new Set(e.done),S.set("done",e.done));for(const t of["saved","recent"])Array.isArray(e[t])&&(b[t]=e[t],S.set(t,e[t]));for(const t of["notes","tools","scenarios","trees","paths","battles"])e[t]&&typeof e[t]=="object"&&(b[t]=e[t],S.set(t,e[t]));R("import")}function fs(){for(const e of["done","saved","recent","notes","tools","scenarios","trees","paths","battles","seen"])S.del(e);b.done=new Set,b.saved=[],b.recent=[],b.notes={},b.tools={},b.scenarios={},b.trees={},b.paths={},b.battles={},b.seen=!1,R("reset")}const bs=e=>"/resources/"+String(e).replace(/^\/+/,""),tt=new Map,qe=new Map;class Wt extends Error{constructor(t,a,s){super(t),this.name="DataError",this.url=a,this.status=s}}async function ne(e){const t=bs(e);if(tt.has(t))return tt.get(t);if(qe.has(t))return qe.get(t);const a=(async()=>{let s;try{s=await fetch(t,{headers:{accept:"application/json"}})}catch{throw new Wt("Could not reach the content files. Check your connection and reload.",t,0)}if(!s.ok)throw new Wt(s.status===404?"That page is not in this library.":`Content failed to load (${s.status}).`,t,s.status);return s.json()})();qe.set(t,a);try{const s=await a;return tt.set(t,s),s}finally{qe.delete(t)}}const $s=()=>ne("content/manifest.json"),Tt=()=>ne("content/situations.json"),ws=e=>ne(`content/situation/${encodeURIComponent(e)}.json`),ks=e=>ne(`content/lesson/${encodeURIComponent(e)}.json`),da=e=>ne(`content/vault/${encodeURIComponent(e)}.json`),Ve=(e,t)=>e[t]||e.docs||e,Ts=()=>ne("content/tools.json").then(e=>Ve(e,"tools")),xt=()=>ne("content/prompts.json").then(e=>Ve(e,"prompts")),xs=()=>ne("content/missions.json").then(e=>Ve(e,"missions")),ha=()=>ne("content/search.json").then(e=>Ve(e,"docs"));async function B(){const[e,t]=await Promise.all([$s(),Tt()]);return{manifest:e,situations:t}}function no(){const e=()=>ha().catch(()=>{});"requestIdleCallback"in window?requestIdleCallback(e,{timeout:4e3}):setTimeout(e,2200)}function te(e){const t=new Map(e.index.map(i=>[i.id,i])),a=new Map;for(const i of e.index)a.has(i.track)||a.set(i.track,[]),a.get(i.track).push(i);const s=new Map(e.vault.map(i=>[i.id,i])),n=new Map(e.tracks.map(i=>[i.id,i]));return{manifest:e,unit:i=>t.get(i),units:()=>e.index,ofTrack:i=>a.get(i)||[],track:i=>n.get(i),tracks:()=>e.tracks,groups:i=>e.groups[i]||[],group:(i,o)=>(e.groups[i]||[]).find(l=>l.id===o),collection:i=>s.get(i),collections:()=>e.vault,collectionsOfKind:i=>e.vault.filter(o=>o.kind===i),vaultGroups:()=>e.vaultGroups,stats:()=>e.stats,neighbours(i){const o=t.get(i);if(!o)return{prev:null,next:null};const l=a.get(o.track)||[],d=l.findIndex(p=>p.id===i);return{prev:d>0?l[d-1]:null,next:d>-1&&d<l.length-1?l[d+1]:null}},groupUnits(i,o){const l=(e.groups[i]||[]).find(d=>d.id===o);return l?(l.lessonIds||[]).map(d=>t.get(d)).filter(Boolean):[]}}}const Ue={lesson:{label:"Lessons",icon:"book",w:1},situation:{label:"Situations",icon:"alert",w:1.5},scenario:{label:"Scenarios",icon:"target",w:1.25},tree:{label:"Decision tools",icon:"route",w:1.2},entry:{label:"Vault entries",icon:"vault",w:.95},collection:{label:"Collections",icon:"layers",w:1},tool:{label:"Tools",icon:"tool",w:1.2},ai:{label:"AI workflows",icon:"cpu",w:1.3},prompt:{label:"Prompts",icon:"spark",w:.85},path:{label:"Learning paths",icon:"route",w:1.15},page:{label:"Sections",icon:"grid",w:.9}},Ss=new Set("a an and are as at be but by for from how i if in into is it its me my no not of on or that the their them then there they this to too was what when where which who why will with you your do does am can cant could should would about like just get got have has had".split(" ")),Te=e=>H(String(e||"")).toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9\s-]/g," ").replace(/\s+/g," ").trim();function lt(e){return e.length>5&&e.endsWith("ing")?e.slice(0,-3):e.length>4&&e.endsWith("ies")?e.slice(0,-3)+"y":e.length>4&&e.endsWith("es")?e.slice(0,-2):e.length>3&&e.endsWith("s")&&!e.endsWith("ss")?e.slice(0,-1):e.length>5&&e.endsWith("ed")?e.slice(0,-2):e}const De=e=>Te(e).split(" ").filter(t=>t.length>1&&!Ss.has(t)).map(lt),Dt={boss:["manager","supervisor","lead"],manager:["boss","supervisor"],fired:["redundant","laid","layoff","sack","dismissed","terminated"],quit:["resign","leave","notice"],rent:["landlord","evict","housing","tenancy"],money:["financial","debt","cash","salary","pay","budget"],raise:["salary","promotion","negotiate","pay"],angry:["shouting","furious","aggressive","yelling","mad"],scam:["fraud","phishing","scammer","con"],ai:["chatgpt","llm","claude","gemini","copilot","prompt"],interview:["recruiter","hiring","job","application"],cv:["resume","curriculum"],sad:["depressed","grief","low"],panic:["anxiety","anxious","attack"],decide:["decision","choice","choose","option"],focus:["attention","distraction","procrastination"],learn:["study","revise","exam","memory"],meeting:["agenda","standup","review"],email:["inbox","message","reply"],no:["refuse","decline","boundary"],time:["deadline","schedule","busy","overload"]};function Es(e){const t=new Set(e);for(const a of e){const s=Dt[a];s&&s.forEach(n=>t.add(lt(n)));for(const[n,i]of Object.entries(Dt))i.includes(a)&&t.add(lt(n))}return[...t]}let ce=null,Re=null;async function As(e=[]){return ce||Re||(Re=(async()=>{const[t,a,s,n]=await Promise.all([ha().catch(()=>[]),Tt().catch(()=>({situations:[]})),Ts().catch(()=>[]),xt().catch(()=>[])]),i=[];for(const l of t){const d=l.t==="l"?"lesson":l.t==="c"?"collection":"entry";let p;if(d==="lesson")p=`read/${l.tr}/${l.id}`;else if(d==="collection")p=`vault/${l.id}`;else{const[f,v]=String(l.id).split("#");p=v?`vault/${f}/${v}`:`vault/${f}`}i.push({kind:d,title:l.ti||"",sub:l.su||l.g||"",route:p,group:l.g||"",body:`${l.ti||""} ${l.su||""} ${l.g||""} ${l.k||""} ${l.x||""}`})}for(const l of a.situations||[])i.push({kind:"situation",title:l.title,sub:l.categoryTitle||"",route:`situation/${l.id}`,group:l.categoryTitle||"",sev:l.severity,body:`${l.title} ${l.categoryTitle||""} ${(l.tags||[]).join(" ")} ${l.tool||""} ${l.lede||""}`});const o=new Set;for(const l of s){const d=Te(l.name);!d||o.has(d)||(o.add(d),i.push({kind:"tool",title:l.name,sub:`${l.skill||""}`,route:`read/${l.track}/${l.lessonId}`,group:"Named technique",body:`${l.name} ${l.skill||""} ${l.result||""} ${l.lessonTitle||""}`}))}for(const l of n)i.push({kind:"prompt",title:l.source?`Prompt — ${l.source}`:"Prompt",sub:l.section||"",route:`ai/prompts?q=${encodeURIComponent((l.source||"").slice(0,40))}`,group:l.section||"Prompts",body:`${l.text||""} ${l.source||""} ${l.section||""}`});i.push(...e);for(const l of i)l._t=new Set(De(l.title)),l._b=new Set(De(l.body));return ce=i,i})(),Re)}const Is=()=>!!ce,Ms=()=>ce?ce.length:0;function St(e,{kind:t="all",limit:a=40}={}){if(!ce)return[];const s=Te(e);if(s.length<2)return[];const n=De(e);if(!n.length)return[];const i=Es(n),o=s.length>5?s:null,l=[];for(const d of ce){if(t!=="all"&&d.kind!==t)continue;let p=0,f=0;for(const u of i){const $=n.includes(u)?1:.42;if(d._t.has(u))p+=12*$,f++;else if(d._b.has(u))p+=4*$,f++;else if(u.length>=4){let M=!1;for(const D of d._t)if(D.startsWith(u)){M=!0;break}if(M){p+=6*$,f++;continue}for(const D of d._b)if(D.startsWith(u)){M=!0;break}M&&(p+=1.6*$,f++)}}if(!f)continue;const v=n.filter(u=>d._t.has(u)||d._b.has(u)||[...d._t,...d._b].some(y=>u.length>=4&&y.startsWith(u))).length;if(!(n.length>1&&v===0)){if(o){const u=Te(d.title);u===s?p+=40:u.startsWith(s)?p+=22:u.includes(s)?p+=14:Te(d.body).includes(s)&&(p+=7)}p*=(Ue[d.kind]||{w:1}).w,d.sev==="critical"&&(p*=1.1),p+=Math.max(0,26-d.title.length)*.05,l.push({doc:d,score:p})}}return l.sort((d,p)=>p.score-d.score||d.doc.title.length-p.doc.title.length),l.slice(0,a).map(d=>d.doc)}function pa(e){const t=St(e,{limit:400}),a={all:t.length};for(const s of t)a[s.kind]=(a[s.kind]||0)+1;return a}function Bt(e,t){const a=De(t).filter(n=>n.length>2);if(!a.length)return e;const s=new RegExp("("+a.map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")","gi");return e.replace(s,"<mark>$1</mark>")}const js=["my boss shouted at me","impossible deadline","how do I say no","two job offers","asking for a raise","I made a mistake at work","cant pay rent","is this information true","use AI to write a hard email","I cant focus","difficult customer","prepare for an interview"],q=[{id:"decision-matrix",name:"Decision Matrix",group:"Deciding",icon:"scale",accent:"forest",blurb:"Score real options against criteria you weight yourself."},{id:"risk-analyzer",name:"Risk Analyzer",group:"Deciding",icon:"alert",accent:"signal",blurb:"Rank what could go wrong, then separate recoverable from not."},{id:"opportunity-cost",name:"Opportunity Cost Analyzer",group:"Deciding",icon:"money",accent:"council",blurb:"Price what you give up, not just what you spend."},{id:"career-decision",name:"Career Decision Tool",group:"Deciding",icon:"route",accent:"atlas",blurb:"Weigh a role change on what compounds, not what flatters."},{id:"scenario-simulator",name:"Scenario Simulator",group:"Deciding",icon:"shuffle",accent:"atlas",blurb:"Run a plan through good, likely and bad futures before committing."},{id:"pre-mortem",name:"Pre-Mortem",group:"Deciding",icon:"alert",accent:"signal",blurb:"Assume it already failed, then work backwards to what you would change now."},{id:"priority-matrix",name:"Priority Matrix",group:"Working",icon:"grid",accent:"clay",blurb:"Sort what you are carrying by importance against urgency."},{id:"task-decomposition",name:"Task Decomposition",group:"Working",icon:"layers",accent:"forest",blurb:"Break something too big to start into steps you can actually begin."},{id:"time-audit",name:"Time Audit",group:"Working",icon:"clock",accent:"atlas",blurb:"Find where the week actually goes, and what it is worth."},{id:"meeting-planner",name:"Meeting Planner",group:"Communicating",icon:"users",accent:"atlas",blurb:"Establish whether the meeting is needed, then make it short."},{id:"conversation-planner",name:"Conversation Planner",group:"Communicating",icon:"chat",accent:"clay",blurb:"Prepare the opening line, the outcome, and your answer to pushback."},{id:"negotiation-planner",name:"Negotiation Planner",group:"Communicating",icon:"scale",accent:"council",blurb:"Set your number, your walk-away, and the non-money axes."},{id:"email-pressure-test",name:"Message Pressure Test",group:"Communicating",icon:"shield",accent:"clay",blurb:"Check a difficult email before you send it, against the things a hostile reader notices."},{id:"money-triage",name:"Money Triage",group:"Money",icon:"money",accent:"signal",blurb:"Work out which bills can actually hurt you, and in what order to pay them."},{id:"goal-planner",name:"Goal Planner",group:"Building",icon:"target",accent:"forest",blurb:"Turn an intention into a measure, milestones and a weekly action."},{id:"habit-planner",name:"Habit Planner",group:"Building",icon:"refresh",accent:"clay",blurb:"Design a habit around a trigger, a floor and a fourteen-day log."},{id:"learning-planner",name:"Learning Planner",group:"Building",icon:"brain",accent:"council",blurb:"Plan a skill around an output, not a syllabus."},{id:"personal-swot",name:"Personal SWOT",group:"Building",icon:"compass",accent:"forest",blurb:"An honest inventory that ends in two concrete moves."},{id:"reflection",name:"Reflection Tool",group:"Building",icon:"pen",accent:"council",blurb:"Review a period honestly and leave with one change."},{id:"credibility-checker",name:"Information Credibility Checker",group:"Thinking",icon:"shield",accent:"atlas",blurb:"Work out how much weight a claim can safely carry."},{id:"problem-canvas",name:"Problem-Solving Canvas",group:"Thinking",icon:"puzzle",accent:"clay",blurb:"State the problem properly, then find where it actually moves."}],Ft=[{id:"Deciding",blurb:"For when there is a choice to make and no obvious answer."},{id:"Working",blurb:"For when there is too much and no order to it."},{id:"Communicating",blurb:"For the conversations that decide things."},{id:"Money",blurb:"For when the numbers are the problem and the order of payment matters."},{id:"Building",blurb:"For capability that accumulates rather than resets."},{id:"Thinking",blurb:"For working out what is actually true and actually wrong."}],ua=e=>q.find(t=>t.id===e)||null;q.map(e=>e.id);const _s={"decision-matrix":()=>L(()=>import("./decision-matrix-B0ZJYD4_.js"),__vite__mapDeps([0,1,2])),"priority-matrix":()=>L(()=>import("./priority-matrix-CdRHXEyY.js"),__vite__mapDeps([3,1,2])),"task-decomposition":()=>L(()=>import("./task-decomposition-KGHTdfK9.js"),__vite__mapDeps([4,1,2])),"risk-analyzer":()=>L(()=>import("./risk-analyzer-BpwlP7iy.js"),__vite__mapDeps([5,1,2])),"opportunity-cost":()=>L(()=>import("./opportunity-cost-BTLjPEqa.js"),__vite__mapDeps([6,1,2])),"goal-planner":()=>L(()=>import("./goal-planner-D93Dw0i_.js"),__vite__mapDeps([7,1,2])),"habit-planner":()=>L(()=>import("./habit-planner-DR0fgXhQ.js"),__vite__mapDeps([8,1,2])),"meeting-planner":()=>L(()=>import("./meeting-planner-Zn8FdVJe.js"),__vite__mapDeps([9,1,2])),"conversation-planner":()=>L(()=>import("./conversation-planner-C4VF4Zq-.js"),__vite__mapDeps([10,1,2])),"negotiation-planner":()=>L(()=>import("./negotiation-planner-BWKQPGyy.js"),__vite__mapDeps([11,1,2])),"learning-planner":()=>L(()=>import("./learning-planner-DKLi0Uot.js"),__vite__mapDeps([12,1,2])),"career-decision":()=>L(()=>import("./career-decision-YdQVwn5I.js"),__vite__mapDeps([13,1,2])),"personal-swot":()=>L(()=>import("./personal-swot-C75iucII.js"),__vite__mapDeps([14,1,2])),"credibility-checker":()=>L(()=>import("./credibility-checker-D95BY_y_.js"),__vite__mapDeps([15,1,2])),"problem-canvas":()=>L(()=>import("./problem-canvas-BveAR0v1.js"),__vite__mapDeps([16,1,2])),reflection:()=>L(()=>import("./reflection-BDIAaERQ.js"),__vite__mapDeps([17,1,2])),"scenario-simulator":()=>L(()=>import("./scenario-simulator-YT9cnYqC.js"),__vite__mapDeps([18,1,2])),"pre-mortem":()=>L(()=>import("./pre-mortem-C0xI_jhO.js"),__vite__mapDeps([19,1,2])),"time-audit":()=>L(()=>import("./time-audit-4hz4s73d.js"),__vite__mapDeps([20,1,2])),"email-pressure-test":()=>L(()=>import("./email-pressure-test-Cmosf2i8.js"),__vite__mapDeps([21,1,2])),"money-triage":()=>L(()=>import("./money-triage-vFfya_Dy.js"),__vite__mapDeps([22,1,2]))};async function Cs(e){const t=_s[e];if(!t)throw new Error(`Unknown tool: ${e}`);return(await t()).default}const Ls=[[/deadline|impossible|too much|priorit/i,"priority-matrix"],[/negotiat|salary|pay|rent|contract|price|sale/i,"negotiation-planner"],[/conversation|tell|talk|confront|shout|argu|apolog/i,"conversation-planner"],[/decide|offer|choice|quit|accept/i,"decision-matrix"],[/scam|fraud|hack|deepfake|claim|inform|lied/i,"credibility-checker"],[/risk|danger|threat|intrus|crash|fire|collapse/i,"risk-analyzer"],[/money|debt|income|evict|bank/i,"opportunity-cost"],[/burnout|grief|panic|health|diagnos/i,"reflection"]];function ma(e){const t=`${e.title||""} ${e.lede||""} ${(e.tags||[]).join(" ")} ${e.tool||""}`;for(const[a,s]of Ls)if(a.test(t))return s;return"problem-canvas"}const qs=(e,t)=>(t||[]).filter(a=>ma(a)===e);function A(e){return`<nav class="crumbs" aria-label="Breadcrumb">
    ${e.map((t,a)=>{const s=a===e.length-1,n=r(H(t.label));return s||!t.to?`<span${s?' aria-current="page"':""}>${n}</span>`:`<a href="${h(t.to)}">${n}</a>${c.chev}`}).join("")}
  </nav>`}function E({eyebrow:e,title:t,lede:a,meta:s,actions:n,accent:i}){return`<header class="phead"${i?` data-accent="${i}"`:""}>
    ${e?`<p class="eyebrow">${r(e)}</p>`:""}
    <h1 class="t-hero">${m(t)}</h1>
    ${a?`<p class="t-lede muted" style="max-width:64ch">${m(a)}</p>`:""}
    ${s?`<div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">${s}</div>`:""}
    ${n?`<div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-6)">${n}</div>`:""}
  </header>`}const k=(e,t="")=>`<div class="sec-head"><h2>${m(e)}</h2>${t?`<div class="grow row" style="justify-content:flex-end">${t}</div>`:""}</div>`,xe=(e,t="")=>`<span class="chip">${t}${r(e)}</span>`,Be=e=>{const t=String(e||"").toLowerCase(),a=t?t[0].toUpperCase()+t.slice(1):"Unrated";return`<span class="sev-${t||"low"}">${r(a)}</span>`},ie=(e,t="",a="")=>`
  <div class="state">
    <span class="state-icon">${c.inbox}</span>
    <h3>${r(e)}</h3>
    ${t?`<p>${r(t)}</p>`:""}
    ${a||""}
  </div>`,P=(e,t="",a=!0)=>`
  <div class="state">
    <span class="state-icon">${c.alert}</span>
    <h3>${r(e)}</h3>
    ${t?`<p>${r(t)}</p>`:""}
    <div class="row-wrap" style="gap:var(--s-3);justify-content:center;margin-top:var(--s-5)">
      ${a?'<button class="btn btn-soft" data-reload>Try again</button>':""}
      <a class="btn btn-ghost" href="${h("")}">Go to the start</a>
    </div>
  </div>`,Rs=(e="Loading")=>`
  <div class="stack" aria-busy="true" aria-live="polite">
    <span class="sr">${r(e)}</span>
    <div class="skel skel-line" style="width:38%"></div>
    <div class="skel skel-line" style="width:82%"></div>
    <div class="skel skel-line" style="width:70%"></div>
    <div class="skel" style="height:120px;margin-top:var(--s-4)"></div>
  </div>`;function oe({eyebrow:e="",badge:t="",lead:a="",title:s="",clamp:n=2}={}){const i=e||t?`<div class="card-meta">${e?`<p class="eyebrow">${e}</p>`:""}${t}</div>`:"";return`${a}${i}<h3 class="card-title${n?` clamp-${n}`:""}">${s}</h3>`}function Ie(e,{showTrack:t=!1,n:a=null}={}){const s=N(e.id);return`<a class="card rise" href="${h(`read/${e.track}/${e.id}`)}" data-accent="${e.accent||"forest"}">
    ${oe({lead:a!=null?`<span class="card-n">${a}</span>`:"",eyebrow:t&&e.trackTitle?r(e.trackTitle):"",badge:s?`<span class="badge badge-success" title="Completed">${c.check}</span>`:"",title:m(e.title),clamp:3})}
    ${e.subtitle?`<p class="card-text clamp-2">${r(se(e.subtitle,120))}</p>`:""}
    <div class="card-foot">
      ${e.skill?`<span class="t-meta faint">${r(se(e.skill,40))}</span>`:""}
      <span class="t-meta faint">${he(e.wordCount)} min</span>
    </div>
  </a>`}function pe(e){return`<a class="card card-lead rise" href="${h(`situation/${e.id}`)}" data-accent="${e.accent||"clay"}">
    ${oe({eyebrow:r(e.categoryTitle||""),badge:ye(e.id)?`<span class="badge badge-info" title="Saved">${c.bookmark}</span>`:"",title:m(e.title),clamp:3})}
    ${e.lede?`<p class="card-text clamp-3">${r(se(e.lede,150))}</p>`:""}
    <div class="card-foot">
      ${Be(e.severity)}
      <span class="t-meta faint">${he(e.wordCount)} min</span>
    </div>
  </a>`}function Ye(e,t=null){return`<a class="card rise" href="${h(`skill/${e.id}`)}" data-accent="${e.accent||"forest"}">
    ${oe({eyebrow:r(e.domainTitle||""),badge:e.levelLabel?`<span class="badge badge-neutral">${r(e.levelLabel)}</span>`:"",title:r(e.name)})}
    <p class="card-text clamp-3">${r(se(e.blurb,150))}</p>
    ${t?`<div class="card-foot card-foot-line">
      <span class="t-meta faint">${T(t.units,"lesson")}</span>
      <span class="t-meta faint">${T(t.situations,"situation")}</span>
    </div>`:""}
  </a>`}function ve(e){return`<a class="card rise" href="${h(`tool/${e.id}`)}" data-accent="${e.accent}">
    ${oe({lead:`<span class="res-ic">${c[e.icon]||c.tool}</span>`,eyebrow:r(e.group),title:r(e.name)})}
    <p class="card-text clamp-3">${r(e.blurb)}</p>
  </a>`}const Os=e=>e==null?"":typeof e=="number"?`about ${T(e,"week")}`:r(e);function Et(e,t,a=!1){return`<a class="card rise" href="${h(`path/${e.id}`)}" data-accent="${e.accent}">
    ${oe({lead:`<span class="card-n">${e.number}</span>`,badge:a?'<span class="badge badge-success">Started</span>':"",title:r(e.title)})}
    <p class="card-text clamp-3">${r(se(e.lede,160))}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${Os(e.weeks)}</span>
      <span class="t-meta faint">${T(t.total,"item")}</span>
    </div>
  </a>`}function At(e){return`<a class="card rise" href="${h(`vault/${e.id}`)}" data-accent="council">
    ${oe({eyebrow:r(e.kind||""),title:m(e.title)})}
    ${e.banner?`<p class="card-text clamp-2">${r(se(e.banner,120))}</p>`:""}
    <div class="card-foot">
      <span class="t-meta faint">${T(e.entryCount||(e.entries||[]).length,"entry","entries")}</span>
      <span class="t-meta faint">${he(e.wordCount)} min</span>
    </div>
  </a>`}function Me(e,t=!1){return`<a class="card rise" href="${h(`scenario/${e.id}`)}" data-accent="${e.accent||"clay"}">
    ${oe({eyebrow:r(e.domain),badge:t?`<span class="badge badge-success" title="Answered">${c.check}</span>`:"",title:r(e.title)})}
    <p class="card-text clamp-3">${r(se(H((e.setup||[])[0]||""),150))}</p>
    <div class="card-foot">
      <span class="badge badge-neutral">${r(e.difficulty)}</span>
      <span class="t-meta faint">${T((e.options||[]).length,"option")}</span>
    </div>
  </a>`}function ge(e,t=!1){return`<a class="card rise" href="${h(`tree/${e.id}`)}" data-accent="${e.accent||"atlas"}">
    ${oe({badge:t?`<span class="badge badge-info" title="You have used this">${c.check}</span>`:"",title:r(e.title)})}
    <p class="card-text clamp-3">${r(se(e.blurb,150))}</p>
  </a>`}function va(e,t){return`<a class="card card-pad-lg rise" href="${h(`track/${e.id}`)}" data-accent="${e.accent}">
    ${oe({lead:`<span class="res-ic">${$t(e.icon)}</span>`,title:m(e.name||e.title||""),clamp:0})}
    <!-- A track tagline is a whole sentence ("Eight levels. One
         operating system. A lifetime of use."). It was sitting in the
         eyebrow slot, which is a single-line uppercase label, so it
         was cut to a few words. Sentences belong under the title. -->
    ${e.tagline?`<p class="card-tag">${r(e.tagline)}</p>`:""}
    ${e.description||e.blurb||e.subtitle?`<p class="card-text clamp-3">${r(se(e.description||e.blurb||e.subtitle,170))}</p>`:""}
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${T(t.units||0,"piece")}</span>
      <span class="t-meta faint">${_(t.words||0)} words</span>
    </div>
  </a>`}function Ps(e){const t=/^\s*\*\*([^*]{2,60}?)\s*(?:—|--|-|:)\s*\*\*\s*/.exec(e)||/^\s*\*\*([^*]{2,60}?)\*\*\s*(?:—|--|:)\s*/.exec(e);if(t)return{label:t[1].trim(),body:e.slice(t[0].length)};const a=/^\s*([A-Z][A-Z \u2014\-']{2,40})\s*(?:—|--|:)\s+/.exec(e);return a?{label:a[1].trim(),body:e.slice(a[0].length)}:{label:"Note",body:e}}const Ns=[[/\b(warning|danger|never|do not|don't|risk|trap|mistake|careful|avoid|red flag)\b/i,"danger"],[/\b(caution|watch|note that|remember|careful|limit)\b/i,"warning"],[/\b(idea|principle|key|insight|rule|law|truth)\b/i,"info"],[/\b(do this|try|practice|move|action|win|result)\b/i,"success"]];function ga(e){if(!e||!e.type)return"";switch(e.type){case"p":return`<p>${m(e.text||"")}</p>`;case"h3":return`<h3>${m(e.text||"")}</h3>`;case"ul":return`<ul>${(e.items||[]).map(t=>`<li>${m(t)}</li>`).join("")}</ul>`;case"ol":return`<ol>${(e.items||[]).map(t=>`<li>${m(t)}</li>`).join("")}</ol>`;case"quote":return`<blockquote><p>${m(e.text||"")}</p></blockquote>`;case"code":return`<pre><code>${r(e.text||"")}</code></pre>`;case"table":{const t=e.headers||[],a=e.rows||[];return`<figure><table>
        ${t.length?`<thead><tr>${t.map(s=>`<th>${m(s)}</th>`).join("")}</tr></thead>`:""}
        <tbody>${a.map(s=>`<tr>${(s||[]).map(n=>`<td>${m(n)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></figure>`}case"callout":{const{label:t,body:a}=Ps(e.text||""),s=`${t} ${a}`,n=(Ns.find(([i])=>i.test(s))||[null,""])[1];return`<div class="callout${n?" callout-"+n:""}">
        <span class="lab">${r(t)}</span><p>${m(a)}</p></div>`}case"steps":return`<ol class="moves">${(e.items||[]).map(t=>`<li><b>${m(t.move||"")}</b><span>${m(t.detail||"")}</span></li>`).join("")}</ol>`;case"lines":return`<div class="lines">${(e.items||[]).map(t=>`
        <div class="line">
          <div class="when">${r(t.when||"Say")}</div>
          <div class="say">${m(t.say||"")}</div>
          <button class="btn-icon copy" data-copy="${r(H(t.say||""))}" aria-label="Copy this line" title="Copy">${c.copy}</button>
        </div>`).join("")}</div>`;case"bad":return`<ul class="marklist badlist">${(e.items||[]).map(t=>`<li>${m(t)}</li>`).join("")}</ul>`;case"good":return`<ul class="marklist goodlist">${(e.items||[]).map(t=>`<li>${m(t)}</li>`).join("")}</ul>`;default:return e.text?`<p>${m(e.text)}</p>`:""}}const It=e=>(e||[]).map(ga).join(""),le=e=>`<div class="stats">${e.map(t=>`<div class="stat"><b>${r(String(t.v))}</b><span>${r(t.l)}</span></div>`).join("")}</div>`,W=e=>`<nav class="jump" aria-label="Jump to section">${e.map(t=>`<a role="button" tabindex="0" data-jump="${r(t.id)}">${r(H(t.label))}</a>`).join("")}</nav>`,C=(e,t="Save")=>`
  <button class="btn btn-ghost btn-sm" data-save="${r(e)}" aria-pressed="${ye(e)}">
    ${ye(e)?c.starFill:c.star}<span>${ye(e)?"Saved":r(t)}</span>
  </button>`,ze=e=>`
  <button class="btn btn-ghost btn-sm" data-done="${r(e)}" aria-pressed="${N(e)}">
    ${N(e)?c.circleCheck:c.circle}<span>${N(e)?"Completed":"Mark complete"}</span>
  </button>`,Ws=e=>`<div class="promise">${e.map(t=>`<div><div class="lab">${r(t.lab)}</div><div class="v">${m(t.v)}</div></div>`).join("")}</div>`,be=(e,t)=>`
  <div class="alarm">
    <div class="h">${c.alert}${r(e)}</div>
    <p>${m(t)}</p>
  </div>`,ya=({prev:e,next:t})=>!e&&!t?"":`<nav class="pager" aria-label="Previous and next">
    ${e?`<a href="${h(e.to)}"><span class="dir">Previous</span><span class="ti">${m(e.label)}</span></a>`:"<span></span>"}
    ${t?`<a class="next" href="${h(t.to)}"><span class="dir">Next</span><span class="ti">${m(t.label)}</span></a>`:"<span></span>"}
  </nav>`,x=(e,t=3)=>`<div class="grid g-${t}">${e.join("")}</div>`,X=(e,t)=>`
  <div class="prompt">
    <div class="prompt-h"><span class="t">${r(e)}</span>
      <button class="btn btn-ghost btn-sm" data-copy="${r(t)}">${c.copy}Copy</button></div>
    <pre>${r(t)}</pre>
  </div>`,Ds=[{t:"Specific beats general",d:"Advice that applies to everyone applies to no one. Every page here is about a named situation with named constraints, because that is the only kind of advice you can act on at 9am on a Tuesday."},{t:"Trade-offs beat rules",d:"Almost nothing is universally right. “Always be honest” and “never burn a bridge” collide constantly. What you need is the shape of the trade-off and the cost of each side, not a slogan."},{t:"Actions beat motivation",d:"Motivation is a feeling and it does not survive Wednesday. Every substantial page ends with something to do, in a defined order, small enough to actually start."},{t:"Examples beat abstraction",d:"A principle you cannot picture is a principle you will not use. Where there is a conversation to have, there are words you can borrow."},{t:"Edge cases are the real test",d:"Advice that only works when everyone is reasonable is decoration. What happens when they shout, or lie, or hold the power — that is the part worth writing down."},{t:"You keep the judgement",d:"Not the tools, not the trees, and certainly not an AI model. Every structure here narrows the question and shows you the cost. The decision, and the consequence, stay yours."}],Bs=[["A course","There is no enrolment, no cohort, no certificate and no completion target. Read one page and leave; it still worked."],["A motivation site","Nothing here is designed to make you feel capable. It is designed to make you more capable, which is a slower and less pleasant process."],["A prompt directory","The AI section has prompts in it, but a prompt without the method is a lottery ticket. The method is the product."],["A quiz that flatters you","The scenarios are deliberately difficult and several have no clean answer. The self-assessment is designed to be uncomfortable."],["A gamified app","No points, no streaks, no badges, no levels to grind. Your progress page counts real actions only, and nothing decays if you stop."],["A live AI product","There is no model running here. The AI section teaches you to use whichever assistant you already have, well."]];async function Fs(){let e=null;try{const{manifest:a}=await B();e=te(a).stats()}catch{}return{title:"About",html:`
  <div class="shell band">
    ${A([{label:"About"}])}

    ${E({eyebrow:"About",title:"The Resources by Anik",lede:"A practical system for becoming more capable in the real world — at work, in your career, in difficult conversations, with money, with information, and with AI. Not theory about capability. The specific moves, in the specific situations, with the specific words.",accent:"forest"})}

    ${e?le([{v:_(e.totalUnits),l:"lessons and chapters"},{v:51,l:"situation playbooks"},{v:q.length,l:"working tools"},{v:_(e.totalWords),l:"words"}]):""}

    ${W([{id:"why",label:"Why it exists"},{id:"beliefs",label:"What it believes"},{id:"inside",label:"What is inside"},{id:"notes",label:"What it is not"},{id:"limits",label:"Honest limits"},{id:"privacy",label:"Your data"}])}

    <section class="sec" id="why">
      <div class="sec-head"><h2>Why it exists</h2></div>
      <div class="prose">
        <p class="t-lede">Most of the situations that actually shape a life are ones nobody
        taught you to handle. A manager who shouts. A contract you do not understand. A
        deadline that cannot be met. A relative who wants money. A diagnosis delivered too
        fast to follow. An offer that looks good and is not.</p>

        <p>The advice available for these tends to arrive in two useless forms: motivational,
        which tells you to believe in yourself, or abstract, which tells you about frameworks.
        Neither helps at the moment it matters, because the moment it matters you do not need
        encouragement or a model — you need to know what to say next, and what it will cost.</p>

        <p>This is an attempt at the third form. Every playbook here names what is actually
        happening, what most people get wrong, what to do in what order, the words to borrow,
        and what makes it worse. Every tool computes something real. Every scenario has
        options that are genuinely hard to choose between, because the easy version teaches
        nothing.</p>
      </div>
    </section>

    <section class="sec" id="beliefs">
      <div class="sec-head"><h2>What it believes</h2></div>
      <div class="grid g-2" style="margin-top:var(--s-5)">
        ${Ds.map(a=>`
          <div class="card card-flat">
            <h3 class="card-title">${r(a.t)}</h3>
            <p class="card-text">${r(a.d)}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="sec" id="inside">
      <div class="sec-head"><h2>What is inside</h2></div>
      <div class="stack" style="gap:var(--s-3);margin-top:var(--s-5)">
        ${[["Situations","51 playbooks for things that are happening right now — from a boss shouting to a landlord serving notice to someone collapsing in front of you.","situations",c.compass],["Skills",`${F.length} named capabilities across ${Y.length} areas of life, each one connecting the reading, the playbooks, the tools and the practice that build it.`,"skills",c.target],["The library",e?`${_(e.totalUnits)} lessons and chapters across four tracks, plus ${_(e.totalCollections)} reference collections holding ${_(e.totalEntries)} entries.`:"Four tracks of lessons plus a reference vault.","library",c.book],["The toolkit",`${q.length} tools that genuinely compute — decision matrices, priority grids, risk analysis, negotiation planning. None of them are mock-ups.`,"tools",c.tool],["Practice",`${ee.length} hard scenarios with real consequences and ${O.length} decision trees you walk one question at a time.`,"scenarios",c.puzzle],["Learning paths",`${z.length} ordered routes through everything, so the size of the library never becomes the reason you did nothing.`,"paths",c.route],["AI Intelligence",`The method for using AI without handing over your judgement — the workflow, context engineering, verification, leverage, and ${re.length} real problems worked through.`,"ai",c.cpu]].map(([a,s,n,i])=>`
          <a class="rowitem" href="${h(n)}">
            <span class="res-ic">${i}</span>
            <div style="min-width:0;flex:1">
              <strong>${r(a)}</strong>
              <p class="t-small muted" style="margin:2px 0 0">${r(s)}</p>
            </div>
            <span class="t-meta faint">${c.arrow}</span>
          </a>`).join("")}
      </div>
    </section>

    <section class="sec" id="notes">
      <div class="sec-head"><h2>What it is not</h2></div>
      <p class="t-lede" style="max-width:70ch">Being clear about this saves your time.</p>
      <div class="stack" style="gap:var(--s-4);margin-top:var(--s-5)">
        ${Bs.map(([a,s])=>`
          <div class="card card-flat">
            <div class="row" style="gap:var(--s-3);align-items:baseline">
              <span class="badge badge-warning">Not</span>
              <h3 class="card-title" style="margin:0">${r(a)}</h3>
            </div>
            <p class="card-text" style="margin-top:var(--s-2)">${r(s)}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="sec" id="limits">
      <div class="sec-head"><h2>Honest limits</h2></div>
      <div class="stack" style="gap:var(--s-4)">
        ${be("This is not professional advice","Nothing here is legal, medical, financial or psychological advice, and it cannot be. Several playbooks deal with situations — police questioning, eviction, a diagnosis, someone in danger — where the correct first move is to contact a qualified professional or an emergency service. Each of those pages says so, at the top, before anything else.")}

        <div class="callout callout-info">
          <span class="lab">No AI model runs here</span>
          <p>The AI section is method and prompts. Nothing you type into this site is sent
          anywhere, because there is nowhere for it to go — this is a static site with no
          server behind it. Where a page simulates a rehearsal or an assessment, it says so.</p>
        </div>

        <div class="callout callout-warning">
          <span class="lab">General, not personal</span>
          <p>These pages were written without knowing your situation, your jurisdiction, your
          employer, your family or your finances. That is a real limit. Where local law or a
          specific relationship changes the answer, the page tells you it does rather than
          pretending otherwise.</p>
        </div>

        <div class="callout">
          <span class="lab">Written by one person</span>
          <p>This is one person's synthesis, not a peer-reviewed consensus. Some of it is
          judgement you may disagree with. Where the material takes a position it argues for
          it rather than asserting it, so you can decide whether the reasoning holds.</p>
        </div>
      </div>
    </section>

    <section class="sec" id="privacy">
      <div class="sec-head"><h2>Your data</h2></div>
      <div class="prose">
        <p class="t-lede">There is no account, no sign-in, no analytics, no cookies and no
        server. Everything you do here — what you finished, what you saved, every reflection,
        every tool entry — is stored in your own browser and never leaves this device.</p>

        <p>The practical consequences are worth knowing. Clearing your browser data clears all
        of it. It does not follow you to another device or another browser. If any of it
        matters to you, export a copy from your
        <a href="${h("progress")}">progress page</a> — that gives you a single JSON file
        you can restore anywhere.</p>
      </div>

      <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-6)">
        <a class="btn btn-primary" href="${h("")}">${c.home}Start at the beginning</a>
        <a class="btn btn-soft" href="${h("progress")}">${c.chart}Your progress and data</a>
      </div>
    </section>
  </div>`,accent:"forest"}}async function Hs(e){const t=e&&e.path||"";return{title:"Page not found",html:`
  <div class="shell band">
    ${E({eyebrow:"Nothing at this address",title:"That page does not exist",lede:t?`There is nothing at “${r(t)}”. Either the link was wrong, or something moved. Both are fixable from here.`:"Either the link was wrong, or something moved. Both are fixable from here.",accent:"amber"})}

    ${ie("Try one of these instead","",`<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
        <a class="btn btn-primary" href="${h("")}">${c.home}The start</a>
        <a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>
        <a class="btn btn-soft" href="${h("situations")}">${c.compass}Situations</a>
        <a class="btn btn-ghost" href="${h("library")}">${c.book}The library</a>
      </div>`)}

    <section class="sec">
      ${k("The main entrances")}
      <div style="margin-top:var(--s-4)">
        ${x([["Something is happening now","Every situation playbook, by category.","situations",c.compass],["I want to get better at something",`${F.length} skills across ${Y.length} areas.`,"skills",c.target],["I need to work something out",`${q.length} tools that actually compute.`,"tools",c.tool],["I want a route through it",`${z.length} ordered learning paths.`,"paths",c.route],["I want to use AI properly","The method, not the hype.","ai",c.cpu],["Show me everything","The full library and vault.","library",c.book]].map(([s,n,i,o])=>`
          <a class="card rise" href="${h(i)}">
            <span class="res-ic">${o}</span>
            <h3 class="card-title clamp-2">${r(s)}</h3>
            <p class="card-text">${r(n)}</p>
          </a>`),3)}
      </div>
    </section>
  </div>`,accent:"amber",notFound:!0}}const io=Object.freeze(Object.defineProperty({__proto__:null,default:Fs,notFound:Hs},Symbol.toStringTag,{value:"Module"})),Vs=[{label:"My boss shouted at me",to:"situation/work-boss-shouting"},{label:"Impossible deadline",to:"situation/work-impossible-deadline"},{label:"I have to say no",to:"tree/say-no"},{label:"Two job offers",to:"tree/opportunity"},{label:"Is this information true?",to:"tree/trust-info"},{label:"I was blamed publicly",to:"situation/work-blamed-publicly"},{label:"A hard email to write",to:"ai/problem/p-email-hard"},{label:"Should I quit?",to:"tree/quit"}],Us=[{t:"The four-second gap",d:"The single move that prevents most expensive mistakes.",to:"read/mastery/a-1.1",ic:"clock"},{t:"Say no without damage",d:"A decision tree that ends in a sentence you can send.",to:"tree/say-no",ic:"route"},{t:"Score a real decision",d:"Weight your own criteria and see what is actually driving it.",to:"tool/decision-matrix",ic:"scale"},{t:"Check a claim before repeating it",d:"Eight questions and an honest confidence reading.",to:"tool/credibility-checker",ic:"shield"},{t:"Ask AI properly, once",d:"The context block that changes output more than any prompt trick.",to:"ai/context",ic:"cpu"},{t:"One genuinely hard scenario",d:"No obvious answer. The best option still costs something.",to:"scenario/late-ask",ic:"target"}];async function Ys(){const{manifest:e,situations:t}=await B(),a=te(e),s=a.stats(),n=t.situations||[],i=t.categories||[],o=a.units().map($=>$.id),l=V(o),d=V(n.map($=>$.id)),p=kt(),f=wt(),v=sn(n),u=["staying-steady","priorities","saying-no","verify"].map($=>F.find(M=>M.id===$)).filter(Boolean);return{title:null,html:`
    ${zs(s,n.length)}

    ${Ks()}

    ${Gs(f,p,l,d)}

    <section class="band" id="situations">
      <div class="shell">
        ${k("Start from what is happening",`<a class="btn btn-ghost btn-sm" href="${h("situations")}">All ${n.length} situations${c.arrow}</a>`)}
        <p class="t-lede muted" style="margin-bottom:var(--s-6)">Nine categories, ${n.length} situations, each written as the sequence of moves rather than as advice. Every one names the point where it stops being something you handle alone.</p>
        ${x(v.map(pe),3)}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-6)">
          ${i.map($=>`<a class="chip" href="${h("situations?cat="+$.id)}" data-accent="${$.accent}">${r($.title)}<span class="faint">&nbsp;${n.filter(M=>M.category===$.id).length}</span></a>`).join("")}
        </div>
      </div>
    </section>

    <section class="band band-tight" id="skills">
      <div class="shell">
        ${k("Or from what you want to get better at",`<a class="btn btn-ghost btn-sm" href="${h("skills")}">All ${F.length} skills${c.arrow}</a>`)}
        <p class="t-lede muted" style="margin-bottom:var(--s-6)">A situation is something that happens to you. A skill is something you can get better at. ${Y.length} areas, ${F.length} skills, each with the signals that you need it and the practice that builds it.</p>
        ${x(u.map($=>Ye({...$,domainTitle:(Y.find(M=>M.id===$.domain)||{}).title,accent:(Y.find(M=>M.id===$.domain)||{}).accent,levelLabel:$.level==="foundation"?"Foundation":$.level==="core"?"Core":"Advanced"},{units:($.units||[]).length,situations:($.situations||[]).length})),4)}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-6)">
          ${Y.map($=>`<a class="chip" href="${h("skills/"+$.id)}" data-accent="${$.accent}">${r($.title)}<span class="faint">&nbsp;${Se($.id).length}</span></a>`).join("")}
        </div>
      </div>
    </section>

    ${Zs()}

    ${Js()}

    ${Qs()}

    ${Xs(p)}

    ${en(a,s)}

    ${tn()}

    ${an()}
  `,accent:"forest"}}function zs(e,t){return`
  <section class="hero" data-accent="forest">
    <div class="shell">
      <div class="hero-grid">
        <div>
          <p class="eyebrow">A practical system for capability</p>
          <h1 class="t-display">Most problems are not hard.<br>They are just unfamiliar.</h1>
          <p class="hero-lede t-lede">This is a working library for the situations adult life actually produces —
            the shouting manager, the impossible deadline, the contract you do not understand, the decision with
            no good option. Not motivation. The specific moves, the words to use, and the point at which you
            should stop handling it alone.</p>
          <div class="hero-cta">
            <a class="btn btn-primary btn-lg" href="${h("path/resourceful")}">${c.compass}Start the main path</a>
            <a class="btn btn-lg" href="${h("situations")}">${c.alert}Something is happening now</a>
          </div>
          <div class="stats" style="margin-top:var(--s-8)">
            <div class="stat"><b>${_(e.totalUnits)}</b><span>lessons &amp; chapters</span></div>
            <div class="stat"><b>${t}</b><span>situation playbooks</span></div>
            <div class="stat"><b>${q.length}</b><span>working tools</span></div>
            <div class="stat"><b>${_(e.totalWords)}</b><span>words, all offline</span></div>
          </div>
        </div>

        <aside class="now" data-accent="clay" aria-labelledby="now-h">
          <div class="now-h">${c.alert}<h2 class="t-label" id="now-h" style="color:var(--ac)">If it is happening right now</h2></div>
          <p class="t-small muted">Go straight to the moves. No preamble, no theory — the first thing to do, the
            words to use, and what makes it worse.</p>
          <div class="now-tags">
            ${Vs.map(a=>`<a class="now-tag" href="${h(a.to)}">${r(a.label)}</a>`).join("")}
          </div>
          <div class="hr" style="margin-block:var(--s-5)"></div>
          <a class="btn btn-soft" href="${h("search")}" style="width:100%">${c.search}Describe it in your own words</a>
        </aside>
      </div>
    </div>
  </section>`}function Ks(){return`
  <section class="band-tight" data-accent="council">
    <div class="shell">
      <div class="slab">
        <p class="eyebrow">How this is built</p>
        <h2 class="t-title" style="margin-block:var(--s-3) var(--s-6);max-width:24ch">Resourcefulness is a method, not a personality.</h2>
        <div class="grid g-2">
          ${[{k:"Specific over general",d:'Not "communicate clearly" but the sentence to send at 5:32 p.m. when your manager asks for three hours of work by morning.'},{k:"Trade-offs over rules",d:"Every option here costs something. Where there is a cost, it is named — including for the option we think is best."},{k:"Judgment stays with you",d:"The tools compute, compare and expose what you have actually said. None of them decide. Nothing here will tell you that a hard call is easy."},{k:"Honest limits",d:"Every playbook names the point at which self-help stops and you need a doctor, a lawyer, your bank or emergency services."}].map(t=>`
            <div>
              <h3 class="t-label" style="color:var(--ac)">${r(t.k)}</h3>
              <p class="t-small muted" style="margin-top:6px;line-height:1.65">${r(t.d)}</p>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </section>`}function Gs(e,t,a,s,n){const i=a+s,o=t.length?Fe(t[0]):null;if(!e&&!o&&!i)return"";let l="";if(o){const p=pt(o),f=V(p.map(u=>u.id)),v=p.length?Math.round(f/p.length*100):0;l=`
      <div class="card card-flat" data-accent="${o.accent}">
        <p class="eyebrow">Current path</p>
        <h3 class="card-title" style="margin-block:6px var(--s-3)">${r(o.title)}</h3>
        <div class="meter"><span style="width:${v}%"></span></div>
        <div class="between" style="margin-top:var(--s-3)">
          <span class="t-meta">${f} of ${p.length} done · ${v}%</span>
          <a class="btn btn-ghost btn-sm" href="${h("path/"+o.id)}">Resume${c.arrow}</a>
        </div>
      </div>`}let d="";return e&&(d=`
      <div class="card card-flat" data-accent="atlas">
        <p class="eyebrow">Last opened</p>
        <h3 class="card-title clamp-2" style="margin-block:6px var(--s-3)">${m(e.title||"Untitled")}</h3>
        <a class="btn btn-ghost btn-sm" href="${h(e.route)}">${N(e.id)?"Read again":"Continue reading"}${c.arrow}</a>
      </div>`),`
  <section class="band-tight">
    <div class="shell">
      ${k("Pick up where you were",`<a class="btn btn-ghost btn-sm" href="${h("progress")}">Your progress${c.arrow}</a>`)}
      <div class="grid g-2">
        ${l}
        ${d}
        <div class="card card-flat" data-accent="forest">
          <p class="eyebrow">On this device</p>
          <div class="stats" style="margin-top:var(--s-3)">
            <div class="stat"><b>${i}</b><span>completed</span></div>
            <div class="stat"><b>${la()}</b><span>tools used</span></div>
            <div class="stat"><b>${ca()}</b><span>scenarios</span></div>
            <div class="stat"><b>${b.saved.length}</b><span>saved</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>`}function Zs(){const e=["decision-matrix","priority-matrix","pre-mortem","conversation-planner","email-pressure-test","money-triage","time-audit","credibility-checker"].map(t=>q.find(a=>a.id===t)).filter(Boolean);return`
  <section class="band" id="tools" data-accent="clay">
    <div class="shell">
      ${k("Tools that actually compute",`<a class="btn btn-ghost btn-sm" href="${h("tools")}">All ${q.length} tools${c.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">Not worksheets to print. Each one takes what you enter,
        works something out you could not see by staring at it, and tells you the honest reading — including when the
        answer is "these two options are equivalent and you are avoiding the real question". Everything saves on this device.</p>
      ${x(e.map(ve),4)}
    </div>
  </section>`}function Js(){const e=[{t:"The workflow",d:"Eleven steps from a vague request to a reviewed action you can defend.",to:"ai/workflow",ic:"route"},{t:"Context engineering",d:"The seven-part block that changes output more than any prompt trick.",to:"ai/context",ic:"sliders"},{t:"Verify before you trust",d:"Invented facts, fake sources, confident arithmetic errors — and how each one looks.",to:"ai/verify",ic:"shield"},{t:"Time leverage",d:"Eliminate, simplify, delegate, standardise, assist, automate — in that order.",to:"ai/leverage",ic:"bolt"},{t:"Rehearsal",d:"Nine personas to practise the interview, the raise, the angry customer against.",to:"ai/roleplay",ic:"mic"},{t:"The problem library",d:`${re.length} real problems with the approach and a prompt you can copy.`,to:"ai/library",ic:"inbox"}];return`
  <section class="band" id="ai" data-accent="atlas">
    <div class="shell">
      <div class="slab">
        <div class="between" style="align-items:flex-start;flex-wrap:wrap;gap:var(--s-5)">
          <div style="max-width:52ch">
            <p class="eyebrow">${c.cpu} AI Intelligence Core</p>
            <h2 class="t-title" style="margin-block:var(--s-3)">Use AI like someone who is accountable for the output.</h2>
            <p class="t-lede">The difference between people who get real value from these tools and people who get
              fluent nonsense is method, not prompt tricks. This is the method: how to frame a problem, what context
              to supply, what to verify, what never to paste, when a spreadsheet or a person beats a model, and how to
              keep the judgment that you will have to answer for.</p>
          </div>
          <a class="btn btn-primary" href="${h("ai")}">${c.cpu}Open the AI core</a>
        </div>

        <div class="callout callout-info" style="margin-top:var(--s-6)">
          <span class="lab">Be clear about what this is</span>
          <p>This app configures no AI provider and sends nothing anywhere. Everything here is a method, a
            discipline, or a prompt you copy into whatever assistant you already use. Where something is a
            rehearsal or a simulation, it says so.</p>
        </div>

        <div class="grid g-3" style="margin-top:var(--s-6)">
          ${e.map(t=>`
            <a class="card rise" href="${h(t.to)}">
              <span class="res-ic">${c[t.ic]}</span>
              <h3 class="card-title">${r(t.t)}</h3>
              <p class="card-text clamp-3">${r(t.d)}</p>
            </a>`).join("")}
        </div>

        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-5)">
          ${ue.map(t=>`<a class="chip" href="${h("ai/library?d="+t.id)}">${r(t.title)}</a>`).join("")}
        </div>
      </div>
    </div>
  </section>`}function Qs(){const e=ee.slice(0,3),t=["say-no","quit","trust-info"].map(a=>O.find(s=>s.id===a)).filter(Boolean);return`
  <section class="band" id="practice" data-accent="signal">
    <div class="shell">
      ${k("Practice, where it is safe to be wrong",`<a class="btn btn-ghost btn-sm" href="${h("scenarios")}">All practice${c.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">Reading about judgment does not build it. These are
        deliberately hard: the obvious answer is usually defensible and still wrong, and the best answer costs
        something. Every option comes back with its consequence, its trade-off, the thing you did not see, and how
        an experienced person reasons about it.</p>
      ${x([...e.map(a=>Me(a)),...t.map(a=>ge(a))],3)}
    </div>
  </section>`}function Xs(e){const t=["resourceful","decide-better","difficult","ai-enabled"].map(a=>z.find(s=>s.id===a)).filter(Boolean);return`
  <section class="band" id="paths">
    <div class="shell">
      ${k("Or follow an ordered route",`<a class="btn btn-ghost btn-sm" href="${h("paths")}">All ${z.length} paths${c.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">A path is a real curriculum assembled from material
        that already exists here — lessons, situations, tools, rehearsals and a reflection at every stage. Progress is
        counted from what you have actually completed, never awarded.</p>
      ${x(t.map(a=>Et(a,He(a),e.includes(a.id))),4)}
    </div>
  </section>`}function en(e,t){const a=["a-1.1","a-7.1","d-07","c-01"].map(s=>e.unit(s)).filter(Boolean).map(s=>({...s,trackTitle:(e.track(s.track)||{}).name,accent:(e.track(s.track)||{}).accent}));return`
  <section class="band" id="library" data-accent="council">
    <div class="shell">
      ${k("The long-form library",`<a class="btn btn-ghost btn-sm" href="${h("library")}">Browse everything${c.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">When you want the deep version rather than the fast
        one: four tracks, ${_(t.totalUnits)} pieces, ${t.totalCollections} reference collections and
        ${_(t.totalEntries)} entries. Roughly ${t.estHours} hours of reading, all stored in this page rather than
        fetched from anywhere.</p>
      ${x(a.map(s=>Ie(s,{showTrack:!0})),4)}
    </div>
  </section>`}function tn(){return`
  <section class="band" data-accent="amber">
    <div class="shell">
      ${k("If you have ten minutes")}
      <div class="grid g-3">
        ${Us.map(e=>`
          <a class="card card-flat rise" href="${h(e.to)}">
            <span class="res-ic">${c[e.ic]}</span>
            <h3 class="card-title">${r(e.t)}</h3>
            <p class="card-text clamp-2">${r(e.d)}</p>
          </a>`).join("")}
      </div>
    </div>
  </section>`}function an(){return`
  <section class="band-tight">
    <div class="shell shell-narrow center">
      <p class="eyebrow">Where this stops</p>
      <h2 class="t-section" style="margin-block:var(--s-3) var(--s-4)">This is not a substitute for a professional.</h2>
      <p class="t-small muted" style="line-height:1.7">Nothing here is medical, legal or financial advice, and no
        library can know your circumstances. Every playbook names its own limit — the point at which the correct
        move is to call emergency services, a doctor, a lawyer, or your bank on the number printed on your card.
        Reaching that point is not a failure of resourcefulness. Recognising it <em>is</em> resourcefulness.</p>
      <div class="row-wrap" style="justify-content:center;margin-top:var(--s-6)">
        <a class="btn" href="${h("about")}">${c.question}How this was built</a>
        <a class="btn btn-ghost" href="${h("progress")}">${c.chart}Your data, and how to export it</a>
      </div>
    </div>
  </section>`}function sn(e){const a=["work-boss-shouting","work-impossible-deadline","digital-bank-fraud","people-guilt-tripped","money-contract-pressure","health-someone-suicidal"].map(n=>e.find(i=>i.id===n)).filter(Boolean);if(a.length>=6)return a.slice(0,6);const s=new Set(a.map(n=>n.id));for(const n of e){if(a.length>=6)break;s.has(n.id)||(a.push(n),s.add(n.id))}return a}const oo=Object.freeze(Object.defineProperty({__proto__:null,default:Ys},Symbol.toStringTag,{value:"Module"})),Ht=[{id:"severity",label:"Most serious first"},{id:"az",label:"A to Z"},{id:"short",label:"Shortest first"}],Vt={critical:0,high:1,medium:2,low:3};async function nn(e){const{situations:t}=await B(),a=t.situations||[],s=t.categories||[],n=s.some(y=>y.id===e.query.cat)?e.query.cat:"",i=(e.query.q||"").trim(),o=Ht.some(y=>y.id===e.query.sort)?e.query.sort:"severity",l=n?s.find(y=>y.id===n):null;let d=n?a.filter(y=>y.category===n):a.slice();d=ln(d,o);const p={};for(const y of a)p[y.category]=(p[y.category]||0)+1;const f=a.filter(y=>N(y.id)).length,v=a.filter(y=>ye(y.id)).length,u=`
  <div class="shell">
    ${E({eyebrow:l?l.title:"Situations",title:l?l.title:"Start from what is happening",lede:l?l.blurb:`${a.length} playbooks across ${s.length} categories. Each one is written as the sequence of moves — what is actually going on, what to do in order, the words to borrow, what makes it worse, and the point where it stops being something you handle alone.`,accent:l?l.accent:"clay",meta:`
        <span class="chip">${c.layers}${T(a.length,"playbook")}</span>
        ${f?`<span class="chip chip-ac">${c.check}${f} completed</span>`:""}
        ${v?`<span class="chip">${c.bookmark}${v} saved</span>`:""}`})}

    <div class="band-tight">
      <div class="searchbar" style="max-width:520px;margin-bottom:var(--s-5)">
        ${c.search}
        <input type="search" id="sit-q" data-sit-q value="${r(i)}"
          placeholder="Describe it: shouting, deadline, rent, scam, panic…"
          aria-label="Filter situations" autocomplete="off">
        <button class="btn-icon" data-sit-clear aria-label="Clear filter" hidden>${c.close}</button>
      </div>

      <div class="filters" role="group" aria-label="Filter by category">
        <a class="chip${n?"":" chip-solid"}" href="${h("situations")}">All<span class="faint">&nbsp;${a.length}</span></a>
        ${s.map(y=>`
          <a class="chip${n===y.id?" chip-solid":""}" data-accent="${y.accent}"
             href="${h("situations?cat="+y.id)}">${r(y.title)}<span class="faint">&nbsp;${p[y.id]||0}</span></a>`).join("")}
        <span class="fcount" data-sit-count>${T(d.length,"result")}</span>
      </div>

      <div class="row-wrap" style="gap:var(--s-2);margin-bottom:var(--s-6)">
        <span class="t-meta faint" style="align-self:center">Order</span>
        ${Ht.map(y=>`<a class="chip${o===y.id?" chip-ac":""}"
           href="${h(`situations?${n?"cat="+n+"&":""}sort=${y.id}`)}">${r(y.label)}</a>`).join("")}
      </div>

      <div class="grid g-3" data-sit-grid>
        ${d.map(y=>`<div data-sit="${r(on(y))}">${pe(y)}</div>`).join("")}
      </div>

      <div data-sit-empty hidden>
        ${ie("Nothing matches that wording",'Try one word rather than a sentence — "rent", "shouting", "scam", "panic". Or use full search, which reads the whole library rather than just these titles.',`<a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>`)}
      </div>

      ${l?rn(s,n,p):cn()}
    </div>
  </div>`;return{title:l?l.title:"Situations",html:u,accent:l?l.accent:"clay",mount:y=>dn(y,i)}}const on=e=>`${e.title} ${e.categoryTitle||""} ${(e.tags||[]).join(" ")} ${e.lede||""} ${e.tool||""}`.toLowerCase();function ln(e,t){return t==="az"?e.sort((a,s)=>a.title.localeCompare(s.title)):t==="short"?e.sort((a,s)=>(a.wordCount||0)-(s.wordCount||0)):e.sort((a,s)=>(Vt[a.severity]??9)-(Vt[s.severity]??9)||a.title.localeCompare(s.title))}function rn(e,t,a){return`
  <section class="band-tight" style="margin-top:var(--s-8);border-top:1px solid var(--line);padding-top:var(--s-7)">
    <p class="rail-t">Other categories</p>
    <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-3)">
      ${e.filter(n=>n.id!==t).map(n=>`<a class="chip" data-accent="${n.accent}" href="${h("situations?cat="+n.id)}">${r(n.title)}<span class="faint">&nbsp;${a[n.id]||0}</span></a>`).join("")}
    </div>
  </section>`}function cn(){return`
  <section class="band-tight" style="margin-top:var(--s-8)">
    <div class="slab" data-accent="council">
      <p class="eyebrow">How to read the severity mark</p>
      <div class="grid g-2" style="margin-top:var(--s-4)">
        <div>
          <p class="t-small"><span class="sev-critical">Critical</span> &nbsp;Someone's safety, liberty or life may be
            at stake. The playbook's first move is usually to involve someone with authority or training.</p>
          <p class="t-small" style="margin-top:var(--s-3)"><span class="sev-high">High</span> &nbsp;Significant,
            lasting consequence — money, employment, health, a relationship. Slow decisions beat fast ones.</p>
        </div>
        <div>
          <p class="t-small"><span class="sev-medium">Medium</span> &nbsp;Painful and recoverable. Most of the
            damage here comes from the reaction, not the event.</p>
          <p class="t-small" style="margin-top:var(--s-3)"><span class="sev-low">Low</span> &nbsp;Ordinary friction.
            Worth handling well because it happens often.</p>
        </div>
      </div>
      <div class="callout callout-warning" style="margin-top:var(--s-5)">
        <span class="lab">Every playbook names its limit</span>
        <p>Near the end of each one is the point at which the right move is to stop and call emergency services,
          a doctor, a lawyer, or your bank on the number printed on your card. Reaching that point is not a failure.</p>
      </div>
    </div>
  </section>`}function dn(e,t){const a=e.querySelector("[data-sit-q]"),s=e.querySelector("[data-sit-grid]"),n=e.querySelector("[data-sit-empty]"),i=e.querySelector("[data-sit-count]"),o=e.querySelector("[data-sit-clear]");if(!a||!s)return;const l=[...s.querySelectorAll("[data-sit]")],d=f=>{const v=f.toLowerCase().split(/\s+/).filter(Boolean);let u=0;for(const y of l){const $=y.dataset.sit,M=v.every(D=>$.includes(D));y.hidden=!M,M&&u++}i&&(i.textContent=u===l.length?T(l.length,"result"):`${u} of ${l.length}`),n&&(n.hidden=u>0),s.hidden=u===0,o&&(o.hidden=!f)};t&&d(t);const p=me(()=>d(a.value.trim()),130);a.addEventListener("input",p),a.addEventListener("search",p),o&&o.addEventListener("click",()=>{a.value="",d(""),a.focus()}),a.addEventListener("keydown",f=>{if(f.key!=="Enter")return;const v=a.value.trim();v.length>2&&de(`search?q=${encodeURIComponent(v)}`)})}const lo=Object.freeze(Object.defineProperty({__proto__:null,default:nn},Symbol.toStringTag,{value:"Module"})),fa={p:{t:"The situation",lab:"What is happening",ic:"eye"},ul:{t:"The real problem",lab:"What is actually going on",ic:"brain"},steps:{t:"Do this, in this order",lab:"The moves",ic:"list"},lines:{t:"What to say",lab:"Words you can borrow",ic:"chat"},bad:{t:"What makes it worse",lab:"Common traps",ic:"alert"},good:{t:"Recovery",lab:"Once the pressure drops",ic:"heart"}},hn=["p","ul","steps","lines","bad","good"];async function pn(e){var D;const t=e.params.id;let a,s;try{[a,s]=await Promise.all([ws(t),Tt()])}catch(g){const j=g&&g.status===404;return{title:j?"Not found":"Something went wrong",html:`<div class="band"><div class="shell">${P(j?"That situation is not in this library":"This page did not load",j?"It may have been renamed. Every situation is listed on the situations index.":g.message||"The content file could not be read.",!j)}</div></div>`}}const n=(s.categories||[]).find(g=>g.id===a.category),i=n&&n.accent||"clay",o=(s.situations||[]).filter(g=>g.category===a.category&&g.id!==t).slice(0,3),l={};for(const g of a.sections||[])for(const j of g.blocks||[])(l[D=j.type]||(l[D]=[])).push({b:j,s:g});const d=hn.filter(g=>l[g]),p=Fa(a),f=`drill:${t}`,v=p?(fe(f)||{}).picked:null,u=Ha(t),y=ut(t),$=q.find(g=>g.id===ma(a)),M=`
  <div class="shell">
    ${A([{label:"Situations",to:"situations"},{label:a.categoryTitle||"Category",to:`situations?cat=${a.category}`},{label:a.title}])}

    <div class="reader" data-accent="${i}">
      <article class="reader-main">
        <header class="doc-head">
          <p class="kicker">${r(a.categoryTitle||"")}</p>
          <h1>${m(a.title)}</h1>
          ${a.lede?`<p class="sub">${m(a.lede)}</p>`:""}
          <div class="doc-facts">
            ${Be(a.severity)}
            ${xe(`${he(a.wordCount)} min`,c.clock)}
            ${a.tool?xe(a.tool,c.tool):""}
          </div>
          ${(a.tags||[]).length?`<div class="row-wrap" style="gap:6px;margin-top:var(--s-4)">
            ${a.tags.map(g=>`<a class="chip" href="${h("situations?q="+encodeURIComponent(g))}">${r(g)}</a>`).join("")}
          </div>`:""}
        </header>

        ${p?un(p,v):""}

        <div data-play${p&&!v?" hidden":""}>
        ${W(d.map(g=>({id:g,label:fa[g].t})).concat(a.limit?[{id:"limit",label:"The limit"}]:[]))}

        ${d.filter(g=>g!=="good").map(g=>Ut(g,l[g])).join("")}

        ${a.limit?`
          <section class="sec" id="limit">
            <div class="sec-head"><h2>Where this stops being yours to handle</h2></div>
            ${be("Escalate at this point",a.limit)}
            <p class="t-small muted" style="margin-top:var(--s-4)">Recognising this line is not giving up. It is the
              most resourceful judgment in the whole playbook, and it is the one people most often make too late.</p>
          </section>`:""}

        ${l.good?Ut("good",l.good):""}

        <section class="sec" id="note">
          <div class="sec-head"><h2>What you are going to do</h2></div>
          <p class="t-small muted" style="margin-bottom:var(--s-4)">Write the first move in your own words. Anything you
            have to translate into your own sentence, you have actually understood.</p>
          <div class="field">
            <label for="sitnote">Your first move</label>
            <textarea class="textarea" id="sitnote" data-note="situation:${r(t)}"
              placeholder="The one thing I will do, and when.">${r(K("situation:"+t))}</textarea>
            <span class="hint">Saved on this device as you type.</span>
          </div>
        </section>

        ${o.length?`
          <div class="sec">
            ${k("Nearby situations")}
            ${x(o.map(pe),3)}
          </div>`:""}
        </div>
      </article>

      <aside class="rail">
        <div class="rail-btns">
          ${ze(t)}
          ${C(t)}
          <button class="btn btn-ghost btn-sm" data-print>${c.file}<span>Print this playbook</span></button>
        </div>

        ${$?`
          <div>
            <p class="rail-t">Work it through</p>
            <a class="card card-flat" href="${h("tool/"+$.id)}" data-accent="${$.accent}">
              <span class="res-ic">${c[$.icon]||c.tool}</span>
              <h3 class="card-title">${r($.name)}</h3>
              <p class="card-text clamp-2">${r($.blurb)}</p>
            </a>
          </div>`:""}

        ${u.length?`
          <div>
            <p class="rail-t">The skill behind this</p>
            <nav class="rail-links">
              ${u.slice(0,5).map(g=>`<a class="rail-link" href="${h("skill/"+g.id)}">${c.target}${r(g.name)}</a>`).join("")}
            </nav>
          </div>`:""}

        ${y.length?`
          <div>
            <p class="rail-t">Part of</p>
            <nav class="rail-links">
              ${y.slice(0,4).map(g=>`<a class="rail-link" href="${h("path/"+g.id)}">${c.route}${r(g.title)}</a>`).join("")}
            </nav>
          </div>`:""}

        <div>
          <p class="rail-t">Practise this</p>
          <nav class="rail-links">
            <a class="rail-link" href="${h("scenarios")}">${c.target}Hard scenarios</a>
            <a class="rail-link" href="${h("trees")}">${c.route}Decision tools</a>
            <a class="rail-link" href="${h("ai/roleplay")}">${c.mic}Rehearse it out loud</a>
          </nav>
        </div>
      </aside>
    </div>
  </div>`;return{title:H(a.title),html:M,accent:i,recent:{id:t,kind:"situation",title:a.title,route:`situation/${t}`},mount:g=>mn(g,t,p,f)}}const Oe={best:{label:"Strongest move",cls:"grade-best"},ok:{label:"Defensible, out of order",cls:"grade-ok"},risky:{label:"Risky",cls:"grade-risky"},poor:{label:"Makes it worse",cls:"grade-poor"}};function un(e,t){return`
  <section class="sec drill" id="drill" data-drill>
    <div class="sec-head">
      <h2>Before you read it</h2>
      <span class="t-label faint">Practice first</span>
    </div>
    <p class="t-small muted" style="margin-bottom:var(--s-5)">Recognising the right move under pressure is a different
      skill from agreeing with it afterwards. Commit to what you would <em>actually</em> do — then the playbook opens.</p>

    <div class="drill-q">
      <h3 class="scn-q">${r(e.question)}</h3>
      <div class="opts" role="group" aria-label="Your options" data-drill-opts>
        ${e.options.map(a=>rt(a,t)).join("")}
      </div>
      <div data-drill-verdict>${t?ba(e,t):`
        <p class="t-small faint" style="margin-top:var(--s-5)">${c.eye} Nothing is revealed until you answer. There is no
        penalty for being wrong here — that is the entire point of practising somewhere safe.</p>`}</div>
    </div>
  </section>`}function rt(e,t){const a=!!t;return`
  <button class="opt" type="button" data-dopt="${r(e.key)}"
    data-picked="${t===e.key}" data-revealed="${a}"${a?" disabled":""}>
    <span class="k">${r(e.key)}</span>
    <span class="txt">${m(e.text)}</span>
  </button>`}function ba(e,t){const a=e.options.find(o=>o.key===t);if(!a)return"";const s=Oe[a.grade]||Oe.ok,n=e.options.find(o=>o.grade==="best"),i=a.grade==="best";return`
  <div class="verdict" style="margin-top:var(--s-6)">
    <div class="verdict-row">
      <div class="between" style="flex-wrap:wrap;gap:var(--s-3)">
        <span class="grade ${s.cls}">${i?c.circleCheck:c.alert}${r(s.label)}</span>
        <span class="t-meta faint">You chose ${r(a.key)}</span>
      </div>
    </div>
    <div class="verdict-row"><div class="lab">What happens if you do this</div><p>${m(a.consequence)}</p></div>
    <div class="verdict-row"><div class="lab">Why</div><p>${m(a.why)}</p></div>
  </div>

  ${!i&&n?`
    <div class="callout callout-success" style="margin-top:var(--s-5)">
      <span class="lab">The strongest move was ${r(n.key)}</span>
      <p><strong>${m(n.text)}</strong> — ${m(n.consequence)}</p>
    </div>`:""}

  <details class="acc" style="margin-top:var(--s-5)">
    <summary>Every option, and what each one costs${c.chevDown}</summary>
    <div class="acc-body stack">
      ${e.options.map(o=>{const l=Oe[o.grade]||Oe.ok;return`
        <div class="card card-flat">
          <div class="between" style="gap:var(--s-3);flex-wrap:wrap">
            <span class="grade ${l.cls}">${r(o.key)} · ${r(l.label)}</span>
            ${o.key===t?'<span class="badge badge-info">Your answer</span>':""}
          </div>
          <p class="t-small" style="margin-top:var(--s-3)"><strong>${m(o.text)}</strong></p>
          <p class="t-small muted" style="margin-top:var(--s-2)">${m(o.consequence)}</p>
        </div>`}).join("")}
    </div>
  </details>

  <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
    <button class="btn btn-ghost btn-sm" data-drill-again>${c.reset}Try again</button>
    <a class="btn btn-primary btn-sm" href="#play">${c.book}Read the playbook</a>
  </div>`}function mn(e,t,a,s){const n=o=>{if(o.target.closest("[data-print]")){window.print();return}const l=o.target.closest("[data-dopt]");if(l&&a){i(l.dataset.dopt);return}if(o.target.closest("[data-drill-again]")&&a){const p=e.querySelector("[data-drill-opts]"),f=e.querySelector("[data-drill-verdict]");p&&(p.innerHTML=a.options.map(u=>rt(u,null)).join("")),f&&(f.innerHTML=`<p class="t-small faint" style="margin-top:var(--s-5)">${c.eye} Pick the one you would actually do.</p>`);const v=e.querySelector("[data-dopt]");v&&v.focus();return}if(o.target.closest('a[href="#play"]')){o.preventDefault();const p=e.querySelector("[data-play]");p&&p.scrollIntoView({behavior:"smooth",block:"start"})}};function i(o){const l=e.querySelector("[data-drill-opts]"),d=e.querySelector("[data-drill-verdict]"),p=e.querySelector("[data-play]");l&&(l.innerHTML=a.options.map(f=>rt(f,o)).join("")),d&&(d.innerHTML=ba(a,o)),p&&(p.hidden=!1),ra(s,o)}return e.addEventListener("click",n),()=>e.removeEventListener("click",n)}function Ut(e,t){const a=fa[e];return`
  <section class="sec" id="${e}">
    <div class="sec-head"><h2>${r(a.t)}</h2><span class="t-label faint">${r(a.lab)}</span></div>
    <div class="prose">${t.map(({b:s})=>ga(s)).join("")}</div>
  </section>`}const ro=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"})),vn=["foundation","core","advanced"],Mt=e=>{const t=mt(e.domain)||{};return{...e,domainTitle:t.title,accent:t.accent,levelLabel:(vt[e.level]||{}).label}};async function gn(e){const t=e.params.domain||e.query.d||"",a=t?mt(t):null;if(t&&!a)return{title:"Not found",html:`<div class="band"><div class="shell">${P("No such area",`The ${Y.length} areas are ${Y.map(o=>o.title).join(", ")}.`,!1)}</div></div>`,notFound:!0};const s=a?Se(a.id):F,n=F.reduce((o,l)=>o+V(l.units||[]),0),i=`
  <div class="shell">
    ${a?A([{label:"Skills",to:"skills"},{label:a.title}]):""}
    ${E({eyebrow:a?"Skill area":"Skills",title:a?a.title:"What you want to get better at",lede:a?a.lede:`${F.length} skills across ${Y.length} areas. Each one names the signals that you need it, the material in this library that builds it, and one specific thing to practise this week. No badges, no levels you cannot see the criteria for.`,accent:a?a.accent:"forest",meta:`<span class="chip">${c.target}${T(s.length,"skill")}</span>
             ${n?`<span class="chip chip-ac">${c.check}${n} lessons completed</span>`:""}`})}

    <div class="band-tight">
      <div class="filters" role="group" aria-label="Filter by area">
        <a class="chip${a?"":" chip-solid"}" href="${h("skills")}">All areas<span class="faint">&nbsp;${F.length}</span></a>
        ${Y.map(o=>`<a class="chip${a&&a.id===o.id?" chip-solid":""}"
          data-accent="${o.accent}" href="${h("skills/"+o.id)}">${r(o.title)}<span class="faint">&nbsp;${Se(o.id).length}</span></a>`).join("")}
      </div>

      ${a?fn(s):Y.map(o=>yn(o)).join("")}
    </div>
  </div>`;return{title:a?a.title:"Skills",html:i,accent:a?a.accent:"forest"}}function yn(e){const t=Se(e.id);return`
  <section class="sec" id="${r(e.id)}" data-accent="${e.accent}">
    ${k(e.title,`<a class="btn btn-ghost btn-sm" href="${h("skills/"+e.id)}">Just this area${c.arrow}</a>`)}
    <p class="t-small muted" style="max-width:70ch;margin-bottom:var(--s-5)">${r(e.lede)}</p>
    ${x(t.map(a=>Ye(Mt(a),gt(a))),3)}
  </section>`}function fn(e){return vn.map(t=>{const a=e.filter(n=>n.level===t);if(!a.length)return"";const s=vt[t]||{};return`
    <section class="sec" id="${t}">
      ${k(s.label||t,`<span class="t-small faint">${r(s.d||"")}</span>`)}
      ${x(a.map(n=>Ye(Mt(n),gt(n))),3)}
    </section>`}).join("")}async function bn(e){const t=Va(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${P("That skill is not in this system",`The index lists all ${F.length}.`,!1)}</div></div>`,notFound:!0};const a=mt(t.domain)||{},{manifest:s,situations:n}=await B(),i=te(s),o=new Map((n.situations||[]).map(g=>[g.id,g])),l=(t.units||[]).map(g=>i.unit(g)).filter(Boolean).map(g=>({...g,trackTitle:(i.track(g.track)||{}).name,accent:(i.track(g.track)||{}).accent})),d=(t.situations||[]).map(g=>o.get(g)).filter(Boolean),p=(t.tools||[]).map(g=>q.find(j=>j.id===g)).filter(Boolean),f=(t.trees||[]).map(g=>O.find(j=>j.id===g)).filter(Boolean),v=(t.scenarios||[]).map(g=>ee.find(j=>j.id===g)).filter(Boolean),u=z.filter(g=>g.stages.some(j=>(j.lessons||[]).some(I=>(t.units||[]).includes(I))||(j.situations||[]).some(I=>(t.situations||[]).includes(I)))),y=V(t.units||[]),$=(t.units||[]).length?Math.round(y/t.units.length*100):0,M=[...t.signals?[{id:"signals",label:"Do you need this"}]:[],...l.length?[{id:"learn",label:"Learn it"}]:[],...d.length?[{id:"apply",label:"Use it"}]:[],...p.length||f.length?[{id:"tools",label:"Tools"}]:[],...v.length?[{id:"practise",label:"Practise"}]:[],{id:"this-week",label:"This week"}],D=`
  <div class="shell">
    ${A([{label:"Skills",to:"skills"},{label:a.title||"Area",to:`skills/${t.domain}`},{label:t.name}])}

    ${E({eyebrow:`${a.title||""} · ${(vt[t.level]||{}).label||""}`,title:t.name,lede:t.blurb,accent:a.accent,meta:`
        <span class="chip">${c.book}${T((t.units||[]).length,"lesson")}</span>
        <span class="chip">${c.alert}${T(d.length,"playbook")}</span>
        ${p.length?`<span class="chip">${c.tool}${T(p.length,"tool")}</span>`:""}
        ${$?`<span class="chip chip-ac">${c.check}${$}% read</span>`:""}`,actions:`${C(`skill:${t.id}`,"Save this skill")}
        ${l.length?`<a class="btn btn-primary" href="${h(`read/${l[0].track}/${l[0].id}`)}">${c.play}Start with the first lesson</a>`:""}`})}

    <div class="band-tight">
      ${W(M)}

      <section class="sec" id="why">
        <div class="sec-head"><h2>Why this one matters</h2></div>
        <div class="prose" style="max-width:70ch"><p>${m(t.why)}</p></div>
      </section>

      ${t.signals&&t.signals.length?`
      <section class="sec" id="signals">
        ${k("You probably need this if",'<span class="t-label faint">Honest self-check</span>')}
        <ul class="marklist badlist" style="max-width:70ch">
          ${t.signals.map(g=>`<li>${m(g)}</li>`).join("")}
        </ul>
      </section>`:""}

      ${l.length?`
      <section class="sec" id="learn">
        ${k("Learn it",`<span class="t-small faint">${y} of ${l.length} read</span>`)}
        ${(t.units||[]).length?`<div class="meter" style="margin-bottom:var(--s-5);max-width:340px"><span style="width:${$}%"></span></div>`:""}
        ${x(l.map(g=>Ie(g,{showTrack:!0})),3)}
      </section>`:""}

      ${d.length?`
      <section class="sec" id="apply">
        ${k("Where it gets tested",`<a class="btn btn-ghost btn-sm" href="${h("situations")}">All situations${c.arrow}</a>`)}
        <p class="t-small muted" style="margin-bottom:var(--s-5);max-width:70ch">These are the real situations this skill
          exists for. Read one now rather than when it happens — the whole point is not having to think from scratch.</p>
        ${x(d.map(pe),3)}
      </section>`:""}

      ${p.length||f.length?`
      <section class="sec" id="tools">
        ${k("Somewhere to actually do the thinking")}
        ${x([...p.map(ve),...f.map(g=>ge(g))],3)}
      </section>`:""}

      ${v.length?`
      <section class="sec" id="practise">
        ${k("Practise being wrong first")}
        ${x(v.map(g=>Me(g)),3)}
      </section>`:""}

      <section class="sec" id="this-week" data-accent="${a.accent}">
        ${k("This week")}
        <div class="grid g-2">
          <div class="card card-pad-lg">
            <p class="eyebrow">Practise this</p>
            <div class="prose" style="margin-top:var(--s-3)"><p>${m(t.practice)}</p></div>
            <div style="margin-top:var(--s-5)">${ze(`skill-practice:${t.id}`)}</div>
          </div>
          <div class="stack">
            <div class="callout callout-info">
              <span class="lab">Remember this</span>
              <p>${m(t.remember)}</p>
            </div>
            ${t.aiEdge?`
              <div class="callout">
                <span class="lab">${H("The AI advantage")}</span>
                <p>${m(t.aiEdge)}</p>
              </div>`:""}
          </div>
        </div>

        <div class="field" style="margin-top:var(--s-6);max-width:70ch">
          <label for="skill-note">What happened when you tried it</label>
          <textarea class="textarea" id="skill-note" data-note="skill:${r(t.id)}"
            placeholder="Two lines. What you did, and what you would do differently.">${r(K("skill:"+t.id))}</textarea>
          <span class="hint">Saves as you type, on this device only.</span>
        </div>
      </section>

      ${u.length?`
      <section class="sec" id="paths">
        ${k("Ordered routes that include this")}
        <nav class="rail-links" style="max-width:60ch">
          ${u.map(g=>`<a class="rail-link" href="${h("path/"+g.id)}">${c.route}${r(g.title)}</a>`).join("")}
        </nav>
      </section>`:""}

      ${$n(t)}
    </div>
  </div>`;return{title:t.name,html:D,accent:a.accent,recent:{id:`skill:${t.id}`,kind:"skill",title:t.name,route:`skill/${t.id}`}}}function $n(e){const t=Se(e.domain).filter(a=>a.id!==e.id).slice(0,3);return t.length?`
  <section class="sec" id="next">
    ${k("Next in this area")}
    ${x(t.map(a=>Ye(Mt(a),gt(a))),3)}
  </section>`:""}const co=Object.freeze(Object.defineProperty({__proto__:null,default:gn,skillView:bn},Symbol.toStringTag,{value:"Module"})),$a=["The idea","The hook","The tool","Start","30 seconds","Snapshot","Remember","Takeaways","One-pager","Fast path","Intuition"],wn=[...$a,"The room","Your move","Explained","Practice","Real life","Best move","Mistake","Defense","The hack","Hacks","Mechanics","In reality","Worked example","Examples","5 big ideas","Why it exists","Signals","Reflect"],kn=["Sources","Deep dive","Further reading","Source Discipline"],jt=[{id:"quick",label:"Quick",d:"The idea and the tool. Two minutes."},{id:"practical",label:"Practical",d:"Enough to use it today."},{id:"deeper",label:"Deeper",d:"Everything except the reading list."},{id:"all",label:"Everything",d:"The complete document."}];function Tn(e,t){const a=e.label||"";return t==="quick"?$a.includes(a):t==="practical"?wn.includes(a):t==="deeper"?!kn.includes(a):!0}async function xn(e){const{track:t,id:a}=e.params,s=jt.some(I=>I.id===e.query.lens)?e.query.lens:"all",{manifest:n}=await B(),i=te(n),o=i.unit(a),l=i.track(t)||(o?i.track(o.track):null);if(!o||!l)return{title:"Not in this library",html:`<div class="band"><div class="shell">${P("That piece is not in this library","The link may be from an older version. Everything is reachable from the library index.",!1)}</div></div>`};let d;try{d=await ks(a)}catch(I){return{title:o.title,html:`<div class="band"><div class="shell">${P("This page did not load",I.message||"The content file could not be read.")}</div></div>`}}const p=(d.sections||[]).filter(I=>Tn(I,s)),f=(d.sections||[]).length-p.length,v=i.group(o.track,o.levelId),{prev:u,next:y}=i.neighbours(a),$=Ua(a),M=ut(a),[D,g]=await Promise.all([xs().then(I=>I.filter(G=>G.lessonId===a)).catch(()=>[]),xt().then(I=>I.filter(G=>String(G.id).startsWith(a+"-"))).catch(()=>[])]),j=`
  <div class="shell">
    ${A([{label:"Library",to:"library"},{label:l.short||l.name,to:`track/${l.id}`},...v?[{label:`${v.title}`,to:`track/${l.id}#${v.id}`}]:[],{label:o.title}])}

    <div class="reader" data-accent="${l.accent}">
      <article class="reader-main">
        <header class="doc-head">
          <p class="kicker">${r(l.groupName||"Part")} ${r(String(o.number||o.ref||""))} · ${r(o.group||"")}</p>
          <h1>${m(d.title||o.title)}</h1>
          ${d.subtitle?`<p class="sub">${m(d.subtitle)}</p>`:""}
          <div class="doc-facts">
            ${xe(`${he(d.wordCount||o.wordCount)} min read`,c.clock)}
            ${xe(T((d.sections||[]).length,"section"),c.list)}
            ${xe(l.name,$t(l.icon))}
          </div>
          ${o.skill||o.tool||o.result?Ws([...o.skill?[{lab:"The skill",v:o.skill}]:[],...o.tool?[{lab:"The tool",v:o.tool}]:[],...o.result?[{lab:"The result",v:o.result}]:[]]):""}
          ${o.oneline?`<p class="t-small on-ac" style="margin-top:var(--s-4);font-weight:560">${m(o.oneline)}</p>`:""}
        </header>

        ${Sn(s,f,t,a)}

        ${d.tracks?En(d.tracks):""}

        ${p.length?p.map(An).join(""):`<div class="state"><span class="state-icon">${c.filter}</span>
              <h3>Nothing at this depth</h3>
              <p>This piece has no sections in the ${r(s)} lens. Switch to Everything to read it in full.</p>
              <div class="row" style="justify-content:center;margin-top:var(--s-5)">
                <a class="btn btn-soft" href="${h(`read/${t}/${a}?lens=all`)}">Read everything</a>
              </div></div>`}

        ${In(D,a)}
        ${Mn(g)}

        ${ya({prev:u?{to:`read/${u.track}/${u.id}${s!=="all"?"?lens="+s:""}`,label:u.title}:null,next:y?{to:`read/${y.track}/${y.id}${s!=="all"?"?lens="+s:""}`,label:y.title}:null})}
      </article>

      <aside class="rail">
        <div>
          <p class="rail-t">On this page</p>
          <nav class="rail-links" data-toc>
            ${p.map(I=>`<a class="rail-link" href="#${r(I.id)}">${r(H(I.label||I.title))}</a>`).join("")}
          </nav>
        </div>

        <div class="rail-btns">
          ${ze(a)}
          ${C(a)}
          <button class="btn btn-ghost btn-sm" data-print>${c.file}<span>Print or save PDF</span></button>
        </div>

        <div>
          <p class="rail-t">Reading size</p>
          <div class="row" style="gap:var(--s-2)">
            <button class="btn btn-icon btn-sm" data-scale="-1" aria-label="Smaller text">${c.minus}</button>
            <span class="t-meta t-num grow center" data-scale-val>${Math.round(b.scale*100)}%</span>
            <button class="btn btn-icon btn-sm" data-scale="1" aria-label="Larger text">${c.plus}</button>
          </div>
        </div>

        ${$.length?`
          <div>
            <p class="rail-t">The skill behind this</p>
            <nav class="rail-links">
              ${$.slice(0,5).map(I=>`<a class="rail-link" href="${h("skill/"+I.id)}">${c.target}${r(I.name)}</a>`).join("")}
            </nav>
          </div>`:""}

        ${M.length?`
          <div>
            <p class="rail-t">Part of</p>
            <nav class="rail-links">
              ${M.slice(0,4).map(I=>`<a class="rail-link" href="${h("path/"+I.id)}">${c.route}${r(I.title)}</a>`).join("")}
            </nav>
          </div>`:""}
      </aside>
    </div>
  </div>`;return{title:H(d.title||o.title),html:j,accent:l.accent,recent:{id:a,kind:"lesson",title:d.title||o.title,route:`read/${l.id}/${a}`},mount:jn}}function Sn(e,t,a,s){return`
  <div class="tabs" role="tablist" aria-label="Reading depth" style="margin-bottom:var(--s-6)">
    ${jt.map(n=>`
      <a class="tab" role="tab" aria-selected="${n.id===e}" title="${r(n.d)}"
         href="${h(`read/${a}/${s}${n.id==="all"?"":"?lens="+n.id}`)}">${r(n.label)}</a>`).join("")}
    ${t>0?`<span class="t-meta faint" style="margin-left:auto;align-self:center">${t} section${t===1?"":"s"} hidden</span>`:""}
  </div>`}function En(e){const t=[["If you have 10 minutes",e.fast],["If you have an hour",e.core],["If you want to master it",e.mastery]].filter(([,a])=>a);return t.length?`
  <details class="acc" style="margin-bottom:var(--s-7)">
    <summary>How to take this piece${c.chevDown}</summary>
    <div class="acc-body">
      ${t.map(([a,s])=>`<div class="callout"><span class="lab">${r(a)}</span><p>${m(s)}</p></div>`).join("")}
    </div>
  </details>`:""}function An(e){return`
  <section class="sec" id="${r(e.id)}">
    <div class="sec-head">
      <h2>${m(e.title||e.label||"")}</h2>
      ${e.label&&e.title&&H(e.label)!==H(e.title)?`<span class="t-label faint">${r(e.label)}</span>`:""}
    </div>
    <div class="prose">${It(e.blocks)}</div>
  </section>`}function In(e,t){var s;if(!e.length)return"";const a={};for(const n of e)(a[s=n.label]||(a[s]=[])).push(n);return`
  <section class="sec" id="do-this-now">
    <div class="sec-head"><h2>Do this now</h2><span class="t-label faint">${T(e.length,"action")}</span></div>
    <p class="t-small muted" style="margin-bottom:var(--s-5)">Reading this changes nothing on its own. These are the
      actions the piece is actually for. Tick one — it is stored on this device.</p>
    ${Object.entries(a).map(([n,i])=>`
      <div style="margin-bottom:var(--s-5)">
        <p class="eyebrow" style="margin-bottom:var(--s-3)">${r(n)}</p>
        <div class="stack" style="--flow:var(--s-2)">
          ${i.map(o=>`
            <label class="check${b.done.has(o.id)?" done":""}">
              <input type="checkbox" data-done-box="${r(o.id)}"${b.done.has(o.id)?" checked":""}>
              <span class="check-t">${m(o.excerpt||"")}</span>
            </label>`).join("")}
        </div>
      </div>`).join("")}
    <div class="field" style="margin-top:var(--s-5)">
      <label for="note-${r(t)}">What you actually did, or decided not to do</label>
      <textarea class="textarea" id="note-${r(t)}" data-note="unit:${r(t)}"
        placeholder="One or two lines is enough. This stays on your device and appears in your progress page.">${r(K("unit:"+t))}</textarea>
      <span class="hint">Saves as you type.</span>
    </div>
  </section>`}function Mn(e){return e.length?`
  <section class="sec" id="ai-move">
    <div class="sec-head"><h2>The AI move</h2><span class="t-label faint">${T(e.length,"prompt")}</span></div>
    <p class="t-small muted" style="margin-bottom:var(--s-5)">Copy into whatever assistant you use. Replace anything in
      [square brackets] with your real material — a description of your situation produces a description of an answer.</p>
    ${e.map(t=>`
      <div class="prompt" style="margin-bottom:var(--s-4)">
        <div class="prompt-h">
          <span class="t">${r(t.section||"Prompt")}</span>
          <button class="btn btn-ghost btn-sm" data-copy="${r(t.text||"")}">${c.copy}Copy</button>
        </div>
        <pre>${r(t.text||"")}</pre>
      </div>`).join("")}
    <div class="callout callout-warning">
      <span class="lab">Before you use the output</span>
      <p>Check every number, name, date and source yourself. Confident tone tells you nothing about accuracy.
        <a href="${h("ai/verify")}">How to verify properly</a>.</p>
    </div>
  </section>`:""}function jn(e){e.addEventListener("click",n=>{const i=n.target.closest("[data-scale]");if(i){const o=hs(b.scale+Number(i.dataset.scale)*.05),l=e.querySelector("[data-scale-val]");l&&(l.textContent=Math.round(o*100)+"%");return}n.target.closest("[data-print]")&&window.print()});const t=[...e.querySelectorAll("[data-toc] .rail-link")],a=[...e.querySelectorAll(".sec[id]")];if(!t.length||!a.length||!("IntersectionObserver"in window))return;const s=new IntersectionObserver(n=>{for(const i of n){if(!i.isIntersecting)continue;const o=i.target.id;t.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+o))}},{rootMargin:"-88px 0px -70% 0px"});return a.forEach(n=>s.observe(n)),()=>s.disconnect()}const ho=Object.freeze(Object.defineProperty({__proto__:null,LENSES:jt,default:xn},Symbol.toStringTag,{value:"Module"}));async function _n(){const e=la();return{title:"Toolkit",html:`
  <div class="shell">
    ${E({eyebrow:"The toolkit",title:`${q.length} tools that actually compute`,lede:"Not printable worksheets. Each one takes what you type, works out something you could not see by staring at the problem, and gives you an honest reading — including when the honest reading is that your two options are equivalent and the real question is one you have not written down.",accent:"clay",meta:`<span class="chip">${c.tool}${T(q.length,"tool")}</span>
             <span class="chip">${c.key}Saved on this device</span>
             ${e?`<span class="chip chip-ac">${c.check}${T(e,"tool")} with saved work</span>`:""}`})}

    <div class="band-tight">
      ${W(Ft.map(a=>({id:a.id.toLowerCase(),label:a.id})))}

      <div class="callout callout-info" style="margin-top:var(--s-6);max-width:80ch">
        <span class="lab">How these behave</span>
        <p>Everything you enter stays in this browser. Nothing is uploaded, and there is no account. Each tool
          remembers your work automatically, so you can leave a decision half-thought-through and come back to it.
          Every tool can copy or download its result as plain text if you want it somewhere permanent.</p>
      </div>

      ${Ft.map(a=>{const s=q.filter(n=>n.group===a.id);return`
        <section class="sec" id="${a.id.toLowerCase()}">
          ${k(a.id,`<span class="t-small faint">${r(a.blurb)}</span>`)}
          ${x(s.map(n=>Cn(n)),3)}
        </section>`}).join("")}

      <section class="sec" id="honesty">
        <div class="slab" data-accent="council">
          <p class="eyebrow">What a tool can and cannot do</p>
          <h2 class="t-title" style="margin-block:var(--s-3) var(--s-5);max-width:34ch">A number does not make a decision defensible.</h2>
          <div class="grid g-2">
            <div>
              <h3 class="t-label" style="color:var(--ac)">What they do well</h3>
              <p class="t-small muted" style="margin-top:6px;line-height:1.65">Expose what you have actually said.
                Most people discover their real criteria only after weighting them, and discover their real fear only
                after writing the risk down. That is the value — not the arithmetic.</p>
            </div>
            <div>
              <h3 class="t-label" style="color:var(--ac)">What they cannot do</h3>
              <p class="t-small muted" style="margin-top:6px;line-height:1.65">Score what you did not enter. If a
                result feels wrong, that is information: usually a criterion you care about is missing, or you have
                weighted something at what you think it should be worth rather than what it is worth to you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>`,accent:"clay"}}function Cn(e){const t=$e(e.id)!=null,a=ve(e);return t?a.replace("</a>",`<div class="card-foot card-foot-line"><span class="t-meta" style="color:var(--ac)">${c.check} You have saved work here</span></div></a>`):a}async function Ln(e){const t=ua(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${P("No such tool",`The toolkit has ${q.length}. The index lists all of them by what they decide.`,!1)}</div></div>`,notFound:!0};let a;try{a=await Cs(t.id)}catch{return{title:t.name,html:`<div class="band"><div class="shell">${P("This tool did not load","The tool code could not be fetched. Reload the page — if it keeps happening, your connection dropped mid-download.")}</div></div>`}}const s=Ya(t.id),n=q.filter(v=>v.group===t.group&&v.id!==t.id),i=n.length?[]:(()=>{const v=new Set(s.flatMap(u=>u.tools||[]));return v.delete(t.id),q.filter(u=>v.has(u.id))})(),o=n.length?n:i,l=n.length?`Other ${t.group.toLowerCase()} tools`:"Tools the same skills use";let d=[];try{const{situations:v}=await B();d=qs(t.id,v.situations||[]).slice(0,6)}catch{}const p=[...a.when&&a.when.length?[{id:"when",label:"When to use it"}]:[],{id:"work",label:"The tool"},...d.length?[{id:"situations",label:"Situations"}]:[],...s.length?[{id:"skills",label:"The skill"}]:[],...o.length?[{id:"related",label:"Related tools"}]:[]],f=`
  <div class="shell">
    ${A([{label:"Toolkit",to:"tools"},{label:t.group,to:`tools#${t.group.toLowerCase()}`},{label:t.name}])}

    ${E({eyebrow:`${t.group} tool`,title:a.name||t.name,lede:a.purpose||t.blurb,accent:t.accent,meta:`<span class="chip">${c.tool}${r(t.group)}</span>
             <span class="chip">${c.key}Saves as you type</span>
             ${d.length?`<span class="chip">${c.alert}${T(d.length,"situation")} use this</span>`:""}`,actions:`${C(`tool:${t.id}`,"Save this tool")}
        <a class="btn btn-ghost" href="${h("tools")}">${c.back}All tools</a>`})}

    <div class="band-tight">
      ${p.length>2?W(p):""}

      ${a.when&&a.when.length?`
      <section class="sec" id="when">
        ${k("When to reach for this one",`<span class="t-small faint">${r(t.group)} · ${T(a.when.length,"signal")}</span>`)}
        <div class="grid g-2" style="margin-top:var(--s-4)">
          <ul class="marklist goodlist">
            ${a.when.map(v=>`<li>${m(v)}</li>`).join("")}
          </ul>
          ${a.reads?`<div class="callout callout-warning" id="reading">
            <span class="lab">Reading the result honestly</span><p>${m(a.reads)}</p></div>`:""}
        </div>
      </section>`:""}

      <section class="sec" id="work">
        ${k("Do the work here",'<span class="t-small faint">Stays in this browser</span>')}
        <div data-tool-host>${Rs("Loading the tool")}</div>
      </section>

      ${d.length?`
      <section class="sec" id="situations">
        ${k("Situations that send you here",`<a class="btn btn-ghost btn-sm" href="${h("situations")}">All situations${c.arrow}</a>`)}
        <p class="t-small muted" style="max-width:76ch;margin-bottom:var(--s-4)">Each of these playbooks names
          this tool as the place to do the thinking. Reading the moves first usually tells you what to type in.</p>
        ${x(d.map(pe),3)}
      </section>`:""}

      ${s.length?`
      <section class="sec" id="skills">
        ${k("The skill this belongs to")}
        <p class="t-small muted" style="max-width:76ch;margin-bottom:var(--s-4)">A tool is only the working
          surface. The skill is where the judgment behind it is taught.</p>
        <nav class="rail-links" style="max-width:60ch">
          ${s.map(v=>`<a class="rail-link" href="${h("skill/"+v.id)}">${c.target}${r(v.name)}</a>`).join("")}
        </nav>
      </section>`:""}

      ${o.length?`
      <section class="sec" id="related">
        ${k(l,`<a class="btn btn-ghost btn-sm" href="${h("tools")}">The whole toolkit${c.arrow}</a>`)}
        ${x(o.map(ve),3)}
      </section>`:""}
    </div>
  </div>`;return{title:a.name||t.name,html:f,accent:t.accent,recent:{id:`tool:${t.id}`,kind:"tool",title:t.name,route:`tool/${t.id}`},mount:v=>{const u=v.querySelector("[data-tool-host]");if(u)return u.innerHTML="",qn(a,u)}}}async function qn(e,t){const{mountTool:a}=await L(async()=>{const{mountTool:s}=await import("./kit-B_He1EBw.js");return{mountTool:s}},__vite__mapDeps([1,2]));return a(e,t)}const po=Object.freeze(Object.defineProperty({__proto__:null,default:_n,toolView:Ln},Symbol.toStringTag,{value:"Module"})),Pe={best:{label:"Strongest move",cls:"grade-best"},ok:{label:"Workable",cls:"grade-ok"},risky:{label:"Risky",cls:"grade-risky"},poor:{label:"Weak",cls:"grade-poor"}};async function Rn(){const e=ca();return{title:"Practice",html:`
  <div class="shell">
    ${E({eyebrow:"Practice",title:"What would you do?",lede:"Reading about judgment does not build it. These are written so that the obvious answer is defensible and still wrong — and so the best answer costs you something. Commit to an option before you read anything, then see the consequence, the trade-off, the thing you missed, and how someone experienced reasons about it.",accent:"signal",meta:`<span class="chip">${c.target}${T(ee.length,"scenario")}</span>
             <span class="chip">${c.route}${T(O.length,"decision tree")}</span>
             ${e?`<span class="chip chip-ac">${c.check}${e} answered</span>`:""}`})}

    <div class="band-tight">
      <div class="callout callout-warning" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">How to get anything from these</span>
        <p>Pick before you read. If you scroll to the reasoning first, you will find it obvious and learn nothing —
          hindsight always feels like foresight. Being wrong here is the cheapest place to be wrong.</p>
      </div>

      <section class="sec" id="scenarios">
        ${k("Scenarios",'<span class="t-small faint">One question, four options, no easy answer</span>')}
        ${x(ee.map(a=>Me(a,!!fe(a.id))),3)}
      </section>

      <section class="sec" id="trees">
        ${k("Decision trees",`<a class="btn btn-ghost btn-sm" href="${h("trees")}">All ${O.length}${c.arrow}</a>`)}
        <p class="t-small muted" style="margin-bottom:var(--s-5);max-width:70ch">Where a scenario tests judgment, a tree
          structures it. Four or five honest questions, and it ends in a recommendation, the reasoning, and a sentence
          you can actually send.</p>
        ${x(O.slice(0,6).map(a=>ge(a)),3)}
      </section>
    </div>
  </div>`,accent:"signal"}}async function On(e){const t=Gt(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${P("No such scenario","The practice index lists all of them.",!1)}</div></div>`,notFound:!0};const a=fe(t.id),s=a?a.picked:null,{situations:n}=await B(),i=new Map((n.situations||[]).map(d=>[d.id,d])),o=(t.situations||[]).map(d=>i.get(d)).filter(Boolean),l=`
  <div class="shell">
    ${A([{label:"Practice",to:"scenarios"},{label:t.title}])}

    ${E({eyebrow:`${t.domain} · ${t.difficulty}`,title:t.title,accent:t.accent,meta:`<span class="chip">${c.layers}${T((t.options||[]).length,"option")}</span>
             ${(t.skills||[]).map(d=>`<span class="chip">${r(d)}</span>`).join("")}
             ${s?`<span class="chip chip-ac">${c.check}You answered ${r(s)}</span>`:""}`,actions:C(`scenario:${t.id}`,"Save this scenario")})}

    <div class="band-tight">
      <div class="scn" data-accent="${t.accent}" data-scn="${r(t.id)}">
        <div class="scn-head">
          <p class="eyebrow">The situation</p>
          <div class="scn-setup" style="margin-top:var(--s-3)">
            ${(t.setup||[]).map(d=>`<p>${m(d)}</p>`).join("")}
          </div>
        </div>
        <div class="scn-body">
          <h2 class="scn-q">${r(t.question)}</h2>
          <div class="opts" role="group" aria-label="Your options">
            ${(t.options||[]).map(d=>wa(d,s)).join("")}
          </div>
          <div data-verdict>${s?Ta(t,s):ka()}</div>
        </div>
      </div>

      <div data-after${s?"":" hidden"}>
        ${Pn(t,o)}
      </div>
    </div>
  </div>`;return{title:t.title,html:l,accent:t.accent,recent:{id:`scenario:${t.id}`,kind:"scenario",title:t.title,route:`scenario/${t.id}`},mount:d=>Nn(d,t)}}function wa(e,t){const a=!!t;return`
  <button class="opt" type="button" data-opt="${r(e.key)}"
    data-picked="${t===e.key}" data-revealed="${a}"${a?" disabled":""}>
    <span class="k">${r(e.key)}</span>
    <span class="txt">${m(e.text)}</span>
  </button>`}const ka=()=>`
  <p class="t-small faint" style="margin-top:var(--s-5)">${c.eye} Nothing is revealed until you commit. Pick the one you
  would actually do, not the one that looks correct.</p>`;function Ta(e,t){const a=(e.options||[]).find(i=>i.key===t);if(!a)return"";const s=Pe[a.grade]||Pe.ok,n=(e.options||[]).find(i=>i.grade==="best");return`
  <div class="verdict" style="margin-top:var(--s-6)">
    <div class="verdict-row">
      <div class="between" style="flex-wrap:wrap;gap:var(--s-3)">
        <span class="grade ${s.cls}">${a.grade==="best"?c.circleCheck:c.alert}${r(s.label)}</span>
        <span class="t-meta faint">You chose ${r(a.key)}</span>
      </div>
    </div>
    <div class="verdict-row"><div class="lab">What happens</div><p>${m(a.consequence)}</p></div>
    <div class="verdict-row"><div class="lab">What it costs you</div><p>${m(a.tradeoff)}</p></div>
    <div class="verdict-row"><div class="lab">What you did not see</div><p>${m(a.hidden)}</p></div>
    <div class="verdict-row"><div class="lab">How an experienced person reasons</div><p>${m(a.expert)}</p></div>
  </div>

  ${a.grade!=="best"&&n?`
    <div class="callout callout-success" style="margin-top:var(--s-5)">
      <span class="lab">The strongest option here was ${r(n.key)}</span>
      <p>${m(n.text)} — ${m(n.consequence)}</p>
    </div>`:""}

  <details class="acc" style="margin-top:var(--s-5)">
    <summary>See every option, graded${c.chevDown}</summary>
    <div class="acc-body stack">
      ${(e.options||[]).map(i=>{const o=Pe[i.grade]||Pe.ok;return`
        <div class="card card-flat">
          <div class="between" style="gap:var(--s-3);flex-wrap:wrap">
            <span class="grade ${o.cls}">${r(i.key)} · ${r(o.label)}</span>
            ${i.key===t?'<span class="badge badge-info">Your answer</span>':""}
          </div>
          <p class="t-small" style="margin-top:var(--s-3)">${m(i.text)}</p>
          <p class="t-small muted" style="margin-top:var(--s-3)">${m(i.consequence)}</p>
        </div>`}).join("")}
    </div>
  </details>

  <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
    <button class="btn btn-ghost btn-sm" data-scn-again>${c.reset}Answer again</button>
  </div>`}function Pn(e,t){const a=ee.filter(s=>s.id!==e.id).slice(0,3);return`
  <section class="sec" id="takeaway">
    ${k("What to keep")}
    <div class="grid g-2">
      <div class="callout callout-info"><span class="lab">Remember this</span><p>${m(e.takeaway)}</p></div>
      <div class="callout callout-success"><span class="lab">Do this now</span><p>${m(e.doNow)}</p></div>
    </div>
    ${e.aiEdge?`
      <div class="callout" style="margin-top:var(--s-4)">
        <span class="lab">The AI advantage here</span><p>${m(e.aiEdge)}</p>
      </div>`:""}

    <div class="field" style="margin-top:var(--s-6);max-width:70ch">
      <label for="scn-note">What you would actually do on Monday</label>
      <textarea class="textarea" id="scn-note" data-note="scenario:${r(e.id)}"
        placeholder="The sentence you would send, or the first move you would make.">${r(K("scenario:"+e.id))}</textarea>
      <span class="hint">Saves as you type.</span>
    </div>
  </section>

  ${t.length?`
  <section class="sec" id="real">
    ${k("When this is not a scenario")}
    ${x(t.map(pe),3)}
  </section>`:""}

  <section class="sec" id="next">
    ${k("Another one")}
    ${x(a.map(s=>Me(s,!!fe(s.id))),3)}
  </section>`}function Nn(e,t){const a=e.querySelector("[data-scn]");if(!a)return;const s=n=>{const i=a.querySelector(".opts"),o=a.querySelector("[data-verdict]"),l=e.querySelector("[data-after]");i&&(i.innerHTML=(t.options||[]).map(d=>wa(d,n)).join("")),o&&(o.innerHTML=n?Ta(t,n):ka()),l&&(l.hidden=!n)};e.addEventListener("click",n=>{const i=n.target.closest("[data-opt]");if(i&&!i.disabled){const o=i.dataset.opt;ra(t.id,o),s(o);const l=a.querySelector("[data-verdict]");l&&l.scrollIntoView({block:"nearest",behavior:"smooth"});return}n.target.closest("[data-scn-again]")&&(s(null),a.scrollIntoView({block:"start",behavior:"smooth"}))})}const uo=Object.freeze(Object.defineProperty({__proto__:null,default:Rn,scenarioView:On},Symbol.toStringTag,{value:"Module"})),ct=[{id:"commit",head:"Should I take this on?",note:"Time, money and commitment",ids:["say-yes","opportunity","buy-this","negotiate"]},{id:"push",head:"Should I push back?",note:"Conflict, refusal, leaving",ids:["say-no","escalate","quit","respond-now"]},{id:"trust",head:"Can I trust or hand this over?",note:"Information, AI and automation",ids:["trust-info","use-ai","automate"]}];{const e=new Set(ct.flatMap(s=>s.ids)),t=O.filter(s=>!e.has(s.id)).map(s=>s.id);if(t.length)throw new Error(`TREE_BANDS omits: ${t.join(", ")}`);const a=[...e].filter(s=>!O.some(n=>n.id===s));if(a.length)throw new Error(`TREE_BANDS names unknown trees: ${a.join(", ")}`)}async function Wn(){return{title:"Decision trees",html:`
  <div class="shell">
    ${E({eyebrow:"Decision trees",title:"The decisions that keep coming back",lede:"Not a flowchart for the sake of one. Each of these asks the questions that actually determine the answer — the ones people skip because they are uncomfortable — and ends in a recommendation, the reasoning behind it, and a sentence you can send without rewriting.",accent:"atlas",meta:`<span class="chip">${c.route}${T(O.length,"tree")}</span>
             <span class="chip">${c.check}Your path is kept on this device</span>`})}

    <div class="band-tight">
      <div class="callout callout-info" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">Answer honestly or do not bother</span>
        <p>Every one of these has a question that most people answer aspirationally — "do you have the capacity"
          means hours that already exist, not hours you plan to find by working Sunday. A tree answered optimistically
          returns an optimistic recommendation.</p>
      </div>

      ${W(ct.map(t=>({id:t.id,label:t.head})))}

      ${ct.map(t=>{const a=O.filter(s=>t.ids.includes(s.id));return a.length?`
        <section class="sec" id="${t.id}">
          ${k(t.head,`<span class="t-small faint">${r(t.note)}</span>`)}
          ${x(a.map(s=>{const n=Zt(s),i=!!Ae(s.id);return ge(s,i).replace("</a>",`<div class="card-foot card-foot-line">
                <span class="t-meta faint">${n.questions} questions</span>
                <span class="t-meta faint">${n.outcomes} outcomes</span>
              </div></a>`)}),3)}
        </section>`:""}).join("")}
    </div>
  </div>`,accent:"atlas"}}async function Dn(e){const t=Jt(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${P("No such decision tree",`There are ${O.length}. The index lists them by the decision they resolve.`,!1)}</div></div>`,notFound:!0};const a=Ae(t.id),s=Array.isArray(a&&a.path)?xa(t,a.path):[],n=Zt(t),i=Vn(t),o=`
  <div class="shell">
    ${A([{label:"Decision trees",to:"trees"},{label:t.title}])}

    ${E({eyebrow:"Decision tree",title:t.title,lede:t.blurb,accent:t.accent,meta:`<span class="chip">${c.question}${n.questions} questions</span>
             <span class="chip">${c.flag}${n.outcomes} outcomes</span>
             ${(t.tags||[]).map(l=>`<span class="chip">${r(l)}</span>`).join("")}`,actions:`${C(`tree:${t.id}`,"Save this tree")}
        ${s.length?`<button class="btn btn-ghost" data-tree-reset>${c.reset}Start again</button>`:""}`})}

    <div class="band-tight">
      <div class="tree" data-accent="${t.accent}" data-tree="${r(t.id)}">
        ${Aa(t,s)}
      </div>

      <div data-tree-after${Ea(t,s)?"":" hidden"}>
        ${Fn(t,i)}
      </div>
    </div>
  </div>`;return{title:t.title,html:o,accent:t.accent,recent:{id:`tree:${t.id}`,kind:"tree",title:t.title,route:`tree/${t.id}`},mount:l=>Un(l,t)}}function xa(e,t){const a=[];let s=e.start;for(const n of t){const i=e.nodes[s];if(!i||!i.opts)break;const o=i.opts.find(l=>l.label===n);if(!o||(a.push(n),s=o.to,!e.nodes[s]))break}return a}function Sa(e,t){const a=[];let s=e.start;for(const n of t){const i=e.nodes[s];if(!i||!i.opts)break;const o=i.opts.find(l=>l.label===n);if(!o)break;a.push({id:s,node:i,picked:n}),s=o.to}return{chain:a,current:s,node:e.nodes[s]}}const Ea=(e,t)=>{const{node:a}=Sa(e,t);return a&&a.out?a:null};function Aa(e,t){const{chain:a,node:s}=Sa(e,t),n=[];return a.forEach(({node:i,picked:o},l)=>{n.push(`
      <div class="node past">
        <p class="node-q">${m(i.q)}</p>
        <div class="node-opts">
          ${(i.opts||[]).map(d=>`
            <button class="btn btn-sm${d.label===o?" node-picked":""}" type="button"
              data-step="${l}" data-label="${r(d.label)}"
              ${d.label===o?'aria-current="true"':""}>${r(d.label)}</button>`).join("")}
        </div>
      </div>
      <div class="node-link" aria-hidden="true"></div>`)}),s?s.out?n.push(Bn(s,t)):n.push(`
      <div class="node">
        <p class="node-q">${m(s.q)}</p>
        ${s.note?`<p class="node-note">${m(s.note)}</p>`:""}
        <div class="node-opts">
          ${(s.opts||[]).map(i=>`
            <button class="btn btn-soft btn-sm" type="button" data-pick="${r(i.label)}">${r(i.label)}${c.arrow}</button>`).join("")}
        </div>
      </div>`):n.push(`<div class="node node-out"><p class="node-q">This branch is incomplete.</p>
      <p class="node-note">Start again and the tree will rebuild from the first question.</p>
      <div class="node-opts"><button class="btn btn-soft btn-sm" data-tree-reset>${c.reset}Start again</button></div></div>`),n.join("")}function Bn(e,t){return`
  <div class="node node-out" data-outcome tabindex="-1">
    <p class="eyebrow">The recommendation</p>
    <p class="node-q" style="margin-top:6px">${m(e.out)}</p>
    <div class="verdict" style="margin-top:var(--s-5)">
      <div class="verdict-row"><div class="lab">Why</div><p>${m(e.why)}</p></div>
      ${e.say?`
        <div class="verdict-row">
          <div class="lab">What to say</div>
          <p>${m(e.say)}</p>
          <div class="row" style="margin-top:var(--s-3)">
            <button class="btn btn-ghost btn-sm" data-copy="${r(String(e.say).replace(/[*_`"]/g,""))}">${c.copy}Copy this line</button>
          </div>
        </div>`:""}
      ${e.next?`<div class="verdict-row"><div class="lab">Then do this</div><p>${m(e.next)}</p></div>`:""}
    </div>
    ${t.length?`
      <div style="margin-top:var(--s-5)">
        <p class="rail-t">How you got here</p>
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-3)">
          ${t.map(a=>`<span class="chip chip-ac">${r(a)}</span>`).join(c.chev)}
        </div>
      </div>`:""}
    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
      <button class="btn btn-ghost btn-sm" data-tree-reset>${c.reset}Walk it again</button>
    </div>
  </div>`}function Fn(e,t){const a=O.filter(s=>s.id!==e.id).slice(0,3);return`
  <section class="sec" id="after">
    ${k("Before you act on it")}
    <div class="callout callout-warning" style="max-width:80ch">
      <span class="lab">A tree is a structure, not an authority</span>
      <p>It asked the questions that usually determine this decision. It does not know your circumstances, your
        finances, or the person on the other side. If the recommendation feels wrong, the useful question is which
        answer you gave aspirationally rather than honestly.</p>
    </div>

    <div class="field" style="margin-top:var(--s-6);max-width:70ch">
      <label for="tree-note">What you decided, and why</label>
      <textarea class="textarea" id="tree-note" data-note="tree:${r(e.id)}"
        placeholder="Write it in your own words. If you cannot, you have not decided yet.">${r(K("tree:"+e.id))}</textarea>
      <span class="hint">Saves as you type. This is the paragraph you would defend in a meeting.</span>
    </div>

    ${t?`
      <div style="margin-top:var(--s-7)">
        ${k("Take it further")}
        ${x([ve(t)],3)}
      </div>`:""}

    <div style="margin-top:var(--s-7)">
      ${k("Other decisions")}
      ${x(a.map(s=>ge(s,!!Ae(s.id))),3)}
    </div>
  </section>`}const Hn={"say-yes":"priority-matrix","say-no":"conversation-planner",quit:"career-decision",negotiate:"negotiation-planner",escalate:"risk-analyzer","respond-now":"reflection",opportunity:"decision-matrix","buy-this":"opportunity-cost","trust-info":"credibility-checker","use-ai":"problem-canvas",automate:"task-decomposition"},Vn=e=>q.find(t=>t.id===Hn[e.id])||null;function Un(e,t){const a=e.querySelector("[data-tree]");if(!a)return;let s=(()=>{const i=Ae(t.id);return Array.isArray(i&&i.path)?xa(t,i.path):[]})();const n=(i=!1)=>{a.innerHTML=Aa(t,s);const o=e.querySelector("[data-tree-after]");if(o&&(o.hidden=!Ea(t,s)),!i)return;const l=a.querySelector("[data-outcome]")||a.lastElementChild;l&&l.scrollIntoView&&l.scrollIntoView({block:"center",behavior:"smooth"})};e.addEventListener("click",i=>{const o=i.target.closest("[data-pick]");if(o){s=[...s,o.dataset.pick],et(t.id,s),n(!0);return}const l=i.target.closest("[data-step]");if(l){const d=Number(l.dataset.step);s=[...s.slice(0,d),l.dataset.label],et(t.id,s),n(!0);return}i.target.closest("[data-tree-reset]")&&(s=[],et(t.id,s),n(),a.scrollIntoView({block:"start",behavior:"smooth"}))})}const mo=Object.freeze(Object.defineProperty({__proto__:null,default:Wn,treeView:Dn},Symbol.toStringTag,{value:"Module"})),dt=[{id:"spine",head:"Start here",note:"The one everything else assumes",ids:["resourceful"]},{id:"general",head:"The four general capabilities",note:"Thinking, speaking, working, learning",ids:["think-better","communicate-better","work-better","learn-better"]},{id:"applied",head:"Applied to a specific pressure",note:"Pick by what is actually in front of you",ids:["decide-better","difficult","career-capability","ai-enabled","self-reliant"]}];{const e=new Set(dt.flatMap(s=>s.ids)),t=z.filter(s=>!e.has(s.id)).map(s=>s.id);if(t.length)throw new Error(`PATH_BANDS omits: ${t.join(", ")}`);const a=[...e].filter(s=>!z.some(n=>n.id===s));if(a.length)throw new Error(`PATH_BANDS names unknown paths: ${a.join(", ")}`)}async function Yn(){const e=kt();return{title:"Learning paths",html:`
  <div class="shell">
    ${E({eyebrow:"Learning paths",title:`${z.length} ordered routes through all of this`,lede:"If the library is too large to know where to start — and it is — a path is the answer. Each one has a reason for its order: the things that everything else depends on come first. Six stages on average, each with reading, a real situation, a tool to use, something to rehearse and a question to answer in writing.",accent:"forest",meta:`<span class="chip">${c.route}${T(z.length,"path")}</span>
             ${e.length?`<span class="chip chip-ac">${c.play}${T(e.length,"path")} started</span>`:""}`})}

    <div class="band-tight">
      <div class="callout callout-info" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">If you only take one</span>
        <p><a href="${h("path/resourceful")}">Become More Resourceful</a> is the spine. Steadiness, then
          observation, then the ability to find out anything, then the ability to act on it. Every other path here
          is a specialisation of those four moves.</p>
      </div>

      ${W(dt.map(a=>({id:a.id,label:a.head})))}

      ${dt.map(a=>{const s=z.filter(n=>a.ids.includes(n.id));return s.length?`
        <section class="sec" id="${a.id}">
          ${k(a.head,`<span class="t-small faint">${r(a.note)}</span>`)}
          ${x(s.map(n=>Et(n,He(n),e.includes(n.id))),3)}
        </section>`:""}).join("")}
    </div>
  </div>`,accent:"forest"}}async function zn(e){const t=Fe(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${P("No such path","There are ten. The index lists each with what it is for.",!1)}</div></div>`,notFound:!0};const{manifest:a,situations:s}=await B(),n=te(a),i=new Map((s.situations||[]).map(u=>[u.id,u])),o=pt(t),l=V(o.map(u=>u.id)),d=o.length?Math.round(l/o.length*100):0,p=He(t),f=ot(t.id),v=`
  <div class="shell">
    ${A([{label:"Learning paths",to:"paths"},{label:t.title}])}

    ${E({eyebrow:`Path ${t.number} · about ${t.weeks} weeks`,title:t.title,lede:t.lede,accent:t.accent,meta:`<span class="chip">${c.layers}${T(p.stages,"stage")}</span>
             <span class="chip">${c.book}${T(p.lessons,"lesson")}</span>
             <span class="chip">${c.alert}${T(p.situations,"situation")}</span>
             <span class="chip">${c.tool}${T(p.tools,"tool")}</span>
             ${d?`<span class="chip chip-ac">${c.check}${d}% complete</span>`:""}`,actions:`
        <button class="btn ${f?"btn-soft":"btn-primary"}" data-path-toggle="${r(t.id)}">
          ${f?c.check:c.play}${f?"On your paths — remove":"Add to my paths"}
        </button>
        ${C(`path:${t.id}`,"Save")}
        ${o.length?`<a class="btn btn-ghost" href="${h(Kn(o,n))}">${c.arrow}Go to the next unread item</a>`:""}`})}

    <div class="band-tight">
      <div class="grid g-2" style="margin-bottom:var(--s-7)">
        <div class="card card-pad-lg" data-accent="${t.accent}">
          <p class="eyebrow">What you will be able to do</p>
          <p class="t-lede" style="margin-top:var(--s-3)">${m(t.outcome)}</p>
          <div style="margin-top:var(--s-5)">
            <div class="meter meter-lg"><span style="width:${d}%"></span></div>
            <p class="t-meta" style="margin-top:var(--s-3)">${l} of ${o.length} completable items · ${d}%</p>
          </div>
        </div>
        <div class="card card-pad-lg card-flat">
          <p class="eyebrow">Take this if</p>
          <ul class="marklist goodlist" style="margin-top:var(--s-3)">
            ${(t.forYou||[]).map(u=>`<li>${m(u)}</li>`).join("")}
          </ul>
        </div>
      </div>

      ${W(t.stages.map(u=>({id:`stage-${u.n}`,label:`${u.n}. ${u.title}`})))}

      ${t.stages.map(u=>Gn(u,t,n,i)).join("")}

      <section class="sec" id="finish">
        ${k("When you finish")}
        <div class="callout callout-success" style="max-width:80ch">
          <span class="lab">The honest test</span>
          <p>Not whether you read everything. Whether the next time one of these situations arrives, you know what
            the first move is without having to work it out under pressure. If you do not, the useful thing is to
            re-read the one stage where that happened rather than the whole path.</p>
        </div>
        <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
          <a class="btn" href="${h("progress")}">${c.chart}See everything you have completed</a>
          <a class="btn btn-ghost" href="${h("paths")}">${c.route}Other paths</a>
        </div>
      </section>
    </div>
  </div>`;return{title:t.title,html:v,accent:t.accent,recent:{id:`path:${t.id}`,kind:"path",title:t.title,route:`path/${t.id}`},mount:u=>Zn(u,t)}}function Kn(e,t){const a=e.find(n=>!N(n.id))||e[0];if(!a)return"paths";if(a.kind==="situation")return`situation/${a.id}`;const s=t.unit(a.id);return s?`read/${s.track}/${s.id}`:"library"}function Gn(e,t,a,s){const n=(e.lessons||[]).map(y=>a.unit(y)).filter(Boolean).map(y=>({...y,trackTitle:(a.track(y.track)||{}).name,accent:(a.track(y.track)||{}).accent})),i=(e.situations||[]).map(y=>s.get(y)).filter(Boolean),o=(e.tools||[]).map(y=>q.find($=>$.id===y)).filter(Boolean),l=(e.trees||[]).map(y=>O.find($=>$.id===y)).filter(Boolean),d=(e.scenarios||[]).map(y=>ee.find($=>$.id===y)).filter(Boolean),p=(e.ai||[]).map(y=>za.find($=>$.route===y)).filter(Boolean),f=[...e.lessons||[],...e.situations||[]],v=V(f),u=f.length?Math.round(v/f.length*100):0;return`
  <section class="pb" id="stage-${e.n}" data-accent="${t.accent}">
    <div class="pb-head">
      <span class="pb-n">${e.n}</span>
      <h2>${r(e.title)}</h2>
      ${f.length?`<span class="t-meta faint" style="margin-left:auto">${v}/${f.length}</span>`:""}
    </div>

    <p class="t-small muted" style="max-width:72ch;margin-bottom:var(--s-5)">${m(e.why)}</p>
    ${f.length?`<div class="meter" style="max-width:280px;margin-bottom:var(--s-5)"><span style="width:${u}%"></span></div>`:""}

    ${n.length?`
      <p class="rail-t">Read</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${x(n.map(y=>Ie(y,{showTrack:!0})),3)}</div>`:""}

    ${i.length?`
      <p class="rail-t">Apply it to something real</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${x(i.map(pe),3)}</div>`:""}

    ${o.length||l.length?`
      <p class="rail-t">Use</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${x([...o.map(ve),...l.map(y=>ge(y))],3)}</div>`:""}

    ${d.length?`
      <p class="rail-t">Rehearse</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${x(d.map(y=>Me(y)),3)}</div>`:""}

    ${p.length?`
      <p class="rail-t">The AI move</p>
      <nav class="rail-links" style="margin:var(--s-3) 0 var(--s-5);max-width:60ch">
        ${p.map(y=>`<a class="rail-link" href="${h(y.route)}">${c.cpu}${r(y.title)}</a>`).join("")}
      </nav>`:""}

    ${e.reflect?`
      <div class="field" style="max-width:72ch">
        <label for="reflect-${t.id}-${e.n}">Reflect — ${r(e.title)}</label>
        <p class="t-small muted" style="margin-bottom:6px">${m(e.reflect)}</p>
        <textarea class="textarea" id="reflect-${t.id}-${e.n}"
          data-note="path:${r(t.id)}:${e.n}"
          placeholder="Write it out. A stage you have not written about is a stage you have read, not learned.">${r(K(`path:${t.id}:${e.n}`))}</textarea>
        <span class="hint">Saves as you type. Appears in your progress page.</span>
      </div>`:""}
  </section>`}function Zn(e,t){e.addEventListener("click",a=>{const s=a.target.closest("[data-path-toggle]");if(!s)return;ot(t.id)?ms(t.id):us(t.id);const i=ot(t.id);s.className=`btn ${i?"btn-soft":"btn-primary"}`,s.innerHTML=`${i?c.check:c.play}${i?"On your paths — remove":"Add to my paths"}`})}const vo=Object.freeze(Object.defineProperty({__proto__:null,default:Yn,pathView:zn},Symbol.toStringTag,{value:"Module"}));async function Jn(){let e;try{const{manifest:l}=await B();e=te(l)}catch(l){return{title:"The library",html:`<div class="shell band">${P("The library could not load","The content index did not come back. Nothing you have saved is affected.")}</div>`,error:l}}const t=e.stats(),a=e.tracks(),s=e.collections(),n=e.vaultGroups(),i=wt();return{title:"The library",html:`
  <div class="shell band">
    ${A([{label:"The library"}])}

    ${E({eyebrow:"The library",title:"Everything, arranged so you can find your way in",lede:`Four tracks, ${_(t.totalUnits)} pieces, ${_(t.totalWords)} words, and ${_(t.totalCollections)} reference collections. It is deliberately more than you can read — the point is that whatever you need is in here, and there is always a defined next thing rather than a blank choice.`,accent:"atlas",actions:`
        ${i?`<a class="btn btn-primary btn-lg" href="${h(i.route)}">${c.book}Continue where you stopped</a>`:`<a class="btn btn-primary btn-lg" href="${h("paths")}">${c.route}Follow a path instead</a>`}
        <a class="btn btn-soft btn-lg" href="${h("search")}">${c.search}Search it all</a>
        ${C("page:library","Save")}`})}

    ${le([{v:_(t.totalUnits),l:"pieces to read"},{v:_(t.totalCollections),l:"reference collections"},{v:`${t.estHours}h`,l:"if you read all of it"},{v:_(t.estPages),l:"printed pages"}])}

    <aside class="slab" style="margin:var(--s-7) 0" data-accent="atlas">
      <p class="eyebrow">How to use something this size</p>
      <p class="t-lede">Do not start at the beginning. Either take a
      <a href="${h("paths")}">path</a>, which orders this for you, or arrive from a
      <a href="${h("situations")}">situation</a> you are actually in and read outwards
      from there. Reading a library front to back is how people spend six months and
      change nothing.</p>
    </aside>

    ${W([{id:"tracks",label:"The four tracks"},{id:"levels",label:"Level by level"},{id:"vault",label:"Reference vault"}])}

    <section class="sec" id="tracks">
      <div class="sec-head"><h2>The four tracks</h2></div>
      <p class="t-lede" style="max-width:70ch">Each one has a different job. They are not
      sequential and you are not behind if you skip one.</p>
      <div style="margin-top:var(--s-5)">
        ${x(a.map(l=>va(l,{units:(e.ofTrack(l.id)||[]).length,words:(t.byTrack[l.id]||{}).words||0})),2)}
      </div>
    </section>

    <section class="sec" id="levels">
      <div class="sec-head"><h2>Level by level</h2></div>
      <p class="t-lede" style="max-width:70ch">Every level in every track, with what it
      promises and how much of it you have finished.</p>
      <div class="stack" style="gap:var(--s-7);margin-top:var(--s-6)">
        ${a.map(l=>Qn(l,e)).join("")}
      </div>
    </section>

    <section class="sec" id="vault">
      ${k("The reference vault",`<a class="btn btn-ghost btn-sm" href="${h("vault")}">All ${s.length}${c.arrow}</a>`)}
      <p class="t-lede" style="max-width:70ch">${_(t.totalEntries)} entries across
      ${s.length} collections. This is not reading material — it is what you open
      when you need one specific thing.</p>
      <div class="row-wrap" style="gap:var(--s-2);margin:var(--s-5) 0">
        ${n.map(l=>`<a class="chip" href="${h(`vault?kind=${encodeURIComponent(l.kind)}`)}">${r(l.title)}
          <span class="fcount">${e.collectionsOfKind(l.kind).length}</span></a>`).join("")}
      </div>
      ${x(s.slice(0,6).map(At),3)}
    </section>
  </div>`,accent:"atlas"}}function Qn(e,t){const a=t.groups(e.id)||[],s=t.ofTrack(e.id)||[],n=V(s.map(o=>o.id)),i=s.length?Math.round(n/s.length*100):0;return`
  <section data-accent="${e.accent}">
    <div class="rule-head">
      <div class="row" style="gap:var(--s-3);align-items:center;min-width:0">
        <span class="res-ic">${$t(e.icon)}</span>
        <div style="min-width:0">
          <h3 class="t-subtitle" style="margin:0">${r(e.name)}</h3>
          <p class="t-meta faint" style="margin:2px 0 0">${T(a.length,e.groupName?e.groupName.toLowerCase():"level")} · ${T(s.length,e.unitName||"piece",e.unitPlural)}</p>
        </div>
      </div>
      <a class="btn btn-ghost btn-sm" href="${h(`track/${e.id}`)}">Open${c.arrow}</a>
    </div>

    ${s.length?`<div class="meter" style="max-width:320px;margin:var(--s-3) 0 var(--s-5)">
      <span style="width:${i}%"></span></div>
      <p class="t-meta faint" style="margin-top:-10px;margin-bottom:var(--s-5)">${n} of ${s.length} finished</p>`:""}

    <div class="stack" style="gap:var(--s-3)">
      ${a.map(o=>{const l=t.groupUnits(e.id,o.id)||[],d=V(l.map(p=>p.id));return`
        <a class="rowitem" href="${h(`track/${e.id}#g-${r(o.id)}`)}">
          <div style="min-width:0">
            <p class="eyebrow">${r(e.groupName||"Level")} ${o.roman||o.number}</p>
            <strong>${m(o.title)}</strong>
            ${o.promise?`<p class="t-small muted" style="margin:2px 0 0">${m(o.promise)}</p>`:""}
          </div>
          <span class="t-meta faint">${d}/${l.length}</span>
        </a>`}).join("")}
    </div>
  </section>`}async function Xn(e){let t;try{const{manifest:u}=await B();t=te(u)}catch(u){return{title:"Track",html:`<div class="shell band">${P("This track could not load","The content index did not come back.")}</div>`,error:u}}const a=t.track(e.params.id);if(!a)return{title:"Not found",html:null,notFound:!0};const s=t.groups(a.id)||[],n=t.ofTrack(a.id)||[],i=V(n.map(u=>u.id)),o=n.length?Math.round(i/n.length*100):0,l=t.stats(),d=l.byTrack[a.id]||{},p=n.find(u=>!N(u.id))||null,f=t.tracks().filter(u=>u.id!==a.id),v=`
  <div class="shell band">
    ${A([{label:"The library",to:"library"},{label:a.name}])}

    ${E({eyebrow:a.tagline||"Track",title:a.name,lede:a.description,accent:a.accent,actions:`
        ${p?`<a class="btn btn-primary btn-lg" href="${h(`read/${a.id}/${p.id}`)}">${c.book}${i?"Continue":"Start"} — ${r(p.title)}</a>`:`<span class="badge badge-success">All ${n.length} finished</span>`}
        ${C(`track:${a.id}`,"Save this track")}`})}

    ${le([{v:T(n.length,a.unitName||"piece",a.unitPlural),l:"in total"},{v:`${i}/${n.length}`,l:"finished"},{v:_(d.words||0),l:"words"},{v:T(s.length,a.groupName?a.groupName.toLowerCase():"level"),l:"in sequence"}])}

    ${n.length?`<div class="meter meter-lg" style="max-width:460px;margin:var(--s-5) 0">
      <span style="width:${o}%"></span></div>`:""}

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="tr-q">Find something in this track</label>
      <div class="searchbar">${c.search}
        <input class="input" id="tr-q" type="search" data-tr-q autocomplete="off"
          placeholder="${r(a.unitName||"piece")} title, skill, tool…"></div>
      <span class="hint">Filters the list below. Press Enter to search the whole site.</span>
    </div>

    <p class="t-meta faint" data-tr-count>${T(n.length,a.unitName||"piece",a.unitPlural)}</p>

    ${W(s.map(u=>({id:`g-${u.id}`,label:`${u.roman||u.number}. ${u.title}`})))}

    <div data-tr-list class="stack" style="gap:var(--s-8);margin-top:var(--s-6)">
      ${s.map(u=>ei(u,a,t)).join("")}
    </div>

    <div data-tr-empty hidden>
      ${ie("Nothing in this track matches that","Try a shorter word, or search everything — it may be in another track or in a playbook.",`<a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>`)}
    </div>

    <section class="sec">
      ${k("The other tracks")}
      <div style="margin-top:var(--s-4)">
        ${x(f.map(u=>va(u,{units:(t.ofTrack(u.id)||[]).length,words:(l.byTrack[u.id]||{}).words||0})),3)}
      </div>
    </section>
  </div>`;return{title:a.name,html:v,accent:a.accent,mount:ai,recent:{id:`track:${a.id}`,kind:"page",title:a.name,route:`track/${a.id}`}}}function ei(e,t,a){const s=a.groupUnits(t.id,e.id)||[],n=V(s.map(l=>l.id)),i=s.length?Math.round(n/s.length*100):0,o=s.length?ut(s[0].id):[];return`
  <section class="pb" id="g-${r(e.id)}" data-accent="${t.accent}">
    <div class="pb-head">
      <span class="pb-n">${r(String(e.roman||e.number))}</span>
      <h2>${m(e.title)}</h2>
      <span class="t-meta faint" style="margin-left:auto">${n}/${s.length}</span>
    </div>

    ${e.tagline?`<p class="t-lede" style="max-width:72ch">${m(e.tagline)}</p>`:""}
    ${e.description?`<p class="t-small muted" style="max-width:72ch;margin-top:var(--s-2)">${m(e.description)}</p>`:""}

    <div class="promise" style="margin:var(--s-5) 0">
      ${e.promise?`<div><div class="lab">What you can say afterwards</div><div class="v">${m(e.promise)}</div></div>`:""}
      ${e.boss?`<div><div class="lab">The test at the end</div><div class="v">${m(e.boss)}</div></div>`:""}
      ${e.wordCount?`<div><div class="lab">Length</div><div class="v">${_(e.wordCount)} words · about ${Math.max(1,Math.round(e.wordCount/200/60))}h</div></div>`:""}
    </div>

    ${s.length?`<div class="meter" style="max-width:280px;margin-bottom:var(--s-5)">
      <span style="width:${i}%"></span></div>`:""}

    <div class="grid g-3">
      ${s.map((l,d)=>`<div data-tr-item data-hay="${r(ti(l,t))}">${Ie(l,{n:d+1})}</div>`).join("")}
    </div>

    ${o.length?`<p class="t-meta faint" style="margin-top:var(--s-4)">
      Also part of ${o.slice(0,2).map(l=>`<a href="${h(`path/${l.id}`)}">${r(l.title)}</a>`).join(" and ")}.</p>`:""}
  </section>`}const ti=(e,t)=>`${e.title} ${e.subtitle||""} ${e.skill||""} ${e.tool||""} ${e.result||""} ${e.oneline||""} ${t.name}`.toLowerCase();function ai(e){const t=e.querySelector("[data-tr-q]");if(!t)return;const a=[...e.querySelectorAll("[data-tr-item]")],s=[...e.querySelectorAll('.pb[id^="g-"]')],n=e.querySelector("[data-tr-list]"),i=e.querySelector("[data-tr-empty]"),o=e.querySelector("[data-tr-count]"),l=o?o.textContent:"",p=me(()=>{const v=t.value.trim().toLowerCase();let u=0;for(const y of a){const $=!v||y.dataset.hay.includes(v);y.hidden=!$,$&&u++}for(const y of s)y.hidden=![...y.querySelectorAll("[data-tr-item]")].some($=>!$.hidden);n&&(n.hidden=u===0),i&&(i.hidden=u!==0),o&&(o.textContent=v?`${u} of ${a.length} match “${t.value.trim()}”`:l)},130),f=v=>{v.key==="Enter"&&t.value.trim().length>2&&de(`search?q=${encodeURIComponent(t.value.trim())}`)};return t.addEventListener("input",p),t.addEventListener("keydown",f),()=>{t.removeEventListener("input",p),t.removeEventListener("keydown",f)}}const go=Object.freeze(Object.defineProperty({__proto__:null,default:Jn,trackView:Xn},Symbol.toStringTag,{value:"Module"})),_t=(e,t)=>({title:e,html:`<div class="shell band">${P(e,t)}</div>`});async function si(e){let t;try{const{manifest:d}=await B();t=te(d)}catch(d){return{..._t("The vault could not load","The content index did not come back. Nothing saved is affected."),error:d}}const a=e.query.kind||"",s=t.vaultGroups(),n=s.find(d=>d.kind===a),i=n?t.collectionsOfKind(n.kind):t.collections(),o=t.stats(),l=`
  <div class="shell band">
    ${A([{label:"The library",to:"library"},{label:"Reference vault"}])}

    ${E({eyebrow:n?"Reference vault":"The library",title:n?n.title:"The reference vault",lede:n?n.blurb:`${_(o.totalEntries)} entries in ${_(o.totalCollections)} collections. Playbooks, prompt libraries, scenario decks, situation cards, thinkers worth reading and every named concept defined. Not reading material — reference.`,accent:"council",meta:[T(i.length,"collection")],actions:C(n?`vault-kind:${n.kind}`:"page:vault","Save")})}

    <div class="filters" role="group" aria-label="Filter by kind">
      <a class="chip ${n?"":"chip-solid"}" href="${h("vault")}">Everything
        <span class="fcount">${t.collections().length}</span></a>
      ${s.map(d=>`
        <a class="chip ${n&&n.kind===d.kind?"chip-solid":""}"
           href="${h(`vault?kind=${encodeURIComponent(d.kind)}`)}">${r(d.title)}
          <span class="fcount">${t.collectionsOfKind(d.kind).length}</span></a>`).join("")}
    </div>

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="v-q">Find a collection</label>
      <div class="searchbar">${c.search}
        <input class="input" id="v-q" type="search" data-v-q autocomplete="off"
          placeholder="negotiation, prompts, glossary…"></div>
      <span class="hint">Press Enter to search inside every entry instead.</span>
    </div>

    <p class="t-meta faint" data-v-count>${T(i.length,"collection")}</p>

    <div class="grid g-3" data-v-grid style="margin-top:var(--s-4)">
      ${i.map(d=>`<div data-v-item data-hay="${r(`${d.title} ${d.kind} ${d.banner||""} ${(d.entries||[]).map(p=>p.title).join(" ")}`.toLowerCase())}">${At(d)}</div>`).join("")}
    </div>

    <div data-v-empty hidden>
      ${ie("No collection matches that","Entry titles are searchable from the main search, which looks inside the collections rather than at their names.",`<a class="btn btn-soft" href="${h("search")}">${c.search}Search every entry</a>`)}
    </div>

    ${n?`
      <section class="sec">
        ${k("Other kinds")}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
          ${s.filter(d=>d.kind!==n.kind).map(d=>`<a class="chip" href="${h(`vault?kind=${encodeURIComponent(d.kind)}`)}">${r(d.title)}</a>`).join("")}
        </div>
      </section>`:""}
  </div>`;return{title:n?`${n.title} · Vault`:"The reference vault",html:l,accent:"council",mount:ni}}function ni(e){const t=e.querySelector("[data-v-q]");if(!t)return;const a=[...e.querySelectorAll("[data-v-item]")],s=e.querySelector("[data-v-grid]"),n=e.querySelector("[data-v-empty]"),i=e.querySelector("[data-v-count]"),l=me(()=>{const p=t.value.trim().toLowerCase();let f=0;for(const v of a){const u=!p||v.dataset.hay.includes(p);v.hidden=!u,u&&f++}s&&(s.hidden=f===0),n&&(n.hidden=f!==0),i&&(i.textContent=p?`${f} of ${a.length} match “${t.value.trim()}”`:T(a.length,"collection"))},130),d=p=>{p.key==="Enter"&&t.value.trim().length>2&&de(`search?q=${encodeURIComponent(t.value.trim())}`)};return t.addEventListener("input",l),t.addEventListener("keydown",d),()=>{t.removeEventListener("input",l),t.removeEventListener("keydown",d)}}async function ii(e){const t=e.params.id;let a,s;try{const[{manifest:v},u]=await Promise.all([B(),da(t)]);s=te(v),a=u}catch(v){return v&&v.status===404?{title:"Not found",html:null,notFound:!0}:{..._t("This collection could not load","The file did not come back. Try again — nothing saved is affected."),error:v}}if(!a)return{title:"Not found",html:null,notFound:!0};const n=s.collection(t)||{},i=s.vaultGroups().find(v=>v.kind===(a.kind||n.kind)),o=a.entries||[],l=s.collectionsOfKind(a.kind||n.kind).filter(v=>v.id!==t).slice(0,3),d=new Map;for(const v of o){const u=(n.entries||[]).find($=>$.id===v.id),y=u&&u.group||"";d.has(y)||d.set(y,[]),d.get(y).push(v)}const p=d.size>1||d.size===1&&[...d.keys()][0],f=`
  <div class="shell band">
    ${A([{label:"The library",to:"library"},{label:"Vault",to:"vault"},...i?[{label:i.title,to:`vault?kind=${encodeURIComponent(i.kind)}`}]:[],{label:a.title}])}

    ${E({eyebrow:i?i.title:a.kind||"Collection",title:a.title,lede:a.banner||n.banner||"",accent:"council",meta:[T(o.length,"entry","entries"),`${_(a.wordCount||n.wordCount||0)} words`],actions:`
        ${o.length?`<a class="btn btn-primary" href="${h(`vault/${t}/${o[0].id}`)}">${c.book}Open the first entry</a>`:""}
        ${C(`vault:${t}`,"Save this collection")}`})}

    ${(a.lead||[]).length?`<div class="prose" style="margin:var(--s-6) 0">${It(a.lead)}</div>`:""}

    ${le([{v:o.length,l:"entries"},{v:_(a.wordCount||0),l:"words"},{v:`${he(a.wordCount||0)} min`,l:"to read all of it"}])}

    <div class="field" style="max-width:520px;margin:var(--s-6) 0">
      <label for="c-q">Find an entry</label>
      <div class="searchbar">${c.search}
        <input class="input" id="c-q" type="search" data-c-q autocomplete="off" placeholder="Entry title or a phrase inside it…"></div>
      <span class="hint">Searches the titles and the text of every entry in this collection.</span>
    </div>

    <p class="t-meta faint" data-c-count>${T(o.length,"entry","entries")}</p>

    <div data-c-list class="stack" style="gap:var(--s-6);margin-top:var(--s-5)">
      ${p?[...d.entries()].map(([v,u])=>`
            <section data-c-group>
              ${v?`<div class="rule-head"><h2 class="t-subtitle" style="margin:0">${m(v)}</h2>
                <span class="t-meta faint">${T(u.length,"entry","entries")}</span></div>`:""}
              <div class="stack" style="gap:var(--s-2);margin-top:var(--s-3)">
                ${u.map(y=>Yt(y,t)).join("")}
              </div>
            </section>`).join(""):`<div class="stack" style="gap:var(--s-2)">${o.map(v=>Yt(v,t)).join("")}</div>`}
    </div>

    <div data-c-empty hidden>
      ${ie("No entry here matches that","Try fewer words, or search the whole site.",`<a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>`)}
    </div>

    ${l.length?`
      <section class="sec">
        ${k(i?`More ${i.title.toLowerCase()}`:"Related collections",`<a class="btn btn-ghost btn-sm" href="${h("vault")}">All${c.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${x(l.map(At),3)}</div>
      </section>`:""}
  </div>`;return{title:a.title,html:f,accent:"council",mount:oi,recent:{id:`vault:${t}`,kind:"collection",title:a.title,route:`vault/${t}`}}}function Yt(e,t){const a=(e.blocks||[]).map(s=>s.text||"").join(" ");return`
  <a class="rowitem" data-c-item data-hay="${r(`${e.title} ${a}`.slice(0,900).toLowerCase())}"
     href="${h(`vault/${t}/${e.id}`)}">
    <div style="min-width:0">
      <strong>${m(e.title)}</strong>
      ${a?`<p class="t-small muted clamp-2" style="margin:2px 0 0">${r(a.slice(0,180))}</p>`:""}
    </div>
    <span class="t-meta faint">${he(e.wordCount||0)} min</span>
  </a>`}function oi(e){const t=e.querySelector("[data-c-q]");if(!t)return;const a=[...e.querySelectorAll("[data-c-item]")],s=[...e.querySelectorAll("[data-c-group]")],n=e.querySelector("[data-c-list]"),i=e.querySelector("[data-c-empty]"),o=e.querySelector("[data-c-count]"),d=me(()=>{const f=t.value.trim().toLowerCase();let v=0;for(const u of a){const y=!f||u.dataset.hay.includes(f);u.hidden=!y,y&&v++}for(const u of s)u.hidden=![...u.querySelectorAll("[data-c-item]")].some(y=>!y.hidden);n&&(n.hidden=v===0),i&&(i.hidden=v!==0),o&&(o.textContent=f?`${v} of ${a.length} match “${t.value.trim()}”`:T(a.length,"entry","entries"))},130),p=f=>{f.key==="Enter"&&t.value.trim().length>2&&de(`search?q=${encodeURIComponent(t.value.trim())}`)};return t.addEventListener("input",d),t.addEventListener("keydown",p),()=>{t.removeEventListener("input",d),t.removeEventListener("keydown",p)}}async function li(e){const t=e.params.coll,a=e.params.entry;let s;try{s=await da(t)}catch(u){return u&&u.status===404?{title:"Not found",html:null,notFound:!0}:{..._t("This entry could not load","The collection file did not come back."),error:u}}if(!s)return{title:"Not found",html:null,notFound:!0};const n=s.entries||[],i=n.findIndex(u=>u.id===a);if(i<0)return{title:"Not found",html:null,notFound:!0};const o=n[i],l=n[i-1]||null,d=n[i+1]||null,p=`entry:${t}#${a}`,f=`entry:${t}#${a}`,v=`
  <div class="shell-narrow band">
    ${A([{label:"Vault",to:"vault"},{label:s.title,to:`vault/${t}`},{label:o.title}])}

    <header class="doc-head">
      <p class="kicker">${m(s.title)}</p>
      <h1>${m(o.title)}</h1>
      <div class="doc-facts">
        <span>${he(o.wordCount||0)} min read</span>
        <span>${_(o.wordCount||0)} words</span>
        <span>Entry ${i+1} of ${n.length}</span>
      </div>
      <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
        ${C(`entry:${t}#${a}`)}
        ${ze(f)}
      </div>
    </header>

    <div class="prose">${(o.blocks||[]).length?It(o.blocks):`
      <p class="muted">This entry has no body text in the corpus. That is a gap in the
      source material rather than a loading error.</p>`}</div>

    <section class="sec">
      <div class="field">
        <label for="en-note">Your note on this</label>
        <textarea class="textarea" id="en-note" data-note="${r(p)}" rows="3"
          placeholder="What you would actually do with this.">${r(K(p))}</textarea>
        <span class="hint">Saves as you type. Appears on your progress page.</span>
      </div>
    </section>

    ${ya({prev:l?{to:`vault/${t}/${l.id}`,label:l.title}:null,next:d?{to:`vault/${t}/${d.id}`,label:d.title}:null})}

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-6)">
      <a class="btn btn-soft" href="${h(`vault/${t}`)}">${c.back}All ${n.length} entries in ${r(s.title)}</a>
      <a class="btn btn-ghost" href="${h("vault")}">${c.vault}The whole vault</a>
    </div>
  </div>`;return{title:o.title,html:v,accent:"council",recent:{id:`entry:${t}#${a}`,kind:"entry",title:o.title,route:`vault/${t}/${a}`}}}const yo=Object.freeze(Object.defineProperty({__proto__:null,collectionView:ii,default:si,entryView:li},Symbol.toStringTag,{value:"Module"})),Ct="AI Intelligence",Ia=e=>`
  <aside class="slab" data-accent="signal" style="margin:var(--s-6) 0">
    <p class="eyebrow">The rule that governs this page</p>
    <p class="t-lede">${m(e)}</p>
  </aside>`,Ke=(e,t,a,s)=>`
  <div class="field" style="max-width:72ch">
    <label for="n-${r(e.replace(/[^a-z0-9]+/gi,"-"))}">${r(t)}</label>
    ${a?`<p class="t-small muted" style="margin-bottom:6px">${m(a)}</p>`:""}
    <textarea class="textarea" id="n-${r(e.replace(/[^a-z0-9]+/gi,"-"))}"
      data-note="${r(e)}" placeholder="${r(s||"")}">${r(K(e))}</textarea>
    <span class="hint">Saves as you type. Stays on this device.</span>
  </div>`,Ma=e=>`
  <a class="card rise" href="${h(e.route)}" data-accent="signal">
    <span class="res-ic">${c.cpu}</span>
    <h3 class="card-title clamp-2">${r(e.title)}</h3>
    <p class="card-text clamp-3">${r(e.sub)}</p>
  </a>`,Ge=e=>{const t=ue.find(a=>a.id===e.domain)||{};return`<a class="card rise" href="${h(`ai/problem/${e.id}`)}" data-accent="${t.accent||"signal"}">
    <div class="card-meta"><p class="eyebrow">${r(t.title||"AI")}</p></div>
    <!-- Problem titles are whole sentences ("I need to do something in
         a spreadsheet and do not know how"), so two lines cuts them. -->
    <h3 class="card-title clamp-3">${r(e.title)}</h3>
    <p class="card-text clamp-3">${r(e.hard)}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${T((e.approach||[]).length,"step")}</span>
      <span class="t-meta faint">Prompt included</span>
    </div>
  </a>`},Lt=e=>`
  <a class="card rise" href="${h(`ai/office/${e.id}`)}" data-accent="${e.accent}">
    <span class="res-ic">${c[e.icon]||c.inbox}</span>
    <h3 class="card-title">AI for ${r(e.title)}</h3>
    <p class="card-text clamp-3">${r(e.lede)}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${T(e.moves.length,"move")}</span>
      <span class="t-meta faint">${T((e.problems||[]).length,"worked problem")}</span>
    </div>
  </a>`,we=()=>`
  <aside class="callout callout-info" style="margin-top:var(--s-8)">
    <span class="lab">How this section works</span>
    <p>There is no AI model running inside this site, and nothing you type here is
    sent anywhere. This is method, structure and prompts you copy into whichever
    assistant you already use. Everything is written to be true regardless of
    which model you pick, or how much better they get.</p>
  </aside>`;async function ri(){const e=yt;return{title:"AI Intelligence",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence"}])}

    ${E({eyebrow:Ct,title:"Using AI without handing over your judgement",lede:"Most people use AI as a faster search box and get search-box results. The difference between that and real capability is not a secret prompt — it is method: define the problem, supply the context, decompose the work, verify the output, and keep the decision.",accent:"signal",actions:`
        <a class="btn btn-primary btn-lg" href="${h("ai/workflow")}">${c.route}Start with the workflow</a>
        <a class="btn btn-soft btn-lg" href="${h("ai/library")}">${c.search}I have a specific problem</a>
        ${C("ai:hub","Save this section")}`})}

    ${le([{v:ea.length,l:"workflow steps"},{v:re.length,l:"real problems"},{v:Z.length,l:"battle tests"},{v:at.length,l:"rehearsal partners"}])}

    ${Ia("AI supports judgement. It does not replace responsibility. If you cannot explain a decision without mentioning a model, you have not made the decision — you have accepted one.")}

    ${W([{id:"start",label:"Where to start"},{id:"method",label:"The method"},{id:"problems",label:"Your problem"},{id:"office",label:"At work"},{id:"practise",label:"Practise"},{id:"judge",label:"Judge your own use"}])}

    <section class="sec" id="start">
      <div class="sec-head"><h2>Where to start</h2></div>
      <p class="t-lede" style="max-width:68ch">Three honest entry points, depending on what you actually want right now.</p>
      ${x([`<a class="card card-pad-lg rise" href="${h("ai/library")}" data-accent="clay">
          <span class="res-ic" style="margin-bottom:var(--s-3)">${c.inbox}</span>
          <h3 class="card-title">I have a problem today</h3>
          <p class="card-text">Search ${re.length} real problems — a dreaded email, a CV that gets no replies, a contract you do not understand. Each one gives you the approach and the prompt.</p>
        </a>`,`<a class="card card-pad-lg rise" href="${h("ai/workflow")}" data-accent="forest">
          <span class="res-ic" style="margin-bottom:var(--s-3)">${c.route}</span>
          <h3 class="card-title">I want to get properly good</h3>
          <p class="card-text">The eleven-step workflow, then context engineering, then verification. This is the sequence that separates competent use from guessing.</p>
        </a>`,`<a class="card card-pad-lg rise" href="${h("ai/score")}" data-accent="council">
          <span class="res-ic" style="margin-bottom:var(--s-3)">${c.chart}</span>
          <h3 class="card-title">I want to know where I stand</h3>
          <p class="card-text">Rate yourself across ten dimensions and get told which one is costing you most. Uncomfortable and useful in that order.</p>
        </a>`],3)}
    </section>

    <section class="sec" id="method">
      <div class="sec-head"><h2>The method</h2></div>
      <p class="t-lede" style="max-width:68ch">Thirteen pages, in a deliberate order. The first four are the ones that change results immediately.</p>
      <div style="margin-top:var(--s-5)">${x(e.map(Ma),3)}</div>
    </section>

    <section class="sec" id="problems">
      ${k("Start from a problem, not a feature",`<a class="btn btn-ghost btn-sm" href="${h("ai/library")}">All ${re.length}${c.arrow}</a>`)}
      <div class="row-wrap" style="gap:var(--s-2);margin:var(--s-4) 0">
        ${ue.map(a=>`<a class="chip" href="${h(`ai/library?d=${a.id}`)}">${c[a.icon]||c.circle}${r(a.title)}</a>`).join("")}
      </div>
      ${x(re.slice(0,6).map(Ge),3)}
    </section>

    <section class="sec" id="office">
      ${k("The office masterclass")}
      <p class="t-lede" style="max-width:68ch">Six areas where AI use at work either compounds into visible capability or quietly produces plausible rubbish.</p>
      <div style="margin-top:var(--s-5)">${x(ft.map(Lt),3)}</div>
    </section>

    <section class="sec" id="practise">
      ${k("Practise, not read")}
      ${x([`<a class="card rise" href="${h("ai/roleplay")}" data-accent="clay">
          <span class="res-ic">${c.mic}</span>
          <h3 class="card-title">Role-play rehearsal</h3>
          <p class="card-text">${at.length} briefs that turn an assistant into an interviewer, a hostile client, a sceptical manager. Rehearse before it is real.</p>
        </a>`,`<a class="card rise" href="${h("ai/battles")}" data-accent="signal">
          <span class="res-ic">${c.bolt}</span>
          <h3 class="card-title">Battle tests</h3>
          <p class="card-text">${Z.length} progressive levels with a pass condition and the trap most people fall into. ${Nt()?`You have logged ${Nt()}.`:"None logged yet."}</p>
        </a>`,`<a class="card rise" href="${h("ai/builder")}" data-accent="atlas">
          <span class="res-ic">${c.layers}</span>
          <h3 class="card-title">Workflow builder</h3>
          <p class="card-text">Design a repeatable pipeline: input, AI step, your analysis, your review, output, action. Save it and reuse it.</p>
        </a>`,`<a class="card rise" href="${h("ai/challenge")}" data-accent="council">
          <span class="res-ic">${c.flag}</span>
          <h3 class="card-title">The master challenge</h3>
          <p class="card-text">One real problem from your actual life through all ${Qt.stages.length} stages. The only exercise here that proves anything.</p>
        </a>`],2)}
    </section>

    <section class="sec" id="judge">
      ${k("Judge your own use")}
      <p class="t-lede" style="max-width:68ch">§45. Ask these after any significant piece of AI-assisted work. If you cannot answer them, the work is not finished.</p>
      <ol class="moves" style="margin-top:var(--s-5);max-width:76ch">
        ${Ka.map((a,s)=>`<li><b>${s+1}</b><span>${m(a)}</span></li>`).join("")}
      </ol>
      <div style="margin-top:var(--s-6)">
        ${Ke("ai:eval","Answer them about the last thing you used AI for","Pick one real task from this week. Answering honestly here is worth more than reading three more pages.","The task was… What I had to fix… What it got wrong that I nearly missed…")}
      </div>
    </section>

    ${we()}
  </div>`,accent:"signal"}}const ja={workflow:{title:"The AI Workflow",eyebrow:"Method · §26",lede:"Eleven steps from a problem you cannot yet describe to an action you have actually taken. Most people run steps 5 and 6 only, then wonder why the output needed rewriting.",accent:"forest",law:"The quality of the output is set before you type the request. Steps 1 to 4 decide the result; the prompt merely delivers it.",note:["ai:workflow","Run it once, on something real","Take one task you have this week and walk all eleven steps. Write what happened at each.","Step 1 — the real problem in one sentence…"],body:()=>`
      <ol class="flow" style="margin-top:var(--s-6)">
        ${ea.map(e=>`
          <li class="flow-step ${e.who==="ai"?"flow-ai":"flow-you"}">
            <div class="between" style="gap:var(--s-3);align-items:baseline">
              <h3 class="t-subtitle">${e.n}. ${r(e.title)}</h3>
              <span class="badge ${e.who==="ai"?"badge-info":e.who==="both"?"badge-warning":"badge-success"}">${e.who==="ai"?"The model":e.who==="both"?"Both":"You"}</span>
            </div>
            <p>${m(e.d)}</p>
            ${e.ex?`<p class="t-small" style="margin-top:var(--s-3);opacity:.85"><strong>Example.</strong> ${m(e.ex)}</p>`:""}
          </li>`).join("")}
      </ol>
      <div class="callout callout-warning" style="margin-top:var(--s-7)">
        <span class="lab">The step people skip</span>
        <p>Step 2. Asking the model what it needs to know, before it produces anything,
        improves output more than any prompt template — because it forces the missing
        context into the open instead of letting it get invented.</p>
      </div>`},context:{title:"Context Engineering",eyebrow:"Method · §36",lede:"A model cannot read your situation. Nine out of ten disappointing outputs are a context failure wearing the costume of a prompt failure.",accent:"atlas",law:"Prompt tricks are worth a few percent. Context is worth the difference between unusable and usable.",note:["ai:context","Build your own block for a live task","Fill the seven elements for something you actually need done. Keep it — you will reuse it.","GOAL…"],body:()=>`
      <div class="grid g-2" style="margin-top:var(--s-6)">
        ${ss.map(e=>`
          <div class="card card-flat">
            <h3 class="card-title">${r(e.k)}</h3>
            <p class="card-text">${m(e.d)}</p>
            ${e.ph?`<p class="t-meta" style="margin-top:var(--s-3);opacity:.8">Ask yourself: ${r(e.ph)}</p>`:""}
          </div>`).join("")}
      </div>
      <h2 class="t-section" style="margin-top:var(--s-8)">The template</h2>
      <p class="t-small muted" style="max-width:68ch;margin-bottom:var(--s-4)">Copy it, fill the brackets, keep the filled version. A good context block is an asset you reuse, not something you retype.</p>
      ${X("Context block",ns)}`},verify:{title:"Verify Before You Trust",eyebrow:"Method · §37",lede:"A model is fluent in exactly the same tone whether it knows or is guessing. Fluency is not evidence, and confidence is not accuracy.",accent:"clay",law:"Anything that would embarrass you, cost you money, or affect someone else must be verified against a source you opened yourself.",note:["ai:verify","What has it got wrong on you?","Write down a time AI output was confidently wrong and you nearly used it. Specific memories change behaviour; general warnings do not.","It told me…"],body:()=>`
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${ts.map(e=>`
          <article class="card card-flat" data-accent="${e.sev==="critical"?"clay":"amber"}">
            <div class="between" style="gap:var(--s-3);align-items:baseline">
              <h3 class="card-title">${r(e.k)}</h3>
              ${Be(e.sev)}
            </div>
            <p class="card-text">${m(e.d)}</p>
            <div class="promise" style="margin-top:var(--s-4)">
              <div><div class="lab">How to spot it</div><div class="v">${m(e.tell)}</div></div>
              <div><div class="lab">How to check</div><div class="v">${m(e.check)}</div></div>
            </div>
          </article>`).join("")}
      </div>
      <h2 class="t-section" style="margin-top:var(--s-8)">Make it audit itself</h2>
      <p class="t-small muted" style="max-width:68ch;margin-bottom:var(--s-4)">This does not make the output true. It makes the uncertain parts visible, which is what you needed.</p>
      ${X("The audit prompt",as)}`},safety:{title:"AI Safety and Privacy",eyebrow:"Method · §38",lede:"The risk is rarely dramatic. It is a paste that felt harmless — a client document, a colleague's details, a contract — into a box you do not control.",accent:"clay",law:"Assume anything you paste may be stored, read by a human, or used in training, unless you have specifically confirmed otherwise for that product and that account tier.",note:["ai:safety","Your own line","Write the rule you will actually follow about what you paste. A rule you have written is one you notice breaking.","I will never paste…"],body:()=>`
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${es.map(e=>`
          <article class="card card-flat">
            <div class="between" style="gap:var(--s-3);align-items:baseline">
              <h3 class="card-title">${r(e.k)}</h3>${Be(e.sev)}
            </div>
            <p class="card-text">${m(e.d)}</p>
          </article>`).join("")}
      </div>
      ${be("Anonymise by default","Replace names, employers, account numbers and addresses with placeholders before you paste. It costs you ten seconds and removes the entire category of problem. If the task genuinely needs the real detail, that is a signal the task should not be going into a chat box.")}`},tools:{title:"Choosing the Right Tool",eyebrow:"Method · §39",lede:"The most common AI mistake is not a bad prompt. It is using a language model for a job that belonged to a spreadsheet, a search engine, a specialist, or a conversation.",accent:"council",law:"A model predicts plausible text. Where you need exactness, currency, or accountability, something else is the right instrument.",note:["ai:tools","Where have you used the wrong one?","Name a task you gave AI that a different instrument would have done better, and what it cost you.","I asked it to…"],body:()=>`
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${Xa.map(e=>`
          <article class="card card-flat">
            <div class="row" style="gap:var(--s-3);align-items:center">
              <span class="res-ic">${c[e.icon]||c.tool}</span>
              <h3 class="card-title" style="margin:0">${r(e.tool)}</h3>
            </div>
            <div class="promise" style="margin-top:var(--s-4)">
              <div><div class="lab">Right for</div><div class="v">${m(e.good)}</div></div>
              <div><div class="lab">Wrong for</div><div class="v">${m(e.bad)}</div></div>
            </div>
          </article>`).join("")}
      </div>
      <div class="callout callout-info" style="margin-top:var(--s-7)">
        <span class="lab">The question to ask first</span>
        <p>“What kind of answer do I need — plausible, exact, current, or accountable?”
        Only the first belongs to a language model without a second instrument behind it.</p>
      </div>`},recovery:{title:"When AI Fails",eyebrow:"Method · §40",lede:"Output comes back generic, wrong, or subtly off. Most people retype the same request with more adjectives. That is not a recovery method.",accent:"amber",law:"“Make it better” is not feedback. Name the specific defect, and nine times out of ten the fix is context, not phrasing.",note:["ai:recovery","Diagnose your last failure","Take a bad output you got recently. Run the seven steps on it in writing.","The failure was specifically…"],body:()=>`
      <ol class="moves" style="margin-top:var(--s-6);max-width:78ch">
        ${Qa.map(e=>`<li><b>${e.n}</b><span><strong>${r(e.k)}.</strong> ${m(e.d)}</span></li>`).join("")}
      </ol>
      ${X("Specific criticism beats vague dissatisfaction",`That draft failed in a specific way. Here is the diagnosis:

WHAT IS WRONG: [too generic / wrong level / wrong tone / wrong task / factually off / too long]
WHAT I ACTUALLY NEED: [the outcome, restated]
MISSING CONTEXT I SHOULD HAVE GIVEN YOU: [the thing you could not have known]
KEEP: [the parts that worked — do not lose them]

Rewrite with that. Do not apologise, do not explain the changes.`)}`},leverage:{title:"Time Leverage",eyebrow:"Method · §34",lede:"Six levels, in strict order of value. Automation is last, not first — and the level almost nobody uses is the one at the top.",accent:"forest",law:Ga,note:["ai:leverage","Run the ladder on one recurring task","Pick something you do every week. Go down the levels in order and stop at the first honest answer.","The task is… Could it be eliminated?…"],body:()=>`
      <ol class="flow" style="margin-top:var(--s-6)">
        ${[...Ja].sort((e,t)=>e.order-t.order).map(e=>`
          <li class="flow-step">
            <div class="row" style="gap:var(--s-3);align-items:center">
              <span class="res-ic">${c[e.icon]||c.bolt}</span>
              <h3 class="t-subtitle" style="margin:0">${e.order}. ${r(e.k)}</h3>
            </div>
            <p>${m(e.d)}</p>
            <p class="t-small" style="margin-top:var(--s-3)"><strong>Ask:</strong> ${m(e.ask)}</p>
            ${e.ex?`<p class="t-small" style="opacity:.85"><strong>Example.</strong> ${m(e.ex)}</p>`:""}
          </li>`).join("")}
      </ol>
      ${be("Automating the wrong thing is worse than doing it by hand","A manual unnecessary task dies when you get bored. An automated unnecessary task runs forever, and someone will maintain it for years without ever asking why it exists. Go down the ladder in order.")}`},decide:{title:"The AI Decision Engine",eyebrow:"Method · §33",lede:"Used well, a model widens your options and attacks your reasoning. Used badly, it becomes a way of having made a decision without having decided.",accent:"council",law:Ze.law,note:["ai:decide","A decision you are sitting on","Name it, then run at least the pre-mortem and the “what am I avoiding” prompt. Write what surfaced.","The decision is… What I am avoiding…"],body:()=>`
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-5)">
        ${Ze.uses.map(e=>`
          <article class="card card-flat">
            <h3 class="card-title">${r(e.k)}</h3>
            <p class="card-text">${m(e.d)}</p>
            <div style="margin-top:var(--s-4)">${X("Paste this",e.prompt)}</div>
          </article>`).join("")}
      </div>
      <h2 class="t-section" style="margin-top:var(--s-8)">Four things it never does</h2>
      <ul class="marklist badlist" style="margin-top:var(--s-4);max-width:76ch">
        ${Ze.never.map(e=>`<li>${m(e)}</li>`).join("")}
      </ul>
      <div style="margin-top:var(--s-6)" class="callout callout-success">
        <span class="lab">The test</span>
        <p>Can you state the decision, the two strongest arguments against it, and
        what you are accepting as a cost — in your own words, with nothing open?
        If not, you have a recommendation, not a decision.</p>
      </div>`}},ci=yt.map(e=>e.route.replace(/^ai\//,"")).filter(e=>ja[e]);async function di(e){const t=e.params.section,a=ja[t];if(!a)return{title:"Not found",html:null,notFound:!0};const s=ci.filter(i=>i!==t).slice(0,3).map(i=>yt.find(o=>o.route===`ai/${i}`)).filter(Boolean),n=`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:a.title}])}
    ${E({eyebrow:a.eyebrow,title:a.title,lede:a.lede,accent:a.accent,actions:C(`ai:${t}`)})}
    ${a.law?Ia(a.law):""}
    <div class="prose">${a.body()}</div>
    ${a.note?`<div style="margin-top:var(--s-8)">${Ke(a.note[0],a.note[1],a.note[2],a.note[3])}</div>`:""}

    ${s.length?`
      <section class="sec">
        ${k("Next in the method",`<a class="btn btn-ghost btn-sm" href="${h("ai")}">All of it${c.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${x(s.map(Ma),3)}</div>
      </section>`:""}

    ${we()}
  </div>`;return{title:a.title,html:n,accent:a.accent,recent:{id:`ai:${t}`,kind:"ai",title:a.title,route:`ai/${t}`}}}async function hi(e){const t=e.query.d||"",a=ue.find(i=>i.id===t),s=a?st(a.id):re,n=`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Problem library"}])}
    ${E({eyebrow:`${Ct} · §27`,title:a?a.title:"Real-life problem library",lede:a?a.blurb:"Not features, not prompt categories — problems people actually have. Each one names why it is hard, gives the approach, and hands you a prompt worth pasting.",accent:a?a.accent:"signal",meta:[T(s.length,"problem")]})}

    <div class="filters" role="group" aria-label="Filter by area">
      <a class="chip ${a?"":"chip-solid"}" href="${h("ai/library")}">All ${re.length}</a>
      ${ue.map(i=>`
        <a class="chip ${a&&a.id===i.id?"chip-solid":""}" href="${h(`ai/library?d=${i.id}`)}">
          ${c[i.icon]||c.circle}${r(i.title)}
          <span class="fcount">${st(i.id).length}</span>
        </a>`).join("")}
    </div>

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="ai-q">Narrow these down</label>
      <div class="searchbar">
        ${c.search}
        <input class="input" id="ai-q" type="search" data-ai-q autocomplete="off"
          placeholder="email, salary, contract, decide…">
      </div>
      <span class="hint">Press Enter to search the whole site instead.</span>
    </div>

    <p class="t-meta faint" data-ai-count>${T(s.length,"problem")}</p>

    <div class="grid g-3" data-ai-grid style="margin-top:var(--s-4)">
      ${s.map(i=>`<div data-ai-item data-hay="${r(pi(i))}">${Ge(i)}</div>`).join("")}
    </div>

    <div data-ai-empty hidden>
      ${ie("Nothing here matches that","Try fewer words, or search the whole library — the answer may be in a lesson or a playbook rather than a prompt.",`<a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>`)}
    </div>

    ${a?`
      <section class="sec">
        ${k("Other areas")}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
          ${ue.filter(i=>i.id!==a.id).map(i=>`<a class="chip" href="${h(`ai/library?d=${i.id}`)}">${c[i.icon]||c.circle}${r(i.title)}</a>`).join("")}
        </div>
      </section>`:""}

    ${we()}
  </div>`;return{title:a?`${a.title} · AI`:"AI problem library",html:n,accent:a?a.accent:"signal",mount:ui}}const pi=e=>`${e.title} ${e.hard} ${(e.approach||[]).join(" ")} ${e.domain} ${(e.checks||[]).join(" ")}`.toLowerCase();function ui(e){const t=e.querySelector("[data-ai-q]");if(!t)return;const a=[...e.querySelectorAll("[data-ai-item]")],s=e.querySelector("[data-ai-grid]"),n=e.querySelector("[data-ai-empty]"),i=e.querySelector("[data-ai-count]");let o=0;const l=()=>{const f=t.value.trim().toLowerCase();let v=0;for(const u of a){const y=!f||u.dataset.hay.includes(f);u.hidden=!y,y&&v++}s&&(s.hidden=v===0),n&&(n.hidden=v!==0),i&&(i.textContent=f?`${v} of ${a.length} match “${t.value.trim()}”`:T(a.length,"problem"))},d=()=>{clearTimeout(o),o=setTimeout(l,130)},p=f=>{if(f.key!=="Enter")return;const v=t.value.trim();v.length>2&&de(`search?q=${encodeURIComponent(v)}`)};return t.addEventListener("input",d),t.addEventListener("keydown",p),()=>{clearTimeout(o),t.removeEventListener("input",d),t.removeEventListener("keydown",p)}}async function mi(e){const t=Xt(e.params.id);if(!t)return{title:"Not found",html:null,notFound:!0};const a=ue.find(o=>o.id===t.domain)||{},s=st(t.domain).filter(o=>o.id!==t.id).slice(0,3),n=ft.filter(o=>(o.problems||[]).includes(t.id)),i=`
  <div class="shell-narrow band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Problem library",to:"ai/library"},{label:a.title||"Problem",to:`ai/library?d=${t.domain}`},{label:t.title}])}

    ${E({eyebrow:a.title||"Real problem",title:t.title,accent:a.accent||"signal",actions:C(`ai-problem:${t.id}`)})}

    <section class="sec" id="why-hard">
      <div class="sec-head"><h2>Why this is hard</h2></div>
      <p class="t-lede">${m(t.hard)}</p>
    </section>

    ${(t.approach||[]).length?`
      <section class="sec" id="approach">
        <div class="sec-head"><h2>The approach</h2></div>
        <ol class="moves" style="max-width:76ch">
          ${t.approach.map((o,l)=>`<li><b>${l+1}</b><span>${m(o)}</span></li>`).join("")}
        </ol>
      </section>`:""}

    <section class="sec" id="prompt">
      <div class="sec-head"><h2>The prompt</h2></div>
      <p class="t-small muted" style="margin-bottom:var(--s-4)">Replace every bracket with your real detail before you paste it. The brackets are the whole value — a prompt with the brackets left in produces the generic output you were trying to avoid.</p>
      ${X("Copy and fill in",t.prompt)}
    </section>

    ${t.followUp?`
      <section class="sec" id="second-pass">
        <div class="sec-head"><h2>The second pass</h2></div>
        <p class="t-small muted" style="margin-bottom:var(--s-4)">Paste this <em>after</em> you have the first answer. It attacks the
          answer rather than the problem, which is where a model is genuinely strong — critique is far more reliable than
          generation. Most of the value people leave behind is here, because the first draft reads well enough to accept.</p>
        ${X("Copy this next",t.followUp)}
      </section>`:""}

    ${(t.checks||[]).length?`
      <section class="sec" id="checks">
        <div class="sec-head"><h2>Check before you act</h2></div>
        <p class="t-small muted" style="margin-bottom:var(--s-4)">Highest-cost failure first. A minute here is the difference
          between using the tool and being used by it.</p>
        <ul class="marklist goodlist" style="max-width:76ch">
          ${t.checks.map(o=>`<li>${m(o)}</li>`).join("")}
        </ul>
      </section>`:""}

    ${t.warn?`<div class="callout callout-danger" style="margin-top:var(--s-6)">
      <span class="lab">Before you use the output</span><p>${m(t.warn)}</p></div>`:""}

    <section class="sec" id="notes">
      ${Ke(`ai-problem:${t.id}`,"What happened when you tried it","What you had to change, what it got wrong, and what belongs in the prompt next time.","I ran it and…")}
    </section>

    ${n.length?`
      <section class="sec">
        ${k("The wider skill")}
        ${x(n.map(Lt),2)}
      </section>`:""}

    ${s.length?`
      <section class="sec">
        
        ${k(`More in ${a.title||"this area"}`,`<a class="btn btn-ghost btn-sm" href="${h(`ai/library?d=${t.domain}`)}">All${c.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${x(s.map(Ge),3)}</div>
      </section>`:""}

    ${we()}
  </div>`;return{title:t.title,html:i,accent:a.accent||"signal",recent:{id:`ai-problem:${t.id}`,kind:"ai",title:t.title,route:`ai/problem/${t.id}`}}}async function vi(e){const t=Za(e.params.id);if(!t)return{title:"Not found",html:null,notFound:!0};const a=(t.problems||[]).map(Xt).filter(Boolean),s=ft.filter(i=>i.id!==t.id),n=`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:`AI for ${t.title}`}])}

    ${E({eyebrow:"Office masterclass · §28",title:`AI for ${t.title}`,lede:t.lede,accent:t.accent,actions:C(`ai-office:${t.id}`)})}

    <section class="sec" id="moves">
      <div class="sec-head"><h2>The moves that matter</h2></div>
      <div class="stack" style="gap:var(--s-4)">
        ${t.moves.map((i,o)=>`
          <article class="card card-flat">
            <div class="row" style="gap:var(--s-3);align-items:baseline">
              <span class="card-n">${o+1}</span>
              <h3 class="card-title" style="margin:0">${r(i.k)}</h3>
            </div>
            <p class="card-text" style="margin-top:var(--s-2)">${m(i.d)}</p>
          </article>`).join("")}
      </div>
    </section>

    ${a.length?`
      <section class="sec" id="worked">
        ${k("Worked problems in this area")}
        <div style="margin-top:var(--s-4)">${x(a.map(Ge),2)}</div>
      </section>`:""}

    <section class="sec" id="notes">
      ${Ke(`ai-office:${t.id}`,`Where ${t.title.toLowerCase()} actually costs you time`,"Name the specific recurring instance. That is the one worth templating.","Every week I…")}
    </section>

    <section class="sec">
      ${k("The other five areas")}
      <div style="margin-top:var(--s-4)">${x(s.map(Lt),3)}</div>
    </section>

    <div class="callout callout-info" style="margin-top:var(--s-7)">
      <span class="lab">Before you optimise this</span>
      <p>Run the <a href="${h("ai/leverage")}">leverage ladder</a> first. Some of the
      work in this area should not be made faster — it should stop.</p>
    </div>

    ${we()}
  </div>`;return{title:`AI for ${t.title}`,html:n,accent:t.accent,recent:{id:`ai-office:${t.id}`,kind:"ai",title:`AI for ${t.title}`,route:`ai/office/${t.id}`}}}async function gi(){let e=[],t=null;try{e=await xt()}catch(i){t=i}if(t)return{title:"The prompt vault",accent:"signal",html:`<div class="shell band">
        ${A([{label:"AI Intelligence",to:"ai"},{label:"Prompt vault"}])}
        ${P("The prompt vault could not load","The content file did not come back. Your saved work is untouched.")}
      </div>`};const a=new Map;for(const i of e){const o=i.section||"Other";a.has(o)||a.set(o,[]),a.get(o).push(i)}const s=[...a.entries()].sort((i,o)=>o[1].length-i[1].length);return{title:"The prompt vault",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Prompt vault"}])}

    ${E({eyebrow:Ct,title:"The prompt vault",lede:"Every prompt written into the library, in one place, ready to copy. A prompt is a starting point — fill in your real detail or you will get the generic answer the brackets were there to prevent.",accent:"signal",meta:[T(e.length,"prompt"),T(s.length,"group")],actions:C("ai:prompts","Save the vault")})}

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="pv-q">Find a prompt</label>
      <div class="searchbar">${c.search}
        <input class="input" id="pv-q" type="search" data-pv-q autocomplete="off" placeholder="interview, email, decide, verify…"></div>
      <span class="hint">Filters the prompts below. Press Enter to search the whole site.</span>
    </div>

    <p class="t-meta faint" data-pv-count>${T(e.length,"prompt")}</p>

    <div data-pv-list style="margin-top:var(--s-5)">
      ${s.map(([i,o])=>`
        <section class="sec" data-pv-group data-hay="${r(i.toLowerCase())}">
          <div class="sec-head"><h2>${r(i)}</h2>
            <span class="t-meta faint">${T(o.length,"prompt")}</span></div>
          <div class="stack" style="gap:var(--s-4)">
            ${o.map(l=>`
              <div data-pv-item data-hay="${r(`${l.text} ${l.source||""} ${i}`.toLowerCase())}">
                ${X(l.source||"Prompt",l.text)}
              </div>`).join("")}
          </div>
        </section>`).join("")}
    </div>

    <div data-pv-empty hidden>
      ${ie("No prompt matches that","Try a shorter phrase, or look in the problem library — it is organised by the problem rather than the wording.",`<a class="btn btn-soft" href="${h("ai/library")}">${c.inbox}Problem library</a>`)}
    </div>

    ${we()}
  </div>`,accent:"signal",mount:yi}}function yi(e){const t=e.querySelector("[data-pv-q]");if(!t)return;const a=[...e.querySelectorAll("[data-pv-item]")],s=[...e.querySelectorAll("[data-pv-group]")],n=e.querySelector("[data-pv-empty]"),i=e.querySelector("[data-pv-count]");let o=0;const l=()=>{const f=t.value.trim().toLowerCase();let v=0;for(const u of a){const y=!f||u.dataset.hay.includes(f);u.hidden=!y,y&&v++}for(const u of s)u.hidden=![...u.querySelectorAll("[data-pv-item]")].some(y=>!y.hidden);n&&(n.hidden=v!==0),i&&(i.textContent=f?`${v} of ${a.length} match “${t.value.trim()}”`:T(a.length,"prompt"))},d=()=>{clearTimeout(o),o=setTimeout(l,130)},p=f=>{f.key==="Enter"&&t.value.trim().length>2&&de(`search?q=${encodeURIComponent(t.value.trim())}`)};return t.addEventListener("input",d),t.addEventListener("keydown",p),()=>{clearTimeout(o),t.removeEventListener("input",d),t.removeEventListener("keydown",p)}}const fo=Object.freeze(Object.defineProperty({__proto__:null,aiFramework:di,aiLibrary:hi,aiOffice:vi,aiProblem:mi,aiPrompts:gi,default:ri},Symbol.toStringTag,{value:"Module"})),je=()=>`
  <aside class="callout callout-info" style="margin-top:var(--s-8)">
    <span class="lab">How this section works</span>
    <p>Nothing here talks to an AI model. These are structures you fill in and
    prompts you copy into whichever assistant you use. Your entries are saved on
    this device only.</p>
  </aside>`,_e=(e,t,a,s,n=4)=>{const i=`n-${e.replace(/[^a-z0-9]+/gi,"-")}`;return`
  <div class="field" style="max-width:72ch">
    <label for="${i}">${r(t)}</label>
    ${a?`<p class="t-small muted" style="margin-bottom:6px">${m(a)}</p>`:""}
    <textarea class="textarea" id="${i}" rows="${n}"
      data-note="${r(e)}" placeholder="${r(s||"")}">${r(K(e))}</textarea>
    <span class="hint">Saves as you type.</span>
  </div>`};async function fi(){return{title:"Role-play rehearsal",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Role-play rehearsal"}])}

    ${E({eyebrow:"Practice · §32",title:"Rehearse it before it is real",lede:"The single most underused thing an assistant does well: it will play the difficult person, one turn at a time, for as long as you can stand it. This is the difference between having thought about a conversation and having had it.",accent:"clay",actions:C("ai:roleplay")})}

    <aside class="slab" data-accent="clay" style="margin:var(--s-6) 0">
      <p class="eyebrow">Why this works when reading does not</p>
      <p class="t-lede">You do not discover the gap between what you can type and what
      you can say under pressure by reading. You discover it in the third exchange,
      when the other side does not accept your first answer.</p>
    </aside>

    ${W([{id:"rules",label:"Six rules"},{id:"partners",label:"Nine partners"},{id:"debrief",label:"The debrief"}])}

    <section class="sec" id="rules">
      <div class="sec-head"><h2>Six rules, or it is theatre</h2></div>
      <ol class="moves" style="max-width:78ch">
        ${is.map((t,a)=>`<li><b>${a+1}</b><span>${m(t)}</span></li>`).join("")}
      </ol>
    </section>

    <section class="sec" id="partners">
      <div class="sec-head"><h2>Nine partners</h2></div>
      <p class="t-lede" style="max-width:68ch">Copy the brief, fill the brackets with your real situation, and paste it as your first message. Say your answers out loud.</p>

      <div class="stack" style="gap:var(--s-6);margin-top:var(--s-6)">
        ${at.map(t=>`
          <article class="card card-pad-lg" data-accent="${t.accent}">
            <span class="res-ic">${c[t.icon]||c.users}</span>
            <h3 class="card-title">${r(t.role)}</h3>
            <p class="card-text">${m(t.use)}</p>
            <div style="margin-top:var(--s-4)">${X("The brief — paste this first",t.brief)}</div>
            ${t.after?`<div style="margin-top:var(--s-4)">${X("The debrief — paste this when you type STOP",t.after)}</div>`:""}
          </article>`).join("")}
      </div>
    </section>

    <section class="sec" id="debrief">
      <div class="sec-head"><h2>The debrief is the point</h2></div>
      <p class="t-lede" style="max-width:70ch">A rehearsal without a debrief is just an uncomfortable conversation you had for no reason. Always run the feedback pass, and always write down the one sentence that let you down.</p>
      ${_e("ai:roleplay","What broke under pressure","Which question left you with nothing? Which of your sentences weakened your own position? Write the better version now, while it is fresh.","The question I could not answer was…",5)}
    </section>

    ${be("It is a sparring partner, not a prophet","A model does not know what your actual manager will do, what your actual interviewer values, or what your actual landlord is legally required to accept. It rehearses your delivery and exposes your gaps. It does not predict the other person.")}

    ${je()}
  </div>`,accent:"clay",recent:{id:"ai:roleplay",kind:"ai",title:"Role-play rehearsal",route:"ai/roleplay"}}}const Ne="ai-builder",_a=()=>({name:"",every:"",stages:J.map(()=>"")});function Ca(e){const t=_a();return!e||typeof e!="object"||(t.name=typeof e.name=="string"?e.name:"",t.every=typeof e.every=="string"?e.every:"",Array.isArray(e.stages)&&J.forEach((a,s)=>{t.stages[s]=typeof e.stages[s]=="string"?e.stages[s]:""})),t}const La=e=>{const t=[`WORKFLOW: ${e.name||"[unnamed]"}`,`RUNS: ${e.every||"[how often]"}`,""];return J.forEach((a,s)=>{t.push(`${s+1}. ${a.k}  (${a.who==="ai"?"the model":"you"})`),t.push(`   ${e.stages[s]?e.stages[s].replace(/\n/g,`
   `):"[not yet defined]"}`),t.push("")}),t.push("CHECK BEFORE THIS RUNS FOR REAL:"),t.push("- Does this work need to exist at all, or should it be eliminated?"),t.push("- Which step catches an error before it reaches anyone else?"),t.push("- What happens the week the model output is wrong and nobody notices?"),t.join(`
`)};function qa(e){const t=e.stages.filter(o=>o.trim()).length,a=Math.round(t/J.length*100),s=J.map((o,l)=>({p:o,i:l})).filter(o=>!e.stages[o.i].trim()),n=J.filter((o,l)=>o.who!=="ai"&&e.stages[l].trim()).length,i=J.filter((o,l)=>o.who==="ai"&&e.stages[l].trim()).length;return`
    <div class="panel-out">
      <div class="panel-h"><span class="panel-t">Your workflow</span>
        <span class="t-meta faint">${t}/${J.length} steps defined</span></div>

      <div class="meter meter-lg" style="margin:var(--s-4) 0"><span style="width:${a}%"></span></div>

      ${le([{v:i,l:"model steps"},{v:n,l:"your steps"},{v:`${a}%`,l:"defined"}])}

      ${s.length?`
        <div class="callout callout-warning" style="margin-top:var(--s-5)">
          <span class="lab">Not finished</span>
          <p>Still undefined: ${s.map(o=>`<strong>${r(o.p.k)}</strong>`).join(", ")}.
          A pipeline with an undefined review step is not a pipeline, it is a hope.</p>
        </div>`:`
        <div class="callout callout-success" style="margin-top:var(--s-5)">
          <span class="lab">All six defined</span>
          <p>Now run it manually three times before you make any of it permanent. Most
          designs fail on the input step, which is only visible once real material arrives.</p>
        </div>`}

      ${n===0&&i>0?`
        <div class="callout callout-danger" style="margin-top:var(--s-4)">
          <span class="lab">There is no human in this loop</span>
          <p>You have defined model steps and no review of your own. That is not
          leverage — it is an unattended process producing plausible output that
          nobody has checked.</p>
        </div>`:""}

      <div style="margin-top:var(--s-5)">${X("The written specification",La(e))}</div>

      <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">
        <button class="btn btn-soft btn-sm" data-b-copy>${c.copy}Copy the specification</button>
        <button class="btn btn-ghost btn-sm" data-b-reset>${c.reset}Start again</button>
      </div>
    </div>`}async function bi(){const e=Ca($e(Ne));return{title:"Workflow builder",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Workflow builder"}])}

    ${E({eyebrow:"Build · §35",title:"Workflow builder",lede:"A one-off good output is a nice afternoon. A workflow is capability. Design the whole pipeline — what arrives, what the model does, what you analyse, what you check, what comes out, and what actually happens next.",accent:"atlas",actions:C("ai:builder")})}

    <aside class="slab" data-accent="atlas" style="margin:var(--s-6) 0">
      <p class="eyebrow">The shape</p>
      <p class="t-lede">INPUT → AI → ANALYSE → REVIEW → OUTPUT → ACTION. Remove the review
      step and you have built a machine for distributing your own unchecked mistakes faster.</p>
    </aside>

    <div class="tool tool-split">
      <div class="panel">
        <div class="panel-h"><span class="panel-t">Define it</span></div>

        <div class="field">
          <label for="b-name">What is this workflow for?</label>
          <input class="input" id="b-name" data-b="name" value="${r(e.name)}"
            placeholder="Turning supplier invoices into the monthly summary">
        </div>

        <div class="field">
          <label for="b-every">How often does it run?</label>
          <input class="input" id="b-every" data-b="every" value="${r(e.every)}"
            placeholder="Weekly, Friday morning">
        </div>

        <div class="hr"></div>

        ${J.map((a,s)=>`
          <div class="field">
            <label for="b-s${s}">
              ${s+1}. ${r(a.k)}
              <span class="badge ${a.who==="ai"?"badge-info":"badge-success"}" style="margin-left:8px">${a.who==="ai"?"the model":"you"}</span>
            </label>
            <p class="t-small muted" style="margin-bottom:6px">${m(a.d)}</p>
            <textarea class="textarea" id="b-s${s}" rows="3" data-b="stages.${s}"
              placeholder="Be specific. Vague here means broken later.">${r(e.stages[s])}</textarea>
          </div>`).join("")}
      </div>

      <div data-b-out>${qa(e)}</div>
    </div>

    <section class="sec">
      ${_e("ai:builder-log","What happened the first three times you ran it","Where it broke, what you had to add, and whether the work should have existed at all.","Run 1…")}
    </section>

    <div class="callout callout-info" style="margin-top:var(--s-7)">
      <span class="lab">Before you build anything</span>
      <p>Run the <a href="${h("ai/leverage")}">leverage ladder</a>. Automating work
      that should be eliminated is the most expensive mistake in this section.</p>
    </div>

    ${je()}
  </div>`,accent:"atlas",mount:$i}}function $i(e){let t=Ca($e(Ne));const a=e.querySelector("[data-b-out]"),s=()=>{a&&(a.innerHTML=qa(t))},n=me(()=>ia(Ne,t),260),i=l=>{const d=l.target.closest("[data-b]");if(!d)return;const p=d.dataset.b;if(p.startsWith("stages.")){const f=Number(p.slice(7));Number.isInteger(f)&&f>=0&&f<J.length&&(t.stages[f]=d.value)}else(p==="name"||p==="every")&&(t[p]=d.value);s(),n()},o=l=>{if(l.target.closest("[data-b-copy]")){bt(La(t)).then(d=>U(d?"Specification copied":"Could not copy"));return}if(l.target.closest("[data-b-reset]")){t=_a(),oa(Ne);for(const d of e.querySelectorAll("[data-b]"))d.value="";s(),U("Cleared")}};return e.addEventListener("input",i),e.addEventListener("click",o),()=>{e.removeEventListener("input",i),e.removeEventListener("click",o)}}const Ra=e=>`battle:${e}`,qt=e=>N(Ra(e));async function wi(){const e=Z.filter(s=>qt(s.id)).length,t=Math.round(e/Z.length*100);return{title:"Battle tests",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Battle tests"}])}

    ${E({eyebrow:"Practice · §41",title:"Eight battle tests",lede:"Progressive, real, and each one has a pass condition you can check honestly. Nothing is awarded for reading the page — you mark a level passed only when the stated condition is actually true.",accent:"signal",actions:C("ai:battles")})}

    ${le([{v:`${e}/${Z.length}`,l:"levels passed"},{v:`${t}%`,l:"through"},{v:Z.length-e,l:"remaining"}])}

    <div class="meter meter-lg" style="margin:var(--s-5) 0;max-width:420px"><span style="width:${t}%"></span></div>

    <div class="stack" style="gap:var(--s-6)">
      ${Z.map(s=>ki(s)).join("")}
    </div>

    ${e===Z.length?`
      <aside class="slab" data-accent="council" style="margin-top:var(--s-8)">
        <p class="eyebrow">All eight</p>
        <p class="t-lede">Then the honest next step is the
        <a href="${h("ai/challenge")}">master challenge</a> — one real problem from your
        own life through the entire system. That is the only test here with a consequence.</p>
      </aside>`:""}

    ${je()}
  </div>`,accent:"signal",mount:Ti}}function ki(e){const t=qt(e.id),a=`battle-note:${e.id}`;return`
  <article class="card card-pad-lg" data-accent="${t?"forest":"signal"}" data-battle="${r(e.id)}">
    <div class="card-meta">
      <p class="eyebrow">Level ${e.level}</p>
      ${t?'<span class="badge badge-success">Passed</span>':""}
    </div>
    <h3 class="card-title">${r(e.title)}</h3>

    <p class="card-text">${m(e.goal)}</p>

    <div class="promise" style="margin-top:var(--s-4)">
      <div><div class="lab">The task</div><div class="v">${m(e.task)}</div></div>
      <div><div class="lab">You have passed when</div><div class="v">${m(e.pass)}</div></div>
      <div><div class="lab">The trap</div><div class="v">${m(e.trap)}</div></div>
    </div>

    <div style="margin-top:var(--s-5)">
      ${_e(a,"What happened","","What you ran, what came back, what you changed.",3)}
    </div>

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">
      <button class="btn ${t?"btn-soft":"btn-primary"} btn-sm" data-battle-pass="${r(e.id)}">
        ${t?c.circleCheck:c.circle}${t?"Passed — undo":"The condition is true — mark passed"}
      </button>
    </div>
  </article>`}function Ti(e){const t=a=>{const s=a.target.closest("[data-battle-pass]");if(!s)return;const n=s.dataset.battlePass,i=!qt(n);ps(Ra(n),i),i&&vs(n,1,{passed:!0,at:Date.now()}),s.className=`btn ${i?"btn-soft":"btn-primary"} btn-sm`,s.innerHTML=`${i?c.circleCheck:c.circle}${i?"Passed — undo":"The condition is true — mark passed"}`;const o=s.closest("[data-battle]");if(o){o.dataset.accent=i?"forest":"signal";const l=o.querySelector(".card-meta"),d=o.querySelector(".badge-success");i&&!d&&l&&l.insertAdjacentHTML("beforeend",'<span class="badge badge-success">Passed</span>'),!i&&d&&d.remove()}U(i?"Level marked passed":"Level reopened")};return e.addEventListener("click",t),()=>e.removeEventListener("click",t)}const We="ai-score",Oa=()=>Q.map(()=>0);function Pa(e){const t=Oa();return Array.isArray(e)&&Q.forEach((a,s)=>{const n=Number(e[s]);t[s]=Number.isFinite(n)?Math.min(10,Math.max(0,Math.round(n))):0}),t}const Na=e=>Rt.find(t=>e>=t.min&&e<=t.max)||Rt[0];function Wa(e){const t=e.reduce((l,d)=>l+d,0),a=Na(t),s=e.filter(l=>l>0).length,n=Q.map((l,d)=>({d:l,v:e[d]})).sort((l,d)=>l.v-d.v),i=n.slice(0,3),o=[...n].reverse().slice(0,2);return`
  <div class="panel-out">
    <div class="panel-h"><span class="panel-t">Where you stand</span>
      <span class="t-meta faint">${s}/${Q.length} rated</span></div>

    <div class="dial" style="margin:var(--s-4) 0">
      <b>${t}</b><span>out of 100</span>
    </div>

    <div class="meter meter-lg"><span style="width:${t}%"></span></div>

    <div class="callout ${t>=65?"callout-success":t>=45?"callout-info":"callout-warning"}" style="margin-top:var(--s-5)">
      <span class="lab">${r(a.k)}</span>
      <p>${m(a.d)}</p>
    </div>

    ${s<Q.length?`
      <p class="t-small muted" style="margin-top:var(--s-4)">${Q.length-s}
      ${Q.length-s===1?"dimension is":"dimensions are"} still at zero.
      A zero you meant and a zero you skipped read the same here, so rate everything.</p>`:""}

    <h3 class="t-subtitle" style="margin-top:var(--s-6)">Work on these first</h3>
    <div class="stack" style="gap:var(--s-3);margin-top:var(--s-3)">
      ${i.map(l=>`
        <div class="rowitem">
          <div style="min-width:0">
            <strong>${r(l.d.k)}</strong>
            <p class="t-small muted" style="margin:2px 0 0">${m(l.d.d)}</p>
          </div>
          <span class="t-meta faint">${l.v}/10</span>
        </div>`).join("")}
    </div>

    ${t>0?`
      <h3 class="t-subtitle" style="margin-top:var(--s-6)">Already solid</h3>
      <div class="stack" style="gap:var(--s-2);margin-top:var(--s-3)">
        ${o.map(l=>`<div class="rowitem"><strong>${r(l.d.k)}</strong><span class="t-meta faint">${l.v}/10</span></div>`).join("")}
      </div>`:""}

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
      <button class="btn btn-soft btn-sm" data-sc-copy>${c.copy}Copy the summary</button>
      <button class="btn btn-ghost btn-sm" data-sc-reset>${c.reset}Reset to zero</button>
    </div>
  </div>`}const xi=e=>{const t=e.reduce((s,n)=>s+n,0),a=Na(t);return[`AI RESOURCEFULNESS — ${t}/100 (${a.k})`,"",...Q.map((s,n)=>`${String(e[n]).padStart(2," ")}/10  ${s.k}`),"",a.d].join(`
`)};async function Si(){const e=Pa($e(We));return{title:"AI resourcefulness score",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Resourcefulness score"}])}

    ${E({eyebrow:"Assess · §42",title:"AI resourcefulness score",lede:"Ten dimensions, rated by you, honestly. This is not a quiz with right answers — it is a mirror, and it is only useful if you rate yourself as you actually behave rather than as you intend to.",accent:"council",actions:C("ai:score")})}

    <aside class="slab" data-accent="council" style="margin:var(--s-6) 0">
      <p class="eyebrow">How to rate</p>
      <p class="t-lede">0 means never, 5 means sometimes and inconsistently, 10 means it is
      a reflex you would notice yourself skipping. Rate the last month, not your best week.</p>
    </aside>

    <div class="tool tool-split">
      <div class="panel">
        <div class="panel-h"><span class="panel-t">Rate yourself</span></div>
        ${Q.map((a,s)=>`
          <div class="field">
            <label for="sc-${s}">${r(a.k)} <span class="t-meta faint" data-sc-v="${s}">${e[s]}/10</span></label>
            <p class="t-small muted" style="margin-bottom:6px">${m(a.d)}</p>
            <input class="range" id="sc-${s}" type="range" min="0" max="10" step="1"
              value="${e[s]}" data-sc="${s}" aria-describedby="sc-h-${s}">
            <span class="hint" id="sc-h-${s}">0 never · 5 inconsistently · 10 reflex</span>
          </div>`).join("")}
      </div>

      <div data-sc-out>${Wa(e)}</div>
    </div>

    <section class="sec">
      ${_e("ai:score-note","The one dimension you will actually change","Pick the lowest score you care about and write the specific habit you will add this week. One is better than three.","The dimension is… The habit is…")}
    </section>

    ${je()}
  </div>`,accent:"council",mount:Ei}}function Ei(e){let t=Pa($e(We));const a=e.querySelector("[data-sc-out]"),s=()=>{a&&(a.innerHTML=Wa(t))},n=me(()=>ia(We,t),260),i=l=>{const d=l.target.closest("[data-sc]");if(!d)return;const p=Number(d.dataset.sc);if(!Number.isInteger(p)||p<0||p>=Q.length)return;t[p]=Math.min(10,Math.max(0,Number(d.value)||0));const f=e.querySelector(`[data-sc-v="${p}"]`);f&&(f.textContent=`${t[p]}/10`),s(),n()},o=l=>{if(l.target.closest("[data-sc-copy]")){bt(xi(t)).then(d=>U(d?"Summary copied":"Could not copy"));return}if(l.target.closest("[data-sc-reset]")){t=Oa(),oa(We);for(const d of e.querySelectorAll("[data-sc]"))d.value=0;for(const d of e.querySelectorAll("[data-sc-v]"))d.textContent="0/10";s(),U("Reset")}};return e.addEventListener("input",i),e.addEventListener("click",o),()=>{e.removeEventListener("input",i),e.removeEventListener("click",o)}}async function Ai(){const e=Qt,a=e.stages.map(i=>`ai:challenge:${i.n}`).filter(i=>K(i).trim()).length,s=Math.round(a/e.stages.length*100),n=`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Master challenge"}])}

    ${E({eyebrow:"The final test · §43",title:e.title,lede:e.lede,accent:"council",actions:C("ai:challenge")})}

    ${le([{v:`${a}/${e.stages.length}`,l:"stages written"},{v:`${s}%`,l:"through"},{v:e.rules.length,l:"rules"}])}

    <div class="meter meter-lg" style="margin:var(--s-5) 0;max-width:420px"><span style="width:${s}%"></span></div>

    <aside class="slab" data-accent="council" style="margin:var(--s-6) 0">
      <p class="eyebrow">Four rules</p>
      <ul class="marklist" style="margin-top:var(--s-3)">
        ${e.rules.map(i=>`<li>${m(i)}</li>`).join("")}
      </ul>
    </aside>

    ${W(e.stages.map(i=>({id:`mc-${i.n}`,label:`${i.n}. ${i.k}`})))}

    <div class="stack" style="gap:var(--s-6);margin-top:var(--s-6)">
      ${e.stages.map(i=>{const o=`ai:challenge:${i.n}`,l=K(o).trim().length>0;return`
        <section class="pb" id="mc-${i.n}" data-accent="${l?"forest":"council"}">
          <div class="pb-head">
            <span class="pb-n">${i.n}</span>
            <h2>${r(i.k)}</h2>
            ${l?'<span class="badge badge-success" style="margin-left:auto">Written</span>':""}
          </div>
          <p class="t-lede" style="max-width:74ch">${m(i.d)}</p>
          <div class="promise" style="margin:var(--s-4) 0">
            <div><div class="lab">What you must end up with</div><div class="v">${m(i.out)}</div></div>
          </div>
          ${_e(o,`Stage ${i.n} — your record`,"","Write it properly. A stage you have not written is a stage you have thought about.",4)}
        </section>`}).join("")}
    </div>

    ${a===e.stages.length?`
      <aside class="slab" data-accent="forest" style="margin-top:var(--s-8)">
        <p class="eyebrow">All ten written</p>
        <p class="t-lede">Then the test is simple: read stage 8 aloud without stage 1 to 7 in
        front of you. If you can defend the decision in your own words, and you completed
        stage 9 within 48 hours, you have finished this. Nothing here awards that — you do.</p>
        <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
          <a class="btn btn-soft" href="${h("ai/score")}">${c.chart}Re-rate yourself now</a>
          <a class="btn btn-ghost" href="${h("progress")}">${c.route}See everything you have done</a>
        </div>
      </aside>`:`
      <div class="callout callout-info" style="margin-top:var(--s-8)">
        <span class="lab">If you have not started</span>
        <p>Stage 1 is one sentence. Write it now with whatever problem is genuinely
        sitting on you this week. A hypothetical problem teaches a hypothetical skill.</p>
      </div>`}

    ${be("This is the only page here that proves anything","Everything else in this section can be read. This one cannot be faked, because stage 9 requires an irreversible action with a date, and stage 10 requires you to come back and write what actually happened.")}

    ${je()}
  </div>`;return{title:e.title,html:n,accent:"council",recent:{id:"ai:challenge",kind:"ai",title:e.title,route:"ai/challenge"}}}const bo=Object.freeze(Object.defineProperty({__proto__:null,aiBattles:wi,aiBuilder:bi,aiChallenge:Ai,aiRoleplay:fi,aiScore:Si},Symbol.toStringTag,{value:"Module"})),Ii=[{t:"Take a path",to:"paths",ic:"route",accent:"forest",counts:"Path started",time:`${z.length} to choose from`,d:"An ordered route through the material rather than a pile of links. Opening the first stage is enough to register."},{t:"Fill in a tool",to:"toolkit",ic:"tool",accent:"atlas",counts:"Tool used",time:`${q.length} in the kit`,d:"Your own words in a real worksheet — a decision, a negotiation, a conversation you have to have. It saves as you type."},{t:"Answer a scenario",to:"scenarios",ic:"puzzle",accent:"clay",counts:"Scenario answered",time:`${ee.length} scenarios`,d:"Commit to one option before you read why it works. Guessing and being wrong records the same as being right."},{t:"Finish a reading",to:"library",ic:"book",accent:"council",counts:"Piece finished",time:"Mostly 3–6 minutes each",d:"Reach the end of a single lesson and mark it done. Half-read pieces are deliberately not counted."}];async function Mi(){let e=null,t=[];try{const g=await B();e=te(g.manifest),t=g.situations&&g.situations.situations||[]}catch{}const a=e?e.units():[],s=a.filter(g=>N(g.id)),n=t.filter(g=>N(g.id)),i=ee.filter(g=>fe(g.id)),o=O.filter(g=>Ae(g.id)),l=q.filter(g=>$e(g.id)!=null),d=kt().map(Fe).filter(Boolean),p=Z.filter(g=>N(`battle:${g.id}`)),f=wt(),v=Object.entries(b.notes).sort((g,j)=>(j[1].at||0)-(g[1].at||0)),u=a.length+t.length,y=s.length+n.length,$=u?Math.round(y/u*100):0,M=y===0&&i.length===0&&o.length===0&&l.length===0&&v.length===0&&d.length===0;return{title:"Your progress",html:`
  <div class="shell band">
    ${A([{label:"Your progress"}])}

    ${E({eyebrow:"Your progress",title:M?"Nothing recorded yet":"What you have actually done",lede:M?"This page fills up as you use the site. It counts only real actions — a piece finished, a tool used, a scenario answered, a reflection written. There are no points to collect here, and nothing is awarded for visiting.":"Every number here is something you did. Nothing is awarded, nothing decays, and there is no streak to protect. It is a record, not a game.",accent:"forest",actions:M?`
        <a class="btn btn-primary btn-lg" href="${h("paths")}">${c.route}Start a path</a>
        <a class="btn btn-soft btn-lg" href="${h("situations")}">${c.compass}Find your situation</a>`:`
        ${f?`<a class="btn btn-primary" href="${h(f.route)}">${c.book}Continue: ${r(f.title)}</a>`:""}
        <a class="btn btn-soft" href="${h("saved")}">${c.bookmark}Saved (${b.saved.length})</a>
        <button class="btn btn-ghost" data-pr-export>${c.download}Export everything</button>`})}

    ${M?`
      <!-- The old empty state repeated the page lede almost word for
           word and then offered the same two buttons again, under a
           centred icon with 96px of padding above it. An empty page
           is more useful when it says exactly what would fill it, so
           it now lists the four counted actions as real entry points
           and shows what each is worth. -->
      <section class="sec" id="begin">
        ${k("Four things that would put something here")}
        ${x(Ii.map(g=>`
          <a class="card rise" href="${h(g.to)}" data-accent="${g.accent}">
            <span class="res-ic">${c[g.ic]}</span>
            <div class="card-meta"><p class="eyebrow">${r(g.counts)}</p></div>
            <h3 class="card-title">${r(g.t)}</h3>
            <p class="card-text">${r(g.d)}</p>
            <div class="card-foot card-foot-line">
              <span class="t-meta faint">${r(g.time)}</span>
            </div>
          </a>`),4)}
        <p class="t-small muted" style="margin-top:var(--s-5);max-width:70ch">Nothing else is
        counted. Opening a page, scrolling one, or reading half of one does not register —
        which is why this page stays honest.</p>
      </section>
      ${zt()}
    `:`
      ${le([{v:y,l:"pieces finished"},{v:i.length,l:"scenarios answered"},{v:l.length,l:"tools with your work in them"},{v:v.length,l:"reflections written"}])}

      <div class="meter meter-lg" style="max-width:460px;margin:var(--s-6) 0">
        <span style="width:${$}%"></span></div>
      <p class="t-meta faint" style="margin-top:-14px">${y} of ${u} readable pieces
      ${$<3?"— and that is fine. This is not a completion target.":""}</p>

      ${W([...d.length?[{id:"paths",label:"Paths"}]:[],{id:"reading",label:"Reading"},...i.length||o.length?[{id:"practice",label:"Practice"}]:[],...l.length?[{id:"tools",label:"Tools"}]:[],...v.length?[{id:"notes",label:"Reflections"}]:[],...b.recent.length?[{id:"recent",label:"Recently opened"}]:[],{id:"data",label:"Your data"}])}

      ${d.length?`
        <section class="sec" id="paths">
          ${k("Paths you are on",`<a class="btn btn-ghost btn-sm" href="${h("paths")}">All ten${c.arrow}</a>`)}
          <div style="margin-top:var(--s-4)">
            ${x(d.map(g=>Et(g,He(g),!0)),2)}
          </div>
          ${d.map(g=>ji(g)).join("")}
        </section>`:""}

      <section class="sec" id="reading">
        ${k("What you have finished")}
        ${y===0?`
          <p class="t-lede muted" style="max-width:66ch">Nothing marked finished yet. The
          button is at the top of every lesson and playbook — use it honestly, because a
          number you inflated tells you nothing.</p>`:`
          ${s.length?`
            <p class="rail-t">Lessons and chapters — ${s.length}</p>
            <div style="margin:var(--s-3) 0 var(--s-6)">
              ${x(s.slice(0,6).map(g=>Ie(g,{showTrack:!0})),3)}
            </div>
            ${s.length>6?`<p class="t-meta faint">and ${s.length-6} more.</p>`:""}`:""}
          ${n.length?`
            <p class="rail-t">Playbooks — ${n.length}</p>
            <div style="margin:var(--s-3) 0 var(--s-6)">
              ${x(n.slice(0,6).map(pe),3)}
            </div>`:""}
          ${p.length?`
            <p class="rail-t">AI battle tests passed — ${p.length} of ${Z.length}</p>
            <ul class="marklist goodlist" style="margin:var(--s-3) 0 var(--s-6);max-width:70ch">
              ${p.map(g=>`<li>Level ${g.level} — ${r(g.title)}</li>`).join("")}
            </ul>`:""}
        `}
      </section>

      ${i.length||o.length?`
        <section class="sec" id="practice">
          ${k("Practice")}
          ${i.length?`
            <p class="rail-t">Scenarios answered — ${i.length} of ${ee.length}</p>
            <div class="stack" style="gap:var(--s-2);margin:var(--s-3) 0 var(--s-6)">
              ${i.map(g=>{const j=fe(g.id),I=(g.options||[]).find(Ba=>Ba.key===(j&&j.key)),G=I?I.grade:null;return`<a class="rowitem" href="${h(`scenario/${g.id}`)}">
                  <div style="min-width:0"><strong>${r(g.title)}</strong>
                    <p class="t-small muted" style="margin:2px 0 0">You chose ${r(j&&j.key||"?")}${I?` — ${r(I.text.slice(0,90))}`:""}</p></div>
                  ${G?`<span class="badge ${G==="best"?"badge-success":G==="ok"?"badge-info":"badge-warning"}">${G==="best"?"Strongest":G==="ok"?"Workable":G==="risky"?"Risky":"Weak"}</span>`:""}
                </a>`}).join("")}
            </div>`:""}
          ${o.length?`
            <p class="rail-t">Decision trees walked — ${o.length} of ${O.length}</p>
            <div style="margin:var(--s-3) 0">${x(o.map(g=>ge(g,!0)),3)}</div>`:""}
        </section>`:""}

      ${l.length?`
        <section class="sec" id="tools">
          ${k("Tools with your work in them",`<a class="btn btn-ghost btn-sm" href="${h("tools")}">All ${q.length}${c.arrow}</a>`)}
          <p class="t-small muted" style="max-width:68ch">These hold real entries. Opening one
          picks up exactly where you stopped.</p>
          <div style="margin-top:var(--s-4)">${x(l.map(ve),3)}</div>
        </section>`:""}

      ${v.length?`
        <section class="sec" id="notes">
          ${k(`Your reflections — ${v.length}`)}
          <p class="t-small muted" style="max-width:68ch">The most valuable thing on this page.
          Reading is forgettable; what you wrote about it is not.</p>
          <div class="stack" style="gap:var(--s-3);margin-top:var(--s-4)">
            ${v.slice(0,12).map(([g,j])=>Ci(g,j,e)).join("")}
          </div>
          ${v.length>12?`<p class="t-meta faint" style="margin-top:var(--s-4)">and ${v.length-12} more, kept with the pages they belong to.</p>`:""}
        </section>`:""}

      ${b.recent.length?`
        <section class="sec" id="recent">
          ${k("Recently opened")}
          <div class="stack" style="gap:var(--s-2);margin-top:var(--s-4)">
            ${b.recent.slice(0,10).map(g=>`
              <a class="rowitem" href="${h(g.route)}">
                <div style="min-width:0"><strong>${r(g.title)}</strong>
                  <p class="t-small muted" style="margin:2px 0 0">${r(g.kind||"")}</p></div>
                ${N(g.id)?`<span class="t-meta faint">${c.circleCheck}</span>`:""}
              </a>`).join("")}
          </div>
        </section>`:""}

      ${zt()}
    `}
  </div>`,accent:"forest",mount:Li}}function ji(e,t){const s=pt(e).filter(o=>o.kind==="lesson"||o.kind==="situation").map(o=>o.id),n=V(s),i=s.length?Math.round(n/s.length*100):0;return`
  <div style="margin-top:var(--s-5)">
    <div class="between" style="gap:var(--s-3);align-items:baseline">
      <p class="t-small"><a href="${h(`path/${e.id}`)}"><strong>${r(e.title)}</strong></a></p>
      <span class="t-meta faint">${n}/${s.length}</span>
    </div>
    <div class="meter" style="margin-top:6px"><span style="width:${i}%"></span></div>
  </div>`}function _i(e,t){const[a,...s]=e.split(":"),n=s.join(":");switch(a){case"lesson":{const i=t&&t.unit(n);return i?{route:`read/${i.track}/${i.id}`,label:i.title,what:"Lesson"}:null}case"situation":return{route:`situation/${n}`,label:n.replace(/-/g," "),what:"Playbook"};case"skill":return{route:`skill/${n}`,label:(F.find(i=>i.id===n)||{}).name||n,what:"Skill"};case"skill-practice":return{route:`skill/${n}`,label:(F.find(i=>i.id===n)||{}).name||n,what:"Skill practice"};case"scenario":return{route:`scenario/${n}`,label:(Gt(n)||{}).title||n,what:"Scenario"};case"tree":return{route:`tree/${n}`,label:(Jt(n)||{}).title||n,what:"Decision tree"};case"path":{const[i,o]=n.split(":"),l=Fe(i);return{route:`path/${i}`,label:l?`${l.title}${o?` — stage ${o}`:""}`:i,what:"Path reflection"}}case"tool":return{route:`tool/${n}`,label:(ua(n)||{}).name||n,what:"Tool"};case"battle-note":return{route:"ai/battles",label:`Battle test ${n}`,what:"AI battle test"};case"entry":{const[i,o]=n.split("#");return{route:`vault/${i}/${o}`,label:(o||"").replace(/-/g," "),what:"Vault entry"}}case"ai-problem":return{route:`ai/problem/${n}`,label:n.replace(/^p-/,"").replace(/-/g," "),what:"AI problem"};case"ai-office":return{route:`ai/office/${n}`,label:`AI for ${n}`,what:"AI at work"};case"ai":return{route:`ai/${n.split(":")[0]}`,label:n.replace(/[:-]/g," "),what:"AI Intelligence"};default:return null}}function Ci(e,t,a){const s=_i(e,a),n=t.at?new Date(t.at).toLocaleDateString(void 0,{day:"numeric",month:"short"}):"",i=String(t.text||"");return`
  <article class="card card-flat">
    <div class="between" style="gap:var(--s-3);align-items:baseline">
      <p class="eyebrow" style="margin:0">${r(s?s.what:"Note")}</p>
      ${n?`<span class="t-meta faint">${r(n)}</span>`:""}
    </div>
    ${s?`<h3 class="card-title" style="margin-top:4px"><a href="${h(s.route)}">${r(s.label)}</a></h3>`:`<h3 class="card-title" style="margin-top:4px">${r(e)}</h3>`}
    <p class="card-text clamp-3" style="margin-top:var(--s-2);white-space:pre-wrap">${r(i.slice(0,320))}${i.length>320?"…":""}</p>
  </article>`}function zt(){return`
  <section class="sec" id="data">
    ${k("Your data")}
    <p class="t-lede" style="max-width:70ch">Everything on this site is stored in your own
    browser. There is no account, no server, and nothing is sent anywhere. That also means
    clearing your browser data clears this, and it does not follow you to another device
    unless you export it yourself.</p>

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
      <button class="btn btn-soft" data-pr-export>${c.download}Download a copy</button>
      <label class="btn btn-soft" for="pr-import" style="cursor:pointer">${c.inbox}Restore from a file</label>
      <input id="pr-import" type="file" accept="application/json" data-pr-import
        class="sr" aria-label="Restore your data from a JSON file">
      <button class="btn btn-ghost" data-pr-reset>${c.trash}Erase everything</button>
    </div>
    <p class="t-meta faint" style="margin-top:var(--s-3)">Erasing is immediate and cannot be
    undone. Export first if you are unsure.</p>
  </section>`}function Li(e){const t=async s=>{if(s.target.closest("[data-pr-export]")){const n=gs(),i=JSON.stringify(n,null,2);try{const o=new Blob([i],{type:"application/json"}),l=URL.createObjectURL(o),d=document.createElement("a");d.href=l,d.download=`the-resources-by-anik-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(d),d.click(),d.remove(),setTimeout(()=>URL.revokeObjectURL(l),1e3),U("Downloaded")}catch{const l=await bt(i);U(l?"Copied to your clipboard instead":"Could not export")}return}if(s.target.closest("[data-pr-reset]")){if(!window.confirm(`This erases everything: what you finished, everything saved, every reflection and all tool entries. It cannot be undone.

Erase it all?`))return;fs(),U("Everything erased"),de("progress?fresh");return}},a=s=>{const n=s.target.closest("[data-pr-import]");if(!n||!n.files||!n.files[0])return;const i=n.files[0],o=new FileReader;o.onload=()=>{try{ys(JSON.parse(String(o.result))),U("Restored"),de("progress?fresh")}catch(l){U(l&&l.message?l.message:"That file could not be read")}n.value=""},o.onerror=()=>{U("That file could not be read"),n.value=""},o.readAsText(i)};return e.addEventListener("click",t),e.addEventListener("change",a),()=>{e.removeEventListener("click",t),e.removeEventListener("change",a)}}async function qi(){const e=b.saved,t=new Map;for(const n of e){const i=n.kind||"other";t.has(i)||t.set(i,[]),t.get(i).push(n)}const a={lesson:"Lessons and chapters",situation:"Playbooks",skill:"Skills",tool:"Tools",scenario:"Scenarios",tree:"Decision trees",path:"Learning paths",collection:"Vault collections",entry:"Vault entries",ai:"AI Intelligence",page:"Pages",other:"Other"};return{title:"Saved",html:`
  <div class="shell band">
    ${A([{label:"Saved"}])}

    ${E({eyebrow:"Saved",title:e.length?`${T(e.length,"thing")} you kept`:"Nothing saved yet",lede:e.length?"Anything with a star on it lands here. It is a shortlist you built deliberately, not a history — for that, look at recently opened on your progress page.":"The star button appears at the top of every lesson, playbook, skill, tool and scenario. Use it when something is worth coming back to, and this becomes your own shortlist.",accent:"amber",actions:`<a class="btn btn-soft" href="${h("progress")}">${c.chart}Your progress</a>`})}

    ${e.length?[...t.entries()].map(([n,i])=>`
        <section class="sec">
          ${k(a[n]||n,`<span class="t-meta faint">${i.length}</span>`)}
          <div class="stack" style="gap:var(--s-2);margin-top:var(--s-4)">
            ${i.map(o=>`
              <div class="rowitem">
                <a href="${h(o.route)}" style="min-width:0;flex:1">
                  <strong>${r(o.title)}</strong>
                  ${N(o.id)?'<p class="t-small muted" style="margin:2px 0 0">Finished</p>':""}
                </a>
                ${C(o.id,"Save")}
              </div>`).join("")}
          </div>
        </section>`).join(""):`
      <section class="sec">
        ${ie("Your shortlist is empty","Start somewhere real rather than browsing — a situation you are actually in, or a path that orders the material for you.",`<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
            <a class="btn btn-primary" href="${h("situations")}">${c.compass}Find your situation</a>
            <a class="btn btn-soft" href="${h("paths")}">${c.route}Take a path</a>
          </div>`)}
      </section>`}
  </div>`,accent:"amber"}}const $o=Object.freeze(Object.defineProperty({__proto__:null,default:Mi,saved:qi},Symbol.toStringTag,{value:"Module"})),ht=["situation","lesson","scenario","tree","tool","path","skill","ai","entry","collection","prompt","page"];async function Ri(e){const t=(e.query.q||"").trim(),a=e.query.kind||"all";let s=!1,n=null;try{await As(),s=Is()}catch(d){n=d}if(n)return{title:"Search",accent:"atlas",html:`<div class="shell band">
        ${A([{label:"Search"}])}
        ${P("Search could not load its index","The search file did not come back. You can still browse by situation, skill or path while this is down.")}
        <div class="row-wrap" style="gap:var(--s-3);justify-content:center;margin-top:var(--s-5)">
          <a class="btn btn-soft" href="${h("situations")}">${c.compass}Situations</a>
          <a class="btn btn-soft" href="${h("library")}">${c.book}The library</a>
        </div>
      </div>`};const i=t.length>=2?St(t,{kind:a,limit:60}):[],o=t.length>=2?pa(t):{},l=`
  <div class="shell band">
    ${A([{label:"Search"}])}

    ${E({eyebrow:"Search",title:t?`Results for “${r(t)}”`:"Search everything",lede:t?"":`Every lesson, playbook, skill, tool, scenario, decision tree, vault entry and prompt — ${s?T(Ms(),"document"):"the whole library"} in one index. Describe the situation in your own words; you do not need to guess our vocabulary.`,accent:"atlas"})}

    <form class="field" style="max-width:640px" data-s-form role="search">
      <label for="s-q" class="sr">Search the whole site</label>
      <div class="searchbar">
        ${c.search}
        <input class="input" id="s-q" type="search" name="q" data-s-q autocomplete="off"
          value="${r(t)}" placeholder="my boss shouted at me, two job offers, say no…">
        ${t?`<a class="btn btn-icon btn-ghost" href="${h("search")}" aria-label="Clear the search">${c.close}</a>`:""}
      </div>
      <span class="hint">Results appear as you type. Whole phrases work better than single words.</span>
    </form>

    <div data-s-body>${Da(t,a,i,o)}</div>
  </div>`;return{title:t?`“${t}” · Search`:"Search",html:l,accent:"atlas",mount:d=>Ni(d,a)}}function Da(e,t,a,s){return e.length<2?Kt():`
  <div class="filters" role="group" aria-label="Filter results by kind" style="margin-top:var(--s-5)">
    ${["all",...ht.filter(i=>s[i])].map(i=>{const o=i==="all"?{label:"Everything",icon:c.layers}:Ue[i]||{label:i},l=i==="all"?s.all||0:s[i]||0;return`<a class="chip ${t===i?"chip-solid":""}"
        href="${h(`search?q=${encodeURIComponent(e)}${i==="all"?"":`&kind=${i}`}`)}">
        ${i==="all"?c.layers:c[o.icon]||c.circle}${r(o.label)}
        <span class="fcount">${l}</span></a>`}).join("")}
  </div>

  <p class="t-meta faint" style="margin-top:var(--s-4)">
    ${a.length?`${T(a.length,"result")}${s.all>a.length?` of ${s.all}`:""}`:"No results"}
  </p>

  ${a.length?Oi(a,e):`
    ${ie(`Nothing matches “${e}”`,"Try describing what is happening instead of naming a topic — “my landlord wants me out” finds more than “tenancy”. Single unusual words are the hardest thing for any search to place.",`<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
        <a class="btn btn-soft" href="${h("situations")}">${c.compass}Browse all situations</a>
        <a class="btn btn-ghost" href="${h("skills")}">${c.target}Browse by skill</a>
      </div>`)}
    ${Kt("Or try one of these")}`}`}function Oi(e,t){const a=new Map;for(const n of e)a.has(n.kind)||a.set(n.kind,[]),a.get(n.kind).push(n);return`<div style="margin-top:var(--s-5)">
    ${[...a.keys()].sort((n,i)=>{const o=ht.indexOf(n),l=ht.indexOf(i);return(o<0?99:o)-(l<0?99:l)}).map(n=>{const i=Ue[n]||{label:n},o=a.get(n);return`
      <section class="ovl-group">
        <div class="rule-head">
          <h2 class="t-subtitle" style="margin:0">${r(i.label)}</h2>
          <span class="t-meta faint">${o.length}</span>
        </div>
        <div class="ovl-res" style="margin-top:var(--s-3)">
          ${o.map(l=>Pi(l,t)).join("")}
        </div>
      </section>`}).join("")}
  </div>`}function Pi(e,t){const a=Ue[e.kind]||{},s=e.sub||e.group||"";return`
  <a class="res" href="${h(e.route)}">
    <span class="res-ic">${c[a.icon]||c.circle}</span>
    <span class="res-b">
      <span class="res-t">${Bt(r(e.title),t)}</span>
      ${s?`<span class="res-s">${Bt(r(s),t)}</span>`:""}
    </span>
    <span class="res-k">${r(a.label||e.kind)}</span>
  </a>`}function Kt(e="People arrive looking for these"){const t=b.recent.slice(0,5);return`
  <section class="sec">
    ${k(e)}
    <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
      ${js.map(a=>`<a class="chip" href="${h(`search?q=${encodeURIComponent(a)}`)}">${c.search}${r(a)}</a>`).join("")}
    </div>

    ${t.length?`
      <div style="margin-top:var(--s-7)">
        ${k("Or pick up something you had open")}
        <div class="stack" style="gap:var(--s-2);margin-top:var(--s-4)">
          ${t.map(a=>`<a class="rowitem" href="${h(a.route)}">
            <div style="min-width:0"><strong>${r(a.title)}</strong>
              <p class="t-small muted" style="margin:2px 0 0">${r(a.kind||"")}</p></div>
            <span class="t-meta faint">${c.arrow}</span></a>`).join("")}
        </div>
      </div>`:""}
  </section>`}function Ni(e,t){const a=e.querySelector("[data-s-q]"),s=e.querySelector("[data-s-body]"),n=e.querySelector("[data-s-form]");if(!a||!s)return;const i=()=>{const p=a.value.trim(),f=p.length>=2?St(p,{kind:t,limit:60}):[],v=p.length>=2?pa(p):{};s.innerHTML=Da(p,t,f,v)},o=()=>{const p=a.value.trim(),f=p?`search?q=${encodeURIComponent(p)}${t!=="all"?`&kind=${t}`:""}`:"search";cs(f)},l=me(()=>{i(),o()},180),d=p=>{p.preventDefault(),o()};return a.addEventListener("input",l),n&&n.addEventListener("submit",d),!a.value&&window.matchMedia("(min-width: 900px)").matches&&requestAnimationFrame(()=>a.focus()),()=>{a.removeEventListener("input",l),n&&n.removeEventListener("submit",d)}}const wo=Object.freeze(Object.defineProperty({__proto__:null,default:Ri},Symbol.toStringTag,{value:"Module"}));export{nt as $,Yi as A,Ji as B,ye as C,N as D,Ui as E,to as F,Fi as G,Ki as H,c as I,_ as J,Ue as K,$e as L,Pt as M,ia as N,oa as O,io as P,oo as Q,lo as R,js as S,ro as T,co as U,ho as V,po as W,uo as X,mo as Y,vo as Z,L as _,Qi as a,go as a0,yo as a1,fo as a2,bo as a3,$o as a4,wo as a5,Di as b,Gi as c,me as d,r as e,As as f,de as g,h,Zi as i,b as j,H as k,pa as l,so as m,St as n,Bi as o,no as p,Bt as q,Vi as r,zi as s,Hi as t,eo as u,U as v,Xi as w,ps as x,bt as y,ao as z};
