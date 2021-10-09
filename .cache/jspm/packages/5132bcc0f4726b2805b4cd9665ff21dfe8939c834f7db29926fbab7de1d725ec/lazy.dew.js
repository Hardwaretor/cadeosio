import { dew as _isDewDew } from "type/plain-function/is.dew.js";
import { dew as _ensureDewDew } from "type/value/ensure.dew.js";
import { dew as _isDew2Dew } from "type/value/is.dew.js";
import { dew as _mapDewDew } from "es5-ext/object/map.dew.js";
import { dew as _containsDewDew } from "es5-ext/string/#/contains.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isPlainFunction = _isDewDew(),
      ensureValue = _ensureDewDew(),
      isValue = _isDew2Dew(),
      map = _mapDewDew(),
      contains = _containsDewDew();

  var call = Function.prototype.call,
      defineProperty = Object.defineProperty,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
      getPrototypeOf = Object.getPrototypeOf,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      cacheDesc = {
    configurable: false,
    enumerable: false,
    writable: false,
    value: null
  },
      define;

  define = function (name, options) {
    var value,
        dgs,
        cacheName,
        desc,
        writable = false,
        resolvable,
        flat;
    options = Object(ensureValue(options));
    cacheName = options.cacheName;
    flat = options.flat;
    if (!isValue(cacheName)) cacheName = name;
    delete options.cacheName;
    value = options.value;
    resolvable = isPlainFunction(value);
    delete options.value;
    dgs = {
      configurable: Boolean(options.configurable),
      enumerable: Boolean(options.enumerable)
    };

    if (name !== cacheName) {
      dgs.get = function () {
        if (hasOwnProperty.call(this, cacheName)) return this[cacheName];
        cacheDesc.value = resolvable ? call.call(value, this, options) : value;
        cacheDesc.writable = writable;
        defineProperty(this, cacheName, cacheDesc);
        cacheDesc.value = null;
        if (desc) defineProperty(this, name, desc);
        return this[cacheName];
      };
    } else if (!flat) {
      dgs.get = function self() {
        var ownDesc;

        if (hasOwnProperty.call(this, name)) {
          ownDesc = getOwnPropertyDescriptor(this, name); // It happens in Safari, that getter is still called after property
          // was defined with a value, following workarounds that
          // While in IE11 it may happen that here ownDesc is undefined (go figure)

          if (ownDesc) {
            if (ownDesc.hasOwnProperty("value")) return ownDesc.value;

            if (typeof ownDesc.get === "function" && ownDesc.get !== self) {
              return ownDesc.get.call(this);
            }

            return value;
          }
        }

        desc.value = resolvable ? call.call(value, this, options) : value;
        defineProperty(this, name, desc);
        desc.value = null;
        return this[name];
      };
    } else {
      dgs.get = function self() {
        var base = this,
            ownDesc;

        if (hasOwnProperty.call(this, name)) {
          // It happens in Safari, that getter is still called after property
          // was defined with a value, following workarounds that
          ownDesc = getOwnPropertyDescriptor(this, name);
          if (ownDesc.hasOwnProperty("value")) return ownDesc.value;

          if (typeof ownDesc.get === "function" && ownDesc.get !== self) {
            return ownDesc.get.call(this);
          }
        }

        while (!hasOwnProperty.call(base, name)) base = getPrototypeOf(base);

        desc.value = resolvable ? call.call(value, base, options) : value;
        defineProperty(base, name, desc);
        desc.value = null;
        return base[name];
      };
    }

    dgs.set = function (value) {
      if (hasOwnProperty.call(this, name)) {
        throw new TypeError("Cannot assign to lazy defined '" + name + "' property of " + this);
      }

      dgs.get.call(this);
      this[cacheName] = value;
    };

    if (options.desc) {
      desc = {
        configurable: contains.call(options.desc, "c"),
        enumerable: contains.call(options.desc, "e")
      };

      if (cacheName === name) {
        desc.writable = contains.call(options.desc, "w");
        desc.value = null;
      } else {
        writable = contains.call(options.desc, "w");
        desc.get = dgs.get;
        desc.set = dgs.set;
      }

      delete options.desc;
    } else if (cacheName === name) {
      desc = {
        configurable: Boolean(options.configurable),
        enumerable: Boolean(options.enumerable),
        writable: Boolean(options.writable),
        value: null
      };
    }

    delete options.configurable;
    delete options.enumerable;
    delete options.writable;
    return dgs;
  };

  exports = function (props) {
    return map(props, function (desc, name) {
      return define(name, desc);
    });
  };

  return exports;
}