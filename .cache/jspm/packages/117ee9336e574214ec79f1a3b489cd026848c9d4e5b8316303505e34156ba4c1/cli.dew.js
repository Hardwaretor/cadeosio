import { dew as _indexDewDew } from "meow/index.dew.js";
import _path from "path";
import { dew as _packageJsonDewDew } from "./package.json.dew.js";
import { dew as _swPrecacheDewDew } from "./lib/sw-precache.dew.js";
import { dew as _indexDew2Dew } from "update-notifier/index.dew.js";
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

  var meow = _indexDewDew();

  var path = _path;

  var pkg = _packageJsonDewDew();

  var swPrecache = _swPrecacheDewDew();

  var updateNotifier = _indexDew2Dew();

  updateNotifier({
    pkg: pkg
  }).notify();

  function setDefaults(cli, configFileFlags) {
    var compositeFlags = cli.flags;
    compositeFlags.root = compositeFlags.root || configFileFlags.root || './';

    if (compositeFlags.root.lastIndexOf('/') !== compositeFlags.root.length - 1) {
      compositeFlags.root += '/';
    }

    compositeFlags.stripPrefix = compositeFlags.stripPrefix || configFileFlags.stripPrefix || compositeFlags.root;
    compositeFlags.stripPrefixMulti = compositeFlags.stripPrefixMulti || configFileFlags.stripPrefixMulti || {};
    compositeFlags.swFile = compositeFlags.swFile || configFileFlags.swFile || 'service-worker.js';
    compositeFlags.swFilePath = compositeFlags.swFilePath || configFileFlags.swFilePath || path.join(compositeFlags.root, compositeFlags.swFile);
    compositeFlags.cacheId = compositeFlags.cacheId || configFileFlags.cacheId || cli.pkg.name;
    compositeFlags.dynamicUrlToDependencies = compositeFlags.dynamicUrlToDependencies || configFileFlags.dynamicUrlToDependencies;
    compositeFlags.directoryIndex = compositeFlags.directoryIndex || configFileFlags.directoryIndex;
    compositeFlags.navigateFallback = compositeFlags.navigateFallback || configFileFlags.navigateFallback;
    compositeFlags.navigateFallbackWhitelist = compositeFlags.navigateFallbackWhitelist || configFileFlags.navigateFallbackWhitelist;
    compositeFlags.staticFileGlobs = compositeFlags.staticFileGlobs || configFileFlags.staticFileGlobs;

    if (compositeFlags.staticFileGlobs) {
      if (typeof compositeFlags.staticFileGlobs === 'string') {
        compositeFlags.staticFileGlobs = [compositeFlags.staticFileGlobs];
      }
    } else {
      compositeFlags.staticFileGlobs = [compositeFlags.root + '/**/*.*'];
    }

    compositeFlags.ignoreUrlParametersMatching = compositeFlags.ignoreUrlParametersMatching || configFileFlags.ignoreUrlParametersMatching;

    if (compositeFlags.ignoreUrlParametersMatching && typeof compositeFlags.ignoreUrlParametersMatching === 'string') {
      compositeFlags.ignoreUrlParametersMatching = compositeFlags.ignoreUrlParametersMatching.split(',').map(function (s) {
        return new RegExp(s);
      });
    }

    compositeFlags.importScripts = compositeFlags.importScripts || configFileFlags.importScripts;

    if (compositeFlags.importScripts && typeof compositeFlags.importScripts === 'string') {
      compositeFlags.importScripts = compositeFlags.importScripts.split(',');
    }

    compositeFlags.runtimeCaching = compositeFlags.runtimeCaching || configFileFlags.runtimeCaching;
    compositeFlags.templateFilePath = compositeFlags.templateFilePath || configFileFlags.templateFilePath;
    compositeFlags.maximumFileSizeToCacheInBytes = compositeFlags.maximumFileSizeToCacheInBytes || configFileFlags.maximumFileSizeToCacheInBytes; // We can't just use ||, since compositeFlags.skipWaiting might be false.

    compositeFlags.skipWaiting = 'skipWaiting' in compositeFlags ? compositeFlags.skipWaiting : 'skipWaiting' in configFileFlags ? configFileFlags.skipWaiting : undefined; // We can't just use ||, since compositeFlags.clientsClaim might be false.

    compositeFlags.clientsClaim = 'clientsClaim' in compositeFlags ? compositeFlags.clientsClaim : 'clientsClaim' in configFileFlags ? configFileFlags.clientsClaim : undefined;
    compositeFlags.dontCacheBustUrlsMatching = compositeFlags.dontCacheBustUrlsMatching || configFileFlags.dontCacheBustUrlsMatching;
    return compositeFlags;
  }

  var cli = meow({
    help: 'Options from https://github.com/GoogleChrome/sw-precache#options ' + 'are accepted as flags.\nAlternatively, use --config <file>, where ' + '<file> is the path to a JavaScript file that defines the same ' + 'options via module.exports.\n' + 'When both a config file and command line option is given, the ' + 'command line option takes precedence.'
  }); // If the --config option is used, then read the options from an external
  // JSON configuration file. Options from the --config file can be overwritten
  // by any command line options.

  var configFileFlags = cli.flags.config ? _nodeRequire(path.resolve(cli.flags.config)) : {};
  var options = setDefaults(cli, configFileFlags);
  swPrecache.write(options.swFilePath, options, function (error) {
    if (error) {
      console.error(error.stack);
      process.exit(1);
    }

    console.log(options.swFilePath, 'has been generated with the service worker contents.');
  });
  return exports;
}