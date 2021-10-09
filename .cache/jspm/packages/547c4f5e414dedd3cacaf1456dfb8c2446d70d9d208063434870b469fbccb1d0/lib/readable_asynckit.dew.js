import { dew as _streamifyDewDew } from "./streamify.dew.js";
import { dew as _deferDewDew } from "./defer.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var streamify = _streamifyDewDew(),
      defer = _deferDewDew(); // API


  exports = ReadableAsyncKit;
  /**
   * Base constructor for all streams
   * used to hold properties/methods
   */

  function ReadableAsyncKit() {
    ReadableAsyncKit.super_.apply(this || _global, arguments); // list of active jobs

    (this || _global).jobs = {}; // add stream methods

    (this || _global).destroy = destroy;
    (this || _global)._start = _start;
    (this || _global)._read = _read;
  }
  /**
   * Destroys readable stream,
   * by aborting outstanding jobs
   *
   * @returns {void}
   */


  function destroy() {
    if ((this || _global).destroyed) {
      return;
    }

    (this || _global).destroyed = true;

    if (typeof (this || _global).terminator == 'function') {
      this.terminator();
    }
  }
  /**
   * Starts provided jobs in async manner
   *
   * @private
   */


  function _start() {
    // first argument – runner function
    var runner = arguments[0] // take away first argument
    ,
        args = Array.prototype.slice.call(arguments, 1) // second argument - input data
    ,
        input = args[0] // last argument - result callback
    ,
        endCb = streamify.callback.call(this || _global, args[args.length - 1]);
    args[args.length - 1] = endCb; // third argument - iterator

    args[1] = streamify.iterator.call(this || _global, args[1]); // allow time for proper setup

    defer(function () {
      if (!(this || _global).destroyed) {
        (this || _global).terminator = runner.apply(null, args);
      } else {
        endCb(null, Array.isArray(input) ? [] : {});
      }
    }.bind(this || _global));
  }
  /**
   * Implement _read to comply with Readable streams
   * Doesn't really make sense for flowing object mode
   *
   * @private
   */


  function _read() {}

  return exports;
}