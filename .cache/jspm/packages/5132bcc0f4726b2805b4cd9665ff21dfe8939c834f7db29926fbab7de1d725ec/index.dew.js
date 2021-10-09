import { dew as _isDewDew } from "type/value/is.dew.js";
import { dew as _isDew2Dew } from "type/plain-function/is.dew.js";
import { dew as _assignDewDew } from "es5-ext/object/assign.dew.js";
import { dew as _normalizeOptionsDewDew } from "es5-ext/object/normalize-options.dew.js";
import { dew as _containsDewDew } from "es5-ext/string/#/contains.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isValue = _isDewDew(),
      isPlainFunction = _isDew2Dew(),
      assign = _assignDewDew(),
      normalizeOpts = _normalizeOptionsDewDew(),
      contains = _containsDewDew();

  var d = exports = function (dscr, value
  /*, options*/
  ) {
    var c, e, w, options, desc;

    if (arguments.length < 2 || typeof dscr !== "string") {
      options = value;
      value = dscr;
      dscr = null;
    } else {
      options = arguments[2];
    }

    if (isValue(dscr)) {
      c = contains.call(dscr, "c");
      e = contains.call(dscr, "e");
      w = contains.call(dscr, "w");
    } else {
      c = w = true;
      e = false;
    }

    desc = {
      value: value,
      configurable: c,
      enumerable: e,
      writable: w
    };
    return !options ? desc : assign(normalizeOpts(options), desc);
  };

  d.gs = function (dscr, get, set
  /*, options*/
  ) {
    var c, e, options, desc;

    if (typeof dscr !== "string") {
      options = set;
      set = get;
      get = dscr;
      dscr = null;
    } else {
      options = arguments[3];
    }

    if (!isValue(get)) {
      get = undefined;
    } else if (!isPlainFunction(get)) {
      options = get;
      get = set = undefined;
    } else if (!isValue(set)) {
      set = undefined;
    } else if (!isPlainFunction(set)) {
      options = set;
      set = undefined;
    }

    if (isValue(dscr)) {
      c = contains.call(dscr, "c");
      e = contains.call(dscr, "e");
    } else {
      c = true;
      e = false;
    }

    desc = {
      get: get,
      set: set,
      configurable: c,
      enumerable: e
    };
    return !options ? desc : assign(normalizeOpts(options), desc);
  };

  return exports;
}