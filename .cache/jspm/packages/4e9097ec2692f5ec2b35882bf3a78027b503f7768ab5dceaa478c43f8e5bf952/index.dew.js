import { dew as _encodingDewDew } from "./lib/encoding.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  // This is free and unencumbered software released into the public domain.
  // See LICENSE.md for more information.
  var encoding = _encodingDewDew();

  exports = {
    TextEncoder: encoding.TextEncoder,
    TextDecoder: encoding.TextDecoder
  };
  return exports;
}