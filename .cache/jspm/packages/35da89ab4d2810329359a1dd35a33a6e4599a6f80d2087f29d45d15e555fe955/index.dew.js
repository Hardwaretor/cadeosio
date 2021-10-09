var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   */
  exports = function isExtglob(str) {
    if (typeof str !== 'string' || str === '') {
      return false;
    }

    var match;

    while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
      if (match[2]) return true;
      str = str.slice(match.index + match[0].length);
    }

    return false;
  };

  return exports;
}