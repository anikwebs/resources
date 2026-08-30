import{stamp as g,head as m,n as h,uid as u,outPanel as w,emptyOut as $,meter as b,callout as d,text as i,delBtn as v,panel as r,field as s,area as y,number as f,addBtn as k}from"./kit-DV3I2Ncm.js";import{e as n}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const c="A goal with no measure is a wish, and a goal with no weekly action is a wish with a deadline. The milestone dates matter far less than the recurring commitment.",M={id:"goal-planner",name:"Goal Planner",blurb:"Turn an intention into a measure, milestones and a weekly action.",icon:"target",accent:"forest",group:"Building",purpose:"Forces a vague ambition to declare what it would take and what it would cost.",when:["You have wanted something for months and nothing has moved","You can name the goal but not the next action","You need to decide whether you actually want it"],reads:c,initial:()=>({goal:"",why:"",measure:"",from:"",to:"",by:"",weekly:"",hours:3,obstacle:"",counter:"",milestones:[{id:u(),name:"",when:"",done:!1}]}),form(e){const t=e.milestones.map((a,l)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 150px 34px">
        ${i(`milestones.${l}.name`,a.name,"A visible checkpoint")}
        ${i(`milestones.${l}.when`,a.when,"By when")}
        ${e.milestones.length>1?v("del",l,"Remove milestone"):"<span></span>"}
      </div>`).join("");return`
      ${r("The goal",`
        ${s("What do you want?",i("goal",e.goal,"e.g. Be able to run a client workshop alone"))}
        ${s("Why does it matter — honestly?",y("why",e.why,'If the honest answer is "it sounds impressive", write that. It is useful information.',2))}`)}
      ${r("How you will measure it",`
        ${s("The measure",i("measure",e.measure,"e.g. Workshops run solo"))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:110px"><label>From</label>${i("from",e.from,"Today")}</div>
          <div class="field grow" style="min-width:110px"><label>To</label>${i("to",e.to,"Target")}</div>
          <div class="field grow" style="min-width:110px"><label>By when</label>${i("by",e.by,"Date")}</div>
        </div>`)}
      ${r("The weekly commitment",`
        ${s("What will you do every week, regardless of motivation?",i("weekly",e.weekly,"e.g. Two hours rehearsing one section with a colleague"))}
        ${s("Hours per week",f("hours",e.hours,{min:0,max:60,step:.5}))}`)}
      ${r("Milestones",t,k("add","Add milestone"))}
      ${r("What will stop you",`
        ${s("The most likely obstacle",i("obstacle",e.obstacle,"Be specific — the real one, not a noble one"))}
        ${s("What you will do when it happens",y("counter",e.counter,"A pre-decided response. Deciding in the moment is how goals die.",2))}`)}`},output(e){if(!e.goal.trim())return w("The plan",$("Name what you want","The plan assembles itself as you answer."));const t=[];e.measure.trim()||t.push("a measure"),e.weekly.trim()||t.push("a weekly action"),e.by.trim()||t.push("a date"),e.counter.trim()||t.push("a plan for the obstacle");const a=e.milestones.filter(o=>(o.name||"").trim()),l=a.filter(o=>o.done).length,p=Math.round((4-t.length)/4*100);return w("The plan",`
      <p class="eyebrow">Goal</p>
      <p class="t-subtitle" style="margin-bottom:var(--s-4)">${n(e.goal)}</p>

      <div class="field" style="margin-bottom:var(--s-4)">
        <label>Plan completeness — ${p}%</label>
        ${b(p,!0)}
      </div>

      ${e.measure.trim()?`<div class="promise" style="margin-bottom:var(--s-4)">
        <div><span class="lab">Measure</span><span class="v">${n(e.measure)}</span></div>
        <div><span class="lab">From → to</span><span class="v">${n(e.from||"?")} → ${n(e.to||"?")}</span></div>
        <div><span class="lab">By</span><span class="v">${n(e.by||"no date")}</span></div>
      </div>`:""}

      ${e.weekly.trim()?d("The only line that matters",`Every week: <strong>${n(e.weekly)}</strong> (${h(e.hours)}h). Milestones are scenery. This recurring commitment is the goal. Put it in the calendar as a repeating appointment with a start time.`,"success"):""}

      ${a.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Milestones — ${l}/${a.length}</p>
        ${a.map((o,T)=>`
          <label class="check${o.done?" done":""}" style="margin-top:6px">
            <input type="checkbox" data-bind="milestones.${e.milestones.indexOf(o)}.done"${o.done?" checked":""}>
            <span class="check-t">${n(o.name)}${o.when?` <span class="t-meta faint">— ${n(o.when)}</span>`:""}</span>
          </label>`).join("")}</div>`:""}

      ${e.obstacle.trim()&&e.counter.trim()?`<div style="margin-top:var(--s-4)">
        ${d("When it goes wrong",`<strong>${n(e.obstacle)}</strong> will happen. Your pre-decided response: ${n(e.counter)}<br><br>Deciding this now is worth more than any amount of motivation later.`,"info")}</div>`:""}

      ${t.length?`<div style="margin-top:var(--s-3)">${d("Still missing",`This is not yet a plan — it is missing ${t.join(", ")}. ${t.includes("a weekly action")?"The weekly action is the one that actually determines whether this happens.":""}`,t.length>2?"danger":"warning")}</div>`:""}

      ${h(e.hours)>15?`<div style="margin-top:var(--s-3)">${d("Check this against your week",`${h(e.hours)} hours a week is a second job. Look at your actual calendar and find them before you commit, or reduce the goal now rather than abandoning it in week three.`,"warning")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${n(c)}</p>`)},actions:{add:e=>e.milestones.push({id:u(),name:"",when:"",done:!1}),del:(e,{i:t})=>e.milestones.splice(t,1)},summary(e){const t=e.milestones.filter(a=>(a.name||"").trim());return[g("Goal Planner"),`Goal: ${e.goal||"(not stated)"}`,`Why: ${e.why||"(not stated)"}`,m("Measure"),`  ${e.measure||"(none)"}: ${e.from||"?"} → ${e.to||"?"} by ${e.by||"no date"}`,m("Weekly commitment"),`  ${e.weekly||"(none — this is the important one)"} (${h(e.hours)}h/week)`,m("Milestones"),...t.length?t.map(a=>`  [${a.done?"x":" "}] ${a.name}${a.when?` — ${a.when}`:""}`):["  (none)"],m("Obstacle"),`  Likely: ${e.obstacle||"(not named)"}`,`  Response: ${e.counter||"(not decided)"}`,"",c].join(`
`)}};export{M as default};
