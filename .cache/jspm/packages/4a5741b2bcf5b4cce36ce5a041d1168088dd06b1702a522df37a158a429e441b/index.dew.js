import { dew as _indexDewDew } from "minimatch/index.dew.js";
import { dew as _indexDew2Dew } from "array-union/index.dew.js";
import { dew as _indexDew3Dew } from "array-differ/index.dew.js";
import { dew as _indexDew4Dew } from "arrify/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const minimatch = _indexDewDew();

  const arrayUnion = _indexDew2Dew();

  const arrayDiffer = _indexDew3Dew();

  const arrify = _indexDew4Dew();

  exports = (list, patterns, options = {}) => {
    list = arrify(list);
    patterns = arrify(patterns);

    if (list.length === 0 || patterns.length === 0) {
      return [];
    }

    return patterns.reduce((result, pattern) => {
      let process = arrayUnion;

      if (pattern[0] === '!') {
        pattern = pattern.slice(1);
        process = arrayDiffer;
      }

      return process(result, minimatch.match(list, pattern, options));
    }, []);
  };

  return exports;
}