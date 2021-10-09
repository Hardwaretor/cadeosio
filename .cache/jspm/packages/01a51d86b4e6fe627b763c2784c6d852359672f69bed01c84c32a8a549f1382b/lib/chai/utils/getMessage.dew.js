import { dew as _flagDewDew } from "./flag.dew.js";
import { dew as _getActualDewDew } from "./getActual.dew.js";
import { dew as _objDisplayDewDew } from "./objDisplay.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - message composition utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  /*!
   * Module dependencies
   */
  var flag = _flagDewDew(),
      getActual = _getActualDewDew(),
      objDisplay = _objDisplayDewDew();
  /**
   * ### .getMessage(object, message, negateMessage)
   *
   * Construct the error message based on flags
   * and template tags. Template tags will return
   * a stringified inspection of the object referenced.
   *
   * Message template tags:
   * - `#{this}` current asserted object
   * - `#{act}` actual value
   * - `#{exp}` expected value
   *
   * @param {Object} object (constructed Assertion)
   * @param {Arguments} chai.Assertion.prototype.assert arguments
   * @namespace Utils
   * @name getMessage
   * @api public
   */


  exports = function getMessage(obj, args) {
    var negate = flag(obj, 'negate'),
        val = flag(obj, 'object'),
        expected = args[3],
        actual = getActual(obj, args),
        msg = negate ? args[2] : args[1],
        flagMsg = flag(obj, 'message');
    if (typeof msg === "function") msg = msg();
    msg = msg || '';
    msg = msg.replace(/#\{this\}/g, function () {
      return objDisplay(val);
    }).replace(/#\{act\}/g, function () {
      return objDisplay(actual);
    }).replace(/#\{exp\}/g, function () {
      return objDisplay(expected);
    });
    return flagMsg ? flagMsg + ': ' + msg : msg;
  };

  return exports;
}