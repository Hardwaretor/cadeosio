import _fs from "fs";
import _path from "path";
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

  const tar = _nodeRequire('tar-stream');

  const fs = _fs;
  const path = _path;

  const pipeline = _nodeRequire('pump'); // eequire('stream').pipeline


  fs.createReadStream('test.tar').pipe(tar.extract()).on('entry', function (header, stream, done) {
    console.log(header.name);
    pipeline(stream, fs.createWriteStream(path.join('/tmp', header.name)), done);
  });
  return exports;
}