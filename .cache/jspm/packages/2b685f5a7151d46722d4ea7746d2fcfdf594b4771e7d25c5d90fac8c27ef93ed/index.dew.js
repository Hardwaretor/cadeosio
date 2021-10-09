import _path from "path";
import { dew as _indexDewDew } from "binary-extensions/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var path = _path;

  var binaryExtensions = _indexDewDew();

  var exts = Object.create(null);
  binaryExtensions.forEach(function (el) {
    exts[el] = true;
  });

  exports = function (filepath) {
    return path.extname(filepath).slice(1).toLowerCase() in exts;
  };

  return exports;
}