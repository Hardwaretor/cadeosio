import { dew as _isArgumentsDewDew } from "es5-ext/function/is-arguments.dew.js";
import { dew as _isValueDewDew } from "es5-ext/object/is-value.dew.js";
import { dew as _isStringDewDew } from "es5-ext/string/is-string.dew.js";
import { dew as _indexDewDew } from "es6-symbol/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isArguments = _isArgumentsDewDew(),
      isValue = _isValueDewDew(),
      isString = _isStringDewDew();

  var iteratorSymbol = _indexDewDew().iterator,
      isArray = Array.isArray;

  exports = function (value) {
    if (!isValue(value)) return false;
    if (isArray(value)) return true;
    if (isString(value)) return true;
    if (isArguments(value)) return true;
    return typeof value[iteratorSymbol] === "function";
  };

  return exports;
}