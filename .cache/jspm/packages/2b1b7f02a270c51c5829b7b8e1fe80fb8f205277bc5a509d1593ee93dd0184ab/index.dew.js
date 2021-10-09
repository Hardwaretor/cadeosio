import { dew as _globalsJsonDewDew } from "./globals.json.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _globalsJsonDewDew();
  return exports;
}