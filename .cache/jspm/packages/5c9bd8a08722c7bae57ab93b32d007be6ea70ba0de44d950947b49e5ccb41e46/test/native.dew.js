import { dew as _indexDewDew } from "define-properties/index.dew.js";
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

  var test = _nodeRequire('tape');

  var defineProperties = _indexDewDew();

  var isEnumerable = Object.prototype.propertyIsEnumerable;

  var functionsHaveNames = _nodeRequire('functions-have-names')();

  var runTests = _testsDewDew();

  test('native', function (t) {
    t.equal(Object.assign.length, 2, 'Object.assign has a length of 2');
    t.test('Function name', {
      skip: !functionsHaveNames
    }, function (st) {
      st.equal(Object.assign.name, 'assign', 'Object.assign has name "assign"');
      st.end();
    });
    t.test('enumerability', {
      skip: !defineProperties.supportsDescriptors
    }, function (et) {
      et.equal(false, isEnumerable.call(Object, 'assign'), 'Object.assign is not enumerable');
      et.end();
    });

    var supportsStrictMode = function () {
      return typeof this === 'undefined';
    }();

    t.test('bad object value', {
      skip: !supportsStrictMode
    }, function (st) {
      st['throws'](function () {
        return Object.assign(undefined);
      }, TypeError, 'undefined is not an object');
      st['throws'](function () {
        return Object.assign(null);
      }, TypeError, 'null is not an object');
      st.end();
    }); // v8 in node 0.8 and 0.10 have non-enumerable string properties

    var stringCharsAreEnumerable = isEnumerable.call('xy', 0);
    t.test('when Object.assign is present and has pending exceptions', {
      skip: !stringCharsAreEnumerable || !Object.preventExtensions
    }, function (st) {
      /*
       * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
       * which is 72% slower than our shim, and Firefox 40's native implementation.
       */
      var thrower = Object.preventExtensions({
        1: '2'
      });
      var error;

      try {
        Object.assign(thrower, 'xy');
      } catch (e) {
        error = e;
      }

      st.equal(error instanceof TypeError, true, 'error is TypeError');
      st.equal(thrower[1], '2', 'thrower[1] === "2"');
      st.end();
    });
    runTests(Object.assign, t);
    t.end();
  });
  return exports;
}