import{n as t,stamp as x,head as h,uid as g,outPanel as w,emptyOut as j,bar as S,callout as s,text as p,delBtn as f,number as m,panel as l,field as d,area as y,addBtn as $}from"./kit-B_He1EBw.js";import{I as A,J as v,e as u}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const b="Leverage comes from a real alternative, not from confidence. If you have no alternative, negotiate anyway — but ask once, accept the answer gracefully, and spend the next months building the alternative.",W={id:"negotiation-planner",name:"Negotiation Planner",blurb:"Set your number, your walk-away, and the non-money axes.",icon:"scale",accent:"council",group:"Communicating",purpose:"Stops you negotiating against yourself by fixing the numbers before the conversation.",when:["Pay, a contract, a price, a deadline or scope is on the table","You are about to say a range instead of a number","You want to know whether you have any leverage at all"],reads:b,initial:()=>({subject:"",other:"",current:0,ask:0,target:0,walk:0,alt:"",altStrength:"weak",evidence:[{id:g(),point:""}],axes:[{id:g(),item:"",value:3}],opener:"",timing:""}),form(e){const n=e.evidence.map((a,i)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${p(`evidence.${i}.point`,a.point,"A specific, checkable fact about your contribution or the market")}
        ${e.evidence.length>1?f("delEv",i,"Remove point"):"<span></span>"}
      </div>`).join(""),r=e.axes.map((a,i)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 120px 34px">
        ${p(`axes.${i}.item`,a.item,"e.g. Four days a week, training budget, title")}
        <div class="field"><label class="t-meta faint">Worth to you</label>
          ${m(`axes.${i}.value`,a.value,{min:1,max:5})}</div>
        ${e.axes.length>1?f("delAx",i,"Remove item"):"<span></span>"}
      </div>`).join("");return`
      ${l("What is being negotiated",`
        ${d("Subject",p("subject",e.subject,"e.g. Salary for the new role"))}
        ${d("With whom, and what pressure are they under?",y("other",e.other,"Budget cycle, headcount freeze, their own targets, how badly they need this filled.",2))}`)}
      ${l("The numbers",`
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:120px"><label>Current</label>${m("current",e.current,{min:0,max:1e8})}</div>
          <div class="field grow" style="min-width:120px"><label>Your opening ask</label>${m("ask",e.ask,{min:0,max:1e8})}</div>
        </div>
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:120px"><label>Target — genuinely pleased</label>${m("target",e.target,{min:0,max:1e8})}</div>
          <div class="field grow" style="min-width:120px"><label>Walk-away</label>${m("walk",e.walk,{min:0,max:1e8})}</div>
        </div>
        <p class="hint">State one number, not a range. A range is always heard as its bottom.</p>`)}
      ${l("Your alternative",`
        ${d("If they say no, what do you actually do?",y("alt",e.alt,"Another offer, staying put, a different supplier, walking. Be honest — an imagined alternative gives no leverage.",2))}
        ${d("How strong is it?",`<select class="select" data-bind="altStrength">
          ${[["strong","Strong — a concrete, dated alternative I would take"],["moderate","Moderate — options exist but nothing signed"],["weak","Weak — I have nowhere else to go right now"]].map(([a,i])=>`<option value="${a}"${e.altStrength===a?" selected":""}>${i}</option>`).join("")}
        </select>`)}`)}
      ${l("Your case",n,$("addEv","Add evidence"))}
      ${l("If money is fixed",r,$("addAx","Add non-money item"))}
      ${l("The ask",`
        ${d("Your sentence, word for word",y("opener",e.opener,"Name the number and stop talking. Do not justify it in the same breath.",2))}
        ${d("When will you ask?",p("timing",e.timing,"e.g. Before the planning cycle closes, after the launch lands"))}`)}`},output(e){if(!e.subject.trim()&&!t(e.ask))return w("Your position",j("Name the subject and your number","The read-out on leverage appears here."));const n=e.evidence.filter(o=>(o.point||"").trim()),r=e.axes.filter(o=>(o.item||"").trim()).sort((o,k)=>t(k.value)-t(o.value)),a=t(e.current)>0&&t(e.ask)>0?Math.round((t(e.ask)-t(e.current))/t(e.current)*100):null,i={strong:90,moderate:50,weak:18}[e.altStrength],c=[];return t(e.walk)>0&&t(e.ask)>0&&t(e.walk)>=t(e.ask)&&c.push("Your walk-away is at or above your ask. One of those numbers is wrong."),t(e.target)>0&&t(e.ask)>0&&t(e.target)>t(e.ask)&&c.push("Your target is above your opening ask — you have left no room at all."),t(e.walk)||c.push("No walk-away set. Without one you will accept whatever is offered when the room gets uncomfortable."),w("Your position",`
      ${t(e.ask)>0?`<div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${v(t(e.ask))}</b><span>you ask</span></div>
        ${t(e.target)>0?`<div class="stat"><b>${v(t(e.target))}</b><span>target</span></div>`:""}
        ${t(e.walk)>0?`<div class="stat"><b>${v(t(e.walk))}</b><span>walk away</span></div>`:""}
      </div>`:""}

      ${a!=null?`<p class="t-small muted">That is a ${a}% move on your current ${v(t(e.current))}.${a>40?" A jump that size needs external evidence — market data or a competing offer — not internal argument.":""}</p>`:""}

      <div class="field" style="margin:var(--s-4) 0">
        <label>Your leverage — ${e.altStrength}</label>
        ${S(i)}
      </div>

      ${e.altStrength==="weak"?s("You are asking, not negotiating","With no alternative, this is a request — and that is fine. Ask once, clearly, and accept the answer without resentment. Then spend the next six months building the alternative, because that is the only thing that changes the next conversation.","warning"):e.altStrength==="strong"?s("You have real leverage","You can hold a number. Do not threaten with the alternative — simply be visibly comfortable. If you name the alternative as a threat, you invite them to call it.","success"):s("Partial leverage","Options exist but nothing is signed. Ask, hold your number once, then judge. Do not imply you have an offer you do not have — that unravels badly and permanently.","info")}

      ${e.opener.trim()?`<div class="lines" style="margin-top:var(--s-4)">
        <div class="line"><span class="when">Say this</span><span class="say">${u(e.opener)}</span>
        <button class="btn btn-icon copy" data-copy="${u(e.opener)}" aria-label="Copy the ask" title="Copy">${A.copy}</button></div>
      </div>`:""}

      ${n.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Your case — ${n.length} point${n.length===1?"":"s"}</p>
        <ul class="goodlist">${n.map(o=>`<li>${u(o.point)}</li>`).join("")}</ul></div>`:`<div style="margin-top:var(--s-4)">${s("No evidence",'You have listed nothing specific. "I have worked hard" is not evidence — it is how everybody feels. Bring outcomes, numbers, dates and comparables.',"warning")}</div>`}

      ${r.length?`<div style="margin-top:var(--s-4)">${s("If the money is genuinely fixed",`Ask for these instead, in this order: ${r.slice(0,3).map(o=>`<strong>${u(o.item)}</strong>`).join(", ")}. Budget is often frozen when flexibility is not. Pick two, not seven — asking for everything reads as unserious.`,"info")}</div>`:""}

      ${c.length?`<div style="margin-top:var(--s-3)">${s("Check your numbers",c.map(o=>u(o)).join("<br>"),"danger")}</div>`:""}

      ${e.timing.trim()?"":`<div style="margin-top:var(--s-3)">${s("Timing is leverage too","Ask near planning or review cycles, when budget is being allocated — not after bad results, and not in a corridor.","info")}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${u(b)}</p>`)},actions:{addEv:e=>e.evidence.push({id:g(),point:""}),delEv:(e,{i:n})=>e.evidence.splice(n,1),addAx:e=>e.axes.push({id:g(),item:"",value:3}),delAx:(e,{i:n})=>e.axes.splice(n,1)},summary(e){const n=e.evidence.filter(a=>(a.point||"").trim()),r=e.axes.filter(a=>(a.item||"").trim()).sort((a,i)=>t(i.value)-t(a.value));return[x("Negotiation Planner"),`Subject: ${e.subject||"(not stated)"}`,`Other side: ${e.other||"(not considered)"}`,h("Numbers"),`  Current:    ${t(e.current)||"-"}`,`  Ask:        ${t(e.ask)||"-"}`,`  Target:     ${t(e.target)||"-"}`,`  Walk away:  ${t(e.walk)||"(not set — set this)"}`,h("Alternative"),`  ${e.alt||"(none stated)"}`,`  Strength: ${e.altStrength}`,h("Evidence"),...n.length?n.map(a=>`  - ${a.point}`):["  (none — bring outcomes, numbers, comparables)"],h("Non-money asks, in priority order"),...r.length?r.map(a=>`  - ${a.item} (worth ${t(a.value)}/5)`):["  (none)"],h("The ask"),`  "${e.opener||"(not written)"}"`,`  Timing: ${e.timing||"(not planned)"}`,"",b].join(`
`)}};export{W as default};
