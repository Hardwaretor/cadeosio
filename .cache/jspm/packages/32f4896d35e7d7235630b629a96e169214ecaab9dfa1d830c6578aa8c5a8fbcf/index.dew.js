import _path from "path";
import { dew as _indexDewDew } from "global-prefix/index.dew.js";
import { dew as _indexDew2Dew } from "is-windows/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var path = _path;

  var prefix = _indexDewDew();

  var isWindows = _indexDew2Dew();

  if (isWindows()) {
    exports = path.resolve(prefix, 'node_modules');
  } else {
    exports = path.resolve(prefix, 'lib/node_modules');
  }

  return exports;
}