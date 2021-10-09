import { dew as _indexDewDew } from "through2/index.dew.js";
import { dew as _indexDew2Dew } from "graceful-fs/index.dew.js";
import { dew as _indexDew3Dew } from "vinyl/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var through2 = _indexDewDew();

  var fs = _indexDew2Dew();

  var File = _indexDew3Dew();

  function wrapWithVinylFile(options) {
    // A stat property is exposed on file objects as a (wanted) side effect
    function resolveFile(globFile, enc, cb) {
      fs.lstat(globFile.path, function (err, stat) {
        if (err) {
          return cb(err);
        }

        globFile.stat = stat;

        if (!stat.isSymbolicLink() || !options.followSymlinks) {
          var vinylFile = new File(globFile);

          if (globFile.originalSymlinkPath) {
            // If we reach here, it means there is at least one
            // symlink on the path and we need to rewrite the path
            // to its original value.
            // Updated file stats will tell getContents() to actually read it.
            vinylFile.path = globFile.originalSymlinkPath;
          }

          return cb(null, vinylFile);
        }

        fs.realpath(globFile.path, function (err, filePath) {
          if (err) {
            return cb(err);
          }

          if (!globFile.originalSymlinkPath) {
            // Store the original symlink path before the recursive call
            // to later rewrite it back.
            globFile.originalSymlinkPath = globFile.path;
          }

          globFile.path = filePath; // Recurse to get real file stat

          resolveFile(globFile, enc, cb);
        });
      });
    }

    return through2.obj(options, resolveFile);
  }

  exports = wrapWithVinylFile;
  return exports;
}