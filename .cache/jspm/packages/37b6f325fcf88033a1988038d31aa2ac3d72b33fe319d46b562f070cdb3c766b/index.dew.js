import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  exports = function (blocking) {
    [process.stdout, process.stderr].forEach(function (stream) {
      if (stream._handle && stream.isTTY && typeof stream._handle.setBlocking === 'function') {
        stream._handle.setBlocking(blocking);
      }
    });
  };

  return exports;
}