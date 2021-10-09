import { dew as _arrayDewDew } from "../array.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var ArrayIterator = _arrayDewDew(),
      slice = Array.prototype.slice;

  exports = function (t, a) {
    var i = 0,
        x = ["raz", "dwa", "trzy"],
        y = {},
        called = 0;
    t(x, function () {
      a.deep(slice.call(arguments, 0, 1), [x[i]], "Array " + i + "#");
      a(this, y, "Array: context:  " + i++ + "#");
    }, y);
    i = 0;
    t(function () {
      return arguments;
    }("raz", "dwa", "trzy"), function () {
      a.deep(slice.call(arguments, 0, 1), [x[i]], "Arguments" + i + "#");
      a(this, y, "Arguments: context:  " + i++ + "#");
    }, y);
    i = 0;
    t(x = "foo", function () {
      a.deep(slice.call(arguments, 0, 1), [x[i]], "String " + i + "#");
      a(this, y, "Regular String: context:  " + i++ + "#");
    }, y);
    i = 0;
    x = ["r", "💩", "z"];
    t("r💩z", function () {
      a.deep(slice.call(arguments, 0, 1), [x[i]], "String " + i + "#");
      a(this, y, "Unicode String: context:  " + i++ + "#");
    }, y);
    i = 0;
    t(new ArrayIterator(x), function () {
      a.deep(slice.call(arguments, 0, 1), [x[i]], "Iterator " + i + "#");
      a(this, y, "Iterator: context:  " + i++ + "#");
    }, y);
    t(x = ["raz", "dwa", "trzy"], function (value, doBreak) {
      ++called;
      return doBreak();
    });
    a(called, 1, "Break");
  };

  return exports;
}