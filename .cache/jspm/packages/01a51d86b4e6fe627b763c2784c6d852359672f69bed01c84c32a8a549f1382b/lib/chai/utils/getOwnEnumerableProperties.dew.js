import { dew as _getOwnEnumerablePropertySymbolsDewDew } from "./getOwnEnumerablePropertySymbols.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - getOwnEnumerableProperties utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  /*!
   * Module dependencies
   */
  var getOwnEnumerablePropertySymbols = _getOwnEnumerablePropertySymbolsDewDew();
  /**
   * ### .getOwnEnumerableProperties(object)
   *
   * This allows the retrieval of directly-owned enumerable property names and
   * symbols of an object. This function is necessary because Object.keys only
   * returns enumerable property names, not enumerable property symbols.
   *
   * @param {Object} object
   * @returns {Array}
   * @namespace Utils
   * @name getOwnEnumerableProperties
   * @api public
   */


  exports = function getOwnEnumerableProperties(obj) {
    return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
  };

  return exports;
}