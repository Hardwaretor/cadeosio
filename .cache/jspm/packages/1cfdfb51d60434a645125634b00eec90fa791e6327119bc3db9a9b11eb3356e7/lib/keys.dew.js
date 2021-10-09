var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Gets the keys for an object.
   *
   * @return {Array} keys
   * @api private
   */
  exports = Object.keys || function keys(obj) {
    var arr = [];
    var has = Object.prototype.hasOwnProperty;

    for (var i in obj) {
      if (has.call(obj, i)) {
        arr.push(i);
      }
    }

    return arr;
  };

  return exports;
}