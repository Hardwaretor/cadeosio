import { dew as _fileOperationsDewDew } from "../../fileOperations.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var fo = _fileOperationsDewDew();

  function writeBuffer(writePath, file, written) {
    var opt = {
      mode: file.stat.mode,
      flag: file.flag
    };
    fo.writeFile(writePath, file.contents, opt, onWriteFile);

    function onWriteFile(writeErr, fd) {
      if (writeErr) {
        return fo.closeFd(writeErr, fd, written);
      }

      fo.updateMetadata(fd, file, onUpdate);
    }

    function onUpdate(statErr, fd) {
      fo.closeFd(statErr, fd, written);
    }
  }

  exports = writeBuffer;
  return exports;
}