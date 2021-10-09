import _stream from "stream";
import { dew as _indexDewDew } from "./index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  var stream = _stream;

  var pump = _indexDewDew();

  var rs = new stream.Readable();
  var ws = new stream.Writable();

  rs._read = function (size) {
    this.push(Buffer(size).fill('abc'));
  };

  ws._write = function (chunk, encoding, cb) {
    setTimeout(function () {
      cb();
    }, 100);
  };

  var toHex = function () {
    var reverse = new _stream.Transform();

    reverse._transform = function (chunk, enc, callback) {
      reverse.push(chunk.toString('hex'));
      callback();
    };

    return reverse;
  };

  var wsClosed = false;
  var rsClosed = false;
  var callbackCalled = false;

  var check = function () {
    if (wsClosed && rsClosed && callbackCalled) {
      console.log('test-browser.js passes');
      clearTimeout(timeout);
    }
  };

  ws.on('finish', function () {
    wsClosed = true;
    check();
  });
  rs.on('end', function () {
    rsClosed = true;
    check();
  });
  var res = pump(rs, toHex(), toHex(), toHex(), ws, function () {
    callbackCalled = true;
    check();
  });

  if (res !== ws) {
    throw new Error('should return last stream');
  }

  setTimeout(function () {
    rs.push(null);
    rs.emit('close');
  }, 1000);
  var timeout = setTimeout(function () {
    check();
    throw new Error('timeout');
  }, 5000);
  return exports;
}