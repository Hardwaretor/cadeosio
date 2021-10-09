import { dew as _resolveUrlDewDew } from "../resolve-url.dew.js";
import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  // Copyright 2014 Simon Lydell
  // X11 (“MIT”) Licensed. (See LICENSE.)
  var test = _nodeRequire("tape");

  var resolveUrl = _resolveUrlDewDew();

  "use strict";

  test("resolveUrl", function (t) {
    t.plan(7);
    t.equal(typeof resolveUrl, "function", "is a function");
    t.equal(resolveUrl("https://example.com/"), "https://example.com/");
    var loc = "https://example.com/articles/resolving-urls/edit";
    t.equal(resolveUrl(loc, "remove"), "https://example.com/articles/resolving-urls/remove");
    t.equal(resolveUrl(loc, "/static/scripts/app.js"), "https://example.com/static/scripts/app.js");
    t.equal(resolveUrl(loc, "/static/scripts/app.js", "../source-maps/app.js.map"), "https://example.com/static/source-maps/app.js.map");
    t.equal(resolveUrl(loc, "/static/scripts/app.js", "../source-maps/app.js.map", "../coffee/app.coffee"), "https://example.com/static/coffee/app.coffee");
    t.equal(resolveUrl(loc, "//cdn.example.com/jquery.js"), "https://cdn.example.com/jquery.js");
  });
  test("edge cases", function (t) {
    t.plan(4);
    t["throws"](resolveUrl, /at least one argument/, "throws with no arguments");
    var accidentallyUndefined;
    var result;
    t.doesNotThrow(function () {
      result = resolveUrl(accidentallyUndefined);
    }, "undefined is still an argument");
    t.ok(result.match(/\/undefined$/), "undefined is stringified");
    t.equal(resolveUrl("http://foo.org/test", undefined, {}, ["a/b"], null), "http://foo.org/a/null", "arguments are stringified");
  });
  return exports;
}