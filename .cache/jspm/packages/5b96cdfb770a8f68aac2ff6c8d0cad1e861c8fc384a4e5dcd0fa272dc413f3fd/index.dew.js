var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (a, b) {
    var fn = function () {};

    fn.prototype = b.prototype;
    a.prototype = new fn();
    a.prototype.constructor = a;
  };

  return exports;
}