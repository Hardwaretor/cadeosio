import { dew as _indexDewDew } from "minimalistic-assert/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var assert = _indexDewDew();

  var Buffer = _buffer.Buffer;

  function WBuf() {
    (this || _global).buffers = [];
    (this || _global).toReserve = 0;
    (this || _global).size = 0;
    (this || _global).maxSize = 0;
    (this || _global).avail = 0;
    (this || _global).last = null;
    (this || _global).offset = 0; // Used in slicing

    (this || _global).sliceQueue = null;
    (this || _global).forceReserve = false; // Mostly a constant

    (this || _global).reserveRate = 64;
  }

  exports = WBuf;

  WBuf.prototype.reserve = function reserve(n) {
    (this || _global).toReserve += n; // Force reservation of extra bytes

    if ((this || _global).forceReserve) (this || _global).toReserve = Math.max((this || _global).toReserve, (this || _global).reserveRate);
  };

  WBuf.prototype._ensure = function _ensure(n) {
    if ((this || _global).avail >= n) return;
    if ((this || _global).toReserve === 0) (this || _global).toReserve = (this || _global).reserveRate;
    (this || _global).toReserve = Math.max(n - (this || _global).avail, (this || _global).toReserve);
    if ((this || _global).avail === 0) this._next();
  };

  WBuf.prototype._next = function _next() {
    var buf;

    if ((this || _global).sliceQueue === null) {
      // Most common case
      buf = new Buffer((this || _global).toReserve);
    } else {
      // Only for `.slice()` results
      buf = (this || _global).sliceQueue.shift();
      if ((this || _global).sliceQueue.length === 0) (this || _global).sliceQueue = null;
    }

    (this || _global).toReserve = 0;

    (this || _global).buffers.push(buf);

    (this || _global).avail = buf.length;
    (this || _global).offset = 0;
    (this || _global).last = buf;
  };

  WBuf.prototype._rangeCheck = function _rangeCheck() {
    if ((this || _global).maxSize !== 0 && (this || _global).size > (this || _global).maxSize) throw new RangeError('WBuf overflow');
  };

  WBuf.prototype._move = function _move(n) {
    (this || _global).size += n;
    if ((this || _global).avail === 0) (this || _global).last = null;

    this._rangeCheck();
  };

  WBuf.prototype.slice = function slice(start, end) {
    assert(0 <= start && start <= (this || _global).size);
    assert(0 <= end && end <= (this || _global).size);
    if ((this || _global).last === null) this._next();
    var res = new WBuf(); // Only last chunk is requested

    if (start >= (this || _global).size - (this || _global).offset) {
      res.buffers.push((this || _global).last);
      res.last = (this || _global).last;
      res.offset = start - (this || _global).size + (this || _global).offset;
      res.maxSize = end - start;
      res.avail = res.maxSize;
      return res;
    }

    var startIndex = -1;
    var startOffset = 0;
    var endIndex = -1; // Find buffer indices

    var offset = 0;

    for (var i = 0; i < (this || _global).buffers.length; i++) {
      var buf = (this || _global).buffers[i];
      var next = offset + buf.length; // Found the start

      if (start >= offset && start <= next) {
        startIndex = i;
        startOffset = start - offset;
        if (endIndex !== -1) break;
      }

      if (end >= offset && end <= next) {
        endIndex = i;
        if (startIndex !== -1) break;
      }

      offset = next;
    }

    res.last = (this || _global).buffers[startIndex];
    res.offset = startOffset;
    res.maxSize = end - start; // Multi-buffer slice

    if (startIndex < endIndex) {
      res.sliceQueue = (this || _global).buffers.slice(startIndex + 1, endIndex + 1);
      res.last = res.last.slice(res.offset);
      res.offset = 0;
    }

    res.avail = res.last.length - res.offset;
    res.buffers.push(res.last);
    return res;
  };

  WBuf.prototype.skip = function skip(n) {
    if (n === 0) return this.slice((this || _global).size, (this || _global).size);

    this._ensure(n);

    var left = n;

    while (left > 0) {
      var toSkip = Math.min(left, (this || _global).avail);
      left -= toSkip;
      (this || _global).size += toSkip;

      if (toSkip === (this || _global).avail) {
        if (left !== 0) {
          this._next();
        } else {
          (this || _global).avail -= toSkip;
          (this || _global).offset += toSkip;
        }
      } else {
        (this || _global).offset += toSkip;
        (this || _global).avail -= toSkip;
      }
    }

    this._rangeCheck();

    return this.slice((this || _global).size - n, (this || _global).size);
  };

  WBuf.prototype.write = function write(str) {
    var len = 0;

    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c > 255) len += 2;else len += 1;
    }

    this.reserve(len);

    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      var hi = c >>> 8;
      var lo = c & 0xff;
      if (hi) this.writeUInt8(hi);
      this.writeUInt8(lo);
    }
  };

  WBuf.prototype.copyFrom = function copyFrom(buf, start, end) {
    var off = start === undefined ? 0 : start;
    var len = end === undefined ? buf.length : end;
    if (off === len) return;

    this._ensure(len - off);

    while (off < len) {
      var toCopy = Math.min(len - off, (this || _global).avail);
      buf.copy((this || _global).last, (this || _global).offset, off, off + toCopy);
      off += toCopy;
      (this || _global).size += toCopy;

      if (toCopy === (this || _global).avail) {
        if (off !== len) {
          this._next();
        } else {
          (this || _global).avail = 0;
          (this || _global).offset += toCopy;
        }
      } else {
        (this || _global).offset += toCopy;
        (this || _global).avail -= toCopy;
      }
    }

    this._rangeCheck();
  };

  WBuf.prototype.writeUInt8 = function writeUInt8(v) {
    this._ensure(1);

    (this || _global).last[(this || _global).offset++] = v;
    (this || _global).avail--;

    this._move(1);
  };

  WBuf.prototype.writeUInt16BE = function writeUInt16BE(v) {
    this._ensure(2); // Fast case - everything fits into the last buffer


    if ((this || _global).avail >= 2) {
      (this || _global).last.writeUInt16BE(v, (this || _global).offset);

      (this || _global).offset += 2;
      (this || _global).avail -= 2; // One byte here, one byte there
    } else {
      (this || _global).last[(this || _global).offset] = v >>> 8;

      this._next();

      (this || _global).last[(this || _global).offset++] = v & 0xff;
      (this || _global).avail--;
    }

    this._move(2);
  };

  WBuf.prototype.writeUInt24BE = function writeUInt24BE(v) {
    this._ensure(3); // Fast case - everything fits into the last buffer


    if ((this || _global).avail >= 3) {
      (this || _global).last.writeUInt16BE(v >>> 8, (this || _global).offset);

      (this || _global).last[(this || _global).offset + 2] = v & 0xff;
      (this || _global).offset += 3;
      (this || _global).avail -= 3;

      this._move(3); // Two bytes here

    } else if ((this || _global).avail >= 2) {
      (this || _global).last.writeUInt16BE(v >>> 8, (this || _global).offset);

      this._next();

      (this || _global).last[(this || _global).offset++] = v & 0xff;
      (this || _global).avail--;

      this._move(3); // Just one byte here

    } else {
      (this || _global).last[(this || _global).offset] = v >>> 16;

      this._move(1);

      this._next();

      this.writeUInt16BE(v & 0xffff);
    }
  };

  WBuf.prototype.writeUInt32BE = function writeUInt32BE(v) {
    this._ensure(4); // Fast case - everything fits into the last buffer


    if ((this || _global).avail >= 4) {
      (this || _global).last.writeUInt32BE(v, (this || _global).offset);

      (this || _global).offset += 4;
      (this || _global).avail -= 4;

      this._move(4); // Three bytes here

    } else if ((this || _global).avail >= 3) {
      this.writeUInt24BE(v >>> 8);

      this._next();

      (this || _global).last[(this || _global).offset++] = v & 0xff;
      (this || _global).avail--;

      this._move(1); // Slow case, who cares

    } else {
      this.writeUInt16BE(v >>> 16);
      this.writeUInt16BE(v & 0xffff);
    }
  };

  WBuf.prototype.writeUInt16LE = function writeUInt16LE(num) {
    var r = (num & 0xff) << 8 | num >>> 8;
    this.writeUInt16BE(r);
  };

  WBuf.prototype.writeUInt24LE = function writeUInt24LE(num) {
    var r = (num & 0xff) << 16 | (num >>> 8 & 0xff) << 8 | num >>> 16;
    this.writeUInt24BE(r);
  };

  WBuf.prototype.writeUInt32LE = function writeUInt32LE(num) {
    this._ensure(4); // Fast case - everything fits into the last buffer


    if ((this || _global).avail >= 4) {
      (this || _global).last.writeUInt32LE(num, (this || _global).offset);

      (this || _global).offset += 4;
      (this || _global).avail -= 4;

      this._move(4); // Three bytes here

    } else if ((this || _global).avail >= 3) {
      this.writeUInt24LE(num & 0xffffff);

      this._next();

      (this || _global).last[(this || _global).offset++] = num >>> 24;
      (this || _global).avail--;

      this._move(1); // Slow case, who cares

    } else {
      this.writeUInt16LE(num & 0xffff);
      this.writeUInt16LE(num >>> 16);
    }
  };

  WBuf.prototype.render = function render() {
    var left = (this || _global).size;
    var out = [];

    for (var i = 0; i < (this || _global).buffers.length && left >= 0; i++) {
      var buf = (this || _global).buffers[i];
      left -= buf.length;

      if (left >= 0) {
        out.push(buf);
      } else {
        out.push(buf.slice(0, buf.length + left));
      }
    }

    return out;
  }; // Signed APIs


  WBuf.prototype.writeInt8 = function writeInt8(num) {
    if (num < 0) return this.writeUInt8(0x100 + num);else return this.writeUInt8(num);
  };

  function toUnsigned16(num) {
    if (num < 0) return 0x10000 + num;else return num;
  }

  WBuf.prototype.writeInt16LE = function writeInt16LE(num) {
    this.writeUInt16LE(toUnsigned16(num));
  };

  WBuf.prototype.writeInt16BE = function writeInt16BE(num) {
    this.writeUInt16BE(toUnsigned16(num));
  };

  function toUnsigned24(num) {
    if (num < 0) return 0x1000000 + num;else return num;
  }

  WBuf.prototype.writeInt24LE = function writeInt24LE(num) {
    this.writeUInt24LE(toUnsigned24(num));
  };

  WBuf.prototype.writeInt24BE = function writeInt24BE(num) {
    this.writeUInt24BE(toUnsigned24(num));
  };

  function toUnsigned32(num) {
    if (num < 0) return 0xffffffff + num + 1;else return num;
  }

  WBuf.prototype.writeInt32LE = function writeInt32LE(num) {
    this.writeUInt32LE(toUnsigned32(num));
  };

  WBuf.prototype.writeInt32BE = function writeInt32BE(num) {
    this.writeUInt32BE(toUnsigned32(num));
  };

  WBuf.prototype.writeComb = function writeComb(size, endian, value) {
    if (size === 1) return this.writeUInt8(value);

    if (endian === 'le') {
      if (size === 2) this.writeUInt16LE(value);else if (size === 3) this.writeUInt24LE(value);else if (size === 4) this.writeUInt32LE(value);
    } else {
      if (size === 2) this.writeUInt16BE(value);else if (size === 3) this.writeUInt24BE(value);else if (size === 4) this.writeUInt32BE(value);
    }
  };

  return exports;
}