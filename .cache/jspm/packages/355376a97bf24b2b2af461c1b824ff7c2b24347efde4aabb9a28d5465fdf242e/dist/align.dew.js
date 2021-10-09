import { dew as _formatDewDew } from "./format.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var format = _formatDewDew();
  /*
   * function align (info)
   * Returns a new instance of the align Format which adds a `\t`
   * delimiter before the message to properly align it in the same place.
   * It was previously { align: true } in winston < 3.0.0
   */


  exports = format(function (info) {
    info.message = '\t' + info.message;
    return info;
  });
  return exports;
}