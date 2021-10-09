var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (filepath) {
    var file = this.store.get(filepath);
    return file.contents !== null && file.state !== 'deleted';
  };

  return exports;
}