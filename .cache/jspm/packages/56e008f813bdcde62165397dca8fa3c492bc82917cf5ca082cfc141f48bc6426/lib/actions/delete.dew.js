import _path from "path";
import { dew as _indexDewDew } from "globby/index.dew.js";
import { dew as _indexDew2Dew } from "multimatch/index.dew.js";
import { dew as _utilDewDew } from "../util.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var path = _path;

  var globby = _indexDewDew();

  var multimatch = _indexDew2Dew();

  var util = _utilDewDew();

  function deleteFile(path, store) {
    var file = store.get(path);
    file.state = 'deleted';
    file.contents = null;
    store.add(file);
  }

  exports = function (paths, options) {
    if (!Array.isArray(paths)) {
      paths = [paths];
    }

    paths = paths.map(function (filePath) {
      return path.resolve(filePath);
    });
    paths = util.globify(paths);
    options = options || {};
    var globOptions = options.globOptions || {};
    var files = globby.sync(paths, globOptions);
    files.forEach(function (file) {
      deleteFile(file, this.store);
    }.bind(this));
    this.store.each(function (file) {
      if (multimatch([file.path], paths).length !== 0) {
        deleteFile(file.path, this.store);
      }
    }.bind(this));
  };

  return exports;
}