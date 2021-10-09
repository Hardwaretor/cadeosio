import _fs from "fs";
import _path from "path";
import { dew as _indexDewDew } from "commondir/index.dew.js";
import { dew as _indexDew2Dew } from "glob/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var fs = _fs;
  var path = _path;

  var commondir = _indexDewDew();

  var glob = _indexDew2Dew();

  function notNullOrExclusion(file) {
    return file != null && file.charAt(0) !== '!';
  }

  exports.getCommonPath = function (filePath) {
    if (Array.isArray(filePath)) {
      filePath = filePath.filter(notNullOrExclusion).map(this.getCommonPath.bind(this));
      return commondir(filePath);
    }

    var globStartIndex = filePath.indexOf('*');

    if (globStartIndex !== -1) {
      filePath = filePath.substring(0, globStartIndex + 1);
    } else if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      return filePath;
    }

    return path.dirname(filePath);
  };

  exports.globify = function (filePath) {
    if (Array.isArray(filePath)) {
      return filePath.reduce((memo, pattern) => memo.concat(this.globify(pattern)), []);
    }

    if (glob.hasMagic(filePath)) {
      return filePath;
    }

    if (!fs.existsSync(filePath)) {
      // The target of a pattern who's not a glob and doesn't match an existing
      // entity on the disk is ambiguous. As such, match both files and directories.
      return [filePath, path.join(filePath, '**')];
    }

    var fsStats = fs.statSync(filePath);

    if (fsStats.isFile()) {
      return filePath;
    }

    if (fsStats.isDirectory()) {
      return path.join(filePath, '**');
    }

    throw new Error('Only file path or directory path are supported.');
  };

  return exports;
}