import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  // See: https://github.com/IndigoUnited/node-cross-spawn/pull/34#issuecomment-221623455
  function hasEmptyArgumentBug() {
    var nodeVer;

    if (process.platform !== 'win32') {
      return false;
    }

    nodeVer = process.version.substr(1).split('.').map(function (num) {
      return parseInt(num, 10);
    });
    return nodeVer[0] === 0 && nodeVer[1] < 12;
  }

  exports = hasEmptyArgumentBug();
  return exports;
}