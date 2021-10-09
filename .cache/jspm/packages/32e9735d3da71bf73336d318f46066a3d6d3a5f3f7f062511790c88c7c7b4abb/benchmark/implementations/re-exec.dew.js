var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (a, b) {
    a = String(a);
    b = String(b);
    var re = new RegExp(b + '$');
    return !!re.exec(a);
  };

  return exports;
}