import{n as t,stamp as w,head as p,r1 as h,outPanel as y,emptyOut as $,callout as n,panel as v,field as r,text as g,number as l,area as b}from"./kit-DV3I2Ncm.js";import{J as o,e as s}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const u="Opportunity cost is not what you pay. It is what you stop being able to do. Money you can usually earn back; the hours and the attention you cannot.",M={id:"opportunity-cost",name:"Opportunity Cost Analyzer",blurb:"Price what you give up, not just what you spend.",icon:"money",accent:"council",group:"Deciding",purpose:"Makes the invisible side of a commitment visible before you agree to it.",when:["Something looks free because no money changes hands","You are saying yes to a commitment with a long tail","A purchase is being justified by the sticker price alone"],reads:u,initial:()=>({commit:"",hoursWeek:5,weeks:12,rate:0,cash:0,instead:"",gain:"",reversible:""}),form(e){return`
      ${v("The commitment",`
        ${r("What are you considering saying yes to?",g("commit",e.commit,"e.g. Running the internal book club"))}
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:130px"><label>Hours per week</label>
            ${l("hoursWeek",e.hoursWeek,{min:0,max:100,step:.5})}</div>
          <div class="field grow" style="min-width:130px"><label>For how many weeks?</label>
            ${l("weeks",e.weeks,{min:1,max:520})}</div>
        </div>
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:130px"><label>Your hourly value, if you know it</label>
            ${l("rate",e.rate,{min:0,max:1e4,ph:"Optional"})}</div>
          <div class="field grow" style="min-width:130px"><label>Direct money cost</label>
            ${l("cash",e.cash,{min:0,max:1e7,ph:"Optional"})}</div>
        </div>`)}
      ${v("The other side",`
        ${r("What would those hours otherwise have gone to?",b("instead",e.instead,'Name it specifically. "Rest" counts. "Nothing" almost never turns out to be true.',3))}
        ${r("What do you actually gain here?",b("gain",e.gain,"The concrete benefit — skill, relationship, money, standing, enjoyment.",3))}
        ${r("If it turns out to be a mistake, how do you get out?",g("reversible",e.reversible,"e.g. Hand over after one term — or: no exit, it runs all year"))}`)}`},output(e){if(!e.commit.trim()&&!t(e.hoursWeek))return y("The real price",$("Name the commitment","The total cost appears once you add hours."));const a=t(e.hoursWeek)*t(e.weeks),i=a/8,d=a*t(e.rate),m=d+t(e.cash),c=Math.round(a/3);return y("The real price",`
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${o(Math.round(a))}</b><span>hours total</span></div>
        <div class="stat"><b>${h(i)}</b><span>working days</span></div>
        <div class="stat"><b>${o(c)}</b><span>free evenings</span></div>
      </div>

      ${m>0?`<p class="t-body">Priced at your own rate, this commitment costs <strong>${o(Math.round(m))}</strong>${t(e.cash)>0&&d>0?` — ${o(Math.round(d))} in time plus ${o(Math.round(t(e.cash)))} in cash`:""}. That figure is the part people leave out when they call something free.</p>`:""}

      ${a>=100?`<div style="margin-top:var(--s-4)">${n("This is not a small yes",`${o(Math.round(a))} hours is roughly ${h(i)} working days — about ${o(c)} evenings. A commitment this size deserves the same scrutiny as a job change, and it rarely gets it because it arrives one week at a time.`,"warning")}</div>`:""}

      ${e.instead.trim()?`<div style="margin-top:var(--s-4)">${n("What you are choosing against",`${s(e.instead)}<br><br>That is the actual comparison. Not "this versus nothing" — this versus that.`,"info")}</div>`:`<div style="margin-top:var(--s-4)">${n("Unanswered","You have not said what those hours would otherwise do. Until you name the alternative, the cost stays invisible and every yes feels free.","danger")}</div>`}

      ${e.gain.trim()&&e.instead.trim()?`<div style="margin-top:var(--s-3)">
        <div class="callout callout-success"><span class="lab">The trade, stated plainly</span>
        <p>You are spending ${o(Math.round(a))} hours to get: ${s(e.gain)}<br>
        Instead of: ${s(e.instead)}<br><br>
        Read that back. If you would not make that trade knowingly, decline it — politely, today, before it becomes a habit.</p></div></div>`:""}

      ${e.reversible.trim()?`<div style="margin-top:var(--s-3)">${n("Your exit",s(e.reversible),"info")}</div>`:`<div style="margin-top:var(--s-3)">${n("No exit named","You have not written down how you would stop. Agree the end date at the same time as the start date — it is almost impossible to negotiate an exit later without looking like you are letting people down.","warning")}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${s(u)}</p>`)},summary(e){const a=t(e.hoursWeek)*t(e.weeks),i=a*t(e.rate)+t(e.cash);return[w("Opportunity Cost Analyzer"),`Commitment: ${e.commit||"(not stated)"}`,p("Cost"),`  ${t(e.hoursWeek)}h/week × ${t(e.weeks)} weeks = ${Math.round(a)} hours`,`  ≈ ${h(a/8)} working days, ≈ ${Math.round(a/3)} free evenings`,i>0?`  Priced total: ${Math.round(i)}`:"  No monetary value entered",p("The trade"),`  Gained: ${e.gain||"(not stated)"}`,`  Given up: ${e.instead||"(not stated — name this)"}`,`  Exit: ${e.reversible||"(none named — agree one before starting)"}`,"",u].join(`
`)}};export{M as default};
