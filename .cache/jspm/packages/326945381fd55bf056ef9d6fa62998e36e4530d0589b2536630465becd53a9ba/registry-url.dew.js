import { dew as _indexDewDew } from "rc/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (scope, npmrc) {
    var rc = npmrc || _indexDewDew()('npm', {
      registry: 'https://registry.npmjs.org/'
    });

    var url = rc[scope + ':registry'] || rc.registry;
    return url.slice(-1) === '/' ? url : url + '/';
  };

  return exports;
}