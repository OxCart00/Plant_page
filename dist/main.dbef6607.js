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
              var i = n[t];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (n, t, i) {
            return t && e(n.prototype, t), i && e(n, i), n;
          };
        })();
        function n(e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        var t = (function () {
          function t(e) {
            var i = e.plant,
              o = e.soil,
              a = e.pot;
            n(this, t), (this.plant = i), (this.soil = o), (this.pot = a);
          }
          return (
            e(t, [
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
          var p = document.createElement("div");
          p.id = "imageContainer";
          var i = document.createElement("img");
          if (
            ("simple-ceramic-too" === e.pot
              ? (i.src = "images/simple-ceramic-pot.png")
              : "simple-decorated-ceramic-too" === e.pot
              ? (i.src = "images/simple-decorated-ceramic-pot.png")
              : "painted-decorated-ceramic-too" === e.pot
              ? (i.src = "images/painted-decorated-ceramic-pot.png")
              : (i.src = "images/" + e.pot + ".png"),
            p.appendChild(i),
            e.greenies || e.moss || e.pebbles)
          ) {
            var o = document.createElement("p");
            if (((o.textContent = "Extras: "), e.greenies)) {
              o.textContent += e.greenies + " ";
              var r = document.createElement("img");
              (r.src = "images/" + e.greenies + ".png"), p.appendChild(r);
            }
            if (e.pebbles) {
              o.textContent += e.pebbles + " ";
              var c = document.createElement("img");
              (c.src = "images/" + e.pebbles + ".png"), p.appendChild(c);
            }
            if (e.moss) {
              o.textContent += e.moss + " ";
              var m = document.createElement("img");
              (m.src = "images/" + e.moss + ".png"), p.appendChild(m);
            }
            n.appendChild(o);
          }
          var d = document.createElement("img");
          (d.src = "images/soil-" + e.soil + ".png"), p.appendChild(d);
          var l = document.createElement("img");
          (l.src = "images/plant-" + e.plant + ".png"), p.appendChild(l);
          var s = document.createElement("p");
          (s.textContent = "Name: " + e.plant), n.appendChild(s);
          var g = document.createElement("p");
          (g.textContent = "Soil: " + e.soil), n.appendChild(g);
          var C = document.createElement("p");
          (C.textContent = "Pot: " + e.pot),
            n.appendChild(C),
            t.appendChild(p),
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
          a = p(e),
          l = require("./info-sheet"),
          t = p(l);
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var o = document.getElementsByClassName("plants--form__answere"),
          d = document.querySelector(".plants--form");
        function i() {
          var e = [];
          if (d.checkValidity()) {
            for (var l = void 0, p = 0; p < o.length; p++) {
              var i = o[p];
              i.checked && e.push(i.id);
            }
            if (e.length >= 5) {
              l =
                "low-light-plant" === e[0]
                  ? "toxic-plant" === e[2]
                    ? "clay-pot" === e[3]
                      ? "simple" === e[4]
                        ? new a.default({
                            plant: "peace-lily",
                            soil: "drainage",
                            pot: "simple-clay-pot",
                          })
                        : "simple-decorated" === e[4]
                        ? new a.default({
                            plant: "peace-lily",
                            soil: "drainage",
                            pot: "simple-decorated-clay-pot",
                          })
                        : new a.default({
                            plant: "peace-lily",
                            soil: "drainage",
                            pot: "painted-decorated-clay-pot",
                          })
                      : "simple" === e[4]
                      ? new a.default({
                          plant: "sansevieria",
                          soil: e[1],
                          pot: "simple-" + e[3],
                        })
                      : "simple-decorated" === e[4]
                      ? new a.default({
                          plant: "sansevieria",
                          soil: e[1],
                          pot: "simple-decorated-" + e[3],
                        })
                      : new a.default({
                          plant: "sansevieria",
                          soil: e[1],
                          pot: "painted-decorated-" + e[3],
                        })
                    : "clay-pot" === e[3]
                    ? "simple" === e[4]
                      ? new a.default({
                          plant: "fern",
                          soil: "drainage",
                          pot: "simple-clay-pot",
                        })
                      : "simple-decorated" === e[4]
                      ? new a.default({
                          plant: "fern",
                          soil: "drainage",
                          pot: "simple-decorated-clay-pot",
                        })
                      : new a.default({
                          plant: "fern",
                          soil: "drainage",
                          pot: "painted-decorated-clay-pot",
                        })
                    : "simple" === e[4]
                    ? new a.default({
                        plant: "fern",
                        soil: e[1],
                        pot: "simple-" + e[3],
                      })
                    : "simple-decorated" === e[4]
                    ? new a.default({
                        plant: "fern",
                        soil: e[1],
                        pot: "simple-decorated-" + e[3],
                      })
                    : new a.default({
                        plant: "fern",
                        soil: e[1],
                        pot: "painted-decorated-" + e[3],
                      })
                  : "medium-light-plant" === e[0]
                  ? "toxic-plant" === e[2]
                    ? "clay-pot" === e[3]
                      ? "simple" === e[4]
                        ? new a.default({
                            plant: "peace-lily",
                            soil: "drainage",
                            pot: "simple-clay-pot",
                          })
                        : "simple-decorated" === e[4]
                        ? new a.default({
                            plant: "peace-lily",
                            soil: "drainage",
                            pot: "simple-decorated-clay-pot",
                          })
                        : new a.default({
                            plant: "peace-lily",
                            soil: "drainage",
                            pot: "painted-decorated-clay-pot",
                          })
                      : "simple" === e[4]
                      ? new a.default({
                          plant: "aglaonema",
                          soil: e[1],
                          pot: "simple-" + e[3],
                        })
                      : "simple-decorated" === e[4]
                      ? new a.default({
                          plant: "aglaonema",
                          soil: e[1],
                          pot: "simple-decorated-" + e[3],
                        })
                      : new a.default({
                          plant: "aglaonema",
                          soil: e[1],
                          pot: "painted-decorated-" + e[3],
                        })
                    : "clay-pot" === e[3]
                    ? "simple" === e[4]
                      ? new a.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "simple-clay-pot",
                        })
                      : "simple-decorated" === e[4]
                      ? new a.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "simple-decorated-clay-pot",
                        })
                      : new a.default({
                          plant: "peace-lily",
                          soil: "drainage",
                          pot: "painted-decorated-clay-pot",
                        })
                    : "simple" === e[4]
                    ? new a.default({
                        plant: "monstera",
                        soil: e[1],
                        pot: "simple-" + e[3],
                      })
                    : "simple-decorated" === e[4]
                    ? new a.default({
                        plant: "monstera",
                        soil: e[1],
                        pot: "simple-decorated-" + e[3],
                      })
                    : new a.default({
                        plant: "monstera",
                        soil: e[1],
                        pot: "painted-decorated-" + e[3],
                      })
                  : "toxic-plant" === e[2]
                  ? "clay-pot" === e[3]
                    ? "simple" === e[4]
                      ? new a.default({
                          plant: "aloe",
                          soil: "drainage",
                          pot: "simple-clay-pot",
                        })
                      : "simple-decorated" === e[4]
                      ? new a.default({
                          plant: "aloe",
                          soil: "drainage",
                          pot: "simple-decorated-clay-pot",
                        })
                      : new a.default({
                          plant: "aloe",
                          soil: "drainage",
                          pot: "painted-decorated-clay-pot",
                        })
                    : "simple" === e[4]
                    ? new a.default({
                        plant: "aloe",
                        soil: e[1],
                        pot: "simple-" + e[3],
                      })
                    : "simple-decorated" === e[4]
                    ? new a.default({
                        plant: "aloe",
                        soil: e[1],
                        pot: "simple-decorated-" + e[3],
                      })
                    : new a.default({
                        plant: "aloe",
                        soil: e[1],
                        pot: "painted-decorated-" + e[3],
                      })
                  : "clay-pot" === e[3]
                  ? "simple" === e[4]
                    ? new a.default({
                        plant: "cactus",
                        soil: "drainage",
                        pot: "simple-clay-pot",
                      })
                    : "simple-decorated" === e[4]
                    ? new a.default({
                        plant: "cactus",
                        soil: "drainage",
                        pot: "simple-decorated-clay-pot",
                      })
                    : new a.default({
                        plant: "cactus",
                        soil: "drainage",
                        pot: "painted-decorated-clay-pot",
                      })
                  : "simple" === e[4]
                  ? new a.default({
                      plant: "cactus",
                      soil: e[1],
                      pot: "simple-" + e[3],
                    })
                  : "simple-decorated" === e[4]
                  ? new a.default({
                      plant: "cactus",
                      soil: e[1],
                      pot: "simple-decorated-" + e[3],
                    })
                  : new a.default({
                      plant: "cactus",
                      soil: e[1],
                      pot: "painted-decorated-" + e[3],
                    });
              for (var n = 5; n < e.length; n++)
                "moss-pole" === e[n] && l.addMoss(),
                  "pebbles" === e[n] && l.addPebbles(),
                  "mini-plants" === e[n] && l.addGreenies();
              localStorage.setItem("plant-info", JSON.stringify(l)),
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
//# sourceMappingURL=/main.dbef6607.map
