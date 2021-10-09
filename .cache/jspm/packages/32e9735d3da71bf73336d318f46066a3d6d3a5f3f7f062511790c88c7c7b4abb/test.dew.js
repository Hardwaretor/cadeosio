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

  var should = _nodeRequire('should');

  var endsWith = _indexDewDew();

  describe('endsWith', function () {
    it('should be true if the string ends with the given pattern.', function () {
      endsWith('a/b/c.txt', 'c.txt').should.be.true;
      endsWith('a/b/c.txt', '.txt').should.be.true;
      endsWith('abc', 'c').should.be.true;
    });
    it('should be false if the string does not end with the given pattern.', function () {
      endsWith('a/b/c.txt', 'c.tx').should.be.false;
      endsWith('a/b/c.txt', 'c.tt').should.be.false;
    });
    it('should be true if the array ends with the given string.', function () {
      endsWith(['a', 'b', 'c'], 'c').should.be.true;
      endsWith(['a', 'b', 'c.txt'], 'c.txt').should.be.true;
    });
    it('should be false if the array does not end with the given string.', function () {
      endsWith(['a', 'b', 'c.txt'], '.txt').should.be.false;
      endsWith(['a', 'b', 'c.txt'], 'c.tx').should.be.false;
      endsWith(['a', 'b', 'c.txt'], 'c.tt').should.be.false;
      endsWith(['abc', 'abc', 'abc'], 'c').should.be.false;
    });
    it('should be true if the array ends with the given number.', function () {
      endsWith(['a', 'b', 42], 42).should.be.true;
      endsWith(['a', 'b', 42], '42').should.be.false;
      endsWith(['a', 'b', 42], 41).should.be.false;
    });
  });
  return exports;
}