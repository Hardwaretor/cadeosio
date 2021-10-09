import { dew as _indexDewDew } from "fecha/index.dew.js";
import { dew as _formatDewDew } from "./format.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const fecha = _indexDewDew();

  const format = _formatDewDew();
  /*
   * function timestamp (info)
   * Returns a new instance of the timestamp Format which adds a timestamp
   * to the info. It was previously available in winston < 3.0.0 as:
   *
   * - { timestamp: true }             // `new Date.toISOString()`
   * - { timestamp: function:String }  // Value returned by `timestamp()`
   */


  exports = format((info, opts) => {
    if (opts.format) {
      info.timestamp = typeof opts.format === 'function' ? opts.format() : fecha.format(new Date(), opts.format);
    }

    if (!info.timestamp) {
      info.timestamp = new Date().toISOString();
    }

    if (opts.alias) {
      info[opts.alias] = info.timestamp;
    }

    return info;
  });
  return exports;
}