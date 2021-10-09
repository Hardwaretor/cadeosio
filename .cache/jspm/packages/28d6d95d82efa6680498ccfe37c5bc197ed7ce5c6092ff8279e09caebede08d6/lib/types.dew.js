var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    ROOT: 0,
    GROUP: 1,
    POSITION: 2,
    SET: 3,
    RANGE: 4,
    REPETITION: 5,
    REFERENCE: 6,
    CHAR: 7
  };
  return exports;
}