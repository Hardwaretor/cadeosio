var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var indexOf = [].indexOf;

  exports = function (arr, obj) {
    if (indexOf) return arr.indexOf(obj);

    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === obj) return i;
    }

    return -1;
  };

  return exports;
}