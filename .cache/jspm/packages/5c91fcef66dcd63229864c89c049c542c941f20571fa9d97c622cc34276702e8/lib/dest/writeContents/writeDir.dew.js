import { dew as _indexDewDew } from "graceful-fs/index.dew.js";
import { dew as _indexDew2Dew } from "mkdirp/index.dew.js";
import { dew as _fileOperationsDewDew } from "../../fileOperations.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var fs = _indexDewDew();

  var mkdirp = _indexDew2Dew();

  var fo = _fileOperationsDewDew();

  function writeDir(writePath, file, written) {
    var mkdirpOpts = {
      mode: file.stat.mode,
      fs: fs
    };
    mkdirp(writePath, mkdirpOpts, onMkdirp);

    function onMkdirp(mkdirpErr) {
      if (mkdirpErr) {
        return written(mkdirpErr);
      }

      fs.open(writePath, 'r', onOpen);
    }

    function onOpen(openErr, fd) {
      // If we don't have access, just move along
      if (isInaccessible(openErr)) {
        return fo.closeFd(null, fd, written);
      }

      if (openErr) {
        return fo.closeFd(openErr, fd, written);
      }

      fo.updateMetadata(fd, file, onUpdate);
    }

    function onUpdate(statErr, fd) {
      fo.closeFd(statErr, fd, written);
    }
  }

  function isInaccessible(err) {
    if (!err) {
      return false;
    }

    if (err.code === 'EACCES') {
      return true;
    }

    return false;
  }

  exports = writeDir;
  return exports;
}