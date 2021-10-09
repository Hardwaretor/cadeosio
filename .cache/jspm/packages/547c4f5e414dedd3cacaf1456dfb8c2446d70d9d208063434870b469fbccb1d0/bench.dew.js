import { dew as _indexDewDew } from "./index.dew.js";
import _assert from "assert";
import _module from "module";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

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

  /* eslint no-console: "off" */
  var asynckit = _indexDewDew(),
      async = _nodeRequire('async'),
      assert = _assert,
      expected = 0;

  var Benchmark = _nodeRequire('benchmark');

  var suite = new Benchmark.Suite();
  var source = [];

  for (var z = 1; z < 100; z++) {
    source.push(z);
    expected += z;
  }

  suite // add tests
  .add('async.map', function (deferred) {
    var total = 0;
    async.map(source, function (i, cb) {
      setImmediate(function () {
        total += i;
        cb(null, total);
      });
    }, function (err, result) {
      assert.ifError(err);
      assert.equal(result[result.length - 1], expected);
      deferred.resolve();
    });
  }, {
    'defer': true
  }).add('asynckit.parallel', function (deferred) {
    var total = 0;
    asynckit.parallel(source, function (i, cb) {
      setImmediate(function () {
        total += i;
        cb(null, total);
      });
    }, function (err, result) {
      assert.ifError(err);
      assert.equal(result[result.length - 1], expected);
      deferred.resolve();
    });
  }, {
    'defer': true
  }) // add listeners
  .on('cycle', function (ev) {
    console.log(String(ev.target));
  }).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  }) // run async
  .run({
    'async': true
  });
  return exports;
}