import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = 'npm_config_username' in process.env || 'npm_package_name' in process.env || 'npm_config_heading' in process.env;
  return exports;
}