import _util from "util";
import _stream from "stream";
import { dew as _readable_asynckitDewDew } from "./lib/readable_asynckit.dew.js";
import { dew as _readable_parallelDewDew } from "./lib/readable_parallel.dew.js";
import { dew as _readable_serialDewDew } from "./lib/readable_serial.dew.js";
import { dew as _readable_serial_orderedDewDew } from "./lib/readable_serial_ordered.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var inherits = _util.inherits,
      Readable = _stream.Readable,
      ReadableAsyncKit = _readable_asynckitDewDew(),
      ReadableParallel = _readable_parallelDewDew(),
      ReadableSerial = _readable_serialDewDew(),
      ReadableSerialOrdered = _readable_serial_orderedDewDew(); // API


  exports = {
    parallel: ReadableParallel,
    serial: ReadableSerial,
    serialOrdered: ReadableSerialOrdered
  };
  inherits(ReadableAsyncKit, Readable);
  inherits(ReadableParallel, ReadableAsyncKit);
  inherits(ReadableSerial, ReadableAsyncKit);
  inherits(ReadableSerialOrdered, ReadableAsyncKit);
  return exports;
}