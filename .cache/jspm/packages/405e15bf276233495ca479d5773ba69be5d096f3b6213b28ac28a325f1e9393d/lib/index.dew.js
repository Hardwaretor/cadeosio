var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function () {
    return {
      name: "transform-remove-debugger",
      visitor: {
        DebuggerStatement(path) {
          path.remove();
        }

      }
    };
  };

  return exports;
}