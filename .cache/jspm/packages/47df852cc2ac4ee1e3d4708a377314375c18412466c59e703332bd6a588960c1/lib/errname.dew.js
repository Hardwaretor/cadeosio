import _util from "util";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  // Older verions of Node.js might not have `util.getSystemErrorName()`.
  // In that case, fall back to a deprecated internal.
  const util = _util;
  let uv;

  if (typeof util.getSystemErrorName === 'function') {
    exports = util.getSystemErrorName;
  } else {
    try {
      uv = process.binding('uv');

      if (typeof uv.errname !== 'function') {
        throw new TypeError('uv.errname is not a function');
      }
    } catch (err) {
      console.error('execa/lib/errname: unable to establish process.binding(\'uv\')', err);
      uv = null;
    }

    exports = code => errname(uv, code);
  } // Used for testing the fallback behavior


  exports.__test__ = errname;

  function errname(uv, code) {
    if (uv) {
      return uv.errname(code);
    }

    if (!(code < 0)) {
      throw new Error('err >= 0');
    }

    return `Unknown system error ${code}`;
  }

  return exports;
}