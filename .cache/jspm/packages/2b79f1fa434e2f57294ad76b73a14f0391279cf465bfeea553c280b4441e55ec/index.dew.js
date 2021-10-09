import _fs from "fs";
import { dew as _indexDewDew } from "pify/index.dew.js";
import { dew as _indexDew2Dew } from "p-try/index.dew.js";
import { dew as _indexDew3Dew } from "p-finally/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const fs = _fs;

  const pify = _indexDewDew();

  const pTry = _indexDew2Dew();

  const pFinally = _indexDew3Dew();

  const fsP = pify(fs);

  exports = (...args) => {
    const callback = args.pop();
    return fsP.open(...args).then(fd => pFinally(pTry(callback, fd), _ => fsP.close(fd)));
  };

  exports.sync = (...args) => {
    const callback = args.pop();
    const fd = fs.openSync(...args);

    try {
      return callback(fd);
    } finally {
      fs.closeSync(fd);
    }
  };

  return exports;
}