import { dew as _indexDewDew } from "is-finite/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isFinite = _indexDewDew();

  exports = function (str, n) {
    if (typeof str !== 'string') {
      throw new TypeError('Expected `input` to be a string');
    }

    if (n < 0 || !isFinite(n)) {
      throw new TypeError('Expected `count` to be a positive finite number');
    }

    var ret = '';

    do {
      if (n & 1) {
        ret += str;
      }

      str += str;
    } while (n >>= 1);

    return ret;
  };

  return exports;
}