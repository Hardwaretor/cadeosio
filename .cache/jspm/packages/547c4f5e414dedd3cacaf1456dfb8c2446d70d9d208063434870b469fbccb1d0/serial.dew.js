import { dew as _serialOrderedDewDew } from "./serialOrdered.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var serialOrdered = _serialOrderedDewDew(); // Public API


  exports = serial;
  /**
   * Runs iterator over provided array elements in series
   *
   * @param   {array|object} list - array or object (named list) to iterate over
   * @param   {function} iterator - iterator to run
   * @param   {function} callback - invoked when all elements processed
   * @returns {function} - jobs terminator
   */

  function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
  }

  return exports;
}