import _util from "util";
import { dew as _indexDewDew } from "chalk/index.dew.js";
import { dew as _indexDew2Dew } from "external-editor/index.dew.js";
import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _eventsDewDew } from "../utils/events.dew.js";
import { dew as _indexDew3Dew } from "rx/index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * `editor` type prompt
   */
  var util = _util;

  var chalk = _indexDewDew();

  var ExternalEditor = _indexDew2Dew();

  var Base = _baseDewDew();

  var observe = _eventsDewDew();

  var rx = _indexDew3Dew();
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
    (this || _global).editorResult = new rx.Subject(); // Open Editor on "line" (Enter Key)

    var events = observe((this || _global).rl);
    (this || _global).lineSubscription = events.line.forEach((this || _global).startExternalEditor.bind(this || _global)); // Trigger Validation when editor closes

    var validation = this.handleSubmitEvents((this || _global).editorResult);
    validation.success.forEach((this || _global).onEnd.bind(this || _global));
    validation.error.forEach((this || _global).onError.bind(this || _global)); // Prevents default from being printed on screen (can look weird with multiple lines)

    (this || _global).currentText = (this || _global).opt.default;
    (this || _global).opt.default = null; // Init

    this.render();
    return this || _global;
  };
  /**
   * Render the prompt to screen
   * @return {Prompt} self
   */


  Prompt.prototype.render = function (error) {
    var bottomContent = '';
    var message = this.getQuestion();

    if ((this || _global).status === 'answered') {
      message += chalk.dim('Received');
    } else {
      message += chalk.dim('Press <enter> to launch your preferred editor.');
    }

    if (error) {
      bottomContent = chalk.red('>> ') + error;
    }

    (this || _global).screen.render(message, bottomContent);
  };
  /**
   * Launch $EDITOR on user press enter
   */


  Prompt.prototype.startExternalEditor = function () {
    // Pause Readline to prevent stdin and stdout from being modified while the editor is showing
    (this || _global).rl.pause();

    ExternalEditor.editAsync((this || _global).currentText, (this || _global).endExternalEditor.bind(this || _global));
  };

  Prompt.prototype.endExternalEditor = function (error, result) {
    (this || _global).rl.resume();

    if (error) {
      (this || _global).editorResult.onError(error);
    } else {
      (this || _global).editorResult.onNext(result);
    }
  };

  Prompt.prototype.onEnd = function (state) {
    (this || _global).editorResult.dispose();

    (this || _global).lineSubscription.dispose();

    (this || _global).answer = state.value;
    (this || _global).status = 'answered'; // Re-render prompt

    this.render();

    (this || _global).screen.done();

    this.done((this || _global).answer);
  };

  Prompt.prototype.onError = function (state) {
    this.render(state.isValid);
  };

  return exports;
}