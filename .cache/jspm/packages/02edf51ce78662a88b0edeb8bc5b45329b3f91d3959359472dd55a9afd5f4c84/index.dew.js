import { dew as _indexDewDew } from "is-extglob/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  var isExtglob = _indexDewDew();

  var chars = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  var strictRegex = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
  var relaxedRegex = /\\(.)|(^!|[*?{}()[\]]|\(\?)/;

  exports = function isGlob(str, options) {
    if (typeof str !== 'string' || str === '') {
      return false;
    }

    if (isExtglob(str)) {
      return true;
    }

    var regex = strictRegex;
    var match; // optionally relax regex

    if (options && options.strict === false) {
      regex = relaxedRegex;
    }

    while (match = regex.exec(str)) {
      if (match[2]) return true;
      var idx = match.index + match[0].length; // if an open bracket/brace/paren is escaped,
      // set the index to the next closing character

      var open = match[1];
      var close = open ? chars[open] : null;

      if (open && close) {
        var n = str.indexOf(close, idx);

        if (n !== -1) {
          idx = n + 1;
        }
      }

      str = str.slice(idx);
    }

    return false;
  };

  return exports;
}