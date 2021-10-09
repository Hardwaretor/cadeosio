import { dew as _safeDewDew } from "colors/safe.dew.js";
import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _indexDewDew } from "triple-beam/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const colors = _safeDewDew();

  const format = _formatDewDew();

  const {
    MESSAGE
  } = _indexDewDew();
  /*
   * function uncolorize (info)
   * Returns a new instance of the uncolorize Format that strips colors
   * from `info` objects. This was previously exposed as { stripColors: true }
   * to transports in `winston < 3.0.0`.
   */


  exports = format((info, opts) => {
    if (opts.level !== false) {
      info.level = colors.strip(info.level);
    }

    if (opts.message !== false) {
      info.message = colors.strip(info.message);
    }

    if (opts.raw !== false && info[MESSAGE]) {
      info[MESSAGE] = colors.strip(info[MESSAGE]);
    }

    return info;
  });
  return exports;
}