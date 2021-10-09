import { dew as _mimeDewDew } from "./mime.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var mime = _mimeDewDew();

  var file = process.argv[2];
  var type = mime.lookup(file);
  process.stdout.write(type + '\n');
  return exports;
}