(window["webpackJsonpMovies-Web"]=window["webpackJsonpMovies-Web"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/star-review-no-bg.b6d4939b.png"},28:function(e,t,a){e.exports=a(54)},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),o=a(18),n=a.n(o),i=(a(33),a(2)),m=a(3),c=a(5),l=a(4),u=a(6),h=a(15),d=(a(34),function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"logo mr-5",onClick:function(){return e.props.history.push("/")}},s.a.createElement("img",{className:"navbar-brand logo__photo",src:"https://retohercules.com/images/cinema-icon-png-1.png",alt:""}),s.a.createElement("span",{className:"navbar-brand"},"MovieHouse"))}}]),t}(r.Component)),p=Object(h.f)(d),g=(a(39),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).chooseMovieGenre=function(e){a.props.history.push("".concat(a.props.match.url).concat(e))},a.getSearchInputText=function(e){a.setState({searchInputText:e.target.value})},a.submitSearchText=function(e){""!=a.state.searchInputText&&a.props.history.push("".concat(a.props.match.url,"search/").concat(a.state.searchInputText))},a.state={searchInputText:""},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedInState,r=t.logOut;this.state.searchInputText;return s.a.createElement("div",null,s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},s.a.createElement("div",{className:"container"},s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement(p,null),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},s.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#",className:"nav-link",onClick:function(){return e.props.history.push("/")}},"Home")),s.a.createElement("li",{className:"nav-item dropdown"},s.a.createElement("a",{className:"nav-link dropdown-toggle",id:"navbardrop","data-toggle":"dropdown",href:"index.js"},"Movie Genres"),s.a.createElement("div",{class:"dropdown-menu bg-dark"},s.a.createElement("a",{class:"dropdown-item",onClick:function(){return e.chooseMovieGenre("action")},href:"#"},"Action"),s.a.createElement("a",{class:"dropdown-item",onClick:function(){return e.chooseMovieGenre("animation")},href:"#"},"Animation"),s.a.createElement("a",{class:"dropdown-item",onClick:function(){return e.chooseMovieGenre("comedy")},href:"#"},"Comedy"),s.a.createElement("a",{class:"dropdown-item",onClick:function(){return e.chooseMovieGenre("drama")},href:"#"},"Drama"),s.a.createElement("a",{class:"dropdown-item",onClick:function(){return e.chooseMovieGenre("thriller")},href:"#"},"Thriller")))),s.a.createElement("div",{className:"b-search-wrapper mb-3 mb-lg-0"},s.a.createElement("form",{className:"form-inline",onSubmit:this.submitSearchText},s.a.createElement("input",{onChange:this.getSearchInputText,className:"form-control mr-sm-2 b-search",type:"search",placeholder:"Search","aria-label":"Search"}),s.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-outline-primary my-2 my-sm-0"}))),s.a.createElement("div",null,a?s.a.createElement("div",{className:"b-profile"},s.a.createElement("span",{className:"b-profile-data mr-4"},"You are Logged In"),s.a.createElement("button",{onClick:function(){return r()},className:"btn btn-outline-primary"},"Log Out")):s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-outline-primary mr-2",onClick:function(){return e.props.history.push("/login")}},"Log in"),s.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return e.props.history.push("/register")}},"Register"))))))))}}]),t}(r.Component)),v=Object(h.f)(g),b=[{id:0,name:"The Irishman",year:2019,url:"the-irishman-2019",description:"In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.",category:["Drama","Crime"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/the-irishman-2019.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/the-irishman-2019.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/WHXxVmeGQUc",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/the-irishman-2019.jpg"},{id:1,name:"Once Upon a Time in Hollywood",year:2019,url:"once-upon-a-atime-in-hollywood-2019",description:"Actor Rick Dalton gained fame and fortune by starring in a 1950s television Western, but is now struggling to find meaningful work in a Hollywood that he doesn't recognize anymore. He spends most of his time drinking and palling around with Cliff Booth, his easygoing best friend and longtime stunt double.",category:["Drama","Comedy"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/once-upon-a-time-2019.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/once-upon-a-time-2019.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/ELeMaP8EPAA",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/once-upn-a-time-2019.jpg"},{id:2,name:"Deadpool",year:2016,url:"deadpool-2016",description:"Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.",category:["Sci-fi","Action"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/deadpool-2016.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/deadpool-2016.jpg",review:3.7,trailerLink:"https://www.youtube.com/embed/Xithigfg7dA",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/deadpool-2016.jpg"},{id:3,name:"Despicable Me 2",year:2013,url:"despicable-me-2-2013",description:"When a new criminal comes to town, the Anti-Villain League decides to hire Gru in order to fight him off. While Gru initially refuses, he eventually agrees after his aide goes back to his evil ways.",category:["Animation","Adventure","Comedy"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/despicable-me-2.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/despicable-me-2.jpg",review:5,trailerLink:"https://www.youtube.com/embed/GdDxyxan3Y4",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/despicable-me-2.jpg"},{id:4,name:"Joker",year:2019,url:"joker-2019",description:"Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker",category:["Drama","Thriller"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/joker-2019.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/joker-2019.jpg",review:4.3,trailerLink:"https://www.youtube.com/embed/zAGVQLHvwOY",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/joker-2019.jpg"},{id:5,name:"IT",year:2017,url:"it-2017",description:"Defeated by members of the Losers' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand.",category:["Thriller","Mistery"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/it-2017.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/it-2017.jpg",review:3.6,trailerLink:"https://www.youtube.com/embed/hAUTdjf9rko",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/it-2017.jpg"},{id:6,name:"Shutter Island",year:2010,url:"shutter-island-2010",description:"Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",category:["Thriller","Mystery"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/shutter-island-2010.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/shutter-island-2010.jpg",review:4.7,trailerLink:"https://www.youtube.com/embed/v8yrZSkKxTA",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/shutter-island-2010.jpg"},{id:7,name:"Fast & Furious Presents: Hobbs & Shaw",year:2019,url:"fast-furious-presents-hobbs-shaw-2019",description:"Brixton Lorr is a cybernetically enhanced soldier who possesses superhuman strength, a brilliant mind and a lethal pathogen that could wipe out half of the world's population. It's now up to hulking lawman Luke Hobbs and lawless operative Deckard Shaw to put aside their past differences and work together to prevent the seemingly indestructible Lorr from destroying humanity",category:["Mistery","Action"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/hobbs-shaw-2019.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/hobbs-shaw-2019.jpg",review:3.8,trailerLink:"https://www.youtube.com/embed/HZ7PAyCDwEg",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/hobbs-shaw-2019.jpg"},{id:8,name:"Logan",year:2017,url:"logan-2017",description:"Logan comes out of retirement to escort a young mutant named Laura to a safe place. He meets with other mutants, who run from an evil corporation that has been experimenting with them, along the way.",category:["Drama","Sci-fi"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/logan-2017.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/logan-2017.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/Div0iP65aZo",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/logan-2017.jpg"},{id:9,name:"Dallas Buyers Club",year:2013,url:"dallas-buyers-club-2013",description:"Ron, a rodeo cowboy diagnosed with AIDS, discovers a banned drug that can help patients survive longer. To get around the system, he forms a club to smuggle the medicine to those in need.",category:["Drama","History"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/dallas-buyers-club-2013.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/dallas-buyers-club-2013.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/XhrtmvBzAaA",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/dallas-buyers-club-2013.jpg"},{id:10,name:"Interstellar",year:2014,url:"interstellar-2014",description:"In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",category:["Drama","Mistery"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/interstellar-2014.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/interstellar-2014.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/2LqzF5WauAw",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/interstellar-2014.jpg"},{id:11,name:"Inglorious Basterds",year:2009,url:"inglorious-basterds-2009",description:"A few Jewish soldiers are on an undercover mission to bring down the Nazi government and put an end to the war. Meanwhile, a woman wants to avenge the death of her family from a German officer.",category:["Drama","Action"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/inglourious-basterds-2009.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/inglourious-basterds-2009.jpg",review:4.7,trailerLink:"https://www.youtube.com/embed/A3YxCWrWMZ8",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/inglourious-basterds-2009.jpg"},{id:12,name:"Avengers: Infinity War",year:2019,url:"avengers-infinity-war-2019",description:"The Avengers must stop Thanos, a mad Titan, and his army from getting their hands on all the infinity stones. However, the mad Titan is prepared to go to any lengths to carry out his insane plan.",category:["Fantasy"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/infinity-war-2019.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/infinity-war-2019.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/6ZfuNTqbHE8",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/infinity-war-2019.jpg"},{id:13,name:"John Wick: Chapter 3 \u2013 Parabellum",year:2019,url:"john-wick-chapter-3\u2013parabellum-2019",description:"After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.",category:["Thriller","Mystery"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/john-wick-3-2019.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/john-wick-3-2019.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/pU8-7BX9uxs",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/john-wick-3-2019.jpg"},{id:14,name:"American Hustle",year:2013,url:"american-hustle-2013",description:"Con artists Irving and Sydney are forced to work for Richie, an FBI agent, who offers them amnesty. However, they are used for a sting operation which leads to the conviction of prominent people.",category:["Drama","Crime"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/american-hustle-2013.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/american-hustle-2013.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/ST7a1aK_lG0",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/american-hustle-2013.jpg"},{id:15,name:"The Hateful Eight",year:2015,url:"the-hateful-eight-2015",description:"A bounty hunter and his captured fugitive are caught in the middle of a snowstorm. They seek refuge at a small lodge and encounter a twisted turn of events there.",category:["Drama","Mystery"],moviePoster:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/moviePosters/the-hateful-eight-2015.jpg",movieCover:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieCovers/the-hateful-eight-2015.jpg",review:4.5,trailerLink:"https://www.youtube.com/embed/TzK-GpDTX3Q",movieVideoImage:"https://raw.githubusercontent.com/bekim-w/Movies-Web/master/src/assets/img/movieVideoImages/the-hateful-eight.jpg"}],w=(a(40),a(9)),f=a(11),y=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.moviePoster,r=t.name,o=t.url;return s.a.createElement("div",{className:"col-6 col-md-3 mb-5"},s.a.createElement("div",{className:"main-movie-card"},s.a.createElement("div",{onClick:function(){return e.props.history.push(o)},className:"main-movie-card__image-bg",style:{backgroundImage:"url(".concat(a,")")}},s.a.createElement("div",{className:"main-movie-card__play"},s.a.createElement(w.a,{className:"faPlay",icon:f.c})),s.a.createElement("div",{className:"main-movie-card__review"},"3.5"),s.a.createElement("div",{className:"main-movie-card__quality"},"HD")),s.a.createElement("h2",{className:"mt-3",onClick:function(){return e.props.history.push(o)}},r)))}}]),t}(r.Component),E=Object(h.f)(y),k=(a(44),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"intro-section",style:{backgroundImage:"url(".concat("https://cont4.naekranie.pl/media/cache/amp/2019/08/Leonardo-Dicaprio-Jamie-Foxx-Kurt-Russell-Uma-Thurman-John-Travolta-and-Samuel-L-Jackson_5d56e5ec8da6a.webp",")")}},s.a.createElement("div",{className:"intro-section__bg-effect"}),s.a.createElement("div",{className:"intro-section__details"},s.a.createElement("h1",{className:"intro-section__title mb-4"},"All Your TV Shows and Movies in One Place"),s.a.createElement("p",{className:"intro-section__description"},"Watch Thousands of Shows and Movies Anytime, Anywhere"),s.a.createElement("button",{className:"btn btn-primary btn-lg",onClick:function(){return e.props.history.push("/register")}},"Register Now"))))}}]),t}(r.Component)),j=Object(h.f)(k),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).state={movies:b},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=this.state.movies,t=[],a=[],r=0,o=1;o<=4;o++){for(var n=0;n<4;n++)t.push(s.a.createElement(E,{moviePoster:e[r].moviePoster,name:e[r].name,url:"".concat(this.props.match.url).concat(e[r].url)})),r++;a.push(s.a.createElement("div",{className:"row mt-3"},t)),t=[]}return s.a.createElement("div",null,s.a.createElement(j,null),s.a.createElement("div",{className:"container"},a))}}]),t}(r.Component),I=(a(45),a(14));var C=function(){return s.a.createElement("footer",{className:"page-footer font-small"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row py-4 d-flex align-items-center"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"footer-logo pb-4"},s.a.createElement(p,null))),s.a.createElement("div",{className:"col-md-6 text-center text-md-right"},s.a.createElement("a",{href:"#",className:"facebook"},s.a.createElement(w.a,{className:"faFacebookF",icon:I.a})),s.a.createElement("a",{href:"#",className:"twitter"},s.a.createElement(w.a,{className:"faTwitter",icon:I.d})),s.a.createElement("a",{href:"#",className:"instagram"},s.a.createElement(w.a,{className:"faInstagram",icon:I.c})),s.a.createElement("a",{href:"#",className:"google"},s.a.createElement(w.a,{className:"faGooglePlusG",icon:I.b}))))),s.a.createElement("hr",null),s.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 MovieHouse 2019"))},O=[{id:0,email:"joe@hotmail.com",username:"joe",password:"joe",membership:!1},{id:1,email:"michael@hotmail.com",username:"michael",password:"michael",membership:!1},{id:2,email:"leo@hotmail.com",username:"leo",password:"leo",membership:!1},{id:3,email:"jack@hotmail.com",username:"jack",password:"jack",membership:!1}],M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleEmail=function(e){a.setState({email:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.submitLogIn=function(e){for(var t=a.state,r=t.users,s=t.email,o=t.password,n=!1,i=0;i<r.length;i++)if(r[i].email===s&&r[i].password===o){n=!0;break}n?(a.props.logIn(),a.props.history.push("/")):alert("Wrong Email or Password!!!")},a.state={users:O,email:"",password:""},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container my-5"},s.a.createElement("h1",null,"Login Page"),s.a.createElement("div",{class:"alert alert-info mt-5"},s.a.createElement("strong",null,"Log In with this email and password")," ",s.a.createElement("br",null),s.a.createElement("strong",null,"Email:")," joe@hotmail.com ",s.a.createElement("br",null),s.a.createElement("strong",null,"Password:")," joe"),s.a.createElement("form",{className:"mt-5 mb-5"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Email address"),s.a.createElement("input",{onChange:this.handleEmail,type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{onChange:this.handlePassword,type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),s.a.createElement("button",{onClick:this.submitLogIn,type:"button",className:"btn btn-primary mr-4"},"Log In"),s.a.createElement("button",{onClick:function(){return e.props.history.push("/register")},type:"button",className:"btn btn-primary"},"Register")))}}]),t}(r.Component),P=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"container py-5"},s.a.createElement("h1",null,"Register Here"),s.a.createElement("div",{class:"alert alert-info mt-5"},s.a.createElement("strong",null,"Info! "),"Register is not working yet since i haven't created and connected to database yet."),s.a.createElement("form",{className:"my-5"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Name"),s.a.createElement("input",{onChange:this.handleName,type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"name",placeholder:"Enter your name"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Email address"),s.a.createElement("input",{onChange:this.handleEmail,type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{onChange:this.handlePassword,type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),s.a.createElement("button",{onClick:this.onRegister,type:"button",className:"btn btn-primary"},"Register"))))}}]),t}(r.Component),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={movies:b},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.movies,t=this.props.match.params.searchText;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row mt-3"},e.map(function(e,a){return e.name.toLowerCase().includes(t.toLowerCase())?s.a.createElement(E,{moviePoster:e.moviePoster,name:e.name,url:"/".concat(e.url)}):""})))}}]),t}(r.Component),_=(a(46),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={movies:b},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=this,t=this.state.movies,a=[],r=[],o=0,n=0;n<2;n++){for(var i=function(r,n){a.push(s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"movie-card"},s.a.createElement("div",{className:"movie-card__poster",style:{backgroundImage:"url(".concat(t[o].moviePoster,")")}}),s.a.createElement("div",{className:"movie-card__content"},s.a.createElement("h3",null,t[o].name),s.a.createElement("p",null,t[o].category.join(", ")),s.a.createElement("p",{className:"movie-card__description"},t[o].description.substring(0,115),"..."),s.a.createElement("button",{onClick:function(){return e.props.history.push("/".concat(t[n].url))}},"Watch Now"))))),o++},m=0,c=o;m<2;m++,c++)i(0,c);r.push(s.a.createElement("div",{className:"row"},a)),a=[]}return s.a.createElement("div",{className:"movie-cards"},s.a.createElement("div",{className:"container"},r))}}]),t}(r.Component)),L=Object(h.f)(_),x=(a(47),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleEmail=function(e){a.setState({email:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.submitLogIn=function(e){for(var t=a.state,r=t.users,s=t.email,o=t.password,n=!1,i=0;i<r.length;i++)if(r[i].email===s&&r[i].password===o){n=!0;break}n?(a.props.logIn(),a.props.history.push(a.props.location.pathname),a.props.closeModal()):alert("Wrong Email or Password!!!")},a.state={users:O,email:"",password:""},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"register-modal"},s.a.createElement("div",{className:"register-modal__content"},s.a.createElement("span",{className:"register-modal__close",onClick:this.props.closeModal},"\xd7"),s.a.createElement("div",{className:"register-modal__project-content"},s.a.createElement("h2",null,"Pleas Log In or Register to watch ",this.props.movieName),s.a.createElement("div",{class:"alert alert-info mt-5"},s.a.createElement("strong",null,"Log In with this email and password")," ",s.a.createElement("br",null),s.a.createElement("strong",null,"Email:")," joe@hotmail.com ",s.a.createElement("br",null),s.a.createElement("strong",null,"Password:")," joe"),s.a.createElement("div",{className:"register-modal__input-row"},s.a.createElement("p",null,"Email"),s.a.createElement("input",{onChange:this.handleEmail,type:"text"})),s.a.createElement("div",{className:"register-modal__input-row"},s.a.createElement("p",null,"Password"),s.a.createElement("input",{onChange:this.handlePassword,type:"text"})),s.a.createElement("div",{className:"register-modal__input-row"},s.a.createElement("button",{onClick:this.submitLogIn},"Log In"),s.a.createElement("button",{onClick:function(){return e.props.history.push("/register")}},"Register")))))}}]),t}(r.Component)),T=Object(h.f)(x),V=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"404 Page not found!!!"))}}]),t}(r.Component),S=a(23),A=a.n(S),D=(a(48),function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=100-2*this.props.review*10;return s.a.createElement("div",null,s.a.createElement("div",{class:"review-stars",style:{backgroundImage:"url(".concat(A.a,")")}},s.a.createElement("div",{class:"review-stars-selected",style:{width:e+"%",backgroundImage:"url(".concat(A.a,")")}})))}}]),t}(r.Component)),H=(a(49),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).openModal=function(){a.setState({showModal:!0})},a.closeModal=function(){a.setState({showModal:!1})},a.state={movies:b,showModal:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.state,a=t.movies,r=t.showModal,o=this.props,n=o.logIn,i=o.isLoggedInState,m=a.find(function(t,a,r){return t.url==e.props.match.params.movieName}),c=[];return void 0!=m?c.push(s.a.createElement("div",null,s.a.createElement("div",{className:"movie-section"},s.a.createElement("div",{className:"movie-section__background",style:{backgroundImage:"url(".concat(m.movieCover,")")}},s.a.createElement("div",{className:"movie-section__bg-effect"})),s.a.createElement("div",{className:"movie-section__content"},s.a.createElement("div",{className:"movie-section__poster",style:{backgroundImage:"url(".concat(m.moviePoster,")")}}),s.a.createElement("div",{className:"movie-section__info"},s.a.createElement("h1",null,m.name),s.a.createElement("p",{className:"mt-4"},s.a.createElement(D,{review:m.review})," ",m.review," | 125 Reviews"),s.a.createElement("p",{className:"mt-4"},m.description),s.a.createElement("p",null,"108 min | ",m.category.join(", ")," | 12 February ",m.year)))),i?s.a.createElement("iframe",{className:"movieVideo",src:m.trailerLink}):s.a.createElement("div",{className:"movieVideoImage",onClick:this.openModal,style:{backgroundImage:"url(".concat(m.movieVideoImage,")")}},s.a.createElement("div",{className:"movieVideoImage__effect"}),s.a.createElement("div",{className:"movieVideoImage__icon-wrapper"},s.a.createElement("div",{className:"movieVideoImage__icon"},s.a.createElement(w.a,{className:"faPlay",icon:f.c}))),s.a.createElement("div",{className:"movieVideoImage__controls"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement(w.a,{className:"faPlay-control",icon:f.c}),s.a.createElement(w.a,{className:"faVolumeUp",icon:f.d}),s.a.createElement("span",{className:"time"},"00:00:32")),s.a.createElement("div",{className:"col-6"},s.a.createElement(w.a,{className:"faCog",icon:f.b}),s.a.createElement(w.a,{className:"faArrowsAlt",icon:f.a}))))),r?s.a.createElement(T,{logIn:n,closeModal:this.closeModal,movieName:m.name}):"",s.a.createElement(L,null))):c.push(s.a.createElement(V,null)),s.a.createElement("div",null,c)}}]),t}(r.Component)),G=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(c.a)(this,Object(l.a)(t).call(this,e)),console.log(e),a.state={movies:b},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.movies,t=this.props.location.pathname.charAt(1).toUpperCase()+this.props.location.pathname.slice(2);return s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"mt-3"},t," Movies"),s.a.createElement("div",{className:"row mt-3"},e.map(function(e,a){return e.category.includes(t)?s.a.createElement(E,{moviePoster:e.moviePoster,name:e.name,url:"/".concat(e.url)}):""})))}}]),t}(r.Component),B=(a(50),a(51),a(13)),R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).logOut=function(){e.setState({isLoggedInState:!1})},e.logIn=function(){e.setState({isLoggedInState:!0})},e.state={isLoggedInState:!1},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.logOut,t.logIn,t.isLoggedInState);return s.a.createElement("div",null,s.a.createElement(B.a,null,s.a.createElement(v,{isLoggedInState:a,logOut:this.logOut}),s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/",component:N}),s.a.createElement(h.a,{exact:!0,path:"/register",component:P}),s.a.createElement(h.a,{exact:!0,path:"/login",render:function(t){return s.a.createElement(M,Object.assign({logIn:e.logIn,isLoggedInState:a},t))}}),s.a.createElement(h.a,{exact:!0,path:["/action","/animation","/drama"],component:G}),s.a.createElement(h.a,{exact:!0,path:"/search/:searchText",component:W}),s.a.createElement(h.a,{exact:!0,path:"/:movieName",render:function(t){return s.a.createElement(H,Object.assign({logIn:e.logIn,isLoggedInState:a},t))}}),s.a.createElement(h.a,{path:"*",component:V})),s.a.createElement(C,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.70865614.chunk.js.map