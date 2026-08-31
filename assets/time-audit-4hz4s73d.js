import{n as a,stamp as N,r1 as s,pct as c,head as x,uid as w,outPanel as T,emptyOut as S,callout as p,tblWrap as V,bar as Y,text as E,number as W,select as A,delBtn as H,panel as O,addBtn as M}from"./kit-B_He1EBw.js";import{e as g}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const f='A time audit is uncomfortable because it is accurate. The finding is almost never "I need to work harder" — it is that a large block of the week is going to something nobody would defend out loud, and that block is where your available time actually is.',u={moves:{label:"Moves something real",w:3,tone:"success"},keeps:{label:"Keeps the lights on",w:2,tone:"info"},drain:{label:"Nobody would defend it",w:0,tone:"danger"}},D=Object.entries(u).map(([r,n])=>({v:r,l:n.label})),j={drain:"Kill, or cap it with a hard time box",keeps:"Delegate, template or automate",moves:"Protect this block before anything else gets scheduled"},R={id:"time-audit",name:"Time Audit",blurb:"Find where the week actually goes, and what it is worth.",icon:"refresh",accent:"atlas",group:"Working",purpose:"Converts a vague sense of being busy into hours per week against the value each hour produces.",when:["You finish weeks tired with nothing you can name","You want to take something on and cannot see the space","You are about to ask for help without knowing what to hand over"],reads:f,initial:()=>({hours:45,blocks:[{id:w(),name:"Meetings",hours:8,value:"keeps",who:"me"},{id:w(),name:"Email and messages",hours:6,value:"keeps",who:"me"},{id:w(),name:"",hours:0,value:"moves",who:"me"}]}),form(r){const n=r.blocks.map((l,o)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1.5fr) 78px minmax(0,1.3fr) minmax(0,1fr) 34px;margin-top:${o?"var(--s-2)":"0"}">
        ${E(`blocks.${o}.name`,l.name,"What the time goes to")}
        ${W(`blocks.${o}.hours`,l.hours,{min:0,max:100,step:.5})}
        ${A(`blocks.${o}.value`,l.value,D)}
        ${A(`blocks.${o}.who`,l.who,[{v:"me",l:"Only I can do it"},{v:"other",l:"Someone else could"},{v:"nobody",l:"Nobody needs to"}])}
        ${r.blocks.length>1?H("del",o,"Remove this block"):"<span></span>"}
      </div>`).join("");return`
      ${O("The week",`
        <div class="field" style="max-width:220px"><label>Hours you actually work in a week</label>
          ${W("hours",r.hours,{min:1,max:120})}
          <span class="hint">The real number, including evenings. Not your contracted hours.</span></div>`)}
      ${O("Where it goes",`
        <div class="rowitem" style="grid-template-columns:minmax(0,1.5fr) 78px minmax(0,1.3fr) minmax(0,1fr) 34px">
          <span class="t-meta faint">Block</span><span class="t-meta faint">Hrs/wk</span>
          <span class="t-meta faint">Value</span><span class="t-meta faint">Who</span><span></span>
        </div>
        ${n}
        <div class="row" style="margin-top:var(--s-3)">${M("add","Add a block")}</div>
        <p class="t-caption faint" style="margin-top:var(--s-3)">Six to ten blocks is enough. Guess the hours — an honest estimate beats a precise fiction, and you can correct it next week.</p>`)}`},output(r){const n=r.blocks.filter(e=>(e.name||"").trim()&&a(e.hours)>0);if(!n.length)return T("Where the week goes",S("Name one block of time","The breakdown appears as soon as a block has hours against it."));const l=n.reduce((e,h)=>e+a(h.hours),0),o=a(r.hours)||l,i=o-l,m={};for(const e of Object.keys(u))m[e]=0;for(const e of n)m[e.value]+=a(e.hours);const t=m.drain,d=m.moves,k=n.filter(e=>e.who==="other").reduce((e,h)=>e+a(h.hours),0),y=n.filter(e=>e.who==="nobody").reduce((e,h)=>e+a(h.hours),0),B=n.reduce((e,h)=>e+a(h.hours)*u[h.value].w,0),C=l>0?Math.round(B/(l*3)*100):0,$=n.slice().sort((e,h)=>u[e.value].w-u[h.value].w||a(h.hours)-a(e.hours)),v=$.find(e=>e.value==="drain"),b=t+k+y;return T("Where the week goes",`
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${s(d)}h</b><span>moves something real</span></div>
        <div class="stat"><b>${s(t)}h</b><span>nobody would defend</span></div>
        <div class="stat"><b>${C}%</b><span>of the week doing real work</span></div>
      </div>

      ${d<o*.2?p("Under a fifth of the week produces anything",`Only ${s(d)} of ${s(o)} hours goes to work that moves something real. That is not a discipline problem — it is a structural one, and no amount of getting up earlier will fix it. The fix is subtraction, and the list below shows what to subtract.`,"danger"):t>o*.25?p(`${c(t,o)}% of the week is drain`,`${s(t)} hours a week is roughly ${s(t*46/8)} working days a year on things you have just told yourself nobody would defend. You do not need more time; you need to stop doing these.`,"warning"):p("The shape is defensible",`${c(d,o)}% on real work and ${c(t,o)}% on drain is better than most weeks look under inspection. The remaining move is protecting the good block rather than finding more hours.`,"success")}

      <div style="margin-top:var(--s-5)">
        <p class="eyebrow">Every block, worst value first</p>
        ${V(`
          <thead><tr><th>Block</th><th class="n">Hrs/wk</th><th style="width:22%">Share</th><th>Value</th><th>What to do</th></tr></thead>
          <tbody>${$.map(e=>`
            <tr>
              <td><strong>${g(e.name)}</strong>${e.who==="other"?'<br><span class="t-meta faint">someone else could do this</span>':e.who==="nobody"?'<br><span class="t-meta faint">nobody needs this done</span>':""}</td>
              <td class="n">${s(a(e.hours))}</td>
              <td>${Y(c(a(e.hours),o))} <span class="t-meta faint">${c(a(e.hours),o)}%</span></td>
              <td class="t-small">${g(u[e.value].label)}</td>
              <td class="t-small">${g(j[e.value])}</td>
            </tr>`).join("")}</tbody>`)}
      </div>

      ${Math.abs(i)>2?`<div style="margin-top:var(--s-4)">${p(i>0?`${s(i)} hours unaccounted for`:`${s(-i)} hours more than the week contains`,i>0?"That gap is real and it is usually the most interesting number here. It goes to switching between tasks, interruptions and recovery from them. Find it by logging two actual days rather than estimating.":"Your blocks add up to more hours than you said you work, which means either the estimates are generous or the week is longer than you admitted. Both are worth knowing.","info")}</div>`:""}

      ${b>2?`<div style="margin-top:var(--s-4)">${p("What is actually recoverable",`${s(b)} hours a week — ${s(t)} of drain, ${s(k)} that someone else could do, ${s(y)} that nobody needs done. That is <strong>${s(b*46)} hours a year</strong>. You will not recover all of it, but recovering a third of it is the difference between having capacity and not.`,"success")}</div>`:""}

      ${v?`<div style="margin-top:var(--s-3)">${p("Start here, this week",`<strong>${g(v.name)}</strong> — ${s(a(v.hours))} hours. Do not try to eliminate it. Cap it: half the hours, a fixed slot, or a rule about when you touch it. Caps survive; abolitions get quietly reinstated within a fortnight.`,"warning")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${g(f)}</p>`)},actions:{add:r=>r.blocks.push({id:w(),name:"",hours:0,value:"keeps",who:"me"}),del:(r,{i:n})=>r.blocks.splice(n,1)},summary(r){const n=r.blocks.filter(t=>(t.name||"").trim()&&a(t.hours)>0),l=n.reduce((t,d)=>t+a(d.hours),0),o=a(r.hours)||l,i={moves:0,keeps:0,drain:0};for(const t of n)i[t.value]+=a(t.hours);const m=n.slice().sort((t,d)=>u[t.value].w-u[d.value].w||a(d.hours)-a(t.hours));return[N("Time Audit"),`Week: ${s(o)} hours worked · ${s(l)} accounted for`,`Moves something real: ${s(i.moves)}h (${c(i.moves,o)}%)`,`Keeps the lights on:  ${s(i.keeps)}h (${c(i.keeps,o)}%)`,`Nobody would defend:  ${s(i.drain)}h (${c(i.drain,o)}%)`,x("Blocks, worst value first"),...m.length?m.map(t=>`  ${s(a(t.hours))}h — ${t.name} [${u[t.value].label}] → ${j[t.value]}`):["  (nothing entered)"],x("Rule"),"  Cap the biggest drain rather than abolishing it. Caps survive.","",f].join(`
`)}};export{R as default};
