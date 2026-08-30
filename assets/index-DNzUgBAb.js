const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/views-B7S8XgD6.js","assets/data-DpGBRXZo.js"])))=>i.map(i=>d[i]);
import{i as W,a as Y,$ as _,I as h,h as m,s as U,m as z,b as u,p as G,e as v,r as i,o as g,g as x,c as Q,d as M,t as N,f as X,j as B,K as E,k as R,S as Z,l as J,n as ee,q as C,u as ae,v as A,w as te,x as se,y as oe,z as ne,A as K,B as ie,C as re,D as le,E as ce,_ as f,F as de,G as pe,H as ue}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const t of p.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function n(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=n(d);fetch(d.href,p)}})();const L="The Resources by Anik",he=[{to:"situations",label:"Situations",icon:"alert"},{to:"skills",label:"Skills",icon:"target"},{to:"tools",label:"Toolkit",icon:"tool"},{to:"ai",label:"AI",icon:"cpu"},{to:"library",label:"Library",icon:"book"},{to:"paths",label:"Paths",icon:"route"}],be=[{head:"Start here",links:[{to:"",label:"Home",icon:"home"},{to:"situations",label:"Situation playbooks",icon:"alert"},{to:"paths",label:"Learning paths",icon:"route"},{to:"about",label:"What this is",icon:"question"}]},{head:"Learn",links:[{to:"skills",label:"Skills by domain",icon:"target"},{to:"library",label:"The full library",icon:"book"},{to:"vault",label:"The vault",icon:"vault"}]},{head:"Practise",links:[{to:"scenarios",label:"Hard scenarios",icon:"puzzle"},{to:"trees",label:"Decision trees",icon:"route"},{to:"tools",label:"The seventeen tools",icon:"tool"}]},{head:"AI intelligence",links:[{to:"ai",label:"The method",icon:"cpu"},{to:"ai/library",label:"Real-life problems",icon:"inbox"},{to:"ai/roleplay",label:"Rehearsal room",icon:"mic"},{to:"ai/builder",label:"Workflow builder",icon:"sliders"},{to:"ai/battles",label:"Battle tests",icon:"flag"},{to:"ai/score",label:"Resourcefulness score",icon:"chart"},{to:"ai/prompts",label:"Prompt vault",icon:"spark"}]},{head:"Yours",links:[{to:"progress",label:"Progress",icon:"chart"},{to:"saved",label:"Saved",icon:"bookmark"},{to:"search",label:"Search everything",icon:"search"}]}],ve=[{to:"",label:"Home",icon:"home"},{to:"situations",label:"Situations",icon:"alert"},{to:"search",label:"Search",icon:"search"},{to:"tools",label:"Tools",icon:"tool"},{to:"progress",label:"You",icon:"chart"}],fe=[{head:"Explore",links:[{to:"situations",label:"Situations"},{to:"skills",label:"Skills"},{to:"library",label:"Library"},{to:"vault",label:"Vault"}]},{head:"Practise",links:[{to:"tools",label:"Toolkit"},{to:"scenarios",label:"Scenarios"},{to:"trees",label:"Decision trees"},{to:"paths",label:"Learning paths"}]},{head:"AI & you",links:[{to:"ai",label:"AI intelligence"},{to:"ai/prompts",label:"Prompt vault"},{to:"progress",label:"Your progress"},{to:"about",label:"About & limits"}]}];function me(){const e=u("#app");e.innerHTML=`
    <header class="nav" id="nav">
      <div class="shell nav-in">
        <a class="brand" href="${m("")}" aria-label="${L} — home">
          <span class="brand-mark" aria-hidden="true">TR</span>
          <span class="brand-txt">
            <span class="brand-name">The Resources</span>
            <span class="brand-sub">by Anik</span>
          </span>
        </a>

        <nav class="nav-links" aria-label="Main">
          ${he.map(a=>`<a class="nav-link" data-nav="${a.to}" href="${m(a.to)}">${v(a.label)}</a>`).join("")}
        </nav>

        <div class="nav-right">
          <button class="navsearch" data-open-search aria-label="Search everything">
            ${h.search}<span>Search a situation…</span><kbd>/</kbd>
          </button>
          <button class="btn btn-icon" data-open-search aria-label="Search" style="display:none" data-only-sm>${h.search}</button>
          <button class="btn btn-icon" data-theme-toggle aria-label="Switch between light and dark">${h.sun}</button>
          <a class="btn btn-icon hide-sm" href="${m("progress")}" aria-label="Your progress">${h.chart}</a>
          <button class="btn btn-icon" data-open-drawer aria-label="Open menu" aria-expanded="false">${h.menu}</button>
        </div>
      </div>
    </header>

    <main id="main" tabindex="-1"></main>

    <footer class="foot">
      <div class="shell foot-in">
        <div class="foot-about">
          <a class="brand" href="${m("")}" style="margin-bottom:var(--s-4)">
            <span class="brand-mark" aria-hidden="true">TR</span>
            <span class="brand-txt"><span class="brand-name">The Resources</span><span class="brand-sub">by Anik</span></span>
          </a>
          <p>A practical system for becoming more capable in the real world. Situations you will actually meet, tools that actually compute, and an honest method for working with AI.</p>
          <p style="margin-top:var(--s-3)"><a href="${m("about")}">What this is, and what it is not →</a></p>
        </div>
        ${fe.map(a=>`
          <div>
            <h4>${v(a.head)}</h4>
            <ul>${a.links.map(n=>`<li><a href="${m(n.to)}">${v(n.label)}</a></li>`).join("")}</ul>
          </div>`).join("")}
      </div>
      <div class="shell foot-legal">
        <p>Everything you do here — progress, notes, saved pages, tool work — is stored only in this browser. There is no account and no server. Clearing your browser data clears it.</p>
        <p style="margin-top:8px">This is educational material, not professional legal, medical or financial advice. In an emergency, contact the emergency services.</p>
        <p style="margin-top:8px">© ${new Date().getFullYear()} ${v(L)}. Built to be used, not admired.</p>
      </div>
    </footer>

    <nav class="tabbar" aria-label="Quick navigation">
      ${ve.map(a=>`<a data-nav="${a.to}" href="${m(a.to)}">${h[a.icon]}<span>${v(a.label)}</span></a>`).join("")}
    </nav>

    <div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden="true">
      <div class="drawer-scrim" data-close-drawer></div>
      <div class="drawer-panel">
        <div class="drawer-head">
          <span class="t-label faint">Everything here</span>
          <button class="btn btn-icon" data-close-drawer aria-label="Close menu">${h.close}</button>
        </div>
        ${be.map(a=>`
          <p class="drawer-sec">${v(a.head)}</p>
          ${a.links.map(n=>`<a class="drawer-link" data-nav="${n.to}" href="${m(n.to)}">${h[n.icon]}<span>${v(n.label)}</span></a>`).join("")}
        `).join("")}
        <p class="drawer-sec">Display</p>
        <button class="drawer-link" data-theme-toggle style="width:100%;text-align:left">${h.moon}<span>Switch light / dark</span></button>
      </div>
    </div>

    <div class="ovl" id="ovl" role="dialog" aria-modal="true" aria-label="Search" aria-hidden="true">
      <div class="ovl-box">
        <div class="ovl-in">
          ${h.search}
          <input id="ovl-q" type="search" autocomplete="off" spellcheck="false"
            placeholder="Describe what is happening…" aria-label="Search everything" />
          <button class="btn btn-icon" data-close-search aria-label="Close search">${h.close}</button>
        </div>
        <div class="ovl-filters" id="ovl-filters" role="group" aria-label="Filter by type"></div>
        <div class="ovl-res" id="ovl-res" role="listbox" aria-label="Results"></div>
        <div class="ovl-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> move</span>
          <span><kbd>Enter</kbd> open</span>
          <span><kbd>Esc</kbd> close</span>
          <span style="margin-left:auto"><a href="${m("search")}" data-close-search>Full search page →</a></span>
        </div>
      </div>
    </div>
  `}function ge(e){const a=String(e||"").split("/")[0];_("[data-nav]").forEach(n=>{const c=n.dataset.nav,d=c.split("/")[0],p=c===""?e==="":c===e||d===a&&a!=="";n.classList.toggle("on",p),p?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}let P=null;function ye(){const e=u("#drawer");e.classList.add("open"),e.setAttribute("aria-hidden","false"),u("[data-open-drawer]").setAttribute("aria-expanded","true"),document.body.style.overflow="hidden",P=N(u(".drawer-panel"))}function I(){const e=u("#drawer");e.classList.contains("open")&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true"),u("[data-open-drawer]").setAttribute("aria-expanded","false"),document.body.style.overflow="",P&&(P(),P=null))}let k="all",T=[],$=-1,O=null;async function q(e=""){const a=u("#ovl");a.classList.add("open"),a.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";const n=u("#ovl-q");if(e&&(n.value=e),O=N(u(".ovl-box")),n.focus(),n.select(),!u("#ovl-res").dataset.ready){u("#ovl-res").innerHTML='<div class="ovl-group">Preparing the index…</div>';try{await X(),u("#ovl-res").dataset.ready="1"}catch{u("#ovl-res").innerHTML=`<div class="ovl-group">Search is unavailable offline.</div>
        <div style="padding:var(--s-4)"><a class="btn btn-soft btn-sm" href="${m("situations")}" data-close-search>Browse situations instead</a></div>`;return}}V()}function S(){const e=u("#ovl");e.classList.contains("open")&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="",O&&(O(),O=null))}function V(){const e=u("#ovl-q").value.trim(),a=u("#ovl-res"),n=u("#ovl-filters");if(e.length<2){T=[],$=-1,n.innerHTML="";const o=B.recent.slice(0,5);a.innerHTML=`
      ${o.length?`<div class="ovl-group">Where you were</div>
        ${o.map(b=>`<a class="res" href="${m(b.route)}" data-close-search>
          <span class="res-ic">${h[(E[b.kind]||{}).icon]||h.file}</span>
          <span class="res-b"><span class="res-t">${v(R(b.title))}</span></span>
          <span class="res-k">${v((E[b.kind]||{label:"Page"}).label)}</span></a>`).join("")}`:""}
      <div class="ovl-group">Try describing it plainly</div>
      <div style="display:flex;flex-wrap:wrap;gap:var(--s-2);padding:var(--s-2) var(--s-4) var(--s-5)">
        ${Z.map(b=>`<button class="chip" data-seed="${v(b)}">${v(b)}</button>`).join("")}
      </div>`;return}const c=J(e),d=Object.keys(E).filter(o=>c[o]);k!=="all"&&!c[k]&&(k="all"),n.innerHTML=[`<button class="chip${k==="all"?" chip-solid":""}" data-kind="all" aria-pressed="${k==="all"}">Everything <span class="faint">${c.all||0}</span></button>`,...d.map(o=>`<button class="chip${k===o?" chip-solid":""}" data-kind="${o}" aria-pressed="${k===o}">${v(E[o].label)} <span class="faint">${c[o]}</span></button>`)].join("");const p=ee(e,{kind:k,limit:24});if(T=p,$=p.length?0:-1,!p.length){a.innerHTML=`<div style="padding:var(--s-7) var(--s-5);text-align:center">
      <p class="t-body">Nothing matched <b>${v(e)}</b>.</p>
      <p class="t-small muted" style="margin-top:8px">Try fewer words, or the plain words you would use out loud.</p>
      <div style="display:flex;gap:var(--s-2);justify-content:center;flex-wrap:wrap;margin-top:var(--s-5)">
        <a class="btn btn-soft btn-sm" href="${m("situations")}" data-close-search>All situations</a>
        <a class="btn btn-ghost btn-sm" href="${m("library")}" data-close-search>Browse the library</a>
      </div></div>`;return}let t="",s=null;p.forEach((o,b)=>{const w=o.group||(E[o.kind]||{label:"Results"}).label;w!==s&&(s=w,t+=`<div class="ovl-group">${v(w)}</div>`),t+=`<a class="res${b===$?" cur":""}" role="option" aria-selected="${b===$}"
      href="${m(o.route)}" data-close-search data-i="${b}">
      <span class="res-ic">${h[(E[o.kind]||{}).icon]||h.file}</span>
      <span class="res-b">
        <span class="res-t">${C(v(R(o.title)),e)}</span>
        ${o.sub?`<span class="res-s">${C(v(R(o.sub)),e)}</span>`:""}
      </span>
      <span class="res-k">${v((E[o.kind]||{label:""}).label)}</span></a>`}),a.innerHTML=t}function H(e){T.length&&($=($+e+T.length)%T.length,_("#ovl-res .res").forEach((a,n)=>{const c=Number(a.dataset.i)===$;a.classList.toggle("cur",c),a.setAttribute("aria-selected",String(c)),c&&a.scrollIntoView({block:"nearest"})}))}let D=null,y=null;async function ke(e,a,n){if(typeof D=="function")try{D()}catch{}D=null;const c=u("#main");document.title=e.title?`${R(e.title)} · ${L}`:`${L} — become more capable in the real world`;let d=e.html;if(e.error)d=`<div class="shell band">
      <div class="state">
        <span class="state-icon">${h.alert}</span>
        <h3>Something went wrong on this page</h3>
        <p>${v(e.error&&e.error.message?e.error.message:"The page could not be built.")}</p>
        <div class="row-wrap" style="gap:var(--s-3);justify-content:center;margin-top:var(--s-5)">
          <button class="btn btn-soft" data-reload>Try again</button>
          <a class="btn btn-ghost" href="${m("")}">Go to the start</a>
        </div>
      </div></div>`;else if(d==null){const{notFound:p}=await f(async()=>{const{notFound:s}=await import("./views-B7S8XgD6.js").then(o=>o.P);return{notFound:s}},__vite__mapDeps([0,1])),t=await p(a);d=t.html,document.title=`Page not found · ${L}`,e={...e,...t}}if(c.dataset.accent=e.accent||"forest",c.innerHTML=d,ge(a.path),I(),S(),e.recent&&e.recent.id!==(y&&y.id)&&(y=e.recent,de(e.recent)),e.recent&&(y=e.recent),typeof e.mount=="function")try{D=await e.mount(c)}catch(p){console.error("[mount]",p)}pe(c),ue(a,n),n&&!document.activeElement.closest("#main")&&c.focus({preventScroll:!0})}const r=(e,a="default")=>async n=>{const d=(await e())[a];if(typeof d!="function")throw new Error(`Route handler "${a}" is missing.`);return d(n)},l={home:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.Q),__vite__mapDeps([0,1])),situations:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.R),__vite__mapDeps([0,1])),situation:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.T),__vite__mapDeps([0,1])),skills:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.U),__vite__mapDeps([0,1])),reader:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.V),__vite__mapDeps([0,1])),tools:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.W),__vite__mapDeps([0,1])),scenarios:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.X),__vite__mapDeps([0,1])),trees:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.Y),__vite__mapDeps([0,1])),paths:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.Z),__vite__mapDeps([0,1])),library:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.a0),__vite__mapDeps([0,1])),vault:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.a1),__vite__mapDeps([0,1])),ai:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.a2),__vite__mapDeps([0,1])),aiLab:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.a3),__vite__mapDeps([0,1])),progress:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.a4),__vite__mapDeps([0,1])),search:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.a5),__vite__mapDeps([0,1])),about:()=>f(()=>import("./views-B7S8XgD6.js").then(e=>e.P),__vite__mapDeps([0,1]))};function _e(){i("",r(l.home)),i("situations",r(l.situations)),i("situation/:id",r(l.situation)),i("skills",r(l.skills)),i("skills/:domain",r(l.skills)),i("skill/:id",r(l.skills,"skillView")),i("read/:track/:id",r(l.reader)),i("tools",r(l.tools)),i("tool/:id",r(l.tools,"toolView")),i("scenarios",r(l.scenarios)),i("scenario/:id",r(l.scenarios,"scenarioView")),i("trees",r(l.trees)),i("tree/:id",r(l.trees,"treeView")),i("paths",r(l.paths)),i("path/:id",r(l.paths,"pathView")),i("library",r(l.library)),i("track/:id",r(l.library,"trackView")),i("vault",r(l.vault)),i("vault/:id",r(l.vault,"collectionView")),i("vault/:coll/:entry",r(l.vault,"entryView")),i("ai",r(l.ai)),i("ai/library",r(l.ai,"aiLibrary")),i("ai/prompts",r(l.ai,"aiPrompts")),i("ai/roleplay",r(l.aiLab,"aiRoleplay")),i("ai/builder",r(l.aiLab,"aiBuilder")),i("ai/battles",r(l.aiLab,"aiBattles")),i("ai/score",r(l.aiLab,"aiScore")),i("ai/challenge",r(l.aiLab,"aiChallenge")),i("ai/problem/:id",r(l.ai,"aiProblem")),i("ai/office/:id",r(l.ai,"aiOffice")),i("ai/:section",r(l.ai,"aiFramework")),i("progress",r(l.progress)),i("saved",r(l.progress,"saved")),i("search",r(l.search)),i("about",r(l.about))}const $e=[["ai-problem:","ai"],["ai-office:","ai"],["ai:","ai"],["skill:","skill"],["tool:","tool"],["tree:","tree"],["scenario:","scenario"],["path:","path"],["track:","collection"],["page:","page"],["battle:","ai"]];function we(e){const a=K()||{path:""},n=B.saved.find(p=>p.id===e);if(n)return n;let c=null;for(const[p,t]of $e)if(e.startsWith(p)){c=t;break}!c&&y&&y.id===e&&(c=y.kind),c||(c=y&&y.kind||"page");const d=y&&y.id===e&&y.title||u("#main h1")?.textContent?.trim()||document.title.replace(` · ${L}`,"");return{id:e,kind:c,title:d,route:a.path}}function j(e,a){e.setAttribute("aria-pressed",String(a)),e.innerHTML=`${a?h.starFill:h.star}<span>${a?"Saved":"Save"}</span>`}function F(e,a){e.setAttribute("aria-pressed",String(a)),e.innerHTML=`${a?h.circleCheck:h.circle}<span>${a?"Completed":"Mark complete"}</span>`}function Ee(){const e=u("#app");g(e,"click","[data-save]",(t,s)=>{t.preventDefault();const o=s.dataset.save,b=ae(we(o));_(`[data-save="${CSS.escape(o)}"]`).forEach(w=>j(w,b)),A(b?"Saved to your list":"Removed from saved",b?"ok":"")}),g(e,"click","[data-done]",(t,s)=>{t.preventDefault();const o=s.dataset.done,b=te(o);_(`[data-done="${CSS.escape(o)}"]`).forEach(w=>F(w,b)),A(b?"Marked complete":"Marked not complete",b?"ok":"")}),g(e,"change","[data-done-box]",(t,s)=>{se(s.dataset.doneBox,s.checked),s.closest(".check")?.classList.toggle("done",s.checked)}),g(e,"click","[data-copy]",async(t,s)=>{t.preventDefault();const o=await oe(s.dataset.copy);A(o?"Copied — paste it where you need it":"Could not copy. Select the text instead.",o?"ok":"")});const a=new Map;g(e,"input","[data-note]",(t,s)=>{const o=s.dataset.note;a.has(o)||a.set(o,M(b=>ne(o,b),420)),a.get(o)(s.value)}),g(e,"click","[data-reload]",t=>{t.preventDefault();const s=K();x(s?s.path+(Object.keys(s.query).length?"?"+new URLSearchParams(s.query):""):"")}),g(e,"click","[data-theme-toggle]",()=>{const t=ie();_("[data-theme-toggle]").forEach(s=>{s.classList.contains("btn-icon")&&(s.innerHTML=t==="dark"?h.moon:h.sun)}),A(t==="dark"?"Dark":"Light")}),g(e,"click","[data-open-drawer]",ye),g(e,"click","[data-close-drawer]",I),g(e,"click",".drawer-link",I),g(e,"click","[data-open-search]",t=>{t.preventDefault(),q()}),g(e,"click","[data-close-search]",S);const n=u("#ovl"),c=M(V,120);u("#ovl-q").addEventListener("input",c),g(n,"click","[data-kind]",(t,s)=>{k=s.dataset.kind,V()}),g(n,"click","[data-seed]",(t,s)=>{u("#ovl-q").value=s.dataset.seed,V(),u("#ovl-q").focus()}),n.addEventListener("mousedown",t=>{t.target===n&&S()}),u("#ovl-q").addEventListener("keydown",t=>{if(t.key==="ArrowDown")t.preventDefault(),H(1);else if(t.key==="ArrowUp")t.preventDefault(),H(-1);else if(t.key==="Enter"){t.preventDefault();const s=T[$],o=u("#ovl-q").value.trim();S(),s?x(s.route):o.length>=2&&x("search?q="+encodeURIComponent(o))}}),addEventListener("keydown",t=>{if(t.key==="Escape"){S(),I();return}/^(INPUT|TEXTAREA|SELECT)$/.test(t.target.tagName)||t.target.isContentEditable||(t.key==="/"||t.key.toLowerCase()==="k"&&(t.metaKey||t.ctrlKey))&&(t.preventDefault(),q())}),u("#skip")?.addEventListener("click",()=>{const t=u("#main");t.focus({preventScroll:!1}),t.scrollIntoView({block:"start"})});const d=u("#nav"),p=()=>d.classList.toggle("stuck",window.scrollY>6);addEventListener("scroll",p,{passive:!0}),p(),Q(t=>{t==="saved"&&_("[data-save]").forEach(s=>j(s,re(s.dataset.save))),t==="done"&&_("[data-done]").forEach(s=>F(s,le(s.dataset.done)))})}function Le(){W(),Y(),me();const e=document.documentElement.dataset.theme;_("[data-theme-toggle]").forEach(a=>{a.classList.contains("btn-icon")&&(a.innerHTML=e==="dark"?h.moon:h.sun)}),_e(),Ee(),ce(ke),location.hash||history.replaceState(null,"",m("")),U(),z(),requestAnimationFrame(()=>{const a=u("#boot");a&&(a.classList.add("gone"),setTimeout(()=>a.remove(),400))}),setTimeout(G,1400)}Le();
