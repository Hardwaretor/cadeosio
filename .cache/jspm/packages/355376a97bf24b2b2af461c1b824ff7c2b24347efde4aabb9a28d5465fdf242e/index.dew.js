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
import { dew as _packageJsonDewDew } from "./package.json.dew.js";
import { dew as _padLevelsDewDew } from "./pad-levels.dew.js";
import { dew as _prettyPrintDewDew } from "./pretty-print.dew.js";
import { dew as _printfDewDew } from "./printf.dew.js";
import { dew as _simpleDewDew } from "./simple.dew.js";
import { dew as _splatDewDew } from "./splat.dew.js";
import { dew as _timestampDewDew } from "./timestamp.dew.js";
import { dew as _tsconfigJsonDewDew } from "./tsconfig.json.dew.js";
import { dew as _uncolorizeDewDew } from "./uncolorize.dew.js";
import { dew as _combineDew2Dew } from "./examples/combine.dew.js";
import { dew as _filterDewDew } from "./examples/filter.dew.js";
import { dew as _invalidDewDew } from "./examples/invalid.dew.js";
import { dew as _metadataDew2Dew } from "./examples/metadata.dew.js";
import { dew as _padLevelsDew2Dew } from "./examples/padLevels.dew.js";
import { dew as _volumeDewDew } from "./examples/volume.dew.js";
import { dew as _alignDew2Dew } from "./dist/align.dew.js";
import { dew as _browserDew2Dew } from "./dist/browser.dew.js";
import { dew as _cliDew2Dew } from "./dist/cli.dew.js";
import { dew as _colorizeDew2Dew } from "./dist/colorize.dew.js";
import { dew as _combineDew3Dew } from "./dist/combine.dew.js";
import { dew as _formatDew2Dew } from "./dist/format.dew.js";
import { dew as _indexDew2Dew } from "./dist/index.dew.js";
import { dew as _jsonDew2Dew } from "./dist/json.dew.js";
import { dew as _labelDew2Dew } from "./dist/label.dew.js";
import { dew as _levelsDew2Dew } from "./dist/levels.dew.js";
import { dew as _logstashDew2Dew } from "./dist/logstash.dew.js";
import { dew as _metadataDew3Dew } from "./dist/metadata.dew.js";
import { dew as _msDew2Dew } from "./dist/ms.dew.js";
import { dew as _padLevelsDew3Dew } from "./dist/pad-levels.dew.js";
import { dew as _prettyPrintDew2Dew } from "./dist/pretty-print.dew.js";
import { dew as _printfDew2Dew } from "./dist/printf.dew.js";
import { dew as _simpleDew2Dew } from "./dist/simple.dew.js";
import { dew as _splatDew2Dew } from "./dist/splat.dew.js";
import { dew as _timestampDew2Dew } from "./dist/timestamp.dew.js";
import { dew as _uncolorizeDew2Dew } from "./dist/uncolorize.dew.js";
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
  const format = exports.format = _formatDewDew();
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
      get() {
        return function (e) {
          return e === "align.dew" ? _alignDewDew() : e === "browser.dew" ? _browserDewDew() : e === "cli.dew" ? _cliDewDew() : e === "colorize.dew" ? _colorizeDewDew() : e === "combine.dew" ? _combineDewDew() : e === "format.dew" ? _formatDewDew() : e === "index.dew" ? _indexDewDew() : e === "json.dew" ? _jsonDewDew() : e === "label.dew" ? _labelDewDew() : e === "levels.dew" ? _levelsDewDew() : e === "logstash.dew" ? _logstashDewDew() : e === "metadata.dew" ? _metadataDewDew() : e === "ms.dew" ? _msDewDew() : e === "package.json.dew" ? _packageJsonDewDew() : e === "pad-levels.dew" ? _padLevelsDewDew() : e === "pretty-print.dew" ? _prettyPrintDewDew() : e === "printf.dew" ? _printfDewDew() : e === "simple.dew" ? _simpleDewDew() : e === "splat.dew" ? _splatDewDew() : e === "timestamp.dew" ? _timestampDewDew() : e === "tsconfig.json.dew" ? _tsconfigJsonDewDew() : e === "uncolorize.dew" ? _uncolorizeDewDew() : e === "examples/combine.dew" ? _combineDew2Dew() : e === "examples/filter.dew" ? _filterDewDew() : e === "examples/invalid.dew" ? _invalidDewDew() : e === "examples/metadata.dew" ? _metadataDew2Dew() : e === "examples/padLevels.dew" ? _padLevelsDew2Dew() : e === "examples/volume.dew" ? _volumeDewDew() : e === "dist/align.dew" ? _alignDew2Dew() : e === "dist/browser.dew" ? _browserDew2Dew() : e === "dist/cli.dew" ? _cliDew2Dew() : e === "dist/colorize.dew" ? _colorizeDew2Dew() : e === "dist/combine.dew" ? _combineDew3Dew() : e === "dist/format.dew" ? _formatDew2Dew() : e === "dist/index.dew" ? _indexDew2Dew() : e === "dist/json.dew" ? _jsonDew2Dew() : e === "dist/label.dew" ? _labelDew2Dew() : e === "dist/levels.dew" ? _levelsDew2Dew() : e === "dist/logstash.dew" ? _logstashDew2Dew() : e === "dist/metadata.dew" ? _metadataDew3Dew() : e === "dist/ms.dew" ? _msDew2Dew() : e === "dist/pad-levels.dew" ? _padLevelsDew3Dew() : e === "dist/pretty-print.dew" ? _prettyPrintDew2Dew() : e === "dist/printf.dew" ? _printfDew2Dew() : e === "dist/simple.dew" ? _simpleDew2Dew() : e === "dist/splat.dew" ? _splatDew2Dew() : e === "dist/timestamp.dew" ? _timestampDew2Dew() : e === "dist/uncolorize.dew" ? _uncolorizeDew2Dew() : null;
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