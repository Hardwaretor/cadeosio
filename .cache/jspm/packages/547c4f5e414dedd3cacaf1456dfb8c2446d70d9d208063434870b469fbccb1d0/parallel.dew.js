import { dew as _iterateDewDew } from "./lib/iterate.dew.js";
import { dew as _stateDewDew } from "./lib/state.dew.js";
import { dew as _terminatorDewDew } from "./lib/terminator.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var iterate = _iterateDewDew(),
      initState = _stateDewDew(),
      terminator = _terminatorDewDew(); // Public API


  exports = parallel;
  /**
   * Runs iterator over provided array elements in parallel
   *
   * @param   {array|object} list - array or object (named list) to iterate over
   * @param   {function} iterator - iterator to run
   * @param   {function} callback - invoked when all elements processed
   * @returns {function} - jobs terminator
   */

  function parallel(list, iterator, callback) {
    var state = initState(list);

    while (state.index < (state['keyedList'] || list).length) {
      iterate(list, iterator, state, function (error, result) {
        if (error) {
          callback(error, result);
          return;
        } // looks like it's the last one


        if (Object.keys(state.jobs).length === 0) {
          callback(null, state.results);
          return;
        }
      });
      state.index++;
    }

    return terminator.bind(state, callback);
  }

  return exports;
}