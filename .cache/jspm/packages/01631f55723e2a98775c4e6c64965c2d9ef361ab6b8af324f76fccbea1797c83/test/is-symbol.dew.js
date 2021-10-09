import { dew as _polyfillDewDew } from "../polyfill.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var SymbolPolyfill = _polyfillDewDew();

  exports = function (t, a) {
    a(t(undefined), false, "Undefined");
    a(t(null), false, "Null");
    a(t(true), false, "Primitive");
    a(t("raz"), false, "String");
    a(t({}), false, "Object");
    a(t([]), false, "Array");

    if (typeof Symbol !== "undefined") {
      a(t(Symbol("foo")), true, "Native");
    }

    a(t(SymbolPolyfill()), true, "Polyfill");
  };

  return exports;
}