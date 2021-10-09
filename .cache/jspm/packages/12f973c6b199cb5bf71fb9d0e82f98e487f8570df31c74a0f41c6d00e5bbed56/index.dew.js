import { dew as _indexDewDew } from "remove-trailing-separator/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * normalize-path <https://github.com/jonschlinkert/normalize-path>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  var removeTrailingSeparator = _indexDewDew();

  exports = function normalizePath(str, stripTrailing) {
    if (typeof str !== 'string') {
      throw new TypeError('expected a string');
    }

    str = str.replace(/[\\\/]+/g, '/');

    if (stripTrailing !== false) {
      str = removeTrailingSeparator(str);
    }

    return str;
  };

  return exports;
}