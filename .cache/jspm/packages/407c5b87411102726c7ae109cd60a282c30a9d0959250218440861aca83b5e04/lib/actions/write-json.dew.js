var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var DEFAULT_INDENTATION = 2;

  exports = function (filepath, contents, replacer, space) {
    var jsonStr = JSON.stringify(contents, replacer || null, space || DEFAULT_INDENTATION) + '\n';
    return this.write(filepath, jsonStr);
  };

  return exports;
}