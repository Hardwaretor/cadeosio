import { dew as _indexDewDew } from "error-ex/index.dew.js";
import { dew as _parseDewDew } from "./vendor/parse.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var errorEx = _indexDewDew();

  var fallback = _parseDewDew();

  var JSONError = errorEx('JSONError', {
    fileName: errorEx.append('in %s')
  });

  exports = function (x, reviver, filename) {
    if (typeof reviver === 'string') {
      filename = reviver;
      reviver = null;
    }

    try {
      try {
        return JSON.parse(x, reviver);
      } catch (err) {
        fallback.parse(x, {
          mode: 'json',
          reviver: reviver
        });
        throw err;
      }
    } catch (err) {
      var jsonErr = new JSONError(err);

      if (filename) {
        jsonErr.fileName = filename;
      }

      throw jsonErr;
    }
  };

  return exports;
}