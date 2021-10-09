import { dew as _indexDewDew } from "invert-kv/index.dew.js";
import { dew as _lcidJsonDewDew } from "./lcid.json.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var invertKv = _indexDewDew();

  var all = _lcidJsonDewDew();

  var inverted = invertKv(all);

  exports.from = function (lcidCode) {
    if (typeof lcidCode !== 'number') {
      throw new TypeError('Expected a number');
    }

    return inverted[lcidCode];
  };

  exports.to = function (localeId) {
    if (typeof localeId !== 'string') {
      throw new TypeError('Expected a string');
    }

    return all[localeId];
  };

  exports.all = all;
  return exports;
}