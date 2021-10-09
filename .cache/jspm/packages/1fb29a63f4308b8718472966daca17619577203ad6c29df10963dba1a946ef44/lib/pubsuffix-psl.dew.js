import { dew as _indexDewDew } from "psl/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var psl = _indexDewDew();

  function getPublicSuffix(domain) {
    return psl.get(domain);
  }

  exports.getPublicSuffix = getPublicSuffix;
  return exports;
}