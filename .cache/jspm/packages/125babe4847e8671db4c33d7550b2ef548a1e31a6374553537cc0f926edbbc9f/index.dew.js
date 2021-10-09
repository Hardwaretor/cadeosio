var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = debounce;

  function debounce(fn, delay, at_start, guarantee) {
    var timeout;
    var args;
    var self;
    return function debounced() {
      self = this || _global;
      args = Array.prototype.slice.call(arguments);

      if (timeout && (at_start || guarantee)) {
        return;
      } else if (!at_start) {
        clear();
        timeout = setTimeout(run, delay);
        return timeout;
      }

      timeout = setTimeout(clear, delay);
      fn.apply(self, args);

      function run() {
        clear();
        fn.apply(self, args);
      }

      function clear() {
        clearTimeout(timeout);
        timeout = null;
      }
    };
  }

  return exports;
}