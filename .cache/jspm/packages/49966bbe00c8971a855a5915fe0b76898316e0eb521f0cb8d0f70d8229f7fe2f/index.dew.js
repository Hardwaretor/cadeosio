import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  /*! is-windows v0.2.0 | MIT LICENSE (c) 2015 | https://github.com/jonschlinkert/is-windows */
  (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD
      define(factory);
    } else if (typeof exports === 'object') {
      // Node.js
      exports = factory;
    } else {
      // Browser
      root.isWindows = factory;
    }
  })(exports, function () {
    'use strict';

    return function isWindows() {
      if (typeof process === 'undefined' || !process) {
        return false;
      }

      return process.platform === 'win32';
    }();
  });

  return exports;
}