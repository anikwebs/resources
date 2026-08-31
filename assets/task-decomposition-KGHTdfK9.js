import{n as a,stamp as $,head as y,r1 as d,uid as m,outPanel as u,emptyOut as f,callout as r,text as p,number as w,delBtn as k,select as x,field as c,panel as v,area as D,addBtn as T}from"./kit-B_He1EBw.js";import{I as A,e as l}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const b="A step you cannot start tomorrow morning is not a step — it is a heading. Keep splitting until every line names a physical first action.",Y={id:"task-decomposition",name:"Task Decomposition",blurb:"Break something too big to start into steps you can actually begin.",icon:"layers",accent:"forest",group:"Working",purpose:"Converts a vague, heavy project into a sequence with a real first move.",when:["You have avoided something for more than a week",'You do not know what "starting" would even look like',"A deadline exists but no plan does"],reads:b,initial:()=>({goal:"",done:"",deadline:"",steps:[{id:m(),name:"",hours:1,blocked:"no",by:""}]}),form(o){const n=o.steps.map((s,e)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 96px 34px">
        ${p(`steps.${e}.name`,s.name,"A concrete action — starts with a verb")}
        <div class="field"><label class="t-meta faint">Hours</label>
          ${w(`steps.${e}.hours`,s.hours,{min:0,max:200,step:.5})}</div>
        ${o.steps.length>1?k("del",e,"Remove step"):"<span></span>"}
      </div>
      <div class="rowitem" style="margin-top:2px;grid-template-columns:200px minmax(0,1fr)">
        <div class="field"><label>Waiting on anyone?</label>
          ${x(`steps.${e}.blocked`,s.blocked,[{v:"no",l:"No — I can do it alone"},{v:"yes",l:"Yes — blocked on someone"}])}</div>
        ${s.blocked==="yes"?c("Who, and what do you need from them?",p(`steps.${e}.by`,s.by,"e.g. Priya — sign-off on the budget line")):"<span></span>"}
      </div>`).join("");return`
      ${v("The thing you are avoiding",`
        ${c("What is it?",p("goal",o.goal,"e.g. Rewrite the onboarding documentation"))}
        ${c("How will you know it is finished?",D("done",o.done,'Describe the finished state in one or two sentences. Not "make progress" — finished.',3),"If you cannot describe done, you cannot finish it.")}
        ${c("Deadline, if there is a real one",p("deadline",o.deadline,"e.g. 14 March, or none"))}`)}
      ${v("The steps",n,T("add","Add step"))}`},output(o){const n=o.steps.filter(t=>(t.name||"").trim());if(!n.length)return u("The plan",f("Add your first step","Then keep splitting anything longer than about three hours."));const s=n.reduce((t,g)=>t+a(g.hours),0),e=n.filter(t=>t.blocked==="yes"),i=n.filter(t=>a(t.hours)>3),h=n[0];return u("The plan",`
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${n.length}</b><span>steps</span></div>
        <div class="stat"><b>${d(s)}h</b><span>estimated</span></div>
        <div class="stat"><b>${e.length}</b><span>blocked</span></div>
      </div>

      <div class="flow">
        ${n.map((t,g)=>`
          <div class="flow-step${t.blocked==="yes"?"":" flow-you"}">
            <div class="flow-rail"><span class="flow-dot">${t.blocked==="yes"?A.clock:String(g+1)}</span><span class="flow-line"></span></div>
            <div>
              <div class="flow-t">${l(t.name)}
                <span class="badge badge-neutral">${d(a(t.hours))}h</span>
                ${t.blocked==="yes"?'<span class="badge badge-warning">Blocked</span>':""}
                ${a(t.hours)>3?'<span class="badge badge-danger">Too big</span>':""}</div>
              ${t.blocked==="yes"&&t.by?`<div class="flow-d">Waiting on ${l(t.by)}</div>`:""}
            </div>
          </div>`).join("")}
      </div>

      <div style="margin-top:var(--s-4)">
        ${r("Do this now",`Your first physical action is: <strong>${l(h.name)}</strong>${a(h.hours)>3?" — but it is still too big. Split it before you touch anything else.":". Put it in tomorrow's calendar with a start time, not a due date."}`,a(h.hours)>3?"warning":"success")}
      </div>

      ${i.length?`<div style="margin-top:var(--s-3)">${r("Still headings, not steps",`${i.length} step${i.length===1?" is":"s are"} over three hours: ${i.map(t=>`<strong>${l(t.name)}</strong>`).join(", ")}. Anything that size hides a decision you have not made yet. Split it.`,"warning")}</div>`:""}

      ${e.length?`<div style="margin-top:var(--s-3)">${r("Unblock first",`You are waiting on ${e.length} thing${e.length===1?"":"s"}. Send those requests today, before you start the work you can control — otherwise the waiting happens at the end, when there is no slack left.`,"info")}</div>`:""}

      ${o.done.trim()?"":`<div style="margin-top:var(--s-3)">${r("Missing","You have not described what finished looks like. Without it, this list will expand for as long as you keep working on it.","danger")}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${l(b)}</p>`)},actions:{add:o=>o.steps.push({id:m(),name:"",hours:1,blocked:"no",by:""}),del:(o,{i:n})=>o.steps.splice(n,1)},summary(o){const n=o.steps.filter(e=>(e.name||"").trim()),s=n.reduce((e,i)=>e+a(i.hours),0);return[$("Task Decomposition"),`Goal: ${o.goal||"(not stated)"}`,`Finished means: ${o.done||"(not defined — define this)"}`,`Deadline: ${o.deadline||"none"}`,y(`Steps (${n.length}, ~${d(s)}h)`),...n.map((e,i)=>`  ${i+1}. ${e.name} — ${d(a(e.hours))}h${e.blocked==="yes"?` [BLOCKED: ${e.by||"someone"}]`:""}${a(e.hours)>3?" [TOO BIG — split]":""}`),"",n.length?`First action: ${n[0].name}`:"","","A step you cannot start tomorrow morning is a heading, not a step."].join(`
`)}};export{Y as default};
