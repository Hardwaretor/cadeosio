import _fs from "fs";
import { dew as _indexDewDew } from "./index.dew.js";
import { dew as _packageJsonDewDew } from "./package.json.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var fs = _fs;

  var strip = _indexDewDew();

  var input = process.argv[2];

  if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
    console.log('strip-ansi <input file> > <output file>');
    console.log('or');
    console.log('cat <input file> | strip-ansi > <output file>');
    return;
  }

  if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
    console.log(_packageJsonDewDew().version);
    return;
  }

  if (input) {
    process.stdout.write(strip(fs.readFileSync(input, 'utf8')));
    return;
  }

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (data) {
    process.stdout.write(strip(data));
  });
  return exports;
}