import { dew as _indexDewDew } from "define-properties/index.dew.js";
import { dew as _callBindDewDew } from "es-abstract/helpers/callBind.dew.js";
import { dew as _implementationDewDew } from "./implementation.dew.js";
import { dew as _polyfillDewDew } from "./polyfill.dew.js";
import { dew as _shimDewDew } from "./shim.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var defineProperties = _indexDewDew();

  var callBind = _callBindDewDew();

  var implementation = _implementationDewDew();

  var getPolyfill = _polyfillDewDew();

  var shim = _shimDewDew();

  var polyfill = callBind.apply(getPolyfill()); // eslint-disable-next-line no-unused-vars

  var bound = function assign(target, source1) {
    return polyfill(Object, arguments);
  };

  defineProperties(bound, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
  });
  exports = bound;
  return exports;
}