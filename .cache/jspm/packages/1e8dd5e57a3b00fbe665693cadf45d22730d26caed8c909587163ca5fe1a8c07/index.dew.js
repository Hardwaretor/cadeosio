import { dew as _extractDewDew } from "./extract.dew.js";
import { dew as _packDewDew } from "./pack.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.extract = _extractDewDew();
  exports.pack = _packDewDew();
  return exports;
}