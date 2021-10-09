import _util from "util";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var util = _util;

  exports = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    args.forEach(function (arg) {
      if (!arg) throw new TypeError('Bad arguments.');
    });
    return util.format.apply(null, arguments);
  };

  return exports;
}