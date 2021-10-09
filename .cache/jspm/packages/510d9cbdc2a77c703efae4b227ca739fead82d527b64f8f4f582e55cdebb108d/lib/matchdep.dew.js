import { dew as _indexDewDew } from "micromatch/index.dew.js";
import { dew as _indexDew2Dew } from "findup-sync/index.dew.js";
import { dew as _indexDew3Dew } from "resolve/index.dew.js";
import { dew as _indexDew4Dew } from "stack-trace/index.dew.js";
import _path from "path";
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

  var micromatch = _indexDewDew();

  var findup = _indexDew2Dew();

  var resolve = _indexDew3Dew().sync;

  var stackTrace = _indexDew4Dew();

  var path = _path; // export object

  var matchdep = exports = {}; // Ensure configuration has the correct properties.

  function loadConfig(config, props) {
    // The calling module's path. Unfortunately, because modules are cached,
    // module.parent is the FIRST calling module parent, not necessarily the
    // current one.
    var callerPath = path.dirname(stackTrace.get(loadConfig)[1].getFileName()); // If no config defined, resolve to nearest package.json to the calling lib. If not found, throw an error.

    if (config == null) {
      config = findup('package.json', {
        cwd: callerPath
      });

      if (config == null) {
        throw new Error('No package.json found.');
      }
    } // If filename was specified with no path parts, make the path absolute so
    // that resolve doesn't look in node_module directories for it.
    else if (typeof config === 'string' && !/[\\\/]/.test(config)) {
        config = path.join(callerPath, config);
      } // If package is a string, try to require it.


    if (typeof config === 'string') {
      config = _nodeRequire(resolve(config, {
        basedir: callerPath
      }));
    } // If config is not an object yet, something is amiss.


    if (typeof config !== 'object') {
      throw new Error('Invalid configuration specified.');
    } // For all specified props, populate result object.


    var result = {};
    props.forEach(function (prop) {
      result[prop] = config[prop] ? Object.keys(config[prop]) : [];
    });
    return result;
  } // What config properties should each method search?


  var methods = {
    filter: ['dependencies'],
    filterDev: ['devDependencies'],
    filterPeer: ['peerDependencies'],
    filterAll: ['dependencies', 'devDependencies', 'peerDependencies']
  }; // Dynamically generate methods.

  Object.keys(methods).forEach(function (method) {
    var props = methods[method];

    matchdep[method] = function (pattern, config) {
      config = loadConfig(config, props);
      var search = props.reduce(function (result, prop) {
        return result.concat(config[prop]);
      }, []);
      return micromatch(search, pattern);
    };
  });
  return exports;
}