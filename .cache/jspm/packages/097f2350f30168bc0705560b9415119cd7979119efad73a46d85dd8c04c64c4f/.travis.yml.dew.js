var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  language: node_js;

  node_js: -"10" - "9" - "8";

  after_script: -"npm install coveralls@2.11.x && cat coverage/lcov.info | coveralls";

  matrix: fast_finish: true;

  return exports;
}