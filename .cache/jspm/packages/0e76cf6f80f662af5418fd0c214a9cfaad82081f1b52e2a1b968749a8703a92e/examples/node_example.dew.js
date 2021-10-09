import { dew as _indexDewDew } from "../lib/index.dew.js";
import _process from "process";
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

  var process = _process;

  _nodeRequire('colors');

  var jsdiff = _indexDewDew();

  var one = 'beep boop';
  var other = 'beep boob blah';
  var diff = jsdiff.diffChars(one, other);
  diff.forEach(function (part) {
    // green for additions, red for deletions
    // grey for common parts
    var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
    process.stderr.write(part.value[color]);
  });
  console.log();
  return exports;
}