import { dew as _directoryReaderDewDew } from "../directory-reader.dew.js";
import { dew as _fsDewDew } from "./fs.dew.js";
import { dew as _forEachDewDew } from "./for-each.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = readdirSync;

  const DirectoryReader = _directoryReaderDewDew();

  let syncFacade = {
    fs: _fsDewDew(),
    forEach: _forEachDewDew(),
    sync: true
  };
  /**
   * Returns the buffered output from a synchronous {@link DirectoryReader}.
   *
   * @param {string} dir
   * @param {object} [options]
   * @param {object} internalOptions
   */

  function readdirSync(dir, options, internalOptions) {
    internalOptions.facade = syncFacade;
    let reader = new DirectoryReader(dir, options, internalOptions);
    let stream = reader.stream;
    let results = [];
    let data = stream.read();

    while (data !== null) {
      results.push(data);
      data = stream.read();
    }

    return results;
  }

  return exports;
}