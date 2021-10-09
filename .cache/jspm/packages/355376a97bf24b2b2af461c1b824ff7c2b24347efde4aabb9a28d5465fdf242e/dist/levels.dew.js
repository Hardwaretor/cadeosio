import { dew as _colorizeDewDew } from "./colorize.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _require = _colorizeDewDew(),
      Colorizer = _require.Colorizer;
  /*
   * Simple method to register colors with a simpler require
   * path within the module.
   */


  exports = function (config) {
    Colorizer.addColors(config.colors || config);
    return config;
  };

  return exports;
}