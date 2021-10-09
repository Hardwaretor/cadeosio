import _fs from "fs";
import _constants from "constants";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _fs.constants || _constants;
  return exports;
}