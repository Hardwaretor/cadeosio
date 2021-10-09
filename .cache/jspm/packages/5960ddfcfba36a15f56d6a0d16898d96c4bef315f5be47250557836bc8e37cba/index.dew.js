import { dew as _indexDewDew } from "onetime/index.dew.js";
import { dew as _indexDew2Dew } from "signal-exit/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  const onetime = _indexDewDew();

  const signalExit = _indexDew2Dew();

  exports = onetime(() => {
    signalExit(() => {
      process.stderr.write('\u001B[?25h');
    }, {
      alwaysLast: true
    });
  });
  return exports;
}