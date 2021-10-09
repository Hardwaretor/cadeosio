import { dew as _indexDewDew } from "chalk/index.dew.js";
import { dew as _indexDew2Dew } from "cleankill/index.dew.js";
import { dew as _indexDew3Dew } from "freeport/index.dew.js";
import { dew as _indexDew4Dew } from "selenium-standalone/index.dew.js";
import _util from "util";
import { dew as _indexDew5Dew } from "which/index.dew.js";
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

  var __awaiter = exports && exports.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : new P(function (resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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

  const chalk_1 = _indexDewDew();

  const cleankill = _indexDew2Dew();

  const freeport = _indexDew3Dew();

  const selenium = _indexDew4Dew();

  const util_1 = _util;

  const which = _indexDew5Dew();

  const seleniumConfig = process.env.SELENIUM_OVERRIDES_CONFIG || '../selenium-overrides.js';

  const SELENIUM_OVERRIDES = _nodeRequire(seleniumConfig)['selenium-overrides'];

  function checkSeleniumEnvironment() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        yield util_1.promisify(which)('java');
        return;
      } catch (error) {
        /* Handled below */
      }

      let message = 'java is not present on your PATH.';

      if (process.platform === 'win32') {
        message += `\n\n  Please install it: https://java.com/download/\n\n`;
      } else if (process.platform === 'linux') {
        try {
          yield util_1.promisify(which)('apt-get');
          message = message + '\n\n  sudo apt-get install default-jre\n\n';
        } catch (error) {// There's not a clear default package for yum distros.
        }
      }

      throw message;
    });
  }

  exports.checkSeleniumEnvironment = checkSeleniumEnvironment;

  function startSeleniumServer(wct, args, javaArgs) {
    return __awaiter(this, void 0, void 0, function* () {
      wct.emit('log:info', 'Starting Selenium server for local browsers');
      yield checkSeleniumEnvironment();
      const opts = {
        args: args,
        javaArgs: javaArgs,
        install: false
      };
      return seleniumStart(wct, opts);
    });
  }

  exports.startSeleniumServer = startSeleniumServer;

  function installAndStartSeleniumServer(wct, args, javaArgs) {
    return __awaiter(this, void 0, void 0, function* () {
      wct.emit('log:info', 'Installing and starting Selenium server for local browsers');
      yield checkSeleniumEnvironment();
      const opts = {
        args: args,
        javaArgs: javaArgs,
        install: true
      };
      return seleniumStart(wct, opts);
    });
  }

  exports.installAndStartSeleniumServer = installAndStartSeleniumServer;

  function seleniumStart(wct, opts) {
    return __awaiter(this, void 0, void 0, function* () {
      const port = yield util_1.promisify(freeport)(); // See below.

      const log = [];

      function onOutput(data) {
        const message = data.toString();
        log.push(message);
        wct.emit('log:debug', message);
      }

      const config = SELENIUM_OVERRIDES || {};
      config.seleniumArgs = ['-port', port.toString()].concat(opts.args);
      config.javaArgs = opts.javaArgs || []; // Bookkeeping once the process starts.

      config.spawnCb = function (server) {
        // Make sure that we interrupt the selenium server ASAP.
        cleankill.onInterrupt(() => __awaiter(this, void 0, void 0, function* () {
          server.kill();
        }));
        server.stdout.on('data', onOutput);
        server.stderr.on('data', onOutput);
      };

      if (opts.install) {
        try {
          const options = SELENIUM_OVERRIDES || {};
          options.logger = onOutput;
          yield util_1.promisify(selenium.install)(options);
        } catch (error) {
          log.forEach(line => wct.emit('log:info', line));
          throw error;
        }
      }

      try {
        yield util_1.promisify(selenium.start)(config);
      } catch (error) {
        log.forEach(line => wct.emit('log:info', line));
        throw error;
      }

      wct.emit('log:info', 'Selenium server running on port', chalk_1.default.yellow(port.toString()));
      return port;
    });
  }

  return exports;
}