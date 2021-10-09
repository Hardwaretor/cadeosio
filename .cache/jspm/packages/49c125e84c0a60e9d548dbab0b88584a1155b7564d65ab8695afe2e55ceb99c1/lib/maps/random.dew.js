import { dew as _colorsDewDew } from "../colors.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var colors = _colorsDewDew();

  exports = function () {
    var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];
    return function (letter, i, exploded) {
      return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 1))]](letter);
    };
  }();

  return exports;
}