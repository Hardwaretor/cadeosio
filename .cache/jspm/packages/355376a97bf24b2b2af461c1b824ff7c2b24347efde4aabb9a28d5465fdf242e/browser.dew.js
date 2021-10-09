import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _levelsDewDew } from "./levels.dew.js";
import { dew as _alignDewDew } from "./align.dew.js";
import { dew as _cliDewDew } from "./cli.dew.js";
import { dew as _combineDewDew } from "./combine.dew.js";
import { dew as _colorizeDewDew } from "./colorize.dew.js";
import { dew as _jsonDewDew } from "./json.dew.js";
import { dew as _labelDewDew } from "./label.dew.js";
import { dew as _logstashDewDew } from "./logstash.dew.js";
import { dew as _metadataDewDew } from "./metadata.dew.js";
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
  const format = exports.format = _formatDewDew();
  /*
   * @api public
   * @method {function} levels
   * Registers the specified levels with logform.
   */


  exports.levels = _levelsDewDew(); //
  // Setup all transports as eager-loaded exports
  // so that they are static for the bundlers.
  //

  Object.defineProperty(format, 'align', {
    value: _alignDewDew()
  });
  Object.defineProperty(format, 'cli', {
    value: _cliDewDew()
  });
  Object.defineProperty(format, 'combine', {
    value: _combineDewDew()
  });
  Object.defineProperty(format, 'colorize', {
    value: _colorizeDewDew()
  });
  Object.defineProperty(format, 'json', {
    value: _jsonDewDew()
  });
  Object.defineProperty(format, 'label', {
    value: _labelDewDew()
  });
  Object.defineProperty(format, 'logstash', {
    value: _logstashDewDew()
  });
  Object.defineProperty(format, 'metadata', {
    value: _metadataDewDew()
  });
  Object.defineProperty(format, 'padLevels', {
    value: _padLevelsDewDew()
  });
  Object.defineProperty(format, 'prettyPrint', {
    value: _prettyPrintDewDew()
  });
  Object.defineProperty(format, 'printf', {
    value: _printfDewDew()
  });
  Object.defineProperty(format, 'simple', {
    value: _simpleDewDew()
  });
  Object.defineProperty(format, 'splat', {
    value: _splatDewDew()
  });
  Object.defineProperty(format, 'timestamp', {
    value: _timestampDewDew()
  });
  Object.defineProperty(format, 'uncolorize', {
    value: _uncolorizeDewDew()
  });
  return exports;
}