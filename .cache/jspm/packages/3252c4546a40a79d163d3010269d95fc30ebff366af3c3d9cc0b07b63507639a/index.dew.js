import { dew as _indexDewDew } from "isobject/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isObject = _indexDewDew();

  exports = function pick(obj, keys) {
    if (!isObject(obj) && typeof obj !== 'function') {
      return {};
    }

    var res = {};

    if (typeof keys === 'string') {
      if (keys in obj) {
        res[keys] = obj[keys];
      }

      return res;
    }

    var len = keys.length;
    var idx = -1;

    while (++idx < len) {
      var key = keys[idx];

      if (key in obj) {
        res[key] = obj[key];
      }
    }

    return res;
  };

  return exports;
}