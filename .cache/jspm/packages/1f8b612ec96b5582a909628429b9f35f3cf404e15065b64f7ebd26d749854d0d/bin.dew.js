import { dew as _indexDewDew } from "./index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  process.exit(_indexDewDew() ? 0 : 1);
  return exports;
}