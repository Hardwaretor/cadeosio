import _fs from "fs";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = isexe;
  isexe.sync = sync;
  var fs = _fs;

  function checkPathExt(path, options) {
    var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;

    if (!pathext) {
      return true;
    }

    pathext = pathext.split(';');

    if (pathext.indexOf('') !== -1) {
      return true;
    }

    for (var i = 0; i < pathext.length; i++) {
      var p = pathext[i].toLowerCase();

      if (p && path.substr(-p.length).toLowerCase() === p) {
        return true;
      }
    }

    return false;
  }

  function checkStat(stat, path, options) {
    if (!stat.isSymbolicLink() && !stat.isFile()) {
      return false;
    }

    return checkPathExt(path, options);
  }

  function isexe(path, options, cb) {
    fs.stat(path, function (er, stat) {
      cb(er, er ? false : checkStat(stat, path, options));
    });
  }

  function sync(path, options) {
    return checkStat(fs.statSync(path), path, options);
  }

  return exports;
}