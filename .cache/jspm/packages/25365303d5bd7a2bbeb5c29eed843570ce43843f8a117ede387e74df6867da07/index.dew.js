import _os from "os";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const home = _os.homedir();

  exports = str => {
    if (typeof str !== 'string') {
      throw new TypeError(`Expected a string, got ${typeof str}`);
    }

    return home ? str.replace(/^~(?=$|\/|\\)/, home) : str;
  };

  return exports;
}