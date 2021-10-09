import { dew as _indexDewDew } from "lodash/index.dew.js";
import { dew as _indexDew2Dew } from "rx/index.dew.js";
import { dew as _indexDew3Dew } from "run-async/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _ = _indexDewDew();

  var rx = _indexDew2Dew();

  var runAsync = _indexDew3Dew();
  /**
   * Resolve a question property value if it is passed as a function.
   * This method will overwrite the property on the question object with the received value.
   * @param  {Object} question - Question object
   * @param  {String} prop     - Property to fetch name
   * @param  {Object} answers  - Answers object
   * @return {rx.Obsersable}   - Observable emitting once value is known
   */


  exports.fetchAsyncQuestionProperty = function (question, prop, answers) {
    if (!_.isFunction(question[prop])) {
      return rx.Observable.return(question);
    }

    return rx.Observable.fromPromise(runAsync(question[prop])(answers).then(function (value) {
      question[prop] = value;
      return question;
    }));
  };

  return exports;
}