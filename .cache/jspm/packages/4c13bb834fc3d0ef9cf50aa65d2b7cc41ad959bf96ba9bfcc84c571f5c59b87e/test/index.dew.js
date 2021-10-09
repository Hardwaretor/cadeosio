import { dew as _indexDewDew } from "es6-symbol/index.dew.js";
import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  var ee = _nodeRequire("event-emitter"),
      iteratorSymbol = _indexDewDew().iterator;

  exports = function (T) {
    return {
      "": function (a) {
        var x = ["raz", "dwa", "trzy", "cztery", "pięć"],
            it,
            y,
            z;
        it = new T(x);
        a(it[iteratorSymbol](), it, "@@iterator");
        y = it.next();
        a.deep(y, {
          done: false,
          value: "raz"
        }, "#1");
        z = it.next();
        a.not(y, z, "Recreate result");
        a.deep(z, {
          done: false,
          value: "dwa"
        }, "#2");
        a.deep(it.next(), {
          done: false,
          value: "trzy"
        }, "#3");
        a.deep(it.next(), {
          done: false,
          value: "cztery"
        }, "#4");
        a.deep(it.next(), {
          done: false,
          value: "pięć"
        }, "#5");
        a.deep(y = it.next(), {
          done: true,
          value: undefined
        }, "End");
        a.not(y, it.next(), "Recreate result on dead");
      },
      "Emited": function (a) {
        var x = ["raz", "dwa", "trzy", "cztery", "pięć"],
            y,
            it;
        y = ee();
        it = new T(x, y);
        a.deep(it.next(), {
          done: false,
          value: "raz"
        }, "#1");
        a.deep(it.next(), {
          done: false,
          value: "dwa"
        }, "#2");
        y.emit("_add", x.push("sześć") - 1);
        a.deep(it.next(), {
          done: false,
          value: "trzy"
        }, "#3");
        x.splice(1, 0, "półtora");
        y.emit("_add", 1);
        a.deep(it.next(), {
          done: false,
          value: "półtora"
        }, "Insert");
        x.splice(5, 1);
        y.emit("_delete", 5);
        a.deep(it.next(), {
          done: false,
          value: "cztery"
        }, "#4");
        a.deep(it.next(), {
          done: false,
          value: "sześć"
        }, "#5");
        a.deep(it.next(), {
          done: true,
          value: undefined
        }, "End");
      },
      "Emited #2": function (a) {
        var x = ["raz", "dwa", "trzy", "cztery", "pięć", "sześć"],
            y,
            it;
        y = ee();
        it = new T(x, y);
        a.deep(it.next(), {
          done: false,
          value: "raz"
        }, "#1");
        a.deep(it.next(), {
          done: false,
          value: "dwa"
        }, "#2");
        x.splice(1, 0, "półtora");
        y.emit("_add", 1);
        x.splice(1, 0, "1.25");
        y.emit("_add", 1);
        x.splice(0, 1);
        y.emit("_delete", 0);
        a.deep(it.next(), {
          done: false,
          value: "półtora"
        }, "Insert");
        a.deep(it.next(), {
          done: false,
          value: "1.25"
        }, "Insert #2");
        a.deep(it.next(), {
          done: false,
          value: "trzy"
        }, "#3");
        a.deep(it.next(), {
          done: false,
          value: "cztery"
        }, "#4");
        x.splice(5, 1);
        y.emit("_delete", 5);
        a.deep(it.next(), {
          done: false,
          value: "sześć"
        }, "#5");
        a.deep(it.next(), {
          done: true,
          value: undefined
        }, "End");
      },
      "Emited: Clear #1": function (a) {
        var x = ["raz", "dwa", "trzy", "cztery", "pięć", "sześć"],
            y,
            it;
        y = ee();
        it = new T(x, y);
        a.deep(it.next(), {
          done: false,
          value: "raz"
        }, "#1");
        a.deep(it.next(), {
          done: false,
          value: "dwa"
        }, "#2");
        x.length = 0;
        y.emit("_clear");
        a.deep(it.next(), {
          done: true,
          value: undefined
        }, "End");
      },
      "Emited: Clear #2": function (a) {
        var x = ["raz", "dwa", "trzy", "cztery", "pięć", "sześć"],
            y,
            it;
        y = ee();
        it = new T(x, y);
        a.deep(it.next(), {
          done: false,
          value: "raz"
        }, "#1");
        a.deep(it.next(), {
          done: false,
          value: "dwa"
        }, "#2");
        x.length = 0;
        y.emit("_clear");
        x.push("foo");
        x.push("bar");
        a.deep(it.next(), {
          done: false,
          value: "foo"
        }, "#3");
        a.deep(it.next(), {
          done: false,
          value: "bar"
        }, "#4");
        x.splice(1, 0, "półtora");
        y.emit("_add", 1);
        x.splice(1, 0, "1.25");
        y.emit("_add", 1);
        x.splice(0, 1);
        y.emit("_delete", 0);
        a.deep(it.next(), {
          done: false,
          value: "półtora"
        }, "Insert");
        a.deep(it.next(), {
          done: false,
          value: "1.25"
        }, "Insert #2");
        a.deep(it.next(), {
          done: true,
          value: undefined
        }, "End");
      }
    };
  };

  return exports;
}