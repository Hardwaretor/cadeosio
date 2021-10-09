import { dew as _shimDewDew } from "./shim.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  _shimDewDew()();

  return exports;
}