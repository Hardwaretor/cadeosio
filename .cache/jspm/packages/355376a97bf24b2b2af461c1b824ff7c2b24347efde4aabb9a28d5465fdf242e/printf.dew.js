import { dew as _indexDewDew } from "triple-beam/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const {
    MESSAGE
  } = _indexDewDew();

  class Printf {
    constructor(templateFn) {
      this.template = templateFn;
    }

    transform(info) {
      info[MESSAGE] = this.template(info);
      return info;
    }

  }
  /*
   * function printf (templateFn)
   * Returns a new instance of the printf Format that creates an
   * intermediate prototype to store the template string-based formatter
   * function.
   */


  exports = opts => new Printf(opts);

  exports.Printf = exports.Format = Printf;
  return exports;
}