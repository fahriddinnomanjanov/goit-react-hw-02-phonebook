(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__bLEsX",contactButton:"ContactListItem_contactButton__3xdsQ"}},13:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__-MKEg",filterInput:"Filter_filterInput__2P6fe"}},15:function(t,e,n){t.exports={contactList:"ContactList_contactList__2gMFh"}},2:function(t,e,n){t.exports={title:"FormAddContact_title__3BjsU",form:"FormAddContact_form__oOy2r",formTitle:"FormAddContact_formTitle__45c5v",input:"FormAddContact_input__1z-BO",button:"FormAddContact_button__XYnK6"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(14),o=n.n(r),s=n(4),i=n(6),l=n(7),u=n(10),m=n(9),b=n(8),d=n(3),j={name:"",number:""},h={type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0},f={type:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0},O=n(2),p=n.n(O),v=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(d.a)({},j),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.onSubmit)(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){console.log(this.state);var t=this.handleChange,e=this.handleSubmit,n=this.state,a=n.name,c=n.number;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{className:p.a.title,children:"Phonebook"}),Object(v.jsxs)("form",{onSubmit:e,className:p.a.form,children:[Object(v.jsxs)("div",{className:p.a.content,children:[Object(v.jsx)("h2",{className:p.a.formTitle,children:"Name"}),Object(v.jsx)("input",Object(d.a)(Object(d.a)({className:p.a.input,onChange:t},h),{},{value:a}))]}),Object(v.jsxs)("div",{className:p.a.content,children:[Object(v.jsx)("h2",{className:p.a.formTitle,children:"Number"}),Object(v.jsx)("input",Object(d.a)(Object(d.a)({className:p.a.input,onChange:t},f),{},{value:c}))]}),Object(v.jsx)("button",{className:p.a.button,children:"add contacts"})]})]})}}]),n}(a.Component),_=n(12),x=n.n(_),g=function(t){var e=t.name,n=t.number,a=t.onDelete;return Object(v.jsxs)("li",{className:x.a.contactListItem,children:[e,": ",n,Object(v.jsx)("button",{className:x.a.contactButton,onClick:a,children:"Delete"})]})},N=n(15),L=n.n(N),S=function(t,e){var n=t.list,a=t.onDelete,c=Object(s.a)(n).map((function(t){return Object(v.jsx)(g,Object(d.a)({onDelete:function(){return a(e)}},t),t.id)}));return Object(v.jsx)("ul",{className:L.a.contactList,children:c})},y=n(13),A=n.n(y),F=function(t){var e=t.value,n=t.onChange;return Object(v.jsxs)("label",{className:A.a.filterLabel,children:["Filtered by name ",Object(v.jsx)("input",{className:A.a.filterInput,type:"text",value:e,onChange:n})]})},I=n(16),k=n.n(I),w=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.addToContacts=function(e){var n=e.name,a=e.number,c={id:k.a.generate(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contact")):t.setState((function(t){return{contacts:[c].concat(Object(s.a)(t.contacts))}}))},t.handleDelete=function(e){t.setState((function(t){var n=Object(s.a)(t.contacts);return n.splice(e,1),{contacts:n}}))},t.handleFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getContacts=function(){var e=t.state,n=e.filter,a=e.contacts;if(!n)return a;var c=n.toLowerCase();return a.filter((function(t){return!!t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.handleDelete,e=this.getContacts,n=this.handleFilter,a=this.state.filter,c=e();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(C,{onSubmit:this.addToContacts}),Object(v.jsx)(F,{value:a,onChange:n}),Object(v.jsx)(S,{list:c,onDelete:t})]})}}]),n}(a.Component);o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5dae7997.chunk.js.map