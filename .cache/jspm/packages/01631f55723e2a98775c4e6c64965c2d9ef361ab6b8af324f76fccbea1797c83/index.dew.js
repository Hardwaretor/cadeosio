import { dew as _isImplementedDewDew } from "./is-implemented.dew.js";
import { dew as _globalThisDewDew } from "ext/global-this.dew.js";
import { dew as _polyfillDewDew } from "./polyfill.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _isImplementedDewDew()() ? _globalThisDewDew().Symbol : _polyfillDewDew();
  return exports;
}