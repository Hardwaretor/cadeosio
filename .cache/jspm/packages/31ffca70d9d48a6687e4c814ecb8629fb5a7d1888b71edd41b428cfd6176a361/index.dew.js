import { dew as _indexDewDew } from "error-ex/index.dew.js";
import { dew as _indexDew2Dew } from "json-parse-better-errors/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const errorEx = _indexDewDew();

  const fallback = _indexDew2Dew();

  const JSONError = errorEx('JSONError', {
    fileName: errorEx.append('in %s')
  });

  exports = (input, reviver, filename) => {
    if (typeof reviver === 'string') {
      filename = reviver;
      reviver = null;
    }

    try {
      try {
        return JSON.parse(input, reviver);
      } catch (err) {
        fallback(input, reviver);
        throw err;
      }
    } catch (err) {
      err.message = err.message.replace(/\n/g, '');
      const jsonErr = new JSONError(err);

      if (filename) {
        jsonErr.fileName = filename;
      }

      throw jsonErr;
    }
  };

  return exports;
}