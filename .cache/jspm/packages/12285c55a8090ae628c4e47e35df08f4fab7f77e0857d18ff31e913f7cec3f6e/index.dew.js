import { dew as _indexDewDew } from "array-uniq/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayUniq = _indexDewDew();

  exports = function () {
    return arrayUniq([].concat.apply([], arguments));
  };

  return exports;
}