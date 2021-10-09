import { dew as _indexDewDew } from "isarray/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isArray = _indexDewDew();

  exports = function isObject(val) {
    return val != null && typeof val === 'object' && isArray(val) === false;
  };

  return exports;
}