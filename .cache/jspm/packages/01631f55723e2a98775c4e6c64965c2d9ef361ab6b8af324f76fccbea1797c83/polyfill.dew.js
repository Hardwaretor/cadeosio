import { dew as _indexDewDew } from "d/index.dew.js";
import { dew as _validateSymbolDewDew } from "./validate-symbol.dew.js";
import { dew as _globalThisDewDew } from "ext/global-this.dew.js";
import { dew as _generateNameDewDew } from "./lib/private/generate-name.dew.js";
import { dew as _standardSymbolsDewDew } from "./lib/private/setup/standard-symbols.dew.js";
import { dew as _symbolRegistryDewDew } from "./lib/private/setup/symbol-registry.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var d = _indexDewDew(),
      validateSymbol = _validateSymbolDewDew(),
      NativeSymbol = _globalThisDewDew().Symbol,
      generateName = _generateNameDewDew(),
      setupStandardSymbols = _standardSymbolsDewDew(),
      setupSymbolRegistry = _symbolRegistryDewDew();

  var create = Object.create,
      defineProperties = Object.defineProperties,
      defineProperty = Object.defineProperty;
  var SymbolPolyfill, HiddenSymbol, isNativeSafe;

  if (typeof NativeSymbol === "function") {
    try {
      String(NativeSymbol());
      isNativeSafe = true;
    } catch (ignore) {}
  } else {
    NativeSymbol = null;
  } // Internal constructor (not one exposed) for creating Symbol instances.
  // This one is used to ensure that `someSymbol instanceof Symbol` always return false


  HiddenSymbol = function Symbol(description) {
    if (this instanceof HiddenSymbol) throw new TypeError("Symbol is not a constructor");
    return SymbolPolyfill(description);
  }; // Exposed `Symbol` constructor
  // (returns instances of HiddenSymbol)


  exports = SymbolPolyfill = function Symbol(description) {
    var symbol;
    if (this instanceof Symbol) throw new TypeError("Symbol is not a constructor");
    if (isNativeSafe) return NativeSymbol(description);
    symbol = create(HiddenSymbol.prototype);
    description = description === undefined ? "" : String(description);
    return defineProperties(symbol, {
      __description__: d("", description),
      __name__: d("", generateName(description))
    });
  };

  setupStandardSymbols(SymbolPolyfill);
  setupSymbolRegistry(SymbolPolyfill); // Internal tweaks for real symbol producer

  defineProperties(HiddenSymbol.prototype, {
    constructor: d(SymbolPolyfill),
    toString: d("", function () {
      return this.__name__;
    })
  }); // Proper implementation of methods exposed on Symbol.prototype
  // They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype

  defineProperties(SymbolPolyfill.prototype, {
    toString: d(function () {
      return "Symbol (" + validateSymbol(this).__description__ + ")";
    }),
    valueOf: d(function () {
      return validateSymbol(this);
    })
  });
  defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d("", function () {
    var symbol = validateSymbol(this);
    if (typeof symbol === "symbol") return symbol;
    return symbol.toString();
  }));
  defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d("c", "Symbol")); // Proper implementaton of toPrimitive and toStringTag for returned symbol instances

  defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag, d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])); // Note: It's important to define `toPrimitive` as last one, as some implementations
  // implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
  // And that may invoke error in definition flow:
  // See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149

  defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive, d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));
  return exports;
}