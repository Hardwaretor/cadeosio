import _path from "path";
import { dew as _indexDewDew } from "graceful-fs/index.dew.js";
import { dew as _indexDew2Dew } from "strip-bom-buf/index.dew.js";
import { dew as _indexDew3Dew } from "strip-bom-stream/index.dew.js";
import { dew as _indexDew4Dew } from "vinyl/index.dew.js";
import { dew as _indexDew5Dew } from "pify/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  const path = _path;

  const fs = _indexDewDew();

  const stripBomBuf = _indexDew2Dew();

  const stripBomStream = _indexDew3Dew();

  const File = _indexDew4Dew();

  const pify = _indexDew5Dew();

  const fsP = pify(fs);

  exports.read = (pth, opts) => {
    opts = opts || {};
    const cwd = opts.cwd || process.cwd();
    const base = opts.base || cwd;
    pth = path.resolve(cwd, pth);
    return fsP.stat(pth).then(stat => {
      const file = new File({
        cwd,
        base,
        path: pth,
        stat
      });

      if (opts.read === false) {
        return file;
      }

      if (opts.buffer === false) {
        file.contents = fs.createReadStream(pth).pipe(stripBomStream());
        return file;
      }

      return fsP.readFile(pth).then(contents => {
        file.contents = stripBomBuf(contents);
        return file;
      });
    });
  };

  exports.readSync = (pth, opts) => {
    opts = opts || {};
    const cwd = opts.cwd || process.cwd();
    const base = opts.base || cwd;
    pth = path.resolve(cwd, pth);
    let contents;

    if (opts.read !== false) {
      contents = opts.buffer === false ? fs.createReadStream(pth).pipe(stripBomStream()) : stripBomBuf(fs.readFileSync(pth));
    }

    return new File({
      cwd,
      base,
      path: pth,
      stat: fs.statSync(pth),
      contents
    });
  };

  return exports;
}