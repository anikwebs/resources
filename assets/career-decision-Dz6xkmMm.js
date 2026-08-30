import{n as l,stamp as O,head as $,r1 as k,uid as v,outPanel as f,emptyOut as q,tblWrap as R,bar as S,callout as d,range as x,text as w,delBtn as j,field as p,panel as m,area as T,addBtn as M}from"./kit-DV3I2Ncm.js";import{e as i}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const b="Most career decisions are judged on the salary and the title, which are the two things that change fastest and matter least in five years. What compounds is what you learn, who you work with, and what the role lets you do next.",c=[{k:"learn",label:"What you will learn",hint:"Skills that transfer somewhere else",w:5},{k:"next",label:"What it opens next",hint:"Where you can go from here",w:5},{k:"people",label:"The people",hint:"Manager and colleagues you would learn from",w:4},{k:"pay",label:"Money",hint:"Total, not headline",w:3},{k:"life",label:"Effect on the rest of your life",hint:"Hours, commute, control, health",w:4},{k:"meaning",label:"Whether the work interests you",hint:"Sustainable attention, not passion",w:3},{k:"security",label:"Stability",hint:"Funding, sector, the organisation itself",w:3}],C={id:"career-decision",name:"Career Decision Tool",blurb:"Weigh a role change on what compounds, not what flatters.",icon:"route",accent:"atlas",group:"Deciding",purpose:"Compares roles on the factors that still matter in five years.",when:["An offer is on the table","You are deciding whether to stay","A move looks good on paper and feels wrong"],reads:b,initial:()=>({question:"",horizon:"",options:[{id:v(),name:"Stay where I am",scores:{},note:""},{id:v(),name:"The new role",scores:{},note:""}],weights:c.reduce((t,s)=>(t[s.k]=s.w,t),{}),regret:"",reversible:""}),form(t){const s=`
      <div class="row-wrap" style="gap:var(--s-4)">
        ${c.map(e=>`
          <div class="field grow" style="min-width:210px">
            <label>${i(e.label)} <span class="t-num" data-mirror="weights.${e.k}">${t.weights[e.k]}</span>/5</label>
            ${x(`weights.${e.k}`,t.weights[e.k]??e.w,{min:1,max:5})}
            <span class="hint">${i(e.hint)}</span>
          </div>`).join("")}
      </div>`,h=t.options.map((e,n)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1fr) 34px">
        ${w(`options.${n}.name`,e.name,"Name this option")}
        ${t.options.length>1?j("delOpt",n,"Remove option"):"<span></span>"}
      </div>
      <div class="rowitem" style="margin-top:2px">
        <div class="row-wrap" style="gap:var(--s-4)">
          ${c.map(a=>`
            <div class="field grow" style="min-width:190px">
              <label>${i(a.label)} <span class="t-num" data-mirror="options.${n}.scores.${a.k}">${e.scores[a.k]??3}</span>/5</label>
              ${x(`options.${n}.scores.${a.k}`,e.scores[a.k]??3,{min:1,max:5})}
            </div>`).join("")}
        </div>
        ${p("Anything you know that the scores do not capture?",w(`options.${n}.note`,e.note,"Optional"))}
      </div>`).join("");return`
      ${m("The decision",`
        ${p("What are you deciding?",w("question",t.question,"e.g. Accept the platform team offer or stay"))}
        ${p("What do you want to be able to do in three years?",T("horizon",t.horizon,"Answer this before you score anything — it changes which factors deserve weight.",2))}`)}
      ${m("How much each factor matters to you",s)}
      ${m("The options",h,M("addOpt","Add option"))}
      ${m("Two last questions",`
        ${p("In five years, which choice would you regret not taking?",T("regret",t.regret,"Regret is a better guide than excitement — it is quieter and more honest.",2))}
        ${p("If it goes badly, how do you get out?",w("reversible",t.reversible,"e.g. Two-year commitment, or: could return within six months"))}`)}`},output(t){const s=c.reduce((o,r)=>o+l(t.weights[r.k]??r.w),0);if(!t.options.length||!s)return f("Result",q("Add an option","The comparison appears here."));const h=t.options.map(o=>{const r=c.reduce((g,y)=>g+l(t.weights[y.k]??y.w)*l(o.scores[y.k]??3),0);return{o,name:o.name||"Untitled",raw:r,p:Math.round(r/(s*5)*100)}}).sort((o,r)=>r.raw-o.raw),e=h[0],n=h[1],a=n?e.p-n.p:null,W=["learn","next","people"],u=o=>W.reduce((r,g)=>r+l(o.scores[g]??3),0),A=n&&l(e.o.scores.pay??3)>l(n.o.scores.pay??3)&&u(e.o)<=u(n.o);return f("Result",`
      ${R(`
        <thead><tr><th>Option</th><th class="n">Score</th><th style="width:32%">Relative</th><th class="n">Compounding</th></tr></thead>
        <tbody>${h.map((o,r)=>`
          <tr${r===0&&a>6?' class="lead"':""}>
            <td>${i(o.name)}</td>
            <td class="n">${k(o.raw)}</td>
            <td>${S(o.p)} <span class="t-meta faint">${o.p}%</span></td>
            <td class="n">${u(o.o)}/15</td>
          </tr>`).join("")}</tbody>`)}

      <div style="margin-top:var(--s-4)">
        ${a==null?d("Add the alternative","One option is not a decision. Include staying exactly as you are — it is a real choice with real consequences, and it is the one people forget to score.","info"):a<=6?d("Genuinely close",`${i(e.name)} and ${i(n.name)} are within ${a} points. When two roles are this close, decide on reversibility and on the people — those are the two factors that most reliably determine whether you are glad in a year.`,"warning"):d("The weighted answer",`<strong>${i(e.name)}</strong> leads by ${a} points on the factors as you weighted them.`,"success")}
      </div>

      ${A?`<div style="margin-top:var(--s-3)">${d("Money is carrying this",`${i(e.name)} wins partly on pay while scoring lower on learning, progression and people — the three things that compound. That trade is sometimes right, especially if you need the money now. Just make it knowingly rather than by accident.`,"warning")}</div>`:""}

      ${t.regret.trim()?`<div style="margin-top:var(--s-3)">${d("Your own answer on regret",`${i(t.regret)}<br><br>If this contradicts the table, trust this. The table only knows what you told it.`,"info")}</div>`:""}

      ${t.reversible.trim()?`<div style="margin-top:var(--s-3)">${d("Reversibility",i(t.reversible),"info")}</div>`:`<div style="margin-top:var(--s-3)">${d("How reversible is it?","You have not answered this. It is the most useful tiebreaker there is: when two options are close, take the one you can undo.","warning")}</div>`}

      ${t.horizon.trim()?"":`<div style="margin-top:var(--s-3)">${d("Missing the horizon","You have not said what you want to be able to do in three years. Without it, you are scoring the options against nothing, and the loudest factor wins by default.","danger")}</div>`}

      ${h.some(o=>o.o.note&&o.o.note.trim())?`<div style="margin-top:var(--s-3)"><p class="eyebrow">Your notes</p>
        <ul class="marklist">${h.filter(o=>o.o.note&&o.o.note.trim()).map(o=>`<li><strong>${i(o.name)}:</strong> ${i(o.o.note)}</li>`).join("")}</ul></div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${i(b)}</p>`)},actions:{addOpt:t=>t.options.push({id:v(),name:"",scores:{},note:""}),delOpt:(t,{i:s})=>t.options.splice(s,1)},summary(t){const s=c.reduce((e,n)=>e+l(t.weights[n.k]??n.w),0)||1,h=t.options.map(e=>({name:e.name||"Untitled",raw:c.reduce((n,a)=>n+l(t.weights[a.k]??a.w)*l(e.scores[a.k]??3),0),note:e.note})).sort((e,n)=>n.raw-e.raw);return[O("Career Decision Tool"),`Decision: ${t.question||"(not stated)"}`,`Three-year aim: ${t.horizon||"(not stated)"}`,$("Factor weights"),...c.map(e=>`  ${e.label} — ${l(t.weights[e.k]??e.w)}/5`),$("Options"),...h.map((e,n)=>`  ${n+1}. ${e.name} — ${k(e.raw)} (${Math.round(e.raw/(s*5)*100)}%)${e.note?`
     note: ${e.note}`:""}`),$("The quieter questions"),`  Regret: ${t.regret||"(not answered)"}`,`  Exit:   ${t.reversible||"(not answered)"}`,"",b].join(`
`)}};export{C as default};
