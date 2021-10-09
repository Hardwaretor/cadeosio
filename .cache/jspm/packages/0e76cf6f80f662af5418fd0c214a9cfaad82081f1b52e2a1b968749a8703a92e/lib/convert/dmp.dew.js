var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  convertChangesToDMP = convertChangesToDMP; // See: http://code.google.com/p/google-diff-match-patch/wiki/API

  function convertChangesToDMP(changes) {
    var ret = [],
        change =
    /*istanbul ignore start*/
    void 0
    /*istanbul ignore end*/
    ,
        operation =
    /*istanbul ignore start*/
    void 0
    /*istanbul ignore end*/
    ;

    for (var i = 0; i < changes.length; i++) {
      change = changes[i];

      if (change.added) {
        operation = 1;
      } else if (change.removed) {
        operation = -1;
      } else {
        operation = 0;
      }

      ret.push([operation, change.value]);
    }

    return ret;
  }

  return exports;
}