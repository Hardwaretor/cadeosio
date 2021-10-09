import _crypto from "crypto";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  var crypto = _crypto;

  function sha1(bytes) {
    if (typeof Buffer.from === 'function') {
      // Modern Buffer API
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
      }
    } else {
      // Pre-v4 Buffer API
      if (Array.isArray(bytes)) {
        bytes = new Buffer(bytes);
      } else if (typeof bytes === 'string') {
        bytes = new Buffer(bytes, 'utf8');
      }
    }

    return crypto.createHash('sha1').update(bytes).digest();
  }

  exports = sha1;
  return exports;
}