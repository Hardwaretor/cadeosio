import { dew as _isDewDew } from "type/value/is.dew.js";
import { dew as _ensureDewDew } from "type/value/ensure.dew.js";
import { dew as _ensureDew2Dew } from "type/plain-function/ensure.dew.js";
import { dew as _copyDewDew } from "es5-ext/object/copy.dew.js";
import { dew as _normalizeOptionsDewDew } from "es5-ext/object/normalize-options.dew.js";
import { dew as _mapDewDew } from "es5-ext/object/map.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isValue = _isDewDew(),
      ensureValue = _ensureDewDew(),
      ensurePlainFunction = _ensureDew2Dew(),
      copy = _copyDewDew(),
      normalizeOptions = _normalizeOptionsDewDew(),
      map = _mapDewDew();

  var bind = Function.prototype.bind,
      defineProperty = Object.defineProperty,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      define;

  define = function (name, desc, options) {
    var value = ensureValue(desc) && ensurePlainFunction(desc.value),
        dgs;
    dgs = copy(desc);
    delete dgs.writable;
    delete dgs.value;

    dgs.get = function () {
      if (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;
      desc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);
      defineProperty(this, name, desc);
      return this[name];
    };

    return dgs;
  };

  exports = function (props
  /*, options*/
  ) {
    var options = normalizeOptions(arguments[1]);
    if (isValue(options.resolveContext)) ensurePlainFunction(options.resolveContext);
    return map(props, function (desc, name) {
      return define(name, desc, options);
    });
  };

  return exports;
}