import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  exports = (flag, argv) => {
    argv = argv || process.argv;
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const pos = argv.indexOf(prefix + flag);
    const terminatorPos = argv.indexOf('--');
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };

  return exports;
}