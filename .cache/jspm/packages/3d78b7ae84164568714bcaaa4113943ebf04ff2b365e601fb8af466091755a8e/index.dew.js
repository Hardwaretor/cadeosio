import _fs from "fs";
import { dew as _windowsDewDew } from "./windows.dew.js";
import { dew as _modeDewDew } from "./mode.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var fs = _fs;
  var core;

  if (process.platform === 'win32' || _global.TESTING_WINDOWS) {
    core = _windowsDewDew();
  } else {
    core = _modeDewDew();
  }

  exports = isexe;
  isexe.sync = sync;

  function isexe(path, options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    if (!cb) {
      if (typeof Promise !== 'function') {
        throw new TypeError('callback not provided');
      }

      return new Promise(function (resolve, reject) {
        isexe(path, options || {}, function (er, is) {
          if (er) {
            reject(er);
          } else {
            resolve(is);
          }
        });
      });
    }

    core(path, options || {}, function (er, is) {
      // ignore EACCES because that just means we aren't allowed to run it
      if (er) {
        if (er.code === 'EACCES' || options && options.ignoreErrors) {
          er = null;
          is = false;
        }
      }

      cb(er, is);
    });
  }

  function sync(path, options) {
    // my kingdom for a filtered catch
    try {
      return core.sync(path, options || {});
    } catch (er) {
      if (options && options.ignoreErrors || er.code === 'EACCES') {
        return false;
      } else {
        throw er;
      }
    }
  }

  return exports;
}