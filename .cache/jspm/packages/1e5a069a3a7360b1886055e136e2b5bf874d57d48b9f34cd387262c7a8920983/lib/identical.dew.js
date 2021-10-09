import { dew as _isNanDewDew } from "./is-nan.dew.js";
import { dew as _isNegZeroDewDew } from "./is-neg-zero.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isNaN = _isNanDewDew();

  var isNegZero = _isNegZeroDewDew();
  /**
   * @name samsam.equal
   * @param Object obj1
   * @param Object obj2
   *
   * Returns ``true`` if two objects are strictly equal. Compared to
   * ``===`` there are two exceptions:
   *
   *   - NaN is considered equal to NaN
   *   - -0 and +0 are not considered equal
   */


  function identical(obj1, obj2) {
    if (obj1 === obj2 || isNaN(obj1) && isNaN(obj2)) {
      return obj1 !== 0 || isNegZero(obj1) === isNegZero(obj2);
    }

    return false;
  }

  exports = identical;
  return exports;
}