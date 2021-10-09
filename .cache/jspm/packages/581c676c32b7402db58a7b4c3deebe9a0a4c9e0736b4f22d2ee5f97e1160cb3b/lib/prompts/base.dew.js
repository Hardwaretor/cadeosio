import { dew as _indexDewDew } from "lodash/index.dew.js";
import { dew as _indexDew2Dew } from "chalk/index.dew.js";
import { dew as _indexDew3Dew } from "run-async/index.dew.js";
import { dew as _choicesDewDew } from "../objects/choices.dew.js";
import { dew as _screenManagerDewDew } from "../utils/screen-manager.dew.js";
import { dew as _indexDew4Dew } from "pinkie-promise/index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Base prompt implementation
   * Should be extended by prompt types.
   */
  var _ = _indexDewDew();

  var chalk = _indexDew2Dew();

  var runAsync = _indexDew3Dew();

  var Choices = _choicesDewDew();

  var ScreenManager = _screenManagerDewDew();

  var Promise = _indexDew4Dew();

  var Prompt = exports = function (question, rl, answers) {
    // Setup instance defaults property
    _.assign(this || _global, {
      answers: answers,
      status: 'pending'
    }); // Set defaults prompt options


    (this || _global).opt = _.defaults(_.clone(question), {
      validate: function () {
        return true;
      },
      filter: function (val) {
        return val;
      },
      when: function () {
        return true;
      }
    }); // Check to make sure prompt requirements are there

    if (!(this || _global).opt.message) {
      this.throwParamError('message');
    }

    if (!(this || _global).opt.name) {
      this.throwParamError('name');
    } // Normalize choices


    if (Array.isArray((this || _global).opt.choices)) {
      (this || _global).opt.choices = new Choices((this || _global).opt.choices, answers);
    }

    (this || _global).rl = rl;
    (this || _global).screen = new ScreenManager((this || _global).rl);
  };
  /**
   * Start the Inquiry session and manage output value filtering
   * @return {Promise}
   */


  Prompt.prototype.run = function () {
    return new Promise(function (resolve) {
      this._run(function (value) {
        resolve(value);
      });
    }.bind(this || _global));
  }; // default noop (this one should be overwritten in prompts)


  Prompt.prototype._run = function (cb) {
    cb();
  };
  /**
   * Throw an error telling a required parameter is missing
   * @param  {String} name Name of the missing param
   * @return {Throw Error}
   */


  Prompt.prototype.throwParamError = function (name) {
    throw new Error('You must provide a `' + name + '` parameter');
  };
  /**
   * Run the provided validation method each time a submit event occur.
   * @param  {Rx.Observable} submit - submit event flow
   * @return {Object}        Object containing two observables: `success` and `error`
   */


  Prompt.prototype.handleSubmitEvents = function (submit) {
    var self = this || _global;
    var validate = runAsync((this || _global).opt.validate);
    var filter = runAsync((this || _global).opt.filter);
    var validation = submit.flatMap(function (value) {
      return filter(value).then(function (filteredValue) {
        return validate(filteredValue, self.answers).then(function (isValid) {
          return {
            isValid: isValid,
            value: filteredValue
          };
        });
      }, function (err) {
        return {
          isValid: err
        };
      });
    }).share();
    var success = validation.filter(function (state) {
      return state.isValid === true;
    }).take(1);
    var error = validation.filter(function (state) {
      return state.isValid !== true;
    }).takeUntil(success);
    return {
      success: success,
      error: error
    };
  };
  /**
   * Generate the prompt question string
   * @return {String} prompt question string
   */


  Prompt.prototype.getQuestion = function () {
    var message = chalk.green('?') + ' ' + chalk.bold((this || _global).opt.message) + ' '; // Append the default if available, and if question isn't answered

    if ((this || _global).opt.default != null && (this || _global).status !== 'answered') {
      message += chalk.dim('(' + (this || _global).opt.default + ') ');
    }

    return message;
  };

  return exports;
}