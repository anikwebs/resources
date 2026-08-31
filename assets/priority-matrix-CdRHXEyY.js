import{stamp as w,uid as h,outPanel as m,emptyOut as $,callout as l,text as b,delBtn as q,select as u,panel as g,addBtn as D,head as x}from"./kit-B_He1EBw.js";import{e as d}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const p='If almost everything lands in "Do first", you have not prioritised — you have relabelled. Urgency is usually inherited from whoever asked most recently. Importance is yours to define.',S={id:"priority-matrix",name:"Priority Matrix",blurb:"Sort what you are carrying by importance against urgency.",icon:"grid",accent:"clay",group:"Working",purpose:"Separates the work that matters from the work that is merely loud.",when:["Your list is long enough that you have stopped reading it","Everything feels urgent and nothing feels finished","You need to justify what you are not doing"],reads:p,initial:()=>({items:[{id:h(),name:"",imp:"high",urg:"high"}]}),form(a){const n=a.items.map((e,i)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${b(`items.${i}.name`,e.name,"What is the task or commitment?")}
        ${a.items.length>1?q("del",i,"Remove item"):"<span></span>"}
      </div>
      <div class="rowitem" style="margin-top:2px;grid-template-columns:1fr 1fr">
        <div class="field"><label>Importance — does it move something that matters?</label>
          ${u(`items.${i}.imp`,e.imp,[{v:"high",l:"High — real consequence if never done"},{v:"low",l:"Low — nothing changes if it never happens"}])}</div>
        <div class="field"><label>Urgency — is the deadline real?</label>
          ${u(`items.${i}.urg`,e.urg,[{v:"high",l:"High — a genuine, dated deadline"},{v:"low",l:"Low — the date is soft or invented"}])}</div>
      </div>`).join("");return`
      ${g("What you are carrying",n,D("add","Add item"))}
      ${g("Before you sort",`
        <p class="t-small muted">Two questions decide each item. <strong>Importance</strong>: if this is never done, what
        actually happens? <strong>Urgency</strong>: is there a dated consequence, or does it just feel pressing because
        someone asked recently? Most over-full lists are a failure of the second question.</p>`)}`},output(a){const n=a.items.filter(t=>(t.name||"").trim());if(!n.length)return m("The four quadrants",$("Add something to sort","Each item appears in a quadrant as you classify it."));const e={do:n.filter(t=>t.imp==="high"&&t.urg==="high"),plan:n.filter(t=>t.imp==="high"&&t.urg==="low"),deleg:n.filter(t=>t.imp==="low"&&t.urg==="high"),drop:n.filter(t=>t.imp==="low"&&t.urg==="low")},i=(t,c,f,y)=>`
      <div class="quad-cell ${y}">
        <div class="h">${d(c)}</div>
        <div class="sub">${d(f)}</div>
        ${e[t].length?`<ul>${e[t].map(v=>`<li>${d(v.name)}</li>`).join("")}</ul>`:'<p class="t-caption faint">Nothing here.</p>'}
      </div>`,r=n.length,o=Math.round(e.do.length/r*100),s=o>=60?l("This is not a priority list",`${o}% of your items are "Do first". A list where everything is critical gives you no information. Go back and be ruthless about which deadlines are genuinely dated and which ones you inherited from somebody else's anxiety.`,"danger"):e.plan.length===0?l("Nothing important and non-urgent",`The "Schedule" quadrant is empty. That is the quadrant where careers and capability are actually built. If it is permanently empty, you are living entirely inside other people's deadlines.`,"warning"):e.drop.length?l("Say it out loud",`You have ${e.drop.length} item${e.drop.length===1?"":"s"} that is neither important nor urgent. Deleting it silently is fine. What is not fine is leaving it on the list to generate guilt for another month.`,"info"):l("Reading this","The second quadrant — important, not urgent — is the one to defend with calendar time. It never defends itself.","success");return m("The four quadrants",`
      <div class="quad">
        ${i("do","Do first","Important and urgent","quad-do")}
        ${i("plan","Schedule","Important, not urgent","quad-plan")}
        ${i("deleg","Delegate or shrink","Urgent, not important","quad-deleg")}
        ${i("drop","Drop","Neither","quad-drop")}
      </div>
      <div style="margin-top:var(--s-4)">${s}</div>
      <div class="hr"></div>
      <p class="t-caption faint">${d(p)}</p>`)},actions:{add:a=>a.items.push({id:h(),name:"",imp:"high",urg:"high"}),del:(a,{i:n})=>a.items.splice(n,1)},summary(a){const n=a.items.filter(r=>(r.name||"").trim()),e=(r,o)=>n.filter(s=>s.imp===r&&s.urg===o).map(s=>"  - "+s.name),i=(r,o)=>[x(r),...o.length?o:["  (none)"]];return[w("Priority Matrix"),...i("Do first — important and urgent",e("high","high")),...i("Schedule — important, not urgent",e("high","low")),...i("Delegate or shrink — urgent, not important",e("low","high")),...i("Drop — neither",e("low","low")),"","The second quadrant is where capability is built. Defend it with calendar time."].join(`
`)}};export{S as default};
