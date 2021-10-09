import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _levelsDewDew } from "./levels.dew.js";
import { dew as _alignDewDew } from "./align.dew.js";
import { dew as _browserDewDew } from "./browser.dew.js";
import { dew as _cliDewDew } from "./cli.dew.js";
import { dew as _colorizeDewDew } from "./colorize.dew.js";
import { dew as _combineDewDew } from "./combine.dew.js";
import { dew as _indexDewDew } from "./index.dew.js";
import { dew as _jsonDewDew } from "./json.dew.js";
import { dew as _labelDewDew } from "./label.dew.js";
import { dew as _logstashDewDew } from "./logstash.dew.js";
import { dew as _metadataDewDew } from "./metadata.dew.js";
import { dew as _msDewDew } from "./ms.dew.js";
import { dew as _padLevelsDewDew } from "./pad-levels.dew.js";
import { dew as _prettyPrintDewDew } from "./pretty-print.dew.js";
import { dew as _printfDewDew } from "./printf.dew.js";
import { dew as _simpleDewDew } from "./simple.dew.js";
import { dew as _splatDewDew } from "./splat.dew.js";
import { dew as _timestampDewDew } from "./timestamp.dew.js";
import { dew as _uncolorizeDewDew } from "./uncolorize.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*
   * @api public
   * @property {function} format
   * Both the construction method and set of exposed
   * formats.
   */
  var format = exports.format = _formatDewDew();
  /*
   * @api public
   * @method {function} levels
   * Registers the specified levels with logform.
   */


  exports.levels = _levelsDewDew();
  /*
   * @api private
   * method {function} exposeFormat
   * Exposes a sub-format on the main format object
   * as a lazy-loaded getter.
   */

  function exposeFormat(name, path) {
    path = path || name;
    Object.defineProperty(format, name, {
      get: function get() {
        return function (e) {
          return e === "align.dew" ? _alignDewDew() : e === "browser.dew" ? _browserDewDew() : e === "cli.dew" ? _cliDewDew() : e === "colorize.dew" ? _colorizeDewDew() : e === "combine.dew" ? _combineDewDew() : e === "format.dew" ? _formatDewDew() : e === "index.dew" ? _indexDewDew() : e === "json.dew" ? _jsonDewDew() : e === "label.dew" ? _labelDewDew() : e === "levels.dew" ? _levelsDewDew() : e === "logstash.dew" ? _logstashDewDew() : e === "metadata.dew" ? _metadataDewDew() : e === "ms.dew" ? _msDewDew() : e === "pad-levels.dew" ? _padLevelsDewDew() : e === "pretty-print.dew" ? _prettyPrintDewDew() : e === "printf.dew" ? _printfDewDew() : e === "simple.dew" ? _simpleDewDew() : e === "splat.dew" ? _splatDewDew() : e === "timestamp.dew" ? _timestampDewDew() : e === "uncolorize.dew" ? _uncolorizeDewDew() : null;
        }(path);
      },
      configurable: true
    });
  } //
  // Setup all transports as lazy-loaded getters.
  //


  exposeFormat('align');
  exposeFormat('cli');
  exposeFormat('combine');
  exposeFormat('colorize');
  exposeFormat('json');
  exposeFormat('label');
  exposeFormat('logstash');
  exposeFormat('metadata');
  exposeFormat('ms');
  exposeFormat('padLevels', 'pad-levels');
  exposeFormat('prettyPrint', 'pretty-print');
  exposeFormat('printf');
  exposeFormat('simple');
  exposeFormat('splat');
  exposeFormat('timestamp');
  exposeFormat('uncolorize');
  return exports;
}