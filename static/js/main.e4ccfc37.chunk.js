(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(1),i=n.n(o),s=n(12),u=n.n(s),l=n(15),d=n(6),b=n(7),h=n(9),j=n(8),p=n(4),m=n.n(p),f=n(2),x=n(3),O=x.a.ul(a||(a=Object(f.a)(["\nlist-style: none;\n\n"]))),v=x.a.li(r||(r=Object(f.a)(["\npadding: 3px;\n"]))),g=x.a.button(c||(c=Object(f.a)(["\nmargin-left: 10px;\nborder: 1px solid grey;\n&:hover, &:focus {\n    background-color: blue;\n    border: 1px solid blue;\n    color: white;\n}"]))),y=n(0);function C(e){var t=e.contacts,n=e.deleteContact;return Object(y.jsx)(O,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(y.jsxs)(v,{children:[Object(y.jsxs)("span",{children:[a,": ",r]}),Object(y.jsx)(g,{type:"button",onClick:function(){return n(t)},children:"Delete"})]},m.a.generate())}))})}var I,w,S,k,A,z,F=n(14),N=x.a.form(I||(I=Object(f.a)(["\nbox-sizing: border-box;\npadding: 10px;\ndisplay: flex;\njustify-content: space-evenly;\nflex-direction: column;\nwidth: 350px;\nheight: 150px;\nborder: 1px solid grey;\n"]))),L=x.a.label(w||(w=Object(f.a)(["\ndisplay: flex;\nflex-direction: column;\n"]))),T=x.a.input(S||(S=Object(f.a)(["\n&:hover, &:focus{\n    border: 2px solid blue;\n}\n"]))),J=x.a.button(k||(k=Object(f.a)(["\nwidth: 100px;\nborder: 1px solid grey;\n&:hover, &:focus{\n    background-color: blue;\n    border: 1px solid blue;\n    color: white;\n}\n"]))),Z=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.numberInputId=m.a.generate(),e.nameInputId=m.a.generate(),e.handleInputName=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(F.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.contacts.find((function(t){return t.name.toLowerCase()===e.state.name.toLowerCase()}))?alert("".concat(e.state.name," is already in the list.")):(e.props.onSubmit(e.state),e.reset())},e.reset=function(){e.setState({name:"",number:""})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(N,{onSubmit:this.handleSubmit,children:[Object(y.jsxs)(L,{htmlFor:this.nameInputId,children:["Name",Object(y.jsx)(T,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.handleInputName,required:!0,id:this.nameInputId})]}),Object(y.jsxs)(L,{htmlFor:this.numberInputId,children:["Number",Object(y.jsx)(T,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputName,id:this.numberInputId})]}),Object(y.jsx)(J,{type:"submit",children:"Add contact"})]})}}]),n}(o.Component),q=x.a.label(A||(A=Object(f.a)(["\nwidth: 350px;\ndisplay: flex;\nflex-direction: column;\n"]))),B=x.a.input(z||(z=Object(f.a)(["\n&:hover, &:focus {\n    border: 2px solid blue;\n}\n"])));function D(e){var t=e.value,n=e.onChange;return Object(y.jsxs)(q,{children:["Find contacts by name",Object(y.jsx)(B,{type:"text",value:t,onChange:n})]})}n(11);var H=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.formSubmitHandler=function(t){var n=t.name,a=t.number,r={id:m.a.generate(),name:n,number:a};e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[r])}}))},e.onFilterChange=function(t){e.setState({filter:t.currentTarget.value})},e.contactsToRender=function(){var t=e.state,n=t.contacts,a=t.filter;return a?n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):n},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Phonebook"}),Object(y.jsx)(Z,{onSubmit:this.formSubmitHandler,contacts:this.state.contacts}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)(D,{value:this.state.filter,onChange:this.onFilterChange}),Object(y.jsx)(C,{contacts:this.contactsToRender(),deleteContact:this.deleteContact})]})}}]),n}(o.Component);u.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(H,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e4ccfc37.chunk.js.map