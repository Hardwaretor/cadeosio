import { dew as _indexDewDew } from "shebang-regex/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const shebangRegex = _indexDewDew();

  exports = (string = '') => {
    const match = string.match(shebangRegex);

    if (!match) {
      return null;
    }

    const [path, argument] = match[0].replace(/#! ?/, '').split(' ');
    const binary = path.split('/').pop();

    if (binary === 'env') {
      return argument;
    }

    return argument ? `${binary} ${argument}` : binary;
  };

  return exports;
}