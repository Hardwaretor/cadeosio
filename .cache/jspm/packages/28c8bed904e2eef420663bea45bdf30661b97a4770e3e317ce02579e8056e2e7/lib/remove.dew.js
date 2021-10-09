var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = removeHook;

  function removeHook(state, name, method) {
    if (!state.registry[name]) {
      return;
    }

    var index = state.registry[name].map(function (registered) {
      return registered.orig;
    }).indexOf(method);

    if (index === -1) {
      return;
    }

    state.registry[name].splice(index, 1);
  }

  return exports;
}