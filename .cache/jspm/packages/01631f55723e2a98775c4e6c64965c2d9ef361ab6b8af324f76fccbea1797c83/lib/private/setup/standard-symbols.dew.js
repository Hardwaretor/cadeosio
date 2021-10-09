import { dew as _indexDewDew } from "d/index.dew.js";
import { dew as _globalThisDewDew } from "ext/global-this.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var d = _indexDewDew(),
      NativeSymbol = _globalThisDewDew().Symbol;

  exports = function (SymbolPolyfill) {
    return Object.defineProperties(SymbolPolyfill, {
      // To ensure proper interoperability with other native functions (e.g. Array.from)
      // fallback to eventual native implementation of given symbol
      hasInstance: d("", NativeSymbol && NativeSymbol.hasInstance || SymbolPolyfill("hasInstance")),
      isConcatSpreadable: d("", NativeSymbol && NativeSymbol.isConcatSpreadable || SymbolPolyfill("isConcatSpreadable")),
      iterator: d("", NativeSymbol && NativeSymbol.iterator || SymbolPolyfill("iterator")),
      match: d("", NativeSymbol && NativeSymbol.match || SymbolPolyfill("match")),
      replace: d("", NativeSymbol && NativeSymbol.replace || SymbolPolyfill("replace")),
      search: d("", NativeSymbol && NativeSymbol.search || SymbolPolyfill("search")),
      species: d("", NativeSymbol && NativeSymbol.species || SymbolPolyfill("species")),
      split: d("", NativeSymbol && NativeSymbol.split || SymbolPolyfill("split")),
      toPrimitive: d("", NativeSymbol && NativeSymbol.toPrimitive || SymbolPolyfill("toPrimitive")),
      toStringTag: d("", NativeSymbol && NativeSymbol.toStringTag || SymbolPolyfill("toStringTag")),
      unscopables: d("", NativeSymbol && NativeSymbol.unscopables || SymbolPolyfill("unscopables"))
    });
  };

  return exports;
}