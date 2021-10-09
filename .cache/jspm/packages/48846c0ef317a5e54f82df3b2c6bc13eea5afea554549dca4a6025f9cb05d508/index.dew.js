import { dew as _v1DewDew } from "./v1.dew.js";
import { dew as _v4DewDew } from "./v4.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var v1 = _v1DewDew();

  var v4 = _v4DewDew();

  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  exports = uuid;
  return exports;
}