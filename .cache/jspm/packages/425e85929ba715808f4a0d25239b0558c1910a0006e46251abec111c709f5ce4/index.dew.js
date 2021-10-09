import _child_process from "child_process";
import { dew as _spawnSyncDewDew } from "./lib/spawn-sync.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _child_process.spawnSync || _spawnSyncDewDew();
  return exports;
}