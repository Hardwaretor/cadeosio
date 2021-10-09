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

  var assert = _nodeRequire("chai").assert;

  var ForkStream = _indexDewDew();

  describe("fork-stream", function () {
    it("should split objects into their correct streams", function (done) {
      var fork = new ForkStream({
        classifier: function classify(e, done) {
          return done(null, e >= 5);
        }
      });
      var expectedA = [5, 7, 9],
          expectedB = [1, 4, 3, 1];
      var actualA = [],
          actualB = [];
      fork.a.on("data", function (e) {
        actualA.push(e);
      });
      fork.b.on("data", function (e) {
        actualB.push(e);
      });
      fork.on("finish", function () {
        assert.deepEqual(expectedA, actualA);
        assert.deepEqual(expectedB, actualB);
        return done();
      });
      [1, 5, 7, 4, 9, 3, 1].forEach(function (n) {
        fork.write(n);
      });
      fork.end();
    });
    it("should respect backpressure", function (done) {
      var fork = new ForkStream({
        highWaterMark: 2,
        classifier: function classify(e, done) {
          return done(null, e >= 5);
        }
      });
      var expected = [5, 7],
          actual = [];
      fork.a.on("data", function (e) {
        actual.push(e);
      });
      var timeout = setTimeout(function () {
        assert.deepEqual(expected, actual);
        return done();
      }, 10);
      fork.on("finish", function () {
        clearTimeout(timeout);
        return done(Error("should not finish"));
      });
      [1, 5, 7, 4, 9, 3, 1].forEach(function (n) {
        fork.write(n);
      });
      fork.end();
    });
    it("should end the outputs when the input finishes", function (done) {
      var fork = new ForkStream();
      var count = 0;

      var onEnd = function onEnd() {
        if (++count === 2) {
          return done();
        }
      };

      fork.a.on("end", onEnd);
      fork.b.on("end", onEnd); // start "flowing" mode

      fork.a.resume();
      fork.b.resume();
      fork.end();
    });
  });
  return exports;
}