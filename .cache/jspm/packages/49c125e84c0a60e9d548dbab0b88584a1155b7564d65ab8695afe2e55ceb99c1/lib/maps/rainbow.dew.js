import { dew as _colorsDewDew } from "../colors.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var colors = _colorsDewDew();

  exports = function () {
    var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV

    return function (letter, i, exploded) {
      if (letter === " ") {
        return letter;
      } else {
        return colors[rainbowColors[i++ % rainbowColors.length]](letter);
      }
    };
  }();

  return exports;
}