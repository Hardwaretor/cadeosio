var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  language: node_js;

  node_js: -"node" - "0.12" - "0.10" - "iojs";

  return exports;
}