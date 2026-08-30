import{n as i,stamp as N,head as w,r1 as c,uid as p,outPanel as x,emptyOut as E,tblWrap as S,callout as r,text as m,delBtn as j,field as h,area as y,range as A,number as M,panel as f,addBtn as Y}from"./kit-DV3I2Ncm.js";import{e as v,J as g}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const $="An expected value is an average of futures you will not experience — you get exactly one. Use it to compare options, then check that you could survive the bad branch. A high average with a fatal downside is a bad plan.",I={id:"scenario-simulator",name:"Scenario Simulator",blurb:"Run a plan through good, likely and bad futures before committing.",icon:"shuffle",accent:"atlas",group:"Deciding",purpose:"Tests whether a plan survives the version of the future you are not picturing.",when:["You have one plan and it assumes things go roughly to schedule","The downside has not been costed, only mentioned","You are about to commit money, time or reputation"],reads:$,initial:()=>({plan:"",assumption:"",horizon:"",scenarios:[{id:p(),name:"It goes well",prob:25,value:0,story:"",survive:"yes",signal:""},{id:p(),name:"It goes roughly as expected",prob:50,value:0,story:"",survive:"yes",signal:""},{id:p(),name:"It goes badly",prob:25,value:0,story:"",survive:"yes",signal:""}],hedge:""}),form(a){const n=a.scenarios.map((o,s)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${s?"var(--s-3)":"0"}">
        ${m(`scenarios.${s}.name`,o.name,"Name this future")}
        ${a.scenarios.length>1?j("del",s,"Remove scenario"):"<span></span>"}
      </div>
      <div class="rowitem" style="margin-top:2px">
        ${h("What actually happens in this version?",y(`scenarios.${s}.story`,o.story,"Concrete events, not adjectives.",2))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:170px">
            <label>Chance <span class="t-num" data-mirror="scenarios.${s}.prob">${o.prob}</span>%</label>
            ${A(`scenarios.${s}.prob`,o.prob,{min:0,max:100,step:5})}
          </div>
          <div class="field grow" style="min-width:150px">
            <label>Value if it happens</label>
            ${M(`scenarios.${s}.value`,o.value,{min:-1e8,max:1e8})}
            <span class="hint">Money, hours saved, or a −10 to +10 score. Use one unit throughout.</span>
          </div>
        </div>
        ${h("Could you survive this outcome?",`<select class="select" data-bind="scenarios.${s}.survive">
          ${[["yes","Yes — unpleasant but survivable"],["hard","Only with serious damage"],["no","No — this would be ruinous"]].map(([l,t])=>`<option value="${l}"${o.survive===l?" selected":""}>${t}</option>`).join("")}
        </select>`)}
        ${h("Earliest signal you are on this branch",m(`scenarios.${s}.signal`,o.signal,"What you would notice first, if you were watching for it"))}
      </div>`).join("");return`
      ${f("The plan",`
        ${h("What are you planning to do?",m("plan",a.plan,"e.g. Go freelance in April"))}
        ${h("What is the assumption it rests on?",y("assumption",a.assumption,"The thing that, if false, breaks the plan. Every plan has one.",2))}
        ${h("Over what period?",m("horizon",a.horizon,"e.g. The first six months"))}`)}
      ${f("The futures",n,Y("add","Add scenario"))}
      ${f("Hedge",h("What would make the bad branch survivable?",y("hedge",a.hedge,"A reserve, a contract clause, a fallback, a smaller first version, an exit date.",2),"This is usually a better use of effort than trying to make the good branch more likely."))}`},output(a){const n=a.scenarios.filter(e=>(e.name||"").trim());if(!n.length)return x("The simulation",E("Name at least one future","Expected value and survivability appear here."));const o=n.reduce((e,u)=>e+i(u.prob),0),s=o>0?n.reduce((e,u)=>e+i(u.prob)/o*i(u.value),0):0,l=n.filter(e=>e.survive==="no"),t=n.filter(e=>e.survive==="hard"),d=l.reduce((e,u)=>e+i(u.prob),0),b=n.filter(e=>i(e.prob)>=15&&!(e.signal||"").trim()),k=n.slice().sort((e,u)=>i(e.value)-i(u.value))[0],T=Math.abs(o-100)>1;return x("The simulation",`
      ${S(`
        <thead><tr><th>Future</th><th class="n">Chance</th><th class="n">Value</th><th>Survivable</th></tr></thead>
        <tbody>${n.map(e=>`
          <tr>
            <td>${v(e.name)}</td>
            <td class="n">${o>0?Math.round(i(e.prob)/o*100):0}%</td>
            <td class="n">${g(c(i(e.value)))}</td>
            <td>${e.survive==="no"?'<span class="badge badge-danger">No</span>':e.survive==="hard"?'<span class="badge badge-warning">Barely</span>':'<span class="badge badge-success">Yes</span>'}</td>
          </tr>`).join("")}</tbody>`)}

      <div class="stats" style="margin:var(--s-4) 0">
        <div class="stat"><b>${g(c(s))}</b><span>expected value</span></div>
        <div class="stat"><b>${g(c(i(k?.value)))}</b><span>worst case</span></div>
        <div class="stat"><b>${Math.round(d)}%</b><span>chance of ruin</span></div>
      </div>

      ${l.length?r("Stop here",`${Math.round(d)}% of your probability sits on an outcome you said you could not survive: ${l.map(e=>`<strong>${v(e.name)}</strong>`).join(", ")}. The expected value is irrelevant. You get one run of this. Either hedge that branch until it becomes survivable, shrink the commitment, or do not proceed.`,"danger"):t.length?r("Survivable, barely",`${t.map(e=>`<strong>${v(e.name)}</strong>`).join(", ")} would do serious damage. Before committing, write down exactly what would get you out and how long it would take. If the answer is vague, that is your real risk.`,"warning"):s>0?r("The plan holds","Positive expected value and no ruinous branch. That is the combination worth acting on. Take the smallest version first if one exists — you learn most from the first real contact.","success"):r("Negative on average",`The expected value is ${g(c(s))}. Either the plan is not worth it as constructed, or your value estimates are pessimistic. Check them before abandoning it — people routinely under-price the good branch of things they are nervous about.`,"warning")}

      ${T?`<div style="margin-top:var(--s-3)">${r("Probabilities total "+Math.round(o)+"%",'They have been normalised for the calculation above, but the gap is worth a look. Either a future is missing or one is over-weighted. The commonest error is leaving out "nothing much changes", which is very often the most likely branch of all.',"info")}</div>`:""}

      ${b.length?`<div style="margin-top:var(--s-3)">${r("No early warning",`${b.length} likely future${b.length===1?" has":"s have"} no named signal. Naming what you would notice first is what converts a scenario exercise into something that changes your behaviour — otherwise you find out at full size, late.`,"warning")}</div>`:""}

      ${a.assumption.trim()?`<div style="margin-top:var(--s-3)">${r("The load-bearing assumption",`${v(a.assumption)}<br><br>Test this cheaply and early. Almost all plans fail here rather than in execution.`,"info")}</div>`:`<div style="margin-top:var(--s-3)">${r("No assumption named","You have not identified what the plan rests on. Every plan has one load-bearing assumption; not knowing yours means you cannot test it.","warning")}</div>`}

      ${a.hedge.trim()?`<div style="margin-top:var(--s-3)">${r("Your hedge",v(a.hedge),"success")}</div>`:`<div style="margin-top:var(--s-3)">${r("Nothing hedged","You have not said what would make the bad branch survivable. Making the downside smaller is almost always cheaper and more reliable than making the upside more likely.","warning")}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${v($)}</p>`)},actions:{add:a=>a.scenarios.push({id:p(),name:"",prob:10,value:0,story:"",survive:"yes",signal:""}),del:(a,{i:n})=>a.scenarios.splice(n,1)},summary(a){const n=a.scenarios.filter(t=>(t.name||"").trim()),o=n.reduce((t,d)=>t+i(d.prob),0),s=o>0?n.reduce((t,d)=>t+i(d.prob)/o*i(d.value),0):0,l={yes:"survivable",hard:"serious damage",no:"RUINOUS"};return[N("Scenario Simulator"),`Plan: ${a.plan||"(not stated)"}`,`Load-bearing assumption: ${a.assumption||"(not identified)"}`,`Horizon: ${a.horizon||"(not stated)"}`,w("Futures"),...n.map(t=>[`  ${t.name} — ${o>0?Math.round(i(t.prob)/o*100):0}% · value ${c(i(t.value))} · ${l[t.survive]}`,t.story?`     ${t.story}`:"",`     early signal: ${t.signal||"(none named)"}`].filter(Boolean).join(`
`)),"",`Expected value: ${c(s)}`,n.some(t=>t.survive==="no")?"WARNING: a ruinous branch exists. Expected value does not apply — hedge or do not proceed.":"No ruinous branch recorded.",w("Hedge"),`  ${a.hedge||"(none — make the downside smaller)"}`,"",$].join(`
`)}};export{I as default};
