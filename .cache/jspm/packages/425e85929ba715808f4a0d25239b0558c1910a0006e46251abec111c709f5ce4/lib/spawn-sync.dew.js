import _path from "path";
import _fs from "fs";
import _os from "os";
import { dew as _indexDewDew } from "os-shim/index.dew.js";
import _child_process from "child_process";
import { dew as _indexDew2Dew } from "./json-buffer/index.dew.js";
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
  var path = _path;
  var fs = _fs;

  var tmpdir = _os.tmpdir || _indexDewDew().tmpdir;

  var cp = _child_process;
  var sleep;

  var JSON = _indexDew2Dew();

  try {
    sleep = _nodeRequire('try-thread-sleep');
  } catch (ex) {
    console.warn('Native thread-sleep not available.');
    console.warn('This will result in much slower performance, but it will still work.');
    console.warn('You should re-install spawn-sync or upgrade to the lastest version of node if possible.');
    console.warn('Check ' + path.resolve(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname, '../error.log') + ' for more details');

    sleep = function () {};
  }

  var temp = path.normalize(path.join(tmpdir(), 'spawn-sync'));

  function randomFileName(name) {
    function randomHash(count) {
      if (count === 1) return parseInt(16 * Math.random(), 10).toString(16);else {
        var hash = '';

        for (var i = 0; i < count; i++) hash += randomHash(1);

        return hash;
      }
    }

    return temp + '_' + name + '_' + String(process.pid) + randomHash(20);
  }

  function unlink(filename) {
    try {
      fs.unlinkSync(filename);
    } catch (ex) {
      if (ex.code !== 'ENOENT') throw ex;
    }
  }

  function tryUnlink(filename) {
    // doesn't matter too much if we fail to delete temp files
    try {
      fs.unlinkSync(filename);
    } catch (e) {}
  }

  function invoke(cmd) {
    // location to keep flag for busy waiting fallback
    var finished = randomFileName("finished");
    unlink(finished);

    if (process.platform === 'win32') {
      cmd = cmd + '& echo "finished" > ' + finished;
    } else {
      cmd = cmd + '; echo "finished" > ' + finished;
    }

    cp.exec(cmd);

    while (!fs.existsSync(finished)) {
      // busy wait
      sleep(200);
    }

    tryUnlink(finished);
    return 0;
  }

  exports = spawnSyncFallback;

  function spawnSyncFallback(cmd, commandArgs, options) {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    } // node.js script to run the command


    var worker = path.normalize((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/worker.js'); // location to store arguments

    var input = randomFileName('input');
    var output = randomFileName('output');
    unlink(output);
    fs.writeFileSync(input, JSON.stringify(args));
    invoke('"' + process.execPath + '" "' + worker + '" "' + input + '" "' + output + '"');
    var res = JSON.parse(fs.readFileSync(output, 'utf8'));
    tryUnlink(input);
    tryUnlink(output);
    return res;
  }

  return exports;
}