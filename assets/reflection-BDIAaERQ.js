import{stamp as b,n as i,head as c,uid as p,outPanel as $,emptyOut as k,callout as s,panel as g,field as l,text as v,range as w,area as m,delBtn as f}from"./kit-B_He1EBw.js";import{e as o}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const y='Reflection is only useful when it changes one behaviour. Reviewing a week and concluding "be more focused" is not a finding — it is a mood. The test is whether next week looks different.',W={id:"reflection",name:"Reflection Tool",blurb:"Review a period honestly and leave with one change.",icon:"pen",accent:"council",group:"Building",purpose:"Turns a week or a project into one specific, testable change.",when:["End of a week, a month, or a project","Something went wrong and you want the lesson, not the guilt","Something went right and you want to know why"],reads:y,initial:()=>({period:"",energy:3,control:3,progress:3,worked:[{id:p(),t:""}],didnt:[{id:p(),t:""}],surprise:"",avoided:"",pattern:"",change:"",keep:"",entries:[]}),form(e){const r=(n,t,d)=>e[n].map((u,h)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${h?"var(--s-2)":"0"}">
        ${v(`${n}.${h}.t`,u.t,t)}
        ${e[n].length>1?f(d,h,"Remove"):"<span></span>"}
      </div>`).join("");return`
      ${g("The period",`
        ${l("What are you reviewing?",v("period",e.period,"e.g. This week, or: the migration project"))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:180px"><label>Energy <span class="t-num" data-mirror="energy">${e.energy}</span>/5</label>${w("energy",e.energy,{min:1,max:5})}</div>
          <div class="field grow" style="min-width:180px"><label>Sense of control <span class="t-num" data-mirror="control">${e.control}</span>/5</label>${w("control",e.control,{min:1,max:5})}</div>
          <div class="field grow" style="min-width:180px"><label>Real progress <span class="t-num" data-mirror="progress">${e.progress}</span>/5</label>${w("progress",e.progress,{min:1,max:5})}</div>
        </div>`)}
      ${g("What happened",`
        <p class="t-caption faint" style="margin-bottom:var(--s-3)">Specific events, not judgements.</p>
        <p class="eyebrow">Worked</p>${r("worked","Something that went well — and be concrete","delW")}
        <div style="height:var(--s-4)"></div>
        <p class="eyebrow">Did not work</p>${r("didnt","Something that went badly","delD")}`)}
      ${g("The harder questions",`
        ${l("What surprised you?",m("surprise",e.surprise,"Surprise marks the edge of what you understood. It is the most informative thing here.",2))}
        ${l("What did you avoid?",m("avoided",e.avoided,"The thing you moved down the list every day. Name it plainly.",2))}
        ${l("Have you seen this pattern before?",m("pattern",e.pattern,"If this is the third time, the problem is structural rather than situational.",2))}`)}
      ${g("The output",`
        ${l("One thing you will do differently",m("change",e.change,'Specific and observable. "Send the agenda the day before" — not "communicate better".',2))}
        ${l("One thing you will deliberately keep",v("keep",e.keep,"Protecting what works is half of improvement"))}
        <div class="row" style="margin-top:var(--s-4)">
          <button class="btn btn-soft btn-sm" data-act="log">Save this review to the log</button>
        </div>`)}
      ${e.entries.length?g(`Past reviews (${e.entries.length})`,e.entries.slice().reverse().map((n,t)=>{const d=e.entries.length-1-t;return`
        <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px;margin-top:${t?"var(--s-2)":"0"}">
          <div>
            <div class="t-meta faint">${o(n.date)}${n.period?" · "+o(n.period):""}</div>
            <div class="t-small">${o(n.change||"(no change recorded)")}</div>
          </div>
          ${f("delEntry",d,"Delete this review")}
        </div>`}).join("")):""}`},output(e){const r=e.worked.filter(a=>(a.t||"").trim()),n=e.didnt.filter(a=>(a.t||"").trim());if(!r.length&&!n.length&&!e.change.trim())return $("The review",k("Add one thing that worked","The read-out appears as you fill it in."));const t=(i(e.energy)+i(e.control)+i(e.progress))/3,d=i(e.control)<=2,u=i(e.energy)<=2,h=i(e.progress)>=4&&i(e.energy)<=2;return $("The review",`
      ${e.period.trim()?`<p class="eyebrow">${o(e.period)}</p>`:""}

      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${i(e.energy)}/5</b><span>energy</span></div>
        <div class="stat"><b>${i(e.control)}/5</b><span>control</span></div>
        <div class="stat"><b>${i(e.progress)}/5</b><span>progress</span></div>
      </div>

      ${h?s("Progress at a cost","You made real progress with very little left in the tank. That combination is only sustainable briefly — it is how good periods turn into bad months. Decide now what you will drop next week, while you still have the choice.","warning"):d&&u?s("Low on both","Low energy and low control together usually means you are absorbing other people's priorities. The recovery move is not working harder — it is reclaiming one recurring block of time and defending it.","warning"):d?s("Little control","Progress can survive low control for a while, but it grinds. Find the one commitment you could renegotiate, and renegotiate it this week rather than enduring another month.","info"):t>=4?s("A good period",'Worth knowing exactly why. Look at what you listed under "worked" — the point of a good week is to identify what to repeat deliberately rather than by luck.',"success"):s("A mixed period","Most periods are. The useful output is not a score — it is the single change below.","info")}

      ${r.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Worked</p>
        <ul class="goodlist">${r.map(a=>`<li>${o(a.t)}</li>`).join("")}</ul></div>`:""}

      ${n.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Did not work</p>
        <ul class="badlist">${n.map(a=>`<li>${o(a.t)}</li>`).join("")}</ul></div>`:""}

      ${e.avoided.trim()?`<div style="margin-top:var(--s-3)">${s("What you avoided",`${o(e.avoided)}<br><br>This is usually the highest-value item on the list. Avoidance is rarely about difficulty — it is about an unmade decision or an unhad conversation. Which is it?`,"warning")}</div>`:""}

      ${e.surprise.trim()?`<div style="margin-top:var(--s-3)">${s("What surprised you",`${o(e.surprise)}<br><br>Surprise means your model of the situation was wrong somewhere. That is worth more than any of the things that went as expected.`,"info")}</div>`:""}

      ${e.pattern.trim()?`<div style="margin-top:var(--s-3)">${s("The pattern",`${o(e.pattern)}<br><br>If it has happened before, stop treating it as bad luck. Recurring problems need a structural change — a different commitment, a different boundary, a different role.`,"danger")}</div>`:""}

      ${e.change.trim()?`<div style="margin-top:var(--s-4)">${s("The one change",`${o(e.change)}${e.keep.trim()?`<br><br>And deliberately keeping: ${o(e.keep)}.`:""}`,"success")}</div>`:`<div style="margin-top:var(--s-4)">${s("No change decided","Without one specific, observable change, this review has cost you time and altered nothing. Pick the smallest change that the worst item above would have prevented.","danger")}</div>`}

      ${e.entries.length>=2?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Across ${e.entries.length} reviews</p>
        <p class="t-small muted">Read your last few changes below. If you have written the same one more than twice, the change is not working — it is too large, too vague, or it is not actually the problem.</p>
        <ul class="marklist" style="margin-top:var(--s-2)">${e.entries.slice(-4).reverse().map(a=>`<li><span class="t-meta faint">${o(a.date)}</span> — ${o(a.change||"no change recorded")}</li>`).join("")}</ul></div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${o(y)}</p>`)},actions:{delW:(e,{i:r})=>e.worked.splice(r,1),delD:(e,{i:r})=>e.didnt.splice(r,1),log:e=>{!e.change.trim()&&!e.period.trim()||(e.entries.push({id:p(),date:new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),period:e.period,change:e.change,energy:i(e.energy),control:i(e.control),progress:i(e.progress)}),e.entries.length>40&&e.entries.shift(),e.worked=[{id:p(),t:""}],e.didnt=[{id:p(),t:""}],e.surprise="",e.avoided="",e.pattern="",e.change="",e.keep="")},delEntry:(e,{i:r})=>e.entries.splice(r,1)},summary(e){const r=e.worked.filter(t=>(t.t||"").trim()),n=e.didnt.filter(t=>(t.t||"").trim());return[b("Reflection"),`Period: ${e.period||"(not stated)"}`,`Energy ${i(e.energy)}/5 · Control ${i(e.control)}/5 · Progress ${i(e.progress)}/5`,c("Worked"),...r.length?r.map(t=>"  + "+t.t):["  (none listed)"],c("Did not work"),...n.length?n.map(t=>"  - "+t.t):["  (none listed)"],c("Harder questions"),`  Surprised me: ${e.surprise||"(none)"}`,`  I avoided:    ${e.avoided||"(none)"}`,`  Pattern:      ${e.pattern||"(none)"}`,c("Output"),`  Change: ${e.change||"(none decided — do this)"}`,`  Keep:   ${e.keep||"(none)"}`,...e.entries.length?[c(`Past reviews (${e.entries.length})`),...e.entries.slice(-10).map(t=>`  ${t.date} — ${t.change||"no change recorded"}`)]:[],"",y].join(`
`)}};export{W as default};
