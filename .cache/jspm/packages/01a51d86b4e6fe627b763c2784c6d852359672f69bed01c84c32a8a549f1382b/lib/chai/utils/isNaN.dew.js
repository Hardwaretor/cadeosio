var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - isNaN utility
   * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
   * MIT Licensed
   */

  /**
   * ### .isNaN(value)
   *
   * Checks if the given value is NaN or not.
   *
   *     utils.isNaN(NaN); // true
   *
   * @param {Value} The value which has to be checked if it is NaN
   * @name isNaN
   * @api private
   */
  function isNaN(value) {
    // Refer http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number
    // section's NOTE.
    return value !== value;
  } // If ECMAScript 6's Number.isNaN is present, prefer that.


  exports = Number.isNaN || isNaN;
  return exports;
}