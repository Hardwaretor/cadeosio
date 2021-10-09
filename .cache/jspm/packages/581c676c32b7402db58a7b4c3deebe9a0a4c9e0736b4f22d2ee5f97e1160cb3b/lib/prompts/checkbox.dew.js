import { dew as _indexDewDew } from "lodash/index.dew.js";
import _util from "util";
import { dew as _indexDew2Dew } from "chalk/index.dew.js";
import { dew as _indexDew3Dew } from "cli-cursor/index.dew.js";
import { dew as _indexDew4Dew } from "figures/index.dew.js";
import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _eventsDewDew } from "../utils/events.dew.js";
import { dew as _paginatorDewDew } from "../utils/paginator.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * `list` type prompt
   */
  var _ = _indexDewDew();

  var util = _util;

  var chalk = _indexDew2Dew();

  var cliCursor = _indexDew3Dew();

  var figures = _indexDew4Dew();

  var Base = _baseDewDew();

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

    if (_.isArray((this || _global).opt.default)) {
      (this || _global).opt.choices.forEach(function (choice) {
        if ((this || _global).opt.default.indexOf(choice.value) >= 0) {
          choice.checked = true;
        }
      }, this || _global);
    }

    (this || _global).pointer = 0; // Make sure no default is set (so it won't be printed)

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
    (this || _global).done = cb;
    var events = observe((this || _global).rl);
    var validation = this.handleSubmitEvents(events.line.map((this || _global).getCurrentValue.bind(this || _global)));
    validation.success.forEach((this || _global).onEnd.bind(this || _global));
    validation.error.forEach((this || _global).onError.bind(this || _global));
    events.normalizedUpKey.takeUntil(validation.success).forEach((this || _global).onUpKey.bind(this || _global));
    events.normalizedDownKey.takeUntil(validation.success).forEach((this || _global).onDownKey.bind(this || _global));
    events.numberKey.takeUntil(validation.success).forEach((this || _global).onNumberKey.bind(this || _global));
    events.spaceKey.takeUntil(validation.success).forEach((this || _global).onSpaceKey.bind(this || _global));
    events.aKey.takeUntil(validation.success).forEach((this || _global).onAllKey.bind(this || _global));
    events.iKey.takeUntil(validation.success).forEach((this || _global).onInverseKey.bind(this || _global)); // Init the prompt

    cliCursor.hide();
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

    if (!(this || _global).spaceKeyPressed) {
      message += '(Press ' + chalk.cyan.bold('<space>') + ' to select, ' + chalk.cyan.bold('<a>') + ' to toggle all, ' + chalk.cyan.bold('<i>') + ' to inverse selection)';
    } // Render choices or answer depending on the state


    if ((this || _global).status === 'answered') {
      message += chalk.cyan((this || _global).selection.join(', '));
    } else {
      var choicesStr = renderChoices((this || _global).opt.choices, (this || _global).pointer);

      var indexPosition = (this || _global).opt.choices.indexOf((this || _global).opt.choices.getChoice((this || _global).pointer));

      message += '\n' + (this || _global).paginator.paginate(choicesStr, indexPosition, (this || _global).opt.pageSize);
    }

    if (error) {
      bottomContent = chalk.red('>> ') + error;
    }

    (this || _global).screen.render(message, bottomContent);
  };
  /**
   * When user press `enter` key
   */


  Prompt.prototype.onEnd = function (state) {
    (this || _global).status = 'answered'; // Rerender prompt (and clean subline error)

    this.render();

    (this || _global).screen.done();

    cliCursor.show();
    this.done(state.value);
  };

  Prompt.prototype.onError = function (state) {
    this.render(state.isValid);
  };

  Prompt.prototype.getCurrentValue = function () {
    var choices = (this || _global).opt.choices.filter(function (choice) {
      return Boolean(choice.checked) && !choice.disabled;
    });

    (this || _global).selection = _.map(choices, 'short');
    return _.map(choices, 'value');
  };

  Prompt.prototype.onUpKey = function () {
    var len = (this || _global).opt.choices.realLength;
    (this || _global).pointer = (this || _global).pointer > 0 ? (this || _global).pointer - 1 : len - 1;
    this.render();
  };

  Prompt.prototype.onDownKey = function () {
    var len = (this || _global).opt.choices.realLength;
    (this || _global).pointer = (this || _global).pointer < len - 1 ? (this || _global).pointer + 1 : 0;
    this.render();
  };

  Prompt.prototype.onNumberKey = function (input) {
    if (input <= (this || _global).opt.choices.realLength) {
      (this || _global).pointer = input - 1;
      this.toggleChoice((this || _global).pointer);
    }

    this.render();
  };

  Prompt.prototype.onSpaceKey = function () {
    (this || _global).spaceKeyPressed = true;
    this.toggleChoice((this || _global).pointer);
    this.render();
  };

  Prompt.prototype.onAllKey = function () {
    var shouldBeChecked = Boolean((this || _global).opt.choices.find(function (choice) {
      return choice.type !== 'separator' && !choice.checked;
    }));

    (this || _global).opt.choices.forEach(function (choice) {
      if (choice.type !== 'separator') {
        choice.checked = shouldBeChecked;
      }
    });

    this.render();
  };

  Prompt.prototype.onInverseKey = function () {
    (this || _global).opt.choices.forEach(function (choice) {
      if (choice.type !== 'separator') {
        choice.checked = !choice.checked;
      }
    });

    this.render();
  };

  Prompt.prototype.toggleChoice = function (index) {
    var item = (this || _global).opt.choices.getChoice(index);

    if (item !== undefined) {
      (this || _global).opt.choices.getChoice(index).checked = !item.checked;
    }
  };
  /**
   * Function for rendering checkbox choices
   * @param  {Number} pointer Position of the pointer
   * @return {String}         Rendered content
   */


  function renderChoices(choices, pointer) {
    var output = '';
    var separatorOffset = 0;
    choices.forEach(function (choice, i) {
      if (choice.type === 'separator') {
        separatorOffset++;
        output += ' ' + choice + '\n';
        return;
      }

      if (choice.disabled) {
        separatorOffset++;
        output += ' - ' + choice.name;
        output += ' (' + (_.isString(choice.disabled) ? choice.disabled : 'Disabled') + ')';
      } else {
        var isSelected = i - separatorOffset === pointer;
        output += isSelected ? chalk.cyan(figures.pointer) : ' ';
        output += getCheckbox(choice.checked) + ' ' + choice.name;
      }

      output += '\n';
    });
    return output.replace(/\n$/, '');
  }
  /**
   * Get the checkbox
   * @param  {Boolean} checked - add a X or not to the checkbox
   * @return {String} Composited checkbox string
   */


  function getCheckbox(checked) {
    return checked ? chalk.green(figures.radioOn) : figures.radioOff;
  }

  return exports;
}