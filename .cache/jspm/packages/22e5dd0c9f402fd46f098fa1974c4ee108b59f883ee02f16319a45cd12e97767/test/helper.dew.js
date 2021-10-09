import { dew as _readableDewDew } from "readable-stream/readable.dew.js";
import { dew as _writableDewDew } from "readable-stream/writable.dew.js";
import _util from "util";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  var _Readable = _readableDewDew();

  var _Writable = _writableDewDew();

  var util = _util;
  exports = {
    DummyReadable: DummyReadable,
    DummyWritable: DummyWritable
  };

  function DummyReadable(strings) {
    _Readable.call(this || _global);

    (this || _global).strings = strings;
    this.emit('readable');
  }

  util.inherits(DummyReadable, _Readable);

  DummyReadable.prototype._read = function _read(n) {
    if ((this || _global).strings.length) {
      this.push(new Buffer((this || _global).strings.shift()));
    } else {
      this.push(null);
    }
  };

  function DummyWritable(strings) {
    _Writable.call(this || _global);

    (this || _global).strings = strings;
    this.emit('writable');
  }

  util.inherits(DummyWritable, _Writable);

  DummyWritable.prototype._write = function _write(chunk, encoding, callback) {
    (this || _global).strings.push(chunk.toString());

    if (callback) callback();
  };

  return exports;
}