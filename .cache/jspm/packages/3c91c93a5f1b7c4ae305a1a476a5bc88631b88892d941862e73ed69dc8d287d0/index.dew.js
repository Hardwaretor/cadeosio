var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Results cache
   */
  var res = '';
  var cache;
  /**
   * Expose `repeat`
   */

  exports = repeat;
  /**
   * Repeat the given `string` the specified `number`
   * of times.
   *
   * **Example:**
   *
   * ```js
   * var repeat = require('repeat-string');
   * repeat('A', 5);
   * //=> AAAAA
   * ```
   *
   * @param {String} `string` The string to repeat
   * @param {Number} `number` The number of times to repeat the string
   * @return {String} Repeated string
   * @api public
   */

  function repeat(str, num) {
    if (typeof str !== 'string') {
      throw new TypeError('expected a string');
    } // cover common, quick use cases


    if (num === 1) return str;
    if (num === 2) return str + str;
    var max = str.length * num;

    if (cache !== str || typeof cache === 'undefined') {
      cache = str;
      res = '';
    } else if (res.length >= max) {
      return res.substr(0, max);
    }

    while (max > res.length && num > 1) {
      if (num & 1) {
        res += str;
      }

      num >>= 1;
      str += str;
    }

    res += str;
    res = res.substr(0, max);
    return res;
  }

  return exports;
}