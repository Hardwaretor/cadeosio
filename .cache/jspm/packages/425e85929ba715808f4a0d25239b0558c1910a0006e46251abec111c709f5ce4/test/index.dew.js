import _assert from "assert";
import _vm from "vm";
import _fs from "fs";
import _path from "path";
import _child_process from "child_process";
import { dew as _spawnSyncDewDew } from "../lib/spawn-sync.dew.js";
import _process from "process";
import _buffer from "buffer";
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

  var Buffer = _buffer.Buffer;
  var process = _process;
  var assert = _assert;
  var vm = _vm;
  var fs = _fs;
  var path = _path;

  var sleep = _nodeRequire('try-thread-sleep');

  function testSpawn(spawn) {
    var result = spawn("node", [(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/test-spawn.js'], {
      input: 'my-output'
    });
    assert(result.status === 0);
    assert(Buffer.isBuffer(result.stdout));
    assert(Buffer.isBuffer(result.stderr));
    assert(result.stdout.toString() === 'output written');
    assert(result.stderr.toString() === 'error log exists');
    assert(fs.readFileSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/output.txt', 'utf8') === 'my-output');
    fs.unlinkSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/output.txt');
    var result = spawn("node", [(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/test-spawn.js'], {
      input: 'my-output',
      encoding: 'utf-8'
    });
    assert(result.status === 0);
    assert(result.stdout === 'output written');
    assert(result.stderr === 'error log exists');
    assert.deepEqual(result.output, [null, 'output written', 'error log exists']);
    assert(fs.readFileSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/output.txt', 'utf8') === 'my-output');
    fs.unlinkSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/output.txt');
    var result = spawn("node", [(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/test-spawn-fail.js'], {
      input: 'my-output'
    });
    assert(result.status === 13);
    assert(Buffer.isBuffer(result.stdout));
    assert(Buffer.isBuffer(result.stderr));
    assert(result.stdout.toString() === 'output written');
    assert(result.stderr.toString() === 'error log exists');
    assert(fs.readFileSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/output.txt', 'utf8') === 'my-output');
    fs.unlinkSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/output.txt');
    var result = spawn("node", [(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/test-empty.js'], {
      input: 'my-output'
    });
    assert(result.status === 0);
    assert(Buffer.isBuffer(result.stdout));
    assert(Buffer.isBuffer(result.stderr));
    assert(result.stdout.toString() === '');
    assert(result.stderr.toString() === '');
    var result = spawn("node", [(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/test-empty.js'], {
      stdio: ['pipe', 'ignore', 'pipe']
    });
    assert(result.status === 0);
    assert(Buffer.isBuffer(result.stderr));
    assert(result.stdout == null);
    assert(result.stderr.toString() === '');
    var result = spawn("node", [(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/test-empty.js'], {
      stdio: ['pipe', 'pipe', 'ignore']
    });
    assert(result.status === 0);
    assert(Buffer.isBuffer(result.stdout));
    assert(result.stdout.toString() === '');
    assert(result.stderr == null);
    var result = spawn("node", [(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/test-empty.js'], {
      stdio: ['ignore', 'pipe', 'pipe']
    });
    assert(result.status === 0);
    assert(Buffer.isBuffer(result.stdout));
    assert(Buffer.isBuffer(result.stderr));
    assert(result.stdout.toString() === '');
    assert(result.stderr.toString() === ''); // This suprisingly fails for the official API

    /*
    var start = Date.now();
    var result = spawn("node", [__dirname + '/test-spawn-timeout.js'], {timeout: 100});
    console.dir(result);
    var end = Date.now();
    assert((end - start) < 200);
    */

    console.log('test pass');
  }

  if (sleep.native) {
    console.log('Using native thread-sleep');
  } else {
    console.log('Using busy waiting');
  }

  if (_child_process.spawnSync) {
    console.log('# Test built in node API');
    testSpawn(_child_process.spawnSync);
  } else {
    console.log('# SKIP Test built in node API');
  }

  console.log('# Test fallback operation');
  testSpawn(_spawnSyncDewDew());
  console.log('All tests passed');
  return exports;
}