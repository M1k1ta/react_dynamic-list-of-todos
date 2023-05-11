(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(2),l=c(1),o=c.n(l),i=(c(11),c(12),c(5)),d=c(4),r=c.n(d),j=c(0),h=o.a.memo((function(e){var t=e.todo,c=e.isTodoModal,a=e.handleDetailsOpen,s=t.id,n=t.title,l=t.completed;return Object(j.jsxs)("tr",{"data-cy":"todo",children:[Object(j.jsx)("td",{className:"is-vcentered",children:s}),Object(j.jsx)("td",{className:"is-vcentered",children:l&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!l,"has-text-success":l}),children:n})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(t)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":!c,"fa-eye-slash":c})})})})})]})}));function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u,m=o.a.memo((function(e){var t=e.todos,c=e.onChange,a=e.isTodoModal,s=e.onClose,n=function(e){var t;s(!0),(t=e.userId,b("/users/".concat(t))).then((function(t){return c(Object(i.a)(Object(i.a)({},e),{},{user:t}))}))};return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(h,{todo:e,isTodoModal:a,handleDetailsOpen:n},e.id)}))})]})})),O=o.a.memo((function(e){var t=e.query,c=e.onQueryChange,a=e.option,s=e.onOptionChange;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return s(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})})),x=(c(14),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),f=function(e){var t=e.todo,c=e.onChange,a=e.onClose;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),t?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){a(!1),c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(t.user.email),children:t.user.name})]})]})]}):Object(j.jsx)(x,{})]})};!function(e){e.all="all",e.completed="completed",e.active="active"}(u||(u={}));var p=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(""),o=Object(n.a)(s,2),i=o[0],d=o[1],r=Object(l.useState)("all"),h=Object(n.a)(r,2),p=h[0],v=h[1],N=Object(l.useState)(null),y=Object(n.a)(N,2),g=y[0],C=y[1],k=Object(l.useState)(!1),w=Object(n.a)(k,2),S=w[0],T=w[1];Object(l.useEffect)((function(){b("/todos").then((function(e){a(e)}))}),[]);var _=function(e){C(e)},L=function(e){T(e)},M=c.filter((function(e){var t=e.title,c=e.completed,a=t.toLowerCase(),s=i.toLowerCase().trim(),n=a.includes(s);switch(p){case u.active:return n&&!c;case u.completed:return n&&c;default:return n}}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(O,{query:i,onQueryChange:function(e){d(e)},option:p,onOptionChange:function(e){v(e)}})}),Object(j.jsx)("div",{className:"block",children:c.length>0?Object(j.jsx)(m,{todos:M,onChange:_,isTodoModal:S,onClose:L}):Object(j.jsx)(x,{})})]})})}),S&&Object(j.jsx)(f,{todo:g,onChange:_,onClose:L})]})};s.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.142e2608.chunk.js.map