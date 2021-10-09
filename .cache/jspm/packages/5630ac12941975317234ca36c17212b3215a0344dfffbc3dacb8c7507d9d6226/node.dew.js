import _crypto from "crypto";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var crypto = _crypto;
  var max = Math.pow(2, 32);
  exports = random;
  exports.cryptographic = true;

  function random() {
    var buf = crypto.randomBytes(4).readUInt32BE(0);
    return buf / max;
  }

  return exports;
}