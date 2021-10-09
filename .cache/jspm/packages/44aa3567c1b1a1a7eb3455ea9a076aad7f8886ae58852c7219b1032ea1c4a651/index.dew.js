var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Check if a Buffer/Uint8Array is a GZIP file
   *
   * @param {Buffer} buf
   * @api public
   */
  exports = function (buf) {
    if (!buf || buf.length < 3) {
      return false;
    }

    return buf[0] === 31 && buf[1] === 139 && buf[2] === 8;
  };

  return exports;
}