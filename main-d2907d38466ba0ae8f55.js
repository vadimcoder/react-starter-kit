webpackJsonp([1],{"54kb":function(e,t,n){"use strict";var o=n("CwoH"),r=(n.n(o),n("NKHc")),a=(n.n(r),n("AFY3"));r.render(o.createElement(a.a,{name:"John"}),document.querySelector("#app"))},AFY3:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("CwoH"),c=(n.n(i),n("5D9O")),u=n.n(c),l=n("ISwk"),s=n.n(l),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={toggle:!0},n.onClickHandler=n.onClickHandler.bind(n),n}return a(t,e),f(t,[{key:"onClickHandler",value:function(){this.setState(function(e){return{toggle:!e.toggle}})}},{key:"render",value:function(){return i.createElement("div",null,i.createElement("div",null,"Hello ",i.createElement("span",{className:s.a.name},this.props.name)),i.createElement("button",{className:s.a.submitButton,onClick:this.onClickHandler},"toggle: ",this.state.toggle?"ON":"OFF"))}}]),t}(i.Component);t.a=p,p.propTypes={name:u.a.string.isRequired}},ISwk:function(e,t){e.exports={primaryColor:"primaryColor-3Y6c7",name:"name-pEUl2 primaryColor-3Y6c7",submitButton:"submitButton-32f9X"}},Px9a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("fufD");n.n(o),n("54kb")},fufD:function(e,t,n){e.exports=n.p+"favicon.ico"}},["Px9a"]);