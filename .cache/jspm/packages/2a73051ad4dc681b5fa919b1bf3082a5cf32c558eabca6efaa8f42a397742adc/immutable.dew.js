import { dew as _indexDewDew } from "array-slice/index.dew.js";
import { dew as _mutableDewDew } from "./mutable.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var slice = _indexDewDew();

  var defaults = _mutableDewDew();
  /**
   * Extends an empty object with properties of one or
   * more additional `objects`
   *
   * @name .defaults.immutable
   * @param  {Object} `objects`
   * @return {Object}
   * @api public
   */


  exports = function immutableDefaults() {
    var args = slice(arguments);
    return defaults.apply(null, [{}].concat(args));
  };

  return exports;
}