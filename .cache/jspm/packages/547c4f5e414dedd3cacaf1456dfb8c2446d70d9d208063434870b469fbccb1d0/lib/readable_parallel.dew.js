import { dew as _parallelDewDew } from "../parallel.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var parallel = _parallelDewDew(); // API


  exports = ReadableParallel;
  /**
   * Streaming wrapper to `asynckit.parallel`
   *
   * @param   {array|object} list - array or object (named list) to iterate over
   * @param   {function} iterator - iterator to run
   * @param   {function} callback - invoked when all elements processed
   * @returns {stream.Readable#}
   */

  function ReadableParallel(list, iterator, callback) {
    if (!((this || _global) instanceof ReadableParallel)) {
      return new ReadableParallel(list, iterator, callback);
    } // turn on object mode


    ReadableParallel.super_.call(this || _global, {
      objectMode: true
    });

    this._start(parallel, list, iterator, callback);
  }

  return exports;
}