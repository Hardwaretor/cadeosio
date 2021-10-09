import { dew as _indexDewDew } from "is-stream/index.dew.js";
import { dew as _indexDew2Dew } from "triple-beam/index.dew.js";
import _os from "os";
import { dew as _indexDew3Dew } from "winston-transport/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const isStream = _indexDewDew();

  const {
    MESSAGE
  } = _indexDew2Dew();

  const os = _os;

  const TransportStream = _indexDew3Dew();
  /**
   * Transport for outputting to any arbitrary stream.
   * @type {Stream}
   * @extends {TransportStream}
   */


  exports = class Stream extends TransportStream {
    /**
     * Constructor function for the Console transport object responsible for
     * persisting log messages and metadata to a terminal or TTY.
     * @param {!Object} [options={}] - Options for this instance.
     */
    constructor(options = {}) {
      super(options);

      if (!options.stream || !isStream(options.stream)) {
        throw new Error('options.stream is required.');
      } // We need to listen for drain events when write() returns false. This can
      // make node mad at times.


      this._stream = options.stream;

      this._stream.setMaxListeners(Infinity);

      this.isObjectMode = options.stream._writableState.objectMode;
      this.eol = options.eol || os.EOL;
    }
    /**
     * Core logging method exposed to Winston.
     * @param {Object} info - TODO: add param description.
     * @param {Function} callback - TODO: add param description.
     * @returns {undefined}
     */


    log(info, callback) {
      setImmediate(() => this.emit('logged', info));

      if (this.isObjectMode) {
        this._stream.write(info);

        if (callback) {
          callback(); // eslint-disable-line callback-return
        }

        return;
      }

      this._stream.write(`${info[MESSAGE]}${this.eol}`);

      if (callback) {
        callback(); // eslint-disable-line callback-return
      }

      return;
    }

  };
  return exports;
}