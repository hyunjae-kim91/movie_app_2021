(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),r=s.n(i),c=s(4),o=s.n(c),m=s(14),l=s(15),j=s(16),d=s(19),v=s(18),u=s(17),h=s.n(u),b=(s(43),s(0));var p=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.rating,r=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:n,alt:s,title:s}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:s}),Object(b.jsx)("h5",{className:"movie__year",children:t}),Object(b.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(b.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(b.jsx)("p",{className:"movie__summary",children:a.slice(0,100)}),Object(b.jsx)("p",{className:"movie__rating",children:i})]})]})},_=(s(45),function(e){Object(d.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("div",{children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:s.map((function(e){return Object(b.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,genres:e.genres},e.id)}))})}),")"]})}}]),s}(n.a.Component));r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d73284af.chunk.js.map