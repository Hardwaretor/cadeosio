import { dew as _configDewDew } from "../config.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var config = _configDewDew();
  /*!
   * Chai - isProxyEnabled helper
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  /**
   * ### .isProxyEnabled()
   *
   * Helper function to check if Chai's proxy protection feature is enabled. If
   * proxies are unsupported or disabled via the user's Chai config, then return
   * false. Otherwise, return true.
   *
   * @namespace Utils
   * @name isProxyEnabled
   */


  exports = function isProxyEnabled() {
    return config.useProxy && typeof Proxy !== 'undefined' && typeof Reflect !== 'undefined';
  };

  return exports;
}