import _fs from "fs";
import _path from "path";
import { dew as _indexDewDew } from "through2/index.dew.js";
import { dew as _indexDew2Dew } from "mkdirp/index.dew.js";
import { dew as _indexDew3Dew } from "rimraf/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var fs = _fs;
  var path = _path;

  var through = _indexDewDew();

  var mkdirp = _indexDew2Dew();

  var rimraf = _indexDew3Dew();

  function write(file) {
    var dir = path.dirname(file.path);

    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }

    fs.writeFileSync(file.path, file.contents, {
      mode: file.stat ? file.stat.mode : null
    });
  }

  function remove(file) {
    rimraf.sync(file.path);
  }

  exports = function (filters, cb) {
    var store = this.store;

    if (arguments.length === 1) {
      cb = filters;
      filters = [];
    }

    var modifiedFilter = through.obj(function (file, enc, cb) {
      // Don't process deleted file who haven't been commited yet.
      if (file.state === 'modified' || file.state === 'deleted' && !file.isNew) {
        this.push(file);
      }

      cb();
    });
    var commitFilter = through.obj(function (file, enc, cb) {
      store.add(file);

      if (file.state === 'modified') {
        write(file);
      } else if (file.state === 'deleted') {
        remove(file);
      }

      delete file.state;
      delete file.isNew;
      cb();
    });
    filters.unshift(modifiedFilter);
    filters.push(commitFilter);
    var stream = filters.reduce(function (stream, filter) {
      return stream.pipe(filter);
    }, this.store.stream());
    stream.on('finish', cb);
  };

  return exports;
}