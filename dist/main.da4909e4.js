// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/Modules/plant-builder.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PlantRecomendation = /*#__PURE__*/function () {
  function PlantRecomendation(_ref) {
    var plant = _ref.plant,
      soil = _ref.soil,
      pot = _ref.pot;
    _classCallCheck(this, PlantRecomendation);
    this.plant = plant;
    this.soil = soil;
    this.pot = pot;
  }
  _createClass(PlantRecomendation, [{
    key: "addMoss",
    value: function addMoss() {
      this.moss = "moss-pole";
    }
  }, {
    key: "addPebbles",
    value: function addPebbles() {
      this.pebbles = "pebbles";
    }
  }, {
    key: "addGreenies",
    value: function addGreenies() {
      this.greenies = "mini-plants";
    }
  }]);
  return PlantRecomendation;
}();
module.exports = PlantRecomendation;
},{}],"../src/Modules/info-sheet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function importAll(r) {
  return r.keys().map(r);
}
var images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
function sheetBuilder() {
  var plantInfo = JSON.parse(localStorage.getItem("plant-info"));
  var sheetContainer = document.querySelector(".info-sheet--container");
  sheetContainer.innerHTML = "";
  // Create and insert the title element
  var titleElement = document.createElement("h2");
  titleElement.textContent = plantInfo.plant;
  sheetContainer.appendChild(titleElement);

  // Create and insert the container div for the images
  var imageContainer = document.createElement("div");
  imageContainer.id = "imageContainer";

  // Create and insert individual image elements (you can loop through an array of image URLs)
  var potImg = document.createElement("img");
  if (plantInfo.pot === "simple-ceramic-too") {
    for (var i = 0; i < images.length; i++) {
      if (images[i].includes('simple-ceramic-pot.png')) {
        potImg.src = images[i];
        break; // Detiene el bucle una vez que encuentra la imagen
      }
    }
  } else {
    potImg.src = "../images/".concat(plantInfo.pot, ".png");
  }
  imageContainer.appendChild(potImg);
  var soilImg = document.createElement("img");
  soilImg.src = "../images/soil-".concat(plantInfo.soil, ".png");
  imageContainer.appendChild(soilImg);
  var plantImg = document.createElement("img");
  plantImg.src = "images/plant-".concat(plantInfo.plant, ".png");
  imageContainer.appendChild(plantImg);
  sheetContainer.appendChild(imageContainer);

  // Create and insert the recommendation details
  var detailsElement = document.createElement("div");
  var nameElement = document.createElement("p");
  nameElement.textContent = "Name: ".concat(plantInfo.plant);
  detailsElement.appendChild(nameElement);
  var soilElement = document.createElement("p");
  soilElement.textContent = "Soil: ".concat(plantInfo.soil);
  detailsElement.appendChild(soilElement);
  var potElement = document.createElement("p");
  potElement.textContent = "Pot: ".concat(plantInfo.pot);
  detailsElement.appendChild(potElement);

  // const colorElement = document.createElement('p');
  // colorElement.textContent = `Color: ${recommendation.pot.color}`;
  // detailsElement.appendChild(colorElement);

  // const extrasElement = document.createElement('p');
  // extrasElement.textContent = `Extras: ${recommendation.extras.join(', ')}`;
  // detailsElement.appendChild(extrasElement);

  sheetContainer.appendChild(detailsElement);
}
var _default = sheetBuilder;
exports.default = _default;
},{}],"../src/Modules/plant-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _plantBuilder = _interopRequireDefault(require("./plant-builder"));
var _infoSheet = _interopRequireDefault(require("./info-sheet"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var formElements = document.getElementsByClassName("plants--form__answere");
// Obtener el formulario y los campos requeridos
var formulario = document.querySelector(".plants--form");
function formObject() {
  // Crear un array para almacenar los IDs de los elementos seleccionados
  var selectedIds = [];

  // Si todos los campos están llenos, enviar el formulario
  if (formulario.checkValidity()) {
    var newPlant;
    // Recorrer los elementos de formulario para verificar cuáles están seleccionados
    for (var i = 0; i < formElements.length; i++) {
      var element = formElements[i];
      if (element.checked) {
        selectedIds.push(element.id);
      }
    }
    if (selectedIds.length >= 5) {
      if (selectedIds[0] === "low-light-plant") {
        if (selectedIds[2] === "toxic-plant") {
          if (selectedIds[3] === "clay-pot") {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "simple-clay-pot"
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "simple-decorated-clay-pot"
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "painted-decorated-clay-pot"
              });
            }
          } else {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "sansevieria",
                soil: selectedIds[1],
                pot: "simple-".concat(selectedIds[3])
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "sansevieria",
                soil: selectedIds[1],
                pot: "simple-decorated-".concat(selectedIds[3])
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "sansevieria",
                soil: selectedIds[1],
                pot: "painted-decorated-".concat(selectedIds[3])
              });
            }
          }
        } else {
          if (selectedIds[3] === "clay-pot") {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "boston-fern",
                soil: "drainage",
                pot: "simple-clay-pot"
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "boston-fern",
                soil: "drainage",
                pot: "simple-decorated-clay-pot"
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "boston-fern",
                soil: "drainage",
                pot: "painted-decorated-clay-pot"
              });
            }
          } else {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "boston-fern",
                soil: selectedIds[1],
                pot: "simple-".concat(selectedIds[3])
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "boston-fern",
                soil: selectedIds[1],
                pot: "simple-decorated-".concat(selectedIds[3])
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "boston-fern",
                soil: selectedIds[1],
                pot: "painted-decorated-".concat(selectedIds[3])
              });
            }
          }
        }
      } else if (selectedIds[0] === "medium-light-plant") {
        if (selectedIds[2] === "toxic-plant") {
          if (selectedIds[3] === "clay-pot") {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "simple-clay-pot"
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "simple-decorated-clay-pot"
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "painted-decorated-clay-pot"
              });
            }
          } else {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "aglaonema",
                soil: selectedIds[1],
                pot: "simple-".concat(selectedIds[3])
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "aglaonema",
                soil: selectedIds[1],
                pot: "simple-decorated-".concat(selectedIds[3])
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "aglaonema",
                soil: selectedIds[1],
                pot: "painted-decorated-".concat(selectedIds[3])
              });
            }
          }
        } else {
          if (selectedIds[3] === "clay-pot") {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "simple-clay-pot"
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "simple-decorated-clay-pot"
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "peace-lily",
                soil: "drainage",
                pot: "painted-decorated-clay-pot"
              });
            }
          } else {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "monstera",
                soil: selectedIds[1],
                pot: "simple-".concat(selectedIds[3])
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "monstera",
                soil: selectedIds[1],
                pot: "simple-decorated-".concat(selectedIds[3])
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "monstera",
                soil: selectedIds[1],
                pot: "painted-decorated-".concat(selectedIds[3])
              });
            }
          }
        }
      } else {
        if (selectedIds[2] === "toxic-plant") {
          if (selectedIds[3] === "clay-pot") {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "aloe-vera",
                soil: "drainage",
                pot: "simple-clay-pot"
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "aloe-vera",
                soil: "drainage",
                pot: "simple-decorated-clay-pot"
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "aloe-vera",
                soil: "drainage",
                pot: "painted-decorated-clay-pot"
              });
            }
          } else {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "aloe-vera",
                soil: selectedIds[1],
                pot: "simple-".concat(selectedIds[3])
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "aloe-vera",
                soil: selectedIds[1],
                pot: "simple-decorated-".concat(selectedIds[3])
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "aloe-vera",
                soil: selectedIds[1],
                pot: "painted-decorated-".concat(selectedIds[3])
              });
            }
          }
        } else {
          if (selectedIds[3] === "clay-pot") {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "cactus",
                soil: "drainage",
                pot: "simple-clay-pot"
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "cactus",
                soil: "drainage",
                pot: "simple-decorated-clay-pot"
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "cactus",
                soil: "drainage",
                pot: "painted-decorated-clay-pot"
              });
            }
          } else {
            if (selectedIds[4] === "simple") {
              newPlant = new _plantBuilder.default({
                plant: "cactus",
                soil: selectedIds[1],
                pot: "simple-".concat(selectedIds[3])
              });
            } else if (selectedIds[4] === "simple-decorated") {
              newPlant = new _plantBuilder.default({
                plant: "cactus",
                soil: selectedIds[1],
                pot: "simple-decorated-".concat(selectedIds[3])
              });
            } else {
              newPlant = new _plantBuilder.default({
                plant: "cactus",
                soil: selectedIds[1],
                pot: "painted-decorated-".concat(selectedIds[3])
              });
            }
          }
        }
      }
      for (var _i = 5; _i < selectedIds.length; _i++) {
        if (selectedIds[_i] === "moss-pole") {
          newPlant.addMoss();
        }
        if (selectedIds[_i] === "pebbles") {
          newPlant.addPebbles();
        }
        if (selectedIds[_i] === "mini-plants") {
          newPlant.addGreenies();
        }
      }
      // Aquí puedes realizar cualquier acción que desees con los IDs de los elementos seleccionados
      console.log("Plant Recomendation:", newPlant);
      console.log("IDs de elementos seleccionados:", selectedIds);
      (0, _infoSheet.default)();
      localStorage.setItem("plant-info", JSON.stringify(newPlant));
    }
  } else {
    // Si no están completados, mostrar un mensaje de error
    alert("Please, complete the required questions to show your recommendation");
  }
}
var _default = formObject;
exports.default = _default;
},{"./plant-builder":"../src/Modules/plant-builder.js","./info-sheet":"../src/Modules/info-sheet.js"}],"../src/main.js":[function(require,module,exports) {
"use strict";

var _plantObject = _interopRequireDefault(require("./Modules/plant-object"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Obtener el botón "Get" por su ID
var getButton = document.querySelector(".get--button");
// Obtener todos los elementos de formulario por su clase

// Agregar un evento de clic al botón "Get"
getButton.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar el envío del formulario
  (0, _plantObject.default)();
});
},{"./Modules/plant-object":"../src/Modules/plant-object.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49928" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/main.js"], null)
//# sourceMappingURL=/main.da4909e4.js.map