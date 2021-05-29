(this["webpackJsonpreact-expense-tracker-demo"]=this["webpackJsonpreact-expense-tracker-demo"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(14),n(5)),l=n(2),i=n(1),r=(n(15),n(0)),o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getFullYear(),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:n}),Object(r.jsx)("div",{className:"expense-date__day",children:a})]})},u=(n(17),function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})}),j=(n(18),function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:[e.amount,"EUR"]})]})]})})}),d=(n(19),function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),b=(n(20),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=n(9),h=(n(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),m=(n(22),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(h,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),O=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(m,{dataPoints:n})},v=(n(23),function(e){var t=Object(i.useState)("2021"),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(b,{selected:a,onChangeFilter:function(e){c(e)}}),Object(r.jsx)(O,{expenses:s}),Object(r.jsx)(d,{items:s})]})}),p=n(7),f=(n(24),function(e){var t,n,a=["Refrigerator","Book","Washing Machine","Keyboard","Graphics Card","Optic Cable","Saxophone","Cigarettes","Tooth Paste","Newest Manga Chapter"],c=a[Math.floor(Math.random()*a.length)],s=Math.floor(500*Math.random())+1,l=(t=new Date(2019,0,1),n=new Date,new Date(t.getTime()+Math.random()*(n.getTime()-t.getTime()))).toISOString().slice(0,10);return Object(r.jsx)("button",{className:"dummy-button",onClick:function(t){e.onGenerateDummyData(c,s,l)},children:"Dummy Data"})}),g=(n(25),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(""),o=Object(l.a)(s,2),u=o[0],j=o[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),x=b[0],h=b[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+u,date:new Date(x)};e.onSaveExpenseData(n),c(""),j(""),h("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){j(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){h(e.target.value)}})]})]}),Object(r.jsx)("div",{className:"new-expense__actions",children:Object(r.jsx)("button",{type:"submit",children:"Add Expense"})})]}),Object(r.jsx)(f,{onGenerateDummyData:function(e,t,n){c(e),j(t),h(n)}})]})}),N=(n(26),function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add new expense"}),a&&Object(r.jsx)(g,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})}),_=[{id:"0",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"1",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"2",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"3",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],w=function(){var e=Object(i.useState)(_),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(v,{items:n})]})};c.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.2bf83d70.chunk.js.map