import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _paramsDewDew } from "../util/params.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.lineDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffLines = diffLines;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffTrimmedLines = diffTrimmedLines;

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


  var lineDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  lineDiff = new
  /*istanbul ignore start*/
  _base2.default()
  /*istanbul ignore end*/
  ;

  lineDiff.tokenize = function (value) {
    var retLines = [],
        linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    } // Merge the content and line separators into single tokens


    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }

        retLines.push(line);
      }
    }

    return retLines;
  };

  function diffLines(oldStr, newStr, callback) {
    return lineDiff.diff(oldStr, newStr, callback);
  }

  function diffTrimmedLines(oldStr, newStr, callback) {
    var options =
    /*istanbul ignore start*/
    (0, _params.generateOptions
    /*istanbul ignore end*/
    )(callback, {
      ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
  }

  return exports;
}