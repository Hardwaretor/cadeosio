import { dew as _indexDewDew } from "es6-symbol/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var iteratorSymbol = _indexDewDew().iterator;

  exports = function (T, a) {
    var it = new T("foobar");
    a(it[iteratorSymbol](), it, "@@iterator");
    a.deep(it.next(), {
      done: false,
      value: "f"
    }, "#1");
    a.deep(it.next(), {
      done: false,
      value: "o"
    }, "#2");
    a.deep(it.next(), {
      done: false,
      value: "o"
    }, "#3");
    a.deep(it.next(), {
      done: false,
      value: "b"
    }, "#4");
    a.deep(it.next(), {
      done: false,
      value: "a"
    }, "#5");
    a.deep(it.next(), {
      done: false,
      value: "r"
    }, "#6");
    a.deep(it.next(), {
      done: true,
      value: undefined
    }, "End");
    a.h1("Outside of BMP");
    it = new T("r💩z");
    a.deep(it.next(), {
      done: false,
      value: "r"
    }, "#1");
    a.deep(it.next(), {
      done: false,
      value: "💩"
    }, "#2");
    a.deep(it.next(), {
      done: false,
      value: "z"
    }, "#3");
    a.deep(it.next(), {
      done: true,
      value: undefined
    }, "End");
  };

  return exports;
}