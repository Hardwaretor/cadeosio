var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  language: node_js;

  node_js: -iojs - 0.6 - 0.8 - 0.9 - 0.10 - 0.11 - 0.12;

  return exports;
}