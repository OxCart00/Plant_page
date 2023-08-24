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
    7: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = JSON.parse(localStorage.getItem("plant-info")),
            t = document.querySelector(".info-sheet--container");
          t.innerHTML = "";
          var n = document.createElement("h2");
          (n.textContent = e.plant), t.appendChild(n);
          var a = document.createElement("div");
          a.id = "imageContainer";
          var p = document.createElement("img");
          "simple-ceramic-too" === e.pot
            ? (p.src = "images/simple-ceramic-pot.png")
            : (p.src = "images/" + e.pot + ".png"),
            a.appendChild(p);
          var o = document.createElement("img");
          (o.src = "images/soil-" + e.soil + ".png"), a.appendChild(o);
          var i = document.createElement("img");
          (i.src = "images/plant-" + e.plant + ".png"),
            a.appendChild(i),
            t.appendChild(a);
          var r = document.createElement("div"),
            l = document.createElement("p");
          (l.textContent = "Name: " + e.plant), r.appendChild(l);
          var d = document.createElement("p");
          (d.textContent = "Soil: " + e.soil), r.appendChild(d);
          var c = document.createElement("p");
          (c.textContent = "Pot: " + e.pot), r.appendChild(c), t.appendChild(r);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = e);
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var e = require("./plant-builder"),
          a = o(e),
          l = require("./info-sheet"),
          t = o(l);
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var p = document.getElementsByClassName("plants--form__answere"),
          d = document.querySelector(".plants--form");
        function i() {
          var e = [];
          if (d.checkValidity()) {
            for (var l = void 0, o = 0; o < p.length; o++) {
              var i = p[o];
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
              console.log("Plant Recomendation:", l),
                console.log("IDs de elementos seleccionados:", e),
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
      { "./plant-builder": 8, "./info-sheet": 7 },
    ],
    3: [
      function (require, module, exports) {
        "use strict";
        var e = require("./Modules/plant-object"),
          t = u(e);
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var n = document.querySelector(".get--button");
        n.addEventListener("click", function (e) {
          e.preventDefault(), (0, t.default)();
        });
      },
      { "./Modules/plant-object": 5 },
    ],
  },
  {},
  [3],
  null,
);
//# sourceMappingURL=/main.0f22bf3a.map
