import { dew as _indexDewDew } from "isobject/index.dew.js";
import { dew as _indexDew2Dew } from "is-descriptor/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isobject = _indexDewDew();

  var isDescriptor = _indexDew2Dew();

  var define = typeof Reflect !== 'undefined' && Reflect.defineProperty ? Reflect.defineProperty : Object.defineProperty;

  exports = function defineProperty(obj, key, val) {
    if (!isobject(obj) && typeof obj !== 'function' && !Array.isArray(obj)) {
      throw new TypeError('expected an object, function, or array');
    }

    if (typeof key !== 'string') {
      throw new TypeError('expected "key" to be a string');
    }

    if (isDescriptor(val)) {
      define(obj, key, val);
      return obj;
    }

    define(obj, key, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: val
    });
    return obj;
  };

  return exports;
}