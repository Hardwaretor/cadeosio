import _child_process from "child_process";
import { dew as _parseDewDew } from "./lib/parse.dew.js";
import { dew as _enoentDewDew } from "./lib/enoent.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const cp = _child_process;

  const parse = _parseDewDew();

  const enoent = _enoentDewDew();

  function spawn(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options); // Spawn the child process

    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options); // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16

    enoent.hookChildProcess(spawned, parsed);
    return spawned;
  }

  function spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options); // Spawn the child process

    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options); // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16

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