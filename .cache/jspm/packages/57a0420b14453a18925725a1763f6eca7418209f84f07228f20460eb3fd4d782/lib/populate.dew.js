var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  // populates missing values
  exports = function (dst, src) {
    Object.keys(src).forEach(function (prop) {
      dst[prop] = dst[prop] || src[prop];
    });
    return dst;
  };

  return exports;
}