import _domain from "domain";
import { dew as _indexDewDew } from "end-of-stream/index.dew.js";
import { dew as _indexDew2Dew } from "process-nextick-args/index.dew.js";
import { dew as _indexDew3Dew } from "once/index.dew.js";
import { dew as _indexDew4Dew } from "stream-exhaust/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var domain = _domain;

  var eos = _indexDewDew();

  var p = _indexDew2Dew();

  var once = _indexDew3Dew();

  var exhaust = _indexDew4Dew();

  var eosConfig = {
    error: false
  };

  function rethrowAsync(err) {
    process.nextTick(rethrow);

    function rethrow() {
      throw err;
    }
  }

  function tryCatch(fn, args) {
    try {
      return fn.apply(null, args);
    } catch (err) {
      rethrowAsync(err);
    }
  }

  function asyncDone(fn, cb) {
    cb = once(cb);
    var d = domain.create();
    d.once('error', onError);
    var domainBoundFn = d.bind(fn);

    function done() {
      d.removeListener('error', onError);
      d.exit();
      return tryCatch(cb, arguments);
    }

    function onSuccess(result) {
      done(null, result);
    }

    function onError(error) {
      if (!error) {
        error = new Error('Promise rejected without Error');
      }

      done(error);
    }

    function asyncRunner() {
      var result = domainBoundFn(done);

      function onNext(state) {
        onNext.state = state;
      }

      function onCompleted() {
        onSuccess(onNext.state);
      }

      if (result && typeof result.on === 'function') {
        // Assume node stream
        d.add(result);
        eos(exhaust(result), eosConfig, done);
        return;
      }

      if (result && typeof result.subscribe === 'function') {
        // Assume RxJS observable
        result.subscribe(onNext, onError, onCompleted);
        return;
      }

      if (result && typeof result.then === 'function') {
        // Assume promise
        result.then(onSuccess, onError);
        return;
      }
    }

    p.nextTick(asyncRunner);
  }

  exports = asyncDone;
  return exports;
}