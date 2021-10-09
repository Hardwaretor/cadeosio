import _fs from "fs";
import _path from "path";
import { dew as _indexDewDew } from "pify/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  const fs = _fs;
  const path = _path;

  const pify = _indexDewDew();

  const defaults = {
    mode: 0o777 & ~process.umask(),
    fs
  }; // https://github.com/nodejs/node/issues/8987
  // https://github.com/libuv/libuv/pull/1088

  const checkPath = pth => {
    if (process.platform === 'win32') {
      const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ''));

      if (pathHasInvalidWinCharacters) {
        const err = new Error(`Path contains invalid characters: ${pth}`);
        err.code = 'EINVAL';
        throw err;
      }
    }
  };

  exports = (input, opts) => Promise.resolve().then(() => {
    checkPath(input);
    opts = Object.assign({}, defaults, opts);
    const mkdir = pify(opts.fs.mkdir);
    const stat = pify(opts.fs.stat);

    const make = pth => {
      return mkdir(pth, opts.mode).then(() => pth).catch(err => {
        if (err.code === 'ENOENT') {
          if (err.message.includes('null bytes') || path.dirname(pth) === pth) {
            throw err;
          }

          return make(path.dirname(pth)).then(() => make(pth));
        }

        return stat(pth).then(stats => stats.isDirectory() ? pth : Promise.reject()).catch(() => {
          throw err;
        });
      });
    };

    return make(path.resolve(input));
  });

  exports.sync = (input, opts) => {
    checkPath(input);
    opts = Object.assign({}, defaults, opts);

    const make = pth => {
      try {
        opts.fs.mkdirSync(pth, opts.mode);
      } catch (err) {
        if (err.code === 'ENOENT') {
          if (err.message.includes('null bytes') || path.dirname(pth) === pth) {
            throw err;
          }

          make(path.dirname(pth));
          return make(pth);
        }

        try {
          if (!opts.fs.statSync(pth).isDirectory()) {
            throw new Error('The path is not a directory');
          }
        } catch (_) {
          throw err;
        }
      }

      return pth;
    };

    return make(path.resolve(input));
  };

  return exports;
}