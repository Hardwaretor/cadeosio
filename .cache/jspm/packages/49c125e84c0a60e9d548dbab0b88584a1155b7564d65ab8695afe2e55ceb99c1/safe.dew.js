import { dew as _colorsDewDew } from "./lib/colors.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  //
  // Remark: Requiring this file will use the "safe" colors API which will not touch String.prototype
  //
  //   var colors = require('colors/safe);
  //   colors.red("foo")
  //
  //
  var colors = _colorsDewDew();

  exports = colors;
  return exports;
}