(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(65)},41:function(e,t,a){},42:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),i=a(7),o=(a(41),a(1)),s=a(2),u=a(4),h=a(3),m=a(5),p=(a(42),a(14)),d=a(33),g=a(11),v=a.n(g),f=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{email:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})},v.a.withCredentials=!0;var a=v.a.create({baseURL:"/auth",withCredentials:!0});this.service=a},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).logoutUser=function(){a.service.logout().then(function(){a.setState({loggedInUser:null}),a.props.getUser(null)})},a.state={loggedInUser:null},a.service=new f,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(d.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},"Early edition")),r.a.createElement(i.b,{to:"/"},r.a.createElement("p",{onClick:function(){return e.logoutUser()}},"Logout"))):r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},"Early edition")),r.a.createElement(i.b,{to:"/signup"},r.a.createElement("p",{className:"login"},"Se connecter")))}}]),t}(n.Component);var b=function(){return r.a.createElement("footer",{className:"App-footer"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.c,{to:"/contacter",activeClassName:"selected",activeStyle:{fontWeight:"bold",color:"red"}},"Contacter")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/apropos",activeClassName:"selected",activeStyle:{fontWeight:"bold",color:"red"}},"A propos"))))},C=a(13),O=a.n(C),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=document.getElementById("title"),n=document.getElementById("title-container");t.clientHeight<=n.clientHeight&&a.props.onChange(e.target.value)},a.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain").slice(0,23);document.execCommand("insertHTML",!1,t)},a.render=function(){var e=a.props.title.replace(/&nbsp;/g," ").toUpperCase();return r.a.createElement(O.a,{innerRef:a.contentEditable,html:e,disabled:!1,onChange:a.handleChange,onPaste:a.pasteAsPlainText,onBlur:a.props.onBlur,tagName:"h1",id:"title"})},a.contentEditable=r.a.createRef(),a.state={html:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.title!==e.title&&this.setState({html:this.props.title})}}]),t}(r.a.Component),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var a=document.getElementById("chapeau"),n=document.getElementById("chapeau-container");a.clientHeight<=n.clientHeight&&e.props.onChange(t.target.value)},e.disableEnter=function(e){13===(e.keyCode||e.which)&&(e.returnValue=!1,e.preventDefault&&e.preventDefault())},e.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain").slice(0,195);document.execCommand("insertHTML",!1,t)},e.render=function(){var t=e.props.chapeau.replace(/&nbsp;/g," ");return r.a.createElement(O.a,{innerRef:e.contentEditable,html:t,disabled:!1,onChange:e.handleChange,onPaste:e.pasteAsPlainText,onKeyPress:e.disableEnter,onBlur:e.props.onBlur,tagName:"h3",id:"chapeau"})},e.contentEditable=r.a.createRef(),e.state={html:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.chapeau!==e.chapeau&&this.setState({html:this.props.chapeau})}}]),t}(r.a.Component),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var a=document.getElementById("content"),n=document.getElementById("content-container");(a.clientHeight<=n.clientHeight||n.scrollWidth<=a.clientWidth)&&e.props.onChange(t.target.value)},e.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain").slice(0,195);document.execCommand("insertHTML",!1,t)},e.createParagraph=function(t){if(13===(t.keyCode||t.which)){var a=e.state.html.replace(/<div>/g,"<p>");e.setState({html:a})}},e.render=function(){var t=e.props.text.replace(/&nbsp;/g," ");return r.a.createElement(O.a,{innerRef:e.contentEditable,html:t,disabled:!1,onChange:e.handleChange,onPaste:e.pasteAsPlainText,onKeyPress:e.createParagraph,onBlur:e.props.onBlur,tagName:"p",id:"content"})},e.contentEditable=r.a.createRef(),e.state={html:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.text!==e.text&&this.setState({html:this.props.text})}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=document.getElementById("name"),n=document.getElementById("name-container");t.clientHeight<=n.clientHeight&&a.props.onChange(e.target.value)},a.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain").slice(0,20);document.execCommand("insertHTML",!1,t)},a.render=function(){var e=a.props.name.replace(/&nbsp;/g," ").toLowerCase();return r.a.createElement(O.a,{innerRef:a.contentEditable,html:e,disabled:!1,onChange:a.handleChange,onPaste:a.pasteAsPlainText,onBlur:a.props.onBlur,tagName:"p",id:"name"})},a.contentEditable=r.a.createRef(),a.state={html:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.setState({html:this.props.name})}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChangeName=function(e){a.setState({name:e})},a.handleChangeText=function(e){a.setState({text:e})},a.handleChangeChapeau=function(e){a.setState({chapeau:e})},a.handleChangeTitle=function(e){a.setState({title:e})},a.saveChange=function(){v.a.patch("/api/articles/".concat(a.props.article._id),a.state).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a.state={name:"",title:"",chapeau:"",text:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.article!==e.article&&this.setState({name:this.props.article.name,title:this.props.article.title,chapeau:this.props.article.chapeau,text:this.props.article.text})}},{key:"render",value:function(){var e=null,t=null,a=null,n=null;return this.state.title&&(e=r.a.createElement(x,{name:this.state.name,onBlur:this.saveChange,onChange:this.handleChangeName}),t=r.a.createElement(j,{title:this.state.title,onBlur:this.saveChange,onChange:this.handleChangeTitle}),a=r.a.createElement(y,{chapeau:this.state.chapeau,onBlur:this.saveChange,onChange:this.handleChangeChapeau}),n=r.a.createElement(w,{text:this.state.text,onBlur:this.saveChange,onChange:this.handleChangeText})),r.a.createElement("section",{className:"editing-article"},r.a.createElement("div",{className:"name-article",id:"name-container"},e),r.a.createElement("div",{className:"whole-article"},r.a.createElement("div",{className:"title",id:"title-container"},t),r.a.createElement("div",{className:"chapeau",id:"chapeau-container"},a),r.a.createElement("div",{className:"article-content",id:"content-container"},n)))}}]),t}(n.Component);var S=function(){return r.a.createElement("div",{className:"home-content"},r.a.createElement("div",{className:"welcome"},r.a.createElement("ul",null,r.a.createElement("li",null,"Choisissez votre format"),r.a.createElement("li",null,"Compl\xe9tez l'article"),r.a.createElement("li",null,"Imprimez-le !")),r.a.createElement("h3",null,"Essayez, c'est facile ;)")))};var U=function(){return r.a.createElement("div",{className:"contact-content"},r.a.createElement("form",null,r.a.createElement("input",{type:"text"}),r.a.createElement("textarea",null)))};var k=function(){return r.a.createElement("div",{className:"about-content"},r.a.createElement("h1",null,"A propos d'Early Edition"))};var I=function(e){return r.a.createElement("div",{className:"whole-articleCard"},r.a.createElement("div",{className:"titleCard",id:"title-containerCard"},r.a.createElement("h1",{id:"titleCard"},e.article.title)),r.a.createElement("div",{className:"chapeauCard",id:"chapeau-containerCard"},r.a.createElement("h3",{id:"chapeauCard"},e.article.chapeau)),r.a.createElement("div",{className:"article-contentCard",id:"content-containerCard"},r.a.createElement("p",{id:"contentCard"},e.article.text)))},D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).deleteOne=function(e){var t=e.target.id;v.a.delete("/api/articles/".concat(t),{withCredentials:!0}).then(a.setState({articles:a.state.articles.filter(function(e){return e._id!==t})}))},console.log(a.props),a.state={articles:[],new:{title:"ENTREZ LE TITRE",chapeau:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getAllArticles",value:function(){var e=this;v.a.get("/api/articles",{withCredentials:!0}).then(function(t){e.setState({articles:t.data})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.getAllArticles()}},{key:"addNew",value:function(){var e=this;v.a.post("/api/articles",{withCredentials:!0}).then(function(t){return e.props.history.push("/".concat(t.data._id))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"all-content"},r.a.createElement("div",{className:"one-article new-article"},r.a.createElement(I,{article:this.state.new}),r.a.createElement("h3",{onClick:function(t){return e.addNew()}},"Nouvel article")),this.state.articles.map(function(t){return r.a.createElement("div",{className:"one-article"},r.a.createElement(I,{article:t}),r.a.createElement(i.b,{key:t._id,to:"/".concat(t._id)},r.a.createElement("h3",null,t.name)),r.a.createElement("p",{id:t._id,onClick:function(t){return e.deleteOne(t)}},"Supprimer"))}))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(u.a)(this,Object(h.a)(t).call(this)),console.log("One article"),a.state={article:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props.location.pathname.split("/");v.a.get("/api/articles/".concat(t[1]),{withCredentials:!0}).then(function(t){return e.setState({article:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=null;return this.state.article&&(e=r.a.createElement(N,{article:this.state.article})),r.a.createElement("div",{className:"one-content"},e)}}]),t}(n.Component),B=a(16),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({email:"",password:""}),a.props.getUser(e),a.props.history.push("/")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(B.a)({},n,r))},a.state={email:"",password:""},a.service=new f,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(i.b,{to:"/login"}," Login")))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:"",password:""}),a.props.getUser(e),a.props.history.push("/")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(B.a)({},n,r))},a.state={email:"",password:""},a.service=new f,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have account?",r.a.createElement(i.b,{to:"/signup"}," Signup")))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new f,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),console.log(this.state.loggedInUser),this.state.loggedInUser?r.a.createElement("div",{className:"App"},r.a.createElement(E,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),r.a.createElement("section",{className:"main-container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/contacter",component:U}),r.a.createElement(p.a,{path:"/apropos",component:k}),r.a.createElement(p.a,{path:"/:id",component:T}),r.a.createElement(p.a,{path:"/",component:D}))),r.a.createElement(b,null)):r.a.createElement("div",{className:"App"},r.a.createElement(E,{userInSession:this.state.loggedInUser}),r.a.createElement("section",{className:"main-container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:S}),r.a.createElement(p.a,{exact:!0,path:"/contacter",component:U}),r.a.createElement(p.a,{path:"/apropos",component:k}),r.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(A,{getUser:e.getTheUser})}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(P,{getUser:e.getTheUser})}}))),r.a.createElement(b,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.68daac90.chunk.js.map