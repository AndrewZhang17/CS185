(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{180:function(e,t,a){var n={"./Perry.png":64,"./caterpillar.jpg":32,"./dessert.jpg":68,"./europa.jpeg":66,"./hiking.jpg":65,"./matcha.jpg":70,"./msft.jpg":67,"./potatochip.jpg":71,"./sbhacks.jpg":69,"./sbhackswkshop.jpg":72};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=180},181:function(e,t,a){var n={"./beedance.mov":182,"./tennis0.mp4":183,"./tennis1.mp4":184,"./tennis2.mp4":185};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=181},182:function(e,t,a){e.exports=a.p+"static/media/beedance.738c1dd4.mov"},183:function(e,t,a){e.exports=a.p+"static/media/tennis0.96150430.mp4"},184:function(e,t,a){e.exports=a.p+"static/media/tennis1.0978ccc7.mp4"},185:function(e,t,a){e.exports=a.p+"static/media/tennis2.8f5f3dc7.mp4"},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=(a(90),a(4)),s=a(5),l=a(7),u=a(6),m=(a(91),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addStyling=function(){return e.props.tab.id===e.props.activeTab?{backgroundColor:"#42BFDD"}:{backgroundColor:"#393E41"}},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},r.a.createElement("p",null,this.props.tab.title))}}]),a}(n.Component)),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"tab-list"},this.props.tabs.map((function(t){return r.a.createElement(m,{tab:t,activeTab:e.props.activeTab,changeTab:e.props.changeTab,key:t.id})})))}}]),a}(n.Component),d=a(32),h=a.n(d),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Andrew Zhang"),r.a.createElement("div",{className:"intro"},r.a.createElement("div",null,r.a.createElement("img",{id:"introImage",src:h.a,alt:"Me riding a caterpillar"})),r.a.createElement("div",null,r.a.createElement("p",null,"Hi! I am Andrew, and I am a student in CMPSC 185. I am currently at home taking classes virtually and working on various homework assignments. I hope to go outside at some point during each day in order to stay sane and healthy.",r.a.createElement("br",null),"This is a portfolio with images of what I've done and what I like, videos I find interesting, and projects I have either worked on or think are cool!"))))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid"},this.props.items)}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"img-item "+this.props.dim},r.a.createElement("img",{className:"grid-img",src:this.props.src,alt:this.props.alt}))}}]),a}(n.Component),g=a(33),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).importImages=function(e){return e.keys().map((function(t){return r.a.createElement(f,{src:e(t),key:t})}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=[{src:a(64),alt:"A Perry the Platypus I drew",dim:""},{src:a(65),alt:"Hiking in Washington was fun",dim:""},{src:a(66),alt:"I worked on an AR app for the upcoming Europa mission",dim:""},{src:a(67),alt:"I was a summer intern at Microsoft",dim:"wide"},{src:a(68),alt:"Fancy dessert I ate in the Bay Area",dim:"tall"},{src:a(69),alt:"I help organize SB Hacks",dim:""},{src:a(32),alt:"I rode a caterpillar",dim:""},{src:a(70),alt:"I like matcha",dim:""},{src:a(71),alt:"My parents on Potato Chip Rock",dim:"wide"},{src:a(72),alt:"I sat in on the Firebase workshop at SB Hacks",dim:"wide"}].map((function(e){return r.a.createElement(f,{src:e.src,alt:e.alt,dim:e.dim,key:e.src})}));return this.importImages(a(180)),r.a.createElement("div",null,r.a.createElement("h1",null,"Images"),r.a.createElement(g.a,null,r.a.createElement(v,{items:e})))}}]),n}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).createItem=function(){return"video"===e.props.type?r.a.createElement("video",{className:"grid-vid",src:e.props.src,controls:!0}):"iframe"===e.props.type?r.a.createElement("iframe",{src:e.props.src,title:e.props.src,allowFullScreen:!0}):void 0},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"vid-item"},this.createItem())}}]),a}(n.Component),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).importVideos=function(e){return e.keys().map((function(t){return r.a.createElement(y,{src:e(t),type:"video",key:t})}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.importVideos(a(181)),t=["https://www.youtube.com/embed/wAb3NFcyMCQ","https://www.youtube.com/embed/tk_ZlWJ3qJI","https://www.youtube.com/embed/NGbFtTYQpus","https://www.youtube.com/embed/PjiF8XmVDso","https://www.youtube.com/embed/t81529ANEhI","https://www.youtube.com/embed/aYnyMPc3LQ4"].map((function(e){return r.a.createElement(y,{src:e,type:"iframe",key:e})}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Videos"),r.a.createElement(v,{items:e.concat(t)}))}}]),n}(n.Component),O=a(82),w=a.n(O),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"project-item"},r.a.createElement("a",{className:"project-link",href:this.props.src},r.a.createElement("img",{className:"grid-project",src:this.props.img,alt:"Not loaded"}),r.a.createElement("p",null,this.props.title)))}}]),a}(n.Component),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=[{title:"SB Hacks",src:"https://sbhacks.com",img:"https://www.sbhacks.com/webAssets/Asset%2022.svg"},{title:"OnSight",src:"https://opslab.jpl.nasa.gov",img:"https://opslab.jpl.nasa.gov/assets/mars20150121-16.jpg"},{title:"My Website",src:"https://github.com/AndrewZhang17/CS185",img:w.a},{title:"Jeffrey's Photography",src:"http://www.columbia.edu/~jh3904/index.html",img:"http://www.columbia.edu/~jh3904/imgs/landingPhoto2.jpg"},{title:"Esther's Website",src:"http://eliu.tech",img:"https://static.wixstatic.com/media/129dbc_9cfbe66c53c24f289d8fc446e2c7e540~mv2.jpg/v1/fill/w_810,h_608,al_c,q_90,usm_0.66_1.00_0.01/129dbc_9cfbe66c53c24f289d8fc446e2c7e540~mv2.webp"}].map((function(e){return r.a.createElement(k,{title:e.title,src:e.src,img:e.img,key:e.src})}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Projects"),r.a.createElement(v,{items:e}))}}]),a}(n.Component),C=a(34),I=a(13),S={apiKey:"AIzaSyDJsEPqq-kGCn8gEkI-ZwCt2fB18vc5AYo",authDomain:"cs185-guests.firebaseapp.com",databaseURL:"https://cs185-guests.firebaseio.com"},T=a(35),x=a(186);var M=function(e){var t=Object(n.useState)([]),a=Object(I.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(!0),s=Object(I.a)(o,2),l=s[0],u=(s[1],Object(n.useState)("")),m=Object(I.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)(""),b=Object(I.a)(h,2),v=b[0],f=b[1],g=Object(n.useState)(""),j=Object(I.a)(g,2),y=j[0],E=j[1],O=Object(n.useState)(!1),w=Object(I.a)(O,2),k=w[0],N=w[1],M=Object(n.useState)(""),A=Object(I.a)(M,2),D=A[0],P=A[1],_=Object(T.b)(),W=Object(n.useState)("post"),B=Object(I.a)(W,2),R=B[0],F=B[1];Object(n.useEffect)((function(){x.apps.length||x.initializeApp(S);var e=x.database().ref("messages"),t=!1;e.on("child_added",(function(e,a){var n=e.val();i((function(e){return[n].concat(Object(C.a)(e))})),t&&F("post new-post")})),e.once("value",(function(e){_.start("visible"),t=!0}))}),[l]);var H=function(){F("post")};return r.a.createElement("div",{className:"guestbook-page"},r.a.createElement("h1",null,"Guestbook"),r.a.createElement("div",{className:"guestbook"},r.a.createElement(T.a.div,{className:"form",initial:"hidden",animate:"visible",variants:{hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}},transition:{duration:.5}},r.a.createElement("h2",null,"Leave your mark!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=[];if(0===p.length?t.push("Name required."):(p.length<=5||p.length>=20)&&t.push("Name must be longer than 5 and shorter than 20 characters."),v.length>=100&&t.push("Description must be shorter than 100 characters."),0===y.length?t.push("Message required."):(y.length<=15||y.length>=500)&&t.push("Message must be longer than 15 and shorter than 500 characters."),t.length>0)return console.log(t.length),void alert("ERROR:\n".concat(t.join("\n")));var a=(new Date).toLocaleString();x.database().ref("messages").push().set({name:p,desc:v,msg:y,visible:k,email:D,time:a}),d(""),f(""),E(""),N(!1),P(""),alert("Your message was submitted! Thanks for visiting.")}},r.a.createElement("label",null,"What is your name?",r.a.createElement("input",{type:"text",value:p,onChange:function(e){return d(e.target.value)}})),r.a.createElement("label",null,"Write a short description about yourself (optional).",r.a.createElement("input",{type:"text",value:v,onChange:function(e){return f(e.target.value)}})),r.a.createElement("label",null,"What would you like to say?",r.a.createElement("input",{type:"text",value:y,onChange:function(e){return E(e.target.value)}})),r.a.createElement("label",null,"Would you like to show your message to other guests?",r.a.createElement("select",{value:k,onChange:function(e){return N(e.target.value)}},r.a.createElement("option",{value:!1},"No"),r.a.createElement("option",{value:!0},"Yes"))),r.a.createElement("label",null,"What is your email (optional, will not be posted)?:",r.a.createElement("input",{type:"text",value:D,onChange:function(e){return P(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Send Message"}))),r.a.createElement(T.a.div,{className:"posts",initial:"hidden",animate:_,variants:{hidden:{opacity:0,y:-100},visible:{opacity:1,y:0}},transition:{duration:.5}},r.a.createElement("h2",null,"Messages!"),c.map((function(e,t){return r.a.createElement("div",{className:0===t?R:"post",onAnimationEnd:H,key:e.time},r.a.createElement("p",{className:"name"},e.name),r.a.createElement("p",{className:"desc"},e.desc),r.a.createElement("p",{className:"time"},e.time),e.visible&&r.a.createElement("p",{className:"msg"},e.msg))})))))},A=a(83),D=a(45),P=a(84),_=a(197),W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={movies:[]},n}return Object(s.a)(a,[{key:"getMovies",value:function(){var e=this;console.log(D.a);var t,a=Object(A.a)(D.a);try{for(a.s();!(t=a.n()).done;){var n=t.value;_({method:"get",url:"http://www.omdbapi.com/?apikey=f23fd2c8&i=".concat(n)}).then((function(t){e.setState((function(a){return{movies:[].concat(Object(C.a)(e.state.movies),[t.data])}}))}))}}catch(r){a.e(r)}finally{a.f()}}},{key:"componentWillMount",value:function(){this.getMovies()}},{key:"render",value:function(){console.log(this.state.movies[0]);var e=this.state.movies.map((function(e){return r.a.createElement(P.a,{className:"popup",trigger:r.a.createElement("img",{src:e.Poster}),modal:!0,closeOnDocumentClick:!0,lockScroll:!0,postion:"center center"},r.a.createElement("div",{className:"movie-popup"},r.a.createElement("img",{className:"movie-poster",src:e.Poster}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h1",null,e.Title),r.a.createElement("div",{className:"imdb-rating"},"IMDB Rating: ",e.imdbRating),r.a.createElement("p",null,r.a.createElement("b",null,"Director:")," ",e.Director),r.a.createElement("p",null,r.a.createElement("b",null,"Released:")," ",e.Released),r.a.createElement("p",null,r.a.createElement("b",null,"Synopsis:")," ",e.Plot))))}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Movies"),r.a.createElement(v,{items:e}))}}]),a}(n.Component),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).displayContent=function(){var t=e.props.activeTab;return 1===t?r.a.createElement(b,null):2===t?r.a.createElement(j,null):3===t?r.a.createElement(E,null):4===t?r.a.createElement(N,null):5===t?r.a.createElement(M,null):6===t?r.a.createElement(W,null):void 0},e}return Object(s.a)(a,[{key:"render",value:function(){return this.displayContent()}}]),a}(n.Component),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={visible:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(t){e.toggle()}))}},{key:"toggle",value:function(){window.pageYOffset>window.document.body.offsetHeight/5?this.setState({visible:!0}):this.setState({visible:!1})}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return!!this.state.visible&&r.a.createElement("button",{className:"scroll-btn",onClick:this.scrollToTop},"Back to Top")}}]),a}(n.Component),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={activeTab:1},e.changeTab=function(t){e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g.b,null,r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"content"},r.a.createElement(B,{activeTab:this.state.activeTab})),r.a.createElement("div",{className:"nav-bar"},r.a.createElement(p,{tabs:[{id:1,title:"Home"},{id:2,title:"Images"},{id:3,title:"Videos"},{id:4,title:"Projects"},{id:5,title:"Guestbook"},{id:6,title:"Movies"}],activeTab:this.state.activeTab,changeTab:this.changeTab})),r.a.createElement(R,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports=a.p+"static/media/caterpillar.5d14bbbe.jpg"},45:function(e){e.exports=JSON.parse('{"a":["tt5311514","tt0910970","tt0093779","tt2380307","tt0245429","tt0119698","tt4633694","tt0119217","tt5052448","tt0435286","tt0120762","tt0347149","tt0096283","tt0878804","tt0120812","tt6900448","tt0382932","tt1979388"]}')},64:function(e,t,a){e.exports=a.p+"static/media/Perry.57c7854a.png"},65:function(e,t,a){e.exports=a.p+"static/media/hiking.f5b0e0b4.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/europa.f3e572c2.jpeg"},67:function(e,t,a){e.exports=a.p+"static/media/msft.bc3e6499.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/dessert.0656a0cf.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/sbhacks.5ead1c0a.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/matcha.b30f5110.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/potatochip.dcbebe90.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/sbhackswkshop.f2caca63.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/icon.94d15067.png"},85:function(e,t,a){e.exports=a(214)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.22116b78.chunk.js.map