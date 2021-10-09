import { dew as _formatDewDew } from "./format.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var format = _formatDewDew();
  /*
   * function label (info)
   * Returns a new instance of the label Format which adds the specified
   * `opts.label` before the message. This was previously exposed as
   * { label: 'my label' } to transports in `winston < 3.0.0`.
   */


  exports = format(function (info, opts) {
    if (opts.message) {
      info.message = '[' + opts.label + '] ' + info.message;
      return info;
    }

    info.label = opts.label;
    return info;
  });
  return exports;
}