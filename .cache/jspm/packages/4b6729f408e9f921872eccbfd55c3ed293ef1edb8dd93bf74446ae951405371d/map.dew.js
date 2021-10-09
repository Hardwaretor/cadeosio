import { dew as _pseudomapDewDew } from "./pseudomap.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  if (process.env.npm_package_name === 'pseudomap' && process.env.npm_lifecycle_script === 'test') process.env.TEST_PSEUDOMAP = 'true';

  if (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {
    exports = Map;
  } else {
    exports = _pseudomapDewDew();
  }

  return exports;
}