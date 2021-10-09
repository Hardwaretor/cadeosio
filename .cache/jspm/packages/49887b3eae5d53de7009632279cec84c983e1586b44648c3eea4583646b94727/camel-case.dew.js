import { dew as _indexDewDew } from "upper-case/index.dew.js";
import { dew as _indexDew2Dew } from "no-case/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var upperCase = _indexDewDew();

  var noCase = _indexDew2Dew();
  /**
   * Camel case a string.
   *
   * @param  {string} value
   * @param  {string} [locale]
   * @return {string}
   */


  exports = function (value, locale, mergeNumbers) {
    var result = noCase(value, locale); // Replace periods between numeric entities with an underscore.

    if (!mergeNumbers) {
      result = result.replace(/ (?=\d)/g, '_');
    } // Replace spaces between words with an upper cased character.


    return result.replace(/ (.)/g, function (m, $1) {
      return upperCase($1, locale);
    });
  };

  return exports;
}