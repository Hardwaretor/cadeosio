import { dew as _indexDewDew } from "selenium-standalone/index.dew.js";
import _process from "process";
import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  var process = _process;

  /**
   * @license
   * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */
  var seleniumConfig = process.env.SELENIUM_OVERRIDES_CONFIG || '../selenium-overrides.js';

  var SELENIUM_OVERRIDES = _nodeRequire(seleniumConfig)['selenium-overrides']; // Work around a potential npm race condition:
  // https://github.com/npm/npm/issues/6624


  function requireSelenium(done, attempt) {
    attempt = attempt || 0;
    var selenium;

    try {
      selenium = _indexDewDew();
    } catch (error) {
      if (attempt > 3) {
        throw error;
      }

      setTimeout(requireSelenium.bind(null, done, attempt + 1), Math.pow(2, attempt) // Exponential backoff to play it safe.
      );
    } // All is well.


    done(selenium);
  }

  var config = SELENIUM_OVERRIDES || {};
  config.logger = console.log.bind(console);

  if (!process.env.NOSELENIUM) {
    requireSelenium(function (selenium) {
      selenium.install(config, function (error) {
        if (error) {
          console.log('Failed to download selenium and/or chromedriver:', error);
          console.log('selenium-standalone will attempt to re-download next time it is run.'); // We explicitly do not fail the install process if this happens; the
          // user can still recover, unless their permissions are completely
          // screwey.
        }
      });
    });
  } else {
    console.log('skipping install of selenium because of NOSELENIUM flag');
  }

  return exports;
}