import { dew as _indexDewDew } from "logform/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /* eslint no-unused-vars: 0 */
  const {
    format
  } = _indexDewDew();

  const invalid = format(function invalid(just, too, many, args) {
    return just;
  });
  return exports;
}