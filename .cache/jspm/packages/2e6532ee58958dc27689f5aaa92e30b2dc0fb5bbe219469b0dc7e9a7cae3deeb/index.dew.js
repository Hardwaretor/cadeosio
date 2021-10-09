import { dew as _indexDewDew } from "through2-filter/index.dew.js";
import { dew as _indexDew2Dew } from "json-stable-stringify-without-jsonify/index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var filter = _indexDewDew().obj;

  var stringify = _indexDew2Dew();

  var ES6Set;

  if (typeof _global.Set === 'function') {
    ES6Set = _global.Set;
  } else {
    ES6Set = function () {
      this.keys = [];
      this.has = function (val) {
        return this.keys.indexOf(val) !== -1;
      }, this.add = function (val) {
        this.keys.push(val);
      };
    };
  }

  function prop(propName) {
    return function (data) {
      return data[propName];
    };
  }

  exports = unique;

  function unique(propName, keyStore) {
    keyStore = keyStore || new ES6Set();
    var keyfn = stringify;

    if (typeof propName === 'string') {
      keyfn = prop(propName);
    } else if (typeof propName === 'function') {
      keyfn = propName;
    }

    return filter(function (data) {
      var key = keyfn(data);

      if (keyStore.has(key)) {
        return false;
      }

      keyStore.add(key);
      return true;
    });
  }

  return exports;
}