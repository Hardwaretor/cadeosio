import _path from "path";
import { dew as _indexDewDew } from "minimist/index.dew.js";
import { dew as _indexDew2Dew } from "object-assign/index.dew.js";
import { dew as _indexDew3Dew } from "camelcase-keys/index.dew.js";
import { dew as _indexDew4Dew } from "decamelize/index.dew.js";
import { dew as _indexDew5Dew } from "map-obj/index.dew.js";
import { dew as _indexDew6Dew } from "trim-newlines/index.dew.js";
import { dew as _indexDew7Dew } from "redent/index.dew.js";
import { dew as _indexDew8Dew } from "read-pkg-up/index.dew.js";
import { dew as _indexDew9Dew } from "loud-rejection/index.dew.js";
import { dew as _indexDew10Dew } from "normalize-package-data/index.dew.js";
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
  var path = _path;

  var minimist = _indexDewDew();

  var objectAssign = _indexDew2Dew();

  var camelcaseKeys = _indexDew3Dew();

  var decamelize = _indexDew4Dew();

  var mapObj = _indexDew5Dew();

  var trimNewlines = _indexDew6Dew();

  var redent = _indexDew7Dew();

  var readPkgUp = _indexDew8Dew();

  var loudRejection = _indexDew9Dew();

  var normalizePackageData = _indexDew10Dew(); // get the uncached parent


  delete {}[import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url).pathname];
  var parentDir = path.dirname(undefined.filename);

  exports = function (opts, minimistOpts) {
    loudRejection();

    if (Array.isArray(opts) || typeof opts === 'string') {
      opts = {
        help: opts
      };
    }

    opts = objectAssign({
      pkg: readPkgUp.sync({
        cwd: parentDir,
        normalize: false
      }).pkg,
      argv: process.argv.slice(2)
    }, opts);
    minimistOpts = objectAssign({}, minimistOpts);
    minimistOpts.default = mapObj(minimistOpts.default || {}, function (key, value) {
      return [decamelize(key, '-'), value];
    });

    if (Array.isArray(opts.help)) {
      opts.help = opts.help.join('\n');
    }

    var pkg = typeof opts.pkg === 'string' ? _nodeRequire(path.join(parentDir, opts.pkg)) : opts.pkg;
    var argv = minimist(opts.argv, minimistOpts);
    var help = redent(trimNewlines(opts.help || ''), 2);
    normalizePackageData(pkg);
    process.title = pkg.bin ? Object.keys(pkg.bin)[0] : pkg.name;
    var description = opts.description;

    if (!description && description !== false) {
      description = pkg.description;
    }

    help = (description ? '\n  ' + description + '\n' : '') + (help ? '\n' + help : '\n');

    var showHelp = function (code) {
      console.log(help);
      process.exit(code || 0);
    };

    if (argv.version && opts.version !== false) {
      console.log(typeof opts.version === 'string' ? opts.version : pkg.version);
      process.exit();
    }

    if (argv.help && opts.help !== false) {
      showHelp();
    }

    var _ = argv._;
    delete argv._;
    return {
      input: _,
      flags: camelcaseKeys(argv),
      pkg: pkg,
      help: help,
      showHelp: showHelp
    };
  };

  return exports;
}