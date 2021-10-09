import { dew as _indexDewDew } from "ci-info/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _indexDewDew().isCI;
  return exports;
}