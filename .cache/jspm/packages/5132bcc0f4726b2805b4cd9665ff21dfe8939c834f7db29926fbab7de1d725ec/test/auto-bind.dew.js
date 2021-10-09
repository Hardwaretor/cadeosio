import { dew as _indexDewDew } from "../index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var d = _indexDewDew();

  exports = function (t, a) {
    var o = Object.defineProperties({}, t({
      bar: d(function () {
        return this === o;
      }),
      bar2: d(function () {
        return this;
      })
    }));
    a.deep([o.bar(), o.bar2()], [true, o]);
  };

  return exports;
}