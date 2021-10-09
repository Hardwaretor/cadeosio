import _util from "util";
import { dew as _indexDewDew } from "object-visit/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var util = _util;

  var visit = _indexDewDew();
  /**
   * Map `visit` over an array of objects.
   *
   * @param  {Object} `collection` The context in which to invoke `method`
   * @param  {String} `method` Name of the method to call on `collection`
   * @param  {Object} `arr` Array of objects.
   */


  exports = function mapVisit(collection, method, val) {
    if (isObject(val)) {
      return visit.apply(null, arguments);
    }

    if (!Array.isArray(val)) {
      throw new TypeError('expected an array: ' + util.inspect(val));
    }

    var args = [].slice.call(arguments, 3);

    for (var i = 0; i < val.length; i++) {
      var ele = val[i];

      if (isObject(ele)) {
        visit.apply(null, [collection, method, ele].concat(args));
      } else {
        collection[method].apply(collection, [ele].concat(args));
      }
    }
  };

  function isObject(val) {
    return val && (typeof val === 'function' || !Array.isArray(val) && typeof val === 'object');
  }

  return exports;
}