import { dew as _indexDewDew } from "is-arrayish/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isArrayish = _indexDewDew();

  var concat = Array.prototype.concat;
  var slice = Array.prototype.slice;

  var swizzle = exports = function swizzle(args) {
    var results = [];

    for (var i = 0, len = args.length; i < len; i++) {
      var arg = args[i];

      if (isArrayish(arg)) {
        // http://jsperf.com/javascript-array-concat-vs-push/98
        results = concat.call(results, slice.call(arg));
      } else {
        results.push(arg);
      }
    }

    return results;
  };

  swizzle.wrap = function (fn) {
    return function () {
      return fn(swizzle(arguments));
    };
  };

  return exports;
}