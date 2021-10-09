import { dew as _serialDewDew } from "../serial.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var serial = _serialDewDew(); // API


  exports = ReadableSerial;
  /**
   * Streaming wrapper to `asynckit.serial`
   *
   * @param   {array|object} list - array or object (named list) to iterate over
   * @param   {function} iterator - iterator to run
   * @param   {function} callback - invoked when all elements processed
   * @returns {stream.Readable#}
   */

  function ReadableSerial(list, iterator, callback) {
    if (!((this || _global) instanceof ReadableSerial)) {
      return new ReadableSerial(list, iterator, callback);
    } // turn on object mode


    ReadableSerial.super_.call(this || _global, {
      objectMode: true
    });

    this._start(serial, list, iterator, callback);
  }

  return exports;
}