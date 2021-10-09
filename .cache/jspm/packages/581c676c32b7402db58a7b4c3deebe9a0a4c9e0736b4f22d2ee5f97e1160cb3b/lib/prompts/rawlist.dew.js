import { dew as _indexDewDew } from "lodash/index.dew.js";
import _util from "util";
import { dew as _indexDew2Dew } from "chalk/index.dew.js";
import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _separatorDewDew } from "../objects/separator.dew.js";
import { dew as _eventsDewDew } from "../utils/events.dew.js";
import { dew as _paginatorDewDew } from "../utils/paginator.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * `rawlist` type prompt
   */
  var _ = _indexDewDew();

  var util = _util;

  var chalk = _indexDew2Dew();

  var Base = _baseDewDew();

  var Separator = _separatorDewDew();

  var observe = _eventsDewDew();

  var Paginator = _paginatorDewDew();
  /**
   * Module exports
   */


  exports = Prompt;
  /**
   * Constructor
   */

  function Prompt() {
    Base.apply(this || _global, arguments);

    if (!(this || _global).opt.choices) {
      this.throwParamError('choices');
    }

    (this || _global).opt.validChoices = (this || _global).opt.choices.filter(Separator.exclude);
    (this || _global).selected = 0;
    (this || _global).rawDefault = 0;

    _.extend((this || _global).opt, {
      validate: function (val) {
        return val != null;
      }
    });

    var def = (this || _global).opt.default;

    if (_.isNumber(def) && def >= 0 && def < (this || _global).opt.choices.realLength) {
      (this || _global).selected = (this || _global).rawDefault = def;
    } // Make sure no default is set (so it won't be printed)


    (this || _global).opt.default = null;
    (this || _global).paginator = new Paginator();
  }

  util.inherits(Prompt, Base);
  /**
   * Start the Inquiry session
   * @param  {Function} cb      Callback when prompt is done
   * @return {this}
   */

  Prompt.prototype._run = function (cb) {
    (this || _global).done = cb; // Once user confirm (enter key)

    var events = observe((this || _global).rl);
    var submit = events.line.map((this || _global).getCurrentValue.bind(this || _global));
    var validation = this.handleSubmitEvents(submit);
    validation.success.forEach((this || _global).onEnd.bind(this || _global));
    validation.error.forEach((this || _global).onError.bind(this || _global));
    events.keypress.takeUntil(validation.success).forEach((this || _global).onKeypress.bind(this || _global)); // Init the prompt

    this.render();
    return this || _global;
  };
  /**
   * Render the prompt to screen
   * @return {Prompt} self
   */


  Prompt.prototype.render = function (error) {
    // Render question
    var message = this.getQuestion();
    var bottomContent = '';

    if ((this || _global).status === 'answered') {
      message += chalk.cyan((this || _global).answer);
    } else {
      var choicesStr = renderChoices((this || _global).opt.choices, (this || _global).selected);
      message += (this || _global).paginator.paginate(choicesStr, (this || _global).selected, (this || _global).opt.pageSize);
      message += '\n  Answer: ';
    }

    message += (this || _global).rl.line;

    if (error) {
      bottomContent = '\n' + chalk.red('>> ') + error;
    }

    (this || _global).screen.render(message, bottomContent);
  };
  /**
   * When user press `enter` key
   */


  Prompt.prototype.getCurrentValue = function (index) {
    if (index == null || index === '') {
      index = (this || _global).rawDefault;
    } else {
      index -= 1;
    }

    var choice = (this || _global).opt.choices.getChoice(index);

    return choice ? choice.value : null;
  };

  Prompt.prototype.onEnd = function (state) {
    (this || _global).status = 'answered';
    (this || _global).answer = state.value; // Re-render prompt

    this.render();

    (this || _global).screen.done();

    this.done(state.value);
  };

  Prompt.prototype.onError = function () {
    this.render('Please enter a valid index');
  };
  /**
   * When user press a key
   */


  Prompt.prototype.onKeypress = function () {
    var index = (this || _global).rl.line.length ? Number((this || _global).rl.line) - 1 : 0;

    if ((this || _global).opt.choices.getChoice(index)) {
      (this || _global).selected = index;
    } else {
      (this || _global).selected = undefined;
    }

    this.render();
  };
  /**
   * Function for rendering list choices
   * @param  {Number} pointer Position of the pointer
   * @return {String}         Rendered content
   */


  function renderChoices(choices, pointer) {
    var output = '';
    var separatorOffset = 0;
    choices.forEach(function (choice, i) {
      output += '\n  ';

      if (choice.type === 'separator') {
        separatorOffset++;
        output += ' ' + choice;
        return;
      }

      var index = i - separatorOffset;
      var display = index + 1 + ') ' + choice.name;

      if (index === pointer) {
        display = chalk.cyan(display);
      }

      output += display;
    });
    return output;
  }

  return exports;
}