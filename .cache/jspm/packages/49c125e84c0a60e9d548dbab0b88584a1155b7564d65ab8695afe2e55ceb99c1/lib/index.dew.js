import { dew as _colorsDewDew } from "./colors.dew.js";
import { dew as _extendStringPrototypeDewDew } from "./extendStringPrototype.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var colors = _colorsDewDew();

  exports = colors; // Remark: By default, colors will add style properties to String.prototype
  //
  // If you don't wish to extend String.prototype you can do this instead and native String will not be touched
  //
  //   var colors = require('colors/safe);
  //   colors.red("foo")
  //
  //

  var extendStringPrototype = _extendStringPrototypeDewDew()();

  return exports;
}