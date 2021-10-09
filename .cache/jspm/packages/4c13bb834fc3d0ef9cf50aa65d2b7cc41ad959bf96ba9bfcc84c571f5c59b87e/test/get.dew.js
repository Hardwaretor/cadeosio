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
    a.throws(function () {
      t();
    }, TypeError, "Null");
    a.throws(function () {
      t({});
    }, TypeError, "Plain object");
    a.throws(function () {
      t({
        length: 0
      });
    }, TypeError, "Array-like");
    iterator = {};

    iterator[iteratorSymbol] = function () {
      return new Iterator([]);
    };

    a(t(iterator) instanceof Iterator, true, "Iterator");
    a(String(t([])), "[object Array Iterator]", " Array");
    a(String(t(function () {
      return arguments;
    }())), "[object Array Iterator]", " Arguments");
    a(String(t("foo")), "[object String Iterator]", "String");
  };

  return exports;
}