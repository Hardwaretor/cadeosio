import { dew as _indexDewDew } from "d/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var d = _indexDewDew(),
      defineProperty = Object.defineProperty;

  exports = function (t, a) {
    var symbol = t("test"),
        obj = {};
    defineProperty(obj, symbol, d("foo"));
    a(obj.test, undefined, "Name");
    a(obj[symbol], "foo", "Get");
  };

  return exports;
}