import _util from "util";
import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _indexDewDew } from "triple-beam/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const inspect = _util.inspect;

  const format = _formatDewDew();

  const {
    MESSAGE
  } = _indexDewDew();
  /*
   * function prettyPrint (info)
   * Returns a new instance of the prettyPrint Format that "prettyPrint"
   * serializes `info` objects. This was previously exposed as
   * { prettyPrint: true } to transports in `winston < 3.0.0`.
   */


  exports = format((info, opts) => {
    info[MESSAGE] = inspect(info, false, opts.depth || null, opts.colorize);
    return info;
  });
  return exports;
}