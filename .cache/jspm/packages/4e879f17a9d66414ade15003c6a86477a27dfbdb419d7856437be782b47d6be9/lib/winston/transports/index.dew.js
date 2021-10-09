import { dew as _consoleDewDew } from "./console.dew.js";
import { dew as _fileDewDew } from "./file.dew.js";
import { dew as _httpDewDew } from "./http.dew.js";
import { dew as _streamDewDew } from "./stream.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * TODO: add property description.
   * @type {Console}
   */
  Object.defineProperty(exports, 'Console', {
    configurable: true,
    enumerable: true,

    get() {
      return _consoleDewDew();
    }

  });
  /**
   * TODO: add property description.
   * @type {File}
   */

  Object.defineProperty(exports, 'File', {
    configurable: true,
    enumerable: true,

    get() {
      return _fileDewDew();
    }

  });
  /**
   * TODO: add property description.
   * @type {Http}
   */

  Object.defineProperty(exports, 'Http', {
    configurable: true,
    enumerable: true,

    get() {
      return _httpDewDew();
    }

  });
  /**
   * TODO: add property description.
   * @type {Stream}
   */

  Object.defineProperty(exports, 'Stream', {
    configurable: true,
    enumerable: true,

    get() {
      return _streamDewDew();
    }

  });
  return exports;
}