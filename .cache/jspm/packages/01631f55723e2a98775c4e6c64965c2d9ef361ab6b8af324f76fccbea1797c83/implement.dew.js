import { dew as _isImplementedDewDew } from "./is-implemented.dew.js";
import { dew as _globalThisDewDew } from "ext/global-this.dew.js";
import { dew as _polyfillDewDew } from "./polyfill.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  if (!_isImplementedDewDew()()) {
    Object.defineProperty(_globalThisDewDew(), "Symbol", {
      value: _polyfillDewDew(),
      configurable: true,
      enumerable: false,
      writable: true
    });
  }

  return exports;
}