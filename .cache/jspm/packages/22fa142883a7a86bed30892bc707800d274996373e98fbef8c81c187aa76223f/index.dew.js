var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (receiver, objects) {
    if (receiver === null || typeof receiver === 'undefined') {
      throw new TypeError('expected first argument to be an object.');
    }

    if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {
      return receiver;
    }

    if (typeof Object.getOwnPropertySymbols !== 'function') {
      return receiver;
    }

    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var target = Object(receiver);
    var len = arguments.length,
        i = 0;

    while (++i < len) {
      var provider = Object(arguments[i]);
      var names = Object.getOwnPropertySymbols(provider);

      for (var j = 0; j < names.length; j++) {
        var key = names[j];

        if (isEnumerable.call(provider, key)) {
          target[key] = provider[key];
        }
      }
    }

    return target;
  };

  return exports;
}