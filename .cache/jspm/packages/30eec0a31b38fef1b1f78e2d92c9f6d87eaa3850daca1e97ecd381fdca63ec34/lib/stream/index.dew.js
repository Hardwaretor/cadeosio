import { dew as _directoryReaderDewDew } from "../directory-reader.dew.js";
import _fs from "fs";
import { dew as _forEachDewDew } from "../async/for-each.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = readdirStream;

  const DirectoryReader = _directoryReaderDewDew();

  let streamFacade = {
    fs: _fs,
    forEach: _forEachDewDew(),
    async: true
  };
  /**
   * Returns the {@link stream.Readable} of an asynchronous {@link DirectoryReader}.
   *
   * @param {string} dir
   * @param {object} [options]
   * @param {object} internalOptions
   */

  function readdirStream(dir, options, internalOptions) {
    internalOptions.facade = streamFacade;
    let reader = new DirectoryReader(dir, options, internalOptions);
    return reader.stream;
  }

  return exports;
}