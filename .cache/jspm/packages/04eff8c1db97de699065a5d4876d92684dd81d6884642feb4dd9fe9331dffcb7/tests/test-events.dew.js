import _util from "util";
import _assert from "assert";
import _http from "http";
import { dew as _XMLHttpRequestDewDew } from "../lib/XMLHttpRequest.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  var sys = _util,
      assert = _assert,
      http = _http,
      XMLHttpRequest = _XMLHttpRequestDewDew().XMLHttpRequest,
      xhr; // Test server


  var server = http.createServer(function (req, res) {
    var body = req.method != "HEAD" ? "Hello World" : "";
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Content-Length": Buffer.byteLength(body)
    }); // HEAD has no body

    if (req.method != "HEAD") {
      res.write(body);
    }

    res.end();
    assert.equal(onreadystatechange, true);
    assert.equal(readystatechange, true);
    assert.equal(removed, true);
    sys.puts("done");
    this.close();
  }).listen(8000);
  xhr = new XMLHttpRequest(); // Track event calls

  var onreadystatechange = false;
  var readystatechange = false;
  var removed = true;

  var removedEvent = function () {
    removed = false;
  };

  xhr.onreadystatechange = function () {
    onreadystatechange = true;
  };

  xhr.addEventListener("readystatechange", function () {
    readystatechange = true;
  }); // This isn't perfect, won't guarantee it was added in the first place

  xhr.addEventListener("readystatechange", removedEvent);
  xhr.removeEventListener("readystatechange", removedEvent);
  xhr.open("GET", "http://localhost:8000");
  xhr.send();
  return exports;
}