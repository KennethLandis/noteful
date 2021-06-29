(this["webpackJsonpnoteful-app"]=this["webpackJsonpnoteful-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(20),c=n.n(r),s=(n(26),n(18)),i=n(4),d=n(5),l=n(7),u=n(6),h=n(2),j=n(11),f=(n(27),o.a.createContext({notes:[],folders:[],handleDeleteNote:function(){},addFolder:function(){},addNote:function(){}})),m=n(0),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.context.folders;return Object(m.jsxs)("div",{className:"NoteListNav",children:[Object(m.jsx)("ul",{className:"FolderList",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(j.c,{className:"FolderLink",to:"/folder/".concat(e.id),children:e.folder_name})},e.id)}))}),Object(m.jsx)(j.b,{to:"/add-folder",children:Object(m.jsx)("button",{className:"add-folder",children:"Add Folder"})}),Object(m.jsx)("br",{}),Object(m.jsx)(j.b,{to:"/add-note",children:Object(m.jsx)("button",{className:"note-add-button",children:"Add Note"})})]})}}]),n}(a.Component);b.contextType=f;var p=b;function v(e){return Object(m.jsxs)("div",{className:"NotePageNav",children:[e.folder&&Object(m.jsx)("h3",{className:"folder_name",children:e.folder.name}),Object(m.jsx)("button",{tag:"button",role:"link",onClick:function(){return e.history.goBack()},children:"Go back"})]})}v.defaultProps={history:{goBack:function(){}}};var O=v,x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"deleteNote",value:function(e,t){var n=this;fetch("".concat("https://afternoon-taiga-00472.herokuapp.com","/notes/").concat(e),{method:"DELETE"}).then((function(e){return e.ok?e:e.json().then((function(e){throw e}))})).then((function(a){t(e),n.props.onDeleteNote(e)})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.id,o=t.modified,r=new Date(o).toDateString();return Object(m.jsx)(f.Consumer,{children:function(t){return Object(m.jsxs)("div",{className:"Note",children:[Object(m.jsx)("h2",{children:Object(m.jsx)(j.b,{className:"Note-name",to:"/note/".concat(a),children:n})}),Object(m.jsx)("div",{className:"Note-date",children:Object(m.jsxs)("div",{className:"Note-date-modified",children:["Last Modified: ","  "," ",r]})}),Object(m.jsx)("button",{className:"Note_delete",type:"button",onClick:function(){e.deleteNote(a,t.handleDeleteNote)},children:"Delete Note"})]})}})}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleDeleteNote=function(t){e.props.history.push("/")},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.match.params,n=function(e,t){return t?e.filter((function(e){return e.folder_id==t})):e}(this.context.notes,t.folderId);return Object(m.jsx)("section",{className:"NoteListMain",children:Object(m.jsx)("ul",{children:n.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)(x,{id:t.id,name:t.name,modified:t.modified,onDeleteNote:e.handleDeleteNote})},t.id)}))})})}}]),n}(a.Component);N.defaultProps={match:{params:{}}},N.contextType=f;var y=N,g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleDeleteNote=function(t){e.props.history.push("/")},e}return Object(d.a)(n,[{key:"render",value:function(){var e=function(e,t){return e.find((function(e){return e.id==t}))}(this.context.notes,this.props.match.params.noteId)||{content:""};return Object(m.jsxs)("section",{className:"NotePageMain",children:[Object(m.jsx)(x,{id:e.id,name:e.name,modified:e.modified,onDeleteNote:this.handleDeleteNote}),Object(m.jsx)("div",{className:"NotePageMain-Content",children:e.content.split(/\n \r|\r/).map((function(e,t){return Object(m.jsx)("p",{children:e},t)}))})]})}}]),n}(a.Component);g.defaultProps={match:{params:{}}},g.contextType=f;var k=g;var C=function(e){return e.message?Object(m.jsx)("div",{className:"error",children:e.message}):Object(m.jsx)(m.Fragment,{})},S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={name:{value:"",touched:!1}},a}return Object(d.a)(n,[{key:"updateName",value:function(e){this.setState({name:{value:e,touched:!0}})}},{key:"validateName",value:function(){var e=this.state.name.value.trim();return 0===e.length?"Name is required":e.length>12?"Name must be under 13 characters":void 0}},{key:"addFolder",value:function(e,t){fetch("".concat("https://afternoon-taiga-00472.herokuapp.com","/folders"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({folder_name:"".concat(e)})}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw e}))})).then((function(e){t(e)})).catch((function(e){console.error(e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.name.value;this.addFolder(t,this.context.addFolder)}},{key:"render",value:function(){var e=this,t=this.validateName();return Object(m.jsxs)("form",{className:"new-folder",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(m.jsx)("h2",{children:"Add New Folder"}),Object(m.jsx)("div",{className:"folder-hint"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"folder-name",children:"Folder Name: "}),Object(m.jsx)("input",{type:"text",className:"folder-control",name:"folder-name",id:"folder-name",onChange:function(t){return e.updateName(t.target.value)}}),this.state.name.touched&&Object(m.jsx)(C,{message:t}),Object(m.jsx)("button",{type:"reset",children:"Reset"}),Object(m.jsx)("button",{type:"submit",className:"folder-submit",disabled:this.validateName(),children:"Submit"})]})]})}}]),n}(a.Component);S.contextType=f;var D=S,F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={name:{value:"",touched:!1},content:{value:"",touched:!1}},a}return Object(d.a)(n,[{key:"addNote",value:function(e,t){var n=this;fetch("".concat("https://afternoon-taiga-00472.herokuapp.com","/notes"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw e}))})).then((function(e){console.log(e),t(e),n.props.history.push("./folder/".concat(e.folder_id))})).catch((function(e){console.error(e)}))}},{key:"updateName",value:function(e){this.setState({name:{value:e,touched:!0}})}},{key:"updateContent",value:function(e){this.setState({content:{value:e,touched:!0}})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={note_name:e.target.name.value,content:e.target.content.value,folder_id:e.target.folders.value,modified:new Date};this.addNote(t,this.context.addNote)}},{key:"validateName",value:function(){if(0===this.state.name.value.trim().length)return"Name is required"}},{key:"validateContent",value:function(){if(0===this.state.content.value.trim().length)return"Content is required"}},{key:"render",value:function(){var e=this,t=this.validateName(),n=this.validateContent(),a=this.context.folders;return Object(m.jsxs)("form",{className:"add-note",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(m.jsx)("h2",{children:"Add Note"}),Object(m.jsx)("div",{className:"addnote-hint"}),Object(m.jsxs)("div",{className:"form group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(m.jsx)("input",{type:"text",name:"name",onChange:function(t){return e.updateName(t.target.value)}}),this.state.name.touched&&Object(m.jsx)(C,{message:t}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"content",children:"Content: "}),Object(m.jsx)("input",{className:"note-content",type:"text",name:"content",onChange:function(t){return e.updateContent(t.target.value)}}),this.state.content.touched&&Object(m.jsx)(C,{message:n}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"folders",children:"Select A folder: "}),Object(m.jsx)("select",{name:"folders",id:"folders",children:a.map((function(e){return Object(m.jsx)("option",{name:e.id,value:e.id,children:e.folder_name},e.id)}))})]}),Object(m.jsx)("button",{type:"submit",disabled:this.validateContent()||this.validateName(),children:"Submit"})]})}}]),n}(a.Component);F.contextType=f;var P=F,w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(d.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(m.jsx)("h2",{children:"Could not display this content at this time, please try again later."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={notes:[],folders:[]},e.handleDeleteNote=function(t){var n=e.state.notes.filter((function(e){return e.id!==t}));e.setState({notes:n})},e.addFolder=function(t){var n=e.state.folders;n.push(t),e.setState({folders:n})},e.addNote=function(t){var n=e.state.notes;n.push(t),e.setState({notes:n})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://afternoon-taiga-00472.herokuapp.com";Promise.all([fetch("".concat(t,"/folders")),fetch("".concat(t,"/notes"))]).then((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return n.ok?a.ok?Promise.all([n.json(),a.json()]):a.json().then((function(e){return Promise.reject(e)})):n.json().then((function(e){return Promise.reject(e)}))})).then((function(t){var n=Object(s.a)(t,2),a=n[0],o=n[1];return e.setState({folders:a,notes:o})}))}},{key:"renderNavRoutes",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(w,{children:[["/","/folder/:folderId","/add-folder","/add-note"].map((function(e){return Object(m.jsx)(h.a,{exact:!0,path:e,component:p},e)})),Object(m.jsx)(h.a,{path:"/note/:noteId",component:O})]})})}},{key:"renderMainRoutes",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(w,{children:[["/","/folder/:folderId"].map((function(e){return Object(m.jsx)(h.a,{exact:!0,path:e,component:y},e)})),Object(m.jsx)(h.a,{path:"/note/:noteId",component:k}),Object(m.jsx)(h.a,{path:"/add-folder",component:D}),Object(m.jsx)(h.a,{path:"/add-note",component:P})]})})}},{key:"render",value:function(){var e={folders:this.state.folders,notes:this.state.notes,handleDeleteNote:this.handleDeleteNote,addFolder:this.addFolder,addNote:this.addNote};return Object(m.jsx)(f.Provider,{value:e,children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("nav",{className:"App-nav",children:this.renderNavRoutes()}),Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)("h1",{children:Object(m.jsx)(j.b,{to:"/",children:"Noteful"})})}),Object(m.jsx)("main",{className:"App-main",children:this.renderMainRoutes()})]})})}}]),n}(a.Component);c.a.render(Object(m.jsx)(j.a,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.46b1c02e.chunk.js.map