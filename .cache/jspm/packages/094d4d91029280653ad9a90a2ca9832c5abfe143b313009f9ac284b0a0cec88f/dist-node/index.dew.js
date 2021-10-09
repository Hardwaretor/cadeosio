import { dew as _indexDewDew } from "os-name/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
  }

  var osName = _interopDefault(_indexDewDew());

  function getUserAgent() {
    try {
      return `Node.js/${process.version.substr(1)} (${osName()}; ${process.arch})`;
    } catch (error) {
      if (/wmic os get Caption/.test(error.message)) {
        return "Windows <version undetectable>";
      }

      throw error;
    }
  }

  exports.getUserAgent = getUserAgent;
  return exports;
}