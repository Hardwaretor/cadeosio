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

  var isBuffer = _indexDewDew();

  var test = _nodeRequire('tape');

  test('is-buffer', function (t) {
    t.equal(isBuffer(Buffer.alloc(4)), true, 'new Buffer(4)');
    t.equal(isBuffer(Buffer.allocUnsafeSlow(100)), true, 'SlowBuffer(100)');
    t.equal(isBuffer(undefined), false, 'undefined');
    t.equal(isBuffer(null), false, 'null');
    t.equal(isBuffer(''), false, 'empty string');
    t.equal(isBuffer(true), false, 'true');
    t.equal(isBuffer(false), false, 'false');
    t.equal(isBuffer(0), false, '0');
    t.equal(isBuffer(1), false, '1');
    t.equal(isBuffer(1.0), false, '1.0');
    t.equal(isBuffer('string'), false, 'string');
    t.equal(isBuffer({}), false, '{}');
    t.equal(isBuffer([]), false, '[]');
    t.equal(isBuffer(function foo() {}), false, 'function foo () {}');
    t.equal(isBuffer({
      isBuffer: null
    }), false, '{ isBuffer: null }');
    t.equal(isBuffer({
      isBuffer: function () {
        throw new Error();
      }
    }), false, '{ isBuffer: function () { throw new Error() } }');
    t.end();
  });
  return exports;
}