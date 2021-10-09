var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  language: node_js;

  node_js: -"0.11" - "0.10" - "0.8" - "0.6";

  return exports;
}