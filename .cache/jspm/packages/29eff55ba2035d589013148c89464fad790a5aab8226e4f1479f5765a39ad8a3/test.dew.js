import { dew as _indexDewDew } from "./index.dew.js";
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

  var isArray = _indexDewDew();

  var test = _nodeRequire('tape');

  test('is array', function (t) {
    t.ok(isArray([]));
    t.notOk(isArray({}));
    t.notOk(isArray(null));
    t.notOk(isArray(false));
    var obj = {};
    obj[0] = true;
    t.notOk(isArray(obj));
    var arr = [];
    arr.foo = 'bar';
    t.ok(isArray(arr));
    t.end();
  });
  return exports;
}