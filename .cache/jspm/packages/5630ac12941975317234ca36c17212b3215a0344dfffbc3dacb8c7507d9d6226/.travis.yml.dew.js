var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  language: node_js;

  node_js: -"6" - "4" - "0.12" - "0.10";

  return exports;
}