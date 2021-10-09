import { dew as _indexDewDew } from "./index.dew.js";
import _fs from "fs";
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

  var cloneable = _indexDewDew();

  var fs = _fs;

  var pump = _nodeRequire('pump');

  var stream = cloneable(fs.createReadStream('./package.json'));
  pump(stream.clone(), fs.createWriteStream('./out1')); // simulate some asynchronicity

  setImmediate(function () {
    pump(stream, fs.createWriteStream('./out2'));
  });
  return exports;
}