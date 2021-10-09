import _assert from "assert";
import _net from "net";
import _buffer from "buffer";
import { dew as _fixturesDewDew } from "./fixtures.dew.js";
import { dew as _hoseDewDew } from "../lib/hose.dew.js";
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

  var assert = _assert;
  var net = _net;

  var streamPair = _nodeRequire('stream-pair');

  var thing = _nodeRequire('handle-thing');

  var Buffer = _buffer.Buffer;

  var fixtures = _fixturesDewDew();

  var hose = _hoseDewDew();

  describe('Select Hose', function () {
    var pair;
    var socket;
    beforeEach(function () {
      pair = streamPair.create();
      var handle = thing.create(pair.other);
      socket = new net.Socket({
        handle: handle
      }); // For v0.8

      socket.readable = true;
      socket.writable = true;
    });
    it('should select handler using first byte', function (done) {
      var filter = hose.create(socket, function filter(data, callback) {
        if (data[0] === 0x80) return callback(null, 'spdy');else return callback(null, 'http');
      });
      filter.on('select', function (protocol, socket) {
        assert.equal(protocol, 'spdy');
        socket.on('data', function (chunk) {
          assert.equal(chunk.toString('hex'), '80030001');
          done();
        });
      });
      pair.write(new Buffer('80030001', 'hex'));
    });
    it('should select handler using two packets', function (done) {
      var filter = hose.create(socket, function filter(data, callback) {
        if (data.length < 2) return;
        if (data[0] === 0x80 && data[1] === 0x03) return callback(null, 'spdy');else return callback(null, 'http');
      });
      filter.on('select', function (protocol, socket) {
        assert.equal(protocol, 'spdy');
        socket.on('data', function (chunk) {
          assert.equal(chunk.toString('hex'), '80030001');
          done();
        });
      });
      pair.write(new Buffer('80', 'hex'));
      setTimeout(function () {
        pair.write(new Buffer('030001', 'hex'));
      }, 20);
    });
    it('should read excessive packets', function (done) {
      var filter = hose.create(socket, function filter(data, callback) {
        if (data.length < 2) return;
        if (data[0] === 0x61 && data[1] === 0x62) return callback(null, 'spdy');else return callback(null, 'http');
      });
      filter.on('select', function (protocol, socket) {
        assert.equal(protocol, 'spdy');
        fixtures.expectData(socket, 'abcd', done);
      });
      pair.write('a');
      setTimeout(function () {
        pair.write('b');
        setTimeout(function () {
          pair.end('cd');
        }, 20);
      }, 20);
    });
    it('should re-emit errors', function (done) {
      var filter = hose.create(socket, function filter(data, callback) {
        if (data.length < 2) return;
        if (data[0] === 0x61 && data[1] === 0x62) return callback(null, 'spdy');else return callback(null, 'http');
      });
      filter.on('error', function (err) {
        done();
      });
      socket.emit('error', new Error(123));
    });
  });
  return exports;
}