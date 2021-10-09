import { dew as _globalThisDewDew } from "ext/global-this.dew.js";
import { dew as _polyfillDewDew } from "../polyfill.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var global = _globalThisDewDew(),
      polyfill = _polyfillDewDew();

  exports = function (t, a) {
    var cache;
    a(typeof t(), "boolean");
    cache = global.Symbol;
    global.Symbol = polyfill;
    a(t(), true);
    if (cache === undefined) delete global.Symbol;else global.Symbol = cache;
  };

  return exports;
}