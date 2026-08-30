import{stamp as I,head as w,outPanel as v,emptyOut as T,dial as x,callout as p,panel as y,field as g,area as b,text as S,select as $}from"./kit-DV3I2Ncm.js";import{e as n}from"./views-B7S8XgD6.js";import"./data-DpGBRXZo.js";const f="This scores how much checking a claim has survived — not whether it is true. A well-sourced claim can still be wrong, and an unsourced one can be right. What the score tells you is how much weight it can safely carry.",r=[{k:"primary",w:5,q:"Have you seen the original source, not a summary of it?",hint:"The study, the document, the official page — not an article about it.",fail:"You are relying on someone else's reading of it."},{k:"named",w:3,q:"Is the author or organisation named and checkable?",hint:"A name you could look up, with a track record.",fail:"Anonymous claims cannot be held to account."},{k:"dated",w:4,q:"Do you know when it was written, and is it still current?",hint:"Rules, prices, medical guidance and law all expire.",fail:"Undated information is unusable for anything that changes."},{k:"second",w:4,q:"Does a genuinely independent source agree?",hint:"Independent means not quoting the same original. Ten articles citing one study is one source.",fail:"No corroboration."},{k:"interest",w:3,q:"Have you identified who benefits from you believing it?",hint:"Funding, ownership, affiliate links, political position, whose product it sells.",fail:"Unexamined interest is where most quiet distortion lives."},{k:"numbers",w:3,q:"If it contains numbers, have you checked them yourself?",hint:"Percentages of what, over what period, compared with what.",fail:"Unchecked figures are the easiest thing to get wrong or misquote."},{k:"against",w:3,q:"Have you read the strongest case against it?",hint:"Stated fairly by someone who actually disagrees.",fail:"You only know one side."},{k:"applies",w:4,q:"Does it actually apply to your situation?",hint:"Jurisdiction, age, sector, scale, circumstances.",fail:"True elsewhere is not the same as true for you."}],D={id:"credibility-checker",name:"Information Credibility Checker",blurb:"Work out how much weight a claim can safely carry.",icon:"shield",accent:"atlas",group:"Thinking",purpose:'Separates "I read this somewhere" from "I have checked this".',when:["Before you forward it, act on it, or repeat it as fact","Money, health, law or a major decision depends on it","It arrived from AI, social media, or a friend of a friend"],reads:f,initial:()=>({claim:"",source:"",stakes:"medium",checks:r.reduce((e,i)=>(e[i.k]="unknown",e),{}),notes:""}),form(e){return`
      ${y("The claim",`
        ${g("What exactly is being claimed?",b("claim",e.claim,"Write it as a single checkable statement, not a topic.",2),'Vague claims cannot be checked. "X causes Y in Z% of cases" can be.')}
        ${g("Where did it come from?",S("source",e.source,"e.g. A post quoting a study; an AI answer; a colleague"))}
        ${g("What depends on it?",$("stakes",e.stakes,[{v:"low",l:"Low — curiosity, nothing rests on it"},{v:"medium",l:"Medium — it would shape a decision"},{v:"high",l:"High — money, health, legal, safety, or reputation"}]))}`)}
      ${y("The checks",r.map(i=>`
        <div class="rowitem" style="margin-top:var(--s-2)">
          <div class="field">
            <label>${n(i.q)}</label>
            ${$(`checks.${i.k}`,e.checks[i.k],[{v:"yes",l:"Yes — I have done this"},{v:"no",l:"No"},{v:"na",l:"Not applicable"},{v:"unknown",l:"Not checked yet"}])}
            <span class="hint">${n(i.hint)}</span>
          </div>
        </div>`).join(""))}
      ${y("Notes",g("What did you find?",b("notes",e.notes,"Where the original led, what the numbers actually said, who funded it.",3)))}`},output(e){if(!e.claim.trim())return v("Verdict",T("Write the claim","Score and verdict appear as you work through the checks."));const i=r.filter(t=>e.checks[t.k]!=="na"),u=i.reduce((t,d)=>t+d.w,0)||1,m=i.filter(t=>e.checks[t.k]==="yes").reduce((t,d)=>t+d.w,0),o=Math.round(m/u*100),a=i.filter(t=>e.checks[t.k]==="no"),c=i.filter(t=>e.checks[t.k]==="unknown"),q=e.checks.primary==="no"||e.checks.primary==="unknown",k=e.checks.applies==="no";let s,l,h;k?(s="Does not apply to you",l="danger",h="You have said it does not apply to your situation. That settles it regardless of how well-sourced it is. Correct elsewhere is not correct here — this is the single most common way accurate information causes bad decisions."):o>=80?(s="Well checked",l="success",h="This has survived real scrutiny. You can act on it and say why. Keep the note about what would overturn it — a conclusion you cannot imagine being wrong has stopped being a conclusion."):o>=55?(s="Partly checked",l="info",h="Reasonable for a low-stakes decision. Before anything expensive or hard to reverse, close the remaining gaps below."):o>=30?(s="Thin",l="warning",h="This is not yet knowledge — it is a plausible claim. Do not repeat it as fact, and do not let it drive a decision you cannot undo."):(s="Unverified",l="danger",h="You have effectively not checked this. Treat it as a rumour: it may well be true, but nothing should rest on it and you should not pass it on without saying you have not checked.");const W=e.stakes==="high"&&o<80;return v("Verdict",`
      <div class="row" style="gap:var(--s-5);align-items:center;margin-bottom:var(--s-4)">
        ${x(o,o+"%")}
        <div>
          <p class="eyebrow">${n(s)}</p>
          <p class="t-small muted">${m} of ${u} weighted checks passed${i.length<r.length?` (${r.length-i.length} not applicable)`:""}.</p>
        </div>
      </div>

      ${p(s,n(h),l)}

      ${W?`<div style="margin-top:var(--s-3)">${p("High stakes, low verification","You marked this as affecting money, health, legal standing or safety — and it is not well checked. This is exactly the combination that causes expensive mistakes. Either verify properly or choose the option that survives the claim being false.","danger")}</div>`:""}

      ${q&&!k?`<div style="margin-top:var(--s-3)">${p("You have not seen the original","Everything else is secondary to this. Find the actual source and read the sentence in context — a startling number of confident claims dissolve at this step, and AI-generated citations frequently do not exist at all.","warning")}</div>`:""}

      ${a.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Failed checks</p>
        <ul class="badlist">${a.map(t=>`<li>${n(t.fail)}</li>`).join("")}</ul></div>`:""}

      ${c.length?`<div style="margin-top:var(--s-4)"><p class="eyebrow">Still to do — in this order</p>
        <ul class="marklist">${c.sort((t,d)=>d.w-t.w).map(t=>`<li>${n(t.q)}</li>`).join("")}</ul></div>`:""}

      ${e.notes.trim()?`<div style="margin-top:var(--s-3)">${p("Your findings",n(e.notes),"info")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${n(f)}</p>`)},summary(e){const i=r.filter(a=>e.checks[a.k]!=="na"),u=i.reduce((a,c)=>a+c.w,0)||1,m=i.filter(a=>e.checks[a.k]==="yes").reduce((a,c)=>a+c.w,0),o={yes:"PASS",no:"FAIL",na:"n/a ",unknown:"????"};return[I("Information Credibility Checker"),`Claim: ${e.claim||"(not stated)"}`,`Source: ${e.source||"(not stated)"}`,`Stakes: ${e.stakes}`,w("Checks"),...r.map(a=>`  [${o[e.checks[a.k]]}] ${a.q}`),"",`Score: ${Math.round(m/u*100)}% of weighted checks`,w("Notes"),`  ${e.notes||"(none)"}`,"",f].join(`
`)}};export{D as default};
