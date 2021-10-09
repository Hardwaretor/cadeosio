var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (filepath, defaults) {
    if (this.exists(filepath)) {
      try {
        return JSON.parse(this.read(filepath));
      } catch (error) {
        throw new Error('Could not parse JSON in file: ' + filepath + '. Detail: ' + error.message);
      }
    } else {
      return defaults;
    }
  };

  return exports;
}