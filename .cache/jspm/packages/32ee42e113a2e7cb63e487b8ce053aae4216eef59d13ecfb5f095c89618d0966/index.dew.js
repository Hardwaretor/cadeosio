var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * is-posix-bracket <https://github.com/jonschlinkert/is-posix-bracket>
   *
   * Copyright (c) 2015-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   */
  exports = function isPosixBracket(str) {
    return typeof str === 'string' && /\[([:.=+])(?:[^\[\]]|)+\1\]/.test(str);
  };

  return exports;
}