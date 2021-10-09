import { dew as _indexDewDew } from "./index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var assert = _indexDewDew();

  test();

  function test() {
    var user = {
      name: 'tobi'
    };
    assert('tobi' == user.name);
    assert('number' == typeof user.age);
  }

  return exports;
}