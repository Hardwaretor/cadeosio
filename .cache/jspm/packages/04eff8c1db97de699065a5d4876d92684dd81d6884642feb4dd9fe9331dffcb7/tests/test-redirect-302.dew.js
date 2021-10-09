import _util from "util";
import _assert from "assert";
import { dew as _XMLHttpRequestDewDew } from "../lib/XMLHttpRequest.dew.js";
import _http from "http";
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
      XMLHttpRequest = _XMLHttpRequestDewDew().XMLHttpRequest,
      xhr = new XMLHttpRequest(),
      http = _http; // Test server


  var server = http.createServer(function (req, res) {
    if (req.url === '/redirectingResource') {
      res.writeHead(302, {
        'Location': 'http://localhost:8000/'
      });
      res.end();
      return;
    }

    var body = "Hello World";
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Content-Length": Buffer.byteLength(body),
      "Date": "Thu, 30 Aug 2012 18:17:53 GMT",
      "Connection": "close"
    });
    res.write("Hello World");
    res.end();
    this.close();
  }).listen(8000);

  xhr.onreadystatechange = function () {
    if ((this || _global).readyState == 4) {
      assert.equal(xhr.getRequestHeader('Location'), '');
      assert.equal(xhr.responseText, "Hello World");
      sys.puts("done");
    }
  };

  try {
    xhr.open("GET", "http://localhost:8000/redirectingResource");
    xhr.send();
  } catch (e) {
    console.log("ERROR: Exception raised", e);
  }

  return exports;
}