import { dew as _writeDirDewDew } from "./writeDir.dew.js";
import { dew as _writeStreamDewDew } from "./writeStream.dew.js";
import { dew as _writeBufferDewDew } from "./writeBuffer.dew.js";
import { dew as _writeSymbolicLinkDewDew } from "./writeSymbolicLink.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var writeDir = _writeDirDewDew();

  var writeStream = _writeStreamDewDew();

  var writeBuffer = _writeBufferDewDew();

  var writeSymbolicLink = _writeSymbolicLinkDewDew();

  function writeContents(writePath, file, callback) {
    // If directory then mkdirp it
    if (file.isDirectory()) {
      return writeDir(writePath, file, written);
    } // Stream it to disk yo


    if (file.isStream()) {
      return writeStream(writePath, file, written);
    } // Write it as a symlink


    if (file.symlink) {
      return writeSymbolicLink(writePath, file, written);
    } // Write it like normal


    if (file.isBuffer()) {
      return writeBuffer(writePath, file, written);
    } // If no contents then do nothing


    if (file.isNull()) {
      return written();
    } // This is invoked by the various writeXxx modules when they've finished
    // writing the contents.


    function written(err) {
      if (isErrorFatal(err)) {
        return callback(err);
      }

      callback(null, file);
    }

    function isErrorFatal(err) {
      if (!err) {
        return false;
      }

      if (err.code === 'EEXIST' && file.flag === 'wx') {
        // Handle scenario for file overwrite failures.
        return false; // "These aren't the droids you're looking for"
      } // Otherwise, this is a fatal error


      return true;
    }
  }

  exports = writeContents;
  return exports;
}