import { dew as _indexDewDew } from "strip-ansi/index.dew.js";
import { dew as _indexDew2Dew } from "code-point-at/index.dew.js";
import { dew as _indexDew3Dew } from "is-fullwidth-code-point/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var stripAnsi = _indexDewDew();

  var codePointAt = _indexDew2Dew();

  var isFullwidthCodePoint = _indexDew3Dew(); // https://github.com/nodejs/io.js/blob/cff7300a578be1b10001f2d967aaedc88aee6402/lib/readline.js#L1345


  exports = function (str) {
    if (typeof str !== 'string' || str.length === 0) {
      return 0;
    }

    var width = 0;
    str = stripAnsi(str);

    for (var i = 0; i < str.length; i++) {
      var code = codePointAt(str, i); // ignore control characters

      if (code <= 0x1f || code >= 0x7f && code <= 0x9f) {
        continue;
      } // surrogates


      if (code >= 0x10000) {
        i++;
      }

      if (isFullwidthCodePoint(code)) {
        width += 2;
      } else {
        width++;
      }
    }

    return width;
  };

  return exports;
}