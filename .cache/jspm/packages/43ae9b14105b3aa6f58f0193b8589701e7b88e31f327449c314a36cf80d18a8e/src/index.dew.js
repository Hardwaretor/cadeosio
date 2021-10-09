import { dew as _indexDewDew } from "function-bind/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var bind = _indexDewDew();

  exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  return exports;
}