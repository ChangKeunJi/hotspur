(this.webpackJsonpspurs=this.webpackJsonpspurs||[]).push([[0],{229:function(e,t,a){e.exports=a(438)},234:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(223),c=a.n(o),s=(a(234),a(6)),l=a(7),i=a(9),m=a(8),u=a(10),p=a(224),d=a.n(p),f=a(50),b=a.n(f),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={matches:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.football-data.org/v2/teams/73/matches?status=SCHEDULED",{headers:{"X-Auth-Token":"9398b9f03e1b4dd89fce0a382693f699"}}).then((function(t){var a=t.data.matches.slice(0,4);e.setState({matches:a})})).catch((function(e){return console.log(e.message)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"event text-center"},r.a.createElement("ul",{className:"list-group"},this.state.matches.map((function(e){return function(e){var t=73===e.awayTeam.id?e.homeTeam.name:e.awayTeam.name,a=73===e.awayTeam.id?r.a.createElement("span",{className:"text-danger"},"Away"):r.a.createElement("span",{className:"text-success"},"Home");return r.a.createElement("li",{key:e.id,className:"list-group-item border border-primary bg-light"},r.a.createElement("p",{className:"border-bottom pb-3"},t," - ",r.a.createElement("span",null,a)),r.a.createElement("p",{className:"mb-0 mt-0"},b()(e.utcDate).format("LLL")))}(e)}))))}}]),t}(n.Component),E=a(34),g=function(){return r.a.createElement("div",{className:"left-section"},r.a.createElement("div",{className:"container"},r.a.createElement(E.LinkContainer,{to:"/"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"logo"}))),r.a.createElement("h4",{className:"text-center my-2"},"Upcoming Matches"),r.a.createElement(h,null)))},O=function(){return r.a.createElement("div",{className:"SignInUp"},r.a.createElement(E.LinkContainer,{to:"/signin"},r.a.createElement("button",{type:"button",className:"btn btn-block btn-outline-primary"},"Sign In")),r.a.createElement(E.LinkContainer,{to:"/signup"},r.a.createElement("button",{type:"button",className:"btn btn-block btn-outline-primary"},"Sign Up")))},v=function(e){var t=e.notifications;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("ul",{className:"list-group"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item bg-light"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("span",null,e.user)," ",r.a.createElement("span",{className:"text-dark"},e.content)),r.a.createElement("div",{className:"text-muted noti-date"},b()(e.time.toDate()).fromNow()))}))))},y=a(12),N=Object(y.b)(null,{signOut:function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}}})((function(e){return r.a.createElement("div",{className:"Profile text-center mb-3 border border-primary mt-2 rounded"},e.profileInfo.url?r.a.createElement("img",{src:e.profileInfo.url,className:"profile-image-profile mb-3 border border-primary"}):r.a.createElement("div",{className:"avatar-profile mb-3"}),r.a.createElement("h4",null,e.profileInfo.username),r.a.createElement("div",{className:"buttons d-flex flex-column"},r.a.createElement(E.LinkContainer,{to:"/"},r.a.createElement("button",{onClick:e.signOut,className:"btn btn-primary mt-3"},"Log Out")),r.a.createElement(E.LinkContainer,{to:"/create"},r.a.createElement("button",{className:"btn btn-primary mt-3"},"Create Post"))))})),j=a(28),S=a(22),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.profileInfo,n=e.notifications,o=t.uid?r.a.createElement(N,{profileInfo:a}):r.a.createElement(O,null);return r.a.createElement("div",{className:"right-section container"},o,r.a.createElement(v,{notifications:n}))}}]),t}(n.Component),C=Object(S.d)(Object(y.b)((function(e){return{auth:e.firebase.auth,profileInfo:e.firebase.profile,notifications:e.firestore.ordered.notifications}})),Object(j.firestoreConnect)([{collection:"notifications",limit:6,orderBy:["time","desc"]}]))(w),P=a(33),I=a(35),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(I.c,{to:"/"}):r.a.createElement("div",{className:"SignIn"},r.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},r.a.createElement("h3",{className:"text-center"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",className:"form-control",autoComplete:"off",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",className:"form-control",autoComplete:"off",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign in"),r.a.createElement("div",{className:"text-danger center mt-3"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),x=Object(y.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),{signIn:function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERROR",err:e})}))}}})(R),k=a(67),U=a.n(k);a(403),a(406),a(439);U.a.initializeApp({apiKey:"AIzaSyCpfPvInrmsR2wUm2copSnpXTGg2GvgZTM",authDomain:"spurs-e46d1.firebaseapp.com",databaseURL:"https://spurs-e46d1.firebaseio.com",projectId:"spurs-e46d1",storageBucket:"spurs-e46d1.appspot.com",messagingSenderId:"168145640242",appId:"1:168145640242:web:d5bb0d29a610876fa6152b"}),U.a.firestore();var D=U.a.storage(),T=U.a,F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",username:"",image:null,url:"",progress:0},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.handleImage=function(e){if(e.target.files[0]){var t=e.target.files[0];a.setState({image:t})}},a.handleUpload=function(e){e.preventDefault();var t=a.state.image;D.ref("images/".concat(t.name)).put(t).on("state_changed",(function(e){var t=100*Math.round(e.bytesTransferred/e.totalBytes);a.setState({progress:t})}),(function(e){console.log(e)}),(function(){D.ref("images").child(t.name).getDownloadURL().then((function(e){return a.setState({url:e})}))}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props.auth.uid)return r.a.createElement(I.c,{to:"/"});var t=this.state.image?this.state.image.name:"Choose File";return r.a.createElement("div",{className:"SignUp"},r.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},r.a.createElement("h3",{className:"text-center"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",className:"form-control",autoComplete:"off",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",className:"form-control",autoComplete:"off",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"username"},"User Name"),r.a.createElement("input",{type:"text",id:"username",className:"form-control",onChange:this.handleChange,autoComplete:"off"})),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"image",onChange:this.handleImage}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"image"},t)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:this.handleUpload},"Upload"))),r.a.createElement("div",{className:"d-flex flex-column justify-content-center text-center bg-light"},r.a.createElement("div",null,function(){if(e.state.progress>=1)return r.a.createElement("progress",{value:e.state.progress,max:"100"})}()),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.url,className:"img-fluid mt-2 mb-2 text-center border border-primary",height:"300",width:"200"}))),r.a.createElement("div",{className:"input-field text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up"))))}}]),t}(n.Component),L=Object(y.b)((function(e){return{auth:e.firebase.auth}}),{signUp:function(e){return function(t,a,n){var r=n.getFirebase,o=n.getFirestore,c=r(),s=o();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({username:e.username,url:e.url})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}})(F);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={body:""},a.handleChange=function(e){a.setState({body:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.createPost(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"CreatePost"},r.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},r.a.createElement("h3",{className:"text-center mt-5"},"Create Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{onChange:this.handleChange,type:"text",id:"body",className:"form-control",autoComplete:"off",placeholder:"What do you want to say ??"})),r.a.createElement("div",{className:"input-field text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create")))):r.a.createElement(I.c,{to:"/signin"})}}]),t}(n.Component),G=Object(I.o)(Object(y.b)((function(e){return{auth:e.firebase.auth}}),{createPost:function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),o=a().firebase.profile,c=a().firebase.auth.uid;r.collection("posts").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{username:o.username,userId:c,createdAt:new Date,url:o.url})).then((function(){t({type:"CREATE_POST",post:e})})).catch((function(e){t({type:"CREATE_POST_ERROR",err:e})}))}}})(A)),B=a(228),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(){var e=a.props.post;a.props.deletePost(e),console.log(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.post,n=t.auth;return r.a.createElement("div",{className:"Post mt-4"},r.a.createElement("div",{className:"card border-primary"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-xs-4 col-md-4 col-lg-2"},a.url?r.a.createElement("img",{src:a.url,className:"profile-image",alt:""}):r.a.createElement("div",{className:"avatar"})),r.a.createElement("div",{className:"col-xs-8 col-md-8 col-lg-10"},r.a.createElement("div",{className:"card-body bg-light"},r.a.createElement("div",{className:"card-text"},a.body)))),r.a.createElement("div",{className:"card-footer  d-flex justify-content-between"},r.a.createElement("span",{className:"font-weight-bold"},a.username),r.a.createElement("span",{className:"text-right"},a.userId===n.uid?r.a.createElement("span",{className:""},r.a.createElement("button",{className:"btn btn-outline-danger btn-sm mr-3",onClick:e.handleDelete},r.a.createElement(B.a,null)," Delete"," ")):null,b()(a.createdAt.toDate()).calendar()))))}}]),t}(n.Component),K=Object(y.b)((function(e){return{url:e.firebase.profile.url,auth:e.firebase.auth}}),{deletePost:function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("posts").doc(e.id).delete().then((function(){t({type:"DELETE_POST"})})).catch((function(e){t({type:"DELETE_POST_ERROR",err:e})}))}}})(W),M=function(e){var t=e.posts,a=e.profileInfo;return r.a.createElement("div",{className:""},t&&t.map((function(e){return r.a.createElement(K,{post:e,key:e.id,profileInfo:a})})))},J=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.posts,a=(e.auth,e.profileInfo);return r.a.createElement("div",{className:"center-section"},"/signin"===window.location.pathname?r.a.createElement(x,null):"/signup"===window.location.pathname?r.a.createElement(L,null):"/create"===window.location.pathname?r.a.createElement(G,null):"/"===window.location.pathname?r.a.createElement(M,{posts:t,profileInfo:a}):void 0)}}]),t}(n.Component),z=Object(I.o)(Object(S.d)(Object(y.b)((function(e){return console.log(e),{posts:e.firestore.ordered.posts,auth:e.firebase.auth,profileInfo:e.firebase.profile}})),Object(j.firestoreConnect)([{collection:"posts",orderBy:["createdAt","desc"]}]))(J)),H=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12"},r.a.createElement(g,null)),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement(z,null)),r.a.createElement("div",{className:"col-md-3 col-sm-12"},r.a.createElement(C,null)))}}]),t}(n.Component),X=a(27),Z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(X.BrowserRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement(I.g,null,r.a.createElement(I.d,{path:"/",component:H}),r.a.createElement(I.d,{path:"/",component:M}),r.a.createElement(I.d,{path:"/signin",component:x}),r.a.createElement(I.d,{path:"/signup",component:L}),r.a.createElement(I.d,{path:"/user/:id",component:N}),r.a.createElement(I.d,{path:"/create",component:G}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q={authError:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login failed"),q({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("login success"),q({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("Signout Success"),e;case"SIGNUP_SUCCESS":return console.log("Signup Success"),q({},e,{authError:null});case"SIGNUP_ERROR":return console.log("Signup Error"),q({},e,{authError:t.err.message});default:return e}},Y={posts:[{id:1,username:"Kane",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, magnam."},{id:2,username:"Kane",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, magnam."},{id:3,username:"Kane",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, magnam."}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_POST":return console.log("created post",t.post),e;case"CREATE_PROJECT_ERROR":return console.log("create post error",t.err),e;case"DELETE_POST":return console.log("Post Deleted"),e;case"DELETE_POST_ERROR":console.log("Delete Post Error",t.err);default:return e}},te=a(66),ae=Object(S.c)({auth:V,post:ee,firestore:te.firestoreReducer,firebase:j.firebaseReducer}),ne=a(227),re=Object(S.e)(ae,Object(S.d)(Object(S.a)(ne.a.withExtraArgument({getFirebase:j.getFirebase,getFirestore:te.getFirestore})),Object(te.reduxFirestore)(T),Object(j.reactReduxFirebase)(T,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));re.firebaseAuthIsReady.then((function(){c.a.render(r.a.createElement(y.a,{store:re},r.a.createElement(Z,null)),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[229,1,2]]]);
//# sourceMappingURL=main.f569da82.chunk.js.map