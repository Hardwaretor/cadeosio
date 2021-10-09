import { dew as _mutableDewDew } from "./mutable.dew.js";
import { dew as _immutableDewDew } from "./immutable.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _mutableDewDew();
  exports.immutable = _immutableDewDew();
  return exports;
}