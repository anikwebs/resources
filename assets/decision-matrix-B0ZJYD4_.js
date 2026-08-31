import{n as d,stamp as T,head as $,r2 as y,uid as l,outPanel as v,emptyOut as W,callout as m,tblWrap as q,bar as C,text as g,range as f,delBtn as b,panel as u,field as M,addBtn as x}from"./kit-B_He1EBw.js";import{e as c}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const A="A matrix does not decide for you. If the top two are within about 5%, the honest reading is that they are equivalent on the things you listed — either find the criterion you left out, or pick the more reversible option and move on.",I={id:"decision-matrix",name:"Decision Matrix",blurb:"Score real options against criteria you weight yourself.",icon:"scale",accent:"forest",group:"Deciding",purpose:'Turns "I keep going round in circles" into a visible comparison you can argue with.',when:["Two or more genuine options and no obvious winner","You suspect one loud factor is drowning out several quiet ones","You will have to explain the decision to someone later"],reads:A,initial:()=>({question:"",criteria:[{id:l(),name:"Money",weight:3},{id:l(),name:"Time cost",weight:3},{id:l(),name:"What it leads to",weight:4},{id:l(),name:"Risk if it goes wrong",weight:3}],options:[{id:l(),name:"Option A",scores:{}},{id:l(),name:"Option B",scores:{}}]}),form(t){const a=t.criteria.map((n,e)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 128px 34px">
        ${g(`criteria.${e}.name`,n.name,"What matters here")}
        <div>
          <label class="t-meta faint">Weight <span class="t-num" data-mirror="criteria.${e}.weight">${n.weight}</span>/5</label>
          ${f(`criteria.${e}.weight`,n.weight,{min:1,max:5})}
        </div>
        ${t.criteria.length>1?b("delCrit",e,`Remove ${n.name||"criterion"}`):"<span></span>"}
      </div>`).join(""),r=t.options.map((n,e)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${g(`options.${e}.name`,n.name,"Name this option")}
        ${t.options.length>1?b("delOpt",e,`Remove ${n.name||"option"}`):"<span></span>"}
      </div>
      <div class="rowitem" style="margin-top:2px">
        ${t.criteria.map(i=>`
          <div class="field">
            <label>${c(i.name||"Criterion")}
              <span class="t-num" data-mirror="options.${e}.scores.${i.id}">${n.scores[i.id]??3}</span>/5</label>
            ${f(`options.${e}.scores.${i.id}`,n.scores[i.id]??3,{min:1,max:5})}
          </div>`).join("")}
      </div>`).join("");return`
      ${u("The decision",M("What are you actually deciding?",g("question",t.question,"e.g. Take the internal move or stay in my team"),"Write it as a choice, not a feeling."))}
      ${u("What matters",a,x("addCrit","Add criterion"))}
      ${u("The options",r,x("addOpt","Add option"))}`},output(t){const a=t.criteria.reduce((o,s)=>o+d(s.weight),0);if(!a||!t.options.length)return v("Result",W("Add a criterion and an option","The comparison appears here as you fill it in."));const r=t.options.map(o=>{const s=t.criteria.reduce((O,w)=>O+d(w.weight)*d(o.scores[w.id]??3),0);return{o,name:o.name||"Untitled",raw:s,p:Math.round(s/(a*5)*100)}}).sort((o,s)=>s.raw-o.raw),n=r[0],e=r[1],i=e?n.p-e.p:null,h=i==null?m("One option",'With a single option there is nothing to compare. Add the alternative you are quietly weighing it against — including "do nothing", which is always on the table.',"info"):i<=5?m("Too close to call",`<strong>${c(n.name)}</strong> leads <strong>${c(e.name)}</strong> by ${i} points. On the things you listed, these are equivalent. Either a criterion is missing, or you should choose the more reversible one and stop spending attention here.`,"warning"):i<=15?m("A real but narrow lead",`<strong>${c(n.name)}</strong> is ahead by ${i} points — a genuine preference, not a landslide. Check the criterion driving the gap below. If you would not defend that weighting out loud, revisit it.`,"info"):m("A clear result",`<strong>${c(n.name)}</strong> wins by ${i} points. If that feels wrong, the matrix is telling you something real: a criterion you care about is missing, or you weighted it too low to be honest.`,"success");let p=null;return e&&(p=t.criteria.map(o=>({name:o.name||"Criterion",delta:d(o.weight)*(d(n.o.scores[o.id]??3)-d(e.o.scores[o.id]??3))})).sort((o,s)=>Math.abs(s.delta)-Math.abs(o.delta))[0]),v("Result",`
      ${q(`
        <thead><tr><th>Option</th><th class="n">Score</th><th style="width:34%">Relative</th></tr></thead>
        <tbody>${r.map((o,s)=>`
          <tr${s===0&&i>5?' class="lead"':""}>
            <td>${c(o.name)}</td>
            <td class="n">${y(o.raw)}</td>
            <td>${C(o.p)} <span class="t-meta faint">${o.p}%</span></td>
          </tr>`).join("")}</tbody>`)}
      <div style="margin-top:var(--s-4)">${h}</div>
      ${p&&Math.abs(p.delta)>0?`<p class="t-small muted" style="margin-top:var(--s-3)">The criterion doing most of the work is <strong>${c(p.name)}</strong>. If that weighting is wrong, the answer is wrong.</p>`:""}
      <div class="hr"></div>
      <p class="t-caption faint">${c(A)}</p>`)},actions:{addCrit:t=>t.criteria.push({id:l(),name:"",weight:3}),delCrit:(t,{i:a})=>t.criteria.splice(a,1),addOpt:t=>t.options.push({id:l(),name:"",scores:{}}),delOpt:(t,{i:a})=>t.options.splice(a,1)},summary(t){const a=t.criteria.reduce((e,i)=>e+d(i.weight),0)||1,r=t.options.map(e=>({name:e.name||"Untitled",raw:t.criteria.reduce((i,h)=>i+d(h.weight)*d(e.scores[h.id]??3),0)})).sort((e,i)=>i.raw-e.raw),n=r.length>1&&r[0].raw-r[1].raw<=a*5*.05;return[T("Decision Matrix"),`Decision: ${t.question||"(not stated)"}`,$("Criteria and weights"),...t.criteria.map(e=>`  ${e.name||"Criterion"} — weight ${e.weight}/5`),$("Scores"),...r.map((e,i)=>`  ${i+1}. ${e.name} — ${y(e.raw)} (${Math.round(e.raw/(a*5)*100)}%)`),"",n?"Reading: too close to call. Treat these as equivalent and choose the more reversible option.":`Reading: ${r[0]?.name||"-"} leads on the criteria as weighted.`,"","A matrix supports judgement. It does not carry the responsibility."].join(`
`)}};export{I as default};
