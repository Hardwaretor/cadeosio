var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function isStream(stream) {
    if (!stream) {
      return false;
    }

    if (typeof stream.pipe !== 'function') {
      return false;
    }

    return true;
  }

  exports = isStream;
  return exports;
}