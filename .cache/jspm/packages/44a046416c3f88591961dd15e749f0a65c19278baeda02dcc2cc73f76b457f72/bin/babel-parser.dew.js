import _fs from "fs";
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

  /* eslint no-var: 0 */
  var parser = _nodeRequire("..");

  var fs = _fs;
  var filename = process.argv[2];

  if (!filename) {
    console.error("no filename specified");
  } else {
    var file = fs.readFileSync(filename, "utf8");
    var ast = parser.parse(file);
    console.log(JSON.stringify(ast, null, "  "));
  }

  return exports;
}