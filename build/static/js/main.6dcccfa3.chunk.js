(this["webpackJsonpandril-web-app"]=this["webpackJsonpandril-web-app"]||[]).push([[0],{13:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/loadingandril.1b14c1ae.svg"},28:function(e,t,a){e.exports=a.p+"static/media/womansittinglaptop.f8ca2dfb.svg"},29:function(e,t,a){e.exports=a.p+"static/media/andrillogo.33759894.svg"},32:function(e,t,a){e.exports=a.p+"static/media/Nodata.b48fb621.svg"},54:function(e,t,a){e.exports=a.p+"static/media/andrillogoop.47bb86d2.svg"},55:function(e,t,a){e.exports=a.p+"static/media/userpageimg1.f16782f0.svg"},56:function(e,t,a){e.exports=a.p+"static/media/userpageimg2.1fecd0f6.svg"},57:function(e,t,a){e.exports=a(96)},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(49),o=a.n(r),i=a(1),c=a(2),s=a(4),m=a(3),d=a(5),u=a(6),p=(a(13),a(27)),h=a(7),g=a(8),b=a(10),f=a.n(b),E=a(12),y=a.n(E),v=a(28),k=a.n(v),C=a(29),N=a.n(C),x=a(11),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"nav-bar",id:"nav-bar"},l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",{className:"nav-itemp"},l.a.createElement(d.b,{to:"/",className:"link"},l.a.createElement("span",{className:"brand"},l.a.createElement("img",{src:N.a,alt:"logo",className:"brand-logo",height:"28",width:"28"}),"Andril",l.a.createElement("em",null,"360")))),l.a.createElement("li",{className:"nav-linkcoll"},l.a.createElement("ul",{className:"nav-list2"},l.a.createElement(d.b,{to:"/addarticle",className:"link"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link"},l.a.createElement(x.d,null)," Write Article"))),l.a.createElement(d.b,{to:"/usr",className:"link"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link"},l.a.createElement(x.g,null)," My Account"))),l.a.createElement(d.b,{to:"/search",className:"link"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link"},l.a.createElement(x.c,null)," Articles"))),l.a.createElement(d.b,{to:"/about",className:"link"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link"},l.a.createElement(x.b,null)," About"))))))))}}]),a}(l.a.Component),j=a(50),w=a.n(j),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={coverimg:null,category:"Tamil",imgbase64:null,posttitle:null,posttitletamil:null,desctamil:null,body:null,bodytamil:null,desc:null,mustread:!1,alert:!1},n.fileChangedHandler=n.fileChangedHandler.bind(Object(h.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(h.a)(n)),n.uploadhandler=n.uploadhandler.bind(Object(h.a)(n)),n.handleCheckBox=n.handleCheckBox.bind(Object(h.a)(n)),n.checkUpload=n.checkUpload.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"fileChangedHandler",value:function(e){var t=this,a=e.target.files[0];this.setState({coverimg:a});var n=new FileReader;n.readAsDataURL(a),n.onloadend=function(){t.setState({imgbase64:n.result})}}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a))}},{key:"handleCheckBox",value:function(){this.setState({mustread:!this.state.mustread})}},{key:"confirmBack",value:function(){w()()}},{key:"componentDidMount",value:function(){this.confirmBack()}},{key:"checkUpload",value:function(){"sampleuidw83q498"===localStorage.getItem("uid")?y.a.fire({confirmButtonColor:"#ff847c",title:"Can't Upload",text:"Please Login with email for Uploading",icon:"Error",confirmButtonText:"Okay"}):null!=this.state.imgbase64&&null!=this.state.posttitle&&null!=this.state.desc&&null!=this.state.body&&null!=this.state.bodytamil?this.uploadhandler():y.a.fire({title:"Can't Upload",text:"Please Fillout all the fields before uploading",icon:"Error",confirmButtonText:"Okay",confirmButtonColor:"#ff847c"})}},{key:"uploadhandler",value:function(){y.a.fire({html:'<img src="'+k.a+'" alt="uploading" height="100px" width="100px" /> <br/> Post is Uploading Please Wait',showConfirmButton:!1});var e={poster:localStorage.getItem("uid"),mustread:!0===this.state.mustread?"true":"false",posttitle:this.state.posttitle,postdesc:this.state.desc,posttitletamil:this.state.posttitletamil,postdesctamil:this.state.desctamil,body:this.state.body,bodytamil:this.state.bodytamil,imagebin:this.state.imgbase64};console.log(this.state.mustread+this.state.posttitletamil+this.state.desctamil),f.a.post("https://blooming-shelf-29088.herokuapp.com/api/posts/"+this.state.category,e).then((function(e){"PSTUPD"===e.data.code?(y.a.close(),y.a.fire({title:"Post Uploaded!",text:"Do you want to continue",icon:"success",confirmButtonText:"Okay",confirmButtonColor:"#ff847c"})):console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null),l.a.createElement(g.Fade,null,l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"safearea articleform"},l.a.createElement("div",{className:"mobile-view"},l.a.createElement("div",{className:"form"},l.a.createElement("h3",null,"Add Article"),l.a.createElement("select",{name:"category",id:"category",onChange:this.handleInputChange,placeholder:"Select The Category"},l.a.createElement("option",{value:"tamil"},"Tamil History"),l.a.createElement("option",{value:"medicine"},"Medicine"),l.a.createElement("option",{value:"mystery"},"Mystery"),l.a.createElement("option",{value:"business"},"Business"),l.a.createElement("option",{value:"archaeology"},"Archaeology"),l.a.createElement("option",{value:"environment"},"Environment"),l.a.createElement("option",{value:"art"},"Art"),l.a.createElement("option",{value:"imagination"},"Imagination"),l.a.createElement("option",{value:"politics"},"Politics"),l.a.createElement("option",{value:"tech"},"Technology"),l.a.createElement("option",{value:"crime_stories"},"Crime Stories")),l.a.createElement("label",{htmlFor:"posttitle"},"Title :"),l.a.createElement("input",{type:"text",name:"posttitle",id:"posttitle",placeholder:"Title of Post",onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"desc"},"Description :"),l.a.createElement("input",{type:"text",name:"desc",id:"desc",placeholder:"One line Description",onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"posttitletamil"},"Tamil Title :"),l.a.createElement("input",{type:"text",name:"posttitletamil",id:"posttitletamil",placeholder:"Title of Post",onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"desctamil"},"Tamil Description :"),l.a.createElement("input",{type:"text",name:"desctamil",id:"desctamil",placeholder:"Short Description",onChange:this.handleInputChange}),l.a.createElement("span",null,l.a.createElement("input",{type:"checkbox",id:"mustread",name:"mustread",value:this.state.mustread,onChange:this.handleCheckBox}),l.a.createElement("label",{for:"mustread"},l.a.createElement("strong",null,"Mark as Mustread??"))),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"body"},"Body of Post English :"),l.a.createElement("div",{className:"textarea"},l.a.createElement("textarea",{name:"body",id:"body",onChange:this.handleInputChange,cols:"43",rows:"30",placeholder:"Type in the Article in MarkDown Format"})),l.a.createElement("label",{htmlFor:"body"},"Body of Post Tamil :"),l.a.createElement("div",{className:"textarea"},l.a.createElement("textarea",{name:"bodytamil",id:"bodytamil",onChange:this.handleInputChange,cols:"43",rows:"30",placeholder:"Type in the Article in MarkDown Format"})),l.a.createElement("input",{type:"file",className:"filepicker",onChange:this.fileChangedHandler}),l.a.createElement("span",{style:{textAlign:"center"}},"(Maximum Image Size is 5MB)"),l.a.createElement("p",null),l.a.createElement("button",{onClick:this.checkUpload},"Post Article")))))))}}]),a}(n.Component),S=a(15),D=a.n(S),A=a(24),B=a(19),F=(a(93),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return"loading"===this.props.variant?l.a.createElement(g.Fade,null,l.a.createElement(d.b,{className:"card loading"},l.a.createElement("div",{className:"card-image dummy"}),l.a.createElement("div",{className:"card-area"},l.a.createElement("p",{className:"card-title"},this.props.title),l.a.createElement("div",{className:"card-text"},this.props.content)))):l.a.createElement(g.Fade,null,l.a.createElement(d.b,{className:"card",to:"/article/en/"+this.props.id},l.a.createElement("img",{src:this.props.image,className:"card-image",alt:this.props.title}),l.a.createElement("div",{className:"card-area"},l.a.createElement("p",{className:"card-title"},this.props.title),l.a.createElement("div",{className:"card-text"},this.props.content))))}}]),a}(n.Component)),T=(a(94),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bottombar",id:"bottombar"},l.a.createElement(d.b,{className:"link",to:"about"},l.a.createElement("button",{className:"round-btn"},l.a.createElement(x.b,{color:"#ffffff"}))),l.a.createElement(d.b,{className:"link",to:"addarticle"},l.a.createElement("button",{className:"round-btn"},l.a.createElement(x.d,{color:"#ffffff"}))),l.a.createElement(d.b,{className:"link",to:"/"},l.a.createElement("button",{className:"round-btn"},l.a.createElement(x.a,{color:"#ffffff"}))),l.a.createElement(d.b,{className:"link",to:"search"},l.a.createElement("button",{className:"round-btn"},l.a.createElement(x.c,{color:"#ffffff"}))),l.a.createElement(d.b,{className:"link",to:"usr"},l.a.createElement("button",{className:"round-btn"},l.a.createElement(x.g,{color:"#ffffff"}))))}}]),a}(n.Component)),M=(a(95),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(g.Fade,{left:!0},l.a.createElement(d.b,{className:"listitem",to:"/article/en/"+this.props.id},l.a.createElement("div",{className:"listbox"},l.a.createElement("li",null,l.a.createElement("h3",null,this.props.title)),l.a.createElement("li",null,l.a.createElement("p",null,this.props.content))),l.a.createElement("div",{className:"listimg"},l.a.createElement("img",{src:this.props.image,alt:this.props.title,height:"80px",width:"80px"}))))}}]),a}(n.Component)),U=a(20),L=a(25),P=a.n(L),R=a(32),H=a.n(R);function W(){var e=Object(B.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return W=function(){return e},e}function z(){var e=Object(B.a)(["\n  margin: 0.5em;\n  justify-content: center;\n  text-align: center;\n  font-size: 1rem;\n  padding: 0.5em;\n  display: block;\n"]);return z=function(){return e},e}function _(){var e=Object(B.a)(["\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n"]);return _=function(){return e},e}function G(){var e=Object(B.a)(["\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n  background: #D3D3D3;\n  align-items: center;\n  padding-left: 1em;\n  border-radius: 20px;\n"]);return G=function(){return e},e}function J(){var e=Object(B.a)(["\n  background: #D3D3D3;\n  display: inline-block;\n  border: none;\n  border-radius: 8px;\n  width: 80vw;\n  height: 40px;\n  outline:none;\n  padding: 0.25em 1em;\n  margin: 0.5em;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: grey;\n    font-size: 1rem;\n    font-weight: 500;\n  }\n"]);return J=function(){return e},e}var K="https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg",V=U.a.input(J()),q=U.a.div(G()),Q=U.a.div(_()),X=U.a.a(z()),Y=U.a.div(W()),Z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e))._isMounted=!1,n.state={searchres:[],recent:[],mustread:[],mostpop:[],searchKey:null,mustreadloading:!0,mustpoploading:!0,searchresloading:!0},n.handleSearch=n.handleSearch.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,console.log("component loaded"),this.getMustRead(),this.getRecent()}},{key:"handleSearch",value:function(e){document.getElementById("searchcontent").style.display="flex",document.getElementById("homecontent").style.display="none",document.getElementById("bottombar").style.display="none",null===this.state.searchkey&&(document.getElementById("homecontent").style.display="block"),this.searchRecords(e.target.value)}},{key:"handleBackHome",value:function(){document.getElementById("searchcontent").style.display="none",document.getElementById("homecontent").style.display="block",document.documentElement.clientWidth<=600&&(document.getElementById("bottombar").style.display="flex")}},{key:"searchRecords",value:function(e){var t=this;this.setState({searchresloading:!0}),f.a.get("https://blooming-shelf-29088.herokuapp.com/api/posts/search/"+e).then((function(e){e.data.postdata&&t.setState({searchres:e.data.postdata,searchresloading:!1}),console.dir(e)})).catch((function(e){console.log(e)}))}},{key:"getMustRead",value:function(){var e=Object(A.a)(D.a.mark((function e(){var t=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://blooming-shelf-29088.herokuapp.com/api/posts/mustread").then((function(e){console.log(e),t.setState({mustread:e.data.postdata,mustreadloading:!1})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getRecent",value:function(){var e=Object(A.a)(D.a.mark((function e(){var t=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://blooming-shelf-29088.herokuapp.com/api/posts/recents").then((function(e){console.log(e),t.setState({recent:e.data.postdata})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"openArticle",value:function(e,t){localStorage.setItem("title",e),localStorage.setItem("content",t),this.props.history.push("/article")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"safe-area homearea"},l.a.createElement(q,null,l.a.createElement(x.e,{color:"grey"}),l.a.createElement(V,{placeholder:"Search for the Article",onChange:this.handleSearch,value:this.state.searchKey})),l.a.createElement(Q,{id:"searchcontent"},l.a.createElement(X,{onClick:this.handleBackHome},l.a.createElement("span",{style:{fontWeight:"bold"}},"< Get Back To Home")),l.a.createElement("div",null,!0===this.state.searchresloading?l.a.createElement("div",{className:"center-layout"},l.a.createElement("img",{src:P.a,alt:"loading"})):0===this.state.searchres.length?l.a.createElement("div",{className:"center-layout"},l.a.createElement("img",{src:H.a,alt:"loading"})):this.state.searchres.map((function(e){return l.a.createElement(M,{id:e.postid,title:e.posttitle,content:null===e.postdesc?"No Description":e.postdesc,image:null===e.imagebin?K:e.imagebin})})))),l.a.createElement("div",{id:"homecontent"},l.a.createElement("h3",{style:{margin:"none"}},"Must Read"),l.a.createElement("div",{className:"homecard-horizontal-view"},!0===this.state.mustreadloading?l.a.createElement(Y,null,l.a.createElement(F,{title:"Loading",content:"Content Loading",variant:"loading"}),l.a.createElement(F,{title:"Loading",content:"Content Loading",variant:"loading"}),l.a.createElement(F,{title:"Loading",content:"Content Loading",variant:"loading"})):this.state.mustread.map((function(e){return l.a.createElement(F,{id:e.postid,title:e.posttitle,content:null===e.postdesc?"No Description":e.postdesc,image:null===e.imagebin?K:e.imagebin})}))),l.a.createElement("h3",{style:{margin:"none"}},"Recent Articles"),l.a.createElement("div",{className:"list-view"},this.state.recent.map((function(e){return l.a.createElement(M,{id:e.postid,title:e.posttitle,content:e.postdesc,image:e.imagebin})})))))),l.a.createElement(T,null))}}]),a}(n.Component),$=a(54),ee=a.n($),te=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"share",value:function(){var e=Object(A.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open(t,"_self");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"safe-area"},l.a.createElement("section",{className:"banner-holder"},l.a.createElement("div",{className:"banner"},l.a.createElement("p",null,"Andril 360"),l.a.createElement("img",{src:ee.a,alt:""}))),l.a.createElement("section",{className:"infotxt"},"Andril 360 is here to furnish enlightening and engaging content for you to read and enjoy! Discover articles on mysteries, technology, politics, archaeology and other 7 diverse articles on our platform."),l.a.createElement("section",{className:"sharebtns"},l.a.createElement("button",{className:"wa",onClick:function(){return e.share("whatsapp://send?text=Hey+Join+Me+on+Andril360+%2C+Gain+Knowledge+for+free%0D%0A%0D%0Ahttp%3A%2F%2Fandril.netlify.app")}},l.a.createElement(x.h,null)," Invite Friends via Whatsapp"),l.a.createElement("button",{className:"tl",onClick:function(){return e.share("https://telegram.me/share/url?text=Hey Join Me on Andril360 Gain Knowledge for free&url=%0D%0A%0D%0Ahttp%3A%2F%2Fandril.netlify.app")}},l.a.createElement(x.f,null)," Invite Friends via Telegram")),l.a.createElement("section",{className:"ccholder"},l.a.createElement("div",{className:"copyright"},l.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-nd/3.0/"},l.a.createElement("img",{alt:"Creative Commons License",style:{borderWidth:0},src:"https://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png"})),l.a.createElement("br",null),"This work is licensed under a"," ",l.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-nd/3.0/"},"Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License"))))),l.a.createElement(T,null))}}]),a}(n.Component);function ae(){var e=Object(B.a)(["\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  font-size: 0.9rem;\n  border-radius: 6px;\n  border: solid 2px #e8505b;\n  background: rgba(232, 80, 91, 0.3);\n  display: none;\n  color: ",";\n  font-weight: 500;\n"]);return ae=function(){return e},e}var ne=U.a.span(ae(),(function(e){return e.color})),le=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={email:null,password:null},n.login=n.login.bind(Object(h.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"loginAnon",value:function(){localStorage.setItem("uid","sampleuidw83q498"),window.location.reload()}},{key:"login",value:function(){var e=Object(A.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.a.fire({html:'<img src="'+k.a+'" alt="uploading" height="100px" width="100px" /> <br/> Logining in , Please Wait',showConfirmButton:!1}),t={email:this.state.email,pass:this.state.password},e.next=4,f.a.post("https://blooming-shelf-29088.herokuapp.com/api/login",t).then((function(e){"USRLGD"===e.data.code?(y.a.close(),localStorage.setItem("uid",e.data.userdata.uid),window.location.reload()):"PWDERR"===e.data.code?(y.a.close(),document.getElementById("passerr").style.display="block"):"USRERR"===e.data.code?(y.a.close(),document.getElementById("nousr").style.display="block"):(y.a.close(),console.log(e))}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.Fade,{top:!0},l.a.createElement("div",{className:"login-area"},l.a.createElement("div",{className:"normal-greet"},l.a.createElement("img",{src:N.a,alt:""}),l.a.createElement("h2",null,"Login"),l.a.createElement("div",{className:"form"},l.a.createElement("label",{htmlFor:"email"},"Email ID :"),l.a.createElement("input",{type:"email",onChange:this.handleInputChange,name:"email",id:"email",placeholder:"Enter your Email ID","aria-label":"Email Address"}),l.a.createElement("label",{htmlFor:"password"},"Password :"),l.a.createElement("input",{type:"password",onChange:this.handleInputChange,name:"password",id:"password",placeholder:"Enter your Password"}),l.a.createElement("button",{onClick:this.login},"Log in"),l.a.createElement("button",{className:"outline",onClick:this.loginAnon},"Use without Login"),l.a.createElement(ne,{color:"#e8505b",id:"passerr"},"Password incorrect"),l.a.createElement(ne,{color:"#e8505b",id:"nousr"},"No User Found for given Email ID")),l.a.createElement("div",{className:"regislink mobileregis"},l.a.createElement(d.b,{to:"/register",className:"link"},l.a.createElement("span",{style:{fontSize:"16px",fontStyle:"normal"}},"New to Andril ? Create Account")))))))}}]),a}(n.Component),re=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.Fade,null,l.a.createElement("div",{className:"center-layout"},l.a.createElement("img",{src:H.a,alt:"loading"}))))}}]),a}(n.Component),oe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.Fade,null,l.a.createElement("div",{className:"center-layout"},l.a.createElement("img",{src:P.a,alt:"loading"}))))}}]),a}(n.Component);function ie(){var e=Object(B.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n"]);return ie=function(){return e},e}var ce=U.a.div(ie()),se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:null,isloading:!0,categorynow:"tamil"},n.handleCategoryChange=n.handleCategoryChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getData("tamil")}},{key:"handleCategoryChange",value:function(e){this.setState({isloading:!0,categorynow:e.target.id}),window.navigator.vibrate(20),console.log("categorynow is"+this.state.categorynow),document.getElementById(this.state.categorynow).className="category-btn",document.getElementById(e.target.id).className="category-btn active-btn",console.log(e.target.id),this.getData(e.target.id)}},{key:"getData",value:function(){var e=Object(A.a)(D.a.mark((function e(t){var a=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://blooming-shelf-29088.herokuapp.com/api/posts/"+t).then((function(e){a.setState({data:e.data.postdata,isloading:!1}),console.log(e.data.postdata)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null),l.a.createElement(g.Fade,null,l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"safe-area search-layout"},l.a.createElement("div",{className:"flexslide"},l.a.createElement("span",null,l.a.createElement("i",{class:"fas fa-angle-double-left fa-lg colored"})),l.a.createElement("span",null,l.a.createElement("i",{class:"fas fa-angle-double-right fa-lg colored"}))),l.a.createElement("div",{className:"search-categories"},l.a.createElement("button",{className:"category-btn active-btn",primary:!0,onClick:this.handleCategoryChange,id:"tamil"},"Tamil History"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"medicine"},"Medicine"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"mystery"},"Mystery"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"business"},"Business"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"archaeology"},"Archaeology"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"environment"},"Environment"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"art"},"Art"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"imagination"},"Imagination"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"politics"},"Politics"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"tech"},"Tech"),l.a.createElement("button",{className:"category-btn",primary:!0,onClick:this.handleCategoryChange,id:"crime_stories"},"Crime Stories")),l.a.createElement(ce,null,!0===this.state.isloading?l.a.createElement(oe,null):0===this.state.data.length?l.a.createElement(re,null):this.state.data.map((function(e){return l.a.createElement(M,{id:e.postid,title:e.posttitle,content:e.postdesc,image:null===e.imagebin?"https://i.pinimg.com/originals/7f/ff/42/7fff4212cff021c7dc579d837347f92c.jpg":e.imagebin})})))))))}}]),a}(n.Component);function me(){var e=Object(B.a)(["\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  font-size: 0.9rem;\n  border-radius: 6px;\n  border: solid 2px #e8505b;\n  background: rgba(232, 80, 91, 0.3);\n  display: none;\n  color: ",";\n  font-weight: 500;\n"]);return me=function(){return e},e}var de=U.a.span(me(),(function(e){return e.color})),ue=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:null,email:null,password:null},n.signup=n.signup.bind(Object(h.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"signup",value:function(){y.a.fire({html:'<img src="'+k.a+'" alt="uploading" height="100px" width="100px" /> <br/> Registering , Please Wait',showConfirmButton:!1});var e={name:this.state.name,email:this.state.email,pass:this.state.password};f.a.post("https://blooming-shelf-29088.herokuapp.com/api/signin",e).then((function(e){"USRCRT"===e.data.code?(y.a.close(),localStorage.setItem("uid",e.data.uid),window.location.reload()):"USRFND"===e.data.code&&(y.a.close(),document.getElementById("usrfnd").style.display="block")}))}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(p.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.Slide,{bottom:!0},l.a.createElement("div",{className:"login-area"},l.a.createElement("div",{className:"normal-greet"},l.a.createElement("img",{src:N.a,alt:""}),l.a.createElement("h2",null,"Welcome to Andril"),l.a.createElement("div",{className:"form"},l.a.createElement("input",{type:"text",onChange:this.handleInputChange,name:"name",id:"name",placeholder:"Enter your Display Name","aria-label":"Display Name"}),l.a.createElement("input",{type:"email",onChange:this.handleInputChange,name:"email",id:"email",placeholder:"Enter your Email ID","aria-label":"Email Address"}),l.a.createElement(de,{color:"#e8505b",id:"usrfnd"},"Email id already in Use")," ",l.a.createElement("input",{type:"password",onChange:this.handleInputChange,name:"password",id:"password",placeholder:"Enter your Password"}),l.a.createElement("button",{onClick:this.signup},"Sign Up")),l.a.createElement("div",{className:"regislink mobileregis"},l.a.createElement(d.b,{to:"/",className:"link"},l.a.createElement("span",{style:{fontSize:"16px",fontStyle:"normal"}},"Have an Account? Login !")))))))}}]),a}(n.Component),pe=a(33),he=a.n(pe),ge=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:[],isloading:!0,id:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({id:this.props.match.params.id}),document.body.style.background="#ffffff";var t=this.props.match.params.id;f.a.get("https://blooming-shelf-29088.herokuapp.com/api/posts/search/id/"+t).then((function(t){console.log(t),"PSTDTA"===t.data.code&&(e.setState({data:t.data.postdata,isloading:!1}),document.getElementById("body-tamil").innerHTML=he()(null==t.data.postdata.bodytamil?"- no data found":t.data.postdata.bodytamil))}))}},{key:"componentWillUnmount",value:function(){this.resetTheme()}},{key:"themeToggle",value:function(e){console.log(document.body.style.backgroundColor),"rgb(255, 255, 255)"===document.body.style.backgroundColor?(document.body.style.backgroundColor="rgb(51, 51, 51)",document.body.style.color="rgb(255, 255, 255)",document.getElementById("drkbtn").innerHTML="<i class='fas fa-sun fa-lg sun'></i>"):(document.body.style.backgroundColor="rgb(255, 255, 255)",document.body.style.color="rgb(51, 51, 51)",document.getElementById("drkbtn").innerHTML="<i class='fas fa-moon fa-lg moon'></i>")}},{key:"resetTheme",value:function(){document.body.style.backgroundColor="rgb(255, 255, 255)",document.body.style.color="rgb(51, 51, 51)"}},{key:"render",value:function(){return this.state.isloading?l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"safearea center-layout"},l.a.createElement("img",{src:P.a,alt:"Loading"}),l.a.createElement("div",{id:"body-tamil"}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"reader-top-bar"},l.a.createElement("h3",{className:"reader-top-bar-title"},void 0===this.state.data.posttitletamil?this.state.data.posttitle:this.state.data.posttitletamil),l.a.createElement("div",{className:"ctrls"},l.a.createElement("div",{className:"tamilview"},l.a.createElement(d.b,{to:"../../article/en/"+this.state.id},l.a.createElement("button",null,"English ",l.a.createElement("br",null)," View"))),l.a.createElement("div",{className:"darkmode-cont"},l.a.createElement("button",{className:"darkmodebtn",id:"drkbtn",onClick:this.themeToggle},l.a.createElement("i",{class:"fas fa-moon fa-lg moon"}))))),l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"reader safearea"},l.a.createElement("div",{className:"image-cont"},l.a.createElement("img",{src:this.state.data.imagebin,height:"300px",width:"300px",style:{borderRadius:"8px"},alt:""})),l.a.createElement("img",{src:this.state,alt:""}),l.a.createElement("p",{id:"body-tamil",className:"article-body"}))))}}]),a}(n.Component),be=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:[],isloading:!0,id:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({id:this.props.match.params.id}),document.body.style.background="#ffffff";var t=this.props.match.params.id;f.a.get("https://blooming-shelf-29088.herokuapp.com/api/posts/search/id/"+t).then((function(t){console.log(t),"PSTDTA"===t.data.code&&(e.setState({data:t.data.postdata,isloading:!1}),document.getElementById("body").innerHTML=he()(null==t.data.postdata.body?"- no data found":t.data.postdata.body))}))}},{key:"componentWillUnmount",value:function(){this.resetTheme()}},{key:"themeToggle",value:function(e){console.log(document.body.style.backgroundColor),"rgb(255, 255, 255)"===document.body.style.backgroundColor?(document.body.style.backgroundColor="rgb(51, 51, 51)",document.body.style.color="rgb(255, 255, 255)",document.getElementById("drkbtn").innerHTML="<i class='fas fa-sun fa-lg sun'></i>"):(document.body.style.backgroundColor="rgb(255, 255, 255)",document.body.style.color="rgb(51, 51, 51)",document.getElementById("drkbtn").innerHTML="<i class='fas fa-moon fa-lg moon'></i>")}},{key:"resetTheme",value:function(){document.body.style.backgroundColor="rgb(255, 255, 255)",document.body.style.color="rgb(51, 51, 51) "}},{key:"changeView",value:function(){}},{key:"render",value:function(){return this.state.isloading?l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"safearea center-layout"},l.a.createElement("img",{src:P.a,alt:"Loading"}),l.a.createElement("div",{id:"body"}),l.a.createElement("div",{id:"body-tamil"}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"reader-top-bar"},l.a.createElement("h3",{className:"reader-top-bar-title"},this.state.data.posttitle),l.a.createElement("div",{className:"ctrls"},l.a.createElement("div",{className:"tamilview"},l.a.createElement(d.b,{to:"../../article/ta/"+this.state.id},l.a.createElement("button",null,"Tamil ",l.a.createElement("br",null)," View"))),l.a.createElement("div",{className:"darkmode-cont"},l.a.createElement("button",{className:"darkmodebtn",id:"drkbtn",onClick:this.themeToggle},l.a.createElement("i",{class:"fas fa-moon fa-lg moon"}))))),l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"reader safearea"},l.a.createElement("div",{className:"image-cont"},l.a.createElement("img",{src:this.state.data.imagebin,height:"300px",width:"300px",style:{borderRadius:"8px"},alt:""})),l.a.createElement("img",{src:this.state,alt:""}),l.a.createElement("p",{id:"body",className:"article-body"}))))}}]),a}(n.Component),fe=function(e){return l.a.createElement("div",{style:{display:"inline-flex",justifyContent:"center",background:e.color,padding:"1em",textAlign:"center",height:"200px",width:"250px",margin:".5em",borderRadius:"8px",boxShadow:"2px 2px 8px rgba(0,0,0,.1)"}},l.a.createElement("img",{src:e.image,alt:e.alt}))},Ee=a(55),ye=a.n(Ee),ve=a(56),ke=a.n(ve),Ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).signOut=n.signOut.bind(Object(h.a)(n)),n.state={userdata:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"signOut",value:function(){localStorage.removeItem("uid"),this.props.history.push("/"),window.location.reload()}},{key:"getUser",value:function(){var e=this;f.a.get("https://blooming-shelf-29088.herokuapp.com/api/users/"+localStorage.getItem("uid")).then((function(t){console.log(t),e.setState({userdata:t.data.userdata})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null),l.a.createElement(g.Fade,null,l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"safearea"},l.a.createElement("div",{className:"user-account"},l.a.createElement("h3",null,"Welcome"," ",l.a.createElement("span",{style:{color:"#ff847c"}},void 0===this.state.userdata?"loading":this.state.userdata.displayname)," "),l.a.createElement("p",null,l.a.createElement("strong",null,"Email :")," ",void 0===this.state.userdata?"loading":this.state.userdata.emailid),l.a.createElement("div",{className:"box-cont"},l.a.createElement(fe,{color:"#d54062",image:ye.a,alt:"Usage Data"}),l.a.createElement(fe,{color:"#f9d56e",image:ke.a,alt:"Share Andril"})),l.a.createElement("button",{onClick:this.signOut},"Sign Out"))))),l.a.createElement(T,null))}}]),a}(n.Component),Ne=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={uid:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({uid:localStorage.getItem("uid")})}},{key:"render",value:function(){return null!=this.state.uid?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0,component:Z}),l.a.createElement(u.a,{path:"/addarticle",exact:!0,component:I}),l.a.createElement(u.a,{path:"/search",exact:!0,component:se}),l.a.createElement(u.a,{path:"/usr",exact:!0,component:Ce}),l.a.createElement(u.a,{path:"/about",exact:!0,component:te}),l.a.createElement(u.a,{path:"/article/ta/:id",exact:!0,component:ge}),l.a.createElement(u.a,{path:"/article/en/:id",exact:!0,component:be})))):l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0,component:le}),l.a.createElement(u.a,{path:"/register",exact:!0,component:ue}),l.a.createElement(u.a,{path:"/article/ta/:id",exact:!0,component:ge}),l.a.createElement(u.a,{path:"/article/en/:id",exact:!0,component:be}))))}}]),a}(l.a.Component);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ne,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.6dcccfa3.chunk.js.map