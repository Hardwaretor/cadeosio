var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var getDay = Date.prototype.getDay;

  var tryDateObject = function tryDateGetDayCall(value) {
    try {
      getDay.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };

  var toStr = Object.prototype.toString;
  var dateClass = '[object Date]';
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  exports = function isDateObject(value) {
    if (typeof value !== 'object' || value === null) {
      return false;
    }

    return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
  };

  return exports;
}