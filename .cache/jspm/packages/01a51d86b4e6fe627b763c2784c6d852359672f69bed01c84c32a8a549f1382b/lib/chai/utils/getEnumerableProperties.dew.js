var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - getEnumerableProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  /**
   * ### .getEnumerableProperties(object)
   *
   * This allows the retrieval of enumerable property names of an object,
   * inherited or not.
   *
   * @param {Object} object
   * @returns {Array}
   * @namespace Utils
   * @name getEnumerableProperties
   * @api public
   */
  exports = function getEnumerableProperties(object) {
    var result = [];

    for (var name in object) {
      result.push(name);
    }

    return result;
  };

  return exports;
}