import { dew as _indexDewDew } from "restore-cursor/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  const restoreCursor = _indexDewDew();

  let isHidden = false;

  exports.show = (writableStream = process.stderr) => {
    if (!writableStream.isTTY) {
      return;
    }

    isHidden = false;
    writableStream.write('\u001B[?25h');
  };

  exports.hide = (writableStream = process.stderr) => {
    if (!writableStream.isTTY) {
      return;
    }

    restoreCursor();
    isHidden = true;
    writableStream.write('\u001B[?25l');
  };

  exports.toggle = (force, writableStream) => {
    if (force !== undefined) {
      isHidden = force;
    }

    if (isHidden) {
      exports.show(writableStream);
    } else {
      exports.hide(writableStream);
    }
  };

  return exports;
}