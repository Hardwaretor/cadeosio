import { dew as _colorsDewDew } from "../colors.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var colors = _colorsDewDew();

  exports = function (letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };

  return exports;
}