var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (a, b) {
    if (Array.isArray(a)) {
      return a[a.length - 1] === b;
    }

    a = String(a);
    b = String(b);
    var i = b.length;
    var len = a.length - i;

    while (i--) {
      if (b.charAt(i) !== a.charAt(len + i)) {
        return false;
      }
    }

    return true;
  };

  return exports;
}