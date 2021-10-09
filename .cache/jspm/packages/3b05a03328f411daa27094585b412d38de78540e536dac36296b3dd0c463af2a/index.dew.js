import _fs from "fs";
import { dew as _indexDewDew } from "pify/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const fs = _fs;

  const pify = _indexDewDew();

  function type(fn, fn2, fp) {
    if (typeof fp !== 'string') {
      return Promise.reject(new TypeError(`Expected a string, got ${typeof fp}`));
    }

    return pify(fs[fn])(fp).then(stats => stats[fn2]()).catch(err => {
      if (err.code === 'ENOENT') {
        return false;
      }

      throw err;
    });
  }

  function typeSync(fn, fn2, fp) {
    if (typeof fp !== 'string') {
      throw new TypeError(`Expected a string, got ${typeof fp}`);
    }

    try {
      return fs[fn](fp)[fn2]();
    } catch (err) {
      if (err.code === 'ENOENT') {
        return false;
      }

      throw err;
    }
  }

  exports.file = type.bind(null, 'stat', 'isFile');
  exports.dir = type.bind(null, 'stat', 'isDirectory');
  exports.symlink = type.bind(null, 'lstat', 'isSymbolicLink');
  exports.fileSync = typeSync.bind(null, 'statSync', 'isFile');
  exports.dirSync = typeSync.bind(null, 'statSync', 'isDirectory');
  exports.symlinkSync = typeSync.bind(null, 'lstatSync', 'isSymbolicLink');
  return exports;
}