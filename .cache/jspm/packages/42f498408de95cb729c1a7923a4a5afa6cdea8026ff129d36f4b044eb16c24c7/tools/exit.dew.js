import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  // workaround for tty output truncation upon process.exit()
  var exit = process.exit;

  process.exit = function () {
    var args = [].slice.call(arguments);
    process.once("uncaughtException", function () {
      (function callback() {
        if (process.stdout.bufferSize || process.stderr.bufferSize) {
          setImmediate(callback);
        } else {
          exit.apply(process, args);
        }
      })();
    });
    throw exit;
  };

  return exports;
}