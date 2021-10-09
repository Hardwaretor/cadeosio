import { dew as _serialOrderedDewDew } from "../serialOrdered.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var serialOrdered = _serialOrderedDewDew(); // API


  exports = ReadableSerialOrdered; // expose sort helpers

  exports.ascending = serialOrdered.ascending;
  exports.descending = serialOrdered.descending;
  /**
   * Streaming wrapper to `asynckit.serialOrdered`
   *
   * @param   {array|object} list - array or object (named list) to iterate over
   * @param   {function} iterator - iterator to run
   * @param   {function} sortMethod - custom sort function
   * @param   {function} callback - invoked when all elements processed
   * @returns {stream.Readable#}
   */

  function ReadableSerialOrdered(list, iterator, sortMethod, callback) {
    if (!((this || _global) instanceof ReadableSerialOrdered)) {
      return new ReadableSerialOrdered(list, iterator, sortMethod, callback);
    } // turn on object mode


    ReadableSerialOrdered.super_.call(this || _global, {
      objectMode: true
    });

    this._start(serialOrdered, list, iterator, sortMethod, callback);
  }

  return exports;
}