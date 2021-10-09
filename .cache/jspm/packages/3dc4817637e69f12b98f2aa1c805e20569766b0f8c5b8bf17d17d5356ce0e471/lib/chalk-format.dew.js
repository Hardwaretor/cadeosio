import { dew as _indexDewDew } from "chalk/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function chalkFormat(str) {
    if (str) {
      str = str.replace(/`/g, '\\`');

      const chalk = _indexDewDew();

      return chalk(Object.assign([], {
        raw: [str]
      }));
    } else {
      return '';
    }
  }

  exports = chalkFormat;
  return exports;
}