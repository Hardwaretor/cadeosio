var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var endsWith = exports = function (a, b) {
    a = String(a);
    b = String(b);
    var i = a.lastIndexOf(b);
    return i >= 0 && i === a.length - b.length;
  };

  return exports;
}