import _fs from "fs";
import { dew as _indexDewDew } from "shebang-command/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  const fs = _fs;

  const shebangCommand = _indexDewDew();

  function readShebang(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    const buffer = Buffer.alloc(size);
    let fd;

    try {
      fd = fs.openSync(command, 'r');
      fs.readSync(fd, buffer, 0, size, 0);
      fs.closeSync(fd);
    } catch (e) {
      /* Empty */
    } // Attempt to extract shebang (null is returned if not a shebang)


    return shebangCommand(buffer.toString());
  }

  exports = readShebang;
  return exports;
}