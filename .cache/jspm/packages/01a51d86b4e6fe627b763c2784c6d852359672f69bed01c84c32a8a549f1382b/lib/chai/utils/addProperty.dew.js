import { dew as _chaiDewDew } from "../../chai.dew.js";
import { dew as _flagDewDew } from "./flag.dew.js";
import { dew as _isProxyEnabledDewDew } from "./isProxyEnabled.dew.js";
import { dew as _transferFlagsDewDew } from "./transferFlags.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * Chai - addProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var chai = _chaiDewDew();

  var flag = _flagDewDew();

  var isProxyEnabled = _isProxyEnabledDewDew();

  var transferFlags = _transferFlagsDewDew();
  /**
   * ### .addProperty(ctx, name, getter)
   *
   * Adds a property to the prototype of an object.
   *
   *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
   *       var obj = utils.flag(this, 'object');
   *       new chai.Assertion(obj).to.be.instanceof(Foo);
   *     });
   *
   * Can also be accessed directly from `chai.Assertion`.
   *
   *     chai.Assertion.addProperty('foo', fn);
   *
   * Then can be used as any other assertion.
   *
   *     expect(myFoo).to.be.foo;
   *
   * @param {Object} ctx object to which the property is added
   * @param {String} name of property to add
   * @param {Function} getter function to be used for name
   * @namespace Utils
   * @name addProperty
   * @api public
   */


  exports = function addProperty(ctx, name, getter) {
    getter = getter === undefined ? function () {} : getter;
    Object.defineProperty(ctx, name, {
      get: function propertyGetter() {
        // Setting the `ssfi` flag to `propertyGetter` causes this function to
        // be the starting point for removing implementation frames from the
        // stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set and proxy protection is disabled.
        //
        // If the `lockSsfi` flag is set, then either this assertion has been
        // overwritten by another assertion, or this assertion is being invoked
        // from inside of another assertion. In the first case, the `ssfi` flag
        // has already been set by the overwriting assertion. In the second
        // case, the `ssfi` flag has already been set by the outer assertion.
        //
        // If proxy protection is enabled, then the `ssfi` flag has already been
        // set by the proxy getter.
        if (!isProxyEnabled() && !flag(this || _global, 'lockSsfi')) {
          flag(this || _global, 'ssfi', propertyGetter);
        }

        var result = getter.call(this || _global);
        if (result !== undefined) return result;
        var newAssertion = new chai.Assertion();
        transferFlags(this || _global, newAssertion);
        return newAssertion;
      },
      configurable: true
    });
  };

  return exports;
}