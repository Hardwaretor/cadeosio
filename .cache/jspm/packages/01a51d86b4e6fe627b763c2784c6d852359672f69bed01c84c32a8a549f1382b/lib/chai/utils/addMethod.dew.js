import { dew as _addLengthGuardDewDew } from "./addLengthGuard.dew.js";
import { dew as _chaiDewDew } from "../../chai.dew.js";
import { dew as _flagDewDew } from "./flag.dew.js";
import { dew as _proxifyDewDew } from "./proxify.dew.js";
import { dew as _transferFlagsDewDew } from "./transferFlags.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - addMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var addLengthGuard = _addLengthGuardDewDew();

  var chai = _chaiDewDew();

  var flag = _flagDewDew();

  var proxify = _proxifyDewDew();

  var transferFlags = _transferFlagsDewDew();
  /**
   * ### .addMethod(ctx, name, method)
   *
   * Adds a method to the prototype of an object.
   *
   *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
   *       var obj = utils.flag(this, 'object');
   *       new chai.Assertion(obj).to.be.equal(str);
   *     });
   *
   * Can also be accessed directly from `chai.Assertion`.
   *
   *     chai.Assertion.addMethod('foo', fn);
   *
   * Then can be used as any other assertion.
   *
   *     expect(fooStr).to.be.foo('bar');
   *
   * @param {Object} ctx object to which the method is added
   * @param {String} name of method to add
   * @param {Function} method function to be used for name
   * @namespace Utils
   * @name addMethod
   * @api public
   */


  exports = function addMethod(ctx, name, method) {
    var methodWrapper = function () {
      // Setting the `ssfi` flag to `methodWrapper` causes this function to be the
      // starting point for removing implementation frames from the stack trace of
      // a failed assertion.
      //
      // However, we only want to use this function as the starting point if the
      // `lockSsfi` flag isn't set.
      //
      // If the `lockSsfi` flag is set, then either this assertion has been
      // overwritten by another assertion, or this assertion is being invoked from
      // inside of another assertion. In the first case, the `ssfi` flag has
      // already been set by the overwriting assertion. In the second case, the
      // `ssfi` flag has already been set by the outer assertion.
      if (!flag(this || _global, 'lockSsfi')) {
        flag(this || _global, 'ssfi', methodWrapper);
      }

      var result = method.apply(this || _global, arguments);
      if (result !== undefined) return result;
      var newAssertion = new chai.Assertion();
      transferFlags(this || _global, newAssertion);
      return newAssertion;
    };

    addLengthGuard(methodWrapper, name, false);
    ctx[name] = proxify(methodWrapper, name);
  };

  return exports;
}