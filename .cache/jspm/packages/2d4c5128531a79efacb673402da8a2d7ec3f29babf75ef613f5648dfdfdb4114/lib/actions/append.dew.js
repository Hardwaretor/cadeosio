import { dew as _indexDewDew } from "deep-extend/index.dew.js";
import _os from "os";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var extend = _indexDewDew();

  var EOL = _os.EOL;

  exports = function (to, contents, options) {
    options = extend({
      trimEnd: true,
      separator: EOL
    }, options || {});
    var currentContents = this.read(to);

    if (options.trimEnd) {
      currentContents = currentContents.replace(/\s+$/, '');
    }

    this.write(to, currentContents + options.separator + contents);
  };

  return exports;
}