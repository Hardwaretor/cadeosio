var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (t, a) {
    a(typeof Symbol, "function");
  };

  return exports;
}