import { dew as _indexDewDew } from "lodash/index.dew.js";
import _util from "util";
import { dew as _indexDew2Dew } from "chalk/index.dew.js";
import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _eventsDewDew } from "../utils/events.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * `confirm` type prompt
   */
  var _ = _indexDewDew();

  var util = _util;

  var chalk = _indexDew2Dew();

  var Base = _baseDewDew();

  var observe = _eventsDewDew();
  /**
   * Module exports
   */


  exports = Prompt;
  /**
   * Constructor
   */

  function Prompt() {
    Base.apply(this || _global, arguments);
    var rawDefault = true;

    _.extend((this || _global).opt, {
      filter: function (input) {
        var value = rawDefault;

        if (input != null && input !== '') {
          value = /^y(es)?/i.test(input);
        }

        return value;
      }
    });

    if (_.isBoolean((this || _global).opt.default)) {
      rawDefault = (this || _global).opt.default;
    }

    (this || _global).opt.default = rawDefault ? 'Y/n' : 'y/N';
    return this || _global;
  }

  util.inherits(Prompt, Base);
  /**
   * Start the Inquiry session
   * @param  {Function} cb   Callback when prompt is done
   * @return {this}
   */

  Prompt.prototype._run = function (cb) {
    (this || _global).done = cb; // Once user confirm (enter key)

    var events = observe((this || _global).rl);
    events.keypress.takeUntil(events.line).forEach((this || _global).onKeypress.bind(this || _global));
    events.line.take(1).forEach((this || _global).onEnd.bind(this || _global)); // Init

    this.render();
    return this || _global;
  };
  /**
   * Render the prompt to screen
   * @return {Prompt} self
   */


  Prompt.prototype.render = function (answer) {
    var message = this.getQuestion();

    if (typeof answer === 'boolean') {
      message += chalk.cyan(answer ? 'Yes' : 'No');
    } else {
      message += (this || _global).rl.line;
    }

    (this || _global).screen.render(message);

    return this || _global;
  };
  /**
   * When user press `enter` key
   */


  Prompt.prototype.onEnd = function (input) {
    (this || _global).status = 'answered';

    var output = (this || _global).opt.filter(input);

    this.render(output);

    (this || _global).screen.done();

    this.done(output);
  };
  /**
   * When user press a key
   */


  Prompt.prototype.onKeypress = function () {
    this.render();
  };

  return exports;
}