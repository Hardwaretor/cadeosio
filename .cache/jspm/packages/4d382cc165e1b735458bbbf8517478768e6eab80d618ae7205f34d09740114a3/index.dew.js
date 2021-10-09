import { dew as _indexDewDew } from "kind-of/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var typeOf = _indexDewDew();

  exports = function isDataDescriptor(obj, prop) {
    // data descriptor properties
    var data = {
      configurable: 'boolean',
      enumerable: 'boolean',
      writable: 'boolean'
    };

    if (typeOf(obj) !== 'object') {
      return false;
    }

    if (typeof prop === 'string') {
      var val = Object.getOwnPropertyDescriptor(obj, prop);
      return typeof val !== 'undefined';
    }

    if (!('value' in obj) && !('writable' in obj)) {
      return false;
    }

    for (var key in obj) {
      if (key === 'value') continue;

      if (!data.hasOwnProperty(key)) {
        continue;
      }

      if (typeOf(obj[key]) === data[key]) {
        continue;
      }

      if (typeof obj[key] !== 'undefined') {
        return false;
      }
    }

    return true;
  };

  return exports;
}