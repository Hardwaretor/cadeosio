var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (a, b) {
    a = String(a);
    b = String(b);
    return a.slice(a.length - b.length) === b;
  };

  return exports;
}