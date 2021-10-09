import { dew as _indexDewDew } from "d/index.dew.js";
import { dew as _isSymbolDewDew } from "../is-symbol.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var d = _indexDewDew(),
      isSymbol = _isSymbolDewDew(),
      defineProperty = Object.defineProperty;

  exports = function (t, a) {
    var symbol = t("test"),
        obj = {};
    defineProperty(obj, symbol, d("foo"));
    a(obj.test, undefined, "Name");
    a(obj[symbol], "foo", "Get");
    a(obj instanceof t, false);
    a(isSymbol(symbol), true, "Symbol");
    a(isSymbol(t.iterator), true, "iterator");
    a(isSymbol(t.toStringTag), true, "toStringTag");
    obj = {};
    obj[symbol] = "foo";

    if (typeof symbol !== "symbol") {
      a.deep(Object.getOwnPropertyDescriptor(obj, symbol), {
        configurable: true,
        enumerable: false,
        value: "foo",
        writable: true
      });
    }

    symbol = t.for("marko");
    a(isSymbol(symbol), true);
    a(t.for("marko"), symbol);
    a(t.keyFor(symbol), "marko");
  };

  return exports;
}