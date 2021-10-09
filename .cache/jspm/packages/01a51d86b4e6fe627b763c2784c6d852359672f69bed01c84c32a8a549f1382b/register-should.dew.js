import { dew as _indexDewDew } from "./index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  _global.should = _indexDewDew().should();
  return exports;
}