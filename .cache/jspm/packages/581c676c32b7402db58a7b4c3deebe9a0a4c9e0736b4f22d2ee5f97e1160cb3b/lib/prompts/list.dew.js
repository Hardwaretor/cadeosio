import { dew as _indexDewDew } from "lodash/index.dew.js";
import _util from "util";
import { dew as _indexDew2Dew } from "chalk/index.dew.js";
import { dew as _indexDew3Dew } from "figures/index.dew.js";
import { dew as _indexDew4Dew } from "cli-cursor/index.dew.js";
import { dew as _indexDew5Dew } from "run-async/index.dew.js";
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

  var figures = _indexDew3Dew();

  var cliCursor = _indexDew4Dew();

  var runAsync = _indexDew5Dew();

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

    (this || _global).firstRender = true;
    (this || _global).selected = 0;
    var def = (this || _global).opt.default; // Default being a Number

    if (_.isNumber(def) && def >= 0 && def < (this || _global).opt.choices.realLength) {
      (this || _global).selected = def;
    } // Default being a String


    if (_.isString(def)) {
      (this || _global).selected = (this || _global).opt.choices.pluck('value').indexOf(def);
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
    (this || _global).done = cb;
    var self = this || _global;
    var events = observe((this || _global).rl);
    events.normalizedUpKey.takeUntil(events.line).forEach((this || _global).onUpKey.bind(this || _global));
    events.normalizedDownKey.takeUntil(events.line).forEach((this || _global).onDownKey.bind(this || _global));
    events.numberKey.takeUntil(events.line).forEach((this || _global).onNumberKey.bind(this || _global));
    events.line.take(1).map((this || _global).getCurrentValue.bind(this || _global)).flatMap(function (value) {
      return runAsync(self.opt.filter)(value).catch(function (err) {
        return err;
      });
    }).forEach((this || _global).onSubmit.bind(this || _global)); // Init the prompt

    cliCursor.hide();
    this.render();
    return this || _global;
  };
  /**
   * Render the prompt to screen
   * @return {Prompt} self
   */


  Prompt.prototype.render = function () {
    // Render question
    var message = this.getQuestion();

    if ((this || _global).firstRender) {
      message += chalk.dim('(Use arrow keys)');
    } // Render choices or answer depending on the state


    if ((this || _global).status === 'answered') {
      message += chalk.cyan((this || _global).opt.choices.getChoice((this || _global).selected).short);
    } else {
      var choicesStr = listRender((this || _global).opt.choices, (this || _global).selected);

      var indexPosition = (this || _global).opt.choices.indexOf((this || _global).opt.choices.getChoice((this || _global).selected));

      message += '\n' + (this || _global).paginator.paginate(choicesStr, indexPosition, (this || _global).opt.pageSize);
    }

    (this || _global).firstRender = false;

    (this || _global).screen.render(message);
  };
  /**
   * When user press `enter` key
   */


  Prompt.prototype.onSubmit = function (value) {
    (this || _global).status = 'answered'; // Rerender prompt

    this.render();

    (this || _global).screen.done();

    cliCursor.show();
    this.done(value);
  };

  Prompt.prototype.getCurrentValue = function () {
    return (this || _global).opt.choices.getChoice((this || _global).selected).value;
  };
  /**
   * When user press a key
   */


  Prompt.prototype.onUpKey = function () {
    var len = (this || _global).opt.choices.realLength;
    (this || _global).selected = (this || _global).selected > 0 ? (this || _global).selected - 1 : len - 1;
    this.render();
  };

  Prompt.prototype.onDownKey = function () {
    var len = (this || _global).opt.choices.realLength;
    (this || _global).selected = (this || _global).selected < len - 1 ? (this || _global).selected + 1 : 0;
    this.render();
  };

  Prompt.prototype.onNumberKey = function (input) {
    if (input <= (this || _global).opt.choices.realLength) {
      (this || _global).selected = input - 1;
    }

    this.render();
  };
  /**
   * Function for rendering list choices
   * @param  {Number} pointer Position of the pointer
   * @return {String}         Rendered content
   */


  function listRender(choices, pointer) {
    var output = '';
    var separatorOffset = 0;
    choices.forEach(function (choice, i) {
      if (choice.type === 'separator') {
        separatorOffset++;
        output += '  ' + choice + '\n';
        return;
      }

      if (choice.disabled) {
        separatorOffset++;
        output += '  - ' + choice.name;
        output += ' (' + (_.isString(choice.disabled) ? choice.disabled : 'Disabled') + ')';
        output += '\n';
        return;
      }

      var isSelected = i - separatorOffset === pointer;
      var line = (isSelected ? figures.pointer + ' ' : '  ') + choice.name;

      if (isSelected) {
        line = chalk.cyan(line);
      }

      output += line + ' \n';
    });
    return output.replace(/\n$/, '');
  }

  return exports;
}