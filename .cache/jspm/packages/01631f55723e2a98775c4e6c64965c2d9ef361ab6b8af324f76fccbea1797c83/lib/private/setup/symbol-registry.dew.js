import { dew as _indexDewDew } from "d/index.dew.js";
import { dew as _validateSymbolDewDew } from "../../../validate-symbol.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var d = _indexDewDew(),
      validateSymbol = _validateSymbolDewDew();

  var registry = Object.create(null);

  exports = function (SymbolPolyfill) {
    return Object.defineProperties(SymbolPolyfill, {
      for: d(function (key) {
        if (registry[key]) return registry[key];
        return registry[key] = SymbolPolyfill(String(key));
      }),
      keyFor: d(function (symbol) {
        var key;
        validateSymbol(symbol);

        for (key in registry) {
          if (registry[key] === symbol) return key;
        }

        return undefined;
      })
    });
  };

  return exports;
}