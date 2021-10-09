import { dew as _parseDewDew } from "./lib/parse.dew.js";
import { dew as _buildDewDew } from "./lib/build.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Parser functions.
   */
  var parserFunctions = _parseDewDew();

  Object.keys(parserFunctions).forEach(function (k) {
    exports[k] = parserFunctions[k];
  });
  /**
   * Builder functions.
   */

  var builderFunctions = _buildDewDew();

  Object.keys(builderFunctions).forEach(function (k) {
    exports[k] = builderFunctions[k];
  });
  return exports;
}