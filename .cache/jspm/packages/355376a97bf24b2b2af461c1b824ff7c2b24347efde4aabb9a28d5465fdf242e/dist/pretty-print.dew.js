import _util from "util";
import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _indexDewDew } from "triple-beam/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var inspect = _util.inspect;

  var format = _formatDewDew();

  var _require = _indexDewDew(),
      MESSAGE = _require.MESSAGE;
  /*
   * function prettyPrint (info)
   * Returns a new instance of the prettyPrint Format that "prettyPrint"
   * serializes `info` objects. This was previously exposed as
   * { prettyPrint: true } to transports in `winston < 3.0.0`.
   */


  exports = format(function (info, opts) {
    info[MESSAGE] = inspect(info, false, opts.depth || null, opts.colorize);
    return info;
  });
  return exports;
}