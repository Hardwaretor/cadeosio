import _util from "util";
import { dew as _indexDewDew } from "signal-exit/index.dew.js";
import { dew as _indexDew2Dew } from "currently-unhandled/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var util = _util;

  var onExit = _indexDewDew();

  var currentlyUnhandled = _indexDew2Dew();

  var installed = false;

  exports = function (log) {
    if (installed) {
      return;
    }

    installed = true;
    log = log || console.error;
    var listUnhandled = currentlyUnhandled();
    onExit(function () {
      var unhandledRejections = listUnhandled();

      if (unhandledRejections.length > 0) {
        unhandledRejections.forEach(function (x) {
          var err = x.reason;

          if (!(err instanceof Error)) {
            err = new Error('Promise rejected with value: ' + util.inspect(err));
          }

          log(err.stack);
        });
        process.exitCode = 1;
      }
    });
  };

  return exports;
}