import { dew as _indexDewDew } from "../src/index.dew.js";
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

  var test = _nodeRequire('tape');

  var has = _indexDewDew();

  test('has', function (t) {
    t.equal(has({}, 'hasOwnProperty'), false, 'object literal does not have own property "hasOwnProperty"');
    t.equal(has(Object.prototype, 'hasOwnProperty'), true, 'Object.prototype has own property "hasOwnProperty"');
    t.end();
  });
  return exports;
}