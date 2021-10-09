import { dew as _indexDewDew } from "array-each/index.dew.js";
import { dew as _indexDew2Dew } from "array-slice/index.dew.js";
import { dew as _indexDew3Dew } from "for-own/index.dew.js";
import { dew as _indexDew4Dew } from "isobject/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var each = _indexDewDew();

  var slice = _indexDew2Dew();

  var forOwn = _indexDew3Dew();

  var isObject = _indexDew4Dew();
  /**
   * Extends the `target` object with properties of one or
   * more additional `objects`
   *
   * @name .defaults
   * @param  {Object} `target` The target object. Pass an empty object to shallow clone.
   * @param  {Object} `objects`
   * @return {Object}
   * @api public
   */


  exports = function defaults(target, objects) {
    if (target == null) {
      return {};
    }

    each(slice(arguments, 1), function (obj) {
      if (isObject(obj)) {
        forOwn(obj, function (val, key) {
          if (target[key] == null) {
            target[key] = val;
          }
        });
      }
    });
    return target;
  };

  return exports;
}