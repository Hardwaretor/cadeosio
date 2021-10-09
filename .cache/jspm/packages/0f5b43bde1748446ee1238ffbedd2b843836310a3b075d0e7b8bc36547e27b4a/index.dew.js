var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = Error.captureStackTrace || function (error) {
    var container = new Error();
    Object.defineProperty(error, 'stack', {
      configurable: true,
      get: function getStack() {
        var stack = container.stack;
        Object.defineProperty(this, 'stack', {
          value: stack
        });
        return stack;
      }
    });
  };

  return exports;
}