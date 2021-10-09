import { dew as _indexDewDew } from "object-assign/index.dew.js";
import _path from "path";
import { dew as _indexDew2Dew } from "mkdirp/index.dew.js";
import { dew as _indexDew3Dew } from "graceful-fs/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var assign = _indexDewDew();

  var path = _path;

  var mkdirp = _indexDew2Dew();

  var fs = _indexDew3Dew();

  function booleanOrFunc(v, file) {
    if (typeof v !== 'boolean' && typeof v !== 'function') {
      return null;
    }

    return typeof v === 'boolean' ? v : v(file);
  }

  function stringOrFunc(v, file) {
    if (typeof v !== 'string' && typeof v !== 'function') {
      return null;
    }

    return typeof v === 'string' ? v : v(file);
  }

  function prepareWrite(outFolder, file, opt, cb) {
    var options = assign({
      cwd: process.cwd(),
      mode: file.stat ? file.stat.mode : null,
      dirMode: null,
      overwrite: true
    }, opt);
    var overwrite = booleanOrFunc(options.overwrite, file);
    options.flag = overwrite ? 'w' : 'wx';
    var cwd = path.resolve(options.cwd);
    var outFolderPath = stringOrFunc(outFolder, file);

    if (!outFolderPath) {
      throw new Error('Invalid output folder');
    }

    var basePath = options.base ? stringOrFunc(options.base, file) : path.resolve(cwd, outFolderPath);

    if (!basePath) {
      throw new Error('Invalid base option');
    }

    var writePath = path.resolve(basePath, file.relative);
    var writeFolder = path.dirname(writePath); // Wire up new properties

    file.stat = file.stat || new fs.Stats();
    file.stat.mode = options.mode;
    file.flag = options.flag;
    file.cwd = cwd;
    file.base = basePath;
    file.path = writePath; // Mkdirp the folder the file is going in

    var mkdirpOpts = {
      mode: options.dirMode,
      fs: fs
    };
    mkdirp(writeFolder, mkdirpOpts, function (err) {
      if (err) {
        return cb(err);
      }

      cb(null, writePath);
    });
  }

  exports = prepareWrite;
  return exports;
}