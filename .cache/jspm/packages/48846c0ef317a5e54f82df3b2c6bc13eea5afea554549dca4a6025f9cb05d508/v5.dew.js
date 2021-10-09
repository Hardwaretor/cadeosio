import { dew as _v35DewDew } from "./lib/v35.dew.js";
import { dew as _sha1DewDew } from "uuid/lib/sha1.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var v35 = _v35DewDew();

  var sha1 = _sha1DewDew();

  exports = v35('v5', 0x50, sha1);
  return exports;
}