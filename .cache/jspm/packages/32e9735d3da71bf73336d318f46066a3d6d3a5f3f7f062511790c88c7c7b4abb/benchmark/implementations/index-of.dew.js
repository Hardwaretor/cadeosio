var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function indexOf(a, b) {
    a = String(a);
    b = String(b);
    return a.indexOf(b, a.length - b.length) !== -1;
  };

  return exports;
}