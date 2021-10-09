import { dew as _indexDewDew } from "array-back/index.dew.js";
import { dew as _optionListDewDew } from "./lib/section/option-list.dew.js";
import { dew as _contentDewDew } from "./lib/section/content.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * @module command-line-usage
   */

  /**
   * Generates a usage guide suitable for a command-line app.
   * @param {Section|Section[]} - One or more section objects ({@link module:command-line-usage~content} or {@link module:command-line-usage~optionList}).
   * @returns {string}
   * @alias module:command-line-usage
   */
  function commandLineUsage(sections) {
    const arrayify = _indexDewDew();

    sections = arrayify(sections);

    if (sections.length) {
      const OptionList = _optionListDewDew();

      const ContentSection = _contentDewDew();

      const output = sections.map(section => {
        if (section.optionList) {
          return new OptionList(section);
        } else {
          return new ContentSection(section);
        }
      });
      return '\n' + output.join('\n');
    } else {
      return '';
    }
  }

  exports = commandLineUsage;
  return exports;
}