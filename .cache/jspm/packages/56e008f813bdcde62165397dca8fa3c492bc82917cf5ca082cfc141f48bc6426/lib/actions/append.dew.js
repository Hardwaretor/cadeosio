import _os from "os";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var EOL = _os.EOL;

  exports = function (to, contents, options) {
    options = {
      trimEnd: true,
      separator: EOL,
      ...options
    };
    var currentContents = this.read(to);

    if (options.trimEnd) {
      currentContents = currentContents.replace(/\s+$/, '');
    }

    this.write(to, currentContents + options.separator + contents);
  };

  return exports;
}