(this["webpackJsonpcopytoclipboard-example"]=this["webpackJsonpcopytoclipboard-example"]||[]).push([[0],{22:function(e,t,o){},23:function(e,t,o){"use strict";o.r(t);o(9);var r=o(0),n=o.n(r),a=o(2),i=o.n(a),c=o(4),l=o(6),s=o(7);o(21);"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var p="_3ybTi",u="_nD1dj",m=function(e){var t,o;function a(){var t;return(t=e.call(this)||this).copyToClipBoard=function(e){return Promise.resolve()},t.onClick=function(e){try{var t=e.target.innerText;console.log(e.target.innerText);var o=function(e,t){try{var o=e()}catch(r){return t(r)}return o&&o.then?o.then(void 0,t):o}((function(){return Promise.resolve(navigator.clipboard.writeText(t)).then((function(){c.b.success("Copied!")}))}),(function(){c.b.error("Failed to copy!")}));return Promise.resolve(o&&o.then?o.then((function(){})):void 0)}catch(r){return Promise.reject(r)}},t}return o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,a.prototype.render=function(){var e=this.props,t=e.height,o=e.width,a=e.text;return t=t?a:"40px",o=o||"fit-content",n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:p,style:{height:t,width:o},onClick:this.onClick},a||"please provide text",n.a.createElement("span",{className:u},n.a.createElement(l.a,{icon:s.a}))),n.a.createElement(c.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,draggable:!0}))},a}(n.a.Component);o(22);var y=()=>n.a.createElement(m,{text:"Sample text"});i.a.render(n.a.createElement(y,null),document.getElementById("root"))},8:function(e,t,o){e.exports=o(23)},9:function(e,t,o){}},[[8,1,2]]]);
//# sourceMappingURL=main.182d5f4b.chunk.js.map