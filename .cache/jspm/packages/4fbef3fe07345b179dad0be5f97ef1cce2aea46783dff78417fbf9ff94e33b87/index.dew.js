import { dew as _indexDewDew } from "is-number/index.dew.js";
import { dew as _indexDew2Dew } from "array-slice/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * array-initial <https://github.com/jonschlinkert/array-initial>
   *
   * Copyright (c) 2014 Jon Schlinkert, contributors.
   * Licensed under the MIT license.
   */
  var isNumber = _indexDewDew();

  var slice = _indexDew2Dew();

  exports = function arrayInitial(arr, num) {
    if (!Array.isArray(arr)) {
      throw new Error('array-initial expects an array as the first argument.');
    }

    if (arr.length === 0) {
      return null;
    }

    return slice(arr, 0, arr.length - (isNumber(num) ? num : 1));
  };

  return exports;
}