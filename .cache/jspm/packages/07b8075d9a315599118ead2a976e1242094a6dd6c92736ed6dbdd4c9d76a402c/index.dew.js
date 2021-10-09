import { dew as _indexDewDew } from "is-utf8/index.dew.js";
import { dew as _indexDew2Dew } from "is-buffer/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isUTF8 = _indexDewDew();

  var isBuffer = _indexDew2Dew();

  function matchBOM(buf) {
    return buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF;
  }

  function maybeUTF8(buf) {
    // Only "maybe" because we aren't sniffing the whole buffer
    return isUTF8(buf.slice(3, 7));
  }

  exports = function (buf) {
    if (isBuffer(buf) && matchBOM(buf) && maybeUTF8(buf)) {
      return buf.slice(3);
    }

    return buf;
  };

  return exports;
}