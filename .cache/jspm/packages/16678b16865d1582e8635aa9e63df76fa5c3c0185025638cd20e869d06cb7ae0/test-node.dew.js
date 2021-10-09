import { dew as _indexDewDew } from "./index.dew.js";
import _fs from "fs";
import _stream from "stream";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var pump = _indexDewDew();

  var rs = _fs.createReadStream('/dev/random');

  var ws = _fs.createWriteStream('/dev/null');

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
      console.log('test-node.js passes');
      clearTimeout(timeout);
    }
  };

  ws.on('close', function () {
    wsClosed = true;
    check();
  });
  rs.on('close', function () {
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
    rs.destroy();
  }, 1000);
  var timeout = setTimeout(function () {
    throw new Error('timeout');
  }, 5000);
  return exports;
}