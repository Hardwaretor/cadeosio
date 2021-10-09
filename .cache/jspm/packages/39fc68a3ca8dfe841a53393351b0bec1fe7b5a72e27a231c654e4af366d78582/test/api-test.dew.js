import _assert from "assert";
import _net from "net";
import { dew as _handleDewDew } from "../lib/handle.dew.js";
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
  var assert = _assert;
  var net = _net;

  var streamPair = _nodeRequire('stream-pair');

  var thing = _handleDewDew();

  describe('Handle Thing', function () {
    var handle;
    var pair;
    var socket;
    ['normal', 'lazy'].forEach(function (mode) {
      describe(mode, function () {
        beforeEach(function () {
          pair = streamPair.create();
          handle = thing.create(mode === 'normal' ? pair.other : null);
          socket = new net.Socket({
            handle: handle
          });

          if (mode === 'lazy') {
            setTimeout(function () {
              handle.setStream(pair.other);
            }, 50);
          } // For v0.8


          socket.readable = true;
          socket.writable = true;
        });
        afterEach(function () {
          assert(handle._stream);
        });
        it('should write data to Socket', function (done) {
          pair.write('hello');
          pair.write(' world');
          pair.end('... ok');
          var chunks = '';
          socket.on('data', function (chunk) {
            chunks += chunk;
          });
          socket.on('end', function () {
            assert.equal(chunks, 'hello world... ok'); // allowHalfOpen is `false`, so the `end` should be followed by `close`

            socket.once('close', function () {
              done();
            });
          });
        });
        it('should read data from Socket', function (done) {
          socket.write('hello');
          socket.write(' world');
          socket.end('... ok');
          var chunks = '';
          pair.on('data', function (chunk) {
            chunks += chunk;
          });
          pair.on('end', function () {
            assert.equal(chunks, 'hello world... ok');
            done();
          });
        });
        it('should invoke `close` callback', function (done) {
          handle._options.close = function (callback) {
            done();
            process.nextTick(callback);
          };

          pair.end('hello');
          socket.resume();
        });
        it('should kill pending requests', function (done) {
          handle._options.close = function () {
            setTimeout(done, 75);
          };

          socket.write('hello');
          socket.destroy();
        });

        if (mode === 'normal') {
          it('should invoke `getPeerName` callback', function () {
            handle._options.getPeerName = function () {
              return {
                address: 'ohai'
              };
            };

            assert.equal(socket.remoteAddress, 'ohai');
          });
          it('should emit ECONNRESET at `close` event', function (done) {
            pair.other.emit('close'); // No error emitted in v0.8

            if (thing.mode === 'rusty') {
              socket.on('close', function () {
                done();
              });
              return;
            }

            socket.on('error', function (err) {
              assert(/ECONNRESET/.test(err.message));
              done();
            });
          });
        }
      });
    });
  });
  return exports;
}