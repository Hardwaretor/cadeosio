import { dew as _indexDewDew } from "split-string/index.dew.js";
import { dew as _indexDew2Dew } from "extend-shallow/index.dew.js";
import { dew as _indexDew3Dew } from "is-plain-object/index.dew.js";
import { dew as _indexDew4Dew } from "is-extendable/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var split = _indexDewDew();

  var extend = _indexDew2Dew();

  var isPlainObject = _indexDew3Dew();

  var isObject = _indexDew4Dew();

  exports = function (obj, prop, val) {
    if (!isObject(obj)) {
      return obj;
    }

    if (Array.isArray(prop)) {
      prop = [].concat.apply([], prop).join('.');
    }

    if (typeof prop !== 'string') {
      return obj;
    }

    var keys = split(prop, {
      sep: '.',
      brackets: true
    }).filter(isValidKey);
    var len = keys.length;
    var idx = -1;
    var current = obj;

    while (++idx < len) {
      var key = keys[idx];

      if (idx !== len - 1) {
        if (!isObject(current[key])) {
          current[key] = {};
        }

        current = current[key];
        continue;
      }

      if (isPlainObject(current[key]) && isPlainObject(val)) {
        current[key] = extend({}, current[key], val);
      } else {
        current[key] = val;
      }
    }

    return obj;
  };

  function isValidKey(key) {
    return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
  }

  return exports;
}