import _util from "util";
import _assert from "assert";
import { dew as _XMLHttpRequestDewDew } from "../lib/XMLHttpRequest.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var sys = _util,
      assert = _assert,
      XMLHttpRequest = _XMLHttpRequestDewDew().XMLHttpRequest,
      xhr = new XMLHttpRequest(); // Test constant values


  assert.equal(0, xhr.UNSENT);
  assert.equal(1, xhr.OPENED);
  assert.equal(2, xhr.HEADERS_RECEIVED);
  assert.equal(3, xhr.LOADING);
  assert.equal(4, xhr.DONE);
  sys.puts("done");
  return exports;
}