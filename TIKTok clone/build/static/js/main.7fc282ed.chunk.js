(this.webpackJsonptiktok=this.webpackJsonptiktok||[]).push([[0],{35:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},46:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(10),r=s.n(c),a=(s(35),s(13)),i=s.n(a),o=s(22),j=s(4),l=(s(37),s(38),s(39),s(23)),d=s.n(l),u=s(1);var b=function(e){var t=e.channel,s=e.description;return Object(u.jsxs)("div",{className:"videoFooter",children:[Object(u.jsxs)("div",{className:"videoFooter__text",children:[Object(u.jsxs)("h3",{children:["@",t]}),Object(u.jsx)("p",{children:s}),Object(u.jsx)("div",{className:"videoFooter__ticker",children:Object(u.jsx)(d.a,{className:"videoFooter_icon"})})]}),Object(u.jsx)("img",{className:"videoFooter__record",src:"https://static.thenounproject.com/png/934821-200.png"})]})},p=(s(46),s(25)),h=s.n(p),v=s(27),O=s.n(v),x=s(28),f=s.n(x),m=s(26),k=s.n(m);var g=function(e){var t=e.likes,s=e.shares,c=e.messages,r=Object(n.useState)(!1),a=Object(j.a)(r,2),i=a[0],o=a[1];return Object(u.jsxs)("div",{className:"VideoSidebar",children:[Object(u.jsxs)("div",{className:"videoSidebar__button",children:[i?Object(u.jsx)(h.a,{fontSize:"large",onClick:function(e){return o(!1)}}):Object(u.jsx)(k.a,{fontSize:"large",onClick:function(e){return o(!0)}}),Object(u.jsx)("p",{children:i?t+1:t})]}),Object(u.jsxs)("div",{className:"videoSidebar__button",children:[Object(u.jsx)(O.a,{fontSize:"large"}),Object(u.jsx)("p",{children:c})]}),Object(u.jsxs)("div",{className:"videoSidebar__button",children:[Object(u.jsx)(f.a,{fontSize:"large"}),Object(u.jsx)("p",{children:s})]})]})};var _=function(e){var t=e.url,s=e.channel,c=e.description,r=e.song,a=e.likes,i=e.messages,o=e.shares,l=Object(n.useState)(!1),d=Object(j.a)(l,2),p=d[0],h=d[1],v=Object(n.useRef)(null);return Object(u.jsxs)("div",{className:"video",children:[Object(u.jsx)("video",{onClick:function(){p?(v.current.pause(),h(!1)):(v.current.play(),h(!0))},ref:v,className:"video__player",loop:!0,src:t}),Object(u.jsx)(b,{channel:s,description:c,song:r}),Object(u.jsx)(g,{likes:a,shares:o,messages:i})]})},N=s(29),S=s.n(N).a.create({baseURL:"https://mern--tiktok-backend.herokuapp.com/"});var y=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/v2/posts");case 2:return t=e.sent,c(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(s),Object(u.jsx)("div",{className:"app",children:Object(u.jsx)("div",{className:"app__videos",children:s.map((function(e){var t=e.url,s=e.channel,n=e.description,c=e.song,r=e.likes,a=e.messages,i=e.shares;return Object(u.jsx)(_,{url:t,channel:s,description:n,song:c,likes:r,messages:a,shares:i})}))})})};r.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7fc282ed.chunk.js.map