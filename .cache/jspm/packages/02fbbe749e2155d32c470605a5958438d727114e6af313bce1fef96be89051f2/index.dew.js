import _process from "process";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var next = _global.process && process.nextTick || _global.setImmediate || function (f) {
    setTimeout(f, 0);
  };

  exports = function maybe(cb, promise) {
    if (cb) {
      promise.then(function (result) {
        next(function () {
          cb(null, result);
        });
      }, function (err) {
        next(function () {
          cb(err);
        });
      });
      return undefined;
    } else {
      return promise;
    }
  };

  return exports;
}