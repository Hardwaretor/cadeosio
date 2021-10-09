import { dew as _indexDewDew } from "../index.dew.js";
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

  var isObject = _indexDewDew();

  test('returns true for objects', function (assert) {
    assert.equal(isObject({}), true);
    assert.equal(isObject([]), true);
    assert.end();
  });
  test('returns false for null', function (assert) {
    assert.equal(isObject(null), false);
    assert.end();
  });
  test('returns false for primitives', function (assert) {
    assert.equal(isObject(42), false);
    assert.equal(isObject('foo'), false);
    assert.end();
  });
  return exports;
}