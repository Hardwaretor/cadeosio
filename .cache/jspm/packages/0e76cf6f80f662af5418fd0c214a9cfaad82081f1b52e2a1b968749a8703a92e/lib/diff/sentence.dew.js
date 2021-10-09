import { dew as _baseDewDew } from "./base.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.sentenceDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffSentences = diffSentences;

  var
  /*istanbul ignore start*/
  _base = _baseDewDew()
  /*istanbul ignore end*/
  ;
  /*istanbul ignore start*/


  var _base2 = _interopRequireDefault(_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  /*istanbul ignore end*/


  var sentenceDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  sentenceDiff = new
  /*istanbul ignore start*/
  _base2.default()
  /*istanbul ignore end*/
  ;

  sentenceDiff.tokenize = function (value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  function diffSentences(oldStr, newStr, callback) {
    return sentenceDiff.diff(oldStr, newStr, callback);
  }

  return exports;
}