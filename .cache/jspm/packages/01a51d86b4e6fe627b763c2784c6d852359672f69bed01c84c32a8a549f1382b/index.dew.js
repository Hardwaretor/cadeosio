import { dew as _chaiDewDew } from "./lib/chai.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _chaiDewDew();
  return exports;
}