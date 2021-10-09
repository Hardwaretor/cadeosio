import { dew as _indexDewDew } from "./index.dew.js";
import _assert from "assert";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var names = _indexDewDew();

  var assert = _assert;
  assert.deepEqual(names.red, [255, 0, 0]);
  assert.deepEqual(names.aliceblue, [240, 248, 255]);
  return exports;
}