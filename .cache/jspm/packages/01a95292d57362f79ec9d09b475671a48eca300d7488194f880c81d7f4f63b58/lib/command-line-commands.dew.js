import { dew as _indexDewDew } from "array-back/index.dew.js";
import { dew as _optionDewDew } from "./option.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  /**
   * @module command-line-commands
   * @example
   * const commandLineCommands = require('command-line-commands')
   */
  exports = commandLineCommands;
  /**
   * Parses the `argv` value supplied (or `process.argv` by default), extracting and returning the `command` and remainder of `argv`. The command will be the first value in the `argv` array unless it is an option (e.g. `--help`).
   *
   * @param {string|string[]} - One or more command strings, one of which the user must supply. Include `null` to represent "no command" (effectively making a command optional).
   * @param [argv] {string[]} - An argv array, defaults to the global `process.argv` if not supplied.
   * @returns {{ command: string, argv: string[] }}
   * @throws `INVALID_COMMAND` - user supplied a command not specified in `commands`.
   * @alias module:command-line-commands
   */

  function commandLineCommands(commands, argv) {
    const arrayify = _indexDewDew();

    const option = _optionDewDew();

    if (!commands || Array.isArray(commands) && !commands.length) {
      throw new Error('Please supply one or more commands');
    }

    if (argv) {
      argv = arrayify(argv);
    } else {
      /* if no argv supplied, assume we are parsing process.argv. */

      /* never modify the global process.argv directly. */
      argv = process.argv.slice(0);
      argv.splice(0, 2);
    }
    /* the command is the first arg, unless it's an option (e.g. --help) */


    const command = option.isOption(argv[0]) || !argv.length ? null : argv.shift();

    if (arrayify(commands).indexOf(command) === -1) {
      const err = new Error('Command not recognised: ' + command);
      err.command = command;
      err.name = 'INVALID_COMMAND';
      throw err;
    }

    return {
      command: command,
      argv: argv
    };
  }

  return exports;
}