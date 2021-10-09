import _stream from "stream";
import { dew as _indexDewDew } from "readable-stream/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
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
  var Stream = _stream.Stream;

  var PassThrough = _indexDewDew().PassThrough;

  var util = exports = {};

  util.isStream = function (source) {
    return source instanceof Stream;
  };

  util.normalizeInputSource = function (source) {
    if (source === null) {
      return Buffer.alloc(0);
    } else if (typeof source === 'string') {
      return Buffer.from(source);
    } else if (util.isStream(source) && !source._readableState) {
      var normalized = new PassThrough();
      source.pipe(normalized);
      return normalized;
    }

    return source;
  };

  return exports;
}