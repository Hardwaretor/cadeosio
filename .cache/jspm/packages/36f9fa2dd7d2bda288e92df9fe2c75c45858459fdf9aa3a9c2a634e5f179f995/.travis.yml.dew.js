var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  language: node_js;

  node_js: -"0.10" - "0.12" - "iojs";

  return exports;
}