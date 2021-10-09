import { dew as _indexDewDew } from "fs-constants/index.dew.js";
import { dew as _indexDew2Dew } from "end-of-stream/index.dew.js";
import { dew as _indexDew3Dew } from "inherits/index.dew.js";
import { dew as _indexDew4Dew } from "readable-stream/index.dew.js";
import _string_decoder from "string_decoder";
import { dew as _headersDewDew } from "./headers.dew.js";
import _process from "process";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  var process = _process;

  var constants = _indexDewDew();

  var eos = _indexDew2Dew();

  var inherits = _indexDew3Dew();

  var alloc = Buffer.alloc;

  var Readable = _indexDew4Dew().Readable;

  var Writable = _indexDew4Dew().Writable;

  var StringDecoder = _string_decoder.StringDecoder;

  var headers = _headersDewDew();

  var DMODE = parseInt('755', 8);
  var FMODE = parseInt('644', 8);
  var END_OF_TAR = alloc(1024);

  var noop = function () {};

  var overflow = function (self, size) {
    size &= 511;
    if (size) self.push(END_OF_TAR.slice(0, 512 - size));
  };

  function modeToType(mode) {
    switch (mode & constants.S_IFMT) {
      case constants.S_IFBLK:
        return 'block-device';

      case constants.S_IFCHR:
        return 'character-device';

      case constants.S_IFDIR:
        return 'directory';

      case constants.S_IFIFO:
        return 'fifo';

      case constants.S_IFLNK:
        return 'symlink';
    }

    return 'file';
  }

  var Sink = function (to) {
    Writable.call(this || _global);
    (this || _global).written = 0;
    (this || _global)._to = to;
    (this || _global)._destroyed = false;
  };

  inherits(Sink, Writable);

  Sink.prototype._write = function (data, enc, cb) {
    (this || _global).written += data.length;
    if ((this || _global)._to.push(data)) return cb();
    (this || _global)._to._drain = cb;
  };

  Sink.prototype.destroy = function () {
    if ((this || _global)._destroyed) return;
    (this || _global)._destroyed = true;
    this.emit('close');
  };

  var LinkSink = function () {
    Writable.call(this || _global);
    (this || _global).linkname = '';
    (this || _global)._decoder = new StringDecoder('utf-8');
    (this || _global)._destroyed = false;
  };

  inherits(LinkSink, Writable);

  LinkSink.prototype._write = function (data, enc, cb) {
    (this || _global).linkname += (this || _global)._decoder.write(data);
    cb();
  };

  LinkSink.prototype.destroy = function () {
    if ((this || _global)._destroyed) return;
    (this || _global)._destroyed = true;
    this.emit('close');
  };

  var Void = function () {
    Writable.call(this || _global);
    (this || _global)._destroyed = false;
  };

  inherits(Void, Writable);

  Void.prototype._write = function (data, enc, cb) {
    cb(new Error('No body allowed for this entry'));
  };

  Void.prototype.destroy = function () {
    if ((this || _global)._destroyed) return;
    (this || _global)._destroyed = true;
    this.emit('close');
  };

  var Pack = function (opts) {
    if (!((this || _global) instanceof Pack)) return new Pack(opts);
    Readable.call(this || _global, opts);
    (this || _global)._drain = noop;
    (this || _global)._finalized = false;
    (this || _global)._finalizing = false;
    (this || _global)._destroyed = false;
    (this || _global)._stream = null;
  };

  inherits(Pack, Readable);

  Pack.prototype.entry = function (header, buffer, callback) {
    if ((this || _global)._stream) throw new Error('already piping an entry');
    if ((this || _global)._finalized || (this || _global)._destroyed) return;

    if (typeof buffer === 'function') {
      callback = buffer;
      buffer = null;
    }

    if (!callback) callback = noop;
    var self = this || _global;
    if (!header.size || header.type === 'symlink') header.size = 0;
    if (!header.type) header.type = modeToType(header.mode);
    if (!header.mode) header.mode = header.type === 'directory' ? DMODE : FMODE;
    if (!header.uid) header.uid = 0;
    if (!header.gid) header.gid = 0;
    if (!header.mtime) header.mtime = new Date();
    if (typeof buffer === 'string') buffer = Buffer.from(buffer);

    if (Buffer.isBuffer(buffer)) {
      header.size = buffer.length;

      this._encode(header);

      var ok = this.push(buffer);
      overflow(self, header.size);
      if (ok) process.nextTick(callback);else (this || _global)._drain = callback;
      return new Void();
    }

    if (header.type === 'symlink' && !header.linkname) {
      var linkSink = new LinkSink();
      eos(linkSink, function (err) {
        if (err) {
          // stream was closed
          self.destroy();
          return callback(err);
        }

        header.linkname = linkSink.linkname;

        self._encode(header);

        callback();
      });
      return linkSink;
    }

    this._encode(header);

    if (header.type !== 'file' && header.type !== 'contiguous-file') {
      process.nextTick(callback);
      return new Void();
    }

    var sink = new Sink(this || _global);
    (this || _global)._stream = sink;
    eos(sink, function (err) {
      self._stream = null;

      if (err) {
        // stream was closed
        self.destroy();
        return callback(err);
      }

      if (sink.written !== header.size) {
        // corrupting tar
        self.destroy();
        return callback(new Error('size mismatch'));
      }

      overflow(self, header.size);
      if (self._finalizing) self.finalize();
      callback();
    });
    return sink;
  };

  Pack.prototype.finalize = function () {
    if ((this || _global)._stream) {
      (this || _global)._finalizing = true;
      return;
    }

    if ((this || _global)._finalized) return;
    (this || _global)._finalized = true;
    this.push(END_OF_TAR);
    this.push(null);
  };

  Pack.prototype.destroy = function (err) {
    if ((this || _global)._destroyed) return;
    (this || _global)._destroyed = true;
    if (err) this.emit('error', err);
    this.emit('close');
    if ((this || _global)._stream && (this || _global)._stream.destroy) (this || _global)._stream.destroy();
  };

  Pack.prototype._encode = function (header) {
    if (!header.pax) {
      var buf = headers.encode(header);

      if (buf) {
        this.push(buf);
        return;
      }
    }

    this._encodePax(header);
  };

  Pack.prototype._encodePax = function (header) {
    var paxHeader = headers.encodePax({
      name: header.name,
      linkname: header.linkname,
      pax: header.pax
    });
    var newHeader = {
      name: 'PaxHeader',
      mode: header.mode,
      uid: header.uid,
      gid: header.gid,
      size: paxHeader.length,
      mtime: header.mtime,
      type: 'pax-header',
      linkname: header.linkname && 'PaxHeader',
      uname: header.uname,
      gname: header.gname,
      devmajor: header.devmajor,
      devminor: header.devminor
    };
    this.push(headers.encode(newHeader));
    this.push(paxHeader);
    overflow(this || _global, paxHeader.length);
    newHeader.size = header.size;
    newHeader.type = header.type;
    this.push(headers.encode(newHeader));
  };

  Pack.prototype._read = function (n) {
    var drain = (this || _global)._drain;
    (this || _global)._drain = noop;
    drain();
  };

  exports = Pack;
  return exports;
}