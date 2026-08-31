import{L,M as C,o as h,N as x,y as k,v as y,O,d as T,I as $,e as r}from"./views-CF56ohTL.js";import{J as it}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";function M(t,e,n){const a=String(e).split("."),s=a.pop();let i=t;for(const l of a)i[l]==null&&(i[l]=/^\d+$/.test(a[a.indexOf(l)+1]??s)?[]:{}),i=i[l];i[s]=n}const D=t=>{const e=parseFloat(t);return Number.isFinite(e)?e:0},g=(t,e,n)=>Math.min(n,Math.max(e,t)),B=t=>Math.round(t*10)/10,w=t=>Math.round(t*100)/100,P=(t,e)=>e>0?Math.round(t/e*100):0,I=()=>Math.random().toString(36).slice(2,9),U=(t,e,n="")=>`
  <div class="field">
    ${t?`<label>${r(t)}</label>`:""}
    ${e}
    ${n?`<span class="hint">${r(n)}</span>`:""}
  </div>`,F=(t,e,n="",a="")=>`<input class="input" type="text" data-bind="${t}" value="${r(e??"")}" placeholder="${r(n)}" ${a}>`,H=(t,e,n="",a=4)=>`<textarea class="textarea" data-bind="${t}" rows="${a}" placeholder="${r(n)}">${r(e??"")}</textarea>`,_=(t,e,n={})=>{const{min:a=0,max:s=999999,step:i=1,ph:l=""}=n;return`<input class="input" type="number" inputmode="decimal" data-bind="${t}" data-type="num"
    value="${e??""}" min="${a}" max="${s}" step="${i}" placeholder="${r(l)}">`},G=(t,e,n)=>`
  <select class="select" data-bind="${t}">
    ${n.map(a=>{const s=typeof a=="string"?a:a.v,i=typeof a=="string"?a:a.l;return`<option value="${r(s)}"${String(e)===String(s)?" selected":""}>${r(i)}</option>`}).join("")}
  </select>`,W=(t,e,n={})=>{const{min:a=1,max:s=5,step:i=1}=n;return`<input class="range" type="range" data-bind="${t}" data-type="num"
    min="${a}" max="${s}" step="${i}" value="${e}"
    aria-valuetext="${e} out of ${s}">`};let E=0;function j(t){t.querySelectorAll("input:not([type=hidden]), select, textarea").forEach(e=>{if(e.getAttribute("aria-label")||e.getAttribute("aria-labelledby"))return;const n=e.closest(".field, .rowitem, .scale, .check")||e.parentElement;let a=e.closest("label");if(!a&&n){const b=[...n.querySelectorAll("label")];a=b.find(m=>m.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)||b[0]}if(a&&!a.contains(e)){if(e.id||(e.id=`tk-c${++E}`),a.getAttribute("for")||a.setAttribute("for",e.id),a.getAttribute("for")===e.id)return}else if(a&&a.contains(e))return;const s=a&&a.textContent.trim()||n&&n.querySelector(".lab, .t-meta, .hint")?.textContent.trim()||"",i=String(e.dataset.bind||"").replace(/\.(\d+)\./g," $1 ").replace(/[._]/g," ").trim(),l=(s||i||"value").replace(/\s+/g," ").slice(0,90);e.setAttribute("aria-label",l+(e.placeholder&&!s?` — ${e.placeholder}`:""))})}const J=(t,e,n="")=>`
  <section class="panel">
    <div class="panel-h"><h3 class="panel-t">${r(t)}</h3>${n}</div>
    ${e}
  </section>`,z=(t,e,n="")=>`
  <section class="panel panel-out">
    <div class="panel-h"><h3 class="panel-t">${r(t)}</h3>${n}</div>
    ${e}
  </section>`,K=(t,e)=>`<button class="btn btn-soft btn-sm" data-act="${t}">${$.plus}${r(e)}</button>`,Q=(t,e,n="Remove")=>`<button class="del" data-act="${t}" data-i="${e}" aria-label="${r(n)}" title="${r(n)}">${$.trash}</button>`,V=(t,e="")=>`<div class="bar"${e?` data-accent="${e}"`:""}><span style="width:${g(t,0,100)}%"></span></div>`,X=(t,e=!1)=>`<div class="meter${e?" meter-lg":""}"><span style="width:${g(t,0,100)}%"></span></div>`,Y=(t,e="")=>{const n=2*Math.PI*42,a=n-g(t,0,100)/100*n;return`<div class="dial" style="width:112px;height:112px">
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle class="track" cx="50" cy="50" r="42"></circle>
      <circle class="val" cx="50" cy="50" r="42" stroke-dasharray="${w(n)}" stroke-dashoffset="${w(a)}"></circle>
    </svg>
    <span class="dial-num">${e||t+"%"}</span>
  </div>`},Z=(t,e,n="")=>`<div class="callout${n?" callout-"+n:""}"><span class="lab">${r(t)}</span><p>${e}</p></div>`,tt=(t,e="")=>`
  <div class="state">
    <span class="state-icon">${$.sliders}</span>
    <h3>${r(t)}</h3>
    ${e?`<p>${r(e)}</p>`:""}
  </div>`,et=t=>`<div class="tbl-wrap"><table class="tbl">${t}</table></div>`;function at(t,e){const n=L(t.id);let a=n&&typeof n=="object"?q(t,n):t.initial();const s=C(`
    <div class="tool tool-split" data-accent="${t.accent||"forest"}">
      <div data-form></div>
      <div data-out></div>
    </div>`);e.appendChild(s);const i=s.querySelector("[data-form]"),l=s.querySelector("[data-out]"),b=T(()=>x(t.id,a),400);function m(){l.innerHTML=t.output(a)+S()}function A(){i.innerHTML=t.form(a),j(i)}function f(){A(),m()}function S(){return`
      <div class="row-wrap between" style="margin-top:var(--s-4)">
        <span class="t-meta faint">${$.check} Saved on this device automatically</span>
        <div class="row" style="gap:var(--s-2)">
          <button class="btn btn-ghost btn-sm" data-tk="copy">${$.copy}Copy result</button>
          <button class="btn btn-ghost btn-sm" data-tk="download">${$.download}Download</button>
          <button class="btn btn-ghost btn-sm" data-tk="reset">${$.reset}Start over</button>
        </div>
      </div>`}f();const v=u=>{const o=u.target.closest("[data-bind]");if(!o||!s.contains(o))return;const c=o.dataset.bind;let d=o.type==="checkbox"?o.checked:o.value;o.dataset.type==="num"&&(d=D(d)),M(a,c,d),s.querySelectorAll(`[data-mirror="${c}"]`).forEach(p=>{p.textContent=d}),o.type==="range"&&o.setAttribute("aria-valuetext",`${d} out of ${o.max}`),b(),m()};return s.addEventListener("input",v),s.addEventListener("change",v),h(s,"click","[data-act]",(u,o)=>{u.preventDefault();const c=(t.actions||{})[o.dataset.act];c&&(c(a,{el:o,i:o.dataset.i!=null?Number(o.dataset.i):null,redraw:f,drawOut:m,ev:u}),x(t.id,a),f())}),h(s,"click","[data-copy]",async(u,o)=>{u.preventDefault();const c=await k(o.dataset.copy);y(c?"Copied":"Could not copy",c?"ok":"")}),h(s,"click","[data-tk]",async(u,o)=>{u.preventDefault();const c=o.dataset.tk;if(c==="copy"){const d=await k(t.summary(a));y(d?"Result copied":"Could not copy",d?"ok":"")}else if(c==="download"){const d=new Blob([t.summary(a)],{type:"text/plain;charset=utf-8"}),p=document.createElement("a");p.href=URL.createObjectURL(d),p.download=`${t.id}.txt`,document.body.appendChild(p),p.click(),p.remove(),setTimeout(()=>URL.revokeObjectURL(p.href),2e3),y("Downloaded","ok")}else if(c==="reset"){if(!confirm("Clear everything you have entered in this tool?"))return;O(t.id),a=t.initial(),f(),y("Tool cleared")}}),()=>{s.removeEventListener("input",v),s.removeEventListener("change",v)}}function q(t,e){const n=t.initial(),a=Array.isArray(n)?e:{...n,...e};for(const s of Object.keys(n))Array.isArray(n[s])&&!Array.isArray(a[s])&&(a[s]=n[s]),n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&(typeof a[s]!="object"||a[s]===null||Array.isArray(a[s]))&&(a[s]=n[s]);return a}const nt=t=>`
${t}
${"-".repeat(t.length)}`,st=t=>`${t}
The Resources by Anik — ${new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}
`;export{K as addBtn,H as area,V as bar,Z as callout,g as clamp,Q as delBtn,Y as dial,tt as emptyOut,r as esc,U as field,nt as head,j as labelControls,X as meter,at as mountTool,D as n,it as num,_ as number,z as outPanel,J as panel,P as pct,B as r1,w as r2,W as range,G as select,M as setPath,st as stamp,et as tblWrap,F as text,I as uid};
