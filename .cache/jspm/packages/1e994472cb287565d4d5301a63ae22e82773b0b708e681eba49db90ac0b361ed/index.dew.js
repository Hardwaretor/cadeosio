var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function isValidGlob(glob) {
    if (typeof glob === 'string' && glob.length > 0) {
      return true;
    }

    if (Array.isArray(glob)) {
      return glob.length !== 0 && every(glob);
    }

    return false;
  };

  function every(arr) {
    var len = arr.length;

    while (len--) {
      if (typeof arr[len] !== 'string' || arr[len].length <= 0) {
        return false;
      }
    }

    return true;
  }

  return exports;
}