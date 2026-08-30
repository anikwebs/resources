import{stamp as w,head as c,uid as m,outPanel as b,emptyOut as k,meter as x,callout as r,text as h,select as T,delBtn as y,field as d,panel as p,area as u,addBtn as v}from"./kit-DV3I2Ncm.js";import{e as s}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const g="Most stuck problems are badly stated rather than genuinely hard. The two questions that unstick them are: what is actually true right now, and who decides?",W={id:"problem-canvas",name:"Problem-Solving Canvas",blurb:"State the problem properly, then find where it actually moves.",icon:"puzzle",accent:"clay",group:"Thinking",purpose:"Separates the symptom from the cause and the constraints you can move from the ones you cannot.",when:["You have discussed something three times without progress","The problem keeps coming back in a different form","You are about to solve the visible part of it"],reads:g,initial:()=>({symptom:"",who:"",cost:"",real:"",evidence:"",decider:"",constraints:[{id:m(),t:"",movable:"no"}],tried:[{id:m(),t:"",why:""}],options:[{id:m(),t:""}],next:""}),form(e){const i=e.constraints.map((n,t)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 180px 34px;margin-top:${t?"var(--s-2)":"0"}">
        ${h(`constraints.${t}.t`,n.t,"Budget, time, a rule, a person, a dependency")}
        ${T(`constraints.${t}.movable`,n.movable,[{v:"no",l:"Genuinely fixed"},{v:"maybe",l:"Fixed by habit only"},{v:"yes",l:"I could move it"}])}
        ${e.constraints.length>1?y("delCon",t,"Remove"):"<span></span>"}
      </div>`).join(""),a=e.tried.map((n,t)=>`
      <div class="rowitem" style="margin-top:${t?"var(--s-2)":"0"}">
        ${d("What was tried",h(`tried.${t}.t`,n.t,"The attempt"))}
        ${d("Why it did not work",h(`tried.${t}.why`,n.why,"The actual reason, if you know it"))}
        <div class="row" style="justify-content:flex-end">${e.tried.length>1?y("delTried",t,"Remove"):""}</div>
      </div>`).join(""),l=e.options.map((n,t)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${t?"var(--s-2)":"0"}">
        ${h(`options.${t}.t`,n.t,"A possible move — including doing nothing")}
        ${e.options.length>1?y("delOpt",t,"Remove"):"<span></span>"}
      </div>`).join("");return`
      ${p("The symptom",`
        ${d("What is visibly going wrong?",u("symptom",e.symptom,"What someone would notice. Not your theory about it yet.",2))}
        ${d("Who does it hurt, and how?",h("who",e.who,"Named people or groups"))}
        ${d("What does it cost if nothing changes?",h("cost",e.cost,"Time, money, trust, risk — make it concrete"),"If nothing is lost, this may not be a problem.")}`)}
      ${p("The real problem",`
        ${d("Underneath the symptom, what is actually wrong?",u("real",e.real,"Ask why the symptom exists. Then ask again. Stop when you reach something you could change.",3))}
        ${d("What evidence do you have for that?",u("evidence",e.evidence,"Observations, data, quotes. Distinguish what you know from what you assume.",2),"A cause with no evidence is a hunch — useful, but label it.")}
        ${d("Who actually decides here?",h("decider",e.decider,"A name or a role"),"Solving a problem you have no authority over is the most common way effort disappears.")}`)}
      ${p("Constraints",i,v("addCon","Add constraint"))}
      ${p("Already tried",a,v("addTried","Add attempt"))}
      ${p("Possible moves",l,v("addOpt","Add option"))}
      ${p("Next action",d("What is the single next thing you will do?",h("next",e.next,"Small, specific, and yours to do")))}`},output(e){if(!e.symptom.trim())return b("The canvas",k("Start with the symptom","The restated problem and the gaps appear here."));const i=e.constraints.filter(o=>(o.t||"").trim()),a=i.filter(o=>o.movable==="maybe"||o.movable==="yes"),l=e.tried.filter(o=>(o.t||"").trim()),n=e.options.filter(o=>(o.t||"").trim()),t=["symptom","real","evidence","decider","next"],f=t.filter(o=>(e[o]||"").trim()).length,$=Math.round(f/t.length*100);return b("The canvas",`
      <div class="field" style="margin-bottom:var(--s-4)">
        <label>Canvas completeness — ${$}%</label>${x($,!0)}
      </div>

      ${e.real.trim()?r("The problem, restated",`${s(e.real)}${e.who.trim()?`<br><br>Affecting: ${s(e.who)}.`:""}${e.cost.trim()?` Cost of inaction: ${s(e.cost)}.`:""}`,"success"):r("Still describing the symptom",'You have written what is going wrong but not why. Ask "why does that happen?" until you reach something you could actually change. Solving the symptom is what makes a problem recur in a new shape.',"warning")}

      ${!e.evidence.trim()&&e.real.trim()?`<div style="margin-top:var(--s-3)">${r("Unevidenced cause","You have named a cause but no evidence for it. That is fine as a hypothesis — but label it, and check it cheaply before anyone spends money on the fix.","warning")}</div>`:""}

      ${e.decider.trim()?`<div style="margin-top:var(--s-3)">${r("Who decides",`${s(e.decider)}. Everything you do here should be aimed at giving that person what they need to decide — not at being right in front of people who cannot act.`,"info")}</div>`:`<div style="margin-top:var(--s-3)">${r("Nobody named","You have not identified who decides. Find that out before you build anything. Unaddressed, this is where good analysis goes to die.","danger")}</div>`}

      ${a.length?`<div style="margin-top:var(--s-3)">${r("Where this actually moves",`You marked ${a.length} constraint${a.length===1?"":"s"} as movable or fixed only by habit: ${a.map(o=>`<strong>${s(o.t)}</strong>`).join(", ")}. That is your leverage. Almost every stuck problem is stuck against a constraint nobody has tested recently.`,"success")}</div>`:""}

      ${i.length&&!a.length?`<div style="margin-top:var(--s-3)">${r("Everything is fixed","You have marked every constraint as immovable. If that is genuinely true, the honest answer is that this problem cannot be solved and should be accepted or escalated — say so plainly rather than continuing to spend effort. More often, one of them has simply never been challenged.","warning")}</div>`:""}

      ${l.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Already tried</p>
        <ul class="badlist">${l.map(o=>`<li>${s(o.t)}${o.why?` — ${s(o.why)}`:" — reason unknown"}</li>`).join("")}</ul>
        ${l.some(o=>!(o.why||"").trim())?'<p class="t-caption faint" style="margin-top:var(--s-2)">Some attempts have no recorded reason for failing. Those are the ones most likely to be repeated.</p>':""}</div>`:""}

      ${n.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Options on the table</p>
        <ul class="marklist">${n.map(o=>`<li>${s(o.t)}</li>`).join("")}</ul>
        ${n.length===1?'<p class="t-caption faint" style="margin-top:var(--s-2)">One option is not a choice. Add at least "change nothing and accept the cost" — it is always available and often correct.</p>':""}</div>`:""}

      ${e.next.trim()?`<div style="margin-top:var(--s-4)">${r("Do this now",s(e.next),"success")}</div>`:`<div style="margin-top:var(--s-4)">${r("No next action","A canvas without a next action is analysis. Pick the smallest thing that would tell you whether your cause is right, and do that.","danger")}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${s(g)}</p>`)},actions:{addCon:e=>e.constraints.push({id:m(),t:"",movable:"no"}),delCon:(e,{i})=>e.constraints.splice(i,1),addTried:e=>e.tried.push({id:m(),t:"",why:""}),delTried:(e,{i})=>e.tried.splice(i,1),addOpt:e=>e.options.push({id:m(),t:""}),delOpt:(e,{i})=>e.options.splice(i,1)},summary(e){const i={no:"FIXED",maybe:"habit only",yes:"MOVABLE"},a=e.constraints.filter(t=>(t.t||"").trim()),l=e.tried.filter(t=>(t.t||"").trim()),n=e.options.filter(t=>(t.t||"").trim());return[w("Problem-Solving Canvas"),c("Symptom"),`  ${e.symptom||"(not stated)"}`,`  Affects: ${e.who||"(not stated)"}`,`  Cost of inaction: ${e.cost||"(not stated)"}`,c("Real problem"),`  ${e.real||"(not identified)"}`,`  Evidence: ${e.evidence||"(none — this is a hypothesis)"}`,`  Decided by: ${e.decider||"(unknown — find this out)"}`,c("Constraints"),...a.length?a.map(t=>`  [${i[t.movable]}] ${t.t}`):["  (none listed)"],c("Already tried"),...l.length?l.map(t=>`  - ${t.t} — ${t.why||"reason unknown"}`):["  (nothing)"],c("Options"),...n.length?n.map(t=>`  - ${t.t}`):["  (none)"],c("Next action"),`  ${e.next||"(none — pick one)"}`,"",g].join(`
`)}};export{W as default};
