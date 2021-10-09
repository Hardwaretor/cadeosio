import _path from "path";
import { dew as _indexDewDew } from "path-exists/index.dew.js";
import { dew as _indexDew2Dew } from "pinkie-promise/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var path = _path;

  var pathExists = _indexDewDew();

  var Promise = _indexDew2Dew();

  function splitPath(x) {
    return path.resolve(x || '').split(path.sep);
  }

  function join(parts, filename) {
    return path.resolve(parts.join(path.sep) + path.sep, filename);
  }

  exports = function (filename, opts) {
    opts = opts || {};
    var parts = splitPath(opts.cwd);
    return new Promise(function (resolve) {
      (function find() {
        var fp = join(parts, filename);
        pathExists(fp).then(function (exists) {
          if (exists) {
            resolve(fp);
          } else if (parts.pop()) {
            find();
          } else {
            resolve(null);
          }
        });
      })();
    });
  };

  exports.sync = function (filename, opts) {
    opts = opts || {};
    var parts = splitPath(opts.cwd);
    var len = parts.length;

    while (len--) {
      var fp = join(parts, filename);

      if (pathExists.sync(fp)) {
        return fp;
      }

      parts.pop();
    }

    return null;
  };

  return exports;
}