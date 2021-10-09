import _fs from "fs";
import { dew as _indexDewDew } from "lru-cache/index.dew.js";
import { dew as _indexDew2Dew } from "shebang-command/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  var fs = _fs;

  var LRU = _indexDewDew();

  var shebangCommand = _indexDew2Dew();

  var shebangCache = new LRU({
    max: 50,
    maxAge: 30 * 1000
  }); // Cache just for 30sec

  function readShebang(command) {
    var buffer;
    var fd;
    var shebang; // Check if it is in the cache first

    if (shebangCache.has(command)) {
      return shebangCache.get(command);
    } // Read the first 150 bytes from the file


    buffer = new Buffer(150);

    try {
      fd = fs.openSync(command, 'r');
      fs.readSync(fd, buffer, 0, 150, 0);
      fs.closeSync(fd);
    } catch (e) {
      /* empty */
    } // Attempt to extract shebang (null is returned if not a shebang)


    shebang = shebangCommand(buffer.toString()); // Store the shebang in the cache

    shebangCache.set(command, shebang);
    return shebang;
  }

  exports = readShebang;
  return exports;
}