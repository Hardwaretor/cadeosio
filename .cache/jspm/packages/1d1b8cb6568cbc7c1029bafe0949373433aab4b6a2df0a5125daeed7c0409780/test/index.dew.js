import { dew as _parseDewDew } from "./parse.dew.js";
import { dew as _stringifyDewDew } from "./stringify.dew.js";
import { dew as _utilsDewDew } from "./utils.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  _parseDewDew();

  _stringifyDewDew();

  _utilsDewDew();

  return exports;
}