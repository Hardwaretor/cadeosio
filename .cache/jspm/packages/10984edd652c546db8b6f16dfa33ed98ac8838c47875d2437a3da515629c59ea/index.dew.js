var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function isObject(x) {
    return typeof x === "object" && x !== null;
  };

  return exports;
}