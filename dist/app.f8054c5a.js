parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"h2M7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){return"\n\t\t<div>\n      <h1>About Page</h1>\n    </div>\n\t"},t=e;exports.default=t;
},{}],"h205":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(){return"\n\t\t<div>\n      <h1>Contact Page</h1>\n    </div>\n\t"},e=t;exports.default=e;
},{}],"G5Xn":[function(require,module,exports) {

},{}],"ffN9":[function(require,module,exports) {
"use strict";var e=o(require("./components/pages/About")),s=o(require("./components/pages/Contact"));function o(e){return e&&e.__esModule?e:{default:e}}require("./scss/app.scss"),console.log("Feel free to use this boilerplate!");
},{"./components/pages/About":"h2M7","./components/pages/Contact":"h205","./scss/app.scss":"G5Xn"}]},{},["ffN9"], null)
//# sourceMappingURL=app.f8054c5a.js.map