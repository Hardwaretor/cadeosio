import _fs from "fs";
import { dew as _indexDewDew } from "pinkie-promise/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var fs = _fs;

  var Promise = _indexDewDew();

  exports = function (fp) {
    var fn = typeof fs.access === 'function' ? fs.access : fs.stat;
    return new Promise(function (resolve) {
      fn(fp, function (err) {
        resolve(!err);
      });
    });
  };

  exports.sync = function (fp) {
    var fn = typeof fs.accessSync === 'function' ? fs.accessSync : fs.statSync;

    try {
      fn(fp);
      return true;
    } catch (err) {
      return false;
    }
  };

  return exports;
}