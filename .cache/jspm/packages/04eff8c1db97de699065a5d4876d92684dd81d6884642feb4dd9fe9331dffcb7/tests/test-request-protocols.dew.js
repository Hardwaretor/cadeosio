import _util from "util";
import _assert from "assert";
import { dew as _XMLHttpRequestDewDew } from "../lib/XMLHttpRequest.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var sys = _util,
      assert = _assert,
      XMLHttpRequest = _XMLHttpRequestDewDew().XMLHttpRequest,
      xhr;

  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if ((this || _global).readyState == 4) {
      assert.equal("Hello World", (this || _global).responseText);
      runSync();
    }
  }; // Async


  var url = "file://" + (import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + "/testdata.txt";
  xhr.open("GET", url);
  xhr.send(); // Sync

  var runSync = function () {
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if ((this || _global).readyState == 4) {
        assert.equal("Hello World", (this || _global).responseText);
        sys.puts("done");
      }
    };

    xhr.open("GET", url, false);
    xhr.send();
  };

  return exports;
}