var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  sudo: false;

  os: -linux - osx;

  language: node_js;

  node_js: -node - '8' - '7' - '6' - '5' - '4' - '0.12' - '0.10';

  return exports;
}