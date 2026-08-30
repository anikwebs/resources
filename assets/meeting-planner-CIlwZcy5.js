import{stamp as x,n as i,head as g,uid as w,outPanel as $,emptyOut as k,callout as o,text as d,delBtn as M,select as A,number as r,panel as u,field as l,area as f,addBtn as T}from"./kit-DV3I2Ncm.js";import{e as m}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const v="A meeting without a decision to make is a broadcast, and a broadcast should be a document. The test is not whether it was useful — it is whether it needed everyone in the room.",O={id:"meeting-planner",name:"Meeting Planner",blurb:"Establish whether the meeting is needed, then make it short.",icon:"users",accent:"atlas",group:"Communicating",purpose:"Produces an agenda that names a decision, an owner and a cost.",when:["Before booking anything with more than two people","A recurring meeting has lost its purpose","You are attending something and cannot tell why"],reads:v,initial:()=>({title:"",decision:"",mins:30,people:4,rate:0,prep:"",items:[{id:w(),what:"",mins:10,owner:"",kind:"decide"}],outcome:""}),form(e){const a=e.items.map((s,t)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${d(`items.${t}.what`,s.what,"Agenda item")}
        ${e.items.length>1?M("del",t,"Remove item"):"<span></span>"}
      </div>
      <div class="rowitem" style="margin-top:2px;grid-template-columns:150px 90px minmax(0,1fr)">
        <div class="field"><label>Purpose</label>${A(`items.${t}.kind`,s.kind,[{v:"decide",l:"Decide something"},{v:"discuss",l:"Genuinely discuss"},{v:"inform",l:"Inform only"}])}</div>
        <div class="field"><label>Minutes</label>${r(`items.${t}.mins`,s.mins,{min:1,max:240})}</div>
        <div class="field"><label>Who leads it</label>${d(`items.${t}.owner`,s.owner,"A name")}</div>
      </div>`).join("");return`
      ${u("The meeting",`
        ${l("Title",d("title",e.title,"e.g. Q3 launch scope"))}
        ${l("What decision will be made?",f("decision",e.decision,"One sentence. If you cannot write one, that is the finding.",2),"This single field decides whether the meeting should exist.")}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:110px"><label>Minutes</label>${r("mins",e.mins,{min:5,max:480,step:5})}</div>
          <div class="field grow" style="min-width:110px"><label>People</label>${r("people",e.people,{min:1,max:200})}</div>
          <div class="field grow" style="min-width:130px"><label>Avg hourly cost</label>${r("rate",e.rate,{min:0,max:1e4,ph:"Optional"})}</div>
        </div>`)}
      ${u("Agenda",a,T("add","Add item"))}
      ${u("Around the meeting",`
        ${l("What must people read or do beforehand?",f("prep",e.prep,"Sending the document in the invitation is the single highest-leverage change you can make.",2))}
        ${l("How will the outcome be recorded and circulated?",d("outcome",e.outcome,"e.g. Decisions and owners in the thread within an hour"))}`)}`},output(e){if(!e.title.trim()&&!e.decision.trim())return $("The agenda",k("Start with the decision","If there is no decision, there is probably no meeting."));const a=e.items.filter(n=>(n.what||"").trim()),s=a.reduce((n,p)=>n+i(p.mins),0),t=i(e.mins)*i(e.people),h=t/60*i(e.rate),b=a.length>0&&a.every(n=>n.kind==="inform"),c=a.filter(n=>!(n.owner||"").trim()),y=s>i(e.mins);return $("The agenda",`
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${i(e.mins)}m</b><span>booked</span></div>
        <div class="stat"><b>${Math.round(t/60)}h</b><span>person-time</span></div>
        ${i(e.rate)>0?`<div class="stat"><b>${Math.round(h)}</b><span>estimated cost</span></div>`:""}
      </div>

      ${e.decision.trim()?o("The decision",m(e.decision),"success"):o("No decision named","You have not written down what will be decided. That is the answer: cancel it and send a written update instead. Every recurring meeting that nobody can justify started exactly here.","danger")}

      ${b?`<div style="margin-top:var(--s-3)">${o("This is a broadcast","Every item is information only. Information does not need a meeting — it needs a well-written message that people can read at their own speed and search later.","danger")}</div>`:""}

      ${a.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Running order</p>
        ${a.map((n,p)=>`
          <div class="rowitem" style="grid-template-columns:34px minmax(0,1fr) auto;margin-top:6px">
            <span class="t-num faint">${p+1}</span>
            <div>
              <div class="t-small" style="font-weight:600">${m(n.what)}</div>
              <div class="t-meta faint">${n.owner?m(n.owner):"no owner"} · ${n.kind==="decide"?"decision":n.kind==="discuss"?"discussion":"information"}</div>
            </div>
            <span class="badge badge-neutral">${i(n.mins)}m</span>
          </div>`).join("")}</div>`:""}

      ${y?`<div style="margin-top:var(--s-3)">${o("The agenda does not fit",`Your items total ${s} minutes in a ${i(e.mins)}-minute meeting. Something will be rushed — and it will be the last item, which is usually the one that mattered. Cut an item or extend the booking now.`,"warning")}</div>`:""}

      ${c.length?`<div style="margin-top:var(--s-3)">${o("Unowned items",`${c.length} item${c.length===1?" has":"s have"} no named lead. Unowned agenda items become the meeting drifting. Put a name against each one, in the invitation.`,"warning")}</div>`:""}

      ${e.prep.trim()?"":`<div style="margin-top:var(--s-3)">${o("No pre-reading","Without material sent in advance, the first third of the meeting will be spent getting everyone to the same starting point — at the cost of everybody in the room.","info")}</div>`}

      ${t>=480?`<div style="margin-top:var(--s-3)">${o("This is a working day",`${Math.round(t/60)} hours of collective time. Worth asking who genuinely needs to attend versus who needs the notes. Inviting someone is not a courtesy — it is a bill.`,"warning")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${m(v)}</p>`)},actions:{add:e=>e.items.push({id:w(),what:"",mins:10,owner:"",kind:"decide"}),del:(e,{i:a})=>e.items.splice(a,1)},summary(e){const a=e.items.filter(t=>(t.what||"").trim()),s={decide:"DECIDE",discuss:"DISCUSS",inform:"INFORM"};return[x("Meeting Planner"),`Meeting: ${e.title||"(untitled)"}`,`Length: ${i(e.mins)} minutes · ${i(e.people)} people · ${Math.round(i(e.mins)*i(e.people)/60)}h of person-time`,"",`DECISION TO BE MADE: ${e.decision||"(none — cancel and send a written update)"}`,g("Agenda"),...a.length?a.map((t,h)=>`  ${h+1}. [${s[t.kind]}] ${t.what} — ${i(t.mins)}m — ${t.owner||"no owner"}`):["  (none)"],g("Before"),`  ${e.prep||"(no pre-reading — send the document with the invitation)"}`,g("After"),`  ${e.outcome||"(no record planned)"}`,"",v].join(`
`)}};export{O as default};
