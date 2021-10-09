var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function readDir(file, opt, cb) {
    // Do nothing for now
    cb(null, file);
  }

  exports = readDir;
  return exports;
}