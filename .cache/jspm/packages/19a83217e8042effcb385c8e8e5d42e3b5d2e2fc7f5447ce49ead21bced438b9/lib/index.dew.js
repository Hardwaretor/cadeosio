import { dew as _formattingDewDew } from "./formatting.dew.js";
import { dew as _normalizationDewDew } from "./normalization.dew.js";
import { dew as _parsingDewDew } from "./parsing.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var formatting = _formattingDewDew();

  var normalization = _normalizationDewDew();

  var parsing = _parsingDewDew();

  exports = {
    // Shorthands for your convenience.
    normalize: normalization.normalize,
    parse: parsing.parse,
    pretty: formatting.pretty,
    // Or the full modules.
    formatting: formatting,
    normalization: normalization,
    parsing: parsing
  };
  return exports;
}