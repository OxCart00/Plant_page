parcelRequire = (function (e, r, n, t) {
  function i(n, t) {
    function o(e) {
      return i(o.resolve(e));
    }
    function c(r) {
      return e[n][1][r] || r;
    }
    if (!r[n]) {
      if (!e[n]) {
        var l = "function" == typeof parcelRequire && parcelRequire;
        if (!t && l) return l(n, !0);
        if (u) return u(n, !0);
        if (f && "string" == typeof n) return f(n);
        var p = new Error("Cannot find module '" + n + "'");
        throw ((p.code = "MODULE_NOT_FOUND"), p);
      }
      o.resolve = c;
      var a = (r[n] = new i.Module(n));
      e[n][0].call(a.exports, o, a, a.exports, this);
    }
    return r[n].exports;
  }
  function o(e) {
    (this.id = e), (this.bundle = i), (this.exports = {});
  }
  var u = "function" == typeof parcelRequire && parcelRequire,
    f = "function" == typeof require && require;
  (i.isParcelRequire = !0),
    (i.Module = o),
    (i.modules = e),
    (i.cache = r),
    (i.parent = u);
  for (var c = 0; c < n.length; c++) i(n[c]);
  if (n.length) {
    var l = i(n[n.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : t && (this[t] = l);
  }
  return i;
})(
  {
    8: [
      function (require, module, exports) {
        var e = (function () {
          function e(e, n) {
            for (var t = 0; t < n.length; t++) {
              var o = n[t];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (n, t, o) {
            return t && e(n.prototype, t), o && e(n, o), n;
          };
        })();
        function n(e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        var t = (function () {
          function t(e) {
            var o = e.plant,
              i = e.soil,
              a = e.pot;
            n(this, t), (this.plant = o), (this.soil = i), (this.pot = a);
          }
          return (
            e(t, [
              {
                key: "addColor",
                value: function (e) {
                  this.color = e;
                },
              },
              {
                key: "addMoss",
                value: function () {
                  this.moss = "moss-pole";
                },
              },
              {
                key: "addPebbles",
                value: function () {
                  this.pebbles = "pebbles";
                },
              },
              {
                key: "addGreenies",
                value: function () {
                  this.greenies = "mini-plants";
                },
              },
            ]),
            t
          );
        })();
        module.exports = t;
      },
      {},
    ],
    9: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = JSON.parse(localStorage.getItem("plant-info")),
            t = document.querySelector(".info-sheet--container"),
            n = document.querySelector(".right--block"),
            o = document.createElement("div");
          (t.style.backgroundColor = "#7f03fc"), (t.innerHTML = "");
          var a = document.createElement("h2");
          (a.textContent = e.plant), t.appendChild(a);
          var r = document.createElement("div");
          r.id = "imageContainer";
          var c = document.createElement("img");
          "simple-ceramic-too" === e.pot
            ? (c.src = "images/simple-ceramic-pot.png")
            : "simple-decorated-ceramic-too" === e.pot
            ? (c.src = "../images/simple-decorated-ceramic-pot.png")
            : "painted-decorated-ceramic-too" === e.pot
            ? (c.src = "../images/blue-painted-decorated-ceramic-pot.png")
            : e.color
            ? (c.src = "../images/" + e.color + "-" + e.pot + ".png")
            : (c.src = "../images/" + e.pot + ".png"),
            r.appendChild(c);
          var i = document.createElement("p");
          (i.textContent = "Name: " + e.plant), o.appendChild(i);
          var p = document.createElement("p");
          (p.textContent = "Soil: " + e.soil), o.appendChild(p);
          var m = document.createElement("p");
          if (((m.textContent = "Pot: " + e.pot), o.appendChild(m), e.color)) {
            var d = document.createElement("p");
            (d.textContent = "Color: " + e.color), o.appendChild(d);
          }
          if (e.greenies || e.moss || e.pebbles) {
            var l = document.createElement("p");
            if (((l.textContent = "Extras: "), e.greenies)) {
              l.textContent += e.greenies + " ";
              var s = document.createElement("img");
              (s.src = "images/" + e.greenies + ".png"), r.appendChild(s);
            }
            if (e.pebbles) {
              l.textContent += e.pebbles + " ";
              var g = document.createElement("img");
              (g.src = "images/" + e.pebbles + ".png"), r.appendChild(g);
            }
            if (e.moss) {
              l.textContent += e.moss + " ";
              var u = document.createElement("img");
              (u.src = "images/" + e.moss + ".png"), r.appendChild(u);
            }
            o.appendChild(l);
          }
          var C = document.createElement("img");
          (C.src = "images/soil-" + e.soil + ".png"), r.appendChild(C);
          var h = document.createElement("img");
          (h.src = "images/plant-" + e.plant + ".png"),
            r.appendChild(h),
            t.appendChild(r),
            t.appendChild(o);
          var v = document.getElementById("customize--button"),
            E = document.createElement("a");
          (E.textContent = "Customize!"),
            (E.id = "customize--button"),
            (E.href = "../pages/customize.html"),
            v || n.appendChild(E);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    7: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = JSON.parse(localStorage.getItem("plant-info")),
          t = (exports.stockConfig = {
            potOptions: {
              ceramic: {
                simple: {
                  painted: "ceramic-simple-" + e.color,
                  unpainted: "ceramic-simple-unpainted",
                },
                decorated: {
                  painted: "ceramic-decorated-" + e.color,
                  unpainted: "ceramic-decorated-unpainted",
                },
              },
              clay: {
                simple: {
                  painted: "clay-simple-painted-" + e.color,
                  unpainted: "clay-simple-unpainted",
                },
                decorated: {
                  painted: "clay-decorated-" + e.color,
                  unpainted: "clay-decorated-unpainted",
                },
              },
            },
          }),
          l = (exports.recommendationsMap = {
            "low-light-plant": {
              "toxic-plant": {
                "clay-pot": {
                  simple: {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "simple-clay-pot",
                  },
                  "simple-decorated": {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "simple-decorated-clay-pot",
                  },
                  decorated: {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "painted-decorated-clay-pot",
                  },
                },
                "other-pot": {
                  simple: {
                    plant: "sansevieria",
                    soil: selectedIds[1],
                    pot: "simple-" + selectedIds[3],
                  },
                  "simple-decorated": {
                    plant: "sansevieria",
                    soil: selectedIds[1],
                    pot: "simple-decorated-" + selectedIds[3],
                  },
                  decorated: {
                    plant: "sansevieria",
                    soil: selectedIds[1],
                    pot: "painted-decorated-" + selectedIds[3],
                    color: "blue",
                  },
                },
              },
              "non-toxic-plant": {
                "clay-pot": {
                  simple: {
                    plant: "fern",
                    soil: "drainage",
                    pot: "simple-clay-pot",
                  },
                  "simple-decorated": {
                    plant: "fern",
                    soil: "drainage",
                    pot: "simple-decorated-clay-pot",
                  },
                  decorated: {
                    plant: "fern",
                    soil: "drainage",
                    pot: "painted-decorated-clay-pot",
                    color: "blue",
                  },
                },
                "other-pot": {
                  simple: {
                    plant: "fern",
                    soil: selectedIds[1],
                    pot: "simple-" + selectedIds[3],
                  },
                  "simple-decorated": {
                    plant: "fern",
                    soil: selectedIds[1],
                    pot: "simple-decorated-" + selectedIds[3],
                  },
                  decorated: {
                    plant: "fern",
                    soil: selectedIds[1],
                    pot: "painted-decorated-" + selectedIds[3],
                    color: "blue",
                  },
                },
              },
            },
            "medium-light-plant": {
              "toxic-plant": {
                "clay-pot": {
                  simple: {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "simple-clay-pot",
                  },
                  "simple-decorated": {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "simple-decorated-clay-pot",
                  },
                  decorated: {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "painted-decorated-clay-pot",
                    color: "blue",
                  },
                },
                "other-pot": {
                  simple: {
                    plant: "aglaonema",
                    soil: selectedIds[1],
                    pot: "simple-" + selectedIds[3],
                  },
                  "simple-decorated": {
                    plant: "aglaonema",
                    soil: selectedIds[1],
                    pot: "simple-decorated-" + selectedIds[3],
                  },
                  decorated: {
                    plant: "aglaonema",
                    soil: selectedIds[1],
                    pot: "painted-decorated-" + selectedIds[3],
                    color: "blue",
                  },
                },
              },
              "non-toxic-plant": {
                "clay-pot": {
                  simple: {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "simple-clay-pot",
                  },
                  "simple-decorated": {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "simple-decorated-clay-pot",
                  },
                  decorated: {
                    plant: "peace-lily",
                    soil: "drainage",
                    pot: "painted-decorated-clay-pot",
                    color: "blue",
                  },
                },
                "other-pot": {
                  simple: {
                    plant: "monstera",
                    soil: selectedIds[1],
                    pot: "simple-" + selectedIds[3],
                  },
                  "simple-decorated": {
                    plant: "monstera",
                    soil: selectedIds[1],
                    pot: "simple-decorated-" + selectedIds[3],
                  },
                  decorated: {
                    plant: "monstera",
                    soil: selectedIds[1],
                    pot: "painted-decorated-" + selectedIds[3],
                    color: "blue",
                  },
                },
              },
            },
            "other-plant": {
              "toxic-plant": {
                "clay-pot": {
                  simple: {
                    plant: "aloe",
                    soil: "drainage",
                    pot: "simple-clay-pot",
                  },
                  "simple-decorated": {
                    plant: "aloe",
                    soil: "drainage",
                    pot: "simple-decorated-clay-pot",
                  },
                  decorated: {
                    plant: "aloe",
                    soil: "drainage",
                    pot: "painted-decorated-clay-pot",
                    color: "blue",
                  },
                },
                "other-pot": {
                  simple: {
                    plant: "aloe",
                    soil: selectedIds[1],
                    pot: "simple-" + selectedIds[3],
                  },
                  "simple-decorated": {
                    plant: "aloe",
                    soil: selectedIds[1],
                    pot: "simple-decorated-" + selectedIds[3],
                  },
                  decorated: {
                    plant: "aloe",
                    soil: selectedIds[1],
                    pot: "painted-decorated-" + selectedIds[3],
                    color: "blue",
                  },
                },
              },
              "non-toxic-plant": {
                "clay-pot": {
                  simple: {
                    plant: "cactus",
                    soil: "drainage",
                    pot: "simple-clay-pot",
                  },
                  "simple-decorated": {
                    plant: "cactus",
                    soil: "drainage",
                    pot: "simple-decorated-clay-pot",
                  },
                  decorated: {
                    plant: "cactus",
                    soil: "drainage",
                    pot: "painted-decorated-clay-pot",
                    color: "blue",
                  },
                },
                "other-pot": {
                  simple: {
                    plant: "cactus",
                    soil: selectedIds[1],
                    pot: "simple-" + selectedIds[3],
                  },
                  "simple-decorated": {
                    plant: "cactus",
                    soil: selectedIds[1],
                    pot: "simple-decorated-" + selectedIds[3],
                  },
                  decorated: {
                    plant: "cactus",
                    soil: selectedIds[1],
                    pot: "painted-decorated-" + selectedIds[3],
                    color: "blue",
                  },
                },
              },
            },
          });
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("./plant-builder"),
          t = l(e),
          r = require("./info-sheet"),
          o = l(r),
          a = require("../config.js");
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var n = document.getElementsByClassName("plants--form__answere"),
          s = document.querySelector(".plants--form");
        function i(e, r, o) {
          var l = a.recommendationsMap[r][e[2]][o][e[4]],
            n = new t.default({ plant: l, soil: e[1], pot: o + "-" + e[3] });
          "painted-decorated" === e[4] && n.addColor("blue");
          for (var s = 5; s < e.length; s++)
            "moss-pole" === e[s] && n.addMoss(),
              "pebbles" === e[s] && n.addPebbles(),
              "mini-plants" === e[s] && n.addGreenies();
          return n;
        }
        function d() {
          var e = [];
          if (s.checkValidity()) {
            for (var t = 0; t < n.length; t++) {
              var r = n[t];
              r.checked && e.push(r.id);
            }
            if (e.length >= 5) {
              var a = i(e, e[0], "clay-pot" === e[3] ? "clay" : "other-pot");
              localStorage.setItem("plant-info", JSON.stringify(a)),
                (0, o.default)();
            }
          } else
            alert(
              "Please, complete the required questions to show your recommendation",
            );
        }
        exports.default = d;
      },
      { "./plant-builder": 8, "./info-sheet": 9, "../config.js": 7 },
    ],
    4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("./plant-object.js"),
          t = n(e);
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r() {
          var e = document.querySelector(".get--button"),
            n = document.querySelector(".clear--button"),
            r = document.querySelector(".info-sheet--container"),
            o = document.querySelector(".plants--form");
          e.addEventListener("click", function (e) {
            e.preventDefault(), (0, t.default)();
          }),
            n.addEventListener("click", function (e) {
              e.preventDefault(),
                (r.style.backgroundColor = "white"),
                (r.innerHTML = ""),
                o.reset();
            });
        }
        exports.default = r;
      },
      { "./plant-object.js": 5 },
    ],
    3: [
      function (require, module, exports) {
        "use strict";
        var e = require("./modules/form-events.js"),
          u = r(e);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (0, u.default)();
      },
      { "./modules/form-events.js": 4 },
    ],
  },
  {},
  [3],
  null,
);
//# sourceMappingURL=/main.08ef3dd6.map
