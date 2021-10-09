import { dew as _globalThisDewDew } from "ext/global-this.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Symbol = _globalThisDewDew().Symbol;

  exports = typeof Symbol === "function" && typeof Symbol() === "symbol";
  return exports;
}