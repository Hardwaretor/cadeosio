import { dew as _indexDewDew } from "through2/index.dew.js";
import { dew as _indexDew2Dew } from "gulp-sourcemaps/index.dew.js";
import { dew as _indexDew3Dew } from "duplexify/index.dew.js";
import { dew as _sinkDewDew } from "../sink.dew.js";
import { dew as _prepareWriteDewDew } from "../prepareWrite.dew.js";
import { dew as _indexDew4Dew } from "./writeContents/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var through2 = _indexDewDew();

  var sourcemaps = _indexDew2Dew();

  var duplexify = _indexDew3Dew();

  var sink = _sinkDewDew();

  var prepareWrite = _prepareWriteDewDew();

  var writeContents = _indexDew4Dew();

  function dest(outFolder, opt) {
    if (!opt) {
      opt = {};
    }

    function saveFile(file, enc, cb) {
      prepareWrite(outFolder, file, opt, function (err, writePath) {
        if (err) {
          return cb(err);
        }

        writeContents(writePath, file, cb);
      });
    }

    var saveStream = through2.obj(opt, saveFile);

    if (!opt.sourcemaps) {
      // Sink the save stream to start flowing
      // Do this on nextTick, it will flow at slowest speed of piped streams
      process.nextTick(sink(saveStream));
      return saveStream;
    }

    var sourcemapOpt = opt.sourcemaps;

    if (typeof sourcemapOpt === 'boolean') {
      sourcemapOpt = {};
    }

    if (typeof sourcemapOpt === 'string') {
      sourcemapOpt = {
        path: sourcemapOpt
      };
    }

    var mapStream = sourcemaps.write(sourcemapOpt.path, sourcemapOpt);
    var outputStream = duplexify.obj(mapStream, saveStream);
    mapStream.pipe(saveStream); // Sink the output stream to start flowing
    // Do this on nextTick, it will flow at slowest speed of piped streams

    process.nextTick(sink(outputStream));
    return outputStream;
  }

  exports = dest;
  return exports;
}