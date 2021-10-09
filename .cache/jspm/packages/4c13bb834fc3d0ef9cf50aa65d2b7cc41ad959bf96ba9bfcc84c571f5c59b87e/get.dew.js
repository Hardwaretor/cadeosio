import { dew as _isArgumentsDewDew } from "es5-ext/function/is-arguments.dew.js";
import { dew as _isStringDewDew } from "es5-ext/string/is-string.dew.js";
import { dew as _arrayDewDew } from "./array.dew.js";
import { dew as _stringDewDew } from "./string.dew.js";
import { dew as _validIterableDewDew } from "./valid-iterable.dew.js";
import { dew as _indexDewDew } from "es6-symbol/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isArguments = _isArgumentsDewDew(),
      isString = _isStringDewDew(),
      ArrayIterator = _arrayDewDew(),
      StringIterator = _stringDewDew(),
      iterable = _validIterableDewDew(),
      iteratorSymbol = _indexDewDew().iterator;

  exports = function (obj) {
    if (typeof iterable(obj)[iteratorSymbol] === "function") return obj[iteratorSymbol]();
    if (isArguments(obj)) return new ArrayIterator(obj);
    if (isString(obj)) return new StringIterator(obj);
    return new ArrayIterator(obj);
  };

  return exports;
}