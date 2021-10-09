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

    this.validateChoices((this || _global).opt.choices); // Add the default `help` (/expand) option

    (this || _global).opt.choices.push({
      key: 'h',
      name: 'Help, list all options',
      value: 'help'
    });

    (this || _global).opt.validate = function (choice) {
      if (choice == null) {
        return 'Please enter a valid command';
      }

      return choice !== 'help';
    }; // Setup the default string (capitalize the default key)


    (this || _global).opt.default = this.generateChoicesString((this || _global).opt.choices, (this || _global).opt.default);
    (this || _global).paginator = new Paginator();
  }

  util.inherits(Prompt, Base);
  /**
   * Start the Inquiry session
   * @param  {Function} cb      Callback when prompt is done
   * @return {this}
   */

  Prompt.prototype._run = function (cb) {
    (this || _global).done = cb; // Save user answer and update prompt to show selected option.

    var events = observe((this || _global).rl);
    var validation = this.handleSubmitEvents(events.line.map((this || _global).getCurrentValue.bind(this || _global)));
    validation.success.forEach((this || _global).onSubmit.bind(this || _global));
    validation.error.forEach((this || _global).onError.bind(this || _global));
    (this || _global).keypressObs = events.keypress.takeUntil(validation.success).forEach((this || _global).onKeypress.bind(this || _global)); // Init the prompt

    this.render();
    return this || _global;
  };
  /**
   * Render the prompt to screen
   * @return {Prompt} self
   */


  Prompt.prototype.render = function (error, hint) {
    var message = this.getQuestion();
    var bottomContent = '';

    if ((this || _global).status === 'answered') {
      message += chalk.cyan((this || _global).answer);
    } else if ((this || _global).status === 'expanded') {
      var choicesStr = renderChoices((this || _global).opt.choices, (this || _global).selectedKey);
      message += (this || _global).paginator.paginate(choicesStr, (this || _global).selectedKey, (this || _global).opt.pageSize);
      message += '\n  Answer: ';
    }

    message += (this || _global).rl.line;

    if (error) {
      bottomContent = chalk.red('>> ') + error;
    }

    if (hint) {
      bottomContent = chalk.cyan('>> ') + hint;
    }

    (this || _global).screen.render(message, bottomContent);
  };

  Prompt.prototype.getCurrentValue = function (input) {
    if (!input) {
      input = (this || _global).rawDefault;
    }

    var selected = (this || _global).opt.choices.where({
      key: input.toLowerCase().trim()
    })[0];

    if (!selected) {
      return null;
    }

    return selected.value;
  };
  /**
   * Generate the prompt choices string
   * @return {String}  Choices string
   */


  Prompt.prototype.getChoices = function () {
    var output = '';

    (this || _global).opt.choices.forEach(function (choice) {
      output += '\n  ';

      if (choice.type === 'separator') {
        output += ' ' + choice;
        return;
      }

      var choiceStr = choice.key + ') ' + choice.name;

      if ((this || _global).selectedKey === choice.key) {
        choiceStr = chalk.cyan(choiceStr);
      }

      output += choiceStr;
    }.bind(this || _global));

    return output;
  };

  Prompt.prototype.onError = function (state) {
    if (state.value === 'help') {
      (this || _global).selectedKey = '';
      (this || _global).status = 'expanded';
      this.render();
      return;
    }

    this.render(state.isValid);
  };
  /**
   * When user press `enter` key
   */


  Prompt.prototype.onSubmit = function (state) {
    (this || _global).status = 'answered';

    var choice = (this || _global).opt.choices.where({
      value: state.value
    })[0];

    (this || _global).answer = choice.short || choice.name; // Re-render prompt

    this.render();

    (this || _global).screen.done();

    this.done(state.value);
  };
  /**
   * When user press a key
   */


  Prompt.prototype.onKeypress = function () {
    (this || _global).selectedKey = (this || _global).rl.line.toLowerCase();

    var selected = (this || _global).opt.choices.where({
      key: (this || _global).selectedKey
    })[0];

    if ((this || _global).status === 'expanded') {
      this.render();
    } else {
      this.render(null, selected ? selected.name : null);
    }
  };
  /**
   * Validate the choices
   * @param {Array} choices
   */


  Prompt.prototype.validateChoices = function (choices) {
    var formatError;
    var errors = [];
    var keymap = {};
    choices.filter(Separator.exclude).forEach(function (choice) {
      if (!choice.key || choice.key.length !== 1) {
        formatError = true;
      }

      if (keymap[choice.key]) {
        errors.push(choice.key);
      }

      keymap[choice.key] = true;
      choice.key = String(choice.key).toLowerCase();
    });

    if (formatError) {
      throw new Error('Format error: `key` param must be a single letter and is required.');
    }

    if (keymap.h) {
      throw new Error('Reserved key error: `key` param cannot be `h` - this value is reserved.');
    }

    if (errors.length) {
      throw new Error('Duplicate key error: `key` param must be unique. Duplicates: ' + _.uniq(errors).join(', '));
    }
  };
  /**
   * Generate a string out of the choices keys
   * @param  {Array}  choices
   * @param  {Number} defaultIndex - the choice index to capitalize
   * @return {String} The rendered choices key string
   */


  Prompt.prototype.generateChoicesString = function (choices, defaultIndex) {
    var defIndex = 0;

    if (_.isNumber(defaultIndex) && (this || _global).opt.choices.getChoice(defaultIndex)) {
      defIndex = defaultIndex;
    }

    var defStr = (this || _global).opt.choices.pluck('key');

    (this || _global).rawDefault = defStr[defIndex];
    defStr[defIndex] = String(defStr[defIndex]).toUpperCase();
    return defStr.join('');
  };
  /**
   * Function for rendering checkbox choices
   * @param  {String} pointer Selected key
   * @return {String}         Rendered content
   */


  function renderChoices(choices, pointer) {
    var output = '';
    choices.forEach(function (choice) {
      output += '\n  ';

      if (choice.type === 'separator') {
        output += ' ' + choice;
        return;
      }

      var choiceStr = choice.key + ') ' + choice.name;

      if (pointer === choice.key) {
        choiceStr = chalk.cyan(choiceStr);
      }

      output += choiceStr;
    });
    return output;
  }

  return exports;
}