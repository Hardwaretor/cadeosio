import { dew as _indexDewDew } from "through2/index.dew.js";
import { dew as _mkdirpDewDew } from "./mkdirp.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var through = _indexDewDew();

  var mkdirp = _mkdirpDewDew();

  function toFunction(dirpath) {
    function stringResolver(chunk, callback) {
      callback(null, dirpath);
    }

    return stringResolver;
  }

  function define(options) {
    function mkdirpStream(resolver) {
      // Handle resolver that's just a dirpath
      if (typeof resolver === 'string') {
        resolver = toFunction(resolver);
      }

      function makeFileDirs(chunk, enc, callback) {
        resolver(chunk, onDirpath);

        function onDirpath(dirpathErr, dirpath, mode) {
          if (dirpathErr) {
            return callback(dirpathErr);
          }

          mkdirp(dirpath, mode, onMkdirp);
        }

        function onMkdirp(mkdirpErr) {
          if (mkdirpErr) {
            return callback(mkdirpErr);
          }

          callback(null, chunk);
        }
      }

      return through(options, makeFileDirs);
    }

    return mkdirpStream;
  }

  exports = define();
  exports.obj = define({
    objectMode: true,
    highWaterMark: 16
  });
  return exports;
}