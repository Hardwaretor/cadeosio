import { dew as _indexDewDew } from "array-back/index.dew.js";
import _os from "os";
import { dew as _indexDew2Dew } from "chalk/index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  class Section {
    constructor() {
      (this || _global).lines = [];
    }

    add(lines) {
      if (lines) {
        const arrayify = _indexDewDew();

        arrayify(lines).forEach(line => (this || _global).lines.push(line));
      } else {
        (this || _global).lines.push('');
      }
    }

    toString() {
      const os = _os;
      return (this || _global).lines.join(os.EOL);
    }

    header(text) {
      const chalk = _indexDew2Dew();

      if (text) {
        this.add(chalk.underline.bold(text));
        this.add();
      }
    }

  }

  exports = Section;
  return exports;
}