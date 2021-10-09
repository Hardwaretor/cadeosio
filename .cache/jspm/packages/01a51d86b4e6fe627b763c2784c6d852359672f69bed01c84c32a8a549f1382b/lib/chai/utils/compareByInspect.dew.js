import { dew as _inspectDewDew } from "./inspect.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - compareByInspect utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  /*!
   * Module dependencies
   */
  var inspect = _inspectDewDew();
  /**
   * ### .compareByInspect(mixed, mixed)
   *
   * To be used as a compareFunction with Array.prototype.sort. Compares elements
   * using inspect instead of default behavior of using toString so that Symbols
   * and objects with irregular/missing toString can still be sorted without a
   * TypeError.
   *
   * @param {Mixed} first element to compare
   * @param {Mixed} second element to compare
   * @returns {Number} -1 if 'a' should come before 'b'; otherwise 1
   * @name compareByInspect
   * @namespace Utils
   * @api public
   */


  exports = function compareByInspect(a, b) {
    return inspect(a) < inspect(b) ? -1 : 1;
  };

  return exports;
}