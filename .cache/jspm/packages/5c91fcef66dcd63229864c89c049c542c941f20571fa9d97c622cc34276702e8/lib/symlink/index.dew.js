import { dew as _indexDewDew } from "through2/index.dew.js";
import { dew as _indexDew2Dew } from "graceful-fs/index.dew.js";
import { dew as _prepareWriteDewDew } from "../prepareWrite.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var through2 = _indexDewDew();

  var fs = _indexDew2Dew();

  var prepareWrite = _prepareWriteDewDew();

  function symlink(outFolder, opt) {
    function linkFile(file, enc, cb) {
      var srcPath = file.path;
      var symType = file.isDirectory() ? 'dir' : 'file';
      prepareWrite(outFolder, file, opt, function (err, writePath) {
        if (err) {
          return cb(err);
        }

        fs.symlink(srcPath, writePath, symType, function (err) {
          if (err && err.code !== 'EEXIST') {
            return cb(err);
          }

          cb(null, file);
        });
      });
    }

    var stream = through2.obj(opt, linkFile); // TODO: option for either backpressure or lossy

    stream.resume();
    return stream;
  }

  exports = symlink;
  return exports;
}