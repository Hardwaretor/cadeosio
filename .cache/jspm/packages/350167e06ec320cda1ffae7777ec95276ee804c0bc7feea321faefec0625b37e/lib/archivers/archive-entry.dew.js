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
  var ArchiveEntry = exports = function () {};

  ArchiveEntry.prototype.getName = function () {};

  ArchiveEntry.prototype.getSize = function () {};

  ArchiveEntry.prototype.getLastModifiedDate = function () {};

  ArchiveEntry.prototype.isDirectory = function () {};

  return exports;
}