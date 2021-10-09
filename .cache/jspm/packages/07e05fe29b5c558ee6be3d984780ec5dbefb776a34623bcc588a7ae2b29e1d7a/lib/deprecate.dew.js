var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = deprecate;
  const loggedMessages = {};

  function deprecate(message) {
    if (loggedMessages[message]) {
      return;
    }

    console.warn(`DEPRECATED (@octokit/rest): ${message}`);
    loggedMessages[message] = 1;
  }

  return exports;
}