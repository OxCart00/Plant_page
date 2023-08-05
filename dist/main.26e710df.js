parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tqm3":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(e){var n=i(e,"string");return"symbol"===t(n)?n:String(n)}function i(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,n||"default");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var u=function(){function t(n){var o=n.plant,r=n.soil,i=n.pot;e(this,t),this.plant=o,this.soil=r,this.pot=i}return o(t,[{key:"addMoss",value:function(){this.moss="moss-pole"}},{key:"addPebbles",value:function(){this.pebbles="pebbles"}},{key:"addGreenies",value:function(){this.greenies="mini-plants"}}]),t}();module.exports=u;
},{}],"kBS8":[function(require,module,exports) {
"use strict";function e(e){return e.keys().map(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require.context("../images",!1,/\.(png|jpe?g|svg)$/));function n(){var e=JSON.parse(localStorage.getItem("plant-info")),n=document.querySelector(".info-sheet--container");n.innerHTML="";var a=document.createElement("h2");a.textContent=e.plant,n.appendChild(a);var c=document.createElement("div");c.id="imageContainer";var o=document.createElement("img");if("simple-ceramic-too"===e.pot){for(var r=0;r<t.length;r++)if(t[r].includes("simple-ceramic-pot.png")){o.src=t[r];break}}else o.src="../images/".concat(e.pot,".png");c.appendChild(o);var p=document.createElement("img");p.src="../images/soil-".concat(e.soil,".png"),c.appendChild(p);var i=document.createElement("img");i.src="images/plant-".concat(e.plant,".png"),c.appendChild(i),n.appendChild(c);var l=document.createElement("div"),d=document.createElement("p");d.textContent="Name: ".concat(e.plant),l.appendChild(d);var m=document.createElement("p");m.textContent="Soil: ".concat(e.soil),l.appendChild(m);var s=document.createElement("p");s.textContent="Pot: ".concat(e.pot),l.appendChild(s),n.appendChild(l)}var a=n;exports.default=a;
},{}],"EKxu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./plant-builder")),a=t(require("./info-sheet"));function t(e){return e&&e.__esModule?e:{default:e}}var l=document.getElementsByClassName("plants--form__answere"),o=document.querySelector(".plants--form");function p(){var t=[];if(o.checkValidity()){for(var p,n=0;n<l.length;n++){var d=l[n];d.checked&&t.push(d.id)}if(t.length>=5){p="low-light-plant"===t[0]?"toxic-plant"===t[2]?"clay-pot"===t[3]?"simple"===t[4]?new e.default({plant:"peace-lily",soil:"drainage",pot:"simple-clay-pot"}):"simple-decorated"===t[4]?new e.default({plant:"peace-lily",soil:"drainage",pot:"simple-decorated-clay-pot"}):new e.default({plant:"peace-lily",soil:"drainage",pot:"painted-decorated-clay-pot"}):"simple"===t[4]?new e.default({plant:"sansevieria",soil:t[1],pot:"simple-".concat(t[3])}):"simple-decorated"===t[4]?new e.default({plant:"sansevieria",soil:t[1],pot:"simple-decorated-".concat(t[3])}):new e.default({plant:"sansevieria",soil:t[1],pot:"painted-decorated-".concat(t[3])}):"clay-pot"===t[3]?"simple"===t[4]?new e.default({plant:"boston-fern",soil:"drainage",pot:"simple-clay-pot"}):"simple-decorated"===t[4]?new e.default({plant:"boston-fern",soil:"drainage",pot:"simple-decorated-clay-pot"}):new e.default({plant:"boston-fern",soil:"drainage",pot:"painted-decorated-clay-pot"}):"simple"===t[4]?new e.default({plant:"boston-fern",soil:t[1],pot:"simple-".concat(t[3])}):"simple-decorated"===t[4]?new e.default({plant:"boston-fern",soil:t[1],pot:"simple-decorated-".concat(t[3])}):new e.default({plant:"boston-fern",soil:t[1],pot:"painted-decorated-".concat(t[3])}):"medium-light-plant"===t[0]?"toxic-plant"===t[2]?"clay-pot"===t[3]?"simple"===t[4]?new e.default({plant:"peace-lily",soil:"drainage",pot:"simple-clay-pot"}):"simple-decorated"===t[4]?new e.default({plant:"peace-lily",soil:"drainage",pot:"simple-decorated-clay-pot"}):new e.default({plant:"peace-lily",soil:"drainage",pot:"painted-decorated-clay-pot"}):"simple"===t[4]?new e.default({plant:"aglaonema",soil:t[1],pot:"simple-".concat(t[3])}):"simple-decorated"===t[4]?new e.default({plant:"aglaonema",soil:t[1],pot:"simple-decorated-".concat(t[3])}):new e.default({plant:"aglaonema",soil:t[1],pot:"painted-decorated-".concat(t[3])}):"clay-pot"===t[3]?"simple"===t[4]?new e.default({plant:"peace-lily",soil:"drainage",pot:"simple-clay-pot"}):"simple-decorated"===t[4]?new e.default({plant:"peace-lily",soil:"drainage",pot:"simple-decorated-clay-pot"}):new e.default({plant:"peace-lily",soil:"drainage",pot:"painted-decorated-clay-pot"}):"simple"===t[4]?new e.default({plant:"monstera",soil:t[1],pot:"simple-".concat(t[3])}):"simple-decorated"===t[4]?new e.default({plant:"monstera",soil:t[1],pot:"simple-decorated-".concat(t[3])}):new e.default({plant:"monstera",soil:t[1],pot:"painted-decorated-".concat(t[3])}):"toxic-plant"===t[2]?"clay-pot"===t[3]?"simple"===t[4]?new e.default({plant:"aloe-vera",soil:"drainage",pot:"simple-clay-pot"}):"simple-decorated"===t[4]?new e.default({plant:"aloe-vera",soil:"drainage",pot:"simple-decorated-clay-pot"}):new e.default({plant:"aloe-vera",soil:"drainage",pot:"painted-decorated-clay-pot"}):"simple"===t[4]?new e.default({plant:"aloe-vera",soil:t[1],pot:"simple-".concat(t[3])}):"simple-decorated"===t[4]?new e.default({plant:"aloe-vera",soil:t[1],pot:"simple-decorated-".concat(t[3])}):new e.default({plant:"aloe-vera",soil:t[1],pot:"painted-decorated-".concat(t[3])}):"clay-pot"===t[3]?"simple"===t[4]?new e.default({plant:"cactus",soil:"drainage",pot:"simple-clay-pot"}):"simple-decorated"===t[4]?new e.default({plant:"cactus",soil:"drainage",pot:"simple-decorated-clay-pot"}):new e.default({plant:"cactus",soil:"drainage",pot:"painted-decorated-clay-pot"}):"simple"===t[4]?new e.default({plant:"cactus",soil:t[1],pot:"simple-".concat(t[3])}):"simple-decorated"===t[4]?new e.default({plant:"cactus",soil:t[1],pot:"simple-decorated-".concat(t[3])}):new e.default({plant:"cactus",soil:t[1],pot:"painted-decorated-".concat(t[3])});for(var i=5;i<t.length;i++)"moss-pole"===t[i]&&p.addMoss(),"pebbles"===t[i]&&p.addPebbles(),"mini-plants"===t[i]&&p.addGreenies();console.log("Plant Recomendation:",p),console.log("IDs de elementos seleccionados:",t),(0,a.default)(),localStorage.setItem("plant-info",JSON.stringify(p))}}else alert("Please, complete the required questions to show your recommendation")}var n=p;exports.default=n;
},{"./plant-builder":"Tqm3","./info-sheet":"kBS8"}],"WSmw":[function(require,module,exports) {
"use strict";var e=t(require("./Modules/plant-object"));function t(e){return e&&e.__esModule?e:{default:e}}var u=document.querySelector(".get--button");u.addEventListener("click",function(t){t.preventDefault(),(0,e.default)()});
},{"./Modules/plant-object":"EKxu"}]},{},["WSmw"], null)
//# sourceMappingURL=/main.26e710df.js.map