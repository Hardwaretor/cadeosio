import { dew as _indexDewDew } from "make-iterator/index.dew.js";
import { dew as _indexDew2Dew } from "for-own/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var makeIterator = _indexDewDew();

  var forOwn = _indexDew2Dew();

  exports = function (obj, fn, thisArg) {
    var iterator = makeIterator(fn, thisArg);
    var result = {};
    forOwn(obj, function (value, key, orig) {
      result[key] = iterator(value, key, orig);
    });
    return result;
  };

  return exports;
}