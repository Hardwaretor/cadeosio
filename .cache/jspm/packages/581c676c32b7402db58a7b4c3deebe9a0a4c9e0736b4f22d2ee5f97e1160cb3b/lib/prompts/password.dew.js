import _util from "util";
import { dew as _indexDewDew } from "chalk/index.dew.js";
import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _eventsDewDew } from "../utils/events.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * `password` type prompt
   */
  var util = _util;

  var chalk = _indexDewDew();

  var Base = _baseDewDew();

  var observe = _eventsDewDew();

  function mask(input) {
    input = String(input);

    if (input.length === 0) {
      return '';
    }

    return new Array(input.length + 1).join('*');
  }
  /**
   * Module exports
   */


  exports = Prompt;
  /**
   * Constructor
   */

  function Prompt() {
    return Base.apply(this || _global, arguments);
  }

  util.inherits(Prompt, Base);
  /**
   * Start the Inquiry session
   * @param  {Function} cb      Callback when prompt is done
   * @return {this}
   */

  Prompt.prototype._run = function (cb) {
    (this || _global).done = cb;
    var events = observe((this || _global).rl); // Once user confirm (enter key)

    var submit = events.line.map((this || _global).filterInput.bind(this || _global));
    var validation = this.handleSubmitEvents(submit);
    validation.success.forEach((this || _global).onEnd.bind(this || _global));
    validation.error.forEach((this || _global).onError.bind(this || _global));
    events.keypress.takeUntil(validation.success).forEach((this || _global).onKeypress.bind(this || _global)); // Init

    this.render();
    return this || _global;
  };
  /**
   * Render the prompt to screen
   * @return {Prompt} self
   */


  Prompt.prototype.render = function (error) {
    var message = this.getQuestion();
    var bottomContent = '';

    if ((this || _global).status === 'answered') {
      message += chalk.cyan(mask((this || _global).answer));
    } else {
      message += mask((this || _global).rl.line || '');
    }

    if (error) {
      bottomContent = '\n' + chalk.red('>> ') + error;
    }

    (this || _global).screen.render(message, bottomContent);
  };
  /**
   * When user press `enter` key
   */


  Prompt.prototype.filterInput = function (input) {
    if (!input) {
      return (this || _global).opt.default == null ? '' : (this || _global).opt.default;
    }

    return input;
  };

  Prompt.prototype.onEnd = function (state) {
    (this || _global).status = 'answered';
    (this || _global).answer = state.value; // Re-render prompt

    this.render();

    (this || _global).screen.done();

    this.done(state.value);
  };

  Prompt.prototype.onError = function (state) {
    this.render(state.isValid);

    (this || _global).rl.output.unmute();
  };
  /**
   * When user type
   */


  Prompt.prototype.onKeypress = function () {
    this.render();
  };

  return exports;
}