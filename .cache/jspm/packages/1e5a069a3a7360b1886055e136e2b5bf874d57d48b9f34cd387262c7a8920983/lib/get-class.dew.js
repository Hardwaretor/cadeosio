import { dew as _indexDewDew } from "@sinonjs/commons/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var toString = _indexDewDew().prototypes.object.toString;

  function getClass(value) {
    // Returns the internal [[Class]] by calling Object.prototype.toString
    // with the provided value as this. Return value is a string, naming the
    // internal class, e.g. "Array"
    return toString(value).split(/[ \]]/)[1];
  }

  exports = getClass;
  return exports;
}