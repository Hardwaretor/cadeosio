import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = defer;
  /**
   * Runs provided function on next iteration of the event loop
   *
   * @param {function} fn - function to run
   */

  function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;

    if (nextTick) {
      nextTick(fn);
    } else {
      setTimeout(fn, 0);
    }
  }

  return exports;
}