var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function unique(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('array-unique expects an array.');
    }

    var len = arr.length;
    var i = -1;

    while (i++ < len) {
      var j = i + 1;

      for (; j < arr.length; ++j) {
        if (arr[i] === arr[j]) {
          arr.splice(j--, 1);
        }
      }
    }

    return arr;
  };

  exports.immutable = function uniqueImmutable(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('array-unique expects an array.');
    }

    var arrLen = arr.length;
    var newArr = new Array(arrLen);

    for (var i = 0; i < arrLen; i++) {
      newArr[i] = arr[i];
    }

    return exports(newArr);
  };

  return exports;
}