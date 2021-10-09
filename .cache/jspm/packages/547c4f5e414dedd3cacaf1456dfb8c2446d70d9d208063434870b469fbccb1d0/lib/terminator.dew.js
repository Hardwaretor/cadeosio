import { dew as _abortDewDew } from "./abort.dew.js";
import { dew as _asyncDewDew } from "./async.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var abort = _abortDewDew(),
      async = _asyncDewDew(); // API


  exports = terminator;
  /**
   * Terminates jobs in the attached state context
   *
   * @this  AsyncKitState#
   * @param {function} callback - final callback to invoke after termination
   */

  function terminator(callback) {
    if (!Object.keys((this || _global).jobs).length) {
      return;
    } // fast forward iteration index


    (this || _global).index = (this || _global).size; // abort jobs

    abort(this || _global); // send back results we have so far

    async(callback)(null, (this || _global).results);
  }

  return exports;
}