import { dew as _deferDewDew } from "./defer.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var defer = _deferDewDew(); // API


  exports = async;
  /**
   * Runs provided callback asynchronously
   * even if callback itself is not
   *
   * @param   {function} callback - callback to invoke
   * @returns {function} - augmented callback
   */

  function async(callback) {
    var isAsync = false; // check if async happened

    defer(function () {
      isAsync = true;
    });
    return function async_callback(err, result) {
      if (isAsync) {
        callback(err, result);
      } else {
        defer(function nextTick_callback() {
          callback(err, result);
        });
      }
    };
  }

  return exports;
}