import{stamp as $,n as y,head as p,outPanel as f,emptyOut as w,meter as k,callout as l,panel as h,field as n,text as r,number as T,area as b}from"./kit-B_He1EBw.js";import{e as s}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const v="Habits fail on friction and ambiguity, not willpower. The two questions that predict success are: exactly when does it happen, and how small is the smallest version?",x=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],W={id:"habit-planner",name:"Habit Planner",blurb:"Design a habit around a trigger, a floor and a fourteen-day log.",icon:"refresh",accent:"clay",group:"Building",purpose:'Replaces "I should do this more" with a specific trigger and a minimum you cannot fail.',when:["You have restarted the same habit several times","It works for a week and then quietly stops","You want to build something small and durable rather than dramatic"],reads:v,initial:()=>({habit:"",trigger:"",where:"",minimum:"",target:"",days:5,friction:"",remove:"",reward:"",log:Array(14).fill(!1)}),form(e){return`
      ${h("The habit",`
        ${n("What is the habit?",r("habit",e.habit,"e.g. Twenty minutes of reading"))}
        ${n("Days per week you are aiming for",T("days",e.days,{min:1,max:7}))}`)}
      ${h("When and where — exactly",`
        ${n("After what existing event?",r("trigger",e.trigger,"e.g. After I put the kettle on in the morning"),"Attach it to something that already happens without effort.")}
        ${n("Where, physically?",r("where",e.where,"e.g. The kitchen table, not the sofa"))}`)}
      ${h("The floor and the ceiling",`
        ${n("The smallest version that still counts",r("minimum",e.minimum,"e.g. One page"),"This is the version for bad days. It should feel almost embarrassingly small.")}
        ${n("The version on a good day",r("target",e.target,"e.g. Twenty minutes"))}`)}
      ${h("Friction",`
        ${n("What makes it hard to start?",b("friction",e.friction,"The physical or practical obstacle — finding the book, charging the thing, clearing the table.",2))}
        ${n("What will you do in advance to remove that?",b("remove",e.remove,"A setup action done the night before.",2))}
        ${n("What makes it satisfying immediately?",r("reward",e.reward,"Something you feel today, not in six months"))}`)}
      ${h("Fourteen days",`
        <p class="t-small muted" style="margin-bottom:var(--s-3)">Tick a day when you did at least the minimum. Two weeks is
        enough to see whether the design works — it is not a test of your character.</p>
        <div class="row-wrap" style="gap:6px">
          ${e.log.map((t,a)=>`
            <label class="check${t?" done":""}" style="flex-direction:column;align-items:center;gap:4px;padding:8px 10px;min-width:52px">
              <span class="t-meta faint">${x[a%7]}</span>
              <input type="checkbox" data-bind="log.${a}"${t?" checked":""} aria-label="Day ${a+1}">
              <span class="t-meta faint">${a+1}</span>
            </label>`).join("")}
        </div>`)}`},output(e){if(!e.habit.trim())return f("The design",w("Name the habit","The design and the streak read-out appear here."));const t=e.log.filter(Boolean).length,a=Math.round(t/14*100),i=Math.round(y(e.days)/7*14);let o=0,g=0;for(const u of e.log)u?(o++,g=Math.max(g,o)):o=0;let d=0,c=0;for(const u of e.log)u?c=0:(c++,d=Math.max(d,c));const m=[];return e.trigger.trim()||m.push("a trigger"),e.minimum.trim()||m.push("a minimum version"),f("The design",`
      ${e.trigger.trim()&&e.minimum.trim()?`
        <div class="callout callout-success"><span class="lab">The sentence to remember</span>
        <p>After <strong>${s(e.trigger)}</strong>, at <strong>${s(e.where||"my usual place")}</strong>,
        I will do <strong>${s(e.minimum)}</strong> — even on a bad day.${e.target.trim()?` On a good day, ${s(e.target)}.`:""}</p></div>`:""}

      <div class="stats" style="margin:var(--s-4) 0">
        <div class="stat"><b>${t}/14</b><span>days done</span></div>
        <div class="stat"><b>${g}</b><span>best streak</span></div>
        <div class="stat"><b>${a}%</b><span>consistency</span></div>
      </div>

      <div class="field" style="margin-bottom:var(--s-4)">
        <label>Against your target of ${i} days in two weeks</label>
        ${k(i?Math.min(100,Math.round(t/i*100)):0,!0)}
      </div>

      ${m.length?l("Incomplete design",`You have not defined ${m.join(" or ")}. These are the two fields that predict whether a habit survives — everything else is decoration.`,"danger"):""}

      ${d>=3&&t>0?`<div style="margin-top:var(--s-3)">${l("A gap of "+d+" days","Missing once is noise. Missing three in a row is the habit ending quietly. The rule that saves it: never miss twice. On the second day, do the minimum version and nothing more.","warning")}</div>`:""}

      ${t>=i&&i>0?`<div style="margin-top:var(--s-3)">${l("It is working","You are hitting your target. Do not increase the size yet — extend the duration first. Habits break when people upgrade them the moment they start working.","success")}</div>`:""}

      ${t===0?`<div style="margin-top:var(--s-3)">${l("Nothing logged yet","Do the minimum version once, today, and tick day one. Starting badly beats planning well — and the log only becomes useful once there is something in it.","info")}</div>`:""}

      ${e.friction.trim()&&!e.remove.trim()?`<div style="margin-top:var(--s-3)">${l("Friction unaddressed",`You named the obstacle — ${s(e.friction)} — but not what removes it. Do that setup the night before. Almost every failed habit is a friction problem wearing a motivation costume.`,"warning")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${s(v)}</p>`)},summary(e){const t=e.log.filter(Boolean).length;let a=0,i=0;for(const o of e.log)o?(a++,i=Math.max(i,a)):a=0;return[$("Habit Planner"),`Habit: ${e.habit||"(not stated)"}`,`Target: ${y(e.days)} days per week`,p("The design"),`  After: ${e.trigger||"(no trigger — define this)"}`,`  Where: ${e.where||"(not specified)"}`,`  Minimum: ${e.minimum||"(none — define this)"}`,`  Good day: ${e.target||"(not specified)"}`,`  Reward: ${e.reward||"(none)"}`,p("Friction"),`  Obstacle: ${e.friction||"(not named)"}`,`  Removed by: ${e.remove||"(not planned)"}`,p("Fourteen days"),`  ${e.log.map(o=>o?"#":".").join("")}`,`  ${t}/14 days · best streak ${i}`,"","Rule: never miss twice. On the second day, do the minimum."].join(`
`)}};export{W as default};
