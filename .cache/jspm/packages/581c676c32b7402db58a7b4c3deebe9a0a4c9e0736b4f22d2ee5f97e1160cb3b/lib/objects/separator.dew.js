import { dew as _indexDewDew } from "chalk/index.dew.js";
import { dew as _indexDew2Dew } from "figures/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var chalk = _indexDewDew();

  var figures = _indexDew2Dew();
  /**
   * Separator object
   * Used to space/separate choices group
   * @constructor
   * @param {String} line   Separation line content (facultative)
   */


  var Separator = exports = function (line) {
    this.type = 'separator';
    this.line = chalk.dim(line || new Array(15).join(figures.line));
  };
  /**
   * Helper function returning false if object is a separator
   * @param  {Object} obj object to test against
   * @return {Boolean}    `false` if object is a separator
   */


  Separator.exclude = function (obj) {
    return obj.type !== 'separator';
  };
  /**
   * Stringify separator
   * @return {String} the separator display string
   */


  Separator.prototype.toString = function () {
    return this.line;
  };

  return exports;
}