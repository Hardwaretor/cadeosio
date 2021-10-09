import { dew as _colorizeDewDew } from "./colorize.dew.js";
import { dew as _padLevelsDewDew } from "./pad-levels.dew.js";
import { dew as _indexDewDew } from "triple-beam/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const {
    Colorizer
  } = _colorizeDewDew();

  const {
    Padder
  } = _padLevelsDewDew();

  const {
    configs,
    MESSAGE
  } = _indexDewDew();
  /**
   * Cli format class that handles initial state for a a separate
   * Colorizer and Padder instance.
   */


  class CliFormat {
    constructor(opts = {}) {
      if (!opts.levels) {
        opts.levels = configs.npm.levels;
      }

      this.colorizer = new Colorizer(opts);
      this.padder = new Padder(opts);
      this.options = opts;
    }
    /*
     * function transform (info, opts)
     * Attempts to both:
     * 1. Pad the { level }
     * 2. Colorize the { level, message }
     * of the given `logform` info object depending on the `opts`.
     */


    transform(info, opts) {
      this.colorizer.transform(this.padder.transform(info, opts), opts);
      info[MESSAGE] = `${info.level}:${info.message}`;
      return info;
    }

  }
  /*
   * function cli (opts)
   * Returns a new instance of the CLI format that turns a log
   * `info` object into the same format previously available
   * in `winston.cli()` in `winston < 3.0.0`.
   */


  exports = opts => new CliFormat(opts); //
  // Attach the CliFormat for registration purposes
  //


  exports.Format = CliFormat;
  return exports;
}