import{stamp as T,head as h,n as i,r1 as w,uid as u,outPanel as y,emptyOut as A,callout as l,meter as R,text as p,select as b,delBtn as $,panel as r,field as d,area as k,number as f,addBtn as x}from"./kit-DV3I2Ncm.js";import{e as c}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const v="You do not learn a skill by consuming material about it. You learn it by producing something and having it corrected. If your plan has no output and no feedback, it is a reading list.",B={id:"learning-planner",name:"Learning Planner",blurb:"Plan a skill around an output, not a syllabus.",icon:"brain",accent:"council",group:"Building",purpose:'Turns "I want to learn X" into a producible artefact and a feedback loop.',when:["You have bookmarked more than you have practised","You finished a course and cannot do the thing","You need the skill for a real deadline"],reads:v,initial:()=>({skill:"",why:"",level:"none",output:"",deadline:"",hours:4,weeks:8,feedback:"",resources:[{id:u(),what:"",kind:"doing"}],checkpoints:[{id:u(),what:"",done:!1}]}),form(e){const a=e.resources.map((o,t)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 160px 34px">
        ${p(`resources.${t}.what`,o.what,"Book, course, project, person, dataset")}
        <div class="field"><label class="t-meta faint">Type</label>${b(`resources.${t}.kind`,o.kind,[{v:"doing",l:"Doing"},{v:"reading",l:"Reading or watching"},{v:"person",l:"A person"}])}</div>
        ${e.resources.length>1?$("delRes",t,"Remove"):"<span></span>"}
      </div>`).join(""),s=e.checkpoints.map((o,t)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${p(`checkpoints.${t}.what`,o.what,"Something you will be able to do")}
        ${e.checkpoints.length>1?$("delCp",t,"Remove"):"<span></span>"}
      </div>`).join("");return`
      ${r("The skill",`
        ${d("What are you learning?",p("skill",e.skill,"e.g. Writing SQL well enough to answer my own questions"))}
        ${d("What will you use it for, specifically?",k("why",e.why,'A real task, ideally one with a date. "General interest" is a valid answer but predicts a slower finish.',2))}
        ${d("Where are you now?",b("level",e.level,[{v:"none",l:"Never touched it"},{v:"some",l:"Can follow along but not start alone"},{v:"working",l:"Can do the basics unaided"},{v:"good",l:"Competent, want depth"}]))}`)}
      ${r("The output",`
        ${d("What will you have produced?",k("output",e.output,"A thing that exists: a working report, a deployed page, a delivered talk, a passed assessment.",2),"This is the single most important field. A skill with no artefact cannot be assessed — by you or anyone else.")}
        ${d("By when?",p("deadline",e.deadline,"A date"))}`)}
      ${r("Time",`
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:120px"><label>Hours per week</label>${f("hours",e.hours,{min:.5,max:60,step:.5})}</div>
          <div class="field grow" style="min-width:120px"><label>Number of weeks</label>${f("weeks",e.weeks,{min:1,max:104})}</div>
        </div>`)}
      ${r("Feedback",d("Who or what tells you when you are wrong?",k("feedback",e.feedback,"A person who will review it, a test suite, a marker, a real user, a public deadline.",2),"Without correction you practise your mistakes until they are permanent."))}
      ${r("Materials and practice",a,x("addRes","Add"))}
      ${r("Checkpoints",s,x("addCp","Add checkpoint"))}`},output(e){if(!e.skill.trim())return y("The plan",A("Name the skill","The plan and its weak points appear here."));const a=e.resources.filter(n=>(n.what||"").trim()),s=a.filter(n=>n.kind==="doing").length,o=a.filter(n=>n.kind==="reading").length,t=e.checkpoints.filter(n=>(n.what||"").trim()),C=t.filter(n=>n.done).length,m=i(e.hours)*i(e.weeks),g=a.length?Math.round(s/a.length*100):0;return y("The plan",`
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${w(m)}h</b><span>total</span></div>
        <div class="stat"><b>${i(e.hours)}h</b><span>per week</span></div>
        <div class="stat"><b>${g}%</b><span>doing, not reading</span></div>
      </div>

      ${e.output.trim()?l("What you will have made",`${c(e.output)}${e.deadline.trim()?` — by ${c(e.deadline)}`:""}<br><br>Work backwards from this. Anything that does not move you toward it is optional, however interesting it is.`,"success"):l("No output defined","You have not said what you will have produced. This is how learning becomes indefinite: with no artefact there is no finish line, no evidence, and no honest way to tell whether you can do it.","danger")}

      ${a.length?`<div style="margin-top:var(--s-4)">
        <div class="field"><label>Balance of doing against consuming</label>${R(g,!0)}</div>
        ${g<50?`<p class="t-small muted" style="margin-top:var(--s-2)">${o} of your ${a.length} items are reading or watching. Flip this: material should be the thing you reach for when you get stuck while making something, not the main activity.</p>`:""}
      </div>`:""}

      ${e.feedback.trim()?`<div style="margin-top:var(--s-3)">${l("Correction",c(e.feedback),"info")}</div>`:`<div style="margin-top:var(--s-3)">${l("No feedback loop","Nobody and nothing will tell you when you are wrong. This is the most common reason people put months into a skill and stay mediocre — errors go uncorrected and become habits. Find one person who will look at the output, or a test that can fail.","danger")}</div>`}

      ${t.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Checkpoints — ${C}/${t.length}</p>
        ${t.map(n=>`
          <label class="check${n.done?" done":""}" style="margin-top:6px">
            <input type="checkbox" data-bind="checkpoints.${e.checkpoints.indexOf(n)}.done"${n.done?" checked":""}>
            <span class="check-t">${c(n.what)}</span>
          </label>`).join("")}</div>`:""}

      ${m<20&&e.level==="none"?`<div style="margin-top:var(--s-3)">${l("Probably not enough time",`${w(m)} hours from a standing start will give you familiarity, not capability. Either extend the plan or narrow the skill until it fits — a narrow skill you actually have beats a broad one you nearly have.`,"warning")}</div>`:""}

      ${i(e.hours)>=20?`<div style="margin-top:var(--s-3)">${l("Check this is real",`${i(e.hours)} hours a week alongside everything else is unusual to sustain. Plans fail at week three on this exact number. Halve it and double the weeks.`,"warning")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${c(v)}</p>`)},actions:{addRes:e=>e.resources.push({id:u(),what:"",kind:"doing"}),delRes:(e,{i:a})=>e.resources.splice(a,1),addCp:e=>e.checkpoints.push({id:u(),what:"",done:!1}),delCp:(e,{i:a})=>e.checkpoints.splice(a,1)},summary(e){const a=e.resources.filter(t=>(t.what||"").trim()),s=e.checkpoints.filter(t=>(t.what||"").trim()),o={doing:"DOING",reading:"READ",person:"PERSON"};return[T("Learning Planner"),`Skill: ${e.skill||"(not stated)"}`,`For: ${e.why||"(not stated)"}`,`Starting level: ${e.level}`,h("Output"),`  ${e.output||"(none defined — define this first)"}`,`  By: ${e.deadline||"no date"}`,h("Time"),`  ${i(e.hours)}h/week × ${i(e.weeks)} weeks = ${w(i(e.hours)*i(e.weeks))}h`,h("Feedback"),`  ${e.feedback||"(none — this is the most important gap)"}`,h("Materials and practice"),...a.length?a.map(t=>`  [${o[t.kind]}] ${t.what}`):["  (none)"],h("Checkpoints"),...s.length?s.map(t=>`  [${t.done?"x":" "}] ${t.what}`):["  (none)"],"",v].join(`
`)}};export{B as default};
