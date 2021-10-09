import _assert from "assert";
import { dew as _indexDewDew } from "es6-weak-map/index.dew.js";
import { dew as _isNativeImplementedDewDew } from "es6-weak-map/is-native-implemented.dew.js";
import { dew as _indexDew2Dew } from "default-resolution/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var assert = _assert;

  var WM = _indexDewDew();

  var hasNativeWeakMap = _isNativeImplementedDewDew();

  var defaultResolution = _indexDew2Dew();

  var runtimes = new WM();

  function isFunction(fn) {
    return typeof fn === 'function';
  }

  function isExtensible(fn) {
    if (hasNativeWeakMap) {
      // Native weakmap doesn't care about extensible
      return true;
    }

    return Object.isExtensible(fn);
  }

  function lastRun(fn, timeResolution) {
    assert(isFunction(fn), 'Only functions can check lastRun');
    assert(isExtensible(fn), 'Only extensible functions can check lastRun');
    var time = runtimes.get(fn);

    if (time == null) {
      return;
    }

    var resolution = defaultResolution(timeResolution);
    return time - time % resolution;
  }

  function capture(fn, timestamp) {
    assert(isFunction(fn), 'Only functions can be captured');
    assert(isExtensible(fn), 'Only extensible functions can be captured');
    timestamp = timestamp || Date.now();
    runtimes.set(fn, timestamp);
  }

  function release(fn) {
    assert(isFunction(fn), 'Only functions can be captured');
    assert(isExtensible(fn), 'Only extensible functions can be captured');
    runtimes.delete(fn);
  }

  lastRun.capture = capture;
  lastRun.release = release;
  exports = lastRun;
  return exports;
}