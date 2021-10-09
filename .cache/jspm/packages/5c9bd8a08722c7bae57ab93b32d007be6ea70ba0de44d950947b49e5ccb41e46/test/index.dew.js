import { dew as _indexDewDew } from "../index.dew.js";
import { dew as _testsDewDew } from "./tests.dew.js";
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

  var assign = _indexDewDew();

  var test = _nodeRequire('tape');

  var runTests = _testsDewDew();

  test('as a function', function (t) {
    t.test('bad array/this value', function (st) {
      st['throws'](function () {
        assign(undefined);
      }, TypeError, 'undefined is not an object');
      st['throws'](function () {
        assign(null);
      }, TypeError, 'null is not an object');
      st.end();
    });
    runTests(assign, t);
    t.end();
  });
  return exports;
}