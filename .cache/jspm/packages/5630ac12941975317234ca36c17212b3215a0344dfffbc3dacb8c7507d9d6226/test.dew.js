import { dew as _nodeDewDew } from "math-random/node.dew.js";
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

  var assert = console.assert;

  var unique = _nodeRequire('array-unique');

  var random = _nodeDewDew();

  var iterations = 10000;
  var number,
      cache = [];

  for (var i = 0; i < iterations; i++) {
    number = random();

    if (number < 0) {
      assert(false, 'Random numbers should be greater than or equal to zero');
      break;
    }

    if (number >= 1) {
      assert(false, 'Random numbers should be less than one');
      break;
    }

    cache.push(number);
  }

  assert(unique(cache).length === iterations, 'Random numbers should be unique');
  return exports;
}