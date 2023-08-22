// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({7:[function(require,module,exports) {
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlantRecomendation = function () {
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
    key: 'addColor',
    value: function addColor(color) {
      this.color = color;
    }
  }, {
    key: 'addMoss',
    value: function addMoss() {
      this.moss = 'moss-pole';
    }
  }, {
    key: 'addPebbles',
    value: function addPebbles() {
      this.pebbles = 'pebbles';
    }
  }, {
    key: 'addGreenies',
    value: function addGreenies() {
      this.greenies = 'mini-plants';
    }
  }]);

  return PlantRecomendation;
}();

module.exports = PlantRecomendation;
},{}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function sheetBuilder() {
  var plantInfo = JSON.parse(localStorage.getItem('plant-info'));
  var sheetContainer = document.querySelector('.info-sheet--container');
  var rgtBlock = document.querySelector('.right--block');
  var detailsElement = document.createElement('div');

  sheetContainer.style.backgroundColor = '#7f03fc';
  sheetContainer.innerHTML = '';

  var titleElement = document.createElement('h2');
  titleElement.textContent = plantInfo.plant;
  sheetContainer.appendChild(titleElement);

  var imageContainer = document.createElement('div');
  imageContainer.id = 'imageContainer';

  var potImg = document.createElement('img');
  if (plantInfo.pot === 'simple-ceramic-too') {
    potImg.src = 'images/simple-ceramic-pot.png';
  } else if (plantInfo.pot === 'simple-decorated-ceramic-too') {
    potImg.src = '../images/simple-decorated-ceramic-pot.png';
  } else if (plantInfo.pot === 'painted-decorated-ceramic-too') {
    potImg.src = '../images/blue-painted-decorated-ceramic-pot.png';
  } else {
    if (plantInfo.color) {
      potImg.src = '../images/' + plantInfo.color + '-' + plantInfo.pot + '.png';
    } else {
      potImg.src = '../images/' + plantInfo.pot + '.png';
    }
  }
  imageContainer.appendChild(potImg);

  var nameElement = document.createElement('p');
  nameElement.textContent = 'Name: ' + plantInfo.plant;
  detailsElement.appendChild(nameElement);

  var soilElement = document.createElement('p');
  soilElement.textContent = 'Soil: ' + plantInfo.soil;
  detailsElement.appendChild(soilElement);

  var potElement = document.createElement('p');
  potElement.textContent = 'Pot: ' + plantInfo.pot;
  detailsElement.appendChild(potElement);

  if (plantInfo.color) {
    var colorElement = document.createElement('p');
    colorElement.textContent = 'Color: ' + plantInfo.color;
    detailsElement.appendChild(colorElement);
  }

  if (plantInfo.greenies || plantInfo.moss || plantInfo.pebbles) {
    var extraElement = document.createElement('p');
    extraElement.textContent = 'Extras: ';
    if (plantInfo.greenies) {
      extraElement.textContent += plantInfo.greenies + ' ';
      var greeniesImg = document.createElement('img');
      greeniesImg.src = 'images/' + plantInfo.greenies + '.png';
      imageContainer.appendChild(greeniesImg);
    }if (plantInfo.pebbles) {
      extraElement.textContent += plantInfo.pebbles + ' ';
      var pebblesImg = document.createElement('img');
      pebblesImg.src = 'images/' + plantInfo.pebbles + '.png';
      imageContainer.appendChild(pebblesImg);
    }if (plantInfo.moss) {
      extraElement.textContent += plantInfo.moss + ' ';
      var mossImg = document.createElement('img');
      mossImg.src = 'images/' + plantInfo.moss + '.png';
      imageContainer.appendChild(mossImg);
    }
    detailsElement.appendChild(extraElement);
  }

  var soilImg = document.createElement('img');
  soilImg.src = 'images/soil-' + plantInfo.soil + '.png';
  imageContainer.appendChild(soilImg);

  var plantImg = document.createElement('img');
  plantImg.src = 'images/plant-' + plantInfo.plant + '.png';
  imageContainer.appendChild(plantImg);

  sheetContainer.appendChild(imageContainer);
  sheetContainer.appendChild(detailsElement);

  var temp = document.getElementById('customize--button');

  var customizeBtn = document.createElement('a');
  customizeBtn.textContent = 'Customize!';
  customizeBtn.id = 'customize--button';
  customizeBtn.href = '../pages/customize.html';
  if (!temp) {
    rgtBlock.appendChild(customizeBtn);
  }
}

exports.default = sheetBuilder;
},{}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plantBuilder = require("./plant-builder");

var _plantBuilder2 = _interopRequireDefault(_plantBuilder);

var _infoSheet = require("./info-sheet");

