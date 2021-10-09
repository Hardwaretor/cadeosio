import { dew as _cliDewDew } from "../lib/cli.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  _cliDewDew();

  return exports;
}