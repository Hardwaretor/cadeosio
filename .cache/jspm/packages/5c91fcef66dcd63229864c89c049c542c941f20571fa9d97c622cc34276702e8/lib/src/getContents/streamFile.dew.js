import { dew as _indexDewDew } from "graceful-fs/index.dew.js";
import { dew as _indexDew2Dew } from "strip-bom-stream/index.dew.js";
import { dew as _indexDew3Dew } from "lazystream/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var fs = _indexDewDew();

  var stripBom = _indexDew2Dew();

  var lazystream = _indexDew3Dew();

  function streamFile(file, opt, cb) {
    if (typeof opt === 'function') {
      cb = opt;
      opt = {};
    }

    var filePath = file.path;
    file.contents = new lazystream.Readable(function () {
      return fs.createReadStream(filePath);
    });

    if (opt.stripBOM) {
      file.contents = file.contents.pipe(stripBom());
    }

    cb(null, file);
  }

  exports = streamFile;
  return exports;
}