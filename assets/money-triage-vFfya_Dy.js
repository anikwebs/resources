import{n as a,stamp as A,head as k,uid as v,outPanel as x,emptyOut as C,callout as u,tblWrap as D,meter as P,r1 as S,text as E,select as I,number as g,delBtn as N,panel as T,addBtn as R}from"./kit-B_He1EBw.js";import{J as h,e as y}from"./views-CF56ohTL.js";import"./data-CbaeBgJo.js";const $="This is triage, not budgeting. The purpose is not to balance a spreadsheet — it is to work out which obligations can actually hurt you, and in what order. Not all debts are equal, and treating them as if they are is how people pay a credit card while losing their home.",i={home:{rank:1,label:"Rent / mortgage",risk:"losing your home",why:"Non-payment leads to possession proceedings. Nothing else on this list can make you homeless."},utility:{rank:2,label:"Energy / water",risk:"disconnection",why:"Suppliers can disconnect or force a prepayment meter, and getting reconnected costs more than the arrears did."},tax:{rank:2,label:"Tax / council tax",risk:"enforcement agents, wage deduction",why:"Tax and local authority debts carry collection powers most lenders do not have — deduction straight from wages or benefits."},court:{rank:2,label:"Court fine / maintenance",risk:"enforcement, sometimes imprisonment",why:"Court-ordered obligations escalate faster than commercial debt and can carry criminal consequences."},secured:{rank:3,label:"Secured loan / car finance",risk:"losing the asset",why:"The lender can repossess the thing the loan is secured against — which may be how you get to work."},card:{rank:4,label:"Credit card / overdraft",risk:"interest, credit file damage",why:"Unsecured. Expensive and unpleasant, but it cannot take your home, your liberty or your car."},personal:{rank:5,label:"Family / friend",risk:"relationship damage",why:"Real, but not legally enforceable in the same way. It is almost always the wrong thing to pay first, however bad that feels."}},W=Object.entries(i).map(([t,r])=>({v:t,l:r.label})),q={id:"money-triage",name:"Money Triage",blurb:"Work out which bills can actually hurt you, and in what order to pay them.",icon:"money",accent:"signal",group:"Money",purpose:'Turns "I cannot pay everything this month" into a defensible order of payment based on consequence rather than pressure.',when:["There is not enough money to cover everything this month","Several people are chasing you at once","You are about to pay whoever contacted you most recently"],reads:$,initial:()=>({income:0,essentials:0,debts:[{id:v(),name:"",kind:"home",owed:0,min:0},{id:v(),name:"",kind:"card",owed:0,min:0}]}),form(t){const r=t.debts.map((n,l)=>`
      <div class="rowitem" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1.2fr) 88px 88px 34px;margin-top:${l?"var(--s-2)":"0"}">
        ${E(`debts.${l}.name`,n.name,"Who is owed")}
        ${I(`debts.${l}.kind`,n.kind,W)}
        ${g(`debts.${l}.owed`,n.owed,{min:0,max:1e7,ph:"Owed"})}
        ${g(`debts.${l}.min`,n.min,{min:0,max:1e6,ph:"Due now"})}
        ${t.debts.length>1?N("del",l,"Remove this debt"):"<span></span>"}
      </div>`).join("");return`
      ${T("What is actually coming in",`
        <div class="row-wrap" style="gap:var(--s-4)">
          <div class="field grow" style="min-width:170px"><label>Money in, this month</label>
            ${g("income",t.income,{min:0,max:1e7})}
            <span class="hint">Wages, benefits, anything reliable. Not what you are hoping for.</span></div>
          <div class="field grow" style="min-width:170px"><label>Food, transport, medication</label>
            ${g("essentials",t.essentials,{min:0,max:1e7})}
            <span class="hint">Survival costs. These come before every creditor — you cannot repay anyone if you cannot eat or get to work.</span></div>
        </div>`)}
      ${T("Everyone who wants paying",`
        <div class="rowitem" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1.2fr) 88px 88px 34px">
          <span class="t-meta faint">Creditor</span><span class="t-meta faint">Type</span>
          <span class="t-meta faint">Total owed</span><span class="t-meta faint">Due now</span><span></span>
        </div>
        ${r}
        <div class="row" style="margin-top:var(--s-3)">${R("add","Add another")}</div>
        <p class="t-caption faint" style="margin-top:var(--s-3)">Type matters more than amount. Choose it honestly — it is what decides the order below.</p>`)}`},output(t){const r=t.debts.filter(e=>(e.name||"").trim()||a(e.owed)>0||a(e.min)>0);if(!a(t.income)&&!r.length)return x("The order to pay in",C("Add your income and one debt","The priority order appears as soon as there is something to sort."));const n=a(t.income)-a(t.essentials),l=r.reduce((e,s)=>e+a(s.min),0),m=r.reduce((e,s)=>e+a(s.owed),0),p=n-l,o=r.slice().sort((e,s)=>i[e.kind].rank-i[s.kind].rank||a(s.min)-a(e.min));let c=Math.max(0,n);const d=o.map(e=>{const s=a(e.min),f=Math.min(c,s);return c-=f,{...e,due:s,pay:f,short:s-f}}),M=d.filter(e=>e.short<=0).length,b=d.filter(e=>e.short>0&&i[e.kind].rank<=2),w=n>0&&m>0?m/n:0;return x("The order to pay in",`
      <div class="stats" style="margin-bottom:var(--s-4)">
        <div class="stat"><b>${h(Math.round(n))}</b><span>left after essentials</span></div>
        <div class="stat"><b>${h(Math.round(l))}</b><span>demanded this month</span></div>
        <div class="stat"><b>${M}/${d.length}</b><span>fully covered</span></div>
      </div>

      ${n<=0?u("There is nothing left after essentials","This is not a payment-order problem and prioritising will not solve it. Contact a free debt advice service today — they can negotiate holds, set up affordable arrangements and check what you are entitled to and not claiming. Do not take a short-term loan to bridge this.","danger"):p<0?u(`Short by ${h(Math.round(-p))} this month`,"You cannot pay everyone, which is the normal starting point for triage. The order below limits the damage: pay the top in full before anything lower, and contact the ones you cannot pay before they contact you.","warning"):u("Everything demanded is coverable",`You have ${h(Math.round(p))} spare after meeting every minimum. Put it against the highest-priority balance rather than spreading it thinly, and set a standing order so next month is not decided by whoever calls first.`,"success")}

      <div style="margin-top:var(--s-5)">
        <p class="eyebrow">Pay in this order</p>
        ${D(`
          <thead><tr><th class="n">#</th><th>Creditor</th><th>Why it ranks here</th><th class="n">Due</th><th class="n">Pay now</th></tr></thead>
          <tbody>${d.map((e,s)=>`
            <tr${s===0&&d.length>1?' class="lead"':""}>
              <td class="n">${s+1}</td>
              <td><strong>${y(e.name||i[e.kind].label)}</strong><br>
                  <span class="t-meta faint">${y(i[e.kind].label)} · risk: ${y(i[e.kind].risk)}</span></td>
              <td class="t-small">${y(i[e.kind].why)}</td>
              <td class="n">${h(Math.round(e.due))}</td>
              <td class="n">${e.pay>0?h(Math.round(e.pay)):"—"}${e.short>0?`<br><span class="t-meta faint">short ${h(Math.round(e.short))}</span>`:""}</td>
            </tr>`).join("")}</tbody>`)}
      </div>

      ${b.length?`<div style="margin-top:var(--s-4)">${u("Priority debts are unpaid",`${b.map(e=>y(e.name||i[e.kind].label)).join(", ")} — these carry the powers that do lasting damage: possession, disconnection, deduction from wages. Do not go silent on them. Call first, say plainly that you cannot pay the full amount, and offer something. An arrangement you proposed is treated completely differently from a payment you simply missed.`,"danger")}</div>`:""}

      ${w>0?`<div style="margin-top:var(--s-4)">
        <p class="eyebrow">Total debt against monthly capacity</p>
        ${P(Math.min(100,n*12/m*100),!0)}
        <p class="t-small muted" style="margin-top:var(--s-2)">At ${h(Math.round(n))} a month against ${h(Math.round(m))} owed, clearing everything takes roughly <strong>${S(w)} months</strong> before any interest. ${w>60?"Above about sixty months this stops being a budgeting problem — get advice about the formal options available to you, because there are more than most people think.":"That is a real horizon rather than a vague dread, which is the point of writing it down."}</p>
      </div>`:""}

      ${d.some(e=>e.kind==="personal"&&e.pay>0)&&b.length?`<div style="margin-top:var(--s-3)">${u("You are paying a person while a priority debt goes short","This is the most common and most expensive instinct in the whole exercise, because the social cost is immediate and the legal cost is not. Tell them the truth and pay the priority debt.","warning")}</div>`:""}

      <div class="hr"></div>
      <p class="t-caption faint">${y($)}</p>`)},actions:{add:t=>t.debts.push({id:v(),name:"",kind:"card",owed:0,min:0}),del:(t,{i:r})=>t.debts.splice(r,1)},summary(t){const r=t.debts.filter(o=>(o.name||"").trim()||a(o.min)>0),n=a(t.income)-a(t.essentials),l=r.slice().sort((o,c)=>i[o.kind].rank-i[c.kind].rank||a(c.min)-a(o.min));let m=Math.max(0,n);const p=l.map((o,c)=>{const d=Math.min(m,a(o.min));return m-=d,`  ${c+1}. ${o.name||i[o.kind].label} (${i[o.kind].label}) — due ${Math.round(a(o.min))}, pay ${Math.round(d)}`});return[A("Money Triage"),`Income: ${Math.round(a(t.income))}`,`Essentials: ${Math.round(a(t.essentials))}`,`Available for creditors: ${Math.round(n)}`,k("Pay in this order"),...p.length?p:["  (nothing entered)"],k("The rule"),"  Priority = what they can legally do to you, not how loudly they ask.","  Home and utilities before cards. Never borrow to pay a card.","  An arrangement you offered beats a payment you missed.","",$].join(`
`)}};export{q as default};
