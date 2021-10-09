var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (value) {
    if (!value) return false;
    if (typeof value === "symbol") return true;
    if (!value.constructor) return false;
    if (value.constructor.name !== "Symbol") return false;
    return value[value.constructor.toStringTag] === "Symbol";
  };

  return exports;
}