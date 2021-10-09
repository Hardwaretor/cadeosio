import { dew as _indexDewDew } from "lodash/index.dew.js";
import { dew as _indexDew2Dew } from "mute-stream/index.dew.js";
import _readline from "readline";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var _ = _indexDewDew();

  var MuteStream = _indexDew2Dew();

  var readline = _readline;
  /**
   * Base interface class other can inherits from
   */

  var UI = exports = function (opt) {
    // Instantiate the Readline interface
    // @Note: Don't reassign if already present (allow test to override the Stream)
    if (!this.rl) {
      this.rl = readline.createInterface(setupReadlineOptions(opt));
    }

    this.rl.resume();
    this.onForceClose = this.onForceClose.bind(this); // Make sure new prompt start on a newline when closing

    this.rl.on('SIGINT', this.onForceClose);
    process.on('exit', this.onForceClose);
  };
  /**
   * Handle the ^C exit
   * @return {null}
   */


  UI.prototype.onForceClose = function () {
    this.close();
    console.log('\n'); // Line return
  };
  /**
   * Close the interface and cleanup listeners
   */


  UI.prototype.close = function () {
    // Remove events listeners
    this.rl.removeListener('SIGINT', this.onForceClose);
    process.removeListener('exit', this.onForceClose); // Restore prompt functionnalities

    this.rl.output.unmute(); // Close the readline

    this.rl.output.end();
    this.rl.pause();
    this.rl.close();
  };

  function setupReadlineOptions(opt) {
    opt = opt || {}; // Default `input` to stdin

    var input = opt.input || process.stdin; // Add mute capabilities to the output

    var ms = new MuteStream();
    ms.pipe(opt.output || process.stdout);
    var output = ms;
    return _.extend({
      terminal: true,
      input: input,
      output: output
    }, _.omit(opt, ['input', 'output']));
  }

  return exports;
}