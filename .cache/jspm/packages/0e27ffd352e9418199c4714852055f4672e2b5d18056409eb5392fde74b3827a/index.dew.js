import { dew as _indexDewDew } from "sver-compat/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var SemverRange = _indexDewDew().SemverRange;

  function findRange(version, ranges) {
    ranges = ranges || [];

    function matches(range) {
      return SemverRange.match(range, version, true);
    }

    var validRanges = ranges.filter(matches);
    var sortedRanges = validRanges.sort(SemverRange.compare);
    return sortedRanges.pop() || null;
  }

  exports = findRange;
  return exports;
}