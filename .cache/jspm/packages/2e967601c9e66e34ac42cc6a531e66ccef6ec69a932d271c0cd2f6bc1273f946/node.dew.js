import _util from "util";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * For Node.js, simply re-export the core `util.deprecate` function.
   */
  exports = _util.deprecate;
  return exports;
}