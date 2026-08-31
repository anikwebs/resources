import{n as r,stamp as w,head as $,uid as p,outPanel as u,emptyOut as f,tblWrap as b,callout as n,text as l,delBtn as R,range as v,field as c,select as A,panel as k,addBtn as j}from"./kit-B_He1EBw.js";import{e as d}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const g="Likelihood times impact ranks risks. It does not tell you which one is survivable. A 5% chance of something you cannot recover from outranks a 60% chance of something annoying — always.",N=s=>s>=16?"critical":s>=10?"high":s>=5?"medium":"low",x={critical:"Critical",high:"High",medium:"Medium",low:"Low"},L={id:"risk-analyzer",name:"Risk Analyzer",blurb:"Rank what could go wrong, then separate recoverable from not.",icon:"alert",accent:"signal",group:"Deciding",purpose:"Finds the risk that actually deserves your attention, which is rarely the one you are worrying about.",when:["Before committing to something hard to reverse","You feel uneasy but cannot name why","Someone is telling you it is completely safe"],reads:g,initial:()=>({subject:"",risks:[{id:p(),what:"",like:3,imp:3,recover:"yes",mitigate:"",signal:""}]}),form(s){const a=s.risks.map((i,e)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${l(`risks.${e}.what`,i.what,"What could go wrong? Be specific.")}
        ${s.risks.length>1?R("del",e,"Remove risk"):"<span></span>"}
      </div>
      <div class="rowitem" style="margin-top:2px">
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow"><label>Likelihood <span class="t-num" data-mirror="risks.${e}.like">${i.like}</span>/5</label>
            ${v(`risks.${e}.like`,i.like,{min:1,max:5})}</div>
          <div class="field grow"><label>Impact if it happens <span class="t-num" data-mirror="risks.${e}.imp">${i.imp}</span>/5</label>
            ${v(`risks.${e}.imp`,i.imp,{min:1,max:5})}</div>
        </div>
        ${c("Could you recover from it?",A(`risks.${e}.recover`,i.recover,[{v:"yes",l:"Yes — costly but survivable"},{v:"hard",l:"Only slowly, at serious cost"},{v:"no",l:"No — permanent or irreversible"}]))}
        ${c("What is the earliest signal it is happening?",l(`risks.${e}.signal`,i.signal,"The thing you would notice first, if you were watching"))}
        ${c("What reduces it now?",l(`risks.${e}.mitigate`,i.mitigate,"A concrete action, not a good intention"))}
      </div>`).join("");return`
      ${k("What are you assessing?",c("",l("subject",s.subject,"e.g. Leaving before the new contract is signed")))}
      ${k("The risks",a,j("add","Add risk"))}`},output(s){const a=s.risks.filter(t=>(t.what||"").trim());if(!a.length)return u("Ranked risks",f("Name one thing that could go wrong","Rank appears as you score likelihood and impact."));const i=a.map(t=>({...t,score:r(t.like)*r(t.imp),sev:N(r(t.like)*r(t.imp))})).sort((t,y)=>y.score-t.score),e=i.filter(t=>t.recover==="no"),o=i.filter(t=>t.recover==="hard"),h=i.filter(t=>t.score>=10&&!(t.signal||"").trim()),m=i.filter(t=>t.score>=10&&!(t.mitigate||"").trim());return u("Ranked risks",`
      ${b(`
        <thead><tr><th>Risk</th><th class="n">L×I</th><th>Severity</th><th>Recoverable</th></tr></thead>
        <tbody>${i.map(t=>`
          <tr>
            <td>${d(t.what)}</td>
            <td class="n">${t.score}</td>
            <td><span class="sev-${t.sev}">${x[t.sev]}</span></td>
            <td>${t.recover==="no"?'<span class="badge badge-danger">No</span>':t.recover==="hard"?'<span class="badge badge-warning">Slowly</span>':'<span class="badge badge-success">Yes</span>'}</td>
          </tr>`).join("")}</tbody>`)}

      ${e.length?`<div style="margin-top:var(--s-4)">${n("These outrank the rankings",`You have marked ${e.length} risk${e.length===1?"":"s"} as unrecoverable: ${e.map(t=>`<strong>${d(t.what)}</strong>`).join(", ")}. Score is irrelevant here. Either eliminate the exposure, cap it, or do not proceed. Never average an irreversible risk into a list.`,"danger")}</div>`:""}

      ${o.length&&!e.length?`<div style="margin-top:var(--s-4)">${n("Slow to recover from",`${o.map(t=>`<strong>${d(o.length===1?o[0].what:t.what)}</strong>`).join(", ")} would take serious time and cost to undo. Treat these as near-irreversible when you choose.`,"warning")}</div>`:""}

      ${h.length?`<div style="margin-top:var(--s-3)">${n("No early warning",`${h.length} significant risk${h.length===1?" has":"s have"} no named signal. A risk you cannot detect early is a risk you will meet at full size. Write down what you would notice first.`,"warning")}</div>`:""}

      ${m.length?`<div style="margin-top:var(--s-3)">${n("Nothing reduces these",`${m.length} significant risk${m.length===1?" has":"s have"} no mitigation. If nothing can reduce them, that is a finding — it means the real decision is whether to accept them, stated plainly.`,"info")}</div>`:""}

      ${i.filter(t=>t.score<5).length===i.length?`<div style="margin-top:var(--s-3)">${n("Suspiciously calm","Every risk you listed scored low. Either this is genuinely safe, or you are listing the risks you already know how to handle. Ask what would have to be true for this to go badly — and what you would be embarrassed to have missed.","info")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${d(g)}</p>`)},actions:{add:s=>s.risks.push({id:p(),what:"",like:3,imp:3,recover:"yes",mitigate:"",signal:""}),del:(s,{i:a})=>s.risks.splice(a,1)},summary(s){const a=s.risks.filter(e=>(e.what||"").trim()).map(e=>({...e,score:r(e.like)*r(e.imp)})).sort((e,o)=>o.score-e.score),i={yes:"recoverable",hard:"slow to recover",no:"IRREVERSIBLE"};return[w("Risk Analyzer"),`Assessing: ${s.subject||"(not stated)"}`,$("Ranked risks"),...a.map((e,o)=>[`  ${o+1}. ${e.what}`,`     likelihood ${e.like}/5 · impact ${e.imp}/5 · score ${e.score} · ${i[e.recover]}`,`     early signal: ${e.signal||"(none named)"}`,`     mitigation: ${e.mitigate||"(none named)"}`].join(`
`)),"",a.some(e=>e.recover==="no")?"WARNING: at least one risk is irreversible. Eliminate, cap, or do not proceed.":"No irreversible risks recorded.","",g].join(`
`)}};export{L as default};
