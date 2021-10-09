import _assert from "assert";
import { dew as _indexDewDew } from "callsite/index.dew.js";
import _fs from "fs";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  /**
   * Module dependencies.
   */
  var AssertionError = _assert.AssertionError,
      callsite = _indexDewDew(),
      fs = _fs;
  /**
   * Expose `assert`.
   */


  exports = process.env.NO_ASSERT ? function () {} : assert;
  /**
   * Assert the given `expr`.
   */

  function assert(expr) {
    if (expr) return;
    var stack = callsite();
    var call = stack[1];
    var file = call.getFileName();
    var lineno = call.getLineNumber();
    var src = fs.readFileSync(file, 'utf8');
    var line = src.split('\n')[lineno - 1];
    var src = line.match(/assert\((.*)\)/)[1];
    var err = new AssertionError({
      message: src,
      stackStartFunction: stack[0].getFunction()
    });
    throw err;
  }

  return exports;
}