import { dew as _indexDewDew } from "readable-stream/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const {
    Writable
  } = _indexDewDew();
  /**
   * TODO: add class description.
   * @type {ExceptionStream}
   * @extends {Writable}
   */


  exports = class ExceptionStream extends Writable {
    /**
     * Constructor function for the ExceptionStream responsible for wrapping a
     * TransportStream; only allowing writes of `info` objects with
     * `info.exception` set to true.
     * @param {!TransportStream} transport - Stream to filter to exceptions
     */
    constructor(transport) {
      super({
        objectMode: true
      });

      if (!transport) {
        throw new Error('ExceptionStream requires a TransportStream instance.');
      } // Remark (indexzero): we set `handleExceptions` here because it's the
      // predicate checked in ExceptionHandler.prototype.__getExceptionHandlers


      this.handleExceptions = true;
      this.transport = transport;
    }
    /**
     * Writes the info object to our transport instance if (and only if) the
     * `exception` property is set on the info.
     * @param {mixed} info - TODO: add param description.
     * @param {mixed} enc - TODO: add param description.
     * @param {mixed} callback - TODO: add param description.
     * @returns {mixed} - TODO: add return description.
     * @private
     */


    _write(info, enc, callback) {
      if (info.exception) {
        return this.transport.log(info, callback);
      }

      callback();
      return true;
    }

  };
  return exports;
}