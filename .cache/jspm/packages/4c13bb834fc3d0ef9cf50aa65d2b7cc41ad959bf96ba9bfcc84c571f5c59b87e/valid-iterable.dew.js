import { dew as _isIterableDewDew } from "./is-iterable.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isIterable = _isIterableDewDew();

  exports = function (value) {
    if (!isIterable(value)) throw new TypeError(value + " is not iterable");
    return value;
  };

  return exports;
}