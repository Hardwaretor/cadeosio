import _os from "os";
import { dew as _polyfillDewDew } from "./polyfill.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var os = _os;

  if (typeof os.homedir !== 'undefined') {
    exports = os.homedir;
  } else {
    exports = _polyfillDewDew();
  }

  return exports;
}