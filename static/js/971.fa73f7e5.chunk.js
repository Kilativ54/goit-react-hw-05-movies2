"use strict";(self.webpackChunkgoit_react_hw_05_movies2=self.webpackChunkgoit_react_hw_05_movies2||[]).push([[971],{545:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,u=e(689),i=e(168),c=e(686),o=e(87),s=c.Z.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  list-style: none;\n  padding: 0;\n"]))),p=(0,c.Z)(o.rU)(a||(a=(0,i.Z)(["\n  font-size: 18px;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    font-size: 20px;\n    color: #c25151;\n  }\n"]))),f=e(184);var l=function(n){var t=n.movies,e=(0,u.TH)();return(0,f.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.title;return r&&(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"/movies/".concat(t),state:{from:e},children:r},t)},t)}))})}},436:function(n,t,e){e.d(t,{WK:function(){return p},Y5:function(){return l},nA:function(){return h},wr:function(){return o}});var r=e(861),a=e(687),u=e.n(a),i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWIwYzYzN2RhYzFmZmFlMThjZDRmYmRjMjc1ZWFhOSIsInN1YiI6IjY0OTVjMzgzZDVmZmNiMDBlMjA1NzIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9lPMVl4nfFlN901y3yy6-AcoB6SAlcKg0T-FQPITKg"}};function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/day?language=en-US",c);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t,"&language=en-US"),c);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?language=en-US"),c);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/").concat(e,"?language=en-US"),c);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},971:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,u,i=e(433),c=e(439),o=e(791),s=e(689),p=e(87),f=e(545),l=e(168),d=e(686),h=d.Z.form(r||(r=(0,l.Z)(["\n  display: flex;\n  gap: 10px;\n  padding-top: 20px;\n"]))),x=d.Z.input(a||(a=(0,l.Z)(["\n  /* margin-right: 10px; */\n  width: 250px;\n"]))),m=d.Z.button(u||(u=(0,l.Z)(["\n  padding: 5px;\n  border: 1px solid #978a8a;\n  border-radius: 2px;\n\n  &:hover,\n  &:focus {\n    background-color: #c25151;\n\n    color: #fff;\n    cursor: pointer;\n  }\n"]))),v=e(184);var g=function(n){var t=n.onSubmit,e="";return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(h,{action:"",onSubmit:function(n){n.preventDefault();var r=n.currentTarget;e=r.elements.query.value,t(e),r.reset()},children:[(0,v.jsx)(x,{type:"text",name:"query",defaultValue:e}),(0,v.jsx)(m,{type:"submit",children:"Search"})]})})},Z=e(436);var y=function(){var n,t=(0,s.TH)(),e=(0,o.useState)([]),r=(0,c.Z)(e,2),a=r[0],u=r[1],l=(0,p.lr)(),d=(0,c.Z)(l,2),h=d[0],x=d[1],m=null!==(n=h.get("query"))&&void 0!==n?n:"";return(0,o.useEffect)((function(){m&&(0,Z.WK)(m).then((function(n){return u((0,i.Z)(n))}))}),[m]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{location:t,onSubmit:function(n){x({query:n})}}),(0,v.jsx)(f.Z,{movies:a})]})}}}]);
//# sourceMappingURL=971.fa73f7e5.chunk.js.map