import { dew as _indexDewDew } from "es6-symbol/index.dew.js";
import { dew as _indexDew2Dew } from "../index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var iteratorSymbol = _indexDewDew().iterator,
      Iterator = _indexDew2Dew();

  exports = function (t, a) {
    var iterator;
    a(t(), false, "Undefined");
    a(t(123), false, "Number");
    a(t({}), false, "Plain object");
    a(t({
      length: 0
    }), false, "Array-like");
    iterator = {};

    iterator[iteratorSymbol] = function () {
      return new Iterator([]);
    };

    a(t(iterator), true, "Iterator");
    a(t([]), true, "Array");
    a(t("foo"), true, "String");
    a(t(""), true, "Empty string");
    a(t(function () {
      return arguments;
    }()), true, "Arguments");
  };

  return exports;
}