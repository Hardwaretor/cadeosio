import { dew as _typesDewDew } from "./types.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var types = _typesDewDew();

  exports.wordBoundary = function () {
    return {
      type: types.POSITION,
      value: 'b'
    };
  };

  exports.nonWordBoundary = function () {
    return {
      type: types.POSITION,
      value: 'B'
    };
  };

  exports.begin = function () {
    return {
      type: types.POSITION,
      value: '^'
    };
  };

  exports.end = function () {
    return {
      type: types.POSITION,
      value: '$'
    };
  };

  return exports;
}