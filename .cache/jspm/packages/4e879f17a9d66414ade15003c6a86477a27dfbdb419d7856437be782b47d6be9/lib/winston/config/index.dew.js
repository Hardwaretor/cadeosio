import { dew as _indexDewDew } from "logform/index.dew.js";
import { dew as _indexDew2Dew } from "triple-beam/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const logform = _indexDewDew();

  const {
    configs
  } = _indexDew2Dew();
  /**
   * Export config set for the CLI.
   * @type {Object}
   */


  exports.cli = logform.levels(configs.cli);
  /**
   * Export config set for npm.
   * @type {Object}
   */

  exports.npm = logform.levels(configs.npm);
  /**
   * Export config set for the syslog.
   * @type {Object}
   */

  exports.syslog = logform.levels(configs.syslog);
  /**
   * Hoist addColors from logform where it was refactored into in winston@3.
   * @type {Object}
   */

  exports.addColors = logform.levels;
  return exports;
}