import _util from "util";
import { dew as _indexDewDew } from "readable-stream/index.dew.js";
import { dew as _archiveEntryDewDew } from "./archive-entry.dew.js";
import { dew as _indexDew2Dew } from "../util/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  /**
   * node-compress-commons
   *
   * Copyright (c) 2014 Chris Talkington, contributors.
   * Licensed under the MIT license.
   * https://github.com/archiverjs/node-compress-commons/blob/master/LICENSE-MIT
   */
  var inherits = _util.inherits;

  var Transform = _indexDewDew().Transform;

  var ArchiveEntry = _archiveEntryDewDew();

  var util = _indexDew2Dew();

  var ArchiveOutputStream = exports = function (options) {
    if (!((this || _global) instanceof ArchiveOutputStream)) {
      return new ArchiveOutputStream(options);
    }

    Transform.call(this || _global, options);
    (this || _global).offset = 0;
    (this || _global)._archive = {
      finish: false,
      finished: false,
      processing: false
    };
  };

  inherits(ArchiveOutputStream, Transform);

  ArchiveOutputStream.prototype._appendBuffer = function (zae, source, callback) {// scaffold only
  };

  ArchiveOutputStream.prototype._appendStream = function (zae, source, callback) {// scaffold only
  };

  ArchiveOutputStream.prototype._emitErrorCallback = function (err) {
    if (err) {
      this.emit('error', err);
    }
  };

  ArchiveOutputStream.prototype._finish = function (ae) {// scaffold only
  };

  ArchiveOutputStream.prototype._normalizeEntry = function (ae) {// scaffold only
  };

  ArchiveOutputStream.prototype._transform = function (chunk, encoding, callback) {
    callback(null, chunk);
  };

  ArchiveOutputStream.prototype.entry = function (ae, source, callback) {
    source = source || null;

    if (typeof callback !== 'function') {
      callback = (this || _global)._emitErrorCallback.bind(this || _global);
    }

    if (!(ae instanceof ArchiveEntry)) {
      callback(new Error('not a valid instance of ArchiveEntry'));
      return;
    }

    if ((this || _global)._archive.finish || (this || _global)._archive.finished) {
      callback(new Error('unacceptable entry after finish'));
      return;
    }

    if ((this || _global)._archive.processing) {
      callback(new Error('already processing an entry'));
      return;
    }

    (this || _global)._archive.processing = true;

    this._normalizeEntry(ae);

    (this || _global)._entry = ae;
    source = util.normalizeInputSource(source);

    if (Buffer.isBuffer(source)) {
      this._appendBuffer(ae, source, callback);
    } else if (util.isStream(source)) {
      this._appendStream(ae, source, callback);
    } else {
      (this || _global)._archive.processing = false;
      callback(new Error('input source must be valid Stream or Buffer instance'));
      return;
    }

    return this || _global;
  };

  ArchiveOutputStream.prototype.finish = function () {
    if ((this || _global)._archive.processing) {
      (this || _global)._archive.finish = true;
      return;
    }

    this._finish();
  };

  ArchiveOutputStream.prototype.getBytesWritten = function () {
    return (this || _global).offset;
  };

  ArchiveOutputStream.prototype.write = function (chunk, cb) {
    if (chunk) {
      (this || _global).offset += chunk.length;
    }

    return Transform.prototype.write.call(this || _global, chunk, cb);
  };

  return exports;
}