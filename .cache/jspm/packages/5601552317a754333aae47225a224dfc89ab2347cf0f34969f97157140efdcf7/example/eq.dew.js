import { dew as _indexDewDew } from "../index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  var bufferEqual = _indexDewDew();

  console.dir(bufferEqual(new Buffer([253, 254, 255]), new Buffer([253, 254, 255])));
  console.dir(bufferEqual(new Buffer('abc'), new Buffer('abcd')));
  console.dir(bufferEqual(new Buffer('abc'), 'abc'));
  return exports;
}