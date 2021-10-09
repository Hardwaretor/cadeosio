import { dew as _indexDewDew } from "./lib/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var HPM = _indexDewDew();

  exports = function (context, opts) {
    return new HPM(context, opts);
  };

  return exports;
}