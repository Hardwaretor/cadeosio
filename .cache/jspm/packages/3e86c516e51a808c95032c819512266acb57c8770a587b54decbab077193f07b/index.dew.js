var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (arr, predicate, ctx) {
    if (typeof Array.prototype.findIndex === 'function') {
      return arr.findIndex(predicate, ctx);
    }

    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }

    var list = Object(arr);
    var len = list.length;

    if (len === 0) {
      return -1;
    }

    for (var i = 0; i < len; i++) {
      if (predicate.call(ctx, list[i], i, list)) {
        return i;
      }
    }

    return -1;
  };

  return exports;
}