import { dew as _colorizeDewDew } from "./colorize.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const {
    Colorizer
  } = _colorizeDewDew();
  /*
   * Simple method to register colors with a simpler require
   * path within the module.
   */


  exports = config => {
    Colorizer.addColors(config.colors || config);
    return config;
  };

  return exports;
}