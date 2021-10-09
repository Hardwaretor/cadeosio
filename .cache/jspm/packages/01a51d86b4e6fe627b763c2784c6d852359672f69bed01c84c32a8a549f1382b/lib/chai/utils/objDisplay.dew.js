import { dew as _inspectDewDew } from "./inspect.dew.js";
import { dew as _configDewDew } from "../config.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  /*!
   * Module dependencies
   */
  var inspect = _inspectDewDew();

  var config = _configDewDew();
  /**
   * ### .objDisplay(object)
   *
   * Determines if an object or an array matches
   * criteria to be inspected in-line for error
   * messages or should be truncated.
   *
   * @param {Mixed} javascript object to inspect
   * @name objDisplay
   * @namespace Utils
   * @api public
   */


  exports = function objDisplay(obj) {
    var str = inspect(obj),
        type = Object.prototype.toString.call(obj);

    if (config.truncateThreshold && str.length >= config.truncateThreshold) {
      if (type === '[object Function]') {
        return !obj.name || obj.name === '' ? '[Function]' : '[Function: ' + obj.name + ']';
      } else if (type === '[object Array]') {
        return '[ Array(' + obj.length + ') ]';
      } else if (type === '[object Object]') {
        var keys = Object.keys(obj),
            kstr = keys.length > 2 ? keys.splice(0, 2).join(', ') + ', ...' : keys.join(', ');
        return '{ Object (' + kstr + ') }';
      } else {
        return str;
      }
    } else {
      return str;
    }
  };

  return exports;
}