import{stamp as w,head as s,uid as p,outPanel as u,emptyOut as m,callout as h,field as n,text as r,area as c,delBtn as b,panel as l,addBtn as v}from"./kit-DV3I2Ncm.js";import{I as y,e as o}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const d="Difficult conversations go wrong in the first thirty seconds and in the reaction to pushback. Those are the only two parts worth rehearsing. Scripting the whole thing makes you sound like you are reading.",k={id:"conversation-planner",name:"Conversation Planner",blurb:"Prepare the opening line, the outcome, and your answer to pushback.",icon:"chat",accent:"clay",group:"Communicating",purpose:"Gets you into a hard conversation with a first sentence and a floor you will not drop below.",when:["You have been rehearsing it in your head for days","You expect to be talked out of your position","The relationship matters as much as the outcome"],reads:d,initial:()=>({who:"",what:"",want:"",accept:"",walk:"",opener:"",their:"",when:"",where:"",objections:[{id:p(),says:"",reply:""}]}),form(e){const a=e.objections.map((t,i)=>`
      <div class="rowitem" style="margin-top:${i?"var(--s-2)":"0"}">
        ${n("They say",r(`objections.${i}.says`,t.says,"Their most likely pushback — in their words"))}
        ${n("You say",c(`objections.${i}.reply`,t.reply,"Short. Do not add a second reason — it reads as negotiating with yourself.",2))}
        <div class="row" style="justify-content:flex-end">${e.objections.length>1?b("del",i,"Remove objection"):""}</div>
      </div>`).join("");return`
      ${l("The conversation",`
        ${n("Who is it with?",r("who",e.who,"Name and their relationship to you"))}
        ${n("What is it about?",c("what",e.what,"The specific thing — one behaviour, one decision, one request.",2),"If it is more than one thing, it is more than one conversation.")}`)}
      ${l("Your three lines",`
        ${n("What you want",r("want",e.want,"The best realistic outcome"))}
        ${n("What you would accept",r("accept",e.accept,"Good enough to say yes to"))}
        ${n("What you will not accept",r("walk",e.walk,"Your floor — decided now, while you are calm"),"This is the field that stops you agreeing to something in the room.")}`)}
      ${l("The opening",`
        ${n("Your first sentence, word for word",c("opener",e.opener,"Name the topic and the outcome you want. No preamble, no apology, no weather.",3),"Short, specific, and not a question. The first thirty seconds set the frame.")}
        ${n("What do they want out of this?",c("their",e.their,"Their interest, their pressure, what they are protecting. Guessing badly is still better than not asking.",2))}`)}
      ${l("Their pushback",a,v("add","Add objection"))}
      ${l("Setting",`
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow"><label>When</label>${r("when",e.when,"Time and day")}</div>
          <div class="field grow"><label>Where</label>${r("where",e.where,"Private? Neutral? By voice?")}</div>
        </div>`)}`},output(e){if(!e.what.trim()&&!e.opener.trim())return u("Your brief",m("Start with what it is about","Your brief builds as you answer."));const a=e.objections.filter(i=>(i.says||"").trim()),t=[];return e.opener.trim()||t.push("an opening line"),e.walk.trim()||t.push("a floor"),a.length||t.push("their likely pushback"),u("Your brief",`
      ${e.who.trim()?`<p class="eyebrow">With ${o(e.who)}</p>`:""}

      ${e.opener.trim()?`<div class="lines" style="margin-bottom:var(--s-4)">
        <div class="line"><span class="when">Open with</span><span class="say">${o(e.opener)}</span>
        <button class="btn btn-icon copy" data-copy="${o(e.opener)}" aria-label="Copy opening line" title="Copy">${y.copy}</button></div>
      </div>`:""}

      ${e.want.trim()||e.accept.trim()||e.walk.trim()?`<div class="promise" style="margin-bottom:var(--s-4)">
        ${e.want.trim()?`<div><span class="lab">Want</span><span class="v">${o(e.want)}</span></div>`:""}
        ${e.accept.trim()?`<div><span class="lab">Accept</span><span class="v">${o(e.accept)}</span></div>`:""}
        ${e.walk.trim()?`<div><span class="lab">Will not accept</span><span class="v">${o(e.walk)}</span></div>`:""}
      </div>`:""}

      ${a.length?`<p class="eyebrow">If they push back</p>
        <div class="lines">${a.map(i=>`
          <div class="line">
            <span class="when">${o(i.says)}</span>
            <span class="say">${o(i.reply||"— you have not decided your answer to this")}</span>
            ${(i.reply||"").trim()?`<button class="btn btn-icon copy" data-copy="${o(i.reply)}" aria-label="Copy reply" title="Copy">${y.copy}</button>`:""}
          </div>`).join("")}</div>`:""}

      ${e.their.trim()?`<div style="margin-top:var(--s-4)">${h("Their side",`${o(e.their)}<br><br>Say this back to them early. Being understood makes people far less defensive than being right does.`,"info")}</div>`:""}

      ${e.walk.trim()?`<div style="margin-top:var(--s-3)">${h("Hold this line",`You decided in advance: ${o(e.walk)}. If you find yourself moving past it in the room, say "I need to think about that" and leave. Almost nothing genuinely requires an answer in the moment.`,"warning")}</div>`:""}

      ${t.length?`<div style="margin-top:var(--s-3)">${h("Not ready yet",`You are missing ${t.join(", ")}. ${t.includes("a floor")?"The floor matters most — without it, the outcome is decided by whoever is more comfortable with conflict.":""}`,"danger")}</div>`:""}

      ${e.where.trim()?"":`<div style="margin-top:var(--s-3)">${h("Choose the setting deliberately","Private, unhurried, and not immediately before something either of you has to attend. Difficult conversations held in doorways or five minutes before a meeting reliably go badly.","info")}</div>`}

      <div class="hr"></div>
      <p class="t-caption faint">${o(d)}</p>`)},actions:{add:e=>e.objections.push({id:p(),says:"",reply:""}),del:(e,{i:a})=>e.objections.splice(a,1)},summary(e){const a=e.objections.filter(t=>(t.says||"").trim());return[w("Conversation Planner"),`With: ${e.who||"(not stated)"}`,`About: ${e.what||"(not stated)"}`,s("My three lines"),`  Want:       ${e.want||"(not stated)"}`,`  Accept:     ${e.accept||"(not stated)"}`,`  Will NOT:   ${e.walk||"(not decided — decide this before you go in)"}`,s("Opening line"),`  "${e.opener||"(not written)"}"`,s("Their side"),`  ${e.their||"(not considered)"}`,s("Pushback"),...a.length?a.flatMap(t=>[`  They: ${t.says}`,`  Me:   ${t.reply||"(no answer decided)"}`,""]):["  (none anticipated)"],s("Setting"),`  ${e.when||"when: unset"} · ${e.where||"where: unset"}`,"",d].join(`
`)}};export{k as default};
