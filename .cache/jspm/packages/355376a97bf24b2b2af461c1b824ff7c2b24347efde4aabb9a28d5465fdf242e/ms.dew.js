import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _indexDewDew } from "ms/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const format = _formatDewDew();

  const ms = _indexDewDew();
  /*
   * function ms (info)
   * Returns an `info` with a `ms` property. The `ms` property holds the Value
   * of the time difference between two calls in milliseconds.
   */


  exports = format(info => {
    const curr = +new Date();
    this.diff = curr - (this.prevTime || curr);
    this.prevTime = curr;
    info.ms = `+${ms(this.diff)}`;
    return info;
  });
  return exports;
}