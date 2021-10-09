import _crypto from "crypto";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  // Unique ID creation requires a high quality random # generator.  In node.js
  // this is pretty straight-forward - we use the crypto API.
  var crypto = _crypto;

  exports = function nodeRNG() {
    return crypto.randomBytes(16);
  };

  return exports;
}