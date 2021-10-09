import _path from "path";
import { dew as _indexDewDew } from "which/index.dew.js";
import { dew as _indexDew2Dew } from "lru-cache/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var path = _path;

  var which = _indexDewDew();

  var LRU = _indexDew2Dew();

  var commandCache = new LRU({
    max: 50,
    maxAge: 30 * 1000
  }); // Cache just for 30sec

  function resolveCommand(command, noExtension) {
    var resolved;
    noExtension = !!noExtension;
    resolved = commandCache.get(command + '!' + noExtension); // Check if its resolved in the cache

    if (commandCache.has(command)) {
      return commandCache.get(command);
    }

    try {
      resolved = !noExtension ? which.sync(command) : which.sync(command, {
        pathExt: path.delimiter + (process.env.PATHEXT || '')
      });
    } catch (e) {
      /* empty */
    }

    commandCache.set(command + '!' + noExtension, resolved);
    return resolved;
  }

  exports = resolveCommand;
  return exports;
}