import { dew as _indexDewDew } from "make-iterator/index.dew.js";
import { dew as _indexDew2Dew } from "for-own/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var makeIterator = _indexDewDew();

  var forOwn = _indexDew2Dew();

  exports = function reduce(target, fn, acc, thisArg) {
    var first = arguments.length > 2;

    if (target && !Object.keys(target).length && !first) {
      return null;
    }

    var iterator = makeIterator(fn, thisArg);
    forOwn(target, function (value, key, orig) {
      if (!first) {
        acc = value;
        first = true;
      } else {
        acc = iterator(acc, value, key, orig);
      }
    });
    return acc;
  };

  return exports;
}