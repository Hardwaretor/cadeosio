var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function isSet(val) {
    return typeof Set !== "undefined" && val instanceof Set || false;
  }

  exports = isSet;
  return exports;
}