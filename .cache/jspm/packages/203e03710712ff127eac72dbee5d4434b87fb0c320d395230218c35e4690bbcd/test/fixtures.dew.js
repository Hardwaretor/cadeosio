import _assert from "assert";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var assert = _assert;

  function expectData(stream, expected, callback) {
    var actual = '';
    stream.on('data', function (chunk) {
      actual += chunk;
    });
    stream.on('end', function () {
      assert.equal(actual, expected);
      callback();
    });
  }

  exports.expectData = expectData;
  return exports;
}