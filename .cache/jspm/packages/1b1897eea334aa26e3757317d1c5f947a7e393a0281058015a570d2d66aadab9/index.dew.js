import { dew as _indexDewDew } from "isobject/index.dew.js";
import { dew as _indexDew2Dew } from "has-value/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isObject = _indexDewDew();

  var has = _indexDew2Dew();

  exports = function unset(obj, prop) {
    if (!isObject(obj)) {
      throw new TypeError('expected an object.');
    }

    if (obj.hasOwnProperty(prop)) {
      delete obj[prop];
      return true;
    }

    if (has(obj, prop)) {
      var segs = prop.split('.');
      var last = segs.pop();

      while (segs.length && segs[segs.length - 1].slice(-1) === '\\') {
        last = segs.pop().slice(0, -1) + '.' + last;
      }

      while (segs.length) obj = obj[prop = segs.shift()];

      return delete obj[last];
    }

    return true;
  };

  return exports;
}