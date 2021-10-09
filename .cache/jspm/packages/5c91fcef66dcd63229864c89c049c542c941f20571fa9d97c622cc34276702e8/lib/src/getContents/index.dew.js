import { dew as _indexDewDew } from "through2/index.dew.js";
import { dew as _readDirDewDew } from "./readDir.dew.js";
import { dew as _readSymbolicLinkDewDew } from "./readSymbolicLink.dew.js";
import { dew as _bufferFileDewDew } from "./bufferFile.dew.js";
import { dew as _streamFileDewDew } from "./streamFile.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var through2 = _indexDewDew();

  var readDir = _readDirDewDew();

  var readSymbolicLink = _readSymbolicLinkDewDew();

  var bufferFile = _bufferFileDewDew();

  var streamFile = _streamFileDewDew();

  function getContents(opt) {
    return through2.obj(opt, function (file, enc, cb) {
      // Don't fail to read a directory
      if (file.isDirectory()) {
        return readDir(file, opt, cb);
      } // Process symbolic links included with `followSymlinks` option


      if (file.stat && file.stat.isSymbolicLink()) {
        return readSymbolicLink(file, opt, cb);
      } // Read and pass full contents


      if (opt.buffer !== false) {
        return bufferFile(file, opt, cb);
      } // Don't buffer anything - just pass streams


      return streamFile(file, opt, cb);
    });
  }

  exports = getContents;
  return exports;
}