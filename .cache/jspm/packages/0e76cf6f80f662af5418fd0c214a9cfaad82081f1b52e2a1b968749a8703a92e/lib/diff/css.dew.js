import { dew as _baseDewDew } from "./base.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.cssDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffCss = diffCss;

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


  var cssDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  cssDiff = new
  /*istanbul ignore start*/
  _base2.default()
  /*istanbul ignore end*/
  ;

  cssDiff.tokenize = function (value) {
    return value.split(/([{}:;,]|\s+)/);
  };

  function diffCss(oldStr, newStr, callback) {
    return cssDiff.diff(oldStr, newStr, callback);
  }

  return exports;
}