var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = clone;

  function clone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Object) var copy = {
      __proto__: obj.__proto__
    };else var copy = Object.create(null);
    Object.getOwnPropertyNames(obj).forEach(function (key) {
      Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    return copy;
  }

  return exports;
}