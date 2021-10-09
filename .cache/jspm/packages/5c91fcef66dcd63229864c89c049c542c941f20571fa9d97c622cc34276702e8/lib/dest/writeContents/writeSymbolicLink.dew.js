import { dew as _indexDewDew } from "graceful-fs/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var fs = _indexDewDew();

  function writeSymbolicLink(writePath, file, written) {
    // TODO handle symlinks properly
    fs.symlink(file.symlink, writePath, function (err) {
      if (isFatalError(err)) {
        return written(err);
      }

      written();
    });
  }

  function isFatalError(err) {
    return err && err.code !== 'EEXIST';
  }

  exports = writeSymbolicLink;
  return exports;
}