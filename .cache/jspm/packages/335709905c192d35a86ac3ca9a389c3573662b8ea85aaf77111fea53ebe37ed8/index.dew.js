import { dew as _indexDewDew } from "p-finally/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const pFinally = _indexDewDew();

  class TimeoutError extends Error {
    constructor(message) {
      super(message);
      this.name = 'TimeoutError';
    }

  }

  exports = (promise, ms, fallback) => new Promise((resolve, reject) => {
    if (typeof ms !== 'number' || ms < 0) {
      throw new TypeError('Expected `ms` to be a positive number');
    }

    const timer = setTimeout(() => {
      if (typeof fallback === 'function') {
        resolve(fallback());
        return;
      }

      const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${ms} milliseconds`;
      const err = fallback instanceof Error ? fallback : new TimeoutError(message);
      reject(err);
    }, ms);
    pFinally(promise.then(resolve, reject), () => {
      clearTimeout(timer);
    });
  });

  exports.TimeoutError = TimeoutError;
  return exports;
}