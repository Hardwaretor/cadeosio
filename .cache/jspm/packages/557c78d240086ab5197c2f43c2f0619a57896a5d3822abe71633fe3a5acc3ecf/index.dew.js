import { dew as _indexDewDew } from "map-obj/index.dew.js";
import { dew as _indexDew2Dew } from "camelcase/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var mapObj = _indexDewDew();

  var camelCase = _indexDew2Dew();

  exports = function (input, options) {
    options = options || {};
    var exclude = options.exclude || [];
    return mapObj(input, function (key, val) {
      key = exclude.indexOf(key) === -1 ? camelCase(key) : key;
      return [key, val];
    });
  };

  return exports;
}