import { dew as _archiveEntryDewDew } from "./archivers/archive-entry.dew.js";
import { dew as _zipArchiveEntryDewDew } from "./archivers/zip/zip-archive-entry.dew.js";
import { dew as _archiveOutputStreamDewDew } from "./archivers/archive-output-stream.dew.js";
import { dew as _zipArchiveOutputStreamDewDew } from "./archivers/zip/zip-archive-output-stream.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * node-compress-commons
   *
   * Copyright (c) 2014 Chris Talkington, contributors.
   * Licensed under the MIT license.
   * https://github.com/archiverjs/node-compress-commons/blob/master/LICENSE-MIT
   */
  exports = {
    ArchiveEntry: _archiveEntryDewDew(),
    ZipArchiveEntry: _zipArchiveEntryDewDew(),
    ArchiveOutputStream: _archiveOutputStreamDewDew(),
    ZipArchiveOutputStream: _zipArchiveOutputStreamDewDew()
  };
  return exports;
}