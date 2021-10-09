import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _indexDewDew } from "triple-beam/index.dew.js";
import { dew as _indexDew2Dew } from "fast-safe-stringify/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  var format = _formatDewDew();

  var _require = _indexDewDew(),
      MESSAGE = _require.MESSAGE;

  var jsonStringify = _indexDew2Dew();
  /*
   * function replacer (key, value)
   * Handles proper stringification of Buffer output.
   */


  function replacer(key, value) {
    return value instanceof Buffer ? value.toString('base64') : value;
  }
  /*
   * function json (info)
   * Returns a new instance of the JSON format that turns a log `info`
   * object into pure JSON. This was previously exposed as { json: true }
   * to transports in `winston < 3.0.0`.
   */


  exports = format(function (info, opts) {
    info[MESSAGE] = jsonStringify(info, opts.replacer || replacer, opts.space);
    return info;
  });
  return exports;
}