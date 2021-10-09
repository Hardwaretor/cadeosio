import { dew as _indexDewDew } from "object-keys/index.dew.js";
import { dew as _shamsDewDew } from "has-symbols/shams.dew.js";
import { dew as _callBoundDewDew } from "es-abstract/helpers/callBound.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  // modified from https://github.com/es-shims/es6-shim
  var keys = _indexDewDew();

  var canBeObject = function (obj) {
    return typeof obj !== 'undefined' && obj !== null;
  };

  var hasSymbols = _shamsDewDew()();

  var callBound = _callBoundDewDew();

  var toObject = Object;
  var $push = callBound('Array.prototype.push');
  var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
  var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null; // eslint-disable-next-line no-unused-vars

  exports = function assign(target, source1) {
    if (!canBeObject(target)) {
      throw new TypeError('target must be an object');
    }

    var objTarget = toObject(target);
    var s, source, i, props, syms, value, key;

    for (s = 1; s < arguments.length; ++s) {
      source = toObject(arguments[s]);
      props = keys(source);
      var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);

      if (getSymbols) {
        syms = getSymbols(source);

        for (i = 0; i < syms.length; ++i) {
          key = syms[i];

          if ($propIsEnumerable(source, key)) {
            $push(props, key);
          }
        }
      }

      for (i = 0; i < props.length; ++i) {
        key = props[i];
        value = source[key];

        if ($propIsEnumerable(source, key)) {
          objTarget[key] = value;
        }
      }
    }

    return objTarget;
  };

  return exports;
}