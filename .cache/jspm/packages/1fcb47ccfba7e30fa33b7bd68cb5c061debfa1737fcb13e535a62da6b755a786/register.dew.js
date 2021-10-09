import { dew as _indexDewDew } from "./index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  _indexDewDew()();

  return exports;
}