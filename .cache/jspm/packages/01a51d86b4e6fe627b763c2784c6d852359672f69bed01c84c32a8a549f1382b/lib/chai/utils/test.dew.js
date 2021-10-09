import { dew as _flagDewDew } from "./flag.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - test utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  /*!
   * Module dependencies
   */
  var flag = _flagDewDew();
  /**
   * ### .test(object, expression)
   *
   * Test and object for expression.
   *
   * @param {Object} object (constructed Assertion)
   * @param {Arguments} chai.Assertion.prototype.assert arguments
   * @namespace Utils
   * @name test
   */


  exports = function test(obj, args) {
    var negate = flag(obj, 'negate'),
        expr = args[0];
    return negate ? !expr : expr;
  };

  return exports;
}