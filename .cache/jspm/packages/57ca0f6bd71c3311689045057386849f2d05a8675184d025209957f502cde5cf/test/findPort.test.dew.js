import { dew as _findPortDewDew } from "../lib/findPort.dew.js";
import _http from "http";
import _assert from "assert";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var findPort = _findPortDewDew();

  var http = _http;
  var assert = _assert;
  describe('findPort', function () {
    var server;
    beforeEach(function (done) {
      server = http.createServer(function (request, response) {
        response.end();
      });
      server.on('listening', done);
      server.listen(9000);
    });
    afterEach(function () {
      server.close();
    });
    it('throws an error if callback is missing with one argument', function () {
      assert.throws(function () {
        findPort(9000);
      });
    });
    it('throws an error if callback is missing with two arguments', function () {
      assert.throws(function () {
        findPort(9000, 9002);
      });
    });
    it('finds unused ports in a range', function (done) {
      findPort(9000, 9003, function (ports) {
        assert.deepEqual(ports, [9001, 9002, 9003]);
        done();
      });
    });
    it('finds unused ports in an array', function (done) {
      findPort([9000, 9003], function (ports) {
        assert.deepEqual(ports, [9003]);
        done();
      });
    });
  });
  return exports;
}