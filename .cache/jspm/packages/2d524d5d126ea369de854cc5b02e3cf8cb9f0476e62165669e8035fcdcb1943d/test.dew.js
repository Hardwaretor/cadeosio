import { dew as _indexDewDew } from "./index.dew.js";
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

  var tape = _nodeRequire('tape');

  var minimatchAll = _indexDewDew();

  tape('Match', function (t) {
    var patterns = [// match all js files
    '**/*.js', // except for files in the foo/ directory
    '!foo/**', // unless it's foo/bar.js
    'foo/bar.js'];
    t.equals(minimatchAll('foo.js', patterns), true, 'Match .js files');
    t.equals(minimatchAll('foo/foo.js', patterns), false, 'Files in the foo/ directory should be excluded');
    t.equals(minimatchAll('foo/bar.js', patterns), true, 'foo/bar.js is an exception to the rule');
    t.end();
  });
  tape('Multiple exclusions', function (t) {
    var patterns = [// match all files
    '**/*', // exclude everything in foo/
    '!**/foo/**', // and also exclude everything in bar/
    '!**/bar/**'];
    t.equals(minimatchAll('important.exe', patterns), true, 'Match all files');
    t.equals(minimatchAll('foo/one.js', patterns), false, 'But exclude files in foo/');
    t.equals(minimatchAll('bar/two.js', patterns), false, 'And exlude files in bar/ as well');
    t.end();
  });
  return exports;
}