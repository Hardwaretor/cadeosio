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

  var test = _nodeRequire('tape');

  var ista = _indexDewDew();

  test('strict', function (t) {
    t.ok(ista.strict(new Int8Array()), 'Int8Array');
    t.ok(ista.strict(new Int16Array()), 'Int16Array');
    t.ok(ista.strict(new Int32Array()), 'Int32Array');
    t.ok(ista.strict(new Uint8Array()), 'Uint8Array');
    t.ok(ista.strict(new Uint16Array()), 'Uint16Array');
    t.ok(ista.strict(new Uint32Array()), 'Uint32Array');
    t.ok(ista.strict(new Float32Array()), 'Float32Array');
    t.ok(ista.strict(new Float64Array()), 'Float64Array');
    t.ok(!ista.strict(new Array()), 'Array');
    t.ok(!ista.strict([]), '[]');
    t.end();
  });
  test('loose', function (t) {
    t.ok(ista.loose(new Int8Array()), 'Int8Array');
    t.ok(ista.loose(new Int16Array()), 'Int16Array');
    t.ok(ista.loose(new Int32Array()), 'Int32Array');
    t.ok(ista.loose(new Uint8Array()), 'Uint8Array');
    t.ok(ista.loose(new Uint16Array()), 'Uint16Array');
    t.ok(ista.loose(new Uint32Array()), 'Uint32Array');
    t.ok(ista.loose(new Float32Array()), 'Float32Array');
    t.ok(ista.loose(new Float64Array()), 'Float64Array');
    t.ok(!ista.loose(new Array()), 'Array');
    t.ok(!ista.loose([]), '[]');
    t.end();
  });
  return exports;
}