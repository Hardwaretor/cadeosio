import { dew as _indexDewDew } from "mime-db/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var mimeDb = _indexDewDew();

  exports = function () {
    var ret = {};
    Object.keys(mimeDb).forEach(function (x) {
      var val = mimeDb[x];

      if (val.extensions && val.extensions.length > 0) {
        val.extensions.forEach(function (y) {
          ret[y] = x;
        });
      }
    });
    return ret;
  };

  return exports;
}