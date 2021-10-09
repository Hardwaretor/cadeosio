var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (arr) {
    return flat(arr, []);
  };

  function flat(arr, res) {
    var i = 0,
        cur;
    var len = arr.length;

    for (; i < len; i++) {
      cur = arr[i];
      Array.isArray(cur) ? flat(cur, res) : res.push(cur);
    }

    return res;
  }

  return exports;
}