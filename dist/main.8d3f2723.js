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
    9: [
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
    10: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = JSON.parse(localStorage.getItem("plant-info")),
            t = document.querySelector(".info-sheet--container"),
            n = document.querySelector(".right--block"),
            a = document.createElement("div");
          (t.style.backgroundColor = "#7f03fc"), (t.innerHTML = "");
          var o = document.createElement("h2");
          (o.textContent = e.plant), t.appendChild(o);
          var r = document.createElement("div");
          r.id = "imageContainer";
          var p = document.createElement("img");
          "simple-ceramic-too" === e.pot
            ? (p.src = "images/simple-ceramic-pot.png")
            : "simple-decorated-ceramic-too" === e.pot
            ? (p.src = "images/simple-decorated-ceramic-pot.png")
            : "painted-decorated-ceramic-too" === e.pot
            ? (p.src = "images/blue-painted-decorated-ceramic-pot.png")
            : e.color
            ? (p.src = "images/" + e.color + "-" + e.pot + ".png")
            : (p.src = "images/" + e.pot + ".png"),
            r.appendChild(p);
          var c = document.createElement("p");
          (c.textContent = "Name: " + e.plant), a.appendChild(c);
          var i = document.createElement("p");
          (i.textContent = "Soil: " + e.soil), a.appendChild(i);
          var m = document.createElement("p");
          if (((m.textContent = "Pot: " + e.pot), a.appendChild(m), e.color)) {
            var d = document.createElement("p");
            (d.textContent = "Color: " + e.color), a.appendChild(d);
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
              var C = document.createElement("img");
              (C.src = "images/" + e.moss + ".png"), r.appendChild(C);
            }
            a.appendChild(l);
          }
          var u = document.createElement("img");
          (u.src = "images/soil-" + e.soil + ".png"), r.appendChild(u);
          var h = document.createElement("img");
          (h.src = "images/plant-" + e.plant + ".png"),
            r.appendChild(h),
            t.appendChild(r),
            t.appendChild(a);
          var v = document.createElement("a");
          (v.textContent = "Customize!"),
            (v.href = "../pages/customize.html"),
            n.appendChild(v);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    8: [
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
      { "./plant-builder": 9, "./info-sheet": 10 },
    ],
    6: [
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
      { "./Modules/plant-object": 8 },
    ],
  },
  {},
  [6],
  null,
);
//# sourceMappingURL=/main.8d3f2723.map
