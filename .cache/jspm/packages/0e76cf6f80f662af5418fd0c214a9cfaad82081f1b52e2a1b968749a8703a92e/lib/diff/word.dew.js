import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _paramsDewDew } from "../util/params.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.wordDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffWords = diffWords;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffWordsWithSpace = diffWordsWithSpace;

  var
  /*istanbul ignore start*/
  _base = _baseDewDew()
  /*istanbul ignore end*/
  ;
  /*istanbul ignore start*/


  var _base2 = _interopRequireDefault(_base);
  /*istanbul ignore end*/


  var
  /*istanbul ignore start*/
  _params = _paramsDewDew()
  /*istanbul ignore end*/
  ;
  /*istanbul ignore start*/


  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  /*istanbul ignore end*/
  // Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
  //
  // Ranges and exceptions:
  // Latin-1 Supplement, 0080–00FF
  //  - U+00D7  × Multiplication sign
  //  - U+00F7  ÷ Division sign
  // Latin Extended-A, 0100–017F
  // Latin Extended-B, 0180–024F
  // IPA Extensions, 0250–02AF
  // Spacing Modifier Letters, 02B0–02FF
  //  - U+02C7  ˇ &#711;  Caron
  //  - U+02D8  ˘ &#728;  Breve
  //  - U+02D9  ˙ &#729;  Dot Above
  //  - U+02DA  ˚ &#730;  Ring Above
  //  - U+02DB  ˛ &#731;  Ogonek
  //  - U+02DC  ˜ &#732;  Small Tilde
  //  - U+02DD  ˝ &#733;  Double Acute Accent
  // Latin Extended Additional, 1E00–1EFF


  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  wordDiff = new
  /*istanbul ignore start*/
  _base2.default()
  /*istanbul ignore end*/
  ;

  wordDiff.equals = function (left, right) {
    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };

  wordDiff.tokenize = function (value) {
    var tokens = value.split(/(\s+|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

    for (var i = 0; i < tokens.length - 1; i++) {
      // If we have an empty string in the next field and we have only word chars before and after, merge
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }

    return tokens;
  };

  function diffWords(oldStr, newStr, callback) {
    var options =
    /*istanbul ignore start*/
    (0, _params.generateOptions
    /*istanbul ignore end*/
    )(callback, {
      ignoreWhitespace: true
    });
    return wordDiff.diff(oldStr, newStr, options);
  }

  function diffWordsWithSpace(oldStr, newStr, callback) {
    return wordDiff.diff(oldStr, newStr, callback);
  }

  return exports;
}