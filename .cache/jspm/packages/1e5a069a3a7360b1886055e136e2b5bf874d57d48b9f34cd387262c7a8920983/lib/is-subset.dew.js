var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function isSubset(s1, s2, compare) {
    var allContained = true;
    s1.forEach(function (v1) {
      var includes = false;
      s2.forEach(function (v2) {
        if (compare(v2, v1)) {
          includes = true;
        }
      });
      allContained = allContained && includes;
    });
    return allContained;
  }

  exports = isSubset;
  return exports;
}