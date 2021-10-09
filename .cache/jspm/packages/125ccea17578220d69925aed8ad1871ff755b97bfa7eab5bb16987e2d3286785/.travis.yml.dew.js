var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  sudo: false;

  language: node_js;

  node_js: -"6" - "8" - "10";

  cache: directories: -node_modules;

  return exports;
}