import { dew as _indexDewDew } from "object-assign/index.dew.js";
import { dew as _indexDew2Dew } from "through2/index.dew.js";
import { dew as _indexDew3Dew } from "glob-stream/index.dew.js";
import { dew as _indexDew4Dew } from "duplexify/index.dew.js";
import { dew as _indexDew5Dew } from "merge-stream/index.dew.js";
import { dew as _indexDew6Dew } from "gulp-sourcemaps/index.dew.js";
import { dew as _filterSinceDewDew } from "../filterSince.dew.js";
import { dew as _indexDew7Dew } from "is-valid-glob/index.dew.js";
import { dew as _indexDew8Dew } from "./getContents/index.dew.js";
import { dew as _wrapWithVinylFileDewDew } from "./wrapWithVinylFile.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var assign = _indexDewDew();

  var through2 = _indexDew2Dew();

  var gs = _indexDew3Dew();

  var duplexify = _indexDew4Dew();

  var merge = _indexDew5Dew();

  var sourcemaps = _indexDew6Dew();

  var filterSince = _filterSinceDewDew();

  var isValidGlob = _indexDew7Dew();

  var getContents = _indexDew8Dew();

  var wrapWithVinylFile = _wrapWithVinylFileDewDew();

  function src(glob, opt) {
    var options = assign({
      read: true,
      buffer: true,
      stripBOM: true,
      sourcemaps: false,
      passthrough: false,
      followSymlinks: true
    }, opt); // Don't pass `read` option on to through2

    var read = options.read !== false;
    options.read = undefined;
    var inputPass;

    if (!isValidGlob(glob)) {
      throw new Error('Invalid glob argument: ' + glob);
    }

    var globStream = gs.create(glob, options);
    var outputStream = globStream.pipe(wrapWithVinylFile(options));

    if (options.since != null) {
      outputStream = outputStream.pipe(filterSince(options.since));
    }

    if (read) {
      outputStream = outputStream.pipe(getContents(options));
    }

    if (options.passthrough === true) {
      inputPass = through2.obj(options);
      outputStream = duplexify.obj(inputPass, merge(outputStream, inputPass));
    }

    if (options.sourcemaps === true) {
      outputStream = outputStream.pipe(sourcemaps.init({
        loadMaps: true
      }));
    }

    globStream.on('error', outputStream.emit.bind(outputStream, 'error'));
    return outputStream;
  }

  exports = src;
  return exports;
}