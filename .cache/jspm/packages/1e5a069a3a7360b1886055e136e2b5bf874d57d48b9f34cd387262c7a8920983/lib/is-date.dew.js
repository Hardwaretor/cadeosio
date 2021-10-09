var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function isDate(value) {
    return value instanceof Date;
  }

  exports = isDate;
  return exports;
}