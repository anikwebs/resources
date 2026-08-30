import{L,M as C,o as h,N as x,y as k,v as y,O,d as T,I as $,e as r}from"./views-B7S8XgD6.js";import{J as rt}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";function M(t,e,n){const a=String(e).split("."),s=a.pop();let i=t;for(const c of a)i[c]==null&&(i[c]=/^\d+$/.test(a[a.indexOf(c)+1]??s)?[]:{}),i=i[c];i[s]=n}const D=t=>{const e=parseFloat(t);return Number.isFinite(e)?e:0},g=(t,e,n)=>Math.min(n,Math.max(e,t)),B=t=>Math.round(t*10)/10,w=t=>Math.round(t*100)/100,P=()=>Math.random().toString(36).slice(2,9),I=(t,e,n="")=>`
  <div class="field">
    ${t?`<label>${r(t)}</label>`:""}
    ${e}
    ${n?`<span class="hint">${r(n)}</span>`:""}
  </div>`,U=(t,e,n="",a="")=>`<input class="input" type="text" data-bind="${t}" value="${r(e??"")}" placeholder="${r(n)}" ${a}>`,F=(t,e,n="",a=4)=>`<textarea class="textarea" data-bind="${t}" rows="${a}" placeholder="${r(n)}">${r(e??"")}</textarea>`,H=(t,e,n={})=>{const{min:a=0,max:s=999999,step:i=1,ph:c=""}=n;return`<input class="input" type="number" inputmode="decimal" data-bind="${t}" data-type="num"
    value="${e??""}" min="${a}" max="${s}" step="${i}" placeholder="${r(c)}">`},_=(t,e,n)=>`
  <select class="select" data-bind="${t}">
    ${n.map(a=>{const s=typeof a=="string"?a:a.v,i=typeof a=="string"?a:a.l;return`<option value="${r(s)}"${String(e)===String(s)?" selected":""}>${r(i)}</option>`}).join("")}
  </select>`,G=(t,e,n={})=>{const{min:a=1,max:s=5,step:i=1}=n;return`<input class="range" type="range" data-bind="${t}" data-type="num"
    min="${a}" max="${s}" step="${i}" value="${e}"
    aria-valuetext="${e} out of ${s}">`};let E=0;function j(t){t.querySelectorAll("input:not([type=hidden]), select, textarea").forEach(e=>{if(e.getAttribute("aria-label")||e.getAttribute("aria-labelledby"))return;const n=e.closest(".field, .rowitem, .scale, .check")||e.parentElement;let a=e.closest("label");if(!a&&n){const b=[...n.querySelectorAll("label")];a=b.find(m=>m.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)||b[0]}if(a&&!a.contains(e)){if(e.id||(e.id=`tk-c${++E}`),a.getAttribute("for")||a.setAttribute("for",e.id),a.getAttribute("for")===e.id)return}else if(a&&a.contains(e))return;const s=a&&a.textContent.trim()||n&&n.querySelector(".lab, .t-meta, .hint")?.textContent.trim()||"",i=String(e.dataset.bind||"").replace(/\.(\d+)\./g," $1 ").replace(/[._]/g," ").trim(),c=(s||i||"value").replace(/\s+/g," ").slice(0,90);e.setAttribute("aria-label",c+(e.placeholder&&!s?` — ${e.placeholder}`:""))})}const W=(t,e,n="")=>`
  <section class="panel">
    <div class="panel-h"><h3 class="panel-t">${r(t)}</h3>${n}</div>
    ${e}
  </section>`,J=(t,e,n="")=>`
  <section class="panel panel-out">
    <div class="panel-h"><h3 class="panel-t">${r(t)}</h3>${n}</div>
    ${e}
  </section>`,z=(t,e)=>`<button class="btn btn-soft btn-sm" data-act="${t}">${$.plus}${r(e)}</button>`,K=(t,e,n="Remove")=>`<button class="del" data-act="${t}" data-i="${e}" aria-label="${r(n)}" title="${r(n)}">${$.trash}</button>`,Q=(t,e="")=>`<div class="bar"${e?` data-accent="${e}"`:""}><span style="width:${g(t,0,100)}%"></span></div>`,V=(t,e=!1)=>`<div class="meter${e?" meter-lg":""}"><span style="width:${g(t,0,100)}%"></span></div>`,X=(t,e="")=>{const n=2*Math.PI*42,a=n-g(t,0,100)/100*n;return`<div class="dial" style="width:112px;height:112px">
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle class="track" cx="50" cy="50" r="42"></circle>
      <circle class="val" cx="50" cy="50" r="42" stroke-dasharray="${w(n)}" stroke-dashoffset="${w(a)}"></circle>
    </svg>
    <span class="dial-num">${e||t+"%"}</span>
  </div>`},Y=(t,e,n="")=>`<div class="callout${n?" callout-"+n:""}"><span class="lab">${r(t)}</span><p>${e}</p></div>`,Z=(t,e="")=>`
  <div class="state">
    <span class="state-icon">${$.sliders}</span>
    <h3>${r(t)}</h3>
    ${e?`<p>${r(e)}</p>`:""}
  </div>`,tt=t=>`<div class="tbl-wrap"><table class="tbl">${t}</table></div>`;function et(t,e){const n=L(t.id);let a=n&&typeof n=="object"?q(t,n):t.initial();const s=C(`
    <div class="tool tool-split" data-accent="${t.accent||"forest"}">
      <div data-form></div>
      <div data-out></div>
    </div>`);e.appendChild(s);const i=s.querySelector("[data-form]"),c=s.querySelector("[data-out]"),b=T(()=>x(t.id,a),400);function m(){c.innerHTML=t.output(a)+S()}function A(){i.innerHTML=t.form(a),j(i)}function f(){A(),m()}function S(){return`
      <div class="row-wrap between" style="margin-top:var(--s-4)">
        <span class="t-meta faint">${$.check} Saved on this device automatically</span>
        <div class="row" style="gap:var(--s-2)">
          <button class="btn btn-ghost btn-sm" data-tk="copy">${$.copy}Copy result</button>
          <button class="btn btn-ghost btn-sm" data-tk="download">${$.download}Download</button>
          <button class="btn btn-ghost btn-sm" data-tk="reset">${$.reset}Start over</button>
        </div>
      </div>`}f();const v=u=>{const o=u.target.closest("[data-bind]");if(!o||!s.contains(o))return;const l=o.dataset.bind;let d=o.type==="checkbox"?o.checked:o.value;o.dataset.type==="num"&&(d=D(d)),M(a,l,d),s.querySelectorAll(`[data-mirror="${l}"]`).forEach(p=>{p.textContent=d}),o.type==="range"&&o.setAttribute("aria-valuetext",`${d} out of ${o.max}`),b(),m()};return s.addEventListener("input",v),s.addEventListener("change",v),h(s,"click","[data-act]",(u,o)=>{u.preventDefault();const l=(t.actions||{})[o.dataset.act];l&&(l(a,{el:o,i:o.dataset.i!=null?Number(o.dataset.i):null,redraw:f,drawOut:m,ev:u}),x(t.id,a),f())}),h(s,"click","[data-copy]",async(u,o)=>{u.preventDefault();const l=await k(o.dataset.copy);y(l?"Copied":"Could not copy",l?"ok":"")}),h(s,"click","[data-tk]",async(u,o)=>{u.preventDefault();const l=o.dataset.tk;if(l==="copy"){const d=await k(t.summary(a));y(d?"Result copied":"Could not copy",d?"ok":"")}else if(l==="download"){const d=new Blob([t.summary(a)],{type:"text/plain;charset=utf-8"}),p=document.createElement("a");p.href=URL.createObjectURL(d),p.download=`${t.id}.txt`,document.body.appendChild(p),p.click(),p.remove(),setTimeout(()=>URL.revokeObjectURL(p.href),2e3),y("Downloaded","ok")}else if(l==="reset"){if(!confirm("Clear everything you have entered in this tool?"))return;O(t.id),a=t.initial(),f(),y("Tool cleared")}}),()=>{s.removeEventListener("input",v),s.removeEventListener("change",v)}}function q(t,e){const n=t.initial(),a=Array.isArray(n)?e:{...n,...e};for(const s of Object.keys(n))Array.isArray(n[s])&&!Array.isArray(a[s])&&(a[s]=n[s]),n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&(typeof a[s]!="object"||a[s]===null||Array.isArray(a[s]))&&(a[s]=n[s]);return a}const at=t=>`
${t}
${"-".repeat(t.length)}`,nt=t=>`${t}
The Resources by Anik — ${new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}
`;export{z as addBtn,F as area,Q as bar,Y as callout,g as clamp,K as delBtn,X as dial,Z as emptyOut,r as esc,I as field,at as head,j as labelControls,V as meter,et as mountTool,D as n,rt as num,H as number,J as outPanel,W as panel,B as r1,w as r2,G as range,_ as select,M as setPath,nt as stamp,tt as tblWrap,U as text,P as uid};
