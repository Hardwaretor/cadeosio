import _path from "path";
import { dew as _indexDewDew } from "global-prefix/index.dew.js";
import { dew as _indexDew2Dew } from "is-windows/index.dew.js";
var exports = {},
    _dewExec = false;
var module = {
  exports: exports
};
export function dew() {
  if (_dewExec) return module.exports;
  _dewExec = true;
  var path = _path;

  var prefix = _indexDewDew();

  var isWindows = _indexDew2Dew();

  var gm;

  function getPath() {
    if (isWindows()) {
      return path.resolve(prefix, 'node_modules');
    }

    return path.resolve(prefix, 'lib/node_modules');
  }
  /**
   * Expose `global-modules` path
   */


  Object.defineProperty(module, 'exports', {
    enumerable: true,
    get: function () {
      return gm || (gm = getPath());
    }
  });
  return module.exports;
}