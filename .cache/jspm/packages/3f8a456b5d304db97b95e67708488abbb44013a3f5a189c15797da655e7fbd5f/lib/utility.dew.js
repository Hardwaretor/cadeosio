import { dew as _packageJsonDewDew } from "../package.json.dew.js";
import _assert from "assert";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*
   * @fileoverview Utilities for Doctrine
   * @author Yusuke Suzuki <utatane.tea@gmail.com>
   */
  (function () {
    'use strict';

    var VERSION;
    VERSION = _packageJsonDewDew().version;
    exports.VERSION = VERSION;

    function DoctrineError(message) {
      (this || _global).name = 'DoctrineError';
      (this || _global).message = message;
    }

    DoctrineError.prototype = function () {
      var Middle = function () {};

      Middle.prototype = Error.prototype;
      return new Middle();
    }();

    DoctrineError.prototype.constructor = DoctrineError;
    exports.DoctrineError = DoctrineError;

    function throwError(message) {
      throw new DoctrineError(message);
    }

    exports.throwError = throwError;
    exports.assert = _assert;
  })();
  /* vim: set sw=4 ts=4 et tw=80 : */


  return exports;
}