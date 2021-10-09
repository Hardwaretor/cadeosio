var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (pattern) {
    if (typeof pattern !== 'string') {
      throw new TypeError('expected a string');
    }

    var glob = {
      negated: false,
      pattern: pattern,
      original: pattern
    };

    if (pattern.charAt(0) === '!' && pattern.charAt(1) !== '(') {
      glob.negated = true;
      glob.pattern = pattern.slice(1);
    }

    return glob;
  };

  return exports;
}