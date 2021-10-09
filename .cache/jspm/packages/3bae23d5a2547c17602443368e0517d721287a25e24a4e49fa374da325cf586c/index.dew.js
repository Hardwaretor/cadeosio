import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var ogWrite = process.stdout.write;
  var muteStdout = {
    mute: mute,
    unmute: noop
  };

  function noop() {}

  function mute() {
    muteStdout.unmute = unmute;
    process.stdout.write = noop;
  }

  function unmute() {
    process.stdout.write = ogWrite;
    muteStdout.unmute = noop;
  }

  exports = muteStdout;
  return exports;
}