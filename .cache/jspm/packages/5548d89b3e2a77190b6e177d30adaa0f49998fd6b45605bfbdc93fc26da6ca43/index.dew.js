import { dew as _indexDewDew } from "strip-ansi/index.dew.js";
import { dew as _indexDew2Dew } from "is-fullwidth-code-point/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const stripAnsi = _indexDewDew();

  const isFullwidthCodePoint = _indexDew2Dew();

  exports = str => {
    if (typeof str !== 'string' || str.length === 0) {
      return 0;
    }

    str = stripAnsi(str);
    let width = 0;

    for (let i = 0; i < str.length; i++) {
      const code = str.codePointAt(i); // Ignore control characters

      if (code <= 0x1F || code >= 0x7F && code <= 0x9F) {
        continue;
      } // Ignore combining characters


      if (code >= 0x300 && code <= 0x36F) {
        continue;
      } // Surrogates


      if (code > 0xFFFF) {
        i++;
      }

      width += isFullwidthCodePoint(code) ? 2 : 1;
    }

    return width;
  };

  return exports;
}