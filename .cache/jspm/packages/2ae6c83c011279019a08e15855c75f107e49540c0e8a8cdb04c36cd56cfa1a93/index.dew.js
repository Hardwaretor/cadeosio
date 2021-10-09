import _path from "path";
import { dew as _indexDewDew } from "expand-tilde/index.dew.js";
import { dew as _indexDew2Dew } from "global-modules/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var path = _path;

  var expand = _indexDewDew();

  var gm = _indexDew2Dew();

  exports = function resolveDir(dir) {
    if (dir.charAt(0) === '~') {
      dir = expand(dir);
    }

    if (dir.charAt(0) === '@') {
      dir = path.join(gm, dir.slice(1));
    }

    return dir;
  };

  return exports;
}