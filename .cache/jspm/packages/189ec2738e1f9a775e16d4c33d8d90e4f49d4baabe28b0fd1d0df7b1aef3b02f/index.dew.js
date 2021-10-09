import { dew as _indexDewDew } from "is-descriptor/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isDescriptor = _indexDewDew();

  exports = function defineProperty(obj, prop, val) {
    if (typeof obj !== 'object' && typeof obj !== 'function') {
      throw new TypeError('expected an object or function.');
    }

    if (typeof prop !== 'string') {
      throw new TypeError('expected `prop` to be a string.');
    }

    if (isDescriptor(val) && ('set' in val || 'get' in val)) {
      return Object.defineProperty(obj, prop, val);
    }

    return Object.defineProperty(obj, prop, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: val
    });
  };

  return exports;
}