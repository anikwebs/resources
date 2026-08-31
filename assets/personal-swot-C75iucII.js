import{uid as d,stamp as f,head as p,outPanel as g,emptyOut as k,callout as r,panel as m,field as u,text as v,addBtn as b,area as y,delBtn as x}from"./kit-B_He1EBw.js";import{e as i}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const c="A SWOT is only useful if it produces a move. Four lists and no action is a self-assessment exercise. The value is in the pairings: a strength aimed at an opportunity, and a weakness that a threat could exploit.",h=[{k:"strengths",h:"Strengths",sub:"Evidenced, not aspirational",ph:"Something you have demonstrably done",cls:"quad-do"},{k:"weaknesses",h:"Weaknesses",sub:"The ones that cost you",ph:'Be specific — "bad at detail" is not actionable',cls:"quad-drop"},{k:"opportunities",h:"Opportunities",sub:"External and currently open",ph:"A change, an opening, a gap you could fill",cls:"quad-plan"},{k:"threats",h:"Threats",sub:"External and moving toward you",ph:"Automation, a restructure, a dependency, a skill going stale",cls:"quad-deleg"}],A={id:"personal-swot",name:"Personal SWOT",blurb:"An honest inventory that ends in two concrete moves.",icon:"compass",accent:"forest",group:"Building",purpose:"Locates where you actually stand, then forces a pairing into action.",when:["You feel stuck but cannot name why","Before a review, a job search, or a change of direction","Something in your field is shifting and you are not sure where you sit"],reads:c,initial:()=>({context:"",strengths:[{id:d(),t:""}],weaknesses:[{id:d(),t:""}],opportunities:[{id:d(),t:""}],threats:[{id:d(),t:""}],move1:"",move2:""}),form(t){const n=e=>t[e.k].map((o,s)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${s?"var(--s-2)":"0"}">
        ${v(`${e.k}.${s}.t`,o.t,e.ph)}
        ${t[e.k].length>1?x(`del_${e.k}`,s,"Remove"):"<span></span>"}
      </div>`).join("");return`
      ${m("Context",u("What are you assessing yourself against?",v("context",t.context,"e.g. Moving into a data role in the next year"),"A SWOT with no context produces four lists of generalities."))}
      ${h.map(e=>m(e.h,`<p class="t-caption faint" style="margin-bottom:var(--s-3)">${i(e.sub)}</p>${n(e)}`,b(`add_${e.k}`,"Add"))).join("")}
      ${m("The output",`
        <p class="t-small muted" style="margin-bottom:var(--s-3)">Now the part that matters. Pick one pairing of each kind.</p>
        ${u("Strength × Opportunity — the move to make",y("move1",t.move1,"Which strength do you point at which opening, and what is the first action this month?",3))}
        ${u("Weakness × Threat — the exposure to close",y("move2",t.move2,"Which weakness would a threat exploit, and what reduces it?",3))}`)}`},output(t){const n=h.map(a=>({...a,items:t[a.k].filter(l=>(l.t||"").trim())}));if(!n.reduce((a,l)=>a+l.items.length,0))return g("The grid",k("Start with one strength","The grid and its blind spots appear here."));const o=n.filter(a=>!a.items.length),s=n[0].items.length>=4&&n[1].items.length<=1,w=n[1].items.length>=4&&n[0].items.length<=1,$=!n[2].items.length&&!n[3].items.length;return g("The grid",`
      ${t.context.trim()?`<p class="eyebrow">${i(t.context)}</p>`:""}
      <div class="quad" style="margin-bottom:var(--s-4)">
        ${n.map(a=>`
          <div class="quad-cell ${a.cls}">
            <div class="h">${i(a.h)}</div>
            <div class="sub">${i(a.sub)}</div>
            ${a.items.length?`<ul>${a.items.map(l=>`<li>${i(l.t)}</li>`).join("")}</ul>`:'<p class="t-caption faint">Empty.</p>'}
          </div>`).join("")}
      </div>

      ${t.move1.trim()||t.move2.trim()?`
        ${t.move1.trim()?r("Move one — strength at opportunity",i(t.move1),"success"):""}
        ${t.move2.trim()?`<div style="margin-top:var(--s-3)">${r("Move two — close the exposure",i(t.move2),"warning")}</div>`:""}`:r("Not finished yet","You have lists but no moves. The two fields at the bottom are the entire point of the exercise — without them this is a description of your situation rather than a change to it.","danger")}

      ${o.length?`<div style="margin-top:var(--s-3)">${r("Blind spots",`${o.map(a=>a.h).join(" and ")} ${o.length===1?"is":"are"} empty. ${o.some(a=>a.k==="threats")?"An empty threats box is almost never accurate — it usually means you have not looked. What would make your current skills less valuable in three years?":"Fill it, even badly. A wrong entry can be corrected; a blank one hides."}`,"warning")}</div>`:""}

      ${s?`<div style="margin-top:var(--s-3)">${r("Only good news","Many strengths and almost no weaknesses. Nobody's honest inventory looks like this. Ask what a candid colleague would add — that answer is the useful one.","warning")}</div>`:""}

      ${w?`<div style="margin-top:var(--s-3)">${r("Only bad news","Many weaknesses and almost no strengths. That is a mood, not an assessment. List three things you have actually delivered — with dates. The grid needs both sides to produce a move.","warning")}</div>`:""}

      ${$?`<div style="margin-top:var(--s-3)">${r("All inward","You have listed only internal factors. Half of a SWOT is about the world moving independently of you: what is opening, and what is coming. Without that half, you cannot aim anything.","info")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${i(c)}</p>`)},actions:h.reduce((t,n)=>(t[`add_${n.k}`]=e=>e[n.k].push({id:d(),t:""}),t[`del_${n.k}`]=(e,{i:o})=>e[n.k].splice(o,1),t),{}),summary(t){const n=e=>{const o=t[e.k].filter(s=>(s.t||"").trim());return[p(e.h+" — "+e.sub),...o.length?o.map(s=>"  - "+s.t):["  (empty)"]]};return[f("Personal SWOT"),`Context: ${t.context||"(not stated)"}`,...h.flatMap(n),p("The two moves"),`  Strength × Opportunity: ${t.move1||"(not decided)"}`,`  Weakness × Threat:      ${t.move2||"(not decided)"}`,"",c].join(`
`)}};export{A as default};
