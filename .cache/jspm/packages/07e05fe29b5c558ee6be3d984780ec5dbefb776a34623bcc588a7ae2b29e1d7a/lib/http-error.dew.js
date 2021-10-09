var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = class HttpError extends Error {
    constructor(message, code, headers) {
      super(message); // Maintains proper stack trace (only available on V8)

      /* istanbul ignore next */

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this || _global, (this || _global).constructor);
      }

      (this || _global).name = 'HttpError';
      (this || _global).code = code;
      (this || _global).headers = headers;
    }

  };
  return exports;
}