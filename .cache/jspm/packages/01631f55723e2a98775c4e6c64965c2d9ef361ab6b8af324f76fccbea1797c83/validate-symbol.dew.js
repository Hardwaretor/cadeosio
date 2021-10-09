import { dew as _isSymbolDewDew } from "./is-symbol.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isSymbol = _isSymbolDewDew();

  exports = function (value) {
    if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
    return value;
  };

  return exports;
}