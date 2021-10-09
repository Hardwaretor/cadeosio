import _net from "net";
import _assert from "assert";
import { dew as _indexDewDew } from "./index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var net = _net;
  var assert = _assert;

  var enableDestroy = _indexDewDew();

  var server = net.createServer(function (conn) {
    var i = setInterval(function () {
      conn.read();
      conn.write('hi\n');
    }, 100);
    i.unref();
  });
  server.listen(1337);
  enableDestroy(server);
  var connected = 0;

  for (var i = 0; i < 10; i++) {
    var client = net.connect(1337);
    client.on('connect', function () {
      connected++;
      if (connected === 10) setTimeout(destroy);
    }); // just ignore the resets

    client.on('error', function () {});
  }

  function destroy() {
    server.destroy(function () {
      console.log('ok');
    });
  }

  return exports;
}