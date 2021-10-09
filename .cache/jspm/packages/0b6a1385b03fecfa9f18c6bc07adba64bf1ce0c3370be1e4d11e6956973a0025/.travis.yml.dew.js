var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  language: node_js;

  sudo: false;

  node_js: -"0.10" - "0.12" - "4" - "5" - "6" - "7" - "8" - "9" - "10" - "12";

  return exports;
}