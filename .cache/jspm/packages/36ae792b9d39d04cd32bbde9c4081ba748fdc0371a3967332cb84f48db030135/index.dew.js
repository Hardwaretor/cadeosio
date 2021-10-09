import { dew as _indexDewDew } from "for-in/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var forIn = _indexDewDew();

  var hasOwn = Object.prototype.hasOwnProperty;

  exports = function forOwn(obj, fn, thisArg) {
    forIn(obj, function (val, key) {
      if (hasOwn.call(obj, key)) {
        return fn.call(thisArg, obj[key], key, obj);
      }
    });
  };

  return exports;
}