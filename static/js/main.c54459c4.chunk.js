(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={title:"Statistics_title__qJxZY",item:"Statistics_item__Vh2qR"}},function(e,t,a){e.exports={title:"FeedbackOptions_title__110W1",btn:"FeedbackOptions_btn__1LusQ FeedbackOptions_title__110W1"}},,,,,,function(e,t,a){e.exports={section:"Section_section__1lvrV"}},function(e,t,a){e.exports={message:"Notification_message__1vxE7"}},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a(5),i=a.n(s),r=(a(18),a(6)),o=a(7),l=a(8),b=a(12),d=a(11),j=a(3),u=a.n(j),h=function(e){e.options;var t=e.onLeaveFeedback;return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:u.a.title,children:"Please leave feedback"}),Object(n.jsx)("button",{className:u.a.btn,type:"button",name:"good",onClick:t,children:"Good"}),Object(n.jsx)("button",{className:u.a.btn,type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(n.jsx)("button",{className:u.a.btn,type:"button",name:"bad",onClick:t,children:"Bad"})]})},m=a(2),O=a.n(m);var x=function(e){var t=e.good,a=e.neutral,c=e.bad;return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:O.a.title,children:"Statistics"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{className:O.a.item,children:["Good: ",t]}),Object(n.jsxs)("li",{className:O.a.item,children:["Neutral: ",a]}),Object(n.jsxs)("li",{className:O.a.item,children:["Bad: ",c]}),Object(n.jsxs)("li",{className:O.a.item,children:["Total: ",t+c+a]}),Object(n.jsxs)("li",{className:O.a.item,children:["Positive feedback: ",Number.parseInt(t/(t+a+c)*100),"%"]})]})]})},v=a(9),p=a.n(v);var f=function(e){var t=e.title,a=e.children;return Object(n.jsxs)("div",{className:p.a.section,children:[Object(n.jsx)("h1",{children:t}),a]})},_=a(10),k=a.n(_),N=function(e){var t=e.message;return Object(n.jsx)("div",{className:k.a.message,children:t})},g=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){var a=t.target.name;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(n.jsxs)(f,{title:"",children:[Object(n.jsx)(h,{options:this.state,onLeaveFeedback:this.handleClick}),t+a+c>0?Object(n.jsx)(x,{good:t,neutral:a,bad:c}):Object(n.jsx)(N,{message:"No feedback given"})]})}}]),a}(c.Component);i.a.render(Object(n.jsx)(g,{}),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.c54459c4.chunk.js.map