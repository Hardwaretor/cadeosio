import _util from "util";
import _module from "module";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

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

  var sys = _util;

  var XMLHttpRequest = _nodeRequire("xmlhttprequest").XMLHttpRequest;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    sys.puts("State: " + (this || _global).readyState);

    if ((this || _global).readyState == 4) {
      sys.puts("Complete.\nBody length: " + (this || _global).responseText.length);
      sys.puts("Body:\n" + (this || _global).responseText);
    }
  };

  xhr.open("GET", "http://driverdan.com");
  xhr.send();
  return exports;
}