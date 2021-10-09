var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function isNaN(value) {
    // Unlike global isNaN, this avoids type coercion
    // typeof check avoids IE host object issues, hat tip to
    // lodash
    var val = value; // JsLint thinks value !== value is "weird"

    return typeof value === "number" && value !== val;
  }

  exports = isNaN;
  return exports;
}