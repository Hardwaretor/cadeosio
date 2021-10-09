import _util from "util";
import { dew as _indexDewDew } from "buffer-crc32/index.dew.js";
import { dew as _indexDew2Dew } from "crc32-stream/index.dew.js";
import { dew as _archiveOutputStreamDewDew } from "../archive-output-stream.dew.js";
import { dew as _zipArchiveEntryDewDew } from "./zip-archive-entry.dew.js";
import { dew as _generalPurposeBitDewDew } from "./general-purpose-bit.dew.js";
import { dew as _constantsDewDew } from "./constants.dew.js";
import { dew as _indexDew3Dew } from "../../util/index.dew.js";
import { dew as _utilDewDew } from "./util.dew.js";
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

  var crc32 = _indexDewDew();

  var {
    CRC32Stream
  } = _indexDew2Dew();

  var {
    DeflateCRC32Stream
  } = _indexDew2Dew();

  var ArchiveOutputStream = _archiveOutputStreamDewDew();

  var ZipArchiveEntry = _zipArchiveEntryDewDew();

  var GeneralPurposeBit = _generalPurposeBitDewDew();

  var constants = _constantsDewDew();

  var util = _indexDew3Dew();

  var zipUtil = _utilDewDew();

  var ZipArchiveOutputStream = exports = function (options) {
    if (!((this || _global) instanceof ZipArchiveOutputStream)) {
      return new ZipArchiveOutputStream(options);
    }

    options = (this || _global).options = this._defaults(options);
    ArchiveOutputStream.call(this || _global, options);
    (this || _global)._entry = null;
    (this || _global)._entries = [];
    (this || _global)._archive = {
      centralLength: 0,
      centralOffset: 0,
      comment: '',
      finish: false,
      finished: false,
      processing: false,
      forceZip64: options.forceZip64,
      forceLocalTime: options.forceLocalTime
    };
  };

  inherits(ZipArchiveOutputStream, ArchiveOutputStream);

  ZipArchiveOutputStream.prototype._afterAppend = function (ae) {
    (this || _global)._entries.push(ae);

    if (ae.getGeneralPurposeBit().usesDataDescriptor()) {
      this._writeDataDescriptor(ae);
    }

    (this || _global)._archive.processing = false;
    (this || _global)._entry = null;

    if ((this || _global)._archive.finish && !(this || _global)._archive.finished) {
      this._finish();
    }
  };

  ZipArchiveOutputStream.prototype._appendBuffer = function (ae, source, callback) {
    if (source.length === 0) {
      ae.setMethod(constants.METHOD_STORED);
    }

    var method = ae.getMethod();

    if (method === constants.METHOD_STORED) {
      ae.setSize(source.length);
      ae.setCompressedSize(source.length);
      ae.setCrc(crc32.unsigned(source));
    }

    this._writeLocalFileHeader(ae);

    if (method === constants.METHOD_STORED) {
      this.write(source);

      this._afterAppend(ae);

      callback(null, ae);
      return;
    } else if (method === constants.METHOD_DEFLATED) {
      this._smartStream(ae, callback).end(source);

      return;
    } else {
      callback(new Error('compression method ' + method + ' not implemented'));
      return;
    }
  };

  ZipArchiveOutputStream.prototype._appendStream = function (ae, source, callback) {
    ae.getGeneralPurposeBit().useDataDescriptor(true);
    ae.setVersionNeededToExtract(constants.MIN_VERSION_DATA_DESCRIPTOR);

    this._writeLocalFileHeader(ae);

    var smart = this._smartStream(ae, callback);

    source.once('error', function (err) {
      smart.emit('error', err);
      smart.end();
    });
    source.pipe(smart);
  };

  ZipArchiveOutputStream.prototype._defaults = function (o) {
    if (typeof o !== 'object') {
      o = {};
    }

    if (typeof o.zlib !== 'object') {
      o.zlib = {};
    }

    if (typeof o.zlib.level !== 'number') {
      o.zlib.level = constants.ZLIB_BEST_SPEED;
    }

    o.forceZip64 = !!o.forceZip64;
    o.forceLocalTime = !!o.forceLocalTime;
    return o;
  };

  ZipArchiveOutputStream.prototype._finish = function () {
    (this || _global)._archive.centralOffset = (this || _global).offset;

    (this || _global)._entries.forEach(function (ae) {
      this._writeCentralFileHeader(ae);
    }.bind(this || _global));

    (this || _global)._archive.centralLength = (this || _global).offset - (this || _global)._archive.centralOffset;

    if (this.isZip64()) {
      this._writeCentralDirectoryZip64();
    }

    this._writeCentralDirectoryEnd();

    (this || _global)._archive.processing = false;
    (this || _global)._archive.finish = true;
    (this || _global)._archive.finished = true;
    this.end();
  };

  ZipArchiveOutputStream.prototype._normalizeEntry = function (ae) {
    if (ae.getMethod() === -1) {
      ae.setMethod(constants.METHOD_DEFLATED);
    }

    if (ae.getMethod() === constants.METHOD_DEFLATED) {
      ae.getGeneralPurposeBit().useDataDescriptor(true);
      ae.setVersionNeededToExtract(constants.MIN_VERSION_DATA_DESCRIPTOR);
    }

    if (ae.getTime() === -1) {
      ae.setTime(new Date(), (this || _global)._archive.forceLocalTime);
    }

    ae._offsets = {
      file: 0,
      data: 0,
      contents: 0
    };
  };

  ZipArchiveOutputStream.prototype._smartStream = function (ae, callback) {
    var deflate = ae.getMethod() === constants.METHOD_DEFLATED;
    var process = deflate ? new DeflateCRC32Stream((this || _global).options.zlib) : new CRC32Stream();
    var error = null;

    function handleStuff() {
      var digest = process.digest().readUInt32BE(0);
      ae.setCrc(digest);
      ae.setSize(process.size());
      ae.setCompressedSize(process.size(true));

      this._afterAppend(ae);

      callback(error, ae);
    }

    process.once('end', handleStuff.bind(this || _global));
    process.once('error', function (err) {
      error = err;
    });
    process.pipe(this || _global, {
      end: false
    });
    return process;
  };

  ZipArchiveOutputStream.prototype._writeCentralDirectoryEnd = function () {
    var records = (this || _global)._entries.length;
    var size = (this || _global)._archive.centralLength;
    var offset = (this || _global)._archive.centralOffset;

    if (this.isZip64()) {
      records = constants.ZIP64_MAGIC_SHORT;
      size = constants.ZIP64_MAGIC;
      offset = constants.ZIP64_MAGIC;
    } // signature


    this.write(zipUtil.getLongBytes(constants.SIG_EOCD)); // disk numbers

    this.write(constants.SHORT_ZERO);
    this.write(constants.SHORT_ZERO); // number of entries

    this.write(zipUtil.getShortBytes(records));
    this.write(zipUtil.getShortBytes(records)); // length and location of CD

    this.write(zipUtil.getLongBytes(size));
    this.write(zipUtil.getLongBytes(offset)); // archive comment

    var comment = this.getComment();
    var commentLength = Buffer.byteLength(comment);
    this.write(zipUtil.getShortBytes(commentLength));
    this.write(comment);
  };

  ZipArchiveOutputStream.prototype._writeCentralDirectoryZip64 = function () {
    // signature
    this.write(zipUtil.getLongBytes(constants.SIG_ZIP64_EOCD)); // size of the ZIP64 EOCD record

    this.write(zipUtil.getEightBytes(44)); // version made by

    this.write(zipUtil.getShortBytes(constants.MIN_VERSION_ZIP64)); // version to extract

    this.write(zipUtil.getShortBytes(constants.MIN_VERSION_ZIP64)); // disk numbers

    this.write(constants.LONG_ZERO);
    this.write(constants.LONG_ZERO); // number of entries

    this.write(zipUtil.getEightBytes((this || _global)._entries.length));
    this.write(zipUtil.getEightBytes((this || _global)._entries.length)); // length and location of CD

    this.write(zipUtil.getEightBytes((this || _global)._archive.centralLength));
    this.write(zipUtil.getEightBytes((this || _global)._archive.centralOffset)); // extensible data sector
    // not implemented at this time
    // end of central directory locator

    this.write(zipUtil.getLongBytes(constants.SIG_ZIP64_EOCD_LOC)); // disk number holding the ZIP64 EOCD record

    this.write(constants.LONG_ZERO); // relative offset of the ZIP64 EOCD record

    this.write(zipUtil.getEightBytes((this || _global)._archive.centralOffset + (this || _global)._archive.centralLength)); // total number of disks

    this.write(zipUtil.getLongBytes(1));
  };

  ZipArchiveOutputStream.prototype._writeCentralFileHeader = function (ae) {
    var gpb = ae.getGeneralPurposeBit();
    var method = ae.getMethod();
    var offsets = ae._offsets;
    var size = ae.getSize();
    var compressedSize = ae.getCompressedSize();

    if (ae.isZip64() || offsets.file > constants.ZIP64_MAGIC) {
      size = constants.ZIP64_MAGIC;
      compressedSize = constants.ZIP64_MAGIC;
      ae.setVersionNeededToExtract(constants.MIN_VERSION_ZIP64);
      var extraBuf = Buffer.concat([zipUtil.getShortBytes(constants.ZIP64_EXTRA_ID), zipUtil.getShortBytes(24), zipUtil.getEightBytes(ae.getSize()), zipUtil.getEightBytes(ae.getCompressedSize()), zipUtil.getEightBytes(offsets.file)], 28);
      ae.setExtra(extraBuf);
    } // signature


    this.write(zipUtil.getLongBytes(constants.SIG_CFH)); // version made by

    this.write(zipUtil.getShortBytes(ae.getPlatform() << 8 | constants.VERSION_MADEBY)); // version to extract and general bit flag

    this.write(zipUtil.getShortBytes(ae.getVersionNeededToExtract()));
    this.write(gpb.encode()); // compression method

    this.write(zipUtil.getShortBytes(method)); // datetime

    this.write(zipUtil.getLongBytes(ae.getTimeDos())); // crc32 checksum

    this.write(zipUtil.getLongBytes(ae.getCrc())); // sizes

    this.write(zipUtil.getLongBytes(compressedSize));
    this.write(zipUtil.getLongBytes(size));
    var name = ae.getName();
    var comment = ae.getComment();
    var extra = ae.getCentralDirectoryExtra();

    if (gpb.usesUTF8ForNames()) {
      name = Buffer.from(name);
      comment = Buffer.from(comment);
    } // name length


    this.write(zipUtil.getShortBytes(name.length)); // extra length

    this.write(zipUtil.getShortBytes(extra.length)); // comments length

    this.write(zipUtil.getShortBytes(comment.length)); // disk number start

    this.write(constants.SHORT_ZERO); // internal attributes

    this.write(zipUtil.getShortBytes(ae.getInternalAttributes())); // external attributes

    this.write(zipUtil.getLongBytes(ae.getExternalAttributes())); // relative offset of LFH

    if (offsets.file > constants.ZIP64_MAGIC) {
      this.write(zipUtil.getLongBytes(constants.ZIP64_MAGIC));
    } else {
      this.write(zipUtil.getLongBytes(offsets.file));
    } // name


    this.write(name); // extra

    this.write(extra); // comment

    this.write(comment);
  };

  ZipArchiveOutputStream.prototype._writeDataDescriptor = function (ae) {
    // signature
    this.write(zipUtil.getLongBytes(constants.SIG_DD)); // crc32 checksum

    this.write(zipUtil.getLongBytes(ae.getCrc())); // sizes

    if (ae.isZip64()) {
      this.write(zipUtil.getEightBytes(ae.getCompressedSize()));
      this.write(zipUtil.getEightBytes(ae.getSize()));
    } else {
      this.write(zipUtil.getLongBytes(ae.getCompressedSize()));
      this.write(zipUtil.getLongBytes(ae.getSize()));
    }
  };

  ZipArchiveOutputStream.prototype._writeLocalFileHeader = function (ae) {
    var gpb = ae.getGeneralPurposeBit();
    var method = ae.getMethod();
    var name = ae.getName();
    var extra = ae.getLocalFileDataExtra();

    if (ae.isZip64()) {
      gpb.useDataDescriptor(true);
      ae.setVersionNeededToExtract(constants.MIN_VERSION_ZIP64);
    }

    if (gpb.usesUTF8ForNames()) {
      name = Buffer.from(name);
    }

    ae._offsets.file = (this || _global).offset; // signature

    this.write(zipUtil.getLongBytes(constants.SIG_LFH)); // version to extract and general bit flag

    this.write(zipUtil.getShortBytes(ae.getVersionNeededToExtract()));
    this.write(gpb.encode()); // compression method

    this.write(zipUtil.getShortBytes(method)); // datetime

    this.write(zipUtil.getLongBytes(ae.getTimeDos()));
    ae._offsets.data = (this || _global).offset; // crc32 checksum and sizes

    if (gpb.usesDataDescriptor()) {
      this.write(constants.LONG_ZERO);
      this.write(constants.LONG_ZERO);
      this.write(constants.LONG_ZERO);
    } else {
      this.write(zipUtil.getLongBytes(ae.getCrc()));
      this.write(zipUtil.getLongBytes(ae.getCompressedSize()));
      this.write(zipUtil.getLongBytes(ae.getSize()));
    } // name length


    this.write(zipUtil.getShortBytes(name.length)); // extra length

    this.write(zipUtil.getShortBytes(extra.length)); // name

    this.write(name); // extra

    this.write(extra);
    ae._offsets.contents = (this || _global).offset;
  };

  ZipArchiveOutputStream.prototype.getComment = function (comment) {
    return (this || _global)._archive.comment !== null ? (this || _global)._archive.comment : '';
  };

  ZipArchiveOutputStream.prototype.isZip64 = function () {
    return (this || _global)._archive.forceZip64 || (this || _global)._entries.length > constants.ZIP64_MAGIC_SHORT || (this || _global)._archive.centralLength > constants.ZIP64_MAGIC || (this || _global)._archive.centralOffset > constants.ZIP64_MAGIC;
  };

  ZipArchiveOutputStream.prototype.setComment = function (comment) {
    (this || _global)._archive.comment = comment;
  };

  return exports;
}