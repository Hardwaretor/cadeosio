import { dew as _packageJsonDewDew } from "./package.json.dew.js";
import { dew as _sauceBrowsersDewDew } from "./sauce.browsers.dew.js";
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

  var version = _packageJsonDewDew().version;

  var ts = new Date().getTime();

  exports = function (config) {
    var auth;

    try {
      auth = _nodeRequire('./test/auth/index');
    } catch (ex) {
      auth = {};
      auth.SAUCE_USERNAME = process.env.SAUCE_USERNAME || null;
      auth.SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY || null;
    }

    if (!auth.SAUCE_USERNAME || !auth.SAUCE_ACCESS_KEY) return;
    if (process.env.SKIP_SAUCE) return;
    var branch = process.env.TRAVIS_BRANCH || 'local';

    var browserConfig = _sauceBrowsersDewDew();

    var browsers = Object.keys(browserConfig);
    var tags = ['chaijs_' + version, auth.SAUCE_USERNAME + '@' + branch];
    var tunnel = process.env.TRAVIS_JOB_NUMBER || ts;

    if (process.env.TRAVIS_JOB_NUMBER) {
      tags.push('travis@' + process.env.TRAVIS_JOB_NUMBER);
    }

    config.browsers = config.browsers.concat(browsers);
    config.customLaunchers = browserConfig;
    config.reporters.push('saucelabs');
    config.captureTimeout = 300000;
    config.sauceLabs = {
      username: auth.SAUCE_USERNAME,
      accessKey: auth.SAUCE_ACCESS_KEY,
      startConnect: 'TRAVIS' in process.env === false,
      tags: tags,
      testName: 'ChaiJS',
      tunnelIdentifier: tunnel
    };
  };

  return exports;
}