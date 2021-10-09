var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function tryRun(count, retryOptions, fn, callback) {
    fn(function (err, result) {
      if (err) {
        if (count < retryOptions.retries) {
          return setTimeout(function () {
            tryRun(count + 1, retryOptions, fn, callback);
          }, retryOptions.timeout);
        }

        return callback(err);
      }

      callback(null, result);
    });
  };

  return exports;
}