import { dew as _indexDewDew } from "first-chunk-stream/index.dew.js";
import { dew as _indexDew2Dew } from "strip-bom/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var firstChunk = _indexDewDew();

  var stripBom = _indexDew2Dew();

  exports = function () {
    return firstChunk({
      minSize: 3
    }, function (chunk, enc, cb) {
      this.push(stripBom(chunk));
      cb();
    });
  };

  return exports;
}