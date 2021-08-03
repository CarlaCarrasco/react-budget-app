(this["webpackJsonpreact-budget-app"]=this["webpackJsonpreact-budget-app"]||[]).push([[0],{75:function(e,t,n){},76:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),i=n.n(o),s=(n(75),n(12)),r=(n(76),n(115)),l=n(120),d=n(121),u=n(127),j=n(46),x=n(44),b=n.n(x),m=n(28),f=n.n(m),p=n(4),h=Object(r.a)({root:{minWidth:200,height:100,background:"#1BDD826B"},label:{},title:{fontSize:20,fontWeight:500,letterSpacing:1,marginBottom:5,marginLeft:5},pos:{marginBottom:12},editIcon:{marginLeft:3,marginTop:5,color:"#5f5f5f",fontSize:"1rem"},flex:{display:"flex",flexDirection:"row",justifyContent:"center",maxHeight:30},h5:{marginLeft:5},textField:{marginTop:-10}}),O=function(e){var t=h(),n=Object(a.useState)(!1),c=Object(s.a)(n,2),o=c[0],i=c[1],r=function(){return i(!o)};return Object(p.jsx)(l.a,{className:t.root,variant:"outlined",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(j.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:"Budget"}),o?Object(p.jsxs)("div",{className:t.flex,children:[Object(p.jsx)(u.a,{className:t.textField,id:"standard-basic",name:"expense",label:"Add expense...",onChange:function(t){return e.setBudget(t.target.value)},onKeyPress:function(e){"Enter"===e.key&&r()},type:"number"}),Object(p.jsx)(f.a,{className:t.editIcon,onClick:r})]}):Object(p.jsxs)("div",{className:t.flex,children:[Object(p.jsx)(j.a,{className:t.h5,variant:"h5",component:"h2",children:parseFloat(e.budgetTotal).toFixed(2)}),Object(p.jsx)(b.a,{className:t.editIcon,onClick:r})]})]})})},g=Object(r.a)({root:{minWidth:200,height:100,background:"#f6826f6e"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:20,fontWeight:500,letterSpacing:1,marginBottom:5,marginLeft:5},pos:{marginBottom:12}}),v=function(e){var t=g(),n=e.addExpense.reduce((function(e,t){return e+t.amount}),0);return Object(p.jsx)(l.a,{className:t.root,variant:"outlined",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(j.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:"Expenses"}),Object(p.jsx)(j.a,{variant:"h5",component:"h2",children:"$"+parseFloat(n).toFixed(2)})]})})},N=Object(r.a)({root:{minWidth:200,height:100,background:"#cecece"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:20,fontWeight:500,letterSpacing:1,marginBottom:5,marginLeft:5},pos:{marginBottom:12}}),y=function(e){var t=N(),n=e.addExpense,a=e.budgetTotal,c=n.reduce((function(e,t){return e+t.amount}),0);return Object(p.jsx)(l.a,{className:t.root,variant:"outlined",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(j.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:"Balance"}),Object(p.jsx)(j.a,{variant:"h5",component:"h2",children:"$"+parseFloat(a-c).toFixed(2)})]})})},S=n(45),B=n(122),C=Object(r.a)((function(e){return{root:{maxWidth:"40vw",margin:"auto",display:"flex",flexDirection:"row"},addIcon:{padding:"5px",border:"1px solid #7e7e7e",color:"#7e7e7e"}}})),E=function(e){e.addExpense;var t=e.setExpense,n=Object(a.useState)(""),c=Object(s.a)(n,2),o=c[0],i=c[1],r=Object(a.useState)(""),l=Object(s.a)(r,2),d=l[0],j=l[1],x=C(),b=function(e){t((function(e){return[].concat(Object(S.a)(e),[{expense:o,amount:d}])})),j(""),i("")};return Object(p.jsxs)("form",{className:x.root,noValidate:!0,autoComplete:"off",onSubmit:b,children:[Object(p.jsx)(u.a,{fullWidth:!0,id:"standard-basic",name:"expense",label:"Add expense...",className:"input-expense",value:o,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)(u.a,{id:"standard-basic",name:"expense",label:"Amount",className:"exp-amount",value:d,type:"number",onChange:function(e){return j(parseFloat(e.target.value))},onKeyPress:function(e){"Enter"===e.key&&b()}}),Object(p.jsx)(B.a,{onClick:function(e){return b()},className:"submit-btn",children:Object(p.jsx)(f.a,{className:x.addIcon,type:"submit"})})]})},k=Object(r.a)((function(e){return{h2:{marginTop:"0"},flex:{display:"flex",flexDirection:"row",justifyContent:"center"},editIcon:{margin:"5px 0 0 10px",color:"#5f5f5f",fontSize:"1.2rem"},textField:{maxWidth:500}}})),F=function(e){var t=k(),n=Object(a.useState)(!1),c=Object(s.a)(n,2),o=c[0],i=c[1],r=Object(a.useState)("What is your budget for?"),l=Object(s.a)(r,2),d=l[0],j=l[1],x=function(){return i(!o)};return o?Object(p.jsxs)("div",{className:t.flex,children:[Object(p.jsx)(u.a,{className:t.textField,fullWidth:!0,id:"standard-basic",name:"expense",label:"Add expense...",onChange:function(e){return j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&x()}}),Object(p.jsx)(f.a,{className:t.editIcon,onClick:x})]}):Object(p.jsxs)("div",{className:t.flex,children:[Object(p.jsx)("h2",{className:t.h2,children:d}),Object(p.jsx)(b.a,{className:t.editIcon,onClick:x})]})},W=n(119),I=n(123),T=n(125),L=n(124),w=n(61),D=n.n(w),A=Object(r.a)((function(e){return{root:{maxWidth:"400px",margin:"auto",display:"flex",flexDirection:"row"},addIcon:{marginTop:"10px",marginLeft:"10px",padding:"5px",border:"1px solid #7e7e7e",color:"#7e7e7e"},ul:{minWidth:"30vw"}}})),z=function(e){var t=e.addExpense,n=e.setExpense,a=t.map((function(e,a){return Object(p.jsxs)(I.a,{children:[Object(p.jsx)(L.a,{primary:e.expense,secondary:"$".concat(e.amount)}),Object(p.jsx)(T.a,{children:Object(p.jsx)(B.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){t.splice(e,1),n((function(e){return Object(S.a)(e)}))}(a)},children:Object(p.jsx)(D.a,{})})})]},a)})),o=A(),i=c.a.useState(!1),r=Object(s.a)(i,2),l=r[0];r[1];return Object(p.jsx)("div",{className:o.root,noValidate:!0,autoComplete:"off",children:Object(p.jsx)(W.a,{dense:l,className:o.ul,children:a})})},P=n(87),$=n(62),K=n(126);var J=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("0.00"),i=Object(s.a)(o,2),r=i[0],l=i[1],d=Object($.a)({overrides:{MuiFormLabel:{root:{"&$focused":{color:"#c5c5c59",fontWeight:"bold"}}}}});return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Budget App"}),Object(p.jsx)(P.a,{elevation:12,className:"paper-main",children:Object(p.jsxs)(K.a,{theme:d,children:[Object(p.jsx)(F,{}),Object(p.jsxs)("div",{className:"totals",children:[Object(p.jsx)(O,{budgetTotal:r,setBudget:l}),Object(p.jsx)(v,{addExpense:n}),Object(p.jsx)(y,{addExpense:n,budgetTotal:r})]}),Object(p.jsx)(z,{addExpense:n,setExpense:c}),Object(p.jsx)(E,{addExpense:n,setExpense:c})]})})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(J,{}),document.getElementById("root")),V()}},[[84,1,2]]]);
//# sourceMappingURL=main.1c6907ec.chunk.js.map