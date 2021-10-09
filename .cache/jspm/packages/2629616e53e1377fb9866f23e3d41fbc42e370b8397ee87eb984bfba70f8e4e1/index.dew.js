import _path from "path";
import { dew as _indexDewDew } from "load-json-file/index.dew.js";
import { dew as _indexDew2Dew } from "path-type/index.dew.js";
import { dew as _indexDew3Dew } from "normalize-package-data/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const path = _path;

  const loadJsonFile = _indexDewDew();

  const pathType = _indexDew2Dew();

  exports = (fp, opts) => {
    if (typeof fp !== 'string') {
      opts = fp;
      fp = '.';
    }

    opts = opts || {};
    return pathType.dir(fp).then(isDir => {
      if (isDir) {
        fp = path.join(fp, 'package.json');
      }

      return loadJsonFile(fp);
    }).then(x => {
      if (opts.normalize !== false) {
        _indexDew3Dew()(x);
      }

      return x;
    });
  };

  exports.sync = (fp, opts) => {
    if (typeof fp !== 'string') {
      opts = fp;
      fp = '.';
    }

    opts = opts || {};
    fp = pathType.dirSync(fp) ? path.join(fp, 'package.json') : fp;
    const x = loadJsonFile.sync(fp);

    if (opts.normalize !== false) {
      _indexDew3Dew()(x);
    }

    return x;
  };

  return exports;
}