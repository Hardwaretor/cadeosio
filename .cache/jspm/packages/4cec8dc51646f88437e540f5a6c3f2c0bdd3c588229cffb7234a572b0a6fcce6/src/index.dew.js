var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Tries to execute a function and discards any error that occurs.
   * @param {Function} fn - Function that might or might not throw an error.
   * @returns {?*} Return-value of the function when no error occurred.
   */
  exports = function (fn) {
    try {
      return fn();
    } catch (e) {}
  };

  return exports;
}