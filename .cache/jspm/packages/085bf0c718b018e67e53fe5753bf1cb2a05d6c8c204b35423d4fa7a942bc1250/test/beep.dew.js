import { dew as _indexDewDew } from "../index.dew.js";
import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  var test = _nodeRequire('tape');

  var archy = _indexDewDew();

  test('beep', function (t) {
    var s = archy({
      label: 'beep',
      nodes: ['ity', {
        label: 'boop',
        nodes: [{
          label: 'o_O',
          nodes: [{
            label: 'oh',
            nodes: ['hello', 'puny']
          }, 'human']
        }, 'party!']
      }]
    });
    t.equal(s, ['beep', '├── ity', '└─┬ boop', '  ├─┬ o_O', '  │ ├─┬ oh', '  │ │ ├── hello', '  │ │ └── puny', '  │ └── human', '  └── party!', ''].join('\n'));
    t.end();
  });
  return exports;
}