var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var toString = {}.toString;

  exports = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  return exports;
}