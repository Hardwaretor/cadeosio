import { dew as _indexDewDew } from "es6-promise/index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /* global self, window, module, global, require */
  exports = function () {
    "use strict";

    var globalObject = void 0;

    function isFunction(x) {
      return typeof x === "function";
    } // Seek the global object


    if (_global !== undefined) {
      globalObject = _global;
    } else if (window !== undefined && window.document) {
      globalObject = window;
    } else {
      globalObject = self;
    } // Test for any native promise implementation, and if that
    // implementation appears to conform to the specificaton.
    // This code mostly nicked from the es6-promise module polyfill
    // and then fooled with.


    var hasPromiseSupport = function () {
      // No promise object at all, and it's a non-starter
      if (!globalObject.hasOwnProperty("Promise")) {
        return false;
      } // There is a Promise object. Does it conform to the spec?


      var P = globalObject.Promise; // Some of these methods are missing from
      // Firefox/Chrome experimental implementations

      if (!P.hasOwnProperty("resolve") || !P.hasOwnProperty("reject")) {
        return false;
      }

      if (!P.hasOwnProperty("all") || !P.hasOwnProperty("race")) {
        return false;
      } // Older version of the spec had a resolver object
      // as the arg rather than a function


      return function () {
        var resolve = void 0;
        var p = new globalObject.Promise(function (r) {
          resolve = r;
        });

        if (p) {
          return isFunction(resolve);
        }

        return false;
      }();
    }(); // Export the native Promise implementation if it
    // looks like it matches the spec


    if (hasPromiseSupport) {
      return globalObject.Promise;
    } //  Otherwise, return the es6-promise polyfill by @jaffathecake.


    return _indexDewDew().Promise;
  }();

  return exports;
}