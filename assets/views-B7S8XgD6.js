const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/decision-matrix-DPMACF3t.js","assets/kit-DV3I2Ncm.js","assets/data-DpGBRXZo.js","assets/priority-matrix-2WPwjxSD.js","assets/task-decomposition-dL0Frh-n.js","assets/risk-analyzer-CFcwlxLm.js","assets/opportunity-cost-DPVcakn9.js","assets/goal-planner-DJe1tgfB.js","assets/habit-planner-BRBwHv7H.js","assets/meeting-planner-CIlwZcy5.js","assets/conversation-planner-D9mUiXyJ.js","assets/negotiation-planner-CTO2io1A.js","assets/learning-planner-BP7rDy7X.js","assets/career-decision-Dz6xkmMm.js","assets/personal-swot-CstgxGPL.js","assets/credibility-checker-l1bAk9RP.js","assets/problem-canvas-DlToeEjb.js","assets/reflection-C0Kq4bK2.js","assets/scenario-simulator-CZvGQ828.js"])))=>i.map(i=>d[i]);
import{S as U,D as X,a as ae,T as N,P as he,b as oe,s as xe,p as De,c as lt,d as de,e as Be,f as qa,g as rt,h as ct,L as dt,i as ht,j as Ra,k as Oa,l as Pa,m as Ht,t as Vt,n as Yt,A as Na,o as pt,M as ut,q as et,B as K,r as zt,E as Wa,u as Ke,v as Da,w as tt,x as Ba,y as Kt,z as Zt,C as Fa,F as Ua,G as Ha,H as Va,V as Ya,I as za,J as Ka,K as Za,N as Z,R as Ga,O as G,Q as jt}from"./data-DpGBRXZo.js";const Ja="modulepreload",Qa=function(e){return"/resources/"+e},Ct={},_=function(t,a,s){let n=Promise.resolve();if(a&&a.length>0){let d=function(p){return Promise.all(p.map(y=>Promise.resolve(y).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");n=d(a.map(p=>{if(p=Qa(p),p in Ct)return;Ct[p]=!0;const y=p.endsWith(".css"),g=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const u=document.createElement("link");if(u.rel=y?"stylesheet":Ja,y||(u.as="script"),u.crossOrigin="",u.href=p,l&&u.setAttribute("nonce",l),document.head.appendChild(u),y)return new Promise((v,b)=>{u.addEventListener("load",v),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return n.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},Mi=(e,t=document)=>t.querySelector(e),at=(e,t=document)=>[...t.querySelectorAll(e)],r=(e="")=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),j=e=>Number(e||0).toLocaleString("en-US");function m(e=""){let t=r(e);return t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/(^|[\s(\[—–-])\*([^*\n]+)\*(?=$|[\s.,;:!?)\]—–-])/g,"$1<em>$2</em>"),t=t.replace(/(^|\s)_([^_\n]{2,})_(?=$|[\s.,;:!?)])/g,"$1<em>$2</em>"),t=t.replace(/\[\[(.+?)\]\]/g,"<strong>$1</strong>"),t}const W=(e="")=>String(e).replace(/[*_`]|\[\[|\]\]/g,"");function se(e="",t=160){const a=W(e).replace(/\s+/g," ").trim();return a.length<=t?a:a.slice(0,a.lastIndexOf(" ",t)||t).trimEnd()+"…"}const x=(e,t,a=t+"s")=>`${j(e)} ${e===1?t:a}`,ce=e=>Math.max(1,Math.round((e||0)/200));function pe(e,t=180){let a;return(...s)=>{clearTimeout(a),a=setTimeout(()=>e(...s),t)}}function Lt(e){const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild}function ji(e,t,a,s,n){e.addEventListener(t,i=>{const o=i.target.closest(a);o&&e.contains(o)&&s(i,o)},n)}async function mt(e){try{return await navigator.clipboard.writeText(e),!0}catch{try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.appendChild(t),t.select();const a=document.execCommand("copy");return t.remove(),a}catch{return!1}}}let Ce;function F(e,t=""){Ce||(Ce=Lt('<div class="toasts" role="status" aria-live="polite"></div>'),document.body.appendChild(Ce));const s=Lt(`<div class="toast">${t==="ok"?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>':""}<span>${r(e)}</span></div>`);Ce.appendChild(s),setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),240)},2100)}let Le;function Ci(e=document){if(matchMedia("(prefers-reduced-motion: reduce)").matches){at(".rise",e).forEach(t=>t.classList.add("in"));return}Le||(Le=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("in"),Le.unobserve(a.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.04})),at(".rise",e).forEach((t,a)=>{t.style.transitionDelay=`${Math.min(a,6)*42}ms`,Le.observe(t)})}function Li(e){const t='a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])',a=document.activeElement;function s(n){if(n.key!=="Tab")return;const i=at(t,e).filter(d=>d.offsetParent!==null);if(!i.length)return;const o=i[0],l=i[i.length-1];n.shiftKey&&document.activeElement===o?(n.preventDefault(),l.focus()):!n.shiftKey&&document.activeElement===l&&(n.preventDefault(),o.focus())}return e.addEventListener("keydown",s),()=>{e.removeEventListener("keydown",s),a&&a.focus&&a.focus()}}const w=(e,t="")=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${t}>${e}</svg>`,c={search:w('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),menu:w('<path d="M3 6h18M3 12h18M3 18h18"/>'),close:w('<path d="M18 6 6 18M6 6l12 12"/>'),chev:w('<path d="m9 18 6-6-6-6"/>'),chevDown:w('<path d="m6 9 6 6 6-6"/>'),arrow:w('<path d="M5 12h14m-6-7 7 7-7 7"/>'),back:w('<path d="M19 12H5m6 7-7-7 7-7"/>'),up:w('<path d="m18 15-6-6-6 6"/>'),external:w('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),sun:w('<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.5 1.5m11.2 11.2 1.5 1.5m0-14.2-1.5 1.5M6.4 17.6l-1.5 1.5"/>'),moon:w('<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z"/>'),home:w('<path d="M3 10.5 12 3l9 7.5M5.5 9.4V20h13V9.4"/>'),compass:w('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8Z"/>'),pen:w('<path d="M12 20h9M16.4 3.6a2.1 2.1 0 0 1 3 3L7.5 18.5 3 20l1.5-4.5Z"/>'),globe:w('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>'),council:w('<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9.5" r="2.4"/><path d="M15 19.6a5 5 0 0 1 6.5-4.4"/>'),vault:w('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="10" cy="12" r="3.2"/><path d="M10 8.8v-1M10 16.2v1M6.8 12h-1M14.2 12h1M17 8.5h1.6M17 15.5h1.6"/>'),book:w('<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22Z"/><path d="M4 17.5h16"/>'),layers:w('<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>'),list:w('<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>'),grid:w('<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>'),check:w('<path d="M20 6 9 17l-5-5"/>',' stroke-width="2.6"'),circleCheck:w('<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-4.8"/>'),circle:w('<circle cx="12" cy="12" r="9"/>'),plus:w('<path d="M12 5v14M5 12h14"/>'),minus:w('<path d="M5 12h14"/>'),trash:w('<path d="M4 7h16M9 7V4.8A.8.8 0 0 1 9.8 4h4.4a.8.8 0 0 1 .8.8V7M6.5 7l.8 12.2a.9.9 0 0 0 .9.8h7.6a.9.9 0 0 0 .9-.8L17.5 7"/>'),copy:w('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'),star:w('<path d="m12 3.2 2.7 5.7 6.2.9-4.5 4.4 1.1 6.2-5.5-3-5.5 3 1.1-6.2L3.1 9.8l6.2-.9Z"/>'),starFill:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 3.2 2.7 5.7 6.2.9-4.5 4.4 1.1 6.2-5.5-3-5.5 3 1.1-6.2L3.1 9.8l6.2-.9Z"/></svg>',reset:w('<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1M3.2 4v4.3h4.3"/>'),download:w('<path d="M12 3v12m0 0 4.2-4.2M12 15l-4.2-4.2M4 19h16"/>'),filter:w('<path d="M3 6h18M6.5 12h11M10 18h4"/>'),shuffle:w('<path d="M17 3h4v4M21 3l-6.5 6.5M3 21l6.5-6.5M17 21h4v-4M3 3l7 7"/>'),play:w('<path d="M7 4.5 19 12 7 19.5Z"/>'),spark:w('<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.8 6.8l2.4 2.4M14.8 14.8l2.4 2.4M17.2 6.8l-2.4 2.4M9.2 14.8l-2.4 2.4"/>'),bolt:w('<path d="M13 2 4 14h6l-1 8 9-12h-6Z"/>'),tool:w('<path d="M14.5 6.5a3.5 3.5 0 0 0 4.6 4.6l-8 8a2.8 2.8 0 0 1-4-4l8-8a3.5 3.5 0 0 0-.6-.6Z"/><path d="m5 5 3 3"/>'),target:w('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>'),flag:w('<path d="M5 21V4m0 0h9l-1 3 1 3H5"/>'),chart:w('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),route:w('<circle cx="6" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.6 6h5.2a3.4 3.4 0 0 1 0 6.8H10a3.4 3.4 0 0 0 0 6.8h5.4"/>'),alert:w('<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5m0 3v.5"/>',' stroke-width="2"'),shield:w('<path d="M12 3 4.5 6v6c0 4.4 3.1 8 7.5 9 4.4-1 7.5-4.6 7.5-9V6Z"/><path d="m9 12 2.2 2.2L15.4 10"/>'),scale:w('<path d="M12 3v18M6 7h12M6 7 3 14h6ZM18 7l-3 7h6ZM8 21h8"/>'),brain:w('<path d="M9.5 4.5A3 3 0 0 0 6.6 8a3 3 0 0 0-1.1 5.3A3 3 0 0 0 8 18.5a2.5 2.5 0 0 0 4-2V5.5a1 1 0 0 0-1-1ZM14.5 4.5a3 3 0 0 1 2.9 3.5 3 3 0 0 1 1.1 5.3 3 3 0 0 1-2.5 5.2 2.5 2.5 0 0 1-4-2V5.5a1 1 0 0 1 1-1Z"/>'),chat:w('<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/>'),clock:w('<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.2 2"/>'),calendar:w('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8.5 3v4M15.5 3v4"/>'),money:w('<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/>'),heart:w('<path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.4a4.4 4.4 0 0 1 7.5 3c0 5-7.5 9.6-7.5 9.6Z"/>'),users:w('<circle cx="9" cy="8" r="3.4"/><path d="M2.6 20a6.4 6.4 0 0 1 12.8 0"/><path d="M17 5.5a3.2 3.2 0 0 1 0 6M18 20a6 6 0 0 0-2-4.4"/>'),key:w('<circle cx="8" cy="15" r="3.6"/><path d="m10.6 12.4 8-8 2.4 2.4-1.6 1.6 1.6 1.6-2.2 2.2-1.6-1.6-2 2"/>'),eye:w('<path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>'),cpu:w('<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/>'),inbox:w('<path d="M3.5 13 6 5h12l2.5 8v6.5h-17Z"/><path d="M3.5 13h5l1 2.2h5l1-2.2h5"/>'),file:w('<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7Z"/><path d="M14 3v4h4"/>'),bookmark:w('<path d="M6.5 3.5h11v17l-5.5-3.6L6.5 20.5Z"/>'),question:w('<circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.6 2.3c-.8.5-1.2 1-1.2 1.9M12 16.8h.01"/>'),sliders:w('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2.2"/><circle cx="10" cy="17" r="2.2"/>'),puzzle:w('<path d="M9.6 3.5a1.9 1.9 0 0 1 3.8 0V5h3.1a1 1 0 0 1 1 1v3.1h1.5a1.9 1.9 0 0 1 0 3.8H17.5V16a1 1 0 0 1-1 1h-3.1v1.5a1.9 1.9 0 0 1-3.8 0V17H6.5a1 1 0 0 1-1-1v-3.1H4a1.9 1.9 0 0 1 0-3.8h1.5V6a1 1 0 0 1 1-1h3.1Z"/>'),lightbulb:w('<path d="M9 17.5h6M10 21h4M12 3a6 6 0 0 0-3.4 10.9c.5.4.9 1 .9 1.6h5c0-.6.4-1.2.9-1.6A6 6 0 0 0 12 3Z"/>'),refresh:w('<path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1M20.8 4v4.3h-4.3"/>'),mic:w('<rect x="9" y="3" width="6" height="10" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7"/>')},vt=e=>c[e]||c.book,Gt=[];let ee=null,$e=null,Ze=!1,Ge=null;function _i(e,t){const a=e.split("/").filter(Boolean);Gt.push({pattern:e,parts:a,handler:t})}function qi(e){$e=e}function Jt(e=location.hash){let t=String(e).replace(/^#\/?/,""),a="";const s=t.indexOf("#");s>-1&&(a=t.slice(s+1),t=t.slice(0,s));let n={};const i=t.indexOf("?");i>-1&&(n=Object.fromEntries(new URLSearchParams(t.slice(i+1))),t=t.slice(0,i));const o=t.split("/").filter(Boolean).map(decodeURIComponent);return{parts:o,query:n,hash:a,path:o.join("/")}}function Xa(e){for(const t of Gt){if(t.parts.length!==e.length)continue;const a={};let s=!0;for(let n=0;n<t.parts.length;n++){const i=t.parts[n];if(i.startsWith(":"))a[i.slice(1)]=e[n];else if(i!==e[n]){s=!1;break}}if(s)return{route:t,params:a}}return null}const Ri=()=>ee;function h(e){return"#/"+String(e).replace(/^#?\/?/,"")}function re(e,{replace:t=!1}={}){const a=h(e);if(location.hash===a){Te();return}t?history.replaceState(null,"",a):location.hash=a,t&&Te()}function es(e){const t=h(e);if(location.hash!==t&&(history.replaceState(null,"",t),ee)){const a=Jt(t);ee={...ee,...a,params:ee.params}}}const Qt=new Map;function ts(){ee&&Qt.set(ee.path,window.scrollY)}async function Te(){const e=Jt();if(Ze){Ge=!0;return}Ze=!0;const t=Xa(e.parts),a={...e,params:t?t.params:{}},s=ee;ee=a;try{const n=t?await t.route.handler(a):{title:"Not found",html:null,notFound:!0};$e&&await $e(n,a,s)}catch(n){console.error("[route]",n),$e&&await $e({error:n,title:"Something went wrong"},a,s)}finally{Ze=!1,Ge&&(Ge=!1,Te())}}function Oi(){addEventListener("hashchange",()=>{ts(),Te()}),Te()}function Pi(e,t){if(e.hash){const i=document.getElementById(e.hash);if(i){i.scrollIntoView({block:"start",behavior:"auto"});return}}if(t&&t.path===e.path)return;const s=Qt.get(e.path),n=typeof s=="number"&&!e.query.fresh;window.scrollTo({top:n?s:0,behavior:"auto"})}const Je="rha:",E={get(e,t){try{const a=localStorage.getItem(Je+e);return a==null?t:JSON.parse(a)}catch{return t}},set(e,t){try{return localStorage.setItem(Je+e,JSON.stringify(t)),!0}catch{return!1}},del(e){try{localStorage.removeItem(Je+e)}catch{}}},st=new Set,Ni=e=>(st.add(e),()=>st.delete(e)),q=e=>st.forEach(t=>{try{t(e)}catch{}}),f={done:new Set(E.get("done",[])),saved:E.get("saved",[]),recent:E.get("recent",[]),notes:E.get("notes",{}),tools:E.get("tools",{}),scenarios:E.get("scenarios",{}),trees:E.get("trees",{}),paths:E.get("paths",{}),battles:E.get("battles",{}),scale:E.get("scale",1),theme:E.get("theme",null),seen:E.get("seen",!1),version:1};function Wi(){const e=f.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return document.documentElement.dataset.theme=e,Xt(e),e}function Xt(e){const t=document.querySelector("meta[name=theme-color]");t&&(t.content=e==="dark"?"#12110d":"#f4f1ea")}function Di(){const e=document.documentElement.dataset.theme==="dark"?"light":"dark";return document.documentElement.dataset.theme=e,f.theme=e,E.set("theme",e),Xt(e),q("theme"),e}function as(e){return f.scale=Math.min(1.35,Math.max(.85,Math.round(e*100)/100)),E.set("scale",f.scale),document.documentElement.style.setProperty("--reader-scale",f.scale),q("scale"),f.scale}const Bi=()=>document.documentElement.style.setProperty("--reader-scale",f.scale),P=e=>f.done.has(e);function Fi(e){return f.done.has(e)?f.done.delete(e):f.done.add(e),E.set("done",[...f.done]),q("done"),f.done.has(e)}function ss(e,t){t?f.done.add(e):f.done.delete(e),E.set("done",[...f.done]),q("done")}const D=e=>e.reduce((t,a)=>t+(f.done.has(a)?1:0),0),ge=e=>f.saved.some(t=>t.id===e);function Ui(e){const t=f.saved.findIndex(a=>a.id===e.id);return t>-1?f.saved.splice(t,1):f.saved.unshift({...e,at:Date.now()}),f.saved=f.saved.slice(0,400),E.set("saved",f.saved),q("saved"),ge(e.id)}function Hi(e){!e||!e.id||(f.recent=[{...e,at:Date.now()},...f.recent.filter(t=>t.id!==e.id)].slice(0,40),E.set("recent",f.recent),q("recent"))}const gt=()=>f.recent.find(e=>e.kind==="lesson")||f.recent[0]||null;function Vi(e,t){t&&t.trim()?f.notes[e]={text:t.trim(),at:Date.now()}:delete f.notes[e],E.set("notes",f.notes),q("notes")}const H=e=>(f.notes[e]||{}).text||"";function ea(e,t){f.tools[e]={data:t,at:Date.now()},E.set("tools",f.tools),q("tools")}const fe=(e,t=null)=>(f.tools[e]||{}).data??t;function ta(e){delete f.tools[e],E.set("tools",f.tools),q("tools")}const aa=()=>Object.keys(f.tools).length;function ns(e,t){f.scenarios[e]={picked:t,at:Date.now()},E.set("scenarios",f.scenarios),q("scenarios")}const Se=e=>f.scenarios[e]||null,sa=()=>Object.keys(f.scenarios).length;function Qe(e,t){f.trees[e]={path:t,at:Date.now()},E.set("trees",f.trees),q("trees")}const Ee=e=>f.trees[e]||null;function is(e){f.paths[e]||(f.paths[e]={startedAt:Date.now()}),E.set("paths",f.paths),q("paths")}function os(e){delete f.paths[e],E.set("paths",f.paths),q("paths")}const nt=e=>!!f.paths[e],yt=()=>Object.keys(f.paths);function ls(e,t,a){const s=f.battles[e];(!s||t>=s.score)&&(f.battles[e]={score:t,answers:a,at:Date.now()}),E.set("battles",f.battles),q("battles")}const _t=()=>Object.keys(f.battles).length;function Yi(){f.seen=!0,E.set("seen",!0)}function rs(){return{app:"The Resources by Anik",exportedAt:new Date().toISOString(),version:f.version,done:[...f.done],saved:f.saved,recent:f.recent,notes:f.notes,tools:f.tools,scenarios:f.scenarios,trees:f.trees,paths:f.paths,battles:f.battles}}function cs(e){if(!e||typeof e!="object")throw new Error("Not a valid backup file.");Array.isArray(e.done)&&(f.done=new Set(e.done),E.set("done",e.done));for(const t of["saved","recent"])Array.isArray(e[t])&&(f[t]=e[t],E.set(t,e[t]));for(const t of["notes","tools","scenarios","trees","paths","battles"])e[t]&&typeof e[t]=="object"&&(f[t]=e[t],E.set(t,e[t]));q("import")}function ds(){for(const e of["done","saved","recent","notes","tools","scenarios","trees","paths","battles","seen"])E.del(e);f.done=new Set,f.saved=[],f.recent=[],f.notes={},f.tools={},f.scenarios={},f.trees={},f.paths={},f.battles={},f.seen=!1,q("reset")}const hs=e=>"/resources/"+String(e).replace(/^\/+/,""),Xe=new Map,_e=new Map;class qt extends Error{constructor(t,a,s){super(t),this.name="DataError",this.url=a,this.status=s}}async function ne(e){const t=hs(e);if(Xe.has(t))return Xe.get(t);if(_e.has(t))return _e.get(t);const a=(async()=>{let s;try{s=await fetch(t,{headers:{accept:"application/json"}})}catch{throw new qt("Could not reach the content files. Check your connection and reload.",t,0)}if(!s.ok)throw new qt(s.status===404?"That page is not in this library.":`Content failed to load (${s.status}).`,t,s.status);return s.json()})();_e.set(t,a);try{const s=await a;return Xe.set(t,s),s}finally{_e.delete(t)}}const ps=()=>ne("content/manifest.json"),ft=()=>ne("content/situations.json"),us=e=>ne(`content/situation/${encodeURIComponent(e)}.json`),ms=e=>ne(`content/lesson/${encodeURIComponent(e)}.json`),na=e=>ne(`content/vault/${encodeURIComponent(e)}.json`),Fe=(e,t)=>e[t]||e.docs||e,vs=()=>ne("content/tools.json").then(e=>Fe(e,"tools")),bt=()=>ne("content/prompts.json").then(e=>Fe(e,"prompts")),gs=()=>ne("content/missions.json").then(e=>Fe(e,"missions")),ia=()=>ne("content/search.json").then(e=>Fe(e,"docs"));async function B(){const[e,t]=await Promise.all([ps(),ft()]);return{manifest:e,situations:t}}function zi(){const e=()=>ia().catch(()=>{});"requestIdleCallback"in window?requestIdleCallback(e,{timeout:4e3}):setTimeout(e,2200)}function J(e){const t=new Map(e.index.map(i=>[i.id,i])),a=new Map;for(const i of e.index)a.has(i.track)||a.set(i.track,[]),a.get(i.track).push(i);const s=new Map(e.vault.map(i=>[i.id,i])),n=new Map(e.tracks.map(i=>[i.id,i]));return{manifest:e,unit:i=>t.get(i),units:()=>e.index,ofTrack:i=>a.get(i)||[],track:i=>n.get(i),tracks:()=>e.tracks,groups:i=>e.groups[i]||[],group:(i,o)=>(e.groups[i]||[]).find(l=>l.id===o),collection:i=>s.get(i),collections:()=>e.vault,collectionsOfKind:i=>e.vault.filter(o=>o.kind===i),vaultGroups:()=>e.vaultGroups,stats:()=>e.stats,neighbours(i){const o=t.get(i);if(!o)return{prev:null,next:null};const l=a.get(o.track)||[],d=l.findIndex(p=>p.id===i);return{prev:d>0?l[d-1]:null,next:d>-1&&d<l.length-1?l[d+1]:null}},groupUnits(i,o){const l=(e.groups[i]||[]).find(d=>d.id===o);return l?(l.lessonIds||[]).map(d=>t.get(d)).filter(Boolean):[]}}}const Ue={lesson:{label:"Lessons",icon:"book",w:1},situation:{label:"Situations",icon:"alert",w:1.5},scenario:{label:"Scenarios",icon:"target",w:1.25},tree:{label:"Decision tools",icon:"route",w:1.2},entry:{label:"Vault entries",icon:"vault",w:.95},collection:{label:"Collections",icon:"layers",w:1},tool:{label:"Tools",icon:"tool",w:1.2},ai:{label:"AI workflows",icon:"cpu",w:1.3},prompt:{label:"Prompts",icon:"spark",w:.85},path:{label:"Learning paths",icon:"route",w:1.15},page:{label:"Sections",icon:"grid",w:.9}},ys=new Set("a an and are as at be but by for from how i if in into is it its me my no not of on or that the their them then there they this to too was what when where which who why will with you your do does am can cant could should would about like just get got have has had".split(" ")),we=e=>W(String(e||"")).toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9\s-]/g," ").replace(/\s+/g," ").trim();function it(e){return e.length>5&&e.endsWith("ing")?e.slice(0,-3):e.length>4&&e.endsWith("ies")?e.slice(0,-3)+"y":e.length>4&&e.endsWith("es")?e.slice(0,-2):e.length>3&&e.endsWith("s")&&!e.endsWith("ss")?e.slice(0,-1):e.length>5&&e.endsWith("ed")?e.slice(0,-2):e}const Ne=e=>we(e).split(" ").filter(t=>t.length>1&&!ys.has(t)).map(it),Rt={boss:["manager","supervisor","lead"],manager:["boss","supervisor"],fired:["redundant","laid","layoff","sack","dismissed","terminated"],quit:["resign","leave","notice"],rent:["landlord","evict","housing","tenancy"],money:["financial","debt","cash","salary","pay","budget"],raise:["salary","promotion","negotiate","pay"],angry:["shouting","furious","aggressive","yelling","mad"],scam:["fraud","phishing","scammer","con"],ai:["chatgpt","llm","claude","gemini","copilot","prompt"],interview:["recruiter","hiring","job","application"],cv:["resume","curriculum"],sad:["depressed","grief","low"],panic:["anxiety","anxious","attack"],decide:["decision","choice","choose","option"],focus:["attention","distraction","procrastination"],learn:["study","revise","exam","memory"],meeting:["agenda","standup","review"],email:["inbox","message","reply"],no:["refuse","decline","boundary"],time:["deadline","schedule","busy","overload"]};function fs(e){const t=new Set(e);for(const a of e){const s=Rt[a];s&&s.forEach(n=>t.add(it(n)));for(const[n,i]of Object.entries(Rt))i.includes(a)&&t.add(it(n))}return[...t]}let le=null,qe=null;async function bs(e=[]){return le||qe||(qe=(async()=>{const[t,a,s,n]=await Promise.all([ia().catch(()=>[]),ft().catch(()=>({situations:[]})),vs().catch(()=>[]),bt().catch(()=>[])]),i=[];for(const l of t){const d=l.t==="l"?"lesson":l.t==="c"?"collection":"entry";let p;if(d==="lesson")p=`read/${l.tr}/${l.id}`;else if(d==="collection")p=`vault/${l.id}`;else{const[y,g]=String(l.id).split("#");p=g?`vault/${y}/${g}`:`vault/${y}`}i.push({kind:d,title:l.ti||"",sub:l.su||l.g||"",route:p,group:l.g||"",body:`${l.ti||""} ${l.su||""} ${l.g||""} ${l.k||""} ${l.x||""}`})}for(const l of a.situations||[])i.push({kind:"situation",title:l.title,sub:l.categoryTitle||"",route:`situation/${l.id}`,group:l.categoryTitle||"",sev:l.severity,body:`${l.title} ${l.categoryTitle||""} ${(l.tags||[]).join(" ")} ${l.tool||""} ${l.lede||""}`});const o=new Set;for(const l of s){const d=we(l.name);!d||o.has(d)||(o.add(d),i.push({kind:"tool",title:l.name,sub:`${l.skill||""}`,route:`read/${l.track}/${l.lessonId}`,group:"Named technique",body:`${l.name} ${l.skill||""} ${l.result||""} ${l.lessonTitle||""}`}))}for(const l of n)i.push({kind:"prompt",title:l.source?`Prompt — ${l.source}`:"Prompt",sub:l.section||"",route:`ai/prompts?q=${encodeURIComponent((l.source||"").slice(0,40))}`,group:l.section||"Prompts",body:`${l.text||""} ${l.source||""} ${l.section||""}`});i.push(...e);for(const l of i)l._t=new Set(Ne(l.title)),l._b=new Set(Ne(l.body));return le=i,i})(),qe)}const $s=()=>!!le,ws=()=>le?le.length:0;function $t(e,{kind:t="all",limit:a=40}={}){if(!le)return[];const s=we(e);if(s.length<2)return[];const n=Ne(e);if(!n.length)return[];const i=fs(n),o=s.length>5?s:null,l=[];for(const d of le){if(t!=="all"&&d.kind!==t)continue;let p=0,y=0;for(const u of i){const b=n.includes(u)?1:.42;if(d._t.has(u))p+=12*b,y++;else if(d._b.has(u))p+=4*b,y++;else if(u.length>=4){let S=!1;for(const Y of d._t)if(Y.startsWith(u)){S=!0;break}if(S){p+=6*b,y++;continue}for(const Y of d._b)if(Y.startsWith(u)){S=!0;break}S&&(p+=1.6*b,y++)}}if(!y)continue;const g=n.filter(u=>d._t.has(u)||d._b.has(u)||[...d._t,...d._b].some(v=>u.length>=4&&v.startsWith(u))).length;if(!(n.length>1&&g===0)){if(o){const u=we(d.title);u===s?p+=40:u.startsWith(s)?p+=22:u.includes(s)?p+=14:we(d.body).includes(s)&&(p+=7)}p*=(Ue[d.kind]||{w:1}).w,d.sev==="critical"&&(p*=1.1),p+=Math.max(0,26-d.title.length)*.05,l.push({doc:d,score:p})}}return l.sort((d,p)=>p.score-d.score||d.doc.title.length-p.doc.title.length),l.slice(0,a).map(d=>d.doc)}function oa(e){const t=$t(e,{limit:400}),a={all:t.length};for(const s of t)a[s.kind]=(a[s.kind]||0)+1;return a}function Ot(e,t){const a=Ne(t).filter(n=>n.length>2);if(!a.length)return e;const s=new RegExp("("+a.map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")","gi");return e.replace(s,"<mark>$1</mark>")}const ks=["my boss shouted at me","impossible deadline","how do I say no","two job offers","asking for a raise","I made a mistake at work","cant pay rent","is this information true","use AI to write a hard email","I cant focus","difficult customer","prepare for an interview"],R=[{id:"decision-matrix",name:"Decision Matrix",group:"Deciding",icon:"scale",accent:"forest",blurb:"Score real options against criteria you weight yourself."},{id:"risk-analyzer",name:"Risk Analyzer",group:"Deciding",icon:"alert",accent:"signal",blurb:"Rank what could go wrong, then separate recoverable from not."},{id:"opportunity-cost",name:"Opportunity Cost Analyzer",group:"Deciding",icon:"money",accent:"council",blurb:"Price what you give up, not just what you spend."},{id:"career-decision",name:"Career Decision Tool",group:"Deciding",icon:"route",accent:"atlas",blurb:"Weigh a role change on what compounds, not what flatters."},{id:"scenario-simulator",name:"Scenario Simulator",group:"Deciding",icon:"shuffle",accent:"atlas",blurb:"Run a plan through good, likely and bad futures before committing."},{id:"priority-matrix",name:"Priority Matrix",group:"Working",icon:"grid",accent:"clay",blurb:"Sort what you are carrying by importance against urgency."},{id:"task-decomposition",name:"Task Decomposition",group:"Working",icon:"layers",accent:"forest",blurb:"Break something too big to start into steps you can actually begin."},{id:"meeting-planner",name:"Meeting Planner",group:"Communicating",icon:"users",accent:"atlas",blurb:"Establish whether the meeting is needed, then make it short."},{id:"conversation-planner",name:"Conversation Planner",group:"Communicating",icon:"chat",accent:"clay",blurb:"Prepare the opening line, the outcome, and your answer to pushback."},{id:"negotiation-planner",name:"Negotiation Planner",group:"Communicating",icon:"scale",accent:"council",blurb:"Set your number, your walk-away, and the non-money axes."},{id:"goal-planner",name:"Goal Planner",group:"Building",icon:"target",accent:"forest",blurb:"Turn an intention into a measure, milestones and a weekly action."},{id:"habit-planner",name:"Habit Planner",group:"Building",icon:"refresh",accent:"clay",blurb:"Design a habit around a trigger, a floor and a fourteen-day log."},{id:"learning-planner",name:"Learning Planner",group:"Building",icon:"brain",accent:"council",blurb:"Plan a skill around an output, not a syllabus."},{id:"personal-swot",name:"Personal SWOT",group:"Building",icon:"compass",accent:"forest",blurb:"An honest inventory that ends in two concrete moves."},{id:"reflection",name:"Reflection Tool",group:"Building",icon:"pen",accent:"council",blurb:"Review a period honestly and leave with one change."},{id:"credibility-checker",name:"Information Credibility Checker",group:"Thinking",icon:"shield",accent:"atlas",blurb:"Work out how much weight a claim can safely carry."},{id:"problem-canvas",name:"Problem-Solving Canvas",group:"Thinking",icon:"puzzle",accent:"clay",blurb:"State the problem properly, then find where it actually moves."}],Pt=[{id:"Deciding",blurb:"For when there is a choice to make and no obvious answer."},{id:"Working",blurb:"For when there is too much and no order to it."},{id:"Communicating",blurb:"For the conversations that decide things."},{id:"Building",blurb:"For capability that accumulates rather than resets."},{id:"Thinking",blurb:"For working out what is actually true and actually wrong."}],la=e=>R.find(t=>t.id===e)||null;R.map(e=>e.id);const xs={"decision-matrix":()=>_(()=>import("./decision-matrix-DPMACF3t.js"),__vite__mapDeps([0,1,2])),"priority-matrix":()=>_(()=>import("./priority-matrix-2WPwjxSD.js"),__vite__mapDeps([3,1,2])),"task-decomposition":()=>_(()=>import("./task-decomposition-dL0Frh-n.js"),__vite__mapDeps([4,1,2])),"risk-analyzer":()=>_(()=>import("./risk-analyzer-CFcwlxLm.js"),__vite__mapDeps([5,1,2])),"opportunity-cost":()=>_(()=>import("./opportunity-cost-DPVcakn9.js"),__vite__mapDeps([6,1,2])),"goal-planner":()=>_(()=>import("./goal-planner-DJe1tgfB.js"),__vite__mapDeps([7,1,2])),"habit-planner":()=>_(()=>import("./habit-planner-BRBwHv7H.js"),__vite__mapDeps([8,1,2])),"meeting-planner":()=>_(()=>import("./meeting-planner-CIlwZcy5.js"),__vite__mapDeps([9,1,2])),"conversation-planner":()=>_(()=>import("./conversation-planner-D9mUiXyJ.js"),__vite__mapDeps([10,1,2])),"negotiation-planner":()=>_(()=>import("./negotiation-planner-CTO2io1A.js"),__vite__mapDeps([11,1,2])),"learning-planner":()=>_(()=>import("./learning-planner-BP7rDy7X.js"),__vite__mapDeps([12,1,2])),"career-decision":()=>_(()=>import("./career-decision-Dz6xkmMm.js"),__vite__mapDeps([13,1,2])),"personal-swot":()=>_(()=>import("./personal-swot-CstgxGPL.js"),__vite__mapDeps([14,1,2])),"credibility-checker":()=>_(()=>import("./credibility-checker-l1bAk9RP.js"),__vite__mapDeps([15,1,2])),"problem-canvas":()=>_(()=>import("./problem-canvas-DlToeEjb.js"),__vite__mapDeps([16,1,2])),reflection:()=>_(()=>import("./reflection-C0Kq4bK2.js"),__vite__mapDeps([17,1,2])),"scenario-simulator":()=>_(()=>import("./scenario-simulator-CZvGQ828.js"),__vite__mapDeps([18,1,2]))};async function Ts(e){const t=xs[e];if(!t)throw new Error(`Unknown tool: ${e}`);return(await t()).default}function A(e){return`<nav class="crumbs" aria-label="Breadcrumb">
    ${e.map((t,a)=>{const s=a===e.length-1,n=r(W(t.label));return s||!t.to?`<span${s?' aria-current="page"':""}>${n}</span>`:`<a href="${h(t.to)}">${n}</a>${c.chev}`}).join("")}
  </nav>`}function I({eyebrow:e,title:t,lede:a,meta:s,actions:n,accent:i}){return`<header class="phead"${i?` data-accent="${i}"`:""}>
    ${e?`<p class="eyebrow">${r(e)}</p>`:""}
    <h1 class="t-hero">${m(t)}</h1>
    ${a?`<p class="t-lede muted" style="max-width:64ch">${m(a)}</p>`:""}
    ${s?`<div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">${s}</div>`:""}
    ${n?`<div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-6)">${n}</div>`:""}
  </header>`}const k=(e,t="")=>`<div class="sec-head"><h2>${m(e)}</h2>${t?`<div class="grow row" style="justify-content:flex-end">${t}</div>`:""}</div>`,ke=(e,t="")=>`<span class="chip">${t}${r(e)}</span>`,We=e=>{const t=String(e||"").toLowerCase(),a=t?t[0].toUpperCase()+t.slice(1):"Unrated";return`<span class="sev-${t||"low"}">${r(a)}</span>`},Q=(e,t="",a="")=>`
  <div class="state">
    <span class="state-icon">${c.inbox}</span>
    <h3>${r(e)}</h3>
    ${t?`<p>${r(t)}</p>`:""}
    ${a||""}
  </div>`,O=(e,t="",a=!0)=>`
  <div class="state">
    <span class="state-icon">${c.alert}</span>
    <h3>${r(e)}</h3>
    ${t?`<p>${r(t)}</p>`:""}
    <div class="row-wrap" style="gap:var(--s-3);justify-content:center;margin-top:var(--s-5)">
      ${a?'<button class="btn btn-soft" data-reload>Try again</button>':""}
      <a class="btn btn-ghost" href="${h("")}">Go to the start</a>
    </div>
  </div>`,Ss=(e="Loading")=>`
  <div class="stack" aria-busy="true" aria-live="polite">
    <span class="sr">${r(e)}</span>
    <div class="skel skel-line" style="width:38%"></div>
    <div class="skel skel-line" style="width:82%"></div>
    <div class="skel skel-line" style="width:70%"></div>
    <div class="skel" style="height:120px;margin-top:var(--s-4)"></div>
  </div>`;function Ie(e,{showTrack:t=!1,n:a=null}={}){const s=P(e.id);return`<a class="card rise" href="${h(`read/${e.track}/${e.id}`)}" data-accent="${e.accent||"forest"}">
    <div class="card-head">
      <div style="min-width:0">
        ${a!=null?`<span class="card-n">${a}</span>`:""}
        ${t&&e.trackTitle?`<p class="eyebrow">${r(e.trackTitle)}</p>`:""}
        <h3 class="card-title clamp-3">${m(e.title)}</h3>
      </div>
      ${s?`<span class="badge badge-success" title="Completed">${c.check}</span>`:""}
    </div>
    ${e.subtitle?`<p class="card-text clamp-2">${r(se(e.subtitle,120))}</p>`:""}
    <div class="card-foot">
      ${e.skill?`<span class="t-meta faint">${r(se(e.skill,40))}</span>`:""}
      <span class="t-meta faint">${ce(e.wordCount)} min</span>
    </div>
  </a>`}function ue(e){return`<a class="card card-lead rise" href="${h(`situation/${e.id}`)}" data-accent="${e.accent||"clay"}">
    <div class="card-head">
      <div style="min-width:0">
        <p class="eyebrow">${r(e.categoryTitle||"")}</p>
        <h3 class="card-title clamp-2">${m(e.title)}</h3>
      </div>
      ${ge(e.id)?`<span class="badge badge-info" title="Saved">${c.bookmark}</span>`:""}
    </div>
    ${e.lede?`<p class="card-text clamp-3">${r(se(e.lede,150))}</p>`:""}
    <div class="card-foot">
      ${We(e.severity)}
      <span class="t-meta faint">${ce(e.wordCount)} min</span>
    </div>
  </a>`}function He(e,t=null){return`<a class="card rise" href="${h(`skill/${e.id}`)}" data-accent="${e.accent||"forest"}">
    <div class="card-head">
      <div style="min-width:0">
        <p class="eyebrow">${r(e.domainTitle||"")}</p>
        <h3 class="card-title clamp-2">${r(e.name)}</h3>
      </div>
      <span class="badge badge-neutral">${r(e.levelLabel||"")}</span>
    </div>
    <p class="card-text clamp-3">${r(se(e.blurb,150))}</p>
    ${t?`<div class="card-foot card-foot-line">
      <span class="t-meta faint">${x(t.units,"lesson")}</span>
      <span class="t-meta faint">${x(t.situations,"situation")}</span>
    </div>`:""}
  </a>`}function me(e){return`<a class="card rise" href="${h(`tool/${e.id}`)}" data-accent="${e.accent}">
    <div class="card-head">
      <div style="min-width:0">
        <p class="eyebrow">${r(e.group)}</p>
        <h3 class="card-title clamp-2">${r(e.name)}</h3>
      </div>
      <span class="res-ic">${c[e.icon]||c.tool}</span>
    </div>
    <p class="card-text clamp-3">${r(e.blurb)}</p>
  </a>`}const Es=e=>e==null?"":typeof e=="number"?`about ${x(e,"week")}`:r(e);function wt(e,t,a=!1){return`<a class="card rise" href="${h(`path/${e.id}`)}" data-accent="${e.accent}">
    <div class="card-head">
      <div style="min-width:0">
        <span class="card-n">${e.number}</span>
        <h3 class="card-title clamp-2">${r(e.title)}</h3>
      </div>
      ${a?'<span class="badge badge-success">Started</span>':""}
    </div>
    <p class="card-text clamp-3">${r(se(e.lede,160))}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${Es(e.weeks)}</span>
      <span class="t-meta faint">${x(t.total,"item")}</span>
    </div>
  </a>`}function kt(e){return`<a class="card rise" href="${h(`vault/${e.id}`)}" data-accent="council">
    <div class="card-head">
      <div style="min-width:0">
        <p class="eyebrow">${r(e.kind||"")}</p>
        <h3 class="card-title clamp-2">${m(e.title)}</h3>
      </div>
    </div>
    ${e.banner?`<p class="card-text clamp-2">${r(se(e.banner,120))}</p>`:""}
    <div class="card-foot">
      <span class="t-meta faint">${x(e.entryCount||(e.entries||[]).length,"entry","entries")}</span>
      <span class="t-meta faint">${ce(e.wordCount)} min</span>
    </div>
  </a>`}function Ae(e,t=!1){return`<a class="card rise" href="${h(`scenario/${e.id}`)}" data-accent="${e.accent||"clay"}">
    <div class="card-head">
      <div style="min-width:0">
        <p class="eyebrow">${r(e.domain)}</p>
        <h3 class="card-title clamp-2">${r(e.title)}</h3>
      </div>
      ${t?`<span class="badge badge-success" title="Answered">${c.check}</span>`:""}
    </div>
    <p class="card-text clamp-3">${r(se(W((e.setup||[])[0]||""),150))}</p>
    <div class="card-foot">
      <span class="badge badge-neutral">${r(e.difficulty)}</span>
      <span class="t-meta faint">${x((e.options||[]).length,"option")}</span>
    </div>
  </a>`}function ve(e,t=!1){return`<a class="card rise" href="${h(`tree/${e.id}`)}" data-accent="${e.accent||"atlas"}">
    <div class="card-head">
      <div style="min-width:0"><h3 class="card-title clamp-2">${r(e.title)}</h3></div>
      ${t?`<span class="badge badge-info" title="You have used this">${c.check}</span>`:""}
    </div>
    <p class="card-text clamp-3">${r(se(e.blurb,150))}</p>
  </a>`}function ra(e,t){return`<a class="card card-pad-lg rise" href="${h(`track/${e.id}`)}" data-accent="${e.accent}">
    <div class="card-head">
      <div style="min-width:0">
        <span class="res-ic" style="margin-bottom:var(--s-3)">${vt(e.icon)}</span>
        <h3 class="card-title">${m(e.name||e.title||"")}</h3>
      </div>
    </div>
    ${e.tagline?`<p class="eyebrow">${r(e.tagline)}</p>`:""}
    ${e.description||e.blurb||e.subtitle?`<p class="card-text clamp-3">${r(se(e.description||e.blurb||e.subtitle,170))}</p>`:""}
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${x(t.units||0,"piece")}</span>
      <span class="t-meta faint">${j(t.words||0)} words</span>
    </div>
  </a>`}function Is(e){const t=/^\s*\*\*([^*]{2,60}?)\s*(?:—|--|-|:)\s*\*\*\s*/.exec(e)||/^\s*\*\*([^*]{2,60}?)\*\*\s*(?:—|--|:)\s*/.exec(e);if(t)return{label:t[1].trim(),body:e.slice(t[0].length)};const a=/^\s*([A-Z][A-Z \u2014\-']{2,40})\s*(?:—|--|:)\s+/.exec(e);return a?{label:a[1].trim(),body:e.slice(a[0].length)}:{label:"Note",body:e}}const As=[[/\b(warning|danger|never|do not|don't|risk|trap|mistake|careful|avoid|red flag)\b/i,"danger"],[/\b(caution|watch|note that|remember|careful|limit)\b/i,"warning"],[/\b(idea|principle|key|insight|rule|law|truth)\b/i,"info"],[/\b(do this|try|practice|move|action|win|result)\b/i,"success"]];function ca(e){if(!e||!e.type)return"";switch(e.type){case"p":return`<p>${m(e.text||"")}</p>`;case"h3":return`<h3>${m(e.text||"")}</h3>`;case"ul":return`<ul>${(e.items||[]).map(t=>`<li>${m(t)}</li>`).join("")}</ul>`;case"ol":return`<ol>${(e.items||[]).map(t=>`<li>${m(t)}</li>`).join("")}</ol>`;case"quote":return`<blockquote><p>${m(e.text||"")}</p></blockquote>`;case"code":return`<pre><code>${r(e.text||"")}</code></pre>`;case"table":{const t=e.headers||[],a=e.rows||[];return`<figure><table>
        ${t.length?`<thead><tr>${t.map(s=>`<th>${m(s)}</th>`).join("")}</tr></thead>`:""}
        <tbody>${a.map(s=>`<tr>${(s||[]).map(n=>`<td>${m(n)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></figure>`}case"callout":{const{label:t,body:a}=Is(e.text||""),s=`${t} ${a}`,n=(As.find(([i])=>i.test(s))||[null,""])[1];return`<div class="callout${n?" callout-"+n:""}">
        <span class="lab">${r(t)}</span><p>${m(a)}</p></div>`}case"steps":return`<ol class="moves">${(e.items||[]).map(t=>`<li><b>${m(t.move||"")}</b><span>${m(t.detail||"")}</span></li>`).join("")}</ol>`;case"lines":return`<div class="lines">${(e.items||[]).map(t=>`
        <div class="line">
          <div class="when">${r(t.when||"Say")}</div>
          <div class="say">${m(t.say||"")}</div>
          <button class="btn-icon copy" data-copy="${r(W(t.say||""))}" aria-label="Copy this line" title="Copy">${c.copy}</button>
        </div>`).join("")}</div>`;case"bad":return`<ul class="marklist badlist">${(e.items||[]).map(t=>`<li>${m(t)}</li>`).join("")}</ul>`;case"good":return`<ul class="marklist goodlist">${(e.items||[]).map(t=>`<li>${m(t)}</li>`).join("")}</ul>`;default:return e.text?`<p>${m(e.text)}</p>`:""}}const xt=e=>(e||[]).map(ca).join(""),ie=e=>`<div class="stats">${e.map(t=>`<div class="stat"><b>${r(String(t.v))}</b><span>${r(t.l)}</span></div>`).join("")}</div>`,V=e=>`<nav class="jump" aria-label="Jump to section">${e.map(t=>`<a href="#${r(t.id)}">${r(W(t.label))}</a>`).join("")}</nav>`,C=(e,t="Save")=>`
  <button class="btn btn-ghost btn-sm" data-save="${r(e)}" aria-pressed="${ge(e)}">
    ${ge(e)?c.starFill:c.star}<span>${ge(e)?"Saved":r(t)}</span>
  </button>`,Ve=e=>`
  <button class="btn btn-ghost btn-sm" data-done="${r(e)}" aria-pressed="${P(e)}">
    ${P(e)?c.circleCheck:c.circle}<span>${P(e)?"Completed":"Mark complete"}</span>
  </button>`,Ms=e=>`<div class="promise">${e.map(t=>`<div><div class="lab">${r(t.lab)}</div><div class="v">${m(t.v)}</div></div>`).join("")}</div>`,ye=(e,t)=>`
  <div class="alarm">
    <div class="h">${c.alert}${r(e)}</div>
    <p>${m(t)}</p>
  </div>`,da=({prev:e,next:t})=>!e&&!t?"":`<nav class="pager" aria-label="Previous and next">
    ${e?`<a href="${h(e.to)}"><span class="dir">Previous</span><span class="ti">${m(e.label)}</span></a>`:"<span></span>"}
    ${t?`<a class="next" href="${h(t.to)}"><span class="dir">Next</span><span class="ti">${m(t.label)}</span></a>`:"<span></span>"}
  </nav>`,T=(e,t=3)=>`<div class="grid g-${t}">${e.join("")}</div>`,te=(e,t)=>`
  <div class="prompt">
    <div class="prompt-h"><span class="t">${r(e)}</span>
      <button class="btn btn-ghost btn-sm" data-copy="${r(t)}">${c.copy}Copy</button></div>
    <pre>${r(t)}</pre>
  </div>`,js=[{t:"Specific beats general",d:"Advice that applies to everyone applies to no one. Every page here is about a named situation with named constraints, because that is the only kind of advice you can act on at 9am on a Tuesday."},{t:"Trade-offs beat rules",d:"Almost nothing is universally right. “Always be honest” and “never burn a bridge” collide constantly. What you need is the shape of the trade-off and the cost of each side, not a slogan."},{t:"Actions beat motivation",d:"Motivation is a feeling and it does not survive Wednesday. Every substantial page ends with something to do, in a defined order, small enough to actually start."},{t:"Examples beat abstraction",d:"A principle you cannot picture is a principle you will not use. Where there is a conversation to have, there are words you can borrow."},{t:"Edge cases are the real test",d:"Advice that only works when everyone is reasonable is decoration. What happens when they shout, or lie, or hold the power — that is the part worth writing down."},{t:"You keep the judgement",d:"Not the tools, not the trees, and certainly not an AI model. Every structure here narrows the question and shows you the cost. The decision, and the consequence, stay yours."}],Cs=[["A course","There is no enrolment, no cohort, no certificate and no completion target. Read one page and leave; it still worked."],["A motivation site","Nothing here is designed to make you feel capable. It is designed to make you more capable, which is a slower and less pleasant process."],["A prompt directory","The AI section has prompts in it, but a prompt without the method is a lottery ticket. The method is the product."],["A quiz that flatters you","The scenarios are deliberately difficult and several have no clean answer. The self-assessment is designed to be uncomfortable."],["A gamified app","No points, no streaks, no badges, no levels to grind. Your progress page counts real actions only, and nothing decays if you stop."],["A live AI product","There is no model running here. The AI section teaches you to use whichever assistant you already have, well."]];async function Ls(){let e=null;try{const{manifest:a}=await B();e=J(a).stats()}catch{}return{title:"About",html:`
  <div class="shell band">
    ${A([{label:"About"}])}

    ${I({eyebrow:"About",title:"The Resources by Anik",lede:"A practical system for becoming more capable in the real world — at work, in your career, in difficult conversations, with money, with information, and with AI. Not theory about capability. The specific moves, in the specific situations, with the specific words.",accent:"forest"})}

    ${e?ie([{v:j(e.totalUnits),l:"lessons and chapters"},{v:51,l:"situation playbooks"},{v:R.length,l:"working tools"},{v:j(e.totalWords),l:"words"}]):""}

    ${V([{id:"why",label:"Why it exists"},{id:"beliefs",label:"What it believes"},{id:"inside",label:"What is inside"},{id:"notes",label:"What it is not"},{id:"limits",label:"Honest limits"},{id:"privacy",label:"Your data"}])}

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
        ${js.map(a=>`
          <div class="card card-flat">
            <h3 class="card-title">${r(a.t)}</h3>
            <p class="card-text">${r(a.d)}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="sec" id="inside">
      <div class="sec-head"><h2>What is inside</h2></div>
      <div class="stack" style="gap:var(--s-3);margin-top:var(--s-5)">
        ${[["Situations","51 playbooks for things that are happening right now — from a boss shouting to a landlord serving notice to someone collapsing in front of you.","situations",c.compass],["Skills",`${U.length} named capabilities across ${X.length} areas of life, each one connecting the reading, the playbooks, the tools and the practice that build it.`,"skills",c.target],["The library",e?`${j(e.totalUnits)} lessons and chapters across four tracks, plus ${j(e.totalCollections)} reference collections holding ${j(e.totalEntries)} entries.`:"Four tracks of lessons plus a reference vault.","library",c.book],["The toolkit",`${R.length} tools that genuinely compute — decision matrices, priority grids, risk analysis, negotiation planning. None of them are mock-ups.`,"tools",c.tool],["Practice",`${ae.length} hard scenarios with real consequences and ${N.length} decision trees you walk one question at a time.`,"scenarios",c.puzzle],["Learning paths",`${he.length} ordered routes through everything, so the size of the library never becomes the reason you did nothing.`,"paths",c.route],["AI Intelligence",`The method for using AI without handing over your judgement — the workflow, context engineering, verification, leverage, and ${oe.length} real problems worked through.`,"ai",c.cpu]].map(([a,s,n,i])=>`
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
        ${Cs.map(([a,s])=>`
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
        ${ye("This is not professional advice","Nothing here is legal, medical, financial or psychological advice, and it cannot be. Several playbooks deal with situations — police questioning, eviction, a diagnosis, someone in danger — where the correct first move is to contact a qualified professional or an emergency service. Each of those pages says so, at the top, before anything else.")}

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
  </div>`,accent:"forest"}}async function _s(e){const t=e&&e.path||"";return{title:"Page not found",html:`
  <div class="shell band">
    ${I({eyebrow:"Nothing at this address",title:"That page does not exist",lede:t?`There is nothing at “${r(t)}”. Either the link was wrong, or something moved. Both are fixable from here.`:"Either the link was wrong, or something moved. Both are fixable from here.",accent:"amber"})}

    ${Q("Try one of these instead","",`<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
        <a class="btn btn-primary" href="${h("")}">${c.home}The start</a>
        <a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>
        <a class="btn btn-soft" href="${h("situations")}">${c.compass}Situations</a>
        <a class="btn btn-ghost" href="${h("library")}">${c.book}The library</a>
      </div>`)}

    <section class="sec">
      ${k("The main entrances")}
      <div style="margin-top:var(--s-4)">
        ${T([["Something is happening now","The 51 situation playbooks.","situations",c.compass],["I want to get better at something",`${U.length} skills across ${X.length} areas.`,"skills",c.target],["I need to work something out",`${R.length} tools that actually compute.`,"tools",c.tool],["I want a route through it",`${he.length} ordered learning paths.`,"paths",c.route],["I want to use AI properly","The method, not the hype.","ai",c.cpu],["Show me everything","The full library and vault.","library",c.book]].map(([s,n,i,o])=>`
          <a class="card rise" href="${h(i)}">
            <div class="card-head"><div style="min-width:0">
              <span class="res-ic" style="margin-bottom:var(--s-3)">${o}</span>
              <h3 class="card-title clamp-2">${r(s)}</h3>
            </div></div>
            <p class="card-text">${r(n)}</p>
          </a>`),3)}
      </div>
    </section>
  </div>`,accent:"amber",notFound:!0}}const Ki=Object.freeze(Object.defineProperty({__proto__:null,default:Ls,notFound:_s},Symbol.toStringTag,{value:"Module"})),qs=[{label:"My boss shouted at me",to:"situation/work-boss-shouting"},{label:"Impossible deadline",to:"situation/work-impossible-deadline"},{label:"I have to say no",to:"tree/say-no"},{label:"Two job offers",to:"tree/opportunity"},{label:"Is this information true?",to:"tree/trust-info"},{label:"I was blamed publicly",to:"situation/work-blamed-publicly"},{label:"A hard email to write",to:"ai/problem/p-email-hard"},{label:"Should I quit?",to:"tree/quit"}],Rs=[{t:"The four-second gap",d:"The single move that prevents most expensive mistakes.",to:"read/mastery/a-1.1",ic:"clock"},{t:"Say no without damage",d:"A decision tree that ends in a sentence you can send.",to:"tree/say-no",ic:"route"},{t:"Score a real decision",d:"Weight your own criteria and see what is actually driving it.",to:"tool/decision-matrix",ic:"scale"},{t:"Check a claim before repeating it",d:"Eight questions and an honest confidence reading.",to:"tool/credibility-checker",ic:"shield"},{t:"Ask AI properly, once",d:"The context block that changes output more than any prompt trick.",to:"ai/context",ic:"cpu"},{t:"One genuinely hard scenario",d:"No obvious answer. The best option still costs something.",to:"scenario/late-ask",ic:"target"}];async function Os(){const{manifest:e,situations:t}=await B(),a=J(e),s=a.stats(),n=t.situations||[],i=t.categories||[],o=a.units().map(b=>b.id),l=D(o),d=D(n.map(b=>b.id)),p=yt(),y=gt(),g=zs(n),u=["staying-steady","priorities","saying-no","verify"].map(b=>U.find(S=>S.id===b)).filter(Boolean);return{title:null,html:`
    ${Ps(s,n.length)}

    ${Ns()}

    ${Ws(y,p,l,d)}

    <section class="band" id="situations">
      <div class="shell">
        ${k("Start from what is happening",`<a class="btn btn-ghost btn-sm" href="${h("situations")}">All ${n.length} situations${c.arrow}</a>`)}
        <p class="t-lede muted" style="margin-bottom:var(--s-6)">Nine categories, ${n.length} situations, each written as the sequence of moves rather than as advice. Every one names the point where it stops being something you handle alone.</p>
        ${T(g.map(ue),3)}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-6)">
          ${i.map(b=>`<a class="chip" href="${h("situations?cat="+b.id)}" data-accent="${b.accent}">${r(b.title)}<span class="faint">&nbsp;${n.filter(S=>S.category===b.id).length}</span></a>`).join("")}
        </div>
      </div>
    </section>

    <section class="band band-tight" id="skills">
      <div class="shell">
        ${k("Or from what you want to get better at",`<a class="btn btn-ghost btn-sm" href="${h("skills")}">All ${U.length} skills${c.arrow}</a>`)}
        <p class="t-lede muted" style="margin-bottom:var(--s-6)">A situation is something that happens to you. A skill is something you can get better at. ${X.length} areas, ${U.length} skills, each with the signals that you need it and the practice that builds it.</p>
        ${T(u.map(b=>He({...b,domainTitle:(X.find(S=>S.id===b.domain)||{}).title,accent:(X.find(S=>S.id===b.domain)||{}).accent,levelLabel:b.level==="foundation"?"Foundation":b.level==="core"?"Core":"Advanced"},{units:(b.units||[]).length,situations:(b.situations||[]).length})),4)}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-6)">
          ${X.map(b=>`<a class="chip" href="${h("skills/"+b.id)}" data-accent="${b.accent}">${r(b.title)}<span class="faint">&nbsp;${xe(b.id).length}</span></a>`).join("")}
        </div>
      </div>
    </section>

    ${Ds()}

    ${Bs()}

    ${Fs()}

    ${Us(p)}

    ${Hs(a,s)}

    ${Vs()}

    ${Ys()}
  `,accent:"forest"}}function Ps(e,t){return`
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
            <div class="stat"><b>${j(e.totalUnits)}</b><span>lessons &amp; chapters</span></div>
            <div class="stat"><b>${t}</b><span>situation playbooks</span></div>
            <div class="stat"><b>17</b><span>working tools</span></div>
            <div class="stat"><b>${j(e.totalWords)}</b><span>words, all offline</span></div>
          </div>
        </div>

        <aside class="now" data-accent="clay" aria-labelledby="now-h">
          <div class="now-h">${c.alert}<h2 class="t-label" id="now-h" style="color:var(--ac)">If it is happening right now</h2></div>
          <p class="t-small muted">Go straight to the moves. No preamble, no theory — the first thing to do, the
            words to use, and what makes it worse.</p>
          <div class="now-tags">
            ${qs.map(a=>`<a class="now-tag" href="${h(a.to)}">${r(a.label)}</a>`).join("")}
          </div>
          <div class="hr" style="margin-block:var(--s-5)"></div>
          <a class="btn btn-soft" href="${h("search")}" style="width:100%">${c.search}Describe it in your own words</a>
        </aside>
      </div>
    </div>
  </section>`}function Ns(){return`
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
  </section>`}function Ws(e,t,a,s,n){const i=a+s,o=t.length?De(t[0]):null;if(!e&&!o&&!i)return"";let l="";if(o){const p=lt(o),y=D(p.map(u=>u.id)),g=p.length?Math.round(y/p.length*100):0;l=`
      <div class="card card-flat" data-accent="${o.accent}">
        <p class="eyebrow">Current path</p>
        <h3 class="card-title" style="margin-block:6px var(--s-3)">${r(o.title)}</h3>
        <div class="meter"><span style="width:${g}%"></span></div>
        <div class="between" style="margin-top:var(--s-3)">
          <span class="t-meta">${y} of ${p.length} done · ${g}%</span>
          <a class="btn btn-ghost btn-sm" href="${h("path/"+o.id)}">Resume${c.arrow}</a>
        </div>
      </div>`}let d="";return e&&(d=`
      <div class="card card-flat" data-accent="atlas">
        <p class="eyebrow">Last opened</p>
        <h3 class="card-title clamp-2" style="margin-block:6px var(--s-3)">${m(e.title||"Untitled")}</h3>
        <a class="btn btn-ghost btn-sm" href="${h(e.route)}">${P(e.id)?"Read again":"Continue reading"}${c.arrow}</a>
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
            <div class="stat"><b>${aa()}</b><span>tools used</span></div>
            <div class="stat"><b>${sa()}</b><span>scenarios</span></div>
            <div class="stat"><b>${f.saved.length}</b><span>saved</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>`}function Ds(){const e=["decision-matrix","priority-matrix","risk-analyzer","conversation-planner","negotiation-planner","credibility-checker","problem-canvas","opportunity-cost"].map(t=>R.find(a=>a.id===t)).filter(Boolean);return`
  <section class="band" id="tools" data-accent="clay">
    <div class="shell">
      ${k("Tools that actually compute",`<a class="btn btn-ghost btn-sm" href="${h("tools")}">All 17 tools${c.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">Not worksheets to print. Each one takes what you enter,
        works something out you could not see by staring at it, and tells you the honest reading — including when the
        answer is "these two options are equivalent and you are avoiding the real question". Everything saves on this device.</p>
      ${T(e.map(me),4)}
    </div>
  </section>`}function Bs(){const e=[{t:"The workflow",d:"Eleven steps from a vague request to a reviewed action you can defend.",to:"ai/workflow",ic:"route"},{t:"Context engineering",d:"The seven-part block that changes output more than any prompt trick.",to:"ai/context",ic:"sliders"},{t:"Verify before you trust",d:"Invented facts, fake sources, confident arithmetic errors — and how each one looks.",to:"ai/verify",ic:"shield"},{t:"Time leverage",d:"Eliminate, simplify, delegate, standardise, assist, automate — in that order.",to:"ai/leverage",ic:"bolt"},{t:"Rehearsal",d:"Nine personas to practise the interview, the raise, the angry customer against.",to:"ai/roleplay",ic:"mic"},{t:"The problem library",d:`${oe.length} real problems with the approach and a prompt you can copy.`,to:"ai/library",ic:"inbox"}];return`
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
              <div class="card-head">
                <div style="min-width:0"><h3 class="card-title">${r(t.t)}</h3></div>
                <span class="res-ic">${c[t.ic]}</span>
              </div>
              <p class="card-text clamp-3">${r(t.d)}</p>
            </a>`).join("")}
        </div>

        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-5)">
          ${de.map(t=>`<a class="chip" href="${h("ai/library?d="+t.id)}">${r(t.title)}</a>`).join("")}
        </div>
      </div>
    </div>
  </section>`}function Fs(){const e=ae.slice(0,3),t=["say-no","quit","trust-info"].map(a=>N.find(s=>s.id===a)).filter(Boolean);return`
  <section class="band" id="practice" data-accent="signal">
    <div class="shell">
      ${k("Practice, where it is safe to be wrong",`<a class="btn btn-ghost btn-sm" href="${h("scenarios")}">All practice${c.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">Reading about judgment does not build it. These are
        deliberately hard: the obvious answer is usually defensible and still wrong, and the best answer costs
        something. Every option comes back with its consequence, its trade-off, the thing you did not see, and how
        an experienced person reasons about it.</p>
      ${T([...e.map(a=>Ae(a)),...t.map(a=>ve(a))],3)}
    </div>
  </section>`}function Us(e){const t=["resourceful","decide-better","difficult","ai-enabled"].map(a=>he.find(s=>s.id===a)).filter(Boolean);return`
  <section class="band" id="paths">
    <div class="shell">
      ${k("Or follow an ordered route",`<a class="btn btn-ghost btn-sm" href="${h("paths")}">All ${he.length} paths${c.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">A path is a real curriculum assembled from material
        that already exists here — lessons, situations, tools, rehearsals and a reflection at every stage. Progress is
        counted from what you have actually completed, never awarded.</p>
      ${T(t.map(a=>wt(a,Be(a),e.includes(a.id))),4)}
    </div>
  </section>`}function Hs(e,t){const a=["a-1.1","a-7.1","d-07","c-01"].map(s=>e.unit(s)).filter(Boolean).map(s=>({...s,trackTitle:(e.track(s.track)||{}).name,accent:(e.track(s.track)||{}).accent}));return`
  <section class="band" id="library" data-accent="council">
    <div class="shell">
      ${k("The long-form library",`<a class="btn btn-ghost btn-sm" href="${h("library")}">Browse everything${c.arrow}</a>`)}
      <p class="t-lede muted" style="margin-bottom:var(--s-6)">When you want the deep version rather than the fast
        one: four tracks, ${j(t.totalUnits)} pieces, ${t.totalCollections} reference collections and
        ${j(t.totalEntries)} entries. Roughly ${t.estHours} hours of reading, all stored in this page rather than
        fetched from anywhere.</p>
      ${T(a.map(s=>Ie(s,{showTrack:!0})),4)}
    </div>
  </section>`}function Vs(){return`
  <section class="band" data-accent="amber">
    <div class="shell">
      ${k("If you have ten minutes")}
      <div class="grid g-3">
        ${Rs.map(e=>`
          <a class="card card-flat rise" href="${h(e.to)}">
            <div class="card-head">
              <div style="min-width:0"><h3 class="card-title">${r(e.t)}</h3></div>
              <span class="res-ic">${c[e.ic]}</span>
            </div>
            <p class="card-text clamp-2">${r(e.d)}</p>
          </a>`).join("")}
      </div>
    </div>
  </section>`}function Ys(){return`
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
  </section>`}function zs(e){const a=["work-boss-shouting","work-impossible-deadline","digital-bank-fraud","people-guilt-tripped","money-contract-pressure","health-someone-suicidal"].map(n=>e.find(i=>i.id===n)).filter(Boolean);if(a.length>=6)return a.slice(0,6);const s=new Set(a.map(n=>n.id));for(const n of e){if(a.length>=6)break;s.has(n.id)||(a.push(n),s.add(n.id))}return a}const Zi=Object.freeze(Object.defineProperty({__proto__:null,default:Os},Symbol.toStringTag,{value:"Module"})),Nt=[{id:"severity",label:"Most serious first"},{id:"az",label:"A to Z"},{id:"short",label:"Shortest first"}],Wt={critical:0,high:1,medium:2,low:3};async function Ks(e){const{situations:t}=await B(),a=t.situations||[],s=t.categories||[],n=s.some(v=>v.id===e.query.cat)?e.query.cat:"",i=(e.query.q||"").trim(),o=Nt.some(v=>v.id===e.query.sort)?e.query.sort:"severity",l=n?s.find(v=>v.id===n):null;let d=n?a.filter(v=>v.category===n):a.slice();d=Gs(d,o);const p={};for(const v of a)p[v.category]=(p[v.category]||0)+1;const y=a.filter(v=>P(v.id)).length,g=a.filter(v=>ge(v.id)).length,u=`
  <div class="shell">
    ${I({eyebrow:l?l.title:"Situations",title:l?l.title:"Start from what is happening",lede:l?l.blurb:`${a.length} playbooks across ${s.length} categories. Each one is written as the sequence of moves — what is actually going on, what to do in order, the words to borrow, what makes it worse, and the point where it stops being something you handle alone.`,accent:l?l.accent:"clay",meta:`
        <span class="chip">${c.layers}${x(a.length,"playbook")}</span>
        ${y?`<span class="chip chip-ac">${c.check}${y} completed</span>`:""}
        ${g?`<span class="chip">${c.bookmark}${g} saved</span>`:""}`})}

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
        ${s.map(v=>`
          <a class="chip${n===v.id?" chip-solid":""}" data-accent="${v.accent}"
             href="${h("situations?cat="+v.id)}">${r(v.title)}<span class="faint">&nbsp;${p[v.id]||0}</span></a>`).join("")}
        <span class="fcount" data-sit-count>${x(d.length,"result")}</span>
      </div>

      <div class="row-wrap" style="gap:var(--s-2);margin-bottom:var(--s-6)">
        <span class="t-meta faint" style="align-self:center">Order</span>
        ${Nt.map(v=>`<a class="chip${o===v.id?" chip-ac":""}"
           href="${h(`situations?${n?"cat="+n+"&":""}sort=${v.id}`)}">${r(v.label)}</a>`).join("")}
      </div>

      <div class="grid g-3" data-sit-grid>
        ${d.map(v=>`<div data-sit="${r(Zs(v))}">${ue(v)}</div>`).join("")}
      </div>

      <div data-sit-empty hidden>
        ${Q("Nothing matches that wording",'Try one word rather than a sentence — "rent", "shouting", "scam", "panic". Or use full search, which reads the whole library rather than just these titles.',`<a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>`)}
      </div>

      ${l?Js(s,n,p):Qs()}
    </div>
  </div>`;return{title:l?l.title:"Situations",html:u,accent:l?l.accent:"clay",mount:v=>Xs(v,i)}}const Zs=e=>`${e.title} ${e.categoryTitle||""} ${(e.tags||[]).join(" ")} ${e.lede||""} ${e.tool||""}`.toLowerCase();function Gs(e,t){return t==="az"?e.sort((a,s)=>a.title.localeCompare(s.title)):t==="short"?e.sort((a,s)=>(a.wordCount||0)-(s.wordCount||0)):e.sort((a,s)=>(Wt[a.severity]??9)-(Wt[s.severity]??9)||a.title.localeCompare(s.title))}function Js(e,t,a){return`
  <section class="band-tight" style="margin-top:var(--s-8);border-top:1px solid var(--line);padding-top:var(--s-7)">
    <p class="rail-t">Other categories</p>
    <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-3)">
      ${e.filter(n=>n.id!==t).map(n=>`<a class="chip" data-accent="${n.accent}" href="${h("situations?cat="+n.id)}">${r(n.title)}<span class="faint">&nbsp;${a[n.id]||0}</span></a>`).join("")}
    </div>
  </section>`}function Qs(){return`
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
  </section>`}function Xs(e,t){const a=e.querySelector("[data-sit-q]"),s=e.querySelector("[data-sit-grid]"),n=e.querySelector("[data-sit-empty]"),i=e.querySelector("[data-sit-count]"),o=e.querySelector("[data-sit-clear]");if(!a||!s)return;const l=[...s.querySelectorAll("[data-sit]")],d=y=>{const g=y.toLowerCase().split(/\s+/).filter(Boolean);let u=0;for(const v of l){const b=v.dataset.sit,S=g.every(Y=>b.includes(Y));v.hidden=!S,S&&u++}i&&(i.textContent=u===l.length?x(l.length,"result"):`${u} of ${l.length}`),n&&(n.hidden=u>0),s.hidden=u===0,o&&(o.hidden=!y)};t&&d(t);const p=pe(()=>d(a.value.trim()),130);a.addEventListener("input",p),a.addEventListener("search",p),o&&o.addEventListener("click",()=>{a.value="",d(""),a.focus()}),a.addEventListener("keydown",y=>{if(y.key!=="Enter")return;const g=a.value.trim();g.length>2&&re(`search?q=${encodeURIComponent(g)}`)})}const Gi=Object.freeze(Object.defineProperty({__proto__:null,default:Ks},Symbol.toStringTag,{value:"Module"})),ha={p:{t:"The situation",lab:"What is happening",ic:"eye"},ul:{t:"The real problem",lab:"What is actually going on",ic:"brain"},steps:{t:"Do this, in this order",lab:"The moves",ic:"list"},lines:{t:"What to say",lab:"Words you can borrow",ic:"chat"},bad:{t:"What makes it worse",lab:"Common traps",ic:"alert"},good:{t:"Recovery",lab:"Once the pressure drops",ic:"heart"}},en=["p","ul","steps","lines","bad","good"];async function tn(e){var v;const t=e.params.id;let a,s;try{[a,s]=await Promise.all([us(t),ft()])}catch(b){const S=b&&b.status===404;return{title:S?"Not found":"Something went wrong",html:`<div class="band"><div class="shell">${O(S?"That situation is not in this library":"This page did not load",S?"It may have been renamed. Every situation is listed on the situations index.":b.message||"The content file could not be read.",!S)}</div></div>`}}const n=(s.categories||[]).find(b=>b.id===a.category),i=n&&n.accent||"clay",o=(s.situations||[]).filter(b=>b.category===a.category&&b.id!==t).slice(0,3),l={};for(const b of a.sections||[])for(const S of b.blocks||[])(l[v=S.type]||(l[v]=[])).push({b:S,s:b});const d=en.filter(b=>l[b]),p=qa(t),y=rt(t),g=R.find(b=>sn(b,a)),u=`
  <div class="shell">
    ${A([{label:"Situations",to:"situations"},{label:a.categoryTitle||"Category",to:`situations?cat=${a.category}`},{label:a.title}])}

    <div class="reader" data-accent="${i}">
      <article class="reader-main">
        <header class="doc-head">
          <p class="kicker">${r(a.categoryTitle||"")}</p>
          <h1>${m(a.title)}</h1>
          ${a.lede?`<p class="sub">${m(a.lede)}</p>`:""}
          <div class="doc-facts">
            ${We(a.severity)}
            ${ke(`${ce(a.wordCount)} min`,c.clock)}
            ${a.tool?ke(a.tool,c.tool):""}
          </div>
          ${(a.tags||[]).length?`<div class="row-wrap" style="gap:6px;margin-top:var(--s-4)">
            ${a.tags.map(b=>`<a class="chip" href="${h("situations?q="+encodeURIComponent(b))}">${r(b)}</a>`).join("")}
          </div>`:""}
        </header>

        ${V(d.map(b=>({id:b,label:ha[b].t})).concat(a.limit?[{id:"limit",label:"The limit"}]:[]))}

        ${d.filter(b=>b!=="good").map(b=>Dt(b,l[b])).join("")}

        ${a.limit?`
          <section class="sec" id="limit">
            <div class="sec-head"><h2>Where this stops being yours to handle</h2></div>
            ${ye("Escalate at this point",a.limit)}
            <p class="t-small muted" style="margin-top:var(--s-4)">Recognising this line is not giving up. It is the
              most resourceful judgment in the whole playbook, and it is the one people most often make too late.</p>
          </section>`:""}

        ${l.good?Dt("good",l.good):""}

        <section class="sec" id="note">
          <div class="sec-head"><h2>What you are going to do</h2></div>
          <p class="t-small muted" style="margin-bottom:var(--s-4)">Write the first move in your own words. Anything you
            have to translate into your own sentence, you have actually understood.</p>
          <div class="field">
            <label for="sitnote">Your first move</label>
            <textarea class="textarea" id="sitnote" data-note="situation:${r(t)}"
              placeholder="The one thing I will do, and when.">${r(H("situation:"+t))}</textarea>
            <span class="hint">Saved on this device as you type.</span>
          </div>
        </section>

        ${o.length?`
          <div class="sec">
            ${k("Nearby situations")}
            ${T(o.map(ue),3)}
          </div>`:""}
      </article>

      <aside class="rail">
        <div class="rail-btns">
          ${Ve(t)}
          ${C(t)}
          <button class="btn btn-ghost btn-sm" data-print>${c.file}<span>Print this playbook</span></button>
        </div>

        ${g?`
          <div>
            <p class="rail-t">Work it through</p>
            <a class="card card-flat" href="${h("tool/"+g.id)}" data-accent="${g.accent}">
              <div class="card-head"><div style="min-width:0"><h3 class="card-title">${r(g.name)}</h3></div>
                <span class="res-ic">${c[g.icon]||c.tool}</span></div>
              <p class="card-text clamp-2">${r(g.blurb)}</p>
            </a>
          </div>`:""}

        ${p.length?`
          <div>
            <p class="rail-t">The skill behind this</p>
            <nav class="rail-links">
              ${p.slice(0,5).map(b=>`<a class="rail-link" href="${h("skill/"+b.id)}">${c.target}${r(b.name)}</a>`).join("")}
            </nav>
          </div>`:""}

        ${y.length?`
          <div>
            <p class="rail-t">Part of</p>
            <nav class="rail-links">
              ${y.slice(0,4).map(b=>`<a class="rail-link" href="${h("path/"+b.id)}">${c.route}${r(b.title)}</a>`).join("")}
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
  </div>`;return{title:W(a.title),html:u,accent:i,recent:{id:t,kind:"situation",title:a.title,route:`situation/${t}`},mount:b=>{b.addEventListener("click",S=>{S.target.closest("[data-print]")&&window.print()})}}}function Dt(e,t){const a=ha[e];return`
  <section class="sec" id="${e}">
    <div class="sec-head"><h2>${r(a.t)}</h2><span class="t-label faint">${r(a.lab)}</span></div>
    <div class="prose">${t.map(({b:s})=>ca(s)).join("")}</div>
  </section>`}const an=[[/deadline|impossible|too much|priorit/i,"priority-matrix"],[/negotiat|salary|pay|rent|contract|price|sale/i,"negotiation-planner"],[/conversation|tell|talk|confront|shout|argu|apolog/i,"conversation-planner"],[/decide|offer|choice|quit|accept/i,"decision-matrix"],[/scam|fraud|hack|deepfake|claim|inform|lied/i,"credibility-checker"],[/risk|danger|threat|intrus|crash|fire|collapse/i,"risk-analyzer"],[/money|debt|income|evict|bank/i,"opportunity-cost"],[/burnout|grief|panic|health|diagnos/i,"reflection"]];function sn(e,t){const a=`${t.title} ${t.lede||""} ${(t.tags||[]).join(" ")} ${t.tool||""}`;for(const[s,n]of an)if(s.test(a))return e.id===n;return e.id==="problem-canvas"}const Ji=Object.freeze(Object.defineProperty({__proto__:null,default:tn},Symbol.toStringTag,{value:"Module"})),nn=["foundation","core","advanced"],Tt=e=>{const t=ct(e.domain)||{};return{...e,domainTitle:t.title,accent:t.accent,levelLabel:(dt[e.level]||{}).label}};async function on(e){const t=e.params.domain||e.query.d||"",a=t?ct(t):null;if(t&&!a)return{title:"Not found",html:`<div class="band"><div class="shell">${O("No such area","The seven areas are Work, Career, Communication, Daily life, Money, Learning and Digital life.",!1)}</div></div>`,notFound:!0};const s=a?xe(a.id):U,n=U.reduce((o,l)=>o+D(l.units||[]),0),i=`
  <div class="shell">
    ${a?A([{label:"Skills",to:"skills"},{label:a.title}]):""}
    ${I({eyebrow:a?"Skill area":"Skills",title:a?a.title:"What you want to get better at",lede:a?a.lede:`${U.length} skills across ${X.length} areas. Each one names the signals that you need it, the material in this library that builds it, and one specific thing to practise this week. No badges, no levels you cannot see the criteria for.`,accent:a?a.accent:"forest",meta:`<span class="chip">${c.target}${x(s.length,"skill")}</span>
             ${n?`<span class="chip chip-ac">${c.check}${n} lessons completed</span>`:""}`})}

    <div class="band-tight">
      <div class="filters" role="group" aria-label="Filter by area">
        <a class="chip${a?"":" chip-solid"}" href="${h("skills")}">All areas<span class="faint">&nbsp;${U.length}</span></a>
        ${X.map(o=>`<a class="chip${a&&a.id===o.id?" chip-solid":""}"
          data-accent="${o.accent}" href="${h("skills/"+o.id)}">${r(o.title)}<span class="faint">&nbsp;${xe(o.id).length}</span></a>`).join("")}
      </div>

      ${a?rn(s):X.map(o=>ln(o)).join("")}
    </div>
  </div>`;return{title:a?a.title:"Skills",html:i,accent:a?a.accent:"forest"}}function ln(e){const t=xe(e.id);return`
  <section class="sec" id="${r(e.id)}" data-accent="${e.accent}">
    ${k(e.title,`<a class="btn btn-ghost btn-sm" href="${h("skills/"+e.id)}">Just this area${c.arrow}</a>`)}
    <p class="t-small muted" style="max-width:70ch;margin-bottom:var(--s-5)">${r(e.lede)}</p>
    ${T(t.map(a=>He(Tt(a),ht(a))),3)}
  </section>`}function rn(e){return nn.map(t=>{const a=e.filter(n=>n.level===t);if(!a.length)return"";const s=dt[t]||{};return`
    <section class="sec" id="${t}">
      ${k(s.label||t,`<span class="t-small faint">${r(s.d||"")}</span>`)}
      ${T(a.map(n=>He(Tt(n),ht(n))),3)}
    </section>`}).join("")}async function cn(e){const t=Ra(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${O("That skill is not in this system","The index lists all twenty-nine.",!1)}</div></div>`,notFound:!0};const a=ct(t.domain)||{},{manifest:s,situations:n}=await B(),i=J(s),o=new Map((n.situations||[]).map($=>[$.id,$])),l=(t.units||[]).map($=>i.unit($)).filter(Boolean).map($=>({...$,trackTitle:(i.track($.track)||{}).name,accent:(i.track($.track)||{}).accent})),d=(t.situations||[]).map($=>o.get($)).filter(Boolean),p=(t.tools||[]).map($=>R.find(L=>L.id===$)).filter(Boolean),y=(t.trees||[]).map($=>N.find(L=>L.id===$)).filter(Boolean),g=(t.scenarios||[]).map($=>ae.find(L=>L.id===$)).filter(Boolean),u=he.filter($=>$.stages.some(L=>(L.lessons||[]).some(M=>(t.units||[]).includes(M))||(L.situations||[]).some(M=>(t.situations||[]).includes(M)))),v=D(t.units||[]),b=(t.units||[]).length?Math.round(v/t.units.length*100):0,S=[...t.signals?[{id:"signals",label:"Do you need this"}]:[],...l.length?[{id:"learn",label:"Learn it"}]:[],...d.length?[{id:"apply",label:"Use it"}]:[],...p.length||y.length?[{id:"tools",label:"Tools"}]:[],...g.length?[{id:"practise",label:"Practise"}]:[],{id:"this-week",label:"This week"}],Y=`
  <div class="shell">
    ${A([{label:"Skills",to:"skills"},{label:a.title||"Area",to:`skills/${t.domain}`},{label:t.name}])}

    ${I({eyebrow:`${a.title||""} · ${(dt[t.level]||{}).label||""}`,title:t.name,lede:t.blurb,accent:a.accent,meta:`
        <span class="chip">${c.book}${x((t.units||[]).length,"lesson")}</span>
        <span class="chip">${c.alert}${x(d.length,"playbook")}</span>
        ${p.length?`<span class="chip">${c.tool}${x(p.length,"tool")}</span>`:""}
        ${b?`<span class="chip chip-ac">${c.check}${b}% read</span>`:""}`,actions:`${C(`skill:${t.id}`,"Save this skill")}
        ${l.length?`<a class="btn btn-primary" href="${h(`read/${l[0].track}/${l[0].id}`)}">${c.play}Start with the first lesson</a>`:""}`})}

    <div class="band-tight">
      ${V(S)}

      <section class="sec" id="why">
        <div class="sec-head"><h2>Why this one matters</h2></div>
        <div class="prose" style="max-width:70ch"><p>${m(t.why)}</p></div>
      </section>

      ${t.signals&&t.signals.length?`
      <section class="sec" id="signals">
        ${k("You probably need this if",'<span class="t-label faint">Honest self-check</span>')}
        <ul class="marklist badlist" style="max-width:70ch">
          ${t.signals.map($=>`<li>${m($)}</li>`).join("")}
        </ul>
      </section>`:""}

      ${l.length?`
      <section class="sec" id="learn">
        ${k("Learn it",`<span class="t-small faint">${v} of ${l.length} read</span>`)}
        ${(t.units||[]).length?`<div class="meter" style="margin-bottom:var(--s-5);max-width:340px"><span style="width:${b}%"></span></div>`:""}
        ${T(l.map($=>Ie($,{showTrack:!0})),3)}
      </section>`:""}

      ${d.length?`
      <section class="sec" id="apply">
        ${k("Where it gets tested",`<a class="btn btn-ghost btn-sm" href="${h("situations")}">All situations${c.arrow}</a>`)}
        <p class="t-small muted" style="margin-bottom:var(--s-5);max-width:70ch">These are the real situations this skill
          exists for. Read one now rather than when it happens — the whole point is not having to think from scratch.</p>
        ${T(d.map(ue),3)}
      </section>`:""}

      ${p.length||y.length?`
      <section class="sec" id="tools">
        ${k("Somewhere to actually do the thinking")}
        ${T([...p.map(me),...y.map($=>ve($))],3)}
      </section>`:""}

      ${g.length?`
      <section class="sec" id="practise">
        ${k("Practise being wrong first")}
        ${T(g.map($=>Ae($)),3)}
      </section>`:""}

      <section class="sec" id="this-week" data-accent="${a.accent}">
        ${k("This week")}
        <div class="grid g-2">
          <div class="card card-pad-lg">
            <p class="eyebrow">Practise this</p>
            <div class="prose" style="margin-top:var(--s-3)"><p>${m(t.practice)}</p></div>
            <div style="margin-top:var(--s-5)">${Ve(`skill-practice:${t.id}`)}</div>
          </div>
          <div class="stack">
            <div class="callout callout-info">
              <span class="lab">Remember this</span>
              <p>${m(t.remember)}</p>
            </div>
            ${t.aiEdge?`
              <div class="callout">
                <span class="lab">${W("The AI advantage")}</span>
                <p>${m(t.aiEdge)}</p>
              </div>`:""}
          </div>
        </div>

        <div class="field" style="margin-top:var(--s-6);max-width:70ch">
          <label for="skill-note">What happened when you tried it</label>
          <textarea class="textarea" id="skill-note" data-note="skill:${r(t.id)}"
            placeholder="Two lines. What you did, and what you would do differently.">${r(H("skill:"+t.id))}</textarea>
          <span class="hint">Saves as you type, on this device only.</span>
        </div>
      </section>

      ${u.length?`
      <section class="sec" id="paths">
        ${k("Ordered routes that include this")}
        <nav class="rail-links" style="max-width:60ch">
          ${u.map($=>`<a class="rail-link" href="${h("path/"+$.id)}">${c.route}${r($.title)}</a>`).join("")}
        </nav>
      </section>`:""}

      ${dn(t)}
    </div>
  </div>`;return{title:t.name,html:Y,accent:a.accent,recent:{id:`skill:${t.id}`,kind:"skill",title:t.name,route:`skill/${t.id}`}}}function dn(e){const t=xe(e.domain).filter(a=>a.id!==e.id).slice(0,3);return t.length?`
  <section class="sec" id="next">
    ${k("Next in this area")}
    ${T(t.map(a=>He(Tt(a),ht(a))),3)}
  </section>`:""}const Qi=Object.freeze(Object.defineProperty({__proto__:null,default:on,skillView:cn},Symbol.toStringTag,{value:"Module"})),pa=["The idea","The hook","The tool","Start","30 seconds","Snapshot","Remember","Takeaways","One-pager","Fast path","Intuition"],hn=[...pa,"The room","Your move","Explained","Practice","Real life","Best move","Mistake","Defense","The hack","Hacks","Mechanics","In reality","Worked example","Examples","5 big ideas","Why it exists","Signals","Reflect"],pn=["Sources","Deep dive","Further reading","Source Discipline"],St=[{id:"quick",label:"Quick",d:"The idea and the tool. Two minutes."},{id:"practical",label:"Practical",d:"Enough to use it today."},{id:"deeper",label:"Deeper",d:"Everything except the reading list."},{id:"all",label:"Everything",d:"The complete document."}];function un(e,t){const a=e.label||"";return t==="quick"?pa.includes(a):t==="practical"?hn.includes(a):t==="deeper"?!pn.includes(a):!0}async function mn(e){const{track:t,id:a}=e.params,s=St.some(M=>M.id===e.query.lens)?e.query.lens:"all",{manifest:n}=await B(),i=J(n),o=i.unit(a),l=i.track(t)||(o?i.track(o.track):null);if(!o||!l)return{title:"Not in this library",html:`<div class="band"><div class="shell">${O("That piece is not in this library","The link may be from an older version. Everything is reachable from the library index.",!1)}</div></div>`};let d;try{d=await ms(a)}catch(M){return{title:o.title,html:`<div class="band"><div class="shell">${O("This page did not load",M.message||"The content file could not be read.")}</div></div>`}}const p=(d.sections||[]).filter(M=>un(M,s)),y=(d.sections||[]).length-p.length,g=i.group(o.track,o.levelId),{prev:u,next:v}=i.neighbours(a),b=Oa(a),S=rt(a),[Y,$]=await Promise.all([gs().then(M=>M.filter(z=>z.lessonId===a)).catch(()=>[]),bt().then(M=>M.filter(z=>String(z.id).startsWith(a+"-"))).catch(()=>[])]),L=`
  <div class="shell">
    ${A([{label:"Library",to:"library"},{label:l.short||l.name,to:`track/${l.id}`},...g?[{label:`${g.title}`,to:`track/${l.id}#${g.id}`}]:[],{label:o.title}])}

    <div class="reader" data-accent="${l.accent}">
      <article class="reader-main">
        <header class="doc-head">
          <p class="kicker">${r(l.groupName||"Part")} ${r(String(o.number||o.ref||""))} · ${r(o.group||"")}</p>
          <h1>${m(d.title||o.title)}</h1>
          ${d.subtitle?`<p class="sub">${m(d.subtitle)}</p>`:""}
          <div class="doc-facts">
            ${ke(`${ce(d.wordCount||o.wordCount)} min read`,c.clock)}
            ${ke(x((d.sections||[]).length,"section"),c.list)}
            ${ke(l.name,vt(l.icon))}
          </div>
          ${o.skill||o.tool||o.result?Ms([...o.skill?[{lab:"The skill",v:o.skill}]:[],...o.tool?[{lab:"The tool",v:o.tool}]:[],...o.result?[{lab:"The result",v:o.result}]:[]]):""}
          ${o.oneline?`<p class="t-small on-ac" style="margin-top:var(--s-4);font-weight:560">${m(o.oneline)}</p>`:""}
        </header>

        ${vn(s,y,t,a)}

        ${d.tracks?gn(d.tracks):""}

        ${p.length?p.map(yn).join(""):`<div class="state"><span class="state-icon">${c.filter}</span>
              <h3>Nothing at this depth</h3>
              <p>This piece has no sections in the ${r(s)} lens. Switch to Everything to read it in full.</p>
              <div class="row" style="justify-content:center;margin-top:var(--s-5)">
                <a class="btn btn-soft" href="${h(`read/${t}/${a}?lens=all`)}">Read everything</a>
              </div></div>`}

        ${fn(Y,a)}
        ${bn($)}

        ${da({prev:u?{to:`read/${u.track}/${u.id}${s!=="all"?"?lens="+s:""}`,label:u.title}:null,next:v?{to:`read/${v.track}/${v.id}${s!=="all"?"?lens="+s:""}`,label:v.title}:null})}
      </article>

      <aside class="rail">
        <div>
          <p class="rail-t">On this page</p>
          <nav class="rail-links" data-toc>
            ${p.map(M=>`<a class="rail-link" href="#${r(M.id)}">${r(W(M.label||M.title))}</a>`).join("")}
          </nav>
        </div>

        <div class="rail-btns">
          ${Ve(a)}
          ${C(a)}
          <button class="btn btn-ghost btn-sm" data-print>${c.file}<span>Print or save PDF</span></button>
        </div>

        <div>
          <p class="rail-t">Reading size</p>
          <div class="row" style="gap:var(--s-2)">
            <button class="btn btn-icon btn-sm" data-scale="-1" aria-label="Smaller text">${c.minus}</button>
            <span class="t-meta t-num grow center" data-scale-val>${Math.round(f.scale*100)}%</span>
            <button class="btn btn-icon btn-sm" data-scale="1" aria-label="Larger text">${c.plus}</button>
          </div>
        </div>

        ${b.length?`
          <div>
            <p class="rail-t">The skill behind this</p>
            <nav class="rail-links">
              ${b.slice(0,5).map(M=>`<a class="rail-link" href="${h("skill/"+M.id)}">${c.target}${r(M.name)}</a>`).join("")}
            </nav>
          </div>`:""}

        ${S.length?`
          <div>
            <p class="rail-t">Part of</p>
            <nav class="rail-links">
              ${S.slice(0,4).map(M=>`<a class="rail-link" href="${h("path/"+M.id)}">${c.route}${r(M.title)}</a>`).join("")}
            </nav>
          </div>`:""}
      </aside>
    </div>
  </div>`;return{title:W(d.title||o.title),html:L,accent:l.accent,recent:{id:a,kind:"lesson",title:d.title||o.title,route:`read/${l.id}/${a}`},mount:$n}}function vn(e,t,a,s){return`
  <div class="tabs" role="tablist" aria-label="Reading depth" style="margin-bottom:var(--s-6)">
    ${St.map(n=>`
      <a class="tab" role="tab" aria-selected="${n.id===e}" title="${r(n.d)}"
         href="${h(`read/${a}/${s}${n.id==="all"?"":"?lens="+n.id}`)}">${r(n.label)}</a>`).join("")}
    ${t>0?`<span class="t-meta faint" style="margin-left:auto;align-self:center">${t} section${t===1?"":"s"} hidden</span>`:""}
  </div>`}function gn(e){const t=[["If you have 10 minutes",e.fast],["If you have an hour",e.core],["If you want to master it",e.mastery]].filter(([,a])=>a);return t.length?`
  <details class="acc" style="margin-bottom:var(--s-7)">
    <summary>How to take this piece${c.chevDown}</summary>
    <div class="acc-body">
      ${t.map(([a,s])=>`<div class="callout"><span class="lab">${r(a)}</span><p>${m(s)}</p></div>`).join("")}
    </div>
  </details>`:""}function yn(e){return`
  <section class="sec" id="${r(e.id)}">
    <div class="sec-head">
      <h2>${m(e.title||e.label||"")}</h2>
      ${e.label&&e.title&&W(e.label)!==W(e.title)?`<span class="t-label faint">${r(e.label)}</span>`:""}
    </div>
    <div class="prose">${xt(e.blocks)}</div>
  </section>`}function fn(e,t){var s;if(!e.length)return"";const a={};for(const n of e)(a[s=n.label]||(a[s]=[])).push(n);return`
  <section class="sec" id="do-this-now">
    <div class="sec-head"><h2>Do this now</h2><span class="t-label faint">${x(e.length,"action")}</span></div>
    <p class="t-small muted" style="margin-bottom:var(--s-5)">Reading this changes nothing on its own. These are the
      actions the piece is actually for. Tick one — it is stored on this device.</p>
    ${Object.entries(a).map(([n,i])=>`
      <div style="margin-bottom:var(--s-5)">
        <p class="eyebrow" style="margin-bottom:var(--s-3)">${r(n)}</p>
        <div class="stack" style="--flow:var(--s-2)">
          ${i.map(o=>`
            <label class="check${f.done.has(o.id)?" done":""}">
              <input type="checkbox" data-done-box="${r(o.id)}"${f.done.has(o.id)?" checked":""}>
              <span class="check-t">${m(o.excerpt||"")}</span>
            </label>`).join("")}
        </div>
      </div>`).join("")}
    <div class="field" style="margin-top:var(--s-5)">
      <label for="note-${r(t)}">What you actually did, or decided not to do</label>
      <textarea class="textarea" id="note-${r(t)}" data-note="unit:${r(t)}"
        placeholder="One or two lines is enough. This stays on your device and appears in your progress page.">${r(H("unit:"+t))}</textarea>
      <span class="hint">Saves as you type.</span>
    </div>
  </section>`}function bn(e){return e.length?`
  <section class="sec" id="ai-move">
    <div class="sec-head"><h2>The AI move</h2><span class="t-label faint">${x(e.length,"prompt")}</span></div>
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
  </section>`:""}function $n(e){e.addEventListener("click",n=>{const i=n.target.closest("[data-scale]");if(i){const o=as(f.scale+Number(i.dataset.scale)*.05),l=e.querySelector("[data-scale-val]");l&&(l.textContent=Math.round(o*100)+"%");return}n.target.closest("[data-print]")&&window.print()});const t=[...e.querySelectorAll("[data-toc] .rail-link")],a=[...e.querySelectorAll(".sec[id]")];if(!t.length||!a.length||!("IntersectionObserver"in window))return;const s=new IntersectionObserver(n=>{for(const i of n){if(!i.isIntersecting)continue;const o=i.target.id;t.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+o))}},{rootMargin:"-88px 0px -70% 0px"});return a.forEach(n=>s.observe(n)),()=>s.disconnect()}const Xi=Object.freeze(Object.defineProperty({__proto__:null,LENSES:St,default:mn},Symbol.toStringTag,{value:"Module"}));async function wn(){const e=aa();return{title:"Toolkit",html:`
  <div class="shell">
    ${I({eyebrow:"The toolkit",title:"Seventeen tools that actually compute",lede:"Not printable worksheets. Each one takes what you type, works out something you could not see by staring at the problem, and gives you an honest reading — including when the honest reading is that your two options are equivalent and the real question is one you have not written down.",accent:"clay",meta:`<span class="chip">${c.tool}${x(R.length,"tool")}</span>
             <span class="chip">${c.key}Saved on this device</span>
             ${e?`<span class="chip chip-ac">${c.check}${x(e,"tool")} with saved work</span>`:""}`})}

    <div class="band-tight">
      ${V(Pt.map(a=>({id:a.id.toLowerCase(),label:a.id})))}

      <div class="callout callout-info" style="margin-top:var(--s-6);max-width:80ch">
        <span class="lab">How these behave</span>
        <p>Everything you enter stays in this browser. Nothing is uploaded, and there is no account. Each tool
          remembers your work automatically, so you can leave a decision half-thought-through and come back to it.
          Every tool can copy or download its result as plain text if you want it somewhere permanent.</p>
      </div>

      ${Pt.map(a=>{const s=R.filter(n=>n.group===a.id);return`
        <section class="sec" id="${a.id.toLowerCase()}">
          ${k(a.id,`<span class="t-small faint">${r(a.blurb)}</span>`)}
          ${T(s.map(n=>kn(n)),3)}
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
  </div>`,accent:"clay"}}function kn(e){const t=fe(e.id)!=null,a=me(e);return t?a.replace("</a>",`<div class="card-foot card-foot-line"><span class="t-meta" style="color:var(--ac)">${c.check} You have saved work here</span></div></a>`):a}async function xn(e){const t=la(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${O("No such tool","The toolkit has seventeen. The index lists all of them by what they decide.",!1)}</div></div>`,notFound:!0};let a;try{a=await Ts(t.id)}catch{return{title:t.name,html:`<div class="band"><div class="shell">${O("This tool did not load","The tool code could not be fetched. Reload the page — if it keeps happening, your connection dropped mid-download.")}</div></div>`}}const s=Pa(t.id),n=R.filter(o=>o.group===t.group&&o.id!==t.id),i=`
  <div class="shell">
    ${A([{label:"Toolkit",to:"tools"},{label:t.group,to:`tools#${t.group.toLowerCase()}`},{label:t.name}])}

    ${I({eyebrow:`${t.group} tool`,title:a.name||t.name,lede:a.purpose||t.blurb,accent:t.accent,actions:`${C(`tool:${t.id}`,"Save this tool")}
        <a class="btn btn-ghost" href="${h("tools")}">${c.back}All tools</a>`})}

    <div class="band-tight">
      ${a.when&&a.when.length?`
        <details class="acc" style="margin-bottom:var(--s-6)">
          <summary>When to reach for this one${c.chevDown}</summary>
          <div class="acc-body">
            <ul class="marklist" style="max-width:70ch">
              ${a.when.map(o=>`<li>${m(o)}</li>`).join("")}
            </ul>
            ${a.reads?`<div class="callout callout-warning" style="margin-top:var(--s-4)">
              <span class="lab">Reading the result honestly</span><p>${m(a.reads)}</p></div>`:""}
          </div>
        </details>`:""}

      <div data-tool-host>${Ss("Loading the tool")}</div>

      ${s.length?`
      <section class="sec" id="skills">
        ${k("The skill this belongs to")}
        <nav class="rail-links" style="max-width:60ch">
          ${s.map(o=>`<a class="rail-link" href="${h("skill/"+o.id)}">${c.target}${r(o.name)}</a>`).join("")}
        </nav>
      </section>`:""}

      ${n.length?`
      <section class="sec" id="related">
        ${k(`Other ${t.group.toLowerCase()} tools`)}
        ${T(n.map(me),3)}
      </section>`:""}
    </div>
  </div>`;return{title:a.name||t.name,html:i,accent:t.accent,recent:{id:`tool:${t.id}`,kind:"tool",title:t.name,route:`tool/${t.id}`},mount:o=>{const l=o.querySelector("[data-tool-host]");if(l)return l.innerHTML="",Tn(a,l)}}}async function Tn(e,t){const{mountTool:a}=await _(async()=>{const{mountTool:s}=await import("./kit-DV3I2Ncm.js");return{mountTool:s}},__vite__mapDeps([1,2]));return a(e,t)}const eo=Object.freeze(Object.defineProperty({__proto__:null,default:wn,toolView:xn},Symbol.toStringTag,{value:"Module"})),Re={best:{label:"Strongest move",cls:"grade-best"},ok:{label:"Workable",cls:"grade-ok"},risky:{label:"Risky",cls:"grade-risky"},poor:{label:"Weak",cls:"grade-poor"}};async function Sn(){const e=sa();return{title:"Practice",html:`
  <div class="shell">
    ${I({eyebrow:"Practice",title:"What would you do?",lede:"Reading about judgment does not build it. These are written so that the obvious answer is defensible and still wrong — and so the best answer costs you something. Commit to an option before you read anything, then see the consequence, the trade-off, the thing you missed, and how someone experienced reasons about it.",accent:"signal",meta:`<span class="chip">${c.target}${x(ae.length,"scenario")}</span>
             <span class="chip">${c.route}${x(N.length,"decision tree")}</span>
             ${e?`<span class="chip chip-ac">${c.check}${e} answered</span>`:""}`})}

    <div class="band-tight">
      <div class="callout callout-warning" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">How to get anything from these</span>
        <p>Pick before you read. If you scroll to the reasoning first, you will find it obvious and learn nothing —
          hindsight always feels like foresight. Being wrong here is the cheapest place to be wrong.</p>
      </div>

      <section class="sec" id="scenarios">
        ${k("Scenarios",'<span class="t-small faint">One question, four options, no easy answer</span>')}
        ${T(ae.map(a=>Ae(a,!!Se(a.id))),3)}
      </section>

      <section class="sec" id="trees">
        ${k("Decision trees",`<a class="btn btn-ghost btn-sm" href="${h("trees")}">All ${N.length}${c.arrow}</a>`)}
        <p class="t-small muted" style="margin-bottom:var(--s-5);max-width:70ch">Where a scenario tests judgment, a tree
          structures it. Four or five honest questions, and it ends in a recommendation, the reasoning, and a sentence
          you can actually send.</p>
        ${T(N.slice(0,6).map(a=>ve(a)),3)}
      </section>
    </div>
  </div>`,accent:"signal"}}async function En(e){const t=Ht(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${O("No such scenario","The practice index lists all of them.",!1)}</div></div>`,notFound:!0};const a=Se(t.id),s=a?a.picked:null,{situations:n}=await B(),i=new Map((n.situations||[]).map(d=>[d.id,d])),o=(t.situations||[]).map(d=>i.get(d)).filter(Boolean),l=`
  <div class="shell">
    ${A([{label:"Practice",to:"scenarios"},{label:t.title}])}

    ${I({eyebrow:`${t.domain} · ${t.difficulty}`,title:t.title,accent:t.accent,meta:`<span class="chip">${c.layers}${x((t.options||[]).length,"option")}</span>
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
            ${(t.options||[]).map(d=>ua(d,s)).join("")}
          </div>
          <div data-verdict>${s?va(t,s):ma()}</div>
        </div>
      </div>

      <div data-after${s?"":" hidden"}>
        ${In(t,o)}
      </div>
    </div>
  </div>`;return{title:t.title,html:l,accent:t.accent,recent:{id:`scenario:${t.id}`,kind:"scenario",title:t.title,route:`scenario/${t.id}`},mount:d=>An(d,t)}}function ua(e,t){const a=!!t;return`
  <button class="opt" type="button" data-opt="${r(e.key)}"
    data-picked="${t===e.key}" data-revealed="${a}"${a?" disabled":""}>
    <span class="k">${r(e.key)}</span>
    <span class="txt">${m(e.text)}</span>
  </button>`}const ma=()=>`
  <p class="t-small faint" style="margin-top:var(--s-5)">${c.eye} Nothing is revealed until you commit. Pick the one you
  would actually do, not the one that looks correct.</p>`;function va(e,t){const a=(e.options||[]).find(i=>i.key===t);if(!a)return"";const s=Re[a.grade]||Re.ok,n=(e.options||[]).find(i=>i.grade==="best");return`
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
      ${(e.options||[]).map(i=>{const o=Re[i.grade]||Re.ok;return`
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
  </div>`}function In(e,t){const a=ae.filter(s=>s.id!==e.id).slice(0,3);return`
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
        placeholder="The sentence you would send, or the first move you would make.">${r(H("scenario:"+e.id))}</textarea>
      <span class="hint">Saves as you type.</span>
    </div>
  </section>

  ${t.length?`
  <section class="sec" id="real">
    ${k("When this is not a scenario")}
    ${T(t.map(ue),3)}
  </section>`:""}

  <section class="sec" id="next">
    ${k("Another one")}
    ${T(a.map(s=>Ae(s,!!Se(s.id))),3)}
  </section>`}function An(e,t){const a=e.querySelector("[data-scn]");if(!a)return;const s=n=>{const i=a.querySelector(".opts"),o=a.querySelector("[data-verdict]"),l=e.querySelector("[data-after]");i&&(i.innerHTML=(t.options||[]).map(d=>ua(d,n)).join("")),o&&(o.innerHTML=n?va(t,n):ma()),l&&(l.hidden=!n)};e.addEventListener("click",n=>{const i=n.target.closest("[data-opt]");if(i&&!i.disabled){const o=i.dataset.opt;ns(t.id,o),s(o);const l=a.querySelector("[data-verdict]");l&&l.scrollIntoView({block:"nearest",behavior:"smooth"});return}n.target.closest("[data-scn-again]")&&(s(null),a.scrollIntoView({block:"start",behavior:"smooth"}))})}const to=Object.freeze(Object.defineProperty({__proto__:null,default:Sn,scenarioView:En},Symbol.toStringTag,{value:"Module"}));async function Mn(){return{title:"Decision trees",html:`
  <div class="shell">
    ${I({eyebrow:"Decision trees",title:"The decisions that keep coming back",lede:"Not a flowchart for the sake of one. Each of these asks the questions that actually determine the answer — the ones people skip because they are uncomfortable — and ends in a recommendation, the reasoning behind it, and a sentence you can send without rewriting.",accent:"atlas",meta:`<span class="chip">${c.route}${x(N.length,"tree")}</span>
             <span class="chip">${c.check}Your path is kept on this device</span>`})}

    <div class="band-tight">
      <div class="callout callout-info" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">Answer honestly or do not bother</span>
        <p>Every one of these has a question that most people answer aspirationally — "do you have the capacity"
          means hours that already exist, not hours you plan to find by working Sunday. A tree answered optimistically
          returns an optimistic recommendation.</p>
      </div>

      ${T(N.map(t=>{const a=Vt(t),s=!!Ee(t.id);return ve(t,s).replace("</a>",`<div class="card-foot card-foot-line">
            <span class="t-meta faint">${a.questions} questions</span>
            <span class="t-meta faint">${a.outcomes} outcomes</span>
          </div></a>`)}),3)}
    </div>
  </div>`,accent:"atlas"}}async function jn(e){const t=Yt(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${O("No such decision tree","There are eleven. The index lists them by the decision they resolve.",!1)}</div></div>`,notFound:!0};const a=Ee(t.id),s=Array.isArray(a&&a.path)?ga(t,a.path):[],n=Vt(t),i=qn(t),o=`
  <div class="shell">
    ${A([{label:"Decision trees",to:"trees"},{label:t.title}])}

    ${I({eyebrow:"Decision tree",title:t.title,lede:t.blurb,accent:t.accent,meta:`<span class="chip">${c.question}${n.questions} questions</span>
             <span class="chip">${c.flag}${n.outcomes} outcomes</span>
             ${(t.tags||[]).map(l=>`<span class="chip">${r(l)}</span>`).join("")}`,actions:`${C(`tree:${t.id}`,"Save this tree")}
        ${s.length?`<button class="btn btn-ghost" data-tree-reset>${c.reset}Start again</button>`:""}`})}

    <div class="band-tight">
      <div class="tree" data-accent="${t.accent}" data-tree="${r(t.id)}">
        ${ba(t,s)}
      </div>

      <div data-tree-after${fa(t,s)?"":" hidden"}>
        ${Ln(t,i)}
      </div>
    </div>
  </div>`;return{title:t.title,html:o,accent:t.accent,recent:{id:`tree:${t.id}`,kind:"tree",title:t.title,route:`tree/${t.id}`},mount:l=>Rn(l,t)}}function ga(e,t){const a=[];let s=e.start;for(const n of t){const i=e.nodes[s];if(!i||!i.opts)break;const o=i.opts.find(l=>l.label===n);if(!o||(a.push(n),s=o.to,!e.nodes[s]))break}return a}function ya(e,t){const a=[];let s=e.start;for(const n of t){const i=e.nodes[s];if(!i||!i.opts)break;const o=i.opts.find(l=>l.label===n);if(!o)break;a.push({id:s,node:i,picked:n}),s=o.to}return{chain:a,current:s,node:e.nodes[s]}}const fa=(e,t)=>{const{node:a}=ya(e,t);return a&&a.out?a:null};function ba(e,t){const{chain:a,node:s}=ya(e,t),n=[];return a.forEach(({node:i,picked:o},l)=>{n.push(`
      <div class="node past">
        <p class="node-q">${m(i.q)}</p>
        <div class="node-opts">
          ${(i.opts||[]).map(d=>`
            <button class="btn btn-sm${d.label===o?" node-picked":""}" type="button"
              data-step="${l}" data-label="${r(d.label)}"
              ${d.label===o?'aria-current="true"':""}>${r(d.label)}</button>`).join("")}
        </div>
      </div>
      <div class="node-link" aria-hidden="true"></div>`)}),s?s.out?n.push(Cn(s,t)):n.push(`
      <div class="node">
        <p class="node-q">${m(s.q)}</p>
        ${s.note?`<p class="node-note">${m(s.note)}</p>`:""}
        <div class="node-opts">
          ${(s.opts||[]).map(i=>`
            <button class="btn btn-soft btn-sm" type="button" data-pick="${r(i.label)}">${r(i.label)}${c.arrow}</button>`).join("")}
        </div>
      </div>`):n.push(`<div class="node node-out"><p class="node-q">This branch is incomplete.</p>
      <p class="node-note">Start again and the tree will rebuild from the first question.</p>
      <div class="node-opts"><button class="btn btn-soft btn-sm" data-tree-reset>${c.reset}Start again</button></div></div>`),n.join("")}function Cn(e,t){return`
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
  </div>`}function Ln(e,t){const a=N.filter(s=>s.id!==e.id).slice(0,3);return`
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
        placeholder="Write it in your own words. If you cannot, you have not decided yet.">${r(H("tree:"+e.id))}</textarea>
      <span class="hint">Saves as you type. This is the paragraph you would defend in a meeting.</span>
    </div>

    ${t?`
      <div style="margin-top:var(--s-7)">
        ${k("Take it further")}
        ${T([me(t)],3)}
      </div>`:""}

    <div style="margin-top:var(--s-7)">
      ${k("Other decisions")}
      ${T(a.map(s=>ve(s,!!Ee(s.id))),3)}
    </div>
  </section>`}const _n={"say-yes":"priority-matrix","say-no":"conversation-planner",quit:"career-decision",negotiate:"negotiation-planner",escalate:"risk-analyzer","respond-now":"reflection",opportunity:"decision-matrix","buy-this":"opportunity-cost","trust-info":"credibility-checker","use-ai":"problem-canvas",automate:"task-decomposition"},qn=e=>R.find(t=>t.id===_n[e.id])||null;function Rn(e,t){const a=e.querySelector("[data-tree]");if(!a)return;let s=(()=>{const i=Ee(t.id);return Array.isArray(i&&i.path)?ga(t,i.path):[]})();const n=(i=!1)=>{a.innerHTML=ba(t,s);const o=e.querySelector("[data-tree-after]");if(o&&(o.hidden=!fa(t,s)),!i)return;const l=a.querySelector("[data-outcome]")||a.lastElementChild;l&&l.scrollIntoView&&l.scrollIntoView({block:"center",behavior:"smooth"})};e.addEventListener("click",i=>{const o=i.target.closest("[data-pick]");if(o){s=[...s,o.dataset.pick],Qe(t.id,s),n(!0);return}const l=i.target.closest("[data-step]");if(l){const d=Number(l.dataset.step);s=[...s.slice(0,d),l.dataset.label],Qe(t.id,s),n(!0);return}i.target.closest("[data-tree-reset]")&&(s=[],Qe(t.id,s),n(),a.scrollIntoView({block:"start",behavior:"smooth"}))})}const ao=Object.freeze(Object.defineProperty({__proto__:null,default:Mn,treeView:jn},Symbol.toStringTag,{value:"Module"}));async function On(){const e=yt();return{title:"Learning paths",html:`
  <div class="shell">
    ${I({eyebrow:"Learning paths",title:"Ten ordered routes through all of this",lede:"If the library is too large to know where to start — and it is — a path is the answer. Each one has a reason for its order: the things that everything else depends on come first. Six stages on average, each with reading, a real situation, a tool to use, something to rehearse and a question to answer in writing.",accent:"forest",meta:`<span class="chip">${c.route}${x(he.length,"path")}</span>
             ${e.length?`<span class="chip chip-ac">${c.play}${x(e.length,"path")} started</span>`:""}`})}

    <div class="band-tight">
      <div class="callout callout-info" style="max-width:80ch;margin-bottom:var(--s-7)">
        <span class="lab">If you only take one</span>
        <p><a href="${h("path/resourceful")}">Become More Resourceful</a> is the spine. Steadiness, then
          observation, then the ability to find out anything, then the ability to act on it. Every other path here
          is a specialisation of those four moves.</p>
      </div>

      ${T(he.map(a=>wt(a,Be(a),e.includes(a.id))),3)}
    </div>
  </div>`,accent:"forest"}}async function Pn(e){const t=De(e.params.id);if(!t)return{title:"Not found",html:`<div class="band"><div class="shell">${O("No such path","There are ten. The index lists each with what it is for.",!1)}</div></div>`,notFound:!0};const{manifest:a,situations:s}=await B(),n=J(a),i=new Map((s.situations||[]).map(u=>[u.id,u])),o=lt(t),l=D(o.map(u=>u.id)),d=o.length?Math.round(l/o.length*100):0,p=Be(t),y=nt(t.id),g=`
  <div class="shell">
    ${A([{label:"Learning paths",to:"paths"},{label:t.title}])}

    ${I({eyebrow:`Path ${t.number} · about ${t.weeks} weeks`,title:t.title,lede:t.lede,accent:t.accent,meta:`<span class="chip">${c.layers}${x(p.stages,"stage")}</span>
             <span class="chip">${c.book}${x(p.lessons,"lesson")}</span>
             <span class="chip">${c.alert}${x(p.situations,"situation")}</span>
             <span class="chip">${c.tool}${x(p.tools,"tool")}</span>
             ${d?`<span class="chip chip-ac">${c.check}${d}% complete</span>`:""}`,actions:`
        <button class="btn ${y?"btn-soft":"btn-primary"}" data-path-toggle="${r(t.id)}">
          ${y?c.check:c.play}${y?"On your paths — remove":"Add to my paths"}
        </button>
        ${C(`path:${t.id}`,"Save")}
        ${o.length?`<a class="btn btn-ghost" href="${h(Nn(o,n))}">${c.arrow}Go to the next unread item</a>`:""}`})}

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

      ${V(t.stages.map(u=>({id:`stage-${u.n}`,label:`${u.n}. ${u.title}`})))}

      ${t.stages.map(u=>Wn(u,t,n,i)).join("")}

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
  </div>`;return{title:t.title,html:g,accent:t.accent,recent:{id:`path:${t.id}`,kind:"path",title:t.title,route:`path/${t.id}`},mount:u=>Dn(u,t)}}function Nn(e,t){const a=e.find(n=>!P(n.id))||e[0];if(!a)return"paths";if(a.kind==="situation")return`situation/${a.id}`;const s=t.unit(a.id);return s?`read/${s.track}/${s.id}`:"library"}function Wn(e,t,a,s){const n=(e.lessons||[]).map(v=>a.unit(v)).filter(Boolean).map(v=>({...v,trackTitle:(a.track(v.track)||{}).name,accent:(a.track(v.track)||{}).accent})),i=(e.situations||[]).map(v=>s.get(v)).filter(Boolean),o=(e.tools||[]).map(v=>R.find(b=>b.id===v)).filter(Boolean),l=(e.trees||[]).map(v=>N.find(b=>b.id===v)).filter(Boolean),d=(e.scenarios||[]).map(v=>ae.find(b=>b.id===v)).filter(Boolean),p=(e.ai||[]).map(v=>Na.find(b=>b.route===v)).filter(Boolean),y=[...e.lessons||[],...e.situations||[]],g=D(y),u=y.length?Math.round(g/y.length*100):0;return`
  <section class="pb" id="stage-${e.n}" data-accent="${t.accent}">
    <div class="pb-head">
      <span class="pb-n">${e.n}</span>
      <h2>${r(e.title)}</h2>
      ${y.length?`<span class="t-meta faint" style="margin-left:auto">${g}/${y.length}</span>`:""}
    </div>

    <p class="t-small muted" style="max-width:72ch;margin-bottom:var(--s-5)">${m(e.why)}</p>
    ${y.length?`<div class="meter" style="max-width:280px;margin-bottom:var(--s-5)"><span style="width:${u}%"></span></div>`:""}

    ${n.length?`
      <p class="rail-t">Read</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${T(n.map(v=>Ie(v,{showTrack:!0})),3)}</div>`:""}

    ${i.length?`
      <p class="rail-t">Apply it to something real</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${T(i.map(ue),3)}</div>`:""}

    ${o.length||l.length?`
      <p class="rail-t">Use</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${T([...o.map(me),...l.map(v=>ve(v))],3)}</div>`:""}

    ${d.length?`
      <p class="rail-t">Rehearse</p>
      <div style="margin:var(--s-3) 0 var(--s-5)">${T(d.map(v=>Ae(v)),3)}</div>`:""}

    ${p.length?`
      <p class="rail-t">The AI move</p>
      <nav class="rail-links" style="margin:var(--s-3) 0 var(--s-5);max-width:60ch">
        ${p.map(v=>`<a class="rail-link" href="${h(v.route)}">${c.cpu}${r(v.title)}</a>`).join("")}
      </nav>`:""}

    ${e.reflect?`
      <div class="field" style="max-width:72ch">
        <label for="reflect-${t.id}-${e.n}">Reflect — ${r(e.title)}</label>
        <p class="t-small muted" style="margin-bottom:6px">${m(e.reflect)}</p>
        <textarea class="textarea" id="reflect-${t.id}-${e.n}"
          data-note="path:${r(t.id)}:${e.n}"
          placeholder="Write it out. A stage you have not written about is a stage you have read, not learned.">${r(H(`path:${t.id}:${e.n}`))}</textarea>
        <span class="hint">Saves as you type. Appears in your progress page.</span>
      </div>`:""}
  </section>`}function Dn(e,t){e.addEventListener("click",a=>{const s=a.target.closest("[data-path-toggle]");if(!s)return;nt(t.id)?os(t.id):is(t.id);const i=nt(t.id);s.className=`btn ${i?"btn-soft":"btn-primary"}`,s.innerHTML=`${i?c.check:c.play}${i?"On your paths — remove":"Add to my paths"}`})}const so=Object.freeze(Object.defineProperty({__proto__:null,default:On,pathView:Pn},Symbol.toStringTag,{value:"Module"}));async function Bn(){let e;try{const{manifest:l}=await B();e=J(l)}catch(l){return{title:"The library",html:`<div class="shell band">${O("The library could not load","The content index did not come back. Nothing you have saved is affected.")}</div>`,error:l}}const t=e.stats(),a=e.tracks(),s=e.collections(),n=e.vaultGroups(),i=gt();return{title:"The library",html:`
  <div class="shell band">
    ${A([{label:"The library"}])}

    ${I({eyebrow:"The library",title:"Everything, arranged so you can find your way in",lede:`Four tracks, ${j(t.totalUnits)} pieces, ${j(t.totalWords)} words, and ${j(t.totalCollections)} reference collections. It is deliberately more than you can read — the point is that whatever you need is in here, and there is always a defined next thing rather than a blank choice.`,accent:"atlas",actions:`
        ${i?`<a class="btn btn-primary btn-lg" href="${h(i.route)}">${c.book}Continue where you stopped</a>`:`<a class="btn btn-primary btn-lg" href="${h("paths")}">${c.route}Follow a path instead</a>`}
        <a class="btn btn-soft btn-lg" href="${h("search")}">${c.search}Search it all</a>
        ${C("page:library","Save")}`})}

    ${ie([{v:j(t.totalUnits),l:"pieces to read"},{v:j(t.totalCollections),l:"reference collections"},{v:`${t.estHours}h`,l:"if you read all of it"},{v:j(t.estPages),l:"printed pages"}])}

    <aside class="slab" style="margin:var(--s-7) 0" data-accent="atlas">
      <p class="eyebrow">How to use something this size</p>
      <p class="t-lede">Do not start at the beginning. Either take a
      <a href="${h("paths")}">path</a>, which orders this for you, or arrive from a
      <a href="${h("situations")}">situation</a> you are actually in and read outwards
      from there. Reading a library front to back is how people spend six months and
      change nothing.</p>
    </aside>

    ${V([{id:"tracks",label:"The four tracks"},{id:"levels",label:"Level by level"},{id:"vault",label:"Reference vault"}])}

    <section class="sec" id="tracks">
      <div class="sec-head"><h2>The four tracks</h2></div>
      <p class="t-lede" style="max-width:70ch">Each one has a different job. They are not
      sequential and you are not behind if you skip one.</p>
      <div style="margin-top:var(--s-5)">
        ${T(a.map(l=>ra(l,{units:(e.ofTrack(l.id)||[]).length,words:(t.byTrack[l.id]||{}).words||0})),2)}
      </div>
    </section>

    <section class="sec" id="levels">
      <div class="sec-head"><h2>Level by level</h2></div>
      <p class="t-lede" style="max-width:70ch">Every level in every track, with what it
      promises and how much of it you have finished.</p>
      <div class="stack" style="gap:var(--s-7);margin-top:var(--s-6)">
        ${a.map(l=>Fn(l,e)).join("")}
      </div>
    </section>

    <section class="sec" id="vault">
      ${k("The reference vault",`<a class="btn btn-ghost btn-sm" href="${h("vault")}">All ${s.length}${c.arrow}</a>`)}
      <p class="t-lede" style="max-width:70ch">${j(t.totalEntries)} entries across
      ${s.length} collections. This is not reading material — it is what you open
      when you need one specific thing.</p>
      <div class="row-wrap" style="gap:var(--s-2);margin:var(--s-5) 0">
        ${n.map(l=>`<a class="chip" href="${h(`vault?kind=${encodeURIComponent(l.kind)}`)}">${r(l.title)}
          <span class="fcount">${e.collectionsOfKind(l.kind).length}</span></a>`).join("")}
      </div>
      ${T(s.slice(0,6).map(kt),3)}
    </section>
  </div>`,accent:"atlas"}}function Fn(e,t){const a=t.groups(e.id)||[],s=t.ofTrack(e.id)||[],n=D(s.map(o=>o.id)),i=s.length?Math.round(n/s.length*100):0;return`
  <section data-accent="${e.accent}">
    <div class="rule-head">
      <div class="row" style="gap:var(--s-3);align-items:center;min-width:0">
        <span class="res-ic">${vt(e.icon)}</span>
        <div style="min-width:0">
          <h3 class="t-subtitle" style="margin:0">${r(e.name)}</h3>
          <p class="t-meta faint" style="margin:2px 0 0">${x(a.length,e.groupName?e.groupName.toLowerCase():"level")} · ${x(s.length,e.unitName||"piece",e.unitPlural)}</p>
        </div>
      </div>
      <a class="btn btn-ghost btn-sm" href="${h(`track/${e.id}`)}">Open${c.arrow}</a>
    </div>

    ${s.length?`<div class="meter" style="max-width:320px;margin:var(--s-3) 0 var(--s-5)">
      <span style="width:${i}%"></span></div>
      <p class="t-meta faint" style="margin-top:-10px;margin-bottom:var(--s-5)">${n} of ${s.length} finished</p>`:""}

    <div class="stack" style="gap:var(--s-3)">
      ${a.map(o=>{const l=t.groupUnits(e.id,o.id)||[],d=D(l.map(p=>p.id));return`
        <a class="rowitem" href="${h(`track/${e.id}#g-${r(o.id)}`)}">
          <div style="min-width:0">
            <p class="eyebrow">${r(e.groupName||"Level")} ${o.roman||o.number}</p>
            <strong>${m(o.title)}</strong>
            ${o.promise?`<p class="t-small muted" style="margin:2px 0 0">${m(o.promise)}</p>`:""}
          </div>
          <span class="t-meta faint">${d}/${l.length}</span>
        </a>`}).join("")}
    </div>
  </section>`}async function Un(e){let t;try{const{manifest:u}=await B();t=J(u)}catch(u){return{title:"Track",html:`<div class="shell band">${O("This track could not load","The content index did not come back.")}</div>`,error:u}}const a=t.track(e.params.id);if(!a)return{title:"Not found",html:null,notFound:!0};const s=t.groups(a.id)||[],n=t.ofTrack(a.id)||[],i=D(n.map(u=>u.id)),o=n.length?Math.round(i/n.length*100):0,l=t.stats(),d=l.byTrack[a.id]||{},p=n.find(u=>!P(u.id))||null,y=t.tracks().filter(u=>u.id!==a.id),g=`
  <div class="shell band">
    ${A([{label:"The library",to:"library"},{label:a.name}])}

    ${I({eyebrow:a.tagline||"Track",title:a.name,lede:a.description,accent:a.accent,actions:`
        ${p?`<a class="btn btn-primary btn-lg" href="${h(`read/${a.id}/${p.id}`)}">${c.book}${i?"Continue":"Start"} — ${r(p.title)}</a>`:`<span class="badge badge-success">All ${n.length} finished</span>`}
        ${C(`track:${a.id}`,"Save this track")}`})}

    ${ie([{v:x(n.length,a.unitName||"piece",a.unitPlural),l:"in total"},{v:`${i}/${n.length}`,l:"finished"},{v:j(d.words||0),l:"words"},{v:x(s.length,a.groupName?a.groupName.toLowerCase():"level"),l:"in sequence"}])}

    ${n.length?`<div class="meter meter-lg" style="max-width:460px;margin:var(--s-5) 0">
      <span style="width:${o}%"></span></div>`:""}

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="tr-q">Find something in this track</label>
      <div class="searchbar">${c.search}
        <input class="input" id="tr-q" type="search" data-tr-q autocomplete="off"
          placeholder="${r(a.unitName||"piece")} title, skill, tool…"></div>
      <span class="hint">Filters the list below. Press Enter to search the whole site.</span>
    </div>

    <p class="t-meta faint" data-tr-count>${x(n.length,a.unitName||"piece",a.unitPlural)}</p>

    ${V(s.map(u=>({id:`g-${u.id}`,label:`${u.roman||u.number}. ${u.title}`})))}

    <div data-tr-list class="stack" style="gap:var(--s-8);margin-top:var(--s-6)">
      ${s.map(u=>Hn(u,a,t)).join("")}
    </div>

    <div data-tr-empty hidden>
      ${Q("Nothing in this track matches that","Try a shorter word, or search everything — it may be in another track or in a playbook.",`<a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>`)}
    </div>

    <section class="sec">
      ${k("The other tracks")}
      <div style="margin-top:var(--s-4)">
        ${T(y.map(u=>ra(u,{units:(t.ofTrack(u.id)||[]).length,words:(l.byTrack[u.id]||{}).words||0})),3)}
      </div>
    </section>
  </div>`;return{title:a.name,html:g,accent:a.accent,mount:Yn,recent:{id:`track:${a.id}`,kind:"page",title:a.name,route:`track/${a.id}`}}}function Hn(e,t,a){const s=a.groupUnits(t.id,e.id)||[],n=D(s.map(l=>l.id)),i=s.length?Math.round(n/s.length*100):0,o=s.length?rt(s[0].id):[];return`
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
      ${e.wordCount?`<div><div class="lab">Length</div><div class="v">${j(e.wordCount)} words · about ${Math.max(1,Math.round(e.wordCount/200/60))}h</div></div>`:""}
    </div>

    ${s.length?`<div class="meter" style="max-width:280px;margin-bottom:var(--s-5)">
      <span style="width:${i}%"></span></div>`:""}

    <div class="grid g-3">
      ${s.map((l,d)=>`<div data-tr-item data-hay="${r(Vn(l,t))}">${Ie(l,{n:d+1})}</div>`).join("")}
    </div>

    ${o.length?`<p class="t-meta faint" style="margin-top:var(--s-4)">
      Also part of ${o.slice(0,2).map(l=>`<a href="${h(`path/${l.id}`)}">${r(l.title)}</a>`).join(" and ")}.</p>`:""}
  </section>`}const Vn=(e,t)=>`${e.title} ${e.subtitle||""} ${e.skill||""} ${e.tool||""} ${e.result||""} ${e.oneline||""} ${t.name}`.toLowerCase();function Yn(e){const t=e.querySelector("[data-tr-q]");if(!t)return;const a=[...e.querySelectorAll("[data-tr-item]")],s=[...e.querySelectorAll('.pb[id^="g-"]')],n=e.querySelector("[data-tr-list]"),i=e.querySelector("[data-tr-empty]"),o=e.querySelector("[data-tr-count]"),l=o?o.textContent:"",p=pe(()=>{const g=t.value.trim().toLowerCase();let u=0;for(const v of a){const b=!g||v.dataset.hay.includes(g);v.hidden=!b,b&&u++}for(const v of s)v.hidden=![...v.querySelectorAll("[data-tr-item]")].some(b=>!b.hidden);n&&(n.hidden=u===0),i&&(i.hidden=u!==0),o&&(o.textContent=g?`${u} of ${a.length} match “${t.value.trim()}”`:l)},130),y=g=>{g.key==="Enter"&&t.value.trim().length>2&&re(`search?q=${encodeURIComponent(t.value.trim())}`)};return t.addEventListener("input",p),t.addEventListener("keydown",y),()=>{t.removeEventListener("input",p),t.removeEventListener("keydown",y)}}const no=Object.freeze(Object.defineProperty({__proto__:null,default:Bn,trackView:Un},Symbol.toStringTag,{value:"Module"})),Et=(e,t)=>({title:e,html:`<div class="shell band">${O(e,t)}</div>`});async function zn(e){let t;try{const{manifest:d}=await B();t=J(d)}catch(d){return{...Et("The vault could not load","The content index did not come back. Nothing saved is affected."),error:d}}const a=e.query.kind||"",s=t.vaultGroups(),n=s.find(d=>d.kind===a),i=n?t.collectionsOfKind(n.kind):t.collections(),o=t.stats(),l=`
  <div class="shell band">
    ${A([{label:"The library",to:"library"},{label:"Reference vault"}])}

    ${I({eyebrow:n?"Reference vault":"The library",title:n?n.title:"The reference vault",lede:n?n.blurb:`${j(o.totalEntries)} entries in ${j(o.totalCollections)} collections. Playbooks, prompt libraries, scenario decks, situation cards, thinkers worth reading and every named concept defined. Not reading material — reference.`,accent:"council",meta:[x(i.length,"collection")],actions:C(n?`vault-kind:${n.kind}`:"page:vault","Save")})}

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

    <p class="t-meta faint" data-v-count>${x(i.length,"collection")}</p>

    <div class="grid g-3" data-v-grid style="margin-top:var(--s-4)">
      ${i.map(d=>`<div data-v-item data-hay="${r(`${d.title} ${d.kind} ${d.banner||""} ${(d.entries||[]).map(p=>p.title).join(" ")}`.toLowerCase())}">${kt(d)}</div>`).join("")}
    </div>

    <div data-v-empty hidden>
      ${Q("No collection matches that","Entry titles are searchable from the main search, which looks inside the collections rather than at their names.",`<a class="btn btn-soft" href="${h("search")}">${c.search}Search every entry</a>`)}
    </div>

    ${n?`
      <section class="sec">
        ${k("Other kinds")}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
          ${s.filter(d=>d.kind!==n.kind).map(d=>`<a class="chip" href="${h(`vault?kind=${encodeURIComponent(d.kind)}`)}">${r(d.title)}</a>`).join("")}
        </div>
      </section>`:""}
  </div>`;return{title:n?`${n.title} · Vault`:"The reference vault",html:l,accent:"council",mount:Kn}}function Kn(e){const t=e.querySelector("[data-v-q]");if(!t)return;const a=[...e.querySelectorAll("[data-v-item]")],s=e.querySelector("[data-v-grid]"),n=e.querySelector("[data-v-empty]"),i=e.querySelector("[data-v-count]"),l=pe(()=>{const p=t.value.trim().toLowerCase();let y=0;for(const g of a){const u=!p||g.dataset.hay.includes(p);g.hidden=!u,u&&y++}s&&(s.hidden=y===0),n&&(n.hidden=y!==0),i&&(i.textContent=p?`${y} of ${a.length} match “${t.value.trim()}”`:x(a.length,"collection"))},130),d=p=>{p.key==="Enter"&&t.value.trim().length>2&&re(`search?q=${encodeURIComponent(t.value.trim())}`)};return t.addEventListener("input",l),t.addEventListener("keydown",d),()=>{t.removeEventListener("input",l),t.removeEventListener("keydown",d)}}async function Zn(e){const t=e.params.id;let a,s;try{const[{manifest:g},u]=await Promise.all([B(),na(t)]);s=J(g),a=u}catch(g){return g&&g.status===404?{title:"Not found",html:null,notFound:!0}:{...Et("This collection could not load","The file did not come back. Try again — nothing saved is affected."),error:g}}if(!a)return{title:"Not found",html:null,notFound:!0};const n=s.collection(t)||{},i=s.vaultGroups().find(g=>g.kind===(a.kind||n.kind)),o=a.entries||[],l=s.collectionsOfKind(a.kind||n.kind).filter(g=>g.id!==t).slice(0,3),d=new Map;for(const g of o){const u=(n.entries||[]).find(b=>b.id===g.id),v=u&&u.group||"";d.has(v)||d.set(v,[]),d.get(v).push(g)}const p=d.size>1||d.size===1&&[...d.keys()][0],y=`
  <div class="shell band">
    ${A([{label:"The library",to:"library"},{label:"Vault",to:"vault"},...i?[{label:i.title,to:`vault?kind=${encodeURIComponent(i.kind)}`}]:[],{label:a.title}])}

    ${I({eyebrow:i?i.title:a.kind||"Collection",title:a.title,lede:a.banner||n.banner||"",accent:"council",meta:[x(o.length,"entry","entries"),`${j(a.wordCount||n.wordCount||0)} words`],actions:`
        ${o.length?`<a class="btn btn-primary" href="${h(`vault/${t}/${o[0].id}`)}">${c.book}Open the first entry</a>`:""}
        ${C(`vault:${t}`,"Save this collection")}`})}

    ${(a.lead||[]).length?`<div class="prose" style="margin:var(--s-6) 0">${xt(a.lead)}</div>`:""}

    ${ie([{v:o.length,l:"entries"},{v:j(a.wordCount||0),l:"words"},{v:`${ce(a.wordCount||0)} min`,l:"to read all of it"}])}

    <div class="field" style="max-width:520px;margin:var(--s-6) 0">
      <label for="c-q">Find an entry</label>
      <div class="searchbar">${c.search}
        <input class="input" id="c-q" type="search" data-c-q autocomplete="off" placeholder="Entry title or a phrase inside it…"></div>
      <span class="hint">Searches the titles and the text of every entry in this collection.</span>
    </div>

    <p class="t-meta faint" data-c-count>${x(o.length,"entry","entries")}</p>

    <div data-c-list class="stack" style="gap:var(--s-6);margin-top:var(--s-5)">
      ${p?[...d.entries()].map(([g,u])=>`
            <section data-c-group>
              ${g?`<div class="rule-head"><h2 class="t-subtitle" style="margin:0">${m(g)}</h2>
                <span class="t-meta faint">${x(u.length,"entry","entries")}</span></div>`:""}
              <div class="stack" style="gap:var(--s-2);margin-top:var(--s-3)">
                ${u.map(v=>Bt(v,t)).join("")}
              </div>
            </section>`).join(""):`<div class="stack" style="gap:var(--s-2)">${o.map(g=>Bt(g,t)).join("")}</div>`}
    </div>

    <div data-c-empty hidden>
      ${Q("No entry here matches that","Try fewer words, or search the whole site.",`<a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>`)}
    </div>

    ${l.length?`
      <section class="sec">
        ${k(i?`More ${i.title.toLowerCase()}`:"Related collections",`<a class="btn btn-ghost btn-sm" href="${h("vault")}">All${c.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${T(l.map(kt),3)}</div>
      </section>`:""}
  </div>`;return{title:a.title,html:y,accent:"council",mount:Gn,recent:{id:`vault:${t}`,kind:"collection",title:a.title,route:`vault/${t}`}}}function Bt(e,t){const a=(e.blocks||[]).map(s=>s.text||"").join(" ");return`
  <a class="rowitem" data-c-item data-hay="${r(`${e.title} ${a}`.slice(0,900).toLowerCase())}"
     href="${h(`vault/${t}/${e.id}`)}">
    <div style="min-width:0">
      <strong>${m(e.title)}</strong>
      ${a?`<p class="t-small muted clamp-2" style="margin:2px 0 0">${r(a.slice(0,180))}</p>`:""}
    </div>
    <span class="t-meta faint">${ce(e.wordCount||0)} min</span>
  </a>`}function Gn(e){const t=e.querySelector("[data-c-q]");if(!t)return;const a=[...e.querySelectorAll("[data-c-item]")],s=[...e.querySelectorAll("[data-c-group]")],n=e.querySelector("[data-c-list]"),i=e.querySelector("[data-c-empty]"),o=e.querySelector("[data-c-count]"),d=pe(()=>{const y=t.value.trim().toLowerCase();let g=0;for(const u of a){const v=!y||u.dataset.hay.includes(y);u.hidden=!v,v&&g++}for(const u of s)u.hidden=![...u.querySelectorAll("[data-c-item]")].some(v=>!v.hidden);n&&(n.hidden=g===0),i&&(i.hidden=g!==0),o&&(o.textContent=y?`${g} of ${a.length} match “${t.value.trim()}”`:x(a.length,"entry","entries"))},130),p=y=>{y.key==="Enter"&&t.value.trim().length>2&&re(`search?q=${encodeURIComponent(t.value.trim())}`)};return t.addEventListener("input",d),t.addEventListener("keydown",p),()=>{t.removeEventListener("input",d),t.removeEventListener("keydown",p)}}async function Jn(e){const t=e.params.coll,a=e.params.entry;let s;try{s=await na(t)}catch(u){return u&&u.status===404?{title:"Not found",html:null,notFound:!0}:{...Et("This entry could not load","The collection file did not come back."),error:u}}if(!s)return{title:"Not found",html:null,notFound:!0};const n=s.entries||[],i=n.findIndex(u=>u.id===a);if(i<0)return{title:"Not found",html:null,notFound:!0};const o=n[i],l=n[i-1]||null,d=n[i+1]||null,p=`entry:${t}#${a}`,y=`entry:${t}#${a}`,g=`
  <div class="shell-narrow band">
    ${A([{label:"Vault",to:"vault"},{label:s.title,to:`vault/${t}`},{label:o.title}])}

    <header class="doc-head">
      <p class="kicker">${m(s.title)}</p>
      <h1>${m(o.title)}</h1>
      <div class="doc-facts">
        <span>${ce(o.wordCount||0)} min read</span>
        <span>${j(o.wordCount||0)} words</span>
        <span>Entry ${i+1} of ${n.length}</span>
      </div>
      <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-5)">
        ${C(`entry:${t}#${a}`)}
        ${Ve(y)}
      </div>
    </header>

    <div class="prose">${(o.blocks||[]).length?xt(o.blocks):`
      <p class="muted">This entry has no body text in the corpus. That is a gap in the
      source material rather than a loading error.</p>`}</div>

    <section class="sec">
      <div class="field">
        <label for="en-note">Your note on this</label>
        <textarea class="textarea" id="en-note" data-note="${r(p)}" rows="3"
          placeholder="What you would actually do with this.">${r(H(p))}</textarea>
        <span class="hint">Saves as you type. Appears on your progress page.</span>
      </div>
    </section>

    ${da({prev:l?{to:`vault/${t}/${l.id}`,label:l.title}:null,next:d?{to:`vault/${t}/${d.id}`,label:d.title}:null})}

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-6)">
      <a class="btn btn-soft" href="${h(`vault/${t}`)}">${c.back}All ${n.length} entries in ${r(s.title)}</a>
      <a class="btn btn-ghost" href="${h("vault")}">${c.vault}The whole vault</a>
    </div>
  </div>`;return{title:o.title,html:g,accent:"council",recent:{id:`entry:${t}#${a}`,kind:"entry",title:o.title,route:`vault/${t}/${a}`}}}const io=Object.freeze(Object.defineProperty({__proto__:null,collectionView:Zn,default:zn,entryView:Jn},Symbol.toStringTag,{value:"Module"})),It="AI Intelligence",$a=e=>`
  <aside class="slab" data-accent="signal" style="margin:var(--s-6) 0">
    <p class="eyebrow">The rule that governs this page</p>
    <p class="t-lede">${m(e)}</p>
  </aside>`,Ye=(e,t,a,s)=>`
  <div class="field" style="max-width:72ch">
    <label for="n-${r(e.replace(/[^a-z0-9]+/gi,"-"))}">${r(t)}</label>
    ${a?`<p class="t-small muted" style="margin-bottom:6px">${m(a)}</p>`:""}
    <textarea class="textarea" id="n-${r(e.replace(/[^a-z0-9]+/gi,"-"))}"
      data-note="${r(e)}" placeholder="${r(s||"")}">${r(H(e))}</textarea>
    <span class="hint">Saves as you type. Stays on this device.</span>
  </div>`,wa=e=>`
  <a class="card rise" href="${h(e.route)}" data-accent="signal">
    <div class="card-head"><div style="min-width:0">
      <span class="res-ic" style="margin-bottom:var(--s-3)">${c.cpu}</span>
      <h3 class="card-title clamp-2">${r(e.title)}</h3>
    </div></div>
    <p class="card-text clamp-3">${r(e.sub)}</p>
  </a>`,ze=e=>{const t=de.find(a=>a.id===e.domain)||{};return`<a class="card rise" href="${h(`ai/problem/${e.id}`)}" data-accent="${t.accent||"signal"}">
    <div class="card-head"><div style="min-width:0">
      <p class="eyebrow">${r(t.title||"AI")}</p>
      <h3 class="card-title clamp-2">${r(e.title)}</h3>
    </div></div>
    <p class="card-text clamp-3">${r(e.hard)}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${x((e.approach||[]).length,"step")}</span>
      <span class="t-meta faint">Prompt included</span>
    </div>
  </a>`},At=e=>`
  <a class="card rise" href="${h(`ai/office/${e.id}`)}" data-accent="${e.accent}">
    <div class="card-head"><div style="min-width:0">
      <span class="res-ic" style="margin-bottom:var(--s-3)">${c[e.icon]||c.inbox}</span>
      <h3 class="card-title">AI for ${r(e.title)}</h3>
    </div></div>
    <p class="card-text clamp-3">${r(e.lede)}</p>
    <div class="card-foot card-foot-line">
      <span class="t-meta faint">${x(e.moves.length,"move")}</span>
      <span class="t-meta faint">${x((e.problems||[]).length,"worked problem")}</span>
    </div>
  </a>`,be=()=>`
  <aside class="callout callout-info" style="margin-top:var(--s-8)">
    <span class="lab">How this section works</span>
    <p>There is no AI model running inside this site, and nothing you type here is
    sent anywhere. This is method, structure and prompts you copy into whichever
    assistant you already use. Everything is written to be true regardless of
    which model you pick, or how much better they get.</p>
  </aside>`;async function Qn(){const e=pt;return{title:"AI Intelligence",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence"}])}

    ${I({eyebrow:It,title:"Using AI without handing over your judgement",lede:"Most people use AI as a faster search box and get search-box results. The difference between that and real capability is not a secret prompt — it is method: define the problem, supply the context, decompose the work, verify the output, and keep the decision.",accent:"signal",actions:`
        <a class="btn btn-primary btn-lg" href="${h("ai/workflow")}">${c.route}Start with the workflow</a>
        <a class="btn btn-soft btn-lg" href="${h("ai/library")}">${c.search}I have a specific problem</a>
        ${C("ai:hub","Save this section")}`})}

    ${ie([{v:Zt.length,l:"workflow steps"},{v:oe.length,l:"real problems"},{v:K.length,l:"battle tests"},{v:et.length,l:"rehearsal partners"}])}

    ${$a("AI supports judgement. It does not replace responsibility. If you cannot explain a decision without mentioning a model, you have not made the decision — you have accepted one.")}

    ${V([{id:"start",label:"Where to start"},{id:"method",label:"The method"},{id:"problems",label:"Your problem"},{id:"office",label:"At work"},{id:"practise",label:"Practise"},{id:"judge",label:"Judge your own use"}])}

    <section class="sec" id="start">
      <div class="sec-head"><h2>Where to start</h2></div>
      <p class="t-lede" style="max-width:68ch">Three honest entry points, depending on what you actually want right now.</p>
      ${T([`<a class="card card-pad-lg rise" href="${h("ai/library")}" data-accent="clay">
          <span class="res-ic" style="margin-bottom:var(--s-3)">${c.inbox}</span>
          <h3 class="card-title">I have a problem today</h3>
          <p class="card-text">Search ${oe.length} real problems — a dreaded email, a CV that gets no replies, a contract you do not understand. Each one gives you the approach and the prompt.</p>
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
      <div style="margin-top:var(--s-5)">${T(e.map(wa),3)}</div>
    </section>

    <section class="sec" id="problems">
      ${k("Start from a problem, not a feature",`<a class="btn btn-ghost btn-sm" href="${h("ai/library")}">All ${oe.length}${c.arrow}</a>`)}
      <div class="row-wrap" style="gap:var(--s-2);margin:var(--s-4) 0">
        ${de.map(a=>`<a class="chip" href="${h(`ai/library?d=${a.id}`)}">${c[a.icon]||c.circle}${r(a.title)}</a>`).join("")}
      </div>
      ${T(oe.slice(0,6).map(ze),3)}
    </section>

    <section class="sec" id="office">
      ${k("The office masterclass")}
      <p class="t-lede" style="max-width:68ch">Six areas where AI use at work either compounds into visible capability or quietly produces plausible rubbish.</p>
      <div style="margin-top:var(--s-5)">${T(ut.map(At),3)}</div>
    </section>

    <section class="sec" id="practise">
      ${k("Practise, not read")}
      ${T([`<a class="card rise" href="${h("ai/roleplay")}" data-accent="clay">
          <div class="card-head"><div><span class="res-ic" style="margin-bottom:var(--s-3)">${c.mic}</span>
          <h3 class="card-title">Role-play rehearsal</h3></div></div>
          <p class="card-text">${et.length} briefs that turn an assistant into an interviewer, a hostile client, a sceptical manager. Rehearse before it is real.</p>
        </a>`,`<a class="card rise" href="${h("ai/battles")}" data-accent="signal">
          <div class="card-head"><div><span class="res-ic" style="margin-bottom:var(--s-3)">${c.bolt}</span>
          <h3 class="card-title">Battle tests</h3></div></div>
          <p class="card-text">${K.length} progressive levels with a pass condition and the trap most people fall into. ${_t()?`You have logged ${_t()}.`:"None logged yet."}</p>
        </a>`,`<a class="card rise" href="${h("ai/builder")}" data-accent="atlas">
          <div class="card-head"><div><span class="res-ic" style="margin-bottom:var(--s-3)">${c.layers}</span>
          <h3 class="card-title">Workflow builder</h3></div></div>
          <p class="card-text">Design a repeatable pipeline: input, AI step, your analysis, your review, output, action. Save it and reuse it.</p>
        </a>`,`<a class="card rise" href="${h("ai/challenge")}" data-accent="council">
          <div class="card-head"><div><span class="res-ic" style="margin-bottom:var(--s-3)">${c.flag}</span>
          <h3 class="card-title">The master challenge</h3></div></div>
          <p class="card-text">One real problem from your actual life through all ${zt.stages.length} stages. The only exercise here that proves anything.</p>
        </a>`],2)}
    </section>

    <section class="sec" id="judge">
      ${k("Judge your own use")}
      <p class="t-lede" style="max-width:68ch">§45. Ask these after any significant piece of AI-assisted work. If you cannot answer them, the work is not finished.</p>
      <ol class="moves" style="margin-top:var(--s-5);max-width:76ch">
        ${Wa.map((a,s)=>`<li><b>${s+1}</b><span>${m(a)}</span></li>`).join("")}
      </ol>
      <div style="margin-top:var(--s-6)">
        ${Ye("ai:eval","Answer them about the last thing you used AI for","Pick one real task from this week. Answering honestly here is worth more than reading three more pages.","The task was… What I had to fix… What it got wrong that I nearly missed…")}
      </div>
    </section>

    ${be()}
  </div>`,accent:"signal"}}const ka={workflow:{title:"The AI Workflow",eyebrow:"Method · §26",lede:"Eleven steps from a problem you cannot yet describe to an action you have actually taken. Most people run steps 5 and 6 only, then wonder why the output needed rewriting.",accent:"forest",law:"The quality of the output is set before you type the request. Steps 1 to 4 decide the result; the prompt merely delivers it.",note:["ai:workflow","Run it once, on something real","Take one task you have this week and walk all eleven steps. Write what happened at each.","Step 1 — the real problem in one sentence…"],body:()=>`
      <ol class="flow" style="margin-top:var(--s-6)">
        ${Zt.map(e=>`
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
        ${Ka.map(e=>`
          <div class="card card-flat">
            <h3 class="card-title">${r(e.k)}</h3>
            <p class="card-text">${m(e.d)}</p>
            ${e.ph?`<p class="t-meta" style="margin-top:var(--s-3);opacity:.8">Ask yourself: ${r(e.ph)}</p>`:""}
          </div>`).join("")}
      </div>
      <h2 class="t-section" style="margin-top:var(--s-8)">The template</h2>
      <p class="t-small muted" style="max-width:68ch;margin-bottom:var(--s-4)">Copy it, fill the brackets, keep the filled version. A good context block is an asset you reuse, not something you retype.</p>
      ${te("Context block",Za)}`},verify:{title:"Verify Before You Trust",eyebrow:"Method · §37",lede:"A model is fluent in exactly the same tone whether it knows or is guessing. Fluency is not evidence, and confidence is not accuracy.",accent:"clay",law:"Anything that would embarrass you, cost you money, or affect someone else must be verified against a source you opened yourself.",note:["ai:verify","What has it got wrong on you?","Write down a time AI output was confidently wrong and you nearly used it. Specific memories change behaviour; general warnings do not.","It told me…"],body:()=>`
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${Ya.map(e=>`
          <article class="card card-flat" data-accent="${e.sev==="critical"?"clay":"amber"}">
            <div class="between" style="gap:var(--s-3);align-items:baseline">
              <h3 class="card-title">${r(e.k)}</h3>
              ${We(e.sev)}
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
      ${te("The audit prompt",za)}`},safety:{title:"AI Safety and Privacy",eyebrow:"Method · §38",lede:"The risk is rarely dramatic. It is a paste that felt harmless — a client document, a colleague's details, a contract — into a box you do not control.",accent:"clay",law:"Assume anything you paste may be stored, read by a human, or used in training, unless you have specifically confirmed otherwise for that product and that account tier.",note:["ai:safety","Your own line","Write the rule you will actually follow about what you paste. A rule you have written is one you notice breaking.","I will never paste…"],body:()=>`
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${Va.map(e=>`
          <article class="card card-flat">
            <div class="between" style="gap:var(--s-3);align-items:baseline">
              <h3 class="card-title">${r(e.k)}</h3>${We(e.sev)}
            </div>
            <p class="card-text">${m(e.d)}</p>
          </article>`).join("")}
      </div>
      ${ye("Anonymise by default","Replace names, employers, account numbers and addresses with placeholders before you paste. It costs you ten seconds and removes the entire category of problem. If the task genuinely needs the real detail, that is a signal the task should not be going into a chat box.")}`},tools:{title:"Choosing the Right Tool",eyebrow:"Method · §39",lede:"The most common AI mistake is not a bad prompt. It is using a language model for a job that belonged to a spreadsheet, a search engine, a specialist, or a conversation.",accent:"council",law:"A model predicts plausible text. Where you need exactness, currency, or accountability, something else is the right instrument.",note:["ai:tools","Where have you used the wrong one?","Name a task you gave AI that a different instrument would have done better, and what it cost you.","I asked it to…"],body:()=>`
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-4)">
        ${Ha.map(e=>`
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
        ${Ua.map(e=>`<li><b>${e.n}</b><span><strong>${r(e.k)}.</strong> ${m(e.d)}</span></li>`).join("")}
      </ol>
      ${te("Specific criticism beats vague dissatisfaction",`That draft failed in a specific way. Here is the diagnosis:

WHAT IS WRONG: [too generic / wrong level / wrong tone / wrong task / factually off / too long]
WHAT I ACTUALLY NEED: [the outcome, restated]
MISSING CONTEXT I SHOULD HAVE GIVEN YOU: [the thing you could not have known]
KEEP: [the parts that worked — do not lose them]

Rewrite with that. Do not apologise, do not explain the changes.`)}`},leverage:{title:"Time Leverage",eyebrow:"Method · §34",lede:"Six levels, in strict order of value. Automation is last, not first — and the level almost nobody uses is the one at the top.",accent:"forest",law:Da,note:["ai:leverage","Run the ladder on one recurring task","Pick something you do every week. Go down the levels in order and stop at the first honest answer.","The task is… Could it be eliminated?…"],body:()=>`
      <ol class="flow" style="margin-top:var(--s-6)">
        ${[...Fa].sort((e,t)=>e.order-t.order).map(e=>`
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
      ${ye("Automating the wrong thing is worse than doing it by hand","A manual unnecessary task dies when you get bored. An automated unnecessary task runs forever, and someone will maintain it for years without ever asking why it exists. Go down the ladder in order.")}`},decide:{title:"The AI Decision Engine",eyebrow:"Method · §33",lede:"Used well, a model widens your options and attacks your reasoning. Used badly, it becomes a way of having made a decision without having decided.",accent:"council",law:Ke.law,note:["ai:decide","A decision you are sitting on","Name it, then run at least the pre-mortem and the “what am I avoiding” prompt. Write what surfaced.","The decision is… What I am avoiding…"],body:()=>`
      <div class="stack" style="margin-top:var(--s-6);gap:var(--s-5)">
        ${Ke.uses.map(e=>`
          <article class="card card-flat">
            <h3 class="card-title">${r(e.k)}</h3>
            <p class="card-text">${m(e.d)}</p>
            <div style="margin-top:var(--s-4)">${te("Paste this",e.prompt)}</div>
          </article>`).join("")}
      </div>
      <h2 class="t-section" style="margin-top:var(--s-8)">Four things it never does</h2>
      <ul class="marklist badlist" style="margin-top:var(--s-4);max-width:76ch">
        ${Ke.never.map(e=>`<li>${m(e)}</li>`).join("")}
      </ul>
      <div style="margin-top:var(--s-6)" class="callout callout-success">
        <span class="lab">The test</span>
        <p>Can you state the decision, the two strongest arguments against it, and
        what you are accepting as a cost — in your own words, with nothing open?
        If not, you have a recommendation, not a decision.</p>
      </div>`}},Xn=pt.map(e=>e.route.replace(/^ai\//,"")).filter(e=>ka[e]);async function ei(e){const t=e.params.section,a=ka[t];if(!a)return{title:"Not found",html:null,notFound:!0};const s=Xn.filter(i=>i!==t).slice(0,3).map(i=>pt.find(o=>o.route===`ai/${i}`)).filter(Boolean),n=`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:a.title}])}
    ${I({eyebrow:a.eyebrow,title:a.title,lede:a.lede,accent:a.accent,actions:C(`ai:${t}`)})}
    ${a.law?$a(a.law):""}
    <div class="prose">${a.body()}</div>
    ${a.note?`<div style="margin-top:var(--s-8)">${Ye(a.note[0],a.note[1],a.note[2],a.note[3])}</div>`:""}

    ${s.length?`
      <section class="sec">
        ${k("Next in the method",`<a class="btn btn-ghost btn-sm" href="${h("ai")}">All of it${c.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${T(s.map(wa),3)}</div>
      </section>`:""}

    ${be()}
  </div>`;return{title:a.title,html:n,accent:a.accent,recent:{id:`ai:${t}`,kind:"ai",title:a.title,route:`ai/${t}`}}}async function ti(e){const t=e.query.d||"",a=de.find(i=>i.id===t),s=a?tt(a.id):oe,n=`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Problem library"}])}
    ${I({eyebrow:`${It} · §27`,title:a?a.title:"Real-life problem library",lede:a?a.blurb:"Not features, not prompt categories — problems people actually have. Each one names why it is hard, gives the approach, and hands you a prompt worth pasting.",accent:a?a.accent:"signal",meta:[x(s.length,"problem")]})}

    <div class="filters" role="group" aria-label="Filter by area">
      <a class="chip ${a?"":"chip-solid"}" href="${h("ai/library")}">All ${oe.length}</a>
      ${de.map(i=>`
        <a class="chip ${a&&a.id===i.id?"chip-solid":""}" href="${h(`ai/library?d=${i.id}`)}">
          ${c[i.icon]||c.circle}${r(i.title)}
          <span class="fcount">${tt(i.id).length}</span>
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

    <p class="t-meta faint" data-ai-count>${x(s.length,"problem")}</p>

    <div class="grid g-3" data-ai-grid style="margin-top:var(--s-4)">
      ${s.map(i=>`<div data-ai-item data-hay="${r(ai(i))}">${ze(i)}</div>`).join("")}
    </div>

    <div data-ai-empty hidden>
      ${Q("Nothing here matches that","Try fewer words, or search the whole library — the answer may be in a lesson or a playbook rather than a prompt.",`<a class="btn btn-soft" href="${h("search")}">${c.search}Search everything</a>`)}
    </div>

    ${a?`
      <section class="sec">
        ${k("Other areas")}
        <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
          ${de.filter(i=>i.id!==a.id).map(i=>`<a class="chip" href="${h(`ai/library?d=${i.id}`)}">${c[i.icon]||c.circle}${r(i.title)}</a>`).join("")}
        </div>
      </section>`:""}

    ${be()}
  </div>`;return{title:a?`${a.title} · AI`:"AI problem library",html:n,accent:a?a.accent:"signal",mount:si}}const ai=e=>`${e.title} ${e.hard} ${(e.approach||[]).join(" ")} ${e.domain}`.toLowerCase();function si(e){const t=e.querySelector("[data-ai-q]");if(!t)return;const a=[...e.querySelectorAll("[data-ai-item]")],s=e.querySelector("[data-ai-grid]"),n=e.querySelector("[data-ai-empty]"),i=e.querySelector("[data-ai-count]");let o=0;const l=()=>{const y=t.value.trim().toLowerCase();let g=0;for(const u of a){const v=!y||u.dataset.hay.includes(y);u.hidden=!v,v&&g++}s&&(s.hidden=g===0),n&&(n.hidden=g!==0),i&&(i.textContent=y?`${g} of ${a.length} match “${t.value.trim()}”`:x(a.length,"problem"))},d=()=>{clearTimeout(o),o=setTimeout(l,130)},p=y=>{if(y.key!=="Enter")return;const g=t.value.trim();g.length>2&&re(`search?q=${encodeURIComponent(g)}`)};return t.addEventListener("input",d),t.addEventListener("keydown",p),()=>{clearTimeout(o),t.removeEventListener("input",d),t.removeEventListener("keydown",p)}}async function ni(e){const t=Kt(e.params.id);if(!t)return{title:"Not found",html:null,notFound:!0};const a=de.find(o=>o.id===t.domain)||{},s=tt(t.domain).filter(o=>o.id!==t.id).slice(0,3),n=ut.filter(o=>(o.problems||[]).includes(t.id)),i=`
  <div class="shell-narrow band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Problem library",to:"ai/library"},{label:a.title||"Problem",to:`ai/library?d=${t.domain}`},{label:t.title}])}

    ${I({eyebrow:a.title||"Real problem",title:t.title,accent:a.accent||"signal",actions:C(`ai-problem:${t.id}`)})}

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
      ${te("Copy and fill in",t.prompt)}
    </section>

    ${t.warn?`<div class="callout callout-danger" style="margin-top:var(--s-6)">
      <span class="lab">Before you use the output</span><p>${m(t.warn)}</p></div>`:""}

    <section class="sec" id="notes">
      ${Ye(`ai-problem:${t.id}`,"What happened when you tried it","What you had to change, what it got wrong, and what belongs in the prompt next time.","I ran it and…")}
    </section>

    ${n.length?`
      <section class="sec">
        ${k("The wider skill")}
        ${T(n.map(At),2)}
      </section>`:""}

    ${s.length?`
      <section class="sec">
        ${k(`More in ${r(a.title||"this area")}`,`<a class="btn btn-ghost btn-sm" href="${h(`ai/library?d=${t.domain}`)}">All${c.arrow}</a>`)}
        <div style="margin-top:var(--s-4)">${T(s.map(ze),3)}</div>
      </section>`:""}

    ${be()}
  </div>`;return{title:t.title,html:i,accent:a.accent||"signal",recent:{id:`ai-problem:${t.id}`,kind:"ai",title:t.title,route:`ai/problem/${t.id}`}}}async function ii(e){const t=Ba(e.params.id);if(!t)return{title:"Not found",html:null,notFound:!0};const a=(t.problems||[]).map(Kt).filter(Boolean),s=ut.filter(i=>i.id!==t.id),n=`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:`AI for ${t.title}`}])}

    ${I({eyebrow:"Office masterclass · §28",title:`AI for ${t.title}`,lede:t.lede,accent:t.accent,actions:C(`ai-office:${t.id}`)})}

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
        <div style="margin-top:var(--s-4)">${T(a.map(ze),2)}</div>
      </section>`:""}

    <section class="sec" id="notes">
      ${Ye(`ai-office:${t.id}`,`Where ${t.title.toLowerCase()} actually costs you time`,"Name the specific recurring instance. That is the one worth templating.","Every week I…")}
    </section>

    <section class="sec">
      ${k("The other five areas")}
      <div style="margin-top:var(--s-4)">${T(s.map(At),3)}</div>
    </section>

    <div class="callout callout-info" style="margin-top:var(--s-7)">
      <span class="lab">Before you optimise this</span>
      <p>Run the <a href="${h("ai/leverage")}">leverage ladder</a> first. Some of the
      work in this area should not be made faster — it should stop.</p>
    </div>

    ${be()}
  </div>`;return{title:`AI for ${t.title}`,html:n,accent:t.accent,recent:{id:`ai-office:${t.id}`,kind:"ai",title:`AI for ${t.title}`,route:`ai/office/${t.id}`}}}async function oi(){let e=[],t=null;try{e=await bt()}catch(i){t=i}if(t)return{title:"The prompt vault",accent:"signal",html:`<div class="shell band">
        ${A([{label:"AI Intelligence",to:"ai"},{label:"Prompt vault"}])}
        ${O("The prompt vault could not load","The content file did not come back. Your saved work is untouched.")}
      </div>`};const a=new Map;for(const i of e){const o=i.section||"Other";a.has(o)||a.set(o,[]),a.get(o).push(i)}const s=[...a.entries()].sort((i,o)=>o[1].length-i[1].length);return{title:"The prompt vault",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Prompt vault"}])}

    ${I({eyebrow:It,title:"The prompt vault",lede:"Every prompt written into the library, in one place, ready to copy. A prompt is a starting point — fill in your real detail or you will get the generic answer the brackets were there to prevent.",accent:"signal",meta:[x(e.length,"prompt"),x(s.length,"group")],actions:C("ai:prompts","Save the vault")})}

    <div class="field" style="max-width:520px;margin:var(--s-5) 0">
      <label for="pv-q">Find a prompt</label>
      <div class="searchbar">${c.search}
        <input class="input" id="pv-q" type="search" data-pv-q autocomplete="off" placeholder="interview, email, decide, verify…"></div>
      <span class="hint">Filters the prompts below. Press Enter to search the whole site.</span>
    </div>

    <p class="t-meta faint" data-pv-count>${x(e.length,"prompt")}</p>

    <div data-pv-list style="margin-top:var(--s-5)">
      ${s.map(([i,o])=>`
        <section class="sec" data-pv-group data-hay="${r(i.toLowerCase())}">
          <div class="sec-head"><h2>${r(i)}</h2>
            <span class="t-meta faint">${x(o.length,"prompt")}</span></div>
          <div class="stack" style="gap:var(--s-4)">
            ${o.map(l=>`
              <div data-pv-item data-hay="${r(`${l.text} ${l.source||""} ${i}`.toLowerCase())}">
                ${te(l.source||"Prompt",l.text)}
              </div>`).join("")}
          </div>
        </section>`).join("")}
    </div>

    <div data-pv-empty hidden>
      ${Q("No prompt matches that","Try a shorter phrase, or look in the problem library — it is organised by the problem rather than the wording.",`<a class="btn btn-soft" href="${h("ai/library")}">${c.inbox}Problem library</a>`)}
    </div>

    ${be()}
  </div>`,accent:"signal",mount:li}}function li(e){const t=e.querySelector("[data-pv-q]");if(!t)return;const a=[...e.querySelectorAll("[data-pv-item]")],s=[...e.querySelectorAll("[data-pv-group]")],n=e.querySelector("[data-pv-empty]"),i=e.querySelector("[data-pv-count]");let o=0;const l=()=>{const y=t.value.trim().toLowerCase();let g=0;for(const u of a){const v=!y||u.dataset.hay.includes(y);u.hidden=!v,v&&g++}for(const u of s)u.hidden=![...u.querySelectorAll("[data-pv-item]")].some(v=>!v.hidden);n&&(n.hidden=g!==0),i&&(i.textContent=y?`${g} of ${a.length} match “${t.value.trim()}”`:x(a.length,"prompt"))},d=()=>{clearTimeout(o),o=setTimeout(l,130)},p=y=>{y.key==="Enter"&&t.value.trim().length>2&&re(`search?q=${encodeURIComponent(t.value.trim())}`)};return t.addEventListener("input",d),t.addEventListener("keydown",p),()=>{clearTimeout(o),t.removeEventListener("input",d),t.removeEventListener("keydown",p)}}const oo=Object.freeze(Object.defineProperty({__proto__:null,aiFramework:ei,aiLibrary:ti,aiOffice:ii,aiProblem:ni,aiPrompts:oi,default:Qn},Symbol.toStringTag,{value:"Module"})),Me=()=>`
  <aside class="callout callout-info" style="margin-top:var(--s-8)">
    <span class="lab">How this section works</span>
    <p>Nothing here talks to an AI model. These are structures you fill in and
    prompts you copy into whichever assistant you use. Your entries are saved on
    this device only.</p>
  </aside>`,je=(e,t,a,s,n=4)=>{const i=`n-${e.replace(/[^a-z0-9]+/gi,"-")}`;return`
  <div class="field" style="max-width:72ch">
    <label for="${i}">${r(t)}</label>
    ${a?`<p class="t-small muted" style="margin-bottom:6px">${m(a)}</p>`:""}
    <textarea class="textarea" id="${i}" rows="${n}"
      data-note="${r(e)}" placeholder="${r(s||"")}">${r(H(e))}</textarea>
    <span class="hint">Saves as you type.</span>
  </div>`};async function ri(){return{title:"Role-play rehearsal",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Role-play rehearsal"}])}

    ${I({eyebrow:"Practice · §32",title:"Rehearse it before it is real",lede:"The single most underused thing an assistant does well: it will play the difficult person, one turn at a time, for as long as you can stand it. This is the difference between having thought about a conversation and having had it.",accent:"clay",actions:C("ai:roleplay")})}

    <aside class="slab" data-accent="clay" style="margin:var(--s-6) 0">
      <p class="eyebrow">Why this works when reading does not</p>
      <p class="t-lede">You do not discover the gap between what you can type and what
      you can say under pressure by reading. You discover it in the third exchange,
      when the other side does not accept your first answer.</p>
    </aside>

    ${V([{id:"rules",label:"Six rules"},{id:"partners",label:"Nine partners"},{id:"debrief",label:"The debrief"}])}

    <section class="sec" id="rules">
      <div class="sec-head"><h2>Six rules, or it is theatre</h2></div>
      <ol class="moves" style="max-width:78ch">
        ${Ga.map((t,a)=>`<li><b>${a+1}</b><span>${m(t)}</span></li>`).join("")}
      </ol>
    </section>

    <section class="sec" id="partners">
      <div class="sec-head"><h2>Nine partners</h2></div>
      <p class="t-lede" style="max-width:68ch">Copy the brief, fill the brackets with your real situation, and paste it as your first message. Say your answers out loud.</p>

      <div class="stack" style="gap:var(--s-6);margin-top:var(--s-6)">
        ${et.map(t=>`
          <article class="card card-pad-lg" data-accent="${t.accent}">
            <div class="card-head">
              <div style="min-width:0">
                <span class="res-ic" style="margin-bottom:var(--s-3)">${c[t.icon]||c.users}</span>
                <h3 class="card-title">${r(t.role)}</h3>
              </div>
            </div>
            <p class="card-text">${m(t.use)}</p>
            <div style="margin-top:var(--s-4)">${te("The brief — paste this first",t.brief)}</div>
            ${t.after?`<div style="margin-top:var(--s-4)">${te("The debrief — paste this when you type STOP",t.after)}</div>`:""}
          </article>`).join("")}
      </div>
    </section>

    <section class="sec" id="debrief">
      <div class="sec-head"><h2>The debrief is the point</h2></div>
      <p class="t-lede" style="max-width:70ch">A rehearsal without a debrief is just an uncomfortable conversation you had for no reason. Always run the feedback pass, and always write down the one sentence that let you down.</p>
      ${je("ai:roleplay","What broke under pressure","Which question left you with nothing? Which of your sentences weakened your own position? Write the better version now, while it is fresh.","The question I could not answer was…",5)}
    </section>

    ${ye("It is a sparring partner, not a prophet","A model does not know what your actual manager will do, what your actual interviewer values, or what your actual landlord is legally required to accept. It rehearses your delivery and exposes your gaps. It does not predict the other person.")}

    ${Me()}
  </div>`,accent:"clay",recent:{id:"ai:roleplay",kind:"ai",title:"Role-play rehearsal",route:"ai/roleplay"}}}const Oe="ai-builder",xa=()=>({name:"",every:"",stages:Z.map(()=>"")});function Ta(e){const t=xa();return!e||typeof e!="object"||(t.name=typeof e.name=="string"?e.name:"",t.every=typeof e.every=="string"?e.every:"",Array.isArray(e.stages)&&Z.forEach((a,s)=>{t.stages[s]=typeof e.stages[s]=="string"?e.stages[s]:""})),t}const Sa=e=>{const t=[`WORKFLOW: ${e.name||"[unnamed]"}`,`RUNS: ${e.every||"[how often]"}`,""];return Z.forEach((a,s)=>{t.push(`${s+1}. ${a.k}  (${a.who==="ai"?"the model":"you"})`),t.push(`   ${e.stages[s]?e.stages[s].replace(/\n/g,`
   `):"[not yet defined]"}`),t.push("")}),t.push("CHECK BEFORE THIS RUNS FOR REAL:"),t.push("- Does this work need to exist at all, or should it be eliminated?"),t.push("- Which step catches an error before it reaches anyone else?"),t.push("- What happens the week the model output is wrong and nobody notices?"),t.join(`
`)};function Ea(e){const t=e.stages.filter(o=>o.trim()).length,a=Math.round(t/Z.length*100),s=Z.map((o,l)=>({p:o,i:l})).filter(o=>!e.stages[o.i].trim()),n=Z.filter((o,l)=>o.who!=="ai"&&e.stages[l].trim()).length,i=Z.filter((o,l)=>o.who==="ai"&&e.stages[l].trim()).length;return`
    <div class="panel-out">
      <div class="panel-h"><span class="panel-t">Your workflow</span>
        <span class="t-meta faint">${t}/${Z.length} steps defined</span></div>

      <div class="meter meter-lg" style="margin:var(--s-4) 0"><span style="width:${a}%"></span></div>

      ${ie([{v:i,l:"model steps"},{v:n,l:"your steps"},{v:`${a}%`,l:"defined"}])}

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

      <div style="margin-top:var(--s-5)">${te("The written specification",Sa(e))}</div>

      <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">
        <button class="btn btn-soft btn-sm" data-b-copy>${c.copy}Copy the specification</button>
        <button class="btn btn-ghost btn-sm" data-b-reset>${c.reset}Start again</button>
      </div>
    </div>`}async function ci(){const e=Ta(fe(Oe));return{title:"Workflow builder",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Workflow builder"}])}

    ${I({eyebrow:"Build · §35",title:"Workflow builder",lede:"A one-off good output is a nice afternoon. A workflow is capability. Design the whole pipeline — what arrives, what the model does, what you analyse, what you check, what comes out, and what actually happens next.",accent:"atlas",actions:C("ai:builder")})}

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

        ${Z.map((a,s)=>`
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

      <div data-b-out>${Ea(e)}</div>
    </div>

    <section class="sec">
      ${je("ai:builder-log","What happened the first three times you ran it","Where it broke, what you had to add, and whether the work should have existed at all.","Run 1…")}
    </section>

    <div class="callout callout-info" style="margin-top:var(--s-7)">
      <span class="lab">Before you build anything</span>
      <p>Run the <a href="${h("ai/leverage")}">leverage ladder</a>. Automating work
      that should be eliminated is the most expensive mistake in this section.</p>
    </div>

    ${Me()}
  </div>`,accent:"atlas",mount:di}}function di(e){let t=Ta(fe(Oe));const a=e.querySelector("[data-b-out]"),s=()=>{a&&(a.innerHTML=Ea(t))},n=pe(()=>ea(Oe,t),260),i=l=>{const d=l.target.closest("[data-b]");if(!d)return;const p=d.dataset.b;if(p.startsWith("stages.")){const y=Number(p.slice(7));Number.isInteger(y)&&y>=0&&y<Z.length&&(t.stages[y]=d.value)}else(p==="name"||p==="every")&&(t[p]=d.value);s(),n()},o=l=>{if(l.target.closest("[data-b-copy]")){mt(Sa(t)).then(d=>F(d?"Specification copied":"Could not copy"));return}if(l.target.closest("[data-b-reset]")){t=xa(),ta(Oe);for(const d of e.querySelectorAll("[data-b]"))d.value="";s(),F("Cleared")}};return e.addEventListener("input",i),e.addEventListener("click",o),()=>{e.removeEventListener("input",i),e.removeEventListener("click",o)}}const Ia=e=>`battle:${e}`,Mt=e=>P(Ia(e));async function hi(){const e=K.filter(s=>Mt(s.id)).length,t=Math.round(e/K.length*100);return{title:"Battle tests",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Battle tests"}])}

    ${I({eyebrow:"Practice · §41",title:"Eight battle tests",lede:"Progressive, real, and each one has a pass condition you can check honestly. Nothing is awarded for reading the page — you mark a level passed only when the stated condition is actually true.",accent:"signal",actions:C("ai:battles")})}

    ${ie([{v:`${e}/${K.length}`,l:"levels passed"},{v:`${t}%`,l:"through"},{v:K.length-e,l:"remaining"}])}

    <div class="meter meter-lg" style="margin:var(--s-5) 0;max-width:420px"><span style="width:${t}%"></span></div>

    <div class="stack" style="gap:var(--s-6)">
      ${K.map(s=>pi(s)).join("")}
    </div>

    ${e===K.length?`
      <aside class="slab" data-accent="council" style="margin-top:var(--s-8)">
        <p class="eyebrow">All eight</p>
        <p class="t-lede">Then the honest next step is the
        <a href="${h("ai/challenge")}">master challenge</a> — one real problem from your
        own life through the entire system. That is the only test here with a consequence.</p>
      </aside>`:""}

    ${Me()}
  </div>`,accent:"signal",mount:ui}}function pi(e){const t=Mt(e.id),a=`battle-note:${e.id}`;return`
  <article class="card card-pad-lg" data-accent="${t?"forest":"signal"}" data-battle="${r(e.id)}">
    <div class="card-head">
      <div style="min-width:0">
        <p class="eyebrow">Level ${e.level}</p>
        <h3 class="card-title">${r(e.title)}</h3>
      </div>
      ${t?'<span class="badge badge-success">Passed</span>':""}
    </div>

    <p class="card-text">${m(e.goal)}</p>

    <div class="promise" style="margin-top:var(--s-4)">
      <div><div class="lab">The task</div><div class="v">${m(e.task)}</div></div>
      <div><div class="lab">You have passed when</div><div class="v">${m(e.pass)}</div></div>
      <div><div class="lab">The trap</div><div class="v">${m(e.trap)}</div></div>
    </div>

    <div style="margin-top:var(--s-5)">
      ${je(a,"What happened","","What you ran, what came back, what you changed.",3)}
    </div>

    <div class="row-wrap" style="gap:var(--s-3);margin-top:var(--s-4)">
      <button class="btn ${t?"btn-soft":"btn-primary"} btn-sm" data-battle-pass="${r(e.id)}">
        ${t?c.circleCheck:c.circle}${t?"Passed — undo":"The condition is true — mark passed"}
      </button>
    </div>
  </article>`}function ui(e){const t=a=>{const s=a.target.closest("[data-battle-pass]");if(!s)return;const n=s.dataset.battlePass,i=!Mt(n);ss(Ia(n),i),i&&ls(n,1,{passed:!0,at:Date.now()}),s.className=`btn ${i?"btn-soft":"btn-primary"} btn-sm`,s.innerHTML=`${i?c.circleCheck:c.circle}${i?"Passed — undo":"The condition is true — mark passed"}`;const o=s.closest("[data-battle]");if(o){o.dataset.accent=i?"forest":"signal";const l=o.querySelector(".card-head"),d=o.querySelector(".badge-success");i&&!d&&l&&l.insertAdjacentHTML("beforeend",'<span class="badge badge-success">Passed</span>'),!i&&d&&d.remove()}F(i?"Level marked passed":"Level reopened")};return e.addEventListener("click",t),()=>e.removeEventListener("click",t)}const Pe="ai-score",Aa=()=>G.map(()=>0);function Ma(e){const t=Aa();return Array.isArray(e)&&G.forEach((a,s)=>{const n=Number(e[s]);t[s]=Number.isFinite(n)?Math.min(10,Math.max(0,Math.round(n))):0}),t}const ja=e=>jt.find(t=>e>=t.min&&e<=t.max)||jt[0];function Ca(e){const t=e.reduce((l,d)=>l+d,0),a=ja(t),s=e.filter(l=>l>0).length,n=G.map((l,d)=>({d:l,v:e[d]})).sort((l,d)=>l.v-d.v),i=n.slice(0,3),o=[...n].reverse().slice(0,2);return`
  <div class="panel-out">
    <div class="panel-h"><span class="panel-t">Where you stand</span>
      <span class="t-meta faint">${s}/${G.length} rated</span></div>

    <div class="dial" style="margin:var(--s-4) 0">
      <b>${t}</b><span>out of 100</span>
    </div>

    <div class="meter meter-lg"><span style="width:${t}%"></span></div>

    <div class="callout ${t>=65?"callout-success":t>=45?"callout-info":"callout-warning"}" style="margin-top:var(--s-5)">
      <span class="lab">${r(a.k)}</span>
      <p>${m(a.d)}</p>
    </div>

    ${s<G.length?`
      <p class="t-small muted" style="margin-top:var(--s-4)">${G.length-s}
      ${G.length-s===1?"dimension is":"dimensions are"} still at zero.
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
  </div>`}const mi=e=>{const t=e.reduce((s,n)=>s+n,0),a=ja(t);return[`AI RESOURCEFULNESS — ${t}/100 (${a.k})`,"",...G.map((s,n)=>`${String(e[n]).padStart(2," ")}/10  ${s.k}`),"",a.d].join(`
`)};async function vi(){const e=Ma(fe(Pe));return{title:"AI resourcefulness score",html:`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Resourcefulness score"}])}

    ${I({eyebrow:"Assess · §42",title:"AI resourcefulness score",lede:"Ten dimensions, rated by you, honestly. This is not a quiz with right answers — it is a mirror, and it is only useful if you rate yourself as you actually behave rather than as you intend to.",accent:"council",actions:C("ai:score")})}

    <aside class="slab" data-accent="council" style="margin:var(--s-6) 0">
      <p class="eyebrow">How to rate</p>
      <p class="t-lede">0 means never, 5 means sometimes and inconsistently, 10 means it is
      a reflex you would notice yourself skipping. Rate the last month, not your best week.</p>
    </aside>

    <div class="tool tool-split">
      <div class="panel">
        <div class="panel-h"><span class="panel-t">Rate yourself</span></div>
        ${G.map((a,s)=>`
          <div class="field">
            <label for="sc-${s}">${r(a.k)} <span class="t-meta faint" data-sc-v="${s}">${e[s]}/10</span></label>
            <p class="t-small muted" style="margin-bottom:6px">${m(a.d)}</p>
            <input class="range" id="sc-${s}" type="range" min="0" max="10" step="1"
              value="${e[s]}" data-sc="${s}" aria-describedby="sc-h-${s}">
            <span class="hint" id="sc-h-${s}">0 never · 5 inconsistently · 10 reflex</span>
          </div>`).join("")}
      </div>

      <div data-sc-out>${Ca(e)}</div>
    </div>

    <section class="sec">
      ${je("ai:score-note","The one dimension you will actually change","Pick the lowest score you care about and write the specific habit you will add this week. One is better than three.","The dimension is… The habit is…")}
    </section>

    ${Me()}
  </div>`,accent:"council",mount:gi}}function gi(e){let t=Ma(fe(Pe));const a=e.querySelector("[data-sc-out]"),s=()=>{a&&(a.innerHTML=Ca(t))},n=pe(()=>ea(Pe,t),260),i=l=>{const d=l.target.closest("[data-sc]");if(!d)return;const p=Number(d.dataset.sc);if(!Number.isInteger(p)||p<0||p>=G.length)return;t[p]=Math.min(10,Math.max(0,Number(d.value)||0));const y=e.querySelector(`[data-sc-v="${p}"]`);y&&(y.textContent=`${t[p]}/10`),s(),n()},o=l=>{if(l.target.closest("[data-sc-copy]")){mt(mi(t)).then(d=>F(d?"Summary copied":"Could not copy"));return}if(l.target.closest("[data-sc-reset]")){t=Aa(),ta(Pe);for(const d of e.querySelectorAll("[data-sc]"))d.value=0;for(const d of e.querySelectorAll("[data-sc-v]"))d.textContent="0/10";s(),F("Reset")}};return e.addEventListener("input",i),e.addEventListener("click",o),()=>{e.removeEventListener("input",i),e.removeEventListener("click",o)}}async function yi(){const e=zt,a=e.stages.map(i=>`ai:challenge:${i.n}`).filter(i=>H(i).trim()).length,s=Math.round(a/e.stages.length*100),n=`
  <div class="shell band">
    ${A([{label:"AI Intelligence",to:"ai"},{label:"Master challenge"}])}

    ${I({eyebrow:"The final test · §43",title:e.title,lede:e.lede,accent:"council",actions:C("ai:challenge")})}

    ${ie([{v:`${a}/${e.stages.length}`,l:"stages written"},{v:`${s}%`,l:"through"},{v:e.rules.length,l:"rules"}])}

    <div class="meter meter-lg" style="margin:var(--s-5) 0;max-width:420px"><span style="width:${s}%"></span></div>

    <aside class="slab" data-accent="council" style="margin:var(--s-6) 0">
      <p class="eyebrow">Four rules</p>
      <ul class="marklist" style="margin-top:var(--s-3)">
        ${e.rules.map(i=>`<li>${m(i)}</li>`).join("")}
      </ul>
    </aside>

    ${V(e.stages.map(i=>({id:`mc-${i.n}`,label:`${i.n}. ${i.k}`})))}

    <div class="stack" style="gap:var(--s-6);margin-top:var(--s-6)">
      ${e.stages.map(i=>{const o=`ai:challenge:${i.n}`,l=H(o).trim().length>0;return`
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
          ${je(o,`Stage ${i.n} — your record`,"","Write it properly. A stage you have not written is a stage you have thought about.",4)}
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

    ${ye("This is the only page here that proves anything","Everything else in this section can be read. This one cannot be faked, because stage 9 requires an irreversible action with a date, and stage 10 requires you to come back and write what actually happened.")}

    ${Me()}
  </div>`;return{title:e.title,html:n,accent:"council",recent:{id:"ai:challenge",kind:"ai",title:e.title,route:"ai/challenge"}}}const lo=Object.freeze(Object.defineProperty({__proto__:null,aiBattles:hi,aiBuilder:ci,aiChallenge:yi,aiRoleplay:ri,aiScore:vi},Symbol.toStringTag,{value:"Module"}));async function fi(){let e=null,t=[];try{const $=await B();e=J($.manifest),t=$.situations&&$.situations.situations||[]}catch{}const a=e?e.units():[],s=a.filter($=>P($.id)),n=t.filter($=>P($.id)),i=ae.filter($=>Se($.id)),o=N.filter($=>Ee($.id)),l=R.filter($=>fe($.id)!=null),d=yt().map(De).filter(Boolean),p=K.filter($=>P(`battle:${$.id}`)),y=gt(),g=Object.entries(f.notes).sort(($,L)=>(L[1].at||0)-($[1].at||0)),u=a.length+t.length,v=s.length+n.length,b=u?Math.round(v/u*100):0,S=v===0&&i.length===0&&o.length===0&&l.length===0&&g.length===0&&d.length===0;return{title:"Your progress",html:`
  <div class="shell band">
    ${A([{label:"Your progress"}])}

    ${I({eyebrow:"Your progress",title:S?"Nothing recorded yet":"What you have actually done",lede:S?"This page fills up as you use the site. It counts only real actions — a piece finished, a tool used, a scenario answered, a reflection written. There are no points to collect here, and nothing is awarded for visiting.":"Every number here is something you did. Nothing is awarded, nothing decays, and there is no streak to protect. It is a record, not a game.",accent:"forest",actions:S?`
        <a class="btn btn-primary btn-lg" href="${h("paths")}">${c.route}Start a path</a>
        <a class="btn btn-soft btn-lg" href="${h("situations")}">${c.compass}Find your situation</a>`:`
        ${y?`<a class="btn btn-primary" href="${h(y.route)}">${c.book}Continue: ${r(y.title)}</a>`:""}
        <a class="btn btn-soft" href="${h("saved")}">${c.bookmark}Saved (${f.saved.length})</a>
        <button class="btn btn-ghost" data-pr-export>${c.download}Export everything</button>`})}

    ${S?`
      <section class="sec">
        ${Q("There is nothing here to show you yet","That is not a failure — it is an empty page waiting for real work. Read one thing, answer one scenario, or fill in one tool, and this page becomes useful.",`<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
            <a class="btn btn-primary" href="${h("paths")}">${c.route}Take a path</a>
            <a class="btn btn-soft" href="${h("tools")}">${c.tool}Use a tool</a>
            <a class="btn btn-ghost" href="${h("scenarios")}">${c.puzzle}Try a scenario</a>
          </div>`)}
      </section>
      ${Ft()}
    `:`
      ${ie([{v,l:"pieces finished"},{v:i.length,l:"scenarios answered"},{v:l.length,l:"tools with your work in them"},{v:g.length,l:"reflections written"}])}

      <div class="meter meter-lg" style="max-width:460px;margin:var(--s-6) 0">
        <span style="width:${b}%"></span></div>
      <p class="t-meta faint" style="margin-top:-14px">${v} of ${u} readable pieces
      ${b<3?"— and that is fine. This is not a completion target.":""}</p>

      ${V([...d.length?[{id:"paths",label:"Paths"}]:[],{id:"reading",label:"Reading"},...i.length||o.length?[{id:"practice",label:"Practice"}]:[],...l.length?[{id:"tools",label:"Tools"}]:[],...g.length?[{id:"notes",label:"Reflections"}]:[],...f.recent.length?[{id:"recent",label:"Recently opened"}]:[],{id:"data",label:"Your data"}])}

      ${d.length?`
        <section class="sec" id="paths">
          ${k("Paths you are on",`<a class="btn btn-ghost btn-sm" href="${h("paths")}">All ten${c.arrow}</a>`)}
          <div style="margin-top:var(--s-4)">
            ${T(d.map($=>wt($,Be($),!0)),2)}
          </div>
          ${d.map($=>bi($)).join("")}
        </section>`:""}

      <section class="sec" id="reading">
        ${k("What you have finished")}
        ${v===0?`
          <p class="t-lede muted" style="max-width:66ch">Nothing marked finished yet. The
          button is at the top of every lesson and playbook — use it honestly, because a
          number you inflated tells you nothing.</p>`:`
          ${s.length?`
            <p class="rail-t">Lessons and chapters — ${s.length}</p>
            <div style="margin:var(--s-3) 0 var(--s-6)">
              ${T(s.slice(0,6).map($=>Ie($,{showTrack:!0})),3)}
            </div>
            ${s.length>6?`<p class="t-meta faint">and ${s.length-6} more.</p>`:""}`:""}
          ${n.length?`
            <p class="rail-t">Playbooks — ${n.length}</p>
            <div style="margin:var(--s-3) 0 var(--s-6)">
              ${T(n.slice(0,6).map(ue),3)}
            </div>`:""}
          ${p.length?`
            <p class="rail-t">AI battle tests passed — ${p.length} of ${K.length}</p>
            <ul class="marklist goodlist" style="margin:var(--s-3) 0 var(--s-6);max-width:70ch">
              ${p.map($=>`<li>Level ${$.level} — ${r($.title)}</li>`).join("")}
            </ul>`:""}
        `}
      </section>

      ${i.length||o.length?`
        <section class="sec" id="practice">
          ${k("Practice")}
          ${i.length?`
            <p class="rail-t">Scenarios answered — ${i.length} of ${ae.length}</p>
            <div class="stack" style="gap:var(--s-2);margin:var(--s-3) 0 var(--s-6)">
              ${i.map($=>{const L=Se($.id),M=($.options||[]).find(_a=>_a.key===(L&&L.key)),z=M?M.grade:null;return`<a class="rowitem" href="${h(`scenario/${$.id}`)}">
                  <div style="min-width:0"><strong>${r($.title)}</strong>
                    <p class="t-small muted" style="margin:2px 0 0">You chose ${r(L&&L.key||"?")}${M?` — ${r(M.text.slice(0,90))}`:""}</p></div>
                  ${z?`<span class="badge ${z==="best"?"badge-success":z==="ok"?"badge-info":"badge-warning"}">${z==="best"?"Strongest":z==="ok"?"Workable":z==="risky"?"Risky":"Weak"}</span>`:""}
                </a>`}).join("")}
            </div>`:""}
          ${o.length?`
            <p class="rail-t">Decision trees walked — ${o.length} of ${N.length}</p>
            <div style="margin:var(--s-3) 0">${T(o.map($=>ve($,!0)),3)}</div>`:""}
        </section>`:""}

      ${l.length?`
        <section class="sec" id="tools">
          ${k("Tools with your work in them",`<a class="btn btn-ghost btn-sm" href="${h("tools")}">All ${R.length}${c.arrow}</a>`)}
          <p class="t-small muted" style="max-width:68ch">These hold real entries. Opening one
          picks up exactly where you stopped.</p>
          <div style="margin-top:var(--s-4)">${T(l.map(me),3)}</div>
        </section>`:""}

      ${g.length?`
        <section class="sec" id="notes">
          ${k(`Your reflections — ${g.length}`)}
          <p class="t-small muted" style="max-width:68ch">The most valuable thing on this page.
          Reading is forgettable; what you wrote about it is not.</p>
          <div class="stack" style="gap:var(--s-3);margin-top:var(--s-4)">
            ${g.slice(0,12).map(([$,L])=>wi($,L,e)).join("")}
          </div>
          ${g.length>12?`<p class="t-meta faint" style="margin-top:var(--s-4)">and ${g.length-12} more, kept with the pages they belong to.</p>`:""}
        </section>`:""}

      ${f.recent.length?`
        <section class="sec" id="recent">
          ${k("Recently opened")}
          <div class="stack" style="gap:var(--s-2);margin-top:var(--s-4)">
            ${f.recent.slice(0,10).map($=>`
              <a class="rowitem" href="${h($.route)}">
                <div style="min-width:0"><strong>${r($.title)}</strong>
                  <p class="t-small muted" style="margin:2px 0 0">${r($.kind||"")}</p></div>
                ${P($.id)?`<span class="t-meta faint">${c.circleCheck}</span>`:""}
              </a>`).join("")}
          </div>
        </section>`:""}

      ${Ft()}
    `}
  </div>`,accent:"forest",mount:ki}}function bi(e,t){const s=lt(e).filter(o=>o.kind==="lesson"||o.kind==="situation").map(o=>o.id),n=D(s),i=s.length?Math.round(n/s.length*100):0;return`
  <div style="margin-top:var(--s-5)">
    <div class="between" style="gap:var(--s-3);align-items:baseline">
      <p class="t-small"><a href="${h(`path/${e.id}`)}"><strong>${r(e.title)}</strong></a></p>
      <span class="t-meta faint">${n}/${s.length}</span>
    </div>
    <div class="meter" style="margin-top:6px"><span style="width:${i}%"></span></div>
  </div>`}function $i(e,t){const[a,...s]=e.split(":"),n=s.join(":");switch(a){case"lesson":{const i=t&&t.unit(n);return i?{route:`read/${i.track}/${i.id}`,label:i.title,what:"Lesson"}:null}case"situation":return{route:`situation/${n}`,label:n.replace(/-/g," "),what:"Playbook"};case"skill":return{route:`skill/${n}`,label:(U.find(i=>i.id===n)||{}).name||n,what:"Skill"};case"skill-practice":return{route:`skill/${n}`,label:(U.find(i=>i.id===n)||{}).name||n,what:"Skill practice"};case"scenario":return{route:`scenario/${n}`,label:(Ht(n)||{}).title||n,what:"Scenario"};case"tree":return{route:`tree/${n}`,label:(Yt(n)||{}).title||n,what:"Decision tree"};case"path":{const[i,o]=n.split(":"),l=De(i);return{route:`path/${i}`,label:l?`${l.title}${o?` — stage ${o}`:""}`:i,what:"Path reflection"}}case"tool":return{route:`tool/${n}`,label:(la(n)||{}).name||n,what:"Tool"};case"battle-note":return{route:"ai/battles",label:`Battle test ${n}`,what:"AI battle test"};case"entry":{const[i,o]=n.split("#");return{route:`vault/${i}/${o}`,label:(o||"").replace(/-/g," "),what:"Vault entry"}}case"ai-problem":return{route:`ai/problem/${n}`,label:n.replace(/^p-/,"").replace(/-/g," "),what:"AI problem"};case"ai-office":return{route:`ai/office/${n}`,label:`AI for ${n}`,what:"AI at work"};case"ai":return{route:`ai/${n.split(":")[0]}`,label:n.replace(/[:-]/g," "),what:"AI Intelligence"};default:return null}}function wi(e,t,a){const s=$i(e,a),n=t.at?new Date(t.at).toLocaleDateString(void 0,{day:"numeric",month:"short"}):"",i=String(t.text||"");return`
  <article class="card card-flat">
    <div class="between" style="gap:var(--s-3);align-items:baseline">
      <p class="eyebrow" style="margin:0">${r(s?s.what:"Note")}</p>
      ${n?`<span class="t-meta faint">${r(n)}</span>`:""}
    </div>
    ${s?`<h3 class="card-title" style="margin-top:4px"><a href="${h(s.route)}">${r(s.label)}</a></h3>`:`<h3 class="card-title" style="margin-top:4px">${r(e)}</h3>`}
    <p class="card-text clamp-3" style="margin-top:var(--s-2);white-space:pre-wrap">${r(i.slice(0,320))}${i.length>320?"…":""}</p>
  </article>`}function Ft(){return`
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
  </section>`}function ki(e){const t=async s=>{if(s.target.closest("[data-pr-export]")){const n=rs(),i=JSON.stringify(n,null,2);try{const o=new Blob([i],{type:"application/json"}),l=URL.createObjectURL(o),d=document.createElement("a");d.href=l,d.download=`the-resources-by-anik-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(d),d.click(),d.remove(),setTimeout(()=>URL.revokeObjectURL(l),1e3),F("Downloaded")}catch{const l=await mt(i);F(l?"Copied to your clipboard instead":"Could not export")}return}if(s.target.closest("[data-pr-reset]")){if(!window.confirm(`This erases everything: what you finished, everything saved, every reflection and all tool entries. It cannot be undone.

Erase it all?`))return;ds(),F("Everything erased"),re("progress?fresh");return}},a=s=>{const n=s.target.closest("[data-pr-import]");if(!n||!n.files||!n.files[0])return;const i=n.files[0],o=new FileReader;o.onload=()=>{try{cs(JSON.parse(String(o.result))),F("Restored"),re("progress?fresh")}catch(l){F(l&&l.message?l.message:"That file could not be read")}n.value=""},o.onerror=()=>{F("That file could not be read"),n.value=""},o.readAsText(i)};return e.addEventListener("click",t),e.addEventListener("change",a),()=>{e.removeEventListener("click",t),e.removeEventListener("change",a)}}async function xi(){const e=f.saved,t=new Map;for(const n of e){const i=n.kind||"other";t.has(i)||t.set(i,[]),t.get(i).push(n)}const a={lesson:"Lessons and chapters",situation:"Playbooks",skill:"Skills",tool:"Tools",scenario:"Scenarios",tree:"Decision trees",path:"Learning paths",collection:"Vault collections",entry:"Vault entries",ai:"AI Intelligence",page:"Pages",other:"Other"};return{title:"Saved",html:`
  <div class="shell band">
    ${A([{label:"Saved"}])}

    ${I({eyebrow:"Saved",title:e.length?`${x(e.length,"thing")} you kept`:"Nothing saved yet",lede:e.length?"Anything with a star on it lands here. It is a shortlist you built deliberately, not a history — for that, look at recently opened on your progress page.":"The star button appears at the top of every lesson, playbook, skill, tool and scenario. Use it when something is worth coming back to, and this becomes your own shortlist.",accent:"amber",actions:`<a class="btn btn-soft" href="${h("progress")}">${c.chart}Your progress</a>`})}

    ${e.length?[...t.entries()].map(([n,i])=>`
        <section class="sec">
          ${k(a[n]||n,`<span class="t-meta faint">${i.length}</span>`)}
          <div class="stack" style="gap:var(--s-2);margin-top:var(--s-4)">
            ${i.map(o=>`
              <div class="rowitem">
                <a href="${h(o.route)}" style="min-width:0;flex:1">
                  <strong>${r(o.title)}</strong>
                  ${P(o.id)?'<p class="t-small muted" style="margin:2px 0 0">Finished</p>':""}
                </a>
                ${C(o.id,"Save")}
              </div>`).join("")}
          </div>
        </section>`).join(""):`
      <section class="sec">
        ${Q("Your shortlist is empty","Start somewhere real rather than browsing — a situation you are actually in, or a path that orders the material for you.",`<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
            <a class="btn btn-primary" href="${h("situations")}">${c.compass}Find your situation</a>
            <a class="btn btn-soft" href="${h("paths")}">${c.route}Take a path</a>
          </div>`)}
      </section>`}
  </div>`,accent:"amber"}}const ro=Object.freeze(Object.defineProperty({__proto__:null,default:fi,saved:xi},Symbol.toStringTag,{value:"Module"})),ot=["situation","lesson","scenario","tree","tool","path","skill","ai","entry","collection","prompt","page"];async function Ti(e){const t=(e.query.q||"").trim(),a=e.query.kind||"all";let s=!1,n=null;try{await bs(),s=$s()}catch(d){n=d}if(n)return{title:"Search",accent:"atlas",html:`<div class="shell band">
        ${A([{label:"Search"}])}
        ${O("Search could not load its index","The search file did not come back. You can still browse by situation, skill or path while this is down.")}
        <div class="row-wrap" style="gap:var(--s-3);justify-content:center;margin-top:var(--s-5)">
          <a class="btn btn-soft" href="${h("situations")}">${c.compass}Situations</a>
          <a class="btn btn-soft" href="${h("library")}">${c.book}The library</a>
        </div>
      </div>`};const i=t.length>=2?$t(t,{kind:a,limit:60}):[],o=t.length>=2?oa(t):{},l=`
  <div class="shell band">
    ${A([{label:"Search"}])}

    ${I({eyebrow:"Search",title:t?`Results for “${r(t)}”`:"Search everything",lede:t?"":`Every lesson, playbook, skill, tool, scenario, decision tree, vault entry and prompt — ${s?x(ws(),"document"):"the whole library"} in one index. Describe the situation in your own words; you do not need to guess our vocabulary.`,accent:"atlas"})}

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

    <div data-s-body>${La(t,a,i,o)}</div>
  </div>`;return{title:t?`“${t}” · Search`:"Search",html:l,accent:"atlas",mount:d=>Ii(d,a)}}function La(e,t,a,s){return e.length<2?Ut():`
  <div class="filters" role="group" aria-label="Filter results by kind" style="margin-top:var(--s-5)">
    ${["all",...ot.filter(i=>s[i])].map(i=>{const o=i==="all"?{label:"Everything",icon:c.layers}:Ue[i]||{label:i},l=i==="all"?s.all||0:s[i]||0;return`<a class="chip ${t===i?"chip-solid":""}"
        href="${h(`search?q=${encodeURIComponent(e)}${i==="all"?"":`&kind=${i}`}`)}">
        ${i==="all"?c.layers:c[o.icon]||c.circle}${r(o.label)}
        <span class="fcount">${l}</span></a>`}).join("")}
  </div>

  <p class="t-meta faint" style="margin-top:var(--s-4)">
    ${a.length?`${x(a.length,"result")}${s.all>a.length?` of ${s.all}`:""}`:"No results"}
  </p>

  ${a.length?Si(a,e):`
    ${Q(`Nothing matches “${e}”`,"Try describing what is happening instead of naming a topic — “my landlord wants me out” finds more than “tenancy”. Single unusual words are the hardest thing for any search to place.",`<div class="row-wrap" style="gap:var(--s-3);justify-content:center">
        <a class="btn btn-soft" href="${h("situations")}">${c.compass}Browse 51 situations</a>
        <a class="btn btn-ghost" href="${h("skills")}">${c.target}Browse by skill</a>
      </div>`)}
    ${Ut("Or try one of these")}`}`}function Si(e,t){const a=new Map;for(const n of e)a.has(n.kind)||a.set(n.kind,[]),a.get(n.kind).push(n);return`<div style="margin-top:var(--s-5)">
    ${[...a.keys()].sort((n,i)=>{const o=ot.indexOf(n),l=ot.indexOf(i);return(o<0?99:o)-(l<0?99:l)}).map(n=>{const i=Ue[n]||{label:n},o=a.get(n);return`
      <section class="ovl-group">
        <div class="rule-head">
          <h2 class="t-subtitle" style="margin:0">${r(i.label)}</h2>
          <span class="t-meta faint">${o.length}</span>
        </div>
        <div class="ovl-res" style="margin-top:var(--s-3)">
          ${o.map(l=>Ei(l,t)).join("")}
        </div>
      </section>`}).join("")}
  </div>`}function Ei(e,t){const a=Ue[e.kind]||{},s=e.sub||e.group||"";return`
  <a class="res" href="${h(e.route)}">
    <span class="res-ic">${c[a.icon]||c.circle}</span>
    <span class="res-b">
      <span class="res-t">${Ot(r(e.title),t)}</span>
      ${s?`<span class="res-s">${Ot(r(s),t)}</span>`:""}
    </span>
    <span class="res-k">${r(a.label||e.kind)}</span>
  </a>`}function Ut(e="People arrive looking for these"){const t=f.recent.slice(0,5);return`
  <section class="sec">
    ${k(e)}
    <div class="row-wrap" style="gap:var(--s-2);margin-top:var(--s-4)">
      ${ks.map(a=>`<a class="chip" href="${h(`search?q=${encodeURIComponent(a)}`)}">${c.search}${r(a)}</a>`).join("")}
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
  </section>`}function Ii(e,t){const a=e.querySelector("[data-s-q]"),s=e.querySelector("[data-s-body]"),n=e.querySelector("[data-s-form]");if(!a||!s)return;const i=()=>{const p=a.value.trim(),y=p.length>=2?$t(p,{kind:t,limit:60}):[],g=p.length>=2?oa(p):{};s.innerHTML=La(p,t,y,g)},o=()=>{const p=a.value.trim(),y=p?`search?q=${encodeURIComponent(p)}${t!=="all"?`&kind=${t}`:""}`:"search";es(y)},l=pe(()=>{i(),o()},180),d=p=>{p.preventDefault(),o()};return a.addEventListener("input",l),n&&n.addEventListener("submit",d),!a.value&&window.matchMedia("(min-width: 900px)").matches&&requestAnimationFrame(()=>a.focus()),()=>{a.removeEventListener("input",l),n&&n.removeEventListener("submit",d)}}const co=Object.freeze(Object.defineProperty({__proto__:null,default:Ti},Symbol.toStringTag,{value:"Module"}));export{at as $,Ri as A,Di as B,ge as C,P as D,qi as E,Hi as F,Ci as G,Pi as H,c as I,j as J,Ue as K,fe as L,Lt as M,ea as N,ta as O,Ki as P,Zi as Q,Gi as R,ks as S,Ji as T,Qi as U,Xi as V,eo as W,to as X,ao as Y,so as Z,_,Bi as a,no as a0,io as a1,oo as a2,lo as a3,ro as a4,co as a5,Mi as b,Ni as c,pe as d,r as e,bs as f,re as g,h,Wi as i,f as j,W as k,oa as l,Yi as m,$t as n,ji as o,zi as p,Ot as q,_i as r,Oi as s,Li as t,Ui as u,F as v,Fi as w,ss as x,mt as y,Vi as z};
