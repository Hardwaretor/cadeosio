import { dew as _indexDewDew } from "./lib/src/index.dew.js";
import { dew as _indexDew2Dew } from "./lib/dest/index.dew.js";
import { dew as _indexDew3Dew } from "./lib/symlink/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    src: _indexDewDew(),
    dest: _indexDew2Dew(),
    symlink: _indexDew3Dew()
  };
  return exports;
}