var _infoSheet2 = _interopRequireDefault(_infoSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formElements = document.getElementsByClassName("plants--form__answere");
// Obtener el formulario y los campos requeridos
var formulario = document.querySelector('.plants--form');

function formObject() {
  // Crear un array para almacenar los IDs de los elementos seleccionados
  var selectedIds = [];

  // Si todos los campos están llenos, enviar el formulario
  if (formulario.checkValidity()) {
    var newPlant = void 0;
    // Recorrer los elementos de formulario para verificar cuáles están seleccionados
    for (var i = 0; i < formElements.length; i++) {
      var element = formElements[i];
      if (element.checked) {
        selectedIds.push(element.id);
      }
    }
    if (selectedIds.length >= 5) {
      if (selectedIds[0] === 'low-light-plant') {
        if (selectedIds[2] === 'toxic-plant') {
          if (selectedIds[3] === 'clay-pot') {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-clay-pot' });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              newPlant.addColor('blue');
            }
          } else {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'sansevieria', soil: selectedIds[1], pot: "simple-" + selectedIds[3] });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'sansevieria', soil: selectedIds[1], pot: "simple-decorated-" + selectedIds[3] });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'sansevieria', soil: selectedIds[1], pot: "painted-decorated-" + selectedIds[3] });
              newPlant.addColor('blue');
            }
          }
        } else {
          if (selectedIds[3] === 'clay-pot') {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'fern', soil: 'drainage', pot: 'simple-clay-pot' });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'fern', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'fern', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              newPlant.addColor('blue');
            }
          } else {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'fern', soil: selectedIds[1], pot: "simple-" + selectedIds[3] });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'fern', soil: selectedIds[1], pot: "simple-decorated-" + selectedIds[3] });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'fern', soil: selectedIds[1], pot: "painted-decorated-" + selectedIds[3] });
              newPlant.addColor('blue');
            }
          }
        }
      } else if (selectedIds[0] === 'medium-light-plant') {
        if (selectedIds[2] === 'toxic-plant') {
          if (selectedIds[3] === 'clay-pot') {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-clay-pot' });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              newPlant.addColor('blue');
            }
          } else {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'aglaonema', soil: selectedIds[1], pot: "simple-" + selectedIds[3] });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'aglaonema', soil: selectedIds[1], pot: "simple-decorated-" + selectedIds[3] });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'aglaonema', soil: selectedIds[1], pot: "painted-decorated-" + selectedIds[3] });
              newPlant.addColor('blue');
            }
          }
        } else {
          if (selectedIds[3] === 'clay-pot') {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-clay-pot' });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'peace-lily', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              newPlant.addColor('blue');
            }
          } else {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'monstera', soil: selectedIds[1], pot: "simple-" + selectedIds[3] });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'monstera', soil: selectedIds[1], pot: "simple-decorated-" + selectedIds[3] });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'monstera', soil: selectedIds[1], pot: "painted-decorated-" + selectedIds[3] });
              newPlant.addColor('blue');
            }
          }
        }
      } else {
        if (selectedIds[2] === 'toxic-plant') {
          if (selectedIds[3] === 'clay-pot') {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'aloe', soil: 'drainage', pot: 'simple-clay-pot' });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'aloe', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'aloe', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              newPlant.addColor('blue');
            }
          } else {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'aloe', soil: selectedIds[1], pot: "simple-" + selectedIds[3] });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'aloe', soil: selectedIds[1], pot: "simple-decorated-" + selectedIds[3] });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'aloe', soil: selectedIds[1], pot: "painted-decorated-" + selectedIds[3] });
              newPlant.addColor('blue');
            }
          }
        } else {
          if (selectedIds[3] === 'clay-pot') {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'cactus', soil: 'drainage', pot: 'simple-clay-pot' });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'cactus', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'cactus', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              newPlant.addColor('blue');
            }
          } else {
            if (selectedIds[4] === 'simple') {
              newPlant = new _plantBuilder2.default({ plant: 'cactus', soil: selectedIds[1], pot: "simple-" + selectedIds[3] });
            } else if (selectedIds[4] === 'simple-decorated') {
              newPlant = new _plantBuilder2.default({ plant: 'cactus', soil: selectedIds[1], pot: "simple-decorated-" + selectedIds[3] });
            } else {
              newPlant = new _plantBuilder2.default({ plant: 'cactus', soil: selectedIds[1], pot: "painted-decorated-" + selectedIds[3] });
              newPlant.addColor('blue');
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
      localStorage.setItem("plant-info", JSON.stringify(newPlant));
      (0, _infoSheet2.default)();
    }
  } else {
    // Si no están completados, mostrar un mensaje de error
    alert('Please, complete the required questions to show your recommendation');
  }
}
exports.default = formObject;
},{"./plant-builder":7,"./info-sheet":6}],3:[function(require,module,exports) {
"use strict";

var _plantObject = require("./Modules/plant-object");

var _plantObject2 = _interopRequireDefault(_plantObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getButton = document.querySelector(".get--button");
var clearButton = document.querySelector(".clear--button");

var sheetContainer = document.querySelector('.info-sheet--container');
var formulario = document.querySelector('.plants--form');

// Agregar un evento de clic al botón "Get"
getButton.addEventListener("click", function (event) {
  event.preventDefault();
  (0, _plantObject2.default)();
});

// Agregar un evento de clic al botón "Clear"
clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  sheetContainer.style.backgroundColor = 'white';
  sheetContainer.innerHTML = '';
  formulario.reset();
});
},{"./Modules/plant-object":4}],9:[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52089' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
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
        parents.push(+k);
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[9,3], null)
//# sourceMappingURL=/main.5a7deb32.map