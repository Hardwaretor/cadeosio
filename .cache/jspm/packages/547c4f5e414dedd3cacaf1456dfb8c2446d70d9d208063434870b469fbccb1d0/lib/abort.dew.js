var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  // API
  exports = abort;
  /**
   * Aborts leftover active jobs
   *
   * @param {object} state - current state object
   */

  function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state)); // reset leftover jobs

    state.jobs = {};
  }
  /**
   * Cleans up leftover job by invoking abort function for the provided job id
   *
   * @this  state
   * @param {string|number} key - job id to abort
   */


  function clean(key) {
    if (typeof (this || _global).jobs[key] == 'function') {
      (this || _global).jobs[key]();
    }
  }

  return exports;
}