import { dew as _indexDewDew } from "./sync/index.dew.js";
import { dew as _indexDew2Dew } from "./async/index.dew.js";
import { dew as _indexDew3Dew } from "./stream/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const readdirSync = _indexDewDew();

  const readdirAsync = _indexDew2Dew();

  const readdirStream = _indexDew3Dew();

  exports = exports = readdirAsyncPath;
  exports.readdir = exports.readdirAsync = exports.async = readdirAsyncPath;
  exports.readdirAsyncStat = exports.async.stat = readdirAsyncStat;
  exports.readdirStream = exports.stream = readdirStreamPath;
  exports.readdirStreamStat = exports.stream.stat = readdirStreamStat;
  exports.readdirSync = exports.sync = readdirSyncPath;
  exports.readdirSyncStat = exports.sync.stat = readdirSyncStat;
  /**
   * Synchronous readdir that returns an array of string paths.
   *
   * @param {string} dir
   * @param {object} [options]
   * @returns {string[]}
   */

  function readdirSyncPath(dir, options) {
    return readdirSync(dir, options, {});
  }
  /**
   * Synchronous readdir that returns results as an array of {@link fs.Stats} objects
   *
   * @param {string} dir
   * @param {object} [options]
   * @returns {fs.Stats[]}
   */


  function readdirSyncStat(dir, options) {
    return readdirSync(dir, options, {
      stats: true
    });
  }
  /**
   * Aynchronous readdir (accepts an error-first callback or returns a {@link Promise}).
   * Results are an array of path strings.
   *
   * @param {string} dir
   * @param {object} [options]
   * @param {function} [callback]
   * @returns {Promise<string[]>}
   */


  function readdirAsyncPath(dir, options, callback) {
    return readdirAsync(dir, options, callback, {});
  }
  /**
   * Aynchronous readdir (accepts an error-first callback or returns a {@link Promise}).
   * Results are an array of {@link fs.Stats} objects.
   *
   * @param {string} dir
   * @param {object} [options]
   * @param {function} [callback]
   * @returns {Promise<fs.Stats[]>}
   */


  function readdirAsyncStat(dir, options, callback) {
    return readdirAsync(dir, options, callback, {
      stats: true
    });
  }
  /**
   * Aynchronous readdir that returns a {@link stream.Readable} (which is also an {@link EventEmitter}).
   * All stream data events ("data", "file", "directory", "symlink") are passed a path string.
   *
   * @param {string} dir
   * @param {object} [options]
   * @returns {stream.Readable}
   */


  function readdirStreamPath(dir, options) {
    return readdirStream(dir, options, {});
  }
  /**
   * Aynchronous readdir that returns a {@link stream.Readable} (which is also an {@link EventEmitter})
   * All stream data events ("data", "file", "directory", "symlink") are passed an {@link fs.Stats} object.
   *
   * @param {string} dir
   * @param {object} [options]
   * @returns {stream.Readable}
   */


  function readdirStreamStat(dir, options) {
    return readdirStream(dir, options, {
      stats: true
    });
  }

  return exports;
}