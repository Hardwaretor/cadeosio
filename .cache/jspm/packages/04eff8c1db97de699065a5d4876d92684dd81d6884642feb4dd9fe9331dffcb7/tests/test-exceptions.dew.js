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
      xhr = new XMLHttpRequest(); // Test request methods that aren't allowed


  try {
    xhr.open("TRACK", "http://localhost:8000/");
    console.log("ERROR: TRACK should have thrown exception");
  } catch (e) {}

  try {
    xhr.open("TRACE", "http://localhost:8000/");
    console.log("ERROR: TRACE should have thrown exception");
  } catch (e) {}

  try {
    xhr.open("CONNECT", "http://localhost:8000/");
    console.log("ERROR: CONNECT should have thrown exception");
  } catch (e) {} // Test valid request method


  try {
    xhr.open("GET", "http://localhost:8000/");
  } catch (e) {
    console.log("ERROR: Invalid exception for GET", e);
  } // Test forbidden headers


  var forbiddenRequestHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "content-transfer-encoding", "cookie", "cookie2", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"];

  for (var i in forbiddenRequestHeaders) {
    if (xhr.setRequestHeader(forbiddenRequestHeaders[i], "Test") !== false) {
      console.log("ERROR: " + forbiddenRequestHeaders[i] + " should have thrown exception");
    }
  } // Try valid header


  xhr.setRequestHeader("X-Foobar", "Test");
  console.log("Done");
  return exports;
}