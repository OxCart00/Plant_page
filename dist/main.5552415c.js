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
    5: [
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
    6: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = JSON.parse(localStorage.getItem("plant-info")),
            t = document.querySelector(".info-sheet--container"),
            n = document.createElement("div");
          (t.style.backgroundColor = "#7f03fc"), (t.innerHTML = "");
          var a = document.createElement("h2");
          (a.textContent = e.plant), t.appendChild(a);
          var o = document.createElement("div");
          o.id = "imageContainer";
          var r = document.createElement("img");
          "simple-ceramic-too" === e.pot
            ? (r.src = "images/simple-ceramic-pot.png")
            : "simple-decorated-ceramic-too" === e.pot
            ? (r.src = "images/simple-decorated-ceramic-pot.png")
            : "painted-decorated-ceramic-too" === e.pot
            ? (r.src = "images/blue-painted-decorated-ceramic-pot.png")
            : e.color
            ? (r.src = "images/" + e.color + "-" + e.pot + ".png")
            : (r.src = "images/" + e.pot + ".png"),
            o.appendChild(r);
          var p = document.createElement("p");
          (p.textContent = "Name: " + e.plant), n.appendChild(p);
          var c = document.createElement("p");
          (c.textContent = "Soil: " + e.soil), n.appendChild(c);
          var i = document.createElement("p");
          if (((i.textContent = "Pot: " + e.pot), n.appendChild(i), e.color)) {
            var m = document.createElement("p");
            (m.textContent = "Color: " + e.color), n.appendChild(m);
          }
          if (e.greenies || e.moss || e.pebbles) {
            var d = document.createElement("p");
            if (((d.textContent = "Extras: "), e.greenies)) {
              d.textContent += e.greenies + " ";
              var l = document.createElement("img");
              (l.src = "images/" + e.greenies + ".png"), o.appendChild(l);
            }
            if (e.pebbles) {
              d.textContent += e.pebbles + " ";
              var s = document.createElement("img");
              (s.src = "images/" + e.pebbles + ".png"), o.appendChild(s);
            }
            if (e.moss) {
              d.textContent += e.moss + " ";
              var g = document.createElement("img");
              (g.src = "images/" + e.moss + ".png"), o.appendChild(g);
            }
            n.appendChild(d);
          }
          var C = document.createElement("img");
          (C.src = "images/soil-" + e.soil + ".png"), o.appendChild(C);
          var u = document.createElement("img");
          (u.src = "images/plant-" + e.plant + ".png"),
            o.appendChild(u),
            t.appendChild(o),
            t.appendChild(n);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    4: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("./plant-builder"),
          l = o(e),
          a = require("./info-sheet"),
          t = o(a);
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = document.getElementsByClassName("plants--form__answere"),
          p = document.querySelector(".plants--form");
        function i() {
          var e = [];
          if (p.checkValidity()) {
            for (var a = void 0, o = 0; o < d.length; o++) {
              var i = d[o];
              i.checked && e.push(i.id);
            }
            if (e.length >= 5) {
              "low-light-plant" === e[0]
                ? "toxic-plant" === e[2]
                  ? "clay-pot" === e[3]
                    ? "simple" === e[4]
                      ? (a = new l.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "simple-clay-pot",
                        }))
                      : "simple-decorated" === e[4]
                      ? (a = new l.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "simple-decorated-clay-pot",
                        }))
                      : (a = new l.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "painted-decorated-clay-pot",
                        })).addColor("blue")
                    : "simple" === e[4]
                    ? (a = new l.default({
                        plant: "sansevieria",
                        soil: e[1],
                        pot: "simple-" + e[3],
                      }))
                    : "simple-decorated" === e[4]
                    ? (a = new l.default({
                        plant: "sansevieria",
                        soil: e[1],
                        pot: "simple-decorated-" + e[3],
                      }))
                    : (a = new l.default({
                        plant: "sansevieria",
                        soil: e[1],
                        pot: "painted-decorated-" + e[3],
                      })).addColor("blue")
                  : "clay-pot" === e[3]
                  ? "simple" === e[4]
                    ? (a = new l.default({
                        plant: "fern",
                        soil: "drainage",
                        pot: "simple-clay-pot",
                      }))
                    : "simple-decorated" === e[4]
                    ? (a = new l.default({
                        plant: "fern",
                        soil: "drainage",
                        pot: "simple-decorated-clay-pot",
                      }))
                    : (a = new l.default({
                        plant: "fern",
                        soil: "drainage",
                        pot: "painted-decorated-clay-pot",
                      })).addColor("blue")
                  : "simple" === e[4]
                  ? (a = new l.default({
                      plant: "fern",
                      soil: e[1],
                      pot: "simple-" + e[3],
                    }))
                  : "simple-decorated" === e[4]
                  ? (a = new l.default({
                      plant: "fern",
                      soil: e[1],
                      pot: "simple-decorated-" + e[3],
                    }))
                  : (a = new l.default({
                      plant: "fern",
                      soil: e[1],
                      pot: "painted-decorated-" + e[3],
                    })).addColor("blue")
                : "medium-light-plant" === e[0]
                ? "toxic-plant" === e[2]
                  ? "clay-pot" === e[3]
                    ? "simple" === e[4]
                      ? (a = new l.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "simple-clay-pot",
                        }))
                      : "simple-decorated" === e[4]
                      ? (a = new l.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "simple-decorated-clay-pot",
                        }))
                      : (a = new l.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "painted-decorated-clay-pot",
                        })).addColor("blue")
                    : "simple" === e[4]
                    ? (a = new l.default({
                        plant: "aglaonema",
                        soil: e[1],
                        pot: "simple-" + e[3],
                      }))
                    : "simple-decorated" === e[4]
                    ? (a = new l.default({
                        plant: "aglaonema",
                        soil: e[1],
                        pot: "simple-decorated-" + e[3],
                      }))
                    : (a = new l.default({
                        plant: "aglaonema",
                        soil: e[1],
                        pot: "painted-decorated-" + e[3],
                      })).addColor("blue")
                  : "clay-pot" === e[3]
                  ? "simple" === e[4]
                    ? (a = new l.default({
                        plant: "peace-lily",
                        soil: "drainage",
                        pot: "simple-clay-pot",
                      }))
                    : "simple-decorated" === e[4]
                    ? (a = new l.default({
                        plant: "peace-lily",
                        soil: "drainage",
                        pot: "simple-decorated-clay-pot",
                      }))
                    : (a = new l.default({
                        plant: "peace-lily",
                        soil: "drainage",
                        pot: "painted-decorated-clay-pot",
                      })).addColor("blue")
                  : "simple" === e[4]
                  ? (a = new l.default({
                      plant: "monstera",
                      soil: e[1],
                      pot: "simple-" + e[3],
                    }))
                  : "simple-decorated" === e[4]
                  ? (a = new l.default({
                      plant: "monstera",
                      soil: e[1],
                      pot: "simple-decorated-" + e[3],
                    }))
                  : (a = new l.default({
                      plant: "monstera",
                      soil: e[1],
                      pot: "painted-decorated-" + e[3],
                    })).addColor("blue")
                : "toxic-plant" === e[2]
                ? "clay-pot" === e[3]
                  ? "simple" === e[4]
                    ? (a = new l.default({
                        plant: "aloe",
                        soil: "drainage",
                        pot: "simple-clay-pot",
                      }))
                    : "simple-decorated" === e[4]
                    ? (a = new l.default({
                        plant: "aloe",
                        soil: "drainage",
                        pot: "simple-decorated-clay-pot",
                      }))
                    : (a = new l.default({
                        plant: "aloe",
                        soil: "drainage",
                        pot: "painted-decorated-clay-pot",
                      })).addColor("blue")
                  : "simple" === e[4]
                  ? (a = new l.default({
                      plant: "aloe",
                      soil: e[1],
                      pot: "simple-" + e[3],
                    }))
                  : "simple-decorated" === e[4]
                  ? (a = new l.default({
                      plant: "aloe",
                      soil: e[1],
                      pot: "simple-decorated-" + e[3],
                    }))
                  : (a = new l.default({
                      plant: "aloe",
                      soil: e[1],
                      pot: "painted-decorated-" + e[3],
                    })).addColor("blue")
                : "clay-pot" === e[3]
                ? "simple" === e[4]
                  ? (a = new l.default({
                      plant: "cactus",
                      soil: "drainage",
                      pot: "simple-clay-pot",
                    }))
                  : "simple-decorated" === e[4]
                  ? (a = new l.default({
                      plant: "cactus",
                      soil: "drainage",
                      pot: "simple-decorated-clay-pot",
                    }))
                  : (a = new l.default({
                      plant: "cactus",
                      soil: "drainage",
                      pot: "painted-decorated-clay-pot",
                    })).addColor("blue")
                : "simple" === e[4]
                ? (a = new l.default({
                    plant: "cactus",
                    soil: e[1],
                    pot: "simple-" + e[3],
                  }))
                : "simple-decorated" === e[4]
                ? (a = new l.default({
                    plant: "cactus",
                    soil: e[1],
                    pot: "simple-decorated-" + e[3],
                  }))
                : (a = new l.default({
                    plant: "cactus",
                    soil: e[1],
                    pot: "painted-decorated-" + e[3],
                  })).addColor("blue");
              for (var n = 5; n < e.length; n++)
                "moss-pole" === e[n] && a.addMoss(),
                  "pebbles" === e[n] && a.addPebbles(),
                  "mini-plants" === e[n] && a.addGreenies();
              localStorage.setItem("plant-info", JSON.stringify(a)),
                (0, t.default)();
            }
          } else
            alert(
              "Please, complete the required questions to show your recommendation",
            );
        }
        exports.default = i;
      },
      { "./plant-builder": 5, "./info-sheet": 6 },
    ],
    3: [
      function (require, module, exports) {
        "use strict";
        var e = require("./Modules/plant-object"),
          t = n(e);
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = document.querySelector(".get--button"),
          u = document.querySelector(".clear--button"),
          o = document.querySelector(".info-sheet--container"),
          c = document.querySelector(".plants--form");
        r.addEventListener("click", function (e) {
          e.preventDefault(), (0, t.default)();
        }),
          u.addEventListener("click", function (e) {
            e.preventDefault(),
              (o.style.backgroundColor = "white"),
              (o.innerHTML = ""),
              c.reset();
          });
      },
      { "./Modules/plant-object": 4 },
    ],
  },
  {},
  [3],
  null,
);
//# sourceMappingURL=/main.5552415c.map
