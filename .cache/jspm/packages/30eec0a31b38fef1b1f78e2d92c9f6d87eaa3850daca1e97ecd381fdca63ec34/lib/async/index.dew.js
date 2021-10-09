import { dew as _indexDewDew } from "call-me-maybe/index.dew.js";
import { dew as _directoryReaderDewDew } from "../directory-reader.dew.js";
import _fs from "fs";
import { dew as _forEachDewDew } from "./for-each.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = readdirAsync;

  const maybe = _indexDewDew();

  const DirectoryReader = _directoryReaderDewDew();

  let asyncFacade = {
    fs: _fs,
    forEach: _forEachDewDew(),
    async: true
  };
  /**
   * Returns the buffered output from an asynchronous {@link DirectoryReader},
   * via an error-first callback or a {@link Promise}.
   *
   * @param {string} dir
   * @param {object} [options]
   * @param {function} [callback]
   * @param {object} internalOptions
   */

  function readdirAsync(dir, options, callback, internalOptions) {
    if (typeof options === 'function') {
      callback = options;
      options = undefined;
    }

    return maybe(callback, new Promise((resolve, reject) => {
      let results = [];
      internalOptions.facade = asyncFacade;
      let reader = new DirectoryReader(dir, options, internalOptions);
      let stream = reader.stream;
      stream.on('error', err => {
        reject(err);
        stream.pause();
      });
      stream.on('data', result => {
        results.push(result);
      });
      stream.on('end', () => {
        resolve(results);
      });
    }));
  }

  return exports;
}