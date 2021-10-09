import { dew as _utilsDewDew } from "../lib/utils.dew.js";
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

  var utils = _utilsDewDew();

  test('merge()', function (t) {
    t.deepEqual(utils.merge({
      a: 'b'
    }, {
      a: 'c'
    }), {
      a: ['b', 'c']
    }, 'merges two objects with the same key');
    var oneMerged = utils.merge({
      foo: 'bar'
    }, {
      foo: {
        first: '123'
      }
    });
    t.deepEqual(oneMerged, {
      foo: ['bar', {
        first: '123'
      }]
    }, 'merges a standalone and an object into an array');
    var twoMerged = utils.merge({
      foo: ['bar', {
        first: '123'
      }]
    }, {
      foo: {
        second: '456'
      }
    });
    t.deepEqual(twoMerged, {
      foo: {
        0: 'bar',
        1: {
          first: '123'
        },
        second: '456'
      }
    }, 'merges a standalone and two objects into an array');
    var sandwiched = utils.merge({
      foo: ['bar', {
        first: '123',
        second: '456'
      }]
    }, {
      foo: 'baz'
    });
    t.deepEqual(sandwiched, {
      foo: ['bar', {
        first: '123',
        second: '456'
      }, 'baz']
    }, 'merges an object sandwiched by two standalones into an array');
    var nestedArrays = utils.merge({
      foo: ['baz']
    }, {
      foo: ['bar', 'xyzzy']
    });
    t.deepEqual(nestedArrays, {
      foo: ['baz', 'bar', 'xyzzy']
    });
    t.end();
  });
  test('assign()', function (t) {
    var target = {
      a: 1,
      b: 2
    };
    var source = {
      b: 3,
      c: 4
    };
    var result = utils.assign(target, source);
    t.equal(result, target, 'returns the target');
    t.deepEqual(target, {
      a: 1,
      b: 3,
      c: 4
    }, 'target and source are merged');
    t.deepEqual(source, {
      b: 3,
      c: 4
    }, 'source is untouched');
    t.end();
  });
  return exports;
}