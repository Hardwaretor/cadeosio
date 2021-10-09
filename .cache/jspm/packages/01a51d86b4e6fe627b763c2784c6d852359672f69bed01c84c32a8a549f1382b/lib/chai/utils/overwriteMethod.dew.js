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
   * Chai - overwriteMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var addLengthGuard = _addLengthGuardDewDew();

  var chai = _chaiDewDew();

  var flag = _flagDewDew();

  var proxify = _proxifyDewDew();

  var transferFlags = _transferFlagsDewDew();
  /**
   * ### .overwriteMethod(ctx, name, fn)
   *
   * Overwrites an already existing method and provides
   * access to previous function. Must return function
   * to be used for name.
   *
   *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
   *       return function (str) {
   *         var obj = utils.flag(this, 'object');
   *         if (obj instanceof Foo) {
   *           new chai.Assertion(obj.value).to.equal(str);
   *         } else {
   *           _super.apply(this, arguments);
   *         }
   *       }
   *     });
   *
   * Can also be accessed directly from `chai.Assertion`.
   *
   *     chai.Assertion.overwriteMethod('foo', fn);
   *
   * Then can be used as any other assertion.
   *
   *     expect(myFoo).to.equal('bar');
   *
   * @param {Object} ctx object whose method is to be overwritten
   * @param {String} name of method to overwrite
   * @param {Function} method function that returns a function to be used for name
   * @namespace Utils
   * @name overwriteMethod
   * @api public
   */


  exports = function overwriteMethod(ctx, name, method) {
    var _method = ctx[name],
        _super = function () {
      throw new Error(name + ' is not a function');
    };

    if (_method && 'function' === typeof _method) _super = _method;

    var overwritingMethodWrapper = function () {
      // Setting the `ssfi` flag to `overwritingMethodWrapper` causes this
      // function to be the starting point for removing implementation frames from
      // the stack trace of a failed assertion.
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
        flag(this || _global, 'ssfi', overwritingMethodWrapper);
      } // Setting the `lockSsfi` flag to `true` prevents the overwritten assertion
      // from changing the `ssfi` flag. By this point, the `ssfi` flag is already
      // set to the correct starting point for this assertion.


      var origLockSsfi = flag(this || _global, 'lockSsfi');
      flag(this || _global, 'lockSsfi', true);
      var result = method(_super).apply(this || _global, arguments);
      flag(this || _global, 'lockSsfi', origLockSsfi);

      if (result !== undefined) {
        return result;
      }

      var newAssertion = new chai.Assertion();
      transferFlags(this || _global, newAssertion);
      return newAssertion;
    };

    addLengthGuard(overwritingMethodWrapper, name, false);
    ctx[name] = proxify(overwritingMethodWrapper, name);
  };

  return exports;
}