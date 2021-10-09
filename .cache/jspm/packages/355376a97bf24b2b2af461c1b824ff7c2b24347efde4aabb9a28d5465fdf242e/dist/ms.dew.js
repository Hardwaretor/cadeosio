import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _indexDewDew } from "ms/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var format = _formatDewDew();

  var ms = _indexDewDew();
  /*
   * function ms (info)
   * Returns an `info` with a `ms` property. The `ms` property holds the Value
   * of the time difference between two calls in milliseconds.
   */


  exports = format(function (info) {
    var curr = +new Date();
    undefined.diff = curr - (undefined.prevTime || curr);
    undefined.prevTime = curr;
    info.ms = '+' + ms(undefined.diff);
    return info;
  });
  return exports;
}