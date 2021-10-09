import { dew as _v35DewDew } from "./lib/v35.dew.js";
import { dew as _md5DewDew } from "uuid/lib/md5.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var v35 = _v35DewDew();

  var md5 = _md5DewDew();

  exports = v35('v3', 0x30, md5);
  return exports;
}