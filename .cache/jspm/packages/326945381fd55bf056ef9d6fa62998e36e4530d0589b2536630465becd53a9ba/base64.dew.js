import { dew as _indexDewDew } from "safe-buffer/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const safeBuffer = _indexDewDew().Buffer;

  function decodeBase64(base64) {
    return safeBuffer.from(base64, 'base64').toString('utf8');
  }

  function encodeBase64(string) {
    return safeBuffer.from(string, 'utf8').toString('base64');
  }

  exports = {
    decodeBase64: decodeBase64,
    encodeBase64: encodeBase64
  };
  return exports;
}