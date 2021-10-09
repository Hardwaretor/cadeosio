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

  test('multi-line', function (t) {
    var s = archy({
      label: 'beep\none\ntwo',
      nodes: ['ity', {
        label: 'boop',
        nodes: [{
          label: 'o_O\nwheee',
          nodes: [{
            label: 'oh',
            nodes: ['hello', 'puny\nmeat']
          }, 'creature']
        }, 'party\ntime!']
      }]
    });
    t.equal(s, ['beep', '│ one', '│ two', '├── ity', '└─┬ boop', '  ├─┬ o_O', '  │ │ wheee', '  │ ├─┬ oh', '  │ │ ├── hello', '  │ │ └── puny', '  │ │     meat', '  │ └── creature', '  └── party', '      time!', ''].join('\n'));
    t.end();
  });
  return exports;
}