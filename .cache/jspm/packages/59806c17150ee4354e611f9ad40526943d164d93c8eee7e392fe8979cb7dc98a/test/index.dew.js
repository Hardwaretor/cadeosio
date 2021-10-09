import _path from "path";
import _assert from "assert";
import { dew as _indexDewDew } from "../index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  // Copyright 2014 Simon Lydell
  // X11 (“MIT”) Licensed. (See LICENSE.)
  var path = _path;
  var assert = _assert;

  var urix = _indexDewDew();

  "use stict";

  function test(testPath, expected) {
    path.sep = "\\";
    assert.equal(urix(testPath), expected);
    path.sep = "/";
    assert.equal(urix(testPath), testPath);
  }

  describe("urix", function () {
    it("is a function", function () {
      assert.equal(typeof urix, "function");
    });
    it("converts backslashes to slashes", function () {
      test("a\\b\\c", "a/b/c");
      test("\\a\\b\\c", "/a/b/c");
      test("a/b\\c", "a/b/c");
      test("\\\\a\\\\\\b///c", "//a///b///c");
    });
    it("changes the drive letter to a slash", function () {
      test("c:\\a", "/a");
      test("C:\\a", "/a");
      test("z:\\a", "/a");
      test("c:a", "/a");
      test("c:/a", "/a");
      test("c:\\\\a", "//a");
      test("c://a", "//a");
      test("c:\\//a", "///a");
    });
  });
  return exports;
}