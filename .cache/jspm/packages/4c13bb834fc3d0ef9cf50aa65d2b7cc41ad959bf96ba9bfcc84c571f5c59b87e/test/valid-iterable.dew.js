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
    var obj;
    a.throws(function () {
      t();
    }, TypeError, "Undefined");
    a.throws(function () {
      t({});
    }, TypeError, "Plain object");
    a.throws(function () {
      t({
        length: 0
      });
    }, TypeError, "Array-like");
    obj = {};

    obj[iteratorSymbol] = function () {
      return new Iterator([]);
    };

    a(t(obj), obj, "Iterator");
    obj = [];
    a(t(obj), obj, "Array");

    obj = function () {
      return arguments;
    }();

    a(t(obj), obj, "Arguments");
  };

  return exports;
}