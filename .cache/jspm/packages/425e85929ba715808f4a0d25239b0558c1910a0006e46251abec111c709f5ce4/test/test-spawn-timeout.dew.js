var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  setTimeout(function () {// staying alive
  }, 60000);
  return exports;
}