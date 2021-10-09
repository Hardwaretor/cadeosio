import _child_process from "child_process";
import { dew as _parseDewDew } from "./lib/parse.dew.js";
import { dew as _enoentDewDew } from "./lib/enoent.dew.js";
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

  var cp = _child_process;

  var parse = _parseDewDew();

  var enoent = _enoentDewDew();

  var cpSpawnSync = cp.spawnSync;

  function spawn(command, args, options) {
    var parsed;
    var spawned; // Parse the arguments

    parsed = parse(command, args, options); // Spawn the child process

    spawned = cp.spawn(parsed.command, parsed.args, parsed.options); // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16

    enoent.hookChildProcess(spawned, parsed);
    return spawned;
  }

  function spawnSync(command, args, options) {
    var parsed;
    var result;

    if (!cpSpawnSync) {
      try {
        cpSpawnSync = _nodeRequire('spawn-sync'); // eslint-disable-line global-require
      } catch (ex) {
        throw new Error('In order to use spawnSync on node 0.10 or older, you must ' + 'install spawn-sync:\n\n' + '  npm install spawn-sync --save');
      }
    } // Parse the arguments


    parsed = parse(command, args, options); // Spawn the child process

    result = cpSpawnSync(parsed.command, parsed.args, parsed.options); // Analyze if the command does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16

    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
    return result;
  }

  exports = spawn;
  exports.spawn = spawn;
  exports.sync = spawnSync;
  exports._parse = parse;
  exports._enoent = enoent;
  return exports;
}