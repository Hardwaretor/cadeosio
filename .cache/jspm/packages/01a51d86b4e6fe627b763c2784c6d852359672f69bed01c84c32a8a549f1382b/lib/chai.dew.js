import { dew as _indexDewDew } from "assertion-error/index.dew.js";
import { dew as _indexDew2Dew } from "./chai/utils/index.dew.js";
import { dew as _configDewDew } from "./chai/config.dew.js";
import { dew as _assertionDewDew } from "./chai/assertion.dew.js";
import { dew as _assertionsDewDew } from "./chai/core/assertions.dew.js";
import { dew as _expectDewDew } from "./chai/interface/expect.dew.js";
import { dew as _shouldDewDew } from "./chai/interface/should.dew.js";
import { dew as _assertDewDew } from "./chai/interface/assert.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var used = [];
  /*!
   * Chai version
   */

  exports.version = '4.2.0';
  /*!
   * Assertion Error
   */

  exports.AssertionError = _indexDewDew();
  /*!
   * Utils for plugins (not exported)
   */

  var util = _indexDew2Dew();
  /**
   * # .use(function)
   *
   * Provides a way to extend the internals of Chai.
   *
   * @param {Function}
   * @returns {this} for chaining
   * @api public
   */


  exports.use = function (fn) {
    if (!~used.indexOf(fn)) {
      fn(exports, util);
      used.push(fn);
    }

    return exports;
  };
  /*!
   * Utility Functions
   */


  exports.util = util;
  /*!
   * Configuration
   */

  var config = _configDewDew();

  exports.config = config;
  /*!
   * Primary `Assertion` prototype
   */

  var assertion = _assertionDewDew();

  exports.use(assertion);
  /*!
   * Core Assertions
   */

  var core = _assertionsDewDew();

  exports.use(core);
  /*!
   * Expect interface
   */

  var expect = _expectDewDew();

  exports.use(expect);
  /*!
   * Should interface
   */

  var should = _shouldDewDew();

  exports.use(should);
  /*!
   * Assert interface
   */

  var assert = _assertDewDew();

  exports.use(assert);
  return exports;
}