import { dew as _indexDewDew } from "graceful-fs/index.dew.js";
import { dew as _indexDew2Dew } from "strip-bom/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var fs = _indexDewDew();

  var stripBom = _indexDew2Dew();

  function bufferFile(file, opt, cb) {
    fs.readFile(file.path, function (err, data) {
      if (err) {
        return cb(err);
      }

      if (opt.stripBOM) {
        file.contents = stripBom(data);
      } else {
        file.contents = data;
      }

      cb(null, file);
    });
  }

  exports = bufferFile;
  return exports;
}