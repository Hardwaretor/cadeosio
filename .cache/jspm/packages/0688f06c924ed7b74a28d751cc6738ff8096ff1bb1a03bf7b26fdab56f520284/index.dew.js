import _path from "path";
import { dew as _indexDewDew } from "find-up/index.dew.js";
import { dew as _indexDew2Dew } from "read-pkg/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const path = _path;

  const findUp = _indexDewDew();

  const readPkg = _indexDew2Dew();

  exports = async options => {
    const filePath = await findUp('package.json', options);

    if (!filePath) {
      return {};
    }

    return {
      pkg: await readPkg({ ...options,
        cwd: path.dirname(filePath)
      }),
      path: filePath
    };
  };

  exports.sync = options => {
    const filePath = findUp.sync('package.json', options);

    if (!filePath) {
      return {};
    }

    return {
      pkg: readPkg.sync({ ...options,
        cwd: path.dirname(filePath)
      }),
      path: filePath
    };
  };

  return exports;
}