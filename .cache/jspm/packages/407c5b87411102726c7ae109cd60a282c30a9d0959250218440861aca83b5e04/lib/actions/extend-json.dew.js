import { dew as _indexDewDew } from "deep-extend/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var extend = _indexDewDew();

  exports = function (filepath, contents, replacer, space) {
    var originalContent = this.readJSON(filepath, {});
    var newContent = extend({}, originalContent, contents);
    this.writeJSON(filepath, newContent, replacer, space);
  };

  return exports;
}