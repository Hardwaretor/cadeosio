var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function forIn(obj, fn, thisArg) {
    for (var key in obj) {
      if (fn.call(thisArg, obj[key], key, obj) === false) {
        break;
      }
    }
  };

  return exports;
}