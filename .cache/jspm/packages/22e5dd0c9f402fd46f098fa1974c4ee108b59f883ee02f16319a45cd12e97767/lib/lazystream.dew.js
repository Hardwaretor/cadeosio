import _util from "util";
import { dew as _passthroughDewDew } from "readable-stream/passthrough.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var util = _util;

  var PassThrough = _passthroughDewDew();

  exports = {
    Readable: Readable,
    Writable: Writable
  };
  util.inherits(Readable, PassThrough);
  util.inherits(Writable, PassThrough); // Patch the given method of instance so that the callback
  // is executed once, before the actual method is called the
  // first time.

  function beforeFirstCall(instance, method, callback) {
    instance[method] = function () {
      delete instance[method];
      callback.apply(this || _global, arguments);
      return (this || _global)[method].apply(this || _global, arguments);
    };
  }

  function Readable(fn, options) {
    if (!((this || _global) instanceof Readable)) return new Readable(fn, options);
    PassThrough.call(this || _global, options);
    beforeFirstCall(this || _global, '_read', function () {
      var source = fn.call(this || _global, options);

      var emit = (this || _global).emit.bind(this || _global, 'error');

      source.on('error', emit);
      source.pipe(this || _global);
    });
    this.emit('readable');
  }

  function Writable(fn, options) {
    if (!((this || _global) instanceof Writable)) return new Writable(fn, options);
    PassThrough.call(this || _global, options);
    beforeFirstCall(this || _global, '_write', function () {
      var destination = fn.call(this || _global, options);

      var emit = (this || _global).emit.bind(this || _global, 'error');

      destination.on('error', emit);
      this.pipe(destination);
    });
    this.emit('writable');
  }

  return exports;
}