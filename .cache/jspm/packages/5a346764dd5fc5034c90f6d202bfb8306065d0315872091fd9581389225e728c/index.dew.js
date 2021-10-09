import { dew as _indexDewDew } from "string-width/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const stringWidth = _indexDewDew();

  exports = input => {
    let max = 0;

    for (const s of input.split('\n')) max = Math.max(max, stringWidth(s));

    return max;
  };

  return exports;
}