var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function isMap(value) {
    return typeof Map !== "undefined" && value instanceof Map;
  }

  exports = isMap;
  return exports;
}