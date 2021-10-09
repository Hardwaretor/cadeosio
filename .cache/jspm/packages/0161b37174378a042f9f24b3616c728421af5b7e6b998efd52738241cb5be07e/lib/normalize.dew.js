import _path from "path";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var path = _path;

  function normalize(str) {
    return str === '' ? str : path.normalize(str);
  }

  exports = normalize;
  return exports;
}