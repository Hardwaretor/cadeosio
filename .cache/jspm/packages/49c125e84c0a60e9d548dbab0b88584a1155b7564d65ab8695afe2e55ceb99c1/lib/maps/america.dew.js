import { dew as _colorsDewDew } from "../colors.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var colors = _colorsDewDew();

  exports = function () {
    return function (letter, i, exploded) {
      if (letter === " ") return letter;

      switch (i % 3) {
        case 0:
          return colors.red(letter);

        case 1:
          return colors.white(letter);

        case 2:
          return colors.blue(letter);
      }
    };
  }();

  return exports;
}