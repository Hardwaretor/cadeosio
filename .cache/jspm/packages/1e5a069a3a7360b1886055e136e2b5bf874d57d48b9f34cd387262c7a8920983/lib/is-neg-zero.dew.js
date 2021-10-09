var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * @name samsam.isNegZero
   * @param Object value
   *
   * Returns ``true`` if ``value`` is ``-0``.
   */
  function isNegZero(value) {
    return value === 0 && 1 / value === -Infinity;
  }

  exports = isNegZero;
  return exports;
}