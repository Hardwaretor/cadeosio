import { dew as _indexDewDew } from "graceful-fs/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var fs = _indexDewDew();

  function readLink(file, opt, cb) {
    fs.readlink(file.path, function (err, target) {
      if (err) {
        return cb(err);
      } // Store the link target path


      file.symlink = target;
      return cb(null, file);
    });
  }

  exports = readLink;
  return exports;
}