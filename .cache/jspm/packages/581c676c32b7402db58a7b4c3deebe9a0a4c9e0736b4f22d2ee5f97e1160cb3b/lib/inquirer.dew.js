import { dew as _separatorDewDew } from "./objects/separator.dew.js";
import { dew as _bottomBarDewDew } from "./ui/bottom-bar.dew.js";
import { dew as _promptDewDew } from "./ui/prompt.dew.js";
import { dew as _listDewDew } from "./prompts/list.dew.js";
import { dew as _inputDewDew } from "./prompts/input.dew.js";
import { dew as _confirmDewDew } from "./prompts/confirm.dew.js";
import { dew as _rawlistDewDew } from "./prompts/rawlist.dew.js";
import { dew as _expandDewDew } from "./prompts/expand.dew.js";
import { dew as _checkboxDewDew } from "./prompts/checkbox.dew.js";
import { dew as _passwordDewDew } from "./prompts/password.dew.js";
import { dew as _editorDewDew } from "./prompts/editor.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Inquirer.js
   * A collection of common interactive command line user interfaces.
   */
  var inquirer = exports;
  /**
   * Client interfaces
   */

  inquirer.prompts = {};
  inquirer.Separator = _separatorDewDew();
  inquirer.ui = {
    BottomBar: _bottomBarDewDew(),
    Prompt: _promptDewDew()
  };
  /**
   * Create a new self-contained prompt module.
   */

  inquirer.createPromptModule = function (opt) {
    var promptModule = function (questions) {
      var ui = new inquirer.ui.Prompt(promptModule.prompts, opt);
      var promise = ui.run(questions); // Monkey patch the UI on the promise object so
      // that it remains publicly accessible.

      promise.ui = ui;
      return promise;
    };

    promptModule.prompts = {};
    /**
     * Register a prompt type
     * @param {String} name     Prompt type name
     * @param {Function} prompt Prompt constructor
     * @return {inquirer}
     */

    promptModule.registerPrompt = function (name, prompt) {
      promptModule.prompts[name] = prompt;
      return this || _global;
    };
    /**
     * Register the defaults provider prompts
     */


    promptModule.restoreDefaultPrompts = function () {
      this.registerPrompt('list', _listDewDew());
      this.registerPrompt('input', _inputDewDew());
      this.registerPrompt('confirm', _confirmDewDew());
      this.registerPrompt('rawlist', _rawlistDewDew());
      this.registerPrompt('expand', _expandDewDew());
      this.registerPrompt('checkbox', _checkboxDewDew());
      this.registerPrompt('password', _passwordDewDew());
      this.registerPrompt('editor', _editorDewDew());
    };

    promptModule.restoreDefaultPrompts();
    return promptModule;
  };
  /**
   * Public CLI helper interface
   * @param  {Array|Object|rx.Observable} questions - Questions settings array
   * @param  {Function} cb - Callback being passed the user answers
   * @return {inquirer.ui.Prompt}
   */


  inquirer.prompt = inquirer.createPromptModule(); // Expose helper functions on the top level for easiest usage by common users

  inquirer.registerPrompt = function (name, prompt) {
    inquirer.prompt.registerPrompt(name, prompt);
  };

  inquirer.restoreDefaultPrompts = function () {
    inquirer.prompt.restoreDefaultPrompts();
  };

  return exports;
}