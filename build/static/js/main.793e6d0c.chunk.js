(this.webpackJsonpflowers=this.webpackJsonpflowers||[]).push([[0],{31:function(r,e,t){},32:function(r,e,t){},33:function(r,e,t){},34:function(r,e,t){"use strict";t.r(e);var n=t(2),o=t(0),a=t.n(o),c=t(12),s=t.n(c),d=t(3),i=t.n(d),u=t(4),p=t(6),f=t(7),l=t(9),h=t(8),O=t(5),j=(t(31),"http://localhost:9999"),b=function(){var r=Object(u.a)(i.a.mark((function r(){var e,t;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(j+"/orderarr",{method:"GET"});case 2:if(200===(e=r.sent).status){r.next=5;break}throw new Error("getFlorists returned ".concat(e.status));case 5:return r.next=7,e.json();case 7:return t=r.sent,r.abrupt("return",t);case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),I=function(){var r=Object(u.a)(i.a.mark((function r(e){var t,n,o;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(j+"/orderarr",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:if(200===(t=r.sent).status){r.next=5;break}throw new Error("addFlorist returned ".concat(t.status));case 5:return r.next=7,t.json();case 7:n=r.sent,o=n.info,console.log(o);case 10:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=Object(u.a)(i.a.mark((function r(e){var t,n,o,a,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.order,n=e.orderArrId,r.next=3,fetch(j+"/orderarr/".concat(n,"/order"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:if(o=r.sent,console.log(o),200===o.status){r.next=7;break}throw new Error("addOrder returned ".concat(o.status));case 7:return r.next=9,o.json();case 9:a=r.sent,c=a.info,console.log(c);case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=Object(u.a)(i.a.mark((function r(e){var t,n,o,a,c,s,d;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.orderId,n=e.orderArrId,o=e.newName,a=e.newAuthor,r.next=3,fetch(j+"/orderarr/".concat(n,"/order/").concat(t),{method:"PATCH",body:JSON.stringify({newName:o,newAuthor:a}),headers:{"Content-Type":"application/json"}});case 3:if(200===(c=r.sent).status){r.next=6;break}throw new Error("editOrderName returned ".concat(c.status));case 6:return r.next=8,c.json();case 8:s=r.sent,d=s.info,console.log(d);case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),A=function(){var r=Object(u.a)(i.a.mark((function r(e){var t,n,o,a,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.orderId,n=e.orderArrId,r.next=3,fetch(j+"/orderarr/".concat(n,"/order/").concat(t),{method:"DELETE"});case 3:if(200===(o=r.sent).status){r.next=6;break}throw new Error("removeOrder returned ".concat(o.status));case 6:return r.next=8,o.json();case 8:a=r.sent,c=a.info,console.log(c);case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),w=function(){var r=Object(u.a)(i.a.mark((function r(e){var t,n,o,a,c,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.orderId,n=e.orderArrId,o=e.destShelfId,r.next=3,fetch(j+"/orderarr/".concat(n),{method:"PATCH",body:JSON.stringify({orderId:t,destShelfId:o}),headers:{"Content-Type":"application/json"}});case 3:if(200===(a=r.sent).status){r.next=6;break}throw new Error("removeOrder returned ".concat(a.status));case 6:return r.next=8,a.json();case 8:c=r.sent,s=c.info,console.log(s);case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),x=t(1),y=(t(32),"ADD_FLORIST"),k="ADD_ORDER",D="EDIT_ORDER_NAME",N="EDIT_ORDER_AUTHOR",E="REMOVE_ORDER",g="DOWNLOAD_ORDERS_DATA",R="MOVE_ORDER_LEFT",S="MOVE_ORDER_RIGHT",C=function(r){Object(l.a)(t,r);var e=Object(h.a)(t);function t(){var r;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=e.call.apply(e,[this].concat(o))).moveLeft=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={orderId:r.props.orderId,orderArrId:r.props.orderArrId},e.next=3,w(Object(x.a)(Object(x.a)({},t),{},{destShelfId:t.orderArrId-1}));case 3:r.props.moveOrderLeftDispatch(t);case 4:case"end":return e.stop()}}),e)}))),r.moveRight=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={orderId:r.props.orderId,orderArrId:r.props.orderArrId},e.next=3,w(Object(x.a)(Object(x.a)({},t),{},{destShelfId:t.orderArrId+1}));case 3:r.props.moveOrderRightDispatch(t);case 4:case"end":return e.stop()}}),e)}))),r.onRemove=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0430?")){e.next=3;break}return e.abrupt("return");case 3:return t={orderId:r.props.orderId,orderArrId:r.props.orderArrId},e.next=6,A(t);case 6:r.props.removeOrderDispatch(t);case 7:case"end":return e.stop()}}),e)}))),r.onAuthorEdit=Object(u.a)(i.a.mark((function e(){var t,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=prompt("\u0418\u0417\u041c\u0415\u041d\u0418\u0422\u042c \u0418\u041c\u042f \u041a\u0410\u041d\u0414\u0418\u0414\u0410\u0422\u0410"))&&t.trim()){e.next=4;break}return alert("\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),e.abrupt("return");case 4:return t=t.trim(),n=r.props.florists[r.props.orderArrId].orders[r.props.orderId],o={orderId:r.props.orderId,orderArrId:r.props.orderArrId,newAuthor:t},e.next=9,v(Object(x.a)(Object(x.a)({},o),{},{newName:n.name}));case 9:r.props.editOrderAuthorDispatch(o);case 10:case"end":return e.stop()}}),e)}))),r.onNameEdit=Object(u.a)(i.a.mark((function e(){var t,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=prompt("\u0418\u0417\u041c\u0415\u041d\u0418\u0422\u042c \u0422\u0420\u0415\u0411\u041e\u0412\u0410\u041d\u0418\u042f"))&&t.trim()){e.next=4;break}return alert("\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),e.abrupt("return");case 4:return t=t.trim(),n=r.props.florists[r.props.orderArrId].orders[r.props.orderId],o={orderId:r.props.orderId,orderArrId:r.props.orderArrId,newName:t},e.next=9,v(Object(x.a)(Object(x.a)({},o),{},{newAuthor:n.author}));case 9:r.props.editOrderNameDispatch(o);case 10:case"end":return e.stop()}}),e)}))),r}return Object(f.a)(t,[{key:"render",value:function(){var r=this.props,e=r.orderId,t=r.orderArrId,o=this.props.florists[t].orders[e];return Object(n.jsxs)("div",{className:"orderarr-order",children:[Object(n.jsxs)("div",{className:"orderarr-order-description",children:[Object(n.jsx)("div",{className:"orderarr-order-name",children:o.name}),Object(n.jsx)("div",{className:"orderarr-order-author",children:o.author})]}),Object(n.jsxs)("div",{className:"orderarr-order-controls",children:[Object(n.jsxs)("div",{className:"orderarr-order-controls-row",children:[Object(n.jsx)("div",{className:"orderarr-order-controls-icon left-arrow-icon",onClick:this.moveLeft}),Object(n.jsx)("div",{className:"orderarr-order-controls-icon right-arrow-icon",onClick:this.moveRight})]}),Object(n.jsx)("div",{className:"orderarr-order-controls-row",children:Object(n.jsx)("div",{className:"orderarr-order-controls-icon delete-icon",onClick:this.onRemove})}),Object(n.jsxs)("div",{className:"orderarr-order-controls-row",children:[Object(n.jsx)("div",{className:"orderarr-order-controls-icon editcust-icon",onClick:this.onAuthorEdit}),Object(n.jsx)("div",{className:"orderarr-order-controls-icon editdesc-icon",onClick:this.onNameEdit})]})]})]})}}]),t}(o.PureComponent),T=Object(O.b)((function(r){return{florists:r.florists}}),(function(r){return{editOrderNameDispatch:function(e){var t=e.orderId,n=e.orderArrId,o=e.newName;return r(function(r){var e=r.orderId,t=r.orderArrId,n=r.newName;return{type:D,payload:{orderId:e,orderArrId:t,newName:n}}}({orderId:t,orderArrId:n,newName:o}))},editOrderAuthorDispatch:function(e){var t=e.orderId,n=e.orderArrId,o=e.newAuthor;return r(function(r){var e=r.orderId,t=r.orderArrId,n=r.newAuthor;return{type:N,payload:{orderId:e,orderArrId:t,newAuthor:n}}}({orderId:t,orderArrId:n,newAuthor:o}))},removeOrderDispatch:function(e){var t=e.orderId,n=e.orderArrId;return r(function(r){var e=r.orderId,t=r.orderArrId;return{type:E,payload:{orderId:e,orderArrId:t}}}({orderId:t,orderArrId:n}))},moveOrderLeftDispatch:function(e){var t=e.orderId,n=e.orderArrId;return r(function(r){var e=r.orderId,t=r.orderArrId;return{type:R,payload:{orderId:e,orderArrId:t}}}({orderId:t,orderArrId:n}))},moveOrderRightDispatch:function(e){var t=e.orderId,n=e.orderArrId;return r(function(r){var e=r.orderId,t=r.orderArrId;return{type:S,payload:{orderId:e,orderArrId:t}}}({orderId:t,orderArrId:n}))}}}))(C),_=function(r){Object(l.a)(t,r);var e=Object(h.a)(t);function t(){var r;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=e.call.apply(e,[this].concat(o))).onOrderAdd=Object(u.a)(i.a.mark((function e(){var t,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=prompt("\u0418\u041c\u042f \u041a\u041e\u041d\u0414\u0418\u0414\u0410\u0422\u0410",""))&&t.trim()){e.next=4;break}return alert("\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),e.abrupt("return");case 4:if(t=t.trim(),(n=prompt("\u041e\u041f\u042b\u0422 \u0420\u0410\u0411\u041e\u0422\u042b","").trim())&&n.trim()){e.next=9;break}return alert("\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),e.abrupt("return");case 9:return n=n.trim(),o={order:{name:t,author:n},orderArrId:r.props.orderArrId},e.next=13,m(o);case 13:r.props.addOrderDispatch(o);case 14:case"end":return e.stop()}}),e)}))),r}return Object(f.a)(t,[{key:"render",value:function(){var r=this.props.orderArrId,e=this.props.florists[r];return Object(n.jsxs)("div",{className:"orderarr",children:[Object(n.jsx)("header",{className:"orderarr-name",children:e.name}),Object(n.jsx)("div",{className:"orderarr-orders",children:e.orders.map((function(e,t){return Object(n.jsx)(T,{orderId:t,orderArrId:r},"order-".concat(t))}))}),Object(n.jsx)("footer",{className:"orderarr-add-task",onClick:this.onOrderAdd,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})}}]),t}(o.PureComponent),F=Object(O.b)((function(r){return{florists:r.florists}}),(function(r){return{addOrderDispatch:function(e){var t=e.order,n=e.orderArrId;return r(function(r){var e=r.order,t=r.orderArrId;return{type:k,payload:{order:e,orderArrId:t}}}({order:t,orderArrId:n}))}}}))(_),V=(t(33),function(r){Object(l.a)(t,r);var e=Object(h.a)(t);function t(){var r;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=e.call.apply(e,[this].concat(o))).state={isInputActive:!1,inputValue:""},r.inputFlorist=function(){r.setState({isInputActive:!0})},r.onKeyDown=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Escape"===t.key&&r.setState({isInputState:!1,inputValue:""}),"Enter"!==t.key){e.next=8;break}return n=r.state.inputValue,r.setState({isInputState:!1,inputValue:""}),o={name:n,orders:[]},e.next=7,I(o);case 7:r.props.addFloristDispatch(o);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),r.onInputChange=function(e){r.setState({inputValue:e.target.value})},r}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var r=Object(u.a)(i.a.mark((function r(){var e;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b();case 2:e=r.sent,this.props.downloadOrdersDataDispatch(e);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"render",value:function(){var r=this.state,e=r.inputValue,t=r.isInputActive;return Object(n.jsxs)(o.Fragment,{children:[Object(n.jsx)("header",{id:"main-header",children:"Flower Shop"}),Object(n.jsxs)("main",{id:"main-container",children:[this.props.florists.map((function(r,e){return Object(n.jsx)(F,{orderArrId:e},"orderarr-".concat(e))})),Object(n.jsxs)("div",{className:"orderarr",children:[t&&Object(n.jsx)("input",{type:"text",id:"add-orderarr-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0438 ",value:e,onChange:this.onInputChange,onKeyDown:this.onKeyDown}),!t&&Object(n.jsx)("header",{className:"orderarr-name",onClick:this.inputFlorist,children:"\u041d\u041e\u0412\u0410\u042f \u0412\u0410\u041a\u0410\u041d\u0421\u0418\u042f"})]})]})]})}}]),t}(o.PureComponent)),L=Object(O.b)((function(r){return{florists:r.florists}}),(function(r){return{addFloristDispatch:function(e){return r(function(r){return{type:y,payload:r}}(e))},downloadOrdersDataDispatch:function(e){return r(function(r){return{type:g,payload:r}}(e))}}}))(V),P=t(10),J=t(19),M=t.n(J),H=t(11),K={florists:[]};var G=Object(P.c)((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.payload,o=null;switch(t){case y:return Object(x.a)(Object(x.a)({},r),{},{florists:[].concat(Object(H.a)(r.florists),[n])});case k:return Object(x.a)(Object(x.a)({},r),{},{florists:r.florists.map((function(r,e){return e===n.orderArrId?Object(x.a)(Object(x.a)({},r),{},{orders:[].concat(Object(H.a)(r.orders),[n.order])}):r}))});case D:return Object(x.a)(Object(x.a)({},r),{},{florists:r.florists.map((function(r,e){return e===n.orderArrId?Object(x.a)(Object(x.a)({},r),{},{orders:r.orders.map((function(r,e){return e===n.orderId?Object(x.a)(Object(x.a)({},r),{},{name:n.newName}):r}))}):r}))});case N:return Object(x.a)(Object(x.a)({},r),{},{florists:r.florists.map((function(r,e){return e===n.orderArrId?Object(x.a)(Object(x.a)({},r),{},{orders:r.orders.map((function(r,e){return e===n.orderId?Object(x.a)(Object(x.a)({},r),{},{author:n.newAuthor}):r}))}):r}))});case E:return Object(x.a)(Object(x.a)({},r),{},{florists:r.florists.map((function(r,e){return e===n.orderArrId?Object(x.a)(Object(x.a)({},r),{},{orders:r.orders.filter((function(r,e){return e!==n.orderId}))}):r}))});case g:return Object(x.a)(Object(x.a)({},r),{},{florists:n});case R:return o=r.florists[n.orderArrId].orders[n.orderId],Object(x.a)(Object(x.a)({},r),{},{florists:r.florists.map((function(r,e){return e===n.orderArrId?Object(x.a)(Object(x.a)({},r),{},{orders:r.orders.filter((function(r,e){return e!==n.orderId}))}):e===n.orderArrId-1?Object(x.a)(Object(x.a)({},r),{},{orders:[].concat(Object(H.a)(r.orders),[o])}):r}))});case S:return o=r.florists[n.orderArrId].orders[n.orderId],Object(x.a)(Object(x.a)({},r),{},{florists:r.florists.map((function(r,e){return e===n.orderArrId?Object(x.a)(Object(x.a)({},r),{},{orders:r.orders.filter((function(r,e){return e!==n.orderId}))}):e===n.orderArrId+1?Object(x.a)(Object(x.a)({},r),{},{orders:[].concat(Object(H.a)(r.orders),[o])}):r}))});default:return r}}),Object(P.a)(M.a));s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O.a,{store:G,children:Object(n.jsx)(L,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.793e6d0c.chunk.js.map