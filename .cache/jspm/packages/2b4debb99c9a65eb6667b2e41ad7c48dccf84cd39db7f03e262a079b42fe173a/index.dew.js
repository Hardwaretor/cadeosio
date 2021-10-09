import { dew as _indexDewDew } from "package-json/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var packageJson = _indexDewDew();

  exports = function (name) {
    return packageJson(name.toLowerCase(), 'latest').then(function (data) {
      return data.version;
    });
  };

  return exports;
}