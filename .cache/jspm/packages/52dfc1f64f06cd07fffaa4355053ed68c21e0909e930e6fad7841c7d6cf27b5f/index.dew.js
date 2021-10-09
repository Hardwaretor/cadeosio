var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = Number.isNaN || function (x) {
    return x !== x;
  };

  return exports;
}