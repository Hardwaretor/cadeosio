import _util from "util";
import { dew as _indexDewDew } from "normalize-path/index.dew.js";
import { dew as _archiveEntryDewDew } from "../archive-entry.dew.js";
import { dew as _generalPurposeBitDewDew } from "./general-purpose-bit.dew.js";
import { dew as _unixStatDewDew } from "./unix-stat.dew.js";
import { dew as _constantsDewDew } from "./constants.dew.js";
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

  var normalizePath = _indexDewDew();

  var ArchiveEntry = _archiveEntryDewDew();

  var GeneralPurposeBit = _generalPurposeBitDewDew();

  var UnixStat = _unixStatDewDew();

  var constants = _constantsDewDew();

  var zipUtil = _utilDewDew();

  var ZipArchiveEntry = exports = function (name) {
    if (!((this || _global) instanceof ZipArchiveEntry)) {
      return new ZipArchiveEntry(name);
    }

    ArchiveEntry.call(this || _global);
    (this || _global).platform = constants.PLATFORM_FAT;
    (this || _global).method = -1;
    (this || _global).name = null;
    (this || _global).size = 0;
    (this || _global).csize = 0;
    (this || _global).gpb = new GeneralPurposeBit();
    (this || _global).crc = 0;
    (this || _global).time = -1;
    (this || _global).minver = constants.MIN_VERSION_INITIAL;
    (this || _global).mode = -1;
    (this || _global).extra = null;
    (this || _global).exattr = 0;
    (this || _global).inattr = 0;
    (this || _global).comment = null;

    if (name) {
      this.setName(name);
    }
  };

  inherits(ZipArchiveEntry, ArchiveEntry);
  /**
   * Returns the extra fields related to the entry.
   *
   * @returns {Buffer}
   */

  ZipArchiveEntry.prototype.getCentralDirectoryExtra = function () {
    return this.getExtra();
  };
  /**
   * Returns the comment set for the entry.
   *
   * @returns {string}
   */


  ZipArchiveEntry.prototype.getComment = function () {
    return (this || _global).comment !== null ? (this || _global).comment : '';
  };
  /**
   * Returns the compressed size of the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getCompressedSize = function () {
    return (this || _global).csize;
  };
  /**
   * Returns the CRC32 digest for the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getCrc = function () {
    return (this || _global).crc;
  };
  /**
   * Returns the external file attributes for the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getExternalAttributes = function () {
    return (this || _global).exattr;
  };
  /**
   * Returns the extra fields related to the entry.
   *
   * @returns {Buffer}
   */


  ZipArchiveEntry.prototype.getExtra = function () {
    return (this || _global).extra !== null ? (this || _global).extra : constants.EMPTY;
  };
  /**
   * Returns the general purpose bits related to the entry.
   *
   * @returns {GeneralPurposeBit}
   */


  ZipArchiveEntry.prototype.getGeneralPurposeBit = function () {
    return (this || _global).gpb;
  };
  /**
   * Returns the internal file attributes for the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getInternalAttributes = function () {
    return (this || _global).inattr;
  };
  /**
   * Returns the last modified date of the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getLastModifiedDate = function () {
    return this.getTime();
  };
  /**
   * Returns the extra fields related to the entry.
   *
   * @returns {Buffer}
   */


  ZipArchiveEntry.prototype.getLocalFileDataExtra = function () {
    return this.getExtra();
  };
  /**
   * Returns the compression method used on the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getMethod = function () {
    return (this || _global).method;
  };
  /**
   * Returns the filename of the entry.
   *
   * @returns {string}
   */


  ZipArchiveEntry.prototype.getName = function () {
    return (this || _global).name;
  };
  /**
   * Returns the platform on which the entry was made.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getPlatform = function () {
    return (this || _global).platform;
  };
  /**
   * Returns the size of the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getSize = function () {
    return (this || _global).size;
  };
  /**
   * Returns a date object representing the last modified date of the entry.
   *
   * @returns {number|Date}
   */


  ZipArchiveEntry.prototype.getTime = function () {
    return (this || _global).time !== -1 ? zipUtil.dosToDate((this || _global).time) : -1;
  };
  /**
   * Returns the DOS timestamp for the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getTimeDos = function () {
    return (this || _global).time !== -1 ? (this || _global).time : 0;
  };
  /**
   * Returns the UNIX file permissions for the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getUnixMode = function () {
    return (this || _global).platform !== constants.PLATFORM_UNIX ? 0 : this.getExternalAttributes() >> constants.SHORT_SHIFT & constants.SHORT_MASK;
  };
  /**
   * Returns the version of ZIP needed to extract the entry.
   *
   * @returns {number}
   */


  ZipArchiveEntry.prototype.getVersionNeededToExtract = function () {
    return (this || _global).minver;
  };
  /**
   * Sets the comment of the entry.
   *
   * @param comment
   */


  ZipArchiveEntry.prototype.setComment = function (comment) {
    if (Buffer.byteLength(comment) !== comment.length) {
      this.getGeneralPurposeBit().useUTF8ForNames(true);
    }

    (this || _global).comment = comment;
  };
  /**
   * Sets the compressed size of the entry.
   *
   * @param size
   */


  ZipArchiveEntry.prototype.setCompressedSize = function (size) {
    if (size < 0) {
      throw new Error('invalid entry compressed size');
    }

    (this || _global).csize = size;
  };
  /**
   * Sets the checksum of the entry.
   *
   * @param crc
   */


  ZipArchiveEntry.prototype.setCrc = function (crc) {
    if (crc < 0) {
      throw new Error('invalid entry crc32');
    }

    (this || _global).crc = crc;
  };
  /**
   * Sets the external file attributes of the entry.
   *
   * @param attr
   */


  ZipArchiveEntry.prototype.setExternalAttributes = function (attr) {
    (this || _global).exattr = attr >>> 0;
  };
  /**
   * Sets the extra fields related to the entry.
   *
   * @param extra
   */


  ZipArchiveEntry.prototype.setExtra = function (extra) {
    (this || _global).extra = extra;
  };
  /**
   * Sets the general purpose bits related to the entry.
   *
   * @param gpb
   */


  ZipArchiveEntry.prototype.setGeneralPurposeBit = function (gpb) {
    if (!(gpb instanceof GeneralPurposeBit)) {
      throw new Error('invalid entry GeneralPurposeBit');
    }

    (this || _global).gpb = gpb;
  };
  /**
   * Sets the internal file attributes of the entry.
   *
   * @param attr
   */


  ZipArchiveEntry.prototype.setInternalAttributes = function (attr) {
    (this || _global).inattr = attr;
  };
  /**
   * Sets the compression method of the entry.
   *
   * @param method
   */


  ZipArchiveEntry.prototype.setMethod = function (method) {
    if (method < 0) {
      throw new Error('invalid entry compression method');
    }

    (this || _global).method = method;
  };
  /**
   * Sets the name of the entry.
   *
   * @param name
   */


  ZipArchiveEntry.prototype.setName = function (name) {
    name = normalizePath(name, false).replace(/^\w+:/, '').replace(/^(\.\.\/|\/)+/, '');

    if (Buffer.byteLength(name) !== name.length) {
      this.getGeneralPurposeBit().useUTF8ForNames(true);
    }

    (this || _global).name = name;
  };
  /**
   * Sets the platform on which the entry was made.
   *
   * @param platform
   */


  ZipArchiveEntry.prototype.setPlatform = function (platform) {
    (this || _global).platform = platform;
  };
  /**
   * Sets the size of the entry.
   *
   * @param size
   */


  ZipArchiveEntry.prototype.setSize = function (size) {
    if (size < 0) {
      throw new Error('invalid entry size');
    }

    (this || _global).size = size;
  };
  /**
   * Sets the time of the entry.
   *
   * @param time
   * @param forceLocalTime
   */


  ZipArchiveEntry.prototype.setTime = function (time, forceLocalTime) {
    if (!(time instanceof Date)) {
      throw new Error('invalid entry time');
    }

    (this || _global).time = zipUtil.dateToDos(time, forceLocalTime);
  };
  /**
   * Sets the UNIX file permissions for the entry.
   *
   * @param mode
   */


  ZipArchiveEntry.prototype.setUnixMode = function (mode) {
    mode |= this.isDirectory() ? constants.S_IFDIR : constants.S_IFREG;
    var extattr = 0;
    extattr |= mode << constants.SHORT_SHIFT | (this.isDirectory() ? constants.S_DOS_D : constants.S_DOS_A);
    this.setExternalAttributes(extattr);
    (this || _global).mode = mode & constants.MODE_MASK;
    (this || _global).platform = constants.PLATFORM_UNIX;
  };
  /**
   * Sets the version of ZIP needed to extract this entry.
   *
   * @param minver
   */


  ZipArchiveEntry.prototype.setVersionNeededToExtract = function (minver) {
    (this || _global).minver = minver;
  };
  /**
   * Returns true if this entry represents a directory.
   *
   * @returns {boolean}
   */


  ZipArchiveEntry.prototype.isDirectory = function () {
    return this.getName().slice(-1) === '/';
  };
  /**
   * Returns true if this entry represents a unix symlink,
   * in which case the entry's content contains the target path
   * for the symlink.
   *
   * @returns {boolean}
   */


  ZipArchiveEntry.prototype.isUnixSymlink = function () {
    return (this.getUnixMode() & UnixStat.FILE_TYPE_FLAG) === UnixStat.LINK_FLAG;
  };
  /**
   * Returns true if this entry is using the ZIP64 extension of ZIP.
   *
   * @returns {boolean}
   */


  ZipArchiveEntry.prototype.isZip64 = function () {
    return (this || _global).csize > constants.ZIP64_MAGIC || (this || _global).size > constants.ZIP64_MAGIC;
  };

  return exports;
}