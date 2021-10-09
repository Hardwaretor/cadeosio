import { dew as _baseDewDew } from "./diff/base.dew.js";
import { dew as _characterDewDew } from "./diff/character.dew.js";
import { dew as _wordDewDew } from "./diff/word.dew.js";
import { dew as _lineDewDew } from "./diff/line.dew.js";
import { dew as _sentenceDewDew } from "./diff/sentence.dew.js";
import { dew as _cssDewDew } from "./diff/css.dew.js";
import { dew as _jsonDewDew } from "./diff/json.dew.js";
import { dew as _applyDewDew } from "./patch/apply.dew.js";
import { dew as _parseDewDew } from "./patch/parse.dew.js";
import { dew as _createDewDew } from "./patch/create.dew.js";
import { dew as _dmpDewDew } from "./convert/dmp.dew.js";
import { dew as _xmlDewDew } from "./convert/xml.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;
  /*istanbul ignore end*/

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
  _character = _characterDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _word = _wordDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _line = _lineDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _sentence = _sentenceDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _css = _cssDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _json = _jsonDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _apply = _applyDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _parse = _parseDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _create = _createDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _dmp = _dmpDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _xml = _xmlDewDew()
  /*istanbul ignore end*/
  ;
  /*istanbul ignore start*/


  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  /* See LICENSE file for terms of use */

  /*
   * Text diff implementation.
   *
   * This library supports the following APIS:
   * JsDiff.diffChars: Character by character diff
   * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
   * JsDiff.diffLines: Line based diff
   *
   * JsDiff.diffCss: Diff targeted at CSS content
   *
   * These methods are based on the implementation proposed in
   * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
   * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
   */


  exports.
  /*istanbul ignore end*/
  Diff = _base2.default;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffChars = _character.diffChars;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffWords = _word.diffWords;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffWordsWithSpace = _word.diffWordsWithSpace;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffLines = _line.diffLines;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffTrimmedLines = _line.diffTrimmedLines;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffSentences = _sentence.diffSentences;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffCss = _css.diffCss;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffJson = _json.diffJson;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  structuredPatch = _create.structuredPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  createTwoFilesPatch = _create.createTwoFilesPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  createPatch = _create.createPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  applyPatch = _apply.applyPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  applyPatches = _apply.applyPatches;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  parsePatch = _parse.parsePatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  convertChangesToDMP = _dmp.convertChangesToDMP;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  convertChangesToXML = _xml.convertChangesToXML;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  canonicalize = _json.canonicalize;
  return exports;
}