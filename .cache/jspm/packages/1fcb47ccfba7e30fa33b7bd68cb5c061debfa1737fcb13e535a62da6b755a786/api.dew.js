import _util from "util";
import { dew as _indexDewDew } from "currently-unhandled/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var util = _util;

  var currentlyUnhandled = _indexDewDew(); // WARNING: This undocumented API is subject to change.


  exports = util.deprecate(function (process) {
    return {
      currentlyUnhandled: currentlyUnhandled(process)
    };
  }, 'loudRejection/api is deprecated. Use the currently-unhandled module instead.');
  return exports;
}