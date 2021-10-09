import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  function allocUnsafe(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number');
    }

    if (size < 0) {
      throw new RangeError('"size" argument must not be negative');
    }

    if (Buffer.allocUnsafe) {
      return Buffer.allocUnsafe(size);
    } else {
      return new Buffer(size);
    }
  }

  exports = allocUnsafe;
  return exports;
}