import { dew as _indexDewDew } from "triple-beam/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _require = _indexDewDew(),
      MESSAGE = _require.MESSAGE;

  var Printf = function () {
    function Printf(templateFn) {
      _classCallCheck(this, Printf);

      this.template = templateFn;
    }

    _createClass(Printf, [{
      key: 'transform',
      value: function transform(info) {
        info[MESSAGE] = this.template(info);
        return info;
      }
    }]);

    return Printf;
  }();
  /*
   * function printf (templateFn)
   * Returns a new instance of the printf Format that creates an
   * intermediate prototype to store the template string-based formatter
   * function.
   */


  exports = function (opts) {
    return new Printf(opts);
  };

  exports.Printf = exports.Format = Printf;
  return exports;
}