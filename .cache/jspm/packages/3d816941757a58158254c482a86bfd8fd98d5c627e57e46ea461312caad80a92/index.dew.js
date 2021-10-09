import _tty from "tty";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = exports = cliWidth;

  function normalizeOpts(options) {
    let defaultOpts = {
      defaultWidth: 0,
      output: process.stdout,
      tty: _tty
    };

    if (!options) {
      return defaultOpts;
    }

    Object.keys(defaultOpts).forEach(function (key) {
      if (!options[key]) {
        options[key] = defaultOpts[key];
      }
    });
    return options;
  }

  function cliWidth(options) {
    let opts = normalizeOpts(options);

    if (opts.output.getWindowSize) {
      return opts.output.getWindowSize()[0] || opts.defaultWidth;
    }

    if (opts.tty.getWindowSize) {
      return opts.tty.getWindowSize()[1] || opts.defaultWidth;
    }

    if (opts.output.columns) {
      return opts.output.columns;
    }

    if (process.env.CLI_WIDTH) {
      let width = parseInt(process.env.CLI_WIDTH, 10);

      if (!isNaN(width) && width !== 0) {
        return width;
      }
    }

    return opts.defaultWidth;
  }

  return exports;
}