import { dew as _indexDewDew } from "define-properties/index.dew.js";
import { dew as _polyfillDewDew } from "./polyfill.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var define = _indexDewDew();

  var getPolyfill = _polyfillDewDew();

  exports = function shimAssign() {
    var polyfill = getPolyfill();
    define(Object, {
      assign: polyfill
    }, {
      assign: function () {
        return Object.assign !== polyfill;
      }
    });
    return polyfill;
  };

  return exports;
}