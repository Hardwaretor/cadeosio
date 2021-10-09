import { dew as _indexDewDew } from "capture-stack-trace/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var captureStackTrace = _indexDewDew();

  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  exports = function createErrorClass(className, setup) {
    if (typeof className !== 'string') {
      throw new TypeError('Expected className to be a string');
    }

    if (/[^0-9a-zA-Z_$]/.test(className)) {
      throw new Error('className contains invalid characters');
    }

    setup = setup || function (message) {
      this.message = message;
    };

    var ErrorClass = function () {
      Object.defineProperty(this, 'name', {
        configurable: true,
        value: className,
        writable: true
      });
      captureStackTrace(this, this.constructor);
      setup.apply(this, arguments);
    };

    inherits(ErrorClass, Error);
    return ErrorClass;
  };

  return exports;
}