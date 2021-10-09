import { dew as _indexDewDew } from "through2-filter/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var filter = _indexDewDew();

  exports = function (d) {
    var isValid = typeof d === 'number' || d instanceof Number || d instanceof Date;

    if (!isValid) {
      throw new Error('expected since option to be a date or a number');
    }

    return filter.obj(function (file) {
      return file.stat && file.stat.mtime > d;
    });
  };

  return exports;
}