var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (from, to, options) {
    this.copy(from, to, options);
    this.delete(from, options);
  };

  return exports;
}