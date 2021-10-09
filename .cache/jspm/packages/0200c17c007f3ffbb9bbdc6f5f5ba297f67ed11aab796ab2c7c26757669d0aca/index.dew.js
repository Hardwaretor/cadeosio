var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (val) {
    if (val === null || val === undefined) {
      return [];
    }

    return Array.isArray(val) ? val : [val];
  };

  return exports;
}