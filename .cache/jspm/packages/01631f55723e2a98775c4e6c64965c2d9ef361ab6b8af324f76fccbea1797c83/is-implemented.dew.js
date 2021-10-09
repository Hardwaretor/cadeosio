import { dew as _globalThisDewDew } from "ext/global-this.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var global = _globalThisDewDew(),
      validTypes = {
    object: true,
    symbol: true
  };

  exports = function () {
    var Symbol = global.Symbol;
    var symbol;
    if (typeof Symbol !== "function") return false;
    symbol = Symbol("test symbol");

    try {
      String(symbol);
    } catch (e) {
      return false;
    } // Return 'true' also for polyfills


    if (!validTypes[typeof Symbol.iterator]) return false;
    if (!validTypes[typeof Symbol.toPrimitive]) return false;
    if (!validTypes[typeof Symbol.toStringTag]) return false;
    return true;
  };

  return exports;
}