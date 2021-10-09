var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function repeat(ele, num) {
    var arr = new Array(num);

    for (var i = 0; i < num; i++) {
      arr[i] = ele;
    }

    return arr;
  };

  return exports;
}