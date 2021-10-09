var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Loop over each item in an array and call the given function on every element.
   *
   * ```js
   * each(['a', 'b', 'c'], function(ele) {
   *   return ele + ele;
   * });
   * //=> ['aa', 'bb', 'cc']
   *
   * each(['a', 'b', 'c'], function(ele, i) {
   *   return i + ele;
   * });
   * //=> ['0a', '1b', '2c']
   * ```
   *
   * @name each
   * @alias forEach
   * @param {Array} `array`
   * @param {Function} `fn`
   * @param {Object} `thisArg` (optional) pass a `thisArg` to be used as the context in which to call the function.
   * @return {undefined}
   * @api public
   */
  exports = function each(arr, cb, thisArg) {
    if (arr == null) return;
    var len = arr.length;
    var idx = -1;

    while (++idx < len) {
      var ele = arr[idx];

      if (cb.call(thisArg, ele, idx, arr) === false) {
        break;
      }
    }
  };

  return exports;
}