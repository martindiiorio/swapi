(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},35:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(25),r=a.n(s);a(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);var i=a(5),l=a(6),o=a(8),m=a(7),u=a(9),p=a(64),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"bg-dark nav justify-content-center py-2 mb-3"},c.a.createElement(p.a,{to:"/"},c.a.createElement("svg",{className:"nav-item",width:"90px",height:"41.707px",viewBox:"5.222 537.035 90 41.707"},c.a.createElement("path",{fill:"#FFFFFF",d:"M77.052,564.098c0.095,1.718,0.411,3.878,3.265,6.473c2.603,2.364-1.289,1.716-1.68,1.716 c0,0-6.101-0.007-7.687-0.007c-1.584,0-2.53-0.952-2.53-0.952c2.15,0,4.057-3.132,4.057-6.338c0-3.207-3.132-5.939-5.641-5.939 c-2.51,0-14.038,0-14.038,0v12.941H51.11l-3.655-13.051H27.707l-1.981,6.604l-1.98-6.604h-7.661l-1.716,6.604l-1.849-6.604H5.222 l5.844,19.811h5.943l2.869-9.376l2.546,9.376h5.811l3.875-13.208h2.962l-3.898,13.204h6.509l1.057-2.773h6.868l1.019,2.773 l13.305-0.013v-6.481c0,0,3.038,3.565,4.622,5.02c1.584,1.452,1.717,1.584,3.867,1.584l15.605-0.104 c2.245,0,5.641-2.076,5.641-5.51c0-1.384,0.027-2.144-1.596-3.972l-2.471-2.928c-1.416-1.319-0.122-1.458,1.066-1.458h8.556v-5.944 H81.875C78.441,558.941,76.957,562.382,77.052,564.098z M40.192,571.22l2.246-7.263l2.112,7.263H40.192z M64.458,567.631 c-1.812,0-4.527,0-4.527,0v-3.565c0,0,3.074,0,4.527,0C66.533,564.065,66.892,567.631,64.458,567.631z"}),c.a.createElement("path",{fill:"#FFFFFF",d:"M86.534,550.237c-2.509,0-2.509-0.924-2.509-0.924c2.15,0,4.057-3.132,4.057-6.34 c0-3.207-3.132-5.938-5.642-5.938c-2.509,0-14.037,0-14.037,0v13.202h-1.711l-3.697-13.202H22.557 c-3.435,0-5.113,3.297-5.019,5.015c0.096,1.716,0.411,3.878,3.265,6.472c2.603,2.365-1.289,1.716-1.681,1.716 c-1.98,0-13.899,0-13.899,0v6.604c0,0,17.07,0,19.315,0s5.113-2.076,5.113-5.511c0-1.379,0.529-2.282-1.095-4.108l-2.471-2.928 c-1.416-1.32,0.168-1.32,1.358-1.32c0.66,0,8.156,0,8.156,0v13.866h6.466v-13.866h8.744l-4.096,13.867h6.509l1.057-2.773h6.867 l1.02,2.773h13.371v-6.604c0,0,3.038,3.565,4.622,5.02c1.584,1.451,1.716,1.584,3.868,1.584c2.15,0,11.197,0,11.197,0v-6.604 C95.222,550.237,89.044,550.237,86.534,550.237z M55.731,549.313l2.245-7.264l2.112,7.264H55.731z M80.063,545.615 c-1.812,0-4.528,0-4.528,0v-3.565c0,0,3.074,0,4.528,0C82.138,542.05,82.497,545.615,80.063,545.615z"}))))}}]),t}(n.Component),h=a(65),f=a(63),v=a(29),b=a(16),E=a(12),j=a(11),y=a.n(j),g=a(27),N=a(28),O=a(42),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.films;return c.a.createElement("div",{className:"row"},e.map(function(e,t){return c.a.createElement("div",{className:"col-sm-6 col-md-3 my-1",key:t},c.a.createElement("div",{className:"card"},c.a.createElement("img",{width:"50",src:"/img/episode".concat(e.episode_id,".jpeg"),className:"card-img-top",alt:e.title}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-truncate"},e.title),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"Episode N\xba: ".concat(e.episode_id))),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"Relesade Date: ".concat(e.release_date)))),c.a.createElement("div",{className:"card-footer"},c.a.createElement(O.a,{to:"/"+e.episode_id,className:"btn btn-warning"},"Details "," ",c.a.createElement(g.a,{icon:N.a})))))}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).reorderByDate=function(){var e=a.state.films.map(function(e){return Object(b.a)({},e)});e.sort(function(e,t){return e.release_date>t.release_date?1:t.release_date>e.release_date?-1:0}),a.setState({films:e})},a.reorderByEpisode=function(){var e=a.state.films.map(function(e){return Object(b.a)({},e)});e.sort(function(e,t){return e.episode_id>t.episode_id?1:t.episode_id>e.episode_id?-1:0}),a.setState({films:e})},a.state={films:[]},a.getFilms=a.getFilms.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getFilms",value:function(){var e=this;return y.a.get("https://swapi.co/api/films").then(function(t){var a,n=t.data.results;(a=console).log.apply(a,Object(v.a)(n));var c=Object.keys(n);e.setState({films:t.data.results,keys:c})})}},{key:"componentDidMount",value:function(){this.getFilms()}},{key:"render",value:function(){var e=this.state.films;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center mb-2"},c.a.createElement("p",{className:"mb-0 mr-2"},"Filter by:"),c.a.createElement("button",{onClick:this.reorderByDate,type:"button",className:"btn btn-warning btn-sm"},"Released Date"),c.a.createElement("p",{className:"mb-0 mx-2"},"or:"),c.a.createElement("button",{onClick:this.reorderByEpisode,type:"button",className:"btn btn-warning btn-sm"},"Episode Number")),c.a.createElement(w,{films:e}))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={film:null,specie:[],character:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getFilms",value:function(){var e=this,t=this.props.match.params.films_id;return y.a.get("https://swapi.co/api/films/"+t).then(function(t){e.setState({film:t.data}),console.log(t)})}},{key:"getSpecies",value:function(){var e=this,t=this.props.match.params.films_id;return y.a.get("https://swapi.co/api/species/").then(function(a){var n=a.data.results.filter(function(e){return e.films.some(function(e){return e.includes("films/".concat(t,"/"))})});e.setState({specie:n})})}},{key:"getCharacters",value:function(){var e=this,t=this.props.match.params.films_id;return y.a.get("https://swapi.co/api/people/").then(function(a){var n=a.data.results.filter(function(e){return e.films.some(function(e){return e.includes("films/".concat(t,"/"))})});e.setState({character:n})})}},{key:"componentDidMount",value:function(){this.getFilms(),this.getSpecies(),this.getCharacters()}},{key:"render",value:function(){var e=this.state.film?c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h2",{className:"display-4"},this.state.film.title),c.a.createElement("p",{className:"lead"},this.state.film.director),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("p",null,"Producers: ",this.state.film.producer),c.a.createElement("p",null,"Episode N\xba: ",this.state.film.episode_id),c.a.createElement("p",{className:"font-italic"},this.state.film.opening_crawl),c.a.createElement("p",null,"Species: ",this.state.specie.map(function(e){return e.name}).join(", ")),c.a.createElement("p",null,"Characters: ",this.state.character.map(function(e){return e.name}).join(", "))):c.a.createElement("div",{className:"spinner-border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."));return c.a.createElement("div",{className:"d-flex justify-content-center align-items-center "},e)}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{basename:"/swapi"},c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(f.a,{exact:!0,path:"/",component:k}),c.a.createElement(f.a,{path:"/:films_id",component:F})))}}]),t}(n.Component);r.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.fe75414e.chunk.js.map