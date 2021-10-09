import { dew as _indexDewDew } from "package-json/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const packageJson = _indexDewDew();

  exports = name => packageJson(name.toLowerCase()).then(data => data.version);

  return exports;
}