import _util from "util";
import { dew as _indexDewDew } from "bl/index.dew.js";
import { dew as _indexDew2Dew } from "xtend/index.dew.js";
import { dew as _headersDewDew } from "./headers.dew.js";
import { dew as _indexDew3Dew } from "readable-stream/index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var util = _util;

  var bl = _indexDewDew();

  var xtend = _indexDew2Dew();

  var headers = _headersDewDew();

  var Writable = _indexDew3Dew().Writable;

  var PassThrough = _indexDew3Dew().PassThrough;

  var noop = function () {};

  var overflow = function (size) {
    size &= 511;
    return size && 512 - size;
  };

  var emptyStream = function (self, offset) {
    var s = new Source(self, offset);
    s.end();
    return s;
  };

  var mixinPax = function (header, pax) {
    if (pax.path) header.name = pax.path;
    if (pax.linkpath) header.linkname = pax.linkpath;
    if (pax.size) header.size = parseInt(pax.size, 10);
    header.pax = pax;
    return header;
  };

  var Source = function (self, offset) {
    (this || _global)._parent = self;
    (this || _global).offset = offset;
    PassThrough.call(this || _global);
  };

  util.inherits(Source, PassThrough);

  Source.prototype.destroy = function (err) {
    (this || _global)._parent.destroy(err);
  };

  var Extract = function (opts) {
    if (!((this || _global) instanceof Extract)) return new Extract(opts);
    Writable.call(this || _global, opts);
    opts = opts || {};
    (this || _global)._offset = 0;
    (this || _global)._buffer = bl();
    (this || _global)._missing = 0;
    (this || _global)._partial = false;
    (this || _global)._onparse = noop;
    (this || _global)._header = null;
    (this || _global)._stream = null;
    (this || _global)._overflow = null;
    (this || _global)._cb = null;
    (this || _global)._locked = false;
    (this || _global)._destroyed = false;
    (this || _global)._pax = null;
    (this || _global)._paxGlobal = null;
    (this || _global)._gnuLongPath = null;
    (this || _global)._gnuLongLinkPath = null;
    var self = this || _global;
    var b = self._buffer;

    var oncontinue = function () {
      self._continue();
    };

    var onunlock = function (err) {
      self._locked = false;
      if (err) return self.destroy(err);
      if (!self._stream) oncontinue();
    };

    var onstreamend = function () {
      self._stream = null;
      var drain = overflow(self._header.size);
      if (drain) self._parse(drain, ondrain);else self._parse(512, onheader);
      if (!self._locked) oncontinue();
    };

    var ondrain = function () {
      self._buffer.consume(overflow(self._header.size));

      self._parse(512, onheader);

      oncontinue();
    };

    var onpaxglobalheader = function () {
      var size = self._header.size;
      self._paxGlobal = headers.decodePax(b.slice(0, size));
      b.consume(size);
      onstreamend();
    };

    var onpaxheader = function () {
      var size = self._header.size;
      self._pax = headers.decodePax(b.slice(0, size));
      if (self._paxGlobal) self._pax = xtend(self._paxGlobal, self._pax);
      b.consume(size);
      onstreamend();
    };

    var ongnulongpath = function () {
      var size = self._header.size;
      (this || _global)._gnuLongPath = headers.decodeLongPath(b.slice(0, size), opts.filenameEncoding);
      b.consume(size);
      onstreamend();
    };

    var ongnulonglinkpath = function () {
      var size = self._header.size;
      (this || _global)._gnuLongLinkPath = headers.decodeLongPath(b.slice(0, size), opts.filenameEncoding);
      b.consume(size);
      onstreamend();
    };

    var onheader = function () {
      var offset = self._offset;
      var header;

      try {
        header = self._header = headers.decode(b.slice(0, 512), opts.filenameEncoding);
      } catch (err) {
        self.emit('error', err);
      }

      b.consume(512);

      if (!header) {
        self._parse(512, onheader);

        oncontinue();
        return;
      }

      if (header.type === 'gnu-long-path') {
        self._parse(header.size, ongnulongpath);

        oncontinue();
        return;
      }

      if (header.type === 'gnu-long-link-path') {
        self._parse(header.size, ongnulonglinkpath);

        oncontinue();
        return;
      }

      if (header.type === 'pax-global-header') {
        self._parse(header.size, onpaxglobalheader);

        oncontinue();
        return;
      }

      if (header.type === 'pax-header') {
        self._parse(header.size, onpaxheader);

        oncontinue();
        return;
      }

      if (self._gnuLongPath) {
        header.name = self._gnuLongPath;
        self._gnuLongPath = null;
      }

      if (self._gnuLongLinkPath) {
        header.linkname = self._gnuLongLinkPath;
        self._gnuLongLinkPath = null;
      }

      if (self._pax) {
        self._header = header = mixinPax(header, self._pax);
        self._pax = null;
      }

      self._locked = true;

      if (!header.size || header.type === 'directory') {
        self._parse(512, onheader);

        self.emit('entry', header, emptyStream(self, offset), onunlock);
        return;
      }

      self._stream = new Source(self, offset);
      self.emit('entry', header, self._stream, onunlock);

      self._parse(header.size, onstreamend);

      oncontinue();
    };

    (this || _global)._onheader = onheader;

    this._parse(512, onheader);
  };

  util.inherits(Extract, Writable);

  Extract.prototype.destroy = function (err) {
    if ((this || _global)._destroyed) return;
    (this || _global)._destroyed = true;
    if (err) this.emit('error', err);
    this.emit('close');
    if ((this || _global)._stream) (this || _global)._stream.emit('close');
  };

  Extract.prototype._parse = function (size, onparse) {
    if ((this || _global)._destroyed) return;
    (this || _global)._offset += size;
    (this || _global)._missing = size;
    if (onparse === (this || _global)._onheader) (this || _global)._partial = false;
    (this || _global)._onparse = onparse;
  };

  Extract.prototype._continue = function () {
    if ((this || _global)._destroyed) return;
    var cb = (this || _global)._cb;
    (this || _global)._cb = noop;
    if ((this || _global)._overflow) this._write((this || _global)._overflow, undefined, cb);else cb();
  };

  Extract.prototype._write = function (data, enc, cb) {
    if ((this || _global)._destroyed) return;
    var s = (this || _global)._stream;
    var b = (this || _global)._buffer;
    var missing = (this || _global)._missing;
    if (data.length) (this || _global)._partial = true; // we do not reach end-of-chunk now. just forward it

    if (data.length < missing) {
      (this || _global)._missing -= data.length;
      (this || _global)._overflow = null;
      if (s) return s.write(data, cb);
      b.append(data);
      return cb();
    } // end-of-chunk. the parser should call cb.


    (this || _global)._cb = cb;
    (this || _global)._missing = 0;
    var overflow = null;

    if (data.length > missing) {
      overflow = data.slice(missing);
      data = data.slice(0, missing);
    }

    if (s) s.end(data);else b.append(data);
    (this || _global)._overflow = overflow;

    this._onparse();
  };

  Extract.prototype._final = function (cb) {
    if ((this || _global)._partial) return this.destroy(new Error('Unexpected end of data'));
    cb();
  };

  exports = Extract;
  return exports;
}