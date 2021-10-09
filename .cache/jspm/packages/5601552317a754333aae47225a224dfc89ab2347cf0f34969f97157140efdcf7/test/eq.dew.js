import { dew as _indexDewDew } from "../index.dew.js";
import _buffer from "buffer";
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

  var Buffer = _buffer.Buffer;

  var bufferEqual = _indexDewDew();

  var test = _nodeRequire('tap').test;

  test('equal', function (t) {
    var eq = bufferEqual(new Buffer([253, 254, 255]), new Buffer([253, 254, 255]));
    t.strictEqual(eq, true);
    t.end();
  });
  test('not equal', function (t) {
    var eq = bufferEqual(new Buffer('abc'), new Buffer('abcd'));
    t.strictEqual(eq, false);
    t.end();
  });
  test('not equal not buffer', function (t) {
    var eq = bufferEqual(new Buffer('abc'), 'abc');
    t.strictEqual(eq, undefined);
    t.end();
  });
  test('equal not buffer', function (t) {
    var eq = bufferEqual('abc', 'abc');
    t.strictEqual(eq, undefined);
    t.end();
  });
  return exports;
}