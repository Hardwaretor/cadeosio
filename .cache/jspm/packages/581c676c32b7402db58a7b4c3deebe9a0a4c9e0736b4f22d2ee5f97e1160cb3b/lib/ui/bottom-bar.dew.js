import _util from "util";
import { dew as _indexDewDew } from "through/index.dew.js";
import { dew as _baseUIDewDew } from "./baseUI.dew.js";
import { dew as _readlineDewDew } from "../utils/readline.dew.js";
import { dew as _indexDew2Dew } from "lodash/index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Sticky bottom bar user interface
   */
  var util = _util;

  var through = _indexDewDew();

  var Base = _baseUIDewDew();

  var rlUtils = _readlineDewDew();

  var _ = _indexDew2Dew();
  /**
   * Module exports
   */


  exports = Prompt;
  /**
   * Constructor
   */

  function Prompt(opt) {
    opt || (opt = {});
    Base.apply(this || _global, arguments);
    (this || _global).log = through((this || _global).writeLog.bind(this || _global));
    (this || _global).bottomBar = opt.bottomBar || '';
    this.render();
  }

  util.inherits(Prompt, Base);
  /**
   * Render the prompt to screen
   * @return {Prompt} self
   */

  Prompt.prototype.render = function () {
    this.write((this || _global).bottomBar);
    return this || _global;
  };

  Prompt.prototype.clean = function () {
    rlUtils.clearLine((this || _global).rl, (this || _global).bottomBar.split('\n').length);
    return this || _global;
  };
  /**
   * Update the bottom bar content and rerender
   * @param  {String} bottomBar Bottom bar content
   * @return {Prompt}           self
   */


  Prompt.prototype.updateBottomBar = function (bottomBar) {
    (this || _global).bottomBar = bottomBar;
    rlUtils.clearLine((this || _global).rl, 1);

    (this || _global).rl.output.unmute();

    this.clean().render();

    (this || _global).rl.output.mute();

    return this || _global;
  };
  /**
   * Rerender the prompt
   * @return {Prompt} self
   */


  Prompt.prototype.writeLog = function (data) {
    rlUtils.clearLine((this || _global).rl, 1);

    (this || _global).rl.output.write(this.enforceLF(data.toString()));

    return this.render();
  };
  /**
   * Make sure line end on a line feed
   * @param  {String} str Input string
   * @return {String}     The input string with a final line feed
   */


  Prompt.prototype.enforceLF = function (str) {
    return str.match(/[\r\n]$/) ? str : str + '\n';
  };
  /**
   * Helper for writing message in Prompt
   * @param {Prompt} prompt  - The Prompt object that extends tty
   * @param {String} message - The message to be output
   */


  Prompt.prototype.write = function (message) {
    var msgLines = message.split(/\n/);
    (this || _global).height = msgLines.length; // Write message to screen and setPrompt to control backspace

    (this || _global).rl.setPrompt(_.last(msgLines));

    if ((this || _global).rl.output.rows === 0 && (this || _global).rl.output.columns === 0) {
      /* When it's a tty through serial port there's no terminal info and the render will malfunction,
         so we need enforce the cursor to locate to the leftmost position for rendering. */
      rlUtils.left((this || _global).rl, message.length + (this || _global).rl.line.length);
    }

    (this || _global).rl.output.write(message);
  };

  return exports;
}