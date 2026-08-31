import{n as d,stamp as S,head as w,uid as y,outPanel as f,emptyOut as W,callout as o,tblWrap as z,delBtn as E,field as c,text as u,select as $,panel as b,area as I,addBtn as M}from"./kit-B_He1EBw.js";import{e as n}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const g='A pre-mortem works because of the tense. Asked "what could go wrong?", people list polite risks. Told "it is six months later and this failed — why?", the same people produce the real reasons, including the ones they were not willing to say in the planning meeting.',k=[{v:"1",l:"Very unlikely"},{v:"2",l:"Unlikely"},{v:"3",l:"Possible"},{v:"4",l:"Likely"},{v:"5",l:"Near certain"}],T=[{v:"1",l:"Annoying"},{v:"2",l:"Costly"},{v:"3",l:"Serious"},{v:"4",l:"Severe"},{v:"5",l:"Fatal to the plan"}],C={id:"pre-mortem",name:"Pre-Mortem",blurb:"Assume it already failed, then work backwards to what you would change now.",icon:"alert",accent:"signal",group:"Deciding",purpose:"Surfaces the failure causes people will not raise prospectively, and converts each into a signal you can watch for.",when:["Before you commit to something expensive or hard to reverse","When everyone in the room agrees and nobody is uneasy","When a plan depends on several things going right at once"],reads:g,initial:()=>({plan:"",horizon:"6 months",causes:[{id:y(),cause:"",like:"3",harm:"3",signal:"",prevent:""}]}),form(s){const i=s.causes.map((t,a)=>`
      <div class="panel" style="padding:var(--s-4);margin-top:${a?"var(--s-3)":"0"};background:var(--surface-2)">
        <div class="row-wrap between" style="margin-bottom:var(--s-3)">
          <span class="eyebrow">Cause ${a+1}</span>
          ${s.causes.length>1?E("del",a,"Remove this cause"):""}
        </div>
        ${c("It failed because…",u(`causes.${a}.cause`,t.cause,'Say it as a completed fact. "The data migration was never finished."'))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:150px"><label>How likely</label>${$(`causes.${a}.like`,t.like,k)}</div>
          <div class="field grow" style="min-width:150px"><label>How bad</label>${$(`causes.${a}.harm`,t.harm,T)}</div>
        </div>
        ${c("The earliest signal you would actually notice",u(`causes.${a}.signal`,t.signal,'Something observable, weeks before the failure. "Two sprints in a row miss the migration ticket."'))}
        ${c("What would prevent or cap it",u(`causes.${a}.prevent`,t.prevent,"One action, owned by someone, with a date"))}
      </div>`).join("");return`
      ${b("The plan",`
        ${c("What are you about to commit to?",I("plan",s.plan,"One or two sentences. The decision, not the aspiration.",3))}
        <div class="field" style="max-width:200px"><label>Look back from</label>
          ${u("horizon",s.horizon,"e.g. 6 months")}</div>
        <div style="margin-top:var(--s-3)">${o("How to use this properly",`It is <strong>${n(s.horizon||"six months")}</strong> from now. The plan failed — not partly, completely. You are writing the post-mortem. List the causes in the past tense, and include the one that is politically awkward to say. That one is usually the real answer.`,"info")}</div>`)}
      ${b("Why it failed",`${i}
        <div class="row" style="margin-top:var(--s-4)">${M("add","Add another cause")}</div>
        <p class="t-caption faint" style="margin-top:var(--s-3)">Five to eight causes is the useful range. Under three usually means the exercise is being done politely.</p>`)}`},output(s){const i=s.causes.filter(e=>(e.cause||"").trim());if(!i.length)return f("The pre-mortem",W("Write the first failure cause","Past tense. It has already happened."));const t=i.map(e=>{const r=d(e.like),l=d(e.harm);return{...e,l:r,h:l,score:r*l}}).sort((e,r)=>r.score-e.score),a=t[0],p=t.filter(e=>e.score>=12),h=t.filter(e=>!(e.signal||"").trim()),m=t.filter(e=>!(e.prevent||"").trim()),v=t.filter(e=>(e.signal||"").trim()&&(e.prevent||"").trim()).length,x=t.reduce((e,r)=>e+r.score,0)/t.length,A=e=>e.score>=16?"danger":e.score>=9?"warning":"info",P=e=>e.score>=16?"Deal with this before starting":e.score>=9?"Needs a named owner":"Watch only";return f("The pre-mortem",`
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${t.length}</b><span>causes named</span></div>
        <div class="stat"><b>${p.length}</b><span>serious and likely</span></div>
        <div class="stat"><b>${v}/${t.length}</b><span>have signal and prevention</span></div>
      </div>

      ${t.length<3?o("Too few causes for this to have worked","Under three causes almost always means the exercise was done politely rather than honestly. Add the one that would embarrass someone, including you. That is the one this technique exists to surface.","warning"):p.length>=3?o(`${p.length} causes are both likely and serious`,"This plan does not fail in one way — it has several independent routes to failure, and they compound. Either reduce the scope until fewer of them apply, or delay until the top two have owners and dates.","danger"):x>=9?o("The risk is concentrated, not diffuse","Most of the exposure sits in the top two or three causes. That is a good position: it means a small number of specific actions changes the outcome materially.","warning"):o("No single cause dominates","The failure modes you have named are individually survivable. The main remaining risk in a plan like this is drift rather than collapse — so the signals below matter more than the preventions.","success")}

      <div style="margin-top:var(--s-5)">
        <p class="eyebrow">Causes, worst first</p>
        ${z(`
          <thead><tr><th>It failed because…</th><th class="n">Risk</th><th>Verdict</th><th>Earliest signal</th></tr></thead>
          <tbody>${t.map((e,r)=>`
            <tr${r===0&&t.length>1&&e.score>=12?' class="lead"':""}>
              <td><strong>${n(e.cause)}</strong><br><span class="t-meta faint">${n((k.find(l=>l.v===String(e.l))||{}).l||"")} · ${n((T.find(l=>l.v===String(e.h))||{}).l||"")}</span></td>
              <td class="n">${e.score}</td>
              <td class="t-small">${n(P(e))}</td>
              <td class="t-small">${e.signal.trim()?n(e.signal):'<span class="faint">none named</span>'}</td>
            </tr>`).join("")}</tbody>`)}
      </div>

      ${a&&a.score>=9?`<div style="margin-top:var(--s-4)">${o("The one to act on now",`<strong>${n(a.cause)}</strong><br><br>${a.prevent.trim()?`Prevention: ${n(a.prevent)}`:"You have not written a prevention for it. Do that before anything else in this list — an identified risk with no owner is just a documented regret."}${a.signal.trim()?`<br>Watch for: ${n(a.signal)}`:""}`,A(a))}</div>`:""}

      ${h.length?`<div style="margin-top:var(--s-3)">${o(`${h.length} cause${h.length>1?"s have":" has"} no early signal`,`${h.slice(0,4).map(e=>n(e.cause)).join("; ")}. A risk you cannot detect early is one you will only meet at full size. For each of these, ask what would be observably different four weeks before it went wrong — that is the thing to put on a dashboard or in a calendar reminder.`,"warning")}</div>`:""}

      ${m.length?`<div style="margin-top:var(--s-3)">${o(`${m.length} cause${m.length>1?"s have":" has"} no prevention`,"Naming a risk feels like managing it. It is not. Each of these needs one action, one owner and one date, or it should be explicitly accepted and written down as accepted.","info")}</div>`:""}

      ${v===t.length&&t.length>=3?`<div style="margin-top:var(--s-3)">${o("This is a usable plan",`Every cause has a signal and a prevention. Put the signals somewhere you will actually see them, and re-run this exercise at the halfway point — roughly ${n(s.horizon||"three months")} in, when the early signals should already be visible either way.`,"success")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${n(g)}</p>`)},actions:{add:s=>s.causes.push({id:y(),cause:"",like:"3",harm:"3",signal:"",prevent:""}),del:(s,{i})=>s.causes.splice(i,1)},summary(s){const i=s.causes.filter(t=>(t.cause||"").trim()).map(t=>({...t,score:d(t.like)*d(t.harm)})).sort((t,a)=>a.score-t.score);return[S("Pre-Mortem"),`Plan: ${s.plan||"(not stated)"}`,`Looking back from: ${s.horizon||"(not stated)"}`,w(`Causes, worst first (${i.length})`),...i.length?i.flatMap(t=>[`  [${t.score}] ${t.cause}`,`        signal:  ${t.signal||"(none named)"}`,`        prevent: ${t.prevent||"(none named)"}`]):["  (nothing entered)"],w("Rule"),"  A risk with no owner and no date is a documented regret, not a plan.","  Re-run this at the halfway point, when the early signals are visible.","",g].join(`
`)}};export{C as default};
