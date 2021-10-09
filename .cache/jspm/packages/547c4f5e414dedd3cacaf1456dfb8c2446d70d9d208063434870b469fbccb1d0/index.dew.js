import { dew as _parallelDewDew } from "./parallel.dew.js";
import { dew as _serialDewDew } from "./serial.dew.js";
import { dew as _serialOrderedDewDew } from "./serialOrdered.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    parallel: _parallelDewDew(),
    serial: _serialDewDew(),
    serialOrdered: _serialOrderedDewDew()
  };
  return exports;
}